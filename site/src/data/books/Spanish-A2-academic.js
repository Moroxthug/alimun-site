// Spanish A2, for study and exams: a goal book next to the Spanish A2 course book (docs/BOOKS.md).
// Draft: reviewed by a native teacher before it is published. Units are written in units/Spanish-A2-academic/<unit>.js;
// until then each entry is planned, with the outline its writer works from. Explanations in English, translated in i18n/.
export const BOOK = {
  id: 'Spanish-A2-academic',
  language: 'Spanish',
  level: 'A2',
  track: 'goal',
  goal: 'academic',
  title: "Spanish for study and exams",
  review: 'draft',
  units: [
    { id: 'u1', title: "In the classroom", planned: true, plan: { goal: "Understand classroom language and talk about your course.", lessons: ["Classroom instructions and questions (leed, escuchad; ¿Cómo se dice…? ¿Qué significa…?)", "Subjects, timetables and course information (el lunes, a las nueve, de… a…)", "Reading: a course timetable and a notice"] } },
    { id: 'u2', title: "Learning well", planned: true, plan: { goal: "Talk about how you learn and plan your study time.", lessons: ["Study habits and routines; frequency words (siempre, a menudo, a veces, casi nunca)", "Planning your week and setting goals (querer, tener que, hay que, ir a + infinitive)", "Reading: study tips from other learners"] } },
    { id: 'u3', title: "Short texts", planned: true, plan: { goal: "Write short emails and messages to a teacher or a school.", lessons: ["Writing a short email to a teacher: greeting, reason (porque, por eso), ending", "Asking for information politely (quería, me gustaría saber si…, ¿podría…?) and replying", "Reading: messages between a learner and a language school"] } },
    { id: 'u4', title: "Reading for information", planned: true, plan: { goal: "Find information in notices, adverts and short articles.", lessons: ["Scanning for details: times, prices, places and abbreviations", "Understanding the main idea of a short text", "Reading: notices on a school board"] } },
    { id: 'u5', title: "Speaking about yourself", planned: true, plan: { goal: "Talk about yourself, your plans and your opinions in simple words.", lessons: ["Introducing yourself in a speaking test (desde hace, llevo + time)", "Giving simple reasons (porque, es que) and opinions (creo que, me parece, para mí)", "Reading: a model conversation from a speaking task"] } },
    { id: 'u6', title: "Exam skills", planned: true, plan: { goal: "Get ready for an A2 exam: task types and good habits. Practice in the format of exams like DELE A2, never official material.", lessons: ["Multiple-choice and matching tasks: reading the question first", "Writing a short message to a word limit", "Reading: a short exam-style text with questions"] } },
  ],
};
