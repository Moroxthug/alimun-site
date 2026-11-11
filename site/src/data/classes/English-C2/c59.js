// English C2, class 59 (docs/LESSONS_PLAN.md, L6). Exam practice: C2 Proficiency Listening, all four parts, with the language
// and topics of units 1 to 12. The teacher reads the scripts aloud from the board. Draft for the owner's review.
export const LESSON = {
  id: 'c59',
  focus: 'By the end of the class every student knows the four parts of C2 Proficiency Listening, has tried each of them with scripts the teacher reads aloud, and has a method for each: in Part 1, listen for what speakers mean, feel and imply; in Part 2, predict the kind of word and write exactly what you hear; in Part 3, follow a speaker’s view as it develops and reject each wrong option for a reason; in Part 4, keep both tasks in mind and listen for paraphrase. The texts recycle units 1 to 12: irony and understatement, varieties of English, plain English, debate and fallacies, negotiation, science reporting and ethics. Each student leaves knowing which part costs them most marks and why.',
  tips: [
    'Read each script aloud twice, as in the exam, at a natural speed and with natural intonation: irony and understatement in Part 1 live in the voice. Give students about 30 seconds to read the questions before the first reading, and do not show the script pages until the answers are checked.',
    'At C2 the wrong options are almost always things the speakers **mention**. When you check, show on the script page where each wrong option appears and why it is not the answer: this is the most useful five minutes of the class.',
    'In Part 2 the answer is the word or short phrase the speaker says, spelled correctly, and it must fit the sentence grammatically. Speakers often mention a wrong answer first and correct it; point out each of these traps in the script.',
    'In Part 4 students can do both tasks on each listening, or Task One on the first listening and Task Two on the second. Let each student try the way they prefer and ask afterwards which worked.',
    'Every task here is shortened so that all four parts fit in one class. Say so, and tell students that the full paper lasts about 40 minutes with 30 questions.',
  ],
  plan: [
    { min: 4, title: 'The paper', md: 'Show board page 1. Go through the four parts and their methods in three minutes, and ask each student which part they expect to find hardest.' },
    { min: 12, title: 'Listening Part 1', md: 'Students read the questions on board page 2. Read the three extracts from board page 6 aloud twice, one extract at a time. Check, then show where each wrong option was mentioned.' },
    { min: 10, title: 'Listening Part 2', md: 'Students read the six sentences on board page 3 and predict the kind of word for each gap. Read the talk on board page 6 twice. Check meaning, grammar and spelling.' },
    { min: 11, title: 'Listening Part 3', md: 'Students read the questions on board page 4. Read the interview on board page 7 twice, with a different voice for each speaker if you can. Check, asking students to give a reason for rejecting each wrong option.' },
    { min: 10, title: 'Listening Part 4', md: 'Students read both tasks on board page 5. Read the three speakers on board page 7 twice. Check both tasks together.' },
    { min: 9, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 4, title: 'Close', md: 'Each student says which part cost them most marks and one thing they will do differently next time. Set the homework.' },
  ],
  board: [
    { title: 'Listening at a glance', blocks: [
      { t: 'table', caption: 'C2 Proficiency Listening: four parts, about 40 minutes, each recording heard twice', explain: ['head', 'col1', 'col2'], head: ['Part', 'What you hear and do', 'Method'], rows: [
        ['Part 1', 'three short extracts; two multiple-choice questions on each, three options', 'listen for what the speakers mean, feel or imply, not only the words they use'],
        ['Part 2', 'one speaker for about three minutes; complete nine sentences with a word or short phrase', 'predict the kind of word, write the exact words you hear and check the spelling'],
        ['Part 3', 'an interview or discussion; five multiple-choice questions, four options', 'the questions follow the recording; reject each wrong option for a reason'],
        ['Part 4', 'five short monologues on one theme; two matching tasks, each with eight options', 'read both lists first, think of paraphrases and keep both tasks in mind'],
      ] },
      { t: 'tip', art: 'owl', md: 'In every part, use the time before the recording to read the questions and underline **what each one asks**: an opinion, a feeling, a purpose, a reason, a point of agreement. Knowing what you are listening for is half the task.' },
    ] },
    { title: 'Listening Part 1: three short extracts', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Listening Part 1): you will hear three different extracts. For each question, choose the answer which fits best according to what you hear.', items: [
        { q: 'Extract one. You hear two researchers talking about a press release. What is the woman’s main concern?', o: ['An exaggerated claim is hard to correct once it is published.', 'The study itself was badly designed.', 'The press office ignored the researcher’s summary.'], why: '*Once it’s out, no correction ever travels as far.* She does not criticise the design, and the man says the summary was not cautious either.' },
        { q: 'Extract one. What does the man suggest?', o: ['Researchers share responsibility for the exaggeration.', 'The headline was a fair summary of the study.', 'The press office should stop writing headlines.'], why: '*Tom’s summary wasn’t exactly cautious either… I’d rather we fixed how we write summaries.*' },
        { q: 'Extract two. You hear two colleagues talking about a negotiation. How does the woman feel about the outcome?', o: ['satisfied enough, given the alternative', 'delighted with the price they obtained', 'annoyed that the talks broke down'], why: '*I’d rather meet them halfway than walk away with nothing… isn’t a bad consolation.* Understatement, not delight.' },
        { q: 'Extract two. What does the man regret?', o: ['not preparing a demand of their own in exchange', 'agreeing to a lower price', 'the length of the negotiation'], why: '*I just wish we’d seen it coming; we could have asked for something in return.*' },
        { q: 'Extract three. You hear a critic talking about a theatre production on the radio. What is his opinion of the production?', o: ['He is largely unimpressed by it.', 'He admires the set and the acting.', 'He recommends it warmly.'], why: 'Faint praise and irony: the set is *magnificent*, the interval *a mercy*, the actor is *having a wonderful time*, but not sharing it with the audience.' },
        { q: 'Extract three. What does he imply about the play itself?', o: ['It is still good despite this production.', 'It was never really funny.', 'It should not have been revived.'], why: '*The play is still funny; it’s survived worse than this. Just not by much.* The play survives; the production is the problem.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Irony and understatement (unit 3) are common in Part 1. Praise for the **set**, the **interval** or the **coffee** often means there was little else to praise. Ask yourself what the speaker is **avoiding** saying.' },
    ] },
    { title: 'Listening Part 2: sentence completion', blocks: [
      { t: 'ex', kind: 'gap', h: 'In the format of the C2 Proficiency exam (Listening Part 2): you will hear a talk by a woman who rewrites official letters in plain English. Complete the sentences with a word or short phrase. (Shortened: six sentences instead of nine.)', items: [
        { q: 'The speaker first became interested in plain English while working as a hospital ___.', a: ['receptionist'], why: 'She says *not as a lawyer but as a hospital receptionist*. *Lawyer* is the trap.' },
        { q: 'The council’s old parking letter used the word ___ eleven times.', a: ['notwithstanding'], why: '*Notwithstanding, eleven times in one page.* Spelling counts.' },
        { q: 'After the letters were rewritten, the number of ___ fell by about a third.', a: ['complaints'], why: '*We expected fewer appeals; what actually fell was complaints.* Appeals *barely changed*.' },
        { q: 'The council’s lawyers worried that the new letters would be less ___.', a: ['precise'], why: '*Their worry was that plain words would be less precise.*' },
        { q: 'She tests every draft by reading it aloud to her ___.', a: ['neighbour', 'neighbor'], why: '*Not my colleagues, who know too much, but my neighbour.*' },
        { q: 'Her most useful change was to move the ___ to the first sentence.', a: ['deadline'], why: '*Move the deadline to the first sentence; in the old letters it was buried in paragraph four.*' },
      ] },
      { t: 'tip', art: 'owl', md: 'Read the words **after** each gap as well as before it: *the number of ___ fell* needs a plural noun. If you hear two possible answers, the speaker usually rejects one of them (*we expected…; what actually…*).' },
    ] },
    { title: 'Listening Part 3: an interview', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Listening Part 3): you will hear an interview with Selma Varga, who coaches school debating teams. Choose the answer which fits best according to what you hear. (Shortened: four questions instead of five.)', items: [
        { q: 'How does Selma respond to the criticism that debating teaches students to argue for views they do not hold?', o: ['She partly accepts it but thinks it overlooks a benefit.', 'She rejects it as entirely unfounded.', 'She agrees that it is a serious weakness.', 'She says it applies only to younger students.'], why: '*There’s something to it, I’ll admit… But I’ve come to think it gets things the wrong way round.* A concession, then a rejection.' },
        { q: 'According to Selma, what is hardest for students to learn?', o: ['to present an opponent’s case fairly', 'to recognise common fallacies', 'to speak confidently in public', 'to research a topic quickly'], why: '*The patience to state the other side’s case so well that they would accept your summary.* Fallacies are learned *in an afternoon*.' },
        { q: 'What surprised Selma about debating online?', o: ['Students listened more carefully to each other.', 'Students became more aggressive.', 'The quality of the arguments declined.', 'Students preferred it to meeting in person.'], why: '*The obvious answer would be that it’s made things worse… Actually the quality of listening went up.*' },
        { q: 'What does Selma value most in a debater?', o: ['the honesty to admit a point they cannot answer', 'the ability to win competitions', 'a talent for persuading the judges', 'a wide knowledge of fallacies'], why: '*Takes on a point they can’t answer, and says so. That takes a kind of courage nobody gives prizes for.*' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 3, speakers often give **the obvious view first** and then their own (*The obvious answer would be… Actually…*). The option that matches the obvious view is usually a trap. Wait for the turn in the sentence.' },
    ] },
    { title: 'Listening Part 4: three speakers', blocks: [
      { t: 'text', md: 'You will hear three people who moved to another English-speaking country. In the exam there are five speakers, and each task has a list of eight options for all of them. Here there are three speakers, with five options for each. Answer both tasks while you listen.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Listening Part 4). Task One: what was each speaker’s main reason for moving? Task Two: what has each speaker found hardest to adjust to? (Shortened: three speakers, five options for each.)', items: [
        { q: 'Speaker one, Task One: main reason for moving', o: ['to be near a family member', 'a better salary', 'a job offer from a former colleague', 'the climate', 'a place on a course'], why: '*The salary was better, I won’t pretend otherwise. But the real reason was my sister.*' },
        { q: 'Speaker one, Task Two: hardest to adjust to', o: ['the way irony was understood', 'the cost of living', 'different spellings', 'making friends', 'the working hours'], why: '*People took my jokes literally.*' },
        { q: 'Speaker two, Task One: main reason for moving', o: ['a place on a course', 'to be near a family member', 'a better salary', 'a partner’s new job', 'the climate'], why: '*I’d been offered a place on a master’s course, and that settled it.*' },
        { q: 'Speaker two, Task Two: hardest to adjust to', o: ['unwritten rules at work', 'different spellings', 'the weather', 'the food', 'the accent'], why: '*There were rules about who you could email directly… and nobody wrote them down.* She expected the spelling and was ready for it.' },
        { q: 'Speaker three, Task One: main reason for moving', o: ['the climate', 'a better salary', 'a place on a course', 'to be near a family member', 'a job offer'], why: '*The winters at home were wearing me down.*' },
        { q: 'Speaker three, Task Two: hardest to adjust to', o: ['open talk about money', 'the accent', 'unwritten rules at work', 'the way irony was understood', 'the food'], why: '*The accent took me a month… The thing I still haven’t got used to is how direct the questions are about money.*' },
      ] },
    ] },
    { title: 'Scripts for Parts 1 and 2 (read aloud; show after checking)', blocks: [
      { t: 'dialogue', title: 'Part 1, extract one', lines: [
        { who: 'Ines', s: 'Have you seen what the press office did with Tom’s study? “Coffee protects the brain.” He found a weak association in a few hundred older people.' },
        { who: 'Marcus', s: 'I saw. To be fair to them, Tom’s summary wasn’t exactly cautious either. He used the word “striking” twice.' },
        { who: 'Ines', s: 'Striking for a statistician, maybe. But a headline is a different animal. Once it’s out, no correction ever travels as far.' },
        { who: 'Marcus', s: 'True. Still, I’d rather we fixed how we write summaries than blamed the press office every time.' },
      ] },
      { t: 'dialogue', title: 'Part 1, extract two', lines: [
        { who: 'Oskar', s: 'So, did they accept?' },
        { who: 'Freya', s: 'In a manner of speaking. They’ll take the lower price, provided we sign for three years rather than two.' },
        { who: 'Oskar', s: 'That’s not quite what we went in for.' },
        { who: 'Freya', s: 'No, but I’d rather meet them halfway than walk away with nothing. And frankly, three years of guaranteed orders isn’t a bad consolation.' },
        { who: 'Oskar', s: 'I suppose not. I just wish we’d seen it coming; we could have asked for something in return.' },
      ] },
      { t: 'dialogue', title: 'Part 1, extract three', lines: [
        { who: 'Presenter', s: 'Hal, the new production of that old comedy. Worth a trip to the theatre?' },
        { who: 'Hal', s: 'Well, the set is magnificent. You could live in it. And the interval is generous, which, on this occasion, is a mercy.' },
        { who: 'Presenter', s: 'Ouch. And the leading actor?' },
        { who: 'Hal', s: 'Oh, he’s clearly having a wonderful time. I only wish he’d shared some of it with the audience. Look, the play is still funny; it’s survived worse than this. Just not by much.' },
      ] },
      { t: 'reading', title: 'Part 2: the talk', md: 'I started out not as a lawyer but as a hospital receptionist, and a good part of my job was explaining to patients what the letters they had been sent actually meant. That is where my interest in plain English began.\n\nYears later the council asked me to look at its parking letters. The old one used the word *notwithstanding* eleven times in a single page. We rewrote it in short sentences, and then we waited. We expected fewer appeals; what actually fell was complaints, by about a third. Appeals barely changed, which tells you people had understood the old letter well enough to fight it, just not well enough to stop being angry.\n\nThe council’s lawyers were not delighted at first. Their worry was that plain words would be less precise, and it is a fair worry; a vague letter helps nobody. But plain is not the same as vague, and in most cases the long word was hiding the meaning, not protecting it.\n\nI test every draft in the same way. I read it aloud, not to my colleagues, who know too much, but to my neighbour. If she has to ask a question, the letter is not finished.\n\nIf I could make only one change to any official letter, it would be this: move the deadline to the first sentence. In the old letters it was buried in paragraph four.' },
    ] },
    { title: 'Scripts for Parts 3 and 4 (read aloud; show after checking)', blocks: [
      { t: 'dialogue', title: 'Part 3: the interview', lines: [
        { who: 'Interviewer', s: 'Selma, people often say debating teaches young people to argue for things they don’t believe. Is that a fair criticism?' },
        { who: 'Selma', s: 'There’s something to it, I’ll admit. When I started coaching, I worried about it myself. But I’ve come to think it gets things the wrong way round. Arguing the side you disagree with is the quickest way I know to discover why sensible people hold it. The students who end up with contempt for their opponents are, in my experience, the ones who never had to argue the other side.' },
        { who: 'Interviewer', s: 'What do you find hardest to teach?' },
        { who: 'Selma', s: 'Not the techniques. Teenagers pick up the names of fallacies in an afternoon; they love shouting “straw man!” across the room. What takes years is the patience to state the other side’s case so well that they would accept your summary. Most adults can’t do it either, frankly.' },
        { who: 'Interviewer', s: 'Has the move to debating online changed anything?' },
        { who: 'Selma', s: 'The obvious answer would be that it’s made things worse, and I expected that. Actually the quality of listening went up. On a screen you can’t rely on charm or volume, so students had to deal with what had actually been said. What we lost was the informal part, the arguing over sandwiches afterwards, which is where minds really change.' },
        { who: 'Interviewer', s: 'And the competitions themselves? Do they still matter?' },
        { who: 'Selma', s: 'Less than parents think. I’d happily scrap the trophies. What I wouldn’t scrap is the moment a student stands up, takes on a point they can’t answer, and says so. That takes a kind of courage nobody gives prizes for.' },
      ] },
      { t: 'reading', title: 'Part 4: three speakers', md: 'Speaker one. People assume I moved for the money, and the salary was better, I won’t pretend otherwise. But the real reason was my sister; she’d just had twins and I wanted to be near her. What caught me out was the humour. At home, if a colleague calls your idea “brave”, you know exactly where you stand. Here people took my jokes literally, and for a while I think they found me rather rude.\n\nSpeaker two. I’d been offered a place on a master’s course, and that settled it. The spelling I’d been warned about, colour and color and the rest, so I was ready for that. What I hadn’t expected was the formality at work. Everyone was on first-name terms, which sounded relaxed, but underneath there were rules about who you could email directly and who you had to go through, and nobody wrote them down.\n\nSpeaker three. Honestly? The winters at home were wearing me down, and a friend said, come and try a year out here. That was twelve years ago. The accent took me a month; you tune in faster than you’d think. The thing I still haven’t got used to is how direct the questions are about money. What do you earn, what did the house cost. At home that would end a friendship.' },
    ] },
  ],
  activities: {
    one: { title: 'Explain the trap', md: 'After checking each part, open the script page and ask the student to find where each wrong option was mentioned and say in one sentence why it is not the answer. Then swap roles: the student reads extract three of Part 1 aloud with the ironic tone it needs, and you answer while thinking aloud, so the student hears how a strong listener rejects options. Finish by agreeing which part needs most practice and which method the student will use for it.' },
    small: { title: 'Write the distractors', md: 'In pairs, or in a three, students take one script from board page 6 or 7 and write one new multiple-choice question about it with one right answer and two wrong options that the speakers mention. One student reads the script aloud for the others, who answer the new question and say which trap nearly caught them. In a group of two, the students swap scripts with each other and you read the script aloud.' },
  },
  homework: { book: 'u13:p1', md: 'Choose a radio interview or podcast of three to five minutes in English and listen twice. Write two questions about it in the style of Part 1, each with one right answer and two wrong options the speakers mention. Then do lesson 1 of unit 13 in the book (Soaring, plummeting and levelling off).' },
};
