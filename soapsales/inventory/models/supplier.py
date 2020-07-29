# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import datetime
from decimal import Decimal as D

from django.db import models
import uuid
from django.db.models import Q
import random
from django.utils import timezone
from .inventory import InventoryItem
from .inventory_management import StockReceipt
from .order import Order
from accounts.models import Account


class Supplier(models.Model):
    name = models.CharField(max_length=230)
    is_organization = models.BooleanField(default=False)
    is_individual = models.BooleanField(default=False)
    account = models.ForeignKey(
                            'accounts.Account',
                            on_delete=models.SET_NULL,
                            blank=True,
                            null=True
                        )
    business_address = models.TextField(blank=True)
    website = models.CharField(max_length=255, blank=True)
    bp_number = models.CharField(max_length=64, blank=True)
    supplier_number = models.CharField(max_length=255, null=True, default=None) 
    email=models.CharField(max_length=128, blank=True)
    phone = models.CharField(max_length=32, blank=True)
    contact_person = models.CharField(max_length=230, blank=True)


    def __str__(self):
        return self.name

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

    def create_account(self):
        n_suppliers = Supplier.objects.all().count() 
        #will overwrite if error occurs
        self.account = Account.objects.create(
            name= "VEN: %s" % self.name,
            id = (2100 + n_suppliers + 2 ) * 10, # the + 1 for the default supplier
            initial_balance = 0,
            order  = 2,
            is_active = False,
            is_contra = False,
            description = 'Account which represents debt owed to a Vendor',
        )

    def save(self, *args, **kwargs):
        if self.account is None:
            self.create_account()
        if not self.supplier_number:
           prefix = 'VENDOR{}'.format(timezone.now().strftime('%y%m%d'))
           prev_instances = self.__class__.objects.filter(supplier_number__contains=prefix)
           if prev_instances.exists():
              last_instance_id = prev_instances.last().supplier_number[-4:]
              self.supplier_number = prefix+'{0:04d}'.format(int(last_instance_id)+1)
           else:
               self.supplier_number = prefix+'{0:04d}'.format(1)
        super(Supplier, self).save(*args, **kwargs)



