from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from inventory.models import (
						DebitNote,
						DebitNoteLine
					)

from inventory.serializers import (
						DebitNoteSerializer,
						DebitNoteLineSerializer
					)

class DebitNoteViewSet(ModelViewSet):
	queryset = DebitNote.objects.all()
	serializer_class = DebitNoteSerializer

	@action(detail=False, methods=['get'])
	def returned_items(self, request, id=None):
		note = self.get_object()
		items = DebitNoteLine.objects.filter(note=note)
		serializer = DebitNoteLineSerializer(items, many=True)
		return Response(serializer.data)

	@action(detail=False, methods=['get'])
	def returned_value(self, request, id=None):
		note = self.get_object()
		total_returned = note.returned_total
		return Response(total_returned)

		# TODO Call a signal to hit the journal entry upon creation of the debitnote


class DebitNoteLineViewSet(ModelViewSet):
	queryset = DebitNoteLine.objects.all()
	serializer_class = DebitNoteLineSerializer

	@action(detail=False, methods=['get'])
	def returned_goods_value(self, request, id=None):
		line = self.get_object()
		total_value = line.returned_value
		return Response(total_value)
