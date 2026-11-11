// French B1, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Cities and the environment',
  goal: 'Discuss life in a city and the environment, and compare places and habits. Use comparatives and superlatives, the passive voice and on, and advice with il faut que.',
  art: 'sun',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['comparatives', 'superlatives', 'quantity', 'passive voice', 'on', 'environment', 'city life', 'advice'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'La ville la plus calme',
      about: 'Compare and rank places with le plus, le moins and de plus en plus.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'At A2 you compared two things with **plus … que**, **moins … que** and **aussi … que**. To say that something is **the most** or **the least**, add the article: **le plus**, **la plus**, **les plus**, **le moins** … *Paris est la ville la plus visitée de France. C’est le quartier le moins bruyant.* With an adjective that comes before the noun, the superlative goes before it too: *le plus grand parc*. The *of* is **de**: *la plus grande ville du pays*.' },
          { t: 'table', caption: 'Superlatives', explain: ['head', 'col2'], head: ['Form', 'Example', 'Meaning'], rows: [
            ['le plus + adjective', 'le quartier le plus calme', 'the quietest area'],
            ['la plus + adjective', 'la rue la plus longue', 'the longest street'],
            ['le moins + adjective', 'le moyen le moins polluant', 'the least polluting way'],
            ['le plus de + noun', 'C’est ici qu’il y a le plus de parcs.', 'the most parks'],
            ['le meilleur / la meilleure', 'le meilleur transport', 'the best'],
            ['le mieux', 'Ce vélo marche le mieux.', 'best (adverb)'],
          ] },
          { t: 'tip', art: 'owl', md: '**bon** gives **meilleur** and **le meilleur**; **bien** gives **mieux** and **le mieux**. Do not say *le plus bon*. For something getting more or less, use **de plus en plus** and **de moins en moins**: *Il y a de plus en plus de voitures. Nous utilisons de moins en moins de papier.*' },
        ],
        [
          { t: 'text', md: 'Quantity words help you talk about habits in a city. **La plupart des** (most), **plusieurs** (several), **quelques** (a few), **certains** (some), **chaque** (each), **aucun(e)** (no, not any): *La plupart des habitants prennent le bus. Plusieurs lignes sont fermées. Chaque jour, quelques personnes vont à vélo. Aucune voiture n’est autorisée.*' },
          { t: 'examples', items: [
            { s: 'C’est la ville **la plus propre** du pays.', n: 'The cleanest.' },
            { s: 'Le tramway est **le moyen de transport le plus rapide**.', n: '*le moyen … le plus rapide*' },
            { s: 'Il y a **de plus en plus** de vélos en ville.', n: 'More and more.' },
            { s: '**La plupart des** habitants trient leurs déchets.', n: 'Most of them.' },
            { s: '**Aucun** bus ne passe le dimanche.', n: '*aucun* with *ne*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'C’est la rue ___ calme de la ville.', o: ['la plus', 'le plus', 'plus'], why: '*rue* is feminine: *la plus*.' },
            { q: 'Il y a ___ de voitures qu’avant.', o: ['moins', 'plus', 'le moins'], why: 'Compared with before: *moins de voitures*.' },
            { q: 'Ce vélo marche ___ de tous.', o: ['le mieux', 'le meilleur', 'le plus bien'], why: 'An adverb: *le mieux*.' },
            { q: 'La ___ des habitants prennent le bus.', o: ['plupart', 'plus', 'beaucoup'], why: '*la plupart des* = most.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Write a sentence with a superlative.', items: [
            { q: 'Paris est une grande ville. (de France, la plus)', cue: 'Paris est', a: ['Paris est la plus grande ville de France.'], why: '*la plus grande ville de France*.' },
            { q: 'Ce quartier est calme. (de la ville, le plus)', cue: 'Ce quartier est', a: ['Ce quartier est le plus calme de la ville.', 'Ce quartier est le quartier le plus calme de la ville.'], why: '*le plus calme de la ville*.' },
            { q: 'Ce transport est rapide. (le moins, polluant)', cue: 'Le vélo est', a: ['Le vélo est le transport le moins polluant.', 'Le vélo est le moyen de transport le moins polluant.'], why: '*le transport le moins polluant*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Il y a de plus en plus de vélos en ville.', why: '*de plus en plus de* + noun.' },
            { a: 'La plupart des habitants trient leurs déchets.', why: '*la plupart des* + plural noun.' },
            { a: 'C’est la ville la plus propre du pays.', why: '*la ville la plus propre*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'C’est le [plus bon] restaurant.', a: ['meilleur'], why: '*bon* → *meilleur*.' },
            { s: 'Elle chante [le meilleur].', a: ['le mieux'], why: 'The adverb *bien* → *le mieux*.' },
            { s: 'Il y a de plus en [plus] voitures.', a: ['plus de'], why: '*de plus en plus de voitures*.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: '« le plus bon » est correct en français.', a: 'f', why: 'We say *le meilleur*.' },
            { q: '« de plus en plus » veut dire « more and more ».', a: 't', why: 'It describes a growing trend.' },
            { q: '« aucun bus ne passe » veut dire « no bus is coming ».', a: 't', why: '*aucun … ne* = no, not any.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'La rue est fermée',
      about: 'Use the passive voice and on.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'In the **passive**, the subject receives the action. French forms it with **être** and the **past participle**, which agrees with the subject: *Le parc est ouvert. La rue est fermée. Les déchets sont triés.* If you need to say who does the action, use **par**: *Les déchets sont triés par les habitants.* Compare the active: *Les habitants trient les déchets.*' },
          { t: 'table', caption: 'Active and passive', explain: ['head'], head: ['Active', 'Passive'], rows: [
            ['Les habitants trient les déchets.', 'Les déchets sont triés par les habitants.'],
            ['La mairie ferme la rue.', 'La rue est fermée par la mairie.'],
            ['On a construit un parc.', 'Un parc a été construit.'],
            ['On recycle le verre.', 'Le verre est recyclé.'],
          ] },
          { t: 'tip', art: 'owl', md: 'The passive is common in written French, in news and official notices. Another way to avoid saying who acts is **on** (one, people, we): *On recycle le verre ici.* *On ne fume pas dans le parc.* In speech, French prefers **on** to the passive.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Le parc **est ouvert** tous les jours.', n: 'Passive, present.' },
            { s: 'La rue **est fermée** à cause des travaux.', n: 'The participle agrees: *fermée*.' },
            { s: 'Les pistes cyclables **ont été construites** l’an dernier.', n: 'Passive, passé composé: *ont été construites*.' },
            { s: '**On** ne **peut** pas stationner ici.', n: '*on* as a general subject.' },
            { s: 'Ici, **on** trie les déchets en quatre catégories.', n: 'A general rule.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Write the passive.', items: [
            { q: 'La mairie ferme la rue.', cue: 'La rue', a: ['La rue est fermée par la mairie.'], why: '*est fermée par*, with agreement.' },
            { q: 'Les habitants trient les déchets.', cue: 'Les déchets', a: ['Les déchets sont triés par les habitants.'], why: '*sont triés par*.' },
            { q: 'On a construit un parc.', cue: 'Un parc', a: ['Un parc a été construit.'], why: '*a été construit*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right participle.', items: [
            { q: 'La rue est ___ à cause des travaux.', o: ['fermée', 'fermé', 'fermées'], why: '*rue* is feminine: *fermée*.' },
            { q: 'Les déchets sont ___ par les habitants.', o: ['triés', 'trié', 'triée'], why: 'Masculine plural: *triés*.' },
            { q: 'Les pistes ont été ___ l’an dernier.', o: ['construites', 'construit', 'construits'], why: 'Feminine plural: *construites*.' },
            { q: 'Le parc est ___ tous les jours.', o: ['ouvert', 'ouverte', 'ouverts'], why: 'Masculine singular: *ouvert*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'La rue est fermée à cause des travaux.', why: '*est fermée* + reason.' },
            { a: 'On ne fume pas dans le parc.', why: '*on ne … pas*.' },
            { a: 'Le verre est recyclé dans cette usine.', why: 'Passive with *est recyclé*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Active or passive? Choose.', items: [
            { q: 'La mairie a construit un parc : un parc ___.', o: ['a été construit', 'est construit', 'construit'], why: 'The passive of the passé composé: *a été construit*.' },
            { q: 'Les habitants recyclent le verre : le verre ___.', o: ['est recyclé', 'est recyclés', 'a recyclé'], why: 'The passive: *est recyclé*.' },
            { q: 'Dans ce parc, ___ ne fume pas.', o: ['on', 'il', 'ça'], why: '*on ne fume pas* is a general rule.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Les déchets sont triés ___ les habitants.', a: ['par'], why: '*par* introduces who does the action.' },
            { q: 'La rue est ___ à cause des travaux. (fermer)', a: ['fermée', 'fermee'], why: '*fermée*' },
            { q: 'Ici, ___ trie les déchets en quatre catégories.', a: ['on'], why: '*on* as a general subject.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Il faut que nous protégions',
      about: 'Talk about the environment and give advice with il faut que.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'The environment is a big topic in French media. Useful words: **l’environnement** (m.), **le climat**, **le changement climatique**, **la pollution**, **les déchets** (waste), **les énergies renouvelables**, **l’eau**, **un geste écologique**. Verbs: **polluer**, **protéger**, **économiser**, **trier**, **recycler**, **réutiliser**, **éteindre**, **gaspiller**.' },
          { t: 'table', caption: 'Environment', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['trier les déchets', 'to sort the waste'],
            ['recycler le verre', 'to recycle glass'],
            ['économiser l’eau et l’énergie', 'to save water and energy'],
            ['éteindre la lumière', 'to switch off the light'],
            ['prendre les transports en commun', 'to use public transport'],
            ['gaspiller', 'to waste'],
            ['polluer', 'to pollute'],
            ['protéger la nature', 'to protect nature'],
          ] },
          { t: 'dialogue', title: 'Le tri', lines: [
            { who: 'Sophie', s: 'Il faut que nous triions mieux nos déchets.' },
            { who: 'Lucas', s: 'Tu as raison. Il est important que chacun fasse un effort.' },
            { who: 'Sophie', s: 'Je pense que la mairie devrait installer plus de poubelles de tri.' },
            { who: 'Lucas', s: 'Je ne pense pas que ce soit suffisant, mais c’est un bon début.' },
          ] },
        ],
        [
          { t: 'text', md: 'To give advice or say what is necessary, use **il faut que** + subjunctive (unit 2) and **il est important de** + infinitive: *Il faut que nous économisions l’eau. Il est important de trier les déchets.* To say what you should do, use **on devrait** + infinitive: *On devrait prendre le vélo.* To warn, use **ne … surtout pas**: *Ne gaspillez surtout pas l’eau.*' },
          { t: 'examples', items: [
            { s: 'Il faut que **nous économisions** l’énergie.', n: '*économiser* → *que nous économisions*.' },
            { s: 'Il est important **de trier** les déchets.', n: '*il est important de* + infinitive.' },
            { s: 'On devrait **prendre** le vélo plus souvent.', n: '*on devrait* + infinitive.' },
            { s: 'Il faut que **tu éteignes** la lumière en sortant.', n: '*éteindre* → *que tu éteignes*.' },
            { s: 'Je ne pense pas que **ce soit** une bonne idée.', n: 'A doubt: *soit*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the subjunctive or the infinitive.', items: [
            { q: 'Il faut que nous ___ mieux nos déchets. (trier)', a: ['triions'], why: '*que nous triions*' },
            { q: 'Il faut que tu ___ la lumière. (éteindre)', a: ['éteignes', 'eteignes'], why: '*que tu éteignes*' },
            { q: 'Il est important de ___ l’eau. (économiser)', a: ['économiser', 'economiser'], why: '*il est important de* + infinitive.' },
            { q: 'Je ne pense pas que ce ___ suffisant. (être)', a: ['soit'], why: '*que ce soit*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the English.', pairs: [
            ['trier les déchets', 'to sort the waste'],
            ['économiser l’eau', 'to save water'],
            ['prendre les transports en commun', 'to use public transport'],
            ['gaspiller', 'to waste'],
            ['éteindre la lumière', 'to switch off the light'],
          ] },
          { t: 'ex', kind: 'sort', h: 'Good habit or bad habit?', groups: ['good for the environment', 'bad for the environment'], explain: ['groups'], items: [
            { s: 'trier les déchets', g: 0, why: 'Sorting waste helps recycling.' },
            { s: 'gaspiller l’eau', g: 1, why: 'Wasting water is bad.' },
            { s: 'prendre le vélo', g: 0, why: 'A clean way to travel.' },
            { s: 'laisser la lumière allumée', g: 1, why: 'Wastes energy.' },
            { s: 'recycler le verre', g: 0, why: 'Recycling saves resources.' },
            { s: 'polluer la rivière', g: 1, why: 'Pollution is bad.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Il faut que nous économisions l’énergie.', why: '*il faut que* + subjunctive.' },
            { a: 'Il est important de trier les déchets.', why: '*il est important de* + infinitive.' },
            { a: 'On devrait prendre les transports en commun.', why: '*on devrait* + infinitive.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Il faut que tu [éteins] la lumière.', a: ['éteignes'], why: 'After *il faut que*: the subjunctive.' },
            { s: 'Il est important [que] trier les déchets.', a: ['de'], why: '*il est important de* + infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Un prospectus et une lettre',
      about: 'Read a town leaflet on recycling and a letter to the mayor.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'Le tri des déchets', md: '**Trier, c’est simple !**\nDans notre ville, les déchets sont triés en quatre catégories : le verre, le papier, le plastique et les déchets ménagers. Le verre est ramassé le lundi, le papier le mercredi et le plastique le vendredi. Il est important que chacun respecte les jours de ramassage.\n\nOn ne jette pas les piles ni l’électronique à la poubelle : ils sont repris gratuitement dans les magasins. Merci de votre aide !' },
          { t: 'reading', title: 'Lettre au maire', md: 'Monsieur le Maire,\n\nJ’habite dans le quartier le plus ancien de la ville depuis dix ans. Je me permets de vous écrire parce que la rue principale est de plus en plus bruyante. La plupart des habitants pensent qu’il faudrait fermer cette rue aux voitures le week-end. Si la rue était fermée, les enfants pourraient y jouer en sécurité.\n\nJe vous remercie de votre attention.\n\nCordialement,\nNadia Benali' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Les déchets sont triés en quatre catégories.', a: 't', why: '*en quatre catégories : le verre, le papier, le plastique et les déchets ménagers*' },
            { q: 'Le papier est ramassé le vendredi.', a: 'f', why: 'Paper is collected on Wednesday.' },
            { q: 'Les piles sont reprises gratuitement dans les magasins.', a: 't', why: '*ils sont repris gratuitement dans les magasins*' },
            { q: 'Nadia habite dans le quartier depuis vingt ans.', a: 'f', why: '*depuis dix ans*' },
            { q: 'Le maire a déjà fermé la rue.', a: 'ng', why: 'The letter asks for it; no answer is given.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Pourquoi Nadia écrit-elle au maire ?', o: ['La rue principale est de plus en plus bruyante.', 'Elle veut un nouvel emploi.', 'Elle veut déménager.'], why: '*la rue principale est de plus en plus bruyante*' },
            { q: 'Que pensent la plupart des habitants ?', o: ['Qu’il faudrait fermer la rue aux voitures le week-end.', 'Qu’il faut plus de voitures.', 'Qu’il n’y a pas de problème.'], why: '*La plupart des habitants pensent qu’il faudrait fermer cette rue.*' },
            { q: 'Que se passerait-il si la rue était fermée ?', o: ['Les enfants pourraient y jouer en sécurité.', 'Les voitures iraient plus vite.', 'Le bruit augmenterait.'], why: '*Si la rue était fermée, les enfants pourraient y jouer en sécurité.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the passive verbs in the leaflet.', items: [
            { s: 'Les déchets [sont triés] en quatre catégories.', why: '*sont triés* is the passive.' },
            { s: 'Le verre [est ramassé] le lundi.', why: '*est ramassé* is the passive.' },
            { s: 'Ils [sont repris] gratuitement dans les magasins.', why: '*sont repris* is the passive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the texts.', items: [
            { q: 'Le verre est ramassé le ___.', a: ['lundi'], why: '*Le verre est ramassé le lundi.*' },
            { q: 'Nadia écrit à Monsieur le ___.', a: ['Maire', 'maire'], why: '*Monsieur le Maire*' },
            { q: 'La rue est de plus en plus ___.', a: ['bruyante'], why: '*de plus en plus bruyante*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'C’est la rue ___ calme de la ville.', o: ['la plus', 'le plus', 'plus'], why: '*rue* is feminine: *la plus*.' },
      { q: 'La rue est ___ à cause des travaux.', o: ['fermée', 'fermé', 'fermées'], why: '*rue* is feminine: *fermée*.' },
      { q: 'Il faut que nous ___ l’énergie.', o: ['économisions', 'économisons', 'économiser'], why: 'After *il faut que*: the subjunctive.' },
      { q: 'C’est ___ restaurant de la ville. (best)', o: ['le meilleur', 'le plus bon', 'le mieux'], why: '*bon* → *le meilleur*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Les déchets sont triés ___ les habitants.', a: ['par'], why: '*par* introduces who acts.' },
      { q: 'Il y a de ___ en plus de vélos.', a: ['plus'], why: '*de plus en plus de*' },
      { q: 'Il est important ___ trier les déchets.', a: ['de'], why: '*il est important de* + infinitive.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the English.', pairs: [
      ['trier les déchets', 'to sort the waste'],
      ['gaspiller', 'to waste'],
      ['la plupart des', 'most of'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Write the passive.', items: [
      { q: 'Les habitants trient les déchets.', cue: 'Les déchets', a: ['Les déchets sont triés par les habitants.'], why: '*sont triés par*.' },
      { q: 'La mairie ferme la rue.', cue: 'La rue', a: ['La rue est fermée par la mairie.'], why: '*est fermée par*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Il y a de plus en plus de vélos en ville.', why: '*de plus en plus de*' },
      { a: 'On devrait prendre les transports en commun.', why: '*on devrait* + infinitive.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'C’est le [plus bon] restaurant.', a: ['meilleur'], why: '*bon* → *meilleur*.' },
    ] },
  ],
};
