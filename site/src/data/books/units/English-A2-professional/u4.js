// English A2 for work, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Appointments',
  goal: 'Arrange, change and cancel appointments.',
  art: 'sun',
  tags: { skills: ['speaking', 'vocabulary', 'reading'], topics: ['dates', 'times', 'prepositions-of-time', 'appointments', 'calendar'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Are you free on Thursday?',
      about: 'Say dates and times, and suggest a time for a meeting.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'For dates, we use **ordinal numbers**: *first*, *second*, *third*, *fourth*… We write *14 May*, but we say *the fourteenth of May*. In the UK, the day comes first in short dates: *14/05* is 14 May.' },
          { t: 'table', caption: 'Dates', explain: ['head'], quiz: true, head: ['We write', 'We say'], rows: [
            ['1 June', 'the first of June'],
            ['2 March', 'the second of March'],
            ['3 October', 'the third of October'],
            ['12 April', 'the twelfth of April'],
            ['21 July', 'the twenty-first of July'],
            ['30 September', 'the thirtieth of September'],
          ] },
          { t: 'tip', art: 'owl', md: 'In the United States, the month comes first: *05/14* is 14 May. In an email to another country, write the month as a word, for example *14 May*. Then everyone understands.' },
        ],
        [
          { t: 'text', md: 'Times: *10.15* is **quarter past ten**, *10.30* is **half past ten** and *10.45* is **quarter to eleven**. Timetables often use the 24-hour clock (*14.00*), but people usually say *two o’clock* or *2 pm*.' },
          { t: 'table', caption: 'At, on, in', explain: ['head', 'col1'], head: ['Word', 'Use it with', 'Example'], rows: [
            ['at', 'times', 'at 3 pm'],
            ['on', 'days and dates', 'on Friday, on 5 June'],
            ['in', 'months, years and parts of the day', 'in July, in 2027, in the morning'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose at, on or in.', items: [
            { q: 'The meeting is ___ Tuesday.', o: ['on', 'in', 'at'], why: '*on* + a day.' },
            { q: 'Can we meet ___ half past nine?', o: ['at', 'on', 'in'], why: '*at* + a time.' },
            { q: 'I’m on holiday ___ August.', o: ['in', 'on', 'at'], why: '*in* + a month.' },
            { q: 'The interview is ___ 3 June.', o: ['on', 'in', 'at'], why: '*on* + a date.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the time and the words.', pairs: [
            ['10.15', 'quarter past ten'],
            ['10.30', 'half past ten'],
            ['10.45', 'quarter to eleven'],
            ['11.00', 'eleven o’clock'],
            ['14.00', 'two in the afternoon'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Finding a time', lines: [
            { who: 'Elena', s: 'Hi Raj. We need to talk about the new project. Are you free this week?' },
            { who: 'Raj', s: 'Let me check. How about Wednesday?' },
            { who: 'Elena', s: 'Sorry, I can’t on Wednesday. I’m in London all day. Is Thursday OK for you?' },
            { who: 'Raj', s: 'Yes, Thursday is fine. What time is good for you?' },
            { who: 'Elena', s: 'Shall we say ten o’clock?' },
            { who: 'Raj', s: 'Ten is a bit early for me. What about half past eleven?' },
            { who: 'Elena', s: 'Perfect. See you on Thursday at half past eleven, then.' },
          ] },
          { t: 'tip', art: 'owl', md: 'To suggest a time: *How about…?*, *What about…?*, *Shall we say…?*, *Is… OK for you?* To say no, use *Sorry, I can’t on…* and give a reason.' },
          { t: 'ex', kind: 'gap', h: 'Complete the suggestions.', items: [
            { q: 'How ___ Wednesday afternoon?', a: ['about'], why: '*How about* + a day or time.' },
            { q: '___ we say ten o’clock?', a: ['Shall'], why: '*Shall we say…?* suggests a time.' },
            { q: 'Is Thursday OK ___ you?', a: ['for'], why: '*OK for you*, *good for you*.' },
            { q: 'Sorry, I ___ on Monday. I’m in Paris.', a: ['can’t', 'cannot'], why: '*I can’t* + a reason says no politely.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Can we move it?',
      about: 'Change or cancel an appointment politely.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'To change an appointment, say sorry, give a short reason and suggest a new time. **I’m afraid…** and **I’m sorry, but…** give bad news politely. **Could we…?** asks for a change.' },
          { t: 'examples', items: [
            { s: '**I’m sorry, but** I can’t come on Tuesday.', n: 'Say sorry first, then the problem.' },
            { s: '**Could we move** the meeting to Friday?', n: '*Move* a meeting means change its day or time.' },
            { s: '**I’m afraid** I need to **cancel** our appointment.', n: '*Cancel* means it does not happen.' },
            { s: 'Is it **possible** to meet later, at four?', n: 'Another polite way to ask for a change.' },
          ] },
          { t: 'table', caption: 'Changing plans', explain: ['head', 'col0'], head: ['What you do', 'What you say'], rows: [
            ['Say sorry', 'I’m really sorry, but…'],
            ['Give a reason', 'I have another meeting.'],
            ['Ask for a change', 'Could we move it to Thursday?'],
            ['Cancel', 'I’m afraid I need to cancel.'],
            ['Say it is OK', 'No problem. That’s fine.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'A change of plan', lines: [
            { who: 'Clara', s: 'Hello, Mr Adeyemi. It’s Clara Weiss from Fernhill Accountants.' },
            { who: 'Mr Adeyemi', s: 'Oh, hello, Clara.' },
            { who: 'Clara', s: 'I’m calling about our appointment on Monday at two. I’m really sorry, but I’m ill this week. Could we move it to next week?' },
            { who: 'Mr Adeyemi', s: 'Of course. I hope you feel better soon. When are you free?' },
            { who: 'Clara', s: 'How about next Tuesday at the same time?' },
            { who: 'Mr Adeyemi', s: 'Tuesday is difficult for me. Is Wednesday possible?' },
            { who: 'Clara', s: 'Yes, Wednesday at two is fine. Thank you for understanding.' },
            { who: 'Mr Adeyemi', s: 'No problem. See you then.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words that give bad news politely.', items: [
            { s: '[I’m] [afraid] the room is not free on Friday.', why: '*I’m afraid* gives bad news politely.' },
            { s: '[I’m] [really] [sorry], [but] I can’t come to the meeting.', why: '*I’m really sorry, but…* says sorry before the bad news.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best sentence.', items: [
            { q: 'You want to change the day of a meeting:', o: ['Could we move the meeting to Thursday?', 'Could we cancel the meeting to Thursday?', 'We meet Thursday, OK?'], why: '*Move* changes the day or time. *Cancel* means it does not happen.' },
            { q: 'The meeting will not happen:', o: ['I’m afraid I need to cancel the meeting.', 'I’m afraid I need to move the meeting.', 'I’m afraid the meeting is later.'], why: '*Cancel* means the meeting does not happen.' },
            { q: 'A client changes a meeting. You say it is OK:', o: ['No problem.', 'No, thank you.', 'You’re welcome.'], why: '*No problem* means it is OK.' },
            { q: 'I’m sorry, ___ I can’t come on Monday.', o: ['but', 'and', 'so'], why: '*I’m sorry, but…* + the bad news.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about Clara’s call. True or false?', items: [
            { q: 'Clara cancels the appointment and does not want a new one.', a: 'f', why: 'She wants to *move* it to next week.' },
            { q: 'Clara is ill.', a: 't', why: '*I’m ill this week.*' },
            { q: 'The new appointment is on Wednesday at two.', a: 't', why: '*Wednesday at two is fine.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'Could we ___ the meeting to Friday?', a: ['move', 'change'], why: '*Move* (or *change*) a meeting to another day.' },
            { q: 'I’m ___ I need to cancel.', a: ['afraid'], why: '*I’m afraid* + bad news.' },
            { q: 'Thank you for ___.', a: ['understanding'], why: 'A polite thank you when someone accepts a change.' },
            { q: 'Is it ___ to meet on Wednesday?', a: ['possible'], why: '*Is it possible to…?* asks politely.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Could we move our appointment to Monday?', why: '*Could we* + verb: a polite request.' },
            { a: 'I’m afraid I need to cancel the meeting.', why: '*I’m afraid* + bad news.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A calendar invitation',
      about: 'Read a meeting invitation and the replies to it.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Invitation: Team planning meeting', md: 'When: Thursday 12 November, 10.00 to 11.30\nWhere: Meeting room 2, second floor, or online\nOrganiser: Hannah Price\n\nHi all,\n\nLet’s meet to plan our work for December. Please bring your ideas for the new website. If you can’t come to the office, you can join online. The link is below. There will be coffee and biscuits in the room!\n\nHannah' },
          { t: 'text', md: 'In a calendar, you answer an invitation with one click. **Accept** means *yes, I can come*. **Decline** means *no, I can’t come*. **Maybe** means *I don’t know yet*. You can add a short message.' },
        ],
        [
          { t: 'reading', title: 'Replies', md: 'Tariq Aziz has accepted: “See you there, Hannah.”\n\nMei Lin answered maybe: “I have a doctor’s appointment at nine. I can probably come at half past ten.”\n\nJoanna Wright has declined: “Sorry, I’m on holiday that week. Can someone tell me what you decide?”\n\nMark Bell has accepted: “I’ll join online from home. Joanna, I can send you the notes.”' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the invitation and the replies. True, false or not given?', items: [
            { q: 'The meeting is one and a half hours long.', a: 't', why: 'From 10.00 to 11.30 is one and a half hours.' },
            { q: 'Everyone must come to the office.', a: 'f', why: '*If you can’t come to the office, you can join online.*' },
            { q: 'Hannah wants ideas for the new website.', a: 't', why: '*Please bring your ideas for the new website.*' },
            { q: 'Mei Lin can come at the start of the meeting.', a: 'f', why: 'She can probably come at *half past ten*, after the start.' },
            { q: 'Joanna is ill.', a: 'f', why: 'Joanna is *on holiday*.' },
            { q: 'Tariq is Hannah’s manager.', a: 'ng', why: 'The replies do not say what Tariq’s job is.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the person and the information.', pairs: [
            ['Hannah', 'organises the meeting.'],
            ['Mei Lin', 'may be late.'],
            ['Joanna', 'is not coming.'],
            ['Mark', 'joins online.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'In a calendar, *Decline* means:', o: ['No, I can’t come.', 'Yes, I can come.', 'I don’t know yet.'], why: '*Decline* is *no*.' },
            { q: 'Who will send Joanna the notes?', o: ['Mark', 'Hannah', 'Tariq'], why: 'Mark writes: *Joanna, I can send you the notes.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Let’s meet ___ Monday.', o: ['on', 'in', 'at'], why: '*on* + a day.' },
      { q: 'The training starts ___ 9 am.', o: ['at', 'on', 'in'], why: '*at* + a time.' },
      { q: '14.45 is ___.', o: ['quarter to three', 'quarter past three', 'quarter to two'], why: '14.45 is 2.45 pm: fifteen minutes before three.' },
      { q: 'The meeting will not happen. It is ___.', o: ['cancelled', 'moved', 'accepted'], why: '*Cancelled* means it does not happen.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'How ___ Friday at ten?', a: ['about'], why: '*How about…?* suggests a time.' },
      { q: 'I’m ___, but I can’t come on Tuesday.', a: ['sorry'], why: '*I’m sorry, but…* + bad news.' },
      { q: 'Could we ___ the meeting to next week?', a: ['move', 'change'], why: '*Move* a meeting to another day.' },
      { q: 'We say 3 May as “the ___ of May”.', a: ['third'], why: 'Dates use ordinal numbers: *third*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
      ['Are you free on Thursday?', 'Yes, I am. What time?'],
      ['Shall we say two o’clock?', 'Perfect. See you then.'],
      ['Could we move the meeting?', 'No problem. When are you free?'],
      ['When is the meeting?', 'On 5 March, at ten.'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Is Thursday OK for you?', why: '*Is* + day + *OK for you*?' },
      { a: 'What time is good for you?', why: 'Question word + *is* + adjective.' },
    ] },
  ],
};
