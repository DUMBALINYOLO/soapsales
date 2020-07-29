import datetime
from decimal import Decimal as D
from functools import reduce
from django.db import models
from django.db.models import Q
from django.utils import timezone
from .config import AccountingSettings
from .journalize import JournalEntry




class Bill(models.Model):
    vendor = models.ForeignKey('inventory.Supplier',
        on_delete=models.SET_NULL, null=True)
    date = models.DateField()
    reference = models.CharField(max_length=255, blank=True)
    due = models.DateField()
    memo = models.TextField(blank=True)
    entry= models.ForeignKey('accounts.Journalentry',
        on_delete=models.SET_NULL,
        blank=True,
        null=True)
    bill_number = models.CharField(max_length=255, null=True, default=None)

    def __str__(self):
        return f'{self.vendor} {self.reference}'

    def save(self, *args, **kwargs):
        if self.entry is None:
            self.create_entry()
        if not self.bill_number:
           prefix = 'BNO{}'.format(timezone.now().strftime('%y%m%d'))
           prev_instances = self.__class__.objects.filter(bill_number__contains=prefix)
           if prev_instances.exists():
              last_instance_id = prev_instances.last().bill_number[-4:]
              self.bill_number = prefix+'{0:04d}'.format(int(last_instance_id)+1)
           else:
               self.bill_number = prefix+'{0:04d}'.format(1)
        super(Bill, self).save(*args, **kwargs)

    @property
    def total(self):
        return sum([i.amount for i in self.lines.all()])

    @property
    def total_payments(self):
        return sum([i.amount for i in self.billpayment_set.all()])


    def create_entry(self):
        n_entries = JournalEntry.objects.all().count()
        settings = AccountingSettings.objects.first()
        j = JournalEntry.objects.create(
            id = (5000 + n_entries + 10) * 10,
            date = datetime.date.today(),
            memo =  "Bill for %s" % self.vendor,
            creator = settings.default_bookkeeper.employee,
            is_approved = True
        )

        j.credit(self.total, self.vendor.account)

        for line in self.lines.all():
            j.debit(line.amount,
                line.debit_account)

        self.entry = j
        # self.save()


class BillLine(models.Model):
    bill = models.ForeignKey('accounts.Bill', related_name="lines", on_delete=models.SET_NULL, null=True)
    debit_account = models.ForeignKey('accounts.Account',
        on_delete=models.SET_NULL, null=True)
    amount = models.DecimalField(max_digits=16, decimal_places=2)

    def __str__(self):
        return self.bill

class BillPayment(models.Model):
    date = models.DateField()
    account = models.ForeignKey(
                        'accounts.Account',
                        on_delete=models.SET_NULL,
                        null=True
                    )
    bill = models.ForeignKey('accounts.Bill',
        on_delete=models.SET_NULL, null=True)
    amount = models.DecimalField(max_digits=16, decimal_places=2)
    memo = models.TextField(blank=True)
    entry= models.ForeignKey('accounts.Journalentry',
        on_delete=models.SET_NULL,
        blank=True,
        null=True)


    def save(self, *args, **kwargs):
        if self.entry is None:
            self.create_entry()
        super(BillPayment, self).save(*args, **kwargs)


    def create_entry(self):
        n_entries = JournalEntry.objects.all().count()
        settings = AccountingSettings.objects.first()
        j = JournalEntry.objects.create(
            id = (9000 + n_entries + 10) * 10,
            date = self.date,
            memo =  f'Bill payment for  a Corresponding Bill {self.bill.id}|| {self.bill.reference}',
            creator = settings.default_bookkeeper.employee,
            is_approved = True
        )

        j.debit(self.amount, self.bill.vendor.account)
        j.credit(self.amount, self.account)
