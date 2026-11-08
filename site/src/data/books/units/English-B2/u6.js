// English B2, unit 6, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one speaking task, and one task in the format of B2 First.
export const UNIT = {
  id: 'u6',
  title: 'Media and opinion',
  goal: 'Report what people said with precise reporting verbs, link and balance an argument, and tell facts from opinions.',
  art: 'parrot',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing', 'speaking'], topics: ['reporting-verbs', 'discourse-markers', 'hedging', 'opinion', 'media'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'He denied it',
      about: 'Report what people said with verbs that show how they said it, each with its own pattern.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'At B1 you reported with **say**, **tell** and **ask**. They are correct, but they are flat: they tell us *that* someone spoke, not *how* or *why*. Journalists and good writers use **reporting verbs** that carry meaning. *“I didn’t take it,” he said* becomes *He **denied** taking it*. One verb replaces a whole sentence.\n\nThe difficulty is that each verb has its **own pattern**, and you have to learn the verb together with the pattern. There are five main groups.' },
          { t: 'table', caption: 'Reporting verbs and their patterns', explain: ['head', 'col0'], head: ['Pattern', 'Verbs', 'Example'], rows: [
            ['verb + to + infinitive', 'agree, refuse, offer, promise, threaten, decide', 'She refused to answer.'],
            ['verb + person + to + infinitive', 'warn, advise, tell, remind, persuade, encourage, invite', 'He warned us not to go out.'],
            ['verb + -ing', 'deny, admit, suggest, recommend, mention', 'She admitted making a mistake.'],
            ['verb + preposition + -ing', 'apologise for, insist on, complain about, object to', 'He apologised for being late.'],
            ['verb + person + preposition + -ing', 'accuse of, blame for, congratulate on, thank for', 'They accused him of lying.'],
          ] },
          { t: 'examples', items: [
            { s: '“I’ll carry your bag.” → He **offered to carry** my bag.', n: '*Offer* + *to* + infinitive.' },
            { s: '“Don’t touch the wire!” → She **warned** me **not to touch** the wire.', n: 'Negative: *not* before *to*.' },
            { s: '“I didn’t break it.” → The boy **denied breaking** it.', n: '*Deny* + *-ing*: no *not*, the verb already means *say no*.' },
            { s: '“Why don’t we take a taxi?” → She **suggested taking** a taxi.', n: '*Suggest* + *-ing*.' },
            { s: '“You cheated!” → They **accused** him **of cheating**.', n: '*Accuse* + person + *of* + *-ing*.' },
            { s: '“Well done for passing!” → My boss **congratulated** me **on passing**.', n: '*Congratulate* + person + *on* + *-ing*.' },
          ] },
          { t: 'tip', art: 'owl', md: '**Suggest** never takes a person + *to*. Say *She suggested going* or *She suggested that we (should) go*, not *She suggested us to go*. Many verbs in this table can also take a *that* clause: *He admitted that he was wrong. She promised that she would call.*' },
        ],
        [
          { t: 'text', md: 'Some reporting verbs are **neutral** (*say, explain, mention*). Others show the speaker’s **attitude**, and choosing one is already an opinion: *She **claimed** that the company had lied* suggests you are not sure she is right; *She **pointed out** that the company had lied* suggests you agree; *He **insisted** that he was innocent* shows that he said it strongly, perhaps more than once.\n\nIn the news, be careful: the reporting verb can make a story sound fair or unfair. Compare *The minister **explained** the new tax* with *The minister **admitted** the new tax*.' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['He suggested me to apply.', 'He suggested (that) I apply. / He suggested applying.', '*Suggest* has no person + *to*.'],
            ['She denied to steal the money.', 'She denied stealing the money.', '*Deny* + *-ing*.'],
            ['They accused him for lying.', 'They accused him of lying.', '*Accuse* + *of*.'],
            ['He apologised to be late.', 'He apologised for being late.', '*Apologise for* + *-ing*.'],
            ['She refused answering.', 'She refused to answer.', '*Refuse* + *to* + infinitive.'],
          ] },
          { t: 'dialogue', title: 'In the newsroom', lines: [
            { who: 'Editor', s: 'What did the mayor actually say about the bridge?' },
            { who: 'Reporter', s: 'He admitted that the work was late, but he refused to say how much it would cost.' },
            { who: 'Editor', s: 'Did anyone accuse him of hiding the figures?' },
            { who: 'Reporter', s: 'One councillor did. The mayor denied hiding anything and promised to publish the budget next week.' },
            { who: 'Editor', s: 'Then write that he promised, not that he claimed. Let’s stay fair.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the correct form.', items: [
            { q: 'She refused ___ the question.', o: ['to answer', 'answering', 'answer'], why: '*Refuse* + *to* + infinitive.' },
            { q: 'He denied ___ the window.', o: ['breaking', 'to break', 'that break'], why: '*Deny* + *-ing*.' },
            { q: 'They warned us ___ swim there.', o: ['not to', 'to not', 'don’t'], why: '*Warn* + person + *not to*.' },
            { q: 'I apologised ___ the delay.', o: ['for', 'about', 'of'], why: '*Apologise for*.' },
            { q: 'She accused her brother ___ her diary.', o: ['of reading', 'to read', 'for reading'], why: '*Accuse* + person + *of* + *-ing*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Report each sentence with the verb given.', items: [
            { q: '“I’ll help you move house,” said Jo.', cue: 'offered', a: ['Jo offered to help me move house', 'Jo offered to help me to move house'], why: '*Offer* + *to* + infinitive.' },
            { q: '“I made a mistake,” said the manager.', cue: 'admitted', a: ['The manager admitted making a mistake', 'The manager admitted that he had made a mistake', 'The manager admitted having made a mistake', 'The manager admitted that she had made a mistake'], why: '*Admit* + *-ing* or a *that* clause.' },
            { q: '“Why don’t we eat outside?” said Amy.', cue: 'suggested', a: ['Amy suggested eating outside', 'Amy suggested that we eat outside', 'Amy suggested that we should eat outside'], why: '*Suggest* + *-ing* or *that* + subject.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of the B2 First exam (Reading and Use of English Part 4): use the word given and two to five words.', items: [
            { q: '“You took my phone!” Maria said to her sister.', cue: 'ACCUSED', a: ['Maria accused her sister of taking her phone', 'Maria accused her sister of having taken her phone'], why: '*Accuse* + person + *of* + *-ing*.' },
            { q: '“I won’t pay the fine,” said the driver.', cue: 'REFUSED', a: ['The driver refused to pay the fine'], why: '*Refuse* + *to* + infinitive.' },
            { q: '“Don’t forget to lock the door,” Dad said to me.', cue: 'REMINDED', a: ['Dad reminded me to lock the door'], why: '*Remind* + person + *to* + infinitive.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Reporting verbs are among the most common answers in **Part 4**. When the key word is a reporting verb, ask yourself straight away: *to*-infinitive, *-ing*, a person, or a preposition? Then check that the second sentence keeps **who did what** exactly as in the first.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Your turn: say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'He denied taking the money.' },
            { a: 'She warned us not to go out.' },
            { a: 'They accused him of lying.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Linking your ideas',
      about: 'Use discourse markers to add, contrast, give results and sum up, so that an argument is easy to follow.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'A strong opinion is not enough: the reader has to **follow** it. **Discourse markers** are the signposts of a text. They tell the reader what is coming before it comes: another point, the other side, a result, an example, a conclusion.\n\nMost of them go at the **start** of a sentence, followed by a **comma**: *However, the plan is expensive.* Some can also go in the middle: *The plan, however, is expensive.* At B2 you should use a range of them, not *and* and *but* every time. But do not use one in every sentence: a few well-chosen markers are enough.' },
          { t: 'table', caption: 'Discourse markers by job', explain: ['head', 'col0'], head: ['Job', 'Markers', 'Example'], rows: [
            ['adding a point', 'what is more, in addition, moreover, furthermore', 'What is more, it is free.'],
            ['contrast', 'however, on the other hand, nevertheless', 'However, few people use it.'],
            ['result', 'as a result, therefore, consequently', 'As a result, prices rose.'],
            ['example', 'for instance, for example, such as', 'For instance, the library closed.'],
            ['personal view', 'in my view, personally, as far as I am concerned', 'In my view, it was a mistake.'],
            ['conclusion', 'all in all, on balance, to sum up', 'On balance, I support the idea.'],
          ] },
          { t: 'examples', items: [
            { s: 'Online news is fast. **However**, it is not always accurate.', n: 'A contrast with the sentence before.' },
            { s: 'Social media spreads stories quickly. **As a result**, false news travels far.', n: 'A result.' },
            { s: 'Local papers are closing. **What is more**, many readers have not noticed.', n: 'Adding a stronger point.' },
            { s: '**On the one hand**, adverts pay for the news; **on the other hand**, they distract readers.', n: 'Two sides, side by side.' },
            { s: '**On balance**, I think a small fee is fair.', n: 'A conclusion after weighing both sides.' },
          ] },
          { t: 'tip', art: 'owl', md: '**On the other hand** introduces the other side of an argument: use it to compare two sides, not just to add another point. You can start the first side with **On the one hand**, but never use *on the one hand* alone without the other half.' },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['However the plan failed.', 'However, the plan failed.', 'A comma after *however* at the start.'],
            ['The plan was good, however it failed.', 'The plan was good. However, it failed.', '*However* joins two sentences, not two clauses with a comma.'],
            ['On the other hand, it is also cheap.', 'What is more, it is also cheap.', '*On the other hand* is for the opposite side, not another point.'],
            ['In conclusion, firstly I think…', 'In conclusion, I think…', 'Do not start new points in the conclusion.'],
          ] },
          { t: 'reading', title: 'Should the news be free?', md: 'For most of history, people paid for their news. In the last twenty years, however, much of it has become free online. As a result, many newspapers now depend on adverts, and some have closed.\n\nOn the one hand, free news is fair: everyone can read it, whatever their income. What is more, it reaches young people who would never buy a paper. On the other hand, someone has to pay journalists. If the money comes only from adverts, newspapers may choose stories that get clicks rather than stories that matter.\n\nSome papers ask readers for a small monthly payment. Others keep their articles free but ask for donations. In my view, the second model is the fairest. Nevertheless, it only works if enough readers choose to give. On balance, I think we should all pay something for the news we trust.' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'In the format of the B2 First exam (Reading and Use of English Part 5): read the text. True or false?', items: [
            { q: 'Most news has become free online in the last twenty years.', a: 't', why: '*In the last twenty years, however, much of it has become free online.*' },
            { q: 'The writer says that free news only helps rich readers.', a: 'f', why: 'Free news reaches everyone, *whatever their income*.' },
            { q: 'The writer worries that adverts may change which stories are chosen.', a: 't', why: '*Newspapers may choose stories that get clicks.*' },
            { q: 'The writer prefers the donation model and believes it always works.', a: 'f', why: 'It *only works if enough readers choose to give*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the best marker.', items: [
            { q: 'The app is free. ___, it collects a lot of personal data.', o: ['However', 'As a result', 'For instance'], why: 'A contrast.' },
            { q: 'Fewer people bought papers. ___, many shops stopped selling them.', o: ['As a result', 'On the other hand', 'Personally'], why: 'A result.' },
            { q: 'Podcasts are popular. ___, they are easy to listen to while driving.', o: ['What is more', 'However', 'Nevertheless'], why: 'Adding another positive point.' },
            { q: '___, I believe the advantages are greater than the disadvantages.', o: ['On balance', 'For instance', 'Moreover'], why: 'A conclusion after weighing both sides.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'In the format of the B2 First exam (Reading and Use of English Part 1): choose the word that best fits each gap.', items: [
            { q: 'The report was ___ criticised for its lack of evidence.', o: ['widely', 'largely', 'greatly'], why: '*Widely criticised* is the fixed collocation.' },
            { q: 'The paper had to ___ an apology to the singer.', o: ['publish', 'make', 'do'], why: 'A newspaper *publishes* an apology.' },
            { q: 'Readers were quick to ___ out the mistake.', o: ['point', 'show', 'tell'], why: '*Point out* = draw attention to.' },
            { q: 'The story ___ headlines around the world.', o: ['made', 'did', 'took'], why: '*Make headlines* is a fixed phrase.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 1** all four options usually have a similar meaning. The answer is decided by **collocation** (which words go together: *make headlines*, *widely criticised*) or by **grammar** (which word fits the preposition after it). Read a few words after the gap before you choose.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'On the one hand, it’s free. On the other hand, it’s full of adverts.' },
            { a: 'As a result, many papers have closed.' },
            { a: 'On balance, I think we should pay.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Fact or opinion?',
      about: 'Recognise facts and opinions, and use hedging language to make careful, believable claims.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'A **fact** can be checked: *The article was published on Monday. 40% of adults read news online.* An **opinion** is what someone thinks: *The article was unfair. Online news is worse than print.*\n\nGood writers do not hide their opinions, but they do not state them as if they were facts either. They **hedge**: they use words that make a claim softer and more careful. Compare:\n\n*Social media makes people angry.* (too strong: is it true of everyone, always?)\n\n*Social media **can** make people angrier. It **seems that** heavy users **tend to** feel more stressed.* (careful, believable)\n\nHedging is not weakness. In an essay or a discussion, it shows that you think before you speak, and it makes your argument harder to attack.' },
          { t: 'table', caption: 'Ways to hedge', explain: ['head', 'col0'], head: ['Type', 'Words', 'Example'], rows: [
            ['modal verbs', 'may, might, could, can', 'This may explain the change.'],
            ['verbs', 'seem, appear, tend to', 'Young readers tend to prefer video.'],
            ['adverbs', 'probably, possibly, arguably, generally', 'It is arguably the best paper in the country.'],
            ['it + passive', 'it is thought that, it is believed that', 'It is believed that the leak came from inside.'],
            ['quantity words', 'many, some, most, a number of', 'Many readers are unhappy.'],
          ] },
          { t: 'examples', items: [
            { s: 'Print newspapers **are dying**. → Print newspapers **appear to be** in decline.', n: 'Softer and more accurate.' },
            { s: 'Everyone uses social media. → **Most** young people use social media.', n: 'Avoid *everyone* unless it is really everyone.' },
            { s: 'This **caused** the crisis. → This **may have contributed** to the crisis.', n: 'Careful about causes.' },
            { s: 'It is the best film of the year. → It is **arguably** the best film of the year.', n: '*Arguably* = you can make a good case for it.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Do not hedge everything: too many hedges make you sound unsure. Hedge claims about the **future**, about **causes** and about **large groups** of people. State clear facts directly: *The article was published on Monday.*' },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['It seems that young people tend to maybe prefer video.', 'Young people tend to prefer video.', 'One hedge is enough.'],
            ['People are believed that the news is biased.', 'It is believed that the news is biased.', 'The pattern is *It is believed that*.'],
            ['All politicians lie.', 'Many people distrust politicians.', 'A sweeping claim; hedge and be precise.'],
            ['It tends to rain probably.', 'It will probably rain.', 'Put *probably* after *will*, and do not double it.'],
          ] },
          { t: 'dialogue', title: 'A podcast interview', lines: [
            { who: 'Host', s: 'Is social media making us less informed?' },
            { who: 'Guest', s: 'I wouldn’t go that far. It seems that people read more headlines than ever, but they tend to read fewer full articles.' },
            { who: 'Host', s: 'So it’s a problem?' },
            { who: 'Guest', s: 'It could be. Arguably, the bigger problem is that many people can’t tell a fact from an opinion.' },
            { who: 'Host', s: 'And is that getting worse?' },
            { who: 'Guest', s: 'The research is mixed. Some studies suggest it is; others don’t.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Fact or opinion?', groups: ['fact', 'opinion'], items: [
            { s: 'The newspaper was founded in 1821.', g: 0, why: 'It can be checked.' },
            { s: 'Its reporting has become lazy.', g: 1, why: 'A judgement.' },
            { s: 'Sales fell by 12% last year.', g: 0, why: 'A number that can be checked.' },
            { s: 'Nobody needs paper newspapers any more.', g: 1, why: 'A sweeping opinion.' },
            { s: 'The editor resigned in March.', g: 0, why: 'An event that can be checked.' },
            { s: 'The new design is much easier to read.', g: 1, why: 'A personal view.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Make each claim more careful. Use the word given.', items: [
            { q: 'Teenagers spend too much time online.', cue: 'tend', a: ['Teenagers tend to spend too much time online'], why: '*Tend to* makes a general claim softer.' },
            { q: 'The leak came from a government office.', cue: 'believed', a: ['It is believed that the leak came from a government office', 'It is believed the leak came from a government office'], why: '*It is believed that* + clause.' },
            { q: 'This decision caused the strike.', cue: 'may', a: ['This decision may have caused the strike'], why: 'A careful claim about a past cause: *may have* + past participle.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'In the format of the B2 First exam (Reading and Use of English Part 3): use the word in capitals to form a word that fits the gap.', items: [
            { q: 'Many readers question the ___ of online sources.', base: 'reliable', a: ['reliability'], why: 'A noun after *the*: *reliable* → *reliability*.' },
            { q: 'The report was criticised for being ___.', base: 'accurate', a: ['inaccurate'], why: 'A negative adjective: *in-* + *accurate*.' },
            { q: 'Journalists must check every claim ___.', base: 'care', a: ['carefully'], why: 'An adverb for *check*.' },
            { q: 'The paper made a public ___ for the error.', base: 'apologise', a: ['apology'], why: 'A noun after *a public*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 3** you change the word in capitals so that it fits the gap. First decide what **kind** of word is needed (noun, adjective, adverb, verb) by looking at the words around it. Then check whether the meaning needs a **negative** prefix (*un-, in-, dis-, im-*) or a **plural**.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'It seems that young people tend to read less.' },
            { a: 'It is believed that the leak came from inside.' },
            { a: 'This may have contributed to the crisis.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'Two sides of a story',
      about: 'Read two opinion pieces on the same topic, compare how they argue, and plan an essay of your own.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Two writers can look at the same facts and reach opposite conclusions. Reading opinion pieces well means seeing **how** each writer builds the argument: which facts they choose, which reporting verbs they use, how they link ideas, and how careful (or careless) their claims are.\n\nThe B2 First **Writing Part 1** is an essay of 140 to 190 words that gives your opinion on a question, using two given ideas and one of your own. A good plan has four paragraphs: an **introduction** that restates the question, **one paragraph for each side** or for each idea, and a **conclusion** that gives your view clearly.' },
          { t: 'reading', title: 'Should phones be banned in schools?', md: '**Yes: give children their attention back** (by Helen Ward)\n\nResearch suggests that pupils who keep their phones in their pockets find it harder to concentrate, even when the phone is switched off. What is more, social media follows them into every break, so bullying never stops at the school gate. Several countries have already banned phones in class and, as a result, teachers report calmer lessons. Of course, parents worry about safety. However, a phone in a locker can still be used at the end of the day. In my view, a ban is the simplest way to protect learning.\n\n**No: teach children to use them well** (by Daniel Price)\n\nBanning phones may seem attractive, but it is arguably the easy answer rather than the right one. Young people will use phones all their lives, and school is the best place to learn how to do it responsibly. Phones can also be useful in class: for research, for recording an experiment, for a quick quiz. Critics claim that phones cause bullying, but bullying existed long before smartphones. On balance, I believe schools should set clear rules rather than ban something that is part of modern life.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B2 First exam (Reading and Use of English Part 6 style): which writer… ?', items: [
            { q: 'Which writer mentions what other countries have done?', o: ['Helen Ward', 'Daniel Price'], why: '*Several countries have already banned phones.*' },
            { q: 'Which writer uses *claim* to show doubt about the other side?', o: ['Daniel Price', 'Helen Ward'], why: '*Critics claim that phones cause bullying…*' },
            { q: 'Which writer answers a worry that parents have?', o: ['Helen Ward', 'Daniel Price'], why: '*Parents worry about safety. However…*' },
            { q: 'Which writer suggests phones can help with learning?', o: ['Daniel Price', 'Helen Ward'], why: 'Research, experiments and quizzes.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the best word for the essay.', items: [
            { q: '___, schools should decide their own rules.', o: ['In my view', 'For instance', 'As a result'], why: 'Giving a personal opinion.' },
            { q: 'Phones distract pupils. ___, they can be useful for research.', o: ['On the other hand', 'What is more', 'Therefore'], why: 'The other side of the argument.' },
            { q: 'Lessons became calmer. ___, results improved.', o: ['As a result', 'However', 'On balance'], why: 'A result.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'In the format of the B2 First exam (Writing Part 1): put the words in order to make sentences for an essay.', items: [
            { a: 'Many people believe that phones should be banned in schools.', why: 'An introduction that restates the question.' },
            { a: 'On the other hand, phones can be useful for learning.', why: 'The marker introduces the opposite side.' },
            { a: 'On balance, I think clear rules are better than a ban.', why: 'A conclusion with a clear opinion.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Writing Part 1** the examiner checks four things: did you **answer the question** and use all three ideas; is it **organised** into paragraphs with good linkers; is the **language** varied and accurate; and is the tone right for an essay (no contractions, no slang). Always end with your **own opinion** stated clearly.' },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake in each essay sentence.', items: [
            { s: 'Some teachers suggested [to ban] phones completely.', a: ['banning'], why: '*Suggest* + *-ing*.' },
            { s: '[However] phones are useful in emergencies.', a: ['However,'], why: 'A comma after *however* at the start.' },
            { s: 'It is [believing] that phones affect sleep.', a: ['believed', 'thought'], why: '*It is believed that…*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'Critics claim that phones cause bullying.' },
            { a: 'In my view, a ban is the simplest answer.' },
            { a: 'On balance, I believe clear rules are better.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the correct form.', items: [
      { q: 'He promised ___ the money back.', o: ['to pay', 'paying', 'pay'], why: '*Promise* + *to* + infinitive.' },
      { q: 'She admitted ___ the email.', o: ['deleting', 'to delete', 'delete'], why: '*Admit* + *-ing*.' },
      { q: 'They thanked us ___ them.', o: ['for helping', 'to help', 'of helping'], why: '*Thank* + person + *for* + *-ing*.' },
      { q: 'The prices rose. ___, fewer people bought the paper.', o: ['As a result', 'However', 'For instance'], why: 'A result.' },
      { q: 'Young readers ___ prefer short videos.', o: ['tend to', 'are tend to', 'tend'], why: '*Tend to* + infinitive.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Use the word given and two to five words.', items: [
      { q: '“I didn’t copy my friend’s work,” said Ben.', cue: 'DENIED', a: ['Ben denied copying his friend’s work', 'Ben denied having copied his friend’s work'], why: '*Deny* + *-ing*.' },
      { q: '“You should apply for the job,” my teacher said to me.', cue: 'ADVISED', a: ['My teacher advised me to apply for the job'], why: '*Advise* + person + *to*.' },
      { q: 'People think the singer is about to retire.', cue: 'THOUGHT', a: ['It is thought that the singer is about to retire', 'It is thought the singer is about to retire'], why: '*It is thought that* + clause.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Form a word that fits the gap.', items: [
      { q: 'The article caused a lot of ___.', base: 'argue', a: ['argument', 'arguments'], why: 'A noun after *a lot of*.' },
      { q: 'Her opinion was completely ___.', base: 'reason', a: ['reasonable', 'unreasonable'], why: 'An adjective after *was*.' },
      { q: 'The figures were ___ wrong.', base: 'complete', a: ['completely'], why: 'An adverb before *wrong*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'She suggested [us to take] the train.', a: ['taking', 'that we take', 'that we should take'], why: '*Suggest* has no person + *to*.' },
      { s: 'They accused the company [for hiding] the truth.', a: ['of hiding'], why: '*Accuse of*.' },
      { s: 'It is good. [On the other hand], it is cheap.', a: ['What is more', 'In addition', 'Moreover'], why: 'Adding a point, not the opposite side.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: '*The figures were published on Monday* is an opinion.', a: 'f', why: 'It can be checked: a fact.' },
      { q: 'Using *claim* can show that the writer doubts what was said.', a: 't', why: '*Claim* suggests the writer is not sure it is true.' },
    ] },
  ],
};
