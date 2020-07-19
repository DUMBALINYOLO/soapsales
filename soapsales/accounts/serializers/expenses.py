from rest_framework import serializers
from accounts.models import *
from django.conf import settings
from drf_writable_nested.serializers import WritableNestedModelSerializer

class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value


class BillLineSerializer(serializers.ModelSerializer):
    class Meta:
        model = BillLine
        fields = [
            # 'pk',
            # 'bill',
            'debit_account',
            'amount'
        ]



# class BillCreateSerializer(serializers.ModelSerializer):
#     lines = BillLineSerializer(many=True)
#     # date = serializers.DateTimeField()
#     # due = serializers.DateTimeField()


#     class Meta:
#         model = Bill
#         fields = [
#             'vendor',
#             # 'date',
#             'reference',
#             # 'due',
#             'memo',
#             'lines'
#         ]


#     def create(self, validated_data):

#         lines = validated_data.pop('lines', [])
#         bill = Bill.objects.create(**validated_data)
#         print(bill)
#         for line in lines:
#             BillLine.objects.create(bill=bill, **line)
#         return bill

class BillCreateSerializer(WritableNestedModelSerializer):
    lines = BillLineSerializer(many=True)

    class Meta:
        model = Bill
        fields = ['pk', 'vendor', 'date', 'due', 'memo', 'reference', 'lines']

            



class BillSerializer(serializers.ModelSerializer):
    vendor = StringSerializer()
    entry = StringSerializer()
    lines = BillLineSerializer(many=True, read_only=True)

    class Meta:
        model = Bill
        fields = [
            'id',
            'vendor',
            'date',
            'reference',
            'due',
            'memo',
            'entry',
            'lines',
            'total'
        ]




class BillPaymentSerializer(serializers.ModelSerializer):
    account = StringSerializer()
    bill = StringSerializer()



    class Meta:
        model = BillPayment
        fields = [
            'id',
            'date',
            'account',
            'bill',
            'amount',
            'memo',
        ]


class BillPaymentCreateSerializer(serializers.ModelSerializer):
    account = StringSerializer()
    bill = StringSerializer()



    class Meta:
        model = BillPayment
        fields = [
            'id',
            'date',
            'account',
            'bill',
            'amount',
            'memo',
        ]
