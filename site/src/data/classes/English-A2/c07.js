// English A2, class 7 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u2:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c07',
  focus: 'By the end every student can talk about where they were and what they did with *was / were* and regular past verbs, spell the *-ed* forms correctly, and say the three *-ed* endings (/t/, /d/, /ɪd/). The speaking goal: describe last weekend in five sentences.',
  tips: [
    'The pronunciation of *-ed* matters more than students think: many say *cook-ed* in two syllables. Only after *t* or *d* do we add a syllable (*wanted, needed*).',
    '*I were* is a typical mistake. Drill *I was, he was, we were* quickly with gestures.',
    'Spelling: *studied, stopped, planned*. Show the rule with three examples, not a long list.',
    'Use the students’ real weekend: it makes the past personal and memorable.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Where were you last Saturday at eight in the evening?* Students answer with *I was…*' },
    { min: 10, title: 'Was and were', md: 'Show board page 1. Students complete the sentences, then ask a partner three *Were you…?* questions.' },
    { min: 10, title: 'Saying -ed', md: 'Show board page 2. Say each verb together and sort them by sound.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: one word in each gap, in the format of A2 Key Reading Part 5.' },
    { min: 10, title: 'Mistakes and close', md: 'Fix two mistakes from the activity together. Set the homework.' },
  ],
  board: [
    { title: 'Was and were', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose was or were.', items: [
        { q: 'I ___ very tired yesterday.', o: ['was', 'were'], why: '*I* takes *was*.' },
        { q: 'My parents ___ in Rome last week.', o: ['were', 'was'], why: '*they* takes *were*.' },
        { q: '___ the film good?', o: ['Was', 'Were'], why: '*the film* (it): *Was*.' },
        { q: 'We ___ at home on Sunday.', o: ['weren’t', 'wasn’t'], why: '*we* takes *were*: *weren’t*.' },
      ] },
      { t: 'ex', kind: 'gap', h: 'Write the past simple.', items: [
        { q: 'She ___ (study) until midnight.', a: ['studied'], why: 'Consonant + *y*: *-ied*.' },
        { q: 'The bus ___ (stop) outside my house.', a: ['stopped'], why: 'Short verb, one vowel + one consonant: double it.' },
        { q: 'We ___ (watch) a film.', a: ['watched'], why: 'Most verbs: add *-ed*.' },
      ] },
    ] },
    { title: 'Saying -ed', blocks: [
      { t: 'ex', kind: 'sort', h: 'How do you say the -ed ending?', groups: ['/t/', '/d/', '/ɪd/'], items: [
        { s: 'cooked', g: 0, why: 'After *k*: /t/.' },
        { s: 'played', g: 1, why: 'After a vowel sound: /d/.' },
        { s: 'wanted', g: 2, why: 'After *t*: an extra syllable, /ɪd/.' },
        { s: 'finished', g: 0, why: 'After *sh*: /t/.' },
        { s: 'called', g: 1, why: 'After *l*: /d/.' },
        { s: 'needed', g: 2, why: 'After *d*: /ɪd/.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Only after **t** or **d** does *-ed* add a syllable: *want-ed, need-ed*. *Cooked* is one syllable: /kʊkt/.' },
    ] },
    { title: 'Exam corner: one word in each gap', blocks: [
      { t: 'reading', title: 'A postcard', md: 'Dear Mia, we ___ in Lisbon last week. The weather ___ lovely and we walked everywhere. On Friday we visited a museum and in the evening we listened to some music.' },
      { t: 'ex', kind: 'gap', h: 'In the format of the A2 Key exam (Reading, Part 5): write one word in each gap.', items: [
        { q: 'We ___ in Lisbon last week.', a: ['were'], why: '*we* + past of *be*: *were*.' },
        { q: 'The weather ___ lovely.', a: ['was'], why: '*the weather* (it): *was*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 5, check that the word agrees with the sentence: **was** with one person or thing, **were** with more than one. It is a favourite exam point.' },
    ] },
  ],
  activities: {
    one: { title: 'Last weekend', md: 'The student tells you about last weekend in five sentences using *was / were* and regular verbs (*I stayed at home, I cooked, I watched…*). You ask *Where were you? Who were you with?* Then you tell your weekend and the student asks the questions. Listen especially for the *-ed* sounds.' },
    small: { title: 'Two truths and a lie', md: 'Each student says three sentences about last month with regular verbs, one of them false. The others ask one question each and guess the lie. Correct *-ed* pronunciation as you go.' },
    group: { title: 'Where were you?', md: 'Breakout rooms of four: each student says where they were at three times (*yesterday at 7 am, last Saturday at 10 pm, on 1 January at midnight*). One student writes the most surprising answer in the chat. Share in the main room.' },
  },
  homework: { book: 'u2:p1', md: 'Do lesson 1 of unit 2 in the book. Write six sentences about last weekend with regular verbs and say them aloud, checking the *-ed* sounds.' },
};
