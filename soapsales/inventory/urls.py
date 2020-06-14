from rest_framework import routers

from inventory.apis import (
                    # InventorySettingsViewset,
                    InventoryControllerViewset,
                    UnitOfMeasureViewset,
                    CategoryViewset,
                    DebitNoteViewSet,
                    DebitNoteLineViewSet
                )

router = routers.DefaultRouter()


# router.register(r'config', InventorySettingsViewset)
router.register(r'inventory-categories', CategoryViewset )
router.register(r'unit-of-measure', UnitOfMeasureViewset)
router.register(r'inventory-contollers', InventoryControllerViewset)
router.register(r'debit-note',  DebitNoteViewSet)
router.register(r'debit-note-line', DebitNoteLineViewSet)

urlpatterns = router.urls
