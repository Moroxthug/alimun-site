// Practice set: one exercise of every kind, English B1 (docs/BOOKS.md "Practice sets"). Draft for native-teacher review.
// Instructions and every `why` are explanations (translated in i18n/<set>.<lang>.json); everything else is in English.
export const SET = {
  id: 'English-B1-types', language: 'English', level: 'B1', review: 'draft',
  title: 'Every kind of exercise',
  about: 'One exercise of each kind, with B1 grammar and words.',
  blocks: [
    { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
      { q: 'I’ve lived here ___ 2019.', o: ['since', 'for', 'from'], why: '*Since* goes with a point in time; *for* goes with a period of time.' },
      { q: 'Have you ___ been to Lisbon?', o: ['ever', 'yet', 'already'], why: 'Use *ever* in questions about experiences in your life.' },
      { q: 'She ___ her keys, so she can’t get in.', o: ['has lost', 'lost', 'loses'], why: 'The present perfect shows a past action with a result now.' },
    ] },
    { t: 'ex', kind: 'odd', h: 'Tap the odd one out.', items: [
      { o: ['carrot', 'apple', 'banana', 'pear'], why: 'A carrot is a vegetable; the others are fruit.' },
      { o: ['drove', 'walked', 'played', 'cleaned'], why: '*Drove* is irregular; the others add *-ed*.' },
      { o: ['yesterday', 'often', 'usually', 'sometimes'], why: '*Yesterday* is a time in the past; the others say how often.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'There are seven days in a week.', a: 't', why: 'Monday to Sunday: seven days.' },
      { q: 'In the United Kingdom, cars drive on the right.', a: 'f', why: 'In the United Kingdom, cars drive on the left.' },
      { q: 'At sea level, water boils at 100 degrees Celsius.', a: 't', why: 'Yes, 100 °C at sea level.' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose the right form for each gap.', items: [
      { q: 'If it ___ tomorrow, we’ll stay at home.', o: ['rains', 'will rain', 'rained'], why: 'First conditional: *if* + present simple, then *will* + verb.' },
      { q: 'I’m looking forward to ___ you.', o: ['seeing', 'see', 'have seen'], why: '*Look forward to* is followed by the *-ing* form.' },
      { q: 'She asked me where I ___.', o: ['lived', 'do live', 'did live'], why: 'In a reported question the word order is like a statement and the tense moves back.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'I’ve known her ___ ten years.', a: ['for'], why: '*For* + a period of time.' },
      { q: 'There isn’t ___ milk left.', a: ['any'], why: 'Use *any* in negative sentences.' },
      { q: 'He’s the man ___ car was stolen.', a: ['whose'], why: '*Whose* shows who something belongs to.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Use the word in capitals to make a word that fits the gap.', items: [
      { q: 'The film was really ___; I nearly fell asleep.', base: 'bore', a: ['boring'], why: 'Adjectives with *-ing* describe the thing that causes the feeling.' },
      { q: 'Thank you for your ___.', base: 'kind', a: ['kindness'], why: '*-ness* makes a noun from an adjective.' },
      { q: 'It’s ___ to swim here; the water is too deep.', base: 'safe', a: ['unsafe'], why: '*un-* gives the opposite meaning.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence so that it means the same. Use the words given.', items: [
      { q: 'I started working here three years ago.', cue: 'for', a: ['I have worked here for three years', 'I’ve worked here for three years', 'I have been working here for three years', 'I’ve been working here for three years'], why: 'Present perfect + *for* + a period of time.' },
      { q: '“Where is the station?” she asked me.', cue: 'She asked me', a: ['She asked me where the station was'], why: 'Reported question: statement word order, and *is* becomes *was*.' },
      { q: 'It’s a pity I can’t come to the party.', cue: 'I wish', a: ['I wish I could come to the party', 'I wish I could come'], why: '*I wish* + past form for a present situation: *could*.' },
    ] },
    { t: 'ex', kind: 'conjugate', h: 'Write the past simple of *be*.', verb: 'be', tense: 'past simple', rows: [
      ['I', 'was'], ['you', 'were'], ['he, she, it', 'was'], ['we', 'were'], ['they', 'were'],
    ] },
    { t: 'ex', kind: 'crossword', h: 'Solve the crossword: words for travelling.', words: [
      { a: 'passport', clue: 'The document you show at the border.' },
      { a: 'luggage', clue: 'The bags you take on a trip.' },
      { a: 'platform', clue: 'Where you wait for the train at the station.' },
      { a: 'ticket', clue: 'You need one to get on the train.' },
      { a: 'delay', clue: 'When the flight leaves late, there is a …' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'How long have you been learning English?', why: 'Question word, then *have* + subject + *been* + *-ing*.' },
      { a: 'I have never seen such a beautiful view.', why: '*Never* goes between *have* and the participle.' },
    ] },
    { t: 'ex', kind: 'build', h: 'Build the sentence. Two words do not belong.', items: [
      { a: 'She has just finished her homework.', extra: ['yet', 'did'], why: '*Just* goes between *has* and the participle.' },
      { a: 'We were watching TV when the phone rang.', extra: ['was', 'ringing'], why: 'Past continuous for the longer action, past simple for the short one.' },
    ] },
    { t: 'ex', kind: 'spot', h: 'Tap the verbs in the past simple.', items: [
      { s: 'Yesterday I [got] up early, [made] coffee and [walked] to the station.', why: '*Got* and *made* are irregular; *walked* adds *-ed*.' },
      { s: 'She [called] me last night and we [talked] for an hour.', why: 'Both are regular: they add *-ed*.' },
    ] },
    { t: 'ex', kind: 'colloc', h: 'Which words go with the verb? Tap all that fit.', items: [
      { key: 'make', o: ['a mistake', 'a decision', 'homework', 'a photo', 'friends'], a: [0, 1, 4], why: 'We *make* a mistake, a decision and friends, but we *do* homework and *take* a photo.' },
      { key: 'take', o: ['a break', 'a shower', 'a mistake', 'a seat', 'the bed'], a: [0, 1, 3], why: 'We *take* a break, a shower and a seat, but we *make* a mistake and *make* the bed.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write it correctly.', items: [
      { s: 'I have [saw] that film twice.', a: ['seen'], why: 'After *have*, use the past participle: *seen*.' },
      { s: 'She [don’t] like coffee.', a: ['doesn’t', 'does not'], why: 'With *she*, use *doesn’t*.' },
      { s: 'There are [less] people here today.', a: ['fewer'], why: 'Use *fewer* with nouns you can count, like *people*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the phrasal verbs with their meanings.', pairs: [
      ['look after', 'take care of'], ['give up', 'stop doing'], ['find out', 'discover'], ['put off', 'postpone'],
    ] },
    { t: 'ex', kind: 'bank', h: 'Complete the sentences with words from the box.', extra: ['for', 'with'], items: [
      { q: 'I’m not used ___ getting up so early.', a: 'to', why: '*Be used to* + *-ing*.' },
      { q: 'It depends ___ the weather.', a: 'on', why: 'We say *depend on*.' },
      { q: 'She’s very good ___ languages.', a: 'at', why: 'We say *good at*.' },
      { q: 'I’m interested ___ photography.', a: 'in', why: 'We say *interested in*.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Sort the verbs: regular or irregular?', groups: ['regular', 'irregular'], explain: ['groups'], items: [
      { s: 'work', g: 0, why: '*work → worked*' }, { s: 'buy', g: 1, why: '*buy → bought*' },
      { s: 'study', g: 0, why: '*study → studied*' }, { s: 'think', g: 1, why: '*think → thought*' },
      { s: 'arrive', g: 0, why: '*arrive → arrived*' }, { s: 'leave', g: 1, why: '*leave → left*' },
    ] },
    { t: 'ex', kind: 'memory', h: 'Find the pairs: each verb and its past participle.', pairs: [
      ['go', 'gone'], ['eat', 'eaten'], ['write', 'written'], ['take', 'taken'], ['break', 'broken'], ['fly', 'flown'],
    ] },
    { t: 'ex', kind: 'search', h: 'Find six words for food in the grid.', words: ['bread', 'cheese', 'apple', 'rice', 'onion', 'butter'] },
  ],
};
