from django.urls import path
from .views import index

'''
urlpatterns = [
    path('cambraatz', index),
    path('cambraatz/welcome', index),
    path('cambraatz/photography', index),
    path('cambraatz/landscape', index),
    path('cambraatz/comp_sci', index),
]
'''

urlpatterns = [
    path('', index),
    path('welcome', index),
    path('photography', index),
    path('landscape', index),
    path('comp_sci', index),
]
