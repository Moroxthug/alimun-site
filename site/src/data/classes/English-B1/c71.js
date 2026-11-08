// English B1, class 71 (docs/LESSONS_PLAN.md). Conversation: people, money and culture (units 11 to 14). Draft for the owner's review.
export const LESSON = {
  id: 'c71',
  focus: 'By the end of the class every student has spoken at length about people they know, money and shopping, and films, books or music, using the language of units 11 to 14 naturally: non-defining relative clauses, question tags, quantifiers, deduction with *must*, *might* and *can’t*, *so* and *such*, and contrast with *although* and *however*. Fluency comes first; accuracy gets a short slot at the end.',
  tips: [
    'Talk less than the students. Ask follow-up questions (*Why?*, *What happened next?*) instead of commenting.',
    'Write down mistakes while students talk, but correct them only in the last slot, so the conversation keeps going.',
    'Money can be a personal topic. Let students talk about people in general or invent a character if they prefer.',
    'Push for longer answers: a B1 speaker gives a reason and an example, not one sentence.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Show board page 1. Each student answers one question with a question tag at the end (*You like thrillers, don’t you?*) and the class answers.' },
    { min: 12, title: 'People', md: 'Show board page 2. In pairs or with you, students describe a person who matters to them with one non-defining relative clause and two personality words.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Culture', md: 'Show board page 3. Students recommend a film, book or song with *so* or *such* and one contrast (*Although it is long, …*).' },
    { min: 8, title: 'Exam corner', md: 'Show board page 4: B1 Preliminary Speaking part 4. Students discuss the question for two minutes in pairs.' },
    { min: 10, title: 'Correction slot', md: 'Show board page 5 and add the mistakes you collected. Students fix them together.' },
  ],
  board: [
    { title: 'Warm-up: you agree, don’t you?', blocks: [
      { t: 'text', md: 'Finish each sentence with a **question tag** and ask a classmate. The tag goes up if you really ask, and down if you expect *yes*.' },
      { t: 'ex', kind: 'select', h: 'Choose the right tag.', items: [
        { q: 'You’ve been to a concert this year, ___?', o: ['haven’t you', 'didn’t you', 'aren’t you'], why: 'Present perfect positive: *haven’t you*.' },
        { q: 'Money can’t buy happiness, ___?', o: ['can it', 'can’t it', 'does it'], why: 'Negative sentence, positive tag: *can it*.' },
        { q: 'Your brother lives abroad, ___?', o: ['doesn’t he', 'isn’t he', 'didn’t he'], why: 'Present simple with *he*: *doesn’t he*.' },
      ] },
    ] },
    { title: 'People who matter', blocks: [
      { t: 'examples', items: [
        { s: 'My aunt Rosa, **who** lives in Lisbon, is the funniest person I know.', n: 'Extra information between commas.' },
        { s: 'My best friend, **whose** parents run a café, never pays for coffee.', n: '*whose* for possession.' },
        { s: 'We fell out last year, but we **made up** a month later.', n: 'Relationship phrasal verbs from unit 11.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'My boss, [that] is very generous, paid for lunch.', a: ['who'], why: 'Non-defining clauses never use *that*.' },
        { s: 'I really look up [at] my grandfather.', a: ['to'], why: 'The phrasal verb is *look up to*.' },
      ] },
    ] },
    { title: 'Films, books and music', blocks: [
      { t: 'ex', kind: 'choice', h: 'Choose the best word.', items: [
        { q: 'It was ___ a long film that I fell asleep.', o: ['such', 'so', 'too'], why: '*such* + a + adjective + noun.' },
        { q: '___ it was expensive, the concert was worth it.', o: ['Although', 'However', 'Despite'], why: '*Although* + a full clause.' },
        { q: 'The book was great. ___, the ending was disappointing.', o: ['However', 'Although', 'In spite'], why: '*However* starts a new sentence.' },
      ] },
    ] },
    { title: 'Exam corner: Speaking part 4', blocks: [
      { t: 'text', md: '**Talk together for two minutes:** *Do you think people spend too much money on entertainment? What do you and your family spend money on in your free time?*' },
      { t: 'tip', art: 'owl', md: 'In B1 Preliminary Speaking part 4 you talk with your partner, not with the examiner. Ask your partner questions (*What about you?*, *Do you agree?*) and give reasons and examples.' },
    ] },
    { title: 'Correction slot', blocks: [
      { t: 'ex', kind: 'fix', h: 'Fix the mistakes.', items: [
        { s: 'I have [few] money this month, so I stay at home.', a: ['little', 'very little'], why: '*money* is uncountable: *little*.' },
        { s: 'She [must] be at home: her car isn’t there.', a: ['can’t', 'cannot'], why: 'You are sure it is not true: *can’t*.' },
        { s: '[Despite] it rained, we enjoyed the festival.', a: ['Although', 'Even though'], why: '*Despite* needs a noun; a full clause needs *although*.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'The life of a stranger', md: 'Show the student a photo of a person (from a magazine or online). Together, guess their job, their money habits and their tastes using *must*, *might* and *can’t*, then invent their story with relative clauses. Swap roles with a second photo.' },
    small: { title: 'Money dilemmas', md: 'Give each student a card in the chat: *You find 50 euros in the street*, *A friend asks to borrow money again*, *Your favourite band plays in another city*. Each student explains what they would do and why; the others ask follow-up questions and must use one question tag each.' },
    group: { title: 'Culture club', md: 'In breakout rooms of three, each student recommends a film, book or song in one minute (with *so*/*such* and one contrast). The room chooses one to "buy" with a shared budget of 20 euros and explains the choice in the main room.' },
  },
  homework: { book: 'u14:p3', md: 'Look again at unit 14, lesson 3 (recommending). Write 80 words recommending a film or book to a classmate, with *so* or *such* and one contrast word.' },
};
