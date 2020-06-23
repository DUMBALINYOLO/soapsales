from rest_framework import serializers
from inventory.models import *

class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value



class OrderItemListSerializer(serializers.ModelSerializer):
    order = StringSerializer()
    item = StringSerializer()
    unit = StringSerializer()


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
        ]


class OrderItemCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = OrderItem
        fields = '__all__'



class OrderCreateSerializer(serializers.ModelSerializer):
    items = OrderItemCreateSerializer(many=True, write_only=True)

    class Meta:
        model = Order
        fields = [
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
            'items',
        ]

    def create(self, validated_data):
        items = validated_data.pop('items', [])
        order = Order.objects.create(**validated_data)
        for item_dict in items:
            item_dict['order'] = order
            OrderItem.objects.create(**item_dict)
        return order


class OrderDetailSerializer(serializers.ModelSerializer):
    items = OrderItemListSerializer(many=True, read_only=True)
    validated_by = StringSerializer()
    supplier = StringSerializer()
    ship_to = StringSerializer()
    issuing_inventory_controller = StringSerializer()

    
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


class OrderListSerializer(serializers.ModelSerializer):
    supplier = StringSerializer()
    


    class Meta:
        model = Order
        fields = [
            'id',
            'status',
            'supplier',
            'tracking_number',
            'received_to_date'

        ]


class OrderPaymentCreateSerializer(serializers.ModelSerializer):
    order = StringSerializer()
    entry = StringSerializer()

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



