# Internal Office System - Quick Deploy

## Current Config (SQLite for easy testing):

For testing without Supabase, update environment:

```
DEBUG=True
SECRET_KEY=dev-key-for-testing-only-change-in-production
ALLOWED_HOSTS=office-tool-f52t.onrender.com
TIME_ZONE=Asia/Kolkata
DB_ENGINE=django.db.backends.sqlite3
DB_NAME=db.sqlite3
```

---

## But For Production (Supabase):

Use these in Render:
```
DEBUG=False
SECRET_KEY=(from djecrety.ir)
ALLOWED_HOSTS=office-tool-f52t.onrender.com
TIME_ZONE=Asia/Kolkata

DB_ENGINE=django.db.backends.postgresql
DB_NAME=postgres
DB_USER=postgres
DB_PASSWORD=YZEb/A4,NefWq_V
DB_HOST=hzfbtsrumqkxgwvsdbdm.supabase.co
DB_PORT=5432
```