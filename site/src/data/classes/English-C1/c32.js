// English C1, class 32 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u7:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c32',
  focus: 'By the end every student avoids repetition naturally with so and not, do and do so, one and ones, the auxiliary, the infinitive to, and so or neither + auxiliary, and knows the fine points (*I hope not*, never *I don’t hope so*). In discussion they answer in short, natural turns that build on what the other person said.',
  tips: [
    'The commonest error is *I don’t hope so*. With *hope* and *be afraid* the negative goes on *not* (*I hope not*); with *think, believe, expect* it usually goes on the verb (*I don’t think so*).',
    'Learners often drop the *to*: *I’d love.* Insist on *I’d love to* and *I don’t want to* every time.',
    'With *So am I* and *Neither do I*, the auxiliary must match the first sentence. Drill it quickly round the class with true statements.',
    'In formal writing, too much ellipsis can be unclear; *do so* is the formal choice there (*Students who wish to leave early must do so in writing*).',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Fire quick questions at the class (*Will it rain tomorrow? Is English spelling hard? Are you coming next week?*). Students answer in two or three words only, with no repetition.' },
    { min: 12, title: 'Short replies', md: 'Show board page 1. Students choose the reply, then say why the other options are wrong.' },
    { min: 10, title: 'Fix it', md: 'Show board page 2. Students correct the mistakes in pairs, then read the corrected mini dialogues aloud.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 2. Students write one word in each gap alone, then compare. Reveal the answers.' },
    { min: 5, title: 'Close', md: 'Ask each student one last question; they answer with a short substitution and one reason. Set the homework.' },
  ],
  board: [
    { title: 'Short replies', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the reply that avoids repetition correctly.', items: [
        { q: 'Is the library open late tonight? I believe ___.', o: ['so', 'it', 'yes'], why: '*So* replaces the whole clause after *believe*.' },
        { q: 'Are we going to miss the train? I hope ___.', o: ['not', 'no', 'so not'], why: 'With *hope*, the negative is *I hope not*.' },
        { q: 'Would you like to join the committee? I’d be happy ___.', o: ['to', 'it', 'so'], why: 'Keep *to* in place of the infinitive.' },
        { q: 'I can’t stand long meetings. ___ can I.', o: ['Neither', 'So', 'Either'], why: 'Agreeing with a negative: *Neither* + auxiliary.' },
        { q: 'These boots are fine, but I prefer the brown ___.', o: ['ones', 'one', 'them'], why: 'A plural countable noun after an adjective: *ones*.' },
        { q: 'She promised to finish the report today, and she did ___.', o: ['so', 'it so', 'that so'], why: '*Do so* replaces the verb phrase *finish the report*.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'A: I don’t eat meat. B: [So don’t I].', a: ['Neither do I', 'Nor do I'], why: 'Agreeing with a negative: *Neither do I* or *Nor do I*.' },
        { s: 'Will it be cold at the weekend? I [don’t expect it].', a: ['don’t expect so', 'expect not'], why: 'Use *so* to replace a clause, not *it*.' },
        { s: 'Is she coming to the party? I [think not so].', a: ['don’t think so', 'think not'], why: '*I don’t think so* is the natural form; *I think not* is formal.' },
        { s: 'I don’t like the green chairs; I prefer the [blue].', a: ['blue ones'], why: 'After an adjective, a countable noun needs *one* or *ones*.' },
        { s: 'We asked him to apologise, but he [refused it].', a: ['refused', 'refused to'], why: '*Refuse* takes an infinitive, so leave it out or keep *to*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 2', blocks: [
      { t: 'ex', kind: 'gap', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 2): read the sentences from an article on habits and write one word in each gap.', items: [
        { q: 'Many people say they will change their habits, but few actually ___ so.', a: ['do'], why: '*Do so* replaces *change their habits*.' },
        { q: 'Will the new rules make any difference? Most experts do not think ___.', a: ['so'], why: '*So* replaces the clause after *think*.' },
        { q: 'Online courses are cheaper than traditional ___, but not always better.', a: ['ones'], why: '*Ones* replaces *courses* after an adjective.' },
        { q: 'If the results are positive, the trial will continue; if ___, it will stop.', a: ['not'], why: '*If not* replaces *if the results are not positive*.' },
        { q: 'Older readers still prefer print, and ___ do many younger ones.', a: ['so'], why: '*So* + auxiliary + subject for an added positive.' },
        { q: 'Few of us exercise as often as we ought ___.', a: ['to'], why: '*Ought to* keeps *to* when the verb is left out.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 2, look back before the gap. If the idea has already been said, the missing word may be the one that replaces it: *so*, *not*, *one*, *do* or *to*. Then check the grammar on both sides of the gap.' },
    ] },
  ],
  activities: {
    one: { title: 'Short answers only', md: 'Ask quick opinion questions about the student’s life and the news. The student must reply first with a short substitution (*I doubt it*, *I hope not*, *I’d like to*) and then add one reason. After five minutes swap roles, and note any repetition to go over at the end.' },
    small: { title: 'Discussion chain', md: 'Post a question for discussion in the chat (*Should phones be banned in schools?*). Students discuss for four minutes as in C1 Advanced Speaking Part 3, and every reply must begin with a short response to the previous speaker (*I suppose so*, *If so, then…*, *So would I*). Note repetitions and share three improvements at the end.' },
    group: { title: 'Echo rooms', md: 'Breakout rooms of three: one student makes true statements about their likes and habits, the others reply with *So* or *Neither* + auxiliary, or with a contrast (*I don’t, actually*). Then each room writes four mini dialogues with one gap each for a quick class quiz.' },
  },
  homework: { book: 'u7:p3', md: 'Finish lesson 3 of unit 7 if needed, then do lesson 4 (Is the internet ruining English?). Write a short dialogue (about eight lines) between two friends planning a weekend, using at least five different ways of avoiding repetition.' },
};
