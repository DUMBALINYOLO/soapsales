from rest_framework import serializers
from employees.models import PayrollOfficer, EmployeesSettings


class StringSerializer(serializers.StringRelatedField):

    def to_internal_value(self, value):
        return value


class EmployeeConfigSerializer(serializers.ModelSerializer):

	class Meta:
		model = EmployeesSettings
		fields = "__all__"


class PayRollOfficerCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = PayrollOfficer
		fields = [
			'employee',
			'can_log_timesheets',
			'can_run_payroll',
			'can_create_payroll_elements',
			'can_register_new_employees',
		]


class PayRollOfficerSerializer(serializers.ModelSerializer):
	employee = StringSerializer()

	class Meta:
		model = PayrollOfficer
		fields = [
			'employee',
			'can_log_timesheets',
			'can_run_payroll',
			'can_create_payroll_elements',
			'can_register_new_employees',
		]









