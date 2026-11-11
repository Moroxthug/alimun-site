// Italian A1, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Family and people',
  goal: 'Talk about your family, say how old people are and describe them simply.',
  art: 'cat',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['family', 'avere', 'age', 'numbers', 'possessives', 'adjectives', 'description'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Ho due fratelli',
      about: 'avere, family words, age and numbers up to 100.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: '**avere** means *to have*. It is irregular and you will use it all the time. To say how old you are, Italian does not use *to be* but *to have*: **Ho venticinque anni** (I am 25). You must say **anni** (years). The letter **h** is silent: *ho* sounds like *o*, and *ha* like *a*.' },
          { t: 'table', caption: 'avere (to have)', quiz: true, head: ['', 'avere'], rows: [
            ['io', 'ho'],
            ['tu', 'hai'],
            ['lui / lei / Lei', 'ha'],
            ['noi', 'abbiamo'],
            ['voi', 'avete'],
            ['loro', 'hanno'],
          ] },
          { t: 'tip', art: 'owl', md: 'The silent **h** in *ho, hai, ha, hanno* keeps them apart from other words that sound the same: **ha** (has) and **a** (to, at); **hanno** (they have) and **anno** (year). In writing, check the **h**: *Marco ha un fratello* but *Marco è a casa*.' },
        ],
        [
          { t: 'text', md: 'Here are the words for your family. Many have a masculine and a feminine form: *il fratello, la sorella*; *lo zio, la zia*; *il cugino, la cugina*. The word **i genitori** means *the parents* (mother and father). **Il figlio** is the son, **la figlia** the daughter, and **i figli** can mean *sons* or *children*.' },
          { t: 'table', caption: 'The family', explain: ['head', 'col1'], head: ['Italian', 'English'], rows: [
            ['il padre, la madre', 'father, mother'],
            ['i genitori', 'parents'],
            ['il fratello, la sorella', 'brother, sister'],
            ['il figlio, la figlia', 'son, daughter'],
            ['il nonno, la nonna', 'grandfather, grandmother'],
            ['il marito, la moglie', 'husband, wife'],
            ['lo zio, la zia', 'uncle, aunt'],
            ['il cugino, la cugina', 'cousin (man, woman)'],
            ['il bambino, la bambina', 'little boy, little girl'],
          ] },
          { t: 'examples', items: [
            { s: '**Ho** un fratello e due sorelle.', n: '*un fratello*, *due sorelle*: the number comes before the noun.' },
            { s: 'Lei **ha** tre figli.', n: '*lei ha* + a number + *figli*.' },
            { s: 'I miei genitori **hanno** una casa a Lecce.', n: '*loro hanno*' },
            { s: 'Voi **avete** fratelli o sorelle?', n: '*fratelli o sorelle* means brothers or sisters.' },
            { s: 'Non **ho** fratelli.', n: 'In a negative sentence, no article is needed: *non ho fratelli*.' },
          ] },
        ],
        [
          { t: 'text', md: 'To ask someone’s age, say **Quanti anni hai?** (tu) or **Quanti anni ha?** (Lei). For the numbers above 20 you say the ten first and then the unit: *ventidue, trentacinque.* With **1** and **8**, the last vowel of the ten falls: **ventuno** (not *ventiuno*), **ventotto** (not *ventiotto*). The same happens with 31, 38, 41, 48, and so on.' },
          { t: 'table', caption: 'Numbers 20 to 100', explain: ['head'], quiz: true, head: ['Number', 'Italian', 'Number', 'Italian'], rows: [
            ['20', 'venti', '60', 'sessanta'],
            ['21', 'ventuno', '70', 'settanta'],
            ['22', 'ventidue', '80', 'ottanta'],
            ['28', 'ventotto', '90', 'novanta'],
            ['30', 'trenta', '100', 'cento'],
            ['31', 'trentuno', '', ''],
            ['40', 'quaranta', '', ''],
            ['50', 'cinquanta', '', ''],
          ] },
          { t: 'tip', art: 'owl', md: 'When **tre** is the last part of a number, it takes an accent and is written in one word: **ventitré, trentatré**. Numbers are written as one word: *centocinque.* Before a plural noun, *ventuno* becomes **ventun**: *Ho ventun anni.*' },
        ],
        [
          { t: 'dialogue', title: 'Fratelli e sorelle', lines: [
            { who: 'Giulia', s: 'Hai fratelli o sorelle, Marco?' },
            { who: 'Marco', s: 'Sì, ho una sorella e un fratello. E tu?' },
            { who: 'Giulia', s: 'Io ho due fratelli. Quanti anni ha tua sorella?' },
            { who: 'Marco', s: 'Ha ventotto anni. Mio fratello ha trentun anni.' },
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of avere.', verb: 'avere', tense: 'present', rows: [
            ['io', 'ho'],
            ['tu', 'hai'],
            ['lui / lei', 'ha'],
            ['noi', 'abbiamo'],
            ['voi', 'avete'],
            ['loro', 'hanno'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the right form of avere.', items: [
            { q: '___ una sorella. (io)', a: ['Ho'], why: '*io ho*' },
            { q: 'Tu ___ quanti anni?', a: ['hai'], why: '*tu hai*' },
            { q: 'Mio padre ___ cinquantotto anni.', a: ['ha'], why: 'One person: *ha*.' },
            { q: 'Noi ___ due figli.', a: ['abbiamo'], why: '*noi abbiamo*' },
            { q: 'Voi ___ fratelli?', a: ['avete'], why: '*voi avete*' },
            { q: 'I miei cugini ___ una casa.', a: ['hanno'], why: 'Several people: *hanno*.' },
          ] },
          { t: 'ex', kind: 'crossword', h: 'Write the numbers.', words: [
            { a: 'trenta', clue: 'Venti più dieci.' },
            { a: 'quaranta', clue: 'Venti per due.' },
            { a: 'cinquanta', clue: 'Quaranta più dieci.' },
            { a: 'sessanta', clue: 'Cinquanta più dieci.' },
            { a: 'venti', clue: 'Dieci più dieci.' },
            { a: 'cento', clue: 'Il numero più grande della tabella.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Mia sorella, i miei genitori',
      about: 'mio, tuo, suo and the other words for my, your, his and her.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'Italian has different words for *my* for a masculine noun, a feminine noun and a plural. They agree with the **thing owned**: **mio** padre, **mia** madre, **miei** genitori. It is the same for *your* (**tuo, tua, tuoi, tue**) and for *his* or *her* (**suo, sua, suoi, sue**). With a singular family word, you use no article: **mio fratello, mia sorella**. With a plural, use the article: **i miei fratelli, le mie sorelle**.' },
          { t: 'table', caption: 'My, your, his, her', explain: ['head'], head: ['', 'masc. sing.', 'fem. sing.', 'masc. pl.', 'fem. pl.'], rows: [
            ['my', 'mio', 'mia', 'miei', 'mie'],
            ['your (tu)', 'tuo', 'tua', 'tuoi', 'tue'],
            ['his, her, your (Lei)', 'suo', 'sua', 'suoi', 'sue'],
            ['our', 'nostro', 'nostra', 'nostri', 'nostre'],
            ['your (voi)', 'vostro', 'vostra', 'vostri', 'vostre'],
            ['their', 'loro', 'loro', 'loro', 'loro'],
          ] },
          { t: 'tip', art: 'owl', md: '**suo, sua, suoi, sue** agree with the noun that follows, not with the owner: *Marco parla di suo fratello* and *Giulia parla di suo fratello* use the same word. Only the context tells you if it is *his* or *her*. **loro** never changes and always takes the article: **il loro padre, la loro madre**.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Mio** padre si chiama Paolo.', n: 'A singular family word: no article.' },
            { s: '**Mia** sorella ha ventotto anni.', n: 'Feminine: *mia*.' },
            { s: '**I miei** genitori abitano a Torino.', n: 'Plural: *i miei* with the article.' },
            { s: 'Come si chiama **tuo** figlio?', n: 'With *tu*: *tuo*.' },
            { s: '**La mia** famiglia è grande.', n: 'Without a single family noun, the article is needed: *la mia famiglia*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: '___ madre si chiama Anna.', o: ['Mia', 'Mio', 'Miei'], why: '*madre* is feminine: *mia*.' },
            { q: '___ fratello ha trent’anni.', o: ['Mio', 'Mia', 'Miei'], why: '*fratello* is masculine: *mio*.' },
            { q: 'Hai i ___ genitori qui?', o: ['tuoi', 'tuo', 'tue'], why: '*genitori* is plural: *i tuoi*.' },
            { q: 'Questa è ___ amica Marta.', o: ['la mia', 'mia', 'il mio'], why: '*amica* is not a family word: the article is needed: *la mia amica*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'tu, Lei or voi? Choose the right word.', items: [
            { q: 'Luca, è ___ fratello?', o: ['tuo', 'suo', 'mio'], why: 'Luca is a friend, so *tu*: *tuo fratello*.' },
            { q: 'Signora Rossi, è ___ figlia?', o: ['sua', 'tua', 'mia'], why: 'Polite *Lei*: *sua figlia*.' },
            { q: 'Marta e Lia, sono ___ genitori?', o: ['i vostri', 'i tuoi', 'i suoi'], why: 'Two people, *voi*: *i vostri genitori*.' },
            { q: 'Ami ___ cugina?', o: ['tua', 'la tua', 'il tuo'], why: 'A singular family word: no article, *tua cugina*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Abito con [mia] fratello.', a: ['mio'], why: '*fratello* is masculine: *mio fratello*.' },
            { s: 'Ecco [mio] genitori.', a: ['i miei'], why: 'Plural: *i miei genitori*.' },
            { s: 'Lui presenta [sua] zio Paolo.', a: ['suo'], why: '*zio* is masculine: *suo zio*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write my, your, his or her.', items: [
            { q: 'Mi chiamo Anna. Ecco ___ madre, Rosa.', a: ['mia'], why: 'The speaker says *my mother*: *mia madre*.' },
            { q: 'Giulia, dov’è ___ fratello?', a: ['tuo'], why: 'Giulia is a friend: *tuo fratello*.' },
            { q: 'Ecco Clara e ___ marito, Paolo.', a: ['suo'], why: '*marito* is masculine, and he is Clara’s husband: *suo marito*.' },
            { q: 'I miei cugini amano ___ casa.', a: ['la loro'], why: 'Several owners: *la loro casa*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Mia sorella ha ventotto anni.', why: 'No article before a singular family word.' },
            { a: 'I miei genitori abitano a Torino.', why: 'The article is needed with a plural.' },
            { a: 'Come si chiama tuo fratello?', why: 'No article before a singular family word.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'È alto, è simpatica',
      about: 'Describe people with essere and an adjective that agrees.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'An adjective **agrees** with the noun. Many end in **-o** for a man and **-a** for a woman: *alto, alta*. The plural is **-i** for men and **-e** for women: *alti, alte*. Adjectives that end in **-e** have the same form for a man and a woman, and the plural ends in **-i**: *giovane, giovani*; *gentile, gentili*. The letter **c** or **g** keeps its sound in the plural: *simpatico, simpatici* (men) but *simpatiche* (women).' },
          { t: 'table', caption: 'Describing people', explain: ['head', 'col3'], head: ['Man', 'Woman', 'Plural (men)', 'Meaning'], rows: [
            ['alto', 'alta', 'alti', 'tall'],
            ['basso', 'bassa', 'bassi', 'short'],
            ['simpatico', 'simpatica', 'simpatici', 'nice'],
            ['contento', 'contenta', 'contenti', 'happy'],
            ['biondo', 'bionda', 'biondi', 'blond'],
            ['moro', 'mora', 'mori', 'dark-haired'],
            ['giovane', 'giovane', 'giovani', 'young'],
            ['gentile', 'gentile', 'gentili', 'kind'],
          ] },
          { t: 'tip', art: 'owl', md: 'The plural of words in **-ca** and **-ga** is **-che** and **-ghe**: *simpatica → simpatiche*, *lunga → lunghe*. The **h** keeps the hard sound. The plural of **-co** (men) is usually **-ci**: *simpatico → simpatici*.' },
        ],
        [
          { t: 'text', md: 'To describe a person, use **essere** + an adjective: *Mio fratello è alto. Mia sorella è bassa.* To say who someone is, use **è** + a name: *È mio fratello.* To say there is or there are, use **c’è** (one) and **ci sono** (several): *Nella mia famiglia ci sono cinque persone.* To ask a yes/no question, raise your voice at the end: *È alto? Sono simpatici?* There is no change in word order.' },
          { t: 'examples', items: [
            { s: 'Mio padre **è alto** e bruno.', n: '*padre* is masculine: no ending change.' },
            { s: 'Mia sorella **è bassa** e bionda.', n: '*sorella* is feminine: *bassa*.' },
            { s: 'I miei cugini **sono simpatici**.', n: 'Plural masculine: *-i*.' },
            { s: 'Le mie zie **sono gentili**.', n: 'Plural feminine of *-e*: *gentili*.' },
            { s: 'Nella mia famiglia **ci sono** cinque persone.', n: '*ci sono* = there are.' },
          ] },
          { t: 'dialogue', title: 'Una foto', lines: [
            { who: 'Giulia', s: 'Chi è, nella foto?' },
            { who: 'Marco', s: 'È mia sorella. Si chiama Anna.' },
            { who: 'Giulia', s: 'È alta! Quanti anni ha?' },
            { who: 'Marco', s: 'Ha ventidue anni. È molto simpatica.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'Mio padre è ___.', o: ['alto', 'alta', 'alti'], why: '*padre* is masculine singular: *alto*.' },
            { q: 'Mia sorella è ___.', o: ['bassa', 'basso', 'bassi'], why: '*sorella* is feminine: *bassa*.' },
            { q: 'I miei cugini sono ___.', o: ['simpatici', 'simpatico', 'simpatiche'], why: 'Several men: *simpatici*.' },
            { q: 'Le mie zie sono ___.', o: ['gentili', 'gentile', 'gentilo'], why: 'Several women, adjective in *-e*: *gentili*.' },
            { q: 'Luca è ___.', o: ['giovane', 'giovano', 'giovani'], why: 'Singular, adjective in *-e*: *giovane*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Mio fratello è molto alto.', why: 'Subject, *è*, *molto* and the adjective.' },
            { a: 'Mia madre è giovane e bionda.', why: 'Two adjectives joined by *e*.' },
            { a: 'Nella mia famiglia ci sono cinque persone.', why: '*ci sono* + number + noun.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'Write the adjective in the right form.', items: [
            { q: 'Mia zia è ___.', base: 'basso', a: ['bassa'], why: 'A woman: *-o* becomes *-a*.' },
            { q: 'I miei fratelli sono ___.', base: 'alto', a: ['alti'], why: 'Several men: *-o* becomes *-i*.' },
            { q: 'Le mie cugine sono molto ___.', base: 'simpatico', a: ['simpatiche'], why: 'Several women: *-ca* becomes *-che*.' },
            { q: 'Le mie sorelle sono ___.', base: 'contento', a: ['contente'], why: 'Several women: *-e*.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Read and decide.', items: [
            { q: 'Si dice «alta» per un ragazzo.', a: 'f', why: 'For a boy: *alto*. *alta* is for a girl or woman.' },
            { q: 'Si dice «È mio fratello» per presentare un uomo.', a: 't', why: '*È* + name or noun introduces a person.' },
            { q: '«Giovane» è la stessa parola per un uomo e per una donna.', a: 't', why: 'It ends in *-e*: *è giovane* for both.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Una foto di famiglia',
      about: 'Read a short message that comes with a family photo.',
      art: 'cat',
      spreads: [
        [
          { t: 'reading', title: 'Un messaggio di Nadia', md: 'Ciao Giulia!\n\nEcco una foto della mia famiglia. Mio padre si chiama Karim e mia madre si chiama Rania. Mio padre ha cinquantadue anni e mia madre ha quarantanove anni. Sono gentili, ma lavorano molto.\n\nHo un fratello e una sorella. Mio fratello, Omar, ha venti anni. È alto e bruno. Mia sorella, Amira, è bassa. Ha quattordici anni ed è molto simpatica.\n\nMia nonna abita con noi. Ha ottant’anni ed è molto contenta. Parla arabo e un po’ di italiano.\n\nE tu, hai fratelli o sorelle? A presto!\n\nNadia' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Il padre di Nadia ha cinquantadue anni.', a: 't', why: '*Mio padre ha cinquantadue anni.*' },
            { q: 'Nadia ha due fratelli.', a: 'f', why: 'Nadia has one brother and one sister.' },
            { q: 'Amira ha quattordici anni.', a: 't', why: '*Ha quattordici anni.*' },
            { q: 'I genitori di Nadia abitano a Torino.', a: 'ng', why: 'The message does not say where they live.' },
            { q: 'La nonna di Nadia parla arabo.', a: 't', why: '*Parla arabo e un po’ di italiano.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Who is it?', pairs: [
            ['Karim', 'il padre di Nadia'],
            ['Rania', 'la madre di Nadia'],
            ['Omar', 'il fratello di Nadia'],
            ['Amira', 'la sorella di Nadia'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the message.', items: [
            { q: 'Omar è alto e ___.', a: ['bruno'], why: '*È alto e bruno.*' },
            { q: 'La nonna di Nadia ha ___ anni.', a: ['ottant’anni', 'ottanta'], why: '*Ha ottant’anni.*' },
            { q: 'I genitori di Nadia sono ___, ma lavorano molto.', a: ['gentili'], why: '*Sono gentili, ma lavorano molto.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Noi ___ una grande famiglia.', o: ['abbiamo', 'siamo', 'avete'], why: '*noi abbiamo*' },
      { q: '___ ventun anni.', o: ['Ho', 'Sono', 'Hai'], why: 'You have an age in Italian: *ho … anni*.' },
      { q: '___ sorella si chiama Clara.', o: ['Mia', 'Mio', 'Miei'], why: '*sorella* is feminine: *mia*.' },
      { q: 'I miei genitori sono ___.', o: ['gentili', 'gentile', 'gentilo'], why: 'Several people: *gentili*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Quanti anni ___? (tu)', a: ['hai'], why: '*tu hai*' },
      { q: 'Trenta più quaranta fa ___.', a: ['settanta'], why: '30 + 40 = 70: *settanta*.' },
      { q: 'Mia zia è molto ___. (giovane)', a: ['giovane'], why: '*giovane* does not change for a woman.' },
      { q: 'Lei è ___. (alto)', a: ['alta'], why: 'A woman: *alta*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the family word.', pairs: [
      ['il padre', 'la madre'],
      ['il fratello', 'la sorella'],
      ['il figlio', 'la figlia'],
      ['il marito', 'la moglie'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Mio fratello ha trentun anni.', why: 'Subject, *ha*, number, *anni*.' },
      { a: 'Mia sorella è bassa e simpatica.', why: '*sorella* is feminine.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Io [sono] venti anni.', a: ['ho'], why: 'You have an age: *ho venti anni*.' },
      { s: '[Mio] madre è gentile.', a: ['Mia'], why: '*madre* is feminine: *mia madre*.' },
    ] },
  ],
};
