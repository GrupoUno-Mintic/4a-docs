"""InventoriesProject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from rest_framework_simplejwt.views import (TokenObtainPairView, TokenRefreshView) 
from InventoriesApp import views


urlpatterns = [
    #path('login/', TokenObtainPairView.as_view()),                          # Cada vez que una persona logue, retorna los tokens de acceso y refresh correspondientes -- Ready!
    #path('refresh/', TokenRefreshView.as_view()),                           # Genera nuevo token de acceso
    #path('inventarios/', views.),                 # Retorna una lista de productos
    path('inventarios/', views.InventarioView.as_view()),                    # Retorna una lista de inventarios
    #path('inventario/create', views.InventarioCreateView.as_view()),        # Crea un inventario
]

