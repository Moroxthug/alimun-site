// English A1, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'Clothes and weather',
  goal: 'Describe what people wear and the weather, and say what is happening now.',
  art: 'sun',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['clothes', 'colours', 'weather', 'seasons', 'months', 'present continuous'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'What do you wear?',
      about: 'Name clothes and colours and put the adjective before the noun.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'Use **wear** to talk about clothes: *I wear a coat in winter. She wears a red dress.* Here are common clothes. Some are always **plural**: *trousers, jeans, shoes, boots, socks*. Say **a pair of** to talk about one of them: *a pair of jeans*. Say **these** and **are** with them: *These jeans are new.*' },
          { t: 'table', caption: 'Clothes', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Example'], rows: [
            ['shirt', 'He wears a white shirt.'],
            ['jumper', 'I like your grey jumper.'],
            ['jacket', 'She has got a black jacket.'],
            ['coat', 'I wear a coat in winter.'],
            ['dress', 'She wears a yellow dress.'],
            ['skirt', 'I’d like a blue skirt.'],
            ['trousers', 'These trousers are new.'],
            ['jeans', 'I wear jeans every day.'],
            ['shoes', 'My shoes are brown.'],
            ['hat', 'He wears a hat in the sun.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Some words are different in the USA. A **jumper** in Britain is a **sweater** in the USA. **Trousers** are **pants**, and **trainers** are **sneakers**. In Britain, **pants** are underwear.' },
        ],
        [
          { t: 'text', md: 'An **adjective** goes **before** the noun and it never changes: *a red coat, red coats*. Do not put it after the noun: not *a coat red*. Here are the main colours.' },
          { t: 'table', caption: 'Colours', explain: ['head'], quiz: true, head: ['Colour', 'Example'], rows: [
            ['red', 'a red coat'],
            ['blue', 'blue jeans'],
            ['green', 'a green scarf'],
            ['yellow', 'a yellow dress'],
            ['black', 'black shoes'],
            ['white', 'a white shirt'],
            ['grey', 'a grey jumper'],
            ['brown', 'brown boots'],
          ] },
          { t: 'dialogue', title: 'A new coat', lines: [
            { who: 'Ben', s: 'I like your coat, Grace.' },
            { who: 'Grace', s: 'Thanks. It’s new.' },
            { who: 'Ben', s: 'Is it warm?' },
            { who: 'Grace', s: 'Yes, it’s very warm. And the colour is nice, too. It’s dark green.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb wear.', items: [
            { q: 'I ___ a coat in winter.', a: ['wear'], why: 'With *I*: *wear*.' },
            { q: 'She ___ a red dress.', a: ['wears'], why: 'With *she*: *wears*.' },
            { q: 'They ___ jeans every day.', a: ['wear'], why: 'With *they*: *wear*.' },
            { q: 'He ___ a hat in the sun.', a: ['wears'], why: 'With *he*: *wears*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'One thing or a pair? Sort the clothes.', groups: ['one thing', 'a pair (plural)'], explain: ['groups'], items: [
            { s: 'shirt', g: 0, why: 'One thing: *a shirt*.' },
            { s: 'jeans', g: 1, why: 'Always plural: *a pair of jeans*.' },
            { s: 'coat', g: 0, why: 'One thing: *a coat*.' },
            { s: 'shoes', g: 1, why: 'Always plural: *a pair of shoes*.' },
            { s: 'trousers', g: 1, why: 'Always plural: *a pair of trousers*.' },
            { s: 'dress', g: 0, why: 'One thing: *a dress*.' },
            { s: 'socks', g: 1, why: 'Always plural: *a pair of socks*.' },
            { s: 'hat', g: 0, why: 'One thing: *a hat*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the colour.', pairs: [
            ['the sky', 'blue'],
            ['grass', 'green'],
            ['a banana', 'yellow'],
            ['snow', 'white'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'I have got a ___ coat.', o: ['red', 'reds', 'redly'], why: 'An adjective never changes.' },
            { q: 'Where does the adjective go?', o: ['a red coat', 'a coat red', 'a coat of red'], why: 'The adjective goes before the noun.' },
            { q: 'These ___ are new.', o: ['trousers', 'trouser', 'a trousers'], why: '*Trousers* is always plural.' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Find the odd one out.', items: [
            { o: ['blue', 'shirt', 'jacket', 'dress'], why: '*Blue* is a colour. The others are clothes.' },
            { o: ['coat', 'red', 'green', 'yellow'], why: '*Coat* is a piece of clothing. The others are colours.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'She wears a red dress.', why: 'Subject, verb, *a*, adjective, noun.' },
            { a: 'I like your blue coat.', why: '*Like* + possessive + adjective + noun.' },
            { a: 'He has got brown boots.', why: '*Has got* + adjective + noun.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'I have got a [coat red].', a: ['red coat'], why: 'The adjective goes before the noun.' },
            { s: 'These [trouser] are new.', a: ['trousers'], why: '*Trousers* is always plural.' },
            { s: 'She [wear] a red dress.', a: ['wears'], why: 'With *she*, add *-s*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'What’s the weather like?',
      about: 'Talk about the weather, the seasons and the months.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'To ask about the weather, say **What’s the weather like?** To answer, say **It’s** + an adjective: *It’s sunny. It’s cold.* Say **it’s raining** and **it’s snowing** when the rain or the snow is falling now. Say **in** with a season or a month: *in summer, in July*.' },
          { t: 'table', caption: 'The weather', explain: ['head', 'col1'], quiz: true, head: ['Weather', 'Example'], rows: [
            ['sunny', 'It’s sunny today.'],
            ['cloudy', 'It’s cloudy in the morning.'],
            ['rainy', 'It’s rainy in Leeds.'],
            ['windy', 'It’s very windy.'],
            ['snowy', 'It’s snowy in the mountains.'],
            ['hot', 'It’s hot in August.'],
            ['warm', 'It’s warm in May.'],
            ['cold', 'It’s cold in winter.'],
          ] },
          { t: 'tip', art: 'owl', md: '**Sunny, cloudy, rainy, windy** and **snowy** are adjectives. Use them with **it’s**. The verbs **rain** and **snow** are for now: *It’s raining.* The word **weather** is not countable: say *the weather is nice*, not *the weathers are nice*.' },
        ],
        [
          { t: 'text', md: 'There are twelve **months** and four **seasons**. Months start with a **capital letter**, and seasons do not. In the north of the world, **spring** starts in March, **summer** in June, **autumn** in September and **winter** in December.' },
          { t: 'table', caption: 'The months', explain: ['head'], quiz: true, head: ['Month', 'Month'], rows: [
            ['January', 'July'],
            ['February', 'August'],
            ['March', 'September'],
            ['April', 'October'],
            ['May', 'November'],
            ['June', 'December'],
          ] },
          { t: 'dialogue', title: 'A phone call', lines: [
            { who: 'Ben', s: 'What’s the weather like in Madrid?' },
            { who: 'Grace', s: 'It’s sunny and warm. And in Leeds?' },
            { who: 'Ben', s: 'It’s cold and rainy. I don’t like winter.' },
            { who: 'Grace', s: 'My favourite season is spring. It’s not too hot and not too cold.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'crossword', h: 'Write the words.', words: [
            { a: 'sunny', clue: 'You can see the sun. It is …' },
            { a: 'cloudy', clue: 'There are many clouds. It is …' },
            { a: 'windy', clue: 'There is a lot of wind. It is …' },
            { a: 'snowy', clue: 'There is snow. It is …' },
            { a: 'winter', clue: 'The coldest season.' },
            { a: 'summer', clue: 'The hottest season.' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs.', pairs: [
            ['spring', 'March'],
            ['summer', 'July'],
            ['autumn', 'October'],
            ['winter', 'January'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'It’s very ___ in winter.', a: ['cold'], why: 'In winter it is *cold*.' },
            { q: 'It’s very ___ today. I can see the sun.', a: ['sunny'], why: 'You can see the sun: *sunny*.' },
            { q: 'My birthday is ___ June.', a: ['in'], why: '*In* + a month.' },
            { q: 'It’s hot ___ summer.', a: ['in'], why: '*In* + a season.' },
            { q: 'What’s the weather ___?', a: ['like'], why: '*What’s the weather like?*' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: '“What’s the weather like?” – “It’s ___.”', o: ['sunny', 'sun', 'summer'], why: 'After *it’s* use an adjective: *sunny*.' },
            { q: 'We have snow in ___.', o: ['winter', 'summer', 'July'], why: 'Snow comes in *winter*.' },
            { q: '___ is the first month of the year.', o: ['January', 'Monday', 'Winter'], why: '*January* is the first month.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'What is the weather like?', why: 'Question word, *is*, *the weather*, *like*.' },
            { a: 'It is very cold in winter.', why: '*It is* + adjective + *in* + season.' },
            { a: 'My birthday is in June.', why: '*In* + a month.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'It’s cold [at] winter.', a: ['in'], why: '*In* + a season.' },
            { s: 'My birthday is [on] June.', a: ['in'], why: '*In* + a month.' },
            { s: 'It’s [sun] today.', a: ['sunny'], why: 'After *it’s* use an adjective: *sunny*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'I’m wearing a hat',
      about: 'Use the present continuous to say what is happening now.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Use the **present continuous** to say what is happening **now**: *I am reading. She is wearing a hat.* Make it with **be** (**am, is, are**) and the verb + **-ing**. Words that go with it are **now**, **today** and **at the moment**. For the negative, add **not**: *She isn’t wearing a hat.* For a question, put **be** before the subject: *Are you wearing a coat?*' },
          { t: 'table', caption: 'Present continuous', explain: ['head', 'col1'], head: ['', 'Example'], rows: [
            ['statement', 'I am wearing a coat. / I’m wearing a coat.'],
            ['negative', 'She isn’t wearing a hat.'],
            ['question', 'Are you wearing a coat?'],
            ['short answer', 'Yes, I am. / No, I’m not.'],
            ['question word', 'What are you doing?'],
          ] },
          { t: 'tip', art: 'owl', md: 'Do not use the present continuous for a habit. Say **I read every day** (present simple) but **I’m reading now** (present continuous). Words such as **every day** and **on Sundays** go with the present simple.' },
        ],
        [
          { t: 'text', md: 'Add **-ing** to the verb. Drop a final **e**: *make, making*. Double the last letter when a short verb ends in one vowel and one consonant: *sit, sitting; swim, swimming*. Do not double after two vowels or two consonants: *read, reading; wear, wearing*.' },
          { t: 'table', caption: 'Spelling with -ing', explain: ['head', 'col1'], quiz: true, head: ['Rule', 'Verb', 'Verb + -ing'], rows: [
            ['add -ing', 'wear', 'wearing'],
            ['add -ing', 'read', 'reading'],
            ['drop the e', 'make', 'making'],
            ['drop the e', 'dance', 'dancing'],
            ['double the last letter', 'sit', 'sitting'],
            ['double the last letter', 'swim', 'swimming'],
          ] },
          { t: 'dialogue', title: 'On the phone', lines: [
            { who: 'Ben', s: 'What are you doing?' },
            { who: 'Grace', s: 'I’m sitting in the park. It’s sunny, and I’m wearing a hat.' },
            { who: 'Ben', s: 'Are you reading?' },
            { who: 'Grace', s: 'No, I’m not. I’m drinking a coffee and I’m watching the children.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write am, is or are.', items: [
            { q: 'I ___ wearing a hat.', a: ['am'], why: '*I am*' },
            { q: 'She ___ reading a book.', a: ['is'], why: '*she is*' },
            { q: 'They ___ playing football.', a: ['are'], why: '*they are*' },
            { q: 'We ___ having lunch now.', a: ['are'], why: '*we are*' },
            { q: 'It ___ raining.', a: ['is'], why: '*it is*' },
          ] },
          { t: 'ex', kind: 'wordform', h: 'Write the verb with -ing.', items: [
            { q: 'She is ___ a book.', base: 'read', a: ['reading'], why: 'Add *-ing*.' },
            { q: 'He is ___ a coffee.', base: 'drink', a: ['drinking'], why: 'Add *-ing*.' },
            { q: 'They are ___ in the sea.', base: 'swim', a: ['swimming'], why: 'Double the last letter.' },
            { q: 'I am ___ a cake.', base: 'make', a: ['making'], why: 'Drop the *e*, add *-ing*.' },
            { q: 'We are ___ on the sofa.', base: 'sit', a: ['sitting'], why: 'Double the last letter.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Now or every day? Sort the sentences.', groups: ['now', 'every day'], explain: ['groups'], items: [
            { s: 'I’m reading.', g: 0, why: 'It is happening now.' },
            { s: 'I read every day.', g: 1, why: '*Every day* goes with the present simple.' },
            { s: 'It’s raining.', g: 0, why: 'It is happening now.' },
            { s: 'It rains a lot in winter.', g: 1, why: 'A general fact: present simple.' },
            { s: 'She’s wearing a hat.', g: 0, why: 'It is happening now.' },
            { s: 'She wears a hat on Sundays.', g: 1, why: '*On Sundays* goes with the present simple.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: '“What are you doing?” – “I’m ___.”', o: ['reading', 'read', 'reads'], why: 'Present continuous: *am* + verb + *-ing*.' },
            { q: 'She ___ wearing a hat.', o: ['isn’t', 'doesn’t', 'don’t'], why: 'Present continuous negative: *isn’t* + verb + *-ing*.' },
            { q: '___ you wearing a coat?', o: ['Are', 'Do', 'Is'], why: 'A question: *Are you …ing?*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it for now.', items: [
            { q: 'She reads a book.', cue: 'is', a: ['She is reading a book.', 'She’s reading a book.'], why: '*Is* + verb + *-ing*.' },
            { q: 'I wear a hat.', cue: 'am', a: ['I am wearing a hat.', 'I’m wearing a hat.'], why: '*Am* + verb + *-ing*.' },
            { q: 'They play football.', cue: 'are', a: ['They are playing football.', 'They’re playing football.'], why: '*Are* + verb + *-ing*.' },
            { q: 'You are wearing a coat.', cue: 'Are', a: ['Are you wearing a coat?'], why: 'A question: *Are you …ing?*' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'She is wearing a red dress.', why: 'Subject, *is*, verb + *-ing*, object.' },
            { a: 'What are you doing now?', why: 'Question word, *are*, *you*, *doing*.' },
            { a: 'They are not playing football.', why: 'Subject, *are not*, verb + *-ing*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'She is [read] a book.', a: ['reading'], why: 'After *is* use verb + *-ing*.' },
            { s: 'I [wearing] a hat.', a: ['am wearing', 'm wearing'], why: 'You need *am* before verb + *-ing*.' },
            { s: 'They [is] playing football.', a: ['are'], why: 'With *they*: *are*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A weekend away',
      about: 'Read two messages from a weekend away.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'Two messages', md: '**Grace to Ben**\nHi Ben! We’re at the seaside for the weekend. It’s Saturday morning and the weather is great: it’s sunny and warm. I’m sitting on the beach and I’m wearing my new yellow dress and a hat. Hannah is swimming in the sea, but the water is very cold! Leo isn’t swimming. He’s reading a book. What are you doing?\n\n**Ben to Grace**\nHi Grace! Lucky you! It’s cold and rainy here in Leeds. It’s raining now, so I’m staying at home. I’m wearing a big jumper and warm socks, and I’m drinking hot tea. I’m not working today, but I’m cooking dinner for my parents. Have a great weekend!' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'It is sunny at the seaside.', a: 't', why: '*It’s sunny and warm.*' },
            { q: 'Grace is wearing a green dress.', a: 'f', why: '*My new yellow dress.*' },
            { q: 'Hannah is swimming.', a: 't', why: '*Hannah is swimming in the sea.*' },
            { q: 'Leo is swimming.', a: 'f', why: '*Leo isn’t swimming. He’s reading a book.*' },
            { q: 'It’s raining in Leeds.', a: 't', why: '*It’s raining now.*' },
            { q: 'Grace is at the seaside with her parents.', a: 'ng', why: 'The text does not say who she is with, except Hannah and Leo.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'What is the person doing?', pairs: [
            ['Grace', 'sitting on the beach'],
            ['Hannah', 'swimming in the sea'],
            ['Leo', 'reading a book'],
            ['Ben', 'cooking dinner'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Read the messages again and choose.', items: [
            { q: 'What is Grace wearing?', o: ['A yellow dress and a hat', 'A jumper and socks', 'A coat and boots'], why: '*I’m wearing my new yellow dress and a hat.*' },
            { q: 'What is Leo doing?', o: ['Reading a book', 'Swimming', 'Cooking'], why: '*He’s reading a book.*' },
            { q: 'Why is Ben at home?', o: ['It is raining.', 'He is working.', 'He is ill.'], why: '*It’s raining now, so I’m staying at home.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'She is wearing a ___ dress.', o: ['red', 'reds', 'redly'], why: 'An adjective never changes.' },
      { q: 'It’s ___ today. Take an umbrella.', o: ['raining', 'rain', 'rains'], why: 'Present continuous: *it’s raining*.' },
      { q: 'I ___ a jumper now.', o: ['am wearing', 'wear', 'wearing'], why: 'For now: *am* + verb + *-ing*.' },
      { q: '“What’s the weather like?” – “It’s ___.”', o: ['sunny', 'sun', 'summer'], why: 'After *it’s* use an adjective: *sunny*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'He ___ not wearing a hat.', a: ['is'], why: '*he is*' },
      { q: 'We ___ having lunch now.', a: ['are'], why: '*we are*' },
      { q: 'It’s very cold in ___.', a: ['winter'], why: 'The cold season: *winter*.' },
      { q: 'She is ___ a book. (read)', a: ['reading'], why: 'Add *-ing*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the months.', pairs: [
      ['spring', 'March, April, May'],
      ['summer', 'June, July, August'],
      ['autumn', 'September, October, November'],
      ['winter', 'December, January, February'],
    ] },
    { t: 'ex', kind: 'build', h: 'Build the sentences. Two words do not belong.', items: [
      { a: 'She is wearing a blue coat.', extra: ['wears', 'are'], why: 'For now: *is* + verb + *-ing*.' },
      { a: 'What are you doing now?', extra: ['does', 'do'], why: 'Question word, *are*, *you*, *doing*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'I [wear] a coat now.', a: ['am wearing', 'm wearing'], why: 'For now: *am wearing*.' },
      { s: 'It [rain] now.', a: ['is raining', 's raining'], why: 'For now: *is raining*.' },
    ] },
  ],
};
