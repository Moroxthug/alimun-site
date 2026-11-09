// English C2, class 11 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u3:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c11',
  focus: 'By the end every student tells verbal irony, sarcasm, understatement, litotes and overstatement apart, hears the signals that show a speaker does not mean exactly what they say (tone, context, a clash between words and facts), and answers questions about a speaker’s attitude and purpose in the format of C2 Proficiency Listening Part 1.',
  tips: [
    'Irony lives in the voice. Read every example aloud twice, once flat and once with the ironic tone, and ask students which reading the context needs.',
    'Students often call any bad luck *ironic*. Keep the distinction clear: irony needs a reversal of what was expected or a gap between words and meaning; rain on your birthday is just annoying.',
    'Sarcasm is aimed at someone and can wound. Encourage students to recognise it but to use gentle irony and understatement instead, especially with people they do not know well.',
    'For the listening, read the extracts aloud at natural speed, twice, as in the exam. Act the tone: the questions depend on it. In small groups, a confident student can read one part.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Look out of the window (or at the weather forecast) and say *Lovely weather, isn’t it?* Ask students what you mean and how they know. Then each student describes their journey or their morning with one ironic sentence.' },
    { min: 10, title: 'Five ways of not saying it', md: 'Show board page 1. Students sort the sentences, then read three of them aloud with the right tone.' },
    { min: 8, title: 'What they really mean', md: 'Show board page 2. Students choose the real meaning and say which signal told them: the context, the exaggeration or the clash with the facts.' },
    { min: 12, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 20, title: 'Exam corner', md: 'Show board page 3: C2 Proficiency Listening Part 1. Students read the questions first (one minute). Read each extract aloud twice, as in the exam, while students choose their answers. Then show the scripts, check together and find the words that carry the attitude.' },
    { min: 5, title: 'Close', md: 'Each student says one understatement about their week. The others say what it really means. Set the homework.' },
  ],
  board: [
    { title: 'Five ways of not saying it', blocks: [
      { t: 'ex', kind: 'sort', h: 'Which kind of indirect meaning is it?', groups: ['verbal irony', 'sarcasm', 'understatement', 'litotes', 'overstatement'], explain: ['groups'], items: [
        { s: '“Oh good, the printer’s jammed again. My favourite part of the day.”', g: 0, why: 'Positive words about a situation the speaker clearly dislikes, said lightly.' },
        { s: '“Thanks so much for telling me the meeting was cancelled. I only waited an hour,” she said to her colleague.', g: 1, why: 'Irony aimed at a person, to criticise them.' },
        { s: '“It was a little tricky,” said the student who had answered two of the ten questions.', g: 2, why: 'Far less than the truth.' },
        { s: '“Her first novel was not unsuccessful: it sold out within a week.”', g: 3, why: 'Denying the opposite (*not unsuccessful*) to make a quiet point.' },
        { s: '“I’ve told you a million times to close the door.”', g: 4, why: 'Deliberate exaggeration for emphasis.' },
        { s: '“Well, you’re a ray of sunshine this morning,” he said to his grumpy flatmate.', g: 1, why: 'The opposite of the truth, aimed at someone to tease or criticise.' },
        { s: '“The view from the top was not entirely unpleasant,” said the climber, close to tears.', g: 3, why: 'Litotes: a double negative for something very moving.' },
      ] },
    ] },
    { title: 'What they really mean', blocks: [
      { t: 'ex', kind: 'choice', h: 'What does the speaker really mean?', items: [
        { q: '“I see you’ve gone for the minimalist approach,” said the teacher, looking at the one-paragraph essay.', o: ['The essay is far too short.', 'The essay has a clear, simple style.', 'The student has followed the instructions well.'], why: 'Irony: *minimalist* sounds like praise, but the context shows criticism.' },
        { q: '“It’s not the worst idea you’ve ever had,” said Clara.', o: ['She quite likes the idea.', 'She thinks the idea is terrible.', 'She has not heard the idea yet.'], why: 'Litotes: guarded approval, less than enthusiastic but positive.' },
        { q: '“The interview could have gone better,” Tom admitted, after spilling coffee over the director.', o: ['The interview went very badly.', 'The interview went quite well.', 'Tom wants another interview.'], why: 'Understatement: the spilt coffee shows how bad it was.' },
        { q: '“I could eat a horse,” said Ana as she came in from the hike.', o: ['She is very hungry.', 'She wants to try new food.', 'She feels unwell.'], why: 'Overstatement: a fixed exaggeration meaning *very hungry*.' },
      ] },
    ] },
    { title: 'Exam corner: Listening Part 1', blocks: [
      { t: 'dialogue', title: 'Extract one: the team-building weekend', lines: [
        { who: 'Hannah', s: 'So, the team-building weekend. I gather it was a roaring success.' },
        { who: 'Marcus', s: 'Oh, unforgettable. We spent Saturday building a raft that sank in about four seconds, and Sunday in a workshop on communication, during which the facilitator’s microphone didn’t work. Nobody heard a word.' },
        { who: 'Hannah', s: 'There’s a lesson in that somewhere.' },
        { who: 'Marcus', s: 'There is. I’m just not sure it’s the one they paid for. Still, I’ll say this for it: I’ve never seen the accounts team laugh so much. Even Peter. And Peter doesn’t laugh.' },
        { who: 'Hannah', s: 'So it worked, in a way.' },
        { who: 'Marcus', s: 'In a way nobody planned, yes. Which is probably the only way these things ever work.' },
      ] },
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Listening Part 1), shortened to two extracts: listen to extract one and choose the answer (A, B or C) which fits best according to what you hear.', items: [
        { q: 'When Marcus says “Oh, unforgettable”, he is', o: ['being ironic about how badly the weekend went', 'expressing real enthusiasm for the activities', 'complaining that he remembers very little of it'], why: 'He follows it with a sinking raft and a silent workshop: the words say the opposite of the facts.' },
        { q: 'What is Marcus’s overall view of the weekend?', o: ['It had a good effect that nobody intended.', 'It was a complete waste of the company’s money.', 'It improved communication as the organisers hoped.'], why: '*I’ve never seen the accounts team laugh so much… In a way nobody planned.*' },
      ] },
      { t: 'dialogue', title: 'Extract two: complaining abroad', lines: [
        { who: 'Presenter', s: 'Your new book is about the way travellers complain. What did you find?' },
        { who: 'Ruth', s: 'That the loudest complaints are rarely the most effective. In some places, if you tell a waiter the soup is “not quite what I expected”, he’ll take it away at once and apologise, because he knows exactly how cross you are. Elsewhere the same sentence would be taken as mild praise.' },
        { who: 'Presenter', s: 'So understatement doesn’t travel.' },
        { who: 'Ruth', s: 'Oh, it travels perfectly well. It just arrives in a different shape. I met a British couple in a mountain hotel who had no hot water for a week. Their only comment to the manager was that the showers were “bracing”. He thanked them warmly.' },
        { who: 'Presenter', s: 'And did they ever get hot water?' },
        { who: 'Ruth', s: 'They did not. But they got a very good story out of it, which, for a certain kind of traveller, is worth rather more.' },
      ] },
      { t: 'ex', kind: 'choice', h: 'Listen to extract two and choose the answer (A, B or C) which fits best according to what you hear.', items: [
        { q: 'What does Ruth say about understatement?', o: ['Its meaning depends on whether the listener shares the speaker’s habits.', 'It is the most effective way to complain in any country.', 'It is a habit that travellers are slowly losing.'], why: 'The same sentence is understood as anger in one place and *mild praise* in another.' },
        { q: 'Ruth tells the story of the British couple to show that', o: ['their complaint was heard as a compliment.', 'hotel managers rarely take complaints seriously.', 'travellers ought to complain more directly.'], why: '*Bracing* was meant as a complaint; the manager *thanked them warmly*. Ruth does not say what travellers ought to do.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Listening Part 1** you hear **three short extracts**, each **twice**, with **two questions** and **three options** each. When a question quotes the speaker (*When Marcus says…, he is…*), the words probably do not mean what they seem: listen to what comes before and after them.' },
    ] },
  ],
  activities: {
    one: { title: 'Say it three ways', md: 'Give the student three situations in turn: a delayed train, a colleague who took credit for their work, a holiday in the rain. For each, the student says one ironic sentence, one understatement and one overstatement. Then discuss which one they would actually say, to whom, and which one could cause offence.' },
    small: { title: 'Read the tone', md: 'Each student writes one ambiguous sentence in the chat (*Well, that was interesting.*, *Great job, everyone.*). Another student says it aloud in a tone of their choice: sincere, ironic or sarcastic. The group guesses which tone it was and what the speaker really means. Discuss how the same words changed meaning with the voice alone.' },
  },
  homework: { book: 'u3:p2', md: 'Finish lesson 1 of unit 3 if needed, then do lesson 2 (Puns and double meanings). Write a short dialogue (about 150 words) between two people after a disastrous event, a party, a trip or a meeting, in which one speaker uses irony, understatement and litotes and the other takes everything literally.' },
};
