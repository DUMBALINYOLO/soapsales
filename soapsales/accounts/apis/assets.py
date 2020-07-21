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

	def get_serializer_class(self):
		if self.action in ['create', 'put']:
			return CreateAssetsSerializer
		elif self.action == 'retrieve':
			AssetDetailSerializer
		return AssetsListSerializer


