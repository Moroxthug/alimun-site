// English A2 for study and exams, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Short texts',
  goal: 'Write short emails and messages to a teacher or course.',
  art: 'mug',
  tags: { skills: ['writing', 'reading', 'vocabulary'], topics: ['email', 'because-so', 'polite-questions', 'replies'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Dear Ms Patel',
      about: 'Write a short email to a teacher: greeting, reason and ending.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'A short email to a teacher has a **greeting**, the **reason** for writing, sometimes a **request**, and an **ending**. Keep it short and polite.' },
          { t: 'table', caption: 'The parts of a short email', explain: ['head', 'col0'], head: ['Part', 'Example'], rows: [
            ['greeting (polite)', 'Dear Ms Patel,'],
            ['greeting (friendly)', 'Hi Sarah,'],
            ['reason', 'I’m writing because I can’t come to class on Thursday.'],
            ['request', 'Could you send me the homework, please?'],
            ['thanks', 'Thank you for your help.'],
            ['ending', 'Best wishes,'],
          ] },
          { t: 'tip', art: 'owl', md: 'In the UK, adult learners often use the teacher’s first name: *Hi Sarah*. If you are not sure, write *Dear* + *Mr* or *Ms* + family name: *Dear Ms Patel*. Do not write *Dear Teacher*.' },
        ],
        [
          { t: 'reading', title: 'Subject: Thursday’s class', md: 'Dear Ms Patel,\n\nI’m writing because I can’t come to class on Thursday. I have a doctor’s appointment at six o’clock.\n\nCould you send me the homework for next week, please? I don’t want to miss it.\n\nThank you for your help.\n\nBest wishes,\nAmir Haddad' },
          { t: 'text', md: 'Use **because** to give a reason: *I can’t come because I’m ill.* Use **so** to give a result: *I’m ill, so I can’t come.*' },
          { t: 'tip', art: 'owl', md: 'Write a short subject line, for example *Thursday’s class* or *Question about homework*. Then your teacher knows what the email is about.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best line for an email to your teacher, Ms Patel.', items: [
            { q: 'Greeting:', o: ['Dear Ms Patel,', 'Dear Patel,', 'Hello teacher Patel,'], why: '*Dear* + *Ms* + family name.' },
            { q: 'Reason:', o: ['I’m writing because I’m ill today.', 'I’m writing because of I’m ill today.', 'I’m writing so I’m ill today.'], why: '*Because* + a sentence gives the reason.' },
            { q: 'Request:', o: ['Could you send me the worksheet, please?', 'Send me the worksheet.', 'You send me the worksheet.'], why: '*Could you…, please?* is a polite request.' },
            { q: 'Ending:', o: ['Best wishes,', 'Dear Ms Patel,', 'Hi Sarah,'], why: '*Best wishes* ends an email. The other two are greetings.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with one word.', items: [
            { q: 'I can’t come to class ___ I have to work late.', a: ['because'], why: 'The second part is the reason: *because*.' },
            { q: 'My son is ill, ___ I need to stay at home.', a: ['so'], why: 'The second part is the result: *so*.' },
            { q: 'I’m ___ to ask about the homework.', a: ['writing'], why: '*I’m writing to…* says why you write.' },
            { q: '___ you send me the new timetable, please?', a: ['Could', 'Can'], why: '*Could you…?* or *Can you…?* makes a polite request.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'I am writing to ask about the homework.', why: '*I am writing to* + verb says why you write.' },
            { a: 'Could you send me the worksheet, please?', why: '*Could you* + verb: a polite request.' },
            { a: 'Thank you for your help.', why: '*Thank you for* + noun.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Questions and answers',
      about: 'Ask a school for information and write a short reply.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'When you write to a school or a course office, ask short, clear questions. These beginnings are useful.' },
          { t: 'examples', items: [
            { s: '**Is there** a class on Monday? It’s a bank holiday.', n: '*Is there…?* asks if something happens or exists. A bank holiday is a public holiday in the UK.' },
            { s: '**Do I need to** bring a dictionary to the exam?', n: '*Do I need to* + verb asks if something is necessary.' },
            { s: '**When does** the next course start?', n: '*When does* + thing + verb asks about a time.' },
            { s: '**Could you tell me** the price of the course?', n: '*Could you tell me* + a thing is very polite.' },
            { s: '**Can I** change to the morning class?', n: '*Can I…?* asks if something is possible.' },
          ] },
        ],
        [
          { t: 'text', md: 'A reply often starts with thanks, gives the information, and ends with an offer of more help.' },
          { t: 'table', caption: 'Replying to a message', explain: ['head', 'col0'], head: ['What you want to do', 'What you write'], rows: [
            ['start a reply', 'Thanks for your message.'],
            ['say yes', 'Yes, of course.'],
            ['give information', 'The next course starts on 2 June.'],
            ['say no politely', 'I’m afraid there isn’t a class on that day.'],
            ['offer more help', 'If you have any more questions, please ask.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Here *I’m afraid* does not mean you are scared. It is a polite way to give bad news.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the questions and the replies.', pairs: [
            ['Is there a class on Monday?', 'I’m afraid not. The school is closed.'],
            ['When does the next course start?', 'On 2 June.'],
            ['Do I need to bring a dictionary?', 'No, you don’t. There are dictionaries in the classroom.'],
            ['Could you tell me the price of the course?', 'It’s £180 for ten weeks.'],
            ['Can I change to the morning class?', 'Yes, you can. There is a free place.'],
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the word that is wrong.', items: [
            { s: 'When [do] the course start?', why: '*The course* is one thing, so we say *When does the course start?*' },
            { s: 'Is [it] a class on Friday evening?', why: 'To ask if something happens, say *Is there a class…?*' },
            { s: 'Thanks [to] your message.', why: 'We say *Thanks for your message*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the questions and replies with one word.', items: [
            { q: 'Thanks ___ your email.', a: ['for'], why: '*Thanks for* + noun.' },
            { q: 'I’m ___ there isn’t a class on that day.', a: ['afraid'], why: '*I’m afraid* gives bad news politely.' },
            { q: '___ there a café in the school?', a: ['Is'], why: '*Is there…?* asks if something exists.' },
            { q: 'Do I need ___ bring my passport to the exam?', a: ['to'], why: '*Do I need to* + verb.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Writing to the school',
      about: 'Read an email from a learner and the reply from a language school.',
      art: 'cat',
      spreads: [
        [
          { t: 'reading', title: 'Subject: Question about the B1 course', md: 'Hello,\n\nMy name is Ewa Nowak and I’m in the A2 evening class. I’m going to finish the course in March. Is there a B1 course after that? I work in the daytime, so I need an evening class again.\n\nCould you also tell me the price? And do I need to take a test before I start?\n\nThank you,\nEwa Nowak' },
          { t: 'reading', title: 'Re: Question about the B1 course', md: 'Dear Ewa,\n\nThanks for your message. Yes, there is a B1 evening course. It starts on 14 April, and the classes are on Tuesdays and Thursdays from 7 to 9 pm. The price is the same as your A2 course.\n\nYou don’t need to take a test, because your teacher can tell us your level. I’m afraid the course is nearly full, so please enrol soon.\n\nBest wishes,\nDaniel Brooks\nCourse Office' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the emails. True, false or not given?', items: [
            { q: 'Ewa is a student in the A2 evening class.', a: 't', why: '“I’m in the A2 evening class.”' },
            { q: 'Ewa wants a morning class.', a: 'f', why: 'She works in the daytime, so she needs an evening class.' },
            { q: 'The B1 course starts in March.', a: 'f', why: 'Ewa’s A2 course finishes in March. The B1 course starts on 14 April.' },
            { q: 'The B1 course costs more than the A2 course.', a: 'f', why: '“The price is the same as your A2 course.”' },
            { q: 'Ewa likes her A2 teacher.', a: 'ng', why: 'The emails do not say what Ewa thinks of her teacher.' },
            { q: 'There are only a few free places on the B1 course.', a: 't', why: '“The course is nearly full.”' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
            { q: 'Why does Ewa write?', o: ['To ask about the next course.', 'To say she is ill.', 'To change her class time.'], why: 'She asks about a B1 course after her A2 course.' },
            { q: 'Why doesn’t Ewa need to take a test?', o: ['Her teacher can tell the school her level.', 'The course is nearly full.', 'She finishes the A2 course in March.'], why: '“You don’t need to take a test, because your teacher can tell us your level.”' },
            { q: 'Which sentence gives bad news politely?', o: ['I’m afraid the course is nearly full.', 'Thanks for your message.', 'Yes, there is a B1 evening course.'], why: '*I’m afraid* is a polite way to give bad news.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'A polite greeting to your teacher, Mr Evans: ___', o: ['Dear Mr Evans,', 'Dear Evans,', 'Hey teacher,'], why: '*Dear* + *Mr* + family name.' },
      { q: 'I’m tired, ___ I’m going to bed early.', o: ['so', 'because', 'but'], why: 'The second part is the result: *so*.' },
      { q: '___ does the exam start?', o: ['When', 'Is there', 'Do I need'], why: '*When does…?* asks about a time.' },
      { q: 'You give bad news politely: ___', o: ['I’m afraid the library is closed.', 'The library is closed, OK?', 'Library closed.'], why: '*I’m afraid…* makes bad news polite.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete with one word.', items: [
      { q: 'I can’t do the homework ___ I don’t have the book.', a: ['because'], why: 'The second part is the reason: *because*.' },
      { q: 'Do I need ___ pay before the course starts?', a: ['to'], why: '*Do I need to* + verb.' },
      { q: 'Thank you ___ your help.', a: ['for'], why: '*Thank you for* + noun.' },
      { q: '___ there a class next Monday?', a: ['Is'], why: '*Is there…?* asks if something happens.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the part of the email and the example.', pairs: [
      ['greeting', 'Hi Sarah,'],
      ['request', 'Could you send me the timetable?'],
      ['ending', 'Best wishes,'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Thanks for your message.', why: '*Thanks for* + noun.' },
      { a: 'When does the next course start?', why: '*When does* + thing + verb.' },
    ] },
  ],
};
