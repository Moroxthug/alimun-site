// English B1, class 68 (docs/LESSONS_PLAN.md). Builds on book lesson u14:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c68',
  focus: 'By the end of the class every student can talk about kinds of films, books, series and music, recommend something to another person and say why (*I’d recommend it to anyone who likes…*, *It’s worth watching because…*), and avoid the common errors *recommend you this book* and *it’s worth to see*. The exam focus is Reading Part 2: matching people to the right recommendation.',
  tips: [
    'The two key structures are *recommend + thing + to + person* (*I recommend this book to you*) and *worth + -ing* (*It’s worth seeing*). Students from many language backgrounds say *recommend you* and *worth to see*.',
    '*The film was boring* (the film causes it) and *I was bored* (my feeling) come back here from unit 11. Correct every time.',
    '*Lyrics* (the words of a song), not *letters*; *a series* is both singular and plural. These are frequent false friends.',
    'Recommending is real communication: let students actually recommend things to each other and decide whether to watch them.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What are you watching, reading or listening to at the moment? Would you recommend it?*' },
    { min: 10, title: 'Kinds of films and books', md: 'Show board page 1. Students match the words to the definitions and give a title they know for each one.' },
    { min: 10, title: 'Recommending', md: 'Show board page 2. Go through the phrases and correct the sentences together.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 15, title: 'Exam corner', md: 'Show board page 3: Reading Part 2. Students underline the conditions for each person and choose the best recommendation.' },
    { min: 5, title: 'Close', md: 'Each student recommends one thing to the person on their left (or the next name in the list) in one sentence. Set the homework.' },
  ],
  board: [
    { title: 'Kinds of films and books', blocks: [
      { t: 'ex', kind: 'match', h: 'Match each word with its meaning.', pairs: [
        ['a thriller', 'an exciting story with danger or crime'],
        ['a comedy', 'a funny film or show'],
        ['a documentary', 'a film about real facts and events'],
        ['science fiction', 'a story about the future, space or technology'],
        ['a biography', 'the story of a real person’s life'],
        ['a series', 'a show with many episodes'],
      ] },
    ] },
    { title: 'Recommending', blocks: [
      { t: 'table', caption: 'Recommending something', explain: ['head', 'col1'], head: ['Say', 'When'], rows: [
        ['You should watch / read / listen to…', 'a strong recommendation'],
        ['I’d recommend it to anyone who likes…', 'say who it is for'],
        ['It’s worth watching because…', 'give a reason'],
        ['If you like…, you’ll love…', 'compare with something they know'],
        ['It’s not really my thing, but…', 'a balanced opinion'],
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I [recommend you] this book. It’s amazing.', a: ['recommend'], why: '*Recommend* + thing (+ *to* + person): *I recommend this book*.' },
        { s: 'The museum is worth [to visit].', a: ['visiting'], why: '*Worth* + *-ing*.' },
        { s: 'I didn’t like the film. It was very [bored].', a: ['boring'], why: 'The film causes the feeling: *boring*.' },
        { s: 'I love the [letters] of this song.', a: ['lyrics'], why: 'The words of a song are the *lyrics*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading Part 2', blocks: [
      { t: 'text', md: 'In the format of B1 Preliminary Reading Part 2: read what each person wants, then choose the best recommendation.\n\n**A:** *Deep Blue*, a documentary series about life in the ocean, six short episodes.\n\n**B:** *The Last Code*, a long science-fiction novel full of action, set in the year 3000.\n\n**C:** *Laugh Out Loud*, a comedy film, perfect for families, only 85 minutes.' },
      { t: 'ex', kind: 'choice', h: 'Choose the best recommendation for each person.', items: [
        { q: 'Kim wants something funny to watch with her children this evening.', o: ['C', 'A', 'B'], why: 'Funny, for families, and short enough for one evening.' },
        { q: 'Ravi loves nature and wants to learn something, but he only has twenty minutes a day.', o: ['A', 'B', 'C'], why: 'A documentary about the ocean, in short episodes.' },
        { q: 'Ana wants a long book about the future for her holiday.', o: ['B', 'A', 'C'], why: 'A long science-fiction novel.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Reading Part 2, each person usually has **two or three needs** (who it is for, how long, what kind). The right text matches all of them, not just one.' },
    ] },
  ],
  activities: {
    one: { title: 'Recommendation swap', md: 'Ask the student about their tastes in films, books and music. Recommend two things to them using the phrases on the board, and ask them to recommend two things to you, with reasons. Decide together which one you will each try this week.' },
    small: { title: 'The perfect match', md: 'Each student writes their tastes in the chat (*I like thrillers and long books; I hate horror*). The others recommend one film, book or series for each person with a reason. Each student chooses the best recommendation they received and explains why.' },
    group: { title: 'Streaming panel', md: 'Breakout rooms of three are a panel choosing the "film of the month" for the class. Each student proposes one title and recommends it; the room must agree on one using balanced opinions. Bring the rooms back; the class votes for the overall winner.' },
  },
  homework: { book: 'u14:p3', md: 'Finish book lesson 3 of unit 14. Then write a recommendation of about 60 words for a friend: what it is, why it is worth watching or reading, and who would enjoy it.' },
};
