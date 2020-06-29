from rest_framework import viewsets, permissions
from invoicing.models import SalesRepresentative
from invoicing.serializers import(
						SalesRepresentativeListSerialaizer,
						SalesRepresentativeCreateSerialaizer,
						SalesRepresentativeDetailSerialaizer		
					)


class SalesRepresentativeViewSet(viewsets.ModelViewSet):
	queryset = SalesRepresentative.objects.all()
	permission_classes = [
        permissions.IsAuthenticated,
    ]


	def get_serializer_class(self):
		if self.action == 'list':
		    return SalesRepresentativeListSerialaizer
		elif self.action == 'create':
			return SalesRepresentativeCreateSerialaizer
		return SalesRepresentativeDetailSerialaizer	