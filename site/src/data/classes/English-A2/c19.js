// English A2, class 19 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u4:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c19',
  focus: 'By the end of the class every student can describe a place now and in the past with **there is / there are / there was / there were**, and say exactly where things are with **next to, opposite, between, behind, in front of** and **on the corner of**. Each student describes their street today and the place where they lived as a child.',
  tips: [
    'Many languages say *In my street has a café*. Expect it and correct it every time: **In my street there is a café**, or **My street has a café**.',
    'The past form is the same rule as the present: *there was* + one thing, *there were* + plurals. The common mistake is *there was two shops*. Point to the noun.',
    '*next* without *to* (*next the bank*) and *between A with B* are frequent. Drill **next to** and **between A and B** as fixed chunks.',
    'Students confuse *opposite* and *in front of*. Draw it: *in front of* is on the same side, *opposite* is on the other side of the street.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is there near your home?* Each student names three places. Write them on the board.' },
    { min: 10, title: 'There was, there were', md: 'Show board page 1. Go through the table. Students do the exercise, then say two sentences about their town ten years ago.' },
    { min: 10, title: 'Where exactly?', md: 'Show board page 2. Read the street description together. Students answer the questions, then draw your street from your description in the chat.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: matching people to places in the format of A2 Key Reading part 2. Students read alone and choose, then check together.' },
    { min: 5, title: 'Fix the mistakes', md: 'Show board page 4. Quick corrections.' },
    { min: 5, title: 'Close', md: 'Each student says one thing that was in their street before and is not there now. Set the homework.' },
  ],
  board: [
    { title: 'There is, there was', blocks: [
      { t: 'table', caption: 'Now and in the past', explain: ['head', 'col0'], head: ['', 'Now', 'In the past'], rows: [
        ['One thing', 'There’s a park.', 'There was a park.'],
        ['More than one', 'There are three cafés.', 'There were three cafés.'],
        ['Negative', 'There isn’t a lift.', 'There wasn’t a lift.'],
        ['Question', 'Are there any shops?', 'Were there any shops?'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: 'When I was a child, ___ a big cinema in our town.', o: ['there was', 'there were', 'there is'], why: 'Past, one thing: *there was*.' },
        { q: 'Ten years ago ___ any supermarkets near here.', o: ['there weren’t', 'there wasn’t', 'there aren’t'], why: 'Past, plural, negative: *there weren’t*.' },
        { q: 'Today ___ two new cafés in my street.', o: ['there are', 'there is', 'there were'], why: 'Now, plural: *there are*.' },
        { q: '___ a garden at your old house?', o: ['Was there', 'Were there', 'There was'], why: 'Past question, one thing: *Was there…?*' },
      ] },
    ] },
    { title: 'Where exactly?', blocks: [
      { t: 'reading', title: 'My street', md: 'I live in Park Road. There’s a small supermarket on the corner of Park Road and High Street. Next to the supermarket there’s a bakery, and opposite the bakery there’s a park with a playground. My flat is between the bank and a hairdresser’s. There’s a bus stop in front of my building, and behind it there’s a car park.' },
      { t: 'ex', kind: 'tf', h: 'Read the text. True or false?', items: [
        { q: 'The bakery is next to the supermarket.', a: 't', why: '*Next to the supermarket there’s a bakery.*' },
        { q: 'The park is on the same side of the street as the bakery.', a: 'f', why: 'It is *opposite* the bakery: on the other side.' },
        { q: 'The flat is between the bank and the hairdresser’s.', a: 't', why: '*between the bank and a hairdresser’s*.' },
        { q: 'The car park is in front of the building.', a: 'f', why: 'The bus stop is in front; the car park is *behind*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading part 2', blocks: [
      { t: 'text', md: 'In the format of the A2 Key exam, Reading part 2: three short texts about places, and questions about them. Choose the right place for each question.\n\n**A. Rose Street:** quiet, with a small park opposite the houses, but there aren’t any shops.\n\n**B. Market Square:** lots of cafés and a market every Saturday; it can be noisy at night.\n\n**C. River Road:** next to the station, with a big supermarket and a swimming pool behind it.' },
      { t: 'ex', kind: 'choice', h: 'Which place is it?', items: [
        { q: 'Which place is good for someone who travels by train every day?', o: ['C, River Road', 'A, Rose Street', 'B, Market Square'], why: 'River Road is *next to the station*.' },
        { q: 'Which place has no shops?', o: ['A, Rose Street', 'B, Market Square', 'C, River Road'], why: '*there aren’t any shops* in Rose Street.' },
        { q: 'Which place might be difficult for someone who goes to bed early?', o: ['B, Market Square', 'A, Rose Street', 'C, River Road'], why: '*it can be noisy at night*.' },
      ] },
      { t: 'tip', md: 'In Reading part 2 each text mentions many things. Underline the key idea of the question (*train, shops, noise*) and look for the same idea in other words: *station*, *there aren’t any shops*, *noisy at night*.' },
    ] },
    { title: 'Fix the mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
        { s: '[In my street has] a big library.', a: ['In my street there is', 'In my street there’s', 'My street has'], why: 'For what is in a place: *there is*.' },
        { s: 'There [was] two cinemas in my town.', a: ['were'], why: 'Plural: *there were*.' },
        { s: 'The bank is [next] the post office.', a: ['next to'], why: '*next* needs *to*.' },
        { s: 'The café is between the bank [with] the cinema.', a: ['and'], why: '*between A and B*.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Then and now', md: 'The student describes the street or village where they lived as a child (*There was a…, there weren’t any…*), then their street today, with at least five words of place. You draw a simple map in the chat as they speak and show it at the end: where your map is wrong, the student explains again more clearly.' },
    small: { title: 'Draw my street', md: 'In pairs, A describes their street for two minutes (*There’s a café on the corner, opposite the café there’s…*). B draws it and shows the drawing. A corrects anything in the wrong place. Swap. Then each student tells the group one thing that changed in their town (*There was a…, now there’s a…*).' },
    group: { title: 'Find the flat', md: 'Post a simple street map in the chat with six empty buildings. In breakout rooms of three, each student secretly decides where their flat, a café and a shop are, then describes them with words of place; the others mark the map. Compare maps. Bring everyone back: correct the words of place you heard most often.' },
  },
  homework: { book: 'u4:p1', md: 'Finish book lesson 1 of unit 4 (There’s a park opposite), including the speaking task. Then write 50 to 60 words comparing your street today with a place where you lived before, using *there was / there were* and three words of place.' },
};
