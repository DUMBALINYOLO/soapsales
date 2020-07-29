from rest_framework import viewsets
from event.models import (
			Event,
			PlannerConfig
	)
from event.serializers import (
			EventCreateUpdateSerializer,
			EventListSerializer,
			EventDetailSerializer,
			EventConfigSerializer
	)


class EventConfigViewSet(viewsets.ModelViewSet):

	serializer_class = EventConfigSerializer
	queryset = PlannerConfig.objects.all()



class EventViewSet(viewsets.ModelViewSet):

	queryset = Event.objects.all()

	def get_serializer_class(self):
		if self.action in ['create', 'put']:
			return EventCreateUpdateSerializer
		elif self.action == 'retrieve':
			return EventDetailSerializer
		return EventListSerializer