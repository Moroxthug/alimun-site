// English C1 for moving abroad, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Disputes and formal complaints',
  goal: 'Take a complaint further with a firm, precise and measured tone.',
  art: 'dragon',
  tags: { skills: ['writing', 'grammar', 'vocabulary', 'reading'], topics: ['complaints', 'escalation', 'inversion', 'cleft-sentences', 'mediation', 'ombudsman', 'small-claims', 'formal-letter'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Taking it further',
      about: 'Escalate a complaint with emphasis that sounds controlled, not angry.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'When a first complaint gets nowhere, you may need to **escalate** it: write to a manager, the complaints department or head office. A second letter has to be stronger than the first, but strength in formal English comes from **precision and structure**, not from anger.\n\nTwo C1 structures help. **Inversion** after a negative or limiting word puts the auxiliary before the subject and adds weight. **Cleft sentences** focus the reader on the key fact.' },
          { t: 'examples', items: [
            { s: '**At no point was I informed** that the fee was non-refundable.', n: 'Inversion after *at no point*: *was I informed*, not *I was informed*. Stronger than *I was never told*.' },
            { s: '**Not only did** the engineer fail to arrive, **but** nobody contacted me.', n: '*Not only* + auxiliary + subject … *but (also)* adds a second, worse point.' },
            { s: '**Only after** my third call **was** the problem recorded.', n: 'With *only after* the inversion comes in the main clause: *was the problem recorded*.' },
            { s: '**It was not until** 4 March **that** I received a reply.', n: 'An it-cleft with *not until* stresses how long you waited.' },
            { s: '**What I am asking for is** a full refund of the installation fee.', n: 'A what-cleft puts your request at the end, where it has most weight.' },
          ] },
        ],
        [
          { t: 'table', caption: 'From emotional to measured', explain: ['head'], head: ['Emotional', 'Measured'], rows: [
            ['Your service is a disgrace.', 'The service I received fell well below the standard described in your terms.'],
            ['Nobody ever bothers to call back.', 'On three occasions I was promised a call back, which did not happen.'],
            ['I’m sick of waiting.', 'I have now been waiting for six weeks for this matter to be resolved.'],
            ['I want my money back now.', 'I would ask you to refund the full amount within fourteen days.'],
            ['I’ll take you to court.', 'If I do not receive a satisfactory response, I will consider taking the matter further.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In a second complaint, quote your first one: *Further to my letter of 12 May (reference CN-3381)…*. Give a clear **deadline** and say calmly what you will do next. A calm, specific letter is much harder to ignore than an angry one.' },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with inversion, starting with the words given.', items: [
            { q: 'I was never told about the extra charge.', cue: 'At no point', a: ['At no point was I told about the extra charge.'], why: 'After *at no point*, the auxiliary comes before the subject: *was I told*.' },
            { q: 'The parcel was late, and it was also damaged.', cue: 'Not only', a: ['Not only was the parcel late, but it was also damaged.', 'Not only was the parcel late, it was also damaged.', 'Not only was the parcel late but it was also damaged.'], why: '*Not only* + *was* + subject; the second part often starts with *but*.' },
            { q: 'The manager agreed to look into it only after I complained in writing.', cue: 'Only after I complained in writing', a: ['Only after I complained in writing did the manager agree to look into it.'], why: 'With *only after* + clause, the inversion is in the main clause: *did the manager agree*.' },
            { q: 'You should not, under any circumstances, disconnect the meter.', cue: 'Under no circumstances', a: ['Under no circumstances should you disconnect the meter.'], why: '*Under no circumstances* + *should you*: a very strong prohibition.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Is this sentence measured or too emotional for a formal complaint?', groups: ['Measured', 'Too emotional'], explain: ['groups'], items: [
            { s: 'I have now contacted your helpline on four separate occasions.', g: 0, why: 'A precise fact with a number.' },
            { s: 'Your staff are completely useless.', g: 1, why: 'An insult, and not a fact the reader can check.' },
            { s: 'I would ask you to confirm the refund in writing by 30 June.', g: 0, why: 'A clear request with a deadline.' },
            { s: 'This is the worst company I have ever dealt with.', g: 1, why: 'A feeling, not evidence.' },
            { s: 'The repair has still not been carried out.', g: 0, why: 'A neutral statement of fact.' },
            { s: 'I can’t believe how incompetent you are.', g: 1, why: 'Personal and angry; it makes the reader defensive.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the correct option.', items: [
            { q: 'Never ___ such poor customer service.', o: ['have I experienced', 'I have experienced', 'I experienced'], why: 'After *never* at the start, invert: *have I experienced*.' },
            { q: 'It was only when I posted the photos ___ the company replied.', o: ['that', 'when', 'what'], why: 'An it-cleft uses *that*: *It was only when… that…*' },
            { q: 'Hardly ___ the contract when the price went up.', o: ['had I signed', 'I had signed', 'did I signed'], why: '*Hardly had* + subject + past participle … *when*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Settling a dispute',
      about: 'Understand the main ways to settle a dispute outside and inside court, in general terms.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'If a company’s complaints process does not solve the problem, there are usually other options. The names and rules differ from country to country and from sector to sector, so check what applies to you. In general terms, there are four common routes.\n\nIn **mediation**, a neutral person, the **mediator**, helps both sides reach an agreement, but cannot impose one. In **arbitration**, an **arbitrator** listens to both sides and makes a decision, which is often binding. An **ombudsman** is an independent official who investigates complaints about a particular sector, such as banking, energy or public services, often free of charge. For smaller amounts of money, many countries have a **small claims** procedure, a simpler and cheaper kind of court case.' },
          { t: 'table', caption: 'The language of disputes', explain: ['head', 'col1'], quiz: true, head: ['Phrase', 'Meaning'], rows: [
            ['lodge a complaint', 'make a formal complaint'],
            ['reach deadlock', 'get to a point where neither side will move'],
            ['a final response', 'a company’s last answer to a complaint'],
            ['refer a complaint to', 'send it to another organisation to decide'],
            ['reach a settlement', 'agree how to end the dispute'],
            ['a goodwill gesture', 'something offered to keep you happy, without admitting fault'],
            ['without admitting liability', 'without saying it was their fault'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'What should I do next?', lines: [
            { who: 'Elena', s: 'The energy company has sent its final response, and it’s basically the same as before. They’re offering thirty pounds as a goodwill gesture.' },
            { who: 'Kofi', s: 'Without admitting they got the bill wrong, I suppose?' },
            { who: 'Elena', s: 'Exactly. They overcharged me by more than four hundred, and they’re acting as if they’re doing me a favour.' },
            { who: 'Kofi', s: 'Well, if you’ve had a final response, you can usually refer it to the ombudsman. When I had a problem with my bank, that was what finally sorted it.' },
            { who: 'Elena', s: 'Is it expensive?' },
            { who: 'Kofi', s: 'Not for customers, as far as I know. It might take a while, mind you, so keep copies of every letter and note the date of every call.' },
            { who: 'Elena', s: 'And if that doesn’t work, I suppose there’s always the small claims court.' },
            { who: 'Kofi', s: 'True, but I’d see it as a last resort. Most of these things get settled long before that.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Think about the conversation. True, false or not given?', items: [
            { q: 'The energy company admits that it made a mistake on the bill.', a: 'f', why: 'They offer a goodwill gesture *without admitting* they got the bill wrong.' },
            { q: 'Elena thinks the company’s offer is generous.', a: 'f', why: 'She says they are *acting as if they’re doing me a favour*, which is ironic and shows she is unhappy.' },
            { q: 'Kofi used an ombudsman in the past.', a: 't', why: 'It sorted out his problem with his bank.' },
            { q: 'Kofi thinks the ombudsman will decide quickly.', a: 'f', why: '*It might take a while, mind you.*' },
            { q: 'Elena has already started a small claims case.', a: 'ng', why: 'She only mentions it as an option if the ombudsman does not work.' },
          ] },
          { t: 'tip', art: 'owl', md: '*Mind you* is common in British speech. It adds a point that slightly limits what you have just said: *It’s free. It might take a while, mind you.* *A last resort* is what you do only when everything else has failed.' },
        ],
        [
          { t: 'ex', kind: 'colloc', h: 'Which words go with the key word?', items: [
            { key: 'reach', o: ['a settlement', 'deadlock', 'an agreement', 'a complaint', 'liability'], a: [0, 1, 2], why: 'We *reach a settlement*, *reach deadlock* and *reach an agreement*. We *lodge* or *make* a complaint.' },
            { key: 'lodge', o: ['a complaint', 'an appeal', 'an objection', 'a gesture', 'a mediator'], a: [0, 1, 2], why: 'You *lodge* something formal: a complaint, an appeal, an objection.' },
            { key: 'admit', o: ['liability', 'fault', 'a mistake', 'a response', 'a resort'], a: [0, 1, 2], why: 'Companies *admit liability*, *admit fault* or *admit a mistake*.' },
          ] },
          { t: 'ex', kind: 'crossword', h: 'Complete the crossword.', words: [
            { a: 'mediator', clue: 'A neutral person who helps both sides agree.' },
            { a: 'ombudsman', clue: 'An independent official who investigates complaints in one sector.' },
            { a: 'settlement', clue: 'An agreement that ends a dispute.' },
            { a: 'arbitrator', clue: 'A person who hears both sides and makes a decision.' },
            { a: 'evidence', clue: 'Letters, photos and receipts that support your case.' },
            { a: 'deadlock', clue: 'The point where neither side will move.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the best word.', items: [
            { q: 'The mediator cannot ___ a solution; she can only help us find one.', o: ['impose', 'propose', 'compose'], why: 'A mediator cannot *impose* a decision, which means force it on both sides.' },
            { q: 'The company offered £50 as a goodwill ___.', o: ['gesture', 'gift', 'favour'], why: 'The fixed phrase is *a goodwill gesture*.' },
            { q: 'Once you have received a final ___, you can contact the ombudsman.', o: ['response', 'answer', 'reaction'], why: '*Final response* is the usual term for a company’s last answer to a complaint.' },
            { q: 'Going to court should be a last ___.', o: ['resort', 'result', 'reason'], why: '*A last resort*: the option you use only when nothing else works.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A final complaint',
      about: 'Read an escalated complaint and the company’s final response.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Subject: Formal complaint, account HB-20817', md: 'Dear Complaints Manager,\n\nFurther to my email of 2 September and my telephone calls of 9, 16 and 23 September, I am writing to escalate my complaint about the installation of broadband at my flat.\n\nOn 28 August I paid an installation fee of £60, and an engineer was booked for 1 September. No engineer arrived, and at no point was I contacted to explain why. Not only was a second appointment missed on 12 September, but on each occasion I was told that the problem would be “looked into”. Only after my fourth call was an engineer finally sent, on 30 September.\n\nAs I work from home, I was without a reliable connection for over four weeks and had to pay for mobile data, for which I enclose the receipts. What I find most frustrating is not the delay itself, but the lack of any clear explanation.\n\nI would ask you to refund the installation fee in full and to reimburse the cost of the mobile data, £38 in total. I would be grateful for your response within fourteen days. If I do not receive a satisfactory reply, I will consider referring the matter to the relevant ombudsman.\n\nYours faithfully,\n\nTomasz Nowak' },
        ],
        [
          { t: 'reading', title: 'Subject: Re: Formal complaint, account HB-20817', md: 'Dear Mr Nowak,\n\nThank you for your email, and please accept my apologies for the inconvenience you have experienced.\n\nHaving reviewed your account, I can confirm that both appointments were cancelled because of a shortage of engineers in your area, and that you should have been informed of this on each occasion. I fully accept that this did not happen, and I am sorry that it was left to you to chase us.\n\nI have arranged a full refund of the £60 installation fee. In addition, although our terms do not usually cover the cost of alternative services, I have authorised a payment of £38 to cover your mobile data, as a goodwill gesture. Both amounts should reach your account within five working days.\n\nThis is our final response to your complaint. If you are not satisfied with it, you have the right to refer your complaint to the ombudsman within six months of the date of this email.\n\nYours sincerely,\n\nRachel Dunn\nCustomer Relations' },
          { t: 'tip', art: 'owl', md: 'Notice how the company accepts some things and not others. *You should have been informed* admits a failure. *As a goodwill gesture* pays the data costs without accepting that it had to.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read both emails. True, false or not given?', items: [
            { q: 'Tomasz had complained before he wrote this email.', a: 't', why: 'He refers to an earlier email and three phone calls: *Further to my email…*' },
            { q: 'Two appointments were missed before an engineer came.', a: 't', why: 'The appointments on 1 and 12 September were missed.' },
            { q: 'Tomasz is most upset about the length of the delay.', a: 'f', why: '*What I find most frustrating is not the delay itself, but the lack of any clear explanation.*' },
            { q: 'The company says the engineer was ill.', a: 'f', why: 'The reason given is *a shortage of engineers in your area*.' },
            { q: 'Tomasz receives everything he asked for.', a: 't', why: 'He asked for £60 and £38, and both are paid.' },
            { q: 'Tomasz decides to contact the ombudsman anyway.', a: 'ng', why: 'The email tells him he has the right to, but we do not know what he does.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language of the emails.', items: [
            { q: 'Why does Tomasz list the dates of his calls?', o: ['To show precisely how often he tried to solve the problem.', 'Because he forgot what happened.', 'To ask for new appointments on those dates.'], why: 'Precise dates are evidence, and make the escalation hard to dismiss.' },
            { q: 'What is the effect of “at no point was I contacted”?', o: ['The inversion makes the complaint more emphatic.', 'It makes the sentence less formal.', 'It shows that he is unsure.'], why: 'Inversion after *at no point* adds weight in formal writing.' },
            { q: 'Why does Rachel Dunn write “I fully accept that this did not happen”?', o: ['She admits the company failed to inform him.', 'She denies that he was not informed.', 'She says the appointments did happen.'], why: 'She accepts the failure to inform him, which makes the reply more credible.' },
            { q: '“Although our terms do not usually cover…” What does she want him to understand?', o: ['The company is paying more than it has to.', 'The company is refusing to pay.', 'His contract covers mobile data.'], why: 'Together with *as a goodwill gesture*, this shows the payment is voluntary.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with one word from the emails.', items: [
            { q: '___ to my email of 2 September, I am writing to escalate my complaint.', a: ['Further'], why: '*Further to* refers back to earlier contact.' },
            { q: 'I would ask you to ___ the cost of the mobile data.', a: ['reimburse', 'refund'], why: '*Reimburse* means pay back money someone has spent.' },
            { q: 'I am sorry that it was left to you to ___ us.', a: ['chase'], why: '*Chase* someone: keep contacting them until they act.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'Not only ___ late, but it was also the wrong size.', o: ['was the sofa', 'the sofa was', 'did the sofa'], why: '*Not only* + *was* + subject.' },
      { q: 'An independent official who investigates complaints in one sector is an ___.', o: ['ombudsman', 'arbitrator', 'engineer'], why: 'That is an *ombudsman*.' },
      { q: 'A person who helps both sides agree but cannot impose a decision is a ___.', o: ['mediator', 'judge', 'arbitrator'], why: 'A *mediator* helps; an arbitrator decides.' },
      { q: 'Which sentence is best for a formal complaint?', o: ['I have now been waiting six weeks for a reply.', 'I am sick of waiting for you lot.', 'You never answer anything, ever.'], why: 'A precise, calm fact.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence, starting with the words given.', items: [
      { q: 'I was not told about the fee at any point.', cue: 'At no point', a: ['At no point was I told about the fee.'], why: 'Inversion after *at no point*.' },
      { q: 'I received a reply only on 4 March.', cue: 'It was not until', a: ['It was not until 4 March that I received a reply.', 'It wasn’t until 4 March that I received a reply.'], why: '*It was not until* + time + *that*.' },
      { q: 'I want a full refund.', cue: 'What I want', a: ['What I want is a full refund.'], why: 'A what-cleft: *What I want is…*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete with one word.', items: [
      { q: 'They offered £20 as a goodwill ___.', a: ['gesture'], why: '*A goodwill gesture*.' },
      { q: 'After weeks of talks, both sides finally reached a ___.', a: ['settlement', 'compromise', 'deal'], why: '*Reach a settlement* (or *compromise*, *deal*).' },
      { q: 'They paid without admitting ___.', a: ['liability', 'fault'], why: '*Without admitting liability*: not saying it was their fault.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'An arbitrator usually makes a decision.', a: 't', why: 'Arbitration ends with a decision, often binding.' },
      { q: '*A last resort* is the first thing you try.', a: 'f', why: 'It is what you try when everything else has failed.' },
    ] },
  ],
};
