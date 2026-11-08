// English C1, class 67 (docs/LESSONS_PLAN.md, L6). Review of units 13 and 14. Draft for the owner's review.
export const LESSON = {
  id: 'c67',
  focus: 'By the end every student uses the language of units 13 and 14 with more control: modifiers with gradable and ungradable adjectives, advanced relative clauses (*by which time, in which case, whereby, the extent to which, most of which*), the vocabulary of evaluation and concession, quantifiers and agreement, comparison in detail, and the collocations and idioms of money. Speaking first: most of the class is talk, with mistakes fixed together.',
  tips: [
    'Collect typical mistakes from classes 59 to 66 before this class and swap four of them into the board page *Fix it*. The commonest at this point: *very unique*, *in that case* after a comma, *a great deal of people*, *very cheaper* and *make the ends meet*.',
    'Mix the two units deliberately: a conversation about whether a concert or an exhibition is worth the money needs modifiers, evaluation, comparison and money idioms at once.',
    'Use the students’ review and report from the last two writing classes: pick one strong sentence from each student to praise at the start.',
    'End with a clear next step: the two unit tests are the homework, and the next class is exam practice for the Writing paper, so students should bring their review and report.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is the best value for money you have had from a film, show, book or trip? And the worst?* Each student answers in two or three sentences.' },
    { min: 12, title: 'Units 13 and 14 together', md: 'Show board page 1. Students choose the right forms alone, then explain one choice each.' },
    { min: 10, title: 'Fix it', md: 'Show board page 2: typical mistakes from the last classes. Students correct them in pairs.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 4. Students rewrite the sentences alone, then count the words together.' },
    { min: 5, title: 'Close', md: 'Each student names one point they now feel sure about and one to practise. Set the homework.' },
  ],
  board: [
    { title: 'Units 13 and 14 together', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: 'The new production is ___ original, though somewhat long.', o: ['highly', 'deeply', 'bitterly'], why: '*Highly original*: a judgement.' },
        { q: 'The show may be cancelled, ___ tickets will be refunded.', o: ['in which case', 'in that case', 'by which time'], why: 'After a comma: *in which case*.' },
        { q: '___ its flaws, the film is utterly compelling.', o: ['For all', 'Despite of', 'Although'], why: '*For all* + noun: a concession.' },
        { q: 'Only ___ of the shops on the street accept cash now.', o: ['a handful', 'a great deal', 'a little'], why: 'A very small number of countable things.' },
        { q: 'The festival is ___ cheaper than it was last year.', o: ['considerably', 'very', 'by far'], why: '*Considerably* + comparative.' },
        { q: 'Many musicians struggle to make ___ meet.', o: ['ends', 'the ends', 'end'], why: 'The idiom is *make ends meet*.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'It is a [very unique] collection of early photographs.', a: ['truly unique', 'unique'], why: '*Unique* is ungradable.' },
        { s: 'She wrote three plays, [none of them] were staged.', a: ['none of which'], why: 'Without a linking word you need *which*.' },
        { s: 'A great [deal] of people complained about the prices.', a: ['many', 'number'], why: '*A great many* or *a great number of* with plural nouns.' },
        { s: 'The number of visitors [have] doubled.', a: ['has'], why: '*The number of* is singular.' },
        { s: 'The more [you have money], the more you spend.', a: ['money you have'], why: 'The comparative stays with its noun: *The more money you have*.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. Use between three and six words, including the word given.', items: [
        { q: 'The second album is just as good as the first. (The second album is … as the first.)', cue: 'BIT', a: ['The second album is every bit as good as the first.'], why: '*every bit as… as*: exactly as good.' },
        { q: 'The concert was much less exciting than we had hoped. (The concert was … we had hoped.)', cue: 'NEAR', a: ['The concert was nowhere near as exciting as we had hoped.', 'The concert was not nearly as exciting as we had hoped.'], why: '*nowhere near as… as* = much less.' },
        { q: 'We arrived at ten. The band had finished by then. (We arrived at ten, … finished.)', cue: 'TIME', a: ['We arrived at ten, by which time the band had finished.'], why: '*by which time* + past perfect.' },
        { q: 'Almost no one bought the expensive programme. (Hardly … the expensive programme.)', cue: 'ANYONE', a: ['Hardly anyone bought the expensive programme.'], why: '*hardly anyone* = almost no one.' },
      ] },
      { t: 'tip', art: 'owl', md: 'When you finish a Part 4 answer, read the whole new sentence aloud in your head. If it does not sound like natural English, or if it says more or less than the first sentence, change it.' },
    ] },
  ],
  activities: {
    one: { title: 'Worth it?', md: 'Talk with the student about two things they paid for recently: one cultural (a film, a book, a concert) and one practical (a phone, a trip). For each, they evaluate it with modifiers and concession, then compare its value for money with something else. Note five sentences and correct them together at the end.' },
    small: { title: 'The arts budget', md: 'Tell the group the town has a fixed arts budget and must cut one thing: the theatre, the gallery or the summer festival. Each student argues for keeping one, using comparison, quantifiers and evaluation (*by far the most popular, a handful of visitors, for all its faults*). The group reaches a decision and one student reports it in a formal sentence.' },
    group: { title: 'Review stations', md: 'Breakout rooms of three each get one topic in the chat (modifiers and evaluation, relative clauses, quantifiers and comparison). Each room writes three quiz questions for the class with one right answer each. Bring everyone back and run the quiz.' },
  },
  homework: { book: 'u13 u14', md: 'Do the unit 13 test and the unit 14 test in the book. Note your weakest area and practise it for 30 minutes. Bring your review and your report to the next class, which is exam practice for the Writing paper.' },
};
