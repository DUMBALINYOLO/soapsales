from rest_framework.routers import DefaultRouter

from manufacture.apis import (
                    ProcessMachineViewset,
                    ProcessMachineGroupViewset,
                    ProcessViewSet,
                    ProductionOrderViewSet,
                    ProcessRateViewSet,
                    ProcessProductViewSet,
                    WasteGenerationReportViewSet,
                    BillOfMaterialsViewSet,
                    ManufucturingPersonelViewSet,
                    ManufucturingTeamViewSet,
                    ShiftViewSet,
                    ShiftScheduleViewSet,
                    ProcessedProductsStockReceiptViewSet,
                    ProcessedProductsStockTakeViewSet,
                    ProcessedProductStockAdjustmentViewSet,
                    SalesGroupUnitPricingViewSet, 


                )


router = DefaultRouter()

router.register(r'process-machines', ProcessMachineViewset)
router.register(r'process-machine-group', ProcessMachineGroupViewset)
router.register(r'process', ProcessViewSet)
router.register(r'shifts', ShiftViewSet)
router.register(r'sales-groups-pricings', SalesGroupUnitPricingViewSet)
router.register(r'shift-schedules', ShiftScheduleViewSet)
router.register(r'process-rates', ProcessRateViewSet)
router.register(r'production-orders', ProductionOrderViewSet)
router.register(r'manufacturing-teams', ManufucturingTeamViewSet)
router.register(r'manufacturing-personels', ManufucturingPersonelViewSet)
router.register(r'process-products', ProcessProductViewSet)
router.register(r'waste-generation-reports', WasteGenerationReportViewSet)
router.register(r'bills-of-materials', BillOfMaterialsViewSet)
router.register(r'processed-product-stock-receipts', ProcessedProductsStockReceiptViewSet)
router.register(r'processed-product-stock-adjustments', ProcessedProductStockAdjustmentViewSet)
router.register(r'processed-product-stock-takes', ProcessedProductsStockTakeViewSet)



urlpatterns = router.urls
