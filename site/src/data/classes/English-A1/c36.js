// English A1, class 36 (docs/LESSONS_PLAN.md). Builds on book lesson u7:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c36',
  focus: 'By the end of the class every student can name common clothes and colours, describe what someone wears with the adjective **before** the noun (*a red coat*, not *a coat red*), and use **a pair of** with trousers, jeans, shoes and glasses. Students should describe the clothes of at least two people (classmates on camera, or pictures).',
  tips: [
    'Spanish, French, Italian, Portuguese and Arabic speakers often put the colour after the noun: *a shirt blue*. In English the adjective always comes first and never takes *-s*: *two blue shirts*, not *two blues shirts*.',
    '*Trousers, jeans, shorts, glasses* are plural: *My jeans are new.* Use *a pair of* to count them: *two pairs of shoes*.',
    'Pronunciation: *clothes* is one syllable (like *close*). *Shirt*, *skirt* and *shorts* are easily confused; drill them in a row.',
    'Use the class itself: students on camera are the best picture. Describe what people are wearing only with simple sentences (*She’s got a green jumper*), since the present continuous comes in class 38.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Describe one student’s clothes without saying the name (*This person has got a black jumper and glasses*). The class guesses who it is.' },
    { min: 10, title: 'Clothes and colours', md: 'Board page 1. Students match the clothes words, then say the colour of one thing they have.' },
    { min: 10, title: 'Adjective before noun', md: 'Board page 2. Elicit the word order rule; students solve the exercise on the board.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'A pair of', md: 'Board page 3. Practise plural clothes and *a pair of*. Students fix the mistakes.' },
    { min: 5, title: 'Exam corner', md: 'Board page 4: an A2 Key style word task.' },
    { min: 5, title: 'Close', md: 'Each student says their favourite piece of clothing and its colour. Set the homework.' },
  ],
  board: [
    { title: 'Clothes and colours', blocks: [
      { t: 'ex', kind: 'match', h: 'Match the word and the description.', pairs: [
        ['a coat', 'you wear it outside when it is cold'],
        ['a skirt', 'women and girls wear it, from the waist down'],
        ['trainers', 'sports shoes'],
        ['a jumper', 'a warm top, often made of wool'],
        ['a T-shirt', 'a top with short arms, for summer'],
      ] },
    ] },
    { title: 'Colour first', blocks: [
      { t: 'examples', items: [
        { s: 'a **red** coat', n: 'Adjective before the noun.' },
        { s: 'two **blue** shirts', n: 'The adjective never takes *-s*.' },
        { s: 'a **long black** dress', n: 'Size before colour.' },
        { s: 'My coat is **red**.', n: 'After *be*, the adjective can come at the end.' },
      ] },
      { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
        { a: 'She has got a green jumper.', why: 'Colour before the noun: *a green jumper*.' },
        { a: 'I want two white T-shirts.', why: '*white* before *T-shirts*, with no *-s* on *white*.' },
        { a: 'He is wearing old brown shoes.', why: 'Other adjectives before the colour: *old brown shoes*.' },
      ] },
    ] },
    { title: 'A pair of', blocks: [
      { t: 'text', md: '**Trousers, jeans, shorts, shoes, glasses** are plural: *My jeans **are** new.* To count them, say **a pair of**: *a pair of jeans*, *two pairs of shoes*.' },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I’ve got a [coat blue].', a: ['blue coat'], why: 'The colour comes before the noun.' },
        { s: 'My jeans [is] very old.', a: ['are'], why: '*jeans* is plural: *are*.' },
        { s: 'She buys two [blacks] skirts.', a: ['black'], why: 'Adjectives never take *-s*.' },
        { s: 'I need a new [trouser].', a: ['pair of trousers'], why: '*trousers* is always plural: *a pair of trousers*.' },
      ] },
    ] },
    { title: 'Exam corner: which word?', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: read the description and choose the word.', items: [
        { q: 'You wear these on your feet when you go running.', o: ['trainers', 'gloves', 'a scarf'], why: 'Sports shoes for your feet: *trainers*.' },
        { q: 'You put this round your neck when it is cold.', o: ['a scarf', 'a belt', 'a skirt'], why: 'Round your neck: *a scarf*.' },
        { q: 'People wear this on their head in the sun.', o: ['a hat', 'a jacket', 'socks'], why: 'On your head: *a hat*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In this part of the A2 Key reading test, each sentence describes a word. Look for the **key information**: where you wear it (*feet*, *neck*, *head*) and when (*cold*, *sun*).' },
    ] },
  ],
  activities: {
    one: { title: 'Pack my suitcase', md: 'The student is going on holiday to a hot place, then to a cold place. For each, they tell you what clothes they pack with colours (*two white T-shirts, a pair of shorts …*); you write the list on the board and correct the word order. Then you pack a suitcase and the student guesses where you are going.' },
    small: { title: 'Who is it?', md: 'One student describes another student’s clothes as seen on camera (*This person has got a grey jumper and glasses*). The others guess. The student who guesses describes the next person. Check word order every time.' },
    group: { title: 'Shop window', md: 'Post a picture of a shop window (or describe one in the chat). In breakout rooms of three, students choose an outfit for each other from the window and describe it: *For Ana: a long blue dress and white trainers.* Back together, rooms present their best outfit.' },
  },
  homework: { book: 'u7:p1', md: 'Finish book lesson 1 of unit 7 (What do you wear?), including the speaking task. Then write what you usually wear to work or school and at the weekend, with colours (five sentences).' },
};
