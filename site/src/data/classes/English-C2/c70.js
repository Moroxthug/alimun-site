// English C2, class 70 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u15:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c70',
  focus: 'By the end every student reads the layers under a sentence: connotation, implicature (what a speaker means by saying something in this way, here: faint praise, a reply that changes the subject, an answer that says less than expected) and presupposition (what a sentence takes for granted, triggered by words such as *stop*, *again*, *realise*, *fail to*, *even*, *continue*). They answer questions in the format of C2 Proficiency Listening Part 1, where the right option is what the speakers mean, and they say something tactful without saying it outright.',
  tips: [
    'Implicature works because listeners assume the speaker is being cooperative: saying enough, saying what is relevant. When a reply seems to say too little or to change the subject, ask *Why would they say that, here?*',
    'Presupposition is easy to miss because it is assumed, not stated. Ask students to say what each sentence takes for granted, and then how they would challenge it: *Wait, I never said I had started.*',
    'In Listening Part 1, an option that repeats the speaker’s words exactly is often a trap; the answer is usually a paraphrase of what they **mean**. Read the scripts with the hesitations and stress that carry the meaning (*It was… memorable*).',
    'Faint praise is cultural. Ask students whether the same remark would be understood the same way in their own language; this is a good bridge to the next lesson on translation.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *A friend shows you a photo of their new haircut and you do not like it. What do you say?* Students answer; ask the others what each answer really means.' },
    { min: 8, title: 'What is meant', md: 'Show board page 1. Students choose what the speaker implies and say which words carry the hidden meaning.' },
    { min: 7, title: 'What is taken for granted', md: 'Show board page 2. Students tap the word that triggers a presupposition and say what the sentence assumes.' },
    { min: 20, title: 'Exam corner', md: 'Show board page 3: C2 Proficiency Listening Part 1. Give students about 30 seconds to read the questions for each extract. Read each extract from board page 4 aloud twice, then check, showing where the wrong options came from.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below, with the situations on board page 5.' },
    { min: 5, title: 'Close', md: 'Each student gives one example of faint praise from their own language and says how they would translate the meaning, not the words. Set the homework.' },
  ],
  board: [
    { title: 'What is meant', blocks: [
      { t: 'ex', kind: 'choice', h: 'What does the second speaker imply?', items: [
        { q: 'A: How was your sister’s cooking? B: Well, she’s very enthusiastic.', o: ['B did not enjoy the food.', 'B loved the food.', 'B did not eat anything.'], why: 'Praise for the cook’s enthusiasm, not for the food: faint praise.' },
        { q: 'A: Did the new plan go down well at the meeting? B: Nobody actually laughed.', o: ['The plan was received coolly.', 'The plan was a great success.', 'The meeting was cancelled.'], why: 'If not being laughed at is the best that can be said, the reception was poor.' },
        { q: 'A: Could you lend me fifty euros? B: It’s the end of the month.', o: ['B is unwilling or unable to lend the money.', 'B will lend it next week.', 'B has forgotten the date.'], why: 'The reply seems irrelevant, so the listener works out the reason: there is no money left.' },
        { q: 'A reference: “Mr Reed was always punctual, and his handwriting is excellent.”', o: ['The writer has little good to say about his work.', 'The writer strongly recommends him.', 'The writer has never met him.'], why: 'A reference that praises only minor qualities says, by what it leaves out, that there is nothing more to praise.' },
      ] },
    ] },
    { title: 'What is taken for granted', blocks: [
      { t: 'ex', kind: 'spot', h: 'Tap the word or words that trigger a presupposition.', items: [
        { s: 'The company has [stopped] testing its products on animals.', why: '*Stopped* assumes that it did test them before.' },
        { s: 'When did you [realise] that the figures were wrong?', why: '*Realise* treats *the figures were wrong* as a fact. The question also assumes you did realise it.' },
        { s: 'Prices have gone up [again].', why: '*Again* assumes they went up before.' },
        { s: 'The minister [failed to] explain the decision.', why: '*Failed to* assumes that he tried, or was expected to.' },
        { s: '[Even] Paul thought the speech was too long.', why: '*Even* assumes that others thought so too and that Paul was the least likely to.' },
      ] },
      { t: 'tip', art: 'owl', md: 'A presupposition is hard to challenge because it is never said directly. To reject it, you have to step outside the question: *Hang on, I never said the figures were wrong.* Loaded questions in interviews work in exactly this way.' },
    ] },
    { title: 'Exam corner: Listening Part 1', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Listening Part 1): you will hear three different extracts. For each question, choose the answer which fits best according to what you hear.', items: [
        { q: 'Extract one. You hear two friends talking about a new restaurant. What does Sam think of the food?', o: ['It was poor.', 'It was excellent.', 'It was overpriced.'], why: '*It was… memorable.* and *I’m not sure the dream includes a chef*: praise for the lighting and the staff, none for the food.' },
        { q: 'Extract one. Why has Sam not told Theo what he really thinks?', o: ['He does not want to hurt him at a difficult moment.', 'He believes Theo already knows.', 'He thinks the restaurant will close anyway.'], why: '*He’s put everything into it; this isn’t the moment.*' },
        { q: 'Extract two. You hear two colleagues discussing an email from their director. What does Ben object to in the email?', o: ['It takes for granted something that has not happened.', 'It is too long and too formal.', 'It criticises him personally.'], why: '*Continue. As if we’d started.* The word *continue* presupposes earlier work on efficiency.' },
        { q: 'Extract two. What does Ana suggest about Ben?', o: ['He is more worried than he admits.', 'He has not read the email properly.', 'He agrees with the director.'], why: '*You say that, but you’ve read it four times.*' },
        { q: 'Extract three. You hear a linguist talking about politeness. According to Kofi, what does “with respect” usually signal in a meeting?', o: ['strong disagreement', 'genuine admiration', 'a wish to end the discussion'], why: '*It usually means the speaker is about to tell you you’re wrong.*' },
        { q: 'Extract three. Why does Kofi say the phrase is not a lie?', o: ['Everyone present understands what it really means.', 'The speaker does respect the listener.', 'It is used mainly in writing.'], why: '*Everyone in the room knows what it means, so nobody is deceived.*' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 1** there are **three** extracts with **two** questions each, and you hear each extract twice. Many questions ask what a speaker **means**, **feels** or **implies**. Listen for what is praised faintly, what is avoided and what is taken for granted.' },
    ] },
    { title: 'Scripts for Part 1 (read aloud; show after checking)', blocks: [
      { t: 'dialogue', title: 'Extract one', lines: [
        { who: 'Lena', s: 'So, have you been to Theo’s restaurant yet?' },
        { who: 'Sam', s: 'Last Friday. The lighting is gorgeous, and the waiters couldn’t have been friendlier.' },
        { who: 'Lena', s: 'And the food?' },
        { who: 'Sam', s: 'It was… memorable. I mean, I’m glad he’s following his dream. I’m just not sure the dream includes a chef.' },
        { who: 'Lena', s: 'Oh dear. Are you going to say anything to him?' },
        { who: 'Sam', s: 'I told him the place looked wonderful. Which it does. He’s put everything into it; this isn’t the moment.' },
      ] },
      { t: 'dialogue', title: 'Extract two', lines: [
        { who: 'Ana', s: 'Did you see the director’s email? “As we continue to improve the efficiency of the team…”' },
        { who: 'Ben', s: 'Continue. As if we’d started. Nobody has mentioned efficiency all year.' },
        { who: 'Ana', s: 'I think “review the structure” is the part to worry about.' },
        { who: 'Ben', s: 'Maybe. Or maybe he just wants to look busy. I’m not going to lose sleep over a verb.' },
        { who: 'Ana', s: 'You say that, but you’ve read it four times.' },
      ] },
      { t: 'dialogue', title: 'Extract three', lines: [
        { who: 'Interviewer', s: 'You study what you call politeness markers. Give us an example.' },
        { who: 'Kofi', s: '“With respect” is my favourite. Literally, it promises respect. In practice, in a meeting, it usually means the speaker is about to tell you you’re wrong, and quite possibly that you’re a fool.' },
        { who: 'Interviewer', s: 'So it’s a lie?' },
        { who: 'Kofi', s: 'No, and that’s the interesting part. Everyone in the room knows what it means, so nobody is deceived. It’s more like a warning light. It lets the speaker disagree sharply while keeping up the appearance that the relationship is intact. Take it away and the same sentence sounds like an attack.' },
      ] },
    ] },
    { title: 'Say it without saying it', blocks: [
      { t: 'text', md: '*A colleague asks what you thought of their presentation, which was far too long.* *A neighbour invites you to their band’s concert, and you heard them practising.* *Your manager asks whether the new software is an improvement, and it is not.* *A friend asks if you liked the book they lent you, which you did not finish.*' },
      { t: 'examples', items: [
        { s: 'Well, you certainly **covered everything**.', n: 'Faint praise: the length is the point.' },
        { s: 'I’m **not sure** I’d be the best judge of that.', n: 'Avoiding a judgement.' },
        { s: 'It’s **certainly different** from the old system.', n: 'A neutral word in place of praise.' },
        { s: '**Let’s just say** I can see why other people love it.', n: '*Let’s just say* signals that more is meant than said.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'What did you really mean?', md: 'Take turns with the situations on board page 5. You ask the question; the student answers tactfully without saying the truth outright, using faint praise, a change of subject or a careful choice of word. You say what you understood, and the student says whether that was what they meant. Then swap: you answer and the student explains your implicature and any presupposition. Finish by reading one of the scripts again and asking the student to say, line by line, what each speaker means.' },
    small: { title: 'Read between the lines', md: 'Students work in pairs, or in a three. One student asks a question from board page 5; the partner answers tactfully without saying the truth; the third student, or in a pair the student who asked, says what the answer really meant, and the speaker confirms or corrects. Rotate the roles. To finish, each student writes one loaded question with a presupposition on the board (*When did you stop…?*), and the others challenge it politely.' },
  },
  homework: { book: 'u15:p2', md: 'Finish lesson 1 of unit 15 in the book if needed. Find two examples of implicature or presupposition in the news, in an advert or in a conversation this week, write them down and explain in one or two sentences what each one means or takes for granted. Then do lesson 2 of unit 15 (Translating meaning, not words).' },
};
