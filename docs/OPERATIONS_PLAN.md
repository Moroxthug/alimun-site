# Operations plan: verified classes, analytics, safe automations

Owner, 13 Nov 2026: "build a system to verify class started, ended, at what time, how many people etc. ... advanced
analytics and collect data across every single thing, so we know everything. we need control, and we need automations
that are safe enough to run alone with minimal supervision."

## Where things stand (checked 13 Nov 2026)

- A class date turns "live" when the teacher asks for a room pass (`/api/join-session`) and "completed" when the
  15-minute database job sees its time has passed (`db:complete-sessions`), whether or not anyone came.
- `session_attendance` records that a learner asked to join, not that they connected or how long they stayed.
- 28 past class dates are "completed"; only 2 of them have any learner who even asked to join. Payouts count
  "completed" dates, so teacher pay rests on the clock.
- Daily is already told who each person is (the meeting token carries the account id), so Daily's own records can be
  matched to learners and teachers.
- Daily refused the room settings on 7 Nov (`max_participants` 40 is above what the plan allows). Classes can fail to
  open until this is fixed.
- Usage tracking stores dashboard opens and section views only (`activity_events`). Public pages respect the cookie
  banner's analytics switch.
- Automatic jobs record success or failure in `cron_runs`; none has an off switch, a dry run, a cap or a per-action log.

## Part 1: verified classes (first)

- Daily webhooks (`/api/webhooks/daily`, signed) for meeting started and ended and each person joining and leaving,
  stored raw (`video_events`), plus an hourly reconciliation from Daily's meetings API for the last 48 hours so a lost
  webhook never leaves a gap. Both are idempotent.
- Per class date: actual start and end, minutes late, the teacher's time in the room, the peak number of people,
  learners present and for how long (`class_presence`: person, role, first join, last leave, seconds, rejoins).
- An outcome for each class date once it ends: held, held late, ended early, teacher absent, no learners, did not
  happen. Thresholds set by the owner (below).
- Admin: a class log (scheduled against actual time as a bar, who was there, the outcome), attendance and punctuality
  per teacher and per class, figures on the Overview. Payouts show verified classes beside each period.
- Fix the Daily room size so rooms open on the current plan.

## Part 2: analytics across everything

- One timeline of events: the existing dashboard events plus server-side ones (sign-up steps, level test, tutor,
  exercises, homework, payments, class presence, emails sent and clicked, automations). Public pages only with the
  analytics consent, first-party, no third-party trackers.
- A nightly rollup (`metrics_daily`) so charts are instant and history is kept after raw events expire.
- Admin, Analytics: the funnel from visit to paying, retention by sign-up week, class health, tutor use and
  satisfaction, money (revenue, refunds, AI cost per learner), emails (sent, clicked, bought).
- Privacy: the privacy page lists what is collected and for how long (raw events 13 months; no audio or video content
  is ever recorded). Changes to legal pages go to the owner first.

## Part 3: automations that run alone

- One framework (`api/_lib/automation.js`) every automation goes through: an on and off switch in Admin, a dry run
  that logs what it would do, caps per run and per day, never doing the same thing twice for the same person and
  event, a log line for every action (`automation_log`), and stopping itself after repeated failures and telling the
  owner.
- A morning digest email to the owner: yesterday's classes (held, late, absent), sign-ups, payments, failures, and
  what each automation did. Immediate emails only for what cannot wait.
- Admin, Automations: each automation with its switch, dry run, last runs and the actions it took.
- First automations: class outcomes; a teacher-late alert; existing reminders and the launch email moved onto the
  framework. Others are added one at a time, each off or in dry run until the owner switches it on.

## Owner's decisions (13 Nov 2026)

- Held: the teacher was in the room for at least 90% of the scheduled time and at least one learner joined. Less
  teacher time with learners is "ended early"; learners without the teacher "teacher absent"; the teacher alone
  "no learners"; nobody "did not happen". Minutes late are recorded either way.
- Teacher not in the room 5 minutes after the start: the owner, the teacher and the class's learners are told
  (email, and a dashboard note for the teacher and learners).
- Payouts count verified held classes only; the others are shown with their outcome so one can still be paid by hand.
- A digest email every morning.
- Also asked (13 Nov): about five screenshots per class as proof the class was taught; admins or designated people
  able to watch a call when a learner or teacher raises a concern; a record button with timestamps. Not in Part 1:
  the classroom shows Daily's ready-made call in a frame the page cannot photograph, so screenshots and recording
  depend on Daily's cloud recording (plan and cost to check), and watching unseen, screenshots and recordings each
  need people told beforehand under EU rules. Options go to the owner with Part 1.

## Part 1 as built

- Verification reads Daily's REST API (meetings with their participants, and who is in a room now) every 5 minutes
  instead of webhooks: nothing to register, nothing lost if a call is missed, the same result. Webhooks can be added
  later for second-by-second alerts.
- The teacher-late alert starts in dry run: it logs what it would send. The owner switches it to live in Admin,
  Automations, after checking a few.
