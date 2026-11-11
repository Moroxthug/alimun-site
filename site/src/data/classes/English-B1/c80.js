// English B1, class 80 (docs/LESSONS_PLAN.md). Review of units 15 and 16 (Sport and challenges; Ready for B1 and beyond). Draft for the owner's review.
export const LESSON = {
  id: 'c80',
  focus: 'By the end of the class every student can use the language of units 15 and 16 together in speaking and writing: *could*, *was able to* and *managed to*; *better and better* and *the more …, the more …*; sport words and instructions; *I wish* + past; and the right tense in a text. Most of the class is speaking, with a short slot to fix the mistakes you heard.',
  tips: [
    'Use your notes from the last classes: start with the two points the class found hardest.',
    'Keep corrections for the "Fix it" slot so the speaking flows.',
    'The homework is both unit tests; remind students the next classes are exam practice and the end-of-level check.',
    'Listen especially for *could* used for one success, and *I wish I have*.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Each student says one wish and one thing they managed to do this year.' },
    { min: 10, title: 'Mixed practice', md: 'Show board page 1. Students choose the forms and explain two of them.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Fix it', md: 'Show board page 2. Students fix the mistakes, then add two you heard during the activity.' },
    { min: 12, title: 'Exam corner', md: 'Show board page 3: Reading part 2 matching. Use "Everyone solves this" for 6 minutes, then reveal.' },
    { min: 8, title: 'Close', md: 'Explain what the speaking practice next class looks like. Set the unit tests as homework.' },
  ],
  board: [
    { title: 'Mixed practice', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: 'After two hours we ___ fix the car.', o: ['managed to', 'could', 'can'], why: 'One difficult success: *managed to*.' },
        { q: 'The ___ you practise, the easier it gets.', o: ['more', 'most', 'much'], why: '*the more …, the …*.' },
        { q: 'I wish I ___ more free time.', o: ['had', 'have', 'will have'], why: '*wish* + past simple.' },
        { q: 'I ___ tennis every Saturday since I was twelve.', o: ['have played', 'play', 'played'], why: '*since* + up to now: present perfect.' },
        { q: 'My team is getting ___.', o: ['better and better', 'more and more good', 'good and good'], why: '*better and better*.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'In the end she [could] win the race.', a: ['managed to', 'was able to'], why: 'One success: *managed to* or *was able to*.' },
        { s: 'I wish I [can] swim.', a: ['could'], why: '*can* → *could* after *wish*.' },
        { s: 'We [play] karate twice a week.', a: ['do'], why: '*do karate*.' },
        { s: 'The more I sleep, [more] energy I have.', a: ['the more'], why: 'Both halves need *the*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading part 2', blocks: [
      { t: 'text', md: '**Three people want to do a sport.** Ana wants to exercise outdoors with other people but has little money. Ben has a bad knee and needs something gentle. Chloe wants a competitive sport and trains every evening.\n\n**Clubs:** *A*: An indoor swimming club with gentle classes for people recovering from injuries. *B*: A free park running group that meets on Saturday mornings. *C*: A volleyball team that plays in a league and trains five evenings a week.' },
      { t: 'ex', kind: 'match', h: 'In the format of B1 Preliminary Reading part 2: match each person with the best club.', pairs: [
        ['Ana', 'B: free park running group'],
        ['Ben', 'A: gentle swimming classes'],
        ['Chloe', 'C: volleyball league team'],
      ] },
      { t: 'tip', art: 'owl', md: 'In Reading part 2, underline **every** need of each person (money, outdoors, a bad knee). The right text matches **all** of them, not only one.' },
    ] },
  ],
  activities: {
    one: { title: 'Two-minute talks', md: 'Give the student three topics: a challenge you managed, how your English has changed, your wishes for next year. They speak for two minutes on each, with no stopping. Note every mistake and use them in "Fix it".' },
    small: { title: 'Find someone who', md: 'In the chat, list: *managed to do something difficult this year*, *wishes they lived somewhere else*, *does a sport twice a week*, *has been learning English for over three years*. Students ask each other and give one detail for each yes.' },
    group: { title: 'Unit challenge', md: 'In breakout rooms of three, each room writes six quiz questions about units 15 and 16 (one sentence to fix, one tense to choose). Rooms swap quizzes through the chat, answer them, and report their score in the main room.' },
  },
  homework: { book: 'u15 u16', md: 'Do the unit tests of unit 15 (Sport and challenges) and unit 16 (Ready for B1 and beyond) in the book. Note any question you got wrong and bring it to the next class.' },
};
