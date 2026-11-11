// English A1, class 17 (docs/LESSONS_PLAN.md). Review of book unit u3 (My day). Draft for the owner's review.
export const LESSON = {
  id: 'c17',
  focus: 'A review class for unit 3. By the end, every student uses the present simple correctly with all persons (including the *-s* with *he/she/it*), asks and answers *Do/Does …?* questions, tells the time and says how often they do things. Most of the class is speaking; the board is for fixing the typical mistakes of this unit.',
  tips: [
    'Before class, look at the students’ book results for unit 3 (Students page). Choose the two most common mistakes and spend extra time on them.',
    'Keep a list of mistakes you hear during the activity. Do not stop students while they speak; correct them all together in the correction slot.',
    'The three mistakes that matter most in this unit: the missing *-s* (*she work*), *don’t/doesn’t* (*he don’t*), and frequency word order (*I go always*). Make sure every student says each of these correctly at least once today.',
    'Students who finish fast can write questions for the others with *How often …?* and *What time …?*',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask everyone: *What time do you usually get up? What do you usually do on Sundays?* Quick answers, no correction yet.' },
    { min: 10, title: 'Grammar check', md: 'Show board page 1. Students do the exercise alone in three minutes, then the class checks. Ask why for each answer.' },
    { min: 20, title: 'Activity', md: 'Use the activity for your class size below. Note mistakes as you listen.' },
    { min: 10, title: 'Correction slot', md: 'Show board page 2, then add the mistakes you noted today. Students correct them together.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3. Students answer alone, then compare with a partner or the class.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they learned in unit 3. Set the unit test as homework.' },
  ],
  board: [
    { title: 'Unit 3 in one page', blocks: [
      { t: 'table', caption: 'The present simple', explain: ['head'], head: ['', 'Positive', 'Negative', 'Question'], rows: [
        ['I / you / we / they', 'I work.', 'I don’t work.', 'Do you work?'],
        ['he / she / it', 'She works.', 'She doesn’t work.', 'Does she work?'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
        { q: 'My father ___ in a factory.', o: ['works', 'work', 'is work'], why: '*he* + *-s*.' },
        { q: 'We ___ TV in the morning.', o: ['don’t watch', 'doesn’t watch', 'not watch'], why: '*we* + *don’t*.' },
        { q: '___ the shop open on Sundays?', o: ['Does', 'Do', 'Is'], why: '*the shop* is *it*: *Does*.' },
        { q: 'I start work ___ half past eight.', o: ['at', 'on', 'in'], why: 'A time: *at*.' },
        { q: 'She ___ late.', o: ['is never', 'never is', 'never are'], why: 'With *be*: *is never*.' },
      ] },
    ] },
    { title: 'Correction slot', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'My sister [live] in Paris.', a: ['lives'], why: '*she* + *-s*.' },
        { s: 'He [don’t] like his job.', a: ['doesn’t', "doesn't", 'does not'], why: 'With *he*: *doesn’t*.' },
        { s: 'Does she [works] on Saturdays?', a: ['work'], why: 'After *does*: no *-s*.' },
        { s: 'I go [always] to the gym on Mondays.', a: ['always go'], why: 'The frequency word goes before the verb.' },
        { s: 'We have lunch [in] one o’clock.', a: ['at'], why: 'A time: *at*.' },
      ] },
      { t: 'text', md: 'Your teacher adds today’s mistakes here.' },
    ] },
    { title: 'Exam corner: read the messages', blocks: [
      { t: 'reading', title: 'Two messages', md: '**From Omar:** Hi Paul! Do you want to play tennis on Saturday? I usually play at ten, but I can play at eleven this week.\n\n**From Paul:** Hi Omar! I work on Saturday mornings, sorry. I finish at one. Can we play on Sunday? I’m free all day.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the right answer.', items: [
        { q: 'When does Omar usually play tennis?', o: ['At ten', 'At eleven', 'At one'], why: '*I usually play at ten.*' },
        { q: 'Why can’t Paul play on Saturday morning?', o: ['He works.', 'He plays football.', 'He isn’t free on Sunday.'], why: '*I work on Saturday mornings.*' },
        { q: 'When is Paul free?', o: ['All day on Sunday', 'On Saturday morning', 'At ten on Saturday'], why: '*Can we play on Sunday? I’m free all day.*' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'A week in two lives', md: 'The student tells you about their week, day by day, with times. Then you describe a friend’s week with *he/she* and the student asks *Does he …?* questions to find three differences between their week and your friend’s. Finish with the student retelling your friend’s week in the third person.' },
    small: { title: 'Speed interviews', md: 'Students interview each other in pairs for three minutes each round with *What time …? Do you …? How often …?* After each round, they swap partners and tell the new partner about the last one (*Ana gets up at six. She never eats breakfast.*). Three rounds. Listen for *-s* and word order.' },
    group: { title: 'Our routines', md: 'Breakout rooms of three or four. Each room writes, in the chat, five sentences about the people in the room with *he/she* and frequency words, one of them false. Back in the main room, each room reads their sentences and the other rooms guess the false one. Write the best sentences on the board.' },
  },
  homework: { book: 'u3', md: 'Do the unit test for unit 3 (My day). Aim for 70% or more. Then write five questions to ask a classmate next class, using What time, How often and Do/Does.' },
};
