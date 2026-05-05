# Vercel deployment for Internal Office System

## Build Settings

Framework: Other
Build Command: `pip install -r requirements.txt`
Install Command: `pip install -r requirements.txt`

## Environment Variables to Add in Vercel:

```
DEBUG=False
SECRET_KEY=(from https://djecrety.ir/)
ALLOWED_HOSTS=teamedu.vercel.app
TIME_ZONE=Asia/Kolkata

DB_ENGINE=django.db.backends.postgresql
DB_NAME=postgres
DB_USER=postgres
DB_PASSWORD=YZEb/A4,NefWq_V
DB_HOST=hzfbtsrumqkxgwvsdbdm.supabase.co
DB_PORT=5432
```

## Current Issues Being Fixed:

- Connection closed on initial load
- New vercel.json and vercel_app.py created
- Pushing fixes to GitHub

## For Testing - Try SQLite First:

```
DEBUG=True
DB_ENGINE=django.db.backends.sqlite3
DB_NAME=db.sqlite3
```