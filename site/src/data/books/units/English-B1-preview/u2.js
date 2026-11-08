// English B1, unit 2, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Verb patterns (-ing or to), used to / would / be used to / get used to, jobs and applications with a cover email,
// and a reading about choosing a career.
export const UNIT = {
  id: 'u2',
  title: 'Work and study',
  goal: 'Talk about jobs and studies, say how things used to be, write a short job application email, and use the right verb pattern after common verbs.',
  art: 'mug',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing', 'speaking'], topics: ['verb-patterns', 'used-to', 'jobs', 'cv', 'applications'], goals: ['foundations', 'professional'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Enjoy doing, decide to do',
      about: 'Use the -ing form or to + infinitive after verbs, and see how stop, remember and try change their meaning.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'When one verb follows another, the second verb has a fixed form. After some verbs it is the **-ing form**: *I enjoy **cooking**.* After others it is **to + infinitive**: *I decided **to learn** Spanish.* There is no simple rule that works every time, so the best method is to learn each verb **together with its pattern**, as one block: *enjoy doing, decide to do*.\n\nThere are some helpful tendencies, though. Verbs about **plans, hopes and decisions** (looking to the future) often take **to**: *plan to, hope to, want to, decide to, promise to, agree to, manage to.* Verbs about **likes, dislikes and finishing** often take **-ing**: *enjoy, mind, finish, avoid, keep, suggest, can’t stand.*' },
          { t: 'table', caption: 'Verbs and their patterns', explain: ['head'], head: ['+ -ing', '+ to + infinitive'], rows: [
            ['enjoy working', 'decide to work'],
            ['finish writing', 'plan to write'],
            ['avoid driving', 'hope to drive'],
            ['keep trying', 'manage to try'],
            ['suggest meeting', 'agree to meet'],
            ['don’t mind waiting', 'would like to wait'],
          ] },
          { t: 'tip', art: 'owl', md: '**Like, love, hate** and **start, begin** can take both forms with almost no difference: *I love swimming / I love to swim.* But **would like** always takes **to**: *I’d like **to** swim*, never *I’d like swimming* for a wish.' },
        ],
        [
          { t: 'text', md: 'A few verbs take both forms but the **meaning changes**. These are favourite exam points, so learn them carefully.\n\n**Stop doing** = you no longer do it: *I stopped **eating** meat.* **Stop to do** = you stop one thing in order to do another: *I stopped **to eat** a sandwich* (I stopped walking because I wanted to eat).\n\n**Remember doing** = you have a memory of a past action: *I remember **meeting** her.* **Remember to do** = you do not forget a task: *Remember **to call** your mum.*\n\n**Try doing** = do it as an experiment: *Try **drinking** water if you have a headache.* **Try to do** = make an effort, maybe without success: *I tried **to open** the window, but it was stuck.*' },
          { t: 'examples', items: [
            { s: 'He **stopped smoking** last year.', n: 'He doesn’t smoke any more.' },
            { s: 'On the way home, we **stopped to buy** bread.', n: 'We stopped in order to buy bread.' },
            { s: 'I **remember visiting** this town as a child.', n: 'A memory of the past.' },
            { s: '**Remember to lock** the door when you leave.', n: 'Don’t forget this task.' },
            { s: 'I **tried to call** you, but your phone was off.', n: 'I made the effort; it didn’t work.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I enjoy to work in a team.', 'I enjoy working in a team.', '*enjoy* + -ing.'],
            ['She decided studying law.', 'She decided to study law.', '*decide* + to.'],
            ['Do you mind to wait?', 'Do you mind waiting?', '*mind* + -ing.'],
            ['I’m looking forward to meet you.', 'I’m looking forward to meeting you.', 'Here *to* is a preposition, so -ing follows.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'A new direction', lines: [
            { who: 'Laura', s: 'So, you’ve finally decided to leave the bank?' },
            { who: 'Jack', s: 'Yes. I enjoyed working with numbers, but I kept feeling bored.' },
            { who: 'Laura', s: 'What are you planning to do now?' },
            { who: 'Jack', s: 'I’ve managed to get a place on a teacher training course. I start in September.' },
            { who: 'Laura', s: 'That’s brilliant! I remember you saying you wanted to teach years ago.' },
            { who: 'Jack', s: 'Exactly. And I don’t mind earning less if I love what I do.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'Jack has decided ___ the bank.', o: ['to leave', 'leaving', 'leave'], why: '*decide* + to.' },
            { q: 'He kept ___ bored at work.', o: ['feeling', 'to feel', 'feel'], why: '*keep* + -ing.' },
            { q: 'He doesn’t mind ___ less money.', o: ['earning', 'to earn', 'earn'], why: '*mind* + -ing.' },
            { q: 'Laura remembers Jack ___ about teaching years ago.', o: ['talking', 'to talk', 'talk'], why: '*remember* + -ing: a memory of the past.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Which pattern follows each verb?', groups: ['+ -ing', '+ to'], items: [
            { s: 'avoid', g: 0, why: '*avoid doing*.' },
            { s: 'promise', g: 1, why: '*promise to do*.' },
            { s: 'suggest', g: 0, why: '*suggest doing*.' },
            { s: 'manage', g: 1, why: '*manage to do*.' },
            { s: 'can’t stand', g: 0, why: '*can’t stand doing*.' },
            { s: 'hope', g: 1, why: '*hope to do*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form: -ing or to + infinitive.', items: [
            { q: 'Remember ___ (send) me the report before Friday.', a: ['to send'], why: 'A task you must not forget: *remember to do*.' },
            { q: 'We stopped ___ (have) a coffee on the motorway.', a: ['to have'], why: 'We stopped in order to have a coffee.' },
            { q: 'If you can’t sleep, try ___ (read) a boring book.', a: ['reading'], why: 'An experiment: *try doing*.' },
            { q: 'She’s finally stopped ___ (bite) her nails.', a: ['biting'], why: 'She doesn’t do it any more: *stop doing*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'In the format of the B1 Preliminary exam (Reading, Part 6): write one word in each gap.', items: [
            { q: 'When I was at university, I decided ___ study abroad for a year.', a: ['to'], why: '*decide* + to + infinitive.' },
            { q: 'I really enjoyed ___ in a new city and meeting new people.', a: ['living', 'being', 'studying', 'working'], why: 'After *enjoy* we need an -ing form.' },
            { q: 'I’m now looking forward ___ going back one day.', a: ['to'], why: 'The fixed phrase is *look forward to* + -ing.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Reading Part 6 is an **open cloze**: a text with six gaps and no options. The missing words are usually small grammar words: *to, of, for, which, been, the*. Read the words **after** the gap: *looking forward ___ going* tells you that a preposition is missing.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'I enjoy working in a team.' },
            { a: 'Remember to lock the door when you leave.' },
            { a: 'I’m looking forward to meeting you.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'I used to…',
      about: 'Talk about past habits with used to and would, and about new situations with be used to and get used to.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'To talk about **habits or states in the past that are not true now**, use **used to + infinitive**: *I used to play football every weekend* (I don’t now). *We used to live in a flat* (now we live in a house).\n\nThe negative is **didn’t use to** (without *d*): *I didn’t use to like coffee.* The question is **Did you use to…?**: *Did you use to walk to school?*\n\nFor repeated **actions** in the past (not states), you can also use **would**, usually in stories and memories: *Every summer, my grandfather would take us fishing.* But you cannot use *would* for states: say *I used to have long hair*, not *I would have long hair*.' },
          { t: 'table', caption: 'Used to', explain: ['head'], head: ['', 'Example'], rows: [
            ['positive', 'She used to work nights.'],
            ['negative', 'She didn’t use to work nights.'],
            ['question', 'Did she use to work nights?'],
            ['would (actions only)', 'Every Sunday we would visit my aunt.'],
          ] },
          { t: 'tip', art: 'owl', md: 'For something that happened **only once**, use the past simple, not *used to*: *I went to Paris in 2019*, not *I used to go to Paris in 2019*. *Used to* needs a repeated habit or a long situation.' },
        ],
        [
          { t: 'text', md: '**Be used to + -ing / noun** is completely different. It means *something is normal and familiar for me now*: *I’m used to getting up early* (it’s not difficult for me). *She isn’t used to the cold weather* (it’s strange for her).\n\n**Get used to + -ing / noun** describes the **process** of something becoming normal: *It took me months to get used to driving on the left. You’ll soon get used to the noise.*\n\nIn both phrases *to* is a **preposition**, so it is followed by **-ing**, never by the infinitive: *I’m used to **working** late*, not *I’m used to work late*.' },
          { t: 'examples', items: [
            { s: 'I **used to live** in a village. Now I live in the city.', n: 'A past situation, not true now.' },
            { s: 'I**’m used to living** in a big city now.', n: 'It feels normal to me.' },
            { s: 'At first it was hard, but I **got used to** the noise.', n: 'It slowly became normal.' },
            { s: 'When I was a child, my dad **would read** to me every night.', n: 'A repeated action in a memory.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I use to play tennis.', 'I used to play tennis.', 'The positive form has *-d*.'],
            ['Did you used to smoke?', 'Did you use to smoke?', 'After *did*, no *-d*.'],
            ['I’m used to work at night.', 'I’m used to working at night.', 'After *be used to*, use -ing.'],
            ['I would have a dog when I was young.', 'I used to have a dog when I was young.', '*would* is not used for states.'],
          ] },
        ],
        [
          { t: 'reading', title: 'Then and now', md: 'When I started working as a nurse twenty years ago, things were very different. We used to write everything on paper, and the doctors would shout instructions across the ward. I didn’t use to have a mobile phone at work.\n\nNow everything is on a computer. At first, I found it hard to get used to typing all day, but now I’m used to it and I can type faster than my son!\n\nOne thing hasn’t changed: I still love talking to patients. That’s the part of the job I could never get used to losing.' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the text. True, false or not given?', items: [
            { q: 'The writer used to write notes on paper.', a: 't', why: '*We used to write everything on paper.*' },
            { q: 'The writer found typing easy from the start.', a: 'f', why: '*At first, I found it hard to get used to typing.*' },
            { q: 'The writer’s son is a doctor.', a: 'ng', why: 'The text says he types slowly, nothing about his job.' },
            { q: 'The writer still enjoys talking to patients.', a: 't', why: '*I still love talking to patients.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'I ___ a car, but I sold it last year.', o: ['used to have', 'would have', 'am used to having'], why: 'A past state, not true now: *used to* (not *would*, which is for actions).' },
            { q: 'She’s from Norway, so she ___ cold winters.', o: ['is used to', 'used to', 'uses to'], why: 'Cold winters are normal for her: *be used to*.' },
            { q: 'It took me a year to ___ the food here.', o: ['get used to', 'use to', 'used to'], why: 'The process of something becoming normal.' },
            { q: '___ you use to have long hair?', o: ['Did', 'Were', 'Do'], why: 'Question: *Did you use to…?*' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the words given.', items: [
            { q: 'I smoked when I was younger, but I don’t now.', cue: 'used', a: ['I used to smoke.', 'I used to smoke when I was younger.'], why: 'A past habit not true now: *used to* + infinitive.' },
            { q: 'Working at night is normal for me.', cue: 'used', a: ['I’m used to working at night.', 'I am used to working at night.'], why: '*be used to* + -ing.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Speaking, Part 1): choose the best answer.', items: [
            { q: 'Examiner: “How has your town changed since you were a child?”', o: ['It’s much busier now. There used to be fields near my house, but now there’s a shopping centre.', 'It used to change.', 'I am used to my town.'], why: 'The answer compares then and now with *used to* and adds a clear example.' },
            { q: 'Examiner: “Was it difficult to get used to your new school?”', o: ['A little, yes. At first I didn’t know anyone, but after a few weeks I made friends.', 'Yes, I got used.', 'I used to go to school.'], why: 'Answer the question, then explain how it happened.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Speaking Part 1, questions about **past and present** are very common. Show the examiner your range: use **used to** for the past and the **present simple** or **present perfect** for now in the same answer.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'I used to live in a small village.' },
            { a: 'I’m used to getting up early.' },
            { a: 'You’ll soon get used to the noise.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Applying for a job',
      about: 'Learn the words for jobs and applications, and write a short, clear email to apply for a job.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'When you look for work in English, you meet the same words again and again. A company **advertises** a **vacancy** (a job that is free). You **apply for** the job by sending your **CV** (a short document about your education and experience) and a **cover email** or letter. If they like your application, they **invite** you to an **interview**. If all goes well, they **offer** you the job, and you **accept** it.\n\nNotice the prepositions: you **apply for** a job, **to** a company. You have **experience in** or **of** something. You are **responsible for** tasks.' },
          { t: 'table', caption: 'Words for applications', explain: ['head', 'col1'], head: ['Word', 'Meaning'], rows: [
            ['a vacancy', 'a job that is free'],
            ['apply for', 'ask officially for a job'],
            ['a CV', 'a document about your studies and work'],
            ['a reference', 'a letter from an old boss about you'],
            ['full-time / part-time', 'about 40 hours a week / fewer hours'],
            ['a salary', 'money paid every month for a job'],
            ['a skill', 'something you can do well'],
          ] },
          { t: 'tip', art: 'owl', md: 'Be careful with **work** and **job**. **Work** is usually uncountable: *I’m looking for work.* **Job** is countable: *I’m looking for a job.* You cannot say *a work* for a job.' },
        ],
        [
          { t: 'text', md: 'A good application email is **short, polite and organised**. Use a clear structure:\n\nStart with **Dear Mr / Ms + surname**, or **Dear Sir or Madam** if you do not know the name.\n\nFirst paragraph: say **why you are writing**: *I am writing to apply for the position of…, which I saw advertised on…*\n\nSecond paragraph: your **experience and skills**: *I have worked as… for two years. I am good at…*\n\nLast paragraph: **finish politely**: *I look forward to hearing from you.*\n\nEnd with **Kind regards** or **Yours sincerely** and your full name.' },
          { t: 'reading', title: 'An application email', md: 'Dear Ms Grant,\n\nI am writing to apply for the part-time position of receptionist at Hillside Hotel, which I saw advertised on your website.\n\nI have worked at the front desk of a small hostel for two years, so I am used to dealing with guests from all over the world. I speak English, Spanish and some French, and I am good at solving problems calmly.\n\nI have attached my CV. I am available for an interview at any time next week.\n\nI look forward to hearing from you.\n\nKind regards,\nElena Ruiz' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I am writing to apply to the job.', 'I am writing to apply for the job.', '*apply for* a job.'],
            ['I have experience of three years.', 'I have three years’ experience.', 'The natural word order.'],
            ['I look forward to hear from you.', 'I look forward to hearing from you.', '*look forward to* + -ing.'],
            ['Hi Ms Grant!', 'Dear Ms Grant,', 'An application is formal.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the words and the meanings.', pairs: [
            ['vacancy', 'a job that nobody is doing yet'],
            ['salary', 'money you earn each month'],
            ['reference', 'a letter from a former boss'],
            ['interview', 'a meeting to see if you are right for a job'],
            ['skill', 'something you are good at'],
          ] },
          { t: 'ex', kind: 'order', h: 'Put the sentences of the email in a good order. Write each sentence in the right order of words.', items: [
            { a: 'I am writing to apply for the position of driver.', why: 'The reason for writing comes first.' },
            { a: 'I have had a driving licence for ten years.', why: 'Experience: present perfect + *for*.' },
            { a: 'I look forward to hearing from you.', why: 'The polite ending.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'These lines from emails each have one mistake. Fix it.', items: [
            { s: 'I would like to apply [to] the position of waiter.', a: ['for'], why: '*apply for* a job.' },
            { s: 'I am good [in] working with children.', a: ['at'], why: '*good at* + -ing.' },
            { s: 'I am looking for [a work] in a hotel.', a: ['work', 'a job'], why: '*work* is uncountable; say *work* or *a job*.' },
            { s: 'I look forward to [meet] you.', a: ['meeting'], why: '*look forward to* + -ing.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the most suitable words for a formal email.', items: [
            { q: '___ Sir or Madam,', o: ['Dear', 'Hi', 'Hello'], why: 'Formal: *Dear*.' },
            { q: 'I ___ my CV to this email.', o: ['have attached', 'put', 'have stuck'], why: 'The usual phrase: *I have attached my CV*.' },
            { q: '___ regards, Elena Ruiz', o: ['Kind', 'Lots of', 'Big'], why: 'A polite, standard ending.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Writing, Part 1): you answer an email from Mr Brown, the manager of a summer camp. He asks: “Why do you want to work at our camp? What experience do you have? When can you start?” Choose the best sentence for each part of your answer.', items: [
            { q: 'Why do you want to work at the camp?', o: ['I would love to work outdoors and I really enjoy spending time with children.', 'Because.', 'I want money.'], why: 'A full, polite reason with *enjoy* + -ing.' },
            { q: 'What experience do you have?', o: ['I have helped at my local sports club for two years, so I am used to organising games.', 'I have experience.', 'I am experience with children.'], why: 'Present perfect + *for*, and *be used to* + -ing: real detail.' },
            { q: 'When can you start?', o: ['I can start at the beginning of July, as soon as my exams finish.', 'Start July.', 'I can starting in July.'], why: 'A complete answer with a time and a reason.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Writing Part 1 is an **email of about 100 words**. The email you receive has **notes** or questions: you must answer **all of them**. Make a short plan first, one paragraph for each point, and check your verb patterns (*enjoy doing, look forward to hearing*).' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'I am writing to apply for the position of receptionist.' },
            { a: 'I have attached my CV.' },
            { a: 'I look forward to hearing from you.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'Two roads to a career',
      about: 'Read how two people chose their careers, and talk about your own work or study plans.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'People talk about their **career** (the jobs they do during their working life) with some typical phrases. You **study** or **train to be** something: *She trained to be a chef.* You **work as** a job: *He works as a translator.* You **work for** a company and **in** a field: *I work for a bank, in marketing.* You can **get promoted** (get a better position), **change careers**, or **become self-employed** (work for yourself).' },
          { t: 'examples', items: [
            { s: 'She **trained to be** a nurse and then **worked as** a midwife.', n: '*train to be*, *work as*.' },
            { s: 'He **works for** a car company, **in** sales.', n: '*for* the company, *in* the field.' },
            { s: 'After ten years she **got promoted** to manager.', n: 'A better position.' },
            { s: 'At forty he **changed careers** and **became self-employed**.', n: 'He now works for himself.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Two roads to a career', md: '**Omar, 34, software developer.** “At school I wasn’t interested in computers at all. I used to want to be a football player! I studied history at university, but I couldn’t find work. A friend suggested trying an online coding course, and I loved it. I’ve been working as a developer for six years now, and last year I got promoted.”\n\n**Sofia, 29, baker.** “My parents always expected me to become a lawyer, and I did: I worked for a law firm for four years. I earned a good salary, but I hated sitting in an office all day. In the end I decided to follow my real passion. I trained to be a baker, and two years ago I opened my own bakery. I work longer hours than before, but I’ve never been happier.”' },
          { t: 'ex', kind: 'choice', h: 'Read the texts. Who…?', items: [
            { q: 'Who changed careers because of a suggestion from a friend?', o: ['Omar', 'Sofia', 'Both of them'], why: '*A friend suggested trying an online coding course.*' },
            { q: 'Who now works more hours than in the past?', o: ['Sofia', 'Omar', 'Neither of them'], why: '*I work longer hours than before.*' },
            { q: 'Who is self-employed?', o: ['Sofia', 'Omar', 'Both of them'], why: 'She opened her own bakery.' },
            { q: 'Who had a different dream as a child?', o: ['Omar', 'Sofia', 'Both of them'], why: '*I used to want to be a football player.*' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['She works like a teacher.', 'She works as a teacher.', '*as* for a job; *like* means *similar to*.'],
            ['He works in Google.', 'He works for Google.', '*for* a company.'],
            ['I studied for be a doctor.', 'I studied to be a doctor.', '*to* + infinitive for a purpose.'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with as, for, in or to.', items: [
            { q: 'My sister works ___ an architect.', a: ['as'], why: 'The job: *work as*.' },
            { q: 'He has worked ___ the same company for twenty years.', a: ['for'], why: 'The company: *work for*.' },
            { q: 'I’d like to work ___ tourism.', a: ['in'], why: 'The field: *work in*.' },
            { q: 'She trained ___ be a pilot.', a: ['to'], why: '*train to be*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'build', h: 'Write the sentence. Two words do not belong.', items: [
            { a: 'I decided to change careers at thirty.', extra: ['changing', 'for'], why: '*decide* + to.' },
            { a: 'She has been working as a nurse since 2020.', extra: ['like', 'for'], why: '*work as* a job; *since* + a point in time.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'What did you use to want to be?', why: 'A question with *did* + *use to*.' },
            { a: 'I would like to work for myself one day.', why: '*would like* + to.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading, Part 2): three people are looking for a course. Choose the course that is best for each person.', items: [
            { q: 'Ana works full-time and wants to learn web design. She can only study at weekends and wants a certificate at the end.', o: ['Course C: Saturday web design, 12 weeks, certificate included.', 'Course A: evening web design, Monday to Thursday, no certificate.', 'Course B: full-time coding school, Monday to Friday, certificate included.'], why: 'Only C is at the weekend and gives a certificate.' },
            { q: 'Ben wants to change careers quickly. He has left his job and can study every day.', o: ['Course B: full-time coding school, Monday to Friday, certificate included.', 'Course C: Saturday web design, 12 weeks, certificate included.', 'Course D: one-day introduction to online marketing.'], why: 'He can study every day and wants a fast change: full-time.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Reading Part 2 has five people and eight short texts. Each person has **three needs**. Underline them (time, place, price, level…) and find the text that matches **all three**. A text that matches only two is a trap.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'I trained to be a baker and opened my own bakery.' },
            { a: 'He works for a bank, in marketing.' },
            { a: 'I’ve been working as a developer for six years.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
      { q: 'I’ve decided ___ a new job.', o: ['to look for', 'looking for', 'look for'], why: '*decide* + to.' },
      { q: 'Would you mind ___ the window?', o: ['opening', 'to open', 'open'], why: '*mind* + -ing.' },
      { q: 'I stopped ___ a photo of the view.', o: ['to take', 'taking', 'take'], why: 'I stopped in order to take a photo.' },
      { q: 'She ___ live in Paris, but now she lives in Rome.', o: ['used to', 'is used to', 'uses to'], why: 'A past situation not true now.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'I’m not used ___ working at weekends.', a: ['to'], why: '*be used to* + -ing.' },
      { q: 'I am writing to apply ___ the job of assistant.', a: ['for'], why: '*apply for* a job.' },
      { q: 'He works ___ a taxi driver.', a: ['as'], why: '*work as* + a job.' },
      { q: 'I look forward to ___ from you.', a: ['hearing'], why: '*look forward to* + -ing.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'I enjoy [to work] with people.', a: ['working'], why: '*enjoy* + -ing.' },
      { s: 'Did you [used] to have a bike?', a: ['use'], why: 'After *did*, no *-d*.' },
      { s: 'It took me months to get used to [drive] on the right.', a: ['driving'], why: '*get used to* + -ing.' },
      { s: 'She trained [for] be a teacher.', a: ['to'], why: '*train to be*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite with the word given.', items: [
      { q: 'I didn’t forget to call the bank.', cue: 'remembered', a: ['I remembered to call the bank.'], why: 'A task you did: *remember to do*.' },
      { q: 'Living alone is normal for me now.', cue: 'used', a: ['I’m used to living alone.', 'I am used to living alone.', 'I’m used to living alone now.'], why: '*be used to* + -ing.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the words and the meanings.', pairs: [
      ['apply for', 'ask officially for a job'],
      ['get promoted', 'get a better position'],
      ['self-employed', 'working for yourself'],
      ['part-time', 'fewer hours than a full week'],
    ] },
    { t: 'ex', kind: 'sort', h: 'Which pattern follows each verb?', groups: ['+ -ing', '+ to'], items: [
      { s: 'finish', g: 0, why: '*finish doing*.' },
      { s: 'agree', g: 1, why: '*agree to do*.' },
      { s: 'keep', g: 0, why: '*keep doing*.' },
      { s: 'plan', g: 1, why: '*plan to do*.' },
    ] },
  ],
};
