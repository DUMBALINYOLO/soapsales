from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from inventory.models import (
						DebitNote,
						DebitNoteLine
					)

from inventory.serializers import (
						DebitNoteListSerializer,
						DebitNoteCreateSerializer,
						DebitNoteListSerializer,
						DebitNoteDetailSerializer,
						DebitNoteLineSerializer,
					)

class DebitNoteViewSet(ModelViewSet):
	queryset = DebitNote.objects.all()
	# permission_classes = [
 #        permissions.IsAuthenticated,
 #    ]
	

	def get_serializer_class(self):
		if self.action == 'list':
		    return DebitNoteListSerializer
		elif self.action == 'retrieve':
			return DebitNoteDetailSerializer
		return DebitNoteCreateSerializer


