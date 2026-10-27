// English C2, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Precision and nuance',
  goal: 'Choose the exact word for the exact shade of meaning.',
  art: 'owl',
  tags: { skills: ['vocabulary', 'reading', 'writing'], topics: ['near-synonyms', 'connotation', 'collocation', 'binomials', 'euphemism', 'understatement'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Glance, gaze, stare',
      about: 'Tell near-synonyms apart by what they suggest as well as what they mean.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'At C2, knowing that two words are “close” is not enough. Near-synonyms differ in **denotation** (what they describe) and in **connotation** (what they suggest: approval, disapproval, formality). Take the verbs of looking. A **glance** is a quick look. A **glimpse** is a brief view, often by chance. To **peer** is to look hard because it is difficult to see. To **gaze** is to look for a long time, often with admiration or while lost in thought. To **stare** is to look fixedly, often rudely. To **peek** is to look secretly and quickly.' },
          { t: 'table', caption: 'Verbs of looking', explain: ['head', 'col0'], head: ['Verb', 'What it suggests', 'Example'], rows: [
            ['glance', 'quick, casual', 'She glanced at her watch.'],
            ['glimpse', 'brief, often by chance', 'We caught a glimpse of the singer.'],
            ['peer', 'with effort, in poor light', 'He peered into the fog.'],
            ['gaze', 'long, admiring or dreamy', 'They gazed at the stars.'],
            ['stare', 'fixed, often rude', 'It is rude to stare at people.'],
            ['peek', 'secret and quick', 'She peeked through the curtains.'],
          ] },
        ],
        [
          { t: 'text', md: 'Connotation matters even more with adjectives for people. The same fact can be a compliment or an insult. Someone who keeps going despite difficulty is **determined** (positive), **persistent** (neutral to positive) or **obstinate** (negative). Someone who spends little is **thrifty** (positive), **economical** (neutral) or **stingy** (negative). A thin person may be **slender** (graceful), **slim** (attractive), **lean** (fit), **skinny** (informal, often negative) or **gaunt** (ill or tired).' },
          { t: 'tip', art: 'owl', md: 'A good dictionary shows connotation with labels such as *approving*, *disapproving* and *formal*. Use them. In an exam, one wrong connotation (*She is stingy with her time* said as praise) can change the whole message.' },
          { t: 'ex', kind: 'sort', h: 'Does the word praise, or criticise?', groups: ['praise', 'criticise'], explain: ['groups'], items: [
            { s: 'thrifty', g: 0, why: 'Approving: careful with money.' },
            { s: 'stingy', g: 1, why: 'Disapproving: unwilling to spend.' },
            { s: 'determined', g: 0, why: 'Approving: firm and strong-minded.' },
            { s: 'obstinate', g: 1, why: 'Disapproving: refusing to change.' },
            { s: 'slender', g: 0, why: 'Approving: thin in a graceful way.' },
            { s: 'scrawny', g: 1, why: 'Disapproving: thin and weak.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the most precise word.', items: [
            { q: 'He ___ at the small print for a long time, trying to read it in the dim light.', o: ['peered', 'glanced', 'stared'], why: '*Peer*: look hard because it is difficult to see.' },
            { q: 'I only caught a ___ of the president as the car sped past.', o: ['glimpse', 'gaze', 'stare'], why: 'A *glimpse* is a brief view, often by chance.' },
            { q: 'She sat by the window and ___ out at the sea for hours.', o: ['gazed', 'glanced', 'peeked'], why: '*Gaze*: look for a long time, often dreamily.' },
            { q: 'My sister is very ___ with money; she never wastes a penny, and I admire her for it.', o: ['thrifty', 'stingy', 'mean'], why: '*Thrifty* is approving; *stingy* and *mean* are not.' },
            { q: 'The children ___ round the door to see their presents before Christmas.', o: ['peeked', 'gazed', 'stared'], why: '*Peek*: look secretly and quickly.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a verb from the lesson (glance, glimpse, peer, gaze, stare, peek).', items: [
            { q: 'It’s rude to ___ at strangers on the train.', a: ['stare'], why: '*Stare*: look fixedly, often rudely.' },
            { q: 'She ___ at her phone during the meeting, hoping nobody would notice.', a: ['glanced'], why: '*Glance*: a quick look.' },
            { q: 'The lovers ___ into each other’s eyes.', a: ['gazed'], why: '*Gaze*: a long, admiring look.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match each word with its meaning.', pairs: [
            ['gaunt', 'thin because of illness or tiredness'],
            ['lean', 'thin and fit'],
            ['obstinate', 'refusing to change your mind, in a bad way'],
            ['persistent', 'continuing despite difficulty'],
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the word that gives the wrong impression.', items: [
            { s: 'I admire my grandmother: she is so [stingy] and never throws anything away.', a: ['thrifty'], why: 'Praise needs an approving word: *thrifty*.' },
            { s: 'Our manager is wonderfully [obstinate]: she never gives up on a good idea.', a: ['determined', 'persistent'], why: 'The speaker approves, so *determined* or *persistent*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Bitterly disappointed',
      about: 'Use strong collocations and fixed pairs of words naturally.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Collocations are words that naturally go together. At C2, the test is not whether your sentence is grammatical, but whether it sounds as a native speaker would say it. Adverbs are very selective: we say **bitterly disappointed** or **bitterly cold**, but not *bitterly happy*. We say **deeply moved**, **highly unlikely**, **blatantly obvious**, **painfully shy**, **fully aware**. Nouns also pick their partners: **a sweeping generalisation**, **a vested interest**, **a glaring omission**, **a heated debate**, **a fleeting glimpse**.' },
          { t: 'table', caption: 'Collocations that sound natural', explain: ['head', 'col0'], head: ['Word', 'Natural partners', 'Not natural'], rows: [
            ['adverb + adjective', 'bitterly disappointed, painfully shy, highly unlikely', 'bitterly happy, painfully tall'],
            ['adjective + noun', 'a sweeping generalisation, a glaring omission', 'a sweeping omission, a glaring generalisation'],
            ['verb + noun', 'draw a conclusion, reach a compromise', 'make a conclusion, do a compromise'],
            ['noun + of + noun', 'a stroke of luck, a pang of guilt', 'a hit of luck, a sting of guilt'],
          ] },
        ],
        [
          { t: 'text', md: 'Fixed **binomials** are pairs of words joined by *and* or *or*, always in the same order. You cannot reverse them. **Odds and ends** (small items), **ups and downs** (good and bad times), **safe and sound** (unharmed), **wear and tear** (damage from normal use), **trial and error** (learning by trying), **pros and cons** (advantages and disadvantages), **give and take** (compromise).' },
          { t: 'tip', art: 'owl', md: 'Binomials follow hidden patterns: the shorter word usually comes first (*odds and ends*), and positive often comes before negative (*ups and downs*). When you meet a new one, learn it as a single block and never reverse it: *downs and ups* sounds wrong to every native speaker.' },
          { t: 'ex', kind: 'match', h: 'Match the binomial with its meaning.', pairs: [
            ['odds and ends', 'small items of different kinds'],
            ['wear and tear', 'damage from normal use'],
            ['trial and error', 'learning by trying different ways'],
            ['give and take', 'compromise'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the natural collocation.', items: [
            { q: 'The team were ___ disappointed by the result.', o: ['bitterly', 'strongly', 'heavily'], why: '*Bitterly disappointed* is a fixed collocation.' },
            { q: 'It is ___ unlikely that the plan will succeed.', o: ['highly', 'greatly', 'strongly'], why: '*Highly unlikely*.' },
            { q: 'Her report contained a ___ omission: the budget was missing.', o: ['glaring', 'sweeping', 'heated'], why: '*A glaring omission*: very obvious.' },
            { q: 'To say that all teenagers are lazy is a ___ generalisation.', o: ['sweeping', 'glaring', 'fleeting'], why: '*A sweeping generalisation*.' },
            { q: 'After a long debate, they managed to ___ a compromise.', o: ['reach', 'make', 'do'], why: '*Reach a compromise*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the binomial.', items: [
            { q: 'It has been a year of ups and ___ for the company.', a: ['downs'], why: '*Ups and downs*.' },
            { q: 'The old sofa shows a lot of wear and ___.', a: ['tear'], why: '*Wear and tear*.' },
            { q: 'We learned to cook by trial and ___.', a: ['error'], why: '*Trial and error*.' },
            { q: 'Before we decide, let’s consider the pros and ___.', a: ['cons'], why: '*Pros and cons*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite, using the word given.', items: [
            { q: 'The evidence was extremely unlikely to convince anyone.', cue: 'highly', a: ['The evidence was highly unlikely to convince anyone.', 'It was highly unlikely that the evidence would convince anyone.'], why: '*Highly unlikely*.' },
            { q: 'They arrived without harm after the storm.', cue: 'safe', a: ['They arrived safe and sound after the storm.'], why: '*Safe and sound*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the unnatural collocation.', items: [
            { s: 'She was [strongly] disappointed when she heard the news.', a: ['bitterly', 'deeply'], why: '*Bitterly* or *deeply disappointed*.' },
            { s: 'He made a [heated] generalisation about young people.', a: ['sweeping'], why: '*A sweeping generalisation*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Passed away, between jobs',
      about: 'Recognise euphemism and understatement, and decide when softening helps.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'A **euphemism** replaces a direct word with a gentler one: *passed away* for *died*, *between jobs* for *unemployed*, *let go* for *fired*, *a correctional facility* for *prison*. **Understatement** says less than the truth for effect or politeness: *It’s a bit of a challenge* may mean *it is almost impossible*. In British English especially, *not bad* can mean *very good* and *a little disappointing* can mean *a complete failure*.' },
          { t: 'table', caption: 'Euphemism and understatement', explain: ['head', 'col0'], head: ['Gentle phrase', 'Direct meaning', 'Effect'], rows: [
            ['pass away', 'die', 'respect, comfort'],
            ['between jobs', 'unemployed', 'avoids embarrassment'],
            ['let go', 'dismissed', 'hides the employer’s action'],
            ['economical with the truth', 'lying or hiding facts', 'polite way to accuse'],
            ['a bit of a challenge', 'very difficult', 'understatement, often humorous'],
          ] },
        ],
        [
          { t: 'text', md: 'Softening helps when it shows kindness: *I’m sorry for your loss* is better than *I’m sorry he died* at a funeral. It hides the truth when it protects the powerful: *rightsizing* for *firing a thousand workers*, *collateral damage* for *killed civilians*. This is sometimes called **doublespeak**. A careful reader asks: who benefits from the softer word?' },
          { t: 'tip', art: 'owl', md: 'In your own writing, use a euphemism only when your reader would be hurt by the plain word. In reports and essays, plain words show confidence: write *the company dismissed forty staff*, not *the company let some colleagues go on their journey*.' },
          { t: 'ex', kind: 'sort', h: 'Kind softening, or hiding the truth?', groups: ['kind softening', 'hiding the truth'], explain: ['groups'], items: [
            { s: 'I’m sorry for your loss.', g: 0, why: 'Gentle, at a moment of grief.' },
            { s: 'The factory is being rightsized.', g: 1, why: 'A fancy word that hides job losses.' },
            { s: 'Our grandmother passed away peacefully.', g: 0, why: 'A gentle way to say it to the family.' },
            { s: 'There was some collateral damage.', g: 1, why: 'Hides the fact that people were killed.' },
            { s: 'He’s between jobs at the moment.', g: 0, why: 'Avoids embarrassment, harms nobody.' },
            { s: 'The minister was economical with the truth.', g: 1, why: 'A polite way to say he did not tell the truth.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What does the speaker really mean?', items: [
            { q: '“The trip was a bit of a challenge,” said the climber after nearly dying.', o: ['It was extremely hard.', 'It was fairly easy.', 'It was boring.'], why: 'Understatement: much less than the truth.' },
            { q: '“We’ve had to let you go.”', o: ['You are dismissed.', 'You may leave early.', 'You are free to speak.'], why: '*Let go* is a euphemism for *dismiss*.' },
            { q: '“Not bad at all,” said the critic of the film.', o: ['It was quite good.', 'It was terrible.', 'It was average.'], why: 'British understatement: *not bad* means good.' },
            { q: 'A spokesman says the company is “optimising its workforce”.', o: ['It is cutting jobs.', 'It is hiring more people.', 'It is training its staff.'], why: 'A euphemism for job cuts.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it plainly.', items: [
            { q: 'The company let forty colleagues go.', cue: 'The company dismissed', a: ['The company dismissed forty colleagues.', 'The company dismissed forty staff.', 'The company dismissed forty employees.'], why: 'Replace *let go* with *dismissed*.' },
            { q: 'His grandfather passed away in March.', cue: 'His grandfather died', a: ['His grandfather died in March.'], why: '*Pass away* means *die*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the euphemism with its plain meaning.', pairs: [
            ['correctional facility', 'prison'],
            ['between jobs', 'unemployed'],
            ['let go', 'dismissed'],
            ['collateral damage', 'civilian deaths in an attack'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the lesson.', items: [
            { q: 'He wasn’t fired; he was ___ go after the merger.', a: ['let'], why: '*Let go* = dismissed.' },
            { q: 'She is ___ jobs at the moment, but she has an interview next week.', a: ['between'], why: '*Between jobs* = unemployed.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'The words we choose',
      about: 'Read an essay and notice how word choice shapes the reader’s view.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'The words we choose', md: 'Two newspapers reported the same protest. One wrote that “a crowd of angry demonstrators glared at the police”; the other that “a group of determined citizens gazed steadily at the officers”. The facts were identical. The words were not.\n\nThat is the quiet power of near-synonyms. Slim is a compliment, skinny is not; a thrifty uncle is admired, a stingy one is avoided. Every writer has a choice, and every choice carries a small judgement.\n\nCollocation is the writer’s second test. A native speaker will say that a plan is highly unlikely, never strongly unlikely, and that a report contains a glaring omission, never a heavy one. Such pairings are not rules; they are habits, learned by reading a great deal and by noticing, a little at a time, what sounds right.\n\nThen there is the question of softening. After a death, “passed away” is a kindness. But when a company says it is “rightsizing”, we may fairly ask who the softer word protects. Plain words can be harsh; they can also be honest.\n\nThe lesson is not to avoid nuance but to control it. Before you choose a word, ask three questions: what does it mean, what does it suggest, and who might it flatter or hurt?' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The two newspapers reported different facts about the protest.', a: 'f', why: '“The facts were identical. The words were not.”' },
            { q: 'According to the writer, *skinny* is more flattering than *slim*.', a: 'f', why: '“Slim is a compliment, skinny is not.”' },
            { q: 'The writer says collocations are strict rules of grammar.', a: 'f', why: '“Such pairings are not rules; they are habits.”' },
            { q: 'The writer thinks “passed away” is always wrong.', a: 'f', why: 'After a death it is “a kindness”.' },
            { q: 'The writer recommends asking who a softer word protects.', a: 't', why: '“We may fairly ask who the softer word protects.”' },
            { q: 'The protest took place in London.', a: 'ng', why: 'The text does not say where.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'What does the opening example show?', o: ['Word choice can change how the same facts feel.', 'Newspapers always lie.', 'Protests are difficult to describe.'], why: 'The facts were the same, but the words gave different pictures.' },
            { q: 'Why does the writer mention “rightsizing”?', o: ['As a euphemism that may protect a company.', 'As a good example of plain language.', 'As a word from a dictionary of law.'], why: 'To show how a soft word can hide a harsh fact.' },
            { q: 'What are the three questions at the end about?', o: ['Meaning, suggestion and effect on people.', 'Grammar, spelling and pronunciation.', 'Length, rhythm and tone.'], why: 'What it means, what it suggests, who it might flatter or hurt.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the near-synonyms the writer uses to praise or criticise.', items: [
            { s: '[Slim] is a compliment, [skinny] is not; a [thrifty] uncle is admired, a [stingy] one is avoided.', why: 'Two pairs of near-synonyms with opposite connotations.' },
            { s: 'A crowd of [angry demonstrators] glared at the police.', why: 'These words give a negative picture of the protesters.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'A plan is ___ unlikely, never *strongly* unlikely.', a: ['highly'], why: '*Highly unlikely*.' },
            { q: 'A report contains a ___ omission, never a heavy one.', a: ['glaring'], why: '*A glaring omission*.' },
            { q: 'After a death, “passed away” is a ___.', a: ['kindness'], why: 'The writer’s view of the euphemism.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Every writer has a choice, and every choice carries a small judgement.', why: 'A sentence from the essay.' },
            { a: 'Before you choose a word, ask who it might flatter or hurt.', why: 'The idea of the last paragraph.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'He ___ at the sign, trying to read it through the fog.', o: ['peered', 'glanced', 'peeked'], why: '*Peer*: look hard with difficulty.' },
      { q: 'My uncle is so ___ that he reuses tea bags, and he is proud of it.', o: ['thrifty', 'stingy', 'obstinate'], why: 'He is proud, so an approving word: *thrifty*.' },
      { q: 'The audience were ___ moved by her speech.', o: ['deeply', 'greatly', 'strongly'], why: '*Deeply moved*.' },
      { q: 'To say all politicians lie is a ___ generalisation.', o: ['sweeping', 'glaring', 'heated'], why: '*A sweeping generalisation*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'We learned the software by trial and ___.', a: ['error'], why: '*Trial and error*.' },
      { q: 'She is ___ jobs at the moment, but she has an interview tomorrow.', a: ['between'], why: '*Between jobs*.' },
      { q: 'It’s rude to ___ at strangers.', a: ['stare'], why: '*Stare*: fixed and rude.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
      ['gaunt', 'thin from illness or tiredness'],
      ['wear and tear', 'damage from normal use'],
      ['let go', 'dismissed'],
    ] },
    { t: 'ex', kind: 'choice', h: 'What does the speaker really mean?', items: [
      { q: '“It was a bit of a challenge,” said the sailor after surviving a hurricane.', o: ['It was extremely hard.', 'It was easy.', 'It was boring.'], why: 'Understatement.' },
      { q: '“Not bad at all,” said the critic.', o: ['It was quite good.', 'It was terrible.', 'It was average.'], why: 'British understatement.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'She was [strongly] disappointed by the result.', a: ['bitterly', 'deeply'], why: '*Bitterly* or *deeply disappointed*.' },
      { s: 'I admire her: she is so [stingy] with money.', a: ['thrifty'], why: 'Praise needs an approving word.' },
    ] },
  ],
};
