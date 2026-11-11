// English C1, class 17 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u4:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c17',
  focus: 'By the end every student talks about careers and change with natural collocations, learnt as chunks: *climb the ladder*, *a sideways move*, *a steep learning curve*, *take on responsibility*, *hand in your notice*, *be made redundant*, *a gap in your CV*, and new ones such as *be passed over for promotion* and *get a foot in the door*. The speaking goal: tell the story of a career, their own or someone else’s, with at least six collocations used correctly.',
  tips: [
    'Insist on the verb and the preposition with every noun: *take on responsibility for*, *gain experience in*, *apply for a post*. Write chunks on the board, never single words.',
    'Many work collocations are metaphors of movement (a ladder, a path, a curve). Pointing this out helps students guess and remember: a career can *take off*, *stall* or *get back on track*.',
    'Typical errors: *made redundancy* (adjective needed: *made redundant*), *make experience* (*gain* or *get*), *a high learning curve* (*steep*). Correct them on the spot.',
    'Reading and Use of English Part 1 tests exactly this: four options with nearly the same meaning, and only one collocates. Train students to read the words after the gap.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Think of someone whose career surprised you. What happened?* Write the first two collocations you hear (or should have heard) on the board.' },
    { min: 12, title: 'Which words go together', md: 'Show board page 1. Students choose the collocations, then match the halves. Ask for one more noun for each verb.' },
    { min: 10, title: 'Common mistakes', md: 'Show board page 2. Students fix the sentences, then say which part of the chunk was wrong: the verb, the noun or the preposition.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 1. Students try every option in the whole sentence before they choose. Reveal the answers and the reason for each.' },
    { min: 5, title: 'Close', md: 'Each student says one sentence about their own working life with a collocation from today. Set the homework.' },
  ],
  board: [
    { title: 'Which words go together', blocks: [
      { t: 'ex', kind: 'colloc', h: 'Which words go naturally with the key word?', items: [
        { key: 'gain', o: ['experience', 'a reputation', 'confidence', 'redundant', 'notice'], a: [0, 1, 2], why: 'You *gain* experience, a reputation or confidence; you are *made* redundant and *hand in* your notice.' },
        { key: 'take on', o: ['extra work', 'a new role', 'staff', 'a career break', 'a promotion'], a: [0, 1, 2], why: 'You *take on* work, a role or staff; you *take* a career break and *get* a promotion.' },
        { key: 'a career', o: ['break', 'change', 'path', 'curve', 'notice'], a: [0, 1, 2], why: '*A career break*, *a career change*, *a career path*; a *learning* curve.' },
      ] },
      { t: 'ex', kind: 'match', h: 'Match the beginnings and the endings.', pairs: [
        ['She was passed over', 'for promotion twice.'],
        ['An internship helped him get a foot', 'in the door.'],
        ['After years of climbing the', 'ladder, she stepped down.'],
        ['He handed in his', 'notice on Friday.'],
        ['The company has a high staff', 'turnover.'],
      ] },
    ] },
    { title: 'Common mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Half the team were made [redundancy] after the merger.', a: ['redundant'], why: '*Be made* + adjective: *redundant*.' },
        { s: 'I [made] a lot of experience in my first job.', a: ['gained', 'got'], why: 'You *gain* or *get* experience.' },
        { s: 'The first year was a very [high] learning curve.', a: ['steep'], why: 'A learning curve is *steep*.' },
        { s: 'She took on responsibility [of] the new branch.', a: ['for'], why: '*Responsibility for* something.' },
      ] },
      { t: 'tip', art: 'owl', md: 'When you meet a new work noun, note it with its verb and preposition in one chunk: *take on responsibility for*, *apply for a post*, *be passed over for promotion*. Chunks come back faster when you speak.' },
    ] },
    { title: 'Exam corner: Use of English Part 1', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 1): read the text, sentence by sentence, and choose the word that best fits each gap.', items: [
        { q: 'When the factory closed, Marek was one of four hundred workers who were laid ___.', o: ['off', 'out', 'down', 'away'], why: '*Be laid off*: lose your job because there is no more work.' },
        { q: 'He decided to ___ a career break and retrain as a paramedic.', o: ['take', 'make', 'do', 'set'], why: 'The collocation is *take a career break*.' },
        { q: 'With no medical background, he found it hard to get a ___ in the door.', o: ['foot', 'hand', 'step', 'head'], why: 'The fixed phrase is *get a foot in the door*.' },
        { q: 'The first months were a steep learning ___, but he never regretted the change.', o: ['curve', 'line', 'slope', 'path'], why: '*A steep learning curve*.' },
        { q: 'Two years later he was ___ responsibility for training new staff.', o: ['given', 'made', 'put', 'held'], why: 'You are *given* responsibility, or you *take it on*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 1 all four options often mean nearly the same thing. The answer depends on the collocation, the fixed phrase or the grammar after the gap, so read the whole sentence with each option before you choose.' },
    ] },
  ],
  activities: {
    one: { title: 'My career map', md: 'The student tells the story of their own working life or studies as a path with turns: where it took off, where it stalled, any sideways moves. Ask follow-up questions that need a collocation (*What did you have to take on? Was it a steep learning curve?*). Write every collocation used on the board and add three they could have used.' },
    small: { title: 'Career cards', md: 'Paste eight collocations in the chat. Each student secretly picks three and tells a short invented career story that uses them naturally. The others listen and name the three chunks. Score a point for each one found and one for a story that sounds real.' },
    group: { title: 'The interview panel', md: 'Breakout rooms of four: two are interviewers, two are candidates for a job they choose. The candidates explain a gap in their CV, a sideways move and why they handed in their notice. The interviewers note each collocation. Bring everyone back; each room shares the most natural sentence it heard.' },
  },
  homework: { book: 'u4:p3', md: 'Finish lesson 3 of unit 4 if needed, then do lesson 4 (Four days, five days’ work?). Write about 120 words about a career change you have made or would like to make, with at least six collocations from the unit, each with its verb and preposition.' },
};
