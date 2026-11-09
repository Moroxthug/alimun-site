// English C2, class 51 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u11:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c51',
  focus: 'By the end every student recognises nominalisation and the passive in scientific writing, knows why writers use them (compression, cohesion, an impersonal voice), uses the right preposition after the noun (*a rise in, reliance on, resistance to, awareness of*), and unpacks a dense sentence for a general reader: find the verbs hidden in nouns, ask who did what to whom, and make the main action the main verb with a real subject. Exam work: moving between verb and noun, active and passive, in the format of C2 Proficiency Reading and Use of English Part 4.',
  tips: [
    'Do not present nominalisation as bad style. Students need it for their own formal writing and for Part 4. The skill today is moving in both directions and choosing for the reader.',
    'The unpacking question is always the same: *Who did what?* Write it on the board and point to it every time a student keeps an agentless passive in the public version.',
    'Unpacked versions are longer but faster to read. If a student worries that their version has more words, time a reading of both aloud.',
    'In Part 4 the noun usually brings a preposition or a possessive with it (*the company’s failure to*, *a decision to*). Check that half of the answer separately: it is often the second mark.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Read aloud: *A decision was taken to implement a reduction in the frequency of bus services.* Ask: *What actually happened, and who did it?* Students say it in one plain sentence.' },
    { min: 7, title: 'Nouns and their prepositions', md: 'Show board page 1. Students write the prepositions alone, then make one sentence of their own with two of the nouns.' },
    { min: 12, title: 'Unpack it', md: 'Show board page 2. Students read the specialist version, then unpack the sentences. Compare versions aloud and ask which details had to be decided when the agent appeared.' },
    { min: 6, title: 'Who did it?', md: 'Show board page 3. Students choose the answers and discuss when an agentless passive is fair and when it is evasive.' },
    { min: 12, title: 'Exam corner', md: 'Show board page 4: C2 Proficiency Reading and Use of English Part 4. Eight minutes alone, then check together, counting words and giving two marks per item.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 4, title: 'Close', md: 'Each student says the specialist version’s first sentence in plain English in under fifteen words. Set the homework.' },
  ],
  board: [
    { title: 'Nouns and their prepositions', blocks: [
      { t: 'ex', kind: 'gap', h: 'Write the preposition that follows the noun.', items: [
        { q: 'Satellite data show a sharp rise ___ sea levels along the coast.', a: ['in'], why: '*A rise in* something.' },
        { q: 'The study’s heavy reliance ___ volunteers from one city limits its conclusions.', a: ['on', 'upon'], why: '*Reliance on* (from *rely on*).' },
        { q: 'There has been growing resistance ___ the new rules among farmers.', a: ['to'], why: '*Resistance to* (from *resist*, which takes no preposition).' },
        { q: 'The campaign has raised public awareness ___ the risks of sun damage.', a: ['of'], why: '*Awareness of* (from *be aware of*).' },
        { q: 'Several members raised an objection ___ the way the data were collected.', a: ['to'], why: '*An objection to* (from *object to*).' },
        { q: 'The government has announced a ban ___ the sale of single-use plastics.', a: ['on'], why: '*A ban on* something.' },
      ] },
    ] },
    { title: 'Unpack it', blocks: [
      { t: 'reading', title: 'For specialists', md: 'An evaluation of the effects of the introduction of a four-day school week on pupil attainment in rural districts was undertaken. A modest decline in mathematics performance was observed among younger pupils, whereas no significant change in reading outcomes was detected. Reductions in staff turnover were reported by participating schools, although the reliance of the study on self-reported data limits the strength of this conclusion.' },
      { t: 'ex', kind: 'transform', h: 'Unpack each sentence for a general reader. Start with the words given and use a verb for the main action.', items: [
        { q: 'A modest decline in mathematics performance was observed among younger pupils.', cue: 'Younger pupils', a: ['Younger pupils did slightly worse in maths.', 'Younger pupils did a little worse in maths.', 'Younger pupils did slightly worse at maths.', 'Younger pupils got slightly worse at maths.'], why: 'The hidden subject (*younger pupils*) and the hidden action (*did worse*); *modest* becomes *slightly*.' },
        { q: 'Reductions in staff turnover were reported by participating schools.', cue: 'The schools in the study', a: ['The schools in the study said that fewer teachers left.', 'The schools in the study said fewer teachers left.', 'The schools in the study said that fewer staff left.', 'The schools in the study reported that fewer teachers left.'], why: '*Reductions in staff turnover* = fewer teachers left; *were reported by* = said.' },
        { q: 'The reliance of the study on self-reported data limits the strength of this conclusion.', cue: 'Because the study relied', a: ['Because the study relied on what the schools said themselves, this conclusion is weaker.', 'Because the study relied on self-reported data, this conclusion is weaker.', 'Because the study relied on self-reported data, this conclusion is less certain.'], why: 'The noun *reliance* becomes the verb *relied*, and the abstract *limits the strength* becomes a plain judgement.' },
      ] },
    ] },
    { title: 'Who did it?', blocks: [
      { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
        { q: '*Mistakes were made in the handling of patient data.* Why might a reader find this sentence evasive?', o: ['It does not say who made the mistakes.', 'It is too informal for a report.', 'It uses the wrong tense.'], why: 'The passive and the noun *handling* both hide the agent.' },
        { q: 'In which sentence is the passive the natural choice?', o: ['Samples were collected from each site at dawn.', 'The trial was decided by us to be stopped.', 'It was thought by me that the results were wrong.'], why: 'In a methods section the researcher is obvious; the material and the process come first.' },
        { q: 'Which version is best for a newspaper reader?', o: ['After the town fitted brighter street lights, burglaries fell by a third.', 'A reduction in burglary rates was observed following the installation of improved street lighting.', 'Burglary reduction followed lighting improvement installation.'], why: 'A real subject, active verbs and the figure in plain words.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between three and eight words, including the word given.', items: [
        { q: 'The researchers decided to stop the trial early, which surprised everyone.', cue: 'DECISION', gap: 'The researchers’ ___ early surprised everyone.', a: ['decision to stop the trial', 'decision to end the trial', 'decision to halt the trial'], why: '*Decide to* becomes *decision to*; the possessive *researchers’* replaces the subject.' },
        { q: 'People think that the vaccine protects against the illness for about ten years.', cue: 'THOUGHT', gap: 'The vaccine ___ against the illness for about ten years.', a: ['is thought to protect', 'is thought to offer protection', 'is thought to give protection', 'is thought to provide protection'], why: 'Passive reporting with an infinitive: *is thought to*.' },
        { q: 'The samples were analysed, and this took longer than expected.', cue: 'ANALYSIS', gap: 'The ___ longer than expected.', a: ['analysis of the samples took'], why: 'The verb *analyse* becomes the noun *analysis of*, which is now the subject.' },
        { q: 'It was found that the patients who exercised recovered more quickly.', cue: 'RECOVERY', gap: 'The patients who exercised were found ___.', a: ['to make a quicker recovery', 'to make a faster recovery', 'to have made a quicker recovery', 'to have made a faster recovery', 'to make a speedier recovery'], why: '*Recover more quickly* becomes *make a quicker recovery*, with passive reporting.' },
        { q: 'Few people now doubt that the climate is changing.', cue: 'LITTLE', gap: 'There is ___ that the climate is changing.', a: ['now little doubt', 'little doubt now', 'now very little doubt', 'very little doubt now'], why: 'The verb *doubt* becomes the noun: *there is little doubt that*.' },
        { q: 'The company did not reveal the risks, and the public were angry about this.', cue: 'FAILURE', gap: 'The public were angry about ___ the risks.', a: ['the company’s failure to reveal', 'the failure of the company to reveal', 'the company’s failure to disclose', 'the failure of the company to disclose'], why: '*Did not reveal* becomes *the company’s failure to reveal*: a possessive and a *to*-infinitive.' },
      ] },
      { t: 'tip', art: 'owl', md: 'When the key word in **Part 4** is a noun (*DECISION, FAILURE, ANALYSIS*), the first sentence almost always has the verb or adjective behind it. Ask which preposition or infinitive the noun needs (*decision to*, *analysis of*), and who the possessive must be.' },
    ] },
  ],
  activities: {
    one: { title: 'The editor’s questions', md: 'You are a newspaper editor; the student has written the specialist paragraph on board page 2 and must explain it to you for tomorrow’s paper. Ask only short editor’s questions: *Who did that? How much worse? Is that a lot? Can we trust it?* The student answers each in plain English, then dictates a four-sentence public version that you write on the board. Compare the two versions: count the words, read both aloud and decide which details the plain version forced the student to commit to.' },
    small: { title: 'Two versions', md: 'Each student writes one dense specialist sentence about their own work, studies or a topic they know (with at least one nominalisation and one passive) and posts it in the chat. The next student unpacks it for a general reader aloud, asking the writer one question if they need to know *who did what*. The group decides whether the unpacked version keeps the meaning and whether it had to commit to anything the original left vague. Go round twice; the second time, students write a plain sentence and the next student makes it specialist.' },
  },
  homework: { book: 'u11:p2', md: 'Finish lesson 2 of unit 11 if needed, then do lesson 3 (Making evidence readable). Find a dense paragraph of about 80 words from a report, an abstract or an official letter in your field and rewrite it for a general reader. Bring both versions to the next class.' },
};
