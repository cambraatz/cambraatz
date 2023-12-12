from django.shortcuts import render
from rest_framework import generics
from .serializers import ContactSerializer
from .models import Contact

# Create your views here.
class ContactView(generics.ListAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer