// English B2, class 8 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u2:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c08',
  focus: 'By the end every student links a story so it flows: time words (as soon as, while, by the time), sequence (at first, then, eventually, in the end) and surprise (it turned out that, to my surprise). The speaking goal: tell a short anecdote that sounds natural, with at least five linkers.',
  tips: [
    '*Eventually* means *after a long time*, not *possibly* (a false friend for many speakers). *In the end* means *finally, after everything*.',
    '*At the end* is a place or point (*at the end of the film*); *in the end* means *finally*. A very common mistake.',
    '*It turned out that…* shows a surprise discovery. Model it in your own example.',
    'In speaking, students tend to use only *and then*. Ban it for one activity and watch the range grow.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Tell a short anecdote with only *and then*. Ask students how to make it better.' },
    { min: 12, title: 'Linkers', md: 'Show board page 1. Students sort the linkers by job, then add one more of their own.' },
    { min: 10, title: 'Common mistakes', md: 'Show board page 2. Students fix the mistakes and explain the difference.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: B2 First Use of English Part 1. Students choose alone, then compare.' },
    { min: 5, title: 'Close', md: 'Each student finishes: *It turned out that…* Set the homework.' },
  ],
  board: [
    { title: 'Linkers for stories', blocks: [
      { t: 'ex', kind: 'sort', h: 'What does each linker do?', groups: ['time', 'sequence', 'surprise'], explain: ['groups'], items: [
        { s: 'as soon as', g: 0, why: 'Immediately after.' },
        { s: 'by the time', g: 0, why: 'Before or at a point.' },
        { s: 'eventually', g: 1, why: 'After a long time.' },
        { s: 'in the end', g: 1, why: 'Finally.' },
        { s: 'it turned out that', g: 2, why: 'A surprising discovery.' },
        { s: 'to my surprise', g: 2, why: 'Something unexpected.' },
      ] },
    ] },
    { title: 'Common mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'We waited for hours, but [at the end] the flight was cancelled.', a: ['in the end'], why: '*In the end* means finally.' },
        { s: 'I’ll call you [eventually] I arrive.', a: ['as soon as'], why: 'Immediately after: *as soon as*.' },
        { s: 'He seemed angry, but it turned out [what] he was just tired.', a: ['that'], why: '*It turned out that…*' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 1', blocks: [
      { t: 'ex', kind: 'select', h: 'In the format of the B2 First exam (Reading and Use of English, Part 1): choose the word that best fits each gap.', items: [
        { q: 'After months of searching, she ___ found the perfect flat.', o: ['eventually', 'actually', 'lately'], why: '*eventually*: after a long time.' },
        { q: '___ the time we got to the cinema, the film had started.', o: ['By', 'In', 'Until'], why: '*By the time*: before or at that point.' },
        { q: 'The noise was frightening, but it ___ out to be a cat.', o: ['turned', 'came', 'found'], why: '*turn out to be*: the surprising truth.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Part 1 options often look similar in meaning. Think about the exact phrase: *by the time*, *turn out*, *in the end* are fixed.' },
    ] },
  ],
  activities: {
    one: { title: 'Anecdote coach', md: 'The student tells an anecdote (a trip, a mistake, a lucky moment) for two minutes without *and then*. Note the linkers used. Then they tell it again, adding two new linkers from the board.' },
    small: { title: 'Linker cards', md: 'Each student gets three linkers in the chat. The group tells one story together, each student using their linkers when it is their turn. A linker used well scores a point.' },
    group: { title: 'Twist endings', md: 'Breakout rooms of three get a story start in the chat and must reach a surprise ending with *it turned out that*. Each room tells its story; the class votes for the best twist.' },
  },
  homework: { book: 'u2:p3', md: 'Finish lesson 3 of unit 2, then do lesson 4 (A story with a twist). Write a 120-word anecdote with at least five linkers from the lesson.' },
};
