

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from inventory.models import *
from inventory.serializers import (
                    OrderItemCreateSerializer,
                    OrderItemListSerializer,
                    OrderCreateSerializer,
                    OrderSerializer,
                    OrderPaymentSerializer
    )


class OrderSerializer(viewsets.ModelViewSet):
    queryset = Order.objects.all()

    def get_serializer_class(self):
        if self.action != 'list' or 'retrieve':
            return OrderCreateSerializer
        return OrderSerializer

class OrderItemSerializer(viewsets.ModelViewSet):
    queryset = OrderItem.objects.all()

    def get_serializer_class(self):
        if self.action != 'list' and 'retrieve':
            return OrderItemCreateSerializer
        return OrderItemListSerializer


class OrderSerializer(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderPaymentSerializer

    