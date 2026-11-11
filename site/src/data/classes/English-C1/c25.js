// English C1, class 25 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u6:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c25',
  focus: 'By the end every student expresses regrets, wishes, preferences and criticism with a past form that is not about the past: *wish* and *if only* + past simple or past perfect, *wish* + someone + *would*, *would rather* with the same or a different subject (*I’d rather you didn’t*, *I’d rather you hadn’t*), *it’s (high) time* + past and *as if* + *were*. The speaking goal: talk tactfully about something that annoys them and what they would rather happened.',
  tips: [
    'Give the one idea behind all of them: for something unreal, the verb moves one step back. Past simple for an unreal present, past perfect for an unreal past.',
    '*Wish + would* is for annoyance about other people or things, never about yourself: *I wish it would stop raining*, but *I wish I had more time*, not *I wish I would have*.',
    '*Would rather* with the same subject takes the bare infinitive (*I’d rather walk*); with someone else it takes a past form (*I’d rather you walked*). Learners often say *I’d rather you don’t*; correct it every time.',
    '*It’s high time we went* is criticism: it should have happened already. The tone matters, so let students say it with feeling.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is one small thing you wish were different about your home or your week?* Each student answers with *I wish…* Write two answers on the board and point at the tense.' },
    { min: 12, title: 'One step back', md: 'Show board page 1. Students choose the forms, then say whether each sentence is about now, the past or someone else’s behaviour.' },
    { min: 10, title: 'Common mistakes', md: 'Show board page 2. Students fix the sentences in pairs and say which rule each one breaks.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 2. Students read the message once for meaning, then write one word in each gap. Reveal the answers.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they would rather someone did differently, politely. Set the homework.' },
  ],
  board: [
    { title: 'One step back', blocks: [
      { t: 'examples', items: [
        { s: 'I wish I **knew** how to fix it.', n: 'I don’t know now: past simple for an unreal present.' },
        { s: 'If only I **had kept** the receipt.', n: 'I didn’t keep it: past perfect for a past regret.' },
        { s: 'I wish the neighbours **would** park somewhere else.', n: 'Annoyance about someone else’s behaviour.' },
        { s: 'I’d rather you **didn’t** mention it to anyone.', n: 'A preference about someone else: past form.' },
        { s: 'It’s high time the council **repaired** this road.', n: 'Criticism: it should have happened already.' },
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the correct form.', items: [
        { q: 'I wish I ___ my phone at home. I can’t call anyone.', o: ['hadn’t left', 'didn’t leave', 'wouldn’t leave'], why: 'A regret about the past: past perfect.' },
        { q: 'I wish my flatmate ___ singing in the shower at six in the morning.', o: ['would stop', 'stopped', 'had stopped'], why: 'Annoyance and wanting change: *wish* + someone + *would*.' },
        { q: 'I’d rather ___ by train than fly.', o: ['go', 'went', 'to go'], why: 'Same subject: the bare infinitive.' },
        { q: 'My parents would rather I ___ closer to home.', o: ['lived', 'live', 'would live'], why: 'A different subject after *would rather*: past form.' },
        { q: 'She talks to me as if I ___ a child.', o: ['were', 'am', 'would be'], why: '*As if* + *were* for something unreal.' },
      ] },
    ] },
    { title: 'Common mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I wish I [would have] more free time.', a: ['had'], why: 'No *wish* + *would* about yourself; past simple for an unreal present.' },
        { s: 'If only I [didn’t say] that at dinner last night.', a: ['hadn’t said', 'had not said'], why: '*Last night*: a past regret, past perfect.' },
        { s: 'I’d rather you [don’t] smoke in the car.', a: ['didn’t', 'did not'], why: 'A different subject after *would rather*: past form.' },
        { s: 'It’s high time we [go] home.', a: ['went'], why: '*It’s high time* + subject takes the past simple.' },
        { s: 'I’d rather you [didn’t tell] her yesterday.', a: ['hadn’t told', 'had not told'], why: 'A past situation that cannot be changed: past perfect.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 2', blocks: [
      { t: 'ex', kind: 'gap', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 2): read the message from one flatmate to another and write one word in each gap.', items: [
        { q: 'I’d rather you ___ use my things without asking first.', a: ['didn’t'], why: 'A different subject after *would rather*: past form, here negative.' },
        { q: 'I think it’s high ___ we agreed on a cleaning rota.', a: ['time'], why: 'The fixed phrase *it’s high time*.' },
        { q: 'I wish you ___ stop leaving dishes in the sink overnight.', a: ['would'], why: 'Annoyance about someone’s behaviour: *wish* + *would*.' },
        { q: 'If ___ we had talked about this when you moved in!', a: ['only'], why: '*If only* introduces a strong wish.' },
        { q: 'I would rather sort it out now ___ argue about it later.', a: ['than'], why: '*Would rather… than*.' },
        { q: 'Sometimes you behave as ___ the kitchen were yours alone.', a: ['if', 'though'], why: '*As if* or *as though* + *were*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 2 many gaps are parts of fixed phrases: *if only*, *as if*, *high time*, *would rather… than*. Read the words after the gap too: *rather* is often answered by *than* later in the sentence.' },
    ] },
  ],
  activities: {
    one: { title: 'The tactful complaint', md: 'Role-play: the student is a tenant and you are the landlord, or the student is a team member and you are their manager. The student raises three problems politely with *I’d rather…*, *I wish… would* and *It’s time…*, and one regret about something that has already happened. Then swap roles. Note the forms and go over three at the end.' },
    small: { title: 'If only', md: 'Each student describes a small disaster from their past (a missed flight, a lost bag). The others react with *If only you had…* and *I bet you wish you hadn’t…*, and the speaker answers with what they would rather have done. Score a point for each correct form.' },
    group: { title: 'Wishes for the city', md: 'Breakout rooms of four agree on five wishes for their town or city: two about now, one regret about the past, one complaint with *it’s high time*, one with *I’d rather the council…* Bring everyone back; each room reads its list and the class chooses the most persuasive wish.' },
  },
  homework: { book: 'u6:p2', md: 'Finish lesson 2 of unit 6 if needed, then do lesson 3 (Should you need anything). Write a polite message of about 100 words to a neighbour, flatmate or colleague about something that annoys you, with *I’d rather you…*, *I wish… would*, *it’s high time* and one regret.' },
};
