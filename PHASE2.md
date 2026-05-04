# Office HR System - Deployment Progress

## ✅ Phase 1: Code - COMPLETE

Code pushed to: https://github.com/dev-gradfast/INTERNAL

---

## 🚀 Phase 2: Render - IN PROGRESS

### DO THIS NOW:

1. **Go to:** https://render.com/dashboard
2. **Click:** New → Web Service
3. **Connect:** GitHub → `dev-gradfast/INTERNAL`
4. **Configure:**
   - Name: `office-hr`
   - Region: Singapore
   - Build: `pip install -r requirements.txt`  
   - Start: `gunicorn --bind 0.0.0.0:8000 horilla.wsgi:application`

5. **Add Environment Variables** (Environment tab):
   ```
   DEBUG=False
   SECRET_KEY=(generate at https://djecrety.ir/)
   ALLOWED_HOSTS=office-hr.onrender.com
   TIME_ZONE=Asia/Kolkata
   
   DB_ENGINE=django.db.backends.postgresql
   DB_NAME=postgres
   DB_USER=postgres
   DB_PASSWORD=(your Supabase password)
   DB_HOST=(your-project.supabase.co)
   DB_PORT=5432
   ```

6. **Click:** Create Web Service
7. **Wait:** 5-10 minutes for deploy

---

## Next Steps After Deploy

Tell me "DEPLOY DONE" and I'll:
- ✅ Verify deployment
- ✅ Configure attendance
- ✅ Set up LOP rules  
- ✅ Configure task workflow
- ✅ Set up payroll + KPI