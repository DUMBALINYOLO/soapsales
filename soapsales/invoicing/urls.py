from rest_framework.routers import DefaultRouter
from invoicing.apis import (
		CreditNoteViewSet,
		CustomerViewSet,
		PaymentViewSet,
		SalesRepresentativeViewSet,
		QuotationViewSet,
		InvoiceViewSet,
		ProductLineComponentViewSet,
		InvoiceLineViewSet,
		CustomerReceiptViewSet,

	)

router = DefaultRouter()

router.register(r'creditnote', CreditNoteViewSet)
router.register(r'customers', CustomerViewSet)
router.register(r'payments', PaymentViewSet)
router.register(r'receipts', CustomerReceiptViewSet)
router.register(r'invoicelines', InvoiceLineViewSet)
router.register(r'sales-reps', SalesRepresentativeViewSet)
router.register(r'invoices', InvoiceViewSet, basename='invoices')
router.register(r'quotations', QuotationViewSet, basename='quotations')
router.register(r'productlinecomponent', ProductLineComponentViewSet)



urlpatterns = router.urls

