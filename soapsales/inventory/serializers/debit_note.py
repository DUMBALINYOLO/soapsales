from rest_framework import serializers
from inventory.models import (
                        DebitNote,
                        DebitNoteLine
                    )

class DebitNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = DebitNote
        fields = [
            'id',
            'date',
            'order',
            'comments',
        ]

class DebitNoteLineSerializer(serializers.ModelSerializer):
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
