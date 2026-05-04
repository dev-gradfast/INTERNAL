# DO THIS NOW - Setup Checklist

## Step 1: Create Free Accounts (10 min)

| Service | Do This | Link |
|---------|--------|------|
| **Render** | Create account, verify email | render.com |
| **Supabase** | Create project "office-hr", save password | supabase.com |
| **Cloudinary** | Create free account | cloudinary.com |
| **UptimeRobot** | Create free account |uptimerobot.com |

## Step 2: Get Credentials

### From Supabase:
1. Go to Settings → API
2. Copy:
   - Project URL (like: https://abc123.supabase.co)
   - Connection string password

### From Cloudinary:
1. Go to Dashboard
2. Copy Cloud Name, API Key, API Secret

## Step 3: Deploy to Render

1. Go to render.com → New Web Service
2. Connect GitHub (fork Horilla first) OR use Docker image
3. Settings:
   - Name: office-hr
   - Region: Singapore
   - Build: pip install -r requirements.txt
   - Start: gunicorn --bind 0.0.0.0:8000 horilla.wsgi:application

4. Add Environment Variables:
   ```
   DEBUG=False
   SECRET_KEY=(generate at djecrety.ir)
   ALLOWED_HOSTS=office-hr.onrender.com
   TIME_ZONE=Asia/Kolkata
   
   DB_ENGINE=django.db.backends.postgresql
   DB_NAME=postgres
   DB_USER=postgres
   DB_PASSWORD=(your Supabase password)
   DB_HOST=abc123.supabase.co
   DB_PORT=5432
   
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_key
   CLOUDINARY_API_SECRET=your_secret
   ```

## Step 4: Keep Awake

1. UptimeRobot → Add Monitor
2. URL: https://office-hr.onrender.com
3. Interval: 5 minutes

## Step 5: Initial Setup

1. Access https://office-hr.onrender.com
2. Create admin user
3. Configure company settings
4. Set attendance rules
5. Add employees

---

## What's Ready For You

| File | Purpose |
|------|---------|
| docker-compose.yml | Local deployment |
| .env.example | Environment template |
| DEPLOY.md | Full guide |
| TASK.md | Roadmap |
| MONITOR.md | Track progress |
| deploy.sh | Local deploy script |
| render.yaml | Render config |

---

## Need Help?

Type `@deploy-horilla` in OpenCode and I'll guide you step by step!