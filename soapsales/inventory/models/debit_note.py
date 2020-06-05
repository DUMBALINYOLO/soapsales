from functools import reduce

from django.db import models
from decimal import Decimal as D


from django.shortcuts import reverse


class DebitNote(models.Model):
    """
        A document sent by a business to a supplier notifying them
        that inventory has been returned for some reason. Linked to Orders. Stores a list of products returned.

        properties
        -----------
        returned_items - returns a queryset of all returned products for an invoice
        returned_total - returns the numerical value of the products returned.

        methods
        -----------
        create_entry - creates a journal entry in the accounting system.
    """

    date = models.DateField()
    order = models.ForeignKey('inventory.Order', on_delete=models.SET_NULL,
        null=True)
    comments = models.TextField()#never allow blank comments



    @property
    def returned_items(self):
        return self.edebitnoteline_set.all()

    @property
    def returned_total(self):
        return self.returned_subtotal + self.returned_tax

    @property
    def returned_tax(self):
        if self.returned_items.count() == 0:
            return 0
        order = self.returned_items.first().item.order
        if order.tax:
            return self.returned_subtotal * (D(self.order.tax.rate) / D(100.0))
        return 0

    @property
    def returned_subtotal(self):
        return sum([i.returned_value for i in self.returned_items ])


class DebitNoteLine(models.Model):
    item = models.ForeignKey('inventory.OrderItem', null=True,
        on_delete=models.SET_NULL)
    note = models.ForeignKey('inventory.DebitNote', null=True,
        on_delete = models.SET_NULL)
    quantity = models.FloatField()

    def __str__(self):
        return str(self.item)

    @property
    def returned_value(self):
        return self.item.order_price * D(self.quantity)
