from rest_framework import serializers
from inventory.models import *


class OrderItemCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = "__all__"


class OrderItemListSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = [

            'id'
            'order',
            'item',
            'quantity',
            'unit',
            'order_price',
            'received',
            'fully_received',
            'received_total',
            'subtotal',
        ]



class OrderCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = "__all__"


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = [
            'id',
            'validated_by',
            'expected_receipt_day',
            'date',
            'due',
            'supplier',
            'supplier_invoice_number',
            'bill_to',
            'ship_to',
            'tax',
            'tracking_number',
            'notes',
            'status',
            'received_to_date',
            'issuing_inventory_controller',
            'entry',
            'entries',
            'shipping_cost_entries',

            # @property model methods
            'total_shipping_costs',
            'percentage_shipping_cost',
            'days_overdue',
            'product_total',
            'equipment_total',
            'consumables_total',
            'total',
            'latest_receipt_date',
            'tax_ammount',
            'payments',
            'ammount_paid',
            'total_due',
            'payment_status',
            'received_total',
            'fully_received',
            'percent_received',
            'returned_total'
        ]


class OrderPaymentSerializer(serializers.ModelSerializer):

    class Meta:
        model = OrderPayment
        fields = [
            'id',
            'date',
            'amount',
            'order',
            'comments',
            'entry',
        ]


