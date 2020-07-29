from rest_framework import serializers
from rest_framework_recursive.fields import RecursiveField
from drf_writable_nested.serializers import WritableNestedModelSerializer
from manufacture.models import *



class StringSerializer(serializers.StringRelatedField):

    def to_internal_value(self, value):
        return value



class ProcessDetailSerializer(serializers.ModelSerializer):
    bill_of_materials = StringSerializer()
    process_equipment = StringSerializer()
    products = StringSerializer()
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
            'products',
            'reference_number'


        ]

    def get_type(self, obj):
        return obj.get_type_display()

class ProcessListSerializer(serializers.ModelSerializer):
    type = serializers.SerializerMethodField()


    class Meta:
        model = Process
        fields = [
            'id',
            'name',
            'reference_number',
            'rate',
            'type',
        ]

    def get_type(self, obj):
        return obj.get_type_display()



class ProcessCreateUpdateSerializer(serializers.ModelSerializer):


    class Meta:
        model = Process
        fields = [
            "parent_process",
            "process_equipment",
            'name',
            'description',
            'bill_of_materials',
            'type', 
            'duration',
            'rate',
            'products'
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


