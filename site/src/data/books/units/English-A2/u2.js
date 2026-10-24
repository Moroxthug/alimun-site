// English A2, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'What happened?',
  goal: 'Tell simple stories about the past.',
  art: 'ghost',
  tags: { skills: ['grammar', 'vocabulary', 'pronunciation', 'reading'], topics: ['past-simple', 'was-were', 'irregular-verbs', 'time-expressions', 'storytelling'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Was, were and -ed',
      about: 'Use was and were, make the past simple of regular verbs, and say the -ed ending in the right way.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'The past of *be* has two forms: **was** and **were**. Use them for finished time in the past.' },
          { t: 'table', caption: 'Was and were', explain: ['head'], quiz: true, head: ['', 'Positive', 'Negative', 'Question'], rows: [
            ['I / he / she / it', 'I was', 'I wasn’t', 'Was I…?'],
            ['you / we / they', 'you were', 'you weren’t', 'Were you…?'],
          ] },
          { t: 'examples', items: [
            { s: 'I **was** at home last night.', n: '*I* takes *was*.' },
            { s: 'The tickets **weren’t** expensive.', n: '*Weren’t* = *were not*. *The tickets* is *they*.' },
            { s: '**Were** you tired after the trip?', n: 'Question: *Were* goes before the subject.' },
          ] },
        ],
        [
          { t: 'text', md: 'For most other verbs, the **past simple** of a regular verb ends in **-ed**. It is the same for every person: *I worked*, *she worked*, *they worked*.' },
          { t: 'table', caption: 'Spelling of -ed', explain: ['head', 'col0'], head: ['Rule', 'Example'], rows: [
            ['most verbs: add -ed', 'work → worked, visit → visited'],
            ['verb ends in -e: add -d', 'live → lived, dance → danced'],
            ['consonant + -y: change to -ied', 'study → studied, carry → carried'],
            ['vowel + -y: add -ed', 'play → played, stay → stayed'],
            ['short verb, one vowel + one consonant: double it', 'stop → stopped, plan → planned'],
          ] },
        ],
        [
          { t: 'text', md: 'The *-ed* ending has **three sounds**. After the sounds *p*, *k*, *s*, *sh*, *ch* and *f*, it sounds like **t**. After *t* and *d*, it is an extra syllable that sounds like **id**. After all other sounds, it sounds like **d**.' },
          { t: 'table', caption: 'How to say -ed', explain: ['head'], head: ['Sound', 'Examples'], rows: [
            ['t', 'walked, stopped, watched, finished, laughed'],
            ['d', 'played, lived, opened, called, cleaned'],
            ['id', 'wanted, visited, needed, decided, waited'],
          ] },
          { t: 'tip', art: 'owl', md: 'Only *-ted* and *-ded* verbs get an extra syllable. *Walked* has one syllable, but *wanted* has two.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with was, were, wasn’t or weren’t.', items: [
            { q: 'My grandmother ___ a teacher. She taught for forty years.', a: ['was'], why: '*My grandmother* is *she*: *was*.' },
            { q: 'We ___ very happy with the hotel. It was dirty.', a: ['weren’t', 'were not'], why: 'The hotel was dirty, so they were not happy. *We* takes *were*.' },
            { q: '___ your parents at the wedding?', a: ['Were'], why: '*Your parents* is *they*: *Were*.' },
            { q: 'I called at your flat, but you ___ there.', a: ['weren’t', 'were not'], why: 'Negative with *you*: *weren’t*.' },
            { q: 'The film ___ boring. I loved it!', a: ['wasn’t', 'was not'], why: 'I loved it, so it was not boring. *The film* is *it*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct spelling.', items: [
            { q: 'She ___ in Madrid for two years.', o: ['studied', 'studyed', 'studed'], why: 'Consonant + *-y* changes to *-ied*.' },
            { q: 'The bus ___ in front of the station.', o: ['stopped', 'stoped', 'stopt'], why: '*Stop*: one vowel + one consonant, so double the *p*.' },
            { q: 'We ___ at a small hotel by the sea.', o: ['stayed', 'staied', 'staid'], why: 'Vowel + *-y*: just add *-ed*.' },
            { q: 'They ___ in a flat near the river.', o: ['lived', 'liveed', 'livd'], why: '*Live* ends in *-e*, so just add *-d*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'How does -ed sound in this verb?', items: [
            { q: 'needed', o: ['id', 't', 'd'], why: 'After *d*, *-ed* is an extra syllable: need-ed.' },
            { q: 'watched', o: ['t', 'd', 'id'], why: 'After the sound *ch*, *-ed* sounds like *t*.' },
            { q: 'cleaned', o: ['d', 't', 'id'], why: 'After the sound *n*, *-ed* sounds like *d*.' },
            { q: 'visited', o: ['id', 'd', 't'], why: 'After *t*, *-ed* is an extra syllable: visit-ed.' },
            { q: 'laughed', o: ['t', 'id', 'd'], why: '*Laugh* ends in the sound *f*, so *-ed* sounds like *t*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Went, saw, did you…?',
      about: 'Learn common irregular verbs, and make questions and negatives with did.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Many common verbs are **irregular**: their past simple does not end in *-ed*. You need to learn them one by one.' },
          { t: 'table', caption: 'Common irregular verbs', explain: ['head'], quiz: true, head: ['Verb', 'Past simple'], rows: [
            ['go', 'went'],
            ['have', 'had'],
            ['get', 'got'],
            ['see', 'saw'],
            ['eat', 'ate'],
            ['buy', 'bought'],
            ['make', 'made'],
            ['take', 'took'],
            ['come', 'came'],
            ['leave', 'left'],
            ['lose', 'lost'],
            ['tell', 'told'],
          ] },
        ],
        [
          { t: 'text', md: 'For questions and negatives in the past simple, use **did** and **didn’t** + the base form of the verb. This is the same for regular and irregular verbs, and for every person.' },
          { t: 'table', caption: 'Past simple with did', explain: ['head'], quiz: true, head: ['Positive', 'Negative', 'Question'], rows: [
            ['I went', 'I didn’t go', 'Did you go?'],
            ['she worked', 'she didn’t work', 'Did she work?'],
          ] },
          { t: 'tip', art: 'owl', md: 'After *did* and *didn’t*, the verb goes back to its base form. Say *Did you see it?*, not *Did you saw it?* But *was* and *were* do not use *did*: *Were you there?*' },
        ],
        [
          { t: 'dialogue', title: 'Monday morning at work', lines: [
            { who: 'Priya', s: 'Hi, Marco. Did you have a good weekend?' },
            { who: 'Marco', s: 'Yes, thanks. I went to the mountains with my brother.' },
            { who: 'Priya', s: 'Lovely! Did you stay in a hotel?' },
            { who: 'Marco', s: 'No, we didn’t. We took a tent. But it rained all night, so we didn’t sleep much.' },
            { who: 'Priya', s: 'Oh no! What did you do on Sunday?' },
            { who: 'Marco', s: 'We came home early and had a long, hot shower!' },
          ] },
          { t: 'text', md: 'Questions with a question word: *What* + *did* + subject + base form. *What did you do?* *Where did she go?*' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the past simple of the verb in brackets.', items: [
            { q: 'Last year we ___ (go) to Portugal for two weeks.', a: ['went'], why: '*Go* is irregular: *went*.' },
            { q: 'I ___ (buy) a new coat in the sales.', a: ['bought'], why: '*Buy* is irregular: *bought*.' },
            { q: 'Kofi ___ (lose) his keys on the way home.', a: ['lost'], why: '*Lose* is irregular: *lost*.' },
            { q: 'My friend ___ (tell) me a funny story.', a: ['told'], why: '*Tell* is irregular: *told*.' },
            { q: 'We ___ (not / see) the start of the film.', a: ['didn’t see', 'did not see'], why: 'Negative: *didn’t* + base form, *see*.' },
            { q: 'She ___ (leave) the party at midnight.', a: ['left'], why: '*Leave* is irregular: *left*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Did you have a good weekend?', why: '*Did* + subject + base form.' },
            { a: 'Where did you buy that jacket?', why: 'Question word + *did* + subject + base form.' },
            { a: 'We didn’t take a taxi.', why: 'Subject + *didn’t* + base form.' },
            { a: 'What time did the train leave?', why: '*What time* + *did* + subject + base form.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Think about the conversation. Choose the correct answer.', items: [
            { q: 'Did Marco go to the mountains alone?', o: ['No, he didn’t.', 'Yes, he did.', 'No, he wasn’t.'], why: 'He went with his brother. Short answer with *did*: *No, he didn’t*.' },
            { q: 'Where did they sleep?', o: ['In a tent.', 'In a hotel.', 'At his brother’s house.'], why: '“No, we didn’t. We took a tent.”' },
            { q: 'Why didn’t they sleep much?', o: ['Because it rained all night.', 'Because the hotel was noisy.', 'Because they came home early.'], why: '“It rained all night, so we didn’t sleep much.”' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'When, and what next?',
      about: 'Say when something happened, and tell events in order with first, then and after that.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'These **time expressions** say when something happened in the past. They often go at the end of the sentence.' },
          { t: 'table', caption: 'Past time expressions', explain: ['head'], head: ['Expression', 'Example'], rows: [
            ['yesterday', 'I saw Ana yesterday morning.'],
            ['last + week, month, year…', 'We moved house last month.'],
            ['time + ago', 'She started her job three weeks ago.'],
            ['in + year or month', 'They got married in 2020.'],
            ['on + day or date', 'The course finished on Friday.'],
            ['at + clock time', 'The plane landed at 6.30.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Say *last night*, not *yesterday night*. And *ago* comes after the time: *two days ago*, not *ago two days*.' },
        ],
        [
          { t: 'text', md: 'When you tell a story, these words show the order of events. They usually go at the start of the sentence, often with a comma.' },
          { t: 'examples', items: [
            { s: '**First**, I made a cup of tea.', n: '*First*: the first thing.' },
            { s: '**Then** I checked my emails.', n: '*Then*: the next thing.' },
            { s: '**After that**, I called my sister.', n: '*After that* means the same as *then*. It helps you not to repeat *then* again and again.' },
            { s: '**Finally**, I went to bed at eleven.', n: '*Finally*: the last thing.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with in, on, at, ago or last.', items: [
            { q: 'I moved to Spain ___ 2019.', a: ['in'], why: '*In* + a year.' },
            { q: 'We met for the first time ___ a Saturday.', a: ['on'], why: '*On* + a day.' },
            { q: 'She called me ten minutes ___.', a: ['ago'], why: '*Ago* goes after the length of time.' },
            { q: 'I didn’t sleep well ___ night.', a: ['last'], why: 'We say *last night*.' },
            { q: 'My parents visited us ___ April.', a: ['in'], why: '*In* + a month.' },
            { q: 'The meeting started ___ nine o’clock.', a: ['at'], why: '*At* + a clock time.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best word.', items: [
            { q: 'I got up late. ___, I had a quick shower.', o: ['Then', 'Ago', 'Last'], why: '*Then* shows the next event.' },
            { q: 'I arrived at the airport. ___ that, I looked for my gate.', o: ['After', 'Then', 'First'], why: 'The phrase is *after that*: the next event.' },
            { q: 'We walked all day. ___, at nine in the evening, we found a hotel.', o: ['Finally', 'First', 'Ago'], why: '*Finally* is for the last event, often after a long time.' },
            { q: 'Haruto finished university two years ___.', o: ['ago', 'last', 'before two'], why: 'Length of time + *ago*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap every word or phrase that shows the order of events.', items: [
            { s: '[First], we bought the tickets. [Then] we had lunch near the museum.', why: '*First* and *then* show the order.' },
            { s: 'We visited the museum for two hours. [After that], we took a boat on the river.', why: '*After that* means the next thing.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A bad day',
      about: 'Read a short story about a bad day.',
      art: 'ghost',
      spreads: [
        [
          { t: 'reading', title: 'The worst Tuesday', md: 'Last Tuesday was a very bad day for Elena. She had a job interview at ten o’clock, but her alarm didn’t ring. She woke up at nine!\n\nFirst, she jumped out of bed and got dressed very fast. Then she ran to the bus stop, but she missed the bus. After that, she called a taxi. The taxi came quickly, but there was a lot of traffic in the city centre.\n\nElena arrived at the office at twenty past ten. She was hot and nervous. She said sorry to the manager and he smiled. “No problem,” he said. “Our computer stopped working this morning, so we started late too.”\n\nThe interview went well. Two days later, the company called her. She got the job! Now Elena has got two alarm clocks.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Elena woke up an hour before her interview.', a: 't', why: 'The interview was at ten, and she woke up at nine.' },
            { q: 'She took the bus to the office.', a: 'f', why: 'She missed the bus and took a taxi.' },
            { q: 'The taxi was expensive.', a: 'ng', why: 'The text does not say how much the taxi was.' },
            { q: 'The manager was angry with her.', a: 'f', why: 'He smiled and said “No problem.”' },
            { q: 'Elena got the job.', a: 't', why: '“She got the job!”' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
            { q: 'Why did Elena wake up late?', o: ['Her alarm didn’t ring.', 'She went to bed late.', 'She was ill.'], why: '“Her alarm didn’t ring.”' },
            { q: 'What did she do after she missed the bus?', o: ['She called a taxi.', 'She walked to the office.', 'She went home.'], why: '“After that, she called a taxi.”' },
            { q: 'Why did the interviews start late that day?', o: ['The company’s computer stopped working.', 'The manager was late.', 'There was a lot of traffic.'], why: '“Our computer stopped working this morning.”' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the past simple form from the text.', items: [
            { q: 'wake up → she ___ up', a: ['woke'], why: '*Wake* is irregular: *woke*.' },
            { q: 'run → she ___ to the bus stop', a: ['ran'], why: '*Run* is irregular: *ran*.' },
            { q: 'arrive → she ___ at the office', a: ['arrived'], why: '*Arrive* ends in *-e*, so add *-d*.' },
            { q: 'say → she ___ sorry', a: ['said'], why: '*Say* is irregular: *said*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'The shops ___ open on Sunday, so we stayed at home.', o: ['weren’t', 'wasn’t', 'didn’t'], why: '*The shops* is *they*: *weren’t*.' },
      { q: 'Did you ___ the email from the school?', o: ['get', 'got', 'gets'], why: 'After *did*, use the base form.' },
      { q: 'I started this course six months ___.', o: ['ago', 'last', 'before'], why: 'Length of time + *ago*.' },
      { q: 'We ___ our holiday very carefully.', o: ['planned', 'planed', 'planied'], why: '*Plan*: one vowel + one consonant, so double the *n*.' },
      { q: 'Which verb has an extra syllable with -ed?', o: ['decided', 'opened', 'walked'], why: 'After *d* or *t*, *-ed* is an extra syllable: decid-ed.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete with the past simple of the verb in brackets.', items: [
      { q: 'We ___ (eat) at a lovely restaurant last night.', a: ['ate'], why: '*Eat* is irregular: *ate*.' },
      { q: 'Yusuf ___ (not / come) to the meeting.', a: ['didn’t come', 'did not come'], why: '*Didn’t* + base form.' },
      { q: 'I ___ (try) to call you three times!', a: ['tried'], why: 'Consonant + *-y* changes to *-ied*.' },
      { q: 'Where ___ (you / go) on holiday?', a: ['did you go'], why: 'Question word + *did* + subject + base form.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Was the hotel near the beach?', why: 'Questions with *was* do not use *did*: *Was* + subject.' },
      { a: 'What did you have for lunch?', why: '*What* + *did* + subject + base form.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
      { q: '', o: ['I didn’t see him last night.', 'I didn’t saw him last night.', 'I didn’t see him yesterday night.'], why: '*Didn’t* + base form, and we say *last night*.' },
      { q: '', o: ['We were very tired.', 'We was very tired.', 'We did be very tired.'], why: '*We* takes *were*.' },
      { q: '', o: ['They got married in 2020.', 'They got married on 2020.', 'They got married at 2020.'], why: '*In* + a year.' },
    ] },
  ],
};
