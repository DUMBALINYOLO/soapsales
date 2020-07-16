from rest_framework import viewsets, permissions
from invoicing.models import CustomerReceipt
from invoicing.serializers import(
						CustomerReceiptListSerializer,
						CustomerReceiptDetailSerializer,	
					)


class CustomerReceiptViewSet(viewsets.ModelViewSet):
	queryset = CustomerReceipt.objects.all()

	def get_serializer_class(self):
		if self.action == 'retrieve':
		    return CustomerReceiptDetailSerializer
		return CustomerReceiptListSerializer
		