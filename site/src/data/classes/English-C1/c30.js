// English C1, class 30 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u7:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c30',
  focus: 'By the end every student keeps one register through a whole text: formal, neutral or informal vocabulary and grammar chosen on purpose, with no slides between levels. They can rewrite an informal message as a formal one with single formal verbs, the passive and formal linkers, and choose the right word in a Part 1 gap where register and collocation decide.',
  tips: [
    'The C1 problem is mixing, not choosing: a careful formal email with *a bit of a nightmare* in the third paragraph. Ask students to decide the register before they write and to check every paragraph against it.',
    'Formal is not the same as long. *Due to the fact that* is wordy; *because* or *as* is often better. Praise compact, precise formal sentences.',
    'Phrasal verbs are not banned in formal English (*carry out*, *set up* are neutral), but the informal ones usually have a single formal verb: *put off* becomes *postpone*, *turn up* becomes *attend* or *arrive*.',
    'Students whose language has a formal *you* often try to sound polite with long words. In English politeness comes more from indirect structures: *Would it be possible to…?*, *I was wondering whether…*',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Write *Hey, can’t make Tuesday, can we do Thursday?* on the blank page. Ask who might write it and to whom. Students rewrite it together for a client.' },
    { min: 12, title: 'Three registers', md: 'Show board page 1. Students read the table, sort the phrases, then explain one choice each.' },
    { min: 10, title: 'Fix the slip', md: 'Show board page 2. Students find the word that breaks the register, replace it, then rewrite the two informal sentences.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 1. Students choose alone, then compare and say which words around the gap decided it. Reveal the answers.' },
    { min: 5, title: 'Close', md: 'Each student says one thing in a formal and an informal way. Set the homework.' },
  ],
  board: [
    { title: 'Three registers', blocks: [
      { t: 'table', caption: 'One meaning, three voices', explain: ['head'], head: ['Formal', 'Neutral', 'Informal'], rows: [
        ['obtain', 'get', 'grab'],
        ['assist', 'help', 'give someone a hand'],
        ['inform', 'tell', 'let someone know'],
        ['sufficient', 'enough', 'plenty of'],
        ['regarding', 'about', 're'],
        ['subsequently', 'later', 'after that'],
        ['attend', 'go to', 'turn up to'],
      ] },
      { t: 'ex', kind: 'sort', h: 'Formal, neutral or informal? Sort the phrases.', groups: ['formal', 'neutral', 'informal'], explain: ['groups'], items: [
        { s: 'with regard to your request', g: 0, why: '*With regard to* is the formal way to introduce a topic.' },
        { s: 'we would appreciate it if', g: 0, why: 'An indirect, formal request.' },
        { s: 'in due course', g: 0, why: 'A fixed formal phrase for *soon, when the time is right*.' },
        { s: 'about your request', g: 1, why: 'Neutral: fine in most emails.' },
        { s: 'could you send me', g: 1, why: 'A polite, neutral request.' },
        { s: 'any chance you could', g: 2, why: 'A casual request between friends.' },
        { s: 'cheers for that', g: 2, why: 'Informal thanks, mostly British.' },
        { s: 'in a bit', g: 2, why: 'Spoken, informal *soon*.' },
      ] },
    ] },
    { title: 'Fix the slip', blocks: [
      { t: 'ex', kind: 'fix', h: 'Each formal sentence has one word or phrase in the wrong register. Find it and replace it.', items: [
        { s: 'We regret that the event has been [called off] owing to the weather.', a: ['cancelled'], why: '*Called off* is informal; *cancelled* matches *we regret* and *owing to*.' },
        { s: 'Applicants must [turn up] at the reception desk by nine.', a: ['report', 'arrive', 'present themselves'], why: '*Turn up* is informal; *report* or *arrive* suits an instruction.' },
        { s: 'The committee has received [loads of] complaints about the noise.', a: ['a large number of', 'numerous', 'many', 'a great many'], why: '*Loads of* is spoken; *a large number of* is formal.' },
        { s: 'The figures were [a bit] lower than expected.', a: ['slightly', 'somewhat'], why: '*A bit* is informal; *slightly* or *somewhat* is the formal hedge.' },
      ] },
      { t: 'ex', kind: 'transform', h: 'Rewrite each sentence in a formal register. Start with the words given.', items: [
        { q: 'We can’t give you your money back because you lost the receipt.', cue: 'Unfortunately, a refund', a: ['Unfortunately, a refund cannot be given as the receipt has been lost.', 'Unfortunately, a refund cannot be issued as the receipt has been lost.', 'Unfortunately, a refund cannot be given because the receipt has been lost.', 'Unfortunately, a refund cannot be issued without a receipt.', 'Unfortunately, a refund cannot be given without a receipt.'], why: 'The passive removes *we* and *you*; *cannot* replaces *can’t*.' },
        { q: 'Let us know if you need any more help.', cue: 'Should you', a: ['Should you require any further assistance, please let us know.', 'Should you require further assistance, please let us know.', 'Should you need any further assistance, please contact us.', 'Should you require any further assistance, please contact us.'], why: 'An inverted condition with *require* and *assistance*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 1', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 1): read each sentence from a council notice and choose the word that best fits the gap.', items: [
        { q: 'Residents are ___ to attend the public meeting on 5 March.', o: ['invited', 'called', 'welcomed', 'requested for'], why: '*Be invited to* + infinitive is the formal pattern; *welcomed* and *requested for* do not take *to attend* here.' },
        { q: 'Any comments should be ___ to the planning office in writing.', o: ['addressed', 'headed', 'pointed', 'aimed'], why: 'You *address* comments or a letter *to* someone.' },
        { q: 'The council has ___ the decision to close the library on Sundays.', o: ['taken', 'done', 'given', 'put'], why: '*Take a decision* is the formal British collocation.' },
        { q: 'We apologise for any inconvenience this may ___.', o: ['cause', 'make', 'bring', 'do'], why: 'A fixed formal phrase: *any inconvenience this may cause*.' },
        { q: 'The new opening hours will take ___ from Monday 2 April.', o: ['effect', 'place', 'part', 'hold'], why: '*Take effect*: start to apply. *Take place* is for events.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 1 the four options mean nearly the same thing. In a formal text the right one is often part of a fixed phrase (*take effect*, *address a letter to*), so read the words **after** the gap before you choose.' },
    ] },
  ],
  activities: {
    one: { title: 'Three versions', md: 'The student chooses a real situation (cancelling a meeting, asking for a day off, complaining about a late delivery) and says or writes it three times: to a friend, to a colleague and to an organisation. Mark every word that slips out of its register and rewrite those sentences together.' },
    small: { title: 'Register relay', md: 'Post a neutral sentence in the chat. The first student makes it formal, the next makes the formal version informal, the next brings it back to neutral. After each round the group decides whether any meaning was lost on the way. Play three rounds with different sentences.' },
    group: { title: 'Rewrite rooms', md: 'Breakout rooms of three each get one informal message in the chat (a complaint, an invitation, an apology) and rewrite it as a formal email of four sentences. Back together, each room reads its email aloud and the class listens for any slip in register.' },
  },
  homework: { book: 'u7:p1', md: 'Finish lesson 1 of unit 7 if needed, then do lesson 2 (To cut a long story short). Write a short formal email (about 100 words) to an organisation with some news, then rewrite it as a message to a friend with the same news. Underline three changes of register you made.' },
};
