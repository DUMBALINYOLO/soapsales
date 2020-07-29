
from decimal import Decimal as D

from django.db import models
from django.db.models import Q
import uuid
import random
from django.utils import timezone
import inventory
# from accounts.models import Account

from invoicing.models.invoice import Invoice
from invoicing.models.payment import Payment
from basedata.models import  SoftDeletionModel


class Customer(SoftDeletionModel):
    '''
        The customer model represents business clients to whom products are
        sold. Customers are typically businesses and the fields reflect that
        likelihood. Individuals however can also be represented.
        Customers can have accounts if store credit is extended to them.

    '''
    
    name = models.CharField(max_length=230, blank=True)
    customer_number = models.CharField(max_length=255, null=True, default=None)  
    is_organization = models.BooleanField(default=False)
    is_individual = models.BooleanField(default=False)
    billing_address = models.TextField(default= "", blank=True)
    banking_details = models.TextField(default= "", blank=True)
    account = models.ForeignKey('accounts.Account', on_delete=models.CASCADE,
        null=True)#created in save method
    business_address = models.TextField(blank=True)
    website = models.CharField(max_length=255, blank=True)
    bp_number = models.CharField(max_length=64, blank=True)
    email=models.CharField(max_length=128, blank=True)
    phone = models.CharField(max_length=32, blank=True)

    @property
    def invoices(self):
        return Invoice.objects.filter(customer=self, draft=False, status__in=['invoice', 'paid', 'paid-partially'])

    def __str__(self):
        return self.name

    def create_customer_account(self):
        from accounts.models import Account
        n_customers = Customer.objects.all().count() 
        self.account = Account.objects.create(
                name= "Customer: %s" % self.name,
                initial_balance =0,
                order  = 2,
                id= 1100 + n_customers + 20,
                is_active = False,
                is_contra = False,
                description = 'Account which represents credit extended to a customer',
            )

    def save(self, *args, **kwargs):
        if self.account is None:
            self.create_customer_account()
        if not self.customer_number:
           prefix = 'CUS{}'.format(timezone.now().strftime('%y%m%d'))
           prev_instances = self.__class__.objects.filter(customer_number__contains=prefix)
           if prev_instances.exists():
              last_instance_id = prev_instances.last().customer_number[-4:]
              self.customer_number = prefix+'{0:04d}'.format(int(last_instance_id)+1)
           else:
               self.customer_number = prefix+'{0:04d}'.format(1)
        super(Customer, self).save(*args, **kwargs)




    @property
    def credit_invoices(self):
        return [i for i in self.invoices \
            if i.status in ('invoice', 'paid-partially')]



    @property
    def last_transaction_date(self):
        if not Payment.objects.filter(invoice__customer=self):
            return None
        return Payment.objects.filter(
                invoice__customer=self).latest('date').date

    @property
    def average_days_to_pay(self):
        total_days = 0
        total_full_payments = 0
        for inv in Invoice.objects.filter(customer=self,
                                          draft=False,
                                          status='paid'):
            last_payment_date = inv.payment_set.latest('date').date
            total_days += (last_payment_date - inv.date).days
            total_full_payments += 1

        if total_full_payments == 0:
            return 0
        return total_days / total_full_payments

    def sales_over_period(self, start, end):
        return Invoice.objects.filter(
                draft=False,
                status__in=['invoice', 'paid',' paid-partially'],
                customer=self, date__gte=start,
                                        date__lte=end)

    @property
    def age_list(self):
        #returns a 7 element tuple that enumerates the number of invoices
        # that are, current 0-7 overude 8-14 days and so forth

        age_list = [0, 0, 0, 0, 0, 0]
        for inv in self.credit_invoices:
            if inv.overdue_days == 0:
                age_list[0] += inv.total_due
            elif inv.overdue_days < 8:
                age_list[1] += inv.total_due
            elif inv.overdue_days < 15:
                age_list[2] += inv.total_due
            elif inv.overdue_days < 31:
                age_list[3] += inv.total_due
            elif inv.overdue_days < 61:
                age_list[4] += inv.total_due
            else:
                age_list[5] += inv.total_due

        return age_list

    @property
    def total_accounts_receivable(self):
        return sum([inv.total_due for inv in self.credit_invoices])
