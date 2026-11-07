// English A1, unit 5, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for the owner's review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one skills task, and one task in the format of the A2 Key exam.
export const UNIT = {
  id: 'u5',
  title: 'Home and town',
  goal: 'Describe your home and your town, and say where things are.',
  art: 'cat',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['home', 'rooms', 'furniture', 'there is and there are', 'prepositions of place', 'town'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'There is a sofa',
      about: 'Name the rooms and the furniture, and use there is and there are to say what is in a place.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'When you describe a home, a room or a town, you say what is in it. In English, the usual way to do this is with **there is** and **there are**.\n\nUse **there is** for **one** thing: *There is a sofa in the living room.* Use **there are** for **more than one** thing: *There are two bedrooms.* When you speak, **there is** often becomes **there’s**: *There’s a big window.* There is no short form for *there are* in writing.\n\nWhy not *A sofa is in the living room*? It is not wrong, but English speakers prefer to start with **there is** when they tell you about something for the first time.' },
          { t: 'table', caption: 'Rooms and furniture', explain: ['head'], head: ['Room', 'In the room'], rows: [
            ['the living room', 'a sofa, an armchair, a TV, a lamp'],
            ['the kitchen', 'a fridge, a cooker, a table, a cupboard'],
            ['the bedroom', 'a bed, a wardrobe, a desk'],
            ['the bathroom', 'a shower, a bath, a toilet, a mirror'],
            ['the hall', 'the door, a coat hook, the stairs'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Britain, a home in a building with other homes is a **flat**. In the USA, it is an **apartment**. A **house** is a building for one family, often with a **garden** (British) or a **yard** (American).' },
        ],
        [
          { t: 'text', md: 'For the negative, say **there isn’t** (one thing) and **there aren’t** (more than one thing). With more than one thing, add **any**: *There aren’t any chairs.*\n\nTo ask, put **is** or **are** first: **Is there** a garden? **Are there any** shops near here? The short answers are **Yes, there is. / No, there isn’t.** and **Yes, there are. / No, there aren’t.**\n\nTo talk about many things, you can use **a lot of**: *There are a lot of books in my room.*' },
          { t: 'table', caption: 'there is and there are', quiz: true, explain: ['head'], head: ['', 'One thing', 'More than one thing'], rows: [
            ['Yes', 'There’s a garden.', 'There are two bedrooms.'],
            ['No', 'There isn’t a garden.', 'There aren’t any chairs.'],
            ['Question', 'Is there a garden?', 'Are there any shops?'],
            ['Short answer', 'Yes, there is. / No, there isn’t.', 'Yes, there are. / No, there aren’t.'],
          ] },
          { t: 'examples', items: [
            { s: '**There’s** a small kitchen and **there are** two bedrooms.', n: 'One thing, then more than one.' },
            { s: '**There isn’t** a bath, but **there’s** a shower.', n: 'A *no* and a *yes*.' },
            { s: '**Are there any** cupboards in the kitchen? – **Yes, there are.**', n: '*any* in a question with more than one.' },
            { s: '**Is there** a lift? – **No, there isn’t.** We use the stairs.', n: 'A question and a short answer.' },
            { s: '**There are a lot of** plants in the living room.', n: '*a lot of* = many.' },
          ] },
        ],
        [
          { t: 'text', md: 'These are the mistakes teachers hear most often with **there is** and **there are**.' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['There is two beds.', 'There are two beds.', 'More than one: *are*.'],
            ['There aren’t chairs.', 'There aren’t any chairs.', 'Add *any* in the negative with more than one.'],
            ['Is a garden?', 'Is there a garden?', 'Do not forget *there*.'],
            ['It has a sofa in the room.', 'There’s a sofa in the room.', 'For what is in a place: *there is*.'],
          ] },
          { t: 'ex', kind: 'label', h: 'Label the kitchen.', scene: 'kitchen', extra: ['sofa'], items: [
            { x: 260, y: 70, a: 'fridge', why: 'Food and milk stay cold in the *fridge*.' },
            { x: 156, y: 100, a: 'kettle', why: 'You make hot water for tea in a *kettle*.' },
            { x: 160, y: 165, a: 'cupboard', why: 'Cups and plates go in a *cupboard*.' },
            { x: 160, y: 50, a: 'window', why: 'A *window* lets in the light.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
            { q: 'There ___ a big table in the kitchen.', o: ['is', 'are', 'am'], why: 'One table: *there is*.' },
            { q: 'There ___ three chairs.', o: ['are', 'is', 'has'], why: 'More than one: *there are*.' },
            { q: 'There aren’t ___ shops in my street.', o: ['any', 'a', 'some'], why: 'Negative with more than one: *any*.' },
            { q: '___ a bath in the bathroom?', o: ['Is there', 'There is', 'Are there'], why: 'A question about one thing: *Is there*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
            { s: 'There [is] four rooms in my flat.', a: ['are'], why: 'Four rooms: *there are*.' },
            { s: '[Is] any chairs in the garden?', a: ['Are there'], why: 'A question with more than one: *Are there any …?*' },
            { s: 'There [aren’t] a lift in the building.', a: ['isn’t', 'is not'], why: 'One lift: *there isn’t*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Describe a home: say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'There’s a big kitchen.' },
            { a: 'There are two bedrooms.' },
            { a: 'There isn’t a garden.' },
            { a: 'Is there a lift?' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'In, on, under',
      about: 'Say where things are with in, on, under, next to, behind, in front of and between.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'A **preposition of place** is a small word that tells you where something is. These words are short, but they are very useful: you need them every day to find your keys, your phone or a shop.\n\n**In** means inside something: *The milk is in the fridge.* **On** means touching the top or the surface: *The book is on the table.* **Under** means below something: *The cat is under the bed.*\n\n**Next to** means at the side of something. **Behind** means at the back. **In front of** is the opposite of *behind*. **Between** means in the middle of two things.' },
          { t: 'table', caption: 'Prepositions of place', explain: ['head', 'col1'], head: ['Word', 'Meaning', 'Example'], rows: [
            ['in', 'inside', 'The keys are in my bag.'],
            ['on', 'touching the top', 'The phone is on the desk.'],
            ['under', 'below', 'The shoes are under the bed.'],
            ['next to', 'at the side', 'The lamp is next to the sofa.'],
            ['behind', 'at the back', 'The garden is behind the house.'],
            ['in front of', 'opposite of behind', 'The car is in front of the house.'],
            ['between', 'in the middle of two', 'The bank is between the café and the shop.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Use **on** for a wall and a floor: *The picture is **on** the wall. The bag is **on** the floor.* Use **at** with **home**, **work** and **school**, with no *the*: *She’s **at** home. He’s **at** work.*' },
        ],
        [
          { t: 'text', md: 'To ask where something is, say **Where is …?** for one thing and **Where are …?** for more than one. When you speak, **where is** becomes **where’s**: *Where’s my phone?* The answer usually starts with **It’s** or **They’re** + a preposition.\n\nThis is one of the most common conversations in any home!' },
          { t: 'examples', items: [
            { s: '**Where’s** my phone? – **It’s on** the sofa.', n: 'One thing: *where’s* and *it’s*.' },
            { s: '**Where are** my keys? – **They’re in** your bag.', n: 'More than one: *where are* and *they’re*.' },
            { s: 'The cat is **under** the table.', n: 'Below the table.' },
            { s: 'The bathroom is **next to** the bedroom.', n: 'At the side.' },
            { s: 'There’s a park **behind** our flat.', n: '*there is* + a preposition.' },
          ] },
          { t: 'dialogue', title: 'Where is my phone?', lines: [
            { who: 'Tom', s: 'Mum, where’s my phone?' },
            { who: 'Mum', s: 'Is it on your desk?' },
            { who: 'Tom', s: 'No, it isn’t. And it isn’t in my bag.' },
            { who: 'Mum', s: 'Look under the sofa. The cat likes to play there.' },
            { who: 'Tom', s: 'Yes! It’s under the sofa, next to the cat.' },
          ] },
        ],
        [
          { t: 'text', md: 'These are the mistakes teachers hear most often.' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['The picture is in the wall.', 'The picture is on the wall.', 'A wall is a surface: *on*.'],
            ['She is in home.', 'She is at home.', '*at home*, with no *the*.'],
            ['The car is in front the house.', 'The car is in front of the house.', 'Do not forget *of*.'],
            ['Where is my keys?', 'Where are my keys?', 'More than one: *are*.'],
          ] },
          { t: 'ex', kind: 'picture', h: 'What is it?', items: [
            { pic: 'key', o: ['a key', 'a phone', 'a clock'], why: 'This is *a key*. You open a door with it.' },
            { pic: 'umbrella', o: ['an umbrella', 'a bicycle', 'a ticket'], why: '*an umbrella*: *an* before a vowel sound.' },
            { pic: 'phone', o: ['a phone', 'a key', 'a house'], why: 'This is *a phone*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the right word: in, on, under, next to, behind or between.', items: [
            { q: 'The milk is ___ the fridge.', a: ['in'], why: 'Inside the fridge: *in*.' },
            { q: 'The picture is ___ the wall.', a: ['on'], why: 'A wall is a surface: *on*.' },
            { q: 'The shoes are ___ the bed.', a: ['under'], why: 'Below the bed: *under*.' },
            { q: 'The bank is ___ the café and the shop.', a: ['between'], why: 'In the middle of two places: *between*.' },
            { q: 'My office is ___ the station, at its side.', a: ['next to'], why: 'At the side: *next to*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Where are my keys?', why: '*Where are* + more than one thing.' },
            { a: 'The lamp is next to the sofa.', why: 'Thing + *is* + preposition + place.' },
            { a: 'There is a park behind the station.', why: '*There is* + thing + preposition + place.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the best reply.', items: [
            { q: '“Where’s the remote control?”', o: ['It’s on the sofa.', 'Yes, it is.', 'There are two.'], why: '*Where* asks for a place.' },
            { q: '“Are my glasses in the kitchen?”', o: ['No, they’re on your desk.', 'No, it isn’t.', 'Yes, there is.'], why: '*glasses* is plural: *they’re*.' },
            { q: '“Is Anna at home?”', o: ['No, she’s at work.', 'No, she’s in work.', 'Yes, there is.'], why: '*at home*, *at work*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In the A2 Key listening test, one part shows you pictures and asks where something is. Listen to the **whole** sentence: people often say a wrong place first and then correct it: *It isn’t on the table… oh, it’s under the chair!*' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'Where’s my phone?' },
            { a: 'It’s on the table.' },
            { a: 'The keys are in your bag.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Is there a bank near here?',
      about: 'Name places in a town, ask if they are near, and understand simple directions.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'In a new town, you often need to find a place: a bank, a supermarket, a station. You already know **there is** and **there are**. Now use them to ask about a town.\n\nTo ask if a place is near, say **Is there a … near here?** To ask where a place is, say **Where’s the …?** Start with **Excuse me**: it is the polite way to speak to someone you do not know in the street.' },
          { t: 'table', caption: 'Places in a town', explain: ['head', 'col1'], head: ['Place', 'What you do there'], rows: [
            ['a bank', 'get money'],
            ['a supermarket', 'buy food'],
            ['a chemist’s / a pharmacy', 'buy medicine'],
            ['a post office', 'send letters and parcels'],
            ['a station', 'take a train'],
            ['a bus stop', 'wait for a bus'],
            ['a hospital', 'see a doctor when you are very ill'],
            ['a park', 'walk and relax'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Britain, the main street with the shops is the **high street**. A **chemist’s** sells medicine; in the USA, it is a **drugstore** or a **pharmacy**. Say **the** before a place when there is only one, or when you both know which one: *Where’s the station?*' },
        ],
        [
          { t: 'text', md: 'The answer to your question often has simple directions. You do not need to understand everything: listen for the key words.\n\n**Go straight on** means continue in the same direction. **Turn left** and **turn right** tell you where to go at a corner. **On the left** and **on the right** tell you where the place is. **It’s near** means it is not far; **it’s far** means you need a bus or a long walk.' },
          { t: 'examples', items: [
            { s: '**Excuse me, is there a** bank **near here?**', n: 'The polite way to ask.' },
            { s: '**Yes, there is.** It’s **next to** the post office.', n: 'A short answer, then the place.' },
            { s: '**Go straight on** and **turn left**.', n: 'Two simple directions.' },
            { s: 'The station is **on the right**.', n: 'Where the place is.' },
            { s: '**Sorry, I don’t know.** I’m not from here.', n: 'When you cannot help.' },
          ] },
          { t: 'dialogue', title: 'Asking the way', lines: [
            { who: 'Marta', s: 'Excuse me, is there a chemist’s near here?' },
            { who: 'Man', s: 'Yes, there is. Go straight on and turn right.' },
            { who: 'Marta', s: 'Straight on and right. Is it far?' },
            { who: 'Man', s: 'No, it isn’t. It’s about five minutes. It’s next to the bank.' },
            { who: 'Marta', s: 'Thank you very much.' },
            { who: 'Man', s: 'You’re welcome.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Where do you go?', pairs: [
            ['You want to take a train.', 'the station'],
            ['You need medicine.', 'the chemist’s'],
            ['You want to send a parcel.', 'the post office'],
            ['You want to buy food.', 'the supermarket'],
            ['You need money.', 'the bank'],
          ] },
          { t: 'ex', kind: 'tf', h: 'Read the dialogue again. True or false?', items: [
            { q: 'Marta wants a chemist’s.', a: 't', why: '*Is there a chemist’s near here?*' },
            { q: 'She must turn left.', a: 'f', why: '*Go straight on and turn right.*' },
            { q: 'The chemist’s is far.', a: 'f', why: '*No, it isn’t. It’s about five minutes.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Make a question with there is or there are.', items: [
            { q: 'There is a bank near here.', cue: 'Is', a: ['Is there a bank near here?'], why: 'Put *is* before *there*.' },
            { q: 'There are some shops in this street.', cue: 'Are', a: ['Are there any shops in this street?'], why: 'In a question: *are there any*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: read the notice and choose the right answer.', items: [
            { q: 'Notice: “Post office closed today. Please use the post office in King Street.” What does it say?', o: ['Go to King Street today.', 'The post office is open today.', 'King Street is closed.'], why: 'This post office is closed; the one in King Street is open.' },
            { q: 'Sign at a station: “Buses to the hospital: stop B, on the left.” Where do you wait?', o: ['at stop B', 'at the hospital', 'on the right'], why: '*stop B, on the left*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In the A2 Key reading test, Part 1 has short signs and notices. Often two answers use words from the sign, but only one says the **same thing**. Read the sign, then say its meaning in your own words before you choose.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Ask the way: say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'Excuse me, is there a bank near here?' },
            { a: 'Go straight on and turn left.' },
            { a: 'It’s next to the station.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'A new flat',
      about: 'Read an email about a new flat, and describe a home with everything from this unit.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'In this lesson you put the unit together: rooms and furniture, **there is** and **there are**, prepositions and places in a town. First read an email from Daniel to his friend about his new flat.\n\nWhen you read, look for the answers to three questions: what is in the flat, where things are, and what is near it.' },
          { t: 'reading', title: 'An email from Daniel', md: 'Hi Hannah,\n\nI’ve got a new flat! It’s in the centre of Leeds, near the station. There are four rooms: a living room, a bedroom, a small kitchen and a bathroom.\n\nThe living room is my favourite room. There’s a big window, and there’s a green sofa in front of it. My books are on the shelves next to the TV. The kitchen is small, but there’s a new fridge and a cooker. There isn’t a bath in the bathroom, only a shower.\n\nThere isn’t a garden, but there’s a lovely park behind the building. There are a lot of cafés in my street, and there’s a supermarket on the corner.\n\nCome and visit soon!\n\nDaniel' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the email. True, false, or not given?', items: [
            { q: 'The flat is near the station.', a: 't', why: '*It’s in the centre of Leeds, near the station.*' },
            { q: 'There are two bedrooms.', a: 'f', why: 'There is one bedroom.' },
            { q: 'The sofa is in front of the window.', a: 't', why: '*there’s a green sofa in front of it*' },
            { q: 'There is a bath in the bathroom.', a: 'f', why: '*There isn’t a bath … only a shower.*' },
            { q: 'Daniel’s rent is cheap.', a: 'ng', why: 'The email does not say anything about the rent.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Where are Daniel’s books?', o: ['on the shelves', 'under the sofa', 'in the kitchen'], why: '*My books are on the shelves next to the TV.*' },
            { q: 'What is behind the building?', o: ['a park', 'a garden', 'a supermarket'], why: '*there’s a lovely park behind the building*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'build', h: 'Write the sentence. Two words do not belong.', items: [
            { a: 'There are a lot of cafés in my street.', extra: ['is', 'any'], why: 'More than one: *there are*; *a lot of* = many.' },
            { a: 'The sofa is in front of the window.', extra: ['on', 'at'], why: '*in front of* + the place.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Is it in a home or in a town?', groups: ['in a home', 'in a town'], explain: ['groups'], items: [
            { s: 'wardrobe', g: 0, why: 'A *wardrobe* is in a bedroom.' },
            { s: 'post office', g: 1, why: 'A *post office* is in a town.' },
            { s: 'shower', g: 0, why: 'A *shower* is in a bathroom.' },
            { s: 'bus stop', g: 1, why: 'A *bus stop* is in a street.' },
            { s: 'cooker', g: 0, why: 'A *cooker* is in a kitchen.' },
            { s: 'supermarket', g: 1, why: 'A *supermarket* is in a town.' },
          ] },
          { t: 'ex', kind: 'speak', h: 'Describe your home: say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'There are four rooms in my flat.' },
            { a: 'The sofa is in front of the window.' },
            { a: 'There’s a park behind the building.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
      { q: 'There ___ two bathrooms in the house.', o: ['are', 'is', 'has'], why: 'More than one: *there are*.' },
      { q: 'There isn’t ___ lift.', o: ['a', 'any', 'some'], why: 'One thing: *a*.' },
      { q: '___ any cafés near here?', o: ['Are there', 'Is there', 'There are'], why: 'A question with more than one: *Are there any*.' },
      { q: 'My mother is ___ home.', o: ['at', 'in', 'on'], why: '*at home*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the right word: in, on, under, next to or between.', items: [
      { q: 'The cheese is ___ the fridge.', a: ['in'], why: 'Inside: *in*.' },
      { q: 'The clock is ___ the wall.', a: ['on'], why: 'A wall is a surface: *on*.' },
      { q: 'The cat sleeps ___ the bed.', a: ['under'], why: 'Below: *under*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'There [is] three chairs.', a: ['are'], why: 'More than one: *are*.' },
      { s: 'Where [is] my glasses?', a: ['are'], why: '*glasses* is plural: *are*.' },
      { s: 'The car is in front [the] house.', a: ['of the'], why: '*in front of*' },
    ] },
    { t: 'ex', kind: 'match', h: 'Where do you go?', pairs: [
      ['You need medicine.', 'the chemist’s'],
      ['You want a train.', 'the station'],
      ['You want to walk and relax.', 'the park'],
      ['You need money.', 'the bank'],
    ] },
    { t: 'ex', kind: 'choice', h: 'Choose the best reply.', items: [
      { q: '“Is there a supermarket near here?”', o: ['Yes, there is. It’s on the left.', 'Yes, it is.', 'Yes, I am.'], why: 'Answer *Is there …?* with *Yes, there is.*' },
      { q: '“Where are my keys?”', o: ['They’re in your bag.', 'It’s in your bag.', 'There are keys.'], why: 'More than one: *they’re*.' },
    ] },
  ],
};
