// English C2, class 24 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u5:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c24',
  focus: 'By the end every student follows speakers of different Englishes without stopping to translate, picks out opinion, attitude and implication in a discussion in the format of C2 Proficiency Listening Part 3, and gives a balanced two-minute view on who owns English in the format of Speaking Part 3, using the varieties, politeness and register of unit 5 as evidence.',
  tips: [
    'In Listening Part 3 the wrong options often take a word you will hear and attach it to the wrong speaker or to an idea the speaker rejects. After each answer, ask *Who said that, and did they agree with it?*',
    'The varieties in the friends’ conversation are there to be understood, not copied. Ask students what each phrase means, not whether they would use it.',
    'For the Speaking long turn, time two minutes exactly. Most students stop after a minute; teach them to add an example, then a counter-argument, then a conclusion.',
    'Bring in the students’ own experience: many C2 learners work in international teams and have strong views on accent and correctness. Let that drive the discussion.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *In your work or studies, who is easiest to understand in English: native speakers or other learners? Why?*' },
    { min: 10, title: 'Four Englishes', md: 'Show board page 1. Read the conversation aloud with the students taking parts, then sort the phrases by variety and say what each one means.' },
    { min: 18, title: 'Exam corner', md: 'Show board page 2: C2 Proficiency Listening Part 3. Give students a minute to read the questions. Read the discussion aloud twice at natural speed (with a student as a second voice if you like). Check together, asking who said what.' },
    { min: 7, title: 'The long turn', md: 'Show board page 3: C2 Proficiency Speaking Part 3. Read the card together and choose the best opening. Agree a plan of point, example, counter-argument and conclusion.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Each student finishes the sentence *What matters most in international English is…* Set the homework.' },
  ],
  board: [
    { title: 'Four Englishes', blocks: [
      { t: 'dialogue', title: 'Four colleagues plan a team dinner', lines: [
        { who: 'Siobhan', s: 'Grand, so we’re all on for Thursday? I’m after booking a table at that place by the river.' },
        { who: 'Arjun', s: 'Thursday works. Kindly send the address and I’ll revert by evening about the timing; our review meeting may get preponed.' },
        { who: 'Kayla', s: 'Y’all, I’m so excited. Is it the kind of place where I can get fries with everything?' },
        { who: 'Josh', s: 'No worries, there’s heaps on the menu. I can pick you up in the arvo if you like; I’ll fill up at the servo on the way.' },
        { who: 'Siobhan', s: 'Ah, you’re very good. Don’t be giving out to me if it rains, mind.' },
      ] },
      { t: 'ex', kind: 'sort', h: 'Which variety does each phrase come from?', groups: ['Irish', 'Indian', 'American', 'Australian'], items: [
        { s: 'I’m after booking', g: 0, why: 'Irish English: *I’m after doing* = I have just done.' },
        { s: 'giving out to me', g: 0, why: 'Irish English: *give out to someone* = complain to them, scold them.' },
        { s: 'I’ll revert', g: 1, why: 'Indian English: *revert* = reply.' },
        { s: 'preponed', g: 1, why: 'Indian English: brought forward to an earlier time.' },
        { s: 'Y’all', g: 2, why: 'The plural *you* of the southern United States.' },
        { s: 'fries', g: 2, why: 'American for British *chips*.' },
        { s: 'the arvo', g: 3, why: 'Australian: the afternoon.' },
        { s: 'the servo', g: 3, why: 'Australian: the petrol station.' },
      ] },
    ] },
    { title: 'Exam corner: Listening Part 3', blocks: [
      { t: 'dialogue', title: 'Script for the teacher to read aloud twice: English at work', lines: [
        { who: 'Presenter', s: 'Today: who finds international meetings hardest? With me are Ruth, who trains staff for a shipping company in Rotterdam, and Kwame, a researcher in Accra who studies English used between non-native speakers. Ruth, you say native speakers are often the difficulty.' },
        { who: 'Ruth', s: 'Not the difficulty exactly, but one nobody expects. In our meetings a Dutch engineer and a Brazilian buyer understand each other perfectly well. Then a British manager joins, speaks quickly, makes a joke about cricket, and the room goes quiet. He leaves thinking it went well. Everyone else is quietly lost.' },
        { who: 'Kwame', s: 'That matches what we find. Non-native speakers adjust to each other almost automatically: they slow down, they check, they repeat. Native speakers tend not to, because they have never had to. I wouldn’t call them impolite. They simply don’t know what makes their English hard.' },
        { who: 'Presenter', s: 'So should companies train their native speakers?' },
        { who: 'Ruth', s: 'We already do, and the first session is always a shock. People are asked to explain a task with no idioms at all, and most can’t keep it up for more than a minute. By the third session, though, they are rather proud of themselves.' },
        { who: 'Kwame', s: 'I’d add a note of caution. If the lesson becomes “native speakers must simplify”, you risk a kind of talking down. The aim is accommodation, meeting in the middle, not one side making itself smaller. Learners also gain from hearing rich, idiomatic English, as long as someone is willing to explain it.' },
        { who: 'Presenter', s: 'And for learners themselves?' },
        { who: 'Kwame', s: 'Stop apologising for your accent. In most international work, what counts is being understood, and an accent rarely stands in the way of that. Clarity is a skill. Sounding like someone from London is a choice.' },
      ] },
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Listening Part 3): choose the answer which fits best according to what you hear.', items: [
        { q: 'What point does Ruth make with the example of the British manager?', o: ['He does not realise that others have not understood him.', 'His humour offends his international colleagues.', 'Native speakers should not take part in such meetings.', 'The engineer and the buyer find him unfriendly.'], why: '*He leaves thinking it went well. Everyone else is quietly lost.*' },
        { q: 'How does Kwame explain the difficulty with native speakers?', o: ['They have no experience of adapting their English.', 'They are less polite than other speakers.', 'They refuse to repeat what they have said.', 'They speak more formally than other speakers.'], why: '*They have never had to… They simply don’t know what makes their English hard.* He rejects *impolite*.' },
        { q: 'What does Ruth say about the training sessions?', o: ['Staff find them hard at first but end up valuing them.', 'Most staff refuse to attend after the first one.', 'They teach staff to replace idioms with jokes.', 'They take longer than staff expect.'], why: '*The first session is always a shock… By the third session… rather proud of themselves.*' },
        { q: 'What is Kwame’s concern about training native speakers?', o: ['It could lead them to speak in a condescending way.', 'It would prevent learners from hearing idioms at all.', 'It costs companies more than it saves.', 'It makes non-native speakers lazy.'], why: '*You risk a kind of talking down.* He adds that idioms help learners if explained.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Method for **Listening Part 3**: the questions follow the order of the discussion. Read them before you listen and note whose view each one asks about. Words from the recording appear in wrong options too (*impolite*, *idioms*), so check who said the word, and whether they accepted or rejected the idea.' },
    ] },
    { title: 'Speaking Part 3: the long turn', blocks: [
      { t: 'text', md: 'In the format of the C2 Proficiency exam (Speaking Part 3): each candidate speaks alone for **about two minutes** from a card with a question and three ideas. The ideas are there to help, and you need not use them all. Then the partner answers a question on the same topic, and the examiner leads a short discussion.\n\n**Card:** *Should international organisations choose one standard English, or accept many Englishes?* The card suggests three ideas: *clarity and mistakes*, *identity and respect*, and *customers and partners*.' },
      { t: 'ex', kind: 'choice', h: 'Which opening would score best?', items: [
        { q: 'Choose the best way to start the long turn.', o: ['I’d say it depends on what the English is for. In a contract, one standard clearly matters; in a meeting, I think accepting different Englishes is not only fairer but more efficient.', 'Yes, they should choose one English. That is my answer.', 'There are many Englishes in the world, for example British, American, Australian, Indian, Irish and Scottish English.'], why: 'It answers the question at once, makes a distinction and sets up the rest of the turn; the others give a bare answer or only a list.' },
      ] },
      { t: 'tip', md: 'Plan the two minutes as **point, example, counter-argument, conclusion**. Use evidence from this unit: a false friend that caused a mistake, a polite phrase that hid a refusal, the variety you write in and why.' },
    ] },
  ],
  activities: {
    one: { title: 'The long turn and discussion', md: 'The student gives the two-minute long turn on the card on board page 3; time it exactly. Then act as the examiner and ask two follow-up questions (*Should learners aim to sound like native speakers? Is it fair that a job interview in English favours some accents?*). Finish with feedback on range: note three sentences and upgrade them together with language from units 4 and 5 (a hedge, a reporting verb, a variety-specific example).' },
    small: { title: 'Long turns in pairs', md: 'In pairs (a group of three can rotate), one student gives the two-minute long turn on the card on board page 3 while the partner listens; then the partner answers in about thirty seconds: *Do you agree?* Swap with a second card: *Should schools teach one variety of English, or several?* (ideas: exams, the media, travel). The others note one strong phrase and one missed chance for each speaker, then the whole group discusses both questions for three minutes.' },
  },
  homework: { book: 'u5', md: 'Finish lesson 4 of unit 5 if needed and do the unit 5 test, then do lesson 1 of unit 6 (Far be it from me). Write about 200 words answering the question on the card from today, with a point, an example from your own experience, a counter-argument and a conclusion.' },
};
