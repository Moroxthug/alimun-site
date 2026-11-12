// Sources checked (internal, never shown): js/app/reader.js (header, progress, explanation switch, PASS = 70),
// js/app/shell.js (ROUTES, nav labels), js/app/settings.js (course and level), js/app/classes.js and shell.js (app_lesson_go),
// js/translations.js app_book_*, app_nav_*, app_st_course_p, app_lesson_go; docs/DASHBOARD_PLAN.md step 4.
export default {
  slug: 'using-the-book',
  lang: 'en',
  kind: 'guide',
  subject: 'learning',
  audience: 'student',
  title: 'Using your course book',
  summary: 'How the Course book works: units, lessons that open page by page, explanations in your language, the unit test and where your progress is kept.',
  words: ['course book', 'book', 'units', 'lessons', 'unit test', 'next page locked', 'continue where I left off', 'learn tab', 'explanations', 'pass mark'],
  updated: '2026-11-12',
  body: [
    { h: 'Finding your book' },
    { p: 'Open **Course book** in the menu (on a phone it is **Learn** in the bar at the bottom). Your book matches the language and level you chose in **Settings**, so changing the language or level there changes your book, your practice and your library.' },
    { p: 'The first time, the page offers **Start**; after that it shows **Pick up where you left off** with the next lesson and a **Continue** button. Below it you see every unit with its state: Not started, In progress or Finished. Units marked **Being written** open as soon as they are ready. Some courses also show **A second book for your goal**, with real situations for what you want to do with the language, alongside your course book.' },
    { shot: '#/book', alt: 'The Course book page with the Continue button and the list of units' },
    { h: 'Lessons and pages' },
    { p: 'Each unit is made of lessons, and each lesson is a few full-screen pages that you turn like a book. A page first teaches, then checks that you got it with exercises. The next page opens once the exercises on the page you are on are done, so if the next page will not open, look for an exercise you have not finished yet.' },
    { p: 'Press **Check** to see if an answer is right. If it is not quite right you can have another go, or press **Show the answer**. Where a lesson has recordings you will see **Listen** and **Slower**, or a play button beside a sentence. When the last page is done, press **Finish the lesson** and the next lesson opens.' },
    { h: 'Explanations in your language' },
    { p: 'Explanations are written in your own language, while example sentences, exercises and texts are in the language you are learning. The **Explanations** switch at the top of the book, a unit or a lesson lets you read the explanations in the language you are learning instead. That choice is remembered in this browser.' },
    { h: 'The unit test' },
    { p: 'Every unit ends with a **Unit test** with questions on the whole unit. Nothing is marked until you press **Check my test**, and then you see the answers. The page tells you the score you need to pass. If you pass, the unit is finished and the next unit opens; if not, go back over the lessons and press **Take it again**. Your best score is always kept.' },
    { h: 'Where your progress is kept' },
    { p: 'When you are signed in, every finished lesson and your best unit test scores are saved to your account, so you can carry on from another phone or computer. Each book keeps its own progress. What you get wrong in lessons and tests also comes back later in your practice rounds.' },
    { p: 'After a live class, once your teacher has published the notes, you can also choose **Go over it with your tutor** to revise that lesson with the AI tutor.' }
  ],
  related: ['practice-and-mistake-memory', 'change-explanation-language', 'track-progress', 'progress-not-saved', 'sound-does-not-play-in-lesson'],
  missing: [
    'Whether progress in the old book is still shown if the student changes level and later changes back (progress is saved per book in the code, but this was not tested).',
    'The unit test pass mark is shown on the page (70% in js/app/reader.js); left out of the text in case it changes.'
  ]
};
