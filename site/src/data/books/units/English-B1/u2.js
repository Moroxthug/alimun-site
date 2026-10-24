// English B1, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Work and study',
  goal: 'Talk about jobs, studies and how things used to be.',
  art: 'mug',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['verb-patterns', 'used-to', 'jobs', 'cv'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Enjoy doing, decide to do',
      about: 'Use the -ing form or to + infinitive after verbs.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'When one verb follows another, the second verb has a fixed form. After some verbs it is the **-ing form**. After others it is **to + infinitive**. There is no simple rule, so learn each verb with its pattern.' },
          { t: 'table', caption: 'Verb patterns', explain: ['head'], quiz: true, head: ['Verb + -ing', 'Verb + to + infinitive'], rows: [
            ['enjoy working', 'decide to work'],
            ['finish studying', 'hope to study'],
            ['avoid driving', 'plan to drive'],
            ['mind waiting', 'agree to wait'],
            ['suggest meeting', 'offer to meet'],
            ['keep trying', 'manage to finish'],
          ] },
          { t: 'examples', items: [
            { s: 'I **enjoy working** with people.', n: '*Enjoy* is followed by the -ing form.' },
            { s: 'She **decided to study** law.', n: '*Decide* is followed by *to* + infinitive.' },
            { s: 'Would you **mind waiting** a moment?', n: 'A polite request. *Mind* is followed by the -ing form.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Some verbs, such as *start*, *begin*, *like*, *love* and *hate*, can take both forms with almost no change in meaning: *I started working* or *I started to work*.' },
        ],
        [
          { t: 'text', md: 'After a **preposition**, such as *in*, *at*, *of*, *about*, *before* or *without*, always use the -ing form.' },
          { t: 'text', md: '*Stop* changes its meaning. **Stop doing** means you do not do it any more. **Stop to do** means you stop one activity so that you can do another.' },
          { t: 'examples', items: [
            { s: 'I’m interested **in working** abroad.', n: '*In* is a preposition, so *working*.' },
            { s: 'Read the contract **before signing** it.', n: '*Before* is a preposition here, so *signing*.' },
            { s: 'I **stopped working** at the café in May.', n: 'I do not work there now.' },
            { s: 'On the way home I **stopped to buy** some bread.', n: 'I stopped walking so that I could buy bread.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'Have you finished ___ the report?', o: ['writing', 'to write', 'write'], why: '*Finish* is followed by the -ing form.' },
            { q: 'We can’t afford ___ a new car this year.', o: ['to buy', 'buying', 'buy'], why: '*Afford* is followed by *to* + infinitive.' },
            { q: 'My manager suggested ___ the meeting to Friday.', o: ['moving', 'to move', 'move'], why: '*Suggest* is followed by the -ing form. *Suggested to move* is a common mistake.' },
            { q: 'I’m thinking of ___ a course in web design.', o: ['taking', 'to take', 'take'], why: '*Of* is a preposition, so the -ing form.' },
            { q: 'They agreed ___ me a higher salary.', o: ['to pay', 'paying', 'pay'], why: '*Agree* is followed by *to* + infinitive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the -ing form or to + infinitive of the verb in brackets.', items: [
            { q: 'She has decided ___ (leave) her job in December.', a: ['to leave'], why: '*Decide* + *to* + infinitive.' },
            { q: 'I really enjoy ___ (work) in a small team.', a: ['working'], why: '*Enjoy* + -ing form.' },
            { q: 'He’s very good at ___ (explain) difficult ideas.', a: ['explaining'], why: 'After the preposition *at*, use the -ing form.' },
            { q: 'We hope ___ (finish) the project by June.', a: ['to finish'], why: '*Hope* + *to* + infinitive.' },
            { q: 'Try to avoid ___ (send) work emails late at night.', a: ['sending'], why: '*Avoid* + -ing form.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Stop doing or stop to do? Choose the correct form.', items: [
            { q: 'I was tired, so I stopped ___ a coffee.', o: ['to get', 'getting', 'get'], why: 'I stopped what I was doing so that I could get a coffee: *stop to do*.' },
            { q: 'My doctor told me to stop ___ so much sugar.', o: ['eating', 'to eat', 'eat'], why: 'She wants me not to do it any more: *stop doing*.' },
            { q: 'Halfway up the hill we stopped ___ at the view.', o: ['to look', 'looking', 'look'], why: 'We stopped walking so that we could look: *stop to do*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap every verb that is followed by to + infinitive.', items: [
            { s: 'Last year I [decided] to change jobs. I [hoped] to find something closer to home.', why: '*Decide* and *hope* are followed by *to* + infinitive. In *closer to home*, *to* is a preposition.' },
            { s: 'After a lot of interviews, I [managed] to get an offer, and I [agreed] to start in March.', why: '*Manage* and *agree* are followed by *to* + infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'I used to…',
      about: 'Talk about past habits with used to and would, and say what is normal for you with be used to.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Use **used to** + infinitive for habits and states in the past that are not true now.' },
          { t: 'table', caption: 'Used to', explain: ['head', 'col0'], quiz: true, head: ['', 'Positive', 'Negative', 'Question'], rows: [
            ['all persons', 'I used to work', 'I didn’t use to work', 'Did you use to work?'],
          ] },
          { t: 'examples', items: [
            { s: 'I **used to live** in a shared flat.', n: 'I lived there for some time, but I do not live there now.' },
            { s: 'He **didn’t use to like** his job, but now he loves it.', n: 'In the negative, write *use to*, without *-d*.' },
            { s: '**Did** you **use to** walk to school?', n: 'In questions: *Did* + subject + *use to*.' },
          ] },
        ],
        [
          { t: 'text', md: '**Would** + infinitive can also describe repeated actions in the past, often in stories. It is not used for states, such as *be*, *have*, *live* or *like*.' },
          { t: 'examples', items: [
            { s: 'Every summer we **would visit** my grandmother.', n: 'A repeated action, so *would* and *used to* are both correct.' },
            { s: 'I **used to have** long hair.', n: 'A state, so only *used to*. *I would have long hair* is wrong here.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the correct form. Sometimes only used to is possible.', items: [
            { q: 'When I was a student, I ___ a bike.', o: ['used to have', 'would have', 'use to have'], why: '*Have* is a state here, so only *used to*.' },
            { q: 'Every Saturday my father ___ us pancakes.', o: ['would make', 'would made', 'use to make'], why: 'A repeated action, so *would* is possible. After *would*, use the infinitive.' },
            { q: 'We ___ live in a village before we moved to the city.', o: ['used to', 'would', 'are used to'], why: '*Live* is a state, so *used to*, not *would*.' },
            { q: '___ you use to work at the weekend?', o: ['Did', 'Do', 'Were'], why: 'Questions about past habits: *Did* + subject + *use to*.' },
          ] },
        ],
        [
          { t: 'text', md: '**Be used to** + -ing form or a noun means something is normal for you. It is not new or strange any more. **Get used to** means it slowly becomes normal.' },
          { t: 'examples', items: [
            { s: 'I**’m used to getting** up early. I’ve done it for years.', n: 'It is normal for me now.' },
            { s: 'She **isn’t used to** the cold yet.', n: 'Here *used to* is followed by a noun.' },
            { s: 'You’ll soon **get used to** the new system.', n: 'It will become normal for you.' },
          ] },
          { t: 'tip', art: 'owl', md: '*I used to work nights* means I did it in the past, but not now. *I’m used to working nights* means it is normal for me. Look for the verb *be*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Used to, be used to or get used to? Choose the correct form.', items: [
            { q: 'I’ve lived in London for ten years, so I ___ the traffic.', o: ['am used to', 'used to', 'use to'], why: 'The traffic is normal for me now: *be used to* + noun.' },
            { q: 'At first the job was hard, but I slowly ___ used to it.', o: ['got', 'was', 'did'], why: '*Get used to*: it became normal over time.' },
            { q: 'She isn’t used to ___ in English all day.', o: ['speaking', 'speak', 'spoke'], why: 'After *be used to*, use the -ing form.' },
            { q: 'I ___ smoke, but I gave up five years ago.', o: ['used to', 'am used to', 'was used to'], why: 'A past habit that stopped: *used to* + infinitive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences. Use the words in brackets.', items: [
            { q: 'I ___ (not / use to) like vegetables, but now I eat them every day.', a: ['didn’t use to', 'did not use to'], why: 'Negative of *used to*: *didn’t use to*, without *-d*.' },
            { q: 'Nurses are used to ___ (work) at night.', a: ['working'], why: 'After *be used to*, use the -ing form.' },
            { q: 'My grandparents ___ (use to / live) on a farm.', a: ['used to live'], why: 'A past state that is not true now: *used to* + infinitive.' },
            { q: 'Don’t worry, you’ll soon get used to ___ (wear) a uniform.', a: ['wearing'], why: 'After *get used to*, use the -ing form.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Did you use to play the piano?', why: 'Question: *Did* + subject + *use to* + infinitive.' },
            { a: 'He isn’t used to the cold weather.', why: '*Be used to* + noun: the cold is not normal for him.' },
            { a: 'My grandfather used to be a teacher.', why: 'A past state: *used to* + *be*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Applying for a job',
      about: 'Words for jobs and studies, and how to write a short cover email.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'These words are useful when you look for a job or a course. Learn the whole phrase, not only the main word.' },
          { t: 'table', caption: 'Work and study', explain: ['head', 'col1'], quiz: true, head: ['Word or phrase', 'Meaning'], rows: [
            ['apply for a job', 'ask for a job, usually in writing'],
            ['a CV', 'a short document about your education and work'],
            ['a cover email', 'a short message that you send with your CV'],
            ['qualifications', 'the exams and courses you have passed'],
            ['experience', 'the work you have done before'],
            ['a salary', 'the money you earn every month or year'],
            ['full-time / part-time', 'working all the normal hours / only some of them'],
            ['a degree', 'what you get when you finish university'],
            ['a deadline', 'the last day or time to do something'],
            ['be responsible for', 'have the job of doing or looking after something'],
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'Watch the prepositions: *apply for* a job, *be responsible for* a team, have *experience in* sales, be *interested in* a course. In British English we say *CV*. In American English people often say *résumé*.' },
          { t: 'ex', kind: 'match', h: 'Match the words and their meanings.', pairs: [
            ['a deadline', 'the last day to do something'],
            ['a salary', 'the money you earn for your job'],
            ['a degree', 'what you get after university'],
            ['an interview', 'a meeting where an employer asks you questions'],
            ['a colleague', 'a person you work with'],
            ['qualifications', 'exams and courses you have passed'],
          ] },
        ],
        [
          { t: 'reading', title: 'A cover email', md: 'Dear Ms Okafor,\n\nI am writing to apply for the position of part-time receptionist, which I saw on your website. Please find my CV attached.\n\nI have two years’ experience in customer service. At the moment I work in a hotel in Leeds, where I am responsible for checking guests in and answering the phone. I enjoy working with people, and I am used to dealing with problems quickly and calmly.\n\nI am also studying for a degree in business in the evenings, so a part-time job would suit me well. I am available for an interview at any time next week.\n\nI look forward to hearing from you.\n\nYours sincerely,\n\nTomasz Nowak' },
          { t: 'text', md: 'A cover email is short and polite. Say which job you are applying for, give one or two reasons why you are right for it, and finish with a polite sentence. Start with *Dear Mr…* or *Dear Ms…* and end with *Yours sincerely* when you know the name. When you do not know the name, use *Dear Sir or Madam* and *Yours faithfully*.' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about Tomasz’s email. True or false?', items: [
            { q: 'Tomasz wants a full-time job.', a: 'f', why: 'He is applying for a part-time job.' },
            { q: 'Tomasz has worked in customer service before.', a: 't', why: 'He has two years’ experience in customer service.' },
            { q: 'Tomasz studies during the day.', a: 'f', why: 'He studies in the evenings.' },
            { q: 'Tomasz sent his CV with the email.', a: 't', why: '“Please find my CV attached.”' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best phrase for a formal email.', items: [
            { q: 'I ___ to apply for the job of sales assistant.', o: ['am writing', 'write', 'am wanting'], why: 'The usual way to begin: *I am writing to…*' },
            { q: 'I look forward to ___ from you.', o: ['hearing', 'hear', 'heard'], why: 'Here *to* is a preposition, so the -ing form follows.' },
            { q: 'You began the email with “Dear Mr Patel”. How do you end it?', o: ['Yours sincerely', 'Yours faithfully', 'See you soon'], why: 'You know his name, so *Yours sincerely*. *See you soon* is too informal.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete each sentence with a word from the lesson. The first letter is given.', items: [
            { q: 'She has a ___ (d) in engineering from a university in Lagos.', a: ['degree'], why: 'You get a *degree* when you finish university.' },
            { q: 'I work ___ (p): just three mornings a week.', a: ['part-time', 'part time'], why: 'Only some of the normal hours: *part-time*.' },
            { q: 'The job pays a good ___ (s), and there are 25 days of holiday.', a: ['salary'], why: 'The money you earn for a job is your *salary*.' },
            { q: 'Please send your application before the ___ (d): Friday at 5 p.m.', a: ['deadline'], why: 'The last day or time to do something is the *deadline*.' },
            { q: 'Have you got any ___ (e) of working with children?', a: ['experience'], why: '*Experience*: work you have done before.' },
            { q: 'In my last job I was ___ (r) for training new staff.', a: ['responsible'], why: '*Be responsible for*: have the job of doing something.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Two roads to a career',
      about: 'Read how two people chose their careers and check the details.',
      art: 'dog',
      spreads: [
        [
          { t: 'reading', title: 'Two roads to a career', md: '**Amara, nurse**\n\nWhen I was at school, I used to want to be a lawyer. My parents hoped I would study law, and I agreed to try. But after one year at university, I realised I didn’t enjoy reading long documents all day. I missed working with people, so I decided to change to nursing. It was a difficult time, because I had to start again and pay for an extra year of study. Now I’ve worked in a children’s hospital for six years, and I’ve never regretted it. The shifts are long, but I’m used to them.\n\n**Kenji, bike shop owner**\n\nI never had a plan. After school I got a job in a bike shop, because I needed money. I used to repair bikes for my friends at the weekend, so the work was easy for me. The owner taught me a lot, and when he retired, he offered to sell me the shop. I was only twenty-four, and I was afraid of losing everything. In the end, I borrowed some money from my aunt and said yes. Today I have three employees, and we have started building our own bikes. My advice? Don’t worry if you don’t know what you want at eighteen.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Amara’s parents wanted her to study law.', a: 't', why: 'Her parents hoped she would study law.' },
            { q: 'Amara finished her law degree.', a: 'f', why: 'After one year she changed to nursing.' },
            { q: 'Amara finds the long shifts difficult now.', a: 'f', why: 'She says she is used to them.' },
            { q: 'Kenji bought the shop from its owner.', a: 't', why: 'The owner offered to sell it, and Kenji said yes.' },
            { q: 'Kenji’s aunt works in the shop.', a: 'ng', why: 'She lent him money, but the text does not say if she works there.' },
            { q: 'Kenji’s shop only repairs bikes.', a: 'f', why: 'They have started building their own bikes.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'Why did Amara change her studies?', o: ['She wanted to work with people.', 'Law was too expensive.', 'Her parents told her to change.'], why: '“I missed working with people.”' },
            { q: 'What was Kenji afraid of?', o: ['Losing everything.', 'Working with bikes.', 'Asking his aunt for help.'], why: '“I was afraid of losing everything.”' },
            { q: '“I’m used to them.” What does Amara mean?', o: ['The long shifts are normal for her now.', 'She worked long shifts in the past, but not now.', 'She would like longer shifts.'], why: '*Be used to*: something is normal for you.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'I’m not very good at ___ in public.', o: ['speaking', 'to speak', 'speak'], why: 'After the preposition *at*, use the -ing form.' },
      { q: 'She refused ___ the contract.', o: ['to sign', 'signing', 'sign'], why: '*Refuse* + *to* + infinitive.' },
      { q: 'I ___ to work by bus, but now I cycle.', o: ['used to go', 'am used to going', 'use to go'], why: 'A past habit that is not true now: *used to* + infinitive.' },
      { q: 'The ___ for this course is 10 May, so apply soon.', o: ['deadline', 'salary', 'degree'], why: 'The last day to apply is the *deadline*.' },
      { q: 'I’m writing to apply ___ the job of office assistant.', o: ['for', 'to', 'at'], why: 'We *apply for* a job.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete with the correct form of the verb in brackets.', items: [
      { q: 'We were hungry, so we stopped ___ (have) lunch.', a: ['to have'], why: 'We stopped driving so that we could have lunch: *stop to do*.' },
      { q: 'He’s used to ___ (work) long hours.', a: ['working'], why: '*Be used to* + -ing form.' },
      { q: 'Would you mind ___ (close) the window?', a: ['closing'], why: '*Mind* + -ing form.' },
      { q: 'They hope ___ (move) abroad next year.', a: ['to move'], why: '*Hope* + *to* + infinitive.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'I didn’t use to like my job.', why: 'Negative: *didn’t use to* + infinitive.' },
      { a: 'She enjoys working with children.', why: '*Enjoy* + -ing form.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
      { q: '', o: ['I’m used to living alone.', 'I’m used to live alone.', 'I use to living alone.'], why: '*Be used to* + -ing form.' },
      { q: '', o: ['He decided to look for a new job.', 'He decided looking for a new job.', 'He decided look for a new job.'], why: '*Decide* + *to* + infinitive.' },
      { q: '', o: ['I look forward to hearing from you.', 'I look forward to hear from you.', 'I look forward hearing from you.'], why: '*Look forward to* + -ing form.' },
    ] },
  ],
};
