
from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from inventory.models import *
from inventory.serializers import (
			WareHouseItemCreateSerializer,
			WareHouseItemListSerializer,
			WareHouseCreateSerializer,
			WareHouseListSerializer,
			StorageMediaListSerializer,
			StorageMediaCreateSerializer
	)


class WareHouseViewSet(viewsets.ModelViewSet):

	queryset = WareHouse.objects.all()
	# permission_classes = [
 #        permissions.IsAuthenticated,
 #    ]

	def get_serializer_class(self):
		if self.action != 'list' and 'retrieve':
		    return WareHouseCreateSerializer
		return WareHouseListSerializer

	@action(detail=False, methods=['get'])
	def all_items(self, request, id=None):
		warehouse = self.get_object()
		items = WarehouseItem.objects.filter(warehouse=warehouse)
		serializer = WareHouseItemListSerializer(items, many=True)
		return Response(serializer.data)


class WareHouseItemViewSet(viewsets.ModelViewSet):

	queryset = WareHouseItem.objects.all()
	# permission_classes = [
 #        permissions.IsAuthenticated,
 #    ]

	def get_serializer_class(self):
		if self.action != 'list' and 'retrieve':
		    return WareHouseItemCreateSerializer
		return WareHouseItemListSerializer


class StorageMediaViewSet(viewsets.ModelViewSet):

	queryset = StorageMedia.objects.filter(location__isnull=True)
	# permission_classes = [
 #        permissions.IsAuthenticated,
 #    ]

	def get_serializer_class(self):
		if self.action != 'list' and 'retrieve':
		    return StorageMediaCreateSerializer
		return StorageMediaListSerializer

	@action(detail=False, methods=['get'])
	def contents(self, request, id=None):
		storage = self.get_object()
		contents = WarehouseItem.objects.filter(storage=storage)
		serializer = WareHouseItemListSerializer(contents, many=True)
		return Response(serializer.data)

