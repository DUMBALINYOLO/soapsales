from rest_framework import viewsets, permissions

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
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]


class TaxViewset(viewsets.ModelViewSet):
    queryset = Tax.objects.all()
    serializer_class = TaxSerializer
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]



class CurrencyViewset(viewsets.ModelViewSet):
    queryset = Currency.objects.all()
    serializer_class = CurrencySerializer
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]


class BookkeeperViewset(viewsets.ModelViewSet):
    queryset = Bookkeeper.objects.all()
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]


    def get_serializer_class(self):
        if self.action == 'create':
            return BookkeeperCreateSerializer
        return BookkeeperListSerializer
    
