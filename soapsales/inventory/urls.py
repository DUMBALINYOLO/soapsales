from rest_framework import routers

from inventory.apis import (
                    # InventorySettingsViewset,
                    InventoryControllerViewset,
                    UnitOfMeasureViewset,
                    CategoryViewset,
                    DebitNoteViewSet,
                    OrderViewSet,
                    OrderPaymentViewSet,
                    InventoryItemViewSet,
                    ProductComponentViewSet,
                    EquipmentComponentViewSet,
                    SupplierViewSet,
                    WareHouseViewSet,
                    WareHouseItemViewSet,
                    StorageMediaViewSet,
                    OrderItemViewSet,
                    StockReceiptViewSet,
                    StockAdjustmentViewSet,
                    InventoryStockTakeViewSet,
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
router.register(r'product-components',  ProductComponentViewSet)
router.register(r'equipment-components',  EquipmentComponentViewSet)
router.register(r'suppliers',  SupplierViewSet)
router.register(r'warehouses',  WareHouseViewSet)
router.register(r'warehouseitems',  WareHouseItemViewSet)
router.register(r'storagemedia',  StorageMediaViewSet)
router.register(r'orderitems',  OrderItemViewSet)
router.register(r'inventoryreceipts',  StockReceiptViewSet)
router.register(r'stockadjustments',  StockAdjustmentViewSet)
router.register(r'inventorystocktakes', InventoryStockTakeViewSet)

urlpatterns = router.urls
