// English B2, for work: a goal book next to the English B2 course book (docs/BOOKS.md).
// Draft: reviewed by a native teacher before it is published. Units are written in units/English-B2-professional/<unit>.js;
// until then each entry is planned, with the outline its writer works from. Explanations in English, translated in i18n/.
export const BOOK = {
  id: 'English-B2-professional',
  language: 'English',
  level: 'B2',
  track: 'goal',
  goal: 'professional',
  title: "English for work",
  review: 'draft',
  units: [
    { id: 'u1', title: "Negotiating", planned: true, plan: { goal: "Negotiate conditions, prices and deadlines.", lessons: ["Positions, conditions and compromises (provided that, as long as)", "Diplomatic disagreement and concessions", "Reading: an email negotiation"] } },
    { id: 'u2', title: "Leading meetings", planned: true, plan: { goal: "Chair meetings and write clear minutes.", lessons: ["Opening, steering and closing a meeting", "Writing minutes: passive and reported speech", "Reading: minutes of a team meeting"] } },
    { id: 'u3', title: "Persuasive presentations", planned: true, plan: { goal: "Present ideas convincingly and handle questions.", lessons: ["Persuasive structure and rhetorical devices", "Handling questions and objections", "Reading: the script of a short pitch"] } },
    { id: 'u4', title: "Reports and proposals", planned: true, plan: { goal: "Write structured reports and proposals.", lessons: ["Formal structure and register of a report", "Presenting results and recommendations", "Reading: an extract from a short proposal"] } },
    { id: 'u5', title: "Feedback and difficult conversations", planned: true, plan: { goal: "Give and receive feedback and handle conflict.", lessons: ["Constructive feedback; softening and hedging", "Handling disagreement and finding common ground", "Reading: an article about feedback culture"] } },
    { id: 'u6', title: "Networking and career", planned: true, plan: { goal: "Network, talk about your career and plan your next step.", lessons: ["Introducing yourself at events; following up by email", "Career goals and a professional profile", "Reading: an interview about changing career"] } },
  ],
};
