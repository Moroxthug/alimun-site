// English C2, class 42 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u9:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c42',
  focus: 'By the end every student recognises the straw man, the false dilemma, the slippery slope, ad hominem and begging the question, explains the flaw in their own words, and points it out politely so that the other person can correct it without losing face (*With respect, that isn’t quite what I said*; *Are those really the only two options?*; *I’m not sure one necessarily leads to the other*). The listening goal: follow attitude and purpose in an interview in the format of C2 Proficiency Listening Part 3.',
  tips: [
    'A fallacy is a broken link, not a lie: the facts in it may all be true. Ask students to say what the speaker wants us to conclude, and why it does not follow.',
    'Naming the fallacy aloud (*That’s a straw man!*) usually sounds aggressive and wins nothing. Students should describe the flaw or ask a question that exposes it; the label is for their own thinking.',
    '*Begs the question* is used by most native speakers to mean *raises the question*. Teach both uses, and advise students to write *raises the question* in exams and formal writing to avoid confusion.',
    'For the listening, read the script on board page 4 aloud twice at natural speed and do not show it until the answers are checked. Listen for the moment the speaker corrects herself or tells an anecdote; the answer is usually what the anecdote shows.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Say: *If you don’t support the new stadium, you obviously don’t care about this town.* Ask: *What is wrong with that argument, even if you support the stadium?* Collect the answers in the students’ own words.' },
    { min: 10, title: 'Name the flaw', md: 'Show board page 1. Students match the fallacies with the examples, then tap the words that give the flaw away and explain it without using the name.' },
    { min: 10, title: 'Polite replies', md: 'Show board page 2. Students choose the most effective and polite reply to each remark and say why the other two would fail.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 15, title: 'Exam corner', md: 'Show board page 3 and give students one minute to read the questions. Read the script on board page 4 aloud twice. Check the answers, then show the script and find the words that decide each one.' },
    { min: 5, title: 'Close', md: 'Each student gives the polite reply they found most useful today, ready to use in a real meeting. Set the homework.' },
  ],
  board: [
    { title: 'Name the flaw', blocks: [
      { t: 'ex', kind: 'match', h: 'Match each fallacy with its example.', pairs: [
        ['the straw man', '“So you want children to run wild with no rules at all?” (in reply to: “We should set less homework.”)'],
        ['the false dilemma', '“Either we build the bypass or the town centre dies.”'],
        ['the slippery slope', '“If we let people work from home on Fridays, soon nobody will come to the office at all.”'],
        ['ad hominem', '“She would say that: she has never run a business.”'],
        ['begging the question', '“The policy is fair because it treats everyone justly.”'],
      ] },
      { t: 'ex', kind: 'spot', h: 'Tap the words that show the flaw named at the start.', items: [
        { s: 'Ad hominem: [what would a student know] about running a city?', why: 'The argument is dismissed because of who is making it.' },
        { s: 'False dilemma: you are [either with us or against us].', why: 'Only two options are offered; neutrality and partial agreement disappear.' },
        { s: 'Slippery slope: allow one food stall in the park and [within a year it will be a car park].', why: 'One step is said to lead to a much worse one, with no evidence for the chain.' },
        { s: 'Begging the question: the book is a classic [because it is one of the great works] of its time.', why: 'The reason simply restates the conclusion.' },
      ] },
    ] },
    { title: 'Polite replies', blocks: [
      { t: 'ex', kind: 'choice', h: 'Choose the most effective and polite reply.', items: [
        { q: 'A colleague says: “So you’re saying we should scrap the whole project?”', o: ['With respect, that isn’t quite what I said. I suggested pausing one part of it.', 'That is a straw man fallacy, and you know it.', 'Fine, scrap it, then.'], why: 'Restate your real view calmly; naming the fallacy sounds like an attack.' },
        { q: 'A manager says: “Either we raise prices or we close the shop.”', o: ['Are those really the only two options? We could cut opening hours first.', 'That is obviously a false dilemma.', 'Then close it.'], why: 'A question and a third option expose the false dilemma.' },
        { q: 'A committee member says: “If we allow one exception, everyone will want one.”', o: ['I’m not sure one necessarily leads to the other. Could we set clear criteria?', 'That is a slippery slope, so it is wrong.', 'Everyone wants one anyway.'], why: 'Ask for the missing link and offer a way to control it.' },
        { q: 'A neighbour says: “You only support the new tax because you can afford it.”', o: ['Whatever my reasons, the argument stands or falls on its own. Shall we look at the figures?', 'That is ad hominem, so you lose.', 'And you only oppose it because you are mean.'], why: 'Bring the discussion back to the argument without returning the attack.' },
      ] },
      { t: 'tip', art: 'owl', md: 'A polite reply to a fallacy has two parts: a **soft opening** (*With respect*, *I’m not sure*, *Are those really…?*) and a **way forward** (the real view, a third option, a request for evidence). The second part is what makes the other person listen.' },
    ] },
    { title: 'Exam corner: Listening Part 3', blocks: [
      { t: 'text', md: 'You will hear part of a radio interview with Marta, who has judged school debating competitions for many years. In the exam the interview lasts about four minutes and has five questions; here it is shortened, with three questions. You hear it twice.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Listening Part 3): choose the answer which fits best according to what you hear.', items: [
        { q: 'What does Marta say about students who name fallacies during a debate?', o: ['They are marked down for pointing to a flaw instead of demonstrating it.', 'They are usually mistaken about which fallacy has been committed.', 'They impress the judges more than they impress their opponents.', 'They tend to be the youngest and least experienced speakers.'], why: '*Not because they’re wrong, often they’re right, but because they’ve named the problem instead of showing it.*' },
        { q: 'Why does Marta mention her own first final?', o: ['To show that a stronger case can still be lost by the wrong approach.', 'To explain why she decided to become a judge.', 'To suggest that the judges that day were unfair.', 'To illustrate how nervous young speakers can be.'], why: '*I had the better case… and the judges, quite rightly, gave it to them.* She does not blame the judges.' },
        { q: 'What does Marta suggest about the false dilemma?', o: ['It persuades because it can sound like firm leadership.', 'It is the fallacy students use most often.', 'It is easy to spot once you know its name.', 'It is less damaging than the straw man.'], why: '*It rarely sounds like a fallacy. It sounds like leadership.* Frequency and the straw man are not her point.' },
      ] },
    ] },
    { title: 'Script (your teacher reads this aloud)', blocks: [
      { t: 'dialogue', lines: [
        { who: 'Interviewer', s: 'Marta, you’ve judged school debates for fifteen years. Do students know their fallacies these days?' },
        { who: 'Marta', s: 'They know the names, certainly. Every year a student stands up, says “That’s a slippery slope!” and sits down looking very pleased. And every year the judges mark them down. Not because they’re wrong, often they’re right, but because they’ve named the problem instead of showing it. A label isn’t a reason.' },
        { who: 'Interviewer', s: 'That sounds a little harsh on a sixteen-year-old.' },
        { who: 'Marta', s: 'Perhaps. But I lost my first final in exactly that way, so I speak from experience. I had the better case, I still think so. I spent four minutes telling the other team which fallacies they’d committed, and the judges, quite rightly, gave it to them. They’d argued; I’d only complained.' },
        { who: 'Interviewer', s: 'Is there one fallacy you’d like everyone to be able to spot?' },
        { who: 'Marta', s: 'The false dilemma, without a doubt. The straw man is everywhere, but people do tend to notice when their own view has been twisted. The false dilemma rarely sounds like a fallacy at all. It sounds like leadership: “There are two choices, and I am making the hard one.” The hardness is what persuades, and nobody notices the third option that was never mentioned.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Meeting under pressure', md: 'Play a colleague in a meeting about a plan the student proposes (a new schedule, a budget change, a trip). Use one fallacy in each of your turns: twist their view, offer two options only, predict a disaster, question their motives. The student replies politely each time, without naming the fallacy, and keeps the discussion moving. Afterwards, the student names each fallacy you used and you both choose the reply that worked best.' },
    small: { title: 'Fallacy cards', md: 'Each student secretly receives the name of one fallacy in the chat. In turn, they make a remark about a shared topic (the town’s new stadium, phones in class) using their fallacy. The next student answers politely, without naming it, and the group then guesses which fallacy it was. Rotate until everyone has made a remark and given a reply. In a group of two, partners take three turns each.' },
  },
  homework: { book: 'u9:p2 u9:p3', md: 'Finish lesson 2 of unit 9 if needed, then do lesson 3 (I take your point, but). Find a letter to an editor, a comment online or a short opinion piece with at least two fallacies. Copy the sentences, explain each flaw in your own words in one sentence, and write a polite reply of about 80 words to the writer.' },
};
