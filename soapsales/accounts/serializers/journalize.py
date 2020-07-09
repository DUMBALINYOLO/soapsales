from rest_framework import serializers
from accounts.models import JournalEntry, Transaction, Receipt
from .accounts import RetrieveAccountSerializer
# from users.serializers import UserSerializer
from accounts.utils import format_currency

from drf_extra_fields.fields import Base64FileField

# import magic

class TransactionReadOnlySerilizer(serializers.ModelSerializer):

    class Meta:
        model = Transaction
        fields = "__all__"




class RetrieveTransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ('date', 'affected_account', 'journal_entry', 'value', 'is_debit')

    affected_account = RetrieveAccountSerializer()
    value = serializers.SerializerMethodField()

    def get_value(self, obj):
        return format_currency(obj.value, False)


class CreateTransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ('affected_account', 'value', 'is_debit')


    def validate_value(self, value):
        if value == 0:
            raise serializers.ValidationError('A transaction must have a non-zero value.')
        elif value < 0:
            raise serializers.ValidationError('A transaction cannot have a negative value.')

        return value


class RetrieveJournalEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = JournalEntry
        fields = ('id', 'date_created', 'date', 'entry_type', 'is_approved', 'memo', 'description', 'creator', 'transactions', 'receipts',)

    transactions = RetrieveTransactionSerializer(many=True)
    # creator = UserSerializer()
    entry_type = serializers.SerializerMethodField()

    def get_entry_type(self, obj):
        return obj.get_entry_type_display()


class CreateJournalEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = JournalEntry
        fields = ('date', 'entry_type', 'description', 'transactions')

    transactions = CreateTransactionSerializer(many=True)
   
    def validate_transactions(self, value):
        if len(value) == 0:
            raise serializers.ValidationError('There must be at least one transaction in a journal entry.')

        used_accounts = set()
        for transaction in value:
            last_length = len(used_accounts)
            used_accounts.add(transaction['affected_account'])
            if last_length == len(used_accounts):
                raise serializers.ValidationError('Two transactions cannot be made to the same account.')

        transaction_sum = reduce(lambda accumulated, update:
            accumulated + update['value'] if update['is_debit'] == True else accumulated - update['value'], value, 0)

        if transaction_sum != 0:
            raise serializers.ValidationError('Transactions must be balanced.')

        return value

    def create(self, validated_data):
        transactions = validated_data.pop('transactions')


        journal_entry = JournalEntry.objects.create(**validated_data)

        for transaction in transactions:
            Transaction.objects.create(journal_entry=journal_entry, **transaction)


        return journal_entry


class UpdateJournalEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = JournalEntry
        fields = ('is_approved', 'memo',)

    def update(self, instance, validated_data):
        if instance.is_approved is not None:
            raise serializers.ValidationError('The journal entry has already been approved/denied and can not be changed!')

        if validated_data.get('is_approved') == False and len(validated_data.get('memo')) == 0:
            raise serializers.ValidationError('A rejection reason must be provided for denying the journal entry.')

        instance.is_approved = validated_data.get('is_approved')
        instance.memo = validated_data.get('memo')
        instance.save()

        return instance
