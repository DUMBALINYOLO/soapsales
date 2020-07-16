from rest_framework import routers

from .api import (
                    NoteViewSet,
                    OrganizationViewSet,

                )

router = routers.DefaultRouter()


router.register(r'notes', NoteViewSet )
router.register(r'organization-config', OrganizationViewSet)

urlpatterns = router.urls
