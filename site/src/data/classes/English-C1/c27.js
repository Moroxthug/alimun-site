// English C1, class 27 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u6:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c27',
  focus: 'By the end every student has read a short story about a choice not made, answered questions on what the writer implies in the format of C1 Advanced Reading and Use of English Part 5, and noticed how the unit’s grammar (mixed conditionals, *wish* and *if only*, *would rather*, inversion) carries the characters’ feelings. The speaking goal: discuss choices and regret as in Speaking Part 4, developing an opinion and responding to a partner.',
  tips: [
    'Part 5 questions often ask what a writer implies or why a character says something. Ask students to answer in their own words first and only then look at the options.',
    'The wrong options in Part 5 are usually partly true: they use words from the text but change the meaning. When you check, ask *What is wrong with this one?*',
    'Point out that the grammar of the unit is how the story shows regret without naming it: *Had he answered the letter…*, *She would rather he had stayed*.',
    'In Speaking Part 4 students often agree too quickly. Model *I see what you mean, but…* and *That depends on…* and reward a partner who builds on the last point.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Is there a letter, message or call you never answered and still think about?* Students who want to share do so in a sentence; nobody has to.' },
    { min: 18, title: 'The story', md: 'Show board page 1. Students read the story alone, once for what happens and once for how the characters feel, then answer the questions. Check by asking which lines gave each answer.' },
    { min: 7, title: 'Grammar in the story', md: 'Show board page 2. Students match each sentence with its structure, then say what feeling it shows.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Speaking Part 4. Students choose the strongest answers, then discuss one question in pairs for two minutes.' },
    { min: 5, title: 'Close', md: 'Each student says what they think Elena should do next, with a conditional. Set the homework.' },
  ],
  board: [
    { title: 'The letter in the drawer', blocks: [
      { t: 'reading', title: 'The letter in the drawer', md: 'Elena found the letter while clearing out her father’s desk, under a pile of electricity bills he had kept for no reason anyone could explain. The envelope was addressed to her, in handwriting she knew at once, and it had never been opened. The postmark was twenty-two years old.\n\nShe sat down on the floor. Had her father simply forgotten it? He forgot nothing; he had remembered the birthday of every neighbour on the street. If he had meant to keep it from her, he must have had a reason, and she was not sure she wanted to know it.\n\nShe thought of Daniel as he had been at nineteen, the summer before she left for university, promising to write. She had waited for a letter until October, then decided, with the certainty of the young, that he had not cared enough. If only she had written first. She would be a different person now, perhaps, living in a different city, if that summer had ended differently.\n\nHer sister appeared in the doorway with two cups of tea. “You look as if you’ve seen a ghost,” she said. Elena held up the envelope. Her sister looked at it for a long moment and then, quietly, said, “I’d rather you didn’t open that here.”' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 5): choose the answer that fits best according to the story.', items: [
        { q: 'Why does the writer mention the electricity bills?', o: ['to suggest that the father kept things carefully, so the letter was probably not lost by chance', 'to show that the family had money problems', 'to explain why Elena was clearing the desk', 'to show that the father was disorganised'], why: 'Together with *He forgot nothing*, the detail suggests the letter was kept deliberately.' },
        { q: 'What does Elena feel in the second paragraph?', o: ['reluctant to discover the truth', 'certain that her father forgot', 'angry with the neighbours', 'relieved to have found the letter'], why: '*she was not sure she wanted to know it*' },
        { q: 'What does the phrase “with the certainty of the young” imply?', o: ['Elena now thinks her conclusion was too hasty.', 'Elena still believes Daniel did not care.', 'Young people usually make wise decisions.', 'Daniel was older than Elena.'], why: 'The older Elena looks back on her younger self’s certainty with some irony.' },
        { q: 'What does the sister’s reaction suggest?', o: ['She may know something about the letter.', 'She has never seen the envelope before.', 'She wants Elena to throw the letter away.', 'She is annoyed that Elena has stopped working.'], why: 'Her long look and quiet request hint that she recognises it.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 5, find the lines the question is about and decide the answer in your own words before you read the options. A wrong option often repeats words from the text but changes what they mean.' },
    ] },
    { title: 'Grammar in the story', blocks: [
      { t: 'ex', kind: 'match', h: 'Match each sentence from the story with the structure it uses.', pairs: [
        ['Had her father simply forgotten it?', 'a question, not a condition'],
        ['If he had meant to keep it from her, he must have had a reason.', 'past condition with a past deduction'],
        ['If only she had written first.', 'a regret about the past'],
        ['She would be a different person now if that summer had ended differently.', 'mixed conditional: past condition, present result'],
        ['I’d rather you didn’t open that here.', 'would rather + someone + past'],
      ] },
      { t: 'tip', art: 'owl', md: '*Had her father simply forgotten it?* looks like an inverted conditional but ends with a question mark: it is a real question. An inverted condition always has a second half: *Had he forgotten it, she would never have found it.*' },
    ] },
    { title: 'Exam corner: Speaking Part 4', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Speaking Part 4): the examiner asks broader questions about choices and regret. Choose the answer that would score best.', items: [
        { q: '“Do you think people regret the things they did or the things they didn’t do?”', o: ['I’d say it’s more often the things they didn’t do, because you can always learn from a mistake, whereas a missed chance just stays a question. That said, I know people who wish they had never taken a certain job.', 'The things they didn’t do.', 'People regret many things in their life, for example things.'], why: 'An opinion, a reason, a contrast and another point of view.' },
        { q: '“Should parents ever keep secrets from their adult children?”', o: ['It depends on why. If a secret protects someone, I can understand it up to a point, but had I been in Elena’s position, I would rather have known, even if it hurt.', 'No, never.', 'Parents and children have secrets.'], why: 'A conditional answer, a personal view with an inversion and *would rather*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 4 there is no right answer. Develop your view, then turn to your partner: *What do you think?* or *Would you agree?* The examiner listens for how well you build on each other’s ideas.' },
    ] },
  ],
  activities: {
    one: { title: 'What happens next', md: 'The student decides what is in the letter and what Elena does next, and tells the rest of the story in two minutes with at least one mixed conditional, one *wish* and one inversion. Then discuss two Part 4 questions from board page 3. Note the forms and go over three at the end.' },
    small: { title: 'The sister speaks', md: 'One student plays the sister and explains the letter; the others ask questions with *Why would you rather…?*, *If you had…, would…?* and *Do you wish…?* Swap roles once, with a different explanation. The group decides which version is the most convincing and why.' },
    group: { title: 'Part 4 rounds', md: 'Breakout rooms of four discuss three Part 4 questions you paste in the chat (regret, secrets, second chances), two minutes each. One student in each room notes the best conditionals and phrases for responding to a partner. Bring everyone back and collect them on the board.' },
  },
  homework: { book: 'u6', md: 'Finish lesson 4 of unit 6 and do the unit 6 test. Write the last paragraph of the story (about 120 words): what was in the letter and what Elena did, with a mixed conditional, *if only* and *would rather*.' },
};
