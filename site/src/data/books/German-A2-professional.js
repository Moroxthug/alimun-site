// German A2, for work: a goal book next to the German A2 course book (docs/BOOKS.md).
// Draft: reviewed by a native teacher before it is published. Units are written in units/German-A2-professional/<unit>.js;
// until then each entry is planned, with the outline its writer works from. Explanations in English, translated in i18n/.
export const BOOK = {
  id: 'German-A2-professional',
  language: 'German',
  level: 'A2',
  track: 'goal',
  goal: 'professional',
  title: "German for work",
  review: 'draft',
  units: [
    { id: 'u1', title: "At work", planned: true, plan: { goal: "Talk about your job, your workplace and your colleagues.", lessons: ["Jobs and workplaces; introducing yourself and colleagues", "Your working day: times, tasks, Ich arbeite von … bis …", "Reading: a short staff profile on an intranet"] } },
    { id: 'u2', title: "On the phone", planned: true, plan: { goal: "Make and answer simple work calls and leave a message.", lessons: ["Answering the phone; asking to speak to someone; spelling and numbers", "Leaving and taking a message (Kann ich etwas ausrichten?)", "Reading: phone notes and a voicemail transcript"] } },
    { id: 'u3', title: "Emails at work", planned: true, plan: { goal: "Write and understand short work emails.", lessons: ["Greetings and endings: Sehr geehrte…, Liebe…, Viele Grüße", "Simple requests and answers (Können Sie mir bitte … schicken?)", "Reading: three short work emails"] } },
    { id: 'u4', title: "Appointments and meetings", planned: true, plan: { goal: "Arrange, move and cancel appointments.", lessons: ["Dates, times and days; suggesting a time", "Moving and cancelling politely", "Reading: a calendar invitation and replies"] } },
    { id: 'u5', title: "Customers", planned: true, plan: { goal: "Help customers politely in a shop, café or office.", lessons: ["Greeting and helping customers (Kann ich Ihnen helfen?)", "Dealing with simple problems and saying sorry", "Reading: customer reviews and a notice"] } },
    { id: 'u6', title: "Applying for a job", planned: true, plan: { goal: "Understand a job advert and answer simple interview questions.", lessons: ["Job adverts: Vollzeit, Teilzeit, Erfahrung, Kenntnisse", "A simple CV (Lebenslauf) and short answers about yourself", "Reading: two job adverts and an invitation to an interview"] } },
  ],
};
