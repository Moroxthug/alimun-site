// German B2, for work: a goal book next to the German B2 course book (docs/BOOKS.md).
// Draft: reviewed by a native teacher before it is published. Units are written in units/German-B2-professional/<unit>.js;
// until then each entry is planned, with the outline its writer works from. Explanations in English, translated in i18n/.
export const BOOK = {
  id: 'German-B2-professional',
  language: 'German',
  level: 'B2',
  track: 'goal',
  goal: 'professional',
  title: "German for work",
  review: 'draft',
  units: [
    { id: 'u1', title: "Negotiating", planned: true, plan: { goal: "Negotiate conditions, prices and deadlines in a professional way.", lessons: ["Positions and compromises: Konjunktiv II, conditions (falls, sofern)", "Diplomatic disagreement and making concessions", "Reading: an email negotiation about a contract"] } },
    { id: 'u2', title: "Leading meetings", planned: true, plan: { goal: "Chair and take part in meetings and write minutes.", lessons: ["Opening, steering and closing a meeting", "Taking minutes (Protokoll): passive and reported speech", "Reading: minutes of a team meeting"] } },
    { id: 'u3', title: "Persuasive presentations", planned: true, plan: { goal: "Present ideas convincingly to colleagues and clients.", lessons: ["Arguments and connectors (einerseits…andererseits, folglich)", "Handling questions and objections", "Reading: the script of a short pitch"] } },
    { id: 'u4', title: "Reports and proposals", planned: true, plan: { goal: "Write structured reports and proposals.", lessons: ["Nominal style and structure of a report", "Describing results and recommending action", "Reading: an extract from a short report"] } },
    { id: 'u5', title: "Feedback and difficult conversations", planned: true, plan: { goal: "Give and receive feedback and handle conflict.", lessons: ["Giving constructive feedback; softening criticism", "Handling disagreement and finding a solution together", "Reading: an article about feedback culture"] } },
    { id: 'u6', title: "Networking and career", planned: true, plan: { goal: "Network, talk about your career and plan your next step.", lessons: ["Introducing yourself at events; following up", "Talking about career goals; a profile text", "Reading: an interview with someone who changed career"] } },
  ],
};
