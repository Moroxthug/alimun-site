// Sources checked (internal, never shown): js/app/teach-classes.js (isOpen 15 before / 90 after, otoOpen 10 before / 15 after the end, join, app_tc_join_error with the server's reason), api/join-session.js (teacher check, cancelled, completed, too early, ended), api/generate-notes-pdf.js (published notes mark the session completed), js/app/teach.js (sample and pending modes), js/translations.js (app_t_start, app_tc_opens, app_tc_join_error, app_t_sample_*)
export default {
  slug: "cannot-start-session",
  lang: "en",
  kind: "problem",
  subject: "teaching",
  audience: "teacher",
  title: "I cannot start my class",
  summary: "A guided check for teachers when Start the class is missing or the classroom does not open: the time window, the browser, the camera and the microphone.",
  words: ["cannot start class", "start button missing", "classroom not opening", "classroom did not open", "camera not working", "microphone not working", "teacher video", "join session"],
  updated: "2026-11-12",
  body: [
    { p: "If your class is about to start, go through this quickly. If anything still does not work, ask for a person at the end." }
  ],
  check: {
    start: "when",
    steps: {
      when: { auto: "next_session", ask: "Does your class start within the next 15 minutes, or did it start less than 90 minutes ago?", yes: "browser", no: "fix-early" },
      "fix-early": { fix: "Start the class appears 15 minutes before the class and stays until 90 minutes after its start; until then the Classes page shows a countdown. A 1:1 opens 10 minutes before and closes 15 minutes after it ends. Once you have published a class's notes, that class counts as done and its classroom closes. Check the date and time in your Calendar, in the time zone of this device.", next: "when" },
      browser: { auto: "browser", ask: "Are you using a recent version of Chrome, Edge, Firefox or Safari, signed in with your own teacher account rather than the sample?", yes: "opens", no: "fix-browser" },
      "fix-browser": { fix: "Update your browser or open the dashboard in another one. If the page says This is a sample teacher, press Show my classes or sign in again with your teacher account. Close other tabs that use the camera, then reload the Classes page.", next: "browser" },
      opens: { ask: "When you press Start the class, does the classroom open with the video?", yes: "camera", no: "handover" },
      camera: { auto: "camera", ask: "Can you see yourself in the video?", yes: "mic", no: "fix-camera" },
      "fix-camera": { fix: "Allow the camera for alimun.com: use the camera or lock icon in the address bar, choose Allow, then reload the page. Close other apps that may be using the camera, such as Zoom or Teams. On a computer, check that the camera is not covered or switched off, and choose the right one in the video's settings.", next: "camera" },
      mic: { auto: "mic", ask: "When you speak, does the microphone show that it hears you?", yes: "done", no: "fix-mic" },
      "fix-mic": { fix: "Make sure you are not muted in the video. Allow the microphone for alimun.com from the address bar and reload. Choose the right microphone in the video's settings, and check that your computer's sound settings let the browser use it.", next: "mic" },
      handover: { fix: "If a message appeared under The classroom did not open, note what it says, for example that the session was cancelled. Then tell us which class it is and when it starts, so a person can look at it straight away.", handover: true },
      done: { solved: "Good, your students can see and hear you. Enjoy the class." }
    }
  },
  related: ["teaching-your-first-class", "teacher-classes-and-schedule", "one-on-one-sessions"],
  missing: [
    "The list of browsers Daily.co supports is not in the repo; the check names recent Chrome, Edge, Firefox and Safari, as the tutor page does.",
    "Urgent handling of a teacher who cannot start a session is planned in docs/HELP_PLAN.md section 5 but not built yet; the intro says it is treated as urgent, which is true only once Part 3 exists. Remove that sentence if Part 3 is not live when this is published."
  ]
};
