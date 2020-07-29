from django.urls import path, include
from rest_framework.routers import DefaultRouter
from employees.apis import (

	EmployeeViewSet,
	PayrollOfficerViewSet,
	EmployeesConfigViewSet,
	DepartmentViewSet,
	TerminationViewSet,
	ContractViewSet,
	LeaveViewSet,
	PayGradeViewSet,
	AllowanceViewSet,
	DeductionViewSet,
	CommissionRuleViewSet,
	PayrollTaxViewSet,
	PayrollScheduleViewSet,
	PayrollDateViewSet,
	PayslipViewSet,
	EmployeeTimeSheetViewSet
)
from .views import (
		RegisterAPI,
		LoginAPI,
		UserAPI
	)

from knox import views as knox_views

router = DefaultRouter()

router.register(r'employees', EmployeeViewSet)
router.register(r'payroll-officers', PayrollOfficerViewSet)
router.register(r'employee-config', EmployeesConfigViewSet)
router.register(r'employee-contracts', ContractViewSet)
router.register(r'employee-contracts-terminations', TerminationViewSet)
router.register(r'employee-departments', DepartmentViewSet)
router.register(r'employee-leaves', LeaveViewSet)
router.register(r'employee-paygrades', PayGradeViewSet)
router.register(r'employee-allowances', AllowanceViewSet)
router.register(r'employee-pay-deductions', DeductionViewSet)
router.register(r'employee-pay-commission-rules', CommissionRuleViewSet)
router.register(r'employee-payroll-taxes', PayrollTaxViewSet)
router.register(r'employee-payroll-schedules', PayrollScheduleViewSet)
router.register(r'employee-payroll-dates', PayrollDateViewSet)
router.register(r'employee-payslips', PayslipViewSet)
router.register(r'employee-attendance-timesheets', EmployeeTimeSheetViewSet)




urlpatterns = [
	path('auth/', include('knox.urls')),
	path('auth/register/', RegisterAPI.as_view()),
	path('auth/login', LoginAPI.as_view()),
	path('auth/user/', UserAPI.as_view()),
	path('auth/logout/', knox_views.LogoutView.as_view(), name='knox_logout')
] + router.urls