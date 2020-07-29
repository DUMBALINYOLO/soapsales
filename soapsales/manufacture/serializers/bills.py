from rest_framework import serializers
from rest_framework_recursive.fields import RecursiveField
from drf_writable_nested.serializers import WritableNestedModelSerializer
from manufacture.models import *



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
            'reference_number'
            
        ]


class BillOfMaterialsDetailSerializer(serializers.ModelSerializer):
    bill_lines = BillOfMaterialsLineSerializer(many=True, read_only=True)
    class Meta:
        model = BillOfMaterials
        fields = [
            'id',
            'name',
            'description',
            'bill_lines',
            'reference_number',
        ]