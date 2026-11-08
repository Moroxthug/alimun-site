// English B2, class 34 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u7:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c34',
  focus: 'By the end of the class every student can read a longer text about an unsolved mystery, follow the different explanations, judge which is most convincing, and give their own theory using the deduction and speculation language of unit 7. Reading skills for B2 First Part 5 (detail and opinion questions) are practised.',
  tips: [
    'Ask students to read the book text before class if possible, so class time goes on discussion. If not, give eight minutes of silent reading and keep it quiet.',
    'In Part 5, the wrong options often use words from the text but change the meaning. Show students one example of this trap.',
    'During the discussion, insist on evidence: every theory needs a *because*, using details from the text.',
    'Vocabulary from the text (*vanish*, *trace*, *theory*, *evidence*, *witness*) is useful for the writing in later units; collect it on the board.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Do you know any famous unsolved mysteries?* Students share in one or two sentences.' },
    { min: 10, title: 'Reading', md: 'Show board page 1. Students read the short version of the story and answer the true or false questions alone.' },
    { min: 10, title: 'Words for mysteries', md: 'Show board page 2. Students match the words and use three of them in sentences about the story.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: B2 First Reading Part 5 style questions. Students choose alone, then discuss why the other options are wrong.' },
    { min: 5, title: 'Close', md: 'Each student gives their final theory in one sentence with a deduction modal. Set the homework.' },
  ],
  board: [
    { title: 'The story', blocks: [
      { t: 'reading', title: 'Three keepers, no trace', md: 'In December 1900 a supply boat reached a lighthouse on a small island off the Scottish coast. The three keepers who should have been there had vanished. The beds were unmade, a meal stood untouched on the table, and one set of oilskins, the heavy coats used in storms, was still hanging by the door.\n\nThe last entries in the logbook described a terrible storm, yet people on the mainland said the weather had been calm. Some believed a giant wave had swept the men away; others suggested that one keeper had gone mad. Over a century later, nobody knows for certain what happened.' },
      { t: 'ex', kind: 'tf', h: 'True or false?', items: [
        { q: 'The keepers left in the supply boat.', a: 'f', why: 'The boat arrived and found them gone.' },
        { q: 'All the heavy coats were missing.', a: 'f', why: 'One set of oilskins was still hanging by the door.' },
        { q: 'The logbook and the people on the mainland described the weather differently.', a: 't', why: 'The log described a storm; the mainland said it was calm.' },
      ] },
    ] },
    { title: 'Words for mysteries', blocks: [
      { t: 'ex', kind: 'match', h: 'Match the words to their meanings.', pairs: [
        ['vanish', 'disappear suddenly and completely'],
        ['trace', 'a small sign that someone was there'],
        ['theory', 'an idea that tries to explain something'],
        ['evidence', 'facts that show something is true'],
        ['witness', 'a person who saw something happen'],
      ] },
    ] },
    { title: 'Exam corner: Reading Part 5', blocks: [
      { t: 'text', md: 'In the format of B2 First Reading and Use of English Part 5: choose the answer that fits best according to the text.' },
      { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
        { q: 'What does the writer suggest about the coat by the door?', o: ['It suggests one keeper went outside without it.', 'It proves all three men left in a storm.', 'It shows the keepers had left the island by boat.'], why: 'One coat stayed, so one man may have gone out without it; it proves nothing about all three.' },
        { q: 'Why is the weather important to the mystery?', o: ['The two reports of it do not agree.', 'It was the worst storm of the century.', 'It stopped the supply boat for weeks.'], why: 'The log describes a storm; the mainland says it was calm.' },
        { q: 'What is the writer’s final view?', o: ['The truth is still unknown.', 'The giant wave theory is correct.', 'One keeper was clearly to blame.'], why: '*Nobody knows for certain what happened.*' },
      ] },
      { t: 'tip', md: 'In Part 5, wrong options often repeat words from the text (*storm*, *boat*) but say something the text does not. Find the exact lines and check the meaning, not just the words.' },
    ] },
  ],
  activities: {
    one: { title: 'Build the case', md: 'Together list every fact from the text. The student builds the strongest theory they can, then you argue for a different theory and the student must answer with evidence and deduction language (*They can’t have left by boat, because…*). End with the student’s final verdict in three sentences.' },
    small: { title: 'Rival theories', md: 'In pairs, each pair gets one theory in the chat (a giant wave, a keeper went mad, they left secretly). Pairs have six minutes to argue for it with evidence from the text and modals of deduction. Each pair presents in one minute; the group votes on the most convincing case.' },
    group: { title: 'Investigation rooms', md: 'Breakout rooms of three each investigate one clue (the unmade beds, the coat, the logbook, the calm weather). They decide what it must, might and can’t mean. Back in the main room, each room reports its clue and the class builds one shared theory on the blank page.' },
  },
  homework: { book: 'u7:p4', md: 'Finish book lesson 4 of unit 7 (The lighthouse keepers). Then write about 120 words on another unsolved mystery you know or find online, with at least four deductions about what happened.' },
};
