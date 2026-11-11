// English B1, class 31 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u7:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c31',
  focus: 'By the end of the class every student can say exactly which person, thing or place they mean with defining relative clauses: **who** for people, **which** or **that** for things, **where** for places and **whose** for possession. Each student describes three people and two places in their life with one relative clause each, without repeating the subject (*the man who he lives*).',
  tips: [
    'The most common error is a second subject: *The woman who she works with me*. Cover the relative word with your hand and ask *Who does the job?* until students see the extra pronoun.',
    'Many learners use *what* for things (*the book what I read*). Correct it to **which** or **that** every time.',
    'Learners whose language has one relative word for everything (Spanish *que*, French *que/qui*) mix *who* and *which*. Keep two lists on the board: people and things.',
    'Leaving out *that* is natural when it is the object (*the film I saw*). Teach it as an option, but do not let students drop it when it is the subject (*the man lives next door* is wrong).',
    '*whose* is new for many students: anchor it with one clear example about a neighbour (*the woman whose dog barks all night*).',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Who is someone in your street that you know well?* Students answer in one sentence; write two answers on the board.' },
    { min: 10, title: 'Who, which, that, where, whose', md: 'Show board page 1. Go through the table quickly, then students do the exercise and say one example of their own for each word.' },
    { min: 10, title: 'One sentence, not two', md: 'Show board page 2. Students join the sentences, then fix the mistakes.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: B1 Preliminary Reading part 1 messages. Students choose alone, then explain their choice.' },
    { min: 5, title: 'Quick definitions', md: 'Show board page 4. Students guess the words from the definitions, then write one definition for the class to guess.' },
    { min: 5, title: 'Close', md: 'Each student describes one neighbour with a relative clause. Set the homework.' },
  ],
  board: [
    { title: 'Who, which, that, where, whose', blocks: [
      { t: 'table', caption: 'Defining relative clauses', explain: ['head', 'col1'], head: ['Word', 'Use it for', 'Example'], rows: [
        ['who / that', 'people', 'The man who lives upstairs is a nurse.'],
        ['which / that', 'things and animals', 'The bus which goes to the centre is the 12.'],
        ['where', 'places', 'This is the café where we met.'],
        ['whose', 'possession', 'She’s the neighbour whose dog barks all night.'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
        { q: 'The woman ___ owns the bakery is from Lisbon.', o: ['who', 'which', 'where'], why: 'A person: *who* (or *that*).' },
        { q: 'I can’t find the key ___ opens the back door.', o: ['that', 'who', 'whose'], why: 'A thing: *that* or *which*.' },
        { q: 'That’s the street ___ I grew up.', o: ['where', 'which', 'who'], why: 'A place, followed by a full sentence: *where*.' },
        { q: 'He’s the man ___ car was stolen last week.', o: ['whose', 'who', 'that'], why: 'Possession: *whose car*.' },
      ] },
    ] },
    { title: 'One sentence, not two', blocks: [
      { t: 'ex', kind: 'transform', h: 'Join the two sentences into one. Start with the words given.', items: [
        { q: 'I have a neighbour. She teaches yoga.', cue: 'I have a neighbour', a: ['I have a neighbour who teaches yoga.', 'I have a neighbour that teaches yoga.'], why: '*She* becomes *who*: do not keep both.' },
        { q: 'This is the restaurant. We had our first date there.', cue: 'This is the restaurant', a: ['This is the restaurant where we had our first date.'], why: '*there* becomes *where*.' },
        { q: 'I met a woman. Her son is in my class.', cue: 'I met a woman', a: ['I met a woman whose son is in my class.'], why: '*Her son* becomes *whose son*.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'The man [who he lives] next door is very friendly.', a: ['who lives', 'that lives'], why: 'Remove the extra subject: *who lives*, not *who he lives*.' },
        { s: 'Is this the book [what] you recommended?', a: ['that', 'which'], why: 'For things: *that* or *which*, never *what*.' },
        { s: 'That’s the shop [which] I buy my bread.', a: ['where'], why: 'A place followed by a full sentence: *where*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading part 1', blocks: [
      { t: 'text', md: 'In the format of B1 Preliminary Reading part 1: short messages and notices. Choose what each one says.\n\n**Message 1:** *Hi Sam, the flat I told you about is still free. The owner, who lives downstairs, can show it to you on Saturday. Lena*\n\n**Notice 2:** *Residents whose cars are parked in the yard must move them before Monday, when the yard will be cleaned.*' },
      { t: 'ex', kind: 'choice', h: 'What does each one say?', items: [
        { q: 'Message 1', o: ['The owner can show Sam the flat on Saturday.', 'Lena lives downstairs from the flat.', 'The flat has already been rented.'], why: '*the owner, who lives downstairs, can show it to you on Saturday*.' },
        { q: 'Notice 2', o: ['Some residents must move their cars before Monday.', 'All residents must park in the yard.', 'The yard was cleaned on Monday.'], why: '*Residents whose cars are parked in the yard must move them before Monday*.' },
      ] },
      { t: 'tip', md: 'In Reading part 1 the wrong options often use words from the text in the wrong way. Check **who** does what: the owner lives downstairs, not Lena.' },
    ] },
    { title: 'What is it?', blocks: [
      { t: 'ex', kind: 'match', h: 'Match each definition to a word.', pairs: [
        ['a person who lives next to you', 'a neighbour'],
        ['a place where you can borrow books', 'a library'],
        ['a person whose job is to look after a building', 'a caretaker'],
        ['a thing that you use to open a door', 'a key'],
        ['a place where people wait for a train', 'a platform'],
      ] },
    ] },
  ],
  activities: {
    one: { title: 'My people, my places', md: 'The student talks about five people and two places in their life, each with a relative clause: *my friend who…*, *the café where…*, *the neighbour whose…*. Ask a follow-up question after each. Then play a guessing game: the student defines five everyday objects with *It’s a thing which…* and you guess. Correct any extra subject at the end.' },
    small: { title: 'Who am I talking about?', md: 'Each student writes privately the names of three people in the class or famous people. In turns, they describe one with a relative clause (*She’s the person who always arrives first*); the others guess. Then they describe a place in the town (*It’s the place where…*).' },
    group: { title: 'Definitions race', md: 'In breakout rooms of three, each room gets a list of eight words in the chat (*landlord, receptionist, laundry, balcony…*). They write a definition for each with *who, which, that, where* or *whose*. Bring everyone back: rooms read definitions and the others guess the word. A point for each correct guess and each correct relative clause.' },
  },
  homework: { book: 'u7:p1', md: 'Finish book lesson 1 of unit 7 (The people who live next door), including the speaking task. Then write 60 to 80 words about your neighbours or your street, with at least four relative clauses (*who, which, that, where, whose*).' },
};
