// French C2, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Varieties of French',
  goal: 'Understand the main varieties of French and choose between them. Learn the differences between France, Quebec, Belgium, Switzerland and Africa, slang and verlan, and politeness strategies.',
  art: 'suitcase',
  tags: { skills: ['vocabulary', 'reading', 'listening'], topics: ['varieties of French', 'Quebec', 'Belgium', 'Switzerland', 'verlan', 'slang', 'politeness'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Septante, nonante, char',
      about: 'Recognise the main vocabulary differences between French-speaking countries.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'French is spoken on every continent, and the standard form is shared, but vocabulary differs. In **Belgium** and **Switzerland**, people say **septante** (70) and **nonante** (90) where France says *soixante-dix* and *quatre-vingt-dix*; in parts of **Switzerland**, **huitante** (80) is also used. In Belgium, Switzerland and Quebec, the **meals** have different names: *le déjeuner* is **breakfast**, *le dîner* is **lunch** and *le souper* is **dinner**. In France, *le petit déjeuner* is breakfast, *le déjeuner* lunch and *le dîner* dinner.' },
          { t: 'table', caption: 'France and other varieties', explain: ['head', 'col0'], head: ['France', 'Elsewhere', 'Where'], rows: [
            ['soixante-dix / quatre-vingt-dix', 'septante / nonante', 'Belgium, Switzerland'],
            ['petit déjeuner / déjeuner / dîner', 'déjeuner / dîner / souper', 'Belgium, Switzerland, Quebec'],
            ['voiture', 'char', 'Quebec (informal)'],
            ['faire les courses / du shopping', 'magasiner', 'Quebec'],
            ['week-end', 'fin de semaine', 'Quebec'],
            ['e-mail', 'courriel', 'Quebec (also used in France)'],
          ] },
        ],
        [
          { t: 'text', md: '**Quebec French** keeps older words (*char* for *car*, *magasiner* for *to shop*), uses **English-looking** words with a French meaning (*chum* for *boyfriend*), and has its own politeness: **bienvenue** often means *you’re welcome*. The accent and the sound of some vowels differ, and **tu** is used more widely than in France. **Belgian French** has *à tantôt* (see you later) and *une fois* as a softener (*Viens une fois ici*). **African French** has its own words and rhythms; for example, in Côte d’Ivoire people say **enjailler** for *to have fun*.' },
          { t: 'tip', art: 'owl', md: 'You do not need to speak every variety. You need to **understand** them, and to be **consistent** in your own. If you write for a French audience, use *voiture*, *week-end* and *soixante-dix*; if you write for Quebec, use *char* (informally), *fin de semaine* and *courriel*. Never mix them in the same text.' },
          { t: 'ex', kind: 'match', h: 'Match the word from France with the other variety.', pairs: [
            ['soixante-dix', 'septante'],
            ['quatre-vingt-dix', 'nonante'],
            ['faire les courses', 'magasiner'],
            ['week-end', 'fin de semaine'],
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Which variety?', groups: ['France', 'Quebec'], explain: ['groups'], items: [
            { s: 'week-end', g: 0, why: 'The usual word in France.' },
            { s: 'fin de semaine', g: 1, why: 'Quebec.' },
            { s: 'voiture', g: 0, why: 'The standard word in France.' },
            { s: 'char', g: 1, why: 'Informal in Quebec.' },
            { s: 'faire les courses', g: 0, why: 'France.' },
            { s: 'magasiner', g: 1, why: 'Quebec.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'In Belgium and Switzerland, “nonante” means…', o: ['90', '80', '19'], why: '*Nonante* = quatre-vingt-dix.' },
            { q: 'In Quebec, “le souper” is…', o: ['the evening meal', 'breakfast', 'lunch'], why: 'In Quebec, *souper* is dinner.' },
            { q: 'In Quebec, “bienvenue” can mean…', o: ['you’re welcome', 'hello', 'goodbye'], why: 'Quebec: *bienvenue* answers *merci*.' },
            { q: 'Which sentence is consistently from France?', o: ['Je prends ma voiture ce week-end.', 'Je prends mon char cette fin de semaine.', 'Je prends ma voiture cette fin de semaine.'], why: 'Do not mix varieties.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite in the variety of France.', items: [
            { q: 'Je vais magasiner pendant la fin de semaine.', cue: 'Je vais faire', a: ['Je vais faire les courses pendant le week-end.', 'Je vais faire des courses pendant le week-end.'], why: '*Faire les courses* and *week-end*.' },
            { q: 'Il a nonante ans.', cue: 'Il a', a: ['Il a quatre-vingt-dix ans.'], why: '*Nonante* = quatre-vingt-dix.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the lesson.', items: [
            { q: 'En Suisse, on dit ___ pour quatre-vingt-dix.', a: ['nonante'], why: 'The Swiss and Belgian word.' },
            { q: 'Au Québec, on ne dit pas e-mail mais ___.', a: ['courriel'], why: 'Quebec word.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Meuf, relou, ouf',
      about: 'Understand slang, verlan and informal French, and know when to use it.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: '**Slang** is informal, often regional or generational language. It changes quickly, so trying to learn it all is pointless; but you should recognise common words. **Verlan** reverses the syllables of a word: *l’envers* → *verlan*, *femme* → **meuf**, *fou* → **ouf**, *lourd* → **relou** (annoying), *louche* → **chelou** (strange), *merci* → **cimer**. **Abbreviations** are also frequent: *un appart* (appartement), *un ado* (adolescent), *un resto* (restaurant), *sympa* (sympathique), *le prof*.' },
          { t: 'table', caption: 'Informal French', explain: ['head', 'col0'], head: ['Word', 'Meaning', 'Type'], rows: [
            ['meuf', 'woman, girlfriend', 'verlan of femme'],
            ['ouf', 'crazy, incredible', 'verlan of fou'],
            ['relou', 'annoying', 'verlan of lourd'],
            ['chelou', 'strange, dubious', 'verlan of louche'],
            ['un appart', 'a flat', 'abbreviation'],
            ['sympa', 'nice', 'abbreviation'],
          ] },
        ],
        [
          { t: 'text', md: 'The choice between **tu** and **vous** is also a matter of register. In France, **vous** is used with strangers, older people and in formal settings; **tu** with family, friends and, increasingly, colleagues of the same age. In Quebec, **tu** is more widespread, even with some strangers. When in doubt, use **vous** and let the other person suggest *on peut se tutoyer*. Be careful with **taboo** language: understand it in films, but do not use it as a learner.' },
          { t: 'tip', art: 'owl', md: 'Verlan words, like all slang, can sound **dated** within a few years and can mark you as trying too hard. Use them rarely, and only with people your age. For writing, avoid them entirely unless you quote speech. A dictionary of current French marks them *fam.* (familier) or *arg.* (argot).' },
          { t: 'ex', kind: 'match', h: 'Match the informal word with its meaning.', pairs: [
            ['relou', 'annoying'],
            ['ouf', 'crazy, incredible'],
            ['chelou', 'strange, dubious'],
            ['sympa', 'nice'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What does the speaker really mean?', items: [
            { q: '« Ce film est ouf ! »', o: ['It is incredible.', 'It is boring.', 'It is old.'], why: '*Ouf* = *fou*: crazy, incredible.' },
            { q: '« Mon frère est trop relou. »', o: ['My brother is very annoying.', 'My brother is very kind.', 'My brother is very tall.'], why: '*Relou* = annoying.' },
            { q: '« J’ai un nouvel appart. »', o: ['I have a new flat.', 'I have a new job.', 'I have a new car.'], why: '*Appart* = appartement.' },
            { q: '« Ce mec est chelou. »', o: ['That guy is strange.', 'That guy is funny.', 'That guy is tired.'], why: '*Chelou* = louche: dubious, strange.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the informal word.', items: [
            { q: 'Cette histoire est vraiment ___ : je n’y crois pas. (strange)', a: ['chelou'], why: '*Chelou* = strange.' },
            { q: 'On a regardé un film ___ hier soir ! (crazy, incredible)', a: ['ouf'], why: '*Ouf* = incredible.' },
            { q: 'J’habite dans un petit ___ près de la gare. (apartment)', a: ['appart'], why: 'The abbreviation of *appartement*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Formal or informal?', groups: ['formal', 'informal'], explain: ['groups'], items: [
            { s: 'Je vous prie de bien vouloir m’excuser.', g: 0, why: 'Formal.' },
            { s: 'Désolé, mon pote !', g: 1, why: 'Informal.' },
            { s: 'Pourriez-vous m’indiquer la gare ?', g: 0, why: 'Formal and polite.' },
            { s: 'Il est relou, ce mec.', g: 1, why: 'Informal.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Auriez-vous l’heure ?',
      about: 'Choose between direct and indirect politeness, in France and elsewhere.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'French politeness works through **indirectness** and **greetings**. In France, a request without **bonjour** is rude: enter a shop and say *Bonjour* first. To ask politely, use the **conditional**: *Auriez-vous l’heure ?* *Pourriez-vous m’aider ?* *Je voudrais un café* (not *Je veux*). To soften: *un peu*, *plutôt*, *si cela ne vous dérange pas*. To apologise before a request: *Excusez-moi de vous déranger.* To disagree politely: *Je ne suis pas tout à fait d’accord* or *Certes, mais…*' },
          { t: 'table', caption: 'Polite and direct', explain: ['head', 'col0'], head: ['Direct', 'Polite'], rows: [
            ['Quelle heure est-il ?', 'Auriez-vous l’heure, s’il vous plaît ?'],
            ['Aide-moi.', 'Pourriez-vous m’aider, s’il vous plaît ?'],
            ['Je veux un café.', 'Je voudrais un café, s’il vous plaît.'],
            ['Tu as tort.', 'Je ne suis pas tout à fait d’accord.'],
          ] },
        ],
        [
          { t: 'text', md: 'Answering *merci* varies. In France: **de rien**, **je vous en prie** (formal), **pas de quoi**. In Quebec: **bienvenue** or **avec plaisir**. In Belgium and Switzerland, **s’il vous plaît** can also be said when giving something, with the meaning *here you are*. French speakers often **argue openly** in debate as a sign of interest, without being impolite. A direct *Non, je ne suis pas d’accord* is common among friends but sounds harsh in a formal meeting.' },
          { t: 'tip', art: 'owl', md: 'When you do not know the setting, the **safest** pattern is *Bonjour* + *conditional* + *s’il vous plaît* + *merci*. In Quebec, add **bienvenue** after *merci*. If someone tutoie you, you may do the same; if you are unsure, wait for them to start.' },
          { t: 'ex', kind: 'sort', h: 'Direct or polite?', groups: ['direct', 'polite'], explain: ['groups'], items: [
            { s: 'Je veux un café.', g: 0, why: 'Direct and blunt.' },
            { s: 'Je voudrais un café, s’il vous plaît.', g: 1, why: 'The conditional and *s’il vous plaît*.' },
            { s: 'Donne-moi l’heure.', g: 0, why: 'An imperative.' },
            { s: 'Auriez-vous l’heure ?', g: 1, why: 'The conditional.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the most appropriate sentence.', items: [
            { q: 'You enter a bakery in Lyon. You say…', o: ['Bonjour, je voudrais une baguette, s’il vous plaît.', 'Une baguette.', 'Je veux une baguette maintenant.'], why: 'Greeting, conditional and *s’il vous plaît*.' },
            { q: 'A stranger thanks you in Montreal. A typical reply is…', o: ['Bienvenue.', 'Bonjour.', 'Au revoir.'], why: 'Quebec: *bienvenue* means you’re welcome.' },
            { q: 'In a meeting you disagree with your manager. The most polite sentence is…', o: ['Je ne suis pas tout à fait d’accord.', 'Tu as tort.', 'C’est faux.'], why: 'A softened disagreement.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Make the request polite.', items: [
            { q: 'Je veux un café.', cue: 'Je voudrais', a: ['Je voudrais un café, s’il vous plaît.', 'Je voudrais un café.'], why: 'The conditional is more polite.' },
            { q: 'Aide-moi.', cue: 'Pourriez-vous', a: ['Pourriez-vous m’aider ?', 'Pourriez-vous m’aider, s’il vous plaît ?'], why: 'The conditional with *vous*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Quatre amis, quatre français',
      about: 'Read a conversation between speakers of different varieties.',
      art: 'croissant',
      spreads: [
        [
          { t: 'reading', title: 'Quatre amis, quatre français', md: 'Camille (de Lyon), Jean-Luc (de Liège), Émilie (de Montréal) et Moussa (d’Abidjan) organisent un week-end ensemble.\n\nCAMILLE : Ce film hier soir, c’était ouf ! Mais mon voisin est relou, il a fait du bruit toute la nuit. On prend ma voiture pour partir ?\n\nJEAN-LUC : Bonne idée. Je mange chez moi et on se retrouve à midi. J’ai nonante euros pour l’essence. À tantôt !\n\nÉMILIE : Moi, je vais magasiner avant. Je rentre pour le souper ; ça fait chaud au cœur de vous revoir. On part la fin de semaine prochaine ?\n\nMOUSSA : Merci pour l’invitation ! On va enjailler. Pourriez-vous me dire à quelle heure on se retrouve, s’il vous plaît ?\n\nÉMILIE : Bienvenue, Moussa ! Dis-nous seulement si la fin de semaine est bonne pour toi.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Les quatre amis organisent un week-end ensemble.', a: 't', why: '« Organisent un week-end ensemble. »' },
            { q: 'Camille trouve son voisin sympathique.', a: 'f', why: '« Mon voisin est relou. »' },
            { q: 'Jean-Luc a nonante euros pour l’essence.', a: 't', why: '« J’ai nonante euros pour l’essence. »' },
            { q: 'Émilie va magasiner avant de partir.', a: 't', why: '« Je vais magasiner avant. »' },
            { q: 'Moussa pose sa question de manière polie.', a: 't', why: '« Pourriez-vous me dire… s’il vous plaît ? »' },
            { q: 'Le week-end a lieu à la montagne.', a: 'ng', why: 'The text does not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Which word shows that Jean-Luc is Belgian?', o: ['nonante', 'ouf', 'magasiner'], why: '*Nonante* is used in Belgium and Switzerland.' },
            { q: 'Which word shows that Émilie is from Quebec?', o: ['magasiner', 'relou', 'nonante'], why: '*Magasiner* is Quebec French.' },
            { q: 'Which words are verlan?', o: ['ouf and relou', 'souper and nonante', 'bienvenue and enjailler'], why: '*Ouf* (fou) and *relou* (lourd).' },
            { q: 'Which phrase is the polite request?', o: ['Pourriez-vous me dire…', 'Dis-nous seulement…', 'On prend ma voiture ?'], why: 'The conditional with *vous*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the word from the text with its meaning.', pairs: [
            ['ouf', 'incredible'],
            ['relou', 'annoying'],
            ['nonante', 'ninety'],
            ['souper', 'dinner (Quebec, Belgium)'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'J’ai ___ euros pour l’essence. (90, Belgium)', a: ['nonante'], why: 'The Belgian word.' },
            { q: 'Je vais ___ avant de partir. (to shop, Quebec)', a: ['magasiner'], why: 'The Quebec word.' },
            { q: 'Ce film hier soir, c’était ___ ! (incredible)', a: ['ouf'], why: 'Verlan of *fou*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which speaker said it?', groups: ['Camille or Jean-Luc', 'Émilie or Moussa'], explain: ['groups'], items: [
            { s: 'relou', g: 0, why: 'Camille, from France.' },
            { s: 'nonante', g: 0, why: 'Jean-Luc, from Belgium.' },
            { s: 'magasiner', g: 1, why: 'Émilie, from Quebec.' },
            { s: 'enjailler', g: 1, why: 'Moussa, from Côte d’Ivoire.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
      { q: 'In Belgium, “nonante” means…', o: ['90', '80', '19'], why: '*Nonante* = quatre-vingt-dix.' },
      { q: 'In Quebec, “magasiner” means…', o: ['to go shopping', 'to store', 'to make magazines'], why: '*Magasiner* = faire les courses.' },
      { q: '« Ce film est ouf ! » means…', o: ['it is incredible', 'it is old', 'it is long'], why: '*Ouf* = fou.' },
      { q: 'Which sentence is the most polite?', o: ['Auriez-vous l’heure, s’il vous plaît ?', 'Donne-moi l’heure.', 'Il est quelle heure ?'], why: 'The conditional and *s’il vous plaît*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word from France with the other variety.', pairs: [
      ['soixante-dix', 'septante'],
      ['week-end', 'fin de semaine'],
      ['e-mail', 'courriel'],
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'Mon voisin est vraiment ___ : il fait du bruit toute la nuit. (annoying)', a: ['relou'], why: '*Relou* = annoying.' },
      { q: 'Au Québec, on répond à merci par « ___ ».', a: ['bienvenue'], why: 'Quebec custom.' },
      { q: 'J’habite dans un petit ___. (apartment, abbreviation)', a: ['appart'], why: 'Abbreviation of *appartement*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite, using the words given.', items: [
      { q: 'Je vais magasiner pendant la fin de semaine.', cue: 'Je vais faire', a: ['Je vais faire les courses pendant le week-end.', 'Je vais faire des courses pendant le week-end.'], why: 'The variety of France.' },
      { q: 'Je veux un café.', cue: 'Je voudrais', a: ['Je voudrais un café, s’il vous plaît.', 'Je voudrais un café.'], why: 'The conditional.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mixture of varieties.', items: [
      { s: 'Je prends ma voiture cette [fin de semaine].', a: ['week-end'], why: 'France: *voiture* goes with *week-end*.' },
      { s: 'Il a [quatre-vingt-dix] ans, en Suisse.', a: ['nonante'], why: 'In Switzerland: *nonante*.' },
    ] },
  ],
};
