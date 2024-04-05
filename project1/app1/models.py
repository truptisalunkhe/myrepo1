from django.db import models

# Create your models here.

class Contact(models.Model):
   username=models.CharField(max_length=25)
   email=models.EmailField()
   phone=models.CharField(max_length=10)
   message=models.TextField()


class Login(models.Model):
   email=models.EmailField()
   password=models.CharField(max_length=10)
  

class Register(models.Model):
   name=models.CharField(max_length=25)
   email=models.EmailField()
   password=models.CharField(max_length=10)

class Feedback(models.Model):
   name=models.CharField(max_length=25)
   email=models.EmailField()
   message=models.CharField(max_length=25)

class Order(models.Model):
   name=models.CharField(max_length=25)
   email=models.EmailField()
   ccno=models.IntegerField()
   expirydate=models.DateField()
   cvv=models.IntegerField()
   message=models.CharField(max_length=25)
  
  
  
  