// English C1, class 18 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u4:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c18',
  focus: 'By the end every student has read four short views on retraining in mid-career, matched paraphrased statements to them in the format of C1 Advanced Reading and Use of English Part 8, and noticed how each writer hedges, speculates about the past and uses work collocations. The speaking goal: give and develop an opinion on changing career later in life, as in Speaking Part 4, with a hedge, a past modal and a collocation from the unit.',
  tips: [
    'Part 8 statements paraphrase the texts. Train students to underline the idea in the statement and look for it in other words, not for the same word: a matching word is often a trap.',
    'Set a clear time limit for the reading (about eight minutes) so the class feels the exam pace, then give extra time to check.',
    'When you check, always ask *Which words told you?* and make students read the exact phrase aloud.',
    'In the discussion, reward a developed answer (opinion, reason, example, another view) over a long one. Model *That said…* and *I’d go along with that up to a point…*',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Would you retrain for a completely different job at forty-five? What would stop you?* Collect two reasons for and two against.' },
    { min: 18, title: 'The four views', md: 'Show board page 1. Students read the texts alone in about eight minutes and choose the writer for each statement. Check together, asking which words gave each answer.' },
    { min: 8, title: 'Language from the texts', md: 'Show board page 2. Students find the hedges and past modals, then match the collocations with their meanings.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 9, title: 'Exam corner', md: 'Show board page 3: Speaking Part 4. Students choose the strongest answers, then answer one of the questions themselves in pairs.' },
    { min: 5, title: 'Close', md: 'Each student finishes the sentence: *The hardest part of changing career is probably…* Set the homework.' },
  ],
  board: [
    { title: 'Starting again at forty', blocks: [
      { t: 'reading', title: 'Starting again at forty', md: '**A. Marta, former bank clerk, now an electrician**\nWhen I was made redundant at forty-one, I could have looked for another office job. Instead I signed up for an apprenticeship with people half my age. The first year was a steep learning curve, and I was often exhausted. Looking back, I needn’t have been so embarrassed about being the oldest in the class: the younger ones would ask me for help with the paperwork.\n\n**B. Owen, hiring manager at a building firm**\nI would suggest that older trainees tend to be more reliable, although I can only speak for our firm. What I notice is that they turn up on time and stay. Our staff turnover among them is noticeably lower. The one thing they can lack at first is speed, but that usually comes within a year.\n\n**C. Priya, careers adviser**\nPeople often assume retraining is mainly about learning new skills. To some extent it is, but in my experience the harder part is giving up an identity. Someone who has spent twenty years climbing the ladder may well feel that a sideways move is a step down, even when it makes them happier. I would advise anyone to talk to people already in the job before handing in their notice.\n\n**D. Jonas, former sales manager, now a primary school teacher**\nI should have made the change years earlier. I kept waiting for the perfect moment, which of course never came. My family were more supportive than I had expected; they must have seen how unhappy I was long before I admitted it. My salary fell by about a third, and I would be lying if I said I don’t notice it.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 8): which writer (A Marta, B Owen, C Priya, D Jonas) makes each point? A writer can be the answer more than once.', items: [
        { q: 'Which writer regrets delaying a decision?', o: ['D Jonas', 'A Marta', 'C Priya', 'B Owen'], why: '*I should have made the change years earlier. I kept waiting for the perfect moment.*' },
        { q: 'Which writer admits that their view may not apply everywhere?', o: ['B Owen', 'C Priya', 'A Marta', 'D Jonas'], why: '*although I can only speak for our firm*' },
        { q: 'Which writer says the emotional side of a change is harder than the practical side?', o: ['C Priya', 'D Jonas', 'A Marta', 'B Owen'], why: '*the harder part is giving up an identity*' },
        { q: 'Which writer felt more self-conscious than the situation required?', o: ['A Marta', 'D Jonas', 'C Priya', 'B Owen'], why: '*I needn’t have been so embarrassed about being the oldest*' },
        { q: 'Which writer mentions a financial cost of the change?', o: ['D Jonas', 'B Owen', 'C Priya', 'A Marta'], why: '*My salary fell by about a third.*' },
        { q: 'Which writer recommends finding out about a job from the inside first?', o: ['C Priya', 'B Owen', 'A Marta', 'D Jonas'], why: '*talk to people already in the job before handing in their notice*' },
      ] },
    ] },
    { title: 'Language from the texts', blocks: [
      { t: 'ex', kind: 'spot', h: 'Tap the words each writer uses to hedge, speculate or judge the past.', items: [
        { s: 'I [would suggest that] older trainees are more reliable.', why: 'The softening *would* hedges Owen’s claim.' },
        { s: 'They [must have seen] how unhappy I was.', why: 'A confident deduction about the past.' },
        { s: 'A sideways move [may well] feel like a step down.', why: '*May well*: quite likely.' },
        { s: 'I [should have made] the change years earlier.', why: 'A regret: it did not happen and it was a good idea.' },
      ] },
      { t: 'ex', kind: 'match', h: 'Match the words from the texts with their meanings.', pairs: [
        ['an apprenticeship', 'training on the job for a trade'],
        ['staff turnover', 'how often people leave and join'],
        ['a sideways move', 'a new job at the same level'],
        ['hand in your notice', 'formally say you are leaving'],
      ] },
    ] },
    { title: 'Exam corner: Speaking Part 4', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Speaking Part 4): the examiner asks broader questions about changing career. Choose the answer that would score best.', items: [
        { q: '“Should employers do more to help older workers retrain?”', o: ['To some extent, yes. Firms that invest in retraining tend to keep their staff longer, so it isn’t only generous, it’s practical. That said, I’d argue workers have to take on some of the responsibility themselves.', 'Yes, employers must help everybody always.', 'Retraining is when you learn a new job.'], why: 'An opinion with a hedge, a reason, a collocation and another point of view.' },
        { q: '“Is it ever too late to change career?”', o: ['I wouldn’t say it’s ever too late, although it does get harder. A friend of mine might well have stayed in a job she hated if her company hadn’t closed, and now she says it was the best thing that could have happened.', 'No.', 'It is too late after forty because people are old.'], why: 'A balanced view, a past modal and a real example.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Speaking Part 4 you are marked on how you develop an idea and respond to your partner. Give an opinion, a reason and an example, then invite your partner in: *What’s your view on that?*' },
    ] },
  ],
  activities: {
    one: { title: 'Devil’s advocate', md: 'You argue that changing career after forty is rarely worth the risk; the student argues the opposite. Each speaks for one minute, then responds to the other. Push the student to hedge (*tend to*, *to some extent*) and to use one past modal about a real person. Note good phrases and two to improve.' },
    small: { title: 'The fifth writer', md: 'Each student writes a short fifth view (60 to 80 words) on retraining in the chat, from a role you give them (a parent, a university lecturer, a recruiter). The others write one Part 8 statement for it that paraphrases the idea. Check together whether each statement could only match that text.' },
    group: { title: 'Part 4 rounds', md: 'Breakout rooms of four take turns with three Part 4 questions you paste in the chat (training, money, family, age), two minutes each. One student in each room notes the best hedges and collocations. Bring everyone back and collect the strongest phrases on the board.' },
  },
  homework: { book: 'u4', md: 'Finish lesson 4 of unit 4 and do the unit 4 test. Write about 150 words in reply to the question *Is it ever too late to change career?*, with an opinion, a reason, an example and one view you disagree with.' },
};
