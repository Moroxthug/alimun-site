// English B1 for moving abroad, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Finding work',
  goal: 'Look for a job, write a short CV and get ready for an interview.',
  art: 'dog',
  tags: { skills: ['reading', 'writing', 'vocabulary', 'grammar'], topics: ['job-adverts', 'cv', 'covering-email', 'present-perfect', 'interviews'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Reading job adverts',
      about: 'The words in job adverts and what employers ask for.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Job adverts in the UK usually tell you the hours, the type of contract and the pay. Pay can be given per hour (*£13.20 per hour*) or per year (*£28,000 per annum*, often written *p.a.*).' },
          { t: 'table', caption: 'Words in job adverts', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['full-time', 'usually about 35 to 40 hours a week'],
            ['part-time', 'fewer hours than full-time'],
            ['shifts', 'working at different times, for example early, late or at night'],
            ['permanent', 'a job with no end date'],
            ['temporary', 'a job for a limited time'],
            ['p.a.', 'per annum: per year'],
            ['pro rata', 'for part-time jobs: you get part of the full-time salary'],
          ] },
          { t: 'tip', art: 'owl', md: 'In the UK, employers must check that you have the *right to work* before you start. Many adverts say: *Applicants must have the right to work in the UK.*' },
        ],
        [
          { t: 'text', md: 'Many adverts say what the employer needs. **Essential** means you must have it. **Desirable** means it is good to have, but not necessary.' },
          { t: 'reading', title: 'Warehouse team member, part-time', md: 'We are looking for a reliable person to join our busy team in Bristol. You will pick and pack orders and help with deliveries.\n\n**Hours:** 20 hours a week, early or late shifts (6 am to 2 pm or 2 pm to 10 pm), including some weekends.\n\n**Pay:** £13.20 per hour, with extra pay on Sundays.\n\n**Contract:** permanent.\n\n**Essential:** good spoken English, able to stand for long periods, the right to work in the UK.\n\n**Desirable:** a forklift licence, experience in a warehouse.\n\nTo apply, send your CV and a short covering email by 30 November.' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the advert. True, false or not given?', items: [
            { q: 'The job is full-time.', a: 'f', why: '*Part-time*, 20 hours a week.' },
            { q: 'You might work on a Saturday or a Sunday.', a: 't', why: '*Including some weekends.*' },
            { q: 'You must have a forklift licence.', a: 'f', why: 'It is *desirable*, not *essential*.' },
            { q: 'The job has no end date.', a: 't', why: '*Contract: permanent.*' },
            { q: 'Lunch is free for staff.', a: 'ng', why: 'The advert does not say anything about lunch.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word and its meaning.', pairs: [
            ['essential', 'you must have it'],
            ['desirable', 'good to have, but not necessary'],
            ['permanent', 'no end date'],
            ['temporary', 'for a limited time'],
            ['shifts', 'different working times'],
            ['p.a.', 'per year'],
          ] },
          { t: 'ex', kind: 'choice', h: 'What does it mean for you?', items: [
            { q: '£24,000 p.a. pro rata. You work half the full-time hours, so you earn ___.', o: ['£12,000 a year', '£24,000 a year', '£48,000 a year'], why: '*pro rata*: half the hours, half the salary.' },
            { q: 'The advert says “Essential: a driving licence”. You do not have one. ___', o: ['This job is probably not for you.', 'This is not important at all.', 'You must buy a car first.'], why: '*Essential* means the employer needs it.' },
            { q: 'You can only work in the evenings. You look for a job with ___.', o: ['late shifts', 'early shifts', 'a permanent contract'], why: '*Late shifts* are in the afternoon and evening.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'A short CV and a covering email',
      about: 'Write a clear CV for the UK and a short email to send with it.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'A CV in the UK is usually one or two pages. It starts with your name and contact details, then a short profile, your work experience (the most recent job first), your education and your skills. People in the UK do not usually add a photo, their date of birth or whether they are married.' },
          { t: 'reading', title: 'CV', md: '**Amira Haddad**\nManchester, 07700 900123\n\n**Profile**\nFriendly and organised receptionist with four years’ experience in hotels. Speaks Arabic, French and English.\n\n**Work experience**\n2022 to 2026: Receptionist, Hotel Mirador, Casablanca. Checked guests in and out, answered calls and emails in three languages and dealt with complaints.\n2020 to 2022: Shop assistant, a bookshop in Casablanca. Served customers and ordered new stock.\n\n**Education**\n2020: Diploma in Tourism, Casablanca\n\n**Skills**\nHotel booking software, customer service, first aid certificate' },
        ],
        [
          { t: 'text', md: 'In a CV, describe each job with **past simple** verbs and no *I*: *Checked guests in*, *Dealt with complaints*. In a profile or an email, use the **present perfect** for experience that continues up to now.' },
          { t: 'examples', items: [
            { s: 'I **have worked** as a receptionist for four years.', n: 'Present perfect + *for*: from the past up to now.' },
            { s: 'I **worked** at Hotel Mirador from 2022 to 2026.', n: 'Past simple: a finished time.' },
            { s: 'I **am responsible for** training new staff.', n: '*responsible for* + *-ing*: your duties now.' },
            { s: 'I **have** a lot of **experience in** customer service.', n: '*experience in* + an area of work.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the past simple verbs in this line from a CV.', items: [
            { s: '[Answered] the phone, [dealt] with complaints and [trained] new staff.', why: 'A CV lists what you did with past simple verbs and no *I*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences about work.', items: [
            { q: 'I ___ (work) in customer service since 2021.', a: ['have worked', '’ve worked', 'have been working', '’ve been working'], why: '*since 2021* and still true: present perfect.' },
            { q: 'In 2023 I ___ (move) to London.', a: ['moved'], why: '*In 2023* is a finished time: past simple.' },
            { q: 'At the moment I am responsible ___ the hotel’s website.', a: ['for'], why: '*responsible for* something.' },
            { q: 'I ___ (speak) three languages: Arabic, French and English.', a: ['speak'], why: 'A fact about now: present simple.' },
          ] },
          { t: 'reading', title: 'Subject: Application for receptionist (part-time)', md: 'Dear Mr Patel,\n\nI am writing to apply for the part-time receptionist job at Northgate Hotel, which I saw on your website. Please find my CV attached.\n\nI have worked as a hotel receptionist for four years, and I am used to busy check-in times and difficult questions. I speak Arabic, French and English, which is useful with international guests. I moved to Manchester in September, and I have the right to work in the UK.\n\nI am available for an interview at any time, and I could start immediately.\n\nThank you for considering my application. I look forward to hearing from you.\n\nKind regards,\nAmira Haddad' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which line is best for a CV or a covering email?', items: [
            { q: '', o: ['Please find my CV attached.', 'My CV is attached, read it if you want.', 'Here my CV.'], why: 'The usual polite phrase for an attachment.' },
            { q: '', o: ['I am available for an interview next week.', 'I can come for interview whenever, no problem.', 'I am available to interview next week, yes?'], why: 'Clear, polite and formal.' },
            { q: 'In a CV:', o: ['Dealt with customer complaints.', 'I was dealing sometimes with complaints of customers.', 'Deal with customer complaint.'], why: 'Short, past simple, no *I*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'I am writing to apply for this position.', why: 'A common first line: *I am writing to* + verb.' },
            { a: 'Thank you for considering my application.', why: '*Thank you for* + *-ing*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Two jobs and an invitation',
      about: 'Compare two job adverts and understand an email that invites you to an interview.',
      art: 'dog',
      spreads: [
        [
          { t: 'reading', title: 'Two job adverts', md: '**A. Café assistant, Sunny Corner Café, Leeds**\n\nPart-time, 16 to 24 hours a week, mainly weekends. £12.80 per hour plus tips. Temporary contract until the end of September, with the chance of a permanent job after that. No experience needed: full training given. You must be friendly, reliable and happy to start early in the morning.\n\n**B. Customer service adviser, Leeds**\n\nFull-time, 37.5 hours a week, Monday to Friday, 9 am to 5.30 pm. £25,500 per annum. Permanent contract. You will answer calls and emails from customers and solve problems with their orders. At least one year’s experience in customer service is essential. A second language is desirable. After six months, you can work from home two days a week.' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the adverts. True, false or not given?', items: [
            { q: 'Job A is full-time.', a: 'f', why: 'Job A is *part-time*, 16 to 24 hours a week.' },
            { q: 'You need experience for job A.', a: 'f', why: '*No experience needed: full training given.*' },
            { q: 'Job A could become permanent.', a: 't', why: '*With the chance of a permanent job after that.*' },
            { q: 'In job B, you work from Monday to Friday.', a: 't', why: '*Monday to Friday, 9 am to 5.30 pm.*' },
            { q: 'In job B, you can work from home from the first day.', a: 'f', why: 'Only *after six months*.' },
            { q: 'Job B has free parking.', a: 'ng', why: 'The advert does not say anything about parking.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Subject: Interview invitation', md: 'Dear Mr Oyelaran,\n\nThank you for your application for the position of customer service adviser. We were impressed by your CV, and we would like to invite you to an interview.\n\nThe interview will take place on Friday 6 November at 2 pm at our office, 21 Wellington Street, Leeds. It will last about 45 minutes. You will meet our team manager, Helen Brooks, and a member of our HR team.\n\nThere will also be a short practical task: you will reply to an email from a customer. Please bring your passport, so that we can check your right to work in the UK.\n\nCould you please reply by Monday to confirm that you can attend? If the time is not suitable, let us know, and we will try to find another time.\n\nWe look forward to meeting you.\n\nBest wishes,\nDaniel Shaw\nHR Assistant' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the invitation and choose the right answer.', items: [
            { q: 'The interview is ___.', o: ['on Friday afternoon', 'on Friday morning', 'on Monday afternoon'], why: '*Friday 6 November at 2 pm.*' },
            { q: 'In the interview there is ___.', o: ['a short writing task', 'a phone call with a customer', 'a maths test'], why: '*You will reply to an email from a customer.*' },
            { q: 'Mr Oyelaran should bring ___.', o: ['his passport', 'a photo', 'his school certificates'], why: '*Please bring your passport.*' },
            { q: 'He must reply ___.', o: ['by Monday', 'after the interview', 'on Friday'], why: '*Could you please reply by Monday…?*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete Mr Oyelaran’s reply.', items: [
            { q: 'Thank you for your email. I am happy to ___ the interview on Friday at 2 pm.', a: ['attend', 'confirm'], why: '*attend an interview*: go to it. You can also *confirm* it.' },
            { q: 'I look forward to ___ (meet) you.', a: ['meeting'], why: '*look forward to* + *-ing*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'A job with no end date is ___.', o: ['permanent', 'temporary', 'part-time'], why: '*permanent*: no end date.' },
      { q: '£30,000 p.a. means £30,000 ___.', o: ['a year', 'a month', 'a week'], why: '*p.a.* = per annum, per year.' },
      { q: '“Desirable: a second language” means ___.', o: ['a second language is good to have, but not necessary', 'you must speak a second language', 'the job is only for people who speak two languages'], why: '*Desirable*: nice to have.' },
      { q: 'I ___ in hotels for four years, and I still work in one.', o: ['have worked', 'worked', 'work'], why: '*for four years* and still true: present perfect.' },
      { q: 'A covering email should be ___.', o: ['short and polite', 'long and informal', 'written by hand'], why: 'Employers read many emails: keep it short and polite.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Please find my CV ___.', a: ['attached'], why: '*Please find … attached.*' },
      { q: 'I am writing to ___ for the job of café assistant.', a: ['apply'], why: '*apply for a job*.' },
      { q: 'I am responsible ___ training new staff.', a: ['for'], why: '*responsible for* + *-ing*.' },
      { q: 'Thank you for ___ (consider) my application.', a: ['considering'], why: '*Thank you for* + *-ing*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'I would like to apply for this job.', why: '*would like to* + verb.' },
      { a: 'Could you please confirm that you can attend?', why: '*Could you please* + verb.' },
    ] },
  ],
};
