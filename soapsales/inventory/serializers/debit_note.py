from rest_framework import serializers
from inventory.models import (
                        DebitNote,
                        DebitNoteLine
                    )



class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value

class DebitNoteLineSerializer(serializers.ModelSerializer):
    returned_value = serializers.ReadOnlyField(read_only=True)
    item = StringSerializer()

    class Meta:
        model = DebitNoteLine
        fields = [
            'id',
            'item',
            'note',
            'quantity',
            # property model methods
            'returned_value',
        ]

class DebitNoteLineCreateSerializer(serializers.ModelSerializer):
    

    class Meta:
        model = DebitNoteLine
        fields = [
            'id',
            'item',
            'note',
            'quantity',

        ]


class DebitNoteCreateSerializer(serializers.ModelSerializer):
    lines = DebitNoteLineCreateSerializer(many=True, write_only=True)


    class Meta:
        model = DebitNote
        fields = [
            'date',
            'order',
            'comments',
            'lines',
        ]

    def create(self, validated_data):
        lines = validated_data.pop('lines', [])
        note = DebitNote.objects.create(**validated_data)
        for line_dict in lines:
            line_dict['note'] = note
            DebitNoteLine.objects.create(**line_dict)
        return note


class DebitNoteListSerializer(serializers.ModelSerializer):
    order = StringSerializer()

    class Meta:
        model = DebitNote
        fields = ['id', 'date', 'order']



class DebitNoteDetailSerializer(serializers.ModelSerializer):
    returned_items = DebitNoteLineSerializer(many=True, read_only=True)
    order = StringSerializer()

    class Meta:
        model = DebitNote
        fields = [
            'id', 
            'date', 
            'order',
            'comments',
            'returned_items',
            'returned_total'
        ]

