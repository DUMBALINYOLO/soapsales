from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import ListAPIView
from inventory.serializers import *
from inventory.models import *


class InventoryItemAPIView(ModelViewSet):
    queryset = InventoryItem.objects.all()
    serializer_class = InventoryItemSerializer

####################product views##################################################
class ProductAPIView(ModelViewSet):
    queryset = InventoryItem.objects.filter(type=0)
    serializer_class = InventoryItemSerializer

class InventoryExcludingProducts(ListAPIView):
    queryset = InventoryItem.objects.exclude(type=0)
    serializer_class = InventoryItemSerializer


####################eqipment views##################################################
class EquipmentAPIView(ModelViewSet):
    queryset = InventoryItem.objects.filter(type=1)
    serializer_class = InventoryItemSerializer

class InventoryExcludingEquipment(ListAPIView):
    queryset = InventoryItem.objects.exclude(type=0)
    serializer_class = InventoryItemSerializer

####################consumeable views##################################################
class ConsumableAPIView(ModelViewSet):
    queryset = InventoryItem.objects.filter(type=2)
    serializer_class = InventoryItemSerializer

class ItemsExcludingConsumable(ListAPIView):
    queryset = InventoryItem.objects.exclude(type=2)
    serializer_class = InventoryItemSerializer


class RawMaterialAPIView(ListAPIView):
    queryset = InventoryItem.objects.filter(type=2)
    serializer_class = InventoryItemSerializer


class ItemsExcludingRawMaterial(ListAPIView):
    queryset = InventoryItem.objects.exclude(type=2)
    serializer_class = InventoryItemSerializer



