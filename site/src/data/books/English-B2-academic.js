// English B2, for study and exams: a goal book next to the English B2 course book (docs/BOOKS.md).
// Draft: reviewed by a native teacher before it is published. Units are written in units/English-B2-academic/<unit>.js;
// until then each entry is planned, with the outline its writer works from. Explanations in English, translated in i18n/.
export const BOOK = {
  id: 'English-B2-academic',
  language: 'English',
  level: 'B2',
  track: 'goal',
  goal: 'academic',
  title: "English for study and exams",
  review: 'draft',
  units: [
    { id: 'u1', title: "Academic language", planned: true, plan: { goal: "Understand and use the vocabulary of academic texts.", lessons: ["Common academic words and collocations", "Nominal style and formal register", "Reading: an extract from an introductory textbook"] } },
    { id: 'u2', title: "Argument and essays", planned: true, plan: { goal: "Plan and write a balanced argumentative essay.", lessons: ["Structure: thesis, arguments, counterarguments, conclusion", "Connectors and hedging for arguments", "Reading: a model essay with comments"] } },
    { id: 'u3', title: "Summarising and paraphrasing", planned: true, plan: { goal: "Summarise texts and say things in your own words.", lessons: ["Finding main points; writing a summary", "Paraphrasing: synonyms and changing structures", "Reading: an article and two summaries to compare"] } },
    { id: 'u4', title: "Seminars and presentations", planned: true, plan: { goal: "Present a topic and take part in a discussion.", lessons: ["Presenting a topic clearly; handling questions", "Agreeing, disagreeing and building on others’ points", "Reading: the transcript of a seminar discussion"] } },
    { id: 'u5', title: "Sources and research", planned: true, plan: { goal: "Use sources well: quoting, citing and avoiding plagiarism.", lessons: ["Reporting verbs for sources (argue, claim, suggest)", "Quoting, citing and paraphrasing responsibly", "Reading: a short research report"] } },
    { id: 'u6', title: "Exam skills", planned: true, plan: { goal: "Prepare for a B2 exam: strategies for every part. Practice in the format of exams like B2 First and IELTS, never official material.", lessons: ["Reading and listening strategies under time pressure", "Writing: planning, word limits and checking", "Speaking: structuring a long turn and discussion"] } },
  ],
};
