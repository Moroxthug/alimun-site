// English C1, class 61 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u13:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c61',
  focus: 'By the end every student evaluates a work of art, a book or a performance with nuance: precise words for its effect (*thought-provoking, evocative, poignant, compelling*) and its faults (*derivative, formulaic, pedestrian, self-indulgent, overrated*), the idioms of judgement (*live up to the hype, fall flat, a slow burn, do justice to*) and concession (*For all its flaws…*, *While not without its faults…*). The speaking goal: give a balanced verdict that ends on a clear judgement.',
  tips: [
    'The shift from B2 to C1 here is from describing to evaluating. If a student retells the plot, stop them kindly and ask: *Did it work? What held it back?*',
    'Concession carries the judgement in the second half: *For all its beauty, the film lacks depth* is negative overall; *While not without its faults, it is a triumph* is positive. Ask students which way each sentence leans.',
    'Watch the false friends: *sensible* is not *sensitive*, *derivated* is not a word (*derivative*), and *a tour de force* keeps its French *de*.',
    'Small words make the judgement exact: *never quite, ultimately, at times, in places, for the most part*. Praise every student who uses one.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Think of something everyone loved and you did not, or the other way round. Why?* Each student answers in two or three sentences.' },
    { min: 12, title: 'Praise or criticism', md: 'Show board page 1. Go through the table, then students sort the words alone and explain two of them in their own words.' },
    { min: 10, title: 'A balanced verdict', md: 'Show board page 2. Students put the sentences in order, say which way each one leans, then fix the mistakes in pairs.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 4. Students rewrite the sentences alone, then count words together. Reveal the answers.' },
    { min: 5, title: 'Close', md: 'Each student gives a one-sentence balanced verdict with a concession on something they love. Set the homework.' },
  ],
  board: [
    { title: 'Praise or criticism?', blocks: [
      { t: 'table', caption: 'Idioms of judgement', explain: ['head', 'col1'], head: ['Phrase', 'Meaning'], rows: [
        ['live up to the hype', 'be as good as people said'],
        ['fall flat', 'fail to have the intended effect'],
        ['a slow burn', 'starts quietly and grows stronger'],
        ['do justice to', 'show something as well as it deserves'],
        ['divide opinion', 'some love it and some do not'],
        ['stay with you', 'remain in your mind long afterwards'],
      ] },
      { t: 'ex', kind: 'sort', h: 'Is each word praise or criticism?', groups: ['praise', 'criticism'], explain: ['groups'], items: [
        { s: 'evocative', g: 0, why: 'It brings back feelings or places.' },
        { s: 'pedestrian', g: 1, why: 'Dull, without imagination.' },
        { s: 'poignant', g: 0, why: 'Sad in a quiet, touching way.' },
        { s: 'self-indulgent', g: 1, why: 'Made for the artist more than the audience.' },
        { s: 'haunting', g: 0, why: 'It stays in your mind.' },
        { s: 'formulaic', g: 1, why: 'It follows a predictable recipe.' },
      ] },
    ] },
    { title: 'A balanced verdict', blocks: [
      { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
        { a: 'For all its beauty, the film ultimately lacks depth.', why: 'A concession, then the judgement: negative overall.' },
        { a: 'While not without its faults, the play is a triumph.', why: 'A weakness admitted first, then praise: positive overall.' },
        { a: 'It never quite lives up to the hype.', why: '*never quite*: good, but not as good as people said.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'In my view the band is hugely [overrating].', a: ['overrated'], why: 'The adjective is the past participle: *overrated*.' },
        { s: 'It was a deeply [thought-provoked] documentary.', a: ['thought-provoking'], why: 'The *-ing* form describes the effect on the audience.' },
        { s: 'The adaptation does not do [justice for] the novel.', a: ['justice to'], why: 'The idiom is *do justice to*.' },
        { s: 'It’s a slow [burning], but the last act is superb.', a: ['burn'], why: 'The idiom is *a slow burn*.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. Use between three and six words, including the word given.', items: [
        { q: 'Although the novel has its faults, it is a remarkable debut. (… , the novel is a remarkable debut.)', cue: 'FOR', a: ['For all its faults, the novel is a remarkable debut.'], why: '*For all its faults*: a concession before the judgement.' },
        { q: 'The film was not as good as people had expected. (The film did … people’s expectations.)', cue: 'LIVE', a: ['The film did not live up to people’s expectations.', 'The film didn’t live up to people’s expectations.'], why: '*live up to* expectations: be as good as expected.' },
        { q: 'Critics have disagreed strongly about the new opera. (The new opera … opinion among critics.)', cue: 'SHARPLY', a: ['The new opera has sharply divided opinion among critics.'], why: '*divide opinion*, with *sharply* for a strong split.' },
        { q: 'I am still thinking about the ending weeks later. (The ending … weeks.)', cue: 'STAYED', a: ['The ending has stayed with me for weeks.'], why: '*stay with you*: remain in your mind.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Part 4 often tests a fixed phrase as well as grammar. If the word given is a verb such as *live* or *stay*, ask which idiom it belongs to before you write.' },
    ] },
  ],
  activities: {
    one: { title: 'Defend your choice', md: 'The student chooses a film, book, album or exhibition they have strong feelings about and gives a balanced verdict in about a minute. You take the opposite side and push with idioms (*Doesn’t it fall flat in the middle?*). The student must concede one point and hold on to the judgement. Swap roles with a second work.' },
    small: { title: 'Divided opinion', md: 'Write three well-known titles in the chat. For each, students take turns: the first gives praise with a precise word, the next must add a fair criticism with a concession, and the third gives the final verdict. Score a point for every idiom from the table used correctly.' },
    group: { title: 'Critics’ panel', md: 'Breakout rooms of three each choose one recent film or series and prepare a two-minute panel review: one speaker praises, one criticises, one gives the balanced verdict with *For all its…* or *While not without…*. Back together, two rooms present and the class says which way each verdict leans.' },
  },
  homework: { book: 'u13:p3', md: 'Finish book lesson 3 of unit 13 if needed, then do lesson 4 (Writing a review). Write a short paragraph (about 100 words) evaluating a work that divided opinion, with two words for its effect, one idiom of judgement and a concession.' },
};
