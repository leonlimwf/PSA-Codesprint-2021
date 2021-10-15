from django.shortcuts import render
from .models import consumption_records

def index(req):
    return render(req, 'index.html')

def login(req):
    return render(req,'login.html')

def home(req):
    return render(req,'home.html')

def activity(req):
    return render(req,'activity.html')

def employee(req):
    return render(req,'employee.html')

def monitoring(req):
    records = consumption_records.objects.all()
    return render(req, 'monitoring.html', {'records':records})

