// German A1, for work: a goal book next to the German A1 course book (docs/BOOKS.md).
// Draft: reviewed by a native teacher before it is published. Units are written in units/German-A1-professional/<unit>.js;
// until then each entry is planned, with the outline its writer works from. Explanations in English, translated in i18n/.
export const BOOK = {
  id: 'German-A1-professional',
  language: 'German',
  level: 'A1',
  track: 'goal',
  goal: 'professional',
  title: "German for work",
  review: 'draft',
  units: [
    { id: 'u1', title: "My first day", planned: true, plan: { goal: "Greet colleagues, introduce yourself at work and say where you come from.", lessons: ["Greetings at work: Guten Morgen, Ich bin neu hier; du and Sie with colleagues", "Name, country and languages: heißen, kommen, sprechen, sein; spelling your name", "Reading: a welcome note for new colleagues"] } },
    { id: 'u2', title: "Jobs and workplaces", planned: true, plan: { goal: "Say what your job is and where you work.", lessons: ["Jobs for men and women: Ich bin Koch. Sie ist Köchin. Was sind Sie von Beruf?", "Workplaces: im Büro, im Hotel, in der Küche; es gibt; Mein Arbeitsplatz ist groß.", "Reading: short staff profiles of a small company"] } },
    { id: 'u3', title: "The working day", planned: true, plan: { goal: "Say when you work and what you do during the working day.", lessons: ["Times and days: um, von … bis, am Montag; Wann arbeiten Sie?", "Separable verbs at work (anfangen, aufhören, aufräumen) and a time first: Um acht fange ich an.", "Reading: a baker's working day"] } },
    { id: 'u4', title: "Phone and messages", planned: true, plan: { goal: "Answer a simple work call and write a short message to a colleague.", lessons: ["On the phone: Hier ist …, Kann ich bitte Frau … sprechen? Numbers and spelling", "Short messages: Ich bin krank. Ich komme später. Rufen Sie bitte zurück.", "Reading: messages in a team chat"] } },
    { id: 'u5', title: "Things at work", planned: true, plan: { goal: "Name things at work, say what you need and ask for help.", lessons: ["Things at work: der, die, das; Ich brauche einen Stift. Es gibt keinen Drucker.", "Asking for help: Können Sie mir helfen? Der Drucker ist kaputt. Wo ist …?", "Reading: a notice for new staff in the office kitchen"] } },
    { id: 'u6', title: "Appointments and shifts", planned: true, plan: { goal: "Make a simple appointment and read a shift plan.", lessons: ["Making an appointment: Haben Sie am Dienstag Zeit? Geht es um zehn? Ja, das geht.", "The shift plan: Frühschicht, Spätschicht, frei; Kannst du am Samstag arbeiten? Ich möchte frei haben.", "Reading: a shift plan and a message about changing a shift"] } },
  ],
};
