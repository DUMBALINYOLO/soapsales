from rest_framework import viewsets
from employees.models import Leave
from employees.serializers import (
		LeaveCreateUpdateSerializer,
		LeaveDetailSerializer,
		LeaveListSerializer
	)

class LeaveViewSet(viewsets.ModelViewSet):
	queryset = Leave.objects.all()

	def get_serializer_class(self):
		if self.action in ['create', 'put']:
			return LeaveCreateUpdateSerializer
		elif self.action == 'retrieve':
			return LeaveDetailSerializer
		return LeaveListSerializer