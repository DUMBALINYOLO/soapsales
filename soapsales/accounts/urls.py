from rest_framework import routers

from accounts.apis import (
                    AccountViewSet,
                    AccountTypeViewSet,
                    JournalEntryViewSet,
                    InActiveAccountViewSet,
                    AssetViewSet,
                    AccountingSettingsViewset,
                    TaxViewset,
                    CurrencyViewset,
                    BookkeeperViewset,
                    BillViewset,
                    BillLineViewset,
                    BillPaymentViewset,
                    TransactionViewSet,
                )

router = routers.DefaultRouter()


router.register(r'accounts', AccountViewSet, basename='active-accounts')
router.register(r'account-types', AccountTypeViewSet)
router.register(r'journal-entries', JournalEntryViewSet)
router.register(r'in-active-accounts', InActiveAccountViewSet, basename='inactive-accounts')
router.register(r'assets', AssetViewSet)
router.register(r'accounting-configuration', AccountingSettingsViewset)
router.register(r'taxes', TaxViewset)
router.register(r'currencies', CurrencyViewset)
router.register(r'book-keepers', BookkeeperViewset)
router.register(r'my-bills', BillViewset)
router.register(r'bill-lines', BillLineViewset)
router.register(r'bill-payments', BillPaymentViewset)
router.register(r'transactions', TransactionViewSet)





urlpatterns = router.urls
