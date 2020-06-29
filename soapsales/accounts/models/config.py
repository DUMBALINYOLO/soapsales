import datetime
from decimal import Decimal as D

from django.db import models
from django.db.models import Q
from django.utils import timezone
from basedata.models import SoftDeletionModel, SingletonModel


class AccountingSettings(SingletonModel):
    ACCOUNTING_PERIODS = [
        (0, "Annually"),
        (1, "Monthly"),
        (2, "Weekly")
    ]
    start_of_financial_year = models.DateField()
    default_accounting_period = models.PositiveSmallIntegerField(
        choices=ACCOUNTING_PERIODS, default=1)

    default_bookkeeper = models.ForeignKey('accounts.Bookkeeper', null=True,
        blank=True, on_delete=models.SET_NULL)
    equipment_capitalization_limit = models.DecimalField(max_digits=12,
        decimal_places=2,default=0.0)
    is_configured = models.BooleanField(default=False)
    service_hash = models.CharField(max_length=255, default="", blank=True)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)


class Bookkeeper(SoftDeletionModel):
    '''
    mutable
    Model that gives employees access to the bookkeeping function of the
    software such as order creation and the like.'''
    employee = models.ForeignKey('employees.Employee',
        on_delete=models.SET_NULL, null=True, default=1)
    can_create_journals = models.BooleanField(default=False, blank=True)
    can_create_orders_and_invoices = models.BooleanField(default=False, blank=True)
    can_record_expenses = models.BooleanField(default=False, blank=True)
    can_record_assets = models.BooleanField(default=False, blank=True)


    def __str__(self):
        return f'{self.employee.first_name} {self.employee.last_name} {self.employee.id}'


class Tax(SoftDeletionModel):
    '''
    rate immutable, create new tax if tax rate changes
    Used in invoices and payroll, tax is a cost incurred as a
     percentage of income. Will implement more complex tax features as required
    '''
    name = models.CharField(max_length=64)
    rate = models.FloatField()

    def __str__(self):
        return self.name

class Currency(models.Model):
    name = models.CharField(max_length=255)
    symbol = models.CharField(max_length=8)

    class Meta:
        verbose_name = "Currencie"
        verbose_name_plural = "Currencies"

    def __str__(self):
        return self.name
