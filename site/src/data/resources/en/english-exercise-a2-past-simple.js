// Resource: exercise. English items stay English; explanations are in the reader's language.
export default {
  key: 'en-ex-a2', site: 'en', slug: 'english-exercise-a2-past-simple', kind: 'exercise', course: 'English', level: 'A2',
  draw: 'snail', tint: 'sun', published: '2026-10-26',
  title: 'English exercise: past simple with irregular verbs (A2)',
  metaTitle: 'Past simple irregular verbs exercise for A2 English – Alimun',
  desc: 'Twelve free past simple questions for A2 learners of English: went, saw, took, did and other irregular verbs, with an explanation for every answer.',
  lead: 'Choose the right past form in each sentence. You see straight away if you are right, and why.',
  instructions: 'Choose the right form.',
  about: [
    'The past simple talks about finished actions at a finished time in the past: yesterday, last week, two years ago, in 2019. Regular verbs add -ed (work, worked), but many of the most common verbs are irregular and have their own past form that you learn by heart: go becomes went, see becomes saw, take becomes took, buy becomes bought. The verb be has two past forms, was with I, he, she and it, and were with you, we and they.',
    'Questions and negatives in the past use did and didn\'t for every person, and after did the main verb goes back to its base form: "Did you eat?" and "I didn\'t sleep well", never "Did you ate". A common mistake is to use the past participle (gone, seen, taken) instead of the past simple. The participle belongs with have, as in "I have seen it", so on its own it is wrong: say "I saw it", not "I seen it".',
  ],
  items: [
    { q: 'Yesterday I ___ to the beach.', options: ['goed', 'went', 'gone', 'go'], a: 1, why: 'Go is irregular: its past simple is went.' },
    { q: 'She ___ a new phone last week.', options: ['bought', 'buyed', 'buy', 'boughted'], a: 0, why: 'Buy is irregular: its past simple is bought.' },
    { q: 'We ___ a great movie on Saturday.', options: ['seen', 'saw', 'seed', 'see'], a: 1, why: 'The past simple of see is saw; seen needs have in front of it.' },
    { q: 'Did you ___ breakfast this morning?', options: ['ate', 'eaten', 'eat', 'eated'], a: 2, why: 'After did, the main verb is in the base form: Did you eat?' },
    { q: 'He ___ his keys at home this morning.', options: ['leaved', 'lefted', 'left', 'leave'], a: 2, why: 'Leave is irregular: its past simple is left.' },
    { q: 'I ___ sleep well last night.', options: ["didn't", "don't", "wasn't"], a: 0, why: 'Past negatives with ordinary verbs use didn\'t + the base verb.' },
    { q: 'They ___ a lot of photos on vacation.', options: ['taken', 'taked', 'took'], a: 2, why: 'The past simple of take is took; taken needs have in front of it.' },
    { q: 'Last night my grandfather ___ me a story.', options: ['told', 'telled', 'tells'], a: 0, why: 'Tell is irregular: its past simple is told.' },
    { q: 'She ___ her friend at the coffee shop yesterday.', options: ['meeted', 'met', 'meets'], a: 1, why: 'Meet is irregular: its past simple is met.' },
    { q: 'What time ___ you get up yesterday?', options: ['did', 'do', 'were'], a: 0, why: 'Past questions with ordinary verbs use did + the base verb.' },
    { q: 'I ___ a letter to my aunt last month.', options: ['writed', 'written', 'wrote'], a: 2, why: 'The past simple of write is wrote; written needs have in front of it.' },
    { q: 'We ___ very tired after the long walk.', options: ['was', 'were', 'are'], a: 1, why: 'The past of be with we, you and they is were.' },
  ],
  related: ['en-ex-a1', 'en-ex-b1', 'en-quiz-a2'],
};
