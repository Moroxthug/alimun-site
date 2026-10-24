// English B2, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Media and opinion',
  goal: 'Report what people said precisely and write a clear opinion.',
  art: 'parrot',
  tags: { skills: ['grammar', 'writing', 'reading'], topics: ['reporting-verbs', 'discourse-markers', 'hedging', 'media', 'opinion'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'He denied it',
      about: 'Report what people said with reporting verbs, each with its own pattern.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'In reported speech, *say* and *tell* only give the words. **Reporting verbs** also show the purpose of the words: was it a promise, a warning, an apology? Each verb has its own pattern, so learn the verb and its pattern together.' },
          { t: 'examples', items: [
            { s: '“I’ll call you tomorrow.” → He **promised to call** me the next day.', n: '*Promise* + *to* + infinitive.' },
            { s: '“Don’t touch the wire!” → She **warned** us **not to touch** the wire.', n: '*Warn* + person + *not to* + infinitive.' },
            { s: '“I didn’t read the message.” → He **denied reading** the message.', n: '*Deny* + *-ing*.' },
            { s: '“You lied to us!” → They **accused** him **of lying** to them.', n: '*Accuse* + person + *of* + *-ing*.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Reporting verbs and their patterns', explain: ['head', 'col0'], quiz: true, head: ['Pattern', 'Verbs', 'Example'], rows: [
            ['verb + *to* + infinitive', 'agree, offer, promise, refuse, threaten', 'She **refused to sign** the contract.'],
            ['verb + person + *to* + infinitive', 'advise, encourage, persuade, remind, warn', 'He **reminded me to lock** the door.'],
            ['verb + *-ing*', 'admit, deny, recommend, suggest', 'They **admitted making** a mistake.'],
            ['verb + preposition + *-ing*', 'apologise for, insist on', 'She **apologised for being** late.'],
            ['verb + person + preposition + *-ing*', 'accuse of, blame for, congratulate on', 'He **accused me of taking** his pen.'],
          ] },
          { t: 'tip', art: 'owl', md: '*Suggest* never takes a person + *to*. Say *She suggested going* or *She suggested that we (should) go*, not *She suggested us to go*. Many of these verbs can also take a *that* clause: *He admitted that he was wrong.*' },
          { t: 'text', md: 'With *deny* and *admit*, the simple *-ing* form is enough, even for the past: *He denied taking the money*. *He denied having taken the money* is also correct, but more formal.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct verb or form.', items: [
            { q: 'My boss ___ me to apply for the manager’s job.', o: ['encouraged', 'suggested', 'insisted'], why: '*Encourage* + person + *to* + infinitive. *Suggest* and *insist* cannot take this pattern.' },
            { q: 'The minister denied ___ the report before it was published.', o: ['seeing', 'to see', 'that see'], why: '*Deny* + *-ing*.' },
            { q: 'Sofia offered ___ me to the station.', o: ['to drive', 'driving', 'for driving'], why: '*Offer* + *to* + infinitive.' },
            { q: 'The guide warned us ___ swim after dark.', o: ['not to', 'don’t', 'not'], why: '*Warn* + person + *not to* + infinitive.' },
            { q: 'He apologised ___ the meeting.', o: ['for missing', 'to miss', 'missing'], why: '*Apologise for* + *-ing*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Report the words. Use the verb in brackets in the correct form.', items: [
            { q: '“I didn’t take your charger.” He denied ___ (take) my charger.', a: ['taking', 'having taken'], why: '*Deny* + *-ing*.' },
            { q: '“Let’s order pizza.” She suggested ___ (order) pizza.', a: ['ordering'], why: '*Suggest* + *-ing* when the speaker is part of the plan.' },
            { q: '“I won’t work this weekend.” Leila refused ___ (work) that weekend.', a: ['to work'], why: '*Refuse* + *to* + infinitive. Notice *this weekend* becomes *that weekend*.' },
            { q: '“Don’t forget to send the invoice.” Ana reminded me ___ (send) the invoice.', a: ['to send'], why: '*Remind* + person + *to* + infinitive.' },
            { q: '“You broke the printer!” My colleague accused me of ___ (break) the printer.', a: ['breaking', 'having broken'], why: '*Accuse* + person + *of* + *-ing*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the words to the reporting verb that describes them.', pairs: [
            ['“I’m sorry I shouted.”', 'apologise'],
            ['“Yes, it was me. I broke it.”', 'admit'],
            ['“If you do that again, I’ll call the police!”', 'threaten'],
            ['“Be careful: the road is icy.”', 'warn'],
            ['“I’ll definitely be there on time.”', 'promise'],
            ['“Shall I carry that for you?”', 'offer'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Linking your ideas',
      about: 'Use discourse markers to add points, contrast them, give results and give your opinion.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: '**Discourse markers** guide the reader through your argument. They show how one idea connects to the next: you are adding a point, contrasting two points, giving a result or giving your opinion.' },
          { t: 'table', caption: 'Discourse markers', explain: ['head', 'col0'], quiz: true, head: ['Function', 'Markers'], rows: [
            ['adding a point', 'what is more, in addition, moreover, furthermore'],
            ['contrast', 'however, on the other hand, nevertheless, although, despite'],
            ['result', 'as a result, therefore, consequently'],
            ['giving your opinion', 'in my view, personally, as far as I am concerned'],
          ] },
        ],
        [
          { t: 'text', md: '*However*, *what is more*, *as a result* and *on the other hand* usually start a new sentence and are followed by a comma. *Although* joins two clauses in one sentence. *Despite* is followed by a noun or an *-ing* form, not by a clause.' },
          { t: 'examples', items: [
            { s: 'The app is free. **However**, it collects a lot of personal data.', n: 'Two sentences. *However* starts the second one.' },
            { s: '**Although** the app is free, it collects a lot of personal data.', n: 'One sentence with two clauses.' },
            { s: '**Despite** being free, the app collects a lot of personal data.', n: '*Despite* + *-ing*. *Despite the price* is also possible.' },
            { s: 'The paper cut its staff. **As a result**, there were fewer local stories.', n: 'The second sentence is the result of the first.' },
          ] },
          { t: 'tip', art: 'owl', md: '*On the other hand* introduces the other side of an argument. Use it to compare two sides, not just to add another point. You can start the first side with *On the one hand*, but never use *on the one hand* without the other half.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best discourse marker.', items: [
            { q: 'The article was well researched. ___, it was far too long for most readers.', o: ['However', 'What is more', 'As a result'], why: 'The second idea contrasts with the first.' },
            { q: 'Social media spreads news quickly. ___, it allows ordinary people to report events.', o: ['What is more', 'However', 'Nevertheless'], why: 'Both points are on the same side: we add a second advantage.' },
            { q: 'The radio station lost most of its advertisers. ___, it had to close.', o: ['As a result', 'On the other hand', 'In addition'], why: 'Closing was the result of losing advertisers.' },
            { q: '___ the bad weather, thousands of people came to the protest.', o: ['Despite', 'Although', 'However'], why: 'A noun follows (*the bad weather*), so *despite*.' },
            { q: '___ the story was not true, it was shared thousands of times.', o: ['Although', 'Despite', 'Moreover'], why: 'A full clause follows (*the story was not true*), so *although*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the discourse marker that shows a contrast.', items: [
            { s: 'Many people read the news online. [Nevertheless], printed newspapers still have loyal readers.', why: '*Nevertheless* means “but even so”.' },
            { s: 'Online news is fast and, in addition, it is usually free. [On the other hand], it is not always checked carefully.', why: '*In addition* adds a point. *On the other hand* gives the other side.' },
            { s: 'In my view, comments under articles are useful, [although] many of them are rude.', why: '*In my view* gives an opinion. *Although* introduces the contrast.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'However, nobody believed the story.', why: '*However* starts the sentence and is followed by a comma.' },
            { a: 'As a result, many journalists lost their jobs.', why: '*As a result* is a fixed phrase, followed by a comma.' },
            { a: 'Despite the rain, the concert went ahead.', why: '*Despite* + noun, then a comma and the main clause.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Fact or opinion?',
      about: 'Use hedging language to make careful claims.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'Good writers keep facts and opinions apart. When a claim is not certain, or when you want to sound less direct, use **hedging language**. It makes a statement softer and more careful, and it makes your writing harder to argue against.' },
          { t: 'examples', items: [
            { s: 'Young people **tend to** get their news from videos.', n: 'In general, but not always.' },
            { s: '**It seems that** fewer people trust television news.', n: 'The writer is not completely sure.' },
            { s: 'The new rules **may** reduce the number of false stories.', n: 'Possible, not certain. *Might* and *could* are similar.' },
            { s: 'This is **arguably** the most important story of the year.', n: '*Arguably*: there are good reasons for this opinion, but other people may disagree.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Hedging language', explain: ['head'], quiz: true, head: ['Expression', 'Example'], rows: [
            ['it seems that / it appears that', 'It appears that the photo was edited.'],
            ['seem to / appear to', 'The figures seem to be wrong.'],
            ['tend to', 'Headlines tend to exaggerate.'],
            ['be likely to / be unlikely to', 'The story is likely to change.'],
            ['arguably / probably / possibly', 'It is probably the best podcast on the topic.'],
            ['to some extent', 'To some extent, we are all responsible.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Do not hedge everything: too many hedges make you sound unsure. Hedge claims about the future, about causes and about large groups of people. State clear facts directly: *The article was published on Monday.*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the more careful, hedged sentence.', items: [
            { q: '', o: ['Online news tends to be shorter than printed news.', 'Online news is always shorter than printed news.', 'Online news is shorter than printed news in every case.'], why: '*Tends to* means “usually”, so the claim is careful.' },
            { q: '', o: ['It seems that the photo was taken years ago.', 'The photo was definitely taken years ago.', 'Everybody knows the photo was taken years ago.'], why: '*It seems that* shows the writer is not completely sure.' },
            { q: '', o: ['The new law is likely to affect small newspapers.', 'The new law will destroy small newspapers.', 'The new law is certain to affect small newspapers.'], why: '*Is likely to* is a careful prediction about the future.' },
            { q: '', o: ['To some extent, social media has changed how we read.', 'Social media has completely changed everything about how we read.', 'Social media is the only reason we read differently.'], why: '*To some extent* means “partly”, not completely.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Is the sentence hedged? True or false?', items: [
            { q: 'The programme starts at nine.', a: 'f', why: 'A clear fact, stated directly. No hedging is needed.' },
            { q: 'Critics appear to have liked the series.', a: 't', why: '*Appear to* makes the claim less certain.' },
            { q: 'Readers are likely to lose interest in long articles.', a: 't', why: '*Are likely to* is a hedge.' },
            { q: 'This is the worst newspaper in the country.', a: 'f', why: 'A strong opinion stated as if it were a fact.' },
            { q: 'Local news arguably matters more than national news.', a: 't', why: '*Arguably* shows that this is an opinion others may not share.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with one word: tend, seems, likely, arguably or extent.', items: [
            { q: 'People ___ to believe stories that match their own views.', a: ['tend'], why: '*Tend to* + infinitive: this is usually true.' },
            { q: 'It ___ that the interview was shorter than planned.', a: ['seems', 'appears'], why: '*It seems that* + clause.' },
            { q: 'Prices are ___ to rise again next year.', a: ['likely'], why: '*Be likely to* + infinitive for a probable future.' },
            { q: 'This is ___ the best film she has made.', a: ['arguably', 'probably', 'possibly'], why: '*Arguably* before *the best*: an opinion you can support with reasons.' },
            { q: 'To some ___, the critics were right.', a: ['extent'], why: '*To some extent* means “partly”.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Should news be free?',
      about: 'Read two opinion pieces on the same question and compare the arguments.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'News for everyone', md: 'by Nadia Okafor\n\nInformation about our towns, our health and our governments is not a luxury. In my view, it should be available to everyone, not just to people who can afford several subscriptions. When the most careful reporting is hidden behind a paywall, many readers turn to free sources that tend to be less reliable. As a result, false stories may spread faster than the truth.\n\nOf course, journalists need to be paid. However, there are other ways to fund news: advertising, donations from readers who can afford them, or support from charities. What is more, free news reaches more people, and a story that nobody reads cannot change anything.' },
        ],
        [
          { t: 'reading', title: 'Good journalism has a price', md: 'by Tomás Reyes\n\nWe pay for coffee, music and films without complaining, yet many of us expect news to cost nothing. Reporting is expensive. A reporter who spends three months investigating a hospital, a factory or a town council has to be paid for all that time, and advertising alone rarely covers it.\n\nFree websites, on the other hand, often depend on clicks, so they are arguably tempted to publish whatever attracts attention quickly. Subscriptions let editors focus on quality rather than on clicks. Nevertheless, I accept that price is a real problem for many readers. Newspapers could offer cheap student rates, or allow a few free articles every month. Paying for news is not perfect, but it seems to be the most honest model we have.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Nadia thinks news should be paid for only by advertising.', a: 'f', why: 'She lists advertising, donations and support from charities.' },
            { q: 'Nadia believes paywalls can push readers towards less reliable sources.', a: 't', why: '“Many readers turn to free sources that tend to be less reliable.”' },
            { q: 'Tomás says advertising usually pays for long investigations.', a: 'f', why: 'He says advertising alone rarely covers it.' },
            { q: 'Tomás has worked as an investigative reporter.', a: 'ng', why: 'He describes the work, but he does not say he has done it.' },
            { q: 'Tomás suggests cheaper prices for students.', a: 't', why: '“Newspapers could offer cheap student rates.”' },
            { q: 'Both writers agree that journalists should be paid.', a: 't', why: 'Nadia writes “Of course, journalists need to be paid.” Tomás’s whole argument is about paying for reporting.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language in the texts.', items: [
            { q: 'In Tomás’s text, what does *on the other hand* introduce?', o: ['A contrast between free websites and paid reporting', 'An extra reason why reporting is expensive', 'The result of paying for coffee and music'], why: 'After explaining why paid reporting works, he turns to free websites.' },
            { q: '“False stories may spread faster than the truth.” Why does Nadia use *may*?', o: ['She is not completely certain, so she hedges.', 'She is giving permission.', 'She is talking about the past.'], why: '*May* makes the claim possible, not certain.' },
            { q: 'Which sentence best reports what Tomás says about price?', o: ['He admits that price is a problem for many readers.', 'He denies that price is a problem for readers.', 'He refuses to discuss the price of news.'], why: '“I accept that price is a real problem”: he admits a point from the other side.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'She admitted ___ the wrong figures.', o: ['using', 'to use', 'use'], why: '*Admit* + *-ing*.' },
      { q: 'My doctor advised me ___ less coffee.', o: ['to drink', 'drinking', 'drink'], why: '*Advise* + person + *to* + infinitive.' },
      { q: 'He suggested ___ the meeting until Friday.', o: ['postponing', 'to postpone', 'us to postpone'], why: '*Suggest* + *-ing*. Never *suggest* + person + *to*.' },
      { q: 'The report was very long. ___, very few people read it to the end.', o: ['As a result', 'However', 'In addition'], why: 'Few readers finished it because it was long: a result.' },
      { q: '___ the criticism, the film was a huge success.', o: ['Despite', 'Although', 'Moreover'], why: '*Despite* + noun shows a contrast.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: '“I’ll pay you back next week.” He promised ___ (pay) me back the following week.', a: ['to pay'], why: '*Promise* + *to* + infinitive.' },
      { q: '“You stole my idea!” She accused him of ___ (steal) her idea.', a: ['stealing', 'having stolen'], why: '*Accuse* + person + *of* + *-ing*.' },
      { q: 'The results ___ (seem) to be correct, but we need to check them again.', a: ['seem'], why: '*Seem to* hedges the claim: we are not sure yet.' },
      { q: 'The new app is free. What is ___, it is very easy to use.', a: ['more'], why: '*What is more* adds another point on the same side.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'Is the sentence hedged? True or false?', items: [
      { q: 'The story appears to be false.', a: 't', why: '*Appears to* makes the claim less certain.' },
      { q: 'The story is false.', a: 'f', why: 'This is stated as a certain fact.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
      { q: '', o: ['They suggested that we take a taxi.', 'They suggested us to take a taxi.', 'They suggested to take us a taxi.'], why: '*Suggest that* + clause. *Suggest* never takes person + *to*.' },
      { q: '', o: ['He apologised for being late.', 'He apologised to be late.', 'He apologised being late.'], why: '*Apologise for* + *-ing*.' },
      { q: '', o: ['Although it was raining, we went out.', 'Despite it was raining, we went out.', 'However it was raining, we went out.'], why: '*Although* + clause. *Despite* needs a noun or *-ing*.' },
    ] },
  ],
};
