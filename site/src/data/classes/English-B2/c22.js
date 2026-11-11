// English B2, class 22 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u5:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c22',
  focus: 'By the end of the class every student can mix the second and third conditionals when the times are different: a past cause with a present result (*If she had saved, she would be rich now*) and a present fact with a past result (*If he spoke French, he would have understood*). Students choose the form by asking *when* each half happens.',
  tips: [
    'Mixed conditionals are about time, not grammar rules. For every sentence, write two arrows on the board: **cause: when?** and **result: when?** Most mistakes disappear once students label the times.',
    'Time words are the key clue: *now*, *today*, *still* point to *would* + infinitive; *yesterday*, *last year* point to *would have*. Ask students to underline them.',
    'Learners whose language has fewer conditional forms often produce *If I had studied medicine, I would have been a doctor now*. Show that *now* needs *would be*.',
    'Mixed conditionals are a natural way to talk about regrets and personality. Keep the examples personal so students remember them.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Say: *If I hadn’t become a teacher, I would be… now.* Ask students to guess. Then ask each student: *What would your life be like now if you had made one different choice?*' },
    { min: 12, title: 'Mixing times', md: 'Show board page 1. Label the times on each example. Build one more example of each type with the class.' },
    { min: 10, title: 'Practice', md: 'Show board page 2. Students choose and fix alone, then check together, labelling the times.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: an open cloze in the format of B2 First Reading and Use of English Part 2. Read the text aloud once, then students fill the gaps alone and compare.' },
    { min: 5, title: 'Close', md: 'Each student makes one mixed conditional about themselves. Set the homework.' },
  ],
  board: [
    { title: 'Mixed conditionals', blocks: [
      { t: 'table', caption: 'When is the cause? When is the result?', explain: ['head', 'col0'], head: ['Times', 'Form', 'Example'], rows: [
        ['past cause → present result', 'if + past perfect, would + infinitive', 'If I had taken the job, I would live in Paris now.'],
        ['present cause → past result', 'if + past simple, would have + past participle', 'If he were more careful, he wouldn’t have lost his keys.'],
        ['past cause → present result (negative)', 'if + hadn’t + past participle, wouldn’t + infinitive', 'If we hadn’t met, I wouldn’t be so happy today.'],
      ] },
      { t: 'text', md: 'Ask two questions for every sentence: **When is the cause? When is the result?** A present situation (*he is careless*, *I live here*) uses the past simple. A past event (*I took the job*) uses the past perfect.' },
    ] },
    { title: 'Practice', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: 'If I had gone to bed earlier, I ___ so tired now.', o: ['wouldn’t be', 'wouldn’t have been', 'won’t be'], why: '*now* is present: *would* + infinitive.' },
        { q: 'If she ___ shy, she would have spoken at the meeting.', o: ['weren’t', 'hadn’t been', 'isn’t'], why: 'She is shy in general (present cause): past simple *weren’t*.' },
        { q: 'If they had booked a table, we ___ outside right now.', o: ['would be sitting', 'would have sat', 'will sit'], why: 'Present result in progress: *would be sitting*.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
        { s: 'If I had studied medicine, I [would have been] a doctor now.', a: ['would be'], why: '*now*: present result.' },
        { s: 'If he [had spoken] French, he would understand the film now. (He doesn’t speak French.)', a: ['spoke'], why: 'A present fact: past simple.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 2', blocks: [
      { t: 'text', md: 'In the format of B2 First Reading and Use of English Part 2: write one word in each gap.\n\n*Ten years ago I was offered a job in Canada, but I turned (1) ___ down. If I (2) ___ accepted it, I would probably be living in Toronto now. Sometimes I wonder what my life would be like (3) ___ I had said yes. But if I had gone, I wouldn’t have met my wife, so I don’t regret it (4) ___ all.*' },
      { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
        { q: 'I was offered a job in Canada, but I turned ___ down.', a: ['it'], why: '*turn something down*: the object goes in the middle.' },
        { q: 'If I ___ accepted it, I would probably be living in Toronto now.', a: ['had'], why: 'Past cause: past perfect *had accepted*.' },
        { q: 'I wonder what my life would be like ___ I had said yes.', a: ['if'], why: 'A conditional clause: *if*.' },
        { q: 'I don’t regret it ___ all.', a: ['at'], why: 'The fixed phrase *not at all*.' },
      ] },
      { t: 'tip', md: 'Part 2 gaps are usually small grammar words. Read the whole sentence first and ask: is a **pronoun**, **preposition**, **auxiliary** or **linker** missing? Fixed phrases (*at all*, *in spite of*) come up often.' },
    ] },
  ],
  activities: {
    one: { title: 'Two lives', md: 'Ask the student to name two past decisions and two things about their personality. For each, build one mixed conditional together (*If I hadn’t moved to Madrid, I wouldn’t speak Spanish now; If I were more patient, I would have finished the course*). Then the student asks you the same and spots your mistakes on purpose (make two).' },
    small: { title: 'Famous what-ifs', md: 'Each student chooses a famous person or a historical event and makes two mixed conditionals about it (*If the internet hadn’t been invented, we wouldn’t be in this class now*). The group decides if the time logic is right for each sentence.' },
    group: { title: 'Regret cards', md: 'Breakout rooms of three: each student writes two situations in the chat, one past (*I didn’t learn to swim*) and one present (*I’m not good at maths*). The others turn each into a mixed conditional. Back together, each room reads its best two sentences and labels the times.' },
  },
  homework: { book: 'u5:p2', md: 'Finish book lesson 2 of unit 5 (Mixing times), including the speaking task. Then write four mixed conditionals about your own life, two of each type, and label the times of the cause and the result.' },
};
