// English C2, class 58 (docs/LESSONS_PLAN.md, L6). Review of units 11 and 12. Draft for the owner's review.
export const LESSON = {
  id: 'c58',
  focus: 'By the end every student uses the language of units 11 and 12 with control: the right strength for a claim about research (*causes*, *is linked to*, *the evidence is mixed*), relative and absolute risk, nominalisation and how to unpack it, the formal language of duty and permission (*incumbent on*, *under no obligation*, *entitled to*, *have no business*), inverted and other formal hypotheticals, and the abstract vocabulary of ethics. They do a set of key word transformations in the format of C2 Proficiency Reading and Use of English Part 4 and give a long turn that joins the two units: science that raises an ethical question.',
  tips: [
    'Collect four typical mistakes from classes 50 to 57 before this class and use them instead of the items on board page 2 if you can. Students learn more from their own sentences.',
    'The two units meet naturally: a disputed study raises questions of accountability, conflicts of interest and what researchers are obliged to publish. Push students to combine them in one turn rather than revising them separately.',
    'At C2 the review is about precision. When a sentence is correct, ask whether it is **exactly** as strong as the speaker means: *Is “proves” earned? Is “incumbent” too weighty here?*',
    'In Part 4, each item usually tests two things. When checking, give half credit aloud for the half that is right, as the exam does, so students see that a partial answer is worth writing.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Think of a health or science headline you have seen recently. Was it fair to the research? Who, if anyone, was responsible for getting it right?* Each student answers in two or three sentences.' },
    { min: 10, title: 'Units 11 and 12 together', md: 'Show board page 1. Students choose the right form alone, then explain one choice each, saying which unit it comes from.' },
    { min: 10, title: 'Fix it', md: 'Show board page 2. Students correct the mistakes in pairs, or with you in 1 on 1, and say why the original is wrong.' },
    { min: 14, title: 'Exam corner', md: 'Show board page 3: C2 Proficiency Reading and Use of English Part 4. Students complete the six items alone in about eight minutes and count their words. Check with half marks for each half of an answer.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below. The long turn card on board page 4 is part of it.' },
    { min: 5, title: 'Close', md: 'Each student names one point from each unit they now feel sure about and one they want to practise. Set the homework.' },
  ],
  board: [
    { title: 'Units 11 and 12 together', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right word or form.', items: [
        { q: 'People who cycle to work tend to be healthier, but the study does not show that cycling ___ better health.', o: ['causes', 'is linked to', 'is associated with'], why: 'The study found a link; what it cannot show is a cause. Only *causes* makes sense after *does not show that*.' },
        { q: 'The evidence is still ___: some trials found an effect and others found none.', o: ['mixed', 'robust', 'conclusive'], why: '*Mixed*: studies disagree. *Robust* and *conclusive* mean the question is close to settled.' },
        { q: 'It is incumbent ___ researchers to publish results that disappoint them.', o: ['on', 'for', 'to'], why: '*Incumbent on / upon* someone, never *for*.' },
        { q: '___ the trial to be repeated with a larger sample, the effect might disappear.', o: ['Were', 'Should', 'Had'], why: '*Were + subject + to*-infinitive: an imagined, rather unlikely future. *Should* would need *be repeated* without *to*.' },
        { q: 'A company paying for a study of its own product creates an obvious conflict of ___.', o: ['interest', 'interests', 'concern'], why: 'The fixed phrase is *a conflict of interest*.' },
        { q: 'A marked ___ in hospital admissions followed the introduction of the scheme.', o: ['reduction', 'reducing', 'reduce'], why: 'Nominalisation: the noun *reduction in* after an adjective.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'The trial [proved] that the drug may reduce symptoms in some patients.', a: ['suggested', 'indicated', 'showed'], why: '*Proved* is far too strong for a finding that the drug *may* help *some* patients.' },
        { s: 'Participants are entitled [for] withdraw at any time.', a: ['to'], why: '*Entitled to* + infinitive.' },
        { s: '[Hadn’t it been] for the whistle-blower, the side effects would have stayed hidden.', a: ['Had it not been'], why: 'No contraction in an inverted conditional; *not* follows the subject.' },
        { s: 'There has been a sharp increase [of] demand for the vaccine.', a: ['in'], why: '*An increase in* something; *of* gives the size (*an increase of ten per cent*).' },
        { s: 'Nobody was ever held to [accountability] for the failures.', a: ['account'], why: 'The fixed phrase is *hold someone to account*.' },
        { s: 'The risk doubled, but the [relative] risk stayed tiny, at about one in fifty thousand.', a: ['absolute'], why: 'The actual chance of something happening is the *absolute* risk; *doubled* is the relative risk.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. Do not change the word given. Use between three and eight words, including the word given.', items: [
        { q: 'If the regulator had not intervened, the drug would still be on sale.', cue: 'for', gap: 'Had it ___, the drug would still be on sale.', a: ['not been for the regulator’s intervention', 'not been for the intervention of the regulator', 'not been for the regulator', 'not been for the regulator intervening'], why: 'Two marks: the inverted conditional *Had it not been for* and a noun phrase for the cause.' },
        { q: 'You do not have to answer any question you find uncomfortable.', cue: 'obligation', gap: 'You are ___ any question you find uncomfortable.', a: ['under no obligation to answer'], why: 'The fixed phrase *under no obligation to* + infinitive.' },
        { q: 'Nobody has yet shown whether the treatment works in children.', cue: 'remains', gap: 'Whether the treatment works in children ___ shown.', a: ['remains to be', 'still remains to be'], why: '*Remains to be shown*: it has not been shown yet. The passive infinitive is the second mark.' },
        { q: 'Telling a white lie is very different from deceiving someone for profit.', cue: 'quite', gap: 'It is one thing to tell a white lie ___ to deceive someone for profit.', a: ['and quite another', 'and quite another thing', 'but quite another', 'but quite another thing'], why: 'The frame *It is one thing to… and quite another to…*' },
        { q: 'The newspaper was wrong to publish the leaked results.', cue: 'business', gap: 'The newspaper ___ the leaked results.', a: ['had no business publishing'], why: '*Have no business doing*: a critical judgement that someone should not have done something.' },
        { q: 'Scientists say that several factors explain why bees are declining.', cue: 'attributed', gap: 'Scientists have ___ several factors.', a: ['attributed the decline in bees to', 'attributed the decline of bees to', 'attributed the decline in bee numbers to', 'attributed the bees’ decline to', 'attributed the decline of the bees to'], why: 'Nominalisation (*the decline in*) and the pattern *attribute A to B*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 4** there are **six** items, each worth **two marks**. Write the whole answer between the given words, count every word including the key word, and remember that a contraction counts as two words. If you are sure of only one half, write it: one mark is better than none.' },
    ] },
    { title: 'Long turn: science and ethics', blocks: [
      { t: 'text', md: 'In the format of the C2 Proficiency exam (Speaking Part 3, the long turn). **Card A:** *Should scientists be free to publish any finding, even one that could be misused?* Ideas you may use: public safety, the right to know, who decides. **Card B:** *Who is responsible when a study is misreported: the scientists, the journalists or the readers?* Ideas you may use: press releases, headlines, trust in experts. Each candidate speaks for about two minutes; the partner then answers a short question about the same topic.' },
      { t: 'examples', items: [
        { s: 'The study **points to** a link, but **it would be premature to** call it a cause.', n: 'Unit 11: the right strength.' },
        { s: '**It is not for** journalists **to decide** which findings the public may know about.', n: 'Unit 12: whose role it is.' },
        { s: '**Were** every risky finding **to be** kept secret, we would lose the benefits as well.', n: 'Unit 12: a formal hypothetical.' },
        { s: 'Researchers **are under no obligation to** speak to the press, **but** once they do, they share responsibility for what is printed.', n: 'Both units in one move.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'The ethics committee', md: 'You present an imaginary study proposal in two sentences (for example, a company wants to test whether its energy drink improves exam results, using paid student volunteers). The student sits on the ethics committee: they say what the study could and could not show, what conflicts of interest it raises and what the company would be obliged to disclose. Then the student gives the two-minute long turn on card A or B on board page 4, and you ask one follow-up question. Note three sentences and make each one more precise together.' },
    small: { title: 'Long turns and headlines', md: 'Students work in pairs, or in a three. One student gives the two-minute long turn on card A while the partner listens, then answers a short follow-up question (*Do you agree that the right to know comes first?*); then they swap with card B. Students who are not speaking note one sentence from each unit that they heard and one claim that was stronger than the evidence. To finish, each student writes an overclaiming headline about an imaginary study, and the person on their left rewrites it fairly.' },
  },
  homework: { book: 'u11 u12', md: 'Do the unit 11 test and the unit 12 test in the book. Then write about 150 words reporting an imaginary study for a general reader, with the claim at exactly the right strength, one figure given as absolute risk, and one sentence about what the researchers were or were not obliged to do.' },
};
