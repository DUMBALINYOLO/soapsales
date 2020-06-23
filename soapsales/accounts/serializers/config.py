from rest_framework import serializers
from accounts.models import *
from employees.models import Employee

class StringSerializer(serializers.StringRelatedField):

    def to_internal_value(self, value):
        return value



class TaxSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tax
        fields = [
            'id',
            'name',
            'rate'
        ]

class AccountingSettingsSerializer(serializers.ModelSerializer):


    class Meta:
        model = AccountingSettings
        fields = [
            'id',
            'start_of_financial_year',
            'default_accounting_period',
            'default_bookkeeper',
            'equipment_capitalization_limit',
            'is_configured',
        ]




class CurrencySerializer(serializers.ModelSerializer):
    class Meta:
        model = Currency
        fields = [
            'id',
            'name',
            'symbol',
        ]

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['id', 'username']


class BookkeeperListSerializer(serializers.ModelSerializer):
    employee = StringSerializer()
    

    class Meta:
        model = Bookkeeper
        fields = [
                'id',
                'employee',
                'can_create_journals',
                'can_create_orders_and_invoices',
                'can_record_expenses',
                'can_record_assets',
        ]

class BookkeeperCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Bookkeeper
        fields = [
                'id',
                'employee',
                'can_create_journals',
                'can_create_orders_and_invoices',
                'can_record_expenses',
                'can_record_assets',
        ]
