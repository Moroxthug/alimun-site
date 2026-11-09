// English C2, unit 13, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Economics and global affairs: describing trends and figures precisely, the language of policy and diplomacy and
// reporting positions neutrally, cause and effect in formal writing (the report), and an analysis of globalisation and
// its critics. Exam tasks in the format of C2 Proficiency: Listening Part 2, Reading and Use of English Parts 1 and 6,
// Writing Part 2 (a report). Every figure in the texts belongs to an imaginary country, town or company.
export const UNIT = {
  id: 'u13',
  title: 'Economics and global affairs',
  goal: 'Describe trends and figures with precision, report political and diplomatic positions neutrally, explain causes and consequences in formal writing, and read a demanding analysis of world affairs in the format of C2 Proficiency.',
  art: 'owl',
  tags: { skills: ['vocabulary', 'grammar', 'listening', 'reading', 'writing', 'speaking'], topics: ['economy', 'trends', 'figures', 'diplomacy', 'policy', 'reporting', 'cause-and-effect', 'report', 'globalisation', 'gapped-text'], goals: ['academic', 'professional'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Soaring, plummeting and levelling off',
      about: 'Describe trends and figures precisely: plummet, plateau, outstrip, a marginal rise, in real terms, per capita, a tenfold increase.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'At C1 you could say that prices *rose sharply* or *fell slightly*. At C2 the aim is **precision with economy**: one verb or one noun phrase that tells the reader the direction, the speed and the size of a change, and sometimes the writer’s view of it.\n\nVerbs carry most of the meaning. Prices **soar** or **surge** (fast and far), **climb** or **edge up** (steadily, or by a little), **plummet** or **slump** (fast and far down), **dip** (a small, often temporary fall), **level off** or **plateau** (stop changing after a rise or fall), **bottom out** (stop falling at the lowest point) and **fluctuate** (move up and down). One country’s exports can **outstrip** or **overtake** another’s, while a region **lags behind**.\n\nNoun phrases let you pack a trend into the subject of a sentence: *a **marginal** rise, a **steep** decline, a **sustained** recovery, a **tenfold** increase*. This is the style of reports and serious journalism: ***A sharp fall in** demand forced the company to close two plants* is tighter than *Demand fell sharply, so the company closed two plants*.' },
          { t: 'table', caption: 'Verbs and nouns of change', explain: ['head', 'col1'], head: ['Expression', 'What it tells the reader', 'Example'], rows: [
            ['soar / surge / rocket', 'a fast, large rise', 'Rents soared after the bridge opened.'],
            ['climb / edge up / creep up', 'a steady or small rise', 'Unemployment has crept up for six months.'],
            ['plummet / slump / collapse', 'a fast, large fall', 'Orders plummeted when the tariff came in.'],
            ['dip / ease / slip', 'a small, often temporary fall', 'Inflation eased slightly in the spring.'],
            ['level off / plateau / stabilise', 'stop rising or falling', 'Growth has plateaued at around two per cent.'],
            ['bottom out / peak', 'reach the lowest / the highest point', 'Sales peaked in May and bottomed out in July.'],
            ['outstrip / overtake / lag behind', 'compare two trends', 'Exports have outstripped imports for the first time.'],
            ['a marginal / modest / steep / sustained + rise', 'the size or length of a change, as a noun phrase', 'a sustained rise in living costs'],
          ] },
        ],
        [
          { t: 'text', md: 'Figures need their own small grammar. **Rise by** gives the size of the change; **rise to** gives the new level; **stand at** gives the level at a moment; **peak at** gives the highest point: *Unemployment **rose by** two points **to** nine per cent, and now **stands at** eight.* The nouns take **of**: *a rise **of** two points*, *a fall **of** a third*.\n\nMultiples are written **twofold, threefold, tenfold**, or *doubled, tripled, halved*: *a **tenfold** increase*, *the price has **halved***. Approximate figures sound natural with **roughly, just over, just under, in the region of, the best part of** (*the best part of a decade*).\n\nTwo phrases separate careful writers from careless ones. **In real terms** means after taking inflation into account: if wages rise by five per cent while prices rise by six, wages have **fallen in real terms**. **Per capita** (or **per head**) divides a total by the population: a large economy can have a modest income **per capita**. Using these correctly shows that you understand what the figures mean, not only what they say.\n\nFinally, decide how much of your own view to show. *Profits **edged up*** is neutral; *profits **crept up*** can hint at disappointment; *profits **barely moved*** is openly critical.' },
          { t: 'examples', items: [
            { s: 'Visitor numbers **saw a tenfold increase** over fifteen years.', n: 'A multiple as an adjective: *tenfold*, not *ten times*.' },
            { s: 'Wages **rose by** four per cent **to** an average of 31,000 crowns.', n: '*By* gives the change, *to* gives the new level (an imaginary currency).' },
            { s: 'Once inflation is taken into account, wages actually **fell in real terms**.', n: 'Prices rose faster than wages.' },
            { s: 'The country is large, but income **per capita** remains low.', n: 'The total divided by the population.' },
            { s: 'Online sales have **outstripped** sales in shops for the first time.', n: 'One trend has grown larger than another.' },
            { s: 'After two years of decline, the housing market appears to have **bottomed out**.', n: 'It has stopped falling at its lowest point.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Prices increased of five per cent.', 'Prices increased by five per cent.', 'The verb takes *by*; the noun takes *of*: *an increase of five per cent*.'],
            ['Sales rose until 12,000.', 'Sales rose to 12,000.', '*To* gives the new level.'],
            ['a ten times increase', 'a tenfold increase', 'Multiples before a noun use *-fold*.'],
            ['The government raised by two per cent.', 'Spending rose by two per cent. / The government raised spending.', '*Rise* has no object; *raise* needs one.'],
            ['Unemployment is plateauing up.', 'Unemployment is levelling off.', '*Plateau* already means it has stopped changing.'],
            ['Wages grew in real terms, because they rose by three per cent.', 'Wages rose by three per cent, but fell in real terms, as prices rose by four.', '*In real terms* means after inflation.'],
          ] },
          { t: 'dialogue', title: 'Reading a sales chart at Northvale', lines: [
            { who: 'Helen', s: 'So the headline is that sales are up. But look at the shape of the line.' },
            { who: 'Daniel', s: 'They surged in the first quarter, then plateaued for the rest of the year.' },
            { who: 'Helen', s: 'Exactly. And our costs have crept up every month, so the profit margin is thin at best.' },
            { who: 'Daniel', s: 'Fair point. And in real terms, the rise in sales is close to nothing.' },
            { who: 'Helen', s: 'Meanwhile the online shop has outstripped the stores for the first time.' },
            { who: 'Daniel', s: 'Which nobody predicted. It saw almost a threefold increase in two years.' },
            { who: 'Helen', s: 'Then that is the story for the board, not the headline figure.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the expression that fits the meaning best.', items: [
            { q: 'After the new airport opened, house prices ___, almost doubling in a single year.', o: ['soared', 'edged up', 'levelled off'], why: 'Almost doubling in a year is a fast, large rise.' },
            { q: 'Inflation ___ slightly in the spring before rising again in the autumn.', o: ['dipped', 'plummeted', 'peaked'], why: 'A small, temporary fall: *dip*.' },
            { q: 'Growth has ___ at around one per cent and shows no sign of changing.', o: ['plateaued', 'surged', 'bottomed out'], why: 'It has stopped changing after a rise.' },
            { q: 'Demand for the service has ___ supply, so waiting lists are growing.', o: ['outstripped', 'lagged behind', 'dipped below'], why: 'Demand is now larger than supply.' },
            { q: 'Although wages rose, prices rose faster, so living standards fell ___.', o: ['in real terms', 'per capita', 'in nominal terms'], why: 'After taking inflation into account.' },
            { q: 'The economy is large, but income ___ is among the lowest in the region.', o: ['per capita', 'in real terms', 'by and large'], why: 'The total divided by the number of people.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
            { q: 'Unemployment rose ___ two points to nine per cent.', a: ['by'], why: '*By* gives the size of the change.' },
            { q: 'It now stands ___ eight per cent.', a: ['at'], why: '*Stand at* gives the level at a moment.' },
            { q: 'There has been a fall ___ a third in the number of new businesses.', a: ['of'], why: 'The noun *fall* takes *of* before the amount.' },
            { q: 'The town’s population has been shrinking for the best ___ of a decade.', a: ['part'], why: '*The best part of*: almost all of.' },
            { q: 'Exports peaked ___ just over four million tonnes.', a: ['at'], why: '*Peak at* + the highest figure.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'The price of rice increased [of] twelve per cent.', a: ['by'], why: 'The verb *increase* takes *by* before the amount.' },
            { s: 'Investment saw a [ten times] increase.', a: ['tenfold'], why: 'Before a noun, use *-fold*.' },
            { s: 'The council has [risen] parking charges again.', a: ['raised'], why: '*Raise* takes an object; *rise* does not.' },
            { s: 'Sales climbed steadily [until] 40,000 units.', a: ['to'], why: '*To* gives the new level.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Does each sentence describe a rise, a fall or no change?', groups: ['a rise', 'a fall', 'no change'], explain: ['groups'], items: [
            { s: 'Prices have crept up all year.', g: 0, why: '*Creep up*: a slow rise.' },
            { s: 'Orders rocketed after the advert.', g: 0, why: '*Rocket*: a fast, large rise.' },
            { s: 'Share prices slumped overnight.', g: 1, why: '*Slump*: a fast, large fall.' },
            { s: 'Inflation eased in March.', g: 1, why: '*Ease*: a small fall.' },
            { s: 'Membership has stabilised at 3,000.', g: 2, why: '*Stabilise*: stop changing.' },
            { s: 'Output has plateaued since the summer.', g: 2, why: '*Plateau*: stop changing after a rise.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **Listening Part 2** of C2 Proficiency you hear one speaker for about three minutes, a talk, a lecture or a radio feature, and complete **nine sentences** with a word or short phrase. You hear it twice. The sentences on the page **paraphrase** what you hear, but the word you write is the word the speaker **actually says**, spelled correctly.\n\nTrends and figures are a favourite topic, because they test whether you have followed the meaning, not only the sound: a speaker may mention *doubled* and then correct it to *tenfold*, or give a figure in cash terms and then *in real terms*. Write the one that answers the sentence. Here the talk is about **Arvenna**, an imaginary island economy that economics teachers like to use because its story contains almost every trend you meet in the news.' },
          { t: 'reading', title: 'Listening Part 2: the story of Arvenna', md: 'Good evening. Tonight I want to look at Arvenna, an imaginary island economy, because its story contains almost every trend you are likely to meet in the news.\n\nFor most of the last century Arvenna lived on fishing. Then, over about fifteen years, tourism grew so fast that visitor numbers did not merely double, as people often say; they saw a tenfold increase. By the end of that period tourism had outstripped fishing as the island’s main source of income.\n\nWages rose as well, though less impressively than the headlines suggested. In cash terms, the average wage almost doubled. But prices were climbing too, and once you adjust for inflation, the rise in real terms was a modest one, roughly a fifth.\n\nThe figure islanders mention most, however, is not the wage but the cost of housing. House prices did not simply rise; they soared, as holiday lets took over the old harbour streets. Young families began to leave for the mainland, and the population, stable for decades, went into a slow decline.\n\nThen came the shock. A run of poor summers and a new air route to a rival island meant that visitor numbers plummeted in a single season. They have since recovered slightly, but they have plateaued at around two thirds of their peak.\n\nWhat interests economists is what happened to income per capita. Because the population had fallen, income per head held up far better than total income: there were simply fewer people sharing it.\n\nThe lesson many draw from Arvenna is the danger of relying on a single industry. The island’s planners now speak of diversification, and the fastest-growing sector is, perhaps surprisingly, fishing again, this time for shellfish sold abroad at high prices. Those exports have risen steadily for five years. The gain each year has been marginal, but it has been consistent, which is exactly what the island lacked before.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'In the format of the C2 Proficiency exam (Listening Part 2): complete the sentences with a word or short phrase from the talk.', items: [
            { q: 'Over about fifteen years, visitor numbers saw a ___ increase.', a: ['tenfold', 'ten-fold'], why: 'The speaker corrects *double* to *a tenfold increase*.' },
            { q: 'By the end of that period, tourism had ___ fishing as the main source of income.', a: ['outstripped'], why: '*Tourism had outstripped fishing*.' },
            { q: 'Once inflation is taken into account, wages rose by roughly a ___.', a: ['fifth'], why: '*The rise in real terms was a modest one, roughly a fifth*; the near doubling is in cash terms.' },
            { q: 'As holiday lets took over the harbour streets, house prices ___.', a: ['soared'], why: '*They did not simply rise; they soared.*' },
            { q: 'Young families began to move to the ___.', a: ['mainland', 'the mainland'], why: '*Young families began to leave for the mainland.*' },
            { q: 'Visitor numbers ___ in a single season.', a: ['plummeted'], why: '*Visitor numbers plummeted in a single season.*' },
            { q: 'They have now plateaued at about ___ of their highest level.', a: ['two thirds', 'two-thirds'], why: '*Plateaued at around two thirds of their peak.*' },
            { q: 'Because the population fell, income ___ held up better than total income.', a: ['per capita', 'per head'], why: 'The speaker uses both: *income per capita*, *income per head*.' },
            { q: 'The yearly rise in shellfish exports has been ___ but consistent.', a: ['marginal'], why: '*The gain each year has been marginal, but it has been consistent.*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Listening Part 2**, read all nine sentences before the recording starts and predict the **kind** of word each gap needs: a noun, an adjective, a number, a verb in the past. Speakers often say a wrong answer first and correct it (*not merely double… a tenfold increase*). Write what the sentence needs, and check that it fits the grammar of the sentence on the page.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'Visitor numbers saw a tenfold increase over fifteen years.' },
            { a: 'Wages rose in cash terms but fell in real terms.' },
            { a: 'Growth has plateaued at around two per cent.' },
            { a: 'Online sales have outstripped sales in shops for the first time.' },
          ] },
          { t: 'text', md: 'Now describe a trend you know well, in your own country, your town or your work, in about a minute: house prices, the cost of a coffee, the number of people working from home. Use at least three precise verbs from this lesson, one figure with *by* or *to*, and one of *in real terms* or *per capita*. Say whether you think the trend will continue.' },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Brokering a deal',
      about: 'The language of policy and diplomacy: impose and lift sanctions, broker a deal, ratify a treaty, a trade-off; and how to report positions neutrally.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'News about world affairs runs on a small set of **collocations**, and using the wrong verb with the right noun is the quickest way to sound less than proficient.\n\nGovernments **impose** sanctions, **tighten** or **ease** them, and finally **lift** them. A third party **brokers** a deal; the two sides **strike** or **reach** it, and later **seal** it. Talks can **stall**, **break down** or **resume**, and a deal can **fall through**. A treaty is first **signed** by governments and then **ratified** by parliaments, which makes it binding; countries **comply with** it, **breach** it or **withdraw from** it. Each side **makes concessions**; one may **back down** under pressure. A situation in which neither side can win is a **stalemate**; the moment it ends is a **breakthrough**.\n\nA **trade-off** is a balance between two good things that you cannot have in full at the same time: *the trade-off between growth and stability*. It is not a synonym for a deal, and it is not negative in itself. Similarly, **bilateral** means between two countries and **multilateral** between several.' },
          { t: 'table', caption: 'Policy and diplomacy collocations', explain: ['head', 'col2'], head: ['Noun', 'Verbs and adjectives that go with it', 'Meaning'], rows: [
            ['sanctions', 'impose, tighten, ease, lift; targeted, sweeping', 'penalties on another country'],
            ['a deal', 'broker, strike, reach, seal; a deal falls through', 'an agreement reached by negotiation'],
            ['talks', 'hold, resume; talks stall, break down', 'formal discussions between sides'],
            ['a treaty', 'sign, ratify, comply with, breach, withdraw from', 'a formal written agreement between states'],
            ['concessions', 'make, extract, win', 'what one side gives up to reach agreement'],
            ['a trade-off', 'a trade-off between X and Y; involve a trade-off', 'a balance between two goals you cannot fully have together'],
            ['a stalemate / a breakthrough', 'end in, break; achieve, make', 'no progress / sudden progress'],
          ] },
        ],
        [
          { t: 'text', md: 'Reporting positions **neutrally** is a professional skill: in a briefing, a report or an exam answer you describe what each side says without taking sides yourself. Three tools do most of the work.\n\nFirst, **reporting verbs**, chosen carefully. *Say, state* and *announce* are neutral. *Maintain* and *insist* mean someone keeps saying something despite opposition. *Acknowledge* and *concede* mean they admit something against their own interest. *Reiterate* means repeat; *signal* means hint at a future position. **Claim** often suggests doubt, so a neutral writer uses it with care.\n\nSecond, **attribution and distance**: *according to, officials say, the government is understood to, sources close to the talks, reportedly*. Every opinion is attached to someone.\n\nThird, **neutral vocabulary**. *Regime* suggests an illegitimate government; *caved in* and *climbed down* suggest weakness; *bullying* suggests the writer’s judgement. The neutral choices are *government, agreed, changed its position, applied pressure*. Balance matters too: give each side’s position in a similar form and length.' },
          { t: 'table', caption: 'Loaded and neutral', explain: ['head'], head: ['Loaded', 'Neutral'], rows: [
            ['The regime caved in to pressure.', 'The government changed its position.'],
            ['Ostrand bullied its neighbour into a deal.', 'Ostrand applied considerable pressure during the talks.'],
            ['The minister admitted the deal was good.', 'The minister said the deal was balanced.'],
            ['Velmora claims the tariffs are temporary.', 'Velmora says the tariffs are temporary.'],
            ['The talks were a humiliating failure.', 'The talks ended without agreement.'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'The talks, **brokered** by a group of neutral states, resumed in March.', n: 'A third party arranged them.' },
            { s: 'Velmora has **signalled** that it may **ease** sanctions if the talks succeed.', n: '*Signal*: hint at a future step; *ease*: make less strict.' },
            { s: 'The opposition **maintains** that the treaty should never have been **ratified**.', n: '*Maintain*: keep saying, despite disagreement.' },
            { s: 'Officials **acknowledge** that the agreement involves a **trade-off** between jobs and prices.', n: '*Acknowledge*: admit something difficult.' },
            { s: 'Ostrand is **understood to** have rejected the first proposal.', n: 'Distance: the writer does not claim to know for certain.' },
            { s: 'Talks **stalled** over fishing rights before a **breakthrough** in the final week.', n: 'No progress, then sudden progress.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['The country made sanctions on its neighbour.', 'The country imposed sanctions on its neighbour.', 'Sanctions are *imposed*.'],
            ['They took off the sanctions.', 'They lifted the sanctions.', 'The fixed verb is *lift*.'],
            ['Parliament signed the treaty.', 'Parliament ratified the treaty.', 'Governments sign; parliaments ratify.'],
            ['The two leaders discussed about trade.', 'The two leaders discussed trade.', '*Discuss* takes a direct object.'],
            ['The deal is a trade-off for both sides.', 'The deal involves a trade-off between access and protection.', 'A trade-off is a balance between two goals.'],
            ['The minister claimed, which is true, that…', 'The minister said that… / stated that…', '*Claim* suggests doubt; do not mix it with approval.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'A radio briefing on the Velmora–Ostrand talks', lines: [
            { who: 'Presenter', s: 'Priya, the talks between Velmora and Ostrand seem to have stalled again. What is the sticking point?' },
            { who: 'Priya', s: 'Mainly grain. Ostrand wants tariffs on imported grain to stay in place for five years; Velmora insists they should be phased out within two.' },
            { who: 'Presenter', s: 'And the sanctions Velmora imposed three years ago?' },
            { who: 'Priya', s: 'Velmora has signalled that it would lift them in stages, but only once a treaty has been ratified, not merely signed.' },
            { who: 'Presenter', s: 'Some commentators say Ostrand is simply stalling for time.' },
            { who: 'Priya', s: 'That is one view. Ostrand’s officials maintain that they need time to protect farmers, and they acknowledge that this involves a trade-off with lower prices for consumers.' },
            { who: 'Presenter', s: 'Is a breakthrough likely?' },
            { who: 'Priya', s: 'Diplomats close to the talks say both sides are more willing to make concessions than their public statements suggest. Whether that is enough to break the stalemate remains to be seen.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Read the briefing. Choose the best answer.', items: [
            { q: 'How does Priya report the view that Ostrand is stalling for time?', o: ['She calls it one view and then gives Ostrand’s own explanation.', 'She agrees with it strongly.', 'She says it is false.'], why: '*That is one view. Ostrand’s officials maintain…*: attribution and balance.' },
            { q: 'Why does she say *ratified, not merely signed*?', o: ['Velmora wants the treaty to be binding before it acts.', 'Velmora has already ratified it.', 'The two words mean the same.'], why: 'Ratification by parliament makes a treaty binding.' },
            { q: 'What does *acknowledge* tell us about Ostrand’s officials?', o: ['They admit a cost of their own position.', 'They deny that there is any cost.', 'They are repeating an old position.'], why: '*Acknowledge*: admit something against your own interest.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'colloc', h: 'Which words go with the key word? Choose all that fit.', items: [
            { key: 'sanctions', o: ['impose', 'lift', 'ease', 'ratify', 'broker'], a: [0, 1, 2], why: 'Sanctions are imposed, eased and lifted; treaties are ratified and deals are brokered.' },
            { key: 'a treaty', o: ['ratify', 'breach', 'withdraw from', 'impose', 'stall'], a: [0, 1, 2], why: 'A treaty is ratified, breached or withdrawn from.' },
            { key: 'talks', o: ['resume', 'break down', 'stall', 'lift', 'ratify'], a: [0, 1, 2], why: 'Talks resume, break down or stall.' },
            { key: 'concessions', o: ['make', 'win', 'extract', 'impose', 'resume'], a: [0, 1, 2], why: 'You make concessions, or win or extract them from the other side.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Which sentence reports the position most neutrally?', items: [
            { q: '', o: ['The government says the new tariffs are a temporary measure.', 'The regime claims the new tariffs are only temporary.', 'The government admits, finally, that the tariffs are temporary.'], why: '*Government* and *says* are neutral; *regime*, *claims* and *admits, finally* carry the writer’s judgement.' },
            { q: '', o: ['After two weeks, the talks ended without agreement.', 'After two weeks, the talks collapsed in humiliating failure.', 'After two weeks, Ostrand wrecked the talks.'], why: 'A neutral account describes the outcome without blame or emotion.' },
            { q: '', o: ['Velmora changed its position after strong criticism from its allies.', 'Velmora caved in to its allies.', 'Velmora meekly climbed down.'], why: '*Caved in* and *meekly climbed down* suggest weakness.' },
            { q: '', o: ['Critics argue that the deal favours exporters, while its supporters say consumers will benefit.', 'The deal obviously favours exporters, although some naive supporters disagree.', 'Everyone knows the deal favours exporters.'], why: 'Both sides are attributed and given in a similar form.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **Reading and Use of English Part 1** of C2 Proficiency you read a short text with **eight gaps** and choose from **four options** for each. At this level the options are usually close in meaning, and the answer depends on **collocation** (*lift* sanctions, not *raise* them), **fixed phrases**, a **dependent preposition**, or a fine distinction of meaning. Read the whole text first, then test each option in its sentence: three will break a collocation or a pattern, even if their meaning is close.' },
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 1): the sentences make one short text about two imaginary countries. Choose the word that best fits each gap.', items: [
            { q: 'After months of talks that had repeatedly ___, Velmora and Ostrand finally reached an agreement last week.', o: ['stalled', 'braked', 'idled', 'parked'], why: 'Talks *stall*: stop making progress.' },
            { q: 'The deal was ___ by a group of neutral states that had offered to host the negotiations.', o: ['brokered', 'dealt', 'traded', 'bargained'], why: 'A third party *brokers* a deal.' },
            { q: 'Under its terms, Velmora will ___ the sanctions it imposed three years ago.', o: ['lift', 'rise', 'elevate', 'heighten'], why: 'The collocation is *lift sanctions*.' },
            { q: 'Neither side got everything it wanted; the agreement is, as one diplomat put it, a classic ___.', o: ['trade-off', 'take-off', 'pay-off', 'write-off'], why: 'A balance between goals that cannot all be met: a *trade-off*.' },
            { q: 'The treaty must now be ___ by both parliaments before it comes into force.', o: ['ratified', 'certified', 'verified', 'testified'], why: 'Parliaments *ratify* treaties.' },
            { q: 'Officials in Velmora were quick to ___ any suggestion that they had backed down under pressure.', o: ['dismiss', 'discard', 'dispose', 'disclaim'], why: '*Dismiss a suggestion*: reject it as not worth considering.' },
            { q: 'Opposition parties in Ostrand, meanwhile, have ___ doubts about whether the grain clause can be enforced.', o: ['raised', 'risen', 'lifted', 'elevated'], why: 'You *raise doubts*; *rise* has no object.' },
            { q: 'Whatever its flaws, the agreement marks a significant ___ from the hostility of recent years.', o: ['departure', 'exit', 'leave', 'withdrawal'], why: '*A departure from*: a change from what was usual before.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 1**, the wrong options are often words you would use in a similar sentence, with a different noun. *Raise* goes with *doubts*, *prices* and *taxes*; *lift* goes with *sanctions*, *a ban* and *restrictions*. When you learn a word for this paper, learn the **nouns it goes with**.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'The deal was brokered by a group of neutral states.' },
            { a: 'Velmora has signalled that it may lift the sanctions in stages.' },
            { a: 'The treaty must now be ratified by both parliaments.' },
            { a: 'Officials acknowledge that the agreement involves a trade-off.' },
          ] },
          { t: 'text', md: 'Now brief a colleague, in about a minute, on a disagreement you know about: between two countries, two companies or two departments. Report **both** positions neutrally, with at least two reporting verbs (*maintain, acknowledge, insist, signal*), one phrase of attribution (*according to, officials say*), and two collocations from this lesson. Do not give your own view until the very end, and mark it clearly: *My own view, for what it is worth, is that…*' },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'In the wake of the closure',
      about: 'Explain causes and consequences in formal writing (give rise to, stem from, in the wake of, with the result that) and write a report in the format of C2 Proficiency Writing Part 2.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Formal writing about the economy is largely writing about **causes and consequences**: why something happened and what followed. At C2 you need a range of expressions, and you need to know the **grammar** each one takes, because they are not interchangeable.\n\nSome expressions go from **cause to effect**, with the cause as the subject: the closure **gave rise to** protests, **brought about** a change of policy, **led to** job losses, **resulted in** a fall in demand, **triggered** or **sparked** a crisis, **fuelled** resentment, **contributed to** the decline. All of these are followed by a **noun phrase**.\n\nOthers go from **effect to cause**, with the effect as the subject: the protests **stemmed from** the closure, **arose from** it, **resulted from** it, **can be traced back to** it, **are attributable to** it. Note the pair: A **results in** B, B **results from** A.\n\nPrepositional phrases put the cause in front of the main clause: ***In the wake of** the closure, ***as a result of** the closure, ***owing to** the closure*. *In the wake of* means *after and because of*, often of something bad. *Due to* is safest after the verb *be*: *The delay **was due to** a strike*.' },
          { t: 'table', caption: 'Cause and effect: what follows each expression', explain: ['head', 'col1'], head: ['Expression', 'Grammar', 'Example'], rows: [
            ['give rise to / bring about / lead to / result in', 'cause + verb + noun phrase (the effect)', 'The closure gave rise to a wave of protests.'],
            ['stem from / arise from / result from / be attributable to', 'effect + verb + noun phrase (the cause)', 'The protests stemmed from the closure.'],
            ['in the wake of / as a result of / owing to', 'preposition + noun phrase, then the main clause', 'In the wake of the closure, rents fell.'],
            ['due to', 'best after *be*', 'The fall in rents was due to the closure.'],
            ['with the result that / so that', 'conjunction + a full clause', 'The factory closed, with the result that rents fell.'],
            ['consequently / as a consequence', 'sentence adverb + a full clause', 'Consequently, many families left.'],
            ['thereby', 'thereby + -ing', 'The council cut fares, thereby encouraging people back.'],
            ['hence', 'hence + noun phrase', 'Demand fell; hence the closures.'],
          ] },
        ],
        [
          { t: 'text', md: 'Precision also means **not claiming more than you know**. In economics, most effects have several causes, and a careful writer shows how strong the link is. Compare *The closure **caused** the decline* (certain, single cause) with *The closure **contributed to** the decline* (one cause among several), *The decline **appears to stem from** the closure* (probable) and *The decline is **partly attributable to** the closure* (a share of the cause).\n\nChains of cause are common: one change leads to another, which leads to a third. **Which in turn** keeps the chain clear: *The factory closed, which in turn reduced demand in local shops, which in turn led to further closures.* **The knock-on effect** and **a ripple effect** are useful nouns for this.\n\nFinally, vary the structure. A report that says *led to* in every sentence is monotonous; a mix of verbs, prepositional phrases and linkers keeps the reader’s attention and shows your range.' },
          { t: 'examples', items: [
            { s: 'The new bypass **gave rise to** a sharp fall in passing trade.', n: 'Cause first; *give rise to* + noun.' },
            { s: 'Much of the town’s current difficulty **stems from** its reliance on a single employer.', n: 'Effect first; *stem from* + cause.' },
            { s: '**In the wake of** the closure, the number of empty shops doubled.', n: 'After, and because of, a bad event.' },
            { s: 'The port lost its main contract, **with the result that** two hundred jobs went.', n: 'Followed by a full clause.' },
            { s: 'The council lowered business rates, **thereby** attracting several new firms.', n: '*Thereby* + -ing: the way the result came about.' },
            { s: 'The rise in vacancies is **partly attributable to** the move to online shopping.', n: 'Hedged: one cause among others.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['The closure resulted from job losses.', 'The closure resulted in job losses.', '*Result in* + effect; *result from* + cause.'],
            ['The delay was owing to the factory closed.', 'The delay was due to the closure of the factory.', 'These prepositions take a noun phrase, not a clause.'],
            ['The problem stems of a lack of investment.', 'The problem stems from a lack of investment.', 'Always *stem from*.'],
            ['It gave rise of resentment.', 'It gave rise to resentment.', 'Always *give rise to*.'],
            ['The council cut fares, thereby it encouraged travel.', 'The council cut fares, thereby encouraging travel.', '*Thereby* + -ing.'],
            ['In the wake of the factory closed, rents fell.', 'In the wake of the factory’s closure, rents fell.', '*In the wake of* + noun phrase.'],
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the expression that fits the grammar of the sentence.', items: [
            { q: 'The town’s difficulties largely ___ its reliance on one employer.', o: ['stem from', 'give rise to', 'bring about'], why: 'The effect is the subject, so we need *stem from* + the cause.' },
            { q: 'The factory closed, ___ hundreds of families lost their main income.', o: ['with the result that', 'in the wake of', 'owing to'], why: 'A full clause follows, so we need a conjunction.' },
            { q: '___ the closure, several shops on the high street shut.', o: ['In the wake of', 'With the result that', 'Thereby'], why: 'A noun phrase follows, so we need a preposition.' },
            { q: 'Lower rates attracted new firms, ___ creating around a hundred jobs.', o: ['thereby', 'hence', 'consequently'], why: '*Thereby* + -ing.' },
            { q: 'The new regulations ___ a significant change in how banks lend.', o: ['brought about', 'stemmed from', 'were due to'], why: 'The cause is the subject: *bring about* + the effect.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite each sentence using the word given. Keep the meaning.', items: [
            { q: 'The protests were caused by the decision to close the port.', cue: 'stemmed', a: ['The protests stemmed from the decision to close the port.'], why: 'Effect first: *stem from* + cause.' },
            { q: 'The new tax led to a fall in car sales.', cue: 'rise', a: ['The new tax gave rise to a fall in car sales.'], why: '*Give rise to* + effect.' },
            { q: 'After the bank collapsed, and because of this, confidence fell sharply.', cue: 'wake', a: ['In the wake of the bank’s collapse, confidence fell sharply.', 'In the wake of the collapse of the bank, confidence fell sharply.'], why: '*In the wake of* + noun phrase.' },
            { q: 'Demand fell, so many shops closed.', cue: 'result', a: ['Demand fell, with the result that many shops closed.'], why: '*With the result that* + clause.' },
            { q: 'Part of the decline was caused by online shopping.', cue: 'attributable', a: ['The decline was partly attributable to online shopping.', 'Part of the decline was attributable to online shopping.', 'The decline is partly attributable to online shopping.'], why: '*Be partly attributable to*: a share of the cause.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **Writing Part 2** of C2 Proficiency you choose one of several tasks, which may include an **article**, a **letter**, a **report** or a **review**, and write **280 to 320 words**. A **report** is written for a specific reader, such as a manager, a council or a board, who needs a clear account of a situation in order to make a decision. It is organised under **headings**, written in a formal, impersonal register, and ends with **recommendations** that follow from what you have found.\n\nAt C2 the examiner expects more than correct organisation. The report should be **precise** (figures, trends and causes stated carefully), **balanced** (several factors weighed, not one blamed), and **persuasive** in its recommendations, which should each answer a problem described earlier. Cause-and-effect language is the backbone of the middle sections.' },
          { t: 'reading', title: 'Task and model report', md: 'Task: Two years ago the largest employer in your town, a factory making car parts, closed. You are a member of a working group set up by the town council. Write a report for the council describing the main consequences of the closure, explaining which of them are most serious, and recommending how the council should respond.\n\n**The closure of the Harlow Road factory: consequences and recommendations**\n\n**Introduction**\nThis report sets out the main consequences of the closure of the Harlow Road factory two years ago, assesses which are most serious, and recommends a response. It draws on figures from the council’s own records and on meetings with local employers, residents and the jobcentre.\n\n**Consequences of the closure**\nThe most immediate effect was the loss of around six hundred jobs, the majority held by people over forty with skills specific to the plant. Many have since found work, but often part-time or at considerably lower pay, so household incomes in the area have fallen in real terms. This, in turn, has given rise to a sharp fall in spending in local shops: the number of empty units on the high street has roughly doubled. Younger residents have been leaving in larger numbers, which appears to stem less from the closure itself than from a lack of training opportunities.\n\n**The most serious problems**\nOf these consequences, the fall in local spending is the most visible, but it is not, in the group’s view, the most serious. The loss of younger residents threatens the town’s long-term future, and the shortage of retraining has left many former employees in insecure work.\n\n**Recommendations**\nIn the light of these findings, it is recommended that the council, first, work with the regional college to offer funded retraining in fields where local employers report shortages. Second, the council should consider reduced business rates for new firms on the former factory site, thereby creating jobs close to where people live. Finally, a small grant scheme for empty shop units would help to reverse the decline of the high street, provided that it is targeted at businesses likely to last.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the model report. Choose the best answer.', items: [
            { q: 'How does the writer make the consequences section precise without inventing exact statistics for everything?', o: ['With careful approximations and trends: around six hundred, roughly doubled, fallen in real terms.', 'By giving exact percentages for every point.', 'By avoiding any figures at all.'], why: 'Approximate figures and precise trend language show care without false exactness.' },
            { q: 'Why does the writer say the departure of young people *appears to stem less from the closure itself than from a lack of training*?', o: ['To show that a consequence has more than one cause, and which one matters more.', 'To blame young people.', 'To change the subject.'], why: 'C2 precision: hedged, comparative attribution of cause.' },
            { q: 'What does the section *The most serious problems* add?', o: ['An evaluation that ranks the consequences, as the task asks.', 'A repetition of the introduction.', 'The writer’s personal story.'], why: 'The task asks which consequences are most serious; this section answers it.' },
            { q: 'How are the recommendations linked to the findings?', o: ['Each answers a problem described earlier: retraining, jobs near home, empty shops.', 'They introduce new problems.', 'They are not linked.'], why: '*In the light of these findings* introduces recommendations that match the consequences.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which section of a report does each sentence belong to?', groups: ['Introduction', 'Findings', 'Recommendations'], explain: ['groups'], items: [
            { s: 'This report assesses the effects of the new bypass on local businesses.', g: 0, why: 'States the purpose.' },
            { s: 'It is based on interviews with thirty shop owners.', g: 0, why: 'States what the report draws on.' },
            { s: 'Passing trade fell sharply in the wake of the opening.', g: 1, why: 'A consequence, with cause-and-effect language.' },
            { s: 'The fall in footfall is partly attributable to new parking charges.', g: 1, why: 'A hedged attribution of cause.' },
            { s: 'It is recommended that the council suspend parking charges for a year.', g: 2, why: 'A formal recommendation with the base form *suspend*.' },
            { s: 'Signs on the bypass could direct drivers to the town centre, thereby restoring some trade.', g: 2, why: 'A practical suggestion with its expected result.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Writing Part 2, a report): read the task below and choose the best answer to each question about it.', items: [
            { q: 'Task: “The board of the company you work for is considering moving its customer service centre abroad. Write a report for the board describing the likely consequences for the company and its staff, and recommending whether the move should go ahead.” Which plan fits the task best?', o: ['Introduction; likely consequences for the company; likely consequences for staff; recommendation.', 'Dear board; my feelings; goodbye.', 'A story about a colleague who was moved abroad.'], why: 'One heading for each part of the task, ending with the recommendation.' },
            { q: 'Which sentence is best for the consequences section?', o: ['The move would reduce costs in the short term, but it could give rise to a fall in customer satisfaction, as has happened at comparable firms.', 'The move is a terrible idea and everyone hates it.', 'Moving abroad caused all our problems.'], why: 'Balanced, hedged and precise cause-and-effect language.' },
            { q: 'Which recommendation is best?', o: ['In view of these risks, it is recommended that the board postpone the decision until a six-month trial has been evaluated.', 'Do not do it!', 'Maybe think about it again some time.'], why: 'Formal, linked to the findings, with a clear and practical action.' },
          ] },
          { t: 'text', md: '**Your writing task.** A medium-sized town has seen its port lose its main shipping contract, and with it many jobs. You are a consultant asked by the regional development board to write a report. *Describe the main economic and social consequences for the town, explain which you consider most urgent, and recommend how the board should use a limited budget to help.*\n\nWrite your report in **280 to 320 words** and send it to your teacher, who will correct it and mark it on the four areas: Content, Communicative achievement, Organisation and Language. Use headings, at least five different cause-and-effect expressions from this lesson (including one that hedges, such as *partly attributable to*), at least two precise trend expressions from lesson 1, and recommendations that each answer a problem you have described. Any figures you use should be clearly approximate, as in the model.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these report sentences after the tutor.', tutor: 'lena', items: [
            { a: 'The closure gave rise to a sharp fall in local spending.' },
            { a: 'Much of the decline stems from a lack of training.' },
            { a: 'In the wake of the closure, many younger residents left.' },
            { a: 'It is recommended that the council offer funded retraining.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'Globalisation and its critics',
      about: 'Read an analysis of globalisation and the arguments against it, put removed paragraphs back as in C2 Proficiency Reading and Use of English Part 6, and discuss the issues.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Few debates in world affairs are as old, or as heated, as the debate about **globalisation**: the growing movement of goods, money, people and ideas across borders. Its defenders and critics often use the same facts to reach opposite conclusions, which makes it an excellent topic for **critical reading**.\n\nThe article in this lesson is an **analysis**, not an opinion piece: the writer sets out the main arguments on each side, weighs them, and reaches a cautious conclusion of their own. As you read, notice the language of balance: *it is worth saying at the outset, even economists who defend… acknowledge, none of these points is without force, but none settles the matter either*.\n\nUseful words from the text: a **supply chain** (the sequence of firms that make and move a product), **resilience** (the ability to recover from shocks), **protectionism** (protecting home industries with tariffs and other barriers), **sovereignty** (a state’s authority over its own affairs), **diffuse** (spread thinly over many people), **concentrated** (falling heavily on a few), and **left behind** (used of regions that have not shared in growth).' },
          { t: 'ex', kind: 'match', h: 'Match the words from the article with their meanings.', pairs: [
            ['a supply chain', 'the firms that make and move a product, from raw materials to the shop'],
            ['resilience', 'the ability to recover quickly from a shock'],
            ['protectionism', 'shielding home industries from foreign competition'],
            ['sovereignty', 'a state’s authority to govern itself'],
            ['diffuse', 'spread thinly over a large number of people'],
            ['a renegotiation', 'an attempt to agree new terms for an existing arrangement'],
          ] },
        ],
        [
          { t: 'text', md: 'In **Reading and Use of English Part 6** of C2 Proficiency, **seven paragraphs** have been removed from a long text, and you choose the right one for each gap from **eight**; one paragraph does not fit anywhere.\n\nThe task tests how a text **holds together**, so read the main text first, for its line of argument. Then, for each gap, read the end of the paragraph before it and the start of the paragraph after it, and look for **links in both directions**: reference words (*this, such, these points, that*), repeated or related ideas (*scepticism* in one paragraph, *this scepticism* in the next), linkers of contrast (*yet, however*), and the logic of the argument (a claim, then a reply, then an evaluation). The extra paragraph usually fits the topic but **contradicts** the writer’s line, or links in one direction only.' },
          { t: 'reading', title: 'The long argument about globalisation', md: 'Few words have travelled as far, or gathered as much baggage on the way, as *globalisation*. For its admirers it describes one of the great achievements of the modern age: goods, money, people and ideas moving across borders more freely than ever before. For its critics it is a polite name for a system that rewards the mobile and the already wealthy while leaving others to absorb the costs. Both camps, it is worth saying at the outset, are describing something real.\n\n[gap one]\n\nYet the very feature that makes this arrangement efficient also makes it fragile. A supply chain stretched across thousands of miles has many links, and when one of them breaks, the effects ripple outwards with remarkable speed. Recent years have offered several reminders of this, from blocked shipping lanes to sudden shortages of components that most people had never heard of.\n\n[gap two]\n\nThe older argument about fairness has not gone away, however. Even economists who defend open trade acknowledge that its gains are unevenly spread. A factory that moves abroad may lower prices for millions of shoppers by a small amount each, while costing a few thousand workers their livelihoods outright. The first effect is diffuse and easily overlooked; the second is concentrated, visible and often devastating for the towns concerned.\n\n[gap three]\n\nIt is here that the debate becomes political rather than merely economic. Resentment in regions that feel left behind has fed a broader scepticism about institutions that are seen as distant and unaccountable: international trade bodies, large multinational firms, and sometimes national governments themselves.\n\n[gap four]\n\nDefenders of open markets respond on several fronts. They argue that much of the job loss blamed on trade is in fact the result of automation, which would have happened anyway. They point out that trade has helped lift large numbers of people in poorer countries out of extreme poverty, a gain that critics in wealthy countries can easily forget. And they warn that the alternative, a world of tariffs and trade wars, has historically left almost everyone poorer.\n\n[gap five]\n\nWhat seems to be emerging, then, is less a choice between globalisation and its opposite than a renegotiation of its terms. Governments that once competed to remove every barrier now talk of strategic industries, of bringing some production closer to home, and of trading more with partners they trust.\n\n[gap six]\n\nPerhaps the most useful lesson of the long argument is that globalisation was never a force of nature, however often it was described as one. It was, and remains, the result of decisions: about rules, about investment, and about who bears the costs of change.\n\n[gap seven]' },
        ],
        [
          { t: 'reading', title: 'The removed paragraphs', md: '**A.** In principle, the winners could compensate the losers, through retraining, investment in struggling regions or more generous support between jobs. In practice, critics point out, this has seldom happened on anything like the scale required, and in some places the promise of compensation has come to sound like a promise made in bad faith.\n\n**B.** If that is so, the real question is not whether we are for or against it, but what kind of global economy we want, and who should have a say in shaping it. That is a harder question, and a far more interesting one.\n\n**C.** None of these points is without force, but none settles the matter either. The automation argument, for instance, may be correct as an account of the causes and still offer little comfort to a town that has lost its main employer, whatever the reason.\n\n**D.** The case for it is usually made in terms of efficiency. When each country specialises in what it does comparatively well and trades for the rest, the argument runs, everyone ends up with more than they could have produced alone. Cheaper shipping, above all the humble steel container, turned that textbook idea into daily reality.\n\n**E.** As a result, most economists now agree that trade barriers should be raised wherever local jobs are at risk, and that the age of open markets is effectively over.\n\n**F.** This scepticism is not confined to one end of the political spectrum. Some critics on the left object that globalisation weakens workers and erodes environmental standards; some on the right, that it weakens national sovereignty and dilutes local culture. That the two groups agree on little else has not prevented them from sometimes reaching the same conclusion.\n\n**G.** Such disruptions have given the critics a new and more practical argument. Where they once spoke mainly of fairness, they now speak of resilience too, asking whether it is wise for a country to depend on distant suppliers for things it cannot do without.\n\n**H.** Whether this marks a genuine change of direction or merely a change of vocabulary is hard to say. Words such as *resilience* and *security* are flexible enough to justify sensible precautions and old-fashioned protectionism alike, and it is not always easy, from the outside, to tell which is which.' },
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 6): choose the paragraph (A to H) that fits each gap. There is one extra paragraph that you do not need.', items: [
            { q: 'Which paragraph fits gap one?', o: ['D', 'A', 'B', 'C', 'E', 'F', 'G', 'H'], why: 'D sets out the case for efficiency; the next paragraph begins *Yet the very feature that makes this arrangement efficient*.' },
            { q: 'Which paragraph fits gap two?', o: ['G', 'A', 'B', 'C', 'D', 'E', 'F', 'H'], why: '*Such disruptions* refers back to blocked shipping lanes and shortages; *spoke mainly of fairness* prepares *The older argument about fairness*.' },
            { q: 'Which paragraph fits gap three?', o: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], why: '*The winners could compensate the losers* follows the uneven spread of gains; *bad faith* leads into *the debate becomes political*.' },
            { q: 'Which paragraph fits gap four?', o: ['F', 'A', 'B', 'C', 'D', 'E', 'G', 'H'], why: '*This scepticism* picks up *a broader scepticism* in the paragraph before.' },
            { q: 'Which paragraph fits gap five?', o: ['C', 'A', 'B', 'D', 'E', 'F', 'G', 'H'], why: '*None of these points* refers to the defenders’ three arguments, and C answers the automation one.' },
            { q: 'Which paragraph fits gap six?', o: ['H', 'A', 'B', 'C', 'D', 'E', 'F', 'G'], why: '*Whether this marks a genuine change* refers to the renegotiation and the talk of strategic industries.' },
            { q: 'Which paragraph fits gap seven?', o: ['B', 'A', 'C', 'D', 'E', 'F', 'G', 'H'], why: '*If that is so* follows the claim that globalisation was the result of decisions. E is the extra paragraph: it contradicts the writer’s balanced line.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes in Part 6', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Choosing a paragraph because it shares a word with the text', 'Checking the link before and after the gap', '*Resilience* appears in both G and H; only one fits each gap.'],
            ['Checking only the paragraph before the gap', 'Checking both directions', 'G fits after the shortages and before *The older argument about fairness*.'],
            ['Choosing a paragraph that fits the topic but not the argument', 'Following the writer’s line', 'E is on topic but contradicts the balanced conclusion.'],
            ['Leaving early decisions fixed', 'Revising when a later gap needs a paragraph you used', 'Each paragraph can be used once only.'],
          ] },
          { t: 'ex', kind: 'tf', ng: true, h: 'According to the article, are these statements true, false or not given?', items: [
            { q: 'The writer thinks both supporters and critics of globalisation describe something real.', a: 't', why: '*Both camps, it is worth saying at the outset, are describing something real.*' },
            { q: 'According to the writer, the costs of trade fall evenly on everyone.', a: 'f', why: 'The costs are *concentrated, visible and often devastating* for some towns.' },
            { q: 'Critics of globalisation all belong to the same political group.', a: 'f', why: '*This scepticism is not confined to one end of the political spectrum.*' },
            { q: 'The writer believes automation has caused more job losses than trade.', a: 'ng', why: 'The writer reports that defenders argue this, but does not give their own view on it.' },
            { q: 'The writer suggests that words such as *security* can hide very different policies.', a: 't', why: '*Flexible enough to justify sensible precautions and old-fashioned protectionism alike.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences with one word from the article.', items: [
            { q: 'A supply chain stretched across thousands of miles is efficient but ___.', a: ['fragile'], why: '*The very feature that makes this arrangement efficient also makes it fragile.*' },
            { q: 'The gains for shoppers are ___ and easily overlooked.', a: ['diffuse'], why: 'Spread thinly over many people.' },
            { q: 'The losses for workers are ___ and visible.', a: ['concentrated'], why: 'Falling heavily on a few.' },
            { q: 'Some critics on the right say that globalisation weakens national ___.', a: ['sovereignty'], why: 'A state’s authority over its own affairs.' },
            { q: 'Rather than a simple choice, the writer sees a ___ of the terms of globalisation.', a: ['renegotiation'], why: '*Less a choice between globalisation and its opposite than a renegotiation of its terms.*' },
          ] },
          { t: 'tip', art: 'owl', md: 'Notice how the writer reports views without adopting them: *the argument runs, critics point out, defenders respond, they warn that*. When you write about a controversy, this is the language that lets you be **fair before you are critical**, and examiners at C2 reward it.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'Both camps are describing something real.' },
            { a: 'The gains are diffuse, but the losses are concentrated.' },
            { a: 'None of these points is without force, but none settles the matter.' },
            { a: 'Globalisation was never a force of nature.' },
          ] },
          { t: 'text', md: 'Now give your own view in about two minutes: *Should a country produce more of what it needs at home, even if this makes goods more expensive?* Start by setting out both sides fairly, using two expressions of neutral reporting from lesson 2. Then explain a consequence with two cause-and-effect expressions from lesson 3, and end with a cautious conclusion of your own, as the writer of the article does.' },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the expression that fits best.', items: [
      { q: 'Orders ___ when the tariff was introduced, falling by half in a month.', o: ['plummeted', 'edged up', 'plateaued'], why: 'A fast, large fall.' },
      { q: 'After two years of decline, the market seems to have ___.', o: ['bottomed out', 'soared', 'outstripped'], why: 'Stopped falling at its lowest point.' },
      { q: 'Wages rose by two per cent while prices rose by four, so they fell ___.', o: ['in real terms', 'per capita', 'by and large'], why: 'After inflation, wages fell.' },
      { q: 'Investment saw a ___ increase over the decade.', o: ['threefold', 'three times', 'triple times'], why: 'Before a noun, use *-fold*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'Unemployment rose ___ one point to seven per cent.', a: ['by'], why: '*By* gives the size of the change.' },
      { q: 'Exports now stand ___ just under two million tonnes.', a: ['at'], why: '*Stand at* gives the current level.' },
      { q: 'The treaty must be ratified ___ it comes into force.', a: ['before'], why: 'Ratification comes first.' },
      { q: 'The closure gave ___ to a wave of protests.', a: ['rise'], why: '*Give rise to* + effect.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Choose the word that best fits each gap.', items: [
      { q: 'The government has decided to ___ the sanctions in stages.', o: ['lift', 'rise', 'raise up', 'take'], why: 'The collocation is *lift sanctions*.' },
      { q: 'The deal was ___ by a neutral third country.', o: ['brokered', 'bargained', 'dealt', 'traded'], why: 'A third party *brokers* a deal.' },
      { q: 'Talks ___ over fishing rights and have not resumed.', o: ['broke down', 'broke up', 'broke off with', 'broke in'], why: 'Talks *break down*: fail.' },
      { q: 'Choosing growth over stability involves a difficult ___.', o: ['trade-off', 'pay-off', 'take-off', 'write-off'], why: 'A balance between two goals: a *trade-off*.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence reports the position most neutrally?', items: [
      { q: '', o: ['Officials say the measures are temporary.', 'The regime claims the measures are temporary.', 'Officials finally admit the measures are temporary.'], why: 'Neutral noun and verb, no judgement.' },
      { q: '', o: ['Opponents argue that the deal favours exporters; its supporters say consumers will benefit.', 'The deal clearly favours exporters, whatever its naive supporters say.', 'Everyone agrees the deal is unfair.'], why: 'Both positions attributed and balanced.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'The closure resulted [from] two hundred job losses.', a: ['in'], why: '*Result in* + effect.' },
      { s: 'The problem stems [of] a lack of investment.', a: ['from'], why: 'Always *stem from*.' },
      { s: 'The council cut fares, thereby [it encouraged] travel.', a: ['encouraging'], why: '*Thereby* + -ing.' },
      { s: 'Parliament [signed] the treaty, which made it binding.', a: ['ratified'], why: 'Parliaments ratify; ratification makes a treaty binding.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite each sentence using the word given. Keep the meaning.', items: [
      { q: 'The protests were caused by the closure.', cue: 'stemmed', a: ['The protests stemmed from the closure.'], why: '*Stem from* + cause.' },
      { q: 'After the bank collapsed, and because of it, confidence fell.', cue: 'wake', a: ['In the wake of the bank’s collapse, confidence fell.', 'In the wake of the collapse of the bank, confidence fell.'], why: '*In the wake of* + noun phrase.' },
      { q: 'Demand fell, so many shops closed.', cue: 'result', a: ['Demand fell, with the result that many shops closed.'], why: '*With the result that* + clause.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the words with their meanings.', pairs: [
      ['protectionism', 'shielding home industries from foreign competition'],
      ['per capita', 'for each person in the population'],
      ['a stalemate', 'a situation in which neither side can make progress'],
      ['resilience', 'the ability to recover quickly from a shock'],
      ['outstrip', 'grow faster or larger than something else'],
    ] },
  ],
};
