from rest_framework import serializers
from accounts.models import Asset


class CreateAssetsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asset
        exclude = ['entry']




class AssetsSerializer(serializers.ModelSerializer):
    # created_by = EmployeeSerializer(many=True) yet to fix this with creation of employees ser
    # depreciation_for_month = serializers.SerializerMethodField()
    account = serializers.ReadOnlyField()
    depreciation_account = serializers.ReadOnlyField()
    salvage_date = serializers.ReadOnlyField()
    _timedelta = serializers.ReadOnlyField()
    category_string = serializers.ReadOnlyField()
    anual_depreciation = serializers.ReadOnlyField()
    daily_depreciation = serializers.ReadOnlyField()
    total_depreciation = serializers.ReadOnlyField()
    current_value = serializers.ReadOnlyField()

    class Meta:
        model = Asset
        fields = [
            'id',
            'name',
            'category',
            'description',
            'initial_value',
            'credit_account',
			'depreciation_period',
            'depreciation_account', #Many_to_One_Relationship
            'depreciation_method',
            'init_date',
            'salvage_value',
            'created_by',
            # property model methods
            'account',
            'depreciation_account',
            'salvage_date',
            '_timedelta',
            "category_string",
            "anual_depreciation",
            "daily_depreciation",
            "total_depreciation",
            'current_value',
            # model methods

        ]


