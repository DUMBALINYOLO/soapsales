from rest_framework import serializers

from stock.models import (
                ProcessedProduct,
                SalesGroup,
                ProcessedProductComponent,
              )


class ProcessedProductSerializer(serializers.HyperlinkedModelSerializer):
    """ Serializer for a StockItem
    """

    class Meta:
        model = ProcessedProduct
        fields = (
                  'product',
                  'location',
                  'quantity',
                  'status',
                  'notes',
                  'updated',
                  'product_component',
                  'stocktake_date',
                  'stocktake_user',
                  'review_needed',
                  'expected_arrival')

        """ These fields are read-only in this context.
        They can be updated by accessing the appropriate API endpoints
        """
        read_only_fields = ('stocktake_date',
                            'stocktake_user',
                            'updated',
                            #'quantity',
                            )


class StockQuantitySerializer(serializers.ModelSerializer):

    class Meta:
        model = ProcessedProduct
        fields = ('quantity',)

class SalesGroupSerializer(serializers.ModelSerializer):

  class Meta:
    model = SalesGroup
    fields = '__all__'


class ProcessedProductComponentSerializer(serializers.ModelSerializer):

  class Meta:
    model = ProcessedProductComponent
    fields = '__all__'
