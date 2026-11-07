// English A1, class 19 (docs/LESSONS_PLAN.md). Builds on book lesson u4:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c19',
  focus: 'By the end of the class every student can name 20 or more foods and drinks, say what they like and don’t like (*I like fish. She doesn’t like milk.*), ask *Do you like …?* and use **a, an, some** correctly with things you can and cannot count. Students should talk about their own eating habits.',
  tips: [
    'Countable and uncountable nouns are new for many learners. Keep it practical: *a banana, two bananas* but *some bread, some water*. Do not use the words "countable" and "uncountable" unless students ask.',
    'Learners often say *I like the coffee* for things in general. In English, things in general have no *the*: **I like coffee.**',
    '*She like fish* and *He doesn’t likes* come back from unit 3. Correct them every time.',
    'Learners who speak languages where food words are often plural (*the spaghetti are*) may struggle with *pasta, rice, bread*. Treat them as fixed: *some pasta, some rice*.',
    'Pictures help a lot today. Use the food table as a picture dictionary: point, say, students repeat.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What do you usually have for breakfast?* Write the food words students say on the board.' },
    { min: 10, title: 'Food and drink', md: 'Show board page 1. Say each word; students repeat. Then they sort the words in the exercise on the board.' },
    { min: 10, title: 'I like, she doesn’t like', md: 'Show board page 2. Drill *Do you like …?* in a chain around the class with food from page 1.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'A, an or some?', md: 'Show board page 3. Students solve the exercise together and explain each choice.' },
    { min: 5, title: 'Exam corner', md: 'Show board page 4.' },
    { min: 5, title: 'Close', md: 'Each student says their favourite meal with *I like … and … but I don’t like …*. Set the homework.' },
  ],
  board: [
    { title: 'Food and drink', blocks: [
      { t: 'table', caption: 'Food and drink', explain: ['head'], head: ['Food', 'Drinks', 'Fruit and vegetables'], rows: [
        ['bread', 'water', 'an apple'],
        ['cheese', 'tea', 'a banana'],
        ['rice', 'coffee', 'an orange'],
        ['pasta', 'milk', 'a tomato'],
        ['chicken', 'juice', 'a potato'],
        ['an egg', 'hot chocolate', 'an onion'],
      ] },
      { t: 'ex', kind: 'sort', h: 'Is it food or a drink?', groups: ['food', 'drink'], explain: ['groups'], items: [
        { s: 'cheese', g: 0, why: 'You eat cheese.' },
        { s: 'milk', g: 1, why: 'You drink milk.' },
        { s: 'rice', g: 0, why: 'You eat rice.' },
        { s: 'juice', g: 1, why: 'You drink juice.' },
        { s: 'fish', g: 0, why: 'You eat fish.' },
        { s: 'tea', g: 1, why: 'You drink tea.' },
      ] },
    ] },
    { title: 'I like, she doesn’t like', blocks: [
      { t: 'table', caption: 'like', explain: ['head'], head: ['', 'Positive', 'Negative', 'Question'], rows: [
        ['I / you / we / they', 'like', 'don’t like', 'Do you like …?'],
        ['he / she / it', 'likes', 'doesn’t like', 'Does she like …?'],
      ] },
      { t: 'examples', items: [
        { s: 'I **like** pasta, but I **don’t like** rice.', n: '*but* joins two opposite ideas.' },
        { s: 'My son **likes** bananas.', n: '*he* + *-s*.' },
        { s: '**Do you like** cheese? – **Yes, I do.** I love it!', n: '*love* = like very much.' },
      ] },
      { t: 'ex', kind: 'gap', h: 'Write the right form of like.', items: [
        { q: 'My daughter ___ chocolate.', a: ['likes'], why: '*she* + *-s*.' },
        { q: 'We don’t ___ fish.', a: ['like'], why: 'After *don’t*: no *-s*.' },
        { q: 'Does your husband ___ coffee?', a: ['like'], why: 'After *does*: no *-s*.' },
      ] },
    ] },
    { title: 'A, an or some?', blocks: [
      { t: 'table', caption: 'a, an or some?', explain: ['head', 'col1'], head: ['Example', 'Why'], rows: [
        ['a banana, an egg', 'one thing you can count'],
        ['some bananas, some eggs', 'more than one thing you can count'],
        ['some bread, some milk', 'a thing you cannot count'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose a, an or some.', items: [
        { q: 'I want ___ apple.', o: ['an', 'a', 'some'], why: 'One apple, vowel sound: *an*.' },
        { q: 'Can I have ___ water, please?', o: ['some', 'a', 'an'], why: 'You cannot count water: *some*.' },
        { q: 'I buy ___ tomatoes every week.', o: ['some', 'a', 'an'], why: 'More than one: *some*.' },
        { q: 'He has ___ sandwich for lunch.', o: ['a', 'an', 'some'], why: 'One sandwich: *a*.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I want [a bread].', a: ['some bread'], why: 'You cannot count bread: *some bread*.' },
        { s: 'I like [the coffee].', a: ['coffee'], why: 'Things in general: no *the*.' },
      ] },
    ] },
    { title: 'Exam corner: choose the reply', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the best reply.', items: [
        { q: '“Do you like spicy food?”', o: ['Not really. I prefer simple food.', 'Yes, I like.', 'It’s a spicy food.'], why: 'A natural answer to *Do you like …?*' },
        { q: '“Would you like some tea?”', o: ['Yes, please.', 'Yes, I do.', 'I like tea.'], why: '*Would you like …?* is an offer: answer *Yes, please* or *No, thank you*.' },
        { q: '“What’s your favourite food?”', o: ['Pizza, I think.', 'Yes, it is.', 'I don’t.'], why: '*What* asks for a thing.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Do not mix up **Do you like …?** (in general) and **Would you like …?** (an offer now). The exam often tests this.' },
    ] },
  ],
  activities: {
    one: { title: 'Plan a dinner', md: 'The student is cooking dinner for two friends. Ask questions to find out what they like and don’t like (*Does Ana like fish?*). Together, plan a menu with a starter, a main dish, a dessert and drinks, using *some* and *a/an*. The student then presents the menu.' },
    small: { title: 'Food survey', md: 'Each student chooses three foods. They ask everyone *Do you like …?* and note the answers. Then they report: *Three people like cheese. Marco doesn’t like fish.* Finish with the group choosing a restaurant everyone will like.' },
    group: { title: 'Fridge challenge', md: 'Post a picture of an open fridge or a list in the chat. In breakout rooms of three, students say what is in the fridge with *some/a/an* and plan a meal with only those things. Each room presents its meal; the class votes for the best one.' },
  },
  homework: { book: 'u4:p1', md: 'Finish book lesson 1 of unit 4 (I like fish). Then write what you eat on a normal day (breakfast, lunch, dinner), with a, an and some, and three things you don’t like.' },
};
