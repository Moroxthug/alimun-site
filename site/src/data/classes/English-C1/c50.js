// English C1, class 50 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u11:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c50',
  focus: 'By the end every student keeps their distance from claims they cannot check: distancing adverbs (*allegedly*, *reportedly*, *apparently*, *supposedly*), attribution (*according to*, *it has been claimed that*), passive reporting with the right infinitive (*is said to be living*, *is thought to have left*) and the cautious *it would appear that*. The speaking goal: pass on a rumour or a news item accurately without presenting it as a fact.',
  tips: [
    'The infinitive shows the time of the claim: *is said to be* (now), *is said to be doing* (now, continuing), *is said to have done* (earlier), *is believed to have been taken* (earlier and passive). Draw a quick time line when students hesitate.',
    'Before a noun the word is the adjective *alleged*: *the alleged fraud*, never *the allegedly fraud*.',
    '*According to* introduces someone else’s view: *according to me* sounds odd (say *in my view*), and *According to the report, it says…* repeats the source.',
    'Do not pile up signals: *Reportedly, it is reported that…* says the same thing twice. One clear distancing device per claim is enough.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Tell the class a harmless invented rumour about a famous building (*It’s haunted. A guard saw a ghost last winter.*). Ask students to pass it on to a partner without saying it is true. Collect the phrases they used.' },
    { min: 12, title: 'Keeping your distance', md: 'Show board page 1. Students choose the phrase that fits the writer’s meaning, then explain how sure the writer is.' },
    { min: 10, title: 'Fix it', md: 'Show board page 2. Students correct the mistakes alone, then compare in pairs.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 4. Students rewrite the sentences alone, count their words, then compare. Reveal the answers.' },
    { min: 5, title: 'Close', md: 'Each student reports one piece of news from this week with a distancing phrase. Set the homework.' },
  ],
  board: [
    { title: 'Keeping your distance', blocks: [
      { t: 'table', caption: 'The infinitive shows the time', explain: ['head', 'col2'], head: ['Claim', 'Example', 'Time'], rows: [
        ['is said to be', 'He is said to be very ill.', 'now'],
        ['is said to be doing', 'She is said to be writing a memoir.', 'now, continuing'],
        ['is said to have done', 'They are said to have married in secret.', 'earlier'],
        ['is said to have been done', 'The files are said to have been deleted.', 'earlier, passive'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the phrase that fits the writer’s meaning.', items: [
        { q: 'The ___ bribe was never found by investigators.', o: ['alleged', 'allegedly', 'alleging'], why: 'Before a noun: the adjective *alleged*.' },
        { q: 'The band are ___ planning a reunion tour next year.', o: ['reportedly', 'reported', 'according to'], why: 'An adverb inside the verb phrase: *are reportedly planning*.' },
        { q: 'The actor is believed ___ the country last month.', o: ['to have left', 'to leave', 'to be leaving'], why: 'An earlier action: perfect infinitive.' },
        { q: '___ sources close to the team, the coach will resign.', o: ['According to', 'Reportedly', 'It is said'], why: '*According to* + the source.' },
        { q: 'It would ___ that nobody read the instructions.', o: ['appear', 'appearing', 'be appeared'], why: 'A cautious conclusion: *it would appear that*.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: '[According to me], the article is unfair.', a: ['In my view', 'In my opinion', 'Personally'], why: '*According to* introduces someone else’s view.' },
        { s: 'The singer is rumoured [to record] a new album at the moment.', a: ['to be recording'], why: 'Now and continuing: continuous infinitive.' },
        { s: 'The paintings are thought [to be stolen] in 1990.', a: ['to have been stolen'], why: 'Earlier and passive: *to have been* + past participle.' },
        { s: '[It is alleged him] to have accepted gifts.', a: ['He is alleged'], why: 'Either *He is alleged to…* or *It is alleged that he…*.' },
        { s: 'The [so-call] experts were wrong again.', a: ['so-called'], why: 'The fixed form is *so-called*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Choose one way of keeping your distance per claim: an adverb, an attribution or a passive. Using two at once makes the sentence clumsy.' },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. Write between three and six words, including the word given.', items: [
        { q: 'People say that the mayor is considering a new tax. (The mayor ___ a new tax.)', cue: 'SAID', a: ['The mayor is said to be considering a new tax.'], why: 'Passive reporting, now and continuing: *is said to be* + *-ing*.' },
        { q: 'It is thought that the documents were destroyed years ago. (The documents ___ years ago.)', cue: 'THOUGHT', a: ['The documents are thought to have been destroyed years ago.'], why: 'Earlier and passive: *are thought to have been destroyed*.' },
        { q: 'Reports say that the company has lost its biggest client. (The company ___ its biggest client.)', cue: 'REPORTEDLY', a: ['The company has reportedly lost its biggest client.', 'The company reportedly has lost its biggest client.'], why: 'The adverb sits after the first auxiliary: *has reportedly lost*.' },
        { q: 'Apparently, nobody checked the figures before the report was published. (It ___ checked the figures before the report was published.)', cue: 'APPEAR', a: ['It would appear that nobody had checked the figures before the report was published.', 'It would appear that nobody checked the figures before the report was published.', 'It would appear nobody checked the figures before the report was published.', 'It would appear nobody had checked the figures before the report was published.'], why: 'A cautious conclusion: *it would appear that…*' },
      ] },
      { t: 'tip', art: 'owl', md: 'Passive reporting is a favourite in Part 4 of C1 Advanced. Ask two questions: when did the action happen compared with the claim, and is the action active or passive? The answers give you the infinitive.' },
    ] },
  ],
  activities: {
    one: { title: 'The rumour mill', md: 'Give the student three short invented rumours about a fictional celebrity. The student passes each one on to you in three different ways (an adverb, an attribution, passive reporting) without ever presenting it as fact. Then swap: you report, and the student corrects any slip in the infinitive.' },
    small: { title: 'Fact or claim?', md: 'Each student says three sentences about a news topic they know: two facts and one claim they cannot check. The others listen for the distancing device; if the claim was said as a fact, they must rephrase it. A point for each correct rephrase.' },
    group: { title: 'News desk rooms', md: 'Breakout rooms of three get a short list of unconfirmed details about an invented event in the chat. Each room writes a four-sentence news brief that reports every detail carefully, with no repeated device. Bring everyone back; the class decides which brief would protect the newspaper best.' },
  },
  homework: { book: 'u11:p2', md: 'Finish lesson 2 of unit 11 if needed, then do lesson 3 (Spin and a balanced account). Write a short news report of about 120 words on an invented local event, using at least four different ways of keeping your distance from the claims.' },
};
