from rest_framework import serializers
from invoicing.models import (
		CreditNote,
		CreditNoteLine
	)


class CrediNoteLineSrializer(serializers.ModelSerializer):
	class Meta:
		model = CreditNoteLine
		fields = "__all__"



class CreditNoteListSerializer(serializers.ModelSerializer):

	class Meta:
		model = CreditNote
		fields = ['id', 'date', 'invoice', 'entry']


class CreditNoteCreateSerializer(serializers.ModelSerializer):
	returned_products = CrediNoteLineSrializer(many=True, write_only=True)

	class Meta:
		model = CreditNote
		fields = [
			'date',
			'invoice',
			'comments',
			'returned_products',
		]

	def create(self, validated_data):
		returned_products = validated_data.pop('returned_products', [])
		note = CreditNote.objects.create(**validated_data)
		for returned_dict in returned_products:
			returned_dict['note'] = note
			CreditNoteLine.objects.create(**returned_dict)
		return note

class CreditNoteDetailSerializer(serializers.ModelSerializer):
	returned_products = CrediNoteLineSrializer(many=True, read_only=True)

	class Meta:
		model = CreditNote
		fields = [
			'id',
			'date',
			'invoice',
			'comments',
			'returned_products',
			'returned_total',
			'total',
			'tax_amount'
		]
