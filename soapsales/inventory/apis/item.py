from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import ListAPIView
from inventory.serializers import *
from inventory.models import *


class InventoryItemViewSet(ModelViewSet):
    queryset = InventoryItem.objects.all()
    serializer_class = InventoryItemSerializer





