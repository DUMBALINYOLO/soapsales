import json
import json
import os
import urllib
from decimal import Decimal as D
from rest_framework import viewsets
from rest_framework.response import Response
from inventory.models import *
from inventory.serializers import (
                    StockReceiptCreateUpdateSerializer,
                    StockReceiptListSerializer,
                    StockReceiptDetailSerializer,
                    StockAdjustmentListSerializer,
                    StockAdjustmentDetailSerializer,
                    InventoryCheckCreateUpdateSerializer,
                    InventoryCheckListSerializer,
                    InventoryCheckDetailSerializer,

                )
from accounts.models import Account



class StockReceiptViewSet(viewsets.ModelViewSet):
    queryset = StockReceipt.objects.all()

    def get_serializer_class(self):
        if self.action in ['create', 'put']:
            return StockReceiptCreateUpdateSerializer
        elif self.action == 'retrieve':
            return StockReceiptDetailSerializer
        return StockReceiptListSerializer



class StockAdjustmentViewSet(viewsets.ModelViewSet):
    queryset = StockAdjustment.objects.all()

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return StockAdjustmentDetailSerializer
        return StockAdjustmentListSerializer
    

class InventoryStockTakeViewSet(viewsets.ModelViewSet):
    queryset = InventoryCheck.objects.all()

    def get_serializer_class(self):
        if self.action in ['create', 'put']:
            return InventoryCheckCreateUpdateSerializer
        elif self.action == 'retrieve':
            return InventoryCheckListSerializer
        return InventoryCheckDetailSerializer









