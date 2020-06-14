from rest_framework import serializers
from inventory.models import (
                    StockReceipt,
                    StockReceiptLine,
                    InventoryCheck,
                    StockAdjustment,
                    TransferOrder,
                    TransferOrderLine,
                    InventoryScrappingRecord,
                    InventoryScrappingRecordLine
                )

class StockReceiptSerializer(serializers.ModelSerializer):

    class Meta:
        model = StockReceipt
        fields = [
            'id',
            'order',
            'receipt_by',
            'receive_date',
            'note',
            'fully_received',
        ]

class StockReceiptLineSerializer(serializers.ModelSerializer):
    class Meta:
        model = StockReceiptLine
        fields = [
            'id',
            'receipt',
            'line',
            'order_item',
            'quantity',

        ]


class InventoryCheckSerializer(serializers.ModelSerializer):
    class Meta:
        model = InventoryCheck
        fields = [
            'id',
            'adjusted_by',
            'warehouse',
            'comments',
            # @property model methods
            'value_of_all_adjustments',
        ]

class StockAdjustmentSerializer(serializers.ModelSerializer):

    class Meta:
        model = StockAdjustment
        fields = [
            'id',
            'warehouse_item',
            'adjustment',
            'note',
            'inventory_check',
            # @property model methods
            'adjustment_value',
            'prev_quantity',

        ]


class TransferOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = TransferOrder
        fields = '__all__'


class TransferOrderSerializerLine(serializers.ModelSerializer):
    class Meta:
        model =  TransferOrderLine
        fields = '__all__'


class InventoryScrappingRecordSerializer(serializers.ModelSerializer):

    class Meta:
        model = InventoryScrappingRecord
        fields = [
            'id',
            'controller',
            'warehouse',
            'comments',
            #@property method models
            'scrapping_value'
        ]


class InventoryScrappingRecordLineSerializer(serializers.ModelSerializer):

    class Meta:
        model = InventoryScrappingRecordLine
        fields = [
            'id',
            'item',
            'quantity',
            'note',
            'scrapping_record',
            #@property method models
            'scrapped_value',
        ]
