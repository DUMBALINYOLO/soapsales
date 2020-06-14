
from django.contrib import admin
from django.urls import path, include, re_path

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'api/accounting/', include('accounts.urls')),
    re_path(r'api/manufacture/', include('manufacture.urls')),
    re_path(r'api/inventory/', include('inventory.urls')),
]
