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

## Admin part 2, People
- [ ] Students list: search by email finds the right student; filters by plan, language and class.
- [ ] A student's file matches their own dashboard; changing level, goal and plan saves; the plan email arrives for a paid plan only.
- [ ] A paying student's plan changed here is set back by the next Stripe update (expected; the warning says so).
- [ ] Writing to a student and to a teacher: the email arrives.
- [ ] Approving, rejecting (with a reason) and suspending teachers, one and several: status changes and the emails arrive.
- [ ] A teacher's file: languages, rate and level save; the teacher sees the change in their Settings.
- [ ] Invite a student and a teacher by email: the email arrives, the link signs them in, the student goes to the level test and the teacher to /app/teach.
- [ ] Email signups CSV opens correctly in a spreadsheet.
- [ ] /admin.html and /admin.html?old=1 both forward to /app/admin.

## Admin part 3, Classes, Schedule, Waiting list, Messages
- [ ] Create a class for a teacher: 12 weeks of dates appear in Schedule and in the teacher's dashboard; a class outside their availability is refused unless the box is ticked.
- [ ] A class's file: moving a student to another class and adding a student (they get the email and see the new class); removing one (the seat is offered to the first person waiting).
- [ ] Seats: lowering below the students in the class is refused; raising the seats of a full class opens it, or keeps it full when people are waiting.
- [ ] Closing and reopening a class: closed classes are not offered to students.
- [ ] Schedule: cancelling a date and moving one; the students and the teacher get the email with the new time in their own timezone; "Open the room" for today's class.
- [ ] Waiting list: offering a place by hand when a seat is free (the student gets the usual offer email and can take the place within 48 hours); offering is refused when no seat is free; taking someone off the list.
- [ ] Messages: a conversation reads the same as for its student and teacher; a hidden message disappears for them and comes back when shown again.

## Admin part 4, Payouts, AI spend, System
- [ ] Payouts: the classes counted for a period match the teacher's own Payouts page; recording, changing and deleting a pending payout; marking paid sends the teacher the email and they see it as paid.
- [ ] AI spend: the totals match Overview for this month; people are shown by name; failures appear after a failed call.
- [ ] Reviews: deleting one removes it from the teacher's public profile and updates their rating.
- [ ] App settings: replacing waitlist_webhook_secret together with Vercel's WAITLIST_WEBHOOK_SECRET keeps the waiting-list offer emails working.
- [ ] Automatic jobs: a late or failed job shows in red here and on Overview.

## Student dashboard switch-over, part 1 (finding a class)
- [ ] A paying student without a class finds the open classes of their language, joins one, and sees it in Classes and on Home; the teacher sees them in their class.
- [ ] Switching to another class and leaving a class: the seat is freed and offered to the first person waiting.
- [ ] A full class: joining its waiting list; an offer by email (automatic or from the admin page) shows on Home and Classes, "Take the place" puts the student in the class; an expired offer says so.
- [ ] A student whose plan is too small, or who has no plan, is told which plan they need.
- [ ] "Email me when a class opens" is kept after reloading.
- [ ] After a first class, the student reviews the teacher; the review shows on the class page for other students and in the admin's System page.

## Student dashboard switch-over, part 2 (plans, payments, /app)
- [ ] Signing in as a student lands on /app; signed out, /app#/classes asks to sign in and comes back to Classes.
- [ ] A free student chooses a plan in Settings, pays in Stripe (test card if Stripe is in test mode), comes back to /app with "Thank you", and the plan shows as active within half a minute.
- [ ] Choosing a plan from a class that needs it: after paying, that class opens and "Join this class" works.
- [ ] Cancelling at Stripe comes back with "Nothing was charged".
- [ ] A paying student's "Change your plan" opens Stripe's billing page, which returns to Settings.
- [ ] Buying one private class from Classes: the credit appears after paying.
- [ ] An old waiting-list email link (/student-dashboard.html?claim_cohort_id=…&waitlist_id=…) opens the offer in /app.
- [ ] The admin's "Open their dashboard, read-only" opens /app?as=<id>.

## AI tutor, part 0 (server-built AI actions)
- [ ] A student with a plan: Homework, a written task of 15 words or more, "Check before I hand it in" shows the pointers in the dashboard's language.
- [ ] A mock test's Writing and Speaking papers: after finishing, the drafted marks appear with the exam's criteria.
- [ ] A teacher: a homework task drafted from a topic fills the form; an exercise set drafted from a topic, a pasted text and a class's mistakes adds checked exercises.
- [ ] Admin, AI spend: the new features show as "Homework checked before handing in", "Mock tests marked", "Homework tasks drafted" and "Exercise sets drafted".

## AI tutor, part 1 (tutor time)
- [ ] A student opens /app#/tutor: 10 free minutes, plus the plan's minutes for the month on a paid plan, with the renewal date.
- [ ] Admin, a student's file: the Tutor time card shows the same balance; adding 15 minutes shows them as added, and the student sees them after reloading; removing more than they have stops at zero.
- [ ] Admin, System: changing a plan's tutor minutes is kept after reloading.

## AI tutor, part 2 (written tutor)
- [ ] A student opens Tutor and starts a session: the tutor greets them by name, writes on the board and asks a question or sets an exercise, in the language they learn.
- [ ] Answering the exercise on the board sends the results by itself and the tutor reacts to them; writing a sentence with a mistake gets a correction on the board.
- [ ] The time left goes down by about the time spent; leaving for another section and coming back keeps the session; after 10 minutes without writing a new session starts.
- [ ] End the session: a summary and the words appear; the session shows under past sessions and "What your tutor remembers" fills in; Forget everything empties both.
- [ ] With 1 minute left, the next reply says goodbye and the session ends; Start is then disabled.
- [ ] Admin, AI spend: Tutor replies and Tutor session summaries appear with their cost.

## AI tutor, part 3 (voice)
- [ ] In a session, the tutor's first message and each reply are spoken in Orus after a moment; "Listen" plays a reply again; "Turn the voice off" stops it and stays off after reloading the page.
- [ ] "Speak", say a sentence in the language you learn, "Stop and send": your words appear as your message and the tutor answers them (also on a phone, after allowing the microphone).
- [ ] Refuse the microphone: a message says to allow it or write instead; writing still works.
- [ ] With 1 minute left, the closing reply stays written and is not spoken.
- [ ] Admin, System: set tutor_voice to Sulafat; within a minute the next reply speaks in Sulafat. Set it back to Orus.
- [ ] Admin, AI spend: Tutor listening and Tutor voice appear with their cost.

## AI tutor, part 4 (pronunciation; needs AZURE_SPEECH_KEY and AZURE_SPEECH_REGION in Vercel, steps in docs/AZURE_SPEECH_SETUP.md)
- [ ] Ask the tutor to practise pronunciation: a card "Say this sentence aloud" appears on the board with the sentence, "Say it" and "Hear it slowly".
- [ ] "Hear it slowly" plays the sentence slowly in the tutor's voice; a second tap replays it without asking the server again.
- [ ] "Say it", read the sentence, "Stop and send": the words are marked (green said well, coral said differently, faded missed), accuracy, fluency and completeness appear, and for English a sound such as /θ/ is named under a word said differently.
- [ ] Leave out a word on purpose: it shows faded and the tutor mentions it; the tutor sets the sentence again until the score is good, then moves on and the card goes.
- [ ] On a phone (iPhone Safari and Android Chrome), after allowing the microphone, the same works.
- [ ] Say nothing: "Nothing was heard" and no time is taken.
- [ ] Admin, AI spend: Tutor pronunciation scoring appears with its cost; Azure's portal shows the same audio time.

## AI tutor, part 7 A (the live call; admins only until app_settings tutor_live is all)
- [ ] Tutor page: the six tutors to pick from, "Talk with ..." follows the pick and is remembered after a reload (shared with Practice's speaking tutor).
- [ ] "Talk with Arthur": the browser asks for the microphone once, Arthur greets you by name within about two seconds, in Orus, his mouth moving with the voice.
- [ ] Talk naturally: answers come in about a second; talking over Arthur stops him; a grammar mistake is repeated back correctly; a mispronounced word is corrected now and then, not every time.
- [ ] Captions show both sides; Mute stops him hearing you ("Your microphone is off"); Unmute works.
- [ ] Each tutor speaks in its own voice (Lena Sulafat, Mei Kore, Sofia Aoede, Arthur Orus, Kofi Charon, Omar Puck).
- [ ] A call longer than 10 minutes carries on by itself (a new pass), without starting over.
- [ ] End the call: the summary and the words appear; the session is in Past sessions; the time left went down by about the call's length.
- [ ] Phone (iPhone Safari, Android Chrome): the same, with the screen on.
- [ ] Admin, AI spend: "Tutor live calls (estimate)" rows; compare with Google AI Studio's billing after a few calls.

## AI tutor, part 7 B and C (the board in the call, the lesson digest)
- [ ] Ask "how do you spell ...?": the word is written letter by letter on the board while the tutor says it.
- [ ] While explaining, the tutor writes a title, a line with bold words, a correction or a small table, and clears the board for a new point.
- [ ] "Test me": an exercise appears on the board; answer it; the tutor comments on your results by voice.
- [ ] With Azure on: "let's practise pronouncing a sentence": the card appears; "Hear it slowly" makes the tutor say it slowly; "Say it" records (the tutor does not answer meanwhile), the words are marked and the tutor helps with the sound that was off.
- [ ] A student with class notes published in the last two weeks: early in the call the tutor offers to go over that lesson (grammar focus, words, homework without doing it). The written tutor knows it too.
- [ ] Past sessions: the call's transcript shows the lines, the exercises set and the sentences to say.
- [ ] Stay silent: after about 1 minute 45 seconds "Are you still there?" appears; "I'm still here" keeps the call; 2 minutes of silence hang up with the end screen, and the time stops counting.

## AI tutor, part 6 (paid time; needs the two tutor prices in Stripe and STRIPE_PRICE_TUTOR_30 and STRIPE_PRICE_TUTOR_120 in Vercel)
- [ ] A student with time left: the Tutor page shows no offer to buy anything.
- [ ] A student with no time left (an admin can remove their minutes on the student's file): the Tutor page shows "Your tutor time is used up", when the plan's minutes come back (on a plan) or the plans with their monthly minutes (free plan), and the two packs with Stripe's prices.
- [ ] Buy the 30-minute pack with a real card: Stripe Checkout opens; after paying you are back on the Tutor with "Thank you for your purchase", then within a few seconds "We added 30 minutes to your tutor time", and the page shows them with the date they last until.
- [ ] Admin, the student's file: the ledger shows "Bought" with "30 minutes bought". Stripe, Developers, Webhooks: the event was answered 200; "Resend" it: the minutes are not added twice.
- [ ] Cancel on Stripe's page: back on the Tutor with "cancelled", nothing added.
- [ ] Run out of time during a written session and during a call: the end of the session shows the same offer.
