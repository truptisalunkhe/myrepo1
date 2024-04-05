from django.shortcuts import render

# Create your views here.
def display(request):
   return render(request,'new.html')

def receive(request):
   if request.method==POST:
     name=request.POST.get('name')
     email=request.POST.get('email')
     message=request.POST.get('message')
     z=
   else:
     return HttpResponse("Invalid Request")