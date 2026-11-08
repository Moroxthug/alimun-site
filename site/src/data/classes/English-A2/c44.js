// English A2, class 44 (docs/LESSONS_PLAN.md). Builds on book lesson u8:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c44',
  focus: 'By the end of the class every student can choose between **been** and **gone** (been there and come back, or gone there and not back yet) and between the **present perfect** (an experience, time not given) and the **past simple** (a finished time: *last year*, *in 2020*, *when I was a child*). They can move naturally from *Have you ever…?* to *When did you…?* in a conversation.',
  tips: [
    'The key rule: a finished time word (*yesterday*, *last summer*, *in 2019*, *ago*) means **past simple**. Write the time words on the board in two columns.',
    'Students say *I have been to Rome last year.* Correct it to *I went to Rome last year* or *I’ve been to Rome* (no time).',
    'For *been* and *gone*, draw a simple picture: a person who went and came back (*been*), and one who is still away (*gone*).',
    'Spanish, French and Italian speakers often use the present perfect for yesterday because their languages do. Expect it and correct it consistently.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Where is your best friend now?* and *Have you ever been to another country? When did you go?* Write one answer of each kind on the board.' },
    { min: 10, title: 'Been or gone?', md: 'Show board page 1. Draw the two pictures, then students choose the right word.' },
    { min: 10, title: 'Present perfect or past simple?', md: 'Show board page 2. Sort the time words, then students fix the mistakes.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3. Students read the email and choose the right word for each gap.' },
    { min: 10, title: 'Close', md: 'Each student asks a classmate *Have you ever…?* and one follow-up *When did you…?* Set the homework.' },
  ],
  board: [
    { title: 'Been or gone?', blocks: [
      { t: 'examples', items: [
        { s: 'Anna has **gone** to Rome.', n: 'She is in Rome now. She has not come back.' },
        { s: 'Anna has **been** to Rome.', n: 'She went there and came back. It is an experience.' },
      ] },
      { t: 'ex', kind: 'select', h: 'Choose been or gone.', items: [
        { q: 'Where’s Tom? – He’s ___ to the shops. He’ll be back soon.', o: ['gone', 'been'], why: 'He is still at the shops: *gone*.' },
        { q: 'I’ve ___ to Mexico twice. It’s beautiful.', o: ['been', 'gone'], why: 'An experience; you came back: *been*.' },
        { q: 'They aren’t here. They’ve ___ on holiday.', o: ['gone', 'been'], why: 'They are away now: *gone*.' },
      ] },
    ] },
    { title: 'A time word changes the verb', blocks: [
      { t: 'ex', kind: 'sort', h: 'Which verb form goes with these words?', groups: ['present perfect', 'past simple'], explain: ['groups'], items: [
        { s: 'ever', g: 0, why: '*Have you ever…?* No finished time.' },
        { s: 'never', g: 0, why: '*I’ve never…* No finished time.' },
        { s: 'last year', g: 1, why: 'A finished time: past simple.' },
        { s: 'two days ago', g: 1, why: '*ago* is a finished time.' },
        { s: 'in 2018', g: 1, why: 'A year in the past is a finished time.' },
        { s: 'twice', g: 0, why: 'How many times in your life: present perfect.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I [have visited] Berlin last summer.', a: ['visited'], why: '*last summer* is a finished time: past simple.' },
        { s: '[Did you ever eat] snails?', a: ['Have you ever eaten'], why: 'An experience in your life: present perfect.' },
        { s: 'We have been to Greece. We [have gone] there in 2021.', a: ['went'], why: '*in 2021*: past simple.' },
      ] },
    ] },
    { title: 'Exam corner: an email', blocks: [
      { t: 'ex', kind: 'select', h: 'In the format of the A2 Key exam: choose the right word for each gap.', items: [
        { q: 'Hi Maria! Have you ___ been to Lisbon?', o: ['ever', 'never', 'yet'], why: 'In a question about experience: *ever*.' },
        { q: 'I ___ there last month with my sister.', o: ['went', 'have gone', 'go'], why: '*last month*: past simple.' },
        { q: 'It’s the most beautiful city I’ve ___ seen.', o: ['ever', 'never', 'already'], why: '*the most… I’ve ever seen* is a fixed pattern.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Reading part 5 of A2 Key you choose the right word for gaps in a short text. Read the **whole sentence**, not only the words next to the gap: a time word at the end can decide the verb.' },
    ] },
  ],
  activities: {
    one: { title: 'From ever to when', md: 'Ask five *Have you ever…?* questions. For every *yes*, the student must answer two follow-ups in the past simple (*When did you…? Who were you with?*). Then the student interviews you. Note every mixed tense and correct at the end.' },
    small: { title: 'Two truths and a lie', md: 'Each student writes three experiences in the chat, each with a time (*I’ve been to Iceland. I went there in 2020.*), one of them false. The others ask follow-up questions and guess the false one. Check the tenses in every sentence.' },
    group: { title: 'Where are they?', md: 'Give each breakout room a list of six people with notes (*Ana – Rome – back yesterday*, *Ben – Paris – still there*). Students make sentences with *been* or *gone* and a past simple detail. Rooms compare their sentences in the main room.' },
  },
  homework: { book: 'u8:p3', md: 'Finish book lesson 3 of unit 8. Then write a short email (35 to 45 words) to a friend about a place you have been to: say when you went and what you did.' },
};
