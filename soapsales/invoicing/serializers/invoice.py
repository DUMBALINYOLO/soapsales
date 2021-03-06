from rest_framework import serializers 
from invoicing.models import (
							Invoice,
							InvoiceLine,
						)
from drf_writable_nested.serializers import WritableNestedModelSerializer

class StringSerializer(serializers.StringRelatedField):

    def to_internal_value(self, value):
        return value


class InvoiceLineCreateSerializer(serializers.ModelSerializer):



	class Meta:
		model = InvoiceLine
		fields = ['pk', 'product', 'line_type', 'tax', 'discount']


class QuotationLineListSerializer(serializers.ModelSerializer):
	invoice = StringSerializer()
	tax = StringSerializer()
	product = StringSerializer()

	class Meta:
		model = InvoiceLine
		fields = ['id', 'invoice', 'product', 'line_type', 'tax', 'discount', 'total' ]


class InvoiceLineListSerializer(serializers.ModelSerializer):
	invoice = StringSerializer()
	tax = StringSerializer()
	product = StringSerializer()

	class Meta:
		model = InvoiceLine
		fields = [
			'id', 
			'invoice', 
			'product', 
			'line_type', 
			'tax', 
			'discount', 
			'total',
		]


class QuotationListSerializer(serializers.ModelSerializer):
	customer = StringSerializer()

	class Meta:
		model = Invoice
		fields = ['id', 'quotation_number', 'customer', 'purchase_order_number']



class QuotationCreateSerializer(WritableNestedModelSerializer):
	lines = InvoiceLineCreateSerializer(many=True)

	class Meta:
		model = Invoice
		fields = [
			'status',
			'customer', 
			'purchase_order_number',
			'quotation_date',
			'quotation_valid',
			'draft',
			'customer',
			'salesperson',
			'due',
			'terms',
			'comments',
			'ship_from',
			'lines',

		]



class QuotationDetailSerializer(serializers.ModelSerializer):
	lines = QuotationLineListSerializer(many=True, read_only=True)
	customer = StringSerializer()
	salesperson = StringSerializer()
	ship_from = StringSerializer()

	class Meta:
		model = Invoice
		fields = [
			'status',
			'customer', 
			'purchase_order_number',
			'quotation_date',
			'draft',
			'customer',
			'salesperson',
			'due',
			'terms',
			'comments',
			'ship_from',
			'lines',
			'cost_of_goods_sold',
			'total',
		]


class InvoiceListSerializer(serializers.ModelSerializer):
	customer = StringSerializer()

	class Meta:
		model = Invoice
		fields = ['id', 'invoice_number', 'customer', 'purchase_order_number']



class InvoiceCreateSerializer(WritableNestedModelSerializer):
	lines = InvoiceLineCreateSerializer(many=True)


	class Meta:
		model = Invoice
		fields = [
			'status',
			'customer', 
			'purchase_order_number',
			'invoice_validated_by',
			'draft',
			'customer',
			'salesperson',
			'due',
			'terms',
			'comments',
			'ship_from',
			'lines',

		]





class InvoiceDetailSerializer(serializers.ModelSerializer):
	lines = InvoiceLineListSerializer(many=True, read_only=True)
	customer = StringSerializer()
	salesperson = StringSerializer()
	ship_from = StringSerializer()

	class Meta:
		model = Invoice
		fields = [
			'status',
			'customer', 
			'purchase_order_number',
			'quotation_date',
			'draft',
			'customer',
			'salesperson',
			'due',
			'terms',
			'comments',
			'ship_from',
			'lines',
			'cost_of_goods_sold',
			'total',
			'overdue',
			'overdue_days',
			'on_credit',
			'total_paid',
			'total_due',
			'returned_total',
		]


# class ProductLineComponentListSerializer(serializers.ModelSerializer):
# 	product = StringSerializer()



# 	class Meta:
# 		model = ProductLineComponent
# 		fields = ['id', 'product', 'unit_price', 'value', 'quantity']



# class ProductLineComponentCreateSerializer(serializers.ModelSerializer):
# 	class Meta:
# 		model = ProductLineComponent
# 		fields = [
# 			'product', 
# 			'unit_price', 
# 			'value', 
# 			'quantity'
# 		]


# class ProductLineComponentDetailSerializer(serializers.ModelSerializer):
# 	product = StringSerializer()

# 	class Meta:
# 		model = ProductLineComponent
# 		fields = [
# 			'id',
# 			'product', 
# 			'unit_price', 
# 			'value', 
# 			'quantity',
# 			'returned_value',
# 		]