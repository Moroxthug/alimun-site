// German B1, for study and exams: a goal book next to the German B1 course book (docs/BOOKS.md).
// Draft: reviewed by a native teacher before it is published. Units are written in units/German-B1-academic/<unit>.js;
// until then each entry is planned, with the outline its writer works from. Explanations in English, translated in i18n/.
export const BOOK = {
  id: 'German-B1-academic',
  language: 'German',
  level: 'B1',
  track: 'goal',
  goal: 'academic',
  title: "German for study and exams",
  review: 'draft',
  units: [
    { id: 'u1', title: "Starting a course or university", planned: true, plan: { goal: "Enrol, choose courses and find your way around.", lessons: ["Enrolment and course words (Immatrikulation, Vorlesung, Seminar, Semester)", "Asking for information at an office or by email", "Reading: a welcome guide for new students"] } },
    { id: 'u2', title: "Lectures and notes", planned: true, plan: { goal: "Follow a talk and take useful notes.", lessons: ["Signposting language in talks (first, however, to sum up)", "Taking notes: key words and abbreviations", "Reading: the transcript of a short talk"] } },
    { id: 'u3', title: "Writing to teachers and offices", planned: true, plan: { goal: "Write polite, clear emails to teachers and offices.", lessons: ["Formal emails: asking for an extension or an appointment", "Polite requests and giving reasons", "Reading: emails between a student and a lecturer"] } },
    { id: 'u4', title: "Writing a clear text", planned: true, plan: { goal: "Write a structured paragraph and short essay.", lessons: ["Paragraph structure: topic sentence, support, conclusion", "Linking ideas (außerdem, trotzdem, deshalb)", "Reading: a model short essay"] } },
    { id: 'u5', title: "Reading longer texts", planned: true, plan: { goal: "Understand longer factual texts and find the main points.", lessons: ["Skimming and scanning; guessing words from context", "Main ideas and details; facts and opinions", "Reading: a magazine article about learning languages"] } },
    { id: 'u6', title: "Exam skills", planned: true, plan: { goal: "Get ready for a B1 exam: task types, timing and strategies. Practice in the format of exams like Goethe B1 and telc B1, never official material.", lessons: ["Reading and listening tasks: strategies for each type", "Writing a letter or email to a task; checking your work", "Speaking: planning together and giving opinions"] } },
  ],
};
