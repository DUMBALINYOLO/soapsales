from rest_framework import serializers 
from invoicing.models import Customer, Invoice



class InvoiceSerializer(serializers.ModelSerializer):

	class Meta:
		model = Invoice
		fields = ['invoice_number', 'due', 'status']

class CustomerListSerializer(serializers.ModelSerializer):


	class Meta:
		model = Customer
		fields = ['id', 'name', 'phone', 'email']



class CustomerCreateSerializer(serializers.ModelSerializer):

	class Meta:
		model = Customer
		fields = [
			'name',
			'is_organization',
			'is_organization',
			'billing_address',
			'banking_details',
			'website',
			'bp_number',
			'email',
			'phone'
		]


class CustomerDetailSerializer(serializers.ModelSerializer):
	invoices = InvoiceSerializer(many=True, read_only=True)
	credit_invoices = InvoiceSerializer(many=True, read_only=True)

	class Meta:
		model = Customer
		fields = [
			'name',
			'is_organization',
			'is_organization',
			'billing_address',
			'banking_details',
			'website',
			'bp_number',
			'email',
			'phone'
			'invoices',
			'credit_invoices',
			'average_days_to_pay',
			'total_accounts_receivable',
		]
		