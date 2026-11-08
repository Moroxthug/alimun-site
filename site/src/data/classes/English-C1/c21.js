// English C1, class 21 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u5:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c21',
  focus: 'By the end every student can turn verbs and adjectives into nouns to write in the compact, impersonal style of formal English (*The introduction of the rules led to a fall in complaints*), knows the preposition each noun takes (*a rise in*, *the effect on*, *reliance on*, *opposition to*) and the verbs that go with them (*carry out research*, *pose a risk*, *raise concerns*, *reach a conclusion*). The speaking goal: present a short summary of a scientific finding in a formal register, then say the same thing in everyday English.',
  tips: [
    'Show why formal English uses nouns: a process becomes a subject, so one sentence can say what used to take two. Then show the limit: three *of*-phrases in a row are tiring to read.',
    'The prepositions cause most of the mistakes: *a reduction in* pollution (but *a reduction of 10%*), *the impact on*, *opposition to*, *reliance on*. Write them with the noun every time.',
    '*Research* is uncountable and goes with *carry out* or *conduct*, never *make a research*.',
    'Spelling changes in word formation are where marks are lost: *analyse*, *analysis*, *analyses*; *rely*, *reliance*, *reliability*; *justify*, *justification*. Ask students to spell them aloud.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Write two sentences on the board: *Scientists found the virus in 2010, so hospitals changed how they test patients.* and *The discovery of the virus in 2010 led to a change in testing.* Ask: *Where would you read each one? Which is easier to build on?*' },
    { min: 12, title: 'Nouns and their partners', md: 'Show board page 1. Students complete the gaps from the bank, then choose the verbs that go with each noun.' },
    { min: 10, title: 'Make it formal', md: 'Show board page 2. Students rewrite the sentences alone, then compare versions. Accept any correct formal sentence.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 3. Students decide the word class first, then form the words alone. Reveal the answers and check spelling.' },
    { min: 5, title: 'Close', md: 'Each student says one formal sentence with a noun and its preposition from today. Set the homework.' },
  ],
  board: [
    { title: 'Nouns and their partners', blocks: [
      { t: 'ex', kind: 'bank', h: 'Complete each sentence with a noun from the bank.', extra: ['refusal', 'emphasis'], items: [
        { q: 'There has been a sharp ___ in the number of patients waiting for surgery.', a: 'increase', why: 'A change in an amount: *an increase in*.' },
        { q: 'The report warns against our ___ on a single supplier of the drug.', a: 'reliance', why: '*Reliance on*: from *rely on*.' },
        { q: 'Local ___ to the new laboratory has grown since the leak.', a: 'opposition', why: '*Opposition to*: from *oppose*.' },
        { q: 'The ___ of the new test made diagnosis much faster.', a: 'introduction', why: 'A process as the subject: *the introduction of*.' },
      ] },
      { t: 'ex', kind: 'colloc', h: 'Which verbs go naturally with the noun?', items: [
        { key: 'research', o: ['carry out', 'conduct', 'fund', 'make', 'do a'], a: [0, 1, 2], why: 'You *carry out*, *conduct* or *fund* research; it is uncountable, so no *a*, and not *make*.' },
        { key: 'a risk', o: ['pose', 'reduce', 'take', 'raise', 'do'], a: [0, 1, 2], why: 'Something *poses* a risk; you *reduce* or *take* a risk. You *raise* concerns.' },
        { key: 'a conclusion', o: ['reach', 'draw', 'come to', 'make up', 'give'], a: [0, 1, 2], why: 'You *reach*, *draw* or *come to* a conclusion.' },
      ] },
    ] },
    { title: 'Make it formal', blocks: [
      { t: 'ex', kind: 'transform', h: 'Rewrite each sentence in a more formal style. Start with the words given.', items: [
        { q: 'Because the hospital closed, many patients had to travel further.', cue: 'The closure of the hospital', a: ['The closure of the hospital meant that many patients had to travel further.', 'The closure of the hospital forced many patients to travel further.', 'The closure of the hospital led to many patients having to travel further.'], why: '*Close* becomes *the closure of*, which becomes the subject.' },
        { q: 'Scientists analysed the samples, and this showed that the water was safe.', cue: 'An analysis of the samples', a: ['An analysis of the samples showed that the water was safe.'], why: 'Two clauses become one with *an analysis of*.' },
        { q: 'If we depend too much on antibiotics, they will work less well.', cue: 'Excessive dependence on antibiotics', a: ['Excessive dependence on antibiotics will reduce their effectiveness.', 'Excessive dependence on antibiotics will make them less effective.', 'Excessive dependence on antibiotics will lead to a decline in their effectiveness.'], why: '*Depend on* becomes *dependence on*; the result can be a noun too.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Keep one or two nouns per sentence and let a strong verb join them: *led to*, *resulted in*, *gave rise to*, *posed*. A string such as *the reduction of the use of the testing of animals* is correct but hard to read.' },
    ] },
    { title: 'Exam corner: Use of English Part 3', blocks: [
      { t: 'ex', kind: 'wordform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 3): use the word in capitals to form a word that fits the gap.', items: [
        { q: 'The ___ of the results took the team several months.', base: 'analyse', a: ['analysis'], why: 'A noun after *The*: *analysis*.' },
        { q: 'Many people question the ___ for testing cosmetics on animals.', base: 'justify', a: ['justification'], why: 'A noun after *the*, followed by *for*: *justification*.' },
        { q: 'The drug was withdrawn because of its ___ side effects.', base: 'predict', a: ['unpredictable'], why: 'An adjective with a negative meaning: prefix and suffix.' },
        { q: 'The team doubted the ___ of the older data.', base: 'rely', a: ['reliability'], why: 'A noun meaning how far it can be trusted: *reliability*.' },
        { q: 'There is growing ___ that the treatment could help older patients.', base: 'recognise', a: ['recognition'], why: 'A noun after *growing*: *recognition*.' },
        { q: 'The new law places strict ___ on the use of the technique.', base: 'restrict', a: ['restrictions'], why: '*Place restrictions on*: a plural noun after *strict*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 3 decide the word class first (noun, adjective, adverb), then whether it is positive or negative, singular or plural. Many answers need two changes, and a word that is almost right scores nothing, so check the spelling.' },
    ] },
  ],
  activities: {
    one: { title: 'Two registers', md: 'Give the student a short everyday account of a scientific finding in the chat (*They found that people who sleep less eat more sugar*). The student presents it in one minute as if at a conference, with at least four nouns and their prepositions, then explains it again to a friend in plain English. Compare the two and note three useful noun phrases.' },
    small: { title: 'Formal relay', md: 'Paste six informal sentences in the chat. Students take turns to make each one formal with a noun as the subject; the next student must use a different joining verb (*led to*, *resulted in*, *gave rise to*). The group checks each preposition before moving on.' },
    group: { title: 'Abstract writers', md: 'Breakout rooms of three get a different invented study in the chat (sleep, city noise, school meals). Each room writes a three-sentence formal summary as at the start of a research paper. Bring everyone back; the class finds every noun and its preposition and votes for the clearest summary, not the longest.' },
  },
  homework: { book: 'u5:p2', md: 'Finish lesson 2 of unit 5 if needed, then do lesson 3 (It remains unclear whether). Write about 100 words summarising a news story about science or health in a formal style, with at least five nouns formed from verbs or adjectives, each with the right preposition.' },
};
