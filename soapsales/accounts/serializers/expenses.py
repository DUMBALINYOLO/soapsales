from rest_framework import serializers
from accounts.models import *

class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value


class BillLineSerializer(serializers.ModelSerializer):
    class Meta:
        model = BillLine
        fields = [
            'id',
            'bill',
            'debit_account',
            'amount'
        ]


class BillCreateSerializer(serializers.ModelSerializer):
    lines = BillLineSerializer(many=True, required=False, write_only=True)
    date = serializers.DateField(format=None, input_formats=None)
    due = serializers.DateField(format=None, input_formats=None)


    class Meta:
        model = Bill
        fields = [
            'vendor',
            'date',
            'reference',
            'due',
            'memo',
            'lines'
        ]

    def create(self, validated_data):
        lines = validated_data.pop('lines', [])
        bill = Bill.objects.create(**validated_data)
        for line_dict in lines:
            line_dict['bill'] = bill
            BillLine.objects.create(**line_dict)
        return bill
        

class BillSerializer(serializers.ModelSerializer):
    vendor = StringSerializer()
    entry = StringSerializer()

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
