// English C1, unit 12, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// The natural world: advanced word formation, compound nouns and adjectives, causative verb patterns, and a long
// article on rewilding. Each lesson ends with a task in the format of C1 Advanced and a speaking task.
export const UNIT = {
  id: 'u12',
  title: 'The natural world',
  goal: 'Build words in several steps with prefixes, suffixes and internal changes, use compound nouns and adjectives naturally, say who makes things happen with causative verbs, and read a long article on rewilding.',
  art: 'cactus',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'speaking'], topics: ['word-formation', 'compound-nouns', 'compound-adjectives', 'causatives', 'nature', 'environment', 'rewilding'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Sustain, sustainable, sustainability',
      about: 'Build words in several steps, with prefixes, suffixes and the spelling changes that go with them.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'At B2 you formed words in one step: *happy → unhappy*, *employ → employment*. At C1 a word is often built in **two or three steps**, and each step changes something. Start from the verb *sustain* (keep something going). Add *-able* and you have an adjective, *sustainable*. Add *-ity* to that and you have a noun, *sustainability*. Add *un-* and *-ly* and you have an adverb with the opposite meaning, *unsustainably*.\n\nEach suffix tells you the **word class**. Nouns often end in *-tion, -ment, -ness, -ity, -ance, -ence, -ism, -ship*; adjectives in *-able, -ible, -ive, -ous, -al, -ful, -less, -ic*; verbs in *-ise, -ify, -en*; adverbs usually in *-ly*. Prefixes change the **meaning**, not the class: *un-, in-, dis-, non-* make it negative, *mis-* means *wrongly*, *over-* and *under-* mean *too much* and *too little*, *re-* means *again*, *de-* means *remove* (*deforestation*), *counter-* means *against*.' },
          { t: 'table', caption: 'One root, many words', explain: ['head'], head: ['Verb', 'Noun', 'Adjective', 'Adverb'], rows: [
            ['sustain', 'sustainability, sustenance', 'sustainable, unsustainable', 'sustainably, unsustainably'],
            ['destroy', 'destruction', 'destructive, indestructible', 'destructively'],
            ['vary', 'variety, variation', 'various, variable, invariable', 'variously, invariably'],
            ['resist', 'resistance', 'resistant, irresistible', 'irresistibly'],
            ['abound', 'abundance', 'abundant', 'abundantly'],
            ['compare', 'comparison', 'comparable, incomparable', 'comparatively'],
            ['threaten', 'threat', 'threatening, threatened', 'threateningly'],
          ] },
        ],
        [
          { t: 'text', md: 'Many common words change **inside** when they change class, and these are the ones the exam likes most. Adjectives of size become nouns ending in *-th*, with a vowel change: *deep → depth, long → length, broad → breadth, strong → strength, wide → width* (and *high → height*). Some verbs lose or change letters before a suffix: *maintain → maintenance, pronounce → pronunciation, explain → explanation, repeat → repetition, intervene → intervention, persevere → perseverance, receive → reception*.\n\nThe **stress** can move too, which helps you remember the spelling: *aDMIRE → ADmirable, PREFER → PREFerable, COMpare → comPARison*.\n\nFinally, the **negative prefix** depends on the word. *Il-* comes before *l* (*illegal*), *im-* before *m* and *p* (*immature, impossible*), *ir-* before *r* (*irreversible*), *in-* often with Latin words (*inaccurate, insufficient*), and *un-* with most others (*unpredictable*). *Dis-* goes with many verbs and nouns (*disappear, disregard*), and *non-* gives a neutral, technical negative (*non-native species*).' },
          { t: 'examples', items: [
            { s: 'The **depth** of the lake has fallen by almost a metre.', n: '*deep → depth*: vowel change and *-th*.' },
            { s: 'The bridge needs constant **maintenance**.', n: '*maintain → maintenance*: the *-ai-* disappears.' },
            { s: 'Some of the damage to the reef may be **irreversible**.', n: '*ir-* before *r*; *-ible* here, not *-able*.' },
            { s: 'Wild boar have become **abundant** in parts of the forest.', n: 'Adjective from *abound*.' },
            { s: 'Rainfall in the region is **notoriously unpredictable**.', n: 'Two derived words side by side: adverb + adjective.' },
            { s: 'The river was **overfished** for decades.', n: '*over-*: too much.' },
            { s: 'Grey squirrels are a **non-native** species in Britain.', n: '*non-*: a neutral, technical negative.' },
            { s: 'The area is being **reforested** with oak and birch.', n: '*re-*: again; the opposite of *deforested*.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['They farmed the land unsustainablely.', 'They farmed the land unsustainably.', 'Adjectives in *-le* become *-ly*: *possible → possibly*.'],
            ['the deepness of the river', 'the depth of the river', 'Size adjectives have *-th* nouns.'],
            ['an unresponsible decision', 'an irresponsible decision', '*ir-* before *r*.'],
            ['the maintainance of the park', 'the maintenance of the park', 'The spelling changes inside the word.'],
            ['a clear explaination', 'a clear explanation', 'The *i* of *explain* disappears.'],
            ['an ecological disbalance', 'an ecological imbalance', 'The negative of *balance* is *imbalance*.'],
            ['There is a big various of plants.', 'There is a wide variety of plants.', 'A noun is needed after *a*: *variety*.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In **Reading and Use of English Part 3** there are eight gaps, each with a word in capitals. Ask four questions every time: which **word class** does the gap need, is the meaning **positive or negative**, does a noun need to be **plural**, and does the word need **two changes** (a prefix *and* a suffix)? Then check the spelling letter by letter: a word that is nearly right gets no mark.' },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Which negative prefix does each word take?', groups: ['un-', 'in-', 'im- / il-', 'ir-'], items: [
            { s: 'predictable', g: 0, why: '*unpredictable*.' },
            { s: 'sufficient', g: 1, why: '*insufficient*.' },
            { s: 'mature', g: 2, why: '*immature*: *im-* before *m*.' },
            { s: 'reversible', g: 3, why: '*irreversible*: *ir-* before *r*.' },
            { s: 'legal', g: 2, why: '*illegal*: *il-* before *l*.' },
            { s: 'accurate', g: 1, why: '*inaccurate*.' },
            { s: 'regular', g: 3, why: '*irregular*.' },
            { s: 'spoilt', g: 0, why: '*unspoilt*: a place not damaged by building or tourism.' },
          ] },
          { t: 'ex', kind: 'wordform', h: 'Form a word from the word in capitals. Some need two changes.', items: [
            { q: 'Scientists are worried about the ___ of the coral reefs.', base: 'destroy', a: ['destruction'], why: 'A noun after *the*, with an internal change: *destruction*.' },
            { q: 'The ___ of the canyon is impossible to capture in a photograph.', base: 'broad', a: ['breadth'], why: 'Size adjective → *-th* noun: *breadth*.' },
            { q: 'Farmers have been using water ___ for years.', base: 'sustain', a: ['unsustainably'], why: 'An adverb with a negative meaning: prefix and suffix.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Back from the brink', md: 'Twenty years ago the marsh was a wasteland of drained fields and abandoned machinery. Its recovery is a story of patience rather than spectacular intervention. Volunteers removed the drains, and the water slowly returned. Reeds spread, insects followed, and the birds that depend on them came back in astonishing numbers.\n\nThe reserve is now home to a remarkable variety of wildlife, and its managers speak of the work with quiet determination. Nothing here was inevitable. It was the result of decisions that, at the time, seemed hopelessly unrealistic.' },
          { t: 'ex', kind: 'wordform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 3): use the word in capitals to form a word that fits the gap.', items: [
            { q: 'Many people regard wetlands as ___ land that is better drained and farmed.', base: 'use', a: ['useless', 'unusable'], why: 'A negative adjective before *land*: *useless* (or *unusable*).' },
            { q: 'In fact, they are among the most ___ habitats on the planet.', base: 'produce', a: ['productive'], why: 'An adjective after *the most*: *productive*.' },
            { q: 'They store carbon, filter water and offer ___ against floods.', base: 'protect', a: ['protection'], why: 'A noun after *offer*: *protection*.' },
            { q: 'Their loss has been largely ___ to agriculture and building.', base: 'attribute', a: ['attributable'], why: 'An adjective after *has been*: *attributable to*.' },
            { q: 'The ___ of a single marsh can take decades.', base: 'restore', a: ['restoration'], why: 'A noun after *The*, with a spelling change: *restoration*.' },
            { q: 'Even small changes in water level can have ___ effects on the birds that nest there.', base: 'proportion', a: ['disproportionate'], why: 'Two changes: the prefix *dis-* and the suffix *-ate*.' },
            { q: 'Conservationists stress the ___ of involving local farmers from the start.', base: 'important', a: ['importance'], why: 'A noun after *the*: *importance*.' },
            { q: 'Without their support, even the best-funded projects are ___ to succeed.', base: 'like', a: ['unlikely'], why: 'A negative adjective before *to succeed*: *unlikely*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'Some of the damage may be irreversible.' },
            { a: 'The land was farmed unsustainably for decades.' },
            { a: 'The reserve has a remarkable variety of wildlife.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Man-made and drought-resistant',
      about: 'Use compound nouns and compound adjectives accurately, with the right stress, hyphens and plurals.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'English packs a great deal of meaning into **compounds**: two or more words that work as one. Writers on nature and science use them constantly, because *a drought-resistant crop* is shorter and sharper than *a crop that can survive long periods without rain*.\n\nA **compound noun** is usually noun + noun, and the **first** noun describes the second: *a **wildlife reserve*** is a kind of reserve, *a **food chain*** is a kind of chain. The first noun is almost always **singular**, even when the meaning is plural: *a tree house, a bird sanctuary, a species list*. The **stress** falls on the first part: *a WILDlife reserve, a GREENhouse*. Some compounds are written as one word (*rainforest, wildlife, landscape*), some as two (*sea level, climate change*), and a few with hyphens (*passer-by*). A good dictionary is the only sure guide.\n\nThe **plural** goes on the main noun, which is usually the last: *two car parks, several nature reserves*. In a few older compounds the main noun comes first: *passers-by, mothers-in-law*.' },
          { t: 'table', caption: 'Compound nouns of the natural world', explain: ['head', 'col1'], head: ['Compound', 'Meaning'], rows: [
            ['a wildlife reserve', 'protected land where wild animals live'],
            ['a food chain', 'which living thing eats which'],
            ['habitat loss', 'the disappearance of the places where species live'],
            ['sea level', 'the average height of the sea'],
            ['a greenhouse gas', 'a gas that traps heat in the atmosphere'],
            ['a breeding ground', 'a place where animals produce young'],
            ['a water table', 'the level below which the ground is full of water'],
          ] },
        ],
        [
          { t: 'text', md: 'A **compound adjective** goes before a noun, normally with a **hyphen**. B2 introduced the common patterns (*a two-hour walk, well-known, eco-friendly*). At C1 you need a wider range.\n\n**Noun + past participle** says how or by what something was made or affected: *man-made, sun-dried, snow-capped, snow-covered*. **Noun + adjective** says in what way something is that adjective: *drought-resistant, salt-tolerant, energy-efficient, carbon-neutral*. **Adjective or adverb + -ing** describes a lasting quality: *long-lasting, far-reaching, slow-moving, fast-growing*. **Adjective + noun + -ed** describes a feature: *cold-blooded, broad-leaved, long-legged*. **Long-standing** and **long-term** describe time.\n\nTwo rules about hyphens are worth knowing. After the verb *be* the hyphen is often dropped: *a well-known species*, but *the species is well known*. And adverbs ending in **-ly** never take a hyphen: *a **densely populated** area, a **highly endangered** bird*.' },
          { t: 'examples', items: [
            { s: 'The lake is not natural: it is entirely **man-made**.', n: 'Noun + past participle: made by people.' },
            { s: 'Farmers are switching to **drought-resistant** varieties of wheat.', n: 'Noun + adjective: able to resist drought.' },
            { s: 'The decision will have **far-reaching** consequences for the coast.', n: 'Adjective + -ing: affecting many things.' },
            { s: 'There is a **long-standing** dispute over who owns the forest.', n: 'It has existed for a long time.' },
            { s: 'Reptiles are **cold-blooded**, so they bask in the sun to warm up.', n: 'Adjective + noun + -ed.' },
            { s: 'The island is one of the most **densely populated** places in the region.', n: 'An *-ly* adverb: no hyphen.' },
            { s: 'The village lies below **snow-capped** peaks, next to a small **bird sanctuary**.', n: 'A compound adjective, then a compound noun.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['a wildlife’s reserve', 'a wildlife reserve', 'In a compound noun the first noun describes the second: no *’s*.'],
            ['a birds sanctuary', 'a bird sanctuary', 'The first noun stays singular.'],
            ['two cars parks', 'two car parks', 'The plural goes on the main noun.'],
            ['a densely-populated city', 'a densely populated city', 'No hyphen after an *-ly* adverb.'],
            ['a drought resisting crop', 'a drought-resistant crop', 'The fixed form is noun + adjective.'],
            ['a man-making lake', 'a man-made lake', 'Noun + past participle: made by people.'],
          ] },
          { t: 'dialogue', title: 'Planning the new garden', lines: [
            { who: 'Bethan', s: 'If we want to save water, we should plant drought-resistant shrubs along the south wall.' },
            { who: 'Callum', s: 'Fine, but I’d keep the old pond. It isn’t man-made in the sense of plastic. It’s been there for over a century.' },
            { who: 'Bethan', s: 'Agreed. It’s a breeding ground for frogs, and they’re part of the food chain for the birds.' },
            { who: 'Callum', s: 'And the hedge? There’s a long-standing argument with the neighbours about it.' },
            { who: 'Bethan', s: 'Keep it. A fast-growing fence would be quicker, but a hedge is far better for wildlife.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the two halves to make compound adjectives.', pairs: [
            ['drought-', 'resistant'],
            ['man-', 'made'],
            ['far-', 'reaching'],
            ['cold-', 'blooded'],
            ['energy-', 'efficient'],
            ['long-', 'standing'],
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'The town sits next to a large [birds] sanctuary.', a: ['bird'], why: 'The first noun in a compound stays singular.' },
            { s: 'It is one of the most [densely-populated] areas in Europe.', a: ['densely populated'], why: 'No hyphen after an *-ly* adverb.' },
            { s: 'The council has built two new [cars parks].', a: ['car parks'], why: 'The plural goes on the main noun, *parks*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 1): read the text about a nature reserve and choose the word that best fits each gap.', items: [
            { q: 'The reserve was created to protect one of the last ___ stretches of coast in the country.', o: ['unspoilt', 'unharmed', 'uncovered', 'undone'], why: '*Unspoilt* coast has not been damaged by building or tourism.' },
            { q: 'The marshes are an important breeding ___ for wading birds.', o: ['ground', 'place', 'field', 'land'], why: 'The fixed compound is *breeding ground*.' },
            { q: 'Rising sea ___ are already threatening the lower paths.', o: ['levels', 'heights', 'lines', 'depths'], why: 'The compound noun is *sea level*.' },
            { q: 'Habitat ___ remains the greatest danger to the species that live here.', o: ['loss', 'lack', 'fall', 'drop'], why: 'The collocation is *habitat loss*.' },
            { q: 'Volunteers have planted ___-resistant grasses on the dunes.', o: ['drought', 'dry', 'heat', 'thirst'], why: 'The compound adjective is *drought-resistant*.' },
            { q: 'There is a long-___ tradition of grazing cattle on the meadows.', o: ['standing', 'lasting', 'living', 'staying'], why: '*Long-standing* describes something that has existed for a long time.' },
            { q: 'The decision to close the car park had ___ consequences for the village.', o: ['far-reaching', 'wide-ranging', 'deep-rooted', 'high-flying'], why: '*Far-reaching consequences* affect many things.' },
            { q: 'The visitor centre is designed to be completely carbon ___.', o: ['neutral', 'free', 'clean', 'zero'], why: 'The fixed expression is *carbon neutral*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 1** the four options often mean almost the same thing. The test is **collocation**: which word goes with the words around the gap. *Wide-ranging* and *far-reaching* are both real compounds, but we speak of *far-reaching consequences* and *a wide-ranging discussion*.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'Farmers are planting drought-resistant crops.' },
            { a: 'The lake is entirely man-made.' },
            { a: 'The decision will have far-reaching consequences.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Make, let, have, get, cause',
      about: 'Say who or what makes something happen, with active and passive causative patterns.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'A **causative** verb says that someone or something makes another action happen. English has several, and each has its own pattern and its own shade of meaning.\n\n**Make + object + infinitive without to** is about force or a strong effect: *The drought **made** farmers **sell** their cattle.* **Let + object + infinitive without to** is about permission: *The rangers **let** us **walk** on the dunes.* **Have + object + infinitive without to** is about giving an instruction to someone whose job it is: *I’ll **have** the gardener **plant** the trees.* **Get + object + to-infinitive** is about persuading: *We finally **got** the council **to listen**.*\n\n**Cause + object + to-infinitive** is used when the cause is a thing or a process, not a person: *The heavy rain **caused** the river **to burst** its banks.* More formal verbs follow the same pattern: *force, compel, enable, allow, prompt someone to do something*. **Help** can go either way: *help someone (to) do*.' },
          { t: 'table', caption: 'Causative patterns', explain: ['head', 'col1'], head: ['Pattern', 'Meaning', 'Example'], rows: [
            ['make someone do', 'force, or a strong effect', 'The smoke made us cough.'],
            ['let someone do', 'allow', 'They let the cattle graze freely.'],
            ['have someone do', 'instruct (someone whose job it is)', 'I’ll have someone call you back.'],
            ['get someone to do', 'persuade', 'She got the farmers to try it.'],
            ['cause something to do', 'be the reason (often a thing)', 'Warm water causes coral to lose its colour.'],
            ['have / get something done', 'arrange a service; or suffer something', 'We had the trees cut down.'],
            ['get something doing', 'start something working', 'We got the pump working again.'],
            ['have someone doing', 'the result of your action', 'The guide had us all laughing.'],
          ] },
        ],
        [
          { t: 'text', md: '**Have** or **get something done** (past participle) means that someone else does the work for you: *We **had** the old fence **removed***. *Get* is a little more informal and can suggest effort. The same pattern also describes something **bad that happens to you**, with no one choosing it: *Several farmers **had** their crops **destroyed** by the floods.*\n\nThe **passive** of the causatives is where most mistakes happen. **Make** in the passive needs **to**: *The workers **were made to leave**.* **Let** has no passive: use **be allowed to** instead: *Visitors **are allowed to camp** here* (not *are let to camp*). **Cause** is rarely passive: *the river was caused to flood* sounds heavy, so we say *the rain **caused** the river **to flood***.' },
          { t: 'examples', items: [
            { s: 'The beavers’ dams **cause** the water **to spread** across the valley.', n: '*cause* + object + *to*: a natural cause.' },
            { s: 'The new law **made** landowners **leave** a strip of wild grass by every river.', n: '*make* + object + infinitive without *to*.' },
            { s: 'Landowners **were made to leave** a strip of wild grass.', n: 'Passive *make*: *to* returns.' },
            { s: 'The estate **lets** visitors **walk** anywhere except the nesting areas.', n: '*let* + object + infinitive without *to*.' },
            { s: 'Visitors **are not allowed to walk** in the nesting areas.', n: 'No passive of *let*: *be allowed to*.' },
            { s: 'It took months to **get** the neighbours **to agree** to the plan.', n: '*get* + object + *to*: persuade.' },
            { s: 'We’re **having** the old drains **removed** next spring.', n: '*have something done*: a service.' },
            { s: 'They **had** their barn **flooded** twice last winter.', n: '*have something done* for a misfortune.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['The drought made them to sell.', 'The drought made them sell.', 'Active *make*: no *to*.'],
            ['They were made leave.', 'They were made to leave.', 'Passive *make*: *to* is needed.'],
            ['The ranger let us to fish.', 'The ranger let us fish.', '*let* + infinitive without *to*.'],
            ['We were let to camp there.', 'We were allowed to camp there.', '*let* has no passive.'],
            ['We had cut the hedge.', 'We had the hedge cut.', 'Object before the past participle.'],
            ['The rain caused the river flood.', 'The rain caused the river to flood.', '*cause* + object + *to*.'],
            ['I got the vet check the dog.', 'I got the vet to check the dog.', '*get* + person + *to*.'],
          ] },
          { t: 'dialogue', title: 'A ranger explains', lines: [
            { who: 'Callum', s: 'Why are the fields by the river under water? Did someone flood them on purpose?' },
            { who: 'Bethan', s: 'In a way. We let the beavers build their dams, and the dams cause the river to spread out.' },
            { who: 'Callum', s: 'Didn’t the farmers object?' },
            { who: 'Bethan', s: 'At first. It took two years to get them to agree. What changed their minds was the flood in the town: the houses upstream of the dams didn’t have their cellars flooded.' },
            { who: 'Callum', s: 'And are visitors allowed to go near the dams?' },
            { who: 'Bethan', s: 'Only with a guide. We had a viewing platform built so that nobody disturbs them.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the form that fits.', items: [
            { q: 'The smoke from the fires made everyone ___ indoors.', o: ['stay', 'to stay', 'staying'], why: 'Active *make* + infinitive without *to*.' },
            { q: 'The children were made ___ the litter they had dropped.', o: ['to pick up', 'pick up', 'picking up'], why: 'Passive *make*: *to* returns.' },
            { q: 'Dog owners are not ___ to let their dogs run loose in spring.', o: ['allowed', 'let', 'made'], why: '*let* has no passive: *be allowed to*.' },
            { q: 'Warmer winters have caused many birds ___ their migration.', o: ['to delay', 'delay', 'delaying'], why: '*cause* + object + *to*.' },
            { q: 'We’re having the dead trees ___ before the storm season.', o: ['removed', 'remove', 'to remove'], why: '*have something done*: past participle.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the word given.', items: [
            { q: 'The rangers didn’t allow us to light a fire.', cue: 'LET', a: ['The rangers didn’t let us light a fire.', 'The rangers did not let us light a fire.'], why: '*let* + infinitive without *to*.' },
            { q: 'A tree surgeon is going to cut down the old oak for us.', cue: 'HAVING', a: ['We are having the old oak cut down.', 'We’re having the old oak cut down.'], why: '*have something done*, with the object before the participle.' },
            { q: 'We finally persuaded the council to protect the meadow.', cue: 'GOT', a: ['We finally got the council to protect the meadow.'], why: '*get someone to do*: persuade.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 2): read the text about a village and its river and write one word in each gap.', items: [
            { q: 'For years the river flooded every winter, and many families had ___ homes damaged by the water.', a: ['their'], why: '*have something done* for a misfortune: *had their homes damaged*.' },
            { q: 'The council tried to ___ the farmers to plant trees along the banks.', a: ['get', 'persuade', 'encourage'], why: '*get someone to do*: persuade.' },
            { q: 'At first nobody was willing to ___ the land be used in this way.', a: ['let'], why: '*let* + object + infinitive without *to*.' },
            { q: 'Then a terrible storm caused the main bridge ___ collapse.', a: ['to'], why: '*cause something to do*.' },
            { q: 'The disaster made everyone think again ___ the plan.', a: ['about'], why: '*think about* something; *made everyone think* is active *make* without *to*.' },
            { q: 'Farmers ___ finally persuaded to replant the banks with willow.', a: ['were'], why: 'A passive: *were persuaded to*.' },
            { q: 'The willows slow the water down, ___ means the village now floods far less often.', a: ['which'], why: '*which* refers back to the whole clause.' },
            { q: 'Visitors are now ___ to walk along the new riverside path.', a: ['allowed', 'permitted', 'encouraged', 'invited'], why: '*let* has no passive: *be allowed to*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Causatives are a favourite in **Part 2** and **Part 4**. Look at what comes **after** the gap: an infinitive without *to* points to *make* or *let*; *to* + verb points to *get, cause, allow* or a passive *made*; a past participle points to *have* or *get something done*.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'The dams cause the river to spread across the valley.' },
            { a: 'Visitors are not allowed to walk in the nesting areas.' },
            { a: 'It took two years to get the farmers to agree.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'Letting nature take over',
      about: 'Read a long article on rewilding and answer questions in the format of C1 Advanced Reading and Use of English Part 5.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: '**Rewilding** means letting nature restore itself, with as little human management as possible: removing drains and fences, allowing rivers to find their own course, and sometimes bringing back animals that once lived there, such as beavers. It is one of the most discussed ideas in conservation, and it divides opinion between those who see it as hope and those who see it as a threat to farming and rural life.\n\nIn **Reading and Use of English Part 5** of C1 Advanced you read one long text and answer **six multiple-choice questions** with **four options**. The questions follow the order of the text. They test detail, but above all **opinion, attitude, purpose and implication**: why the writer mentions something, what a phrase refers to, what the writer suggests without saying it directly.' },
          { t: 'table', caption: 'Words from the article', explain: ['head', 'col1'], head: ['Word or phrase', 'Meaning'], rows: [
            ['tidy', 'neat and ordered; here, over-managed'],
            ['scrub', 'low bushes and small trees'],
            ['a keystone species', 'a species that many others depend on'],
            ['a leap of faith', 'trusting something without proof'],
            ['a romantic notion', 'an attractive but unrealistic idea'],
            ['hand over the reins', 'give control to someone else'],
          ] },
        ],
        [
          { t: 'reading', title: 'Letting go of the land', md: 'The first thing visitors notice at Harrow Fen is the mess. Where there were once neat hedges and straight ditches, there is now a tangle of scrub, fallen trees and pools that appear after rain and vanish in summer. For a generation brought up to think of a well-kept countryside as a healthy one, it can look like neglect. That, says the estate’s manager, Ruth Carver, is precisely the point. “We spent centuries making the land tidy. Tidy, it turns out, is very bad for almost everything that lives here.”\n\nRewilding asks landowners to do something deeply uncomfortable: to stop. Instead of deciding what should grow where, they remove the fences and drains and let natural processes decide. Grazing animals, left to roam, open up clearings in some places and allow thorny scrub to spread in others; the scrub in turn protects young trees from being eaten. The result is not a forest or a field but a shifting patchwork, and it is in that patchwork, Carver argues, that wildlife thrives.\n\nThe animal that has done most to change the fen is the beaver. Its dams hold back water, create ponds for insects and amphibians, and slow down floods on their way to the village downstream. Ecologists call it a keystone species, because so much else depends on it. Not everyone is a fan. A neighbouring farmer, whose lower field now floods each spring, describes the beavers with a weariness that is hard to argue with. “I don’t mind wildlife,” he says. “I mind not being asked.”\n\nHis complaint goes to the heart of the debate. Supporters of rewilding sometimes speak as though nature, once freed, will sort everything out. Critics call this a romantic notion, pointing out that the land also has to feed people, and that the costs of rewilding often fall on those who live nearest to it, while the benefits are enjoyed by visitors and distant cities. Carver does not dismiss the point. The estate now pays for drainage on the farmer’s field and has agreed to move one dam. “If rewilding only works for people with large estates,” she concedes, “then it isn’t working.”\n\nWhat makes the approach so difficult to judge is that its results are slow and unpredictable. A tree planted today is a measurable achievement; a field left alone may take twenty years to show what it can become. Funders want targets, and rewilding offers few. It requires, in Carver’s words, “a leap of faith that most institutions are not designed to make”.\n\nPerhaps the real lesson of Harrow Fen is not about beavers or scrub at all, but about control. For most of history, managing the land meant imposing an order on it. Rewilding suggests that, in some places at least, the wiser course is to hand over the reins, and to accept that the land will not always do what we expect.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 5): read the article and choose the answer that fits best according to the text.', items: [
            { q: 'In the first paragraph, the writer suggests that many visitors…', o: ['judge the land by standards that may be mistaken.', 'are disappointed by the lack of wildlife.', 'find the estate difficult to reach after rain.', 'are unaware that the land was once farmed.'], why: 'A generation *brought up to think of a well-kept countryside as a healthy one*; Carver says tidy *is very bad for almost everything*.' },
            { q: 'Why does the writer describe rewilding as “deeply uncomfortable”?', o: ['Landowners must give up the habit of controlling the land.', 'It requires a great deal of hard physical work.', 'It forces landowners to remove their animals.', 'It makes the land unsafe for visitors.'], why: '*to stop. Instead of deciding what should grow where…*' },
            { q: 'According to the second paragraph, the scrub is important because it…', o: ['protects young trees from grazing animals.', 'replaces the hedges that were removed.', 'prevents the pools from drying out.', 'stops the animals from leaving the estate.'], why: '*the scrub in turn protects young trees from being eaten*.' },
            { q: 'What does the farmer’s comment “I mind not being asked” show?', o: ['His main objection is that he was not consulted.', 'He would prefer the beavers to be removed.', 'He does not believe the floods are caused by beavers.', 'He has changed his mind about wildlife.'], why: 'He says *I don’t mind wildlife*; what he objects to is not being consulted.' },
            { q: 'How does Carver respond to the critics’ argument?', o: ['She accepts it and has taken practical steps.', 'She rejects it as a romantic notion.', 'She argues that visitors bring benefits to farmers.', 'She says only large estates can afford rewilding.'], why: '*Carver does not dismiss the point. The estate now pays for drainage… and has agreed to move one dam.*' },
            { q: 'In the final paragraph, the writer’s main point is that rewilding…', o: ['challenges the idea that people must always be in control of nature.', 'will eventually replace traditional farming.', 'is more about animals than about land.', 'has been proved to work in most places.'], why: '*the real lesson… is about control… hand over the reins*. *In some places at least* rules out the other options.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 5**, find the part of the text that each question refers to, and read **a sentence or two either side**. The right option rarely repeats the text’s words: *judge the land by standards that may be mistaken* is a paraphrase of a whole paragraph. A wrong option often goes **further** than the text: *has been proved to work in most places* ignores *in some places at least*.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Find a word or phrase in the article that completes each sentence.', items: [
            { q: 'An animal that many other species depend on is called a ___ species.', a: ['keystone'], why: 'Paragraph three: *Ecologists call it a keystone species*.' },
            { q: 'An idea that is attractive but unrealistic is a romantic ___.', a: ['notion'], why: 'Paragraph four: *Critics call this a romantic notion*.' },
            { q: 'Trusting something without proof is a leap of ___.', a: ['faith'], why: 'Paragraph five: *a leap of faith*.' },
            { q: 'To give control to someone else is to hand over the ___.', a: ['reins'], why: 'Final paragraph: *hand over the reins*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite these ideas from the article with the word given.', items: [
            { q: 'Because of the dams, the water spreads across the valley.', cue: 'CAUSE', a: ['The dams cause the water to spread across the valley.'], why: '*cause something to do*.' },
            { q: 'Carver says she accepts that rewilding is not working if it only suits large estates.', cue: 'CONCEDES', a: ['Carver concedes that rewilding is not working if it only suits large estates.', 'Carver concedes rewilding is not working if it only suits large estates.'], why: '*concede that*: a reporting verb from unit 11.' },
          ] },
        ],
        [
          { t: 'text', md: 'Now say what you think, as in **Speaking Part 4**: *Should land be returned to nature even if it costs local people their living?* Use a compound adjective, a causative and a word built in two steps, such as *unsustainably* or *irreversible*.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'Tidy, it turns out, is very bad for wildlife.' },
            { a: 'The beaver is a keystone species.' },
            { a: 'Rewilding requires a leap of faith.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'wordform', h: 'Use the word in capitals to form a word that fits the gap.', items: [
      { q: 'The ___ of the river has fallen sharply this summer.', base: 'deep', a: ['depth'], why: '*deep → depth*.' },
      { q: 'Some of the damage to the forest is ___.', base: 'reverse', a: ['irreversible'], why: 'Prefix *ir-* and suffix *-ible*.' },
      { q: 'The land had been farmed ___ for generations.', base: 'sustain', a: ['unsustainably'], why: 'A negative adverb: two changes.' },
      { q: 'The park needs regular ___.', base: 'maintain', a: ['maintenance'], why: 'A noun with an internal change.' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose the word that best fits each gap.', items: [
      { q: 'The marsh is an important breeding ___ for birds.', o: ['ground', 'field', 'land', 'place'], why: '*breeding ground*.' },
      { q: 'Farmers need ___-resistant crops.', o: ['drought', 'dry', 'thirst', 'heat'], why: '*drought-resistant*.' },
      { q: 'The plan will have ___ consequences.', o: ['far-reaching', 'long-standing', 'wide-eyed', 'deep-seated'], why: '*far-reaching consequences*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'The heavy rain caused the river [flood].', a: ['to flood'], why: '*cause* + object + *to*.' },
      { s: 'The workers were made [leave] the site.', a: ['to leave'], why: 'Passive *make* needs *to*.' },
      { s: 'We were [let] to camp by the lake.', a: ['allowed'], why: '*let* has no passive.' },
      { s: 'It is a very [densely-populated] area.', a: ['densely populated'], why: 'No hyphen after an *-ly* adverb.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the word given.', items: [
      { q: 'A builder is going to repair our roof next week.', cue: 'HAVING', a: ['We are having our roof repaired next week.', 'We’re having our roof repaired next week.'], why: '*have something done*.' },
      { q: 'The ranger didn’t allow us to swim in the lake.', cue: 'LET', a: ['The ranger didn’t let us swim in the lake.', 'The ranger did not let us swim in the lake.'], why: '*let* + infinitive without *to*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the expressions with their meanings.', pairs: [
      ['a keystone species', 'one that many others depend on'],
      ['habitat loss', 'the disappearance of places where species live'],
      ['a leap of faith', 'trusting without proof'],
      ['man-made', 'made by people'],
      ['hand over the reins', 'give control to someone else'],
    ] },
  ],
};
