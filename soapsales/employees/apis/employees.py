from rest_framework import viewsets
from employees.models import Employee
from employees.serializers import (
		EmployeeCreateUpdateSerializer,
		EmployeeListSerializer,
		EmployeeDetailSerializer,
		DepartmentCreateUpdateSerializer,
		DepartmentListSerializer,
		DepartmentDetailSerializer,
		TerminationCreateUpdateSerializer,
		TerminationSerializer,
		ContractCreateUpdateSerializer,
		ContractListSerializer,
		ContractDetailSerializer
	)
from employees.models import Employee, Department, Termination, Contract

class EmployeeViewSet(viewsets.ModelViewSet):
	queryset = Employee.objects.all()
	
	def get_serializer_class(self):
		if self.action in ['create', 'update']:
			return EmployeeCreateUpdateSerializer
		elif self.action == 'retrieve':
			return EmployeeDetailSerializer
		return EmployeeListSerializer


class DepartmentViewSet(viewsets.ModelViewSet):
	queryset = Department.objects.all()

	def get_serializer_class(self):
		if self.action in ['create', 'put']:
			return DepartmentCreateUpdateSerializer
		elif self.action == 'retrieve':
			return DepartmentDetailSerializer
		return DepartmentListSerializer


class TerminationViewSet(viewsets.ModelViewSet):
	queryset = Termination.objects.all()

	def get_serializer_class(self):
		if self.action in ['create', 'put']:
			return TerminationCreateUpdateSerializer
		return TerminationSerializer


class ContractViewSet(viewsets.ModelViewSet):

	queryset = Contract.objects.all()

	def get_serializer_class(self):
		if self.action in ['create', 'put']:
			return ContractCreateUpdateSerializer
		elif self.action == 'retrieve':
			return  ContractDetailSerializer
		return ContractListSerializer











	