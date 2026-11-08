// English C1, class 80 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u17:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c80',
  focus: 'By the end every student talks precisely about justice and fairness with the right collocations: a crime is *committed*, a law is *passed*, *enforced* and *upheld*, a person *stands trial* and is *found guilty* or *acquitted*, a verdict is *overturned on appeal*, and people are *held accountable for* what they do. The speaking goal: discuss a case of fairness or unfairness, in or out of court, using this language naturally.',
  tips: [
    'The verbs are where students go wrong: *commit* (not *make* or *do*) a crime, *find* (not *judge*) someone guilty, *sentence to* (not *for*) a punishment. Correct the verb and say the whole collocation again.',
    'Much of this language is used outside the courtroom: companies *exploit loopholes*, decisions *set a precedent*, politicians are *held accountable*. Link the words to news stories the students know.',
    'Keep discussions about real cases general and respectful. Students may have strong views about their own country’s justice system; let them choose how personal to be.',
    'Before the exam page, remind students that in C1 Advanced Part 1 all four options often have a similar meaning: only one is the natural partner word.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Think of a news story about a decision that seemed unfair. What happened?* Two or three students answer briefly; note any legal words on the board.' },
    { min: 12, title: 'Collocations of justice', md: 'Show board page 1. Students choose the words that go with each key word, then put two of the collocations in a sentence.' },
    { min: 10, title: 'Fix it', md: 'Show board page 2. Students fix the mistakes in pairs, then retell the short case in their own words.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Board page 3: C1 Advanced Reading and Use of English Part 1. Students choose the words alone with "Everyone solves this", then compare and say what made the right option the only natural one.' },
    { min: 5, title: 'Close', md: 'Each student finishes: *I think … should be held accountable for…* Set the homework.' },
  ],
  board: [
    { title: 'Collocations of justice', blocks: [
      { t: 'examples', items: [
        { s: 'He **stood trial** for fraud and was **acquitted** of all charges.', n: 'Was tried in court and found not guilty.' },
        { s: 'Her lawyers **appealed against** the verdict, and it was **overturned**.', n: 'Asked a higher court to change it; it was cancelled.' },
        { s: 'The company **exploited a loophole** to avoid paying tax.', n: 'Used a gap in the law, legally but unfairly.' },
        { s: 'The ruling **set a precedent** for thousands of similar cases.', n: 'Became an example that later cases follow.' },
      ] },
      { t: 'ex', kind: 'colloc', h: 'Which words go naturally with the key word?', items: [
        { key: 'commit', o: ['a crime', 'fraud', 'a verdict', 'an offence', 'a trial'], a: [0, 1, 3], why: 'We *commit* crimes, fraud and offences; we *reach* a verdict and *stand* trial.' },
        { key: 'enforce', o: ['the law', 'a ban', 'a confession', 'the rules', 'an appeal'], a: [0, 1, 3], why: 'Police and courts *enforce* laws, bans and rules.' },
        { key: 'held', o: ['accountable', 'responsible', 'in custody', 'guilty', 'a crime'], a: [0, 1, 2], why: '*Be held accountable, responsible, in custody*; but *found guilty*.' },
        { key: 'a fair', o: ['trial', 'hearing', 'chance', 'loophole', 'crime'], a: [0, 1, 2], why: '*A fair trial, hearing, chance*.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'The police believe he [made] the robbery alone.', a: ['committed'], why: 'We *commit* a crime.' },
        { s: 'After a two-week trial, the jury [judged] her guilty.', a: ['found'], why: 'Juries *find* someone guilty.' },
        { s: 'He was sentenced [for] three years in prison.', a: ['to'], why: '*Sentenced to* a punishment.' },
        { s: 'Ten years later the verdict was [overturned by] appeal.', a: ['overturned on'], why: 'The fixed phrase is *overturned on appeal*.' },
        { s: 'Nobody was ever held accountable [of] the mistakes.', a: ['for'], why: '*Accountable for*.' },
        { s: 'Every business must comply [to] the new safety rules.', a: ['with'], why: '*Comply with*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Learn the legal words in their phrases, never alone: *stand trial*, *beyond reasonable doubt*, *the burden of proof*, *a miscarriage of justice*. The phrase is what the exam and the reader expect.' },
    ] },
    { title: 'Exam corner: Use of English Part 1', blocks: [
      { t: 'text', md: 'The sentences make one short text about a famous case.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 1): choose the word that best fits each gap.', items: [
        { q: 'In 1998 a young builder was wrongly convicted of a crime he had not ___.', o: ['committed', 'done', 'made', 'performed'], why: 'The collocation is *commit a crime*.' },
        { q: 'Although the evidence was weak, the prosecution persuaded the jury beyond ___ doubt.', o: ['reasonable', 'sensible', 'logical', 'rational'], why: 'The fixed legal phrase is *beyond reasonable doubt*.' },
        { q: 'For twelve years his family campaigned to have the verdict ___.', o: ['overturned', 'turned over', 'overthrown', 'turned down'], why: 'A verdict is *overturned*.' },
        { q: 'When he was finally released, the case was described as a ___ of justice.', o: ['miscarriage', 'failure', 'breakdown', 'loss'], why: 'The fixed phrase is *a miscarriage of justice*.' },
        { q: 'No police officer was ever held ___ for the errors in the investigation.', o: ['accountable', 'blamed', 'guilty', 'charged'], why: '*Held accountable for* + the mistakes.' },
        { q: 'The case set an important ___ for the use of new evidence in old trials.', o: ['precedent', 'example', 'standard', 'model'], why: 'A ruling *sets a precedent*.' },
      ] },
      { t: 'tip', md: 'In Part 1 the four options often mean almost the same thing. Read the words on both sides of the gap: *beyond ___ doubt* and *a ___ of justice* accept only one partner word.' },
    ] },
  ],
  activities: {
    one: { title: 'Fair or unfair?', md: 'The student chooses a case or a decision they know about (from the news, a film or their own life, such as a rule at work). They tell it in three minutes using at least six collocations from the lesson. Ask: *Was the process fair? Who should have been held accountable?* Note the collocations used and correct the verbs.' },
    small: { title: 'Mini trial', md: 'Give a simple case in the chat (a neighbour’s tree damaged a car; a student is accused of copying). One student is the prosecution, one the defence, the others the jury. Each side speaks for one minute with the lesson’s language; the jury finds the accused guilty or not and explains the verdict.' },
    group: { title: 'News headlines', md: 'Breakout rooms of three write four short news headlines about justice using collocations from the lesson (*Verdict overturned after ten years*, *Firm exploits tax loophole*). Rooms post them in the chat; another room must tell the story behind one headline in four sentences.' },
  },
  homework: { book: 'u17:p3', md: 'Finish lesson 3 of unit 17 if needed, then do lesson 4 (Four views on a new law). Write 120 words about a law or rule you think is unfair, using at least six collocations from today.' },
};
