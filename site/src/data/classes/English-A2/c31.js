// English A2, class 31 (docs/LESSONS_PLAN.md). Builds on book lesson u6:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c31',
  focus: 'By the end of the class every student can give and understand advice with **should** and **shouldn’t**, ask for advice (*Should I …?*), and make advice softer (*I think you should …, Maybe you should …*). Each student should give advice about at least three different problems.',
  tips: [
    'The two classic errors: *You should to rest* and *She shoulds*. *should* is like *can*: no *to* after it, no *-s*.',
    'Questions with *should* do not use *do*: *Should I go?* not *Do I should go?*',
    'For a negative opinion English says *I don’t think you should …*, not *I think you shouldn’t …*. Accept both at A2, but model the natural form.',
    'Advice can be cultural (food, rest, medicine). Invite students to share advice from their own country; it makes great speaking practice.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Say: *I’ve got a headache. What should I do?* Collect advice from the class and write it on the board.' },
    { min: 10, title: 'should and shouldn’t', md: 'Board page 1. Go through the table. Students choose the right form in the exercise.' },
    { min: 10, title: 'Softer advice', md: 'Board page 2. Students put the sentences in order, then give advice to the person on the board in a soft way.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Fix it', md: 'Board page 3. Students find and fix the mistakes.' },
    { min: 5, title: 'Exam corner', md: 'Board page 4: Reading Part 1.' },
    { min: 5, title: 'Close', md: 'Each student asks the class for advice about a small problem; one classmate answers. Set the homework.' },
  ],
  board: [
    { title: 'should and shouldn’t', blocks: [
      { t: 'table', caption: 'Giving advice', explain: ['head', 'col0'], head: ['', 'Example'], rows: [
        ['positive', 'You should stay in bed.'],
        ['negative', 'You shouldn’t go out.'],
        ['question', 'Should I call a doctor?'],
        ['short answers', 'Yes, you should. / No, you shouldn’t.'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the best advice.', items: [
        { q: 'I’ve got a sore throat. – You ___ drink something hot.', o: ['should', 'shouldn’t', 'should to'], why: 'Good advice: *should* + verb.' },
        { q: 'I’m very tired. – You ___ go to bed so late.', o: ['shouldn’t', 'should', 'don’t should'], why: 'Bad idea: *shouldn’t*.' },
        { q: '___ I see a doctor? – Yes, you should.', o: ['Should', 'Do', 'Am'], why: 'Questions start with *Should*.' },
      ] },
    ] },
    { title: 'Softer advice', blocks: [
      { t: 'examples', items: [
        { s: '**I think** you should see a doctor.', n: 'Softer than *You should*.' },
        { s: '**Maybe** you should rest.', n: 'A gentle idea.' },
        { s: '**I don’t think** you should go to work.', n: 'The natural negative.' },
      ] },
      { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
        { a: 'I think you should drink more water.', why: '*I think* + *you should* + verb.' },
        { a: 'Maybe you should take a break.', why: '*Maybe* first.' },
        { a: 'I don’t think you should eat that.', why: 'The negative goes on *think*.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'You should [to rest].', a: ['rest'], why: 'No *to* after *should*.' },
        { s: 'She [shoulds] see a doctor.', a: ['should'], why: '*should* never takes *-s*.' },
        { s: '[Do I should] take this medicine?', a: ['Should I'], why: 'Questions start with *Should*, no *do*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading Part 1', blocks: [
      { t: 'reading', title: 'Notice at a pharmacy', md: 'Take one tablet in the morning and one at night, with food. Do not drive after taking this medicine.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: what does the notice say?', items: [
        { q: '', o: ['You should take two tablets a day with a meal.', 'You should take the tablets before you drive.', 'You should take one tablet a day without food.'], why: '*one in the morning and one at night* = two a day; *with food* = with a meal.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Reading Part 1, the right answer often says the same thing **in different words**: *one in the morning and one at night* = *two a day*. If an answer uses the exact words of the notice, check it twice.' },
    ] },
  ],
  activities: {
    one: { title: 'Problem page', md: 'Read three short problems aloud (*I can’t sleep. I’m always tired at work. I want to get fit but I have no time.*). The student gives two pieces of advice for each, one soft. Then the student invents a problem and you give advice; the student says if it is good advice and why.' },
    small: { title: 'Advice circle', md: 'Each student writes a small real or invented problem. In turn, they read it to the group; every other student gives one piece of advice. The student with the problem chooses the best advice and says why.' },
    group: { title: 'The advice column', md: 'In breakout rooms of three or four, each room receives two problems in the chat. They write the best three pieces of advice for each (at least one with *shouldn’t* and one with *I think*). Back together, rooms read their advice and the class votes for the most useful.' },
  },
  homework: { book: 'u6:p2', md: 'Finish book lesson 2 of unit 6 (You should rest), including the speaking task. Then write advice for a friend who has a cold: four sentences with *should*, *shouldn’t* and *I think you should*.' },
};
