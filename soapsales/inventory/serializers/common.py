from rest_framework import serializers
from rest_framework_recursive.fields import RecursiveField
from inventory.models import *



# class InventorySettingsSerializer(serializers.ModelSerializer):
#
#
#     class Meta:
#         model = InventorySettings
#         fields = [
#             'id',
#             'inventory_valuation_method',
#             'default_product_sales_pricing_method',
#             'inventory_check_frequency',
#             'inventory_check_date',
#             'use_warehouse_model',
#             'use_warehousing_model',
#             'use_product_inventory',
#             'use_equipment_inventory',
#             'use_consumables_inventory',
#             'use_raw_materials_inventory',
#             'is_configured',
#             'service_hash'
#         ]

class InventoryControllerSerializer(serializers.ModelSerializer):
    class Meta:
        model = InventoryController
        fields = "__all__"



class UnitOfMeasureSerializer(serializers.ModelSerializer):
    derived_units = serializers.ReadOnlyField()
    class Meta:
        model = UnitOfMeasure
        fields = [
            'id',
            'name',
            'eval_string',
            'is_derived',
            # 'base_unit' # there is a lot going on here
            'derived_units',
        ]

class CategorySerializer(serializers.ModelSerializer):
    children = RecursiveField(many=True)
    class Meta:
        model = Category
        fields = [
            'id',
            'name',
            'parent',
            'description',
            'children',
        ]

class CategoryCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'
