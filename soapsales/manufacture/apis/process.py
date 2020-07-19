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
    serializer_class = ProcessRateSerializer
    queryset = ProcessRate.objects.all()
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]

class ProductViewSet(ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]

class ProcessProductViewSet(ModelViewSet):
    serializer_class = ProcessProductSerializer
    queryset = ProcessProduct.objects.all()
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]


class WasteGenerationReportViewSet(ModelViewSet):
    serializer_class = WasteGenerationReportSerializer
    queryset = WasteGenerationReport.objects.all()
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]

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


