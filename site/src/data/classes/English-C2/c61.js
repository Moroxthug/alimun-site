// English C2, class 61 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u13:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c61',
  focus: 'By the end every student uses the collocations of policy and diplomacy without hesitation (*impose*, *ease* and *lift* sanctions or a ban; *broker*, *strike* and *seal* a deal; talks *resume*, *stall* and *break down*; a treaty is *ratified* and *comes into force*; a *trade-off*) and reports the positions of both sides neutrally, with careful reporting verbs (*maintain*, *acknowledge*, *insist*, *signal*) and attribution. They do a multiple-choice cloze in the format of C2 Proficiency Reading and Use of English Part 1 and broker a deal of their own in class.',
  tips: [
    'Most mistakes here are the right noun with the wrong verb: *make sanctions*, *take off a ban*, *sign* for *ratify*. Ask students to learn each noun with its verbs, as a block, and correct every slip.',
    'Neutral reporting is a matter of word choice, not only of opinion. *Claims*, *admits* and *regime* take sides; *says*, *maintains* and *government* do not. When a student reports a view, ask: *Would both sides accept your sentence?*',
    'Part 1 options at C2 are close in meaning. When checking, ask students to say why each wrong option fails: wrong collocation, wrong grammar after it, or wrong meaning.',
    'The countries in this class are imaginary on purpose. If students want to talk about real disputes, let them practise neutral reporting, but steer away from asking anyone to defend a side they may feel strongly about.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Think of an agreement you have seen negotiated, at work, in your family or in the news. Who gave way on what?* Each student answers briefly; write any verb they use with *deal* or *agreement* on the board.' },
    { min: 8, title: 'The right verb', md: 'Show board page 1. Students choose every verb that goes with each noun, then make one sentence with a verb they did not know.' },
    { min: 10, title: 'Neutral or loaded?', md: 'Show board page 2. Students choose the most neutral version and name the word that makes each other version take sides.' },
    { min: 16, title: 'Exam corner', md: 'Show board page 3: C2 Proficiency Reading and Use of English Part 1. Students read the whole text first, then choose alone in about eight minutes. Check, asking why each wrong option fails.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below. The language on board page 4 helps.' },
    { min: 5, title: 'Close', md: 'Each student reports the result of the activity in two neutral sentences, as a news agency would. Set the homework.' },
  ],
  board: [
    { title: 'The right verb', blocks: [
      { t: 'ex', kind: 'colloc', h: 'Which verbs go with the noun? Choose all that fit.', items: [
        { key: 'talks', o: ['resume', 'break down', 'stall', 'ratify', 'impose'], a: [0, 1, 2], why: 'Talks resume, stall and break down. Treaties are ratified; sanctions and bans are imposed.' },
        { key: 'a deal', o: ['broker', 'strike', 'seal', 'lift', 'tighten'], a: [0, 1, 2], why: 'A third party brokers a deal; the two sides strike and seal it. Sanctions are lifted and tightened.' },
        { key: 'a ban', o: ['impose', 'lift', 'overturn', 'broker', 'ratify'], a: [0, 1, 2], why: 'A ban is imposed, lifted, or overturned by a court.' },
        { key: 'a treaty', o: ['ratify', 'sign', 'withdraw from', 'strike', 'ease'], a: [0, 1, 2], why: 'Governments sign a treaty, parliaments ratify it, and a country can withdraw from it.' },
      ] },
      { t: 'tip', art: 'owl', md: 'The order matters in diplomacy: a government **signs** a treaty, its parliament **ratifies** it, and only then does it **come into force** or **take effect**. Reporting that a treaty was *signed* when it was *ratified* is a real error of fact.' },
    ] },
    { title: 'Neutral or loaded?', blocks: [
      { t: 'ex', kind: 'choice', h: 'Which sentence reports the position most neutrally?', items: [
        { q: '', o: ['Arland maintains that the ban will stay until the dam project is suspended.', 'Arland stubbornly refuses to lift the ban until it gets its way over the dam.', 'Arland finally admits that the ban is linked to the dam.'], why: '*Maintains* reports a firm position without judging it. *Stubbornly*, *gets its way* and *finally admits* all take sides.' },
        { q: '', o: ['Teskov has signalled that it may release more water if talks resume.', 'Teskov is dangling the promise of more water to lure Arland back to the table.', 'Teskov has caved in and offered more water.'], why: '*Signalled* is neutral. *Dangling*, *lure* and *caved in* suggest motives the reporter cannot know.' },
        { q: '', o: ['According to officials on both sides, the talks ended without agreement.', 'The talks collapsed in humiliating failure.', 'Teskov wrecked the talks at the last minute.'], why: 'Attribution to *both sides* and a plain verb. The others blame or dramatise.' },
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the reporting verb that keeps the report neutral.', items: [
        { q: 'The minister ___ that the deal involves a trade-off, but says it is a fair one.', o: ['acknowledges', 'confesses', 'is forced to admit'], why: '*Acknowledge*: accept a fact, neutrally. *Confess* and *be forced to admit* suggest guilt or pressure.' },
        { q: 'The opposition ___ that the treaty should never have been signed.', o: ['maintains', 'whines', 'pretends'], why: '*Maintain*: keep stating a view. The others mock it or call it false.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 1', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 1): the sentences make one short text about two imaginary countries. Choose the word that best fits each gap.', items: [
        { q: 'For almost a decade, Arland and Teskov have been at ___ over the waters of the river they share.', o: ['odds', 'issue', 'strife', 'contest'], why: '*At odds over* something: in disagreement. *At issue* describes the question, not the people.' },
        { q: 'Teskov’s plan to build a dam upstream ___ fears in Arland that its farms would run dry.', o: ['raised', 'lifted', 'rose', 'grew'], why: '*Raise fears*: a transitive verb with *fears* as object. *Rise* and *grow* take no object.' },
        { q: 'In response, Arland ___ a ban on imports of Teskovan steel.', o: ['imposed', 'inflicted', 'dealt', 'charged'], why: 'A ban is *imposed on* something. You *inflict* damage and *deal* a blow.' },
        { q: 'Talks finally ___ last spring, after a group of neighbouring states offered to mediate.', o: ['resumed', 'renewed', 'restored', 'returned'], why: 'Talks *resume*: start again. *Renewed* would need an object (*they renewed talks*).' },
        { q: 'Under the draft agreement, Teskov would release a fixed share of the river’s flow, ___ that Arland lifts the ban.', o: ['provided', 'given', 'granted', 'except'], why: '*Provided that*: on condition that. *Given that* means *because*; *granted that* concedes.' },
        { q: 'Both governments describe the arrangement as a necessary ___ between water and trade.', o: ['trade-off', 'pay-off', 'offset', 'set-off'], why: '*A trade-off*: accepting less of one thing to get more of another.' },
        { q: 'However, the treaty will not ___ effect until it has been ratified by both parliaments.', o: ['take', 'come', 'bring', 'make'], why: 'The fixed phrase is *take effect* (or *come into force*).' },
        { q: 'Opposition parties in Arland have already ___ doubts about whether Teskov will keep its side of the bargain.', o: ['voiced', 'spoken', 'told', 'pronounced'], why: '*Voice doubts*: say them publicly. *Speak* and *tell* do not collocate with *doubts*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 1** there are **eight** gaps with **four** options. Read the whole text once before you choose, then check three things for each option: does it **collocate** with the words around it, does the **grammar** after it fit (*provided that*, *at odds over*), and does it give the right **meaning**?' },
    ] },
    { title: 'Broker the deal', blocks: [
      { t: 'text', md: '**The dispute.** A ferry company wants to double the number of crossings to an island. The islanders want the tourism income but fear traffic and noise. The company says the plan depends on a new car park; the islanders say no car park, but would accept a smaller one if the company pays for a bus service. The mediator’s task is to broker a deal that both sides can sign today.' },
      { t: 'examples', items: [
        { s: '**We would be prepared to** reduce the car park by half, **provided that** the bus service starts this summer.', n: 'A conditional offer (unit 10).' },
        { s: '**As I understand it, the sticking point is** the number of evening crossings.', n: 'The mediator names the problem neutrally.' },
        { s: '**Would both sides accept** a trial period of one year?', n: 'The mediator proposes a trade-off.' },
        { s: '**The company maintains that** the plan cannot work without parking, **while the islanders insist that** it must not change the village.', n: 'Reporting both positions neutrally.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Briefing the minister', md: 'The student is an adviser and briefs you, the minister, in about two minutes on the Arland and Teskov dispute from board page 3: what each side wants, what has been agreed and what could still go wrong, without taking sides. Then ask three loaded questions (*So Teskov caved in?*, *Isn’t Arland just being stubborn?*) and the student answers each one neutrally. Finish with the ferry dispute on board page 4: you play the company and the student brokers a deal with you.' },
    small: { title: 'Broker the deal', md: 'Use the ferry dispute on board page 4. In a three, one student represents the company, one the islanders and one is the mediator; with more students, extra students are observers who note every collocation from the class and every loaded word they hear. With two students, they represent the two sides and you mediate. Give the sides two minutes to prepare and the mediator eight minutes to reach a deal. Observers report what they noted, and the mediator reports the result neutrally.' },
  },
  homework: { book: 'u13:p3', md: 'Finish lesson 2 of unit 13 in the book if needed. Write a neutral news report of about 150 words on the deal your class brokered, with at least four collocations from this class and two careful reporting verbs. Then do lesson 3 of unit 13 (In the wake of the closure).' },
};
