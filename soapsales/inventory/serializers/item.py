from rest_framework import serializers
from inventory.models import *


class InventoryItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = InventoryItem
        fields = [
            'id',
            'type',
            'category',
            'length',
            'width',
            'height',
            'image',
            'description',
            'unit',
            'unit_purchase_price',
            'supplier',
            'minimum_order_level',
            'maximum_stock_level',
            'equipment_component',
            'product_component',

            #property model methods
            'consumable_value',
            'consumable_unit_value',
            'qunatity',
            'locations',
            'unit_sales_price',


        ]




class ProductComponentSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductComponent
        fields = '__all__'


class EquipmentComponentSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductComponent
        fields = '__all__'