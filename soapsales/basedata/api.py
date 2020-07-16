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

		result_list = []
		chosen_dict = dict(ACCOUNT_TYPES_CATEGORY_CHOICES)
		for key, value in chosen_dict.items():

			tmp = {"key": key, "value": value}
			result_list.append(tmp)
			print(result_list)
		return Response(result_list, status=status.HTTP_200_OK)
		return Response({"Error": "Empty or invalid option given"}, status=status.HTTP_400_BAD_REQUEST)





class AccountTypesClassificationChoicesAPIView(views.APIView):

	# available_dicts = {
	# 	"ACCOUNT_TYPES_CLASSIFICATION_CHOICES": ACCOUNT_TYPES_CLASSIFICATION_CHOICES,
	# }

	def get(self, request, format=None):

		result_list = []
		chosen_dict = dict(ACCOUNT_TYPES_CLASSIFICATION_CHOICES)
		for key, value in chosen_dict.items():

			tmp = {"key": key, "value": value}
			result_list.append(tmp)
			print(result_list)
		return Response(result_list, status=status.HTTP_200_OK)
		return Response({"Error": "Empty or invalid option given"}, status=status.HTTP_400_BAD_REQUEST)






class AssetsDepreciationMethodChoicesAPIView(generics.GenericAPIView):

	available_dicts = {
		"ASSET_DEPRECIATION_METHOD_CHOICES ": ASSET_DEPRECIATION_METHOD_CHOICES ,
	}

	def get(self, request):
	    option = request.GET.get("option", None)
	    if option is not None and option in self.available_dicts:
	        result_list = []
	        chosen_dict = available_dicts[option]
	        for i in chosen_dict:
	            key, value = i
	            tmp = {"key": key, "value": value}
	            result_list.append(tmp)
	        return Response(result_list, status=status.HTTP_200_OK)
	    else:
	        return Response({"Error": "Empty or invalid option given"}, status=status.HTTP_400_BAD_REQUEST)




class AssetTypesChoicesAPIView(generics.GenericAPIView):

	available_dicts = {
		"ASSET_TYPE_CHOICES": ASSET_TYPE_CHOICES,
	}

	def get(self, request):
	    option = request.GET.get("option", None)
	    if option is not None and option in self.available_dicts:
	        result_list = []
	        chosen_dict = available_dicts[option]
	        for i in chosen_dict:
	            key, value = i
	            tmp = {"key": key, "value": value}
	            result_list.append(tmp)
	        return Response(result_list, status=status.HTTP_200_OK)
	    else:
	        return Response({"Error": "Empty or invalid option given"}, status=status.HTTP_400_BAD_REQUEST)




class AccountingPeriodsChoicesAPIView(generics.GenericAPIView):

	available_dicts = {
		"ACCOUNTING_PERIODS_CHOICES": ACCOUNTING_PERIODS_CHOICES,
	}

	def get(self, request):
	    option = request.GET.get("option", None)
	    if option is not None and option in self.available_dicts:
	        result_list = []
	        chosen_dict = available_dicts[option]
	        for i in chosen_dict:
	            key, value = i
	            tmp = {"key": key, "value": value}
	            result_list.append(tmp)
	        return Response(result_list, status=status.HTTP_200_OK)
	    else:
	        return Response({"Error": "Empty or invalid option given"}, status=status.HTTP_400_BAD_REQUEST)




class JournalEntryTypesChoicesAPIView(generics.GenericAPIView):

	available_dicts = {
		"JOURNAL_ENTRY_TYPES_CHOICES": JOURNAL_ENTRY_TYPES_CHOICES,
	}

	def get(self, request):
	    option = request.GET.get("option", None)
	    if option is not None and option in self.available_dicts:
	        result_list = []
	        chosen_dict = available_dicts[option]
	        for i in chosen_dict:
	            key, value = i
	            tmp = {"key": key, "value": value}
	            result_list.append(tmp)
	        return Response(result_list, status=status.HTTP_200_OK)
	    else:
	        return Response({"Error": "Empty or invalid option given"}, status=status.HTTP_400_BAD_REQUEST)




class EmployeesGenderChoicesAPIView(generics.GenericAPIView):

	available_dicts = {
		"EMPLOYEES_GENDER_CHOICES": EMPLOYEES_GENDER_CHOICES,
	}

	def get(self, request):
	    option = request.GET.get("option", None)
	    if option is not None and option in self.available_dicts:
	        result_list = []
	        chosen_dict = available_dicts[option]
	        for i in chosen_dict:
	            key, value = i
	            tmp = {"key": key, "value": value}
	            result_list.append(tmp)
	        return Response(result_list, status=status.HTTP_200_OK)
	    else:
	        return Response({"Error": "Empty or invalid option given"}, status=status.HTTP_400_BAD_REQUEST)



class InventoryTypesChoicesAPIView(generics.GenericAPIView):

	available_dicts = {
		"INVENTORY_TYPES_CHOICES": INVENTORY_TYPES_CHOICES,
	}

	def get(self, request):
	    option = request.GET.get("option", None)
	    if option is not None and option in self.available_dicts:
	        result_list = []
	        chosen_dict = available_dicts[option]
	        for i in chosen_dict:
	            key, value = i
	            tmp = {"key": key, "value": value}
	            result_list.append(tmp)
	        return Response(result_list, status=status.HTTP_200_OK)
	    else:
	        return Response({"Error": "Empty or invalid option given"}, status=status.HTTP_400_BAD_REQUEST)



class ProductComponentPricingChoicesAPIView(generics.GenericAPIView):

	available_dicts = {
		"PRODUCT_COMPONENT_PRICING_CHOICES": PRODUCT_COMPONENT_PRICING_CHOICES,
	}

	def get(self, request):
	    option = request.GET.get("option", None)
	    if option is not None and option in self.available_dicts:
	        result_list = []
	        chosen_dict = available_dicts[option]
	        for i in chosen_dict:
	            key, value = i
	            tmp = {"key": key, "value": value}
	            result_list.append(tmp)
	        return Response(result_list, status=status.HTTP_200_OK)
	    else:
	        return Response({"Error": "Empty or invalid option given"}, status=status.HTTP_400_BAD_REQUEST)



class EquipmentComponentConditionChoicesAPIView(generics.GenericAPIView):

	available_dicts = {
		"EQUIPMENT_COMPONENT_CONDITION_CHOICES": EQUIPMENT_COMPONENT_CONDITION_CHOICES,
	}

	def get(self, request):
	    option = request.GET.get("option", None)
	    if option is not None and option in self.available_dicts:
	        result_list = []
	        chosen_dict = available_dicts[option]
	        for i in chosen_dict:
	            key, value = i
	            tmp = {"key": key, "value": value}
	            result_list.append(tmp)
	        return Response(result_list, status=status.HTTP_200_OK)
	    else:
	        return Response({"Error": "Empty or invalid option given"}, status=status.HTTP_400_BAD_REQUEST)



class InventoryOrderStatusChoicesAPIView(generics.GenericAPIView):

	available_dicts = {
		"INVENTORY_ORDER_STATUS_CHOICES": INVENTORY_ORDER_STATUS_CHOICES,
	}

	def get(self, request):
	    option = request.GET.get("option", None)
	    if option is not None and option in self.available_dicts:
	        result_list = []
	        chosen_dict = available_dicts[option]
	        for i in chosen_dict:
	            key, value = i
	            tmp = {"key": key, "value": value}
	            result_list.append(tmp)
	        return Response(result_list, status=status.HTTP_200_OK)
	    else:
	        return Response({"Error": "Empty or invalid option given"}, status=status.HTTP_400_BAD_REQUEST)




class InvoiceSaleStatusChoicesAPIView(generics.GenericAPIView):

	available_dicts = {
		"INVOICE_SALE_STATUS_CHOICES": INVOICE_SALE_STATUS_CHOICES,
	}

	def get(self, request):
	    option = request.GET.get("option", None)
	    if option is not None and option in self.available_dicts:
	        result_list = []
	        chosen_dict = available_dicts[option]
	        for i in chosen_dict:
	            key, value = i
	            tmp = {"key": key, "value": value}
	            result_list.append(tmp)
	        return Response(result_list, status=status.HTTP_200_OK)
	    else:
	        return Response({"Error": "Empty or invalid option given"}, status=status.HTTP_400_BAD_REQUEST)





class InvoiceLineChoicesAPIView(generics.GenericAPIView):

	available_dicts = {
		"INVOCE_LINE_CHOICES": INVOCE_LINE_CHOICES,
	}

	def get(self, request):
	    option = request.GET.get("option", None)
	    if option is not None and option in self.available_dicts:
	        result_list = []
	        chosen_dict = available_dicts[option]
	        for i in chosen_dict:
	            key, value = i
	            tmp = {"key": key, "value": value}
	            result_list.append(tmp)
	        return Response(result_list, status=status.HTTP_200_OK)
	    else:
	        return Response({"Error": "Empty or invalid option given"}, status=status.HTTP_400_BAD_REQUEST)




class CustomerPaymentMethodsChoicesAPIView(generics.GenericAPIView):

	available_dicts = {
		"CUSTOMER_PAYMENT_METHODS_CHOICES": CUSTOMER_PAYMENT_METHODS_CHOICES,
	}

	def get(self, request):
	    option = request.GET.get("option", None)
	    if option is not None and option in self.available_dicts:
	        result_list = []
	        chosen_dict = available_dicts[option]
	        for i in chosen_dict:
	            key, value = i
	            tmp = {"key": key, "value": value}
	            result_list.append(tmp)
	        return Response(result_list, status=status.HTTP_200_OK)
	    else:
	        return Response({"Error": "Empty or invalid option given"}, status=status.HTTP_400_BAD_REQUEST)




class ProcessRateUnitTimeChoicesAPIView(generics.GenericAPIView):

	available_dicts = {
		"PROCCES_RATE_UNIT_TIME_CHOICES": PROCCES_RATE_UNIT_TIME_CHOICES,
	}

	def get(self, request):
	    option = request.GET.get("option", None)
	    if option is not None and option in self.available_dicts:
	        result_list = []
	        chosen_dict = available_dicts[option]
	        for i in chosen_dict:
	            key, value = i
	            tmp = {"key": key, "value": value}
	            result_list.append(tmp)
	        return Response(result_list, status=status.HTTP_200_OK)
	    else:
	        return Response({"Error": "Empty or invalid option given"}, status=status.HTTP_400_BAD_REQUEST)




class ManufacturingProductTypesChoicesAPIView(generics.GenericAPIView):

	available_dicts = {
		"MANUFACTURING_PRODUCT_TYPES": MANUFACTURING_PRODUCT_TYPES,
	}

	def get(self, request):
	    option = request.GET.get("option", None)
	    if option is not None and option in self.available_dicts:
	        result_list = []
	        chosen_dict = available_dicts[option]
	        for i in chosen_dict:
	            key, value = i
	            tmp = {"key": key, "value": value}
	            result_list.append(tmp)
	        return Response(result_list, status=status.HTTP_200_OK)
	    else:
	        return Response({"Error": "Empty or invalid option given"}, status=status.HTTP_400_BAD_REQUEST)


class BillOfMaterialsLineChoicesAPIView(generics.GenericAPIView):

	available_dicts = {
		"BILL_OF_MATERIALS_LINE_CHOICES": BILL_OF_MATERIALS_LINE_CHOICES,
	}

	def get(self, request):
	    option = request.GET.get("option", None)
	    if option is not None and option in self.available_dicts:
	        result_list = []
	        chosen_dict = available_dicts[option]
	        for i in chosen_dict:
	            key, value = i
	            tmp = {"key": key, "value": value}
	            result_list.append(tmp)
	        return Response(result_list, status=status.HTTP_200_OK)
	    else:
	        return Response({"Error": "Empty or invalid option given"}, status=status.HTTP_400_BAD_REQUEST)









