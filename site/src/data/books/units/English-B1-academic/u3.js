// English B1 for study and exams, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Writing to teachers and offices',
  goal: 'Write polite, clear emails to teachers and offices: ask for an extension or a meeting and give your reasons.',
  art: 'mug',
  tags: { skills: ['writing', 'grammar', 'reading'], topics: ['formal-email', 'polite-requests', 'giving-reasons', 'extensions'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Asking for an extension or a meeting',
      about: 'The parts of a formal email to a lecturer.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'Emails to lecturers and university offices are usually **formal and short**. Say who you are, why you are writing and what you would like, and give a reason. Lecturers get many emails, so a clear subject line helps.' },
          { t: 'table', caption: 'A formal email, part by part', explain: ['head', 'col0'], head: ['Part', 'Example'], rows: [
            ['Subject line', 'Extension request: History essay'],
            ['Greeting', 'Dear Dr Mensah,'],
            ['Why you are writing', 'I am writing to ask if I could have a short extension.'],
            ['Reason', 'Unfortunately, I have been ill for the past week.'],
            ['Request', 'Would it be possible to hand it in on Wednesday instead?'],
            ['Closing line', 'Thank you for considering my request.'],
            ['Sign-off and name', 'Kind regards, Tomasz Nowak (BA History, Year 2)'],
          ] },
        ],
        [
          { t: 'reading', title: 'Subject: Extension request: Modern History essay', md: 'Dear Dr Mensah,\n\nI am writing to ask if I could have a short extension for my essay for the Modern History module, which is due on Friday 14 November.\n\nUnfortunately, I have been ill for the past week and I have not been able to work on it. I can send you a note from my doctor if necessary.\n\nWould it be possible to hand it in on Wednesday 19 November instead?\n\nThank you for considering my request.\n\nKind regards,\nTomasz Nowak\nBA History, Year 2' },
          { t: 'tip', art: 'owl', md: 'Use the title your lecturer uses: *Dr*, *Professor*, *Ms* or *Mr* + surname. If they sign their emails with their first name, you can usually use it too. Many universities also have an official form for extensions, so check the rules for your course.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each part of the email with an example.', pairs: [
            ['Subject line', 'Request for a meeting about my project'],
            ['Greeting', 'Dear Professor Ito,'],
            ['Why you are writing', 'I am writing to ask about my exam results.'],
            ['Closing line', 'I look forward to hearing from you.'],
            ['Sign-off', 'Kind regards,'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best line for an email to a lecturer.', items: [
            { q: 'Subject line:', o: ['Request for a meeting about my dissertation', 'Hi!!', 'Question'], why: 'A good subject line says exactly what the email is about.' },
            { q: 'Your lecturer signs her emails *Dr Sarah Lewis*. Greeting:', o: ['Dear Dr Lewis,', 'Dear Sarah Lewis,', 'Hey Dr Sarah,'], why: 'Title + surname: *Dear Dr Lewis*. Do not use the title with the first name.' },
            { q: 'Asking for a meeting:', o: ['Would it be possible to meet next week?', 'Meet me next week.', 'I want to see you next week.'], why: '*Would it be possible to…?* is polite and formal.' },
            { q: 'Last line:', o: ['Thank you for your time.', 'Bye for now!', 'Write back fast.'], why: 'Thank the reader at the end of a formal email.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the phrases from formal emails.', items: [
            { q: 'I am writing to ask ___ I could have a short extension.', a: ['if', 'whether'], why: '*ask if* or *ask whether* introduces a yes or no question.' },
            { q: 'Would it be ___ to hand in my essay on Monday?', a: ['possible'], why: '*Would it be possible to…?* is a polite request.' },
            { q: 'Thank you for ___ (consider) my request.', a: ['considering'], why: 'After *Thank you for*, use the *-ing* form.' },
            { q: 'I look forward to ___ (hear) from you.', a: ['hearing'], why: 'In *look forward to*, *to* is a preposition, so the *-ing* form follows.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Polite requests and reasons',
      about: 'Ask politely and explain why.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'In a formal email, a request is usually a **question** or a **soft statement**. Learn which form of the verb comes after each phrase.' },
          { t: 'table', caption: 'Polite requests', explain: ['head', 'col1'], head: ['Phrase', 'What comes next', 'Example'], rows: [
            ['Could you…?', 'base form', 'Could you send me the slides?'],
            ['Would it be possible to…?', 'base form', 'Would it be possible to meet on Friday?'],
            ['Would you mind…?', '-ing form', 'Would you mind looking at my plan?'],
            ['I was wondering if you could…', 'base form', 'I was wondering if you could help me.'],
            ['I would be grateful if you could…', 'base form', 'I would be grateful if you could reply soon.'],
          ] },
        ],
        [
          { t: 'text', md: 'A short reason makes a request easier to accept. **Because** and **as** are followed by a subject and a verb. **Because of** and **due to** are followed by a noun.' },
          { t: 'examples', items: [
            { s: 'I missed the seminar **because** I had a hospital appointment.', n: '*because* + subject + verb.' },
            { s: 'I missed the seminar **because of** a hospital appointment.', n: '*because of* + noun.' },
            { s: '**As** the library was closed, I could not finish my reading.', n: '*As* often starts the sentence in formal writing. It means *because*.' },
            { s: 'The exam was moved **due to** a problem with the room.', n: '*due to* + noun. It is more formal than *because of*.' },
          ] },
          { t: 'tip', art: 'owl', md: '*Unfortunately* is a useful word before a reason: *Unfortunately, my laptop stopped working.* It shows you are sorry about the situation.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct words.', items: [
            { q: 'I could not attend the lecture ___ I was ill.', o: ['because', 'because of', 'due to'], why: 'A subject and verb follow (*I was ill*), so use *because*.' },
            { q: 'The exam was moved ___ a problem with the heating.', o: ['because of', 'because', 'as'], why: 'A noun follows (*a problem*), so use *because of*.' },
            { q: 'Would you mind ___ my essay plan?', o: ['looking at', 'to look at', 'look at'], why: '*Would you mind* + *-ing*.' },
            { q: 'I was wondering if you ___ help me with my reading list.', o: ['could', 'will to', 'are able'], why: '*I was wondering if you could* + base form.' },
            { q: 'I would be grateful if you could ___ me the slides.', o: ['send', 'sending', 'to send'], why: 'After *could*, use the base form: *send*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words that introduce the reason.', items: [
            { s: 'I could not finish the essay [because] my laptop broke.', why: '*because* + subject + verb.' },
            { s: 'The seminar is cancelled [due] [to] illness.', why: '*due to* + noun.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Would it be possible to meet on Thursday?', why: '*Would it be possible to* + base form.' },
            { a: 'I was wondering if you could help me.', why: '*I was wondering if* + subject + *could* + verb.' },
            { a: 'I missed the class because I was ill.', why: 'The reason comes after *because*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with one word.', items: [
            { q: 'Would you mind ___ (explain) the task again?', a: ['explaining'], why: '*Would you mind* + *-ing*.' },
            { q: 'The trip was cancelled because ___ the weather.', a: ['of'], why: 'A noun follows, so use *because of*.' },
            { q: '___ the bus was late, I missed the start of the exam.', a: ['As', 'Because', 'Since'], why: '*As*, *because* or *since* + subject + verb.' },
            { q: 'I would be ___ if you could reply by Friday.', a: ['grateful'], why: '*I would be grateful if you could…*' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A student and a lecturer',
      about: 'Read an email from a student and her lecturer’s reply.',
      art: 'owl',
      spreads: [
        [
          { t: 'reading', title: 'Subject: Feedback on my first essay', md: 'Dear Dr Collins,\n\nI hope you are well. I am a first-year student in your Introduction to Sociology seminar on Thursday mornings.\n\nI have received my mark for the first essay, and I was a little disappointed, as I had worked hard on it. I have read your comments, but I am not sure I understand how to improve my structure.\n\nWould it be possible to meet briefly to discuss this? I am free on Monday and Tuesday afternoons.\n\nThank you for your time.\n\nKind regards,\nAisha Rahman' },
          { t: 'reading', title: 'Subject: Re: Feedback on my first essay', md: 'Dear Aisha,\n\nThank you for your email, and well done for asking. Many students find structure difficult at first.\n\nI have office hours on Tuesdays from 2 to 4 pm in room C214. You do not need to book, but please bring a copy of your essay with my comments.\n\nYou might also find the Writing Centre useful. Experienced tutors there offer one-to-one sessions on planning and structure.\n\nSee you on Tuesday.\n\nBest wishes,\nHelen Collins' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the emails. True, false or not given?', items: [
            { q: 'Aisha is in Dr Collins’s seminar.', a: 't', why: '*I am a first-year student in your Introduction to Sociology seminar.*' },
            { q: 'Aisha was happy with her mark.', a: 'f', why: 'She was *a little disappointed*.' },
            { q: 'Aisha wants to talk about the structure of her essay.', a: 't', why: '*I am not sure I understand how to improve my structure.*' },
            { q: 'Aisha has to book an appointment for office hours.', a: 'f', why: '*You do not need to book.*' },
            { q: 'Dr Collins asks Aisha to bring her essay.', a: 't', why: '*Please bring a copy of your essay with my comments.*' },
            { q: 'The sessions at the Writing Centre are free.', a: 'ng', why: 'The email does not say if the sessions cost money.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Think about how the emails are written.', items: [
            { q: 'Which sentence from Aisha’s email asks for a meeting?', o: ['Would it be possible to meet briefly to discuss this?', 'I hope you are well.', 'Thank you for your time.'], why: '*Would it be possible to…?* is the request.' },
            { q: 'Why does Aisha say that she worked hard on the essay?', o: ['to explain why she was disappointed', 'to ask for a higher mark', 'to complain about the seminar'], why: 'She gives a reason with *as*: *as I had worked hard on it*.' },
            { q: 'Dr Collins ends with *Best wishes*. This closing is ___.', o: ['friendly but still polite', 'rude', 'only for family'], why: '*Best wishes* is common between people who know each other a little.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Your lecturer is Professor Anna Kowalska. You write: ___', o: ['Dear Professor Kowalska,', 'Dear Professor Anna,', 'Hi Prof!'], why: 'Title + surname.' },
      { q: 'I could not come to the seminar ___ a family emergency.', o: ['because of', 'because', 'as'], why: 'A noun follows, so use *because of*.' },
      { q: 'Would you mind ___ me your notes?', o: ['lending', 'to lend', 'lend'], why: '*Would you mind* + *-ing*.' },
      { q: 'The best subject line for an extension request:', o: ['Extension request: Biology report', 'Help!', 'Hello'], why: 'Say exactly what the email is about.' },
      { q: 'Thank you for ___ my request.', o: ['considering', 'consider', 'to consider'], why: '*Thank you for* + *-ing*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete with one word.', items: [
      { q: 'Would it be ___ to meet next Tuesday?', a: ['possible'], why: '*Would it be possible to…?*' },
      { q: 'I am writing to ask ___ I could hand in my essay later.', a: ['if', 'whether'], why: '*ask if* / *ask whether* for a yes or no question.' },
      { q: 'I look forward to ___ (hear) from you.', a: ['hearing'], why: '*look forward to* + *-ing*.' },
      { q: 'The lecture was cancelled ___ to illness.', a: ['due'], why: '*due to* + noun.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'I would be grateful if you could reply.', why: '*I would be grateful if you could* + base form.' },
      { a: 'Could you send me the reading list?', why: '*Could you* + base form.' },
      { a: 'Thank you for considering my request.', why: 'A formal closing line.' },
    ] },
  ],
};
