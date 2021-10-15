from django.urls import path
from .consumers import GraphConsumer,GraphConsumer2

ws_urlpatterns = [
    path('ws/PSA/', GraphConsumer.as_asgi()),
    path('ws/PSA/1', GraphConsumer2.as_asgi())
]