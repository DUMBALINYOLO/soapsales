from rest_framework import serializers
from accounts.models import *


class BillCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Bill
        exclude = ['entry']

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

class BillLineSerializer(serializers.ModelSerializer):
    class Meta:
        model = BillLine
        fields = [
            'id',
            'bill',
            'debit_account',
            'amount'
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
