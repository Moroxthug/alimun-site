// English C1, class 56 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u12:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c56',
  focus: 'By the end every student has read and discussed an article about letting town verges and parks grow wild, can follow the writer’s attitude and the views of the people quoted, and can answer questions in the format of C1 Advanced Reading Part 5. The speaking goal: a developed opinion on whether land should be returned to nature, using a compound adjective, a causative and a word built in two steps.',
  tips: [
    'In Part 5 the right option rarely repeats the text’s words; it paraphrases a whole sentence or paragraph. Ask students to underline the part of the text that proves each answer.',
    'A wrong option often goes further than the text (*always*, *proved*, *everyone*). Train students to look for the limiting words in the text: *in some places*, *at least for now*, *not yet*.',
    'Separate the writer’s view from the views of the people quoted. Ask: *Who thinks this: the writer, the council or the residents?*',
    'Recycle the unit: reward *drought-resistant*, *man-made*, *irreversible*, *unsustainably* and any causative in the discussion.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Do you prefer a neat park with short grass, or a wild one with long grass and flowers? Why?* Collect two reasons on each side.' },
    { min: 17, title: 'The article', md: 'Show board page 1. Students read alone (about six minutes), then answer the questions in the format of Part 5. Check by asking which sentence gave each answer and why the other options are wrong.' },
    { min: 8, title: 'Words from the text', md: 'Show board page 2. Students match the phrases with their meanings, then find one compound and one causative in the article.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Your view', md: 'Show board page 3. Students give a developed answer to the question, as in Speaking Part 4, and respond to one other student.' },
    { min: 5, title: 'Close', md: 'Each student finishes: *If my town let one place go wild, I’d choose… because…* Set the homework.' },
  ],
  board: [
    { title: 'The article', blocks: [
      { t: 'reading', title: 'The verge of something', md: 'Two summers ago the council in a small market town did something that, by its own admission, it had never tried before: nothing. The grass verges along the main roads, normally cut every few weeks, were left alone from April to September. By July they were waist-high and full of colour, and the council’s inbox was full of complaints.\n\nThe most common objection was not about wildlife at all. Residents said the verges looked neglected, as though the town had given up. One shop owner told the local paper that visitors would think the place was in decline. It is a revealing reaction. For many of us, a well-kept landscape is a sign of a well-run community, and long grass sends the opposite message, whatever is living in it.\n\nWhat was living in it surprised even the council’s own ecologist. Within a single season, she recorded wildflowers that had not been seen on the verges for years, and the insects that depend on them followed. She is careful not to overstate the case. A few strips of grass will not reverse the decline of insects nationally, she says, but they show how quickly some species return when we stop making the land tidy.\n\nThe council has since reached a compromise. A narrow strip next to each pavement is now cut short, so that the verges look cared for, while the rest is left to grow. The complaints have largely stopped. It seems that people did not object to wildness as such, only to the impression that nobody was in charge.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 5): choose the answer that fits best according to the text.', items: [
        { q: 'In the first paragraph, the writer suggests that the council’s decision was', o: ['unusual for the council and unpopular at first.', 'carefully planned with local residents.', 'a way of saving money on maintenance.', 'welcomed by most people in the town.'], why: '*It had never tried before* and *the council’s inbox was full of complaints*.' },
        { q: 'Why does the writer describe the residents’ reaction as *revealing*?', o: ['It shows that people judge a place by how cared for it looks.', 'It shows that residents know little about wildlife.', 'It proves that the town really was in decline.', 'It suggests that visitors had stopped coming.'], why: '*A well-kept landscape is a sign of a well-run community.*' },
        { q: 'What does the ecologist say about the results?', o: ['They are encouraging but limited in what they can achieve.', 'They prove that insect numbers are recovering nationally.', 'They were exactly what she had predicted.', 'They are too recent to be taken seriously.'], why: '*She is careful not to overstate the case… will not reverse the decline… but they show…*' },
        { q: 'What does the final paragraph suggest about the complaints?', o: ['People mainly wanted to see that the land was being looked after.', 'People had come to prefer short grass after all.', 'The council stopped listening to residents.', 'Most residents were never really opposed to long grass.'], why: '*Only to the impression that nobody was in charge*: the short strip shows care. The last option goes further than the text.' },
      ] },
    ] },
    { title: 'Words from the text', blocks: [
      { t: 'ex', kind: 'match', h: 'Match the phrases from the article with their meanings.', pairs: [
        ['by its own admission', 'as it says itself'],
        ['in decline', 'getting worse over time'],
        ['overstate the case', 'claim more than the evidence shows'],
        ['as such', 'in itself'],
        ['in charge', 'responsible and in control'],
      ] },
      { t: 'tip', art: 'owl', md: 'Part 5 of C1 Advanced has six questions on one long text, in the order of the text. Many ask about attitude or purpose, so notice phrases like *she is careful not to overstate the case*: they tell you exactly how far a claim goes.' },
    ] },
    { title: 'Your view', blocks: [
      { t: 'text', md: 'Answer as you would in Speaking Part 4: *Should towns and farmers let more land return to nature, even if some people think it looks neglected?*\n\nUse a compound adjective (*drought-resistant*, *man-made*, *long-standing*), a causative (*make*, *let*, *have something done*) and a word built in two steps (*unsustainably*, *irreversible*, *unpredictable*).' },
      { t: 'tip', art: 'owl', md: 'Give an opinion, a reason, a qualification and an example, then turn to your partner: *What do you think? Would people where you live accept it?*' },
    ] },
  ],
  activities: {
    one: { title: 'Council meeting', md: 'Role-play a council meeting: the student is the ecologist and you are an unhappy resident, then swap. Each side must use at least two words from the unit and one causative. At the end, write the student’s three strongest arguments in the chat and polish them together.' },
    small: { title: 'Find the evidence', md: 'Each student writes one false statement about the article in the chat. The others find the sentence that proves it false and read it aloud. Then the group discusses whether they would support the council’s compromise.' },
    group: { title: 'Planning rooms', md: 'Breakout rooms of three plan one wild area for their own town or a town they know: where it would be, what would be let go and what would be kept tidy, and how they would get residents to accept it. Bring everyone back; each room presents its plan in one minute.' },
  },
  homework: { book: 'u12', md: 'Finish lesson 4 of unit 12 if needed and do the unit 12 test. Write about 200 words answering: *Should land be returned to nature even if it costs local people their living?* Use a compound adjective, a causative and a word built in two steps.' },
};
