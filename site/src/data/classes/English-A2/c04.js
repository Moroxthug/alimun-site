// English A2, class 4 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u1:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c04',
  focus: 'By the end every student can describe a person’s appearance and character, and understands the difference between *What does she look like?* (appearance), *What is she like?* (character) and *What does she like?* (things she enjoys). The speaking goal: describe a friend or family member so that others can picture them.',
  tips: [
    'The three questions with *like* confuse almost everyone. Write them on the board in three colours and come back to them throughout the class.',
    'Adjective order is a frequent mistake: *hair long* (Spanish, French, Arabic speakers). Remind the class: adjective before the noun, *long dark hair*.',
    '*She has 30 years* and *She is having long hair* still appear. Correct gently: age with *be*, appearance with *has got* or *has*.',
    'Encourage positive and kind descriptions when students talk about classmates or the teacher.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Describe a famous person in three sentences. Students guess who it is.' },
    { min: 10, title: 'Three questions with like', md: 'Show board page 1. Students match the questions and answers, then ask a partner about someone in their family.' },
    { min: 10, title: 'Words for people', md: 'Show board page 2. Students sort the words into appearance and character and add two of their own.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: best answers in the format of A2 Key Speaking Part 1.' },
    { min: 5, title: 'Close', md: 'Each student describes the character of a good friend in one sentence. Set the homework.' },
  ],
  board: [
    { title: 'Three questions with like', blocks: [
      { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
        ['What does your brother look like?', 'He’s tall and he’s got a beard.'],
        ['What is your brother like?', 'He’s funny and very kind.'],
        ['What does your brother like?', 'He likes football and old films.'],
        ['How old is your brother?', 'He’s thirty-two.'],
      ] },
      { t: 'tip', art: 'owl', md: 'In **What is she like?**, *like* is not the verb “to like”: it asks about her character. In **What does she like?**, it is the verb: it asks about her hobbies.' },
    ] },
    { title: 'Words for people', blocks: [
      { t: 'ex', kind: 'sort', h: 'Appearance or character?', groups: ['appearance', 'character'], explain: ['groups'], items: [
        { s: 'curly', g: 0, why: 'Hair can be curly: appearance.' },
        { s: 'shy', g: 1, why: 'Shy describes how someone is: character.' },
        { s: 'slim', g: 0, why: 'Slim describes the body: appearance.' },
        { s: 'friendly', g: 1, why: 'Friendly is character.' },
        { s: 'middle-aged', g: 0, why: 'Age is appearance.' },
        { s: 'lazy', g: 1, why: 'Lazy is character.' },
      ] },
      { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
        { a: 'She’s got long dark hair.', why: 'Adjectives before the noun: *long dark hair*.' },
        { a: 'What is your new teacher like?', why: 'Character: *What is … like?*' },
      ] },
    ] },
    { title: 'Exam corner: Speaking Part 1', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam (Speaking, Part 1): which is the best answer?', items: [
        { q: '“Tell me about your best friend.”', o: ['Her name’s Lina. She’s really funny and she’s got short curly hair.', 'Yes, I have.', 'She likes.'], why: 'A full, extended answer with details scores best.' },
        { q: '“What do you like doing at the weekend?”', o: ['I like going to the park with my kids, and I often cook for friends.', 'Weekend.', 'I am like the weekend.'], why: 'Answer the question, then add one more detail.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Speaking Part 1, give **more than one sentence**: answer, then add a reason or an example. If you do not understand, ask: *Sorry, can you repeat that, please?*' },
    ] },
  ],
  activities: {
    one: { title: 'Describe and draw', md: 'The student describes a person from a photo on their phone (or someone they know) while you draw a quick sketch from the description. Then compare. Swap roles. Focus on appearance first, then add two character adjectives with a reason.' },
    small: { title: 'Who is it?', md: 'Each student writes in the chat a description of a famous person (appearance and character, no name). The others ask yes or no questions (*Is she tall? Is he friendly?*) until someone guesses.' },
    group: { title: 'The perfect flatmate', md: 'Breakout rooms of four: describe the perfect flatmate (character, what they like, what they look like does not matter). Each room writes four sentences in the chat. Back together, the class votes for the best flatmate.' },
  },
  homework: { book: 'u1:p4', md: 'Do lesson 4 of unit 1 (A week in my life). Write a description of a family member: what they look like, what they are like and what they like doing (60 to 80 words).' },
};
