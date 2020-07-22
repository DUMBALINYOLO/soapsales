from rest_framework import serializers
from rest_framework_recursive.fields import RecursiveField
from drf_writable_nested.serializers import WritableNestedModelSerializer
from manufacture.models import *



class StringSerializer(serializers.StringRelatedField):

    def to_internal_value(self, value):
        return value

class ProductionOrderSerializer(serializers.ModelSerializer):
    customer = StringSerializer()
    process = StringSerializer()

    class Meta:
        model = ProductionOrder
        fields = [
            "id",
            "due",
            "customer",
            'process',
        ]


class ProductionOrderCreateSerializer(serializers.ModelSerializer):



    class Meta:
        model = ProductionOrder
        fields = [
            "id",
            "due",
            'date',
            "customer",
            'process',
        ]



class ProcessSerializer(serializers.ModelSerializer):
    bill_of_materials = StringSerializer()
    process_equipment = StringSerializer()
    product_list = StringSerializer()
    rate = StringSerializer()
    type = serializers.SerializerMethodField()



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
            'child_processes',
            'is_subprocess'

        ]

    def get_type(self, obj):
        return obj.get_type_display()

class ProcessCreateSerializer(serializers.ModelSerializer):


    class Meta:
        model = Process
        fields = [
            "parent_process",
            "process_equipment",
            'name',
            'description',
            'bill_of_materials',
            'type', # display this
            'duration',
            'rate',

            'product_list',
        ]

class ProcessRateCreateUpdateSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProcessRate
        fields = [
            "id",
            "unit",
            "unit_time",
            'quantity',
        ]


class ProcessRateSerializer(serializers.ModelSerializer):
    unit = StringSerializer()
    unit_time = serializers.SerializerMethodField()


    class Meta:
        model = ProcessRate
        fields = [
            "id",
            "unit",
            "unit_time",
            'quantity',
        ]

    def get_unit_time(self, obj):
        return obj.get_unit_time_display()

class ProcessProductListSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProcessProduct
        fields = ['id','name' ]

class ProductSerializer(serializers.ModelSerializer):
    products = ProcessProductListSerializer(many=True, read_only=True)
    

    class Meta:
        model = Product
        fields = [
            "id",
            "name",
            "description", # display_this

            #getter methods
            # 'products_attributes',

            #model method
            'products'
        ]

    # def get_products(self, obj):
    #     return obj.products()


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
    product = StringSerializer()
    recorded_by = StringSerializer()
    unit = StringSerializer()


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


class BillOfMaterialsCreateSerializer(WritableNestedModelSerializer):
    lines = BillOfMaterialsLineSerializer(many=True)

    class Meta:
        model = BillOfMaterials
        fields = [
            'name',
            "description",
            'lines',
        ]


class BillOfMaterialsListSerializer(serializers.ModelSerializer):
    

    class Meta:
        model = BillOfMaterials
        fields = [
            'id',
            'name',
            'description',
            
        ]


class BillOfMaterialsDetailSerializer(serializers.ModelSerializer):
    bill_lines = BillOfMaterialsLineSerializer(many=True, read_only=True)
    class Meta:
        model = BillOfMaterials
        fields = [
            'id',
            'name',
            'description',
            'bill_lines'
        ]



class ProcessMachineSerializer(serializers.ModelSerializer):
    machine_group = StringSerializer()
    class Meta:
        model = ProcessMachine
        fields = [
            "id",
            'name',
            'date_commissioned',
            "description",
            'machine_group',
        ]


class ProcessMachineCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProcessMachine
        fields = [
            "id",
            'name',
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
