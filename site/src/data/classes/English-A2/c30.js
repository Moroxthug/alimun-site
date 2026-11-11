// English A2, class 30 (docs/LESSONS_PLAN.md). Builds on book lesson u6:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c30',
  focus: 'By the end of the class every student can name the main parts of the body, say what is wrong (*I’ve got a headache. My back hurts.*) and ask *What’s the matter?* The focus is on the fixed patterns: *a* + problem (*a cold, a cough, a sore throat*), the *-ache* words, and *my* with your own body.',
  tips: [
    'Many languages say *the head hurts me* or *I have pain in the stomach*. In English it is *My head hurts* and *I’ve got a stomach ache*. Correct this every time.',
    'Pronunciation traps: *cough* (f sound), *stomach* (k sound), silent *b* in *thumb*, silent *k* in *knee*. Drill them chorally.',
    'Keep the body list to about fifteen words. Use the camera: students point to the part of the body as you say it.',
    'Be sensitive: students may not want to talk about real health problems. Offer imaginary characters for the activities.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Play a quick *Touch your …* game: say a part of the body; students touch it on camera. Then students lead.' },
    { min: 10, title: 'The body', md: 'Board page 1. Say each word together, then students match the parts and the sentences.' },
    { min: 10, title: 'What’s the matter?', md: 'Board page 2. Go through the common problems. Students complete the gaps with the right problem.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Fix it', md: 'Board page 3. Students fix the mistakes and say why.' },
    { min: 5, title: 'Exam corner', md: 'Board page 4: Reading Part 4.' },
    { min: 5, title: 'Close', md: 'Each student mimes a problem; the class asks *What’s the matter?* and guesses. Set the homework.' },
  ],
  board: [
    { title: 'The body', blocks: [
      { t: 'ex', kind: 'match', h: 'Match the part of the body and the sentence.', pairs: [
        ['teeth', 'Brush them twice a day.'],
        ['throat', 'It hurts when you swallow.'],
        ['knee', 'It is in the middle of your leg.'],
        ['shoulder', 'You carry a bag on it.'],
        ['thumb', 'It is the short, thick finger.'],
      ] },
    ] },
    { title: 'What’s the matter?', blocks: [
      { t: 'table', caption: 'Common problems', explain: ['head', 'col1'], head: ['Problem', 'What it means'], rows: [
        ['a headache', 'your head hurts'],
        ['a stomach ache', 'your stomach hurts'],
        ['a sore throat', 'your throat hurts when you swallow'],
        ['a cough', 'you can’t stop coughing'],
        ['a cold', 'you are sneezing and your nose is running'],
        ['a temperature', 'your body is very hot'],
      ] },
      { t: 'ex', kind: 'gap', h: 'Write the problem.', items: [
        { q: 'I ate too much cake. Now I’ve got a ___ ache.', a: ['stomach'], why: 'Your stomach hurts: *a stomach ache*.' },
        { q: 'My nose is running and I’m sneezing. I’ve got a ___.', a: ['cold'], why: 'Sneezing and a running nose: *a cold*.' },
        { q: 'It hurts when I swallow. I’ve got a sore ___.', a: ['throat'], why: '*a sore throat*.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I have [headache].', a: ['a headache'], why: 'Most problems need *a*.' },
        { s: '[The back hurts me].', a: ['My back hurts'], why: 'Use *my* for your own body.' },
        { s: 'My [teeths] hurt.', a: ['teeth'], why: '*tooth* → *teeth*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Two ways to say it: **I’ve got a** + problem (*I’ve got a cough*), or **my** + part of the body + **hurts** (*My arm hurts*). For more than one: *My feet hurt*.' },
    ] },
    { title: 'Exam corner: Reading Part 4', blocks: [
      { t: 'reading', title: 'An email', md: 'Dear Ms Hill, I’m sorry, but I can’t come to work today. I’ve got a bad (1) ___ and a temperature. My (2) ___ hurts too, so I can’t talk much. I (3) ___ going to see the doctor this afternoon. Paul' },
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the right word for each gap.', items: [
        { q: '(1) I’ve got a bad ___.', o: ['cold', 'sick', 'ill'], why: '*a cold* is a noun; *sick* and *ill* are adjectives.' },
        { q: '(2) My ___ hurts too, so I can’t talk much.', o: ['throat', 'knee', 'back'], why: 'You talk with your throat.' },
        { q: '(3) I ___ going to see the doctor.', o: ['am', 'have', 'do'], why: '*I am going to*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Reading Part 4 the three words are often about the same topic. Meaning is not enough: check the **grammar** around the gap (*a bad* + noun) and the rest of the sentence (*so I can’t talk*).' },
    ] },
  ],
  activities: {
    one: { title: 'At the pharmacy', md: 'You are a pharmacist; the student is a customer with a problem from board page 2. They describe it; you ask *What’s the matter? How long have you …? Does it hurt here?* Swap roles twice with different problems.' },
    small: { title: 'Doctor, doctor', md: 'Each student gets a problem card (in a private chat message). In pairs, one is the patient, one asks questions and guesses the problem. Swap, then change pairs. Finish by asking each student to describe one problem they guessed.' },
    group: { title: 'Mime and guess', md: 'In breakout rooms of three or four, students take turns to mime a problem; the others ask *What’s the matter? Have you got a …? Does your … hurt?* until someone guesses. The room writes its six problems in the chat as full sentences.' },
  },
  homework: { book: 'u6:p1', md: 'Finish book lesson 1 of unit 6 (What’s the matter?), including the speaking task. Then write a short email to your teacher saying you can’t come to class because you are ill: say what is wrong (two problems).' },
};
