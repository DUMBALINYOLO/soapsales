from rest_framework import serializers
from invoicing.models import SalesRepresentative


class SalesRepresentativeListSerialaizer(serializers.ModelSerializer):

	class Meta:
		model = SalesRepresentative
		fields = ['id', 'employee', 'number']


class SalesRepresentativeCreateSerialaizer(serializers.ModelSerializer):

	class Meta:
		model = SalesRepresentative
		fields = [
			'employee', 
			'number',
			'can_reverse_invoices',
			'can_offer_discounts',
		]
		

class SalesRepresentativeDetailSerialaizer(serializers.ModelSerializer):

	class Meta:
		model = SalesRepresentative
		fields = [
			'id',
			'employee', 
			'number',
			'can_reverse_invoices',
			'can_offer_discounts',
		]
		