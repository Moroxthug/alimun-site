// English A2 for work, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Customers',
  goal: 'Help customers politely.',
  art: 'teacup',
  tags: { skills: ['speaking', 'vocabulary', 'reading'], topics: ['customer-service', 'offers', 'apologies', 'will-promises', 'reviews'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'How can I help?',
      about: 'Greet customers, offer help and give them what they need.',
      art: 'parrot',
      spreads: [
        [
          { t: 'dialogue', title: 'In a clothes shop', lines: [
            { who: 'Assistant', s: 'Good morning. How can I help you?' },
            { who: 'Customer', s: 'Hi. I’m looking for a black jacket.' },
            { who: 'Assistant', s: 'They’re over here. What size are you?' },
            { who: 'Customer', s: 'Medium, I think.' },
            { who: 'Assistant', s: 'Here you are. The changing rooms are next to the stairs.' },
            { who: 'Customer', s: 'Thanks. Hmm, it’s a bit small. Have you got it in large?' },
            { who: 'Assistant', s: 'Let me check for you. Yes, here’s a large one.' },
            { who: 'Customer', s: 'That’s great. I’ll take it.' },
            { who: 'Assistant', s: 'Would you like a bag?' },
            { who: 'Customer', s: 'No, thanks.' },
          ] },
          { t: 'text', md: 'With customers, be friendly and polite. Greet them with **How can I help you?** Offer things with **Would you like…?** Say **Let me…** when you do something for them: *Let me check*. Say **Here you are** when you give them something.' },
        ],
        [
          { t: 'table', caption: 'Helping a customer', explain: ['head', 'col0'], head: ['What you do', 'What you say'], rows: [
            ['Greet', 'Good afternoon. How can I help?'],
            ['Ask the customer to wait', 'Please take a seat. Someone will be with you in a minute.'],
            ['Offer something', 'Would you like a bag?'],
            ['Do something for them', 'Let me check for you.'],
            ['Give something', 'Here you are.'],
            ['Say goodbye', 'Have a nice day!'],
          ] },
          { t: 'tip', art: 'owl', md: 'Answer *Would you like…?* with **Yes, please** or **No, thanks**. Only *Yes* or *No* can sound rude.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best thing to say.', items: [
            { q: 'A customer comes in. You say:', o: ['Good morning. How can I help you?', 'What do you want?', 'Yes?'], why: '*How can I help you?* is friendly and polite.' },
            { q: 'You go to look for something:', o: ['Let me check for you.', 'Let you check.', 'I check you.'], why: '*Let me* + verb: you do something for the customer.' },
            { q: 'You give the customer a receipt:', o: ['Here you are.', 'Here are you.', 'There you are going.'], why: 'The fixed phrase is *Here you are*.' },
            { q: 'A customer answers *Would you like a bag?*', o: ['No, thanks.', 'No, I wouldn’t like.', 'No, I don’t.'], why: 'The polite answer is *No, thanks* or *Yes, please*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
            ['How can I help you?', 'I’m looking for a printer.'],
            ['What size are you?', 'Medium, I think.'],
            ['Would you like a bag?', 'No, thanks.'],
            ['How would you like to pay?', 'By card, please.'],
            ['Do you have an appointment?', 'Yes, at three o’clock.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete what the assistant says.', items: [
            { q: 'Good morning. How can I ___ you?', a: ['help'], why: '*How can I help you?* is the usual greeting.' },
            { q: 'Would you ___ a receipt?', a: ['like'], why: '*Would you like…?* is an offer.' },
            { q: 'Let ___ check for you.', a: ['me'], why: '*Let me* + verb.' },
            { q: 'Please take a ___. Someone will be with you in a minute.', a: ['seat'], why: '*Take a seat* means *sit down*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Would you like a bag?', why: '*Would you like* + the thing: an offer.' },
            { a: 'Let me check for you.', why: '*Let me* + verb.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'I’m very sorry about that',
      about: 'Understand a customer’s problem, say sorry and offer help.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'Sometimes a customer has a problem: something is broken, late or wrong. **Say sorry**, show you understand and **offer help**. Use **I’ll** (*I will*) to promise what you are going to do now.' },
          { t: 'examples', items: [
            { s: 'The shower **doesn’t work**.', n: '*It doesn’t work* means it is broken.' },
            { s: 'My order **is late**.', n: 'It did not come at the right time.' },
            { s: 'This is the **wrong** size.', n: '*Wrong* is the opposite of *right*.' },
            { s: '**I’m really sorry** about that. **I’ll** get you a new one.', n: 'Say sorry, then make a promise with *I’ll*.' },
            { s: 'Would you like **a refund**?', n: 'A refund means you get your money back.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'At hotel reception', lines: [
            { who: 'Guest', s: 'Excuse me. There’s a problem with my room.' },
            { who: 'Receptionist', s: 'I’m sorry to hear that. What’s the problem?' },
            { who: 'Guest', s: 'The shower doesn’t work, and there are no towels.' },
            { who: 'Receptionist', s: 'I’m very sorry about that. I’ll send someone to fix the shower right now.' },
            { who: 'Guest', s: 'Thank you. And the towels?' },
            { who: 'Receptionist', s: 'I’ll bring you some towels in five minutes. And can I offer you a free breakfast tomorrow?' },
            { who: 'Guest', s: 'That’s very kind. Thank you.' },
            { who: 'Receptionist', s: 'You’re welcome. Again, I’m sorry about the problem.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Promise only what you can really do. *I’ll check* and *I’ll ask my manager* are good, honest promises.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'A customer says: My order is late. You say:', o: ['I’m sorry about that. Let me check.', 'That’s not my problem.', 'It’s OK, it isn’t late.'], why: 'Say sorry and offer help.' },
            { q: 'The printer is broken. It ___ work.', o: ['doesn’t', 'isn’t', 'don’t'], why: '*It doesn’t work*: present simple negative with *it*.' },
            { q: 'Don’t worry. I ___ call the technician now.', o: ['will', 'am', 'going'], why: '*I will* (*I’ll*) + verb: a promise.' },
            { q: 'You get your money back. This is a ___.', o: ['refund', 'receipt', 'discount'], why: 'A refund is your money back. A receipt is the paper you get when you pay.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the word or words that say what the problem is.', items: [
            { s: 'Excuse me, the lift [doesn’t] [work] today.', why: '*Doesn’t work* means it is broken.' },
            { s: 'Sorry, this shirt is the [wrong] colour.', why: '*Wrong*: it is not the colour the customer wants.' },
            { s: 'Hello, my delivery is two days [late].', why: '*Late*: it did not come at the right time.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'I’m very ___ about that.', a: ['sorry'], why: '*I’m very sorry about…* says sorry for a problem.' },
            { q: 'I’m sorry to ___ that.', a: ['hear'], why: 'The fixed phrase is *I’m sorry to hear that*.' },
            { q: 'The heating doesn’t ___.', a: ['work'], why: '*It doesn’t work* means it is broken.' },
            { q: 'Don’t worry, I’ll ___ my manager.', a: ['ask', 'call', 'get', 'tell'], why: '*I’ll* + verb: a promise to help.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'I’m sorry to hear that.', why: 'A fixed phrase when someone tells you a problem.' },
            { a: 'I’ll send someone to fix it.', why: '*I’ll* + verb: a promise.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'What customers say',
      about: 'Read customer reviews of a café and a notice for customers.',
      art: 'croissant',
      spreads: [
        [
          { t: 'reading', title: 'Reviews: The Corner Café', md: '**Great lunch, friendly staff.** I come here every week for lunch. The soup is always hot and the staff are really friendly. Last week I forgot my umbrella, and the waiter ran after me with it! (Kofi)\n\n**Slow on Saturday.** The food was good, but we waited forty minutes for our sandwiches. The café was very busy and there was only one waiter. He said sorry and gave us free drinks. (Marta)\n\n**A problem with my order.** I ordered a cake for my mum’s birthday. When I came to collect it, the name on the cake was wrong. The manager said sorry and made a new one in an hour. Good service in the end. (Lewis)' },
        ],
        [
          { t: 'reading', title: 'Notice', md: '**Information for customers**\n\nFrom next Monday, the café opens at 8 am, not 7.30 am.\n\nWe only take card payments. Sorry, we do not take cash.\n\nThe kitchen closes at 3 pm. After 3 pm, we serve drinks and cakes only.' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the reviews and the notice. True, false or not given?', items: [
            { q: 'Kofi has lunch at the café every week.', a: 't', why: '*I come here every week for lunch.*' },
            { q: 'Marta paid for her drinks.', a: 'f', why: 'The waiter *gave us free drinks*.' },
            { q: 'Lewis waited a day for the new cake.', a: 'f', why: 'The manager made a new one *in an hour*.' },
            { q: 'Marta comes to the café every Saturday.', a: 'ng', why: 'Marta does not say how often she comes.' },
            { q: 'You can pay with cash.', a: 'f', why: '*Sorry, we do not take cash.*' },
            { q: 'You can order soup at 4 pm.', a: 'f', why: 'The kitchen closes at 3 pm. After that: drinks and cakes only.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Which review has no problem in it?', o: ['Kofi’s', 'Marta’s', 'Lewis’s'], why: 'Marta waited a long time and Lewis’s cake was wrong. Kofi only says good things.' },
            { q: 'What time does the café open from next Monday?', o: ['8 am', '7.30 am', '3 pm'], why: '*From next Monday, the café opens at 8 am.*' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the word from the reviews and its meaning.', pairs: [
            ['friendly', 'nice and kind to people'],
            ['busy', 'with a lot of people'],
            ['free', 'you do not pay'],
            ['collect', 'go and get something'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'A customer comes in. You say: ___', o: ['How can I help you?', 'What is your problem?', 'What do you want?'], why: '*How can I help you?* is friendly and polite.' },
      { q: 'Would you like a coffee while you wait? B: ___', o: ['Yes, please.', 'Yes, I would like.', 'Yes, I like.'], why: 'Answer an offer with *Yes, please* or *No, thanks*.' },
      { q: 'The machine is broken. It ___.', o: ['doesn’t work', 'isn’t work', 'not works'], why: '*It doesn’t work*: present simple negative.' },
      { q: 'I ___ call you back in ten minutes.', o: ['’ll', '’m', '’d'], why: '*I’ll* + verb: a promise.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Let ___ check that for you.', a: ['me'], why: '*Let me* + verb.' },
      { q: 'I’m very sorry ___ the delay.', a: ['about', 'for'], why: '*Sorry about* or *sorry for* + the problem.' },
      { q: 'I’m sorry to ___ that.', a: ['hear'], why: '*I’m sorry to hear that.*' },
      { q: 'You get your money back: it’s a ___.', a: ['refund'], why: 'A refund is your money back.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'How can I help you?', why: 'Question word + *can* + *I* + verb.' },
      { a: 'Please take a seat over there.', why: '*Take a seat* means *sit down*.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'Is this a good way to talk to a customer? True or false?', items: [
      { q: 'A customer has a problem. You say: I’m very sorry about that.', a: 't', why: 'Say sorry first.' },
      { q: 'A customer asks for help. You say: It’s not my job.', a: 'f', why: 'This sounds rude. Say *Let me find someone who can help*.' },
    ] },
  ],
};
