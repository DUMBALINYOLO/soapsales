from rest_framework import serializers
from .models import (
				Note,
				Organization
			)



class NoteSerializer(serializers.ModelSerializer):

	class Meta:

		model = Note
		fields = "__all__"



class OrganizationSerializer(serializers.ModelSerializer):

	class Meta:

		model = Organization
		fields = "__all__"

