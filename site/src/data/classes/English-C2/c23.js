// English C2, class 23 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u5:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c23',
  focus: 'By the end every student reads the vocabulary and structures of legal and formal English (*hereinafter, notwithstanding, therein, whereby, whereas, pursuant to, prior to, in the event that, forthwith*, and *shall* for a duty) and rewrites a clause in plain English that keeps every legal effect: who must do what, and when. The exam goal: move between formal and neutral structures in the format of C2 Proficiency Reading and Use of English Part 4.',
  tips: [
    'Teach the patterns, not a list: *here-* points to this document, *there-* to the thing just mentioned, *where-* means *which*. Students then work out words they have never seen.',
    'The plain version must keep the meaning exactly. The commonest error is turning a duty (*shall*) into a permission (*may*) or losing a time limit. Ask *Who must do what, by when?* for every clause.',
    'Plain English is not childish English. Praise versions that are short and clear, and reject versions that are short because something was left out.',
    'Legal register is useful in Part 4 because formal structures (*should either party fail*, *under no obligation to*, *prior to*) are typical key-word answers.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *When did you last read the terms and conditions of something before agreeing to them? What made you stop reading?*' },
    { min: 10, title: 'The words of the law', md: 'Show board page 1. Students choose the formal word for each clause and say what it means in plain English.' },
    { min: 12, title: 'Plain English', md: 'Show board page 2, then page 3. Students choose the plain version that keeps the meaning, then rewrite three clauses themselves and compare versions.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 4: C2 Proficiency Reading and Use of English Part 4. Eight minutes alone. Check together, counting words and marking each answer out of two.' },
    { min: 5, title: 'Close', md: 'Each student says one formal word they will now recognise and its plain equivalent. Set the homework.' },
  ],
  board: [
    { title: 'The words of the law', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the formal word that completes each clause.', items: [
        { q: '___ any other clause in this agreement, the Landlord may enter the Property in an emergency.', o: ['Notwithstanding', 'Whereas', 'Thereof'], why: '*Notwithstanding*: despite, even if another clause says otherwise.' },
        { q: 'The Tenant shall keep the garden and the plants ___ in good condition.', o: ['therein', 'hereby', 'whereby'], why: '*Therein*: in it, in the thing just mentioned.' },
        { q: 'Greenway Ltd, ___ “the Supplier”, agrees to deliver the goods monthly.', o: ['hereinafter', 'notwithstanding', 'thereafter'], why: '*Hereinafter*: from now on in this document.' },
        { q: 'All refunds will be made ___ to the terms set out in clause 4.', o: ['pursuant', 'prior', 'subsequent'], why: '*Pursuant to*: under, in line with.' },
        { q: '___ the parties wish to work together on the project, they agree as follows.', o: ['Whereas', 'Whereby', 'Wherein'], why: 'At the start of a contract, *whereas* gives the background: because.' },
        { q: 'The Employee shall return all company property ___ upon leaving.', o: ['forthwith', 'hereto', 'aforementioned'], why: '*Forthwith*: at once.' },
      ] },
    ] },
    { title: 'Which plain version keeps the meaning?', blocks: [
      { t: 'ex', kind: 'choice', h: 'Choose the plain version that keeps the meaning of the clause exactly.', items: [
        { q: 'The Customer may cancel the order within fourteen days of delivery.', o: ['You can cancel your order up to 14 days after it arrives.', 'You must cancel your order within 14 days of delivery.', 'You can cancel your order up to 14 days before it arrives.'], why: '*May* is a permission, not a duty, and the period starts at delivery.' },
        { q: 'The Tenant shall not keep animals at the Property without the prior written consent of the Landlord.', o: ['You must not keep pets unless we have first agreed in writing.', 'You may keep pets if you tell us.', 'You must tell us in writing after you get a pet.'], why: '*Shall not* is a prohibition, and the consent must be written and come first.' },
        { q: 'Subsequent to the expiry of the warranty, repairs shall be charged at the standard rate.', o: ['After the warranty ends, you will pay our normal price for repairs.', 'Before the warranty ends, repairs cost our normal price.', 'Repairs are free once the warranty has ended.'], why: '*Subsequent to* = after; *the standard rate* = the normal price.' },
      ] },
    ] },
    { title: 'Rewrite it plainly', blocks: [
      { t: 'ex', kind: 'transform', h: 'Rewrite each clause in plain English, starting with the words given. Keep every legal effect.', items: [
        { q: 'In the event that the Member fails to attend three consecutive meetings, membership shall be terminated forthwith.', cue: 'If you miss', a: ['If you miss three meetings in a row, your membership will end at once.', 'If you miss three meetings in a row, your membership will end immediately.', 'If you miss three meetings in a row, we will end your membership at once.', 'If you miss three meetings in a row, we will end your membership immediately.'], why: '*In the event that* = if; *consecutive* = in a row; *forthwith* = at once.' },
        { q: 'Prior to the commencement of works, the Contractor shall obtain all necessary permits.', cue: 'Before work starts', a: ['Before work starts, the contractor must get all the permits needed.', 'Before work starts, the contractor must get all necessary permits.', 'Before work starts, the contractor must get all the necessary permits.', 'Before work starts, the contractor must obtain all necessary permits.'], why: '*Shall* for a duty becomes *must*; *prior to the commencement of* becomes *before… starts*.' },
        { q: 'Notwithstanding the foregoing, the Company reserves the right to amend the price.', cue: 'Despite', a: ['Despite what is written above, the company may change the price.', 'Despite what is written above, we may change the price.', 'Despite this, the company may change the price.', 'Despite this, we may change the price.'], why: '*The foregoing* = what has just been said; *reserves the right to* = may.' },
      ] },
      { t: 'tip', md: 'To simplify a clause, ask **who must do what, and when**. Make that person the subject, use *must* for a duty and *may* for a permission, and keep every number, deadline and condition.' },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between three and eight words, including the word given.', items: [
        { q: 'Despite the delay, the work will be completed on time.', cue: 'NOTWITHSTANDING', gap: 'The work will be completed on time, ___.', a: ['notwithstanding the delay', 'the delay notwithstanding'], why: '*Notwithstanding* + noun, with no *of*; it can also follow the noun.' },
        { q: 'If the goods arrive damaged, the customer must inform the company at once.', cue: 'EVENT', gap: '___ damaged, the customer must inform the company at once.', a: ['In the event that the goods arrive', 'In the event of the goods arriving', 'In the event that the goods are'], why: '*In the event that* + clause, or *in the event of* + noun or -ing.' },
        { q: 'Tenants must give notice before they leave the property.', cue: 'PRIOR', gap: 'Tenants must give notice ___ the property.', a: ['prior to leaving', 'prior to vacating', 'prior to moving out of'], why: '*Prior to* + -ing: *to* is a preposition here.' },
        { q: 'Under this agreement, staff may work from home on Fridays.', cue: 'WHEREBY', gap: 'This is an agreement ___ from home on Fridays.', a: ['whereby staff may work', 'whereby staff can work', 'whereby staff are allowed to work', 'whereby staff are permitted to work'], why: '*Whereby* = by which, under which.' },
        { q: 'You do not have to pay a deposit.', cue: 'OBLIGATION', gap: 'You are ___ a deposit.', a: ['under no obligation to pay'], why: 'The fixed formal phrase *be under no obligation to* + infinitive.' },
        { q: 'The contract ends automatically if either party fails to pay.', cue: 'SHOULD', gap: 'The contract ends automatically ___ to pay.', a: ['should either party fail'], why: 'An inverted conditional: *should* + subject + bare infinitive replaces *if… fails*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Method for **Part 4**: the key word often forces a formal structure. *SHOULD* at the start of a condition means inversion; *PRIOR* and *EVENT* bring a preposition with them. Write the answer, count three to eight words, and read the whole sentence to check that no condition or deadline has been lost.' },
    ] },
  ],
  activities: {
    one: { title: 'Plain English editor', md: 'Ask the student about a contract or set of rules they have agreed to (a phone plan, a gym, a lease, a work policy). Together, write one clause from it in formal legal English on the board, then the student rewrites it in plain English. Test the plain version with questions: *Who must do it? By when? What happens if not?* If any answer is missing, the student revises it.' },
    small: { title: 'Clause relay', md: 'Each student writes one short rule for an imaginary shared flat or office in the chat, in plain English (*You must clean the kitchen after you use it.*). The next student rewrites it as a formal clause with at least one word from today (*The Occupant shall, forthwith upon use thereof…*). A third student turns it back into plain English, and the group checks that nothing was gained or lost on the way.' },
  },
  homework: { book: 'u5:p3', md: 'Finish lesson 3 of unit 5 if needed, then do lesson 4 (Whose English is it?). Find the terms and conditions of a service you use, choose a paragraph of about 80 words, and rewrite it in plain English without losing any duty, permission, deadline or condition.' },
};
