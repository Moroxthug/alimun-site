// English A2, unit 8, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// The last unit of A2: superlatives, the present perfect for experiences, been or gone and the past simple, and a
// reading that brings the level together, with a look ahead to B1.
export const UNIT = {
  id: 'u8',
  title: 'Experiences',
  goal: 'Talk about the best and worst things you know, the things you have and have not done in your life, and tell the story of a special day.',
  art: 'dragon',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading', 'writing'], topics: ['superlatives', 'present-perfect', 'been-gone', 'past-simple'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'The best and the worst',
      about: 'Compare one thing with all the others in a group, with superlatives.',
      art: 'monster',
      spreads: [
        [
          { t: 'text', md: 'You already know how to compare two things: *Lisbon is **smaller than** Madrid.* When you compare one thing with **all the others** in a group, use the **superlative**: *Lisbon is **the oldest** city in Western Europe.*\n\nThe superlative always has **the** before it, because there is only one: *the tallest, the most beautiful, the best*.\n\nThe rules are like the comparative rules. Short adjectives (one syllable) take **-est**: *cheap → the cheapest, old → the oldest*. Long adjectives (two or more syllables, except those ending in *-y*) take **the most**: *expensive → the most expensive, interesting → the most interesting*.' },
          { t: 'table', caption: 'Making superlatives', explain: ['head', 'col0'], head: ['Adjective', 'Example', 'Superlative'], rows: [
            ['short: add -est', 'cold', 'the coldest'],
            ['ends in -e: add -st', 'nice', 'the nicest'],
            ['vowel + consonant: double it', 'big', 'the biggest'],
            ['ends in -y: -y becomes -iest', 'happy', 'the happiest'],
            ['long: the most', 'famous', 'the most famous'],
          ] },
          { t: 'tip', art: 'owl', md: 'Three superlatives are irregular, and they are some of the most common words in English: **good → the best**, **bad → the worst**, **far → the furthest**.' },
        ],
        [
          { t: 'text', md: 'After a superlative, use **in** with places and groups: *the tallest building **in** the world, the youngest person **in** my family*. With a time, use **of**: *the hottest day **of** the year, the best day **of** my life*.\n\nA very common pattern joins a superlative with the present perfect, which you will learn in the next lesson: *It’s **the best** film I’ve **ever** seen.*' },
          { t: 'examples', items: [
            { s: 'Mount Everest is **the highest** mountain **in** the world.', n: '*-est* + *in* a place.' },
            { s: 'August is **the hottest** month **of** the year here.', n: '*of* with a time.' },
            { s: 'This is **the most expensive** restaurant in town.', n: 'Long adjective: *the most*.' },
            { s: 'Who is **the funniest** person in your family?', n: '*funny → the funniest*.' },
            { s: 'That was **the worst** journey of my life!', n: '*bad → the worst*.' },
            { s: 'It’s **the best** book I’ve ever read.', n: 'Superlative + *I’ve ever* + past participle.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['She is tallest in the class.', 'She is the tallest in the class.', 'A superlative always needs *the*.'],
            ['the most cheap hotel', 'the cheapest hotel', 'Short adjectives take *-est*.'],
            ['the baddest day', 'the worst day', '*bad → the worst*.'],
            ['the biggest city of Spain', 'the biggest city in Spain', 'With places: *in*.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'Write the superlative.', items: [
            { q: 'Winter is ___ season in Canada.', base: 'cold', a: ['the coldest'], why: '*cold → the coldest*.' },
            { q: 'This is ___ hotel in the city.', base: 'expensive', a: ['the most expensive'], why: 'Long adjective: *the most*.' },
            { q: 'Saturday was ___ day of my holiday.', base: 'good', a: ['the best'], why: '*good → the best*.' },
            { q: 'Tom is ___ person I know.', base: 'happy', a: ['the happiest'], why: '*-y → -iest*.' },
            { q: 'Russia is ___ country in the world.', base: 'big', a: ['the biggest'], why: 'Double the *g*: *the biggest*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'It’s [most beautiful] beach in Portugal.', a: ['the most beautiful'], why: 'A superlative needs *the*.' },
            { s: 'It was the [baddest] meal of my life.', a: ['worst'], why: '*bad → the worst*.' },
            { s: 'She is the youngest [of] her family.', a: ['in'], why: 'With a group: *in*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam (Reading, Part 4): choose the word that fits each gap in this text about a city.', items: [
            { q: 'Bergen is one of the ___ cities in Norway.', o: ['oldest', 'old', 'older'], why: '*one of the* + superlative.' },
            { q: 'It is also one of the ___ places in Europe: it rains on about 230 days a year!', o: ['wettest', 'most wet', 'wetter'], why: 'Short adjective: *the wettest*.' },
            { q: 'The ___ way to see the city is from the top of Mount Fløyen.', o: ['best', 'good', 'better'], why: '*good → the best*.' },
            { q: 'Many people say it is the most beautiful city ___ the country.', o: ['in', 'of', 'at'], why: 'With a place: *in*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 4 of the A2 Key reading paper, you choose the right word for six gaps in a text. Often the three options are forms of the same word (*old, older, oldest*). Look at the words around the gap: *the* and *one of the* before a gap usually mean a superlative.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Your turn: say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'August is the hottest month of the year.' },
            { a: 'This is the most expensive restaurant in town.' },
            { a: 'That was the best day of my holiday.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Have you ever…?',
      about: 'Talk about the experiences in your life with the present perfect, ever and never.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'To talk about your **life experiences** without saying when they happened, English uses the **present perfect**: **have** or **has** + the **past participle** of the verb.\n\n*I **have visited** Japan.* (At some time in my life. When? It does not matter.)\n\nThe short forms are **I’ve, you’ve, we’ve, they’ve** and **he’s, she’s**. For regular verbs, the past participle is the same as the past simple: *visit → visited*, *try → tried*. Irregular verbs have their own form, and you need to learn them: *see → seen*, *eat → eaten*, *be → been*.' },
          { t: 'table', caption: 'The present perfect', quiz: true, explain: ['head'], head: ['', 'Positive', 'Negative', 'Question'], rows: [
            ['I / you / we / they', 'I’ve seen it.', 'I haven’t seen it.', 'Have you seen it?'],
            ['he / she / it', 'She’s seen it.', 'She hasn’t seen it.', 'Has she seen it?'],
          ] },
          { t: 'table', caption: 'Common irregular past participles', explain: ['head'], head: ['Verb', 'Past simple', 'Past participle'], rows: [
            ['be', 'was / were', 'been'],
            ['eat', 'ate', 'eaten'],
            ['see', 'saw', 'seen'],
            ['go', 'went', 'gone / been'],
            ['do', 'did', 'done'],
            ['meet', 'met', 'met'],
            ['ride', 'rode', 'ridden'],
            ['fly', 'flew', 'flown'],
          ] },
        ],
        [
          { t: 'text', md: 'To ask about experiences, use **Have you ever…?** **Ever** means *at any time in your life*. The short answers are **Yes, I have.** and **No, I haven’t.**\n\nTo say that something has not happened at any time in your life, use **never**. *Never* already means *not*, so do not add *not*: *I’ve **never** been to China*, not *I haven’t never been*.\n\nUsually the conversation goes on in the **past simple**, because now you talk about one time: *Have you ever **been** to Paris? – Yes, I have. I **went** there last year.*' },
          { t: 'examples', items: [
            { s: '**Have** you **ever eaten** sushi? – **Yes, I have.**', n: 'A question about your life, and a short answer.' },
            { s: 'I’ve **never ridden** a horse.', n: '*never* = not at any time.' },
            { s: 'My brother **has flown** in a helicopter.', n: '*he / she*: *has*.' },
            { s: '**Has** she **ever met** a famous person? – **No, she hasn’t.**', n: 'A question with *she*.' },
            { s: 'Have you ever lost your passport? – Yes, I **lost** it in Madrid **in 2022**.', n: 'Details with a time: past simple.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I have saw this film.', 'I have seen this film.', 'Use the past participle: *seen*.'],
            ['I haven’t never been there.', 'I’ve never been there.', '*never* already means *not*.'],
            ['Did you ever eat snails?', 'Have you ever eaten snails?', 'Experiences: present perfect.'],
            ['She have visited Rome.', 'She has visited Rome.', 'With *she*: *has*.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the past participle.', verb: 'past participles', tense: 'present perfect', rows: [
            ['see', 'seen'],
            ['eat', 'eaten'],
            ['do', 'done'],
            ['fly', 'flown'],
            ['meet', 'met'],
            ['try', 'tried'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the present perfect.', items: [
            { q: 'I ___ (visit) Italy three times.', a: ['have visited', '’ve visited', "'ve visited"], why: '*I have* + *visited*.' },
            { q: 'She ___ (never / eat) Thai food.', a: ['has never eaten', '’s never eaten', "'s never eaten"], why: '*has never* + *eaten*.' },
            { q: 'We ___ (not see) the new James Bond film.', a: ['have not seen', 'haven’t seen', "haven't seen"], why: '*haven’t* + *seen*.' },
            { q: 'Have you ever ___ (ride) a camel?', a: ['ridden'], why: '*ride → ridden*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: '___ you ever been to Scotland?', o: ['Have', 'Did', 'Has'], why: '*Have you ever…?*' },
            { q: 'I’ve ___ met anyone famous.', o: ['never', 'ever', 'not'], why: '*never* in a positive sentence.' },
            { q: 'Have you ever eaten snails? – Yes, I ___.', o: ['have', 'did', 'ate'], why: 'Short answer: *Yes, I have.*' },
            { q: 'Yes, I’ve been to Scotland. I ___ there last summer.', o: ['went', 'have gone', 'have been'], why: 'With a time (*last summer*): past simple.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Have you ever lost your keys?', why: '*Have* + you + *ever* + past participle.' },
            { a: 'My parents have never flown.', why: '*have never* + past participle.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam (Speaking, Part 2 style): your partner asks you questions. Choose the best answer.', items: [
            { q: '“Have you ever been to a music festival?”', o: ['Yes, I have. I went to one in Lisbon last summer.', 'Yes, I go there.', 'No, I don’t go.'], why: 'Answer *Yes, I have*, then give a detail in the past simple.' },
            { q: '“What’s the best place you’ve ever visited?”', o: ['Probably Kyoto. It was beautiful.', 'Yes, I have visited.', 'I visit it every day.'], why: 'The question asks *which place*: name it and say why.' },
            { q: '“Have you ever tried any unusual food?”', o: ['No, I haven’t, but I’d like to try frogs’ legs!', 'No, I didn’t.', 'Yes, I’m.'], why: 'Short answer *No, I haven’t*, then say more.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In the A2 Key speaking test, short answers like *Yes, I have* are correct but not enough. The examiner wants to hear you speak: add one more sentence with a detail. *Yes, I have. I went there in 2023 with my family.*' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'Have you ever eaten sushi?' },
            { a: 'I’ve never ridden a horse.' },
            { a: 'Yes, I have. I went there last year.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Been or gone? When did you go?',
      about: 'Choose been or gone, and choose between the present perfect and the past simple.',
      art: 'alien',
      spreads: [
        [
          { t: 'text', md: 'The verb **go** has two past participles, and they mean different things.\n\n**Been** means the person went somewhere **and came back**: *Laura **has been** to Mexico.* (She is home now.)\n\n**Gone** means the person went somewhere and is **still there**, or on the way: *Laura **has gone** to Mexico.* (She is not here now.)\n\nFor life experiences, you almost always need **been**: *Have you ever **been** to London?*' },
          { t: 'examples', items: [
            { s: 'I’ve **been** to Japan twice.', n: 'I went and came back.' },
            { s: 'Where’s Sam? – He’s **gone** to the shop.', n: 'He is at the shop now, or on the way.' },
            { s: 'Have you ever **been** to a football match?', n: 'An experience: *been*.' },
            { s: 'My parents have **gone** on holiday. They’re back on Sunday.', n: 'They are away now.' },
          ] },
          { t: 'tip', art: 'owl', md: 'A quick test: is the person here now? If yes, use **been**. If no, use **gone**. You cannot say *I have gone to Paris*: you are here, talking!' },
        ],
        [
          { t: 'text', md: 'The present perfect and the past simple both talk about the past. The difference is the **time**.\n\nUse the **present perfect** when the time is **not** important or not said: *I’ve lost my phone.* *Have you ever been to Rome?*\n\nUse the **past simple** when you say **when**, or when it is clear you mean one finished time: *I lost my phone **yesterday**.* *I went to Rome **in 2019**.*\n\nWords like **yesterday, last week, in 2019, two days ago, when I was a child** always need the past simple. So the present perfect usually opens the topic, and the past simple gives the details.' },
          { t: 'table', caption: 'Present perfect or past simple?', explain: ['head', 'col2'], head: ['Present perfect', 'Past simple', 'Why'], rows: [
            ['I’ve been to Rome.', 'I went to Rome in 2019.', 'Time not said / time said.'],
            ['Have you ever ridden a horse?', 'When did you ride it?', 'Experience / one time.'],
            ['She’s met the president.', 'She met him last year.', 'In her life / at a time.'],
          ] },
          { t: 'dialogue', title: 'At work on Monday', lines: [
            { who: 'Lucy', s: 'Have you ever been to Prague?' },
            { who: 'Tom', s: 'Yes, I have. I went there with my brother two years ago.' },
            { who: 'Lucy', s: 'Did you like it?' },
            { who: 'Tom', s: 'I loved it. It’s the most beautiful city I’ve ever seen. Why?' },
            { who: 'Lucy', s: 'Our manager has gone there for a conference. She’s back on Friday.' },
            { who: 'Tom', s: 'Lucky her!' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I have been to Paris last year.', 'I went to Paris last year.', '*last year* needs the past simple.'],
            ['I’ve gone to Spain three times.', 'I’ve been to Spain three times.', 'You came back: *been*.'],
            ['When have you seen it?', 'When did you see it?', '*When* asks for a time: past simple.'],
          ] },
          { t: 'ex', kind: 'select', h: 'Choose been or gone.', items: [
            { q: 'Where is Anna? – She’s ___ to the dentist.', o: ['gone', 'been'], why: 'She is not here now: *gone*.' },
            { q: 'I’ve ___ to Greece twice. I loved it.', o: ['been', 'gone'], why: 'I came back: *been*.' },
            { q: 'Have you ever ___ to a concert in a stadium?', o: ['been', 'gone'], why: 'An experience: *been*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Present perfect or past simple? Choose the right form.', items: [
            { q: 'I ___ my keys. Can you help me look for them?', o: ['’ve lost', 'lost yesterday', 'lose'], why: 'No time said, and it matters now: present perfect.' },
            { q: 'We ___ to the beach last weekend.', o: ['went', 'have been', 'have gone'], why: '*last weekend*: past simple.' },
            { q: 'Have you ever ___ a snake?', o: ['touched', 'touch', 'touching'], why: 'Experience: *Have you ever* + past participle.' },
            { q: 'When ___ you start learning English?', o: ['did', 'have', 'has'], why: '*When* asks for a time: past simple.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Read the dialogue “At work on Monday” again. True or false?', items: [
            { q: 'Tom has been to Prague.', a: 't', why: '*Yes, I have.*' },
            { q: 'Tom went to Prague last month.', a: 'f', why: 'He went two years ago.' },
            { q: 'The manager is in Prague now.', a: 't', why: 'She has *gone* there; she is back on Friday.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'In the format of the A2 Key exam (Reading, Part 5): complete the email with one word in each gap.', items: [
            { q: 'Hi Mia, have you ___ been to Dublin?', a: ['ever'], why: '*Have you ever been…?*' },
            { q: 'I went there ___ year with my cousin.', a: ['last'], why: '*last year*: past simple.' },
            { q: 'It’s one of the ___ friendly cities I know.', a: ['most'], why: '*friendly* has two syllables here: *the most friendly* (also *the friendliest*).' },
            { q: 'My cousin has ___ back there to work, so I’m visiting her in May!', a: ['gone'], why: 'She is there now: *gone*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 5 (open cloze), the answer is always **one** word, and spelling counts. Short grammar words come up again and again: *ever, never, been, gone, the, most, last, ago*. After you finish, read the whole text once more to check it makes sense.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'She has gone to the shop. She’s back soon.' },
            { a: 'I’ve been to Prague. I went there two years ago.' },
            { a: 'When did you start learning English?' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'The best day of my life',
      about: 'Read three people’s stories about their best day, and look back at A2 and ahead to B1.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'Stories about special days use almost everything you have learned at A2: the **past simple** for the events, the **past continuous** for the background, **superlatives** to say how special it was, and the **present perfect** to connect it with life now.\n\nRead the three stories quickly first: who is happy about what? Then read each one again for the details.' },
          { t: 'reading', title: 'The best day of my life', md: '**Elif, 34:** The best day of my life was the day my daughter was born. It was snowing, and my husband was driving very slowly to the hospital. Twelve hours later, she was here! I’ve had many happy days since then, but nothing has been better than that.\n\n**Diego, 22:** Last year I finished my degree. I was the first person in my family to go to university, so it was the proudest moment of my life. While I was walking onto the stage, I could hear my grandmother shouting my name!\n\n**Margaret, 71:** I’ve travelled a lot, but my favourite day was very simple. I was sitting by a lake in Canada with my husband, and we were watching the sun go down. We didn’t talk much. It was the most peaceful evening I’ve ever had.' },
          { t: 'tip', art: 'owl', md: 'When a text has several people, write their names next to the questions as you read. In the exam, one question often has an answer that is true for one person but not for another.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam (Reading, Part 2): which person says each thing? Elif, Diego or Margaret?', items: [
            { q: 'Whose special day was in a hospital?', o: ['Elif', 'Diego', 'Margaret'], why: 'Elif’s daughter was born; they drove to the hospital.' },
            { q: 'Who did something before anyone else in their family?', o: ['Diego', 'Elif', 'Margaret'], why: 'Diego was the first person in his family to go to university.' },
            { q: 'Whose best day was very quiet?', o: ['Margaret', 'Elif', 'Diego'], why: '*We didn’t talk much… the most peaceful evening.*' },
            { q: 'Who heard a family member during their special moment?', o: ['Diego', 'Margaret', 'Elif'], why: 'He heard his grandmother shouting his name.' },
            { q: 'Who has been to many different places?', o: ['Margaret', 'Elif', 'Diego'], why: '*I’ve travelled a lot.*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 2 of the A2 Key reading paper, you read three short texts and match seven questions to the right person. The questions use **different words** from the texts: *quiet* in the question, *peaceful* in the text. Look for the meaning, not the same word.' },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Each sentence about the stories has one mistake. Find and fix it.', items: [
            { s: 'Elif’s husband [drove] very slowly when it started to snow.', a: ['was driving'], why: 'The long action in the background: *was driving*.' },
            { s: 'Diego [has finished] his degree last year.', a: ['finished'], why: '*last year*: past simple.' },
            { s: 'It was the [peacefullest] evening Margaret has ever had.', a: ['most peaceful'], why: 'Long adjective: *the most peaceful*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which form do these sentences need? Sort them.', groups: ['present perfect', 'past simple'], explain: ['groups'], items: [
            { s: 'I ___ (never / see) the sea.', g: 0, why: 'A life experience with *never*.' },
            { s: 'We ___ (meet) in 2015.', g: 1, why: 'A time is given: *in 2015*.' },
            { s: '___ you ever ___ (win) a prize?', g: 0, why: '*Have you ever…?*' },
            { s: 'She ___ (call) me two hours ago.', g: 1, why: '*ago* needs the past simple.' },
          ] },
        ],
        [
          { t: 'text', md: 'This is the end of A2. Look back at what you can do now: you can talk about your life, your past and your plans, describe places and people, compare things, shop, travel and stay in a hotel, and talk about your experiences. That is exactly what the **A2 Key** exam tests.\n\nAt **B1**, you will go further: tell longer stories with more past forms, talk about things that started in the past and continue now (*I’ve lived here **for** three years*), give your opinion and explain why, and understand longer texts. Before you start B1, your teacher will check that you are ready, so take some time to practise the units you found hardest.' },
          { t: 'ex', kind: 'gap', h: 'In the format of the A2 Key exam (Writing, Part 7 style): complete this short story about a special day with one word in each gap.', items: [
            { q: 'Last summer I ___ my first marathon.', a: ['ran'], why: '*Last summer*: past simple of *run*.' },
            { q: 'It was the ___ day of the year, almost 30 degrees!', a: ['hottest'], why: 'Superlative of *hot*: double the *t*.' },
            { q: 'While I ___ running, people were cheering in the streets.', a: ['was'], why: 'Past continuous: *I was running*.' },
            { q: 'It’s the hardest thing I’ve ___ done, but I loved it.', a: ['ever'], why: 'Superlative + *I’ve ever* + past participle.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 7 of the A2 Key paper, you look at three pictures and write a story of **35 words or more**. Tell what happened in each picture, in order, and use the past simple and the past continuous. Check your verb forms at the end: *ran, was running, have done*.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Talk about your best day: say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'The best day of my life was the day I finished university.' },
            { a: 'It was snowing, and we were driving very slowly.' },
            { a: 'It was the most peaceful evening I’ve ever had.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'wordform', h: 'Write the superlative.', items: [
      { q: 'This is ___ coffee in town.', base: 'good', a: ['the best'], why: '*good → the best*.' },
      { q: 'Monday is ___ day of the week for me.', base: 'busy', a: ['the busiest'], why: '*-y → -iest*.' },
      { q: 'It’s ___ museum in the country.', base: 'famous', a: ['the most famous'], why: 'Long adjective: *the most*.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
      { q: 'Have you ever ___ a horse?', o: ['ridden', 'rode', 'ride'], why: 'Past participle: *ridden*.' },
      { q: 'I’ve ___ been to Australia.', o: ['never', 'ever', 'not'], why: '*never* = not at any time.' },
      { q: 'She ___ to Paris in 2021.', o: ['went', 'has been', 'has gone'], why: '*in 2021*: past simple.' },
      { q: 'Where’s Ben? – He’s ___ to the gym.', o: ['gone', 'been', 'went'], why: 'He is not here now: *gone*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the present perfect or the past simple.', items: [
      { q: 'I ___ (see) that film three times.', a: ['have seen', '’ve seen', "'ve seen"], why: 'No time said: present perfect.' },
      { q: 'We ___ (see) it at the cinema last Friday.', a: ['saw'], why: '*last Friday*: past simple.' },
      { q: 'My sister ___ (never / fly) in a plane.', a: ['has never flown', '’s never flown', "'s never flown"], why: '*has never* + *flown*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'I have [saw] this film before.', a: ['seen'], why: 'Past participle: *seen*.' },
      { s: 'He is [tallest] boy in the class.', a: ['the tallest'], why: 'A superlative needs *the*.' },
      { s: 'I [have been] to London last year.', a: ['went'], why: '*last year*: past simple.' },
      { s: 'I haven’t [never] eaten octopus.', a: ['ever'], why: 'With *haven’t*, use *ever*: *I haven’t ever…* (or *I’ve never…*).' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose been or gone.', items: [
      { q: 'I’ve ___ to that restaurant. It’s great.', o: ['been', 'gone'], why: 'I came back: *been*.' },
      { q: 'They’ve ___ to the mountains for the weekend.', o: ['gone', 'been'], why: 'They are away now: *gone*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'It is the best book I have ever read.', why: 'Superlative + *I have ever* + past participle.' },
      { a: 'Have you ever been to a wedding?', why: '*Have you ever been to…?*' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the word given.', items: [
      { q: 'I have never seen a better film.', cue: 'best', a: ['It is the best film I have ever seen.', 'It’s the best film I’ve ever seen.', "It's the best film I've ever seen.", 'This is the best film I have ever seen.'], why: '*the best* + *I have ever seen*.' },
    ] },
  ],
};
