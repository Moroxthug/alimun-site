// English A1, class 38 (docs/LESSONS_PLAN.md). Builds on book lesson u7:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c38',
  focus: 'By the end of the class every student can use the present continuous (*am / is / are* + verb *-ing*) to say what is happening now, make negatives and questions with it, and choose between *I wear* (usually) and *I’m wearing* (now). Students should describe people they can see, live on camera or in a picture.',
  tips: [
    'The most common mistake is leaving out *be*: *She wearing a hat.* Point at the gap every time and ask *What’s missing?*',
    'Spelling of *-ing*: *sit – sitting*, *run – running*, *write – writing*. Write the three rules on the board, but do not spend long on them.',
    'Speakers of German, French and many other languages use the simple present for now (*I work now*). Contrast **I work in a bank** (always) with **I’m working at home today** (now).',
    'Use what is really happening: students on camera, the weather outside, what you are doing. Real situations make the tense clear.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Do a few actions on camera (drink, write, smile). Ask *What am I doing?* Write the answers on the board as full sentences: *You’re drinking coffee.*' },
    { min: 10, title: 'The form', md: 'Show board page 1. Build the table with the class: positive, negative, question. Students complete the gaps.' },
    { min: 10, title: 'Now or usually?', md: 'Show board page 2. Discuss the two pairs of examples, then students choose the right form in the exercise.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Fix it', md: 'Show board page 3. Students find and fix the mistakes, then order the words into questions.' },
    { min: 5, title: 'Exam corner', md: 'Show board page 4: describe the scene, choose the right sentence.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they are wearing and one thing they are doing now. Set the homework.' },
  ],
  board: [
    { title: 'What are you doing?', blocks: [
      { t: 'table', caption: 'Present continuous', explain: ['head'], head: ['', 'Positive', 'Negative', 'Question'], rows: [
        ['I', 'I’m reading.', 'I’m not reading.', 'Am I reading?'],
        ['he / she / it', 'He’s reading.', 'He isn’t reading.', 'Is he reading?'],
        ['you / we / they', 'We’re reading.', 'We aren’t reading.', 'Are we reading?'],
      ] },
      { t: 'ex', kind: 'gap', h: 'Write the verb in the present continuous.', items: [
        { q: 'Look! It ___ (snow).', a: ['’s snowing', 'is snowing'], why: '*It* + *is* + *snowing*.' },
        { q: 'Sorry, I can’t talk. I ___ (drive).', a: ['’m driving', 'am driving'], why: '*I am* + *driving*: *drive* loses the *e*.' },
        { q: 'The children ___ (sit) in the garden.', a: ['are sitting', '’re sitting'], why: '*They are* + *sitting*: double the *t*.' },
      ] },
    ] },
    { title: 'Now or usually?', blocks: [
      { t: 'examples', items: [
        { s: 'I **wear** a suit to work. Today I**’m wearing** jeans.', n: 'Usually: present simple. Now: present continuous.' },
        { s: 'It **rains** a lot in April. It**’s raining** now.', n: 'In general, then at this moment.' },
      ] },
      { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
        { q: 'Listen! Somebody ___ the piano.', o: ['is playing', 'plays', 'play'], why: '*Listen!* shows it is happening now.' },
        { q: 'My brother ___ football every Saturday.', o: ['plays', 'is playing', 'playing'], why: '*Every Saturday* is a habit: present simple.' },
        { q: 'Where’s Tom? – He ___ a shower.', o: ['’s having', 'has', 'have'], why: 'He is doing it now.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'She [wearing] a blue dress today.', a: ['’s wearing', 'is wearing'], why: 'Do not forget *be*.' },
        { s: 'I am [siting] next to the window.', a: ['sitting'], why: '*sit*: double the *t*.' },
        { s: 'I [’m going] to the gym every day.', a: ['go'], why: '*Every day* is a habit: present simple.' },
      ] },
      { t: 'ex', kind: 'order', h: 'Put the words in order to make questions.', items: [
        { a: 'What are you doing?', why: 'Question word, *be*, subject, verb *-ing*.' },
        { a: 'Is it raining outside?', why: 'A yes or no question starts with *be*.' },
      ] },
    ] },
    { title: 'Exam corner: at the park', blocks: [
      { t: 'reading', title: 'In the park', md: 'It’s a sunny afternoon. A man in a red T-shirt is running. Two women are sitting on a bench and talking. A little girl is eating an ice cream, and her dog is sleeping under a tree.' },
      { t: 'ex', kind: 'tf', h: 'In the format of the A2 Key exam: read the text. Are the sentences true or false?', items: [
        { q: 'The man is wearing a red T-shirt.', a: 't', why: '*A man in a red T-shirt*.' },
        { q: 'The two women are running.', a: 'f', why: 'They are sitting on a bench and talking.' },
        { q: 'The dog is eating an ice cream.', a: 'f', why: 'The girl is eating an ice cream; the dog is sleeping.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Picture detective', md: 'Share a busy photo (a street, a station, a café). The student describes it for two minutes: who is there, what they are wearing, what they are doing. Then you make three sentences, one of them false; the student finds the false one and corrects it.' },
    small: { title: 'Charades', md: 'Students take turns to mime an action on camera (cooking, swimming, reading, driving). The others ask questions: *Are you cooking? Are you eating?* The mimer answers only *Yes, I am* or *No, I’m not.* The first to guess mimes next.' },
    group: { title: 'Spot the difference', md: 'Breakout rooms of three. Send two similar pictures in the chat, one to A and one to B (or describe them in two lists). They describe their picture to each other without showing it and find five differences: *In my picture the man is wearing a hat.* C keeps score and reports back.' },
  },
  homework: { book: 'u7:p3', md: 'Finish book lesson 3 of unit 7 (I’m wearing a hat). Then write five sentences about your family or friends right now: where they are, what they are doing and what they are wearing.' },
};
