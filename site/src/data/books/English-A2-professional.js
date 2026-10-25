// English A2, for work: a goal book next to the English A2 course book (docs/BOOKS.md).
// Draft: reviewed by a native teacher before it is published. Units are written in units/English-A2-professional/<unit>.js;
// until then each entry is planned, with the outline its writer works from. Explanations in English, translated in i18n/.
export const BOOK = {
  id: 'English-A2-professional',
  language: 'English',
  level: 'A2',
  track: 'goal',
  goal: 'professional',
  title: "English for work",
  review: 'draft',
  units: [
    { id: 'u1', title: "At work", planned: true, plan: { goal: "Talk about your job, your workplace and your colleagues.", lessons: ["Jobs and workplaces; introducing yourself and colleagues", "Your working day: times and tasks; present simple", "Reading: a short staff profile"] } },
    { id: 'u2', title: "On the phone", planned: true, plan: { goal: "Make and answer simple calls and leave a message.", lessons: ["Answering the phone; asking for someone; spelling and numbers", "Leaving and taking a message (Can I take a message?)", "Reading: phone notes and a voicemail transcript"] } },
    { id: 'u3', title: "Simple emails", planned: true, plan: { goal: "Write and understand short work emails.", lessons: ["Greetings and endings (Hi…, Dear…, Thanks, Best wishes)", "Simple requests and answers (Could you send me…?)", "Reading: three short work emails"] } },
    { id: 'u4', title: "Appointments", planned: true, plan: { goal: "Arrange, change and cancel appointments.", lessons: ["Days, dates and times; suggesting a time", "Changing and cancelling politely", "Reading: a calendar invitation and replies"] } },
    { id: 'u5', title: "Customers", planned: true, plan: { goal: "Help customers politely.", lessons: ["Greeting and helping customers (How can I help?)", "Simple problems and apologies", "Reading: customer reviews and a notice"] } },
    { id: 'u6', title: "Applying for a job", planned: true, plan: { goal: "Understand job adverts and answer simple interview questions.", lessons: ["Job adverts: full-time, part-time, experience, skills", "A simple CV and short answers about yourself", "Reading: two job adverts and an interview invitation"] } },
  ],
};
