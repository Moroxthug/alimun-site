// English C2, class 15 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u4:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c15',
  focus: 'By the end every student states a claim with exactly the certainty the evidence allows: hedges that limit certainty, frequency, degree and generality (*it would seem that, as a rule, to a certain extent, the majority of*), boosters for what is well established (*clearly, there can be little doubt that*), and the sceptical adverbs *ostensibly, purportedly, allegedly* and *supposedly*, told apart from *arguably*, which hedges the writer’s own view. The speaking goal: defend a claim under questioning by adjusting it, not abandoning it.',
  tips: [
    'Give the rule in one line and keep returning to it: hedge the interpretation, boost the evidence. Most C2 students already hedge; their problem is hedging everything equally, which sounds evasive.',
    '*Ostensibly* is the word most often misused. Test it with the question *Was the stated reason the real one?* If the answer is yes, *ostensibly* is wrong.',
    '*Purport* is active (*the letter purports to be…*); *allege* is usually passive with people (*he is alleged to have…*). Write both patterns on the board before the exam corner, because Part 4 depends on them.',
    'In the speaking activity, do not let students retreat with *it depends*. Ask *On what, exactly?* and make them build that condition into the claim.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Write on the board: *Social media is destroying young people’s attention.* Ask each student how far they would sign this sentence, and what they would change so that they could defend it in a seminar.' },
    { min: 12, title: 'How sure is the writer?', md: 'Show board page 1. Students choose the word alone, then justify each choice by naming what the writer believes about the claim.' },
    { min: 10, title: 'Sort and fix', md: 'Show board page 2, then page 3. Students sort the hedges by what they limit, then fix the overclaims and say which word in the evidence makes the original too strong.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 4: C2 Proficiency Reading and Use of English Part 4. Eight minutes alone. Check together, counting words and marking each answer for its two marks.' },
    { min: 5, title: 'Close', md: 'Each student rewrites the warm-up sentence so they could defend it, using one hedge and one booster. Set the homework.' },
  ],
  board: [
    { title: 'How sure is the writer?', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the word that fits what the writer believes.', items: [
        { q: 'The minister’s visit was ___ to open a new hospital wing, but its timing, a week before the election, suggests another motive.', o: ['ostensibly', 'undoubtedly', 'demonstrably'], why: 'The stated purpose is probably not the real one.' },
        { q: 'The diary ___ to record the last weeks of the expedition, though several historians doubt that it is genuine.', o: ['purports', 'assumes', 'supposes'], why: '*Purport to* + infinitive: it claims this about itself, and the claim is in doubt.' },
        { q: 'The director is ___ to have used company funds for private travel; the case comes to court next month.', o: ['alleged', 'arguable', 'ostensible'], why: 'An accusation of wrongdoing not yet proved: *is alleged to have* + past participle.' },
        { q: 'Twelve independent studies point in the same direction, so the link is ___ established.', o: ['clearly', 'supposedly', 'arguably'], why: 'Consistent, independent evidence justifies a booster.' },
        { q: 'This is ___ the finest bridge of its period, although some engineers would rank others higher.', o: ['arguably', 'evidently', 'allegedly'], why: 'The writer’s own view, presented as defensible rather than proved.' },
        { q: 'The new timetable was ___ designed to help commuters, yet it seems to have helped nobody.', o: ['supposedly', 'demonstrably', 'undoubtedly'], why: 'The everyday sceptical word: that is what we were told.' },
      ] },
    ] },
    { title: 'What does the hedge limit?', blocks: [
      { t: 'ex', kind: 'sort', h: 'Sort the hedges by what they limit.', groups: ['certainty', 'frequency', 'degree', 'generality'], items: [
        { s: 'in all likelihood', g: 0, why: 'Very probably, but not certainly.' },
        { s: 'presumably', g: 0, why: 'The writer supposes it without being sure.' },
        { s: 'as a rule', g: 1, why: 'Usually, with exceptions.' },
        { s: 'more often than not', g: 1, why: 'In most cases, not all.' },
        { s: 'to a certain extent', g: 2, why: 'Partly true.' },
        { s: 'partly', g: 2, why: 'Not wholly.' },
        { s: 'the majority of', g: 3, why: 'Most, not all.' },
        { s: 'in certain contexts', g: 3, why: 'True in some situations only.' },
      ] },
    ] },
    { title: 'Claim no more than the evidence', blocks: [
      { t: 'ex', kind: 'fix', h: 'Each sentence claims too much or uses the wrong word for the evidence. Find and fix it.', items: [
        { s: 'One trial with thirty volunteers [proves] that the drug works.', a: ['suggests', 'indicates'], why: 'A single small trial can suggest, not prove.' },
        { s: 'Children [always learn] languages faster than adults.', a: ['tend to learn', 'often learn', 'generally learn', 'usually learn'], why: 'An absolute claim that one counter-example destroys; limit the frequency.' },
        { s: 'The museum’s finances were [ostensibly] healthy, as the independent audit confirmed.', a: ['clearly', 'evidently', 'demonstrably'], why: 'The audit confirmed it, so the writer can boost; *ostensibly* would mean they only seemed healthy.' },
        { s: 'The senator was [arguably] seen accepting the money, according to the police report.', a: ['allegedly', 'reportedly'], why: 'An unproved accusation reported from a source: *allegedly*. *Arguably* is for the writer’s own view.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between three and eight words, including the word given.', items: [
        { q: 'It seems that someone moved the documents before the inspectors arrived.', cue: 'APPEAR', gap: 'The documents ___ before the inspectors arrived.', a: ['appear to have been moved', 'would appear to have been moved'], why: '*Appear to* + perfect passive infinitive: one mark for *appear to*, one for *have been moved*.' },
        { q: 'The manager is accused of hiding the losses from shareholders, though nothing has been proved.', cue: 'ALLEGED', gap: 'The manager ___ the losses from shareholders, though nothing has been proved.', a: ['is alleged to have hidden', 'is alleged to have concealed', 'has been alleged to have hidden'], why: 'Passive reporting with a perfect infinitive for an earlier action.' },
        { q: 'In my view, the decision was probably the worst mistake of his career.', cue: 'ARGUABLY', gap: 'The decision ___ of his career.', a: ['was arguably the worst mistake', 'was, arguably, the worst mistake', 'was arguably the biggest mistake'], why: '*Arguably* carries both *in my view* and *probably*.' },
        { q: 'The evidence shows beyond doubt that the bridge was badly designed.', cue: 'QUESTION', gap: 'There ___ the bridge was badly designed.', a: ['is no question that', 'can be no question that'], why: 'A formal booster with *there*: *There is no question that…*' },
        { q: 'Older drivers are generally less likely to have accidents than younger ones.', cue: 'RULE', gap: '___ fewer accidents than younger ones.', a: ['As a rule, older drivers have', 'As a rule older drivers have'], why: '*As a rule* replaces *generally*, and *less likely to have accidents* becomes *have fewer accidents*.' },
        { q: 'Officially, the reform was meant to save money, but few people believed this.', cue: 'OSTENSIBLY', gap: 'The reform ___ money, but few people believed this.', a: ['was ostensibly intended to save', 'was ostensibly meant to save', 'was ostensibly designed to save', 'was ostensibly introduced to save', 'was ostensibly aimed at saving'], why: '*Ostensibly*: the stated purpose, which the writer doubts.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Method for **Part 4**: work out what the key word forces (*ALLEGED* forces a passive and an infinitive), write the answer, then count the words (three to eight; contractions count as two) and read the whole sentence again. If your version is more or less certain than the original, the meaning has changed.' },
    ] },
  ],
  activities: {
    one: { title: 'Defend the claim', md: 'The student chooses a field they know (their work, their studies, a hobby) and makes three bold claims about it. Challenge each one as a sceptical reviewer would: *How do you know? Always? Everywhere?* The student restates the claim each time with the right hedge, keeping it as strong as the evidence allows, and boosts the one part that is solid. Finish by writing the three final versions together.' },
    small: { title: 'Peer review', md: 'Each student writes one bold claim in the chat about a topic in the news. The student after them plays the reviewer and asks one challenging question; the writer answers by rewriting the claim with a hedge or a booster. The group decides whether the new version is defensible and not evasive. Go round twice, with a new claim each time.' },
  },
  homework: { book: 'u4:p1', md: 'Finish lesson 1 of unit 4 if needed, then do lesson 2 (Contend, posit, concede). Write a paragraph of about 150 words on whether working from home is good for productivity: hedge the interpretations, boost the evidence you trust, and use *ostensibly* or *purportedly* once, correctly.' },
};
