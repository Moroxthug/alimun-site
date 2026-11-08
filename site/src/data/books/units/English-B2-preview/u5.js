// English B2, unit 5, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one speaking task, and one task in the format of B2 First.
export const UNIT = {
  id: 'u5',
  title: 'If only',
  goal: 'Talk about imaginary situations, past possibilities and regrets with conditionals, wish, if only and would rather.',
  art: 'ghost',
  tags: { skills: ['grammar', 'speaking', 'reading', 'writing'], topics: ['second-conditional', 'third-conditional', 'mixed-conditionals', 'wish', 'if-only', 'would-rather', 'regrets'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'If things were different',
      about: 'Use the second and third conditionals with confidence, and choose between them by thinking about time and reality.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'At B1 you used the **second conditional** to imagine a different present or an unlikely future: *If I **had** more time, I **would learn** the piano.* At B2 you need its partner, the **third conditional**, which imagines a different **past**: something that did not happen, and its result that did not happen either.\n\n**Second conditional**: *if* + past simple, *would / could / might* + infinitive. The situation is unreal **now** or unlikely in the future.\n\n**Third conditional**: *if* + past perfect, *would / could / might* + **have** + past participle. The situation is unreal **in the past**, and it is too late to change it.\n\nThe past tense in these sentences is not really about the past. It shows **distance from reality**. In the third conditional, the past perfect goes one step further back, because the time itself is already past.' },
          { t: 'table', caption: 'Two unreal conditionals', explain: ['head', 'col1', 'col2'], head: ['Type', 'If clause', 'Result clause'], rows: [
            ['second', 'if + past simple (were for every person, in careful English)', 'would / could / might + infinitive'],
            ['third', 'if + past perfect (had done)', 'would / could / might + have + past participle'],
          ] },
          { t: 'examples', items: [
            { s: 'If I **lived** nearer, I **would cycle** to work.', n: 'Second: I don’t live near, so I don’t cycle.' },
            { s: 'If she **were** here, she **would know** what to do.', n: '*Were* for *she* is normal in careful English.' },
            { s: 'If we **had left** earlier, we **wouldn’t have missed** the train.', n: 'Third: we left late and we missed it.' },
            { s: 'If you **hadn’t reminded** me, I **might have forgotten**.', n: '*Might have* = it was possible, not certain.' },
            { s: 'She **could have won** if she **had trained** harder.', n: 'The *if* clause can come second; then no comma.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Never put **would** in the *if* clause. *If I would have known* is one of the most common mistakes at this level. Say *If I **had** known*. In speech, *had* and *would* both shorten to *’d*: *If I’d known, I’d have told you* means *If I had known, I would have told you*.' },
        ],
        [
          { t: 'text', md: 'How do you choose? Ask two questions. **When** are you talking about: now or the future, or the past? And **is it real**: possible, or imaginary?\n\nIf it is a real possibility, you need the first conditional (*If it rains, we’ll stay in*). If it is imaginary and about now, the second. If it is imaginary and about the past, the third.\n\nThe third conditional is very useful for **criticism**, **relief** and **regret**: *If you had listened, this wouldn’t have happened* (criticism); *If the doctor hadn’t acted so quickly, he could have died* (relief); *If I had studied law, I would have earned more* (regret).' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['If I would have known, I would have come.', 'If I had known, I would have come.', 'No *would* in the *if* clause.'],
            ['If I knew, I would have helped you.', 'If I had known, I would have helped you.', 'A past situation needs the past perfect after *if*.'],
            ['If we had more time yesterday, we would visit the museum.', 'If we had had more time yesterday, we would have visited the museum.', '*Yesterday* is past: third conditional, with *had had*.'],
            ['If I was you, I would take it.', 'If I were you, I would take it.', 'In advice, *If I were you* is the fixed form.'],
          ] },
          { t: 'dialogue', title: 'After the interview', lines: [
            { who: 'Nadia', s: 'So how did it go?' },
            { who: 'Owen', s: 'Badly. If I had prepared properly, I wouldn’t have frozen on the first question.' },
            { who: 'Nadia', s: 'You were working until midnight. If I were you, I’d stop blaming yourself.' },
            { who: 'Owen', s: 'Maybe. But if the train hadn’t been late, I could at least have arrived calm.' },
            { who: 'Nadia', s: 'And if they offered you the job tomorrow, would you take it?' },
            { who: 'Owen', s: 'Without thinking twice.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the correct form.', items: [
            { q: 'If I ___ his number, I would call him now.', o: ['had', 'had had', 'would have'], why: 'Unreal now: second conditional, past simple after *if*.' },
            { q: 'If she had taken the job, she ___ to Canada.', o: ['would have moved', 'would move', 'had moved'], why: 'Unreal past result: *would have* + past participle.' },
            { q: 'We wouldn’t have got lost if we ___ a map.', o: ['had brought', 'brought', 'would bring'], why: 'Past situation: past perfect after *if*.' },
            { q: 'If I ___ you, I would apologise.', o: ['were', 'am', 'had been'], why: 'Advice: *If I were you*.' },
            { q: 'He ___ the race if he hadn’t fallen.', o: ['might have won', 'might win', 'would win'], why: 'Past possibility: *might have* + past participle.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with the verb in brackets in the right form.', items: [
            { q: 'If you had told me earlier, I ___ (help) you.', a: ['would have helped', 'could have helped', 'would’ve helped'], why: 'Third conditional result: *would have* + past participle.' },
            { q: 'If we ___ (not / miss) the bus, we would have been on time.', a: ['hadn’t missed', 'had not missed'], why: 'Third conditional *if* clause: past perfect.' },
            { q: 'I ___ (buy) that flat if it had a garden.', a: ['would buy', '’d buy'], why: 'Second conditional: unreal now.' },
            { q: 'If they ___ (be) more careful, the accident wouldn’t have happened.', a: ['had been'], why: 'Past situation: past perfect.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of the B2 First exam (Reading and Use of English Part 4): complete the second sentence so that it means the same as the first, using the word given. Use two to five words.', items: [
            { q: 'I didn’t know you were ill, so I didn’t visit you.', cue: 'HAD', a: ['If I had known you were ill, I would have visited you', 'If I had known you were ill, I’d have visited you', 'If I’d known you were ill, I would have visited you'], why: 'A past situation and its result: third conditional.' },
            { q: 'We got lost because we didn’t take a map.', cue: 'IF', a: ['We wouldn’t have got lost if we had taken a map', 'We would not have got lost if we had taken a map', 'We wouldn’t have got lost if we’d taken a map'], why: 'Turn the real past into an unreal past: *wouldn’t have* + *if* + past perfect.' },
            { q: 'My advice is to rest for a few days.', cue: 'WERE', a: ['If I were you, I would rest for a few days', 'If I were you, I’d rest for a few days'], why: '*My advice is* = *If I were you, I would…*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 4** of Reading and Use of English you get one sentence, a key word in capitals, and a second sentence with a gap. You must use the key word **without changing it**, and write **two to five words** (contractions count as two). Conditionals are a favourite: look for *because*, *so* and *didn’t* in the first sentence.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Your turn: say these sentences after the tutor. Watch the short forms.', tutor: 'omar', items: [
            { a: 'If I’d known, I’d have told you.' },
            { a: 'If I were you, I’d take the job.' },
            { a: 'We could have won if we’d trained harder.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Mixing times',
      about: 'Mix the second and third conditionals when a past cause has a present result, or a present fact had a past result.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Real life does not always stay in one time. A decision you made ten years ago may still affect you **today**. A fact about who you are **now** may explain something that happened **yesterday**. For these cases English **mixes** the two unreal conditionals.\n\n**Past cause, present result**: *if* + past perfect, *would* + infinitive. *If I **had studied** medicine, I **would be** a doctor now.* (I didn’t study it, so I am not a doctor today.)\n\n**Present cause, past result**: *if* + past simple, *would have* + past participle. *If I **weren’t** so shy, I **would have spoken** to her at the party.* (I am a shy person, and that is why I didn’t speak to her.)\n\nThe trick is to look at each half on its own: which time is it about, and is it real?' },
          { t: 'table', caption: 'Mixed conditionals', explain: ['head', 'col0', 'col1'], head: ['Meaning', 'Form', 'Example'], rows: [
            ['past cause → present result', 'if + past perfect, would + infinitive', 'If she had saved, she would be rich now.'],
            ['present cause → past result', 'if + past simple, would have + past participle', 'If he spoke French, he would have got the job.'],
          ] },
          { t: 'examples', items: [
            { s: 'If I **had taken** the job in Berlin, I **would be living** there now.', n: 'A past decision, a different present.' },
            { s: 'If we **hadn’t met** at that party, we **wouldn’t be** married today.', n: 'Past event, present situation.' },
            { s: 'If I **were** taller, I **would have reached** the shelf.', n: 'A permanent fact explains a past result.' },
            { s: 'If he **didn’t live** so far away, he **would have come** to the wedding.', n: 'His address now explains why he didn’t come.' },
            { s: 'If you **had listened**, you **would know** what to do.', n: 'You didn’t listen, so now you don’t know.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Time words are your best clue. **Now**, **today**, **still** and **these days** point to a present result. **Yesterday**, **last year**, **at the time** point to a past result. In the exam, one of these words often tells you that the two halves are about different times.' },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['If I had gone to bed early, I wouldn’t have been tired now.', 'If I had gone to bed early, I wouldn’t be tired now.', '*Now* is present: *would* + infinitive.'],
            ['If she wasn’t so busy, she would come last night.', 'If she wasn’t so busy, she would have come last night.', '*Last night* is past: *would have* + past participle.'],
            ['If I had been born in Spain, I would speak Spanish yesterday.', 'If I had been born in Spain, I would speak Spanish.', 'Speaking a language is a permanent present fact.'],
          ] },
          { t: 'reading', title: 'The road not taken', md: 'When Lena was eighteen, she was offered a place at a famous music school in Vienna. She turned it down and studied accounting instead, because her parents wanted her to have a safe job.\n\nTwenty years later she still thinks about it. “If I had gone to Vienna, I would probably be playing in an orchestra now,” she says. “But if I hadn’t studied accounting, I wouldn’t have met my husband, and I wouldn’t have my two children. So I can’t really regret it.”\n\nShe also admits that her personality played a part. “If I were braver, I would have gone anyway. I’m a careful person, and careful people choose the safe road.”\n\nLast year she started playing the cello again. “If I hadn’t stopped for twenty years, I would be much better. But I am enjoying it more than I ever did as a teenager.”' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Read the text. True or false?', items: [
            { q: 'Lena studied music in Vienna.', a: 'f', why: 'She turned the place down and studied accounting.' },
            { q: 'She thinks she might be in an orchestra now if she had gone.', a: 't', why: '*If I had gone…, I would probably be playing in an orchestra now.*' },
            { q: 'She believes her careful personality affected the decision.', a: 't', why: '*If I were braver, I would have gone anyway.*' },
            { q: 'She says she plays better now than as a teenager.', a: 'f', why: 'She enjoys it more, but says she would be *much better* if she hadn’t stopped.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the correct form.', items: [
            { q: 'If I had saved more money, I ___ a new car now.', o: ['could afford', 'could have afforded', 'can afford'], why: 'Past cause, present result: *could* + infinitive.' },
            { q: 'If he were more organised, he ___ the deadline last week.', o: ['wouldn’t have missed', 'wouldn’t miss', 'didn’t miss'], why: 'Present fact, past result: *wouldn’t have* + past participle.' },
            { q: 'If you ___ your phone, you would know about the change.', o: ['had checked', 'checked', 'would check'], why: 'Past cause (you didn’t check), present result.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'In the format of the B2 First exam (Reading and Use of English Part 2): write ONE word in each gap.', items: [
            { q: 'If I had known about the problem, I would ___ helped.', a: ['have'], why: 'Third conditional result: *would have* + past participle.' },
            { q: 'If she ___ accepted the offer, she would be living in Rome now.', a: ['had'], why: 'Past cause in a mixed conditional: past perfect.' },
            { q: 'I wouldn’t be so tired today ___ I had gone to bed earlier.', a: ['if'], why: 'The *if* clause can come second.' },
            { q: 'If I ___ you, I would think again.', a: ['were'], why: 'The fixed form for advice: *If I were you*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 2** (open cloze) there are no options: you write one word. Most answers are **grammar words**: auxiliaries (*had, have, would*), prepositions, articles, linkers. Read the whole sentence before you write, and check that your word fits **both** sides of the gap.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'If I’d studied medicine, I’d be a doctor now.' },
            { a: 'If I weren’t so shy, I’d have spoken to her.' },
            { a: 'If we hadn’t met, we wouldn’t be here today.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'I wish, if only, I’d rather',
      about: 'Express regrets and wishes about the present, the past and other people, and say what you would prefer.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'At B1 you met **I wish** + past simple for the present. At B2 you need the full set, because *wish* changes form depending on **what** you are unhappy about.\n\n**Present situations**: *wish* + past simple (or *were*). *I wish I **had** a bigger flat. I wish it **were** Friday.*\n\n**Past events**: *wish* + past perfect. *I wish I **had studied** harder at school.* This is a regret: it is too late to change.\n\n**Other people’s behaviour, or things you want to change**: *wish* + **would**. *I wish you **would stop** interrupting me. I wish it **would stop** raining.* This usually sounds annoyed.\n\n**Abilities**: *wish* + **could**. *I wish I **could** drive.*\n\n**If only** works in exactly the same way, but it is stronger and more emotional: *If only I **hadn’t said** that!*' },
          { t: 'table', caption: 'Wish and if only', explain: ['head', 'col0', 'col1'], head: ['About', 'Form', 'Example'], rows: [
            ['the present', 'wish + past simple / were', 'I wish I lived by the sea.'],
            ['the past (regret)', 'wish + past perfect', 'I wish I had listened.'],
            ['other people, annoying things', 'wish + would + infinitive', 'I wish he would call back.'],
            ['ability', 'wish + could', 'I wish I could sing.'],
          ] },
          { t: 'examples', items: [
            { s: 'I **wish** I **knew** the answer.', n: 'I don’t know it now.' },
            { s: 'She **wishes** she **hadn’t sold** her old car.', n: 'She sold it, and now she regrets it.' },
            { s: 'I **wish** my neighbours **would turn** the music down.', n: 'Their behaviour annoys me.' },
            { s: '**If only** I **had** more time!', n: 'Stronger than *I wish*.' },
            { s: '**If only** we **hadn’t taken** that road.', n: 'A strong regret about the past.' },
          ] },
        ],
        [
          { t: 'text', md: '**Would rather** means *would prefer*. It has two patterns.\n\nAbout **yourself**: *would rather* + infinitive without *to*. *I**’d rather stay** in tonight. I’d rather **not** go.*\n\nAbout **someone else**: *would rather* + person + **past simple**. *I’d rather you **didn’t** smoke in here. I’d rather he **told** me the truth.* The past simple here, like after *wish*, shows that the situation is not real yet.\n\n**It’s time** works in a similar way: *It’s (high) time we **left**.* The past simple means *we should do it now, and we are late*.' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I wish I would have a car.', 'I wish I had a car.', 'Do not use *would* about your own situation.'],
            ['I wish I didn’t eat that cake.', 'I wish I hadn’t eaten that cake.', 'A past event needs the past perfect.'],
            ['I’d rather to walk.', 'I’d rather walk.', 'No *to* after *would rather*.'],
            ['I’d rather you don’t tell anyone.', 'I’d rather you didn’t tell anyone.', 'Another person: past simple.'],
            ['I wish you pass the exam.', 'I hope you pass the exam.', 'For real possible things, use *hope*.'],
          ] },
          { t: 'dialogue', title: 'A long journey', lines: [
            { who: 'Kate', s: 'I wish we had booked the earlier flight.' },
            { who: 'Sam', s: 'If only the airline would tell us how long the delay is.' },
            { who: 'Kate', s: 'I’d rather wait here than go back into town, though.' },
            { who: 'Sam', s: 'Me too. But I’d rather you didn’t keep checking your phone every minute. It won’t make the plane come faster.' },
            { who: 'Kate', s: 'Fair enough. It’s time we got something to eat.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the correct form.', items: [
            { q: 'I wish I ___ more patient with my students yesterday.', o: ['had been', 'was', 'would be'], why: 'A past regret: past perfect.' },
            { q: 'I wish the bus ___ on time for once!', o: ['would come', 'came', 'had come'], why: 'An annoying situation you want to change: *would*.' },
            { q: 'If only I ___ speak Japanese!', o: ['could', 'can', 'would'], why: 'Ability: *wish / if only* + *could*.' },
            { q: 'I’d rather you ___ the window. It’s cold.', o: ['didn’t open', 'don’t open', 'not to open'], why: '*Would rather* + another person + past simple.' },
            { q: 'It’s high time we ___ home.', o: ['went', 'go', 'had gone'], why: '*It’s time* + past simple.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'I wish I [didn’t say] that to her yesterday.', a: ['hadn’t said', 'had not said'], why: 'A past regret: past perfect.' },
            { s: 'She’d rather [to stay] at home tonight.', a: ['stay'], why: 'No *to* after *would rather*.' },
            { s: 'I wish I [would be] taller.', a: ['were', 'was'], why: 'Your own situation now: past simple, not *would*.' },
            { s: 'I [wish] you get the job.', a: ['hope'], why: 'A real possibility: *hope*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of the B2 First exam (Reading and Use of English Part 4): use the word given and two to five words.', items: [
            { q: 'I regret not going to the concert.', cue: 'WISH', a: ['I wish I had gone to the concert', 'I wish I’d gone to the concert'], why: 'A regret about the past: *wish* + past perfect.' },
            { q: 'I would prefer you not to tell anyone.', cue: 'RATHER', a: ['I would rather you didn’t tell anyone', 'I’d rather you didn’t tell anyone', 'I would rather you did not tell anyone'], why: '*Would rather* + person + past simple.' },
            { q: 'It’s a pity I can’t come to your party.', cue: 'ONLY', a: ['If only I could come to your party'], why: 'Ability now: *If only* + *could*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'The words **regret**, **pity**, **prefer** and **shame** in the first sentence of a Part 4 task often point to *wish*, *if only* or *would rather*. Check the **time**: a past regret needs the past perfect.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'I wish I’d listened to your advice.' },
            { a: 'If only it would stop raining.' },
            { a: 'I’d rather you didn’t tell anyone.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'The decision that changed my life',
      about: 'Read three people’s stories about one big decision, and talk about choices and regrets in the format of the speaking exam.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'When people talk about big decisions, all the grammar of this unit comes together. They imagine a different present (*If I hadn’t moved, I would…*), they express regret (*I wish I had…*) or relief (*If I hadn’t…, I might have…*), and they say what they would prefer now (*I’d rather…*).\n\nUseful phrases for talking about a decision: **it was a turning point**, **I took the plunge**, **I had second thoughts**, **looking back**, **with hindsight** (now that I know more), **I have no regrets**, **it was the best thing I ever did**.' },
          { t: 'reading', title: 'Three turning points', md: '**Amira, 34.** Five years ago I left a well-paid job in a bank to open a small bakery. Everyone said I was mad. With hindsight, I wish I had started a bit smaller, because the first year nearly ruined me. But if I hadn’t taken the plunge, I would still be sitting in an office, dreaming. I have no regrets.\n\n**Tomás, 52.** When I was twenty-five, I had the chance to work in Australia for two years. I had second thoughts and stayed at home. Looking back, I think it was a mistake. If I had gone, I would probably speak much better English now, and I might have a very different career. I’d rather my children didn’t make the same choice. I always tell them: if you get the chance, go.\n\n**Grace, 41.** I didn’t choose my turning point: I broke my leg skiing. I was in bed for three months and started writing to pass the time. If I hadn’t had that accident, I would never have written my first novel. It sounds strange, but I wish every bad thing that happened to me had turned out so well.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B2 First exam (Reading and Use of English Part 7): which person… ?', items: [
            { q: 'Which person says the decision was a mistake?', o: ['Tomás', 'Amira', 'Grace'], why: '*Looking back, I think it was a mistake.*' },
            { q: 'Which person did not choose the change?', o: ['Grace', 'Amira', 'Tomás'], why: '*I didn’t choose my turning point.*' },
            { q: 'Which person found the beginning very hard?', o: ['Amira', 'Grace', 'Tomás'], why: '*The first year nearly ruined me.*' },
            { q: 'Which person gives advice to their children?', o: ['Tomás', 'Grace', 'Amira'], why: '*I always tell them: if you get the chance, go.*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 7** you match statements to short texts or to people. The words in the statement are almost never the same as in the text: *did not choose* matches *I didn’t choose my turning point*, but *found the beginning very hard* matches *the first year nearly ruined me*. Look for the **meaning**, not the same words.' },
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: 'Amira thinks she should have started a bigger business.', a: 'f', why: 'She wishes she had started *smaller*.' },
            { q: 'Tomás believes his English would be better if he had gone.', a: 't', why: '*I would probably speak much better English now.*' },
            { q: 'Grace started writing after an accident.', a: 't', why: 'She wrote while she was in bed with a broken leg.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Is each sentence about the present or the past?', groups: ['about now', 'about the past'], items: [
            { s: 'I wish I knew how to fix it.', g: 0, why: '*Wish* + past simple: present.' },
            { s: 'I wish I had listened.', g: 1, why: '*Wish* + past perfect: past.' },
            { s: 'If only she were here.', g: 0, why: '*Were*: present.' },
            { s: 'If only we hadn’t sold the house.', g: 1, why: 'Past perfect: past.' },
            { s: 'I’d rather you stayed.', g: 0, why: '*Would rather* + past simple: now or the near future.' },
            { s: 'If he had taken the job, he would have moved.', g: 1, why: 'Third conditional: both halves past.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences about your own life. Use the verb in brackets.', items: [
            { q: 'Looking back, I wish I ___ (learn) to swim as a child.', a: ['had learned', 'had learnt', 'I’d learned'], why: 'A past regret: past perfect.' },
            { q: 'If I ___ (not / move) here, I wouldn’t know my best friend.', a: ['hadn’t moved', 'had not moved'], why: 'Past cause, present result.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B2 First exam (Speaking Part 1): choose the best answer to the examiner’s question.', items: [
            { q: '“Is there anything you wish you had done differently at school?”', o: ['Yes, I wish I had taken languages more seriously, because I would find this much easier now.', 'Yes, I wish I take languages more seriously.', 'Yes, I did languages.'], why: 'A full answer: *wish* + past perfect, a reason, and a link to now.' },
            { q: '“Would you rather live in the city or in the country?”', o: ['I’d rather live in the country, because I need space and quiet.', 'I’d rather to live in the country.', 'Country.'], why: 'No *to* after *would rather*, and give a reason.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Speaking Part 1** the examiner asks about you. One-word answers lose marks: give your answer, a **reason** and, if you can, an example. Questions with *wish* and *would rather* are a chance to show the grammar of this unit.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'Looking back, it was a turning point.' },
            { a: 'If I hadn’t taken the plunge, I’d still be dreaming.' },
            { a: 'With hindsight, I have no regrets.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the correct form.', items: [
      { q: 'If I ___ about the strike, I would have taken the car.', o: ['had known', 'knew', 'would know'], why: 'Third conditional: past perfect after *if*.' },
      { q: 'If he had accepted the offer, he ___ in London now.', o: ['would be working', 'would have worked', 'works'], why: 'Past cause, present result.' },
      { q: 'If she weren’t so stubborn, she ___ my advice last week.', o: ['would have taken', 'would take', 'took'], why: 'Present fact, past result.' },
      { q: 'I wish my brother ___ borrowing my clothes.', o: ['would stop', 'stopped', 'had stopped'], why: 'Annoying behaviour: *wish* + *would*.' },
      { q: 'I’d rather you ___ me before you came.', o: ['phoned', 'phone', 'to phone'], why: '*Would rather* + person + past simple.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write ONE word in each gap.', items: [
      { q: 'If only I ___ listened to you!', a: ['had'], why: 'A past regret: *if only* + past perfect.' },
      { q: 'If I ___ you, I would accept.', a: ['were'], why: 'Advice: *If I were you*.' },
      { q: 'We would ___ missed the plane if the taxi hadn’t arrived.', a: ['have'], why: 'Third conditional result.' },
      { q: 'It’s time we ___ a decision.', a: ['made', 'took'], why: '*It’s time* + past simple.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Use the word given and two to five words.', items: [
      { q: 'I didn’t have enough money, so I didn’t buy the jacket.', cue: 'HAD', a: ['If I had had enough money, I would have bought the jacket', 'If I had had enough money, I’d have bought the jacket', 'If I’d had enough money, I would have bought the jacket'], why: 'Third conditional: *had had* after *if*.' },
      { q: 'I regret selling my bike.', cue: 'WISH', a: ['I wish I hadn’t sold my bike', 'I wish I had not sold my bike'], why: 'Past regret: *wish* + past perfect.' },
      { q: 'I’d prefer to stay at home tonight.', cue: 'RATHER', a: ['I would rather stay at home tonight', 'I’d rather stay at home tonight'], why: '*Would rather* + infinitive without *to*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'If I [would have known], I would have called.', a: ['had known'], why: 'No *would* in the *if* clause.' },
      { s: 'I wish I [can] play the guitar.', a: ['could'], why: 'Ability: *wish* + *could*.' },
      { s: 'If we had left earlier, we [wouldn’t be] late yesterday.', a: ['wouldn’t have been', 'would not have been'], why: '*Yesterday*: *would have* + past participle.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: '*I wish it would stop raining* is about something annoying you want to change.', a: 't', why: '*Wish* + *would* for things outside your control.' },
      { q: '*If I had studied, I would be a doctor now* is about the past only.', a: 'f', why: 'It mixes a past cause and a present result.' },
    ] },
  ],
};
