// Sources checked (internal, never shown): js/app/classes.js (join window 15 min before to 90 min after, Add to my
// calendar, Class notes, Class words, tutor lesson review), js/app/classroom.js (Leave the class link, Chat and Words tabs,
// join and leave notices), api/join-session.js (Daily room, attendance, enable_recording false), js/app/board.js,
// app_cl_* / app_cr_* / app_bd_* keys in js/translations.js, Terms (recording ban, no recording by Alimun, links personal).
export default {
  slug: 'your-first-live-class',
  lang: 'en',
  kind: 'guide',
  subject: 'classes',
  audience: 'student',
  title: 'Your first live class: before, during and after',
  summary: 'What to prepare before your first live class, how the classroom works while you are in it, and where to find the notes, words and homework afterwards.',
  words: ['first class', 'live class', 'how do classes work', 'classroom', 'video class', 'what to expect', 'prepare for class', 'board', 'class chat'],
  updated: '2026-11-12',
  body: [
    { h: 'Before the class' },
    { p: 'Open **Classes** to see the day and time of your next class, shown in the time zone saved in **Settings**. **Add to my calendar** downloads your upcoming classes as a calendar file you can open in your own calendar app.' },
    { p: 'Use a computer, tablet or phone with a camera, a microphone and an up-to-date browser, and find a quiet place with a steady internet connection. Headphones help you hear the teacher clearly and stop an echo.' },
    { shot: '#/classes', alt: 'The Classes page with the next class and the Join button' },
    { h: 'Joining' },
    { p: 'The **Join** button on Classes, and **Join class** on Home, switch on 15 minutes before the start and stay on until 90 minutes after it. Press it and the classroom opens inside your dashboard. Your browser may ask to use your camera and microphone: allow it, or the others cannot see or hear you.' },
    { p: 'Your class link is personal. Do not share it or let anyone else join in your place.' },
    { h: 'During the class' },
    { p: 'The video with your teacher and the group is in the middle. When your teacher opens the board, it appears beside the video with the lesson’s pages; sometimes the teacher asks everyone to solve an exercise on it. You can make the video bigger or smaller with the button on the video.' },
    { p: 'The side panel has **Chat**, the class conversation that your teacher and classmates can read, and **Words**, the words from your last class. On a phone the panel opens from the **Chat** button. A short notice appears when someone joins, leaves or writes in the chat.' },
    { p: 'Alimun does not record live classes, and you must not record, photograph or screenshot a class, your teacher or other learners without everyone’s consent. To leave, use **Leave the class** at the top of the page or the leave button in the video.' },
    { h: 'After the class' },
    { p: 'Your teacher’s notes appear under **Class notes** in Classes: what you did in class, the homework and its due date, the words, and sometimes a PDF and the board from the class. We also email you when the notes are ready. The words go into your **Flashcards** by themselves, so you can review them there.' },
    { p: 'Until your next class you can go over the lesson with the tutor, an AI that recaps the grammar, practises the words and helps you prepare the homework. Look for the tutor button inside the latest notes.' }
  ],
  related: ['join-live-class', 'camera-or-microphone-in-class', 'missed-a-class', 'message-your-teacher', 'cannot-join-class'],
  missing: [
    'Recommended browsers and devices: the code loads Daily Prebuilt but Alimun has no list of supported browsers; the guide only says "an up-to-date browser".',
    'Whether the camera is on when you enter: the class room is created with start_video_off false, but the guide does not promise it.',
    'Whether the student can write on the board outside "everyone solves this" exercises was not confirmed in js/app/board.js and is left out.',
    'Exact label of the button that makes the video bigger or smaller (app_cr_bigger / app_cr_smaller are aria labels on an icon), so it is described rather than named.',
    'Who gets the "notes ready" email (all class members or only attendees) was not checked in the sender.'
  ]
};
