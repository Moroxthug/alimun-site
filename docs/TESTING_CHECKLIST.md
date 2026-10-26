# Testing checklist for the new dashboards

Things that could not be tested from a cloud session (no real teacher, student or admin sign-in, no real classes or
submissions in the database yet), and decisions taken for the owner that should be looked at during testing.
Started 26 Oct 2026. Tick each item when it has been tried with real accounts.

## Needs a real class with enrolled students
- [ ] Teacher starts a class from Today or Classes: the Daily room opens, the class conversation beside it works.
- [ ] Student joins the same class from their dashboard; attendance is recorded ("came to N of the last 4 classes").
- [ ] Teacher writes and publishes class notes: students get the email once, see the notes and the PDF, the words reach their flashcards. Publishing again does not email again.
- [ ] A 1:1 follow-up: booked by the student, joined by both, the teacher's note reaches the student.
- [ ] Messages between a student and the class, and privately with the teacher, both ways.
- [ ] Teacher creates a class from their availability (12 weeks of dates, video rooms).

## Homework and material
- [ ] Teacher sets written homework; student hands it in; teacher drafts feedback, edits it, sends it; the student sees mark and feedback.
- [ ] Homework from a course book lesson, a library piece, a mock paper and a teacher's set: marked by itself once the student finishes it.
- [ ] Homework for one student (also a 1:1-only student) is seen by that student only.
- [ ] Teacher drafts exercises from a topic, a text and the class's mistakes (real drafting service); sends a set as practice; the student plays it in Practice, "Just my mistakes" works.

## Students page for teachers
- [ ] "Needs attention" rules with real data: no practice for 7 days, last two classes missed, homework past due.
- [ ] A student's file matches what the student sees on their own Progress page.
- [ ] Private notes are never visible to the student (checked in the database; check again in the student's Homework page).

## Accounts and switch-over
- [ ] An approved teacher signs in and lands on /app/teach with their own data.
- [ ] A teacher still being reviewed sees "your application is being reviewed".
- [ ] /teacher-dashboard and /app/messages send teachers to the new dashboard.
- [ ] Teacher Settings: name, location, specialty, bio save; the change shows to students.
- [ ] Teacher Payouts: real payouts and this month's counts look right.

## Admin pages (decisions taken for the owner on 26 Oct 2026, to confirm while testing)
- [ ] Admin pages are English only.
- [ ] "Create student" and "Add faculty" are replaced by "Invite by email" (the server creates the account with its role and emails a sign-in link). Check the email and that the invited person lands on the right dashboard.
- [ ] After admin part 2, the old teacher dashboard and old admin page forward to the new pages.
- [ ] Overview: the numbers match the database; "Open the room" opens today's class room as an admin.
- [ ] View as a teacher or a student (read-only): nothing can be saved, sent or booked.
