
import datetime
from decimal import Decimal as D
from functools import reduce
from django.conf import settings
from django.db import models
from django.db.models import Q
from .warehouse import (
                        StorageMedia,
                        WareHouseItem
                    )
from .inventory_management import *
from .debit_note import DebitNoteLine
from basedata.const import INVENTORY_ORDER_STATUS_CHOICES


# TODO i need to separate the order types into product, consumable and
# equipment orders. Each order has its own entries



class Order(models.Model):
    '''
    The record of all purchase orders for inventory of items that
    will eventually be sold or relied upon for the smooth running of the business.
    Contains the necessary data to update
    inventory and update the Purchases Journal.
    An aggregate with the OrderItem class.
    A cash order creates a transaction creation.
    A deferred payment pays on the deferred date.(Not yet implemented)
    A pay on receipt order creates the transaction when receiving a
    goods received voucher.

    properties
    ------------
    total - returns the total value of the items ordered.
    received_total - returns the numerical value of items received
    fully_received - returns a boolean if all the ordered items have
        been received.
    percent_received - is the percentage of the order that has been
        fulfilled by the supplier.


    methods
    -------------
    receive - quickly generates a stock receipt where all items are
        marked fully received
    '''
    validated_by = models.ForeignKey('employees.Employee',
                                    on_delete=models.SET_NULL,
                                    null=True,
                                    blank=True)
    expected_receipt_date = models.DateField()
    date = models.DateField()
    due = models.DateField(blank=True, null=True)
    supplier = models.ForeignKey(
                        'inventory.Supplier',
                        on_delete=models.SET_NULL,
                        null=True,
                        default=1
                    )
    supplier_invoice_number = models.CharField(
                                        max_length=32,
                                        blank=True,
                                        default=""
                                    )
    bill_to = models.CharField(
                            max_length=128,
                            blank=True,
                            default=""
                        )
    ship_to = models.ForeignKey(
                            'inventory.WareHouse',
                            on_delete=models.SET_NULL,
                            null=True
                        )

    tracking_number = models.CharField(
                                max_length=64,
                                blank=True,
                                default=""
                            )
    notes = models.TextField(blank=True)
    status = models.CharField(max_length=24,
        choices=INVENTORY_ORDER_STATUS_CHOICES)
    tax = models.ForeignKey('accounts.Tax',on_delete=models.SET_NULL, 
        null=True, 
       )
    received_to_date = models.FloatField(default=0.0)
    issuing_inventory_controller = models.ForeignKey(
                                        'inventory.InventoryController',
                                        default=1,
                                        on_delete=models.SET_NULL,
                                        null=True
                                    )
    reference_number = models.CharField(max_length=255, null=True, default=None)

    def save(self, *args, **kwargs):
        if not self.reference_number:
           prefix = 'ORDER-{}'.format(timezone.now().strftime('%y%m%d'))
           prev_instances = self.__class__.objects.filter(reference_number__contains=prefix)
           if prev_instances.exists():
              last_instance_id = prev_instances.last().reference_number[-4:]
              self.reference_number = prefix+'{0:04d}'.format(int(last_instance_id)+1)
           else:
               self.reference_number = prefix+'{0:04d}'.format(1)
        # if self.entry is None:
        #     self.create_entry()
        super(Order, self).save(*args, **kwargs)



    def __str__(self):
        return 'ORD' + str(self.pk)

    @property
    def days_overdue(self):
        if self.total_due <= 0:
            return 0
        return (datetime.date.today() - self.due).days

    # @property
    # def product_total(self):
    #     return sum([i.subtotal for i in self.lines.filter(
    #         item_type = 1)])

    # @property
    # def equipment_total(self):
    #     return sum([i.subtotal for i in self.lines.filter(
    #         item_type = 3)])

    # @property
    # def consumables_total(self):
    #     return sum([i.subtotal for i in self.lines.filter(
    #         item_type = 2)])

    @property
    def items(self):
        return self.lines.all()

    @property
    def total(self):
        return self.subtotal + self.tax_amount

    @property
    def latest_receipt_date(self):
        return self.stockreceipt_set.all().latest('pk').receive_date


    @property
    def subtotal(self):
        return sum([i.subtotal for i in self.lines.all()])

    @property
    def tax_amount(self):
        if self.tax:
            return self.subtotal * (D(self.tax.rate) / D(100))
        return D(0.0)

    @property
    def payments(self):
        from .inventory_management import OrderPayment
        return OrderPayment.objects.filter(order=self)

    @property
    def amount_paid(self):
        return sum([i.amount for i in self.payments])


    @property
    def total_due(self):
        return self.total - self.amount_paid

    @property
    def payment_status(self):
        total_paid = sum([i.amount for i in self.payments])
        if total_paid >= self.total:
            return "paid"
        elif total_paid > 0 and total_paid < self.total:
            return "paid-partially"
        else:
            return "unpaid"

    @property
    def received_total(self):
        return sum([i.received_total for i in self.lines.all()])

    @property
    def fully_received(self):
        for item in self.items:
            if item.fully_received == False : return False
        return True

    @property
    def percent_received(self):
        ordered_quantity = 0
        received_quantity = 0
        items = self.lines.all()
        for item in items:
            ordered_quantity += item.quantity
            received_quantity += item.received

        return (received_quantity / ordered_quantity) * 100.0

    def receive(self):
        if self.status != 'received':
            sr = StockReceipt.objects.create(
                    order=self,
                    receive_date= datetime.date.today(),
                    note = 'Autogenerated receipt from order number' + \
                        str(self.pk),
                    fully_received=True
                )
            for item in self.lines.all():
                item.receive(item.quantity, receipt=sr)
            self.status = 'received'
            self.save()

    #check for deffered date with deferred type of invoice

    @property
    def returned_total(self):
        return sum([i.returned_value for i in self.lines.all()])

class OrderItem(models.Model):
    '''
        A component of an order this tracks the order price
        of an item its quantity and how much has been received.

        methods
        -----------
        receive - takes a number and adds its value to the item inventory
            and the orderitem's received quantity field.

        properties
        -----------
        received_total - returns the cash value of the items received
        subtotal - returns the cash value of the items ordered
    '''

    order = models.ForeignKey(
                            'inventory.Order',
                            on_delete=models.SET_NULL,
                            null=True,
                            related_name='lines'
                        )
    item = models.ForeignKey(
                            'inventory.InventoryItem',
                            null=True,
                            on_delete=models.SET_NULL
                        )
    quantity = models.FloatField()
    unit = models.ForeignKey(
                        'inventory.UnitOfMeasure',
                        on_delete=models.SET_NULL,
                        null=True,
                        default=1
                    )
    order_price = models.DecimalField(max_digits=16, decimal_places=2)
    received = models.FloatField(default=0.0)


    @property
    def fully_received(self):
        if self.received < self.quantity:
            return False
        return True

    def receive(self, n, medium=None, receipt=None):
        n= float(n)
        self.received += n
        StockReceiptLine.objects.create(
            quantity= n,
            line=self,
            receipt=receipt
        )

        wh_item = self.order.ship_to.add_item(self.item, n, location=medium)

        self.item.set_purchase_price(self.order_price)

        self.save()

    def __str__(self):
        return str(self.item) + ' -' + str(self.order_price)


    @property
    def received_total(self):
        '''The total value of the item as received'''
        return D(self.received)  * self.order_price

    @property
    def subtotal(self):
        '''The total value of the item as ordered, not received'''
        return D(self.quantity) * self.order_price
