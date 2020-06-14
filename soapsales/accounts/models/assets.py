import datetime
from decimal import Decimal as D
from functools import reduce
from django.db import models
from django.db.models import Q
from django.utils import timezone
from calendar import monthrange
from .journalize import JournalEntry



DEPRECIATION_METHOD = [
    (0, 'Straight Line'),
    (1, 'Sum of years digits'),
    (2, 'Double Declining balance')
]
asset_choices = ['Land', 'Buildings', 'Vehicles', 'LeaseHold Improvements',
    'Furniture and Fixtures', 'Equipment']
ASSET_CHOICES = [(asset_choices.index(i), i) for i in asset_choices]

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
    category = models.IntegerField(choices=ASSET_CHOICES)
    initial_value  = models.DecimalField(max_digits=16, decimal_places=2)
    credit_account = models.ForeignKey('accounts.Account',
        on_delete=models.SET_DEFAULT, default=1000)
    depreciation_period = models.IntegerField()#years
    init_date = models.DateField()
    depreciation_method = models.IntegerField(default=0, choices=DEPRECIATION_METHOD)
    salvage_value = models.DecimalField(max_digits=16, decimal_places=2)
    created_by = models.ForeignKey('employees.Employee', default=1, on_delete=models.SET_NULL, null=True)
    entry = models.ForeignKey("accounts.JournalEntry", null=True, on_delete=models.SET_NULL)



    def save(self, *args, **kwargs):
        if self.entry is None:
            self.create_entry()
        super(Asset, self).save(*args, **kwargs)


    def create_asset_account(self):
        n_assets = Asset.objects.all().count() + 1
        self.credit_account = Account.objects.create(
                name= "Asset: %s" % self.name,
                initial_balance =0,
                order  = 2,
                id= 3100 + n_assets,
                is_active = True,
                is_contra = False,
                description = 'Account which represents credit extended to an Asset',
            )

    def __str__(self):
        return self.name

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
            self.credit_account)

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
        return dict(ASSET_CHOICES)[self.category]

    @property
    def annual_depreciation(self):
        if self.depreciation_period > 0:
            depreciable_value = self.initial_value - self.salvage_value
            return depreciable_value / self.depreciation_period
        return 0

    @property
    def daily_depreciation(self):
        return self.annual_depreciation / D(365.0)

    # def depreciation_for_month(self, month, year):
    #     month_length = monthrange(year, month)[1]
    #     return month_length * self.daily_depreciation

    @property
    def total_depreciation(self):
        return self._timedelta * self.annual_depreciation

    @property
    def current_value(self):
        return self.initial_value - self.total_depreciation

    def __str__(self):
        return self.name
