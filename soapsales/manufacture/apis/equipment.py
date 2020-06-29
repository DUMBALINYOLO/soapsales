import os
import urllib
import json
from django.shortcuts import get_object_or_404


from manufacture.serializers import (
            ProcessMachineSerializer,
            ProcessMachineGroupSerializer,
            ProcessMachineGroupCreateSerializer
        )
from manufacture.serializers import (
            ProcessMachine,
            ProcessMachineGroup
        )

from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from inventory.models import UnitOfMeasure


class ProcessMachineViewset(ModelViewSet):
    queryset = ProcessMachine.objects.all() # call prefetch related in the Model Manager
    serializer_class = ProcessMachineSerializer
    permission_classes = [
        permissions.IsAuthenticated,
    ]



class ProcessMachineGroupViewset(ModelViewSet):
    queryset = ProcessMachineGroup.objects.all() # call prefetch related in the Model Manager
    serializer_class = ProcessMachineGroupSerializer
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def get_serializer_class(self):
        if self.action == 'create':
            return ProcessMachineGroupCreateSerializer
        if self.action == 'put':
            return ProcessMachineGroupCreateSerializer
        return ProcessMachineGroupSerializer
