// English C1, class 87 (docs/LESSONS_PLAN.md, L6). Exam practice: C1 Advanced Listening and Speaking, with the language of units 1 to 18.
// Draft for the owner's review.
export const LESSON = {
  id: 'c87',
  focus: 'By the end of the class every student knows the four parts of C1 Advanced Listening and the four parts of C1 Advanced Speaking, has tried Listening Parts 1, 2 and 4 with texts the teacher reads aloud, and has done a Speaking long turn and a collaborative task with a partner. Each student leaves with one listening strategy that worked and one specific point to improve in their speaking.',
  tips: [
    'Read each listening script aloud twice at natural speed, as in the exam, and only show the script page after the answers are checked. Give students 20 to 30 seconds to read the questions first.',
    'C1 Listening tests what speakers mean, feel and imply. The wrong options are usually things the speakers **mention**; the right one paraphrases the idea behind the words. When you check, show where each wrong option appears in the script.',
    'In Listening Part 2 students write the word they actually hear, usually one to three words. A good synonym is still wrong, and spelling must be correct.',
    'In Speaking Part 2 the candidate chooses two of three pictures, compares them and answers both printed questions in one minute. Students who describe every detail run out of time before they answer the questions.',
    'In Speaking Part 3 the examiner marks interaction: picking up the partner’s idea, partly agreeing, moving on and reaching a decision. Stop pairs who give two speeches one after the other.',
    'Give feedback against the speaking criteria (range and accuracy, organisation, pronunciation, interaction) and choose one thing per student, not ten.',
  ],
  plan: [
    { min: 4, title: 'The two papers', md: 'Show board page 1. Go through the parts of Listening and Speaking in two minutes and ask which part students expect to find hardest.' },
    { min: 9, title: 'Listening Part 1', md: 'Students read the questions on board page 2. Read the two extracts from the script page (board page 7) aloud twice. Check, then show where the wrong options were mentioned.' },
    { min: 9, title: 'Listening Part 2', md: 'Students read the sentences on board page 3. Read the talk twice. Check spelling as well as meaning.' },
    { min: 9, title: 'Listening Part 4', md: 'Students read both tasks on board page 4. Read the three speakers twice. Students answer both tasks during the same listening.' },
    { min: 12, title: 'Speaking Part 2', md: 'Show board page 5. Pairs take turns: one minute each on the pictures, then 30 seconds for the partner’s question.' },
    { min: 13, title: 'Speaking Parts 3 and 4', md: 'Show board page 6. Pairs discuss for two minutes, then decide in one minute. Then ask each student one Part 4 question. Use the activity for your class size below.' },
    { min: 4, title: 'Close', md: 'Give each student one point to improve. Set the homework.' },
  ],
  board: [
    { title: 'Listening and Speaking at a glance', blocks: [
      { t: 'table', caption: 'C1 Advanced Listening: four parts, about 40 minutes', explain: ['head', 'col1', 'col2'], head: ['Part', 'What you hear', 'Strategy'], rows: [
        ['Part 1', 'three short extracts with two speakers; two questions on each', 'listen for what the speakers mean, feel or imply'],
        ['Part 2', 'a talk by one speaker; complete eight sentences', 'write the exact words you hear and check the spelling'],
        ['Part 3', 'a long interview or discussion; six multiple-choice questions', 'follow each speaker’s opinion as it develops'],
        ['Part 4', 'five short monologues; two matching tasks at once', 'read both tasks first and listen for the idea, not the same words'],
      ] },
      { t: 'table', caption: 'C1 Advanced Speaking: four parts, about 15 minutes, usually in pairs', explain: ['head', 'col1'], head: ['Part', 'What you do'], rows: [
        ['Part 1', 'answer questions about yourself'],
        ['Part 2', 'compare two of three pictures and answer two questions, one minute; then answer a short question on your partner’s pictures'],
        ['Part 3', 'discuss a question with five prompts with your partner, then try to reach a decision'],
        ['Part 4', 'answer wider questions on the topic of Part 3'],
      ] },
    ] },
    { title: 'Listening Part 1: short extracts', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Listening Part 1): listen to two extracts and choose the answer which fits best according to what you hear.', items: [
        { q: 'Extract one. You hear two friends talking about a training course at work. What does the woman imply about the course?', o: ['It was designed with little thought for the staff.', 'It was too short to be useful.', 'It was better than she expected.', 'It was more expensive than other courses.'], why: '*Whoever planned it had clearly never met any of us*: the course ignored what staff need. The length and the price are mentioned but are not the point.' },
        { q: 'Extract one. How does the man feel about the course?', o: ['amused rather than annoyed', 'worried about his job', 'keen to complain', 'grateful for the day off'], why: '*Honestly, I found it quite entertaining*: he is amused; he says complaining is *not worth it*.' },
        { q: 'Extract two. You hear a man talking about moving back to his home town. What surprised him most?', o: ['how much he had changed himself', 'how much the town had grown', 'how few old friends were left', 'how expensive the houses had become'], why: '*The town was much the same; it was me who had moved on.* He mentions the prices and his friends, but neither surprised him.' },
        { q: 'Extract two. What does he suggest about the decision to return?', o: ['He does not regret it, despite the difficulties.', 'He would advise others against it.', 'He is planning to leave again soon.', 'It was made for financial reasons.'], why: '*It hasn’t been easy, but I wouldn’t undo it*: no regret.' },
      ] },
    ] },
    { title: 'Listening Part 2: sentence completion', blocks: [
      { t: 'ex', kind: 'gap', h: 'In the format of the C1 Advanced exam (Listening Part 2): listen to a talk about a community repair café and complete the sentences with a word or short phrase.', items: [
        { q: 'The first repair café in the town was held in a former ___.', a: ['fire station', 'fire-station'], why: 'She says *a former fire station*; the library is where they meet now.' },
        { q: 'The item people bring in most often is the ___.', a: ['toaster', 'toasters'], why: '*Toasters, believe it or not*; she says lamps are second.' },
        { q: 'Volunteers are asked to explain each repair so that visitors gain ___.', a: ['confidence'], why: 'The aim is *confidence*, not just a mended object.' },
        { q: 'The speaker’s biggest worry is a shortage of ___.', a: ['spare parts'], why: '*What keeps me awake is spare parts*; volunteers are not the problem.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 2 you hear the answer words in the talk, but the sentence on the page is worded differently. Read the words **before** and **after** each gap to know exactly what kind of word you are waiting for.' },
    ] },
    { title: 'Listening Part 4: three speakers', blocks: [
      { t: 'text', md: 'In the exam you hear five speakers and do two tasks at the same time. Here there are three speakers. For each speaker, answer both questions while you listen.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Listening Part 4). Task one: why did each speaker give up their smartphone? Task two: what has each speaker noticed since?', items: [
        { q: 'Speaker one, task one: why did she give it up?', o: ['A doctor’s advice about her sleep.', 'The cost of her contract.', 'A challenge from a friend.', 'A rule at her new job.'], why: '*My doctor said my sleep would not improve until the phone left the bedroom.* The contract is mentioned as a bonus.' },
        { q: 'Speaker one, task two: what has she noticed since?', o: ['She remembers more of what she reads.', 'She sees friends less often.', 'She is less organised at work.', 'She spends more money.'], why: '*I actually remember the books I read now.*' },
        { q: 'Speaker two, task one: why did he give it up?', o: ['A bet with his teenage son.', 'A doctor’s advice about his sleep.', 'The cost of a new model.', 'A rule at his office.'], why: '*My son bet me I wouldn’t last a month.*' },
        { q: 'Speaker two, task two: what has he noticed since?', o: ['People find him harder to contact.', 'He sleeps much better.', 'He reads more books.', 'He has more time for sport.'], why: '*Half my friends have given up trying to reach me.* He says his sleep has not changed.' },
        { q: 'Speaker three, task one: why did she give it up?', o: ['A rule at her new workplace.', 'A bet with her children.', 'A doctor’s advice.', 'The cost of the contract.'], why: '*Phones weren’t allowed on the ward, so I simply stopped carrying one.*' },
        { q: 'Speaker three, task two: what has she noticed since?', o: ['She feels calmer on her days off.', 'She remembers more of what she reads.', 'Her family complains more.', 'She is better at her job.'], why: '*On my days off I feel far less on edge.*' },
      ] },
    ] },
    { title: 'Speaking Part 2: the long turn', blocks: [
      { t: 'text', md: '**Pictures:** *a family arguing at a dinner table; two drivers talking after a small accident; colleagues disagreeing in a meeting room.* **Choose two and answer:** *What might the people be disagreeing about? How might they be feeling?* **Partner’s question (30 seconds):** *Which of these disagreements do you think will be easiest to resolve?*' },
      { t: 'examples', items: [
        { s: 'The teenager **looks as though he has just been told** something he doesn’t want to hear.', n: 'Speculating with a perfect form.' },
        { s: 'The drivers, **by contrast**, seem to be trying hard to stay calm.', n: 'Comparing the two pictures.' },
        { s: '**If I had to guess**, I’d say the meeting is about a budget, and nobody wants to give way.', n: 'Answering the printed question.' },
        { s: '**What they have in common** is that neither side wants to lose face.', n: 'A cleft to round off the turn.' },
      ] },
    ] },
    { title: 'Speaking Parts 3 and 4: the discussion', blocks: [
      { t: 'text', md: '**Part 3 (two minutes):** *Why do people find it hard to accept new technology?* **Prompts:** *cost, fear of losing jobs, privacy, habit, lack of training.* **Then (one minute):** *Which of these is the hardest barrier to overcome?* **Part 4:** *Is it the government’s job to help older people keep pace with technology? Has technology made it easier or harder to resolve disagreements? Will people trust machines more or less in twenty years?*' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Speaking Part 3): choose the best response.', items: [
        { q: 'Your partner says: “I think privacy is the biggest worry for most people.” You say:', o: ['That’s true up to a point, but don’t you think habit matters even more for older people?', 'Privacy. Next one is cost.', 'Yes, I agree.'], why: 'Respond to the idea, partly agree, add a new angle and invite your partner in.' },
        { q: 'The examiner asks the decision question and you disagree. You say:', o: ['It seems we see this slightly differently, so shall we agree to disagree?', 'You are wrong, so we will choose mine.', 'Let’s choose all of them.'], why: 'You do not have to agree; you do need to close the discussion together.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 4 give three or four moves: your view, a reason, an example and the other side. Then stop, so the examiner can bring in your partner.' },
    ] },
    { title: 'Scripts (show after listening)', blocks: [
      { t: 'reading', title: 'Part 1 and Part 2', md: 'Extract one. Woman: So, a whole day on “effective communication”. Whoever planned it had clearly never met any of us. Half of it was about running meetings, and none of us runs meetings. Man: It was long, I’ll give you that, and I dread to think what it cost. Honestly, though, I found it quite entertaining. Complaining isn’t worth it; they’ll have forgotten about it by next week.\n\nExtract two. Man: Everyone warned me about the house prices, and they were right, but I knew that before I came. And yes, most of my old friends have left. What I wasn’t ready for was that the town was much the same; it was me who had moved on. It hasn’t been easy, but I wouldn’t undo it.\n\nTalk. Our first repair café was held in a former fire station; these days we meet in the library on Saturdays. You might expect people to bring phones or laptops, but the item we see most often is the toaster, believe it or not. Lamps come second. Every volunteer explains what they are doing, because the aim is not just a mended object; it is confidence, so people try the next repair themselves. Finding volunteers has never been hard. What keeps me awake is spare parts.' },
      { t: 'reading', title: 'Part 4', md: 'Speaker one. Cancelling the contract saved me money, which was a nice bonus, but that wasn’t why I did it. My doctor said my sleep would not improve until the phone left the bedroom. What I didn’t expect is that I actually remember the books I read now.\n\nSpeaker two. My son bet me I wouldn’t last a month, so of course I had to prove him wrong. People assume I sleep better now, but honestly that hasn’t changed. The real difference is that half my friends have given up trying to reach me.\n\nSpeaker three. When I started work on a hospital ward, phones weren’t allowed on the ward, so I simply stopped carrying one, even at home. My children tease me about it, but on my days off I feel far less on edge.' },
    ] },
  ],
  activities: {
    one: { title: 'Full mock speaking', md: 'Do Speaking Parts 2, 3 and 4 as the examiner, and play the partner in Part 3, sometimes agreeing too easily and sometimes interrupting, so the student has to manage the discussion. Note three sentences the student said and give feedback on each of the four criteria with one example from what they said.' },
    small: { title: 'Peer examiners', md: 'Two students speak while the others are examiners with the criteria from board page 1: range and accuracy, organisation, pronunciation and interaction. After each part, each examiner gives one specific strength and one suggestion, quoting what they heard. Rotate so that everyone speaks.' },
    group: { title: 'Breakout pairs', md: 'In breakout rooms of two, students do Speaking Parts 2 and 3 with the tasks on board pages 5 and 6. Visit each room for a minute and note one strong phrase and one mistake. Bring everyone back, share the best phrases you heard, and ask the Part 4 questions to a few students.' },
  },
  homework: { book: 'u19:p1', md: 'Record yourself doing Speaking Part 2 with three pictures of your choice (one minute) and listen back with the four criteria; write down one thing to improve. Then do lesson 1 of unit 19 in the book.' },
};
