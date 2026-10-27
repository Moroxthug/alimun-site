// English C1 for moving abroad, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'The small print',
  goal: 'Read contracts closely, spot conditions and exceptions, and query terms before you sign.',
  art: 'owl',
  tags: { skills: ['reading', 'vocabulary', 'grammar', 'speaking'], topics: ['contracts', 'conditions', 'exceptions', 'legal-language', 'negotiating', 'tentative-requests'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Conditions and exceptions',
      about: 'Understand the words that limit, extend or cancel what a contract seems to promise.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'When you move abroad, you sign a lot of contracts: for a flat, a phone, insurance, a gym, a job. The headline promise is usually clear. The **small print** is where the conditions and exceptions are, and a single phrase can change the meaning of a whole clause.\n\nAt C1 the aim is not only to understand each word, but to see **how far** a promise really goes: always, only if something happens, or except in certain cases.' },
          { t: 'examples', items: [
            { s: 'The deposit will be returned in full, **provided that** the property is left in its original condition.', n: '*Provided that* (or *providing*) means *only if*. The promise depends on the condition.' },
            { s: 'All bookings are **subject to** availability.', n: '*Subject to* + noun: it depends on this. Here, they may not have a place for you.' },
            { s: '**In the event of** a late payment, a fee of £25 will be charged.', n: '*In the event of* + noun means *if this happens*. It is common for problems and emergencies.' },
            { s: '**Notwithstanding** clause 6, either party may end the agreement with one month’s notice.', n: '*Notwithstanding* means *despite* or *in spite of*. This clause applies even though clause 6 seems to say something else.' },
            { s: '**Unless otherwise agreed in writing**, the contract renews automatically each year.', n: 'This is the rule unless you and the other side have agreed something different on paper.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Small words that change the meaning', explain: ['head', 'col1'], quiz: true, head: ['Phrase', 'What it does'], rows: [
            ['provided that / providing', 'a condition: only if this is true'],
            ['subject to', 'it depends on something, such as approval or availability'],
            ['in the event of', 'what happens if something goes wrong'],
            ['notwithstanding', 'this clause applies even if another one seems to disagree'],
            ['including but not limited to', 'the list is only examples, not complete'],
            ['at our discretion', 'the company decides; you have no right to it'],
            ['save for / except for', 'an exception to the rule'],
          ] },
          { t: 'tip', art: 'owl', md: 'Be careful with *at our discretion* and *may*. *We may offer a refund* means they *can* choose to, not that they *will*. Compare this with *we will refund*, which is a promise.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What does the clause really promise?', items: [
            { q: '“Upgrades are offered at the provider’s discretion.”', o: ['The provider decides whether to give you an upgrade.', 'You can ask for an upgrade whenever you want.', 'The provider must give you an upgrade every year.'], why: '*At someone’s discretion* means it is their free choice, not your right.' },
            { q: '“Your cover includes, but is not limited to, theft, fire and flood.”', o: ['These are examples; other events may also be covered.', 'Only theft, fire and flood are covered.', 'Theft, fire and flood are not covered.'], why: '*Including but not limited to* tells you the list is not complete.' },
            { q: '“The discount applies for twelve months, subject to continued membership.”', o: ['You keep the discount only while you remain a member.', 'You lose the discount after you join.', 'The discount lasts forever.'], why: '*Subject to* + noun: the discount depends on it.' },
            { q: '“Save for the first month, rent is payable in advance on the first day of each month.”', o: ['There is a different rule for the first month only.', 'The first month is free.', 'Rent is never paid in advance.'], why: '*Save for* means *except for*. The clause tells you the first month is an exception, but not what the other rule is.' },
            { q: '“Notwithstanding the above, the landlord may enter the property without notice in an emergency.”', o: ['Even though an earlier clause says he must give notice, he can come in at once in an emergency.', 'The landlord can never enter without notice.', 'The landlord must give notice even in an emergency.'], why: '*Notwithstanding the above* means this rule applies despite what was said before.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the phrase that fits the clause.', items: [
            { q: '___ a fire, leave the building by the nearest exit.', o: ['In the event of', 'Provided that', 'Subject to'], why: '*In the event of* + noun, for something that might go wrong.' },
            { q: 'Your offer is ___ satisfactory references.', o: ['subject to', 'in the event of', 'notwithstanding'], why: 'The job offer depends on good references: *subject to*.' },
            { q: 'You may keep a small pet, ___ it does not disturb the neighbours.', o: ['provided that', 'notwithstanding', 'in the event of'], why: '*Provided that* + clause: the condition you must meet.' },
            { q: '___ otherwise agreed, the notice period is two months.', o: ['Unless', 'Provided', 'Subject'], why: 'The fixed phrase is *unless otherwise agreed*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the contract term and its meaning.', pairs: [
            ['liable', 'legally responsible for paying or fixing something'],
            ['waive a fee', 'decide not to charge it'],
            ['breach of contract', 'breaking one of the terms'],
            ['cooling-off period', 'a short time when you can cancel without a penalty'],
            ['early termination fee', 'what you pay if you end the contract early'],
            ['auto-renewal', 'the contract continues unless you cancel it'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence in contract style, starting with the words given.', items: [
            { q: 'If there is a delay, we will tell you by email.', cue: 'In the event of', a: ['In the event of a delay, we will tell you by email.', 'In the event of a delay, we will inform you by email.', 'In the event of any delay, we will tell you by email.'], why: '*In the event of* is followed by a noun, here *a delay*.' },
            { q: 'You can sublet the room, but only if the landlord agrees in writing.', cue: 'You can sublet the room provided that', a: ['You can sublet the room provided that the landlord agrees in writing.', 'You can sublet the room provided that the landlord agrees to it in writing.'], why: '*Provided that* + clause gives the condition.' },
            { q: 'Whether you get a refund depends on the manager approving it.', cue: 'Refunds are subject to', a: ['Refunds are subject to the manager’s approval.', 'Refunds are subject to approval by the manager.', 'Refunds are subject to the approval of the manager.'], why: '*Subject to* + noun: *approval* is the noun of *approve*.' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Which phrase does not introduce a condition or an exception?', items: [
            { o: ['in good faith', 'provided that', 'save for', 'unless'], why: '*In good faith* means honestly. The others limit when a rule applies.' },
            { o: ['in full', 'subject to', 'on condition that', 'as long as'], why: '*In full* means completely. The others introduce a condition.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Before you sign',
      about: 'Query a clause and ask for a change tentatively but clearly.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Most contracts can be discussed before you sign, even if they look final. At C1 you can query a term without sounding suspicious and suggest a change without sounding demanding. The secret is **tentative** language: past forms, *wondering*, *would* and *might* make a request softer, while the facts stay precise.' },
          { t: 'examples', items: [
            { s: '**I’d like to query** clause 7, on the early termination fee.', n: '*Query* means ask about something you are not sure is correct. Naming the clause keeps it precise.' },
            { s: '**Am I right in thinking that** the contract renews automatically?', n: 'A careful way to check your understanding, more formal than *Is it true that…?*' },
            { s: '**I was wondering whether** the fee **could** be waived if I find a new tenant.', n: 'The past continuous and *could* make the request tentative.' },
            { s: '**Would you be open to** a six-month break clause?', n: '*Be open to* + noun or *-ing*: be willing to consider. A *break clause* lets you end a contract early.' },
            { s: '**I’m not entirely comfortable with** the wording of this paragraph.', n: 'Understatement: a polite way of saying *I don’t accept this*.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'At the letting agency', lines: [
            { who: 'Priya', s: 'Before I sign, I’d like to query a couple of points, if that’s all right.' },
            { who: 'Owen', s: 'Of course. Go ahead.' },
            { who: 'Priya', s: 'Am I right in thinking that the tenancy is fixed for eighteen months, with no way of leaving early?' },
            { who: 'Owen', s: 'That’s the standard term, yes. If you leave early, you’d be liable for the rent until the end.' },
            { who: 'Priya', s: 'I see. The thing is, my job here is on a one-year contract. Would the landlord be open to a break clause after twelve months?' },
            { who: 'Owen', s: 'It’s not something he usually agrees to, but I can certainly ask him.' },
            { who: 'Priya', s: 'I’d appreciate that. And I was wondering whether the cleaning fee at the end is negotiable, given that the flat hasn’t been professionally cleaned yet.' },
            { who: 'Owen', s: 'That’s a fair point. Leave it with me, and I’ll come back to you on both before you commit.' },
          ] },
        ],
        [
          { t: 'text', md: 'Priya never says *no*. She checks facts (*Am I right in thinking…?*), gives a reason (*The thing is, …*) and links her request to a fact (*given that…*). Owen’s *Leave it with me* means *I will deal with it*. *Before you commit* means before you sign and are bound by the contract.' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Think about the conversation. True, false or not given?', items: [
            { q: 'The contract Priya has been offered lets her leave after twelve months.', a: 'f', why: 'It is fixed for eighteen months, *with no way of leaving early*. That is why she asks for a break clause.' },
            { q: 'Priya explains why she needs a shorter commitment.', a: 't', why: 'Her job is on a one-year contract.' },
            { q: 'Owen promises that the landlord will accept a break clause.', a: 'f', why: 'He says the landlord does not usually agree, but he will ask.' },
            { q: 'The landlord has rejected break clauses from other tenants.', a: 'ng', why: 'Owen says it is not something he usually agrees to, but we do not know about other tenants.' },
            { q: 'Owen thinks Priya’s point about the cleaning fee is reasonable.', a: 't', why: '*That’s a fair point.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Would you be open to [reduce] the deposit?', a: ['reducing'], why: '*Be open to* is followed by a noun or *-ing*, because *to* is a preposition here.' },
            { s: 'Am I right in [think] that the price includes water?', a: ['thinking'], why: 'After the preposition *in*, use *-ing*: *right in thinking*.' },
            { s: 'I was wondering [that] the fee could be waived.', a: ['whether', 'if'], why: '*Wonder* is followed by *whether* or *if*, not *that*.' },
            { s: 'I’d like to [query about] clause 4.', a: ['query'], why: '*Query* takes a direct object: *query clause 4*. We say *ask about*, but *query* without *about*.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the sentence. Two words do not belong.', items: [
            { a: 'I was wondering whether the start date could be moved.', extra: ['that', 'can'], why: '*Wondering whether* + *could*: past forms keep the request tentative.' },
            { a: 'Would the landlord be open to a shorter contract?', extra: ['opening', 'for'], why: '*Be open to* + noun.' },
            { a: 'I’m not entirely comfortable with this clause.', extra: ['about', 'totally'], why: '*Comfortable with*; *not entirely* is the usual softener.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Complete the email to the employer with the words from the bank.', extra: ['demand', 'insist'], items: [
            { q: 'Thank you for the contract. Before I sign, I would like to ___ two points.', a: 'query', why: '*Query* a point: ask about it because you are not sure.' },
            { q: 'Am I right in ___ that relocation costs are paid only after probation?', a: 'thinking', why: 'The fixed phrase is *Am I right in thinking that…?*' },
            { q: 'If so, I was ___ whether part of them could be paid on arrival.', a: 'wondering', why: '*I was wondering whether…* is a tentative request.' },
            { q: 'I would also be ___ to a later start date if that helps with planning.', a: 'open', why: '*Be open to*: be willing to consider.' },
            { q: 'I look forward to hearing from you ___ I commit.', a: 'before', why: '*Before I commit*: before I sign and am bound.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Read it before you sign it',
      about: 'Read an article on the traps hidden in everyday contracts.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'reading', title: 'Read it before you sign it', md: 'Few of us read every word of a contract. When you have just arrived in a new country, with a flat to secure and a phone to connect, the temptation to scroll to the bottom and click *I agree* is understandable. Yet it is precisely when you are new, and least familiar with local practice, that the small print matters most.\n\nThe first trap is the **automatic renewal**. Many service contracts, from mobile plans to gym memberships, continue indefinitely unless you cancel them, and the cancellation window may be surprisingly narrow. A clause stating that notice must be given *no later than thirty days before the renewal date* is easy to overlook and expensive to miss.\n\nThe second is the gap between what a company *may* do and what it *will* do. A brochure may speak warmly of refunds and upgrades, while the contract reserves them *at the company’s discretion*. Only a firm commitment in the contract itself, usually with *will* or *shall*, gives you a right you can rely on.\n\nThe third concerns exceptions. Insurance policies in particular tend to define what they cover generously and then, several pages later, list what they exclude. It is not unusual for the exclusions to matter more than the cover.\n\nNone of this means that companies are trying to deceive you. Contracts are written to protect the party that drafts them, and they are rarely written with newcomers in mind. The sensible response is to read slowly, ask about anything that is unclear, and keep a copy of everything you sign. If a term is genuinely unacceptable, it is worth asking whether it can be changed: the worst you will hear is no.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the article. True, false or not given?', items: [
            { q: 'The writer thinks newcomers have a particular reason to read contracts carefully.', a: 't', why: '*It is precisely when you are new… that the small print matters most.*' },
            { q: 'Automatic renewals usually give you a long time to cancel.', a: 'f', why: 'The cancellation window *may be surprisingly narrow*.' },
            { q: 'A promise in a brochure gives you the same rights as the contract.', a: 'f', why: '*Only a firm commitment in the contract itself… gives you a right you can rely on.*' },
            { q: 'Most insurance claims are refused because of exclusions.', a: 'ng', why: 'The writer says exclusions can matter more than the cover, but gives no figures about claims.' },
            { q: 'The writer believes that most companies want to trick their customers.', a: 'f', why: '*None of this means that companies are trying to deceive you.*' },
            { q: 'The writer suggests that asking for a change costs you very little.', a: 't', why: '*The worst you will hear is no.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language of the article.', items: [
            { q: 'What does “the temptation… is understandable” suggest about the writer’s attitude?', o: ['He is sympathetic to readers who do not read contracts.', 'He is angry with readers who do not read contracts.', 'He thinks reading contracts is unnecessary.'], why: '*Understandable* shows sympathy, even though he goes on to advise against it.' },
            { q: '“It is precisely when you are new… that the small print matters most.” What structure is this?', o: ['An it-cleft that puts the focus on *when you are new*.', 'A conditional sentence.', 'A passive reporting structure.'], why: '*It is* + focus + *that* … is an it-cleft. *Precisely* adds emphasis.' },
            { q: '“Easy to overlook and expensive to miss.” What does *overlook* mean here?', o: ['Fail to notice.', 'Look at carefully.', 'Look down on.'], why: '*Overlook* something means not notice it.' },
            { q: 'Why does the writer say contracts are “rarely written with newcomers in mind”?', o: ['They assume the reader already knows how things work locally.', 'They are written only for newcomers.', 'Newcomers are not allowed to sign them.'], why: '*With someone in mind*: thinking of them. The writer means contracts assume local knowledge.' },
          ] },
          { t: 'ex', kind: 'wordform', h: 'Complete with the correct form of the word in capitals.', items: [
            { q: 'Most service contracts continue ___ unless you cancel them.', base: 'DEFINITE', a: ['indefinitely'], why: '*Indefinitely*: without a fixed end. Prefix *in-* and adverb ending *-ly*.' },
            { q: 'The policy lists several ___ on page nine.', base: 'EXCLUDE', a: ['exclusions'], why: 'The noun is *exclusion*, here plural.' },
            { q: 'Read the ___ terms before you sign.', base: 'CANCEL', a: ['cancellation'], why: '*Cancellation terms*: the noun *cancellation* used like an adjective. British English spells it with *ll*.' },
            { q: 'A brochure is not a legally ___ document.', base: 'BIND', a: ['binding'], why: '*Legally binding*: it creates obligations in law.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: '___ a dispute, both parties agree to try mediation first.', o: ['In the event of', 'Provided that', 'Notwithstanding that'], why: '*In the event of* + noun: if this happens.' },
      { q: '“Refunds may be offered at our discretion.” This means: ___', o: ['The company decides whether to give a refund.', 'You always get a refund.', 'You never get a refund.'], why: '*May* and *at our discretion*: it is their choice.' },
      { q: 'A short time after signing when you can cancel without a penalty is a ___.', o: ['cooling-off period', 'notice period', 'break clause'], why: 'That is the *cooling-off period*.' },
      { q: 'Would you be open to ___ the contract to twelve months?', o: ['shortening', 'shorten', 'shortened'], why: '*Be open to* + *-ing*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete with one word.', items: [
      { q: 'The offer is ___ to a satisfactory credit check.', a: ['subject'], why: '*Subject to*: it depends on this.' },
      { q: 'Am I right in ___ that the price includes internet?', a: ['thinking'], why: '*Am I right in thinking that…?*' },
      { q: 'If you break a term of the contract, you are in ___ of contract.', a: ['breach'], why: '*Breach of contract*: breaking a term.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence, starting with the words given.', items: [
      { q: 'You can have the deposit back only if the flat is clean.', cue: 'You can have the deposit back provided that', a: ['You can have the deposit back provided that the flat is clean.'], why: '*Provided that* + clause: only if.' },
      { q: 'I want to ask about clause 3.', cue: 'I’d like to query', a: ['I’d like to query clause 3.', 'I would like to query clause 3.'], why: '*Query* takes a direct object, without *about*.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: '*Including but not limited to* means the list is complete.', a: 'f', why: 'It means the list gives only examples.' },
      { q: 'If a company waives a fee, you do not have to pay it.', a: 't', why: '*Waive* a fee: decide not to charge it.' },
      { q: '*Notwithstanding* means *because of*.', a: 'f', why: 'It means *despite*.' },
    ] },
  ],
};
