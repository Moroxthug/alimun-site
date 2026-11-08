// English A2, class 21 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u4:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c21',
  focus: 'By the end of the class every student can ask for directions politely (**Excuse me, how do I get to…?**), give a full route with **go along, go past, take the second turning on the left, cross, it’s on your right**, and ask and say **how far** a place is. Each student guides a classmate on a map from one place to another without mistakes in the key phrases.',
  tips: [
    '*How can I go to the station?* is understood, but the natural question is **How do I get to…?** Drill it with *Excuse me* in front.',
    'Prepositions are the main problem: **on your left**, **at the traffic lights**, **on the corner**. Write the three phrases on the board and leave them there.',
    'Students confuse *How long* and *How far*. *How far* is distance (*about 500 metres*), *how long* is time (*about ten minutes on foot*).',
    'For online classes, a simple map in the chat works better than a picture: a grid of streets with five places.',
    'Listening matters: in real life the answer is fast. Read your directions at normal speed and let students ask *Sorry, can you say that again?*',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *When did you last get lost? What did you do?* Collect phrases students already know for directions.' },
    { min: 10, title: 'Route words', md: 'Show board page 1. Go through the phrases with gestures. Students match phrases and meanings.' },
    { min: 10, title: 'Follow the route', md: 'Show board page 2. Read the dialogue at normal speed twice. Students answer, then put a route in order.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below, with the map you post in the chat.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: short conversations in the format of A2 Key Listening part 4. Read each one twice; students choose.' },
    { min: 5, title: 'Fix the mistakes', md: 'Show board page 4. Quick corrections.' },
    { min: 5, title: 'Close', md: 'Each student explains the way from their home to the nearest shop in two sentences. Set the homework.' },
  ],
  board: [
    { title: 'Route words', blocks: [
      { t: 'ex', kind: 'match', h: 'Match the phrase and what it means.', pairs: [
        ['go along this street', 'follow the street'],
        ['go past the church', 'walk by it and continue'],
        ['take the second turning on the left', 'the second street on the left'],
        ['cross the road', 'go to the other side'],
        ['it’s on your right', 'you see it on the right side'],
        ['it’s on the corner', 'where two streets meet'],
      ] },
    ] },
    { title: 'Follow the route', blocks: [
      { t: 'dialogue', title: 'Excuse me…', lines: [
        { who: 'Tourist', s: 'Excuse me, how do I get to the museum?' },
        { who: 'Woman', s: 'Go along this street and go past the cinema. Then take the second turning on the left.' },
        { who: 'Tourist', s: 'The second on the left. And then?' },
        { who: 'Woman', s: 'Cross the road at the traffic lights. The museum is on your right, opposite the park.' },
        { who: 'Tourist', s: 'Is it far?' },
        { who: 'Woman', s: 'No, about 600 metres. Ten minutes on foot.' },
      ] },
      { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
        { q: 'Which turning does the tourist take?', o: ['the second on the left', 'the first on the left', 'the second on the right'], why: '*take the second turning on the left*.' },
        { q: 'Where does the tourist cross the road?', o: ['at the traffic lights', 'at the cinema', 'at the park'], why: '*Cross the road at the traffic lights.*' },
        { q: 'How far is the museum?', o: ['about 600 metres', 'about ten metres', 'about six kilometres'], why: '*about 600 metres*.' },
      ] },
      { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
        { a: 'How do I get to the station?', why: 'The natural question: *How do I get to…?*' },
        { a: 'It’s on the corner of Bridge Street.', why: '*on the corner of* + street.' },
      ] },
    ] },
    { title: 'Exam corner: Listening part 4', blocks: [
      { t: 'text', md: 'In the format of the A2 Key exam, Listening part 4: the teacher reads each short conversation twice. Choose the right answer.\n\n**One:** *“Is the bank near here?” – “Yes, go along this street. It’s next to the post office, not the supermarket.”*\n\n**Two:** *“How far is the hotel?” – “It’s about two kilometres, so take a bus. Walking takes forty minutes.”*\n\n**Three:** *“Turn right at the church, then it’s the first building on your left.”*' },
      { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
        { q: 'One: Where is the bank?', o: ['next to the post office', 'next to the supermarket', 'opposite the post office'], why: '*next to the post office, not the supermarket*.' },
        { q: 'Two: What does the man suggest?', o: ['taking a bus', 'walking', 'taking a taxi'], why: '*so take a bus*.' },
        { q: 'Three: Where is the place?', o: ['after the church, on the left', 'before the church, on the right', 'opposite the church'], why: '*Turn right at the church, then… on your left*.' },
      ] },
      { t: 'tip', md: 'In Listening part 4 speakers often say a wrong option and then correct it (*not the supermarket*). Wait for the full sentence, and listen for **not** and **but**.' },
    ] },
    { title: 'Fix the mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
        { s: 'Excuse me, how [can I go] to the station?', a: ['do I get'], why: 'The natural question: *How do I get to…?*' },
        { s: 'Cross the road [in] the traffic lights.', a: ['at'], why: 'A point on the way: *at*.' },
        { s: 'The café is [in] your left.', a: ['on'], why: '*on your left / right*.' },
        { s: 'How [long] is the station? About 500 metres.', a: ['far'], why: 'Distance: *How far*.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Guide me', md: 'Post a simple map in the chat (streets, a station, a museum, a park, a café, a bank). You are a tourist: ask the student for directions to three places from different starting points. Follow the directions exactly; if you end up in the wrong place, the student must find the mistake. Then swap roles.' },
    small: { title: 'Mystery destination', md: 'With the map in the chat, one student gives directions from the station without saying where they end. The others follow on the map and say where they are (*We’re at the bank!*). Each student gives two routes. Finish with *How far is it?* answers for each route.' },
    group: { title: 'Lost tourists', md: 'Breakout rooms of three with the map: one tourist, two locals who give directions in turns (one sentence each). The tourist repeats each instruction to check (*So, the second on the left?*). Change roles three times. Bring everyone back: correct the prepositions you heard most.' },
  },
  homework: { book: 'u4:p3', md: 'Finish book lesson 3 of unit 4 (How do I get to the station?), including the speaking task. Then write directions from your home to a place you like (40 to 50 words), with at least four route phrases.' },
};
