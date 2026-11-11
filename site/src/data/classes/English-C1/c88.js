// English C1, class 88 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u19:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c88',
  focus: 'By the end every student can choose how direct to sound: they soften requests, suggestions and disagreement in layers with the distancing past and continuous (*I was wondering if you could…*), indirect questions with statement word order, impersonal structures (*It might be worth -ing*), negative questions, limiting words (*not entirely, slightly*) and understatement. The speaking goal: handle a tense conversation politely and firmly at the same time.',
  tips: [
    'The point is choice, not maximum politeness. Too many softeners sound weak or even sarcastic. Ask students to say the same request at three levels of directness and decide which one fits the situation.',
    'Indirect questions are where C1 students still slip: *Could you tell me where is the station?* Correct the word order every time and say the rule in five words: statement order, no *do*.',
    'Keep the past form after the distancing past: *I was wondering if you **could**,* not *can*. Say it aloud a few times so the pattern sticks.',
    '*Rather* softens negative ideas (*rather disappointing*); with positive ones it sounds surprised. Point it out when a student says *You are rather right*.',
    'Understatement is very British and is often missed by learners: *That wasn’t ideal* can mean it was a disaster. Ask students what the speaker really means.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Write *Send me the report.* on the board. Ask students to make it softer in as many ways as they can in one minute, then rank them from most to least direct.' },
    { min: 12, title: 'Layers of softening', md: 'Show board page 1. Go through the layers with the new examples, then students choose the more diplomatic option and say which layer it uses.' },
    { min: 10, title: 'Indirect questions and fixes', md: 'Show board page 2. Students turn the direct questions into indirect ones aloud, then fix the mistakes.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 4. Students rewrite the sentences alone with “Everyone solves this”, then count their words together.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they need to ask someone this week, softened. Set the homework.' },
  ],
  board: [
    { title: 'Layers of softening', blocks: [
      { t: 'table', caption: 'From direct to diplomatic', explain: ['head', 'col2'], head: ['Direct', 'Diplomatic', 'The layer'], rows: [
        ['Move the meeting.', 'I was hoping we could move the meeting.', 'distancing past and continuous, could'],
        ['That’s not true.', 'I’m not sure that’s quite the whole story.', 'a negative frame and a limiting word'],
        ['Ask the client.', 'It might be worth asking the client.', 'an impersonal structure with might'],
        ['We should wait.', 'Wouldn’t it be wiser to wait?', 'a negative question as a suggestion'],
        ['The talk was boring.', 'The talk wasn’t the most gripping I’ve heard.', 'understatement'],
        ['When does it start?', 'Do you happen to know when it starts?', 'an indirect question'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the more diplomatic option for a tense meeting.', items: [
        { q: '___ we could look at the figures again before we decide.', o: ['I was wondering if', 'I want that', 'You must check if'], why: 'The distancing past and continuous: the softest frame.' },
        { q: 'I can see where you’re coming from, but I’m not ___ convinced.', o: ['altogether', 'totally not', 'never'], why: '*Not altogether* limits the disagreement.' },
        { q: 'It might be worth ___ a second opinion.', o: ['getting', 'to get', 'get'], why: '*Worth* is followed by *-ing*.' },
        { q: '___ make more sense to start with the smaller project?', o: ['Wouldn’t it', 'It doesn’t', 'Didn’t it'], why: 'A negative question invites agreement.' },
      ] },
    ] },
    { title: 'Indirect questions and fixes', blocks: [
      { t: 'examples', items: [
        { s: 'Why was the order cancelled? → Would you mind telling me **why the order was cancelled**?', n: 'Statement order after the question word.' },
        { s: 'Did they approve the budget? → I was wondering **whether they approved** the budget.', n: 'A yes or no question takes *whether* or *if*, and no *did*.' },
        { s: 'How much does it cost? → Could you tell me **how much it costs**?', n: 'No *does*; the verb takes its normal ending.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Could you tell me what time [does the train leave]?', a: ['the train leaves'], why: 'Statement order and no *does* in an indirect question.' },
        { s: 'We were hoping you [will] join us for dinner.', a: ['would', 'could', 'might'], why: 'Keep the past form after *We were hoping*.' },
        { s: 'Do you know [is the office] open on Saturdays?', a: ['if the office is', 'whether the office is'], why: 'A yes or no indirect question needs *if* or *whether* and statement order.' },
        { s: 'The service was [rather excellent].', a: ['excellent', 'really excellent', 'quite excellent'], why: '*Rather* softens negative ideas; with *excellent* it sounds odd.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first. Use the word given and three to six words, including the word given.', items: [
        { q: 'Where is the conference room?', cue: 'TELL', a: ['Could you tell me where the conference room is?', 'Can you tell me where the conference room is?'], why: 'An indirect question: statement order after *where*.' },
        { q: 'Please lend us the projector for the afternoon.', cue: 'HOPING', a: ['We were hoping you could lend us the projector for the afternoon.', 'We were hoping you would lend us the projector for the afternoon.', 'We were hoping that you could lend us the projector for the afternoon.'], why: 'The distancing past and continuous, then *could* + verb.' },
        { q: 'Did the client sign the contract?', cue: 'WHETHER', a: ['Do you know whether the client signed the contract?', 'Do you know whether the client has signed the contract?', 'I was wondering whether the client signed the contract.'], why: 'A yes or no indirect question with *whether*, and no *did*.' },
        { q: 'You should probably talk to the team first.', cue: 'WORTH', a: ['It might be worth talking to the team first.', 'It may be worth talking to the team first.', 'It would be worth talking to the team first.', 'It could be worth talking to the team first.'], why: '*It might be worth* + *-ing*: a suggestion with no person in it.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 4 the key word often forces the frame (*tell, hoping, whether, worth*), and the second mark is for what follows it: the word order or the verb form. Remember that *wouldn’t* counts as two words.' },
    ] },
  ],
  activities: {
    one: { title: 'The awkward email', md: 'Give the student a blunt email in the chat: *You haven’t sent the invoice. Send it today. Also, your last report had mistakes.* The student rewrites it for a senior colleague, then for a close colleague. Compare the two versions and discuss which softeners they kept, which they dropped and why.' },
    small: { title: 'Three levels', md: 'Each student gets a situation in the chat (a neighbour’s loud music, a late payment, a friend who always cancels). They say what they want three times: direct, neutral and very diplomatic. The others decide which version they would actually use, and why.' },
    group: { title: 'The difficult meeting', md: 'Breakout rooms of three: two colleagues disagree about a launch date or a budget, and the third is the observer who notes every softener they use. Swap roles after three minutes. Back together, each observer reports the most useful phrase they heard.' },
  },
  homework: { book: 'u19:p1', md: 'Finish lesson 1 of unit 19 if needed, then do lesson 2 (Reading between the lines). Write a short email (about 120 words) to a manager asking for a change you want at work or in your course, using at least three different layers of softening.' },
};
