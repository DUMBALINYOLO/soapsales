from rest_framework import serializers
from rest_framework_recursive.fields import RecursiveField
from manufacture.models import *




class ProductionOrderSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductionOrder
        fields = [
            "id",
            "due",
            "customer",
            'process',
        ]


class ProcessSerializer(serializers.ModelSerializer):
    # children = serializers.ListField()
    class Meta:
        model = Process
        fields = [
            "id",
            "parent_process",
            "process_equipment",
            'name',
            'description',
            'bill_of_materials',
            'type', # display this
            'duration',
            'rate',
            'product_list',

            #gettar
            'process_type_string',
            'child_processes',
            'is_subprocess'

        ]

class ProcessRateSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProcessRate
        fields = [
            "id",
            "unit",
            "unit_time",
            'quantity',

            #getter methods
            'unit_time_string'
        ]

class ProductSerializer(serializers.ModelSerializer):
    products = serializers.SerializerMethodField()
    products_attributes = serializers.ReadOnlyField()

    class Meta:
        model = Product
        fields = [
            "id",
            "name",
            "description", # display_this

            #getter methods
            'products_attributes',

            #model method
            'products'
        ]

    def get_products(self, obj):
        return obj.products()


class ProcessProductSerializer(serializers.ModelSerializer):
    type_string = serializers.SerializerMethodField()


    class Meta:
        model = ProcessProduct
        fields = [
            "id",
            "name",
            "description", # display_this
            'type',
            'unit',
            'finished_goods',
            'inventory_product',
            'product_list',

            #model method
            'type_string',
        ]

    def get_type_string(self, obj):
        return obj.type_string()



class WasteGenerationReportSerializer(serializers.ModelSerializer):


    class Meta:
        model = WasteGenerationReport
        fields = [
            "id",
            'product',
            "unit",
            'quantity',
            'comments',
            'recorded_by',
        ]

class BillOfMaterialsSerializer(serializers.ModelSerializer):

    class Meta:
        model = BillOfMaterials
        fields = [
            "id",
            'name',
            "description",
        ]


class BillOfMaterialsLineSerializer(serializers.ModelSerializer):


    class Meta:
        model = BillOfMaterialsLine
        fields = [
            "id",
            'bill',
            "type",
            'raw_material',
            'product',
            'quantity',
            'unit'
        ]

class ProcessMachineSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProcessMachine
        fields = [
            "id",
            'name',
            'date_commissioned',
            "description",
            'machine_group',
        ]

class ProcessMachineGroupCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProcessMachineGroup
        fields = [
            "id",
            'name',
            "description", # display this clown
        ]



class ProcessMachineGroupSerializer(serializers.ModelSerializer):
    machines = ProcessMachineSerializer(many=True, read_only=True)

    class Meta:
        model = ProcessMachineGroup
        fields = [
            "id",
            'name',
            "description", # display this clown
            #gettar
            'machines'
        ]
