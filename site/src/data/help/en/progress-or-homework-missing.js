// Checked 2026-11-16 against: js/app/shell.js (sampleNote: "Your data could not be loaded" with Try again; needsNet), js/app/homework.js (drafts kept in this browser per account; course material homework recorded when Homework opens; offline hand-in), js/app/tests.js (answers in progress kept in this browser until the paper is finished), js/app/practice.js, js/app/reader.js and js/app/library.js (signed out: this browser only), js/app/data.js (homework read for the student's classes; offline outbox sent when back online), js/app/progress.js (not enough answers yet), js/translations.js (app_sample_*, app_hw_*, app_pg_*).
export default {
  slug: 'progress-or-homework-missing',
  section: 'support',
  subject: 'dashboard',
  audience: 'student',
  updated: '2026-11-16',
  status: 'approved',
  title: 'My progress or my homework is missing. What can I do?',
  summary: 'Check that you are signed in and online, and open Alimun on the device where you did the work: drafts, unfinished mock papers and anything done offline wait there until they are sent.',
  body: [
    'First make sure you are signed in to the account you used. If Home says Your data could not be loaded, so Home shows sample data for now, your own data did not arrive: check your connection and press Try again. Progress needs a connection to load.',
    'Some things stay on the device where you did them until they are sent. A homework draft you have not handed in yet and the answers of a mock test paper you have not finished are kept in that browser, so open them on the same device. Answers and homework given while offline are sent when that device is back online, so open Alimun there with a connection. Without an account, your progress is kept in that browser only.',
    'Homework appears for the classes you are in. Homework that is a course book lesson, a library piece or a mock test paper counts as handed in once you finish it; open Homework again and it is recorded.',
    'In Progress, a skill says not enough answers yet until enough of your answers have been counted, so a new skill can look empty at first.',
    'If something is still missing, write to us from Support in your dashboard, or email support@alimun.com, and tell us what is missing and on which device you did it.',
  ],
  related: ['hand-in-homework', 'track-your-progress', 'app-not-loading-or-offline'],
};
