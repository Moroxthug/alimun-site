// Spanish A2, for work: a goal book next to the Spanish A2 course book (docs/BOOKS.md).
// Draft: reviewed by a native teacher before it is published. Units are written in units/Spanish-A2-professional/<unit>.js;
// until then each entry is planned, with the outline its writer works from. Explanations in English, translated in i18n/.
export const BOOK = {
  id: 'Spanish-A2-professional',
  language: 'Spanish',
  level: 'A2',
  track: 'goal',
  goal: 'professional',
  title: "Spanish for work",
  review: 'draft',
  units: [
    { id: 'u1', title: "At work", planned: true, plan: { goal: "Talk about your job, your workplace and your colleagues.", lessons: ["Jobs and workplaces; introducing yourself and colleagues (Le presento a…, Te presento a…)", "Your working day: times, tasks, Trabajo de … a …, stem-changing verbs (empiezo, vuelvo)", "Reading: a short staff profile on an intranet"] } },
    { id: 'u2', title: "On the phone", planned: true, plan: { goal: "Make and answer simple work calls and leave a message.", lessons: ["Answering the phone; asking to speak to someone (¿Podría hablar con…?); spelling and numbers", "Leaving and taking a message (¿Quiere dejar un mensaje?); me, te, le", "Reading: phone notes and a voicemail transcript"] } },
    { id: 'u3', title: "Emails at work", planned: true, plan: { goal: "Write and understand short work emails.", lessons: ["Greetings and endings: Estimada señora…:, Hola…:, Un cordial saludo", "Simple requests and answers (¿Me puede enviar…?, ¿Podría…?)", "Reading: three short work emails"] } },
    { id: 'u4', title: "Appointments and meetings", planned: true, plan: { goal: "Arrange, move and cancel appointments.", lessons: ["Dates, times and days; suggesting a time (¿Le va bien el martes?)", "Moving and cancelling politely: tener que, porque", "Reading: a calendar invitation and replies"] } },
    { id: 'u5', title: "Customers", planned: true, plan: { goal: "Help customers politely in a shop, café or office.", lessons: ["Greeting and helping customers (¿En qué puedo ayudarle?)", "Dealing with simple problems and saying sorry", "Reading: customer reviews and a notice"] } },
    { id: 'u6', title: "Applying for a job", planned: true, plan: { goal: "Understand a job advert and answer simple interview questions.", lessons: ["Job adverts: jornada completa, media jornada, experiencia, conocimientos", "A simple CV (currículum) and short answers about yourself: he trabajado, trabajé", "Reading: two job adverts and an invitation to an interview"] } },
  ],
};
