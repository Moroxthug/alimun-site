// English C2, class 76 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u16:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c76',
  focus: 'By the end every student has used a method for C2 Proficiency Listening on two new tasks (Part 2: predict the kind of word and write the exact words heard; Part 3: follow the questions in order and reject each wrong option for a reason) and has done all three parts of the Speaking test: natural Part 1 answers with a reason or detail, a Part 2 collaborative task that reaches a decision, and a two-minute Part 3 long turn. They know, in general terms, what the examiners listen for: range and accuracy, organisation, pronunciation and interaction.',
  tips: [
    'Read the scripts at natural speed, twice, as in the exam, with a short pause between readings. Give students time to read the questions first: 45 seconds for Part 2, a minute for Part 3. Do not explain any word before the second reading.',
    'In Part 2, the words on the page paraphrase the recording except for the gap, which takes the words actually heard. Spelling counts, so check it when you go through the answers.',
    'In Speaking Part 2, the weak pattern is two monologues side by side. Listen for interaction: does each speaker respond to the other, invite them in and move towards a decision?',
    'In Part 3, a long turn that stops after thirty seconds wastes the task. Time each student; at about one minute, signal with a hand that they should keep developing their answer.',
    'In 1 on 1, you are the partner in Part 2. Take turns naturally, sometimes disagree, and leave the student room to manage the discussion; in the exam the other candidate will not always help.',
  ],
  plan: [
    { min: 4, title: 'Warm-up', md: 'Ask: *Which do you find harder in English, listening or speaking, and why?* One sentence each in the chat.' },
    { min: 12, title: 'Listening Part 2', md: 'Show board page 1. Give 45 seconds to read the sentences and predict each kind of word, then read the script on board page 5 aloud twice. Students answer alone; check together, including spelling.' },
    { min: 10, title: 'Listening Part 3', md: 'Show board page 2. Give a minute to read the questions, then read the script on board page 6 aloud twice. Check, and for each wrong option ask why it is wrong.' },
    { min: 5, title: 'Speaking Part 1', md: 'Show board page 3. Ask each student two of the questions; about thirty seconds per answer, with one reason or detail.' },
    { min: 22, title: 'Activity', md: 'Use the activity for your class size below, with the Speaking Part 2 task on board page 3 and the Part 3 cards on board page 4.' },
    { min: 5, title: 'Feedback and close', md: 'Give each student one strength and one point to work on, in general terms: range, organisation, pronunciation or interaction. Set the homework.' },
  ],
  board: [
    { title: 'Listening Part 2: sentence completion', blocks: [
      { t: 'ex', kind: 'gap', h: 'In the format of the C2 Proficiency exam (Listening Part 2): you will hear a sound archivist talking about her work. Complete the sentences with a word or short phrase. (Shortened: six sentences instead of nine.)', items: [
        { q: 'The project began when a colleague noticed that nobody had recorded the local ___ before it closed.', a: ['telephone exchange'], why: '*Nobody had recorded the old telephone exchange before it closed.*' },
        { q: 'The speaker’s team calls sounds that are disappearing ___.', a: ['endangered sounds'], why: '*We call these endangered sounds.*' },
        { q: 'According to the speaker, the hardest thing of all to record is ___.', a: ['silence'], why: '*The hardest thing to capture, oddly, is silence.*' },
        { q: 'The quietest place the team has found so far was a disused ___.', a: ['salt mine'], why: '*A disused salt mine.* The church is mentioned first and rejected.' },
        { q: 'Listeners write to the archive most often about the sound of a ___.', a: ['typewriter'], why: '*More letters about the typewriter than anything else.* The steam train is mentioned as a surprise second.' },
        { q: 'Every recording is stored in three formats, because formats eventually become ___.', a: ['obsolete'], why: '*Every format becomes obsolete sooner or later.*' },
      ] },
      { t: 'tip', art: 'parrot', md: 'Before you listen, predict the **kind** of word for each gap: a thing, a name, an adjective? Then write the words you hear, not a synonym, and check the spelling.' },
    ] },
    { title: 'Listening Part 3: an interview', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Listening Part 3): you will hear an interview with Miriam Hale, who published her first novel late in life. Choose the answer which fits best according to what you hear. (Shortened: three questions instead of five.)', items: [
        { q: 'How did Miriam react when her daughter sent her manuscript to an agent?', o: ['She was angry at first but soon saw that her daughter had done her a favour.', 'She was delighted from the start.', 'She refused to speak to the agent.', 'She was relieved that someone else had made the decision.'], why: '*I was furious for about a week… It’s hard to stay furious with someone who has just done what you were too frightened to do.*' },
        { q: 'What does Miriam say about the restraint of her style?', o: ['It owes more to her previous job than to any training in writing.', 'It was a deliberate choice she made after reading critics.', 'It came from a writing course she took in her fifties.', 'It is something she would like to change.'], why: '*Thirty years writing reports… That discipline did more for my prose than any writing course could have.*' },
        { q: 'What is her attitude to having started late?', o: ['She believes she needed the experience of the intervening years.', 'She deeply regrets the time she lost.', 'She thinks age makes no difference to a writer.', 'She advises young writers to wait until they are older.'], why: '*A novel needs a writer who has been disappointed a few times.* She gives no advice to others.' },
      ] },
    ] },
    { title: 'Speaking Parts 1 and 2', blocks: [
      { t: 'text', md: 'In the format of the C2 Proficiency exam (Speaking Part 1, the interview): *What do you enjoy most about the place where you live? How has the way you spend your free time changed in recent years? Is there a skill you would like to have learnt earlier in life?*\n\nIn the format of the C2 Proficiency exam (Speaking Part 2, the collaborative task): the pictures show places people go to find some quiet.\n\n**A.** a library reading room with long wooden tables. **B.** a forest path early in the morning. **C.** a commuter on a crowded train wearing headphones with her eyes closed. **D.** an allotment garden with one person digging. **E.** an empty swimming pool at dawn.\n\n*First, talk together for about a minute about pictures A and C: how restful do these places look? Then look at all the pictures. A magazine is publishing an article called **Finding quiet in a noisy world**. Talk together about what each picture suggests about quiet, then decide which picture would work best with the article.* (About four minutes in all.)' },
      { t: 'examples', items: [
        { s: '**Shall we start with** the train? **What strikes me is that** she has made her own quiet in the middle of a crowd.', n: 'Manage the discussion and give a view.' },
        { s: '**I take your point, but** isn’t the forest a bit obvious for an article like this?', n: 'Disagree politely and invite a reply.' },
        { s: '**So are we agreed** on the train, **or would you rather** go for the allotment?', n: 'Move towards a decision and check it.' },
      ] },
    ] },
    { title: 'Speaking Part 3: the long turn', blocks: [
      { t: 'text', md: 'In the format of the C2 Proficiency exam (Speaking Part 3, the long turn): speak for about **two minutes** on your card. You may use the ideas on it or your own.\n\n**Card A.** *What makes a place feel like home?* Ideas: the people, daily routine, language.\n\n**Card B.** *Is it possible to have too much choice?* Ideas: shopping, careers, relationships.\n\n**Card C.** *How important is it to spend time alone?* Ideas: creativity, health, technology.\n\nAfter each long turn, the other candidate answers a short question: *Is there anything you would add?* Then everyone discusses: *Has modern life made it harder to concentrate? Should schools teach people how to be bored?*' },
      { t: 'tip', art: 'parrot', md: 'Plan the two minutes in three moves: a clear answer, two developed reasons or examples, and a qualification (*That said…*). Use the ideas on the card as a starting point, not a list to read out.' },
    ] },
    { title: 'Script: Listening Part 2 (read aloud twice; show after the answers)', blocks: [
      { t: 'reading', title: 'A sound archivist', md: 'I work as a sound archivist, which means that I collect sounds before they disappear. The project began almost by chance, when a colleague realised that nobody had recorded the old telephone exchange before it closed. By the time anyone thought of it, the room was empty and the sound had gone for good.\n\nSince then we have been recording what we call endangered sounds: machines that are being replaced, crafts that are dying out, even the particular noise of a street market. Some are easy. The hardest thing to capture, oddly, is silence. We tried a country church first, but the traffic came through the walls. In the end the quietest place we found was a disused salt mine, where you can hear your own heartbeat.\n\nPeople often ask which recordings matter most to our listeners. I expected the steam trains, and they do come second, but we receive more letters about the typewriter than anything else. People remember it from their parents’ desks.\n\nWe keep every recording in three formats, because every format becomes obsolete sooner or later, and I have no wish to repeat the story of the telephone exchange. If I had one piece of advice, it would be this: record the ordinary. The sound of your own kitchen will be history one day.' },
    ] },
    { title: 'Script: Listening Part 3 (read aloud twice; show after the answers)', blocks: [
      { t: 'dialogue', title: 'An interview with a novelist', lines: [
        { who: 'Interviewer', s: 'Miriam Hale, you published your first novel at fifty-eight. Was that the plan?' },
        { who: 'Miriam', s: 'Not remotely. I had written for years, but always in private, the way some people sing in the car. Then my daughter found a manuscript in a drawer and, without asking me, sent it to an agent. I was furious for about a week.' },
        { who: 'Interviewer', s: 'And then?' },
        { who: 'Miriam', s: 'Then the agent rang. It’s hard to stay furious with someone who has just done what you were too frightened to do.' },
        { who: 'Interviewer', s: 'Critics have praised the restraint of your style. Was that deliberate?' },
        { who: 'Miriam', s: 'I’d love to say so. The truth is that I spent thirty years writing reports for a water company, where every unnecessary word cost someone time. I suspect that discipline did more for my prose than any writing course could have.' },
        { who: 'Interviewer', s: 'Do you regret not starting earlier?' },
        { who: 'Miriam', s: 'People expect me to say yes. But I’m not sure the younger version of me had anything to say. A novel needs a writer who has been disappointed a few times.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'The whole Speaking test', md: 'Run Speaking Parts 2 and 3 as in the exam, with you as both examiner and partner. In Part 2, take the partner’s role: respond, disagree once and let the student steer towards a decision. In Part 3, the student speaks for two minutes on a card; you give a shorter turn on another card and the student answers the follow-up question. Then discuss the wider questions. Note five sentences to improve and go through them at the end.' },
    small: { title: 'Pairs and observers', md: 'Put students in pairs (a three if the number is odd) for Part 2: each pair does the task in four minutes while the others observe one thing each: who invites the partner in, how they disagree, whether they reach a decision. Then each student gives a two-minute long turn on a card, with a partner answering the follow-up question. Observers report one strong phrase they heard after each round.' },
  },
  homework: { book: 'u16:p3', md: 'Finish lesson 3 of unit 16 if needed, then do lesson 4 (The C2 Proficiency exam, step by step). Record yourself giving a two-minute long turn on a card from board page 4 that you did not use in class, listen back once for organisation and once for range, and send the recording to your teacher.' },
};
