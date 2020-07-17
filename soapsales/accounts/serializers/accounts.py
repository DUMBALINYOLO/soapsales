from rest_framework import serializers
from accounts.models import Account, AccountType
from accounts.utils import format_currency


class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value



class AccountTypeSerializer(serializers.ModelSerializer):
    category = serializers.SerializerMethodField()
    classification = serializers.SerializerMethodField()


    class Meta:
        model = AccountType
        fields = ('id', 'order', 'category', 'classification', 'name', 'starting_number',)

    def get_category(self, obj):
        return obj.get_category_display()

    def get_classification(self, obj):
        return obj.get_classification_display()



class AccountTypeCreateUpdateSerializer(serializers.ModelSerializer):

    class Meta:
        model = AccountType
        fields = ('order', 'category', 'classification', 'name',)

  




class InActiveAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = '__all__'


class RetrieveAccountTypeSerializer(AccountTypeSerializer):

    category = serializers.SerializerMethodField()
    classification = serializers.SerializerMethodField()

    def get_category(self, obj):
        return obj.get_category_display()

    def get_classification(self, obj):
        return obj.get_classification_display()


ACCOUNT_BASE_FIELDS = ('id', 'account_type', 'name', 'description', 'initial_balance', 'is_active', 'is_contra', 'order',)


class AccountSerializer(serializers.ModelSerializer):

    class Meta:
        model = Account
        fields = ACCOUNT_BASE_FIELDS

    def update(self, instance, validated_data):
        if validated_data.get('is_active') is False and instance.get_balance() != 0:
            raise serializers.ValidationError('Accounts with a non-zero balance cannot be disabled.')

        return super(AccountSerializer, self).update(instance, validated_data)





class RetrieveAccountSerializer(AccountSerializer):
    created_date = serializers.DateTimeField(format="%d-%m-%Y")
    account_type = StringSerializer()
    class Meta:
        model = Account
        fields = ACCOUNT_BASE_FIELDS + ( 'balance', 'created_date')

    balance = serializers.SerializerMethodField()

    def get_balance(self, obj):
        return format_currency(obj.get_balance())


class LedgerAccountSerializer(AccountSerializer):
    class Meta:
        model = Account
        fields = ACCOUNT_BASE_FIELDS + ( 'balance', 'balances')


    account_type = RetrieveAccountTypeSerializer()
    initial_balance = serializers.SerializerMethodField()
    balance = serializers.SerializerMethodField()
    balances = serializers.SerializerMethodField()

    def get_initial_balance(self, obj):
        return format_currency(obj.initial_balance)

    def get_balance(self, obj):
        return format_currency(obj.get_balance())

    def get_balances(self, obj):
        return obj.get_transaction_history()
