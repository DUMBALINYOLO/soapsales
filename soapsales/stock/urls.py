from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import (
		SalesGroupViewSet,
		ProcessedProductComponentViewSet,
		ProcessedProductsStockReceiptViewSet,
		ProcessedProductsStockTakeViewSet,
		ProcessedProductStockAdjustmentViewSet,
		ProcessedProductViewSet,
	)

router =  DefaultRouter()

router.register(r'pricing-groups', SalesGroupViewSet)
router.register(r'processed-product-components', ProcessedProductComponentViewSet)
router.register(r'processed-product-stock-takes', ProcessedProductsStockTakeViewSet)
router.register(r'processed-products', ProcessedProductViewSet)
router.register(r'processed-product-stock-receipts', ProcessedProductsStockReceiptViewSet)
router.register(r'processed-product-stock-adjustments', ProcessedProductStockAdjustmentViewSet)





urlpatterns = router.urls 

