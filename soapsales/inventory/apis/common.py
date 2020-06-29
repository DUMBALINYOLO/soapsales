from rest_framework import viewsets, permissions
from inventory.models import (
					# InventorySettings,
					InventoryController,
					UnitOfMeasure,
					Category
				)
from inventory.serializers import (
						# InventorySettingsSerializer,
						InventoryControllerSerializer,
						UnitOfMeasureSerializer,
						CategorySerializer,
						CategoryCreateSerializer,
						InventoryControllerCreateSerializer
					)

# class InventorySettingsViewset(viewsets.ModelViewSet):
# 	queryset = InventorySettings.objects.all()
# 	serializer_class = InventorySettingsSerializer


class InventoryControllerViewset(viewsets.ModelViewSet):
	queryset = InventoryController.objects.all()
	serializer_class = InventoryControllerSerializer
	permission_classes = [
        permissions.IsAuthenticated,
    ]

	def get_serializer_class(self):
		if self.action == 'create':
		    return InventoryControllerCreateSerializer
		return InventoryControllerSerializer


class UnitOfMeasureViewset(viewsets.ModelViewSet):
	queryset = UnitOfMeasure.objects.all()
	serializer_class = UnitOfMeasureSerializer
	permission_classes = [
        permissions.IsAuthenticated,
    ]

class CategoryViewset(viewsets.ModelViewSet):
	queryset = Category.objects.filter(parent__isnull=True)
	serializer_class = CategorySerializer
	permission_classes = [
        permissions.IsAuthenticated,
    ]

	def get_serializer_class(self):
		if self.action == 'create':
		    return CategoryCreateSerializer
		return CategorySerializer
