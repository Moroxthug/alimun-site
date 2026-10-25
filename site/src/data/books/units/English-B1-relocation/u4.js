// English B1 for moving abroad, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Bills and contracts',
  goal: 'Set up bills and contracts and complain when something goes wrong.',
  art: 'cactus',
  tags: { skills: ['speaking', 'writing', 'reading', 'vocabulary'], topics: ['contracts', 'utilities', 'complaints', 'passive', 'present-perfect-continuous'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Phone, internet and energy contracts',
      about: 'Understand tariffs, direct debits and contract length.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'When you set up a phone, internet or energy contract, you choose a **tariff**: a price plan. Most people pay by **direct debit**: the company takes the money from your bank account automatically every month.' },
          { t: 'table', caption: 'Contract words', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['tariff', 'a price plan'],
            ['direct debit', 'the company takes the money from your account automatically'],
            ['contract length', 'how long you must stay, for example 12 or 24 months'],
            ['fixed tariff', 'the price stays the same for a set time'],
            ['variable tariff', 'the price can go up or down'],
            ['early exit fee', 'money you pay if you leave before the end of the contract'],
            ['SIM-only', 'a phone contract without a new phone'],
          ] },
          { t: 'tip', art: 'owl', md: 'In the UK, if you agree to a contract online or by phone, you usually have 14 days to change your mind. This is called the *cooling-off period*.' },
        ],
        [
          { t: 'dialogue', title: 'Getting broadband', lines: [
            { who: 'Agent', s: 'Thanks for calling. How can I help?' },
            { who: 'Yusuf', s: 'Hi, I’ve just moved into a new flat, and I’d like to get broadband.' },
            { who: 'Agent', s: 'Sure. We have two tariffs: a basic one for twenty-five pounds a month and a faster one for thirty-five.' },
            { who: 'Yusuf', s: 'How long is the contract?' },
            { who: 'Agent', s: 'It’s eighteen months. If you leave early, there’s an early exit fee.' },
            { who: 'Yusuf', s: 'Does the price stay the same for the whole contract?' },
            { who: 'Agent', s: 'Yes, the price is fixed for the eighteen months.' },
            { who: 'Yusuf', s: 'OK, I’ll take the basic one. Can I pay by direct debit?' },
            { who: 'Agent', s: 'Of course. I just need your sort code and account number.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the call. True or false?', items: [
            { q: 'Yusuf wants a new phone contract.', a: 'f', why: 'He wants *broadband*: internet at home.' },
            { q: 'The faster tariff costs thirty-five pounds a month.', a: 't', why: '*A faster one for thirty-five.*' },
            { q: 'He can leave after six months without paying anything extra.', a: 'f', why: '*If you leave early, there’s an early exit fee.*' },
            { q: 'He chooses the faster tariff.', a: 'f', why: '*I’ll take the basic one.*' },
            { q: 'He will pay by direct debit.', a: 't', why: 'He asks for direct debit, and the agent asks for his bank details.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word and its meaning.', pairs: [
            ['tariff', 'a price plan'],
            ['direct debit', 'an automatic payment from your bank account'],
            ['early exit fee', 'what you pay if you leave early'],
            ['cooling-off period', 'time to change your mind'],
            ['fixed tariff', 'the price stays the same'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'You want to pay the same price every month for two years. You choose a ___ tariff.', o: ['fixed', 'variable', 'free'], why: 'A *fixed* tariff does not change for a set time.' },
            { q: 'You already have a phone and want a cheap contract. You choose ___.', o: ['SIM-only', 'a contract with a new phone', 'an energy tariff'], why: '*SIM-only*: you pay only for calls, messages and data.' },
            { q: 'You agreed to a contract online three days ago and now you have changed your mind. You can usually ___.', o: ['cancel it in the cooling-off period', 'never cancel it', 'only cancel it after twelve months'], why: 'You usually have 14 days to change your mind.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the questions on the phone.', items: [
            { q: 'Can I pay ___ direct debit?', a: ['by'], why: '*pay by direct debit*, *pay by card*.' },
            { q: 'Is there a fee if I leave ___?', a: ['early'], why: '*leave early*: before the end of the contract.' },
            { q: 'Does the price stay the ___ for the whole contract?', a: ['same'], why: '*stay the same*: not change.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Complaining politely',
      about: 'Complain by phone and by email, and ask for a refund.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'A good complaint is polite and clear. Give the facts (what happened and when), then say what you want: a correction, a repair or a **refund**, your money back.' },
          { t: 'examples', items: [
            { s: 'I’m calling **about** my last bill.', n: 'Say why you are calling.' },
            { s: 'I **was charged** twice for the same month.', n: 'Past simple passive: you say what happened to you.' },
            { s: 'I **have been waiting** for an engineer since Monday.', n: 'Present perfect continuous: it started in the past and it is still happening.' },
            { s: 'I **would like** a refund, please.', n: 'Say clearly what you want.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'A wrong phone bill', lines: [
            { who: 'Agent', s: 'Good afternoon, customer services. How can I help?' },
            { who: 'Lucía', s: 'Hello. I’m calling about my phone bill for October. I’ve been charged twice for the same month.' },
            { who: 'Agent', s: 'I’m sorry to hear that. Can I have your account number, please?' },
            { who: 'Lucía', s: 'Yes, it’s 4827 1190.' },
            { who: 'Agent', s: 'Thank you. Yes, I can see two payments of eighteen pounds. That’s our mistake.' },
            { who: 'Lucía', s: 'Could you give me a refund for the second payment?' },
            { who: 'Agent', s: 'Of course. The money will be back in your account in three to five working days.' },
            { who: 'Lucía', s: 'Great. Could you send me an email to confirm that?' },
            { who: 'Agent', s: 'Yes, I’ll do that now.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the call. True or false?', items: [
            { q: 'Lucía is calling about her energy bill.', a: 'f', why: 'She is calling about her *phone bill*.' },
            { q: 'She paid for October two times.', a: 't', why: '*I’ve been charged twice for the same month.*' },
            { q: 'The company says it was Lucía’s mistake.', a: 'f', why: '*That’s our mistake.*' },
            { q: 'She will get her money back the same day.', a: 'f', why: '*In three to five working days.*' },
            { q: 'The agent will confirm the refund by email.', a: 't', why: '*Yes, I’ll do that now.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which sentence is polite and correct?', items: [
            { q: '', o: ['I’m afraid there’s a mistake on my bill.', 'Your bill is wrong, as usual.', 'Bill wrong. Fix it.'], why: '*I’m afraid…* makes a complaint polite.' },
            { q: '', o: ['Could you look into it, please?', 'Look into it now.', 'Could you looking into it, please?'], why: '*Could you* + verb: *look into* means check and try to solve.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'I would like to make a complaint.', why: '*make a complaint*: the usual phrase.' },
            { a: 'Could you look into the problem?', why: '*Could you* + verb: a polite request.' },
          ] },
        ],
        [
          { t: 'text', md: 'In a complaint email, give your account number in the subject line, then the facts and what you want.' },
          { t: 'tip', art: 'owl', md: 'If a company does not solve your complaint, you can often take it to an independent *ombudsman*, for example for energy or phone services. The company can tell you how.' },
          { t: 'ex', kind: 'gap', h: 'Complete the complaint.', items: [
            { q: 'I am writing to complain ___ my internet connection.', a: ['about'], why: '*complain about* something.' },
            { q: 'I ___ (charge) twice for the same month.', a: ['was charged', 'have been charged', '’ve been charged'], why: 'Passive: the company charged me. Past simple or present perfect.' },
            { q: 'I have been ___ (wait) for an engineer for two weeks.', a: ['waiting'], why: 'Present perfect continuous: *have been* + *-ing*.' },
            { q: 'I would be grateful if you could give me a ___.', a: ['refund'], why: 'A *refund*: your money back.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A bill with a mistake',
      about: 'Find the mistake on an energy bill and read the email about it.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'Energy bills in the UK often show two prices: the **standing charge**, a fixed amount for each day, and the **unit rate**, the price for each kilowatt hour (kWh) you use. If the company does not have a meter reading, it sends an **estimated** bill.' },
          { t: 'reading', title: 'Electricity bill', md: '**Electricity bill: Flat 2, 7 Elm Grove**\n\nAccount number: 30418822\nBill period: 1 to 30 September\n\nPrevious meter reading: 15,320 (actual)\nNew meter reading: 16,820 (estimated)\nElectricity used: 1,500 kWh\n\nUnit rate: 25p per kWh, £375.00\nStanding charge: 50p per day for 30 days, £15.00\n**Total: £390.00**\n\nThis amount will be taken by direct debit on 15 October.' },
        ],
        [
          { t: 'reading', title: 'Subject: Wrong bill, account 30418822', md: 'Dear Customer Services,\n\nI am writing about my electricity bill for September, which I received yesterday.\n\nThe bill says that I used 1,500 kWh, but this is based on an estimated meter reading. I live alone in a small flat, and I usually use about 150 kWh a month. This morning I read the meter myself: the real reading is 15,470. I have attached a photo of the meter.\n\nThis means that I used 150 kWh, not 1,500, and the bill should be £52.50, not £390.\n\nCould you please send me a corrected bill before the direct debit is taken on 15 October? If the full amount has already been taken, I would like a refund of the difference.\n\nThank you for your help.\n\nKind regards,\nMarta Kowalczyk' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the bill and the email. True, false or not given?', items: [
            { q: 'The new meter reading on the bill was an estimate.', a: 't', why: '*16,820 (estimated)*.' },
            { q: 'Marta really used 1,500 kWh in September.', a: 'f', why: 'The real reading shows she used 150 kWh.' },
            { q: 'She sent a photo of her meter.', a: 't', why: '*I have attached a photo of the meter.*' },
            { q: 'The correct bill is £52.50.', a: 't', why: '150 kWh × 25p = £37.50, plus £15 standing charge.' },
            { q: 'Marta lives with her family.', a: 'f', why: '*I live alone.*' },
            { q: 'Marta wants to change to a different energy company.', a: 'ng', why: 'The email does not say this.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'The standing charge is ___.', o: ['a fixed amount for each day', 'the price for each kWh', 'the total of the bill'], why: 'You pay it every day, even if you use no energy.' },
            { q: 'An estimated reading is ___.', o: ['a number the company guesses', 'a number you read yourself', 'the price of electricity'], why: 'The company *estimates*: it guesses from earlier bills.' },
            { q: 'What does Marta want first?', o: ['a corrected bill', 'a new meter', 'a cheaper tariff'], why: '*Could you please send me a corrected bill…?*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the two prices that make up an energy bill.', items: [
            { s: 'The total is the [unit rate] for the energy you use plus the [standing charge] for each day.', why: 'Unit rate × kWh, plus the standing charge × days.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'The company takes the money from your account automatically. You pay by ___.', o: ['direct debit', 'refund', 'tariff'], why: '*direct debit*: an automatic payment.' },
      { q: 'You leave your contract before the end. You may have to pay ___.', o: ['an early exit fee', 'a standing charge', 'a deposit'], why: 'An *early exit fee* is for leaving early.' },
      { q: 'I ___ twice for the same month.', o: ['was charged', 'charged', 'am charging'], why: 'Passive: the company charged me.' },
      { q: 'The fixed daily amount on an energy bill is the ___.', o: ['standing charge', 'unit rate', 'meter reading'], why: 'You pay the *standing charge* for each day.' },
      { q: '', o: ['I’m afraid there’s a problem with my bill.', 'My bill is rubbish.', 'You made my bill wrong, fix it.'], why: '*I’m afraid…* is polite.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'I’m calling ___ my bill for March.', a: ['about'], why: '*calling about* something.' },
      { q: 'I would like a ___ for the second payment.', a: ['refund'], why: '*refund*: money back.' },
      { q: 'I have been ___ (wait) for an answer since Monday.', a: ['waiting'], why: 'Present perfect continuous.' },
      { q: 'In the UK, you usually have 14 days to change your mind: the ___ period.', a: ['cooling-off', 'cooling off'], why: 'The *cooling-off period*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Could you send me a corrected bill?', why: '*Could you* + verb.' },
      { a: 'I am writing about my last bill.', why: '*I am writing about…* says why you write.' },
    ] },
  ],
};
