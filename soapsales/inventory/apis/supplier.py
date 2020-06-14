

from rest_framework import viewsets
from inventory.models import Supplier
from inventory.serializers import (
			CreateSupplierSerializer,
			ListSupplierSerializer
	)


class SupplierViewSet(viewsets.ModelViewSet):
	queryset = Supplier.objects.all()

	def get_serializer_class(self):
		if self.action == 'create' and 'put':
		    return CreateSupplierSerializer
		return ListSupplierSerializer
