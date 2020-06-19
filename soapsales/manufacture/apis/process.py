from rest_framework.viewsets import ModelViewSet
from manufacture.models import *
from manufacture.serializers import (
                        ProcessSerializer,
                        ProductionOrderSerializer,
                        ProcessRateSerializer,
                        ProductSerializer,
                        ProcessProductSerializer,
                        WasteGenerationReportSerializer,
                        BillOfMaterialsCreateSerializer,
                        BillOfMaterialsListSerializer,
                        BillOfMaterialsDetailSerializer
                       
                    )


class ProcessViewSet(ModelViewSet):
    serializer_class = ProcessSerializer
    queryset = Process.objects.all()


class ProductionOrderViewSet(ModelViewSet):
    serializer_class = ProductionOrderSerializer
    queryset = ProductionOrder.objects.all()

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


