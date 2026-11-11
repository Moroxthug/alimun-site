// English B1, class 35 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u8:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c35',
  focus: 'By the end of the class every student can choose between **will**, **going to** and the **present continuous** for the future and explain why: *will* for decisions made now, predictions and offers; *going to* for plans and predictions from evidence; the present continuous for fixed arrangements. Each student talks about their next weekend, a plan for this year and one prediction about the future.',
  tips: [
    'Many students use *will* for everything because their language has one future. Give the simplest rule first: an arrangement with a time and other people is present continuous (*I’m meeting Ana at six*).',
    'Students say *I will go to the cinema tonight* for a plan made yesterday. Ask *When did you decide?*: if before now, it is **going to** or the present continuous.',
    'The instant decision is the key use of *will*. Act it out: the phone rings, *I’ll get it!*; it starts to rain, *I’ll close the window*.',
    'Accept overlap: *I’m going to see* and *I’m seeing* a friend tonight are both natural. Correct only when the meaning is really wrong.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What are you doing after class today?* One sentence each; write two on the board.' },
    { min: 10, title: 'Three futures', md: 'Show board page 1. Go through the table with the question *When did you decide?*, then students do the exercise.' },
    { min: 10, title: 'Why this one?', md: 'Show board page 2. Students read the dialogue and explain each future form.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: B1 Preliminary Listening part 1. Read each text aloud; students choose.' },
    { min: 5, title: 'Fix the mistakes', md: 'Show board page 4.' },
    { min: 5, title: 'Close', md: 'Each student makes one prediction about the class next month. Set the homework.' },
  ],
  board: [
    { title: 'Will, going to, present continuous', blocks: [
      { t: 'table', caption: 'Which future?', explain: ['head', 'col1'], head: ['Form', 'Use it for', 'Example'], rows: [
        ['will', 'a decision now, an offer, a prediction from opinion', 'I’ll help you. I think it’ll rain.'],
        ['going to', 'a plan, a prediction from what you see', 'I’m going to learn to drive. Look, it’s going to rain.'],
        ['present continuous', 'an arrangement with a time or with other people', 'I’m seeing the dentist on Friday.'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the most natural future.', items: [
        { q: '“The phone’s ringing.” – “OK, ___ it.”', o: ['I’ll answer', 'I’m going to answer', 'I’m answering'], why: 'A decision at the moment of speaking: *will*.' },
        { q: 'We ___ a new car next year. We’ve already saved the money.', o: ['are going to buy', 'will buy', 'buy'], why: 'A plan made before: *going to*.' },
        { q: 'I ___ Tom for lunch at one o’clock tomorrow.', o: ['’m meeting', '’ll meet', 'meet'], why: 'An arrangement with a time and another person: present continuous.' },
        { q: 'Look at those clouds. It ___ rain.', o: ['’s going to', '’ll', '’s raining'], why: 'A prediction from what you can see: *going to*.' },
      ] },
    ] },
    { title: 'Why this one?', blocks: [
      { t: 'dialogue', title: 'Weekend plans', lines: [
        { who: 'Ana', s: 'What are you doing on Saturday?' },
        { who: 'Leo', s: 'I’m playing football in the morning, and then I’m going to clean my flat. It’s a mess.' },
        { who: 'Ana', s: 'A few of us are going to the lake. Do you want to come?' },
        { who: 'Leo', s: 'That sounds better than cleaning! OK, I’ll come.' },
      ] },
      { t: 'ex', kind: 'choice', h: 'Why does Leo use each form?', items: [
        { q: '*I’m playing football*', o: ['It is an arrangement with a time and other people.', 'He is deciding now.', 'It is a prediction.'], why: 'Football on Saturday morning is fixed with a team: present continuous.' },
        { q: '*I’m going to clean my flat*', o: ['It is a plan he made before.', 'It is an offer.', 'It is a fixed timetable.'], why: 'He already intended to clean: *going to*.' },
        { q: '*OK, I’ll come.*', o: ['He decides at that moment.', 'He planned it last week.', 'He is talking about a timetable.'], why: 'A decision made while speaking: *will*.' },
      ] },
    ] },
    { title: 'Exam corner: Listening part 1', blocks: [
      { t: 'text', md: 'In the format of B1 Preliminary Listening part 1: short recordings, each with a question. Your teacher reads each one aloud twice.\n\n**One:** *Hi Mum. I’m not coming home for dinner tonight after all: Sara and I are going to the cinema, and we’re eating there.*\n\n**Two:** *Right, everyone. The trip leaves at nine tomorrow, not eight. The bus is going to stop at the museum first, then the castle.*' },
      { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
        { q: 'One: Where is the speaker eating tonight?', o: ['At the cinema', 'At home', 'At Sara’s house'], why: '*we’re eating there*: at the cinema.' },
        { q: 'Two: What will the bus visit first?', o: ['The museum', 'The castle', 'The station'], why: '*stop at the museum first, then the castle*.' },
      ] },
      { t: 'tip', md: 'In Listening part 1 you often hear all three options. Listen for words that change the plan: **after all**, **not**, **first, then**.' },
    ] },
    { title: 'Fix the mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I [will meet] my sister at the airport at 6, we arranged it last week.', a: ['’m meeting', 'am meeting', 'am going to meet'], why: 'An arrangement: present continuous or *going to*.' },
        { s: '“I’m cold.” – “I [am going to close] the window.”', a: ['’ll close', 'will close'], why: 'A decision now: *will*.' },
        { s: 'Next year I [go] to study in Canada.', a: ['’m going', 'am going', 'am going to go'], why: 'A plan: present continuous or *going to*, not the present simple.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'My diary', md: 'The student shows or describes their real diary for next week: arrangements (present continuous), plans without a fixed time (*going to*). Then you make sudden problems (*Your car breaks down on Tuesday!*) and the student decides what to do with *will*. Finish with three predictions about their life in five years.' },
    small: { title: 'Find a time', md: 'Each student writes a busy diary for next weekend in the chat (three arrangements). In pairs, they try to find a time to meet: *What are you doing on Saturday morning? – I’m having lunch with my parents.* When they find a free time, they decide what to do with *will* and *going to*.' },
    group: { title: 'Predictions', md: 'In breakout rooms of three, each room makes five predictions about life in 2040 (*People will…*, *Cities are going to…* when there is evidence now). Bring everyone back: rooms share predictions and the class votes on the most likely and the most surprising.' },
  },
  homework: { book: 'u8:p1', md: 'Finish book lesson 1 of unit 8 (Will, going to or the present continuous?), including the speaking task. Then write a message of 60 to 80 words to a friend about your plans and arrangements for next weekend, using all three future forms.' },
};
