// English C1, class 3 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u1:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c03',
  focus: 'By the end every student knows that many state verbs can take the continuous, and uses it on purpose: to change the meaning (*I’m seeing a specialist*, *I’m weighing up the options*), to describe behaviour rather than character (*he’s being stubborn*) and to sound tentative or polite (*I was wondering if…*). The speaking goal: make requests and describe people’s behaviour with the right tone.',
  tips: [
    'Start from the B2 rule and add its other half: a state has no stages, so it stays simple; when the verb describes an activity, it can take the continuous.',
    '*Be* in the continuous describes behaviour a person shows or chooses: *She’s being very patient*. It does not work with fixed qualities: not *He’s being tall*.',
    'The polite continuous (*I was wondering*, *We were hoping*) is one of the most useful C1 habits for emails and meetings. Ask students to use it in every request today.',
    'Some speakers use *I’m loving it* or *I’m wanting* in everyday speech. Tell students it is informal and fine in conversation, but they should not use it in exam writing.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Write on the board: *He’s rude.* and *He’s being rude.* Ask what the difference is. Collect answers before you explain.' },
    { min: 12, title: 'One verb, two meanings', md: 'Show board page 1. Students sort the sentences, then explain the activity meaning of each verb in their own words.' },
    { min: 10, title: 'Tone and mistakes', md: 'Show board page 2. Students fix the mistakes, then make one polite request to a classmate with *I was wondering if…*' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 2. Students write one word in each gap alone, then compare. Ask what kind of word each gap needed.' },
    { min: 5, title: 'Close', md: 'Each student describes someone who is behaving unusually at the moment, with *being*. Set the homework.' },
  ],
  board: [
    { title: 'One verb, two meanings', blocks: [
      { t: 'ex', kind: 'sort', h: 'Is the verb used for a state or for an activity?', groups: ['state', 'activity'], explain: ['groups'], items: [
        { s: 'The parcel weighs just under two kilos.', g: 0, why: '*Weigh* = have a weight: a state.' },
        { s: 'We’re weighing up the options before we decide.', g: 1, why: '*Weigh up* = consider carefully: an activity.' },
        { s: 'She has a very dry sense of humour.', g: 0, why: '*Have* = possess a quality: a state.' },
        { s: 'I’m having second thoughts about the move.', g: 1, why: '*Have second thoughts* = experience doubts now: an activity.' },
        { s: 'It appears that nobody was told.', g: 0, why: '*Appear* = seem: a state.' },
        { s: 'The band is appearing at the festival on Saturday.', g: 1, why: '*Appear* = perform: an activity.' },
      ] },
    ] },
    { title: 'Tone and mistakes', blocks: [
      { t: 'examples', items: [
        { s: 'We **were hoping** you might be able to help.', n: 'The continuous makes a request sound less direct.' },
        { s: 'You’re **being** very generous, but I can’t accept.', n: 'Behaviour at this moment, not character.' },
        { s: 'I’m **getting** used to the new system little by little.', n: 'A change still in progress.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I [am owning] two flats in the city centre.', a: ['own'], why: '*Own* has no activity meaning: always the simple.' },
        { s: 'Your sister [is] really helpful this week, which isn’t like her.', a: ['is being', '’s being'], why: 'Unusual behaviour at the moment: *be* in the continuous.' },
        { s: 'I [think] of applying for the job in Berlin.', a: ['am thinking', '’m thinking'], why: '*Think of* = consider: an activity, so the continuous.' },
        { s: 'He [is seeming] tired, doesn’t he?', a: ['seems'], why: '*Seem* is always a state.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 2', blocks: [
      { t: 'ex', kind: 'gap', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 2): think of the word which best fits each gap. Use only one word in each gap.', items: [
        { q: 'We ___ wondering whether you could join us for dinner on Friday.', a: ['were'], why: 'The past continuous softens the request: *we were wondering*.' },
        { q: 'You’re ___ very quiet this evening. Is everything all right?', a: ['being'], why: 'Behaviour at this moment: *be being* + adjective.' },
        { q: 'I’m seriously thinking ___ taking a year off to travel.', a: ['of', 'about'], why: '*Think of* or *about* + *-ing* = consider.' },
        { q: 'She ___ been seeing a physiotherapist since the accident.', a: ['has'], why: '*See* = visit a professional; the present perfect continuous from the accident until now.' },
        { q: 'The consultant ___ seeing patients until six, so you may have to wait.', a: ['is'], why: 'A temporary activity: the present continuous.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 2** there are eight gaps and each takes **one word**, usually a grammar word: an auxiliary, a preposition, a pronoun or part of a fixed phrase. Read the whole sentence first, then ask what kind of word the grammar needs.' },
    ] },
  ],
  activities: {
    one: { title: 'Polite or blunt?', md: 'Give the student four blunt requests in the chat (*Send me the file. Change the date. Help me with this. Lower the price.*). They rewrite each one politely with the continuous (*I was wondering if…*, *We were hoping…*) and say it aloud. Then switch: you say something tactless and they respond diplomatically.' },
    small: { title: 'Not like them', md: 'Each student describes a person they know who is behaving out of character this week (*My boss is being incredibly patient, which is worrying*). The group asks why and suggests what is really going on. Reward each correct use of *being* and of a state verb used as an activity.' },
    group: { title: 'Meaning switch', md: 'Put six verbs in the chat (see, have, think, look, appear, weigh). In breakout rooms of three, students write two sentences for each verb, one state and one activity, then test another room: read a sentence aloud and the other room says state or activity.' },
  },
  homework: { book: 'u1:p2', md: 'Finish lesson 2 of unit 1 if needed, then do lesson 3 (Fiercely independent). Write a polite email of about 100 words asking a colleague or teacher for a favour, with at least two continuous forms that soften the request.' },
};
