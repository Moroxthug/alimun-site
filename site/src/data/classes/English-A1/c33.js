// English A1, class 33 (docs/LESSONS_PLAN.md). Builds on book lesson u6:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c33',
  focus: 'By the end of the class every student can say how often they do things with **always, usually, often, sometimes, never** (in the right place: before the main verb, after *be*) and with *every day / once a week / twice a month*, and can read a simple club web page to find times, days and activities.',
  tips: [
    'Word order is the main problem: *I go always running*. Frequency words go **before the main verb** but **after be**: *I always go*, *I am always late*. Show both patterns side by side.',
    'Spanish and Italian speakers may use a double negative: *I never don’t eat meat*. *Never* is already negative.',
    'Students met frequency words in unit 3; today is consolidation in a new context (free time). Keep the focus on speaking.',
    'For the reading, set a short time limit (three minutes). Real exam reading is about finding information quickly, not reading every word.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *How often do you watch TV? How often do you go to the cinema?* Write students’ answers on the board as they say them.' },
    { min: 10, title: 'How often?', md: 'Board page 1. Put the frequency words on a line from 0% to 100%. Students complete the exercise on the board.' },
    { min: 10, title: 'Word order', md: 'Board page 2. Students put the words in order, then say the sentences about themselves.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'The club web page', md: 'Board page 3. Students read the page in three minutes and answer the questions.' },
    { min: 5, title: 'Exam corner', md: 'Board page 4: an A2 Key style notice.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they always do and one thing they never do. Set the homework.' },
  ],
  board: [
    { title: 'How often?', blocks: [
      { t: 'table', caption: 'From 100% to 0%', explain: ['head', 'col1'], head: ['Word', 'How often'], rows: [
        ['always', 'every time (100%)'],
        ['usually', 'nearly every time'],
        ['often', 'many times'],
        ['sometimes', 'some of the time'],
        ['never', 'not at any time (0%)'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
        { q: 'I go to the gym every day. I ___ go to the gym.', o: ['always', 'never', 'sometimes'], why: 'Every day: *always*.' },
        { q: 'He doesn’t like fish. He ___ eats it.', o: ['never', 'often', 'usually'], why: 'He doesn’t like it: *never*.' },
        { q: 'We go to the cinema two or three times a year. We ___ go.', o: ['sometimes', 'always', 'usually'], why: 'Only a few times: *sometimes*.' },
      ] },
    ] },
    { title: 'Where does it go?', blocks: [
      { t: 'examples', items: [
        { s: 'I **always** go running on Sundays.', n: 'Before the main verb.' },
        { s: 'She is **never** late.', n: 'After *be*.' },
        { s: 'We play tennis **twice a week**.', n: '*once, twice, three times a week*: at the end.' },
      ] },
      { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
        { a: 'I usually read in the evening.', why: '*usually* before the main verb *read*.' },
        { a: 'They are always very friendly.', why: 'After *be*: *are always*.' },
        { a: 'He goes swimming once a week.', why: '*once a week* at the end.' },
      ] },
    ] },
    { title: 'The club web page', blocks: [
      { t: 'reading', title: 'Green Park Sports Club', md: 'Welcome! We are open every day from 7.00 to 21.00.\n\n**Yoga**: Monday and Wednesday evenings. **Swimming**: every day; the pool is always busy on Saturday mornings. **Tennis**: book a court online, usually two or three days before.\n\nChildren’s classes are on Saturdays only. We never close on public holidays!' },
      { t: 'ex', kind: 'tf', h: 'True, false or not given?', ng: true, items: [
        { q: 'You can do yoga on Mondays.', a: 't', why: '*Yoga: Monday and Wednesday evenings.*' },
        { q: 'The pool is quiet on Saturday mornings.', a: 'f', why: 'It is *always busy* on Saturday mornings.' },
        { q: 'Children’s classes are on Sundays.', a: 'f', why: 'They are *on Saturdays only*.' },
        { q: 'Tennis lessons are expensive.', a: 'ng', why: 'The page does not talk about the price.' },
      ] },
    ] },
    { title: 'Exam corner: notices', blocks: [
      { t: 'reading', title: 'Notice at the club', md: 'Pool closed for cleaning every Tuesday, 12.00–14.00. Please use the gym at these times.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: what does the notice say?', items: [
        { q: '', o: ['You can’t swim on Tuesdays at lunchtime.', 'The gym is closed on Tuesdays.', 'The pool is always closed on Tuesdays.'], why: 'It is closed only from 12.00 to 14.00 on Tuesdays.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Watch out for words like **always** and **every**. In the notice the pool is closed every Tuesday, but **only from 12.00 to 14.00**, so *always closed on Tuesdays* is wrong.' },
    ] },
  ],
  activities: {
    one: { title: 'Weekly diary', md: 'The student describes a normal week: what they do every day, sometimes and never. You draw the week on the board as they speak. Then ask follow-up questions (*How often do you see your friends?*) and correct the position of the frequency words.' },
    small: { title: 'How often do you …?', md: 'Give each student a different question in the chat (*How often do you cook? … go to the cinema? … eat fast food?*). They ask everyone in the group and report the answers with frequency words: *Two people never cook, and Ana always cooks.*' },
    group: { title: 'True or false?', md: 'In breakout rooms of three, each student says four sentences about their habits with frequency words; one is false. The others guess which one. Each room sends its funniest false sentence to the chat.' },
  },
  homework: { book: 'u6:p4', md: 'Finish book lesson 4 of unit 6 (The Riverside Club). Then write six sentences about your week with *always, usually, often, sometimes, never* and *once a week*.' },
};
