import datetime
from decimal import Decimal as D
from functools import reduce
from django.db import models
from django.db.models import Q
from django.utils import timezone
from calendar import monthrange
from .journalize import JournalEntry
from .accounts import Account
from basedata.const import (
        ASSET_DEPRECIATION_METHOD_CHOICES,
        ASSET_TYPE_CHOICES
    )





#TODO add flexibility to create custom asset accounts

class Asset(models.Model):
    '''
        Represents a resource controlled by the organization from which
        a future financial benefit is expected.
        Data regarding the value and depreciation techniques employed on the
        asset are stored in this model.
        The corresponding journal entry is supplied on creation.
    '''
    name = models.CharField(max_length=128)
    description = models.TextField(blank=True)
    category = models.CharField(choices=ASSET_TYPE_CHOICES, max_length=128)
    initial_value  = models.DecimalField(max_digits=16, decimal_places=2)
    credit_account = models.ForeignKey('accounts.Account',
        on_delete=models.SET_DEFAULT, default=1000)
    depreciation_period = models.IntegerField()#years
    init_date = models.DateField()
    depreciation_method = models.IntegerField(default=0, choices=ASSET_DEPRECIATION_METHOD_CHOICES)
    salvage_value = models.DecimalField(max_digits=16, decimal_places=2)
    created_by = models.ForeignKey('employees.Employee', default=1, on_delete=models.SET_NULL, null=True)
    entry = models.ForeignKey("accounts.JournalEntry", null=True, on_delete=models.SET_NULL)
    reference_number = models.CharField(max_length=255, null=True, default=None)



    def save(self, *args, **kwargs):
        if self.entry is None:
            self.create_entry()
        if not self.reference_number:
           prefix = 'ASSET:{}'.format(timezone.now().strftime('%y%m%d'))
           prev_instances = self.__class__.objects.filter(reference_number__contains=prefix)
           if prev_instances.exists():
              last_instance_id = prev_instances.last().reference_number[-4:]
              self.reference_number = prefix+'{0:04d}'.format(int(last_instance_id)+1)
           else:
               self.reference_number = prefix+'{0:04d}'.format(1)
        super(Asset, self).save(*args, **kwargs)


    def create_entry(self):
        '''debits the debit account and credits the appropriate asset account'''

        j = JournalEntry.objects.create(
            is_approved = True,
            date = datetime.date.today(),
            memo =  "Asset added. Name: %s. Description: %s " % (
                self.name, self.description
            ),
            creator = self.created_by,# not ideal general journal

        )
        j.simple_entry(self.initial_value,
            self.credit_account,# defaults to cash account
            Account.objects.get(name='ASSET-ACCOUNT-NUMBER-ONE'))

    @property
    def salvage_date(self):
        return self.init_date + datetime.timedelta(
            days=365 * self.depreciation_period)

    def salvage(self):
        #removes asset from the books and credits the appropriate account
        pass

    @property
    def _timedelta(self):
        '''returns the duration since the asset was created in years'''
        return int((datetime.date.today() - self.init_date).days / 365)

    @property
    def category_string(self):
        return dict(ASSET_TYPE_CHOICES)[self.category]

    @property
    def annual_depreciation(self):
        if self.depreciation_period > 0:
            depreciable_value = self.initial_value - self.salvage_value
            return depreciable_value / self.depreciation_period
        return 0

    @property
    def daily_depreciation(self):
        return self.annual_depreciation / D(365.0)

    def depreciation_for_month(self, month, year):
        month_length = monthrange(year, month)[1]
        return month_length * self.daily_depreciation

    @property
    def total_depreciation(self):
        return self._timedelta * self.annual_depreciation

    @property
    def current_value(self):
        return self.initial_value - self.total_depreciation

    def __str__(self):
        return self.name
