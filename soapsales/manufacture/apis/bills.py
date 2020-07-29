from rest_framework.viewsets import ModelViewSet
from rest_framework  import permissions
from manufacture.models import BillOfMaterials
from manufacture.serializers import (
                        BillOfMaterialsCreateSerializer,
                        BillOfMaterialsListSerializer,
                        BillOfMaterialsDetailSerializer,
 
                    )



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
