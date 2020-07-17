from .models import (
				Note,
				Organization,
				)
from .serializers import (
				NoteSerializer,
				OrganizationSerializer
					)
from rest_framework import viewsets, generics, status, views
from rest_framework.response import Response


from .const import (
				ACCOUNT_TYPES_CATEGORY_CHOICES,
				ACCOUNT_TYPES_CLASSIFICATION_CHOICES,
				ASSET_DEPRECIATION_METHOD_CHOICES, 
				ASSET_TYPE_CHOICES, 
				ACCOUNTING_PERIODS_CHOICES, 
				JOURNAL_ENTRY_TYPES_CHOICES,
				EMPLOYEES_GENDER_CHOICES, 
				INVENTORY_TYPES_CHOICES, 
				PRODUCT_COMPONENT_PRICING_CHOICES,
				EQUIPMENT_COMPONENT_CONDITION_CHOICES,
				INVENTORY_ORDER_STATUS_CHOICES,
				INVOICE_SALE_STATUS_CHOICES,
				INVOCE_LINE_CHOICES, 
				CUSTOMER_PAYMENT_METHODS_CHOICES,
				PROCCES_RATE_UNIT_TIME_CHOICES,
				MANUFACTURING_PRODUCT_TYPES,
				BILL_OF_MATERIALS_LINE_CHOICES,

			)


class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer


class OrganizationViewSet(viewsets.ModelViewSet):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer



class AccountTypesCategoryChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(ACCOUNT_TYPES_CATEGORY_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
			print(result_list)
		return Response(my_choices, status=status.HTTP_200_OK)






class AccountTypesClassificationChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(ACCOUNT_TYPES_CLASSIFICATION_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
			print(result_list)
		return Response(my_choices, status=status.HTTP_200_OK)



class AssetsDepreciationMethodChoicesAPIView(generics.GenericAPIView):

	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(ASSET_DEPRECIATION_METHOD_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)






class AssetTypesChoicesAPIView(views.APIView):

	available_dicts = {
		"ASSET_TYPE_CHOICES": ASSET_TYPE_CHOICES,
	}

	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict()
		for key, value in choice_dict.items(ASSET_TYPE_CHOICES):

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)





class AccountingPeriodsChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(ACCOUNTING_PERIODS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class JournalEntryTypesChoicesAPIView(views.APIView):

	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(JOURNAL_ENTRY_TYPES_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)




class EmployeesGenderChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(EMPLOYEES_GENDER_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class InventoryTypesChoicesAPIView(views.APIView):

	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(INVENTORY_TYPES_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class ProductComponentPricingChoicesAPIView(views.APIView):

	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(PRODUCT_COMPONENT_PRICING_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class EquipmentComponentConditionChoicesAPIView(views.APIView):

	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(EQUIPMENT_COMPONENT_CONDITION_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class InventoryOrderStatusChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(INVENTORY_ORDER_STATUS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)



class InvoiceSaleStatusChoicesAPIView(views.APIView):

	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict()
		for key, value in choice_dict.items(INVOICE_SALE_STATUS_CHOICES):

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)





class InvoiceLineChoicesAPIView(views.APIView):

	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(INVOCE_LINE_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)




class CustomerPaymentMethodsChoicesAPIView(views.APIView):

	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(CUSTOMER_PAYMENT_METHODS_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)




class ProcessRateUnitTimeChoicesAPIView(views.APIView):

	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(PROCCES_RATE_UNIT_TIME_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)




class ManufacturingProductTypesChoicesAPIView(views.APIView):

	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict()
		for key, value in choice_dict.items(MANUFACTURING_PRODUCT_TYPES):

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)


class BillOfMaterialsLineChoicesAPIView(views.APIView):


	def get(self, request, format=None):

		my_choices = []
		choice_dict = dict(BILL_OF_MATERIALS_LINE_CHOICES)
		for key, value in choice_dict.items():

			itered_dict = {"key": key, "value": value}
			my_choices.append(itered_dict)
		return Response(my_choices, status=status.HTTP_200_OK)









