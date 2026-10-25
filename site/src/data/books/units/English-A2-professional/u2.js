// English A2 for work, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'On the phone',
  goal: 'Make and answer simple calls and leave a message.',
  art: 'parrot',
  tags: { skills: ['speaking', 'listening', 'vocabulary', 'reading'], topics: ['phone-calls', 'spelling', 'numbers', 'messages'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Who’s calling, please?',
      about: 'Answer the phone at work, ask for someone, and spell names and numbers.',
      art: 'parrot',
      spreads: [
        [
          { t: 'dialogue', title: 'A call to the office', lines: [
            { who: 'Sam', s: 'Good morning, Brightside Travel. Sam speaking. How can I help you?' },
            { who: 'Lina', s: 'Hello. Can I speak to Mr Clarke, please?' },
            { who: 'Sam', s: 'Of course. Who’s calling, please?' },
            { who: 'Lina', s: 'It’s Lina Haddad from Northway Hotels.' },
            { who: 'Sam', s: 'Sorry, can you spell your surname, please?' },
            { who: 'Lina', s: 'Yes. H, A, double D, A, D.' },
            { who: 'Sam', s: 'Thank you. One moment, please. I’ll put you through.' },
          ] },
          { t: 'text', md: 'On the phone, say your name with **It’s…** or **This is…**, not *I am…*. **Who’s calling?** asks for the caller’s name. **One moment, please** means *please wait*. **I’ll put you through** means *I will connect you to the person*.' },
        ],
        [
          { t: 'text', md: 'When you spell a name, say **double** for two letters that are the same: *double D*. Say phone numbers one number at a time. Many people say *oh* for 0, and *double* for two numbers that are the same: *77* is *double seven*.' },
          { t: 'examples', items: [
            { s: 'Mills: M, I, double L, S', n: 'Two letters *L*: *double L*.' },
            { s: '0161 496 0733', n: 'Say: *oh one six one, four nine six, oh seven double three*.' },
            { s: 'anna.berg@example.com', n: 'Say: *anna dot berg at example dot com*. *@* is *at* and *.* is *dot*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Learners often mix up the letters *e* and *i*. In English, *e* sounds like the word *see*, and *i* sounds like the word *eye*. *G* sounds like *gee* and *j* like *jay*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best thing to say.', items: [
            { q: 'You answer the phone at work:', o: ['Good morning, Brightside Travel.', 'Who are you?', 'Yes? What?'], why: 'Say *good morning* and the company name.' },
            { q: 'You want to talk to Ms Patel:', o: ['Can I speak to Ms Patel, please?', 'Give me Ms Patel.', 'I want Ms Patel now.'], why: '*Can I speak to…, please?* is the polite question.' },
            { q: 'You say your name on the phone:', o: ['It’s Joe Barker.', 'I’m being Joe Barker.', 'Here is Joe Barker.'], why: 'On the phone: *It’s…* or *This is…*' },
            { q: 'You want the caller to wait:', o: ['One moment, please.', 'Stop, please.', 'Wait me.'], why: '*One moment, please* is polite. *Wait me* is not correct English.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the phrase and its meaning.', pairs: [
            ['Who’s calling, please?', 'What is your name?'],
            ['Hold on, please.', 'Please wait.'],
            ['I’ll put you through.', 'I will connect you to the person.'],
            ['Can you spell that?', 'Can you say the letters?'],
            ['Speaking.', 'I am the person you want.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'For 33 on the phone, people often say ___ three.', a: ['double'], why: 'Two numbers that are the same: *double*.' },
            { q: 'In an email address, we say ___ for @.', a: ['at'], why: '*@* is *at*.' },
            { q: 'In an email address, we say ___ for a full stop.', a: ['dot'], why: 'The full stop in an email address is *dot*.' },
            { q: 'Who’s ___, please?', a: ['calling'], why: '*Who’s calling?* asks for the caller’s name.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Can I speak to Mr Clarke, please?', why: '*Can I speak to* + the person.' },
            { a: 'Could you spell your surname, please?', why: '*Could you* + verb: a polite request.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Can I take a message?',
      about: 'Leave a message for someone, and take a message for a colleague.',
      art: 'dog',
      spreads: [
        [
          { t: 'dialogue', title: 'She’s in a meeting', lines: [
            { who: 'Ben', s: 'Hello, Marlow Engineering. Ben speaking.' },
            { who: 'Yuki', s: 'Hi. Can I speak to Sofia Reyes, please?' },
            { who: 'Ben', s: 'I’m sorry, she’s not here at the moment. She’s in a meeting. Can I take a message?' },
            { who: 'Yuki', s: 'Yes, please. Can you ask her to call me back?' },
            { who: 'Ben', s: 'Sure. Can I have your name and number, please?' },
            { who: 'Yuki', s: 'It’s Yuki Tanaka, and my number is 07700 900412.' },
            { who: 'Ben', s: 'So that’s 07700 900412?' },
            { who: 'Yuki', s: 'That’s right. It’s about the meeting on Thursday.' },
            { who: 'Ben', s: 'OK, I’ll give her the message.' },
            { who: 'Yuki', s: 'Thanks very much. Bye.' },
          ] },
          { t: 'text', md: 'When the person is not there, say **I’m sorry, she’s not here at the moment** or **He’s on another call**. Then offer help: **Can I take a message?** Repeat names and numbers to check them: *So that’s…?*' },
        ],
        [
          { t: 'table', caption: 'Taking and leaving a message', explain: ['head'], head: ['You take the message', 'You leave the message'], rows: [
            ['Can I take a message?', 'Can I leave a message?'],
            ['Can I have your name, please?', 'It’s Yuki Tanaka.'],
            ['What’s your number?', 'My number is 07700 900412.'],
            ['I’ll ask her to call you back.', 'Can you ask her to call me back?'],
            ['I’ll give him the message.', 'Thanks for your help.'],
          ] },
          { t: 'tip', art: 'owl', md: 'You **take** a message when you write it down for a colleague. You **leave** a message when you give it for someone who is not there. **Call back** means *phone again*: *Can she call me back?*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'The receptionist asks: Can I ___ a message?', o: ['take', 'leave', 'make'], why: 'The receptionist writes the message down: *take a message*.' },
            { q: 'The caller asks: Can I ___ a message for Mr Lee?', o: ['leave', 'take', 'make'], why: 'The caller gives a message for someone: *leave a message*.' },
            { q: 'I’m sorry, he’s ___ another call.', o: ['on', 'in', 'at'], why: 'We say *on a call*, *on the phone*.' },
            { q: 'Can you ask her to call me ___?', o: ['back', 'after', 'return'], why: '*Call back* means *phone again*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'I’m sorry, she’s not here at the ___.', a: ['moment'], why: '*At the moment* means *now*.' },
            { q: 'I’ll ___ him the message.', a: ['give', 'pass on'], why: 'You *give* someone a message.' },
            { q: 'Could you ask him to ___ me back?', a: ['call', 'ring', 'phone'], why: '*Call back* (or *ring back*, *phone back*) means *phone again*.' },
            { q: 'She’s ___ a meeting until three.', a: ['in'], why: 'We say *in a meeting*.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Phone message', md: 'For: Sofia Reyes\nFrom: Yuki Tanaka\nTime: 10.15, Tuesday\nNumber: 07700 900412\n\nMessage: Please call her back. It’s about the meeting on Thursday.\n\nTaken by: Ben' },
          { t: 'ex', kind: 'tf', h: 'Read Ben’s note. True or false?', items: [
            { q: 'Yuki called on Tuesday morning.', a: 't', why: '*Time: 10.15, Tuesday.*' },
            { q: 'Yuki wants Sofia to call Ben.', a: 'f', why: 'Sofia must call *Yuki* back. Ben only took the message.' },
            { q: 'The call is about a meeting on Friday.', a: 'f', why: 'It is about the meeting on *Thursday*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Can I take a message?', why: '*Can I* + verb: an offer.' },
            { a: 'What’s your phone number?', why: 'Question word + *is* + the thing.' },
            { a: 'He’s on another call.', why: '*On a call*: he is on the phone now.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A voicemail',
      about: 'Understand a voicemail and check a colleague’s phone note.',
      art: 'cat',
      spreads: [
        [
          { t: 'reading', title: 'Voicemail for Daniel Price', md: 'Hello, this is a message for Daniel Price. My name is Carla Mendes, and I’m calling from Westbrook Office Supplies. It’s Monday, about half past two.\n\nI’m calling about your order for twenty office chairs. We have the chairs, but the delivery is on Thursday, not Wednesday. I’m sorry about that. Is Thursday OK for you? We can come in the morning, between nine and twelve.\n\nCan you call me back today or tomorrow? My number is 0117 496 0582. That’s 0117 496 0582. You can also email me at carla.mendes@example.com.\n\nThank you, and have a good afternoon. Bye.' },
          { t: 'tip', art: 'owl', md: 'In a voicemail, people often say the number **two times**. Write it down the first time, then check it the second time.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the voicemail. True, false or not given?', items: [
            { q: 'Carla works for Westbrook Office Supplies.', a: 't', why: '*I’m calling from Westbrook Office Supplies.*' },
            { q: 'Daniel ordered twenty desks.', a: 'f', why: 'He ordered twenty *office chairs*.' },
            { q: 'The delivery is on Wednesday.', a: 'f', why: '*The delivery is on Thursday, not Wednesday.*' },
            { q: 'The delivery can be in the morning.', a: 't', why: '*We can come in the morning, between nine and twelve.*' },
            { q: 'Daniel ordered the chairs last week.', a: 'ng', why: 'Carla does not say when Daniel ordered the chairs.' },
          ] },
        ],
        [
          { t: 'text', md: 'Daniel’s colleague listened to the voicemail and wrote a note for him. But the note has some mistakes.' },
          { t: 'ex', kind: 'spot', h: 'Tap the wrong information in each line of the note.', items: [
            { s: 'Carla Mendes called on [Tuesday] at half past two.', why: 'Carla called on *Monday*.' },
            { s: 'She works for [Eastbrook] Office Supplies.', why: 'The company is *Westbrook* Office Supplies.' },
            { s: 'The chairs come on Thursday [afternoon].', why: 'The delivery is in the *morning*, between nine and twelve.' },
            { s: 'Please call her back [next] [week].', why: 'Carla wants a call *today or tomorrow*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'On the phone you say: ___ Maria Lopez.', o: ['It’s', 'I’m being', 'Here is'], why: 'On the phone: *It’s…* or *This is…*' },
      { q: 'The caller asks: Can I ___ a message?', o: ['leave', 'take', 'do'], why: 'The caller *leaves* a message.' },
      { q: 'For 55 in a phone number, people often say ___.', o: ['double five', 'two five', 'five two'], why: 'Two numbers that are the same: *double*.' },
      { q: 'You want the caller to wait:', o: ['Hold on, please.', 'Hold me, please.', 'Wait me, please.'], why: '*Hold on* means *wait* on the phone.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Can I ___ to Mr Brown, please?', a: ['speak', 'talk'], why: '*Can I speak to…?* asks for a person.' },
      { q: 'I’ll put you ___.', a: ['through'], why: '*Put through* means *connect* on the phone.' },
      { q: 'She’s not here at the moment. Can I ___ a message?', a: ['take'], why: 'You offer to write it down: *take a message*.' },
      { q: 'Please ask him to call me ___.', a: ['back'], why: '*Call back* means *phone again*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
      ['Who’s calling, please?', 'It’s Tom Reed from the bank.'],
      ['Can you spell that, please?', 'R, double E, D.'],
      ['Can I take a message?', 'Yes, please. Ask her to call me.'],
      ['What’s your number?', 'It’s 0161 496 0219.'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Can I leave a message for Anna?', why: 'The caller gives a message for someone.' },
      { a: 'Who’s calling, please?', why: 'The question for the caller’s name.' },
    ] },
  ],
};
