// English B1, class 24 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u5:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c24',
  focus: 'By the end of the class every student can read a longer article about a real change in a town, follow how it happened step by step, and talk about it using the passive and comparisons from unit 5 (*Plastic bags were banned. Waste is much lower than before.*). The reading skill today is following a sequence of events and finding numbers and results.',
  tips: [
    'Before reading, ask students to predict three things the town did. Prediction makes the reading faster and more interesting.',
    'Numbers and results are often the answers in Reading part 3. Train students to underline every number, date and percentage on the first reading.',
    'The passive appears naturally in news about towns (*were introduced, was reduced*). Ask students to find the passive verbs after the comprehension questions, not before.',
    'In the discussion, students may not know facts about their own town. Accept guesses and opinions: the aim is speaking, not information.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *How could a town use less plastic?* Write three predictions on the board.' },
    { min: 15, title: 'Read the article', md: 'Show board page 1. Students read once to check their predictions, then a second time for the true or false questions.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 2: questions in the format of B1 Preliminary Reading part 3. Students answer alone, then show the sentence that proves each answer.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Language from the text', md: 'Show board page 3. Students complete the sentences with the right form of the word, then find two passive verbs in the article.' },
    { min: 5, title: 'Close', md: 'Each student says one change they would like in their town, with a comparison. Set the homework.' },
  ],
  board: [
    { title: 'A town without plastic bags', blocks: [
      { t: 'reading', title: 'How Millbrook said goodbye to plastic', md: 'Five years ago, the small town of Millbrook threw away almost two tonnes of plastic every week. Today the figure is less than half that. How did they do it?\n\nFirst, free plastic bags were banned in all shops, and every family was given two strong cloth bags. Then water fountains were installed in the town centre, so people could refill bottles instead of buying new ones.\n\nThe biggest change came in the school. Children were taught to sort their rubbish, and soon they were checking their parents’ bins at home. “My daughter is much stricter than the council,” laughs one father.\n\nNot everyone was happy at first. Some shop owners said the changes were too expensive. But most now agree that the town is cleaner and slightly cheaper to run than before.' },
      { t: 'ex', kind: 'tf', h: 'Read the article. Are the sentences true or false?', items: [
        { q: 'Millbrook now throws away less than one tonne of plastic a week.', a: 't', why: 'Two tonnes before, “less than half that” today.' },
        { q: 'Families had to buy their own cloth bags.', a: 'f', why: '“every family was given two strong cloth bags”.' },
        { q: 'All shop owners liked the changes from the start.', a: 'f', why: '“Not everyone was happy at first.”' },
      ] },
    ] },
    { title: 'Exam corner: Reading part 3', blocks: [
      { t: 'text', md: 'In the format of the B1 Preliminary exam, Reading part 3: choose the right answer.' },
      { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
        { q: 'Why were water fountains installed?', o: ['So that people would buy fewer plastic bottles.', 'Because the town had no clean water.', 'To make the town centre more beautiful.'], why: '“so people could refill bottles instead of buying new ones”.' },
        { q: 'What does the father mean about his daughter?', o: ['She checks the rubbish more carefully than the council does.', 'She works for the council.', 'She does not like recycling.'], why: '“much stricter than the council”: she checks the bins at home.' },
        { q: 'What do most people think now?', o: ['The changes were worth it.', 'The changes were too expensive.', 'The town should go back to plastic bags.'], why: '“the town is cleaner and slightly cheaper to run”.' },
      ] },
      { t: 'tip', md: 'In Reading part 3, a question about what someone *means* is not answered by the same words. Read the sentence around the quotation and think about the idea, not the words.' },
    ] },
    { title: 'Language from the text', blocks: [
      { t: 'ex', kind: 'wordform', h: 'Complete each sentence with the right form of the word in capitals.', items: [
        { q: 'The ___ in the town were introduced over five years.', base: 'change', a: ['changes'], why: 'A plural noun: *the changes*.' },
        { q: 'The town is much ___ than it was before.', base: 'clean', a: ['cleaner'], why: 'A comparative after *much*.' },
        { q: 'Some shop owners thought the plan was too ___.', base: 'expense', a: ['expensive'], why: 'An adjective after *too*.' },
      ] },
      { t: 'ex', kind: 'spot', h: 'Tap the passive verbs.', items: [
        { s: 'First, free plastic bags [were banned] and every family [was given] two cloth bags.', why: '*were banned* and *was given*: *be* + past participle.' },
        { s: 'Water fountains [were installed] and children [were taught] to sort their rubbish.', why: '*were installed* and *were taught*.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Your town, five years from now', md: 'The student imagines their town five years after a big green project. Interview them as a journalist: *What was done first? Is the town cleaner now? Are people happier than before?* The student must answer with at least three passive verbs and three comparisons. Then swap: the student interviews you about Millbrook.' },
    small: { title: 'Was it a good idea?', md: 'Give each student a role: a shop owner, a parent, a child, a council worker in Millbrook. Each says how the changes affected them, with one comparison (*My shop is slightly more expensive to run*). The group then decides whether their own town should do the same and why.' },
    group: { title: 'Plan a project', md: 'Breakout rooms of three or four. Each room plans a project for their town to cut one kind of waste (food, paper, plastic). They write in the chat what will be done first, second and third (*Bins will be put…*), and one expected result with a comparison. Back together, the class chooses the most realistic plan.' },
  },
  homework: { book: 'u5:p4', md: 'Finish book lesson 4 of unit 5 (How Westbridge cut its plastic), including the speaking task. Then write a short news article (70 to 90 words) about a real or imagined change in your town, with at least three passive verbs.' },
};
