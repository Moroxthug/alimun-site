// English B2, unit 8, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one speaking task, and one task in the format of B2 First.
// Builds on B1 unit 11 (non-defining relative clauses): here which for a whole idea, whose, whom, prepositions and
// quantifiers in relative clauses, participle clauses and formal register.
export const UNIT = {
  id: 'u8',
  title: 'A changing world',
  goal: 'Join ideas in long, precise sentences, write in a formal register, and discuss how cities and societies are changing.',
  art: 'sun',
  tags: { skills: ['grammar', 'writing', 'speaking', 'reading'], topics: ['relative-clauses', 'participle-clauses', 'formal-register', 'essay', 'cities'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Most of whom, which surprised us',
      about: 'Use relative clauses in depth: which for a whole idea, whose, whom, prepositions and quantifiers.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'At B1 you learned the difference between **defining** clauses (no commas: *The man **who lives next door** is a doctor*) and **non-defining** clauses (with commas: *My sister, **who lives in Rome**, is a doctor*). At B2, relative clauses become a tool for packing more information into one clear sentence.\n\n**Which for a whole idea.** In a non-defining clause, **which** can refer to the **whole** previous clause, not just a noun: *The train was cancelled, **which** meant we missed the meeting.* Here *which* = *the fact that the train was cancelled*. You cannot use *what* or *that* in this position.\n\n**Whose** shows possession, for people **and** for things: *a writer **whose** books I love*, *a city **whose** streets are always clean*.' },
          { t: 'examples', items: [
            { s: 'She passed all her exams, **which** made her parents very happy.', n: '*Which* refers to the whole first clause.' },
            { s: 'He didn’t call back, **which** was strange.', n: 'A comment on the whole situation.' },
            { s: 'It’s a company **whose** products are sold worldwide.', n: '*Whose* for a thing.' },
            { s: 'The architect, **whose** designs won many prizes, retired last year.', n: '*Whose* for a person, non-defining.' },
          ] },
          { t: 'tip', art: 'owl', md: 'A common mistake is *He lost his job, **what** was a shock.* After a comma, referring to the whole idea, always use **which**. *What* means *the thing that* and starts a different kind of clause: *What I need is a holiday.*' },
        ],
        [
          { t: 'text', md: '**Whom** is the object form of *who*. In everyday English most people use *who* or nothing at all: *the woman (who) I met*. But **whom** is still needed in formal writing **after a preposition**: *the person **to whom** I spoke*, *the colleagues **with whom** I work*.\n\nThere are two positions for the preposition. In **informal** English it goes at the end: *the house **which** I grew up **in***. In **formal** English it goes before the pronoun: *the house **in which** I grew up*. After a preposition, use only **whom** (people) or **which** (things), never *who* or *that*.\n\n**Quantifiers.** In non-defining clauses you can use **some of**, **many of**, **most of**, **all of**, **none of**, **both of** + **whom** / **which**: *Fifty people applied, **most of whom** were students. She has three cars, **two of which** are electric.*' },
          { t: 'table', caption: 'Prepositions and quantifiers', explain: ['head', 'col0'], head: ['Style', 'Pattern', 'Example'], rows: [
            ['informal', 'which / who … + preposition at the end', 'the town (which) I grew up in'],
            ['formal', 'preposition + which / whom', 'the town in which I grew up'],
            ['formal, people', 'preposition + whom', 'the manager to whom I wrote'],
            ['quantity, people', 'most of / some of / none of + whom', 'thirty guests, most of whom were family'],
            ['quantity, things', 'two of / all of / none of + which', 'five rooms, two of which have a balcony'],
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['He failed the test, what upset him.', 'He failed the test, which upset him.', 'For a whole idea, use *which*.'],
            ['the person to who I spoke', 'the person to whom I spoke', 'After a preposition: *whom*.'],
            ['the house in that I live', 'the house in which I live', 'Never *that* after a preposition.'],
            ['ten students, most of them passed', 'ten students, most of whom passed', 'Inside one sentence, use *whom*, not *them*.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'The concert was cancelled, ___ disappointed thousands of fans.', o: ['which', 'what', 'that'], why: '*Which* refers to the whole first clause.' },
            { q: 'She is an author ___ novels have been translated into forty languages.', o: ['whose', 'who', 'which'], why: 'Possession: *whose*.' },
            { q: 'The committee, to ___ the letter was addressed, has not replied.', o: ['whom', 'who', 'that'], why: 'After a preposition, for people: *whom*.' },
            { q: 'I have two brothers, both of ___ live abroad.', o: ['whom', 'them', 'who'], why: 'Quantifier + *of whom* inside a relative clause.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build one formal sentence. Two words do not belong.', items: [
            { a: 'This is the office in which I worked for ten years.', extra: ['that', 'what'], why: 'Preposition + *which*; never *that* after a preposition.' },
            { a: 'The guests, most of whom were students, stayed late.', extra: ['them', 'who'], why: '*Most of whom* inside the relative clause.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'In the format of the B2 First exam (Reading and Use of English Part 2): write ONE word in each gap.', items: [
            { q: 'The old market, ___ was built in 1850, is now a museum.', a: ['which'], why: 'A non-defining clause about a thing: *which*.' },
            { q: 'The man ___ car was stolen has offered a reward.', a: ['whose'], why: 'Possession: *whose*.' },
            { q: 'Forty people came, most ___ whom were neighbours.', a: ['of'], why: 'The pattern is *most of whom*.' },
            { q: 'The town ___ which she was born has changed a lot.', a: ['in'], why: '*Born in* a town: the preposition moves before *which*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 2** (open cloze) there are no options: the missing word is almost always a **grammar word** – a pronoun, preposition, article, auxiliary or linking word. Look at the words on both sides of the gap; relative pronouns and the *of* in *most of which* are tested often.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'The train was late, which meant we missed the start.' },
            { a: 'This is the colleague with whom I share an office.' },
            { a: 'She has three children, two of whom are twins.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Having finished, built in 1900',
      about: 'Use participle clauses to make sentences shorter and more elegant, without changing their meaning.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A **participle clause** is a short clause that starts with a participle instead of a full verb with a subject. It makes writing tighter and more elegant, which is why it is common in articles, reports and essays.\n\nThere are three kinds. A **present participle** (-ing) describes an action happening at the same time, or a reason: ***Walking** home, I met an old friend* (= while I was walking). A **past participle** has a passive meaning: ***Built** in 1900, the bridge is still used today* (= it was built in 1900). A **perfect participle** (**having** + past participle) shows that one action finished **before** the other: ***Having finished** the report, she went home* (= after she had finished).\n\nThe most important rule: the **subject** of the participle clause must be the **same** as the subject of the main clause.' },
          { t: 'table', caption: 'Three kinds of participle clause', explain: ['head', 'col0', 'col1'], head: ['Kind', 'Meaning', 'Example'], rows: [
            ['present participle (-ing)', 'at the same time, or a reason', 'Feeling tired, he went to bed early.'],
            ['past participle', 'passive meaning', 'Written in 1850, the novel is still popular.'],
            ['perfect participle (having + done)', 'before the main action', 'Having saved enough money, they bought a flat.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Watch out for **dangling participles**. In the wrong sentence *Walking into the room, the lights went off*, it sounds as if the **lights** were walking! Correct: *Walking into the room, **I** noticed the lights go off*, or *As I walked into the room, the lights went off.*' },
        ],
        [
          { t: 'text', md: 'Participles can also **shorten relative clauses**. A defining relative clause with an active verb becomes an -ing form: *people **who live** near the airport* → *people **living** near the airport*. A clause with a passive verb becomes a past participle: *the products **that are made** in this factory* → *the products **made** in this factory*.\n\nThis reduced form is extremely common in news, reports and academic texts, and it is a quick way to make your writing sound more advanced at B2.' },
          { t: 'examples', items: [
            { s: 'Students **wishing** to join the trip should sign up today.', n: '= students who wish to join.' },
            { s: 'The money **raised** at the concert went to charity.', n: '= the money that was raised.' },
            { s: '**Not knowing** the way, we asked a stranger.', n: 'A reason; *not* goes before the participle.' },
            { s: '**Having lived** abroad for years, she speaks four languages.', n: 'The first action finished before the second.' },
            { s: '**Asked** about the plan, the mayor refused to comment.', n: 'Passive: the mayor was asked.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Arriving at the station, the train had left.', 'Arriving at the station, we found the train had left.', 'The subject must be the same in both clauses.'],
            ['Having finish the work, she left.', 'Having finished the work, she left.', '*Having* + past participle.'],
            ['Knowing not the answer, I guessed.', 'Not knowing the answer, I guessed.', '*Not* goes before the participle.'],
            ['the people live next door', 'the people living next door', 'A reduced clause needs the -ing form.'],
          ] },
        ],
        [
          { t: 'reading', title: 'A short news report', md: 'Opened in 1922, the city’s central library is closing for two years. Having received a large grant from the government, the council plans to modernise the building completely.\n\nResidents living near the library have mixed feelings. Some, worried about the noise, have already complained. Others, looking forward to the new study rooms and café, are delighted.\n\nBooks borrowed before the closure can be returned to any branch. Readers wishing to keep their membership are asked to update their details online.' },
          { t: 'ex', kind: 'tf', h: 'Read the report. True, false or not given?', ng: true, items: [
            { q: 'The library first opened in 1922.', a: 't', why: '*Opened in 1922* = it was opened in 1922.' },
            { q: 'The council received money before planning the work.', a: 't', why: '*Having received a grant*, the council plans… (first the grant).' },
            { q: 'All residents are unhappy about the project.', a: 'f', why: 'Some are worried; others are delighted.' },
            { q: 'The new library will be twice as big.', a: 'ng', why: 'The report does not mention the size.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of the B2 First exam (Reading and Use of English Part 4): rewrite the sentence with the word given.', items: [
            { q: 'After she had read the contract, she signed it.', cue: 'HAVING', a: ['Having read the contract, she signed it.'], why: 'Perfect participle: the reading finished first.' },
            { q: 'Tourists who visit the castle must buy a ticket.', cue: 'VISITING', a: ['Tourists visiting the castle must buy a ticket.'], why: 'A reduced relative clause with -ing.' },
            { q: 'The bridge was designed by a young engineer and it opened in 1890.', cue: 'DESIGNED', a: ['Designed by a young engineer, the bridge opened in 1890.'], why: 'Past participle: passive meaning.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 4**, a participle clause is often the most elegant answer, but it is not the only one. If you are not sure, check that your sentence keeps **exactly the same meaning** and uses the key word as given, in **two to five words**.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'Having finished the report, she went home.' },
            { a: 'Built in 1900, the bridge is still in use.' },
            { a: 'People living near the airport often complain.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'In a formal style',
      about: 'Recognise and use formal register, and write a clear essay for Part 1 of the Writing paper.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: '**Register** is the level of formality of your language. The same idea can be expressed informally to a friend (*Can you help me out?*) or formally to an organisation (*I would be grateful if you could assist me*). At B2, you are expected to choose the right register for the task – and the essay in Part 1 of the Writing paper is always **neutral to formal**.\n\nFormal English uses **longer, more precise words** (often from Latin), **no contractions**, **fewer phrasal verbs**, and **impersonal structures** that keep the writer in the background: *It is often argued that…*, *There is no doubt that…*, *It could be said that…*.' },
          { t: 'table', caption: 'Informal and formal', explain: ['head'], head: ['Informal', 'Formal'], rows: [
            ['get', 'obtain / receive'],
            ['need', 'require'],
            ['find out', 'discover'],
            ['a lot of', 'a great deal of / a considerable number of'],
            ['but', 'however'],
            ['so', 'therefore / as a result'],
            ['I think', 'It could be argued that / In my view'],
            ['kids', 'children / young people'],
          ] },
          { t: 'tip', art: 'owl', md: 'Formal does not mean complicated. Examiners prefer a **clear** formal sentence to a long confusing one. Avoid contractions (*don’t* → *do not*), slang and exclamation marks, but keep your sentences easy to follow.' },
        ],
        [
          { t: 'text', md: 'A **B2 First essay** (Part 1) answers a question and discusses **two given points plus one idea of your own**, in **140–190 words**. A clear structure helps the examiner follow you:\n\n**Introduction:** rephrase the question and say what the essay will discuss. **Paragraph 2:** the first point, with a reason or example. **Paragraph 3:** the second point. **Paragraph 4:** your own idea. **Conclusion:** give your opinion clearly.\n\nUse **linking words** to show the logic: *Firstly, In addition, On the other hand, However, As a result, To sum up*. Relative clauses and participle clauses from this unit make your sentences more varied – something examiners reward under *Language*.' },
          { t: 'examples', items: [
            { s: '**It is often argued that** cities have become too crowded.', n: 'An impersonal opening for the introduction.' },
            { s: '**Firstly**, public transport has improved considerably.', n: 'A linking word to start a point.' },
            { s: '**On the other hand**, housing remains extremely expensive.', n: 'Contrast with the previous point.' },
            { s: '**To sum up**, **in my view** the benefits outweigh the problems.', n: 'A clear opinion in the conclusion.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Cities are great! Loads of stuff to do.', 'Cities offer a wide range of activities.', 'Too informal for an essay.'],
            ['I don’t think that’s fair.', 'I do not believe this is fair.', 'No contractions in a formal essay.'],
            ['In conclusion, I think both sides are good.', 'In conclusion, I believe the advantages are greater.', 'Give a clear opinion at the end.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Is it informal or formal?', groups: ['informal', 'formal'], explain: ['groups'], items: [
            { s: 'find out', g: 0, why: 'A phrasal verb: informal. Formal: *discover*.' },
            { s: 'require', g: 1, why: 'Formal for *need*.' },
            { s: 'a lot of', g: 0, why: 'Informal. Formal: *a great deal of*.' },
            { s: 'consequently', g: 1, why: 'A formal linking word.' },
            { s: 'kids', g: 0, why: 'Informal for *children*.' },
            { s: 'obtain', g: 1, why: 'Formal for *get*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the more formal option for an essay.', items: [
            { q: '___, many young people cannot afford to live in the centre.', o: ['However', 'But anyway', 'Still'], why: '*However* is the formal linker.' },
            { q: 'Local councils ___ more money to improve parks.', o: ['require', 'need loads of', 'gotta have'], why: '*Require* is formal.' },
            { q: 'It could be ___ that cities are healthier than villages.', o: ['argued', 'said like', 'kind of thought'], why: '*It could be argued that* is an impersonal formal structure.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'In the format of the B2 First exam (Reading and Use of English Part 3): use the word in capitals to form a word that fits the gap.', items: [
            { q: 'The ___ of new parks has made the city greener.', base: 'CREATE', a: ['creation'], why: 'A noun is needed after *the*: *creation*.' },
            { q: 'There has been a ___ increase in cycling.', base: 'CONSIDER', a: ['considerable'], why: 'An adjective before *increase*: *considerable*.' },
            { q: 'Many residents feel ___ about the noise.', base: 'SATISFY', a: ['dissatisfied'], why: 'A negative feeling: prefix *dis-* and *-ed* for a feeling.' },
            { q: 'The plan was ___ approved by the council.', base: 'FINAL', a: ['finally'], why: 'An adverb before the verb: *finally*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 3**, first decide **which kind of word** the gap needs (noun, adjective, adverb, verb), then whether it is **negative** or **plural**. Formal texts often need nouns ending in *-tion*, *-ment*, *-ity* and adjectives ending in *-able* or *-ive*.' },
          { t: 'ex', kind: 'speak', h: 'Say these formal sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'It is often argued that cities have become too crowded.' },
            { a: 'On the other hand, public transport has improved considerably.' },
            { a: 'In my view, the advantages outweigh the disadvantages.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'Cities in change',
      about: 'Read four views on how cities are changing and match each statement to the right person.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'More than half of the world’s population now lives in cities, and urban life is changing fast: car-free streets, rooftop gardens, remote work, rising rents. The text below gives four short opinions on these changes.\n\nIt is written in the style of **Part 7** of the Reading paper, a **multiple matching** task. You read several short texts by different people, then decide which person says each thing. The statements **paraphrase** the texts, so look for the same idea in different words, not the same words.' },
          { t: 'reading', title: 'How is your city changing?', md: '**A – Hana, urban planner.** In the last ten years our council has closed several streets to traffic, which has transformed the centre. Shops that were struggling now have more customers, because people walking slowly stop and look. The challenge, having made the centre so attractive, is keeping it affordable for the people who live there.\n\n**B – Marco, café owner.** My business depends on office workers, most of whom now work from home three days a week. Mondays and Fridays are almost empty. I have had to change completely, offering weekend brunches and cooking classes, which, surprisingly, have been more profitable than coffee.\n\n**C – Rita, retired teacher.** Having lived in the same neighbourhood for fifty years, I have seen it go from a quiet working-class area to a fashionable one. I welcome the new parks, but many of my old neighbours, unable to pay the higher rents, have had to move away.\n\n**D – Sam, student.** Rents are the biggest problem for people my age. On the other hand, the city has never been more interesting: rooftop gardens, free festivals, bike lanes everywhere. I would not want to live anywhere else, even if it means sharing a flat with four people.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'In the format of the B2 First exam (Reading and Use of English Part 7): match each statement to the person who says it (Hana, Marco, Rita or Sam).', pairs: [
            ['An unexpected activity has brought in more money.', 'Marco'],
            ['Making the area pleasant has created a new difficulty.', 'Hana'],
            ['Long experience of the area allows a comparison.', 'Rita'],
            ['Accepts a disadvantage because the city is so lively.', 'Sam'],
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 7**, read the statements first and underline the key idea in each. Then scan the texts for **the same idea in other words**: *more profitable* matches *brought in more money*. Several people may mention a similar topic, so check the exact detail before you choose.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the texts again and choose the best answer.', items: [
            { q: 'Why have shops in Hana’s city centre improved?', o: ['People on foot take time to look in windows.', 'Rents for shops have fallen.', 'The council gave them money.'], why: '*People walking slowly stop and look.*' },
            { q: 'What is the main change in Marco’s business?', o: ['He offers new services at weekends.', 'He has moved to a new area.', 'He has closed on Mondays.'], why: 'He now offers weekend brunches and cooking classes.' },
            { q: 'What does Rita regret?', o: ['Losing many of her old neighbours.', 'The creation of new parks.', 'Moving away from the area.'], why: 'Her neighbours, unable to pay, *have had to move away*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake from this unit. Find it and fix it.', items: [
            { s: 'Rents have risen sharply, [what] has forced many families to leave.', a: ['which'], why: 'For the whole idea: *which*.' },
            { s: 'Having [live] there for years, she knows everyone.', a: ['lived'], why: '*Having* + past participle.' },
            { s: 'The café, most of [them] customers are students, opens late.', a: ['whose'], why: 'Possession inside the clause: *whose*.' },
          ] },
          { t: 'ex', kind: 'speak', h: 'Give your view: say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'Having lived here for years, I have seen many changes.' },
            { a: 'Rents have gone up, which worries many young people.' },
            { a: 'On the other hand, the city has never been more interesting.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
      { q: 'The flight was delayed, ___ meant we missed our connection.', o: ['which', 'what', 'that'], why: '*Which* for the whole idea.' },
      { q: 'The people with ___ I work are very friendly.', o: ['whom', 'who', 'that'], why: 'After a preposition: *whom*.' },
      { q: 'She owns four paintings, one of ___ is very valuable.', o: ['which', 'them', 'that'], why: 'Quantifier + *of which*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write ONE word in each gap.', items: [
      { q: 'This is the town in ___ my grandparents met.', a: ['which'], why: 'Preposition + *which*.' },
      { q: 'A writer ___ books are banned may become more famous.', a: ['whose'], why: 'Possession: *whose*.' },
      { q: '___ finished the exam, she felt relieved.', a: ['Having'], why: 'Perfect participle.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the word given.', items: [
      { q: 'People who work at night often sleep badly.', cue: 'WORKING', a: ['People working at night often sleep badly.'], why: 'A reduced relative clause.' },
      { q: 'The castle was built in the 12th century and is now a hotel.', cue: 'BUILT', a: ['Built in the 12th century, the castle is now a hotel.'], why: 'Past participle clause.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Use the word in capitals to form a word that fits the gap.', items: [
      { q: 'The ___ of the new bridge took five years.', base: 'CONSTRUCT', a: ['construction'], why: 'A noun after *the*.' },
      { q: 'Public transport has improved ___ .', base: 'CONSIDER', a: ['considerably'], why: 'An adverb after the verb.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Twenty people came, most of [them] were students.', a: ['whom'], why: 'Inside one sentence: *most of whom*.' },
      { s: '[Knowing not] the area, we used a map.', a: ['Not knowing'], why: '*Not* before the participle.' },
      { s: 'I would like to [find out] whether a room is available.', a: ['enquire', 'ask'], why: 'More formal in a formal email.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Informal or formal?', groups: ['informal', 'formal'], explain: ['groups'], items: [
      { s: 'need', g: 0, why: 'Formal: *require*.' },
      { s: 'therefore', g: 1, why: 'A formal linker.' },
      { s: 'get', g: 0, why: 'Formal: *obtain*.' },
      { s: 'discover', g: 1, why: 'Formal for *find out*.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
      { q: '', o: ['Walking into the room, I saw the lights go off.', 'Walking into the room, the lights went off.', 'Walked into the room, the lights went off.'], why: 'The participle and the main clause need the same subject.' },
      { q: '', o: ['It is often argued that cities are too expensive.', 'It argued often that cities are too expensive.', 'Is often argued cities too expensive.'], why: 'The impersonal formal structure is *It is often argued that*.' },
    ] },
  ],
};
