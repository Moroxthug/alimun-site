// Italian A1, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Home',
  goal: 'Describe your flat, its rooms and furniture.',
  art: 'mug',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['home', 'rooms', 'furniture', 'c’è', 'adjectives', 'colours', 'prepositions of place'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Nel mio appartamento',
      about: 'Rooms, furniture, c’è and ci sono, and questo and quello.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'In Italian, a flat is **un appartamento** and a house is **una casa**. The rooms are **le stanze** or **le camere**. A one-room flat is **un monolocale**; **un bilocale** has two rooms (a bedroom and a living room), **un trilocale** has three. The kitchen and the bathroom are usually not counted in this way.' },
          { t: 'table', caption: 'Rooms', explain: ['head', 'col1'], head: ['Italian', 'English'], rows: [
            ['l’ingresso (m.)', 'hall, entrance'],
            ['il soggiorno', 'living room'],
            ['la cucina', 'kitchen'],
            ['la camera da letto', 'bedroom'],
            ['il bagno', 'bathroom'],
            ['il balcone', 'balcony'],
            ['il giardino', 'garden'],
            ['la terrazza', 'terrace'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Italy, people often say **il salotto** or **il soggiorno** for the living room, and **la sala da pranzo** for the dining room. The bathroom (**il bagno**) usually includes the toilet. Floors are counted from the ground floor (**il piano terra**), then **il primo piano**, **il secondo piano**.' },
        ],
        [
          { t: 'table', caption: 'Furniture', explain: ['head', 'col1'], head: ['Italian', 'English'], rows: [
            ['il letto', 'bed'],
            ['il tavolo, la sedia', 'table, chair'],
            ['il divano', 'sofa'],
            ['l’armadio (m.)', 'wardrobe'],
            ['la scrivania', 'desk'],
            ['la lampada', 'lamp'],
            ['la finestra, la porta', 'window, door'],
            ['il frigorifero', 'fridge'],
            ['la doccia', 'shower'],
          ] },
          { t: 'examples', items: [
            { s: '**C’è** un letto e un armadio nella camera.', n: '*c’è* means there is.' },
            { s: '**Ci sono** tre sedie in cucina.', n: '*ci sono* means there are.' },
            { s: '**Non c’è** il balcone.', n: 'In a negative sentence: *non c’è*.' },
            { s: '**C’è** un giardino?', n: 'Is there a garden?' },
            { s: '**Questo** soggiorno è grande. **Questa** camera è piccola. **Queste** finestre sono belle.', n: 'This, this and these.' },
          ] },
        ],
        [
          { t: 'text', md: '**Questo** (masculine), **questa** (feminine), **questi** and **queste** (plural) point to something near you: *questo divano, questa sedia, questi tavoli, queste lampade.* For something farther away, use **quello**: *quel divano, quella sedia, quei tavoli, quelle lampade.* It changes like the definite article: **quel** (before a consonant), **quello** (before s + consonant), **quell’** (before a vowel).' },
          { t: 'ex', kind: 'select', h: 'Choose questo, questa, questi or queste.', items: [
            { q: '___ cucina è piccola.', o: ['Questa', 'Questo', 'Questi'], why: '*cucina* is feminine: *questa*.' },
            { q: '___ appartamento è grande.', o: ['Questo', 'Questa', 'Queste'], why: '*appartamento* is masculine: *questo*.' },
            { q: '___ sedie sono gialle.', o: ['Queste', 'Questa', 'Questo'], why: 'Feminine plural: *queste*.' },
            { q: 'Mi piace ___ divano.', o: ['questo', 'questa', 'questi'], why: '*divano* is masculine: *questo*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Where do you find it?', pairs: [
            ['il letto', 'la camera da letto'],
            ['il frigorifero', 'la cucina'],
            ['il divano', 'il soggiorno'],
            ['la doccia', 'il bagno'],
          ] },
        ],
        [
          { t: 'ex', kind: 'picture', h: 'What is it?', items: [
            { pic: 'house', o: ['una casa', 'una chiave', 'un letto'], why: '*una casa* is a house.' },
            { pic: 'key', o: ['una chiave', 'una porta', 'un telefono'], why: '*una chiave* is a key.' },
            { pic: 'clock', o: ['una sveglia', 'una lampada', 'una scrivania'], why: 'The drawing is an alarm clock: *una sveglia*.' },
            { pic: 'phone', o: ['un cellulare', 'un armadio', 'un letto'], why: '*un cellulare* is a mobile phone.' },
          ] },
          { t: 'ex', kind: 'label', h: 'Label the kitchen.', scene: 'kitchen', extra: ['il letto', 'la porta'], items: [
            { x: 160, y: 50, a: 'la finestra', why: 'The window.' },
            { x: 260, y: 70, a: 'il frigorifero', why: 'The fridge.' },
            { x: 71, y: 100, a: 'la pentola', why: 'The pot.' },
            { x: 156, y: 100, a: 'il bollitore', why: 'The kettle.' },
            { x: 160, y: 165, a: 'l’armadio', why: 'The cupboard.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Un grande divano blu',
      about: 'Adjectives before and after the noun, and colours.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'Most Italian adjectives come **after** the noun: *un divano comodo, una tavola rotonda, un appartamento moderno*. A few common short adjectives often come **before** it: *un piccolo appartamento, una grande cucina, un bel soggiorno, una bella casa, un nuovo letto, un vecchio divano*. They agree with the noun like all adjectives: *una piccola camera, grandi finestre*.' },
          { t: 'table', caption: 'Adjectives before the noun', explain: ['head', 'col3'], head: ['Masculine', 'Feminine', 'Plural', 'Meaning'], rows: [
            ['piccolo', 'piccola', 'piccoli, piccole', 'small'],
            ['grande', 'grande', 'grandi', 'big'],
            ['bello', 'bella', 'belli, belle', 'beautiful'],
            ['buono', 'buona', 'buoni, buone', 'good'],
            ['nuovo', 'nuova', 'nuovi, nuove', 'new'],
            ['vecchio', 'vecchia', 'vecchi, vecchie', 'old'],
          ] },
          { t: 'tip', art: 'owl', md: '**bello** changes like the article before a noun: **un bel soggiorno**, **un bello specchio**, **un bell’armadio**, **una bella casa**, **dei bei divani**, **dei begli armadi**, **delle belle sedie**. **grande** can become **gran** before a masculine noun that starts with a consonant: *un gran divano*.' },
        ],
        [
          { t: 'text', md: 'Colours come after the noun and agree with it. Colours that end in **-o** have four forms: *rosso, rossa, rossi, rosse*. Colours that end in **-e** have two: *verde, verdi*. Some colours **never change**: **blu**, **rosa**, **viola**. Use them like adjectives: *un divano blu, due sedie rosa.*' },
          { t: 'table', caption: 'Colours', explain: ['head', 'col3'], head: ['Masculine', 'Feminine', 'Plural', 'Meaning'], rows: [
            ['rosso', 'rossa', 'rossi, rosse', 'red'],
            ['blu', 'blu', 'blu', 'blue (dark)'],
            ['azzurro', 'azzurra', 'azzurri, azzurre', 'light blue'],
            ['verde', 'verde', 'verdi', 'green'],
            ['giallo', 'gialla', 'gialli, gialle', 'yellow'],
            ['bianco', 'bianca', 'bianchi, bianche', 'white'],
            ['nero', 'nera', 'neri, nere', 'black'],
            ['grigio', 'grigia', 'grigi, grigie', 'grey'],
          ] },
          { t: 'examples', items: [
            { s: 'Il soggiorno ha un **grande** divano **grigio**.', n: '*grande* before, *grigio* after.' },
            { s: 'La cucina ha una **piccola** tavola **bianca**.', n: 'Feminine: *piccola*, *bianca*.' },
            { s: 'Ho due sedie **rosse**.', n: 'Plural feminine: *-e*.' },
            { s: 'La mia camera è **azzurra**.', n: 'After *essere*, the adjective agrees: *camera* is feminine.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Does it come before or after the noun?', groups: ['before', 'after'], explain: ['groups'], items: [
            { s: 'piccolo', g: 0, why: 'Common short adjectives come before: *un piccolo letto*.' },
            { s: 'blu', g: 1, why: 'Colours come after: *un divano blu*.' },
            { s: 'grande', g: 0, why: '*un grande soggiorno*' },
            { s: 'rotondo', g: 1, why: 'Shapes come after: *una tavola rotonda*.' },
            { s: 'bello', g: 0, why: '*un bel balcone*' },
            { s: 'bianco', g: 1, why: 'Colours come after: *un muro bianco*.' },
          ] },
          { t: 'ex', kind: 'wordform', h: 'Write the adjective in the right form.', items: [
            { q: 'La tavola è ___.', base: 'bianco', a: ['bianca'], why: '*tavola* is feminine: *bianca*.' },
            { q: 'Il divano è ___.', base: 'verde', a: ['verde'], why: '*verde* ends in *-e*: it does not change in the singular.' },
            { q: 'Le sedie sono ___.', base: 'rosso', a: ['rosse'], why: 'Feminine plural: *rosse*.' },
            { q: 'Una ___ camera con un balcone.', base: 'grande', a: ['grande'], why: '*grande* is the same for masculine and feminine.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Ho un piccolo appartamento.', why: 'The short adjective *piccolo* comes before the noun.' },
            { a: 'Il soggiorno ha una tavola rotonda.', why: 'The shape *rotonda* comes after the noun.' },
            { a: 'La camera ha un grande letto.', why: '*grande* comes before *letto*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
            { q: '', o: ['Abbiamo un divano blu.', 'Abbiamo un blu divano.', 'Abbiamo un divano blua.'], why: 'Colours come after the noun and *blu* never changes.' },
            { q: '', o: ['Ha una bella cucina.', 'Ha una cucina bello.', 'Ha un bella cucina.'], why: '*bella* comes before *cucina*, feminine.' },
            { q: '', o: ['Sono sedie nere.', 'Sono nere sedie.', 'Sono sedie nero.'], why: 'The colour comes after the noun and takes *-e*: *nere*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Dov’è la chiave?',
      about: 'Say where things are, and how many rooms there are.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'To ask where something is, say **Dov’è …?** (one thing) or **Dove sono …?** (several). The words for place are small and very useful: **su** (on), **sotto** (under), **in** (in), **davanti a** (in front of), **dietro** (behind), **accanto a** (next to), **tra** or **fra** (between). When the noun has an article, **su**, **in** and **di** join with it: *sul tavolo, nel frigorifero, sotto il letto.*' },
          { t: 'table', caption: 'Where is it?', explain: ['head', 'col1'], head: ['Italian', 'English'], rows: [
            ['sul tavolo', 'on the table'],
            ['sotto il letto', 'under the bed'],
            ['nell’armadio', 'in the wardrobe'],
            ['davanti alla porta', 'in front of the door'],
            ['dietro il divano', 'behind the sofa'],
            ['accanto al frigorifero', 'next to the fridge'],
            ['tra la lampada e il letto', 'between the lamp and the bed'],
            ['a destra, a sinistra', 'on the right, on the left'],
          ] },
          { t: 'tip', art: 'owl', md: 'Remember how **a** and **in** join with the article: **a + il = al**, **a + la = alla**, **in + il = nel**, **in + la = nella**, **su + il = sul**, **su + la = sulla**. But **sotto**, **dietro** and **tra** do not join: *sotto il letto, dietro la porta.*' },
        ],
        [
          { t: 'dialogue', title: 'Dove sono le chiavi?', lines: [
            { who: 'Giulia', s: 'Paolo, dov’è la mia chiave?' },
            { who: 'Paolo', s: 'È sul tavolo, accanto al telefono.' },
            { who: 'Giulia', s: 'No, sul tavolo non c’è.' },
            { who: 'Paolo', s: 'Ah, è nell’armadio dell’ingresso, dietro l’ombrello.' },
            { who: 'Giulia', s: 'Grazie! La vedo.' },
          ] },
          { t: 'text', md: 'To ask how many rooms a flat has, say **Quante stanze ha l’appartamento?** The answer is **L’appartamento ha tre stanze.** In a rental advert, **c’è** is often replaced by **con**: *Un appartamento con balcone.*' },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Il gatto è ___ il letto. (under)', o: ['sotto', 'sul', 'dietro'], why: '*sotto* means under.' },
            { q: 'La lampada è ___ tavolo.', o: ['sul', 'nel', 'dal'], why: '*su* + *il* = *sul*.' },
            { q: 'La sedia è accanto ___ letto.', o: ['al', 'alla', 'ai'], why: '*a* + *il* = *al*.' },
            { q: 'Il giardino è ___ la casa. (at the back)', o: ['dietro', 'davanti', 'su'], why: '*dietro* means behind.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Il telefono è [nel] tavolo.', a: ['sul'], why: 'On a table: *sul tavolo*.' },
            { s: 'Il gatto è accanto [a il] divano.', a: ['al'], why: '*a* + *il* = *al*.' },
            { s: 'Non ci [è] sedie qui.', a: ['sono'], why: '*ci sono* with a plural: *non ci sono sedie*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Read the dialogue again and decide.', items: [
            { q: 'La chiave è sul tavolo.', a: 'f', why: 'There is no key on the table: it is in the wardrobe.' },
            { q: 'L’armadio è nell’ingresso.', a: 't', why: '*nell’armadio dell’ingresso*' },
            { q: 'L’ombrello è dietro la chiave.', a: 'f', why: 'The key is *dietro l’ombrello*: the umbrella is in front of the key.' },
          ] },
          { t: 'ex', kind: 'bank', h: 'Fill the gaps with the words in the bank.', extra: ['sul', 'dal'], items: [
            { q: 'Il letto è nella ___.', a: 'camera', why: 'A bed is in the bedroom.' },
            { q: 'Si mangia in ___.', a: 'cucina', why: 'We cook and often eat in the kitchen.' },
            { q: 'Il frigorifero è accanto all’___.', a: 'armadio', why: 'The fridge is next to the wardrobe.' },
            { q: 'Il letto è ___ la lampada e l’armadio.', a: 'tra', why: '*tra* means between.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Un nuovo appartamento',
      about: 'Read a flat advert and an email about a new flat.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Affittasi', md: '**Trilocale in centro**\nSoggiorno con balcone, due camere da letto, cucina e bagno. Non c’è il giardino. Il soggiorno è grande e luminoso, con una bella finestra. La cucina è piccola, ma moderna. Nell’ingresso c’è un armadio.\n\nAffitto: 800 € al mese.\nContatti: annuncio@example.com' },
          { t: 'reading', title: 'Una e-mail a un’amica', md: 'Ciao Clara!\n\nHo un nuovo appartamento! È al terzo piano, con un piccolo balcone. C’è un grande soggiorno con un divano grigio e una tavola rotonda. La camera è azzurra e c’è un grande letto bianco. La cucina è gialla.\n\nVieni sabato! Il mio indirizzo: via dei Fiori. A presto!\n\nLuca' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'L’appartamento in affitto ha tre stanze.', a: 't', why: '*Trilocale*' },
            { q: 'C’è un giardino.', a: 'f', why: '*Non c’è il giardino.*' },
            { q: 'La cucina è moderna.', a: 't', why: '*La cucina è piccola, ma moderna.*' },
            { q: 'L’appartamento è vicino a una stazione.', a: 'ng', why: 'The advert says it is in the centre, but not near a station.' },
            { q: 'Luca abita al terzo piano.', a: 't', why: '*È al terzo piano.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the email again and choose.', items: [
            { q: 'Di che colore è la camera di Luca?', o: ['azzurra', 'gialla', 'grigia'], why: '*La camera è azzurra.*' },
            { q: 'Cosa c’è nel soggiorno?', o: ['un divano grigio e una tavola rotonda', 'un letto bianco', 'una tavola gialla'], why: '*un divano grigio e una tavola rotonda*' },
            { q: 'Quando può venire Clara?', o: ['sabato', 'domenica', 'lunedì'], why: '*Vieni sabato!*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the email.', items: [
            { q: 'La cucina di Luca è ___.', a: ['gialla'], why: '*La cucina è gialla.*' },
            { q: 'C’è un piccolo ___ nel suo appartamento.', a: ['balcone'], why: '*con un piccolo balcone*' },
            { q: 'Il suo letto è grande e ___.', a: ['bianco'], why: '*un grande letto bianco*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Nella camera ___ un letto.', o: ['c’è', 'ci sono', 'è'], why: 'One thing: *c’è*.' },
      { q: '___ appartamento è grande.', o: ['Questo', 'Questa', 'Questi'], why: '*appartamento* is masculine: *questo*.' },
      { q: 'Una tavola ___.', o: ['rotonda', 'rotondo', 'rotonde'], why: '*tavola* is feminine singular: *rotonda*.' },
      { q: 'Il gatto è ___ il divano. (on it)', o: ['sul', 'sotto', 'dietro'], why: '*su* + *il* = *sul*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Non c’è il ___. (garden)', a: ['giardino'], why: '*il giardino*' },
      { q: '___ sono le mie chiavi? (where)', a: ['Dove'], why: '*Dove sono …?*' },
      { q: 'La sedia è accanto ___ letto. (a + il)', a: ['al'], why: '*a* + *il* = *al*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the room.', pairs: [
      ['il letto', 'la camera da letto'],
      ['il frigorifero', 'la cucina'],
      ['il divano', 'il soggiorno'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Abbiamo un piccolo balcone.', why: '*piccolo* comes before the noun.' },
      { a: 'La chiave è nell’armadio.', why: 'Subject, *è*, place.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Il soggiorno ha un divano [blua].', a: ['blu'], why: '*blu* never changes.' },
      { s: 'Ci [è] sedie in cucina.', a: ['sono'], why: '*ci sono* with a plural.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Write the adjective in the right form.', items: [
      { q: 'Una ___ cucina.', base: 'piccolo', a: ['piccola'], why: 'Before a feminine noun: *piccola*.' },
      { q: 'Due sedie ___.', base: 'nero', a: ['nere'], why: 'Feminine plural: *nere*.' },
    ] },
  ],
};
