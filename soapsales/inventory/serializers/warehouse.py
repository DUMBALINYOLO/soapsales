from rest_framework import serializers
from rest_framework_recursive.fields import RecursiveField
from inventory.models import (
				WareHouse,
				WareHouseItem,
				StorageMedia

	)


class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value


class WareHouseItemCreateSerializer(serializers.ModelSerializer):


	class Meta:
		model = WareHouseItem
		fields = "__all__"


class WareHouseItemListSerializer(serializers.ModelSerializer):
	item = StringSerializer()
	processed_item = StringSerializer()
	location = StringSerializer()

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
	inventory_controller = StringSerializer()

	class Meta:
		model = WareHouse
		fields = [
			'id',
			'name',
		    'inventory_controller',
		    'item_count',
		    'total_item_quantity',
		]


class WareHouseDetailSerializer(serializers.ModelSerializer):
	inventory_controller = StringSerializer()

	class Meta:
		model = WareHouse
		fields = [
			'id',
			'name',
		    'inventory_controller',
		    'item_count',
		    'total_item_quantity',
		    'address', 
		    'description',
		    'inventory_controller',
		    'length',
		    'width',
		    'height',
		    'last_inventory_check_date'

		]



class StorageMediaListSerializer(serializers.ModelSerializer):
	children = RecursiveField(many=True)
	warehouse = StringSerializer()
	location = StringSerializer()


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



