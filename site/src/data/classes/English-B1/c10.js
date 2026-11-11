// English B1, class 10 (docs/LESSONS_PLAN.md, L6). Review of book units u1 and u2. Draft for the owner's review.
export const LESSON = {
  id: 'c10',
  focus: 'A review of units 1 and 2. By the end every student can switch between the present perfect and the past simple in a conversation, use *for*, *since*, *just*, *already* and *yet*, choose the right verb pattern (*-ing* or *to*), and talk about past habits with *used to* and new situations with *get used to*. Most of the class is speaking; correct the typical mistakes from the last eight classes.',
  tips: [
    'Before the class, look at your notes from classes 2 to 9 and choose the five mistakes you heard most. Use them in the "Fix it" page.',
    'Keep explanations very short: students have seen all of this. If a point is still weak, give one example and move on to practice.',
    'Mix students who are strong with those who need support in the activity.',
    'End with a short summary on the board of what the class can now do, in sentences: it shows progress before the exam practice classes start.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What have you done this week that you have never done before? When did you do it?*' },
    { min: 10, title: 'Fix it', md: 'Show board page 1. Students find and fix the mistakes alone, then compare. Add the typical mistakes you noted in your classes.' },
    { min: 10, title: 'Tenses and patterns', md: 'Show board page 2. Students do the exercise in pairs, then say which answers were hardest.' },
    { min: 20, title: 'Activity', md: 'Use the activity for your class size below: a long speaking task that uses both units.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: B1 Preliminary Reading Part 5 with language from both units. Students work alone for five minutes, then reveal the answers.' },
    { min: 5, title: 'Close', md: 'Write on the board, with the class, what they can now do. Set the homework.' },
  ],
  board: [
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
        { s: 'I [have met] my best friend in 2015.', a: ['met'], why: '*in 2015* is finished time: past simple.' },
        { s: 'She has worked here [since] five years.', a: ['for'], why: 'A period of time: *for*.' },
        { s: 'I enjoy [to cook] for my friends.', a: ['cooking'], why: '*enjoy* + -ing.' },
        { s: 'He decided [leaving] his job.', a: ['to leave'], why: '*decide* + to + verb.' },
        { s: 'I’m used to [get] up early.', a: ['getting'], why: '*be used to* + -ing.' },
        { s: 'Did you [used] to live in London?', a: ['use'], why: 'After *did*, no *-d*.' },
      ] },
    ] },
    { title: 'Tenses and patterns', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: 'I ___ three jobs since I left university.', o: ['have had', 'had', 'have'], why: '*since I left* reaches now: present perfect.' },
        { q: 'We ___ in a small village when I was a child.', o: ['used to live', 'are used to living', 'have lived'], why: 'A past state: *used to*.' },
        { q: 'Have you finished your application ___?', o: ['yet', 'already', 'since'], why: '*yet* at the end of a question.' },
        { q: 'She remembered ___ the door before she left.', o: ['to lock', 'locking', 'lock'], why: 'Something she had to do: *remember to*.' },
        { q: 'I’ve ___ waiting for this email all morning.', o: ['been', 'being', 'be'], why: 'Present perfect continuous: *have been* + -ing.' },
      ] },
    ] },
    { title: 'Exam corner: choose the right word', blocks: [
      { t: 'reading', title: 'A new start', md: 'Two years ago, Nadia ___ her job in a bank. She had always wanted to work with animals, so she started a course to become a vet nurse. At first she wasn’t ___ to studying again, but now she loves it.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading, Part 5): choose the right word for each gap.', items: [
        { q: 'Two years ago, Nadia ___ her job in a bank.', o: ['left', 'has left', 'leaves'], why: '*Two years ago* is finished time: past simple.' },
        { q: 'At first she wasn’t ___ to studying again.', o: ['used', 'use', 'using'], why: '*be used to* + -ing: it was not normal for her.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Reading Part 5 often tests the grammar of this review: tense choices and the small word after a verb or adjective. Read to the end of the sentence before you choose.' },
    ] },
  ],
  activities: {
    one: { title: 'The life interview', md: 'A twenty-minute conversation that uses both units. Ask about experiences (*Have you ever…?*), how long things have been true (*How long have you…?*), past habits (*What did you use to do…?*), work or studies (*What do you enjoy doing?*) and plans (*What have you decided to do next?*). Note mistakes and replay them at the end.' },
    small: { title: 'Question cards', md: 'Paste twelve questions from units 1 and 2 in the chat. Students take turns choosing a number and answering for a minute; the others must ask one follow-up question. After each answer, the class says one thing that was correct and one to improve.' },
    group: { title: 'Speed talking', md: 'Breakout rooms of two, changing partner every four minutes. Each round has a topic in the chat: experiences, my job or studies, how my life has changed, my plans. After four rounds, each student tells the class the most interesting thing they heard.' },
  },
  homework: { book: 'u2', md: 'Do the tests for units 1 and 2. Then write the five corrected sentences from board page 1 that you find hardest, and one new example of each.' },
};
