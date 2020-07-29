
import random
import datetime
from decimal import Decimal as D
from functools import reduce
from django.db import models
from django.db.models import Q
from django.utils import timezone
from basedata.models import SingletonModel, SoftDeletionModel
from basedata.const import (
            EMPLOYEE_LEAVE_CATEGORIES,
            EMPLOYEE_LEAVE_STATUS_CHOICES
    )




class Leave(models.Model):
    start_date = models.DateField()
    end_date = models.DateField()
    employee = models.ForeignKey(
                            'employees.Employee', 
                            related_name="employee_name", 
                            on_delete=models.SET_NULL, 
                            null=True
                        )
    category = models.PositiveSmallIntegerField(choices=EMPLOYEE_LEAVE_CATEGORIES)
    status = models.PositiveSmallIntegerField(choices=EMPLOYEE_LEAVE_STATUS_CHOICES, default=0)
    authorized_by = models.ForeignKey('employees.Employee',
                                on_delete=models.SET_NULL, 
                                null=True,
                                related_name='authority',
                            )
    notes = models.TextField(blank=True)
    recorded = models.BooleanField(default=False)
    reference_number = models.CharField(max_length=255, null=True, default=None)

    def save(self, *args, **kwargs):
        if not self.reference_number:
           prefix = 'LEAVE-{}'.format(timezone.now().strftime('%y%m%d'))
           prev_instances = self.__class__.objects.filter(reference_number__contains=prefix)
           if prev_instances.exists():
              last_instance_id = prev_instances.last().reference_number[-4:]
              self.reference_number = prefix+'{0:04d}'.format(int(last_instance_id)+1)
           else:
               self.reference_number = prefix+'{0:04d}'.format(1)
        super(Leave, self).save(*args, **kwargs)




    @property
    def duration(self):
        if self.end_date == self.start_date:
            return 1
        elif self.end_date < self.start_date:
            return 0

        return (self.end_date - self.start_date).days

    
    def __str__(self):
        return f'{self.employee.__str__()} {self.reference_number}'
        


