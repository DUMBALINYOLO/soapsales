from rest_framework import viewsets, permissions
from invoicing.models import Customer
from invoicing.serializers import(
						CustomerListSerializer,
						CustomerCreateSerializer,
						CustomerDetailSerializer
							
					)


class CustomerViewSet(viewsets.ModelViewSet):
	queryset = Customer.objects.all()
	permission_classes = [
        permissions.IsAuthenticated,
    ]


	def get_serializer_class(self):
		if self.action == 'list':
		    return CustomerListSerializer
		elif self.action == 'create':
			return CustomerCreateSerializer
		return CustomerDetailSerializer