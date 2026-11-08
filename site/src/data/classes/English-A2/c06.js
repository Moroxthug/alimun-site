// English A2, class 6 (docs/LESSONS_PLAN.md, L6). Review of book unit u1. Draft for the owner's review.
export const LESSON = {
  id: 'c06',
  focus: 'This class brings unit 1 together. By the end every student can talk for two minutes about their life using both present tenses correctly, describe a person, and ask follow-up questions. Speaking takes most of the class; the board is for fixing the class’s own mistakes.',
  tips: [
    'Before class, look at the students’ unit 1 practice results and bring two or three real mistakes to the board.',
    'Typical unit 1 mistakes: *She work*, *Does she works*, *I’m wanting*, *How is he like?*, *I go often*. Listen for them in the activity and note them without names.',
    'Do not reteach grammar from the beginning. If a point is still weak, use one board example and three quick questions.',
    'Weaker students: give them the question list on board page 1. Stronger students: ask them to use *at the moment* and *these days* in their answers.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Fast questions: *What do you usually do on Mondays? What are you doing these days? What is your best friend like?*' },
    { min: 10, title: 'Questions about life', md: 'Show board page 1. Students choose five questions and interview a partner.' },
    { min: 20, title: 'Activity', md: 'Use the activity for your class size below. This is the main part of the class.' },
    { min: 10, title: 'Our mistakes', md: 'Show board page 2, adding the mistakes you heard. Students fix them alone, then together.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: choose the word, in the format of A2 Key Reading Part 4.' },
    { min: 5, title: 'Close', md: 'Tell students the unit 1 test is in their dashboard and that 70% passes. Set the homework.' },
  ],
  board: [
    { title: 'Questions about your life', blocks: [
      { t: 'text', md: '**What do you do? How often do you do sport? What are you doing these days that is new? Who do you live with? What is your best friend like? What does your best friend look like? What do you usually do on Sunday mornings?**' },
    ] },
    { title: 'Our mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'My boss [work] from home on Fridays.', a: ['works'], why: 'With *he, she*: add *-s*.' },
        { s: 'I’m [wanting] a new phone.', a: ['want'], why: '*want* is a state verb: no *-ing*.' },
        { s: '[How] is your sister like?', a: ['What'], why: 'Character: *What is … like?*' },
        { s: 'We [go often] to the cinema.', a: ['often go'], why: 'The frequency word goes before the main verb: *We often go*.' },
        { s: 'Does he [likes] his job?', a: ['like'], why: 'After *does*: the simple form.' },
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: 'Listen! Someone ___ at the door.', o: ['is knocking', 'knocks', 'knock'], why: '*Listen!*: happening now.' },
        { q: 'She ___ to work by bike every day.', o: ['goes', 'is going', 'go'], why: '*every day*: present simple.' },
      ] },
    ] },
    { title: 'Exam corner: choose the word', blocks: [
      { t: 'reading', title: 'My new job', md: 'I ___ in a bookshop now. It’s small but busy. My manager is really ___ : she always helps me. At the moment we ___ a lot of books about travel.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam (Reading, Part 4): choose the right word for each gap.', items: [
        { q: 'I ___ in a bookshop now.', o: ['work', 'works', 'working'], why: 'With *I*: *work*.' },
        { q: 'My manager is really ___ : she always helps me.', o: ['kind', 'lazy', 'shy'], why: 'She helps: *kind*.' },
        { q: 'At the moment we ___ a lot of books about travel.', o: ['are selling', 'sell', 'sells'], why: '*At the moment*: present continuous.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Two-minute talk, round two', md: 'The student talks for two minutes about their life (routine, this week, a person close to them). Note three mistakes. Correct them together, then the student gives the talk again: it should be clearer and more accurate.' },
    small: { title: 'Interview and introduce', md: 'Pairs interview each other with the questions on board page 1 (use breakout rooms of two). Back together, each student introduces their partner to the class in five sentences, using *he* or *she*.' },
    group: { title: 'Life in the class', md: 'Breakout rooms of four: each room finds three things everyone does, two things nobody does and one thing someone is doing this month for the first time. One student reports in the main room.' },
  },
  homework: { book: 'u1', md: 'Do the unit 1 test in your dashboard (70% passes). Then practise your weakest exercises in Practice.' },
};
