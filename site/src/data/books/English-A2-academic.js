// English A2, for study and exams: a goal book next to the English A2 course book (docs/BOOKS.md).
// Draft: reviewed by a native teacher before it is published. Units are written in units/English-A2-academic/<unit>.js;
// until then each entry is planned, with the outline its writer works from. Explanations in English, translated in i18n/.
export const BOOK = {
  id: 'English-A2-academic',
  language: 'English',
  level: 'A2',
  track: 'goal',
  goal: 'academic',
  title: "English for study and exams",
  review: 'draft',
  units: [
    { id: 'u1', title: "In the classroom", planned: true, plan: { goal: "Understand classroom language and talk about your course.", lessons: ["Classroom instructions and questions (Wie sagt man…? / How do you say…?)", "Subjects, timetables and course information", "Reading: a course timetable and a notice"] } },
    { id: 'u2', title: "Learning well", planned: true, plan: { goal: "Talk about how you learn and plan your study time.", lessons: ["Study habits and routines; adverbs of frequency", "Planning your week and setting goals", "Reading: study tips from other learners"] } },
    { id: 'u3', title: "Short texts", planned: true, plan: { goal: "Write short emails and messages to a teacher or course.", lessons: ["Writing a short email to a teacher: greeting, reason, ending", "Asking for information and replying", "Reading: messages between a learner and a language school"] } },
    { id: 'u4', title: "Reading for information", planned: true, plan: { goal: "Find information in notices, adverts and short articles.", lessons: ["Scanning for details: times, prices, places", "Understanding the main idea of a short text", "Reading: notices from a school board"] } },
    { id: 'u5', title: "Speaking about yourself", planned: true, plan: { goal: "Talk about yourself, your plans and your opinions in simple words.", lessons: ["Introducing yourself in a speaking test", "Giving simple reasons (weil / because) and opinions", "Reading: a model conversation from a speaking task"] } },
    { id: 'u6', title: "Exam skills", planned: true, plan: { goal: "Get ready for an A2 exam: task types and good habits. Practice in the format of exams like A2 Key, never official material.", lessons: ["Multiple-choice and matching tasks: reading the question first", "Writing a short message to a word limit", "Reading: a short exam-style text with questions"] } },
  ],
};
