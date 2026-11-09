// English C2, class 3 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u1:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c03',
  focus: 'By the end every student uses strong collocations (*bitterly disappointed*, *harbour doubts*, *a glaring omission*, *a pang of guilt*) and fixed binomials (*by and large*, *part and parcel*, *wear and tear*, *safe and sound*) as single blocks, in the order native speakers expect. The exam goal: in Part 2, find the fixed phrase around a gap before thinking about grammar.',
  tips: [
    'Collocations are habits, not rules, so explaining them rarely helps. Say the natural version, ask the student to repeat it in a new sentence of their own, and move on.',
    'Binomials cannot be reversed: *odds and ends*, never *ends and odds*. When a student reverses one, say both versions aloud; the wrong one usually sounds wrong to them at once.',
    'Many collocation mistakes at C2 come from translation (*make a conclusion*, *strongly disappointed*). Ask students which ones their own language would get wrong and collect them on the board.',
    'In Part 2 spelling counts and contractions count as two words. Check every answer letter by letter before you accept it.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What was the last thing that really disappointed you?* Write the students’ adverbs and adjectives on the board, then upgrade two together (*very disappointed* to *bitterly disappointed*).' },
    { min: 12, title: 'Words that belong together', md: 'Show board page 1. Students choose the words that go with each key word, then make one sentence each with a collocation they did not know.' },
    { min: 10, title: 'Binomials', md: 'Show board page 2. Students match the new binomials, then fix the broken ones and read the corrected sentences aloud as single blocks.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C2 Proficiency Reading and Use of English Part 2. Six minutes, alone, then check spelling together. For each gap, students say whether it was a fixed phrase or a grammar word.' },
    { min: 5, title: 'Close', md: 'Each student says one sentence about their week with a binomial from today. Set the homework.' },
  ],
  board: [
    { title: 'Words that belong together', blocks: [
      { t: 'ex', kind: 'colloc', h: 'Which words go naturally with the key word?', items: [
        { key: 'harbour', o: ['doubts', 'a grudge', 'suspicions', 'a mistake', 'a conclusion'], a: [0, 1, 2], why: 'You *harbour* feelings you keep to yourself: doubts, a grudge, suspicions.' },
        { key: 'glaring', o: ['omission', 'error', 'example', 'smile', 'chance'], a: [0, 1, 2], why: '*Glaring* means very obvious, usually of something bad: *a glaring omission*, *a glaring error*.' },
        { key: 'lodge', o: ['a complaint', 'an appeal', 'an objection', 'a conclusion', 'a question'], a: [0, 1, 2], why: 'You *lodge* a formal complaint, appeal or objection with an authority.' },
        { key: 'painfully', o: ['shy', 'slow', 'aware', 'happy', 'tall'], a: [0, 1, 2], why: '*Painfully* intensifies something uncomfortable: *painfully shy*, *painfully aware*.' },
        { key: 'a pang of', o: ['guilt', 'regret', 'jealousy', 'luck', 'courage'], a: [0, 1, 2], why: 'A *pang* is a sudden sharp feeling: guilt, regret, jealousy. We say *a stroke of luck*.' },
        { key: 'sweeping', o: ['generalisation', 'changes', 'statement', 'doubt', 'mistake'], a: [0, 1, 2], why: '*Sweeping* means wide and often too general: *sweeping changes*, *a sweeping statement*.' },
      ] },
    ] },
    { title: 'Binomials', blocks: [
      { t: 'ex', kind: 'match', h: 'Match the binomial with its meaning.', pairs: [
        ['safe and sound', 'unharmed after danger'],
        ['touch and go', 'so uncertain that it could fail'],
        ['neck and neck', 'exactly level in a race or contest'],
        ['rough and ready', 'simple and not perfect, but it works'],
        ['sick and tired (of)', 'completely fed up with something'],
        ['peace and quiet', 'calm, with no noise or interruptions'],
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the broken binomial.', items: [
        { s: 'The insurance does not cover [tear and wear] on the carpets.', a: ['wear and tear'], why: 'The order is fixed: *wear and tear*.' },
        { s: 'The contract was declared [null and empty] by the court.', a: ['null and void'], why: 'The legal binomial is *null and void*.' },
        { s: 'Good jobs in the village are [few and far away].', a: ['few and far between'], why: 'Rare: *few and far between*.' },
        { s: 'The decision is not as [cut and dry] as the minister suggests.', a: ['cut and dried'], why: 'The fixed form is *cut and dried*, with a past participle.' },
        { s: 'Any partnership needs a bit of [take and give].', a: ['give and take'], why: 'The order is fixed: *give and take*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 2', blocks: [
      { t: 'ex', kind: 'gap', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 2): read the text about a repair café, sentence by sentence. Think of the word which best fits each gap. Use only one word in each gap.', items: [
        { q: 'By and ___, the people who bring things to the repair café are not short of money.', a: ['large'], why: 'The binomial *by and large*: on the whole.' },
        { q: 'What they are short ___ is patience with machines that seem designed to be thrown away.', a: ['of'], why: '*Short of* something: not having enough of it.' },
        { q: 'Broken toasters are part and ___ of every Saturday morning.', a: ['parcel'], why: '*Part and parcel of*: an essential, unavoidable part.' },
        { q: 'Most repairs are a matter of trial and ___ rather than expert knowledge.', a: ['error'], why: '*Trial and error*: learning by trying and failing.' },
        { q: '___ though few of the volunteers have any formal training, they rarely send anyone home disappointed.', a: ['Even'], why: '*Even though* introduces a strong contrast.' },
        { q: 'Nobody is charged; visitors simply give what they can, ___ little that may be.', a: ['however'], why: '*However little that may be*: no matter how little.' },
        { q: 'The organisers are acutely ___ that one café cannot change the way products are made.', a: ['aware'], why: 'The collocation *acutely aware*.' },
        { q: '___ the time being, though, it keeps a great many kettles out of the bin.', a: ['For'], why: 'The fixed phrase *for the time being*: for now.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 2** there are no options: you write **one word** in each of **eight gaps**. Read the whole sentence first, then look for a fixed phrase around the gap (*by and…*, *for the time…*, *acutely…*). If there is none, ask what kind of word the grammar needs: a preposition, a linker, a relative, an auxiliary.' },
    ] },
  ],
  activities: {
    one: { title: 'Collocation upgrade', md: 'The student talks for two minutes about a recent problem at work or at home. Note every plain adjective, adverb and verb + noun pair (*very sorry*, *make a complaint*, *big mistake*). Then go back through them together and upgrade each one to a strong collocation (*deeply sorry*, *lodge a complaint*, *a glaring error*). The student retells the story with the upgrades.' },
    small: { title: 'Binomial story', md: 'Post eight binomials in the chat (from the book and from today). One student starts a story with one sentence that uses one of them; the next continues with another, and so on, until all eight are used. The group then retells the whole story together in under a minute. With two students, they take turns and use all eight between them.' },
  },
  homework: { book: 'u1:p3', md: 'Finish lesson 2 of unit 1 if needed, then do lesson 3 (A bit of a challenge). Write about 150 words on a place you know well that has changed, using at least four collocations and three binomials from the book and from today.' },
};
