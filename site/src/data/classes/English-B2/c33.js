// English B2, class 33 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u7:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c33',
  focus: 'By the end of the class every student can speculate fluently about pictures and situations with *it looks as if*, *it seems as though*, *I suppose*, *I would imagine*, *perhaps* and modals, and can do Part 2 of the B2 First Speaking test: compare two photos and answer the question for about a minute without stopping.',
  tips: [
    'Part 2 is about comparing and speculating, not describing every detail. Stop students who list what they see (*There is a man, there is a car…*) and ask *What might be happening? How might they feel?*',
    'Common mistakes: *It looks like as if*, *It seems that he is tired* (fine, but less natural than *He seems tired*), and *Maybe he must be…* (mixing two levels of certainty).',
    'Timing is part of the skill. Use a timer: one minute for each student, thirty seconds for the partner’s short answer.',
    'Model a full Part 2 answer yourself first. Students copy the shape of a good answer more easily than a list of rules.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Describe a scene in words: *Two people at an airport, one crying, one smiling.* Students say what might be happening using any language they know.' },
    { min: 10, title: 'Speculating phrases', md: 'Show board page 1. Go through the phrases and examples. Students turn three plain sentences into speculation.' },
    { min: 10, title: 'Practice', md: 'Show board page 2. Students choose the phrases and fix the mistakes.' },
    { min: 10, title: 'Model answer', md: 'Show board page 3. Read the model Part 2 answer aloud. Students find the comparing phrases and the speculating phrases.' },
    { min: 20, title: 'Activity and exam practice', md: 'Use the activity for your class size below. Every student does at least one timed one-minute answer.' },
    { min: 5, title: 'Close', md: 'Each student names the phrase they found most useful. Set the homework.' },
  ],
  board: [
    { title: 'Speculating', blocks: [
      { t: 'table', caption: 'Phrases for speculating', explain: ['head', 'col2'], head: ['Phrase', 'Example', 'Use'], rows: [
        ['It looks as if / as though', 'It looks as if they’ve just won.', 'from what you can see'],
        ['They seem / appear to be', 'They seem to be arguing.', 'from their behaviour'],
        ['I suppose / I would imagine', 'I would imagine it’s quite stressful.', 'a careful guess'],
        ['perhaps / maybe / possibly', 'Perhaps they’re waiting for a friend.', 'a possibility'],
        ['might / could + be + -ing', 'She might be waiting for news.', 'an action now'],
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'It looks [like as if] they are lost.', a: ['as if', 'like'], why: 'Use *as if* or *like*, not both.' },
        { s: '[Maybe he must] be very tired.', a: ['He must', 'He might'], why: 'Do not mix *maybe* (unsure) and *must* (sure).' },
      ] },
    ] },
    { title: 'Practice', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the best phrase.', items: [
        { q: '___ they’ve been walking for hours; they look exhausted.', o: ['It looks as if', 'It looks', 'It is looking'], why: '*It looks as if* + clause.' },
        { q: 'They ___ to be enjoying themselves.', o: ['seem', 'look as if', 'suppose'], why: '*seem to be* + -ing.' },
        { q: 'I ___ the job is quite well paid.', o: ['would imagine', 'would imagine that is', 'am imagining'], why: '*I would imagine* + clause.' },
      ] },
    ] },
    { title: 'Exam corner: Speaking Part 2', blocks: [
      { t: 'text', md: 'In the format of B2 First Speaking Part 2: you see two photos and compare them, then answer the question, for about a minute.\n\nPhoto A: a family cooking together in a busy kitchen. Photo B: a man eating alone at a desk in an office.\n\nQuestion: *What might the people be enjoying about eating in these situations?*' },
      { t: 'reading', title: 'A model answer', md: 'Both photos show people eating, but the situations are very different. In the first one it looks as if a family is preparing a meal together, perhaps for a celebration. They seem to be having fun, and I would imagine they enjoy the time together more than the food itself.\n\nIn the second photo, on the other hand, a man is eating alone at his desk. He might be very busy, so he probably doesn’t have time for a proper lunch break. I suppose what he enjoys is the quiet, or simply finishing his work faster. Personally, I’d rather eat with other people.' },
      { t: 'tip', md: 'In Part 2, compare first (*Both photos… but…*, *whereas*, *on the other hand*), then speculate, then answer the question. If you cannot remember a word, describe it: examiners reward keeping going.' },
    ] },
  ],
  activities: {
    one: { title: 'Timed Part 2', md: 'Describe two situations to the student (or share two photos you choose before class) and give a Part 2 question. The student speaks for one minute with a timer. Give feedback on comparing, speculating and timing, then repeat with a new pair of situations, aiming to improve one point.' },
    small: { title: 'Photo pairs', md: 'Put four pairs of situations in the chat (two kinds of holidays, two ways of working, two ways of learning, two sports). In pairs, student A does a one-minute Part 2 answer while B times and listens, then B answers a short follow-up question (*Which would you prefer?*). Swap. Note the best speculating phrases you hear.' },
    group: { title: 'Exam rooms', md: 'Breakout rooms of three: an examiner, a candidate and an observer. The examiner reads a Part 2 task from the chat; the candidate speaks for one minute; the observer counts comparing and speculating phrases. Rotate roles three times so everyone is the candidate once.' },
  },
  homework: { book: 'u7:p3', md: 'Finish book lesson 3 of unit 7 (It looks as if…), including the speaking task. Then find two photos online on the same topic and record yourself comparing them for one minute, using at least four speculating phrases.' },
};
