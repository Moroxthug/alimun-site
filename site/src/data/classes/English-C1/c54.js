// English C1, class 54 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u12:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c54',
  focus: 'By the end every student uses compound nouns and compound adjectives accurately: the first noun of a compound noun stays singular (*a bird sanctuary*, *two car parks*), and compound adjectives before a noun take a hyphen in their fixed patterns (*man-made*, *drought-resistant*, *far-reaching*, *long-standing*, *cold-blooded*), except after an *-ly* adverb (*a densely populated area*). The speaking goal: describe a place or a problem in nature compactly and precisely with compounds.',
  tips: [
    'In a compound noun the first noun describes the second and is normally singular: *a tree house*, *a habitat loss problem*, not *a trees house*. The plural goes on the main noun: *two car parks*.',
    'Students often use *’s* where English uses a compound: *a wildlife reserve*, not *a wildlife’s reserve*. Ask: is it a kind of reserve, or does the reserve belong to someone?',
    'Teach the patterns, not just the words: noun + past participle (*snow-capped*), noun + adjective (*energy-efficient*), adjective or adverb + *-ing* (*far-reaching*), adjective + noun + *-ed* (*cold-blooded*).',
    'Word stress usually falls on the first part of a compound noun (*GREENhouse gas*, *FOOD chain*). Model it as you correct.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Describe a natural place you love in one sentence.* Then challenge students to make the same sentence shorter with one compound (*a snow-capped mountain*, *a wildlife reserve*).' },
    { min: 12, title: 'Making compounds', md: 'Show board page 1. Students match the halves to make compound adjectives, then choose the correct compound noun in each sentence.' },
    { min: 10, title: 'Fix it', md: 'Show board page 2. Students correct the mistakes and say which rule each one breaks.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 1. Students choose alone, then compare and say which collocation decided each answer.' },
    { min: 5, title: 'Close', md: 'Each student describes a product they own with a compound adjective (*energy-efficient*, *hard-wearing*, *home-made*). Set the homework.' },
  ],
  board: [
    { title: 'Making compounds', blocks: [
      { t: 'ex', kind: 'match', h: 'Match the two halves to make compound adjectives.', pairs: [
        ['snow-', 'capped'],
        ['energy-', 'efficient'],
        ['salt-', 'tolerant'],
        ['long-', 'lasting'],
        ['thick-', 'skinned'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the correct compound.', items: [
        { q: 'The island has become an important ___ for seabirds.', o: ['breeding ground', 'breed ground', 'breeding’s ground'], why: 'A fixed compound noun: *breeding ground*.' },
        { q: 'There are two ___ at the edge of the forest.', o: ['car parks', 'cars parks', 'cars park'], why: 'The plural goes on the main noun.' },
        { q: 'Farmers in the south are planting ___ crops.', o: ['drought-resistant', 'drought-resisting', 'drought resistance'], why: 'Noun + adjective before a noun, with a hyphen.' },
        { q: 'It is one of the most ___ regions in Europe.', o: ['densely populated', 'densely-populated', 'dense-populated'], why: 'No hyphen after an *-ly* adverb.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'We spent the afternoon at a [birds sanctuary].', a: ['bird sanctuary'], why: 'The first noun stays singular.' },
        { s: 'The reservoir is entirely [man-making].', a: ['man-made'], why: 'Noun + past participle: made by people.' },
        { s: 'The marsh is now a protected [wildlife’s reserve].', a: ['wildlife reserve'], why: 'In a compound noun the first noun describes the second: no *’s*.' },
        { s: 'The new law will have [far-reached] consequences for farmers.', a: ['far-reaching'], why: 'The fixed compound is *far-reaching*.' },
        { s: 'There is a [long-stood] dispute over the river.', a: ['long-standing'], why: 'Adjective or adverb + *-ing*: *long-standing*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'A compound adjective before a noun usually has a hyphen (*a well-known species*); after a verb it often does not (*the species is well known*). Words with *-ly* never take one.' },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 1', blocks: [
      { t: 'text', md: 'A short text about a mountain village, one sentence at a time. Choose the word that best fits each gap.' },
      { t: 'ex', kind: 'select', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 1): choose the word that best fits each gap.', items: [
        { q: 'The village sits below a ring of snow-___ peaks.', o: ['capped', 'covered', 'filled', 'topped'], why: '*Snow-capped peaks*: the collocation for mountain tops.' },
        { q: 'There has been a long-___ debate about building a ski resort there.', o: ['standing', 'lasting', 'living', 'running'], why: '*A long-standing debate* or *dispute*: one that has existed for a long time.' },
        { q: 'Supporters say the resort would be energy-___ and carbon neutral.', o: ['efficient', 'effective', 'saving', 'economic'], why: '*Energy-efficient*: using little energy.' },
        { q: 'Opponents fear that the plan would have far-___ effects on wildlife.', o: ['reaching', 'ranging', 'going', 'flung'], why: '*Far-reaching effects*; we speak of *a wide-ranging discussion*.' },
        { q: 'The valley is an important breeding ___ for golden eagles.', o: ['ground', 'field', 'place', 'land'], why: 'The compound is *breeding ground*.' },
        { q: 'Habitat ___ is already the biggest threat to the eagles.', o: ['loss', 'lack', 'damage', 'fall'], why: 'The fixed compound is *habitat loss*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 1 of C1 Advanced all four options may be real words that fit the grammar. Only one makes the compound or collocation English speakers use, so say each one aloud in your head.' },
    ] },
  ],
  activities: {
    one: { title: 'Describe it compactly', md: 'Show or describe three places (a mountain lake, a city park, a farm in a dry region). The student describes each one in three sentences, then rewrites the description to be shorter with at least two compounds. Compare the long and short versions and correct hyphens and plurals together.' },
    small: { title: 'Compound chain', md: 'The first student says a compound (*sea level*). The next must make a new compound starting with the second word, or a related one (*level crossing*), or use the first in a sentence about nature. A pause of more than five seconds or a wrong form passes the turn. Keep the chain in the chat.' },
    group: { title: 'Brochure rooms', md: 'Breakout rooms of three write a four-sentence description of a nature reserve for a visitors’ leaflet, with at least five compounds. Bring everyone back; each room reads its text and the class checks every hyphen and plural.' },
  },
  homework: { book: 'u12:p2', md: 'Finish lesson 2 of unit 12 if needed, then do lesson 3 (Make, let, have, get, cause). Write ten compounds from today, half nouns and half adjectives, each in a short sentence about a place you know.' },
};
