// Sources checked (internal, never shown): js/app/classes.js (joinable(), Join greyed out before the window,
// app_cl_join_when, app_cl_join_error, server message shown in the classroom), api/join-session.js (403 "You are not
// enrolled in this class", 402 "Your subscription is not active...", 425 too early, 410 ended, 400 cancelled or ended,
// 502 video room errors), api/_lib/plan.js, js/app/settings.js (Manage billing), Terms (access paused when a payment fails).
export default {
  slug: 'cannot-join-class',
  lang: 'en',
  kind: 'problem',
  subject: 'classes',
  audience: 'student',
  title: 'I cannot join my class',
  summary: 'A guided check for when the Join button stays grey, or the classroom shows a message instead of the video.',
  words: ['cannot join', 'can\'t join', 'join not working', 'join button grey', 'join disabled', 'classroom not opening', 'not enrolled', 'subscription not active', 'class link not working', 'locked out of class'],
  updated: '2026-11-12',
  body: [
    { p: 'Answer one question at a time. Where your browser or your account can be checked for you, the page does it first.' }
  ],
  check: {
    start: 'next',
    steps: {
      next: { auto: 'next_session', ask: 'Does the Classes page show your class at the top with a lime **Join** button you can press?', yes: 'opens', no: 'window' },
      window: { ask: 'Does your class start within the next 15 minutes, or did it start less than 90 minutes ago?', yes: 'refresh', no: 'fix-window' },
      'fix-window': { fix: 'The **Join** button switches on 15 minutes before the start and stays on until 90 minutes after it; before that it is grey. Check the time on Classes, which is shown in the time zone saved in **Settings**. If the time looks wrong, choose your **Time zone** in Settings and press **Save changes**.', next: 'next' },
      refresh: { fix: 'The page checks the clock every half minute. Reload the page to update it straight away.', next: 'next' },
      opens: { ask: 'When you press **Join**, does the classroom open with the video?', yes: 'done', no: 'enrolled' },
      enrolled: { auto: 'seat', ask: 'Does the classroom say **You are not enrolled in this class**?', yes: 'fix-enrolled', no: 'payment' },
      'fix-enrolled': { fix: 'You can only join a class you are in, or the one date a trial or help class was bought for. Check in **Classes** that this is your own class and date. If it is and you still see this message, a person will look at your account.', handover: true },
      payment: { auto: 'payment', ask: 'Does it say **Your subscription is not active**?', yes: 'fix-payment', no: 'browser' },
      'fix-payment': { fix: 'Access to live classes is paused when a payment has not gone through. Open **Settings**, press **Manage billing** and update your card or pay the open invoice. When the payment is confirmed, try **Join** again.', next: 'opens' },
      browser: { auto: 'browser', ask: 'Is your browser up to date?', yes: 'connection', no: 'fix-browser' },
      'fix-browser': { fix: 'Update your browser, or open the class in another up-to-date browser, then sign in and press **Join** again.', next: 'opens' },
      connection: { auto: 'connection', ask: 'Is your internet connection working well?', yes: 'person', no: 'fix-connection' },
      'fix-connection': { fix: 'Move closer to your router or switch to another network, close other apps that use a lot of internet, then reload the page and press **Join** again.', next: 'opens' },
      person: { fix: 'Something else is stopping the classroom from opening. Note the message you see, if any, and a person will help.', handover: true },
      done: { solved: 'Glad you are in. Enjoy your class.' }
    }
  },
  related: ['payment-failed', 'join-live-class', 'class-page-blank-or-stuck', 'camera-or-microphone-in-class', 'class-schedule-and-time-zone'],
  missing: [
    'The classroom shows the server\'s raw English message (for example "You are not enrolled in this class") in every dashboard language; the check quotes the English text. The owner may want these messages translated.',
    'Trial and help-class pass holders may not see their class on Classes at all (classes load from enrolments only); the first step assumes they do. Needs confirming.',
    'A class the teacher has already ended (status completed) refuses joining with "This session has already ended" even inside the 90 minutes; not covered as its own step.',
    'Lime colour of the Join button is from the CSS class btn--lime; mention can be removed if the design changes.'
  ]
};
