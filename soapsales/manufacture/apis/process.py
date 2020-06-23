from rest_framework.viewsets import ModelViewSet
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

    def get_serializer_class(self):
        if self.action in ['list', 'retrieve']:
            return ProcessSerializer
        return  ProcessCreateSerializer


class ProductionOrderViewSet(ModelViewSet):
    queryset = ProductionOrder.objects.all()

    def get_serializer_class(self):
        if self.action == 'list':
            return ProductionOrderSerializer
        return  ProductionOrderCreateSerializer

class ProcessRateViewSet(ModelViewSet):
    serializer_class = ProcessRateSerializer
    queryset = ProcessRate.objects.all()

class ProductViewSet(ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

class ProcessProductViewSet(ModelViewSet):
    serializer_class = ProcessProductSerializer
    queryset = ProcessProduct.objects.all()


class WasteGenerationReportViewSet(ModelViewSet):
    serializer_class = WasteGenerationReportSerializer
    queryset = WasteGenerationReport.objects.all()

class BillOfMaterialsViewSet(ModelViewSet):
    queryset = BillOfMaterials.objects.all()

    def get_serializer_class(self):
        if self.action == 'list':
            return BillOfMaterialsListSerializer
        elif self.action == 'retrieve':
            return BillOfMaterialsDetailSerializer
        else:
            return BillOfMaterialsCreateSerializer


