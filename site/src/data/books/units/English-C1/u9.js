// English C1, unit 9, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Turning points: inversion after negative and limiting adverbials (beyond the B2 set: not until, only when, little,
// at no time, on no account), emphatic inversion with so and such, the language of change and decisions, and four
// short texts by people who changed direction.
export const UNIT = {
  id: 'u9',
  title: 'Turning points',
  goal: 'Use inversion for emphasis in formal speech and writing, including the delayed patterns with not until and only when, build dramatic sentences with so and such, talk precisely about change and decisions, and match ideas across four texts about people who changed direction.',
  art: 'suitcase',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'speaking'], topics: ['inversion', 'emphasis', 'so-and-such', 'decisions', 'change', 'careers', 'idioms'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Not until then did I see it',
      about: 'Put a negative or limiting adverbial first and invert the subject and auxiliary, including the patterns where the inversion comes later in the sentence.',
      art: 'monster',
      spreads: [
        [
          { t: 'text', md: 'At B2 you met the core inversion patterns: *Never have I seen…*, *Not only did she…*, *Hardly had we arrived when…*, *No sooner had he left than…*, *Seldom do we…*, *Under no circumstances should you…*. The mechanism is always the same. A negative or limiting word moves to the front for emphasis, and the subject and the auxiliary change places, exactly as in a question.\n\nAt C1 the challenge is not the mechanism but the **range** and the **position**. You need more openers (*little*, *at no time*, *on no account*, *in no way*, *nowhere*, *not once*), and you need to know where the inversion goes when the opener is a whole clause. That second point is where most advanced learners go wrong.' },
          { t: 'table', caption: 'Openers beyond B2', explain: ['head', 'col1'], head: ['Opener', 'Meaning and feel', 'Example'], rows: [
            ['Little', 'not at all (with know, realise, suspect, imagine)', 'Little did she know what lay ahead.'],
            ['At no time', 'never, at no point (often a denial)', 'At no time was the public at risk.'],
            ['On no account', 'absolutely not (a firm order)', 'On no account must the door be left open.'],
            ['In no way', 'not in any respect', 'In no way does this change our plans.'],
            ['Nowhere', 'in no place', 'Nowhere is the change more visible than in the city centre.'],
            ['Not once', 'never, not even one time', 'Not once did he complain.'],
            ['Rarely / Only rarely', 'hardly ever', 'Only rarely do we get a second chance.'],
          ] },
          { t: 'tip', art: 'owl', md: 'The auxiliary is the one a question would use: *have, had, is, was, can, will, should, must*. If the normal sentence has none, bring in **do, does** or **did**: *She knew* → *Little* **did** *she know*.' },
        ],
        [
          { t: 'text', md: 'Now the **delayed** patterns. With **Not until** and **Only when / Only after / Only if / Only once**, the opener is followed by a complete clause in normal word order, and the inversion comes in the **second**, main clause:\n\n*Not until I read the letter* **did I understand** *why she had left.*\n*Only when the results came in* **did we realise** *how close it had been.*\n\nThe first clause is a time or condition clause, so it keeps its ordinary order. Only the main clause inverts. Put the inversion in the wrong clause and the sentence collapses: *Not until did I read the letter…* is impossible.\n\n**Only** with a phrase rather than a clause inverts straight after the phrase: *Only then*, *Only later*, *Only in this way*, *Only by working together*: *Only then* **did I see** *the point.*' },
          { t: 'examples', items: [
            { s: '**Not until** the last guest had gone **did she** allow herself to cry.', n: 'Normal order in the *until* clause, inversion in the main clause.' },
            { s: '**Only after** months of arguing **did they** reach an agreement.', n: '*Only after* + a phrase or clause, then the inversion.' },
            { s: '**Only by** cutting costs **can we** keep the shop open.', n: '*Only by* + *-ing*: the one method that works.' },
            { s: '**Little did** he realise that the interview would change his life.', n: '*Little* means *not at all*, not *a small amount*.' },
            { s: '**At no time was** anyone told that the factory would close.', n: 'A firm denial, typical of official statements.' },
            { s: '**Not a single word did** she say during the meeting.', n: '*Not a / Not one* + object at the front, then the inversion.' },
          ] },
        ],
        [
          { t: 'text', md: 'Knowing when **not** to invert matters as much as knowing when to do it. There is no inversion when the negative word is part of the **subject**: *Hardly anyone* **came**, *Not many people* **know** *this*, *Only Clara* **knew** *the truth*. There is no inversion either when the phrase is not really negative: *In no time* (very quickly) *we were on the road*.\n\nRegister is the other half of the C1 picture. Inversion is formal and dramatic. It belongs in speeches, narrative, journalism and essays, and in the exam. In conversation it can sound theatrical, unless it is a fixed phrase people use for effect, such as *Little did I know…* or *Never again!* One well-placed inversion in an essay paragraph impresses; three in a row sound like a parody.' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Not until did I read the letter I understood.', 'Not until I read the letter did I understand.', 'The *until* clause keeps normal order; the main clause inverts.'],
            ['Only when did we arrive we saw the damage.', 'Only when we arrived did we see the damage.', 'Same rule: inversion after the whole *when* clause.'],
            ['Little she knew about the plan.', 'Little did she know about the plan.', 'No auxiliary in the normal sentence, so add *did*.'],
            ['Hardly did anyone notice.', 'Hardly anyone noticed.', '*Hardly anyone* is the subject: no inversion.'],
            ['Only Clara did know the answer.', 'Only Clara knew the answer.', '*Only Clara* is the subject: normal order.'],
            ['At no time I was told.', 'At no time was I told.', 'Invert *was* and the subject.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'A radio interview with a chef who left the law', lines: [
            { who: 'Helen', s: 'You were a partner in a law firm at thirty-eight. What made you walk away?' },
            { who: 'Rafael', s: 'Honestly, it crept up on me. Not until my daughter asked why I never ate dinner with them did I see how much I had given up.' },
            { who: 'Helen', s: 'And cooking was always the plan?' },
            { who: 'Rafael', s: 'Not at all. Little did I know, when I signed up for a weekend course, that I would end up running a kitchen.' },
            { who: 'Helen', s: 'Did you ever doubt the decision?' },
            { who: 'Rafael', s: 'At no time did I want to go back, but only after the first year did I believe the restaurant would survive.' },
            { who: 'Helen', s: 'Any advice for listeners thinking of doing the same?' },
            { who: 'Rafael', s: 'On no account should you hand in your notice before you have tested the idea. Hardly anyone tells you that.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Notice the last line. *On no account should you* inverts, but *Hardly anyone tells you* does not, because *hardly anyone* is the subject. Rafael’s inversions also come at the moments he wants to stress, not in every sentence.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
            { q: '', o: ['Not until the plane landed did I relax.', 'Not until did the plane land I relaxed.', 'Not until the plane landed I relaxed.'], why: 'Normal order in the *until* clause, inversion in the main clause.' },
            { q: '', o: ['Only by asking for help did she finish on time.', 'Only by asking for help she finished on time.', 'Only by asking for help finished she on time.'], why: '*Only by* + *-ing*, then auxiliary *did* + subject.' },
            { q: '', o: ['Hardly anybody turned up.', 'Hardly did anybody turn up.', 'Hardly turned up anybody.'], why: '*Hardly anybody* is the subject: no inversion.' },
            { q: '', o: ['In no way does the delay affect the budget.', 'In no way the delay affects the budget.', 'In no way affects the delay the budget.'], why: '*In no way* + *does* + subject + base form.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
            { s: 'Only when the votes were counted [we knew] who had won.', a: ['did we know'], why: 'Inversion in the main clause after *Only when …*.' },
            { s: '[Little she suspected] that he was planning a surprise.', a: ['Little did she suspect'], why: 'Add *did* and put it before the subject.' },
            { s: 'Not once [he apologised] for the mistake.', a: ['did he apologise'], why: '*Not once* + *did* + subject + base form.' },
            { s: 'Only [the manager did know] the code.', a: ['the manager knew'], why: '*Only the manager* is the subject: normal order.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. Do not change the word given.', items: [
            { q: 'She had no idea that her life was about to change completely.', cue: 'LITTLE', a: ['Little did she know that her life was about to change completely.', 'Little did she know her life was about to change completely.', 'Little did she realise that her life was about to change completely.', 'Little did she suspect that her life was about to change completely.'], why: '*Little did she know* = she had no idea.' },
            { q: 'You must not tell anyone about the offer under any circumstances.', cue: 'ACCOUNT', a: ['On no account must you tell anyone about the offer.', 'On no account should you tell anyone about the offer.', 'On no account are you to tell anyone about the offer.'], why: '*On no account* + modal + subject.' },
            { q: 'He only understood what he had lost when he moved abroad.', cue: 'WHEN', a: ['Only when he moved abroad did he understand what he had lost.', 'Only when he had moved abroad did he understand what he had lost.'], why: 'Normal order in the *when* clause, inversion after it.' },
            { q: 'At no point did I think of giving up.', cue: 'TIME', a: ['At no time did I think of giving up.'], why: '*At no point* = *at no time*; the inversion stays.' },
            { q: 'The landlord announced he was selling immediately after we signed the lease.', cue: 'SOONER', a: ['No sooner had we signed the lease than the landlord announced he was selling.'], why: '*No sooner had* + subject + past participle … *than*.' },
            { q: 'I didn’t realise how serious the problem was until I read the report.', cue: 'UNTIL', a: ['Not until I read the report did I realise how serious the problem was.', 'Not until I had read the report did I realise how serious the problem was.'], why: 'The delayed pattern: *Not until* + clause, then *did I realise*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 4** of C1 Advanced you write **three to six words**, including the word given, and each item is worth **two marks**, usually one for each change you make. Here you rewrite the whole sentence so you can see the pattern, but in the exam you write only the missing words. Contractions count as two words. Openers such as *little, account, time, sooner, until, only* are strong signals of inversion.' },
        ],
        [
          { t: 'text', md: 'Say the sentences with stress on the opener and on the main verb. Inversion is a rhetorical device, so it should sound deliberate.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'Not until I left did I realise how much I loved the city.' },
            { a: 'Little did we know what was about to happen.' },
            { a: 'Only by working together can we solve this.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'So great was the demand',
      about: 'Front so and such for emphatic inversion: So great was the demand that…, Such was her anger that…',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'You already know **so … that** and **such … that** for result: *The demand was so great that the shop ran out.* At C1 you can push the cause to the front of the sentence, which makes it feel bigger and more dramatic, and then invert:\n\n**So + adjective + be + subject + that**: **So great was the demand** *that the shop ran out by noon.*\n\n**Such + be + noun phrase + that**: **Such was her anger** *that she could not speak.*\n\nWith **such**, the inversion is just the verb *be*, and the noun phrase usually starts with *the* or a possessive: *Such was* **the** *noise…*, *Such is* **its** *popularity…*. Here *such* means *so great* or *of this kind*, and it stands alone at the front.' },
          { t: 'table', caption: 'Normal order and emphatic inversion', explain: ['head'], head: ['Normal', 'Emphatic'], rows: [
            ['The demand was so great that the shop ran out.', 'So great was the demand that the shop ran out.'],
            ['Her anger was such that she could not speak.', 'Such was her anger that she could not speak.'],
            ['The news spread so quickly that everyone knew by lunch.', 'So quickly did the news spread that everyone knew by lunch.'],
            ['The book is so popular that it is in its tenth printing.', 'Such is the popularity of the book that it is in its tenth printing.'],
            ['I was so tired that I fell asleep on the train.', 'So tired was I that I fell asleep on the train.'],
          ] },
        ],
        [
          { t: 'text', md: 'There are three patterns to keep apart.\n\nWith an **adjective**, *so* is followed by *be* and the subject: *So* **steep was** *the climb that…*\n\nWith an **adverb**, *so* is followed by an auxiliary, the subject and the main verb, just as in a question: *So* **badly had** *the house* **been damaged** *that…*, *So* **rarely does** *she* **complain** *that…*\n\nWith **such**, it is *such* + *be* + the noun phrase: *Such* **was the strength** *of feeling that…* A longer, more literary version uses **to such an extent / to such a degree**: *To such an extent* **had** *the town* **changed** *that I barely recognised it.*\n\nWatch out for **so many / so much** + noun as the **subject**. Then there is nothing to invert: *So many people* **came** *that the doors had to be closed.*' },
          { t: 'examples', items: [
            { s: '**So convincing was** her argument **that** the board changed its mind.', n: 'Adjective: *so* + adjective + *was* + subject.' },
            { s: '**So suddenly did** the storm arrive **that** the boats were caught at sea.', n: 'Adverb: *so* + adverb + *did* + subject + base form.' },
            { s: '**Such was** the strength of public feeling **that** the plan was dropped.', n: '*Such* + *was* + the noun phrase.' },
            { s: '**Such is** the pace of change **that** today’s skills may be useless in ten years.', n: 'Present tense for a general truth.' },
            { s: '**To such an extent had** prices risen **that** families were skipping meals.', n: 'Literary, very formal.' },
            { s: '**So many** people **applied that** the deadline was extended.', n: 'The subject is *so many applicants*: no inversion.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['So great the demand was that…', 'So great was the demand that…', 'Put *was* before the subject.'],
            ['Such her anger was that…', 'Such was her anger that…', 'Same with *such*: *was* comes second.'],
            ['So quickly the news spread that…', 'So quickly did the news spread that…', 'With an adverb, add *did* and use the base form.'],
            ['Such was the noise so nobody heard.', 'Such was the noise that nobody heard.', 'The result clause starts with *that*.'],
            ['So many people did come that…', 'So many people came that…', '*So many people* is the subject: no inversion.'],
          ] },
          { t: 'reading', title: 'The winter the bridge closed', md: 'Nobody in Ashby thought much about the old bridge until the morning it was declared unsafe. So complete was the town’s dependence on it that, within a week, the bakery had lost half its customers and the school bus was taking an hour to make a ten-minute journey.\n\nSuch was the anger at the council meeting that the chair had to suspend it twice. Yet out of the chaos came something nobody had expected. So determined were the residents not to be cut off that they organised a ferry, a car-sharing rota and a weekly market on the far bank.\n\nBy the time the new bridge opened, the town had changed. So used had people become to helping one another that the market and the car-sharing carried on. Ask anyone in Ashby today and they will tell you that the worst winter in living memory was also a turning point.' },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the correct word.', items: [
            { q: 'So ___ was the response that the organisers added a second date.', o: ['enthusiastic', 'enthusiasm', 'enthusiastically'], why: '*So* + adjective + *was*.' },
            { q: '___ was the noise that nobody could hear the speeches.', o: ['Such', 'So', 'Too'], why: '*Such* + *was* + noun phrase.' },
            { q: 'So quickly ___ the rumour spread that the whole office knew by lunchtime.', o: ['did', 'was', 'had'], why: 'Adverb + past simple: *did* + subject + base form.' },
            { q: 'So ___ people turned up that the hall had to be closed.', o: ['many', 'much', 'such'], why: '*So many* + countable noun; it is the subject, so there is no inversion.' },
            { q: 'Such ___ the popularity of the course that it is fully booked every year.', o: ['is', 'does', 'has'], why: '*Such* + *be*; present for a general fact.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the sentence. Two words do not belong.', items: [
            { a: 'So steep was the path that we had to stop every few minutes.', extra: ['it', 'such'], why: '*So* + adjective + *was* + subject + *that*.' },
            { a: 'Such was his relief that he burst out laughing.', extra: ['so', 'did'], why: '*Such* + *was* + noun phrase + *that*.' },
            { a: 'So rarely does she complain that we knew something was wrong.', extra: ['is', 'complains'], why: 'Adverb: *does* + subject + base form.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 2): read the text about a village after a flood and write one word in each gap.', items: [
            { q: 'So severe ___ the flooding that spring that the village school closed for a month.', a: ['was'], why: '*So* + adjective + *was* + subject.' },
            { q: '___ was the damage to the main road that supplies had to come in by boat.', a: ['Such'], why: '*Such* + *was* + noun phrase + *that*.' },
            { q: 'Not ___ the water had gone down did people see how much they had lost.', a: ['until'], why: '*Not until* + clause, then inversion.' },
            { q: 'Only ___ working together did the residents manage to rebuild the bridge.', a: ['by'], why: '*Only by* + *-ing*: the method.' },
            { q: '___ only did they rebuild it, but they also made it wider.', a: ['Not'], why: '*Not only did …, but also …*.' },
            { q: 'So proud ___ the villagers of their work that they held a festival on the new bridge.', a: ['were'], why: 'Plural subject: *were the villagers*.' },
            { q: 'Such was the success of the festival ___ it has been held every year since.', a: ['that'], why: 'The result clause starts with *that*.' },
            { q: 'Little ___ anyone imagine that a disaster would bring the village closer together.', a: ['did', 'could'], why: '*Little did / could anyone imagine*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 2** of C1 Advanced you write **one word** in each of **eight gaps** in a text, and most of the missing words are grammar words: auxiliaries, prepositions, linkers, parts of fixed phrases. When a sentence starts with *So*, *Such*, *Only* or *Not*, check whether it needs an auxiliary or a partner word such as *that*, *until* or *by*.' },
        ],
        [
          { t: 'text', md: 'Say these sentences with a slight pause before *that*: the first half builds the tension, the second half releases it.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'So great was the demand that the tickets sold out in an hour.' },
            { a: 'Such was her anger that she left without a word.' },
            { a: 'So quickly did the news spread that everyone knew by lunch.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'At a crossroads',
      about: 'Talk precisely about change and decisions with idioms and collocations such as a watershed moment, a change of heart and burn your bridges.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'At C1 the gap between a good speaker and a very good one is often a matter of a few fixed phrases used exactly right. English has a rich set of images for change and decisions: roads (*at a crossroads*, *a turning point*, *no going back*), water (*a watershed*, *take the plunge*), fire (*burn your bridges*) and the heart (*a change of heart*).\n\nThe images help you remember them, but the details are fixed. You *take* the plunge, never *make* it; you are *at* a crossroads, not *in* one; *bridges* is always plural. Learn each phrase with its verb, its article and its preposition.' },
          { t: 'table', caption: 'Idioms of change and decisions', explain: ['head', 'col1'], head: ['Phrase', 'Meaning', 'Example'], rows: [
            ['a watershed (moment)', 'the point after which things are never the same', 'The 1990s were a watershed for the industry.'],
            ['at a crossroads', 'at a point where you must choose a direction', 'At forty, I found myself at a crossroads.'],
            ['a change of heart', 'a change of opinion or feeling', 'He had a change of heart and stayed.'],
            ['burn your bridges', 'do something that makes it impossible to go back', 'Don’t burn your bridges with your old boss.'],
            ['take the plunge', 'finally do something risky you have been considering', 'We took the plunge and bought the farm.'],
            ['a leap of faith', 'a decision based on trust rather than proof', 'Moving there was a leap of faith.'],
            ['have second thoughts', 'start to doubt a decision', 'I had second thoughts the night before.'],
            ['sit on the fence', 'refuse to choose a side', 'You can’t sit on the fence forever.'],
            ['the point of no return', 'the moment after which you cannot turn back', 'Signing the contract was the point of no return.'],
          ] },
        ],
        [
          { t: 'text', md: 'Alongside the idioms you need the plain collocations that surround them, because examiners reward natural combinations more than rare words. Decisions are **made** or, a little more formally, **taken**; after a process they are **reached** or **arrived at**. A decision can be **momentous**, **agonising**, **rash** or **informed**; a **snap** decision is made instantly. Once made, you **stand by** it, or you **reverse** or **go back on** it.\n\nChange is **brought about** by someone or something; a person or organisation **undergoes** it. It can be **radical**, **sweeping** or **subtle**, and a **shift** can be **gradual** or **marked**. Something that makes later change possible **paves the way for** it.' },
          { t: 'table', caption: 'Collocations of decisions and change', explain: ['head', 'col2'], head: ['Pattern', 'Collocations', 'Note'], rows: [
            ['verb + decision', 'make, take, reach, arrive at, stand by, reverse, go back on', '*Take* is slightly more formal; *reach* follows discussion.'],
            ['adjective + decision', 'momentous, agonising, rash, snap, informed, difficult', '*Snap* = instant; *rash* = without enough thought.'],
            ['verb + change', 'bring about, undergo, resist, embrace, mark', 'A country *undergoes* change; a law *brings it about*.'],
            ['adjective + change / shift', 'radical, sweeping, subtle, gradual, marked', '*Marked* = clear and noticeable.'],
            ['other', 'pave the way for, weigh up the pros and cons, a U-turn', 'A *U-turn* is a complete reversal, often by a government.'],
          ] },
          { t: 'tip', art: 'owl', md: '**Take the plunge** and **a leap of faith** both involve risk, but they are not the same. You *take the plunge* when you finally act after hesitating. A *leap of faith* is about acting without certainty. A big move can be both.' },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I was in a crossroads.', 'I was at a crossroads.', 'Fixed preposition: *at*.'],
            ['She made the plunge.', 'She took the plunge.', 'Fixed verb: *take*.'],
            ['Don’t burn your bridge.', 'Don’t burn your bridges.', 'Always plural.'],
            ['He had a heart change.', 'He had a change of heart.', 'Fixed form: *a change of heart*.'],
            ['We arrived to a decision.', 'We arrived at a decision.', '*arrive at* a decision, like *reach* one.'],
            ['The company suffered a big change.', 'The company underwent a radical change.', '*Undergo* is the neutral verb; *suffer* implies harm.'],
          ] },
          { t: 'dialogue', title: 'Talking it through', lines: [
            { who: 'Priya', s: 'So, have you decided about the Lisbon job?' },
            { who: 'Owen', s: 'Not yet. I keep weighing up the pros and cons, and every time I think I’ve reached a decision, I have second thoughts.' },
            { who: 'Priya', s: 'You can’t sit on the fence much longer. They want an answer by Friday.' },
            { who: 'Owen', s: 'I know. It just feels like a point of no return. If I resign, I’m burning my bridges here.' },
            { who: 'Priya', s: 'Not if you leave on good terms. And honestly, you’ve been at a crossroads for about two years.' },
            { who: 'Owen', s: 'That’s fair. Maybe it’s time to take the plunge.' },
            { who: 'Priya', s: 'Just don’t make a snap decision tonight and have a change of heart tomorrow.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each phrase with its meaning.', pairs: [
            ['a watershed moment', 'a point after which nothing is the same'],
            ['a change of heart', 'a new opinion or feeling about something'],
            ['burn your bridges', 'make it impossible to go back'],
            ['sit on the fence', 'avoid choosing a side'],
            ['a leap of faith', 'a choice made without proof it will work'],
            ['a snap decision', 'a choice made instantly'],
          ] },
          { t: 'ex', kind: 'colloc', h: 'Which words go with the key word?', items: [
            { key: 'reach / arrive at', o: ['a decision', 'a conclusion', 'the plunge', 'second thoughts'], a: [0, 1], why: 'You *reach* or *arrive at* a decision or conclusion; you *take* the plunge and *have* second thoughts.' },
            { key: 'undergo', o: ['a radical change', 'a transformation', 'a decision', 'a crossroads'], a: [0, 1], why: 'A person or organisation *undergoes* change or transformation.' },
            { key: 'a ___ decision', o: ['momentous', 'rash', 'snap', 'sweeping'], a: [0, 1, 2], why: '*Sweeping* goes with *change* or *reforms*, not *decision*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 1): read the text about a musician who retrained as a doctor and choose the word that best fits each gap.', items: [
            { q: 'Leaving the orchestra was a ___ moment in Ana’s life.', o: ['watershed', 'threshold', 'borderline', 'benchmark'], why: '*A watershed moment*: nothing was the same afterwards.' },
            { q: 'At thirty-four she found herself at a ___, unsure whether to stay or go.', o: ['crossroads', 'junction', 'turning', 'divide'], why: 'The idiom is *at a crossroads*.' },
            { q: 'She spent months ___ up the pros and cons.', o: ['weighing', 'measuring', 'balancing', 'counting'], why: '*Weigh up the pros and cons* is fixed.' },
            { q: 'In the end she decided to take the ___ and apply to medical school.', o: ['plunge', 'dive', 'fall', 'drop'], why: '*Take the plunge* = finally do it.' },
            { q: 'Her friends warned her not to burn her ___ with the orchestra.', o: ['bridges', 'doors', 'gates', 'roads'], why: '*Burn your bridges*, always plural.' },
            { q: 'Halfway through the first year she had second ___ and almost left.', o: ['thoughts', 'minds', 'ideas', 'opinions'], why: '*Have second thoughts* = start to doubt.' },
            { q: 'But she ___ by her decision and qualified five years later.', o: ['stood', 'held', 'kept', 'remained'], why: '*Stand by a decision* = not change it.' },
            { q: 'Looking back, she says the move ___ the way for everything that followed.', o: ['paved', 'laid', 'built', 'set'], why: '*Pave the way for* = make possible.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 1** of C1 Advanced there are **eight gaps** with **four options** each, and the options are usually close in meaning. The key is the words around the gap: a preposition after it (*weigh up*), a fixed noun (*the plunge*), a plural (*bridges*). Ask which word the phrase demands, not which word means the right thing.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'At thirty, I found myself at a crossroads.' },
            { a: 'After months of weighing up the pros and cons, I finally took the plunge.' },
            { a: 'I had a change of heart, but I was careful not to burn my bridges.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'People who changed direction',
      about: 'Read four short texts by people who changed the course of their lives and match ideas to the right writer.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'This lesson brings the unit together. Four people describe the moment their lives changed direction. Read all four once for the general story, then again for detail. Notice how the writers use inversion at the moments they want to stress, and how the idioms from Lesson 3 carry a lot of meaning in a few words.' },
          { t: 'reading', title: 'Changing direction', md: '**A. Aiko, from dancer to engineer.** For fifteen years my whole life revolved around the stage. Little did I suspect, when I injured my knee at thirty-one, that it would be the best thing that ever happened to me. At the time it felt like the end of the world, and I spent a miserable winter unable to accept that my dancing days were over. Then a physiotherapist asked me what I had been good at in school. Maths, I said, without thinking. Not until I enrolled on an evening course did I realise how much I had missed solving problems. The degree took five years and I came close to giving up more than once. What kept me going was an unexpected link with my old life: a dancer spends all day thinking about balance and load, and so does an engineer.\n\n**B. Callum, from lawyer to furniture maker.** People assume I had a dramatic moment of revelation. I didn’t. Mine was a slow change of heart over several years, as the dread on Sunday evenings grew a little heavier each week. When I finally handed in my notice, I made a point of leaving on good terms; I had no intention of burning my bridges, and two former colleagues are now among my best customers. What nobody tells you is how lonely a workshop can be. So used was I to a busy office that the silence unsettled me for months. I earn far less than I used to, and I won’t pretend that doesn’t matter, but at no time have I wished I had stayed.\n\n**C. Farida, from the city back to the farm.** I swore I would never go back. I had grown up on the farm, watched my parents work seven days a week, and left at eighteen without a backward glance. Then my father fell ill and someone had to keep things going for a season. The season became a year, and the year became a decision. Such was the pressure from relatives to sell the land that I very nearly did; an agent had even drawn up the papers. What stopped me was walking the fields one morning in early spring and realising I knew every hedge and every gate. It was a leap of faith rather than a business plan, and the first two years were brutal. Only now, six years on, am I starting to feel that the farm is mine rather than my father’s.\n\n**D. Javier, from architect to nurse.** My turning point was not a choice I made but a situation I found myself in. During a long hospital stay with my son, I watched the nurses on the children’s ward and was struck by how much difference one calm person could make on a bad night. Never before had I felt that my own work, which I was proud of, was somehow beside the point. I didn’t take the plunge straight away. I weighed it up for almost two years, partly because retraining at forty-four with a mortgage seemed reckless. My wife, far from trying to talk me out of it, was the one who finally filled in the application. Hardly a week goes by without someone asking whether I regret it. I miss the drawings, but not the person I was when I made them.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 8): which person (A Aiko, B Callum, C Farida, D Javier) says this?', items: [
            { q: 'I found a surprising connection between my old career and my new one.', o: ['A Aiko', 'B Callum', 'C Farida', 'D Javier'], why: '*a dancer spends all day thinking about balance and load, and so does an engineer*.' },
            { q: 'My decision grew slowly rather than arriving all at once.', o: ['B Callum', 'A Aiko', 'C Farida', 'D Javier'], why: '*a slow change of heart over several years*.' },
            { q: 'I almost made a choice I could not have undone because of other people.', o: ['C Farida', 'A Aiko', 'B Callum', 'D Javier'], why: '*the pressure from relatives to sell … an agent had even drawn up the papers*.' },
            { q: 'A family member took the final practical step for me.', o: ['D Javier', 'A Aiko', 'B Callum', 'C Farida'], why: '*My wife … was the one who finally filled in the application*.' },
            { q: 'I had once been determined never to return to an earlier way of life.', o: ['C Farida', 'A Aiko', 'B Callum', 'D Javier'], why: '*I swore I would never go back*.' },
            { q: 'Seeing other people at work made me question the value of my own job.', o: ['D Javier', 'A Aiko', 'B Callum', 'C Farida'], why: '*I watched the nurses … my own work … was somehow beside the point*.' },
            { q: 'At first I could not come to terms with losing the life I had.', o: ['A Aiko', 'B Callum', 'C Farida', 'D Javier'], why: '*unable to accept that my dancing days were over*.' },
            { q: 'A difficulty in my new life took me by surprise.', o: ['B Callum', 'A Aiko', 'C Farida', 'D Javier'], why: '*What nobody tells you is how lonely a workshop can be*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 8** of C1 Advanced you match about ten statements to several texts or sections, and a writer can be the answer more than once. The statements paraphrase the text: *came to terms with* for *accept*, *a choice I could not have undone* for *sell the land*. Read the statement, decide what kind of idea it is (a feeling, a cause, a problem), and look for that idea, not the same words.' },
        ],
        [
          { t: 'text', md: 'Now look at the language. The writers use inversion sparingly, at the moments of greatest emphasis, and one sentence uses a negative opener **without** inversion. Complete the phrases from the texts.' },
          { t: 'ex', kind: 'gap', h: 'Complete the phrases from the texts with one word.', items: [
            { q: 'Little ___ I suspect that it would be the best thing that ever happened to me.', a: ['did'], why: '*Little* + *did* + subject + base form.' },
            { q: 'Not until I enrolled on an evening course ___ I realise how much I had missed it.', a: ['did'], why: 'Delayed inversion after the *until* clause.' },
            { q: 'So ___ was I to a busy office that the silence unsettled me.', a: ['used'], why: '*So* + adjective (*used to*) + *was I*.' },
            { q: '___ was the pressure from relatives that I very nearly sold the land.', a: ['Such'], why: '*Such* + *was* + noun phrase.' },
            { q: 'Only now, six years on, ___ I starting to feel the farm is mine.', a: ['am'], why: '*Only now* + *am I*: present continuous inverted.' },
            { q: 'Hardly a week ___ by without someone asking whether I regret it.', a: ['goes'], why: '*Hardly a week* is the subject: no inversion.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the phrases from the texts with their meanings.', pairs: [
            ['without a backward glance', 'with no regret or hesitation'],
            ['beside the point', 'not important or relevant'],
            ['made a point of', 'did deliberately and carefully'],
            ['talk someone out of', 'persuade someone not to do something'],
            ['revolved around', 'had as its centre'],
          ] },
        ],
        [
          { t: 'text', md: 'To finish, tell your own story of a turning point, real or imagined, in two or three sentences. Use one inversion and one idiom from this unit. Then say these model sentences after the tutor.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'Little did I know that one phone call would change everything.' },
            { a: 'It was a leap of faith rather than a business plan.' },
            { a: 'Only now am I starting to feel that I made the right choice.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the correct form.', items: [
      { q: 'Not until the meeting ended ___ the truth.', o: ['did we learn', 'we learned', 'learned we'], why: 'Inversion in the main clause after *Not until* + clause.' },
      { q: 'Hardly ___ the change.', o: ['anyone noticed', 'did anyone notice', 'noticed anyone'], why: '*Hardly anyone* is the subject: no inversion.' },
      { q: 'So ___ was the view that we stopped the car.', o: ['spectacular', 'spectacularly', 'spectacle'], why: '*So* + adjective + *was*.' },
      { q: 'Such ___ her talent that she was offered a place at sixteen.', o: ['was', 'did', 'had'], why: '*Such* + *was* + noun phrase.' },
      { q: 'Only by ___ early did we avoid the traffic.', o: ['leaving', 'leave', 'we left'], why: '*Only by* + *-ing*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Complete the second sentence so that it has a similar meaning to the first, using the word given.', items: [
      { q: 'We didn’t know that the company was about to close.', cue: 'LITTLE', a: ['Little did we know that the company was about to close.', 'Little did we know the company was about to close.', 'Little did we realise that the company was about to close.'], why: '*Little did we know*.' },
      { q: 'The storm was so strong that the ferry was cancelled.', cue: 'SUCH', a: ['Such was the strength of the storm that the ferry was cancelled.'], why: '*Such was* + noun phrase + *that*.' },
      { q: 'You must not open this door under any circumstances.', cue: 'ACCOUNT', a: ['On no account must you open this door.', 'On no account should you open this door.', 'On no account are you to open this door.'], why: '*On no account* + modal + subject.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'So quickly ___ the fire spread that the building was lost.', a: ['did'], why: 'Adverb: *did* + subject + base form.' },
      { q: 'Only ___ I saw the photos did I understand.', a: ['when', 'after', 'once'], why: '*Only when* + clause, then inversion.' },
      { q: 'At no ___ was anyone in danger.', a: ['time', 'point', 'stage'], why: '*At no time / point*.' },
      { q: 'I’m at a ___ and I need to choose a direction.', a: ['crossroads'], why: '*At a crossroads*.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Choose the word that best fits each gap.', items: [
      { q: 'After a long discussion, the committee finally ___ a decision.', o: ['reached', 'did', 'got', 'came'], why: '*Reach a decision*.' },
      { q: 'He had a change of ___ and withdrew his resignation.', o: ['heart', 'mood', 'feeling', 'spirit'], why: '*A change of heart*.' },
      { q: 'The invention ___ the way for modern computing.', o: ['paved', 'laid', 'cleaned', 'set'], why: '*Pave the way for*.' },
      { q: 'The country ___ sweeping changes in the 1990s.', o: ['underwent', 'suffered from', 'passed', 'made'], why: '*Undergo change*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Only when the lights went out [we realised] what had happened.', a: ['did we realise', 'did we realize'], why: 'Inversion in the main clause.' },
      { s: 'So tired [I was] that I fell asleep at my desk.', a: ['was I'], why: '*So* + adjective + *was I*.' },
      { s: 'We finally decided to [make] the plunge.', a: ['take'], why: '*Take the plunge*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the idiom and its meaning.', pairs: [
      ['burn your bridges', 'make going back impossible'],
      ['have second thoughts', 'start to doubt a decision'],
      ['the point of no return', 'the moment you cannot turn back'],
      ['sit on the fence', 'refuse to choose'],
    ] },
  ],
};
