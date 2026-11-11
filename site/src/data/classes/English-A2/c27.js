// English A2, class 27 (docs/LESSONS_PLAN.md). Builds on book lesson u5:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c27',
  focus: 'By the end of the class every student can invite someone (*Would you like to …? How about …? Let’s …*), accept warmly and say no politely with a reason (*I’m afraid I can’t. I’m working then.*). The real goal is politeness: a refusal always has *sorry* or *I’m afraid* and a reason.',
  tips: [
    'Many learners answer an invitation with a bare *No.* Explain that in English this sounds rude; always add *Sorry* or *Thanks, but* and a reason.',
    'Students confuse *Do you like dancing?* (in general) and *Would you like to go dancing?* (an invitation). Ask both questions and compare the answers *Yes, I do* and *I’d love to*.',
    'Check the verb forms after each phrase: *Would you like* + *to* + verb, *How about* + verb-*ing*, *Let’s* + verb.',
    'Model the friendly rising tone of *That sounds great!* and *I’d love to!*; intonation carries a lot of the politeness.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Invite three students to something (*Would you like to come for a coffee after class?*). Note their answers on the board, then ask the class which answers sound friendly.' },
    { min: 10, title: 'Inviting and answering', md: 'Board page 1. Read the table aloud. Students sort the phrases: invitation, yes, or polite no.' },
    { min: 10, title: 'The right form', md: 'Board page 2. Students choose the right form after each phrase and explain the pattern.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Polite or not?', md: 'Board page 3. Students fix the mistakes, then make each refusal polite with a reason.' },
    { min: 5, title: 'Exam corner', md: 'Board page 4: Reading Part 1. Students read the message and choose what it says.' },
    { min: 5, title: 'Close', md: 'Each student invites the next student to something real; the next student answers. Set the homework.' },
  ],
  board: [
    { title: 'Inviting and answering', blocks: [
      { t: 'table', caption: 'Invite, accept, say no', explain: ['head'], head: ['Invite', 'Yes', 'No, politely'], rows: [
        ['Would you like to come?', 'I’d love to.', 'Sorry, I can’t. I’m busy.'],
        ['How about a film on Friday?', 'That sounds great.', 'I’m afraid I’m working then.'],
        ['Let’s have lunch together.', 'Good idea!', 'Thanks, but I’m going out.'],
      ] },
      { t: 'ex', kind: 'sort', h: 'Is it an invitation, a yes or a polite no?', groups: ['invitation', 'yes', 'polite no'], items: [
        { s: 'Do you want to go for a walk?', g: 0, why: 'It asks someone to do something with you.' },
        { s: 'Yes, why not?', g: 1, why: 'A relaxed yes.' },
        { s: 'Thanks, but I’m tired tonight.', g: 2, why: '*Thanks, but* and a reason.' },
        { s: 'Are you free on Sunday?', g: 0, why: 'Often the first step of an invitation.' },
        { s: 'I’d love to!', g: 1, why: 'A warm yes.' },
        { s: 'I’m afraid I can’t.', g: 2, why: '*I’m afraid* makes it polite.' },
      ] },
    ] },
    { title: 'The right form', blocks: [
      { t: 'examples', items: [
        { s: 'Would you like **to come**?', n: '*would like* + *to* + verb.' },
        { s: 'How about **going** to the beach?', n: '*How about* + verb-*ing*.' },
        { s: 'Let’s **go** out.', n: '*Let’s* + verb, no *to*.' },
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: 'Would you like ___ dinner with us?', o: ['to have', 'have', 'having'], why: '*would like to* + verb.' },
        { q: 'How about ___ the museum on Sunday?', o: ['visiting', 'visit', 'to visit'], why: '*How about* + *-ing*.' },
        { q: 'Let’s ___ a taxi. It’s late.', o: ['take', 'to take', 'taking'], why: '*Let’s* + base form.' },
      ] },
    ] },
    { title: 'Polite or not?', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Would you like [come] to my party?', a: ['to come'], why: '*Would you like to come?*' },
        { s: 'How about [go] to the cinema?', a: ['going'], why: '*How about going …?*' },
        { s: '[Let’s to go] for a coffee.', a: ['Let’s go'], why: 'No *to* after *Let’s*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'A polite **no** has three parts: **sorry** or **thanks**, **I can’t**, and **a reason**: *Thanks, but I can’t. I’m visiting my mum.* You can add a new idea: *How about next week?*' },
    ] },
    { title: 'Exam corner: Reading Part 1', blocks: [
      { t: 'reading', title: 'Message', md: 'Kate, thanks for the invitation to your barbecue! I’m afraid I can’t come on Saturday because I’m working, but I’m free on Sunday. Could we meet then? Jo' },
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: what does Jo say?', items: [
        { q: '', o: ['Jo can’t go to the barbecue but wants to see Kate another day.', 'Jo is having a barbecue on Sunday.', 'Jo doesn’t want to see Kate this weekend.'], why: 'Jo can’t come on Saturday but suggests Sunday.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Reading Part 1, the wrong answers often use words from the message but change a detail: here *barbecue* and *Sunday* appear, but in the wrong place. Check **who** does **what** and **when**.' },
    ] },
  ],
  activities: {
    one: { title: 'Yes, no, maybe', md: 'Invite the student to six things (a concert, a run at 6 a.m., a wedding, a cooking class …). They must accept three and refuse three politely with a reason. Then swap: the student invites you, and you refuse once with a new idea (*How about next week?*).' },
    small: { title: 'Weekend invitations', md: 'Each student writes three invitations on paper (or in the chat). They move round in pairs, invite and answer. The rule: you may say yes to only two invitations, so the rest must be polite refusals with a reason. At the end, each student says what they are doing this weekend and with whom.' },
    group: { title: 'The invitation chain', md: 'In breakout rooms of four, students invite each other in turn in the chat or aloud; each person must refuse the first invitation politely and accept the second. Back together, each room shares the best excuse they heard, and the class votes for the most polite one.' },
  },
  homework: { book: 'u5:p3', md: 'Finish book lesson 3 of unit 5 (Would you like to come?), including the speaking task. Then write two short messages: one inviting a friend to something, and one politely saying no to an invitation, with a reason.' },
};
