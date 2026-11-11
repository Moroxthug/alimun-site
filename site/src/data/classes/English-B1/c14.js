// English B1, class 14 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u3:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c14',
  focus: 'By the end every student can read a traveller’s guide to a city, find the important details quickly (prices, times, rules), and plan and present a weekend trip using the language of unit 3: rules (*you have to book, you don’t have to pay*), indirect questions and travel words. This class pulls unit 3 together and practises B1 Preliminary Reading Part 3.',
  tips: [
    'Teach scanning: students look for numbers, days and names first, without reading every word.',
    'In the planning task, push for the unit 3 grammar: *You don’t have to book the museum, but you have to buy tickets for the boat.*',
    'Some students read slowly and lose confidence. Give a time limit but let them finish the first task before moving on.',
    'Reading Part 3 has one longer text with multiple-choice questions, including one about the writer’s opinion or purpose. Show how to find it.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *If you had one weekend in a new city, what would you do first?*' },
    { min: 15, title: 'A guide to Kelmouth', md: 'Show board page 1. Students scan the guide for two minutes, then do the true or false task.' },
    { min: 10, title: 'Plan the weekend', md: 'Show board page 2. Students choose the best options for three visitors, then plan their own day in Kelmouth.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: B1 Preliminary Reading Part 3. Students answer alone, then explain where in the text the answer is.' },
    { min: 5, title: 'Close', md: 'Each student says what they would do in Kelmouth and one rule a visitor must know. Set the homework.' },
  ],
  board: [
    { title: 'Kelmouth: a short break', blocks: [
      { t: 'reading', title: 'Kelmouth: a guide for a short break', md: 'Kelmouth is a small harbour town, two hours by train from the capital. Most visitors come for the boat trips to Seal Island, which leave every day at ten and two. You have to book these online the day before, as they are often full.\n\nThe Maritime Museum is free and open every day except Monday. You don’t have to book, but large groups must call first. In the evening, try the fish market restaurants: they don’t take cards, so bring cash.' },
      { t: 'ex', kind: 'tf', h: 'Read the guide. Are the sentences true or false?', items: [
        { q: 'You can visit the museum on Mondays.', a: 'f', why: 'It is open every day *except Monday*.' },
        { q: 'You have to book the boat trip in advance.', a: 't', why: '*You have to book these online the day before.*' },
        { q: 'You need to pay with cash at the fish market restaurants.', a: 't', why: '*They don’t take cards, so bring cash.*' },
        { q: 'Everybody must call the museum before visiting.', a: 'f', why: 'Only *large groups must call first*.' },
      ] },
    ] },
    { title: 'Plan the weekend', blocks: [
      { t: 'ex', kind: 'choice', h: 'What should each visitor do?', items: [
        { q: 'Sam arrives on Monday morning and wants to see seals.', o: ['Book a boat trip online on Sunday.', 'Go to the museum on Monday.', 'Pay for the boat by card at the harbour.'], why: 'Boat trips must be booked the day before, and the museum is closed on Monday.' },
        { q: 'A school group of thirty wants to visit the museum.', o: ['They have to call the museum first.', 'They don’t have to do anything.', 'They mustn’t visit.'], why: '*Large groups must call first.*' },
      ] },
      { t: 'text', md: 'Now plan your own day in Kelmouth. Use *have to*, *don’t have to* and one polite question you would ask at the tourist office: *Could you tell me…?*' },
    ] },
    { title: 'Exam corner: Reading Part 3', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading, Part 3): read the guide on board page 1 again and choose the right answer.', items: [
        { q: 'Why do visitors need to book the boat trip early?', o: ['It is very popular.', 'It only runs once a week.', 'It is cheaper online.'], why: '*They are often full.*' },
        { q: 'What is the writer trying to do in this text?', o: ['Give useful advice to people planning a visit.', 'Complain about the town’s restaurants.', 'Describe the history of the harbour.'], why: 'The whole text gives practical tips for visitors.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Reading Part 3 often ends with a question about the whole text: the writer’s purpose or opinion. Answer the detail questions first, then think about the text as a whole.' },
    ] },
  ],
  activities: {
    one: { title: 'Your city guide', md: 'The student tells you about their own town as if writing a guide: what visitors must do, what they don’t have to do, what not to miss. You play a visitor and ask three polite indirect questions. Finish by agreeing a one-day plan together.' },
    small: { title: 'Trip planners', md: 'Each student chooses a city they know and gives the group a two-minute guide with at least two rules. The group asks indirect questions and chooses the city they would most like to visit, explaining why.' },
    group: { title: 'Agency pitch', md: 'Breakout rooms of four are travel agencies. Each room prepares a weekend plan for Kelmouth for a family with two children, with times, rules and costs. Rooms present their plans; the class chooses the best one.' },
  },
  homework: { book: 'u3', md: 'Do the unit 3 test. Write a short guide of about 100 words to your town for a visitor, with at least three rules and two pieces of advice.' },
};
