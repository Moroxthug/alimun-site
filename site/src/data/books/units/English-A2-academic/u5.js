// English A2 for study and exams, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Speaking about yourself',
  goal: 'Talk about yourself, your plans and your opinions in simple words.',
  art: 'parrot',
  tags: { skills: ['speaking', 'grammar', 'reading'], topics: ['introductions', 'speaking-test', 'because-so', 'opinions', 'agreeing'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Tell me about yourself',
      about: 'Answer the first questions in a speaking test about you, your home and your free time.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'In many speaking tests, the examiner first asks you simple questions about yourself. Answer in a full sentence and **add one more detail**. A one-word answer is too short.' },
          { t: 'table', caption: 'Questions about you', explain: ['head'], head: ['Question', 'Too short', 'Better'], rows: [
            ['Where are you from?', 'Brazil.', 'I’m from Brazil, from a city called Recife.'],
            ['Do you work or are you a student?', 'Work.', 'I work in a hotel. I’m a receptionist.'],
            ['Who do you live with?', 'My sister.', 'I live with my sister in a small flat.'],
            ['What do you do in your free time?', 'Music.', 'I play the guitar, and I often go to concerts.'],
            ['Why are you learning English?', 'For work.', 'I’m learning English because I need it for my job.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'The first part of a speaking test', lines: [
            { who: 'Examiner', s: 'Hello. What’s your name?' },
            { who: 'Hana', s: 'My name’s Hana Sato.' },
            { who: 'Examiner', s: 'And how do you spell your surname?' },
            { who: 'Hana', s: 'S-A-T-O.' },
            { who: 'Examiner', s: 'Thank you. Where do you live, Hana?' },
            { who: 'Hana', s: 'I live in Leeds, near the city centre. I moved here two years ago.' },
            { who: 'Examiner', s: 'Do you work or are you a student?' },
            { who: 'Hana', s: 'I’m a student. I study nursing at a college.' },
            { who: 'Examiner', s: 'What do you like doing at the weekend?' },
            { who: 'Hana', s: 'Sorry, could you repeat the question, please?' },
            { who: 'Examiner', s: 'What do you like doing at the weekend?' },
            { who: 'Hana', s: 'Oh, I like cooking for my friends, and sometimes we go walking in the hills.' },
          ] },
          { t: 'tip', art: 'owl', md: 'If you do not understand a question, ask: *Sorry, could you repeat the question, please?* This is normal in a test. It is better than a wrong answer.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the questions and the answers.', pairs: [
            ['Where are you from?', 'I’m from Vietnam, from Hanoi.'],
            ['Who do you live with?', 'I live with my husband and our son.'],
            ['What do you do?', 'I’m an engineer. I work for a small company.'],
            ['What do you like doing at the weekend?', 'I like swimming and seeing my friends.'],
            ['How do you spell your surname?', 'N-G-U-Y-E-N.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best answer for a speaking test.', items: [
            { q: 'Where do you live?', o: ['I live in Cardiff, in a flat near the university.', 'Cardiff.', 'In Cardiff I am live.'], why: 'A full sentence with one more detail is the best answer.' },
            { q: 'Are you a student?', o: ['Yes, I am. I study business at a college.', 'Yes.', 'Yes, I study. Business is.'], why: 'Answer *Yes, I am*, then add a detail.' },
            { q: 'What do you do in your free time?', o: ['I often go running, and I read a lot.', 'Running.', 'I am go running often.'], why: 'Present simple: *I go*. Add one more detail with *and*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the examiner’s questions with do, does, are or is.', items: [
            { q: 'Where ___ you live?', a: ['do'], why: 'Present simple question with *you*: *do*.' },
            { q: 'What ___ your brother do?', a: ['does'], why: 'Present simple question with one person: *does*.' },
            { q: '___ you a student?', a: ['Are'], why: 'A question with *be* and *you*: *Are you…?*' },
            { q: 'What ___ your favourite subject?', a: ['is'], why: 'A question with *be* and one thing: *What is…?*' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Could you repeat the question, please?', why: '*Could you* + verb: a polite question.' },
            { a: 'How do you spell your surname?', why: '*How do you* + *spell* + the word.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'I think so, because…',
      about: 'Give your opinion with a simple reason, and agree or disagree politely.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'In a speaking test, give your **opinion** and a **reason**. Use *I think*, *I like* or *I prefer* for an opinion, and *because* for the reason. Use *so* for a result.' },
          { t: 'examples', items: [
            { s: '**I think** city life is exciting **because** there is always something to do.', n: '*I think* + opinion, *because* + reason.' },
            { s: '**I don’t think** online classes are boring.', n: 'This is more natural than *I think online classes aren’t boring*.' },
            { s: '**I prefer** studying in the morning **because** I’m not tired then.', n: '*I prefer* + *-ing* form or a noun.' },
            { s: 'My favourite subject is history, **so** I read a lot of books about the past.', n: '*So* gives the result.' },
          ] },
        ],
        [
          { t: 'text', md: 'In some tests, you talk with another candidate. Ask your partner questions too, and agree or disagree politely.' },
          { t: 'table', caption: 'Talking with a partner', explain: ['head', 'col0'], head: ['What you want to do', 'What you say'], rows: [
            ['give your opinion', 'I think…'],
            ['give a reason', '…because…'],
            ['agree', 'Yes, I agree.'],
            ['disagree politely', 'I’m not sure. I think…'],
            ['ask your partner', 'What do you think?'],
          ] },
          { t: 'tip', art: 'owl', md: 'A reason makes your answer longer and better. After *I like…* or *I don’t like…*, try to add *because…*.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the opinions and the reasons.', pairs: [
            ['I like studying in the library', 'because there are a lot of books.'],
            ['I don’t like exams', 'because I get very nervous.'],
            ['I prefer the morning class', 'because I work in the evening.'],
            ['I want to learn English', 'because I’d like to study in the UK.'],
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the word that gives a reason or a result.', items: [
            { s: 'I like my course [because] the teacher is very friendly.', why: '*Because* gives the reason.' },
            { s: 'The bus is often late, [so] I usually walk to college.', why: '*So* gives the result.' },
            { s: 'I don’t like online tests [because] my internet is slow.', why: '*Because* gives the reason.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with because or so.', items: [
            { q: 'I prefer small classes ___ I can speak more.', a: ['because'], why: 'The second part is the reason: *because*.' },
            { q: 'I love music, ___ I want to learn the piano.', a: ['so'], why: 'The second part is the result: *so*.' },
            { q: 'I study at night ___ my house is quiet then.', a: ['because'], why: 'The second part is the reason: *because*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the correct words.', items: [
            { q: 'I prefer ___ at home.', o: ['studying', 'study', 'to studying'], why: '*I prefer* + *-ing* form: *I prefer studying*.' },
            { q: 'I ___ the test is very difficult.', o: ['don’t think', 'not think', 'think not'], why: 'The negative is *I don’t think…*' },
            { q: 'Your partner gives an opinion. You agree: ___', o: ['Yes, I agree.', 'Yes, I am agree.', 'Yes, I agreeing.'], why: '*Agree* is a verb: *I agree*, not *I am agree*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Talking together',
      about: 'Read a model conversation between two candidates in a speaking test.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'Speaking practice: ways to learn English', md: '**Examiner:** Here are some ways to practise English outside class: watching films, reading books, using an app and talking to friends. Do you like these things? Talk together.\n\n**Marco:** I really like watching films in English, because I can hear real people speaking. What do you think, Priya?\n\n**Priya:** Me too, but I prefer reading books. I can stop and check new words in my dictionary. Do you like using apps?\n\n**Marco:** Not really. I think they’re a bit boring after a few days. But talking to friends is great.\n\n**Priya:** I agree. But all my friends speak my language, so it’s difficult for me.\n\n**Marco:** OK. So which is the best way for you?\n\n**Priya:** I think reading is the best way for me, because I can do it on the bus.' },
          { t: 'text', md: 'This is a good model. Marco and Priya give reasons, ask each other questions, and agree and disagree politely.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the conversation. True, false or not given?', items: [
            { q: 'Marco likes watching films in English.', a: 't', why: '“I really like watching films in English.”' },
            { q: 'Priya does not like films at all.', a: 'f', why: 'She says *Me too*, so she likes films. But she prefers reading.' },
            { q: 'Marco thinks apps are boring after some time.', a: 't', why: '“I think they’re a bit boring after a few days.”' },
            { q: 'Priya’s friends speak English with her.', a: 'f', why: '“All my friends speak my language.”' },
            { q: 'Priya has a big dictionary.', a: 'ng', why: 'She has a dictionary, but the text does not say if it is big.' },
            { q: 'For Priya, reading is the best way.', a: 't', why: '“I think reading is the best way for me.”' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
            { q: 'Why does Marco like films?', o: ['He can hear real people speaking.', 'They are cheap.', 'He watches them on the bus.'], why: '“…because I can hear real people speaking.”' },
            { q: 'Why is talking to friends difficult for Priya?', o: ['Her friends speak her language.', 'Her friends are very busy.', 'She is very shy.'], why: '“All my friends speak my language, so it’s difficult for me.”' },
            { q: 'Which line asks the partner for an opinion?', o: ['What do you think, Priya?', 'I agree.', 'Me too, but I prefer reading books.'], why: '*What do you think?* asks for your partner’s opinion.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
      { q: 'Examiner: Where are you from?', o: ['I’m from Poland, from a city called Gdańsk.', 'Poland is.', 'I am come from Poland.'], why: 'A full sentence with one more detail.' },
      { q: 'You do not understand the question. You say: ___', o: ['Sorry, could you repeat the question, please?', 'What?', 'Again.'], why: 'This is a polite way to ask again.' },
      { q: 'I prefer ___ in a group.', o: ['working', 'work', 'to working'], why: '*I prefer* + *-ing* form.' },
      { q: 'You want your partner’s opinion: ___', o: ['What do you think?', 'What are you think?', 'What do you thinking?'], why: '*What do you think?*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete with one word.', items: [
      { q: 'What ___ your sister do? She’s a nurse.', a: ['does'], why: 'Present simple question with one person: *does*.' },
      { q: 'I like this course ___ the teacher is very good.', a: ['because'], why: 'The second part is the reason: *because*.' },
      { q: 'I’m tired, ___ I’m going to stay at home tonight.', a: ['so'], why: 'The second part is the result: *so*.' },
      { q: 'Yes, I ___. That’s a good idea.', a: ['agree'], why: '*I agree* shows you have the same opinion.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the questions and the answers.', pairs: [
      ['Who do you live with?', 'With my parents and my brother.'],
      ['Are you a student?', 'Yes, I am. I study art.'],
      ['Why are you learning English?', 'Because I want to travel.'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'I think English is very useful.', why: '*I think* + opinion.' },
      { a: 'Where do you live?', why: '*Where do you* + verb.' },
    ] },
  ],
};
