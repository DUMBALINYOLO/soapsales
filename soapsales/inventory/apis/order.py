from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from inventory.models import *
from inventory.serializers import (
                    OrderCreateSerializer,
                    OrderDetailSerializer,
                    OrderListSerializer,
                    OrderPaymentSerializer
    )



class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()

    def get_serializer_class(self):
        if self.action == 'list' or 'destroy':
            return OrderListSerializer
        elif self.action == 'retrieve':
            return OrderDetailSerializer
        return OrderCreateSerializer

    @action(detail=True, methods=['post'])
    def receive_order(self, request, pk=None):
        order = self.get_object()
        order.receive()
        return Response(order)


    @action(detail=True, methods=['post'])
    def verify_order(self, request, pk=None):
        order = self.get_object()
        order.status = 'order'
        order.save()
        return Response(order)


class OrderPaymentViewSet(viewsets.ModelViewSet):
    queryset = OrderPayment.objects.all()
    serializer_class = OrderPaymentSerializer

    