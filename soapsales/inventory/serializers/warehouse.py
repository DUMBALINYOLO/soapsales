from rest_framework import serializers
from rest_framework_recursive.fields import RecursiveField
from inventory.models import (
				WareHouse,
				WareHouseItem,
				StorageMedia

	)


class WareHouseItemCreateSerializer(serializers.ModelSerializer):

	class Meta:
		model = WareHouseItem
		fields = "__all__"


class WareHouseItemListSerializer(serializers.ModelSerializer):
	class Meta:
		model = WareHouseItem
		fields = [
			'item',
		    'quantity',
		    'warehouse', 
		    'location',
		    'verified',
		    'stock_value',
		]
		

class WareHouseCreateSerializer(serializers.ModelSerializer):

	class Meta:
		model = WareHouse
		fields = "__all__"


class WareHouseListSerializer(serializers.ModelSerializer):


	class Meta:
		model = WareHouse
		fields = [
			'id',
			'name',
		    'address',
		    'description',
		    'inventory_controller',
		    'length',
		    'width',
		    'height',
		    'last_inventory_check_date',
		    'item_count',
		    'total_item_quantity',
		]


class StorageMediaListSerializer(serializers.ModelSerializer):
	children = RecursiveField(many=True)

	class Meta:
		model = StorageMedia
		fields = [
				'id',
				'name', 
			    'warehouse',
			    'location', 
			    'description',
			    'unit',
			    'length',
			    'width',
			    'height',
			    'capacity',
			    'children',
		]


class StorageMediaCreateSerializer(serializers.ModelSerializer):

	class Meta:
		model = StorageMedia
		fields = '__all__'



