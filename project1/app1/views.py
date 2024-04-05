from django.shortcuts import render
from django.http import HttpResponse
from.models import *

# Create your views here.
def show(request):
  return render(request,'contact.html')

def display(request):
  return render(request,'index.html')

def present(request):
  return render(request,'l index.html')


def send(request):
  return render(request,'res.html')

def generate(request):
  return render(request,'new.html')

def new(request):
  return render(request,'order2.html')

def LogIn (request):
   return render(request,'l index.html')

def logreport(request):
     log=Login.objects.all()
     return render(request,'report1.html',{'log':log})

def resreport(request):
     res=Register.objects.all()
     return render(request,'report2.html',{'res':res})

def conreport(request):
     con=Contact.objects.all()
     return render(request,'report3.html',{'con':con})

def fedreport(request):
     fed=Feedback.objects.all()
     return render(request,'report4.html',{'fed':fed})


def ordreport(request):
     ord=Order.objects.all()
     return render(request,'report5.html',{'ord':ord})






def receive(request):
  if request.method=='POST':
    username=request.POST.get('name')
    email=request.POST.get('email')
    phone=request.POST.get('phone')
    message=request.POST.get('message')
    z=Contact(username=username,email=email,phone=phone,message=message)
    z.save()
    return HttpResponse("Data is successfull enter")
  else:
    return HttpResponse('Invalid Request') 


def myfeedback(request):
  if request.method=='POST':
    name=request.POST.get('name')
    email=request.POST.get('email')
    message=request.POST.get('message')
    z=Feedback(name=name,email=email,message=message)
    z.save()
    return HttpResponse("Thanks For Sharing Feedback...")
  else:
    return HttpResponse('Invalid Request...') 





def mylogin(request):
  if request.method=='POST':
    myemail=request.POST.get('myemail')
    mypassword=request.POST.get('mypassword')
    z=Login(email=myemail,password=mypassword)
    z.save()
    return HttpResponse("You Are Logged In....")
  else:
    return HttpResponse('Invalid Request...') 

def doregister(request):
 if request.method=='POST':
    name=request.POST.get('name')
    email=request.POST.get('email')
    password=request.POST.get('password')
    z=Register(name=name,email=email,password=password)
    z.save()
    return HttpResponse("You Are Registered.....")
 else:
    return HttpResponse('Invalid Request...')





def myorder (request):
 if request.method=='POST':
    name=request.POST.get('name')
    email=request.POST.get('email')
    ccno=request.POST.get('ccno')
    exdate=request.POST.get('exdate')
    cvv=request.POST.get('cvv')
    message=request.POST.get('message')
    z=Order(name=name,email=email,ccno=ccno,expirydate=exdate,cvv=cvv,message=message)
    z.save()
    return HttpResponse("You Are Order Now.....")
 else:
    return HttpResponse('Invalid Request...') 



def serve(request):
   return render(request,'service.html')
def car(request):
   return render(request,'cart.html')

def f1(request):
   return render(request,'blog.html')







    
   











       
       
                

