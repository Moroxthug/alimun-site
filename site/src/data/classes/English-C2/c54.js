// English C2, class 54 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u12:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c54',
  focus: 'By the end every student says precisely who must act, who may act and who need not, with the right fixed patterns: *it is incumbent on/upon someone to*, *be duty-bound to*, *be under no obligation to*, *be entitled to* (a right), *be at liberty to* (a freedom), *be within your rights to*, *it is not for someone to*, *have no business doing*, *it falls to someone to*. They use these in a discussion of everyday dilemmas with tact (*It is not for me to say*, *I am not at liberty to discuss*), and fill gaps in the format of C2 Proficiency Reading and Use of English Part 2.',
  tips: [
    'Organise the language by the question it answers: *Whose duty is it? Is it a right or just a freedom? Is it their place?* Students then choose the expression by meaning, not by memory.',
    'The small words carry the marks: *incumbent on*, *entitled to*, *at liberty* (no article), *under no obligation*, *not for* + person + *to*, *no business* + *-ing*. Write the patterns on the board as students meet them.',
    '*You must not* forbids; *you are under no obligation to* leaves the choice open. This difference is often wrong in students’ first answers to the dilemmas, so listen for it.',
    'Let the dilemmas be real discussions. Correct the language at the end of each round, not in the middle of an argument.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *If a shop gives you too much change, do you have to return it?* Ask each student to be precise: is it a duty, a choice, or none of your business?' },
    { min: 8, title: 'Duty, rights and freedom', md: 'Show board page 1. Students sort the sentences alone, then explain the difference between the two sentences in *A right or a freedom*.' },
    { min: 10, title: 'The small words', md: 'Show board page 2. Students complete the expressions and fix the mistakes, then say each pattern aloud in a new sentence.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: C2 Proficiency Reading and Use of English Part 2. Six minutes alone, then check spelling and the fixed phrases.' },
    { min: 20, title: 'Activity', md: 'Show board page 4: the dilemmas. Use the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Each student answers the warm-up question again with one expression from today. Set the homework.' },
  ],
  board: [
    { title: 'Duty, rights and freedom', blocks: [
      { t: 'ex', kind: 'sort', h: 'What does each sentence express?', groups: ['A duty', 'No duty', 'A right or a freedom', 'Not their place'], explain: ['groups'], items: [
        { s: 'It is incumbent upon the landlord to repair the roof before winter.', g: 0, why: 'A formal duty that comes with the role.' },
        { s: 'As a doctor, she felt duty-bound to report the injury.', g: 0, why: '*Duty-bound*: obliged by rules or by conscience.' },
        { s: 'You are under no obligation to give a reason for leaving.', g: 1, why: 'The choice is yours: nothing requires it.' },
        { s: 'Every employee is entitled to a written copy of their contract.', g: 2, why: 'A right: something you can claim.' },
        { s: 'Guests are at liberty to use the garden at any time.', g: 2, why: 'A freedom: nothing stops them.' },
        { s: 'It is not for a teacher to tell parents how to vote.', g: 3, why: 'It is not their role.' },
        { s: 'He had no business reading her private messages.', g: 3, why: '*No business* + *-ing*: he had no right at all to do it.' },
      ] },
    ] },
    { title: 'The small words', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the word that completes the expression.', items: [
        { q: 'Residents are entitled ___ object to the plans in writing.', o: ['to', 'for', 'of'], why: '*Entitled to* + infinitive or noun.' },
        { q: 'In the end, it fell ___ the youngest member of the team to break the news.', o: ['to', 'on', 'for'], why: '*It falls to someone to do something*: it becomes their task.' },
        { q: 'I’m afraid I am not ___ liberty to say who made the complaint.', o: ['at', 'in', 'under'], why: '*At liberty*, with no article: how officials decline to reveal something.' },
        { q: 'Journalists have no business ___ judgement before the trial has even begun.', o: ['passing', 'to pass', 'pass'], why: '*Have no business* + *-ing*.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Staff are [entitled for] a break of at least thirty minutes.', a: ['entitled to'], why: '*Entitled to*, never *for*.' },
        { s: 'It is not for the police [deciding] who is guilty.', a: ['to decide'], why: '*Not for* + person + *to*-infinitive.' },
        { s: 'Anyone is [in liberty] to quote from the report.', a: ['at liberty'], why: 'The fixed phrase is *at liberty*.' },
        { s: 'It is [incumbent to] the employer to provide proper training.', a: ['incumbent on', 'incumbent upon'], why: '*Incumbent on* or *upon* someone.' },
        { s: 'She was [inside] her rights to cancel the contract, even if it caused problems.', a: ['within'], why: '*Within your rights*: allowed, even if unwelcome.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 2', blocks: [
      { t: 'ex', kind: 'gap', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 2): read the text about jury service. Write one word in each gap.', items: [
        { q: 'Jury service is one of the few civic duties that citizens are not ___ liberty to refuse.', a: ['at'], why: '*At liberty to*: free to.' },
        { q: 'It falls ___ twelve ordinary people to decide whether the accused is guilty.', a: ['to'], why: '*It falls to someone to do something*.' },
        { q: 'Jurors are under ___ obligation to explain their verdict to anyone.', a: ['no'], why: '*Under no obligation to*.' },
        { q: 'Indeed, in many countries they are forbidden ___ discussing it, even with their families.', a: ['from'], why: '*Forbid someone from doing* (or *forbid someone to do*); here *-ing* follows, so *from*.' },
        { q: 'It is not ___ the judge to tell them what to conclude about the facts.', a: ['for'], why: '*It is not for* + person + *to*-infinitive.' },
        { q: 'Jurors are, however, entitled ___ ask the judge to explain the law.', a: ['to'], why: '*Entitled to* + infinitive: a right.' },
        { q: 'Critics argue that long fraud trials ask too ___ of people with no legal training.', a: ['much'], why: '*Ask too much of someone*: expect more than they can give.' },
        { q: 'Yet ___ all its flaws, few people would wish to see the jury abolished.', a: ['for', 'despite'], why: '*For all its flaws* = in spite of them.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 2** read the whole sentence before you write: *forbidden ___ discussing* needs *from* because of the *-ing* after the gap, and *Yet ___ all its flaws* needs a concession. Fixed phrases with *for*, *at* and *no* are favourites.' },
    ] },
    { title: 'Dilemmas', blocks: [
      { t: 'text', md: '**One.** A close friend asks you for a reference for a job you are fairly sure they are not suited to.\n\n**Two.** You discover that a colleague has been doing paid work for another company during office hours.\n\n**Three.** Your neighbour’s teenage son is selling homework answers to other pupils online.\n\n**Four.** As treasurer of a sports club, you notice that the chair has claimed expenses for a trip that, as far as you know, never happened.\n\nFor each one: *Whose duty is it to act? What are you entitled to do, and what are you under no obligation to do? What is not your place?*' },
      { t: 'tip', art: 'owl', md: 'Use at least five expressions from today, and decline tactfully when a judgement is not yours to make: *It is not for me to say whether…*, *I would not feel at liberty to…*' },
    ] },
  ],
  activities: {
    one: { title: 'Whose duty?', md: 'Take the dilemmas on board page 4 one at a time. For the first two, you play the other person (the friend who wants the reference; the colleague with the second job) and the student must explain, tactfully and precisely, what they will and will not do and why. For the last two, discuss as equals: the student argues one position, you take the other. Keep a list of the expressions the student uses; at the end, go through the ones they avoided and ask for one sentence with each.' },
    small: { title: 'The ethics committee', md: 'Pairs (or threes) take one dilemma each from board page 4 and have four minutes to agree an answer to the three questions. Each pair then presents its case to the others, who act as a committee and must challenge it with at least one question (*But surely it is incumbent on you to…?*). After each presentation, the committee says whether it agrees. Finish by voting on the hardest dilemma and discussing it together for three minutes.' },
  },
  homework: { book: 'u12:p1', md: 'Finish lesson 1 of unit 12 if needed, then do lesson 2 (Were we to accept this). Choose one dilemma from board page 4 and write about 150 words on what you would do and why, with at least five expressions from today, used with the right small words.' },
};
