import json
import json
import os
import urllib
from decimal import Decimal as D
from rest_framework import viewsets
from rest_framework.response import Response
from inventory.models import *
from inventory.serializers import (
                            StockReceiptSerializer,
                            StockReceiptLineSerializer,
                            InventoryCheckSerializer,
                            StockAdjustmentSerializer,
                            TransferOrderSerializer,
                            TransferOrderSerializerLine,
                            InventoryScrappingRecordLineSerializer
                        )
from accounts.models import Account



class StockReceiptViewSet(viewsets.ModelViewSet):
    queryset = StockReceipt.objects.all()
    serializer_class = StockReceiptSerializer

    def create(self, request, *args, **kwargs):
        response = super(StockReceiptViewSet, self).create(request, *args, **kwargs)
        data = json.loads(urllib.parse.unquote(request.POST['received-items']))
        subtotal = D(0)
        for line in data:
            pk = line['item'].split("-")[0]
            n = line['quantity_to_move']
            if n == 0:
                break
            print('location: ', line['receiving_location'])
            if line['receiving_location'] != "":
                medium = line['receiving_location'].split('-')[0]
                item = OrderItem.objects.get(pk=pk)
                item.receive(n, medium=medium, receipt=self.object)
            else:
                item = OrderItem.objects.get(pk=pk)
                item.receive(n, receipt=self.object)

            subtotal += item.order_price * D(n)
        # Only credit supplier account the money we owe them for received
        # inventory
        tax = subtotal * (D(self.object.order.tax.rate) / D(100))
        total = subtotal + tax
        entry = JournalEntry.objects.create(
            date = self.object.receive_date,
            memo = f"Order {self.object.order.pk} received ",
            created_by = self.object.order.issuing_inventory_controller.employee.user,
            draft=False
        )

        if not self.object.order.supplier.account:
            self.object.order.supplier.create_account()

        entry.credit(total, self.object.order.supplier.account)
        entry.debit(subtotal, Account.objects.get(pk=4006))#purchases have to fix this issue of accounts
        entry.debit(tax, Account.objects.get(pk=2001))#tax

        return Respone(response)

class StockTakeViewSet(viewsets.ModelViewSet):
    queryset = InventoryCheck.objects.all()
    serializer_class = InventoryCheckSerializer
    def create(self, request, *args, **kwargs):
        response = super(StockTakeViewSet, self).create(request, *args, **kwargs)
        raw_data = request.POST['check-table']
        adjustments = json.loads(urllib.parse.unquote(raw_data))
        for adj in adjustments:
            pk = adj['item'].split('-')[0]
            delta = float(adj['quantity']) - float(adj['measured'])
            if delta != 0:
                wh_item = WareHouseItem.objects.get(pk=pk)
                StockAdjustment.objects.create(
                    warehouse_item = wh_item,
                    inventory_check = self.object,
                    note = "",# could add note widget
                    adjustment = delta
                )
        return Response(response)

class StockAdjustmentViewSet(viewsets.ModelViewSet):
    queryset = StockAdjustment.objects.all()
    serializer_class = StockAdjustmentSerializer


class TransferOrderViewSet(viewsets.ModelViewSet):

    def create(self, request, *args, **kwargs):
        response = super(TransferOrderCreateView, self).create(request, *args, **kwargs)
        data = json.loads(urllib.parse.unquote(request.POST['items']))
        for i in data:
            pk, _ = i['item'].split('-')[0]
            item = InventoryItem.objects.get(pk=pk)
            wh_item = self.object.source_warehouse.get_item(item)
            if wh_item and wh_item.quantity >= float(i['quantity']):
                TransferOrderLine.objects.create(
                    item = item,
                    quantity = i['quantity'],
                    transfer_order = self.object
                )
            else:
                messages.info(request, 'The selected source warehouse has insufficient quantity of item %s to make the transfer' % item)
        return Response(response)






