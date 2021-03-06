from rest_framework import viewsets, permissions
from invoicing.models import (
							Invoice,
							InvoiceLine,
							# ProductLineComponent,
						)
from invoicing.serializers import (
								QuotationListSerializer,
								QuotationCreateSerializer,
								QuotationDetailSerializer,
								InvoiceListSerializer,
								InvoiceCreateSerializer,
								InvoiceDetailSerializer,
								# ProductLineComponentListSerializer,
								# ProductLineComponentCreateSerializer,
								# ProductLineComponentDetailSerializer,
								InvoiceLineListSerializer,
							)


class QuotationViewSet(viewsets.ModelViewSet):
	queryset = Invoice.objects.filter(status='quotation')
	# permission_classes = [
 #        permissions.IsAuthenticated,
 #    ]

	def get_serializer_class(self):
		if self.action == 'list':
		    return QuotationListSerializer
		elif self.action == 'create':
			return QuotationCreateSerializer
		return QuotationDetailSerializer




class InvoiceViewSet(viewsets.ModelViewSet):
	queryset = Invoice.objects.exclude(status='quotation')
	# permission_classes = [
 #        permissions.IsAuthenticated,
 #    ]

	def get_serializer_class(self):
		if self.action == 'list':
		    return InvoiceListSerializer
		elif self.action == 'create':
			return InvoiceCreateSerializer
		return InvoiceDetailSerializer


class InvoiceLineViewSet(viewsets.ModelViewSet):
	queryset = InvoiceLine.objects.all()
	serializer_class = InvoiceLineListSerializer



# class ProductLineComponentViewSet(viewsets.ModelViewSet):
# 	queryset = ProductLineComponent.objects.all()
# 	# permission_classes = [
#  #        permissions.IsAuthenticated,
#  #    ]

# 	def get_serializer_class(self):
# 		if self.action == 'list':
# 		    return ProductLineComponentListSerializer
# 		elif self.action == 'create':
# 			return ProductLineComponentCreateSerializer
# 		return ProductLineComponentDetailSerializer
