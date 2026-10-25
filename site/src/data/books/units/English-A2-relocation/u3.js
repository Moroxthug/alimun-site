// English A2 for moving abroad, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'A place to live',
  goal: 'Understand simple adverts for rooms and talk about rent and bills.',
  art: 'cat',
  tags: { skills: ['vocabulary', 'speaking', 'writing', 'reading'], topics: ['housing', 'rooms-furniture', 'adverts', 'rent-bills', 'questions'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Room to rent',
      about: 'Name rooms and furniture, and understand the words in an advert for a room.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Many people who move to the UK rent a room in a shared flat or house first. You share the kitchen and often the bathroom. The people you live with are your *flatmates* or *housemates*.' },
          { t: 'table', caption: 'Rooms and furniture', explain: ['head'], quiz: true, head: ['Room', 'Furniture and things'], rows: [
            ['bedroom', 'a bed, a wardrobe, a chest of drawers'],
            ['living room', 'a sofa, an armchair, a coffee table'],
            ['kitchen', 'a fridge, a cooker, a washing machine'],
            ['bathroom', 'a shower, a bath, a washbasin'],
          ] },
          { t: 'tip', art: 'owl', md: 'In a UK home, the washing machine is often in the kitchen, not in the bathroom.' },
        ],
        [
          { t: 'text', md: 'Adverts for rooms are short. They use the same words again and again.' },
          { t: 'table', caption: 'Words in adverts', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['rent', 'the money you pay for the room, usually every month'],
            ['bills included', 'gas, electricity, water and internet are in the rent'],
            ['deposit', 'money you pay before you move in; you usually get it back when you leave'],
            ['furnished', 'with furniture: a bed, a wardrobe and so on'],
            ['unfurnished', 'without furniture'],
            ['pcm', 'per calendar month: every month'],
            ['available from', 'the first day you can move in'],
          ] },
          { t: 'tip', art: 'owl', md: 'Some adverts give the rent *pw*, per week, not *pcm*. Check before you compare two rooms.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the furniture and the room.', pairs: [
            ['a wardrobe', 'bedroom'],
            ['a sofa', 'living room'],
            ['a cooker', 'kitchen'],
            ['a shower', 'bathroom'],
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the furniture.', items: [
            { s: 'My room has got a [bed], a [desk] and a big window.', why: 'A *bed* and a *desk* are furniture. A window is part of the room.' },
            { s: 'There’s a [sofa] in the living room, but there isn’t a TV.', why: 'A *sofa* is furniture. A TV is a machine.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'The room has a bed, a desk and a wardrobe. It is ___.', o: ['furnished', 'unfurnished', 'included'], why: 'It has furniture: *furnished*.' },
            { q: 'You pay £650 a month, and gas and electricity are in this. Bills are ___.', o: ['included', 'available', 'furnished'], why: '*Bills included*: you do not pay them on top of the rent.' },
            { q: 'Before you move in, you pay a ___. You usually get it back when you leave.', o: ['deposit', 'bill', 'rent'], why: 'A *deposit* is money you usually get back at the end.' },
            { q: 'The room is available ___ 1 March.', o: ['from', 'at', 'since'], why: '*Available from* + the first day you can move in.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the advert.', items: [
            { q: 'Large double room to ___ in a shared house.', a: ['rent', 'let'], why: '*Room to rent* (or *room to let*) is the usual start of an advert.' },
            { q: '£600 pcm, bills ___.', a: ['included', 'inc', 'incl'], why: '*Bills included*: the bills are in the £600.' },
            { q: 'One month’s rent as a ___.', a: ['deposit'], why: 'The *deposit* is often one month’s rent or more.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Is it still available?',
      about: 'Ask about a room on the phone or in a message, and arrange to see it.',
      art: 'parrot',
      spreads: [
        [
          { t: 'dialogue', title: 'A phone call about a room', lines: [
            { who: 'Ines', s: 'Hello, I’m calling about the room in Oak Road. Is it still available?' },
            { who: 'Mr Clarke', s: 'Yes, it is.' },
            { who: 'Ines', s: 'Great. How much is the rent?' },
            { who: 'Mr Clarke', s: 'It’s five hundred and fifty pounds a month.' },
            { who: 'Ines', s: 'Are bills included?' },
            { who: 'Mr Clarke', s: 'Water and internet are included, but you pay for gas and electricity.' },
            { who: 'Ines', s: 'I see. Can I see the room?' },
            { who: 'Mr Clarke', s: 'Of course. Are you free on Thursday at six?' },
            { who: 'Ines', s: 'Yes, Thursday at six is fine. What’s the address?' },
            { who: 'Mr Clarke', s: 'It’s 27 Oak Road. See you on Thursday.' },
          ] },
          { t: 'text', md: 'Ines says why she is calling first: *I’m calling about…*. Then she asks short questions. Write them down before you call. It is easier.' },
        ],
        [
          { t: 'text', md: 'Most questions about a room start with **Is**, **Are**, **Can** or **How much**. The verb comes before the subject.' },
          { t: 'table', caption: 'Questions about a room', explain: ['head', 'col0'], head: ['You want to know', 'You ask'], rows: [
            ['if it is free', 'Is the room still available?'],
            ['the price', 'How much is the rent?'],
            ['about bills', 'Are bills included?'],
            ['about the deposit', 'How much is the deposit?'],
            ['the first day', 'When can I move in?'],
            ['about a viewing', 'Can I see the room?'],
          ] },
          { t: 'examples', items: [
            { s: 'Hi, I saw your advert. **Is** the room still available?', n: 'A short message is fine. Say where you saw the room.' },
            { s: '**Are** pets allowed?', n: '*Pets* is plural: *are*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about Ines’s phone call. True or false?', items: [
            { q: 'The room is still available.', a: 't', why: 'Mr Clarke says *Yes, it is.*' },
            { q: 'All the bills are included.', a: 'f', why: 'Water and internet are included, but not gas and electricity.' },
            { q: 'Ines is going to see the room on Thursday.', a: 't', why: '*Thursday at six is fine.*' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: '___ bills included?', o: ['Are', 'Is', 'Do'], why: '*Bills* is plural: *Are bills included?*' },
            { q: 'How much ___ the deposit?', o: ['is', 'are', 'does'], why: '*The deposit* is one thing: *is*.' },
            { q: 'Hello, I’m calling ___ the room in Park Lane.', o: ['about', 'for to', 'on'], why: '*I’m calling about…* says why you are calling.' },
            { q: 'When can I move ___?', o: ['in', 'on', 'at'], why: '*Move in* means start to live in a new home.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Is the room still available?', why: '*Is* first, then *the room*: a yes/no question.' },
            { a: 'How much is the rent?', why: '*How much* + *is* + *the rent*.' },
            { a: 'Can I see the room on Saturday?', why: '*Can I* + verb + the rest.' },
            { a: 'When can I move in?', why: '*When* + *can I* + *move in*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete Ines’s message to another landlord.', items: [
            { q: 'Hi, I ___ your advert for the room in Elm Street. (see, past)', a: ['saw'], why: 'The past of *see* is *saw*.' },
            { q: 'Is the room ___ available?', a: ['still'], why: '*Still available* means it is free now, like before.' },
            { q: 'Could I come and ___ it this weekend?', a: ['see', 'view', 'look at'], why: '*Come and see* a room means visit it before you rent it.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Three rooms',
      about: 'Read three short adverts for rooms and choose the right one.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'Room A', md: '**Double room in a quiet house, Kingston**\n\n£720 pcm, bills included. Furnished room with a double bed, a desk and a big wardrobe. You share the kitchen and the bathroom with two professionals. Ten minutes on foot to the train station. Deposit: one month’s rent. Available from 1 May. No pets, please.' },
          { t: 'reading', title: 'Room B', md: '**Small single room near the university**\n\n£480 pcm, plus bills (about £90 a month). Furnished. Shared kitchen, bathroom and garden with three students. The bus stop is outside the house. Available now. Pets are welcome.' },
          { t: 'reading', title: 'Room C', md: '**Large room with its own bathroom, city centre**\n\n£850 pcm, bills included. Unfurnished, so bring your own bed. Shared kitchen with one other person. Available from 15 April. Deposit: six weeks’ rent.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the adverts. True, false or not given?', items: [
            { q: 'In Room A, the bills are in the rent.', a: 't', why: '*£720 pcm, bills included.*' },
            { q: 'Room B is the cheapest room, even with the bills.', a: 't', why: '£480 + about £90 is about £570. That is less than £720 and £850.' },
            { q: 'Room C has got a bed.', a: 'f', why: 'It is *unfurnished*: *bring your own bed*.' },
            { q: 'You can have a cat in Room A.', a: 'f', why: 'Room A says *No pets, please.*' },
            { q: 'The house with Room B has got a washing machine.', a: 'ng', why: 'The advert does not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Which room is right for each person?', pairs: [
            ['Sam has a dog and wants to move in this week.', 'Room B'],
            ['Leila wants her own bathroom and has got furniture.', 'Room C'],
            ['Chen wants a furnished room near the train station.', 'Room A'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Who do you live with in Room B?', o: ['Three students.', 'Two professionals.', 'One other person.'], why: '*Shared kitchen, bathroom and garden with three students.*' },
            { q: 'When can you move into Room C?', o: ['From 15 April.', 'Now.', 'From 1 May.'], why: '*Available from 15 April.*' },
            { q: 'Room A costs £720 a month. What is the deposit?', o: ['£720', '£1,440', 'Nothing'], why: '*Deposit: one month’s rent*, so £720.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'You put your clothes in a ___.', o: ['wardrobe', 'fridge', 'cooker'], why: 'A *wardrobe* is for clothes.' },
      { q: 'A room with no furniture is ___.', o: ['unfurnished', 'furnished', 'included'], why: '*Unfurnished* means without furniture.' },
      { q: '___ the room still available?', o: ['Is', 'Are', 'Does'], why: '*The room* is one thing: *Is…?*' },
      { q: '*pcm* means ___.', o: ['every month', 'every week', 'every day'], why: '*Per calendar month*: every month.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'I’m calling ___ the room in Oak Road.', a: ['about'], why: '*I’m calling about…* says why you are calling.' },
      { q: '£500 pcm, bills ___. You do not pay extra for gas.', a: ['included', 'inc', 'incl'], why: '*Bills included*: they are in the rent.' },
      { q: 'You usually get the ___ back when you leave.', a: ['deposit'], why: 'The *deposit* is money you usually get back.' },
      { q: 'When can I move ___?', a: ['in'], why: '*Move in*: start to live in a new home.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Are bills included in the rent?', why: '*Are* + *bills* + *included*: a yes/no question.' },
      { a: 'How much is the deposit?', why: '*How much* + *is* + *the deposit*.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'A cooker is usually in the kitchen.', a: 't', why: 'You cook in the kitchen.' },
      { q: '*Available from 1 June* means you must leave on 1 June.', a: 'f', why: 'It is the first day you can move in.' },
    ] },
  ],
};
