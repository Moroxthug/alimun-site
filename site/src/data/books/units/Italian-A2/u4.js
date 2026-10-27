// Italian A2, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Food, shopping and recipes',
  goal: 'Shop for food, follow a simple recipe and say how much you need. Learn quantities, the pronoun ne and the imperative in recipes.',
  art: 'mug',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['quantities', 'ne', 'bisogna', 'ci vuole', 'recipes', 'imperative', 'shops', 'kitchen'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Un chilo di mele',
      about: 'Say how much you need with quantity words, bisogna and ci vuole.',
      art: 'pizza',
      spreads: [
        [
          { t: 'text', md: 'After a word of quantity that is a noun or a measure, Italian uses **di** with no article: *un chilo di mele, una bottiglia di latte, un po’ di formaggio.* Words like **molto**, **poco**, **troppo**, **abbastanza** and **tanto** are adjectives and **agree** with the noun: *molto pane, molta acqua, molti amici, molte mele.* In a shop, people say **un etto di** (100 grams) and **mezzo chilo** (half a kilo).' },
          { t: 'table', caption: 'How much?', explain: ['head', 'col1'], head: ['Italian', 'English'], rows: [
            ['un po’ di', 'a little'],
            ['molto, molta, molti, molte', 'a lot of'],
            ['abbastanza', 'enough'],
            ['troppo, troppa, troppi, troppe', 'too much, too many'],
            ['un chilo di', 'a kilo of'],
            ['un etto di', '100 grams of'],
            ['un litro di', 'a litre of'],
            ['una bottiglia di', 'a bottle of'],
            ['un pacco di', 'a packet of'],
            ['una fetta di', 'a slice of'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Italian shops, **un etto** is a very common measure for ham and cheese. Ask the price per kilo with **Quanto costa al chilo?** and say **basta così** (that is enough) when you have finished. After **abbastanza** and **troppo**, you can also use **di**: *abbastanza di tutto.*' },
        ],
        [
          { t: 'text', md: 'To say what is necessary, use **bisogna** + infinitive, which is the same for everybody: *Bisogna comprare il pane.* To say what is needed in a recipe, use **ci vuole** (one thing) and **ci vogliono** (several): *Ci vuole un uovo. Ci vogliono due uova.* To say that someone needs something, use **avere bisogno di**: *Ho bisogno di due chili di mele.*' },
          { t: 'examples', items: [
            { s: 'Vorrei **un chilo di** pomodori, per favore.', n: 'A quantity: *di*, no article.' },
            { s: 'C’è **molta** gente al mercato.', n: '*gente* is feminine singular: *molta*.' },
            { s: '**Ci vogliono** duecento grammi di zucchero.', n: 'A measure in a recipe.' },
            { s: '**Quante** bottiglie di latte vuole?', n: '*quante* + plural.' },
            { s: 'Non ci sono **abbastanza** uova.', n: 'Not enough.' },
          ] },
          { t: 'dialogue', title: 'Al mercato', lines: [
            { who: 'Giulia', s: 'Buongiorno! Vorrei un chilo di pomodori, per favore.' },
            { who: 'Fruttivendolo', s: 'Ecco. E con questo?' },
            { who: 'Giulia', s: 'Una bottiglia d’olio e due etti di formaggio.' },
            { who: 'Fruttivendolo', s: 'Sono undici euro e cinquanta.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Vorrei un chilo ___ mele.', o: ['di', 'delle', 'a'], why: 'After a quantity: *di*, no article.' },
            { q: 'C’è ___ acqua nel bicchiere.', o: ['molta', 'molto', 'molti'], why: '*acqua* is feminine: *molta*.' },
            { q: 'Non ci sono ___ uova.', o: ['abbastanza', 'molto', 'tante'], why: '*abbastanza* does not change.' },
            { q: 'Ha mangiato ___ dolci.', o: ['troppi', 'troppo', 'troppe'], why: '*dolci* is masculine plural: *troppi*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Find the quantity.', pairs: [
            ['del latte', 'una bottiglia di latte'],
            ['della pasta', 'un pacco di pasta'],
            ['del prosciutto', 'una fetta di prosciutto'],
            ['delle mele', 'un chilo di mele'],
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Vorrei un pacco di pasta.', why: '*un pacco di* + noun, no article.' },
            { a: 'Ci vogliono duecento grammi di zucchero.', why: '*ci vogliono* + measure.' },
            { a: 'Quante bottiglie vuole?', why: '*quante* + plural noun.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'C’è troppa ___ qui. (people)', a: ['gente'], why: '*troppa gente*' },
            { q: 'Abbiamo bisogno ___ pane.', a: ['di'], why: '*avere bisogno di*' },
            { q: '___ comprare del latte.', a: ['Bisogna'], why: '*bisogna* + infinitive.' },
            { q: 'Ci ___ un uovo per la torta.', a: ['vuole'], why: 'One thing: *ci vuole*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Ne voglio due',
      about: 'Replace di + a noun with the pronoun ne.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'The small word **ne** replaces **di** + a noun, or a noun with a quantity. It means *some*, *any* or *of it / of them*, and it goes **before the verb**: *Vuoi del pane? – Sì, ne voglio. Hai dei fratelli? – Sì, ne ho due.* When there is a number or a quantity, **keep it** after the verb: *Ne voglio due. Ne prendo un chilo.* In the sentence **ci sono**, use **ce ne sono**: *Ci sono mele? – Sì, ce ne sono tre.*' },
          { t: 'table', caption: 'Using ne', explain: ['head', 'col2'], head: ['Question', 'Answer', 'Meaning'], rows: [
            ['Vuoi del formaggio?', 'Sì, ne voglio.', 'Yes, I want some.'],
            ['Hai dei fratelli?', 'Sì, ne ho due.', 'Yes, I have two.'],
            ['C’è del latte?', 'No, non ce n’è.', 'No, there is none.'],
            ['Prendi dello zucchero?', 'No, non ne prendo.', 'No, I do not take any.'],
            ['Compra delle mele?', 'Sì, ne compra un chilo.', 'Yes, she buys a kilo.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In a negative answer, **non** comes before **ne**: *Non ne voglio.* With an infinitive, **ne** can go before the first verb or be attached to the infinitive: *Ne voglio comprare* or *Voglio comprarne.* **ne** always replaces something with **di**, so a thing you like uses **lo / la**: *Ti piace il caffè? – Sì, mi piace.*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Vuoi del caffè? – Sì, **ne** voglio un po’.', n: '*del caffè* → *ne*.' },
            { s: 'Hai dei figli? – Sì, **ne ho** due.', n: 'Keep the number.' },
            { s: 'C’è del pane? – No, **non ce n’è**.', n: 'Negative: *non ce n’è*.' },
            { s: 'Vuole delle uova? – **Ne prendo** sei.', n: 'A quantity after the verb.' },
            { s: 'Voglio **comprarne** un chilo.', n: '*ne* joined to the infinitive.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Answer with ne.', items: [
            { q: 'Vuoi del tè? Sì, ...', cue: 'Sì, ne', a: ['Sì, ne voglio.'], why: '*del tè* → *ne*.' },
            { q: 'Hai dei fratelli? Sì, due.', cue: 'Sì, ne', a: ['Sì, ne ho due.'], why: 'Keep the number after the verb.' },
            { q: 'C’è del pane? No.', cue: 'No, non', a: ['No, non ce n’è.'], why: 'Negative: *non ce n’è*.' },
            { q: 'Prendi dello zucchero? No.', cue: 'No, non', a: ['No, non ne prendo.'], why: '*non ne prendo*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: '— Vuoi del pane? — Sì, ___.', o: ['ne voglio', 'lo voglio', 'voglio ne'], why: '*del pane* → *ne*, before the verb.' },
            { q: '— Ci sono mele? — Sì, ___ tre.', o: ['ce ne sono', 'ci sono ne', 'ne ci sono'], why: '*ce ne sono tre*' },
            { q: '— Hai del latte? — No, ___.', o: ['non ne ho', 'non ho ne', 'ne non ho'], why: '*non* before *ne*.' },
            { q: '— Ti piace il caffè? — Sì, ___.', o: ['mi piace', 'ne piace', 'mi piace ne'], why: 'With *piacere*, you do not use *ne*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Ne prendo due chili.', why: '*ne* before the verb, the quantity after.' },
            { a: 'Non ce n’è.', why: '*non ce n’è*' },
            { a: 'Voglio comprarne un chilo.', why: '*ne* joined to the infinitive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Vuoi del formaggio? Sì, [lo] voglio.', a: ['ne'], why: 'For *some* of something: *ne voglio*.' },
            { s: 'Vuoi dei dolci? No, non [li] voglio.', a: ['ne'], why: 'For a part or a quantity: *non ne voglio*.' },
            { s: 'Lei [ha ne] due fratelli.', a: ['ne ha'], why: 'The pronoun comes before the verb: *ne ha due*.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: '«Ne voglio» vuol dire «I want some».', a: 't', why: '*ne* replaces *del pane* or a similar noun.' },
            { q: 'Si dice «Ne ho due fratelli».', a: 'f', why: 'Do not repeat the noun: *Ne ho due* or *Ho due fratelli*.' },
            { q: '«Non ne voglio» vuol dire «I do not want any».', a: 't', why: 'Negative with *ne*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Taglia le cipolle',
      about: 'Follow a recipe with the imperative.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'Recipes use the **imperative**. With a friend or in a family kitchen, use the **tu** form: for **-are** verbs it ends in **-a** (*taglia, mescola*), and for **-ere** and **-ire** verbs it ends in **-i** (*aggiungi, cuoci*): *Taglia le cipolle. Aggiungi il sale. Cuoci per dieci minuti.* With a group or in a book, use the **voi** form (same as the present): *Tagliate le cipolle. Aggiungete il sale.* In a negative sentence with **tu**, use **non** + the infinitive: **Non mettere troppo sale.**' },
          { t: 'table', caption: 'Verbs for cooking', explain: ['head', 'col3'], head: ['tu', 'voi', 'Infinitive', 'Meaning'], rows: [
            ['taglia', 'tagliate', 'tagliare', 'cut'],
            ['aggiungi', 'aggiungete', 'aggiungere', 'add'],
            ['mescola', 'mescolate', 'mescolare', 'mix'],
            ['versa', 'versate', 'versare', 'pour'],
            ['cuoci', 'cuocete', 'cuocere', 'cook'],
            ['lascia', 'lasciate', 'lasciare', 'leave'],
            ['metti', 'mettete', 'mettere', 'put'],
            ['prendi', 'prendete', 'prendere', 'take'],
          ] },
          { t: 'tip', art: 'owl', md: 'A few verbs have short irregular **tu** forms: **fare → fai**, **andare → vai**, **dire → di’**, **dare → dai**. For example, *Fai attenzione!* (Be careful!) At A2, you only need to recognise them. The **tu** form of an **-are** verb ends in **-a**, which looks like *lui* in the present.' },
        ],
        [
          { t: 'table', caption: 'In the kitchen', explain: ['head', 'col1'], head: ['Italian', 'English'], rows: [
            ['il forno', 'oven'],
            ['la padella', 'frying pan'],
            ['la pentola', 'pot'],
            ['il coltello', 'knife'],
            ['la cipolla', 'onion'],
            ['il pomodoro', 'tomato'],
            ['il sale, il pepe', 'salt, pepper'],
            ['l’olio (m.)', 'oil'],
            ['cinque minuti', 'five minutes'],
          ] },
          { t: 'dialogue', title: 'In cucina', lines: [
            { who: 'Marco', s: 'Che cosa prepariamo per cena?' },
            { who: 'Giulia', s: 'Una frittata. Prendi quattro uova e rompile in una ciotola.' },
            { who: 'Marco', s: 'D’accordo. Aggiungo il sale?' },
            { who: 'Giulia', s: 'Sì, un po’. Poi versa tutto nella padella e cuoci per cinque minuti.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the imperative with tu.', items: [
            { q: '___ le cipolle. (tagliare)', a: ['Taglia'], why: 'Verbs in *-are*: *tu* form ends in *-a*.' },
            { q: '___ il sale. (aggiungere)', a: ['Aggiungi'], why: 'Verbs in *-ere*: ends in *-i*.' },
            { q: '___ quattro uova. (prendere)', a: ['Prendi'], why: '*Prendi!* with *-i*.' },
            { q: '___ l’olio nella padella. (versare)', a: ['Versa'], why: '*Versa!*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the imperative with voi.', items: [
            { q: '___ i pomodori. (tagliare)', a: ['Tagliate'], why: '*Tagliate!*' },
            { q: '___ per dieci minuti. (cuocere)', a: ['Cuocete'], why: '*Cuocete!*' },
            { q: 'Non ___ troppo sale. (mettere, tu)', a: ['mettere'], why: 'Negative with *tu*: *non* + infinitive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Taglia le cipolle a pezzetti.', why: 'Verb first, then the object.' },
            { a: 'Aggiungi un po’ di sale.', why: '*Aggiungi* + quantity + *di*.' },
            { a: 'Cuoci per cinque minuti.', why: '*Cuoci* + duration.' },
          ] },
          { t: 'ex', kind: 'match', h: 'What do you use?', pairs: [
            ['per tagliare', 'un coltello'],
            ['per cuocere una frittata', 'una padella'],
            ['per fare la pasta', 'una pentola'],
            ['per fare una torta', 'il forno'],
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Una ricetta e un volantino',
      about: 'Read a recipe and a shop leaflet.',
      art: 'pizza',
      spreads: [
        [
          { t: 'reading', title: 'Insalata di pasta', md: '**Per quattro persone**\n250 grammi di pasta, due pomodori, un po’ di formaggio, olio d’oliva, sale e pepe.\n\nCuoci la pasta in acqua per dieci minuti. Nel frattempo, taglia i pomodori a pezzetti. Scola la pasta e lasciala raffreddare. Mescola la pasta, i pomodori e il formaggio. Aggiungi un po’ d’olio, sale e pepe. Servi fredda.' },
          { t: 'reading', title: 'Il volantino del mercato', md: '**Questa settimana al mercato**\nMele: 2 € al chilo\nPomodori: 3 € al chilo\nFormaggio di capra: 8 € ogni due etti\nPane: 1 € al pezzo\n\nPrezzi validi dal lunedì al sabato.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'La ricetta è per quattro persone.', a: 't', why: '*Per quattro persone*' },
            { q: 'Bisogna cuocere la pasta per venti minuti.', a: 'f', why: 'For ten minutes.' },
            { q: 'Si serve l’insalata calda.', a: 'f', why: '*Servi fredda.*' },
            { q: 'Nell’insalata c’è la carne.', a: 'ng', why: 'No meat is mentioned in the recipe.' },
            { q: 'Le mele costano due euro al chilo.', a: 't', why: '*Mele: 2 € al chilo*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Che cosa si fa dopo aver cotto la pasta?', o: ['La si scola e la si lascia raffreddare.', 'La si mette in forno.', 'La si mangia subito.'], why: '*Scola la pasta e lasciala raffreddare.*' },
            { q: 'Quanto costa il formaggio di capra?', o: ['8 € ogni due etti', '8 € al chilo', '2 € ogni due etti'], why: '*Formaggio di capra: 8 € ogni due etti*' },
            { q: 'Per quanti giorni sono validi i prezzi?', o: ['Dal lunedì al sabato.', 'Dal lunedì alla domenica.', 'Solo il sabato.'], why: '*Prezzi validi dal lunedì al sabato.*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the texts.', items: [
            { q: 'Per l’insalata, servono due ___.', a: ['pomodori'], why: '*due pomodori*' },
            { q: 'Serve un po’ d’___ d’oliva.', a: ['olio'], why: '*olio d’oliva*' },
            { q: 'Si mescola la pasta, i pomodori e il ___.', a: ['formaggio'], why: '*Mescola la pasta, i pomodori e il formaggio.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Vorrei un chilo ___ mele.', o: ['di', 'delle', 'a'], why: 'After a quantity: *di*.' },
      { q: '— Vuoi del pane? — Sì, ___.', o: ['ne voglio', 'lo voglio', 'voglio ne'], why: '*ne* before the verb.' },
      { q: '___ le cipolle. (tu)', o: ['Taglia', 'Tagli', 'Tagliate'], why: '*tu* form of an *-are* verb: *taglia*.' },
      { q: '— C’è del latte? — No, ___.', o: ['non ce n’è', 'non c’è ne', 'non ne c’è'], why: '*non ce n’è*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'C’è troppa ___ qui.', a: ['gente'], why: '*troppa gente*' },
      { q: 'Abbiamo bisogno ___ pane.', a: ['di'], why: '*avere bisogno di*' },
      { q: '___ cuocere per dieci minuti. (voi, cuocere)', a: ['Cuocete'], why: '*Cuocete!*' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the quantity.', pairs: [
      ['del latte', 'una bottiglia di latte'],
      ['della pasta', 'un pacco di pasta'],
      ['del prosciutto', 'una fetta di prosciutto'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Answer with ne.', items: [
      { q: 'Hai dei fratelli? Sì, tre.', cue: 'Sì, ne', a: ['Sì, ne ho tre.'], why: 'Keep the number after the verb.' },
      { q: 'Vuoi dello zucchero? No.', cue: 'No, non', a: ['No, non ne voglio.'], why: '*non ne voglio*' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Voglio comprarne un chilo.', why: '*ne* joined to the infinitive.' },
      { a: 'Non mettere troppo sale.', why: 'Negative with *tu*: *non* + infinitive.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'C’è [molto] acqua.', a: ['molta'], why: '*acqua* is feminine: *molta acqua*.' },
    ] },
  ],
};
