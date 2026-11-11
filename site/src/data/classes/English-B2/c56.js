// English B2, class 56 (docs/LESSONS_PLAN.md). Builds on book lesson u12:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c56',
  focus: 'By the end of the class every student can criticise past actions and express regret with *should have, shouldn’t have, ought to have* and *could have* + past participle, tell criticism (*should have*) from a missed possibility (*could have*), and talk about their own money decisions honestly but politely.',
  tips: [
    'The form is always modal + **have** + **past participle**. Learners often say *should have went* or *should had*. Drill with irregular verbs: *spent, bought, saved, paid*.',
    'In speech, *should have* sounds like *should’ve*. Students who hear *should of* and write it need correcting firmly.',
    '*Could have* = it was possible but did not happen: *You could have asked me* (often a gentle complaint). *Should have* = it was the right thing and did not happen.',
    'Criticism of other people can sound rude. Teach softeners: *Maybe you could have…*, *I think you might have…*.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Tell a short story: *I bought an expensive jacket, wore it once and then it was on sale for half the price.* Ask: *What should I have done?*' },
    { min: 12, title: 'Criticism and regret', md: 'Board page 1. Go through the table; students make one sentence about a money decision they regret.' },
    { min: 10, title: 'Practice', md: 'Board page 2. The class solves the exercise and the mistake hunt.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Board page 3: Use of English Part 4 transformations with these forms. Students work alone, then compare.' },
    { min: 5, title: 'Close', md: 'Each student gives one piece of advice to their younger self with *should have*. Set the homework.' },
  ],
  board: [
    { title: 'Looking back', blocks: [
      { t: 'table', caption: 'Criticism and regret', explain: ['head', 'col1'], head: ['Form', 'Meaning', 'Example'], rows: [
        ['should have + past participle', 'it was the right thing, but it did not happen', 'I should have saved more last year.'],
        ['shouldn’t have + past participle', 'it happened, but it was wrong', 'You shouldn’t have lent him so much.'],
        ['ought to have + past participle', 'the same as should have, more formal', 'They ought to have checked the price.'],
        ['could have + past participle', 'it was possible, but did not happen', 'We could have got a cheaper flight.'],
      ] },
      { t: 'tip', art: 'owl', md: 'Make criticism softer: **Maybe you could have…** sounds kinder than **You should have…**.' },
    ] },
    { title: 'Practice', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the best form.', items: [
        { q: 'I’m broke. I ___ so much on clothes last month.', o: ['shouldn’t have spent', 'could have spent', 'should have spent'], why: 'It happened and it was a mistake: *shouldn’t have spent*.' },
        { q: 'You ___ asked me; I would have lent you the money.', o: ['could have', 'shouldn’t have', 'must have'], why: 'It was possible but did not happen: *could have*.' },
        { q: 'The company ___ warned customers about the price rise.', o: ['ought to have', 'ought have', 'ought to had'], why: '*Ought to have* + past participle.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I should have [went] to the bank earlier.', a: ['gone'], why: 'After *should have*: the past participle, *gone*.' },
        { s: 'We [should of] booked earlier.', a: ['should have'], why: 'It is *should have*; *should of* is a spelling of the spoken form, and it is wrong.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'tip', art: 'owl', md: '*It was a mistake to…* and *I regret…* often become **shouldn’t have** or **should have** in Part 4. Check: did it happen or not?' },
      { t: 'ex', kind: 'transform', h: 'In the format of B2 First Reading and Use of English Part 4: complete the second sentence using the word given.', items: [
        { q: 'It was a mistake to buy such an expensive car. SHOULDN’T', cue: 'I', a: ['I shouldn’t have bought such an expensive car.'], why: 'It happened, and it was wrong: *shouldn’t have bought*.' },
        { q: 'It was possible for us to take the train, but we didn’t. COULD', cue: 'We', a: ['We could have taken the train.'], why: 'A possibility that did not happen: *could have taken*.' },
        { q: 'I regret not checking the bill. SHOULD', cue: 'I', a: ['I should have checked the bill.'], why: 'The right thing did not happen: *should have checked*.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Money mistakes', md: 'The student tells you about three money decisions (good or bad) from their life. After each, you discuss what they should or could have done, and they give you advice about one of yours. Correct the past participles every time.' },
    small: { title: 'What went wrong?', md: 'Put four short money disaster stories in the chat (a cancelled flight bought without insurance, an unread contract, an impulse buy, a forgotten subscription). In turns, students say what the person should, shouldn’t or could have done. The group chooses the most useful advice.' },
    group: { title: 'Advice panel', md: 'In breakout rooms of three, each student shares a decision they regret (it can be invented). The others react with softened criticism (*Maybe you could have…*). Back together, each room reports the best advice it gave.' },
  },
  homework: { book: 'u12:p1', md: 'Finish book lesson 1 of unit 12. Then write a short letter (100 words) to your younger self about money, with at least four sentences using should have, shouldn’t have and could have.' },
};
