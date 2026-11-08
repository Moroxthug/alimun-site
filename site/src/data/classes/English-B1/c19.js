// English B1, class 19 (docs/LESSONS_PLAN.md, L6). Review of book units u3 (Getting around) and u4 (Food and health). Draft for the owner's review.
export const LESSON = {
  id: 'c19',
  focus: 'A review of units 3 and 4, mostly speaking. Students bring together obligation and permission (*have to, don’t have to, mustn’t*), indirect questions, travel problems, the first conditional with *when, unless, as soon as*, *too* and *enough*, and advice. By the end, each student can handle a travel or health situation from start to finish with few mistakes in these forms.',
  tips: [
    'Start with the mistakes you noted in classes 9 to 18. A review works best when it fixes what this class really gets wrong.',
    'The most persistent errors across these units are *mustn’t* for *don’t have to*, the word order in indirect questions (*where is the bank*), *if + will* and *too much hot*. Listen for these four in every activity.',
    'Keep explanations very short: if a rule needs explaining again, point to the book page and practise instead.',
    'Give every student the same amount of speaking time: use pairs and breakout rooms more than whole-class questions.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask each student about their last trip: *Did anything go wrong? What did you have to do?* Each answer must include one form from unit 3.' },
    { min: 10, title: 'Quick check', md: 'Show board page 1. Students do the mixed exercise alone, then check together. Ask who needs to look at which book lesson again.' },
    { min: 20, title: 'Activity', md: 'Use the activity for your class size below: a trip that goes wrong.' },
    { min: 10, title: 'Fix the mistakes', md: 'Show board page 2. Add two mistakes you heard today. Students correct them together.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: notices in the format of B1 Preliminary Reading part 1. Students work alone, then explain their choices.' },
    { min: 5, title: 'Close', md: 'Each student says one thing from units 3 and 4 they find easy now and one thing to practise. Set the homework: both unit tests.' },
  ],
  board: [
    { title: 'Quick check: units 3 and 4', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
        { q: 'You ___ bring food; lunch is included.', o: ['don’t have to', 'mustn’t', 'can’t'], why: 'Not necessary: *don’t have to* (unit 3, lesson 1).' },
        { q: 'Could you tell me where ___?', o: ['the platform is', 'is the platform', 'does the platform'], why: 'Indirect question: subject before verb (unit 3, lesson 2).' },
        { q: 'We ___ the last bus, so we took a taxi.', o: ['missed', 'lost', 'left'], why: 'You *miss* a bus (unit 3, lesson 3).' },
        { q: 'I’ll text you as soon as the plane ___.', o: ['lands', 'will land', 'landed'], why: 'Present simple after *as soon as* (unit 4, lesson 1).' },
        { q: 'There isn’t ___ room in the car for five people.', o: ['enough', 'too much', 'too'], why: '*enough* before a noun (unit 4, lesson 2).' },
        { q: 'You’d better ___ some water with you.', o: ['take', 'to take', 'taking'], why: 'No *to* after *had better* (unit 4, lesson 3).' },
      ] },
    ] },
    { title: 'Fix the mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
        { s: 'You [mustn’t] pay for the museum; it’s free.', a: ['don’t have to'], why: 'Not necessary: *don’t have to*. *Mustn’t* means it is not allowed.' },
        { s: 'Do you know what time [does the shop open]?', a: ['the shop opens'], why: 'No *does* in an indirect question.' },
        { s: 'If the train [will be] late, I’ll call you.', a: ['is'], why: 'Present simple after *if*.' },
        { s: 'It was [too much cold] to sit outside.', a: ['too cold'], why: '*too* alone before an adjective.' },
      ] },
    ] },
    { title: 'Exam corner: Reading part 1', blocks: [
      { t: 'text', md: 'In the format of the B1 Preliminary exam, Reading part 1: what does each notice or message say?' },
      { t: 'ex', kind: 'choice', h: 'Choose the right meaning.', items: [
        { q: 'NOTICE AT A STATION: Passengers must keep their bags with them at all times. Bags left alone will be removed.', o: ['Do not leave your bags anywhere.', 'You can leave your bags here for a short time.', 'Bags are kept for passengers at the desk.'], why: '*must keep … with them* and *will be removed*: never leave them.' },
        { q: 'TEXT: Tom, the 18.10 is cancelled. I’ll get the next one unless that’s cancelled too. See you about 7. – Eva', o: ['Eva will probably arrive later than planned.', 'Eva wants Tom to meet her at 18.10.', 'Eva is not coming today.'], why: 'Her train is cancelled, so she takes the next one and arrives about 7.' },
        { q: 'GYM: Members don’t have to book classes before 10 am. After 10 am, booking is necessary.', o: ['You only need to book classes later in the day.', 'You must book every class.', 'There are no classes after 10 am.'], why: '*don’t have to* before 10, *necessary* after 10.' },
      ] },
      { t: 'tip', md: 'In Reading part 1, words like *must, don’t have to, unless* and *only* change the meaning completely. Underline them first, then check each option against them.' },
    ] },
  ],
  activities: {
    one: { title: 'The trip that went wrong', md: 'Play a full trip with the student: they ask for information at a station (indirect questions), the train is cancelled (travel problems, a polite complaint), they arrive feeling ill and ask a pharmacist for advice (*should, had better*), and they make plans for the next day with *if* and *unless*. Swap roles for the second half. Keep a list of mistakes and replay the three most important sentences at the end.' },
    small: { title: 'Travel agent and tourists', md: 'One student is a travel agent; the others are tourists with a problem each (lost bag, cancelled flight, a cold before a hiking trip). The agent must explain the rules (*You have to…, you don’t have to…*) and give advice. Rotate the agent role. At the end, each student reports one piece of useful information they got.' },
    group: { title: 'Weekend rescue plan', md: 'Breakout rooms of three or four. Each room gets a situation in the chat: *Your flight home is cancelled and you have a work meeting on Monday.* They must list what they have to do, what they don’t have to do, two polite questions to ask the airline and two *if* sentences for different outcomes. Back together, each room presents its plan in one minute.' },
  },
  homework: { book: 'u3 u4', md: 'Do the unit tests of units 3 and 4 in the book. Then look again at the lesson with your lowest score and do its exercises once more.' },
};
