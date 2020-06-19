from rest_framework.routers import DefaultRouter
from invoicing.apis import (
		CreditNoteViewSet,
		CustomerViewSet,
		PaymentViewSet,
		SalesRepresentativeViewSet

	)

router = DefaultRouter()

router.register(r'creditnote', CreditNoteViewSet)
router.register(r'customers', CustomerViewSet)
router.register(r'payments', PaymentViewSet)
router.register(r'sales-reps', SalesRepresentativeViewSet)


urlpatterns = router.urls

