from rest_framework import serializers
from inventory.models import (
					Supplier,
					InventoryItem
				)


class CreateSupplierSerializer(serializers.ModelSerializer):

	class Meta:
		model = Supplier
		fields = "__all__"


class ProductSerializer(serializers.ModelSerializer):

	class Meta:
		model = InventoryItem
		fields = ['id', 'type', 'name']

class ListSupplierSerializer(serializers.ModelSerializer):
	products = ProductSerializer(many=True, read_only=True)
	consumables = ProductSerializer(many=True, read_only=True)
	equipment = ProductSerializer(many=True, read_only=True)


	class Meta:
		model = Supplier
		fields = [
				'id',
				'name',
				'is_organization',
			    'is_individual',
			    'business_address',
			    'website'
			    'bp_number',
			    'email',
			    'phone', 
			    'contact_person',
			    'products',
			    'consumables',
			    'equipment'
		]
