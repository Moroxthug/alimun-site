// English C1, class 81 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u17:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c81',
  focus: 'By the end every student can compare four writers’ opinions on one issue, as in C1 Advanced Reading and Use of English Part 6, by taking one issue at a time and following the signals of concession and contrast (*admittedly*, *granted*, *that said*, *where I part company with…*). Then they discuss how cities and governments change behaviour, as in Speaking Part 3: developing ideas, reacting to a partner and negotiating a decision.',
  tips: [
    'Part 6 asks how writers relate to each other, not what one writer thinks. Make students write a one-word position for each writer on each issue (*for*, *against*, *unsure*) in a small grid before they answer.',
    'Concession words are where opinions hide: *Admittedly, the air will be cleaner* comes from a writer who is against the ban. Ask students to read the sentence after the concession.',
    'In the speaking part, praise reactions as much as ideas. A student who says *Up to a point, but…* and builds on a partner’s idea scores better than one who gives a long speech alone.',
    'Do not let the discussion become a vote on cars. The aim is the language of weighing ideas; there is no right answer.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Should private cars be banned from city centres?* Quick show of hands, then one reason from each side.' },
    { min: 18, title: 'Four views', md: 'Show board page 1. Students read the four texts alone in eight minutes, then answer the questions with "Everyone solves this". Check together and point to the sentence that answers each question.' },
    { min: 7, title: 'Signal words', md: 'Show board page 2. Students find the words of concession and contrast, and say what each one tells us about the writer’s view.' },
    { min: 12, title: 'Exam corner: speaking', md: 'Board page 3: C1 Advanced Speaking Part 3. Pairs discuss the question for two minutes, then agree on a decision in one more minute. Then choose the best replies together.' },
    { min: 13, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Each student says which writer they agree with most and where they part company with them. Set the homework.' },
  ],
  board: [
    { title: 'Four views on a car-free centre', blocks: [
      { t: 'reading', title: 'A ban on private cars in the city centre', md: '**A.** The case for the ban rests above all on health. The evidence linking traffic fumes to asthma in children is now overwhelming, and a car-free centre would bring rapid improvements in air quality. Shopkeepers fear for their trade, but I suspect their fears are exaggerated: people who arrive on foot or by bike tend to visit more often and spend more. My one condition is that drivers with disabilities be exempt. A law that excluded them from the city would be indefensible.\n\n**B.** Admittedly, the air in the centre will be cleaner. That said, the price will be paid by those least able to afford it. Small shops are already struggling, and many will not survive the loss of customers who drive in from the suburbs. Nor is it fair to people on low incomes who live where buses are rare and slow. For them, the car is not a luxury but the only practical way to reach work.\n\n**C.** I support the principle, but not the timetable. A ban introduced overnight will cause chaos. Phasing it in over three years, beginning with one district, would allow buses to be improved first. Shop owners are right to be worried: many will lose trade, at least at first, and they deserve help to adapt. I also agree that drivers with disabilities must keep full access. Cleaner air is a goal worth waiting a little longer for.\n\n**D.** Granted, the centre will be quieter. Yet I doubt the air will be any healthier overall: the traffic will simply move to the ring road, and pollution with it. Where I part company with the ban’s critics is on business. Every study I have seen shows that pedestrians spend more than drivers. And if the council is going to act, it should do so decisively. A slow introduction would only give opponents years in which to fight it.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 6): choose from the writers A to D.', items: [
        { q: 'Which writer has a different view from the others on whether the ban will improve air quality?', o: ['Writer D', 'Writer A', 'Writer B', 'Writer C'], why: 'A, B and C expect cleaner air; D thinks pollution *will simply move to the ring road*.' },
        { q: 'Which writer shares B’s view on the effect of the ban on local shops?', o: ['Writer C', 'Writer A', 'Writer D'], why: 'C: *Shop owners are right to be worried: many will lose trade*. A and D think pedestrians spend more.' },
        { q: 'Which writer shares A’s opinion that drivers with disabilities should keep access?', o: ['Writer C', 'Writer B', 'Writer D'], why: 'C: *I also agree that drivers with disabilities must keep full access.*' },
        { q: 'Which writer disagrees with C about introducing the ban gradually?', o: ['Writer D', 'Writer A', 'Writer B'], why: 'D: *A slow introduction would only give opponents years in which to fight it.*' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 6 take one issue at a time (air, shops, fairness, timing) and find what each writer says about it. A writer who agrees with someone rarely says so directly: look for the same idea in different words.' },
    ] },
    { title: 'Signal words', blocks: [
      { t: 'ex', kind: 'spot', h: 'Find the words that show concession or contrast.', items: [
        { s: '[Admittedly], the air in the centre will be cleaner. [That said], the price will be paid by the poorest.', why: '*Admittedly* concedes a point; *That said* turns back to the writer’s real view.' },
        { s: '[Granted], the centre will be quieter. [Yet] I doubt the air will be any healthier.', why: '*Granted* concedes; *Yet* introduces the writer’s doubt.' },
        { s: 'I support the principle, [but] not the timetable.', why: '*But* separates what the writer accepts from what they reject.' },
        { s: '[Where I part company with] the critics is on business.', why: 'A formal way to show the exact point of disagreement.' },
      ] },
      { t: 'table', caption: 'Concession, then contrast', explain: ['head', 'col1'], head: ['Phrase', 'What it does', 'Example'], rows: [
        ['admittedly / granted', 'accepts a point the writer does not fully support', 'Granted, it will be cheaper.'],
        ['while it is true that…', 'accepts a fact before arguing against it', 'While it is true that fines work, they are unpopular.'],
        ['that said / yet / nevertheless', 'turns back to the writer’s own view', 'That said, the cost is too high.'],
        ['where I part company with…', 'names the exact point of disagreement', 'Where I part company with A is on timing.'],
      ] },
    ] },
    { title: 'Exam corner: Speaking Part 3', blocks: [
      { t: 'text', md: 'In the format of the C1 Advanced exam (Speaking Part 3). Discuss with your partner for about two minutes: *How might cities persuade people to use their cars less?* Think about cheaper public transport, safe cycle lanes, a charge for driving into the centre, encouraging people to work from home, and car-free days. Then decide together in one minute: *Which would have the biggest effect, and why?*' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Speaking Part 3): which reply is best?', items: [
        { q: 'Your partner says: “A charge for driving into the centre is the obvious answer.” You…', o: ['Up to a point, though it only works if the buses are good enough to replace the car.', 'Yes.', 'Charges. Next one: cycle lanes.'], why: 'React to the idea and develop it with a condition.' },
        { q: 'You want to bring your partner into the discussion.', o: ['What’s your feeling about car-free days? Do they change anything in the long run?', 'I will now talk about car-free days.', 'You talk now.'], why: 'An open question invites a developed answer.' },
        { q: 'You need to move towards a decision.', o: ['So, shall we narrow it down? I’d say cheaper public transport, if you agree.', 'I have decided already.', 'We can’t decide, there are too many.'], why: 'Suggests a decision and invites agreement: negotiation.' },
        { q: 'You disagree with your partner’s choice.', o: ['I can see the logic in that, but I’m not convinced it would work outside the centre.', 'No, that’s wrong.', 'Whatever you think.'], why: 'Polite disagreement with a reason shows range and interaction.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Examiner and candidate', md: 'Do the Speaking Part 3 task on board page 3 with the student as a partner, then swap the roles: the student plays the examiner and you make some typical mistakes (long monologues, no reactions). The student says what you did wrong and how to improve it.' },
    small: { title: 'Fifth writer', md: 'Each student writes a fifth view (about 60 words) on the car ban in the chat, using one concession and one contrast word. The others decide which of writers A to D the new view agrees with most, and on which issue.' },
    group: { title: 'Council meeting', md: 'Breakout rooms of three: each room is a city council committee and must agree on two measures from board page 3 for their own town, with reasons. Each student must use one concession phrase. Rooms present their decision to the class in one minute; the class asks one question to each room.' },
  },
  homework: { book: 'u17:p4', md: 'Finish lesson 4 of unit 17, including the essay for your teacher, then do lesson 1 of unit 18 (Has been rising steadily). Write 100 words giving your own view on the car-free centre, with one concession and one *where I part company with…*.' },
};
