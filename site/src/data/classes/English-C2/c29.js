// English C2, class 29 (docs/LESSONS_PLAN.md, L6). Review of units 5 and 6. Draft for the owner's review.
export const LESSON = {
  id: 'c29',
  focus: 'By the end every student uses the language of units 5 and 6 with more control and more choice: the vocabulary, spelling and grammar of the main varieties of English kept consistent in one text; informal words, understatement and the limits of slang; legal English read and rewritten in plain English; the mandative and formulaic subjunctive; absolute and non-finite clauses; and modals with attitude (*will* for insistence, *may well* and *might as well*, *dare* and *need*). Most of the class is talk and repair, and it ends with a full task in the format of C2 Proficiency Reading and Use of English Part 4.',
  tips: [
    'Collect four or five real mistakes from classes 21 to 28 before this class and replace items on board page 2 with them. At C2 a student’s own sentence teaches far more than a made-up one.',
    'Mix the units on purpose. A tenancy clause rewritten for a friend in Sydney uses legal English, plain English, the subjunctive and a variety choice in one go; ask for all of them in the activity.',
    'Varieties are about consistency and audience, not right and wrong. When a student writes *gotten* or *the team are*, ask *Who is the reader?* before you call it a mistake.',
    'In Part 4, two marks per item: one for each half. Count the words with students (contractions count as two) and accept any answer that keeps the meaning and the key word unchanged.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is the strangest piece of English you have met this month: a word, a sign, a contract, a film line?* Each student answers in two or three sentences; note one variety point and one grammar point on the board.' },
    { min: 12, title: 'Units 5 and 6 together', md: 'Show board page 1. Students choose alone, then each explains one choice, naming the unit it comes from.' },
    { min: 10, title: 'Fix it and read the tone', md: 'Show board page 2, then board page 3. Students fix the mistakes in pairs (or with you), then say what each speaker most probably means.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 4: a full Part 4 task, six items, in the format of C2 Proficiency Reading and Use of English. Allow eight minutes, then check together and score out of 12.' },
    { min: 5, title: 'Close', md: 'Each student names one point from unit 5 and one from unit 6 that they now use with confidence, and one to practise. Set the homework.' },
  ],
  board: [
    { title: 'Units 5 and 6 together', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
        { q: 'The agreement states that the tenant ___ keep the garden in good order.', o: ['shall', 'will be', 'dare'], why: 'Formal *shall* for an obligation in a contract (unit 6), in the register of legal English (unit 5).' },
        { q: '___ any other clause, either party may end this agreement with one month’s notice.', o: ['Notwithstanding', 'Notwithstanding of', 'Despite of'], why: '*Notwithstanding* + noun, with no *of*: despite (unit 5).' },
        { q: 'The board recommended that the report ___ published before the election.', o: ['be', 'is', 'was'], why: 'The passive mandative subjunctive: *be* + past participle, with no backshift (unit 6).' },
        { q: '___ permitting, the ceremony will be held in the garden.', o: ['Weather', 'The weather is', 'With weather'], why: 'The fixed absolute *weather permitting* (unit 6).' },
        { q: 'I’m absolutely ___: we lost the final in the last minute.', o: ['gutted', 'chuffed', 'skint'], why: 'British informal *gutted*: very disappointed (unit 5).' },
        { q: 'He ___ leave his bike in the hall, however often I ask him not to!', o: ['will', 'shall', 'dare'], why: 'Stressed *will* for annoying insistence (unit 6).' },
        { q: '___ the lights off and the curtains drawn, the house looked empty.', o: ['With', 'Having', 'Being'], why: '*With* + object + participle or adjective for the circumstances (unit 6).' },
        { q: 'In plain English, *in the event that the goods are damaged* becomes *___ the goods are damaged*.', o: ['if', 'whereas', 'whereby'], why: '*In the event that* = *if* (unit 5).' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'From a report in British English: the council [have gotten] much stricter about parking.', a: ['has got', 'have got', 'has become', 'have become'], why: 'British English does not use *gotten* (unit 5). *Has* or *have* are both possible with *council* in British English; choose one and keep it.' },
        { s: 'It is essential that the patient [doesn’t eat] anything before the operation.', a: ['not eat', 'should not eat', 'shouldn’t eat'], why: 'The negative subjunctive is *not* + base form (unit 6).' },
        { s: 'Having missed the last bus, [a taxi took us home].', a: ['we took a taxi home', 'we got a taxi home', 'we went home by taxi'], why: 'A dangling participle: the understood subject of *having missed* must be the subject of the main clause (unit 6).' },
        { s: 'You [needn’t to] book in advance; there are plenty of seats.', a: ['needn’t', 'need not', 'don’t need to', 'do not need to'], why: 'Modal *need* takes no *to* (unit 6).' },
        { s: 'The lift is out of order, so we [may well] take the stairs.', a: ['might as well', 'may as well'], why: '*May well* = quite likely; *might as well* = there is no better option (unit 6).' },
        { s: 'The deposit shall be paid [prior of] the start of the tenancy.', a: ['prior to', 'before'], why: '*Prior to*, or in plain English simply *before* (unit 5).' },
      ] },
    ] },
    { title: 'What do they mean?', blocks: [
      { t: 'ex', kind: 'choice', h: 'What does the speaker most probably mean?', items: [
        { q: 'A British colleague says of your plan: “It’s certainly a brave proposal.”', o: ['She thinks it is risky and possibly unwise.', 'She admires your courage without reservation.', 'She thinks it is too cautious.'], why: 'British understatement: *brave* often softens *risky* (unit 5).' },
        { q: 'An Indian colleague writes: “The review meeting has been preponed to Tuesday.”', o: ['It has been moved earlier, to Tuesday.', 'It has been moved later, to Tuesday.', 'It has been cancelled.'], why: 'Indian English *prepone* = bring forward (unit 5).' },
        { q: 'An Irish friend says: “Come out with us on Friday. The craic will be mighty.”', o: ['It will be great fun and good company.', 'There will be trouble.', 'The place will be noisy and crowded.'], why: 'Irish *the craic*: fun and good company (unit 5).' },
        { q: '“The minister insists the scheme is working.” “Well, she would say that, wouldn’t she?”', o: ['The speaker thinks the minister’s claim is predictable and self-serving.', 'The speaker is quoting the minister’s exact words.', 'The speaker is asking for the minister’s opinion.'], why: 'Stressed *would* for a predictable remark, with irritation (unit 6).' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. Do not change the word given. Use between three and eight words, including the word given.', items: [
        { q: '“You really must submit the forms by noon,” the manager told us.', cue: 'INSISTED', gap: 'The manager ___ the forms by noon.', a: ['insisted that we submit', 'insisted that we should submit', 'insisted we submit', 'insisted that we hand in', 'insisted on our submitting', 'insisted on us submitting'], why: '*Insist that* + subjunctive (or *should*): two marks, one for *insisted that*, one for *we submit*.' },
        { q: 'If the volunteers hadn’t helped, the festival would have been cancelled.', cue: 'BEEN', gap: '___ the volunteers, the festival would have been cancelled.', a: ['Had it not been for', 'If it had not been for', 'If it hadn’t been for', 'Had it not been for the help of'], why: 'The inverted third conditional with *it*: *Had it not been for* + noun.' },
        { q: 'There is no better option than to wait for the next train.', cue: 'AS', gap: 'We ___ for the next train.', a: ['might as well wait', 'may as well wait', 'might just as well wait', 'may just as well wait'], why: '*Might as well* + infinitive: there is nothing better to do.' },
        { q: 'It is quite likely that the agreement will be signed this week.', cue: 'WELL', gap: 'The agreement ___ this week.', a: ['may well be signed', 'might well be signed', 'could well be signed'], why: '*May well* = quite likely, followed by a passive infinitive.' },
        { q: 'I don’t want to interfere, but I think you are making a mistake.', cue: 'FAR', gap: '___ interfere, but I think you are making a mistake.', a: ['Far be it from me to'], why: 'The formulaic subjunctive *Far be it from me to* + infinitive.' },
        { q: 'When the negotiations had finished, the delegates flew home.', cue: 'OVER', gap: '___, the delegates flew home.', a: ['The negotiations over', 'With the negotiations over', 'The negotiations being over', 'With the negotiations being over'], why: 'An absolute construction: its own subject and no finite verb.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 4** at C2, one item often tests two things at once: a fixed phrase and a change of structure. When the key word looks small (*AS*, *FAR*, *OVER*), it usually belongs to a fixed phrase from units 5 and 6. Write the phrase first, then build the rest of the gap around it.' },
    ] },
  ],
  activities: {
    one: { title: 'Plain English for a friend abroad', md: 'Give the student this clause and play a friend in Sydney who has just signed it: *In the event that the Tenant shall wish to terminate this agreement prior to the expiry of the term, the Tenant shall give not less than two months’ notice in writing, notwithstanding clause 4 hereof.* The student explains it in plain, international English, then gives you advice using the subjunctive (*I’d suggest you not sign anything else until…*), a *with*-clause and *might as well*. Swap roles for a second clause you write together. Note five sentences and upgrade them at the end.' },
    small: { title: 'Translate the clause', md: 'Pairs or threes each get a short formal clause in the chat (a gym membership, a phone contract, a tenancy). They rewrite it in plain English in four minutes, then explain it aloud to the group as if to a friend from another English-speaking country, using at least one subjunctive, one absolute or *with*-clause and one modal with attitude. The others check that the legal effect is the same and vote for the clearest version.' },
  },
  homework: { book: 'u5 u6 u7:p1', md: 'Do the unit 5 test and the unit 6 test in the book. Then rewrite a real clause from a contract or terms and conditions you have signed in plain English (about 80 words), and write one paragraph of about 120 words giving advice on it with the subjunctive and an absolute construction. Finally do lesson 1 of unit 7 (Trust, feeling and reason).' },
};
