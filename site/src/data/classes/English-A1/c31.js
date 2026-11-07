// English A1, class 31 (docs/LESSONS_PLAN.md). Builds on book lesson u6:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c31',
  focus: 'By the end of the class every student can use **can** to ask for permission (*Can I open the window?*) and to ask for help (*Can you help me, please?*), and answer politely (*Sure. / Of course. / Sorry, you can’t.*). The class should sound polite: *please*, a friendly tone and a polite refusal with a reason.',
  tips: [
    '*Can I …?* asks to do something yourself; *Can you …?* asks someone else to do it. Learners mix them up (*Can you open the window?* when they want to open it). Use gestures: point to yourself for *I*, to the other person for *you*.',
    'In a café or shop, *Can I have a coffee, please?* is the natural request. *Give me a coffee* sounds rude in English, even if it is normal in other languages. Explain this gently: it is about politeness, not grammar.',
    'A plain *No* sounds rude. Teach the polite refusal: *Sorry, you can’t. The baby is sleeping.*',
    'Do not introduce *could* or *may* yet; *can* is enough for A1.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask the class: *Can I close the door? Can you say your name, please?* Students answer. Ask: *What is the difference between my two questions?*' },
    { min: 10, title: 'Can I …? Can you …?', md: 'Board page 1. Sort the requests into asking for permission and asking for help.' },
    { min: 10, title: 'Polite answers', md: 'Board page 2. Read the library dialogue in roles; then students match requests and answers.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Being polite', md: 'Board page 3. Students make the rude requests polite.' },
    { min: 5, title: 'Exam corner', md: 'Board page 4: choose the reply, A2 Key style.' },
    { min: 5, title: 'Close', md: 'Each student asks the teacher for something politely. Set the homework.' },
  ],
  board: [
    { title: 'Can I …? Can you …?', blocks: [
      { t: 'examples', items: [
        { s: '**Can I** open the window?', n: 'Permission: I want to do something.' },
        { s: '**Can I** have a glass of water, please?', n: 'Asking for something, very common.' },
        { s: '**Can you** help me, please?', n: 'Help: I want you to do something.' },
        { s: '**Can you** say that again, please?', n: 'Very useful in class!' },
      ] },
      { t: 'ex', kind: 'sort', h: 'Permission or help?', groups: ['permission (Can I …?)', 'help (Can you …?)'], explain: ['groups'], items: [
        { s: 'Can I sit here?', g: 0, why: 'I want to sit: permission.' },
        { s: 'Can you close the door, please?', g: 1, why: 'I want you to close it: help.' },
        { s: 'Can I use your phone?', g: 0, why: 'I want to use it: permission.' },
        { s: 'Can you spell your name?', g: 1, why: 'I want you to spell it: help.' },
      ] },
    ] },
    { title: 'Polite answers', blocks: [
      { t: 'dialogue', title: 'In the library', lines: [
        { who: 'Ben', s: 'Excuse me, can I sit here?' },
        { who: 'Woman', s: 'Sure, no problem.' },
        { who: 'Ben', s: 'Thanks. Can you tell me the time, please?' },
        { who: 'Woman', s: 'Of course. It’s half past three.' },
        { who: 'Ben', s: 'Can I use my phone here?' },
        { who: 'Woman', s: 'Sorry, you can’t. It’s a quiet room.' },
      ] },
      { t: 'ex', kind: 'match', h: 'Match the request and the answer.', pairs: [
        ['Can I open the window?', 'Sure, it’s very hot.'],
        ['Can you help me, please?', 'Of course. What’s the problem?'],
        ['Can I use your pen?', 'Sorry, I need it.'],
        ['Can I have a coffee, please?', 'Sure. Milk and sugar?'],
      ] },
    ] },
    { title: 'Make it polite', blocks: [
      { t: 'ex', kind: 'transform', h: 'Make the request polite. Start with the word given.', items: [
        { q: 'Give me the menu.', cue: 'Can', a: ['Can I have the menu, please?', 'Can you give me the menu, please?', 'Can I have the menu?'], why: 'Ask with *Can I have …?* or *Can you …?* and *please*.' },
        { q: 'Close the door.', cue: 'Can', a: ['Can you close the door, please?', 'Can you close the door?'], why: 'Ask someone else: *Can you …?*' },
        { q: 'I want to sit here.', cue: 'Can', a: ['Can I sit here?', 'Can I sit here, please?'], why: 'Ask for permission: *Can I …?*' },
      ] },
    ] },
    { title: 'Exam corner: choose the reply', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the best reply.', items: [
        { q: '“Can I borrow your dictionary?”', o: ['Sure, here you are.', 'Yes, I can.', 'No, it isn’t.'], why: 'Answer permission with *Sure* or *Of course*, not *Yes, I can*.' },
        { q: '“Can you carry this bag for me?”', o: ['Of course.', 'Yes, you can.', 'No, I’m not.'], why: 'Someone asks for your help: *Of course.*' },
        { q: '“Can I use the phone in here?”', o: ['Sorry, you can’t.', 'Sorry, I can’t.', 'No, thank you.'], why: 'A polite refusal for permission: *Sorry, you can’t.*' },
      ] },
      { t: 'tip', art: 'owl', md: 'A trap in the exam: *Can I …?* is often answered with **Sure** or **Sorry, you can’t**, not with *Yes, I can*. Think about who does the action.' },
    ] },
  ],
  activities: {
    one: { title: 'Busy day', md: 'Play three situations: a café (the student orders), an office (the student asks to use the printer and asks you to help with a form), a train (the student asks if they can sit down and open the window). Refuse one request politely each time, so the student also hears *Sorry, you can’t.*' },
    small: { title: 'Yes or no?', md: 'Each student writes three requests on a piece of paper (or in the chat to you). Students take turns asking a classmate; the classmate must answer politely and give a reason when they say no. Note the best polite answers on the board.' },
    group: { title: 'Requests chain', md: 'In breakout rooms of four, students sit in a circle (by name order). Each student asks the next one a request; the answer must be different from all the answers before it (*Sure*, *Of course*, *No problem*, *Sorry, you can’t, because …*). Back together, collect the answers on the board.' },
  },
  homework: { book: 'u6:p2', md: 'Finish book lesson 2 of unit 6 (Can I open the window?), including the speaking task. Then write four polite requests for a hotel: two with *Can I …?* and two with *Can you …?*' },
};
