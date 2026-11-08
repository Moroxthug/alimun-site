// English A2, class 13 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u3:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c13',
  focus: 'By the end of the class every student can tell countable from uncountable food words, use **a/an**, **some** and **any** correctly in positive sentences, negatives and questions, and talk about what is (and is not) in their kitchen today. The goal is accuracy with short, everyday sentences: *We’ve got some rice, but we haven’t got any eggs.*',
  tips: [
    'Many languages count words like *bread, rice, cheese, advice* as normal nouns. Expect *a bread* and *two rices*. Correct it every time with **some bread**, **a loaf of bread** (the container comes next class).',
    'Learners often use *some* in negatives (*I haven’t got some milk*). Give the rule as a picture on the board: **+ some**, **– any**, **? any** (and **some** when you offer or ask for something).',
    'The polite exception confuses people: *Would you like some tea? Can I have some water?* Present it as “when you expect yes”. Do not go further today.',
    'Keep the vocabulary to food they really buy. A long list of unusual food words slows the class down.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What did you eat yesterday?* Write the food words students say on the board in two columns (countable and uncountable) without naming the columns. Ask: *Why two groups?*' },
    { min: 10, title: 'Count it or not?', md: 'Show board page 1. Explain the two groups with the table. Students sort the words on the board together, then add two words of their own to each group.' },
    { min: 10, title: 'Some and any', md: 'Show board page 2. Model one sentence of each type. Students do the exercise on the board, then make three true sentences about their own kitchen.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Fix the mistakes', md: 'Show board page 3. Students find the mistake alone, then say the right sentence aloud. Write the most common class mistake you heard in the activity next to the exercise.' },
    { min: 5, title: 'Exam corner', md: 'Show board page 4: an open cloze in the format of A2 Key Reading part 5. Students write one word in each gap, then check together.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they have got and one thing they haven’t got at home. Set the homework.' },
  ],
  board: [
    { title: 'Count it or not?', blocks: [
      { t: 'table', caption: 'Two groups of nouns', explain: ['head'], head: ['Countable', 'Uncountable'], rows: [
        ['an apple, two apples', 'bread'],
        ['an egg, six eggs', 'rice'],
        ['a carrot, three carrots', 'cheese'],
        ['a sandwich, sandwiches', 'milk'],
      ] },
      { t: 'ex', kind: 'sort', h: 'Countable or uncountable?', groups: ['countable', 'uncountable'], explain: ['groups'], items: [
        { s: 'banana', g: 0, why: '*one banana, two bananas*: you can count it.' },
        { s: 'water', g: 1, why: 'You cannot say *two waters* about the liquid.' },
        { s: 'potato', g: 0, why: '*one potato, two potatoes*.' },
        { s: 'butter', g: 1, why: 'No plural: *some butter*.' },
        { s: 'biscuit', g: 0, why: '*a biscuit, three biscuits*.' },
        { s: 'pasta', g: 1, why: 'English counts *pasta* as one mass: *some pasta*.' },
      ] },
    ] },
    { title: 'Some and any', blocks: [
      { t: 'text', md: '**some** in positive sentences: *There’s **some** cheese.*\n\n**any** in negatives and questions: *We haven’t got **any** eggs. Is there **any** milk?*\n\nBut **some** when you offer or ask for something: *Would you like **some** tea? Can I have **some** water?*' },
      { t: 'ex', kind: 'select', h: 'Choose a, an, some or any.', items: [
        { q: 'I’d like ___ orange, please.', o: ['an', 'a', 'some'], why: 'One countable thing starting with a vowel sound: *an*.' },
        { q: 'There isn’t ___ bread in the cupboard.', o: ['any', 'some', 'a'], why: 'Negative with an uncountable noun: *any*.' },
        { q: 'We bought ___ tomatoes at the market.', o: ['some', 'any', 'a'], why: 'Positive, plural: *some*.' },
        { q: 'Are there ___ biscuits left?', o: ['any', 'some', 'a'], why: 'A normal question: *any*.' },
        { q: 'Would you like ___ coffee?', o: ['some', 'any', 'a'], why: 'An offer: *some*.' },
      ] },
    ] },
    { title: 'Fix the mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
        { s: 'Can I have [a bread], please?', a: ['some bread'], why: '*bread* is uncountable: *some bread*.' },
        { s: 'We haven’t got [some] milk.', a: ['any'], why: 'In negatives, use *any*.' },
        { s: 'I bought two [rices].', a: ['bags of rice', 'packets of rice'], why: '*rice* has no plural: count the bag or packet.' },
        { s: 'There are [any] eggs in the fridge.', a: ['some'], why: 'Positive sentence: *some*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading part 5', blocks: [
      { t: 'text', md: 'In the format of the A2 Key exam, Reading part 5: read the message and write **one word** in each gap.' },
      { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
        { q: 'Hi Sam, can you buy ___ bread on your way home?', a: ['some'], why: 'A request in a positive sentence: *some*.' },
        { q: 'We haven’t got ___ eggs for the cake.', a: ['any'], why: 'Negative: *any*.' },
        { q: 'I’d also like ___ apple for lunch tomorrow.', a: ['an'], why: 'One countable thing, vowel sound: *an*.' },
        { q: 'Is there ___ milk in the fridge? Let me know!', a: ['any'], why: 'A question: *any*.' },
      ] },
      { t: 'tip', md: 'In Reading part 5 the missing words are small grammar words: *some, any, a, the, of, at, is, are*. Read the whole sentence before you write: the word after the gap often tells you the answer.' },
    ] },
  ],
  activities: {
    one: { title: 'What’s in your fridge?', md: 'The student describes what is in their fridge and cupboard right now (*There’s some cheese, there are some eggs, there isn’t any milk*). Then you plan a dinner together from what they have, asking *Is there any…? Are there any…?* Note every *a/some/any* mistake and repeat the sentence correctly at the end.' },
    small: { title: 'The shared fridge', md: 'Students are flatmates. In the chat, post a picture-free list: each student secretly writes five things they “have” in the fridge. In pairs, they ask *Have you got any…?* to find out what the flat has, then agree on a shopping list of five things they need (*We need some butter, we haven’t got any onions*). Each pair reads their list to the group.' },
    group: { title: 'Market memory', md: 'Breakout rooms of three or four. Student A starts: *I went to the market and I bought some rice.* B repeats and adds one: *…some rice and an apple.* Continue until someone forgets or uses the wrong word (*a rice*). Bring everyone back: each room says its longest sentence. Correct the article mistakes together.' },
  },
  homework: { book: 'u3:p1', md: 'Finish book lesson 1 of unit 3 (Some bread, an apple), including the speaking task. Then write a shopping list for the week with ten items and three sentences about what you have and haven’t got at home.' },
};
