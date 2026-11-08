// English A2, class 34 (docs/LESSONS_PLAN.md). Review of unit 6. Draft for the owner's review.
export const LESSON = {
  id: 'c34',
  focus: 'A speaking-heavy review of unit 6. By the end of the class every student can describe a health problem, give and ask for advice with *should*, talk about rules with *have to / don’t have to*, and handle a short visit to the doctor’s. The teacher notes the three most common mistakes and fixes them with the class at the end.',
  tips: [
    'Spend most of the time speaking. Keep a mistake list during the activity and correct it together at the end.',
    'Watch for: *I have headache* (missing *a*), *You should to*, *She have to*, and *have to* for advice.',
    'Use role plays: they are the closest to real life and to the A2 Key speaking test.',
    'Remind students that the unit test is in the book; today is practice.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Quick round: each student says one problem and gets one piece of advice from the next student.' },
    { min: 10, title: 'Mixed practice', md: 'Board page 1. Students choose the right answer and explain it.' },
    { min: 20, title: 'Activity', md: 'Use the activity for your class size below. Note mistakes as you listen.' },
    { min: 10, title: 'Fix it', md: 'Board page 2. Students fix the typical mistakes, plus any you noted.' },
    { min: 10, title: 'Exam corner', md: 'Board page 3: Reading Part 1 notices.' },
    { min: 5, title: 'Close', md: 'Each student says one new word or phrase from unit 6 they will use. Set the homework.' },
  ],
  board: [
    { title: 'Problems, advice, rules', blocks: [
      { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
        { q: 'What’s the ___? – I’ve got a sore throat.', o: ['matter', 'problem with', 'wrong'], why: 'The question is *What’s the matter?*' },
        { q: 'You’ve got a temperature. I think you ___ go to work.', o: ['shouldn’t', 'don’t have to', 'should'], why: 'Advice: going to work is a bad idea.' },
        { q: 'At this surgery you ___ book before you come.', o: ['have to', 'should to', 'has to'], why: 'A rule: *have to*.' },
        { q: 'Does he ___ take the tablets with food?', o: ['have to', 'has to', 'having to'], why: 'After *does*: *have to*.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I have [stomach ache].', a: ['a stomach ache'], why: 'Most problems need *a*.' },
        { s: 'You [should to] drink more water.', a: ['should'], why: 'No *to* after *should*.' },
        { s: 'My mum [have to] see the dentist.', a: ['has to'], why: 'With *she*: *has to*.' },
        { s: 'My [foots] hurt after the walk.', a: ['feet'], why: '*foot* → *feet*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading Part 1', blocks: [
      { t: 'reading', title: 'Notice at the dentist’s', md: 'Please arrive ten minutes before your appointment. If you can’t come, call us one day before.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: what does the notice say?', items: [
        { q: '', o: ['Phone the day before if you can’t come.', 'Your appointment is ten minutes long.', 'Call ten minutes before your appointment.'], why: '*call us one day before* = phone the day before.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Wrong answers in Part 1 often mix two details from the notice: *ten minutes* and *call* are both there, but not together. Match **each** detail to the text.' },
    ] },
  ],
  activities: {
    one: { title: 'Three visits', md: 'Three short role plays: at the pharmacy (the student asks for advice), at the doctor’s (the student explains a problem and asks *Do I have to …?*), on the phone to work (the student says they are ill). Change one detail each time and give feedback after each.' },
    small: { title: 'Health show', md: 'One student is the doctor on a radio show; the others phone in with problems. The doctor gives two pieces of advice and one rule. Change the doctor every three calls. Finish with the mistakes you noted.' },
    group: { title: 'Doctor, patient, receptionist', md: 'In breakout rooms of three, students take the roles of receptionist, patient and doctor, and play a full visit (phone call, appointment, advice). Rotate roles twice. Back together, one room performs its best scene.' },
  },
  homework: { book: 'u6', md: 'Do the unit 6 test in the book (aim for 70% or more). Then write advice for someone who wants to be healthier: four sentences with *should*, *shouldn’t* and *don’t have to*.' },
};
