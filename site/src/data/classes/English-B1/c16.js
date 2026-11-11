// English B1, class 16 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u4:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c16',
  focus: 'By the end of the class every student can say when there is more or less than they want with **too**, **too much**, **too many**, **enough** and **not enough**, with the words in the right place: *too hot*, *too much sugar*, *too many cars*, *big enough*, *enough time*. Students practise complaining and describing problems at home and in food.',
  tips: [
    'The most common mistake is *too much hot*. Show the difference: **too** goes before an adjective, **too much** before an uncountable noun, **too many** before a plural noun.',
    'The position of *enough* is the second big problem: it goes **after** an adjective (*big enough*) but **before** a noun (*enough eggs*). Use two colours on the board for the two positions.',
    'Some learners use *too* to mean *very* in a positive way (*This cake is too good!*). Explain that *too* means there is a problem: *too sweet to eat*. For praise, say *really good* or *so good*.',
    'Keep the examples concrete: a flat, a meal, a city. Abstract examples make the rules harder to see.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is wrong with your town, your flat or your job?* Write the problems students mention as short notes (noise, cars, small kitchen).' },
    { min: 10, title: 'Too and enough', md: 'Show board page 1. Go through the table, then turn each warm-up note into a sentence with *too* or *enough* together.' },
    { min: 10, title: 'Practice', md: 'Show board page 2. Students choose the words alone, then rewrite two sentences of their own with *not … enough*.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: a gap-fill in the format of B1 Preliminary Listening part 3. Read the doctor’s message aloud twice. Students write one or two words in each gap.' },
    { min: 5, title: 'Fix it', md: 'Show board page 4. Students correct the sentences, then you add one mistake from the activity.' },
    { min: 5, title: 'Close', md: 'Each student says one thing in their life that is *too…* and one thing that is not *… enough*. Set the homework.' },
  ],
  board: [
    { title: 'Too and enough', blocks: [
      { t: 'table', caption: 'Where do they go?', explain: ['head', 'col1'], head: ['Pattern', 'Used with', 'Example'], rows: [
        ['too + adjective', 'adjectives', 'The soup is too salty.'],
        ['too much + noun', 'uncountable nouns', 'You drink too much coffee.'],
        ['too many + noun', 'plural nouns', 'There are too many people here.'],
        ['adjective + enough', 'adjectives (after them)', 'The kitchen isn’t big enough.'],
        ['enough + noun', 'all nouns (before them)', 'We haven’t got enough chairs.'],
      ] },
      { t: 'tip', md: '**Too** means there is a problem. *The tea is too hot* = I can’t drink it now. To say something is good, use *really* or *so*: *The cake is so good!*' },
    ] },
    { title: 'Choose the right words', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
        { q: 'I can’t sleep. There’s ___ noise from the street.', o: ['too much', 'too many', 'too'], why: '*noise* is uncountable: *too much*.' },
        { q: 'There are ___ sweets in this house!', o: ['too many', 'too much', 'enough of'], why: 'Plural noun: *too many*.' },
        { q: 'This bag isn’t ___ for all the shopping.', o: ['big enough', 'enough big', 'too big'], why: '*enough* after an adjective.' },
        { q: 'We don’t have ___ to cook a proper meal tonight.', o: ['enough time', 'time enough', 'too time'], why: '*enough* before a noun.' },
        { q: 'The water is ___ cold to swim in.', o: ['too', 'too much', 'enough'], why: '*too* + adjective.' },
      ] },
    ] },
    { title: 'Exam corner: Listening part 3', blocks: [
      { t: 'text', md: 'In the format of the B1 Preliminary exam, Listening part 3. Your teacher reads the doctor’s voice message twice. Write **one or two words** in each gap.\n\n*Teacher reads:* “Hello Mr Grant, it’s Dr Okafor. Your blood test is fine, but you’re eating too much sugar and you aren’t getting enough sleep. Please try to sleep at least seven hours. Drink more water, about two litres a day, and walk for thirty minutes after dinner. Come back in six weeks.”' },
      { t: 'ex', kind: 'gap', h: 'Complete the notes.', items: [
        { q: 'Problem 1: too much ___.', a: ['sugar'], why: '“you’re eating too much sugar”.' },
        { q: 'Problem 2: not enough ___.', a: ['sleep'], why: '“you aren’t getting enough sleep”.' },
        { q: 'Sleep at least ___ hours.', a: ['seven', '7'], why: '“at least seven hours”.' },
        { q: 'Walk after ___.', a: ['dinner'], why: '“walk for thirty minutes after dinner”.' },
        { q: 'Next appointment: in six ___.', a: ['weeks'], why: '“Come back in six weeks”.' },
      ] },
      { t: 'tip', md: 'In Listening part 3 you write the words you hear. Read the notes before the recording starts and guess what kind of word goes in each gap: a number, a time, a food. You hear it twice, so check your answers the second time.' },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
        { s: 'It’s [too much hot] in this room.', a: ['too hot'], why: '*too* alone before an adjective.' },
        { s: 'There are [too much] cars in the centre.', a: ['too many'], why: 'Plural noun: *too many*.' },
        { s: 'The flat isn’t [enough big] for a family.', a: ['big enough'], why: '*enough* goes after the adjective.' },
        { s: 'We haven’t got [eggs enough] for the cake.', a: ['enough eggs'], why: '*enough* goes before the noun.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'The flat viewing', md: 'You are an estate agent showing the student a flat. Describe it with good and bad points. The student complains politely with *too* and *enough* (*The bedroom isn’t big enough, there are too many stairs*), then you swap: the student describes their own home and you complain. Finish by agreeing which flat is better and why.' },
    small: { title: 'The worst holiday', md: 'Each student invents a terrible holiday and describes it in five sentences with *too, too much, too many* and *not enough* (*The hotel was too far from the beach, there wasn’t enough hot water*). The others ask one question each. The group votes for the worst holiday. Correct position mistakes with *enough* at the end.' },
    group: { title: 'Fix our town', md: 'Breakout rooms of three or four. Each room writes a list of five problems in their town in the chat (*There are too many cars, there aren’t enough parks*) and one solution for each with *If…, …* from the last class. Back together, each room reads its best problem and solution. The class chooses the most useful solution.' },
  },
  homework: { book: 'u4:p2', md: 'Finish book lesson 2 of unit 4 (Too much, not enough), including the speaking task. Then write a short message (40 to 50 words) to a friend about a problem at home, using *too*, *too much* or *too many* and *enough* at least once each.' },
};
