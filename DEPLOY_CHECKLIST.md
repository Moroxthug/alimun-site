# Alimun — Go-Live Checklist (July 2026)

Steps required to activate everything shipped in the dashboard overhaul.

## 1. Database migrations (required)
Run in the Supabase SQL editor, **after** `schema.sql`, in this order:

```
supabase/add-availability-assignments.sql
supabase/add-exercise-results.sql
```

Creates the tables the dashboards now use (they were referenced but never
existed): `teacher_availability`, `assignments`, `assignment_submissions`,
`student_feedback`, `teacher_reviews` — all with RLS, plus a trigger that
keeps `teacher_profiles.rating` in sync with reviews.

## 2. Vercel environment variables
| Variable | Needed for | Status |
|---|---|---|
| `SUPABASE_URL` | all API functions | existing |
| `SUPABASE_SERVICE_ROLE_KEY` | all API functions | existing |
| `DAILY_API_KEY` | `/api/join-session`, `/api/cron-create-rooms` | **set this** (key was provided) |
| `GEMINI_API_KEY` | `/api/grade` + `/api/generate-exercises` (AI grading, exercise generation, placement test) | **set this** — Gemini is the primary AI backend |
| `GEMINI_MODEL` | override model (default `gemini-2.0-flash`) | optional |
| `ANTHROPIC_API_KEY` | `/api/grade` fallback only, used if no Gemini key | optional |
| `CRON_SECRET` | cron auth | recommended |
| `APP_URL` | CORS origin lock | recommended in production |

## 3. How the video flow works now
- Rooms are **private** and provisioned **on demand** by `POST /api/join-session`
  (the daily cron is now only a prefetch, no longer load-bearing — it ran once
  a day but only looked 30 minutes ahead, so it effectively never created rooms).
- The endpoint verifies the caller is the cohort's teacher or an actively
  enrolled student, creates the Daily room if missing, and returns a meeting
  token (teacher joins as owner). Join window: 15 min before → 90 min after start.

## 4. Classroom creation
- Teachers add weekly slots under **Availability**, then use
  **Sessions → + Create classroom**. Day/time options are limited to slots
  where a 60-minute session fits; `/api/create-cohort` re-validates
  server-side and auto-schedules 12 weeks of sessions.

## 5. Assignments
- Teacher: create → stored in `assignments` (one row per active cohort);
  grading queue reads pending `assignment_submissions`; "Grade with AI"
  goes through `/api/grade`; sending feedback marks the submission graded.
- Student: assignments for their cohort appear under Practice/Assignments;
  submitting upserts into `assignment_submissions`; graded scores feed
  their progress metrics.

## 5b. Exercises, placement test & analytics
- Student **Practice** view now has "✨ New exercises" (Gemini generates a
  fresh mixed set — MC/quiz, fill-the-blank, matching, listening (TTS),
  speaking (speech recognition), essay — at the student's language + level,
  with instructions in the UI language) and a **Placement test** (8 ramping
  questions → sets `student_profiles.level`; button hides once done).
- Essay grading is now real AI feedback via Gemini (localized), with a
  generic fallback if the API is down.
- Every graded exercise writes to `exercise_results`; the teacher Overview
  shows per-student overall % from real data plus a "Class skills (30 days)"
  breakdown (grammar/vocabulary/listening/speaking/writing) and weekly-active counts.
- All new UI strings are in `js/translations.js` for **en + it** (keys
  `student_ex_*`, `student_placement_*`, `teacher_skills_*`, `skill_*`);
  other locales fall back to English — translate those keys when ready.

## 6. Design preview (dev only)
`/student-dashboard.html?preview=1` and `/teacher-dashboard.html?preview=1`
render the dashboards with a mock user — **localhost only**, inert in production.

## 7. Known limitations / next steps
- Locale dashboard copies (`es/`, `fr/`, … ) are generated from the root files
  (script inlined in this repo's history); regenerate them whenever the root
  dashboards change.
- `student_feedback` history is shown to students on their Progress view;
  teacher notes written pre-migration only existed in localStorage and are gone.
- Payouts are still read-only (admin inserts rows manually).
