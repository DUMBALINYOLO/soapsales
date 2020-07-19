from django.urls import path, include
from rest_framework.routers import DefaultRouter
from employees.apis import EmployeeViewSet
from .views import (
		RegisterAPI,
		LoginAPI,
		UserAPI
	)

from knox import views as knox_views

router = DefaultRouter()

router.register(r'employees', EmployeeViewSet)



urlpatterns = [
	path('auth/', include('knox.urls')),
	path('auth/register/', RegisterAPI.as_view()),
	path('auth/login', LoginAPI.as_view()),
	path('auth/user/', UserAPI.as_view()),
	path('auth/logout/', knox_views.LogoutView.as_view(), name='knox_logout')
] + router.urls