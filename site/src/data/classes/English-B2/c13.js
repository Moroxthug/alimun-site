// English B2, class 13 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u3:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c13',
  focus: 'By the end every student negotiates and disagrees politely: acknowledging the other view (*I see your point, but…*), suggesting (*Would you be willing to…?*), softening (*I’m afraid that might be difficult*) and reaching a compromise. The speaking goal: a short negotiation where both sides stay polite and reach an agreement.',
  tips: [
    'Direct disagreement (*No, that’s wrong*) sounds aggressive in English. Teach the pattern: acknowledge, then disagree.',
    'Modal verbs soften: *That could be a problem* is softer than *That is a problem*.',
    'Negotiation is also B2 First Speaking Part 3 (reaching a decision with a partner). Point it out.',
    'Give students time to plan their position before the role play; quieter students negotiate better with notes.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *When did you last negotiate something (a price, a plan, a day off)? How did it go?*' },
    { min: 12, title: 'Polite phrases', md: 'Show board page 1. Students sort the phrases by job, then rank them from most to least direct.' },
    { min: 10, title: 'Soften it', md: 'Show board page 2. Students choose the more diplomatic sentence.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: B2 First Speaking Part 3. Students choose the best responses, then discuss the task in pairs.' },
    { min: 5, title: 'Close', md: 'Each student says one phrase they will use at work this week. Set the homework.' },
  ],
  board: [
    { title: 'Phrases for negotiating', blocks: [
      { t: 'ex', kind: 'sort', h: 'What does each phrase do?', groups: ['acknowledge', 'suggest', 'compromise'], explain: ['groups'], items: [
        { s: 'I see your point, but…', g: 0, why: 'Shows you heard the other view before disagreeing.' },
        { s: 'That’s a fair point.', g: 0, why: 'Accepts part of the other view.' },
        { s: 'Would you be willing to…?', g: 1, why: 'A polite suggestion.' },
        { s: 'What if we…?', g: 1, why: 'Offers an idea.' },
        { s: 'Let’s meet halfway.', g: 2, why: 'Each side gives something.' },
        { s: 'I could accept that if…', g: 2, why: 'Agreement with a condition.' },
      ] },
    ] },
    { title: 'Diplomatic or blunt?', blocks: [
      { t: 'ex', kind: 'choice', h: 'Which sentence is more diplomatic?', items: [
        { q: '', o: ['I’m afraid that might be a little difficult for us.', 'That is impossible for us.', 'No way.'], why: '*I’m afraid*, *might* and *a little* soften the refusal.' },
        { q: '', o: ['Wouldn’t it be better to wait until next month?', 'You are wrong to do it now.', 'Do it next month.'], why: 'A negative question suggests politely.' },
      ] },
    ] },
    { title: 'Exam corner: Speaking Part 3', blocks: [
      { t: 'text', md: 'Task: *Your company wants to make staff happier. Talk together about these ideas: a four-day week, free lunches, more training, working from home. Then decide which would help most.*' },
      { t: 'ex', kind: 'choice', h: 'In the format of the B2 First exam (Speaking, Part 3): choose the best response to your partner.', items: [
        { q: 'Partner: “I think free lunches would make the biggest difference.”', o: ['That’s a fair point, but don’t you think a four-day week would have a bigger effect?', 'No, it’s a bad idea.', 'Free lunches.'], why: 'Acknowledge, then disagree with a question that keeps the discussion going.' },
        { q: 'Partner: “So shall we choose working from home?”', o: ['I’d go along with that. It costs the company little and staff really value it.', 'Yes.', 'I don’t know.'], why: 'Agree and give a reason; reaching a decision is part of the task.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Part 3 is a conversation with your partner, not two speeches. Ask questions, react and try to reach a decision.' },
    ] },
  ],
  activities: {
    one: { title: 'Salary negotiation', md: 'Role play: the student asks for a pay rise or more holiday; you are the manager and resist politely. Swap roles. Note diplomatic phrases used and missed, and replay the hardest moment.' },
    small: { title: 'Holiday plans', md: 'The group must agree on one shared holiday (where, when, budget). Each student secretly gets a different priority in the chat. They negotiate until they agree, using the phrases.' },
    group: { title: 'Two companies', md: 'Breakout rooms of four: two students represent a supplier, two a shop. They negotiate price, delivery and quantity. Each room reports its final deal and the best phrase used.' },
  },
  homework: { book: 'u3:p3', md: 'Finish lesson 3 of unit 3, then do lesson 4 (From the courtroom to the kitchen). Write a polite email (about 100 words) asking your manager to change one part of your work.' },
};
