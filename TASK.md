# Office HR System - Build Task & Roadmap

## Project Overview
- **Project**: Internal Office HR Management System
- **Goal**: Fair, transparent employee management with task assignment, biometric attendance, KPI tracking, and automated payroll
- **Stack**: Horilla HRMS + Render + Supabase + Cloudinary
- **Target Users**: 20-40 employees

---

## Milestones

### Phase 1: Infrastructure Setup ⏱️ 1-2 days
- [ ] 1.1 Deploy Horilla to Render
- [ ] 1.2 Connect Supabase database
- [ ] 1.3 Configure Cloudinary
- [ ] 1.4 Set up UptimeRobot (keep awake)

### Phase 2: Attendance System ⏱️ 1 day
- [ ] 2.1 Configure working hours (9AM-6PM)
- [ ] 2.2 Set grace period (10 min)
- [ ] 2.3 Integrate eSSL biometric
- [ ] 2.4 Configure LOP rules

### Phase 3: Task Management ⏱️ 1 day
- [ ] 3.1 Configure task module
- [ ] 3.2 Set up daily task workflow
- [ ] 3.3 Enable proof upload
- [ ] 3.4 Configure approval workflow

### Phase 4: Payroll & KPI ⏱️ 1 day
- [ ] 4.1 Configure salary structure
- [ ] 4.2 Set up LOP auto-deduction
- [ ] 4.3 Configure KPI metrics
- [ ] 4.4 Set increment/termination thresholds

### Phase 5: Self-Service Portal ⏱️ 1 day
- [ ] 5.1 Enable employee self-service
- [ ] 5.2 Configure what employees see
- [ ] 5.3 Add notification settings

### Phase 6: Testing & Launch ⏱️ 1 day
- [ ] 6.1 User acceptance testing
- [ ] 6.2 Train employees
- [ ] 6.3 Go live
- [ ] 6.4 Monitor and fix issues

---

## Quick Start Commands

```bash
# Install GSD (optional - for autonomous builds)
npm install -g gsd-pi@latest

# Run GSD auto mode
gsd auto "Deploy and configure Horilla HRMS"
```

---

## Resources

| Resource | URL |
|----------|-----|
| Horilla Docs | https://docs.horilla.com |
| Horilla GitHub | https://github.com/horilla/horilla-hr |
| Render | https://render.com |
| Supabase | https://supabase.com |
| Cloudinary | https://cloudinary.com |

---

## Current Status

```
⏳ Phase 1: Waiting to start
⏳ Phase 2: Not started
⏳ Phase 3: Not started
⏳ Phase 4: Not started
⏳ Phase 5: Not started
⏳ Phase 6: Not started
```

---

## Notes

- Free tiers: Render (750hrs), Supabase (500MB), Cloudinary (25GB)
- Total cost: ₹0/month for ~40 users
- Timeline: 5-7 days complete