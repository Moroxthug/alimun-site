// English B1, class 60 (docs/LESSONS_PLAN.md). Review of units 11 and 12. Draft for the owner's review.
export const LESSON = {
  id: 'c60',
  focus: 'By the end of the class every student has used the main language of units 11 and 12 in speaking: personality words and *-ed / -ing* adjectives, non-defining relative clauses with commas, relationship phrasal verbs, question tags, quantifiers, *make / do* and the money verbs. Typical mistakes from both units are corrected, and students know what to practise before the two unit tests.',
  tips: [
    'This is a review, not a new lesson: keep explanations to one sentence and spend most of the time on speaking and correction.',
    'Question tags are easy to understand and hard to produce fast. Drill them quickly in a chain around the class before the activities.',
    'Non-defining relative clauses are mostly a written point (commas). Ask students to write their sentences in the chat so you can check the commas.',
    'Listen for the top mistakes of both units: *that* in a non-defining clause, *a few money*, *borrow me*, *do a mistake*, *I get on my brother*.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Each student describes a friend or family member in two sentences, using one personality adjective and one relative clause.' },
    { min: 12, title: 'People and relationships', md: 'Show board page 1. Students solve the exercises on the board together. Drill question tags quickly in a chain.' },
    { min: 10, title: 'Money and shopping', md: 'Show board page 2. Students solve the exercises together and explain the rules.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: a Reading Part 5 multiple-choice cloze mixing both units. Students work alone, then check together.' },
    { min: 5, title: 'Close', md: 'Each student names one point from units 11 and 12 they want to practise more. Set the homework.' },
  ],
  board: [
    { title: 'People and relationships', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
        { q: 'The film was so ___ that I fell asleep.', o: ['boring', 'bored', 'bore'], why: 'The film causes the feeling: *boring*.' },
        { q: 'My brother, ___ lives in Canada, is visiting next week.', o: ['who', 'that', 'which'], why: 'Non-defining clause about a person: *who*, never *that*.' },
        { q: 'I get on really well ___ my new colleagues.', o: ['with', 'to', 'at'], why: '*Get on with* someone.' },
        { q: 'You’ve met Sara before, ___ you?', o: ['haven’t', 'don’t', 'didn’t'], why: 'Present perfect: *haven’t you?*' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'My grandmother, [that] is ninety, still swims every day.', a: ['who'], why: 'Never *that* in a non-defining clause.' },
        { s: 'They argued last week, but they [made it up] yesterday.', a: ['made up'], why: '*Make up* with no object when two people become friends again.' },
      ] },
    ] },
    { title: 'Money and shopping', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
        { q: 'There were ___ people at the sale, so we got everything we wanted.', o: ['hardly any', 'a lot of', 'too many'], why: 'Almost no people: *hardly any*.' },
        { q: 'Could you ___ me twenty euros until Friday?', o: ['lend', 'borrow', 'owe'], why: 'You want the other person to give: *lend*.' },
        { q: 'I ___ a big mistake when I paid for that phone.', o: ['made', 'did', 'got'], why: 'Fixed phrase: *make a mistake*.' },
        { q: 'We only have ___ milk left. Can you buy some?', o: ['a little', 'a few', 'many'], why: '*Milk* is uncountable: *a little*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading Part 5', blocks: [
      { t: 'text', md: 'In the format of B1 Preliminary Reading Part 5: read the text and choose the best word for each gap.\n\n*My best friend Jo, (1) ___ I met at university, is very generous. When I was (2) ___ of money last year, she offered to (3) ___ me some. I was a bit (4) ___ at first, but she said friends help each other.*' },
      { t: 'ex', kind: 'choice', h: 'Choose the best word for each gap.', items: [
        { q: '(1)', o: ['whom', 'which', 'what'], why: 'A person in a non-defining clause, as the object: *whom* (or *who*).' },
        { q: '(2)', o: ['short', 'small', 'little'], why: 'Fixed phrase: *short of money*.' },
        { q: '(3)', o: ['lend', 'borrow', 'spend'], why: 'Jo gives the money: *lend*.' },
        { q: '(4)', o: ['embarrassed', 'embarrassing', 'embarrass'], why: 'The writer has the feeling: *embarrassed*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Reading Part 5, read the words **before and after** the gap. Fixed phrases (*short of*) and grammar patterns (*-ed* or *-ing*) often decide the answer.' },
    ] },
  ],
  activities: {
    one: { title: 'Two people, one problem', md: 'Describe two invented friends with relative clauses and personality adjectives. One owes the other money and they have fallen out. The student plays a mediator: asks questions with question tags to check facts, gives advice, and helps them make up. Finish by correcting two mistakes.' },
    small: { title: 'The class quiz', md: 'Each student writes three quiz questions in the chat using the language of units 11 and 12 (*Which word means…? Finish the tag…*). The group answers them in turns. Then each student describes a person they look up to, using one relative clause and two personality words.' },
    group: { title: 'Review stations', md: 'Breakout rooms of three, each with a task: describe a person with relative clauses; agree a shared budget for a party; check facts about each other with question tags. Rooms rotate every five minutes. Bring everyone back for a quick mistake round with sentences you heard.' },
  },
  homework: { book: 'u11 u12', md: 'Do the unit tests of units 11 and 12 in the book. Then go back to the lessons with your lowest scores and repeat their exercises.' },
};
