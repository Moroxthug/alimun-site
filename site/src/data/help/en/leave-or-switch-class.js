// Checked 2026-11-16 against: js/app/find.js and js/translations.js (Your class card: Switch class, Leave the class,
// app_fd_leave_q "Your place goes to someone waiting. Your plan does not change.", app_fd_switch_note, app_fd_full_p
// waiting list kept 48 hours, app_fd_need_plan), api/enroll.js (leave, switch, plan and language checks; rooms are bought,
// not joined there), js/app/settings.js (Manage billing: app_st_manage_p), Terms section 6 (cancel any time, access to
// the end of the paid period). Not confirmed: how a learner moves an already assigned pack room, so that goes to a person.
export default {
  slug: 'leave-or-switch-class',
  section: 'help',
  subject: 'classes',
  audience: 'student',
  updated: '2026-11-16',
  status: 'draft',
  title: 'How do I change class or leave my class?',
  summary: 'Use Switch class or Leave the class on the Your class card in Classes; leaving gives your place to someone waiting and does not change your plan.',
  body: [
    'On your Classes page, the Your class card shows your class and teacher, with two buttons: Switch class and Leave the class.',
    'Switch class opens Find a class, which lists the classes in your language that are taking students, with their days, time and teacher. Choose one and press Switch to this class. You leave your current class, and your place there goes to someone waiting. A class can only be joined if your plan includes it and it teaches the language set in your Settings. If a class is full, you can join its waiting list: when a place opens we email you, and the place is kept for you for 48 hours.',
    'Leave the class asks you to confirm first. Your place goes to someone waiting, and your plan does not change, so leaving a class does not stop your payments. To change your plan or cancel it, use Manage billing in Settings. When you cancel, the next renewal stops and you keep access until the end of the period you have already paid for.',
    'Rooms of the level, intensive and exam packs and of open classes are chosen in Plans and prices, not in Find a class. If you are in one of these rooms and want to move to another, write to us from Support in your dashboard, or email support@alimun.com.',
  ],
  related: ['how-rooms-start', 'cancel-your-plan', 'class-times-and-time-zones'],
};
