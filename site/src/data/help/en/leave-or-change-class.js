// Sources checked (internal, never shown): js/app/find.js (Your class card: Switch class, Leave the class, app_fd_leave_q
// "Your plan does not change"), api/enroll.js (action leave cancels active enrolments; rooms refused with
// "Choose this room from Plans and prices"), js/app/settings.js (Manage billing, app_st_manage_p), js/app/plans.js
// (Change your plan), Terms (cancellation stops the next renewal, access to the end of the paid period, withdrawal),
// js/app/withdraw.js, api/_lib/email-text/en.json (room_merged reply to cancel).
export default {
  slug: 'leave-or-change-class',
  lang: 'en',
  kind: 'answer',
  subject: 'classes',
  audience: 'student',
  title: 'Can I leave my class or move to another one?',
  summary: 'You can leave your class from the Classes page, but your plan and its payments do not change; cancelling is done with Manage billing in Settings, and to move to another room write to us.',
  words: ['leave class', 'change class', 'switch class', 'move class', 'different time', 'different group', 'quit class', 'cancel class', 'stop classes', 'change teacher'],
  updated: '2026-11-12',
  body: [
    { p: 'At the bottom of **Classes**, the **Your class** card has **Leave the class**. After you confirm with **Yes, leave**, your place goes to someone else. Leaving does not change your plan, and it does not stop any payments.' },
    { p: 'To stop paying, open **Settings** and press **Manage billing**, where you can change your card, see your invoices, change plan or cancel. Cancelling stops the next renewal and you keep access until the end of the period you already paid for. If you live in the EU, you can also withdraw from a purchase within 14 days using **Withdraw from contract here** in Settings.' },
    { p: 'Rooms are chosen when you buy, in **Plans and prices**, so you cannot move yourself to another room from the Classes page. If your room’s days or time no longer suit you, write to us from the Contact page and say which room you would like instead.' },
    { p: 'If we join your reserved pack room with another one and the new time does not suit you, reply to that email before the first day and we cancel your reservation.' }
  ],
  related: ['cancel-plan', 'rooms-and-start-dates', 'class-size-and-level', 'message-your-teacher'],
  missing: [
    'Switch class (#/classes/find) still opens the old class finder, which lists only old-tier classes and refuses rooms; it is not described here. The owner may want to hide Switch class for room learners.',
    'Whether a pack can be cancelled part way: packs are a 3-payment subscription schedule or an upfront payment; the spec says monthly payers can cancel future months from the billing portal, but this was not confirmed in the portal configuration, so the answer only repeats the Terms.',
    'Whether staff can move a learner between rooms (Admin → Classes → Rooms) and on what terms; the answer only says to write to us, with no promise.',
    'Whether a learner who leaves a room can rejoin it later is not handled in the code.'
  ]
};
