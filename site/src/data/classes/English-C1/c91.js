// English C1, class 91 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u19:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c91',
  focus: 'By the end every student knows how C1 Advanced Speaking Parts 3 and 4 work and does both with a partner: a two-minute discussion of a question with five prompts, a one-minute decision, and developed Part 4 answers with a view, a reason, an example and the other side. The language goal: start, invite, partly agree, disagree tactfully, move on and decide, using the softening of lesson 1 and the idioms of lesson 3.',
  tips: [
    'A good Part 3 sounds like two people thinking aloud together, not two speeches. If one student talks for 40 seconds, stop and ask the partner: *What do you make of that?*',
    'Students do not need to discuss every prompt. Two or three in depth, with real responses to the partner, score better than five in a rush.',
    'The decision comes only in the second stage, after the examiner’s new question. Students who decide in the first stage leave themselves nothing to say.',
    'Part 4 answers fail by being too short. Write *view, reason, example, other side* on the board and point to it when a student stops after one sentence.',
    'Give each student one concrete point from the language table (for example *pick up your partner’s idea with “As you were saying…”*), not general praise.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *When you disagree with a friend, do you say so straight away or wait?* Students answer in pairs, and each partner must respond to what the other said before giving their own view.' },
    { min: 10, title: 'Parts 3 and 4 and the language', md: 'Show board page 1. Go through the timing and the language, then students sort the phrases by what they do.' },
    { min: 15, title: 'Part 3', md: 'Show board page 2. Pairs look for 15 seconds, discuss for two minutes, then answer the decision question in one minute. Swap pairs and repeat once.' },
    { min: 12, title: 'Part 4', md: 'Show board page 3. Students choose the strongest answer, then answer one Part 4 question each with all four moves.' },
    { min: 13, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Give each student one point to work on. Set the homework.' },
  ],
  board: [
    { title: 'Parts 3 and 4 and the language', blocks: [
      { t: 'table', caption: 'C1 Advanced Speaking Parts 3 and 4', explain: ['head', 'col0', 'col1', 'col2'], head: ['Part', 'What happens', 'How long'], rows: [
        ['Part 3, first stage', 'discuss a question with five written prompts, together', 'about 2 minutes'],
        ['Part 3, second stage', 'answer a new question and try to reach a decision', 'about 1 minute'],
        ['Part 4', 'answer wider questions on the topic, alone and together', 'about 5 minutes'],
      ] },
      { t: 'ex', kind: 'sort', h: 'What is the speaker doing?', groups: ['inviting the partner in', 'partly agreeing or disagreeing', 'moving on or deciding'], explain: ['groups'], items: [
        { s: 'What’s your take on this one?', g: 0, why: 'A question that brings the partner in.' },
        { s: 'I can see the logic in that, but…', g: 1, why: 'Accepts part of the idea, then turns.' },
        { s: 'Shall we have a look at social media? We haven’t touched on it yet.', g: 2, why: 'Moves to another prompt.' },
        { s: 'Would you go along with that?', g: 0, why: 'Invites the partner to agree or not.' },
        { s: 'I’m not sure I’d go quite that far.', g: 1, why: 'Disagrees tactfully with a softener.' },
        { s: 'So, are we agreed that money is the main cause?', g: 2, why: 'Steers towards a decision.' },
      ] },
    ] },
    { title: 'Part 3: the collaborative task', blocks: [
      { t: 'text', md: '**Question (two minutes):** *Why do disagreements between neighbours sometimes become so serious?* **Prompts:** *noise, parking, boundaries and gardens, pets, lack of communication.* **Then (one minute):** *Which of these do you think is the hardest to resolve?*' },
      { t: 'examples', items: [
        { s: 'Shall we start with noise? It’s probably the one people complain about most.', n: 'Starting the discussion.' },
        { s: '**As you were saying**, it often isn’t the noise itself but the feeling of not being respected.', n: 'Picking up the partner’s idea.' },
        { s: 'That’s true **up to a point**, but boundaries can become a real bone of contention.', n: 'Partly agreeing, with an idiom from lesson 3.' },
        { s: '**It seems we see this differently**, so shall we agree to disagree?', n: 'Closing without agreement.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Listen as much as you speak. The examiner is marking how you build on each other’s ideas, so responding to your partner is worth more than a perfect sentence that ignores them.' },
    ] },
    { title: 'Part 4: developed answers', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Speaking Part 4): which answer is the strongest?', items: [
        { q: 'Examiner: “Is it better to say what you think, even if it causes an argument?”', o: ['On the whole, yes, because problems you avoid tend to grow. A colleague of mine kept quiet about a mistake for months, and it became far harder to fix. That said, there are moments, a family celebration for instance, when it’s wiser to wait.', 'Yes, I think it is better.', 'Arguments are when people disagree with each other about something.'], why: 'A view, a reason, an example and the other side, all on the question.' },
        { q: 'Examiner: “Should employers train staff to deal with conflict?”', o: ['I’d say so. Most people learn it by trial and error, and a short course on listening could prevent a great deal of tension, although no course can replace a good manager.', 'Maybe. It depends on the company, I don’t know.', 'Employers train staff in many things such as computers and safety.'], why: 'An opinion, a reason, a consequence and a limit.' },
      ] },
      { t: 'text', md: '**Your turn:** *Do people today find it harder to agree to disagree? Should children be taught how to apologise properly? Can social media ever help people resolve conflicts?*' },
    ] },
  ],
  activities: {
    one: { title: 'Examiner and partner', md: 'Play the partner in Part 3, and change your style each round: first agree with everything, then interrupt, then say very little. The student has to keep the discussion balanced each time. Then ask all three Part 4 questions. Give feedback on interaction and on one Part 4 answer, quoting what the student said.' },
    small: { title: 'Pairs and an examiner', md: 'Two students do Part 3 while a third is the examiner with the sort table from board page 1, ticking each kind of phrase used. Swap roles so that everyone does Part 3 once and examines once. The examiner reports which kinds of phrase were missing.' },
    group: { title: 'Breakout pairs', md: 'In breakout rooms of two, students do the Part 3 task on board page 2, then ask each other the Part 4 questions on board page 3. Visit each room for a minute and note one strong phrase and one missed chance to respond. Bring everyone back and share the best phrases you heard.' },
  },
  homework: { book: 'u19:p4', md: 'Finish lesson 4 of unit 19 if needed, then do lesson 1 of unit 20 (Parts 1 to 4: the language papers). Record yourself answering two of today’s Part 4 questions, about 40 seconds each, and check that each answer has a view, a reason, an example and the other side.' },
};
