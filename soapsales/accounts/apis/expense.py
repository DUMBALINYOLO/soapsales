from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from accounts.models import *
from accounts.serializers import (
                        BillSerializer,
                        BillPaymentSerializer,
                        BillCreateSerializer
                    )



class BillViewset(ModelViewSet):
    queryset = Bill.objects.all()
    serializer_class = BillSerializer

    def get_serializer_class(self):
        if self.action == 'create':
            return BillCreateSerializer
        return BillSerializer



class BillPaymentViewset(ModelViewSet):
    queryset = BillPayment.objects.all()
    serializer_class = BillPaymentSerializer
