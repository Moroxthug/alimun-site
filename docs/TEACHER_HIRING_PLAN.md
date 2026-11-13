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

## Step 2: the trial class (next, after the owner has seen step 1)

A free 30-minute taster for real learners at a level the teacher teaches, at a time from the teacher's availability;
learners invited from Matching; check-in, verification and a full recording by the owner; learners rate it with one
tap; a scorecard; "Approve" or "Reject".

## Step 3: assignment (after step 2)

Approved teachers are proposed for the owner's rooms that need a teacher and fit their language, levels and times
(then groups from Matching); the owner confirms with one click, the teacher gets the course contract.
