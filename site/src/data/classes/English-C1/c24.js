// English C1, class 24 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u6:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c24',
  focus: 'By the end every student mixes past and present in one conditional sentence, each half keeping the tense of its own time: a past condition with a present result (*If I had taken that job, I would be living in Toronto now*), a present state with a past result (*If he weren’t so stubborn, he would have apologised*), with continuous forms, *could* and *might*, *if it hadn’t been for* and inversion (*Had I known…*). The speaking goal: talk about the choices that shaped their life now, with real reasons.',
  tips: [
    'Time words decide the forms. Ask students to underline *now*, *today*, *yesterday*, *last year* in each sentence and match each half to its time before choosing a tense.',
    'The classic error is *would have* with *now*: *If I had taken the job, I would have lived in Toronto now.* Correct it to *would be living* every time.',
    'No *would* in the *if*-clause: *If I would have known* is common in speech among learners, and it costs marks in writing.',
    '*If it weren’t for* talks about now; *If it hadn’t been for* talks about the past and often has a present result. Give one personal example of each.',
    'In speech, the stressed words carry the contrast: *If I’d **gone** to university, I’d be **earning** more.* Model the rhythm.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Tell the class one choice you made and what your life would be like now if you had chosen differently. Ask two students to do the same.' },
    { min: 12, title: 'Match the time', md: 'Show board page 1. Students choose the forms, then say which half of each sentence is past and which is present.' },
    { min: 10, title: 'Common mistakes', md: 'Show board page 2. Students fix the mistakes alone, then build the sentences in the right order.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 4. Students rewrite alone, then compare. Reveal the answers and the time of each half.' },
    { min: 5, title: 'Close', md: 'Each student finishes: *If it hadn’t been for…, I wouldn’t be… now.* Set the homework.' },
  ],
  board: [
    { title: 'Match the time', blocks: [
      { t: 'table', caption: 'Mixed conditionals', explain: ['head', 'col0'], head: ['Times', 'Form', 'Example'], rows: [
        ['past condition, present result', 'if + past perfect, would / could / might + verb', 'If I had learnt Spanish as a child, I could help you now.'],
        ['past condition, result in progress now', 'if + past perfect, would be + -ing', 'If we hadn’t sold the flat, we would be paying a lot less rent.'],
        ['present state, past result', 'if + past simple, would have + past participle', 'If she weren’t so modest, she would have told us about the prize.'],
        ['inversion, formal', 'had + subject + past participle', 'Had he listened to his doctor, he might be fitter today.'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the form that matches the time of each half.', items: [
        { q: 'If I hadn’t missed the last bus, I ___ in bed right now.', o: ['would be lying', 'would have lain', 'will be lying'], why: '*Right now*: a present activity, *would be* + *-ing*.' },
        { q: 'If she ___ afraid of flying, she would have come to the wedding in Sydney.', o: ['weren’t', 'hadn’t been', 'wouldn’t be'], why: 'A permanent present state, a past result.' },
        { q: 'If it ___ for my grandmother, I would never have learnt to cook.', o: ['hadn’t been', 'weren’t', 'wasn’t being'], why: 'Her help was in the past: *if it hadn’t been for*.' },
        { q: '___ we known about the strike, we wouldn’t be stuck here now.', o: ['Had', 'If', 'Were'], why: 'An inverted past condition: *Had we known*.' },
      ] },
    ] },
    { title: 'Common mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'If I had accepted the offer, I [would have worked] in Paris now.', a: ['would be working', 'would work'], why: '*Now* is present: *would be working*.' },
        { s: 'If I [would have known] you were ill, I would have visited.', a: ['had known', '’d known'], why: 'No *would* in the *if*-clause: past perfect.' },
        { s: 'If he [hadn’t been] so lazy in general, he would have passed yesterday’s exam.', a: ['weren’t', 'wasn’t'], why: 'Laziness *in general* is a present state: past simple.' },
        { s: '[Hadn’t I] seen the sign, I would be lost now.', a: ['Had I not'], why: 'No contraction in an inverted negative.' },
      ] },
      { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
        { a: 'If I had saved more, I could be travelling now.', why: 'A past condition, a present activity with *could be* + *-ing*.' },
        { a: 'If she spoke German, she would have got the job.', why: 'A present ability, a past result.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. Write the whole sentence.', items: [
        { q: 'I’m tired now because I stayed up so late.', cue: 'STAYED', a: ['If I hadn’t stayed up so late, I wouldn’t be tired now.', 'If I had not stayed up so late, I would not be tired now.', 'If I hadn’t stayed up so late, I would not be tired now.'], why: 'A past condition, a present result: past perfect, then *would* + verb.' },
        { q: 'He didn’t accept the offer because he isn’t very ambitious.', cue: 'MORE', a: ['If he were more ambitious, he would have accepted the offer.', 'If he was more ambitious, he would have accepted the offer.'], why: 'A present state, a past result: past simple, then *would have* + past participle.' },
        { q: 'Without your help, I wouldn’t have this job now.', cue: 'BEEN', a: ['If it hadn’t been for your help, I wouldn’t have this job now.', 'Had it not been for your help, I wouldn’t have this job now.', 'If it had not been for your help, I would not have this job now.'], why: 'Past help, a present result: *if it hadn’t been for*.' },
        { q: 'We are lost because we didn’t bring a map.', cue: 'HAD', a: ['Had we brought a map, we wouldn’t be lost.', 'If we had brought a map, we wouldn’t be lost.', 'Had we brought a map, we would not be lost.'], why: 'An inverted or ordinary past condition with a present result.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Look for time words in the first sentence: *now*, *today*, *last night*, *in general*. They tell you which half is past and which is present, and each half keeps the tense of its own time.' },
    ] },
  ],
  activities: {
    one: { title: 'Sliding doors', md: 'The student chooses one decision that shaped their life (a city, a course, a job, a person). They describe the life they would be living now if they had chosen differently, and one thing they would have done differently if they were a different kind of person. Ask follow-up questions that need a mixed conditional. Note the forms and correct three at the end.' },
    small: { title: 'Chain of consequences', md: 'Start with *If I hadn’t woken up late this morning…* Each student adds a sentence whose condition is the previous result, mixing past and present (*…I wouldn’t be so stressed now. If I weren’t so stressed…*). Stop the chain when a form goes wrong and let the group fix it.' },
    group: { title: 'If it hadn’t been for…', md: 'Breakout rooms of three each tell the others about a person or event without whom their life would be different now. Each uses *if it hadn’t been for* or *had it not been for* at least once. Bring everyone back; each room shares the most surprising story in one mixed conditional.' },
  },
  homework: { book: 'u6:p1', md: 'Finish lesson 1 of unit 6 if needed, then do lesson 2 (I’d rather you hadn’t told her). Write about 100 words on a decision that changed your life, with at least four mixed conditionals, one of them inverted.' },
};
