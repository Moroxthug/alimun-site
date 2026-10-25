// English A2 for work, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Applying for a job',
  goal: 'Understand job adverts and answer simple interview questions.',
  art: 'suitcase',
  tags: { skills: ['reading', 'vocabulary', 'speaking', 'writing'], topics: ['job-adverts', 'cv', 'job-interview', 'past-simple'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Reading a job advert',
      about: 'Understand the important words in a job advert.',
      art: 'dog',
      spreads: [
        [
          { t: 'reading', title: 'Receptionist (full-time)', md: '**Hillside Medical Centre, Cardiff**\n\nWe are looking for a friendly receptionist to join our team.\n\nHours: Monday to Friday, 8 am to 4.30 pm\n\nThe job: you answer the phone, book appointments for patients and welcome them at the front desk.\n\nYou need good computer skills, good English and one year’s experience or more with customers.\n\nTo apply, send your CV and a short email to jobs@example.com.' },
          { t: 'text', md: 'A **full-time** job is all week, usually about 35 to 40 hours. A **part-time** job is fewer hours. **Experience** is work you did before. **Skills** are things you can do well. To **apply** for a job means to ask for it in writing.' },
        ],
        [
          { t: 'table', caption: 'Words in job adverts', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['full-time', 'work all week, usually 35 to 40 hours'],
            ['part-time', 'work only some hours or days'],
            ['experience', 'work you did before'],
            ['skills', 'things you can do well'],
            ['salary', 'the money you get for a job'],
            ['apply', 'ask for a job in writing'],
            ['shifts', 'times of work, for example early or late'],
          ] },
          { t: 'tip', art: 'owl', md: '*Experience* for work is uncountable: *two years’ experience*, *experience with customers*. Do not write *experiences* for work.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the advert again. Choose the right answer.', items: [
            { q: 'How many days a week does the receptionist work?', o: ['Five', 'Four', 'Six'], why: '*Monday to Friday* is five days.' },
            { q: 'What do you need for the job?', o: ['Experience with customers', 'A driving licence', 'A university degree'], why: '*One year’s experience or more with customers.*' },
            { q: 'How do you apply?', o: ['Send a CV and an email.', 'Call the centre.', 'Visit the centre on Monday.'], why: '*Send your CV and a short email.*' },
            { q: 'Is the job full-time?', o: ['Yes, it is.', 'No, it’s part-time.', 'No, it’s only at weekends.'], why: 'The title says *full-time*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the job and the information.', pairs: [
            ['a full-time job', '40 hours a week'],
            ['a part-time job', '15 hours a week'],
            ['a temporary job', 'for three months only'],
            ['a permanent job', 'with no end date'],
            ['a weekend job', 'Saturdays and Sundays'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the advert.', items: [
            { q: 'She works 20 hours a week. It’s a ___ job.', a: ['part-time', 'part time'], why: 'Only some hours: *part-time*.' },
            { q: 'I have three years’ ___ in a hotel.', a: ['experience'], why: '*Experience*: work you did before. It has no plural here.' },
            { q: 'To ___ for this job, send your CV.', a: ['apply'], why: '*Apply for* a job.' },
            { q: 'Good computer ___ are important for this job.', a: ['skills'], why: '*Skills*: things you can do well.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Tell me about yourself',
      about: 'Read a simple CV and give short answers in an interview.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'CV: Lucía Romero', md: 'Lucía Romero\n14 Elm Street, Cardiff\nlucia.romero@example.com\n\n**Profile:** Friendly and organised receptionist with two years’ experience in a hotel.\n\n**Work experience**\n2024 to now: Receptionist, Bayview Hotel, Cardiff\n2021 to 2024: Shop assistant, a bookshop in Seville, Spain\n\n**Education**\n2020: Certificate in Tourism, Seville\n\n**Skills:** Spanish (first language), English, computers, working with customers' },
          { t: 'text', md: 'In the UK, a CV is usually one or two pages. It has your contact details, your work experience with the newest job first, your education and your skills. Many people in the UK do not put a photo or their date of birth on a CV.' },
        ],
        [
          { t: 'dialogue', title: 'The interview', lines: [
            { who: 'Interviewer', s: 'So, Lucía, can you tell me about yourself?' },
            { who: 'Lucía', s: 'Yes, of course. I’m from Spain, and I live in Cardiff now. I work as a receptionist in a hotel.' },
            { who: 'Interviewer', s: 'When did you start there?' },
            { who: 'Lucía', s: 'In 2024. Before that, I worked in a bookshop in Seville.' },
            { who: 'Interviewer', s: 'What do you do in your job now?' },
            { who: 'Lucía', s: 'I check guests in and out, I answer the phone and I help guests with problems.' },
            { who: 'Interviewer', s: 'Why do you want this job?' },
            { who: 'Lucía', s: 'I like working with people, and I want to work in health care.' },
            { who: 'Interviewer', s: 'What are your strengths?' },
            { who: 'Lucía', s: 'I’m friendly and organised, and I stay calm when it’s busy.' },
            { who: 'Interviewer', s: 'Great. Do you have any questions for us?' },
            { who: 'Lucía', s: 'Yes. When does the job start?' },
          ] },
          { t: 'tip', art: 'owl', md: 'Give short, full answers. Use the **present simple** for your job now (*I work…*) and the **past simple** for old jobs (*I worked…*). At the end, ask one question.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'Can you tell me about yourself?', o: ['I’m from Brazil, and I work in a café.', 'Yes, I can.', 'I’m fine, thank you.'], why: 'Say where you are from and what you do.' },
            { q: 'What are your strengths?', o: ['I’m hard-working and good with people.', 'I go to the gym.', 'I’m thirty years old.'], why: 'Strengths are good things about you as a worker.' },
            { q: 'Your CV says: 2019 to 2022: waiter. You say:', o: ['I worked as a waiter from 2019 to 2022.', 'I work as a waiter from 2019 to 2022.', 'I am a waiter from 2019 to 2022.'], why: 'This job is finished: past simple, *worked*.' },
            { q: 'In a UK CV, the first job in the list is usually:', o: ['your newest job', 'your oldest job', 'your favourite job'], why: 'The newest job comes first.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Read Lucía’s CV again. True or false?', items: [
            { q: 'Lucía has two jobs on her CV.', a: 't', why: 'Receptionist and shop assistant.' },
            { q: 'Lucía studied in Cardiff.', a: 'f', why: 'Her certificate is from *Seville*.' },
            { q: 'Lucía’s first language is English.', a: 'f', why: 'Her first language is *Spanish*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the answers.', items: [
            { q: 'I ___ (work) in a shop from 2018 to 2020.', a: ['worked'], why: 'A finished job: past simple.' },
            { q: 'Now I ___ (work) as a receptionist.', a: ['work'], why: 'Your job now: present simple.' },
            { q: 'I’m good ___ working with customers.', a: ['at'], why: '*Good at* + *-ing* or a noun.' },
            { q: 'I can ___ two languages: Polish and English.', a: ['speak'], why: 'We *speak* a language.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'I like working with people.', why: '*Like* + *-ing*.' },
            { a: 'Why do you want this job?', why: 'Question word + *do* + *you* + verb.' },
            { a: 'When does the job start?', why: 'A good question to ask at the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Adverts and an invitation',
      about: 'Compare two job adverts and read an invitation to an interview.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'reading', title: 'Café assistant (part-time)', md: 'A busy café in Leeds city centre.\n\nWeekends only: Saturday and Sunday, 9 am to 5 pm. You make coffee, serve customers and keep the café clean.\n\nNo experience needed: we give you training.\n\nCall Ellie on 0113 496 0921.' },
          { t: 'reading', title: 'Warehouse team member (full-time)', md: 'Northgate Logistics, near Leeds.\n\nMonday to Friday, early or late shifts. You need a driving licence and one year’s experience in a warehouse.\n\nFree parking and a staff restaurant.\n\nApply online with your CV.' },
        ],
        [
          { t: 'reading', title: 'Subject: Interview invitation', md: 'Dear Mr Mensah,\n\nThank you for your application for the job of warehouse team member. We would like to invite you to an interview on Tuesday 17 November at 11 am.\n\nThe interview takes about thirty minutes. Please bring your passport or another photo ID.\n\nPlease reply to this email to confirm the time. If the time is not good for you, call me on 0113 496 0388.\n\nKind regards,\nRachel Stone\nHR Assistant, Northgate Logistics' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the adverts and the email. True, false or not given?', items: [
            { q: 'The café job is from Monday to Friday.', a: 'f', why: 'It is *weekends only*.' },
            { q: 'You need experience for the café job.', a: 'f', why: '*No experience needed.*' },
            { q: 'For the warehouse job, you need a driving licence.', a: 't', why: '*You need a driving licence.*' },
            { q: 'The warehouse job pays more than the café job.', a: 'ng', why: 'The adverts do not give the salary.' },
            { q: 'Mr Mensah applied for the café job.', a: 'f', why: 'He applied for the *warehouse* job.' },
            { q: 'The interview is about half an hour.', a: 't', why: '*About thirty minutes.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Which job is good for a student with lessons from Monday to Friday?', o: ['the café job', 'the warehouse job', 'both jobs'], why: 'The café job is only at the weekend.' },
            { q: 'How do you apply for the café job?', o: ['Call Ellie.', 'Apply online.', 'Send a letter.'], why: '*Call Ellie on…*' },
            { q: 'What must Mr Mensah bring to the interview?', o: ['A photo ID', 'His driving licence', 'A letter from his manager'], why: '*Please bring your passport or another photo ID.*' },
          ] },
          { t: 'ex', kind: 'order', h: 'Mr Mensah writes a reply. Put the words in order.', items: [
            { a: 'Thank you for inviting me to an interview.', why: '*Thank you for* + *-ing*.' },
            { a: 'I look forward to meeting you.', why: '*Look forward to* + *-ing*: a polite last line.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'A job with 16 hours a week is ___.', o: ['part-time', 'full-time', 'overtime'], why: 'Only some hours: *part-time*.' },
      { q: 'I have five years’ ___ as a cook.', o: ['experience', 'experiences', 'an experience'], why: 'Work *experience* is uncountable.' },
      { q: 'From 2020 to 2023 I ___ in a factory.', o: ['worked', 'work', 'am working'], why: 'A finished job: past simple.' },
      { q: 'What are your strengths? B: ___', o: ['I’m organised and I learn quickly.', 'I work in an office.', 'I’m from Ghana.'], why: 'Strengths are good things about you as a worker.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'I’d like to ___ for the job of receptionist.', a: ['apply'], why: '*Apply for* a job.' },
      { q: 'I’m good ___ working in a team.', a: ['at'], why: '*Good at* + *-ing*.' },
      { q: 'The money you get for a job is your ___.', a: ['salary', 'pay', 'wage'], why: '*Salary*: the money for a job.' },
      { q: 'You need good computer ___ for this job.', a: ['skills'], why: '*Skills*: things you can do well.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the interview question and the answer.', pairs: [
      ['Can you tell me about yourself?', 'I’m from Poland, and I’m a nurse.'],
      ['Why do you want this job?', 'Because I love working with children.'],
      ['When can you start?', 'Next month.'],
      ['Do you have any questions?', 'Yes. What are the hours?'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Thank you for your application.', why: '*Thank you for* + the thing.' },
      { a: 'What do you do in your job?', why: 'Question word + *do* + *you* + verb.' },
    ] },
  ],
};
