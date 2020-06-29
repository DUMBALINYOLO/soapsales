from django_filters.rest_framework import FilterSet, DjangoFilterBackend
from django_filters import NumberFilter
from rest_framework import viewsets
from rest_framework import generics, permissions, response
from stock.models import (
                ProcessedProduct,
                SalesGroup,
                ProcessedProductComponent,
              )
from .serializers import (
					ProcessedProductSerializer,
					StockQuantitySerializer,
					SalesGroupSerializer,
					ProcessedProductComponentSerializer
				)





class StockDetail(generics.RetrieveUpdateDestroyAPIView):
    """

    get:
    Return a single StockItem object

    post:
    Update a StockItem

    delete:
    Remove a StockItem
    """

    queryset = ProcessedProduct.objects.all()
    serializer_class = ProcessedProductSerializer
    lookup_field = 'id'
    permission_classes = [
        permissions.IsAuthenticated,
    ]


# class StockFilter(FilterSet):
#     min_stock = NumberFilter(name='quantity', lookup_expr='gte')
#     max_stock = NumberFilter(name='quantity', lookup_expr='lte')

#     class Meta:
#         model = ProcessedProduct
#         fields = ['quantity','product']


class StockList(generics.ListCreateAPIView):
    """

    get:
    Return a list of all StockItem objects
    (with optional query filters)

    post:
    Create a new StockItem
    """

    queryset = ProcessedProduct.objects.all()
    serializer_class = ProcessedProductSerializer
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    filter_backends = (DjangoFilterBackend,)
    # filter_class = StockFilter


class StocktakeEndpoint(generics.UpdateAPIView):

    queryset = ProcessedProduct.objects.all()
    serializer_class = StockQuantitySerializer
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def update(self, request, *args, **kwargs):
        object = self.get_object()
        object.stocktake(request.data['quantity'], request.user)

        serializer = self.get_serializer(object)

        return response.Response(serializer.data)


class AddStockEndpoint(generics.UpdateAPIView):

    queryset = ProcessedProduct.objects.all()
    serializer_class = StockQuantitySerializer
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def update(self, request, *args, **kwargs):
        object = self.get_object()
        object.add_stock(request.data['quantity'])

        serializer = self.get_serializer(object)

        return response.Response(serializer.data)



class SalesGroupViewSet(viewsets.ModelViewSet):
    queryset = SalesGroup.objects.all()
    serializer_class = SalesGroupSerializer
    permission_classes = [
        permissions.IsAuthenticated,
    ]


class ProcessedProductComponentViewSet(viewsets.ModelViewSet):
    queryset = ProcessedProductComponent.objects.all()
    serializer_class = ProcessedProductComponentSerializer
    permission_classes = [
        permissions.IsAuthenticated,
    ]




