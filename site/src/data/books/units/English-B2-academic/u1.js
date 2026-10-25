// English B2 for study and exams, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Academic language',
  goal: 'Understand and use the vocabulary of academic texts: key words, collocations, nominal style and formal register.',
  art: 'owl',
  tags: { skills: ['vocabulary', 'writing', 'reading'], topics: ['academic-word-list', 'collocations', 'nominalisation', 'formal-register'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Common academic words and collocations',
      about: 'Learn words that appear in academic texts in every subject, and the words they go with.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Some words appear in academic texts in almost every subject, from biology to business. You will meet them in textbooks, lectures and exam questions. Learn what they mean, and also how they are used in a sentence.' },
          { t: 'table', caption: 'Key academic words', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['analyse', 'to examine something in detail in order to understand it'],
            ['approach', 'a way of dealing with a problem or a question'],
            ['evidence', 'facts or information that show that something is true'],
            ['significant', 'large or important enough to have an effect or to be noticed'],
            ['assume', 'to believe that something is true without proof'],
            ['factor', 'one of the things that influence a result'],
            ['concept', 'a general idea or principle'],
            ['data', 'facts and numbers that are collected for study'],
          ] },
        ],
        [
          { t: 'text', md: 'Academic words often have fixed partners. These pairs are called **collocations**. We **conduct** research and **draw** a conclusion; another verb usually sounds wrong to an expert reader. Learn the whole phrase, not only the word.' },
          { t: 'table', caption: 'Academic collocations', explain: ['head'], quiz: true, head: ['Collocation', 'Example'], rows: [
            ['conduct research', 'The team conducted research in three secondary schools.'],
            ['carry out an experiment', 'The students carried out a simple experiment in the lab.'],
            ['draw a conclusion', 'It is too early to draw a firm conclusion.'],
            ['provide evidence', 'The results provide strong evidence for this theory.'],
            ['play a role', 'Diet plays an important role in health.'],
            ['raise a question', 'This finding raises an important question.'],
            ['a key factor', 'Cost was a key factor in the decision.'],
            ['a significant difference', 'There was no significant difference between the two groups.'],
          ] },
          { t: 'tip', art: 'owl', md: '*Research* is uncountable: say *some research* or *a study*, never *a research*. *Data* was traditionally plural (*the data are*), but *the data is* is now common in many subjects. Check which form your department prefers.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each word with its meaning.', pairs: [
            ['analyse', 'to examine in detail'],
            ['evidence', 'facts that show something is true'],
            ['assume', 'to believe without proof'],
            ['factor', 'one thing that influences a result'],
            ['concept', 'a general idea'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the word that completes the collocation.', items: [
            { q: 'The researchers ___ a survey of five hundred students.', o: ['conducted', 'raised', 'drew'], why: 'We *conduct* a survey or research: we organise it and carry it out.' },
            { q: 'It is too early to ___ any conclusions from these results.', o: ['draw', 'do', 'take'], why: 'We *draw* a conclusion. *Reach* a conclusion is also correct.' },
            { q: 'Social media plays an important ___ in how young people get the news.', o: ['role', 'factor', 'function'], why: 'The fixed phrase is *play a role*. *Play a part* means the same.' },
            { q: 'This result ___ an interesting question about the method.', o: ['raises', 'rises', 'arises'], why: '*Raise* takes an object: *raise a question*. *Rise* and *arise* do not take an object.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
            { q: 'The results ___ clear evidence that the new method works.', a: ['provide', 'give', 'offer'], why: 'We *provide* evidence. *Give* and *offer* are also possible.' },
            { q: 'Price was a key ___ in the customers’ choice.', a: ['factor'], why: '*A key factor*: one of the most important things that influenced the result.' },
            { q: 'There was no significant ___ between the two groups.', a: ['difference'], why: '*A significant difference between* A and B is a common phrase in research reports.' },
            { q: 'The students carried ___ an experiment to test their idea.', a: ['out'], why: '*Carry out* an experiment: do it.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Each sentence has one wrong verb. Tap it.', items: [
            { s: 'The team [made] research in four hospitals.', why: 'We *conduct* or *carry out* research, not *make* it.' },
            { s: 'Age [made] an important role in the results.', why: 'The collocation is *play a role*: *Age played an important role*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Nominal style and formal register',
      about: 'Turn verbs into nouns and choose formal words, as academic writers do.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'In everyday speech we use a lot of verbs: *prices rose quickly*. Academic writing often uses **nouns** instead: *the rapid rise in prices*. This is called **nominal style**. It puts more information into one sentence and sounds more objective, because the person who did the action is often not mentioned.' },
          { t: 'examples', items: [
            { s: 'The **rapid rise** in prices worried the government.', n: 'From *Prices rose rapidly*. The verb *rise* becomes a noun, and the adverb *rapidly* becomes the adjective *rapid*.' },
            { s: 'The **introduction** of new rules led to fewer accidents.', n: 'From *They introduced new rules, and this led to…*. We do not need to say who introduced them.' },
            { s: 'There has been a **significant improvement** in exam results.', n: 'From *Exam results have improved significantly*.' },
            { s: 'The **failure** of the project was due to a lack of funding.', n: 'From *The project failed because there was not enough money*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'When a verb becomes a noun, its adverb becomes an adjective: *grow rapidly* becomes *rapid growth*, and *decline slightly* becomes *a slight decline*.' },
        ],
        [
          { t: 'text', md: 'Formal register also means choosing formal words. Many phrasal verbs have a one-word equivalent that sounds more academic. Avoid contractions (*do not*, not *don’t*), *you* for people in general, and vague words such as *things*, *stuff*, *a lot of* and *really*.' },
          { t: 'table', caption: 'Everyday and formal', explain: ['head'], quiz: true, head: ['Everyday', 'Formal'], rows: [
            ['find out', 'discover'],
            ['look into', 'investigate'],
            ['go up', 'increase'],
            ['cut down on', 'reduce'],
            ['set up', 'establish'],
            ['get rid of', 'eliminate'],
            ['a lot of', 'a large number of / a great deal of'],
          ] },
          { t: 'tip', art: 'owl', md: 'Phrasal verbs are not forbidden in academic writing. Some, like *carry out* and *point out*, are very common. Use the one-word verb when there is a natural one.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each phrasal verb with its formal equivalent.', pairs: [
            ['find out', 'discover'],
            ['look into', 'investigate'],
            ['cut down on', 'reduce'],
            ['set up', 'establish'],
            ['get rid of', 'eliminate'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Which sentence is the most suitable for an academic essay?', items: [
            { q: '', o: ['Governments should reduce the number of cars in city centres.', 'Governments should cut down on cars in city centres, I think.', 'They really need to get rid of loads of cars in cities.'], why: 'One formal verb (*reduce*), no personal comment, no vague or informal words like *loads of*.' },
            { q: '', o: ['Researchers investigated the causes of the decline.', 'Researchers looked into why things went down.', 'Researchers have looked into the stuff that made it go down.'], why: '*Investigated* and the noun *decline* are precise. *Things* and *stuff* are too vague.' },
            { q: '', o: ['This approach does not work in every situation.', 'This approach doesn’t work in every situation.', 'This way of doing things doesn’t always work, you know.'], why: 'Academic writing avoids contractions: *does not*, not *doesn’t*.' },
            { q: '', o: ['A large number of students live with their parents.', 'Loads of students live with their parents.', 'A lot of students live with their mum and dad.'], why: '*A large number of* is the formal choice. *Loads of*, *a lot of* and *mum and dad* are informal.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the noun form of the verb in brackets.', items: [
            { q: 'The ___ (develop) of a new medicine can take many years.', a: ['development'], why: '*Develop* becomes *development*.' },
            { q: 'The ___ (decide) to close the library was unpopular.', a: ['decision'], why: '*Decide* becomes *decision*.' },
            { q: 'There has been a steady ___ (grow) in online sales.', a: ['growth'], why: '*Grow* becomes *growth*; *steadily* becomes the adjective *steady*.' },
            { q: 'The ___ (fail) of the first experiment surprised the team.', a: ['failure'], why: '*Fail* becomes *failure*.' },
            { q: 'The ___ (analyse) of the data took three months.', a: ['analysis'], why: '*Analyse* becomes *analysis*. The plural is *analyses*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'The rapid growth of cities causes problems.', why: 'Nominal style: *the rapid growth of cities* is the subject of the sentence.' },
            { a: 'The decision was based on careful analysis.', why: 'Two nouns from verbs: *decision* and *analysis*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Scarcity and choice',
      about: 'Read an extract from an introductory economics textbook and notice its academic language.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'Chapter 1: Scarcity and choice', md: 'Economics is often defined as the study of how people make choices under conditions of scarcity. Scarcity does not mean that a resource is rare. It means that the resources available to an individual, a firm or a society are limited, while human wants are not. Time, money, land and labour are all scarce in this sense.\n\nBecause resources are scarce, every decision involves a trade-off. A government that increases spending on hospitals has less money for schools or roads, unless it raises taxes or borrows. A student who spends an evening working in a café gives up the opportunity to study or to rest.\n\nEconomists use the concept of opportunity cost to analyse such decisions. The opportunity cost of a choice is the value of the best alternative that is given up. It is important to note that this is not the same as the price. The opportunity cost of going to university, for example, includes not only tuition fees but also the income that a student could have earned by working instead.\n\nThis approach has a significant advantage: it makes hidden costs visible. However, it is based on an assumption that is not always realistic, namely that people have enough information to compare their alternatives. In practice, a lack of information is a key factor in many poor decisions.\n\nIn the chapters that follow, we will examine how individuals, firms and governments respond to scarcity, and we will consider the evidence for and against the idea that people generally make rational choices.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'According to the text, scarcity means that a resource is rare.', a: 'f', why: 'The text says scarcity *does not mean that a resource is rare*; it means resources are limited.' },
            { q: 'Opportunity cost and price are the same thing.', a: 'f', why: '*It is important to note that this is not the same as the price.*' },
            { q: 'The opportunity cost of university includes money a student could have earned.', a: 't', why: 'It includes *the income that a student could have earned by working instead*.' },
            { q: 'The text says that a lack of information can lead to poor decisions.', a: 't', why: '*A lack of information is a key factor in many poor decisions.*' },
            { q: 'The author believes that most people make rational choices.', a: 'ng', why: 'The author will consider the evidence *for and against* this idea, but does not give an opinion.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language in the extract.', items: [
            { q: 'In the text, a *trade-off* is…', o: ['a situation where you gain one thing but lose another', 'an agreement to buy and sell goods', 'a reduction in taxes'], why: 'More money for hospitals means less for schools: you gain one thing and lose another.' },
            { q: 'In paragraph four, *namely* introduces…', o: ['an exact description of the thing just mentioned', 'a contrast with the previous idea', 'a new example from everyday life'], why: '*Namely* tells us exactly which assumption the writer means.' },
            { q: 'Which phrase from the text is in nominal style?', o: ['a lack of information', 'people make choices', 'it raises taxes'], why: '*A lack of information* uses nouns. The other phrases use a subject and a verb.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the noun that is formed from a verb.', items: [
            { s: 'However, it is based on an [assumption] that is not always realistic.', why: '*Assumption* comes from the verb *assume*.' },
            { s: 'A government that increases [spending] on hospitals has less money for schools.', why: '*Spending* comes from the verb *spend*. Here it is a noun: the money that a government spends.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'The team ___ research in four countries.', o: ['conducted', 'made', 'raised'], why: 'We *conduct* research.' },
      { q: 'Which verb is the best choice for an essay? Scientists ___ the problem.', o: ['investigated', 'looked into', 'checked out'], why: '*Investigate* is the one-word formal verb.' },
      { q: 'There was a ___ increase in prices.', o: ['significant', 'significantly', 'signify'], why: 'An adjective describes the noun *increase*.' },
      { q: 'The ___ of the bridge took four years.', o: ['construction', 'construct', 'constructed'], why: 'Nominal style needs the noun *construction* after *the*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
      { q: 'It is difficult to ___ a clear conclusion from such a small study.', a: ['draw', 'reach'], why: 'We *draw* or *reach* a conclusion.' },
      { q: 'Education plays a key ___ in economic development.', a: ['role', 'part'], why: '*Play a role* or *play a part*.' },
      { q: 'The ___ (discover) of the new species surprised scientists.', a: ['discovery'], why: '*Discover* becomes *discovery*.' },
      { q: 'The company plans to ___ its costs. (formal verb for *cut down on*)', a: ['reduce', 'lower'], why: '*Reduce* is the formal equivalent of *cut down on*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match each everyday phrase with its formal equivalent.', pairs: [
      ['go up', 'increase'],
      ['find out', 'discover'],
      ['look into', 'investigate'],
      ['set up', 'establish'],
    ] },
  ],
};
