from rest_framework import routers

from inventory.apis import (
                    # InventorySettingsViewset,
                    InventoryControllerViewset,
                    UnitOfMeasureViewset,
                    CategoryViewset,
                    DebitNoteViewSet,
                    OrderViewSet,
                    OrderPaymentViewSet,
                    InventoryItemViewSet
                )

router = routers.DefaultRouter()


# router.register(r'config', InventorySettingsViewset)
router.register(r'inventory-categories', CategoryViewset )
router.register(r'unit-of-measure', UnitOfMeasureViewset)
router.register(r'inventory-controllers', InventoryControllerViewset)
router.register(r'debit-note',  DebitNoteViewSet)
router.register(r'orders',  OrderViewSet)
router.register(r'orderpayments',  OrderPaymentViewSet)
router.register(r'inventoryitem',  InventoryItemViewSet)

urlpatterns = router.urls
