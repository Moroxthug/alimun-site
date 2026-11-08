// English A2, unit 2, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// The past simple, new at A2: was and were, regular -ed, irregular verbs, did, time words and telling a story in order.
export const UNIT = {
  id: 'u2',
  title: 'What happened?',
  goal: 'Talk about the past, ask and answer questions about it, and tell a short story in the right order.',
  art: 'ghost',
  tags: { skills: ['grammar', 'vocabulary', 'pronunciation', 'reading', 'writing', 'speaking'], topics: ['past-simple', 'was-were', 'irregular-verbs', 'time-expressions', 'storytelling'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Was, were and -ed',
      about: 'Use was and were, make the past simple of regular verbs, and say the -ed ending in the right way.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'Until now you have talked about the present. In this unit you learn the **past simple**, the most common way to talk about finished actions and situations: *yesterday, last week, in 2019, when I was a child.*\n\nStart with **be**. In the past it has only two forms: **was** for *I, he, she, it*, and **were** for *you, we, they*. Negatives add **not** (*wasn’t, weren’t*), and questions swap the order, just like in the present: *Was she at home? Were you tired?*' },
          { t: 'table', caption: 'Was and were', quiz: true, explain: ['head'], head: ['', 'Positive', 'Negative', 'Question'], rows: [
            ['I / he / she / it', 'I was tired.', 'I wasn’t tired.', 'Was I tired?'],
            ['you / we / they', 'They were late.', 'They weren’t late.', 'Were they late?'],
          ] },
          { t: 'examples', items: [
            { s: 'I **was** at home last night.', n: '*I* + *was*.' },
            { s: 'The tickets **were** very expensive.', n: 'More than one: *were*.' },
            { s: '**Was** the film good? – Yes, it **was**. / No, it **wasn’t**.', n: 'Question and short answers.' },
            { s: 'Where **were** you born? – I **was** born in Cairo.', n: '*be born* is always in the past.' },
          ] },
        ],
        [
          { t: 'text', md: 'For most other verbs, the past simple adds **-ed**: *work → worked, play → played*. The good news: the form is the **same for every person**. *I worked, she worked, they worked.* No **-s**, no changes.\n\nThe spelling follows a few rules, like the **-ing** form you already know.' },
          { t: 'table', caption: 'Spelling of -ed', explain: ['head', 'col0'], head: ['Rule', 'Example'], rows: [
            ['most verbs: add -ed', 'walk → walked, watch → watched'],
            ['ends in -e: add -d', 'live → lived, dance → danced'],
            ['consonant + y: -ied', 'study → studied, try → tried'],
            ['vowel + y: add -ed', 'play → played, stay → stayed'],
            ['short verb, one vowel + one consonant: double it', 'stop → stopped, plan → planned'],
          ] },
          { t: 'text', md: 'There are three ways to **say -ed**, and learners often add an extra sound. The rule depends on the last sound of the verb.\n\nAfter **t** or **d**, -ed is a new syllable /ɪd/: *wanted, needed, decided*.\n\nAfter **p, k, s, sh, ch, f**, it sounds like /t/: *stopped, looked, watched*.\n\nAfter all other sounds, it sounds like /d/: *played, lived, cleaned*.' },
          { t: 'table', caption: 'How to say -ed', explain: ['head', 'col0'], head: ['When', 'Examples'], rows: [
            ['/ɪd/ after t or d', 'wanted, started, needed, ended'],
            ['/t/ after p, k, s, sh, ch, f', 'helped, cooked, missed, finished'],
            ['/d/ after other sounds', 'played, called, opened, lived'],
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I were at work.', 'I was at work.', '*I* takes *was*.'],
            ['She studyed all night.', 'She studied all night.', 'Consonant + *y*: *-ied*.'],
            ['He cook-ed (two syllables).', 'He cooked (one syllable).', 'Only after *t* or *d* is -ed a new syllable.'],
            ['Yesterday I am tired.', 'Yesterday I was tired.', 'A past time needs a past verb.'],
          ] },
          { t: 'dialogue', title: 'After the weekend', lines: [
            { who: 'Nadia', s: 'Hi, Sam! How was your weekend?' },
            { who: 'Sam', s: 'It was great, thanks. We stayed with my aunt in the country.' },
            { who: 'Nadia', s: 'Was the weather good?' },
            { who: 'Sam', s: 'Yes, it was lovely. We walked by the river and played cards in the evening.' },
            { who: 'Nadia', s: 'Sounds perfect. I was at home. I cleaned the flat and watched a film.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write was, were, wasn’t or weren’t.', items: [
            { q: 'My parents ___ in Spain last summer.', a: ['were'], why: '*They*: *were*.' },
            { q: 'I ___ hungry, so I didn’t eat. (not)', a: ['wasn’t', 'was not', "wasn't"], why: '*I* + *wasn’t*.' },
            { q: '___ the shops open on Sunday?', a: ['Were'], why: '*The shops* = *they*: *Were*.' },
            { q: 'The hotel ___ very clean. It was terrible! (not)', a: ['wasn’t', 'was not', "wasn't"], why: '*It*: *wasn’t*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the past simple of the verb.', items: [
            { q: 'We ___ (stay) at a small hotel.', a: ['stayed'], why: 'Vowel + *y*: add *-ed*.' },
            { q: 'She ___ (study) until midnight.', a: ['studied'], why: 'Consonant + *y*: *-ied*.' },
            { q: 'The bus ___ (stop) outside the station.', a: ['stopped'], why: 'Double the *p*.' },
            { q: 'I ___ (dance) all night at the wedding.', a: ['danced'], why: 'Ends in *-e*: add *-d*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'How does -ed sound?', groups: ['/ɪd/ (an extra syllable)', '/t/', '/d/'], explain: ['groups'], items: [
            { s: 'wanted', g: 0, why: 'After *t*: an extra syllable.' },
            { s: 'decided', g: 0, why: 'After *d*: an extra syllable.' },
            { s: 'cooked', g: 1, why: 'After *k*: /t/.' },
            { s: 'washed', g: 1, why: 'After *sh*: /t/.' },
            { s: 'played', g: 2, why: 'After a vowel sound: /d/.' },
            { s: 'cleaned', g: 2, why: 'After *n*: /d/.' },
          ] },
          { t: 'text', md: 'In **Part 5 of the A2 Key Reading paper**, you write one word in each gap. With past stories, the missing word is often **was, were, did** or a small word like **at, on, ago**.' },
          { t: 'ex', kind: 'gap', h: 'In the format of the A2 Key exam (Reading, Part 5): write one word in each gap.', items: [
            { q: 'Last Saturday I ___ at my friend’s birthday party.', a: ['was'], why: '*I was at the party.*' },
            { q: 'There ___ lots of people there.', a: ['were'], why: '*There were* + plural.' },
            { q: 'We danced ___ two in the morning!', a: ['until', 'till'], why: '*until* + a time.' },
            { q: 'It ___ a great evening.', a: ['was'], why: '*It was*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 5, check that the word in the gap agrees with the sentence: **there was** + one thing, **there were** + more than one. It is a favourite exam point.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor. Listen to the -ed endings.', tutor: 'omar', items: [
            { a: 'We wanted to stay longer.' },
            { a: 'I cooked dinner and watched a film.' },
            { a: 'Where were you born?' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Went, saw, did you…?',
      about: 'Learn the most common irregular verbs, and make questions and negatives with did.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Many of the most common verbs are **irregular**: their past form does not end in **-ed**. *go → went, see → saw, have → had.* There is no rule, so they must be learned, but the good news is that the same few verbs appear again and again. Learn the ones in the table first: they cover most everyday stories.\n\nLike regular verbs, the irregular past is the **same for every person**: *I went, she went, they went.*' },
          { t: 'table', caption: 'Common irregular verbs', quiz: true, explain: ['head'], head: ['Verb', 'Past simple', 'Verb', 'Past simple'], rows: [
            ['go', 'went', 'come', 'came'],
            ['have', 'had', 'get', 'got'],
            ['see', 'saw', 'buy', 'bought'],
            ['do', 'did', 'eat', 'ate'],
            ['make', 'made', 'drink', 'drank'],
            ['take', 'took', 'meet', 'met'],
            ['say', 'said', 'write', 'wrote'],
            ['leave', 'left', 'find', 'found'],
          ] },
          { t: 'tip', art: 'owl', md: 'Learn irregular verbs in **groups that sound alike**: *buy – bought, bring – brought, think – thought*; *drink – drank, swim – swam, sing – sang*. Then use them in a sentence about yourself: *Last week I bought a jacket.*' },
        ],
        [
          { t: 'text', md: 'For **questions** and **negatives** in the past, use **did** (the past of *do*) for every person. Then the main verb goes back to its **simple form**, for regular and irregular verbs alike.\n\n*She went to Rome.* → *Did she go to Rome? She didn’t go to Rome.*\n\nThis is the same system as the present (*does she go?*), only with **did**. A very common mistake is to put the past twice: *Did she went?* is wrong: **did** is already past.' },
          { t: 'table', caption: 'The past simple with did', quiz: true, explain: ['head'], head: ['Positive', 'Negative', 'Question'], rows: [
            ['I saw the film.', 'I didn’t see the film.', 'Did you see the film?'],
            ['They went home.', 'They didn’t go home.', 'Did they go home?'],
            ['She worked late.', 'She didn’t work late.', 'Did she work late?'],
          ] },
          { t: 'examples', items: [
            { s: '**Did** you **have** a good time? – Yes, I **did**.', n: 'Short answer: *Yes, I did. / No, I didn’t.*' },
            { s: 'Where **did** you **go**? – We **went** to the beach.', n: 'Question word + *did*; the answer uses the past form.' },
            { s: 'He **didn’t call** me yesterday.', n: '*didn’t* + simple form.' },
            { s: 'What **did** she **say**? – She **said** sorry.', n: 'Irregular *say → said*.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Did you went to the party?', 'Did you go to the party?', '*did* + simple form.'],
            ['I didn’t saw him.', 'I didn’t see him.', '*didn’t* + simple form.'],
            ['We goed to the cinema.', 'We went to the cinema.', '*go* is irregular.'],
            ['Where you went?', 'Where did you go?', 'Questions need *did*.'],
          ] },
          { t: 'dialogue', title: 'Monday morning at work', lines: [
            { who: 'Karim', s: 'Morning, Joanna! Did you have a good weekend?' },
            { who: 'Joanna', s: 'Yes, thanks. I went to my sister’s wedding.' },
            { who: 'Karim', s: 'Oh, lovely! Where was it?' },
            { who: 'Joanna', s: 'In a small village near the sea. We ate outside and danced all night.' },
            { who: 'Karim', s: 'Did you take any photos?' },
            { who: 'Joanna', s: 'Hundreds! But I didn’t bring my phone today, sorry.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the verb and its past form.', pairs: [
            ['buy', 'bought'],
            ['eat', 'ate'],
            ['leave', 'left'],
            ['write', 'wrote'],
            ['find', 'found'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the past simple of the verb.', items: [
            { q: 'We ___ (go) to Paris last spring.', a: ['went'], why: '*go → went*.' },
            { q: 'I ___ (meet) my husband at university.', a: ['met'], why: '*meet → met*.' },
            { q: 'She ___ (not see) the message.', a: ['didn’t see', 'did not see', "didn't see"], why: '*didn’t* + simple form.' },
            { q: 'They ___ (take) a taxi to the airport.', a: ['took'], why: '*take → took*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Did you [enjoyed] the concert?', a: ['enjoy'], why: 'After *did*, the simple form.' },
            { s: 'They [buyed] a new car.', a: ['bought'], why: '*buy* is irregular.' },
            { s: 'Where [you went] last night?', a: ['did you go'], why: 'Questions need *did* + simple form.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Make a question with did.', items: [
            { q: 'She took the train.', cue: 'Did', a: ['Did she take the train?'], why: '*Did* + subject + simple form.' },
            { q: 'They had lunch at one.', cue: 'What time', a: ['What time did they have lunch?'], why: 'Question word + *did* + subject + simple form.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **Part 4 of the A2 Key Reading paper**, you choose the right word for each gap from three options. With stories, the options are often three forms of one verb: check the time of the story and whether there is a **did**.' },
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam (Reading, Part 4): choose the right word for each gap.', items: [
            { q: 'Last year my family ___ to Scotland for a holiday.', o: ['went', 'go', 'goes'], why: '*Last year*: past simple.' },
            { q: 'We didn’t ___ a car, so we travelled by train.', o: ['have', 'had', 'having'], why: '*didn’t* + simple form.' },
            { q: 'My brother ___ lots of photos of the mountains.', o: ['took', 'take', 'taken'], why: 'Past simple of *take*.' },
            { q: 'Did you ___ any Scottish food?', o: ['try', 'tried', 'trying'], why: '*Did* + simple form.' },
          ] },
          { t: 'tip', art: 'owl', md: 'If the sentence already has **did** or **didn’t**, the answer is the **simple form** of the verb. This one rule gets you many marks in Part 4.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'Did you have a good weekend?' },
            { a: 'We went to my sister’s wedding.' },
            { a: 'I didn’t bring my phone today.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'When, and what next?',
      about: 'Say when something happened, and tell events in order with first, then, after that and finally.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A story needs **time words**: when did it happen? English uses different patterns, and the small words are important.\n\n**last** + week, month, year, Saturday, night: *last summer* (no *the*, no *in*).\n\n**ago** after a length of time: *two days ago, ten years ago*.\n\n**in** + month, year, season: *in May, in 2020, in the winter*.\n\n**on** + day or date: *on Monday, on 3 June, on my birthday*.\n\n**at** + clock time or short moment: *at six o’clock, at the weekend, at Christmas*.\n\nAnd **yesterday** stands alone: *yesterday morning, yesterday evening*, but **last night** (not *yesterday night*).' },
          { t: 'table', caption: 'Past time expressions', explain: ['head', 'col0'], head: ['Pattern', 'Example'], rows: [
            ['last + time', 'last week, last Friday'],
            ['time + ago', 'three days ago'],
            ['in + month / year / season', 'in July, in 2019'],
            ['on + day / date', 'on Tuesday, on 5 May'],
            ['at + clock time', 'at ten o’clock'],
            ['yesterday + part of day', 'yesterday afternoon'],
          ] },
          { t: 'tip', art: 'owl', md: 'Say **last night**, not *yesterday night*, and **this morning** for earlier today. *I saw her this morning* is fine in the past simple when the morning is over.' },
        ],
        [
          { t: 'text', md: 'To tell a story **in order**, use sequence words at the start of each step: **First, … Then, … After that, … Finally, …** You can also use **when** to join two actions: *When I got home, I made dinner.*\n\nThese words make your story easy to follow, and examiners look for them in the A2 Key writing task.' },
          { t: 'examples', items: [
            { s: '**First**, we had breakfast at the hotel.', n: 'The first step.' },
            { s: '**Then** we took a boat to the island.', n: 'The next step (no comma needed after *then*).' },
            { s: '**After that**, we swam and had lunch on the beach.', n: 'Another step.' },
            { s: '**Finally**, we came back at sunset.', n: 'The last step.' },
            { s: '**When** the rain started, we ran to a café.', n: 'Two actions joined with *when*.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I saw him before two days.', 'I saw him two days ago.', 'A length of time + *ago*.'],
            ['in the last summer', 'last summer', 'No *in* and no *the* with *last*.'],
            ['yesterday night', 'last night', 'The fixed phrase is *last night*.'],
            ['in Monday', 'on Monday', 'Days take *on*.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write in, on, at, ago or last.', items: [
            { q: 'I started this job ___ 2021.', a: ['in'], why: 'A year: *in*.' },
            { q: 'We arrived ___ Sunday evening.', a: ['on'], why: 'A day: *on*.' },
            { q: 'She called me two hours ___.', a: ['ago'], why: 'A length of time + *ago*.' },
            { q: 'The film started ___ eight o’clock.', a: ['at'], why: 'A clock time: *at*.' },
            { q: 'I went to the dentist ___ week.', a: ['last'], why: '*last week*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'After that we went to a museum.', why: 'Sequence word first.' },
            { a: 'When I got home I made dinner.', why: '*When* + first action, then the second.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **Part 7 of the A2 Key Writing paper**, you look at **three pictures** that show a story and write about it in **35 words or more**. You must tell all three parts of the story, in the past, in order.\n\nHere the pictures are described in words: *picture 1: a man waits at a bus stop in the rain; picture 2: a car drives through a puddle and splashes him; picture 3: he arrives at the office wet and his colleagues laugh.*' },
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam (Writing, Part 7): which story is the best answer?', items: [
            { q: 'Choose the best story for the three pictures.', o: ['Last Monday Tom waited for the bus in the rain. Then a car drove through a big puddle and the water went all over him! When he arrived at work, he was very wet and his colleagues laughed.', 'Tom waits for the bus. It is raining. He is very sad and he is wet.', 'Last Monday Tom waited for the bus in the rain. It was cold and he wanted a coffee. He was tired.'], why: 'Only the first one tells all three pictures, in the past, in order.' },
          ] },
          { t: 'tip', art: 'owl', md: 'For Part 7, write **one or two sentences for each picture**, use the **past simple**, and join the parts with **then, after that, when**. Give the person a name: it makes your story easier to write.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'I saw her two days ago.' },
            { a: 'First we had breakfast, then we took a boat.' },
            { a: 'When I got home, I made dinner.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'A bad day',
      about: 'Read a short story about a bad day, and answer questions about it in the format of A2 Key.',
      art: 'monster',
      spreads: [
        [
          { t: 'text', md: 'Now read a full story that uses everything from this unit: **was** and **were**, regular and irregular verbs, **did** in questions and negatives, and time words. While you read, notice how the writer moves the story forward with **then, after that** and **when**.' },
          { t: 'reading', title: 'The worst Tuesday', md: 'Last Tuesday was a very bad day for Elena. She had a job interview at ten o’clock, but her alarm didn’t ring and she woke up at nine.\n\nShe got dressed in five minutes and ran to the bus stop. The bus was full, so she waited for the next one. When it finally came, there was a lot of traffic and it moved very slowly.\n\nElena arrived at the office at twenty past ten. She was very nervous, and when she sat down, she dropped her coffee on the floor. The manager smiled and said, “Don’t worry. My first interview was a disaster too.”\n\nTwo days later, Elena got an email. She got the job!' },
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Elena’s interview was in the afternoon.', a: 'f', why: 'It was at ten o’clock.' },
            { q: 'She took the first bus.', a: 'f', why: 'The bus was full, so she waited for the next one.' },
            { q: 'She arrived twenty minutes late.', a: 't', why: 'At twenty past ten for a ten o’clock interview.' },
            { q: 'The manager was angry.', a: 'f', why: 'He smiled and said *Don’t worry*.' },
            { q: 'Elena started the new job the next week.', a: 'ng', why: 'The text says she got the job, not when she started.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **Part 3 of the A2 Key Reading paper**, you read a longer text and answer **five questions**, each with **three options**. The questions follow the order of the text, and the words in the options are often different from the words in the text.' },
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam (Reading, Part 3): choose the right answer.', items: [
            { q: 'Why was Elena late?', o: ['Her alarm didn’t work and the bus was slow.', 'She forgot the address of the office.', 'She stopped to buy a coffee.'], why: 'Her alarm didn’t ring and there was a lot of traffic.' },
            { q: 'What happened when Elena sat down?', o: ['She spilled a drink.', 'She forgot her CV.', 'She fell asleep.'], why: '*She dropped her coffee on the floor* = she spilled a drink.' },
            { q: 'How did the manager feel about Elena’s problems?', o: ['He understood.', 'He was surprised.', 'He was annoyed.'], why: 'He said his own first interview was a disaster too.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 3, find the part of the text for each question, then read it **carefully**. The right option usually says the same thing **in different words** (*dropped her coffee = spilled a drink*). An option that repeats words from the text is often a trap.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the past simple form from the story.', items: [
            { q: 'Her alarm didn’t ring and she ___ up at nine.', a: ['woke'], why: '*wake → woke*.' },
            { q: 'She ___ dressed in five minutes.', a: ['got'], why: '*get → got*.' },
            { q: 'The manager smiled and ___, “Don’t worry.”', a: ['said'], why: '*say → said*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Make a question about the story.', items: [
            { q: 'Elena arrived at twenty past ten.', cue: 'What time', a: ['What time did Elena arrive?', 'What time did she arrive?'], why: 'Question word + *did* + subject + simple form.' },
            { q: 'She got the job.', cue: 'Did', a: ['Did she get the job?', 'Did Elena get the job?'], why: '*Did* + subject + *get*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'Last Tuesday was a very bad day.' },
            { a: 'She woke up at nine and ran to the bus stop.' },
            { a: 'Two days later she got the job.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'We ___ very tired after the trip.', o: ['were', 'was', 'did'], why: '*We*: *were*.' },
      { q: 'Did you ___ the new museum?', o: ['visit', 'visited', 'visits'], why: '*Did* + simple form.' },
      { q: 'I met him three years ___.', o: ['ago', 'last', 'before'], why: 'A length of time + *ago*.' },
      { q: 'She ___ a lovely dress for the party.', o: ['bought', 'buyed', 'buys'], why: '*buy → bought*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the past simple of the verb.', items: [
      { q: 'They ___ (try) the new restaurant.', a: ['tried'], why: 'Consonant + *y*: *-ied*.' },
      { q: 'I ___ (not go) to work yesterday.', a: ['didn’t go', 'did not go', "didn't go"], why: '*didn’t* + simple form.' },
      { q: 'He ___ (leave) the house at seven.', a: ['left'], why: '*leave → left*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write in, on, at or last.', items: [
      { q: 'My birthday was ___ Friday.', a: ['on', 'last'], why: '*on Friday* or *last Friday*.' },
      { q: 'We moved here ___ 2018.', a: ['in'], why: 'A year: *in*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Where did you go last summer?', why: 'Question word + *did* + subject + verb.' },
      { a: 'After that we had dinner by the sea.', why: 'Sequence word first.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'I [didn’t saw] the email.', a: ['didn’t see', 'did not see'], why: '*didn’t* + simple form.' },
      { s: 'She called me [yesterday night].', a: ['last night'], why: 'The fixed phrase is *last night*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the verb and its past form.', pairs: [
      ['go', 'went'],
      ['see', 'saw'],
      ['take', 'took'],
      ['make', 'made'],
    ] },
  ],
};
