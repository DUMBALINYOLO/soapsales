from .models import (
				Note,
				Organization,
				)
from .serializers import (
				NoteSerializer,
				OrganizationSerializer
					)

from rest_framework import viewsets


class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer


class OrganizationViewSet(viewsets.ModelViewSet):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer

