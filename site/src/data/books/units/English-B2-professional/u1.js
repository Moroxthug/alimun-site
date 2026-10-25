// English B2 for work, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Negotiating',
  goal: 'Negotiate conditions, prices and deadlines.',
  art: 'mug',
  tags: { skills: ['speaking', 'writing', 'vocabulary', 'reading'], topics: ['negotiating', 'conditions', 'provided-that', 'concessions', 'diplomatic-language'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Provided that, as long as',
      about: 'State your position, set conditions and offer a compromise.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'In a negotiation, each side starts with a **position**: what it wants. Agreement usually comes through **conditions**: *We can do this, provided that you do that.* These phrases all mean *only if*, but they differ in tone.' },
          { t: 'table', caption: 'Setting conditions', explain: ['head', 'col1'], quiz: true, head: ['Phrase', 'Use'], rows: [
            ['as long as / so long as', 'Neutral and very common in speech.'],
            ['provided (that) / providing (that)', 'A little more formal; common in emails and contracts.'],
            ['on condition that', 'Formal and firm: the condition is essential.'],
            ['unless', 'Means *except if*: *We can’t lower the price unless you order more.*'],
            ['if … could', 'A soft, open offer: *If you ordered more, we could lower the price.*'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'We can deliver by the tenth, **provided that** you **confirm** the order this week.', n: 'Present simple after *provided that*, even though the meaning is future.' },
            { s: 'I’m happy with those terms **as long as** the price **stays** fixed for a year.', n: 'Neutral and friendly. The condition is in the present simple.' },
            { s: 'We will sign **on condition that** the penalty clause **is removed**.', n: 'Firm and formal: without this, there is no agreement.' },
            { s: '**If** you **extended** the deadline, we **could** add a second training day.', n: 'Second conditional: the offer sounds tentative and open to discussion.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Do not use *will* after these phrases: *provided that you confirm*, not *provided that you will confirm*. The *will* goes in the other half of the sentence: *We will deliver as long as you pay.*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct word or form.', items: [
            { q: 'We can offer free installation ___ you sign a two-year contract.', o: ['provided that', 'unless', 'in case'], why: 'The installation is free only if they sign: *provided that* sets a condition.' },
            { q: 'We won’t be able to start ___ we receive the deposit.', o: ['unless', 'as long as', 'provided'], why: '*Unless* means *except if*: no start except if the deposit arrives.' },
            { q: 'I’m happy to agree, as long as the price ___ the same next year.', o: ['stays', 'will stay', 'would stay'], why: 'After *as long as*, use the present simple for a future condition.' },
            { q: 'We’d accept a longer contract ___ condition that the monthly fee is reduced.', o: ['on', 'in', 'under'], why: 'The fixed phrase is *on condition that*.' },
            { q: 'If you ___ five hundred units, we could offer you a better price.', o: ['ordered', 'will order', 'would order'], why: 'A tentative offer uses the second conditional: *if* + past simple, *could* + base form.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences. Use the verb in brackets or one missing word.', items: [
            { q: 'We’ll give you priority support as long as you ___ (renew) the contract for two years.', a: ['renew'], why: 'Present simple after *as long as*, although the meaning is future.' },
            { q: 'Provided that the samples ___ (arrive) on time, we’ll place a larger order.', a: ['arrive'], why: 'Present simple after *provided that*; *will* goes in the main clause.' },
            { q: 'If you ___ (extend) the deadline by a week, we could include the extra training.', a: ['extended'], why: 'A tentative offer: *if* + past simple, then *could*.' },
            { q: 'We can’t lower the price ___ you increase the order. (= except if)', a: ['unless'], why: '*Unless* means *except if*.' },
            { q: 'We would agree on ___ that the price is fixed for twelve months.', a: ['condition'], why: '*On condition that* is a formal, firm condition.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Is there any flexibility on the price?', why: 'A neutral way to open a discussion about price: *flexibility on* something.' },
            { a: 'What would you be prepared to offer in return?', why: '*Be prepared to* + base form asks about the other side’s concession.' },
            { a: 'We could accept that provided you pay in advance.', why: 'Offer first, then the condition introduced by *provided*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'I take your point, but…',
      about: 'Disagree diplomatically and trade concessions.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'At B2 you can disagree without damaging the relationship. Three tools help: **acknowledge** the other person’s view first (*I take your point*), **soften** your answer (*might*, *a little*, *not entirely*), and **trade** rather than give: every **concession** you make should bring something back (*in return*, *in exchange*).' },
          { t: 'table', caption: 'Diplomatic disagreement', explain: ['head'], head: ['Too direct', 'Diplomatic'], rows: [
            ['That’s not true.', 'I’m not sure that’s entirely accurate.'],
            ['We can’t do that.', 'That would be quite difficult for us at this stage.'],
            ['Your offer is too low.', 'Your offer is slightly below what we had in mind.'],
            ['No, that won’t work.', 'I take your point, but I’m not convinced that would work for us.'],
            ['We want a discount.', 'Is there any room for manoeuvre on the price?'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Renewing a cleaning contract', lines: [
            { who: 'Aisha', s: 'We’d like to renew, but frankly the new rate is slightly higher than we expected.' },
            { who: 'Callum', s: 'I understand. Our costs have gone up this year, as I’m sure yours have.' },
            { who: 'Aisha', s: 'I take your point, but we’ve been with you for six years. Is there any room for manoeuvre?' },
            { who: 'Callum', s: 'We could keep last year’s rate, provided you sign for three years rather than one.' },
            { who: 'Aisha', s: 'Three years is a long commitment. Would you consider two, with the rate fixed?' },
            { who: 'Callum', s: 'I could live with two years, as long as payment is monthly in advance.' },
            { who: 'Aisha', s: 'That seems fair. In return, could you add the window cleaning once a quarter?' },
            { who: 'Callum', s: 'Let me check with my manager, but I don’t see why not.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Aisha says directly that the new rate is unacceptable.', a: 'f', why: 'She says it is *slightly higher than we expected*: a soft way to disagree.' },
            { q: 'Callum’s first offer depends on a longer contract.', a: 't', why: 'Last year’s rate, *provided you sign for three years*.' },
            { q: 'They agree on a contract of three years.', a: 'f', why: 'Aisha suggests two years and Callum accepts with a condition.' },
            { q: 'Aisha asks for something extra in return for paying in advance.', a: 't', why: '*In return, could you add the window cleaning…?*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words that make each sentence softer.', items: [
            { s: 'Your offer is [slightly] below what we had in mind.', why: '*Slightly* makes the difference sound small.' },
            { s: 'I’m not sure that’s [entirely] accurate.', why: '*Not entirely* is softer than *not* alone.' },
            { s: 'That [might] be difficult for us at this stage.', why: '*Might* makes a refusal sound less final.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the most diplomatic answer.', items: [
            { q: 'The supplier says their price is the best on the market. You doubt it.', o: ['I take your point, but we’ve seen lower prices elsewhere.', 'That’s simply not true.', 'You always say that.'], why: 'Acknowledge first, then disagree with a reason.' },
            { q: 'You want a discount without asking for it directly.', o: ['Is there any room for manoeuvre on the price?', 'Give us ten per cent off.', 'Your price is far too high.'], why: '*Room for manoeuvre* means *flexibility*: an indirect request.' },
            { q: 'You agree to a later delivery and want something back.', o: ['We can accept that. In return, could you cover the shipping?', 'Fine, whatever you want.', 'OK, but that’s really annoying.'], why: '*In return* turns a concession into a trade.' },
            { q: 'You cannot go any lower, but you want to stay friendly.', o: ['I’m afraid this really is the best we can do.', 'Take it or leave it.', 'No more discounts. End of discussion.'], why: '*I’m afraid* introduces a firm answer politely.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the expressions and their meanings.', pairs: [
            ['a concession', 'something you give up to reach agreement'],
            ['a counter-offer', 'a new offer in reply to the other side’s offer'],
            ['a sticking point', 'an issue that stops the two sides agreeing'],
            ['room for manoeuvre', 'flexibility to change your position'],
            ['a deal-breaker', 'a condition that would end the negotiation'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'An email negotiation',
      about: 'Read a short email exchange between a client and a supplier.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'reading', title: 'Re: Website project, timeline and fees', md: '**From: Lucía Fernández, Brightwater Hotels**\n\nDear Omar,\n\nThank you for your proposal. We like the design ideas very much. However, the timeline is a sticking point for us: we need the new booking site to be live before the summer season, which means by the end of April, not mid-June. I appreciate that this would put pressure on your team. Would there be any way of bringing the launch forward?\n\nBest regards,\nLucía\n\n**From: Omar Haddad, Northlight Digital**\n\nDear Lucía,\n\nThanks for your quick reply. I take your point about the season. We could deliver by 30 April, provided that we receive all the photos and texts from you by 10 February. To make this possible, we would need to bring in an extra developer, so the fee would rise by around eight per cent.\n\nKind regards,\nOmar\n\n**From: Lucía Fernández**\n\nDear Omar,\n\nWe can certainly commit to sending everything by 10 February. The extra fee, however, is slightly more than our budget allows. As a compromise, would you accept a smaller increase if we dropped the online shop from the first phase? We could add it in the autumn, when things are quieter.\n\nBest regards,\nLucía\n\n**From: Omar Haddad**\n\nDear Lucía,\n\nThat sounds like a sensible solution. Without the shop, we could keep the increase to four per cent, as long as the autumn phase is confirmed in writing now. I will send you a revised proposal tomorrow.\n\nKind regards,\nOmar' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Lucía is unhappy with the design ideas.', a: 'f', why: '“We like the design ideas very much.”' },
            { q: 'Omar agrees to the earlier date on one condition about the photos and texts.', a: 't', why: '“…provided that we receive all the photos and texts from you by 10 February.”' },
            { q: 'Omar’s company has worked for the hotels before.', a: 'ng', why: 'The emails do not say whether they have worked together before.' },
            { q: 'Lucía accepts the eight per cent increase.', a: 'f', why: 'She says it is more than the budget allows and suggests a compromise.' },
            { q: 'In the end, the online shop will be built later in the year.', a: 't', why: 'Lucía suggests adding it in the autumn, and Omar agrees.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language in the emails.', items: [
            { q: '“The timeline is a sticking point for us.” What does Lucía mean?', o: ['The timeline is the main problem that stops them agreeing.', 'The timeline is fixed and cannot change.', 'The timeline is the part they like best.'], why: 'A *sticking point* is an issue that blocks agreement.' },
            { q: 'Why does Lucía write “Would there be any way of bringing the launch forward?”', o: ['To make her request sound polite and open.', 'To show that she is angry.', 'To cancel the project.'], why: 'An indirect question with *would* is a soft request.' },
            { q: 'What is Lucía’s concession in her second email?', o: ['Removing the online shop from the first phase.', 'Paying the full eight per cent.', 'Moving the launch to June.'], why: 'She gives up the shop in phase one in return for a smaller increase.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the two phrases that introduce a condition.', items: [
            { s: 'We could deliver by 30 April, [provided that] we receive everything, and keep the increase low, [as long as] the autumn phase is confirmed.', why: '*Provided that* and *as long as* both mean *only if*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'We’ll cover the shipping costs as long as you ___ the invoice within thirty days.', o: ['pay', 'will pay', 'would pay'], why: 'Present simple after *as long as*.' },
      { q: 'We can’t confirm the booking ___ you send a deposit.', o: ['unless', 'provided', 'as long as'], why: '*Unless* means *except if*.' },
      { q: 'If you ___ the contract to three years, we could freeze the price.', o: ['extended', 'will extend', 'extend to'], why: 'Tentative offer: *if* + past simple, then *could*.' },
      { q: 'You want flexibility on the price. You ask: “Is there any ___ for manoeuvre?”', o: ['room', 'space', 'place'], why: 'The fixed expression is *room for manoeuvre*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'We will sign on ___ that the penalty clause is removed.', a: ['condition'], why: '*On condition that*: a firm, formal condition.' },
      { q: 'Provided that the figures ___ (be) correct, we can approve the budget.', a: ['are'], why: 'Present simple after *provided that*.' },
      { q: 'We can accept a later date. In ___, could you lower the fee?', a: ['return', 'exchange'], why: '*In return* or *in exchange* asks for something back.' },
      { q: 'I take your ___, but I’m not convinced it would work.', a: ['point'], why: '*I take your point* acknowledges the other view before disagreeing.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the beginnings and the endings.', pairs: [
      ['Your offer is slightly below', 'what we had in mind.'],
      ['I’m not sure that’s', 'entirely accurate.'],
      ['What would you be prepared', 'to offer in return?'],
      ['I’m afraid this really is', 'the best we can do.'],
    ] },
  ],
};
