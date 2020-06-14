from rest_framework.viewsets import ModelViewSet
from rest_framework import status
from accounts.models import *
from accounts.serializers import AssetsSerializer, CreateAssetsSerializer

class AssetViewSet(ModelViewSet):
	serializer_class = AssetsSerializer
	queryset = Asset.objects.all()
	lookup_field = 'id'

	def get_serializer_class(self):
		if self.action == 'create':
			return CreateAssetsSerializer
		return AssetsSerializer


