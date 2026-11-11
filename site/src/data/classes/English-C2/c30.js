// English C2, class 30 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u7:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c30',
  focus: 'By the end every student recognises how a speaker builds trust (ethos), stirs feeling (pathos) and argues (logos), can say which appeal a sentence mainly uses and whether it is used fairly or misused, and builds a short spoken appeal of their own in which ethos is shown rather than claimed. The listening goal: follow attitude and implication in an interview in the format of C2 Proficiency Listening Part 3.',
  tips: [
    'Most sentences use more than one appeal. Ask *Which appeal does it mainly use?* and accept a second answer if the student can defend it: the reasoning matters more than the label.',
    'Students tend to claim ethos (*As an expert, I…*). Push them to show it instead: a detail of experience, a shared value, an honest concession. *I have been wrong about this before* earns more trust than any title.',
    'Pathos works through one particular person or scene, not a crowd. When a student says *thousands of people suffer*, ask *Who is one of them? What did they do on Tuesday?*',
    'For the listening, read the script on board page 4 aloud twice at natural speed and do not show it until the answers are checked. In Part 3 the right option usually paraphrases what the speaker means after a correction or an anecdote.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Think of someone who once persuaded you to do something: give money, change a plan, join something. Why did you trust them?* Collect the reasons and sort them on the board into character, feeling and argument, without naming the appeals yet.' },
    { min: 10, title: 'Which appeal?', md: 'Show board page 1. Name the three appeals from the warm-up. Students sort the sentences alone, then defend one choice each.' },
    { min: 10, title: 'Shown, not claimed', md: 'Show board page 2. Students choose the stronger version of each appeal, then match each misuse with its example and say how it damages the speaker.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 15, title: 'Exam corner', md: 'Show board page 3 and give students one minute to read the questions. Read the script on board page 4 aloud twice. Check the answers, then show the script and find the words that decide each answer.' },
    { min: 5, title: 'Close', md: 'Each student says one sentence that shows ethos without claiming it. Set the homework.' },
  ],
  board: [
    { title: 'Which appeal?', blocks: [
      { t: 'ex', kind: 'sort', h: 'Which appeal does each sentence mainly use?', groups: ['ethos: trust', 'pathos: feeling', 'logos: reason'], explain: ['groups'], items: [
        { s: 'I have run the night shelter for nine years, and for the first two I got almost everything wrong.', g: 0, why: 'Experience mentioned lightly, plus an honest admission: the speaker’s character.' },
        { s: 'Last February a man called Pavel slept in the bus station for eleven nights because our doors were full.', g: 1, why: 'One named person and a concrete detail: feeling.' },
        { s: 'Each bed costs us less a night than a single visit to the emergency department, which is where most of our guests would otherwise end up.', g: 2, why: 'A comparison of costs and a consequence: reason.' },
        { s: 'Like most of you, I grew up two streets from this hall.', g: 0, why: 'Shared identity with the audience builds trust.' },
        { s: 'Picture the cold of a concrete floor at four in the morning, and the sound of the first bus starting up.', g: 1, why: 'An imagined scene that appeals to the senses.' },
        { s: 'If we accept that nobody recovers from illness on the street, then a bed is not charity but medicine.', g: 2, why: 'A warrant (*If we accept that…, then…*) linking evidence to a claim.' },
      ] },
    ] },
    { title: 'Shown, not claimed', blocks: [
      { t: 'ex', kind: 'choice', h: 'Which version is more persuasive?', items: [
        { q: 'Ethos', o: ['I am not a planner, and I will not pretend to be one, but I have walked this road to school with my children every day for six years.', 'As a parent and a very experienced person, I am obviously right about this road.'], why: 'Ethos is shown through a modest admission and lived experience, not claimed.' },
        { q: 'Pathos', o: ['On Monday a nine-year-old called Ines stepped off the kerb because the pavement was blocked by vans.', 'Thousands of children are in terrible danger every single day!'], why: 'One concrete case moves an audience more than a vague crowd and an exclamation.' },
        { q: 'Logos', o: ['Since the crossing was removed, there have been four reported accidents on this stretch, against none in the previous five years.', 'Statistics show that 87.36% of residents feel unsafe, according to experts.'], why: 'A clear, checkable comparison; unnamed experts and over-precise figures weaken the argument.' },
      ] },
      { t: 'ex', kind: 'match', h: 'Match each misuse of an appeal with its example.', pairs: [
        ['the bare appeal to authority', 'Experts agree that the scheme will fail.'],
        ['manipulation', 'If you have a heart, you will not ask what it costs.'],
        ['the data dump', 'Fourteen figures in one minute, and no point made about any of them.'],
        ['ad hominem', 'My opponent has never even lived here, so his plan is worthless.'],
      ] },
      { t: 'tip', art: 'owl', md: 'A **concession** is the cheapest way to build ethos: *My opponents are right about the cost.* An audience that hears you admit one point is far more ready to believe the rest.' },
    ] },
    { title: 'Exam corner: Listening Part 3', blocks: [
      { t: 'text', md: 'You will hear part of a radio interview with Daniel, who worked for years raising money for a charity on doorsteps and by phone. In the exam the interview lasts about four minutes and has five questions; here it is shortened, with three questions. You hear it twice.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Listening Part 3): choose the answer which fits best according to what you hear.', items: [
        { q: 'What does Daniel suggest about the script he was first given?', o: ['It relied on an appeal that people were in no mood to hear on their doorstep.', 'It contained figures that were out of date.', 'It was too short to explain the charity’s work.', 'It encouraged fundraisers to put pressure on people.'], why: '*It wasn’t that the figures were wrong… nobody on a doorstep at seven in the evening has asked to be lectured.* The figures being wrong is mentioned and rejected.' },
        { q: 'When the interviewer suggests that telling stories is manipulative, Daniel', o: ['accepts the risk but says it depends on whether evidence goes with the story.', 'rejects the idea as an insult to fundraisers.', 'agrees that stories should be avoided altogether.', 'admits that he often exaggerated stories himself.'], why: '*I wouldn’t put it quite like that… A story becomes manipulation when it’s the only thing you’ve got.*' },
        { q: 'Why does Daniel mention the elderly man who corrected him?', o: ['To show how admitting a mistake can win someone’s trust.', 'To show that older people give more generously.', 'To criticise the charity for its poor information.', 'To explain why he eventually left the job.'], why: '*Admitting it did more for me than any badge*: the anecdote is about ethos.' },
      ] },
    ] },
    { title: 'Script (your teacher reads this aloud)', blocks: [
      { t: 'dialogue', lines: [
        { who: 'Interviewer', s: 'Daniel, you spent eight years knocking on doors for a children’s charity. What were you taught to say at the start?' },
        { who: 'Daniel', s: 'A script, two pages long, full of statistics. How many families, how many pounds, what percentage went where. And I would get to the third number and watch the door begin to close. It wasn’t that the figures were wrong; they were perfectly accurate. It was that nobody on a doorstep at seven in the evening, with the dinner going cold, has asked to be lectured.' },
        { who: 'Interviewer', s: 'So you started telling stories instead. Some people would call that manipulative.' },
        { who: 'Daniel', s: 'I wouldn’t put it quite like that. A story becomes manipulation when it’s the only thing you’ve got. If I told you about one little girl and then couldn’t tell you where your ten pounds actually went, you’d be right to feel used. The story opens the door, if you like. The numbers have to be there when you walk through it.' },
        { who: 'Interviewer', s: 'And trust? You wore a badge with the charity’s name. Wasn’t that enough?' },
        { who: 'Daniel', s: 'Hardly. The badge told people who employed me, not whether I was honest. I remember an elderly man who told me my figure for the number of children we helped was a year out of date. He was right. I thanked him, said I’d check it, and he signed up there and then. Admitting it did more for me than any badge.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'The doorstep pitch', md: 'The student chooses a cause they care about. They have two minutes to prepare a ninety-second pitch with one sentence of shown ethos, one concrete case for pathos and one clear comparison or consequence for logos. You play a busy, sceptical neighbour and interrupt once with a hard question (*How do I know the money gets there?*). Afterwards, name the appeal that worked best and rewrite the weakest sentence together.' },
    small: { title: 'Pitch and judge', md: 'Each student prepares a ninety-second pitch for a local cause with all three appeals. While one student speaks, the others note which sentence did each job and whether any appeal was misused (unnamed experts, a vague crowd, an attack on an opponent). After each pitch the group names the strongest appeal and suggests one change. In a group of two, students pitch to each other twice, improving the weak sentence the second time.' },
  },
  homework: { book: 'u7:p1 u7:p2', md: 'Finish lesson 1 of unit 7 if needed, then do lesson 2 (Patterns that persuade). Write the opening of a speech of about 150 words for a public meeting on a local issue: show your ethos without claiming it, include one concrete case and one clear piece of reasoning, and make one honest concession.' },
};
