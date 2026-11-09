// English C1, class 41 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u9:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c41',
  focus: 'By the end every student uses the idioms and collocations of change and decisions in their exact form (*take the plunge*, *sit on the fence*, *have second thoughts*, *a leap of faith*, *the point of no return*, *burn your bridges*) and the plain collocations around them (*reach a decision*, *bring about change*, *stand by a choice*), and talks naturally about a real or imagined turning point.',
  tips: [
    'The fixed details matter: you *take* the plunge, you are *at* a crossroads, *bridges* is always plural, you *have* second thoughts. Correct the small word every time.',
    'Examiners reward natural collocations (*a snap decision*, *bring about change*, *a gradual shift*) as much as idioms. Push for both.',
    'Phrases such as *sit on the fence*, *have second thoughts* and *weigh up the pros and cons* are especially useful in Speaking Part 3, when students negotiate a decision.',
    'Watch *suffer a change* and *make the plunge*: the natural verbs are *undergo* a change and *take* the plunge.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is the biggest decision you have made in the last five years? How long did it take?* Each student answers in two sentences.' },
    { min: 12, title: 'Phrases of decision', md: 'Show board page 1. Students match the phrases, then each one uses two of them about their warm-up decision.' },
    { min: 10, title: 'Collocations', md: 'Show board page 2. Students choose every word that goes with the key word, then compare and explain the wrong ones.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 1. Students choose alone, then say which word around the gap decided the answer.' },
    { min: 5, title: 'Close', md: 'Each student finishes the sentence *I was at a crossroads when…* Set the homework.' },
  ],
  board: [
    { title: 'Phrases of decision', blocks: [
      { t: 'ex', kind: 'match', h: 'Match each phrase with its meaning.', pairs: [
        ['take the plunge', 'finally do something risky after hesitating'],
        ['sit on the fence', 'avoid choosing a side'],
        ['have second thoughts', 'start to doubt a decision'],
        ['a leap of faith', 'acting without being sure it will work'],
        ['the point of no return', 'the moment after which you cannot go back'],
        ['a snap decision', 'a decision made instantly'],
      ] },
    ] },
    { title: 'Collocations', blocks: [
      { t: 'ex', kind: 'colloc', h: 'Which words go with the key word? Choose all that fit.', items: [
        { key: 'bring about', o: ['change', 'reform', 'a crossroads', 'the plunge'], a: [0, 1], why: 'You *bring about* change or reform; you are *at* a crossroads and *take* the plunge.' },
        { key: 'stand by', o: ['your decision', 'your choice', 'a watershed', 'a leap'], a: [0, 1], why: 'You *stand by* a decision or choice when you refuse to change it.' },
        { key: 'decision', o: ['agonising', 'informed', 'rash', 'tall'], a: [0, 1, 2], why: 'A decision can be *agonising*, *informed* or *rash*; *tall* does not go with it.' },
        { key: 'have', o: ['second thoughts', 'a change of heart', 'the plunge', 'a crossroads'], a: [0, 1], why: 'You *have* second thoughts and a change of heart.' },
        { key: 'gradual', o: ['shift', 'change', 'plunge', 'bridges'], a: [0, 1], why: 'A *gradual shift* or *change* happens slowly.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 1', blocks: [
      { t: 'text', md: 'Tom spent ten years at a bank before he retrained as a chef. Read the sentences about his decision.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 1): choose the word that best fits each gap.', items: [
        { q: 'For months Tom ___ up the pros and cons of leaving the bank.', o: ['weighed', 'measured', 'balanced', 'counted'], why: 'The phrasal verb is *weigh up*.' },
        { q: 'In the end he took the ___ and enrolled at a cookery school.', o: ['plunge', 'dive', 'jump', 'fall'], why: 'The idiom is *take the plunge*.' },
        { q: 'His parents begged him to have second ___.', o: ['thoughts', 'minds', 'ideas', 'opinions'], why: 'The fixed phrase is *have second thoughts*.' },
        { q: 'With no savings, leaving was a ___ of faith.', o: ['leap', 'jump', 'step', 'bound'], why: 'The fixed phrase is *a leap of faith*.' },
        { q: 'He was careful not to burn his ___, and his old manager is now a regular customer.', o: ['bridges', 'boats', 'ships', 'roads'], why: '*Burn your bridges*, always plural.' },
        { q: 'Looking back, he says the decision ___ about the biggest change of his life.', o: ['brought', 'took', 'came', 'set'], why: '*Bring about* a change: cause it to happen.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 1 the options are often all real words with a similar meaning. The answer depends on the phrase around the gap: a particle after it (*weigh up*), a fixed noun (*the plunge*, *faith*), a plural (*bridges*). Ask which word the phrase demands.' },
    ] },
  ],
  activities: {
    one: { title: 'Crossroads interview', md: 'Interview the student about a big decision, real or imagined: how long they weighed it up, whether they had second thoughts, when they reached the point of no return, and whether they would stand by it now. The student must use six phrases from the board. Note and correct the fixed words at the end.' },
    small: { title: 'Advice panel', md: 'One student describes a dilemma in the chat (a job offer abroad, going back to study). The others advise as in Speaking Part 3, using *sit on the fence*, *take the plunge*, *burn your bridges* and *a leap of faith*. The student with the dilemma decides and explains why. Rotate.' },
    group: { title: 'Decision rooms', md: 'Breakout rooms of three decide whether an imaginary character should accept a job on the other side of the world (post the details in the chat). Rooms have five minutes. Back together, each room reports its decision with at least three collocations of decision and change.' },
  },
  homework: { book: 'u9:p3', md: 'Finish lesson 3 of unit 9 if needed, then do lesson 4 (People who changed direction). Write about 120 words about a decision that changed your life or the life of someone you know, using at least five phrases from the class in their exact form.' },
};
