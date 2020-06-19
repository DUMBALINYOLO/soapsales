from rest_framework import viewsets
from invoicing.models import CreditNote
from invoicing.serializers import(
							CreditNoteListSerializer,
							CreditNoteCreateSerializer,
							CreditNoteDetailSerializer
						)


class CreditNoteViewSet(viewsets.ModelViewSet):
	queryset = CreditNote.objects.all()


	def get_serializer_class(self):
		if self.action == 'list':
		    return CreditNoteListSerializer
		elif self.action == 'create':
			return CreditNoteCreateSerializer
		return CreditNoteDetailSerializer