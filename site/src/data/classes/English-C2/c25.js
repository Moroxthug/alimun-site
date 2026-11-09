// English C2, class 25 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u6:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c25',
  focus: 'By the end every student uses the mandative subjunctive after verbs, adjectives and nouns of demand and importance (*They insisted that the contract be signed. It is vital that she not be told.*), knows when *should* or the ordinary form is the British alternative, tells it apart from *suggest* meaning *indicate*, and uses the fixed phrases the old subjunctive survives in: *were it not for, had it not been for, so be it, far be it from me, come what may, suffice it to say, be that as it may*. The exam goal: the grammar words of these structures in the format of C2 Proficiency Reading and Use of English Part 2.',
  tips: [
    'The test is simple: one form for every person, no *-s*, no backshift. If students hesitate, ask them to put *should* in the sentence; if it fits, the base form fits too.',
    '*Suggest* has two meanings. When it means *propose*, the subjunctive follows; when it means *indicate*, it does not (*The evidence suggests that he was there*). Expect this in the exam.',
    'The formulaic phrases carry attitude. *Far be it from me* almost always introduces exactly the criticism it pretends not to make; *so be it* sounds resigned. Practise the tone, not only the form.',
    'In Part 2 the missing word is often the small one inside a fixed phrase (*it*, *from*, *may*, *been*). Students who know the phrases as blocks find these gaps easy.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *If you could make one rule for your building, office or city, what would it be?* Rewrite two answers on the board as *I would insist that everyone…* and *It is essential that…*' },
    { min: 10, title: 'Choose the form', md: 'Show board page 1. Students choose alone, then explain each choice. Pause on the item with *suggests*.' },
    { min: 12, title: 'Fix it and fixed phrases', md: 'Show board page 2, then page 3. Students correct the mistakes, then choose the fixed phrase and read the sentence aloud with the right tone.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 4: C2 Proficiency Reading and Use of English Part 2. Read the text once for sense, then six minutes alone. Check together, naming the structure behind each gap.' },
    { min: 5, title: 'Close', md: 'Each student says one sentence with *far be it from me* or *be that as it may* about something in the news. Set the homework.' },
  ],
  board: [
    { title: 'Choose the form', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the correct form.', items: [
        { q: 'The inspector recommended that the bridge ___ closed until the repairs are finished.', o: ['be', 'is', 'was'], why: 'Passive subjunctive after *recommended that*.' },
        { q: 'It is vital that each volunteer ___ a copy of the safety rules.', o: ['receive', 'receives', 'received'], why: 'Base form after *vital that*, with no *-s*.' },
        { q: 'We asked that our names ___ mentioned in the report.', o: ['not be', 'are not', 'don’t be'], why: 'The negative is *not* + base form, with no *do*.' },
        { q: 'They insisted that she ___ the meeting, even though it had already started.', o: ['attend', 'attended', 'attends'], why: 'No backshift after a past trigger: *insisted that she attend*.' },
        { q: 'The scorch marks suggest that the fire ___ started deliberately.', o: ['was', 'be', 'should be'], why: 'Here *suggest* means *indicate*: a fact, so no subjunctive.' },
        { q: 'Her proposal that the vote ___ postponed was rejected by the board.', o: ['be', 'is', 'being'], why: 'A noun of demand (*proposal that*) also takes the subjunctive.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'The board requires that every director [declares] any conflict of interest.', a: ['declare', 'should declare'], why: 'Base form after *requires that*, or British *should declare*.' },
        { s: 'It is important that he [doesn’t] be told before Friday.', a: ['not'], why: 'The negative subjunctive is *not be*, without *do*.' },
        { s: '[Was] it not for the delay, we would have finished in May.', a: ['Were', 'Had'], why: 'The fixed inversion uses *were* (or *had it not been for*), never *was*.' },
        { s: 'The test results suggest that the patients [be] given too high a dose.', a: ['were', 'had been'], why: '*Suggest* = indicate a fact: use the ordinary past form.' },
        { s: 'Far be it [for] me to criticise, but the speech was far too long.', a: ['from'], why: 'The fixed phrase is *far be it from me*.' },
      ] },
    ] },
    { title: 'Fixed phrases', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the fixed phrase that fits.', items: [
        { q: 'The roads may be closed and the trains cancelled, but ___, we are getting married on Saturday.', o: ['come what may', 'so be it', 'suffice it to say'], why: '*Come what may*: whatever happens.' },
        { q: 'If the committee wants to reject the plan, ___. We will find another way.', o: ['so be it', 'come what may', 'far be it from me'], why: '*So be it*: I accept it, even if I do not like it.' },
        { q: '___ the holiday did not go as planned: we spent most of it in the hotel laundry.', o: ['Suffice it to say', 'Be that as it may', 'Come what may'], why: '*Suffice it to say*: I will say only this, and you can imagine the rest.' },
        { q: 'The figures are disappointing. ___, the project has taught us a great deal.', o: ['Be that as it may', 'So be it', 'Far be it from me'], why: '*Be that as it may*: even if that is true.' },
        { q: '___ to tell you how to run your department, but have you thought of asking the staff?', o: ['Far be it from me', 'Suffice it to say', 'Be that as it may'], why: '*Far be it from me to…*: a polite way of introducing advice or criticism.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 2', blocks: [
      { t: 'ex', kind: 'gap', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 2): read the text about an unusual will, in order. Think of the word which best fits each gap. Use only one word in each gap.', items: [
        { q: 'Her grandfather’s will stated that the house ___ sold only to someone who would live in it.', a: ['be'], why: 'A passive subjunctive after *stated that*, used here as a requirement.' },
        { q: 'Her lawyer recommended that she ___ accept the first offer, however generous it seemed.', a: ['not'], why: 'The negative subjunctive: *not* + base form.' },
        { q: '___ it not for that clause, she could have sold the house to a developer within a week.', a: ['Were'], why: 'The inverted conditional *Were it not for*.' },
        { q: 'Suffice ___ to say, the developer was not pleased.', a: ['it'], why: 'The fixed phrase *suffice it to say*.' },
        { q: '“Far be it ___ me to judge,” he wrote to her, “but you are throwing money away.”', a: ['from'], why: 'The fixed phrase *far be it from me*.' },
        { q: '“Be that as it ___,” she replied, “I intend to respect my grandfather’s wishes.”', a: ['may'], why: 'The fixed phrase *be that as it may*.' },
        { q: 'She went further and insisted ___ any buyer sign a promise to live there for five years.', a: ['that'], why: '*Insist that* + subjunctive *sign*.' },
        { q: 'Had it not ___ for her stubbornness, the street would now have yet another holiday let.', a: ['been'], why: 'The past form of the fixed inversion: *Had it not been for*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Method for **Part 2**: read the whole text first, then for each gap read the full sentence and decide what kind of word is missing. If the sentence starts with a verb and *it* (*___ it not for*, *Suffice ___ to say*), you are probably inside a fixed subjunctive phrase. Check every answer for spelling and capital letters.' },
    ] },
  ],
  activities: {
    one: { title: 'The recommendations', md: 'The student chooses an organisation they know well (their workplace, school, sports club or building). They are a consultant presenting five recommendations to its board, each with a different trigger: *I recommend that…, It is essential that…, We propose that…, The board should insist that…, Our suggestion is that…* Play a sceptical board member and reply with a formulaic phrase (*Be that as it may…, Far be it from me…*); the student answers each objection.' },
    small: { title: 'The tenants’ demands', md: 'The group are tenants writing to a landlord. In the chat, each student adds one formal demand with the subjunctive (*We demand that the heating be repaired by Friday.*). Then the students take turns as the landlord and answer one demand with a fixed phrase (*So be it…, Suffice it to say…, Far be it from me…*). Finish by voting for the most persuasive demand and the most diplomatic reply.' },
  },
  homework: { book: 'u6:p1', md: 'Finish lesson 1 of unit 6 if needed, then do lesson 2 (The meeting over, we left). Write a formal email of about 150 words to a local council about a problem in your area, with at least three subjunctives after different triggers and two of the fixed phrases from today.' },
};
