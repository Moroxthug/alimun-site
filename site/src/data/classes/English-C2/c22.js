// English C2, class 22 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u5:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c22',
  focus: 'By the end every student understands common informal words and where they come from (*gutted, chuffed, knackered, skint, stoked, the craic*), reads the indirect politeness of British understatement (*I hear what you say, that’s a brave decision*), recognises taboo language without using it, and judges who could say what to whom. The listening goal: match five short monologues to their main point in the format of C2 Proficiency Listening Part 4.',
  tips: [
    'The aim at C2 is to understand slang and judge it, not to collect it. A learner who uses slang slightly wrongly sounds odder than one who uses none; say so plainly.',
    'Do not say taboo words aloud in class. Talk about them by category (religion, the body, slurs) and practise the safe alternatives, such as a minced oath.',
    'British understatement is the part students find most useful at work. Ask them to translate each phrase into what is really meant, then say what a direct speaker would have said.',
    'In Listening Part 4 every speaker touches on more than one option. After each answer, ask *What else did the speaker mention, and why is it not the main point?*',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is a word your friends use that your parents or your manager would not? How would you say the same thing to them?*' },
    { min: 10, title: 'Informal words', md: 'Show board page 1. Students choose the word, then say who could use the sentence and in what setting.' },
    { min: 10, title: 'What is really meant', md: 'Show board page 2, then page 3. Students decide what each polite phrase really means, then sort the sentences by where they are safe.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 15, title: 'Exam corner', md: 'Show board page 4: C2 Proficiency Listening Part 4. Give students a minute to read both tasks. Read the four monologues aloud twice at natural speed: Task One on the first reading, Task Two on the second. Check together.' },
    { min: 5, title: 'Close', md: 'Each student says one informal word they now understand and the neutral word they would use at work instead. Set the homework.' },
  ],
  board: [
    { title: 'Informal words', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the informal word that fits each message between friends.', items: [
        { q: 'I can’t come to the festival this year, I’m completely ___ until I get paid.', o: ['skint', 'chuffed', 'stoked'], why: '*Skint*: having no money (British).' },
        { q: 'They lost the final on penalties. He’s absolutely ___.', o: ['gutted', 'knackered', 'chuffed'], why: '*Gutted*: very disappointed.' },
        { q: 'She was ___ to bits when they asked her to sing at the wedding.', o: ['chuffed', 'gutted', 'skint'], why: '*Chuffed to bits*: very pleased.' },
        { q: 'We got tickets for the last night of the tour! I’m so ___.', o: ['stoked', 'skint', 'gutted'], why: '*Stoked*: delighted and excited (Australia, United States).' },
        { q: 'Come down to the pub on Friday, the ___ is always good there.', o: ['craic', 'loaf', 'arvo'], why: '*The craic* (Ireland): fun and good company.' },
      ] },
    ] },
    { title: 'What is really meant', blocks: [
      { t: 'ex', kind: 'choice', h: 'A British colleague says each sentence in a meeting. What does it most probably mean?', items: [
        { q: '“I hear what you say.”', o: ['I disagree, and I am not going to change my mind.', 'I agree with you completely.', 'Could you speak a little louder?'], why: 'It acknowledges the point without accepting it.' },
        { q: '“That’s a very brave decision.”', o: ['I think it is a risky or unwise decision.', 'I admire your courage.', 'The decision was made quickly.'], why: '*Brave* here suggests the decision may be foolish.' },
        { q: '“Could we perhaps look at this section again?”', o: ['This section has a problem that must be fixed.', 'This section is the best part.', 'We have plenty of time.'], why: 'A softened request that signals a real problem.' },
        { q: '“I was a little disappointed by the figures.”', o: ['The figures are seriously worrying.', 'The figures are acceptable.', 'The figures arrived late.'], why: 'Understatement: *a little disappointed* can mean very unhappy.' },
        { q: 'At the end of a first meeting: “You must come round for dinner some time.”', o: ['A friendly remark, not yet a definite invitation.', 'A fixed invitation for this week.', 'A request that you cook for them.'], why: 'Often a warm way to close a conversation; wait for a date before you treat it as an invitation.' },
      ] },
    ] },
    { title: 'Safe where?', blocks: [
      { t: 'ex', kind: 'sort', h: 'Would this sentence be safe in a job interview, or only with close friends?', groups: ['safe in a job interview', 'only with close friends'], items: [
        { s: 'I was exhausted after the move, but it was worth it.', g: 0, why: 'Neutral and clear.' },
        { s: 'I was completely knackered after the move.', g: 1, why: '*Knackered* is informal.' },
        { s: 'Losing the contract was a real disappointment for the team.', g: 0, why: 'Neutral vocabulary.' },
        { s: 'We were all gutted when the client pulled out.', g: 1, why: '*Gutted* and *pulled out* in this tone are informal.' },
        { s: 'For crying out loud, the printer has jammed again.', g: 1, why: 'A minced oath: mild, but still for informal settings.' },
        { s: 'I was very pleased with the result of the project.', g: 0, why: 'Neutral; *chuffed* would be the informal version.' },
      ] },
      { t: 'tip', md: 'Learn to understand strong language, because you will hear it in films and conversation. Do not use it yourself, even when the people around you do: listeners judge a learner’s swearing more harshly than a native speaker’s.' },
    ] },
    { title: 'Exam corner: Listening Part 4', blocks: [
      { t: 'dialogue', title: 'Script for the teacher to read aloud twice: four people describe a misunderstanding', lines: [
        { who: 'Lucas', s: 'After a trip to visit a client in Edinburgh, I wrote to thank the head of their legal team. I said the meetings had been great but that I was absolutely knackered. My manager saw it and went pale. Nobody was offended, as it turned out, but now I read every message to a senior person out loud before I send it, and if a word sounds like the pub, it goes.' },
        { who: 'Aiko', s: 'I cooked for my British host family in my first week, and the father said it was not bad at all. I went to my room and nearly cried; I thought he meant it was barely edible. The next morning he asked for the recipe. I find it funny now, and I have started doing it myself. When my friends ask about my exams, I say they went reasonably well.' },
        { who: 'Marco', s: 'My first American manager would read my reports and say things like, this part doesn’t work for me, fix it by Friday. No softening at all. I was sure she disliked me. Then she put me forward for a promotion. These days, when someone gives me blunt feedback, I don’t take it personally. It is information, not an attack.' },
        { who: 'Fatima', s: 'I picked up a word at a football match that everyone around me seemed to use about the referee. It sounded harmless, almost affectionate. I used it in front of my partner’s grandmother and the room went silent. I had no idea how strong it was for her generation. Now I simply don’t swear in English, even when my friends do. It isn’t worth the risk.' },
      ] },
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Listening Part 4), shortened to four speakers and five options in each task. Task One: what caused each speaker’s problem?', items: [
        { q: 'Lucas', o: ['using informal language in a formal message', 'taking understatement as criticism', 'taking directness as rudeness', 'misjudging how strong a word was', 'not understanding a regional accent'], why: '*Knackered* in a thank-you to the head of a legal team.' },
        { q: 'Aiko', o: ['taking understatement as criticism', 'using informal language in a formal message', 'taking directness as rudeness', 'misjudging how strong a word was', 'not understanding a regional accent'], why: '*Not bad at all* was praise; she heard it as *barely edible*.' },
        { q: 'Marco', o: ['taking directness as rudeness', 'using informal language in a formal message', 'taking understatement as criticism', 'misjudging how strong a word was', 'not understanding a regional accent'], why: '*No softening at all. I was sure she disliked me.*' },
        { q: 'Fatima', o: ['misjudging how strong a word was', 'using informal language in a formal message', 'taking understatement as criticism', 'taking directness as rudeness', 'not understanding a regional accent'], why: '*I had no idea how strong it was for her generation.*' },
      ] },
      { t: 'ex', kind: 'choice', h: 'Task Two: what does each speaker do now?', items: [
        { q: 'Lucas', o: ['checks the tone of important messages before sending them', 'uses understatement with friends', 'treats blunt comments as useful information', 'avoids strong language altogether', 'asks colleagues to explain local expressions'], why: '*I read every message to a senior person out loud before I send it.*' },
        { q: 'Aiko', o: ['uses understatement with friends', 'checks the tone of important messages before sending them', 'treats blunt comments as useful information', 'avoids strong language altogether', 'asks colleagues to explain local expressions'], why: '*I have started doing it myself… reasonably well.*' },
        { q: 'Marco', o: ['treats blunt comments as useful information', 'checks the tone of important messages before sending them', 'uses understatement with friends', 'avoids strong language altogether', 'asks colleagues to explain local expressions'], why: '*It is information, not an attack.* The promotion is mentioned, but it is not what he does now.' },
        { q: 'Fatima', o: ['avoids strong language altogether', 'checks the tone of important messages before sending them', 'uses understatement with friends', 'treats blunt comments as useful information', 'asks colleagues to explain local expressions'], why: '*Now I simply don’t swear in English, even when my friends do.*' },
      ] },
      { t: 'tip', art: 'owl', md: 'Method for **Listening Part 4**: read both tasks before you listen. The speakers never use the words of the options, so listen for the point of each story. Do Task One on the first hearing and Task Two on the second, and check Task One again as you go. In the exam there are five speakers and eight options in each task.' },
    ] },
  ],
  activities: {
    one: { title: 'Three listeners', md: 'The student tells the same short story (a bad journey, a disastrous meal, a problem at work) three times: to a close friend, to a colleague, and to a senior manager or a client. The facts stay the same; the words change. After each version, point out one word or phrase that would not suit the next listener. Finish by asking which version felt most natural and why.' },
    small: { title: 'Read between the lines', md: 'Each student chooses one polite British phrase from board page 2 or one they know and uses it in a short role play with the next student (a meeting, a dinner, a piece of feedback). The listener must reply to what is really meant, not to the words: *So you think we should change it?* The group decides whether the reply was right. Then repeat with a direct speaker who says the same thing plainly.' },
  },
  homework: { book: 'u5:p2', md: 'Finish lesson 2 of unit 5 if needed, then do lesson 3 (Hereinafter and notwithstanding). Write two short messages about the same piece of bad news (about 80 words each): one to a close friend, informal and with two words from today, and one to a manager, neutral and polite.' },
};
