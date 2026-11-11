// English C1 (preview book), unit 6, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// What if?: mixed conditionals with every form, wish, if only, would rather and it’s (high) time, alternatives to if and
// inverted conditionals, and a short story about a missed train read in the format of C1 Advanced Reading Part 5.
export const UNIT = {
  id: 'u6',
  title: 'What if?',
  goal: 'Imagine other pasts and presents with mixed conditionals, talk about regrets and preferences with wish, if only and would rather, set conditions formally with provided that, but for and inversion, and follow a short story closely.',
  art: 'ghost',
  tags: { skills: ['grammar', 'reading', 'speaking'], topics: ['mixed-conditionals', 'wish', 'if-only', 'would-rather', 'its-time', 'inversion', 'conditionals', 'regret', 'short-story'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'I would be living in Toronto now',
      about: 'Mix past and present in one conditional sentence, with continuous forms, other modals and inversion.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'At B2 you learnt the two basic mixed conditionals. A **past** condition can have a **present** result: *If I **had taken** that job, I **would be** in Toronto now.* And a **present** (permanent) condition can have a **past** result: *If I **weren’t** so shy, I **would have spoken** to her.*\n\nThe logic is simple: each half of the sentence keeps the tense that matches **its own time**. Real life rarely keeps past and present in separate boxes, so this is how people actually talk about choices and their consequences.\n\nAt C1 you add three things. First, **continuous forms** on either side: *If I **hadn’t been working** late, I **would have seen** the message*, *If I had taken that job, I **would be living** in Toronto now.* Second, **other modals** in the result: *could* (ability or possibility), *might* (a weaker possibility). Third, the **formal inversions** you will meet again in lesson 3: ***Had I taken** that job, I would be living in Toronto.*' },
          { t: 'table', caption: 'Mixed conditionals at C1', explain: ['head', 'col0'], head: ['Time of each half', 'Pattern', 'Example'], rows: [
            ['Past condition, present result', 'If + past perfect, would / could / might + verb', 'If she **had studied** medicine, she **might be** a surgeon now.'],
            ['Past condition, result in progress now', 'If + past perfect, would be + -ing', 'If we **hadn’t moved**, we **would be living** with my parents.'],
            ['Present state, past result', 'If + past simple, would / could have + past participle', 'If he **were** more careful, he **wouldn’t have lost** his keys.'],
            ['Activity in progress then, present result', 'If + had been + -ing, would + verb', 'If I **hadn’t been texting**, I **wouldn’t be** in this mess.'],
            ['Inverted, formal', 'Had + subject + past participle, would + verb', '**Had I listened**, I **would know** the answer.'],
          ] },
        ],
        [
          { t: 'text', md: 'Two fixed phrases are very common in mixed conditionals. ***If it weren’t for** + noun* talks about something that is true now: *If it weren’t for my sister, I would be lost.* ***If it hadn’t been for** + noun* talks about the past: *If it hadn’t been for that teacher, I wouldn’t be a writer today.* The second can have a present result, which makes it mixed.\n\nIn speech, people stress the word that carries the contrast: *If I’d **gone** to university, I’d be **earning** more.* In writing, a mixed conditional is a neat way to show cause and effect across time in a single sentence, which is useful in essays and reports.\n\nIn formal English, *If I were* is preferred to *If I was*. Both are heard; the exam accepts *were* every time.' },
          { t: 'examples', items: [
            { s: 'If I **had saved** more, I **could be** travelling right now.', n: 'Past condition; *could be* + *-ing* for an activity happening now.' },
            { s: 'If she **didn’t speak** five languages, she **wouldn’t have got** the job.', n: 'A permanent fact about her (present) explains a past result.' },
            { s: 'If it **hadn’t been for** the scholarship, I **wouldn’t be** here.', n: 'A past cause, a present result.' },
            { s: 'If we **hadn’t been chatting**, we **might not be** so late now.', n: 'A past activity in progress; *might* for a weaker possibility.' },
            { s: '**Had** the bus **been** on time, we **would be** there by now.', n: 'An inverted mixed conditional: formal or literary.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['If I would have known, I would be there.', 'If I had known, I would be there.', 'No *would* in the *if*-clause: past perfect.'],
            ['If I had taken the job, I would have lived in Toronto now.', 'If I had taken the job, I would be living in Toronto now.', '*Now* is present: *would be (living)*, not *would have lived*.'],
            ['If he wasn’t so lazy, he would pass yesterday’s exam.', 'If he weren’t so lazy, he would have passed yesterday’s exam.', 'The result is in the past: *would have* + past participle.'],
            ['If it wasn’t for the scholarship, I wouldn’t be here.', 'If it hadn’t been for the scholarship, I wouldn’t be here.', 'The scholarship was in the past: *hadn’t been for*.'],
          ] },
          { t: 'dialogue', title: 'The road not taken', lines: [
            { who: 'Grace', s: 'Do you ever think about that job offer in Canada?' },
            { who: 'James', s: 'All the time. If I’d said yes, I’d be living in Toronto now.' },
            { who: 'Grace', s: 'And you wouldn’t have met me. Don’t forget that part.' },
            { who: 'James', s: 'True. And if I weren’t so cautious, I might have said yes anyway.' },
            { who: 'Grace', s: 'Well, if it hadn’t been for your caution, we wouldn’t be standing in our own kitchen.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the form that matches the time of each half.', items: [
            { q: 'If I hadn’t missed the flight, I ___ on a beach right now.', o: ['would be lying', 'would have lain', 'will be lying'], why: '*Right now*: a present activity, *would be* + *-ing*.' },
            { q: 'If he ___ so stubborn, he would have apologised.', o: ['weren’t', 'hadn’t been', 'wouldn’t be'], why: 'Stubbornness is permanent: past simple for a present state.' },
            { q: 'If it ___ for her help last year, I wouldn’t have this job.', o: ['hadn’t been', 'weren’t', 'wasn’t'], why: '*Last year*: a past cause, *hadn’t been for*.' },
            { q: 'If we had left earlier, we ___ be home by now.', o: ['might', 'might have', 'will'], why: 'A present result with a weaker possibility: *might* + verb.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. Write the whole sentence; the new part has three to six words, including the word given.', items: [
            { q: 'I’m exhausted because I didn’t sleep last night.', cue: 'SLEPT', a: ['If I had slept last night, I wouldn’t be exhausted.', 'If I’d slept last night, I wouldn’t be exhausted.', 'If I had slept last night, I would not be exhausted.', 'I wouldn’t be exhausted if I had slept last night.', 'I wouldn’t be exhausted if I’d slept last night.'], why: 'Past condition, present result.' },
            { q: 'She isn’t very patient, so she didn’t wait for the results.', cue: 'MORE', a: ['If she were more patient, she would have waited for the results.', 'If she was more patient, she would have waited for the results.', 'If she were more patient, she’d have waited for the results.'], why: 'A permanent quality (present) with a past result.' },
            { q: 'We only have this house because my grandmother left us money.', cue: 'FOR', a: ['If it hadn’t been for my grandmother’s money, we wouldn’t have this house.', 'If it had not been for my grandmother’s money, we would not have this house.', 'But for my grandmother’s money, we wouldn’t have this house.', 'But for my grandmother’s money, we would not have this house.'], why: '*If it hadn’t been for* or *But for* + noun, with a present result.' },
            { q: 'I didn’t accept the offer, which is why I’m not living in Toronto now.', cue: 'HAD', a: ['Had I accepted the offer, I would be living in Toronto now.', 'Had I accepted the offer, I’d be living in Toronto now.', 'If I had accepted the offer, I would be living in Toronto now.', 'If I’d accepted the offer, I’d be living in Toronto now.'], why: 'An inverted mixed conditional with a continuous result.' },
            { q: 'He’s in hospital because he was driving too fast.', cue: 'BEEN', a: ['If he hadn’t been driving too fast, he wouldn’t be in hospital.', 'If he had not been driving too fast, he would not be in hospital.', 'He wouldn’t be in hospital if he hadn’t been driving too fast.'], why: 'A past activity in progress (*had been* + *-ing*) with a present result.' },
            { q: 'I don’t speak Japanese, so I couldn’t help the tourists yesterday.', cue: 'COULD', a: ['If I spoke Japanese, I could have helped the tourists yesterday.', 'I could have helped the tourists yesterday if I spoke Japanese.'], why: 'A present fact with a past result: *could have* + past participle.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Mixed conditionals are a favourite in **Part 4** because one answer tests **two forms at once**: the past perfect in the condition and *would* + verb in the result, or the reverse. Look for time words such as *now, today, yesterday, last year* in the first sentence: they tell you which half is past and which is present.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'If I’d taken that job, I’d be living in Toronto now.' },
            { a: 'If he weren’t so stubborn, he would have apologised.' },
            { a: 'If it hadn’t been for her, I wouldn’t be here today.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'I’d rather you hadn’t told her',
      about: 'Express regrets, wishes, preferences and criticism with wish, if only, would rather and it’s (high) time + past.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'These structures share one idea: a **past form that is not about the past**. When you wish for something unreal, English moves the verb **one step back**, just as in a conditional. The past simple talks about an unreal **present**, the past perfect about an unreal **past**.\n\n*I wish I **knew** the answer.* (I don’t know it now.)\n*I wish I **had known** the answer.* (I didn’t know it then.)\n*I wish I **could** come.* (I’m not able to.)\n*I wish I **could have** helped.* (I wasn’t able to.)\n\n***Wish + would*** is different. It is about **other people** or things you cannot control, and it often sounds annoyed: *I wish you **would** stop interrupting.* You cannot use it about yourself (*I wish I would* is wrong), because you can control your own behaviour.\n\n***If only*** works exactly like *wish*, but it is stronger and more emotional, often an exclamation: ***If only** I had listened!*' },
          { t: 'table', caption: 'Wish, if only, would rather, it’s time', explain: ['head', 'col0'], head: ['Meaning', 'Pattern', 'Example'], rows: [
            ['Unreal present', 'wish / if only + past simple', 'I wish I **lived** nearer the sea.'],
            ['Regret about the past', 'wish / if only + past perfect', 'If only we **had booked** earlier.'],
            ['Annoyance, wanting change', 'wish + someone + would', 'I wish the neighbours **would** turn the music down.'],
            ['Preference, same subject', 'would rather + verb (than)', 'I’d rather **walk** than wait for a bus.'],
            ['Preference about someone else', 'would rather + someone + past', 'I’d rather you **didn’t** tell anyone.'],
            ['Preference about the past', 'would rather + someone + past perfect', 'I’d rather you **hadn’t** invited him.'],
            ['It should already be happening', 'it’s (high / about) time + subject + past', 'It’s high time the council **fixed** the road.'],
          ] },
        ],
        [
          { t: 'text', md: '***Would rather*** and ***would sooner*** mean the same. With the **same subject** they take the bare infinitive (*I’d rather stay in*). When the preference is about **someone else**, the other person needs a past form: *I’d rather you **stayed** in.* For a past situation that cannot be changed, use the past perfect: *I’d rather you **hadn’t** said that.* *Would prefer* is more neutral: *I’d prefer **to** stay in* or *I’d prefer it **if** you stayed in.*\n\n***It’s time*** can be neutral: *It’s time **to** go.* With a subject and a past verb it becomes a **criticism**: it should already have happened. *High* and *about* make the criticism sharper: *It’s **about time** you **found** a job.*\n\n***As if*** and ***as though*** follow the same logic when something is not true: *He talks **as if** he **owned** the place.* (He doesn’t.) Compare *She looks as if she is tired* (she may well be).' },
          { t: 'examples', items: [
            { s: 'I wish I **hadn’t sent** that email.', n: 'A regret about a past action: past perfect.' },
            { s: 'I wish it **would** stop raining.', n: '*Would* for something outside your control, often weather or other people.' },
            { s: '**If only** I **could** see her one more time.', n: '*If only* + *could*: a strong, emotional wish.' },
            { s: 'My parents **would rather** I **studied** law.', n: 'A preference about someone else: past simple.' },
            { s: '**It’s high time** we **had** a proper conversation about this.', n: 'Criticism: it should have happened already.' },
            { s: 'She treats me **as if** I **were** a child.', n: 'Unreal comparison: I am not a child.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I wish I would have more time.', 'I wish I had more time.', 'No *wish + would* about yourself; past simple for an unreal present.'],
            ['I wish I didn’t say that.', 'I wish I hadn’t said that.', 'A past regret needs the past perfect.'],
            ['I’d rather you don’t smoke here.', 'I’d rather you didn’t smoke here.', 'A different subject after *would rather* takes a past form.'],
            ['It’s high time we go.', 'It’s high time we went.', '*It’s high time* + subject takes the past simple.'],
            ['I’d rather to walk.', 'I’d rather walk.', '*Would rather* takes the bare infinitive, without *to*.'],
          ] },
          { t: 'dialogue', title: 'Sharing a flat', lines: [
            { who: 'Priya', s: 'I wish you wouldn’t leave your bike in the hall. I nearly fell over it again.' },
            { who: 'Owen', s: 'Sorry. I’d rather keep it inside than have it stolen, though.' },
            { who: 'Priya', s: 'Fine, but I’d rather you kept it in your room.' },
            { who: 'Owen', s: 'If only the landlord had fixed the shed lock. I asked him in March.' },
            { who: 'Priya', s: 'It’s about time he did something. I’ll ring him today.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the correct form.', items: [
            { q: 'I wish I ___ to the party last night. Everyone says it was great.', o: ['had gone', 'went', 'would go'], why: 'A regret about the past: past perfect.' },
            { q: 'I wish my brother ___ borrowing my clothes without asking.', o: ['would stop', 'stopped', 'had stopped'], why: 'Annoyance about someone else’s habit: *wish* + *would*.' },
            { q: 'I’d rather you ___ anything to Mum yet.', o: ['didn’t say', 'don’t say', 'not to say'], why: 'A different subject: past simple after *would rather*.' },
            { q: 'It’s about time you ___ responsibility for your own mistakes.', o: ['took', 'take', 'will take'], why: '*It’s about time* + subject + past simple.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'If only I [didn’t lose] my temper yesterday.', a: ['hadn’t lost', 'had not lost'], why: '*Yesterday*: a past regret, past perfect.' },
            { s: 'I’d rather you [have told] me the truth from the start.', a: ['had told'], why: 'A past preference about someone else: *would rather* + past perfect.' },
            { s: 'He behaves as if he [is] the manager, but he isn’t.', a: ['were', 'was'], why: 'An unreal comparison: past form after *as if*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 2): read the letter to a younger self and write one word in each gap.', items: [
            { q: 'I often wish I ___ listened to my teachers more carefully.', a: ['had'], why: 'A past regret: *wish* + past perfect.' },
            { q: 'If ___ someone had told me how much languages would matter!', a: ['only'], why: '*If only* introduces a strong wish.' },
            { q: 'My parents would rather I ___ studied law, but I chose music.', a: ['had'], why: 'A past preference about someone else: *would rather* + subject + past perfect.' },
            { q: 'At the time, I behaved as ___ I knew everything.', a: ['if', 'though'], why: '*as if* / *as though* + past for an unreal comparison.' },
            { q: 'Now I think it is high ___ I wrote down what I have learnt.', a: ['time'], why: '*It’s high time* + subject + past simple.' },
            { q: 'I would ___ make my own mistakes than repeat someone else’s.', a: ['rather', 'sooner'], why: '*would rather / sooner* + verb + *than*.' },
            { q: 'I just wish people ___ stop asking me whether I regret it.', a: ['would'], why: 'Annoyance about other people: *wish* + *would*.' },
            { q: 'If I ___ to start again, I would change very little.', a: ['were', 'had'], why: '*If I were to* for a hypothetical situation.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 2** the gaps are mostly grammar words: auxiliaries, prepositions, pronouns, linkers and parts of fixed phrases such as *if only, as if, high time, would rather*. Read the words **after** the gap as well as before it: *rather* is often followed by *than* later in the sentence.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'I wish I hadn’t sent that email.' },
            { a: 'I’d rather you didn’t tell anyone yet.' },
            { a: 'It’s high time we had a proper conversation.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Should you need anything',
      about: 'Set conditions with provided that, as long as, supposing, but for and otherwise, and use inverted conditionals in formal English.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: '*If* is neutral, but English has many other ways to introduce a condition, and each adds a shade of meaning.\n\n***Provided (that)**, **providing (that)**, **as long as*** and ***on condition that*** stress that the condition is **necessary**: *only if*. *On condition that* is the most formal and appears in contracts. ***Supposing*** or ***suppose*** and ***assuming (that)*** ask the listener to **imagine** a situation, often in a question: *Supposing you lost your job, what would you do?* ***Even if*** says the result does not change: *I’ll go even if it rains.* ***Unless*** means *if not*.\n\n***But for*** + noun means *if it were not for* or *if it had not been for*: *But for the rain, we would have won.* ***Otherwise*** (or ***or else***) comes after a sentence and gives the result if that sentence is not true: *Leave now, otherwise you’ll miss the train.* ***In the event of*** + noun is formal, typical of notices: *In the event of fire, use the stairs.*\n\nAfter all these words, use a **present tense for the future**, as with *if*: *as long as you **finish**,* not *will finish*.' },
          { t: 'table', caption: 'Inverted conditionals', explain: ['head', 'col0'], head: ['Type', 'Inversion', 'Same as'], rows: [
            ['Future, unlikely', 'Should you need help, call me.', 'If you need help (which may not happen)'],
            ['Hypothetical', 'Were the price to rise, sales would fall.', 'If the price rose'],
            ['Hypothetical, with be', 'Were I in your position, I would accept.', 'If I were in your position'],
            ['Past', 'Had we known, we would have come.', 'If we had known'],
            ['Negative', 'Had I not seen the sign, I would have turned left.', 'If I hadn’t seen the sign'],
            ['Fixed phrase', 'Were it not for / Had it not been for your help…', 'If it weren’t / hadn’t been for your help'],
          ] },
        ],
        [
          { t: 'text', md: 'Inversion drops *if* and moves **should, were** or **had** to the front. Only these three verbs can do this; you cannot say *Did I know…* for a condition. Inverted conditionals sound **formal or literary**, so they suit letters, notices, essays and stories, and sound stiff in a chat with friends.\n\nThe negative is never contracted in an inversion: ***Had I not** known*, never *Hadn’t I known*, because a contracted form at the start of a sentence looks like a question.\n\n*Should* in an inversion does not mean *ought to*. It makes the condition sound **less likely** and more polite, which is why it is everywhere in formal correspondence: *Should you have any questions, please do not hesitate to contact us.*' },
          { t: 'reading', title: 'Notice to conference guests', md: 'Welcome to the Riverside Conference Centre. Should you require assistance at any time, please speak to a member of staff at the main desk.\n\nIn the event of a fire alarm, leave the building by the nearest exit and gather in the car park. Do not use the lifts unless instructed to do so.\n\nGuests may use the business lounge free of charge, provided that they show their conference badge. Were demand for the lounge to exceed capacity, priority would be given to speakers.\n\nPlease return your key card at the end of your stay; otherwise a replacement charge will be added to your bill.' },
          { t: 'examples', items: [
            { s: '**Should** you **change** your mind, the offer remains open.', n: 'A polite, formal condition: *Should* + subject + verb.' },
            { s: '**Were** the company **to** close, hundreds would lose their jobs.', n: '*Were* + subject + *to* + verb for an imagined future.' },
            { s: '**Had** it **not been for** the map, we would have got lost.', n: 'The negative inversion: not contracted.' },
            { s: '**Supposing** nobody comes, what will we do with all the food?', n: '*Supposing* invites the listener to imagine.' },
            { s: 'You can use my laptop **as long as** you **save** your work elsewhere.', n: 'A present tense after *as long as*.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Provided you will finish early, you can leave.', 'Provided you finish early, you can leave.', 'Present tense for the future after *provided*.'],
            ['Hadn’t I seen the sign, I would have turned.', 'Had I not seen the sign, I would have turned.', 'No contraction in an inverted negative.'],
            ['Unless you don’t hurry, you’ll be late.', 'Unless you hurry, you’ll be late.', '*Unless* already means *if not*.'],
            ['But for he helped us, we would have failed.', 'But for his help, we would have failed.', '*But for* is followed by a noun, not a clause.'],
            ['Should you needed help, call me.', 'Should you need help, call me.', '*Should* + bare infinitive.'],
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the best word or phrase.', items: [
            { q: 'You can borrow the car ___ you bring it back with a full tank.', o: ['provided', 'unless', 'otherwise'], why: 'A necessary condition: *provided (that)*.' },
            { q: '___ your support, I would never have finished the degree.', o: ['But for', 'Unless', 'Even if'], why: '*But for* + noun = if it had not been for.' },
            { q: 'Write the address down; ___ you’ll forget it.', o: ['otherwise', 'provided', 'supposing'], why: '*Otherwise* gives the result if you don’t.' },
            { q: '___ you won the lottery, what is the first thing you would buy?', o: ['Supposing', 'Provided', 'As long as'], why: '*Supposing* asks the listener to imagine.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. Write the whole sentence; the new part has three to six words, including the word given.', items: [
            { q: 'If you need any further information, please contact reception.', cue: 'SHOULD', a: ['Should you need any further information, please contact reception.', 'Should you require any further information, please contact reception.'], why: 'A formal, less likely condition: *Should* + subject + verb.' },
            { q: 'If I had known about the strike, I would have taken the car.', cue: 'HAD', a: ['Had I known about the strike, I would have taken the car.', 'Had I known about the strike, I’d have taken the car.'], why: 'An inverted third conditional.' },
            { q: 'Without your advice, I would have made a terrible mistake.', cue: 'FOR', a: ['But for your advice, I would have made a terrible mistake.', 'Had it not been for your advice, I would have made a terrible mistake.', 'If it hadn’t been for your advice, I would have made a terrible mistake.', 'If it had not been for your advice, I would have made a terrible mistake.'], why: '*But for* or *Had it not been for* + noun.' },
            { q: 'If the government decided to raise taxes, there would be protests.', cue: 'WERE', a: ['Were the government to raise taxes, there would be protests.', 'Were the government to decide to raise taxes, there would be protests.'], why: '*Were* + subject + *to* + verb.' },
            { q: 'You can borrow my car, but only if you return it by six.', cue: 'PROVIDED', a: ['You can borrow my car provided you return it by six.', 'You can borrow my car provided that you return it by six.', 'You can borrow my car, provided you return it by six.', 'You can borrow my car, provided that you return it by six.'], why: '*Provided (that)* = only if.' },
            { q: 'Imagine you lost your job. What would you do?', cue: 'SUPPOSING', a: ['Supposing you lost your job, what would you do?'], why: '*Supposing* + past simple for an imagined situation.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Inversions are common in **Part 4** because they turn a neutral sentence into a formal one in very few words. If the word given is ***Had, Should*** or ***Were*** at the start, expect an inverted conditional, and remember: no *if*, and no contraction in the negative.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'Should you require assistance, please speak to a member of staff.' },
            { a: 'Had I known about the strike, I would have taken the car.' },
            { a: 'But for your advice, I would have made a terrible mistake.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'Platform Four',
      about: 'Read a short story about a missed train in the format of C1 Advanced Reading Part 5, then discuss choices and regret as in Speaking Part 4.',
      art: 'croissant',
      spreads: [
        [
          { t: 'text', md: 'Stories about missed chances are full of the grammar of this unit: characters imagine other pasts and presents, wish things were different and decide what they would rather do. Read the story once for what happens, then again for **how the characters feel** and **what the writer implies** without saying it directly.' },
          { t: 'reading', title: 'Platform Four', md: 'The train was still there when Tomasz reached the top of the stairs, and for a second he believed he would make it. Then the doors sighed shut, a whistle went, and the last train to the coast slid away without him. His suitcase, heavier than ever, stayed in his hand.\n\nHe stood on the empty platform doing the sums that everyone does. Had he not stopped to argue with the taxi driver, he would be sitting in a warm carriage now, going over his notes for the morning. If only he had let the man take the long way round. If he were a calmer person, he thought, none of this would have happened. But he was not, and it had.\n\n“You’ve missed it, love.” A woman in an orange jacket was pushing a cleaning trolley towards him. Her badge said ROSA. “Next one’s at ten past six.”\n\n“I know,” he said, more sharply than he meant to. “Sorry. I have a job interview at nine. Or I had one.”\n\nShe parked the trolley and sat down at the other end of his bench, as though she had been invited. “Supposing you get the ten past six,” she said. “What time does it arrive?”\n\n“Twenty to nine.”\n\n“Then you haven’t missed anything yet, have you? You’ve lost a night’s sleep, that’s all.” She took a flask from the trolley and poured two cups of tea without asking whether he wanted one.\n\nThey talked, or rather Rosa talked, about the station as it used to be, about the lines that had closed, and about her daughter, who was studying medicine and would rather her mother retired. “She says it’s high time I put my feet up,” Rosa said. “I tell her I’d sooner put them on this platform.”\n\nWarmed by the tea, he asked her whether she had always worked there.\n\n“No. Forty years ago I was meant to get on a train from this platform. Someone was waiting for me in another city. I had my ticket and my best coat.” She shrugged. “I stood exactly where you were standing, and I watched it go. I didn’t miss it. I let it go.”\n\n“Do you wish you’d got on?”\n\nShe took the question seriously, which he had not expected. “Some days. If I’d gone, I wouldn’t have my daughter, and I wouldn’t be sitting here drinking bad tea with a stranger. Were I to choose again, I think I’d do the same. But I do wonder, now and then, who that woman on the train would have become.”\n\nBy six the platform was filling with commuters. Rosa stood and collected the cups. “Go on,” she said. “And should they ask why you look tired, tell them the truth. People remember a story.”\n\nHe caught the ten past six. He did not get the job, as it happened. A month later he was offered a better one by a woman who had sat opposite him on that train and heard him rehearsing his answers under his breath. But for the taxi driver, Tomasz often thinks, he would never have met either of them. He has never gone back to tell the driver. He would rather the man went on believing that he had ruined someone’s night.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 5): choose the answer that fits best according to the story.', items: [
            { q: 'In the first paragraph, the writer suggests that Tomasz', o: ['briefly thought he still had a chance of catching the train.', 'had expected to miss the train all along.', 'decided not to run for the train.', 'was relieved when the doors closed.'], why: '*for a second he believed he would make it*.' },
            { q: 'What does the phrase “doing the sums that everyone does” refer to?', o: ['imagining how things would be if he had acted differently', 'working out how much the taxi had cost', 'calculating how long he would have to wait', 'counting the hours until his interview'], why: 'The next sentences are all imagined alternatives: *Had he not stopped…, If only…*' },
            { q: 'Why does Tomasz say “Sorry” to Rosa?', o: ['He realises he has spoken more rudely than he intended.', 'He thinks he is in her way.', 'He has interrupted her work.', 'He did not hear what she said.'], why: '*he said, more sharply than he meant to. “Sorry.”*' },
            { q: 'Rosa asks what time the morning train arrives in order to', o: ['show him that the situation is less serious than he believes.', 'find out whether she will still be at work.', 'suggest that he should go home instead.', 'check that he has understood the timetable.'], why: '*Then you haven’t missed anything yet, have you?*' },
            { q: 'What does Rosa mean when she says “I didn’t miss it. I let it go”?', o: ['She had chosen not to get on the train.', 'She arrived too late to catch the train.', 'Someone had stopped her from leaving.', 'The train left earlier than planned.'], why: '*Let it go* contrasts a choice with an accident.' },
            { q: 'How does Rosa feel about the decision she made forty years ago?', o: ['She is largely at peace with it but still curious about the other life.', 'She bitterly regrets it.', 'She has never thought about it since.', 'She blames the person who was waiting for her.'], why: '*I think I’d do the same. But I do wonder, now and then…*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 5** of C1 Advanced, many questions ask what a writer **implies** or why a character says something. The answer is rarely in the same words as the text. Find the lines the question is about, decide the answer in your own words, and only then look at the four options.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each sentence from the story with the structure it uses.', pairs: [
            ['Had he not stopped to argue, he would be sitting in a warm carriage now.', 'inverted mixed conditional'],
            ['She would rather her mother retired.', 'would rather + someone + past'],
            ['It’s high time I put my feet up.', 'criticism with a past verb'],
            ['Were I to choose again, I’d do the same.', 'inverted hypothetical'],
            ['But for the taxi driver, he would never have met them.', 'condition with a noun'],
          ] },
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Tomasz argued with the taxi driver about the route.', a: 't', why: '*If only he had let the man take the long way round.*' },
            { q: 'Rosa’s daughter wants her to stop working.', a: 't', why: '*would rather her mother retired*.' },
            { q: 'Tomasz got the job he was travelling to the interview for.', a: 'f', why: '*He did not get the job, as it happened.*' },
            { q: 'Tomasz has visited Rosa at the station since that night.', a: 'ng', why: 'The story does not say whether he saw Rosa again.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **C1 Advanced Speaking Part 4** the examiner asks you and your partner broader questions linked to the topic of Part 3. There is no right answer. You are marked on how you **develop** an opinion, give **reasons and examples**, consider **another point of view** and **respond to your partner**. This is a good place for a mixed conditional, a *wish* or an inversion, used naturally.' },
          { t: 'dialogue', title: 'Speaking Part 4: do people spend too long regretting decisions?', lines: [
            { who: 'Examiner', s: 'Some people say we spend too much time regretting the choices we didn’t make. What do you think?' },
            { who: 'Elena', s: 'I’d say it depends on the person. Looking back can be useful, provided it doesn’t stop you acting now.' },
            { who: 'Javier', s: 'I agree up to a point. But I think regret is often a story we tell ourselves. If I’d chosen differently, I’d simply have different regrets.' },
            { who: 'Elena', s: 'That’s a nice way to put it. Still, I wish someone had told me that at eighteen.' },
            { who: 'Javier', s: 'Exactly. Had I heard it then, I might be a little calmer today.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Speaking Part 4): the examiner asks, “Is it better to make decisions quickly or to take your time?” Choose the best answer for each part.', items: [
            { q: 'Which answer develops the opinion best?', o: ['On the whole, I’d rather take my time, because a quick decision made under pressure is often one you regret. That said, waiting too long can mean the chance disappears.', 'Take your time.', 'Quickly. Next question?'], why: 'An opinion, a reason, and another point of view.' },
            { q: 'Your partner says, “I always decide quickly.” What is the best response?', o: ['Really? Supposing it’s something big, like moving abroad, would you still decide in a day?', 'OK.', 'I decide slowly.'], why: 'It engages with the partner and invites them to develop the idea.' },
            { q: 'Which sentence uses the unit’s grammar most naturally?', o: ['If I hadn’t thought so carefully about my course, I’d probably be studying something I hate now.', 'Had I been think carefully, I am studying now.', 'If I would think carefully, I would have be happy.'], why: 'A correct mixed conditional linking a past choice to the present.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these answers after the tutor.', tutor: 'kofi', items: [
            { a: 'Looking back can be useful, provided it doesn’t stop you acting now.' },
            { a: 'If I’d chosen differently, I’d simply have different regrets.' },
            { a: 'On the whole, I’d rather take my time over big decisions.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the correct form.', items: [
      { q: 'If I hadn’t missed the bus, I ___ at my desk now.', o: ['would be sitting', 'would have sat', 'will sit'], why: 'Past condition, present activity.' },
      { q: 'If she ___ so shy, she would have spoken to him.', o: ['weren’t', 'hadn’t', 'wouldn’t be'], why: 'A permanent quality: past simple.' },
      { q: 'I wish you ___ leaving the door open.', o: ['would stop', 'stopped', 'will stop'], why: 'Annoyance about someone else’s habit.' },
      { q: 'I’d rather you ___ me before you told everyone.', o: ['had asked', 'asked', 'would ask'], why: 'A past preference about someone else: past perfect.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Complete the second sentence so that it has a similar meaning, using the word given (three to six words).', items: [
      { q: 'If you have any questions, please contact us.', cue: 'SHOULD', a: ['Should you have any questions, please contact us.'], why: 'A formal inverted condition.' },
      { q: 'If we had known, we would have come earlier.', cue: 'HAD', a: ['Had we known, we would have come earlier.', 'Had we known, we’d have come earlier.'], why: 'An inverted third conditional.' },
      { q: 'You should have gone to bed hours ago.', cue: 'TIME', a: ['It’s high time you went to bed.', 'It’s about time you went to bed.', 'It’s time you went to bed.', 'It is high time you went to bed.', 'It is time you went to bed.'], why: '*It’s (high) time* + subject + past simple.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'I wish I ___ listened to your advice.', a: ['had'], why: 'A past regret.' },
      { q: '___ for the rain, we would have won the match.', a: ['But'], why: '*But for* + noun.' },
      { q: 'Lock your bike; ___ it will be stolen.', a: ['otherwise'], why: 'The result if you don’t.' },
      { q: 'He acts as ___ he were the boss.', a: ['if', 'though'], why: 'An unreal comparison.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: '[Hadn’t I seen] the sign, I would have turned left.', a: ['Had I not seen'], why: 'No contraction in an inverted negative.' },
      { s: 'Unless you [don’t hurry], you’ll miss the start.', a: ['hurry'], why: '*Unless* already means *if not*.' },
      { s: 'If I had taken that job, I [would have lived] in Toronto now.', a: ['would be living', 'would live'], why: '*Now*: a present result.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Choose the correct sentence.', items: [
      { q: '', o: ['I wish I had more free time.', 'I wish I would have more free time.', 'I wish I have more free time.'], why: 'Past simple for an unreal present; no *wish I would*.' },
      { q: '', o: ['Provided you finish early, you can leave.', 'Provided you will finish early, you can leave.', 'Provided you finished early, you can leave.'], why: 'Present tense for the future after *provided*.' },
      { q: '', o: ['Were the price to rise, sales would fall.', 'Were the price rise, sales would fall.', 'Would the price rise, sales would fall.'], why: '*Were* + subject + *to* + verb.' },
    ] },
  ],
};
