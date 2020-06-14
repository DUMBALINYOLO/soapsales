from rest_framework import serializers

from accounting.serializers import (
        ExpenseSerializer,
        TaxSerializer, 
        JounalEntrySerializer,
        AccountSerializer
    )

from services.serializers import ServiceSerializer
from inventory.serializers import InventoryItemSerializer
from basedata.serializers import (
        OrganizationSerializer,
        IndividualSerializer,

    )

from employees.serializers import (
    EmployeeSerializer

    )

from invoicing.models import *


class SalesConfigSerializer(serializers.ModelSerializer):
    sales_tax = TaxSerializer(many=False)

    class Meta:
        model = SalesConfig
        fields = [
            'id',
            'default_invoice_comments',
            'default_quotation_comments',
            'ddefault_credit_note_comments',
            'default_terms',
            'sales_tax',
            'include_shipping_address',
            'include_tax_in_invoice',
            'next_invoice_number',
            'next_quotation_number',
            'use_sales_invoice',
            'use_service_invoice',
            'use_bill_invoice',
            'use_combined_invoice',
            'is_configured'
        ]


class CreditNoteSerializer(serializers.ModelSerializer):
    invoice = InvoiceSerializer(many=False)
    entry = JournalEntrySerializer(many=False)
    returned_products = serializers.ReadOnlyField()
    returned_total = serializers.ReadOnlyField()
    tax_credit = serializers.ReadOnlyField()
    returned_total_with_tax = serializers.ReadOnlyField()
    total = serializers.ReadOnlyField()
    subtotal = serializers.ReadOnlyField()
    tax_amount = serializers.ReadOnlyField()


    class Meta:
        model = CreditNote
        fields = [
            'id',
            'date',
            'invoice',
            'comments', 
            'entry',
            # @getter model methods 
            'returned_products',
            'returned_total',
            'tax_credit',
            'returned_total_with_tax',
            'total',
            'subtotal',
            'tax_amount'
        ]


class CreditNoteLineSerializer(serializers.ModelSerializer):
    note = CreditNote(many=False)
    line = InvoiceLineSerializer(many=False)
    returned_value = serializers.ReadOnlyField()


    class Meta:
        model = CreditNoteLine
        fields = [
            'id',
            'note',
            'line',
            'quantity', 
            # @getter model methods 
            'returned_value',

        ]


# I am yet to deprecate this model and this is just a boilerplate and its okay as it is 
class CustomerSerializer(serializers.ModelSerializer):
    expense_set = ExpenseSerializer(many=True) #need to understand what I am doing here 
    organization = OrganizationSerializer(many=False)
    individual = JournalEntrySerializer(many=False)
    account = AccountSerializer()
    invoices = serializers.ReadOnlyField()
    name = serializers.ReadOnlyField()
    customer_email = serializers.ReadOnlyField()
    is_organization = serializers.ReadOnlyField()
    credit_invoices = serializers.ReadOnlyField()
    address = serializers.ReadOnlyField()
    last_transaction_date = serializers.ReadOnlyField()
    average_days_to_pay = serializers.ReadOnlyField()
    age_list = serializers.ReadOnlyField()
    total_accounts_receivable = serializers.ReadOnlyField() 

    class Meta:
        model = Customer
        fields = [
            'id',
            'organization',
            'individual',
            'billing_address', 
            'banking_details',
            'account',

            # @getter model methods 
            'invoices',
            'name',
            'customer_email',
            'is_organization',
            'credit_invoices',
            'address',
            'last_transaction_date',
            'average_days_to_pay',
            'age_list',
            'total_accounts_receivable'
        ]


class InvoiceSerializer(serializers.ModelSerializer):
    employee = ExpenseSerializer(many=True) #need to understand what I am doing here 
    customer = CustomerSerializer(many=False)
    salesperson = SalesRepresentativeSerializer(many=False)
    ship_from = WareHouseSerializer(many=False)
    shipping_expenses = ExpenseSerializers(many=True)
    entry = JournalEntrySerializer(many=False)
    cost_of_goods_sold = serializers.ReadOnlyField()
    overdue = serializers.ReadOnlyField()
    overdue_days = serializers.ReadOnlyField()
    total = serializers.ReadOnlyField()
    is_quotation = serializers.ReadOnlyField()
    on_credit = serializers.ReadOnlyField()
    total_paid = serializers.ReadOnlyField()
    total_due = serializers.ReadOnlyField()
    total_credited = serializers.ReadOnlyField()
    tax_amount = serializers.ReadOnlyField()
    subtotal = serializers.ReadOnlyField()
    quotation_is_valid = serializers.ReadOnlyField()
    sales_line = serializers.ReadOnlyField()
    sales_total = serializers.ReadOnlyField()
    service_lines = serializers.ReadOnlyField()
    service_total = serializers.ReadOnlyField()
    expense_total = serializers.ReadOnlyField()
    total_shipping_costs = serializers.ReadOnlyField()
    percentage_shipping_costs = serializers.ReadOnlyField()
    returned_total = serializers.ReadOnlyField()
    sales_only = serializers.ReadOnlyField()
    service_only = serializers.ReadOnlyField() 

    class Meta:
        model = Invoice
        fields = [
            'id',
            'status',
            'invoice_number',
            'quotation_number', 
            'quotation_date',
            'quotation_valid',
            'invoice_validated_by', #f
            'draft',
            'customer', #f
            'salesperson', #f
            'due',
            'date',
            'terms',
            'comments',
            'purchase_order_number',
            'ship_from',
            'shipping_expenses',
            'entry', #f

            # @getter model methods 
            'cost_of_goods_sold',
            'overude',
            'overdue_days',
            'total',
            'is_quotation',
            'on_credit',
            'total_paid',
            'total_due',
            'total_credited',
            'tax_amount',
            'subtotal',
            'quotation_is_valid',
            'sales_line',
            'sales_total',
            'service_lines',
            'service_total',
            'expense_total',
            'total_shipping_costs',
            'percentage_shipping_costs',
            'returned_total',
            'sales_only',
            'service_only'
        ]


class InvoiceLineSerializer(serializers.ModelSerializer):
    invoice = InvoiceSerializer(many=False)
    expense = ExpenseLineComponentSerializer(many=False)
    product = ProductLineComponentSerializer(many=False)
    service = ServiceLineComponentSerializer(many=False)
    tax = TaxSerializer(many=False)
    type_string = serializers.ReadOnlyField()
    component = serializers.ReadOnlyField()
    component = serializers.ReadOnlyField()
    name = serializers.ReadOnlyField()
    subtotal = serializers.ReadOnlyField()
    total = serializers.ReadOnlyField()
    discount_total = serializers.ReadOnlyField()
    tax = serializers.ReadOnlyField()  
    
    class Meta:
        model = InvoiceLine
        fields = [
            'id',
            'invoice',
            'product',
            'service',
            'expense',
            'line_type',
            'tax',
            'discount',

            # gettar methods 
            'type_string',
            'component',
            'name',
            'subtotal',
            'total',
            'discount_total',
            'tax'
        ]


class ProductLineComponentSerializer(serializers.ModelSerializer):
    product = InventoryItemSerializer(many=False)
    returned_quantity = serializers.ReadOnlyField()
    nominal_price = serializers.ReadOnlyField()
    line = serializers.ReadOnlyField()
    returned_value = serializers.ReadOnlyField()

    class Meta:
        model = ProductLineComponent
        fields = [
            'id',
            'product',
            'returned',
            'unit_price',
            'value',
            'quantity',

            # getter model methods 
            'nominal_price',
            'line',
            'returned_quantity',
            'returned_value',

        ]

class ServiceLineComponentSerializer(serializers.ModelSerializer):
    service = ServiceSerializer(many=False)
    nominal_price = serializers.ReadOnlyField()
    line = serializers.ReadOnlyField()
    cost_of_sale = serializers.ReadOnlyField()
    gross_income = serializers.ReadOnlyField()

    class Meta:
        model = ServiceLineComponent
        fields = [
            'id',
            'service',
            'hours',
            'flat_fee',
            'hourly_rate'

            # getter model methods
            'nominal_price',
            'line',
            'cost_of_sale',
            'gross_income'
        ]


class ExpenseLineComponentSerializer(serializers.ModelSerializer):
    expense = ExpenseSerializer(many=False)
    nominal_price = serializers.ReadOnlyField()
    line = serializers.ReadOnlyField()
    class Meta:
        model = ExpenseLineComponent
        fields = [
            'id',
            'expense',
            'price',

            #getter model methods
            'line',
            'nominal_price'
        ]


# I am yet to deprecate this one ...Now just making a boilerplate connection
class PaymentSerializer(serializers.ModelSerializer):
    invoice = InvoiceSerializer(many=False)
    sales_rep = SalesRepsSerializer(many=False)
    due = serializers.ReadOnlyFeld()


    class Meta:
        model = Payment
        fields = [
            'id',
            'invoice',
            'amount',
            'date',
            'method',
            'refference_number', # this has to be primary key and be automatically generated still looking for the algorithm 
            'sales_rep' # received by rather sounds more clear in our needs ....maybe just maybe
            'comments',
            'entry'
            # paid_by TO DO
            # amount handed TO DO 
            # balance TO DO 

            #getter model methods
            'due'
        ]


class SalesRepsSerializer(serializers.ModelSerializer):
    rep_name = serializers.SerializerMethodField()

    class Meta:
        model = SalesRepresentative
        fields = [
            'id',
            'employee',
            'number', # need to find an algorithm for this guy
            'can_reverse_invoices',
            'can_offer_discounts',

            # model method
            'rep_name'
        ]

    def get_rep_name(self, obj):
        return obj.employee.full_name

    


# I am very curious about how ths clown works especially the set_all() part

# class InvoiceSerializer(serializers.ModelSerializer):
#     invoiceline_set = InvoiceLineSerializer(many=True)
#     class Meta:
#         model = Invoice
#         fields = ['invoiceline_set', 'customer', 'id']

