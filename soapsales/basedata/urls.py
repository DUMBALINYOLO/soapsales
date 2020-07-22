from rest_framework import routers
from django.urls import path

from .api import (
            NoteViewSet,
            OrganizationViewSet,
            AccountTypesCategoryChoicesAPIView,
            AccountTypesClassificationChoicesAPIView,
            AssetsDepreciationMethodChoicesAPIView,
            AssetTypesChoicesAPIView,
            AccountingPeriodsChoicesAPIView,
            JournalEntryTypesChoicesAPIView,
            EmployeesGenderChoicesAPIView,
            InventoryTypesChoicesAPIView,
            ProductComponentPricingChoicesAPIView,
            EquipmentComponentConditionChoicesAPIView,
            InventoryOrderStatusChoicesAPIView,
            InvoiceSaleStatusChoicesAPIView,
            InvoiceLineChoicesAPIView,
            CustomerPaymentMethodsChoicesAPIView,
            ProcessRateUnitTimeChoicesAPIView,
            ManufacturingProductTypesChoicesAPIView,
            BillOfMaterialsLineChoicesAPIView,
            ProcessedProductsStockStatusChoicesAPIView,
            ManufacturingProcessChoicesAPIView,

        )

router = routers.DefaultRouter()


router.register(r'notes', NoteViewSet )
router.register(r'organization-config', OrganizationViewSet)


urlpatterns = [
    path('account-types-category-choices/', AccountTypesCategoryChoicesAPIView.as_view(), name='account-types-category-choices'),
    path('account-types-classification-choices/', AccountTypesClassificationChoicesAPIView.as_view(), name='account-types-classification-choices'),
    path('assets-depriciation-method-choices/', AssetsDepreciationMethodChoicesAPIView.as_view(), name='assets-depriciation-method-choices'),
    path('asset-types-choices/', AssetTypesChoicesAPIView.as_view(), name='asset-types-choices'),
    path('accounting-periods-choices/', AccountingPeriodsChoicesAPIView.as_view(), name='accounting-periods-choices'),
    path('journal-entry-types-choices/', JournalEntryTypesChoicesAPIView.as_view(), name='journal-entry-types-choices'),
    path('employees-gender-choices/', EmployeesGenderChoicesAPIView.as_view(), name='employees-gender-choices'),
    path('inventory-types-choices/', InventoryTypesChoicesAPIView.as_view(), name='inventory-types-choices'),
    path('product-component-pricing-choices/', ProductComponentPricingChoicesAPIView.as_view(), name='product-component-pricing-choices'),
    path('equipment-component-condition-choices/', EquipmentComponentConditionChoicesAPIView.as_view(), name='equipment-component-condition-choices'),
    path('inventory-order-status-choices/', InventoryOrderStatusChoicesAPIView.as_view(), name='inventory-order-status-choices'),
    path('invoice-sales-choices/', InvoiceSaleStatusChoicesAPIView.as_view(), name='invoice-sales-choices'),
    path('invoice-line-choices/', InvoiceLineChoicesAPIView.as_view(), name='invoice-line-choices'),
    path('manufacturing-process-choices/', ManufacturingProcessChoicesAPIView.as_view(), name='manufacturing-process-choices'),
    path('customer-payment-methods-choices/', CustomerPaymentMethodsChoicesAPIView.as_view(), name='customer-payment-methods-choices'),
    path('process-rate-unit-time-choices/', ProcessRateUnitTimeChoicesAPIView.as_view(), name='process-rate-unit-time-choices'),
    path('manufacturing-product-types-choices/', ManufacturingProductTypesChoicesAPIView.as_view(), name='manufacturing-product-types-choices'),
    path('bill-of-materials-line-choices/', BillOfMaterialsLineChoicesAPIView.as_view(), name='bill-of-materials-line-choices'),
    path('processed-products-stock-status-choices/', ProcessedProductsStockStatusChoicesAPIView.as_view(), name='processed-products-stock-status-choices'),



] + router.urls 
