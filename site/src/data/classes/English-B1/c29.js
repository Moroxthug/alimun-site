// English B1, class 29 (docs/LESSONS_PLAN.md, L6). Review of book units u5 and u6. Draft for the owner's review.
export const LESSON = {
  id: 'c29',
  focus: 'A speaking-heavy review of units 5 and 6. By the end every student can describe a process or a past event with the passive, compare two things precisely (*much bigger, not as … as, slightly cheaper*), and report what someone said or asked with the right tense changes and *say* or *tell*. The class fixes the mistakes you heard most in these two units.',
  tips: [
    'Go through your notes from the last eight classes before this one and choose the three mistakes you heard most. They matter more than anything planned here.',
    'In the passive, the most common error is a missing *be*: *The bridge built in 1890*. Ask *Which verb is missing?* until students find *was* themselves.',
    'In reported speech, students forget to move the verb back (*She said she is tired*) or use *say* with a person (*He said me*). Correct both every time, but accept *is* when the fact is still true.',
    'Reported questions keep the order of a statement: *She asked where I lived*, not *where did I live*. Drill three examples aloud before the activity.',
    'Keep explanations short. The book already taught all of this; today students should talk for most of the hour.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What was in the news this week?* Each student gives one headline in their own words. Write two of them on the board.' },
    { min: 10, title: 'Made, built, invented', md: 'Show board page 1. Students complete the passive sentences alone, then each one says how something in their room was made or where it came from.' },
    { min: 10, title: 'Compare precisely', md: 'Show board page 2. After the exercise, students compare two cities they know with *much*, *a bit* and *not as … as*.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'What did they say?', md: 'Show board page 3. Students report the sentences, then report one thing a classmate said in the activity.' },
    { min: 5, title: 'Exam corner', md: 'Show board page 4: B1 Preliminary Reading part 5. Students choose alone, then check together.' },
    { min: 5, title: 'Close', md: 'Go through the three mistakes you heard most today on a blank page. Set the homework.' },
  ],
  board: [
    { title: 'Made, built, invented', blocks: [
      { t: 'table', caption: 'The passive', explain: ['head', 'col0'], head: ['', 'Present simple', 'Past simple'], rows: [
        ['Positive', 'Paper is made from wood.', 'The bridge was built in 1890.'],
        ['Negative', 'Plastic isn’t recycled here.', 'The letters weren’t sent.'],
        ['Question', 'Where are these phones made?', 'When was the museum opened?'],
      ] },
      { t: 'ex', kind: 'gap', h: 'Write the passive form of the verb in brackets.', items: [
        { q: 'Most of the glass in this town ___ (recycle) every week.', a: ['is recycled'], why: 'A regular process now: present simple passive, *is* + past participle.' },
        { q: 'The first telephone ___ (invent) in the 1870s.', a: ['was invented'], why: 'A finished past event: past simple passive, *was* + past participle.' },
        { q: 'Thousands of trees ___ (plant) in the park last year.', a: ['were planted'], why: 'Plural subject, past: *were* + past participle.' },
        { q: 'English ___ (speak) in many countries.', a: ['is spoken'], why: 'A general fact: *is* + the irregular participle *spoken*.' },
      ] },
    ] },
    { title: 'Compare precisely', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the best words.', items: [
        { q: 'The train is ___ faster than the bus: two hours instead of five.', o: ['much', 'a bit', 'more'], why: 'A big difference: *much* + comparative.' },
        { q: 'My new flat is ___ bigger than the old one, just one more small room.', o: ['slightly', 'far', 'very'], why: 'A small difference: *slightly* or *a bit*.' },
        { q: 'This year’s summer wasn’t ___ hot as last year’s.', o: ['as', 'so much', 'than'], why: '*not as … as* compares two equal-looking things.' },
        { q: 'Recycled paper is ___ expensive as new paper now.', o: ['just as', 'more', 'much'], why: '*just as … as* means exactly the same.' },
      ] },
      { t: 'ex', kind: 'colloc', h: 'Which words go with each verb?', items: [
        { key: 'reduce', o: ['waste', 'pollution', 'a photo', 'the amount of plastic'], a: [0, 1, 3], why: 'We *reduce* an amount of something bad; we *take* a photo.' },
        { key: 'protect', o: ['the environment', 'wildlife', 'a decision', 'the forest'], a: [0, 1, 3], why: 'We *protect* things in danger; we *make* a decision.' },
      ] },
    ] },
    { title: 'What did they say?', blocks: [
      { t: 'ex', kind: 'transform', h: 'Report the sentences. Start with the words given.', items: [
        { q: '“I’m working from home today.”', cue: 'She said', a: ['She said she was working from home that day.', 'She said that she was working from home that day.', 'She said she was working from home today.'], why: 'Present continuous moves back to past continuous; *today* often becomes *that day*.' },
        { q: '“Where do you live?”', cue: 'He asked me', a: ['He asked me where I lived.'], why: 'A reported question has statement order and moves back: *where I lived*.' },
        { q: '“Are you coming to the meeting?”', cue: 'She asked me', a: ['She asked me if I was coming to the meeting.', 'She asked me whether I was coming to the meeting.'], why: 'A yes/no question is reported with *if* or *whether*.' },
        { q: '“Please close the window.”', cue: 'He asked me', a: ['He asked me to close the window.'], why: 'A request: *ask someone to* + verb.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'He [said me] that the train was late.', a: ['told me', 'said'], why: '*tell* needs a person; *say* does not.' },
        { s: 'She asked me where [did I work].', a: ['I worked'], why: 'Statement order in a reported question.' },
      ] },
    ] },
    { title: 'Exam corner: Reading part 5', blocks: [
      { t: 'text', md: 'In the format of B1 Preliminary Reading part 5: a short text with gaps. Choose the word that fits each gap.\n\n**Our town’s new park.** The park ___ (1) opened last spring on the site of an old factory. The old buildings were ___ (2) down, and hundreds of trees were planted. Some people said the project was a waste of money, but most residents ___ (3) the local newspaper that they loved it. Today the park is much ___ (4) popular than anyone expected.' },
      { t: 'ex', kind: 'choice', h: 'Choose the word for each gap.', items: [
        { q: 'Gap 1', o: ['was', 'is', 'were'], why: 'Past, singular subject *the park*: *was opened*.' },
        { q: 'Gap 2', o: ['pulled', 'pushed', 'taken'], why: 'The phrasal verb for removing a building is *pull down*.' },
        { q: 'Gap 3', o: ['told', 'said', 'spoke'], why: '*tell* + person: *told the local newspaper*.' },
        { q: 'Gap 4', o: ['more', 'most', 'very'], why: '*much more popular than*: comparative after *much*.' },
      ] },
      { t: 'tip', md: 'In Reading part 5 the gaps test small words and word partners. Read the whole sentence, and check the word that comes after the gap: *told* + a person, *pulled* + *down*.' },
    ] },
  ],
  activities: {
    one: { title: 'Newsroom', md: 'Give the student three short invented news stories in the chat. The student retells each one as a news reporter, using at least one passive (*A bridge was closed…*) and one reported sentence (*The mayor said that…*). Then the student invents a story about their own town. Note every missing *be* and every *said me*, and replay those sentences together at the end.' },
    small: { title: 'Pass the message', md: 'In pairs, A tells B three facts about their week and asks B two questions. B reports everything to the group: *Ana said she had started a new job. She asked me if I liked cooking.* The group listens for tense changes and *say* or *tell*. Swap roles so everyone reports twice.' },
    group: { title: 'Then and now', md: 'In breakout rooms of three, each room chooses a town they know and prepares a short report: what was built or changed in the last ten years (passive) and how it compares with before (*much busier, not as clean as*). One student per room presents the report to the class. Note mistakes for the closing slot.' },
  },
  homework: { book: 'u5 u6', md: 'Do the unit tests of unit 5 (The world around us) and unit 6 (News and messages). Then write 80 to 100 words about a change in your town: what was built or closed, and what local people said about it.' },
};
