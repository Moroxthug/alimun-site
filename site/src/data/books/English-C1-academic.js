// English C1, for study and exams: a goal book next to the English C1 course book (docs/BOOKS.md).
// Draft: reviewed by a native teacher before it is published. Units are written in units/English-C1-academic/<unit>.js;
// until then each entry is planned, with the outline its writer works from. Explanations in English, translated in i18n/.
export const BOOK = {
  id: 'English-C1-academic',
  language: 'English',
  level: 'C1',
  track: 'goal',
  goal: 'academic',
  title: "English for study and exams",
  review: 'draft',
  units: [
    { id: 'u1', title: "Critical reading", planned: true, plan: { goal: "Read academic texts critically: tell evidence from opinion, spot assumptions and infer the writer’s position.", lessons: ["Claims, evidence and assumptions: judging how strong an argument is", "Inference and stance: what the writer implies but does not say", "Reading: an opinion article and a critical response to it"] } },
    { id: 'u2', title: "Stance and hedging", planned: true, plan: { goal: "Show exactly how certain you are and what you think, in a cautious academic voice.", lessons: ["Hedging and boosting: degrees of certainty (appears to, is likely to, clearly, there is little doubt that)", "Evaluative language: arguably, notably, a compelling case, a serious limitation", "Reading: two discussion sections, one overconfident and one carefully hedged"] } },
    { id: 'u3', title: "Synthesising sources", planned: true, plan: { goal: "Combine several sources into one argument of your own instead of summarising them one by one.", lessons: ["Comparing sources: agreement, contrast and development (similarly, in contrast, builds on, challenges)", "Integrating sources into your argument: reporting verbs with stance and your own voice", "Reading: three short sources and a paragraph that synthesises them"] } },
    { id: 'u4', title: "The literature review and dissertation", planned: true, plan: { goal: "Understand the parts of a dissertation and write a literature review that leads to a research gap.", lessons: ["The structure of a dissertation: abstract, introduction, literature review, methodology, findings, discussion", "Finding the gap and stating aims: tense choice and the language of research questions", "Reading: an abstract and an extract from a literature review"] } },
    { id: 'u5', title: "Academic speaking and debate", planned: true, plan: { goal: "Present research with authority and take part in a formal debate: concede, rebut and challenge politely.", lessons: ["Presenting research: signposting, describing data and handling difficult questions", "Debate: conceding, rebutting and challenging an argument with respect", "Reading: the transcript of a seminar debate"] } },
    { id: 'u6', title: "Exam skills", planned: true, plan: { goal: "Prepare for a C1 exam: language tasks, writing and speaking. Practice in the format of exams like C1 Advanced and IELTS Academic, never official material.", lessons: ["Language tasks: word formation, key word transformations and collocation", "Writing and speaking: describing data, the discursive essay and extended answers", "Reading: a practice passage with exam-style questions"] } },
  ],
};
