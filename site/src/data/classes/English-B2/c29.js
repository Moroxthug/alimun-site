// English B2, class 29 (docs/LESSONS_PLAN.md, L6). Review of book units u5 and u6. Draft for the owner's review.
export const LESSON = {
  id: 'c29',
  focus: 'A speaking-heavy review of units 5 and 6. By the end every student can talk about unreal situations and regrets with second, third and mixed conditionals, *wish*, *if only* and *would rather*, report what people said with the right reporting verb and pattern, link an argument with discourse markers, and soften a claim with hedging language. Students should leave knowing which of these they still mix up.',
  tips: [
    'Before class, list the three mistakes you heard most in units 5 and 6 and give them the most time. Typical ones: *would* in the *if* clause (*If I would have known…*), *wish* + *would* for your own situation (*I wish I would be taller*), *suggest someone to do* and *explain me*.',
    'Mixed conditionals are the hardest point here. Draw a simple timeline on the board for each example: past cause, present result, or the other way round.',
    'Every grammar task on the board should end with a true sentence from the students about their own life: a regret, a wish, a piece of news they heard.',
    'Discourse markers are often used too much. Praise students who use one well, not students who use five in one answer.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *If you could change one decision you made in the last five years, what would it be?* One or two sentences each, without correcting yet.' },
    { min: 10, title: 'Unit 5: if, wish, would rather', md: 'Show board page 1. Students choose the forms alone, then check in pairs. Ask each student for one sentence with *I wish* about the present and one with *If only* about the past.' },
    { min: 10, title: 'Unit 6: reporting and linking', md: 'Show board page 2. Students complete the reported sentences and choose the linkers. Ask: *What did someone tell you this week?* Each student reports it with a reporting verb.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: B2 First Reading and Use of English Part 4, key word transformations. Students write alone, then you reveal the answers and count the two marks for each item.' },
    { min: 5, title: 'Fix the mistakes', md: 'Show board page 4 and add mistakes from your notes.' },
    { min: 5, title: 'Close', md: 'Each student names one point from units 5 and 6 they now feel sure about and one they will practise. Set the homework.' },
  ],
  board: [
    { title: 'Unit 5: if, wish, would rather', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the best form.', items: [
        { q: 'If I ___ about the strike, I would have taken the car.', o: ['had known', 'knew', 'would have known'], why: 'Third conditional: past perfect in the *if* clause.' },
        { q: 'If she had taken that job in Paris, she ___ in France now.', o: ['would be living', 'would have lived', 'lives'], why: 'Mixed: past cause, present result.' },
        { q: 'I wish I ___ more time to read.', o: ['had', 'would have', 'have'], why: 'A wish about the present: past simple.' },
        { q: 'If only I ___ that email before I left.', o: ['had sent', 'sent', 'would send'], why: 'A regret about the past: past perfect.' },
        { q: 'I’d rather you ___ smoke in the car.', o: ['didn’t', 'don’t', 'won’t'], why: '*would rather* + another person + past simple.' },
      ] },
    ] },
    { title: 'Unit 6: reporting and linking', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right pattern.', items: [
        { q: 'He ___ taking the money.', o: ['denied', 'refused', 'told'], why: '*deny* + -ing.' },
        { q: 'She suggested ___ the meeting to Friday.', o: ['moving', 'to move', 'us to move'], why: '*suggest* + -ing, not *suggest someone to*.' },
        { q: 'The manager warned us ___ the doors open.', o: ['not to leave', 'to not leaving', 'that not leave'], why: '*warn someone not to* + verb.' },
        { q: 'The plan is cheap. ___, it is very slow.', o: ['However', 'Despite', 'Although'], why: '*However* starts a new sentence; *despite* and *although* need a different structure.' },
        { q: 'It ___ that most readers prefer short articles.', o: ['seems', 'is seeming', 'seemed to be'], why: 'Hedging: *It seems that…*' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'text', md: 'In the format of B2 First Reading and Use of English Part 4: complete the second sentence so that it means the same as the first. Use the word given and **between two and five words**, including the word given. Do not change the word given.' },
      { t: 'ex', kind: 'transform', h: 'Write the second sentence.', items: [
        { q: 'I regret not studying harder at school.', cue: 'WISH', a: ['I wish I had studied harder at school.', 'I wish I’d studied harder at school.'], why: 'A regret about the past: *wish* + past perfect.' },
        { q: '“I didn’t break the window,” said Tom.', cue: 'DENIED', a: ['Tom denied breaking the window.', 'Tom denied having broken the window.'], why: '*deny* + -ing.' },
        { q: 'I didn’t have an umbrella, so I got wet.', cue: 'IF', a: ['If I had had an umbrella, I wouldn’t have got wet.', 'I wouldn’t have got wet if I had had an umbrella.'], why: 'Third conditional about the past.' },
        { q: 'I would prefer you not to call after ten.', cue: 'RATHER', a: ['I would rather you didn’t call after ten.', 'I’d rather you didn’t call after ten.'], why: '*would rather* + you + past simple.' },
      ] },
      { t: 'tip', md: 'Part 4 gives up to two marks for each answer: one for each half. Even if you are not sure of the whole answer, write the part you know, because one mark is better than none.' },
    ] },
    { title: 'Fix the mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Typical mistakes from units 5 and 6.', items: [
        { s: 'If I [would have known], I would have helped.', a: ['had known'], why: 'No *would* in the *if* clause.' },
        { s: 'I wish I [would be] taller.', a: ['were', 'was'], why: 'A wish about yourself now: past simple, not *would*.' },
        { s: 'She explained [me the problem].', a: ['the problem to me'], why: '*explain something to someone*.' },
        { s: 'He suggested [me to take] a taxi.', a: ['taking', 'that I take', 'that I should take'], why: '*suggest* + -ing or *that* + clause.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Sliding doors', md: 'The student picks a real decision from their past. Together you build two versions of their life: what happened, and what would have happened if they had chosen differently, and what their life would be like now (mixed conditionals). Then the student reports one opinion they read or heard this week with a reporting verb, and you discuss it, with the student using two linkers and one hedge.' },
    small: { title: 'News and regrets', md: 'Each student writes one short piece of real or invented news in the chat. In pairs, students report their partner’s news to the group with a reporting verb (*She claimed that…*, *He admitted…*). Then each pair chooses one piece of news and says what people might wish had happened differently. Note mistakes for the correction slot.' },
    group: { title: 'Opinion rooms', md: 'Put students in breakout rooms of three with one statement in the chat (for example *Social media does more harm than good*). They have six minutes to give opinions using at least two discourse markers and one hedge each, and one student reports the room’s view to the class with reporting verbs. Bring everyone back and correct the three most useful mistakes.' },
  },
  homework: { book: 'u5 u6', md: 'Do the unit tests of unit 5 (If only) and unit 6 (Media and opinion). Then write five sentences: two wishes about your life now, one regret about the past, and two reported statements from the news this week.' },
};
