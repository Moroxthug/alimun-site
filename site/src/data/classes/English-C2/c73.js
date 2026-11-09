// English C2, class 73 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u15:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c73',
  focus: 'By the end every student matches the strength of their language to the strength of the evidence when discussing whether language shapes thought: *may influence* rather than *determines*, *is consistent with* rather than *proves*, *it does not follow that* to reject a faulty conclusion, and *evidence* as an uncountable noun. They follow a C2 Proficiency Listening Part 3 interview on thinking in a second language, rejecting each wrong option for a reason, and give a two-minute long turn on a question about language and identity.',
  tips: [
    'The key skill today is calibration: a strong verb for strong evidence and a cautious one for weak evidence. When a student overstates, do not correct the grammar; ask *How do we know that?* and let them choose a weaker verb themselves.',
    'Students often bring popular claims (*Language X has no word for Y, so…*). Welcome them: they are perfect material for *it does not follow that*. Do not present any finding as settled unless it is.',
    'For the listening, read the script at natural speed, twice, as in the exam. Give 45 seconds to read the questions first. Do not explain any word before the second reading.',
    'In Part 3 the questions follow the order of the recording, and the wrong options are often things the speaker mentions and then rejects. After the answers, ask students to find the words that tempted them.',
    'Bilingual and multilingual students often have strong personal views on whether they think differently in each language. Invite their experience in the long turn, but ask them to separate it from what research shows.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Do you feel like a slightly different person when you speak English? In what way?* Each student answers in two or three sentences.' },
    { min: 10, title: 'Matching claims to evidence', md: 'Show board page 1. Go through the scale briefly, then students choose the right verb for each claim alone and explain one choice each.' },
    { min: 8, title: 'Say it carefully', md: 'Show board page 2. Students fix the errors and rewrite the overstated claims with the word given, alone with “Everyone solves this”.' },
    { min: 15, title: 'Exam corner', md: 'Show board page 3: C2 Proficiency Listening Part 3. Give 45 seconds to read the questions, then read the script on board page 5 aloud twice. Students answer alone. Check, then show the script and find the words that prove each answer.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below, with the long-turn cards on board page 4.' },
    { min: 4, title: 'Close', md: 'Each student writes one careful sentence in the chat about what they now think, using *may*, *is consistent with* or *it does not follow that*. Set the homework.' },
  ],
  board: [
    { title: 'Matching claims to evidence', blocks: [
      { t: 'table', caption: 'From cautious to strong', explain: ['head', 'col0', 'col1'], head: ['Strength of evidence', 'Verbs for what language does', 'Verbs for what a study does'], rows: [
        ['weak or disputed', 'may affect, has been linked to', 'suggests, is consistent with'],
        ['moderate, repeated', 'influences, shapes, predisposes speakers to', 'supports, provides evidence for'],
        ['strong and replicated', 'reliably affects', 'demonstrates, shows'],
        ['almost never justified', 'determines, prevents, makes impossible', 'proves'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the verb that matches the evidence described.', items: [
        { q: 'One small study found the effect, and two later studies did not. The result ___ that grammatical gender affects how people describe objects.', o: ['suggests', 'proves', 'demonstrates'], why: 'One study, not replicated: the cautious *suggests*.' },
        { q: 'Many studies across several languages have found the same small effect on colour. The evidence ___ a weak version of the hypothesis.', o: ['supports', 'proves', 'refutes'], why: 'Repeated findings *support* a theory; they rarely *prove* it.' },
        { q: 'There is no good evidence that a missing word stops people having the thought. Language does not ___ what we can think.', o: ['determine', 'influence', 'suggest'], why: 'The strong claim, *determine*, is the one being rejected.' },
        { q: 'A language that describes position by compass directions may ___ its speakers to keep track of direction.', o: ['predispose', 'determine', 'prove'], why: '*Predispose someone to*: make them more likely to.' },
      ] },
    ] },
    { title: 'Say it carefully', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'There are a lot of [evidences] that bilingual children switch tasks easily.', a: ['evidence'], why: '*Evidence* is uncountable: *a good deal of evidence*.' },
        { s: 'Grammatical gender has a strong [affect] on memory, according to one study.', a: ['effect'], why: '*Effect* is the noun; *affect* is usually the verb.' },
        { s: 'The results are consistent [to] the weak version of the hypothesis.', a: ['with'], why: '*Consistent with*.' },
        { s: 'Several early findings have not been [replied] by other researchers.', a: ['replicated'], why: 'A study that is repeated with the same result is *replicated*.' },
      ] },
      { t: 'ex', kind: 'transform', h: 'Rewrite each overstated claim more carefully. Use the word given and keep the meaning as close as the evidence allows.', items: [
        { q: 'This study proves that language shapes memory.', cue: 'CONSISTENT', a: ['The results of this study are consistent with the idea that language shapes memory.', 'This study is consistent with the idea that language shapes memory.', 'This study’s findings are consistent with the idea that language shapes memory.'], why: '*Consistent with* says the results fit without claiming proof.' },
        { q: 'English has no single word for it, so English speakers cannot feel it.', cue: 'FOLLOW', a: ['English has no single word for it, but it does not follow that English speakers cannot feel it.', 'English has no single word for it, but it doesn’t follow that English speakers cannot feel it.', 'English has no single word for it, but it does not follow that English speakers can’t feel it.'], why: '*It does not follow that* rejects the faulty conclusion.' },
        { q: 'Learning a second language makes you a different person.', cue: 'MAY', a: ['Learning a second language may change the way you see yourself.', 'Learning a second language may make you feel like a different person.', 'Learning a second language may change how you see yourself.'], why: 'A modal and a more modest claim.' },
      ] },
    ] },
    { title: 'Exam corner: Listening Part 3', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Listening Part 3): you will hear part of a radio interview with a researcher, Dr Ana Ruiz, about thinking in a second language. Choose the answer which fits best according to what you hear.', items: [
        { q: 'What first made Dr Ruiz interested in the subject?', o: ['noticing that she reacted differently to the same news in two languages', 'reading a famous study about bilingual children', 'a request from a university to start a project', 'teaching students who had moved abroad'], why: '*I heard the same news report… in Spanish it upset me, in English I just took notes.* The famous study is mentioned later, as something she was sceptical of.' },
        { q: 'What does she say about decisions made in a second language?', o: ['Some studies suggest they can be less driven by emotion.', 'They are always more rational.', 'They are usually slower and less accurate.', 'Researchers have proved that they are more ethical.'], why: '*Several studies suggest… a little less driven by feeling*; she rejects *always* and says nothing is proved.' },
        { q: 'Why does she mention swearing?', o: ['to illustrate that words in a first language often carry stronger feeling', 'to show that second-language learners avoid rude words', 'to criticise the way languages are taught at school', 'to explain why some studies failed'], why: '*A swear word in your first language can feel genuinely shocking, while the same word in English feels almost harmless.*' },
        { q: 'What is her attitude to the claim that people have a different personality in each language?', o: ['She thinks it describes a real experience but overstates what changes.', 'She accepts it completely.', 'She thinks it is a myth with no basis at all.', 'She has never considered it.'], why: '*The feeling is real… but what changes is the setting and the habits that come with it, not who you are.*' },
        { q: 'What advice does she give to language learners?', o: ['to treat the distance a second language gives as a useful tool', 'to avoid making important decisions in a foreign language', 'to stop translating from their first language', 'to speak only their first language at home'], why: '*Use that distance. Write a difficult email in English first…*' },
      ] },
      { t: 'tip', art: 'alien', md: 'In **Part 3** the questions follow the recording. The wrong options are often things the speaker **mentions and rejects**, or a strong word such as *always* or *proved* added to something she said cautiously.' },
    ] },
    { title: 'Long-turn cards', blocks: [
      { t: 'text', md: 'In the format of the C2 Proficiency exam (Speaking Part 3, the long turn): speak for about two minutes on your card. You may use the ideas on it or your own.\n\n**Card A.** *How far does the language we speak affect the way we see the world?* Ideas: colour and space, words with no translation, the evidence.\n\n**Card B.** *Should everyone learn a second language?* Ideas: work, travel, understanding other people.\n\n**Card C.** *Do people change when they speak another language?* Ideas: personality, emotion, confidence.\n\nAfter each long turn, the listener answers one question: *Do you agree with what you heard? Why, or why not?* Then everyone discusses: *Is it possible to understand a culture fully without speaking its language?*' },
    ] },
    { title: 'Listening script (read aloud twice; show after the answers)', blocks: [
      { t: 'dialogue', title: 'An interview about thinking in a second language', lines: [
        { who: 'Interviewer', s: 'Dr Ruiz, you study what happens when people think in a language that isn’t their first. How did you come to it?' },
        { who: 'Ana Ruiz', s: 'Almost by accident. Years ago I heard the same news report twice in one evening, once in Spanish and once in English. In Spanish it upset me; in English I just took notes. I wanted to know whether that was me or something more general.' },
        { who: 'Interviewer', s: 'And there is a well-known study on this, isn’t there?' },
        { who: 'Ana Ruiz', s: 'There are several, and I was sceptical of them at first. But a number of studies suggest that when people make decisions in a second language, those decisions are a little less driven by feeling. I would not say more rational in every case; that claim goes too far. And none of it has been proved in any final sense.' },
        { who: 'Interviewer', s: 'Why would a second language feel less emotional?' },
        { who: 'Ana Ruiz', s: 'One idea is that we learn our first language surrounded by feeling: from parents, in arguments, in love. A second language is often learnt in a classroom. That is why a swear word in your first language can feel genuinely shocking, while the same word in English feels almost harmless.' },
        { who: 'Interviewer', s: 'Many bilingual people say they have a different personality in each language. Is that true?' },
        { who: 'Ana Ruiz', s: 'The feeling is real, and I hear it constantly. But I think it overstates the case. What changes is the setting and the habits that come with it, the people you speak to and the way you learnt to joke, not who you are.' },
        { who: 'Interviewer', s: 'What would you say to someone learning a language now?' },
        { who: 'Ana Ruiz', s: 'Use that distance. Write a difficult email in English first, when you are angry, and see what you think of it. A second language can be a very good place to stand back from your own reactions.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Long turn and challenge', md: 'The student chooses a card from board page 4 and gives a full two-minute long turn while you time it and note language. Then challenge one claim they made (*Is there evidence for that?*) so they have to hedge or defend it with careful verbs. Swap: you give a short long turn on another card with one overstated claim in it, and the student finds it and rephrases it. Finish with five corrected sentences from their turn.' },
    small: { title: 'Cards round', md: 'Give each student a card from board page 4 (cards can repeat in a group of more than three). Each speaks for about two minutes; one listener answers the follow-up question, and another listens only for the verbs of evidence and notes any overstatement. After every turn, the listener reports one careful and one overstated sentence they heard. Close with the group discussion question on the card page.' },
  },
  homework: { book: 'u15', md: 'Finish lesson 4 of unit 15 if needed and do the unit 15 test, then do lesson 1 of unit 16 (Reading and Use of English, Parts 1 to 7). Write about 150 words on a word in your language that has no single English equivalent: explain what it means and whether its speakers notice something English speakers miss, with at least three verbs of evidence from today and one *it does not follow that*.' },
};
