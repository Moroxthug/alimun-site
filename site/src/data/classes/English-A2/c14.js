// English A2, class 14 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u3:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c14',
  focus: 'By the end of the class every student can ask about amounts with **how much** and **how many**, answer with **a lot of**, **a few**, **a little**, **not much** and **not many**, and buy uncountable things with containers (*a bottle of water, two cartons of milk*). The class should finish with a real shopping conversation where every amount is right.',
  tips: [
    'The rule is simple but students mix it up under pressure: *how many* + plural, *how much* + uncountable. Point at the noun, not the question word, when you correct.',
    'Watch for *a few cheese* and *a little apples*. Ask: *Can you count it?* and let the student fix it.',
    'Learners often say *two milks* or *three breads*. Teach them to count the container: **two cartons of milk**, **a loaf of bread**.',
    'Pronunciation: *of* is weak in containers. Model **a bottle of water** as one fast unit, not four slow words.',
    '*How much is it?* for prices is fine. If students ask why *much*, say *money* is uncountable and move on.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask three quick questions: *How many brothers and sisters have you got? How much coffee do you drink a day? How many languages do you speak?* Write the two question forms on the board.' },
    { min: 10, title: 'How much, how many', md: 'Show board page 1. Go through the table. Students do the exercise on the board together.' },
    { min: 10, title: 'Bottles and packets', md: 'Show board page 2. Students match containers and food, then say one thing they bought last week with a container (*I bought two bottles of olive oil*).' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Fix the mistakes', md: 'Show board page 3. Students correct the sentences, then ask each other one *how much* and one *how many* question.' },
    { min: 5, title: 'Exam corner', md: 'Show board page 4: notices in the format of A2 Key Reading part 1. Students choose the meaning of each notice.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they eat a lot of and one thing they eat a little of. Set the homework.' },
  ],
  board: [
    { title: 'How much, how many', blocks: [
      { t: 'table', caption: 'Amounts', explain: ['head', 'col0'], head: ['', 'Countable', 'Uncountable'], rows: [
        ['Question', 'How many eggs?', 'How much milk?'],
        ['A big amount', 'a lot of eggs', 'a lot of milk'],
        ['A small amount', 'a few eggs', 'a little milk'],
        ['Negative', 'not many eggs', 'not much milk'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
        { q: 'How ___ apples do we need?', o: ['many', 'much', 'lot'], why: '*apples* are countable: *how many*.' },
        { q: 'How ___ sugar do you take?', o: ['much', 'many', 'few'], why: '*sugar* is uncountable: *how much*.' },
        { q: 'There are only ___ tomatoes left.', o: ['a few', 'a little', 'much'], why: 'A small number of countable things: *a few*.' },
        { q: 'Add ___ salt, not too much.', o: ['a little', 'a few', 'many'], why: 'A small amount of something uncountable: *a little*.' },
        { q: 'We haven’t got ___ time.', o: ['much', 'many', 'a few'], why: '*time* is uncountable: *not much*.' },
      ] },
    ] },
    { title: 'Bottles and packets', blocks: [
      { t: 'ex', kind: 'match', h: 'Match the container and the food.', pairs: [
        ['a bottle of', 'olive oil'],
        ['a carton of', 'orange juice'],
        ['a packet of', 'biscuits'],
        ['a tin of', 'tomatoes'],
        ['a loaf of', 'bread'],
        ['a piece of', 'cake'],
      ] },
      { t: 'ex', kind: 'gap', h: 'Write the container.', items: [
        { q: 'Can you get two ___ of milk for breakfast?', a: ['cartons'], why: 'Milk comes in *cartons*.' },
        { q: 'I’d like a ___ of chocolate cake.', a: ['piece', 'slice'], why: 'One part of a cake: *a piece*.' },
        { q: 'We need a ___ of rice for the soup.', a: ['packet', 'bag'], why: 'Rice comes in a *packet* or *bag*.' },
      ] },
    ] },
    { title: 'Fix the mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
        { s: 'How [much] eggs do you want?', a: ['many'], why: '*eggs* are countable: *how many*.' },
        { s: 'I bought two [milks].', a: ['cartons of milk', 'bottles of milk'], why: 'Count the container: *two cartons of milk*.' },
        { s: 'Put [a few] cheese on the pasta.', a: ['a little', 'some'], why: '*cheese* is uncountable: *a little*.' },
        { s: 'There aren’t [much] people in the shop today.', a: ['many'], why: '*people* is plural: *not many*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading part 1', blocks: [
      { t: 'text', md: 'In the format of the A2 Key exam, Reading part 1: read each notice and choose what it says.' },
      { t: 'ex', kind: 'choice', h: 'What does the notice say?', items: [
        { q: 'SUPERMARKET: Fresh bread – 2 loaves for £3 until Saturday', o: ['Bread is cheaper if you buy two loaves this week.', 'The supermarket sells bread only on Saturday.', 'You must buy two loaves of bread.'], why: '*2 loaves for £3 until Saturday* is a special price for this week.' },
        { q: 'CAFÉ: Sorry, no more soup today. Sandwiches still available.', o: ['You can still buy a sandwich.', 'The café has a lot of soup.', 'The café is closed today.'], why: '*Still available* means you can buy them.' },
        { q: 'NOTE ON FRIDGE: Only a little milk left – please buy some!', o: ['Someone needs to buy more milk.', 'There isn’t any milk at all.', 'Don’t drink the milk.'], why: '*Only a little left* means there is some, but not enough.' },
      ] },
      { t: 'tip', md: 'In Reading part 1 the right answer says the same thing in **different words**. An option that repeats words from the notice is often a trap: check the meaning, not the words.' },
    ] },
  ],
  activities: {
    one: { title: 'The party shop', md: 'You are planning a party for ten people together. The student asks *How much / How many…?* about everything you need (drinks, bread, cheese, cakes, plates) and decides the amounts with containers (*We need six bottles of water and three loaves of bread*). At the end the student reads the whole shopping list aloud.' },
    small: { title: 'Kitchen survey', md: 'Each student asks every other student two questions (*How much water do you drink a day? How many cups of coffee do you have?*) and notes the answers. Then each student reports one surprising answer: *Ahmed drinks a lot of tea, but he doesn’t eat much bread.* Listen for *much/many* and correct at the end.' },
    group: { title: 'Market stalls', md: 'Breakout rooms of three: one seller, two customers. The seller has a stall (fruit, drinks or dry food, chosen in the chat). Customers buy three things each, with amounts and containers, and ask *How much is it?* Swap roles twice. Bring everyone back and ask two rooms to perform their best conversation.' },
  },
  homework: { book: 'u3:p2', md: 'Finish book lesson 2 of unit 3 (How much? How many?), including the speaking task. Then write five questions with *how much* or *how many* to ask a classmate in the next class.' },
};
