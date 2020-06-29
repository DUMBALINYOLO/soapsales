

from rest_framework import viewsets, permissions
from inventory.models import Supplier
from inventory.serializers import (
			CreateSupplierSerializer,
			ListSupplierSerializer
	)


class SupplierViewSet(viewsets.ModelViewSet):
	queryset = Supplier.objects.all()
	permission_classes = [
        permissions.IsAuthenticated,
    ]

	def get_serializer_class(self):
		if self.action in ['create', 'put']:
		    return CreateSupplierSerializer
		return ListSupplierSerializer
