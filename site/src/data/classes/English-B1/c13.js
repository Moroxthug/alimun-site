// English B1, class 13 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u3:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c13',
  focus: 'By the end every student can talk about travel problems (*delayed, cancelled, miss a train, lost luggage, refund*), complain politely and ask for help (*I’m afraid…, Would it be possible to…?, I’d like a refund*), and handle a role play at an airport or station desk. The speaking goal: solve a travel problem calmly and politely in English.',
  tips: [
    'Learners say *I lost the train*. In English you *miss* a train, a bus or a flight; you *lose* things.',
    '*delayed by two hours*, not *late of two hours*. Teach the chunk.',
    'Politeness matters more than grammar here. Teach softeners: *I’m afraid there’s a problem*, *Would it be possible to…?*, *Could you possibly…?*',
    'Some students feel uncomfortable complaining. The role plays give them safe practice.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is the worst travel problem you have ever had? What happened?*' },
    { min: 10, title: 'Travel problems', md: 'Show board page 1. Students match the words and meanings, then fix the mistakes.' },
    { min: 10, title: 'Polite complaints', md: 'Show board page 2. Students choose the more polite sentence each time, then say why.' },
    { min: 20, title: 'Activity', md: 'Use the activity for your class size below: role plays.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: B1 Preliminary Reading Part 5. Students choose the right word in an email about lost luggage.' },
    { min: 5, title: 'Close', md: 'Each student says one polite phrase they will use next time they travel. Set the homework.' },
  ],
  board: [
    { title: 'Travel problems', blocks: [
      { t: 'ex', kind: 'match', h: 'Match each word with its meaning.', pairs: [
        ['delayed', 'later than planned'],
        ['cancelled', 'it will not happen'],
        ['miss', 'arrive too late for it'],
        ['a refund', 'your money back'],
        ['luggage', 'the bags you travel with'],
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'We [lost] the last bus and had to walk home.', a: ['missed'], why: 'You *miss* a bus, a train or a flight.' },
        { s: 'Our flight was delayed [of] three hours.', a: ['by'], why: '*delayed by* + time.' },
      ] },
    ] },
    { title: 'Polite complaints', blocks: [
      { t: 'ex', kind: 'choice', h: 'Choose the more polite sentence.', items: [
        { q: '', o: ['I’m afraid my bag hasn’t arrived.', 'Where is my bag? You lost it!', 'My bag. Not here.'], why: '*I’m afraid…* softens bad news.' },
        { q: '', o: ['Would it be possible to change my ticket?', 'Change my ticket now.', 'I want another ticket.'], why: '*Would it be possible to…?* is a polite request.' },
        { q: '', o: ['I’d like a refund, please.', 'Give me my money back!', 'Money back.'], why: '*I’d like…, please* is polite and clear.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In English, a polite complaint usually has three parts: a soft start (*I’m afraid…*), the problem, and a clear request (*Could you…?*).' },
    ] },
    { title: 'Exam corner: choose the right word', blocks: [
      { t: 'reading', title: 'An email to an airline', md: 'Dear Sir or Madam, I flew from Rome to Dublin on 3 May, but my suitcase did not ___. I have ___ for six days and I still have no news. I would be grateful if you could ___ me know where it is.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading, Part 5): choose the right word for each gap.', items: [
        { q: 'my suitcase did not ___.', o: ['arrive', 'reach', 'come back'], why: '*arrive* has no object; *reach* needs one.' },
        { q: 'I have ___ for six days.', o: ['waited', 'expected', 'stayed'], why: '*wait for* a period of time.' },
        { q: 'if you could ___ me know.', o: ['let', 'make', 'tell'], why: '*let me know* is the fixed phrase.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Reading Part 5 the options often have similar meanings. The right one fits the grammar too: does it need an object? Is it part of a fixed phrase like *let me know*?' },
    ] },
  ],
  activities: {
    one: { title: 'Three desks', md: 'Play three role plays, changing roles each time: a cancelled train at the station, lost luggage at the airport, a hotel room that is not ready. The student must stay polite and get a solution. After each one, give one phrase to sound more polite.' },
    small: { title: 'Problem cards', md: 'Put six travel problems in the chat. Pairs take turns: one is the traveller, the other works at the desk. The others listen and score politeness and clarity from one to three, then suggest one better phrase.' },
    group: { title: 'Travel help line', md: 'Breakout rooms of three: a traveller, an employee and an observer. Each room does two role plays from the problems in the chat and rotates. The observer writes down the best polite phrase they heard. Rooms share their best phrases with the class.' },
  },
  homework: { book: 'u3:p4', md: 'Do lesson 4 of unit 3 (A weekend in Kelmouth). Write a polite email of about 100 words to an airline or a hotel about a problem, with a clear request.' },
};
