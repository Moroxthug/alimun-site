// English A1, class 25 (docs/LESSONS_PLAN.md). Builds on book lesson u5:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c25',
  focus: 'By the end of the class every student can name the rooms of a home and the main furniture, and describe a room with **there is** (one thing) and **there are** (more than one), including the negative (*there isn’t a*, *there aren’t any*) and the question (*Is there a …? Are there any …?*). Students should describe their own home aloud in at least four sentences.',
  tips: [
    'Spanish, Italian and Portuguese speakers often say *There is two chairs* because their language uses one form (hay, c’è/ci sono is an exception). Always check the noun after *there*: one thing, *is*; more than one, *are*.',
    'Arabic and Chinese speakers may leave out *there*: *Is a sofa in the room.* Model the full start every time: **There is** a sofa.',
    'Do not explain *some* and *any* in depth today. Give the patterns as chunks: *There are some books. There aren’t any books. Are there any books?*',
    'Keep the furniture list short (about twelve words). It is more useful to say five sentences about a real room than to learn thirty words.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Show your own room (or a photo of a room) on camera. Say three sentences: *There is a desk. There are two lamps. There isn’t a TV.* Ask students what they remember.' },
    { min: 10, title: 'Rooms and furniture', md: 'Board page 1. Students match the furniture to the rooms. Say each word and have the class repeat it, especially *wardrobe*, *cupboard* (silent *p*) and *armchair*.' },
    { min: 10, title: 'There is, there are', md: 'Board page 2. Elicit the rule from the examples: one thing or more than one. Students complete the gaps on the board one by one.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Questions and short answers', md: 'Board page 3. Practise *Is there a …? – Yes, there is. / No, there isn’t.* in a chain round the class, each student asking about the next student’s home.' },
    { min: 5, title: 'Exam corner', md: 'Board page 4: the A2 Key style task. Students read the notice and choose the right sentence.' },
    { min: 5, title: 'Close', md: 'Each student says one thing that is in their kitchen and one thing that isn’t. Set the homework.' },
  ],
  board: [
    { title: 'Rooms and furniture', blocks: [
      { t: 'table', caption: 'Where is it usually?', explain: ['head'], head: ['Room', 'You find'], rows: [
        ['the kitchen', 'a fridge, a cooker, a cupboard'],
        ['the living room', 'a sofa, an armchair, a TV'],
        ['the bedroom', 'a bed, a wardrobe, a lamp'],
        ['the bathroom', 'a shower, a bath, a mirror'],
      ] },
      { t: 'ex', kind: 'sort', h: 'Which room is it usually in?', groups: ['kitchen', 'bedroom', 'bathroom'], items: [
        { s: 'fridge', g: 0, why: 'You keep food cold in a fridge, in the kitchen.' },
        { s: 'wardrobe', g: 1, why: 'Your clothes are in a wardrobe, in the bedroom.' },
        { s: 'shower', g: 2, why: 'You wash in the shower, in the bathroom.' },
        { s: 'cooker', g: 0, why: 'You cook on a cooker, in the kitchen.' },
        { s: 'bed', g: 1, why: 'You sleep in the bedroom.' },
        { s: 'mirror', g: 2, why: 'A mirror is usually in the bathroom.' },
      ] },
    ] },
    { title: 'There is, there are', blocks: [
      { t: 'examples', items: [
        { s: '**There is** a sofa in the living room.', n: 'One thing: *there is* (short form *there’s*).' },
        { s: '**There are** two bedrooms.', n: 'More than one: *there are*.' },
        { s: '**There isn’t** a garden.', n: 'Negative, one thing.' },
        { s: '**There aren’t any** chairs in the kitchen.', n: 'Negative, more than one: *any*.' },
      ] },
      { t: 'ex', kind: 'gap', h: 'Write is or are.', items: [
        { q: 'There ___ a big window in my bedroom.', a: ['is'], why: 'One window: *there is*.' },
        { q: 'There ___ three chairs in the kitchen.', a: ['are'], why: 'Three chairs, more than one: *there are*.' },
        { q: 'There ___ a lamp and a desk next to the bed.', a: ['is'], why: 'The first thing is one lamp: *there is*.' },
        { q: 'There ___ some books on the shelf.', a: ['are'], why: '*some books*, more than one: *there are*.' },
      ] },
    ] },
    { title: 'Is there a …?', blocks: [
      { t: 'table', caption: 'Questions and short answers', explain: ['head'], head: ['Question', 'Yes', 'No'], rows: [
        ['Is there a garden?', 'Yes, there is.', 'No, there isn’t.'],
        ['Are there any shops?', 'Yes, there are.', 'No, there aren’t.'],
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'There [is] two bathrooms in the flat.', a: ['are'], why: 'Two bathrooms: *there are*.' },
        { s: '[Is] a TV in your bedroom?', a: ['Is there'], why: 'A question needs *there*: *Is there a TV …?*' },
        { s: 'There aren’t [some] plants in the room.', a: ['any'], why: 'In a negative sentence, use *any*.' },
      ] },
    ] },
    { title: 'Exam corner: notices', blocks: [
      { t: 'reading', title: 'Notice', md: 'FLAT TO RENT. One bedroom, a small kitchen and a big living room. There is no garden, but there is a balcony. Near the bus station.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: what does the notice say?', items: [
        { q: '', o: ['The flat has got a balcony.', 'The flat has got two bedrooms.', 'The flat has got a garden.'], why: '*There is a balcony*; there is only one bedroom and no garden.' },
        { q: '', o: ['The living room is bigger than the kitchen.', 'The kitchen is big.', 'The flat is far from the buses.'], why: 'The kitchen is small and the living room is big; it is near the bus station.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In the exam you read a short notice and choose the sentence that means the same. Look for small words like **no**, **only** and **near**: they often decide the answer.' },
    ] },
  ],
  activities: {
    one: { title: 'Draw my flat', md: 'The student describes their home in sentences with *there is* and *there are* while you draw a simple plan on the board. Then you describe your own (or an invented) flat and the student draws it. Compare the drawings and correct the mistakes together.' },
    small: { title: 'Find five differences', md: 'Put two pictures of a room on the board (or describe two rooms in the chat). In pairs, students find five differences: *In picture A there is a lamp, in picture B there isn’t.* The first pair to find all five reads them aloud.' },
    group: { title: 'The perfect flat', md: 'In breakout rooms of three or four, students design their perfect flat for the group and write six sentences in the chat (*There are three bathrooms. There isn’t a kitchen, we eat in restaurants!*). Back together, each room reads its flat aloud and the class votes for the best one.' },
  },
  homework: { book: 'u5:p1', md: 'Finish book lesson 1 of unit 5 (There is a sofa), including the speaking task. Then write five sentences about your home: three with *there is* or *there are*, and two negative sentences.' },
};
