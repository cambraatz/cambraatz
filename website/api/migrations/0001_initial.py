# Generated by Django 5.0 on 2023-12-06 22:19

import phone_field.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=60)),
                ('email', models.EmailField(default='', max_length=254)),
                ('phone', phone_field.models.PhoneField(blank=True, help_text='Contact phone number', max_length=31)),
                ('message', models.TextField()),
                ('created_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
