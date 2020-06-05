from django.contrib import admin

from .models import *

admin.site.register(Customer)
admin.site.register(SalesGroup)
admin.site.register(SalesItem)
admin.site.register(Order)

# Register your models here.
