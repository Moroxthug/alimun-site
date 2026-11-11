// English C1, class 43 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u10:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c43',
  focus: 'By the end every student can read and build complex noun phrases: an adverb and participle before the noun (*a widely held belief*), a participle phrase or adjective after it (*the people most affected*, *the person responsible*), and a to-infinitive or that-clause that completes it (*the decision to leave*, *the belief that…*). The speaking goal: turn a chatty two-sentence idea into one precise, formal sentence and say it naturally.',
  tips: [
    'Train students to find the head noun first. In *the growing number of students reporting anxiety*, the head is *number*, so the verb that follows is singular: *is rising*.',
    'The adverb goes before the participle (*a carefully designed study*), and *-ly* adverbs never take a hyphen. Compounds with *well*, *ill* and *long* take one before the noun but not after a verb: *a well-known effect*, *the effect is well known*.',
    'Position changes meaning: *the people concerned* are the ones involved, *concerned people* are worried. Students who translate from their own language often put *involved* or *responsible* before the noun.',
    'Keep the register in mind: dense noun phrases suit reports and essays. In speaking, one well-built phrase per sentence is plenty.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Write on the board: *Lots of people think you need eight hours of sleep. They’re wrong.* Ask students to say it as one sentence in a formal report. Collect their versions before showing any rule.' },
    { min: 12, title: 'Building the phrase', md: 'Show board page 1. Students choose the correct noun phrases, then say for each one where the head noun is.' },
    { min: 10, title: 'Fix the phrase', md: 'Show board page 2. Students correct the mistakes alone, then explain the rule to a partner in one sentence.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 4. Students complete the sentences alone, count their words, then compare. Reveal the answers.' },
    { min: 5, title: 'Close', md: 'Each student says one formal sentence about their own wellbeing with a noun phrase from today (*My decision to stop checking emails at night…*). Set the homework.' },
  ],
  board: [
    { title: 'Building the phrase', blocks: [
      { t: 'table', caption: 'Before and after the head noun', explain: ['head', 'col2'], head: ['Spoken style', 'Noun phrase', 'What changed'], rows: [
        ['Many people believe it.', 'a widely held belief', 'adverb + participle before the noun'],
        ['the workers who were hit worst', 'the workers worst hit', 'a reduced relative after the noun'],
        ['She decided to resign.', 'her decision to resign', 'noun + to-infinitive'],
        ['People think screens harm sleep.', 'the idea that screens harm sleep', 'noun + that-clause'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the correct noun phrase.', items: [
        { q: 'The report focuses on ___ by the new shift system.', o: ['the nurses most affected', 'the most affected nurses by it', 'the nurses affected most the'], why: 'Noun, then the adverb and the participle phrase after it.' },
        { q: 'It was ___ study, with over two thousand participants.', o: ['a carefully designed', 'a designed carefully', 'a carefully-designed'], why: 'Adverb before the participle, and no hyphen after an *-ly* adverb.' },
        { q: 'The manager wants to speak to ___ for the delay.', o: ['the person responsible', 'the responsible person', 'the person responsibly'], why: 'After the noun, *responsible* means the one to blame.' },
        { q: 'There is ___ that working longer hours makes people more productive.', o: ['a common assumption', 'a common assumption of', 'a commonly assumption'], why: 'Noun + that-clause, with an adjective before the noun.' },
        { q: 'He finally booked ___ holiday.', o: ['a ten-day', 'a ten-days', 'a ten days'], why: 'Number + noun before another noun stays singular, with a hyphen.' },
      ] },
    ] },
    { title: 'Fix the phrase', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'All the [involved people] were invited to the meeting.', a: ['people involved'], why: '*Involved* meaning *taking part* goes after the noun.' },
        { s: 'It is a [widely-accepted] view that walking improves mood.', a: ['widely accepted'], why: 'No hyphen after an *-ly* adverb.' },
        { s: 'Her [ability of staying] calm under pressure is remarkable.', a: ['ability to stay'], why: '*Ability* takes a to-infinitive.' },
        { s: 'The link between diet and mood is [well-established] in the research.', a: ['well established'], why: 'After a verb, *well established* has no hyphen.' },
        { s: 'The growing number of people working from home [are] changing city centres.', a: ['is'], why: 'The head noun is *number*: a singular verb.' },
      ] },
      { t: 'tip', art: 'owl', md: 'When a sentence feels too long to follow, underline the head noun and the main verb. Everything else is detail about one of them.' },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. Write between three and six words, including the word given.', items: [
        { q: 'Most people believe that stress is always harmful. (It is a ___ that stress is always harmful.)', cue: 'HELD', a: ['It is a widely held belief that stress is always harmful.', 'It is a commonly held belief that stress is always harmful.', 'It is a generally held belief that stress is always harmful.'], why: 'Adverb + *held* + *belief*, followed by the that-clause.' },
        { q: 'Who is to blame for the mistake in the figures? (Who is ___ the mistake in the figures?)', cue: 'RESPONSIBLE', a: ['Who is the person responsible for the mistake in the figures?', 'Who is the one responsible for the mistake in the figures?'], why: '*The person responsible for*: the adjective follows the noun.' },
        { q: 'She chose to leave her job, and that surprised all her colleagues. (Her ___ surprised all her colleagues.)', cue: 'DECISION', a: ['Her decision to leave her job surprised all her colleagues.'], why: 'The verb *chose to leave* becomes the noun phrase *decision to leave*.' },
        { q: 'He can switch off completely at weekends, which keeps him healthy. (His ___ at weekends keeps him healthy.)', cue: 'ABILITY', a: ['His ability to switch off completely at weekends keeps him healthy.'], why: '*Can* becomes the noun *ability* + to-infinitive.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 4 of C1 Advanced you write three to six words, and the key word must not change. Many items ask you to turn a verb or adjective into a noun phrase, so ask yourself what the head noun is before you write.' },
    ] },
  ],
  activities: {
    one: { title: 'From chat to report', md: 'The student tells you, informally, about a habit that affects their wellbeing (sleep, screens, exercise). Together, rewrite their two best sentences as formal noun phrases for a report, then the student reads the report version aloud. Finish with three sentences of their own, corrected on the spot.' },
    small: { title: 'Find the head', md: 'Each student writes one long noun phrase in the chat about health or work (*the small number of employees taking their full holiday*). The others name the head noun and add a verb to make a full sentence. A point for each correct head and each correct verb agreement.' },
    group: { title: 'Headline rooms', md: 'Breakout rooms of three get a short spoken sentence in the chat (*Loads of teenagers say they can’t sleep, and it’s getting worse*). Each room turns it into a formal one-line news summary built on a noun phrase. Bring everyone back; the class votes for the clearest summary and corrects any hyphen or word-order mistakes.' },
  },
  homework: { book: 'u10:p1', md: 'Finish lesson 1 of unit 10 if needed, then do lesson 2 (Conducive to, refrain from). Rewrite this paragraph in a formal style using at least three complex noun phrases: *Lots of students say they feel tired. The ones who feel worst often use their phones late at night. Schools know this but don’t do much.*' },
};
