// English C2, class 56 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u12:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c56',
  focus: 'By the end every student names ethical ideas precisely (*integrity, accountability, transparency, a conflict of interest, a grey area, the lesser of two evils, moral hazard, complicity*), uses them in their collocations (*declare a conflict of interest, hold someone to account, turn a blind eye, blow the whistle, cut corners, act in good faith*), keeps apart *condone* and *condemn*, *immoral* and *amoral*, and gives a two-minute long turn in the format of C2 Proficiency Speaking Part 3: a direct answer, two developed points, the other side and a return to the answer, followed by a discussion.',
  tips: [
    'Many of these words exist in the students’ languages with slightly different edges. Check meaning with situations, not definitions: *Is this a conflict of interest even if she judged fairly?* (Yes: the interest only has to be able to influence her.)',
    '*Condone* and *condemn* are opposites that students swap; so are *immoral* (wrong) and *amoral* (without moral sense). Ask for one sentence with each pair before the long turns.',
    'In Speaking Part 3 the candidate need not use every idea on the card. Reward a turn that develops two ideas well over one that lists three.',
    'Tact is part of the range. A verdict (*That was dishonest*) is sometimes needed, but *It is hard to see that as acting in good faith* shows control. Point out the softer forms when you hear them.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Is it acceptable for a doctor to accept a gift from a grateful patient? What about a bottle of wine? A holiday?* Ask where the line is, and introduce *a grey area*.' },
    { min: 9, title: 'Name it', md: 'Show board page 1. Students choose the term for each situation, then explain the difference between two terms that seemed close.' },
    { min: 8, title: 'Collocations and confusables', md: 'Show board page 2. Students choose the collocations and fix the mistakes, then make one sentence each with *condone* and *condemn*.' },
    { min: 6, title: 'A strong long turn', md: 'Show board page 3. Students choose the answers and say what a long turn should do in its first and its last sentence.' },
    { min: 22, title: 'Activity', md: 'Show board page 4: the Speaking Part 3 cards. Use the activity for your class size below.' },
    { min: 7, title: 'Feedback and close', md: 'Give each student one precise word they used well and one they could have used. Each student ends with one sentence about the warm-up question using a word from today. Set the homework.' },
  ],
  board: [
    { title: 'Name it', blocks: [
      { t: 'ex', kind: 'choice', h: 'Choose the term that fits each situation.', items: [
        { q: 'A judge is asked to hear a case involving her brother’s company.', o: ['a conflict of interest', 'moral hazard', 'complicity'], why: 'A private interest that could influence an official decision, whether or not it does.' },
        { q: 'Because the state always rescues failing banks, the banks take bigger risks.', o: ['moral hazard', 'integrity', 'transparency'], why: 'Protection from the consequences makes people less careful.' },
        { q: 'The council closes the smaller library so that the central one can stay open all week.', o: ['the lesser of two evils', 'a conflict of interest', 'accountability'], why: 'Two bad options; the less bad one is chosen.' },
        { q: 'Nobody outside the committee knows how the prize winners were chosen.', o: ['a lack of transparency', 'complicity', 'moral hazard'], why: 'The process is not open to view.' },
        { q: 'A manager knew about the bullying for a year and did nothing.', o: ['complicity', 'accountability', 'transparency'], why: 'Sharing in a wrong, even by silence.' },
        { q: 'The rules say nothing about accepting gifts from grateful patients.', o: ['a grey area', 'the lesser of two evils', 'moral hazard'], why: 'A case the rules do not clearly settle.' },
      ] },
    ] },
    { title: 'Collocations and confusables', blocks: [
      { t: 'ex', kind: 'colloc', h: 'Which words go with the key word? Choose all that fit.', items: [
        { key: 'accountability', o: ['ensure', 'demand', 'lack', 'blow', 'cut'], a: [0, 1, 2], why: 'You *ensure* or *demand* accountability, and a system can *lack* it. You *blow the whistle* and *cut corners*.' },
        { key: 'faith', o: ['act in good', 'act in bad', 'keep', 'declare', 'hold to'], a: [0, 1, 2], why: '*Act in good / bad faith*; *keep faith with* someone. You *declare* an interest and *hold someone to account*.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'By saying nothing, the board effectively [condemned] the fraud.', a: ['condoned'], why: '*Condone* = accept or allow; *condemn* = say publicly that it is wrong.' },
        { s: 'It was [amoral] of the company to hide the test results.', a: ['immoral', 'wrong', 'unethical'], why: '*Immoral* = morally wrong. *Amoral* means without any moral sense.' },
        { s: 'The inquiry promised to hold the directors [responsible to account].', a: ['to account', 'responsible'], why: 'Two separate idioms: *hold someone to account* or *hold someone responsible*.' },
        { s: 'To finish on time, the builders [cut angles] on safety checks.', a: ['cut corners'], why: '*Cut corners*: skip what should be done, to save time or money.' },
      ] },
    ] },
    { title: 'A strong long turn', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Speaking Part 3): choose the best answer.', items: [
        { q: 'The question is *Is it ever acceptable to keep quiet about wrongdoing at work?* Which opening is best?', o: ['Rarely, I would say, and far less often than people tell themselves, although there are grey areas.', 'This is a very interesting question and there are many things to say about it.', 'First I will talk about loyalty, then about careers, then about harm.'], why: 'A direct, nuanced answer in the first sentence; the others delay or list.' },
        { q: 'How should you use the three ideas on the card?', o: ['Develop two of them well, with reasons and an example.', 'Mention all three in one sentence each.', 'Ignore them and talk about something you know better.'], why: 'The ideas are there to help; depth is rewarded more than coverage.' },
        { q: 'Which sentence brings in the other side?', o: ['Granted, a whistle-blower can pay a terrible price, and it is not for me to say that everyone must accept that risk.', 'So that is my opinion.', 'Also, there is another example.'], why: 'A concession with precise, tactful language before returning to the answer.' },
        { q: 'Which is the best last sentence?', o: ['So, while silence can sometimes be the lesser of two evils, it usually amounts to a quiet form of complicity.', 'That is all I have to say.', 'In conclusion, there are many opinions.'], why: 'It returns to the answer, now with the nuance the turn has built.' },
      ] },
    ] },
    { title: 'Exam corner: Speaking Part 3', blocks: [
      { t: 'text', md: 'In the format of the C2 Proficiency exam (Speaking Part 3, the long turn): each candidate speaks for about **two minutes** on a card, without interruption.\n\n**Card A.** *Is it ever acceptable to keep quiet about wrongdoing at work?* You may like to think about: loyalty to colleagues; the risk to your career; harm to other people.\n\n**Card B.** *How far should the private lives of public figures be open to scrutiny?* You may like to think about: accountability; the right to privacy; the role of the media.\n\n**After each long turn.** To the partner: *Do you agree that silence can be a form of complicity?* / *Should politicians be judged by different standards from other people?* To the speaker: *What would make you speak up?* / *Is there anything a public figure is entitled to keep private?*\n\n**Discussion.** *Should organisations reward employees who report wrongdoing? Is integrity something that can be taught? When does tact become dishonesty?*' },
      { t: 'tip', art: 'owl', md: 'Answer the question directly, develop two points, give the other side, come back to your answer. Use at least four words from today, and keep going naturally: *Take…*, *That said…*, *Which brings me back to…*' },
    ] },
  ],
  activities: {
    one: { title: 'Two long turns and a discussion', md: 'The student has thirty seconds to look at card A on board page 4, then speaks for two minutes while you time them and note the words from today. Ask the speaker’s follow-up question. Then you give a two-minute model long turn on card B; the student listens for its structure and three precise words, then answers the partner’s question. Finish with four minutes on the discussion questions as equals. Feedback: one structural point and one vocabulary point.' },
    small: { title: 'Speak, listen, discuss', md: 'Pair students as candidates A and B (with an odd number, a third student takes card A again after the first pair). Candidate A speaks for two minutes on card A from board page 4; the others listen, and candidate B answers the partner’s question. Then swap for card B. Listeners note one precise word each speaker used and one moment where the turn lost its shape. After every pair has spoken, run the discussion questions with the whole group for four or five minutes, and ask each student to bring in someone who has not yet spoken.' },
  },
  homework: { book: 'u12:p3', md: 'Finish lesson 3 of unit 12 if needed, then do lesson 4 (In defence of the runaway tram). Record yourself giving a two-minute long turn on the card you did not speak about in class, or write it out in about 250 words, using at least five words from today. Send it to your teacher.' },
};
