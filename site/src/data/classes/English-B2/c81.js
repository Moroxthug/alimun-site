// English B2, class 81 (docs/LESSONS_PLAN.md). Exam practice: B2 First Speaking, Parts 1 to 4 (units 13 to 16). Draft for the owner's review.
export const LESSON = {
  id: 'c81',
  focus: 'By the end of the class every student has practised all four parts of B2 First Speaking (interview, long turn with two photos, collaborative task, discussion), knows what the examiner listens for (grammar and vocabulary, discourse management, pronunciation, interactive communication) and has received one specific piece of feedback on their speaking. Topics come from units 13 to 16: the arts, society, risk and challenge.',
  tips: [
    'Time each part strictly: Part 1 about 2 minutes, Part 2 one minute per candidate plus 30 seconds, Part 3 two minutes plus one minute, Part 4 about 4 minutes.',
    'In Part 2 students must compare the photos and answer the question, not just describe. Write *compare* and *answer* on the board.',
    'In Part 3 there is no right answer; marks come from a real discussion. Stop pairs who give speeches one after another.',
    'Give feedback against the four criteria and choose one thing for each student to improve, not ten.',
    'In online classes, use breakout rooms of two for Parts 2 and 3, and visit each room.',
  ],
  plan: [
    { min: 5, title: 'The four criteria', md: 'Show board page 1. Explain the criteria in plain words and the timing of each part.' },
    { min: 8, title: 'Part 1', md: 'Show board page 2. Ask each student two Part 1 questions.' },
    { min: 15, title: 'Part 2', md: 'Show board page 3. Students work in pairs: one minute each comparing the photos and answering the question; the partner answers the short follow-up.' },
    { min: 15, title: 'Parts 3 and 4', md: 'Show board page 4. Pairs discuss for two minutes, then decide in one minute. Then ask Part 4 questions to each student.' },
    { min: 12, title: 'Feedback', md: 'Use the activity for your class size below for the feedback round, then give each student one point to work on.' },
    { min: 5, title: 'Close', md: 'Set the homework.' },
  ],
  board: [
    { title: 'What the examiner listens for', blocks: [
      { t: 'table', caption: 'B2 First Speaking', explain: ['head', 'col1'], head: ['Criterion', 'In plain words'], rows: [
        ['Grammar and vocabulary', 'a range of structures and words, used correctly'],
        ['Discourse management', 'longer answers that are organised and relevant'],
        ['Pronunciation', 'clear sounds, stress and intonation'],
        ['Interactive communication', 'starting, responding and keeping the discussion going'],
      ] },
    ] },
    { title: 'Part 1: interview', blocks: [
      { t: 'text', md: '*What kind of music or art do you enjoy? Have you ever done something that frightened you? What would you like to learn next year, and why? Do you prefer working alone or in a team?*' },
      { t: 'ex', kind: 'choice', h: 'Which answer is better for Part 1?', items: [
        { q: '*Do you enjoy going to museums?*', o: ['Yes, especially science museums. Last month I went to one in Munich, and I loved the interactive rooms.', 'Yes.', 'Museums are buildings where you can see art and history.'], why: 'A direct answer with a reason or example.' },
      ] },
    ] },
    { title: 'Part 2: two photos', blocks: [
      { t: 'text', md: '**Photo A:** a person climbing a steep rock face. **Photo B:** a person giving a speech to a large audience. **Question:** *Why do you think these people have chosen to do these challenging things?* **Partner’s question:** *Which of these would you find more difficult?*' },
      { t: 'examples', items: [
        { s: '**Whereas** the climber is facing a physical danger, the speaker’s challenge is more emotional.', n: 'Comparing the photos.' },
        { s: 'She **might have** prepared for months.', n: 'Speculating.' },
        { s: '**I’d imagine** they both want to prove something to themselves.', n: 'Answering the question.' },
      ] },
    ] },
    { title: 'Parts 3 and 4: discussion', blocks: [
      { t: 'text', md: '**Part 3:** *Here are some ways people challenge themselves: learning a new language, running a marathon, starting a business, moving abroad, performing on stage. Talk together about what people can learn from each challenge.* Then decide: *Which one would teach a young person the most?* **Part 4:** *Is it important for young people to take risks? Should schools teach people how to deal with failure?*' },
      { t: 'tip', art: 'owl', md: 'In B2 First Speaking Part 3 you do not need to agree, and you do not need to discuss every prompt. Use phrases like *What do you think about…?*, *I see your point, but…* and *Shall we decide?* to show you are interacting.' },
    ] },
  ],
  activities: {
    one: { title: 'Full mock speaking', md: 'Do all four parts as the examiner and also as the partner in Part 3. Record or note the student’s answers, then give feedback on each criterion with one example sentence from what they said.' },
    small: { title: 'Peer examiners', md: 'Students take turns: two speak, the others are examiners with the criteria table. After each part, the examiners give one positive comment and one suggestion.' },
    group: { title: 'Breakout pairs', md: 'In breakout rooms of two, students do Parts 2 and 3 with the board tasks. Visit each room for one minute. Bring everyone back and share the best phrases you heard.' },
  },
  homework: { book: 'u16:p4', md: 'Record yourself doing Part 2 with two photos of your choice (one minute) and listen back with the four criteria. Write down one thing to improve.' },
};
