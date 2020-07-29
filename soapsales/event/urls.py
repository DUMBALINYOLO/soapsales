from django.urls import path
from rest_framework.routers import DefaultRouter

from event.apis import (
		EventConfigViewSet,
		EventViewSet,
	)

router =  DefaultRouter()

router.register(r'events', EventViewSet)
router.register(r'event-config', EventConfigViewSet)

urlpatterns = router.urls 

