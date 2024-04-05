from django.contrib import admin
from .models import *
# Register your models here.
class CustomerAdmin(admin.ModelAdmin):
 list_display=['cust_id','name','location','order_id']
admin.site.register(Customer,CustomerAdmin)
