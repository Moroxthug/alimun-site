// English C1, class 8 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u2:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c08',
  focus: 'By the end every student talks about memory precisely: memories that are vivid, hazy, fond or painful, a clear or vague recollection, idioms such as *ring a bell*, *slip your mind*, *jog someone’s memory* and *within living memory*, and the patterns of *remember*, *remind* and *recall*. The speaking goal: tell a memory and describe how clearly it is remembered and how it feels.',
  tips: [
    '*Remind* needs a person: *remind someone to do something*, *remind someone of something*. *Remember* does not. This is the most frequent mistake in the lesson.',
    '*Remember doing* (a memory of the past) and *remember to do* (not forget a task) change meaning. Students know this from B2 but still mix them under pressure.',
    'Idioms sound unnatural when they are forced. Ask students to use each one in a situation where a native speaker really would: a name you almost remember, a birthday you forgot.',
    'Personal memories can be sensitive. Offer a light topic (a first job, a school trip) and let students choose what they share.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is your earliest memory? How clear is it?* Write the adjectives students use, then add *vivid*, *hazy* and *dim* if no one says them.' },
    { min: 12, title: 'Memories and how they feel', md: 'Show board page 1. Students complete the sentences from the bank, then use two of the phrases about themselves.' },
    { min: 10, title: 'Remember, remind, recall', md: 'Show board page 2. Students fix the mistakes in pairs and explain each one.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 1. Students choose alone, then compare and explain what fixed the answer.' },
    { min: 5, title: 'Close', md: 'Each student says one thing that always reminds them of their childhood. Set the homework.' },
  ],
  board: [
    { title: 'Memories and how they feel', blocks: [
      { t: 'ex', kind: 'bank', h: 'Complete each sentence with a word from the bank. Two words are not needed.', extra: ['remind', 'dark'], items: [
        { q: 'I have only a ___ memory of my first school; I was barely four.', a: 'hazy', why: 'An unclear memory is *hazy*.' },
        { q: 'Her face is familiar, but I just can’t ___ her.', a: 'place', why: '*Can’t place someone*: cannot remember where you know them from.' },
        { q: 'The smell of cut grass always ___ me of my grandfather’s garden.', a: 'reminds', why: '*Remind someone of something*.' },
        { q: 'Do you ___ meeting him at the conference last year?', a: 'recall', why: '*Recall* + *-ing*: a formal word for *remember*.' },
        { q: 'His name was on the tip of my ___ all evening.', a: 'tongue', why: '*On the tip of my tongue*: almost remembered.' },
      ] },
    ] },
    { title: 'Remember, remind, recall', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Can you [remember] me to call the bank tomorrow?', a: ['remind'], why: 'Someone else helps you not to forget: *remind someone to do*.' },
        { s: 'I’ll never forget [to meet] her for the first time.', a: ['meeting'], why: 'A memory of the past: *forget* or *remember* + *-ing*.' },
        { s: 'Sorry, your message completely [slipped from] my mind.', a: ['slipped'], why: 'The idiom is *slip your mind*, with no preposition.' },
        { s: 'Please [remind] to lock the back door when you leave.', a: ['remember'], why: 'No person after the verb: *remember to do*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 1', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 1): choose the word which best fits each gap.', items: [
        { q: 'I have a ___ recollection of the day we moved house, although I was only six.', o: ['distinct', 'bold', 'strong', 'loud'], why: '*A distinct recollection* is the fixed collocation.' },
        { q: 'The name ___ a bell, but I can’t think where I’ve heard it.', o: ['rings', 'sounds', 'calls', 'strikes'], why: 'The idiom is *ring a bell*.' },
        { q: '___ living memory, the river has never frozen over.', o: ['Within', 'Inside', 'Through', 'During'], why: '*Within living memory*: as far back as anyone alive can remember.' },
        { q: 'The smell of the bakery brought ___ memories of her childhood.', o: ['back', 'up', 'round', 'over'], why: '*Bring back memories* is the fixed phrase.' },
        { q: 'He has a memory like a ___; he forgets everything you tell him.', o: ['sieve', 'net', 'hole', 'basket'], why: 'The idiom is *a memory like a sieve*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 1** the four options often mean almost the same thing. What decides the answer is the **collocation** or the fixed phrase. If two options seem possible, read the words after the gap: they usually rule one out.' },
    ] },
  ],
  activities: {
    one: { title: 'A memory in detail', md: 'The student describes a memory of a place in detail: what they remember vividly, what is hazy, what they have no recollection of. Ask *What brings it back? Does anything remind you of it now?* Note each memory phrase and correct the patterns of *remind* and *remember*.' },
    small: { title: 'Jog my memory', md: 'Each student thinks of a well-known film, song or event without naming it. The others ask questions to jog their memory (*Does it ring a bell if I say…?*) until someone recognises it. Then each student says which memory phrase they used most.' },
    group: { title: 'Memory test', md: 'Post a list of twelve objects in the chat for thirty seconds, then remove it. In breakout rooms of three, students recall as many as they can and talk about how they remembered them (*It came back to me when…*, *I have a vague recollection of…*). Each room reports its score and its best tip for remembering.' },
  },
  homework: { book: 'u2:p3', md: 'Finish lesson 3 of unit 2 if needed, then do lesson 4 (The boat he never sailed). Write about 120 words about your earliest memory: how clear it is, how it feels and what reminds you of it, with at least four phrases from the lesson.' },
};
