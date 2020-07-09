from django.db import models
import uuid
from django.db import models
from datetime import date
from django.core.validators import RegexValidator

from django.contrib.auth.models import User


class Employee(User):
    GENDER_CHOICES = [('male','Male'),('female','Female')]
    employee_number = models.CharField(max_length=34)
    phone = models.CharField(max_length =16, blank=True, default="")
    middle_name = models.CharField(max_length =32)
    address = models.TextField(max_length =128, blank=True, default="")
    date_of_birth = models.DateField(null=True)
    id_number = models.CharField(max_length=64, blank=True)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES, blank=True)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'
