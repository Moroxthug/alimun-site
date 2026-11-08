// English B2, class 4 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u1:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c04',
  focus: 'By the end every student uses common relationship phrasal verbs (get on with, fall out with, look up to, put up with, make up, drift apart) with the right word order. The speaking goal: tell the story of a relationship, a friendship or a family tie, using at least five phrasal verbs.',
  tips: [
    'Three-part phrasal verbs never separate: *I can’t put up with the noise*, not *put the noise up with*.',
    'With separable verbs, a pronoun goes in the middle: *She let me down*, not *She let down me*.',
    'Students often know the verbs passively but avoid them. Insist that they replace formal verbs: *tolerate* becomes *put up with*, *admire* becomes *look up to*.',
    'Keep a running list on the board of every phrasal verb students use correctly during the class.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Who do you get on with best in your family? Who did you look up to as a child?* Write the verbs as they come.' },
    { min: 12, title: 'Meanings', md: 'Show board page 1. Students match the verbs and meanings, then use two in a sentence about their own life.' },
    { min: 10, title: 'Word order', md: 'Show board page 2. Students put the words in order, paying attention to where the pronoun goes.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: B2 First Use of English Part 1. Students choose alone, then explain why the other options are wrong.' },
    { min: 5, title: 'Close', md: 'Each student describes one relationship in one sentence with a phrasal verb. Set the homework.' },
  ],
  board: [
    { title: 'Relationship phrasal verbs', blocks: [
      { t: 'ex', kind: 'match', h: 'Match the verbs and meanings.', pairs: [
        ['get on with someone', 'have a good relationship'],
        ['fall out with someone', 'argue and stop being friends'],
        ['look up to someone', 'admire and respect'],
        ['put up with something', 'accept something annoying'],
        ['drift apart', 'slowly become less close'],
        ['make up', 'become friends again after an argument'],
      ] },
    ] },
    { title: 'Where does the pronoun go?', blocks: [
      { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
        { a: 'She let me down at the last minute.', why: 'A separable verb: the pronoun goes in the middle.' },
        { a: 'I can’t put up with his jokes any more.', why: 'A three-part verb stays together.' },
        { a: 'We fell out over money.', why: '*fall out over* something: the reason for the argument.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'My brother always [looked up me to].', a: ['looked up to me'], why: 'Three-part verbs never separate.' },
        { s: 'They argued, but they [made it up] the next day.', a: ['made up'], why: '*make up* (become friends again) takes no object here.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 1', blocks: [
      { t: 'ex', kind: 'select', h: 'In the format of the B2 First exam (Reading and Use of English, Part 1): choose the word that best fits each gap.', items: [
        { q: 'After university, Tom and I slowly drifted ___ and lost touch.', o: ['apart', 'away', 'off'], why: '*drift apart*: slowly become less close.' },
        { q: 'I really look up ___ my grandmother; she was so brave.', o: ['to', 'at', 'for'], why: '*look up to*: admire.' },
        { q: 'I don’t know how you put up ___ such a long journey every day.', o: ['with', 'to', 'on'], why: '*put up with*: tolerate.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Part 1 often tests the small word in a phrasal verb or a collocation. Read the words after the gap: they often decide the answer.' },
    ] },
  ],
  activities: {
    one: { title: 'A relationship story', md: 'The student tells the story of a friendship from the first meeting to today. Prompt with *How did you get on at first? Did you ever fall out? What did you have to put up with?* Count the phrasal verbs together at the end.' },
    small: { title: 'Agony aunt', md: 'Each student writes a short problem in the chat (*My flatmate never cleans*). The others give advice with phrasal verbs (*You shouldn’t put up with it; talk it through*). The writer chooses the best advice.' },
    group: { title: 'Soap opera', md: 'Breakout rooms of three invent a short soap-opera plot about three characters, using at least six phrasal verbs from the lesson. Each room tells its plot in one minute; the class votes for the most dramatic one.' },
  },
  homework: { book: 'u1:p3', md: 'Finish lesson 3 of unit 1, then do lesson 4 (Friends for life). Write a short paragraph about how one of your friendships has changed, with five phrasal verbs.' },
};
