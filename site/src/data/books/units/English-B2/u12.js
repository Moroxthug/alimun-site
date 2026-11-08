// English B2, unit 12, second edition (docs/LESSONS_PLAN.md, L6). Draft for native-teacher review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one speaking task, and one task in the format of B2 First.
export const UNIT = {
  id: 'u12',
  title: 'Money and choices',
  goal: 'Criticise and regret past decisions with should have, ought to have and could have, compare things precisely, recognise and use persuasive language, and discuss why we buy things we do not need.',
  art: 'mug',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading', 'writing'], topics: ['modals-past', 'comparatives', 'persuasion', 'advertising', 'money', 'shopping'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'I should have saved',
      about: 'Criticise past actions and talk about regrets with should have, ought to have and could have.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'When we look back at a decision and think it was wrong, English uses a modal verb + **have** + **past participle**.\n\n**Should have / ought to have + past participle** means *it was the right thing to do, but it didn’t happen*: *I **should have saved** some money last year* (I didn’t). **Ought to have** means the same but is a little more formal.\n\n**Shouldn’t have + past participle** means *it was wrong, but it happened*: *I **shouldn’t have bought** that coat* (I did).\n\n**Could have + past participle** means *it was possible, but it didn’t happen*: *You **could have asked** me for a loan.* It is often used to criticise someone gently, or with annoyance: *You **could have told** me!*' },
          { t: 'table', caption: 'Looking back', explain: ['head', 'col1', 'col2'], head: ['Form', 'What happened', 'Meaning'], rows: [
            ['should have done', 'it didn’t happen', 'it was a good idea'],
            ['shouldn’t have done', 'it happened', 'it was a bad idea'],
            ['ought to have done', 'it didn’t happen', 'it was the right thing (formal)'],
            ['could have done', 'it didn’t happen', 'it was possible; often a criticism'],
          ] },
          { t: 'tip', art: 'owl', md: 'In speech, **should have** sounds like *shoulda* and **could have** like *coulda*. That is why some people wrongly write *should of*. In writing, it is always **have**: *I should **have** known.*' },
        ],
        [
          { t: 'text', md: 'Compare these with the **third conditional** you met in unit 5: *If I **had saved** money, I **could have gone** on holiday.* The modal + have form can stand alone when the condition is clear: *I **could have gone** on holiday* (but I didn’t have the money).\n\nAnother useful form: **needn’t have + past participle** (unit 10) means *I did it, but it wasn’t necessary*. It is not a criticism, just a small surprise: *I **needn’t have taken** so much cash; everywhere took cards.*' },
          { t: 'examples', items: [
            { s: 'I **should have checked** the price before I ordered.', n: 'A good idea that I didn’t follow.' },
            { s: 'We **shouldn’t have spent** so much on the first day.', n: 'We did it, and it was a mistake.' },
            { s: 'You **ought to have read** the contract more carefully.', n: 'Formal criticism.' },
            { s: 'She **could have got** a refund, but she didn’t ask.', n: 'It was possible, it didn’t happen.' },
            { s: 'You **could have warned** me the shop was closed!', n: 'Annoyed criticism.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I should of bought it.', 'I should have bought it.', 'It is *have*, not *of*.'],
            ['You should have went.', 'You should have gone.', 'Past participle after *have*.'],
            ['I shouldn’t buy that phone last year.', 'I shouldn’t have bought that phone last year.', 'For the past: *have* + past participle.'],
            ['We ought have saved.', 'We ought to have saved.', '*ought to*, with *to*.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'The end of the month', lines: [
            { who: 'Emma', s: 'I’ve got twelve euros until payday. I really shouldn’t have booked that weekend away.' },
            { who: 'Joe', s: 'You could have told me. I would have lent you some money.' },
            { who: 'Emma', s: 'I know. I should have made a budget at the start of the month.' },
            { who: 'Joe', s: 'And you needn’t have bought new shoes for the trip. Yours were fine.' },
            { who: 'Emma', s: 'Thanks, Joe. That really helps.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Read the dialogue. True or false?', items: [
            { q: 'Emma booked a weekend away.', a: 't', why: '*I shouldn’t have booked*: she did.' },
            { q: 'Emma asked Joe for a loan.', a: 'f', why: '*You could have told me*: she didn’t ask.' },
            { q: 'Emma made a budget at the start of the month.', a: 'f', why: '*I should have made a budget*: she didn’t.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'I’m so tired. I ___ to bed earlier last night.', o: ['should have gone', 'should go', 'should have go'], why: 'Past regret: *should have* + past participle.' },
            { q: 'He ___ the car without a test drive. Now it keeps breaking down.', o: ['shouldn’t have bought', 'should have bought', 'couldn’t buy'], why: 'He did it, and it was a mistake.' },
            { q: 'Why didn’t you call me? I ___ you from the station.', o: ['could have picked up', 'should pick up', 'could pick'], why: 'It was possible, but it didn’t happen.' },
            { q: 'We ___ so much food: half of it was left over.', o: ['needn’t have cooked', 'shouldn’t cook', 'couldn’t have cooked'], why: 'We did it, but it wasn’t necessary.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'In the format of the B2 First exam, Reading and Use of English Part 4: complete the second sentence so that it means the same as the first. Use the word given.', items: [
            { q: 'It was a mistake to lend him my card.', cue: 'shouldn’t', a: ['I shouldn’t have lent him my card.', 'I should not have lent him my card.'], why: 'A past mistake: *shouldn’t have* + past participle.' },
            { q: 'It was possible for you to ask for a discount, but you didn’t.', cue: 'could', a: ['You could have asked for a discount.'], why: 'Possible but didn’t happen: *could have*.' },
            { q: 'It would have been better to compare prices first.', cue: 'ought', a: ['I ought to have compared prices first.', 'We ought to have compared prices first.', 'You ought to have compared prices first.'], why: 'The right thing that didn’t happen: *ought to have*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 4** the answer often tests one structure exactly. If the key word is a modal like **should, could** or **ought**, think *modal + have + past participle* when the first sentence talks about the past.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'I should have made a budget.' },
            { a: 'You could have told me.' },
            { a: 'We shouldn’t have spent so much.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Far cheaper, slightly better',
      about: 'Compare in detail with far, much, slightly, a bit, nowhere near, and the… the….',
      art: 'pretzel',
      spreads: [
        [
          { t: 'text', md: 'At B1 you compared with *much* and *a bit*. At B2 you can say **how big** the difference is, which makes your speaking and writing more precise.\n\nFor a **big** difference, put **far, much, a lot** or **considerably** before the comparative: *This phone is **far cheaper** than that one.*\n\nFor a **small** difference, use **slightly, a bit, a little** or **marginally**: *The second offer is **slightly better**.*\n\nWith **as … as**, use **nowhere near / not nearly** for a big difference and **almost / nearly** for a small one: *Renting is **nowhere near as** expensive as buying. The copy is **almost as** good as the original.*' },
          { t: 'table', caption: 'How big is the difference?', explain: ['head', 'col0'], head: ['Difference', 'With a comparative', 'With as … as'], rows: [
            ['big', 'far / much / a lot / considerably cheaper', 'nowhere near as / not nearly as cheap'],
            ['small', 'slightly / a bit / a little / marginally cheaper', 'almost as / nearly as cheap'],
            ['none', '—', 'just as cheap / exactly as cheap'],
          ] },
        ],
        [
          { t: 'text', md: '**The + comparative …, the + comparative …** shows that two things change together: ***The more** you earn, **the more** you spend.* ***The sooner** we book, **the cheaper** it will be.* Note the word order: *the* + comparative + subject + verb.\n\nA short fixed form is common in speech: ***The sooner, the better.*** / ***The more, the merrier.***' },
          { t: 'examples', items: [
            { s: 'Second-hand books are **far cheaper** than new ones.', n: 'A big difference.' },
            { s: 'The new model is only **slightly faster**.', n: 'A small difference.' },
            { s: 'Online shopping is **nowhere near as** relaxing as I thought.', n: 'A big difference with *as … as*.' },
            { s: 'This brand is **just as good** as the expensive one.', n: 'No difference.' },
            { s: '**The longer** you wait, **the higher** the price.', n: 'Two things change together.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['It’s very cheaper.', 'It’s much cheaper.', '*very* doesn’t go with comparatives.'],
            ['It’s nowhere near as expensive than that.', 'It’s nowhere near as expensive as that.', '*as … as*, not *as … than*.'],
            ['The more you save, more you have.', 'The more you save, the more you have.', '*the* in both halves.'],
            ['It’s slightly more cheap.', 'It’s slightly cheaper.', 'Short adjectives take *-er*.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Choosing a phone plan', lines: [
            { who: 'Ellie', s: 'This plan is far cheaper than mine, and the data is only slightly less.' },
            { who: 'Marcus', s: 'Yes, but the signal is nowhere near as good in the countryside.' },
            { who: 'Ellie', s: 'I hardly ever leave the city. The less I pay, the better.' },
            { who: 'Marcus', s: 'Then switch. The sooner, the better.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Flying is ___ faster than taking the bus: four hours instead of twenty.', o: ['far', 'slightly', 'very'], why: 'A big difference: *far*.' },
            { q: 'The two hotels are almost the same; this one is ___ more expensive.', o: ['slightly', 'far', 'nowhere near'], why: 'A small difference: *slightly*.' },
            { q: 'My old laptop is ___ as fast as this one: it takes ages to start.', o: ['nowhere near', 'almost', 'just'], why: 'A big difference with *as … as*.' },
            { q: 'The more you practise, ___ you get.', o: ['the better', 'better', 'the best'], why: '*The* + comparative in both halves.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of the B2 First exam, Reading and Use of English Part 4: complete the second sentence so that it means the same as the first. Use the word given.', items: [
            { q: 'The second-hand bike was much cheaper than the new one.', cue: 'near', a: ['The new bike was nowhere near as cheap as the second-hand one.', 'The new one was nowhere near as cheap as the second-hand bike.', 'The new bike was not nearly as cheap as the second-hand one.'], why: 'A big difference: *nowhere near as … as*.' },
            { q: 'If you book early, the tickets are cheaper.', cue: 'the', a: ['The earlier you book, the cheaper the tickets are.', 'The earlier you book, the cheaper the tickets.'], why: '*The* + comparative, *the* + comparative.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'In the format of the B2 First exam, Reading and Use of English Part 2: write one word in each gap.', items: [
            { q: 'Renting a flat is often just ___ expensive as paying a mortgage.', a: ['as'], why: '*just as … as*: no difference.' },
            { q: 'The new shop is a lot bigger ___ the old one.', a: ['than'], why: 'Comparative + *than*.' },
            { q: 'The ___ you spend, the less you save.', a: ['more'], why: '*The more…, the less…*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 2** the missing words are short grammar words: *as, than, the, of, by, so, such, which*. Read the whole sentence first and ask what kind of word is missing before you write.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'This plan is far cheaper than mine.' },
            { a: 'It’s nowhere near as good as I thought.' },
            { a: 'The sooner, the better.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Buy now!',
      about: 'Recognise the language of advertising and persuasion, and use it carefully yourself.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Adverts and sales messages use a small set of language tricks again and again. Recognising them helps you **read critically**, and using a few of them helps you **persuade** in a speaking task or a letter.\n\n**Urgency**: *Limited offer, Only three left, Ends tonight, Don’t miss out.*\n\n**Strong adjectives**: *amazing, unbeatable, revolutionary, must-have, life-changing.*\n\n**Direct address and imperatives**: *You deserve it. Treat yourself. Imagine how you’ll feel.*\n\n**Vague claims**: *up to 50% off* (maybe only one item), *helps reduce* (not *reduces*), *clinically tested* (but with what result?).' },
          { t: 'table', caption: 'Persuasion tricks', explain: ['head', 'col0', 'col2'], head: ['Trick', 'Example', 'What it really means'], rows: [
            ['urgency', 'Only today!', 'They want you to decide without thinking.'],
            ['vague numbers', 'Up to 70% off', 'Most items have a much smaller discount.'],
            ['soft verbs', 'Helps fight tiredness', 'It may not work at all.'],
            ['social proof', 'Thousands of happy customers', 'No proof is given.'],
            ['flattery', 'You deserve the best', 'It makes you feel special, not informed.'],
          ] },
        ],
        [
          { t: 'text', md: 'When **you** want to persuade, in a speaking task or a letter, use softer and more honest language. It sounds more convincing at B2:\n\n*Have you considered…? It might be worth… I’d strongly recommend… The main advantage is that… What’s more,… If you ask me,…*' },
          { t: 'examples', items: [
            { s: '**Don’t miss out**: this offer **ends at midnight**.', n: 'Urgency.' },
            { s: 'Our cream **helps reduce** the signs of ageing.', n: 'A soft, vague verb.' },
            { s: '**It might be worth** comparing prices before you decide.', n: 'Honest persuasion.' },
            { s: '**The main advantage is that** it lasts for years.', n: 'A clear reason.' },
            { s: '**I’d strongly recommend** reading the reviews first.', n: 'A firm but polite suggestion.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I recommend you to buy it.', 'I recommend buying it. / I recommend that you buy it.', '*recommend* + -ing or *that*.'],
            ['It’s worth to compare.', 'It’s worth comparing.', '*worth* + -ing.'],
            ['Have you considered to rent?', 'Have you considered renting?', '*consider* + -ing.'],
            ['The main advantage is it lasts.', 'The main advantage is that it lasts.', 'In formal speech and writing, keep *that*.'],
          ] },
        ],
        [
          { t: 'reading', title: 'Two adverts', md: '**Advert A.** Revolutionary new headphones! Up to 60% off for the next 24 hours only. Thousands of happy customers can’t be wrong. You deserve the best sound in the world: order now before they’re gone!\n\n**Advert B.** Our headphones have a 30-hour battery and a two-year guarantee. They’re 20% cheaper this month. If you mainly listen on the train, it might be worth trying the noise-cancelling model: the main advantage is that you can hear your music at a lower volume.' },
          { t: 'ex', kind: 'choice', h: 'In the format of the B2 First exam, Reading and Use of English Part 7: which advert does each sentence describe?', items: [
            { q: 'It gives a clear time limit to make you hurry.', o: ['Advert A', 'Advert B'], why: 'A says *for the next 24 hours only*.' },
            { q: 'It gives precise facts about the product.', o: ['Advert B', 'Advert A'], why: 'B gives the battery life and the guarantee.' },
            { q: 'It relies on what other buyers think.', o: ['Advert A', 'Advert B'], why: 'A says *thousands of happy customers*.' },
            { q: 'It suggests a model for a particular need.', o: ['Advert B', 'Advert A'], why: 'B suggests the noise-cancelling model for the train.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 7** you match statements to several short texts. Read the statements first, then scan each text for the **idea**, not the same words: *a clear time limit* matches *for the next 24 hours only*.' },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'I’d recommend [to read] the small print.', a: ['reading'], why: '*recommend* + -ing.' },
            { s: 'It’s worth [to wait] for the sales.', a: ['waiting'], why: '*worth* + -ing.' },
            { s: 'Have you considered [to buy] second-hand?', a: ['buying'], why: '*consider* + -ing.' },
          ] },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'It might be worth comparing prices first.' },
            { a: 'I’d strongly recommend reading the reviews.' },
            { a: 'The main advantage is that it lasts for years.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'Why we buy things we don’t need',
      about: 'Read and discuss an article about impulse buying, and talk about your own spending habits.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Money and shopping are frequent topics in **B2 First Speaking Parts 3 and 4**. Useful vocabulary: *impulse buy, splash out on something, be on a tight budget, get value for money, a bargain, a rip-off, cut back on, live beyond your means, peer pressure*.\n\nTo sound natural, combine this unit’s grammar: *I **should have** thought twice. It was **far more** expensive than I expected. **The more** I see adverts, **the more** I want things.*' },
          { t: 'table', caption: 'Money expressions', explain: ['head', 'col1'], head: ['Expression', 'Meaning'], rows: [
            ['impulse buy', 'something you buy suddenly, without planning'],
            ['splash out on', 'spend a lot of money on something you enjoy'],
            ['value for money', 'good quality for the price'],
            ['a rip-off', 'something far too expensive'],
            ['cut back on', 'spend less on'],
            ['live beyond your means', 'spend more than you earn'],
          ] },
        ],
        [
          { t: 'reading', title: 'Why we buy things we don’t need', md: 'Most of us have done it: we go into a shop for one thing and come out with five. Psychologists say impulse buying is not simply a lack of self-control. Shops are designed to make it happen.\n\nSweets and small gadgets are placed next to the checkout, where we wait with nothing to do. Music is slower than in the street, so we walk more slowly and see more. And prices like 9.99 feel far cheaper than 10, although the difference is only one cent.\n\nOnline, the tricks are even stronger. Messages such as “only two left” or “five people are looking at this” create urgency. One-click payment means there is no moment to stop and think. The easier it is to pay, the more we spend.\n\nSo what can we do? Experts suggest a simple rule: wait 24 hours before any purchase over a certain amount. Many people find that the next day, they no longer want the item at all. As one shopper put it: “I should have tried this years ago. I could have saved a fortune.”' },
          { t: 'ex', kind: 'choice', h: 'In the format of the B2 First exam, Reading and Use of English Part 5: choose the best answer.', items: [
            { q: 'According to psychologists, impulse buying is…', o: ['partly caused by how shops are designed', 'only a lack of self-control', 'more common in small shops'], why: '*not simply a lack of self-control. Shops are designed to make it happen*.' },
            { q: 'Why is the music in shops slower?', o: ['To make customers walk slowly and notice more.', 'To help customers relax at the checkout.', 'To make prices seem lower.'], why: '*we walk more slowly and see more*.' },
            { q: 'What does the 24-hour rule help people to do?', o: ['realise they don’t really want something', 'find cheaper prices online', 'pay more quickly'], why: '*the next day, they no longer want the item at all*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the expressions with their meanings.', pairs: [
            ['impulse buy', 'something bought suddenly'],
            ['a rip-off', 'far too expensive'],
            ['cut back on', 'spend less on'],
            ['value for money', 'good quality for the price'],
            ['splash out on', 'spend a lot on a treat'],
          ] },
          { t: 'ex', kind: 'wordform', h: 'In the format of the B2 First exam, Reading and Use of English Part 3: use the word in capitals to form a word that fits the gap.', items: [
            { q: 'Most people make ___ decisions when they are tired.', base: 'wise', a: ['unwise'], why: 'A negative adjective: *unwise*.' },
            { q: 'Online shops make payment very ___.', base: 'convenience', a: ['convenient'], why: 'An adjective after *very*: *convenient*.' },
            { q: 'Many buyers feel ___ the day after an impulse buy.', base: 'regret', a: ['regretful'], why: 'An adjective after *feel*: *regretful*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 3**, watch for **negative prefixes** (*un-, in-, dis-, im-*): the meaning of the sentence tells you whether you need one. *Most people make ___ decisions when they are tired* needs a negative word.' },
        ],
        [
          { t: 'text', md: 'Now talk about your own habits, as in **Speaking Part 4**: an impulse buy you regret, something you think is good value for money, and whether shops should be allowed to use these tricks.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'I should have waited a day before buying it.' },
            { a: 'The easier it is to pay, the more we spend.' },
            { a: 'In my opinion, it was a complete rip-off.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
      { q: 'I ___ that jacket. I’ve never worn it.', o: ['shouldn’t have bought', 'should have bought', 'couldn’t buy'], why: 'A mistake in the past.' },
      { q: 'You ___ me! I would have helped.', o: ['could have asked', 'should ask', 'could ask'], why: 'Possible but didn’t happen: criticism.' },
      { q: 'This model is ___ more expensive: only two euros more.', o: ['slightly', 'far', 'nowhere near'], why: 'A small difference.' },
      { q: 'The cheap flight was ___ as comfortable as the train.', o: ['nowhere near', 'far', 'slightly'], why: 'A big difference with *as … as*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'We ought ___ have checked the reviews.', a: ['to'], why: '*ought to have*.' },
      { q: 'The more you earn, ___ more you spend.', a: ['the'], why: '*the* in both halves.' },
      { q: 'This shop is just as expensive ___ that one.', a: ['as'], why: '*as … as*.' },
      { q: 'It’s worth ___ for the January sales.', a: ['waiting'], why: '*worth* + -ing.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'I should [of] saved more money.', a: ['have'], why: 'Always *have*, never *of*.' },
      { s: 'It’s [very] cheaper online.', a: ['much', 'far', 'a lot'], why: '*very* doesn’t go with comparatives.' },
      { s: 'I recommend [to compare] prices.', a: ['comparing'], why: '*recommend* + -ing.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the word given.', items: [
      { q: 'It was a mistake not to read the contract.', cue: 'should', a: ['I should have read the contract.', 'We should have read the contract.', 'You should have read the contract.'], why: '*should have* + past participle.' },
      { q: 'The tickets get more expensive as the date gets closer.', cue: 'the', a: ['The closer the date gets, the more expensive the tickets get.', 'The closer the date, the more expensive the tickets.', 'The closer the date gets, the more expensive the tickets are.'], why: '*The* + comparative, *the* + comparative.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Use the word in capitals to form a word that fits the gap.', items: [
      { q: 'That offer was completely ___: the price was the same as before.', base: 'mislead', a: ['misleading'], why: 'An adjective: *misleading*.' },
      { q: 'Good ___ can make people buy almost anything.', base: 'advertise', a: ['advertising'], why: 'A noun: *advertising*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the expressions with their meanings.', pairs: [
      ['impulse buy', 'bought without planning'],
      ['a rip-off', 'far too expensive'],
      ['live beyond your means', 'spend more than you earn'],
      ['value for money', 'good quality for the price'],
    ] },
  ],
};
