from django.db import models

from accounts.models import Account, JournalEntry
from decimal import Decimal as D
from basedata.models import SoftDeletionModel
from .receipt import CustomerReceipt

class Payment(SoftDeletionModel):
    '''
        Model represents payments made by credit customers only!
        These transactions are currently implemented to require full payment
        of each invoice. Support for multiple payments for a single invoice
        may be considered as required by clients.
        Information stored include data about the invoice, the amount paid
        and other notable comments

        methods
    ---------
    create_entry - returns the journal entry that debits the customer account
        and credits the sales account. Should also impact tax accounts'''

    PAYMENT_METHODS = [("cash", "Cash" ),
                        ("transfer", "Transfer"),
                        ("debit card", "Debit Card"),
                        ("mobile", "Mobile-Transfer")]
    invoice = models.ForeignKey("invoicing.Invoice",
        on_delete=models.SET_NULL,
        null=True)
    amount_tendered = models.DecimalField(max_digits=16, default= 0, decimal_places=2)
    amount_to_pay = models.DecimalField(max_digits=16, default= 0, decimal_places=2)
    date = models.DateField()
    method = models.CharField(
        max_length=32,
        choices=PAYMENT_METHODS,
        default='transfer')
    reference_number = models.AutoField(primary_key=True)
    sales_rep = models.ForeignKey("invoicing.SalesRepresentative",
        on_delete=models.SET_NULL, null=True,)
    comments = models.TextField(default="Thank you for your business")
    entry = models.ForeignKey('accounts.JournalEntry', null=True, blank=True,
        on_delete=models.SET_NULL)
    receipt = models.ForeignKey(
                            'invoicing.CustomerReceipt', 
                            null=True, 
                            blank=True,
                            on_delete=models.SET_NULL,
                            related_name = 'payments'
                        )



    def save(self, *args, **kwargs):
        if self.entry is None:
            self.create_entry()
        if self.receipt is None:
            self.create_create_customer_receipt()
        super(Payment, self).save(*args, **kwargs)


    def __str__(self):
        return 'PMT' + str(self.pk)

    @property
    def due(self):
        return self.invoice.total - self.amount_to_pay

    @property
    def customer_change(self):
        return self.amount_tendered - self.amount_to_pay

    def create_entry(self):
        '''payment entries credit the customer account and debits the cash book'''
        if self.entry:
            return
        j = JournalEntry.objects.create(
                memo= f'Journal entry for payment #{self.pk} from invoice #{self.invoice.invoice_number}.',
                date=self.date,
                creator = self.sales_rep.employee,
                is_approved = True

            )

        # split into sales tax and sales

        j.simple_entry(
            self.amount,
            self.invoice.customer.account,
            Account.objects.get(name='CASH-IN-CHECKING-ACCOUNT-ONE'),#cash in checking account
        )
        #change invoice status if  fully paid
        if self.invoice.total_due <= 0:
            self.invoice.status = "paid"
        else:
            self.invoice.status = "paid-partially"
        self.entry = j
        self.invoice.save()

    def create_create_customer_receipt(self):
        self.receipt = CustomerReceipt.objects.create(
                sales_rep = self.sales_rep,
                customer = self.invoice.customer,
                comment = f'We are Grateful for your support {self.invoice.customer.name} !!!!!',
                payment_method = self.method,
                amount_paid = self.amount_to_pay,
                amount_tendered =  self.amount_tendered   
            )



