// English A2 for moving abroad, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Arriving',
  goal: 'Answer questions on arrival, spell your name and fill in a simple form.',
  art: 'suitcase',
  tags: { skills: ['speaking', 'vocabulary', 'reading', 'writing'], topics: ['personal-details', 'spelling', 'dates', 'nationalities', 'forms', 'polite-questions'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Who are you?',
      about: 'Give your personal details at a counter: name, spelling, date of birth, nationality and address.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'dialogue', title: 'At passport control', lines: [
            { who: 'Officer', s: 'Good morning. Can I see your passport, please?' },
            { who: 'Amira', s: 'Yes, here you are.' },
            { who: 'Officer', s: 'Where are you travelling from today?' },
            { who: 'Amira', s: 'From Cairo.' },
            { who: 'Officer', s: 'And why are you coming to the UK?' },
            { who: 'Amira', s: 'For work. I’m a nurse, and I’ve got a job at a hospital.' },
            { who: 'Officer', s: 'How long are you staying?' },
            { who: 'Amira', s: 'For two years.' },
            { who: 'Officer', s: 'And where are you going to live?' },
            { who: 'Amira', s: 'In Leeds. I’ve got the address here.' },
            { who: 'Officer', s: 'Thank you. Welcome to the UK.' },
          ] },
          { t: 'text', md: 'At a counter, the questions are usually short. Your answers can be short too: *From Cairo.*, *For two years.*, *In Leeds.* You do not need a full sentence every time.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the questions and the answers.', pairs: [
            ['What’s your surname?', 'It’s Haddad.'],
            ['Where are you travelling from?', 'From Cairo.'],
            ['How long are you staying?', 'For two years.'],
            ['What’s your date of birth?', 'The third of May, 1995.'],
            ['Where are you going to live?', 'In Leeds.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the nationality.', items: [
            { q: 'Marta is from Poland. She’s ___.', o: ['Polish', 'Poland', 'Polandish'], why: 'The country is *Poland*. The nationality is *Polish*.' },
            { q: 'Kenji is from Japan. He’s ___.', o: ['Japanese', 'Japan', 'Japanish'], why: 'The country is *Japan*. The nationality is *Japanese*.' },
            { q: 'Lucas is from Brazil. He’s ___.', o: ['Brazilian', 'Brazil', 'Brazilish'], why: 'The country is *Brazil*. The nationality is *Brazilian*.' },
            { q: 'Amira is from Egypt. She’s ___.', o: ['Egyptian', 'Egypt', 'Egyptish'], why: 'The country is *Egypt*. The nationality is *Egyptian*.' },
          ] },
        ],
        [
          { t: 'text', md: 'People often ask you to **spell** your name. Some letters sound very similar in English, so practise them. For two of the same letter, say **double**: *H-A-double D-A-D*. In the UK, the last letter is *zed*.' },
          { t: 'table', caption: 'Letters that are easy to mix up', explain: ['head'], quiz: true, head: ['Letter', 'Sounds like'], rows: [
            ['A', 'day'],
            ['E', 'see'],
            ['I', 'my'],
            ['G', 'gee, like the start of jeans'],
            ['J', 'jay'],
            ['R', 'are'],
            ['Y', 'why'],
            ['W', 'double U'],
          ] },
          { t: 'dialogue', title: 'At the hotel reception', lines: [
            { who: 'Receptionist', s: 'Good evening. Can I have your name, please?' },
            { who: 'Amira', s: 'Amira Haddad.' },
            { who: 'Receptionist', s: 'Could you spell your surname, please?' },
            { who: 'Amira', s: 'Yes. H-A-double D-A-D.' },
            { who: 'Receptionist', s: 'Thank you. And what’s your date of birth?' },
            { who: 'Amira', s: 'The third of May, nineteen ninety-five.' },
            { who: 'Receptionist', s: 'And your nationality?' },
            { who: 'Amira', s: 'I’m Egyptian.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Saying dates', explain: ['head'], quiz: true, head: ['Written', 'Said'], rows: [
            ['1 March', 'the first of March'],
            ['2 June', 'the second of June'],
            ['3 May', 'the third of May'],
            ['21 October', 'the twenty-first of October'],
            ['1995', 'nineteen ninety-five'],
            ['2004', 'two thousand and four'],
          ] },
          { t: 'tip', art: 'owl', md: 'In the UK, the day comes first: *03/05/1995* is the third of May. In the US, the month comes first, so the same date means the fifth of March.' },
          { t: 'ex', kind: 'gap', h: 'Write the date in words.', items: [
            { q: 'My birthday is on the ___ of May. (3)', a: ['third', '3rd'], why: '3 is *third*: *the third of May*.' },
            { q: 'I arrived on the ___ of June. (2)', a: ['second', '2nd'], why: '2 is *second*: *the second of June*.' },
            { q: 'My job starts on the ___ of October. (21)', a: ['twenty-first', 'twenty first', '21st'], why: '21 is *twenty-first*. Only the last part changes: *twenty-first*, *twenty-second*, *twenty-third*.' },
            { q: 'The form says 04/07/1990. My birthday is the fourth of ___.', a: ['July'], why: 'In the UK, the day comes first and then the month: 04/07 is the fourth of July.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Filling in a form',
      about: 'Understand the words on a form and ask for help politely with Could you…?',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'In your first weeks you fill in a lot of forms: at the bank, at the doctor’s, at work. Most forms ask for the same details. *Surname*, *family name* and *last name* mean the same.' },
          { t: 'table', caption: 'Words on a form', explain: ['head'], quiz: true, head: ['On the form', 'Example'], rows: [
            ['Title', 'Mr'],
            ['First name', 'Daniel'],
            ['Surname', 'Okafor'],
            ['Date of birth', '14/08/1990'],
            ['Nationality', 'Nigerian'],
            ['Address', '22 Park Road, Bristol'],
            ['Postcode', 'BS6 5QT'],
          ] },
          { t: 'text', md: 'A title goes before the surname: *Mr* for a man, *Mrs* for a married woman, *Miss* for a woman who is not married, *Ms* for any woman. Many forms also have *Mx*, a title that does not show if you are a man or a woman. A UK **postcode** has letters and numbers, for example *LS2 7HY*. It comes at the end of the address.' },
        ],
        [
          { t: 'text', md: 'When you need help at a counter, ask with **Could you…?** It is a little more polite than *Can you…?* Use **Could I…?** when you want something for you. After *could*, use the verb without *to*.' },
          { t: 'examples', items: [
            { s: '**Could you** spell that, please?', n: 'You ask the other person to do something.' },
            { s: '**Could you** say that again, please?', n: 'Useful when you do not understand.' },
            { s: '**Could you** speak more slowly, please?', n: 'Very useful in your first weeks.' },
            { s: '**Could I** borrow a pen, please?', n: 'You ask for something for you.' },
          ] },
          { t: 'dialogue', title: 'At the library', lines: [
            { who: 'Assistant', s: 'Hello. Can I help you?' },
            { who: 'Daniel', s: 'Yes. Could I get a library card, please?' },
            { who: 'Assistant', s: 'Of course. Could you fill in this form?' },
            { who: 'Daniel', s: 'Sure. Sorry, what does “postcode” mean?' },
            { who: 'Assistant', s: 'It’s the letters and numbers at the end of your address.' },
            { who: 'Daniel', s: 'Ah, OK. Could I borrow a pen?' },
            { who: 'Assistant', s: 'Here you are.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the words on the form and Daniel’s answers.', pairs: [
            ['First name', 'Daniel'],
            ['Surname', 'Okafor'],
            ['Date of birth', '14/08/1990'],
            ['Nationality', 'Nigerian'],
            ['Postcode', 'BS6 5QT'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the polite questions.', items: [
            { q: 'Could you ___ your surname, please? (spell)', a: ['spell'], why: 'After *could you*, use the verb without *to*: *Could you spell…?*' },
            { q: 'Could I ___ a pen, please?', a: ['borrow', 'have', 'use', 'get'], why: '*Could I borrow / have / use…?* asks for something for you.' },
            { q: 'Could you speak more ___, please?', a: ['slowly'], why: '*Speak more slowly* asks the person to speak at a slower speed.' },
            { q: 'Could you say that ___, please?', a: ['again'], why: '*Say that again* asks the person to repeat.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Could you spell your first name?', why: '*Could* + *you* + verb + the rest.' },
            { a: 'Could I have a form?', why: '*Could* + *I* + *have* + the thing you want.' },
            { a: 'What is your date of birth?', why: '*What* + *is* + *your date of birth*.' },
            { a: 'Could you write your postcode here?', why: '*Could you* + *write* + what + where.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the correct one.', items: [
            { q: '', o: ['Could you help me, please?', 'Could you to help me, please?', 'Could you helping me, please?'], why: 'After *could*, use the verb without *to*: *Could you help me?*' },
            { q: '', o: ['My surname is Romero.', 'My surname are Romero.', 'My surname Romero.'], why: 'One surname: *is*.' },
            { q: '', o: ['Ms Romero', 'Ms Lucía', 'Mrs Lucía'], why: 'A title goes before the surname, not the first name.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Joining a sports centre',
      about: 'Read a registration form and a welcome email.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'New member registration', md: 'Title: Ms\n\nFirst name: Lucía\n\nSurname: Romero\n\nDate of birth: 09/11/1993\n\nNationality: Spanish\n\nAddress: Flat 4, 18 Mill Street, Manchester\n\nPostcode: M4 6JE\n\nPhone: 07700 900432\n\nStart date: Monday 2 October' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the form. True, false or not given?', items: [
            { q: 'Lucía is Spanish.', a: 't', why: 'The form says *Nationality: Spanish*.' },
            { q: 'Lucía lives in Leeds.', a: 'f', why: 'Her address is in Manchester.' },
            { q: 'Her birthday is in November.', a: 't', why: 'In the UK, 09/11 is the ninth of November: the day comes first.' },
            { q: 'Lucía is married.', a: 'ng', why: '*Ms* is for any woman, so the form does not tell us.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Welcome to Riverside Sports Centre', md: 'Dear Lucía,\n\nWelcome to Riverside Sports Centre, and thank you for your registration. Your membership starts on Monday 2 October.\n\nPlease come to the reception desk on your first visit. Bring your passport or another ID with a photo, and we will give you your membership card. Reception is open from 7 am to 9 pm, Monday to Saturday.\n\nOn your first day, you can also book a free tour of the centre with one of our trainers. Just ask at reception.\n\nAre any of your details wrong? Then please reply to this email and we will change them.\n\nBest wishes,\nOwen Price\nMembership team' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the email. True, false or not given?', items: [
            { q: 'Lucía gets her membership card at reception.', a: 't', why: '*We will give you your membership card* at the reception desk.' },
            { q: 'Reception is open on Sundays.', a: 'f', why: 'It is open *Monday to Saturday*.' },
            { q: 'The tour of the centre is free.', a: 't', why: '*You can also book a free tour.*' },
            { q: 'Owen is a trainer.', a: 'ng', why: 'Owen works in the membership team. The email does not say if he is a trainer.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'What must Lucía bring on her first visit?', o: ['A passport or another ID with a photo.', 'A photo of her flat.', 'Her membership card.'], why: '*Bring your passport or another ID with a photo.*' },
            { q: 'Her phone number on the form is wrong. What can she do?', o: ['Reply to the email.', 'Fill in a new form at home.', 'Phone a trainer.'], why: '*Are any of your details wrong? Then please reply to this email.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the words that are on a form.', items: [
            { s: 'Please write your [surname] and your [postcode] in the boxes.', why: '*Surname* and *postcode* are details you write on a form.' },
            { s: 'The receptionist asked for my [nationality] and my [address].', why: '*Nationality* and *address* are details on most forms.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with words from the texts.', items: [
            { q: 'Thank you for your ___. (register)', a: ['registration'], why: 'The noun is *registration*: you register, and then your registration is done.' },
            { q: 'Please come to the reception ___ on your first visit.', a: ['desk'], why: 'The *reception desk* is where you speak to the staff when you arrive.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'How long are you staying? ___', o: ['For six months.', 'From Lisbon.', 'In Bristol.'], why: '*How long* asks about time: *For six months*.' },
      { q: 'Paulo is from Portugal. He’s ___.', o: ['Portuguese', 'Portugal', 'Portugish'], why: 'The nationality is *Portuguese*.' },
      { q: 'In the UK, 05/06/1998 is the fifth of ___.', o: ['June', 'May', 'August'], why: 'In the UK the day comes first, then the month: 06 is June.' },
      { q: '*Ms* is a title for ___.', o: ['any woman', 'a man', 'a child'], why: '*Ms* is for any woman, married or not.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Could you ___ that again, please?', a: ['say'], why: '*Could you say that again?* asks someone to repeat.' },
      { q: 'My surname is Kelly: K-E-double ___-Y.', a: ['L'], why: 'Kelly has two Ls: *double L*.' },
      { q: 'I start work on the ___ of September. (1)', a: ['first', '1st'], why: '1 is *first*: *the first of September*.' },
      { q: 'Could I ___ a pen, please?', a: ['borrow', 'have', 'use', 'get'], why: '*Could I borrow / have / use…?* asks for something for you.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the words on the form and the answers.', pairs: [
      ['Surname', 'Chen'],
      ['Postcode', 'G41 3HT'],
      ['Date of birth', '30/01/1987'],
      ['Nationality', 'Chinese'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Could you spell your surname?', why: '*Could you* + verb + the rest.' },
      { a: 'Where are you going to live?', why: '*Where* + *are you going to* + verb.' },
    ] },
  ],
};
