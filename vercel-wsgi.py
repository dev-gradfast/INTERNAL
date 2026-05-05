"""
Vercel WSGI config for Internal Office System
"""

import os
import sys

# Add project to path
sys.path.insert(0, os.path.join(os.getcwd(), 'horilla'))

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'horilla.settings')

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()