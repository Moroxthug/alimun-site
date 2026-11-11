// English C1, class 51 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u11:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c51',
  focus: 'By the end every student recognises loaded language in a news report and describes bias precisely: *put a spin on*, *sensationalist*, *a misleading headline*, *a balanced account*, *impartial*, *biased towards*, *cherry-pick the facts*, *take something out of context*, *unsubstantiated claims*, *break a story*. The speaking goal: compare two versions of the same story and explain, with evidence, which one is fairer.',
  tips: [
    'Bias often lives in single words. Ask students to find the verb in each headline first: *slashed* or *reduced*, *stormed* or *entered*, *admitted* or *said*.',
    '*Sensational* can be praise (*a sensational goal*); *sensationalist* is always a criticism of the media. Students mix them up in writing.',
    '*News* is uncountable and singular (*the news is*), and you are *biased towards* or *against* something, not *biased to*.',
    'Keep discussion of real outlets general and balanced. The aim is the language of analysis, not an argument about which newspaper is best.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Write two headlines on the board: *Council slashes park budget* and *Council reduces park budget*. Ask: *Same facts? Same impression? Which word makes the difference?*' },
    { min: 12, title: 'Loaded or neutral', md: 'Show board page 1. Students sort the words, then match the phrases about news with their meanings.' },
    { min: 10, title: 'Fix it', md: 'Show board page 2. Students correct the mistakes alone, then rewrite the short report so that it is balanced.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 1. Students choose alone, then compare and explain why the other options do not collocate.' },
    { min: 5, title: 'Close', md: 'Each student names one habit that helps them recognise a biased report. Set the homework.' },
  ],
  board: [
    { title: 'Loaded or neutral', blocks: [
      { t: 'ex', kind: 'sort', h: 'Is each word loaded or neutral?', groups: ['loaded', 'neutral'], explain: ['groups'], items: [
        { s: 'stormed', g: 0, why: 'Suggests violence; *entered* is neutral.' },
        { s: 'entered', g: 1, why: 'Simply describes the movement.' },
        { s: 'slashed', g: 0, why: 'Dramatic; *cut* or *reduced* is neutral.' },
        { s: 'reduced', g: 1, why: 'States the change without judgement.' },
        { s: 'a mob', g: 0, why: 'Negative; *a crowd* is neutral.' },
        { s: 'a crowd', g: 1, why: 'No attitude.' },
        { s: 'admitted', g: 0, why: 'Suggests guilt; *said* or *stated* is neutral.' },
        { s: 'stated', g: 1, why: 'Reports the words only.' },
      ] },
      { t: 'ex', kind: 'match', h: 'Match each phrase with its meaning.', pairs: [
        ['cherry-pick the facts', 'choose only the facts that support you'],
        ['take something out of context', 'quote it so it seems to mean something else'],
        ['unsubstantiated claims', 'claims with no evidence behind them'],
        ['break a story', 'be the first to report it'],
        ['put a positive spin on something', 'present it in a favourable way'],
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'The channel is clearly biased [to] the government.', a: ['towards', 'in favour of'], why: '*Biased towards* or *against*.' },
        { s: 'The news [are] not as bad as the headline suggests.', a: ['is'], why: '*News* is uncountable and singular.' },
        { s: 'It was a cheap, [sensational] article full of rumours.', a: ['sensationalist'], why: 'The critical word for the media is *sensationalist*.' },
        { s: 'The headline was deeply [misleaded].', a: ['misleading'], why: 'The *-ing* adjective describes what misleads.' },
        { s: 'Which paper [made] the story first?', a: ['broke'], why: 'You *break* a story when you are first to report it.' },
      ] },
      { t: 'reading', title: 'Make it balanced', md: 'Furious parents stormed a school meeting last night after head teacher Ian Ross was forced to admit that he had slashed the music budget.' },
      { t: 'tip', art: 'owl', md: 'To rewrite a loaded report, replace each loaded word with a neutral one, add a number if you have one, and report both sides in their own terms.' },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 1', blocks: [
      { t: 'text', md: 'A short text about a local newspaper, one sentence at a time. Choose the word that best fits each gap.' },
      { t: 'ex', kind: 'select', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 1): choose the word that best fits each gap.', items: [
        { q: 'The paper was the first to ___ the story of the factory closure.', o: ['break', 'make', 'open', 'start'], why: 'You *break* a story.' },
        { q: 'Readers complained that the headline gave a ___ impression of the facts.', o: ['false', 'wrong', 'fake', 'untrue'], why: 'The collocation is *a false impression*.' },
        { q: 'The editor insisted that the paper had given a ___ account of both sides.', o: ['balanced', 'equal', 'level', 'even'], why: '*A balanced account*.' },
        { q: 'Critics said the reporter had ___ the facts that suited the story.', o: ['cherry-picked', 'hand-picked', 'picked up', 'picked out'], why: '*Cherry-pick*: choose only the facts that support you.' },
        { q: 'One quote, they argued, had been taken out of ___.', o: ['context', 'contents', 'content', 'connection'], why: 'The fixed phrase is *take something out of context*.' },
        { q: 'The paper later apologised for printing ___ claims about the owner.', o: ['unsubstantiated', 'unproving', 'unsupporting', 'unconfirming'], why: '*Unsubstantiated claims*: claims with no evidence.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 1 of C1 Advanced several options often look possible. Read the words on both sides of the gap: the right one forms a fixed phrase or a collocation with them.' },
    ] },
  ],
  activities: {
    one: { title: 'Two headlines', md: 'Give the student a neutral one-sentence news item. They write two headlines in the chat, one with a positive spin and one sensationalist, then explain which words create each effect. Finish by writing a balanced headline together.' },
    small: { title: 'Spin doctors', md: 'Each student gets a different neutral fact in a private chat message (*A new road will open six months late*). They present it to the group with a spin, positive or negative. The others say which way it was spun and which words gave it away, using the language from today.' },
    group: { title: 'Rewrite rooms', md: 'Breakout rooms of three take the loaded report on board page 2 and rewrite it as a balanced account of about four sentences. Bring everyone back; the class compares versions and agrees which one is most impartial, with reasons.' },
  },
  homework: { book: 'u11:p3', md: 'Finish lesson 3 of unit 11 if needed, then do lesson 4 (A discussion on misinformation). Find two reports of the same story from different sources and write about 120 words comparing them, using at least five phrases from today.' },
};
