from rest_framework import serializers
from accounts.models import *


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
    lines = BillLineSerializer(many=True, write_only=True)

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
    # entry = JournalEntrySerializer()

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
    class Meta:
        model = BillPayment
        fields = [
            'id',
            'date',
            'account',
            'bill',
            'amount',
            'memo',
            'entry'
        ]
