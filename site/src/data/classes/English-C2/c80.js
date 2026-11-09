// English C2, class 80 (docs/LESSONS_PLAN.md, L6). Final check: the end of the English course, all 16 units (no level after C2, so no gate, no pass or fail). Draft for the owner's review.
export const LESSON = {
  id: 'c80',
  focus: 'The last class of the whole English course. By the end every student has done the final check: a written check on the board across all 16 units of C2 and a speaking check, with results given privately and a short report from the teacher on strengths, the papers of C2 Proficiency they are ready for and what to keep working on. There is no pass or fail and no level after C2. The class closes the course: how to keep improving after C2 and, for students who wish, how to book the real exam independently.',
  tips: [
    'Tell students at the start that this is a check, not a test with a pass mark: its purpose is to show each of them where they stand. This keeps stress down and gives a truer picture.',
    'The report for each student has three parts: what they do well, which papers of C2 Proficiency they are ready to take on the evidence of this check, the practice exam and their course work, and what to keep working on, with one concrete habit. Base it on what you have seen, never on a single score.',
    'Give every result in private, never in front of the others: start with a strength, then where they stand, then the plan. Students who scored lower than they hoped need the plan most.',
    'Never say *you will pass*. Say *you are ready to take the exam*, or *you are ready for Reading and Writing; give Listening another two months*, when the work shows it. Alimun prepares students in the format of C2 Proficiency; it does not award the qualification.',
    'If a student wants to take the real exam, explain that they book it themselves at an authorised exam centre, which sets the dates, fees and rules on the day, and that they should check these well in advance.',
    'Note each student’s result and report in your class notes. This is the end of their English course with you: leave time to thank them and to hear what they want to do with their English next.',
  ],
  plan: [
    { min: 3, title: 'Instructions', md: 'Explain the written part, the speaking part, that results and reports are private and that there is no pass or fail.' },
    { min: 22, title: 'Written check', md: 'Show board pages 1, 2 and 3. Students answer alone with “Everyone solves this” for each page, about seven minutes each. Do not reveal yet.' },
    { min: 18, title: 'Speaking check', md: 'Use the activity for your class size below, with the questions on board page 4.' },
    { min: 7, title: 'Answers', md: 'Reveal the written answers. Students count their score per page; each page covers different units, so they can see where their strengths lie.' },
    { min: 10, title: 'After C2 and close', md: 'Show board page 5. Talk through how to keep improving after C2 and, for those who wish, how to book the real exam. Each student says one thing they will do with their English next. Thank the class: this is the end of the English course. Results and reports follow privately.' },
  ],
  board: [
    { title: 'Written check: units 1 to 8', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right word or form.', items: [
        { q: 'She ___ at the letter for a full minute, unable to believe what it said.', o: ['stared', 'glanced', 'glimpsed'], why: 'Unit 1: *stare* is to look for a long time; *glance* and *glimpse* are brief.' },
        { q: 'Both the café and the bookshop closed last year; ___ had been open for half a century.', o: ['the latter', 'the latest', 'the later'], why: 'Unit 2: *the latter* refers to the second of two things mentioned.' },
        { q: 'In the end he had to bite the ___ and tell his parents he had left university.', o: ['bullet', 'nettle', 'dust'], why: 'Unit 3: *bite the bullet*; *grasp the nettle* is the other idiom, and *bite the dust* means fail.' },
        { q: 'The new policy has, ___, shortened waiting times, although the figures are disputed.', o: ['arguably', 'undoubtedly', 'unquestionably'], why: 'Unit 4: a disputed claim needs a hedge; the other two are boosters.' },
        { q: 'In American English you walk on the ___; in British English, on the pavement.', o: ['sidewalk', 'kerb', 'footway'], why: 'Unit 5: *sidewalk* (American) and *pavement* (British).' },
        { q: 'The committee insisted that he ___ the report by Friday.', o: ['submit', 'submits', 'will submit'], why: 'Unit 6: the mandative subjunctive uses the base form.' },
        { q: '“We do not live to work; we work to live” is an example of ___.', o: ['chiasmus', 'euphemism', 'understatement'], why: 'Unit 7: the words are repeated in reverse order.' },
        { q: 'The story is told by an ___ narrator, so the reader learns not to trust his account.', o: ['unreliable', 'unbelieving', 'untrusting'], why: 'Unit 8: the term is *unreliable narrator*.' },
      ] },
    ] },
    { title: 'Written check: units 9 to 16', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Granted, the plan is expensive. That said, it [is not following] that we should abandon it.', a: ['does not follow', 'doesn’t follow'], why: 'Unit 9: the fixed phrase *it does not follow that*.' },
        { s: 'We would be prepared to lower the price, provided that you [will order] at least five hundred units.', a: ['order'], why: 'Unit 10: no *will* after *provided that*.' },
        { s: 'The survey shows a [modest increasing] in the number of people cycling to work.', a: ['modest increase'], why: 'Unit 11: *increase* is the noun after an adjective.' },
        { s: 'It is incumbent [for] the board to explain its decision.', a: ['on', 'upon'], why: 'Unit 12: *be incumbent on* someone.' },
        { s: 'House prices in the area have risen [tenfolds] in twenty years.', a: ['tenfold'], why: 'Unit 13: *tenfold* has no plural.' },
        { s: '[Nowhere this is] more evident than in the way families share meals.', a: ['Nowhere is this'], why: 'Unit 14: inversion after a fronted negative adverbial.' },
        { s: 'I am [actually] living in Rome, but I move to Berlin next month.', a: ['currently', 'at the moment', 'at present'], why: 'Unit 15: a false friend; *actually* means *in fact*.' },
        { s: 'Much [though] I admire her, I cannot support her plan.', a: ['as'], why: 'Unit 16: *Much as* = although.' },
      ] },
    ] },
    { title: 'Written check: transformations', blocks: [
      { t: 'ex', kind: 'transform', h: 'Complete the second sentence so that it has a similar meaning to the first. Do not change the word given. Use between three and eight words, including the word given.', items: [
        { q: 'Without the volunteers, the festival could not take place.', cue: 'WERE', a: ['Were it not for the volunteers, the festival could not take place.'], why: 'Unit 6: the formulaic *were it not for*.' },
        { q: 'He managed to avoid doing the washing-up yet again.', cue: 'WRIGGLED', a: ['He wriggled out of doing the washing-up yet again.'], why: 'Unit 3: *wriggle out of* + *-ing*.' },
        { q: 'It seems that the report was written in a hurry.', cue: 'APPEAR', a: ['The report would appear to have been written in a hurry.', 'It would appear that the report was written in a hurry.', 'The report appears to have been written in a hurry.'], why: 'Unit 4: the hedge *would appear*.' },
        { q: 'When the meeting had finished, we went home.', cue: 'OVER', a: ['The meeting over, we went home.', 'With the meeting over, we went home.', 'Once the meeting was over, we went home.'], why: 'Unit 6: an absolute construction.' },
        { q: 'I understand what you mean, but I still disagree.', cue: 'TAKE', a: ['I take your point, but I still disagree.', 'I take your point, but I still don’t agree.'], why: 'Unit 9: *I take your point, but…* to concede and hold your ground.' },
        { q: 'We will sign only if you pay in advance.', cue: 'PROVIDED', a: ['We will sign provided that you pay in advance.', 'We will sign provided you pay in advance.', 'We will sign only provided that you pay in advance.'], why: 'Unit 10: a conditional offer with *provided that*.' },
        { q: 'If we raised taxes, people might leave the country.', cue: 'TO', a: ['Were we to raise taxes, people might leave the country.'], why: 'Unit 12: *were we to* for a formal hypothesis.' },
        { q: 'The crisis was caused by a sudden fall in oil prices.', cue: 'STEMMED', a: ['The crisis stemmed from a sudden fall in oil prices.'], why: 'Unit 13: *stem from*: have as its cause.' },
      ] },
    ] },
    { title: 'Speaking check', blocks: [
      { t: 'text', md: '**Questions (about three minutes per student):** *Tell me about a book, film or speech that changed your mind about something. How did it do it?* *How far should governments nudge people towards healthier or greener choices?* **Long turn (about two minutes):** *Is it more important to be persuasive or to be right?* Ideas: politics, work, friendship.\n\n**What your teacher listens for, in general terms:** range and accuracy of grammar and vocabulary; precision and tone, saying exactly what you mean in the right register; how well you organise what you say; pronunciation; and, in a group, how well you interact.' },
      { t: 'tip', art: 'dragon', md: 'This is Alimun’s final check, in the format of C2 Proficiency tasks. There is no pass or fail: your teacher will tell you privately where you stand, which papers you are ready for and what to keep working on.' },
    ] },
    { title: 'After C2', blocks: [
      { t: 'text', md: '**Keep improving.** There is no level above C2, but there is always more English. Use it for something you care about: read in a field you love and notice how its best writers build their sentences; keep a notebook of phrases rather than single words; listen to accents and fast, unscripted speech you find difficult; write for real readers, at work, in reviews or in letters to an editor; and try a register you have not mastered yet, from legal drafting to academic writing in your own discipline. Progress at this level is measured in precision, ease and range.\n\n**Taking the real exam.** If you wish to take C2 Proficiency, you book it yourself at an authorised exam centre, which sets the dates, the fees and the rules on the day; check them well in advance. This course has prepared you in the format of the exam. Your teacher’s report tells you which papers you are ready for and what to practise first.' },
      { t: 'examples', items: [
        { s: 'I read **one long piece a day** in a field I care about.', n: 'Steady input in a real interest.' },
        { s: 'I **write for a real reader** once a week.', n: 'Real readers give the most honest feedback.' },
        { s: 'I take on **one new register** each year.', n: 'Range grows where you are least comfortable.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'One to one check', md: 'Do the written check with the student, then a longer speaking check of about ten minutes: both questions with one follow-up each, the long turn, and a short discussion in which you disagree with one of their points so that they must respond with tact and precision. After the answers, give the result and the report at the end of the class, in three parts: strengths, the papers they are ready to take, and what to keep working on. Then talk through their plan for English after the course.' },
    small: { title: 'Small group check', md: 'Students do the written check alone. For speaking, talk with each student for about three minutes (both questions, or one question and the long turn) while the others reread their answers in silence. Give each result and report privately by message after the class, in three parts: strengths, the papers they are ready to take, and what to keep working on.' },
  },
  homework: { md: 'A reflective task to end the course, with no book lesson. Write about 250 words to yourself in a year’s time: what you can now do in English that you could not do when you started, the part of the language or the exam you still want to master, and three specific habits you will keep after this course (what you will read, write and listen to, and when). If you plan to take the real exam, add when and which paper you will practise first. Send it to your teacher, who will reply with your report.' },
};
