// English C1, class 74 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u16:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c74',
  focus: 'By the end every student chooses the right pattern after verbs whose meaning changes with what follows: *go on to do* (next stage) and *go on doing* (continue), *mean to do* (intend) and *mean doing* (involve), *propose to do* (intend) and *propose doing* (suggest), *dread doing* and the fixed *dread to think*, and *come to do* for a slow change of mind. The speaking goal: tell the story of how an opinion or a career changed over time.',
  tips: [
    'The general logic helps: the infinitive tends to look forward to a purpose or a next step, the -ing form describes an activity that is already part of the situation. Ask students which picture each sentence shows.',
    '*When it comes to* is followed by -ing, because *to* is a preposition here. Expect *When it comes to learn…* and correct it each time.',
    '*Propose* never takes an object and infinitive: *I propose you to change* is wrong. Offer *I propose changing* or *I propose that we change*.',
    '*Come to* + verb works with verbs of mind (*realise, appreciate, trust, accept*). Ask students for something they *came to like* slowly; real examples stick.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Is there something you disliked at first but came to love?* Each student answers in two sentences. Write the best *came to* sentence on the board.' },
    { min: 12, title: 'Two patterns, two meanings', md: 'Show board page 1. Go through the table, then students choose the forms and say which meaning each one has.' },
    { min: 10, title: 'Common mistakes', md: 'Show board page 2. Students fix the mistakes, then rewrite one sentence with the other pattern and explain how the meaning changes.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Board page 3: C1 Advanced Reading and Use of English Part 2. Students write one word in each gap alone, then compare and say what kind of word each gap needs.' },
    { min: 5, title: 'Close', md: 'Each student finishes: *After this course, I mean to…* and *Learning English at this level means…* Set the homework.' },
  ],
  board: [
    { title: 'Two patterns, two meanings', blocks: [
      { t: 'table', caption: 'Verbs that change meaning', explain: ['head', 'col1'], head: ['Pattern', 'Meaning', 'Example'], rows: [
        ['go on to do', 'do next, a new stage', 'After the course she went on to teach it.'],
        ['go on doing', 'continue the same activity', 'He went on reading after the lights went out.'],
        ['mean to do', 'intend', 'I meant to reply, but I forgot.'],
        ['mean doing', 'involve, have as a result', 'A place on the course means moving to Leeds.'],
        ['propose to do', 'intend, plan (formal)', 'The school proposes to open on Saturdays.'],
        ['propose doing', 'suggest to others', 'I propose meeting an hour earlier.'],
        ['come to do', 'slowly start to think or feel', 'In time we came to respect her methods.'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the correct form.', items: [
        { q: 'Joining the orchestra means ___ every Saturday morning.', o: ['rehearsing', 'to rehearse', 'rehearse'], why: '*Mean* = involve, + -ing.' },
        { q: 'After ten years as a nurse, he went on ___ a hospital.', o: ['to run', 'running', 'run'], why: 'A new stage of his career: *go on to do*.' },
        { q: 'Sorry, I didn’t mean ___ you in front of everyone.', o: ['to embarrass', 'embarrassing', 'embarrass'], why: '*Mean* = intend, + infinitive.' },
        { q: 'The teacher just went on ___ even though nobody was listening.', o: ['talking', 'to talk', 'talk'], why: 'Continuing the same activity: *go on doing*.' },
        { q: 'I dread ___ how much the new textbooks will cost.', o: ['to think', 'thinking', 'think'], why: 'The fixed phrase *I dread to think*.' },
        { q: 'At first the pupils found her strict, but they came ___ her.', o: ['to trust', 'trusting', 'trust'], why: '*Come to* + verb of mind: a slow change.' },
      ] },
    ] },
    { title: 'Common mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I really dread [to sit] in the exam hall for three hours.', a: ['sitting'], why: '*Dread* + -ing, except in *dread to think* and *dread to imagine*.' },
        { s: 'When it comes to [write] essays, she is the best in the class.', a: ['writing'], why: '*To* is a preposition here: + -ing.' },
        { s: 'The director proposed [us to finish] early on Fridays.', a: ['that we finish', 'that we should finish', 'finishing'], why: '*Propose* is never followed by object + infinitive.' },
        { s: 'After his first degree he went on [studying] law at Oxford.', a: ['to study'], why: 'A new stage: *go on to do*.' },
        { s: 'These essays need [to mark] by Friday.', a: ['marking', 'to be marked'], why: 'The essays receive the action: *need marking*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'If the next action is a new stage, a plan or a purpose, try the infinitive. If it is the activity itself, already happening or part of the situation, try the -ing form.' },
    ] },
    { title: 'Exam corner: Use of English Part 2', blocks: [
      { t: 'text', md: 'The sentences make one short text about a man who went back to studying.' },
      { t: 'ex', kind: 'gap', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 2): write one word in each gap.', items: [
        { q: 'Tomás had always meant ___ finish his degree, but work kept getting in the way.', a: ['to'], why: '*Mean to do* = intend.' },
        { q: 'When it comes ___ studying, he admits he was never very disciplined.', a: ['to'], why: 'The fixed phrase *when it comes to* + -ing.' },
        { q: 'Going back at forty-five meant ___ up his weekends for three years.', a: ['giving'], why: '*Mean doing* = involve; *give up* time.' },
        { q: 'He dreaded ___ the oldest person in every seminar.', a: ['being'], why: '*Dread* + -ing.' },
        { q: 'In time, however, he came ___ see his age as an advantage.', a: ['to'], why: '*Come to* + verb: a slow change of view.' },
        { q: 'He has since gone on ___ write a book about returning to education.', a: ['to'], why: 'The next stage: *go on to do*.' },
      ] },
      { t: 'tip', md: 'In Part 2 many gaps are a single small word inside a pattern: *to* after *mean*, *come* or *go on*, a preposition before -ing. Read the words on both sides of the gap before you decide.' },
    ] },
  ],
  activities: {
    one: { title: 'How I changed my mind', md: 'The student tells the story of an opinion that changed (about a subject, a job, a city, a person) from first impression to now. Prompt with the verbs: *What did you mean to do? What did it mean doing? What did you come to realise? What did you go on to do?* Correct the patterns at the end.' },
    small: { title: 'Career paths', md: 'Each student invents a surprising career path for a famous person or a classmate and tells it in four sentences with *went on to*, *meant to*, *came to* and *dreaded*. The others ask one question each. The group chooses the most believable path.' },
    group: { title: 'Proposals for the course', md: 'Breakout rooms of three. Each room makes two proposals for this English course with *propose doing* or *propose that…*, and says what each would mean doing for the students. Rooms share their proposals and the class votes for the best one, giving a reason.' },
  },
  homework: { book: 'u16:p2', md: 'Finish lesson 2 of unit 16 if needed, then do lesson 3 (A well-rounded education). Write a short paragraph (about 100 words) about something you came to appreciate over time, using at least four patterns from today.' },
};
