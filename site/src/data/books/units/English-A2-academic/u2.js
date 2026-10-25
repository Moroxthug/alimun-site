// English A2 for study and exams, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Learning well',
  goal: 'Talk about how you learn and plan your study time.',
  art: 'snail',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading'], topics: ['study-habits', 'adverbs-of-frequency', 'going-to', 'goals', 'study-tips'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'How often do you study?',
      about: 'Talk about your study habits with the present simple and words like always, often and never.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Use the **present simple** for habits: things you do again and again. Words like *always*, *often* and *never* say **how often** you do them.' },
          { t: 'table', caption: 'How often?', explain: ['head', 'col1'], quiz: true, head: ['Word', 'How often'], rows: [
            ['always', 'every time'],
            ['usually', 'almost every time'],
            ['often', 'many times'],
            ['sometimes', 'some of the time'],
            ['hardly ever', 'almost never'],
            ['never', 'not at any time'],
          ] },
        ],
        [
          { t: 'text', md: 'These words go **before** most verbs, but **after** the verb *be* (*am*, *is*, *are*). In questions, they go after the person: *Do you often…?*' },
          { t: 'examples', items: [
            { s: 'I **usually** study in the evening.', n: 'Before the verb *study*.' },
            { s: 'She is **always** tired after work.', n: 'After *is*, a form of *be*.' },
            { s: 'Do you **often** read in English?', n: 'In a question: *Do* + person + *often* + verb.' },
            { s: 'We **hardly ever** have homework at the weekend.', n: '*Hardly ever* means almost never.' },
            { s: 'I check my email **twice a day**.', n: 'Phrases like *every day* and *twice a day* usually go at the end.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Ask *How often do you…?* Answer with a word like *often*, or with a phrase: *every day*, *once a week*, *twice a month*.' },
        ],
        [
          { t: 'dialogue', title: 'Study habits', lines: [
            { who: 'Nadia', s: 'When do you usually study, Carlos?' },
            { who: 'Carlos', s: 'I usually study in the evening, after dinner. What about you?' },
            { who: 'Nadia', s: 'I always study in the morning. I’m never tired at seven o’clock!' },
            { who: 'Carlos', s: 'Wow. Do you listen to music when you study?' },
            { who: 'Nadia', s: 'Sometimes, but only music with no words. And you?' },
            { who: 'Carlos', s: 'I never listen to music. I often go to the library. It’s quiet there.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the word that says how often.', items: [
            { s: 'I [usually] study in the evening, after dinner.', why: '*Usually* means almost every time.' },
            { s: 'I’m [never] tired at seven o’clock.', why: '*Never* comes after *am*, a form of *be*.' },
            { s: 'I [often] go to the library.', why: '*Often* comes before the verb *go*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Put the words in the right form and order.', items: [
            { q: 'I ___ (always / revise) before a test.', a: ['always revise'], why: '*Always* goes before the verb: *always revise*.' },
            { q: 'My teacher ___ (always / be) on time.', a: ['is always', '’s always'], why: 'With *be*, the word goes after it: *is always*.' },
            { q: 'Kenji ___ (never / do) his homework on the bus.', a: ['never does'], why: '*Never* goes before the verb. *Kenji* is one person: *does*.' },
            { q: 'We ___ (often / be) tired on Monday mornings.', a: ['are often', '’re often'], why: 'With *be*, the word goes after it: *are often*.' },
            { q: 'Do you ___ (usually / study) at home?', a: ['usually study'], why: 'In a question: *Do you usually* + verb.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
            { q: '', o: ['She is always late for class.', 'She always is late for class.', 'Always she is late for class.'], why: 'With *be*, *always* goes after it: *is always*.' },
            { q: '', o: ['I hardly ever study at night.', 'I study hardly ever at night.', 'I hardly ever studies at night.'], why: '*Hardly ever* goes before the verb. With *I*, the verb has no *-s*.' },
            { q: '', o: ['Do you often read in English?', 'Do often you read in English?', 'Often do you read in English?'], why: 'In a question: *Do* + *you* + *often* + verb.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'He never forgets his dictionary.', why: '*Never* goes before the verb *forgets*.' },
            { a: 'They are always very quiet.', why: '*Always* goes after *are*.' },
            { a: 'I always write new words in a notebook.', why: '*Always* goes before the verb *write*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'My study plan',
      about: 'Plan your week, set goals and talk about plans with going to.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'A good study plan says **what** you are going to do and **when**. These words help you talk about it.' },
          { t: 'table', caption: 'Planning words', explain: ['head', 'col1'], quiz: true, head: ['Phrase', 'Meaning'], rows: [
            ['set a goal', 'decide what you want to do'],
            ['make a plan', 'decide when and how you do something'],
            ['revise', 'study something again before a test'],
            ['practise', 'do something many times to get better'],
            ['take a break', 'stop working for a short time'],
            ['a deadline', 'the last day or time to finish something'],
            ['meet a deadline', 'finish something on time'],
          ] },
          { t: 'tip', art: 'owl', md: 'In British English, *revise* means study again before a test. In American English, people say *review*.' },
        ],
        [
          { t: 'text', md: 'Use **be going to** + verb for plans: things you have decided to do.' },
          { t: 'examples', items: [
            { s: 'This week I’m **going to learn** twenty new words.', n: '*I’m going to* + verb: a plan.' },
            { s: 'Sara **is going to practise** speaking every day.', n: 'With *he*, *she* or a name: *is going to*.' },
            { s: 'We **aren’t going to study** late at night.', n: 'Negative: *am not*, *isn’t*, *aren’t* + *going to*.' },
            { s: 'What **are** you **going to do** this weekend?', n: 'Question: *are* + person + *going to*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Good goals are small and clear. *I’m going to learn ten new words by Friday* is better than *I’m going to learn a lot of English*.' },
        ],
        [
          { t: 'dialogue', title: 'Making a plan', lines: [
            { who: 'Jin', s: 'I want to pass the A2 exam in June, but I never have time to study.' },
            { who: 'Ms Okoro', s: 'Let’s make a plan. When are you free?' },
            { who: 'Jin', s: 'I’m free on Tuesday and Thursday evenings, and on Sunday morning.' },
            { who: 'Ms Okoro', s: 'Good. What are you going to do on Tuesdays?' },
            { who: 'Jin', s: 'I’m going to do my grammar homework.' },
            { who: 'Ms Okoro', s: 'And on Thursdays?' },
            { who: 'Jin', s: 'I’m going to practise reading. And on Sunday, I’m going to revise all the new words from the week.' },
            { who: 'Ms Okoro', s: 'That sounds great. Set a small goal for each day, and take a break every forty minutes.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Jin wants to take the exam in June.', a: 't', why: '“I want to pass the A2 exam in June.”' },
            { q: 'Jin is free on Monday evenings.', a: 'f', why: 'He is free on Tuesday and Thursday evenings, and on Sunday morning.' },
            { q: 'On Sundays, Jin is going to revise new words.', a: 't', why: '“On Sunday, I’m going to revise all the new words from the week.”' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the verbs and the words.', pairs: [
            ['take', 'a break'],
            ['set', 'a goal'],
            ['do', 'your homework'],
            ['meet', 'the deadline'],
            ['revise', 'for the test'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with the correct form of be going to.', items: [
            { q: 'I ___ (go) to the library on Saturday.', a: ['am going to go', '’m going to go'], why: 'With *I*: *am going to* + verb.' },
            { q: 'We ___ (not / watch) TV this evening. We have a test tomorrow.', a: ['aren’t going to watch', 'are not going to watch', '’re not going to watch'], why: 'Negative with *we*: *aren’t going to* + verb.' },
            { q: 'What ___ you going to study tonight?', a: ['are'], why: 'Question with *you*: *are you going to*…?' },
            { q: 'Lena ___ (start) a new course in May.', a: ['is going to start', '’s going to start'], why: 'With one person: *is going to* + verb.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which goal is small and clear?', items: [
            { q: '', o: ['I’m going to read one short article in English every day.', 'I’m going to read a lot.', 'I’m going to be very good at reading.'], why: 'A clear goal says what you do and how often.' },
            { q: '', o: ['I’m going to write three emails in English by Sunday.', 'I’m going to write better.', 'I’m going to write a lot of things.'], why: 'A clear goal has a number and a deadline: *three emails by Sunday*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Tips from other learners',
      about: 'Read four learners’ study tips and find the details.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'My best study tip', md: '**Aiko:** I go to work by bus, and the journey is forty minutes long. I always use this time for English. I learn five new words on the bus and I say them quietly to myself. It’s easy, and I never feel bored.\n\n**Daniel:** I study better with other people. Every Friday, I meet two classmates in a café and we only speak English for an hour. Sometimes we make mistakes, but that’s OK. We often laugh a lot!\n\n**Fatima:** I have two small children, so I don’t have much free time. I usually study for twenty minutes after they go to bed. On Sunday evening I write a short plan for the week, and I put it on the fridge.\n\n**Rafael:** I watch films in English with English subtitles. At first it was very difficult, but now I understand much more. I hardly ever stop the film now.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the tips. True, false or not given?', items: [
            { q: 'Aiko studies on the bus.', a: 't', why: '“I always use this time for English.” She learns new words on the bus.' },
            { q: 'Aiko’s journey is boring for her.', a: 'f', why: '“I never feel bored.”' },
            { q: 'Daniel’s classmates are from different countries.', a: 'ng', why: 'The text does not say where his classmates are from.' },
            { q: 'Daniel meets his classmates once a week.', a: 't', why: '“Every Friday”: that is once a week.' },
            { q: 'Fatima studies in the morning, before work.', a: 'f', why: 'She studies after her children go to bed, so in the evening.' },
            { q: 'Rafael watches films with subtitles in his own language.', a: 'f', why: 'He watches films “with English subtitles”.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the learner and the tip.', pairs: [
            ['Aiko', 'learns words on the way to work'],
            ['Daniel', 'practises speaking with classmates'],
            ['Fatima', 'makes a plan for each week'],
            ['Rafael', 'watches films in English'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: '', o: ['I usually study after dinner.', 'I study usually after dinner.', 'Usually I studies after dinner.'], why: '*Usually* goes before the verb. With *I*, the verb has no *-s*.' },
      { q: '', o: ['He is never late.', 'He never is late.', 'He is late never.'], why: 'With *be*, *never* goes after it.' },
      { q: 'What ___ you going to do on Saturday?', o: ['are', 'do', 'is'], why: 'Question with *you*: *are you going to*…?' },
      { q: 'Stop working for a short time: ___', o: ['take a break', 'set a goal', 'meet a deadline'], why: '*Take a break* means stop for a short time.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'How ___ do you study? Three times a week.', a: ['often'], why: '*How often* asks about habits.' },
      { q: 'She ___ (going to / practise) speaking tomorrow.', a: ['is going to practise', '’s going to practise'], why: 'With *she*: *is going to* + verb.' },
      { q: 'I need to ___ for my test. I want to study all the words again.', a: ['revise'], why: '*Revise* means study again before a test.' },
      { q: 'We ___ (hardly ever / be) at home on Saturdays.', a: ['are hardly ever', '’re hardly ever'], why: 'With *be*, the word goes after it: *are hardly ever*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the questions and the answers.', pairs: [
      ['How often do you read in English?', 'Every day, on the bus.'],
      ['When are you free?', 'On Tuesday evening.'],
      ['What are you going to do tonight?', 'I’m going to revise for my test.'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'She is always very busy.', why: '*Always* goes after *is*.' },
      { a: 'I’m going to learn ten new words.', why: '*I’m going to* + verb.' },
    ] },
  ],
};
