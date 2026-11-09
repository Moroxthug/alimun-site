// English C2, class 55 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u12:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c55',
  focus: 'By the end every student sets up and reasons from an imagined case in formal English: inverted conditionals (*Were we to…*, *Were I in her position…*, *Should the vote be tied…*, *Had she not spoken up…*), *Were it not for* / *Had it not been for* / *But for* + noun, *Suppose*, *Imagine*, *What if* with the verb one step back for an unreal case, *for the sake of argument*, and *It is one thing to… and quite another to…* to concede one action and challenge another. The speaking goal: argue through a thought experiment and test its consequences. Exam work in the format of C2 Proficiency Reading and Use of English Part 4.',
  tips: [
    'Inverted conditionals are never contracted and *not* follows the subject: *Had she not spoken*, never *Hadn’t she spoken*. Listen for it in speech, where students contract by habit.',
    '*Suppose you found* (unreal, one step back) and *Suppose the client calls* (a real possibility) are both correct. Ask *Do you think it will happen?* when students are unsure which to use.',
    'In thought experiments, push students to follow the consequences: *Were we to accept that, what would follow?* That question is the point of the activity, and it practises the structure naturally.',
    'In Part 4, many items test the inversion and a fixed phrase at once. Mark the two halves separately so that students see where the second mark went.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Suppose you could know for certain what one person really thinks of you. Would you want to know?* Each student answers, and you recast one answer with an inversion.' },
    { min: 10, title: 'Formal hypotheticals', md: 'Show board page 1. Students choose the forms alone, then say whether each sentence describes the present, the past or an unlikely future.' },
    { min: 8, title: 'Build and fix', md: 'Show board page 2. Students build the sentences, then fix the mistakes and explain each one.' },
    { min: 12, title: 'Exam corner', md: 'Show board page 3: C2 Proficiency Reading and Use of English Part 4. Eight minutes alone, then check together, counting words and giving two marks per item.' },
    { min: 18, title: 'Activity', md: 'Show board page 4: the thought experiments. Use the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Each student finishes the sentence *It is one thing to… and quite another to…* about one of today’s cases. Set the homework.' },
  ],
  board: [
    { title: 'Formal hypotheticals', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the form that completes each sentence.', items: [
        { q: '___ I in his position, I would have declined the offer.', o: ['Were', 'Had', 'Should'], why: '*Were + subject + noun or adjective*: an imagined situation.' },
        { q: '___ the machine fail during the night, an alarm will sound.', o: ['Should', 'Were', 'Had'], why: '*Should + subject + base form*: possible but unlikely; the result can be *will*.' },
        { q: '___ for the volunteers, the festival could not take place at all.', o: ['Were it not', 'Had it not', 'Should it not'], why: '*Were it not for* + noun: without (now).' },
        { q: 'But ___ a last-minute donation, the shelter would have closed in March.', o: ['for', 'without', 'if'], why: '*But for* + noun: without.' },
        { q: 'Suppose you ___ that a close friend had cheated in an exam. What would you do?', o: ['discovered', 'discover', 'will discover'], why: 'An imagined case with *would*: the verb moves one step back.' },
        { q: 'For the ___ of argument, let us assume the figures are accurate.', o: ['sake', 'purpose', 'reason'], why: 'The fixed phrase is *for the sake of argument*.' },
      ] },
    ] },
    { title: 'Build and fix', blocks: [
      { t: 'ex', kind: 'build', h: 'Build the sentence. Two words do not belong.', items: [
        { a: 'Had the warning been heeded, the flood would have caused far less damage.', extra: ['if', 'will'], why: 'Inversion replaces *if*; a past result takes *would have*.' },
        { a: 'Were the rule to be abolished, few people would notice.', extra: ['was', 'will'], why: '*Were + subject + to*-infinitive, with *would* in the result.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: '[Hadn’t he warned] us, we would have lost everything.', a: ['Had he not warned'], why: 'No contraction in an inverted conditional; *not* follows the subject.' },
        { s: 'Were we [abandon] the project now, the money would be wasted.', a: ['to abandon'], why: '*Were + subject + to*-infinitive.' },
        { s: 'Had it not [for] the leak, nobody would have known.', a: ['been for'], why: 'The past form is *Had it not been for*.' },
        { s: 'It is one thing to disagree with a law, and quite [other] to break it.', a: ['another'], why: 'The fixed pair is *one thing… and quite another…*' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between three and eight words, including the word given.', items: [
        { q: 'Without the volunteers, the library would have to close.', cue: 'FOR', gap: '___ the volunteers, the library would have to close.', a: ['Were it not for', 'If it were not for', 'If it weren’t for', 'If it was not for', 'If it wasn’t for'], why: '*Were it not for* + noun = without, now.' },
        { q: 'If anyone objects, the vote will be postponed.', cue: 'SHOULD', gap: '___, the vote will be postponed.', a: ['Should anyone object', 'Should anybody object', 'Should there be any objection', 'Should there be an objection'], why: '*Should + subject + base form*: a possible but unlikely event.' },
        { q: 'The scandal only became public because she resigned.', cue: 'HAD', gap: '___, the scandal would not have become public.', a: ['Had she not resigned'], why: 'An inverted third conditional: *Had + subject + not + past participle*.' },
        { q: 'Promising reform is much easier than actually carrying it out.', cue: 'ANOTHER', gap: 'It is one thing to promise reform ___ it out.', a: ['and quite another to carry', 'but quite another to carry', 'and another to carry', 'and quite another to actually carry', 'but quite another to actually carry'], why: 'The fixed pair *It is one thing to… and quite another to…*' },
        { q: 'Let us assume, just to argue the point, that the information was accurate.', cue: 'SAKE', gap: 'Let us assume, ___, that the information was accurate.', a: ['for the sake of argument'], why: '*For the sake of argument*: a case you do not necessarily believe.' },
        { q: 'The project failed only because its funding was withdrawn.', cue: 'BEEN', gap: '___ the withdrawal of its funding, the project would not have failed.', a: ['Had it not been for', 'If it had not been for', 'If it hadn’t been for'], why: '*Had it not been for* + noun = without, in the past.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 4** the gap often starts the sentence, which is a strong hint that an **inversion** is wanted. Check the time (now: *Were it not for*; the past: *Had it not been for*), never contract the inversion, and count: four or five words is typical for these items.' },
    ] },
    { title: 'Thought experiments', blocks: [
      { t: 'text', md: '**The perfect lie detector.** Suppose a machine could tell with complete certainty whether someone was lying. Should courts be allowed to use it? Employers? Parents?\n\n**The memory pill.** What if a pill could erase one painful memory for ever? Would it be right to take it, or to give it to a soldier, or to a child?\n\n**The public ballot.** Imagine that every vote in an election were published with the voter’s name. What would change, and would anything improve?\n\n**The unwelcome gift.** A charity that campaigns against a fast-food company is offered a very large donation by that company. Were the charity to accept, what would follow?' },
      { t: 'tip', art: 'owl', md: 'Follow the consequences: *Were we to allow that, we would also have to…*, *Had such a machine existed, the trial would have…*, *It is one thing to… and quite another to…* Use at least one inversion in every turn.' },
    ] },
  ],
  activities: {
    one: { title: 'Follow it through', md: 'Choose two thought experiments from board page 4. For each one, the student takes a position in thirty seconds, and you then push the consequences with formal hypotheticals (*Were courts to use it, should the police use it too?*). The student must either accept the consequence or show where the case is different with *It is one thing to… and quite another to…* Swap roles for the second one: you take a position and the student pushes. Note every inversion the student produces and correct any contractions at the end.' },
    small: { title: 'Consequences', md: 'Each student takes one thought experiment from board page 4 (with more than four students, two share one and take opposite sides). In one minute they give their answer. The next student must then ask one *Were we to…* or *Suppose…* question that tests a consequence, and the speaker answers. After each round the group votes on the strongest consequence raised. Finish with the public ballot for everyone: a three-minute group discussion in which every turn uses a hypothetical form.' },
  },
  homework: { book: 'u12:p2', md: 'Finish lesson 2 of unit 12 if needed, then do lesson 3 (A grey area). Choose one thought experiment from board page 4 and write about 150 words arguing your view, with at least three different inverted conditionals and one sentence with *It is one thing to… and quite another to…*' },
};
