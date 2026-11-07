// English A1, class 29 (docs/LESSONS_PLAN.md). Review class for book unit u5. Draft for the owner's review.
export const LESSON = {
  id: 'c29',
  focus: 'A speaking-heavy review of unit 5. By the end of the class every student can describe a home and a neighbourhood fluently for one minute: rooms and furniture, *there is / there are*, where things are, and what places are near. The teacher listens for the typical unit 5 mistakes and corrects them in a short, focused slot.',
  tips: [
    'Let students speak first and correct later. Write down mistakes you hear during the activities and use them in the “Fix it” stage.',
    'Typical unit 5 mistakes: *There is two …*, *in the wall*, *in front the …*, *Is a bank near here?* (missing *there*). Make sure each one appears in the correction slot.',
    'Weaker students can prepare their one-minute talk in notes (words, not sentences) for two minutes before speaking.',
    'The unit test is the homework, so do not test today: today is for confidence.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Quick-fire questions round the class: *Is there a TV in your bedroom? Where is your phone? Is there a park near your home?*' },
    { min: 10, title: 'Quick review', md: 'Board pages 1 and 2. The class solves both exercises together, fast.' },
    { min: 20, title: 'Activity', md: 'Use the activity for your class size below. Note mistakes as you listen.' },
    { min: 10, title: 'Fix it', md: 'Board page 3, plus the mistakes you noted. Students correct them together.' },
    { min: 10, title: 'Exam corner', md: 'Board page 4: an A2 Key style reading task about a town.' },
    { min: 5, title: 'Close', md: 'Ask each student what they find easy and what is still difficult in unit 5. Set the unit test as homework.' },
  ],
  board: [
    { title: 'Quick review: there is, there are', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
        { q: '___ a supermarket near your flat?', o: ['Is there', 'There is', 'Are there'], why: 'A question about one thing: *Is there …?*' },
        { q: 'There ___ any chairs in the garden.', o: ['aren’t', 'isn’t', 'not'], why: 'More than one, negative: *there aren’t any*.' },
        { q: 'There ___ a sofa and two armchairs.', o: ['is', 'are', 'be'], why: 'The first thing is one sofa: *there is*.' },
      ] },
    ] },
    { title: 'Quick review: where is it?', blocks: [
      { t: 'ex', kind: 'gap', h: 'Write the preposition.', items: [
        { q: 'The picture is ___ the wall.', a: ['on'], why: 'A wall is a surface: *on*.' },
        { q: 'The cat is sleeping ___ the bed. You can’t see it!', a: ['under'], why: 'You can’t see it, so it is *under* the bed.' },
        { q: 'The café is ___ the bank and the library.', a: ['between'], why: 'Two places, one on each side: *between*.' },
        { q: 'The bus stop is ___ front of the station.', a: ['in'], why: 'The phrase is *in front of*.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'These are typical mistakes. Find and fix each one.', items: [
        { s: 'There [is] three bedrooms in our house.', a: ['are'], why: 'Three bedrooms: *there are*.' },
        { s: '[Is a bank] near here?', a: ['Is there a bank'], why: 'The question needs *there*.' },
        { s: 'My keys are [in] the table.', a: ['on'], why: 'On top of the table: *on*.' },
        { s: 'There aren’t [no] shops in my street.', a: ['any'], why: 'One negative word is enough: *aren’t any*.' },
      ] },
    ] },
    { title: 'Exam corner: reading', blocks: [
      { t: 'reading', title: 'Welcome to Millbridge', md: 'Millbridge is a small town by a river. In the centre there is a market square with cafés and a library. There isn’t a cinema, but there is a big sports centre next to the station. The market is open on Saturdays.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the right answer.', items: [
        { q: 'What is in the market square?', o: ['cafés and a library', 'a cinema', 'the station'], why: '*there is a market square with cafés and a library*.' },
        { q: 'Where is the sports centre?', o: ['next to the station', 'in the market square', 'by the river'], why: '*a big sports centre next to the station*.' },
        { q: 'When can you go to the market?', o: ['on Saturdays', 'every day', 'on Sundays'], why: '*The market is open on Saturdays.*' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'One-minute talk', md: 'The student talks for one minute about their home and their neighbourhood without stopping. You time it and note mistakes. Give feedback, then the student repeats the talk and tries to fix those mistakes. Finish with your own one-minute talk; the student asks you three questions.' },
    small: { title: 'Interview and report', md: 'In pairs, students interview each other about their homes and neighbourhoods (five questions each, e.g. *Is there a garden? What is near your flat?*). Then each student tells the group about their partner’s home: *In Ana’s flat there are two bedrooms …*' },
    group: { title: 'The best neighbourhood', md: 'In breakout rooms of three, each student describes their neighbourhood for one minute; the others ask two questions each. Each room chooses the neighbourhood they would like to live in and posts three reasons in the chat. Back together, read the reasons and correct mistakes from the chat on the board.' },
  },
  homework: { book: 'u5', md: 'Do the unit 5 test in the book. Then record yourself (or write) a one-minute description of your home and your neighbourhood.' },
};
