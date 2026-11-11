// English C2, class 18 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u4:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c18',
  focus: 'By the end every student can follow how a literature review turns many studies into one argument (grouping findings, showing disagreement, explaining it, naming a gap) and uses the links between paragraphs (reference words such as *that questioning* and *on this view*, linkers, repeated ideas) to rebuild a text in the format of C2 Proficiency Reading and Use of English Part 6. The speaking goal: summarise a body of research in a minute, with the stance language of unit 4.',
  tips: [
    'In Part 6 the right paragraph fits both sides of the gap. Make students say aloud what links it to the paragraph before and to the one after; if they can only name one link, they are not finished.',
    'The extra paragraph is always on topic. Ask students to find it first in a second reading: it is the one whose first words point to nothing in the text.',
    'Reference words at the start of a paragraph (*That questioning…*, *On this view…*, *Such findings…*) are the fastest clues. Have students underline every one before they choose anything.',
    'Bring back units 4.1 and 4.2 during the reading: each time the review hedges, boosts or reports, ask why the writer chose that word.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Do you think speaking two languages makes people think differently, or better? Where does your belief come from?* Note whether students cite studies, experience or something they read.' },
    { min: 8, title: 'The language of a review', md: 'Show board page 1. Students match each function with the phrase, then suggest one more phrase for two of the functions.' },
    { min: 17, title: 'Exam corner', md: 'Show board page 2: C2 Proficiency Reading and Use of English Part 6, shortened to five gaps. Students read the main text first (three minutes), then choose the paragraphs alone (eight minutes). Check together, naming the link on both sides of each gap.' },
    { min: 10, title: 'Inside the review', md: 'Show board page 3. Students tap the stance language, then answer the questions on the writer’s argument.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Each student says in one sentence what the review concludes, with a hedge. Set the homework.' },
  ],
  board: [
    { title: 'The language of a review', blocks: [
      { t: 'ex', kind: 'match', h: 'Match each job in a literature review with a phrase that does it.', pairs: [
        ['introducing the field', 'Few claims in this area have travelled as far as…'],
        ['summing up early research', 'Early studies appeared to bear this out.'],
        ['showing disagreement', 'This view has not gone unchallenged.'],
        ['explaining a difference between studies', 'One explanation for the variation lies in…'],
        ['weighing the evidence', 'Taken together, the evidence does not support…'],
        ['identifying a gap', 'Comparatively few studies have followed…'],
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 6', blocks: [
      { t: 'reading', title: 'Two languages, one mind? A review of the evidence', md: 'For three decades, few claims in the psychology of language have travelled as far beyond the laboratory as the idea that speaking two languages sharpens the mind. The so-called bilingual advantage holds that, because bilinguals must constantly hold one language back while using the other, they develop stronger control over their attention, and that this benefit extends to tasks that have nothing to do with language.\n\n[gap one]\n\nSuch findings were widely reported, and they shaped the advice given to parents and teachers in many countries. Yet the very success of the idea may have made researchers slower to question it.\n\n[gap two]\n\nA second objection concerns who was being compared. In many of the early studies, the bilingual groups differed from the monolingual ones in more than language.\n\n[gap three]\n\nDefenders of the hypothesis do not accept that this settles the matter. They maintain that bilingualism is not a single experience, and that grouping very different speakers together is bound to hide real effects.\n\n[gap four]\n\nTaken together, the evidence does not support the strong claim with which the debate began. Equally, it does not show that bilingualism has no effect on thinking at all.\n\n[gap five]' },
      { t: 'reading', title: 'The removed paragraphs', md: '**A.** That questioning began in earnest about a decade ago. Several large studies, with thousands of participants rather than dozens, failed to find any advantage, and critics contend that the original effects were at least partly a product of small samples.\n\n**B.** On this view, what matters is not whether a person speaks two languages but how they use them: how often they switch, in how many settings and from what age. Studies that measure these differences have produced more promising, if still inconsistent, results.\n\n**C.** Learning a second language is, of course, valuable for reasons that have nothing to do with attention. It opens the way to other cultures and other literatures and, for many people, to better jobs.\n\n**D.** Early studies appeared to bear this out. Bilingual children and adults performed better on tasks that require ignoring distracting information, and some researchers went further, positing that bilingualism might delay the onset of dementia by several years.\n\n**E.** What it does suggest is that any advantage is smaller and more conditional than was once believed, and may be confined to particular groups and particular tasks. Comparatively few studies have followed the same speakers over many years, and this remains a notable gap in the literature.\n\n**F.** Bilingual participants were often recent immigrants or the children of highly educated families, and either group may differ from the wider population in income, schooling or motivation. Once such factors are taken into account, the advantage tends to shrink, and in some studies it disappears.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 6), shortened to five gaps: five paragraphs have been removed from the review. Choose from paragraphs A to F the one which fits each gap. There is one extra paragraph which you do not need to use.', items: [
        { q: 'Which paragraph fits gap one?', o: ['D', 'A', 'B', 'C', 'E', 'F'], why: '*This* in *bear this out* points back to the claimed advantage; *Such findings* after the gap picks up the early results in D.' },
        { q: 'Which paragraph fits gap two?', o: ['A', 'B', 'C', 'D', 'E', 'F'], why: '*That questioning* answers *slower to question it*; A gives the first objection, so *A second objection* can follow.' },
        { q: 'Which paragraph fits gap three?', o: ['F', 'A', 'B', 'C', 'D', 'E'], why: 'F explains how the groups *differed in more than language*; *this* in *this settles the matter* points to the shrinking advantage.' },
        { q: 'Which paragraph fits gap four?', o: ['B', 'A', 'C', 'D', 'E', 'F'], why: '*On this view* refers to the defenders’ claim that bilingualism is not a single experience.' },
        { q: 'Which paragraph fits gap five?', o: ['E', 'A', 'B', 'C', 'D', 'F'], why: '*What it does suggest* follows *it does not show*; E ends the review by naming a gap in the research.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Method for **Part 6**: read the main text first to follow the argument; underline the reference words and linkers at the start and end of every paragraph; fill the gaps you are sure of first; then check each answer against the paragraph **after** the gap. The extra paragraph here, C, is on topic but links to nothing.' },
    ] },
    { title: 'Inside the review', blocks: [
      { t: 'ex', kind: 'spot', h: 'Tap the language of stance: hedges, boosters and reporting verbs.', items: [
        { s: 'Early studies [appeared to] bear this out.', why: 'A hedge: the reviewer does not accept the early results as fact.' },
        { s: 'Some researchers went further, [positing] that bilingualism might delay the onset of dementia.', why: '*Posit*: put forward an idea to build on, not prove it.' },
        { s: '[Critics contend] that the original effects were a product of small samples.', why: '*Contend*: a firm position held against others.' },
        { s: 'Once such factors are taken into account, the advantage [tends to] shrink.', why: 'A frequency hedge: in most studies, not all.' },
        { s: 'Any advantage [may be] confined to particular groups.', why: 'A certainty hedge on the reviewer’s own interpretation.' },
      ] },
      { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
        { q: 'What is the reviewer’s overall conclusion?', o: ['The effect, if it exists, is smaller and narrower than first claimed.', 'Bilingualism has no effect on thinking.', 'The early studies were deliberately misleading.'], why: '*Smaller and more conditional than was once believed*; the reviewer rejects both extremes.' },
        { q: 'Why does the reviewer mention the advice given to parents and teachers?', o: ['To show how far the idea spread before it was tested properly.', 'To recommend that the advice be changed at once.', 'To prove that the advantage is real.'], why: 'It shows the reach of the idea and leads into *slower to question it*.' },
        { q: 'What do the defenders of the hypothesis argue?', o: ['Studies should measure how people use their languages.', 'Large studies are less reliable than small ones.', 'Immigrant groups should be left out of research.'], why: 'They say bilingualism is not a single experience, and B describes how to measure the differences.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Seminar summary', md: 'The student summarises the review in about a minute, as in a seminar: the original claim, the objections, the defence, the conclusion and the gap. Use one hedge, one booster and two reporting verbs. Then act as a sceptical seminar leader and ask two questions (*Is a small sample always a problem? Which side do you find more convincing, and why?*). Finish with the student naming one study they would design to fill the gap.' },
    small: { title: 'Build a review', md: 'Give the group a question everyone has views on (for example *Does homework improve results?* or *Do open-plan offices help people work together?*). Each student contributes one finding they have read or heard, saying where it comes from. Together, group the findings by theme and agree where they disagree and why. One student presents the result as a short oral review in the order of board page 1, ending with a gap; another student names the hedge and reporting verbs the presenter used.' },
  },
  homework: { book: 'u4', md: 'Finish lesson 4 of unit 4 if needed and do the unit 4 test. Then write the opening paragraph of a literature review (about 150 words) on the question you discussed in class: introduce the field, sum up what is generally found, and show where the disagreement lies, with at least two hedges and two reporting verbs.' },
};
