from rest_framework.viewsets import ModelViewSet
from rest_framework import status
from accounts.models import *
from accounts.serializers import (
				AssetDetailSerializer,
				CreateAssetsSerializer,
				AssetsListSerializer
			)

class AssetViewSet(ModelViewSet):
	queryset = Asset.objects.all()
	lookup_field = 'id'

	def get_serializer_class(self):
		if self.action == 'create':
			return CreateAssetsSerializer
		elif self.action == 'list':
			AssetsListSerializer
		return AssetDetailSerializer


