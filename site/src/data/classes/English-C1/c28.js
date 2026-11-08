// English C1, class 28 (docs/LESSONS_PLAN.md, L6). Reviews units 5 and 6. Draft for the owner's review.
export const LESSON = {
  id: 'c28',
  focus: 'By the end every student has used the key language of units 5 and 6 again, mostly in speaking: passive reporting with the right infinitive, nominalisation and its prepositions, the scale of certainty (*that* or *whether*), mixed conditionals, *wish*, *if only* and *would rather*, and other ways to set conditions, including inversion. The class finds and fixes its own most frequent mistakes from both units.',
  tips: [
    'Collect real mistakes from classes 20 to 27 before this class, especially wrong infinitives (*is said to be built*) and *would* in the *if*-clause, and bring four of them to the fix stage.',
    'Both units are about distance: unit 5 keeps the writer at a distance from a claim, unit 6 imagines a distance from reality. A past form that is not about the past links *wish*, *would rather* and conditionals; make the link explicit.',
    'Register matters in both: nominalisation and inversion are formal, *I wish you’d stop…* is everyday. Ask students where each sentence they make would belong.',
    'End with a clear next step: the two unit tests are the homework, and the next class is exam practice in the format of C1 Advanced Reading and Use of English.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is a scientific discovery you wish had been made earlier, and how would life be different now?* Each student answers in one or two sentences.' },
    { min: 10, title: 'Unit 5 check', md: 'Show board page 1. Students choose the forms alone, then explain one choice each.' },
    { min: 10, title: 'Unit 6 check', md: 'Show board page 2. Students fix the mistakes in pairs, then say which half of each conditional is past and which is present.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 12, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 4. Students work alone, then compare. Reveal the answers.' },
    { min: 8, title: 'Fix it', md: 'Write five real mistakes you heard today or in the last classes on the board. Students correct them in pairs, then together. Set the homework.' },
  ],
  board: [
    { title: 'Unit 5: science and ethics', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
        { q: 'The bridge is said ___ in the twelfth century.', o: ['to have been built', 'to be built', 'to have built'], why: 'Earlier and passive: *to have been built*.' },
        { q: 'The two teams are thought ___ on the same vaccine.', o: ['to be working', 'to have been worked', 'to work'], why: 'In progress now: *to be* + *-ing*.' },
        { q: 'There has been a sharp reduction ___ emissions since the law changed.', o: ['in', 'of', 'on'], why: 'A change in an amount: *a reduction in*.' },
        { q: 'It remains unclear ___ the treatment works for older patients.', o: ['whether', 'that', 'what'], why: 'An open question: *whether*.' },
        { q: 'The new rules are ___ to be unpopular with farmers.', o: ['bound', 'probable', 'doubtful'], why: '*Be bound to* + verb; *probable* does not take *to*.' },
      ] },
    ] },
    { title: 'Unit 6: what if?', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'If I had taken the job, I [would have lived] in Madrid now.', a: ['would be living', 'would live'], why: '*Now* is present: *would be living*.' },
        { s: 'If only I [didn’t sell] my old guitar last year.', a: ['hadn’t sold', 'had not sold'], why: 'A past regret: past perfect.' },
        { s: 'I’d rather you [don’t] tell anyone about it yet.', a: ['didn’t', 'did not'], why: 'A different subject after *would rather*: past form.' },
        { s: '[Hadn’t we] left early, we would have missed the flight.', a: ['Had we not'], why: 'No contraction in an inverted negative.' },
        { s: 'Provided the weather [will be] good, we’ll eat outside.', a: ['is'], why: 'Present tense for the future after *provided*.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. The new part has three to six words, including the word given.', items: [
        { q: 'People believe that the painting was stolen in 1990.', cue: 'BELIEVED', a: ['The painting is believed to have been stolen in 1990.'], why: 'Earlier and passive: *is believed to have been stolen*.' },
        { q: 'I’m not fluent in Italian now because I didn’t practise enough.', cue: 'PRACTISED', a: ['If I had practised enough, I would be fluent in Italian now.', 'If I’d practised enough, I’d be fluent in Italian now.', 'Had I practised enough, I would be fluent in Italian now.'], why: 'A past condition, a present result.' },
        { q: 'I regret not visiting my grandmother more often.', cue: 'WISH', a: ['I wish I had visited my grandmother more often.', 'I wish I’d visited my grandmother more often.'], why: 'A past regret: *wish* + past perfect.' },
        { q: 'If you need any help, please call me.', cue: 'SHOULD', a: ['Should you need any help, please call me.'], why: 'A formal inverted condition.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 4 each answer usually earns two marks for two changes. Here one is the structure (the reporting verb, *wish*, the inversion) and the other is the tense that follows it. Check both before you move on.' },
    ] },
  ],
  activities: {
    one: { title: 'Science news, with regrets', md: 'Give the student a short invented science story in the chat. The student reports it as a newsreader (passive reporting, nominalisation, a certainty phrase), then speaks as the scientist, saying what they wish they had done differently and what would be different now. Note five sentences and correct them together at the end.' },
    small: { title: 'Find the mistake', md: 'Each student says three sentences on a topic of their choice, using both units, with one deliberate mistake. The others must find and fix it. Score a point for each fix and one for a well-hidden mistake.' },
    group: { title: 'Review stations', md: 'Breakout rooms of three each get one area in the chat (reporting and certainty, nominalisation, conditionals and wishes, inversion). Each room writes three quiz questions for the class, one in the format of Part 4. Bring everyone back and run the quiz.' },
  },
  homework: { book: 'u5 u6', md: 'Do the unit tests of units 5 and 6 in the book if you have not yet. Then look again at the lesson with your lowest score, do its exercises once more, and write five sentences that use what it teaches.' },
};
