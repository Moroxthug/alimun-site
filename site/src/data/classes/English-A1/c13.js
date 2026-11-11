// English A1, class 13 (docs/LESSONS_PLAN.md). Builds on book lesson u3:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c13',
  focus: 'By the end of the class every student can say what they do every day with the present simple (*I work, we live, they speak*), make it negative with **don’t** and ask *Do you …?* questions with short answers. The goal is to talk about their own life: job, home, languages, free time. Keep the verbs simple and personal.',
  tips: [
    'Learners who come from languages without an auxiliary in questions (Spanish, Italian, Arabic, Portuguese) often say *You live here?* Accept it in fast speech, but insist on **Do you live here?** in drills and writing.',
    'A very common mistake is *I am work* (be + verb). Correct it every time: with a normal verb there is no *am*.',
    'Many students say *I not work*. Model **I don’t work** and drill the short form *don’t* with a strong stress.',
    'Today is only *I, you, we, they*. If a student asks about *he/she*, say it is the next class and move on.',
    'Short answers (*Yes, I do. No, I don’t.*) feel strange to many learners. Drill them in a quick chain before the activity.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Tell the class three true sentences about your day (*I live in …, I work at …, I drink tea in the morning.*). Ask students: *What do you remember?* Write the verbs on the board.' },
    { min: 10, title: 'I work, we live', md: 'Show board page 1. Point out that the verb does not change with *I, you, we, they*. Each student says two true sentences with verbs from the table.' },
    { min: 10, title: 'Don’t and do', md: 'Show board page 2. Model the negative and the question. Students do the exercise on the board together. Then a fast chain: *Do you speak French?* – *No, I don’t.* – *Do you …?*' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Fix the mistakes', md: 'Show board page 3. Students find the mistake alone, then compare. Ask each student to say the right sentence aloud.' },
    { min: 5, title: 'Exam corner', md: 'Show board page 4. Read each question; students choose the reply.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they do and one thing they don’t do. Set the homework.' },
  ],
  board: [
    { title: 'I work, we live', blocks: [
      { t: 'text', md: 'With **I, you, we, they**, the verb is the same as in the dictionary: *I **work**, we **live**, they **speak***. Use it for things that are always true or that you do again and again.' },
      { t: 'examples', items: [
        { s: 'I **work** in a hospital.', n: 'Your job: always true now.' },
        { s: 'We **live** near the park.', n: 'Where you live.' },
        { s: 'They **speak** Turkish and English.', n: 'A fact about them.' },
        { s: 'You **drink** a lot of coffee!', n: 'A habit.' },
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the verb that fits.', items: [
        { q: 'I ___ in a bank.', o: ['work', 'speak', 'drink'], why: 'You *work* in a place.' },
        { q: 'We ___ in a small flat.', o: ['live', 'eat', 'play'], why: 'A home: *live*.' },
        { q: 'They ___ Arabic at home.', o: ['speak', 'live', 'work'], why: 'A language: *speak*.' },
      ] },
    ] },
    { title: 'Don’t and do', blocks: [
      { t: 'table', caption: 'Negatives and questions', explain: ['head'], head: ['Positive', 'Negative', 'Question'], rows: [
        ['I work.', 'I don’t work.', 'Do I work?'],
        ['You live here.', 'You don’t live here.', 'Do you live here?'],
        ['They play tennis.', 'They don’t play tennis.', 'Do they play tennis?'],
      ] },
      { t: 'ex', kind: 'gap', h: 'Write don’t or do.', items: [
        { q: 'I ___ eat meat.', a: ['don’t', "don't", 'do not'], why: 'Negative: *don’t* + verb.' },
        { q: '___ you work on Saturdays?', a: ['Do'], why: 'A question starts with *do*.' },
        { q: 'We ___ have a car.', a: ['don’t', "don't", 'do not'], why: 'Negative: *don’t* + verb.' },
        { q: '“Do they live in Rome?” – “Yes, they ___.”', a: ['do'], why: 'Short answer: *Yes, they do.*' },
      ] },
    ] },
    { title: 'Fix the mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
        { s: 'I [am work] in a shop.', a: ['work'], why: 'With a normal verb, no *am*.' },
        { s: 'We [not live] in London.', a: ['don’t live', "don't live", 'do not live'], why: 'Negative: *don’t* + verb.' },
        { s: '[You speak] English? – Yes, I do.', a: ['Do you speak'], why: 'A question needs *do*.' },
        { s: 'Do you like coffee? – Yes, [I like].', a: ['I do'], why: 'Short answer: *Yes, I do.*' },
      ] },
    ] },
    { title: 'Exam corner: choose the reply', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the best reply.', items: [
        { q: '“Do you work near here?”', o: ['Yes, I do.', 'Yes, I am.', 'Yes, I work.'], why: 'A *do* question: *Yes, I do.*' },
        { q: '“Where do you live?”', o: ['In a flat near the station.', 'Yes, I live.', 'At seven o’clock.'], why: '*Where* asks for a place.' },
        { q: '“What languages do you speak?”', o: ['English and a little French.', 'I’m fine, thanks.', 'No, I don’t.'], why: '*What languages* asks for languages.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Find three things in common', md: 'You and the student ask each other *Do you …?* questions (*Do you drink coffee? Do you live in a flat? Do you work at the weekend?*) until you find three things you both do and three things you don’t do. The student then says them: *We both drink coffee. We don’t work at the weekend.*' },
    small: { title: 'Find someone who', md: 'Put a list in the chat: *works at home, speaks three languages, lives near a park, drinks tea, plays a sport, cooks every day*. Students ask each other *Do you …?* and write a name next to each line. The first to complete the list wins. Then each student reports two sentences with *we*: *Ana and I live near a park.*' },
    group: { title: 'Class survey', md: 'Breakout rooms of three. Each room gets two questions from the chat (*Do you work or study? Do you speak three languages?*). They ask everyone in the room and prepare the result: *Two of us work. We don’t speak three languages.* Bring everyone back; each room reports. Collect the results on the board.' },
  },
  homework: { book: 'u3:p1', md: 'Finish book lesson 1 of unit 3 (I work in a shop). Then write five sentences about your week: three things you do and two things you don’t do.' },
};
