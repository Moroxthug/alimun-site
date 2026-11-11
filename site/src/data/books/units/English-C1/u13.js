// English C1, unit 13, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Arts and culture: modifiers with gradable and ungradable adjectives, advanced relative clauses (whereby, by which time,
// the extent to which), describing art, books and performances with nuance, and the review for C1 Advanced Writing Part 2.
export const UNIT = {
  id: 'u13',
  title: 'Arts and culture',
  goal: 'Choose the modifier that gives an adjective exactly the strength you mean, build long precise sentences with advanced relative clauses, praise and criticise art, books and performances with nuance, and write a review in the format of C1 Advanced Writing Part 2.',
  art: 'parrot',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading', 'writing'], topics: ['adjectives', 'modifiers', 'relative-clauses', 'art', 'books', 'performances', 'review'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Utterly absorbing, somewhat dated',
      about: 'Use modifiers such as utterly, somewhat, rather, deeply and highly with the adjectives they naturally go with.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'At B2 you learned the basic rule: **gradable** adjectives (*good, interesting, tired*) take *very, extremely, fairly*, and **ungradable** or extreme adjectives (*brilliant, fascinating, exhausted*) take *absolutely, completely, totally*. At C1 that is only the start. Fluent speakers choose a modifier for its **strength**, its **register** and its **attitude**, and many modifiers have favourite partners.\n\nThink of modifiers on a scale. **Slightly, mildly, a touch** and **somewhat** make an adjective weaker; **fairly** and **rather** sit in the middle; **highly, deeply, extremely** and **intensely** make it stronger; **utterly, wholly, entirely** and **absolutely** push it to the limit. *Somewhat* and *wholly* are formal, *a touch* and *pretty* are informal, and the others are neutral.\n\nA third group, **classifying** adjectives (*digital, medieval, annual*), puts things in a category, so they normally take no modifier: a painting is not *very medieval*.' },
          { t: 'table', caption: 'Modifiers and their favourite partners', explain: ['head', 'col1'], head: ['Modifier', 'What it adds', 'Natural partners'], rows: [
            ['utterly', 'to the limit; often negative', 'utterly pointless, utterly absorbing, utterly convincing, utterly miserable'],
            ['deeply', 'strong feeling or belief', 'deeply moving, deeply disappointing, deeply personal, deeply flawed'],
            ['highly', 'high on a scale of judgement', 'highly original, highly acclaimed, highly recommended, highly unlikely'],
            ['somewhat', 'a little (formal, often a polite criticism)', 'somewhat dated, somewhat predictable, somewhat uneven'],
            ['rather', 'more than expected (positive or negative)', 'rather good, rather long, rather disappointing'],
            ['strikingly / refreshingly', 'noticeably, in a way that stands out', 'strikingly original, refreshingly honest, refreshingly short'],
            ['painfully / bitterly', 'to a degree that hurts', 'painfully slow, painfully shy, bitterly disappointed, bitterly cold'],
          ] },
        ],
        [
          { t: 'text', md: '**Rather** is the most slippery of these words. With a **negative** adjective it is a criticism: *The second half was **rather** long.* With a **positive** adjective it often suggests a pleasant surprise: *I expected to hate it, but it was **rather** good.* It can also go before a comparative (*rather better than I feared*) and before *a/an* + adjective + noun (*rather a long film* or *a rather long film*).\n\n**Quite** depends on the adjective. *Quite good* means *fairly good*, but *quite extraordinary* means *completely extraordinary*. With ungradable words, **almost, nearly, virtually** and **practically** are also possible, because something can be close to the limit: *virtually impossible, almost perfect, nearly empty*.\n\nWhy do some partners sound wrong? Collocation is a habit, not logic. *Highly* goes with judgement and probability (*highly successful, highly likely*) but not looks: *strikingly beautiful*, never *highly beautiful*. *Deeply* goes with feelings and beliefs (*deeply moved*), not with size or interest.' },
          { t: 'examples', items: [
            { s: 'The novel is **utterly absorbing**; I missed my stop twice.', n: '*Utterly* with a strong positive word: completely.' },
            { s: 'Her debut was **highly acclaimed**, so the second album felt **somewhat** disappointing.', n: '*Highly* for praise; *somewhat* softens the criticism.' },
            { s: 'It’s a **deeply personal** film about the director’s own childhood.', n: '*Deeply* with something felt inside.' },
            { s: 'The jokes were **mildly amusing** at best.', n: 'Weak praise that is really a criticism.' },
            { s: 'The plot is **virtually impossible** to follow without the programme notes.', n: '*Virtually* with an ungradable adjective: very close to the limit.' },
            { s: 'I thought the opera would be dull, but it was **rather wonderful**.', n: '*Rather* + positive: a pleasant surprise.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['It’s a very unique building.', 'It’s a truly unique building.', '*Unique* is ungradable; *truly* or *quite* adds emphasis without grading it.'],
            ['The actress is highly beautiful.', 'The actress is strikingly beautiful.', '*Highly* goes with judgement and probability, not looks.'],
            ['The exhibition was somewhat brilliant.', 'The exhibition was somewhat uneven.', '*Somewhat* weakens, so it does not sit well with an extreme positive word.'],
            ['It was a very digital performance.', 'It was a largely digital performance.', 'Classifying adjectives are not graded; *largely* or *entirely* says how much of it.'],
          ] },
          { t: 'dialogue', title: 'Leaving the theatre', lines: [
            { who: 'Elena', s: 'Well? You were utterly silent for the whole second act.' },
            { who: 'Daniel', s: 'Because it was utterly absorbing. I thought the lead was strikingly good.' },
            { who: 'Elena', s: 'She was, but the script felt somewhat dated. All those speeches.' },
            { who: 'Daniel', s: 'A touch long, maybe. Still, I found the ending deeply moving.' },
            { who: 'Elena', s: 'Rather moving, I’d say. Deeply is a bit strong.' },
            { who: 'Daniel', s: 'Then we disagree by exactly one adverb.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the modifier that sounds most natural.', items: [
            { q: 'The documentary is a ___ moving portrait of a family in exile.', o: ['deeply', 'highly', 'utterly'], why: '*Deeply* is the usual partner of feelings: *deeply moving*.' },
            { q: 'It is ___ unlikely that the gallery will reopen this year.', o: ['highly', 'deeply', 'bitterly'], why: '*Highly* goes with probability: *highly unlikely*.' },
            { q: 'The sequel was ___ pointless; it simply repeated the first film.', o: ['utterly', 'slightly', 'highly'], why: '*Utterly* pushes a negative word to the limit.' },
            { q: 'For a book of essays, it is ___ short: under two hundred pages.', o: ['refreshingly', 'deeply', 'bitterly'], why: '*Refreshingly* turns *short* into praise.' },
            { q: 'The staging felt ___ dated, but the music still works.', o: ['somewhat', 'utterly', 'highly'], why: '*Somewhat* gives a mild, polite criticism.' },
          ] },
          { t: 'ex', kind: 'colloc', h: 'Which adjectives go naturally with the modifier?', items: [
            { key: 'highly', o: ['original', 'acclaimed', 'beautiful', 'moved'], a: [0, 1], why: '*Highly original, highly acclaimed*; but *strikingly beautiful*, *deeply moved*.' },
            { key: 'deeply', o: ['moving', 'flawed', 'big', 'recommended'], a: [0, 1], why: '*Deeply moving, deeply flawed*; but *highly recommended*.' },
            { key: 'painfully', o: ['slow', 'shy', 'brilliant', 'likely'], a: [0, 1], why: '*Painfully* goes with a degree that hurts: *slow, shy*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 1): the eight sentences make one short review. Choose the word that best fits each gap.', items: [
            { q: 'Marta Ruiz’s new novel has been ___ acclaimed by critics on both sides of the Atlantic.', o: ['highly', 'deeply', 'utterly', 'bitterly'], why: '*Highly acclaimed* is the fixed partnership for praise.' },
            { q: 'It tells the ___ personal story of her grandmother’s journey from Seville to Buenos Aires.', o: ['deeply', 'highly', 'vastly', 'mildly'], why: '*Deeply personal*: something felt from the inside.' },
            { q: 'The first chapters are ___ absorbing, full of sharp dialogue and vivid detail.', o: ['utterly', 'highly', 'heavily', 'largely'], why: '*Utterly absorbing*: completely, to the limit.' },
            { q: 'Ruiz’s style is ___ original, mixing letters, recipes and old photographs.', o: ['strikingly', 'bitterly', 'painfully', 'deeply'], why: '*Strikingly original*: it stands out.' },
            { q: 'The middle section, however, is ___ slow, and some readers may give up.', o: ['painfully', 'highly', 'utterly', 'refreshingly'], why: '*Painfully slow*: slow to a degree that hurts.' },
            { q: 'A subplot about a lost painting is ___ predictable.', o: ['somewhat', 'highly', 'deeply', 'vastly'], why: '*Somewhat* gives a polite, moderate criticism.' },
            { q: 'Yet the ending is ___ honest, refusing the happy reunion we expect.', o: ['refreshingly', 'bitterly', 'mildly', 'heavily'], why: '*Refreshingly honest*: honest in a welcome way.' },
            { q: 'Readers who loved her first book are unlikely to be ___ disappointed.', o: ['bitterly', 'highly', 'vastly', 'largely'], why: '*Bitterly disappointed* is the natural partnership.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 1**, the four options often mean almost the same thing, so meaning alone will not tell you the answer. Ask which word **goes with** the word after the gap. Say each option aloud with its partner: *highly acclaimed* sounds right, *deeply acclaimed* does not.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor. Let the modifier carry the stress.', tutor: 'lena', items: [
            { a: 'The ending was utterly absorbing.' },
            { a: 'It felt somewhat dated, but rather wonderful in places.' },
            { a: 'Her new novel is highly original and deeply personal.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'By which time the curtain had fallen',
      about: 'Build precise, formal sentences with whereby, in which case, by which time, the extent to which and other advanced relative clauses.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'You already use **who, which, that, whose, where** and **when**, with and without commas. At C1 the pronoun often follows a **preposition** or a **noun phrase**, and the clause carries a whole idea.\n\nIn formal English the preposition moves **in front of** *which* or *whom*: *the gallery **in which** the work was first shown*, *the critic **to whom** the book is dedicated*. In conversation it usually stays at the end: *the gallery the work was first shown in*. Both are correct; the choice is about register. After a preposition you cannot use *that* or *who*.\n\nSome fixed combinations let one sentence do the work of two.' },
          { t: 'table', caption: 'Advanced relative patterns', explain: ['head', 'col1'], head: ['Pattern', 'Meaning', 'Example'], rows: [
            ['whereby', 'by which; a system or arrangement (formal)', 'a scheme whereby students see shows for free'],
            ['in which case', 'and if that happens', 'The show may sell out, in which case there is a live stream.'],
            ['by which time', 'and before or at that point', 'We arrived at nine, by which time the curtain had fallen.'],
            ['at which point', 'and at that moment', 'The singer forgot the words, at which point the audience joined in.'],
            ['the extent to which', 'how much', 'Critics disagree about the extent to which the film is autobiographical.'],
            ['none / some / most of which, whom', 'part of a group already named', 'He wrote twelve plays, none of which were staged in his lifetime.'],
            ['which (comment on the whole clause)', 'and this', 'The museum is free, which explains the queues.'],
          ] },
        ],
        [
          { t: 'text', md: 'Why does English need these? Because they show the **logical link** between two ideas inside one sentence. *We arrived at nine. The curtain had fallen by then.* is two flat facts. *We arrived at nine, **by which time** the curtain had fallen.* shows the order and the disappointment in one movement. \n\nNotice that **in which case, by which time** and **at which point** always follow a **comma** and refer back to the whole previous clause. **Whereby** is formal, for systems and agreements. **The extent to which** and **the way in which** are noun phrases, so they can be the subject or object of a verb: *The extent to which audiences have changed **is** hard to measure.*\n\nIn quantity clauses, keep the pronoun after *of*: *forty paintings, **most of which** are portraits*, never *most of them which*. For people use **whom**: *a cast of twenty, **few of whom** had acted before*.' },
          { t: 'examples', items: [
            { s: 'The theatre runs a scheme **whereby** anyone under twenty-five pays five pounds.', n: 'A formal word for a system or arrangement.' },
            { s: 'Rain is forecast, **in which case** the concert will move indoors.', n: '= and if it rains, the concert will move indoors.' },
            { s: 'The book was translated in 1990, **by which time** the author had died.', n: 'The author’s death came before or by that date.' },
            { s: 'It is hard to judge **the extent to which** the novel is based on fact.', n: 'A noun phrase: how far it is based on fact.' },
            { s: 'She left forty sketchbooks, **several of which** are now on display.', n: 'Part of a group: *several of which*.' },
            { s: 'The lead actor was ill, **which meant** the understudy went on.', n: '*Which* comments on the whole first clause.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['the artist with who she studied', 'the artist with whom she studied', 'After a preposition, use *whom* for people.'],
            ['the room in that it hangs', 'the room in which it hangs', 'No *that* after a preposition.'],
            ['twelve plays, none of them were staged', 'twelve plays, none of which were staged', 'Without a linking word you need *which*, or a new sentence.'],
            ['We arrived late, by that time it had started.', 'We arrived late, by which time it had started.', 'A comma cannot join two sentences; *which* makes it one.'],
            ['It may rain, in that case we will move.', 'It may rain, in which case we will move.', 'The relative form is *in which case*.'],
          ] },
          { t: 'reading', title: 'From a festival programme', md: 'This year the festival introduces a scheme whereby every ticket holder may bring a guest under eighteen free of charge. Performances begin at eight, by which time the doors to the main hall will be closed. Latecomers will be shown to the balcony, from which the view is, admittedly, somewhat restricted.\n\nThe opening night features the Riverside Players, a company of thirty, few of whom have trained professionally. Their director, to whom much of the company’s success is owed, is interested in the extent to which ordinary people’s stories can fill a large stage. If the weather is fine, the final scene moves outdoors, in which case the audience is invited to follow the actors into the park, which is lit for the occasion.' },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the correct relative phrase.', items: [
            { q: 'The tickets may sell out, ___ we will watch the stream at home.', o: ['in which case', 'by which time', 'whereby'], why: '*In which case* = and if that happens.' },
            { q: 'We reached the gallery at five, ___ the café had closed.', o: ['by which time', 'in which case', 'the extent to which'], why: 'Something had already happened by that point: *by which time*.' },
            { q: 'Museums now use a system ___ visitors book a time slot online.', o: ['whereby', 'at which point', 'in which case'], why: '*Whereby* describes a system or arrangement.' },
            { q: 'The orchestra has sixty members, most of ___ are under thirty.', o: ['whom', 'who', 'them'], why: 'After *of* in a relative clause: *whom* for people.' },
            { q: 'Nobody knows ___ the painting has been restored.', o: ['the extent to which', 'in which case', 'whereby'], why: '*The extent to which* = how much.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Join the two sentences into one. Use the words given.', items: [
            { q: 'The band played for three hours. By then most people had gone home.', cue: 'by which time', a: ['The band played for three hours, by which time most people had gone home.'], why: 'A comma, then *by which time* + past perfect.' },
            { q: 'The director wrote six films. None of them made money.', cue: 'none of which', a: ['The director wrote six films, none of which made money.', 'The director wrote six films, none of which made any money.'], why: '*None of which* links the group to the comment.' },
            { q: 'She thanked her teacher. She owes her career to him.', cue: 'to whom', a: ['She thanked her teacher, to whom she owes her career.'], why: 'Formal: preposition + *whom*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 2): the sentences make one short text. Write one word in each gap.', items: [
            { q: 'The city’s new arts centre opened in March, by ___ time it was already two years late.', a: ['which'], why: '*By which time*: the fixed relative phrase.' },
            { q: 'It was designed by an architect ___ earlier buildings had divided opinion.', a: ['whose'], why: 'Possession: *whose earlier buildings*.' },
            { q: 'The centre has three theatres, the largest of ___ seats a thousand people.', a: ['which'], why: '*The largest of which*: part of a group of things.' },
            { q: 'There is a scheme ___ local schools can use the rehearsal rooms for free.', a: ['whereby'], why: '*Whereby* introduces an arrangement.' },
            { q: 'Critics question the extent ___ which it will attract new audiences.', a: ['to'], why: '*The extent to which* needs *to*.' },
            { q: 'Funding may be cut next year, in ___ case some programmes will close.', a: ['which'], why: '*In which case*: and if that happens.' },
            { q: 'The opening was attended by several ministers, none of ___ stayed for the show.', a: ['whom'], why: 'People after *of*: *none of whom*.' },
            { q: 'Ticket prices are low, ___ may explain why most nights are full.', a: ['which'], why: 'A comment on the whole previous clause: *which*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 2** about a third of the gaps are often grammar words around relative clauses: *which, whom, whose, whereby*, and the prepositions that belong to fixed phrases. If the word before the gap is a preposition and the gap is followed by a clause, try *which* or *whom* first.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor. Pause briefly at each comma.', tutor: 'kofi', items: [
            { a: 'We arrived at nine, by which time the curtain had fallen.' },
            { a: 'It may rain, in which case the concert moves indoors.' },
            { a: 'She wrote twelve plays, none of which were staged in her lifetime.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'A tour de force, or simply overrated?',
      about: 'Praise and criticise art, books and performances with nuance: precise adjectives, idioms and balanced judgements.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'At B2 a film was *gripping* or *moving*. At C1 you **evaluate**: what a work tries to do, how well it does it and what holds it back.\n\nThe richest vocabulary describes the **effect** on the audience. A work can be **thought-provoking** (it makes you think), **evocative** (it brings back feelings or places), **poignant** (sad in a quiet, touching way), **haunting** (it stays in your mind) or **compelling** (you cannot look away). Criticism has its own words: a work can be **derivative** (copied from others), **formulaic** (it follows a predictable recipe), **pedestrian** (dull, without imagination), **self-indulgent** (made for the artist more than the audience) or **overrated** (praised more than it deserves). Its opposite, **underrated**, is a common way to defend a work.\n\nA **tour de force** is a performance or work of great skill; a **flop** is a commercial failure; something **ahead of its time** was not understood when it appeared.' },
          { t: 'table', caption: 'Phrases for evaluating a work', explain: ['head', 'col1'], head: ['Phrase', 'Meaning'], rows: [
            ['live up to the hype / expectations', 'be as good as people said'],
            ['fall flat', 'fail to have the intended effect (a joke, a scene)'],
            ['divide critics / opinion', 'some love it, some do not'],
            ['stay with you', 'remain in your mind long afterwards'],
            ['a slow burn', 'something that starts quietly and grows stronger'],
            ['lack depth', 'be too simple, with no real thought behind it'],
            ['do justice to', 'show something as well as it deserves'],
            ['for all its flaws / strengths', 'in spite of its flaws or strengths'],
          ] },
        ],
        [
          { t: 'text', md: 'Strong reviews are rarely all praise or all criticism. **Concession** shows you have weighed the work: admit a weakness before praising, or a strength before criticising. The second half carries the judgement.\n\n*While not without its faults, the production is a tour de force.* (overall positive)\n*For all its visual beauty, the film ultimately lacks depth.* (overall negative)\n*It never quite lives up to the hype, but the final scene stays with you.* (mixed, ending positive)\n\nNotice how much the small words matter: **never quite**, **ultimately**, **at times**, **in places**, **for the most part**. They let you be exact without being harsh. Combine them with the modifiers from lesson 1: *a **somewhat** formulaic plot*, *a **deeply** poignant ending*.' },
          { t: 'examples', items: [
            { s: 'Her performance as the ageing queen is **a tour de force**.', n: 'A display of exceptional skill.' },
            { s: 'The film was **a flop** on release but is now seen as **ahead of its time**.', n: 'A commercial failure, later appreciated.' },
            { s: 'The jokes **fall flat** and the plot is **formulaic**.', n: 'Two criticisms: no effect, and predictable.' },
            { s: 'It’s **a slow burn**, but by the last chapter it is utterly **compelling**.', n: 'Starts quietly, ends powerfully.' },
            { s: '**For all its flaws**, it is one of the most **thought-provoking** plays of the year.', n: 'A concession, then the main judgement.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['The film was very derivated.', 'The film was highly derivative.', 'The adjective is *derivative*; *highly* is its usual partner.'],
            ['The novel is a tour of force.', 'The novel is a tour de force.', 'A French phrase used in English: *de*, not *of*.'],
            ['The jokes fell down.', 'The jokes fell flat.', 'The idiom is *fall flat*.'],
            ['The exhibition is sensible and touching.', 'The exhibition is sensitive and touching.', '*Sensible* means practical; *sensitive* means delicate and aware of feelings.'],
          ] },
          { t: 'dialogue', title: 'A radio arts programme', lines: [
            { who: 'Priya', s: 'So, the new production of the play everyone has been talking about. Does it live up to the hype?' },
            { who: 'Owen', s: 'Not quite. The staging is strikingly beautiful, but for all that, it lacks depth.' },
            { who: 'Priya', s: 'I disagree. I found it a slow burn. By the final act it was utterly compelling.' },
            { who: 'Owen', s: 'The final act, yes. But the comic scenes fall flat, and the first hour is frankly self-indulgent.' },
            { who: 'Priya', s: 'Self-indulgent? It’s a tour de force from the lead actor.' },
            { who: 'Owen', s: 'Then let’s say it divides critics, and leave it there.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Is each phrase praise, criticism, or a mixed judgement?', groups: ['Praise', 'Criticism', 'Mixed'], explain: ['groups'], items: [
            { s: 'a tour de force', g: 0, why: 'A display of great skill.' },
            { s: 'utterly compelling', g: 0, why: 'You cannot look away.' },
            { s: 'highly derivative', g: 1, why: 'Copied from other works.' },
            { s: 'it falls flat', g: 1, why: 'It fails to have its effect.' },
            { s: 'for all its flaws, a fine debut', g: 2, why: 'A concession followed by praise.' },
            { s: 'it never quite lives up to the hype', g: 2, why: 'Good, but not as good as people said.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 3): use the word in capitals to form a word that fits the gap.', items: [
            { q: 'The novel’s greatest strength is its ___: nothing like it has been written before.', base: 'original', a: ['originality'], why: 'A noun after *its*: *originality*.' },
            { q: 'Sadly, the main character remains ___ from start to finish.', base: 'convince', a: ['unconvincing'], why: 'A negative adjective: *unconvincing*.' },
            { q: 'The plot suffers from a certain ___; you can guess every twist.', base: 'predict', a: ['predictability'], why: 'A noun after *a certain*: *predictability*.' },
            { q: 'The second album is ___ short, at barely thirty minutes.', base: 'disappoint', a: ['disappointingly'], why: 'An adverb before *short*: *disappointingly*.' },
            { q: 'Many viewers ___ the film when it first came out.', base: 'estimate', a: ['underestimated'], why: 'A past verb with a prefix meaning *too little*: *underestimated*.' },
            { q: 'Her ___ handling of a difficult subject won her the prize.', base: 'master', a: ['masterful', 'masterly'], why: 'An adjective before *handling*: *masterful* or *masterly*.' },
            { q: 'The dancers move ___ across the stage, as if gravity did not exist.', base: 'effort', a: ['effortlessly'], why: 'An adverb after *move*: *effortlessly*.' },
            { q: 'The director’s ___ to detail is visible in every costume.', base: 'attend', a: ['attention'], why: 'A noun after *The director’s*: *attention to detail*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 3** at C1, many answers need **two changes**: a prefix and a suffix (*un-convinc-ing, under-estimat-ed*). After you find the word class, ask whether the meaning is negative and whether the verb needs a tense ending or the noun a plural.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'For all its flaws, it is a thought-provoking film.' },
            { a: 'It never quite lives up to the hype.' },
            { a: 'Her performance is an absolute tour de force.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'Writing a review',
      about: 'Write a review in the format of C1 Advanced Writing Part 2: describe, evaluate with nuance and recommend, in 220 to 260 words.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'In **C1 Advanced Writing Part 2** you choose one task from three. The choice usually includes an email or letter, a proposal, a report and a **review**. You write **220 to 260 words**. The whole Writing paper lasts one hour and thirty minutes for two tasks, so you have about forty-five minutes for each, including planning and checking.\n\nA B2 review describes, gives an opinion and recommends. A C1 review does the same, but the balance changes: **description is short**, and most of the text is **evaluation**. The reader wants to know whether the work succeeds and is worth their time. The task usually adds an angle, such as *say how it compares with the book*; answer it clearly, because it is part of the Content mark.\n\nThe register is **neutral to semi-formal**, with a personal voice: use *I* and speak to the reader, with precise, varied language.' },
          { t: 'table', caption: 'A plan for a C1 review', explain: ['head', 'col0', 'col1'], head: ['Part', 'What to write', 'Useful language'], rows: [
            ['Title', 'Name the work and hint at your verdict', '“Salt and Silence”: quietly devastating'],
            ['Opening', 'Draw the reader in and say what the work is', 'Anyone who assumes that… is in for a surprise.'],
            ['Brief description', 'Only what the reader needs; no spoilers', 'Set in…, it follows… / The show brings together…'],
            ['Evaluation: strengths', 'The main strength, with a precise reason', 'What makes it a tour de force is the way in which…'],
            ['Evaluation: weaknesses', 'A fair criticism, softened if needed', 'For all its strengths, it is not without its faults.'],
            ['The task’s angle and verdict', 'Answer the specific question; recommend to a named audience', 'I would highly recommend it to anyone who…'],
          ] },
        ],
        [
          { t: 'reading', title: 'Task and model review', md: 'Task: An international arts website has asked readers for reviews of an exhibition, performance or book that surprised them. Describe the work, explain what surprised you and say who you would recommend it to.\n\n**“Salt and Silence” at the Harbour Gallery: quietly devastating**\n\nAnyone who assumes that an exhibition of photographs of empty fishing villages will make for a dull afternoon is in for a surprise. “Salt and Silence”, the first major show by the photographer Inés Varela, is one of the most quietly devastating exhibitions I have seen in years.\n\nThe show brings together some sixty black-and-white images taken over a decade along the Atlantic coast, in villages whose young people have almost all left for the cities. There are hardly any people in the pictures. What remains are nets left to dry, a café with its chairs stacked, a school whose clock has stopped. The effect is deeply moving rather than sentimental, largely because Varela never tells you what to feel.\n\nWhat surprised me most, however, was the way in which the exhibition is arranged. The rooms move from dawn to night, by which time the visitor has walked, almost without noticing, through an entire day in a village that is slowly disappearing. It is a simple idea, but it turns a collection of images into a story.\n\nFor all its strengths, the show is not without its faults. The captions are somewhat over-written, and the final room, which features colour video, feels oddly out of place.\n\nEven so, I would highly recommend “Salt and Silence” to anyone with an interest in photography, and to anyone who has ever left a small place behind. Allow two hours, and go on a weekday, when the rooms are quiet enough to do it justice.' },
          { t: 'ex', kind: 'choice', h: 'Read the model review. Choose the best answer.', items: [
            { q: 'How does the writer answer the task’s question about surprise?', o: ['In the opening and in the third paragraph, about the way the rooms are arranged.', 'Only in the title.', 'By describing the price of the tickets.'], why: 'The opening sets up a surprise; the third paragraph names what surprised the writer most.' },
            { q: 'How much of the review is pure description?', o: ['About one paragraph; the rest is evaluation.', 'Almost all of it.', 'None of it.'], why: 'At C1, description is short and evaluation carries the review.' },
            { q: 'How does the writer make the criticism sound fair?', o: ['With a concession and a softening modifier: *For all its strengths… somewhat over-written*.', 'By attacking the photographer.', 'By leaving criticism out.'], why: 'A balanced judgement makes the praise more believable.' },
            { q: 'Who is the recommendation for?', o: ['Readers interested in photography and anyone who has left a small place behind.', 'Everyone, without exception.', 'Only professional photographers.'], why: 'A C1 recommendation names its audience precisely.' },
          ] },
        ],
        [
          { t: 'text', md: 'Examiners mark four areas, and at C1 each one asks a little more than at B2.\n\n**Content**: every part of the task is covered, including its angle (here, *what surprised you*).\n\n**Communicative achievement**: the review holds the reader’s attention in a consistent register, like a real piece for a real website.\n\n**Organisation**: each paragraph has a clear job, linked by varied devices: relative clauses, concession, *this* and *such*.\n\n**Language**: a wide, precise vocabulary and complex grammar used with control. One well-chosen *tour de force* is worth more than five *amazing*s.' },
          { t: 'table', caption: 'Common mistakes in C1 reviews', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Three paragraphs retelling the plot', 'Two sentences of description, then evaluation', 'At C1 the reader wants your judgement, not a summary.'],
            ['It was amazing. The photos were amazing.', 'The photographs are deeply moving rather than sentimental.', 'Precise words, with a contrast that shows thought.'],
            ['In conclusion, the advantages outweigh the disadvantages.', 'Even so, I would highly recommend it to…', 'A review is not an essay; end with a verdict for the reader.'],
            ['(the task’s angle forgotten)', 'What surprised me most was…', 'Every part of the task counts towards Content.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Which part of a review does each sentence belong to?', groups: ['Opening', 'Evaluation', 'Verdict'], explain: ['groups'], items: [
            { s: 'Few debuts arrive with as much noise as this one.', g: 0, why: 'It draws the reader in.' },
            { s: 'The dialogue is sharp, but the second half is painfully slow.', g: 1, why: 'A strength and a weakness: evaluation.' },
            { s: 'What lifts the production is the way in which music and silence are balanced.', g: 1, why: 'A precise reason for praise.' },
            { s: 'It is not for everyone, but patient readers will be richly rewarded.', g: 2, why: 'A recommendation to a named audience.' },
            { s: 'If you only see one play this season, make it this one.', g: 2, why: 'A final verdict.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Writing Part 2): read the task below. Choose the best answer to each question about it.', items: [
            { q: 'Task: “Book or screen? We want reviews of a film or series based on a book. Evaluate the adaptation, say how it compares with the original and whether people who have not read the book will enjoy it.” Which plan covers the whole task?', o: ['A short description, an evaluation, a comparison with the book, and a verdict for people who have not read it.', 'A summary of the book’s plot and a conclusion.', 'An evaluation of the film and its box-office success.'], why: 'All three parts of the task are needed: evaluation, comparison and the verdict for non-readers.' },
            { q: 'Which opening is most effective?', o: ['Adapting a nine-hundred-page novel for television sounds like madness; remarkably, this series makes it look easy.', 'In this review I will write about a series.', 'Dear Sir or Madam, I am writing to review a series.'], why: 'It draws the reader in and hints at the verdict.' },
            { q: 'Which sentence best compares the adaptation with the book?', o: ['Where the novel lingers on the narrator’s thoughts, the series lets its actors’ faces do the work.', 'The book is a book and the series is a series.', 'I read the book in 2019.'], why: 'A precise contrast, using *where* to compare.' },
            { q: 'How many words should you write?', o: ['220 to 260', '140 to 190', '300 to 350'], why: 'C1 Advanced Writing Part 2 asks for 220 to 260 words.' },
          ] },
          { t: 'text', md: '**Your writing task.** You see this on an international culture website: *Reviews wanted: a work that divided opinion. Tell us about a film, series, play or book that critics or audiences disagreed about. Describe it briefly, explain why you think it divided opinion, and say whether, in your view, it deserves its reputation.*\n\nWrite your review in **220 to 260 words** and send it to your teacher, who will correct it and mark it on the four areas. Plan for five minutes first: decide your verdict, then choose one strength and one weakness you can explain precisely. Use at least two modifiers from lesson 1, one advanced relative clause from lesson 2 and one concession from lesson 3, and give your review a title.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these review sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'For all its strengths, the show is not without its faults.' },
            { a: 'The effect is deeply moving rather than sentimental.' },
            { a: 'I would highly recommend it to anyone with an interest in photography.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the modifier that sounds most natural.', items: [
      { q: 'The exhibition was ___ acclaimed in the national press.', o: ['highly', 'deeply', 'utterly'], why: '*Highly acclaimed*.' },
      { q: 'The final song is ___ moving.', o: ['deeply', 'highly', 'vastly'], why: '*Deeply* with feelings.' },
      { q: 'The plot is ___ predictable, but the acting saves it.', o: ['somewhat', 'utterly', 'highly'], why: '*Somewhat* gives a mild criticism.' },
      { q: 'The pace is ___ slow in the middle.', o: ['painfully', 'highly', 'deeply'], why: '*Painfully slow*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'The play may be cancelled, in ___ case tickets will be refunded.', a: ['which'], why: '*In which case*.' },
      { q: 'We got there at ten, by which ___ the band had finished.', a: ['time'], why: '*By which time*.' },
      { q: 'She has written nine novels, three of ___ have been filmed.', a: ['which'], why: 'Part of a group of things: *three of which*.' },
      { q: 'There is a scheme ___ students can borrow instruments.', a: ['whereby'], why: '*Whereby* introduces an arrangement.' },
      { q: 'The cast includes twenty children, few of ___ had acted before.', a: ['whom'], why: 'People after *of*: *whom*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Join the two sentences into one. Use the words given.', items: [
      { q: 'The power went off. At that moment the audience started singing.', cue: 'at which point', a: ['The power went off, at which point the audience started singing.'], why: 'A comma, then *at which point*.' },
      { q: 'He painted forty portraits. Most of them have been lost.', cue: 'most of which', a: ['He painted forty portraits, most of which have been lost.'], why: '*Most of which* links the group.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Use the word in capitals to form a word that fits the gap.', items: [
      { q: 'The lead character is sadly ___.', base: 'convince', a: ['unconvincing'], why: 'A negative adjective.' },
      { q: 'The book’s ___ is its greatest strength.', base: 'original', a: ['originality'], why: 'A noun.' },
      { q: 'Critics ___ the film when it was released.', base: 'estimate', a: ['underestimated'], why: 'A past verb with *under-*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'It is a [very] unique building.', a: ['truly', 'quite'], why: '*Unique* is not graded with *very*.' },
      { s: 'The jokes [fell down] completely.', a: ['fell flat'], why: '*Fall flat*.' },
      { s: 'The novel is a tour [of] force.', a: ['de'], why: '*A tour de force*.' },
      { s: 'the teacher with [who] she studied', a: ['whom'], why: 'After a preposition: *whom*.' },
    ] },
  ],
};
