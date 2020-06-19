from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import (
		StockDetail,
		StockList,
		StocktakeEndpoint,
		AddStockEndpoint,
		SalesGroupViewSet,
		ProcessedProductComponentViewSet
	)

router =  DefaultRouter()

router.register(r'pricing-groups', SalesGroupViewSet)
router.register(r'processed-product-components', ProcessedProductComponentViewSet)





urlpatterns = [
    path('stock-detail/', StockDetail.as_view(), name='stockitem-detail'),
    path('stocktake/', StocktakeEndpoint.as_view(), name='stockitem-stocktake'),
    path('add-stock/', AddStockEndpoint.as_view(), name='stockitem-add-stock'),
    path('stocklist/', StockList.as_view()),

] + router.urls 

