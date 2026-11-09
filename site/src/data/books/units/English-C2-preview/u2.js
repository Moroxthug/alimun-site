// English C2, unit 2, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then exercises from controlled to free, one speaking task, and one task in the format of C2 Proficiency.
// C1 taught inversion, cleft sentences and linking; this unit turns them into tools of style: rhythm, cohesion and
// punctuation chosen for effect, with an article in the format of C2 Proficiency Writing Part 2.
export const UNIT = {
  id: 'u2',
  title: 'Style and rhythm',
  goal: 'Write sentences that are varied, cohesive and well paced: control rhythm with short, periodic, loose and balanced sentences, avoid repetition with substitution, ellipsis and reference, use punctuation for effect in an article in the format of C2 Proficiency Writing Part 2, and read a magazine essay in the format of Reading and Use of English Part 5.',
  art: 'parrot',
  tags: { skills: ['grammar', 'writing', 'reading', 'speaking'], topics: ['sentence-variety', 'parallelism', 'inversion', 'cohesion', 'ellipsis', 'punctuation', 'article'], goals: ['foundations', 'academic', 'professional'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Short, long and balanced',
      about: 'Control the rhythm of your writing with short sentences for impact, periodic and loose sentences, parallel structure, and inversion and clefts for emphasis.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Good writers control **rhythm**, the way a text feels as it is read. A run of long sentences tires the reader; a run of short ones sounds like a list of instructions. Variety is not decoration: it tells the reader what matters. A short sentence after several long ones lands like a full stop in music. *We had checked the engine, the fuel and the forecast, and we had told the coastguard where we were going. The wind did not care.*\n\nLong sentences come in two main shapes. A **loose** (or cumulative) sentence states its main point first and then adds detail, which feels natural and relaxed: *She left at dawn, before the town was awake, her bag over her shoulder and the letter still unopened in her pocket.* A **periodic** sentence holds the main point back until the end, which creates suspense and emphasis: *Despite the rain, the delays and the open hostility of his own advisers, the minister signed.*\n\nNeither shape is better. Loose sentences suit narrative and explanation; periodic sentences suit argument and climaxes. Too many periodic sentences sound pompous; too many loose ones sound shapeless. The skill is to choose.' },
          { t: 'table', caption: 'Shapes of sentence', explain: ['head', 'col1'], head: ['Shape', 'What it does', 'Example'], rows: [
            ['short', 'impact, a pause, a turning point', 'Nobody moved.'],
            ['loose (cumulative)', 'main point first, then detail: natural, flowing', 'He kept walking, past the station, past the bridge, past the last lit window.'],
            ['periodic', 'detail first, main point last: suspense, emphasis', 'After three years, two appeals and a change of government, the law was finally changed.'],
            ['balanced', 'two halves of equal shape, often contrasting', 'The plan was simple; the execution was not.'],
            ['parallel series', 'items in the same grammatical form', 'She came, she listened and she left.'],
          ] },
        ],
        [
          { t: 'text', md: '**Parallelism** means putting ideas of equal importance into the same grammatical form: all nouns, all *-ing* forms, all clauses. It makes a sentence easy to follow, because the reader recognises the pattern and knows what to expect. When the pattern breaks, the sentence feels clumsy even if every word is correct: *She enjoys reading, writing and to paint.*\n\nParallelism matters most after **paired conjunctions** (*both… and*, *either… or*, *neither… nor*, *not only… but also*) and in lists. What follows each half must have the same form: *He not only **wrote** the report but also **presented** it*, not *He not only wrote the report but also the presentation of it.*\n\n**Balance** takes parallelism further by setting two matching halves against each other, often to contrast them. This is called **antithesis**: *Ask not what your country can do for you; ask what you can do for your country.* Balanced sentences are memorable because the ear hears the symmetry before the mind has processed the meaning. Use them for the sentence you want the reader to remember, not for every sentence.' },
          { t: 'examples', items: [
            { s: 'The door opened. **Nobody came in.**', n: 'A short sentence after a longer one creates tension.' },
            { s: '**Having spent months in the archives, interviewing survivors and checking every date,** she finally published the book.', n: 'Periodic: the main clause comes last.' },
            { s: 'She published the book in May, **after months in the archives and a hundred interviews**.', n: 'Loose: the main point first, then the detail.' },
            { s: 'The job requires **working** long hours, **meeting** deadlines and **managing** a small team.', n: 'Three parallel *-ing* forms.' },
            { s: 'The film is **neither** funny enough to be a comedy **nor** serious enough to be a drama.', n: 'Matching halves after *neither… nor*.' },
            { s: '**Easy to promise; hard to deliver.**', n: 'Antithesis: two balanced, contrasting halves.' },
          ] },
          { t: 'tip', art: 'owl', md: 'To check parallelism, underline the items in a list or after a paired conjunction and ask whether they share one form. Then read your paragraph aloud. If three sentences in a row have the same length and shape, change one of them: make it shorter, or move its main clause to the end.' },
        ],
        [
          { t: 'text', md: 'A third tool of rhythm is **changing the normal order** of a sentence to put weight on one part. You met these structures at C1; at C2 the point is to use them for a reason.\n\n**Negative inversion** puts a negative or restrictive expression first and inverts subject and auxiliary, as in a question: *Never **have I** seen such a crowd. Only later **did we** understand. No sooner **had** she arrived **than** the phone rang. Not only **is it** cheaper, but it is also faster.* It sounds formal and emphatic, so keep it for moments that deserve it.\n\n**Fronting with *such* and *so*** emphasises degree: ***Such was** the noise that we could not hear ourselves think. **So great was** the demand that the shop ran out by noon.*\n\n**Cleft sentences** split one sentence into two parts to focus on one of them: ***It was** the delay **that** annoyed me, not the cost. **What** I object to **is** the tone. **It wasn’t until** much later **that** I realised.*' },
          { t: 'table', caption: 'Changing the order for emphasis', explain: ['head', 'col0'], head: ['Structure', 'Normal order', 'Emphatic order'], rows: [
            ['Negative inversion', 'I have never seen such a crowd.', 'Never have I seen such a crowd.'],
            ['Only + time expression', 'We understood only later.', 'Only later did we understand.'],
            ['No sooner… than', 'As soon as she arrived, the phone rang.', 'No sooner had she arrived than the phone rang.'],
            ['Such / so fronted', 'The noise was so loud that we left.', 'Such was the noise that we left.'],
            ['It-cleft', 'The delay annoyed me, not the cost.', 'It was the delay that annoyed me, not the cost.'],
            ['What-cleft', 'I object to the tone.', 'What I object to is the tone.'],
            ['Not until', 'I realised only much later.', 'It was not until much later that I realised.'],
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['She likes swimming, cycling and to run.', 'She likes swimming, cycling and running.', 'Items in a list share one form.'],
            ['He not only wrote the report but also the presentation.', 'He not only wrote the report but also gave the presentation.', 'Both halves need a verb phrase.'],
            ['Never I have seen such a crowd.', 'Never have I seen such a crowd.', 'After a fronted negative, invert the auxiliary and subject.'],
            ['No sooner had she arrived when the phone rang.', 'No sooner had she arrived than the phone rang.', '*No sooner* pairs with *than*.'],
            ['Such was the noise so we left.', 'Such was the noise that we left.', 'Fronted *such* is followed by *that*.'],
            ['Only later we understood.', 'Only later did we understand.', '*Only* + time expression first needs inversion.'],
          ] },
          { t: 'dialogue', title: 'Editing the opening paragraph', lines: [
            { who: 'Helen', s: 'Your opening is accurate, but every sentence is the same length. It reads like a shopping list.' },
            { who: 'Owen', s: 'So I should join some of them up?' },
            { who: 'Helen', s: 'Join three of them into one long sentence, and save the main point for the end. Then follow it with something very short.' },
            { who: 'Owen', s: 'Like this: after two years of tests, three failed prototypes and one very patient investor, the engine worked. Nobody cheered.' },
            { who: 'Helen', s: 'Much better. Not only does it build suspense, but the short sentence makes the reader stop.' },
            { who: 'Owen', s: 'It was the full stop that did it, not the words.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'What kind of sentence is it?', groups: ['short for impact', 'periodic', 'loose'], explain: ['groups'], items: [
            { s: 'Silence fell.', g: 0, why: 'Very short: a pause and a turning point.' },
            { s: 'After weeks of argument, endless meetings and a final, bitter vote, the board agreed.', g: 1, why: 'The main clause comes last.' },
            { s: 'The board agreed in the end, after weeks of argument and a bitter vote.', g: 2, why: 'The main clause comes first; detail follows.' },
            { s: 'Despite his fear of heights and the warnings of the guide, he climbed.', g: 1, why: 'The main point is delayed until the end.' },
            { s: 'She walked on, past the harbour, past the church, into the dark.', g: 2, why: 'Main clause first, then a chain of detail.' },
            { s: 'Nobody answered.', g: 0, why: 'Very short: impact.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the word that breaks the pattern.', items: [
            { s: 'The course teaches you to plan, to write and [editing] your own work.', a: ['to edit', 'edit'], why: 'Three infinitives: *to plan, to write and to edit*.' },
            { s: 'She is both talented and [has ambition].', a: ['ambitious'], why: 'Two adjectives after *both… and*.' },
            { s: 'Never [I had] heard such nonsense.', a: ['had I'], why: 'Invert after a fronted negative: *Never had I*.' },
            { s: 'No sooner had we sat down [when] the music started.', a: ['than'], why: '*No sooner… than*.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **C2 Proficiency Reading and Use of English Part 4** (key word transformations) you complete **six** sentences so that each means the same as the one before it, using a **key word** that you must not change. You write **three to eight words**, including the key word. Each answer is usually worth two marks, so a half-right answer still earns one. At C2 the changes are often exactly the structures of this lesson: inversion, fronting, clefts and parallel pairs.' },
          { t: 'ex', kind: 'transform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. Use between three and eight words, including the word given.', items: [
            { q: 'The minister signed the agreement only after months of negotiation.', cue: 'only', gap: '___ the agreement.', a: ['Only after months of negotiation did the minister sign', 'Only after months of negotiating did the minister sign'], why: '*Only after* + time first, then inversion: *did the minister sign*.' },
            { q: 'She is a brilliant writer, and she is also an excellent editor.', cue: 'only', gap: 'Not ___ is also an excellent editor.', a: ['only is she a brilliant writer but she', 'only is she a brilliant writer, but she'], why: '*Not only* first needs inversion: *is she*; the second half keeps normal order.' },
            { q: 'As soon as the curtain rose, the audience fell silent.', cue: 'sooner', gap: 'No ___ the audience fell silent.', a: ['sooner had the curtain risen than', 'sooner did the curtain rise than'], why: '*No sooner had* + past participle *than*.' },
            { q: 'The storm was so violent that the ferry was cancelled.', cue: 'such', gap: '___ that the ferry was cancelled.', a: ['Such was the violence of the storm'], why: 'Fronted *such* + *be* + noun: *Such was the violence of the storm that*.' },
            { q: 'He only realised how serious the problem was much later.', cue: 'until', gap: 'It was ___ how serious the problem was.', a: ['not until much later that he realised', 'not until much later that he realized'], why: 'The cleft *It was not until… that*.' },
            { q: 'The delay annoys me, not the cost.', cue: 'cost', gap: 'It ___ the delay that annoys me.', a: ['is not the cost but', 'isn’t the cost but', 'isn\'t the cost but'], why: 'An it-cleft with *not… but* puts the focus on *the delay*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 4**, first find what must change: a word that has to become a different part of speech, or an order that has to be reversed. Then build the answer around the key word, keep every piece of meaning from the first sentence, and count: contractions count as two words, so *isn’t* is *is not*. Never change the key word, not even to a plural or a past form.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor. Let the rhythm carry the emphasis: a pause before the short sentence, stress on the inverted auxiliary.', tutor: 'arthur', items: [
            { a: 'After three years, two appeals and a change of government, the law was finally changed.' },
            { a: 'The plan was simple. The execution was not.' },
            { a: 'Never have I seen such a crowd.' },
            { a: 'It was the delay that annoyed me, not the cost.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'The former and the latter',
      about: 'Link sentences without repeating yourself, using substitution, ellipsis and reference, and follow those links in a gapped text in the format of C2 Proficiency Reading and Use of English Part 6.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: '**Cohesion** is what makes a group of sentences read as one text rather than a list. Much of it is done by small words that point back to something already said, so that the writer does not have to say it again. Repetition is not always wrong (it can be used for emphasis), but repeating the same noun or verb phrase without a reason makes prose heavy and slow.\n\nEnglish has three main ways to avoid repetition. **Substitution** puts a short word in place of a longer phrase: *one* and *ones* for a countable noun (*I lost my umbrella and had to buy a new **one***), *do so* or *do* for a verb phrase (*She promised to help, and she **did so** at once*), *so* and *not* for a whole clause after verbs of thinking (*I think **so***, *I hope **not***), and *the same* for a whole action (*He ordered the fish, and I did **the same***).\n\n**Ellipsis** simply leaves words out when the reader can supply them: *Some voted for the plan, others against*; *She said she would call, and she did*; *I wanted to stay, but I couldn’t.*' },
          { t: 'table', caption: 'Ways to avoid repetition', explain: ['head', 'col2'], head: ['Device', 'Example', 'What it replaces'], rows: [
            ['one / ones', 'I prefer the old bridge to the new one.', 'a countable noun'],
            ['do so / do', 'He was asked to leave and did so quietly.', 'a verb phrase'],
            ['so / not', '“Is the shop open?” “I believe so.” / “I’m afraid not.”', 'a whole clause'],
            ['the same', 'She resigned, and her deputy did the same.', 'a whole action'],
            ['ellipsis', 'Some voted for the plan, others against.', 'the repeated verb'],
            ['the former / the latter', 'Rome and Paris both bid; the former won.', 'the first or second of two'],
            ['such', 'The firm cut jobs. Such decisions are never easy.', 'a type of thing just mentioned'],
            ['this / that + noun', 'Prices rose by a third. This increase hit families hardest.', 'an idea in the previous sentence'],
          ] },
        ],
        [
          { t: 'text', md: '**Reference** words point to something in the text. *The former* and *the latter* pick out the first and second of **two** things just named; with three or more, say *the first* and *the last*. ***Such*** refers to a kind of thing (*such behaviour*, *such a decision*). ***This*** and ***these*** point to something near and current, often a whole idea in the previous sentence; ***that*** and ***those*** feel more distant, and are common when you disagree or mark something as finished (*That was the end of it*).\n\nThe most common problem at this level is the **vague *this***. *The council raised fees and cut opening hours. This angered residents.* What angered them: the fees, the hours, or both? Add a summarising noun and the doubt disappears: *These changes angered residents.* Choosing the noun is also a chance to judge: *This decision*, *this blunder*, *this compromise*.\n\nFinally, good cohesion moves from **known to new**. Each sentence begins with something the reader already has (often a reference word) and ends with new information, which the next sentence can then pick up. That is how a paragraph seems to flow by itself.' },
          { t: 'examples', items: [
            { s: 'I asked whether the trains were running. The guard said he thought **not**.', n: '*Not* replaces *that the trains were not running*.' },
            { s: 'The committee was told to review the policy, and it **did so** within a month.', n: '*Did so* replaces *reviewed the policy*.' },
            { s: 'Lena and Jonas both applied; **the former** was offered the job, **the latter** a place on the waiting list.', n: 'First and second of two; the verb is left out in the second half.' },
            { s: 'Three branches will close next year. **Such closures** are increasingly common.', n: '*Such* + noun: closures of this kind.' },
            { s: 'Rents have doubled in a decade. **This rise** has driven young families out of the centre.', n: 'A summarising noun makes *this* clear.' },
            { s: 'Some guests left early; **others**, much later.', n: 'Ellipsis of *left*, marked by a comma.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Use *the former* and *the latter* sparingly. If your reader has to look back to remember which was which, the device has failed; repeat the name instead. And never use *the latter* for the last of three or more: say *the last*.' },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I lost my phone, so I bought a new.', 'I lost my phone, so I bought a new one.', 'An adjective cannot stand alone: add *one*.'],
            ['“Will it rain?” “I hope no.”', '“Will it rain?” “I hope not.”', 'The clause substitute is *not*.'],
            ['Of the three candidates, the latter was best.', 'Of the three candidates, the last was best.', '*The latter* is for two only.'],
            ['They raised fees and cut hours. This angered people.', 'These changes angered people.', 'Name what *this* refers to.'],
            ['He was asked to resign and did it.', 'He was asked to resign and did so.', '*Do so* replaces a verb phrase in formal English.'],
            ['I didn’t want to go, but I had.', 'I didn’t want to go, but I had to.', 'Keep *to* after *have*, *want*, *need* in ellipsis.'],
          ] },
          { t: 'dialogue', title: 'Two drafts of a report', lines: [
            { who: 'Bethan', s: 'Your draft says “the scheme” eleven times on one page. Could you vary it?' },
            { who: 'James', s: 'I tried “it”, but then nobody knew whether I meant the scheme or the budget.' },
            { who: 'Bethan', s: 'Then use a summarising noun. After the figures, write “this shortfall”; after the delays, “such setbacks”.' },
            { who: 'James', s: 'And where I compare the two options?' },
            { who: 'Bethan', s: 'The former and the latter will do, as long as there are only two. If there are three, name them.' },
            { who: 'James', s: 'There are three. I’ll name them, then.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best word or phrase to avoid repetition.', items: [
            { q: 'I lost my old phone, so I bought a new ___.', o: ['one', 'it', 'that'], why: '*One* replaces a countable noun in a general sense.' },
            { q: 'Anna and Ben both applied. ___ got the job; the latter did not.', o: ['The former', 'The first one of them', 'This'], why: 'With two items: *the former… the latter*.' },
            { q: 'He was asked to resign and ___ the next morning.', o: ['did so', 'did it so', 'made so'], why: '*Do so* replaces the verb phrase.' },
            { q: '“Is the museum open on Mondays?” “I’m afraid ___.”', o: ['not', 'no', 'it isn’t so'], why: '*I’m afraid not*: the clause substitute.' },
            { q: 'She ordered the soup, and I did ___.', o: ['the same', 'same', 'it same'], why: '*Do the same*: repeat the whole action.' },
            { q: 'Two plants closed last year. ___ are likely to continue.', o: ['Such closures', 'Such', 'This'], why: '*Such* + noun refers to things of this kind.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
            { q: 'These shoes are too small. Do you have any larger ___?', a: ['ones'], why: '*Ones* replaces a plural noun.' },
            { q: '“Will the report be ready by Friday?” “I should think ___.”', a: ['so'], why: '*I should think so*.' },
            { q: 'Some guests stayed until midnight; ___ left after dinner.', a: ['others'], why: '*Some… others* with ellipsis.' },
            { q: 'I meant to call you, but I forgot ___.', a: ['to'], why: 'Ellipsis keeps *to*: *forgot to*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite to avoid repetition, using the word given.', items: [
            { q: 'I wanted a red car, but the dealer only had blue cars.', cue: 'ones', a: ['I wanted a red car, but the dealer only had blue ones.'], why: '*Ones* replaces the plural noun.' },
            { q: 'She was told to leave the building, and she left the building quietly.', cue: 'so', a: ['She was told to leave the building, and she did so quietly.'], why: '*Did so* replaces the verb phrase.' },
            { q: 'Ravi and Sophie both spoke. Ravi spoke for ten minutes; Sophie spoke for an hour.', cue: 'former', a: ['Ravi and Sophie both spoke; the former for ten minutes, the latter for an hour.', 'Ravi and Sophie both spoke. The former spoke for ten minutes; the latter for an hour.', 'Ravi and Sophie both spoke: the former for ten minutes, the latter for an hour.', 'Ravi and Sophie both spoke; the former spoke for ten minutes, the latter for an hour.'], why: '*The former… the latter*, with ellipsis of the verb.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Make the reference clear or correct.', items: [
            { s: 'The council raised parking fees and cut bus routes. [This] angered residents.', a: ['These changes', 'These measures', 'These decisions', 'These cuts'], why: 'Two actions: name them with a summarising noun.' },
            { s: 'Of the three candidates, [the latter] had the most experience.', a: ['the last', 'the third'], why: '*The latter* is for two items only.' },
            { s: 'I was going to apply, but in the end I [didn’t it].', a: ['didn’t', 'didn\'t', 'did not'], why: 'Ellipsis: *I didn’t*, with nothing after it.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **C2 Proficiency Reading and Use of English Part 6** (gapped text) **seven paragraphs** have been removed from a long text and placed in a jumbled list with **one extra** paragraph that does not fit anywhere. You decide where each one goes. The task tests exactly the links of this lesson: what *this*, *such*, *the first* or *it* refers to, what an ellipsis leaves out, and how each paragraph picks up the idea before it.\n\nRead the main text first, to follow the line of the story. Then read the removed paragraphs on the next page.' },
          { t: 'reading', title: 'Late, and on purpose', md: 'When I told friends I was going to learn the cello at forty, most were polite. One was honest. “You do realise,” she said, “that children start at six?” I did realise. That was rather the point.\n\n**Gap 1**\n\nThe cello was different from the start. Nobody had asked me to play it, and so, for the first time, the failures were my own. There were a great many of them.\n\n**Gap 2**\n\nMy teacher, Clara, was unmoved by this. She had heard worse, she said, though she declined to say where. What mattered was not the sound but the habit: twenty minutes a day, every day, whether or not I felt like doing so.\n\n**Gap 3**\n\nBy the spring I could play a simple tune all the way through. It was not beautiful, but it was recognisable, which at that stage felt like the same thing.\n\n**Gap 4**\n\nA boy called Felix played first. He was seven, played flawlessly, bowed and went back to his mother, who handed him a packet of crisps. I walked to the front with the uneasy feeling that the audience had already made up their minds.\n\n**Gap 5**\n\nIt is a phrase I have thought about a good deal since. We tend to judge any skill by where it leads: the grade, the performance, the career. Learning as an adult offers no such destination.\n\n**Gap 6**\n\nTwo years on, I still play most evenings. The door no longer needs oil, or not so badly.\n\n**Gap 7**' },
        ],
        [
          { t: 'reading', title: 'The removed paragraphs', md: '**A** I had played the piano as a child, badly and under protest. My mother insisted on it; my teacher, a retired organist with a weakness for peppermints, tolerated it. Neither of them, I suspect, expected much, and neither was disappointed.\n\n**B** The first was the bow. Holding it correctly requires the fingers to be relaxed and firm at the same time, a contradiction my hand refused to accept. For weeks the sound I produced resembled a door in need of oil.\n\n**C** I did not, often. There were evenings when the case stayed shut and the instrument stood in the corner like a reproach. Such evenings became rarer, though not because my willpower improved. The guilty silence simply grew harder to bear than the practice.\n\n**D** Then came the concert. Clara’s students, aged six to sixty-eight, gave a recital in a church hall every June, and she made it clear that attendance was not optional. I was to play second.\n\n**E** If they had, they were kind enough to keep it to themselves. I missed two notes and rushed the ending; nobody seemed to mind. Afterwards an elderly man shook my hand and told me he had taken up the violin at seventy. He had not, he added, got very far. But that was not the point either.\n\n**F** This is, at first, a disappointment. I will never play in an orchestra, and I am unlikely to play in public again unless Clara insists. But the absence of a destination turns out to be a kind of freedom. Without one, the practice itself becomes the thing.\n\n**G** And when friends ask, as they still do, whether it is not a little late to be starting, I give them the answer the man in the church hall gave me. They rarely know what to make of it. That, too, is rather the point.\n\n**H** Children, after all, learn faster than adults, and a cello is a large and expensive thing to regret. Several friends suggested the ukulele instead. It was cheaper, they pointed out, and would fit in a cupboard.' },
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 6): choose the paragraph (A to H) that fits each gap. There is one extra paragraph that you do not need.', items: [
            { q: 'Which paragraph fits gap 1?', o: ['A', 'H', 'D', 'F'], why: 'The piano in A is what *The cello was different* contrasts with; *My mother insisted* contrasts with *Nobody had asked me*. H is the extra paragraph: nothing after it picks it up.' },
            { q: 'Which paragraph fits gap 2?', o: ['B', 'C', 'E', 'H'], why: '*The first* refers back to *a great many* failures; *a door in need of oil* explains why Clara was *unmoved by this*.' },
            { q: 'Which paragraph fits gap 3?', o: ['C', 'B', 'E', 'F'], why: '*I did not, often* is ellipsis for *I did not feel like doing so*, picking up the last words before the gap.' },
            { q: 'Which paragraph fits gap 4?', o: ['D', 'A', 'G', 'C'], why: '*Then came the concert* moves the story on; *I was to play second* leads to *A boy called Felix played first*.' },
            { q: 'Which paragraph fits gap 5?', o: ['E', 'D', 'F', 'H'], why: '*If they had* is ellipsis for *had already made up their minds*; *that was not the point either* is *the phrase* the writer has thought about since.' },
            { q: 'Which paragraph fits gap 6?', o: ['F', 'C', 'G', 'A'], why: '*This* refers to having *no such destination*; *Without one* repeats the idea.' },
            { q: 'Which paragraph fits gap 7?', o: ['G', 'F', 'H', 'E'], why: 'G ends the article by returning to the friends of the opening and to *That was rather the point*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 6**, the links are in the first and last lines of each removed paragraph. Look for words that cannot stand alone: *the first*, *this*, *such*, *If they had*, *I did not*. Ask what each one refers to, and find it at the end of the paragraph before the gap. The extra paragraph usually fits the topic but has no word that ties it to either side.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor. Stress the word that carries the link.', tutor: 'lena', items: [
            { a: 'She promised to help, and she did so at once.' },
            { a: 'Rome and Paris both bid; the former won.' },
            { a: 'Such evenings became rarer, though not because my willpower improved.' },
            { a: 'If they had, they were kind enough to keep it to themselves.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Semicolons and dashes',
      about: 'Use the semicolon, colon, dash, brackets and the comma for effect and for meaning, and write an article in the format of C2 Proficiency Writing Part 2.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Punctuation is not decoration. It tells the reader how to hear a sentence: where to pause, what belongs together, what is an aside and what is the point. At C2, examiners notice whether you use the full range, and whether you use it with control.\n\nThe **semicolon** ( ; ) joins two complete sentences that are closely related, when a full stop would separate them too much and *and* would make the link too loose: *The plan was simple; the execution was not.* It often marks balance or contrast. It is also used between the items of a long list when the items themselves contain commas: *Lisbon, Portugal; Seville, Spain; and Lyon, France.* There must be a complete sentence on each side.\n\nThe **colon** ( : ) introduces what the first part has promised: an explanation, an example, a list or a conclusion. *There was only one explanation: he had lied.* Think of it as meaning *namely* or *and here it is*. What comes before a colon should be a complete sentence; what comes after may be a word, a list or another sentence.' },
          { t: 'table', caption: 'Punctuation for effect', explain: ['head', 'col1'], head: ['Mark', 'What it does', 'Example'], rows: [
            ['semicolon ;', 'joins two related complete sentences; separates long list items', 'The plan was simple; the execution was not.'],
            ['colon :', 'introduces what was promised: an explanation, list or conclusion', 'He had one fear: failure.'],
            ['dash –', 'adds emphasis, an aside or a sudden turn; less formal', 'The result – to everyone’s surprise – was a tie.'],
            ['brackets ( )', 'adds information the sentence could do without', 'The festival (now in its tenth year) opens on Friday.'],
            ['comma ,', 'separates extra information, introductory phrases, items', 'My brother, who lives in Paris, is a chef.'],
          ] },
        ],
        [
          { t: 'text', md: 'The **dash** ( – ) is the most expressive mark, and the easiest to overuse. A pair of dashes sets off an interruption more strongly than commas would: *The result – to everyone’s surprise – was a tie.* A single dash near the end of a sentence creates a pause before a twist or a punchline: *He had prepared for everything – except success.* It is less formal than a colon, so use it sparingly in academic writing.\n\n**Brackets** do the opposite of dashes: they lower the voice. Information in brackets is extra, and the sentence must still work without it.\n\nThe **comma** is the mark that most often changes meaning. With a relative clause, commas mean the information is **extra**: *My brother, who lives in Paris, is a chef* (I have one brother). Without commas, the clause **identifies**: *My brother who lives in Paris is a chef* (I have more than one, and I mean that one). And a comma alone cannot join two complete sentences; that error is called a **comma splice**: *The film was long, it was brilliant.* Use a semicolon, a full stop or a linking word instead.' },
          { t: 'examples', items: [
            { s: 'Some people work to live**;** others live to work.', n: 'A semicolon balances two contrasting clauses.' },
            { s: 'The report made one thing clear**:** the scheme had failed.', n: 'A colon delivers what the first clause promised.' },
            { s: 'She had everything she needed **–** except time.', n: 'A single dash before a twist.' },
            { s: 'The village **(population 312)** has two pubs and no shop.', n: 'Brackets lower the voice for an aside.' },
            { s: 'The students**,** who were tired**,** left early.', n: 'All the students were tired, and all left.' },
            { s: 'The students who were tired left early.', n: 'Only the tired students left.' },
            { s: 'However hard she tried, she could not open it.', n: 'A comma after an introductory clause.' },
          ] },
          { t: 'tip', art: 'owl', md: 'A semicolon needs a complete sentence on **both** sides, so never use one before a list (that is a colon’s job) or after *however* in mid-sentence. And keep the colon for real promises: *The reason is simple: …* works; *The reasons are: …* before a list is common in notes but weak in formal writing, where *The reasons are as follows: …* is better.' },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['The film was long, it was also brilliant.', 'The film was long; it was also brilliant.', 'A comma splice: two sentences need more than a comma.'],
            ['We need three things; bread, cheese and wine.', 'We need three things: bread, cheese and wine.', 'A colon introduces a list.'],
            ['My sister who lives in Rome, is a doctor.', 'My sister, who lives in Rome, is a doctor.', 'Extra information needs a comma on both sides.'],
            ['The result – to everyone’s surprise, was a tie.', 'The result – to everyone’s surprise – was a tie.', 'A pair of dashes must be closed with a dash.'],
            ['It was late, however we carried on.', 'It was late; however, we carried on.', '*However* between clauses needs a semicolon before it and a comma after.'],
            ['Every sentence – has a dash – in it – now.', 'Two dashes in a paragraph are plenty.', 'Too many dashes make writing breathless.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Which sentence is punctuated correctly?', items: [
            { q: '', o: ['The plan was simple; the execution was not.', 'The plan was simple, the execution was not.', 'The plan was simple; and, the execution was not.'], why: 'A semicolon joins two related sentences; a comma alone is a splice.' },
            { q: '', o: ['He had one fear: failure.', 'He had one fear; failure.', 'He had: one fear, failure.'], why: 'A colon introduces the explanation.' },
            { q: '', o: ['It was raining; however, the match went ahead.', 'It was raining, however the match went ahead.', 'It was raining however, the match went ahead.'], why: '*However* linking two clauses: semicolon before, comma after.' },
            { q: '', o: ['The house – which had been empty for years – was finally sold.', 'The house – which had been empty for years, was finally sold.', 'The house which – had been empty for years – was finally sold.'], why: 'Paired dashes around the whole aside.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'What does each sentence tell you?', groups: ['all of them, or only one exists', 'only some of them'], explain: ['groups'], items: [
            { s: 'My brother, who lives in Paris, is a chef.', g: 0, why: 'Commas: extra information, so there is one brother.' },
            { s: 'My brother who lives in Paris is a chef.', g: 1, why: 'No commas: it identifies which of several brothers.' },
            { s: 'The passengers, who had valid tickets, were allowed on.', g: 0, why: 'All the passengers had tickets and boarded.' },
            { s: 'The passengers who had valid tickets were allowed on.', g: 1, why: 'Only those with tickets boarded.' },
            { s: 'The trees, which had been damaged, were cut down.', g: 0, why: 'All the trees were damaged and cut down.' },
            { s: 'The trees which had been damaged were cut down.', g: 1, why: 'Only the damaged trees were cut down.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Fix the punctuation mark in brackets.', items: [
            { s: 'The film was long[,] it was also brilliant.', a: [';', '.', ' –', '–'], why: 'A comma splice: use a semicolon, a full stop or a dash.' },
            { s: 'We need three things[;] bread, cheese and wine.', a: [':'], why: 'A colon, not a semicolon, introduces a list.' },
            { s: 'There was only one explanation[,] he had lied.', a: [':', ' –', '–', ';'], why: 'A colon delivers the explanation the first clause promised.' },
            { s: 'It was late[,] however, we carried on.', a: [';', '.'], why: '*However* between two clauses needs a semicolon or a full stop before it.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **C2 Proficiency Writing Part 2** you choose **one** task from a choice that can include an **article**, a **letter**, a **report** and a **review**, and write **280 to 320 words**. The whole Writing paper lasts one hour and thirty minutes for two tasks, so you have about forty-five minutes, including planning and checking.\n\nAn **article** is written for the readers of a magazine, newsletter or website. It needs a **title** that makes people want to read, an **opening** that draws them in, a clear **line of argument** across several paragraphs, and an **ending** that leaves them with something to think about. The register is usually neutral to lively: you may address the reader, ask a question, use humour and vary your sentences, as long as every part of the task is covered.\n\nThis is where the whole unit pays off. Varied sentence shapes, precise words and controlled punctuation are exactly what examiners reward under **Language** and **Communicative achievement**.' },
          { t: 'table', caption: 'A plan for a C2 article', explain: ['head', 'col0', 'col1'], head: ['Part', 'What to write', 'Useful language'], rows: [
            ['Title', 'Short, intriguing, linked to the topic', 'Full stop. Or not?'],
            ['Opening', 'A scene, a question or a surprising claim', 'Send a friend a message that ends with a full stop, and…'],
            ['Development', 'Two or three paragraphs, each with one main idea and an example', 'This is not, as some would have it, …'],
            ['Counterpoint', 'A fair view on the other side', 'Does it matter? In one sense, hardly at all.'],
            ['Ending', 'A conclusion that answers the task and echoes the opening', 'The full stop, in other words, is not dying.'],
          ] },
        ],
        [
          { t: 'reading', title: 'Task and model article', md: 'Task: A magazine for people who love language has invited articles with the title *Is punctuation dying?* Describe how the way people punctuate has changed, explain whether you think this matters, and suggest what, if anything, should be done.\n\n**Full stop. Or not?**\n\nSend a friend a message that ends with a full stop, and you may get an anxious reply: *Are you angry with me?* For a generation raised on instant messaging, the humble dot has acquired a new meaning; it no longer simply ends a sentence, it ends a conversation.\n\nThis is not, as some would have it, the death of punctuation. It is a change of job. In a chat, the line break does the work the full stop once did, and the marks that remain are used for tone rather than grammar: a dash for a sudden thought, three dots for a pause that says more than words.\n\nDoes it matter? In one sense, hardly at all. Language has always adapted to its tools – the telegram gave us clipped sentences, the typewriter the double space – and messaging is simply the latest. Nobody writes a text the way they would write a contract, and nobody should.\n\nThe trouble begins when the habits of the chat migrate to places where they do not belong. A cover letter without commas, a report in which every idea is joined by *and* (or by nothing at all): these are not signs of a new style but of a lost skill. In formal writing, punctuation is what allows a reader to follow a long argument without reading it twice.\n\nWhat, then, should be done? Not a campaign to rescue the semicolon, which has survived worse. Rather, schools might teach punctuation as a set of choices rather than rules: why a colon promises something, why a dash interrupts, why a misplaced comma can change a meaning entirely. A writer who understands the choices can move between a message and a memo without effort.\n\nThe full stop, in other words, is not dying. It has simply learned to be careful about where it appears.' },
          { t: 'ex', kind: 'choice', h: 'Read the model article. Choose the best answer.', items: [
            { q: 'How does the opening draw the reader in?', o: ['With a familiar situation and a surprising reaction to it.', 'With a definition of punctuation.', 'With statistics about messaging.'], why: 'A scene the reader recognises, then a twist: *Are you angry with me?*' },
            { q: 'Where does the writer deal with the view that the change does not matter?', o: ['In the third paragraph, which begins with a question.', 'Only in the title.', 'Nowhere: the writer ignores it.'], why: '*Does it matter? In one sense, hardly at all.* A fair counterpoint before the main argument.' },
            { q: 'Why does the writer use a colon in “these are not signs of a new style but of a lost skill”?', o: ['The colon follows a list of examples and introduces the judgement on them.', 'To introduce a quotation.', 'To join two unrelated ideas.'], why: 'The examples come first; the colon delivers the conclusion they lead to.' },
            { q: 'How does the ending work?', o: ['It answers the title and echoes the opening image of the full stop.', 'It introduces a new topic for discussion.', 'It repeats the task word for word.'], why: 'A strong ending closes the circle the opening began.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Writing Part 2): read the task below and choose the best answer to each question about it.', items: [
            { q: 'Task: “An international magazine is running a series called *The pace of life*. Write an article describing how the speed of modern life affects the way people communicate, and suggest how we might slow down.” Which plan covers the whole task?', o: ['An opening scene, two paragraphs on how speed changes communication, a counterpoint, and suggestions for slowing down.', 'A history of the telephone and a conclusion.', 'A list of the writer’s favourite apps.'], why: 'Both parts of the task are needed: the effects and the suggestions.' },
            { q: 'Which title works best?', o: ['Fast talk, slow thought', 'Article about the speed of life', 'My opinion'], why: 'Short, balanced and intriguing; it also previews the argument.' },
            { q: 'Which sentence makes the best use of punctuation for effect?', o: ['We have never had so many ways to talk to each other – or so little to say.', 'We have many ways to talk, we have little to say.', 'We have many ways to talk; and we have little to say; too.'], why: 'A single dash before a twist; the second is a comma splice and the third misuses semicolons.' },
            { q: 'How many words should you write?', o: ['280 to 320', '220 to 260', '140 to 190'], why: 'C2 Proficiency Writing Part 2 asks for 280 to 320 words.' },
          ] },
          { t: 'text', md: '**Your writing task.** Write the article in the task above, *The pace of life*, in **280 to 320 words**, and send it to your teacher, who will correct it and mark it on the four areas: Content, Communicative achievement, Organisation and Language. Plan for five minutes first: choose an opening scene, the two effects you will describe and one practical suggestion. In your article, use at least one periodic sentence and one very short sentence from lesson 1, two reference words such as *this* + noun or *such* from lesson 2, and a semicolon, a colon and one dash from this lesson. Give your article a title.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor. Let your voice show the punctuation: a short pause at a semicolon, a stronger one at a colon or a dash.', tutor: 'omar', items: [
            { a: 'The plan was simple; the execution was not.' },
            { a: 'There was only one explanation: he had lied.' },
            { a: 'He had prepared for everything, except success.' },
            { a: 'My brother, who lives in Paris, is a chef.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'The slow lane',
      about: 'Read a magazine essay on slow living, answer questions in the format of C2 Proficiency Reading and Use of English Part 5, and see how the writer controls rhythm, cohesion and punctuation.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'This lesson brings the unit together. The essay below is about slowing down, and it is written to be read slowly: watch how the writer mixes long and short sentences, links ideas with *this*, *such* and *do so*, and uses semicolons, colons and dashes to shape each thought.\n\nIn **Reading and Use of English Part 5** you answer **six** questions with **four** options each. At C2 they often ask about the writer’s **attitude**, the **purpose** of a paragraph or example, and the meaning of a phrase **in context**, so read for what the writer thinks, not only for what happened.' },
          { t: 'reading', title: 'The slow lane', md: 'I used to measure my days in tasks completed. Emails answered, meetings attended, lists crossed out: by evening I was exhausted and no wiser. I had become very good at being busy, which is not at all the same thing as being useful, and I had stopped noticing the difference. Then, one spring, I tried something simple. I stopped.\n\nIt did not go well. Idleness, I discovered, is a skill, and a difficult one. I would sit down with a cup of tea and nothing else, intending to do nothing, and find myself, five minutes later, checking the weather in a city I had no plans to visit. My neighbour, who had lived in the village all her life and regarded my experiment with polite amusement, put it best. “You’re not slow,” she said. “You’re just late.”\n\nShe had a point, though it took me some weeks to see it. Slowing down, it turns out, is not the same as doing less; it is doing one thing at a time, and doing so with attention. I now cook without a podcast in my ear. I walk without headphones. I read a chapter of a book and then – this is the difficult part – I put the book down and think about it. The first of these habits was the hardest to acquire; the last has been by far the most rewarding.\n\nSuch changes sound trivial, and in a sense they are. Nobody’s life was ever transformed by the absence of a podcast. But attention, like a muscle, weakens when it is not used, and most of us have arranged our days so that it is never used for long. What I had lost was not time, of which I had plenty, but the ability to stay with one thing until it had finished with me.\n\nThere is, of course, a case against all this, and it is a serious one. Slow living, say its critics, is a luxury, available only to those who can afford to cut their hours or move to a village with a talkative neighbour. A nurse on a night shift or a parent with two jobs cannot simply decide to stop. They are right, and I do not dismiss the objection. A movement that tells exhausted people to relax, as if their exhaustion were a failure of attitude, deserves every bit of the scorn it receives.\n\nYet I am not sure that the critics and I are talking about quite the same thing. What I have in mind is not a lifestyle, with its expensive linen and its photographs of bread. It is something smaller, and cheaper: the decision, made several times a day, to do the thing in front of me rather than three things at once. That decision costs nothing. It is available, at least occasionally, to almost anyone.\n\nI still have lists. I still answer emails, rather more slowly than my colleagues would like. But the evenings feel longer than they used to, and I have begun, rather to my surprise, to remember what I did in them. The quiet of a slow evening is not a product, whatever the magazines may say; it is a choice, and one that costs very little to make.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 5): read the essay and choose the answer that fits best according to the text.', items: [
            { q: 'In the first paragraph, the writer suggests that her former way of life', o: ['made her feel productive without achieving much of value.', 'left her no time to complete her work.', 'was admired by the people she worked with.', 'was the result of pressure from her employer.'], why: '*Very good at being busy, which is not at all the same thing as being useful.*' },
            { q: 'What does the neighbour’s remark “You’re not slow… You’re just late” imply?', o: ['The writer was still in a hurry, even when she seemed to be doing nothing.', 'The writer always arrived late for appointments.', 'The writer had started her experiment too late in life.', 'The writer was naturally a slow person.'], why: 'The writer was distracted and restless; she had not really slowed down. *It took me some weeks to see it.*' },
            { q: 'According to the third paragraph, slowing down means', o: ['giving full attention to one activity at a time.', 'reducing the number of things you do each day.', 'giving up modern technology altogether.', 'spending more time reading than before.'], why: '*Not the same as doing less; it is doing one thing at a time, and doing so with attention.*' },
            { q: 'What is the writer’s point in the fourth paragraph?', o: ['Small habits matter because they rebuild a capacity that has weakened.', 'Small habits have little effect on anyone’s life.', 'Most people have far less free time than they realise.', 'Attention can only be trained by physical exercise.'], why: 'The habits are trivial in themselves, but *attention, like a muscle, weakens when it is not used*.' },
            { q: 'How does the writer respond to the critics of slow living?', o: ['She accepts their objection but argues that it applies to a different idea from hers.', 'She rejects their objection as unfair to people who live slowly.', 'She suggests that they are envious of people with more free time.', 'She agrees that her own experiment was a luxury she now regrets.'], why: '*They are right… Yet I am not sure that the critics and I are talking about quite the same thing.*' },
            { q: 'In the final paragraph, what does the writer suggest about the “slow evening”?', o: ['It depends on a personal decision rather than on buying anything.', 'It is a product that magazines have successfully promoted.', 'It has made her less efficient at work than before.', 'It is only possible for people who live in the country.'], why: '*Not a product… it is a choice, and one that costs very little to make.*' },
          ] },
          { t: 'tip', art: 'owl', md: 'Questions about **attitude** (*How does the writer respond to…?*) are often answered over several sentences, and the writer may agree before disagreeing. Look for turning words such as *yet*, *but*, *I am not sure that*, and read to the end of the paragraph before you choose.' },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the words and marks that show the unit’s tools of style.', items: [
            { s: 'Then, one spring, I tried something simple. [I stopped.]', why: 'A very short sentence for impact after a longer build-up.' },
            { s: 'It is doing one thing at a time, and [doing so] with attention.', why: '*Doing so* replaces *doing one thing at a time*.' },
            { s: '[Such changes] sound trivial, and in a sense they are.', why: '*Such* + noun refers back to the habits just listed.' },
            { s: 'The first of these habits was the hardest to acquire[;] the last has been by far the most rewarding.', why: 'A semicolon balances two contrasting clauses.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the phrases from the essay with their meanings.', pairs: [
            ['no wiser', 'having learned nothing'],
            ['with polite amusement', 'finding it funny, but kindly'],
            ['deserves every bit of the scorn', 'is right to be criticised strongly'],
            ['until it had finished with me', 'until I had taken all I could from it'],
            ['rather to my surprise', 'which I did not expect'],
          ] },
        ],
        [
          { t: 'text', md: 'Now give your own view, as you would in a C2 discussion. Is slowing down a choice anyone can make, or a privilege? Give a reason and an example, and try to use one balanced sentence, one reference word and one short sentence for impact. *Slowing down is easy to recommend and hard to practise. Such advice ignores the people who have no choice. Still, some things cost nothing. Attention is one.*' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences from the essay after the tutor. Pause where the punctuation tells you to.', tutor: 'mei', items: [
            { a: 'I had become very good at being busy, which is not the same thing as being useful.' },
            { a: 'Idleness, I discovered, is a skill, and a difficult one.' },
            { a: 'What I had lost was not time, but the ability to stay with one thing.' },
            { a: 'The quiet of a slow evening is not a product; it is a choice.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct option.', items: [
      { q: 'She enjoys ___.', o: ['reading, writing and painting', 'reading, writing and to paint', 'to read, writing and paint'], why: 'Items in a list share one form.' },
      { q: '___ had she sat down than the phone rang.', o: ['No sooner', 'As soon as', 'Hardly'], why: '*No sooner… than*; *hardly* pairs with *when*.' },
      { q: '___ was the demand that the shop sold out by noon.', o: ['Such', 'So', 'Very'], why: 'Fronted *such* + *be* + noun phrase.' },
      { q: 'My old laptop broke, so I bought a new ___.', o: ['one', 'it', 'that'], why: '*One* replaces a countable noun after *a new*.' },
      { q: '“Is the shop open on Sundays?” “I’m afraid ___.”', o: ['not', 'no', 'it isn’t so'], why: '*I’m afraid not*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Complete the second sentence so that it has a similar meaning to the first, using the word given. Use between three and eight words.', items: [
      { q: 'I have never heard such a ridiculous excuse.', cue: 'never', gap: '___ such a ridiculous excuse.', a: ['Never have I heard'], why: 'Negative inversion: *Never have I heard*.' },
      { q: 'We understood what had happened only later.', cue: 'did', gap: 'Only later ___ what had happened.', a: ['did we understand', 'did we realise', 'did we realize'], why: '*Only later* + inversion.' },
      { q: 'Her tone upset me, not her words.', cue: 'was', gap: 'It ___ upset me, not her words.', a: ['was her tone that', 'was her tone which'], why: 'An it-cleft focuses on *her tone*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'Anna and Ben applied; the ___ was accepted and the latter was not.', a: ['former'], why: '*The former* and *the latter*.' },
      { q: 'He was asked to leave and did ___ quietly.', a: ['so'], why: '*Did so* replaces the verb phrase.' },
      { q: 'These boots are too small. Have you got any bigger ___?', a: ['ones'], why: '*Ones* replaces a plural noun.' },
      { q: 'Some guests left at ten; ___ stayed until two.', a: ['others'], why: '*Some… others*.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'What does each sentence tell you?', groups: ['only one exists', 'there are others'], explain: ['groups'], items: [
      { s: 'My sister, who lives in Rome, is a doctor.', g: 0, why: 'Commas: extra information, so one sister.' },
      { s: 'My sister who lives in Rome is a doctor.', g: 1, why: 'No commas: identifies one of several sisters.' },
      { s: 'His son, who is a pilot, called.', g: 0, why: 'One son.' },
      { s: 'His son who is a pilot called.', g: 1, why: 'Identifies one of several sons.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'The film was long[,] it was also brilliant.', a: [';', '.', ' –', '–'], why: 'A comma splice.' },
      { s: 'Of the three candidates, [the latter] had the most experience.', a: ['the last', 'the third'], why: '*The latter* is for two items only.' },
      { s: 'We need three things[;] time, money and patience.', a: [':'], why: 'A colon introduces a list.' },
      { s: 'Never [I have] been so embarrassed.', a: ['have I'], why: 'Inversion after a fronted negative.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence is punctuated correctly?', items: [
      { q: '', o: ['It was raining; however, the match went ahead.', 'It was raining, however the match went ahead.', 'It was raining however; the match went ahead.'], why: 'Semicolon before *however*, comma after.' },
      { q: '', o: ['The result – to everyone’s surprise – was a draw.', 'The result – to everyone’s surprise, was a draw.', 'The result, – to everyone’s surprise – was a draw.'], why: 'A pair of dashes around the aside.' },
    ] },
  ],
};
