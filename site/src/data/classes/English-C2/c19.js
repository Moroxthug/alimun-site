// English C2, class 19 (docs/LESSONS_PLAN.md, L6). Review of units 3 and 4. Draft for the owner's review.
export const LESSON = {
  id: 'c19',
  focus: 'By the end every student uses the language of units 3 and 4 with more accuracy and more control of register: irony, understatement and litotes, puns and the words that describe humour, fixed idioms and phrasal verbs with their grammar (*grasp the nettle, tide someone over, fob someone off, wriggle out of*), hedges and boosters, the sceptical adverbs, noun phrases and reporting verbs. The speaking goal: say the same thing as an ironic columnist and as a careful academic, and know which one the situation needs.',
  tips: [
    'The two units pull in opposite directions: unit 3 says less or other than it means, unit 4 says exactly what the evidence allows. Make that contrast the thread of the class.',
    'Collect typical mistakes from classes 11 to 18 before this class and replace items on board page 2 with your students’ own where you can.',
    'Idioms are fixed but their verbs change tense; reporting verbs have fixed patterns after them. Most errors in both units are about the words around the key word, so check the whole phrase.',
    'End with a clear next step: the next class is exam practice for Reading and Use of English, so each student should leave knowing which part they find hardest.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask each student to describe a recent small disaster (a journey, a meal, a piece of technology) in one ironic or understated sentence. The others say what really happened.' },
    { min: 10, title: 'Units 3 and 4 together', md: 'Show board page 1. Students choose alone, then say which unit each item comes from and what decided the answer.' },
    { min: 8, title: 'Fix it', md: 'Show board page 2: typical mistakes from both units. Students correct them and explain each one.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 17, title: 'Exam corner', md: 'Show board page 3: C2 Proficiency Reading and Use of English Part 1 (seven minutes), then page 4: Part 4 (eight minutes). Check each part straight after it, then ask for scores.' },
    { min: 5, title: 'Close', md: 'Each student names one point from each unit they now feel sure about and one to practise. Set the homework.' },
  ],
  board: [
    { title: 'Units 3 and 4 together', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the word or phrase that fits.', items: [
        { q: 'After years of excuses, the council finally ___ the nettle and closed the unsafe bridge.', o: ['grasped', 'held', 'pulled'], why: 'The idiom is fixed: *grasp the nettle*.' },
        { q: '“A slight inconvenience,” she said of the flood that had ruined her kitchen. She was using ___.', o: ['understatement', 'sarcasm', 'hyperbole'], why: 'She says far less than the truth, and she is not mocking anyone.' },
        { q: 'Keeping the ward open through a winter of strikes was no ___ feat.', o: ['mean', 'poor', 'low'], why: 'Litotes with a fixed phrase: *no mean feat* = a considerable achievement.' },
        { q: 'The authors ___ that their survey relied on volunteers, who may not be typical.', o: ['concede', 'refute', 'posit'], why: 'They admit a weakness in their own work.' },
        { q: 'The figures ___ to suggest a recovery, although one good quarter proves little.', o: ['would seem', 'must surely', 'clearly go'], why: 'A hedge fits the doubt expressed in the second half.' },
        { q: 'The campaign was ___ about raising awareness, but most of the money went on advertising the charity itself.', o: ['ostensibly', 'evidently', 'arguably'], why: 'The stated aim was not the real one.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'The headline is a clever play [of] words.', a: ['on'], why: 'The fixed phrase is *a play on words*.' },
        { s: 'Could you lend me some money to [tide over me] until Friday?', a: ['tide me over'], why: 'The object goes between *tide* and *over*.' },
        { s: 'Every time I complain, they [fob off me] with another excuse.', a: ['fob me off'], why: 'A pronoun object goes between the verb and *off*.' },
        { s: 'A large study [proved] that the effect may not exist at all.', a: ['suggested', 'indicated'], why: '*Proved* clashes with *may*; the claim is hedged, so the verb must be too.' },
        { s: 'There is now a substantial body of [researches] on the subject.', a: ['research'], why: '*Research* is uncountable in this sense.' },
        { s: 'Her column is full of [humoristic] observations about family life.', a: ['humorous', 'witty'], why: '*Humoristic* is not used in English.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 1', blocks: [
      { t: 'ex', kind: 'select', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 1): read the text about humour in academic writing, in order, and choose the answer which best fits each gap.', items: [
        { q: 'Academic prose has a reputation for dullness, and not ___ good reason.', o: ['without', 'for', 'with', 'by'], why: '*Not without (good) reason*: litotes, meaning there is a good reason.' },
        { q: 'Writers who ___ every claim with three qualifications can make even an exciting discovery sound tedious.', o: ['hedge', 'fence', 'shield', 'guard'], why: 'You *hedge* a claim: soften it.' },
        { q: 'Yet a handful of scholars have ___ out a reputation for wit without losing the respect of their colleagues.', o: ['carved', 'cut', 'shaped', 'struck'], why: 'The fixed phrase is *carve out a reputation*.' },
        { q: 'Their secret, it would ___, is timing:', o: ['seem', 'show', 'look', 'think'], why: '*It would seem*: a hedge with *it*; *look* would need *it would look as if*.' },
        { q: 'a single dry remark, ___ at the right moment, can do more than a page of jokes.', o: ['delivered', 'presented', 'handed', 'administered'], why: 'You *deliver* a remark or a line.' },
        { q: 'Readers who expect to be bored are ___ off guard, and a small surprise keeps them reading.', o: ['caught', 'held', 'kept', 'put'], why: 'The fixed phrase is *catch someone off guard*.' },
        { q: 'Humour carries risks of its own, of course: a pun in a paper on a serious illness would be in very poor ___,', o: ['taste', 'manner', 'form', 'style'], why: '*In poor taste*: offensive for the situation.' },
        { q: 'and critics would be quick to ___ it as a sign that the author was not taking the subject seriously.', o: ['seize on', 'take up', 'pick at', 'hold on'], why: '*Seize on something as a sign*: use it eagerly as evidence.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Method for **Part 1**: read the whole text first, then at each gap read to the end of the sentence and test every option in the phrase. All four are usually real words with a similar meaning; only one makes the collocation, idiom or pattern.' },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between three and eight words, including the word given.', items: [
        { q: 'For years, the council has avoided dealing firmly with the housing problem.', cue: 'NETTLE', gap: 'For years, the council ___ of housing.', a: ['has failed to grasp the nettle', 'has refused to grasp the nettle', 'has been unwilling to grasp the nettle', 'has not grasped the nettle', 'hasn’t grasped the nettle'], why: '*Grasp the nettle of* + noun, with a negative idea and the present perfect.' },
        { q: 'People believe that the column was written by the editor herself.', cue: 'THOUGHT', gap: 'The column ___ by the editor herself.', a: ['is thought to have been written'], why: 'Passive reporting with a perfect passive infinitive.' },
        { q: 'The author admits that her conclusions can only be provisional.', cue: 'CONCEDES', gap: 'The author ___ only be provisional.', a: ['concedes that her conclusions can'], why: '*Concede that* + clause: admit a point against your own case.' },
        { q: 'Nobody knows how far noise affects children’s learning.', cue: 'EXTENT', gap: 'The ___ children’s learning is unknown.', a: ['extent to which noise affects'], why: 'The noun-phrase frame *the extent to which*.' },
        { q: 'She avoided answering the question by changing the subject.', cue: 'WRIGGLED', gap: 'She ___ the question by changing the subject.', a: ['wriggled out of answering'], why: '*Wriggle out of* + -ing: avoid something by being clever.' },
        { q: 'It was not at all a modest speech.', cue: 'EXACTLY', gap: 'The speech ___ modest.', a: ['was not exactly', 'wasn’t exactly'], why: 'Understatement with *not exactly*: the speaker means it was far from modest.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Two voices', md: 'The student chooses something they have recently used or seen (an app, a film, a restaurant, a new rule at work). First they describe it for a minute as a humorous columnist: irony, understatement, one idiom from unit 3. Then they evaluate it for a minute as a careful reviewer: hedges, a booster, a reporting verb (*the company maintains that…*). Discuss which voice suits which reader, and note five sentences to upgrade together.' },
    small: { title: 'Register switch', md: 'One student says a careful, hedged sentence about a topic in the news (*The new policy would appear to have had a limited effect.*). The next student says the same thing as an ironic columnist (*The new policy has worked wonders, if by wonders we mean almost nothing.*). The next goes back to the academic voice with a different reporting verb. After each round the group names the device or the stance word used. Go round until everyone has used both voices.' },
  },
  homework: { book: 'u1 u2 u3 u4', md: 'Do the Reading and Use of English tasks in the lessons of units 1 to 4 again, timing yourself at about one and a half minutes per question in Parts 1 to 4. Write down which part took you longest and bring one question you found difficult to the next class, which is exam practice for Reading and Use of English.' },
};
