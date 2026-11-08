// English B2, class 5 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u1:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c05',
  focus: 'By the end every student has read and discussed an article about adult friendship, can find opinions and attitudes in a text, and can give and justify their own opinion. The speaking goal: a short discussion on how friendship changes with age, using the unit’s tenses, adjectives and phrasal verbs.',
  tips: [
    'B2 First Reading Part 5 tests attitude and opinion, not just facts. Ask students: *How does the writer feel? Which words show it?*',
    'Students often copy whole sentences from a text to answer. Teach them to paraphrase the idea.',
    'In discussion, model phrases that build on others: *That’s a good point, and I’d add…*, *I see what you mean, but…*',
    'Recycle the unit: keep the board list of phrasal verbs and prefix adjectives visible and reward their use.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Is it harder to make friends as an adult? Why?* Collect two reasons on each side.' },
    { min: 15, title: 'The article', md: 'Show board page 1. Students read the short text alone and answer the questions. Check by asking which words gave the answer.' },
    { min: 10, title: 'Words from the text', md: 'Show board page 2. Students match words from the text with meanings.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: B2 First Speaking Part 4 discussion questions. Students choose the best answers, then discuss two questions in pairs.' },
    { min: 5, title: 'Close', md: 'Each student finishes: *A good friend is someone who…* Set the homework.' },
  ],
  board: [
    { title: 'The article', blocks: [
      { t: 'reading', title: 'Why adult friendships fade', md: 'Most of us remember a time when friends were simply there: in the same class, on the same team, at the same parties. Then life speeds up. Careers, children and moves to new cities mean that, by our mid-thirties, many of us have drifted apart from people we once saw every day.\n\nResearchers say the problem is not that adults care less, but that friendship needs three things that adult life rarely offers: repeated contact, unplanned time together and a setting where people feel relaxed. Without them, even close friendships tend to weaken.\n\nThe good news is that friendships can be rebuilt. People who join a regular activity, such as a choir or a weekly football game, often find that new friendships grow almost without effort.' },
      { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
        { q: 'According to the writer, why do adult friendships often weaken?', o: ['Adult life rarely gives people repeated, relaxed time together.', 'Adults care less about their friends.', 'People prefer to spend time alone.'], why: 'The second paragraph: *the problem is not that adults care less, but…*' },
        { q: 'What is the writer’s attitude in the last paragraph?', o: ['hopeful', 'critical', 'worried'], why: '*The good news is…*: the tone becomes positive.' },
      ] },
    ] },
    { title: 'Words from the text', blocks: [
      { t: 'ex', kind: 'match', h: 'Match the words from the text with their meanings.', pairs: [
        ['drift apart', 'slowly lose contact'],
        ['fade', 'slowly become weaker'],
        ['unplanned', 'not organised in advance'],
        ['almost without effort', 'very easily'],
      ] },
    ] },
    { title: 'Exam corner: Speaking Part 4', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the B2 First exam (Speaking, Part 4): choose the best answer to the examiner’s question.', items: [
        { q: '“Do you think social media helps people stay friends?”', o: ['To some extent, yes. It keeps you in touch, but I think it can’t replace meeting face to face, because you miss so much of the real person.', 'Yes.', 'Social media is a technology for communication on the internet.'], why: 'Part 4 rewards a balanced opinion with reasons, not a definition.' },
        { q: '“Is it better to have a few close friends or many friends?”', o: ['Personally, I’d rather have a few close friends. You can rely on them when things go wrong, whereas a big group tends to be more superficial.', 'A few close friends is better because it is better.', 'Many friends, I like people.'], why: 'An opinion, a reason and a contrast with *whereas*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 4 there is no right answer. Give your opinion, a reason and an example, and react to what your partner says.' },
    ] },
  ],
  activities: {
    one: { title: 'Debate with the teacher', md: 'You take the opposite view to the student on *Adults should make an effort to keep old friends*. Each speaks for one minute, then responds to the other. Note phrases for agreeing and disagreeing, and review them at the end.' },
    small: { title: 'Friendship survey', md: 'Students ask each other: *How did you meet your oldest friend? How often do you see them? What keeps you close?* Then the group agrees on three tips for keeping friendships alive.' },
    group: { title: 'Discussion circles', md: 'Breakout rooms of four discuss three Part 4 questions for two minutes each. One student in each room notes good phrases. Bring everyone back and share the best phrases.' },
  },
  homework: { book: 'u1', md: 'Finish lesson 4 of unit 1 and do the unit 1 test. Write about 120 words: *Is it harder to make friends as an adult?* Give your opinion with reasons and an example.' },
};
