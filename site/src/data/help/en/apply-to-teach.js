// Checked 2026-11-16 against: careers.html (Apply as teacher links to signup.html?role=teacher), signup.html (teacher form and account step),
// js/translations.js (au_teach_*, app_t_pending_*, app_iv_*, app_tr_*), js/app/teach.js (pendingView, ivHtml, trialHtml: join and change windows),
// docs/TEACHER_HIRING_PLAN.md (stages applied to approved), api/_lib/email-text/en.json (interview.*, trial.*, approved.*, rejected.*).
// Left out on purpose: the careers page's commission, earnings and acceptance-rate figures, and the signup page's "within 48 hours" (not confirmed elsewhere).
export default {
  slug: 'apply-to-teach',
  section: 'help',
  subject: 'teachers',
  audience: 'teacher',
  updated: '2026-11-16',
  status: 'draft',
  title: 'How do I apply to teach with Alimun, and what happens next?',
  summary: 'You apply from the Careers page, then Alimun reviews your application, invites you to a short video call and, after a good call, to a free 30-minute trial class before approving you.',
  body: [
    'Press “Apply as teacher” on the Careers page. The form asks for the language you teach, your years of teaching experience, your specialty and a short bio that your students will see. You then create your teacher account with your name, email address, a password and the country you live in, and confirm your email address from the message we send you. You use this account to follow your application and, once approved, to teach.',
    'While your application is being reviewed, your dashboard says “Your application is being reviewed”. We read every application ourselves. If we would like to meet you, we email you an invitation and your dashboard shows the free times for a video call with us of about 30 minutes, in your own time zone. Press a time, then press it again to confirm. You can change the time with “Change the time” until 12 hours before, and “Join the call” opens 10 minutes before it starts. The call is just you and us, and it is not recorded.',
    'After a good call, the next step is a free 30-minute trial class with a few of our learners, so you can show us how you teach. We email you the time, and your dashboard shows it with “Check in” (from an hour before, and at least 5 minutes before the start, please) and “Join the class” (from 15 minutes before). Someone from Alimun may join to watch, and the trial class is recorded so we can review it; only Alimun staff can see the recording.',
    'Once we have looked at how the trial went, we write to you with our decision. If you are approved, you get a “Welcome to Alimun” email and your full teacher dashboard opens. If we cannot approve your application, we tell you by email. You can add the times you are free to teach only after you are approved.',
  ],
  related: ['teacher-dashboard-at-a-glance', 'availability-classes-and-contracts', 'teacher-account-and-payouts'],
};
