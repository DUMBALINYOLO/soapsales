from rest_framework.routers import DefaultRouter

from manufacture.apis import (
                    ProcessMachineViewset,
                    ProcessMachineGroupViewset,
                    ProcessViewSet,
                    ProductionOrderViewSet,
                    ProcessRateViewSet,
                    ProductViewSet,
                    ProcessProductViewSet,
                    WasteGenerationReportViewSet,
                    BillOfMaterialsViewSet,
                )


router = DefaultRouter()

router.register(r'process-machines', ProcessMachineViewset)
router.register(r'process-machine-group', ProcessMachineGroupViewset)
router.register(r'process', ProcessViewSet)
router.register(r'process-rates', ProcessRateViewSet)
router.register(r'production-orders', ProductionOrderViewSet)
router.register(r'products', ProductViewSet)
router.register(r'process-products', ProcessProductViewSet)
router.register(r'waste-generation-reports', WasteGenerationReportViewSet)
router.register(r'bills-of-materials', BillOfMaterialsViewSet)



urlpatterns = router.urls
