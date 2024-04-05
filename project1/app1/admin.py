
from django.contrib import admin
from .models import *
class ContactAdmin(admin.ModelAdmin):
  list_display=['username','email','phone','message']
# Register your models here.
admin.site.register(Contact,ContactAdmin)



class LoginAdmin(admin.ModelAdmin):
  list_display=['email','password',]
# Register your models here.
admin.site.register(Login,LoginAdmin)


class RegisterAdmin(admin.ModelAdmin):
  list_display=['name','email','password',]
# Register your models here.
admin.site.register(Register,RegisterAdmin)


class OrderAdmin(admin.ModelAdmin):
  list_display=['name','email','ccno','expirydate','cvv','message']
# Register your models here.
admin.site.register(Order,OrderAdmin)

class FeedbackAdmin(admin.ModelAdmin):
  list_display=['name','email','message',]
# Register your models here.
admin.site.register(Feedback,FeedbackAdmin)

