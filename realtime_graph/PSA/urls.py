from django.urls import path


from .views import *

urlpatterns = [
    path('', index),
    path('login/', login),
    path('home/', home),
    path('activity/',activity),
    path('employee/',employee),
    path('monitoring/',monitoring)
]