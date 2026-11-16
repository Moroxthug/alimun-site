// Checked 2026-11-16 against: js/app/teach-homework.js (set, change, delete, markView, drafted, sendMark, fbText), api/ai.js
// (action=grade-submission: AI model drafts score 0-100, summary, strengths, improvements, one corrected sentence; teacher or admin only;
// action=draft-homework), js/app/teach-material.js (sets, draft-set, Try it, send as practice or homework), js/translations.js (app_th_*, app_tm2_*).
// Grade drafts and task and exercise drafts are made by an AI model (callAI in api/ai.js), so they are called AI here, as CLAUDE.md allows.
export default {
  slug: 'set-and-mark-homework',
  section: 'help',
  subject: 'teachers',
  audience: 'teacher',
  updated: '2026-11-16',
  status: 'draft',
  title: 'How do I set and mark homework?',
  summary: 'Set homework under Homework with “Set homework”, then mark each piece yourself: you can ask for an AI-drafted mark and feedback, but nothing reaches the student until you have checked it and pressed “Send to the student”.',
  body: [
    'Under Homework, press “Set homework” and choose a class or one student. It can be a task to write or say, a course book lesson, a library piece or a mock test paper. For a task you give a type, a title, the task itself and, if you like, a minimum number of words; “Draft a task for me” uses AI to write a task from a topic, in the language and at the level of your students, and fills the form for you to change. Students see the homework in their dashboard straight away. A book lesson, library piece or mock paper is marked by itself, with the score of the student’s answers.',
    'Homework handed in waits on Homework, oldest first. Open a piece with “Mark” to see the task and the student’s answer, or, for spoken homework, what the student said. You can mark it entirely yourself: give a mark out of 100 (students see it as a percentage) and write your feedback.',
    'If you want help, press “Draft the feedback”. An AI model reads the task and the student’s work and suggests a mark with feedback: an overall view, what went well, what to work on next and one corrected sentence. It fills the form only. Read it, change the mark and the words as you see fit, and press “Send to the student”; until then nothing is sent. You can change a mark later and press “Send the changes”. “Next to mark” takes you to the next piece.',
    'On a piece of homework you have set, you see who has handed it in, who is late and who has not yet, and you can change it with “Save the changes”. You can delete it only while nobody has handed it in.',
    'Under Material you can make your own exercise sets for a class or one student, write the exercises yourself or have AI draft three at a time from a topic, a text or your students’ mistakes, check them with “Try it”, and send them. A set you send appears in the student’s Practice, and you can also set it as homework, marked by itself from their score. Your sets stay private to you until you send them.',
  ],
  related: ['class-notes-after-class', 'students-and-messages', 'teacher-dashboard-at-a-glance'],
};
