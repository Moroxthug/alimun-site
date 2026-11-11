// English A1, class 28 (docs/LESSONS_PLAN.md). Builds on book lesson u5:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c28',
  focus: 'By the end of the class every student can read a short email about a home and find the key information, and write a short description of their own home using everything from unit 5: rooms and furniture, *there is / there are*, prepositions of place and places nearby. Writing is the main skill today, supported by speaking first.',
  tips: [
    'Before writing, let students say their text aloud to a partner. Spoken first, the writing is faster and has fewer mistakes.',
    'Check three things in every text: *there is / there are* agreement, *in / on* for places, and capital letters for names and *I*.',
    'Some learners write very long sentences joined with commas. Show them how to use **and** and **but** and full stops.',
    'Give feedback on two mistakes per student, not ten. Choose the ones from this unit.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Do you live in a house or a flat? How many rooms are there?* Quick answers round the class.' },
    { min: 15, title: 'Reading', md: 'Board pages 1 and 2. Students read Lucy’s email alone (three minutes), then answer the questions on the board together.' },
    { min: 10, title: 'Useful phrases', md: 'Board page 3. Go through the linking words and the email phrases. Students build two sentences each.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Board page 4: the A2 Key style short message. Students plan the three points together; they write it as homework.' },
    { min: 5, title: 'Close', md: 'Two students read their best sentence aloud. Set the homework.' },
  ],
  board: [
    { title: 'An email from Lucy', blocks: [
      { t: 'reading', title: 'My new flat', md: 'Hi Tom,\n\nI’m in my new flat! It’s small but very nice. There’s a living room with a big sofa and a TV, a kitchen, a bathroom and one bedroom. My bed is next to the window, so I can see the park.\n\nThere isn’t a garden, but there’s a balcony. There are two good cafés near here, and the station is only five minutes away.\n\nCome and see it on Saturday!\n\nLucy' },
    ] },
    { title: 'Questions', blocks: [
      { t: 'ex', kind: 'tf', h: 'Read the email. True, false or not given?', ng: true, items: [
        { q: 'Lucy’s flat is big.', a: 'f', why: '*It’s small but very nice.*' },
        { q: 'There are two bedrooms.', a: 'f', why: 'There is *one bedroom*.' },
        { q: 'Lucy can see the park from her bed.', a: 't', why: '*My bed is next to the window, so I can see the park.*' },
        { q: 'The flat has got a garden.', a: 'f', why: '*There isn’t a garden.*' },
        { q: 'The cafés are cheap.', a: 'ng', why: 'Lucy says the cafés are good, not if they are cheap.' },
      ] },
    ] },
    { title: 'Writing about your home', blocks: [
      { t: 'examples', items: [
        { s: 'It’s small **but** very nice.', n: '*but* joins two different ideas.' },
        { s: 'There’s a kitchen **and** a bathroom.', n: '*and* adds more.' },
        { s: 'My bed is next to the window, **so** I can see the park.', n: '*so* gives a result.' },
        { s: '**Come and see it** on Saturday!', n: 'A friendly end to an email.' },
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
        { q: 'My flat is old, ___ it’s very comfortable.', o: ['but', 'and', 'so'], why: 'Two different ideas: *but*.' },
        { q: 'There’s a big window, ___ the living room is very light.', o: ['so', 'but', 'or'], why: 'A result: *so*.' },
        { q: 'There’s a sofa ___ two armchairs.', o: ['and', 'but', 'so'], why: 'Adding more: *and*.' },
      ] },
    ] },
    { title: 'Exam corner: a short message', blocks: [
      { t: 'text', md: '**Task.** You have a new flat. Write an email to your English friend, Alex. In your email: say how many rooms there are; describe your favourite room; say what is near the flat. Write **25 words or more**.' },
      { t: 'tip', art: 'owl', md: 'In the A2 Key writing test you must answer **all three points**. Before you write, number them in your head and tick each one when it is in your email. A short, correct email with all three points scores better than a long one with two.' },
    ] },
  ],
  activities: {
    one: { title: 'Tour of my home', md: 'The student gives you a spoken tour of their home, room by room, for two minutes. You note three mistakes and three good sentences. Then the student writes the 25-word email from the exam corner and you correct it together on the board.' },
    small: { title: 'Estate agents', md: 'Each student writes a four-sentence advert for their home (it can be invented) in the chat. The group reads all the adverts and each student chooses which home they want to rent and says why: *I want Ana’s flat because there is a balcony.*' },
    group: { title: 'Guess whose home', md: 'Each student writes three sentences about their home and sends them to you privately in the chat. Read them aloud one by one; the class guesses whose home it is. In breakout rooms of three, students then help each other improve their sentences.' },
  },
  homework: { book: 'u5:p4', md: 'Finish book lesson 4 of unit 5 (A new flat). Then write the email from the exam corner (25 words or more, all three points) and send it to your teacher.' },
};
