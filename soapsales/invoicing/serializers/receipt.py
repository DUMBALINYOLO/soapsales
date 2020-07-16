from invoicing.models import CustomerReceipt
from rest_framework import serializers


class StringSerializer(serializers.StringRelatedField):

    def to_internal_value(self, value):
        return value


class CustomerReceiptListSerializer(serializers.ModelSerializer):
    sales_rep = StringSerializer()


    class Meta:
        model = CustomerReceipt
        fields = [
            'id',
            'sales_rep',
            'receipt_number',
            'amount_paid',
            'created_date',
        ]


class CustomerReceiptDetailSerializer(serializers.ModelSerializer):
    sales_rep = StringSerializer()
    customer = StringSerializer()

    class Meta:
        model = CustomerReceipt
        fields = [
            'id',
            'sales_rep',
            'receipt_number',
            'amount_paid',
            'created_date',
            'customer',
            'comment',
            'payment_method',
            'has_finished',
            'has_error',
            'amount_paid',
            'amount_tendered',
            'paid_as_of_date',
            'balance_as_of_date',
            'change',
        ]



 