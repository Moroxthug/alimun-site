// German B1, for work: a goal book next to the German B1 course book (docs/BOOKS.md).
// Draft: reviewed by a native teacher before it is published. Units are written in units/German-B1-professional/<unit>.js;
// until then each entry is planned, with the outline its writer works from. Explanations in English, translated in i18n/.
export const BOOK = {
  id: 'German-B1-professional',
  language: 'German',
  level: 'B1',
  track: 'goal',
  goal: 'professional',
  title: "German for work",
  review: 'draft',
  units: [
    { id: 'u1', title: "Business emails", planned: true, plan: { goal: "Write clear, polite work emails in the right register.", lessons: ["Opening and closing a formal email; Betreff; du or Sie at work", "Requests, reminders and confirmations with Konjunktiv II", "Reading: an email thread about a delivery"] } },
    { id: 'u2', title: "Calls and video meetings", planned: true, plan: { goal: "Lead and take part in calls and video meetings.", lessons: ["Phone phrases: connecting, asking someone to repeat, ending a call", "Video meetings: technical problems, taking turns", "Reading: minutes of a short meeting"] } },
    { id: 'u3', title: "Job interviews", planned: true, plan: { goal: "Prepare for a job interview and talk about your experience.", lessons: ["Talking about experience and strengths (Ich habe Erfahrung in…)", "Typical interview questions and good answers; asking questions yourself", "Reading: tips for an interview and a sample dialogue"] } },
    { id: 'u4', title: "Presenting your work", planned: true, plan: { goal: "Give a short, clear presentation at work.", lessons: ["Structuring a presentation (Zuerst…, Danach…, Zum Schluss…)", "Describing figures and trends in general words (steigen, sinken)", "Reading: a short project update"] } },
    { id: 'u5', title: "Small talk at work", planned: true, plan: { goal: "Make small talk with colleagues and know when to say du.", lessons: ["Small talk topics and phrases at the coffee machine", "du and Sie at work; offering du", "Reading: an article about workplace culture"] } },
    { id: 'u6', title: "Problems and solutions", planned: true, plan: { goal: "Talk about problems at work and agree on solutions.", lessons: ["Describing a problem and its cause (weil, deshalb)", "Suggesting and agreeing on solutions; complaints from customers", "Reading: a complaint email and the reply"] } },
  ],
};
