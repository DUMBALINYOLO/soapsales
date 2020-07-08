from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from accounts.models import *
from accounts.serializers import (
                        BillSerializer,
                        BillPaymentSerializer,
                        BillCreateSerializer,
                        BillPaymentCreateSerializer
                    )



class BillViewset(ModelViewSet):
    queryset = Bill.objects.all()
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]


    def get_serializer_class(self):
        if self.action == 'create':
            return BillCreateSerializer
        return BillSerializer



class BillPaymentViewset(ModelViewSet):
    queryset = BillPayment.objects.all()
    permission_classes = [
        permissions.IsAuthenticated,
    ]    

    def get_serializer_class(self):
        if self.action == 'create':
            return BillPaymentCreateSerializer
        return  BillPaymentSerializer
