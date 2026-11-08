// English B1, class 7 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u2:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c07',
  focus: 'By the end every student talks about past habits and states with *used to* (and *would* for repeated actions), and about new situations with *be used to* and *get used to* + *-ing*. The speaking goal: compare their life now with their life ten years ago, and describe something they had to get used to.',
  tips: [
    'Three forms confuse learners: *I used to work* (past habit), *I’m used to working* (it is normal for me), *I’m getting used to working* (it is becoming normal). Put them side by side on the board.',
    'After *did* and *didn’t*, it is *use to*, without *-d*: *Did you use to…?* Correct the written form in particular.',
    '*would* works only for repeated actions, not for states: *I used to have long hair*, never *I would have long hair*.',
    'Many learners say *I’m used to work* without *-ing*. *To* here is a preposition, so the verb takes *-ing*.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Show (or describe) an old photo: *I used to have long hair. I used to play football every Saturday.* Ask students one thing they used to do as children.' },
    { min: 10, title: 'Used to and would', md: 'Show board page 1. Students complete the gaps, then tell a partner two things they used to do and one thing their family would do every summer.' },
    { min: 10, title: 'Be used to, get used to', md: 'Show board page 2. Students choose the right form, then say one thing they are used to and one thing they are getting used to.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 15, title: 'Exam corner', md: 'Show board page 3: B1 Preliminary Speaking Part 1 answers. Students choose the best answers, then answer the same questions themselves.' },
    { min: 5, title: 'Close', md: 'Each student finishes the sentence: *I didn’t use to…, but now I…* Set the homework.' },
  ],
  board: [
    { title: 'Used to and would', blocks: [
      { t: 'ex', kind: 'gap', h: 'Write the right form of used to.', items: [
        { q: 'When I was a child, I ___ (live) by the sea.', a: ['used to live'], why: 'A past state that is no longer true: *used to*.' },
        { q: 'She ___ (not / like) coffee, but now she drinks it every day.', a: ['didn’t use to like', 'did not use to like'], why: 'Negative: *didn’t use to*, without *-d*.' },
        { q: 'Did you ___ (walk) to school?', a: ['use to walk'], why: 'After *did*: *use to*.' },
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the best form. Sometimes both are possible.', items: [
        { q: 'Every summer my grandfather ___ take us fishing.', o: ['would', 'was'], why: 'A repeated action in the past: *would* (or *used to*).' },
        { q: 'We ___ have a big garden.', o: ['used to', 'would'], why: 'A state (*have*): only *used to*.' },
      ] },
    ] },
    { title: 'Be used to, get used to', blocks: [
      { t: 'table', caption: 'Three forms', explain: ['head', 'col2'], head: ['Form', 'Example', 'Meaning'], rows: [
        ['used to + verb', 'I used to work nights.', 'a past habit, not now'],
        ['be used to + -ing', 'I’m used to working nights.', 'it is normal for me now'],
        ['get used to + -ing', 'I’m getting used to working nights.', 'it is becoming normal'],
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I’m used to [work] at night now.', a: ['working'], why: 'After *be used to*, the -ing form.' },
        { s: 'Did you [used] to smoke?', a: ['use'], why: 'After *did*, no *-d*.' },
        { s: 'It was hard at first, but now I’m getting used to [drive] on the left.', a: ['driving'], why: 'After *get used to*, the -ing form.' },
      ] },
    ] },
    { title: 'Exam corner: Speaking Part 1', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Speaking, Part 1): choose the best answer.', items: [
        { q: '“How has your town changed in the last ten years?”', o: ['It used to be very quiet, but now there are lots of new shops and cafés.', 'It is used to be quiet.', 'It changes.'], why: 'A contrast between the past and now, with *used to* and a detail.' },
        { q: '“What did you enjoy doing when you were a child?”', o: ['I used to love drawing. I would spend hours drawing animals.', 'I enjoy to draw.', 'I am used to drawing when I was a child.'], why: '*used to* and *would* for childhood habits.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Questions about the past and the present together are common in Speaking Part 1. Show the examiner you can compare: *It used to…, but now…*' },
    ] },
  ],
  activities: {
    one: { title: 'Then and now', md: 'The student compares five areas of their life ten years ago and now (home, work, free time, food, friends) with *used to* and *now*. Then ask: *What was hard to get used to?* Finish with one sentence each about something you are both still getting used to.' },
    small: { title: 'Childhood guessing', md: 'Each student writes three childhood habits in the chat (*I used to…*), one of them false. The others ask *Did you really use to…?* and guess the false one.' },
    group: { title: 'Life abroad', md: 'Breakout rooms of three. Each room imagines a person who moved to a new country and writes six sentences: three with *used to* (life before) and three with *is getting used to* or *is used to* (life now). Rooms read their stories and the class chooses the most realistic one.' },
  },
  homework: { book: 'u2:p3', md: 'Do lesson 3 of unit 2 (Applying for a job). Write about 80 words comparing your life now with your life ten years ago, with *used to*, *would* and *be used to*.' },
};
