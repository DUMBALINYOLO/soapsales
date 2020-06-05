# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import datetime
from decimal import Decimal as D

from django.db import models
from django.db.models import Q

from .inventory import InventoryItem
from .inventory_management import StockReceipt
from .order import Order


class Supplier(models.Model):
    '''The businesses and individuals that provide the organization with
    products it will sell. Basic features include contact details address and
    contact people.
    The account of the supplier is for instances when orders are made on credit.'''
    # # one or the other
    name = models.CharField(max_length=230)
    is_organization = models.BooleanField(default=False)
    is_individual = models.BooleanField(default=False)

    #TODO
    # ADD MORE FIELDS LIKE CONTACT, ADDRESS, EMAIL, CONTACTPERSON


    @property
    def products(self):
        return InventoryItem.objects.filter(type=0, supplier=self)

    @property
    def consumables(self):
        return InventoryItem.objects.filter(type=2, supplier=self)

    @property
    def equipment(self):
        return InventoryItem.objects.filter(type=1, supplier=self)

    @property
    def last_delivery(self):
        qs = StockReceipt.objects.filter(order__supplier=self)
        if qs.exists():
            return qs.latest('pk')
        return None

    @property
    def average_days_to_deliver(self):
        qs = Order.objects.filter(supplier=self)
        total_days = 0
        fully_received = 0
        for order in qs:
            if order.fully_received and order.stockreceipt_set.count() > 0:
                # orders can have multiple stock receipts
                fully_received += 1

                last_receipt = order.stockreceipt_set.latest('receive_date')
                total_days += (last_receipt.receive_date - order.date).days

        if fully_received > 0:
            print(f'{self} has {fully_received} orders')
            return total_days / fully_received

        return 0
