// English B1, class 82 (docs/LESSONS_PLAN.md). Conversation: a discussion class on the whole level (units 1 to 16). Draft for the owner's review.
export const LESSON = {
  id: 'c82',
  focus: 'By the end of the class every student has taken part in longer discussions on topics from the whole B1 level (work and study, travel, the environment, technology, money, culture, health), giving opinions with reasons and examples, agreeing and disagreeing politely, and keeping the conversation going. Fluency comes first; accuracy gets a short slot at the end.',
  tips: [
    'This is the class where students show what B1 means: an independent speaker who can give and defend an opinion. Step back and let them talk.',
    'Prepare follow-up questions that push for reasons: *Why do you think so?*, *Can you give an example?*, *What would happen if…?*',
    'Collect a mix of mistakes from many units for the last slot, not only the latest grammar.',
    'Quieter students may need a minute to prepare their opinion in writing before speaking.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Show board page 1. Students say which statement they agree with most and why, in one sentence.' },
    { min: 10, title: 'Language for discussion', md: 'Show board page 2. Students sort the phrases and use two in their warm-up opinion again.' },
    { min: 20, title: 'Discussions', md: 'Use the activity for your class size below with the topics on board page 3.' },
    { min: 8, title: 'Exam corner', md: 'Show board page 4: Speaking part 4. Students discuss in pairs for two minutes.' },
    { min: 12, title: 'Correction slot', md: 'Show board page 5 and add the mistakes you collected from the discussions.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they can do in English now that they could not do at A2.' },
  ],
  board: [
    { title: 'What do you think?', blocks: [
      { t: 'text', md: '**Which statement do you agree with most? Why?**\n\n*Technology makes life easier.*\n\n*Everyone should learn a second language.*\n\n*Sport is important for everyone.*\n\n*Travelling teaches you more than school.*' },
    ] },
    { title: 'Language for discussion', blocks: [
      { t: 'ex', kind: 'sort', h: 'Sort the phrases.', groups: ['giving an opinion', 'agreeing', 'disagreeing politely'], items: [
        { s: 'In my opinion, …', g: 0, why: 'It introduces your view.' },
        { s: 'I couldn’t agree more.', g: 1, why: 'Strong agreement.' },
        { s: 'I see your point, but…', g: 2, why: 'Polite disagreement.' },
        { s: 'As far as I’m concerned, …', g: 0, why: 'It introduces your view.' },
        { s: 'That’s exactly what I think.', g: 1, why: 'Agreement.' },
        { s: 'I’m not sure about that.', g: 2, why: 'Soft disagreement.' },
      ] },
    ] },
    { title: 'Topics', blocks: [
      { t: 'text', md: '**Work and study:** Is it better to study at university or start working at eighteen?\n\n**Environment:** What should cities do to reduce plastic and traffic?\n\n**Technology:** Should children have their own phone before they are twelve?\n\n**Money:** Is it important to save money when you are young?\n\n**Culture:** Are films and series better than books for learning about the world?' },
    ] },
    { title: 'Exam corner: Speaking part 4', blocks: [
      { t: 'text', md: '**Talk together for two minutes:** *What are the most important things you have learnt this year? How will you use English in the future?*' },
      { t: 'tip', art: 'owl', md: 'In Speaking part 4 the topic follows part 3. Talk about **your own life** and ask your partner about theirs. Longer, connected answers with *because*, *although* and *for example* score best.' },
    ] },
    { title: 'Correction slot', blocks: [
      { t: 'ex', kind: 'fix', h: 'Fix the mistakes.', items: [
        { s: 'People [should to] recycle more.', a: ['should'], why: '*should* + bare verb.' },
        { s: 'If I [would have] more money, I would travel.', a: ['had'], why: 'Second conditional: *if* + past simple.' },
        { s: 'I [am agree] with you.', a: ['agree'], why: '*agree* is a verb: *I agree*.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Debate partner', md: 'Choose two topics. For each, the student takes one side and you take the other for three minutes; then swap sides and argue the opposite. Finish with the student summarising both sides in one minute.' },
    small: { title: 'Round-table', md: 'Each student chooses one topic and leads a four-minute discussion: they give their opinion, ask each person in turn, and close with a summary. The others must use two discussion phrases each.' },
    group: { title: 'Discussion rooms', md: 'Send students to breakout rooms of three with two topics each and a "chair" who keeps time and makes sure everyone speaks. Visit each room. In the main room, each chair reports the room’s conclusion in one minute.' },
  },
  homework: { book: 'u1 u2 u3 u4 u5 u6 u7 u8 u9 u10 u11 u12 u13 u14 u15 u16', md: 'Choose one topic from the class and write 120 words giving your opinion with two reasons and an example. Bring it to the practice exam class.' },
};
