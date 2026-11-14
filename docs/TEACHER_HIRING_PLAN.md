# Teacher hiring: interview, trial class, assignment

Owner, 13 Nov 2026: "once a teacher sends request, i'd like to open a room just between us 2, like a zoom interview
... if i am satisfied i pre approve them to run a 30 min trial class to see how they handle class, time and students
and if they really are prepared or not. then, approve and teacher can be then assigned automatically to the best class
suitable to their timetable, but preferably matches to one of our classes we create."

Owner's answers (13 Nov 2026): the trial class is a free 30-minute taster with real learners; teachers pick their
interview time from the owner's weekly interview hours; interviews are not recorded; the owner confirms each
assignment at first, then it can run by itself.

## The stages (teacher_profiles.hiring_stage)

applied → interview_invited → interview_booked → (interview) → pre_approved → trial_scheduled → trial_done →
approved → assigned; or rejected at any point. The owner can still approve a teacher they know directly.

## Step 1: the interview (built 13 Nov 2026)

- Admin, Teachers: a waiting teacher's file has "Invite to interview" (instead of approving at once). The teacher gets
  an email and, in their dashboard, the free times.
- The owner's weekly interview hours (Admin, Teachers, Interview hours): days and times in the owner's time zone,
  30-minute interviews, booked at least 12 hours ahead, up to 14 days ahead; times when the owner teaches or has
  another interview are left out.
- The teacher picks a time in their dashboard (shown in their own time zone), can change it until 12 hours before, and
  joins from the dashboard: a private Daily room for the two of them, not recorded (no one can record it).
- Reminders 1 hour and 5 minutes before to both; the teacher's join counts as their check-in.
- After it: "Pre-approve" (the teacher is told the next step is a 30-minute trial class) or "Reject" (the existing
  rejection email), with a note only admins see.

## Step 2: the trial class (built 14 Nov 2026)

A free 30-minute taster for real learners at a level the teacher teaches, at a time from the teacher's availability;
learners invited from Matching; check-in, verification and a full recording by the owner; learners rate it with one
tap; a scorecard; "Approve" or "Reject".

- Admin, a pre-approved teacher's file: choose the language (one they teach) and level, then a time from their weekly
  availability (`teacher_availability`; `room_availability` is empty), every half hour from 48 hours to 21 days ahead,
  leaving out the owner's interviews, the classes the owner teaches and other trial classes. Teachers in hiring cannot
  set availability yet, so a time agreed with them can be typed instead (still at least 48 hours ahead, not busy).
- Booking makes a one-date class (a closed cohort with one 30-minute session, up to 8 places, the teacher as its teacher)
  and a `teacher_trials` row; the stage becomes trial_scheduled and the teacher is emailed. The teacher's dashboard shows
  the time, Check in (from an hour before) and Join (from 15 minutes before; their own trial date only, through
  /api/join-session). Reminders, the missing check-in alert, the late alert, verification and proof clips work as for
  any class.
- Learners: "Suggest learners from Matching" ranks real learners of the language at the level or one level apart by
  level, whether the time suits them where they live, and activity (`trialPick` in js/match.js); test accounts and staff
  are never suggested, and the server refuses them again. Invitations go through the `trial-invites` automation (email
  unless they withdrew consent, and a dashboard note); it starts in dry run, and an invitation only appears on the
  learner's Classes page once it is really sent. A learner takes a free place (a `trial` entitlement on the date and a
  place in the class) or gives it up.
- The owner joins as Alimun staff and records from the class date page (admin-only recording, unchanged).
- After the class: the trial is marked done, the stage becomes trial_done, the owner is emailed once, and learners who
  took a place are asked to rate it with one tap (`trial-ratings` automation, dry run at first; email buttons are signed
  one-tap links; the Classes page has the same three answers). Ratings in `trial_ratings`, written only by the server.
- Scorecard on the teacher's file: punctuality, check-in, time in the room, learners present and booked, ratings, the
  recording (Watch), a note; Approve or Reject record the decision on the trial and then use the existing set-status
  (approved with the welcome email, or rejected with the rejection email). Cancelling a trial releases the places, tells
  the learners (through `trial-invites`) and the teacher, and moves the teacher back to pre_approved.

## Step 3: assignment (after step 2)

Approved teachers are proposed for the owner's rooms that need a teacher and fit their language, levels and times
(then groups from Matching); the owner confirms with one click, the teacher gets the course contract.
