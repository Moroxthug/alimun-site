// English C2, class 43 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u9:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c43',
  focus: 'By the end every student disagrees at C2 in a live discussion: challenging the point rather than the person (*I’m not sure the evidence bears that out*, *That rather misses the point*), conceding and turning (*I’ll grant you that. Even so…*), holding their ground calmly (*I’m afraid I’m not persuaded*) and moving towards agreement (*Perhaps we’re not so far apart*). The speaking goal: a four-minute collaborative task in the format of C2 Proficiency Speaking Part 2 in which the student explores, disagrees with a reason and reaches a decision in the last minute.',
  tips: [
    'Teach the pattern before the phrases: a short concession, then a turn. A student who only concedes gives up their position; one who only challenges sounds combative. Ask for both in one turn.',
    'Tone is the C2 difference. *With the greatest respect* announces strong disagreement and *I hear what you’re saying* usually means *I am not convinced*. Say each one aloud with neutral and with pointed intonation so students hear the change.',
    'Picking up the partner’s word is the quickest way to sound responsive: *Fair compared with what?* Model it twice in the warm-up, then listen for it in the activity.',
    'In Speaking Part 2 the examiner rewards interaction, not winning. Stop any student who decides in the first thirty seconds or who agrees with everything to be polite.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Make a deliberately one-sided statement: *Online reviews have made restaurants better everywhere.* Each student answers in one sentence that concedes something and then turns. Write the best concession and the best turn on the board.' },
    { min: 10, title: 'The moves', md: 'Show board page 1. Students sort the remarks alone, then say which ones they would use with a senior colleague and which with a friend.' },
    { min: 8, title: 'Tone and mistakes', md: 'Show board page 2. Students fix the phrases and choose the reply that keeps the discussion going. Ask why the wrong replies would cost marks in the exam.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: C2 Proficiency Reading and Use of English Part 1. Six minutes alone, then check together and ask which words around each gap decide the answer.' },
    { min: 17, title: 'Activity', md: 'Show board page 4: the Speaking Part 2 task. Use the activity for your class size below.' },
    { min: 6, title: 'Feedback and close', md: 'Give each student one phrase they used well and one move they avoided. Each student ends with one sentence that moves towards agreement on the warm-up statement. Set the homework.' },
  ],
  board: [
    { title: 'The moves in a disagreement', blocks: [
      { t: 'ex', kind: 'sort', h: 'What does each remark do in a disagreement?', groups: ['Challenging', 'Conceding', 'Holding your ground', 'Moving towards agreement'], explain: ['groups'], items: [
        { s: 'Popular with whom, exactly?', g: 0, why: 'Picks up the partner’s word and questions it.' },
        { s: 'I’m not convinced the figures support quite such a strong conclusion.', g: 0, why: 'Challenges the evidence, not the person.' },
        { s: 'You may well be right about the cost.', g: 1, why: 'Admits part of the other point.' },
        { s: 'That’s a fair point, and I hadn’t considered it.', g: 1, why: 'A generous concession that shows listening.' },
        { s: 'All the same, I’d still say the risk is too high.', g: 2, why: '*All the same* keeps the position after a concession.' },
        { s: 'I’m afraid that doesn’t change my view.', g: 2, why: 'Calm and firm: no apology for the view itself.' },
        { s: 'So we both accept that something has to change; it’s the how we disagree on.', g: 3, why: 'Narrows the disagreement to what is really at stake.' },
        { s: 'Could we at least agree that the current system isn’t working?', g: 3, why: 'Looks for common ground before the decision.' },
      ] },
    ] },
    { title: 'Tone and mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake in each phrase.', items: [
        { s: 'With the [biggest] respect, I think the figures tell a different story.', a: ['greatest', 'utmost'], why: 'The fixed phrase is *with the greatest respect* (or *with the utmost respect*).' },
        { s: 'There’s something [on] what you say about the costs.', a: ['in'], why: '*There’s something in that*: it is partly true.' },
        { s: 'I’m afraid I’m not [persuading].', a: ['persuaded', 'convinced'], why: 'The speaker is the one not persuaded: a past participle.' },
        { s: 'I see where you’re [going from], but I can’t accept the conclusion.', a: ['coming from'], why: 'The idiom is *I see where you’re coming from*: I understand your reasons.' },
      ] },
      { t: 'ex', kind: 'choice', h: 'Choose the reply that keeps the discussion going and holds your position.', items: [
        { q: 'Your partner says: “Referendums are the only truly democratic way to decide.” You say…', o: ['I take your point about legitimacy, but I’m not sure a yes-or-no question suits something this complicated.', 'No, that’s simply wrong.', 'Yes, you’re right. Let’s choose that one.'], why: 'Concede the strongest part, then turn with a reason.' },
        { q: 'Your partner gives a good reason against your view. You say…', o: ['I’ll grant you that. Even so, I’d stand by what I said, because…', 'OK, then I agree with you.', 'That’s not relevant.'], why: 'A concession followed by a turn: you stay in the discussion and keep your view.' },
        { q: 'Your partner exaggerates: “Experts never listen to ordinary people.” You say…', o: ['Never? I’m not sure I’d go quite that far.', 'You are exaggerating.', 'I think experts are good.'], why: 'Picks up the partner’s word and disagrees with understatement.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 1', blocks: [
      { t: 'text', md: '**The art of disagreeing well** (a shortened text: six gaps instead of eight)\n\nFew skills are as undervalued as the ability to disagree well. Yet disagreement, (1) … handled, is one of the most productive things a team can do. The trick is to take (2) … with the idea rather than the person: a colleague who feels personally attacked will simply dig in their (3) … . Conceding a minor point costs little and often (4) … dividends later. The most persuasive speakers are those who are seen to (5) … the other side’s arguments on their merits. And a reputation for fairness, (6) … won, is easily lost.' },
      { t: 'ex', kind: 'select', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 1): choose the word that best fits each gap.', items: [
        { q: '(1) Yet disagreement, ___ handled, is one of the most productive things a team can do.', o: ['properly', 'rightly', 'squarely', 'fitly'], why: '*Properly handled* = handled in the right way. *Rightly* means *justifiably*, and *squarely* means *directly*.' },
        { q: '(2) The trick is to take ___ with the idea rather than the person.', o: ['issue', 'exception', 'offence', 'objection'], why: '*Take issue with*: disagree with. *Take exception* and *take offence* are followed by *to* and *at*.' },
        { q: '(3) A colleague who feels personally attacked will simply dig in their ___.', o: ['heels', 'feet', 'toes', 'boots'], why: '*Dig in your heels*: refuse stubbornly to change your mind.' },
        { q: '(4) Conceding a minor point costs little and often ___ dividends later.', o: ['pays', 'yields', 'brings', 'returns'], why: '*Pay dividends*: bring an advantage later. The idiom is fixed.' },
        { q: '(5) The most persuasive speakers are those who are seen to ___ the other side’s arguments on their merits.', o: ['weigh', 'balance', 'measure', 'scale'], why: '*Weigh an argument (on its merits)*: consider it carefully and fairly.' },
        { q: '(6) And a reputation for fairness, ___ won, is easily lost.', o: ['hard', 'hardly', 'heavily', 'harshly'], why: '*Hard won* = gained with great effort. *Hardly* means *almost not*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 1** all four options usually make sense on their own. The answer is decided by the words around the gap: a preposition after it (*take issue **with***), a noun that only one verb collocates with (*pay dividends*), or a fixed image (*dig in your heels*).' },
    ] },
    { title: 'Exam corner: Speaking Part 2', blocks: [
      { t: 'text', md: 'In the format of the C2 Proficiency exam (Speaking Part 2, the collaborative task): about four minutes with a partner. The pictures are described in words.\n\n**A**: a citizens’ assembly, with people of all ages around tables. **B**: a queue outside a polling station on referendum day. **C**: a committee of experts at a long table with microphones. **D**: a person filling in an online consultation on a laptop. **E**: a crowded protest march with banners.\n\nFirst, for about one minute: *Look at pictures A and C. How do they show different ideas of who should decide?*\n\nThen, for about three minutes: *These pictures show ways in which a city might make a difficult decision, such as whether to close a busy road to cars. Talk together about the strengths and weaknesses of each way, then decide which would produce the decision that most people accept.*' },
      { t: 'tip', art: 'owl', md: 'Explore at least three pictures before you decide, and disagree at least once with a reason. Useful turns: *Shall we start with…? How do you see it? I take your point, but… Could we agree that…? So, if we had to choose one…*' },
    ] },
  ],
  activities: {
    one: { title: 'The stubborn partner', md: 'You are the student’s partner in the Speaking Part 2 task on board page 4. Take strong, slightly exaggerated positions (*Referendums are the only fair way*) so that the student must challenge, concede and hold their ground. Do the one-minute part, then the three-minute decision, with a timer. Note every move the student makes. Then swap: the student takes the extreme position and you show how a strong candidate answers it. Finish by comparing the two decisions.' },
    small: { title: 'Speak and observe', md: 'Two students do the Speaking Part 2 task on board page 4 (with an odd number, three students do it in about six minutes, as in the exam). The others observe with one job each in the chat: count the concessions followed by a turn, note any challenge aimed at the person rather than the point, and write down the best phrase. Observers report in thirty seconds each. Rotate so that everyone speaks once, with a new decision question each time (*which is quickest*, *which is fairest to minorities*).' },
  },
  homework: { book: 'u9:p3', md: 'Finish lesson 3 of unit 9 if needed, then do lesson 4 (Should voting be compulsory?). Write about 150 words for a discussion forum in reply to the post *Cities should let residents vote on every major building project*: concede one point, challenge one with a reason, hold your ground and end with a sentence that moves towards agreement.' },
};
