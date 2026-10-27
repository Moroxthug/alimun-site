// English A1, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Home and town',
  goal: 'Describe your home and say where things are.',
  art: 'cat',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['home', 'rooms', 'furniture', 'there is and there are', 'prepositions of place', 'town'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'There is a sofa',
      about: 'Name the rooms and the furniture, and use there is and there are.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Use **there is** and **there are** to say what is in a place. **There is** is for **one** thing: *There is a sofa in the living room.* **There are** is for **more than one** thing: *There are two chairs in the kitchen.* Here are the main rooms of a home, and one thing you find in each.' },
          { t: 'table', caption: 'Rooms', explain: ['head', 'col1'], quiz: true, head: ['Room', 'Example'], rows: [
            ['kitchen', 'There is a fridge in the kitchen.'],
            ['living room', 'There is a sofa in the living room.'],
            ['bedroom', 'There is a bed in the bedroom.'],
            ['bathroom', 'There is a shower in the bathroom.'],
            ['garden', 'There is a tree in the garden.'],
            ['hall', 'There are some keys on the table in the hall.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Britain, a home in a building with other homes is a **flat**. In the USA, it is an **apartment**. A **house** is a building for one family. The short form of *there is* is **there’s**: *There’s a lamp on the desk.*' },
        ],
        [
          { t: 'text', md: 'For the negative, say **there isn’t** (one thing) and **there aren’t** (more than one). With a plural noun, use **any** in the negative and in questions: *There aren’t any chairs. Are there any chairs?* For a question, put **is** or **are** before **there**. Short answers: **Yes, there is.** / **No, there isn’t.** and **Yes, there are.** / **No, there aren’t.**' },
          { t: 'table', caption: 'There is and there are', explain: ['head', 'col1'], head: ['', 'One thing', 'More than one'], rows: [
            ['statement', 'There is a sofa.', 'There are two chairs.'],
            ['negative', 'There isn’t a garden.', 'There aren’t any chairs.'],
            ['question', 'Is there a sofa?', 'Are there any chairs?'],
            ['short answer', 'Yes, there is. / No, there isn’t.', 'Yes, there are. / No, there aren’t.'],
          ] },
          { t: 'examples', items: [
            { s: '**There is** a lamp on the desk.', n: 'One thing: *there is*.' },
            { s: '**There are** two chairs in the kitchen.', n: 'More than one: *there are*.' },
            { s: '**There isn’t** a garden.', n: 'The negative for one thing.' },
            { s: '**Are there** any books? – **Yes, there are.**', n: 'A question and a short answer.' },
            { s: '**Is there** a bathroom? – **No, there isn’t.**', n: 'A question for one thing.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write is, are, isn’t or aren’t.', items: [
            { q: 'There ___ a sofa in the living room.', a: ['is'], why: 'One thing: *there is*.' },
            { q: 'There ___ two chairs in the kitchen.', a: ['are'], why: 'More than one: *there are*.' },
            { q: '___ there a garden?', a: ['Is'], why: 'One thing: *Is there …?*' },
            { q: '___ there any books?', a: ['Are'], why: 'More than one: *Are there …?*' },
            { q: 'There ___ a garden. We live in a flat. (not)', a: ['isn’t', 'is not'], why: 'The negative for one thing: *there isn’t*.' },
            { q: 'There ___ any chairs in the hall. (not)', a: ['aren’t', 'are not'], why: 'The negative for more than one: *there aren’t any*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'There ___ three bedrooms in the flat.', o: ['are', 'is', 'am'], why: 'More than one: *there are*.' },
            { q: '“Is there a bank near here?” – “Yes, ___.”', o: ['there is', 'it is', 'there are'], why: 'The short answer repeats *there is*.' },
            { q: '“Are there any chairs?” – “No, ___.”', o: ['there aren’t', 'there isn’t', 'they aren’t'], why: 'The short answer repeats *there are*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Which room? Sort the things.', groups: ['kitchen', 'bedroom', 'bathroom'], explain: ['groups'], items: [
            { s: 'fridge', g: 0, why: 'You keep food in a fridge in the kitchen.' },
            { s: 'bed', g: 1, why: 'You sleep in a bed in the bedroom.' },
            { s: 'shower', g: 2, why: 'You take a shower in the bathroom.' },
            { s: 'wardrobe', g: 1, why: 'You keep clothes in a wardrobe in the bedroom.' },
            { s: 'cooker', g: 0, why: 'You cook on a cooker in the kitchen.' },
            { s: 'bath', g: 2, why: 'You take a bath in the bathroom.' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Find the odd one out.', items: [
            { o: ['kitchen', 'sofa', 'bed', 'table'], why: '*Kitchen* is a room. The others are furniture.' },
            { o: ['garden', 'bedroom', 'bathroom', 'kitchen'], why: '*Garden* is outside. The others are rooms in a home.' },
            { o: ['bed', 'chair', 'table', 'bathroom'], why: '*Bathroom* is a room. The others are furniture.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'There is a sofa in the living room.', why: '*There is* + a thing + *in* + a room.' },
            { a: 'Are there any chairs in the kitchen?', why: '*Are there any* + plural noun.' },
            { a: 'There isn’t a garden.', why: '*There isn’t* + a thing.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'There [is] two chairs in the kitchen.', a: ['are'], why: 'More than one: *there are*.' },
            { s: '[Are] there a bathroom?', a: ['Is'], why: 'One thing: *Is there …?*' },
            { s: 'There aren’t [some] chairs.', a: ['any'], why: 'In the negative, use *any*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'In, on, under',
      about: 'Say where things are with in, on, under, next to and in front of.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'A **preposition of place** tells you where something is. **In** means inside something. **On** means touching the top or the surface. **Under** means below. **Next to** means at the side. **In front of** means before something, facing it. To ask where something is, say **Where is …?** for one thing and **Where are …?** for more than one.' },
          { t: 'table', caption: 'Prepositions of place', explain: ['head'], quiz: true, head: ['Word', 'Example'], rows: [
            ['in', 'The keys are in the bag.'],
            ['on', 'The book is on the table.'],
            ['under', 'The cat is under the chair.'],
            ['next to', 'The lamp is next to the bed.'],
            ['in front of', 'The car is in front of the house.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Use **at** with **home**, **school** and **work** and no *the*: *He is at home. She is at school.* Use **on** for a wall or a floor: *The picture is on the wall.* Use **in** for a room, a city or a country: *in the kitchen, in London.*' },
        ],
        [
          { t: 'dialogue', title: 'Where is my phone?', lines: [
            { who: 'Ben', s: 'Where’s my phone?' },
            { who: 'Grace', s: 'It’s on the table.' },
            { who: 'Ben', s: 'No, it isn’t. Where are my keys?' },
            { who: 'Grace', s: 'They’re in your bag. And your phone is under the sofa.' },
            { who: 'Ben', s: 'Thank you!' },
          ] },
          { t: 'examples', items: [
            { s: 'The keys are **in** the bag.', n: 'Inside something.' },
            { s: 'The book is **on** the table.', n: 'On the surface.' },
            { s: 'The cat is **under** the chair.', n: 'Below something.' },
            { s: 'The lamp is **next to** the bed.', n: 'At the side.' },
            { s: 'The car is **in front of** the house.', n: 'Before something, facing it.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'The keys are ___ the bag.', a: ['in'], why: 'Inside something: *in*.' },
            { q: 'The book is ___ the table.', a: ['on'], why: 'On the surface: *on*.' },
            { q: 'The cat is ___ the chair.', a: ['under'], why: 'Below something: *under*.' },
            { q: 'The lamp is ___ to the bed.', a: ['next'], why: '*Next to* means at the side.' },
            { q: 'The car is in ___ of the house.', a: ['front'], why: '*In front of*.' },
            { q: 'My bag is ___ the floor.', a: ['on'], why: 'On the surface: *on*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Find the meaning.', pairs: [
            ['in', 'inside something'],
            ['on', 'on the surface of something'],
            ['under', 'below something'],
            ['next to', 'at the side of something'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Where are my keys? – They’re ___ my bag.', o: ['in', 'on', 'at'], why: 'Inside a bag: *in*.' },
            { q: 'The picture is ___ the wall.', o: ['on', 'in', 'at'], why: 'On a wall: *on*.' },
            { q: 'Where’s Ben? – He’s ___ home.', o: ['at', 'in', 'on'], why: '*At home*, with no *the*.' },
            { q: 'The dog is ___ the table. It is sleeping on the floor.', o: ['under', 'on', 'next'], why: 'Below the table: *under*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'The keys are in my bag.', why: 'Subject, *are*, *in* + place.' },
            { a: 'Where is my phone?', why: '*Where is* + one thing.' },
            { a: 'The cat is under the table.', why: 'Subject, *is*, *under* + place.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'The water is [on] the glass.', a: ['in'], why: 'Inside something: *in*.' },
            { s: 'The book is [in] the table.', a: ['on'], why: 'On the surface: *on*.' },
            { s: 'Where [is] my keys?', a: ['are'], why: 'More than one: *Where are …?*' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Is there a bank near here?',
      about: 'Name places in a town and ask where they are.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Here are some places in a town. To ask where a place is, say **Where is the …?** To ask if a place is near, say **Is there a … near here?** The answer is **Yes, there is.** and then **It’s** + the place: *It’s next to the post office.* Start with **Excuse me** to be polite.' },
          { t: 'table', caption: 'Places in a town', explain: ['head', 'col1'], quiz: true, head: ['Place', 'What you do there'], rows: [
            ['bank', 'You get money.'],
            ['post office', 'You send letters.'],
            ['supermarket', 'You buy food.'],
            ['station', 'You take a train.'],
            ['library', 'You read books.'],
            ['cinema', 'You watch a film.'],
            ['hospital', 'You see a doctor.'],
            ['park', 'You walk and play.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Britain, the shop where you buy a newspaper or a drink is a **newsagent’s**. A **chemist’s** or **pharmacy** is a shop for medicine. The **high street** is the main street with the shops.' },
        ],
        [
          { t: 'dialogue', title: 'Asking the way', lines: [
            { who: 'Grace', s: 'Excuse me, is there a bank near here?' },
            { who: 'Man', s: 'Yes, there is. It’s next to the post office.' },
            { who: 'Grace', s: 'And where is the library?' },
            { who: 'Man', s: 'It’s in front of the park.' },
            { who: 'Grace', s: 'Thank you very much.' },
            { who: 'Man', s: 'You’re welcome.' },
          ] },
          { t: 'examples', items: [
            { s: '**Excuse me**, is there a bank **near here**?', n: 'A polite question.' },
            { s: 'Yes, there is. **It’s next to** the post office.', n: 'The answer and where it is.' },
            { s: '**Where is** the library?', n: 'To ask where one place is.' },
            { s: '**It’s in front of** the park.', n: 'A place with *in front of*.' },
            { s: 'No, there isn’t. **Sorry.**', n: 'A short negative answer.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'crossword', h: 'Write the places.', words: [
            { a: 'bank', clue: 'You get money here.' },
            { a: 'library', clue: 'You read books here.' },
            { a: 'cinema', clue: 'You watch a film here.' },
            { a: 'hospital', clue: 'You see a doctor here.' },
            { a: 'school', clue: 'You study here.' },
            { a: 'park', clue: 'You walk and play here.' },
          ] },
          { t: 'ex', kind: 'match', h: 'What do you do there?', pairs: [
            ['bank', 'get money'],
            ['post office', 'send a letter'],
            ['supermarket', 'buy food'],
            ['station', 'take a train'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Is there a bank near ___?', a: ['here'], why: '*Near here*.' },
            { q: 'Where ___ the post office?', a: ['is'], why: 'One place: *Where is …?*' },
            { q: 'Yes, there ___.', a: ['is'], why: 'The short answer repeats *is*.' },
            { q: '___ me, is there a café near here?', a: ['Excuse'], why: '*Excuse me* to start politely.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Where do you buy food?', o: ['At the supermarket.', 'At the library.', 'At the bank.'], why: 'You buy food at the *supermarket*.' },
            { q: 'Where do you see a doctor?', o: ['At the hospital.', 'At the cinema.', 'At the park.'], why: 'You see a doctor at the *hospital*.' },
            { q: 'Where do you take a train?', o: ['At the station.', 'At the school.', 'At the café.'], why: 'You take a train at the *station*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'odd', h: 'Find the odd one out.', items: [
            { o: ['bread', 'bank', 'school', 'park'], why: '*Bread* is food. The others are places.' },
            { o: ['sofa', 'library', 'cinema', 'station'], why: '*Sofa* is furniture. The others are places in a town.' },
            { o: ['next to', 'bank', 'cinema', 'library'], why: '*Next to* is a preposition. The others are places.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Is there a bank near here?', why: '*Is there* + a place + *near here*.' },
            { a: 'It is next to the post office.', why: '*It is next to* + a place.' },
            { a: 'Where is the library?', why: '*Where is* + a place.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A new flat',
      about: 'Read an email about a new flat.',
      art: 'cat',
      spreads: [
        [
          { t: 'reading', title: 'An email', md: 'Hi Hannah,\n\nI’ve got a new flat! It’s in the centre of Manchester, near the station. There are four rooms: a living room, a bedroom, a small kitchen and a bathroom.\n\nThe living room has got a big window, and there’s a green sofa under it. In the kitchen there is a table and four chairs. My bedroom is small, but there’s a big bed and a lamp next to it.\n\nThere isn’t a garden, but there is a park in front of the flat. There’s a supermarket next to the station, and there’s a café next to the supermarket.\n\nCome and see it soon!\n\nGrace' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The flat is in Manchester.', a: 't', why: '*It’s in the centre of Manchester.*' },
            { q: 'The flat has got four rooms.', a: 't', why: '*There are four rooms.*' },
            { q: 'There is a garden.', a: 'f', why: '*There isn’t a garden.*' },
            { q: 'There is a park in front of the flat.', a: 't', why: '*There is a park in front of the flat.*' },
            { q: 'The bed is small.', a: 'f', why: 'The bedroom is small, but the bed is big.' },
            { q: 'There is a cinema near the flat.', a: 'ng', why: 'The text does not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Where is it?', pairs: [
            ['the sofa', 'under the window'],
            ['the park', 'in front of the flat'],
            ['the supermarket', 'next to the station'],
            ['the lamp', 'next to the bed'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Read the email again and choose.', items: [
            { q: 'What is next to the station?', o: ['A supermarket', 'A park', 'A school'], why: '*There’s a supermarket next to the station.*' },
            { q: 'What is in the kitchen?', o: ['A table and four chairs', 'A sofa', 'A bed'], why: '*In the kitchen there is a table and four chairs.*' },
            { q: 'What is next to the bed?', o: ['A lamp', 'A table', 'A sofa'], why: '*A big bed and a lamp next to it.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'There ___ a sofa in the room.', o: ['is', 'are', 'am'], why: 'One thing: *there is*.' },
      { q: 'There ___ two chairs.', o: ['are', 'is', 'be'], why: 'More than one: *there are*.' },
      { q: '“Is there a bank near here?” – “Yes, ___.”', o: ['there is', 'it is', 'there are'], why: 'The short answer repeats *there is*.' },
      { q: 'The cat is ___ the table.', o: ['under', 'at', 'to'], why: 'Below something: *under*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: '___ there a garden?', a: ['Is'], why: 'One thing: *Is there …?*' },
      { q: 'There ___ any chairs. (not)', a: ['aren’t', 'are not'], why: 'The negative for more than one: *there aren’t any*.' },
      { q: 'The lamp is ___ to the bed.', a: ['next'], why: '*Next to*.' },
      { q: 'The park is in ___ of the flat.', a: ['front'], why: '*In front of*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Which room?', pairs: [
      ['kitchen', 'fridge'],
      ['bedroom', 'bed'],
      ['living room', 'sofa'],
      ['bathroom', 'shower'],
    ] },
    { t: 'ex', kind: 'build', h: 'Build the sentences. Two words do not belong.', items: [
      { a: 'There is a lamp next to the bed.', extra: ['are', 'in'], why: '*There is* + one thing. *Next to* = at the side.' },
      { a: 'Is there a bank near here?', extra: ['are', 'it'], why: '*Is there* + a place + *near here*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'There [is] two chairs.', a: ['are'], why: 'More than one: *there are*.' },
      { s: 'The water is [on] the glass.', a: ['in'], why: 'Inside something: *in*.' },
    ] },
  ],
};
