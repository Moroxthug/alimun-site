// English B2, class 48 (docs/LESSONS_PLAN.md). Builds on book lesson u10:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c48',
  focus: 'By the end of the class every student has read about adults learning new skills, can discuss learning with reasons and examples, and has practised B2 First Speaking Part 3: a two-minute collaborative discussion with a partner around five prompts, then a one-minute decision. The aim is real interaction: asking for the partner’s opinion, agreeing, disagreeing politely and moving the talk on.',
  tips: [
    'In Speaking Part 3, students often take turns giving speeches. Insist on short answers followed by a question to the partner: *What do you think?*, *Would you agree?*',
    'Teach two or three phrases for each function (agreeing, disagreeing, moving on) and keep them on the board; ban *I agree with you* used more than twice.',
    'Students who finish in thirty seconds need follow-up questions; students who never stop need a gentle signal. Time the discussion strictly at two minutes.',
    'Recycle unit 10: *I regret not starting earlier*, *you needn’t have worried*, word-family nouns like *motivation* and *confidence*.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What did you learn as an adult that you are proud of?* Collect three answers on the board.' },
    { min: 12, title: 'Reading', md: 'Board page 1. Students read the three short profiles and answer the questions.' },
    { min: 10, title: 'Discussion language', md: 'Board page 2. Go through the phrases; students practise them in quick pairs on easy topics.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Board page 3: a full Speaking Part 3 task. Pairs discuss for two minutes and decide in one; the class gives feedback with the criteria.' },
    { min: 5, title: 'Close', md: 'Each student names one skill they mean to learn and when they will start. Set the homework.' },
  ],
  board: [
    { title: 'Never too late', blocks: [
      { t: 'reading', title: 'Three late learners', md: '**Maria, 58**, took up the piano after retiring. "I regret not starting when I was young, but I needn’t have worried about being too old. My teacher says my motivation is better than most teenagers’."\n\n**Tom, 41**, learned to code while working full-time. "It meant getting up at six every morning for a year. The hardest part was keeping my confidence when nothing worked."\n\n**Aiko, 35**, learned to swim after years of being afraid of water. "I tried taking lessons twice and gave up. The third time, I chose a teacher who specialises in adult beginners, and that made all the difference."' },
      { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
        { q: 'Who found it hardest to stay positive?', o: ['Tom', 'Maria', 'Aiko'], why: 'Tom: the hardest part was keeping my confidence.' },
        { q: 'Who failed before succeeding?', o: ['Aiko', 'Maria', 'Tom'], why: 'Aiko tried twice and gave up before the third time.' },
        { q: 'Who is happy with their attitude compared with younger learners?', o: ['Maria', 'Tom', 'Aiko'], why: 'Maria: her motivation is better than most teenagers’.' },
      ] },
    ] },
    { title: 'Talking together', blocks: [
      { t: 'table', caption: 'Discussion phrases', explain: ['head', 'col0'], head: ['To…', 'Say'], rows: [
        ['ask your partner', 'What’s your view on…? / How do you feel about…?'],
        ['agree', 'That’s a good point. / I couldn’t agree more.'],
        ['disagree politely', 'I see what you mean, but… / I’m not so sure about that.'],
        ['move on', 'Shall we talk about…? / What about this one?'],
        ['decide', 'So, are we agreed that…? / I think we should go for…'],
      ] },
      { t: 'ex', kind: 'match', h: 'Match the situation with the phrase.', pairs: [
        ['You want your partner’s opinion.', 'What’s your view on this?'],
        ['You partly disagree.', 'I see what you mean, but…'],
        ['You want to change topic.', 'Shall we talk about the next one?'],
        ['You want to finish and choose.', 'So, are we agreed that…?'],
      ] },
    ] },
    { title: 'Exam corner: Speaking Part 3', blocks: [
      { t: 'tip', art: 'owl', md: 'In Part 3 the examiner marks **interaction**: you get credit for listening and responding to your partner, not only for good English. Ask, react and build on what they say.' },
      { t: 'text', md: '**Task (two minutes):** *Here are some things that can help adults learn a new skill. Talk to each other about how useful each one might be.*\n\n**Prompts:** a good teacher, free time, a friend who learns too, online videos, a clear goal.\n\n**Then (one minute):** *Decide which one is the most important.*' },
      { t: 'ex', kind: 'choice', h: 'Which answer shows the best interaction?', items: [
        { q: 'Your partner says: "I think a good teacher is the most important."', o: ['That’s a good point, especially for beginners. But what about free time? Without it, even a great teacher can’t help.', 'Yes.', 'Online videos are useful because they are free and you can watch them at any time and they are on every topic.'], why: 'It reacts to the partner, adds a reason and moves the discussion on with a question.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Teacher as partner', md: 'Do the Part 3 task with the student as their partner. First time, let them lead; second time, you lead and they must react to each point. After each round, give one mark for interaction and one for language, with one example sentence each.' },
    small: { title: 'Pairs and observers', md: 'Two students do the Part 3 task while the others observe with the phrase table, ticking each function they hear. Observers give feedback, then roles change. Everyone does the task at least once.' },
    group: { title: 'Rotating pairs', md: 'In breakout rooms of two, students do the Part 3 task for two minutes and decide in one. Change rooms and do it again with a new partner, starting from a different prompt. Back together, the class votes on the most important help for adult learners.' },
  },
  homework: { book: 'u10:p4', md: 'Finish book lesson 4 of unit 10. Then record yourself (or write) a one-minute answer to: *Is it harder to learn new things as an adult? Why?* Use three phrases from today.' },
};
