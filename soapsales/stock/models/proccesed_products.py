from __future__ import unicode_literals
from django.utils.translation import ugettext as _
from django.db import models, transaction
from django.core.validators import MinValueValidator
from django.contrib.auth.models import User
from simple_history.models import HistoricalRecords
from datetime import datetime
from inventory.models import WareHouse, WareHouseItem
from basedata.const import (
        PROCESSED_PRODUCTS_STOCK_STATUS_CHOICES,
    )



class ProcessedProduct(models.Model):
    category = models.ForeignKey(
                        'inventory.Category',
                        on_delete=models.SET_NULL, 
                        null=True,default=1
                    )
    product = models.ForeignKey(
                    'manufacture.ProcessProduct',
                    blank=True, 
                    null=True, 
                    on_delete=models.SET_NULL
                )
    location = models.ForeignKey(
                        'inventory.WareHouse', 
                        blank=True, 
                        null=True, 
                        on_delete=models.SET_NULL
                    )
    unit = models.ForeignKey(
                        'inventory.UnitOfMeasure',
                        on_delete=models.SET_NULL,
                        null=True,
                        blank=True,
                        default=1
                    )
    quantity = models.IntegerField()
    updated = models.DateField(auto_now=True)
    review_needed = models.BooleanField(default=False)

    status = models.PositiveIntegerField(
                            default=0,
                            choices=PROCESSED_PRODUCTS_STOCK_STATUS_CHOICES,
                        )

    notes = models.CharField(max_length=100, blank=True)
    product_component = models.OneToOneField(
                                'stock.ProcessedProductComponent',
                                on_delete=models.SET_NULL,
                                null=True,
                                related_name = 'processedproduct'
                            )
    minimum_order_level = models.IntegerField( default=0)
    maximum_stock_level = models.IntegerField(default=0)

    # History of this item
    history = HistoricalRecords()

    def __str__(self):
        return f'{self.product.name} | {self.quantity} |  {self.status}'




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
    pricing_method = models.ForeignKey(
                                'SalesGroup',
                                null= True,
                                blank = True,
                                on_delete=models.SET_NULL
                            )
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

    def __str__(self):
        return self.sku



class ProcessedProductsStockReceipt(models.Model):
    '''
    Part of the ProcessedProducts transfer to warehouse workflow.
    methods
    ---------

    '''
    received_by = models.ForeignKey('inventory.InventoryController',
        on_delete=models.SET_NULL,
        null=True,
        default=1)
    receive_date = models.DateField()
    note =models.TextField(blank=True, default="")
    history = HistoricalRecords()

    def __str__(self):
        return str(self.pk) + ' - ' + str(self.receive_date)


    def receive(self, n, medium=None, receipt=None):
        self.lines.create(
            quantity= self.lines.quantity,
            line= self.lines.line,
            receipt= self
        )

        wh_item = self.order.ship_to.add_processed_item(self.self.lines.line, self.lines.quantity, location=self.lines.line.location)

        self.save()



        

class ProcessedProductsStockReceiptLine(models.Model):
    receipt = models.ForeignKey(
                        'ProcessedProductsStockReceipt',
                        on_delete=models.SET_NULL,
                        null=True,
                        related_name='lines'
                    )  
    line = models.ForeignKey('ProcessedProduct', null=True, on_delete=models.SET_NULL)
    quantity = models.FloatField(default=0.0)
    history = HistoricalRecords()

    def __str__(self):
        return f'{self.id} | {self.quantity} '




class ProcessedProductsStockTake(models.Model):
    date = models.DateField()
    adjusted_by = models.ForeignKey('inventory.InventoryController',
        on_delete=models.SET_NULL,
        null=True )
    warehouse = models.ForeignKey('inventory.WareHouse',
        on_delete=models.SET_NULL,
        null=True )
    comments = models.TextField()
    history = HistoricalRecords()

    @property
    def adjustments(self):
        return self.adjustments.all()

    @property
    def value_of_all_adjustments(self):
        return sum(
            [i.adjustment_value for i in self.adjustments])

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        self.warehouse.last_inventory_check_date = self.date



class ProcessedProductStockAdjustment(models.Model):
    warehouse_item = models.ForeignKey('inventory.WareHouseItem',
        on_delete=models.SET_NULL, null=True)
    adjustment = models.FloatField()
    note = models.TextField()
    inventory_check = models.ForeignKey(
                            'ProcessedProductsStockTake',
                            on_delete=models.SET_NULL, 
                            null=True,
                            related_name = 'adjustments',
                        )
    history = HistoricalRecords()


    @property
    def adjustment_value(self):
        return D(self.adjustment) * self.warehouse_item.processed_item.unit_purchase_price

    @property
    def prev_quantity(self):
        return self.warehouse_item.quantity + self.adjustment

    def adjust_inventory(self):
        self.warehouse_item.decrement(self.adjustment)

    def save(self, *args, **kwargs):
        super(StockAdjustment, self).save(*args, **kwargs)
        self.adjust_inventory()

