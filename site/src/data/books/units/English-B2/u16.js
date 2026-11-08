// English B2, unit 16, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// The last unit of B2: Use of English Parts 2 and 4, Writing Part 2 (email or letter, article, report), all the B2
// grammar together in a text, and the whole B2 First exam step by step, with a look ahead to C1 and its level test.
export const UNIT = {
  id: 'u16',
  title: 'Ready for B2 First and beyond',
  goal: 'Handle the open cloze and the key word transformations, write a B2 email, article or report, choose the right grammar in a text, and know every part of the B2 First exam before the level test for C1.',
  art: 'dragon',
  tags: { skills: ['grammar', 'writing', 'reading', 'speaking', 'listening'], topics: ['use-of-english', 'open-cloze', 'transformations', 'article', 'report', 'exam'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Small words, big points',
      about: 'Learn how the open cloze and the key word transformations work, and which grammar they test most.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Two parts of B2 First Reading and Use of English test grammar most directly.\n\n**Part 2, open cloze**: a short text with eight gaps and no options. Each gap needs **one word**, and it is almost always a small grammar word: a preposition (*in, on, for*), an article (*a, the*), a pronoun (*it, which, who*), an auxiliary (*have, been, did*), a linker (*although, unless, despite*) or part of a fixed phrase (*as well as, in spite of*).\n\n**Part 4, key word transformations**: six sentences. You rewrite each one with the same meaning, using a key word you must not change and **between two and five words**. Each item usually tests two things at once, for example a passive and a phrasal verb.' },
          { t: 'table', caption: 'What Part 2 tests most', explain: ['head', 'col0'], head: ['Kind of word', 'Examples'], rows: [
            ['prepositions', 'on time, in charge of, depend on'],
            ['auxiliaries', 'have been, was being, did not'],
            ['relative words', 'which, whose, where, who'],
            ['linkers', 'although, unless, despite, whereas'],
            ['fixed phrases', 'as well as, in order to, so that'],
            ['quantifiers', 'few, little, enough, both, neither'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 2, read the **whole text** first. Then look at the words just before and just after each gap: *depend ___ the weather* needs *on*; *___ the rain, we went out* needs *despite* or *in spite of*, but only one word fits, so *despite*.' },
        ],
        [
          { t: 'text', md: 'Part 4 rewards a calm method. First, find what the key word forces you to change. Then check what else must change for the meaning to stay the same. Finally, count your words: contractions count as two (*didn’t* = *did not*).\n\nThe grammar you studied in B2 comes back again and again: passives, reported speech, conditionals, *wish*, modals of deduction, comparatives, *used to*, *it’s worth*, *have something done* and phrasal verbs.' },
          { t: 'examples', items: [
            { s: 'They say the castle is haunted. (SAID) → The castle **is said to be** haunted.', n: 'Passive reporting: 3 words.' },
            { s: 'I regret not studying harder. (WISH) → I **wish I had studied** harder.', n: 'Regret about the past: *wish* + past perfect.' },
            { s: 'Someone repaired my bike yesterday. (HAD) → I **had my bike repaired** yesterday.', n: '*Have something done*.' },
            { s: 'It’s possible that he forgot. (MIGHT) → He **might have forgotten**.', n: 'Past deduction.' },
            { s: 'This is the best film I’ve ever seen. (NEVER) → I **have never seen a better** film.', n: 'Comparative and *never*: 5 words.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Changing the key word: SAY → said', 'Using SAID exactly as given', 'The key word must not change at all.'],
            ['Six words in the answer', 'Two to five words', 'Contractions count as two words.'],
            ['Two words in one Part 2 gap', 'One word only', '*in spite* is two words; *despite* is one.'],
            ['Leaving a gap empty', 'Always writing something', 'A guess may be right; an empty gap never is.'],
          ] },
          { t: 'ex', kind: 'gap', h: 'In the format of the B2 First exam (Reading and Use of English Part 2): write one word in each gap.', items: [
            { q: 'Whether we go hiking depends ___ the weather.', a: ['on', 'upon'], why: '*Depend on*.' },
            { q: '___ the rain, the match went ahead.', a: ['Despite'], why: 'One word only: *despite*.' },
            { q: 'The village, ___ was founded in 1200, is now a museum.', a: ['which'], why: 'Non-defining relative clause about a thing.' },
            { q: 'She has ___ working here since March.', a: ['been'], why: 'Present perfect continuous: *has been working*.' },
            { q: 'We left early ___ that we could avoid the traffic.', a: ['so'], why: '*So that* for purpose.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of the B2 First exam (Reading and Use of English Part 4): complete the second sentence, using the word given (two to five words).', items: [
            { q: 'People think the painting is a fake.', cue: 'THOUGHT', a: ['The painting is thought to be a fake.'], why: 'Passive reporting: *is thought to be*.' },
            { q: 'I’m sorry I didn’t call you yesterday.', cue: 'WISH', a: ['I wish I had called you yesterday.'], why: 'Past regret: *wish* + past perfect.' },
            { q: 'A mechanic is fixing my car this week.', cue: 'HAVING', a: ['I am having my car fixed this week.', 'I’m having my car fixed this week.'], why: '*Have something done* in the present continuous.' },
            { q: 'It wasn’t necessary for you to bring food.', cue: 'NEED', a: ['You did not need to bring food.', 'You didn’t need to bring food.', 'You needn’t have brought food.', 'You need not have brought food.'], why: '*Didn’t need to* or *needn’t have*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Part 4 gives **two marks** per item, one for each part of the change. Even if you are not sure of everything, write what you can: half an answer can still earn one mark.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'The castle is said to be haunted.' },
            { a: 'I wish I had studied harder.' },
            { a: 'You needn’t have brought anything.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Writing Part 2: choose your task',
      about: 'Write an email or letter, an article or a report in the format of B2 First Writing Part 2.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'In B2 First Writing you write two texts. **Part 1** is always an essay (you practised it in unit 14). In **Part 2** you choose **one** task from three, and write **140 to 190 words**. The task can be an email or letter, an article, a report or a review (unit 13).\n\nEach type has a different reader and a different style. Before you choose, ask yourself two questions: *Who am I writing for?* and *What do they want from my text?* Choose the task where you have the best ideas and the right words, not the one that looks shortest.' },
          { t: 'table', caption: 'Three Part 2 tasks', explain: ['head', 'col1', 'col2'], head: ['Type', 'Reader and purpose', 'Style and shape'], rows: [
            ['email or letter', 'a friend, a manager, a company: answer questions or ask for something', 'informal or formal; greeting, clear paragraphs, closing'],
            ['article', 'readers of a magazine or website: interest and entertain', 'a title, a lively opening, a question to the reader, personal examples'],
            ['report', 'a manager, a teacher, a club: give facts and recommend', 'a title, headings, neutral style, a recommendation at the end'],
          ] },
        ],
        [
          { t: 'text', md: 'The same topic can become very different texts. Imagine the topic is *a sports centre in your town*.\n\nIn an **article**, you might start: *Ever wondered where to spend a rainy Saturday?* and tell the reader about your favourite class.\n\nIn a **report**, you would write: *Introduction: The aim of this report is to assess the facilities at the Riverside Centre and to suggest improvements.* Then use headings like *Facilities*, *Prices* and *Recommendations*.\n\nIn an **email** to a friend, you would write: *Hi Sam, Thanks for your message! You asked about the sports centre…*' },
          { t: 'examples', items: [
            { s: '**Have you ever wondered** why some people love extreme sports?', n: 'Article opening: a question to the reader.' },
            { s: '**The aim of this report is to** assess the library and suggest improvements.', n: 'Report introduction.' },
            { s: '**On the whole**, the centre offers good value. **However**, the changing rooms need updating.', n: 'Report: balanced, neutral.' },
            { s: '**I would therefore recommend** extending the opening hours.', n: 'Report: the recommendation.' },
            { s: '**Thanks for getting in touch!** I’d love to help with your trip.', n: 'Informal email.' },
            { s: '**I am writing to enquire about** the summer course.', n: 'Formal letter or email.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['A report with no headings', 'Title and headings', 'Reports are organised by headings.'],
            ['An article that starts “In this article I will write about…”', 'A question or surprising fact', 'An article must catch the reader’s interest.'],
            ['“Hi!” in a letter to a manager', '“Dear Ms Clark,”', 'Match the style to the reader.'],
            ['120 words', '140 to 190 words', 'Too short loses marks for content.'],
          ] },
          { t: 'reading', title: 'A report: the college sports centre', md: '**Introduction.** The aim of this report is to assess the college sports centre and to recommend improvements.\n\n**Facilities.** On the whole, the gym is well equipped and the swimming pool is clean. However, the changing rooms are small and often crowded in the evening.\n\n**Opening hours.** The centre closes at 8 pm, which is too early for students who have late classes.\n\n**Recommendations.** I would therefore recommend extending the opening hours until 10 pm and enlarging the changing rooms. These changes would encourage more students to use the centre.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B2 First exam (Writing Part 2): which sentence fits each task best?', items: [
            { q: 'The first sentence of an article for a travel website:', o: ['Have you ever arrived in a city and felt completely lost?', 'The aim of this report is to describe my city.', 'I am writing to complain about my holiday.'], why: 'An article opens with a question to catch the reader.' },
            { q: 'The last section of a report for your manager:', o: ['I would therefore recommend changing the timetable.', 'Can’t wait to see you!', 'Have you ever wondered about timetables?'], why: 'Reports end with a recommendation.' },
            { q: 'A formal email to a language school:', o: ['I am writing to enquire about your summer courses.', 'Hey, what courses have you got?', 'Ever wondered about summer courses?'], why: 'Formal opening for a school you do not know.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Report, article or both?', groups: ['report', 'article'], explain: ['groups'], items: [
            { s: 'headings', g: 0, why: 'Reports use headings.' },
            { s: 'a question to the reader', g: 1, why: 'Articles talk to the reader.' },
            { s: 'a recommendation at the end', g: 0, why: 'Reports recommend.' },
            { s: 'personal stories', g: 1, why: 'Articles use personal examples.' },
          ] },
          { t: 'tip', art: 'owl', md: 'The examiners mark four things: **content** (did you answer every part of the task?), **communicative achievement** (is the style right for the reader?), **organisation** and **language**. A report with perfect grammar but no headings or recommendations will still lose marks.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'The aim of this report is to suggest improvements.' },
            { a: 'Have you ever wondered why people love the sea?' },
            { a: 'I am writing to enquire about your course.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'All the B2 grammar together',
      about: 'Choose the right tense, conditional, modal or passive when they all appear in one text.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'In the exam, and in real life, grammar does not come one point at a time. A single paragraph may need a past perfect, a passive, a conditional and a modal. The skill at B2 is **choosing**: looking at the meaning and the time, and picking the form that fits.\n\nThree questions help with every verb. **When?** (past, present, future, or before another past moment). **Finished or not?** (simple or perfect, continuous or not). **Who does it?** (active, or passive if the doer is unknown or unimportant).' },
          { t: 'table', caption: 'Choosing the form', explain: ['head', 'col0'], head: ['The meaning', 'The form', 'Example'], rows: [
            ['before another past event', 'past perfect', 'By the time we arrived, the film had started.'],
            ['an unreal past', 'third conditional', 'If I had known, I would have come.'],
            ['a regret about now', 'wish + past simple', 'I wish I lived nearer.'],
            ['the doer is not important', 'passive', 'The bridge was built in 1890.'],
            ['a guess about the past', 'modal + have + past participle', 'She must have missed the bus.'],
            ['finished by a future time', 'future perfect', 'I’ll have finished by six.'],
          ] },
        ],
        [
          { t: 'reading', title: 'The bridge that nearly wasn’t', md: 'When the engineers arrived in 1887, the river had already destroyed two earlier bridges. Nobody believed a third one would survive. The plans were drawn up in only three months, and work began the following spring.\n\nIf the engineers had used wood again, the bridge would almost certainly have fallen. Instead, they chose iron, which was expensive but strong. By the time it opened, the town had spent more than it could afford.\n\nToday the bridge is crossed by thousands of people every day. The engineers must have been very proud: their bridge has been standing for over 130 years. Many people in the town wish it were open to cars again, but by 2030 a new road bridge will have been built further down the river.' },
          { t: 'ex', kind: 'tf', h: 'Read the text. Are the sentences true, false or not given?', ng: true, items: [
            { q: 'Two bridges had been destroyed before 1887.', a: 't', why: '*The river had already destroyed two earlier bridges.*' },
            { q: 'The engineers used wood.', a: 'f', why: '*Instead, they chose iron.*' },
            { q: 'The engineers were paid very well.', a: 'ng', why: 'The text does not say how much they were paid.' },
            { q: 'Cars can cross the bridge today.', a: 'f', why: 'People *wish it were open to cars again*.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['If they used wood, it would have fallen.', 'If they had used wood, it would have fallen.', 'Unreal past: past perfect in the *if* part.'],
            ['When we arrived, the film started already.', 'When we arrived, the film had already started.', 'Earlier past: past perfect.'],
            ['The bridge has built in 1890.', 'The bridge was built in 1890.', 'Passive with a finished time: *was built*.'],
            ['She must miss the bus yesterday.', 'She must have missed the bus yesterday.', 'Past guess: *must have* + past participle.'],
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'By the time the rescue team arrived, the storm ___.', o: ['had passed', 'passed', 'has passed'], why: 'Before another past event: past perfect.' },
            { q: 'If I ___ about the strike, I would have taken the train.', o: ['had known', 'knew', 'would know'], why: 'Third conditional.' },
            { q: 'The museum ___ by over a million people last year.', o: ['was visited', 'visited', 'has visited'], why: 'Passive, finished time.' },
            { q: 'He isn’t answering. He ___ his phone at home.', o: ['must have left', 'must leave', 'had left'], why: 'Guess about the past.' },
            { q: 'Don’t call at five; I ___ the report by then.', o: ['won’t have finished', 'don’t finish', 'didn’t finish'], why: 'Future perfect.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'In the format of the B2 First exam (Reading and Use of English Part 3): use the word in capitals to form a word that fits the gap.', items: [
            { q: 'The ___ of the new bridge took six years.', base: 'construct', a: ['construction'], why: 'Noun from *construct*: *construction*.' },
            { q: 'Most people thought the plan was completely ___.', base: 'realistic', a: ['unrealistic'], why: 'A negative prefix: *unrealistic*.' },
            { q: 'The engineers worked ___ through the winter.', base: 'tire', a: ['tirelessly'], why: 'An adverb: *tirelessly*.' },
            { q: 'There was some ___ about the cost.', base: 'agree', a: ['disagreement'], why: 'Negative noun: *disagreement*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 3, decide first **what kind of word** the gap needs (noun, adjective, adverb, verb) and whether it is **positive or negative**. Then think about prefixes and suffixes. Many answers need two changes, like *agree → disagreement*.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'By the time it opened, the town had spent too much.' },
            { a: 'If they had used wood, it would have fallen.' },
            { a: 'The bridge has been standing for over a hundred years.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'The B2 First exam, step by step',
      about: 'Walk through every part of the B2 First exam, and look ahead to C1 and the level test before it.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'You have now studied all the language of B2. This lesson puts the whole **B2 First** exam in one place, so you know exactly what to expect. The exam has four papers and takes about three and a half hours in total.\n\n**Reading and Use of English** (1 hour 15 minutes, seven parts). Parts 1 to 4 test vocabulary and grammar: multiple-choice cloze, open cloze, word formation and key word transformations. Parts 5 to 7 test reading: multiple choice on a long text, putting removed sentences back into a text, and matching questions to short texts.\n\n**Writing** (1 hour 20 minutes, two parts). Part 1 is always an essay. In Part 2 you choose an email or letter, an article, a report or a review.' },
          { t: 'text', md: '**Listening** (about 40 minutes, four parts). Part 1: eight short extracts with a multiple-choice question each. Part 2: a talk with sentences to complete. Part 3: five speakers to match to statements. Part 4: an interview with multiple-choice questions. You hear everything twice.\n\n**Speaking** (14 minutes, four parts, with another candidate). Part 1: questions about yourself. Part 2: you compare two photos for a minute. Part 3: you discuss a question with your partner, using prompts. Part 4: a wider discussion on the same topic.' },
          { t: 'table', caption: 'B2 First at a glance', explain: ['head', 'col0', 'col1'], head: ['Paper', 'Parts', 'Time'], rows: [
            ['Reading and Use of English', '7', '1 h 15 min'],
            ['Writing', '2', '1 h 20 min'],
            ['Listening', '4', 'about 40 min'],
            ['Speaking', '4', '14 min, in pairs'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Speaking Part 3, with a partner', lines: [
            { who: 'Ellie', s: 'Shall we start with this one? I think learning a new language is the most useful challenge.' },
            { who: 'Marcus', s: 'That’s a good point, although I’d say starting a business teaches you more.' },
            { who: 'Ellie', s: 'Maybe, but it’s much riskier. Not everyone can afford to lose money.' },
            { who: 'Marcus', s: 'True. What about running a marathon? It’s free, at least.' },
            { who: 'Ellie', s: 'So, if we have to choose one, shall we go for the language?' },
            { who: 'Marcus', s: 'Yes, I think we agree on that.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the B2 First exam (Speaking Part 3): what is the best thing to do?', items: [
            { q: 'Your partner gives an opinion. You…', o: ['respond to it, agreeing or disagreeing with a reason', 'move on to your own idea and ignore it', 'say nothing so you do not interrupt'], why: 'Part 3 tests interaction: react to your partner.' },
            { q: 'At the end of the two minutes, you need to…', o: ['try to reach a decision together', 'give a long speech', 'ask the examiner for the answer'], why: 'The task asks you to decide together.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Speaking Part 3, you do not need to agree, and there is no right answer. The examiner listens for **interaction**: inviting your partner (*What do you think?*), reacting (*That’s a good point, although…*) and moving towards a decision.' },
        ],
        [
          { t: 'text', md: 'What comes after B2? **C1**, an advanced level. At C1 you understand long and demanding texts, express yourself fluently without searching for words, and use English flexibly for study and work. The exam for this level is **C1 Advanced**.\n\nBefore you move into the C1 course, there is a **level test** in class. It covers everything in this book: grammar, vocabulary, reading, writing and speaking. It is not a trick: if you have done the units, the tests and the practice, you are ready. Your teacher will tell you your result privately, and if you need more time, you can take it again two weeks later after focused practice.' },
          { t: 'table', caption: 'Common mistakes on exam day', explain: ['head', 'col0', 'col1'], head: ['Not this', 'But this'], rows: [
            ['Spending 30 minutes on Part 1 of Reading', 'About 10 minutes per part, then move on'],
            ['Writing the Part 2 task without planning', 'Five minutes of planning first'],
            ['Answering “yes” or “no” in Speaking Part 1', 'Answering and adding a reason or example'],
            ['Leaving answers blank', 'Always writing a best guess'],
          ] },
          { t: 'ex', kind: 'match', h: 'Match the exam part and what you do.', pairs: [
            ['Use of English Part 3', 'form a word from the word in capitals'],
            ['Use of English Part 4', 'rewrite a sentence with a key word'],
            ['Reading Part 6', 'put removed sentences back into a text'],
            ['Speaking Part 2', 'compare two photos'],
            ['Listening Part 3', 'match five speakers to statements'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'A last round in the format of Use of English Part 4.', items: [
            { q: 'It’s a pity I can’t come to your party.', cue: 'WISH', a: ['I wish I could come to your party.'], why: 'Present regret: *wish* + *could*.' },
            { q: 'Lucy started learning French three years ago.', cue: 'BEEN', a: ['Lucy has been learning French for three years.'], why: 'Present perfect continuous with *for*.' },
            { q: 'They will announce the results tomorrow.', cue: 'BE', a: ['The results will be announced tomorrow.'], why: 'Future passive.' },
          ] },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'That’s a good point, although I see it differently.' },
            { a: 'What do you think about this one?' },
            { a: 'Shall we go for the language, then?' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'The trip was cancelled ___ to the storm.', a: ['due', 'owing'], why: '*Due to* or *owing to*.' },
      { q: '___ she was tired, she kept running.', a: ['Although', 'Though'], why: 'Contrast with a clause.' },
      { q: 'This is the town ___ my grandmother was born.', a: ['where'], why: 'Relative word for a place.' },
      { q: 'I have ___ waiting for over an hour.', a: ['been'], why: 'Present perfect continuous.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Complete the second sentence, using the word given.', items: [
      { q: 'People say the lake is very deep.', cue: 'SAID', a: ['The lake is said to be very deep.'], why: 'Passive reporting.' },
      { q: 'I regret not taking the job.', cue: 'WISH', a: ['I wish I had taken the job.'], why: 'Past regret.' },
      { q: 'Someone cut my hair yesterday.', cue: 'HAD', a: ['I had my hair cut yesterday.'], why: '*Have something done*.' },
      { q: 'Perhaps she missed the train.', cue: 'MIGHT', a: ['She might have missed the train.'], why: 'Past deduction.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Use the word in capitals to form a word that fits the gap.', items: [
      { q: 'Her ___ to help surprised everyone.', base: 'willing', a: ['willingness'], why: 'Noun: *willingness*.' },
      { q: 'The instructions were completely ___.', base: 'clear', a: ['unclear'], why: 'Negative adjective.' },
      { q: 'He answered the questions ___.', base: 'confident', a: ['confidently'], why: 'Adverb.' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
      { q: 'When we got to the station, the train ___.', o: ['had left', 'left', 'has left'], why: 'Earlier past.' },
      { q: 'If he ___ harder, he would have passed.', o: ['had studied', 'studied', 'would study'], why: 'Third conditional.' },
      { q: 'By next June, I ___ here for ten years.', o: ['will have worked', 'work', 'have worked'], why: 'Future perfect.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence fits the task?', items: [
      { q: 'The introduction to a report:', o: ['The aim of this report is to assess the canteen.', 'Have you ever eaten in a canteen?', 'Hi! Guess what?'], why: 'Reports open with their aim.' },
      { q: 'The opening of an article:', o: ['Ever wondered what makes a perfect weekend?', 'The aim of this report is to describe weekends.', 'I am writing to complain.'], why: 'Articles catch the reader’s interest.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the paper and what it tests.', pairs: [
      ['Reading and Use of English', 'grammar, vocabulary and reading'],
      ['Writing', 'an essay and one other text'],
      ['Listening', 'four parts, heard twice'],
      ['Speaking', 'four parts, with a partner'],
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'If they [used] iron, the bridge would have survived.', a: ['had used'], why: 'Third conditional.' },
      { s: 'The castle [has built] in 1300.', a: ['was built'], why: 'Passive with a finished time.' },
      { s: 'She must [miss] the bus yesterday.', a: ['have missed'], why: 'Past deduction.' },
    ] },
  ],
};
