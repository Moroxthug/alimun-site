// English B2 for moving abroad, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Official letters',
  goal: 'Understand formal letters and official language and reply precisely.',
  art: 'mug',
  tags: { skills: ['reading', 'writing', 'grammar', 'vocabulary'], topics: ['formal-register', 'passive', 'nominalisation', 'hedging', 'formal-letter', 'appeal', 'complaint'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'The language of official letters',
      about: 'Recognise the passive, noun phrases and careful wording that make official letters sound formal.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Letters from councils, banks, letting agents and government offices use a **formal register**. Three features appear again and again: the **passive**, **noun phrases** in place of verbs, and **hedging**, which means careful words that make a statement less direct. Once you recognise them, these letters become much easier to understand.\n\nThe **passive** puts the action first and often leaves out who did it. The writer is usually the organisation itself, so it does not need to be named.' },
          { t: 'examples', items: [
            { s: 'Your application **has been received** and **is being processed**.', n: 'Present perfect passive and present continuous passive. Nobody is named: the office did it.' },
            { s: 'Payment **must be made** by the date shown above.', n: 'A passive after a modal: *must be* + past participle. It means *you must pay*.' },
            { s: 'You **will be notified** of the decision in writing.', n: '*Will be notified* means *we will tell you*. *In writing* means by letter or email.' },
            { s: 'Applicants **are advised** to keep a copy of all documents.', n: 'A polite but firm instruction: you should keep a copy.' },
          ] },
        ],
        [
          { t: 'text', md: 'Official writing often turns a verb into a **noun phrase**. *If you do not pay* becomes *failure to pay*; *when we receive your form* becomes *on receipt of your form*. The meaning is the same, but the style is shorter and more impersonal.' },
          { t: 'table', caption: 'Everyday words and formal noun phrases', explain: ['head'], quiz: true, head: ['Everyday', 'Formal'], rows: [
            ['when we receive your form', 'on receipt of your form'],
            ['if you do not reply', 'failure to reply'],
            ['before you arrive', 'prior to your arrival'],
            ['after we have checked your documents', 'following a review of your documents'],
            ['because the office is closed', 'due to the closure of the office'],
            ['if you want to know more', 'for further information'],
          ] },
          { t: 'tip', art: 'owl', md: 'Official letters often **hedge**: they avoid sounding too certain or too direct. Look out for *it appears that*, *may*, *we are unable to* and *you may wish to*. *You may wish to contact us* is really a polite way of saying *please contact us*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What does the official sentence really mean?', items: [
            { q: '“You may wish to seek independent advice.”', o: ['We suggest that you get advice from someone outside our organisation.', 'You are not allowed to get advice from anyone else.', 'You must get advice from us before you reply.'], why: '*You may wish to* is a polite suggestion, not a rule. *Independent* advice comes from someone who does not work for the organisation.' },
            { q: '“It appears that the payment for March has not been received.”', o: ['We think you have not paid for March, but we may be wrong.', 'You paid twice in March.', 'We have received your payment for March.'], why: '*It appears that* is hedging: the writer is careful in case there is a mistake.' },
            { q: '“We are unable to process your application at this time.”', o: ['We cannot deal with your application now.', 'Your application has been accepted.', 'We have lost your application.'], why: '*We are unable to* is a formal way of saying *we can’t*. *At this time* means *now*.' },
            { q: '“Failure to respond may result in a penalty.”', o: ['If you do not reply, you might have to pay a penalty.', 'If you reply late, you will receive a refund.', 'You have failed to pay, so you must pay a penalty now.'], why: '*Failure to respond* means *if you do not reply*. *May result in* means *might lead to*.' },
            { q: '“Prior to your appointment, please complete the enclosed form.”', o: ['Fill in the form in this envelope before your appointment.', 'Fill in the form after your appointment.', 'Ask for the form when you arrive for your appointment.'], why: '*Prior to* means *before*. *Enclosed* means sent in the same envelope or attached to the same email.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the passive form of the verb in brackets.', items: [
            { q: 'Your application ___ (receive) on 3 May, and it is now with our team.', a: ['was received'], why: 'A finished action at a past time: past simple passive, *was* + past participle.' },
            { q: 'All forms must ___ (sign) before they are returned.', a: ['be signed'], why: 'After a modal verb: *be* + past participle.' },
            { q: 'Your new card ___ (send) to you within ten working days.', a: ['will be sent', '’ll be sent'], why: 'Future passive: *will be* + past participle.' },
            { q: 'Your request is currently ___ (review) by a member of our team.', a: ['being reviewed'], why: 'Present continuous passive: *is being* + past participle, for something happening now.' },
            { q: 'We regret to inform you that your appeal ___ (not / accept).', a: ['has not been accepted', 'hasn’t been accepted', 'was not accepted', 'wasn’t accepted'], why: 'Present perfect passive (*has not been accepted*) or past simple passive (*was not accepted*).' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the everyday words and the formal noun phrases.', pairs: [
            ['before you arrive', 'prior to your arrival'],
            ['when we receive it', 'on receipt'],
            ['if you do not pay', 'failure to pay'],
            ['because the office is closed', 'due to the closure of the office'],
            ['if you want to know more', 'for further information'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Requests, appeals and complaints',
      about: 'Write a formal letter or email with a clear structure and precise language.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'A good formal letter is easy to follow. The first paragraph says why you are writing. The middle gives the facts: dates, reference numbers and what happened. The last paragraph says exactly what you want the reader to do. Keep the tone polite and firm, even when you are unhappy.' },
          { t: 'table', caption: 'The parts of a formal letter', explain: ['head', 'col0'], head: ['Part', 'Useful phrases'], rows: [
            ['Reference', 'Reference number: RP/40417 / Re: your letter of 12 June'],
            ['Reason for writing', 'I am writing to request… / I am writing to appeal against… / I wish to complain about…'],
            ['Facts', 'On 4 March, I… / According to your letter, … / As you can see from the enclosed copy, …'],
            ['What you want', 'I would therefore be grateful if you could… / I would ask you to reconsider…'],
            ['Ending', 'I look forward to your reply. / Yours sincerely, / Yours faithfully,'],
          ] },
        ],
        [
          { t: 'text', md: 'Be **precise**. Write the date, not *a few weeks ago*. Describe what happened, not how you feel: *the amount charged was £40 higher than agreed* is stronger than *your price was ridiculous*. An **appeal** asks someone to change a decision, so give clear reasons and say what evidence you are sending.' },
          { t: 'examples', items: [
            { s: 'I am writing to **appeal against** the decision to refuse my parking permit.', n: 'In British English we *appeal against* a decision. In American English, *appeal the decision* is common.' },
            { s: 'The heating has not worked **since 2 November**.', n: 'A date is more precise than *for a long time*.' },
            { s: 'I would be grateful if you could **confirm in writing** that the fee has been refunded.', n: 'Say exactly what you want: here, a written confirmation.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In British English, end with *Yours sincerely* when you know the person’s name (*Dear Ms Patel*) and *Yours faithfully* when you do not (*Dear Sir or Madam*). In emails, *Kind regards* is also common and perfectly acceptable.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best sentence for a formal letter.', items: [
            { q: '', o: ['I am writing to request a copy of my tenancy agreement.', 'I want my tenancy agreement, so send it.', 'Hi, can I get that tenancy thing again?'], why: '*I am writing to request…* states the reason for writing politely and clearly.' },
            { q: '', o: ['The amount charged was £35 higher than the price agreed on 10 May.', 'You charged me way too much, as usual.', 'The price was wrong and I am extremely angry.'], why: 'A precise fact with an amount and a date is the strongest argument.' },
            { q: '', o: ['I would therefore be grateful if you could reconsider your decision.', 'Change your decision immediately.', 'You have to change your decision or else.'], why: '*I would be grateful if you could…* is a polite but firm request.' },
            { q: '', o: ['Please find enclosed a copy of my payslip.', 'Here’s my payslip, have a look.', 'I put my payslip in too.'], why: '*Please find enclosed* (or *attached* in an email) is the standard phrase for documents you send.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the phrase that is too informal for an official letter.', items: [
            { s: 'I am writing to complain about the repairs, which are [a total joke].', why: 'Describe the facts: *which have still not been completed*.' },
            { s: 'As you can see from the enclosed receipt, I paid the fee [ages ago].', why: 'Give the exact date: *on 14 February*.' },
            { s: 'I would be grateful if you could [sort it out ASAP].', why: 'The formal version is *resolve this matter as soon as possible*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with one word.', items: [
            { q: 'I am writing to ___ against the decision to close my account.', a: ['appeal'], why: 'We *appeal against* a decision when we ask for it to be changed.' },
            { q: 'You started with *Dear Sir or Madam*, so you end with *Yours ___*.', a: ['faithfully'], why: '*Yours faithfully* when you do not know the name.' },
            { q: 'I would therefore be ___ if you could refund the fee.', a: ['grateful'], why: '*I would be grateful if you could…* is the standard formal request.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'I am writing to appeal against your decision.', why: 'The first sentence says why you are writing.' },
            { a: 'I would ask you to reconsider this decision.', why: '*I would ask you to* + base form: a firm but polite request.' },
            { a: 'I would be grateful for a prompt reply.', why: '*Be grateful for* + noun. *Prompt* means quick.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A letter from the council',
      about: 'Read an official letter about a parking permit and a model reply.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'reading', title: 'Westbrook Borough Council, Parking Services', md: 'Reference: RP/40417\n\n15 September 2026\n\nDear Ms Okafor,\n\n**Application for a resident parking permit**\n\nThank you for your application, which was received on 2 September. Unfortunately, we are unable to process it at this time, as the proof of address provided does not meet our requirements.\n\nApplicants are required to provide a document that shows their name and an address in the permit zone, dated within the last three months. The tenancy agreement you sent appears to show a previous address. Acceptable documents include a council tax bill, a utility bill or a bank statement.\n\nPlease send a copy of one of these documents within 28 days of the date of this letter, quoting the reference number above. Failure to provide the document within this period may result in your application being closed, in which case a new application would be required.\n\nPlease note that a permit cannot be issued until your application has been approved. Vehicles parked in the zone without a valid permit may receive a penalty charge.\n\nShould you have any questions, you may wish to read the guidance on our website or contact us by email.\n\nYours sincerely,\n\nDaniel Hartley\nParking Services Officer' },
        ],
        [
          { t: 'reading', title: 'Amara’s reply', md: 'Reference: RP/40417\n\nDear Mr Hartley,\n\n**Application for a resident parking permit**\n\nThank you for your letter of 15 September regarding my application.\n\nThe tenancy agreement I sent is for my current flat at 14 Linden Road, which I moved into on 1 August. I believe the confusion arose because my previous address is given on the first page as my contact address at the time of signing.\n\nPlease find enclosed a copy of my bank statement dated 5 September, which shows my name and my current address. I would be grateful if you could add it to my application and process it as soon as possible.\n\nI would also like to ask whether a temporary permit could be issued while my application is being reviewed. I need my car to travel to work, and there is no other parking available near my home.\n\nIf you require any further information, please do not hesitate to contact me by email.\n\nYours sincerely,\n\nAmara Okafor' },
          { t: 'tip', art: 'owl', md: '*Should you have any questions* is a formal way of saying *if you have any questions*. You will often see it at the end of official letters.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read both letters. True, false or not given?', items: [
            { q: 'The council has refused Amara’s application for good.', a: 'f', why: 'It is *unable to process it at this time*: the application is still open if she sends a document.' },
            { q: 'A council tax bill would be accepted as proof of address.', a: 't', why: 'It is in the list of *acceptable documents*.' },
            { q: 'Amara can park in the zone while she waits for the decision.', a: 'f', why: '*A permit cannot be issued until your application has been approved*, and cars without one may receive a penalty charge.' },
            { q: 'Amara moved to Linden Road at the beginning of August.', a: 't', why: '*Which I moved into on 1 August.*' },
            { q: 'Amara’s employer has a car park for staff.', a: 'ng', why: 'She says there is no parking near her home, but nothing about her workplace.' },
            { q: 'Amara asks for something that the council did not offer in its letter.', a: 't', why: 'She asks whether a *temporary permit* could be issued.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language of the letters.', items: [
            { q: '“Applicants are required to provide a document…” What does this mean?', o: ['People who apply must send a document.', 'People who apply may send a document if they wish.', 'The council will send people a document.'], why: '*Be required to* means *must*. The passive keeps the rule impersonal.' },
            { q: 'Why does the officer write “appears to show” and not “shows”?', o: ['He is being careful, because he may be wrong.', 'He is sure that Amara made a mistake.', 'He did not read the document.'], why: 'This is hedging. In fact, Amara explains that he was wrong.' },
            { q: 'Amara writes “I believe the confusion arose because…”. Why?', o: ['She explains the problem politely without blaming the officer.', 'She is not sure where she lives.', 'She wants to complain about the officer.'], why: 'A neutral explanation keeps the tone polite and the facts clear.' },
            { q: 'Which phrase introduces the document Amara sends?', o: ['Please find enclosed', 'Thank you for your letter', 'Should you have any questions'], why: '*Please find enclosed* introduces a document sent with a letter.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the two noun phrases that replace a verb.', items: [
            { s: '[Failure to provide] the document may result in the [closure] of your application.', why: '*Failure to provide* means *if you do not provide*; *the closure of your application* means *we will close it*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'Your documents ___ to you next week.', o: ['will be returned', 'will return', 'are returning'], why: 'The documents do not return themselves: future passive.' },
      { q: '“We are unable to accept late payments.” This means: ___', o: ['We cannot accept late payments.', 'We do not want to accept late payments, but we will.', 'We may accept late payments.'], why: '*We are unable to* means *we can’t*.' },
      { q: '___ your arrival, please report to reception.', o: ['On', 'Prior', 'Failure'], why: '*On your arrival* means *when you arrive*.' },
      { q: 'You know the name of the person. You end the letter: ___', o: ['Yours sincerely,', 'Yours faithfully,', 'Yours truly faithfully,'], why: '*Dear Mr Lee* … *Yours sincerely*.' },
      { q: 'Which sentence is most precise?', o: ['The parcel was due on 3 June and has not arrived.', 'The parcel is really, really late.', 'I have been waiting for ages.'], why: 'A date and a fact are stronger than feelings.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Your application is ___ (process) at the moment.', a: ['being processed'], why: 'Present continuous passive: *is being* + past participle.' },
      { q: '___ to reply may result in your account being closed.', a: ['Failure'], why: '*Failure to reply* means *if you do not reply*.' },
      { q: 'Please find ___ a copy of my passport.', a: ['enclosed', 'attached'], why: '*Please find enclosed / attached*.' },
      { q: 'I am writing to ___ about the service I received on 3 April.', a: ['complain'], why: '*I am writing to complain about…*' },
    ] },
    { t: 'ex', kind: 'spot', h: 'Tap the hedging word or phrase.', items: [
      { s: 'It [appears that] your direct debit has been cancelled.', why: '*It appears that* makes the statement less certain.' },
      { s: 'You [may wish to] keep this letter for your records.', why: '*You may wish to* is a polite suggestion.' },
      { s: 'There [may] be a short delay in issuing your card.', why: '*May* means *it is possible*, so the statement is less direct.' },
    ] },
  ],
};
