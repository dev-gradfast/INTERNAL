# Office HR System - Deployment Guide

## Overview

This guide walks you through deploying your internal Office HR Management System using:
- **Horilla HRMS** - Employee management, tasks, attendance, KPI, payroll
- **Render** - Free web hosting (750 hrs/month)
- **Supabase** - Free PostgreSQL database
- **Cloudinary** - Free file storage (25GB)
- **UptimeRobot** - Free ping service (prevents sleep)

---

## Step 1: Get Free Accounts

| Service | URL | What For |
|---------|-----|---------|
| Render | render.com | Host the web app |
| Supabase | supabase.com | Free PostgreSQL database |
| Cloudinary | cloudinary.com | File uploads storage |
| UptimeRobot |uptimerobot.com | Keep app awake |

---

## Step 2: Setup Supabase (Database)

1. Go to [supabase.com](https://supabase.com) → Create account
2. Click **New Project**
3. Enter details:
   - **Name**: `office-hr`
   - **Database Password**: Create strong password (save it!)
   - **Region**: Select closest to you
4. Wait 2 minutes for setup
5. Go to **Settings** → **API**
6. Copy these (save in a text file):
   - Project URL (e.g., `https://abc123.supabase.co`)
   - Connection string (will use for DB_HOST)

---

## Step 3: Setup Cloudinary (File Storage)

1. Go to [cloudinary.com](https://cloudinary.com) → Create account
2. Go to Dashboard
3. Copy these (save in text file):
   - Cloud Name
   - API Key
   - API Secret

---

## Step 4: Deploy to Render

### 4a. Create Web Service

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click **New** → **Web Service**
3. Connect your GitHub repository (or skip for manual)
4. Configure:

| Setting | Value |
|---------|-------|
| Name | `office-hr` |
| Region | Singapore (or closest) |
| Build Command | `pip install -r requirements.txt` |
| Start Command | `gunicorn --bind 0.0.0.0:8000 horilla.wsgi:application` |

### 4b. Add Environment Variables

In Render dashboard, go to **Environment** tab and add:

```
DEBUG=False
SECRET_KEY=(generate at https://djecrety.ir/)
ALLOWED_HOSTS=yourapp.onrender.com
TIME_ZONE=Asia/Kolkata

# Database (from Supabase)
DB_ENGINE=django.db.backends.postgresql
DB_NAME=postgres
DB_USER=postgres
DB_PASSWORD=(your Supabase password)
DB_HOST=xxxxx.supabase.co
DB_PORT=5432

# Cloudinary (optional)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 4c. Deploy

Click **Create Web Service** and wait 5-10 minutes for deployment.

---

## Step 5: Keep Awake (UptimeRobot)

1. Go to [UptimeRobot](https://uptimerobot.com)
2. Create free account
3. Click **Add New Monitor**
4. Configure:
   - **Monitor Type**: HTTP(s)
   - **URL**: Your Render URL (e.g., `https://office-hr.onrender.com`)
   - **Monitoring Interval**: 5 minutes
5. Click **Create Monitor**

This pings your app every 5 minutes to keep it from sleeping!

---

## Step 6: Initial Setup

### 6a. Access the App

Go to your Render URL. You'll see the Horilla setup wizard.

### 6b. Initialize

1. Enter the **DB_INIT_PASSWORD** (from your .env or create one)
2. Create admin user (username: admin, password: admin123)
3. Configure company settings

### 6c. Configure Attendance Rules

Go to **Settings** → **Attendance**:
- Set working hours (e.g., 9:00 AM - 6:00 PM)
- Set grace period (e.g., 10 minutes)
- Late arrives after: 9:00 AM

---

## How to Use

### Daily Workflow

| Step | Who | Action |
|------|-----|-------|
| 1 | Manager | Assign tasks in Horilla |
| 2 | Employee | Login → See daily tasks |
| 3 | Employee | Complete task → Upload proof |
| 4 | Manager | Review → Approve/Reject |
| 5 | System | Auto-update KPI |

### Monthly Workflow

| Step | Who | Action |
|------|-----|-------|
| 1 | Admin | Upload eSSL attendance file (2nd of month) |
| 2 | Employee | View own attendance in self-service |
| 3 | System | Auto-calculate LOP |
| 4 | HR | Approve any deductions |
| 5 | System | Run payroll |

### Biometric Integration

For eSSL devices:
1. Go to **Attendance** → **Biometric Devices**
2. Add Device:
   - Device Name: eSSL
   - Device Type: ZKTeco (or select)
   - Machine IP: Device IP address
   - Port: 4370
   - Password: 0 (default)
3. Fetch logs or set schedule

---

## Troubleshooting

### App is slow on first load
This is normal - Render free tier sleeps after 15 min. UptimeRobot keeps it awake.

### Database connection fails
- Check Supabase credentials are correct
- Ensure database is not expired (Supabase free tier never expires)

### File uploads not working
- Configure Cloudinary in environment variables
- Or use external storage

---

## Getting Help

- Horilla Docs: https://docs.horilla.com/
- Horilla GitHub: https://github.com/horilla/horilla-hr

---

## Cost Summary

| Service | Cost |
|---------|------|
| Render | Free (750 hrs) |
| Supabase | Free (500MB) |
| Cloudinary | Free (25GB) |
| UptimeRobot | Free |
| **Total** | **₹0** |