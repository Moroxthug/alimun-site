// English B1, class 20 (docs/LESSONS_PLAN.md, L6). Exam practice: B1 Preliminary Reading, with the language of units u1 to u4. Draft for the owner's review.
export const LESSON = {
  id: 'c20',
  focus: 'A class on the B1 Preliminary Reading paper. Students try a short task for each of the six parts, using the language of units 1 to 4, and learn one clear strategy for each part. By the end, every student knows what each part looks like, how long to spend on it, and which part is hardest for them.',
  tips: [
    'Do not teach new grammar today. The aim is exam technique: reading the question first, underlining key words, checking every option.',
    'Time matters in the real exam (45 minutes for six parts). Give each task a clear time limit and say how much time is left. Students who finish early check their answers against the text.',
    'After each part, ask *Which words in the text gave you the answer?* This builds the habit of proving answers, not guessing.',
    'Students often find part 4 (sentences missing from a text) the hardest. Spend a little more time on the strategy there: look at the words before and after each gap.',
  ],
  plan: [
    { min: 5, title: 'The Reading paper', md: 'Explain the paper briefly: six parts, 32 questions, 45 minutes. Ask which part students think is hardest before they try.' },
    { min: 8, title: 'Parts 1 and 2', md: 'Show board pages 1 and 2. Three minutes for part 1, five for part 2. Check and give the strategy for each.' },
    { min: 12, title: 'Part 3', md: 'Show board page 3. Students read the text and answer in eight minutes. Check, and ask which question was about the writer’s opinion.' },
    { min: 10, title: 'Part 4', md: 'Show board page 4. Practise the strategy together on the first gap, then students do the rest alone.' },
    { min: 15, title: 'Parts 5 and 6', md: 'Show board pages 5 and 6. Five minutes each. Check together, explaining the grammar behind each answer.' },
    { min: 10, title: 'Close', md: 'Each student says which part was hardest and one thing they will do differently next time. Set the homework.' },
  ],
  board: [
    { title: 'Part 1: notices and messages', blocks: [
      { t: 'ex', kind: 'choice', h: 'What does each text say?', items: [
        { q: 'LIBRARY: You don’t have to book a computer before 2 pm. After 2 pm, please ask at the desk.', o: ['In the afternoon you need to ask for a computer.', 'Computers are only free after 2 pm.', 'You must book a computer every time.'], why: 'Booking is only needed after 2 pm.' },
        { q: 'MESSAGE: Hi Jo, I’ve already bought the tickets, so you don’t need to. Just bring some snacks! – Ali', o: ['Jo should bring food, not tickets.', 'Jo has to buy the tickets.', 'Ali wants Jo to pay him back.'], why: '*I’ve already bought the tickets … Just bring some snacks.*' },
      ] },
      { t: 'tip', md: 'Part 1: the three options often repeat words from the text. Do not choose the one with the same words; choose the one with the same **meaning**.' },
    ] },
    { title: 'Part 2: people and places', blocks: [
      { t: 'reading', title: 'Evening courses', md: '**A. Cooking for beginners**: Tuesdays, 7–9 pm. All food is provided. No experience needed.\n\n**B. Spanish conversation**: Mondays, 6–7 pm. For people who have studied Spanish for at least a year.\n\n**C. Photography walks**: Saturdays, 10 am. Bring your own camera or phone. Outdoors in all weather.' },
      { t: 'ex', kind: 'choice', h: 'Which course is best for each person?', items: [
        { q: 'Priya works until 6.30 every weekday and has never cooked a real meal.', o: ['A', 'B', 'C'], why: 'A starts at 7 pm and needs no experience.' },
        { q: 'Daniel has been learning Spanish for two years and wants to practise speaking.', o: ['B', 'A', 'C'], why: 'B is conversation for people with at least a year of study.' },
        { q: 'Lena works on weekdays and loves being outside, whatever the weather.', o: ['C', 'A', 'B'], why: 'C is on Saturdays and outdoors in all weather.' },
      ] },
    ] },
    { title: 'Part 3: a longer text', blocks: [
      { t: 'reading', title: 'How I became a nurse', md: 'I didn’t use to like hospitals. As a child, I was afraid of the smell and the long corridors. But when my grandmother was ill, I spent a lot of time with the nurses who looked after her, and I started to see the job differently.\n\nAt eighteen, I decided to study nursing, although my parents wanted me to become a teacher. The course was harder than I expected, and in the first year I nearly gave up. A tutor told me that everyone feels like that at the start, and she was right.\n\nI have been a nurse for six years now. The hours are long and I don’t have much free time, but I have never regretted my choice.' },
      { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
        { q: 'Why did the writer change her mind about hospitals?', o: ['Because of the nurses she met when her grandmother was ill.', 'Because her parents told her to.', 'Because she liked the smell.'], why: '“I spent a lot of time with the nurses … and started to see the job differently.”' },
        { q: 'What happened in her first year of studying?', o: ['She almost stopped the course.', 'She found the course easy.', 'She decided to become a teacher.'], why: '“in the first year I nearly gave up”.' },
        { q: 'How does the writer feel about her job now?', o: ['She is glad she chose it.', 'She wants more free time, so she will leave.', 'She thinks it was a mistake.'], why: '“I have never regretted my choice.”' },
      ] },
    ] },
    { title: 'Part 4: missing sentences', blocks: [
      { t: 'text', md: 'Read the text. Three sentences are missing. Choose the sentence that fits each gap.\n\n*Moving to a new city was exciting, but at first it was lonely. (1) … So I joined a running club that met near my flat. (2) … After a few weeks, I knew everyone’s name. (3) … Now the city really feels like home.*' },
      { t: 'ex', kind: 'choice', h: 'Which sentence fits each gap?', items: [
        { q: 'Gap 1', o: ['I didn’t know anyone, and I spent most evenings alone.', 'We usually ran for about an hour.', 'Some of them have become close friends.'], why: 'It explains why it was lonely, and *So I joined…* follows naturally.' },
        { q: 'Gap 2', o: ['We usually ran for about an hour.', 'I didn’t know anyone, and I spent most evenings alone.', 'Some of them have become close friends.'], why: 'It describes the club, after *I joined a running club*.' },
        { q: 'Gap 3', o: ['Some of them have become close friends.', 'We usually ran for about an hour.', 'I didn’t know anyone, and I spent most evenings alone.'], why: '*them* refers back to *everyone*, and it leads to *feels like home*.' },
      ] },
      { t: 'tip', md: 'Part 4: look at the words just before and just after each gap. Pronouns like *them, it, this* and linkers like *So, But, After that* must match the sentence you choose.' },
    ] },
    { title: 'Part 5: choose the word', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the word that fits each gap.', items: [
        { q: 'I’ve ___ wanted to visit Japan.', o: ['always', 'ever', 'yet'], why: '*have always wanted*: all my life until now.' },
        { q: 'She stopped ___ coffee because it kept her awake.', o: ['drinking', 'to drink', 'drink'], why: '*stop doing* = no longer do it.' },
        { q: 'You won’t get a seat ___ you book early.', o: ['unless', 'if', 'when'], why: '*unless* = if … not.' },
        { q: 'I’m not ___ to running long distances yet.', o: ['used', 'use', 'using'], why: '*be used to* + -ing / noun.' },
      ] },
    ] },
    { title: 'Part 6: one word in each gap', blocks: [
      { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
        { q: 'I have lived here ___ 2019.', a: ['since'], why: '*since* + a point in time.' },
        { q: 'We used ___ go to the beach every summer.', a: ['to'], why: '*used to* + verb for past habits.' },
        { q: 'You don’t ___ to wear a uniform at this school.', a: ['have'], why: '*don’t have to* = not necessary.' },
        { q: 'If you’re tired, you ___ go to bed early.', a: ['should'], why: 'Advice: *should*.' },
      ] },
      { t: 'tip', md: 'Part 6: the missing words are small: prepositions, auxiliaries, articles, pronouns. Read the whole sentence; the grammar around the gap usually tells you what kind of word it is.' },
    ] },
  ],
  activities: {
    one: { title: 'Strategy coach', md: 'After each part, the student explains to you how they found the answer, as if teaching a friend. Ask *Why not the other options?* for at least one question per part. At the end, agree on the student’s weakest part and plan two homework exercises for it from the book.' },
    small: { title: 'Prove it', md: 'After each part, students compare answers in pairs before you check. Where they disagree, each must show the exact words in the text that support their answer. Award a point for every answer proved with the text, not for every right answer.' },
    group: { title: 'Timed relay', md: 'Breakout rooms of three or four. Each room does parts 5 and 6 together against the clock, then sends its answers in the chat. Back together, compare the rooms’ answers; where rooms disagree, one student from each room explains their reason.' },
  },
  homework: { book: 'u1 u2 u3 u4', md: 'Do the exam-format task in each lesson of units 1 to 4 again (one per lesson), timing yourself. Write down which reading part took you the longest and bring it to the next class.' },
};
