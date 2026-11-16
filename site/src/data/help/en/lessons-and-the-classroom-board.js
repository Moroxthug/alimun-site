// Checked 2026-11-16 against: js/app/teach-lessons.js (Lessons section, lesson parts, sizes), js/app/teach-classes.js (lessonCard:
// "Lesson for this class", "Change the lesson", "Next in the course", "No prepared lesson"; boardCard after class; Board button),
// js/app/board.js (pages, templates, tools, who can write, "Everyone solves this", saving), docs/LESSONS_PLAN.md (steps L1 to L5, answers hidden
// until revealed), js/translations.js (app_tl_*, app_tc_lesson_*, app_bd_*).
// Not stated: which languages and levels have prepared lessons (the plan says the English course is written; other courses are not confirmed).
export default {
  slug: 'lessons-and-the-classroom-board',
  section: 'help',
  subject: 'teachers',
  audience: 'teacher',
  updated: '2026-11-16',
  status: 'approved',
  title: 'How do I use the prepared lessons and the board in class?',
  summary: 'Each class date gets the next lesson Alimun has prepared for the course, which you can open, change or skip, and in the classroom the “Board” button shows that lesson’s pages to your students as you teach.',
  body: [
    'Alimun prepares the class lessons for each course, and you find them under Lessons. Each lesson has what the class is for, tips, a timed plan, the board pages (which you can try here as your students will see them), activities for 1 on 1, for 2 to 6 students and for 7 to 15 students, and the homework. Use them as they are or adapt them. Lessons marked “Being written” are not ready yet.',
    'Every class date gets the next lesson of its course by itself. On the class date’s notes page, “Lesson for this class” shows it with “Open the lesson”. Under “Change the lesson” you can choose another lesson (the next classes then continue from there), “No prepared lesson” for that date, or “Next in the course” to go back to the usual order.',
    'In the classroom, press “Board” to show the board beside the video; everyone sees the page you show. You can add a blank page, an empty page (lined, squared, two columns, a word map, a timeline or a table), the words from the last class or another page from the course. The tools are pen, highlighter, text, eraser, colour, undo and “Clear the page”. Exercise answers stay hidden until you press “Show the answers”.',
    'Under “Who can write” you choose “Only me”, “Everyone” or one student. On an exercise page, “Everyone solves this” gives each student their own copy for the minutes you choose. They press “Show the teacher” when done, or their work comes to you when the time is up; you see who is working and who has sent, open anyone’s work, “Show to the class” if you like, and “End the exercise” to bring everyone back to the shared board.',
    'The board saves itself during the class. Afterwards, the class date’s notes page shows “The board from this class” with your students’ own work. Tick “Students see the board with the class notes” if you want them to see it too.',
  ],
  related: ['start-your-live-class', 'class-notes-after-class'],
};
