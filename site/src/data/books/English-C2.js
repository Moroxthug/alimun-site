// English C2 course book (docs/BOOKS.md). Draft: reviewed by a native teacher before it is published.
// Second edition (owner, 9 Nov 2026): 16 units of four lessons, written in units/English-C2/<unit>.js; each entry's
// plan is the outline its writer worked from (removed from the served book). Units 1 to 8 rework the eight literary and
// stylistic topics; units 9 to 16 lean towards academic and professional English (owner, 9 Nov 2026).
// Explanations are written in English and translated in i18n/English-C2.<lang>.json. Exam practice: C2 Proficiency.
export const BOOK = {
  id: 'English-C2',
  language: 'English',
  level: 'C2',
  review: 'draft',
  units: [
    { id: 'u1', title: 'Precision and nuance', planned: true, plan: { goal: 'Choose the exact word for the exact shade of meaning.', lessons: [
      'Near-synonyms and connotation: glance, glimpse, peer, gaze, stare; slim, slender, skinny, scrawny; frugal, thrifty, stingy; the same fact with a different feeling (exam: Reading and Use of English Part 1)',
      'Collocation and fixed binomials: bitterly disappointed, a sweeping generalisation, odds and ends, to and fro, by and large, part and parcel (exam: Reading and Use of English Part 2)',
      'Euphemism, understatement and tone: passed away, between jobs, a bit of a challenge, economical with the truth; when softening helps and when it hides the truth (exam: Speaking Part 1)',
      'Reading: an essay on the words we choose (exam: Reading and Use of English Part 5)'] } },
    { id: 'u2', title: 'Style and rhythm', planned: true, plan: { goal: 'Write sentences that are varied, cohesive and well paced.', lessons: [
      'Sentence variety: short sentences for impact, long periodic and loose sentences, parallel structure and balance (exam: Reading and Use of English Part 4)',
      'Cohesion without repetition: substitution, ellipsis and reference (the former, the latter, such, this, that, do so, the same) (exam: Reading and Use of English Part 6)',
      'Punctuation for effect: the semicolon, the colon, the dash, brackets and the comma that changes meaning (exam: Writing Part 2, an article)',
      'Reading: a magazine essay on slow living (exam: Reading and Use of English Part 5)'] } },
    { id: 'u3', title: 'Irony, humour and wordplay', planned: true, plan: { goal: 'Recognise and produce irony, understatement and wordplay.', lessons: [
      'Irony, sarcasm, understatement and overstatement: how tone, context and exaggeration signal meaning (Nice weather, isn’t it? in a storm) (exam: Listening Part 1)',
      'Puns, double meanings and twisted idioms: how headlines and adverts play with words (exam: Reading and Use of English Part 3)',
      'Less common idioms and phrasal verbs in context: bite the bullet, grasp the nettle, hold sway, tide someone over, wriggle out of, fob someone off (exam: Reading and Use of English Part 1)',
      'Reading: a humorous newspaper column (exam: Reading and Use of English Part 7)'] } },
    { id: 'u4', title: 'Academic and critical writing', planned: true, plan: { goal: 'Take a measured, evidence-based stance in academic writing and summarise and evaluate two texts.', lessons: [
      'Stance and hedging: arguably, ostensibly, purportedly, it would seem, tends to, to a large extent; boosting with clearly and undoubtedly (exam: Reading and Use of English Part 4)',
      'Complex noun phrases and reporting verbs: the extent to which, a growing body of evidence; contend, posit, concede, assert, dispute, refute (exam: Reading and Use of English Part 3)',
      'Summarising and evaluating: paraphrase, reduce, compare two writers’ positions and give your own view (exam: Writing Part 1, the essay on two texts)',
      'Reading: an extract from a literature review (exam: Reading and Use of English Part 6)'] } },
    { id: 'u5', title: 'Varieties of English', planned: true, plan: { goal: 'Understand the main varieties of English and choose between them.', lessons: [
      'British, American, Australian, Indian, Irish and Scottish English: vocabulary, spelling and grammar (have got and have gotten, the pavement and the sidewalk, learnt and learned, the collective noun with a plural verb) (exam: Listening Part 2)',
      'Slang, regional speech and politeness: informal and taboo language, how to understand it and when not to use it (exam: Listening Part 4)',
      'Legal and formal English: hereinafter, notwithstanding, thereof, whereas; the plain English movement and how to simplify a clause (exam: Reading and Use of English Part 2)',
      'Reading: a conversation between speakers of different Englishes (exam: Listening Part 3)'] } },
    { id: 'u6', title: 'Advanced grammar in use', planned: true, plan: { goal: 'Use the finer points of English grammar with confidence.', lessons: [
      'The mandative and formulaic subjunctive: I suggest that he be, were it not for, so be it, far be it from me, come what may, suffice it to say (exam: Reading and Use of English Part 4)',
      'Absolute and non-finite constructions: The meeting over, we left; Weather permitting; with + object + participle; ellipsis in complex sentences (exam: Reading and Use of English Part 2)',
      'Modality and aspect in subtle use: will for habit and insistence, shall, may well, might as well, dare and need as modals, the continuous for annoyance and tact (exam: Reading and Use of English Part 4)',
      'Reading: a short story that uses these structures (exam: Reading and Use of English Part 5)'] } },
    { id: 'u7', title: 'Rhetoric and persuasion', planned: true, plan: { goal: 'Understand how speeches persuade and use the devices yourself.', lessons: [
      'The three appeals: ethos, pathos and logos; how a speaker builds trust, feeling and argument (exam: Listening Part 3)',
      'Devices of the speech: anaphora, antithesis, chiasmus, tricolon, rhetorical question and the extended metaphor (exam: Speaking Part 3, the long turn)',
      'Bias, framing and loaded language: how the same event can be presented in two ways, and how to read critically (exam: Reading and Use of English Part 7)',
      'Reading: a speech and a commentary on it (exam: Writing Part 1, the essay on two texts)'] } },
    { id: 'u8', title: 'Literature and criticism', planned: true, plan: { goal: 'Read literary English closely and write about it.', lessons: [
      'Figurative language: metaphor, simile, personification, symbol and imagery, and what each does for the reader (exam: Reading and Use of English Part 1)',
      'Narrative voice and tone: first and third person, free indirect speech, the unreliable narrator, register, irony and point of view (exam: Reading and Use of English Part 5)',
      'Writing a close reading and a review: making a point, quoting briefly, explaining the effect, giving a judgement (exam: Writing Part 2, a review)',
      'Reading: a short story extract and a critical note on it (exam: Reading and Use of English Part 6)'] } },
    { id: 'u9', title: 'Debate and argument', planned: true, plan: { goal: 'Build, test and answer an argument in speech and in writing.', lessons: [
      'The structure of an argument: claim, reason, evidence, warrant, concession and rebuttal (granted, that said, it does not follow that) (exam: Reading and Use of English Part 6)',
      'Fallacies and how to name them politely: the straw man, the false dilemma, the slippery slope, ad hominem, begging the question (exam: Listening Part 3)',
      'Disagreeing at C2: challenging, conceding and holding your ground in a discussion (I take your point, but; with respect; that rather misses the point) (exam: Speaking Part 2, the collaborative task)',
      'Reading: two opinion pieces on compulsory voting (exam: Writing Part 1, the essay on two texts)'] } },
    { id: 'u10', title: 'Professional communication', planned: true, plan: { goal: 'Negotiate, chair a meeting and write clearly to senior readers.', lessons: [
      'Negotiating: proposing, bargaining and conditional offers (we would be prepared to, provided that, on the understanding that, meet someone halfway) (exam: Listening Part 4)',
      'Chairing and taking part in meetings: opening, keeping to time, bringing people in, summarising and closing (exam: Speaking Part 2, the collaborative task)',
      'Writing to senior readers: the formal letter, put the point first, tone that is direct but courteous (exam: Writing Part 2, a letter)',
      'Reading: a briefing report for a board, and how to write one (exam: Writing Part 2, a report)'] } },
    { id: 'u11', title: 'Science and the public', planned: true, plan: { goal: 'Explain research accurately for a general reader and read science journalism critically.', lessons: [
      'Explaining research: cause and correlation, risk and probability, the language of uncertainty (is linked to, a modest increase, the evidence is mixed) (exam: Reading and Use of English Part 3)',
      'Nominalisation and the passive in scientific writing, and how to unpack them for a general reader (exam: Reading and Use of English Part 4)',
      'Writing for the public: a headline, a hook, an analogy and a fair account of the evidence (exam: Writing Part 2, an article)',
      'Reading: a feature article on a disputed study (exam: Reading and Use of English Part 7)'] } },
    { id: 'u12', title: 'Ethics and dilemmas', planned: true, plan: { goal: 'Discuss moral questions with precision, balance and tact.', lessons: [
      'The language of obligation and permission at C2: be incumbent on, be under no obligation to, it is not for us to, be entitled to, be at liberty to (exam: Reading and Use of English Part 2)',
      'Hypothetical reasoning: were we to, suppose that, what if, had it not been for, it is one thing to … and quite another to (exam: Reading and Use of English Part 4)',
      'Abstract vocabulary of ethics: integrity, accountability, a conflict of interest, a grey area, the lesser of two evils, moral hazard (exam: Speaking Part 3, the long turn)',
      'Reading: a philosopher’s essay on a classic dilemma (exam: Reading and Use of English Part 5)'] } },
    { id: 'u13', title: 'Economics and global affairs', planned: true, plan: { goal: 'Read, discuss and write about the economy and world affairs in precise, formal English.', lessons: [
      'Describing trends and figures precisely: plummet, plateau, outstrip, a marginal rise, in real terms, per capita, a tenfold increase (exam: Listening Part 2)',
      'The language of policy and diplomacy: sanctions, a trade-off, to broker a deal, to impose, to lift, to ratify; reporting positions neutrally (exam: Reading and Use of English Part 1)',
      'Cause, effect and consequence in formal writing: give rise to, stem from, bring about, in the wake of, with the result that (exam: Writing Part 2, a report)',
      'Reading: an analysis of globalisation and its critics (exam: Reading and Use of English Part 6)'] } },
    { id: 'u14', title: 'Culture and identity', planned: true, plan: { goal: 'Talk and write about culture as society: customs, values, belonging and change.', lessons: [
      'Generalising carefully about groups: tend to, by and large, with notable exceptions, it would be simplistic to say; avoiding stereotypes (exam: Speaking Part 3, the long turn)',
      'The vocabulary of society and belonging: assimilation, integration, heritage, a melting pot, a sense of place, cultural capital (exam: Reading and Use of English Part 3)',
      'Inversion and fronting for emphasis in discursive writing: Nowhere is this more evident than, Such is the pull of, Central to this is (exam: Reading and Use of English Part 4)',
      'Reading: an essay on living between two cultures (exam: Reading and Use of English Part 7)'] } },
    { id: 'u15', title: 'Language and the mind', planned: true, plan: { goal: 'Explore how language shapes meaning, thought and persuasion, and translate meaning rather than words.', lessons: [
      'Meaning and implication: denotation and connotation, implicature, presupposition, what is said and what is meant (exam: Listening Part 1)',
      'Translation and false friends: why word-for-word fails, idioms across languages, register shifts when translating (exam: Reading and Use of English Part 2)',
      'Persuasion and the mind: framing, priming, nudges and the language of advertising and politics (exam: Writing Part 2, an article)',
      'Listening: a talk on whether language shapes thought (exam: Listening Part 2)'] } },
    { id: 'u16', title: 'Ready for C2 Proficiency', planned: true, plan: { goal: 'Use a clear method for every paper of C2 Proficiency and know the whole exam before the final check.', lessons: [
      'Reading and Use of English Parts 1 to 7: method for the language parts and the long texts (exam: Reading and Use of English Parts 1 to 7)',
      'Writing Parts 1 and 2 under exam conditions: plan, write and check an essay on two texts and a Part 2 task in the time allowed (exam: Writing Parts 1 and 2)',
      'Listening Parts 1 to 4 and Speaking Parts 1 to 3: method, timing and what the examiner listens for (exam: Listening and Speaking)',
      'The C2 Proficiency exam step by step, and how to keep improving after C2 (exam: every paper)'] } },
  ],
};
