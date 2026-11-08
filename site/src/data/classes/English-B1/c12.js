// English B1, class 12 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u3:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c12',
  focus: 'By the end every student can ask for information politely with indirect questions (*Could you tell me where the station is? Do you know if it’s far?*) and give and understand directions in a town or a building. The key grammar point: in an indirect question the word order is subject + verb, with no *do* or *does*. The speaking goal: a role play at an information desk.',
  tips: [
    'The common mistake is to keep the question order: *Could you tell me where is the bank?* Write both sentences on the board and circle the change.',
    'Yes or no questions need *if* or *whether*: *Do you know if the museum is open?*',
    'Indirect questions are more polite; students from cultures where directness is normal may sound rude in English without them.',
    'For directions, revise the key chunks: *go straight on, take the second left, it’s opposite / next to / on the corner of*.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask a direct question, then the same question indirectly: *Where do you live? / Could you tell me where you live?* Ask: *Which is more polite?*' },
    { min: 15, title: 'Indirect questions', md: 'Show board page 1. Students rewrite the questions, then ask each other three of them.' },
    { min: 10, title: 'Directions', md: 'Show board page 2. Students read the directions and answer, then give directions from your school to a place they know.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: B1 Preliminary Reading Part 6, open gaps. Students write one word in each gap, then compare.' },
    { min: 5, title: 'Close', md: 'Each student asks the class one polite indirect question about the town. Set the homework.' },
  ],
  board: [
    { title: 'Indirect questions', blocks: [
      { t: 'ex', kind: 'transform', h: 'Make the question polite. Start with the words given.', items: [
        { q: 'Where is the station?', cue: 'Could you tell me', a: ['Could you tell me where the station is?'], why: 'Subject before verb: *the station is*.' },
        { q: 'What time does the bus leave?', cue: 'Do you know', a: ['Do you know what time the bus leaves?'], why: 'No *does*; the verb takes *-s*.' },
        { q: 'Is the museum open on Mondays?', cue: 'Do you know', a: ['Do you know if the museum is open on Mondays?', 'Do you know whether the museum is open on Mondays?'], why: 'A yes or no question needs *if* or *whether*.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Could you tell me where [is the bank]?', a: ['the bank is'], why: 'Subject before verb in an indirect question.' },
        { s: 'Do you know what time [does it open]?', a: ['it opens'], why: 'No *does* in an indirect question.' },
      ] },
    ] },
    { title: 'Directions', blocks: [
      { t: 'reading', title: 'How to get to the market', md: 'Go out of the station and turn left. Go straight on for about two hundred metres, past the post office. Take the second street on the right. The market is at the end of the street, opposite the old church.' },
      { t: 'ex', kind: 'tf', h: 'Read the directions. Are the sentences true or false?', items: [
        { q: 'You turn right when you leave the station.', a: 'f', why: '*turn left*.' },
        { q: 'You walk past the post office.', a: 't', why: '*past the post office*.' },
        { q: 'The market is next to the church.', a: 'f', why: 'It is *opposite* the church.' },
      ] },
    ] },
    { title: 'Exam corner: one word in each gap', blocks: [
      { t: 'reading', title: 'An email to a hotel', md: 'Dear Sir or Madam, I am arriving next Friday. Could you tell me ___ the hotel has a car park? I would also like to know how far the hotel is ___ the city centre. Thank you ___ your help.' },
      { t: 'ex', kind: 'gap', h: 'In the format of the B1 Preliminary exam (Reading, Part 6): write one word in each gap.', items: [
        { q: 'Could you tell me ___ the hotel has a car park?', a: ['if', 'whether'], why: 'An indirect yes or no question: *if* or *whether*.' },
        { q: 'how far the hotel is ___ the city centre.', a: ['from'], why: '*far from* a place.' },
        { q: 'Thank you ___ your help.', a: ['for'], why: '*thank you for*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Reading Part 6, look at the word after the gap. *far ___ the centre* needs a preposition; *tell me ___ the hotel has* needs *if* or a question word.' },
    ] },
  ],
  activities: {
    one: { title: 'At the information desk', md: 'You work at a tourist information desk. The student asks six indirect questions (opening times, prices, directions, buses). Then swap. Correct the word order every time, and ask the student to repeat the corrected question.' },
    small: { title: 'Find the place', md: 'Share a simple town map (or describe one in the chat). One student secretly chooses a place and gives directions from the station; the others follow and guess the place. Others must ask at least one indirect question each.' },
    group: { title: 'Polite visitors', md: 'Breakout rooms of three: one student is a hotel receptionist, two are guests with a list of five things they want to know (in the chat). Guests must use indirect questions. Rotate roles. Each room reports the most useful question.' },
  },
  homework: { book: 'u3:p3', md: 'Do lesson 3 of unit 3 (When things go wrong). Write an email of about 80 words to a hotel with four polite indirect questions.' },
};
