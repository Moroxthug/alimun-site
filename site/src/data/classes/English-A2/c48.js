// English A2, class 48 (docs/LESSONS_PLAN.md). Level test: ready for B1 (owner's test from A2 to B1). Draft for the owner's review.
export const LESSON = {
  id: 'c48',
  focus: 'By the end of the class every student has taken the A2 level test: a written test on the board covering all eight units, and a short speaking test with the teacher. A student is **ready for B1** with about **70% on the written test** and **clear speaking** on the main forms of the level (present simple and continuous, past simple and continuous, *going to*, comparatives and superlatives, the present perfect for experiences, and polite requests and invitations). Results are told to each student privately; anyone not ready takes a re-test after two weeks.',
  tips: [
    'Tell students at the start that this is a check of what they can do, and that a re-test is normal and possible after two weeks.',
    'Use "Everyone solves this" for each written page, so every student answers alone; look at each student’s work before revealing.',
    'For speaking, use the criteria on board page 5 and note one strength and one point to work on for each student.',
    'Never announce scores in front of the class. Send each result privately by message after the class, with the next steps.',
    'For students who are not ready, name the two units to repeat and set the re-test date before the class ends.',
  ],
  plan: [
    { min: 3, title: 'Start', md: 'Explain the parts: four written pages (about 25 minutes) and a short speaking test for each student.' },
    { min: 25, title: 'Written test', md: 'Show board pages 1 to 4 one by one with "Everyone solves this" (6 minutes each). Collect each student’s work; reveal the answers only at the end.' },
    { min: 22, title: 'Speaking test', md: 'Ask each student the questions on board page 5 for about two minutes each and use the criteria. Students who are waiting look at their written work and the answers.' },
    { min: 5, title: 'Answers', md: 'Reveal the answers to the written pages. Students count their score privately.' },
    { min: 5, title: 'Close', md: 'Thank the class. Tell them you will send each person their result and next steps by message today. Set the homework.' },
  ],
  board: [
    { title: 'Part 1: grammar (units 1 to 4)', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: 'Listen! The baby ___.', o: ['is crying', 'cries', 'cried'], why: 'Happening now: present continuous.' },
        { q: 'We ___ to the beach last Sunday.', o: ['went', 'go', 'have gone'], why: '*last Sunday*: past simple.' },
        { q: 'How ___ sugar do you want?', o: ['much', 'many', 'a lot'], why: 'Sugar is uncountable: *how much*.' },
        { q: 'My new flat is ___ than my old one.', o: ['bigger', 'more big', 'biggest'], why: 'Two things: comparative *bigger*.' },
        { q: 'There ___ two banks in my street.', o: ['are', 'is', 'be'], why: 'Plural: *there are*.' },
      ] },
    ] },
    { title: 'Part 2: grammar (units 5 to 8)', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: 'I ___ visit my aunt next weekend. I’ve bought the ticket.', o: ['am going to', 'will to', 'go to'], why: 'A plan: *going to*.' },
        { q: 'You have a cold. You ___ stay in bed.', o: ['should', 'should to', 'must to'], why: 'Advice: *should* + verb.' },
        { q: 'I was cooking when the phone ___.', o: ['rang', 'was ringing', 'rings'], why: 'The short event: past simple.' },
        { q: 'Have you ever ___ to Australia?', o: ['been', 'gone', 'went'], why: 'An experience: *been*.' },
        { q: 'It’s the ___ day of the year.', o: ['hottest', 'most hot', 'hotter'], why: 'Superlative: *the hottest*.' },
      ] },
    ] },
    { title: 'Part 3: find the mistake', blocks: [
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
        { s: 'She [don’t] like coffee.', a: ['doesn’t', 'does not'], why: 'With *she*: *doesn’t*.' },
        { s: 'I [have met] my best friend in 2015.', a: ['met'], why: '*in 2015*: past simple.' },
        { s: 'Would you like [come] to dinner?', a: ['to come'], why: '*Would you like* + *to* + verb.' },
        { s: 'He is [more tall] than his brother.', a: ['taller'], why: 'A short word: *taller*.' },
      ] },
    ] },
    { title: 'Part 4: reading', blocks: [
      { t: 'reading', title: 'A message from Leo', md: 'Hi Sara! I’m back from Ireland. We were there for ten days and it rained almost every day, but we loved it. The people were really friendly. The best part was a boat trip to a small island, where we saw dolphins. Next year I’m going to go back with my parents. Have you ever been there? Leo' },
      { t: 'ex', kind: 'tf', h: 'Read the message. Are the sentences true or false?', items: [
        { q: 'Leo stayed in Ireland for ten days.', a: 't', why: '*We were there for ten days.*' },
        { q: 'The weather was good.', a: 'f', why: '*it rained almost every day*.' },
        { q: 'Leo saw dolphins from a boat.', a: 't', why: '*a boat trip… where we saw dolphins*.' },
        { q: 'Leo is going to go back with friends.', a: 'f', why: 'He is going back *with my parents*.' },
      ] },
    ] },
    { title: 'Part 5: speaking (for the teacher)', blocks: [
      { t: 'text', md: '**Questions (about two minutes each student):** Tell me about your daily routine. What did you do last weekend? What are you going to do next summer? What’s the most interesting place you have been to? When did you go? Your friend is ill: what should they do?\n\n**Ready for B1 when the student:** answers every question with at least two sentences; uses the right tense for present, past, plans and experiences most of the time; can be understood without effort; and can ask a question back.\n\n**Result:** about 70% on parts 1 to 4 and these speaking points = **ready for B1**. Below that: repeat the two weakest units and take the re-test after two weeks.' },
    ] },
  ],
  activities: {
    one: { title: 'Test and feedback', md: 'The student does the written pages alone with the timer, then the speaking questions. Finish with ten minutes of feedback: the score, one strength, the two units to repeat if needed, and the date of the re-test or the first B1 class.' },
    small: { title: 'Private results', md: 'While you test each student’s speaking in a breakout room, the others correct their own written work with the answers. After the class, send each student a private message with their result, a strength and their next step.' },
    group: { title: 'Speaking rotation', md: 'Run the written test for everyone together. For speaking, send students to breakout rooms in pairs; visit each room for four minutes and test both students, one after the other. Waiting rooms practise the speaking questions together. Send results privately after the class.' },
  },
  homework: { book: 'u1 u2 u3 u4 u5 u6 u7 u8', md: 'Read your teacher’s message with your result. If you are ready for B1, write a short paragraph (50 words) about what you want to do with your English next. If not yet, repeat the unit tests of the two units your teacher names and practise them before the re-test in two weeks.' },
};
