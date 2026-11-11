// English C2, class 69 (docs/LESSONS_PLAN.md, L6). Exam practice: C2 Proficiency Speaking, Parts 1 to 3, with the language
// and topics of units 1 to 14. In 1 on 1 the teacher plays examiner and partner; in a small group students work in pairs or
// a three while the others observe and give feedback. Draft for the owner's review.
export const LESSON = {
  id: 'c69',
  focus: 'By the end of the class every student knows the three parts of C2 Proficiency Speaking and what the examiner listens for, and has done each part in full: the interview, the collaborative task with a partner (a short discussion of some pictures, then a decision about all of them), and the long turn of about two minutes followed by the partner’s answer and a discussion. They draw on the language of units 1 to 14: hedging and stance, careful generalisation, conceding and disagreeing, managing a discussion, the vocabulary of ethics, science, the economy and belonging. Each student leaves with one specific strength and one specific point to improve, quoted from what they said.',
  tips: [
    'The test lasts about 16 minutes for two candidates. Keep to the timings on board page 1 with a timer, because knowing how long two minutes feels is part of the preparation.',
    'In 1 on 1 you play both the examiner and the partner. As the partner, vary your behaviour: sometimes agree too quickly, sometimes interrupt, sometimes say very little, so the student has to manage the discussion.',
    'In a small group, two students (or three) take the test while the others observe with the criteria on board page 5. Observers write down exact words they hear; feedback that quotes the speaker is far more useful than *good fluency*.',
    'In Part 2 the examiner marks interaction: building on the partner’s idea, inviting them in, partly agreeing, moving on and reaching a decision (or agreeing to disagree). Stop pairs who give two speeches one after the other and ask them to start again.',
    'Give feedback against the five areas the examiner assesses and choose one point per student, not ten. At C2, the most common point is not accuracy but development: answers that stop before they have said anything interesting.',
  ],
  plan: [
    { min: 4, title: 'The test', md: 'Show board page 1. Go through the three parts, their timings and the five areas the examiner listens for, in about three minutes.' },
    { min: 7, title: 'Part 1', md: 'Show board page 2. Ask each student two or three of the interview questions, as the examiner. Then look at the choices on the page together: natural answers with one reason or detail.' },
    { min: 8, title: 'Part 2 method', md: 'Show board page 3. Students choose the best moves for the collaborative task and read the useful phrases aloud.' },
    { min: 26, title: 'Activity', md: 'Use the activity for your class size below: Part 2 with the task on board page 3, then Part 3 with the cards on board page 4, both timed as in the exam.' },
    { min: 9, title: 'Feedback', md: 'Show board page 5. Give each student one strength and one point to improve in one of the five areas, quoting what they said, and ask observers for their notes. Then each student repeats one sentence in an improved form.' },
    { min: 5, title: 'Close', md: 'Each student names the part they feel most ready for and the one they will practise. Set the homework.' },
  ],
  board: [
    { title: 'Speaking at a glance', blocks: [
      { t: 'table', caption: 'C2 Proficiency Speaking: three parts, about 16 minutes, usually two candidates and two examiners', explain: ['head', 'col1', 'col2'], head: ['Part', 'What happens', 'Time'], rows: [
        ['Part 1, interview', 'the examiner asks each candidate questions about themselves and their views', 'about 2 minutes'],
        ['Part 2, collaborative task', 'the candidates first talk together about two of the pictures, then discuss all of them and reach a decision', 'about 4 minutes'],
        ['Part 3, long turn', 'each candidate speaks alone on a card with a question and three ideas, the partner answers a short question, then both discuss the topic with the examiner', 'about 10 minutes'],
      ] },
      { t: 'table', caption: 'What the examiner listens for', explain: ['head', 'col0', 'col1'], head: ['Area', 'At C2 this means'], rows: [
        ['grammatical resource', 'complex structures used flexibly and accurately: inversion, clefts, conditionals, modals of speculation'],
        ['lexical resource', 'precise, natural vocabulary and collocation, including idioms, used to give exact shades of meaning'],
        ['discourse management', 'developed, coherent answers: a position, reasons, examples and another view, with clear links'],
        ['pronunciation', 'clear and natural, with stress and intonation that carry meaning'],
        ['interactive communication', 'starting, building on and steering the discussion, inviting the partner in and reaching an outcome'],
      ] },
    ] },
    { title: 'Part 1: the interview', blocks: [
      { t: 'text', md: '*Where do you feel most at home, and why?* *What do you do to keep up with what is happening in the world?* *Is there a skill you would like to learn properly in the next few years?* *How has the way you spend your free time changed since you were a teenager?* *Do you think people in your country are more or less careful with money than they used to be?*' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Speaking Part 1): choose the best answer to each question.', items: [
        { q: 'Examiner: “What do you do to keep up with what is happening in the world?”', o: ['Mostly I listen to the news on the way to work, though I’ve become rather wary of headlines, so I try to read one longer piece a week.', 'I watch the news.', 'News is very important in the modern world because the world is changing very fast, and in my opinion everybody should know about it, and also…'], why: 'A natural answer with a reason and a detail, then stop. The second is too short; the third sounds memorised and goes nowhere.' },
        { q: 'Examiner: “Where do you feel most at home, and why?”', o: ['Oddly enough, not where I grew up. It’s my grandmother’s village; it has a sense of place I’ve never found anywhere else.', 'My home, because it is my home.', 'I will tell you about my city. My city has a population of two million people and many monuments.'], why: 'Precise vocabulary (*a sense of place*) and a personal angle, in two sentences.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Part 1 is short. Answer **naturally**, add **one reason or detail**, and stop. A prepared speech is easy to spot and does not earn marks for interaction.' },
    ] },
    { title: 'Part 2: the collaborative task', blocks: [
      { t: 'text', md: 'In the format of the C2 Proficiency exam (Speaking Part 2). **The pictures:** *A: a scientist explaining a model to a group of schoolchildren. B: a crowded public meeting in a town hall. C: two people arguing calmly on a television panel. D: a market stall with leaflets and a queue. E: an online video call with many faces on screen.*\n\n**First (about one minute):** *Look at pictures A and C. Talk together about what the people might be trying to achieve.*\n\n**Then (about three minutes):** *Now look at all the pictures. A city is planning a campaign to help people make better sense of the news. Talk together about how each of these situations could help people understand complex issues, then decide which one would work best for the campaign.*' },
      { t: 'ex', kind: 'choice', h: 'Choose the best move in the discussion.', items: [
        { q: 'You start the three-minute task. You say:', o: ['Shall we start with the town hall meeting? I can see the appeal, but I wonder whether people really listen in a crowd.', 'Picture A is a scientist. Picture B is a meeting. Picture C is a television panel.', 'I think the best one is E, definitely, so that’s decided.'], why: 'Start with one picture, give a view and leave room for your partner. Describing every picture wastes time; deciding at once ends the discussion.' },
        { q: 'Your partner says: “I think the television panel is the most effective.” You say:', o: ['I take your point that it reaches a lot of people, but doesn’t it rather reward whoever speaks most confidently?', 'No, that is wrong.', 'Yes. Next picture.'], why: 'Partly agree, add a new angle, and hand the question back.' },
        { q: 'There are thirty seconds left and you still disagree. You say:', o: ['We don’t seem to agree completely, so shall we say the scientist with the schoolchildren, with the online call as a close second?', 'Let’s choose all of them.', 'You can decide.'], why: 'Close the discussion together: a decision, or a clear agreement to differ.' },
      ] },
      { t: 'examples', items: [
        { s: '**What strikes me about** this one **is that** nobody is shouting.', n: 'Opening a picture with a view.' },
        { s: '**Building on what you said**, the scientist is doing the same thing, only for children.', n: 'Picking up the partner’s idea.' },
        { s: '**How would you feel about** putting the market stall first?', n: 'Inviting the partner in.' },
        { s: '**Shall we move on to** the online call? We haven’t said much about it.', n: 'Managing the time.' },
      ] },
    ] },
    { title: 'Part 3: the long turn', blocks: [
      { t: 'text', md: 'In the format of the C2 Proficiency exam (Speaking Part 3). Each candidate speaks for **about two minutes** on their card; the partner then answers a short question for **about a minute**; finally the examiner asks both candidates questions on the topic.\n\n**Card A:** *Is it the duty of experts to make their work understandable to the public?* Ideas you may use: trust, simplification, responsibility. **Partner’s question:** *Do you trust experts more or less than you did ten years ago?*\n\n**Card B:** *How far should a country protect its own language and customs?* Ideas you may use: globalisation, newcomers, the media. **Partner’s question:** *Which custom from your country would you most like visitors to understand?*\n\n**Discussion with both candidates:** *Is it ever right for a government to keep information from the public? Has the internet made people better or worse at disagreeing? Does speaking another language change the way a person thinks?*' },
      { t: 'examples', items: [
        { s: '**I’d say** it is, **up to a point**, though the word *duty* may be a little strong.', n: 'A clear but qualified position (unit 4).' },
        { s: '**Take**, **for instance**, the way the risks of a new medicine were reported…', n: 'An example. Keep it short.' },
        { s: '**That said, it would be simplistic to say that** experts alone are to blame when they are misunderstood.', n: 'Another view, weighed (units 9 and 14).' },
        { s: '**So, to come back to the question**, yes, but the public has a duty too.', n: 'Finish on the question.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Plan three moves while the examiner reads the card: **position**, **example**, **another view**. Use the ideas on the card if they help, but you need not use all three. In the final discussion, answer the examiner, then turn to your partner: *Would you agree?*' },
    ] },
    { title: 'Observer’s sheet', blocks: [
      { t: 'table', caption: 'Notes for each speaker (write what you hear, in their words)', explain: ['head', 'col0', 'col1'], head: ['Area', 'Listen for'], rows: [
        ['grammatical resource', 'one complex structure used well, and one mistake that came back more than once'],
        ['lexical resource', 'the most precise word or collocation you heard, and one word that was vague'],
        ['discourse management', 'Did the long turn have a position, an example and another view? Did it end on the question?'],
        ['pronunciation', 'one place where stress or intonation made the meaning clearer, or less clear'],
        ['interactive communication', 'one moment the speaker built on their partner’s idea or invited them in, and whether they reached a decision'],
      ] },
      { t: 'tip', art: 'owl', md: 'Feedback that helps is **specific and quoted**: *You said “that rather misses the point”, which was exactly right there* is useful. *Good speaking* is not. Give one strength and one suggestion, not a list.' },
    ] },
  ],
  activities: {
    one: { title: 'Examiner and partner', md: 'Do Part 2 and Part 3 in full, with a timer. In Part 2 you are both the examiner (give the instructions on board page 3) and the partner: in the first minute agree too easily, in the decision task interrupt once and hold a different view, so the student must manage the discussion and reach an outcome. In Part 3 the student takes card A while you answer the partner’s question, then you give a short long turn on card B and the student answers the partner’s question; finish with two discussion questions. Note three sentences the student said and give feedback in two of the five areas, quoting them.' },
    small: { title: 'Candidates and observers', md: 'Two students are the candidates (or three, with a three-way discussion in Part 2 and three cards in Part 3, as in the exam for a group of three); you are the examiner. The others are observers, each with one or two areas from board page 5, and they write down exact words. Do Part 2 and Part 3 in full, with a timer. After each part, each observer gives one strength and one suggestion, quoting what they heard. Then swap, so that observers become candidates; with two students, both are candidates and give each other feedback after each part, and you add your own.' },
  },
  homework: { book: 'u15:p1', md: 'Record yourself doing a Part 3 long turn on the card you did not speak about in class: plan for about a minute, then speak for two minutes. Listen back with the observer’s sheet on board page 5 and write down one strength and one thing to improve. Then do lesson 1 of unit 15 in the book (What is said and what is meant).' },
};
