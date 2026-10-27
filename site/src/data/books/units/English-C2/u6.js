// English C2, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Advanced grammar in use',
  goal: 'Use the finer points of English grammar with confidence.',
  art: 'cat',
  tags: { skills: ['grammar', 'reading', 'writing'], topics: ['subjunctive', 'formulaic phrases', 'absolute constructions', 'non-finite clauses', 'modals', 'aspect'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'I suggest that he be told',
      about: 'Use the mandative subjunctive and the fixed phrases that survive from it.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'English has a **subjunctive** that is easy to miss, because it often looks like the base form of the verb. The **mandative subjunctive** is used after verbs and adjectives of **demand, advice and importance**: *demand, insist, recommend, suggest, propose, ask, it is essential / vital / important that…*. The verb after *that* is the **base form**, with no *-s* for *he/she/it*: *I suggest that he **be** told. It is essential that she **attend**. They insisted that the contract **be** signed.* In British English, *should* is common instead: *I suggest that he should be told.*' },
          { t: 'table', caption: 'The mandative subjunctive', explain: ['head', 'col0'], head: ['Trigger', 'Subjunctive (American, formal)', 'With should (British)'], rows: [
            ['I suggest that…', 'I suggest that he be told.', 'I suggest that he should be told.'],
            ['It is essential that…', 'It is essential that she attend.', 'It is essential that she should attend.'],
            ['They insisted that…', 'They insisted that the contract be signed.', 'They insisted that the contract should be signed.'],
            ['I recommend that…', 'I recommend that you take notes.', 'I recommend that you should take notes.'],
          ] },
        ],
        [
          { t: 'text', md: 'Other forms of the subjunctive survive only in **fixed phrases**. **If I were you…** (not *was* in formal English). **So be it** means *let it be so*. **Far be it from me** means *I would not dare* (to say or do): *Far be it from me to criticise, but…* **Were it not for** means *if it were not for*: *Were it not for the rain, we would go.* **Be that as it may** means *whatever the case*. **Come what may** means *whatever happens*. **Heaven forbid** is a wish that something does not happen. **Suffice it to say** means *it is enough to say*.' },
          { t: 'tip', art: 'owl', md: 'The mandative subjunctive is **not** used after *think* or *say*: *I think that he **is** right*, not *be right*. If a sentence is about a **demand or a recommendation**, the base form is correct and *-s* is a mistake: *She demanded that he **leave***, not *leaves*. Learn the phrases as **single blocks**.' },
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'It is essential that every student ___ the form before Friday.', o: ['complete', 'completes', 'will complete'], why: 'Mandative subjunctive: the base form.' },
            { q: 'The board insisted that the report ___ published immediately.', o: ['be', 'is', 'was'], why: 'Mandative subjunctive: *be*.' },
            { q: 'If I ___ you, I would accept the offer.', o: ['were', 'was', 'am'], why: 'Formal conditional: *were*.' },
            { q: '___ for the rain, we would go for a walk.', o: ['Were it not', 'If it is not', 'Was it not'], why: '*Were it not for* = if it were not for.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite with the mandative subjunctive.', items: [
            { q: 'The doctor said that it was important for him to rest.', cue: 'The doctor said it was important that he', a: ['The doctor said it was important that he rest.'], why: 'Base form after *important that*.' },
            { q: 'She demanded that he should leave the room.', cue: 'She demanded that he', a: ['She demanded that he leave the room.'], why: 'Drop *should* for the subjunctive.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the phrase with its meaning.', pairs: [
            ['so be it', 'let it be so'],
            ['far be it from me', 'I would not dare'],
            ['be that as it may', 'whatever the case'],
            ['come what may', 'whatever happens'],
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'I suggest that he [takes] a break.', a: ['take'], why: 'Mandative subjunctive: the base form.' },
            { s: 'It is vital that she [attends] the meeting.', a: ['attend'], why: 'Mandative subjunctive: the base form.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'The meeting over, we left',
      about: 'Use absolute constructions and reduced clauses for a compact style.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'An **absolute construction** is a phrase with its **own subject**, separate from the subject of the main clause. It gives time, cause or condition in a compact form: *The meeting over, we left.* (= When the meeting was over.) *Weather permitting, we’ll sail tomorrow.* (= If the weather permits.) *All things considered, it was a success.* *That done, she went home.* With **with**: *With the lights off, the room felt larger.*' },
          { t: 'table', caption: 'Absolute constructions', explain: ['head', 'col0'], head: ['Construction', 'Meaning', 'Example'], rows: [
            ['noun + past participle', 'time', 'The meeting over, we left.'],
            ['noun + -ing', 'condition', 'Weather permitting, we’ll sail tomorrow.'],
            ['pronoun + past participle', 'time', 'That done, she went home.'],
            ['all things considered', 'summing up', 'All things considered, it was a success.'],
            ['with + noun + participle or adjective', 'circumstance', 'With the lights off, the room felt larger.'],
          ] },
        ],
        [
          { t: 'text', md: 'Subordinate clauses can also be **reduced** by leaving out the subject and the verb *be* when the subject is the same as in the main clause: *Although tired, she kept working.* (= Although she was tired.) *When asked, he refused to comment.* *If possible, call me before noon.* *Once inside, they locked the door.* This is common in formal and journalistic writing.' },
          { t: 'tip', art: 'owl', md: 'In a reduced clause, the **understood subject** must be the same as the subject of the main clause; otherwise the sentence is faulty: *Although tired, the work continued* wrongly suggests that the work was tired. In an absolute construction, the **two subjects differ** on purpose: *The meeting over, we left.* These are formal structures; do not use them in a casual message.' },
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: '___, we’ll have the picnic outside.', o: ['Weather permitting', 'Permitting the weather', 'The weather permitted'], why: 'An absolute construction: noun + *-ing*.' },
            { q: 'The work ___, the builders went home.', o: ['finished', 'finishing', 'to finish'], why: 'Noun + past participle.' },
            { q: 'Although ___, she kept on working.', o: ['tired', 'tiring', 'tires'], why: 'A reduced clause: *although (she was) tired*.' },
            { q: 'When ___, he refused to comment.', o: ['asked', 'asking', 'ask'], why: 'A reduced clause: *when (he was) asked*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite with a compact construction, using the words given.', items: [
            { q: 'When the meeting was over, we left.', cue: 'The meeting', a: ['The meeting over, we left.'], why: 'An absolute construction.' },
            { q: 'If the weather permits, we will sail tomorrow.', cue: 'Weather', a: ['Weather permitting, we will sail tomorrow.', 'Weather permitting, we’ll sail tomorrow.'], why: 'An absolute construction.' },
            { q: 'Although she was exhausted, she finished the race.', cue: 'Although', a: ['Although exhausted, she finished the race.'], why: 'A reduced clause.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the faulty sentence.', items: [
            { s: 'Weather [permit], we will sail tomorrow.', a: ['permitting'], why: 'An absolute construction uses *-ing*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'He will keep interrupting',
      about: 'Use modals and aspect for subtle shades of meaning.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: '**Will** does not only talk about the future. It can express a **typical habit**, often with some annoyance: *He will keep interrupting.* *Boys will be boys.* *She will sit for hours doing nothing.* With stress, it can show **insistence**: *You will do as I say!* **Would** is the past form: *He would always arrive late.* **Shall** is used for offers and suggestions (*Shall I open the window?*) and in formal rules (*The tenant shall pay rent on the first of the month.*). **May well** means *quite possibly*: *It may well be true.*' },
          { t: 'table', caption: 'Subtle uses of modals', explain: ['head', 'col0'], head: ['Modal', 'Meaning', 'Example'], rows: [
            ['will (stressed)', 'typical habit, annoyance', 'He will keep interrupting.'],
            ['will', 'general truth', 'Boys will be boys.'],
            ['would', 'past habit', 'He would always arrive late.'],
            ['shall', 'offer or suggestion', 'Shall I open the window?'],
            ['shall (formal)', 'obligation', 'The tenant shall pay rent monthly.'],
            ['may well', 'quite possibly', 'It may well be true.'],
          ] },
        ],
        [
          { t: 'text', md: '**Dare** and **need** can be modals with no *-s* and no *do*, mostly in questions and negatives: *Dare I say it?* *You needn’t worry.* *He daren’t ask.* The **present perfect continuous** or the **present continuous with always** can express **annoyance** or criticism: *Who’s been using my laptop?* *She’s always leaving her socks on the floor.* *You’ve been ignoring my messages!*' },
          { t: 'tip', art: 'owl', md: 'Do not overuse these forms. A stressed *will* for annoyance is natural in speech, but in writing it can seem judgemental. *Dare* and *needn’t* sound rather British and formal; in everyday speech people say *I don’t dare to ask* and *You don’t need to worry*.' },
          { t: 'ex', kind: 'choice', h: 'What does the sentence suggest?', items: [
            { q: '“She will leave her coffee cups all over the house.”', o: ['This typical habit annoys the speaker.', 'She is going to leave tomorrow.', 'She has offered to leave.'], why: 'A stressed *will* for typical, annoying behaviour.' },
            { q: '“Who’s been eating my chocolate?”', o: ['The speaker is annoyed.', 'The speaker is curious about the future.', 'The speaker is offering chocolate.'], why: 'The present perfect continuous can show annoyance.' },
            { q: '“It may well be true.”', o: ['It is quite possibly true.', 'It is definitely false.', 'It is not important.'], why: '*May well* = quite possibly.' },
            { q: '“Shall I open the window?”', o: ['An offer.', 'A command.', 'A prediction.'], why: '*Shall I…?* = an offer or suggestion.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the sentence with its meaning.', pairs: [
            ['Boys will be boys.', 'a general truth about behaviour'],
            ['Shall I help you?', 'an offer'],
            ['You needn’t worry.', 'there is no need to worry'],
            ['Dare I say it?', 'Is it all right for me to say it?'],
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite to show annoyance, using the words given.', items: [
            { q: 'He often leaves his socks on the floor.', cue: 'He’s always', a: ['He’s always leaving his socks on the floor.'], why: 'The present continuous with *always* shows annoyance.' },
            { q: 'Somebody used my laptop and I am cross.', cue: 'Who’s been', a: ['Who’s been using my laptop?'], why: 'The present perfect continuous shows annoyance.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a modal or auxiliary from the lesson.', items: [
            { q: '___ I carry your bag? (an offer)', a: ['Shall'], why: '*Shall I…?* for an offer.' },
            { q: 'You ___ worry; everything is under control. (it is not necessary)', a: ['needn’t', 'needn\'t'], why: '*Needn’t* = do not need to.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'The last ferry',
      about: 'Read a short story and notice the advanced structures in context.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'The last ferry', md: 'The ticket office closed, Marta stood on the quay and watched the last ferry pull away. Weather permitting, it would have taken her home by midnight. The weather did not permit.\n\n“I suggest that you wait in the café,” said the man at the kiosk, “and that you not worry.” He would say that, she thought; he would always say that. Far be it from her to complain, but the café was cold and the coffee was worse.\n\nShe had been waiting for an hour when a stranger sat down beside her. Although tired, he smiled. “It is essential that one keep one’s spirits up,” he said, “come what may.” He will keep talking, she thought, and she was right: for another hour he talked about boats, rain and a sister in Lisbon.\n\nWere it not for the stranger, she might have walked into the sea. When the sun rose, the water was calm. With the engine already running, the first ferry waited at the quay. “So be it,” said Marta, and boarded.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Marta missed the last ferry.', a: 't', why: 'She “watched the last ferry pull away”.' },
            { q: 'The weather allowed the ferry to sail on time.', a: 'f', why: '“The weather did not permit.”' },
            { q: 'The man at the kiosk advised her to wait in the café.', a: 't', why: '“I suggest that you wait in the café.”' },
            { q: 'The stranger spoke only briefly.', a: 'f', why: 'He talked for “another hour”.' },
            { q: 'Marta took the first ferry in the morning.', a: 't', why: '“Marta… boarded” the first ferry.' },
            { q: 'The stranger’s name was Luis.', a: 'ng', why: 'The text does not give his name.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the grammar.', items: [
            { q: '“I suggest that you wait in the café.” What is *wait*?', o: ['The mandative subjunctive.', 'The past tense.', 'The infinitive with *to*.'], why: 'The base form after *suggest that*.' },
            { q: '“The ticket office closed, Marta stood on the quay.” What is this?', o: ['An absolute construction.', 'A question.', 'A conditional.'], why: 'Noun + past participle, with its own subject.' },
            { q: '“He would always say that.” What does *would* express here?', o: ['A typical habit, with some annoyance.', 'A polite request.', 'A future plan.'], why: '*Would* for past habit, here with irritation.' },
            { q: '“Were it not for the stranger…” means…', o: ['If it had not been for the stranger…', 'Because of the stranger…', 'In spite of the stranger…'], why: '*Were it not for* = if it were (or had been) not for.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the formulaic phrases.', items: [
            { s: '[Far be it from her] to complain, but the café was cold.', why: 'A fixed phrase from the subjunctive.' },
            { s: '“It is essential that one keep one’s spirits up,” he said, [come what may].', why: 'Mandative subjunctive and a fixed phrase.' },
            { s: '“[So be it],” said Marta, and boarded.', why: 'A fixed phrase.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'The ticket office ___, Marta stood on the quay.', a: ['closed'], why: 'An absolute construction.' },
            { q: 'Weather ___, the ferry would have taken her home by midnight.', a: ['permitting'], why: 'An absolute construction with *-ing*.' },
            { q: 'He ___ keep talking, she thought. (a typical habit)', a: ['will'], why: '*Will* for typical, annoying behaviour.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Were it not for the stranger, she might have walked into the sea.', why: 'An inverted conditional.' },
            { a: 'It is essential that one keep one’s spirits up.', why: 'Mandative subjunctive.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'It is vital that every employee ___ the safety rules.', o: ['read', 'reads', 'will read'], why: 'Mandative subjunctive.' },
      { q: '___ permitting, we will sail tomorrow.', o: ['Weather', 'The weather', 'Weathers'], why: 'An absolute construction.' },
      { q: 'If I ___ you, I would accept the offer.', o: ['were', 'was', 'am'], why: 'Formal conditional.' },
      { q: '“Who’s been using my laptop?” suggests…', o: ['annoyance', 'a plan', 'an offer'], why: 'The present perfect continuous.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the phrase with its meaning.', pairs: [
      ['so be it', 'let it be so'],
      ['far be it from me', 'I would not dare'],
      ['be that as it may', 'whatever the case'],
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'I suggest that he ___ told. (be)', a: ['be'], why: 'Mandative subjunctive.' },
      { q: 'The meeting ___, we left. (over)', a: ['over'], why: 'An absolute construction.' },
      { q: '___ I open the window? (an offer)', a: ['Shall'], why: '*Shall I…?*' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite, using the words given.', items: [
      { q: 'When the work was finished, the builders went home.', cue: 'The work', a: ['The work finished, the builders went home.'], why: 'An absolute construction.' },
      { q: 'He often leaves his socks on the floor, which annoys me.', cue: 'He’s always', a: ['He’s always leaving his socks on the floor.'], why: 'The present continuous with *always*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'I suggest that he [takes] a break.', a: ['take'], why: 'Mandative subjunctive.' },
      { s: 'Weather [permit], we will sail tomorrow.', a: ['permitting'], why: 'An absolute construction uses *-ing*.' },
    ] },
  ],
};
