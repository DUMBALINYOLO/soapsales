from rest_framework import viewsets
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
						CategoryCreateSerializer
					)

# class InventorySettingsViewset(viewsets.ModelViewSet):
# 	queryset = InventorySettings.objects.all()
# 	serializer_class = InventorySettingsSerializer


class InventoryControllerViewset(viewsets.ModelViewSet):
	queryset = InventoryController.objects.all()
	serializer_class = InventoryControllerSerializer


class UnitOfMeasureViewset(viewsets.ModelViewSet):
	queryset = UnitOfMeasure.objects.all()
	serializer_class = UnitOfMeasureSerializer

class CategoryViewset(viewsets.ModelViewSet):
	queryset = Category.objects.filter(parent__isnull=True)
	serializer_class = CategorySerializer

	def get_serializer_class(self):
		if self.action == 'create' and 'put':
		    return CategoryCreateSerializer
		return CategorySerializer
