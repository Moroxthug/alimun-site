// English C1, class 12 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u3:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c12',
  focus: 'By the end every student adds weight to an argument with emphatic *do* and stressed auxiliaries, above all to concede a point before answering it (*I do see your point, but…*), and chooses intensifiers that collocate (*bitterly disappointed*, *deeply divided*, *highly unlikely*, *by far the best*, *not in the least*). The speaking goal: disagree firmly but reasonably in a short exchange.',
  tips: [
    'Emphatic *do* needs a contrast in the air: something someone doubted or denied. Without one, it sounds defensive. Give students a doubt to answer every time they practise it.',
    'The stress does the work: *I **do** understand*. If students say it flat, the emphasis disappears. Drill it with exaggerated stress first, then naturally.',
    '*Highly* goes with judgements and probability (*highly unlikely*, *highly recommended*), not with feelings. *Highly disappointed* is the most common wrong partner.',
    '*By far* goes with superlatives (*by far the best*); with comparatives use *far* or *much* (*far better*). Students mix them constantly.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Make three doubtful remarks about the students (*I’m not sure you really like coffee*). Each answers with emphatic *do*: *I do like coffee! I drink four cups a day.*' },
    { min: 12, title: 'Concede with do', md: 'Show board page 1. Students choose the auxiliary, then read each sentence aloud with the stress in the right place.' },
    { min: 10, title: 'The right intensifier', md: 'Show board page 2. Students choose the intensifiers and explain which group each one belongs to.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 1. Students choose alone, then compare and say what fixed each answer.' },
    { min: 5, title: 'Close', md: 'Each student makes one concession with *I do…, but…* about a topic from today. Set the homework.' },
  ],
  board: [
    { title: 'Concede with do', blocks: [
      { t: 'examples', items: [
        { s: 'I **do** appreciate the offer, but I’ll have to say no.', n: 'Accept the other side first; the *but* then sounds reasonable.' },
        { s: 'The trial **did** show some benefits, even if they were small.', n: 'Answering someone who said it showed nothing.' },
        { s: 'We **have** read the letters. Every single one.', n: 'A stressed auxiliary answers a doubt without *do*.' },
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the word that adds the right emphasis.', items: [
        { q: 'You may not believe it, but he ___ apologise in the end.', o: ['did', 'does', 'was'], why: 'Emphatic *do* in the past: *did* + infinitive.' },
        { q: 'I ___ understand your concerns. Let me explain why we went ahead.', o: ['do', 'am', 'have'], why: 'A concession in the present: *do* + infinitive.' },
        { q: '___ sit down. You must be exhausted after the journey.', o: ['Do', 'Did', 'Does'], why: 'Emphatic *do* before an imperative makes it warmer and more insistent.' },
        { q: 'If you ___ decide to apply, I’ll gladly write you a reference.', o: ['do', 'did', 'are'], why: 'Emphatic *do* in a condition: *if you do decide*.' },
      ] },
    ] },
    { title: 'The right intensifier', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the intensifier that collocates best.', items: [
        { q: 'The decision left many staff ___ disappointed.', o: ['bitterly', 'highly', 'widely'], why: 'Strong negative feeling: *bitterly disappointed*.' },
        { q: 'This is ___ the most generous offer we’ve had.', o: ['by far', 'far', 'much more'], why: 'With a superlative: *by far the most*.' },
        { q: 'The bill is ___ unlikely to pass this year.', o: ['highly', 'deeply', 'bitterly'], why: 'Probability: *highly unlikely*.' },
        { q: 'I wasn’t ___ surprised when they cancelled.', o: ['in the least', 'at least', 'the least'], why: '*Not in the least* = not at all.' },
        { q: 'The community remains ___ divided on the issue.', o: ['deeply', 'highly', 'painfully'], why: 'Beliefs and opinions: *deeply divided*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 1', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 1): choose the word which best fits each gap.', items: [
        { q: 'The plan to close the market proved ___ controversial with local traders.', o: ['highly', 'deeply', 'bitterly', 'heavily'], why: '*Highly controversial* is the fixed collocation for a judgement.' },
        { q: 'Residents are ___ opposed to the new road through the park.', o: ['bitterly', 'highly', 'greatly', 'widely'], why: '*Bitterly opposed*: strong negative feeling.' },
        { q: 'The problems with the service have been ___ obvious for months.', o: ['painfully', 'bitterly', 'highly', 'deeply'], why: '*Painfully obvious*: so obvious that it is uncomfortable.' },
        { q: 'She was ___ moved by the letters from her former pupils.', o: ['deeply', 'highly', 'bitterly', 'widely'], why: 'Feelings: *deeply moved*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 1** intensifiers are a favourite test, because all four options mean *very*. Learn them with their partners in groups: feelings (*bitterly*, *deeply*), judgements (*highly*), the obvious or the slow (*painfully*).' },
    ] },
  ],
  activities: {
    one: { title: 'Yes, but', md: 'Read out six opinions the student may disagree with (*Working from home makes people lazy*). For each, the student concedes with emphatic *do* or a stressed auxiliary, then counters with an intensified point (*I do see why people say that, but it’s by far the most productive…*). Correct stress and collocation as you go.' },
    small: { title: 'The complaints desk', md: 'One student is a manager, the others are customers with complaints (a cancelled flight, a cold meal, a lost parcel). Customers use intensifiers (*bitterly disappointed*, *utterly unacceptable*); the manager concedes with *I do understand…* and offers a solution. Swap roles each round.' },
    group: { title: 'Intensifier auction', md: 'Post twelve intensifier and adjective pairs in the chat, some correct and some wrong (*highly disappointed*, *deeply divided*). In breakout rooms of three, students bet points on the pairs they think are correct. Reveal the answers; the room with the most points wins.' },
  },
  homework: { book: 'u3:p2', md: 'Finish lesson 2 of unit 3 if needed, then do lesson 3 (Be that as it may). Write a reply of about 120 words to a neighbour who complained about your plan for a street party: concede twice with emphatic *do* and use four intensifiers that collocate.' },
};
