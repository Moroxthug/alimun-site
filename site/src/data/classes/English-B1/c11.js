// English B1, class 11 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u3:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c11',
  focus: 'By the end every student uses *must*, *have to*, *don’t have to*, *mustn’t*, *can* and *be allowed to* to talk about rules and what is necessary, and *had to* and *was allowed to* for the past. The key point: *mustn’t* (it is not allowed) and *don’t have to* (it is not necessary) mean very different things. The speaking goal: explain the rules of a place they know.',
  tips: [
    'The biggest B1 error here: *You mustn’t pay* when they mean *You don’t have to pay*. Make the difference visual: a red cross for *mustn’t*, a shrug for *don’t have to*.',
    '*must* has no past form: *Yesterday I had to work late*, never *I must work*.',
    'No *to* after *must* and *can*: *I must go*, not *I must to go*. Many learners add it because of *have to*.',
    'Students from cultures with strict school rules enjoy comparing: use it in the activity.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Show (or describe) three signs: no phones, free entry, keep left. Ask what each one means.' },
    { min: 10, title: 'Necessary or not allowed?', md: 'Show board page 1. Students match the sentences and meanings, then explain the difference between *mustn’t* and *don’t have to*.' },
    { min: 10, title: 'Rules, now and then', md: 'Show board page 2. Students complete the sentences, then say one rule they had to follow at school.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 15, title: 'Exam corner', md: 'Show board page 3: B1 Preliminary Reading Part 1, notices. Students choose what each notice says, then discuss the wrong options.' },
    { min: 5, title: 'Close', md: 'Each student says one thing you don’t have to do in their job and one thing you mustn’t do. Set the homework.' },
  ],
  board: [
    { title: 'Necessary or not allowed?', blocks: [
      { t: 'table', caption: 'Rules and permission', explain: ['head', 'col1'], head: ['Form', 'Meaning', 'Example'], rows: [
        ['must / have to', 'it is necessary', 'You have to show your ticket.'],
        ['mustn’t', 'it is not allowed', 'You mustn’t smoke here.'],
        ['don’t have to', 'it is not necessary', 'You don’t have to book.'],
        ['can / be allowed to', 'it is allowed', 'You can park here after six.'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: 'Entry is free. You ___ pay.', o: ['don’t have to', 'mustn’t', 'must'], why: 'Not necessary: *don’t have to*.' },
        { q: 'This is a quiet library. You ___ use your phone.', o: ['mustn’t', 'don’t have to', 'can'], why: 'Not allowed: *mustn’t*.' },
        { q: 'Passengers ___ show their passport at the gate.', o: ['have to', 'don’t have to', 'are allowed'], why: 'Necessary: *have to*.' },
      ] },
    ] },
    { title: 'Rules, now and then', blocks: [
      { t: 'ex', kind: 'gap', h: 'Write the past form.', items: [
        { q: 'Last night I ___ (have to / work) until ten.', a: ['had to work'], why: 'Past of *must* and *have to*: *had to*.' },
        { q: 'At my school we ___ (not / be allowed to / wear) jeans.', a: ['weren’t allowed to wear', 'were not allowed to wear'], why: 'Past of *be allowed to*.' },
        { q: 'We ___ (not / have to / pay) for the museum: it was free.', a: ['didn’t have to pay', 'did not have to pay'], why: 'Not necessary in the past: *didn’t have to*.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I must [to go] now.', a: ['go'], why: 'No *to* after *must*.' },
        { s: 'Yesterday I [must] work late.', a: ['had to'], why: '*must* has no past: *had to*.' },
      ] },
    ] },
    { title: 'Exam corner: what does the notice say?', blocks: [
      { t: 'reading', title: 'Notice at a swimming pool', md: 'Children under eight must be with an adult at all times. Swimming caps are not necessary.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading, Part 1): what does the notice say?', items: [
        { q: '', o: ['Young children have to swim with an adult, but nobody has to wear a cap.', 'Children under eight are not allowed in the pool.', 'Everyone must wear a swimming cap.'], why: '*must be with an adult* and *not necessary* = *don’t have to wear*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Reading Part 1 notices often test rules. Decide for each option: is it necessary, not necessary, allowed or not allowed? Only one option keeps the same meaning.' },
    ] },
  ],
  activities: {
    one: { title: 'House rules', md: 'The student explains the rules of a place they know well (their workplace, their home, a gym) with all four meanings. You ask: *What happens if…? Were the rules different before?* Then you describe a place and the student guesses what it is.' },
    small: { title: 'School then and now', md: 'Students compare the rules of their school with schools today: *We had to…, we weren’t allowed to…, now students don’t have to…* The group decides which rules were good.' },
    group: { title: 'Design a hotel', md: 'Breakout rooms of three design the rules for a new hotel: four things guests must do, three they mustn’t do, three they don’t have to do. Each room presents its rules; the class votes for the hotel they would stay in.' },
  },
  homework: { book: 'u3:p2', md: 'Do lesson 2 of unit 3 (Could you tell me where…?). Write eight rules for your workplace or home, two with each meaning.' },
};
