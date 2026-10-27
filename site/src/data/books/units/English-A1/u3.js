// English A1, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'My day',
  goal: 'Say what you do every day and what time you do it.',
  art: 'sun',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['present simple', 'routines', 'time', 'days of the week', 'questions'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'I work in a shop',
      about: 'Use the present simple with I, you, we and they to say what you do every day.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'Use the **present simple** to talk about things you do every day, things that are always true, and where you live and work. With **I, you, we** and **they**, the verb has no ending: *I work. You live. We study. They play.* The verb does not change when you say it with time words such as **every day**, **in the morning** or **on Sundays**.' },
          { t: 'table', caption: 'Common verbs', explain: ['head', 'col1'], quiz: true, head: ['Verb', 'Example'], rows: [
            ['live', 'I live in London.'],
            ['work', 'We work in a school.'],
            ['study', 'You study English.'],
            ['play', 'They play football on Sundays.'],
            ['like', 'I like coffee.'],
            ['speak', 'We speak French.'],
            ['drink', 'I drink tea every morning.'],
            ['eat', 'They eat lunch at one o’clock.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Use **live** for where you have your home and **work** for your job: *I live in Leeds. I work in a bank.* Use **in** before a city or a country, and **at** before a company or a school: *I work at a school.*' },
        ],
        [
          { t: 'text', md: 'For the negative, use **do not** before the verb. The short form is **don’t**: *I don’t work. We don’t live in London.* The verb after *don’t* does not change. Never say *I don’t am* or *I don’t works*.' },
          { t: 'examples', items: [
            { s: 'I **work** in a shop.', n: 'A statement with *I*.' },
            { s: 'You **speak** English very well.', n: 'A statement with *you*.' },
            { s: 'We **don’t live** in London.', n: 'The negative: *don’t* + verb.' },
            { s: 'They **play** football on Sundays.', n: 'A statement with *they*.' },
            { s: 'I **don’t like** coffee.', n: 'The negative with *I*.' },
          ] },
          { t: 'dialogue', title: 'New neighbours', lines: [
            { who: 'Grace', s: 'I live in Leeds and I work in a school.' },
            { who: 'Ben', s: 'I don’t work in a school. I work in a shop.' },
            { who: 'Grace', s: 'We don’t live far from each other.' },
            { who: 'Ben', s: 'No, we live in the same street.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the present simple.', items: [
            { q: 'I ___ in London. (live)', a: ['live'], why: 'With *I* the verb does not change: *live*.' },
            { q: 'You ___ English very well. (speak)', a: ['speak'], why: 'With *you*: *speak*.' },
            { q: 'We ___ in a school. (work)', a: ['work'], why: 'With *we*: *work*.' },
            { q: 'They ___ football on Sundays. (play)', a: ['play'], why: 'With *they*: *play*.' },
            { q: 'I ___ tea every morning. (drink)', a: ['drink'], why: 'With *I*: *drink*.' },
            { q: 'We don’t ___ coffee. (like)', a: ['like'], why: 'After *don’t* the verb does not change: *like*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Find the end of the sentence.', pairs: [
            ['I live', 'in London.'],
            ['We work', 'in a shop.'],
            ['You study', 'English.'],
            ['They play', 'football on Sundays.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'I ___ in a bank.', o: ['work', 'works', 'am work'], why: 'With *I* the verb does not change: *work*.' },
            { q: 'We ___ like fish.', o: ['don’t', 'doesn’t', 'aren’t'], why: 'With *we*: *don’t*.' },
            { q: 'They ___ in Paris.', o: ['live', 'lives', 'living'], why: 'With *they*: *live*.' },
            { q: 'I ___ work on Sundays.', o: ['don’t', 'not', 'no'], why: 'The negative: *don’t* + verb.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'I work in a shop.', why: 'Subject, verb, place.' },
            { a: 'We don’t live in London.', why: 'Subject, *don’t*, verb, place.' },
            { a: 'They play football on Sundays.', why: 'Subject, verb, object, time.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'I [works] in a bank.', a: ['work'], why: 'With *I* the verb does not change.' },
            { s: 'We [doesn’t] like fish.', a: ['don’t', 'do not'], why: 'With *we*: *don’t*.' },
            { s: 'You [not] speak French.', a: ['don’t', 'do not'], why: 'The negative needs *don’t*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'She works in a bank',
      about: 'Use the present simple with he, she and it, and ask questions with do and does.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'With **he, she** and **it**, add **-s** to the verb: *he works, she lives, it opens*. Add **-es** after **s, sh, ch, x** and **o**: *watch, watches; go, goes; do, does*. After a consonant + **y**, change **y** to **ies**: *study, studies*. **Have** is irregular: *he has*.' },
          { t: 'table', caption: 'He, she, it', explain: ['head', 'col1'], quiz: true, head: ['Rule', 'I / you / we / they', 'he / she / it'], rows: [
            ['add -s', 'work', 'works'],
            ['add -s', 'play', 'plays'],
            ['after ch: add -es', 'watch', 'watches'],
            ['after o: add -es', 'go', 'goes'],
            ['consonant + y: change y to ies', 'study', 'studies'],
            ['irregular', 'have', 'has'],
          ] },
          { t: 'tip', art: 'owl', md: 'The **-s** is easy to forget, so say it aloud: *she works, he plays, it opens*. In speech, the ending sounds like **s**, **z** or **iz**: *works, plays, watches*.' },
        ],
        [
          { t: 'text', md: 'For the negative with **he, she** and **it**, use **does not**, short form **doesn’t**. For a question, put **do** or **does** before the subject. After *does* and *doesn’t*, the verb has **no -s**: *She doesn’t work. Does she work?* Short answers: **Yes, she does.** or **No, she doesn’t.** For a question word, put it first: *Where does he live? What do you do?*' },
          { t: 'table', caption: 'Statement, negative, question', explain: ['head'], head: ['Statement', 'Negative', 'Question'], rows: [
            ['I / you / we / they work', 'I / you / we / they don’t work', 'Do I / you / we / they work?'],
            ['he / she / it works', 'he / she / it doesn’t work', 'Does he / she / it work?'],
          ] },
          { t: 'examples', items: [
            { s: 'She **works** in a bank.', n: 'A statement with *she*: add *-s*.' },
            { s: 'He **doesn’t like** coffee.', n: 'The negative: *doesn’t* + verb with no *-s*.' },
            { s: '**Does** she **work** in a bank?', n: 'A question: *does* + verb with no *-s*.' },
            { s: '**Do** you **live** in Leeds? – **Yes, I do.**', n: 'A question with *you* and a short answer.' },
            { s: '**What does** she **do**? – She’s a doctor.', n: 'To ask about a job.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'Write the verb with he, she or it.', items: [
            { q: 'She ___ in a bank.', base: 'work', a: ['works'], why: 'Add *-s*.' },
            { q: 'He ___ English.', base: 'study', a: ['studies'], why: 'Consonant + *y*: change *y* to *ies*.' },
            { q: 'My mother ___ TV in the evening.', base: 'watch', a: ['watches'], why: 'After *ch*, add *-es*.' },
            { q: 'Ben ___ to school by bus.', base: 'go', a: ['goes'], why: 'After *o*, add *-es*.' },
            { q: 'She ___ two cats.', base: 'have', a: ['has'], why: '*Have* is irregular: *has*.' },
            { q: 'The shop ___ at nine.', base: 'open', a: ['opens'], why: 'Add *-s*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '___ you work here?', a: ['Do'], why: 'With *you*: *do*.' },
            { q: '___ Ben play football?', a: ['Does'], why: 'With *Ben* (he): *does*.' },
            { q: 'He doesn’t ___ coffee. (like)', a: ['like'], why: 'After *doesn’t* the verb has no *-s*.' },
            { q: 'Does she ___ in London? (live)', a: ['live'], why: 'After *does* the verb has no *-s*.' },
            { q: 'She ___ like tea. (not)', a: ['doesn’t', 'does not'], why: 'The negative with *she*: *doesn’t*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: '“Do you like tea?” – “Yes, I ___.”', o: ['do', 'like', 'am'], why: 'The short answer repeats *do*.' },
            { q: '“Does he work here?” – “No, he ___.”', o: ['doesn’t', 'don’t', 'isn’t'], why: 'With *he*: *doesn’t*.' },
            { q: 'Where ___ she live?', o: ['does', 'do', 'is'], why: 'With *she*: *does*.' },
            { q: 'She doesn’t ___ English.', o: ['speak', 'speaks', 'speaking'], why: 'After *doesn’t* the verb has no *-s*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Change the sentence.', items: [
            { q: 'She works in a bank.', cue: 'doesn’t', a: ['She doesn’t work in a bank.', 'She does not work in a bank.'], why: '*Doesn’t* + verb with no *-s*.' },
            { q: 'He likes coffee.', cue: 'doesn’t', a: ['He doesn’t like coffee.', 'He does not like coffee.'], why: '*Doesn’t* + verb with no *-s*.' },
            { q: 'You live in Leeds.', cue: 'Do', a: ['Do you live in Leeds?'], why: 'A question with *you*: *do you*.' },
            { q: 'She plays football.', cue: 'Does', a: ['Does she play football?'], why: 'A question with *she*: *does she* + verb with no *-s*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Does she work in a bank?', why: '*Does* + subject + verb.' },
            { a: 'He doesn’t like coffee.', why: 'Subject, *doesn’t*, verb, object.' },
            { a: 'Where does he live?', why: 'Question word, *does*, subject, verb.' },
            { a: 'What does she do?', why: 'Question word, *does*, subject, *do*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'She [work] in a bank.', a: ['works'], why: 'With *she*, add *-s*.' },
            { s: 'Does he [works] here?', a: ['work'], why: 'After *does* the verb has no *-s*.' },
            { s: 'He [don’t] like tea.', a: ['doesn’t', 'does not'], why: 'With *he*: *doesn’t*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'What time is it?',
      about: 'Tell the time, say the days of the week and talk about your daily routine.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'To ask the time, say **What time is it?** To answer, say **It’s** + the time. For an exact hour, say **o’clock**. Use **past** for the first half of the hour and **to** for the second half. To say when something happens, use **at**: *I get up at seven o’clock.*' },
          { t: 'table', caption: 'Telling the time', explain: ['head'], quiz: true, head: ['Time', 'Say'], rows: [
            ['7.00', 'seven o’clock'],
            ['7.10', 'ten past seven'],
            ['7.15', 'quarter past seven'],
            ['7.30', 'half past seven'],
            ['7.45', 'quarter to eight'],
            ['7.50', 'ten to eight'],
          ] },
          { t: 'tip', art: 'owl', md: 'You can also say the numbers: *seven thirty, seven forty-five*. In the USA, people say **after** instead of **past**: *quarter after seven*. Use **a.m.** for the morning and **p.m.** for the afternoon and evening in writing: *7.30 a.m.*' },
        ],
        [
          { t: 'text', md: 'Use **at** with a clock time and with **night**: *at 7.00, at night*. Use **in** with the **morning, the afternoon** and **the evening**. Use **on** with days: *on Monday, on Sundays*. Here are the days of the week. They start with a capital letter.' },
          { t: 'table', caption: 'The days of the week', explain: ['head'], quiz: true, head: ['Day', 'Say it with'], rows: [
            ['Monday', 'on Monday'],
            ['Tuesday', 'on Tuesday'],
            ['Wednesday', 'on Wednesday'],
            ['Thursday', 'on Thursday'],
            ['Friday', 'on Friday'],
            ['Saturday', 'on Saturday'],
            ['Sunday', 'on Sunday'],
          ] },
          { t: 'examples', items: [
            { s: 'I get up **at** seven o’clock.', n: '*at* + a clock time.' },
            { s: 'I work **in** the morning.', n: '*in* + the morning, the afternoon, the evening.' },
            { s: 'I sleep **at** night.', n: '*at night*, without *the*.' },
            { s: 'She works **on** Saturdays.', n: '*on* + a day. *Saturdays* means every Saturday.' },
            { s: 'We rest **at** the weekend.', n: 'In Britain, *at the weekend*. In the USA, *on the weekend*.' },
          ] },
        ],
        [
          { t: 'text', md: 'Here are the verbs of a normal day. Use **have** for meals: *have breakfast, have lunch, have dinner*. This is **have**, not **have got**, so it follows the rules of the present simple: *She has lunch at one.*' },
          { t: 'table', caption: 'My day', explain: ['head', 'col1'], head: ['Verb phrase', 'Example'], rows: [
            ['get up', 'I get up at 7.00.'],
            ['have breakfast', 'I have breakfast at 7.30.'],
            ['go to work', 'I go to work by bus.'],
            ['start work', 'I start work at 9.00.'],
            ['have lunch', 'I have lunch at 1.00.'],
            ['finish work', 'I finish work at 5.00.'],
            ['go home', 'I go home at 5.30.'],
            ['have dinner', 'I have dinner at 7.00.'],
            ['watch TV', 'I watch TV in the evening.'],
            ['go to bed', 'I go to bed at 11.00.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the way to say the time.', pairs: [
            ['7.00', 'seven o’clock'],
            ['7.15', 'quarter past seven'],
            ['7.30', 'half past seven'],
            ['7.45', 'quarter to eight'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right time.', items: [
            { q: 'It is 7.30. It’s ___ seven.', o: ['half past', 'quarter past', 'quarter to'], why: '30 minutes after seven: *half past seven*.' },
            { q: 'It is 8.45. It’s ___ nine.', o: ['quarter to', 'quarter past', 'half past'], why: '15 minutes before nine: *quarter to nine*.' },
            { q: 'It is 6.15. It’s ___ six.', o: ['quarter past', 'quarter to', 'half past'], why: '15 minutes after six: *quarter past six*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write at, in or on.', items: [
            { q: 'I get up ___ 7.00.', a: ['at'], why: '*at* + a clock time.' },
            { q: 'I work ___ the morning.', a: ['in'], why: '*in* + the morning.' },
            { q: 'I go to the gym ___ Monday.', a: ['on'], why: '*on* + a day.' },
            { q: 'I sleep ___ night.', a: ['at'], why: '*at night*.' },
            { q: 'She works ___ Saturdays.', a: ['on'], why: '*on* + a day.' },
            { q: 'We have dinner ___ 7.30.', a: ['at'], why: '*at* + a clock time.' },
          ] },
          { t: 'ex', kind: 'crossword', h: 'Write the days.', words: [
            { a: 'monday', clue: 'The first day of the working week.' },
            { a: 'tuesday', clue: 'The day after Monday.' },
            { a: 'thursday', clue: 'The day after Wednesday.' },
            { a: 'friday', clue: 'The day before Saturday.' },
            { a: 'saturday', clue: 'The day before Sunday.' },
            { a: 'sunday', clue: 'The last day of the week in many calendars.' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs.', pairs: [
            ['6.00', 'six o’clock'],
            ['6.10', 'ten past six'],
            ['6.15', 'quarter past six'],
            ['6.30', 'half past six'],
            ['6.45', 'quarter to seven'],
            ['6.50', 'ten to seven'],
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Morning or evening? Sort the verb phrases.', groups: ['morning', 'evening'], explain: ['groups'], items: [
            { s: 'get up', g: 0, why: 'You get up in the morning.' },
            { s: 'have breakfast', g: 0, why: 'You have breakfast in the morning.' },
            { s: 'go to work', g: 0, why: 'Many people go to work in the morning.' },
            { s: 'have dinner', g: 1, why: 'You have dinner in the evening.' },
            { s: 'watch TV', g: 1, why: 'Many people watch TV in the evening.' },
            { s: 'go to bed', g: 1, why: 'You go to bed at night.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'I get up at seven o’clock.', why: 'Subject, verb, *at* + time.' },
            { a: 'She has lunch at one o’clock.', why: 'With *she*: *has*.' },
            { a: 'We go to bed at eleven.', why: 'Subject, verb, *at* + time.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A day in the life of a baker',
      about: 'Read about the day of a baker.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'The baker', md: 'Callum is a baker. He works in a small bakery in Bristol. He gets up at 4.00 in the morning and he walks to work. He starts work at 4.30. He makes bread and cakes.\n\nAt 8.00 he has breakfast with his colleague, Joanna. They drink tea and eat toast. The bakery opens at 9.00. Many people come and buy bread.\n\nCallum finishes work at 1.00 in the afternoon. He goes home and has lunch. In the afternoon he sleeps for two hours. In the evening he watches television and goes to bed at 8.00.\n\nOn Sundays he doesn’t work. He plays football with his friends.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Callum is a baker.', a: 't', why: '*Callum is a baker.*' },
            { q: 'He gets up at 6.00.', a: 'f', why: '*He gets up at 4.00.*' },
            { q: 'He starts work at 4.30.', a: 't', why: '*He starts work at 4.30.*' },
            { q: 'The bakery opens at 9.00.', a: 't', why: '*The bakery opens at 9.00.*' },
            { q: 'Callum works on Sundays.', a: 'f', why: '*On Sundays he doesn’t work.*' },
            { q: 'Callum has got children.', a: 'ng', why: 'The text does not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'What time does he do it?', pairs: [
            ['4.00', 'He gets up.'],
            ['4.30', 'He starts work.'],
            ['8.00', 'He has breakfast.'],
            ['1.00', 'He finishes work.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Read the text again and choose.', items: [
            { q: 'Where does Callum work?', o: ['In a bakery.', 'In a school.', 'In a café.'], why: '*He works in a small bakery.*' },
            { q: 'Who does he have breakfast with?', o: ['Joanna', 'His wife', 'His mother'], why: '*He has breakfast with his colleague, Joanna.*' },
            { q: 'What time does Callum go to bed?', o: ['At 8.00', 'At 10.00', 'At midnight'], why: '*He goes to bed at 8.00.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'I ___ in a bank.', o: ['work', 'works', 'working'], why: 'With *I* the verb does not change.' },
      { q: 'She ___ English.', o: ['speaks', 'speak', 'speakes'], why: 'With *she*, add *-s*.' },
      { q: '___ he live in Leeds?', o: ['Does', 'Do', 'Is'], why: 'With *he*: *does*.' },
      { q: 'I get up ___ 7.30.', o: ['at', 'in', 'on'], why: '*at* + a clock time.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'My brother ___ football on Sundays. (play)', a: ['plays'], why: 'With *he*, add *-s*.' },
      { q: 'He ___ to work by bus. (go)', a: ['goes'], why: 'After *o*, add *-es*.' },
      { q: 'It is 7.15. It is a ___ past seven.', a: ['quarter'], why: '15 minutes: *quarter past*.' },
      { q: 'We don’t ___ in London. (live)', a: ['live'], why: 'After *don’t* the verb does not change.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the way to say the time.', pairs: [
      ['7.00', 'seven o’clock'],
      ['7.15', 'quarter past seven'],
      ['7.30', 'half past seven'],
      ['7.45', 'quarter to eight'],
    ] },
    { t: 'ex', kind: 'build', h: 'Build the sentences. Two words do not belong.', items: [
      { a: 'He gets up at seven o’clock.', extra: ['get', 'in'], why: 'With *he*: *gets up*. Use *at* with a clock time.' },
      { a: 'Does she work in a bank?', extra: ['do', 'works'], why: 'A question with *she*: *does* + verb with no *-s*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'She [work] in a school.', a: ['works'], why: 'With *she*, add *-s*.' },
      { s: 'He doesn’t [works] on Sundays.', a: ['work'], why: 'After *doesn’t* the verb has no *-s*.' },
    ] },
  ],
};
