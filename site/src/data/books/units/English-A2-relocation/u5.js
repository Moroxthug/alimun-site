// English A2 for moving abroad, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Health',
  goal: 'Register with a doctor, make an appointment and say what is wrong.',
  art: 'teacup',
  tags: { skills: ['speaking', 'vocabulary', 'reading'], topics: ['health', 'doctor', 'appointments', 'pharmacy', 'should', 'prepositions-of-time'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'At the surgery',
      about: 'Register with a doctor’s surgery and make an appointment on the phone.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'In the UK, a family doctor is called a **GP**. The place where GPs work is a **surgery** or a **medical centre**. When you move to a new home, register with a surgery near you. You do this before you are ill, so it is easy to get help later.' },
          { t: 'text', md: 'To register, you usually fill in a form at the surgery or online. In England you do not need a passport or proof of address to register, but it can help to bring them. Registering with a GP is free.' },
          { t: 'tip', art: 'owl', md: 'In an emergency in the UK, for example when someone has a serious accident, phone *999*.' },
        ],
        [
          { t: 'dialogue', title: 'Making an appointment', lines: [
            { who: 'Receptionist', s: 'Good morning, Parkside Medical Centre. How can I help?' },
            { who: 'Mehmet', s: 'Hello. I’d like to make an appointment with a doctor, please.' },
            { who: 'Receptionist', s: 'Are you registered with us?' },
            { who: 'Mehmet', s: 'Yes, I registered last month.' },
            { who: 'Receptionist', s: 'Can I have your name and date of birth, please?' },
            { who: 'Mehmet', s: 'Mehmet Yilmaz, the twelfth of April, nineteen eighty-eight.' },
            { who: 'Receptionist', s: 'Thank you. Is it urgent?' },
            { who: 'Mehmet', s: 'No, it isn’t. I’ve got a pain in my knee.' },
            { who: 'Receptionist', s: 'The first appointment is on Tuesday at twenty past nine.' },
            { who: 'Mehmet', s: 'Have you got anything in the afternoon?' },
            { who: 'Receptionist', s: 'Yes, Tuesday at ten to four.' },
            { who: 'Mehmet', s: 'That’s great. Thank you.' },
          ] },
        ],
        [
          { t: 'text', md: 'For times and days, use **on**, **at** and **in**. Use *on* with days and dates, *at* with clock times, and *in* with parts of the day.' },
          { t: 'table', caption: 'On, at, in', quiz: true, head: ['on', 'at', 'in'], rows: [
            ['on Tuesday', 'at 9:20', 'in the morning'],
            ['on 3 May', 'at half past two', 'in the afternoon'],
            ['on Friday morning', 'at the weekend', 'in the evening'],
          ] },
          { t: 'examples', items: [
            { s: 'I’d like to **make** an appointment, please.', n: 'We say *make an appointment*, not *do an appointment*.' },
            { s: 'I need to **cancel** my appointment on Friday.', n: '*Cancel*: you cannot come, so you say it before the day.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose on, at or in.', items: [
            { q: 'The appointment is ___ Thursday.', o: ['on', 'at', 'in'], why: 'With days: *on*.' },
            { q: 'Can you come ___ quarter past ten?', o: ['at', 'on', 'in'], why: 'With clock times: *at*.' },
            { q: 'Have you got anything ___ the afternoon?', o: ['in', 'on', 'at'], why: 'With parts of the day: *in the afternoon*.' },
            { q: 'My appointment is ___ Monday morning.', o: ['on', 'in', 'at'], why: 'With a day + part of the day: *on Monday morning*.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about Mehmet’s phone call. True or false?', items: [
            { q: 'Mehmet is already registered at the surgery.', a: 't', why: '*Yes, I registered last month.*' },
            { q: 'His problem is urgent.', a: 'f', why: '*No, it isn’t.*' },
            { q: 'He takes the appointment at twenty past nine.', a: 'f', why: 'He asks for the afternoon and takes ten to four.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'I’d like to make an appointment.', why: '*I’d like to* + *make* + *an appointment*.' },
            { a: 'Have you got anything in the afternoon?', why: '*Have you got anything* + time.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'I’ve got a sore throat',
      about: 'Say what is wrong and understand simple advice at a pharmacy.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To say what is wrong, use **I’ve got** + a problem, or **My… hurts**. *I’ve got* means *I have got*.' },
          { t: 'table', caption: 'What’s wrong?', quiz: true, head: ['I’ve got…', 'My… hurts.'], rows: [
            ['I’ve got a headache.', 'My head hurts.'],
            ['I’ve got a sore throat.', 'My throat hurts.'],
            ['I’ve got backache.', 'My back hurts.'],
            ['I’ve got a stomach ache.', 'My stomach hurts.'],
          ] },
          { t: 'examples', items: [
            { s: 'I’ve got **a cold**.', n: 'A small illness: your nose is blocked and you feel tired.' },
            { s: 'I’ve got **a cough**.', n: 'You cough a lot.' },
            { s: 'I’ve got **a temperature**.', n: 'Your body is too hot. You can also say *I’ve got a fever*.' },
          ] },
        ],
        [
          { t: 'text', md: 'In the UK, a pharmacy is also called a **chemist’s**. The pharmacist can give you advice about small health problems, like a cold or a sore throat. You do not need an appointment.' },
          { t: 'dialogue', title: 'At the pharmacy', lines: [
            { who: 'Pharmacist', s: 'Hello. How can I help?' },
            { who: 'Nadia', s: 'I’ve got a sore throat and a cough.' },
            { who: 'Pharmacist', s: 'When did it start?' },
            { who: 'Nadia', s: 'Three days ago.' },
            { who: 'Pharmacist', s: 'Have you got a temperature?' },
            { who: 'Nadia', s: 'No, I haven’t.' },
            { who: 'Pharmacist', s: 'OK. You should drink a lot of water and rest. These throat sweets can help.' },
            { who: 'Nadia', s: 'Thank you. Should I see a doctor?' },
            { who: 'Pharmacist', s: 'If you don’t feel better in a week, you should call your GP.' },
          ] },
        ],
        [
          { t: 'text', md: 'Use **should** + verb to give advice. Use **shouldn’t** for something that is not a good idea. Do not add *to* after *should*.' },
          { t: 'examples', items: [
            { s: 'You **should** rest.', n: 'Good advice.' },
            { s: 'You **shouldn’t** go to work today.', n: 'Not a good idea.' },
            { s: '**Should** I see a doctor?', n: 'In a question, *should* comes first.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with should or shouldn’t.', items: [
            { q: 'You’ve got a temperature. You ___ stay in bed.', a: ['should'], why: 'Staying in bed is good advice: *should*.' },
            { q: 'Your back hurts. You ___ carry heavy bags.', a: ['shouldn’t', 'should not', "shouldn't"], why: 'Carrying heavy bags is not a good idea: *shouldn’t*.' },
            { q: 'You ___ drink a lot of water when you have a cold.', a: ['should'], why: 'Drinking water is good advice: *should*.' },
            { q: 'You’ve got a cough. You ___ smoke.', a: ['shouldn’t', 'should not', "shouldn't"], why: 'Smoking is not a good idea: *shouldn’t*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the problem and the advice.', pairs: [
            ['I’ve got a headache.', 'You should lie down in a quiet room.'],
            ['I’ve got a sore throat.', 'These throat sweets can help.'],
            ['My back hurts.', 'You shouldn’t carry heavy things.'],
            ['I’ve still got a cough after three weeks.', 'You should call your GP.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
            { q: '', o: ['I’ve got a headache.', 'I’ve got headache my.', 'I have a head hurts.'], why: '*I’ve got a headache* or *My head hurts*.' },
            { q: '', o: ['You should rest.', 'You should to rest.', 'You should resting.'], why: '*Should* + verb, with no *to*.' },
            { q: '', o: ['My stomach hurts.', 'My stomach hurt me.', 'My stomach is hurts.'], why: '*My stomach* is one thing: *hurts*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words for health problems.', items: [
            { s: 'I can’t come to work today. I’ve got a [cold] and a bad [cough].', why: 'A *cold* and a *cough* are health problems.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Your new surgery',
      about: 'Read a surgery leaflet with opening times and information for new patients.',
      art: 'owl',
      spreads: [
        [
          { t: 'reading', title: 'Parkside Medical Centre: information for patients', md: '**Opening times**\n\nMonday to Friday: 8 am to 6.30 pm. Saturday and Sunday: closed.\n\n**Appointments**\n\nTo make an appointment, phone us from 8 am or book online. An appointment is ten minutes long, so please talk about one problem only. If you cannot come, please phone us to cancel. Then another patient can have your appointment.\n\n**New patients**\n\nWelcome! Please fill in a registration form at reception or on our website. A nurse can also see you for a short health check.\n\n**When we are closed**\n\nFor urgent help, phone 111. In an emergency, phone 999.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the leaflet. True, false or not given?', items: [
            { q: 'The surgery is open on Saturdays.', a: 'f', why: '*Saturday and Sunday: closed.*' },
            { q: 'You can book an appointment online.', a: 't', why: '*Phone us from 8 am or book online.*' },
            { q: 'An appointment is twenty minutes long.', a: 'f', why: '*An appointment is ten minutes long.*' },
            { q: 'There are five doctors at the surgery.', a: 'ng', why: 'The leaflet does not say how many doctors there are.' },
            { q: 'New patients can see a nurse for a health check.', a: 't', why: '*A nurse can also see you for a short health check.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'It is Sunday and you need urgent help. It is not an emergency. What do you do?', o: ['Phone 111.', 'Phone the surgery.', 'Phone 999.'], why: 'The surgery is closed. *For urgent help, phone 111.*' },
            { q: 'Why should you only talk about one problem?', o: ['Because an appointment is only ten minutes.', 'Because the doctor is new.', 'Because the surgery closes at 8 am.'], why: '*An appointment is ten minutes long, so please talk about one problem only.*' },
            { q: 'You can’t come to your appointment. What should you do?', o: ['Phone and cancel it.', 'Book a new one online.', 'Do nothing.'], why: '*If you cannot come, please phone us to cancel.*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with words from the leaflet.', items: [
            { q: 'Please fill in a ___ form at reception. (register)', a: ['registration'], why: 'The noun is *registration*: a *registration form*.' },
            { q: 'If you cannot come, please phone us to ___.', a: ['cancel'], why: '*Cancel* an appointment: say you cannot come.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'In the UK, a family doctor is called a ___.', o: ['GP', 'chemist', 'nurse'], why: 'A *GP* is a family doctor.' },
      { q: 'The appointment is ___ half past three.', o: ['at', 'on', 'in'], why: 'With clock times: *at*.' },
      { q: 'You’ve got a cold. You ___ drink a lot of water.', o: ['should', 'shouldn’t', 'should to'], why: 'Drinking water is good advice: *should* + verb.' },
      { q: 'I’d like to ___ an appointment, please.', o: ['make', 'do', 'take'], why: 'We say *make an appointment*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'I’ve got a sore ___. It hurts when I eat.', a: ['throat'], why: '*A sore throat*: your throat hurts.' },
      { q: 'Have you got anything ___ the morning?', a: ['in'], why: '*In the morning*.' },
      { q: 'My head ___. (hurt)', a: ['hurts'], why: '*My head* is one thing: *hurts*.' },
      { q: 'You’ve got a temperature. You ___ go to work. (should / shouldn’t)', a: ['shouldn’t', 'should not', "shouldn't"], why: 'Going to work is not a good idea: *shouldn’t*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the questions and the answers.', pairs: [
      ['Is it urgent?', 'No, it isn’t.'],
      ['When did it start?', 'Two days ago.'],
      ['Are you registered with us?', 'Yes, I registered in May.'],
      ['Have you got a temperature?', 'Yes, I have.'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Should I see a doctor?', why: 'In a question, *should* comes first.' },
      { a: 'I need to cancel my appointment.', why: '*I need to* + *cancel* + *my appointment*.' },
    ] },
  ],
};
