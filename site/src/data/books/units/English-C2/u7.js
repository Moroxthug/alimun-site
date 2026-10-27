// English C2, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'Rhetoric and persuasion',
  goal: 'Understand how speeches persuade and use the devices yourself.',
  art: 'parrot',
  tags: { skills: ['reading', 'listening', 'writing'], topics: ['ethos', 'pathos', 'logos', 'anaphora', 'antithesis', 'chiasmus', 'tricolon', 'framing', 'bias'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Ethos, pathos, logos',
      about: 'Recognise the three appeals a speaker uses to persuade.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'More than two thousand years ago, teachers of rhetoric in ancient Greece described three ways to persuade. They are still the basis of rhetoric. **Ethos** is the appeal to **character and credibility**: *As a nurse for twenty years, I have seen this problem every day.* **Pathos** is the appeal to **emotion**: *Imagine a child waiting alone at a closed library door.* **Logos** is the appeal to **logic and evidence**: *Libraries cost the council less than one per cent of its budget, yet they serve a third of its residents.* A strong speech uses all three.' },
          { t: 'table', caption: 'The three appeals', explain: ['head', 'col0'], head: ['Appeal', 'Aim', 'Example'], rows: [
            ['ethos', 'make the audience trust the speaker', 'As a nurse for twenty years, I have seen this daily.'],
            ['pathos', 'make the audience feel', 'Imagine a child waiting at a closed library door.'],
            ['logos', 'convince with reason and facts', 'Libraries cost less than one per cent of the budget.'],
          ] },
        ],
        [
          { t: 'text', md: 'Each appeal can be misused. **Ethos** without substance becomes *name-dropping* (*I know the minister personally*). **Pathos** alone can become manipulation: a moving story that does not prove anything. **Logos** that is too heavy may bore an audience. A skilled speaker opens with ethos (*why you should listen*), builds an emotional picture with pathos, and then gives the facts with logos, often returning to pathos at the end.' },
          { t: 'tip', art: 'owl', md: 'When you read a speech, mark each sentence with *E*, *P* or *L*. If most sentences are *P*, the speaker may be relying on feeling more than proof. If most are *L*, the speech may be accurate but dry. The best speeches mix the three.' },
          { t: 'ex', kind: 'sort', h: 'Which appeal is it?', groups: ['ethos', 'pathos', 'logos'], explain: ['groups'], items: [
            { s: 'As a teacher for thirty years, I know what children need.', g: 0, why: 'Credibility: the speaker’s experience.' },
            { s: 'Picture the empty classroom, the silent playground.', g: 1, why: 'Emotion: a vivid picture.' },
            { s: 'Test scores rose by twelve per cent after the programme began.', g: 2, why: 'Logic: a fact.' },
            { s: 'I have lived on this street all my life.', g: 0, why: 'Credibility.' },
            { s: 'Think of the mother who cannot afford a single book.', g: 1, why: 'Emotion.' },
            { s: 'If we close the library, the cost to the town in lost study space is greater than the saving.', g: 2, why: 'Logic: cause and effect.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which appeal does the speaker mainly use?', items: [
            { q: '“I have worked in this hospital for twenty years.”', o: ['ethos', 'pathos', 'logos'], why: 'Credibility.' },
            { q: '“Imagine losing your home in a single night.”', o: ['pathos', 'ethos', 'logos'], why: 'Emotion.' },
            { q: '“Studies show that sleep improves exam results by 15 per cent.”', o: ['logos', 'pathos', 'ethos'], why: 'Evidence.' },
            { q: '“As your neighbour and a parent, I share your worry.”', o: ['ethos', 'logos', 'pathos'], why: 'Building trust through shared position.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the appeal with its aim.', pairs: [
            ['ethos', 'make the audience trust the speaker'],
            ['pathos', 'make the audience feel'],
            ['logos', 'convince with reason and facts'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Anaphora, antithesis, chiasmus',
      about: 'Recognise and use the devices that give speeches rhythm and force.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Speakers use **devices** that make words easy to remember. **Anaphora** repeats the same words at the start of successive sentences: *We will not wait. We will not stay silent. We will not give up.* **Antithesis** sets two opposite ideas side by side: *We choose hope over fear.* **Tricolon** is a list of three: *a town that is safe, fair and free.* **Chiasmus** reverses the order of two phrases: *Work to live; don’t live to work.* A **rhetorical question** needs no answer: *If not us, who?*' },
          { t: 'table', caption: 'Devices of the speech', explain: ['head', 'col0'], head: ['Device', 'What it does', 'Example'], rows: [
            ['anaphora', 'repeats the opening words', 'We will not wait. We will not give up.'],
            ['antithesis', 'sets opposites side by side', 'We choose hope over fear.'],
            ['tricolon', 'lists three', 'safe, fair and free'],
            ['chiasmus', 'reverses the order', 'Work to live; don’t live to work.'],
            ['rhetorical question', 'asks without needing an answer', 'If not us, who?'],
          ] },
        ],
        [
          { t: 'text', md: 'An **extended metaphor** carries one image through a whole speech: a speaker might compare a town to a ship and then speak of *steering through storms*, *a crew that pulls together* and *a safe harbour*. It gives unity and colour. Do not mix images: a speaker who says *We must steer this ship through the fire* is mixing two metaphors, and the audience may smile in the wrong place.' },
          { t: 'tip', art: 'owl', md: 'To use these devices, **keep them short and rhythmic**. Anaphora works best with **three** repetitions. In your own speech, choose **one** main device and repeat it, instead of using five different ones in a paragraph.' },
          { t: 'ex', kind: 'match', h: 'Match the device with its example.', pairs: [
            ['anaphora', 'We will not wait. We will not give up.'],
            ['antithesis', 'We choose hope over fear.'],
            ['chiasmus', 'Work to live; don’t live to work.'],
            ['tricolon', 'a town that is safe, fair and free'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which device is used?', items: [
            { q: '“We will build homes. We will build schools. We will build hope.”', o: ['anaphora', 'chiasmus', 'antithesis'], why: 'The same words open each sentence.' },
            { q: '“Not what we say, but what we do.”', o: ['antithesis', 'tricolon', 'anaphora'], why: 'Two opposite ideas side by side.' },
            { q: '“Eat to live; don’t live to eat.”', o: ['chiasmus', 'anaphora', 'tricolon'], why: 'The order of the two phrases is reversed.' },
            { q: '“If not now, when?”', o: ['rhetorical question', 'tricolon', 'chiasmus'], why: 'A question that needs no answer.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite with the device given.', items: [
            { q: 'We will not give up and we will not go quietly and we will not forget.', cue: 'We will not give up. We will not', a: ['We will not give up. We will not go quietly. We will not forget.'], why: 'Anaphora: three sentences with the same opening.' },
            { q: 'A town that is safe and fair and free.', cue: 'A town that is safe,', a: ['A town that is safe, fair and free.'], why: 'A tricolon: a list of three.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Which device?', groups: ['anaphora', 'antithesis'], explain: ['groups'], items: [
            { s: 'We will listen. We will learn. We will lead.', g: 0, why: 'The same sound or word opens each sentence.' },
            { s: 'Not words, but deeds.', g: 1, why: 'Two opposite ideas.' },
            { s: 'We are here for the weak. We are here for the poor. We are here for you.', g: 0, why: 'The same words open each sentence.' },
            { s: 'Small steps, giant leaps.', g: 1, why: 'Contrast of small and giant.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mixed metaphor.', items: [
            { s: 'We must steer this ship through the [fire] of the economic storm.', a: ['storm', 'waves', 'rocks'], why: 'A ship needs a sea image: *storm*, *waves* or *rocks*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Framing and loaded language',
      about: 'Read critically and notice how the same event can be presented in two ways.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: '**Framing** means presenting the same facts in a way that guides the reader’s view. *The city cut spending by five per cent* and *The city protected 95 per cent of its services* are both true, but they feel different. **Loaded language** uses words with strong positive or negative connotation: *a tax **relief*** (as if tax were a pain) against *a tax **cut***; *a **slim** majority* against *a **razor-thin** majority*. **Passive verbs** can hide who is responsible: *Mistakes were made* does not say by whom.' },
          { t: 'table', caption: 'How framing works', explain: ['head', 'col0'], head: ['Technique', 'Example', 'Effect'], rows: [
            ['selection of facts', 'Spending was cut by 5 per cent / 95 per cent was protected', 'a different feeling about the same facts'],
            ['loaded words', 'tax relief / tax cut', 'positive or negative colour'],
            ['passive to hide the doer', 'Mistakes were made.', 'no responsibility is named'],
            ['headline size', 'A small story in a big headline', 'makes it seem important'],
          ] },
        ],
        [
          { t: 'text', md: 'A critical reader asks four questions of any text: **Who is speaking?** **What is included, and what is left out?** **Which words carry judgement?** **Who benefits from this version?** This is not cynicism; it is the basis of reading news, advertising and political speeches in any language. It also helps your own writing: if you know how framing works, you can choose to be fair.' },
          { t: 'tip', art: 'owl', md: 'In an exam, if you are asked to compare two reports of the same event, list the **loaded words** in each, say **what each leaves out**, and give the **effect**. Support each point with a quotation.' },
          { t: 'ex', kind: 'sort', h: 'Does the word sound positive, or negative?', groups: ['positive', 'negative'], explain: ['groups'], items: [
            { s: 'tax relief', g: 0, why: '*Relief* suggests taxes are a burden: positive for the cut.' },
            { s: 'regime', g: 1, why: 'More negative than *government*.' },
            { s: 'determined crowd', g: 0, why: 'A positive description of protesters.' },
            { s: 'mob', g: 1, why: 'Negative: suggests violence.' },
            { s: 'thrifty council', g: 0, why: 'Approving: careful with money.' },
            { s: 'stingy council', g: 1, why: 'Disapproving.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which version is the most neutral?', items: [
            { q: '', o: ['The council reduced the budget by five per cent.', 'The council slashed the budget.', 'The council protected the budget.'], why: 'The first states a fact without loaded words.' },
            { q: '', o: ['Thousands attended the march.', 'A rabble clogged the streets.', 'A heroic crowd filled the streets.'], why: 'The first is neutral.' },
            { q: '', o: ['The company dismissed 200 workers.', 'The company rightsized its workforce.', 'The company ruthlessly sacked 200 workers.'], why: 'The first names the action plainly.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Make the sentence name who is responsible.', items: [
            { q: 'Mistakes were made in the planning.', cue: 'The planners', a: ['The planners made mistakes in the planning.', 'The planners made mistakes.'], why: 'Active voice names the doer.' },
            { q: 'The decision was taken to close the library.', cue: 'The council', a: ['The council decided to close the library.', 'The council took the decision to close the library.'], why: 'Active voice names the doer.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A speech for the park',
      about: 'Read a speech and a commentary on how it persuades.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'A speech for the park', md: 'SPEECH\n\nFriends, neighbours, councillors. I have lived beside this park for forty years. I learned to ride a bicycle here; my children learned to swim in its pond; my grandson will take his first steps on its grass. I am not an expert. I am a resident, and I am here to speak for it.\n\nImagine this park without its trees. Imagine the pond filled in, the benches gone, the playground fenced off. Imagine your grandchild asking where the green went, and imagine having no answer.\n\nThe council says it needs the land for flats. The figures say something else: the council owns forty empty buildings, and the park provides clean air, shade and a place for 3,000 people a week. We are not asking the council to choose between homes and trees. We are asking it to choose both.\n\nWe will not be silent. We will not be moved. We will not be forgotten. If not us, who? If not now, when?\n\nCOMMENTARY\n\nThe speaker opens with ethos, with forty years of memories rather than expertise. The second paragraph is pure pathos: three imagined losses. Logos arrives in the third, with specific figures. The closing combines anaphora, a tricolon and a pair of rhetorical questions.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The speaker claims to be an expert on parks.', a: 'f', why: '“I am not an expert. I am a resident.”' },
            { q: 'The council says it needs the land for flats.', a: 't', why: '“The council says it needs the land for flats.”' },
            { q: 'The speaker says the council owns forty empty buildings.', a: 't', why: '“The council owns forty empty buildings.”' },
            { q: 'The speaker wants homes and trees to be in competition.', a: 'f', why: '“We are not asking the council to choose between homes and trees.”' },
            { q: 'The commentary says the third paragraph appeals mainly to emotion.', a: 'f', why: '“Logos arrives in the third.”' },
            { q: 'The speaker’s grandson already lives in the town.', a: 'ng', why: 'The text only says he will take first steps there.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'What does the opening about forty years show?', o: ['Ethos: the speaker’s credibility and attachment.', 'Logos: a statistic.', 'Antithesis: two opposites.'], why: 'Credibility through experience.' },
            { q: 'What is the device in “We will not be silent. We will not be moved. We will not be forgotten.”?', o: ['Anaphora and tricolon', 'Chiasmus', 'Extended metaphor'], why: 'The same opening, repeated three times.' },
            { q: 'What is the function of “Imagine… Imagine… Imagine…”?', o: ['Pathos through repetition.', 'Logos through evidence.', 'Ethos through experience.'], why: 'Emotion with anaphora.' },
            { q: 'Why does the speaker mention the forty empty buildings?', o: ['As logical evidence against the council’s plan.', 'To appeal to the council’s feelings.', 'To show the speaker’s authority.'], why: 'A fact: logos.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the rhetorical questions and the repeated openings.', items: [
            { s: '[If not us, who?] [If not now, when?]', why: 'Two rhetorical questions.' },
            { s: '[We will not be silent. We will not be moved. We will not be forgotten.]', why: 'Anaphora.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'I am not an expert. I am a ___, and I am here to speak for it.', a: ['resident'], why: 'The speaker’s role.' },
            { q: 'We are asking the council to choose ___.', a: ['both'], why: 'The speaker’s request.' },
            { q: 'The park provides clean air, shade and a place for 3,000 ___ a week.', a: ['people'], why: 'The speaker’s fact.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'We are not asking the council to choose between homes and trees.', why: 'A sentence from the speech.' },
            { a: 'Logos arrives in the third paragraph, with specific figures.', why: 'A sentence from the commentary.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: '“I have taught for thirty years.” This is mainly…', o: ['ethos', 'pathos', 'logos'], why: 'Credibility.' },
      { q: '“Work to live; don’t live to work.” This is…', o: ['chiasmus', 'anaphora', 'tricolon'], why: 'The order is reversed.' },
      { q: '“We will build. We will grow. We will thrive.” This is…', o: ['anaphora and tricolon', 'antithesis', 'chiasmus'], why: 'Three repetitions.' },
      { q: 'Which phrase is the most neutral?', o: ['The company dismissed 200 workers.', 'The company rightsized its workforce.', 'The company ruthlessly sacked 200 workers.'], why: 'No loaded words.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the appeal with its aim.', pairs: [
      ['ethos', 'make the audience trust the speaker'],
      ['pathos', 'make the audience feel'],
      ['logos', 'convince with reason and facts'],
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'If not us, who? This is a rhetorical ___.', a: ['question'], why: 'A question that needs no answer.' },
      { q: '“Mistakes were made” uses the ___ to hide who is responsible.', a: ['passive'], why: 'The passive hides the doer.' },
      { q: 'We choose hope over fear. This is an ___.', a: ['antithesis'], why: 'Two opposite ideas.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite, using the words given.', items: [
      { q: 'Mistakes were made in the planning.', cue: 'The planners', a: ['The planners made mistakes in the planning.', 'The planners made mistakes.'], why: 'Active voice names the doer.' },
      { q: 'A town that is safe and fair and free.', cue: 'A town that is safe,', a: ['A town that is safe, fair and free.'], why: 'A tricolon.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'We must steer this ship through the [fire] of the storm.', a: ['storm', 'waves', 'rocks'], why: 'A ship needs a sea image.' },
      { s: 'As a nurse for twenty years, I use [logos] to show I am credible.', a: ['ethos'], why: 'Credibility is ethos.' },
    ] },
  ],
};
