# Office HR System - DEPLOY NOW

## Step 1: Create GitHub Token (if needed)

1. Go to: https://github.com/settings/tokens
2. Click **Generate new token (classic)**
3. Note: `deploy-token`
4. Scopes: ✅ `repo`
5. Copy the generated token

---

## Step 2: Push to GitHub

Run in **Command Prompt** (not PowerShell):

```cmd
cd D:\internaltool
git push https://github.com/dev-gradfast/INTERNAL.git master
```

When asked for password:
- Username: `dev-gradfast`
- Password: **paste your GitHub token**

---

## Step 3: Connect to Render

1. Go to https://render.com/dashboard
2. Click **New** → **Web Service**
3. Connect GitHub → select `dev-gradfast/INTERNAL`
4. Configure:
   - Name: `office-hr`
   - Region: Singapore
   - Build: `pip install -r requirements.txt`
   - Start: `gunicorn --bind 0.0.0.0:8000 horilla.wsgi:application`

---

## Step 4: Environment Variables

Add in Render → Environment:

```
DEBUG=False
SECRET_KEY=(generate at djecrety.ir)
ALLOWED_HOSTS=office-hr.onrender.com
TIME_ZONE=Asia/Kolkata

DB_ENGINE=django.db.backends.postgresql
DB_NAME=postgres
DB_USER=postgres
DB_PASSWORD=(your Supabase password)
DB_HOST=(your-project-name.supabase.co)
DB_PORT=5432
```

---

## Step 5: Deploy & Keep Awake

1. Click **Create Web Service**
2. Wait ~10 minutes
3. Add UptimeRobot monitor (5 min interval)

---

## Step 6: Initial Setup

Visit `https://office-hr.onrender.com` and configure!

---

## Need Help?

Type `@deploy-horilla`