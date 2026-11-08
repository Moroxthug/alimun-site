// English C1, unit 14, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Money and the economy: quantifiers and determiners, comparison in detail (nowhere near as, every bit as, the more…
// the more), the language of the economy and personal finance, and the report for C1 Advanced Writing Part 2.
export const UNIT = {
  id: 'u14',
  title: 'Money and the economy',
  goal: 'Say exactly how much and how many with a wide range of quantifiers, compare precisely and with emphasis, talk about the economy and personal finance in natural collocations and idioms, and write a report in the format of C1 Advanced Writing Part 2.',
  art: 'owl',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading', 'writing'], topics: ['quantifiers', 'determiners', 'comparison', 'economy', 'personal-finance', 'money', 'report'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'A great deal of money, a handful of shops',
      about: 'Say how much and how many precisely with quantifiers such as a great deal of, the vast majority, hardly any, the odd and a handful of.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'At B2 you used *much, many, a lot of, a few* and *a little*. At C1 you need quantifiers that are **more exact** (*a handful of, the bulk of*), **more formal** (*a great deal of, numerous*) and **more expressive** (*next to no, the odd*). Choosing well tells your reader not only how much there is, but whether you think it is a lot or too little.\n\nThe first question is always the noun. **Countable** plural nouns (*shops, customers, loans*) take *many, a large number of, numerous, a handful of, (a) few*. **Uncountable** nouns (*money, debt, advice*) take *much, a great deal of, a large amount of, (a) little*. Some quantifiers work with both: *plenty of, a lot of, hardly any, the bulk of, the vast majority of*.\n\nThe second question is your **attitude**. *A few* and *a little* are neutral or positive (*some, enough*); *few* and *little* without *a* are negative (*not enough*): *Few people could afford the new flats* sounds like a complaint.' },
          { t: 'table', caption: 'Quantifiers by noun type', explain: ['head', 'col2'], head: ['Quantifier', 'With', 'What it adds'], rows: [
            ['a great deal of / a large amount of', 'uncountable', 'a lot (formal)'],
            ['a large number of / numerous', 'plural', 'a lot (formal)'],
            ['the vast majority of / the bulk of', 'plural or uncountable', 'almost all'],
            ['a handful of', 'plural', 'a very small number'],
            ['hardly any / scarcely any / next to no', 'both', 'almost none'],
            ['the odd', 'singular countable', 'an occasional one, not many'],
            ['quite a few / a good many', 'plural', 'a fairly large number (*not* a small one)'],
            ['few / little (no *a*)', 'plural / uncountable', 'not enough; negative'],
          ] },
        ],
        [
          { t: 'text', md: '**Agreement** causes many mistakes. After *the majority of, a number of, a handful of*, the verb agrees with the noun that follows: *The majority of **customers are** happy.* But *the majority of **the money is** spent on rent.* **A number of** means *several* and takes a plural verb; **the number of** is the figure itself and takes a singular one: ***A number of** banks **have** closed. **The number of** banks **has** fallen.*\n\nWith **none of** + plural, both verbs are correct: *None of the shops **is / are** open.* The singular is more formal.\n\n**Much** and **many** in positive sentences sound formal or literary: ***Much** has been written about the crisis.* In conversation, use *a lot of*. **The odd** is informal and very useful: *I buy **the odd** lottery ticket* (one now and then).\n\n**Most** + noun means *most in general*; **most of the** + noun means *most of a specific group*: *Most people save. **Most of the** people I know save.*' },
          { t: 'examples', items: [
            { s: 'The project cost **a great deal of** money and produced **next to no** results.', n: 'Formal, uncountable; *next to no* = almost none.' },
            { s: '**The vast majority of** small businesses **are** run by families.', n: 'Almost all; plural verb with a plural noun.' },
            { s: 'Only **a handful of** shops still accept cash.', n: 'A very small number.' },
            { s: 'I don’t spend much, apart from **the odd** meal out.', n: 'An occasional meal.' },
            { s: '**Few** economists predicted the crash.', n: 'Without *a*: not enough of them did.' },
            { s: '**The number of** people working from home **has** doubled.', n: '*The number of*: singular verb.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['A great deal of people came.', 'A great many people came.', '*A great deal of* is for uncountable nouns.'],
            ['There were less customers this year.', 'There were fewer customers this year.', '*Fewer* with plural nouns in careful English.'],
            ['Most of people rent their homes.', 'Most people rent their homes.', 'Use *most of* only before *the, my, these* and so on.'],
            ['The number of loans have risen.', 'The number of loans has risen.', '*The number of* is singular.'],
            ['I have a few money left.', 'I have a little money left.', '*Money* is uncountable: *a little*.'],
          ] },
          { t: 'dialogue', title: 'Talking about the new shopping centre', lines: [
            { who: 'Hannah', s: 'Have you been to the new shopping centre yet? A great many people seem to love it.' },
            { who: 'Felix', s: 'I’ve popped in the odd time. But hardly any of the shops are actually open.' },
            { who: 'Hannah', s: 'Only a handful, true. Most of the units are still empty.' },
            { who: 'Felix', s: 'And it cost a great deal of public money. Few people asked for it.' },
            { who: 'Hannah', s: 'Still, the number of visitors has grown every month.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the correct quantifier.', items: [
            { q: 'The repairs took ___ time and money.', o: ['a great deal of', 'a large number of', 'many'], why: '*Time* and *money* are uncountable.' },
            { q: 'Only ___ customers complained about the new prices.', o: ['a handful of', 'a great deal of', 'little'], why: 'A very small number of countable things.' },
            { q: 'There is ___ chance of a pay rise this year.', o: ['next to no', 'a few', 'many'], why: 'Almost none, with an uncountable noun.' },
            { q: 'I don’t go out much, apart from ___ concert.', o: ['the odd', 'few', 'a handful'], why: '*The odd* + singular noun: an occasional one.' },
            { q: '___ people realise how much they spend on subscriptions.', o: ['Few', 'Little', 'A great deal of'], why: 'Negative attitude with a plural noun: *few*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'The number of empty shops [have] doubled.', a: ['has'], why: '*The number of* takes a singular verb.' },
            { s: 'We had [less] visitors than last year.', a: ['fewer'], why: '*Fewer* with plural nouns.' },
            { s: '[Most of] students work part-time.', a: ['Most', 'Most of the'], why: '*Most* + noun, or *most of the* + noun.' },
            { s: 'A great [deal] of people have lost their jobs.', a: ['many', 'number'], why: '*A great many* or *a great number of* with plural nouns.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 2): the sentences make one short text about a town after its factory closed. Write one word in each gap.', items: [
            { q: 'When the factory closed, a great ___ of money left the town almost overnight.', a: ['deal'], why: '*A great deal of* + uncountable noun.' },
            { q: 'The vast ___ of workers had been there for over twenty years.', a: ['majority'], why: '*The vast majority of*: almost all.' },
            { q: 'Very ___ of them found new jobs locally.', a: ['few'], why: 'Negative attitude: *very few*.' },
            { q: 'For a while there was ___ any work at all in the area.', a: ['hardly', 'scarcely', 'barely'], why: '*Hardly any* = almost none.' },
            { q: '___ of the three banks on the high street survived.', a: ['None'], why: '*None of* the three: not one.' },
            { q: 'Today only a ___ of the original shops remain.', a: ['handful'], why: '*A handful of*: a very small number.' },
            { q: 'Yet the ___ of new businesses has risen every year since 2020.', a: ['number'], why: '*The number of* + singular verb *has*.' },
            { q: 'Many residents now spend ___ more of their money locally than before.', a: ['far', 'much'], why: '*Far* or *much* before a comparative.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 2** quantifier gaps often hide inside fixed phrases: *a great ___ of, the vast ___ of, a ___ of*. Look at the word after the gap: if it is *of* + an uncountable noun, think *deal* or *amount*; if it is *of* + a plural noun, think *number, majority* or *handful*.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'The vast majority of customers are happy.' },
            { a: 'Only a handful of shops still accept cash.' },
            { a: 'It cost a great deal of money and achieved next to nothing.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Nowhere near as cheap as it looks',
      about: 'Compare in detail: nowhere near as, every bit as, considerably, by far, the more… the more…, not so much… as…',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'At B2 you could say *much cheaper* and *not as expensive as*. C1 comparison is about **degree** and **emphasis**: saying exactly how big the difference is, or insisting that there is no difference at all.\n\nTo show a **big difference**, put *far, much, a great deal, considerably* or *significantly* before a comparative: *Rents are **considerably** higher than they were.* With *as… as*, use **nowhere near as** or **not nearly as**: *My salary is **nowhere near as** high as hers.* For the top of a group, use **by far** or **easily** before a superlative: ***by far** the most expensive city*.\n\nTo show a **small difference**, use *slightly, a little, marginally* or *fractionally*: *The new model is **marginally** cheaper.* To insist on **no difference**, use **just as** or **every bit as**: *The second-hand phone is **every bit as** good as the new one.*' },
          { t: 'table', caption: 'Comparison in detail', explain: ['head', 'col1'], head: ['Pattern', 'Meaning', 'Example'], rows: [
            ['far / considerably / significantly + -er', 'a big difference', 'Prices are significantly higher this year.'],
            ['marginally / slightly / fractionally + -er', 'a small difference', 'The bus is marginally cheaper than the train.'],
            ['nowhere near / not nearly as… as', 'much less', 'It’s nowhere near as cheap as it looks.'],
            ['every bit / just as… as', 'exactly the same, with emphasis', 'Saving is every bit as important as earning.'],
            ['by far / easily the + superlative', 'clearly the top', 'Rent is by far the biggest expense.'],
            ['the + -er…, the + -er…', 'one change causes another', 'The more you earn, the more you spend.'],
            ['twice / three times as… as', 'multiplied', 'Coffee costs twice as much as it did.'],
            ['not so much X as Y', 'more Y than X', 'It’s not so much a job as a hobby.'],
          ] },
        ],
        [
          { t: 'text', md: 'The **the more… the more** pattern has its own rules. Both halves start with *the* + comparative, and each half needs its own subject and verb, unless the meaning is obvious: ***The sooner** we start, **the better**.* The comparative stays with its noun: ***The more money** you have, **the more** you worry about it*, not *The more you have money*.\n\n**Not so much X as Y** corrects an idea: the speaker thinks Y is the better description. *The problem is **not so much** the price **as** the quality.* Similar: *It’s **more of** a loan **than** a gift.*\n\nMultiples go **before** *as… as*: *twice as much, three times as many, half as long*. For changes over time, use **ever** or repetition: *Prices keep getting **higher and higher***, *an **ever** more expensive city*.\n\nWhy so many forms? Because careful comparison is the heart of argument. In an essay or report, *considerably higher* is a claim you can defend; *much much higher* is not.' },
          { t: 'examples', items: [
            { s: 'Online banking is **nowhere near as** secure as people assume.', n: 'Much less secure, with emphasis.' },
            { s: 'Second-hand furniture can be **every bit as** stylish as new.', n: 'Exactly as stylish.' },
            { s: '**The longer** you wait to save, **the harder** it becomes.', n: 'One change causes the other.' },
            { s: 'Housing is **by far** the largest item in most budgets.', n: 'Clearly the largest.' },
            { s: 'Petrol costs **almost twice as much as** it did ten years ago.', n: 'A multiple before *as… as*.' },
            { s: 'The issue is **not so much** low wages **as** high rents.', n: 'Corrects the idea: high rents are the real issue.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['It’s very cheaper online.', 'It’s far cheaper online.', '*Very* does not go with comparatives; use *far, much, considerably*.'],
            ['The more you have money, the more you spend.', 'The more money you have, the more you spend.', 'The comparative stays with its noun.'],
            ['It costs as much twice as before.', 'It costs twice as much as before.', 'The multiple goes before *as*.'],
            ['It’s nowhere near cheap as it was.', 'It’s nowhere near as cheap as it was.', 'The pattern needs both *as*’s.'],
            ['by far the more expensive of the five', 'by far the most expensive of the five', 'With more than two, use the superlative.'],
          ] },
          { t: 'reading', title: 'A letter to a money magazine', md: 'Ten years ago I could fill a weekly shopping trolley for about half of what it costs today, and my salary is nowhere near twice as high. The more prices rise, the more carefully I shop, which is not so much a sacrifice as a new hobby.\n\nI have learned that supermarket own brands are often every bit as good as famous names, and considerably cheaper. Markets are by far the best place for vegetables, although they are marginally more expensive than they were. The sooner young people learn to compare prices, the better off they will be.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct sentence.', items: [
            { q: '', o: ['The flat is nowhere near as big as the photos suggest.', 'The flat is nowhere near big as the photos suggest.', 'The flat is nowhere as near big as the photos suggest.'], why: '*Nowhere near as* + adjective + *as*.' },
            { q: '', o: ['The more money you save, the safer you feel.', 'The more you save money, the more safe you feel.', 'More money you save, safer you feel.'], why: '*The* + comparative + noun, then *the* + comparative.' },
            { q: '', o: ['Rents have risen three times as fast as wages.', 'Rents have risen as fast three times as wages.', 'Rents have risen three times faster as wages.'], why: 'Multiple + *as fast as*.' },
            { q: '', o: ['This bank is by far the most reliable.', 'This bank is by far more reliable of all.', 'This bank is very the most reliable.'], why: '*By far* + superlative.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Saving is every bit as important as earning.', why: '*Every bit as* + adjective + *as*.' },
            { a: 'The sooner we start, the better.', why: 'A short *the… the…* without verbs in the second half.' },
            { a: 'It is not so much a loan as a gift.', why: '*Not so much X as Y*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first. Use the word given and do not change it.', items: [
            { q: 'This year’s profits were much lower than last year’s.', cue: 'nowhere', a: ['This year’s profits were nowhere near as high as last year’s.', 'This year’s profits were nowhere near as good as last year’s.'], why: '*Much lower* = *nowhere near as high as*.' },
            { q: 'The second-hand laptop is just as fast as the new one.', cue: 'every', a: ['The second-hand laptop is every bit as fast as the new one.'], why: '*Just as* = *every bit as*, with emphasis.' },
            { q: 'If you earn more, you tend to spend more.', cue: 'the', a: ['The more you earn, the more you tend to spend.'], why: 'One change causes another: *the more… the more…*' },
            { q: 'No other city in the country is nearly as expensive as the capital.', cue: 'by', a: ['The capital is by far the most expensive city in the country.', 'The capital is by far the most expensive place in the country.'], why: '*By far* + superlative.' },
            { q: 'I did not expect the meal to be so cheap.', cue: 'than', a: ['The meal was much cheaper than I expected.', 'The meal was much cheaper than I had expected.', 'The meal was far cheaper than I expected.', 'The meal was cheaper than I had expected.', 'The meal was cheaper than I expected.'], why: '*So cheap* (more than expected) = *cheaper than I (had) expected*.' },
            { q: 'Her shop is more a hobby than a business.', cue: 'so', a: ['Her shop is not so much a business as a hobby.'], why: '*More X than Y* = *not so much Y as X*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 4** at C1 you write **three to six words**, including the word given, which you must not change. Contractions count as two words. Each answer has **two marks**, often one for the grammar pattern (*nowhere near as… as*) and one for the vocabulary around it (*high*), so a half-right answer still earns a mark.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'It’s nowhere near as cheap as it looks.' },
            { a: 'The more you earn, the more you spend.' },
            { a: 'Rent is by far the biggest expense.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Making ends meet',
      about: 'Talk about the economy and personal finance with natural collocations and idioms: a downturn, make ends meet, live beyond your means.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'News about the economy and conversations about personal money use two different sets of words, and C1 speakers move between them easily.\n\nThe **economy** has its own collocations. An economy **grows** or **shrinks**; it goes into **recession** and comes out in a **recovery**. A **downturn** or a **slump** is a period of falling activity; a **boom** is the opposite. Prices **soar** or **rise steadily**; they **level off** or **fall sharply**. **Inflation** eats into **living standards**, and higher **interest rates** make **borrowing** more expensive. People talk about the **cost of living** and the **squeeze on household budgets**.\n\n**Personal finance** is full of idioms. If you **make ends meet**, you have just enough money for what you need. If you **live beyond your means**, you spend more than you earn. When money is short you **tighten your belt** or **cut back on** things, and you may be **hard up** or **strapped for cash**. Money kept for emergencies is put aside **for a rainy day**; a **windfall** is money you did not expect.' },
          { t: 'table', caption: 'Money collocations and idioms', explain: ['head', 'col1'], head: ['Expression', 'Meaning'], rows: [
            ['make ends meet', 'have just enough money to live on'],
            ['live beyond your means', 'spend more than you earn'],
            ['tighten your belt / cut back on', 'spend less than before'],
            ['be in the red / in the black', 'owe money / have money in your account'],
            ['break even', 'make neither a profit nor a loss'],
            ['splash out on', 'spend a lot on something you enjoy'],
            ['a windfall', 'money you did not expect'],
            ['put money aside for a rainy day', 'save for difficult times'],
          ] },
        ],
        [
          { t: 'text', md: 'Register matters here. *Hard up, broke* and *strapped for cash* are informal; *on a low income* and *in financial difficulty* are neutral or formal. *Splash out* and *cost an arm and a leg* belong in conversation, not in a report, where you would write *spend considerably* or *be prohibitively expensive*.\n\nWatch the verbs, too. You **take out** a loan or a mortgage, **pay it off** or **pay it back**, **run up** debts and **get into** debt. You **earn** a salary, **make** a profit, **cover** your costs, and **owe** money to someone.' },
          { t: 'examples', items: [
            { s: 'During the **downturn** many families struggled to **make ends meet**.', n: 'Economy word plus personal idiom.' },
            { s: 'They had been **living beyond their means** for years and **ran up** huge debts.', n: 'Spending more than they earned.' },
            { s: 'We’re **tightening our belts** until the car is **paid off**.', n: 'Spending less; finishing paying a loan.' },
            { s: 'The café finally **broke even** in its third year.', n: 'No profit, no loss.' },
            { s: 'She used her **windfall** to **pay off** her student loan.', n: 'Unexpected money; finish paying.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['It’s hard to make the ends meet.', 'It’s hard to make ends meet.', 'No *the* in this idiom.'],
            ['He lives over his means.', 'He lives beyond his means.', 'The idiom uses *beyond*.'],
            ['I want to win more money in my next job.', 'I want to earn more money in my next job.', 'You *earn* a salary; you *win* a prize.'],
            ['We did a profit last year.', 'We made a profit last year.', 'The collocation is *make a profit*.'],
            ['Prices are rising up quickly.', 'Prices are rising quickly.', '*Rise* already means *go up*.'],
          ] },
          { t: 'ex', kind: 'match', h: 'Match the expressions with their meanings.', pairs: [
            ['strapped for cash', 'short of money'],
            ['splash out', 'spend a lot on a treat'],
            ['in the red', 'owing money to the bank'],
            ['a rainy day', 'a future time of difficulty'],
            ['a slump', 'a sharp fall in economic activity'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
            { q: 'After paying the rent, we can barely make ends ___.', a: ['meet'], why: '*Make ends meet*.' },
            { q: 'They took ___ a mortgage to buy the flat.', a: ['out'], why: '*Take out* a loan or a mortgage.' },
            { q: 'The business finally broke ___ after two years.', a: ['even'], why: '*Break even*: no profit, no loss.' },
            { q: 'If you live ___ your means, debt is the result.', a: ['beyond'], why: '*Live beyond your means*.' },
          ] },
        ],
        [
          { t: 'text', md: 'Now read four people talking about money. In the matching task the questions **paraphrase** the texts, so look for the same idea in different words.' },
          { t: 'reading', title: 'Money and me: four stories', md: '**A Rafael, session musician.** Work comes in waves. One month I play on three albums; the next, the phone does not ring at all, so I have learned to treat every good month as if it were the last. My father, who ran a shop for forty years, told me to put a third of every payment into a separate account. I ignored him for years, and there were winters when I could barely make ends meet. Now I follow his advice to the letter.\n\n**B Clara, retired teacher.** I am comfortably off now, but only because of decisions I made late. For most of my working life I assumed my pension would take care of everything, and I saved next to nothing. In my fifties I realised how little it would pay, and I spent ten years tightening my belt to catch up. If I could talk to my thirty-year-old self, I would tell her to start putting a little aside every month, however small.\n\n**C Arjun, student.** Living on a student loan teaches you very quickly what things cost. In my first term I bought lunch out every day and took taxis home, and by Christmas I was in the red. Now I cook in bulk on Sundays and I have given up the odd coffee on the way to lectures, which sounds trivial but adds up. Last summer my grandmother left me a small sum, and instead of splashing out I put all of it into savings. That surprised everyone, including me.\n\n**D Nadia, bakery owner.** When energy and flour prices soared, I had a choice: put up prices or cut the quality. I raised them slightly and explained why on a sign by the till, and hardly any customers complained. For two years we barely broke even. This year, for the first time, we are in the black, and I no longer lie awake wondering how to pay the staff.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 8): which person says each thing? A person may be chosen more than once.', items: [
            { q: 'My income is impossible to predict from one month to the next.', o: ['A Rafael', 'B Clara', 'C Arjun', 'D Nadia'], why: '*Work comes in waves… the phone does not ring at all.*' },
            { q: 'I took a parent’s advice only after a long delay.', o: ['A Rafael', 'B Clara', 'C Arjun', 'D Nadia'], why: '*I ignored him for years… Now I follow his advice.*' },
            { q: 'I wish I had started saving much earlier in life.', o: ['B Clara', 'A Rafael', 'C Arjun', 'D Nadia'], why: '*I would tell her to start putting a little aside.*' },
            { q: 'I once spent more than I could afford.', o: ['C Arjun', 'B Clara', 'D Nadia', 'A Rafael'], why: '*By Christmas I was in the red.*' },
            { q: 'Other people did not expect me to be so sensible with unexpected money.', o: ['C Arjun', 'A Rafael', 'B Clara', 'D Nadia'], why: '*Instead of splashing out I put all of it into savings. That surprised everyone.*' },
            { q: 'I was open about the reasons for a change.', o: ['D Nadia', 'A Rafael', 'B Clara', 'C Arjun'], why: '*Explained why on a sign by the till.*' },
            { q: 'A worry that used to keep me awake has gone.', o: ['D Nadia', 'B Clara', 'C Arjun', 'A Rafael'], why: '*I no longer lie awake wondering how to pay the staff.*' },
            { q: 'I spent a long period cutting back in order to make up for lost time.', o: ['B Clara', 'C Arjun', 'D Nadia', 'A Rafael'], why: '*I spent ten years tightening my belt to catch up.*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 8** you have one long text in sections, or several short texts, and about ten statements. Read the statements first and underline the **idea**, not the words: *make up for lost time* matches *catch up*. Then scan each section. Two sections often say something similar, so check the detail before you decide.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'Many families are struggling to make ends meet.' },
            { a: 'We’re tightening our belts until the loan is paid off.' },
            { a: 'This year, for the first time, we are in the black.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'Writing a report',
      about: 'Write a report in the format of C1 Advanced Writing Part 2: present findings, evaluate and recommend, in 220 to 260 words.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'A **report** is one of the task types in **C1 Advanced Writing Part 2**, where you choose one task and write **220 to 260 words**. It is written for a specific reader, such as a manager, a college principal, a club committee or a council, who needs **information** to make a decision.\n\nA report looks at a situation that **exists now or has happened**: it describes what is going on, **evaluates** it (what works, what does not) and ends with **recommendations**. A **proposal**, its close cousin, looks forward: it suggests a new plan and persuades the reader to accept it. If the task asks you to describe and assess something that already exists, it is a report.\n\nThe register is **formal and impersonal**: no contractions, few personal opinions until the recommendations, and language that presents facts objectively, such as *it was found that, the majority of respondents, it would appear that*. **Headings** make a report easy to scan; use one for each part of the task. Keep each section in full sentences: the examiner wants to see connected writing, not notes.' },
          { t: 'table', caption: 'A plan for a C1 report', explain: ['head', 'col0', 'col1'], head: ['Section', 'What to write', 'Useful language'], rows: [
            ['Title and introduction', 'Say what the report is for and what it is based on', 'The aim of this report is to… It is based on…'],
            ['Findings (one or two headings)', 'Describe the situation with precise quantities', 'By far the greatest concern is… The vast majority of respondents…'],
            ['Evaluation', 'Say what works and what does not', 'While the scheme is popular, it is not nearly as well known as it should be.'],
            ['Recommendations', 'Clear, practical suggestions linked to the findings', 'In view of these findings, it is recommended that…'],
          ] },
        ],
        [
          { t: 'reading', title: 'Task and model report', md: 'Task: The student council at your college wants to find out how students manage their money. You have been asked to write a report describing the main financial pressures on students, evaluating the support the college offers and recommending improvements.\n\n**Report on student finances**\n\n**Introduction**\nThe aim of this report is to outline the main financial pressures on students at the college, to assess the support currently available and to recommend improvements. It is based on a short online survey of eighty students and on conversations with staff in the student office.\n\n**Main financial pressures**\nBy far the greatest pressure is the cost of accommodation. The vast majority of respondents said that rent takes more than half of their income, and a significant number have taken on extra part-time work, often at the expense of their studies. Transport was the second most common concern, particularly among students who live outside the city.\n\n**Current support**\nThe college offers a hardship fund and a free budgeting workshop each term. However, the survey suggests that this support is nowhere near as well known as it should be: fewer than a quarter of respondents had heard of the fund, and only a handful had attended a workshop.\n\n**Recommendations**\nIn view of these findings, it is recommended that the college promote the hardship fund far more actively, for example during the first week of term and on the student app. It would also be worth negotiating a discounted travel pass with the local bus company. Finally, the workshops could be offered online, in which case considerably more students would be likely to take part.' },
          { t: 'ex', kind: 'choice', h: 'Read the model report. Choose the best answer.', items: [
            { q: 'What does the introduction tell the reader?', o: ['The purpose of the report and what it is based on.', 'The writer’s personal money problems.', 'The final recommendations.'], why: '*The aim of this report is to… It is based on…*' },
            { q: 'Why are the headings useful?', o: ['They match the parts of the task, so the reader can find each one.', 'They make the report longer.', 'They replace full sentences.'], why: 'Each heading answers one part of the task.' },
            { q: 'How does the writer evaluate the current support?', o: ['It exists but is nowhere near as well known as it should be.', 'It is perfect.', 'It does not exist.'], why: 'A balanced evaluation: the support is there, but few students know about it.' },
            { q: 'How are the recommendations linked to the findings?', o: ['Each one answers a problem described earlier: rent, transport, awareness.', 'They are new topics.', 'They repeat the introduction.'], why: '*In view of these findings* makes the link explicit.' },
          ] },
        ],
        [
          { t: 'text', md: 'Look at how the grammar of this unit does the work. **Quantifiers** report findings precisely without inventing exact figures for everything: *the vast majority, a significant number, only a handful*. **Comparison** evaluates: *by far the greatest pressure, nowhere near as well known, considerably more students*. Advanced **relative clauses** keep the style compact: *students who live outside the city, in which case…*.\n\nRecommendations have their own grammar. After *it is recommended that, I suggest that* and *it is essential that*, formal English uses the **base form** of the verb for every person: *it is recommended that the college **promote** the fund* (not *promotes*). *Should* is also correct: *that the college **should** promote*. Softer options are *it would be worth* + *-ing* and *the college could consider* + *-ing*.' },
          { t: 'table', caption: 'Common mistakes in C1 reports', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I think rent is really expensive and it’s awful.', 'By far the greatest pressure is the cost of rent.', 'Impersonal and precise, without contractions.'],
            ['It is recommended that the college promotes the fund.', 'It is recommended that the college promote the fund.', 'Base form (or *should*) after *recommend that*.'],
            ['Dear council, I am writing to tell you…', 'The aim of this report is to…', 'A report is not a letter.'],
            ['Lots of students said yes.', 'The majority of respondents agreed.', 'Formal quantifiers and vocabulary.'],
            ['(recommendations not linked to findings)', 'In view of these findings, it is recommended that…', 'Each recommendation should answer a problem in the report.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Which section of the report does each sentence belong to?', groups: ['Introduction', 'Findings', 'Recommendations'], explain: ['groups'], items: [
            { s: 'This report is based on interviews with twenty local shop owners.', g: 0, why: 'What the report is based on.' },
            { s: 'The aim of this report is to assess the new parking scheme.', g: 0, why: 'The purpose of the report.' },
            { s: 'Only a handful of residents use the service regularly.', g: 1, why: 'A finding with a precise quantifier.' },
            { s: 'Rents are considerably higher than in neighbouring towns.', g: 1, why: 'A finding using comparison.' },
            { s: 'It would be worth extending the opening hours.', g: 2, why: 'A soft recommendation: *it would be worth* + *-ing*.' },
            { s: 'It is essential that the council act quickly.', g: 2, why: 'A firm recommendation with the base form *act*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the best option for a formal report.', items: [
            { q: 'It is recommended that the library ___ open on Sundays.', o: ['remain', 'remains', 'will remain'], why: 'Base form after *it is recommended that*.' },
            { q: '___ of respondents said they would use the service.', o: ['The majority', 'Loads', 'A great deal'], why: 'Formal, and *majority* goes with a plural group.' },
            { q: 'The scheme is ___ as popular as expected.', o: ['nowhere near', 'not at all near', 'very less'], why: '*Nowhere near as… as*: much less.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Writing Part 2): read the task below. Choose the best answer to each question about it.', items: [
            { q: 'Task: “The manager of the sports centre where you work wants to know why fewer young people are joining. Write a report describing the situation, explaining the main reasons and recommending what the centre could do.” Is this a report or a proposal?', o: ['A report: it describes and explains a situation that exists now, then recommends.', 'A proposal: it only asks for a new plan.', 'An essay: it asks for your opinion on a general question.'], why: 'Describing and assessing the present situation makes it a report.' },
            { q: 'Which set of headings fits the task best?', o: ['Introduction, The current situation, Reasons, Recommendations', 'Dear manager, My opinion, Goodbye', 'Firstly, Secondly, Thirdly, In conclusion'], why: 'One heading for each part of the task.' },
            { q: 'Which sentence is best for the findings?', o: ['Membership among under-25s has fallen considerably, while older groups have remained stable.', 'Young people don’t come any more, which is a shame.', 'I think young people are lazy.'], why: 'Precise, impersonal and comparative.' },
            { q: 'Which recommendation is best?', o: ['In view of these findings, it is recommended that the centre introduce a cheaper student membership.', 'You must make it cheaper!!', 'Maybe do something.'], why: 'Formal, linked to the findings, with the base form *introduce*.' },
          ] },
          { t: 'text', md: '**Your writing task.** Your town council is concerned that several shops and cafés on the high street have closed in the last two years. As a member of a residents’ group, you have been asked to write a report for the council. *Describe the current situation on the high street, explain the main reasons for the closures, and recommend what the council could do to bring people back.*\n\nWrite your report in **220 to 260 words** and send it to your teacher, who will correct it and mark it on the four areas: Content, Communicative achievement, Organisation and Language. Give it a title and a heading for each part of the task. Report what you found with precise quantifiers, evaluate with at least two comparisons from lesson 2, and make your recommendations formal: *it is recommended that the council* + base form.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these report sentences after the tutor.', tutor: 'lena', items: [
            { a: 'The aim of this report is to assess the support available.' },
            { a: 'By far the greatest pressure is the cost of accommodation.' },
            { a: 'It is recommended that the college promote the fund more actively.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the correct quantifier.', items: [
      { q: 'The renovation took ___ time.', o: ['a great deal of', 'a large number of', 'many'], why: '*Time* is uncountable here.' },
      { q: 'Only ___ shops still open on Sundays.', o: ['a handful of', 'a great deal of', 'little'], why: 'A very small number of countable things.' },
      { q: 'The number of complaints ___ fallen.', o: ['has', 'have', 'are'], why: '*The number of*: singular.' },
      { q: 'I rarely go out, apart from ___ trip to the cinema.', o: ['the odd', 'few', 'a few'], why: '*The odd* + singular noun.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Complete the second sentence so that it has a similar meaning. Use the word given.', items: [
      { q: 'The new phone is much less reliable than the old one.', cue: 'nowhere', a: ['The new phone is nowhere near as reliable as the old one.'], why: '*Nowhere near as… as*.' },
      { q: 'If you start early, it will be better.', cue: 'sooner', a: ['The sooner you start, the better.', 'The sooner you start, the better it will be.'], why: '*The sooner…, the better.*' },
      { q: 'Second-hand clothes are just as good as new ones.', cue: 'every', a: ['Second-hand clothes are every bit as good as new ones.'], why: '*Every bit as… as*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'It is hard to make ends ___ on a student loan.', a: ['meet'], why: '*Make ends meet*.' },
      { q: 'They have been living ___ their means for years.', a: ['beyond'], why: '*Live beyond your means*.' },
      { q: 'The café broke ___ in its second year.', a: ['even'], why: '*Break even*.' },
      { q: 'A great ___ of money was wasted.', a: ['deal'], why: '*A great deal of*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'We had [less] customers this winter.', a: ['fewer'], why: '*Fewer* with plural nouns.' },
      { s: 'It is [very] cheaper online.', a: ['far', 'much', 'considerably'], why: 'Not *very* with a comparative.' },
      { s: 'I want to [win] more money in my next job.', a: ['earn'], why: 'You *earn* a salary.' },
      { s: 'It is recommended that the council [lowers] the rents.', a: ['lower', 'should lower'], why: 'Base form after *recommend that*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the expressions with their meanings.', pairs: [
      ['tighten your belt', 'spend less than before'],
      ['a windfall', 'money you did not expect'],
      ['in the black', 'with money in your account'],
      ['a downturn', 'a period of falling economic activity'],
    ] },
    { t: 'ex', kind: 'choice', h: 'Choose the best sentence for a C1 report.', items: [
      { q: '', o: ['The vast majority of respondents said that rent was their greatest concern.', 'Loads of people said rent is awful.', 'I think rent is the worst thing ever.'], why: 'Formal, impersonal and precise.' },
      { q: '', o: ['In view of these findings, it is recommended that the centre extend its opening hours.', 'You should totally open longer.', 'In conclusion, I will tell you my opinion.'], why: 'A formal recommendation linked to the findings.' },
    ] },
  ],
};
