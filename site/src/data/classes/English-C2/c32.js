// English C2, class 32 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u7:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c32',
  focus: 'By the end every student can show how one event is framed in two ways: what is selected and left out, what comes first, which words carry approval or disapproval, which reporting verb adds judgement (*said, claimed, admitted, alleged, conceded*) and how the agentless passive hides who is responsible. They retell one event in two frames, then report it neutrally, and match statements to four accounts in the format of C2 Proficiency Reading and Use of English Part 7.',
  tips: [
    'Framing is not the same as lying. Every account selects, and students cannot avoid it in their own writing. The C2 skill is to notice the frame and to choose one consciously.',
    'Reporting verbs are where students’ own summaries go wrong. *The writer admits that…* accuses; *claims* casts doubt; *points out* tells the reader you agree. In a neutral summary, *says*, *argues* and *suggests* are the safe choices.',
    'When a student meets *Mistakes were made*, ask *By whom?* The question is the quickest way to make the agentless passive visible.',
    'In Part 7 the same topic appears in several sections. Teach students to match the **point** of a question, not a shared word: every account below mentions shops, but only one fears for its own.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Write two headlines on the board: *Council saves high street* and *Council shuts out drivers*. Ask: *Could these be the same decision? What does each want you to feel?*' },
    { min: 8, title: 'Loaded words', md: 'Show board page 1. Students sort the words and phrases alone, then suggest a neutral version for each loaded one.' },
    { min: 12, title: 'Verbs that judge and passives that hide', md: 'Show board page 2. Students choose the reporting verbs, then rewrite the passives so that they name who is responsible, and say why a writer might prefer the passive.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 15, title: 'Exam corner', md: 'Show board page 3: Reading and Use of English Part 7, shortened. Students read the questions first, then the four accounts, and answer alone in ten minutes. Check together, finding the exact words that decide each answer.' },
    { min: 5, title: 'Close', md: 'Each student reports one thing that happened this week in one neutral sentence, then in one loaded one. Set the homework.' },
  ],
  board: [
    { title: 'Loaded words', blocks: [
      { t: 'ex', kind: 'sort', h: 'Does each word or phrase present the people or the action approvingly, neutrally or disapprovingly?', groups: ['approving', 'neutral', 'disapproving'], explain: ['groups'], items: [
        { s: 'a bold overhaul of the timetable', g: 0, why: '*Bold* and *overhaul* suggest courage and thorough improvement.' },
        { s: 'a change to the timetable', g: 1, why: 'A plain description with no judgement.' },
        { s: 'a botched shake-up of the timetable', g: 2, why: '*Botched* means done badly; *shake-up* suggests disruption.' },
        { s: 'around three hundred residents', g: 1, why: 'A number and a neutral label.' },
        { s: 'a mob', g: 2, why: 'Suggests an angry, uncontrolled crowd.' },
        { s: 'a lifeline for the village', g: 0, why: 'A metaphor of rescue: something essential.' },
        { s: 'a vanity project', g: 2, why: 'Suggests it was done for someone’s pride, not for need.' },
      ] },
    ] },
    { title: 'Verbs that judge and passives that hide', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the reporting verb that matches the meaning in brackets.', items: [
        { q: 'The director ___ that the figures had been wrong. (she confessed something bad)', o: ['admitted', 'claimed', 'pointed out'], why: '*Admit* is for confessing something wrong.' },
        { q: 'Residents ___ that the consultation had been a formality. (an accusation, not yet proved)', o: ['alleged', 'conceded', 'noted'], why: '*Allege* reports an accusation without proof.' },
        { q: 'The minister ___ that the policy had worked, although nobody else seemed to think so. (she kept saying it)', o: ['insisted', 'acknowledged', 'admitted'], why: '*Insist* hints that others did not believe it.' },
        { q: 'The opposition leader ___ that the government had a point on cost. (he gave way on one point)', o: ['conceded', 'alleged', 'claimed'], why: '*Concede*: admit a point against your own case.' },
        { q: 'It ___ that the report had been ready for months. (the fact had been hidden)', o: ['emerged', 'was claimed', 'was conceded'], why: '*It emerged that* suggests something kept out of sight.' },
      ] },
      { t: 'ex', kind: 'transform', h: 'Rewrite each sentence so that it names who is responsible. Start with the words given.', items: [
        { q: 'Mistakes were made in the handling of the complaints.', cue: 'The company', a: ['The company made mistakes in the handling of the complaints.', 'The company made mistakes in handling the complaints.', 'The company made mistakes when it handled the complaints.'], why: 'The active voice names the agent that the passive left out.' },
        { q: 'The decision to raise fares was taken behind closed doors.', cue: 'The transport board', a: ['The transport board took the decision to raise fares behind closed doors.', 'The transport board decided to raise fares behind closed doors.', 'The transport board decided behind closed doors to raise fares.'], why: 'The noun *decision* and the passive together hid who decided.' },
        { q: 'Concerns about safety were not passed on.', cue: 'The managers', a: ['The managers did not pass on concerns about safety.', 'The managers did not pass on the concerns about safety.', 'The managers did not pass concerns about safety on.', 'The managers didn’t pass on concerns about safety.'], why: 'Naming the agent turns a fact into a responsibility.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 7', blocks: [
      { t: 'text', md: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 7), shortened: in the exam there are ten questions; here there are six. Read four accounts of one decision. For each question, choose the account A, B, C or D. Each account may be chosen more than once.' },
      { t: 'reading', title: 'Four accounts of one decision', md: '**A. From the local newspaper.** Ashford Vale Council has voted to close Market Street to traffic from 1 May. The decision, taken by nine votes to five, follows an eighteen-month trial in which deliveries were allowed before ten each morning. Council figures show that the number of people using the street rose by about a fifth during the trial, while two of its thirty-four shops closed. The Market Street Traders’ Association, which opposed the scheme, says it will ask for the decision to be reviewed next year.\n\n**B. From a statement by the Market Street Traders’ Association.** Once again the council has listened to the loudest voices rather than the people who keep this street alive. Those who cheered last night’s decision are, for the most part, people who rarely spend a penny here; it is easy to support a car-free street when your livelihood does not depend on it. Our members have watched loyal customers, many of them elderly, give up coming because they can no longer park near the door. Two shops have already gone. We do not intend to be the next.\n\n**C. From a cycling campaign’s blog.** Last Saturday I walked down Market Street with my daughter on my shoulders, and for the first time in years I could hear what she was saying. That, for me, is what this decision is about. A street is not a car park with shops attached; it is a place where people meet, linger and, yes, spend money. The trial showed as much: more people came, and they stayed longer. The council deserves credit for holding its nerve.\n\n**D. From a newspaper column.** I opposed the scheme when it was first proposed, and I said so in this column. Eighteen months later I am not sure I was right, although I am not sure I was wrong either. What strikes me is how little the argument has moved. One side speaks as if every shop were thriving, the other as if every closure were caused by a bollard. Neither is true. Shops close on busy streets and survive on quiet ones, for reasons that usually have more to do with rents than with traffic.' },
      { t: 'ex', kind: 'choice', h: 'Which account (A, B, C or D) does each statement refer to?', items: [
        { q: 'Which account reports the result of the vote precisely?', o: ['A', 'B', 'C', 'D'], why: '*by nine votes to five*: only A gives the figures, and without comment.' },
        { q: 'Which account questions the motives of those who welcomed the decision?', o: ['B', 'A', 'C', 'D'], why: '*it is easy to support a car-free street when your livelihood does not depend on it*.' },
        { q: 'Which account uses a moment from the writer’s own life to make its case?', o: ['C', 'B', 'D', 'A'], why: '*I walked down Market Street with my daughter on my shoulders*.' },
        { q: 'Which writer expresses doubt about a view they once stated in public?', o: ['D', 'B', 'C', 'A'], why: '*I opposed the scheme… and I said so in this column… I am not sure I was right*.' },
        { q: 'Which account suggests that both sides have exaggerated their case?', o: ['D', 'A', 'B', 'C'], why: '*One side speaks as if every shop were thriving, the other as if every closure were caused by a bollard. Neither is true.*' },
        { q: 'Which account expresses fear for the writer’s own business?', o: ['B', 'A', 'C', 'D'], why: '*Two shops have already gone. We do not intend to be the next.* A and D mention closures, but not as the writer’s own fear.' },
      ] },
      { t: 'tip', art: 'owl', md: 'All four accounts mention shops, and three mention the trial. A question in **Part 7** is not answered by the section that mentions its topic, only by the one that makes its **point**. Underline what the question says the writer is **doing** (*questions, admits, suggests*) and look for that action.' },
    ] },
  ],
  activities: {
    one: { title: 'Two press releases', md: 'Choose a recent local or work event the student knows. The student reports it in about a minute twice: first as the press officer of the organisation that made the decision, then as its fiercest critic. You note the selection, the first fact, the loaded words, the reporting verbs and any agentless passive. Then the student gives a thirty-second neutral version, and you compare the three together.' },
    small: { title: 'Spin and spot', md: 'Pairs get the same short set of facts in the chat (a school changing its hours: start at 9.30, two parents’ meetings, 60% of pupils in favour in a survey, three teachers unhappy). One pair writes a headline and first two sentences in favour, the other against, in five minutes. Each pair reads its version; the others name every technique they can spot and then write a neutral version together. In a group of two, the partners write opposite versions and swap.' },
  },
  homework: { book: 'u7:p3 u7:p4', md: 'Finish lesson 3 of unit 7 if needed, then do lesson 4 (A speech and its critic). Find a news story reported by two different sources and write about 150 words comparing how each frames it: what each selects, the words and reporting verbs each uses, and which you find fairer and why.' },
};
