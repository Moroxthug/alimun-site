// English B1, class 70 (docs/LESSONS_PLAN.md). Review of units 13 and 14. Draft for the owner's review.
export const LESSON = {
  id: 'c70',
  focus: 'By the end of the class every student has used the main language of units 13 and 14 in speaking: present and past deduction (*must be, might have been, can’t have*), certainty words and *it looks as if*, *so / such*, contrast words (*although, however, despite*) and recommending. The most common mistakes from both units are corrected, and students know what to practise before the two unit tests.',
  tips: [
    'Keep explanations to one sentence: the aim is to use the language and fix mistakes, not to teach it again.',
    'The two forms students mix most are present and past deduction: *She must be tired* (now) and *She must have been tired* (then). Ask *now or then?* every time.',
    'Top mistakes to listen for: *must to be*, *must forgot*, *despite of*, *although…, but…*, *so a good film*, *recommend you*, *worth to see*.',
    'Combine the units in the activities: a mystery about a film or a concert lets students use deduction, *so / such* and contrast in one conversation.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Show a strange photo from an event (an empty concert hall, a cinema queue in the rain). Each student makes one guess and one opinion.' },
    { min: 12, title: 'Deduction', md: 'Show board page 1. Students choose the right form, saying *now* or *then* each time.' },
    { min: 10, title: 'Opinions and contrast', md: 'Show board page 2. Students correct the sentences and explain the rule.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: Reading Part 6 open cloze mixing both units. Students work alone, then check together.' },
    { min: 5, title: 'Close', md: 'Each student names one point from units 13 and 14 they want to practise more. Set the homework.' },
  ],
  board: [
    { title: 'Deduction: now or then?', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: 'Their car isn’t here. They ___ out.', o: ['must have gone', 'must go', 'can’t have gone'], why: 'A guess about the past, and we are almost sure: *must have gone*.' },
        { q: 'You’ve been running for an hour. You ___ exhausted.', o: ['must be', 'must have', 'can’t be'], why: 'A guess about now: *must be*.' },
        { q: 'He ___ the film already. It only came out today.', o: ['can’t have seen', 'must have seen', 'might see'], why: 'Almost sure it did not happen: *can’t have seen*.' },
        { q: 'I’m not sure where Pia is. She ___ at the gym.', o: ['might be', 'must have', 'can’t be'], why: 'Possible, now: *might be*.' },
      ] },
    ] },
    { title: 'Opinions and contrast', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'It was [so a] beautiful evening.', a: ['such a'], why: 'Before *a* + adjective + noun: *such a*.' },
        { s: '[Despite of] the price, the show was full.', a: ['Despite', 'In spite of'], why: '*Despite* has no *of*.' },
        { s: 'Although the ending was weak, [but I] enjoyed it.', a: ['I'], why: 'Only one linker: no *but* after *although*.' },
        { s: 'I can [recommend you] this series.', a: ['recommend'], why: '*Recommend* + thing (+ *to* + person).' },
        { s: 'The exhibition is worth [to see].', a: ['seeing'], why: '*Worth* + *-ing*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading Part 6', blocks: [
      { t: 'text', md: 'In the format of B1 Preliminary Reading Part 6: write **one word** in each gap.' },
      { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
        { q: 'The concert was ___ good that we stayed until midnight.', a: ['so'], why: 'Adjective alone + *that*: *so*.' },
        { q: '___ the rain, hundreds of people came to the festival.', a: ['Despite'], why: '*Despite* + noun.' },
        { q: 'The singer must ___ been very nervous before the show.', a: ['have'], why: 'Past deduction: *must have been*.' },
        { q: 'It looks ___ if the band is going to play again.', a: ['as'], why: 'Fixed phrase: *it looks as if*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Reading Part 6, after you fill each gap, **read the whole sentence again**. If it does not sound like a complete, natural sentence, try another word.' },
    ] },
  ],
  activities: {
    one: { title: 'The cancelled concert', md: 'Tell the student a band cancelled a concert at the last minute. The student makes guesses about what happened (*They must have…*), then gives a balanced opinion of the band using contrast words, and finally recommends another band or film instead. Correct two mistakes at the end.' },
    small: { title: 'Review circle', md: 'Each student describes an event they went to (a film, concert, match) with *so / such* and one contrast sentence. After each description, the others make one guess about the event with a modal (*It must have been crowded*). The speaker says if the guess is right.' },
    group: { title: 'Mystery critics', md: 'Breakout rooms of three: a film star has disappeared the day before a premiere. Rooms agree on what might have happened, using past modals, then write a short balanced review of the film using *although, however* and *so / such*. Bring the rooms back to share both parts.' },
  },
  homework: { book: 'u13 u14', md: 'Do the unit tests of units 13 and 14 in the book. Then go back to the lessons with your lowest scores and repeat their exercises.' },
};
