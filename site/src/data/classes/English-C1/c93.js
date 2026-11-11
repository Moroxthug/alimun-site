// English C1, class 93 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u20:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c93',
  focus: 'By the end every student has a method for the long texts of C1 Advanced Reading and Use of English, Parts 5 to 8, and has used it on new texts: for Part 5, find the place and reject each wrong option for a reason; for Part 6, note each writer’s view before comparing; for Part 7, check the links both ways; for Part 8, read the questions first and scan for paraphrases. The one rule for all four: match meaning, not words.',
  tips: [
    'The shared trap in Parts 5 to 8 is matching words instead of meaning. When a student picks a wrong answer, ask them to find the word in the text that tempted them; it is almost always there.',
    'In Part 5, the questions follow the order of the text. Train students to find the lines for each question first and only then read the options.',
    'In Part 6, students waste time rereading four texts for each question. Ask them to write one short note per writer per issue first, then answer from their notes.',
    'In Part 8, read the questions first and underline the key idea of each. Then scan; never read every section in full before answering.',
    'Part 7 was practised in class 85. If time is short, mention its method and keep the time for Parts 5, 6 and 8.',
  ],
  plan: [
    { min: 5, title: 'The long texts', md: 'Show board page 1. Go through the method for each part, and point out the one rule they share.' },
    { min: 15, title: 'Part 5', md: 'Show board page 2. Seven minutes alone with “Everyone solves this”, then check. For each wrong option, students say why it is wrong.' },
    { min: 13, title: 'Part 6', md: 'Show board page 3. Students make a note of each writer’s view first, then answer. Check together from the notes.' },
    { min: 12, title: 'Part 8', md: 'Show board page 4. Strict time of six minutes. Check together and point to the paraphrase in each section.' },
    { min: 10, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Each student names the part that took them longest and one change to their method. Set the homework.' },
  ],
  board: [
    { title: 'A method for Parts 5 to 8', blocks: [
      { t: 'table', caption: 'C1 Advanced Reading and Use of English, Parts 5 to 8', explain: ['head', 'col1', 'col2'], head: ['Part', 'What you do', 'The method'], rows: [
        ['Part 5', 'answer six multiple-choice questions on one long text', 'find the lines for each question; reject each wrong option for a reason'],
        ['Part 6', 'match four questions to four short texts by different writers', 'note each writer’s view on every issue, then compare the notes'],
        ['Part 7', 'put six removed paragraphs back into a text, with one extra', 'check the links before and after each gap'],
        ['Part 8', 'match ten statements to the sections of a text', 'read the statements first; scan for the same idea in other words'],
      ] },
      { t: 'tip', art: 'owl', md: 'The wrong answer often repeats a word from the text. The right answer nearly always says the same idea **in different words**.' },
    ] },
    { title: 'Part 5: multiple choice', blocks: [
      { t: 'reading', title: 'The art of the apology', md: 'We are often told that a good apology is simple: admit the mistake, say sorry and move on. Anyone who has tried to repair a damaged friendship knows that it is rarely so straightforward.\n\nThe researcher I interviewed for this article has spent years recording how people apologise at work and at home. What surprised her most was not how often people refuse to apologise, but how often they apologise badly. The classic example is the apology that blames the listener: *I’m sorry you feel that way.* It sounds like regret, yet it places the problem firmly with the person who was hurt.\n\nGood apologies, she found, share one feature above all. They describe what happened from the other person’s point of view. Only then does saying sorry carry any weight. Explanations, she warns, are best left until later, if they are needed at all; offered too soon, they are heard as excuses.\n\nNone of this, she admits, is easy. It asks us to set aside our own version of events at precisely the moment we most want to defend it.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 5): read the text and choose the answer which fits best.', items: [
        { q: 'In the first paragraph, the writer suggests that', o: ['the usual advice about apologising is too simple', 'most friendships cannot be repaired', 'people apologise less than they used to', 'saying sorry is rarely necessary'], why: '*Anyone who has tried… knows that it is rarely so straightforward.*' },
        { q: 'What surprised the researcher most?', o: ['how many apologies are poorly made', 'how many people refuse to apologise', 'how often people apologise at work', 'how quickly people forgive'], why: '*Not how often people refuse to apologise, but how often they apologise badly.* The refusal is mentioned, then rejected.' },
        { q: 'What does the writer say about *I’m sorry you feel that way*?', o: ['It sounds sincere but shifts the blame.', 'It is the best way to begin an apology.', 'It shows real regret.', 'It is mainly used at work.'], why: '*It sounds like regret, yet it places the problem firmly with the person who was hurt.*' },
        { q: 'According to the researcher, explanations', o: ['can do harm if they come too early', 'should always come first', 'are the most important part of an apology', 'are never needed'], why: '*Offered too soon, they are heard as excuses.* *If they are needed at all* does not mean never.' },
      ] },
    ] },
    { title: 'Part 6: four writers', blocks: [
      { t: 'reading', title: 'Should schools teach conflict resolution?', md: '**A.** Children learn to handle disagreement mainly by watching the adults around them. A timetabled lesson cannot compete with that, and it risks turning something human into another subject to be tested. Schools would do better to train their teachers.\n\n**B.** I have seen short courses in listening and compromise transform the atmosphere of a school within a term. Unlike writer A, I believe these skills can be taught directly, as long as the lessons are practical rather than theoretical.\n\n**C.** There is a real case for such lessons, but timetables are already overcrowded. If they are introduced, something else must go, and nobody seems willing to say what that should be.\n\n**D.** Practical lessons work, as writer B says, but only if the whole school follows the same approach. A course that pupils attend once a week while the playground runs by different rules achieves very little.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 6): choose from the writers A to D.', items: [
        { q: 'Which writer has a different view from the others about whether these skills can be taught in lessons?', o: ['A', 'B', 'C', 'D'], why: 'A says a lesson *cannot compete*; B, C and D accept that lessons can work.' },
        { q: 'Which writer shares B’s view that practical lessons can be effective?', o: ['D', 'A', 'C'], why: 'D: *Practical lessons work, as writer B says*.' },
        { q: 'Which writer raises a practical difficulty that the others do not mention?', o: ['C', 'A', 'B', 'D'], why: 'C: *timetables are already overcrowded*.' },
        { q: 'Which writer believes that adults’ example matters more than any course?', o: ['A', 'B', 'C', 'D'], why: 'A: *Children learn… mainly by watching the adults around them.*' },
      ] },
    ] },
    { title: 'Part 8: multiple matching', blocks: [
      { t: 'reading', title: 'Four people who changed their minds', md: '**A. Hana, teacher.** For years I refused to use any technology in class. A student who could not hold a pen changed that; a tablet gave her a voice. I still limit screens, but I no longer see them as the enemy.\n\n**B. Viktor, journalist.** I used to think that balance meant giving both sides equal time. Covering a flood taught me otherwise: some claims simply do not deserve the same weight as the evidence.\n\n**C. Ines, nurse.** I was certain that I would hate working nights. In fact, the quiet hours are when patients talk most openly, and I have come to value them more than any other shift.\n\n**D. Owen, engineer.** My father and I were at loggerheads for a decade about my career. It was only when I had children myself that I understood what he had been afraid of.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 8): which person says each thing?', items: [
        { q: 'Who came to understand a family member’s fears through their own experience?', o: ['D', 'A', 'B', 'C'], why: 'Owen: *only when I had children myself that I understood what he had been afraid of*.' },
        { q: 'Who discovered an unexpected advantage in something they had dreaded?', o: ['C', 'A', 'B', 'D'], why: 'Ines: *certain that I would hate working nights… I have come to value them*.' },
        { q: 'Who changed their view because of one particular person?', o: ['A', 'B', 'C', 'D'], why: 'Hana: *A student who could not hold a pen changed that*. Owen mentions his father, but the change came from his own children.' },
        { q: 'Who now treats some opinions as less important than others?', o: ['B', 'A', 'C', 'D'], why: 'Viktor: *some claims simply do not deserve the same weight*.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Prove it', md: 'For every answer the student gives, ask them to read aloud the exact words in the text that prove it, and then the words that made one wrong option tempting. Finish by writing together a one-line method for each of Parts 5, 6 and 8 in the student’s own words.' },
    small: { title: 'Trap makers', md: 'Each student takes one short section of the Part 8 text and writes one new statement that matches it, using different words from the text, plus one tempting wrong statement that repeats a word from it. The group solves each pair and says which was the trap.' },
    group: { title: 'Paraphrase race', md: 'Breakout rooms of three each get four phrases from today’s texts in the chat (*rarely so straightforward, heard as excuses, at loggerheads, come to value*). Each room writes a paraphrase of each one in under three minutes. Back together, rooms compare paraphrases and the class chooses the clearest.' },
  },
  homework: { book: 'u20:p2', md: 'Finish lesson 2 of unit 20 if needed, then do lesson 3 (Writing against the clock). Read one long article in English this week, and write three Part 5 style questions on it, each with one right option and three options you can reject for a reason.' },
};
