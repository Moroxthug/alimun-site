// English C1, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Persuasion',
  goal: 'Make a case convincingly in speech and writing.',
  art: 'dragon',
  tags: { skills: ['grammar', 'speaking', 'writing', 'reading'], topics: ['cleft-sentences', 'emphasis', 'emphatic-do', 'intensifiers', 'discourse-markers', 'rhetorical-devices', 'persuasive-speech', 'libraries'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'What we need is…',
      about: 'Use cleft sentences to put the focus on the most important part of your message.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'A **cleft sentence** splits one idea into two parts so that the important information stands out. It is one of the most useful tools for persuasion, because it tells the listener exactly where to look.' },
          { t: 'text', md: 'A **what-cleft** puts the focus at the **end** of the sentence: *What* + clause + *be* + focus. The *what* clause sets up the expectation, and the focus delivers it.' },
          { t: 'examples', items: [
            { s: 'We need more time. → **What we need is** more time.', n: 'The focus, *more time*, comes last, after a short pause.' },
            { s: '**What worries me is** the cost.', n: 'Common with verbs of feeling: *what annoys me, what surprises me, what I love*.' },
            { s: '**What he did was** (to) resign on the spot.', n: 'To focus on an action, use *What* + subject + *did was* + infinitive. *To* is optional.' },
            { s: '**What happened was that** the bank closed the account.', n: '*What happened was (that)* introduces a whole event.' },
          ] },
        ],
        [
          { t: 'text', md: 'An **it-cleft** puts the focus near the **start**: *It* + *be* + focus + *that* / *who* + the rest. It is often used to correct someone or to make a contrast.' },
          { t: 'table', caption: 'Kinds of cleft sentence', explain: ['head', 'col0'], head: ['Pattern', 'Example'], rows: [
            ['It + be + focus + that / who…', 'It was **the price** that put people off, not the design.'],
            ['It + be + not until… + that…', 'It wasn’t **until the end** that we saw the point.'],
            ['All + clause + be…', '**All I want** is a fair hearing.'],
            ['The reason (why)… is that…', '**The reason** I’m here **is that** I care about this town.'],
            ['The thing / One thing… is…', '**The thing** that surprised me most was the silence.'],
            ['The place where / The day when…', '**The place where** this matters most is in schools.'],
          ] },
          { t: 'tip', art: 'owl', md: '*All I want is…* means *the only thing I want is*. It sounds modest and reasonable, which makes it very persuasive. Also notice the reversed what-cleft: *A fair hearing is all I want. Higher taxes is what they’re proposing.*' },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence as a cleft sentence, starting with the words given.', items: [
            { q: 'Her honesty impressed me.', cue: 'What', a: ['What impressed me was her honesty.'], why: 'A what-cleft: *What* + clause + *was* + focus.' },
            { q: 'Maya organised the protest, not Leo.', cue: 'It was', a: ['It was Maya who organised the protest, not Leo.', 'It was Maya that organised the protest, not Leo.', 'It was Maya who organised the protest.', 'It was Maya that organised the protest.'], why: 'An it-cleft corrects the information: *It was Maya who…*' },
            { q: 'I only want five minutes of your time.', cue: 'All', a: ['All I want is five minutes of your time.'], why: '*All* + clause + *is*: the only thing.' },
            { q: 'We only realised the problem in March.', cue: 'It wasn’t until', a: ['It wasn’t until March that we realised the problem.', 'It wasn’t until March that we realized the problem.', 'It was not until March that we realised the problem.'], why: '*It wasn’t until* + time + *that*.' },
            { q: 'They cancelled the whole project.', cue: 'What they did', a: ['What they did was cancel the whole project.', 'What they did was to cancel the whole project.'], why: 'Focus on an action: *What they did was* + infinitive, with or without *to*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct option.', items: [
            { q: 'What I don’t understand ___ why nobody asked us.', o: ['is', 'it is', 'that is'], why: 'A what-cleft: the *what* clause is followed directly by *is*.' },
            { q: 'It was the noise ___ kept us awake, not the heat.', o: ['that', 'what', 'where'], why: 'An it-cleft uses *that* (or *who* for people), never *what*.' },
            { q: 'The reason I left ___ I wanted a new challenge.', o: ['is that', 'is because of', 'it is that'], why: '*The reason… is that…* is the standard form. *The reason is because* is common in speech but avoided in careful writing.' },
            { q: 'What she did ___ write to every member of parliament.', o: ['was', 'did', 'that'], why: '*What* + subject + *did* + *was* + infinitive.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'What we need now is a clear plan.', why: '*What* + clause + *is* + focus.' },
            { a: 'It was my teacher who encouraged me to apply.', why: '*It was* + person + *who* + the rest.' },
            { a: 'All you have to do is ask.', why: '*All* + clause + *is* + infinitive without *to*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'I do understand',
      about: 'Add emphasis with do, stressed auxiliaries and intensifying adverbs.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'In positive sentences in the present or past simple, add **do**, **does** or **did** before the main verb to add emphasis. In speech, the auxiliary is stressed. Emphatic *do* is often used to contrast with what someone else has said or thought, or to sound sincere.' },
          { t: 'examples', items: [
            { s: 'I **do** understand your concerns, but we have no choice.', n: 'It shows you are sincere before you disagree.' },
            { s: 'He says he forgot, but I **did** remind him.', n: 'A contrast: the speaker insists on the fact.' },
            { s: '**Do** sit down. You must be exhausted.', n: 'In imperatives, *do* makes an invitation warmer and more polite.' },
            { s: 'I’m not sure it works, but it **does** look impressive.', n: 'A concession: one positive point, emphasised.' },
          ] },
          { t: 'text', md: 'With other tenses, simply **stress the auxiliary** you already have: *I HAVE finished it. She WILL be there. It IS important.* In writing, you can show this with italics or with words like *indeed* or *certainly*.' },
        ],
        [
          { t: 'text', md: '**Intensifiers** make an adjective or comparison stronger. Choose them carefully. With **gradable** adjectives (*big, tired, interesting*) use *very, extremely, incredibly, highly*. With **extreme** adjectives (*huge, exhausted, fascinating*) use *absolutely, utterly, completely, totally*. *Really* and *quite* work with both, but *quite* changes meaning: *quite good* is a little good, *quite brilliant* is completely brilliant.' },
          { t: 'table', caption: 'Intensifiers and what they go with', explain: ['head', 'col1'], head: ['Intensifier', 'Used with', 'Example'], rows: [
            ['utterly', 'negative extreme adjectives and verbs', 'an **utterly** pointless exercise'],
            ['by far', 'superlatives', 'It’s **by far** the best option.'],
            ['far, much, a great deal', 'comparatives', 'This is **far** more serious than we thought.'],
            ['whatsoever, at all', 'after negatives and *any*', 'There is no evidence **whatsoever**.'],
            ['the very', 'superlatives and some nouns', 'the **very** last thing we need'],
            ['deeply, highly', 'feelings; qualities', '**deeply** concerned, **highly** effective'],
          ] },
          { t: 'tip', art: 'owl', md: 'Do not use *very* with extreme adjectives: say *absolutely furious*, not *very furious*. And do not overuse intensifiers in persuasion. If everything is *absolutely vital*, nothing is.' },
        ],
        [
          { t: 'ex', kind: 'colloc', h: 'Which words collocate naturally with the key word?', items: [
            { key: 'utterly', o: ['ridiculous', 'exhausted', 'convinced', 'good'], a: [0, 1, 2], why: '*Utterly* goes with extreme or strong words: *utterly ridiculous, exhausted, convinced*. Not with a gradable word like *good*.' },
            { key: 'by far', o: ['the most popular', 'the cheapest', 'more popular', 'very cheap'], a: [0, 1], why: '*By far* goes with superlatives. Use *far* or *much* with comparatives.' },
            { key: 'deeply', o: ['moved', 'concerned', 'grateful', 'tall'], a: [0, 1, 2], why: '*Deeply* goes with feelings: *moved, concerned, grateful*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the best word.', items: [
            { q: 'I ___ appreciate everything you’ve done for us.', o: ['do', 'am', 'have'], why: 'Emphatic *do* before the main verb in the present simple.' },
            { q: 'The new design is ___ better than the old one.', o: ['far', 'by far', 'very'], why: 'With a comparative: *far*, *much* or *a great deal*.' },
            { q: 'There is no reason ___ to raise the fees.', o: ['whatsoever', 'utterly', 'by far'], why: '*Whatsoever* follows a negative noun phrase for strong emphasis.' },
            { q: 'After twelve hours of travel, we were ___ exhausted.', o: ['absolutely', 'very', 'a great deal'], why: '*Exhausted* is an extreme adjective: *absolutely*, not *very*.' },
            { q: 'She ___ warn us, but nobody listened.', o: ['did', 'was', 'has'], why: 'Emphatic *did* + infinitive for a past fact.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Rewrite the words in brackets with emphatic *do*, *does* or *did*.', items: [
            { q: 'I know you think I’m lazy, but I ___ (work) hard.', a: ['do work'], why: 'Emphatic *do* + infinitive in the present simple.' },
            { q: 'He rarely calls, but he ___ (send) a card every birthday.', a: ['does send'], why: 'Third person: *does* + infinitive, not *does sends*.' },
            { q: 'You may not believe it, but I ___ (try) to warn you.', a: ['did try'], why: 'Past simple: *did* + infinitive.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'It was a [very] fascinating talk.', a: ['really', 'absolutely', 'utterly', 'truly'], why: '*Fascinating* is extreme: use *really* or *absolutely*, not *very*.' },
            { s: 'She does [knows] what she is talking about.', a: ['know'], why: 'After emphatic *does*, use the infinitive: *does know*.' },
            { s: 'This is [far] the most important decision of the year.', a: ['by far'], why: 'With a superlative, use *by far*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Be that as it may',
      about: 'Guide your listener with discourse markers, and persuade with rhetorical questions and the rule of three.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'Strong arguments **acknowledge** the other side before answering it. This makes the speaker sound fair and reasonable. Discourse markers show the listener when you are conceding a point and when you are returning to your own.' },
          { t: 'table', caption: 'Conceding and answering', explain: ['head', 'col1'], quiz: true, head: ['Marker', 'Use'], rows: [
            ['admittedly', 'you accept a point against your argument'],
            ['granted, …', 'you accept a point, usually before a *but*'],
            ['be that as it may', 'even if that is true, it does not change my view'],
            ['that said / having said that', 'you add a point that limits what you just said'],
            ['even so / all the same', 'despite what was just said'],
            ['needless to say', 'what follows is obvious'],
            ['to put it another way', 'you repeat the idea more clearly'],
            ['above all', 'this is the most important point'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: '**Admittedly**, the new scheme is expensive. **Even so**, it will save money within five years.', n: 'Concede, then answer.' },
            { s: 'Some say the park is rarely used. **Be that as it may**, it is the only green space in the area.', n: 'Accept that it may be true, and show that it does not matter.' },
            { s: 'The plan has its weaknesses. **That said**, it is the best we have.', n: 'A balancing point after a criticism.' },
          ] },
          { t: 'text', md: 'Persuasive speakers also use a few classic **rhetorical devices**. A **rhetorical question** is not meant to be answered; it invites the audience to agree: *Who among us has never needed help?* The **rule of three** groups ideas in threes, which sounds complete and memorable: *It is free, it is open to everyone, and it belongs to us.* A **contrast** (*not… but…*) sharpens the message: *This is not a cost but an investment.*' },
          { t: 'tip', art: 'owl', md: '*Be that as it may* and *granted* are fairly formal. In conversation, *fair enough, but…* or *OK, but even so…* do the same job.' },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Complete with the markers from the box.', extra: ['in other words'], items: [
            { q: '___, the trains are often late. But they are still faster than driving.', a: 'Admittedly', why: '*Admittedly* accepts a point against your own argument.' },
            { q: 'You may be right that it’s risky. ___, I think we should try.', a: 'Be that as it may', why: 'Even if that is true, it does not change my view.' },
            { q: 'The hotel was beautiful. ___, the service was rather slow.', a: 'That said', why: '*That said* adds a limiting point after a positive one.' },
            { q: '___, nobody wants to pay more tax.', a: 'Needless to say', why: 'What follows is obvious.' },
            { q: 'We need funding, volunteers and, ___, public support.', a: 'above all', why: '*Above all* marks the most important item.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each device with an example.', pairs: [
            ['rhetorical question', 'Can we really afford to wait another year?'],
            ['rule of three', 'It is faster, cheaper and cleaner.'],
            ['contrast', 'This is not a problem but an opportunity.'],
            ['concession', 'Granted, the change will not be easy.'],
            ['repetition', 'We will listen, we will learn, and we will act.'],
          ] },
          { t: 'ex', kind: 'odd', h: 'Which marker has a different function?', items: [
            { o: ['above all', 'admittedly', 'granted', 'it is true that'], why: '*Above all* marks the most important point; the others concede a point.' },
            { o: ['needless to say', 'even so', 'all the same', 'nevertheless'], why: '*Needless to say* means *obviously*; the others mean *despite this*.' },
            { o: ['to put it another way', 'that said', 'having said that', 'even so'], why: '*To put it another way* repeats an idea; the others introduce a contrasting point.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'The last free room in town',
      about: 'Read a persuasive speech about public libraries and see how the speaker builds the argument.',
      art: 'owl',
      spreads: [
        [
          { t: 'reading', title: 'The last free room in town', md: 'Friends, neighbours, members of the council: thank you for letting me speak. I know the budget is tight. I know that every department has been asked to make cuts, and I know that some of you believe the library is an easy one to make. What I would like to do in the next five minutes is to persuade you that it is the most expensive saving this town could ever make.\n\nLet me begin with a question. Where, in this town, can you sit for an afternoon without buying anything? Not in a café. Not in a shopping centre. Not, increasingly, even in a park, now that the benches have been removed. The library is, quite simply, the last free room in town. It is warm in winter, it is quiet when you need to think, and it belongs to every one of us, equally.\n\nAdmittedly, the way people use libraries has changed. Fewer people borrow books than they did twenty years ago, and I will not pretend otherwise. Be that as it may, the building has never been busier. On any weekday morning you will find parents with toddlers at the story hour, pensioners reading the newspapers they can no longer afford, and job seekers using the computers to write applications they cannot write at home. It is not the number of books that matters. It is the number of lives.\n\nSome have suggested that everything a library offers can now be found online. I do understand the argument. But what the internet cannot provide is a librarian: a real person who will help a nervous teenager find the right book, show an elderly man how to renew his parking permit, or explain to a newly arrived family how to register with a doctor. That is not a luxury. It is a public service in the fullest sense of the word.\n\nAnd consider the alternative. If we close the library, the young mother does not stop needing company. The pensioner does not stop being lonely. The job seeker does not stop needing a computer. What happens is that those costs move elsewhere: to the health centre, to social services, to the benefits office. We will not have saved money. We will simply have hidden the bill.\n\nNeedless to say, I am not asking you to ignore the budget. I am asking you to look at it differently. Keep the opening hours, share the building with other services if you must, ask the community to volunteer. All we are asking for is the chance to find a solution together.\n\nA town is not just a collection of shops and roads. It is a place where people meet, learn and look after one another. Above all, it is a place that keeps its doors open. Let us not be the council that closed them.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The speaker denies that fewer people borrow books today.', a: 'f', why: 'She admits it: “I will not pretend otherwise.”' },
            { q: 'According to the speaker, the library is used by many different groups of people.', a: 't', why: 'Parents, pensioners and job seekers are all mentioned.' },
            { q: 'The library’s computers were bought last year.', a: 'ng', why: 'The speech mentions the computers but not when they were bought.' },
            { q: 'The speaker believes closing the library would not really save money.', a: 't', why: '“We will not have saved money. We will simply have hidden the bill.”' },
            { q: 'The speaker refuses to consider any change to how the library is run.', a: 'f', why: 'She suggests sharing the building and asking for volunteers.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'How does the speaker persuade?', items: [
            { q: '“Where, in this town, can you sit for an afternoon without buying anything?” What kind of question is this?', o: ['A rhetorical question that leads the audience to her point.', 'A real question she wants the council to answer.', 'A polite request for information.'], why: 'She answers it herself: nowhere but the library.' },
            { q: '“It is warm in winter, it is quiet when you need to think, and it belongs to every one of us.” What device is this?', o: ['The rule of three', 'A concession', 'A cleft sentence'], why: 'Three parallel points make the description feel complete.' },
            { q: 'Why does the speaker say “I do understand the argument”?', o: ['To sound fair before disagreeing.', 'To show she has changed her mind.', 'To end the speech.'], why: 'Emphatic *do* shows sincerity before a *but*.' },
            { q: '“It is not the number of books that matters. It is the number of lives.” What do these sentences do?', o: ['They use cleft sentences to contrast two ideas.', 'They give statistics about the library.', 'They concede a point to the council.'], why: 'Two it-clefts put the focus on *books* and then on *lives*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the cleft sentences.', items: [
            { s: 'I know the budget is tight. [What I would like to do] in the next five minutes is to persuade you.', why: 'A what-cleft: the focus, *to persuade you*, comes at the end.' },
            { s: 'Keep the opening hours, if you must. [All we are asking for] is the chance to find a solution together.', why: '*All* + clause + *is*: the only thing we want.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the phrases from the speech with their meanings.', pairs: [
            ['the budget is tight', 'there is not much money'],
            ['make cuts', 'reduce spending'],
            ['hide the bill', 'move a cost so nobody sees it'],
            ['in the fullest sense', 'in every possible meaning'],
            ['job seekers', 'people looking for work'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'What really annoys me ___ the lack of information.', o: ['is', 'it is', 'that'], why: 'What-cleft: *What* clause + *is* + focus.' },
      { q: 'It was my sister ___ found the solution.', o: ['who', 'what', 'which'], why: 'It-cleft with a person: *who* or *that*.' },
      { q: 'This is ___ the most difficult decision I’ve ever made.', o: ['by far', 'far', 'very'], why: 'With a superlative: *by far*.' },
      { q: 'I ___ like your idea. I just think it’s too early.', o: ['do', 'am', 'did to'], why: 'Emphatic *do* to sound sincere before a criticism.' },
      { q: 'The flat is small. ___, it’s in a great location.', o: ['Even so', 'Needless to say', 'Above all'], why: '*Even so*: despite what was just said.' },
      { q: 'The plan was ___ ridiculous.', o: ['utterly', 'very', 'by far'], why: '*Ridiculous* is extreme: *utterly*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite as a cleft sentence, starting with the words given.', items: [
      { q: 'The weather ruined the trip.', cue: 'It was', a: ['It was the weather that ruined the trip.', 'It was the weather which ruined the trip.'], why: '*It was* + focus + *that*.' },
      { q: 'I need a long holiday.', cue: 'What', a: ['What I need is a long holiday.'], why: '*What* + clause + *is* + focus.' },
      { q: 'We only want an apology.', cue: 'All', a: ['All we want is an apology.'], why: '*All* + clause + *is*: the only thing.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'He did [promised] to call me.', a: ['promise'], why: 'After emphatic *did*, use the infinitive.' },
      { s: 'There is no proof [utterly].', a: ['whatsoever', 'at all'], why: 'After a negative noun phrase, use *whatsoever* or *at all*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the markers with their meanings.', pairs: [
      ['admittedly', 'I accept this point against me'],
      ['above all', 'this is the most important'],
      ['needless to say', 'this is obvious'],
      ['to put it another way', 'I will say it more clearly'],
    ] },
  ],
};
