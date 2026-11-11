// English C2, class 53 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u11:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c53',
  focus: 'By the end every student reads several short texts on a disputed study in the format of C2 Proficiency Reading and Use of English Part 7, finding each idea through its paraphrase, and talks about how science corrects itself with precise vocabulary: replicate, a pre-registered study, a fluke, a null result, cherry-pick, publication bias, retract a paper. In discussion they report and weigh other people’s positions fairly, conceding and challenging in the language of units 9 and 11.',
  tips: [
    'Part 7 is a search task. Ask students to read the questions first and underline the idea in each one (an admission, a defence, a warning), then read the texts for those ideas, not for every detail.',
    'Every question is a paraphrase. When you check, make students read out the exact words in the text that match the question; a matching name or topic is not enough.',
    'The study, its people and its figures are invented for the class. Say so if students ask, and steer the discussion to the general question of how research is checked.',
    'In the discussion, push for fair reporting of each position before any criticism: *As I understand it, the statistician’s point is that…*',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Have you ever changed something in your life because of a study you read about? Did you check the study?*' },
    { min: 8, title: 'How research is checked', md: 'Show board page 1. Students match the terms alone, then use two of them in a sentence about any study they know.' },
    { min: 15, title: 'Exam corner', md: 'Show board page 2 and board page 3: C2 Proficiency Reading and Use of English Part 7. Students read the questions first (one minute), then have twelve minutes, alone.' },
    { min: 7, title: 'Check and paraphrase', md: 'Check the answers. For each one, a student reads out the words in the text that the question paraphrases.' },
    { min: 5, title: 'Phrases in context', md: 'Show board page 4. Students complete the phrases from the texts without looking back, then check.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Each student says which of the four people they find most convincing, in one sentence with a reason. Set the homework.' },
  ],
  board: [
    { title: 'How research is checked', blocks: [
      { t: 'ex', kind: 'match', h: 'Match each term with its meaning.', pairs: [
        ['pre-register a study', 'publish the methods before collecting the data'],
        ['replicate a finding', 'repeat a study to see whether the result holds'],
        ['a fluke', 'a result produced by chance'],
        ['a null result', 'a finding of no effect'],
        ['cherry-pick results', 'report only the outcomes that support your case'],
        ['retract a paper', 'withdraw it officially from the record'],
      ] },
    ] },
    { title: 'Four views on a disputed study', blocks: [
      { t: 'text', md: 'A study reported that pupils who wrote a weekly thank-you letter to someone did better in their end-of-year exams. A larger study last year failed to find the effect. Four people give their views. (The study and the people are invented for this class.)' },
      { t: 'reading', title: 'A: Dr Lena Hart, author of the original study', md: 'When we published, I said the result was preliminary, and I meant it: our sample came from just two schools. I was taken aback by the coverage. One newspaper called it “the letter that adds a grade”, which is not a phrase that appears anywhere in our paper. The failed replication was painful, but I do not think it settles the matter. Their pupils were older and wrote their letters online, and that may change the experience entirely. What I would welcome is a larger joint study, designed with our critics and agreed in advance.' },
      { t: 'reading', title: 'B: Tom Reyes, statistician', md: 'The original paper measured a dozen outcomes and reported the one that came out. That is not fraud; it is how a generation of researchers was trained. But it means the headline result was always likely to be a fluke. The replication was pre-registered: the team published its methods before collecting any data. When a pre-registered study five times the size finds nothing, I know which I believe. Calls for more research are reasonable up to a point, but beyond it they become a way of never admitting a mistake.' },
      { t: 'reading', title: 'C: Ana Silva, science journalist', md: 'I wrote one of the first enthusiastic pieces about the study, and I am not proud of it. I did not ask how many pupils had taken part, which is about the most basic question a reporter can ask. Readers are not foolish for believing what we tell them; the fault lies with those of us who turn a cautious paper into a confident headline. Since then my newspaper has had a rule: no study is reported without a sentence on its size and on whether anyone else has confirmed it.' },
      { t: 'reading', title: 'D: Mark Owusu, head teacher', md: 'We introduced weekly thank-you letters across the school two years ago, before anyone had tried to repeat the study. Did grades rise? Not noticeably. But the atmosphere in some classes changed, and pupils who rarely spoke to staff began to. I am aware that this is anecdotal, and I would not dream of claiming it in a journal. Whether the original study was right about exam results hardly matters to us now. We kept the letters for other reasons.' },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 7', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 7, shortened: eight questions instead of ten): for each question, choose the person (A, B, C or D). Each person may be chosen more than once.', items: [
        { q: 'Which person admits failing to ask an elementary question?', o: ['C', 'A', 'B', 'D'], why: '*I did not ask how many pupils had taken part, which is about the most basic question a reporter can ask.*' },
        { q: 'Which person continues a practice for reasons unrelated to the original claim?', o: ['D', 'A', 'B', 'C'], why: '*Whether the original study was right about exam results hardly matters to us now. We kept the letters for other reasons.*' },
        { q: 'Which person suggests that differences between the studies may explain the conflicting results?', o: ['A', 'B', 'C', 'D'], why: '*Their pupils were older and wrote their letters online, and that may change the experience entirely.*' },
        { q: 'Which person distinguishes a questionable practice from dishonesty?', o: ['B', 'A', 'C', 'D'], why: '*That is not fraud; it is how a generation of researchers was trained.*' },
        { q: 'Which person was surprised by the way the study was presented in the press?', o: ['A', 'B', 'C', 'D'], why: '*I was taken aback by the coverage.* C also mentions the press, but she wrote it and is not surprised; she regrets it.' },
        { q: 'Which person warns that a sensible request can become a way of avoiding responsibility?', o: ['B', 'A', 'C', 'D'], why: '*Calls for more research are reasonable up to a point, but beyond it they become a way of never admitting a mistake.*' },
        { q: 'Which person describes a new rule intended to prevent misleading reports?', o: ['C', 'A', 'B', 'D'], why: '*No study is reported without a sentence on its size and on whether anyone else has confirmed it.*' },
        { q: 'Which person accepts that their own evidence would not meet scientific standards?', o: ['D', 'A', 'B', 'C'], why: '*I am aware that this is anecdotal, and I would not dream of claiming it in a journal.*' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 7** two texts often touch the same topic: here both A and C talk about the press. Decide which one says the **whole** of the question: A is *surprised*; C is *not proud*. The words that match are almost never the words of the question.' },
    ] },
    { title: 'Phrases in context', blocks: [
      { t: 'ex', kind: 'gap', h: 'Complete the phrases from the texts with one word.', items: [
        { q: 'I was taken ___ by the coverage.', a: ['aback'], why: '*Be taken aback*: be surprised and slightly shocked.' },
        { q: 'A larger joint study, designed with our critics and agreed in ___.', a: ['advance'], why: '*In advance*: beforehand, which is the point of pre-registration.' },
        { q: 'Calls for more research are reasonable up to a ___.', a: ['point'], why: '*Up to a point*: partly, within limits.' },
        { q: 'The fault ___ with those of us who turn a cautious paper into a confident headline.', a: ['lies'], why: '*The fault lies with* someone: they are responsible.' },
        { q: 'I would not ___ of claiming it in a journal.', a: ['dream'], why: '*I would not dream of* + *-ing*: I would never do it.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Retract or not?', md: 'The question: *Should the journal retract the original study?* You take the position of Tom Reyes (B) and press it hard; the student speaks for Dr Hart (A) and must concede what is fair in your case while holding their ground. Give it about eight minutes. Then step out of role and ask the student for their own view, in a two-minute long turn that reports both positions fairly before judging them. Note the reporting verbs and concessions they use and upgrade three sentences together.' },
    small: { title: 'The panel', md: 'One student chairs a panel; the others each take one of the four people (with fewer than five students, drop the head teacher, then the journalist; with six, two students share one role and argue among themselves). The question: *What should researchers, journals, newspapers and schools do differently?* Each panellist opens with thirty seconds in role, then the chair runs a discussion for eight minutes and closes with one recommendation for each group. Finish out of role: which argument did each student find strongest, and why?' },
  },
  homework: { book: 'u11', md: 'Finish lesson 4 of unit 11 if needed and do the unit 11 test, then do lesson 1 of unit 12 (It is not for us to judge). Write about 150 words in the voice of one of the four people, replying to another of them (for example, Dr Hart answering Tom Reyes): report their point fairly, concede what you can and hold your ground on the rest.' },
};
