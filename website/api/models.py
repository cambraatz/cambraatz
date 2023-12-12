from django.db import models
from phone_field import PhoneField

# Create your models here.
class Contact(models.Model):
    name = models.CharField(max_length=60, default="")
    email = models.EmailField(max_length=254, default="")
    phone = PhoneField(blank=True, help_text='Contact phone number')
    message = models.TextField() # default form widget 'TextArea'
    created_at = models.DateTimeField(auto_now=True)


