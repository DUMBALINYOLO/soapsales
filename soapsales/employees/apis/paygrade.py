from rest_framework import viewsets
from employees.models import PayGrade
from employees.serializers import (
		PayGradeCreateUpdateSerializer,
		PayGradeListSerializer,
		PayGradeDetailSerializer
	)

class PayGradeViewSet(viewsets.ModelViewSet):
	queryset = PayGrade.objects.all()

	def get_serializer_class(self):
		if self.action in ['create', 'put']:
			return PayGradeCreateUpdateSerializer
		elif self.action == 'retrieve':
			return PayGradeDetailSerializer
		return PayGradeListSerializer
		



