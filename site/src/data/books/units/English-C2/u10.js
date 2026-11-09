// English C2, unit 10, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Professional communication: negotiating with conditional offers, chairing and taking part in meetings, the formal
// letter to a senior reader and the briefing report. Exam work in the format of C2 Proficiency: Listening Part 4,
// Speaking Part 2, and Writing Part 2 (the letter and the report, taught in full).
export const UNIT = {
  id: 'u10',
  title: 'Professional communication',
  goal: 'Negotiate with precise conditional offers, chair a meeting from opening to actions, write a formal letter that puts the point first in a tone that is direct but courteous, and write a briefing report for a board, in the format of C2 Proficiency Writing Part 2.',
  art: 'mug',
  tags: { skills: ['vocabulary', 'grammar', 'listening', 'speaking', 'writing', 'reading'], topics: ['negotiating', 'conditionals', 'meetings', 'chairing', 'formal-letter', 'register', 'report', 'business', 'workplace'], goals: ['foundations', 'professional'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Provided that we can agree on terms',
      about: 'Propose, bargain and make conditional offers: we would be prepared to, provided that, on the understanding that, meet someone halfway.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'A negotiation is not an argument to be won. It is a search for terms that both sides can accept, and its language is built to keep options open while making clear what you want.\n\nThe central tool is the **conditional offer**: you give something only if you get something. *We would be prepared to extend the contract **provided that** the price is fixed for two years.* The condition protects you: if they refuse it, the offer falls away. **Provided (that), providing, on condition that, as long as** and **on the understanding that** all introduce the condition; *on the understanding that* is the most formal and sounds like the basis of an agreement.\n\nThe **tentative forms** do the rest. *Would* and *could* turn a demand into a proposal: *We could look at the delivery dates.* The **past continuous** makes a request less direct: *We were wondering whether you might…* **If you were to** makes a hypothetical offer that commits you to nothing: *If you were to increase the order, we could reduce the unit price.*' },
          { t: 'table', caption: 'The language of negotiation', explain: ['head', 'col0', 'col2'], head: ['Stage', 'Language', 'What it does'], rows: [
            ['Proposing', 'We would be prepared to… / What we had in mind was…', 'opens with a position, tentatively'],
            ['Conditional offer', '…provided that / on condition that / on the understanding that…', 'gives only in exchange'],
            ['Hypothetical offer', 'If you were to…, we could… / Supposing we…, would you…?', 'tests an idea without committing'],
            ['Rejecting', 'I’m afraid that would be difficult for us. / That’s not something we could agree to.', 'refuses without closing the door'],
            ['Compromising', 'Could we meet you halfway on that? / Let’s split the difference.', 'moves towards the middle'],
            ['Closing', 'So, to confirm what we have agreed… / Shall we put that in writing?', 'fixes the terms'],
          ] },
        ],
        [
          { t: 'text', md: 'Negotiation also has its idioms, and C2 speakers use them precisely. A **sticking point** is an issue that blocks agreement; a **deal-breaker** is one that would end the talks. Your **bottom line** is the least you will accept. **Common ground** is what both sides already share. You leave yourself **room for manoeuvre** by not stating your limit too early. You **meet someone halfway** or **split the difference**; you **drive a hard bargain** if you are tough; and you **strike a deal** or **reach an agreement**. If talks fail, they **break down** or **reach an impasse**.\n\nWatch the grammar of the conditions. After *provided that, as long as* and *on condition that*, use the **present tense** for the future: *provided that payment **arrives** on time*, not *will arrive*. And *unless* means *if not*, so it cannot go with a negative condition: *We cannot proceed **unless** we receive a deposit.*' },
          { t: 'examples', items: [
            { s: 'We **would be prepared to** cover delivery **provided that** the order exceeds five hundred units.', n: 'A conditional offer: give only in exchange.' },
            { s: '**If you were to** sign a three-year contract, we **could** reduce the price.', n: 'A hypothetical offer that commits to nothing yet.' },
            { s: 'We **were wondering whether** you might be flexible on the payment terms.', n: 'The past continuous softens a request.' },
            { s: 'Price is not the problem; the delivery date is **the sticking point**.', n: 'The issue that blocks agreement.' },
            { s: 'We agree to the fee **on the understanding that** it includes training.', n: 'Formal: the condition is part of the deal.' },
            { s: 'They wanted ten per cent, we offered six, and we **met them halfway**.', n: 'A compromise in the middle.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Provided that you will pay on time, we agree.', 'Provided that you pay on time, we agree.', 'Present tense after *provided that* for the future.'],
            ['We can’t start unless you don’t pay a deposit.', 'We can’t start unless you pay a deposit.', '*Unless* already means *if not*.'],
            ['You must lower the price.', 'We were wondering whether you could lower the price.', 'A demand closes options; a tentative request keeps them open.'],
            ['Let’s meet in the half.', 'Let’s meet each other halfway.', 'The idiom is *meet someone halfway*.'],
            ['We accept everything you say.', 'We can accept that, on condition that…', 'Never give without getting something back.'],
          ] },
          { t: 'dialogue', title: 'Agreeing a supply contract', lines: [
            { who: 'Nadia', s: 'Thank you for the revised quote. I’ll be frank: the unit price is still the sticking point for us.' },
            { who: 'Gareth', s: 'I understand. What we had in mind was a fixed price for two years, which protects you against rising costs.' },
            { who: 'Nadia', s: 'That’s helpful. We were wondering whether you might go a little lower if we committed to a larger volume.' },
            { who: 'Gareth', s: 'If you were to double the first order, we could take four per cent off, provided that payment is within thirty days.' },
            { who: 'Nadia', s: 'Thirty days would be difficult for us. Could we meet you halfway at forty-five?' },
            { who: 'Gareth', s: 'We could agree to forty-five, on the understanding that the volume is guaranteed in writing.' },
            { who: 'Nadia', s: 'Then I think we have a deal. Shall I send over a summary of what we’ve agreed?' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the best option.', items: [
            { q: 'We will deliver free of charge provided that the order ___ two hundred units.', o: ['exceeds', 'will exceed', 'would exceed'], why: 'Present tense after *provided that*.' },
            { q: 'We cannot sign ___ the warranty is extended.', o: ['unless', 'provided', 'as long'], why: '*Unless* = if not.' },
            { q: 'If you ___ to order in bulk, we could lower the price.', o: ['were', 'are going', 'would'], why: '*If you were to* + infinitive: a hypothetical offer.' },
            { q: 'We were ___ whether you could bring the date forward.', o: ['wondering', 'wonder', 'wondered'], why: 'The past continuous makes the request tentative.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the expressions with their meanings.', pairs: [
            ['a sticking point', 'an issue that blocks agreement'],
            ['a deal-breaker', 'an issue that would end the talks'],
            ['your bottom line', 'the least you will accept'],
            ['room for manoeuvre', 'freedom to change your position'],
            ['reach an impasse', 'arrive at a point where no progress is possible'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Complete the second sentence so that it has a similar meaning to the first. Use the word given and do not change it. Write three to eight words, including the word given.', items: [
            { q: 'We will extend the deadline, but only if you pay a deposit.', cue: 'provided', a: ['We will extend the deadline provided that you pay a deposit.', 'We will extend the deadline provided you pay a deposit.'], why: '*Provided (that)* + present tense.' },
            { q: 'If you don’t confirm by Friday, the offer will be withdrawn.', cue: 'unless', a: ['Unless you confirm by Friday, the offer will be withdrawn.', 'The offer will be withdrawn unless you confirm by Friday.'], why: '*Unless* = if not; no second negative.' },
            { q: 'They asked for twelve per cent, we offered eight, and we agreed on ten.', cue: 'halfway', a: ['They asked for twelve per cent, we offered eight, and we met them halfway.', 'They asked for twelve per cent, we offered eight, and we met each other halfway.'], why: '*Meet someone halfway*: compromise in the middle.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order to make a conditional offer.', items: [
            { a: 'We would be prepared to waive the fee on condition that you renew.', why: '*Would be prepared to* + *on condition that*.' },
            { a: 'Supposing we covered delivery, would you increase the order?', why: '*Supposing* + past: a hypothetical offer as a question.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **C2 Proficiency Listening Part 4** you hear **five short monologues** on one theme and do **two tasks** at once. For each speaker you choose from **eight options** in Task One and from another **eight** in Task Two, so three options in each task are not used. You hear the recording twice. Speakers rarely use the words of the options: match the **idea**. Here, five people describe a difficult negotiation.' },
          { t: 'dialogue', title: 'Five people on a difficult negotiation', lines: [
            { who: 'Nadia', s: 'I buy equipment for a group of clinics, and for one scanner there was a single manufacturer. They knew we had nowhere else to go, and the first meeting showed it. What finally moved them was not price at all: we offered to pay on delivery instead of at ninety days. It cost us almost nothing, and to them it was worth a great deal.' },
            { who: 'Gareth', s: 'When we sold the company, the buyer’s offer looked generous, but my co-founder kept signalling in meetings that we’d take less. The other side noticed, of course. In the end I asked for a break, we agreed our bottom line in the corridor, and when they still wouldn’t move, we left. They rang the following week with a better offer.' },
            { who: 'Priya', s: 'In my last job interview, every time I asked about the salary range, the recruiter turned the question back to me. I’d always been told never to name a number first. This time I did: a precise figure, slightly above what I hoped for. It set the frame for the whole conversation, and the final offer was close to it.' },
            { who: 'Tomasz', s: 'I represent the warehouse staff. In talks about overtime, management had one set of hours and we had another, and every meeting turned into a row about whose spreadsheet was right. Someone suggested calling in a mediator, but before that we simply sat down together and checked the records line by line. Once we agreed on the facts, the pay took an afternoon.' },
            { who: 'Margaret', s: 'The landlord gave us forty-eight hours to accept the lease or lose the office. Instead of making a counter-offer, I asked why the hurry. It turned out he needed the building occupied to refinance it. Once I understood that, I could offer a quick signature in return for six months without rent.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Listening Part 4), Task One: what made each speaker’s negotiation difficult? Choose from the eight options; three are not used.', items: [
            { q: 'Nadia', o: ['the other side had far more power', 'a deadline set by someone else', 'the other side would not reveal its limits', 'a disagreement within their own team', 'conflicting figures on the same issue', 'a language barrier', 'a previous deal that had gone badly', 'an offer that seemed too good to be true'], why: '*There was a single manufacturer. They knew we had nowhere else to go.*' },
            { q: 'Gareth', o: ['a disagreement within their own team', 'the other side had far more power', 'a deadline set by someone else', 'the other side would not reveal its limits', 'conflicting figures on the same issue', 'a language barrier', 'a previous deal that had gone badly', 'an offer that seemed too good to be true'], why: '*My co-founder kept signalling… that we’d take less.* The offer *looked generous*, but that was not the difficulty.' },
            { q: 'Priya', o: ['the other side would not reveal its limits', 'the other side had far more power', 'a deadline set by someone else', 'a disagreement within their own team', 'conflicting figures on the same issue', 'a language barrier', 'a previous deal that had gone badly', 'an offer that seemed too good to be true'], why: '*Every time I asked about the salary range, the recruiter turned the question back to me.*' },
            { q: 'Tomasz', o: ['conflicting figures on the same issue', 'the other side had far more power', 'a deadline set by someone else', 'the other side would not reveal its limits', 'a disagreement within their own team', 'a language barrier', 'a previous deal that had gone badly', 'an offer that seemed too good to be true'], why: '*Management had one set of hours and we had another.*' },
            { q: 'Margaret', o: ['a deadline set by someone else', 'the other side had far more power', 'the other side would not reveal its limits', 'a disagreement within their own team', 'conflicting figures on the same issue', 'a language barrier', 'a previous deal that had gone badly', 'an offer that seemed too good to be true'], why: '*The landlord gave us forty-eight hours.*' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Task Two: what finally helped each speaker? Choose from the eight options; three are not used.', items: [
            { q: 'Nadia', o: ['offering something that cost them little', 'naming a precise figure first', 'walking away from the table', 'agreeing on the facts before the money', 'asking a question instead of making an offer', 'bringing in a third party', 'putting everything in writing at once', 'accepting a lower price for a longer contract'], why: '*It cost us almost nothing, and to them it was worth a great deal.*' },
            { q: 'Gareth', o: ['walking away from the table', 'offering something that cost them little', 'naming a precise figure first', 'agreeing on the facts before the money', 'asking a question instead of making an offer', 'bringing in a third party', 'putting everything in writing at once', 'accepting a lower price for a longer contract'], why: '*We left. They rang the following week with a better offer.*' },
            { q: 'Priya', o: ['naming a precise figure first', 'offering something that cost them little', 'walking away from the table', 'agreeing on the facts before the money', 'asking a question instead of making an offer', 'bringing in a third party', 'putting everything in writing at once', 'accepting a lower price for a longer contract'], why: '*This time I did: a precise figure.*' },
            { q: 'Tomasz', o: ['agreeing on the facts before the money', 'offering something that cost them little', 'naming a precise figure first', 'walking away from the table', 'asking a question instead of making an offer', 'bringing in a third party', 'putting everything in writing at once', 'accepting a lower price for a longer contract'], why: '*Once we agreed on the facts, the pay took an afternoon.* The mediator was only suggested.' },
            { q: 'Margaret', o: ['asking a question instead of making an offer', 'offering something that cost them little', 'naming a precise figure first', 'walking away from the table', 'agreeing on the facts before the money', 'bringing in a third party', 'putting everything in writing at once', 'accepting a lower price for a longer contract'], why: '*Instead of making a counter-offer, I asked why the hurry.*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 4** the distractors are planted in the recording: Gareth says the offer *looked generous*, and Tomasz mentions *a mediator*. Neither is the answer. Ask what the speaker says **actually** happened, and listen for turning-point phrases: *what finally moved them, in the end, once I understood that*.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'We would be prepared to cover delivery, provided that the order is guaranteed.' },
            { a: 'If you were to double the order, we could take four per cent off.' },
            { a: 'Could we meet you halfway on the payment terms?' },
          ] },
          { t: 'text', md: 'Now negotiate with your teacher or a partner for three minutes. You are renting a stand at a trade fair; the organiser wants a high fee and full payment now. Open with a proposal, make at least two conditional offers (*provided that, on the understanding that, if you were to*), reject one point without closing the door, and close by confirming what you have agreed.' },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Shall we make a start?',
      about: 'Chair a meeting and take part in one: open, keep to time, bring people in, deal with interruptions, summarise and close with actions.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'A chair has one job: to help the group reach decisions in the time available. The language follows the shape of the meeting.\n\n**Opening**: state the purpose and the agenda, and say when the meeting will end. *Shall we make a start? The aim today is to agree the budget, and I’d like to finish by eleven.* **Keeping to time**: *We’re running short of time, so let’s park that for now.* *Can we come back to that under any other business?* **Bringing people in**: by name, with an open question. *Priya, you’ve worked with the supplier: how do you see it?* **Managing interruptions**: firmly but warmly. *Could Owen finish his point first? Then I’ll come to you.* **Summarising**: *So, to sum up where we are…* **Closing with actions**: who will do what, by when. *Felix will circulate the figures by Friday.*\n\nThe best chairs talk least. Their power lies in short, well-timed interventions, mostly questions and summaries, and in making sure that every decision is recorded with a name beside it.' },
          { t: 'table', caption: 'The chair’s language', explain: ['head', 'col0'], head: ['Stage', 'Language'], rows: [
            ['Opening', 'Shall we make a start? / The purpose of today’s meeting is to…'],
            ['Keeping to time', 'Let’s park that for now. / In the interests of time, …'],
            ['Bringing people in', 'Priya, how do you see it? / I’d like to hear from…'],
            ['Managing interruptions', 'Could we let Owen finish? / Hold that thought.'],
            ['Summarising', 'So, to sum up where we are… / Am I right in thinking that…?'],
            ['Closing', 'So the action points are… / Thank you all; that’s very helpful.'],
          ] },
        ],
        [
          { t: 'text', md: 'Taking part well has its own language. To **interrupt** politely, ask permission and keep it short: *Sorry to interrupt, but could I just come in here?* To **keep the floor**: *If I could just finish…* To **bring the meeting back** to the point: *I think we’re drifting a little from the agenda.* To **clarify**: *Just so I’m clear, are we saying that…?* To **agree to an action** without over-promising: *I can take that on, though Friday may be tight.*\n\nTwo C2 features make the difference. **Ellipsis and short forms** keep meetings moving: *Agreed? Fine. Next item.* And **softening through modals and the past** keeps them courteous: *I was going to suggest… / Might it be worth…?*' },
          { t: 'examples', items: [
            { s: '**Shall we make a start?** The aim today is to agree the launch date.', n: 'Opening with the purpose.' },
            { s: 'That’s an important point, but **let’s park it for now** and come back to it at the end.', n: 'Keeping to the agenda without dismissing.' },
            { s: '**Sorry to interrupt, but could I just come in here?**', n: 'A polite interruption.' },
            { s: '**Just so I’m clear**, are we saying the budget is fixed?', n: 'Clarifying.' },
            { s: '**So the action points are**: Felix circulates the figures, and Priya contacts the supplier.', n: 'Closing with names and tasks.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['We start now. The agenda is this.', 'Shall we make a start? The purpose of today is…', 'Too abrupt for a chair.'],
            ['Stop talking, please, Owen.', 'Could we let Priya finish? Then I’ll come to you.', 'Firm but warm.'],
            ['Let’s discuss it at the end of the meeting time.', 'Let’s come back to that under any other business.', 'Use the fixed phrase.'],
            ['Someone should send the report.', 'Felix, could you send the report by Friday?', 'An action needs a name and a date.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'A project meeting', lines: [
            { who: 'Chair', s: 'Shall we make a start? The purpose of today is to agree a launch date, and I’d like to finish by half past ten.' },
            { who: 'Owen', s: 'Before we do, I think we need to talk about the whole marketing strategy.' },
            { who: 'Chair', s: 'That’s an important point, Owen, but let’s park it for now and come back to it under any other business. Priya, you’ve spoken to the developers. How do you see the timing?' },
            { who: 'Priya', s: 'Realistically, the end of March. Earlier would mean cutting the testing phase.' },
            { who: 'Felix', s: 'Sorry to interrupt, but could I just come in here? Sales would much prefer February.' },
            { who: 'Chair', s: 'Hold that thought, Felix. Could we let Priya finish first?' },
            { who: 'Priya', s: 'Only that February is possible, provided that we accept a smaller first release.' },
            { who: 'Chair', s: 'So, to sum up where we are: March for the full release, or February for a smaller one. Felix, could you check with sales which they would prefer, and let us know by Thursday?' },
          ] },
          { t: 'ex', kind: 'sort', h: 'What is the chair doing?', groups: ['Opening', 'Managing the discussion', 'Closing'], explain: ['groups'], items: [
            { s: 'The purpose of today’s meeting is to agree the budget.', g: 0, why: 'States the purpose.' },
            { s: 'Shall we make a start?', g: 0, why: 'Begins the meeting.' },
            { s: 'Let’s park that for now.', g: 1, why: 'Keeps to the agenda.' },
            { s: 'Could we let Priya finish?', g: 1, why: 'Manages an interruption.' },
            { s: 'So the action points are as follows.', g: 2, why: 'Records decisions.' },
            { s: 'Thank you all; that’s been very helpful.', g: 2, why: 'Ends the meeting.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the meeting phrases with one word.', items: [
            { q: 'Shall we make a ___? We have a lot to get through.', a: ['start'], why: '*Make a start* = begin.' },
            { q: 'That’s worth discussing, but let’s ___ it for now.', a: ['park'], why: '*Park* an issue = leave it for later.' },
            { q: 'Sorry to interrupt, but could I just come ___ here?', a: ['in'], why: '*Come in* = join the discussion.' },
            { q: 'Just so I’m ___, are we saying the budget is fixed?', a: ['clear'], why: 'A clarifying phrase.' },
            { q: 'I think we’re ___ a little from the agenda.', a: ['drifting', 'straying', 'wandering'], why: '*Drift from* the agenda.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Let’s come back to that under any other [businesses].', a: ['business'], why: 'The fixed phrase is singular: *any other business*.' },
            { s: 'Hold that [thinking], Felix.', a: ['thought'], why: '*Hold that thought*.' },
            { s: 'So, to sum [down] where we are…', a: ['up'], why: '*Sum up* = summarise.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **C2 Proficiency Speaking Part 2**, the **collaborative task**, you and a partner talk for about **four minutes**: about **one minute** on one or two pictures, then about **three minutes** on a **decision-making task** about all of them. The examiner marks how you **manage the interaction**, which is exactly a chair’s skill: inviting views, summarising and moving towards a decision.\n\nThe pictures are described in words. **A**: a video call with a grid of faces. **B**: a short meeting held standing at a whiteboard. **C**: a formal boardroom with papers and an agenda. **D**: two colleagues talking over coffee. **E**: a large conference hall with a panel. First: *Look at pictures A and C. What might be the advantages and drawbacks of each kind of meeting?* Then: *These pictures show different ways of meeting at work. Talk together about what each needs to succeed, then decide which two most need a strong chair.*' },
          { t: 'dialogue', title: 'Speaking Part 2: a model discussion', lines: [
            { who: 'Examiner', s: 'Now talk together about what each kind of meeting needs to succeed, then decide which two most need a strong chair.' },
            { who: 'Leila', s: 'Shall we start with the video call? It needs someone to bring people in, because it’s so easy to stay silent with your camera off. How do you see it?' },
            { who: 'Oliver', s: 'I’d agree, and the conference too: a panel can drift for an hour if nobody keeps to time.' },
            { who: 'Leila', s: 'Whereas the coffee conversation hardly needs a chair at all. Its strength is that it’s informal.' },
            { who: 'Oliver', s: 'True, though decisions made over coffee tend not to be recorded. Just so I’m clear, are we choosing on how much harm a weak chair would do?' },
            { who: 'Leila', s: 'I think so. On that basis I’d go for the video call and the boardroom, because that’s where formal decisions are made.' },
            { who: 'Oliver', s: 'I’d have said the conference rather than the boardroom, but I take your point about formal decisions. Shall we agree on the video call and the boardroom?' },
            { who: 'Leila', s: 'Agreed.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Speaking Part 2): choose the reply that would earn the higher mark in the collaborative task.', items: [
            { q: 'You have just given your opinion. You say…', o: ['How do you see it?', 'That is my answer.', 'Next picture, please.'], why: 'An open question invites your partner in.' },
            { q: 'The discussion has wandered. You say…', o: ['I think we’re drifting a little. Shall we look at the boardroom?', 'Stop. Wrong topic.', 'Whatever you think.'], why: 'Bring the discussion back politely, with a suggestion.' },
            { q: 'You are unsure what you are deciding. You say…', o: ['Just so I’m clear, are we choosing on how much a weak chair would matter?', 'I don’t understand anything.', 'Let’s just choose two.'], why: 'Clarifying shows you are managing the task.' },
            { q: 'There is one minute left. You say…', o: ['So, to sum up, we both see the video call as essential. Shall we agree on that and one more?', 'I think we are finished.', 'You choose.'], why: 'Summarise, then move to a decision.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Think of yourself as **co-chair** of a two-person meeting. Short summaries (*So we both feel…*) and open questions (*How do you see it?*) earn marks for interaction, and they also give you time to think. Do not try to win: a shared decision, or an agreed difference, is the goal.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these phrases after the tutor.', tutor: 'lena', items: [
            { a: 'Shall we make a start? The purpose of today’s meeting is to agree the budget.' },
            { a: 'That’s an important point, but let’s park it for now.' },
            { a: 'So the action points are as follows.' },
          ] },
          { t: 'text', md: 'Now do the collaborative task with your teacher or a partner, for about four minutes: one minute on pictures A and C, then three minutes on the decision. Then switch roles and chair a two-minute meeting on a real question from your own work or studies: open it, bring your partner in, summarise and close with one action.' },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'I am writing to urge you to reconsider',
      about: 'Write a formal letter to a senior reader, putting the point first in a tone that is direct but courteous, in the format of C2 Proficiency Writing Part 2.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'In **C2 Proficiency Writing Part 2** you choose **one task** from a choice that includes an **article, a letter, a report or a review** (one option is about a set book), and write **280 to 320 words**. A **letter** at this level is usually written to a senior reader: a chief executive, a minister, the director of an institution, the editor of a newspaper. It has a purpose: to persuade, to object, to propose or to request.\n\nSenior readers are busy. **Put the point first.** The opening paragraph should say who you are, why you are writing and what you want, in two or three sentences. The body gives the reasons and evidence, one paragraph each, with a concession where it helps. The close repeats the request and says what you expect next.\n\nThe tone at C2 is **direct but courteous**. Direct: say plainly what you want (*I would urge you to reconsider*). Courteous: acknowledge the reader’s position (*I appreciate the pressures on the budget*). Avoid both extremes: **grovelling** (*I humbly beg you*) wastes the reader’s time; **bluntness** (*This decision is ridiculous*) loses their goodwill.' },
          { t: 'table', caption: 'A plan for a letter to a senior reader', explain: ['head', 'col0', 'col1'], head: ['Paragraph', 'What to write', 'Useful language'], rows: [
            ['Opening', 'Who you are, why you are writing, what you want', 'I am writing on behalf of… to urge you to…'],
            ['Body one', 'The main reason, with evidence', 'The principal concern is that…'],
            ['Body two', 'A concession and a further reason', 'I recognise that… Nevertheless, …'],
            ['Body three', 'A practical alternative or proposal', 'One option might be to… which would…'],
            ['Close', 'The request again; the next step', 'I would welcome the opportunity to discuss… Yours sincerely,'],
          ] },
        ],
        [
          { t: 'text', md: 'Several features make a letter sound authoritative rather than emotional. **Nominalisation** puts the issue, not the writer’s feelings, at the centre: *the closure of the office* rather than *you are closing the office*. **Precise reporting** replaces vague claims: *staff surveys indicate* rather than *everyone thinks*. **Hedging** is measured: enough to sound fair, not so much that the point disappears. And **formal requests** give the reader room to agree: *I would ask that the decision be postponed* (note the base form *be* after *ask that*).\n\nA useful test: could the first paragraph alone be forwarded to the person who decides? If not, the point is not yet first.' },
          { t: 'examples', items: [
            { s: 'I am writing on behalf of the station staff **to urge you to reconsider** the closure of ticket offices.', n: 'Who, why and what, in one sentence.' },
            { s: '**I recognise that** the company faces considerable financial pressure.', n: 'A courteous acknowledgement of the reader’s position.' },
            { s: '**Nevertheless**, the proposal risks excluding the passengers who most need assistance.', n: 'The turn after the concession.' },
            { s: '**I would ask that** the decision **be** postponed until the consultation has concluded.', n: 'A formal request with the base form.' },
            { s: '**I would welcome the opportunity to** discuss these concerns with you.', n: 'A courteous close that proposes the next step.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I hope this letter finds you well. I have worked here for six years and…', 'I am writing on behalf of… to urge you to…', 'The point first; background later.'],
            ['This decision is absurd and shows no respect for staff.', 'This decision, I fear, underestimates its effect on staff.', 'Direct but courteous.'],
            ['I humbly beg you to perhaps consider maybe changing…', 'I would urge you to reconsider…', 'Over-hedging hides the request.'],
            ['I ask that the decision is postponed.', 'I ask that the decision be postponed.', 'Base form after *ask that* in formal English.'],
            ['Dear Ms Hart, … Yours faithfully,', 'Dear Ms Hart, … Yours sincerely,', 'A named reader takes *Yours sincerely* (British convention).'],
          ] },
        ],
        [
          { t: 'reading', title: 'Task and model letter', md: 'Task: The managing director of the rail company you work for has announced that all staffed ticket offices will close next year and be replaced by machines. As a staff representative, write a letter to the managing director, explaining your concerns about the plan, acknowledging the company’s reasons, and proposing an alternative.\n\nDear Ms Hart,\n\nI am writing on behalf of the station staff at Northgate to urge you to reconsider the decision to close all staffed ticket offices next year, and to propose a more gradual alternative.\n\nThe principal concern is not our jobs, many of which, we understand, would be redeployed, but the passengers who rely on face-to-face help. Elderly travellers, people with disabilities and visitors unfamiliar with the network regularly come to the office not simply to buy a ticket, but to find out which ticket they need. A machine can sell; it cannot advise. Our own records suggest that a significant share of transactions at Northgate involve exactly this kind of guidance.\n\nI recognise that the company faces considerable financial pressure, and that ticket office sales have fallen as more passengers buy online. Nevertheless, a decision affecting every station at once leaves no room to learn from experience, and any problems would emerge only after the offices had gone.\n\nI would therefore propose a phased approach. Offices at the quietest stations could close first, while those at major interchanges remain open for a trial period of a year. Staff released by the early closures could be retrained as platform assistants, providing help where passengers actually need it. The results could then inform a decision on the remaining offices.\n\nI would ask that the final decision be postponed until such a trial has been evaluated, and I would welcome the opportunity to discuss these proposals with you or a member of your team.\n\nYours sincerely,\n\nJames Clarke\nStaff representative, Northgate' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the model letter. Choose the best answer.', items: [
            { q: 'What does the first paragraph achieve?', o: ['It says who is writing, what they want and that an alternative will follow.', 'It introduces the writer’s career.', 'It thanks the reader for her work.'], why: 'The point first: the reader knows the request at once.' },
            { q: 'Why does the writer say the main concern is *not our jobs*?', o: ['To anticipate the objection that staff are only protecting themselves.', 'Because the writer has already been redeployed.', 'Because jobs are not mentioned in the task.'], why: 'It pre-empts a likely dismissal of the letter and strengthens its credibility.' },
            { q: 'How does the third paragraph keep a courteous tone?', o: ['It acknowledges the company’s reasons before turning with *Nevertheless*.', 'It apologises for writing.', 'It agrees with the plan completely.'], why: 'Concede and turn, as in an argument.' },
            { q: 'Why is the proposal in a separate paragraph?', o: ['A senior reader can find and judge the alternative quickly.', 'The task requires five paragraphs exactly.', 'Proposals must always come last.'], why: 'One function per paragraph makes the letter easy to act on.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Make each sentence right for a formal letter to a senior reader.', items: [
            { s: 'I would ask that the decision [is] delayed.', a: ['be'], why: 'Base form after *ask that*.' },
            { s: 'This plan is [stupid] and will fail.', a: ['unlikely to succeed', 'ill-advised', 'misguided'], why: 'Direct but courteous: criticise the plan in measured terms.' },
            { s: 'I would welcome the opportunity [to discussing] this with you.', a: ['to discuss'], why: '*Opportunity to* + infinitive.' },
            { s: 'I [want] you to reconsider the closure.', a: ['would urge', 'would ask'], why: 'A formal, firm request.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order to make a strong opening sentence.', items: [
            { a: 'I am writing to urge you to reconsider the decision.', why: 'Purpose and request in one sentence.' },
            { a: 'I recognise that the company faces considerable pressure.', why: 'A courteous acknowledgement.' },
          ] },
          { t: 'reading', title: 'Your task', md: 'In the format of the C2 Proficiency exam (Writing Part 2), write your answer in 280 to 320 words and send it to your teacher for correction.\n\nThe chief executive of the organisation you work for has announced that from next quarter all staff must work in the office five days a week, ending the current arrangement of two days at home. Write a letter to the chief executive. Explain the effects you expect the change to have, acknowledge the reasons given for it, and propose an alternative arrangement.' },
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Writing Part 2): before you write, check your plan.', items: [
            { q: 'Which opening puts the point first?', o: ['I am writing on behalf of my team to ask you to reconsider the return to full-time office working, and to suggest an alternative.', 'I have worked in the finance department for seven years and I have always enjoyed it.', 'I was very surprised and upset to read your email last Monday.'], why: 'It states the writer, the request and the purpose at once.' },
            { q: 'Which sentence acknowledges the reasons courteously?', o: ['I appreciate that collaboration and mentoring are easier in person.', 'I suppose you have your reasons.', 'Your reasons are not convincing at all.'], why: 'A genuine acknowledgement before the turn.' },
            { q: 'Which close is best?', o: ['I would welcome the opportunity to discuss a trial of this arrangement with you.', 'Please reply as soon as possible.', 'Thank you for reading my long letter.'], why: 'A courteous next step.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Before you write, read your first paragraph as if you were the chief executive with two minutes to spare. Does it say what you want? Then check your **register** in the last five minutes: no contractions, no exclamation marks, no emotional adjectives, and a close that matches the greeting.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these letter sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'I am writing to urge you to reconsider this decision.' },
            { a: 'I recognise that the company faces considerable pressure.' },
            { a: 'I would welcome the opportunity to discuss these proposals with you.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'A briefing for the board',
      about: 'Write a briefing report for a board: purpose, findings, evaluation and recommendations, in the format of C2 Proficiency Writing Part 2.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'The **report** is another task in **C2 Proficiency Writing Part 2** (280 to 320 words). It is written for a reader who must **decide something**: a board, a committee, a director. It presents **information** about an existing situation, **evaluates** it, and ends with **recommendations**.\n\nAt C1 you learned the shape. At C2 the examiner looks for **precision and economy**: findings that are exact without drowning the reader in figures, evaluation that weighs evidence fairly, and recommendations that follow from the findings and can be acted on. A board member should be able to read the introduction and recommendations alone and know what to do.\n\nA report is not a letter: no greeting, no *I am writing to*. It has a **title** and **headings**, and it is **impersonal**: *it was found that, the data suggest*. The first person appears, if at all, only in the recommendations. And it is not a **proposal**: a report looks at what exists or has happened; a proposal argues for something new.' },
          { t: 'table', caption: 'A plan for a C2 report', explain: ['head', 'col0', 'col1'], head: ['Section', 'What to write', 'Useful language'], rows: [
            ['Title and purpose', 'What the report assesses and what it is based on', 'This report assesses… It draws on…'],
            ['Findings', 'The key facts, precisely and selectively', 'The most striking finding is that… / Attendance rose markedly.'],
            ['Evaluation', 'What the findings mean; strengths and weaknesses', 'While the scheme has succeeded in…, it has been less effective in…'],
            ['Recommendations', 'Clear actions linked to the findings', 'In light of these findings, it is recommended that the board…'],
          ] },
        ],
        [
          { t: 'text', md: 'The language of a C2 report does three things.\n\nIt **reports evidence with the right degree of certainty**. Strong evidence: *the figures show, it is clear that*. Weaker evidence: *the data suggest, it would appear that, there are indications that*. Mixing them up is a common fault: *the survey proves* is almost never true.\n\nIt **compresses**. Nominalisation and participle clauses pack information: *Following the introduction of evening opening, attendance among under-thirties rose markedly.* Relative clauses replace extra sentences: *two exhibitions, both of which sold out*.\n\nIt **recommends formally**. *It is recommended that the board **approve**…* (base form), *The board may wish to consider* + *-ing*, *It would be advisable to…*. Link each recommendation to a finding with *in light of, given that, in view of*.' },
          { t: 'examples', items: [
            { s: '**This report assesses** the six-month trial of evening opening and **draws on** visitor data and staff feedback.', n: 'Purpose and sources in one sentence.' },
            { s: '**The data suggest** that evening visitors are younger than daytime visitors.', n: 'Hedged: the evidence points that way.' },
            { s: '**Following the introduction of** online booking, queues fell sharply.', n: 'Nominalisation compresses a time clause.' },
            { s: '**While** the trial **has succeeded in** attracting new visitors, **it has been less effective in** covering its costs.', n: 'A balanced evaluation.' },
            { s: '**In light of these findings, it is recommended that** the board **extend** the trial.', n: 'A linked, formal recommendation.' },
          ] },
          { t: 'table', caption: 'Common mistakes in C2 reports', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['The survey proves that everyone loves it.', 'The survey suggests that the scheme is widely welcomed.', 'Match certainty to the evidence.'],
            ['Dear Board members, I am writing…', 'Report on the evening opening trial', 'A report has a title, not a greeting.'],
            ['In the first month 112 came, in the second 131, in the third 140…', 'Attendance rose steadily, from just over a hundred to around a hundred and forty.', 'Select and summarise figures.'],
            ['It is recommended that the board approves the plan.', 'It is recommended that the board approve the plan.', 'Base form after *recommend that*.'],
            ['(recommendations unrelated to the findings)', 'Given the low weekday attendance, it is recommended that…', 'Every recommendation answers a finding.'],
          ] },
        ],
        [
          { t: 'reading', title: 'Task and model report', md: 'Task: The arts centre where you work ran a six-month trial of evening opening on Thursdays. The board has asked you to write a report assessing the trial, considering its effect on visitors and on costs, and recommending whether and how it should continue.\n\n**Report on the Thursday evening opening trial**\n\n**Purpose**\nThis report assesses the six-month trial of evening opening and recommends how the board should proceed. It draws on visitor figures, a short survey of evening visitors and feedback from staff.\n\n**Effect on visitors**\nThe most striking finding is that evening opening has reached a different audience. Attendance on Thursday evenings rose steadily over the trial, and the survey suggests that most evening visitors were under thirty-five, a group the centre has long struggled to attract. Many said they could not visit during working hours. The two evening talks, both of which sold out, proved especially popular.\n\n**Costs**\nThe trial has been less successful financially. Additional staffing and heating have not yet been covered by ticket and café income, although the gap narrowed markedly in the final two months. Staff reported that early evenings were busy but that the last hour was almost always quiet.\n\n**Evaluation**\nWhile the trial has clearly succeeded in widening the centre’s audience, it has not yet paid for itself. However, the improving trend, together with the fact that the final hour accounts for a disproportionate share of the costs, indicates that a modified scheme could break even.\n\n**Recommendations**\nIn light of these findings, it is recommended that the board extend evening opening for a further year, closing one hour earlier. Given the success of the talks, the board may also wish to consider a regular evening programme, which would give younger visitors a reason to return. Finally, it would be advisable to review the figures after six months.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the model report. Choose the best answer.', items: [
            { q: 'Why does the writer give no exact attendance figures?', o: ['The trend matters more to the board than every number, so the findings are summarised.', 'The writer does not know the figures.', 'Figures are not allowed in a report.'], why: 'Selecting and summarising is a C2 skill: *rose steadily*.' },
            { q: 'Why is *the survey suggests* better than *the survey proves*?', o: ['A short survey gives evidence, not proof.', 'It is shorter.', 'Reports must never be certain.'], why: 'Match the degree of certainty to the evidence.' },
            { q: 'How does the evaluation lead to the first recommendation?', o: ['It shows that the last hour drives the costs, so closing earlier could make the scheme pay.', 'It repeats the introduction.', 'It is not connected to the recommendations.'], why: 'The recommendation answers a specific finding.' },
            { q: 'Which sentence is a softer recommendation?', o: ['The board may also wish to consider a regular evening programme.', 'It is recommended that the board extend evening opening.', 'This report assesses the trial.'], why: '*May wish to consider* leaves the choice to the board.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which section of the report does each sentence belong to?', groups: ['Purpose', 'Findings', 'Recommendations'], explain: ['groups'], items: [
            { s: 'This report assesses the new mentoring scheme.', g: 0, why: 'Says what the report is about.' },
            { s: 'It draws on interviews with twenty participants.', g: 0, why: 'Names the sources.' },
            { s: 'The data suggest that mentored staff stay longer.', g: 1, why: 'A hedged finding.' },
            { s: 'Following the scheme’s launch, applications rose markedly.', g: 1, why: 'A finding compressed with nominalisation.' },
            { s: 'It is recommended that the board extend the scheme to all departments.', g: 2, why: 'A formal recommendation.' },
            { s: 'The board may wish to consider appointing a coordinator.', g: 2, why: 'A softer recommendation.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite each sentence for a formal report. Use the word given and do not change it.', items: [
            { q: 'After we started online booking, the queues got much shorter.', cue: 'following', a: ['Following the introduction of online booking, the queues got much shorter.', 'Following the introduction of online booking, queues fell sharply.', 'Following the introduction of online booking, queues became much shorter.', 'Following the introduction of online booking, the queues became much shorter.'], why: 'Nominalisation compresses the time clause.' },
            { q: 'We think the board should approve the budget.', cue: 'recommended', a: ['It is recommended that the board approve the budget.', 'It is recommended that the board should approve the budget.'], why: 'Impersonal, with the base form.' },
            { q: 'The survey seems to show that visitors want longer hours.', cue: 'suggests', a: ['The survey suggests that visitors want longer hours.', 'The survey suggests visitors want longer hours.'], why: '*Suggests* hedges the evidence correctly.' },
          ] },
          { t: 'reading', title: 'Your task', md: 'In the format of the C2 Proficiency exam (Writing Part 2), write your answer in 280 to 320 words and send it to your teacher for correction.\n\nA year ago, the company you work for introduced a mentoring scheme in which experienced staff support new employees during their first six months. The directors have asked you to write a report for the board assessing the scheme, considering its benefits and any problems, and recommending whether and how it should continue.' },
          { t: 'text', md: '**Your writing task.** Write the report above in **280 to 320 words** and send it to your teacher, who will correct it and mark it for content, communicative achievement, organisation and language. Give it a title and a heading for each part. Hedge your evidence accurately (*the data suggest, it would appear*), compress at least two findings with nominalisation, and make every recommendation follow from a finding.' },
          { t: 'tip', art: 'owl', md: 'Write the **recommendations first** in your plan, then choose only the findings that support them. A C2 report is selective: a board wants the facts that matter for its decision, not everything you know. Leave five minutes to check that each recommendation has a finding behind it.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these report sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'This report assesses the trial and draws on visitor data.' },
            { a: 'The data suggest that evening visitors are younger.' },
            { a: 'In light of these findings, it is recommended that the board extend the trial.' },
          ] },
          { t: 'text', md: 'Now brief your teacher or a partner aloud, as you would at the start of a board meeting, in about a minute: what the mentoring scheme was, the two findings that matter most, and your main recommendation. Then answer one question on it.' },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the best option.', items: [
      { q: 'We will cover delivery provided that the order ___ five hundred units.', o: ['exceeds', 'will exceed', 'would exceed'], why: 'Present tense after *provided that*.' },
      { q: 'We cannot proceed ___ we receive a deposit.', o: ['unless', 'provided', 'on condition'], why: '*Unless* = if not.' },
      { q: 'It is recommended that the board ___ the budget.', o: ['approve', 'approves', 'will approve'], why: 'Base form after *recommend that*.' },
      { q: 'I would ask that the decision ___ postponed.', o: ['be', 'is', 'will be'], why: 'Base form after *ask that*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the expressions with their meanings.', pairs: [
      ['a sticking point', 'an issue that blocks agreement'],
      ['meet someone halfway', 'compromise in the middle'],
      ['park an issue', 'leave it until later in a meeting'],
      ['any other business', 'the last item on an agenda'],
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'Shall we make a ___? The purpose of today is to agree the plan.', a: ['start'], why: '*Make a start*.' },
      { q: 'Sorry to interrupt, but could I just come ___ here?', a: ['in'], why: '*Come in* = join the discussion.' },
      { q: 'If you ___ to sign today, we could reduce the fee.', a: ['were'], why: '*If you were to*: a hypothetical offer.' },
      { q: 'I would welcome the ___ to discuss this with you.', a: ['opportunity', 'chance'], why: 'A courteous close.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'We can’t start unless you [don’t pay] a deposit.', a: ['pay'], why: '*Unless* already means *if not*.' },
      { s: 'The survey [proves] that staff welcome the scheme.', a: ['suggests', 'indicates'], why: 'A survey gives evidence, not proof.' },
      { s: 'Dear Mr Hall, … Yours [faithfully],', a: ['sincerely'], why: 'A named reader: *Yours sincerely*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Complete the second sentence so that it has a similar meaning. Use the word given and do not change it.', items: [
      { q: 'We will lower the price, but only if you sign for three years.', cue: 'condition', a: ['We will lower the price on condition that you sign for three years.'], why: '*On condition that* + present tense.' },
      { q: 'After the scheme was introduced, staff turnover fell.', cue: 'following', a: ['Following the introduction of the scheme, staff turnover fell.'], why: 'Nominalisation for a report.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Choose the best sentence.', items: [
      { q: 'The opening of a letter to a chief executive:', o: ['I am writing on behalf of my team to urge you to reconsider the decision.', 'I hope you are well and enjoying the spring.', 'Your decision is completely unacceptable.'], why: 'The point first, in a direct but courteous tone.' },
      { q: 'An evaluation in a board report:', o: ['While the trial has succeeded in attracting new visitors, it has not yet covered its costs.', 'The trial was good and bad.', 'I loved the trial personally.'], why: 'Balanced, precise and impersonal.' },
      { q: 'A chair keeping to time:', o: ['That’s an important point, but let’s park it for now.', 'Stop talking about that.', 'We will discuss everything forever.'], why: 'Firm but courteous.' },
    ] },
  ],
};
