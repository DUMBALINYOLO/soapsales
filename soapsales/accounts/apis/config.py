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
    BookkeeperCreateSerializer,
    BookkeeperListSerializer,
)


class AccountingSettingsViewset(viewsets.ModelViewSet):
    queryset = AccountingSettings.objects.all()
    serializer_class = AccountingSettingsSerializer


class TaxViewset(viewsets.ModelViewSet):
    queryset = Tax.objects.all()
    serializer_class = TaxSerializer
    paginate_by = 10
    paginate_by_param = 'page_size'
    max_paginate_by = 100

class CurrencyViewset(viewsets.ModelViewSet):
    queryset = Currency.objects.all()
    serializer_class = CurrencySerializer

class BookkeeperViewset(viewsets.ModelViewSet):
    queryset = Bookkeeper.objects.all()

    def get_serializer_class(self):
        if self.action == 'create':
            return BookkeeperCreateSerializer
        return BookkeeperListSerializer
    
