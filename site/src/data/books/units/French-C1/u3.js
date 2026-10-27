// French C1, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Register and style',
  goal: 'Recognise and choose between familiar, standard and formal French. Learn the three registers in vocabulary and syntax, verlan, shortened words and anglicisms, and the formulas of written politeness.',
  art: 'croissant',
  tags: { skills: ['vocabulary', 'grammar', 'reading', 'writing'], topics: ['register', 'slang', 'verlan', 'politeness', 'letters'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Familier, courant, soutenu',
      about: 'Tell the three levels of French apart in words and in sentences.',
      art: 'croissant',
      spreads: [
        [
          { t: 'text', md: 'French has three main registers. The **registre familier** is spoken, relaxed and used with friends: *la bagnole, le boulot, bouffer*. The **registre courant** is neutral and works almost everywhere: *la voiture, le travail, manger*. The **registre soutenu** is formal, written and careful: *l’automobile, l’emploi, se restaurer*. Syntax changes too: the familiar register often drops **ne**: *Je sais pas.* The neutral register keeps it: *Je ne sais pas.* The formal register may choose a more exact verb: *J’ignore.* In questions, the familiar form uses the intonation (*Tu viens ?*), the neutral form uses **est-ce que**, and the formal form uses **inversion**: *Viens-tu ?*' },
          { t: 'table', caption: 'Words in three registers', explain: ['head'], head: ['Familier', 'Courant', 'Soutenu'], rows: [
            ['la bagnole', 'la voiture', 'l’automobile'],
            ['le boulot', 'le travail', 'l’emploi'],
            ['bouffer', 'manger', 'se restaurer'],
            ['un bouquin', 'un livre', 'un ouvrage'],
            ['un gamin', 'un enfant', 'un bambin'],
            ['le fric', 'l’argent', 'les fonds'],
          ] },
          { t: 'tip', art: 'owl', md: 'Do not use a familiar word in a formal letter, and do not use a formal word when you talk to a friend: it will sound **stiff** or even funny. In Quebec, **char** is a familiar word for *voiture*, **magasiner** means *to shop*, and **chum** or **blonde** mean *boyfriend* and *girlfriend*. In Belgium and Switzerland, *septante* and *nonante* are used for 70 and 90.' },
        ],
        [
          { t: 'table', caption: 'Sentences in three registers', explain: ['head'], head: ['Familier', 'Courant', 'Soutenu'], rows: [
            ['Je sais pas.', 'Je ne sais pas.', 'J’ignore.'],
            ['Tu viens ?', 'Est-ce que tu viens ?', 'Viens-tu ?'],
            ['Il est où ?', 'Où est-il ?', 'Où se trouve-t-il ?'],
          ] },
          { t: 'examples', items: [
            { s: 'Elle a une nouvelle **bagnole**.', n: 'Familiar.' },
            { s: 'Elle a une nouvelle **voiture**.', n: 'Neutral.' },
            { s: 'Elle a acheté une nouvelle **automobile**.', n: 'Formal.' },
            { s: '**Je sais pas.**', n: 'Familiar: *ne* is dropped.' },
            { s: '**Viens-tu ?**', n: 'Formal: inversion.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Which register is it? Sort the words.', groups: ['familier', 'courant', 'soutenu'], explain: ['groups'], items: [
            { s: 'la bagnole', g: 0, why: 'A familiar word.' },
            { s: 'la voiture', g: 1, why: 'The neutral word.' },
            { s: 'l’automobile', g: 2, why: 'A formal word.' },
            { s: 'le boulot', g: 0, why: 'A familiar word.' },
            { s: 'le travail', g: 1, why: 'The neutral word.' },
            { s: 'l’emploi', g: 2, why: 'A more formal word.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the familiar word with the neutral one.', pairs: [
            ['la bagnole', 'la voiture'],
            ['le boulot', 'le travail'],
            ['bouffer', 'manger'],
            ['un bouquin', 'un livre'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'You write a formal letter. Which word do you choose for a book?', o: ['un ouvrage', 'un bouquin', 'un truc'], why: '*Un ouvrage* is formal.' },
            { q: 'You talk to a friend. Which sentence is natural?', o: ['Tu viens ?', 'Viens-tu ?', 'Est-ce que vous venez ?'], why: 'Friends: familiar intonation.' },
            { q: 'Which sentence is formal?', o: ['Où se trouve-t-il ?', 'Il est où ?', 'Où est-il ?'], why: 'Inversion with *se trouver* is formal.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Put the sentence in the neutral register.', items: [
            { q: 'Je sais pas.', cue: 'Je ne', a: ['Je ne sais pas.'], why: 'The neutral register keeps *ne*.' },
            { q: 'Tu viens ?', cue: 'Est-ce que', a: ['Est-ce que tu viens ?'], why: 'The neutral question uses *est-ce que*.' },
            { q: 'Il est où ?', cue: 'Où', a: ['Où est-il ?'], why: 'The neutral question uses inversion.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Monsieur le directeur, j’ai lu votre [bouquin].', a: ['ouvrage', 'livre'], why: 'A formal letter needs a neutral or formal word.' },
            { s: 'Je [sais pas] où il est. (neutral register)', a: ['ne sais pas'], why: 'The neutral register keeps *ne*.' },
            { s: 'Salut Paul, [venez] demain ! (to a friend)', a: ['viens'], why: 'To a friend, use *tu*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Je ne sais pas où il est.', why: '*Ne … pas* around the verb.' },
            { a: 'Est-ce que tu viens demain ?', why: '*Est-ce que* + subject + verb.' },
            { a: 'Où se trouve-t-il maintenant ?', why: 'Inversion with *-t-*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Verlan, mots abrégés, anglicismes',
      about: 'Understand verlan, shortened words and anglicisms, and know the French alternatives.',
      art: 'pizza',
      spreads: [
        [
          { t: 'text', md: 'Spoken French plays with words. In **verlan**, the syllables of a word are reversed: *femme → meuf*, *fête → teuf*, *bizarre → zarbi*, *branché → chébran*. Many words are **shortened**: *un apéritif → un apéro*, *un adolescent → un ado*, *un restaurant → un resto*, *un ordinateur → un ordi*, *sympathique → sympa*. Both are for **informal speech**. Some verlan words, such as *meuf* or *beur*, are now very common, but you should know that they can sound **too familiar** in a formal setting. Shortened words such as **sympa** and **resto** are accepted in almost every spoken context.' },
          { t: 'table', caption: 'Verlan and shortened words', explain: ['head'], head: ['Full word', 'Verlan or short form'], rows: [
            ['une femme', 'une meuf'],
            ['une fête', 'une teuf'],
            ['bizarre', 'zarbi'],
            ['un apéritif', 'un apéro'],
            ['un restaurant', 'un resto'],
            ['un ordinateur', 'un ordi'],
            ['sympathique', 'sympa'],
          ] },
          { t: 'tip', art: 'owl', md: 'You do not need to use verlan to speak good French. But you should **understand** it in songs, films and conversations. Use **sympa, resto, ordi** and **apéro** freely in speech, and write the full forms in a formal text. Verlan changes quickly: new words appear and old ones fade, so ask a French speaker if you are not sure.' },
        ],
        [
          { t: 'text', md: 'French also takes many English words, such as **le week-end, le parking, le shopping, le live**. The **Académie française** and the official terminology commissions recommend French words: **le courriel** (for *e-mail*), **le mot-dièse** (for *hashtag*), **une infox** (for *fake news*), **en direct** (for *live*). In Quebec, the French term is often used more than in France: **un courriel**, **la fin de semaine**, **magasiner**. Many English words stay in use, so the choice depends on the **context** and on how formal you want to be.' },
          { t: 'table', caption: 'Anglicism and French word', explain: ['head'], head: ['Anglicism', 'French word'], rows: [
            ['un e-mail', 'un courriel'],
            ['un hashtag', 'un mot-dièse'],
            ['les fake news', 'une infox'],
            ['live', 'en direct'],
            ['le shopping', 'les achats'],
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the full word with its short or verlan form.', pairs: [
            ['une femme', 'une meuf'],
            ['une fête', 'une teuf'],
            ['un restaurant', 'un resto'],
            ['un ordinateur', 'un ordi'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'En verlan, « fête » devient « ___ ».', a: ['teuf'], why: '*Fête* → *teuf*.' },
            { q: 'Un ___ est un restaurant, en abrégé.', a: ['resto'], why: '*Restaurant* → *resto*.' },
            { q: 'Un ___ est un ordinateur, en abrégé.', a: ['ordi'], why: '*Ordinateur* → *ordi*.' },
            { q: 'Pour *e-mail*, l’Académie recommande « un ___ ».', a: ['courriel'], why: '*Courriel* replaces *e-mail*.' },
            { q: 'Pour *hashtag*, on recommande « un ___-dièse ».', a: ['mot'], why: '*Mot-dièse* replaces *hashtag*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Which word is a shortened form of « sympathique » ?', o: ['sympa', 'sympathe', 'symp'], why: '*Sympa* is the usual short form.' },
            { q: 'Which word is the French recommendation for *fake news* ?', o: ['une infox', 'un faux-news', 'une nouvelle faux'], why: '*Une infox* is the recommended term.' },
            { q: 'Which word is a verlan form of « bizarre » ?', o: ['zarbi', 'bizar', 'barzi'], why: '*Bizarre* → *zarbi*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Anglicism or French recommendation? Sort the words.', groups: ['anglicism', 'French recommendation'], explain: ['groups'], items: [
            { s: 'un e-mail', g: 0, why: 'An English word.' },
            { s: 'un courriel', g: 1, why: 'The French recommendation.' },
            { s: 'un hashtag', g: 0, why: 'An English word.' },
            { s: 'un mot-dièse', g: 1, why: 'The French recommendation.' },
            { s: 'les fake news', g: 0, why: 'An English expression.' },
            { s: 'une infox', g: 1, why: 'The French recommendation.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Elle m’a envoyé un [e-mail], mais je préfère le mot français. (use the French word)', a: ['courriel'], why: '*Courriel* is the French recommendation.' },
            { s: 'En verlan, femme devient [feum].', a: ['meuf'], why: '*Femme* → *meuf*.' },
            { s: 'On se retrouve à l’[apéritif] ! (shortened)', a: ['apéro'], why: '*Apéritif* → *apéro*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'On se retrouve à l’apéro demain soir.', why: '*Apéro* is a shortened word.' },
            { a: 'Elle m’a envoyé un courriel ce matin.', why: '*Courriel* = e-mail.' },
            { a: 'C’est un resto très sympa.', why: 'Two shortened words.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'La politesse à l’écrit',
      about: 'Choose the right opening and closing for a letter or an e-mail.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'In a **formal letter**, you open with **Madame, Monsieur,** (if you do not know the name) or **Madame la Directrice,**, and you close with a long polite formula: **Veuillez agréer, Madame, Monsieur, l’expression de mes salutations distinguées.** In a **neutral e-mail**, you can open with **Bonjour Madame Dupont,** and close with **Cordialement** or **Bien cordialement**. To a **friend**, you open with **Salut Paul,** or **Cher Paul,** and close with **À bientôt, Bises, Je t’embrasse**. Between colleagues, French people often use **tu**, but with a boss, a customer or a stranger, use **vous**.' },
          { t: 'table', caption: 'Opening and closing', explain: ['head', 'col1'], head: ['Situation', 'Opening', 'Closing'], rows: [
            ['formal letter', 'Madame, Monsieur,', 'Veuillez agréer, Madame, Monsieur, l’expression de mes salutations distinguées.'],
            ['neutral e-mail', 'Bonjour Madame Dupont,', 'Cordialement'],
            ['colleague', 'Bonjour Paul,', 'Bien à toi / Bonne journée'],
            ['friend', 'Salut Paul, / Cher Paul,', 'À bientôt, / Bises'],
          ] },
          { t: 'tip', art: 'owl', md: 'Do not translate *Dear* with **cher** in an e-mail to a stranger: use **Bonjour** or **Madame, Monsieur**. In Quebec, **Bonjour** and **Salutations distinguées** or **Bien à vous** are common in formal and neutral writing. The long formula **Veuillez agréer … salutations distinguées** is only for formal letters. Say **On peut se tutoyer ?** to offer **tu**; the older or higher-ranking person usually offers it.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Madame, Monsieur,**', n: 'Opening a formal letter.' },
            { s: '**Veuillez agréer**, Madame, Monsieur, **l’expression de mes salutations distinguées**.', n: 'Closing a formal letter.' },
            { s: '**Bonjour Madame Dupont,** … **Cordialement**', n: 'A neutral e-mail.' },
            { s: '**Salut Paul,** … **Bises**', n: 'A message to a friend.' },
            { s: 'On peut **se tutoyer** ?', n: 'Offering *tu*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which situation? Sort the closings.', groups: ['formal letter', 'neutral e-mail', 'friend'], explain: ['groups'], items: [
            { s: 'Veuillez agréer, Madame, l’expression de mes salutations distinguées.', g: 0, why: 'The long formal closing.' },
            { s: 'Je vous prie d’agréer mes salutations distinguées.', g: 0, why: 'A formal closing.' },
            { s: 'Cordialement', g: 1, why: 'The usual neutral closing.' },
            { s: 'Bien cordialement', g: 1, why: 'A neutral closing.' },
            { s: 'Bises', g: 2, why: 'A closing for friends.' },
            { s: 'À bientôt', g: 2, why: 'A closing for friends.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Veuillez ___, Madame, l’expression de mes salutations distinguées.', a: ['agréer'], why: '*Veuillez agréer*.' },
            { q: 'Madame, ___,', a: ['Monsieur'], why: 'The opening: *Madame, Monsieur,*.' },
            { q: '___ cordialement', a: ['Bien'], why: '*Bien cordialement*.' },
            { q: 'On peut se ___ ?', a: ['tutoyer'], why: '*Se tutoyer* = to say *tu* to each other.' },
            { q: 'À bientôt, ___ !', a: ['bises', 'Bises'], why: 'A closing for friends.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right closing.', items: [
            { q: 'You write to a director you do not know.', o: ['Veuillez agréer, Madame la Directrice, l’expression de mes salutations distinguées.', 'Bises.', 'À plus.'], why: 'A formal letter.' },
            { q: 'You write a neutral e-mail to a colleague.', o: ['Cordialement', 'Bises', 'Veuillez agréer … salutations distinguées'], why: 'A neutral e-mail.' },
            { q: 'You write a message to a close friend.', o: ['Je t’embrasse', 'Cordialement', 'Salutations distinguées'], why: 'A message to a friend.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the opening with the situation.', pairs: [
            ['Madame, Monsieur,', 'a formal letter'],
            ['Bonjour Madame Dupont,', 'a neutral e-mail'],
            ['Salut Paul,', 'a message to a friend'],
            ['Cher Paul,', 'a friendly letter'],
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Veuillez agréer, Madame, l’expression de mes salutations distinguées.', why: 'The formal closing.' },
            { a: 'Bonjour Madame Dupont, je vous écris au sujet de ma commande.', why: 'Opening, then the reason for writing.' },
            { a: 'On peut se tutoyer, si vous voulez.', why: 'An offer of *tu*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Un même message, trois registres',
      about: 'Read the same message in three registers.',
      art: 'croissant',
      spreads: [
        [
          { t: 'reading', title: 'Trois versions d’un message', md: '**Message familier.** Salut Paul ! On se voit demain pour le boulot ? J’ai un truc à te montrer. Dis-moi si ça te va. Bises.\n\n**Message courant.** Bonjour Paul, on se voit demain pour travailler ? J’ai quelque chose à te montrer. Dis-moi si cela te convient. À demain.\n\n**Message soutenu.** Cher Monsieur, je me permets de vous proposer un entretien demain afin d’examiner un dossier que je souhaiterais vous soumettre. Je vous prie de bien vouloir me faire savoir si cette date vous convient. Veuillez agréer, Monsieur, l’expression de mes salutations distinguées.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Le premier message est familier.', a: 't', why: '*Salut, boulot, truc, bises.*' },
            { q: 'Le deuxième message utilise « vous ».', a: 'f', why: 'It uses *tu*: *te montrer*.' },
            { q: 'Le troisième message est le plus formel.', a: 't', why: '*Je me permets de vous proposer … salutations distinguées.*' },
            { q: 'Dans le message familier, on dit « boulot » pour « travail ».', a: 't', why: '*Pour le boulot.*' },
            { q: 'Les trois messages proposent un rendez-vous demain.', a: 't', why: 'All three say *demain*.' },
            { q: 'Paul est le chef de l’auteur.', a: 'ng', why: 'The texts do not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Quel mot familier désigne le travail ?', o: ['boulot', 'emploi', 'labeur'], why: '*Pour le boulot.*' },
            { q: 'Quelle formule termine le message soutenu ?', o: ['Veuillez agréer, Monsieur, l’expression de mes salutations distinguées.', 'Bises.', 'À demain.'], why: 'The formal closing.' },
            { q: 'Quel message contient « Je me permets de vous proposer » ?', o: ['Le troisième.', 'Le premier.', 'Le deuxième.'], why: 'The formal message.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the familiar words.', items: [
            { s: '[Salut] Paul ! On se voit demain pour le [boulot] ?', why: '*Salut* and *boulot* are familiar.' },
            { s: 'J’ai un [truc] à te montrer. Dis-moi si [ça] te va. [Bises].', why: '*Truc*, *ça te va* and *bises* are familiar.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Dans le message familier, « truc » remplace « quelque ___ ».', a: ['chose'], why: '*Truc* = *quelque chose*.' },
            { q: 'Le message soutenu se termine par : Veuillez ___, Monsieur, l’expression de mes salutations distinguées.', a: ['agréer'], why: '*Veuillez agréer*.' },
            { q: 'Pour dire « travail » en langue familière, on dit « ___ ».', a: ['boulot'], why: '*Boulot* is familiar.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Dis-moi si cela te convient.', why: 'The neutral version.' },
            { a: 'Je me permets de vous proposer un entretien demain.', why: 'The formal version.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Which word is familiar for « voiture » ?', o: ['bagnole', 'automobile', 'véhicule'], why: '*Bagnole* is familiar.' },
      { q: 'Which sentence is formal?', o: ['Viens-tu ?', 'Tu viens ?', 'Est-ce que tu viens ?'], why: 'Inversion is formal.' },
      { q: 'Which closing is formal?', o: ['Veuillez agréer, Madame, l’expression de mes salutations distinguées.', 'Bisous.', 'À plus.'], why: 'The formal closing.' },
      { q: '« Courriel » is the recommended word for …', o: ['e-mail', 'hashtag', 'podcast'], why: '*Courriel* replaces *e-mail*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Veuillez ___, Madame, l’expression de mes salutations distinguées.', a: ['agréer'], why: '*Veuillez agréer*.' },
      { q: 'En verlan, « fête » devient « ___ ».', a: ['teuf'], why: '*Fête* → *teuf*.' },
      { q: 'Un ___ est un restaurant, en abrégé.', a: ['resto'], why: '*Restaurant* → *resto*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the familiar word with the neutral one.', pairs: [
      ['la bagnole', 'la voiture'],
      ['le boulot', 'le travail'],
      ['un bouquin', 'un livre'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it with the words in brackets.', items: [
      { q: 'Je sais pas.', cue: 'Je ne', a: ['Je ne sais pas.'], why: 'The neutral register keeps *ne*.' },
      { q: 'Tu viens ?', cue: 'Viens', a: ['Viens-tu ?'], why: 'The formal question uses inversion.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Veuillez [agrée], Madame, l’expression de mes salutations distinguées.', a: ['agréer'], why: '*Veuillez agréer*.' },
      { s: 'En verlan, femme devient [feum].', a: ['meuf'], why: '*Femme* → *meuf*.' },
    ] },
  ],
};
