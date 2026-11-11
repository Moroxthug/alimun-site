// English A2, class 16 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u3:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c16',
  focus: 'By the end of the class every student can read a simple recipe, give clear instructions with the imperative (*Cut the onions. Don’t add salt yet.*) and put steps in order with **first**, **then**, **after that**, **next** and **finally**. Each student explains how to make one simple dish from their country in five or six steps.',
  tips: [
    'Students often add a subject to instructions (*You cut the onions*). It is not wrong in speech, but recipes and instructions use the verb alone. Model **Cut the onions** and keep it short.',
    'The negative imperative is **Don’t** + verb. Watch for *Not add salt* and *No add salt*.',
    'Kitchen verbs are easy to confuse: *boil* (water), *fry* (oil), *bake* (oven). Mime them; it is faster than explaining.',
    'Sequencers make speaking clear. Ask every student to use at least three different ones in the activity.',
    'Students love talking about food from home. Let them use the name of the dish in their language, then explain it in English.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is the easiest thing you can cook?* Each student says the name of one dish. Write three on the board.' },
    { min: 10, title: 'Kitchen verbs', md: 'Show board page 1. Mime each verb; students match verbs and meanings on the board.' },
    { min: 10, title: 'First, then, after that', md: 'Show board page 2. Read the recipe together. Students put the steps of a second recipe in order.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: a recipe text in the format of A2 Key Reading part 3. Students read alone and answer, then check together.' },
    { min: 5, title: 'Fix the mistakes', md: 'Show board page 4. Quick corrections of instructions.' },
    { min: 5, title: 'Close', md: 'Each student gives one instruction for their dish with a sequencer. Set the homework.' },
  ],
  board: [
    { title: 'Kitchen verbs', blocks: [
      { t: 'ex', kind: 'match', h: 'Match the verb and what it means.', pairs: [
        ['cut', 'make something into pieces with a knife'],
        ['boil', 'cook in very hot water'],
        ['fry', 'cook in hot oil'],
        ['add', 'put one thing into another'],
        ['mix', 'put things together and turn them'],
        ['bake', 'cook in the oven'],
      ] },
    ] },
    { title: 'First, then, after that', blocks: [
      { t: 'reading', title: 'Tomato soup', md: 'First, cut two onions and fry them in a little oil for five minutes.\n\nThen add six tomatoes and a litre of water. After that, boil the soup for twenty minutes.\n\nDon’t add salt yet. Finally, mix the soup, add a little salt and serve it with some bread.' },
      { t: 'ex', kind: 'order', h: 'Put the words in order to make instructions.', items: [
        { a: 'First, boil some water.', why: '*First* + the imperative.' },
        { a: 'Then add the pasta.', why: '*Then* starts the next step.' },
        { a: 'Don’t cook it for too long.', why: 'Negative instruction: *Don’t* + verb.' },
      ] },
    ] },
    { title: 'Exam corner: Reading part 3', blocks: [
      { t: 'text', md: 'In the format of the A2 Key exam, Reading part 3: read the text and choose the right answer.' },
      { t: 'reading', title: 'Lena’s pancakes', md: 'Every Sunday, Lena makes pancakes for her family. “It’s a family recipe from my grandmother,” she says. First she mixes two eggs, a cup of flour and a cup of milk. Then she leaves the mix for ten minutes. “That’s the secret,” she says. After that she fries the pancakes in a little butter. Her children like them with sugar and lemon, but Lena prefers honey.' },
      { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
        { q: 'Who gave Lena the recipe?', o: ['her grandmother', 'her mother', 'her children'], why: '*a family recipe from my grandmother*.' },
        { q: 'What is the secret of the recipe?', o: ['leaving the mix for ten minutes', 'using two eggs', 'frying in butter'], why: '*Then she leaves the mix for ten minutes. “That’s the secret.”*' },
        { q: 'How does Lena like her pancakes?', o: ['with honey', 'with sugar and lemon', 'with butter'], why: 'Her children like sugar and lemon, *but Lena prefers honey*.' },
      ] },
      { t: 'tip', md: 'In Reading part 3 the questions follow the order of the text. Find the part of the text for each question and read it carefully: watch for **but**, which often changes the answer.' },
    ] },
    { title: 'Fix the mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Each instruction has one mistake. Find it and fix it.', items: [
        { s: '[Not add] the sugar yet.', a: ['Don’t add', "Don't add", 'Do not add'], why: 'Negative instruction: *Don’t* + verb.' },
        { s: 'First, [cutting] the potatoes.', a: ['cut'], why: 'Instructions use the verb alone: *cut*.' },
        { s: 'Fry the onions [in] five minutes.', a: ['for'], why: 'How long: *for five minutes*.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Cook with me', md: 'The student explains how to make a dish from their country while you “cook” it, following every instruction exactly as said (if they forget a step, ask *And then?*). Write the recipe as they speak. At the end, read it back and improve two instructions together.' },
    small: { title: 'Mystery dish', md: 'Each student thinks of a dish and gives the recipe in five steps with sequencers, without saying its name. The others guess the dish and ask one question each (*How long do you cook it?*). The best recipe is the one the group guesses fastest.' },
    group: { title: 'Class cookbook', md: 'Breakout rooms of three. Each room chooses one simple dish and writes a six-step recipe in the chat with *First, Then, After that, Finally* and at least one *Don’t*. Bring everyone back: each room reads its recipe and the others vote for the one they would cook tonight. Correct imperative mistakes together.' },
  },
  homework: { book: 'u3:p4', md: 'Finish book lesson 4 of unit 3 (Soup for dinner), including the speaking task. Then write the recipe for a dish you like (40 to 50 words) with at least four sequencers.' },
};
