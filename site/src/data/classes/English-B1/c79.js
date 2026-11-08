// English B1, class 79 (docs/LESSONS_PLAN.md). Builds on book lesson u16:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c79',
  focus: 'By the end of the class every student knows every part of the B1 Preliminary exam (Reading 6 parts, Writing 2 parts, Listening 4 parts, Speaking 4 parts), how long each paper takes, what each part tests and one strategy per paper. They also know how they will keep improving towards B2.',
  tips: [
    'Make this a practical class, not a lecture: students do one short task from each paper.',
    'Stress timing: Reading 45 minutes, Writing 45 minutes, Listening about 30 minutes, Speaking 12 to 17 minutes in pairs.',
    'Ask each student which paper worries them most and note it: it decides their focus in the last classes.',
    'Talk about B2 as the next step, not the end: what changes (longer texts, more formal writing, opinions in speaking).',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What do you already know about the B1 exam?* Collect ideas on the board.' },
    { min: 12, title: 'The four papers', md: 'Show board page 1. Go through the table; students match each paper with its strategy.' },
    { min: 15, title: 'A taste of each paper', md: 'Show board page 2. Students do the mini tasks one by one; reveal after each.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 8, title: 'Exam corner', md: 'Show board page 3: speaking part 1 questions. Each student answers two.' },
    { min: 5, title: 'Close', md: 'Each student names their weakest paper and one thing they will do this week. Set the homework.' },
  ],
  board: [
    { title: 'The B1 Preliminary exam', blocks: [
      { t: 'table', caption: 'The four papers', explain: ['head', 'col1', 'col2'], head: ['Paper', 'Parts and time', 'What it tests'], rows: [
        ['Reading', '6 parts, 45 minutes', 'understanding notices, texts and gaps'],
        ['Writing', '2 parts, 45 minutes', 'an email, then an article or a story'],
        ['Listening', '4 parts, about 30 minutes', 'short messages, interviews and conversations'],
        ['Speaking', '4 parts, 12 to 17 minutes', 'talking about yourself, a photo and a discussion with a partner'],
      ] },
      { t: 'ex', kind: 'match', h: 'Match each paper with a strategy.', pairs: [
        ['Reading', 'Read the questions before the text.'],
        ['Writing', 'Answer every point in the task.'],
        ['Listening', 'Use the first listening for the general idea and the second to check.'],
        ['Speaking', 'Give reasons and ask your partner questions.'],
      ] },
    ] },
    { title: 'A taste of each paper', blocks: [
      { t: 'ex', kind: 'choice', h: 'Reading part 1: what does the message say?', items: [
        { q: 'GYM: Lockers must be emptied by 10 pm. Anything left will be removed.', o: ['Take your things out of the locker before 10 pm.', 'The gym closes at 10 pm.', 'Lockers cost money after 10 pm.'], why: '*must be emptied by 10 pm*.' },
      ] },
      { t: 'ex', kind: 'gap', h: 'Reading part 6: write one word.', items: [
        { q: 'I have lived here ___ 2021.', a: ['since'], why: 'A starting point: *since*.' },
      ] },
      { t: 'text', md: '**Writing part 2 (choose one):** an **article** (*Your favourite place to relax*) or a **story** that begins *When I opened the door, I couldn’t believe my eyes.* About 100 words.' },
    ] },
    { title: 'Exam corner: Speaking part 1', blocks: [
      { t: 'examples', items: [
        { s: 'Where do you live? Do you like living there?', n: 'Answer, then give a reason.' },
        { s: 'Tell us about a teacher you remember.', n: 'Two or three sentences with past tenses.' },
        { s: 'What do you enjoy doing in your free time?', n: '*enjoy* + -ing.' },
        { s: 'Do you think you will use English in your job in the future?', n: 'A future form and a reason.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Speaking part 1 the examiner asks **you** questions. Never answer with one word: give a reason or an example, but keep it short, about two or three sentences.' },
    ] },
  ],
  activities: {
    one: { title: 'Personal exam plan', md: 'With the student, rate each paper from 1 to 5 for confidence. Build a four-week plan for the two weakest papers with book units and practice rounds, and write it in the chat for them to keep.' },
    small: { title: 'Exam experts', md: 'Give each student one paper. They have five minutes to prepare a one-minute explanation of it for the group: number of parts, time and one tip. The others ask one question each.' },
    group: { title: 'Exam quiz', md: 'In breakout rooms of three, students answer quiz questions about the exam in the chat (How long is Writing? What do you do in Speaking part 3?). Rooms compare answers in the main room; the room with most right answers explains one strategy.' },
  },
  homework: { book: 'u16:p4', md: 'Do book lesson 4 of unit 16 (The B1 exam, step by step). Write down your weakest paper and do one practice round for it before the next class.' },
};
