// English C2, class 4 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u1:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c04',
  focus: 'By the end every student recognises euphemism (*pass away*, *between jobs*, *negative growth*) and understatement (*a bit of a challenge*, *not entirely convinced*), reads the real meaning and the attitude behind them, and judges when softening is kindness and when it hides the truth. The speaking goal: use a touch of understatement naturally in Speaking Part 1, without sounding rehearsed.',
  tips: [
    'Euphemism is a cultural topic as much as a language one. Ask what students’ own languages soften (death, money, age, the body) and compare; the discussion is real C2 speaking practice.',
    'Understatement is often missed in international meetings: *not ideal* is heard as *fine*. Give students the real meaning of a few common phrases from working life (*with respect*, *I’m not sure that’s quite right*, *that’s an interesting idea*).',
    'Distinguish kindness from concealment with one test: who does the softer word protect? The bereaved, or the organisation?',
    'Do not let students overuse understatement in Speaking Part 1. One light touch is natural; three in a row sound like a performance.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Say: *My weekend was a bit of a challenge.* Ask students to guess what really happened. Then each student describes a bad moment from their week with an understatement, and the others guess how bad it really was.' },
    { min: 10, title: 'Gentle words', md: 'Show board page 1. Students match the euphemisms with their plain meaning, then say who each euphemism protects.' },
    { min: 12, title: 'What they really mean', md: 'Show board page 2. Students choose the real meaning of each understatement, then sort the softer phrases into kindness and concealment, and justify the borderline ones.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C2 Proficiency Speaking Part 1. Students choose the best answers and say why, then answer the questions themselves. In 1 on 1, you are the examiner; in small groups, students take turns as examiner.' },
    { min: 5, title: 'Close', md: 'Each student says one euphemism they would happily use and one they would never use, and why. Set the homework.' },
  ],
  board: [
    { title: 'Gentle words', blocks: [
      { t: 'ex', kind: 'match', h: 'Match the gentle phrase with its plain meaning.', pairs: [
        ['under the weather', 'slightly ill'],
        ['tired and emotional', 'drunk'],
        ['pre-owned', 'second-hand'],
        ['negative growth', 'a fall in the economy'],
        ['collateral damage', 'civilians killed or harmed in a military attack'],
        ['letting someone go', 'dismissing someone from their job'],
      ] },
      { t: 'tip', art: 'owl', md: '*Tired and emotional* began as a joke in British journalism: a way of saying that a public figure was drunk without risking a court case. Many euphemisms start like this, protecting the speaker rather than the listener.' },
    ] },
    { title: 'What they really mean', blocks: [
      { t: 'ex', kind: 'choice', h: 'What does the speaker really mean?', items: [
        { q: '“I’m not entirely convinced by the new timetable,” said the head of department.', o: ['She thinks the timetable is a bad idea.', 'She mostly agrees with the timetable.', 'She has not read the timetable yet.'], why: 'Understatement: *not entirely convinced* usually means *not convinced at all*.' },
        { q: '“The flat has a few teething problems,” the agent admitted, as water dripped from the ceiling.', o: ['The flat has serious faults.', 'The flat is new and almost perfect.', 'The agent will fix the problems today.'], why: '*A few teething problems* plays down faults that the dripping water shows are serious.' },
        { q: '“His speech was not without its moments,” the critic wrote.', o: ['Most of the speech was poor.', 'The speech was excellent throughout.', 'The speech was too long.'], why: 'Litotes: *not without its moments* means there were only a few good parts.' },
        { q: '“We’ve had the odd disagreement over the years,” said the actor about his co-star of twenty years.', o: ['They have often argued.', 'They have never argued.', 'They argued once.'], why: 'Understatement: *the odd disagreement* makes frequent quarrels sound small.' },
      ] },
      { t: 'ex', kind: 'sort', h: 'Kind softening, or hiding the truth?', groups: ['kindness', 'concealment'], explain: ['groups'], items: [
        { s: '“She lost her husband last spring.”', g: 0, why: 'Gentle language at a moment of grief.' },
        { s: '“The bank is restructuring its branch network.”', g: 1, why: 'A vague phrase that hides branch closures and job losses.' },
        { s: '“He’s been a little under the weather.”', g: 0, why: 'A polite way to mention illness without detail.' },
        { s: '“Some passengers experienced an extended delay.”', g: 1, why: 'Hides how long the delay was and who was responsible.' },
        { s: '“Our son is still finding his feet.”', g: 0, why: 'Protects a young person who has not found work or a direction yet.' },
        { s: '“Mistakes were made.”', g: 1, why: 'The passive hides who made the mistakes.' },
      ] },
    ] },
    { title: 'Exam corner: Speaking Part 1', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Speaking Part 1): the examiner asks each question below. Choose the answer that would score best.', items: [
        { q: '“How do you usually spend your weekends?”', o: ['Less restfully than I’d like. I have two small children, so a lie-in is, shall we say, a rare luxury. But by Sunday afternoon we’re usually in the park, and that makes up for a lot.', 'I spend my weekends with my family and we go to the park.', 'Weekends are very busy for me, very very busy, always busy.'], why: 'A light understatement (*a rare luxury*), a concrete detail and a positive turn: natural range.' },
        { q: '“Do you enjoy cooking?”', o: ['I enjoy it more than the people who eat it, I suspect. I’m enthusiastic rather than skilled, but I’m getting better, and nobody has been ill yet.', 'Yes, I like cooking very much.', 'Cooking is something that I am enjoying to do sometimes.'], why: 'Self-deprecating humour and a contrast (*enthusiastic rather than skilled*) with control.' },
        { q: '“What kind of weather do you like best?”', o: ['Anything but the heat, really. Where I grew up, summers were not exactly mild, so I’ve come to love a cold, bright morning.', 'I like cold weather.', 'I like the weather when it is good weather and not bad.'], why: 'Litotes (*not exactly mild*) and a reason from experience, in two sentences.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Speaking Part 1** the examiner asks each candidate a few questions about themselves for about **two minutes**. One touch of understatement or humour shows range; keep the rest of the answer plain and direct, and stop after two or three sentences.' },
    ] },
  ],
  activities: {
    one: { title: 'Break it gently', md: 'Role-play three situations in turn: telling a colleague their project is being cancelled, telling a friend their business idea will not work, and writing to a customer about a long delay. The student delivers each message twice, once kindly and once in the vague corporate style that hides the truth. Discuss which version is more honest and which one the student would want to hear.' },
    small: { title: 'The press office', md: 'Post a plain bad-news fact in the chat (*The factory will close and 200 people will lose their jobs*). Students write the press release sentence that softens it as much as possible, then read it out. The group translates each version back into plain English and votes on which one hides the truth most skilfully, and which one is kindest. Repeat with a fact a student chooses.' },
  },
  homework: { book: 'u1:p4', md: 'Finish lesson 3 of unit 1 if needed, then do lesson 4 (The words we choose). Find one euphemism in a news story or an official letter this week, copy the sentence, and write about 100 words on what it means, who it protects and whether you think it is fair.' },
};
