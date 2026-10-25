// English B2 for work, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Networking and career',
  goal: 'Network, talk about your career and plan your next step.',
  art: 'suitcase',
  tags: { skills: ['speaking', 'writing', 'grammar', 'reading'], topics: ['networking', 'follow-up-emails', 'career-goals', 'professional-profile', 'present-perfect-continuous'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Meeting people at events',
      about: 'Start a conversation at a work event, end it politely and follow up by email.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Networking is simply building useful professional relationships. At a conference or an industry event, the conversation usually moves through a few stages: you **introduce yourself**, ask what the other person does, look for a **connection** between you, and then **move on** politely, often with a plan to stay in touch.' },
          { t: 'table', caption: 'Networking phrases', explain: ['head', 'col0'], quiz: true, head: ['Purpose', 'Phrase'], rows: [
            ['Start a conversation', 'Hi, I don’t think we’ve met. I’m Sara.'],
            ['Ask about the other person', 'What brings you here? / What line of work are you in?'],
            ['Say what you do', 'I’m responsible for supplier contracts at a logistics firm.'],
            ['Find a connection', 'Really? A colleague of mine is working on something similar.'],
            ['Suggest staying in touch', 'Shall we connect online? I’d love to hear how the project goes.'],
            ['Move on politely', 'It’s been great talking to you. I’ll let you get back to the others.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'At a sustainability conference', lines: [
            { who: 'Sara', s: 'Hi, I don’t think we’ve met. I’m Sara Lindqvist.' },
            { who: 'Kenji', s: 'Kenji Watanabe. Nice to meet you. What brings you here?' },
            { who: 'Sara', s: 'I’m in charge of purchasing for a group of hotels, and we’re trying to cut down on packaging. What about you?' },
            { who: 'Kenji', s: 'I run a small company that makes refillable containers for cleaning products.' },
            { who: 'Sara', s: 'Really? That’s exactly the kind of thing we’ve been looking for. Do you work with hotels already?' },
            { who: 'Kenji', s: 'A couple of small ones. I’d be happy to tell you more, but I don’t want to keep you from the next session.' },
            { who: 'Sara', s: 'Shall we exchange details? I could send you an email next week.' },
            { who: 'Kenji', s: 'Great. Here’s my card. It’s been really good talking to you.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Ask open questions that start with *what*, *how* or *why*: *What are you working on at the moment?* They keep a conversation going much better than yes/no questions.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the beginnings and the endings.', pairs: [
            ['I don’t think', 'we’ve met.'],
            ['What line of work', 'are you in?'],
            ['I’m in charge', 'of purchasing.'],
            ['I don’t want to keep you', 'from the next session.'],
            ['It’s been great', 'talking to you.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best thing to say.', items: [
            { q: 'You want to start a conversation with a stranger at a conference.', o: ['Hi, is this your first time at this conference?', 'Who are you?', 'Tell me what you do.'], why: 'A light, open question about the event is an easy way to start.' },
            { q: 'You want to end a conversation without sounding rude.', o: ['It’s been great talking to you. I should go and say hello to a few people.', 'OK, I’m bored now. Bye.', 'I have to go because this is not useful.'], why: 'Say something positive, then give a reason to move on.' },
            { q: 'You want to stay in touch.', o: ['Shall we exchange details?', 'Give me your phone number.', 'I will find you online.'], why: '*Shall we…?* is a friendly suggestion.' },
          ] },
        ],
        [
          { t: 'reading', title: 'A follow-up email', md: 'Subject: Great to meet you at the sustainability conference\n\nDear Kenji,\n\nIt was a pleasure meeting you at the conference on Thursday. I really enjoyed hearing about your refillable containers.\n\nAs I mentioned, we are looking for ways to reduce packaging in our hotels, and I think your products could be a good fit. Would you be free for a short video call next week? I am available on Tuesday or Wednesday afternoon.\n\nI look forward to hearing from you.\n\nBest regards,\nSara Lindqvist' },
          { t: 'ex', kind: 'gap', h: 'Complete the follow-up phrases with one word.', items: [
            { q: 'It was a ___ meeting you at the conference.', a: ['pleasure'], why: '*It was a pleasure meeting you*: a warm, professional opening.' },
            { q: 'As I ___, we are looking for new suppliers.', a: ['mentioned', 'said'], why: '*As I mentioned* links the email to your conversation.' },
            { q: 'Would you be ___ for a short call next week?', a: ['free', 'available'], why: '*Would you be free for…?* is a polite invitation.' },
            { q: 'I look forward to ___ from you.', a: ['hearing'], why: '*Look forward to* + *-ing*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Career goals and your profile',
      about: 'Talk about where you want to go next and describe your experience in a professional profile.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'When people ask about your plans, at an appraisal, an interview or a networking event, a clear answer sounds confident. Mention the **direction** you want to take, the **skills** you want to develop and, if you can, a **timeframe**.' },
          { t: 'examples', items: [
            { s: 'I’m **looking to move into** project management.', n: '*Be looking to* + verb: a plan you are actively working on.' },
            { s: 'I’m **keen to develop** my skills in data analysis.', n: '*Be keen to* + verb: you really want to do it.' },
            { s: '**In the long term**, I’d like to lead a team.', n: '*In the long term* / *in the short term*: when you hope it will happen.' },
            { s: '**My aim is to** take on more international clients within two years.', n: 'A clear, direct goal with a timeframe.' },
          ] },
        ],
        [
          { t: 'text', md: 'A **professional profile** is a short summary of who you are at work, for example at the top of a CV or on a networking site. It uses the **present perfect simple** for experience and achievements, and the **present perfect continuous** for something that started in the past and is still going on.' },
          { t: 'table', caption: 'Tenses in a profile', explain: ['head', 'col0'], head: ['Use', 'Example'], rows: [
            ['What you do now', 'I manage a team of six in customer support.'],
            ['Experience up to now, often with a number', 'I have delivered training to over 200 new employees.'],
            ['An activity that started in the past and continues', 'I have been working in logistics for eight years.'],
            ['A finished time in the past', 'In 2022, I led the move to a new booking system.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Avoid empty phrases like *hard-working team player*. Show it with a fact instead: *I have coordinated projects with colleagues in four countries.* Strong verbs help: *led*, *launched*, *improved*, *negotiated*, *reduced*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct form for a profile.', items: [
            { q: 'I ___ in hospitality for over ten years.', o: ['have been working', 'am working', 'worked'], why: 'Started in the past and still continues: present perfect continuous with *for*.' },
            { q: 'Since joining the company, I ___ three new products.', o: ['have launched', 'have been launching', 'launch'], why: 'A number of completed achievements: present perfect simple.' },
            { q: 'In 2021, I ___ a project to reduce paper use in our offices.', o: ['led', 'have led', 'have been leading'], why: 'A finished time in the past (*in 2021*): past simple.' },
            { q: 'I’m keen ___ my negotiation skills.', o: ['to develop', 'on develop', 'developing'], why: '*Be keen to* + base form.' },
            { q: 'I’m looking ___ into a marketing role.', o: ['to move', 'for moving', 'move'], why: '*Be looking to* + base form: a plan you are working on.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the profile. Use the verb in brackets.', items: [
            { q: 'I ___ (work) as a financial analyst since 2020.', a: ['have been working', '’ve been working', 'have worked', '’ve worked'], why: 'From 2020 until now: present perfect continuous, or simple with *work*.' },
            { q: 'During that time, I ___ (help) more than forty companies with their budgets.', a: ['have helped', '’ve helped'], why: 'An achievement with a number: present perfect simple.' },
            { q: 'Last year, I ___ (complete) a course in data visualisation.', a: ['completed'], why: '*Last year* is a finished time: past simple.' },
            { q: 'In the long ___, I would like to become a finance director.', a: ['term', 'run'], why: '*In the long term*: in the distant future.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'My aim is to lead a team.', why: '*My aim is to* + verb: a clear goal.' },
            { a: 'How long have you been working here?', why: 'A question in the present perfect continuous: *How long have you been* + *-ing*?' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the empty phrase that adds no real information.', items: [
            { s: 'I am a [hard-working team player] and I have coordinated projects in four countries.', why: 'The second part gives a fact; *hard-working team player* says nothing specific.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Changing career',
      about: 'Read an interview with a teacher who moved into a new profession.',
      art: 'croissant',
      spreads: [
        [
          { t: 'reading', title: 'From the classroom to course design', md: 'Kofi Asante taught science at a secondary school for nine years. Today he designs online training courses for a large engineering company. We asked him how he made the move.\n\n**When did you start thinking about a change?**\n\nAbout three years ago. I still loved explaining things, but I was exhausted, and I wanted to work with adults. The problem was that I didn’t know what jobs existed outside schools.\n\n**So how did you find out?**\n\nMostly by talking to people. I went to a few events on digital learning, which felt strange at first, because I didn’t really belong there. But I asked a lot of questions, and people were surprisingly generous. One woman I met spent an hour on the phone with me the following week, explaining what a learning designer actually does.\n\n**Did you need new qualifications?**\n\nNot formally, but I needed new skills. I took an evening course in course-design software, and I built a small portfolio of sample lessons. That portfolio got me my first interview.\n\n**Which of your teaching skills have been most useful?**\n\nPlanning, definitely. And knowing how quickly people lose concentration. Engineers are not so different from teenagers in that way.\n\n**What advice would you give someone who is thinking about a change?**\n\nDon’t just send applications. Talk to people who already do the job you want, and always follow up with a short email to thank them. I have been in this role for eighteen months now, and I still haven’t stopped learning. That’s what I wanted.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Kofi left teaching because he no longer enjoyed explaining things.', a: 'f', why: '“I still loved explaining things, but I was exhausted.”' },
            { q: 'At first, Kofi felt out of place at the digital learning events.', a: 't', why: '“…which felt strange at first, because I didn’t really belong there.”' },
            { q: 'Kofi needed a university degree to become a learning designer.', a: 'f', why: '“Not formally, but I needed new skills.”' },
            { q: 'The woman who helped him later offered him a job.', a: 'ng', why: 'The text says she explained the job on the phone, but not that she offered him one.' },
            { q: 'Kofi has worked in his new role for a year and a half.', a: 't', why: '“I have been in this role for eighteen months now.”' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the ideas and language in the interview.', items: [
            { q: 'According to Kofi, what got him his first interview?', o: ['His portfolio of sample lessons.', 'A recommendation from his school.', 'A university qualification.'], why: '“That portfolio got me my first interview.”' },
            { q: 'What is Kofi’s main advice?', o: ['Talk to people who do the job and thank them afterwards.', 'Send as many applications as possible.', 'Get a new qualification before you do anything else.'], why: 'He says *Don’t just send applications. Talk to people…*' },
            { q: '“I have been in this role for eighteen months.” Why the present perfect?', o: ['He started eighteen months ago and is still in the role.', 'The role finished eighteen months ago.', 'He will start the role in eighteen months.'], why: 'Present perfect + *for*: from the past up to now.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the phrasal verb that means “contact someone again after a first meeting”.', items: [
            { s: 'Talk to people who already do the job you want, and always [follow up] with a short email to thank them.', why: '*Follow up* means contact someone again to continue what you started.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'At a conference: “Hi, I don’t think we’ve ___. I’m Ana.”', o: ['met', 'meet', 'been meeting'], why: '*I don’t think we’ve met* is the fixed phrase.' },
      { q: 'I ___ for this company since 2019.', o: ['have been working', 'am working', 'work'], why: 'From the past until now with *since*: present perfect continuous.' },
      { q: 'I’m keen ___ more responsibility.', o: ['to take on', 'taking on', 'on take'], why: '*Be keen to* + base form.' },
      { q: 'In 2023, I ___ our first online shop.', o: ['launched', 'have launched', 'have been launching'], why: 'A finished time in the past: past simple.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences with one word.', items: [
      { q: 'What ___ you here? Are you speaking today?', a: ['brings', 'brought'], why: '*What brings you here?* asks why someone is at the event.' },
      { q: 'It was a ___ meeting you yesterday.', a: ['pleasure'], why: '*It was a pleasure meeting you*: a follow-up opening.' },
      { q: 'I’m looking ___ move into sales.', a: ['to'], why: '*Be looking to* + base form.' },
      { q: 'I’ll let you get ___ to the others.', a: ['back'], why: '*Get back to*: return to.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'What line of work are you in?', why: 'A common networking question about someone’s job.' },
      { a: 'Would you be free for a call?', why: 'A polite invitation in a follow-up email.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the phrases and their purposes.', pairs: [
      ['Shall we exchange details?', 'suggesting staying in touch'],
      ['I’m responsible for supplier contracts.', 'saying what you do'],
      ['I should go and say hello to a few people.', 'moving on politely'],
      ['As I mentioned on Thursday,…', 'linking an email to a conversation'],
    ] },
  ],
};
