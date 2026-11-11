// English C2, unit 1, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then exercises from controlled to free, one speaking task, and one task in the format of C2 Proficiency.
// C1 unit 13 taught modifiers (deeply moving, highly acclaimed) and C1 unit 4 work collocations; this unit adds the C2
// layer: connotation, fixed binomials, euphemism and understatement, and close reading of word choice.
export const UNIT = {
  id: 'u1',
  title: 'Precision and nuance',
  goal: 'Choose the exact word for the exact shade of meaning: tell near-synonyms apart by what they suggest, use strong collocations and fixed pairs of words naturally, recognise euphemism and understatement and judge when softening helps, and read an essay on word choice in the format of C2 Proficiency Reading and Use of English Part 5.',
  art: 'owl',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['near-synonyms', 'connotation', 'collocation', 'binomials', 'euphemism', 'understatement', 'tone'], goals: ['foundations', 'academic', 'professional'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Glance, gaze, stare',
      about: 'Tell near-synonyms apart by what they describe and by what they suggest, so that the same fact carries exactly the feeling you mean.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'At C2, knowing that two words are *close* is no longer enough. Near-synonyms differ in two ways. Their **denotation** is what they describe: the action, the thing, the quality. Their **connotation** is what they suggest on top of that: approval or disapproval, formality, a picture, a feeling. Native speakers react to connotation instantly, even when they could not explain it, which is why a word that is *almost* right can change a whole message.\n\nThe verbs of looking show the difference in denotation very clearly. All of them mean *use your eyes*, but each one adds something: how long, how hard, how openly, and in what mood. You ***glance*** at a clock (quickly, on purpose). You ***catch a glimpse*** of a famous face in a crowd (briefly, often by chance). You ***peer*** into a dark cupboard (with effort, because it is hard to see). You ***gaze*** at a view (for a long time, admiring it or lost in thought). You ***stare*** at a stranger (fixedly, and often rudely). You ***peek*** through a keyhole (quickly and secretly). You ***scrutinise*** a contract (examine every detail, critically).' },
          { t: 'table', caption: 'Verbs of looking', explain: ['head', 'col1'], head: ['Verb', 'What it adds', 'Example'], rows: [
            ['glance (at)', 'a quick, deliberate look', 'She glanced at her watch and stood up.'],
            ['catch a glimpse (of) / glimpse', 'a brief view, often by chance', 'We caught a glimpse of the coast through the clouds.'],
            ['peer (at, into)', 'looking hard because it is difficult to see', 'He peered into the fog, looking for the harbour lights.'],
            ['gaze (at, into, out)', 'a long look, admiring, loving or dreamy', 'They sat on the wall, gazing out to sea.'],
            ['stare (at)', 'a fixed look, often rude, shocked or blank', 'The children stared at the stranger in silence.'],
            ['peek / peep', 'a quick, secret look', 'She peeked at the last page to see how it ended.'],
            ['scrutinise', 'a long, critical examination', 'The committee scrutinised every line of the budget.'],
          ] },
        ],
        [
          { t: 'text', md: 'Connotation matters most with words for **people**, because there the choice of word is a judgement. The same fact can be praise or an insult, and the reader hears your attitude before they hear the fact.\n\nSomeone who spends very little may be ***thrifty*** or ***frugal*** (careful, sensible: approving), ***economical*** (neutral, and used more about things than people), or ***stingy***, ***mean*** and ***tight-fisted*** (unwilling to share: disapproving). Someone who does not change their mind is ***determined*** or ***resolute*** if you admire them, ***persistent*** if you are neutral, and ***obstinate***, ***stubborn*** or ***pig-headed*** if you do not. A thin person may be ***slender*** (graceful), ***slim*** (attractive), ***lean*** (fit and strong), ***skinny*** (informal, often unflattering), ***scrawny*** (thin and weak) or ***gaunt*** (thin through illness, hunger or worry).\n\nWhy does English have so many? Partly history: English took words from Old English, French and Latin, so many ideas have two or three versions at different levels of formality. Partly use: once two words exist, speakers start to use them for different jobs, and those jobs become their connotations.' },
          { t: 'table', caption: 'The same fact, three feelings', explain: ['head'], head: ['Approving', 'Neutral', 'Disapproving'], rows: [
            ['thrifty, frugal', 'careful with money', 'stingy, mean, tight-fisted'],
            ['slender, slim, lean', 'thin', 'skinny, scrawny, gaunt'],
            ['determined, resolute', 'persistent', 'obstinate, stubborn, pig-headed'],
            ['self-assured, confident', 'assertive', 'arrogant, cocky'],
            ['curious, inquisitive', 'interested', 'nosy, prying'],
            ['cosy, snug', 'small', 'cramped, poky'],
            ['meticulous, thorough', 'careful', 'fussy, pedantic'],
            ['a bargain, good value', 'inexpensive', 'cheap, cheap and nasty'],
          ] },
        ],
        [
          { t: 'text', md: 'Connotation also comes from **register** and from the **words around** a word. *Inexpensive* sounds like an advertisement; *cheap* can mean *good value* (*cheap flights*) or *poor quality* (*cheap furniture that fell apart*), and only the context tells you which. *Childlike* suggests innocence; *childish* suggests immaturity. *Notorious* and *famous* both mean *well known*, but you are notorious for something bad.\n\nA useful test is to imagine the person you are describing reading your sentence. Would they thank you or complain? An estate agent describes a flat as *cosy* and *compact*; the tenant who lives in it calls it *cramped* and *poky*. Neither is lying. They are choosing.' },
          { t: 'examples', items: [
            { s: 'She **caught a glimpse** of her old teacher on the platform as the train pulled out.', n: 'A brief view, by chance: *glimpse*, not *glance*.' },
            { s: 'He **peered** at the faded inscription, trying to make out the date.', n: 'Looking hard because it is difficult to read.' },
            { s: 'My grandparents were **frugal** all their lives, and they never owed anyone a penny.', n: 'Approving: careful and sensible.' },
            { s: 'The landlord was too **tight-fisted** to fix the heating.', n: 'Disapproving: unwilling to spend.' },
            { s: 'Her **resolute** refusal to give up the case won her many admirers.', n: '*Resolute*: firm, and admired for it.' },
            { s: 'His **pig-headed** refusal to listen cost the team the contract.', n: 'The same quality, now strongly criticised.' },
            { s: 'Children are naturally **inquisitive**; neighbours who ask the same questions are merely **nosy**.', n: 'The same behaviour, judged differently.' },
            { s: 'The bedroom was **cramped** rather than **cosy**: the bed touched three walls.', n: 'A contrast that shows the writer’s judgement.' },
          ] },
          { t: 'tip', art: 'owl', md: 'A good learner’s dictionary marks connotation with labels such as *approving*, *disapproving*, *informal*, *formal* and *literary*. Read the labels, not just the definition. When two words share a definition, the label is the difference, and at C2 the difference is the point.' },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I glimpsed at my phone during the meeting.', 'I glanced at my phone during the meeting.', '*Glance at* is deliberate; *glimpse* is by chance and takes no *at*.'],
            ['She is so stingy, and I really admire her for it.', 'She is so thrifty, and I really admire her for it.', 'Praise needs an approving word.'],
            ['We gazed at the timetable to find our train.', 'We looked at (or checked) the timetable to find our train.', '*Gaze* is a long, dreamy or admiring look.'],
            ['He was notorious for his kindness.', 'He was famous (or renowned) for his kindness.', '*Notorious* is only for something bad.'],
            ['The model was beautifully skinny.', 'The model was beautifully slender.', '*Skinny* is usually unflattering.'],
            ['Stop being so childlike and tidy your room!', 'Stop being so childish and tidy your room!', '*Childish* criticises; *childlike* praises innocence.'],
          ] },
          { t: 'dialogue', title: 'Two descriptions of one flat', lines: [
            { who: 'Priya', s: 'The agent called it a cosy, characterful flat with a compact kitchen. I thought it sounded charming.' },
            { who: 'Owen', s: 'Cosy meant cramped, characterful meant the windows don’t shut, and compact meant I could touch the cooker from the sofa.' },
            { who: 'Priya', s: 'So the agent was economical with the details, shall we say.' },
            { who: 'Owen', s: 'Thoroughly. When I peered into the bathroom, I caught a glimpse of something with a tail.' },
            { who: 'Priya', s: 'Well, you can’t accuse them of lying. Everything they wrote was true, strictly speaking.' },
            { who: 'Owen', s: 'That’s the clever part. Every word was true; every word was chosen to make me feel something else.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the most precise word.', items: [
            { q: 'He ___ at the small print for a long time, trying to read it in the dim light.', o: ['peered', 'glanced', 'gazed'], why: '*Peer*: look hard because it is difficult to see.' },
            { q: 'I only ___ the singer for a second as her car sped past.', o: ['glimpsed', 'gazed at', 'scrutinised'], why: 'A brief view, by chance: *glimpse*.' },
            { q: 'She sat by the window and ___ out at the sea for hours.', o: ['gazed', 'glanced', 'peeked'], why: '*Gaze*: a long, dreamy look.' },
            { q: 'The auditors ___ the accounts for any sign of fraud.', o: ['scrutinised', 'glimpsed', 'peeked at'], why: '*Scrutinise*: examine every detail critically.' },
            { q: 'My aunt is very ___; she never wastes a thing, and she taught us to do the same.', o: ['frugal', 'stingy', 'tight-fisted'], why: 'The speaker approves: *frugal*.' },
            { q: 'Nobody could persuade him, and his ___ refusal to compromise sank the deal.', o: ['pig-headed', 'resolute', 'determined'], why: 'The refusal had bad results, so a disapproving word.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Does the word praise or criticise?', groups: ['praise', 'criticise'], explain: ['groups'], items: [
            { s: 'thrifty', g: 0, why: 'Approving: careful with money.' },
            { s: 'tight-fisted', g: 1, why: 'Disapproving: unwilling to spend.' },
            { s: 'resolute', g: 0, why: 'Approving: firm and admirable.' },
            { s: 'obstinate', g: 1, why: 'Disapproving: refusing to change.' },
            { s: 'inquisitive', g: 0, why: 'Usually approving: keen to learn.' },
            { s: 'nosy', g: 1, why: 'Disapproving: too interested in others’ business.' },
            { s: 'meticulous', g: 0, why: 'Approving: careful about every detail.' },
            { s: 'pedantic', g: 1, why: 'Disapproving: too concerned with small details.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find and fix the word that gives the wrong impression.', items: [
            { s: 'I admire my grandmother: she is so [stingy] and never throws anything away.', a: ['thrifty', 'frugal'], why: 'Praise needs an approving word.' },
            { s: 'Our manager is wonderfully [obstinate]: she never gives up on a good idea.', a: ['determined', 'resolute', 'persistent'], why: 'The speaker approves, so *determined* or *resolute*.' },
            { s: 'The child’s [childish] wonder at the snow made us all smile.', a: ['childlike'], why: '*Childlike* praises innocence.' },
            { s: 'She [glimpsed] at the clock and realised she was late.', a: ['glanced'], why: 'A quick, deliberate look: *glance at*.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **C2 Proficiency Reading and Use of English Part 1** you read a short text with **eight gaps** and choose from **four options** for each. At C2 the four options are often near-synonyms: all four could mean roughly the right thing, and only one fits the **collocation**, the **grammar** after the gap (*glance at*, *catch a glimpse of*) or the **connotation** of the sentence. Read the whole sentence, and ask whether the writer approves or disapproves.' },
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 1): read the text about a portrait, sentence by sentence, and choose the word that best fits each gap.', items: [
            { q: 'Most visitors to the gallery barely ___ at the portrait before moving on to the larger rooms.', o: ['glance', 'glimpse', 'scrutinise', 'notice'], why: 'A quick, deliberate look takes *at*: *glance at*. *Glimpse*, *scrutinise* and *notice* take a direct object.' },
            { q: 'Those who stop, however, often find themselves ___ at it for far longer than they intended.', o: ['gazing', 'peering', 'peeking', 'squinting'], why: 'A long, absorbed look: *gazing*.' },
            { q: 'The sitter, a ___ young woman in a grey silk dress, looks straight out at the viewer.', o: ['slender', 'skinny', 'scrawny', 'gaunt'], why: 'An admiring description of a portrait: *slender*.' },
            { q: 'Her family, who were notoriously ___, are said to have refused to pay the painter’s fee in full.', o: ['tight-fisted', 'thrifty', 'frugal', 'prudent'], why: '*Notoriously* and the refusal show disapproval: *tight-fisted*.' },
            { q: 'Visitors who ___ closely at the lower corner can just make out the painter’s signature.', o: ['peer', 'gaze', 'glimpse', 'stare'], why: 'Looking hard at something difficult to see: *peer*.' },
            { q: 'Critics at the time dismissed the work as ___ and old-fashioned.', o: ['mawkish', 'tender', 'heartfelt', 'touching'], why: '*Dismissed* needs a disapproving word: *mawkish* (sentimental in a sickly way).' },
            { q: 'Later writers, by contrast, have praised the painter’s ___ attention to detail.', o: ['meticulous', 'fussy', 'pedantic', 'finicky'], why: '*Praised* needs an approving word: *meticulous*.' },
            { q: 'Today, few would ___ the claim that it is one of the finest portraits of its age.', o: ['dispute', 'object', 'disagree', 'quarrel'], why: 'Only *dispute* takes a direct object: *dispute the claim*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 1**, cross out options for a reason, not a feeling. Ask three questions for each one. Does it fit the grammar after the gap (a preposition, an object, *that*)? Does it collocate with the words around it? Does its connotation match the writer’s attitude (*notoriously*, *dismissed*, *praised*)? The option that passes all three is the answer.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor. Make the contrast between the two words clear.', tutor: 'arthur', items: [
            { a: 'The bedroom was cramped rather than cosy.' },
            { a: 'My grandparents were frugal, but never stingy.' },
            { a: 'I only caught a glimpse of her as the train pulled out.' },
            { a: 'His resolute supporters called it courage; his critics called it obstinacy.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'By and large',
      about: 'Use strong collocations and fixed pairs of words (binomials) naturally, in the order native speakers expect.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'A **collocation** is a pair or group of words that native speakers habitually put together. Nothing in grammar forbids *strongly disappointed* or *make a conclusion*, but nobody says them: we say ***bitterly disappointed*** and ***draw a conclusion***. At C2, the question is no longer whether a sentence is correct, but whether it sounds as if a fluent writer produced it, and collocation is most of the answer.\n\nAdverbs that intensify adjectives are especially selective. *Bitterly* goes with *disappointed*, *cold* and *resent*; *deeply* with feelings (*deeply moved*, *deeply offended*); *highly* with judgements and probability (*highly unlikely*, *highly regarded*); *utterly* and *totally* with extreme adjectives (*utterly exhausted*); *painfully* with things that hurt to watch (*painfully shy*, *painfully slow*); *blatantly* with dishonesty (*blatantly untrue*); *acutely* with awareness (*acutely aware*, *acutely embarrassed*).\n\nNouns pick their partners too. A generalisation is ***sweeping***, an omission ***glaring***, a debate ***heated***, a recollection ***vague*** or ***vivid***, a result ***a foregone conclusion***. And verbs: you ***harbour*** doubts, ***lodge*** a complaint, ***pay*** tribute, ***reach*** a compromise, ***raise*** an objection, ***wield*** power.' },
          { t: 'table', caption: 'Collocations at C2', explain: ['head', 'col0'], head: ['Pattern', 'Natural', 'Not natural'], rows: [
            ['adverb + adjective', 'bitterly disappointed, acutely aware, highly unlikely, painfully shy', 'strongly disappointed, highly aware, greatly unlikely'],
            ['adjective + noun', 'a sweeping generalisation, a glaring omission, a vested interest', 'a broad generalisation of everyone, a shining omission'],
            ['verb + noun', 'draw a conclusion, harbour doubts, lodge a complaint, wield power', 'make a conclusion, keep doubts, put a complaint'],
            ['noun + of + noun', 'a stroke of luck, a pang of guilt, a flicker of hope', 'a hit of luck, a sting of guilt, a flame of hope'],
            ['verb + adverb', 'fail miserably, sleep soundly, vary considerably', 'fail sadly, sleep strongly, vary heavily'],
          ] },
        ],
        [
          { t: 'text', md: 'A **binomial** is a pair of words joined by *and* or *or* (sometimes *to* or *but*) in a fixed order. They are among the most idiomatic phrases in English, and the order cannot be reversed: *odds and ends*, never *ends and odds*.\n\nSome repeat sounds (*wear and tear*, *safe and sound*, *rough and ready*). Some join opposites (*to and fro*, *ups and downs*, *give and take*, *sooner or later*). Some join near-synonyms for emphasis, often a legacy of legal English, where a French and an English word were placed side by side so that everyone understood (*null and void*, *terms and conditions*, *first and foremost*). And some have meanings that cannot be guessed from the parts (*by and large* means *in general*; *part and parcel* means *an essential part*).\n\nThere are patterns behind the order, though they are tendencies, not rules. The shorter word usually comes first (*cut and dried*); the positive or more important one usually comes first (*ups and downs*, *pros and cons*); and the earlier one in time comes first (*sooner or later*, *trial and error*).' },
          { t: 'table', caption: 'Common binomials', explain: ['head', 'col1'], head: ['Binomial', 'Meaning'], rows: [
            ['by and large', 'in general, on the whole'],
            ['part and parcel (of)', 'an essential, unavoidable part (of)'],
            ['odds and ends', 'small items of different kinds'],
            ['to and fro', 'backwards and forwards'],
            ['wear and tear', 'damage from normal use'],
            ['trial and error', 'learning by trying and failing'],
            ['give and take', 'compromise on both sides'],
            ['first and foremost', 'most importantly'],
            ['null and void', 'with no legal force'],
            ['cut and dried', 'already decided, with nothing left to discuss'],
            ['few and far between', 'rare'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'We were **bitterly disappointed** by the decision, but not surprised.', n: '*Bitterly* goes with *disappointed*.' },
            { s: 'She was **acutely aware** that everyone was watching her.', n: '*Acutely aware*: very conscious of something.' },
            { s: 'To say that all young people are lazy is a **sweeping generalisation**.', n: 'A claim that ignores exceptions.' },
            { s: 'Several shareholders **harboured doubts** about the merger.', n: '*Harbour* doubts, suspicions or a grudge.' },
            { s: '**By and large**, the reforms have been welcomed.', n: '*By and large*: on the whole.' },
            { s: 'Late nights are **part and parcel of** working in a newsroom.', n: 'An unavoidable part of it.' },
            { s: 'The contract was declared **null and void**.', n: 'A legal binomial: it has no force.' },
            { s: 'The outcome of the vote was a **foregone conclusion**.', n: 'Certain before it happened.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Learn collocations and binomials as **single blocks** and record them in a sentence: not *disappointed*, but *I was bitterly disappointed with the result*. When you read, notice which adverb a writer chose before an adjective; when you write, check a doubtful pair in a corpus or a collocation dictionary rather than translating from your own language.' },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I was strongly disappointed.', 'I was bitterly (or deeply) disappointed.', '*Strongly* goes with opinions: *strongly disagree*.'],
            ['We must make a conclusion.', 'We must draw (or reach) a conclusion.', 'You *draw* or *reach* a conclusion.'],
            ['It is highly obvious.', 'It is blatantly (or patently) obvious.', '*Highly* goes with probability and judgement, not with *obvious*.'],
            ['There were ups and downs, and downs and ups.', 'There were ups and downs.', 'A binomial is never reversed.'],
            ['By and big, it worked.', 'By and large, it worked.', 'The fixed form is *by and large*.'],
            ['It is part and parcel to the job.', 'It is part and parcel of the job.', 'The preposition is *of*.'],
          ] },
          { t: 'dialogue', title: 'After the planning meeting', lines: [
            { who: 'Helen', s: 'Well, that was a heated debate. I don’t think I’ve ever seen Gareth so bitterly disappointed.' },
            { who: 'Daniel', s: 'He was acutely aware that the outcome was a foregone conclusion before he even started.' },
            { who: 'Helen', s: 'By and large, though, I think the board were fair. There was a fair amount of give and take.' },
            { who: 'Daniel', s: 'Maybe. But saying that the whole team resists change was a sweeping generalisation.' },
            { who: 'Helen', s: 'Agreed. And leaving the training budget out of the report was a glaring omission.' },
            { who: 'Daniel', s: 'Sooner or later someone will notice. Until then, I suppose it’s all part and parcel of the job.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'colloc', h: 'Which words go naturally with the key word?', items: [
            { key: 'bitterly', o: ['disappointed', 'cold', 'resent', 'happy', 'aware'], a: [0, 1, 2], why: '*Bitterly disappointed*, *bitterly cold*, *bitterly resent*.' },
            { key: 'acutely', o: ['aware', 'embarrassed', 'conscious', 'tall', 'cheap'], a: [0, 1, 2], why: '*Acutely* goes with awareness and painful feelings.' },
            { key: 'harbour', o: ['doubts', 'a grudge', 'suspicions', 'a conclusion', 'a tribute'], a: [0, 1, 2], why: 'You *harbour* doubts, grudges and suspicions: feelings kept inside.' },
            { key: 'a glaring', o: ['omission', 'error', 'inconsistency', 'debate', 'recollection'], a: [0, 1, 2], why: '*Glaring*: very obvious, for faults.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the binomial with its meaning.', pairs: [
            ['by and large', 'on the whole'],
            ['part and parcel', 'an essential part'],
            ['few and far between', 'rare'],
            ['cut and dried', 'already decided'],
            ['null and void', 'with no legal force'],
            ['give and take', 'compromise on both sides'],
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find and fix the unnatural word.', items: [
            { s: 'She was [strongly] disappointed when she heard the news.', a: ['bitterly', 'deeply'], why: '*Bitterly* or *deeply disappointed*.' },
            { s: 'He made a [heated] generalisation about young people.', a: ['sweeping'], why: '*A sweeping generalisation*.' },
            { s: 'We learned the software by trial and [mistake].', a: ['error'], why: 'The binomial is *trial and error*.' },
            { s: 'After a long argument, they finally [made] a compromise.', a: ['reached', 'struck'], why: 'You *reach* or *strike* a compromise.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **C2 Proficiency Reading and Use of English Part 2** (open cloze) you read a short text with **eight gaps** and write **one word** in each. There are no options. Most answers are grammatical words (prepositions, articles, pronouns, auxiliaries, linkers), but at C2 many are parts of **fixed phrases**, collocations and binomials, where only one word is possible: *by and ___*, *part and ___ of*, *to ___ fro*. Read the whole text first; then, for each gap, decide what kind of word is missing before you decide which word.' },
          { t: 'ex', kind: 'gap', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 2): read the text about a workshop, sentence by sentence. Think of the word which best fits each gap. Use only one word in each gap.', items: [
            { q: 'By ___ large, my grandfather was a patient man, except when something was broken and nobody had tried to mend it.', a: ['and'], why: 'The binomial *by and large*: on the whole.' },
            { q: 'His shed was full of odds and ___: hinges, springs, the insides of clocks.', a: ['ends'], why: '*Odds and ends*: small items of different kinds.' },
            { q: 'He would walk to and ___ between the bench and the window, holding each piece up to the light.', a: ['fro'], why: '*To and fro*: backwards and forwards.' },
            { q: 'Sooner ___ later, he used to say, every tool breaks, and the person who can fix it is worth ten who can buy a new one.', a: ['or'], why: '*Sooner or later*: the binomial uses *or*.' },
            { q: 'Repairing things was part and ___ of the way he saw the world.', a: ['parcel'], why: '*Part and parcel of*: an essential part.' },
            { q: 'He was acutely ___ that nobody repaired radios any more, but he refused to stop.', a: ['aware', 'conscious'], why: '*Acutely aware* (or *conscious*) *that*.' },
            { q: 'Visitors were few and far ___, yet those who came rarely left empty-handed.', a: ['between'], why: '*Few and far between*: rare.' },
            { q: 'It was only years later that I drew the ___ that he had been teaching me all along.', a: ['conclusion'], why: '*Draw the conclusion that*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 2**, spelling counts and only one word goes in each gap: contractions such as *didn’t* count as two. If you cannot see the answer, look for a fixed phrase around the gap, read the sentence after it, and try the common grammatical words (*it*, *as*, *such*, *what*, *whose*) before giving up.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor. Keep each collocation or binomial together, as one unit.', tutor: 'kofi', items: [
            { a: 'By and large, the reforms have been welcomed.' },
            { a: 'Late nights are part and parcel of the job.' },
            { a: 'She was acutely aware that everyone was watching.' },
            { a: 'Saying that everyone resists change is a sweeping generalisation.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'A bit of a challenge',
      about: 'Recognise euphemism and understatement, read the tone behind them, and decide when softening is kindness and when it hides the truth.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'A **euphemism** replaces a direct word with a gentler or vaguer one. Every language has them, and they cluster around the subjects people find painful or embarrassing: death (*pass away*, *lose someone*), illness (*be unwell*, *a long illness*), money (*be in financial difficulty*), age (*elderly*, *senior*), the body (*the bathroom*), and work (*between jobs*, *let go*, *take early retirement*).\n\nEuphemism exists for two very different reasons. One is **kindness**: at a funeral, *I’m so sorry for your loss* protects the listener at a raw moment. The other is **concealment**: an organisation that announces it is *rightsizing* or *streamlining its workforce* is using soft words so that nobody pictures a thousand people losing their jobs. When softening protects the powerful rather than the vulnerable, it is often called **doublespeak**.\n\nThe C2 skill is to recognise both, and to ask the question a careful reader always asks: **who benefits from the softer word?**' },
          { t: 'table', caption: 'Euphemisms and their plain meaning', explain: ['head', 'col2'], head: ['Euphemism', 'Plain meaning', 'Usual purpose'], rows: [
            ['pass away, lose someone', 'die', 'kindness to the bereaved'],
            ['between jobs', 'unemployed', 'saving face'],
            ['let go, released', 'dismissed', 'softening the employer’s action'],
            ['rightsizing, streamlining', 'cutting jobs', 'concealment'],
            ['economical with the truth', 'not telling the whole truth, lying', 'a polite accusation'],
            ['a correctional facility', 'a prison', 'official neutrality'],
            ['collateral damage', 'civilians killed or harmed', 'concealment'],
            ['a negative growth', 'a fall', 'concealment'],
          ] },
        ],
        [
          { t: 'text', md: '**Understatement** says less than you mean, on purpose. It is one of the most recognisable features of British English, and it can be humorous, modest or polite. A climber who nearly died describes the expedition as *a bit of a challenge*; a critic who loved a film says it was *not bad at all*; a manager facing a disaster calls it *slightly less than ideal*.\n\nA special kind of understatement is **litotes**: denying the opposite. *Not unlike* means *quite like*; *not without its problems* means *with real problems*; *no mean achievement* means *a great achievement*; *I wasn’t displeased* means *I was pleased*. Litotes sounds measured and a little ironic, and it is common in formal writing and in reviews.\n\nThe opposite is **overstatement** (hyperbole): *I’ve told you a million times*, *I’m starving*. Both work only because the listener knows the real size of things and measures the gap. That is why understatement can confuse people from cultures where speech is more literal: *That’s an interesting idea* may, in a British meeting, mean *I think it is wrong*.' },
          { t: 'examples', items: [
            { s: 'I’m so sorry to hear that your father **passed away**.', n: 'A kind euphemism for *died*.' },
            { s: 'The company has **let go** of two hundred staff.', n: 'Softens *dismissed*; the employer acts, but sounds passive.' },
            { s: 'The minister was, shall we say, **economical with the truth**.', n: 'A polite way of saying that he lied.' },
            { s: 'Crossing the glacier in a storm was **a bit of a challenge**.', n: 'Understatement: it was extremely dangerous.' },
            { s: 'Winning three titles in a row is **no mean achievement**.', n: 'Litotes: it is a great achievement.' },
            { s: 'The novel is **not without its flaws**.', n: 'Litotes: it has real flaws.' },
            { s: 'Losing the file the night before the deadline was **less than ideal**.', n: 'A humorous understatement for a disaster.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In your own writing, use a euphemism when the plain word would hurt a reader who does not deserve it. In reports, essays and news, prefer plain words: *the company dismissed forty staff* is clearer and more honest than *the company let some colleagues go*. Understatement, used sparingly, makes you sound confident; used constantly, it makes you sound evasive.' },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['My grandfather passed out last year.', 'My grandfather passed away last year.', '*Pass out* means faint; *pass away* means die.'],
            ['He was let go from the company.', 'He was let go by the company.', 'The agent of a passive takes *by*.'],
            ['The film was not unlike bad.', 'The film was not bad at all.', 'Litotes denies the opposite: *not bad*, *not unlike* something.'],
            ['She is economic with the truth.', 'She is economical with the truth.', '*Economical* is the adjective in this phrase.'],
            ['(at a funeral) I’m sorry he died like that.', 'I’m so sorry for your loss.', 'Kindness calls for a gentle phrase.'],
            ['(in a report) Some colleagues were invited to explore new opportunities.', 'Forty staff were made redundant.', 'A report needs plain facts.'],
          ] },
          { t: 'dialogue', title: 'Back from the expedition', lines: [
            { who: 'Margaret', s: 'So, how was the crossing? Your messages were rather short.' },
            { who: 'Tomasz', s: 'It was a bit of a challenge, to be honest. The weather was less than ideal.' },
            { who: 'Margaret', s: 'The news said two teams had to be rescued. That’s not what I’d call less than ideal.' },
            { who: 'Tomasz', s: 'Fair enough. We lost a tent, the radio stopped working and Liam broke his wrist. But we got there.' },
            { who: 'Margaret', s: 'Which is no mean achievement. Will you go again?' },
            { who: 'Tomasz', s: 'I wouldn’t rule it out. Though my wife has views on the subject that are not entirely positive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Kind softening, or hiding the truth?', groups: ['kind softening', 'hiding the truth'], explain: ['groups'], items: [
            { s: 'I’m so sorry for your loss.', g: 0, why: 'Gentle, at a moment of grief.' },
            { s: 'The factory is being rightsized.', g: 1, why: 'A vague word that hides job losses.' },
            { s: 'Our grandmother passed away peacefully.', g: 0, why: 'A gentle way to tell the family.' },
            { s: 'There was some collateral damage.', g: 1, why: 'Hides the fact that civilians were harmed.' },
            { s: 'He’s between jobs at the moment.', g: 0, why: 'Saves face and harms nobody.' },
            { s: 'The bank recorded negative growth in profits.', g: 1, why: 'Hides a plain fall.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'What does the speaker really mean?', items: [
            { q: '“The trip was a bit of a challenge,” said the climber, who had spent two nights in a snow hole.', o: ['It was extremely hard and dangerous.', 'It was fairly easy.', 'It was a little boring.'], why: 'Understatement: much less than the truth.' },
            { q: '“Her second novel is not without its flaws.”', o: ['It has some real weaknesses.', 'It is perfect.', 'It has no weaknesses worth mentioning.'], why: 'Litotes: *not without* means *with*.' },
            { q: '“That’s an interesting idea,” said the chair, moving swiftly to the next item.', o: ['She does not think much of it.', 'She is fascinated by it.', 'She wants to discuss it at length.'], why: 'Polite understatement; *moving swiftly on* shows the real meaning.' },
            { q: '“Winning the regional prize at nineteen is no mean feat.”', o: ['It is a great achievement.', 'It is a small achievement.', 'It was unfair.'], why: 'Litotes: *no mean* means *great*.' },
            { q: 'A spokesman says the airline is “optimising its workforce”.', o: ['It is cutting jobs.', 'It is hiring more people.', 'It is training its staff.'], why: 'A euphemism for job cuts.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the gentle phrase with its plain meaning.', pairs: [
            ['a correctional facility', 'a prison'],
            ['between jobs', 'unemployed'],
            ['not unlike', 'quite similar to'],
            ['collateral damage', 'civilians harmed in an attack'],
            ['no mean achievement', 'a great achievement'],
          ] },
        ],
        [
          { t: 'text', md: 'In **C2 Proficiency Speaking Part 1** the examiner talks to you and your partner for about **two minutes**: where you are from, what you do, and one or two questions on everyday topics such as your free time, your plans or the way you like to learn. It looks easy, but it is where the examiner forms a first impression of your range.\n\nThe best answers are **natural and developed**: two to four sentences, a reason or an example, and a touch of the precise, idiomatic language of this unit. Understatement and well-chosen connotation sound fluent here (*It’s not the most exciting town in the world, but it has its charms*). Avoid both one-word answers and prepared speeches.' },
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Speaking Part 1): the examiner asks each question below. Choose the answer that would score best.', items: [
            { q: '“How would you describe the place where you grew up?”', o: ['It’s a small market town that’s, shall we say, not the liveliest place on earth. By and large I was happy there, though I was acutely aware, as a teenager, that the world was somewhere else.', 'It is a town. It is small. I liked it.', 'My town is very very beautiful and amazing and the people are very nice and friendly and kind.'], why: 'The first answer develops the idea with understatement, a binomial and a precise collocation.' },
            { q: '“Do you think you’re someone who is careful with money?”', o: ['I’d like to think I’m thrifty rather than stingy. I rarely buy anything on impulse, but I don’t mind spending on things that last, or on friends.', 'Yes, I am stingy, and I am proud of it.', 'Money is important for everybody in the world because we need it to live.'], why: 'The first answer uses connotation precisely and gives an example.' },
            { q: '“What’s the most useful thing you’ve learned in the last year?”', o: ['Probably how to cook properly. It was a bit of a challenge at first, a matter of trial and error, but I can now produce a meal that’s not entirely inedible.', 'I learned many things. It was useful.', 'The most useful thing that I have learned in the last year is how to cook, because cooking is useful.'], why: 'Humorous understatement and a binomial make a natural, developed answer.' },
            { q: '“How do you usually spend your weekends?”', o: ['It varies considerably. Now and again I go hiking, but more often I catch up with friends and do the odds and ends I’ve put off all week.', 'Weekend. I relax.', 'At the weekend I always do many different activities, for example sport, shopping, cinema, reading and also music.'], why: 'The first answer is varied and uses collocations naturally; the last is a list.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 1**, answer the question, add a reason or an example, and stop. Two or three sentences are enough. Do not memorise answers: examiners hear them at once, and the flat rhythm of a learned speech costs you marks for interaction. A little understatement or a light joke shows control, as long as the meaning stays clear.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these answers after the tutor, as if the examiner had just asked you about yourself.', tutor: 'sofia', items: [
            { a: 'It’s not the liveliest town on earth, but it has its charms.' },
            { a: 'I’d like to think I’m thrifty rather than stingy.' },
            { a: 'It was a bit of a challenge at first, a matter of trial and error.' },
            { a: 'Learning to cook at thirty was no mean achievement.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'The words we choose',
      about: 'Read an essay on word choice, answer questions in the format of C2 Proficiency Reading and Use of English Part 5, and see how the writer uses connotation, collocation and understatement.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'This lesson brings the unit together. You will read an essay about the small decisions every writer makes, and about what those decisions do to the reader. The essay uses the near-synonyms, collocations, binomials and understatement of this unit, and it is written in the dense, allusive style of a C2 Proficiency reading text.\n\nIn **C2 Proficiency Reading and Use of English Part 5** you read **one long text** and answer **six multiple-choice questions**, each with **four options**. The questions follow the order of the text. They test detail, opinion, attitude, purpose, the meaning of a phrase in context and the text as a whole. The wrong options usually repeat words from the text but change the meaning.' },
          { t: 'reading', title: 'The words we choose', md: 'Two newspapers reported the same protest on the same afternoon. One described *a crowd of angry demonstrators* who *glared at the police*; the other, *a group of determined citizens* who *gazed steadily at the officers*. Nobody disputed the facts. There were roughly the same number of people, in the same square, looking in the same direction. What differed was everything else.\n\nThis is the quiet power of the near-synonym, and it is quieter than we like to think. We are taught to watch for lies, for the invented number and the misleading graph. We are rarely taught to watch for the adjective. Yet a reader who has been told that a politician is *resolute* and a reader who has been told that he is *obstinate* have been given the same information and two entirely different men. Neither writer has lied. Each has chosen, and the choice has done the work an argument would otherwise have had to do.\n\nI do not want to suggest that this is sinister; for the most part, it is not. Choosing words is what writing is, and a writer who refused to choose, who described every thin person as simply *thin*, would produce prose of a dreary, unhelpful neutrality. The *slender* dancer and the *gaunt* refugee are not the same, and a language that could not tell them apart would be the poorer for it. The difficulty is not that words carry feelings. It is that the feelings travel unannounced, and the reader, absorbed in the facts, rarely checks their luggage.\n\nCollocation is the second, subtler test, and it works in the opposite direction. Here the writer’s freedom is narrower than it looks. A native speaker will say that an outcome is *highly unlikely*, never *strongly unlikely*, that a report contains a *glaring omission* and that a disappointment is *bitter*. None of this is grammar; no rule forbids the alternatives. These pairings are habits, laid down by millions of speakers over centuries and absorbed, by and large, through reading rather than study. The learner who masters them is not obeying a law but joining a conversation that started long before them.\n\nThen there is the question of softening. After a death, *passed away* is a small act of kindness, and only a pedant would object to it. But when an organisation announces that it is *rightsizing*, or that a policy has had *some negative impacts*, we may fairly ask whom the softer word protects. Euphemism is not, in itself, a vice. Like a bandage, it is useful in the right place and suspicious when it is applied to a wound that nobody is allowed to see.\n\nUnderstatement is euphemism’s more cheerful cousin, and the British are said to be particularly fond of it. The explorer who returns from a near-fatal expedition and describes it as *a bit of a challenge* is not concealing anything; everyone knows what he means, and the gap between word and fact is precisely the joke. Understatement assumes a reader who shares the speaker’s sense of proportion. When that assumption fails, as it does in international meetings with some regularity, *not ideal* is heard as *fine*, and the disaster proceeds on schedule.\n\nWhat, then, should a careful writer do? Not, I think, retreat into the plainest possible words, which would be its own kind of dishonesty, a pretence that language can be made neutral. The better course is to control nuance rather than avoid it. Before settling on a word, it is worth asking three questions: what it means, what it suggests, and whom it might flatter or hurt. A writer who asks them will still choose, but will at least know that a choice has been made. That is not a small thing. It is, arguably, the whole of the craft.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 5): read the essay and choose the answer that fits best according to the text.', items: [
            { q: 'What does the writer use the example of the two newspapers to show?', o: ['Identical facts can leave very different impressions depending on the words used.', 'One of the newspapers deliberately gave false information about the protest.', 'Newspapers rarely agree on the number of people at a protest.', 'Readers usually notice when a report is biased.'], why: '*Nobody disputed the facts… What differed was everything else.* The other options either contradict the text or are not stated.' },
            { q: 'In the second paragraph, the writer suggests that word choice can', o: ['influence a reader as effectively as an argument would.', 'be more harmful than a deliberate lie.', 'be easily detected by an attentive reader.', 'only be judged by people who know the facts.'], why: '*The choice has done the work an argument would otherwise have had to do.*' },
            { q: 'What point is made by the image of feelings that “travel unannounced” and luggage that is not checked?', o: ['Readers take in the attitudes carried by words without noticing them.', 'Writers hide their opinions on purpose.', 'Readers should avoid texts that contain emotional language.', 'Some words have lost their original meaning over time.'], why: 'The reader, *absorbed in the facts*, does not inspect the feelings the words carry. There is no suggestion that writers do this on purpose.' },
            { q: 'According to the fourth paragraph, collocations are', o: ['shared habits that learners acquire mainly by reading.', 'grammatical rules that native speakers learn at school.', 'a recent development in the history of English.', 'a way for writers to show their own originality.'], why: '*None of this is grammar… these pairings are habits… absorbed… through reading rather than study.*' },
            { q: 'What is the writer’s attitude to euphemism?', o: ['It is acceptable in some situations but can be used to hide unpleasant facts.', 'It is always a sign that the speaker is being dishonest.', 'It should be avoided by anyone writing about serious subjects.', 'It is a harmless habit that only pedants object to.'], why: 'The bandage image: *useful in the right place and suspicious* when it covers a wound nobody may see.' },
            { q: 'In the final paragraph, the writer recommends that writers should', o: ['make deliberate, informed choices about the connotations of their words.', 'use the plainest words available in order to remain neutral.', 'avoid any word that might offend a reader.', 'ask a colleague to check their choice of words.'], why: '*The better course is to control nuance rather than avoid it.* Plain words are called *its own kind of dishonesty*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 5**, read the question stem first, find the part of the text it refers to, and form your own answer before you look at the options. Then reject each wrong option for a reason: it says too much (*always*, *only*), it describes something the writer mentions but does not claim, or it reverses the writer’s view. The right option almost never repeats the text word for word.' },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the words the writer uses to give a positive or negative picture.', items: [
            { s: 'One described a crowd of [angry demonstrators] who [glared] at the police.', why: 'These words make the protesters sound hostile.' },
            { s: 'The other, a group of [determined citizens] who [gazed steadily] at the officers.', why: 'These words make the same people sound calm and admirable.' },
            { s: 'The [slender] dancer and the [gaunt] refugee are not the same.', why: 'Two words for *thin* with different pictures: grace and suffering.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the phrases from the essay with their meanings.', pairs: [
            ['dreary, unhelpful neutrality', 'dull writing that takes no position'],
            ['a pedant', 'someone too concerned with small rules'],
            ['with some regularity', 'quite often (an understatement)'],
            ['proceeds on schedule', 'happens as planned (here, ironically)'],
            ['the whole of the craft', 'everything that writing well involves'],
          ] },
          { t: 'text', md: 'Now give your view, as you would in a C2 discussion. Is it possible to write about a controversial subject in neutral words? Use one pair of near-synonyms, one collocation and one example of understatement or litotes from the unit. *I’d argue that true neutrality is **highly unlikely**: even choosing between *protester* and *activist* is **not without consequences**.*' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences from the essay after the tutor.', tutor: 'mei', items: [
            { a: 'Nobody disputed the facts. What differed was everything else.' },
            { a: 'The feelings travel unannounced, and the reader rarely checks their luggage.' },
            { a: 'Euphemism is not, in itself, a vice.' },
            { a: 'The better course is to control nuance rather than avoid it.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the most precise word.', items: [
      { q: 'He ___ at the sign, trying to read it through the fog.', o: ['peered', 'glanced', 'gazed', 'glimpsed'], why: '*Peer*: look hard at something difficult to see.' },
      { q: 'My uncle is so ___ that he reuses tea bags, and he is proud of it.', o: ['frugal', 'stingy', 'tight-fisted', 'mean'], why: 'He is proud of it, so an approving word.' },
      { q: 'The auditors ___ every receipt from the trip.', o: ['scrutinised', 'glimpsed', 'peeked at', 'gazed at'], why: '*Scrutinise*: examine critically.' },
      { q: 'The dictator was ___ for his cruelty.', o: ['notorious', 'renowned', 'famous', 'celebrated'], why: '*Notorious*: well known for something bad.' },
      { q: 'Her ___ wonder at the first snow delighted her parents.', o: ['childlike', 'childish', 'infantile', 'puerile'], why: '*Childlike* praises innocence; the others criticise.' },
    ] },
    { t: 'ex', kind: 'colloc', h: 'Which words go naturally with the key word?', items: [
      { key: 'highly', o: ['unlikely', 'regarded', 'controversial', 'disappointed', 'cold'], a: [0, 1, 2], why: '*Highly* goes with probability and judgement.' },
      { key: 'lodge', o: ['a complaint', 'an appeal', 'an objection', 'a conclusion', 'a doubt'], a: [0, 1, 2], why: 'You *lodge* complaints, appeals and objections: formal actions.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'By and ___, the feedback has been positive.', a: ['large'], why: '*By and large*: on the whole.' },
      { q: 'Long hours are part and ___ of life as a junior doctor.', a: ['parcel'], why: '*Part and parcel*.' },
      { q: 'The old sofa shows a great deal of wear and ___.', a: ['tear'], why: '*Wear and tear*.' },
      { q: 'Good bookshops are few and far ___ these days.', a: ['between'], why: '*Few and far between*: rare.' },
      { q: 'We learned to sail by trial and ___.', a: ['error'], why: '*Trial and error*.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'What does the speaker really mean?', items: [
      { q: '“It was a bit of a challenge,” said the sailor after surviving a hurricane.', o: ['It was extremely hard.', 'It was easy.', 'It was boring.'], why: 'Understatement.' },
      { q: '“The plan is not without its risks.”', o: ['It has real risks.', 'It has no risks.', 'It is completely safe.'], why: 'Litotes: *not without* means *with*.' },
      { q: '“We’ve had to let some colleagues go.”', o: ['Some staff have been dismissed.', 'Some staff are on holiday.', 'Some staff have been promoted.'], why: 'A euphemism for dismissing staff.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the phrase with its plain meaning.', pairs: [
      ['economical with the truth', 'not telling the whole truth'],
      ['rightsizing', 'cutting jobs'],
      ['no mean feat', 'a great achievement'],
      ['null and void', 'with no legal force'],
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'She was [strongly] disappointed by the result.', a: ['bitterly', 'deeply'], why: '*Bitterly* or *deeply disappointed*.' },
      { s: 'I admire her: she is so [stingy] with money.', a: ['thrifty', 'frugal'], why: 'Praise needs an approving word.' },
      { s: 'His grandfather [passed out] peacefully last spring.', a: ['passed away'], why: '*Pass away* means die; *pass out* means faint.' },
      { s: 'We need to [make] a conclusion before Friday.', a: ['draw', 'reach'], why: 'You *draw* or *reach* a conclusion.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Complete the second sentence so that it means the same as the first, using the word given.', items: [
      { q: 'The plan is very unlikely to succeed.', cue: 'highly', gap: 'It is ___ will succeed.', a: ['highly unlikely that the plan', 'highly unlikely the plan'], why: '*Highly unlikely that* + clause.' },
      { q: 'His achievement was a great one.', cue: 'mean', gap: 'His achievement was ___.', a: ['no mean achievement', 'no mean feat', 'no mean one'], why: 'Litotes: *no mean achievement*.' },
    ] },
  ],
};
