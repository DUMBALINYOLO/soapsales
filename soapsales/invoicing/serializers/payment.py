from rest_framework import serializers
from invoicing.models import Payment

class PaymentListSerializer(serializers.ModelSerializer):

	class Meta:

		model = Payment
		fields = ['id', 'amount', 'date', 'invoice']


class PaymentCreateSerializer(serializers.ModelSerializer):

	class Meta:

		model = Payment
		fields = [
			'amount', 
			'date', 
			'invoice',
			'method',
			'reference_number',
			'sales_rep',
			'comments',

		]

class PaymentDetailSerializer(serializers.ModelSerializer):

	class Meta:

		model = Payment
		fields = [
			'id',
			'amount', 
			'date', 
			'invoice',
			'method',
			'reference_number',
			'sales_rep',
			'comments',
			'due'
		]



