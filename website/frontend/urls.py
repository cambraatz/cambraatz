from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('welcome', index),
    path('photography', index),
    path('landscape', index),
    path('comp_sci', index),
]
