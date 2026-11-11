// Spanish A1, for study and exams: a goal book next to the Spanish A1 course book (docs/BOOKS.md).
// Draft: reviewed by a native teacher before it is published. Units are written in units/Spanish-A1-academic/<unit>.js;
// until then each entry is planned, with the outline its writer works from. Explanations in English, translated in i18n/.
export const BOOK = {
  id: 'Spanish-A1-academic',
  language: 'Spanish',
  level: 'A1',
  track: 'goal',
  goal: 'academic',
  title: "Spanish for study and exams",
  review: 'draft',
  units: [
    { id: 'u1', title: "In the classroom", planned: true, plan: { goal: "Understand classroom language and ask simple questions in class.", lessons: ["Instructions in class (lee, escucha, escribe; trabajad en parejas)", "Questions in class (¿Cómo se dice…? ¿Qué significa…? ¿Puedes repetir?)", "Reading: rules on the classroom door"] } },
    { id: 'u2', title: "Enrolling in a course", planned: true, plan: { goal: "Give your personal details, fill in a form and ask about a course.", lessons: ["Personal details: nombre, apellidos, nacionalidad, edad; spelling and numbers", "At the school office: quería información; ¿cuánto cuesta? ¿cuándo empieza?", "Reading: a course advert and an enrolment form"] } },
    { id: 'u3', title: "Timetable and school things", planned: true, plan: { goal: "Name the things you use in class, say where they are and talk about your timetable.", lessons: ["School things: el, la, un, una and plurals; hay and está", "The timetable: days, subjects and the time (a las nueve, de lunes a viernes)", "Reading: a student's timetable and a message about a change"] } },
    { id: 'u4', title: "Asking teachers and classmates", planned: true, plan: { goal: "Ask your classmates and your teacher for things, help and information.", lessons: ["Asking classmates: tú questions, ¿me dejas…? and question words", "Asking the teacher: usted or tú, perdone, ¿puede…?, homework and exam dates", "Reading: a class group chat and an email to a teacher"] } },
    { id: 'u5', title: "Learning strategies and notes", planned: true, plan: { goal: "Say how you learn, make good notes and plan your study.", lessons: ["How I learn: me gusta, siempre, a veces, nunca", "Notes and a vocabulary notebook: gender, plural, an example; ir a + infinitive for goals", "Reading: study tips from other learners"] } },
    { id: 'u6', title: "Exam skills", planned: true, plan: { goal: "Get ready for an A1 exam: task types and good habits. Practice in the format of exams like DELE A1, never official material.", lessons: ["Exam instructions and reading tasks: read the question first", "Filling in a form and writing a short message to a word limit", "Reading: a short exam-style text with questions"] } },
  ],
};
