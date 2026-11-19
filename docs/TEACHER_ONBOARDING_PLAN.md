# Teacher onboarding: Getting started and the practice classroom

Owner, 19 Nov 2026: a new teacher should learn how Alimun works (the dashboard, starting a lesson, the board, notes and
homework) without a call. Built the same day.

## What a teacher sees

- **Getting started** (`#/start`, in the menu under Account, and a card on Today until it is finished;
  `js/app/teach-start.js`). Seven parts that open one after another: find your way around the dashboard; tell us when
  you can teach; check in and start your class; try the classroom; teach with the prepared lessons and the board; after
  the class (notes and homework); your profile and payouts. Each part has a video (once uploaded), a paragraph, a link to
  its help article, and what opens the next part:
  - a question, checked by the server (the right answer is in `api/onboarding.js`, not in the page);
  - or something done in the dashboard, checked in the database: availability saved (`teacher_availability` or
    `room_availability`), the practice classroom opened (`teacher_onboarding.practice_at`), "About you, for students"
    of at least 40 characters (`teacher_profiles.bio`).
  With a video, the question stays closed until the video has played to 90% (remembered on that device).
  Parts are shown as cards described in sentences: no numbers, step counters or checklists (CLAUDE.md design rules).
- **Practice classroom** (`#/classes/practice`, `js/app/teach-classes.js`). The real classroom (Daily video, board, side
  panel) in a private room of the teacher's own for 60 minutes, at any time, without recording. The board opens on the
  prepared A2 lesson "Every day" (`English-A2` / `c02`) so "Show the answers" and "Everyone solves this" can be tried;
  nothing is saved. A learner link (a second Daily pass) lets the teacher join from a phone to see the video as a learner
  (the board reaches learners through the Alimun classroom in real classes, so not through this link).
  Approved teachers, and teachers still being hired from "Interview passed" to "Trial class given", may open it
  (the hiring screen has no link to it yet).
- **"?" in the top bar** of every teacher page (`js/app/teach.js`, `PAGE_HELP` / `CLASS_HELP`): opens the help article
  for the page on show. Hidden on Help and Support.

## Admin

Admin → People → **Teacher onboarding** (`js/app/admin-onboarding.js`): each approved teacher (and teachers about to give
a trial class) with how far they are and how often they opened the practice classroom; then the videos, one per part and
language, uploaded straight to the public `teacher-tutorial` bucket, with "What to show" for each part. A language with
no video falls back to the English one.

## Data and API

- Migration `supabase/migrations/202611191200_teacher_onboarding.sql` (applied 19 Nov 2026): `teacher_onboarding`
  (written by the service role only; teachers read their own row), `teacher_tutorial_videos` (read by signed-in users,
  written by admins), bucket `teacher-tutorial` (public, 500 MB per file, MP4/WebM/MOV; admins write).
- `api/onboarding.js`: `state`, `step`, `practice` (teacher), `admin`, `video-set` (admin).
- Text: `app_ob_*`, `app_pr_*`, `app_t_nav_start`, `app_help_page` in all nine dashboard languages.

## Recording the videos (owner)

One screen recording per part, 1 to 3 minutes, in English first, recorded on the real dashboard (a teacher account or
`/app/teach?sample=1`). The "What to show" lines in Admin → Teacher onboarding say what each one covers. Upload in
Admin → Teacher onboarding; the project's storage upload limit applies (the Supabase free plan allows 50 MB per file,
so export at 1080p with a moderate bitrate, or compress first).

## Not done yet

- The hiring screen (trial class booked) does not link to the practice classroom.
- The videos themselves.
