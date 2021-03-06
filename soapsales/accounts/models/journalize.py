
from __future__ import unicode_literals
from django.db import models
from django.utils import timezone
from employees.models import User
from .accounts import Account
from basedata.const import JOURNAL_ENTRY_TYPES_CHOICES
from .enums import *


class TransactionManager(models.Manager):
    def get_by_natural_key(self, journal_entry_date_created, affected_account_name):
        return self.get(journal_entry__date_created=journal_entry_date_created, affected_account__name=affected_account_name)

class Transaction(models.Model):
    class Meta:
        ordering = ['journal_entry__date', 'date']

    objects = TransactionManager()

    affected_account = models.ForeignKey(Account, related_name="transactions", null=True, on_delete=models.PROTECT)
    journal_entry = models.ForeignKey('JournalEntry', related_name="transactions", on_delete=models.PROTECT)
    value = models.DecimalField(max_digits=20, decimal_places=2)
    is_debit = models.BooleanField()
    date = models.DateTimeField(auto_now_add=True)
    reference_number = models.CharField(max_length=255, null=True, default=None)


    def save(self, *args, **kwargs):
        if not self.reference_number:
           prefix = 'TRN{}'.format(timezone.now().strftime('%y%m%d'))
           prev_instances = self.__class__.objects.filter(reference_number__contains=prefix)
           if prev_instances.exists():
              last_instance_id = prev_instances.last().reference_number[-4:]
              self.reference_number = prefix+'{0:04d}'.format(int(last_instance_id)+1)
           else:
               self.reference_number = prefix+'{0:04d}'.format(1)
        super(Transaction, self).save(*args, **kwargs)

    def get_value(self):
        return self.value * 1 if (self.is_debit == True) else self.value * -1



    def __str__(self):
        is_debit = "DEBIT" if (self.is_debit == True) else "CREDIT"

        return "{0:} - Journal Entry {3:03d} - {1:} - ${2:.2f}".format(
            self.affected_account.name, is_debit, self.value, self.journal_entry.pk if self.journal_entry is not None else -1
        )

    def natural_key(self):
        return (self.journal_entry.date_created,) + self.affected_account.natural_key()

    natural_key.dependencies = ['journalize.journalentry', 'accounts.account']

MANAGEMENT_JOURNAL_ENTRY_TYPES = [
    JournalEntryTypes.CLOSING,
    JournalEntryTypes.REVERSING
]

# class JournalEntryManager(models.Manager):
#     def get_by_natural_key(self, date_created, creator_username):
#         return self.get(date_created=date_created, creator__username=creator_username)

class JournalEntry(models.Model):
    class Meta:
        ordering = ['-date', '-date_created']

    # objects = JournalEntryManager()

    entry_type = models.SmallIntegerField(choices=JOURNAL_ENTRY_TYPES_CHOICES, default=0, blank=True, null=True)

    date_created = models.DateTimeField(auto_now_add=True)
    date = models.DateField()
    is_approved = models.NullBooleanField(blank=True)
    memo = models.CharField(max_length=200, null=True, blank=True)
    description = models.CharField(max_length=200, null=True, blank=True)
    creator = models.ForeignKey(
                            User,
                            related_name='creator',
                            on_delete=models.SET_NULL,
                            null=True
                        )
    reference_number = models.CharField(max_length=255, null=True, default=None)

    def is_valid(self):
        balance = 0
        for t in self.transactions.all():
            balance += t.get_value()
        return balance == 0

    def simple_entry(self, value, credit_acc, debit_acc):
        '''
        Moves money between two accounts for the stated amount.
        Args
        =======
        amount - decimal
        credit_acc - account object
        debit_acc - account object

        '''
        self.credit(value, credit_acc)
        self.debit(value, debit_acc)

    def credit(self, value, affected_account):
        Transaction.objects.create(
            journal_entry=self,
            affected_account = affected_account,
            value = value,
            is_debit = False
        )

    def debit(self, value, affected_account):
        Transaction.objects.create(
            journal_entry=self,
            affected_account = affected_account,
            value = value,
            is_debit = True
        )


    def __str__(self):
        return "Journal Entry {0:03d}".format(self.pk)


    def save(self, *args, **kwargs):
        if not self.reference_number:
           prefix = 'JEY{}'.format(timezone.now().strftime('%y%m%d'))
           prev_instances = self.__class__.objects.filter(reference_number__contains=prefix)
           if prev_instances.exists():
              last_instance_id = prev_instances.last().reference_number[-4:]
              self.reference_number = prefix+'{0:04d}'.format(int(last_instance_id)+1)
           else:
               self.reference_number = prefix+'{0:04d}'.format(1)
        super(JournalEntry, self).save(*args, **kwargs)






#         _
# /\___/\/ \
# | O O |  /
# | >u< | |
# |U   U| |
# |     | /
# |M   M|/  0x5351524C
