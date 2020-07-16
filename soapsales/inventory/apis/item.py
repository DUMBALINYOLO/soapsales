from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from inventory.serializers import (
				InventoryItemListSerializer,
				InventoryItemCreateSerializer,
				InventoryItemDetailSerializer,
				ProductComponentSerializer,
				EquipmentComponentSerializer,
			)

from inventory.models import *


class InventoryItemViewSet(ModelViewSet):
	queryset = InventoryItem.objects.all()
	# permission_classes = [
 #        permissions.IsAuthenticated,
 #    ]
    

	def get_serializer_class(self):
		if self.action == 'retrieve':
			return	InventoryItemDetailSerializer
		elif self.action == 'list':
			return InventoryItemListSerializer
		return InventoryItemCreateSerializer

class ProductComponentViewSet(ModelViewSet):
	queryset = ProductComponent.objects.all()
	serializer_class = ProductComponentSerializer
	# permission_classes = [
 #        permissions.IsAuthenticated,
 #    ]



class EquipmentComponentViewSet(ModelViewSet):
	queryset = EquipmentComponent.objects.all()
	serializer_class = EquipmentComponentSerializer
	# permission_classes = [
 #        permissions.IsAuthenticated,
 #    ]




