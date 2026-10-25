// English A2 for work, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'At work',
  goal: 'Talk about your job, your workplace and your colleagues.',
  art: 'mug',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['jobs', 'workplaces', 'introductions', 'present-simple', 'routines'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'What do you do?',
      about: 'Say what your job is and where you work, and introduce a colleague.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'To say your job, use **I’m a** or **I’m an** + the job: *I’m a nurse*, *I’m an engineer*. To say where you work, use **I work in** + a place: *I work in a hospital*. To name the company, use **I work for**: *I work for a bank*.' },
          { t: 'table', caption: 'Jobs and workplaces', explain: ['head'], quiz: true, head: ['Job', 'Workplace'], rows: [
            ['a nurse', 'a hospital'],
            ['a receptionist', 'a hotel'],
            ['a chef', 'a kitchen'],
            ['a shop assistant', 'a shop'],
            ['an accountant', 'an office'],
            ['a mechanic', 'a garage'],
            ['a teacher', 'a school'],
          ] },
          { t: 'tip', art: 'owl', md: 'Do not forget *a* or *an* before a job: *She’s a doctor*, not *She’s doctor*. In the plural there is no *a*: *They’re doctors*.' },
        ],
        [
          { t: 'dialogue', title: 'A new colleague', lines: [
            { who: 'Marta', s: 'Daniel, this is Kemal. He’s our new IT assistant.' },
            { who: 'Daniel', s: 'Hello, Kemal. Nice to meet you. I’m Daniel. I’m in the sales team.' },
            { who: 'Kemal', s: 'Nice to meet you too. What do you do in the sales team?' },
            { who: 'Daniel', s: 'I talk to customers and I write offers. Where are you from, Kemal?' },
            { who: 'Kemal', s: 'I’m from Leeds. I worked in a bank there for three years.' },
            { who: 'Daniel', s: 'Welcome to the team! Ask me if you need help.' },
          ] },
          { t: 'text', md: 'To introduce a colleague, say **This is…** and add their job or team. The answer is *Nice to meet you*, and the reply to that is *Nice to meet you too*. To ask about someone’s job, say **What do you do?**' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the job and what the person does.', pairs: [
            ['A receptionist', 'answers the phone and welcomes visitors.'],
            ['A chef', 'cooks food in a restaurant.'],
            ['A mechanic', 'repairs cars.'],
            ['An accountant', 'works with money and numbers.'],
            ['A nurse', 'looks after patients.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'She’s ___ engineer.', o: ['an', 'a', 'the'], why: '*Engineer* starts with a vowel sound, so we say *an engineer*.' },
            { q: 'I work ___ a hotel in the city centre.', o: ['in', 'on', 'to'], why: '*Work in* + a place: *in a hotel*, *in an office*.' },
            { q: 'They’re ___. They work in a school.', o: ['teachers', 'a teachers', 'teacher'], why: 'More than one person: a plural job with no *a*.' },
            { q: 'A: What do you do? B: ___', o: ['I’m a shop assistant.', 'I’m fine, thanks.', 'I do my homework.'], why: '*What do you do?* is a question about your job.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the introductions.', items: [
            { q: 'Ana, ___ is my colleague, Priya.', a: ['this'], why: 'To introduce someone, say *This is…*' },
            { q: 'Hello, Priya. Nice to ___ you.', a: ['meet'], why: 'The fixed phrase is *Nice to meet you*.' },
            { q: 'Priya works ___ the marketing team.', a: ['in'], why: 'You work *in* a team or a department.' },
            { q: 'Her brother is ___ accountant.', a: ['an'], why: '*Accountant* starts with a vowel sound: *an accountant*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Nice to meet you too.', why: 'The answer to *Nice to meet you*.' },
            { a: 'She works for a small company.', why: '*Work for* + the company; the adjective *small* comes before the noun.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'My working day',
      about: 'Talk about your times and tasks at work with the present simple.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'Use the **present simple** for things you do every day or every week. With *he*, *she* and *it*, add **-s** to the verb: *I start*, *she starts*. Some verbs add **-es**: *finish → finishes*, *go → goes*. *Have* changes to *has*.' },
          { t: 'table', caption: 'Present simple', explain: ['head'], head: ['', 'I / you / we / they', 'he / she / it'], rows: [
            ['+', 'I start at nine.', 'She starts at nine.'],
            ['−', 'I don’t work on Sundays.', 'He doesn’t work on Sundays.'],
            ['?', 'Do you have a break?', 'Does she have a break?'],
          ] },
          { t: 'tip', art: 'owl', md: 'In questions and negatives with *he* or *she*, the *-s* goes on *does*, not on the verb: *Does he work…?*, *He doesn’t work…*, never *He doesn’t works*.' },
        ],
        [
          { t: 'text', md: 'Use **at** with times: *at 8.30*. Use **on** with days: *on Mondays*. Use **in** with parts of the day: *in the morning*. Use **from… to…** for the start and the end: *from nine to five*.' },
          { t: 'examples', items: [
            { s: 'I **start** work **at** half past eight.', n: '*at* + a time.' },
            { s: 'Rosa **works from** Monday **to** Friday.', n: '*from… to…*: the first and the last day.' },
            { s: 'We **have** a team meeting **on** Tuesdays.', n: '*on* + a day. *On Tuesdays* means every Tuesday.' },
            { s: 'He **answers** emails **in** the morning.', n: '*in* + *the morning*, *the afternoon*, *the evening*.' },
          ] },
          { t: 'table', caption: 'Tasks at work', explain: ['head'], quiz: true, head: ['Verb', 'Task'], rows: [
            ['answer', 'emails'],
            ['make', 'phone calls'],
            ['write', 'reports'],
            ['meet', 'customers'],
            ['have', 'a break'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the present simple.', items: [
            { q: 'Ali ___ (start) work at seven o’clock.', a: ['starts'], why: '*He* form: add *-s*.' },
            { q: 'I ___ (not work) on Saturdays.', a: ['don’t work', 'do not work'], why: 'Negative with *I*: *don’t* + verb.' },
            { q: '___ she have lunch in the canteen?', a: ['Does'], why: 'Question with *she*: *Does* + subject + verb.' },
            { q: 'Our manager ___ (finish) at six.', a: ['finishes'], why: 'Verbs that end in *-sh* add *-es*: *finishes*.' },
            { q: 'Jun ___ (go) to the office by bus.', a: ['goes'], why: '*Go* adds *-es* with *he*: *goes*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose at, on, in or from.', items: [
            { q: 'The shop opens ___ 9 am.', o: ['at', 'on', 'in'], why: '*at* + a time.' },
            { q: 'I don’t work ___ Sundays.', o: ['on', 'at', 'in'], why: '*on* + a day.' },
            { q: 'She answers emails ___ the morning.', o: ['in', 'on', 'at'], why: '*in the morning*.' },
            { q: 'The office is open ___ Monday to Friday.', o: ['from', 'at', 'on'], why: '*from… to…*: the first day and the last day.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Nadia’s day', md: 'Nadia is a receptionist at a hotel in Bristol. She starts work at seven in the morning and finishes at three in the afternoon. She answers the phone, welcomes guests and checks emails. She has a break at eleven. She doesn’t work on Wednesdays.' },
          { t: 'ex', kind: 'tf', h: 'Read about Nadia. True or false?', items: [
            { q: 'Nadia works in a hotel.', a: 't', why: '*She is a receptionist at a hotel.*' },
            { q: 'She finishes work at seven.', a: 'f', why: 'She *starts* at seven and finishes at three.' },
            { q: 'She has a break at eleven.', a: 't', why: '*She has a break at eleven.*' },
            { q: 'She works every day.', a: 'f', why: '*She doesn’t work on Wednesdays.*' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'What time do you start work?', why: 'Question word + *do* + *you* + verb.' },
            { a: 'Does your sister work in a hospital?', why: '*Does* + subject + verb with no *-s*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Meet the team',
      about: 'Read a short staff profile from a company newsletter.',
      art: 'cat',
      spreads: [
        [
          { t: 'reading', title: 'Meet the team: Grace Owusu', md: 'Grace is the office manager at Greenway Design, a small company in Manchester. She started here four years ago. Before that, she worked in a hotel.\n\nGrace usually arrives at the office at half past eight. She opens the post, answers emails and plans meetings for the team. She also orders things for the office, like paper and coffee. In the afternoon she often helps new colleagues with their computers and passwords.\n\n“I like my job because every day is different,” Grace says. “My colleagues are friendly, and they always say thank you.”\n\nGrace works from Monday to Thursday. On Fridays she is at home with her two children. In her free time she plays the guitar and goes swimming.\n\nDo you have a question for Grace? Her office is on the first floor, next to the kitchen.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the profile again. True, false or not given?', items: [
            { q: 'Grace worked in a hotel before this job.', a: 't', why: '*Before that, she worked in a hotel.*' },
            { q: 'She arrives at the office at eight o’clock.', a: 'f', why: 'She arrives at *half past eight*.' },
            { q: 'She orders coffee for the office.', a: 't', why: '*She also orders things for the office, like paper and coffee.*' },
            { q: 'She helps new colleagues in the morning.', a: 'f', why: 'She helps them *in the afternoon*.' },
            { q: 'Grace works on Fridays.', a: 'f', why: 'She works *from Monday to Thursday*.' },
            { q: 'Grace’s children go to school near the office.', a: 'ng', why: 'The profile does not say where her children go to school.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Why does Grace like her job?', o: ['Every day is different.', 'The office is near her home.', 'She only works in the morning.'], why: '*I like my job because every day is different.*' },
            { q: 'What does Grace do in her free time?', o: ['She plays the guitar and goes swimming.', 'She plays football.', 'She helps colleagues with computers.'], why: 'The fourth paragraph talks about her free time.' },
            { q: 'Where is Grace’s office?', o: ['On the first floor, next to the kitchen.', 'On the ground floor, next to the kitchen.', 'At home.'], why: 'The last sentence says where her office is.' },
          ] },
          { t: 'tip', art: 'owl', md: 'A staff profile uses the **present simple** for the job now (*She opens the post*) and the **past simple** for the past (*She started here four years ago*).' },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'He’s ___ mechanic.', o: ['a', 'an', 'the'], why: '*Mechanic* starts with a consonant sound: *a mechanic*.' },
      { q: 'A: ___ B: I’m a nurse.', o: ['What do you do?', 'How do you do?', 'Where do you work?'], why: '*What do you do?* asks about the job.' },
      { q: 'My sister ___ in a bank.', o: ['works', 'work', 'is work'], why: '*She* form of the present simple: *works*.' },
      { q: 'We have a meeting ___ Mondays.', o: ['on', 'in', 'at'], why: '*on* + a day.' },
      { q: 'A: Paul, this is Mia. B: ___', o: ['Nice to meet you.', 'Nice to see you again.', 'You’re welcome.'], why: 'When you meet someone for the first time: *Nice to meet you*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'I work ___ a small software company.', a: ['for', 'at'], why: '*Work for* + the company. *Work at* is also possible.' },
      { q: 'She ___ (finish) work at half past five.', a: ['finishes'], why: '*-sh* + *-es* with *she*.' },
      { q: '___ your manager work on Saturdays?', a: ['Does'], why: 'Question with *he* or *she*: *Does*.' },
      { q: 'I start work ___ eight o’clock.', a: ['at'], why: '*at* + a time.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'This is my colleague from Spain.', why: '*This is* + the person.' },
      { a: 'Does she have lunch in the canteen?', why: '*Does* + *she* + verb.' },
      { a: 'Where does your brother work?', why: 'Question word + *does* + subject + verb.' },
    ] },
  ],
};
