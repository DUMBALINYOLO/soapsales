from rest_framework.viewsets import ModelViewSet
from rest_framework  import permissions
from manufacture.models import *
from manufacture.serializers import (
                        ProcessDetailSerializer,
                        ProcessListSerializer,
                        ProcessCreateUpdateSerializer,
                        ProcessRateSerializer,
                        ProcessRateCreateUpdateSerializer,
                       
                    )



class ProcessViewSet(ModelViewSet):
    queryset = Process.objects.all()
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]

    def get_serializer_class(self):
        if self.action in ['create', 'put']:
            return ProcessCreateUpdateSerializer
        elif self.action == 'retrieve':
            return ProcessDetailSerializer
        return ProcessListSerializer




class ProcessRateViewSet(ModelViewSet):
    queryset = ProcessRate.objects.all()
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]

    def get_serializer_class(self):
        if self.action in ['create', 'put']:
            return ProcessRateCreateUpdateSerializer
        return ProcessRateSerializer









