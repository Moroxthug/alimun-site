// English A2, class 26 (docs/LESSONS_PLAN.md). Builds on book lesson u5:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c26',
  focus: 'By the end of the class every student can talk about fixed arrangements with the **present continuous** (*I’m meeting Sara on Friday*), use **at, on** and **in** with times, days, dates and months, and say dates with ordinal numbers (*the third of May*). The goal is to make and check arrangements in a natural conversation.',
  tips: [
    'Students are surprised that the present continuous can talk about the future. Show that the future meaning comes from a time word: *I’m working* (now) vs *I’m working on Saturday* (an arrangement).',
    'Keep the difference with *going to* light: often both are correct. Present continuous is best when there is a time, a place and another person (it is in the diary).',
    '*at, on, in* errors are very common for every language background. Use the board table and correct them every time.',
    'Ordinals are hard to say: *fifth, twelfth, twentieth*. Drill them chorally, and remind students that we write *3 May* but say *the third of May*.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Show your (real or invented) diary for next week on board page 1. Students ask *What are you doing on Tuesday?* and you answer.' },
    { min: 10, title: 'Arrangements', md: 'Board page 1. Students find the time words in the examples and say why each sentence is about the future. Then they complete the gaps.' },
    { min: 10, title: 'at, on, in', md: 'Board page 2. Go through the table, then students choose the right word in the exercise one by one.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Dates', md: 'Board page 3. Say the dates aloud together. Students match the numbers and the words, then each says their birthday as a date.' },
    { min: 5, title: 'Exam corner', md: 'Board page 4: Listening Part 2. Read the voicemail aloud twice at a normal speed; students complete the notes.' },
    { min: 5, title: 'Close', md: 'Each student tells the class one arrangement for next week with the day and time. Set the homework.' },
  ],
  board: [
    { title: 'What are you doing on Friday?', blocks: [
      { t: 'examples', items: [
        { s: 'I’**m meeting** Sara **on Friday evening**.', n: 'A fixed arrangement, with a person and a time.' },
        { s: 'We’**re flying** to Rome **next Tuesday**.', n: 'The tickets are booked.' },
        { s: 'What **are** you **doing** this weekend?', n: 'Asking about arrangements.' },
      ] },
      { t: 'ex', kind: 'gap', h: 'Write the verb in the present continuous.', items: [
        { q: 'I ___ (see) the dentist on Thursday.', a: ['am seeing', '’m seeing'], why: 'An arrangement: *I’m seeing*.' },
        { q: 'My parents ___ (come) to stay next week.', a: ['are coming', '’re coming'], why: '*they are coming*.' },
        { q: '___ on Saturday? (you / work)', a: ['Are you working'], why: 'Question: *Are you working …?*' },
      ] },
    ] },
    { title: 'at, on, in', blocks: [
      { t: 'table', caption: 'Time words', explain: ['head', 'col1'], head: ['Word', 'Use it with'], rows: [
        ['at', 'clock times, the weekend, night'],
        ['on', 'days and dates'],
        ['in', 'months, years, seasons, the morning'],
        ['no word', 'this, next, last, every, tomorrow'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
        { q: 'The concert is ___ Saturday.', o: ['on', 'in', 'at'], why: 'Days: *on*.' },
        { q: 'I’m starting a new job ___ September.', o: ['in', 'on', 'at'], why: 'Months: *in*.' },
        { q: 'Let’s meet ___ half past six.', o: ['at', 'on', 'in'], why: 'Clock times: *at*.' },
        { q: 'What are you doing ___ the weekend?', o: ['at', 'in', 'on'], why: 'In British English: *at the weekend*.' },
      ] },
    ] },
    { title: 'Dates', blocks: [
      { t: 'text', md: 'We write **3 May** or **May 3**, but we say **the third of May** or **May the third**. Ordinal numbers: *first, second, third, fourth, fifth, …, twelfth, twentieth, twenty-first*.' },
      { t: 'ex', kind: 'match', h: 'Match the numbers and the words.', pairs: [
        ['1st', 'first'],
        ['2nd', 'second'],
        ['5th', 'fifth'],
        ['12th', 'twelfth'],
        ['22nd', 'twenty-second'],
      ] },
    ] },
    { title: 'Exam corner: Listening Part 2', blocks: [
      { t: 'reading', title: 'For the teacher to read aloud twice', md: 'Hi, it’s Emma from the sports club. The trip to the lake is on Saturday the fourteenth, not the thirteenth. The bus leaves at half past eight from the station. Please bring lunch and a jacket. The trip costs twelve pounds.' },
      { t: 'ex', kind: 'gap', h: 'In the format of the A2 Key exam: complete the notes. Write one word or a number.', items: [
        { q: 'Day of the trip: Saturday the ___ (number)', a: ['14', '14th', 'fourteenth'], why: 'Emma says *the fourteenth, not the thirteenth*.' },
        { q: 'The bus leaves from the ___.', a: ['station'], why: '*from the station*.' },
        { q: 'Bring lunch and a ___.', a: ['jacket'], why: '*bring lunch and a jacket*.' },
        { q: 'Price: £___', a: ['12', 'twelve'], why: '*twelve pounds*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Listening Part 2 you complete notes with **one word, a number or a date**. Read the notes first and guess the kind of word. Speakers often say two numbers and correct one: listen to the end.' },
    ] },
  ],
  activities: {
    one: { title: 'Find a time', md: 'You and the student each fill a simple diary for next week (in the chat or on paper) with four arrangements. Then try to find a free time for a coffee: *Are you free on Wednesday afternoon? – No, I’m meeting my boss at three.* Keep going until you find a time.' },
    small: { title: 'The busy week', md: 'Each student writes four arrangements for next week. In pairs, they try to arrange a meeting (a film, a coffee, a run). Swap pairs twice. Each student reports one arrangement they made: *I’m meeting Omar on Thursday at seven.*' },
    group: { title: 'Plan the class party', md: 'In breakout rooms of three or four, students plan a class party: day, date, time, place, what each person is bringing. They write the arrangements in the chat with the present continuous (*Sara is bringing drinks*). Back together, rooms compare and the class chooses one plan.' },
  },
  homework: { book: 'u5:p2', md: 'Finish book lesson 2 of unit 5 (Are you free on Friday?), including the speaking task. Then write your diary for next week: five arrangements with the day, time and the present continuous.' },
};
