// English B1 for work, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Job interviews',
  goal: 'Prepare for an interview and talk about your experience and strengths.',
  art: 'suitcase',
  tags: { skills: ['grammar', 'speaking', 'reading', 'vocabulary'], topics: ['present-perfect', 'past-simple', 'job-interview', 'strengths'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Your experience',
      about: 'Talk about your experience and achievements with the present perfect and the past simple.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'In an interview you talk a lot about your experience. Use the **present perfect** for experience up to now, when you do not say a finished time. Use the **past simple** for a finished time or a job you do not do any more.' },
          { t: 'examples', items: [
            { s: 'I**’ve worked** in customer service **for** five years.', n: 'Present perfect + *for* + a period: I started five years ago and I still do it.' },
            { s: 'I**’ve been** a team leader **since** 2023.', n: 'Present perfect + *since* + the start: from 2023 until now.' },
            { s: 'I **worked** at a hotel **from** 2018 **to** 2021.', n: 'Past simple: a finished job.' },
            { s: 'Last year I **led** a team of six people.', n: '*Last year* is a finished time, so we use the past simple.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Do not use the present perfect with a finished time. Not *I have finished my degree in 2020*, but *I finished my degree in 2020*.' },
        ],
        [
          { t: 'table', caption: 'Verbs for achievements', explain: ['head'], quiz: true, head: ['Verb', 'Example'], rows: [
            ['manage', 'I managed a team of eight.'],
            ['lead (led)', 'I led a project for a new client.'],
            ['improve', 'I improved our online booking system.'],
            ['increase', 'We increased sales by ten per cent.'],
            ['reduce', 'I reduced the time we needed for each order.'],
            ['organise', 'I organised a training day for new staff.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Interviewers like a **real example with a result**: *I organised the move to a new office, and we finished a week early.*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'I ___ in marketing for four years now.', o: ['have worked', 'worked', 'work'], why: '*For four years now*: from the past until today, so present perfect.' },
            { q: 'In 2020 I ___ my degree in Lisbon.', o: ['finished', 'have finished', 'finish'], why: '*In 2020* is a finished time: past simple.' },
            { q: 'How long ___ you worked for your current company?', o: ['have', 'did', 'are'], why: '*How long have you…?* asks about a period up to now.' },
            { q: 'I ___ to London three years ago.', o: ['moved', 'have moved', 'move'], why: '*Ago* always goes with the past simple.' },
            { q: 'I’ve been a team leader ___ 2023.', o: ['since', 'for', 'from'], why: '*Since* + the starting point; *for* + a period of time.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the present perfect or the past simple.', items: [
            { q: 'I ___ (manage) a small shop before I joined this company.', a: ['managed'], why: 'A finished job before this one: past simple.' },
            { q: 'She ___ (work) here since March.', a: ['has worked', '’s worked'], why: '*Since March*: up to now, so present perfect.' },
            { q: 'Last year we ___ (increase) our sales by ten per cent.', a: ['increased'], why: '*Last year* is a finished time: past simple.' },
            { q: 'I ___ (never / use) this software, but I learn quickly.', a: ['have never used', '’ve never used'], why: 'Experience up to now, with *never*: present perfect.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words that show a finished time.', items: [
            { s: 'I joined the company [two] [years] [ago], and I’ve been in this team since May.', why: '*Two years ago* is finished. *Since May* goes up to now.' },
            { s: 'I’ve worked with many clients, and [last] [month] I won a big contract.', why: '*Last month* is finished, so *won* is past simple.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Questions and answers',
      about: 'Answer typical interview questions well and ask your own questions.',
      art: 'cat',
      spreads: [
        [
          { t: 'dialogue', title: 'An interview for a project coordinator', lines: [
            { who: 'Ms Adeyemi', s: 'Thanks for coming in today. Could you tell me a little about yourself?' },
            { who: 'Lucas', s: 'Of course. I’ve worked in event planning for five years. At the moment I organise conferences for a travel company.' },
            { who: 'Ms Adeyemi', s: 'Why do you want to leave your current job?' },
            { who: 'Lucas', s: 'I enjoy my job, but I’m looking for more responsibility. I’d like to manage bigger projects.' },
            { who: 'Ms Adeyemi', s: 'What would you say is your main strength?' },
            { who: 'Lucas', s: 'I’m very organised. For example, last year I planned a conference for 400 people, and everything was ready two days early.' },
            { who: 'Ms Adeyemi', s: 'And a weakness?' },
            { who: 'Lucas', s: 'I sometimes find it hard to say no to extra work. Now I plan my week carefully, so I know what I have time for.' },
            { who: 'Ms Adeyemi', s: 'Good. Do you have any questions for us?' },
            { who: 'Lucas', s: 'Yes. What would a typical day look like in this role?' },
          ] },
        ],
        [
          { t: 'text', md: 'Good answers are **short and specific**: say what you did and what the result was. Talk about a weakness honestly and say what you do about it. Never talk badly about your current or last employer.' },
          { t: 'table', caption: 'Typical interview questions', explain: ['head', 'col1'], head: ['Question', 'What they want to know'], rows: [
            ['Could you tell me a little about yourself?', 'your work experience, in one or two minutes'],
            ['Why do you want this job?', 'what you know about the job and why it interests you'],
            ['What are your main strengths?', 'what you do well, with an example'],
            ['Where do you see yourself in five years?', 'your plans, and if you will stay with the company'],
          ] },
          { t: 'tip', art: 'owl', md: 'At the end, the interviewer usually asks *Do you have any questions?* Always have one or two ready, for example *How would you describe the team?* or *What are the next steps?*' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the question and the best answer.', pairs: [
            ['Why do you want this job?', 'I’d like to use my languages and work with international clients.'],
            ['What is your main strength?', 'I’m good with people. My customers often ask for me by name.'],
            ['How long have you worked in sales?', 'For about six years.'],
            ['Why did you leave your last job?', 'The company closed its office in my city.'],
            ['Do you have any questions for us?', 'Yes. What are the next steps?'],
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about Lucas’s interview. True or false?', items: [
            { q: 'Lucas has worked in event planning for five years.', a: 't', why: '*I’ve worked in event planning for five years.*' },
            { q: 'Lucas wants to leave because he doesn’t like his job.', a: 'f', why: 'He says *I enjoy my job*. He wants more responsibility.' },
            { q: 'Lucas gives an example of his main strength.', a: 't', why: 'He talks about the conference for 400 people.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer for an interview.', items: [
            { q: 'What is your biggest weakness?', o: ['I sometimes take on too much, so now I plan my week carefully.', 'I don’t have any weaknesses.', 'My last boss was terrible.'], why: 'Be honest and say what you do about it.' },
            { q: 'Which question shows interest in the job?', o: ['How would you describe the team?', 'Do I have to work hard?', 'Can I go home early on Fridays?'], why: 'Ask about the work and the people, not about doing less.' },
            { q: 'I’m looking for a new job because I’d like ___ bigger projects.', o: ['to manage', 'managing', 'manage'], why: '*I’d like* + *to* + verb.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Could you tell me about yourself?', why: '*Could you tell me about…?* is a polite question.' },
            { a: 'What are the next steps?', why: 'A good question to ask at the end of an interview.' },
            { a: 'I’m looking for more responsibility.', why: '*Look for* + noun.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: interview tips',
      about: 'Read tips for a job interview and an example of a good answer.',
      art: 'croissant',
      spreads: [
        [
          { t: 'reading', title: 'Getting ready for an interview', md: 'An interview is much easier when you have prepared well. Here are some ideas that can help.\n\nBefore the day, read the company’s website carefully. Find out what they do, who their customers are and what news they have shared recently. Then read the job advert again and think of an example from your experience for each thing they ask for.\n\nPractise your answers out loud, perhaps with a friend. It feels strange at first, but it helps you to sound natural. Don’t learn your answers by heart: just remember a few key points.\n\nOn the day, plan your journey and arrive about ten minutes early. For an online interview, test your camera and microphone an hour before, and choose a quiet room with a plain background.\n\nIn the interview, listen carefully to each question. If you don’t understand, it is fine to say: ‘Sorry, could you repeat the question?’ Keep your answers short, and talk about results when you can.\n\nFinally, after the interview, send a short email to thank the interviewer for their time. It is polite, and it helps them to remember you.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the tips. True, false or not given?', items: [
            { q: 'You should find out about the company before the interview.', a: 't', why: '*Read the company’s website carefully.*' },
            { q: 'The writer says you should learn your answers by heart.', a: 'f', why: '*Don’t learn your answers by heart.*' },
            { q: 'For an online interview, you should test your camera before it starts.', a: 't', why: '*Test your camera and microphone an hour before.*' },
            { q: 'Most interviews last about an hour.', a: 'ng', why: 'The text does not say how long interviews last.' },
            { q: 'It is rude to ask the interviewer to repeat a question.', a: 'f', why: '*It is fine to say: Sorry, could you repeat the question?*' },
            { q: 'The writer suggests an email after the interview.', a: 't', why: '*Send a short email to thank the interviewer.*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'Read the job ___ again and think of examples.', a: ['advert', 'advertisement', 'ad'], why: 'A *job advert* describes the job and the person they want.' },
            { q: 'Plan your journey and arrive about ten minutes ___.', a: ['early'], why: '*Early* = before the planned time.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'A good example answer', lines: [
            { who: 'Interviewer', s: 'Can you tell me about a problem you solved at work?' },
            { who: 'Amara', s: 'Yes. Last year, our biggest customer was unhappy because our deliveries were often late.' },
            { who: 'Interviewer', s: 'What did you do?' },
            { who: 'Amara', s: 'I looked at our delivery plans and found the problem: we only had one driver on Mondays. I suggested a second driver for that day.' },
            { who: 'Interviewer', s: 'And what was the result?' },
            { who: 'Amara', s: 'Late deliveries went down a lot, and the customer signed a new contract with us.' },
          ] },
          { t: 'text', md: 'A good example answer has three parts: the **situation**, what **you did**, and the **result**. Tell it in the past simple.' },
          { t: 'ex', kind: 'choice', h: 'Think about Amara’s answer.', items: [
            { q: 'What was the problem?', o: ['Deliveries were often late.', 'The driver was ill.', 'The customer wanted lower prices.'], why: '*Our deliveries were often late.*' },
            { q: 'What did Amara suggest?', o: ['A second driver on Mondays.', 'A new customer.', 'Fewer deliveries.'], why: '*I suggested a second driver for that day.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'I ___ here since 2021.', o: ['have worked', 'worked', 'work'], why: '*Since 2021*: up to now, so present perfect.' },
      { q: 'I ___ my first job in 2015.', o: ['started', 'have started', 'start'], why: '*In 2015* is a finished time: past simple.' },
      { q: 'How long ___ you been a nurse?', o: ['have', 'did', 'are'], why: '*How long have you been…?*' },
      { q: 'The best answer to ‘What is your main strength?’', o: ['I’m very organised. For example, I plan all our team events.', 'I’m perfect at everything.', 'I don’t know.'], why: 'Name a strength and give an example.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'I’ve worked in IT ___ six years.', a: ['for'], why: '*For* + a period of time.' },
      { q: 'Two years ago I ___ (lead) a team of five.', a: ['led'], why: '*Ago*: past simple. *Lead* is irregular: *led*.' },
      { q: 'We ___ (reduce) our costs last year.', a: ['reduced'], why: '*Last year*: past simple.' },
      { q: 'Do you have any questions ___ us?', a: ['for'], why: '*Questions for someone*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Why do you want this job?', why: 'Question word + *do* + subject + verb.' },
      { a: 'How would you describe the team?', why: 'A good question to ask the interviewer.' },
    ] },
    { t: 'ex', kind: 'spot', h: 'Tap the words that show a finished time.', items: [
      { s: 'I finished my degree [three] [years] [ago].', why: '*Three years ago*: a finished time, so past simple.' },
      { s: 'I’ve lived here since 2020, but I started this job [last] [spring].', why: '*Last spring* is finished. *Since 2020* goes up to now.' },
    ] },
  ],
};
