from functools import reduce

from django.db import models
from decimal import Decimal as D
from accounts.models import (
                    Account,
                    JournalEntry
                )



from django.shortcuts import reverse



class DebitNote(models.Model):
    """
        A document sent by a business to a supplier notifying them
        that inventory has been returned for some reason.
        Linked to Orders. Stores a list of products returned.

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
    entry = models.ForeignKey('accounts.JournalEntry', null=True,
        on_delete=models.SET_NULL)
    reference_number = models.CharField(max_length=255, null=True, default=None)

    def save(self, *args, **kwargs):
        if not self.reference_number:
           prefix = 'DNOTE-{}'.format(timezone.now().strftime('%y%m%d'))
           prev_instances = self.__class__.objects.filter(reference_number__contains=prefix)
           if prev_instances.exists():
              last_instance_id = prev_instances.last().reference_number[-4:]
              self.reference_number = prefix+'{0:04d}'.format(int(last_instance_id)+1)
           else:
               self.reference_number = prefix+'{0:04d}'.format(1)
        if self.entry is None:
            self.create_entry()
        super(DebitNote, self).save(*args, **kwargs)


    

    @property
    def returned_items(self):
        return self.lines.all()

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

    # we have a pending business buddie
    def create_entry(self):
        j = JournalEntry.objects.create(
            memo="Auto generated journal entry from debit note",
            date=self.date,
            creator = self.order.issuing_inventory_controller.employee,
            is_approved = True
        )

        j.debit(self.returned_total, self.order.supplier.account)
        #Purchase returns
        j.credit(self.returned_subtotal, Account.objects.get(name='PURCHASE-RETURNS-ACCOUNT-NUMBER-ONE'))
        #Vat account
        j.credit(self.returned_tax, Account.objects.get(name='VAT-ACCOUNT-NUMBER-ONE'))

        self.entry = j
        # self.save()




class DebitNoteLine(models.Model):
    item = models.ForeignKey('inventory.OrderItem', null=True,
        on_delete=models.SET_NULL)
    note = models.ForeignKey(
                        'inventory.DebitNote', 
                        null=True,
                        on_delete = models.SET_NULL,
                        related_name = 'lines'
                    )
    quantity = models.FloatField()

    def __str__(self):
        return str(self.item)

    @property
    def returned_value(self):
        return self.item.order_price * D(self.quantity)
