// English C2, class 27 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u6:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c27',
  focus: 'By the end every student uses modal verbs for attitude: unstressed *will* and *would* for typical behaviour, stressed *will* and *would* for annoying insistence (*He would say that*), *won’t* for refusal, *shall* for offers and suggestions, *may well* (likely) against *might as well* (no better option), modal *dare* and *need* (*He daren’t ask. Need I say more?*), and the continuous for annoyance (*You’re always leaving…*) and tact (*I was wondering whether…*). The listening goal: hear attitude and implication in short extracts in the format of C2 Proficiency Listening Part 1.',
  tips: [
    'Stress carries the meaning. Read every example aloud twice, once with a neutral *will* and once with a heavy one, and ask students what changed. Then make them do the same.',
    '*May well* and *might as well* look almost identical and mean different things. A quick test: if *probably* fits, it is *may well*; if *there’s nothing better to do* fits, it is *might as well*.',
    'Modal *dare* and *need* sound formal and British outside fixed phrases. Students should understand them, use the fixed phrases (*How dare you, Don’t you dare, Need I say more?*), and use the main-verb forms elsewhere.',
    'In Listening Part 1 the questions often quote the speaker. The wrong options usually take the words at face value; ask *What does the tone tell you?*',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Describe someone in your family or a friend by one habit they have. Is the habit endearing or infuriating?* Notice whether students use *will* or *would*; do not correct yet.' },
    { min: 10, title: 'Habit, annoyance or tact?', md: 'Show board page 1. Students sort the sentences, then read each one aloud with the stress that shows the attitude.' },
    { min: 10, title: 'Choose and fix', md: 'Show board page 2, then page 3. Students choose the modal, then correct the mistakes and explain each one.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 15, title: 'Exam corner', md: 'Show board page 4: C2 Proficiency Listening Part 1. Give students thirty seconds to read the questions for each extract. Read each extract aloud twice with the stress marked in the script, then check together.' },
    { min: 5, title: 'Close', md: 'Each student makes one tactful request to the class with *I was wondering whether…* or *Will you be…?* Set the homework.' },
  ],
  board: [
    { title: 'Habit, annoyance or tact?', blocks: [
      { t: 'ex', kind: 'sort', h: 'What is the speaker doing: describing a habit, showing annoyance, or being tactful?', groups: ['habit', 'annoyance', 'tact'], items: [
        { s: 'On summer evenings my grandmother would sit on the step and shell peas.', g: 0, why: 'Unstressed *would*: a typical past habit, said with affection.' },
        { s: 'She’ll happily talk to anyone at a bus stop.', g: 0, why: 'Unstressed *will*: typical present behaviour.' },
        { s: 'You will leave wet towels on the bed!', g: 1, why: 'Stressed *will*: annoying insistence.' },
        { s: 'He’s always borrowing my charger without asking.', g: 1, why: '*Always* + continuous: a repeated habit that irritates.' },
        { s: 'Well, she would blame the referee, wouldn’t she?', g: 1, why: 'Stressed *would*: exactly what you expected her to say.' },
        { s: 'We were hoping you might be able to stay a little longer.', g: 2, why: 'The past continuous softens the request.' },
        { s: 'Will you be needing the meeting room this afternoon?', g: 2, why: 'The future continuous asks about plans without pressing.' },
        { s: 'I was wondering whether you’d had a chance to read my email.', g: 2, why: 'A tactful reminder: past continuous and an indirect question.' },
      ] },
    ] },
    { title: 'Choose the modal', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the option that fits.', items: [
        { q: 'The museum is closed and it’s raining, so we ___ go back to the hotel.', o: ['might as well', 'may well', 'dare'], why: 'There is no better option: *might as well*.' },
        { q: 'Take an umbrella: according to the forecast, it ___ rain later.', o: ['may well', 'might as well', 'need'], why: 'Quite likely: *may well*.' },
        { q: '___ I remind you that the meeting starts at nine sharp?', o: ['Need', 'Dare', 'Would'], why: 'Modal *need* in a question, with no *do* and no *to*: an irritated reminder.' },
        { q: 'He ___ not tell his father that he had crashed the car.', o: ['dared', 'needed', 'shall'], why: 'Modal *dare* in the past: *dared not* + base form.' },
        { q: '___ we take a short break before the next item?', o: ['Shall', 'Dare', 'Ought'], why: '*Shall we…?* makes a suggestion.' },
        { q: 'The printer ___ print anything in colour, however many times I restart it.', o: ['won’t', 'mustn’t', 'needn’t'], why: '*Won’t* for refusal, even by a machine.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'He [dares not to] ask for a pay rise.', a: ['dare not', 'daren’t', 'doesn’t dare to', 'doesn’t dare'], why: 'Modal *dare* takes no *-s* and no *to*; the main verb needs *does*.' },
        { s: 'You [needn’t to] bring anything, as there’s plenty of food.', a: ['needn’t', 'don’t need to'], why: 'Modal *need* takes no *to*.' },
        { s: 'The last bus has gone, so we [may well] walk home.', a: ['might as well', 'may as well'], why: 'No better option: *might as well*. *May well* means *probably*.' },
        { s: 'I [needn’t have gone] to the meeting, so I stayed at home.', a: ['didn’t need to go', 'didn’t have to go'], why: '*Needn’t have gone* means you went; here the speaker did not go.' },
        { s: 'Your brother [always leaves] the door open, and it drives me mad!', a: ['is always leaving', '’s always leaving'], why: 'For irritation, use *always* with the continuous.' },
      ] },
    ] },
    { title: 'Exam corner: Listening Part 1', blocks: [
      { t: 'dialogue', title: 'Script for the teacher to read aloud twice. Extract one: two flatmates', lines: [
        { who: 'Jess', s: 'Has Leo said anything about the rent yet?' },
        { who: 'Sam', s: 'Leo? He **will** keep saying he’ll sort it out tomorrow. I’ve stopped asking.' },
        { who: 'Jess', s: 'Well, he **would** say that. Tomorrow is his favourite day of the week.' },
        { who: 'Sam', s: 'To be fair, he did pay last month in the end. Eventually. In coins.' },
        { who: 'Jess', s: 'We might as well ask the landlord to collect it from him directly.' },
        { who: 'Sam', s: 'Don’t you dare. He’d be mortified, and I’d never hear the end of it.' },
      ] },
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Listening Part 1), shortened to two extracts. Extract one: choose the answer which fits best according to what you hear.', items: [
        { q: 'When Jess says “he would say that”, she suggests that Leo’s promise', o: ['is typical of him and not to be relied on', 'is reasonable given his circumstances', 'is something she did not hear clearly'], why: 'Stressed *would*: exactly what you expect from him; *Tomorrow is his favourite day* confirms it.' },
        { q: 'How does Sam react to Jess’s suggestion?', o: ['He firmly rejects it because it would embarrass Leo.', 'He thinks it may well solve the problem.', 'He offers to pay Leo’s share himself.'], why: '*Don’t you dare*: a strong warning; *He’d be mortified* gives the reason.' },
      ] },
      { t: 'dialogue', title: 'Extract two: two colleagues', lines: [
        { who: 'Helen', s: 'Mark, I was wondering whether you might be able to look over my slides before Thursday. Only if you have a moment.' },
        { who: 'Mark', s: 'Of course. Shall I do it this afternoon? I’ll be working from home anyway.' },
        { who: 'Helen', s: 'That would be wonderful. You needn’t go through every slide, honestly. It’s really the figures I’m worried about.' },
        { who: 'Mark', s: 'The figures may well be fine. You always check them three times. You **will** insist on doing everything yourself.' },
        { who: 'Helen', s: 'Guilty. Old habits.' },
      ] },
      { t: 'ex', kind: 'choice', h: 'Extract two: choose the answer which fits best according to what you hear.', items: [
        { q: 'Why does Helen begin with “I was wondering whether…”?', o: ['to make her request sound tentative and polite', 'because she is not sure she needs help', 'to remind Mark of a promise he made'], why: 'The past continuous and the indirect question soften the request; *Only if you have a moment* adds to it.' },
        { q: 'When Mark says “You will insist on doing everything yourself”, he is', o: ['gently teasing her about a familiar habit', 'criticising her for not trusting her colleagues', 'predicting what she will do on Thursday'], why: 'Stressed *will* for a habit, but the tone is friendly: he has just offered help, and she laughs with *Guilty*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Method for **Listening Part 1**: you hear three short extracts, twice each, with two questions on each. Read the questions first. When a question quotes the speaker, the answer is in the tone and the context around the words, so listen to what comes just before and after the quotation.' },
    ] },
  ],
  activities: {
    one: { title: 'Fond and infuriating', md: 'Ask the student to describe three people they know: one with a habit they love (*She’ll always…, He would…*), one with a habit that drives them mad (*He will…!, She’s always…ing*), and one they need to ask a favour of. For the third, they make the request tactfully, as if you were that person (*I was wondering whether…, Will you be…?*). Listen for the stress on *will* and *would* and ask for it again when it is flat.' },
    small: { title: 'The house meeting', md: 'The students share a flat and hold a house meeting. Each one raises one complaint about someone else’s habit with stressed *will* or *always* + continuous, and the person named answers with a defence or an apology. Then each student makes one tactful request to the group (*We were hoping…, I was wondering whether…*) and one suggestion with *Shall we…?* or *We might as well…*. The group agrees three house rules at the end.' },
  },
  homework: { book: 'u6:p3', md: 'Finish lesson 3 of unit 6 if needed, then do lesson 4 (The last ferry). Write a short portrait of about 150 words of a person you know well, with two fond habits (*will*, *would*), one annoying habit (stressed *will* or *always* + continuous) and one sentence with *may well* or *might as well*.' },
};
