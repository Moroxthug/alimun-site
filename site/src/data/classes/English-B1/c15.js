// English B1, class 15 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u4:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c15',
  focus: 'By the end of the class every student can talk about real future possibilities with the first conditional, and use **when**, **as soon as**, **unless** and **until** with the present simple about the future. The key accuracy point is the present tense after *if* and the time words: *If it **rains**, we’ll stay in. I’ll call you as soon as I **arrive**.*',
  tips: [
    'Almost every learner says *If it will rain…* and *when I will arrive*. Many languages use a future after these words. Correct it every time and write the pattern on the board: **if / when / as soon as / unless + present, will + verb**.',
    'Students often confuse *if* and *when*. Make it simple: **if** = maybe it happens, **when** = it will happen, we only say the time. *If I see Tom…* (maybe) / *When I see Tom…* (I will see him).',
    '*Unless* already contains *not*. Learners add a second negative (*Unless you don’t hurry*). Rewrite it on the board as *if you don’t hurry* to show why.',
    'Keep the topic on food and health so the language feels useful: plans for a healthier week, what happens if you skip breakfast.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What will you do this evening if you are tired? What will you eat when you get home?* Write two answers on the board exactly as students say them, including mistakes, and leave them there.' },
    { min: 10, title: 'If, when, as soon as, unless', md: 'Show board page 1. Explain the table with one example each. Go back to the warm-up sentences and let the class correct them.' },
    { min: 10, title: 'Practice', md: 'Show board page 2. Students choose the right form alone, then read the answers aloud. Ask two students to make a sentence of their own with *unless*.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: a matching task in the format of B1 Preliminary Reading part 2. Students work alone for five minutes, then compare reasons in pairs.' },
    { min: 5, title: 'Fix it', md: 'Show board page 4 with the mistakes. Add one mistake you heard in the activity.' },
    { min: 5, title: 'Close', md: 'Each student finishes the sentence *As soon as this class ends, I’ll…*. Set the homework.' },
  ],
  board: [
    { title: 'If, when, as soon as, unless', blocks: [
      { t: 'table', caption: 'Talking about the future', explain: ['head', 'col1'], head: ['Word', 'Meaning', 'Example'], rows: [
        ['if', 'maybe it will happen', 'If I’m hungry, I’ll have some fruit.'],
        ['when', 'it will happen: the time', 'When I get home, I’ll cook dinner.'],
        ['as soon as', 'immediately after', 'I’ll call you as soon as the results arrive.'],
        ['unless', 'if … not', 'You’ll feel tired unless you sleep more.'],
        ['until', 'up to that time', 'Don’t eat anything until the doctor sees you.'],
      ] },
      { t: 'text', md: 'After all these words, use the **present simple**, even about the future. The other half of the sentence has **will**, an imperative or *can*.' },
    ] },
    { title: 'Choose the right form', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: 'If you ___ breakfast, you’ll be hungry by eleven.', o: ['skip', 'will skip', 'skipped'], why: 'Present simple after *if*.' },
        { q: 'I’ll make the salad when you ___ the vegetables.', o: ['bring', 'will bring', 'are bringing'], why: 'Present simple after *when* about the future.' },
        { q: 'You won’t sleep well ___ you stop drinking coffee at night.', o: ['unless', 'if', 'when'], why: '*unless* = *if you don’t*: you won’t sleep well if you don’t stop.' },
        { q: 'Text me as soon as you ___ the test results.', o: ['get', 'will get', 'got'], why: 'Present simple after *as soon as*.' },
        { q: 'Stay in bed ___ your temperature goes down.', o: ['until', 'unless', 'if'], why: '*until* = up to the time when it goes down.' },
      ] },
    ] },
    { title: 'Exam corner: Reading part 2', blocks: [
      { t: 'text', md: 'In the format of the B1 Preliminary exam, Reading part 2: three people want a place to eat. Read the descriptions and choose the best café for each person.' },
      { t: 'reading', title: 'Three cafés', md: '**Green Bowl**: salads and soups only, no meat. Open from 7.00 for breakfast. Quiet, with free wifi.\n\n**Corner Kitchen**: big portions of home cooking, meat and fish every day. Busy and loud at lunchtime. Opens at 11.30.\n\n**Fit Fuel**: next to the sports centre. Protein shakes, eggs and chicken. Open from 6.00. Discount if you show a gym card.' },
      { t: 'ex', kind: 'choice', h: 'Which café is best for each person?', items: [
        { q: 'Nadia is vegetarian and wants to work on her laptop before her 9.00 meeting.', o: ['Green Bowl', 'Corner Kitchen', 'Fit Fuel'], why: 'No meat, open at 7.00, quiet with wifi.' },
        { q: 'Leo trains at the gym at 6.30 and wants a cheap high-protein breakfast after it.', o: ['Fit Fuel', 'Green Bowl', 'Corner Kitchen'], why: 'Opens at 6.00, protein food, discount with a gym card.' },
        { q: 'Marco is very hungry and wants a big plate of fish for lunch.', o: ['Corner Kitchen', 'Green Bowl', 'Fit Fuel'], why: 'Big portions, fish every day, open at lunchtime.' },
      ] },
      { t: 'tip', md: 'In Reading part 2 every person has three or four needs. Underline them, then check that the place matches **all** of them. One matching word is not enough: Green Bowl serves breakfast, but no fish.' },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
        { s: 'If it [will rain], we’ll eat inside.', a: ['rains'], why: 'Present simple after *if*.' },
        { s: 'I’ll call you when I [will arrive].', a: ['arrive'], why: 'Present simple after *when* about the future.' },
        { s: 'Unless you [don’t hurry], you’ll miss the bus.', a: ['hurry'], why: '*unless* already means *if not*.' },
        { s: 'If you eat more vegetables, you [feel] better soon.', a: ['will feel', '’ll feel'], why: 'The result about the future needs *will*.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'A healthier week', md: 'The student plans a healthier week with you. For each day they make one real promise with *if*, *when*, *as soon as* or *unless* (*When I finish work on Monday, I’ll go for a walk. Unless it rains, I’ll cycle to work*). Ask follow-up questions (*What will you do if you’re too tired?*). Note each verb mistake after *if/when* and replay the sentence correctly.' },
    small: { title: 'Chain of consequences', md: 'Start a chain: *If I skip breakfast, I’ll be hungry at eleven.* The next student continues from the result: *If I’m hungry at eleven, I’ll eat a chocolate bar.* Continue around the group until the chain reaches something funny or terrible. Run two chains, one about health and one about a trip. Correct *if + will* mistakes at the end of each chain.' },
    group: { title: 'Doctor’s advice line', md: 'Breakout rooms of three: one patient, one doctor, one note-taker. The patient describes a small problem (*I can’t sleep*). The doctor answers with three conditional sentences (*If you stop drinking coffee after four, you’ll sleep better. Unless you…*). The note-taker writes the best sentence in the chat. Swap roles twice. Back together, read the best sentences and correct any tense mistakes.' },
  },
  homework: { book: 'u4:p1', md: 'Finish book lesson 1 of unit 4 (If you eat well…), including the speaking task. Then write five sentences about your plans for next week, one each with *if, when, as soon as, unless* and *until*.' },
};
