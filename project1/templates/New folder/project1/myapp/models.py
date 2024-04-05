from django.db import models

# Create your models here.

class Customer(models.Model):
  
   name=models.CharField(max_length=20)
   email=models.CharField(max_length=20)
   message=models.TextField()


