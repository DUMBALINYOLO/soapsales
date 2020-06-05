from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Employee(models.Model):

    GENDER_CHOICES = [('male','Male'),('female','Female')]
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    employee_number = models.CharField(max_length=34)
    phone = models.CharField(max_length =16, blank=True, default="")
    first_name = models.CharField(max_length =32)
    middle_name = models.CharField(max_length =32)
    last_name = models.CharField(max_length =32)
    address = models.TextField(max_length =128, blank=True, default="")
    date_of_birth = models.DateField(null=True)
    id_number = models.CharField(max_length=64, blank=True)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES, blank=True)

    def __str__(self):
        return self.first_name
