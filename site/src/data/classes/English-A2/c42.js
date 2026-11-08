// English A2, class 42 (docs/LESSONS_PLAN.md). Builds on book lesson u8:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c42',
  focus: 'By the end of the class every student can compare one thing with all the others in a group using superlatives (*the biggest*, *the most beautiful*, *the best*, *the worst*), spell the short forms correctly, and use them in real questions: *What’s the best film you know? Which is the most difficult language?*',
  tips: [
    'Students forget **the**: *It’s biggest city.* Insist on *the* every time: it is part of the superlative.',
    'Spelling rules confuse learners: *big – the biggest*, *happy – the happiest*, *nice – the nicest*. Show them on the board and practise five words.',
    'Learners mix comparatives and superlatives: *the most big*, *more biggest*. Contrast two things (comparative) and a group (superlative).',
    'After a superlative, English uses **in** for places (*the tallest building in the world*), not *of*. Correct *of the world*.',
    'Personal questions make this lesson fun: ask about the best food, the worst job, the most interesting place.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What’s the biggest city in your country? The most beautiful place? The best food?* Write the superlatives students use on the board.' },
    { min: 10, title: 'How to make superlatives', md: 'Show board page 1. Go through the table, then students complete the gaps with the right form.' },
    { min: 10, title: 'Comparing a group', md: 'Show board page 2. Students fix the mistakes, then say one true sentence about their own town.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3. Students read the short texts and choose the right answers.' },
    { min: 10, title: 'Close', md: 'Each student asks the class one *What’s the best…?* question. Set the homework.' },
  ],
  board: [
    { title: 'The biggest, the most beautiful', blocks: [
      { t: 'table', caption: 'Superlatives', explain: ['head', 'col0'], head: ['Adjective', 'Superlative'], rows: [
        ['short words: add -est', 'old – the oldest, cheap – the cheapest'],
        ['one vowel + one consonant: double it', 'big – the biggest, hot – the hottest'],
        ['-y: change to -iest', 'happy – the happiest, easy – the easiest'],
        ['long words: the most', 'beautiful – the most beautiful'],
        ['irregular', 'good – the best, bad – the worst, far – the furthest'],
      ] },
      { t: 'ex', kind: 'wordform', h: 'Write the superlative.', items: [
        { q: 'July is the ___ month of the year here.', base: 'hot', a: ['hottest'], why: 'One vowel + one consonant: double it: *hottest*.' },
        { q: 'This is the ___ film I have ever seen.', base: 'bad', a: ['worst'], why: '*bad* is irregular: *the worst*.' },
        { q: 'She is the ___ person in our class.', base: 'funny', a: ['funniest'], why: '-y changes to -iest.' },
        { q: 'It’s the ___ museum in the city.', base: 'interesting', a: ['most interesting'], why: 'A long word: *the most*.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Tokyo is [biggest] city in Japan.', a: ['the biggest'], why: 'A superlative needs *the*.' },
        { s: 'It’s the tallest building [of] the world.', a: ['in'], why: 'With places: *in the world*.' },
        { s: 'This is the [most cheap] hotel in town.', a: ['cheapest'], why: 'A short word: *the cheapest*.' },
      ] },
    ] },
    { title: 'Exam corner: three hotels', blocks: [
      { t: 'reading', title: 'Hotels in Bath', md: '**The Rose Hotel** is in the city centre. Rooms are from £90. It has the best breakfast in Bath.\n\n**Park View** is twenty minutes from the centre by bus. Rooms are from £60. It is the quietest hotel, with a big garden.\n\n**Station Inn** is next to the station. Rooms are from £75. It has the newest rooms, but it can be noisy.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: which hotel is it?', items: [
        { q: 'This hotel is the cheapest.', o: ['Park View', 'The Rose Hotel', 'Station Inn'], why: 'Park View is from £60.' },
        { q: 'This hotel is the best for food in the morning.', o: ['The Rose Hotel', 'Park View', 'Station Inn'], why: '*the best breakfast in Bath*.' },
        { q: 'This hotel is not good if you want to sleep.', o: ['Station Inn', 'Park View', 'The Rose Hotel'], why: '*it can be noisy*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Reading part 2 of A2 Key you match sentences to three short texts. Look for **words with the same meaning**: *cheapest* in the question, *£60* in the text.' },
    ] },
  ],
  activities: {
    one: { title: 'Best and worst', md: 'Ask the student ten questions with superlatives: the best meal, the worst job, the most beautiful place, the most expensive thing they bought. Then the student asks you. Finish with a short top three of their city, said aloud.' },
    small: { title: 'Class records', md: 'Students ask each other questions to find the class records: *Who has the longest name? Who lives the furthest from here? Who got up the earliest today?* They write the records in the chat with full superlative sentences.' },
    group: { title: 'Top three', md: 'Breakout rooms of three choose a topic (cities, films, foods) and agree on a top three with reasons (*It’s the most beautiful because…*). Each room presents its list; other rooms say if they agree.' },
  },
  homework: { book: 'u8:p1', md: 'Finish book lesson 1 of unit 8. Then write five true sentences with superlatives about your family or your town.' },
};
