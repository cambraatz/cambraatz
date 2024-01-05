"""
WSGI config for website project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/wsgi/
"""
# new line
python_home = '/home/django-server-cb/cambraatz/cb-venv'
activate_this = python_home + '/bin/activate_this.py'

# new lines
with open(activate_this) as f:
   code = compile(f.read(), activate_this, 'exec')
   exec(code, dict(__file__=activate_this))

import os

# new line
import sys

from django.core.wsgi import get_wsgi_application

# new lines
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(BASE_DIR)

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'website.settings')

application = get_wsgi_application()
