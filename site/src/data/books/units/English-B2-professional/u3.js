// English B2 for work, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Persuasive presentations',
  goal: 'Present ideas convincingly and handle questions.',
  art: 'parrot',
  tags: { skills: ['speaking', 'grammar', 'vocabulary', 'reading'], topics: ['presentations', 'persuasion', 'cleft-sentences', 'rhetorical-devices', 'questions-and-objections'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Structure and rhetorical devices',
      about: 'Build a persuasive talk and use simple devices that make listeners remember it.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'A persuasive presentation usually follows a clear path: catch the audience’s attention, describe a **problem** they care about, offer your **solution**, show the **benefits**, and finish with a **call to action**, which says exactly what you want the audience to do. Along the way, speakers use **rhetorical devices**: small patterns of language that make a message stronger and easier to remember.' },
          { t: 'table', caption: 'Rhetorical devices', explain: ['head', 'col0'], quiz: true, head: ['Device', 'Example'], rows: [
            ['A rhetorical question: a question you do not expect the audience to answer', 'How much time do we lose every week looking for files?'],
            ['The rule of three: three ideas in a row', 'It’s faster, cheaper and safer.'],
            ['Contrast', 'This isn’t a cost. It’s an investment.'],
            ['Repetition', 'We can do it this year. We can do it with this team. We can do it now.'],
            ['Speaking to “you”', 'Imagine you arrive on Monday and everything is ready.'],
          ] },
        ],
        [
          { t: 'text', md: 'To give one idea special emphasis, use a **cleft sentence**. It divides a simple sentence into two parts and puts the important information in focus.' },
          { t: 'examples', items: [
            { s: '**What** we need **is** a simpler process.', n: 'From: *We need a simpler process.* *What* + clause + *is* puts the focus on the last part.' },
            { s: '**What** worries our clients **is** the delay.', n: 'From: *The delay worries our clients.*' },
            { s: '**It’s** the training **that** makes the difference, not the software.', n: '*It is* + focus + *that*: this stresses *the training* and contrasts it with something else.' },
            { s: '**All** we’re asking for **is** a three-month trial.', n: '*All* + clause + *is*: it makes a request sound small and reasonable.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Do not overuse devices. One strong rhetorical question at the start and one clear call to action at the end often work better than many devices in every sentence.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each example to the device it uses.', pairs: [
            ['Why do our best people leave after a year?', 'a rhetorical question'],
            ['It’s simple, affordable and ready today.', 'the rule of three'],
            ['We don’t sell software. We solve problems.', 'contrast'],
            ['What our customers want is speed.', 'a cleft sentence'],
            ['So I’m asking you to approve the trial today.', 'a call to action'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the stronger version for a presentation.', items: [
            { q: 'Opening a talk about wasted time in meetings:', o: ['How many hours did you spend in meetings last week?', 'Meetings are something that exists in our company.', 'I will now talk about the topic of meetings.'], why: 'A rhetorical question makes each listener think about their own experience.' },
            { q: 'Ending a talk:', o: ['So I’m asking you to approve a three-month trial today.', 'That’s more or less everything, I think.', 'Anyway, thanks.'], why: 'A clear call to action tells the audience what to do next.' },
            { q: 'Describing a benefit:', o: ['It’s not just cheaper. It’s also better for our customers.', 'It’s cheaper and maybe some other things.', 'There are benefits, which are various.'], why: 'The contrast *not just… also…* adds a second benefit with emphasis.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the cleft sentences with one word.', items: [
            { q: 'We don’t need more staff. What we need ___ better tools.', a: ['is'], why: '*What* + clause + *is* + focus.' },
            { q: '___ surprised me most was the price.', a: ['What'], why: 'The cleft sentence starts with *What*.' },
            { q: 'It was the late deliveries ___ lost us the contract.', a: ['that', 'which'], why: '*It was* + focus + *that*.' },
            { q: '___ we’re asking for is one month to test the idea.', a: ['All', 'What'], why: '*All* makes the request sound small; *What* is also correct.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order to make a cleft sentence.', items: [
            { a: 'What our customers want is faster delivery.', why: '*What* + clause + *is* + focus.' },
            { a: 'It’s the price that worries them.', why: '*It’s* + focus + *that* + the rest.' },
            { a: 'What I’d like to propose is a trial.', why: 'A common way to introduce your proposal with emphasis.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Questions and objections',
      about: 'Answer questions calmly, deal with objections and admit what you do not know.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'The questions after a presentation are often where the decision is made. A simple pattern helps: **acknowledge** the question, **clarify** it if necessary, **answer** briefly, then **check** that the person is satisfied. When someone raises an **objection**, accept the part that is true before you answer it.' },
          { t: 'table', caption: 'Handling questions', explain: ['head', 'col0'], quiz: true, head: ['Purpose', 'Phrase'], rows: [
            ['Acknowledge', 'Thanks for raising that. / That’s a fair point.'],
            ['Clarify', 'If I understand you correctly, you’re asking whether…'],
            ['Admit you do not know', 'I don’t have those figures to hand, but I’ll get back to you by Friday.'],
            ['Avoid going off topic', 'That’s a little outside the scope of today’s talk, but I’m happy to discuss it afterwards.'],
            ['Answer an objection', 'I understand your concern. However, …'],
            ['Check', 'Does that answer your question?'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Questions after the pitch', lines: [
            { who: 'Fatima', s: 'This all sounds great, but isn’t it going to be very expensive?' },
            { who: 'Daniel', s: 'That’s a fair point. The first year does cost more. However, we expect to save on overtime from the second year onwards.' },
            { who: 'Fatima', s: 'And how many other teams are already using this system?' },
            { who: 'Daniel', s: 'I don’t have that number to hand, I’m afraid, but I’ll check and get back to you by the end of the day.' },
            { who: 'Jonas', s: 'What about the people who don’t like change? Some of my team will hate this.' },
            { who: 'Daniel', s: 'If I understand you correctly, you’re worried about resistance from staff?' },
            { who: 'Jonas', s: 'Exactly.' },
            { who: 'Daniel', s: 'I understand your concern. That’s why the trial includes two training sessions and a contact person in every team. Does that answer your question?' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Daniel says that the system costs nothing in the first year.', a: 'f', why: 'He accepts that the first year costs more.' },
            { q: 'Daniel invents a number when he does not know the answer.', a: 'f', why: 'He admits he does not have the number and promises to check.' },
            { q: 'Daniel checks that he has understood Jonas’s question before he answers.', a: 't', why: '“If I understand you correctly, you’re worried about…”' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best response.', items: [
            { q: 'Someone asks for a figure you do not know.', o: ['I don’t have that figure to hand, but I’ll send it to you tomorrow.', 'I think it’s about forty per cent, more or less.', 'That’s not important.'], why: 'Admit it honestly and promise a follow-up. Never guess a number.' },
            { q: 'A question is not related to your topic.', o: ['That’s a little outside the scope of today’s talk, but I’m happy to discuss it afterwards.', 'That’s a stupid question.', 'I won’t answer that.'], why: 'Postpone it politely and offer to talk later.' },
            { q: 'Someone says your plan is too risky.', o: ['I understand your concern. That’s exactly why we suggest a small trial first.', 'No, it isn’t risky at all.', 'You’re wrong about that.'], why: 'Acknowledge the concern, then answer it with a fact from your plan.' },
            { q: 'You are not sure what the person means.', o: ['Sorry, could you clarify what you mean by “flexible”?', 'What? I don’t understand you.', 'Next question, please.'], why: 'Ask a specific clarifying question.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the phrases with one word.', items: [
            { q: 'Thanks for ___ that. It’s an important point.', a: ['raising', 'mentioning'], why: '*Raise* a point: bring it up for discussion.' },
            { q: 'If I understand you ___, you’re asking about the cost.', a: ['correctly', 'rightly'], why: '*If I understand you correctly* checks your understanding.' },
            { q: 'I’ll check the figures and get ___ to you this afternoon.', a: ['back'], why: '*Get back to someone*: reply to them later.' },
            { q: 'Does that ___ your question?', a: ['answer'], why: 'A short check at the end of your answer.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Each answer has one phrase that sounds rude or unprofessional. Tap it.', items: [
            { s: 'Thanks for the question. [Obviously, you weren’t listening], but I’ll explain again.', why: 'Never blame the listener. Simply repeat the information.' },
            { s: 'I don’t have the exact figure, so [let’s just say it’s around half].', why: 'Do not guess. Promise to find the figure and send it.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'The script of a short pitch',
      about: 'Read Elena’s short pitch to a management team and find the persuasive devices.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'Elena’s pitch: a buddy for every new starter', md: 'Good morning, everyone. Let me start with a question. Can you remember your first week here? Who showed you where things were? Who explained how things really work?\n\nFor many of us, the answer is: nobody. And that is a problem. Over the last two years, nearly a third of the people who left our company left within their first six months. In exit interviews, the same words appear again and again: lonely, confused, lost.\n\nWhat I’d like to propose is a simple buddy scheme. Every new employee would be paired with an experienced colleague from another team for their first three months. The buddy would not be a manager. They would be someone to have lunch with, someone to ask the questions you feel you can’t ask your boss, someone who knows how things are done here.\n\nThe benefits are clear. New starters settle in faster. Buddies develop their coaching skills. And the company keeps the people it has worked so hard to hire.\n\nNow, some of you may be thinking: our people are busy enough already. That’s a fair point. But we’re talking about one hour a week, not one day. And it isn’t the formal training that people remember from their first week. It’s the person who helped them.\n\nThe scheme would cost very little: a short training session for buddies and a small budget for lunches. All I’m asking for today is your approval for a six-month trial in two departments. If it works, we expand it. If it doesn’t, we stop.\n\nThank you. I’m happy to take any questions.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'According to the speaker, many people who left the company did so early.', a: 't', why: 'Nearly a third left within their first six months.' },
            { q: 'The buddy would be the new employee’s manager.', a: 'f', why: '“The buddy would not be a manager.”' },
            { q: 'Buddies would come from the same team as the new employee.', a: 'f', why: 'They would come “from another team”.' },
            { q: 'Some managers have already agreed to take part.', a: 'ng', why: 'The speaker does not say who has agreed.' },
            { q: 'The speaker wants the scheme in every department immediately.', a: 'f', why: 'She asks for a six-month trial in two departments.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at how the pitch persuades.', items: [
            { q: 'Why does the speaker begin with “Can you remember your first week here?”', o: ['To make each listener think of their own experience.', 'Because she wants someone to answer aloud.', 'Because she has forgotten her own first week.'], why: 'A rhetorical question involves the audience personally.' },
            { q: '“New starters settle in faster. Buddies develop their coaching skills. And the company keeps the people…” Which device is this?', o: ['The rule of three.', 'A rhetorical question.', 'A cleft sentence.'], why: 'Three benefits in a row: the rule of three.' },
            { q: 'How does the speaker deal with the objection “our people are busy enough already”?', o: ['She accepts it as fair, then shows the time needed is small.', 'She says the objection is wrong.', 'She ignores it.'], why: '*That’s a fair point. But…* acknowledges the objection before answering.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words that begin the call to action.', items: [
            { s: 'The scheme would cost very little. [All I’m asking for today] is your approval for a six-month trial.', why: '*All I’m asking for* introduces the request and makes it sound small.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'What ___ is more time to test the product.', o: ['we need', 'do we need', 'we need it'], why: 'In a cleft sentence, *What* is followed by normal word order.' },
      { q: 'It’s the service ___ makes our product different.', o: ['that', 'what', 'where'], why: '*It is* + focus + *that*.' },
      { q: '“It’s quick, simple and secure.” This is an example of ___.', o: ['the rule of three', 'a rhetorical question', 'an objection'], why: 'Three ideas in a row.' },
      { q: 'You do not know an answer. The best reply is: ___', o: ['I’ll find out and get back to you.', 'Nobody knows that.', 'I think it’s probably fine.'], why: 'Admit it and promise a follow-up.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences with one word.', items: [
      { q: 'All we’re asking for ___ a short trial.', a: ['is'], why: '*All* + clause + *is* + focus.' },
      { q: 'That’s a ___ point. However, the cost falls in the second year.', a: ['fair', 'good', 'valid'], why: 'Acknowledge the objection before you answer it.' },
      { q: 'That’s outside the ___ of today’s talk, but we can discuss it later.', a: ['scope'], why: '*Outside the scope of*: not part of the topic.' },
      { q: 'I understand your ___. That’s why we start small.', a: ['concern', 'concerns', 'worry'], why: '*I understand your concern* accepts the other person’s worry.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'What I’d like to propose is a change.', why: 'A cleft sentence to introduce a proposal.' },
      { a: 'Does that answer your question?', why: 'A check at the end of an answer.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the parts of a pitch to their purpose.', pairs: [
      ['the opening question', 'catches the audience’s attention'],
      ['the problem', 'shows why change is needed'],
      ['the benefits', 'explain what the audience gains'],
      ['the call to action', 'says what the audience should do now'],
    ] },
  ],
};
