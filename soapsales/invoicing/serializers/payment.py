from rest_framework import serializers
from invoicing.models import Payment


class StringSerializer(serializers.StringRelatedField):

    def to_internal_value(self, value):
        return value

class PaymentListSerializer(serializers.ModelSerializer):
	invoice = StringSerializer()

	class Meta:

		model = Payment
		fields = ['id', 'amount_tendered', 'amount_to_pay', 'date', 'invoice']



class PaymentCreateSerializer(serializers.ModelSerializer):


	class Meta:

		model = Payment
		fields = [
			'amount_tendered',
			'amount_to_pay',
			'date', 
			'invoice',
			'method',
			'reference_number',
			'sales_rep',
			'comments',

		]

class PaymentDetailSerializer(serializers.ModelSerializer):
	invoice = StringSerializer()
	sales_rep = StringSerializer()

	class Meta:

		model = Payment
		fields = [
			'id',
			'amount_tendered',
			'amount_to_pay', 
			'date', 
			'invoice',
			'method',
			'reference_number',
			'sales_rep',
			'comments',
			'due',
			'customer_change',
			'entry',
		]



