// English B1, class 66 (docs/LESSONS_PLAN.md). Builds on book lesson u14:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c66',
  focus: 'By the end of the class every student uses *so* and *such* correctly to make opinions stronger (*so good, such a good film, such beautiful songs*) and gives results with *so … that* and *such … that*. Students should talk about films, concerts and events they loved or hated with real feeling, not only fill gaps.',
  tips: [
    'The rule in one line: *so* + adjective or adverb; *such* + (a / an) + adjective + noun. Draw it as two patterns on the board and point to them when correcting.',
    'The classic mistakes are *so a good film* and *a such good film*. *Such* always comes before *a*.',
    'With plural and uncountable nouns there is no *a*: *such beautiful songs, such terrible weather*. Students often add *a* here.',
    'Model the intonation: the stress is on *so* and *such*. It makes students sound much more natural and enthusiastic.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is the best film you have seen this year? What was so good about it?*' },
    { min: 12, title: 'So or such?', md: 'Show board page 1. Go through the patterns. Students sort the examples into *so* and *such*.' },
    { min: 10, title: 'So … that', md: 'Show board page 2. Students join the sentences with *so … that* and *such … that*.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: Reading Part 5. Students choose the word for each gap.' },
    { min: 5, title: 'Close', md: 'Each student finishes the sentence *Last weekend was so… that…* or *I had such a… that…*. Set the homework.' },
  ],
  board: [
    { title: 'So or such?', blocks: [
      { t: 'table', caption: 'So or such?', explain: ['head', 'col0'], head: ['Pattern', 'Example'], rows: [
        ['so + adjective', 'The concert was so loud.'],
        ['so + adverb', 'The actors spoke so quickly.'],
        ['such + a / an + adjective + singular noun', 'It was such a strange ending.'],
        ['such + adjective + plural noun', 'They have such beautiful songs.'],
        ['such + adjective + uncountable noun', 'We had such terrible weather.'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose so or such.', items: [
        { q: 'The book was ___ exciting that I read it in one night.', o: ['so', 'such', 'such a'], why: 'Before an adjective alone: *so*.' },
        { q: 'It was ___ good film that we watched it twice.', o: ['such a', 'so', 'so a'], why: 'Before *a* + adjective + noun: *such a*.' },
        { q: 'They played ___ beautiful music all evening.', o: ['such', 'so', 'such a'], why: 'Uncountable noun, no *a*: *such*.' },
      ] },
    ] },
    { title: 'So … that, such … that', blocks: [
      { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the word given.', items: [
        { q: 'The film was very sad. I cried.', cue: 'so', a: ['The film was so sad that I cried.', 'The film was so sad I cried.'], why: '*so* + adjective + *that* + result.' },
        { q: 'It was a very long concert. We missed the last bus.', cue: 'such', a: ['It was such a long concert that we missed the last bus.', 'It was such a long concert we missed the last bus.'], why: '*such a* + adjective + noun + *that* + result.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'It was [a such] funny show.', a: ['such a'], why: '*Such* comes before *a*.' },
        { s: 'There were [such many] people that we couldn’t move.', a: ['so many'], why: 'With *many / much*: *so many*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading Part 5', blocks: [
      { t: 'text', md: 'In the format of B1 Preliminary Reading Part 5: choose the best word for each gap.\n\n*Last night’s festival was (1) ___ success. There were (2) ___ many people that the organisers had to close the gates. The music was (3) ___ good that nobody wanted to go home.*' },
      { t: 'ex', kind: 'choice', h: 'Choose the best word for each gap.', items: [
        { q: '(1)', o: ['such a', 'so', 'so a'], why: '*a* + noun: *such a success*.' },
        { q: '(2)', o: ['so', 'such', 'too'], why: '*so many* + noun + *that*.' },
        { q: '(3)', o: ['so', 'such', 'such a'], why: 'Adjective alone: *so good*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Reading Part 5, look at the word **after** the gap. A noun (with or without *a*) needs *such*; an adjective alone, or *many / much*, needs *so*.' },
    ] },
  ],
  activities: {
    one: { title: 'Best and worst', md: 'Ask the student about the best and worst film, concert, meal and holiday of their life. For each, they must use *so*, *such* and one *so / such … that* sentence. Note two sentences to correct at the end. Then the student interviews you.' },
    small: { title: 'Exaggeration game', md: 'Each student tells a very short story about an ordinary event (going to the supermarket) but exaggerates everything with *so* and *such* (*The queue was so long that I grew a beard*). The group votes for the funniest exaggeration and corrects any mistakes together.' },
    group: { title: 'Review it', md: 'Breakout rooms of three choose a film or series everyone knows and prepare a spoken review of one minute, using at least four *so / such* sentences. Bring the rooms back to present; the class decides which review makes them most want to watch.' },
  },
  homework: { book: 'u14:p1', md: 'Finish book lesson 1 of unit 14. Then write five sentences about a film, book or concert you loved, using *so*, *such* and *so / such … that*.' },
};
