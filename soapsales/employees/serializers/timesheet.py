from rest_framework import serializers
from employees.models import (
			EmployeeTimeSheet,
			AttendanceLine,

		)
from drf_writable_nested.serializers import WritableNestedModelSerializer





class StringSerializer(serializers.StringRelatedField):

    def to_internal_value(self, value):
        return value


class AttendanceLineCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = AttendanceLine
		fields = ['date', 'time_in', 'time_out', 'lunch_duration']

class AttendanceLineSerializer(serializers.ModelSerializer):
	# time_in = serializers.SerializerMethodField()
	# time_out = serializers.SerializerMethodField()
	# lunch_duration = serializers.SerializerMethodField()

	class Meta:
		model = AttendanceLine
		fields = ['id', 'date', 'time_in', 'time_out', 'lunch_duration', 'total_time' ]

	# def get_time_in(self, obj):
	# 	return obj.get_time_in_display()

	# def get_time_out(self, obj):
	# 	return obj.get_time_out_display()

	# def get_time_out(self, obj):
	# 	return obj.get_lunch_duration_display()



class EmployeeTimeSheetCreateUpdateSerializer(WritableNestedModelSerializer):
	lines = AttendanceLineCreateUpdateSerializer(many=True)
	
	class Meta:
		model = EmployeeTimeSheet
		fields = [
			'employee',
			'month',
			'year',
			'recorded_by',
			'complete',
			'lines',

		]


class EmployeeTimeSheetDetailSerializer(serializers.ModelSerializer):
	lines = AttendanceLineSerializer(many=True)
	month = serializers.SerializerMethodField()
	year = serializers.SerializerMethodField()
	employee = StringSerializer()
	
	class Meta:
		model = EmployeeTimeSheet
		fields = [
			'id',
			'reference_number',
			'employee',
			'month',
			'year',
			'recorded_by',
			'complete',
			'lines',
			'normal_hours',
			'overtime',
		]


	def get_month(self, obj):
		return obj.get_month_display()

	def get_year(self, obj):
		return obj.get_year_display()


class EmployeeTimeSheetListSerializer(serializers.ModelSerializer):
	month = serializers.SerializerMethodField()
	year = serializers.SerializerMethodField()
	employee = StringSerializer()
	
	class Meta:
		model = EmployeeTimeSheet
		fields = [
			'id',
			'reference_number',
			'employee',
			'month',
			'year',
		]


	def get_month(self, obj):
		return obj.get_month_display()

	def get_year(self, obj):
		return obj.get_year_display()

