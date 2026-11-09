// English C2, class 57 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u12:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c57',
  focus: 'By the end every student follows a philosopher’s argument paragraph by paragraph and can say what the writer is doing at each turn: conceding part of a criticism, rejecting it as beside the point, raising a doubt, parting company with others, adding a limitation, giving a tentative view. They answer multiple-choice questions on a new essay in the format of C2 Proficiency Reading and Use of English Part 5 and use the phrases of the essay (*there is something to this*, *precisely the point*, *different in kind*, *mistake a feeling for a reason*) in their own argument about a dilemma.',
  tips: [
    'Students have read the runaway tram essay in the book. Do not reteach it: start from the writer’s moves, then give them a new text where the same moves appear in a different order.',
    'Part 5 attitude questions punish options that are too strong. When a student chooses an answer, ask them to quote the hedge that makes it right (*a little too comfortable*, *rather more demanding*) and the word that makes a wrong option too strong (*entirely*, *proves*, *always*).',
    'The questions follow the order of the text. Ask students to mark where each answer lies before they choose; if two answers come from the same sentence, one of them is probably wrong.',
    'Keep the discussion on the reasoning, not on the students’ own moral choices. Nobody should feel judged for saying they would or would not lie, push or report.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Is it ever right to lie to protect someone? Give one case where you would, and one where you would not.* Each student answers in two or three sentences. Ask the others what exactly the difference between the two cases is.' },
    { min: 8, title: 'The writer’s moves', md: 'Show board page 1. Students choose the phrase that completes each move and say what the writer is doing with it: conceding, rejecting, doubting or limiting.' },
    { min: 18, title: 'Exam corner', md: 'Show board page 2: C2 Proficiency Reading and Use of English Part 5, shortened. Students read the essay alone in about eight minutes, answer the four questions, then compare and quote the words that decide each answer.' },
    { min: 9, title: 'The language of the argument', md: 'Show board page 3. Students complete the sentences from the bank, then make one sentence of their own with two of the phrases.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below. The questions on board page 4 can start the discussion.' },
    { min: 5, title: 'Close', md: 'Each student finishes the sentence: *The difference between the two cases I care about is…* Set the homework.' },
  ],
  board: [
    { title: 'The writer’s moves', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the word that completes the move.', items: [
        { q: 'There is ___ to this objection, but it misses what the example is for.', o: ['something', 'anything', 'nothing'], why: '*There is something to this*: a partial concession before a rejection.' },
        { q: 'Whether that instinct can be trusted is another ___.', o: ['matter', 'question of fact', 'issue entirely'], why: 'The fixed phrase *is another matter* raises a doubt without settling it.' },
        { q: 'On this point I part ___ with most of the critics.', o: ['company', 'ways', 'sides'], why: '*Part company with* someone: disagree with them, usually after agreeing on something.' },
        { q: 'Nor should we ___ the fact that the people in the story know exactly what will happen.', o: ['overlook', 'overcome', 'oversee'], why: '*Nor should we overlook*: adds a further limitation of the argument.' },
        { q: 'The case is simplified, but its simplicity is ___ the point.', o: ['precisely', 'merely', 'hardly'], why: '*Precisely the point*: the feature the critic attacks is the reason the example works.' },
      ] },
      { t: 'tip', art: 'owl', md: 'A careful writer often **concedes before rejecting**: *There is something to this. But…* In Part 5, a question about the writer’s attitude to critics is rarely answered by *agrees* or *dismisses*; look for options such as *partly sympathetic* or *accepts the point but not the conclusion*.' },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 5', blocks: [
      { t: 'reading', title: 'The visitor at the door', md: 'There is a puzzle that every student of ethics meets sooner or later. A friend, pursued by someone who means him harm, has taken refuge in your house. There is a knock. The pursuer asks, politely enough, whether your friend is inside. May you lie?\n\nAlmost everyone says yes, and says it with some impatience, as though the question were a trick. For many teachers that is the end of the matter: the case is wheeled out to show that the rule against lying has exceptions, and then wheeled away again. I have always found this a little too comfortable. That the rule bends here is hardly news; nobody seriously defends telling the truth to a would-be murderer. What the case is good for is something less obvious.\n\nConsider what we are actually doing when we lie at the door. We are not weighing one small harm, a falsehood, against a large one, a death, in the way a shopkeeper weighs goods on a scale. We are deciding that the person on the step has, by his own intentions, given up the claim he would normally have on our honesty. The lie is not so much an exception to our respect for him as a judgement about what that respect still requires.\n\nPut this way, the case becomes rather more demanding. It does not license a lie whenever the consequences look favourable; were it to do so, we would have to accept that a doctor may deceive a patient for her own good, a conclusion most of us would resist. It asks instead what we owe to the person in front of us, and when, if ever, that debt is cancelled.\n\nNone of this makes the answer at the door any less obvious. But obvious answers can rest on unexamined reasons, and it is the reasons, not the answer, that we carry with us into harder cases.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 5): read the essay and choose the answer which fits best according to the text. (Shortened: a shorter text and four questions instead of six.)', items: [
        { q: 'In the second paragraph, the writer suggests that the usual classroom use of the case', o: ['treats the question as settled too quickly', 'deliberately misleads students', 'rests on a misunderstanding of the rule', 'makes the problem harder than it is'], why: '*For many teachers that is the end of the matter… I have always found this a little too comfortable.* He does not say the teachers are wrong about the answer.' },
        { q: 'The comparison with a shopkeeper is used to reject the idea that', o: ['lying at the door is a simple calculation of harms', 'the pursuer deserves no respect at all', 'honesty can be bought and sold', 'small lies are always acceptable'], why: '*We are not weighing one small harm… against a large one… in the way a shopkeeper weighs goods.*' },
        { q: 'Why does the writer mention a doctor who deceives a patient?', o: ['To show where a reading based only on consequences would lead.', 'To give an example of a lie that is clearly justified.', 'To argue that doctors should be more honest with patients.', 'To suggest that the case at the door is unrealistic.'], why: '*Were it to do so, we would have to accept that a doctor may deceive a patient… a conclusion most of us would resist.* The doctor is the unwelcome consequence of the view he rejects.' },
        { q: 'In the final paragraph, the writer’s attitude is best described as', o: ['accepting the usual answer while questioning how it is reached', 'uncertain whether lying at the door is right', 'dismissive of colleagues who teach the case', 'convinced that the case settles harder dilemmas'], why: '*None of this makes the answer… any less obvious. But obvious answers can rest on unexamined reasons.* The other options are either too strong or contradict the text.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 5** you have six questions with four options each, in the order of the text. Before you look at the options, say in a few words what the paragraph is doing; then choose the option that matches **your** summary, not the one that repeats the most words from the text.' },
    ] },
    { title: 'The language of the argument', blocks: [
      { t: 'ex', kind: 'bank', h: 'Complete each sentence with a word from the bank. Two words are not needed.', extra: ['degree', 'reason'], items: [
        { q: 'Breaking a promise to save a life strikes most people as different in ___ from breaking one for convenience.', a: 'kind', why: '*Different in kind*: a different type of act, not just more or less of the same thing.' },
        { q: 'It is easy to mistake a strong feeling ___ a good argument.', a: 'for', why: '*Mistake A for B*: wrongly take one thing to be another.' },
        { q: 'That the example is artificial is ___ the point: it isolates one question.', a: 'precisely', why: '*Precisely the point*: the criticism names the very feature that makes it useful.' },
        { q: 'Here I part ___ with those who treat our intuitions as evidence.', a: 'company', why: '*Part company with*: disagree, after travelling some way together.' },
        { q: 'Whether the public would accept such a rule is another ___.', a: 'matter', why: '*Is another matter*: a doubt the writer leaves open.' },
      ] },
    ] },
    { title: 'Talk it through', blocks: [
      { t: 'text', md: '*A shop assistant gives you too much change. A cash machine gives you too much money. Is keeping the money in both cases the same act?*\n\n*Is it worse to cause harm or to allow harm that you could have prevented?*\n\n*Do thought experiments teach us anything about real decisions, or only about how we react to stories?*' },
      { t: 'examples', items: [
        { s: '**There is something to** the idea that the cases are the same, **but** a person is not a machine.', n: 'Concede, then reject.' },
        { s: '**What exactly is the difference?** In one case somebody will be blamed for the mistake.', n: 'The habit of mind the essay recommends.' },
        { s: '**Whether that difference ought to matter is another matter.**', n: 'Leaving a doubt open.' },
        { s: '**I suspect** most of us **mistake** discomfort **for** a moral reason.', n: 'A tentative view.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Defend the example', md: 'The student takes the side of the essay writer, and you play a sceptical colleague who thinks thought experiments are useless. Raise three objections in turn (they are unrealistic, they ignore uncertainty, they only measure feelings). For each one the student must concede part of it, then reject or limit it, using the phrases on board pages 1 and 3. Note the strongest sentence and one that was too blunt, and upgrade the blunt one together.' },
    small: { title: 'Two cases, one difference', md: 'In pairs, students invent two short versions of the same dilemma that feel different (for example, finding a wallet in the street and finding one in a friend’s house). Each pair tells both versions to the others, who must name exactly what the difference is and say whether it ought to matter, conceding before they disagree. In a group of two, the students do this together and you play the listener who asks *What exactly is the difference?*' },
  },
  homework: { book: 'u12:p4', md: 'Finish lesson 4 of unit 12 in the book if needed. Then write about 200 words on the question *Is it worse to cause harm or to allow it?* Begin by conceding something to the view you reject, and use at least three of the phrases from this class (*there is something to this*, *precisely the point*, *different in kind*, *is another matter*, *mistake a feeling for a reason*).' },
};
