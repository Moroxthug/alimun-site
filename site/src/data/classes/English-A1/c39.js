// English A1, class 39 (docs/LESSONS_PLAN.md). Builds on book lesson u7:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c39',
  focus: 'By the end of the class every student can read and write a short holiday message (where you are, the weather, what you are doing, what people are wearing) and describe a picture for about a minute: who is there, what they are wearing and what they are doing. This lesson puts the whole unit together, so fluency and linking words (*and*, *but*, *so*) matter more than new grammar.',
  tips: [
    'In picture descriptions, beginners list nouns (*man, hat, dog*). Push them to full sentences with *There is / There are* and the present continuous.',
    'Linking: show **and**, **but** and **so** and ask for at least one of each in the message. It makes writing sound natural quickly.',
    'Watch the adjective order: *a coat red* is a common mistake for speakers of Spanish, French, Italian, Portuguese and Arabic. It is always **a red coat**.',
    'Give a one-minute timer for describing the picture: it is close to the speaking exam and builds confidence.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Where do you go for a weekend away? What’s the weather like there?* Collect places on the board.' },
    { min: 10, title: 'Read the messages', md: 'Show board page 1. Students read the two messages alone, then answer the questions on the board together.' },
    { min: 10, title: 'Describe a picture', md: 'Show board page 2. Go through the useful phrases, then students put the sentences in order to make a description.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Write your message', md: 'Show board page 3. Students complete the message on the board together, then each writes their own in the chat, using *and*, *but* and *so*.' },
    { min: 5, title: 'Exam corner', md: 'Show board page 4. Students choose the right word for each gap in the email.' },
    { min: 5, title: 'Close', md: 'Two students read their message aloud; the class says one thing they liked. Set the homework.' },
  ],
  board: [
    { title: 'Two messages', blocks: [
      { t: 'reading', title: 'From Lucy', md: 'Hi Grace! I’m in Brighton with Tom. It’s sunny but windy, so I’m wearing my big jumper. We’re sitting in a café by the sea and Tom is eating fish and chips. See you on Monday!' },
      { t: 'ex', kind: 'tf', h: 'Read the message. Are the sentences true or false?', items: [
        { q: 'Lucy is in Brighton.', a: 't', why: '*I’m in Brighton with Tom.*' },
        { q: 'It’s raining.', a: 'f', why: 'It’s sunny but windy.' },
        { q: 'Lucy is eating fish and chips.', a: 'f', why: 'Tom is eating fish and chips.' },
      ] },
    ] },
    { title: 'Describe a picture', blocks: [
      { t: 'table', caption: 'Useful phrases', explain: ['head', 'col1'], head: ['Say', 'To talk about'], rows: [
        ['In the picture there is / there are …', 'what you can see'],
        ['On the left / on the right / in the middle …', 'where things are'],
        ['A woman is wearing …', 'clothes'],
        ['Two children are playing …', 'actions now'],
        ['It’s sunny / cold …', 'the weather'],
      ] },
      { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
        { a: 'In the picture there are three people.', why: '*In the picture* + *there are* + number + noun.' },
        { a: 'On the left a man is reading a newspaper.', why: 'Where, then who, then what he is doing.' },
        { a: 'The woman is wearing a yellow dress.', why: 'Adjective before the noun: *a yellow dress*.' },
      ] },
    ] },
    { title: 'Write your message', blocks: [
      { t: 'ex', kind: 'bank', h: 'Complete the message with the words.', extra: ['because'], items: [
        { q: 'We’re in Rome ___ it’s very hot!', a: 'and', why: '*and* adds more information.' },
        { q: 'I like the city, ___ the hotel is small.', a: 'but', why: '*but* shows a difference.' },
        { q: 'It’s raining today, ___ we’re visiting a museum.', a: 'so', why: '*so* shows the result.' },
      ] },
    ] },
    { title: 'Exam corner: an email', blocks: [
      { t: 'ex', kind: 'select', h: 'In the format of the A2 Key exam: choose the right word for each gap.', items: [
        { q: 'Dear Sam, I ___ writing to you from Paris.', o: ['am', 'is', 'are'], why: '*I am* + *-ing*.' },
        { q: 'The weather is great. It’s sunny ___ warm.', o: ['and', 'but', 'so'], why: 'Two good things: *and*.' },
        { q: 'We’re staying ___ a small hotel near the river.', o: ['in', 'on', 'at the'], why: 'You stay *in* a hotel.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In the A2 Key reading test, one part is an email with gaps. Read the whole sentence before you choose: the words around the gap tell you the answer.' },
    ] },
  ],
  activities: {
    one: { title: 'Postcard from anywhere', md: 'The student chooses a photo from their phone or a place they love. They describe it for one minute as if they are there now: weather, clothes, what people are doing. Ask three follow-up questions, then the student writes it as a short message and you correct it together.' },
    small: { title: 'Guess the place', md: 'Each student thinks of a holiday place and describes it in three sentences without naming it: *It’s cold. I’m wearing a big coat. People are skiing.* The others guess. The best description gets a point.' },
    group: { title: 'Picture relay', md: 'Breakout rooms of three or four, each with one picture (send it in the chat). Each student adds one sentence to a shared description in the chat until they have eight sentences. Back in the main room, rooms read their description and the others guess which picture it is.' },
  },
  homework: { book: 'u7:p4', md: 'Finish book lesson 4 of unit 7 (A weekend away). Then write a message (40 to 50 words) from a weekend away: where you are, the weather, what you are wearing and doing. Use *and*, *but* and *so*.' },
};
