// English B2, unit 4, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one speaking task, and one task in the format of B2 First.
export const UNIT = {
  id: 'u4',
  title: 'Science and technology',
  goal: 'Explain processes and discoveries with the passive in every tense, say what you have done for you, and report what people believe.',
  art: 'alien',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading'], topics: ['passive', 'have-something-done', 'passive-reporting', 'science', 'technology'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'It has been found, it is being tested',
      about: 'Use the passive in every tense, and choose it when it makes the sentence clearer.',
      art: 'alien',
      spreads: [
        [
          { t: 'text', md: 'At B1 you used the passive in the present simple and the past simple: *Paper **is made** from wood. The bridge **was built** in 1890.* At B2 you need it in **every tense**, because science and news texts use it all the time.\n\nThe rule does not change: the passive is **be** in the right tense + the **past participle**. Only *be* changes. So to make any tense passive, first put *be* in that tense, then add the past participle: *are testing* → *are **being** tested*; *have found* → *have **been** found*; *will build* → *will **be** built*.' },
          { t: 'table', caption: 'The passive in every tense', quiz: true, explain: ['head', 'col0'], head: ['', 'Active', 'Passive'], rows: [
            ['present continuous', 'They are testing the new drug.', 'The new drug is being tested.'],
            ['past continuous', 'They were repairing the road.', 'The road was being repaired.'],
            ['present perfect', 'Scientists have found a new planet.', 'A new planet has been found.'],
            ['past perfect', 'Someone had already sold the house.', 'The house had already been sold.'],
            ['future', 'They will open the lab next year.', 'The lab will be opened next year.'],
            ['modal', 'You must keep the samples cold.', 'The samples must be kept cold.'],
            ['going to', 'They are going to replace the system.', 'The system is going to be replaced.'],
          ] },
          { t: 'tip', art: 'owl', md: 'The continuous passive has two forms of *be* in a row: ***is being** tested*, ***was being** repaired*. This looks strange to many learners, but it is correct, and very common in news: *The suspect **is being questioned** by police.*' },
        ],
        [
          { t: 'text', md: 'Knowing the form is half of it. The other half is knowing **when the passive is better** than the active. Use it when:\n\nthe **process or result** matters more than the person: *The results **have been checked** twice.*\n\nyou want to **keep the topic** at the start of the sentence. If the paragraph is about a new vaccine, *The vaccine **was developed** by a small team* keeps the vaccine as the subject.\n\nyou want to sound **formal or impersonal**, as in reports and scientific writing: *It **was decided** that the project should continue.*\n\nDo not use the passive just to sound clever. If the person doing the action is important and new, the active is clearer: *Marie Curie discovered radium* is better than *Radium was discovered by Marie Curie* in a text about her life.' },
          { t: 'examples', items: [
            { s: 'A new treatment **is being developed** in Oslo.', n: 'Present continuous passive: in progress now.' },
            { s: 'The samples **had been contaminated** before they arrived.', n: 'Past perfect passive: earlier than another past event.' },
            { s: 'More than ten thousand people **have been tested** so far.', n: 'Present perfect passive: up to now.' },
            { s: 'The results **will be published** next month.', n: 'Future passive.' },
            { s: 'Phones **should not be left** in direct sunlight.', n: 'Modal passive: *modal + be + past participle*.' },
            { s: 'When I arrived, the experiment **was being filmed**.', n: 'Past continuous passive: in progress at that time.' },
          ] },
        ],
        [
          { t: 'text', md: 'Most mistakes come from forgetting *been* or *being*, or from using the passive with verbs that have no object.' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['The bridge is repairing.', 'The bridge is being repaired.', 'The bridge does not repair itself: passive continuous.'],
            ['A cure has found.', 'A cure has been found.', 'Present perfect passive needs *been*.'],
            ['The data must checked.', 'The data must be checked.', 'After a modal: *be* + past participle.'],
            ['The accident was happened at night.', 'The accident happened at night.', '*Happen*, *arrive*, *die* have no object, so no passive.'],
            ['The lab will be open next year.', 'The lab will be opened next year.', 'Use the past participle *opened* for the action.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Put the verb in brackets into the correct passive form.', items: [
            { q: 'The new software ___ (test) at the moment.', a: ['is being tested'], why: 'Now, in progress: present continuous passive.' },
            { q: 'Three new species ___ (discover) since January.', a: ['have been discovered'], why: '*Since January*: present perfect passive.' },
            { q: 'The results ___ (send) to all participants next week.', a: ['will be sent'], why: 'Future passive.' },
            { q: 'The files ___ (delete) before anyone noticed the problem.', a: ['had been deleted'], why: 'Earlier than another past event: past perfect passive.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'The road [is repairing] this week.', a: ['is being repaired'], why: 'The road is repaired by someone: passive continuous.' },
            { s: 'The problem [has solved] at last.', a: ['has been solved'], why: 'Present perfect passive needs *been*.' },
            { s: 'The fire [was started] at midnight and spread quickly.', a: ['started'], why: '*Start* here has no object: the fire simply started. Active is natural.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of the B2 First exam (Reading and Use of English Part 4): complete the second sentence so that it means the same as the first, using the word given. Use between two and five words.', items: [
            { q: 'Engineers are checking the system at the moment. Begin: The system …', cue: 'BEING', a: ['The system is being checked', 'The system is being checked at the moment', 'The system is being checked by engineers at the moment'], why: 'Present continuous passive: *is being checked*.' },
            { q: 'Nobody has told me about the change. Begin: I …', cue: 'BEEN', a: ['I have not been told about the change', 'I haven’t been told about the change', 'I have not been told', 'I haven’t been told'], why: 'Present perfect passive with the person as subject.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 4** the passive comes up often. When the key word is **being** or **been**, the answer is almost always a passive. Check the tense of the first sentence and keep it the same.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'A new treatment is being developed.' },
            { a: 'The results have been checked twice.' },
            { a: 'The samples must be kept cold.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'I had my phone repaired',
      about: 'Say that someone else does a job for you with have something done and get something done.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Compare these two sentences: *I repaired my phone.* and *I **had** my phone **repaired**.* In the first, you did the work yourself. In the second, you paid or asked someone else, an expert, to do it. This is the **causative**: **have + object + past participle**.\n\nThe order matters: *have* + **the thing** + **the past participle**. *I had repaired my phone* (past perfect) means something completely different from *I had my phone repaired*.\n\n**Get** something done means the same, but it is more informal and common in speech: *I need to **get** my hair **cut**.* It can also suggest a little effort to arrange it: *We finally **got** the heating **fixed**.*' },
          { t: 'table', caption: 'Have or get something done', quiz: true, explain: ['head', 'col0'], head: ['', 'Example'], rows: [
            ['present simple', 'I have my car serviced every year.'],
            ['past simple', 'She had her eyes tested last week.'],
            ['present perfect', 'We’ve had the kitchen painted.'],
            ['future', 'I’m going to get my hair cut tomorrow.'],
            ['need / should', 'You should get that tooth checked.'],
            ['question', 'Where do you have your suits made?'],
          ] },
        ],
        [
          { t: 'text', md: '*Have something done* has a second meaning: something **bad happened to you**, done by someone you did not choose. *She **had** her bag **stolen** on the train.* *We **had** our flight **cancelled**.* The form is exactly the same; the context tells you which meaning it is.\n\nThere is also an active causative, when you name the person: **have someone do** something and **get someone to do** something. *I had the mechanic **check** the brakes.* *I got my brother **to help** me.* Notice the base form after *have someone*, and *to* + base form after *get someone*.' },
          { t: 'examples', items: [
            { s: 'I’m **having** my phone screen **replaced** today.', n: 'An expert does it for me.' },
            { s: 'He **had** his wallet **stolen** at the station.', n: 'Something bad happened to him.' },
            { s: 'You should **get** your eyes **tested**.', n: 'Informal, with *should*.' },
            { s: 'I **had** the technician **install** the new printer.', n: '*Have someone do*: base form.' },
            { s: 'I finally **got** my flatmate **to clean** the kitchen.', n: '*Get someone to do*: persuading.' },
          ] },
          { t: 'dialogue', title: 'At the phone shop', lines: [
            { who: 'Assistant', s: 'Hello, how can I help?' },
            { who: 'Leila', s: 'I need to get my screen replaced. I dropped it on the stairs.' },
            { who: 'Assistant', s: 'We can have it done by this afternoon.' },
            { who: 'Leila', s: 'Great. Can you have someone check the battery too? It dies very quickly.' },
            { who: 'Assistant', s: 'Of course. Have you had it repaired anywhere before?' },
            { who: 'Leila', s: 'No, never. I’ve only had it for a year.' },
          ] },
        ],
        [
          { t: 'text', md: 'The order of the words is where most learners go wrong.' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I had cut my hair yesterday.', 'I had my hair cut yesterday.', '*Have* + object + past participle.'],
            ['I’m going to have repaired my bike.', 'I’m going to have my bike repaired.', 'The object comes before the past participle.'],
            ['I got my brother help me.', 'I got my brother to help me.', '*Get someone* + *to* + base form.'],
            ['I had the mechanic to check it.', 'I had the mechanic check it.', '*Have someone* + base form, no *to*.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'build', h: 'Write the sentence. Two words do not belong.', items: [
            { a: 'We had our windows cleaned last week.', extra: ['clean', 'were'], why: '*Have* + object + past participle *cleaned*.' },
            { a: 'You should get your car checked before the trip.', extra: ['to', 'checking'], why: '*Get* + object + past participle.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'I can’t see well. I need to have my eyes ___.', o: ['tested', 'test', 'testing'], why: '*Have* + object + past participle.' },
            { q: 'She got her neighbour ___ the plants while she was away.', o: ['to water', 'water', 'watered'], why: '*Get someone* + *to* + base form.' },
            { q: 'We had the electrician ___ the lights.', o: ['fix', 'to fix', 'fixed'], why: '*Have someone* + base form.' },
            { q: 'He had his laptop ___ at the airport.', o: ['stolen', 'stole', 'steal'], why: 'Something bad happened: past participle *stolen*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of the B2 First exam (Reading and Use of English Part 4): complete the second sentence so that it means the same as the first, using the word given. Use between two and five words.', items: [
            { q: 'A hairdresser cuts my hair every month. Begin: I …', cue: 'HAVE', a: ['I have my hair cut every month', 'I have my hair cut', 'I have my hair cut by a hairdresser every month'], why: 'Causative: *have my hair cut*.' },
            { q: 'I persuaded my sister to drive me to the airport. Begin: I …', cue: 'GOT', a: ['I got my sister to drive me to the airport', 'I got my sister to drive me'], why: '*Get someone to do*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'A Part 4 sentence with *someone did it for me* or *I paid someone to…* is a strong sign the answer is **have/get something done**. Remember: the object goes **before** the past participle.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'I need to get my screen replaced.' },
            { a: 'She had her bag stolen on the train.' },
            { a: 'We had the kitchen painted last year.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'It is said that…',
      about: 'Report what people believe, say or expect with the passive, as in news and scientific writing.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'News and science often report what **people in general** think, without saying exactly who: *People say that coffee helps memory.* In formal English, this becomes a **passive reporting** structure. There are two ways to build it.\n\n**It + passive + that**: *It **is said that** coffee helps memory.* *It **is believed that** the painting is genuine.*\n\n**Subject + passive + to-infinitive**: *Coffee **is said to help** memory.* *The painting **is believed to be** genuine.*\n\nBoth mean the same. The second is shorter and very common. Typical verbs are *say, believe, think, expect, know, report, consider, estimate*.' },
          { t: 'table', caption: 'Two ways to report', explain: ['head'], head: ['Active', 'It + passive + that', 'Subject + passive + to'], rows: [
            ['People say he is rich.', 'It is said that he is rich.', 'He is said to be rich.'],
            ['Experts expect prices to rise.', 'It is expected that prices will rise.', 'Prices are expected to rise.'],
            ['People believe the cave is very old.', 'It is believed that the cave is very old.', 'The cave is believed to be very old.'],
          ] },
        ],
        [
          { t: 'text', md: 'When the belief is about something **earlier** than now, use the **perfect infinitive**: **to have + past participle**. *People think the ship sank in 1820* becomes *The ship **is thought to have sunk** in 1820.*\n\nCompare: *He is said **to live** in Paris* (now) and *He is said **to have lived** in Paris* (in the past). For something in progress now, use **to be + -ing**: *The minister **is reported to be considering** a new law.*\n\nThis structure lets a writer report a claim **without taking responsibility** for it. That is why it is so common in the news, and why the B2 First exam tests it in Part 4.' },
          { t: 'examples', items: [
            { s: '**It is estimated that** two million people use the app.', n: '*It + passive + that*.' },
            { s: 'The bridge **is known to be** unsafe.', n: 'Subject + passive + *to be*.' },
            { s: 'The thieves **are thought to have escaped** by boat.', n: 'Past action: perfect infinitive.' },
            { s: 'The company **is reported to be planning** job cuts.', n: 'In progress now: *to be* + *-ing*.' },
            { s: '**It was once believed that** the Earth was flat.', n: 'Past belief: *was believed*.' },
          ] },
        ],
        [
          { t: 'text', md: 'The two patterns are easy to mix up. Keep them separate: *It* goes with *that*; a real subject goes with *to*.' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['It is said to be rich.', 'He is said to be rich. / It is said that he is rich.', '*It* goes with *that*; a person goes with *to*.'],
            ['He is said that he is rich.', 'He is said to be rich.', 'With a real subject, use *to* + infinitive.'],
            ['The ship is thought to sink in 1820.', 'The ship is thought to have sunk in 1820.', 'A past event: perfect infinitive.'],
            ['It says that coffee is healthy.', 'It is said that coffee is healthy.', 'The reporting verb must be passive: *is said*.'],
          ] },
          { t: 'reading', title: 'News in brief', md: 'A rare bird that was believed to have disappeared from Britain has been seen in Scotland. The bird is thought to have arrived during last week’s storms. It is estimated that fewer than two hundred of these birds are left in the world.\n\nScientists are expected to visit the area this weekend. Local people have been asked to stay away from the nesting site, which is known to be very sensitive to noise.' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Read the news again. Are the sentences true or false?', ng: true, items: [
            { q: 'People thought the bird had disappeared from Britain.', a: 't', why: '*Was believed to have disappeared from Britain.*' },
            { q: 'Scientists are sure the bird arrived during the storms.', a: 'f', why: '*Is thought to have arrived*: a belief, not a certainty.' },
            { q: 'The bird has laid eggs.', a: 'ng', why: 'The text mentions a nesting site but not eggs.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the second sentence with the correct form of the verb in brackets.', items: [
            { q: 'People believe the castle is haunted. The castle is believed ___ (be) haunted.', a: ['to be'], why: 'Subject + passive + *to be*.' },
            { q: 'People say the thief entered through a window. The thief is said ___ (enter) through a window.', a: ['to have entered'], why: 'A past action: perfect infinitive.' },
            { q: 'Experts think the economy is improving. The economy is thought ___ (improve).', a: ['to be improving'], why: 'In progress now: *to be* + *-ing*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of the B2 First exam (Reading and Use of English Part 4): complete the second sentence so that it means the same as the first, using the word given. Use between two and five words.', items: [
            { q: 'People say that the director is very difficult to work with. Begin: The director …', cue: 'SAID', a: ['The director is said to be very difficult to work with', 'The director is said to be'], why: 'Subject + *is said to be*.' },
            { q: 'Police think the robbers left the country last night. Begin: The robbers …', cue: 'THOUGHT', a: ['The robbers are thought to have left the country last night', 'The robbers are thought to have left the country', 'The robbers are thought to have left'], why: 'Past action: *are thought to have left*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'When the first sentence starts *People say / think / believe…* and the second starts with a person or thing, use **is said / thought / believed + to**. Then check the time: an earlier event needs **to have + past participle**.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'It is estimated that two million people use the app.' },
            { a: 'The bird is thought to have arrived during the storms.' },
            { a: 'Prices are expected to rise.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'The quiet machine in your kitchen',
      about: 'Read an article about the history of an everyday invention, and explain how something works.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'This article uses everything from the unit: the passive in many tenses, passive reporting, and the language of processes. Read it first for the main idea of each paragraph. B2 First Reading Part 7 asks you to find specific information quickly, so practise scanning too.' },
          { t: 'reading', title: 'The quiet machine in your kitchen', md: 'The microwave oven is found in more than ninety per cent of homes in some countries, yet it was invented almost by accident. In 1945 an engineer called Percy Spencer was working on radar equipment when he noticed that a chocolate bar in his pocket had melted. He is said to have tried popcorn next, which exploded across the laboratory.\n\nThe first microwave ovens were enormous. They were nearly two metres tall and were mainly used in restaurants and on ships. It was not until the late 1960s that smaller models were produced for ordinary kitchens, and even then many people were afraid of them.\n\nToday, microwaves are being redesigned again. Some new models can be controlled from a phone, and others are being developed to cook food more evenly. It is estimated that billions of meals are heated in microwaves every day.\n\nSo how does it work? Inside the oven, waves of energy are produced and are absorbed by the water in the food. The water molecules move very fast, and this movement creates heat. This is why dry food is not heated as well as food that contains water.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'In the format of the B2 First exam (Reading and Use of English Part 7): which paragraph mentions each idea? Match them.', pairs: [
            ['Early users were nervous about the machine.', 'Paragraph 2'],
            ['The invention started with a surprise.', 'Paragraph 1'],
            ['Water is the key to the heating process.', 'Paragraph 4'],
            ['Ovens can now be used with mobile devices.', 'Paragraph 3'],
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 7** you match statements to sections of a text. The statements **paraphrase** the text: *nervous* for *afraid*, *mobile devices* for *phone*. Look for the meaning, not the same words.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences about the article with one word in each gap.', items: [
            { q: 'The microwave ___ invented almost by accident.', a: ['was'], why: 'Past simple passive: *was invented*.' },
            { q: 'Spencer is said ___ have tried popcorn next.', a: ['to'], why: 'Passive reporting: *is said to have tried*.' },
            { q: 'Some new models ___ being developed to cook more evenly.', a: ['are'], why: 'Present continuous passive: *are being developed*.' },
            { q: 'It ___ estimated that billions of meals are heated every day.', a: ['is'], why: '*It is estimated that…*' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the steps of the process in order to make sentences.', items: [
            { a: 'Waves of energy are produced inside the oven.', why: 'Present simple passive for a process.' },
            { a: 'The energy is absorbed by the water in the food.', why: 'Passive with *by* for the agent.' },
          ] },
        ],
        [
          { t: 'text', md: 'Now explain how an everyday machine works, or tell the story of an invention you find interesting. Describe the process with the present simple passive, use one past passive for its history, and report one belief with *it is said that* or *is thought to*.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'It was invented almost by accident.' },
            { a: 'Microwaves are being redesigned again.' },
            { a: 'The energy is absorbed by the water in the food.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'gap', h: 'Put the verb in brackets into the correct passive form.', items: [
      { q: 'The hospital ___ (build) at the moment.', a: ['is being built'], why: 'Present continuous passive.' },
      { q: 'Over a thousand samples ___ (collect) so far.', a: ['have been collected'], why: '*So far*: present perfect passive.' },
      { q: 'The results ___ (announce) tomorrow.', a: ['will be announced'], why: 'Future passive.' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
      { q: 'I’m getting my bike ___ today.', o: ['repaired', 'repair', 'to repair'], why: '*Get* + object + past participle.' },
      { q: 'We had the plumber ___ the leak.', o: ['fix', 'to fix', 'fixed'], why: '*Have someone* + base form.' },
      { q: 'The painting is believed ___ by a famous artist.', o: ['to have been painted', 'to paint', 'that it was painted'], why: 'Past passive belief: *to have been painted*.' },
      { q: 'It ___ that the company will close.', o: ['is reported', 'reports', 'is reporting'], why: '*It is reported that…*' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Complete the second sentence so that it means the same as the first, using the word given.', items: [
      { q: 'People think the fire started in the kitchen. Begin: The fire …', cue: 'THOUGHT', a: ['The fire is thought to have started in the kitchen', 'The fire is thought to have started'], why: 'Passive reporting with a past event.' },
      { q: 'A professional cleans our office every week. Begin: We …', cue: 'HAVE', a: ['We have our office cleaned every week', 'We have our office cleaned by a professional every week', 'We have our office cleaned'], why: 'Causative: *have our office cleaned*.' },
      { q: 'They are repairing the lift today. Begin: The lift …', cue: 'BEING', a: ['The lift is being repaired today', 'The lift is being repaired'], why: 'Present continuous passive.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'The new bridge [will open] by the mayor next week.', a: ['will be opened'], why: 'The mayor opens it: future passive.' },
      { s: 'I had [repaired my watch] at the shop.', a: ['my watch repaired'], why: '*Have* + object + past participle.' },
      { s: 'He is said [that he is] very rich.', a: ['to be'], why: 'With a real subject: *is said to be*.' },
    ] },
  ],
};
