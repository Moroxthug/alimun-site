// English A1, class 44 (docs/LESSONS_PLAN.md). Builds on book lesson u8:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c44',
  focus: 'By the end of the class every student can ask for directions (*Excuse me, how do I get to …?*, *Is there a … near here?*), give simple directions with the imperative (*Turn left. Go straight on. Take the second street on the right.*) and say where a place is (*next to*, *opposite*, *on the left*). Students must both give and follow directions on a map.',
  tips: [
    'Directions use the imperative with no subject. Learners often add *you*: *You turn left.* Correct it to **Turn left.**',
    'The negative imperative is **Don’t** + verb: *Don’t turn right.* Not *No turn right.*',
    '*On the left* and *on the right*, never *in the left*. Write it big on the board.',
    'Left and right on a shared screen can be confusing: always say which way the person is facing, or use a map with a clear arrow for the start.',
    'Ordinal numbers (*first*, *second*, *third*) are needed here; revise them quickly if the class is unsure.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Is there a supermarket near your home? Where is it?* Collect place words on the board.' },
    { min: 10, title: 'Giving directions', md: 'Show board page 1. Go through the phrases, then students fix the mistakes on the board.' },
    { min: 10, title: 'Follow the map', md: 'Show board page 2. Read the directions; students say where they arrive.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Where is it?', md: 'Show board page 3. Students complete the sentences with *next to*, *opposite*, *between* and *on the corner*.' },
    { min: 5, title: 'Exam corner', md: 'Show board page 4.' },
    { min: 5, title: 'Close', md: 'Each student gives directions from their home to a place they like, in three sentences. Set the homework.' },
  ],
  board: [
    { title: 'Turn left, go straight on', blocks: [
      { t: 'table', caption: 'Directions', explain: ['head', 'col1'], head: ['Say', 'Meaning'], rows: [
        ['Turn left. / Turn right.', 'change direction'],
        ['Go straight on.', 'do not turn'],
        ['Take the first street on the left.', 'turn into the first street on your left'],
        ['Go past the bank.', 'walk in front of the bank and continue'],
        ['It’s on the right.', 'you can see it on your right'],
        ['Don’t cross the road.', 'stay on this side'],
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: '[You turn] left at the station.', a: ['Turn'], why: 'Directions use the imperative, with no subject.' },
        { s: '[No turn] right here.', a: ['Don’t turn', 'Do not turn'], why: 'The negative imperative is *Don’t* + verb.' },
        { s: 'The bank is [in] the left.', a: ['on'], why: '*on the left*, *on the right*.' },
      ] },
    ] },
    { title: 'Follow the directions', blocks: [
      { t: 'text', md: 'You are at the station. The map (shared by the teacher) shows Station Road going north, with the first street on the left (Park Street) and the second street on the right (Hill Street). The café is on Park Street; the museum is at the end of Station Road; the bank is on Hill Street.' },
      { t: 'ex', kind: 'choice', h: 'Where do you arrive?', items: [
        { q: 'Go straight on. Take the first street on the left. It’s on the right.', o: ['the café', 'the bank', 'the museum'], why: 'The first street on the left is Park Street: the café.' },
        { q: 'Go straight on, past Park Street and Hill Street. It’s at the end of the road.', o: ['the museum', 'the café', 'the bank'], why: 'At the end of Station Road: the museum.' },
        { q: 'Go straight on and take the second street on the right.', o: ['the bank', 'the café', 'the station'], why: 'The second street on the right is Hill Street: the bank.' },
      ] },
    ] },
    { title: 'Where is it?', blocks: [
      { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
        { q: 'The café is next ___ the bank.', a: ['to'], why: '*next to*.' },
        { q: 'The post office is ___ the park: on the other side of the road.', a: ['opposite'], why: 'On the other side of the road: *opposite*.' },
        { q: 'The pharmacy is ___ the bank and the café.', a: ['between'], why: 'With one place on each side: *between*.' },
      ] },
    ] },
    { title: 'Exam corner: asking the way', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the best reply.', items: [
        { q: '“Excuse me, is there a bank near here?”', o: ['Yes, there’s one opposite the station.', 'Yes, I’m going to the bank.', 'No, it isn’t.'], why: 'Answer *Is there…?* with *there’s* and a place.' },
        { q: '“How do I get to the museum?”', o: ['Go straight on and turn left.', 'By bus, please.', 'It takes a ticket.'], why: 'The question asks for directions.' },
        { q: '“Is it far?”', o: ['No, it’s about five minutes on foot.', 'No, it’s on the left.', 'Yes, it’s a museum.'], why: '*Far* asks about distance or time.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Real map', md: 'Open a real map of the student’s town (shared screen). The student chooses a start and a secret destination and gives you directions; you follow them on the map and say where you arrive. Then swap. Correct the imperatives and prepositions.' },
    small: { title: 'Guess the place', md: 'Share a simple town map with numbered places. A student gives directions from the station to a secret place; the others follow on the map and write the place in the chat. The first right answer gives the next directions.' },
    group: { title: 'Tourist and local', md: 'Breakout rooms of three with the same map (in the chat). A is a tourist and asks the way to three places; B is a local and gives directions; C follows on the map and checks. Rotate roles. Back in the main room, each room gives the class one set of directions to follow.' },
  },
  homework: { book: 'u8:p3', md: 'Finish book lesson 3 of unit 8 (Turn left). Then write directions from your home to a café, shop or park near you (four or five sentences).' },
};
