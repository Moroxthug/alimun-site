// Alimun test, English B2: Use of English. Draft for native-teacher review.
export const PAPER = {
  id: 'language', title: 'Use of English: grammar and vocabulary', minutes: 30,
  parts: [
    {
      id: 'p1', ref: 'Part 1', title: 'A change of career',
      about: 'Read the text. For each gap, choose the answer which fits best.',
      blocks: [
        { t: 'ex', kind: 'cloze', h: 'Choose the right answer for each gap.',
          text: 'Ten years ago, Tom Reid seemed to have it all: a job in advertising, a flat in the city centre and a busy social life. But he had been {} increasingly restless, and at thirty-four he finally {} the plunge and retrained as a primary school teacher.\n\n“People assumed I was having some kind of crisis,” he says. “In fact, I’d been {} it over for years.” The hardest part was financial. During his training he earned very little, and it was a struggle to make {} meet. He cut {} on holidays, eating out and almost everything else.\n\nTo his surprise, his old colleagues were extremely {} of his decision, and several of them still visit his school to talk to the children about their jobs. He has never once {} the move. “If I’d stayed,” he says, “I’d have spent my life wondering what {} have been.”',
          items: [
            { o: ['growing', 'rising', 'raising', 'developing'], why: 'We say *grow restless*: a feeling that slowly becomes stronger.' },
            { o: ['took', 'made', 'gave', 'did'], why: 'The fixed phrase is *take the plunge*, meaning finally do something risky.' },
            { o: ['thinking', 'getting', 'bringing', 'handing'], why: '*Think something over* means consider it carefully for a long time.' },
            { o: ['ends', 'money', 'pays', 'costs'], why: 'The fixed phrase is *make ends meet*: have just enough money to live.' },
            { o: ['back', 'off', 'out', 'away'], why: '*Cut back on* something means spend less on it.' },
            { o: ['supportive', 'helping', 'encouraged', 'backing'], why: 'Only *supportive* is an adjective that takes *of*: *supportive of a decision*.' },
            { o: ['regretted', 'apologised', 'complained', 'worried'], why: '*Regret* takes a direct object; the others need a preposition (*apologise for, complain about, worry about*).' },
            { o: ['might', 'must', 'should', 'ought'], why: 'The fixed phrase *what might have been* describes a possibility that never happened.' },
          ] },
      ],
    },
    {
      id: 'p2', ref: 'Part 2', title: 'A small invention',
      about: 'Read the text. Think of the word which best fits each gap. Use only one word in each gap.',
      blocks: [
        { t: 'ex', kind: 'cloze', h: 'Write one word in each gap.',
          text: 'It is often said {} the best inventions are the simplest, and the humble paperclip is a good example. Although it is used {} millions of people every day, very few of them know where it came from.\n\nBent-wire clips {} existed for some time before the version we know today appeared at the end of the nineteenth century. Surprisingly, nobody is entirely sure {} was responsible for it, and several people have been given the credit over the years. What is clear is that the design has hardly changed {} then.\n\nEngineers have tried to improve it many times, but {} of their new designs has been as successful. Part of the reason is cost: a box of a hundred clips costs {} to nothing. Another is that the clip can be used for far more {} holding paper together, from resetting a phone to repairing a broken zip.',
          items: [
            { a: ['that'], why: 'The passive reporting pattern is *It is said that...*' },
            { a: ['by'], why: 'In a passive sentence, the people who do the action follow *by*.' },
            { a: ['had'], why: 'Past perfect: the clips existed before the moment in the past when the new version appeared.' },
            { a: ['who'], why: 'An indirect question about a person: *nobody is sure who was responsible*.' },
            { a: ['since'], why: '*Since then* goes with the present perfect *has hardly changed*.' },
            { a: ['none'], why: 'The verb *has* is singular, and the meaning is negative: *none of their designs*.' },
            { a: ['next'], why: 'The fixed phrase *next to nothing* means almost nothing.' },
            { a: ['than'], why: 'A comparison with *more*: *far more than holding paper together*.' },
          ] },
      ],
    },
    {
      id: 'p3', ref: 'Part 3', title: 'Word formation and transformations',
      about: 'Use the word in capitals to form a word that fits each gap. Then complete each second sentence so that it means the same as the first, using the word given.',
      blocks: [
        { t: 'ex', kind: 'cloze', h: 'Use the word in capitals at the end of the gap.',
          text: 'Before booking a hotel, most of us check the online reviews. But how {} are they? A recent {} by a consumer group found that a significant number of reviews had been written by people who had never stayed at the hotel.\n\nSome were posted by owners hoping to improve their {}. Others were written by competitors trying to damage a rival’s business, which is not only {} but, in many countries, {}.\n\nExperts advise readers to be {} of reviews that are {} short or emotional, and to look instead for {} descriptions of the room, the staff and the location.',
          items: [
            { base: 'RELY', a: ['reliable'], why: 'After *how* and before *are they* we need an adjective: *reliable*.' },
            { base: 'INVESTIGATE', a: ['investigation'], why: 'After *a recent* we need a noun: *investigation*.' },
            { base: 'REPUTE', a: ['reputation', 'reputations'], why: 'After *their* we need a noun: *reputation*.' },
            { base: 'HONEST', a: ['dishonest'], why: 'Damaging a rival with false reviews is negative: *dishonest*.' },
            { base: 'LEGAL', a: ['illegal'], why: 'The negative prefix for *legal* is *il-*: *illegal*.' },
            { base: 'SUSPECT', a: ['suspicious'], why: 'The adjective pattern is *be suspicious of something*.' },
            { base: 'USUAL', a: ['unusually'], why: 'Before the adjectives *short or emotional* we need an adverb, and the meaning is negative: *unusually*.' },
            { base: 'DETAIL', a: ['detailed'], why: 'Before the noun *descriptions* we need an adjective: *detailed*.' },
          ] },
        { t: 'ex', kind: 'transform', h: 'Complete the second sentence using the word given. Use between two and five words, including the word given.', items: [
          { q: 'I’m sure Anna forgot about the meeting.', cue: 'MUST', gap: 'Anna ___ about the meeting.', a: ['must have forgotten', 'must’ve forgotten'], why: 'Deduction about the past: *must have* + past participle.' },
          { q: 'A mechanic is repairing my car at the moment.', cue: 'HAVING', gap: 'I am ___ at the moment.', a: ['having my car repaired', 'having my car fixed'], why: 'When someone does a service for us: *have something done*.' },
          { q: 'I regret not studying harder at school.', cue: 'WISH', gap: 'I ___ harder at school.', a: ['wish I had studied', 'wish I’d studied', 'wish I had worked', 'wish I’d worked'], why: 'A regret about the past: *wish* + past perfect.' },
          { q: 'People believe that the painting is worth millions.', cue: 'BELIEVED', gap: 'The painting ___ worth millions.', a: ['is believed to be'], why: 'Passive reporting with the thing as subject: *is believed to be*.' },
          { q: '“I didn’t take the money,” said Mark.', cue: 'DENIED', gap: 'Mark ___ the money.', a: ['denied taking', 'denied having taken', 'denied that he had taken', 'denied that he took', 'denied he had taken', 'denied he took'], why: '*Deny* is followed by the *-ing* form (or *that* + clause).' },
          { q: 'We didn’t leave early, so we missed the train.', cue: 'IF', gap: 'We wouldn’t have missed the train ___ early.', a: ['if we had left', 'if we’d left'], why: 'An imaginary past: third conditional, *if* + past perfect.' },
        ] },
      ],
    },
  ],
};
