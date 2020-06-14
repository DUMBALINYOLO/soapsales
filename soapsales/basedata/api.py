from .models import *
from .serializers import *
from rest_framework import viewsets


class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

class IndividualViewSet(viewsets.ModelViewSet):
    queryset = Individual.objects.all()
    serializer_class = IndividualSerializer

class VendorOrganizationViewSet(viewsets.ModelViewSet):
    queryset = VeOrganization.objects.all()
    serializer_class = VendorOrganizationSerializer
