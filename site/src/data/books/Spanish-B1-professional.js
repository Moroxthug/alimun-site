// Spanish B1 for work: a goal book next to the Spanish B1 course book (docs/BOOKS.md).
// Draft: reviewed by a native teacher before it is published. Explanations in English, translated in i18n/.
// Units are written in units/Spanish-B1-professional/<unit>.js. The Spanish of Spain, with Latin American usage pointed out.
export const BOOK = {
  id: 'Spanish-B1-professional',
  language: 'Spanish',
  level: 'B1',
  track: 'goal',
  goal: 'professional',
  title: 'Spanish for work',
  review: 'draft',
  units: [
    { id: 'u1', title: "Work emails", planned: true, plan: { goal: "Write clear, polite work emails in the right register.", lessons: ["Opening and closing an email: Estimado/a…:, Hola…:, Un saludo, Atentamente; tú or usted at work", "Requests, reminders and confirmations with the condicional (¿Podría…?, ¿Sería posible…?, Le recuerdo que…)", "Reading: an email thread about a late delivery"] } },
    { id: 'u2', title: "Calls and video meetings", planned: true, plan: { goal: "Make and take work calls and take part in video meetings.", lessons: ["Phone language: ¿De parte de quién?, Le paso con…, asking someone to repeat, ending a call", "Video meetings: technical problems (no se te oye), taking turns and interrupting politely (Perdona que te interrumpa)", "Reading: the minutes of a short meeting, with dijo que and se acordó"] } },
    { id: 'u3', title: "Job interviews", planned: true, plan: { goal: "Prepare for a job interview and talk about your experience and strengths.", lessons: ["Experience and strengths: llevo tres años trabajando, he trabajado / trabajé, soy responsable y organizada", "Typical questions and good answers; asking questions yourself (Me gustaría saber si…)", "Reading: tips for an interview and a sample dialogue"] } },
    { id: 'u4', title: "Presenting your work", planned: true, plan: { goal: "Give a short, clear presentation at work.", lessons: ["Structuring a presentation: En primer lugar, A continuación, Para terminar", "Describing figures and trends: subir, aumentar, bajar, mantenerse; ligeramente, mucho", "Reading: a short project update"] } },
    { id: 'u5', title: "Small talk and workplace culture", planned: true, plan: { goal: "Make small talk with colleagues and understand everyday workplace habits.", lessons: ["Small talk at the coffee machine: safe topics, follow-up questions, showing interest", "tú and usted at work, invitations and ending a conversation politely (Bueno, te dejo…)", "Reading: an article about working days and habits in Spanish companies"] } },
    { id: 'u6', title: "Problems and solutions", planned: true, plan: { goal: "Explain problems, deal with complaints and agree on solutions.", lessons: ["Describing a problem and its cause (porque, como, por eso, así que); apologising professionally", "Suggesting solutions and making promises (le enviaremos…, para que + subjunctive)", "Reading: a complaint email and the reply"] } },
  ],
};
