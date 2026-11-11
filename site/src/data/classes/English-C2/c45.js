// English C2, class 45 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u10:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c45',
  focus: 'By the end every student negotiates in English that keeps options open: proposing tentatively (*We would be prepared to…*, *What we had in mind was…*), making conditional offers (*provided that*, *on condition that*, *on the understanding that*, *If you were to…, we could…*) with the present tense after the condition, rejecting without closing the door and closing by confirming terms. They use the idioms of negotiation precisely (*a sticking point*, *bottom line*, *room for manoeuvre*, *meet someone halfway*, *reach an impasse*) and follow what speakers imply in a listening task in the format of C2 Proficiency Listening Part 1.',
  tips: [
    'The rule of the class: never give without getting. Every concession a student makes in the role-play must come with a condition attached. When one slips through, stop and ask *What did you get for that?*',
    'Watch the tense after *provided that*, *as long as* and *on condition that*: present for the future (*provided that payment arrives*), not *will*. And *unless* never takes a second negative.',
    '*If you were to…* tests an idea without committing to it; *If you…* sounds like an offer. Let students hear the difference in your own role-play turns.',
    'Read the listening scripts on board page 6 aloud twice at natural speed and keep the page hidden until the answers are checked. In Part 1 the wrong options are usually things the speakers mention.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is the last thing you bargained for, and did you get a good deal?* Each student answers in two sentences. Note any conditions they used.' },
    { min: 9, title: 'Conditional offers', md: 'Show board page 1. Students choose the forms alone, then say each sentence aloud as if across the table.' },
    { min: 6, title: 'The idioms', md: 'Show board page 2. Students complete the sentences from the bank, then say which idiom describes their own warm-up story.' },
    { min: 10, title: 'Exam corner: Part 4', md: 'Show board page 3: C2 Proficiency Reading and Use of English Part 4. Six minutes alone, then check together, counting words and giving two marks per item.' },
    { min: 12, title: 'Exam corner: listening', md: 'Students read the questions on board page 4 (one minute). Read the two extracts from board page 6 aloud twice. Check, then show the script and where each wrong option was mentioned.' },
    { min: 15, title: 'Activity', md: 'Show board page 5: the role cards. Use the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Each student states the terms they agreed in one sentence beginning *So, to confirm what we have agreed…* Set the homework.' },
  ],
  board: [
    { title: 'Conditional offers', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the form that completes each offer.', items: [
        { q: 'We can include installation free of charge provided that the contract ___ signed by the end of the month.', o: ['is', 'will be', 'would be'], why: 'Present tense for the future after *provided that*.' },
        { q: 'We cannot release the goods ___ the invoice has been paid in full.', o: ['unless', 'provided', 'as long as'], why: '*Unless* = if not: no release if the invoice is not paid.' },
        { q: 'If you ___ to extend the warranty to three years, we could commit to a larger order.', o: ['were', 'would', 'had'], why: '*If you were to…* tests a hypothetical offer without committing to it.' },
        { q: 'We accept the revised fee ___ the understanding that it covers all travel costs.', o: ['on', 'in', 'under'], why: 'The fixed phrase is *on the understanding that*.' },
        { q: 'We ___ wondering whether you might be flexible on the delivery date.', o: ['were', 'are being', 'had'], why: 'The past continuous makes the request less direct.' },
        { q: 'They asked for eighteen months and we offered twelve, so we met them ___ at fifteen.', o: ['halfway', 'in the middle', 'half'], why: 'The idiom is *meet someone halfway*.' },
      ] },
    ] },
    { title: 'The idioms of negotiation', blocks: [
      { t: 'ex', kind: 'bank', h: 'Complete each sentence with a word from the bank.', extra: ['ceiling', 'deadlock'], items: [
        { q: 'Price was never the problem; the exclusivity clause was the sticking ___.', a: 'point', why: '*A sticking point*: the issue that blocks agreement.' },
        { q: 'Our bottom ___ is a two-year contract; anything shorter is not worth our while.', a: 'line', why: '*Your bottom line*: the least you will accept.' },
        { q: 'Do not reveal your limit in the first meeting, or you will have no room for ___.', a: 'manoeuvre', why: '*Room for manoeuvre*: freedom to change your position.' },
        { q: 'They drove a hard ___, but in the end both sides were satisfied.', a: 'bargain', why: '*Drive a hard bargain*: negotiate toughly.' },
        { q: 'After six hours the talks reached an ___, and the mediator sent everyone home.', a: 'impasse', why: '*Reach an impasse*: arrive at a point where no progress is possible.' },
        { q: 'Neither side would budge, so we agreed to split the ___ and settle at the midpoint.', a: 'difference', why: '*Split the difference*: agree on a figure halfway between two offers.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between three and eight words, including the word given.', items: [
        { q: 'We will only lower the price if you sign for three years.', cue: 'PROVIDED', gap: 'We will lower the price ___ for three years.', a: ['provided that you sign', 'provided you sign', 'provided that you agree to sign', 'provided you agree to sign'], why: '*Provided (that)* + present tense for the condition.' },
        { q: 'Their negotiators were extremely tough with us.', cue: 'BARGAIN', gap: 'Their negotiators ___ with us.', a: ['drove a very hard bargain', 'drove an extremely hard bargain', 'drove a hard bargain'], why: '*Drive a hard bargain*; *very* or *extremely* keeps the strength of the original.' },
        { q: 'If you paid in advance, we could offer you a discount.', cue: 'WERE', gap: '___ in advance, we could offer you a discount.', a: ['Were you to pay', 'Were you to make payment', 'Were you to pay us'], why: 'An inverted conditional: *Were + subject + to*-infinitive replaces *If you paid*.' },
        { q: 'The talks failed because neither side would give way on price.', cue: 'IMPASSE', gap: 'The talks ___ neither side would give way on price.', a: ['reached an impasse because', 'reached an impasse as', 'reached an impasse since', 'came to an impasse because', 'came to an impasse as'], why: '*Reach an impasse*: no further progress was possible.' },
        { q: 'We agree to the fee, but we are assuming that it includes maintenance.', cue: 'UNDERSTANDING', gap: 'We agree to the fee ___ maintenance.', a: ['on the understanding that it includes', 'on the understanding that it covers', 'on the understanding it includes'], why: '*On the understanding that* turns the assumption into a condition of the agreement.' },
        { q: 'The only issue blocking an agreement is the delivery date.', cue: 'STICKING', gap: 'The delivery date is ___.', a: ['the only sticking point', 'the only remaining sticking point', 'the one remaining sticking point'], why: '*A sticking point* is an issue that blocks agreement; *only* keeps the meaning of the original.' },
      ] },
    ] },
    { title: 'Exam corner: Listening Part 1', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Listening Part 1, shortened: two extracts instead of four): you will hear two extracts. Choose the answer which fits best according to what you hear.', items: [
        { q: 'Extract one. You hear two colleagues talking after a meeting with a supplier. What does the man suggest about the supplier’s objection to the penalty clause?', o: ['It was largely for show.', 'It nearly brought the talks to an end.', 'It was the supplier’s most important demand.'], why: '*The penalty clause was just something to be seen to resist.* The woman feared they would walk out; the man says they never would.' },
        { q: 'Extract one. What is the man’s main criticism of how they negotiated?', o: ['They made a concession at the wrong moment.', 'They gave the supplier too much in total.', 'They were too firm about the penalty clause.'], why: '*Not too much. Too soon.* The fixed price should have been held back until the end.' },
        { q: 'Extract two. You hear a negotiation trainer on a radio programme. According to her, what do inexperienced negotiators often do?', o: ['They offer something nobody has asked for.', 'They refuse to talk about price at all.', 'They stay silent for too long.'], why: '*Rushes in with a concession nobody asked for.* Silence is mentioned, but as the thing they cannot bear.' },
        { q: 'Extract two. What is her attitude to training people in negotiation?', o: ['She doubts that it can give people the courage they need.', 'She believes it can correct every weakness.', 'She thinks preparation matters less than people assume.'], why: '*You can teach the habit of preparing. Whether anyone can teach nerve is another question.*' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Listening Part 1** the questions test what speakers **mean**, **feel** or **imply**. Expect each extract to mention the ideas in the wrong options too: the walk-out, the penalty clause, the silence. Ask what the speaker finally says about them.' },
    ] },
    { title: 'Role cards', blocks: [
      { t: 'text', md: '**The situation.** A professional association is holding a two-day conference and needs eighty bedrooms and a meeting room for two hundred people at a city hotel.\n\n**Card A: the conference organiser.** Your budget is tight and the association pays late, usually at sixty days. You need free cancellation for up to twenty rooms, because numbers are uncertain until a month before. You would like breakfast included. Your bottom line: the total price must not rise above this year’s.\n\n**Card B: the hotel sales manager.** The dates fall in a quiet week, so you want the booking, but you need payment within thirty days. Free cancellation for twenty rooms is a real risk to you. Breakfast costs you little. You would accept a lower room rate if the association books for two years.' },
      { t: 'tip', art: 'owl', md: 'Open with a tentative proposal, make at least two conditional offers, reject one point without closing the door (*I’m afraid that would be difficult for us, but…*) and close by confirming the terms.' },
    ] },
    { title: 'Listening scripts (teacher)', blocks: [
      { t: 'dialogue', title: 'Extract one', lines: [
        { who: 'Ruth', s: 'Well, that went better than I’d feared. I honestly thought they’d walk out when we brought up the penalty clause.' },
        { who: 'Tom', s: 'They were never going to walk out. Did you see their faces when we offered to fix the price for two years? That’s what they came for. The penalty clause was just something to be seen to resist.' },
        { who: 'Ruth', s: 'So you think we gave away too much?' },
        { who: 'Tom', s: 'Not too much. Too soon. If we’d held the fixed price back until the end, we could have had the faster delivery as well. Next time, let’s agree what we’re keeping in reserve before we sit down.' },
        { who: 'Ruth', s: 'Fair enough. Though I’d rather leave with a deal than with a clever strategy and nothing signed.' },
      ] },
      { t: 'dialogue', title: 'Extract two', lines: [
        { who: 'Presenter', s: 'You say most people negotiate badly because they’re too nice. That’s surprising.' },
        { who: 'Trainer', s: 'Not too nice, exactly. Too eager to fill the silence. Someone names a price, there’s a pause, and the inexperienced negotiator rushes in with a concession nobody asked for. The pause was doing the work for them. People also confuse being firm with being rigid. Firmness is knowing your bottom line; rigidity is refusing to look at anything above it.' },
        { who: 'Presenter', s: 'And can you teach that?' },
        { who: 'Trainer', s: 'You can teach the habit of preparing: knowing your limits, and what you can give away cheaply. Whether anyone can teach nerve is another question.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Across the table', md: 'You play the hotel sales manager (card B on board page 5); the student is the conference organiser (card A). Keep your priorities hidden and make the student work for each concession: accept nothing without a condition, and reject at least one offer firmly but politely. Give the negotiation about eight minutes, then stop and go through it: which offers were conditional, where the student gave something away for nothing, and whether the close confirmed every term. If time allows, swap roles for two minutes on the payment terms only.' },
    small: { title: 'Two tables', md: 'Pairs take cards A and B from board page 5 and negotiate for seven minutes (with an odd number, one student is an observer who keeps a list of every concession and what was given in return). Each pair then reports its deal to the group in one sentence beginning *So, to confirm what we agreed…* The group compares the deals: who held their bottom line, who got the most for the least, and which conditional offer was the most effective.' },
  },
  homework: { book: 'u10:p1', md: 'Finish lesson 1 of unit 10 if needed, then do lesson 2 (Shall we make a start?). Write a short email of about 120 words to the hotel from today’s role-play, confirming the terms you agreed: use *on the understanding that* once and *provided that* once, with the right tense.' },
};
