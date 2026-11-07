// English A1, unit 7, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for the owner's review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one speaking task, and one task in the format of the A2 Key exam.
export const UNIT = {
  id: 'u7',
  title: 'Clothes and weather',
  goal: 'Describe what people wear and the weather, and say what is happening now.',
  art: 'sun',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['clothes', 'colours', 'weather', 'seasons', 'months', 'present continuous'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'What do you wear?',
      about: 'Name clothes and colours, use a pair of, and put the adjective before the noun.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'Use the verb **wear** to talk about clothes: *I wear a coat in winter. She wears a red dress to work.* (Not *I carry a coat* or *I use a dress*: in English, clothes go with **wear**.)\n\nSome clothes are **one thing**: *a shirt, a dress, a coat, a jumper, a hat*. Use **a** or **an** with them.\n\nOther clothes have **two legs** or come in **two parts**, and they are always **plural**: *trousers, jeans, shorts, shoes, boots, socks*. You cannot say *a trouser*. To count them, say **a pair of**: *a pair of jeans, two pairs of socks*.' },
          { t: 'table', caption: 'Clothes', explain: ['head', 'col1'], quiz: true, head: ['Word', 'One thing or plural?'], rows: [
            ['a shirt', 'one thing'],
            ['a T-shirt', 'one thing'],
            ['a jumper', 'one thing'],
            ['a dress', 'one thing'],
            ['a skirt', 'one thing'],
            ['a coat', 'one thing'],
            ['a hat', 'one thing'],
            ['trousers', 'always plural: a pair of trousers'],
            ['jeans', 'always plural: a pair of jeans'],
            ['shoes', 'plural: a pair of shoes'],
            ['socks', 'plural: a pair of socks'],
          ] },
          { t: 'tip', art: 'owl', md: 'Because **trousers** and **jeans** are plural, the verb is plural too: *My jeans **are** new. These trousers **are** too long.* Not *my jeans is new*.' },
        ],
        [
          { t: 'text', md: 'An **adjective** (a word that describes, like a colour) goes **before** the noun: *a **red** coat, **black** shoes*. Many languages put it after the noun, but English does not: never *a coat red*.\n\nAdjectives in English **never change**. They are the same for one thing and for many things, for a man and for a woman: *a blue shirt, two blue shirts*. Never *blues shirts*.' },
          { t: 'table', caption: 'Colours', explain: ['head'], quiz: true, head: ['Colour', 'Example'], rows: [
            ['black', 'black shoes'],
            ['white', 'a white shirt'],
            ['red', 'a red dress'],
            ['blue', 'blue jeans'],
            ['green', 'a green jumper'],
            ['yellow', 'a yellow T-shirt'],
            ['brown', 'brown boots'],
            ['grey', 'a grey coat'],
            ['pink', 'pink socks'],
          ] },
          { t: 'examples', items: [
            { s: 'I usually **wear** jeans and a T-shirt.', n: '*wear* + clothes.' },
            { s: 'She has a **new red** coat.', n: 'Two adjectives, both before the noun.' },
            { s: 'I need **a pair of** black shoes.', n: '*a pair of* + a plural word.' },
            { s: 'My **trousers are** too short.', n: 'Plural word, plural verb.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Three common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['a coat red', 'a red coat', 'The adjective goes before the noun.'],
            ['I bought a jean.', 'I bought a pair of jeans.', '*jeans* is always plural.'],
            ['two blacks shoes', 'two black shoes', 'Adjectives never take *-s*.'],
          ] },
          { t: 'dialogue', title: 'A new coat', lines: [
            { who: 'Assistant', s: 'Hello. Can I help you?' },
            { who: 'Tom', s: 'Yes, please. I need a warm coat for winter.' },
            { who: 'Assistant', s: 'What colour do you like?' },
            { who: 'Tom', s: 'I usually wear black or grey.' },
            { who: 'Assistant', s: 'What about this grey coat? It’s very warm.' },
            { who: 'Tom', s: 'It’s nice! And do you have a pair of black gloves?' },
            { who: 'Assistant', s: 'Yes, they’re over there, next to the hats.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'One thing or a pair? Sort the clothes.', groups: ['one thing (a …)', 'always plural (a pair of …)'], explain: ['groups'], items: [
            { s: 'shirt', g: 0, why: '*a shirt*: one thing.' },
            { s: 'jeans', g: 1, why: '*a pair of jeans*: always plural.' },
            { s: 'dress', g: 0, why: '*a dress*: one thing.' },
            { s: 'trousers', g: 1, why: '*a pair of trousers*: always plural.' },
            { s: 'jumper', g: 0, why: '*a jumper*: one thing.' },
            { s: 'shorts', g: 1, why: '*a pair of shorts*: always plural.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
            { q: 'She is wearing ___.', o: ['a blue dress', 'a dress blue', 'a blues dress'], why: 'Adjective before the noun, with no *-s*.' },
            { q: 'My new jeans ___ very comfortable.', o: ['are', 'is', 'am'], why: '*jeans* is plural: *are*.' },
            { q: 'I need a new ___ of shoes.', o: ['pair', 'two', 'piece'], why: '*a pair of shoes*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
            { s: 'He has a [car blue].', a: ['blue car'], why: 'Adjective before the noun.' },
            { s: 'These trousers [is] too long.', a: ['are'], why: '*trousers* is plural.' },
            { s: 'I like your [reds] shoes.', a: ['red'], why: 'Adjectives never take *-s*.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Write the sentence. Two words do not belong.', items: [
            { a: 'I usually wear a white shirt to work.', extra: ['whites', 'carry'], why: 'Clothes go with *wear*; adjectives have no *-s*.' },
            { a: 'She wants a pair of brown boots.', extra: ['an', 'is'], why: '*a pair of* + a plural word.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: read the sentences and choose the right word.', items: [
            { q: 'You wear these on your feet. They are warm and you can wear them in the snow.', o: ['boots', 'gloves', 'shorts'], why: 'On your feet, in the snow: *boots*.' },
            { q: 'You wear this on your head when it is sunny or cold.', o: ['a hat', 'a skirt', 'a jumper'], why: 'On your head: *a hat*.' },
            { q: 'You wear these on your legs. They are short, for hot weather.', o: ['shorts', 'socks', 'a coat'], why: 'Short, on your legs, for hot weather: *shorts*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In one part of the A2 Key reading test, you read a **description** and find the word. Look for the key information: **where** you wear it (head, feet, legs) and **when** (hot, cold, rain).' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'I usually wear jeans and a T-shirt.' },
            { a: 'She has a new red coat.' },
            { a: 'I need a pair of black shoes.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'What’s the weather like?',
      about: 'Talk about the weather, the seasons and the months.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'To ask about the weather, say **What’s the weather like?** (Not *How is the weather like?*)\n\nTo answer, English always starts with **It’s**: *It’s sunny. It’s cold. It’s windy.* Here, **it** does not mean a thing. It is an empty subject, because every English sentence needs a subject. Never start with *Is sunny* or *Makes cold*.\n\nMany weather words come from a noun + **-y**: *sun → sunny, cloud → cloudy, wind → windy, rain → rainy*.' },
          { t: 'table', caption: 'The weather', explain: ['head', 'col1'], quiz: true, head: ['Weather', 'What it means'], rows: [
            ['It’s sunny.', 'There is sun.'],
            ['It’s cloudy.', 'There are a lot of clouds.'],
            ['It’s windy.', 'There is a lot of wind.'],
            ['It’s hot.', 'Very warm, like a summer day.'],
            ['It’s warm.', 'Nice, not hot and not cold.'],
            ['It’s cold.', 'You need a coat.'],
            ['It’s raining.', 'Rain is falling now.'],
            ['It’s snowing.', 'Snow is falling now.'],
          ] },
          { t: 'tip', art: 'owl', md: 'When rain or snow is falling **now**, say **It’s raining** or **It’s snowing**. To talk about the weather in general, say **It rains a lot in November** or **It often snows in January**.' },
        ],
        [
          { t: 'text', md: 'There are twelve **months** and four **seasons**. **Months** always start with a **capital letter**: *January, May, October*. **Seasons** do not: *spring, summer, autumn, winter*.\n\nUse **in** with months and seasons: *in March, in the summer, in winter*. In American English, **autumn** is often **fall**.' },
          { t: 'table', caption: 'The months', explain: ['head'], quiz: true, head: ['Month', 'Month', 'Month'], rows: [
            ['January', 'May', 'September'],
            ['February', 'June', 'October'],
            ['March', 'July', 'November'],
            ['April', 'August', 'December'],
          ] },
          { t: 'examples', items: [
            { s: '**What’s the weather like** today? – **It’s** cloudy.', n: 'The question and an answer with *It’s*.' },
            { s: 'It’s very hot **in August**.', n: '*in* + a month.' },
            { s: 'It often snows **in winter**.', n: '*in* + a season, with no capital letter.' },
            { s: 'Take an umbrella. **It’s raining!**', n: 'Rain is falling now.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Three common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Is cold today.', 'It’s cold today.', 'Weather sentences start with *It*.'],
            ['How is the weather like?', 'What’s the weather like?', 'Use *What* with *like*.'],
            ['in july', 'in July', 'Months take a capital letter.'],
          ] },
          { t: 'dialogue', title: 'A phone call', lines: [
            { who: 'Ana', s: 'Hi, Mum! How are you?' },
            { who: 'Mum', s: 'Fine, thanks. What’s the weather like in London?' },
            { who: 'Ana', s: 'It’s cold and cloudy. And it’s raining again!' },
            { who: 'Mum', s: 'Oh no! It’s sunny and warm here in Lisbon.' },
            { who: 'Ana', s: 'Lucky you! It always rains in London in November.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'Write the weather word.', items: [
            { q: 'There are a lot of clouds. It’s ___.', base: 'cloud', a: ['cloudy'], why: '*cloud* + *-y*: *cloudy*.' },
            { q: 'Take your sunglasses. It’s very ___.', base: 'sun', a: ['sunny'], why: '*sun* + *-y*, with a double *n*: *sunny*.' },
            { q: 'Hold your hat! It’s ___ today.', base: 'wind', a: ['windy'], why: '*wind* + *-y*: *windy*.' },
          ] },
          { t: 'ex', kind: 'crossword', h: 'Complete the crossword with months and seasons.', words: [
            { a: 'summer', clue: 'The hot season.' },
            { a: 'winter', clue: 'The cold season, with snow.' },
            { a: 'spring', clue: 'The season after winter.' },
            { a: 'December', clue: 'The last month of the year.' },
            { a: 'March', clue: 'The month after February.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
            { q: 'What’s the weather ___ in your city?', a: ['like'], why: '*What’s the weather like?*' },
            { q: '___ snowing! Let’s make a snowman.', a: ['It’s', 'It is'], why: 'Weather sentences start with *It*.' },
            { q: 'My birthday is ___ June.', a: ['in'], why: '*in* + a month.' },
            { q: 'It often rains ___ autumn.', a: ['in'], why: '*in* + a season.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the best reply.', items: [
            { q: '“What’s the weather like today?”', o: ['It’s windy and cold.', 'It’s Monday.', 'I like it.'], why: 'The question asks about the weather.' },
            { q: '“Is it raining?”', o: ['No, but it’s very cloudy.', 'No, it doesn’t.', 'Yes, I am.'], why: '*Is it …?* : answer with *it*, and give information.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In the A2 Key exam, a wrong answer often uses **the same words** as the question but does not answer it. *“What’s the weather like?” – “I like it.”* has the word *like*, but it is not about the weather.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'What’s the weather like today?' },
            { a: 'It’s cold and cloudy.' },
            { a: 'It often snows in January.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'I’m wearing a hat',
      about: 'Use the present continuous to say what is happening now.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Use the **present continuous** to talk about things that are happening **now**, at this moment: *I’m reading. It’s raining. She’s wearing a hat.*\n\nYou make it with two parts: the verb **be** (**am, is, are**) and the main verb + **-ing**. You already know both parts! *I **am** + **reading**. They **are** + **playing**.*\n\nWords that often go with it: **now**, **right now**, **at the moment**, and **Look!** or **Listen!**' },
          { t: 'table', caption: 'Present continuous', explain: ['head', 'col0'], head: ['', 'Positive', 'Negative', 'Question'], rows: [
            ['I', 'I’m working.', 'I’m not working.', 'Am I working?'],
            ['he / she / it', 'She’s working.', 'She isn’t working.', 'Is she working?'],
            ['you / we / they', 'They’re working.', 'They aren’t working.', 'Are they working?'],
          ] },
          { t: 'tip', art: 'owl', md: 'Do not forget **be**. *I working* or *She wearing a coat* are wrong. The present continuous always has two verbs: **be + -ing**.' },
        ],
        [
          { t: 'text', md: 'The spelling of **-ing** follows the same rules you learned in unit 6. Most verbs just add **-ing**. A final **e** drops: *make → making*. A short verb with one vowel and one consonant at the end doubles the consonant: *sit → sitting, swim → swimming, run → running*.\n\nAnd now the big question: **present simple** or **present continuous**? Use the **present simple** for things you do **usually** or **every day**: *I wear a suit to work.* Use the **present continuous** for what is happening **now**: *Today I’m wearing jeans.*' },
          { t: 'table', caption: 'Every day or now?', explain: ['head', 'col2'], head: ['Present simple', 'Present continuous', 'The difference'], rows: [
            ['I wear a suit to work.', 'Today I’m wearing jeans.', 'usually / now'],
            ['It rains a lot in April.', 'It’s raining now.', 'in general / at this moment'],
            ['She plays tennis on Fridays.', 'She’s playing tennis right now.', 'a habit / at this moment'],
          ] },
          { t: 'examples', items: [
            { s: '**Look!** The children **are playing** in the snow.', n: '*Look!* shows it is happening now.' },
            { s: 'I **can’t** talk now. **I’m driving.**', n: 'At this moment.' },
            { s: 'Sam **isn’t wearing** a coat **today**.', n: 'The negative: *isn’t* + *-ing*.' },
            { s: '**What are you doing?** – I’m cooking.', n: 'The most common question in the present continuous.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Three common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['She wearing a hat.', 'She’s wearing a hat.', 'Do not forget *be*.'],
            ['I am siting here.', 'I am sitting here.', '*sit*: double the *t*.'],
            ['I’m wearing a suit every day.', 'I wear a suit every day.', '*every day*: present simple.'],
          ] },
          { t: 'dialogue', title: 'On the phone', lines: [
            { who: 'Ben', s: 'Hi, Grace! What are you doing?' },
            { who: 'Grace', s: 'I’m sitting in a café. I’m waiting for Lucy.' },
            { who: 'Ben', s: 'Is it raining there?' },
            { who: 'Grace', s: 'No, it isn’t. It’s sunny! What about you?' },
            { who: 'Ben', s: 'I’m working at home. I’m wearing my pyjamas!' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the present continuous of wear.', verb: 'wear', tense: 'present continuous', rows: [
            ['I', 'am wearing|’m wearing'],
            ['you', 'are wearing|’re wearing'],
            ['she', 'is wearing|’s wearing'],
            ['we', 'are wearing|’re wearing'],
            ['they', 'are wearing|’re wearing'],
          ] },
          { t: 'ex', kind: 'wordform', h: 'Write the verb with -ing.', items: [
            { q: 'Shh! The baby is ___.', base: 'sleep', a: ['sleeping'], why: 'Just add *-ing*.' },
            { q: 'We are ___ a cake for Mum.', base: 'make', a: ['making'], why: 'Drop the *e*: *making*.' },
            { q: 'Why are you ___ on the floor?', base: 'sit', a: ['sitting'], why: 'Double the *t*: *sitting*.' },
            { q: 'Look! Leo is ___ in the lake.', base: 'swim', a: ['swimming'], why: 'Double the *m*: *swimming*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Now or usually? Sort the sentences.', groups: ['now (present continuous)', 'usually (present simple)'], explain: ['groups'], items: [
            { s: 'Look! It’s snowing.', g: 0, why: '*Look!*: it is happening now.' },
            { s: 'I walk to work every day.', g: 1, why: '*every day*: a habit.' },
            { s: 'She’s talking on the phone at the moment.', g: 0, why: '*at the moment*: now.' },
            { s: 'We often go to the beach in July.', g: 1, why: '*often*: a habit.' },
            { s: 'They aren’t wearing coats today.', g: 0, why: '*today*, at this moment.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
            { q: 'Be quiet! I ___ a film.', o: ['’m watching', 'watch', 'watching'], why: 'Now: *be* + *-ing*.' },
            { q: 'My father ___ a tie every day.', o: ['wears', 'is wearing', 'wearing'], why: '*every day*: present simple.' },
            { q: '“What ___ you doing?” – “I’m reading.”', o: ['are', 'do', 'is'], why: '*What are you doing?*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it for now. Use the present continuous.', items: [
            { q: 'I read a book.', cue: 'I’m', a: ['I’m reading a book.', 'I am reading a book.'], why: '*I* + *am* + *reading*.' },
            { q: 'She wears a hat.', cue: 'She’s', a: ['She’s wearing a hat.', 'She is wearing a hat.'], why: '*she* + *is* + *wearing*.' },
            { q: 'They play football.', cue: 'They’re', a: ['They’re playing football.', 'They are playing football.'], why: '*they* + *are* + *playing*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the best reply.', items: [
            { q: '“What are you doing?”', o: ['I’m making dinner.', 'I make dinner.', 'Yes, I am.'], why: 'The question is about now: answer in the present continuous.' },
            { q: '“Are you wearing your new shoes?”', o: ['Yes, I am. Do you like them?', 'Yes, I do.', 'Yes, they wear.'], why: 'A question with *Are you* has the short answer *Yes, I am*.' },
          ] },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'What are you doing?' },
            { a: 'I’m sitting in a café.' },
            { a: 'It isn’t raining today.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'A weekend away',
      about: 'Read two messages from a weekend away, and describe a picture: who is there, what they are wearing and doing.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'When you **describe a picture** or a place, you use everything from this unit together: **There is / There are** for what you can see, the **weather** with *It’s*, **clothes** with *wear*, and the **present continuous** for what people are doing.\n\nA good description goes from big to small: first the place and the weather, then the people, then the details.' },
          { t: 'examples', items: [
            { s: '**It’s** a sunny day at the beach.', n: 'The place and the weather first.' },
            { s: '**There are** four people.', n: 'What you can see.' },
            { s: 'A man **is reading** a newspaper.', n: 'What a person is doing now.' },
            { s: 'He**’s wearing** shorts and a blue T-shirt.', n: 'Clothes, with colours before the nouns.' },
            { s: 'Two children **are playing** in the sea.', n: 'More than one person: *are*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In the speaking test of an exam, describing a picture is a common task. Do not stop after one sentence. Use this order: **place and weather → people → clothes → actions**. It gives you at least five sentences.' },
        ],
        [
          { t: 'reading', title: 'Two messages', md: '**Grace to Ben**\nHi Ben! We’re at the seaside for the weekend. It’s Saturday morning and the weather is great: it’s sunny and warm. I’m sitting on the beach and I’m wearing my new yellow dress. Lucy is swimming in the sea. The water is very cold, but she loves it! How are you?\n\n**Ben to Grace**\nHi Grace! Lucky you! Here in the city it’s cloudy and windy. I’m not doing anything special. I’m sitting on the sofa in my old jumper and I’m watching a film. I usually go running on Saturdays, but today it’s raining. Have a great weekend!' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the messages. True, false or not given?', items: [
            { q: 'The weather at the seaside is sunny.', a: 't', why: '*It’s sunny and warm.*' },
            { q: 'Grace is swimming in the sea.', a: 'f', why: 'Lucy is swimming. Grace is sitting on the beach.' },
            { q: 'The water is warm.', a: 'f', why: '*The water is very cold.*' },
            { q: 'Ben is watching a film.', a: 't', why: '*I’m watching a film.*' },
            { q: 'Ben usually goes running on Sundays.', a: 'f', why: 'He usually goes running on *Saturdays*.' },
            { q: 'Lucy is Grace’s sister.', a: 'ng', why: 'The messages do not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'What is the person doing?', pairs: [
            ['Grace', 'is sitting on the beach'],
            ['Lucy', 'is swimming in the sea'],
            ['Ben', 'is watching a film'],
            ['The weather in the city', 'is cloudy and windy'],
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order to describe a picture.', items: [
            { a: 'It’s a cold day in the park.', why: 'Start with the place and the weather.' },
            { a: 'A woman is wearing a long red coat.', why: 'Person, *is wearing*, then the clothes with the colour before the noun.' },
            { a: 'Two boys are playing football.', why: 'Two people: *are* + *-ing*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake in this description.', items: [
            { s: 'It’s a beautiful day and the sun [shining].', a: ['is shining'], why: 'Present continuous: *be* + *-ing*.' },
            { s: 'A girl is wearing a [hat green].', a: ['green hat'], why: 'The colour goes before the noun.' },
            { s: 'Two old men [is] sitting on a bench.', a: ['are'], why: 'Two people: *are*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: read the message and choose the right answer.', items: [
            { q: 'Hi Max, take your coat and an umbrella – it’s raining and it’s very cold here! See you at 6. Eva', o: ['Eva thinks the weather is bad.', 'Eva is wearing a coat.', 'Eva can’t meet Max.'], why: 'Rain and cold: she tells Max the weather is bad.' },
            { q: 'Kim: I’m at the shop. Do you want the blue jumper or the green one? They’re both in your size.', o: ['Kim wants to know which colour to buy.', 'Kim is wearing a blue jumper.', 'Kim doesn’t like green.'], why: 'She asks which one: she wants to know which colour.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In A2 Key reading, think about **why** the person writes the message: to give information, to ask a question, or to change a plan. The right answer usually says the reason in different words.' },
        ],
        [
          { t: 'text', md: 'Now describe the place where you are. What is the weather like? What are you wearing? What are the people near you doing? Then say these sentences after the tutor.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'It’s a sunny day at the beach.' },
            { a: 'A man is reading a newspaper.' },
            { a: 'He’s wearing shorts and a blue T-shirt.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
      { q: 'I’d like ___, please.', o: ['a pair of jeans', 'a jean', 'a jeans'], why: '*jeans* is always plural: *a pair of jeans*.' },
      { q: 'She has ___.', o: ['a green coat', 'a coat green', 'a greens coat'], why: 'Colour before the noun, with no *-s*.' },
      { q: '___ cold and windy today.', o: ['It’s', 'Is', 'Makes'], why: 'Weather sentences start with *It*.' },
      { q: 'Be quiet, please. The baby ___.', o: ['is sleeping', 'sleeps', 'sleeping'], why: 'Now: *be* + *-ing*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'What’s the weather ___ in Rome?', a: ['like'], why: '*What’s the weather like?*' },
      { q: 'My birthday is ___ October.', a: ['in'], why: '*in* + a month.' },
      { q: 'My new shoes ___ very comfortable.', a: ['are'], why: '*shoes* is plural.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Write the right form of the word.', items: [
      { q: 'Take an umbrella. It’s ___ outside.', base: 'rain', a: ['raining'], why: 'Rain falling now: *it’s raining*.' },
      { q: 'There are a lot of clouds. It’s ___.', base: 'cloud', a: ['cloudy'], why: '*cloud* + *-y*.' },
      { q: 'Why are you ___ there? Come here!', base: 'sit', a: ['sitting'], why: 'Double the *t*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'He [wearing] a black jumper.', a: ['is wearing', '’s wearing'], why: 'Do not forget *be*.' },
      { s: 'I go to work by bus and I [am wearing] a suit every day.', a: ['wear'], why: '*every day*: present simple.' },
      { s: 'It’s very cold in [january].', a: ['January'], why: 'Months take a capital letter.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it for now.', items: [
      { q: 'We eat lunch.', cue: 'We’re', a: ['We’re eating lunch.', 'We are eating lunch.'], why: '*we* + *are* + *eating*.' },
      { q: 'It snows.', cue: 'It’s', a: ['It’s snowing.', 'It is snowing.'], why: '*it* + *is* + *snowing*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the best answer.', pairs: [
      ['What’s the weather like?', 'It’s sunny and hot.'],
      ['What are you doing?', 'I’m cooking dinner.'],
      ['Is it raining?', 'No, it isn’t.'],
      ['Can I help you?', 'Yes, I need a coat.'],
    ] },
    { t: 'ex', kind: 'sort', h: 'Now or usually?', groups: ['now', 'usually'], explain: ['groups'], items: [
      { s: 'Listen! Someone is singing.', g: 0, why: '*Listen!*: now.' },
      { s: 'I wear a uniform at work.', g: 1, why: 'A habit: present simple.' },
      { s: 'They’re waiting for the bus.', g: 0, why: 'Present continuous: now.' },
      { s: 'It snows a lot in Canada.', g: 1, why: 'In general: present simple.' },
    ] },
  ],
};
