// English C2, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Style and rhythm',
  goal: 'Write sentences that are varied, cohesive and well paced.',
  art: 'parrot',
  tags: { skills: ['grammar', 'writing', 'reading'], topics: ['sentence variety', 'parallelism', 'cohesion', 'ellipsis', 'punctuation'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Short, long, balanced',
      about: 'Vary the length of sentences and keep parallel ideas in parallel form.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Good writers control **rhythm**. A run of long sentences tires the reader; a run of short ones sounds like a list. The skill is to mix them. A **short sentence** gives impact: *He waited. Nothing happened.* A **long sentence** builds an idea step by step. A **periodic sentence** keeps the main point until the end, to create suspense: *Despite the rain, the delays and the objections of his own advisers, the minister signed.*' },
          { t: 'examples', items: [
            { s: 'The door opened. **Nobody came in.**', n: 'A short sentence after a longer one creates a pause and tension.' },
            { s: 'Having spent months in the archives, interviewing survivors and checking every date, **she finally published the book**.', n: 'A periodic sentence: the main clause comes last.' },
            { s: 'She **came, saw and conquered**.', n: 'Three short verbs in a row: a quick, confident rhythm.' },
          ] },
        ],
        [
          { t: 'text', md: '**Parallelism** means using the same grammatical form for ideas of equal importance. It makes a sentence balanced and easy to follow. Faulty parallelism sounds clumsy: *She enjoys reading, writing and to paint.* Make all three the same form: *reading, writing and painting.* Balance can also be used for effect, setting two ideas against each other: *To err is human; to forgive, divine.*' },
          { t: 'tip', art: 'owl', md: 'To check parallelism, underline the items in a list or after *not only… but also*, *either… or*, *both… and*. Do they all have the same form (all *-ing*, all infinitives, all nouns)? If not, rewrite. A common fault: *The job requires **to work** long hours and **meeting** deadlines.*' },
          { t: 'ex', kind: 'choice', h: 'Which sentence is correctly parallel?', items: [
            { q: '', o: ['She likes swimming, cycling and running.', 'She likes swimming, to cycle and running.', 'She likes to swim, cycling and run.'], why: 'All three items are *-ing* forms.' },
            { q: '', o: ['The manager is both fair and honest.', 'The manager is both fair and he is honest.', 'The manager is both fairness and honest.'], why: 'Both items after *both… and* are adjectives.' },
            { q: '', o: ['He not only wrote the report but also presented it.', 'He not only wrote the report but also the presentation.', 'He not only wrote the report but also did presenting.'], why: 'Both parts after *not only… but also* are verb phrases.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite to make the structure parallel.', items: [
            { q: 'The job requires to work long hours and meeting deadlines.', cue: 'The job requires working', a: ['The job requires working long hours and meeting deadlines.'], why: 'Both items become *-ing* forms.' },
            { q: 'She is clever, hard-working and has a great sense of humour.', cue: 'She is clever, hard-working and', a: ['She is clever, hard-working and funny.', 'She is clever, hard-working and witty.', 'She is clever, hard-working and humorous.'], why: 'Three adjectives, not two adjectives and a clause.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Is the sentence short for impact, or periodic?', groups: ['short for impact', 'periodic'], explain: ['groups'], items: [
            { s: 'Silence fell.', g: 0, why: 'Very short: creates a pause.' },
            { s: 'After weeks of argument, endless meetings and a final, bitter vote, the board agreed.', g: 1, why: 'The main clause comes last.' },
            { s: 'Nobody moved.', g: 0, why: 'Very short: impact.' },
            { s: 'Despite his fear of heights, his lack of equipment and the warnings of the guide, he climbed.', g: 1, why: 'The main point is delayed until the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'The former and the latter',
      about: 'Avoid repetition with substitution, ellipsis and clear reference.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'Cohesion means that sentences link smoothly. Repeating the same noun again and again sounds heavy; replacing it badly makes the meaning unclear. **Substitution** replaces a word or phrase: *one(s)* (*I like the red one*), *do so* (*She promised to help and did so*), *so* and *not* (*I think so*, *I hope not*). **Ellipsis** leaves out words that are easy to supply: *She said she would write, and she did.* **Reference** points back or forward: *the former* and *the latter* (the first and second of two things), *such*, *this*, *that*, *these*.' },
          { t: 'table', caption: 'Ways to avoid repetition', explain: ['head', 'col0'], head: ['Device', 'Example', 'What it replaces'], rows: [
            ['one / ones', 'I prefer the blue shirt to the green one.', 'shirt'],
            ['do so', 'He was asked to leave and did so quietly.', 'leave'],
            ['the former / the latter', 'Both Anna and Ben applied; the former was accepted, the latter was not.', 'Anna / Ben'],
            ['such', 'The company cut jobs. Such decisions are never easy.', 'cutting jobs'],
            ['ellipsis', 'Some voted for the plan, others against.', 'voted'],
          ] },
        ],
        [
          { t: 'text', md: 'The word **this** is a common source of vagueness. *The council raised the fees. This angered residents.* What angered them: the council, the fees, or the rise? Where there is any doubt, name it: *This decision angered residents.* The same applies to *it* and *that*. A well-linked paragraph moves from known information to new, so that each sentence begins with something the reader already has.' },
          { t: 'tip', art: 'owl', md: '*The former* and *the latter* are used only with **two** items. With three or more, use *the first*, *the second* and *the last*. Also, avoid overusing them: if the reader must look back to remember who is who, repeat the name instead.' },
          { t: 'ex', kind: 'choice', h: 'Choose the best word to avoid repetition.', items: [
            { q: 'I lost my old phone, so I bought a new ___.', o: ['one', 'it', 'that'], why: '*One* replaces *phone* in a general sense.' },
            { q: 'Anna and Ben both applied. ___ got the job, but the latter did not.', o: ['The former', 'The first one', 'This'], why: 'With two items: *the former* … *the latter*.' },
            { q: 'He was asked to resign and ___ immediately.', o: ['did so', 'did it', 'did that'], why: '*Do so* replaces a verb phrase.' },
            { q: '“Will it rain?” “I hope ___.”', o: ['not', 'no', 'it not'], why: '*I hope not* is the standard negative substitute.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite to avoid repetition, using the word given.', items: [
            { q: 'I wanted a red car, but the shop only had blue cars.', cue: 'ones', a: ['I wanted a red car, but the shop only had blue ones.'], why: '*Ones* replaces the plural noun.' },
            { q: 'She was told to leave the building, and she left the building quietly.', cue: 'did', a: ['She was told to leave the building, and she did so quietly.'], why: '*Do so* replaces the verb phrase.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Make the reference clear.', items: [
            { s: 'The council raised parking fees. [This] angered residents.', a: ['This decision', 'This rise', 'This increase', 'The increase', 'The rise'], why: 'Name what *this* refers to.' },
            { s: 'Of the three candidates, [the latter] had the most experience.', a: ['the last', 'the third'], why: '*The latter* is for two items only.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with *one*, *ones*, *so*, *not* or *did*.', items: [
            { q: 'These shoes are too small. Do you have any larger ___?', a: ['ones'], why: '*Ones* replaces a plural noun.' },
            { q: '“Is she coming?” “I think ___.”', a: ['so'], why: '*I think so*.' },
            { q: '“Will he be late?” “I hope ___.”', a: ['not'], why: '*I hope not*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Semicolons and dashes',
      about: 'Use punctuation to control meaning and rhythm.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Punctuation is not decoration; it controls how a sentence is read. The **semicolon** (;) joins two closely related independent clauses, instead of a full stop or *and*: *The plan was simple; the execution was not.* It is also used in long lists whose items contain commas. The **colon** (:) introduces an explanation, a list or a conclusion: *There was only one explanation: he had lied.* The **dash** (–) adds emphasis or an interruption: *The result – to everyone’s surprise – was a tie.* **Brackets** add information that could be removed.' },
          { t: 'table', caption: 'Punctuation for effect', explain: ['head', 'col0'], head: ['Mark', 'Use', 'Example'], rows: [
            ['semicolon ;', 'two related clauses', 'The plan was simple; the execution was not.'],
            ['colon :', 'explanation, list or conclusion', 'He had one fear: failure.'],
            ['dash –', 'emphasis or interruption', 'The result – to everyone’s surprise – was a tie.'],
            ['brackets ( )', 'extra, removable information', 'The festival (now in its tenth year) opens on Friday.'],
          ] },
        ],
        [
          { t: 'text', md: 'A single comma can change the meaning. Compare *Let’s eat, Grandma!* and *Let’s eat Grandma!* In relative clauses, commas separate **non-restrictive** information (extra, not needed to identify) from **restrictive** information (needed to identify): *My brother, who lives in Paris, is a chef* means I have one brother. *My brother who lives in Paris is a chef* suggests I have more than one.' },
          { t: 'tip', art: 'owl', md: 'Do not join two independent clauses with a comma alone (a **comma splice**): *The plan was simple, the execution was not.* Use a semicolon, a full stop or a conjunction. A semicolon must have a full clause on each side; do not use it before a list or after *however* in the middle of a clause.' },
          { t: 'ex', kind: 'choice', h: 'Which punctuation is correct?', items: [
            { q: '', o: ['The plan was simple; the execution was not.', 'The plan was simple, the execution was not.', 'The plan was simple: the execution was not.'], why: 'A semicolon joins two related clauses; a comma splice is an error.' },
            { q: '', o: ['He had one fear: failure.', 'He had one fear; failure.', 'He had one fear, failure.'], why: 'A colon introduces the explanation.' },
            { q: '', o: ['My sister, who lives in Rome, is a doctor.', 'My sister who lives in Rome, is a doctor.', 'My sister, who lives in Rome is a doctor.'], why: 'Non-restrictive information needs a comma on both sides.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite with a semicolon, colon or dash.', items: [
            { q: 'The plan was simple, but the execution was not.', cue: 'The plan was simple;', a: ['The plan was simple; the execution was not.'], why: 'A semicolon joins the two clauses.' },
            { q: 'There was only one explanation, and that was that he had lied.', cue: 'There was only one explanation:', a: ['There was only one explanation: he had lied.'], why: 'A colon introduces the explanation.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'What does the sentence tell you?', groups: ['only one such person', 'more than one possible'], explain: ['groups'], items: [
            { s: 'My brother, who lives in Paris, is a chef.', g: 0, why: 'Commas: extra information, so there is one brother.' },
            { s: 'My brother who lives in Paris is a chef.', g: 1, why: 'No commas: identifies which brother, so there are several.' },
            { s: 'The students, who were tired, left early.', g: 0, why: 'All the students were tired and left.' },
            { s: 'The students who were tired left early.', g: 1, why: 'Only the tired students left.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Fix the punctuation error.', items: [
            { s: 'The film was long[,] it was also brilliant.', a: [';', ' –', ' -'], why: 'A comma splice: use a semicolon or a dash.' },
            { s: 'We need three things[;] bread, cheese and wine.', a: [':'], why: 'A colon, not a semicolon, introduces a list.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'The slow lane',
      about: 'Read a magazine essay and notice rhythm, cohesion and punctuation.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'The slow lane', md: 'I used to measure my days in tasks completed. Emails answered, meetings attended, lists crossed out; by evening I was exhausted and no wiser. Then, one spring, I tried something simple: I stopped.\n\nIt did not go well at first. Idleness, I discovered, is a skill, and a difficult one. I picked up my phone to check the weather and was still scrolling forty minutes later. A neighbour, who had lived in the village all her life, laughed when I told her. “You are not slow,” she said. “You are just late.”\n\nSlow living does not mean doing nothing; it means doing one thing at a time, and doing so with attention. I cook without a podcast. I walk without headphones. I read a chapter and then, crucially, think about it. The first of these habits was the hardest; the last was the most rewarding.\n\nThere is a case against all this: it is a luxury, say critics, available only to those who can afford to cut their hours. They have a point, and I do not dismiss it. But the quiet in a slow evening is not a product; it is a choice, and one that costs very little.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The writer used to judge her days by how many tasks she finished.', a: 't', why: '“I used to measure my days in tasks completed.”' },
            { q: 'The writer found it easy to be idle at first.', a: 'f', why: '“It did not go well at first.”' },
            { q: 'The neighbour told the writer she was too slow.', a: 'f', why: '“You are not slow… You are just late.”' },
            { q: 'The writer thinks critics of slow living have no point at all.', a: 'f', why: '“They have a point, and I do not dismiss it.”' },
            { q: 'The writer now cooks without a podcast.', a: 't', why: '“I cook without a podcast.”' },
            { q: 'The writer lives in a village by the sea.', a: 'ng', why: 'The text mentions a village but not the sea.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at how the essay is written.', items: [
            { q: '“Then, one spring, I tried something simple: I stopped.” Why is the last sentence so short?', o: ['To give impact after a long build-up.', 'Because the writer was in a hurry.', 'Because it is a question.'], why: 'A short sentence after a long one creates impact.' },
            { q: '“The first of these habits was the hardest; the last was the most rewarding.” Why the semicolon?', o: ['It balances two closely related ideas.', 'It introduces a list.', 'It shows a quotation.'], why: 'A semicolon joins related clauses and creates balance.' },
            { q: '“doing so with attention” – what does *doing so* refer to?', o: ['doing one thing at a time', 'doing nothing', 'doing the shopping'], why: '*Do so* replaces the verb phrase *doing one thing at a time*.' },
            { q: 'Which phrase is a periodic sentence opening?', o: ['“Emails answered, meetings attended, lists crossed out; by evening I was exhausted and no wiser.”', '“It did not go well at first.”', '“I walk without headphones.”'], why: 'The list of details comes first and the point (exhausted and no wiser) last.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the examples of parallel structure.', items: [
            { s: '[I cook without a podcast. I walk without headphones.] I read a chapter and then think about it.', why: 'The first two sentences repeat one structure.' },
            { s: '[Emails answered, meetings attended, lists crossed out]; by evening I was exhausted.', why: 'Three parallel participle phrases.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'Idleness, I discovered, is a ___, and a difficult one.', a: ['skill'], why: 'The writer’s discovery.' },
            { q: 'The quiet in a slow evening is not a product; it is a ___.', a: ['choice'], why: 'The writer’s final point.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'She enjoys ___.', o: ['reading, writing and painting', 'reading, writing and to paint', 'to read, writing and paint'], why: 'All items must have the same form.' },
      { q: 'I lost my keys, so I had to cut a new ___.', o: ['one', 'it', 'that'], why: '*One* replaces *key* in a general sense.' },
      { q: 'Which sentence is correct?', o: ['The plan was simple; the execution was not.', 'The plan was simple, the execution was not.', 'The plan was simple; and the execution was not.'], why: 'A semicolon joins two clauses without a conjunction.' },
      { q: '“Will it snow?” “I hope ___.”', o: ['not', 'no', 'it not'], why: '*I hope not*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'Anna and Ben applied; the ___ was accepted and the latter was not. (first of two)', a: ['former'], why: '*The former* and *the latter*.' },
      { q: 'He was asked to leave and ___ so quietly. (did)', a: ['did'], why: '*Did so* replaces the verb phrase.' },
      { q: 'There was only one explanation: he had ___.', a: ['lied'], why: 'A colon introduces the explanation.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite, starting with the words given.', items: [
      { q: 'The job requires to work long hours and meeting deadlines.', cue: 'The job requires working', a: ['The job requires working long hours and meeting deadlines.'], why: 'Parallel *-ing* forms.' },
      { q: 'The plan was simple, but the execution was not.', cue: 'The plan was simple;', a: ['The plan was simple; the execution was not.'], why: 'A semicolon joins the clauses.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'What does the sentence tell you?', groups: ['one only', 'more than one'], explain: ['groups'], items: [
      { s: 'My sister, who lives in Rome, is a doctor.', g: 0, why: 'Commas: extra information, so one sister.' },
      { s: 'My sister who lives in Rome is a doctor.', g: 1, why: 'No commas: identifies a sister, so there are several.' },
      { s: 'His son, who is a pilot, called.', g: 0, why: 'One son.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'The film was long[,] it was also brilliant.', a: [';', ' –', ' -'], why: 'A comma splice.' },
      { s: 'Of the three candidates, [the latter] had the most experience.', a: ['the last', 'the third'], why: '*The latter* is for two items only.' },
    ] },
  ],
};
