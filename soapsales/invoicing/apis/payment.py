from rest_framework import viewsets, permissions
from invoicing.models import Payment
from invoicing.serializers import(
						PaymentListSerializer,
						PaymentCreateSerializer,
						PaymentDetailSerializer		
					)


class PaymentViewSet(viewsets.ModelViewSet):
	queryset = Payment.objects.all()
	# permission_classes = [
 #        permissions.IsAuthenticated,
 #    ]


	def get_serializer_class(self):
		if self.action == 'list':
		    return PaymentListSerializer
		elif self.action == 'create':
			return PaymentCreateSerializer
		return PaymentDetailSerializer	