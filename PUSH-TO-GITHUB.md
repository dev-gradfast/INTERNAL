# 🚀 Deploy Now - Run These Commands

## Step 1: Push to GitHub (Run in terminal)

```bash
cd D:\internaltool
git push -u origin main
```

**It will ask for your GitHub login - authenticate there**

---

## Step 2: Connect to Render

1. Go to https://render.com/dashboard
2. Click **New** → **Web Service**
3. Connect your GitHub: `dev-gradfast/INTERNAL`
4. Settings:
   - Name: `office-hr`
   - Region: `Singapore`
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `gunicorn --bind 0.0.0.0:8000 horilla.wsgi:application`

---

## Step 3: Add Environment Variables

In Render, go to **Environment** tab, add:

```
DEBUG=False
SECRET_KEY=(generate at https://djecrety.ir/)
ALLOWED_HOSTS=office-hr.onrender.com
TIME_ZONE=Asia/Kolkata

# From Supabase
DB_ENGINE=django.db.backends.postgresql
DB_NAME=postgres
DB_USER=postgres
DB_PASSWORD=(your supabase password)
DB_HOST=(your-project.supabase.co)
DB_PORT=5432

# From Cloudinary
CLOUDINARY_CLOUD_NAME=(your cloud name)
CLOUDINARY_API_KEY=(your api key)
CLOUDINARY_API_SECRET=(your api secret)
```

---

## Step 4: Deploy

Click **Create Web Service** - wait 5-10 minutes

---

## Step 5: Keep Awake

1. Go to https://uptimerobot.com
2. Add Monitor: `https://office-hr.onrender.com`
3. Interval: 5 minutes

---

## Step 6: Initial Setup

1. Visit: `https://office-hr.onrender.com`
2. Login with admin credentials
3. Configure company settings
4. Add employees

---

## Need Help?

Type `@deploy-horilla` in OpenCode!