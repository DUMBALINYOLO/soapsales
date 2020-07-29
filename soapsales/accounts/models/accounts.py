
from __future__ import unicode_literals
from django.db import models
from django.utils import timezone
from accounts.utils import format_currency
from .enums import AccountCategories, AccountClassifications
from basedata.const import (
        ACCOUNT_TYPES_CATEGORY_CHOICES,
        ACCOUNT_TYPES_CLASSIFICATION_CHOICES 
    )

NUM_ACCOUNTS_PER_ACCOUNT_TYPE = 100

class AccountTypeManager(models.Manager):
    def get_by_natural_key(self, name):
        return self.get(name=name)

class AccountType(models.Model):
    class Meta:
        ordering = ['order']

    objects = AccountTypeManager()

    category = models.IntegerField(choices=ACCOUNT_TYPES_CATEGORY_CHOICES)

    classification = models.IntegerField(choices=ACCOUNT_TYPES_CLASSIFICATION_CHOICES)

    name = models.CharField(max_length=100, unique=True)
    order = models.IntegerField(unique=True, verbose_name='order Value (1 represents highest order)')
    created_date = models.DateTimeField(auto_now_add=True, verbose_name='date Created')

    def __str__(self):
        return "{0}: {1}".format(self.order, self.name)

    def natural_key(self):
        return (self.name,)

    @property 
    def is_debit(self):
        return True if (self.category == 0 or self.category == 4) else False

    def starting_number(self):
        return self.order * NUM_ACCOUNTS_PER_ACCOUNT_TYPE

class AccountManager(models.Manager):
    def get_by_natural_key(self, name):
        return self.get(name=name)

class Account(models.Model):
    class Meta:
        ordering = ['account_type__order', 'order']

    objects = AccountManager()

    account_type = models.ForeignKey(AccountType, blank=True, null=True, on_delete=models.PROTECT)
    name = models.CharField(max_length=100, blank=True, unique=True)
    description = models.CharField(max_length=200, blank=True)
    order = models.PositiveIntegerField(verbose_name='order Relative to Account Type (0 represents highest order)')
    initial_balance = models.DecimalField(max_digits=20, decimal_places=2, default=0)
    created_date = models.DateTimeField(auto_now_add=True, verbose_name='date Created')
    is_active = models.BooleanField(default=False, verbose_name="active?")
    is_contra = models.BooleanField(default=False, verbose_name="contra?")
    account_number = models.CharField(max_length=255, null=True, default=None)


    def save(self, *args, **kwargs):
        if not self.account_number:
           prefix = 'ACN{}'.format(timezone.now().strftime('%y%m%d'))
           prev_instances = self.__class__.objects.filter(account_number__contains=prefix)
           if prev_instances.exists():
              last_instance_id = prev_instances.last().account_number[-4:]
              self.account_number = prefix+'{0:04d}'.format(int(last_instance_id)+1)
           else:
               self.account_number = prefix+'{0:04d}'.format(1)
        super(Account, self).save(*args, **kwargs)

    def __str__(self):
        return self.name

    def natural_key(self):
        return (self.name,)

    def is_debit(self):
        if self.is_contra:
            return not self.account_type.is_debit
        # return self.account_type.is_debit

    def account_number(self):
        return (self.account_type.order * NUM_ACCOUNTS_PER_ACCOUNT_TYPE) + self.order

    def get_transaction_history(self):
        transactions = []
        post_balance = self.initial_balance
        for t in self.transactions.all():
            if t.journal_entry.is_approved:
                post_balance += (t.value * pow(-1, int(self.is_debit() ^ t.is_debit)))
                transactions.append({
                    'balance': format_currency(post_balance),
                    'is_debit': t.is_debit,
                    'journal_entry_id': t.journal_entry.id,
                    'date': t.journal_entry.date,
                    'journal_entry_description': t.journal_entry.description,
                    'value': format_currency(t.value)
                })

        return transactions

    def get_balance(self, as_of=None):
        value = 0
        for t in self.transactions.all():
            if t.journal_entry.is_approved == True and (as_of is None or as_of >= t.date):
                value += t.get_value()
        value *= 1 if(self.is_debit()) else -1
        return self.initial_balance + value
