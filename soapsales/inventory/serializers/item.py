from rest_framework import serializers
from inventory.models import *


class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value


class InventoryItemListSerializer(serializers.ModelSerializer):
    category = StringSerializer()




    class Meta:
        model = InventoryItem
        fields = [
            'id',
            'name',
            'type',
            'category',
            'unit',



        ]


class InventoryItemCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = InventoryItem
        fields = [

            'name',
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

        ]




class InventoryItemDetailSerializer(serializers.ModelSerializer):
    category = StringSerializer()
    unit_purchase_price = StringSerializer()
    supplier = StringSerializer()
    product_component = StringSerializer()
    equipment_component = StringSerializer()



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
            'quantity',
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