// English C2, class 13 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u3:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c13',
  focus: 'By the end every student uses less common idioms and phrasal verbs with their exact grammar, register and attitude (*bite the bullet*, *grasp the nettle*, *hold sway*, *tide someone over*, *wriggle out of*, *fob someone off*, *pass the buck*, *put paid to*, *fall foul of*), adds a few more to their range, and chooses between near-identical options in the format of C2 Proficiency Reading and Use of English Part 1.',
  tips: [
    'Idioms are fixed. A student who says *bite the bullets* or *seize the nettle* will be understood but will sound foreign. Correct the form every time, gently and at once.',
    'Teach the attitude with the meaning: *grasp the nettle* praises courage, *pass the buck* criticises, *wriggle out of* suggests the person is slippery. Ask students who would say each one, about whom.',
    'Phrasal verbs keep their grammar: the object goes between *tide* and *over*, and usually between *fob* and *off*. Practise the pronoun versions (*tide us over*, *fob her off*), which cannot go at the end.',
    'Warn against idiom overload. One well-placed idiom in a paragraph is natural; four in a row sound like a textbook. In formal writing, prefer the plain verb.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is something unpleasant you have been putting off?* Each student answers and says what it would take to *bite the bullet*.' },
    { min: 10, title: 'Get the grammar right', md: 'Show board page 1. Students choose the right form, then say each completed sentence aloud.' },
    { min: 10, title: 'More idioms', md: 'Show board page 2. Students match the new idioms with their meanings, then say one true sentence about their own life or work with two of them.' },
    { min: 12, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 18, title: 'Exam corner', md: 'Show board page 3: C2 Proficiency Reading and Use of English Part 1. Seven minutes, alone. Check together; for every gap, students explain why the other three options do not make the fixed expression.' },
    { min: 5, title: 'Close', md: 'Each student describes a recent work or family situation in one sentence with an idiom from today. Set the homework.' },
  ],
  board: [
    { title: 'Get the grammar right', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the form that completes the expression correctly.', items: [
        { q: 'A small loan from my parents should ___ until the end of the month.', o: ['tide me over', 'tide over me', 'tide me through over'], why: 'The pronoun goes between *tide* and *over*.' },
        { q: 'When I asked for a refund, they tried to ___ with a voucher.', o: ['fob me off', 'fob off me', 'fob me away'], why: 'The pronoun goes in the middle: *fob me off with*.' },
        { q: 'He always manages to wriggle out ___ the washing-up.', o: ['of doing', 'from doing', 'to do'], why: '*Wriggle out of* + *-ing* or a noun.' },
        { q: 'The ministry simply passed the buck ___ the local councils.', o: ['to', 'at', 'on'], why: '*Pass the buck to* someone.' },
        { q: 'The injury ___ her hopes of a place in the final.', o: ['put paid to', 'put pay to', 'paid off'], why: 'The fixed form is *put paid to*.' },
        { q: 'The advert fell foul ___ the advertising regulator.', o: ['of', 'with', 'to'], why: '*Fall foul of* a rule or an authority.' },
      ] },
    ] },
    { title: 'More idioms', blocks: [
      { t: 'ex', kind: 'match', h: 'Match each idiom with its meaning.', pairs: [
        ['get wind of something', 'hear about something secret or private'],
        ['take something in your stride', 'deal calmly with a difficulty'],
        ['come to a head', 'reach a point where action must be taken'],
        ['a bone of contention', 'a subject people keep arguing about'],
        ['steal someone’s thunder', 'take attention or praise that someone else expected'],
        ['rest on your laurels', 'stop trying because of past success'],
      ] },
      { t: 'tip', art: 'owl', md: 'Record every idiom with its **grammar**, its **attitude** and **one sentence of your own**: *steal someone’s thunder* (+ possessive; mildly critical): *My colleague stole my thunder by announcing the results before my presentation.*' },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 1', blocks: [
      { t: 'ex', kind: 'select', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 1): read the text about a family business, sentence by sentence, and choose the answer (A, B, C or D) which best fits each gap.', items: [
        { q: 'When the bank finally ___ wind of the family’s debts, it demanded repayment within a month.', o: ['got', 'took', 'gave', 'made'], why: 'The idiom is *get wind of*: hear about something private.' },
        { q: 'For years the two brothers had ___ over the cracks, assuring suppliers that a large order was on its way.', o: ['papered', 'coated', 'pasted', 'laid'], why: '*Paper over the cracks*: hide a problem instead of solving it.' },
        { q: 'Now there was no way to ___ out of the problem.', o: ['wriggle', 'shake', 'turn', 'twist'], why: '*Wriggle out of*: avoid a duty or difficulty.' },
        { q: 'The elder brother decided to ___ the nettle and called a meeting of the whole staff.', o: ['grasp', 'seize', 'catch', 'hold'], why: 'The idiom is fixed: *grasp the nettle*. *Seize* sounds plausible but is not used.' },
        { q: 'He refused to ___ the buck to their father, who had founded the firm.', o: ['pass', 'give', 'throw', 'hand'], why: 'The idiom is *pass the buck*.' },
        { q: 'A short-term loan from a cousin ___ them over until the busy season.', o: ['tided', 'carried', 'saw', 'held'], why: '*Tide someone over*. *See someone through* exists, but not with *over*.' },
        { q: 'The crisis ___ to a head in March, when the largest supplier stopped deliveries.', o: ['came', 'got', 'went', 'brought'], why: 'The fixed expression is *come to a head*.' },
        { q: 'The firm survived, and since then nobody in the family has dared to ___ on their laurels.', o: ['rest', 'sit', 'lie', 'stay'], why: 'The idiom is *rest on your laurels*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 1** never choose an option because it sounds right on its own. Put each one into the sentence and ask whether it makes a **fixed expression** with the words around the gap. Idioms allow no substitutes: it is always *grasp* the nettle and *pass* the buck.' },
    ] },
  ],
  activities: {
    one: { title: 'Idioms at work', md: 'Ask the student about a difficult situation in their working life or studies: a conflict, a deadline, a decision someone avoided. As they tell it, suggest an idiom from today at each turn (*So your manager passed the buck?*). Then the student retells the story in two minutes, using at least five idioms correctly. Correct the grammar of each one.' },
    small: { title: 'Idiom consultants', md: 'Each student describes a real or invented problem in two sentences in the chat (*My flatmate never pays his share of the bills. I keep saying nothing.*). The others give advice using an idiom from today (*You need to grasp the nettle and talk to him tonight.*). The student with the problem chooses the best advice and says why.' },
  },
  homework: { book: 'u3:p4', md: 'Finish lesson 3 of unit 3 if needed, then do lesson 4 (A column that laughs at itself). Write about 150 words about a time when you or someone you know finally faced a problem that had been put off for too long. Use at least five idioms or phrasal verbs from the book and from today, each with its right grammar.' },
};
