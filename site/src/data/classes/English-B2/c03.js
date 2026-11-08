// English B2, class 3 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u1:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c03',
  focus: 'By the end every student describes personality precisely with a wider range of adjectives, forms opposites with un-, in-, im-, ir-, il- and dis-, and softens criticism (*a bit impatient*, *not very reliable*). The speaking goal: describe a person they admire and a person they find difficult, fairly and politely.',
  tips: [
    'The prefix often depends on the first letter: *im-* before p and m (impatient, immature), *ir-* before r (irresponsible), *il-* before l (illogical). Show the pattern, but say it is a tendency, not a rule.',
    'False friends are common: *sensible* (reasonable) is not *sensitive* (easily hurt); *sympathetic* is not *nice*.',
    'Direct criticism can sound rude in English. Teach softeners: *a bit*, *not very*, *can be*, *tends to be*.',
    'This lesson feeds B2 First Use of English Part 3 (word formation). Mention it when students build opposites.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask each student for three adjectives that describe them, and one that a family member would use about them.' },
    { min: 12, title: 'Opposites with prefixes', md: 'Show board page 1. Students sort the adjectives by prefix, then add one more of their own to each group.' },
    { min: 10, title: 'Saying it politely', md: 'Show board page 2. Students choose the more tactful sentence, then soften two blunt sentences of their own.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: B2 First Use of English Part 3. Students form the words alone, then compare and check spelling.' },
    { min: 5, title: 'Close', md: 'Each student describes the ideal colleague in two sentences. Set the homework.' },
  ],
  board: [
    { title: 'Opposites with prefixes', blocks: [
      { t: 'ex', kind: 'sort', h: 'Which prefix makes the opposite?', groups: ['un-', 'im-', 'ir-', 'dis-'], items: [
        { s: 'reliable', g: 0, why: '*unreliable*' },
        { s: 'patient', g: 1, why: '*impatient*: im- before p.' },
        { s: 'responsible', g: 2, why: '*irresponsible*: ir- before r.' },
        { s: 'honest', g: 3, why: '*dishonest*' },
        { s: 'mature', g: 1, why: '*immature*: im- before m.' },
        { s: 'loyal', g: 3, why: '*disloyal*' },
      ] },
    ] },
    { title: 'Saying it politely', blocks: [
      { t: 'ex', kind: 'choice', h: 'Which sentence is more tactful?', items: [
        { q: '', o: ['He can be a bit disorganised at times.', 'He is disorganised.', 'He is a disorganised person, always.'], why: '*can be*, *a bit* and *at times* soften the criticism.' },
        { q: '', o: ['She isn’t always very patient with new staff.', 'She is impatient with new staff.', 'She is very impatient person.'], why: '*not always very* is softer than a direct negative adjective.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Learn the opposite and the soft version together: *rude* and *not very polite*, *lazy* and *not the most hard-working*.' },
    ] },
    { title: 'Exam corner: Use of English Part 3', blocks: [
      { t: 'ex', kind: 'wordform', h: 'In the format of the B2 First exam (Reading and Use of English, Part 3): use the word in capitals to form a word that fits the gap.', items: [
        { q: 'It was very ___ of him to leave without saying goodbye.', base: 'polite', a: ['impolite'], why: 'A negative meaning is needed: *impolite*.' },
        { q: 'Her greatest strength is her ___ : she never gives up.', base: 'determined', a: ['determination'], why: 'After *her greatest strength is her*, a noun.' },
        { q: 'He was fired for being completely ___ with company money.', base: 'responsible', a: ['irresponsible'], why: 'Negative, and *ir-* before r.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 3, read the whole sentence first: is the missing word a noun, an adjective, a verb or an adverb? Is the meaning positive or negative?' },
    ] },
  ],
  activities: {
    one: { title: 'Two people', md: 'The student describes a person they admire and a person they find difficult. Push for precise adjectives and one example of behaviour for each. Then ask them to describe the difficult person again, more tactfully.' },
    small: { title: 'Guess the character', md: 'Each student describes a famous person or film character with four adjectives and one example, without the name. The others guess. Score extra for a correct prefix adjective.' },
    group: { title: 'The perfect flatmate', md: 'Breakout rooms of three agree on the five most important qualities in a flatmate and the three worst habits, using the lesson’s adjectives. Each room presents its list; the class votes on the best one.' },
  },
  homework: { book: 'u1:p2', md: 'Finish lesson 2 of unit 1, then do lesson 3 (We get on, we fell out). Write about 80 words describing a friend or colleague, with at least four adjectives from the lesson.' },
};
