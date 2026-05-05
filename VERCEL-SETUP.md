# Vercel Environment Variables Guide

## Quick Setup for Internal Office System

### In Vercel Dashboard:

1. Go to your Vercel project
2. Click **Settings** → **Environment Variables**

### Add these ONE BY ONE:

| Variable | Value |
|----------|-------|
| PYTHON_VERSION | 3.11 |
| DEBUG | False |
| SECRET_KEY | (generate at https://djecrety.ir/) |
| ALLOWED_HOSTS | yourproject.vercel.app |
| TIME_ZONE | Asia/Kolkata |

### Database (Supabase):

| Variable | Value |
|----------|-------|
| DB_ENGINE | django.db.backends.postgresql |
| DB_NAME | postgres |
| DB_USER | postgres |
| DB_PASSWORD | YZEb/A4,NefWq_V |
| DB_HOST | hzfbtsrumqkxgwvsdbdm.supabase.co |
| DB_PORT | 5432 |

### Optional - Cloudinary:

| Variable | Value |
|----------|-------|
| CLOUDINARY_CLOUD_NAME | (your cloud name) |
| CLOUDINARY_API_KEY | (your api key) |
| CLOUDINARY_API_SECRET | (your api secret) |

---

## For Testing First - SQLite (No Database Setup):

| Variable | Value |
|----------|-------|
| DEBUG | True |
| DB_ENGINE | django.db.backends.sqlite3 |
| DB_NAME | db.sqlite3 |

---

## Important Vercel Settings:

- **Build Command**: `pip install -r requirements.txt`
- **Output Directory**: `staticfiles` (after collectstatic)
- **Install Command**: `pip install -r requirements.txt`