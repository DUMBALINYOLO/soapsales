from django.db import models
from django.db.models import Q
from .warehouse import *
from .order import *

class InventoryItem(models.Model):
    INVENTORY_TYPES = [
        (0, 'Product'),
        (1, 'Equipment'),
        (2, 'Consumables'),
        (3, 'Raw Material'),
    ]

    name = models.CharField(max_length = 64)
    type = models.PositiveSmallIntegerField(choices=INVENTORY_TYPES)
    category = models.ForeignKey('inventory.Category',
        on_delete=models.SET_NULL, null=True,default=1)
    length = models.FloatField(default=0.0)
    width = models.FloatField(default=0.0)
    height = models.FloatField(default=0.0)
    image = models.FileField(blank=True, null=True)
    description = models.TextField(blank=True, default="")
    unit = models.ForeignKey(
                        'inventory.UnitOfMeasure',
                        on_delete=models.SET_NULL,
                        null=True,
                        blank=True,
                        default=1
                    )
    unit_purchase_price = models.DecimalField(max_digits=16,
        decimal_places=2,
        default=0.0)
    supplier = models.ForeignKey(
                        "inventory.Supplier",
                        on_delete=models.SET_NULL,
                        blank=True,
                        null=True
                    )
    minimum_order_level = models.IntegerField( default=0)
    maximum_stock_level = models.IntegerField(default=0)
    #components
    equipment_component = models.OneToOneField(
                                'inventory.EquipmentComponent',
                                on_delete=models.SET_NULL,
                                null=True
                            )
    product_component = models.OneToOneField(
                                'inventory.ProductComponent',
                                on_delete=models.SET_NULL,
                                null=True
                            )


    def save(self, *args, **kwargs):
        #Strange bug where active is defaulting to false
        if self.pk is None:
            self.active =True

        return super().save(*args, **kwargs)

    def __getattribute__(self, name):
        try:
            return super().__getattribute__(name)
        except AttributeError:
            if self.equipment_component and hasattr(self.equipment_component,
                    name):
                return getattr(self.equipment_component, name)
            elif self.product_component and hasattr(self.product_component,
                    name):
                return getattr(self.product_component, name)


        raise AttributeError(f'{type(self)} has no attribute {name}')



    @property
    def consumable_value(self):
        if self.type != 2:
            return D(0)

        current_quantity = self.quantity
        if current_quantity == 0:
            return D(0)

        cummulative_quantity = 0
        orders_with_items_in_stock = []
        partial_orders = False

        #getting the latest orderitems in order of date ordered
        order_items = OrderItem.objects.filter(
            Q(item=self) &
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
            for item in orders_with_items_in_stock[:-
            1]:#remove last elemnt
                cumulative_value += D(item.quantity) * item.order_price

            remainder = current_quantity - cummulative_quantity
            cumulative_value += D(remainder) * \
                orders_with_items_in_stock[-1].order_price

        return cumulative_value

    @property
    def consumable_unit_value(self):
        if self.consumable_value > 0:
            return self.consumable_value / D(self.quantity)

        return D(0)

    def __str__(self):
        return str(self.id) + " - " + self.name

    def set_purchase_price(self, price):
        self.unit_purchase_price = price
        self.save()

    @property
    def quantity(self):

        #returns quantity from all warehouses
        items = WareHouseItem.objects.filter(item=self)
        return sum([i.quantity for i in items])

    @property
    def locations(self):
        return WareHouseItem.objects.filter(
            Q(item=self),
            Q(quantity__gt=0)
            )

    @property
    def unit_sales_price(self):
        if self.product_component:
            return self.product_component.unit_sales_price

        return D(0)

    @staticmethod
    def total_inventory_value():
        return sum([p.product_component.stock_value for p in InventoryItem.objects.filter(product_component__isnull=False)])


class ProductComponent(models.Model):
    PRICING_CHOICES = [
    (0, 'Manual'),
    (1, 'Margin'),
    (2, 'Markup')
]
    pricing_method = models.IntegerField(choices=PRICING_CHOICES, default=0)
    direct_price = models.DecimalField(max_digits=16, decimal_places=2)
    margin = models.DecimalField(max_digits=16, decimal_places=2, default=0)
    markup = models.DecimalField(max_digits=16, decimal_places=2, default=0)
    sku = models.CharField(max_length=16, blank=True)



class EquipmentComponent(models.Model):
    CONDITION_CHOICES = [
        ('excellent', 'Excellent'),
        ('good', 'Good'),
        ('poor', 'Poor'),
        ('broken', 'Not Functioning')
    ]
    condition = models.CharField(max_length=16,
        choices=CONDITION_CHOICES, default='excellent')
    name = models.CharField(max_length=230)
