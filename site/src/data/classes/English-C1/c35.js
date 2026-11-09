// English C1, class 35 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u8:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c35',
  focus: 'By the end every student links the ideas of a complex argument with whereas, while, notwithstanding, given that, insofar as, in that, albeit and let alone, choosing each for its exact meaning and for its grammar: a clause, a noun phrase or a short phrase.',
  tips: [
    'Most mistakes here are grammar, not meaning: *albeit it was late*, *notwithstanding of the cost*. Keep the question *what follows it?* on the board and come back to it.',
    '*Insofar as* limits a claim; *in that* explains in what way it is true. Contrast one pair: *The plan works insofar as it cuts traffic* (only to that extent) and *The plan is clever in that it costs nothing* (this is why).',
    '*Let alone* follows a negative idea and adds something even less likely: *I can’t afford a flat, let alone a house*. It is never followed by a full clause.',
    'These connectors sound formal in speech. Encourage them in a serious discussion, not in small talk, and praise the student who uses one naturally.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Write *Cars should be banned from city centres.* on the blank page. Students give one reason for and one against, joined with any connector they know.' },
    { min: 12, title: 'Meaning and grammar', md: 'Show board page 1. Students choose the connector, then say what follows it: a clause, a noun phrase or a short phrase.' },
    { min: 10, title: 'Build the sentence', md: 'Show board page 2. Students build each sentence and explain why the extra words do not belong.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 4. Students complete the sentences alone, count their words, then compare. Reveal the answers.' },
    { min: 5, title: 'Close', md: 'Each student gives their final view on the warm-up question in one sentence with *given that*, *insofar as* or *albeit*. Set the homework.' },
  ],
  board: [
    { title: 'Meaning and grammar', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the connector that fits the meaning and the grammar.', items: [
        { q: 'City centres are getting quieter, ___ the suburbs are busier than ever.', o: ['whereas', 'albeit', 'in that'], why: 'Two parallel facts in contrast: *whereas* + clause.' },
        { q: '___ the high cost, most residents support the new tram line.', o: ['Notwithstanding', 'Insofar as', 'Whereas'], why: 'A noun phrase follows: *notwithstanding* = despite.' },
        { q: 'The festival was a success, ___ a muddy one.', o: ['albeit', 'whereas', 'given'], why: '*Albeit* + a short phrase: although it was muddy.' },
        { q: 'Most people can’t name their local councillor, ___ explain what they do.', o: ['let alone', 'in that', 'albeit'], why: 'After a negative, something even less likely: *let alone*.' },
        { q: 'The new tax is fair ___ everyone pays the same rate.', o: ['in that', 'albeit', 'notwithstanding'], why: '*In that* explains in what way it is fair.' },
        { q: '___ how fast prices are rising, a small pay rise will not help much.', o: ['Given', 'Whereas', 'Albeit'], why: '*Given* + a known fact.' },
      ] },
    ] },
    { title: 'Build the sentence', blocks: [
      { t: 'ex', kind: 'build', h: 'Build the sentence. Two words do not belong.', items: [
        { a: 'Given the cost of housing, many young people live with their parents.', extra: ['giving', 'of'], why: '*Given* + noun phrase; the form is *given*, not *giving*.' },
        { a: 'The policy has worked insofar as fewer cars enter the centre.', extra: ['far', 'that'], why: '*Insofar as* + clause limits the claim.' },
        { a: 'The new park is popular, albeit smaller than planned.', extra: ['it', 'was'], why: '*Albeit* + a phrase, not a clause.' },
        { a: 'Notwithstanding the protests, the council approved the plan.', extra: ['of', 'despite'], why: '*Notwithstanding* + noun phrase, with no *of*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. Use between three and six words, including the word given.', items: [
        { q: 'Although the plan was expensive, it was approved. (…, the plan was approved.)', cue: 'NOTWITHSTANDING', a: ['Notwithstanding the cost, the plan was approved.', 'Notwithstanding its cost, the plan was approved.', 'Notwithstanding the expense, the plan was approved.', 'Notwithstanding its high cost, the plan was approved.'], why: '*Notwithstanding* + a noun phrase: three or four words.' },
        { q: 'Because we know the budget is limited, we must choose carefully. (…, we must choose carefully.)', cue: 'GIVEN', a: ['Given that the budget is limited, we must choose carefully.', 'Given the limited budget, we must choose carefully.'], why: '*Given (that)* introduces a known fact.' },
        { q: 'I can’t even boil an egg, so I certainly can’t cook a three-course meal. (I can’t boil an egg, … a three-course meal.)', cue: 'ALONE', a: ['I can’t boil an egg, let alone cook a three-course meal.'], why: '*Let alone* + a verb without *to*: three words.' },
        { q: 'The report is useful because it shows where the money goes. (The report is useful … where the money goes.)', cue: 'THAT', a: ['The report is useful in that it shows where the money goes.'], why: '*In that* explains in what way: four words.' },
        { q: 'The economy is growing, but only slowly. (The economy is growing, … .)', cue: 'ALBEIT', a: ['The economy is growing, albeit at a slow rate.', 'The economy is growing, albeit at a slow pace.', 'The economy is growing, albeit only slowly.'], why: '*Albeit* + a phrase; *albeit slowly* alone is too short for Part 4.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 4 the key word often tells you the grammar of the answer: *notwithstanding* and *given* need a noun phrase or a clause after them, *albeit* a short phrase, *let alone* a word or phrase. Decide the grammar first, then count.' },
    ] },
  ],
  activities: {
    one: { title: 'Council debate', md: 'The town can fund a new tram line or a network of cycle lanes, not both. The student argues for one; you argue for the other. Every turn must use a connector from the board. After eight minutes, the student sums up their case in three sentences with *given that*, *insofar as* and *albeit*.' },
    small: { title: 'Connector chain', md: 'Post a list of the eight connectors in the chat and a question (*Should cars be banned from city centres?*). Students build one argument together, each adding a sentence with the next connector on the list. If the grammar after the connector is wrong, the group fixes it before moving on.' },
    group: { title: 'Argument rooms', md: 'Breakout rooms of three each write a paragraph of five sentences on a question about the future of society (housing, work, transport), using at least four connectors. Rooms swap paragraphs through the chat and check what follows each connector. Back together, read the best paragraph aloud.' },
  },
  homework: { book: 'u8:p2', md: 'Finish lesson 2 of unit 8 if needed, then do lesson 3 (Writing the essay). Write a paragraph of about 100 words on whether cars should be banned from city centres, using *whereas*, *given that*, *insofar as* and *albeit*.' },
};
