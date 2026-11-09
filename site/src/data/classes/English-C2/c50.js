// English C2, class 50 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u11:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c50',
  focus: 'By the end every student reports research no stronger and no weaker than the evidence allows: cause against association (*causes, leads to, contributes to, is associated with, coincides with*), confounding factors and *controlling for* them, relative and absolute risk, the size of a change (*negligible, marginal, modest, marked, dramatic*), and the strength of the evidence (*robust, mixed, preliminary, anecdotal, has yet to be replicated*; *no evidence of harm* against *evidence of no harm*). Exam work: word formation in the format of C2 Proficiency Reading and Use of English Part 3.',
  tips: [
    'Give one test for every claim: *What kind of study could show that?* A survey or an observational study shows an association; only a controlled trial can show a cause. Students who ask this question rarely overclaim.',
    'Relative risk without absolute risk is the commonest distortion in the news. Whenever a student says *doubles the risk*, ask *From what, to what?*',
    '*Significant* in science means unlikely to be chance, not large. Spend a minute on it: C2 students often know the word and still read it the everyday way.',
    'Students may know these ideas in their own language from work or study. Use that, but keep the class on the English: the verbs, the adjectives of size and the patterns such as *control for* and *is associated with*.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Write a headline on the board: *Living near a park makes you happier.* Ask: *What would a study need to do to prove that? What else could explain it?* Collect the students’ alternative explanations.' },
    { min: 8, title: 'Cause or association?', md: 'Show board page 1. Students sort the sentences alone, then name the verb or phrase that decided each one.' },
    { min: 10, title: 'Size and risk', md: 'Show board page 2. Students choose the words, then explain one risk figure aloud in both relative and absolute terms.' },
    { min: 8, title: 'Claim it right', md: 'Show board page 3. Students fix the overclaims and mistakes, then read each corrected sentence as a careful reporter would.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 4: C2 Proficiency Reading and Use of English Part 3. Six minutes alone, then check spelling and count the changes in each word.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Each student rewrites the warm-up headline so that it is accurate and still worth reading. Set the homework.' },
  ],
  board: [
    { title: 'Cause or association?', blocks: [
      { t: 'ex', kind: 'sort', h: 'Does the sentence claim a cause, or only an association?', groups: ['A cause', 'Only an association'], explain: ['groups'], items: [
        { s: 'Prolonged exposure to loud noise damages the inner ear.', g: 0, why: 'A direct causal verb: *damages*.' },
        { s: 'In the trial, the new treatment led to a marked reduction in pain.', g: 0, why: '*Led to*, in a trial: a cause that has been tested.' },
        { s: 'Removing lead from petrol gave rise to a fall in blood lead levels.', g: 0, why: '*Gave rise to*: a cause, often through several steps.' },
        { s: 'Children who eat with their families tend to do better at school.', g: 1, why: '*Tend to*: a pattern, not an explanation. Family income could explain both.' },
        { s: 'Higher coffee consumption is associated with a lower risk of liver disease.', g: 1, why: '*Is associated with*: they occur together; the cause is not shown.' },
        { s: 'The rise in hospital admissions coincided with the first week of the heatwave.', g: 1, why: '*Coincided with*: they happened at the same time, nothing more.' },
      ] },
    ] },
    { title: 'Size and risk', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the word that reports the figure accurately.', items: [
        { q: 'A side effect appeared in two of every ten thousand patients on the new drug and in one of every ten thousand on the old one. The relative risk doubled, but the absolute risk remained ___.', o: ['very small', 'substantial', 'dramatic'], why: 'From one in ten thousand to two in ten thousand: double, and still rare.' },
        { q: 'A change of less than half a per cent, which no patient would notice, is ___.', o: ['negligible', 'marked', 'appreciable'], why: '*Negligible*: so small that it hardly matters.' },
        { q: 'Average sleep rose by four minutes a night: a ___ improvement at best.', o: ['marginal', 'dramatic', 'sharp'], why: '*Marginal*: very slight. *At best* signals that it may be even less.' },
        { q: 'Reported cases fell from four hundred to one hundred in a year: the number fell by ___.', o: ['three quarters', 'half', 'a quarter'], why: 'A fall of three hundred out of four hundred: three quarters. *Halved* would mean two hundred.' },
        { q: 'Once age and income were ___ for, the difference between the groups disappeared.', o: ['controlled', 'checked', 'allowed'], why: '*Control for* a confounding factor: remove its effect in the analysis. (*Allow for* is possible in everyday English, but not the research term.)' },
      ] },
    ] },
    { title: 'Claim it right', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the overclaim or the mistake.', items: [
        { s: 'One small study [proves] that a daily walk improves memory.', a: ['suggests', 'indicates'], why: 'One small study can suggest; nothing in science is proved by a single study.' },
        { s: 'The finding is striking, but it has yet to be [copied] by other teams.', a: ['replicated'], why: '*Replicated* is the research term: confirmed by other researchers repeating the study.' },
        { s: 'Most of the evidence for the diet is [anecdotic].', a: ['anecdotal'], why: '*Anecdotal*: based on personal stories rather than systematic data.' },
        { s: 'The effect was statistically significant but [huge] in practical terms, changing scores by less than one per cent.', a: ['marginal', 'negligible', 'slight', 'small'], why: '*Significant* means unlikely to be chance; the effect itself can be tiny.' },
        { s: 'Nobody has studied the side effects yet, so there is [evidence of no harm].', a: ['no evidence of harm'], why: 'Nobody has looked: *no evidence of harm*. *Evidence of no harm* would mean people had looked and found nothing.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 3', blocks: [
      { t: 'ex', kind: 'wordform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 3): read the text about a study on parks and mood. Use the word in capitals to form a word that fits each gap.', items: [
        { q: 'Claims about the benefits of green space have become almost ___ in the health pages of newspapers.', base: 'escape', a: ['inescapable'], why: 'Two changes: the prefix *in-* and the suffix *-able*: impossible to avoid.' },
        { q: 'The latest study found that people living near a park reported ___ fewer days of low mood.', base: 'measure', a: ['measurably'], why: 'An adverb before *fewer*: *measurably*, by an amount that can be measured.' },
        { q: 'Yet the ___ of such findings is often lost on the way to the headline.', base: 'subtle', a: ['subtlety'], why: 'A noun after *the*; note the spelling, which keeps the silent *b*.' },
        { q: 'Homes near parks tend to cost more, and wealth is itself a powerful ___ of good health.', base: 'predict', a: ['predictor'], why: 'A noun for the thing that predicts: *a predictor of*.' },
        { q: 'Once income had been controlled for, the difference shrank almost to ___.', base: 'significant', a: ['insignificance'], why: 'Two changes: a negative prefix and a noun suffix: *shrink to insignificance*.' },
        { q: 'None of this makes the link ___; it may well prove to be real.', base: 'meaning', a: ['meaningless'], why: 'An adjective after *makes the link*: *meaningless*.' },
        { q: 'For the moment, however, the evidence remains largely ___.', base: 'conclude', a: ['inconclusive'], why: 'A negative prefix and an adjective suffix: the evidence does not settle the question.' },
        { q: 'Readers would do well to treat any headline that promises a cure with a healthy degree of ___.', base: 'sceptic', a: ['scepticism', 'skepticism'], why: 'A noun after *a degree of*; *scepticism* in British spelling.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 3** read the whole text once before you fill any gap: the meaning of the paragraph tells you whether a word must be negative (*inconclusive*, *insignificance*). Then check the word class from the words on either side, and the spelling letter by letter.' },
    ] },
  ],
  activities: {
    one: { title: 'On air', md: 'You are a radio presenter; the student is the researcher behind three studies you describe in one line each (*people who sleep with the window open catch fewer colds*; *a new pill halves the risk of migraines, from four in a hundred to two*; *children who learn music get better maths grades*). For each one, ask the presenter’s questions: *So does it work? Should I start tonight? Is that a big effect?* The student answers in about a minute, with the right strength: cause or association, relative and absolute risk, how strong the evidence is. Note the verbs they choose and upgrade two answers together at the end.' },
    small: { title: 'Headline court', md: 'Each student invents a short study in one sentence (who was studied and what was found) and writes an exaggerated headline for it in the chat. The next student plays the researcher and corrects the headline on air in three or four sentences, using at least one phrase for the size of the effect and one for the strength of the evidence. The group then votes for the corrected headline that is both accurate and still worth reading. Go round twice.' },
  },
  homework: { book: 'u11:p1', md: 'Finish lesson 1 of unit 11 if needed, then do lesson 2 (Unpacking dense prose). Find a news story about a health or science study, or use one your teacher sends, and write about 120 words saying whether the headline matches the study: cause or association, the size of the effect and how strong the evidence is.' },
};
