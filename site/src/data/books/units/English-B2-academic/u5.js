// English B2 for study and exams, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Sources and research',
  goal: 'Use sources well: report what they say, quote and cite them correctly, and avoid plagiarism.',
  art: 'cat',
  tags: { skills: ['writing', 'grammar', 'reading'], topics: ['reporting-verbs', 'citation', 'quotation', 'plagiarism', 'research-report'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Reporting verbs: argue, claim, suggest',
      about: 'Choose the right verb to report what a source says, and use it with the right grammar.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'When you write about a source, the **reporting verb** tells the reader what the source does: does it simply say something, put an idea forward carefully, or give strong reasons? Some verbs also show your own attitude. *Claim*, for example, can suggest that you are not sure the source is right.' },
          { t: 'table', caption: 'Reporting verbs', explain: ['head', 'col1'], quiz: true, head: ['Verb', 'What it shows'], rows: [
            ['state', 'the source says something clearly and directly'],
            ['describe', 'the source gives details of something'],
            ['suggest', 'the source puts an idea forward carefully'],
            ['argue', 'the source gives reasons for a position'],
            ['claim', 'the source says something is true, but it may not be'],
            ['demonstrate', 'the source shows something clearly, with evidence'],
            ['question', 'the source doubts that something is true'],
            ['acknowledge', 'the source accepts a point, often one against its own position'],
          ] },
        ],
        [
          { t: 'text', md: 'Reporting verbs follow different patterns. Most are followed by *that* + a clause, but some take a direct object. Use the **present simple** to report what a text says, the **present perfect** for research in general up to now, and the **past simple** for one study at a time in the past.' },
          { t: 'examples', items: [
            { s: 'Khan (2022) **argues that** cities should ban cars from their centres.', n: '*Argue*, *claim*, *state* and *suggest* can all be followed by *that*.' },
            { s: 'The report **describes** the problem in detail.', n: '*Describe* takes an object. We never say *describes that*.' },
            { s: 'Rossi **suggests reducing** class sizes.', n: '*Suggest* + *-ing* or + *that*. We never say *suggest to reduce*.' },
            { s: 'Several studies **have shown** that sleep affects memory.', n: 'Present perfect: research in general, up to now.' },
            { s: 'In a 2019 study, Wong **found** that older drivers were more careful.', n: 'Past simple: one study, finished in the past.' },
          ] },
          { t: 'tip', art: 'owl', md: '*Argue* in academic English has nothing to do with anger: it means *give reasons for a position*. And *discuss* takes an object directly: *Garcia discusses the problem*, not *discusses about the problem*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the description and choose the best reporting verb.', items: [
            { q: 'The writer gives reasons for her position. Lopez ___ that tourism should be taxed.', o: ['argues', 'describes', 'questions'], why: '*Argue that*: give reasons for a position. *Describe* and *question* take an object, not *that*.' },
            { q: 'You are not sure the source is right. The company ___ that its product is completely safe.', o: ['claims', 'demonstrates', 'acknowledges'], why: '*Claim* shows that the statement may not be true. *Demonstrate* would mean it has been shown with evidence.' },
            { q: 'The source puts an idea forward carefully. The authors ___ that the effect may be temporary.', o: ['suggest', 'insist', 'prove'], why: '*Suggest* is tentative, which matches *may*.' },
            { q: 'The source accepts a weakness in its own study. Ferreira ___ that the sample was small.', o: ['acknowledges', 'argues', 'denies'], why: '*Acknowledge* means accept a point, often one against yourself.' },
            { q: 'The evidence shows something clearly. The experiment ___ that the new drug reduces pain.', o: ['demonstrates', 'claims', 'wonders'], why: '*Demonstrate*: show clearly, with evidence.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the correct form of the verb in brackets.', items: [
            { q: 'The author suggests ___ (introduce) a tax on sugary drinks.', a: ['introducing'], why: '*Suggest* + *-ing*.' },
            { q: 'Several studies have ___ (show) that exercise improves mood.', a: ['shown'], why: 'Present perfect for research up to now: *have shown*.' },
            { q: 'In 2018, Nakamura ___ (find) that students slept less during exams.', a: ['found'], why: 'Past simple for one study at a past time.' },
            { q: 'The report ___ (describe) the situation in rural schools.', a: ['describes'], why: 'Present simple to report what a text says, with a direct object.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Each sentence has a mistake in the reporting verb pattern. Tap it.', items: [
            { s: 'The article [describes that] the city has changed a great deal.', why: '*Describe* takes an object: *describes how the city has changed* or *describes the changes*.' },
            { s: 'The authors suggest [to reduce] the number of exams.', why: '*Suggest* + *-ing*: *suggest reducing*.' },
            { s: 'Garcia [discusses about] the problem of plastic waste.', why: '*Discuss* takes a direct object: *discusses the problem*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Quoting, citing and paraphrasing responsibly',
      about: 'Show where your ideas come from, and avoid plagiarism.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'In academic work, you must show where every idea and every phrase that is not your own comes from. This is called **citing** a source. Using someone else’s words or ideas without citing them is **plagiarism**. Universities treat it as a serious offence, even when it is not deliberate.' },
          { t: 'table', caption: 'Three ways to use a source', explain: ['head', 'col0', 'col1', 'col2'], head: ['', 'What you do', 'When to use it'], rows: [
            ['quote', 'copy the exact words in quotation marks, with the author, year and page', 'when the exact wording matters, for example a definition'],
            ['paraphrase', 'give one idea in your own words and cite the source', 'most of the time, to show that you have understood the source'],
            ['summarise', 'give the main points of a longer text in your own words and cite it', 'when you need only the general idea of a source'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'Okoro (2021) argues that “cities are designed for cars, not people” (p. 14).', n: 'A quotation: the exact words in quotation marks, with the author, the year and the page.' },
            { s: 'In Okoro’s view, cities have been planned mainly around traffic (Okoro, 2021).', n: 'A paraphrase: the writer’s own words, but the idea is still cited.' },
            { s: 'Cities are designed for cars, not people.', n: 'If these are Okoro’s exact words and there is no citation, this is plagiarism.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Universities use different referencing styles, such as Harvard or APA, so check the guide for your course. Common knowledge, such as *Paris is the capital of France*, does not need a citation. And do not quote too much: most of an essay should be in your own words.' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: 'If you paraphrase an idea in your own words, you do not need to cite the source.', a: 'f', why: 'The idea still belongs to the source, so you must cite it.' },
            { q: 'A direct quotation needs quotation marks.', a: 't', why: 'Quotation marks show that the words are exactly the source’s.' },
            { q: 'Copying a sentence without a citation can be plagiarism even if you did not mean to cheat.', a: 't', why: 'Plagiarism does not have to be deliberate.' },
            { q: 'A well-known fact, such as that the Earth goes round the Sun, usually needs a citation.', a: 'f', why: 'Common knowledge usually does not need a citation.' },
            { q: 'A good essay is made up mostly of quotations.', a: 'f', why: 'Most of an essay should be in your own words. Quote only when the exact words matter.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Source (Mendes, 2020, p. 8): “Young people today read more than ever, but they read differently.” Choose the best answer.', items: [
            { q: 'Which use of the source is acceptable?', o: ['Mendes (2020) argues that young people read a great deal, although not in the same way as before.', 'Young people today read more than ever, but they read differently.', 'Young people read a great deal, although not in the same way as before.'], why: 'The first is a paraphrase with a citation. The second copies the words without a citation; the third paraphrases without a citation.' },
            { q: 'Which quotation is correctly cited?', o: ['Mendes claims that young people “read more than ever, but they read differently” (2020, p. 8).', 'Mendes claims that young people read more than ever, but they read differently.', 'Mendes claims that young people “read more than ever, but they read differently”.'], why: 'Exact words need quotation marks, the year and the page. The second has no quotation marks; the third has no year or page.' },
            { q: 'Which sentence needs a citation?', o: ['Students who work part-time get lower marks on average.', 'London is the capital of the United Kingdom.', 'In this essay, I will discuss part-time work.'], why: 'A research finding needs a source. The second is common knowledge; the third is the writer’s own plan.' },
            { q: 'You have paraphrased a source. What else do you need to do?', o: ['cite the author and the year', 'put the paraphrase in quotation marks', 'nothing, because the words are now your own'], why: 'A paraphrase uses your words but someone else’s idea, so it needs a citation, not quotation marks.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Okoro (2021) argues that cities need more parks.', why: 'Author + year + reporting verb + *that*.' },
            { a: 'Every quotation needs a page number.', why: 'A quotation gives the exact page where the words appear.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A short research report',
      about: 'Read a student research report and see how it uses sources and reports results.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'reading', title: 'Where do students prefer to study?', md: '**Introduction**\n\nMany universities are investing in new study spaces, but little is known about where students actually choose to work. A previous survey at the same college (Adeyemi, 2024) suggested that most students preferred to study at home. This report examines whether that is still the case, and why.\n\n**Method**\n\nAn online questionnaire was sent to first-year students in three departments, and 120 students responded. They were asked where they usually studied, how long they spent there and what made a place suitable for study. Eight students were also interviewed.\n\n**Results**\n\nJust over half of the respondents (52%) said that they usually studied in the library, while 35% preferred to work at home and the rest used cafés or other spaces. The most important factors were quiet, mentioned by 71% of respondents, and a reliable internet connection (64%). Several interviewees described home as “full of distractions”, whereas others valued not having to travel.\n\n**Discussion**\n\nThese findings contrast with those of Adeyemi (2024), who reported that most students studied at home. One possible explanation is that the library was renovated last year. However, the sample was relatively small and came from only three departments, so the results may not apply to all students. Further research could compare different year groups.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The earlier survey found that most students preferred the library.', a: 'f', why: 'It *suggested that most students preferred to study at home*.' },
            { q: 'More than half of the students in the new survey usually studied in the library.', a: 't', why: '*Just over half of the respondents (52%)*.' },
            { q: 'Most respondents said that quiet was important.', a: 't', why: 'Quiet was *mentioned by 71% of respondents*.' },
            { q: 'Students who worked in the library studied for longer than students at home.', a: 'ng', why: 'Students were asked how long they spent there, but the report does not compare the times.' },
            { q: 'The writer believes the results apply to all students at the college.', a: 'f', why: '*The results may not apply to all students.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at how the report uses sources and language.', items: [
            { q: 'Why does the writer add “(Adeyemi, 2024)”?', o: ['to show where the information about the earlier survey comes from', 'to name a student who took part in the survey', 'to give the date of the new questionnaire'], why: 'Author and year in brackets: an in-text citation.' },
            { q: 'Which verb shows that the earlier result was not certain?', o: ['suggested', 'examines', 'interviewed'], why: '*Suggest* is a tentative reporting verb.' },
            { q: 'Why are the words “full of distractions” in quotation marks?', o: ['They are the exact words of some interviewees.', 'They are a technical term.', 'They come from Adeyemi’s survey.'], why: 'Quotation marks show someone’s exact words; here, the students who were interviewed.' },
            { q: 'What does the writer do in the Discussion?', o: ['compares the results with earlier research and notes a weakness of the study', 'explains how the questionnaire was sent', 'lists every answer that the students gave'], why: 'It compares the findings with Adeyemi (2024) and admits that the sample was small.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the reporting verb.', items: [
            { s: 'Several interviewees [described] home as “full of distractions”.', why: '*Describe* + object + *as*: report how someone sees something.' },
            { s: 'These findings contrast with those of Adeyemi (2024), who [reported] that most students studied at home.', why: '*Reported* introduces what the earlier study found.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'You doubt the source. The company ___ that its prices are the lowest in the country.', o: ['claims', 'demonstrates', 'acknowledges'], why: '*Claim* shows that it may not be true.' },
      { q: 'Using someone’s ideas without citing them is called ___.', o: ['plagiarism', 'paraphrasing', 'summarising'], why: 'Taking ideas or words without a citation is plagiarism.' },
      { q: 'The researchers suggest ___ more cycle lanes.', o: ['building', 'to build', 'build'], why: '*Suggest* + *-ing*.' },
      { q: 'When should you use a direct quotation?', o: ['when the exact words matter', 'every time you use a source', 'when you do not understand the source'], why: 'Quote when the wording itself is important; otherwise paraphrase.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
      { q: 'Several studies have ___ (show) that noise affects concentration.', a: ['shown'], why: 'Present perfect: *have shown*.' },
      { q: 'In 2015, Ali ___ (find) that the method worked.', a: ['found'], why: 'Past simple for one study in the past.' },
      { q: 'The report ___ (examine) the problem of food waste in schools.', a: ['examines'], why: 'Present simple to report what a text does.' },
      { q: 'The author ___ that her sample was small. (= accepts a weakness)', a: ['acknowledges', 'admits', 'accepts', 'recognises', 'recognizes'], why: '*Acknowledge* means accept a point against yourself.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'You must cite a source when you paraphrase it.', a: 't', why: 'The idea still comes from the source.' },
      { q: 'Common knowledge always needs a citation.', a: 'f', why: 'Common knowledge usually needs no citation.' },
    ] },
    { t: 'ex', kind: 'spot', h: 'Each sentence has a mistake in the reporting verb pattern. Tap it.', items: [
      { s: 'The study [discusses about] the effects of noise.', why: '*Discuss* takes a direct object.' },
      { s: 'Kim suggests [to change] the timetable.', why: '*Suggest* + *-ing*: *suggests changing*.' },
    ] },
  ],
};
