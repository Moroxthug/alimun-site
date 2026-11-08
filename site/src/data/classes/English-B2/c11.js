// English B2, class 11 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u3:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c11',
  focus: 'By the end every student uses the future continuous for actions in progress at a future time (*This time next week I’ll be lying on a beach*) and the future perfect for actions completed by a future time (*By June I’ll have finished the course*). The speaking goal: talk about plans, deadlines and where they will be in five years.',
  tips: [
    'Use a timeline: the future continuous is *in the middle* of an activity at a future point; the future perfect looks *back* from a future point.',
    '*By* is the key word for the future perfect: *by Friday*, *by the time you arrive*.',
    'After time words (when, by the time, as soon as) we use a present tense, not *will*: *By the time you get here, I’ll have left*.',
    'The future continuous is also a polite way to ask about plans: *Will you be using the car tonight?*',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What will you be doing at 8 tomorrow evening? What will you have done by the end of this year?*' },
    { min: 12, title: 'In progress or finished?', md: 'Show board page 1. Students choose the form and explain with the timeline.' },
    { min: 10, title: 'Polite questions', md: 'Show board page 2. Students make polite questions with the future continuous.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: B2 First Use of English Part 4. Students rewrite alone, then compare.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they will have achieved in a year. Set the homework.' },
  ],
  board: [
    { title: 'In progress or finished?', blocks: [
      { t: 'table', caption: 'Two future forms', explain: ['head', 'col2'], head: ['Form', 'Example', 'Meaning'], rows: [
        ['future continuous', 'At 10 tomorrow I’ll be flying to Rome.', 'in progress at that time'],
        ['future perfect', 'By 10 tomorrow I’ll have landed in Rome.', 'finished before that time'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the better form.', items: [
        { q: 'Don’t call at eight; we ___ dinner.', o: ['will be having', 'will have had'], why: 'In progress at eight: future continuous.' },
        { q: 'By the end of the month, I ___ all my exams.', o: ['will have taken', 'will be taking'], why: '*By*: finished before then.' },
        { q: 'By the time you arrive, I ___ the report.', o: ['will have finished', 'will finish'], why: 'Completed before a future point.' },
      ] },
    ] },
    { title: 'Polite questions about plans', blocks: [
      { t: 'ex', kind: 'order', h: 'Put the words in order to make polite questions.', items: [
        { a: 'Will you be using the meeting room this afternoon?', why: 'The future continuous asks about plans politely.' },
        { a: 'Will you be coming to the party on Saturday?', why: 'Asks about a plan without pressure.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'By the time you [will get] home, dinner will be ready.', a: ['get'], why: 'After *by the time*, a present tense.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the B2 First exam (Reading and Use of English, Part 4): complete the second sentence so it means the same as the first, using the word given.', items: [
        { q: 'I’ll finish the project before Friday.', cue: 'BY', a: ['I will have finished the project by Friday.', 'I’ll have finished the project by Friday.'], why: 'Completed before a future point: future perfect with *by*.' },
        { q: 'At this time tomorrow I’m on the plane to Tokyo.', cue: 'FLYING', a: ['At this time tomorrow I will be flying to Tokyo.', 'At this time tomorrow I’ll be flying to Tokyo.'], why: 'In progress at a future time: future continuous.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 4, the key word often decides the tense. *BY* almost always points to a perfect form.' },
    ] },
  ],
  activities: {
    one: { title: 'Five-year plan', md: 'The student describes where they will be and what they will be doing in five years, and three things they will have achieved by then. Ask follow-up questions and note each future form.' },
    small: { title: 'Busy diaries', md: 'Each student creates a busy diary for next Saturday in the chat. The others try to arrange a meeting: *What will you be doing at 3? Will you have finished by 5?*' },
    group: { title: 'The year 2040', md: 'Breakout rooms of three make five predictions about life in 2040, using both future forms (*People will be working…*, *We will have stopped…*). Each room presents its boldest prediction.' },
  },
  homework: { book: 'u3:p1', md: 'Finish lesson 1 of unit 3, then do lesson 2 (Meet a deadline, run a business). Write six sentences about your next year with both future forms.' },
};
