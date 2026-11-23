# Teacher onboarding: the dashboard tour and the practice classroom

Owner, 19 Nov 2026: a new teacher should learn how Alimun works without a call. First built as a "Getting started"
section with videos and questions; on 20 Nov the owner found it confusing ("simplify everything … a process where the
teacher sees instructions from the dashboard, like other platforms"), so it was replaced by a guided tour.

## What a teacher sees

- **Dashboard tour** (`js/app/teach-tour.js`). The first time an approved teacher opens the dashboard, a short welcome
  card offers "Show me around" or "Later". The tour then walks through the real dashboard: the screen dims, the real
  element is lit up and a small card beside it says what it is, with Back, Next and Close (Esc and the arrow keys work
  too). Stops: the next class (Check in, Start the class), To do, Classes and availability, Lessons, Homework, Messages,
  Settings, the question mark, and last the practice classroom with "Open the practice classroom". On a phone the card
  sits at the bottom, above the menu bar. Finished or closed is saved, so it does not open by itself again; "Dashboard
  tour" in the menu opens it any time.
- **Practice classroom** (`#/classes/practice`, button on Classes). The real classroom (Daily video, board, side panel)
  in a private room of the teacher's own for 60 minutes, at any time, without recording. The board opens on the prepared
  A2 lesson "Every day" (`English-A2` / `c02`). A learner link lets the teacher join from a phone as a learner.
- **"?" in the top bar** of every teacher page: the help article for the page on show.

## Admin

Admin → People → **Teacher onboarding** (`js/app/admin-onboarding.js`): each approved teacher (and teachers about to give
a trial class): finished the tour, closed it early, or not opened the dashboard yet; and how often they opened the
practice classroom.

## Data and API

- `teacher_onboarding` (migration `202611191200_teacher_onboarding.sql`): `steps.tour` (finished), `steps.tour_closed`
  (closed early), `practice_at`, `practice_count`; written by the service role only.
- `api/onboarding.js`: `state`, `tour`, `practice` (teacher), `admin`.
- Text: `app_tour_*`, `app_pr_*`, `app_help_page` in all nine dashboard languages.
- Left over from the first version and no longer used: table `teacher_tutorial_videos` and bucket `teacher-tutorial`
  (both empty). Remove them only with the owner's yes.
