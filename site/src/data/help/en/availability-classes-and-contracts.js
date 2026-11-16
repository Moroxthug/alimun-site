// Checked 2026-11-16 against: js/app/teach-classes.js (availView, newView: twelve weeks, 60-minute class inside availability, four open classes at most;
// contractsHtml and room availability "When you can teach"), api/pricing.js (contract offers emailed, answered from #/classes),
// api/_lib/email-text/en.json (contract_offer.*, room_not_opening.*, student_joined.*), js/translations.js (app_tc_*, app_tk_*, app_t_next_noclass_p).
// Not stated: plan sizes in the Create a class form (they belong to the older price list and may change), how rooms are chosen for a teacher.
export default {
  slug: 'availability-classes-and-contracts',
  section: 'help',
  subject: 'teachers',
  audience: 'teacher',
  updated: '2026-11-16',
  status: 'draft',
  title: 'How do I set my availability and get classes?',
  summary: 'Add the times you are free each week under Classes, “Your availability”; you can then create a class inside those times, and rooms that fit what you can teach come to you as course contracts you may accept or decline.',
  body: [
    'On Classes, press “Your availability” to see your week. Under “Add free time”, choose the days (“Monday to Friday” and “Every day” are shortcuts), a start and an end, and press “Add”; “Add another time” adds a second block. Times are in the time zone of the device you use. Remove a block with “Remove”.',
    'With your availability set, “Create a class” plans twelve weeks of classes for you. You choose the language, level, goal and plan, then the days, and the times offered are only those where a 60-minute class fits your free time in every one of the next twelve weeks. You can add a description that students see when they choose a class. You can have up to four open classes at a time. When a student joins one of your classes, you get an email with their name, level and goal.',
    'Also on “Your availability”, “When you can teach” tells Alimun from when, at what time, in which language and at which levels you can teach, which kinds of classes (level packs, exam packs, open classes, help classes), and whether you can stand in as a substitute. Rooms are suggested from this and from the learners who are waiting.',
    'Each room then comes to you as a separate course contract, shown on Classes under “Course contracts” and sent to you by email. The offer is made 10 days before the start if enough learners join, and gives the start date, days, time and number of learners, for 12 weeks. Press “Accept” or “Decline”; declining has no effect on the offers you get later. If a room does not get enough learners, we email you that it will not open.',
  ],
  related: ['class-time-changed-or-cancelled', 'start-your-live-class', 'teacher-dashboard-at-a-glance'],
};
