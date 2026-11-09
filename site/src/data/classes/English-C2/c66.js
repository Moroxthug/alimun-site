// English C2, class 66 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u14:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c66',
  focus: 'By the end every student uses inversion and fronting for emphasis and cohesion in discursive writing, with the right auxiliary every time: negative and limiting adverbials (*never*, *seldom*, *little*, *not until*, *only when*, *only by*, *under no circumstances*), *not only… but*, *so… that* and *such is… that*, *nowhere is… more… than*, and fronted complements (*Central to this is…*, *Gone are the days when…*, *Equally important is…*). They do six key word transformations in the format of C2 Proficiency Reading and Use of English Part 4 and upgrade a plain paragraph so that the emphasis falls where the argument needs it.',
  tips: [
    'The auxiliary is where students go wrong. After a negative adverbial, check the tense: *did* for the past simple, *has* or *have* for the present perfect, *is* or *are* for *be*. Ask students to name the auxiliary before they write the sentence.',
    'With *not until* and *only when*, the inversion comes in the **second** clause: *Not until it closed did people realise…* Students often invert the first clause instead.',
    'Fronting a complement (*Central to this is…*, *Gone are the days…*) inverts the subject and *be*, with no extra auxiliary, and the verb agrees with the subject that follows: *Gone **are** the days*.',
    'One or two inversions in a paragraph give emphasis; five sound like a speech. When students upgrade the paragraph, ask them to choose the one point that most deserves the spotlight.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What has changed most in your town or family in the last twenty years?* Students answer plainly. Rewrite one answer on the board with an inversion (*Never have so many…*) and ask what difference it makes.' },
    { min: 8, title: 'The right order', md: 'Show board page 1. Students choose the correct form and name the auxiliary in each sentence.' },
    { min: 9, title: 'Build and fix', md: 'Show board page 2. Students build the sentences, leaving out the two extra words, then fix the mistakes.' },
    { min: 15, title: 'Exam corner', md: 'Show board page 3: C2 Proficiency Reading and Use of English Part 4. Students complete the six items alone in about eight minutes and count their words. Check with a mark for each half of an answer.' },
    { min: 18, title: 'Activity', md: 'Use the activity for your class size below, with the paragraph on board page 4.' },
    { min: 5, title: 'Close', md: 'Each student reads out the one inverted sentence they are proudest of from the activity. Set the homework.' },
  ],
  board: [
    { title: 'The right order', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the correct form.', items: [
        { q: 'Not until the factory closed ___ how much it had shaped the town.', o: ['did people realise', 'people realised', 'had people realise'], why: 'With *not until*, the inversion is in the second clause, with *did* for the past simple.' },
        { q: 'So strong ___ the attachment to the old quarter that families return every weekend.', o: ['is', 'it is', 'are'], why: '*So* + adjective first, then *be* + subject: *So strong is the attachment…* The subject is singular.' },
        { q: 'Gone ___ the days when everyone in the valley spoke the same dialect.', o: ['are', 'have', 'is'], why: 'A fronted complement: *be* comes before the subject and agrees with it (*the days are gone*).' },
        { q: 'Only by learning the language ___ to feel at home.', o: ['did she begin', 'she began', 'she did begin'], why: '*Only by* + *-ing*, then *did* + subject + base form.' },
        { q: 'Under no circumstances ___ photographed without permission.', o: ['should visitors be', 'visitors should be', 'visitors are'], why: 'A negative phrase first, then the modal before the subject.' },
        { q: 'Equally important ___ the role of grandparents in passing on the language.', o: ['is', 'are', 'it is'], why: 'A fronted adjective, then *be* + subject. The subject is *the role*, so *is*.' },
      ] },
    ] },
    { title: 'Build and fix', blocks: [
      { t: 'ex', kind: 'build', h: 'Build the emphatic sentence. Two words do not belong.', items: [
        { a: 'Not only did the move change their diet, but it changed their language too.', extra: ['had', 'was'], why: '*Not only* + *did* + subject + base form, then *but*.' },
        { a: 'Little did they know how much they would miss the sea.', extra: ['knew', 'not'], why: '*Little* + *did* + subject + *know*: they had no idea.' },
        { a: 'Central to her argument is the idea that identity is chosen.', extra: ['it', 'are'], why: 'A fronted complement, then *is* + subject, with no *it*.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Only when I left home [I understood] how much I owed my parents.', a: ['did I understand'], why: 'The inversion comes after the *only when* clause, with *did*.' },
        { s: 'Such was the pull of home [as] he returned every summer.', a: ['that'], why: '*Such is / was* + noun phrase + *that* + result.' },
        { s: 'Never before [the city had] been so divided.', a: ['had the city'], why: 'Auxiliary before the subject after *never before*.' },
        { s: 'Nowhere is the change more visible [as] in the old market.', a: ['than'], why: '*Nowhere is… more… than*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. Do not change the word given. Use between three and eight words, including the word given.', items: [
        { q: 'The town had never been so divided before.', cue: 'never', gap: '___ so divided.', a: ['Never had the town been', 'Never before had the town been'], why: 'Two marks: *never* first, and the auxiliary *had* before the subject.' },
        { q: 'People only realised how much the old market meant to them after it had closed.', cue: 'until', gap: 'Not ___ how much the old market meant to them.', a: ['until it had closed did people realise', 'until it closed did people realise', 'until after it had closed did people realise', 'until it had closed did they realise'], why: '*Not until* + clause, then *did* + subject + base form.' },
        { q: 'Older residents do not just speak the dialect; they write poetry in it too.', cue: 'only', gap: 'Not ___ the dialect, but they write poetry in it too.', a: ['only do older residents speak'], why: '*Not only* + *do* + subject + base form.' },
        { q: 'The attraction of city life is so strong that few young people stay in the village.', cue: 'such', gap: '___ city life that few young people stay in the village.', a: ['Such is the attraction of', 'Such is the pull of', 'Such is the appeal of'], why: '*Such is* + noun phrase + *that*: the noun phrase replaces *so strong*.' },
        { q: 'The festival has changed most clearly in the way it is funded.', cue: 'nowhere', gap: '___ than in the way it is funded.', a: ['Nowhere has the festival changed more clearly', 'Nowhere has the festival changed more'], why: '*Nowhere* + auxiliary + subject + comparative + *than*. Keep within eight words.' },
        { q: 'The question of who belongs is at the heart of the debate.', cue: 'central', gap: '___ the question of who belongs.', a: ['Central to the debate is', 'Central to this debate is'], why: 'A fronted complement: *Central to the debate is* + subject.' },
      ] },
      { t: 'tip', art: 'owl', md: 'When the key word is *never*, *little*, *only*, *until*, *such* or *nowhere*, expect inversion. Then check two things: the **auxiliary** matches the tense of the first sentence, and the answer stays within **eight words**, counting contractions as two.' },
    ] },
    { title: 'Upgrade the paragraph', blocks: [
      { t: 'reading', title: 'A plain paragraph', md: 'Families who move abroad keep their language for a surprisingly long time. This is very clear at family celebrations. The first generation rarely stops speaking it at home. Their children often answer in the new language, and they only start to value the old one when they have children of their own. The question of what to pass on is at the heart of these choices. The days when newcomers were expected to forget their past have gone.' },
      { t: 'examples', items: [
        { s: '**Nowhere is this more evident than** at family celebrations.', n: 'Fronting that links back to the sentence before.' },
        { s: '**Rarely does** the first generation stop speaking it at home.', n: 'A negative adverbial for emphasis.' },
        { s: '**Only when** they have children of their own **do they start** to value it.', n: 'The inversion after the *only when* clause.' },
        { s: '**Gone are the days when** newcomers were expected to forget their past.', n: 'A fronted complement to close the paragraph.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Upgrade the paragraph', md: 'The student rewrites the plain paragraph on board page 4 on the board, using three different patterns from the class and choosing where the emphasis should fall. Read it aloud together and ask which inversion does the most work and whether any one is too much. Then the student writes three sentences of their own about how their town has changed, each with a different pattern, and you correct the auxiliaries together.' },
    small: { title: 'Emphasis relay', md: 'Students work in pairs, or in a three. Each pair rewrites the plain paragraph on board page 4 with three different patterns, choosing where the emphasis should fall; in a three, the third student checks every auxiliary and the agreement of *be*. Pairs read their versions aloud and the others vote on which inversion does the most work in each version. With two students, each rewrites half the paragraph and they check each other’s auxiliaries.' },
  },
  homework: { book: 'u14:p4', md: 'Finish lesson 3 of unit 14 in the book if needed. Write a paragraph of 120 to 150 words for an essay titled *Does a globalised world make cultural identity stronger or weaker?*, with at least three different patterns from this class. Then do lesson 4 of unit 14 (Between two cultures).' },
};
