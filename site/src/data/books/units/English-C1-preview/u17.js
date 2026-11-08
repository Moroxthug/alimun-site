// English C1, unit 17, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Law and fairness: the subjunctive and formal obligation, modals and semi-modals in rules and contracts, the language
// of justice and rights, and four views on a new law. Exam tasks in the format of C1 Advanced.
export const UNIT = {
  id: 'u17',
  title: 'Law and fairness',
  goal: 'Make formal demands and recommendations with the subjunctive, read and write rules and contracts with the right modals, talk about justice and rights with precise collocations, and compare four writers’ views on a new law.',
  art: 'dog',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'speaking', 'writing'], topics: ['subjunctive', 'obligation', 'formal-modals', 'law', 'justice', 'rights', 'cross-text-matching'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'It is essential that he be informed',
      about: 'Use the subjunctive after verbs and adjectives of demand and necessity, and the semi-modals of formal obligation: be required to, be entitled to, be obliged to.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'At B2 you met the subjunctive in *if I were you* and *I wish it were*. At C1 you need its other use, the one that fills legal, official and academic English: the **mandative subjunctive**. After words that express a **demand, a requirement or a recommendation**, the verb in the *that* clause is the **base form**, for every person and every time.\n\n*The judge insisted that the witness **speak** more clearly.* (not *speaks*, not *spoke*)\n*It is essential that every applicant **be** interviewed.* (not *is*, not *was*)\n\nWhy the base form? The *that* clause does not describe a fact. It describes something that **should happen** but has not happened yet. The base form has no tense and no *-s*, so it shows that the action is wanted, not real. That is also why it does not move back into the past: *They demanded that she **leave*** is correct even though *demanded* is past.' },
          { t: 'table', caption: 'Words that trigger the subjunctive', explain: ['head', 'col0'], head: ['Kind of word', 'Examples', 'In a sentence'], rows: [
            ['verbs', 'insist, demand, require, request, recommend, propose, suggest, urge, stipulate', 'The contract stipulates that the work be finished by May.'],
            ['adjectives', 'essential, vital, crucial, imperative, important, advisable, necessary', 'It is imperative that the data remain confidential.'],
            ['nouns', 'the requirement that, the recommendation that, the proposal that, on condition that', 'They accepted on condition that the decision be reviewed.'],
          ] },
          { t: 'tip', art: 'owl', md: 'The negative has **no do**: put *not* before the base form. *The board recommends that the plan **not be** approved.* *We ask that visitors **not touch** the exhibits.*' },
        ],
        [
          { t: 'text', md: 'British English has two other ways to say the same thing. **Should + base form** is very common and slightly less formal: *It is essential that he **should be** informed.* Relaxed British speech even uses the present (*I insist that he **comes***), but in formal writing choose the subjunctive or *should*.\n\nWatch for a change of meaning with *insist* and *suggest*. With the subjunctive they **demand** or **propose** something. With an ordinary tense they **state a fact** or **imply** it.\n\n*She insisted that he **be** released.* (She demanded his release.)\n*She insisted that he **was** innocent.* (She said firmly that it was true.)\n*The report suggests that the rule **be** changed.* (It proposes a change.)\n*The evidence suggests that the rule **was** ignored.* (It shows that this probably happened.)' },
          { t: 'examples', items: [
            { s: 'The union is demanding that every worker **receive** a written contract.', n: 'Base form *receive*, not *receives*.' },
            { s: 'It is vital that the victims **be kept** informed at every stage.', n: 'Passive subjunctive: *be* + past participle.' },
            { s: 'We strongly recommend that tenants **not sign** anything without advice.', n: 'Negative: *not* + base form, no *do*.' },
            { s: 'He was adamant that the money **had been** paid.', n: 'A fact he asserts, so an ordinary tense.' },
            { s: '**Be that as it may**, the rule still applies.', n: 'A fixed subjunctive phrase: *even if that is true*.' },
          ] },
        ],
        [
          { t: 'text', md: 'Formal texts also express obligation and rights with **be + adjective or past participle + to**. These are more precise than *must* and *can*, and they appear constantly in contracts, rules and official letters.\n\n*Be required to* means an official rule says you must, while *be obliged to* means you have no choice, by law or by duty, and *be expected to* is softer: people assume you will. *Be entitled to* gives a right, *be exempt from* says the rule does not apply to you, and *be liable for* makes you legally responsible for a cost or damage.' },
          { t: 'examples', items: [
            { s: 'All visitors **are required to** sign in at reception.', n: 'An official rule.' },
            { s: 'Employees **are entitled to** twenty-eight days’ paid leave.', n: 'A right: *entitled to* + noun or verb.' },
            { s: 'Students over sixty-five **are exempt from** the fee.', n: '*Exempt from*, never *of*.' },
            { s: 'The owner **is liable for** any damage caused by the dog.', n: 'Legally responsible for.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['They demanded that she leaves.', 'They demanded that she leave.', 'Subjunctive: base form for every person.'],
            ['It was essential that he was told.', 'It was essential that he be told.', 'No backshift: the base form has no tense.'],
            ['We recommend that he doesn’t sign.', 'We recommend that he not sign.', 'No *do* in the subjunctive negative.'],
            ['You are entitled for a refund.', 'You are entitled to a refund.', '*Entitled to*.'],
            ['She is required attending.', 'She is required to attend.', '*Be required to* + infinitive.'],
          ] },
          { t: 'dialogue', title: 'At the tenants’ advice centre', lines: [
            { who: 'Daniel', s: 'My landlord insists that I pay for the new boiler. Is he right?' },
            { who: 'Helen', s: 'Almost certainly not. Under your agreement, he’s obliged to keep the heating in good repair.' },
            { who: 'Daniel', s: 'He also demanded that I leave by the end of the month.' },
            { who: 'Helen', s: 'He can’t simply demand that. You’re entitled to two months’ written notice.' },
            { who: 'Helen', s: 'I’d recommend that you not reply until we’ve seen the contract. It’s essential that everything be in writing.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the form that fits a formal text.', items: [
            { q: 'The inspector recommended that the factory ___ closed immediately.', o: ['be', 'is', 'was'], why: 'A recommendation: subjunctive *be*.' },
            { q: 'It is crucial that every voter ___ a fair chance to be heard.', o: ['have', 'has', 'had'], why: 'Base form *have*, even after *every voter*.' },
            { q: 'The witness insisted that she ___ the man before.', o: ['had never seen', 'never see', 'not see'], why: 'She asserts a fact, so an ordinary tense.' },
            { q: 'The lawyer urged that his client ___ held in custody.', o: ['not be', 'is not', 'does not be'], why: 'Negative subjunctive: *not be*.' },
            { q: 'Pensioners are ___ from the new charge.', o: ['exempt', 'entitled', 'eligible'], why: '*Exempt from*; *entitled to*, *eligible for*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 2): write one word in each gap. The sentences make one short text.', items: [
            { q: 'The new code requires that every employer ___ a written policy on working hours.', a: ['publish', 'produce', 'adopt', 'have'], why: 'Subjunctive after *requires that*: a base form.' },
            { q: 'Staff are also entitled ___ request flexible hours after six months.', a: ['to'], why: '*Entitled to* + infinitive.' },
            { q: 'It is essential that such requests ___ treated fairly.', a: ['be'], why: 'Passive subjunctive: *be treated*.' },
            { q: 'Employers who refuse will be obliged to explain ___ in writing.', a: ['why', 'themselves'], why: '*Explain why* (the reason) or *explain themselves*.' },
            { q: 'Small firms are not exempt ___ these rules.', a: ['from'], why: '*Exempt from*.' },
            { q: 'The government has insisted that the code ___ be watered down.', a: ['not'], why: 'Negative subjunctive: *not be*.' },
          ] },
        ],
        [
          { t: 'text', md: 'Now say three things you think should be required of a good landlord, employer or school, using the patterns of this lesson. For example: *It is essential that a landlord **respond** to repairs within a week. Tenants should **be entitled to** see the safety certificate.*' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'It is essential that everything be in writing.' },
            { a: 'The judge insisted that the witness speak more clearly.' },
            { a: 'You are entitled to two months’ written notice.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'The tenant shall not',
      about: 'Read and write rules and contracts: shall, may, must not, is not to, is under no obligation to.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Contracts and official notices use modals in ways you rarely hear in conversation, and one modal can be the difference between a right and a duty.\n\n**Shall** in a contract means a legal duty: *The tenant **shall** pay the rent on the first day of each month.* In everyday British English, *shall* survives mainly in offers and suggestions (*Shall I open the window?*), so do not use the contract meaning in conversation.\n\n**May** in a rule gives permission, and **may not** takes it away: *Residents **may** use the garden. Pets **may not** be kept in the flat.* In other texts, *may* means possibility, so read the context.\n\n**Is to** and **is not to** give an instruction from someone in authority: *The door **is to** be kept closed. Candidates **are not to** leave the room during the first hour.*' },
          { t: 'table', caption: 'Obligation, permission and the absence of obligation', explain: ['head', 'col1'], head: ['Form', 'Meaning', 'Example'], rows: [
            ['shall / shall not', 'a duty or prohibition in a contract', 'The supplier shall not disclose the client’s data.'],
            ['must / must not', 'a strong obligation or prohibition', 'Fire exits must not be blocked.'],
            ['is to / is not to', 'an instruction from authority', 'This form is to be returned within ten days.'],
            ['may / may not', 'formal permission or its refusal', 'Visitors may not take photographs.'],
            ['is prohibited from / is permitted to', 'formal prohibition or permission', 'Members are prohibited from smoking on the premises.'],
            ['need not / is not required to', 'no obligation', 'You need not attend in person.'],
            ['is under no obligation to', 'no obligation, firmly stated', 'The company is under no obligation to refund the deposit.'],
          ] },
        ],
        [
          { t: 'text', md: 'The most dangerous confusion is between **must not** and **need not**. *Must not* means it is forbidden. *Need not*, *is not required to* and *is under no obligation to* mean you have a free choice. *You **must not** sign the form* and *You **are under no obligation to** sign the form* are completely different messages.\n\nFormal rules also prefer the **passive** and **impersonal subjects**: *Late applications **will not be accepted**. Smoking **is prohibited**. It **is forbidden to** feed the animals.*' },
          { t: 'examples', items: [
            { s: 'The landlord **shall** carry out all structural repairs.', n: 'A legal duty in a contract.' },
            { s: 'Guests **may not** bring food into the pool area.', n: 'Permission refused.' },
            { s: 'Under no circumstances **is** this door **to** be left open.', n: 'Instruction from authority, with emphatic inversion.' },
            { s: 'You **are under no obligation to** buy anything.', n: 'A free choice, firmly stated.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['You mustn’t pay now, you can pay later.', 'You needn’t pay now; you can pay later.', '*Must not* forbids; *need not* gives a choice.'],
            ['The tenant shall to pay.', 'The tenant shall pay.', 'Modals take the base form with no *to*.'],
            ['It is prohibited to smoke.', 'Smoking is prohibited.', '*Prohibited*: noun or *-ing* as subject, or *prohibited from*.'],
            ['The form is not be removed.', 'The form is not to be removed.', '*Is not to* + infinitive.'],
          ] },
          { t: 'reading', title: 'From a tenancy agreement', md: '**Rent.** The Tenant shall pay the rent in advance on the first day of each month. The Landlord is under no obligation to accept payment in cash.\n\n**Repairs.** The Landlord shall keep the structure, the heating and the water supply in good repair. The Tenant shall report any damage within seven days and shall not carry out repairs without the Landlord’s written consent.\n\n**Use of the property.** The Tenant may keep one small pet with the Landlord’s permission. The property is not to be used for business purposes. Smoking is prohibited inside the building.\n\n**Access.** The Landlord may enter the property to inspect it, provided that the Tenant is given at least twenty-four hours’ notice. In an emergency, notice need not be given.' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Read the agreement. Are the sentences true, false or not given?', ng: true, items: [
            { q: 'The tenant can insist on paying the rent in cash.', a: 'f', why: 'The landlord *is under no obligation to accept payment in cash*.' },
            { q: 'The tenant is allowed to fix a broken window without asking.', a: 'f', why: 'The tenant *shall not carry out repairs without the Landlord’s written consent*.' },
            { q: 'The tenant may work from home on a laptop.', a: 'ng', why: 'Business use is not allowed, but the text does not say whether working from home counts.' },
            { q: 'In an emergency, the landlord can enter without warning.', a: 't', why: '*In an emergency, notice need not be given.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. Use between three and six words, including the word given.', items: [
            { q: 'Nobody can force you to sign the agreement.', cue: 'OBLIGATION', a: ['You are under no obligation to sign the agreement.', 'You’re under no obligation to sign the agreement.'], why: '*Be under no obligation to*: five words.' },
            { q: 'Passengers must not leave their luggage unattended.', cue: 'TO', a: ['Luggage is not to be left unattended.', 'Passengers’ luggage is not to be left unattended.'], why: 'Instruction from authority in the passive: *is not to be left*.' },
            { q: 'The rules say that every member has to attend the annual meeting.', cue: 'REQUIRED', a: ['Every member is required to attend the annual meeting.', 'The rules say that every member is required to attend the annual meeting.'], why: '*Be required to* + infinitive.' },
            { q: '“You really must see a lawyer before you sign,” my father told me.', cue: 'INSISTED', a: ['My father insisted that I see a lawyer before I signed.', 'My father insisted that I should see a lawyer before I signed.', 'My father insisted on my seeing a lawyer before I signed.', 'My father insisted on me seeing a lawyer before I signed.'], why: 'Subjunctive after *insist that*, or *insist on* + *-ing*.' },
            { q: 'It is vital to tell the witnesses what their rights are.', cue: 'BE', a: ['It is vital that the witnesses be told what their rights are.', 'It is vital that the witnesses be informed of their rights.', 'It is vital that the witnesses be told their rights.'], why: 'Passive subjunctive: *that the witnesses be told*.' },
            { q: 'You don’t have to come to the hearing in person.', cue: 'NEED', a: ['You need not come to the hearing in person.', 'You needn’t come to the hearing in person.', 'You do not need to come to the hearing in person.', 'You don’t need to come to the hearing in person.'], why: '*Need not*: no obligation.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In C1 Advanced Part 4 you use **three to six words**, including the key word, and each item has **two marks**. Contractions count as two words, so *needn’t come* is three words. Check that your sentence keeps **exactly** the same meaning: *must not* and *need not* are not interchangeable.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'The tenant shall report any damage within seven days.' },
            { a: 'This form is not to be removed from the building.' },
            { a: 'You are under no obligation to sign anything today.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Uphold the law',
      about: 'Talk precisely about justice and rights: a fair trial, a loophole, be held accountable, uphold the law.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'At C1, talking about the law is less about single words like *judge* and *court* and more about the **collocations** that carry precise meaning. A crime is **committed**, a law is **passed** and then **enforced** or **upheld**, a person **stands trial**, is **found guilty** or **acquitted**, and may **appeal against** a verdict.\n\nMuch of this language is also used outside the courtroom, about fairness in general: a company can be **held accountable**, a politician can **exploit a loophole**, a decision can **set a precedent**.' },
          { t: 'table', caption: 'Collocations of justice', explain: ['head', 'col0'], head: ['Area', 'Collocations', 'Example'], rows: [
            ['making and applying laws', 'pass, enforce, uphold, comply with, abide by, be in breach of', 'Every company must comply with the new rules.'],
            ['in court', 'stand trial, bring a case against, find someone guilty, acquit, sentence someone to', 'He was sentenced to two years in prison.'],
            ['after a verdict', 'appeal against, overturn a verdict, a miscarriage of justice, a landmark ruling', 'The verdict was overturned on appeal.'],
            ['fairness', 'a fair trial, due process, the rule of law, the burden of proof, beyond reasonable doubt', 'Guilt must be proved beyond reasonable doubt.'],
            ['responsibility', 'be held accountable for, take legal action, exploit a loophole, set a precedent', 'The ruling set a precedent for similar cases.'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'The firm **exploited a loophole** in the tax law.', n: 'A gap in a law that lets people avoid it legally.' },
            { s: 'Ministers must **be held accountable for** their decisions.', n: 'Made to explain and accept responsibility.' },
            { s: 'The courts exist to **uphold the law**, not to make it.', n: 'Support and maintain it.' },
            { s: 'She was **acquitted** of all charges.', n: 'Found not guilty; *acquitted of*.' },
            { s: 'The **burden of proof** lies with the prosecution.', n: 'The side that must prove its case.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['He made a crime.', 'He committed a crime.', 'We *commit* crimes and offences.'],
            ['She was judged guilty.', 'She was found guilty.', 'Juries and courts *find* someone guilty.'],
            ['He was sentenced for five years.', 'He was sentenced to five years.', '*Sentenced to* a punishment.'],
            ['They were held accountable of the losses.', 'They were held accountable for the losses.', '*Accountable for*.'],
            ['The company didn’t respect with the rules.', 'The company didn’t comply with the rules.', '*Comply with*; *respect* has no preposition.'],
          ] },
          { t: 'dialogue', title: 'After the documentary', lines: [
            { who: 'Priya', s: 'I can’t believe he spent eleven years in prison for something he didn’t do.' },
            { who: 'Owen', s: 'A textbook miscarriage of justice. The burden of proof was on the prosecution, and they simply didn’t meet it.' },
            { who: 'Priya', s: 'And when the verdict was finally overturned, nobody was held accountable.' },
            { who: 'Owen', s: 'That’s what worries me. If the system can’t admit its mistakes, how can it claim to uphold the law?' },
          ] },
        ],
        [
          { t: 'ex', kind: 'colloc', h: 'Which words go naturally with the key word?', items: [
            { key: 'commit', o: ['a crime', 'an offence', 'a trial', 'perjury', 'a verdict'], a: [0, 1, 3], why: 'We *commit* crimes, offences and perjury; we *stand trial* and *reach a verdict*.' },
            { key: 'uphold', o: ['the law', 'a complaint', 'a loophole', 'a decision', 'a crime'], a: [0, 1, 3], why: 'Courts *uphold* the law, a complaint or a decision; people *exploit* loopholes.' },
            { key: 'bring', o: ['a case against', 'charges against', 'guilty', 'someone to justice'], a: [0, 1, 3], why: '*Bring a case, bring charges, bring someone to justice*; but *find someone guilty*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 3): use the word in capitals to form a word that fits the gap.', items: [
            { q: 'The public demanded greater ___ from the police after the scandal.', base: 'account', a: ['accountability'], why: 'Noun from *accountable*: *accountability*.' },
            { q: 'Strict ___ of the new rules will begin in January.', base: 'force', a: ['enforcement'], why: 'Prefix and suffix: *en-force-ment*.' },
            { q: 'Judges are expected to remain completely ___.', base: 'part', a: ['impartial'], why: 'Not favouring either side: *impartial*.' },
            { q: 'Failure to pay was treated as a serious ___ of the agreement.', base: 'violate', a: ['violation'], why: 'Noun: *violation*.' },
            { q: 'The new ___ will protect workers on short contracts.', base: 'legislate', a: ['legislation'], why: 'Uncountable noun for laws: *legislation*.' },
            { q: 'Full ___ with the safety code is compulsory.', base: 'comply', a: ['compliance'], why: '*Comply* → *compliance*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Part 3 at C1 often needs **two changes**: a prefix and a suffix (*force → enforcement*), or a change inside the word (*comply → compliance*, *defend → defence*). Read the whole sentence: the meaning tells you if the word must be negative.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'Everyone has the right to a fair trial.' },
            { a: 'The verdict was overturned on appeal.' },
            { a: 'Those responsible must be held accountable.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'Four views on a new law',
      about: 'Compare four writers’ opinions on compulsory voting, then discuss how governments change behaviour.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'In C1 Advanced Reading and Use of English Part 6 you read **four short texts by different writers** on the same subject. The questions do not ask what one writer thinks. They ask how the writers **relate to each other**: *Which writer shares writer A’s view on…?* *Which writer has a different opinion from the others on…?*\n\nRead all four texts once for each writer’s general position, then take one **issue** at a time and find what every writer says about it. Writers rarely say *I agree with A*; they use **concession** (*admittedly, granted, while it is true that*) and **contrast** (*yet, nevertheless, that said*), so watch those words.\n\nThe four texts below discuss a new law that makes voting in national elections compulsory, with a small fine for those who do not vote without a valid reason.' },
          { t: 'reading', title: 'Compulsory voting: four views', md: '**A.** Turnout has been falling for years, and a government elected by a minority of citizens can hardly claim to speak for the nation. A law that brings almost everyone to the polling station gives the result a legitimacy it currently lacks. Nor do I accept that it is an attack on freedom: we already require people to serve on juries and to fill in the census, and voting is no greater burden. My one reservation concerns the fine. A fixed sum is trivial for the wealthy and painful for those on low incomes, so it ought to be linked to what people earn. Over time, I suspect, people who are obliged to vote will start paying attention to what they are voting for.\n\n**B.** The right to vote surely includes the right not to. A state that fines its citizens for staying at home on election day has quietly turned a freedom into a duty, and I find that troubling. Supporters claim that compulsion will create a better informed electorate, but I see no reason why it should. People forced to the ballot box against their will are more likely to tick a box at random than to study the manifestos. A high turnout produced in this way tells us nothing about public consent. And a flat fine, as ever, hits hardest those who can least afford it.\n\n**C.** Critics who call the law authoritarian overstate their case. No one is forced to choose a candidate; anyone who objects can spoil their ballot paper, so freedom of conscience is untouched. I also share the view that a government chosen by most of the population stands on firmer ground than one chosen by a third of it. Where I part company with the law’s keenest supporters is on engagement. Simply making people turn up will not make them think, and without serious civic education in schools the new voters may be no better informed than before. As for the fine, it is modest enough to act as a reminder rather than a punishment, and I doubt it will cause real hardship.\n\n**D.** I have no philosophical objection to this law. Being asked to spend half an hour at a polling station every few years is hardly tyranny. My objection is practical. Collecting millions of small fines will cost more than it raises, and the people who end up in court will be those already struggling with debt. That said, I do expect the law to change attitudes. Once people know they have to vote, many will feel they ought to understand the choice in front of them, and newspapers and broadcasters will have every reason to explain it.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 6): choose from the writers A to D.', items: [
            { q: 'Which writer has a different view from the others on whether the law limits personal freedom?', o: ['Writer B', 'Writer A', 'Writer C', 'Writer D'], why: 'Only B sees a loss of freedom; A compares voting to jury service, C mentions spoiling the ballot, D says it is *hardly tyranny*.' },
            { q: 'Which writer shares writer B’s opinion about whether compulsion will make voters better informed?', o: ['Writer C', 'Writer A', 'Writer D'], why: 'C: *simply making people turn up will not make them think*. A and D expect people to pay more attention.' },
            { q: 'Which writer takes a different view from the others on the effect of the fine on poorer citizens?', o: ['Writer C', 'Writer A', 'Writer B', 'Writer D'], why: 'C thinks the fine will not *cause real hardship*; A, B and D all say it falls hardest on the poor.' },
            { q: 'Which writer shares writer A’s expectation that people will gradually take more interest in politics?', o: ['Writer D', 'Writer B', 'Writer C'], why: 'D: *many will feel they ought to understand the choice in front of them*.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **C1 Advanced Speaking Part 3** you and a partner discuss a question with five written prompts for about two minutes, then the examiner asks you to **make a decision** together in one more minute. There is no right answer. You are marked on how well you **develop ideas**, **respond to your partner** and **negotiate** towards a conclusion.\n\nThe question here is: *How effective are these ways of changing people’s behaviour?* The prompts are fines, bans, taxes, public information campaigns and rewards for good behaviour. Then: *Which two would be the most effective for reducing litter in towns?*' },
          { t: 'dialogue', title: 'Speaking Part 3: a model discussion', lines: [
            { who: 'Grace', s: 'Shall we start with fines? I’d say they work, but only if people genuinely believe they’ll be caught.' },
            { who: 'Tomasz', s: 'Exactly, and that’s the weakness. Enforcement is expensive, so a fine nobody collects is hardly a deterrent.' },
            { who: 'Grace', s: 'Whereas a ban is clearer. Although I suppose it can feel heavy-handed if the reason isn’t explained.' },
            { who: 'Tomasz', s: 'Fair enough. So for litter, shall we go for fines combined with a campaign?' },
            { who: 'Grace', s: 'I’d rather go for rewards and a campaign. Making the right thing easy seems more effective than punishing the wrong thing.' },
            { who: 'Tomasz', s: 'I can see the logic in that. Let’s agree on the campaign, then, and say we differ on the second.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Speaking Part 3): which reply is best?', items: [
            { q: 'Your partner says: “I think fines are the most effective option.” You…', o: ['Up to a point, but they only work if people expect to be caught.', 'Fines.', 'OK. Next one: taxes.'], why: 'React to the idea and develop it with a condition.' },
            { q: 'You want to bring your partner into the discussion. You say…', o: ['How do you see it?', 'I am right about this.', 'Now I will talk about bans.'], why: 'An open question invites your partner.' },
            { q: 'Time is nearly up and you disagree. You say…', o: ['Let’s agree on one, then, and say we differ on the other.', 'You are wrong, so we choose mine.', 'I don’t know.'], why: 'Negotiate a decision, even a partial one.' },
          ] },
          { t: 'table', caption: 'Common mistakes in Speaking Part 3', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Waiting silently while your partner speaks', 'Reacting: *Exactly, and…*, *I can see the logic in that.*', 'Interaction is marked.'],
            ['Agreeing with everything', 'Disagreeing politely, with a reason', 'Negotiation shows range.'],
          ] },
          { t: 'text', md: 'Writing for your teacher, in the format of **C1 Advanced Writing Part 1**: your class has discussed ways of changing behaviour. Write an essay of 220 to 260 words discussing **two** of the methods in the Part 3 task, explaining which one is more effective for society and giving reasons. Use at least one subjunctive (*it is essential that…*), one formal modal and three collocations from lesson 3. Your teacher will correct it.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'Critics who call the law authoritarian overstate their case.' },
            { a: 'Where I part company with its supporters is on engagement.' },
            { a: 'Let’s agree on the campaign, then, and say we differ on the second.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the correct form.', items: [
      { q: 'The panel recommended that the officer ___ suspended.', o: ['be', 'is', 'was'], why: 'Subjunctive after *recommended that*.' },
      { q: 'It is imperative that no one ___ the building before the police arrive.', o: ['leave', 'leaves', 'left'], why: 'Base form for every person.' },
      { q: 'The prisoner insisted that he ___ at home that night.', o: ['had been', 'be', 'not be'], why: 'A fact he asserts: an ordinary tense.' },
      { q: 'You ___ bring your passport; a driving licence is enough.', o: ['need not', 'must not', 'shall not'], why: 'No obligation: *need not*.' },
      { q: 'Children under five are ___ from the entrance fee.', o: ['exempt', 'entitled', 'liable'], why: '*Exempt from*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Complete the second sentence so that it has a similar meaning to the first, using the word given. Use three to six words.', items: [
      { q: 'Nobody is forcing you to buy the extended warranty.', cue: 'OBLIGATION', a: ['You are under no obligation to buy the extended warranty.', 'You’re under no obligation to buy the extended warranty.'], why: '*Be under no obligation to*.' },
      { q: 'Employees have the right to a written contract.', cue: 'ENTITLED', a: ['Employees are entitled to a written contract.'], why: '*Be entitled to*.' },
      { q: 'This door must be kept closed at all times.', cue: 'TO', a: ['This door is to be kept closed at all times.'], why: '*Is to be* + past participle.' },
      { q: 'It is essential to inform the families immediately.', cue: 'BE', a: ['It is essential that the families be informed immediately.'], why: 'Passive subjunctive.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'He was found guilty and sentenced ___ three years.', a: ['to'], why: '*Sentenced to*.' },
      { q: 'The company was accused ___ breaking the law.', a: ['of'], why: '*Accused of*.' },
      { q: 'All businesses must comply ___ the regulations.', a: ['with'], why: '*Comply with*.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Use the word in capitals to form a word that fits the gap.', items: [
      { q: 'The public wants more ___ from those in power.', base: 'account', a: ['accountability'], why: '*Accountability*.' },
      { q: 'A judge must be completely ___.', base: 'part', a: ['impartial'], why: '*Impartial*.' },
      { q: 'The new ___ comes into force in May.', base: 'legislate', a: ['legislation'], why: '*Legislation*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'The court demanded that he [returns] the money.', a: ['return'], why: 'Subjunctive: base form.' },
      { s: 'She [made] a serious crime.', a: ['committed'], why: '*Commit a crime*.' },
      { s: 'The tenant shall [to pay] the rent monthly.', a: ['pay'], why: 'No *to* after a modal.' },
      { s: 'They were held accountable [of] the losses.', a: ['for'], why: '*Accountable for*.' },
    ] },
  ],
};
