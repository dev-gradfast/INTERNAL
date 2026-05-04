# Internal Office Management System
# Forked from Horilla HRMS

## Deploy to Render

### In Render Dashboard:

1. **New** → **Web Service**
2. **Connect GitHub:** `dev-gradfast/INTERNAL`
3. **Settings:**
   - Name: `internal`
   - Region: `Singapore`
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `gunicorn --bind 0.0.0.0:8000 horilla.wsgi:application`
   - Python Version: `3.10`

4. **Environment Variables:**
   ```
   DEBUG=False
   SECRET_KEY=(generate at djecrety.ir)
   ALLOWED_HOSTS=internal.onrender.com
   TIME_ZONE=Asia/Kolkata
   
   DB_ENGINE=django.db.backends.postgresql
   DB_NAME=postgres
   DB_USER=postgres
   DB_PASSWORD=(your Supabase password)
   DB_HOST=(your-project.supabase.co)
   DB_PORT=5432
   ```

### Important Notes:

- **Build failed before because:** Render detected Node.js instead of Python
- **Fix:** Make sure Python is selected in Settings tab
- **Runtime:** Specify `Python 3.10`

---

## After Deploy

1. Visit: https://internal.onrender.com
2. Login: admin / (your password)
3. Configure company settings
4. Add employees