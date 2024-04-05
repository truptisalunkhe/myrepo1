"""
URL configuration for project1 project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
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
from app1 import views
from django.conf.urls.static import static

urlpatterns = [
    path('admin/',admin.site.urls),  
    path('test/',views.display),
    path('rcv/',views.receive,name='rcv'),
    path('test/cntct/', views.show),
    path('test/LogIn/', views.present),
    path('/lgn/', views.mylogin,name="lgn"),
    path('test/Register/', views.send),
    path('/regs/', views.doregister,name="regs"),
    path('test/feed/', views.generate),
    path('fdbk/', views.myfeedback,name="fdbk"),
    path('test/order/', views.new),
    path('ord/', views.myorder,name="ord"),
    path('test/srv/',views.serve),
    path('test/srv/f1',views.f1),
    path('rpt1/',views.logreport),
    path('rpt2/',views.resreport),
    path('rpt3/',views.conreport),
    path('rpt4/',views.fedreport),
    path('rpt5/',views.ordreport),
    path('test/car/',views.car),
    path('test/car/ord',views.new),
]
