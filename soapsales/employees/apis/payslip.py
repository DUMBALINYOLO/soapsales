from rest_framework import viewsets
from employees.models import Payslip
from employees.serializers import (
		PayslipCreateUpdateSerializer,
		PayslipListSerializer,
		PayslipDetailSerializer
	)

class PayslipViewSet(viewsets.ModelViewSet):
	queryset = Payslip.objects.all()

	def get_serializer_class(self):
		if self.action in ['create', 'put']:
			return PayslipCreateUpdateSerializer
		elif self.action == 'retrieve':
			return PayslipDetailSerializer
		return PayslipListSerializer
