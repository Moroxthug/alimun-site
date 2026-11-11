// English B1, class 36 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u8:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c36',
  focus: 'By the end of the class every student can use the **second conditional** (*If I had more time, I would learn the piano*) to talk about situations that are not real or not likely, and can tell it apart from the first conditional (*If I have time, I will…*). Each student answers at least four *What would you do if…?* questions with a reason.',
  tips: [
    'The most common error is *would* in both parts: *If I would have money, I would…*. Teach the rule as two halves: **If + past, would + verb**, and point at the *if* half every time.',
    'Students are surprised that the past form talks about now or the future. Say it clearly: the past here means *not real*, not *in the past*.',
    '*If I were you* is the natural form for advice; *If I was* is common in speech. Accept both, but teach *were* for the exam.',
    'To show the difference with the first conditional, use one situation two ways: *If it rains tomorrow, I’ll stay home* (possible) and *If I lived in a hot country, I’d swim every day* (imagined).',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *If you had a free day tomorrow, what would you do?* Write two answers on the board and underline *had* and *would*.' },
    { min: 10, title: 'If + past, would + verb', md: 'Show board page 1. Go through the table, then students do the exercise.' },
    { min: 10, title: 'Real or imagined?', md: 'Show board page 2. Students decide first or second conditional and explain why.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: B1 Preliminary Speaking part 3, discussing choices together.' },
    { min: 5, title: 'Fix the mistakes', md: 'Show board page 4.' },
    { min: 5, title: 'Close', md: 'Each student finishes the sentence *If I could change one thing in my town, I would…*. Set the homework.' },
  ],
  board: [
    { title: 'The second conditional', blocks: [
      { t: 'table', caption: 'Imagined situations', explain: ['head', 'col0'], head: ['', 'If part', 'Result part'], rows: [
        ['Positive', 'If I had more money,', 'I would travel more.'],
        ['Negative', 'If I didn’t work on Saturdays,', 'I wouldn’t be so tired.'],
        ['Question', 'If you won the lottery,', 'what would you do?'],
        ['Advice', 'If I were you,', 'I’d talk to your boss.'],
      ] },
      { t: 'ex', kind: 'gap', h: 'Write the right form of the verb in brackets.', items: [
        { q: 'If I ___ (live) by the sea, I would swim every morning.', a: ['lived'], why: 'The *if* part: past simple.' },
        { q: 'If she had a car, she ___ (drive) to work.', a: ['would drive', '’d drive'], why: 'The result: *would* + verb.' },
        { q: 'What would you do if you ___ (lose) your phone?', a: ['lost'], why: 'Past simple after *if*, even about the future.' },
        { q: 'If I ___ (be) you, I would apply for that job.', a: ['were', 'was'], why: 'Advice: *If I were you* (also *was* in speech).' },
      ] },
    ] },
    { title: 'Real or imagined?', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: 'If it ___ tomorrow, we’ll cancel the picnic.', o: ['rains', 'rained', 'would rain'], why: 'Possible future: first conditional, present after *if*.' },
        { q: 'If I ___ how to cook, I’d invite you all to dinner, but I can’t.', o: ['knew', 'know', 'will know'], why: 'Not real now (*but I can’t*): second conditional.' },
        { q: 'If you study every day, you ___ the exam.', o: ['’ll pass', '’d pass', 'passed'], why: 'A real possibility: *will*.' },
        { q: 'If dogs could talk, what ___ they say?', o: ['would', 'will', 'do'], why: 'Impossible: second conditional with *would*.' },
      ] },
    ] },
    { title: 'Exam corner: Speaking part 3', blocks: [
      { t: 'text', md: 'In the format of B1 Preliminary Speaking part 3: the examiner describes a situation and shows ideas; the two candidates discuss them and choose together.\n\n*A friend has won some money and wants to spend it on something that will make him happier. Talk together about these ideas: a long holiday, a new car, guitar lessons, a bigger flat, giving it to charity. Which would be best?*' },
      { t: 'table', caption: 'Useful phrases', explain: ['head', 'col1'], head: ['Say', 'To'], rows: [
        ['If he chose a holiday, he would…', 'imagine a result'],
        ['That’s a good idea, but…', 'answer your partner'],
        ['What about…? / What do you think?', 'involve your partner'],
        ['So shall we choose…?', 'agree at the end'],
      ] },
      { t: 'tip', md: 'In Speaking part 3 you do not need to agree quickly. Talk about each idea with your partner, use **would** to imagine results, and choose only at the end.' },
    ] },
    { title: 'Fix the mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'If I [would have] a garden, I would grow tomatoes.', a: ['had'], why: 'No *would* in the *if* part: *If I had*.' },
        { s: 'If I won the lottery, I [will] buy a house.', a: ['would', '’d'], why: 'Second conditional result: *would*.' },
        { s: 'If I [am] you, I’d see a doctor.', a: ['were', 'was'], why: 'Advice: *If I were you*.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'What would you do?', md: 'Ask the student eight *What would you do if…?* questions, from everyday to impossible (*if you found a wallet in the street*, *if you could live in any century*). The student answers each with a reason and asks you one back. Finish by asking for advice on a real problem of yours; the student uses *If I were you…*.' },
    small: { title: 'Chain of consequences', md: 'Start a chain: *If I won a lot of money, I would buy a boat.* The next student continues from the result: *If I bought a boat, I would sail around Italy.* Keep the chain going for six or seven students, then start a new one. Correct only *would* in the *if* part.' },
    group: { title: 'Desert island', md: 'In breakout rooms of three, each room imagines they are going to live on an island for a year and can take five things. They discuss with *If we took…, we could…* and agree on a final list. Bring everyone back: each room presents its list with reasons.' },
  },
  homework: { book: 'u8:p2', md: 'Finish book lesson 2 of unit 8 (If I had more time…), including the speaking task. Then write 60 to 80 words: *If I could live anywhere in the world for a year, where would I go and what would I do?*' },
};
