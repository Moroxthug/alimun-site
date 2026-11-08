// English A2, class 18 (docs/LESSONS_PLAN.md, L6). Conversation class using book units u1 to u3. Draft for the owner's review.
export const LESSON = {
  id: 'c18',
  focus: 'A conversation class about food, shopping and daily life. Students use everything from units 1 to 3 (the present simple and continuous, describing people, the past simple, food and amounts) in longer, freer talk. Fluency comes first: each student should speak for as long as possible, give reasons and details, and ask follow-up questions. Accuracy comes in the correction slot at the end.',
  tips: [
    'Talk less than usual. Set up the situations, keep time and listen. Aim for students speaking at least 70% of the class.',
    'Do not stop students to correct. Write mistakes down for the correction slot, and note two good sentences to praise as well.',
    'At A2, push for longer answers: after a short answer, ask **Why?** or **Tell me more.** A student who adds *because* or *but* is doing exactly what A2 needs.',
    'Mix tenses on purpose: *What do you usually eat? What did you eat yesterday? What are you cooking this weekend?* Students who switch tenses correctly are ready for unit 4.',
    'Shy students speak more in pairs. Use pairs or breakout rooms before any whole-class speaking.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Show board page 1. Read the phrases for keeping a conversation going. Each student chooses two to use today.' },
    { min: 10, title: 'Question bank', md: 'Show board page 2. Complete the questions together. Students ask you three questions from the page and you answer at length, as a model.' },
    { min: 25, title: 'Activity', md: 'Use the activity for your class size below. Note mistakes and good language as you listen.' },
    { min: 5, title: 'Exam corner', md: 'Show board page 3: the speaking test, part 1. Ask two or three students the questions like an examiner, then discuss the best answers.' },
    { min: 10, title: 'Correction slot', md: 'Write 4 to 6 mistakes you heard on board page 4 (no names) next to the examples. Students correct them together. Also write two good sentences you heard.' },
    { min: 5, title: 'Close', md: 'Each student says one new thing they learned about a classmate. Set the homework.' },
  ],
  board: [
    { title: 'Keep the conversation going', blocks: [
      { t: 'table', caption: 'Useful phrases', explain: ['head', 'col1'], head: ['Say', 'When'], rows: [
        ['Really? Why?', 'you want a reason'],
        ['Tell me more about…', 'you want details'],
        ['Me too! / Me neither.', 'you are the same'],
        ['That sounds great / awful!', 'you react'],
        ['What about you?', 'you ask the same question back'],
        ['Sorry, what do you mean?', 'you did not understand'],
      ] },
    ] },
    { title: 'Question bank', blocks: [
      { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
        { q: 'What do you usually ___ for breakfast?', a: ['have', 'eat'], why: 'A habit: present simple, *have* or *eat*.' },
        { q: 'What did you ___ for dinner last night?', a: ['have', 'eat'], why: 'After *did*, the verb has no *-ed*.' },
        { q: 'How ___ coffee do you drink a day?', a: ['much'], why: '*coffee* is uncountable: *how much*.' },
        { q: 'Where do you usually ___ your food shopping?', a: ['do'], why: '*do the shopping*.' },
        { q: 'What are you ___ this weekend?', a: ['doing', 'cooking'], why: 'Plans now: present continuous, *-ing*.' },
      ] },
    ] },
    { title: 'Exam corner: Speaking part 1', blocks: [
      { t: 'text', md: 'In the format of the A2 Key exam, Speaking part 1: the examiner asks about you. Short answers are not enough: add a reason or a detail.\n\n*Where do you go shopping? What do you like eating? Tell me about a meal you enjoyed.*' },
      { t: 'ex', kind: 'choice', h: 'Which answer is best in the exam?', items: [
        { q: '“Where do you go shopping?”', o: ['Usually at a big supermarket near my flat, because it’s cheap and open late.', 'Supermarket.', 'Yes, I go shopping.'], why: 'A full answer with a reason (*because…*) shows more English.' },
        { q: '“What do you like eating?”', o: ['I love fish, but I don’t eat much meat.', 'Fish.', 'I like.'], why: 'A full sentence with a detail.' },
        { q: '“Tell me about a meal you enjoyed.”', o: ['Last Sunday my brother cooked a big lunch for the family. It was delicious.', 'I enjoy meals.', 'Yes, it was good.'], why: '*Tell me about* needs a short story in the past.' },
      ] },
    ] },
    { title: 'Correction slot', blocks: [
      { t: 'text', md: 'The teacher writes here the mistakes heard today (no names). Correct them together. Examples of what to look for:' },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Yesterday I [eat] a big pizza.', a: ['ate'], why: 'Past simple of *eat*: *ate*.' },
        { s: 'I [am usually going] to the market on Saturdays.', a: ['usually go'], why: 'A habit: present simple.' },
        { s: 'She is [a] very friendly.', a: ['very friendly', 'friendly'], why: '*be* + adjective: no *a*.' },
        { s: 'I don’t eat [some] meat.', a: ['any'], why: 'Negative: *any*.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Food stories', md: 'Ask the student about their food life in three parts: everyday (*What do you usually eat? Where do you shop?*), the past (*the best meal you remember, a meal that went wrong*) and plans (*What are you cooking this weekend?*). After each answer ask *Why?* or *Tell me more.* Then swap: the student interviews you. Note mistakes for the correction slot.' },
    small: { title: 'Speed chats', md: 'Pairs talk for three minutes on a topic card from the chat (a favourite restaurant, a bad shopping trip, a typical weekday, food from your country), then change partner and topic. Each student uses the two phrases they chose. After four rounds, each student tells the group one interesting thing a partner said.' },
    group: { title: 'Breakout talk show', md: 'Breakout rooms of three: one host, two guests. The host asks five questions from the question bank and follows up with *Why?* and *Tell me more*. Change roles every five minutes. Visit each room for a minute and note mistakes. Bring everyone back: each room presents its most surprising answer.' },
  },
  homework: { book: 'u3', md: 'Write 60 to 80 words about your eating habits: what you usually eat, a meal you remember and what you are cooking this weekend. Then do one Practice round with your mistakes from units 1 to 3.' },
};
