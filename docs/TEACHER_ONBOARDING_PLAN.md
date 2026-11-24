# Teacher onboarding: the dashboard tour and the practice classroom

Owner, 19 Nov 2026: a new teacher should learn how Alimun works without a call. First built as a "Getting started"
section with videos and questions; on 20 Nov the owner found it confusing ("simplify everything … a process where the
teacher sees instructions from the dashboard, like other platforms"), so it was replaced by a guided tour.

## What a teacher sees

- **Dashboard tour** (`js/app/teach-tour.js`). The first time an approved teacher opens the dashboard, a short welcome
  card with an 80-second overview video of the dashboard offers "Show me around" or "Later". The tour then walks through the real dashboard: the screen dims, the real
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
practice classroom. Below that, **Overview video**: per language, which video the welcome card plays, with Watch,
Upload/Replace (MP4) and Remove upload.

## Overview video

- Built in: the designed version (24 Nov), made to the Claude Design prompt in
  `docs/TEACHER_TOUR_VIDEO_CLAUDE_DESIGN.md`: real dashboard screens in a large rounded frame on bone, a gentle zoom
  and a lime outline on the part explained, the caption under it, title and closing cards; 75 s, 1920x1080, every
  language (`videos/teacher-tour/<lang>.mp4`). Made with `node scripts/design-tour-video.js <lang>
  videos/teacher-tour/<lang>.mp4 https://alimun.com <ffmpeg>` (frame by frame, about 3 min per language; it captures
  the screens from the live site because the board's prepared lessons only load there).
  `scripts/record-tour-video.js` makes the earlier plain screen recording, if ever needed.
- An admin upload (`teacher-tutorial` bucket, `tour/<lang>.mp4`, e.g. a Claude Design version made with
  `docs/TEACHER_TOUR_VIDEO_CLAUDE_DESIGN.md`) plays instead. Order on the card: upload, recorded, then English.

## Task videos

Owner, 24 Nov 2026: "create more videos, each focusing on exactly what to do". Seven tour stops have a "Watch how
it's done" button (`app_tour_watch`) that plays a 30 to 40 second video in the card: Start a class (next class), Write
the notes after a class (To do), Set your availability and accept classes (Classes), Teach with the board (Lessons), Mark
homework, Write to your class (Messages), Fill in your profile (Settings). Each shows the real sample dashboard step by
step: the pointer goes to the button and presses it, the caption says what to do and quotes the button as the dashboard
labels it in that language.

- Scenes and captions in all nine languages: `scripts/task-videos.js`. Files: `videos/teacher-tour/<video>-<lang>.mp4`,
  made with `node scripts/design-tour-video.js <lang> videos/teacher-tour/<video>-<lang>.mp4 https://alimun.com <ffmpeg>
  <video>` (about 1.5 min each). Raise `VER` in `js/app/teach-tour.js` when files change (cached for a week).
- Not uploadable from the admin page (only the overview video is); re-render when the dashboard changes.

## Data and API

- `teacher_onboarding` (migration `202611191200_teacher_onboarding.sql`): `steps.tour` (finished), `steps.tour_closed`
  (closed early), `practice_at`, `practice_count`; written by the service role only.
- `api/onboarding.js`: `state`, `tour`, `practice` (teacher), `admin`.
- Text: `app_tour_*`, `app_pr_*`, `app_help_page` in all nine dashboard languages.
- Bucket `teacher-tutorial` holds the admin's overview-video uploads (policies in `202611191200` and
  `202611201200_teacher_tutorial_admin_select.sql`). Table `teacher_tutorial_videos` is left from the first version and
  unused; the owner asked to keep it.
