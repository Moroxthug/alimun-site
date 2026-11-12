// Sources checked (internal, never shown): js/app/classes.js (loader, errorView with "Try again", liveView "Opening the
// classroom…", loadDaily() from unpkg.com, join() errors: app_cl_join_error, app_cl_sample_join), api/join-session.js
// (502 "Could not create the video room. Please try again."), app_cl_* / app_book_error / app_retry keys.
export default {
  slug: 'class-page-blank-or-stuck',
  lang: 'en',
  kind: 'problem',
  subject: 'classes',
  audience: 'student',
  title: 'The class page is blank or stuck loading',
  summary: 'A guided check for when Classes does not load, or the classroom stays on "Opening the classroom…" without the video.',
  words: ['blank page', 'white page', 'stuck loading', 'opening the classroom', 'spinning', 'page not loading', 'classroom frozen', 'video not loading', 'could not open'],
  updated: '2026-11-12',
  body: [
    { p: 'Answer one question at a time. The page checks your browser and connection where it can.' }
  ],
  check: {
    start: 'where',
    steps: {
      where: { ask: 'Is it the classroom (after you pressed **Join**) that does not open?', yes: 'sample', no: 'list' },
      list: { ask: 'Does the Classes page show a message with a **Try again** button?', yes: 'fix-retry', no: 'connection' },
      'fix-retry': { fix: 'Press **Try again**. If the page still does not load, reload it in your browser, or sign out and sign in again.', next: 'better' },
      sample: { ask: 'Does the classroom say it is the preview with sample classes?', yes: 'fix-sample', no: 'message' },
      'fix-sample': { fix: 'You are looking at the sample dashboard, which never opens a real classroom. Sign in to your own account and open **Classes** again.', next: 'better' },
      message: { ask: 'Does it say **The classroom could not open** or **Could not create the video room**?', yes: 'fix-again', no: 'connection' },
      'fix-again': { fix: 'Wait a moment and press **Join** again. If your class has not started yet, come back closer to the start: the classroom opens 15 minutes before it.', next: 'better' },
      connection: { auto: 'connection', ask: 'Is your internet connection working well?', yes: 'browser', no: 'fix-connection' },
      'fix-connection': { fix: 'Move closer to your router or switch to another network, then reload the page.', next: 'better' },
      browser: { auto: 'browser', ask: 'Is your browser up to date, with no extension that blocks content on this page?', yes: 'person', no: 'fix-browser' },
      'fix-browser': { fix: 'Update your browser and turn off ad or content blockers for alimun.com, as they can stop the video from loading. Or try another up-to-date browser. A work or school network may also block video calls; try another network if you can.', next: 'better' },
      better: { ask: 'Does the page work now?', yes: 'done', no: 'connection' },
      person: { fix: 'The page should load with your browser and connection. A person will help.', handover: true },
      done: { solved: 'Glad it works now. See you in class.' }
    }
  },
  related: ['cannot-join-class', 'join-live-class', 'no-sound-in-class'],
  missing: [
    'The Classes error view reuses the course book text "The book did not load. Check your connection and try again." (app_book_error); the check avoids quoting it. Flag to the owner: Classes should have its own error text.',
    'Messages from /api/join-session (for example "Could not create the video room. Please try again.") are shown in English in every language.',
    'That content blockers or company networks block the video service is general knowledge (the video script loads from unpkg.com and Daily\'s domain), not tested here.'
  ]
};
