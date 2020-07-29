from django.db import models
import uuid
from django.db import models
from datetime import date
from django.utils import timezone
from django.core.validators import RegexValidator
from .accounts import User
from basedata.const import (
            EMPLOYEES_GENDER_CHOICES,
            EMPLOYEE_CONTRACT_TERMINATION_REASONS,
            NATURE_OF_EMPLOYMENT_CHOICES,
            EMPLOYEE_CATEGORY_CHOICES,
        )
from invoicing.models import SalesRepresentative
from .common import PayrollOfficer
import accounts
from .timesheet import (
            EmployeeTimeSheet,
            AttendanceLine
        )





class Employee(User):
    employee_number = models.CharField(max_length=255, null=True, default=None)
    phone = models.CharField(max_length =16, blank=True, default="")
    first_name = models.CharField(max_length =32)
    middle_name = models.CharField(max_length =32)
    last_name = models.CharField(max_length =32)
    address = models.TextField(max_length =128, blank=True, default="")
    date_of_birth = models.DateField(null=True)
    id_number = models.CharField(max_length=64, blank=True)
    gender = models.CharField(max_length=500, choices=EMPLOYEES_GENDER_CHOICES, blank=True)
    pay_grade = models.ForeignKey('employees.PayGrade',
        on_delete=models.CASCADE, blank=True, null=True)
    leave_days = models.FloatField(default=0)
    last_leave_day_increment = models.DateField(null=True)
    uses_timesheet = models.BooleanField(default=False, blank=True)


    def save(self, *args, **kwargs):
        if not self.employee_number:
           prefix = 'EMP-{}'.format(timezone.now().strftime('%y%m%d'))
           prev_instances = self.__class__.objects.filter(employee_number__contains=prefix)
           if prev_instances.exists():
              last_instance_id = prev_instances.last().employee_number[-4:]
              self.employee_number = prefix+'{0:04d}'.format(int(last_instance_id)+1)
           else:
               self.employee_number = prefix+'{0:04d}'.format(1)
        super(Employee, self).save(*args, **kwargs)

    def __str__(self):
        return f'{self.first_name} {self.first_name} {self.employee_number}'


    @property
    def latest_timesheet(self):
        qs =EmployeeTimeSheet.objects.filter(employee=self)

        return EmployeeTimeSheet.objects.filter(employee=self).latest('pk').pk

    

    def get_earnings_for_month(self, start):
        earnings = 0
        last_day = calendar.monthrange(start.year, start.month)
        end = datetime.date(start.year, start.month, last_day[1])
        #using end period for payslips
        slips = Payslip.objects.filter(end_period__gte=start,
            end_period__lte=end,
            status__in=['verified', 'paid'])
        earnings += sum([i.paygrade_['salary'] for i in slips])

        return earnings


    def get_nps_earnings(self, start):
        #get total earnings in month
        earnings = self.get_earnings_for_month(start)

        if earnings < D(700.0):
            return earnings

        return D(700.0)


    def total_nps(self, start):
        insurable_earnings = self.get_nps_earnings(start)

        return D(insurable_earnings) * D(0.07)

    def increment_leave_days(self, days):
        self.leave_days += days
        self.last_leave_day_increment = datetime.date.today()
        if self.pay_grade and \
                self.leave_days > self.pay_grade.maximum_leave_days:
            self.leave_days = self.pay_grade.maximum_leave_days

        self.save()

    def deduct_leave_days(self, days):
        self.leave_days -= days
        self.save()

    def __str__(self):
        return self.first_name + " " + self.last_name

    @property
    def _payslips_YTD(self):
        '''internal abstract method used in the following properties'''
        curr_year = datetime.date.today().year
        start = datetime.date(curr_year, 1, 1)
        end = datetime.date(curr_year,12,31)

        return Payslip.objects.filter(Q(employee=self) \
            & Q(start_period__gte=start) \
            & Q(end_period__lte=end)
            & Q(status="verified"))

    @property
    def deductions_YTD(self):
        slips = self._payslips_YTD
        return sum([i.total_deductions for i in slips])

    @property
    def earnings_YTD(self):
        slips = self._payslips_YTD
        return sum([i.gross_pay for i in slips])

    @property
    def is_sales_rep(self):
        return(SalesRepresentative.objects.filter(employee=self).exists())

    @property
    def is_inventory_controller(self):
        return hasattr(self, 'inventorycontroller')

    @property
    def is_bookkeeper(self):
        return(accounts.models.Bookkeeper.objects.filter(employee=self).exists())


    @property
    def is_payroll_officer(self):
        return(PayrollOfficer.objects.filter(employee=self).exists())


    @property
    def is_serviceperson(self):
        return hasattr(self, 'serviceperson')

    @property
    def is_manufacturing_associate(self):
        return hasattr(self, 'manufacturingassociate')

    @property
    def agenda_items(self):
        #check participants as well
        filter = None
        if self.user:
            filter = Q(Q(owner=self.user) | Q(eventparticipant__employee=self))
        else:
            filter = Q(eventparticipant__employee=self)
        return Event.objects.filter(
            Q(Q(completed=False) & Q(date__gte=datetime.date.today())) &
            filter).count()


    @property
    def missed_events(self):
        #check participants as well
        filter = None
        if self.user:
            filter = Q(Q(owner=self.user) | Q(eventparticipant__employee=self))
        else:
            filter = Q(eventparticipant__employee=self)
        return Event.objects.filter(
            Q(Q(completed=False) & Q(date__lt=datetime.date.today())) &
            filter).count()

    @property
    def attendance(self):
        TODAY = datetime.date.today()

        if EmployeeTimeSheet.objects.filter(
                employee=self,
                year=TODAY.year,
                month=TODAY.month).exists():
            sheet = EmployeeTimeSheet.objects.get(
                                    employee=self,
                                    year=TODAY.year,
                                    month=TODAY.month)

            attendance = []
            for i in range(1,32):
                try:
                    date = datetime.date(TODAY.year, TODAY.month, i)
                except:
                    attendance.append(2)
                    continue
                else:
                    if AttendanceLine.objects.filter(
                                date=date, timesheet=sheet).exists():
                        attendance.append(0)
                    else:
                        attendance.append(2)

            return attendance

        else:
            return list(range(1,32))


class Department(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    manager = models.ForeignKey('Employee', on_delete=models.SET_NULL, related_name="manager", null=True)
    employees = models.ManyToManyField(
                            'Employee',
                            related_name="employees"
                        )
    parent_department = models.ForeignKey(
                                    'self', 
                                    on_delete=models.SET_NULL, 
                                    null=True, 
                                    blank=True
                                )
    reference_number = models.CharField(max_length=255, null=True, default=None)

    def save(self, *args, **kwargs):
        if not self.reference_number:
           prefix = 'DPT-{}'.format(timezone.now().strftime('%y%m%d'))
           prev_instances = self.__class__.objects.filter(reference_number__contains=prefix)
           if prev_instances.exists():
              last_instance_id = prev_instances.last().reference_number[-4:]
              self.reference_number = prefix+'{0:04d}'.format(int(last_instance_id)+1)
           else:
               self.reference_number = prefix+'{0:04d}'.format(1)
        super(Department, self).save(*args, **kwargs)

    def __str__(self):
        return f'{self.name} {self.reference_number}'



    @property
    def children(self):
        return Department.objects.filter(parent_department=self)




class Termination(models.Model):
    date = models.DateField()
    reason_for_termination = models.CharField(max_length=80, default='R',
        choices=EMPLOYEE_CONTRACT_TERMINATION_REASONS)
    contract = models.OneToOneField('Contract', null=True,
        blank=True,on_delete=models.SET_NULL)
    reference_number = models.CharField(max_length=255, null=True, default=None)

    def save(self, *args, **kwargs):
        if not self.reference_number:
           prefix = 'ECT-{}'.format(timezone.now().strftime('%y%m%d'))
           prev_instances = self.__class__.objects.filter(reference_number__contains=prefix)
           if prev_instances.exists():
              last_instance_id = prev_instances.last().reference_number[-4:]
              self.reference_number = prefix+'{0:04d}'.format(int(last_instance_id)+1)
           else:
               self.reference_number = prefix+'{0:04d}'.format(1)
        super(Termination, self).save(*args, **kwargs)

    def __str__(self):
        return self.reference_number




class Contract(models.Model):

    start_date = models.DateField()
    department = models.ForeignKey('Department', null=True,
        blank=True,on_delete=models.SET_NULL)
    employee = models.ForeignKey('Employee', null=True,
        blank=True,on_delete=models.SET_NULL)
    job_position = models.CharField(max_length=255, blank=True)
    end_of_probation = models.DateField()
    termination_date = models.DateField(blank=True, null=True)
    employee_category = models.CharField(max_length=64,
        choices=EMPLOYEE_CATEGORY_CHOICES)
    nature_of_employment = models.CharField(max_length=1, default='N',
        choices=NATURE_OF_EMPLOYMENT_CHOICES)


    reference_number = models.CharField(max_length=255, null=True, default=None)

    def save(self, *args, **kwargs):
        if not self.reference_number:
           prefix = 'ECON-{}'.format(timezone.now().strftime('%y%m%d'))
           prev_instances = self.__class__.objects.filter(reference_number__contains=prefix)
           if prev_instances.exists():
              last_instance_id = prev_instances.last().reference_number[-4:]
              self.reference_number = prefix+'{0:04d}'.format(int(last_instance_id)+1)
           else:
               self.reference_number = prefix+'{0:04d}'.format(1)
        super(Contract, self).save(*args, **kwargs)

    def __str__(self):
        return self.reference_number



        





    