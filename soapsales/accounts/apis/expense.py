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
        if self.action in ['create', 'put']:
            return BillCreateSerializer
        return BillSerializer

    # def create(self, request, *args, **kwargs):
    #     serializer = BillCreateSerializer(data=request.data, context={"request": request}) # change here 
    #     if serializer.is_valid():
    #         print(serializer.validated_data)
    #         serializer.save()
    #         print(serializer.data)
    #         return Response(serializer.data)
    #     else:
    #         print(serializer.errors)
    #     return Response(serializer.errors)





class BillPaymentViewset(ModelViewSet):
    queryset = BillPayment.objects.all()
    permission_classes = [
        permissions.IsAuthenticated,
    ]    

    def get_serializer_class(self):
        if self.action in ['create', 'put']:
            return BillPaymentCreateSerializer
        return  BillPaymentSerializer
