// English B2 for moving abroad, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Your rights at home and at work',
  goal: 'Understand contracts and stand up for your rights politely.',
  art: 'suitcase',
  tags: { skills: ['reading', 'vocabulary', 'speaking', 'writing'], topics: ['tenancy', 'contract-language', 'employment-rights', 'holiday-entitlement', 'repairs'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Renting: rights and duties',
      about: 'Understand the main terms of a tenancy agreement and the language of obligation.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'A **tenancy agreement** is the contract between a tenant and a landlord. In the UK it usually sets out the rent, the deposit, who is responsible for repairs and how much **notice** each side must give to end the tenancy. The rules differ between England, Scotland, Wales and Northern Ireland, and they change from time to time, so always read your own agreement and check official guidance if you are unsure.' },
          { t: 'table', caption: 'Words in a tenancy agreement', explain: ['head', 'col1'], quiz: true, head: ['Term', 'Meaning'], rows: [
            ['deposit', 'money you pay at the start, returned at the end if there is no damage or unpaid rent'],
            ['notice period', 'the time between giving notice and the end of the tenancy'],
            ['give notice', 'tell the other side officially that you want to end the tenancy'],
            ['fair wear and tear', 'normal damage from everyday use, such as a slightly worn carpet'],
            ['inventory', 'a list of the furniture and the condition of the property at the start'],
            ['deduction', 'money taken from the deposit, for example to pay for damage'],
          ] },
        ],
        [
          { t: 'text', md: 'Contracts use fixed phrases to say who must do what and who has a right to what.' },
          { t: 'examples', items: [
            { s: 'The landlord **is responsible for** repairs to the heating and hot water.', n: '*Be responsible for* + noun or *-ing*: it is their duty.' },
            { s: 'The tenant **shall** keep the property clean and in good condition.', n: 'In contracts, *shall* means *must*. In everyday speech it is rarely used in this way.' },
            { s: 'The tenant **must not** sublet the property **without the landlord’s written consent**.', n: 'To *sublet* is to rent the property to someone else. *Written consent* is permission on paper or by email.' },
            { s: 'The tenant **is entitled to** the return of the deposit, minus any agreed deductions.', n: '*Be entitled to* + noun: you have a right to it.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In England and Wales, landlords usually have to protect a tenant’s deposit in a government-approved **deposit protection scheme**, and similar schemes exist in Scotland and Northern Ireland. If you and your landlord disagree about deductions, the scheme can often help to settle the dispute.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the term and its meaning.', pairs: [
            ['deposit', 'money returned at the end if all is well'],
            ['inventory', 'a list of what is in the property and its condition'],
            ['deduction', 'money taken from the deposit'],
            ['fair wear and tear', 'normal damage from everyday use'],
            ['notice period', 'the time before the tenancy ends'],
            ['sublet', 'rent your home to another person'],
          ] },
          { t: 'ex', kind: 'choice', h: 'What does the contract sentence mean?', items: [
            { q: '“The tenant shall not keep pets without the landlord’s written consent.”', o: ['You can have a pet only if the landlord agrees in writing.', 'You can never have a pet.', 'You can have a pet if you tell the landlord afterwards.'], why: '*Shall not* means *must not*, and *without written consent* means you need written permission.' },
            { q: '“The landlord is responsible for maintaining the exterior of the building.”', o: ['The landlord must look after the outside of the building.', 'The tenant must paint the outside of the building.', 'The landlord only looks after the inside of the flat.'], why: '*Maintain* means keep in good condition. *Exterior* means outside.' },
            { q: '“The deposit will be returned, minus deductions for any damage beyond fair wear and tear.”', o: ['Money is taken only for damage that is worse than normal use.', 'Money is taken for every small mark on the walls.', 'The deposit is kept by the landlord in all cases.'], why: '*Beyond fair wear and tear* means more than normal everyday damage.' },
            { q: '“The tenant may end the tenancy by giving one month’s written notice.”', o: ['The tenant can leave after telling the landlord in writing one month before.', 'The tenant must leave after one month.', 'The landlord can end the tenancy whenever he or she wants.'], why: '*Give one month’s notice*: tell the other side one month before.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with one word.', items: [
            { q: 'The landlord is responsible ___ repairing the boiler.', a: ['for'], why: '*Be responsible for* + *-ing* or a noun.' },
            { q: 'You are entitled ___ the return of your deposit.', a: ['to'], why: '*Be entitled to* + noun.' },
            { q: 'Tenants must not sublet the flat without the landlord’s written ___.', a: ['consent', 'permission', 'agreement'], why: '*Written consent* is permission given on paper or by email.' },
            { q: 'We have to give the landlord two months’ ___ if we want to leave.', a: ['notice'], why: 'You *give notice* when you officially say you will leave.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Who is responsible for repairing the roof?', why: 'Question with *who* as the subject: no *does*.' },
            { a: 'The landlord is responsible for the heating.', why: 'Subject + *is responsible for* + noun.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Your rights at work',
      about: 'Understand probation, notice and holiday entitlement, and check your terms politely.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'In the UK, employees usually receive a **written statement** of their main terms on or before their first day. It covers pay, hours, holiday, sick pay and notice. Many jobs also begin with a **probationary period**, often of three to six months, during which the employer and the new employee find out whether the job is a good fit.' },
          { t: 'table', caption: 'Words in an employment contract', explain: ['head', 'col1'], quiz: true, head: ['Term', 'Meaning'], rows: [
            ['probation', 'a trial period at the start of a job; the notice period is often shorter during it'],
            ['notice period', 'the time you must work after you resign or are dismissed'],
            ['holiday entitlement', 'the paid holiday you have a right to each year'],
            ['bank holiday', 'a public holiday, such as Christmas Day or Easter Monday'],
            ['pro rata', 'in proportion: part-time staff get a share based on their hours'],
            ['statutory', 'set by law, not just by your contract'],
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'In the UK, most workers are entitled to **5.6 weeks** of paid holiday a year, and employers may include bank holidays in this. A contract can give you more than the legal minimum, but not less. Part-time workers get the same entitlement **pro rata**.' },
          { t: 'dialogue', title: 'Checking the contract', lines: [
            { who: 'Lucía', s: 'Hi Gareth, have you got a minute? I just wanted to check a couple of things in my contract.' },
            { who: 'Gareth', s: 'Of course. What would you like to know?' },
            { who: 'Lucía', s: 'As I understand it, I’m entitled to twenty-five days’ holiday plus bank holidays. Is that right?' },
            { who: 'Gareth', s: 'That’s right, although you’re still on probation, so your manager needs to approve any holiday first.' },
            { who: 'Lucía', s: 'That’s fine. And could you clarify the notice period? The contract says one week during probation.' },
            { who: 'Gareth', s: 'Yes. Once you’ve passed your probation, it goes up to one month on both sides.' },
            { who: 'Lucía', s: 'Great, that’s clear. Would you mind confirming that by email, just so I have it in writing?' },
            { who: 'Gareth', s: 'Not at all. I’ll send it this afternoon.' },
          ] },
        ],
        [
          { t: 'text', md: 'Lucía checks her rights without sounding demanding. *As I understand it, …* and *Is that right?* check a fact politely. *Could you clarify…?* asks for a clear explanation. *Just so I have it in writing* gives a friendly reason for a request.' },
          { t: 'ex', kind: 'tf', h: 'Think about the conversation. True or false?', items: [
            { q: 'Lucía has twenty-five days of holiday as well as bank holidays.', a: 't', why: '*Twenty-five days’ holiday plus bank holidays*, and Gareth agrees.' },
            { q: 'During probation, Lucía can take holiday without asking anyone.', a: 'f', why: 'Her manager needs to approve any holiday first.' },
            { q: 'After probation, Lucía will have to give one month’s notice if she leaves.', a: 't', why: '*It goes up to one month on both sides*: for her and for the employer.' },
            { q: 'Gareth refuses to put the information in writing.', a: 'f', why: '*Not at all* means he does not mind, so he agrees to send an email.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the most polite way to stand up for your rights.', items: [
            { q: 'You think you still have two days of holiday left.', o: ['As I understand it, I still have two days left. Could you check that for me?', 'You owe me two days. Give them to me.', 'Two days are missing, and that is illegal.'], why: '*As I understand it* presents your view as a fact to check, not an accusation.' },
            { q: 'You do not understand a clause in your contract.', o: ['Could you clarify what this clause means?', 'This clause makes no sense at all.', 'Explain this clause.'], why: '*Could you clarify…?* asks for an explanation politely.' },
            { q: 'You want written confirmation of what your manager said.', o: ['Would you mind confirming that by email?', 'Write that down for me now.', 'I don’t believe you, so put it in writing.'], why: '*Would you mind* + *-ing* is a soft request.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with one word.', items: [
            { q: 'New staff have a six-month ___ period.', a: ['probation', 'probationary', 'trial'], why: 'A *probation* (or *probationary*) period is a trial at the start of a job.' },
            { q: 'Part-time staff receive holiday ___ rata.', a: ['pro'], why: '*Pro rata*: a share based on their hours.' },
            { q: 'I’d like to hand in my ___. My last day will be 30 June.', a: ['notice', 'resignation'], why: '*Hand in your notice* (or *resignation*): tell your employer you are leaving.' },
            { q: 'As I ___ it, overtime is paid at a higher rate. Is that right?', a: ['understand'], why: '*As I understand it* checks a fact politely.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reporting a repair',
      about: 'Read a tenant’s email about a leak and the landlord’s reply.',
      art: 'cat',
      spreads: [
        [
          { t: 'reading', title: 'Subject: Repair needed: leak in the bathroom', md: 'Dear Mrs Fielding,\n\nI am writing to report a problem in the flat at 6 Harrow Court. Since 10 October, water has been leaking from the pipe under the bathroom sink. At first it was only a few drops, but over the past week the leak has become much worse, and the floor under the sink is now permanently wet. I am concerned that the water may damage the floor and the ceiling of the flat below.\n\nI have turned off the water to the sink and put a bowl under the pipe, but this is only a temporary solution. I have attached three photos that show the pipe and the floor.\n\nAs I understand it, repairs to the plumbing are the landlord’s responsibility under our tenancy agreement. I would therefore be grateful if you could arrange for a plumber to visit as soon as possible. I work from home on Mondays and Thursdays, so either day would be convenient, but I am happy to arrange access on another day if necessary.\n\nI look forward to hearing from you.\n\nKind regards,\n\nHyun-woo Park' },
        ],
        [
          { t: 'reading', title: 'Subject: Re: Repair needed: leak in the bathroom', md: 'Dear Mr Park,\n\nThank you for your email and the photos, and I am sorry to hear about the leak. You were quite right to turn off the water.\n\nI have contacted a local plumber, who can visit on Thursday 23 October between 9 am and 12 noon. Please let me know if this time is not convenient. If the pipe needs to be replaced, he may have to come back with the part, but he has assured me that the work should be finished by the end of next week.\n\nI would also be grateful if you could tell me if you notice any damp on the walls or the ceiling. In that case, I will ask someone to check the flat below.\n\nPlease keep the receipts for anything you have had to buy because of the leak, and I will refund them.\n\nThank you for reporting the problem so quickly.\n\nBest regards,\n\nHelen Fielding' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read both emails. True, false or not given?', items: [
            { q: 'The leak has got worse since it started.', a: 't', why: '*Over the past week the leak has become much worse.*' },
            { q: 'Mr Park has already repaired the pipe himself.', a: 'f', why: 'He turned off the water and put a bowl under the pipe: *only a temporary solution*.' },
            { q: 'The neighbours downstairs have complained about water.', a: 'ng', why: 'Mr Park is worried about the flat below, but nobody says the neighbours complained.' },
            { q: 'The plumber’s visit is on a day when Mr Park works from home.', a: 't', why: 'The visit is on a Thursday, and he works from home on Mondays and Thursdays.' },
            { q: 'The repair will definitely be finished on Thursday.', a: 'f', why: 'The plumber *may have to come back*; the work *should be finished by the end of next week*.' },
            { q: 'Mrs Fielding will pay Mr Park back for things he had to buy.', a: 't', why: '*Keep the receipts… and I will refund them.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language of the emails.', items: [
            { q: 'Why does Mr Park write “Since 10 October, water has been leaking…”?', o: ['The present perfect continuous shows that the leak started then and is still happening.', 'The leak stopped on 10 October.', 'He is describing a leak that will start in the future.'], why: '*Since* + a date with the present perfect continuous: from a point in the past until now.' },
            { q: 'What is the purpose of “As I understand it, repairs to the plumbing are the landlord’s responsibility”?', o: ['He reminds her of her duty without sounding aggressive.', 'He admits that he does not understand the contract.', 'He offers to pay for the repair himself.'], why: '*As I understand it* softens a statement about rights.' },
            { q: 'What does “he has assured me that the work should be finished” mean?', o: ['The plumber told her confidently that the work will probably be finished.', 'The plumber has already finished the work.', 'The plumber refused to do the work.'], why: '*Assure* means tell someone confidently so that they do not worry.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the phrase that shows Mr Park is flexible.', items: [
            { s: 'Either day would be convenient, but [I am happy to arrange access on another day] if necessary.', why: 'He offers another day, which makes the request easier for the landlord.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'Normal damage from everyday use is called fair wear and ___.', o: ['tear', 'tired', 'torn'], why: 'The fixed phrase is *fair wear and tear*.' },
      { q: 'In a contract, “The tenant shall pay the rent monthly” means the tenant ___.', o: ['must pay every month', 'may pay every month if they want', 'will pay later'], why: 'In contracts, *shall* means *must*.' },
      { q: 'A trial period at the start of a new job is called ___.', o: ['probation', 'notice', 'entitlement'], why: '*Probation*: a trial period.' },
      { q: 'You want to check a fact politely: “___, I’m entitled to sick pay. Is that right?”', o: ['As I understand it', 'Obviously', 'You know that'], why: '*As I understand it* presents the fact as something to check.' },
      { q: 'Water ___ through the ceiling since Monday.', o: ['has been coming', 'is coming', 'came'], why: '*Since Monday* and still happening: present perfect continuous.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'The landlord is responsible ___ the roof and the walls.', a: ['for'], why: '*Be responsible for*.' },
      { q: 'All employees are ___ to paid holiday.', a: ['entitled'], why: '*Be entitled to*: have a right to.' },
      { q: 'You can’t sublet without the landlord’s written ___.', a: ['consent', 'permission', 'agreement'], why: '*Written consent*: permission in writing.' },
      { q: 'Could you ___ what this clause means?', a: ['clarify', 'explain'], why: '*Could you clarify…?* asks for an explanation.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'A deduction is money that is added to your deposit.', a: 'f', why: 'A *deduction* is money taken away.' },
      { q: '*Pro rata* holiday for part-time staff depends on their hours.', a: 't', why: 'They get a share in proportion to their hours.' },
      { q: 'An inventory lists the condition of the property at the start of a tenancy.', a: 't', why: 'That is what an *inventory* is for.' },
    ] },
  ],
};
