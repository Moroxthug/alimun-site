// Spanish A1, for work: a goal book next to the Spanish A1 course book (docs/BOOKS.md).
// Draft: reviewed by a native teacher before it is published. Units are written in units/Spanish-A1-professional/<unit>.js;
// until then each entry is planned, with the outline its writer works from. Explanations in English, translated in i18n/.
export const BOOK = {
  id: 'Spanish-A1-professional',
  language: 'Spanish',
  level: 'A1',
  track: 'goal',
  goal: 'professional',
  title: "Spanish for work",
  review: 'draft',
  units: [
    { id: 'u1', title: "Hello at work", planned: true, plan: { goal: "Introduce yourself and your colleagues at work.", lessons: ["Greetings at work; tú and usted; Me llamo…, Soy…, Trabajo en…", "Introducing colleagues: Este es…, Esta es…; Encantado, encantada; where people are from and the languages they speak", "Reading: a welcome email for a new colleague"] } },
    { id: 'u2', title: "Jobs and workplaces", planned: true, plan: { goal: "Say what your job is, where you work and what you do there.", lessons: ["Jobs for men and women (camarero, camarera; el or la recepcionista); ¿A qué te dedicas? Soy + job with no article", "Workplaces and tasks: trabajo en una oficina; regular verbs (trabajar, vender, escribir)", "Reading: short staff profiles on a company website"] } },
    { id: 'u3', title: "The working day", planned: true, plan: { goal: "Talk about your working hours and what you do every day.", lessons: ["Times and days: ¿A qué hora empiezas? a las ocho; de nueve a cinco; de lunes a viernes", "Your routine at work: empezar, terminar, volver, levantarse; tengo una reunión", "Reading: a shift timetable and a note about it"] } },
    { id: 'u4', title: "Phone calls and messages", planned: true, plan: { goal: "Answer a simple work call, ask for someone and leave a short message.", lessons: ["Answering the phone: ¿Diga? ¿Puedo hablar con…? ¿De parte de quién?; spelling names and saying numbers", "Taking and leaving a message: No está. ¿Quiere dejar un mensaje? Short written messages", "Reading: phone notes and short messages from colleagues"] } },
    { id: 'u5', title: "The office", planned: true, plan: { goal: "Say where things are in the office and ask colleagues for help.", lessons: ["Things in the office; hay and estar; al lado de, encima de, entre", "Asking for help: ¿Puedes ayudarme? ¿Dónde está…? No funciona; perdona and perdone", "Reading: a note for a new colleague about the office"] } },
    { id: 'u6', title: "Appointments and schedules", planned: true, plan: { goal: "Make, check and change simple appointments.", lessons: ["Days, dates and months: el lunes, el 3 de mayo; ¿Qué día…? ¿A qué hora…?", "Making an appointment: ¿Te va bien el martes? ¿Quedamos a las diez? Plans with ir a + infinitive", "Reading: a week in a work diary and an email about a meeting"] } },
  ],
};
