// Italian C1, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Words that build words',
  goal: 'Understand and create words with prefixes, suffixes and altered forms. Learn diminutives, augmentatives and pejoratives, the prefixes and suffixes that build new words, parasynthetic verbs, compounds and loanwords.',
  art: 'snail',
  tags: { skills: ['vocabulary', 'grammar', 'reading', 'writing'], topics: ['word formation', 'altered nouns', 'prefixes', 'suffixes', 'compounds', 'loanwords'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Gli alterati',
      about: 'Use diminutive, augmentative and pejorative endings.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Italian changes the meaning of a noun or an adjective with an **ending**. A **diminutive** makes it smaller or nicer: **-ino, -etto, -ello**: *una casetta, un ragazzino*. An **augmentative** makes it bigger: **-one**: *un librone, un ragazzone*. A **pejorative** makes it ugly or bad: **-accio**: *il tempaccio, la parolaccia*. Some altered words have a **new meaning** and are real words of their own: *il panino* (a sandwich, not a small bread), *il finestrino* (the window of a car), *la parolaccia* (a swear word).' },
          { t: 'table', caption: 'Altered words', explain: ['head', 'col1'], quiz: true, head: ['Base', 'Altered', 'Meaning'], rows: [
            ['casa', 'casetta', 'a small, nice house'],
            ['libro', 'libretto / librone', 'a booklet / a thick book'],
            ['tempo', 'tempaccio', 'awful weather'],
            ['parola', 'parolaccia', 'a swear word'],
            ['pane', 'panino', 'a roll, a sandwich'],
            ['finestra', 'finestrino', 'the window of a car or a train'],
            ['porta', 'portone', 'a big door, an entrance door'],
          ] },
          { t: 'tip', art: 'owl', md: 'Do not add an ending to every word: many combinations **do not exist**, and some change the gender. The meaning also depends on the **speaker’s feeling**: *una casetta* can be charming or poor. Learn the common ones as words. The **plural** follows the new ending: *casette, panini, tempacci*. Altered forms are used a lot in **speech** and also in **Swiss Italian**.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Hanno una **casetta** in montagna.', n: 'A small, nice house.' },
            { s: 'Che **tempaccio** oggi!', n: 'Awful weather.' },
            { s: 'Ha detto una **parolaccia**.', n: 'A swear word.' },
            { s: 'Mangio un **panino** al prosciutto.', n: 'A sandwich.' },
            { s: 'Ho letto un **librone** di mille pagine.', n: 'A thick book.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Small, big or bad? Sort the words.', groups: ['diminutive', 'augmentative', 'pejorative'], explain: ['groups'], items: [
            { s: 'casetta', g: 0, why: '*-etta*: small.' },
            { s: 'ragazzino', g: 0, why: '*-ino*: small.' },
            { s: 'librone', g: 1, why: '*-one*: big.' },
            { s: 'ragazzone', g: 1, why: '*-one*: big.' },
            { s: 'tempaccio', g: 2, why: '*-accio*: bad.' },
            { s: 'libraccio', g: 2, why: '*-accio*: a bad book.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'Write the altered word.', items: [
            { q: 'Hanno una ___ in montagna. (small, nice)', base: 'casa', a: ['casetta'], why: '*-etta* makes it small.' },
            { q: 'Che ___ oggi! (awful)', base: 'tempo', a: ['tempaccio'], why: '*-accio* makes it bad.' },
            { q: 'Ha detto una ___. (a swear word)', base: 'parola', a: ['parolaccia'], why: '*-accia* makes it bad.' },
            { q: 'Mangio un ___ al prosciutto.', base: 'pane', a: ['panino'], why: '*Panino* is a sandwich.' },
            { q: 'Ho letto un ___ di mille pagine. (thick)', base: 'libro', a: ['librone'], why: '*-one* makes it big.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the altered word with its meaning.', pairs: [
            ['il panino', 'a sandwich'],
            ['il finestrino', 'the window of a car'],
            ['la parolaccia', 'a swear word'],
            ['il portone', 'a big door'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Una piccola casa carina è una ___.', o: ['casetta', 'casaccia', 'casone'], why: '*-etta* = small and nice.' },
            { q: 'Un brutto tempo è un ___.', o: ['tempaccio', 'tempino', 'tempone'], why: '*-accio* = bad.' },
            { q: 'Guardo fuori dal ___ del treno.', o: ['finestrino', 'finestrone', 'finestraccio'], why: '*Finestrino* = the window of a train.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Say it with one altered word.', items: [
            { q: 'Una casa piccola e carina.', cue: 'Una', a: ['Una casetta.'], why: '*Casa* + *-etta*.' },
            { q: 'È un tempo orribile.', cue: 'È un', a: ['È un tempaccio.'], why: '*Tempo* + *-accio*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Ho mangiato un [pane] al prosciutto.', a: ['panino'], why: 'A sandwich is *un panino*.' },
            { s: 'Che [tempino] oggi! (awful weather)', a: ['tempaccio'], why: '*-accio* = bad.' },
            { s: 'Ha detto una [parolina]. (a swear word)', a: ['parolaccia'], why: '*Parolaccia* = a swear word.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Hanno una casetta in montagna.', why: 'A small house.' },
            { a: 'Mangio un panino al prosciutto.', why: 'A sandwich.' },
            { a: 'Che tempaccio oggi!', why: 'Awful weather.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Prefissi e suffissi',
      about: 'Build new words with prefixes and suffixes and know their gender.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: '**Prefixes** change the meaning of a word. **In-** (before **b, m, p**: **im-**; before **l**: **il-**; before **r**: **ir-**) means *not*: *possibile → impossibile, legale → illegale, reale → irreale*. **S-** and **dis-** mean the opposite: *fortuna → sfortuna, ordine → disordine*. **Ri-** means *again*: *fare → rifare*. **Pre-** means *before*: *vedere → prevedere*. **Suffixes** make new nouns and adjectives. **-zione** makes a feminine noun from a verb: *costruire → la costruzione*. **-mento** makes a masculine noun: *cambiare → il cambiamento*. **-ità** and **-tà** make feminine nouns from adjectives: *possibile → la possibilità, libero → la libertà*. **-ezza** too: *bello → la bellezza*.' },
          { t: 'table', caption: 'Prefixes and suffixes', explain: ['head', 'col1'], head: ['Form', 'Meaning', 'Example'], rows: [
            ['in- / im- / il- / ir-', 'not', 'possibile → impossibile'],
            ['s- / dis-', 'the opposite', 'fortuna → sfortuna'],
            ['ri-', 'again', 'fare → rifare'],
            ['pre-', 'before', 'vedere → prevedere'],
            ['-zione', 'a feminine noun from a verb', 'costruire → la costruzione'],
            ['-mento', 'a masculine noun from a verb', 'cambiare → il cambiamento'],
            ['-ità / -tà / -ezza', 'a feminine noun from an adjective', 'libero → la libertà; bello → la bellezza'],
            ['-bile', 'it can be …ed', 'leggere → leggibile'],
          ] },
          { t: 'tip', art: 'owl', md: 'The **gender** of the new word is fixed by its ending: **-zione, -tà, -ità, -ezza** are **feminine**; **-mento** and **-ismo** are **masculine**. Before a prefix such as **in-**, watch the sound: *impossibile* (not *inpossibile*), *illegale*, *irreale*. These patterns are the same in Italy and in Switzerland.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Non è possibile: è **im**possibile.', n: '*In-* becomes *im-* before *p*.' },
            { s: 'Non è legale: è **il**legale.', n: '*In-* becomes *il-* before *l*.' },
            { s: 'Devo **ri**fare il lavoro.', n: '*Ri-* = again.' },
            { s: 'La **costruzione** del ponte dura due anni.', n: '*Costruire* + *-zione*.' },
            { s: 'La **libertà** è importante.', n: '*Libero* + *-tà*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the word with its opposite.', pairs: [
            ['possibile', 'impossibile'],
            ['legale', 'illegale'],
            ['fortuna', 'sfortuna'],
            ['ordine', 'disordine'],
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'Build the word.', items: [
            { q: 'Non è possibile: è ___.', base: 'possibile', a: ['impossibile'], why: '*In-* becomes *im-* before *p*.' },
            { q: 'Non è legale: è ___.', base: 'legale', a: ['illegale'], why: '*In-* becomes *il-* before *l*.' },
            { q: 'Devo ___ il lavoro.', base: 'fare', a: ['rifare'], why: '*Ri-* = again.' },
            { q: 'La ___ del ponte dura due anni.', base: 'costruire', a: ['costruzione'], why: '*-zione* makes a noun from a verb.' },
            { q: 'Il ___ del governo è atteso. (the change)', base: 'cambiare', a: ['cambiamento'], why: '*-mento* makes a noun from a verb.' },
            { q: 'La ___ è importante.', base: 'libero', a: ['libertà'], why: '*-tà* makes a noun from an adjective.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Which article?', items: [
            { q: '___ possibilità', o: ['la', 'il', 'lo'], why: '*-ità* nouns are feminine.' },
            { q: '___ cambiamento', o: ['il', 'la', 'l’'], why: '*-mento* nouns are masculine.' },
            { q: '___ bellezza', o: ['la', 'il', 'lo'], why: '*-ezza* nouns are feminine.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Non è possibile: è [inpossibile].', a: ['impossibile'], why: '*In-* becomes *im-* before *p*.' },
            { s: 'La [libero] è importante.', a: ['libertà'], why: '*-tà* makes the noun.' },
            { s: 'Il [cambiare] del governo è atteso.', a: ['cambiamento'], why: '*-mento* makes the noun.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'La costruzione del ponte dura due anni.', why: 'A noun from a verb.' },
            { a: 'Non è possibile, è impossibile.', why: 'The opposite with *im-*.' },
            { a: 'La libertà è un valore importante.', why: 'A noun from an adjective.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Verbi, composti e prestiti',
      about: 'Understand parasynthetic verbs, compound words and loanwords.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'Italian makes verbs from adjectives and nouns with a **prefix and an ending at the same time**. They are **parasynthetic verbs**: *bianco → imbiancare* (to paint white), *rosso → arrossire* (to blush), *largo → allargare* (to widen), *grande → ingrandire* (to enlarge). **Compound words** join two words: *il portafoglio* (wallet), *il cavatappi* (corkscrew), *il grattacielo* (skyscraper), *la cassaforte* (safe), *il capolavoro* (masterpiece). Their plurals can be tricky: *il cavatappi → i cavatappi*, *il grattacielo → i grattacieli*, *la cassaforte → le casseforti*, *il capolavoro → i capolavori*. **Loanwords**, mostly from English, are masculine and do not change: *il computer, i computer; lo sport, gli sport*.' },
          { t: 'table', caption: 'Parasynthetic verbs', explain: ['head', 'col1'], head: ['Base', 'Verb', 'Meaning'], rows: [
            ['bianco', 'imbiancare', 'to paint white'],
            ['rosso', 'arrossire', 'to blush, to turn red'],
            ['largo', 'allargare', 'to widen'],
            ['grande', 'ingrandire', 'to enlarge'],
            ['vecchio', 'invecchiare', 'to grow old'],
            ['debole', 'indebolire', 'to weaken'],
          ] },
          { t: 'tip', art: 'owl', md: 'To guess a new word, **split it**: *il lavastoviglie* is *lava* (washes) + *stoviglie* (dishes), and it is the **dishwasher**. A few compounds are **invariable** in the plural: *il cavatappi, i cavatappi*. An English loanword often has an Italian alternative, such as **posta elettronica** for *email*, but **email** is more common. Both are correct.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Dobbiamo **imbiancare** la stanza.', n: '*Bianco* → *imbiancare*.' },
            { s: 'Lei **arrossì** per la vergogna.', n: '*Rosso* → *arrossire*.' },
            { s: 'Il **cavatappi** serve per aprire il vino.', n: 'A compound: *cava* + *tappi*.' },
            { s: 'I **grattacieli** di Milano sono alti.', n: 'The plural of *il grattacielo*.' },
            { s: 'Ho lavorato al **computer** tutto il giorno.', n: 'An invariable loanword.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the adjective with its verb.', pairs: [
            ['bianco', 'imbiancare'],
            ['rosso', 'arrossire'],
            ['largo', 'allargare'],
            ['grande', 'ingrandire'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Il ___ serve per aprire una bottiglia di vino. (cavatappi)', a: ['cavatappi'], why: 'A compound: *cava* + *tappi*.' },
            { q: 'Dobbiamo ___ la stanza. (bianco)', a: ['imbiancare'], why: '*Bianco* → *imbiancare*.' },
            { q: 'Lei ___ per la vergogna. (arrossire, passato remoto)', a: ['arrossì'], why: '*Arrossire*: *arrossì*.' },
            { q: 'I ___ di Milano sono alti. (il grattacielo)', a: ['grattacieli'], why: 'The plural of *il grattacielo*.' },
            { q: 'Le ___ sono in banca. (la cassaforte)', a: ['casseforti'], why: 'The plural of *la cassaforte*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right plural.', items: [
            { q: 'il grattacielo →', o: ['i grattacieli', 'i grattacielo', 'le grattacieli'], why: 'Masculine plural: *i grattacieli*.' },
            { q: 'il cavatappi →', o: ['i cavatappi', 'i cavatappo', 'le cavatappi'], why: 'Invariable: *i cavatappi*.' },
            { q: 'il computer →', o: ['i computer', 'i computers', 'le computer'], why: 'Loanwords do not change.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Which kind of word is it? Sort the words.', groups: ['parasynthetic verb', 'compound', 'loanword'], explain: ['groups'], items: [
            { s: 'imbiancare', g: 0, why: 'A verb from an adjective.' },
            { s: 'arrossire', g: 0, why: 'A verb from an adjective.' },
            { s: 'il cavatappi', g: 1, why: 'Two words joined.' },
            { s: 'il grattacielo', g: 1, why: 'Two words joined.' },
            { s: 'il computer', g: 2, why: 'From English.' },
            { s: 'lo sport', g: 2, why: 'From English.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Dobbiamo [bianchire] la stanza.', a: ['imbiancare'], why: '*Bianco* → *imbiancare*.' },
            { s: 'I [grattacielo] di Milano sono alti.', a: ['grattacieli'], why: 'The plural: *i grattacieli*.' },
            { s: 'Ho tre [computers].', a: ['computer'], why: 'Loanwords do not change.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Dobbiamo imbiancare la stanza questo mese.', why: 'A parasynthetic verb.' },
            { a: 'Il cavatappi serve per aprire il vino.', why: 'A compound.' },
            { a: 'Ho lavorato al computer tutto il giorno.', why: 'A loanword.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Come cambia l’italiano',
      about: 'Read an essay on how Italian changes.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'Una lingua che cambia', md: 'L’italiano cambia, e lo fa ogni giorno. Nuove parole arrivano dall’inglese: un tempo si diceva «posta elettronica», oggi molti dicono «email». Altre nascono dall’interno: da «ricordare» deriva «ricordino», un piccolo regalo; da «bianco» il verbo «imbiancare».\n\nGli alterati sono una risorsa preziosa: una casetta non è una casaccia, e un librone non è un libretto. Chi conosce i prefissi e i suffissi può indovinare il significato di parole nuove: «impossibile» è il contrario di «possibile», «cambiamento» è l’azione di cambiare.\n\nQualcuno teme che l’italiano si impoverisca, altri vedono nei prestiti una ricchezza. Di sicuro, una lingua viva non si può vietare: si può soltanto osservare.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'L’italiano cambia ogni giorno.', a: 't', why: '*L’italiano cambia, e lo fa ogni giorno.*' },
            { q: 'Le parole nuove arrivano solo dall’inglese.', a: 'f', why: '*Altre nascono dall’interno.*' },
            { q: 'Una casetta e una casaccia sono la stessa cosa.', a: 'f', why: '*Una casetta non è una casaccia.*' },
            { q: 'Chi conosce prefissi e suffissi può indovinare nuove parole.', a: 't', why: '*Può indovinare il significato di parole nuove.*' },
            { q: 'Tutti pensano che l’italiano si impoverisca.', a: 'f', why: '*Altri vedono nei prestiti una ricchezza.*' },
            { q: 'L’autore vive all’estero.', a: 'ng', why: 'The text does not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Che cosa significa «ricordino»?', o: ['Un piccolo regalo.', 'Un grande ricordo.', 'Un ricordo brutto.'], why: '*Ricordino, un piccolo regalo.*' },
            { q: 'Che cosa significa «impossibile»?', o: ['Il contrario di possibile.', 'Molto possibile.', 'Forse possibile.'], why: '*Il contrario di «possibile».*' },
            { q: 'Che cosa si può fare con una lingua viva?', o: ['Soltanto osservarla.', 'Vietarla.', 'Fermarla.'], why: '*Non si può vietare: si può soltanto osservare.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the altered words.', items: [
            { s: 'Una [casetta] non è una [casaccia].', why: '*-etta* = small; *-accia* = bad.' },
            { s: 'Un [librone] non è un [libretto].', why: '*-one* = big; *-etto* = small.' },
            { s: 'Da «ricordare» deriva «[ricordino]», un piccolo regalo.', why: '*-ino* = small.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Una ___ non è una casaccia. (casa, small)', a: ['casetta'], why: '*-etta* = small.' },
            { q: 'Da «bianco» deriva il verbo «___».', a: ['imbiancare'], why: 'A parasynthetic verb.' },
            { q: '«Cambiamento» è l’azione di ___.', a: ['cambiare'], why: '*Cambiare* + *-mento*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Una lingua viva non si può vietare.', why: 'An impersonal *si*.' },
            { a: 'Di sicuro l’italiano cambia ogni giorno.', why: 'An adverb at the start.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Una piccola casa carina è una ___.', o: ['casetta', 'casaccia', 'casone'], why: '*-etta* = small and nice.' },
      { q: '___ cambiamento', o: ['il', 'la', 'l’'], why: '*-mento* nouns are masculine.' },
      { q: 'il grattacielo →', o: ['i grattacieli', 'i grattacielo', 'le grattacieli'], why: 'Masculine plural: *i grattacieli*.' },
      { q: 'Non è possibile: è ___.', o: ['impossibile', 'dispossibile', 'sepossibile'], why: '*In-* becomes *im-* before *p*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Ha detto una ___. (parola, a swear word)', a: ['parolaccia'], why: '*-accia* = bad.' },
      { q: 'La ___ del ponte dura due anni. (costruire)', a: ['costruzione'], why: '*-zione* makes a noun from a verb.' },
      { q: 'Devo ___ il lavoro. (fare, again)', a: ['rifare'], why: '*Ri-* = again.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the adjective with its verb.', pairs: [
      ['bianco', 'imbiancare'],
      ['rosso', 'arrossire'],
      ['largo', 'allargare'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it with one altered word.', items: [
      { q: 'Una casa piccola e carina.', cue: 'Una', a: ['Una casetta.'], why: '*Casa* + *-etta*.' },
      { q: 'È un tempo orribile.', cue: 'È un', a: ['È un tempaccio.'], why: '*Tempo* + *-accio*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Ho mangiato un [pane] al prosciutto.', a: ['panino'], why: 'A sandwich is *un panino*.' },
      { s: 'La [libero] è importante.', a: ['libertà'], why: '*-tà* makes the noun.' },
    ] },
  ],
};
