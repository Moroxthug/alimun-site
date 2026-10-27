// Spanish B1, for study and exams: a goal book next to the Spanish B1 course book (docs/BOOKS.md).
// Draft: reviewed by a native teacher before it is published. Units are written in units/Spanish-B1-academic/<unit>.js;
// until then each entry is planned, with the outline its writer works from. Explanations in English, translated in i18n/.
export const BOOK = {
  id: 'Spanish-B1-academic',
  language: 'Spanish',
  level: 'B1',
  track: 'goal',
  goal: 'academic',
  title: "Spanish for study and exams",
  review: 'draft',
  units: [
    { id: 'u1', title: "Starting a course or university", planned: true, plan: { goal: "Enrol, choose courses and find your way around.", lessons: ["Enrolment and course words (matrícula, asignatura, créditos, cuatrimestre, tutoría)", "Asking for information at an office or by email", "Reading: a welcome guide for new students"] } },
    { id: 'u2', title: "Lectures and notes", planned: true, plan: { goal: "Follow a talk and take useful notes.", lessons: ["Signposting language in talks (en primer lugar, sin embargo, en resumen)", "Taking notes: key words and abbreviations", "Reading: the transcript of a short talk"] } },
    { id: 'u3', title: "Writing to teachers and offices", planned: true, plan: { goal: "Write polite, clear emails to teachers and offices.", lessons: ["Formal emails: asking for an extension or an appointment", "Polite requests and giving reasons (¿podría…?, me gustaría, ya que, como)", "Reading: emails between a student and a lecturer"] } },
    { id: 'u4', title: "Writing a clear text", planned: true, plan: { goal: "Write a structured paragraph and short essay.", lessons: ["Paragraph structure: topic sentence, support, conclusion", "Linking ideas (además, sin embargo, por eso, aunque)", "Reading: a model short essay"] } },
    { id: 'u5', title: "Reading longer texts", planned: true, plan: { goal: "Understand longer factual texts and find the main points.", lessons: ["Skimming and scanning; guessing words from context", "Main ideas and details; facts and opinions", "Reading: a magazine article about learning languages"] } },
    { id: 'u6', title: "Exam skills", planned: true, plan: { goal: "Get ready for a B1 exam: task types, timing and strategies. Practice in the format of exams like DELE B1 and SIELE, never official material.", lessons: ["Reading and listening tasks: strategies for each type", "Writing an email or a short text to a task; checking your work", "Speaking: talking about a photo, giving opinions and reacting"] } },
  ],
};
