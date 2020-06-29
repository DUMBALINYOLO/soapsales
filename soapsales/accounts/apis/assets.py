from rest_framework import permissions, viewsets
from rest_framework import status
from accounts.models import *
from accounts.serializers import (
				AssetDetailSerializer,
				CreateAssetsSerializer,
				AssetsListSerializer
			)

class AssetViewSet(viewsets.ModelViewSet):
	queryset = Asset.objects.all()
	permission_classes = [
        permissions.IsAuthenticated,
    ]
	lookup_field = 'id'

	def get_serializer_class(self):
		if self.action == 'create':
			return CreateAssetsSerializer
		elif self.action == 'list':
			AssetsListSerializer
		return AssetDetailSerializer


