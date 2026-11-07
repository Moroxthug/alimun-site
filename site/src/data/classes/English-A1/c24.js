// English A1, class 24 (docs/LESSONS_PLAN.md). Mid-level check of book units u1 to u4. Draft for the owner's review.
export const LESSON = {
  id: 'c24',
  focus: 'The mid-level check: a calm, structured check of units 1 to 4 that tells you and each student what they can already do and what needs more work before the second half of A1. It has two parts: a short written check on the board (everyone, 20 minutes) and a short speaking check with each student. At the end every student should know their strongest and weakest unit.',
  tips: [
    'Present it as a check, not an exam: *This shows us what to practise next.* Students who are nervous do worse and learn nothing from it.',
    'Speaking check criteria (for each student, about 2 to 3 minutes): (a) answers personal questions in full sentences, (b) uses *be* and the present simple correctly with *I* and *he/she*, (c) asks at least two questions back, (d) can be understood without effort. Mark each as *yes*, *nearly* or *not yet*.',
    'A student is on track with *yes* or *nearly* in at least three criteria and 70% or more in the written check. Below that, the student is behind: tell them privately, with one or two clear things to practise.',
    'For students who are behind: point them to the book lessons of their weakest unit and to Practice, which brings back their mistakes; offer a short 1 on 1 if their plan includes it; and pair them with a stronger student in the next activities.',
    'In large classes, do the speaking check in turns while the others work: call two students at a time into a breakout room with you, or check half the class today and half in the next class.',
  ],
  plan: [
    { min: 5, title: 'Welcome', md: 'Explain the two parts and how long they take. Reassure students that the result is for planning, not a grade.' },
    { min: 20, title: 'Written check', md: 'Show board pages 1 to 3 one by one (about 6 minutes each). Students write their answers alone, in the chat to you privately or on paper. Do not help during this part.' },
    { min: 5, title: 'Check together', md: 'Go through the answers quickly. Students count their own score.' },
    { min: 25, title: 'Speaking check', md: 'Use the questions on board page 4. Call students one or two at a time (a breakout room with you, or in turn in a small class). The others do the activity for your class size below, or the book exam practice for their weakest unit.' },
    { min: 5, title: 'Close', md: 'Tell each student (privately in the chat) their strongest unit and one thing to practise. Set the homework.' },
  ],
  board: [
    { title: 'Check 1: be, family, things', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
        { q: 'My parents ___ from Egypt.', o: ['are', 'is', 'am'], why: 'Two people: *are* (unit 1).' },
        { q: '“Is she your sister?” – “No, she ___.”', o: ['isn’t', 'doesn’t', 'not'], why: 'Short answer with *be*: *isn’t* (unit 1).' },
        { q: 'I have got two ___.', o: ['children', 'childs', 'child'], why: 'Irregular plural: *children* (unit 2).' },
        { q: '___ are my keys, here in my hand.', o: ['These', 'That', 'Those'], why: 'More than one, near me: *these* (unit 2).' },
        { q: 'This is ___ brother’s car.', o: ['my', 'me', 'I'], why: 'Possessive: *my* (unit 2).' },
      ] },
    ] },
    { title: 'Check 2: my day', blocks: [
      { t: 'ex', kind: 'gap', h: 'Write the right word.', items: [
        { q: 'She ___ (work) in a hospital.', a: ['works'], why: '*she* + *-s* (unit 3).' },
        { q: 'We ___ (not / live) in the city centre.', a: ['don’t live', "don't live", 'do not live'], why: 'Negative with *we*: *don’t* (unit 3).' },
        { q: '___ your brother play football?', a: ['Does'], why: 'Question with *he*: *Does* (unit 3).' },
        { q: 'I go to the gym ___ Mondays.', a: ['on'], why: 'Days: *on* (unit 3).' },
        { q: '7.45 = quarter ___ eight', a: ['to'], why: 'Fifteen minutes before eight: *quarter to* (unit 3).' },
      ] },
    ] },
    { title: 'Check 3: food and drink', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Can I have [a bread], please?', a: ['some bread'], why: 'You cannot count bread (unit 4).' },
        { s: 'How much [is] the oranges?', a: ['are'], why: 'More than one: *are* (unit 4).' },
        { s: 'He doesn’t [likes] milk.', a: ['like'], why: 'After *doesn’t*: no *-s* (units 3 and 4).' },
      ] },
      { t: 'ex', kind: 'choice', h: 'Choose the best reply.', items: [
        { q: '“Would you like a drink?”', o: ['Yes, please. A tea.', 'Yes, I like.', 'Yes, I do.'], why: 'An offer: *Yes, please* (unit 4).' },
        { q: '“What do you do?”', o: ['I’m a teacher.', 'I’m fine, thanks.', 'I do it.'], why: 'It asks for a job (unit 3).' },
      ] },
    ] },
    { title: 'Speaking check: questions', blocks: [
      { t: 'text', md: 'The teacher asks each student four or five of these questions. Answer in full sentences and ask the teacher two questions back.' },
      { t: 'examples', items: [
        { s: 'Can you tell me about yourself? Where are you from?', n: 'Unit 1: name, country, nationality, age.' },
        { s: 'Tell me about your family. Have you got brothers or sisters?', n: 'Unit 2: family and things.' },
        { s: 'What do you do on a normal day? What time do you get up?', n: 'Unit 3: routine and time.' },
        { s: 'Does anyone in your family work at the weekend?', n: 'Unit 3: *he/she* and *does*.' },
        { s: 'What food do you like? What do you usually order in a café?', n: 'Unit 4: food, likes, ordering.' },
      ] },
      { t: 'tip', art: 'owl', md: 'This is like part 1 of the A2 Key speaking test: short personal questions. Add one more piece of information to every answer.' },
    ] },
  ],
  activities: {
    one: { title: 'Speaking check and plan', md: 'In 1 on 1, the whole speaking check is with you (10 minutes, more questions than in a group). Then look at the written check and the book results together and agree a plan for the next four weeks: which book lessons to repeat, what to practise, and one speaking goal.' },
    small: { title: 'While others are checked', md: 'While you check one student, the others work in pairs: they ask each other the questions on board page 4 and help each other with full answers. When it is their turn with you, they will be warmed up.' },
    group: { title: 'Practice station', md: 'While you check students in a breakout room, the main room works alone or in pairs: the book exam practice task of their weakest unit, then the questions on board page 4 in pairs in breakout rooms. Post the order of the speaking check in the chat so students know when it is their turn.' },
  },
  homework: { book: 'u1 u2 u3 u4', md: 'Practise your weakest unit: redo its book lessons with a score below 80% and its unit test, and do two Practice rounds. Write down two questions about it to ask in the next class.' },
};
