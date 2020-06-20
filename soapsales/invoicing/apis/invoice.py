from rest_framework import viewsets 
from invoicing.models import (
							Invoice,
							InvoiceLine,
							ProductLineComponent,
						)
from invoicing.serializers import (
								QuotationListSerializer,
								QuotationCreateSerializer,
								QuotationDetailSerializer,
								InvoiceListSerializer,
								InvoiceCreateSerializer,
								InvoiceDetailSerializer,
								ProductLineComponentListSerializer,
								ProductLineComponentCreateSerializer,
								ProductLineComponentDetailSerializer
							)


class QuotationViewSet(viewsets.ModelViewSet):
	queryset = Invoice.objects.filter(status='quotation')

	def get_serializer_class(self):
		if self.action == 'list':
		    return QuotationListSerializer
		elif self.action == 'create':
			return QuotationCreateSerializer
		return QuotationDetailSerializer


class InvoiceViewSet(viewsets.ModelViewSet):
	queryset = Invoice.objects.exclude(status='quotation')

	def get_serializer_class(self):
		if self.action == 'list':
		    return InvoiceListSerializer
		elif self.action == 'create':
			return InvoiceCreateSerializer
		return InvoiceDetailSerializer



class ProductLineComponentViewSet(viewsets.ModelViewSet):
	queryset = ProductLineComponent.objects.all()

	def get_serializer_class(self):
		if self.action == 'list':
		    return ProductLineComponentListSerializer
		elif self.action == 'create':
			return ProductLineComponentCreateSerializer
		return ProductLineComponentDetailSerializer
