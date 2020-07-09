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
    date = models.DateTimeField(auto_now_add=True)
    reference = models.CharField(max_length=255, blank=True)
    due = models.DateTimeField(auto_now_add=True)
    memo = models.TextField(blank=True)
    entry= models.ForeignKey('accounts.Journalentry',
        on_delete=models.SET_NULL,
        blank=True,
        null=True)

    def save(self, *args, **kwargs):
        if self.entry is None:
            self.create_entry()
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
            memo =  "Bill payment for  Bill #%s" % self.bill.pk,
            creator = settings.default_bookkeeper.employee,
            is_approved = True
        )

        j.debit(self.amount, self.bill.vendor.account)
        j.credit(self.amount, self.account)
