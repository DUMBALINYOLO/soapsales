from rest_framework import viewsets

from accounts.models import (
    AccountingSettings,
    Tax,
    Bookkeeper,
    Currency
)


from accounts.serializers import(
    AccountingSettingsSerializer,
    TaxSerializer,
    CurrencySerializer,
    BookkeeperSerializer
)


class AccountingSettingsViewset(viewsets.ModelViewSet):
    queryset = AccountingSettings.objects.all()
    serializer_class = AccountingSettingsSerializer


class TaxViewset(viewsets.ModelViewSet):
    queryset = Tax.objects.all()
    serializer_class = TaxSerializer

class CurrencyViewset(viewsets.ModelViewSet):
    queryset = Currency.objects.all()
    serializer_class = CurrencySerializer

class BookkeeperViewset(viewsets.ModelViewSet):
    queryset = Bookkeeper.objects.all()
    serializer_class = BookkeeperSerializer
