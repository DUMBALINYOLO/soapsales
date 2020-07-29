from rest_framework import viewsets
from employees.models import PayrollOfficer, EmployeesSettings
from employees.serializers import (
			EmployeeConfigSerializer,
			PayRollOfficerCreateUpdateSerializer,
			PayRollOfficerSerializer
	)


class PayrollOfficerViewSet(viewsets.ModelViewSet):

	queryset = PayrollOfficer.objects.all()

	def get_serializer_class(self):
		if self.action in ["create", "put"]:
			return PayRollOfficerCreateUpdateSerializer
		return PayRollOfficerSerializer



class EmployeesConfigViewSet(viewsets.ModelViewSet):

	queryset = EmployeesSettings.objects.all()
	serializer_class = EmployeeConfigSerializer