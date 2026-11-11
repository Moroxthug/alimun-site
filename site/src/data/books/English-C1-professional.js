// English C1, for work: a goal book next to the English C1 course book (docs/BOOKS.md).
// Draft: reviewed by a native teacher before it is published. Units are written in units/English-C1-professional/<unit>.js;
// until then each entry is planned, with the outline its writer works from. Explanations in English, translated in i18n/.
export const BOOK = {
  id: 'English-C1-professional',
  language: 'English',
  level: 'C1',
  track: 'goal',
  goal: 'professional',
  title: "English for work",
  review: 'draft',
  units: [
    { id: 'u1', title: "Strategy and stakeholders", planned: true, plan: { goal: "Explain a strategy and adapt the message to each group of stakeholders.", lessons: ["Priorities and trade-offs: focus with clefts and nominalisation", "Tailoring one message to the board, the team and clients", "Reading: a strategy update to staff"] } },
    { id: 'u2', title: "Chairing and facilitating", planned: true, plan: { goal: "Facilitate discussions, build consensus and bring every voice in.", lessons: ["Neutral questions, paraphrasing and summarising", "Building consensus and managing dominant or silent participants", "Reading: an article on why good facilitators talk less"] } },
    { id: 'u3', title: "Diplomacy and influence", planned: true, plan: { goal: "Influence people tactfully, even without authority over them.", lessons: ["Tact and distance: tentative forms, understatement and the passive", "Persuading without pressure: shared goals, emphatic do and hypothetical offers", "Reading: an article on influence without authority"] } },
    { id: 'u4', title: "Writing for executives", planned: true, plan: { goal: "Write short, clear documents that busy decision-makers can act on.", lessons: ["The bottom line first: executive summaries and concise style", "Recommendations: recommend that, inverted conditionals and precise nouns", "Reading: a briefing note for a leadership team"] } },
    { id: 'u5', title: "Managing change and conflict", planned: true, plan: { goal: "Announce change, respond to concerns and help colleagues resolve conflict.", lessons: ["Announcing change: be to, be set to and acknowledging concerns", "Mediating conflict: reframing and past modals without blame", "Reading: a case study of two teams that merged"] } },
    { id: 'u6', title: "Public speaking and the media", planned: true, plan: { goal: "Give a speech with impact and answer journalists’ questions with confidence.", lessons: ["Speaking with impact: contrast, the rule of three and inversion", "Facing the media: bridging, staying on message and not speculating", "Reading: the transcript of a radio interview"] } },
  ],
};
