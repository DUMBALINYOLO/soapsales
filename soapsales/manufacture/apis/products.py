from rest_framework.viewsets import ModelViewSet
from rest_framework  import permissions
from manufacture.models import ProcessProduct, SalesGroupUnitPricing
from manufacture.serializers import (
                        ProcessProductListSerializer,
                        ProcessProductDetailSerializer,
                        ProcessProductCreateUpdateSerializer,
                        SalesGroupUnitPricingCreateUpdateSerializer,
                        SalesGroupUnitPricingSerializer,
 
                    )


class ProcessProductViewSet(ModelViewSet):
    queryset = ProcessProduct.objects.all()
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]

    def get_serializer_class(self):
        if self.action in ['create', 'put']:
            return ProcessProductCreateUpdateSerializer
        if self.action == 'retrieve':
        	return ProcessProductDetailSerializer
        return ProcessProductListSerializer


class SalesGroupUnitPricingViewSet(ModelViewSet):

    queryset = SalesGroupUnitPricing.objects.all()

    def get_serializer_class(self):
        if self.action in ['create', 'put']:
            return SalesGroupUnitPricingCreateUpdateSerializer
        return SalesGroupUnitPricingSerializer