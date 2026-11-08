// English A2, class 24 (docs/LESSONS_PLAN.md, L6). Mid-level check of book units u1 to u4. Draft for the owner's review.
export const LESSON = {
  id: 'c24',
  focus: 'The mid-level check: a calm, structured check of units 1 to 4 that shows you and each student what they can already do and what needs more work before the second half of A2. It has two parts: a short written check on the board (everyone, 20 minutes) and a short speaking check with each student. At the end every student should know their strongest and weakest unit.',
  tips: [
    'Present it as a check, not an exam: *This shows us what to practise next.* Nervous students do worse and learn nothing from it.',
    'Speaking check criteria (each student, about 3 minutes): (a) talks about routines and the present moment with the right tense, (b) tells a short past story with correct irregular verbs, (c) describes and compares places, (d) gives answers with a reason or detail, not single words. Mark each as *yes*, *nearly* or *not yet*.',
    'A student is on track with *yes* or *nearly* in at least three criteria and 70% or more in the written check. Below that, the student is behind: tell them privately, with one or two clear things to practise.',
    'For students who are behind: point them to the book lessons of their weakest unit and to Practice, which brings back their mistakes; offer a short 1 on 1 if their plan includes it; and pair them with a stronger student in the next activities.',
    'In large classes, do the speaking check in turns while the others work: two students at a time in a breakout room with you, or half the class today and half in the next class.',
  ],
  plan: [
    { min: 5, title: 'Welcome', md: 'Explain the two parts and how long they take. Reassure students that the result is for planning, not a grade.' },
    { min: 20, title: 'Written check', md: 'Show board pages 1 to 3 one by one (about 6 minutes each). Students write their answers alone, privately in the chat to you or on paper. Do not help during this part.' },
    { min: 5, title: 'Check together', md: 'Go through the answers quickly. Students count their own score out of 18.' },
    { min: 25, title: 'Speaking check', md: 'Use the questions on board page 4. Call students one or two at a time (a breakout room with you, or in turn in a small class). The others do the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Tell each student privately in the chat their strongest unit and one thing to practise. Set the homework.' },
  ],
  board: [
    { title: 'Check 1: present and past', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
        { q: 'I usually ___ to work by bus.', o: ['go', 'am going', 'going'], why: 'A habit: present simple (unit 1).' },
        { q: 'Look! It ___ outside.', o: ['’s snowing', 'snows', 'snow'], why: 'Happening now: present continuous (unit 1).' },
        { q: 'My sister is very ___: she always helps people.', o: ['kind', 'kindly', 'kindness'], why: '*be* + adjective (unit 1).' },
        { q: 'We ___ a great film last night.', o: ['saw', 'seed', 'see'], why: 'Irregular past: *see → saw* (unit 2).' },
        { q: '___ you go out on Saturday?', o: ['Did', 'Do you', 'Were'], why: 'Past question: *Did* + verb (unit 2).' },
        { q: 'I didn’t ___ the answer.', o: ['know', 'knew', 'knowed'], why: 'After *didn’t*, the verb has no past form (unit 2).' },
      ] },
    ] },
    { title: 'Check 2: food and shopping', blocks: [
      { t: 'ex', kind: 'gap', h: 'Write one word.', items: [
        { q: 'How ___ eggs do we need?', a: ['many'], why: 'Countable plural: *how many* (unit 3).' },
        { q: 'There isn’t ___ milk in the fridge.', a: ['any'], why: 'Negative: *any* (unit 3).' },
        { q: 'Can I have a ___ of water, please?', a: ['bottle', 'glass'], why: 'A container: *a bottle / glass of water* (unit 3).' },
        { q: '“Would you like some cake?” – “Yes, ___.”', a: ['please'], why: 'Answer an offer: *Yes, please* (unit 3).' },
        { q: 'First, cut the onions. ___ fry them.', a: ['Then', 'Next'], why: 'A sequencer: *Then* (unit 3).' },
        { q: 'I’d like a ___ of chocolate cake.', a: ['piece', 'slice'], why: '*a piece of cake* (unit 3).' },
      ] },
    ] },
    { title: 'Check 3: homes and towns', blocks: [
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
        { s: 'When I was a child, there [was] two parks in my town.', a: ['were'], why: 'Plural: *there were* (unit 4).' },
        { s: 'The bank is [next] the post office.', a: ['next to'], why: '*next to* (unit 4).' },
        { s: 'My new flat is [more cheap] than the old one.', a: ['cheaper'], why: 'Short adjective: *-er* (unit 4).' },
        { s: 'Cross the road [in] the traffic lights.', a: ['at'], why: 'A point on the way: *at* (unit 4).' },
        { s: 'The museum isn’t as old [than] the castle.', a: ['as'], why: '*not as … as* (unit 4).' },
        { s: 'I like my area [so] it’s near the sea.', a: ['because'], why: 'A reason: *because* (unit 4).' },
      ] },
    ] },
    { title: 'Speaking check', blocks: [
      { t: 'text', md: 'Questions for each student (about 3 minutes). Ask for a reason or a detail after each short answer.\n\n*What do you usually do on a weekday? What are you doing this week that is different?*\n\n*Tell me about the last time you went out with friends. What happened?*\n\n*What do you buy at the supermarket every week? How much coffee or tea do you drink?*\n\n*Describe the place where you live. Is it better or worse than where you lived before? Why?*' },
      { t: 'tip', md: 'This is like A2 Key Speaking part 1: the examiner wants more than one word. Answer, then add a reason with **because** or a detail with **and**.' },
    ] },
  ],
  activities: {
    one: { title: 'Speaking check, then a plan', md: 'In a 1 on 1 class the whole speaking check is with this student: use all the questions on board page 4 and add follow-ups. Then plan the next weeks together: look at the written score by unit, choose the weakest unit, and agree on two book lessons and one Practice round to do before the next class.' },
    small: { title: 'While I check', md: 'While you check students one at a time, the others work in pairs on a speaking task in the chat: describe your town ten years ago and today, then compare it with a partner’s town. Each pair writes their three best sentences in the chat; read them with the group at the end.' },
    group: { title: 'Revision stations', md: 'While you call students two at a time, the others work in breakout rooms of three on the book’s unit tests: each room takes the unit its members found hardest in the written check and goes through the mistakes together. Visit each room briefly between speaking checks.' },
  },
  homework: { book: 'u1 u2 u3 u4', md: 'Go back to the book lessons of your weakest unit (your teacher told you which) and redo their exercises. Then do two Practice rounds: they bring back your own mistakes from units 1 to 4.' },
};
