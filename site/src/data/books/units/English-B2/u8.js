// English B2, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'A changing world',
  goal: 'Discuss big issues in clear, formal English.',
  art: 'sun',
  tags: { skills: ['grammar', 'writing', 'reading'], topics: ['relative-clauses', 'participle-clauses', 'formal-register', 'formal-email', 'cities'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Which, whose, whom',
      about: 'Use defining and non-defining relative clauses, with the right pronoun and the right commas.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: '**Defining** relative clauses tell us which person or thing we mean. Without them the sentence is incomplete, and there are no commas. **Non-defining** relative clauses add extra information about someone or something we have already identified. They go between commas.' },
          { t: 'examples', items: [
            { s: 'The architect **who designed the library** has won a prize.', n: 'Which architect? The clause tells us. No commas.' },
            { s: 'My grandmother, **who is ninety**, still lives on her own.', n: 'I have only one grandmother like this, so the clause is extra information.' },
            { s: 'The flat **(that) we rented** was tiny.', n: 'In a defining clause you can leave out the pronoun when it is the object.' },
            { s: 'The council, **whose plan was rejected**, will try again next year.', n: '*Whose* shows possession: the plan belonged to the council.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Defining or non-defining?', explain: ['head', 'col0', 'col1', 'col2'], head: ['', 'Defining', 'Non-defining'], rows: [
            ['Commas', 'no', 'yes, around the clause'],
            ['*that* instead of *who* or *which*', 'yes', 'no'],
            ['Leave out the pronoun when it is the object', 'yes', 'no'],
            ['The information is…', 'necessary to know who or what we mean', 'extra'],
          ] },
          { t: 'text', md: '*Whom* is the object form of *who*. It is formal, and it is most common after a preposition: *the person to whom I spoke*. In everyday English we say *the person (who) I spoke to*. *Which* can also refer to a whole clause: *The train was late, which meant we missed the start.*' },
          { t: 'tip', art: 'owl', md: 'Commas change the meaning. *My brother who lives in Leeds is a teacher* means I have more than one brother. *My brother, who lives in Leeds, is a teacher* means I have only one.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct relative pronoun.', items: [
            { q: 'The woman ___ car was stolen called the police.', o: ['whose', 'who', 'which'], why: 'The car belonged to the woman: *whose*.' },
            { q: 'Our new office, ___ opened in May, has a roof garden.', o: ['which', 'that', 'what'], why: 'A non-defining clause (commas) about a thing: *which*. *That* is not possible here.' },
            { q: 'The people ___ we met on holiday have invited us to stay.', o: ['who', 'whose', 'which'], why: 'People: *who*. You could also say *that*, or leave the pronoun out.' },
            { q: 'The minister, to ___ the letter was addressed, did not reply.', o: ['whom', 'who', 'that'], why: 'After a preposition, use *whom* for people.' },
            { q: 'The bridge was closed for a week, ___ caused long traffic jams.', o: ['which', 'that', 'what'], why: '*Which* refers to the whole clause before it: the closure caused the jams.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with who, which, whose, whom or where.', items: [
            { q: 'The neighbourhood ___ I grew up has changed completely.', a: ['where', 'in which'], why: 'A place where something happens: *where* (formal: *in which*).' },
            { q: 'My cousin, ___ is an engineer, works on solar farms.', a: ['who'], why: 'A non-defining clause about a person: *who*.' },
            { q: 'This is the park ___ the council wants to sell.', a: ['which', 'that'], why: 'A defining clause about a thing: *which* or *that*.' },
            { q: 'The artist ___ paintings hang in the station grew up here.', a: ['whose'], why: 'The paintings belong to the artist: *whose*.' },
            { q: 'Dr Ahmed, with ___ I worked for many years, has just retired.', a: ['whom'], why: 'After the preposition *with*, a person: *whom*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the relative pronoun that you could leave out.', items: [
            { s: 'The book [that] I lent you belongs to my sister, who lives in Oslo.', why: '*That* is the object of *lent* in a defining clause. *Who* is in a non-defining clause, so it must stay.' },
            { s: 'The man who called this morning is the plumber [that] we used last year.', why: '*Who* is the subject of *called*, so it must stay. *That* is the object of *used*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Having finished…',
      about: 'Make your writing shorter and more formal with participle clauses.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'text', md: '**Participle clauses** make writing shorter and more formal. They replace a subject and a verb, and they are common in news reports, essays and stories.' },
          { t: 'table', caption: 'Participle clauses', explain: ['head', 'col0', 'col1'], head: ['Form', 'Meaning', 'Example'], rows: [
            ['*-ing* (present participle)', 'active; at the same time, or a reason', '**Walking** home, I saw an accident.'],
            ['*having* + past participle', 'active; one action finished before the next', '**Having finished** the report, she went home.'],
            ['past participle', 'passive', '**Built** in 1900, the bridge is now too narrow.'],
          ] },
        ],
        [
          { t: 'text', md: 'Participles can also replace a relative clause. *The people **living** next door* means *the people who live next door*. *The houses **damaged** in the storm* means *the houses which were damaged in the storm*.' },
          { t: 'examples', items: [
            { s: '**Feeling** tired, he went to bed early.', n: '= Because he felt tired.' },
            { s: '**Having lived** abroad for years, she speaks four languages.', n: '= Because she has lived abroad for years. The living abroad came first.' },
            { s: 'Most of the food **sold** in the market is grown locally.', n: '= The food which is sold. A passive meaning.' },
          ] },
          { t: 'tip', art: 'owl', md: 'The participle and the main clause must have the same subject. *Walking down the street, the rain started* is wrong: the rain was not walking. Say *Walking down the street, I felt the rain start*, or *As I was walking down the street, it started to rain*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct participle.', items: [
            { q: '___ in the 1960s, the tower block is now being demolished.', o: ['Built', 'Building', 'Having built'], why: 'The tower block was built: a passive meaning, so the past participle.' },
            { q: '___ the instructions, he started putting the desk together.', o: ['Having read', 'Read', 'Having been read'], why: 'He read the instructions first, then started: *having* + past participle.' },
            { q: 'The man ___ next to me on the train was reading a novel.', o: ['sitting', 'sits', 'having sat'], why: '*Sitting* = who was sitting. An active meaning at the same time.' },
            { q: 'Most of the vegetables ___ in the market come from local farms.', o: ['sold', 'selling', 'having sold'], why: 'The vegetables are sold: a passive meaning.' },
            { q: '___ that the trains were cancelled, we decided to drive.', o: ['Knowing', 'Known', 'Having been known'], why: '= Because we knew. An active meaning, so *-ing*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Rewrite with a participle clause. Write the participle form of the verb in brackets.', items: [
            { q: 'After she had graduated, she moved to Singapore. → ___ (graduate), she moved to Singapore.', a: ['Having graduated'], why: 'One action finished before the next: *having* + past participle.' },
            { q: 'The tickets which were bought online were cheaper. → The tickets ___ (buy) online were cheaper.', a: ['bought'], why: 'A passive relative clause becomes a past participle.' },
            { q: 'Because he felt nervous, he spoke very fast. → ___ (feel) nervous, he spoke very fast.', a: ['Feeling'], why: 'A reason, active: *-ing*.' },
            { q: 'Anyone who wants to join should email me. → Anyone ___ (want) to join should email me.', a: ['wanting'], why: 'An active relative clause becomes *-ing*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Having lost the map, we asked for directions.', why: '*Having* + past participle, a comma, then the main clause.' },
            { a: 'Founded in 1850, the school has changed a lot.', why: 'A passive meaning: the school was founded.' },
            { a: 'Feeling nervous, she opened the letter.', why: '*-ing* clause first, then the subject *she*, who felt nervous.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Formally speaking',
      about: 'Choose formal words and phrases for essays, reports and emails.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'Use **formal English** in essays, reports and emails to people you do not know. It is not just about longer words. Formal writing has no contractions (*do not*, not *don’t*), uses single verbs instead of phrasal verbs where possible, prefers impersonal structures (*It is believed that…*, *There has been an increase in…*) and makes requests indirectly.' },
          { t: 'table', caption: 'Informal and formal words', quiz: true, head: ['Informal', 'Formal'], rows: [
            ['get', 'receive / obtain'],
            ['need', 'require'],
            ['help', 'assist'],
            ['ask for', 'request'],
            ['find out', 'discover'],
            ['buy', 'purchase'],
            ['enough', 'sufficient'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'I am writing to enquire about the position advertised on your website.', n: 'A formal first line: say why you are writing.' },
            { s: 'I would be grateful if you could send me further information.', n: 'A polite, indirect request.' },
            { s: 'Please find attached a copy of my CV.', n: 'Use this when you attach a document.' },
            { s: 'Please do not hesitate to contact me if you require any further details.', n: 'A formal offer of more help.' },
            { s: 'I look forward to hearing from you.', n: '*Look forward to* + *-ing*: *to hearing*, not *to hear*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In British English, end a formal email with *Yours sincerely* when you know the person’s name (*Dear Ms Patel*), and with *Yours faithfully* when you do not (*Dear Sir or Madam*). Many people now simply write *Kind regards*.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each informal phrasal verb with a formal verb.', pairs: [
            ['get in touch with', 'contact'],
            ['go up', 'increase'],
            ['look into', 'investigate'],
            ['put off', 'postpone'],
            ['think about', 'consider'],
            ['set up', 'establish'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the most formal sentence.', items: [
            { q: '', o: ['I would be grateful if you could reply by Friday.', 'Can you reply by Friday?', 'Reply by Friday, please.'], why: '*I would be grateful if you could…* is an indirect, polite request.' },
            { q: '', o: ['There has been a significant increase in rents.', 'Rents have gone up loads.', 'Rents are way higher now.'], why: 'An impersonal structure and formal words: *significant increase*.' },
            { q: '', o: ['We regret to inform you that the event has been cancelled.', 'Sorry, but the event’s off.', 'We’re afraid we’ve had to call off the event.'], why: '*We regret to inform you* is a formal phrase, with no contractions.' },
            { q: '', o: ['The council intends to investigate the complaints.', 'The council is going to look into the complaints.', 'The council’s going to check out the complaints.'], why: '*Intends to investigate* uses single formal verbs instead of phrasal verbs.' },
            { q: '', o: ['I look forward to hearing from you.', 'Hope to hear from you soon!', 'Write back soon.'], why: 'The standard formal last line of an email.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the formal email with one word in each gap.', items: [
            { q: 'Dear Sir or Madam, I am writing to ___ about the evening course starting in January.', a: ['enquire', 'inquire', 'ask'], why: '*Enquire about* is the most formal way to say *ask about*.' },
            { q: 'Please find ___ my completed application form.', a: ['attached', 'enclosed'], why: '*Please find attached* for a document sent with the email.' },
            { q: 'I would be ___ if you could confirm the dates of the course.', a: ['grateful'], why: '*I would be grateful if you could…*: a polite request.' },
            { q: 'I look forward to ___ from you. Yours faithfully, Daniel Osei', a: ['hearing'], why: '*Look forward to* + *-ing*. *Yours faithfully* because the email starts *Dear Sir or Madam*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Cities in motion',
      about: 'Read an article about how cities are changing, and notice its formal structures.',
      art: 'cactus',
      spreads: [
        [
          { t: 'reading', title: 'Cities in motion', md: 'Cities have always changed, but the speed of change in recent years has surprised even the people who plan them. Streets which were built for cars are being given back to pedestrians and cyclists, and old industrial areas, many of which stood empty for years, are becoming homes, offices and parks.\n\nOne reason is the way we work. Having discovered that many tasks can be done from home, a large number of office workers now come into the centre only a few days a week. As a result, some city centres, designed around the daily journey to work, have had to find new purposes. Empty office buildings are being turned into flats, and ground floors that once held banks now hold cafés, gyms and small workshops.\n\nThe climate is another factor. Faced with hotter summers and heavier rain, many cities are planting trees, creating green roofs and replacing concrete with surfaces that can absorb water. These changes, which were once seen as expensive extras, are now considered essential.\n\nNot everyone benefits equally, however. When a neighbourhood becomes greener and more attractive, rents tend to rise, and people whose families have lived there for generations may be forced to leave. Planners, most of whom agree that cities must adapt, are now asking a harder question: how can a city change without pushing out the people who make it a community?' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Some streets that were designed for cars are now used more by people on foot and on bikes.', a: 't', why: 'Streets built for cars are being given back to pedestrians and cyclists.' },
            { q: 'Most office workers now travel to the city centre every day.', a: 'f', why: 'Many come in only a few days a week.' },
            { q: 'Some former office buildings are being turned into homes.', a: 't', why: 'Empty office buildings are being turned into flats.' },
            { q: 'Green roofs are cheaper to build than normal roofs.', a: 'ng', why: 'The text does not compare the cost of roofs.' },
            { q: 'The writer says that everyone gains when a neighbourhood becomes greener.', a: 'f', why: '“Not everyone benefits equally.” Some people may be forced to leave.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the structures in the text.', items: [
            { q: '“Having discovered that many tasks can be done from home, …” What does this mean?', o: ['After they had discovered that many tasks can be done from home', 'While they are discovering that many tasks can be done from home', 'Because somebody else discovered that many tasks can be done from home'], why: '*Having* + past participle: the workers discovered this first, then changed their habits.' },
            { q: '“Planners, most of whom agree that cities must adapt, …” Who does *whom* refer to?', o: ['the planners', 'the cities', 'the people who have to leave'], why: '*Most of whom* = most of the planners. *Whom* follows the preposition *of*.' },
            { q: 'In “Faced with hotter summers and heavier rain”, why is *faced* a past participle?', o: ['The meaning is passive: cities are faced with these problems.', 'The action finished a long time ago.', 'It is the main verb of the sentence.'], why: 'A past participle clause has a passive meaning.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the relative pronoun in the non-defining clause.', items: [
            { s: 'Streets which were built for cars are changing, and old industrial areas, many of [which] stood empty for years, are becoming parks.', why: 'The second clause is between commas: extra information. The first *which* tells us which streets, so it is defining.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'The town ___ I was born has changed a lot.', o: ['where', 'which', 'whose'], why: 'A place where something happened: *where*.' },
      { q: 'My manager, ___ I have known for years, is leaving.', o: ['who', 'that', 'whose'], why: 'A non-defining clause about a person: *who* (formal: *whom*). *That* is not possible with commas.' },
      { q: '___ the email, she closed her laptop.', o: ['Having sent', 'Sent', 'Having been sent'], why: 'She sent the email first: *having* + past participle.' },
      { q: 'The houses ___ along the river are very expensive.', o: ['built', 'building', 'having built'], why: 'The houses were built: a passive meaning.' },
      { q: 'Please do not hesitate ___ me.', o: ['to contact', 'contacting', 'contact'], why: '*Hesitate* + *to* + infinitive.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'The scientist ___ research changed the law has won an award.', a: ['whose'], why: 'The research belongs to the scientist: *whose*.' },
      { q: 'The new park, ___ opened last spring, is always busy.', a: ['which'], why: 'A non-defining clause about a thing: *which*, not *that*.' },
      { q: '___ (not / know) anyone in the city, he felt lonely at first.', a: ['Not knowing'], why: 'A negative participle clause: *not* + *-ing*.' },
      { q: 'I look forward to ___ (meet) you.', a: ['meeting'], why: '*Look forward to* + *-ing*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'I am writing to apply for the position.', why: 'A formal first line: *I am writing to* + infinitive.' },
      { a: 'Having finished his work, he went home.', why: '*Having* + past participle, a comma, then the main clause.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
      { q: '', o: ['My father, who is a doctor, works in Cairo.', 'My father, that is a doctor, works in Cairo.', 'My father who is a doctor, works in Cairo.'], why: 'A non-defining clause: *who*, with a comma on both sides.' },
      { q: '', o: ['Walking to work, I saw an old friend.', 'Walking to work, my phone rang.', 'Walked to work, I saw an old friend.'], why: 'The person walking must be the subject of the main clause, and the meaning is active: *-ing*.' },
      { q: '', o: ['The report, which was published today, is very critical.', 'The report, that was published today, is very critical.', 'The report which, was published today, is very critical.'], why: 'Non-defining clauses take *which*, not *that*, and the commas go around the whole clause.' },
    ] },
  ],
};
