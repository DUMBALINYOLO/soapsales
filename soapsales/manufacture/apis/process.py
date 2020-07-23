from rest_framework.viewsets import ModelViewSet
from rest_framework  import permissions
from manufacture.models import *
from manufacture.serializers import (
                        ProcessSerializer,
                        ProcessCreateSerializer,
                        ProductionOrderSerializer,
                        ProductionOrderCreateSerializer,
                        ProcessRateSerializer,
                        ProductSerializer,
                        ProcessProductSerializer,
                        WasteGenerationReportSerializer,
                        BillOfMaterialsCreateSerializer,
                        BillOfMaterialsListSerializer,
                        BillOfMaterialsDetailSerializer,
                        ProcessRateCreateUpdateSerializer,
                        ProcessProductCreateUpdateSerializer,
                        WasteGenerationReportCreateUpdateSerializer
                       
                    )


class ProcessViewSet(ModelViewSet):
    queryset = Process.objects.all()
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]

    def get_serializer_class(self):
        if self.action in ['list', 'retrieve']:
            return ProcessSerializer
        return  ProcessCreateSerializer


class ProductionOrderViewSet(ModelViewSet):
    queryset = ProductionOrder.objects.all()
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]

    def get_serializer_class(self):
        if self.action == 'list':
            return ProductionOrderSerializer
        return  ProductionOrderCreateSerializer

class ProcessRateViewSet(ModelViewSet):
    queryset = ProcessRate.objects.all()
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]

    def get_serializer_class(self):
        if self.action in ['create', 'put']:
            return ProcessRateCreateUpdateSerializer
        return ProcessRateSerializer

class ProductViewSet(ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]

class ProcessProductViewSet(ModelViewSet):
    queryset = ProcessProduct.objects.all()
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]

    def get_serializer_class(self):
        if self.action in ['create', 'put']:
            return ProcessProductCreateUpdateSerializer
        return ProcessProductSerializer


class WasteGenerationReportViewSet(ModelViewSet):
    queryset = WasteGenerationReport.objects.all()
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]
    def get_serializer_class(self):
        if self.action in ['create', 'put']:
            return WasteGenerationReportCreateUpdateSerializer
        return WasteGenerationReportSerializer



class BillOfMaterialsViewSet(ModelViewSet):
    queryset = BillOfMaterials.objects.all()
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]

    def get_serializer_class(self):
        if self.action == 'list':
            return BillOfMaterialsListSerializer
        elif self.action == 'retrieve':
            return BillOfMaterialsDetailSerializer
        else:
            return BillOfMaterialsCreateSerializer


