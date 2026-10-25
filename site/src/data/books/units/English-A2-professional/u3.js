// English A2 for work, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Simple emails',
  goal: 'Write and understand short work emails.',
  art: 'cat',
  tags: { skills: ['writing', 'reading', 'vocabulary'], topics: ['email', 'greetings', 'polite-requests'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Hi or Dear?',
      about: 'Start and finish a work email in the right way.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'A work email starts with a greeting and finishes with an ending and your name. **Hi** + first name is friendly: use it for colleagues. **Dear** + name is more formal: use it for customers and for people you do not know well.' },
          { t: 'table', caption: 'Starting and ending an email', explain: ['head', 'col0'], quiz: true, head: ['', 'Friendly', 'More formal'], rows: [
            ['Greeting', 'Hi Tom,', 'Dear Mr Evans,'],
            ['First line', 'Thanks for your email.', 'Thank you for your email.'],
            ['Last line', 'See you soon.', 'I look forward to hearing from you.'],
            ['Ending', 'Thanks,', 'Kind regards,'],
          ] },
          { t: 'tip', art: 'owl', md: 'Write *Dear* + title + surname (*Dear Ms Khan*) or *Dear* + first name (*Dear Amira*). Do not write *Dear Ms Amira*. *Ms* is for any woman; *Mr* is for a man.' },
        ],
        [
          { t: 'reading', title: 'To a colleague', md: 'Hi Leo,\n\nThanks for your email. Yes, I can come to the meeting on Friday. See you then!\n\nBest wishes,\nHana' },
          { t: 'reading', title: 'To a customer', md: 'Dear Mrs Brown,\n\nThank you for your email. Your order is ready. You can collect it from our shop on Monday.\n\nKind regards,\nHana Sato\nCustomer Service' },
          { t: 'text', md: 'Hana writes to two people. To her colleague she writes *Hi*, *Thanks* and *Best wishes*. To the customer she writes *Dear*, *Thank you* and *Kind regards*, and she adds her full name and her job.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best line.', items: [
            { q: 'An email to Leo, a colleague you see every day:', o: ['Hi Leo,', 'Dear Sir,', 'Hello Mr Leo,'], why: '*Hi* + first name is right for a colleague.' },
            { q: 'An email to a new customer, Ms Ana Silva:', o: ['Dear Ms Silva,', 'Dear Ms Ana,', 'Hi Silva,'], why: '*Dear* + title + surname.' },
            { q: 'The first line of a friendly email:', o: ['Thanks for your email.', 'I look forward to hearing from you.', 'Kind regards,'], why: '*Thanks for your email* is a friendly first line.' },
            { q: 'The last line of a formal email:', o: ['I look forward to hearing from you.', 'See you!', 'Bye for now!'], why: '*I look forward to hearing from you* is polite and formal.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the friendly line and the more formal line.', pairs: [
            ['Hi Sara,', 'Dear Ms Novak,'],
            ['Thanks for your email.', 'Thank you for your email.'],
            ['See you soon.', 'I look forward to hearing from you.'],
            ['Thanks,', 'Kind regards,'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the formal email.', items: [
            { q: '___ Mr Evans,', a: ['Dear'], why: 'A formal greeting: *Dear* + title + surname.' },
            { q: 'Thank you ___ your email.', a: ['for'], why: '*Thank you for* + the thing.' },
            { q: 'I look forward to ___ from you.', a: ['hearing'], why: 'After *look forward to*, use the *-ing* form: *hearing*.' },
            { q: 'Kind ___,', a: ['regards'], why: '*Kind regards* is a safe ending for most work emails.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Thank you for your email.', why: 'A polite first line.' },
            { a: 'I look forward to hearing from you.', why: 'A polite last line.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Could you send me…?',
      about: 'Ask for things in an email and answer yes or no politely.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'To ask for something, write a question with **Could you…?** or **Can you…?** *Could you* is a little more polite. Add *please*. To ask if you can do something, use **Can I…?** or **Could I…?**' },
          { t: 'examples', items: [
            { s: '**Could you** send me the price list, please?', n: '*Could you* + verb: a polite request.' },
            { s: '**Can you** call the customer today?', n: '*Can you* is fine for a colleague.' },
            { s: '**Could I** have Friday afternoon off?', n: '*Could I* asks if you can do something.' },
            { s: '**Here is** the report you asked for.', n: 'Use this when you send something in the email.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Do not write a request as an order, for example *Send me the list.* It can sound rude. A question with *Could you* is better.' },
        ],
        [
          { t: 'reading', title: 'Subject: Price list', md: 'Hi Omar,\n\nCould you send me the new price list, please? I need it for a meeting with a customer tomorrow.\n\nThanks,\nJulia' },
          { t: 'reading', title: 'Re: Price list', md: 'Hi Julia,\n\nSure, no problem. Here is the price list. I’m sorry, but I can’t come to the meeting tomorrow. I can call the customer on Thursday.\n\nBest wishes,\nOmar' },
          { t: 'table', caption: 'Answering a request', explain: ['head'], head: ['Yes', 'No'], rows: [
            ['Of course.', 'I’m sorry, but I can’t.'],
            ['Sure, no problem.', 'I’m afraid I can’t today.'],
            ['Yes, I can do that.', 'Sorry, I’m busy on Monday.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: '___ you send me the report, please?', o: ['Could', 'Do', 'Are'], why: '*Could you* + verb: a polite request.' },
            { q: 'Could you ___ me the address?', o: ['send', 'to send', 'sending'], why: 'After *could you*, use the verb with no *to*.' },
            { q: 'Your manager asks: Could you call the customer? You say yes:', o: ['Of course.', 'Of course not.', 'No, thanks.'], why: '*Of course* means *yes*. *Of course not* means *no*.' },
            { q: 'You say no politely:', o: ['I’m afraid I can’t today.', 'I can’t. Bye.', 'No way.'], why: 'Start with *I’m afraid* or *I’m sorry*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'Could you ___ me the file, please?', a: ['send', 'email'], why: '*Could you* + verb.' },
            { q: '___ I have Friday afternoon off?', a: ['Could', 'Can', 'May'], why: '*Could I…?* asks if you can do something.' },
            { q: 'I’m ___, but I can’t come on Monday.', a: ['sorry'], why: '*I’m sorry, but…* says no politely.' },
            { q: 'I’m ___ I can’t help today.', a: ['afraid'], why: '*I’m afraid* + bad news, with no *but*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the words that make each request polite.', items: [
            { s: '[Could] [you] check the dates, [please]?', why: '*Could you* and *please* make the request polite.' },
            { s: 'Hi Anna, [can] [you] book a room for the meeting, [please]?', why: '*Can you* and *please* make the request polite.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Could you send me the price list?', why: '*Could you* + verb + the thing.' },
            { a: 'Here is the report you asked for.', why: 'Use *Here is* when you send something.' },
            { a: 'I’m sorry, but I can’t come.', why: '*I’m sorry, but* + the bad news.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Three emails',
      about: 'Read three short work emails and find the important information.',
      art: 'cat',
      spreads: [
        [
          { t: 'reading', title: 'Subject: Printer on the second floor', md: 'Hi everyone,\n\nThe printer on the second floor is broken. A technician is coming on Wednesday morning. Until then, please use the printer next to the kitchen.\n\nThanks,\nMike (IT)' },
          { t: 'reading', title: 'Subject: Lunch on Friday', md: 'Hi team,\n\nFriday is Aisha’s last day with us. She is moving to our Glasgow office. We are having lunch together at the Italian restaurant on Bridge Street at one o’clock. Can you tell me by Wednesday if you can come?\n\nBest wishes,\nRuth' },
        ],
        [
          { t: 'reading', title: 'Subject: Your visit', md: 'Dear Mr Novak,\n\nThank you for your email. I can meet you on Tuesday at 10 am. Our office is at 25 Park Road. Please ask for me at reception.\n\nKind regards,\nSara Lindqvist\nSales Manager' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the three emails. True, false or not given?', items: [
            { q: 'The printer next to the kitchen is broken.', a: 'f', why: 'The printer on the *second floor* is broken.' },
            { q: 'The technician comes on Wednesday.', a: 't', why: '*A technician is coming on Wednesday morning.*' },
            { q: 'Aisha is leaving the company.', a: 'f', why: 'She is moving to *our* Glasgow office: the same company.' },
            { q: 'The lunch is at one o’clock.', a: 't', why: '*…at one o’clock.*' },
            { q: 'Ruth pays for the lunch.', a: 'ng', why: 'The email does not say who pays.' },
            { q: 'Mr Novak should ask for Sara at reception.', a: 't', why: '*Please ask for me at reception.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Which email is the most formal?', o: ['Sara’s email', 'Mike’s email', 'Ruth’s email'], why: 'Sara writes *Dear Mr Novak* and *Kind regards*.' },
            { q: 'What does Ruth want?', o: ['An answer by Wednesday', 'A new printer', 'A meeting on Tuesday'], why: '*Can you tell me by Wednesday if you can come?*' },
            { q: 'Where is Sara’s office?', o: ['25 Park Road', 'Bridge Street', 'Glasgow'], why: '*Our office is at 25 Park Road.*' },
          ] },
          { t: 'tip', art: 'owl', md: 'A good subject line says what the email is about in a few words: *Lunch on Friday*, *Your visit*. *Re:* at the start means it is a reply.' },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'An email to a customer you do not know:', o: ['Dear Mr Patel,', 'Hi Patel,', 'Hey Mr Patel!'], why: '*Dear* + title + surname.' },
      { q: 'Could you ___ the meeting room for Monday?', o: ['book', 'to book', 'booking'], why: '*Could you* + verb with no *to*.' },
      { q: 'A safe ending for most work emails:', o: ['Kind regards,', 'Love,', 'Hugs,'], why: '*Kind regards* works in almost every work email.' },
      { q: 'A colleague asks for help. You say yes:', o: ['Sure, no problem.', 'I’m afraid not.', 'Sorry, I can’t.'], why: '*Sure, no problem* means yes.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Thanks ___ your email.', a: ['for'], why: '*Thanks for* + the thing.' },
      { q: 'I look forward to ___ (hear) from you.', a: ['hearing'], why: '*look forward to* + *-ing*.' },
      { q: 'I’m ___ I can’t come to the meeting.', a: ['afraid'], why: '*I’m afraid* + bad news.' },
      { q: '___ is the price list you asked for.', a: ['Here'], why: '*Here is…* when you send something.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Could you call me back, please?', why: '*Could you* + verb.' },
      { a: 'Thank you for your quick reply.', why: '*Thank you for* + the thing.' },
    ] },
    { t: 'ex', kind: 'spot', h: 'Tap the word that is wrong.', items: [
      { s: 'Dear Ms [Anna], thank you for your email.', why: 'After *Ms*, write the surname, for example *Dear Ms Berg*.' },
      { s: 'Could you [to] send me the report?', why: 'After *could you*, there is no *to*.' },
    ] },
  ],
};
