from __future__ import unicode_literals
from django.utils.translation import ugettext as _
from django.db import models, transaction
from django.core.validators import MinValueValidator
from django.contrib.auth.models import User
from simple_history.models import HistoricalRecords
from datetime import datetime


class ProcessedProduct(models.Model):
    product = models.ForeignKey('manufacture.ProcessProduct',blank=True, null=True, on_delete=models.SET_NULL)
    location = models.ForeignKey('inventory.WareHouse', blank=True, null=True, on_delete=models.SET_NULL)
    quantity = models.IntegerField()
    updated = models.DateField(auto_now=True)
    # last time the stock was checked / counted
    stocktake_date = models.DateField(blank=True, null=True)
    stocktake_user = models.ForeignKey('inventory.InventoryController', on_delete=models.SET_NULL, blank=True, null=True)
    review_needed = models.BooleanField(default=False)


    # Stock status types
    ITEM_IN_STOCK = 10
    ITEM_INCOMING = 15
    ITEM_IN_PROGRESS = 20
    ITEM_COMPLETE = 25
    ITEM_ATTENTION = 50
    ITEM_DAMAGED = 55
    ITEM_DESTROYED = 60

    ITEM_STATUS_CODES = {
        ITEM_IN_STOCK: _("In stock"),
        ITEM_INCOMING: _("Incoming"),
        ITEM_IN_PROGRESS: _("In progress"),
        ITEM_COMPLETE: _("Complete"),
        ITEM_ATTENTION: _("Attention needed"),
        ITEM_DAMAGED: _("Damaged"),
        ITEM_DESTROYED: _("Destroyed")
    }

    status = models.PositiveIntegerField(
                            default=ITEM_IN_STOCK,
                            choices=ITEM_STATUS_CODES.items(),
                        )

    notes = models.CharField(max_length=100, blank=True)

    # If stock item is incoming, an (optional) ETA field
    expected_arrival = models.DateField(null=True, blank=True)

    infinite = models.BooleanField(default=False)
    product_component = models.OneToOneField(
                                'stock.ProcessedProductComponent',
                                on_delete=models.SET_NULL,
                                null=True,
                                related_name = 'processedproduct'
                            )

    # History of this item
    history = HistoricalRecords()

    @transaction.atomic
    def stocktake(self, count, user):
        """
            Perform item stocktake.
            When the quantity of an item is counted,
            record the date of stocktake
        """
        count = int(count)

        if count < 0 or self.infinite:
            return

        self.quantity = count
        self.stocktake_date = datetime.now().date()
        self.stocktake_user = user
        self.save()

    @transaction.atomic
    def add_stock(self, amount):
        """
            Add items to stock
            This function can be called by initiating a ProjectRun,
            or by manually adding the items to the stock location
        """

        amount = int(amount)

        if self.infinite or amount == 0:
            return

        amount = int(amount)

        q = self.quantity + amount
        if q < 0:
            q = 0

        self.quantity = q
        self.save()

    @transaction.atomic
    def take_stock(self, amount):
        self.add_stock(-amount)

    def __str__(self):
        return "{n} x {part} @ {loc}".format(
            n=self.quantity,
            part=self.part.name,
            loc=self.location.name)


    @property
    def quantity(self):
        #returns quantity from all warehouses
        processed = WareHouseItem.objects.filter(processed_item=self)
        return sum([i.quantity for i in processed])

    @property
    def unit_sales_price(self):
        if self.product_component:
            return self.product_component.unit_sales_price

        return D(0)


class SalesGroup(models.Model):
    name = models.CharField(max_length=230)
    group_pricing_unit_sales_price = models.FloatField()


    def __str__(self):
        return self.name

class ProcessedProductComponent(models.Model):
    PRICING_CHOICES = [
    (0, 'Manual'),
    (1, 'Margin'),
    (2, 'Markup')
]
    pricing_method = models.ForeignKey(
                                'SalesGroup',
                                null= True,
                                blank = True,
                                on_delete=models.SET_NULL
                            )
    direct_price = models.DecimalField(max_digits=16, decimal_places=2)
    margin = models.DecimalField(max_digits=16, decimal_places=2, default=0)
    markup = models.DecimalField(max_digits=16, decimal_places=2, default=0)
    sku = models.CharField(max_length=16, blank=True)


    @property
    def parent(self):
        return ProccesedProduct.objects.get(product_component=self)

    @property
    def unit_sales_price(self):
        return self.pricing_method.group_pricing_unit_sales_price


    @property
    def unit_value(self):
        '''the value of inventory on a per item basis'''
        if self.processedproduct.quantity  == 0 or self.stock_value == 0:
            return self.processedproduct.unit_purchase_price
        return self.stock_value / D(self.processedproduct.quantity)

    @property
    def stock_value(self):
        '''.
        averaging- calculating the overall stock value on the average of all
        the values for the quantity in stock.
        '''
        current_quantity = self.parent.quantity
        cummulative_quantity = 0
        orders_with_items_in_stock = []
        partial_orders = False

        if current_quantity == 0:
            return 0

        #getting the latest orderitems in order of date ordered
        order_items = inventory.models.OrderItem.objects.filter(
            Q(item=self.parent) &
            Q(
                Q(order__status="order") |
                Q(order__status="received-partially") |
                Q(order__status="received")
            )).order_by("order__date").reverse()

        #iterate over items
        for item in order_items:
            # orders for which cumulative ordered quantities are less than
            # inventory in hand are considered
            if (item.quantity + cummulative_quantity) < current_quantity:
                orders_with_items_in_stock.append(item)
                cummulative_quantity += item.quantity


            else:
                if cummulative_quantity < current_quantity:
                    partial_orders = True
                    orders_with_items_in_stock.append(item)

                else:
                    break


        cumulative_value = D(0)
        if not partial_orders:
            for item in orders_with_items_in_stock:
                cumulative_value += D(item.quantity) * item.order_price

        else:
            for item in orders_with_items_in_stock[:-1]:
                cumulative_value += D(item.quantity) * item.order_price

            remainder = current_quantity - cummulative_quantity
            cumulative_value += D(remainder) * \
                orders_with_items_in_stock[-1].order_price

        return cumulative_value


    @property
    def sales_to_date(self):
        items = invoicing.models.ProductLineComponent.objects.filter(
            product=self.inventoryitem)
        total_sales = sum(
            [(item.invoiceline.subtotal - item.invoiceline.tax_) for item in items])
        return total_sales
