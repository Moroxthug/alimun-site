// English C1, class 90 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u19:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c90',
  focus: 'By the end every student understands and uses the idioms of relationships, quarrels and making up naturally: *hit it off, get off on the wrong foot, see eye to eye, be at loggerheads, a bone of contention, rub someone up the wrong way, clear the air, extend an olive branch, meet halfway, bury the hatchet*, with the verbs *fall out, make up, patch things up* and *hold a grudge*. They know what can change in an idiom (tense, person, an adverb) and what cannot (the core words), and when an idiom is too informal for formal writing.',
  tips: [
    'Teach the idioms as a story, not a list: two people meet, hit it off or get off on the wrong foot, fall out over a bone of contention, then clear the air and bury the hatchet. Students remember them in order.',
    'The core words never change: *eye to eye*, never *eye in eye*; *hatchet*, never *axe*; *clear the air*, never *clean*. Correct these every time; they are the mistakes that make idioms sound wrong.',
    'The grammar around the idiom does change and is often tested: *They have never seen eye to eye*, *at loggerheads with*, *a bone of contention between*. Ask students to say the idiom in a new tense.',
    'Register: most of these idioms are informal or neutral. If a student uses *met each other halfway* in a formal report, offer *reached a compromise* instead.',
    'Do not let the activity become a list of idioms read aloud. Ask for real stories: a flatmate, a sibling, a colleague.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Think of a friend you got on with from the very first day, and someone you started badly with. What happened?* Recast their answers with *hit it off* and *got off on the wrong foot*.' },
    { min: 12, title: 'The story of a quarrel', md: 'Show board page 1. Students read the short story and choose the idiom that fits each gap, then retell the story in their own words.' },
    { min: 10, title: 'Fixed but not frozen', md: 'Show board page 2. Students fix the mistakes in the core words and say which part of each idiom can change.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 4. Students rewrite the sentences alone with “Everyone solves this”, then check the tense and preposition around each idiom.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Each student uses one idiom from today about a real relationship. Set the homework.' },
  ],
  board: [
    { title: 'The story of a quarrel', blocks: [
      { t: 'reading', title: 'The band', md: 'Sam and Leo met at music college and hit it off at once. For five years they wrote every song together. Then they were offered a recording contract, and money became a bone of contention: Leo wanted to share everything equally; Sam felt he wrote most of the music. By the time the album came out, they were barely speaking, and the rest of the band were walking on eggshells at every rehearsal. It was Leo who finally extended an olive branch, with a short message on Sam’s birthday. They met for a coffee, cleared the air and agreed to meet each other halfway on the money. They are not as close as they were, but they have buried the hatchet.' },
      { t: 'ex', kind: 'select', h: 'Choose the idiom that fits.', items: [
        { q: 'We liked each other the moment we met; we really ___.', o: ['hit it off', 'cleared the air', 'saw eye to eye'], why: '*Hit it off*: like each other immediately.' },
        { q: 'The question of who pays for the wedding has become a real ___.', o: ['bone of contention', 'olive branch', 'clear air'], why: '*A bone of contention*: the subject of the argument.' },
        { q: 'After the argument, everyone in the office was walking on ___.', o: ['eggshells', 'thin ice', 'glass'], why: 'The fixed phrase is *walk on eggshells*.' },
        { q: 'She ___ by inviting her old business partner to her party.', o: ['extended an olive branch', 'rubbed him up the wrong way', 'held a grudge'], why: 'A first move towards peace.' },
        { q: 'After ten years of silence, the brothers finally ___.', o: ['buried the hatchet', 'fell out', 'got off on the wrong foot'], why: '*Bury the hatchet*: end a quarrel for good.' },
      ] },
    ] },
    { title: 'Fixed but not frozen', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'My father and I have never seen [eye in eye] about money.', a: ['eye to eye'], why: 'The core words never change: *eye to eye*.' },
        { s: 'We sat down together to [clean the air].', a: ['clear the air'], why: '*Clear* the air, as after a storm.' },
        { s: 'They finally buried the [axe] last summer.', a: ['hatchet'], why: 'Only *hatchet* is used in this idiom.' },
        { s: 'She has [fallen out her] neighbour over the fence.', a: ['fallen out with her'], why: '*Fall out with someone over something*.' },
        { s: 'He still holds a grudge [to] his old boss.', a: ['against'], why: '*Hold a grudge against someone*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'The verb changes for tense and person, and an adverb can go in (*They **never really** saw eye to eye*), but the core words stay the same. In a formal report, use the plain meaning: *the two sides reached a compromise*.' },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first. Use the word given and three to six words, including the word given.', items: [
        { q: 'Ana and Ben liked each other as soon as they met.', cue: 'HIT', a: ['Ana and Ben hit it off as soon as they met.', 'Ana and Ben hit it off immediately.', 'Ana and Ben hit it off straight away.'], why: '*Hit it off*: like each other at once.' },
        { q: 'Lucy has never forgiven her brother for selling the car.', cue: 'GRUDGE', a: ['Lucy still holds a grudge against her brother for selling the car.', 'Lucy has held a grudge against her brother for selling the car.', 'Lucy still bears a grudge against her brother for selling the car.'], why: '*Hold a grudge against someone*, with *still* to keep the meaning of *never forgiven*.' },
        { q: 'In the end, both sides gave up something to reach an agreement.', cue: 'HALFWAY', a: ['In the end, both sides met each other halfway.', 'In the end, the two sides met each other halfway.', 'In the end, both sides met halfway.'], why: '*Meet (each other) halfway*: compromise.' },
        { q: 'His comments only made the argument worse.', cue: 'FUEL', a: ['His comments only added fuel to the fire.', 'His comments only added fuel to the flames.'], why: '*Add fuel to the fire*: make a bad situation worse.' },
      ] },
      { t: 'tip', art: 'owl', md: 'When the key word is part of an idiom, the idiom usually earns the first mark. The second mark is often for the grammar around it: the tense, the preposition (*against, with, between*) or an adverb that keeps the original meaning.' },
    ] },
  ],
  activities: {
    one: { title: 'A relationship story', md: 'The student tells the story of a real relationship that went through a difficult patch (a friend, a sibling, a colleague), from the first meeting to today. Prompt with *How did you first get on? What was the bone of contention? Who made the first move?* Note the idioms they use and recast two or three sentences with a more natural idiom at the end.' },
    small: { title: 'Story chain', md: 'Start a story in the chat: *Two neighbours got off on the wrong foot the day one of them moved in.* Each student adds two sentences using a new idiom from board page 1, until the neighbours bury the hatchet or agree to disagree. The group then retells the whole story aloud in the past.' },
    group: { title: 'Agony aunt', md: 'Breakout rooms of three each get a short problem in the chat (*My flatmate and I are always at loggerheads about cleaning*). The room writes a reply of four or five sentences giving advice, with at least three idioms used correctly. Back together, rooms read their replies and the class votes for the most useful advice.' },
  },
  homework: { book: 'u19:p3', md: 'Finish lesson 3 of unit 19 if needed, then do lesson 4 (Talking it through). Write a short story (about 150 words) about two people who fall out and make up, using at least five idioms from today, each in a different tense or with a different subject.' },
};
