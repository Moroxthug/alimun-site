// English C1, class 22 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u5:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c22',
  focus: 'By the end every student says exactly how sure the evidence allows them to be, with a scale of phrases that organise a whole sentence: *there is no doubt that*, *be bound to*, *in all likelihood*, *may well*, *it is not inconceivable that*, *there is little evidence that*, *it remains unclear whether*, *it remains to be seen whether*. They know which phrases take *that* and which take *whether*. The speaking goal: discuss what a new scientific finding does and does not prove, without claiming too much or too little.',
  tips: [
    'Draw the scale on the board from certain to open question and let students place each phrase on it themselves before you show the answer.',
    'A fact takes *that* (*There is no doubt that…*); an open question takes *whether* (*It remains unclear whether…*). Students often swap them; ask *Do we know the answer?*',
    '*Bound* only works as *be bound to* + verb, and *probable* does not take a *to*-infinitive (*It is probable that…*, but *likely to*). These are frequent errors.',
    'Boosting matters too: *clearly*, *undoubtedly*, *the evidence leaves no doubt*. A good answer matches the strength of the language to the strength of the evidence.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Read out a headline: *Coffee helps you live longer, scientists say.* Ask: *What would you need to know before you believed it?* Collect questions about the study.' },
    { min: 12, title: 'How sure is the writer?', md: 'Show board page 1. Students sort the sentences on the scale, then explain their choice for two of them.' },
    { min: 10, title: 'That or whether', md: 'Show board page 2. Students fix the mistakes alone, then compare. Ask them to make one true sentence about their own field with *it remains to be seen whether*.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 2. Students read the whole text first, then write one word in each gap. Reveal the answers.' },
    { min: 5, title: 'Close', md: 'Each student makes one prediction about science or health in the next ten years and says exactly how sure they are. Set the homework.' },
  ],
  board: [
    { title: 'How sure is the writer?', blocks: [
      { t: 'ex', kind: 'sort', h: 'How sure is the writer? Sort the sentences.', groups: ['certain or almost certain', 'probable or possible', 'unlikely or unknown'], items: [
        { s: 'There is no doubt that the planet is warming.', g: 0, why: '*No doubt*: certain.' },
        { s: 'Prices are bound to rise once the patent ends.', g: 0, why: '*Be bound to*: certain.' },
        { s: 'The new vaccine may well prove more effective.', g: 1, why: '*May well*: probable.' },
        { s: 'It is not inconceivable that the virus came from bats.', g: 1, why: '*Not inconceivable*: possible.' },
        { s: 'There is little evidence that the diet works.', g: 2, why: '*Little evidence*: unlikely.' },
        { s: 'It remains to be seen whether the protection lasts.', g: 2, why: 'An open question: unknown.' },
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the phrase that matches the evidence.', items: [
        { q: 'One small study found a link, so ___ coffee lowers the risk.', o: ['it is possible that', 'there is no doubt that', 'it is beyond doubt that'], why: 'One small study only makes it possible.' },
        { q: 'Dozens of large studies agree: ___ smoking causes cancer.', o: ['there is no doubt that', 'it remains unclear whether', 'it is not inconceivable that'], why: 'Overwhelming evidence: certain.' },
      ] },
    ] },
    { title: 'That or whether', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'It remains unclear [that] the drug works in children.', a: ['whether', 'if'], why: 'An open question needs *whether*.' },
        { s: 'The results are [probable] to be accurate.', a: ['likely'], why: '*Probable* does not take a *to*-infinitive; *likely to* does.' },
        { s: 'It is [bound that] prices will rise.', a: ['certain that', 'likely that'], why: '*Bound* works only as *be bound to* + verb: *Prices are bound to rise.*' },
        { s: 'There is no doubt [whether] it is true.', a: ['that'], why: '*No doubt* introduces a fact: *that*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Ask yourself whether the answer is known. If it is, the phrase takes *that*: *There is little doubt that…* If it is still an open question, it takes *whether*: *It remains to be seen whether…*' },
    ] },
    { title: 'Exam corner: Use of English Part 2', blocks: [
      { t: 'ex', kind: 'gap', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 2): read the text about a new treatment, sentence by sentence, and write one word in each gap.', items: [
        { q: 'There is little ___ that it reduces pain in the short term.', a: ['doubt'], why: 'The fixed phrase *there is little doubt that*.' },
        { q: 'In all ___, doctors will be able to prescribe it within two years.', a: ['likelihood'], why: '*In all likelihood*: almost certainly.' },
        { q: 'It remains to be ___ whether the benefits last.', a: ['seen'], why: '*It remains to be seen whether*: an open question.' },
        { q: 'The side effects are ___ to be studied closely.', a: ['bound', 'certain', 'sure'], why: '*Be bound to*: certain.' },
        { q: 'The results may ___ change once larger groups are tested.', a: ['well'], why: '*May well*: probable.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 2 there are eight gaps and you write one word in each. Many are parts of fixed phrases (*little doubt*, *remains to be seen*, *in all likelihood*), so learn them as chunks.' },
    ] },
  ],
  activities: {
    one: { title: 'What does it prove?', md: 'Give the student two invented study summaries in the chat, one strong (many large studies) and one weak (one small study). The student explains in two minutes what each shows and does not show, with at least five phrases from the scale. Then argue against their strongest claim and let them adjust it.' },
    small: { title: 'Headline doctors', md: 'Each student writes one overconfident health headline in the chat. The next student rewrites it so it matches what a single study could show, with a phrase from the scale. The group votes on whether each rewrite is too strong, too weak or just right.' },
    group: { title: 'The panel', md: 'Breakout rooms of four discuss one prediction you paste in the chat (*People will live to 120*, *Cancer will be curable by 2040*). Each student must use a different level of certainty and give one reason. Bring everyone back; each room reports its most careful and its most confident sentence.' },
  },
  homework: { book: 'u5:p3', md: 'Finish lesson 3 of unit 5 if needed, then do lesson 4 (Four views on gene editing). Find a science or health headline in English and write about 80 words on what the study may or may not prove, with at least four phrases from the scale.' },
};
