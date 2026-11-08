// English A2, class 23 (docs/LESSONS_PLAN.md, L6). Review of book unit u4 (Homes and towns). Draft for the owner's review.
export const LESSON = {
  id: 'c23',
  focus: 'A review of unit 4, mostly speaking. Students bring together *there is / there was*, words of place, comparatives and *as … as*, directions and writing about where they live. By the end, each student can describe their town, compare it with another place and guide someone around it, with few mistakes in prepositions and comparatives.',
  tips: [
    'Start with the mistakes you noted in classes 19 to 22: a review works best when it fixes this class’s real problems.',
    'The most persistent errors in this unit are *more bigger*, *next the* and *there was* with plurals. Listen for these three in every activity.',
    'Keep rule explanations to one sentence; if more is needed, point to the book lesson and practise instead.',
    'The mid-level check is next class. Tell students so, and tell them it covers units 1 to 4, to encourage the unit test homework.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask each student: *What is the best thing about your town?* They must use one comparative.' },
    { min: 10, title: 'Quick check', md: 'Show board page 1. Students do the mixed exercise alone, then check together.' },
    { min: 20, title: 'Activity', md: 'Use the activity for your class size below: a tour of my town.' },
    { min: 10, title: 'Fix the mistakes', md: 'Show board page 2. Add two mistakes you heard today. Students correct them together.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: an open cloze in the format of A2 Key Reading part 5. Students write one word in each gap, then compare.' },
    { min: 5, title: 'Close', md: 'Remind students about the mid-level check next class. Set the homework: the unit test.' },
  ],
  board: [
    { title: 'Quick check: unit 4', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
        { q: 'When I was young, ___ three cinemas in my town.', o: ['there were', 'there was', 'there are'], why: 'Past, plural: *there were* (lesson 1).' },
        { q: 'The pharmacy is ___ the bank and the café.', o: ['between', 'next', 'opposite to'], why: '*between A and B* (lesson 1).' },
        { q: 'My new flat is ___ than my old one.', o: ['quieter', 'more quiet', 'quiet'], why: 'Short adjective: *-er* (lesson 2).' },
        { q: 'The bus isn’t as fast ___ the train.', o: ['as', 'than', 'that'], why: '*not as … as* (lesson 2).' },
        { q: 'Excuse me, how do I ___ to the station?', o: ['get', 'go', 'arrive'], why: '*How do I get to…?* (lesson 3).' },
        { q: 'It’s small, ___ it’s very near the sea.', o: ['but', 'so', 'because'], why: 'A contrast: *but* (lesson 4).' },
      ] },
    ] },
    { title: 'Fix the mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
        { s: 'My city is [more big] than yours.', a: ['bigger'], why: 'Short adjective: *-er*.' },
        { s: 'There [was] lots of shops in the old town.', a: ['were'], why: 'Plural: *there were*.' },
        { s: 'The park is [in front] the museum.', a: ['in front of', 'opposite'], why: '*in front of* needs *of*.' },
        { s: 'Turn left [in] the traffic lights.', a: ['at'], why: 'A point on the way: *at*.' },
        { s: 'Life here is [more better].', a: ['better', 'much better'], why: '*better* is already a comparative.' },
      ] },
    ] },
    { title: 'Exam corner: Reading part 5', blocks: [
      { t: 'text', md: 'In the format of the A2 Key exam, Reading part 5: write **one word** in each gap.' },
      { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
        { q: 'My town is smaller ___ the capital, but I love it.', a: ['than'], why: 'Comparatives use *than*.' },
        { q: 'There ___ a lovely park next to my school when I was a child.', a: ['was'], why: 'Past, one thing: *there was*.' },
        { q: 'The library is opposite the bank, on the corner ___ Green Street.', a: ['of'], why: '*on the corner of* + street.' },
        { q: 'It’s a long way, ___ I usually take the bus.', a: ['so'], why: 'A result: *so*.' },
      ] },
      { t: 'tip', md: 'In Reading part 5, if you are not sure, try the most common small words in the gap: *than, of, so, was, the, at*. Only one word fits the grammar **and** the meaning.' },
    ] },
  ],
  activities: {
    one: { title: 'A tour of my town', md: 'The student is your guide. They describe their town today and in the past (*there was / there were*), compare it with a city you name, and give directions from the station to their favourite place in it. Ask follow-up questions (*Is it far? Is it more expensive than…?*). Note mistakes for the correction slot.' },
    small: { title: 'Sell your town', md: 'Each student has two minutes to “sell” their town to the group as the best place to live: what there is, where things are, and why it is better than other places. The others ask one question each. At the end the group votes for the town they would move to, and gives reasons with comparatives.' },
    group: { title: 'Town guides', md: 'Breakout rooms of three, three rounds. Round 1: each student describes their street. Round 2: compare two of your towns. Round 3: give directions on the map in the chat. Bring everyone back: each room says one comparison and one direction it is proud of.' },
  },
  homework: { book: 'u4', md: 'Do the unit 4 test in the book. Before the mid-level check, do one Practice round with your mistakes from units 1 to 4.' },
};
