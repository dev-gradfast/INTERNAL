"""
Vercel entry point for Internal Office System (Django)
"""
import os
import sys
from pathlib import Path

# Add project paths
BASE_DIR = Path(__file__).resolve().parent
horilla_path = BASE_DIR / "horilla"
if str(horilla_path) not in sys.path:
    sys.path.insert(0, str(BASE_DIR))
    sys.path.insert(0, str(horilla_path))

# Set Django settings
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "horilla.settings")

# Run WSGI
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()