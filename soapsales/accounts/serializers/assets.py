from rest_framework import serializers
from accounts.models import Asset



class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value


class CreateAssetsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asset
        exclude = ['entry',]

class AssetsListSerializer(serializers.ModelSerializer):
    credit_account = StringSerializer()
    category = serializers.SerializerMethodField()

    class Meta:
        model = Asset
        fields = ['id', 'name', 'category']


    def get_category(self, obj):
        return obj.get_category_display()

        


class AssetDetailSerializer(serializers.ModelSerializer):
    category = serializers.SerializerMethodField()
    depreciation_method = serializers.SerializerMethodField()
    credit_account = StringSerializer()
    created_by = StringSerializer()
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

    def get_category(self, obj):
        return obj.get_category_display()

    def get_depreciation_method(self, obj):
        return obj.get_depreciation_method_display()


