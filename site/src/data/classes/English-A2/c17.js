// English A2, class 17 (docs/LESSONS_PLAN.md, L6). Review of book unit u3 (Food and shopping). Draft for the owner's review.
export const LESSON = {
  id: 'c17',
  focus: 'A review of unit 3, mostly speaking. Students bring together countable and uncountable nouns, *some* and *any*, *how much* and *how many*, containers, polite orders and prices, and instructions. By the end, each student can plan a meal, shop for it and explain how to cook it, with few mistakes in amounts and articles.',
  tips: [
    'Start with the mistakes you noted in classes 13 to 16. A review works best when it fixes what this class really gets wrong.',
    'Keep explanations very short today: if a rule needs explaining again, point to the book page and practise instead.',
    'The most persistent errors in this unit are *a bread*, *some* in negatives and *how much* with plurals. Listen for these three in every activity.',
    'Give every student the same amount of speaking time: use pairs and breakout rooms more than whole-class questions.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask each student: *What did you buy last time you went shopping?* They must use one container or amount (*a carton of milk, a few apples*).' },
    { min: 10, title: 'Quick check', md: 'Show board page 1. Students do the mixed exercise alone, then check together. Ask who got everything right and who needs page 3 of the book again.' },
    { min: 20, title: 'Activity', md: 'Use the activity for your class size below: plan, shop and cook.' },
    { min: 10, title: 'Fix the mistakes', md: 'Show board page 2. Add two mistakes you heard today. Students correct them together.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: a multiple-choice cloze in the format of A2 Key Reading part 4. Students work alone, then compare.' },
    { min: 5, title: 'Close', md: 'Each student says one thing from unit 3 they find easy now and one thing to practise. Set the homework: the unit test.' },
  ],
  board: [
    { title: 'Quick check: unit 3', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
        { q: 'There isn’t ___ cheese left.', o: ['any', 'some', 'a'], why: 'Negative: *any* (lesson 1).' },
        { q: 'How ___ bananas did you buy?', o: ['many', 'much', 'lot'], why: 'Countable plural: *how many* (lesson 2).' },
        { q: 'Can you get a ___ of bread?', o: ['loaf', 'bottle', 'tin'], why: 'Bread comes in a *loaf* (lesson 2).' },
        { q: '“Would you like some water?” – “Yes, ___.”', o: ['please', 'I would', 'I like'], why: 'Answer an offer: *Yes, please* (lesson 3).' },
        { q: '___ the oven to 180 degrees.', o: ['Turn on', 'You turning on', 'Turning on'], why: 'Instructions: the verb alone (lesson 4).' },
        { q: 'We need ___ eggs for the cake.', o: ['a few', 'a little', 'much'], why: 'A small number, countable: *a few* (lesson 2).' },
      ] },
    ] },
    { title: 'Fix the mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
        { s: 'I’d like [a bread] and some cheese.', a: ['some bread', 'a loaf of bread'], why: '*bread* is uncountable.' },
        { s: 'How much [is] these apples?', a: ['are'], why: 'Plural: *How much are…?*' },
        { s: 'We haven’t got [some] onions.', a: ['any'], why: 'Negative: *any*.' },
        { s: 'Then [you must to add] the rice.', a: ['add'], why: 'Instructions use the verb alone.' },
        { s: 'I drink [a lot] water every day.', a: ['a lot of'], why: '*a lot of* + noun.' },
      ] },
    ] },
    { title: 'Exam corner: Reading part 4', blocks: [
      { t: 'text', md: 'In the format of the A2 Key exam, Reading part 4: read the text and choose the right word for each gap.' },
      { t: 'reading', title: 'The Saturday market', md: 'Every Saturday there is a market in our town square. You can buy fresh fruit, bread and cheese there, and it is usually cheaper than the supermarket. I always buy a few vegetables and a loaf of bread. There is also a small café where you can have a coffee and a piece of cake.' },
      { t: 'ex', kind: 'choice', h: 'Choose the word that fits.', items: [
        { q: 'You can buy fresh fruit ___ the market.', o: ['at', 'on', 'of'], why: 'A place where you buy things: *at the market*.' },
        { q: 'It is usually cheaper ___ the supermarket.', o: ['than', 'that', 'as'], why: 'Comparatives use *than*.' },
        { q: 'I always buy ___ vegetables.', o: ['a few', 'a little', 'much'], why: '*vegetables* are countable plural: *a few*.' },
        { q: 'You can have a coffee and a ___ of cake.', o: ['piece', 'bottle', 'carton'], why: 'Cake: *a piece of cake*.' },
      ] },
      { t: 'tip', md: 'In Reading part 4 all three options often look possible. Read the words **after** the gap too: *a ___ of cake* needs a container or piece word, so only *piece* fits.' },
    ] },
  ],
  activities: {
    one: { title: 'Dinner for four', md: 'The student invites three friends to dinner. Together, plan the menu, write the shopping list with amounts and containers (*two bottles of water, a little butter*), then the student “buys” everything from you (you are the shop assistant, with prices). Finally the student explains how to cook the main dish in five steps.' },
    small: { title: 'Plan, shop, cook', md: 'Split the group into two teams. Each team plans a picnic for the class and writes the shopping list in the chat. Then teams take turns as shop assistants: the other team buys everything politely and pays. Finally each team explains how to make one thing in the picnic. Note mistakes for the correction slot.' },
    group: { title: 'Three stations', md: 'Breakout rooms of three, with three rounds of five minutes. Round 1: plan a meal and write the shopping list. Round 2: one student is a shop assistant, the others buy everything. Round 3: explain the recipe for the main dish. Bring everyone back; each room shares its menu and one recipe step.' },
  },
  homework: { book: 'u3', md: 'Do the unit 3 test in the book. Then go to Practice for a round with your unit 3 mistakes.' },
};
