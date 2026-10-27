// Italian A2, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'People and relationships',
  goal: 'Describe people and their character, compare them and talk about relationships. Learn the comparisons and the pronouns lo, la, li and le.',
  art: 'pizza',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['character', 'comparison', 'direct object pronouns', 'relationships', 'opinions'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'È simpatico, è timida',
      about: 'Describe character and give your opinion with secondo me.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'To describe a person’s character, use **essere** and an adjective, as you did at A1. Some adjectives change in a special way for a woman: **-tore** becomes **-trice** (*lavoratore, lavoratrice*), and **-oso** becomes **-osa** (*generoso, generosa*). The plural of **-o** is **-i**, and of **-a** it is **-e**: *generosi, generose.*' },
          { t: 'table', caption: 'Character', explain: ['head', 'col3'], head: ['Man', 'Woman', 'Plural (men)', 'Meaning'], rows: [
            ['simpatico', 'simpatica', 'simpatici', 'nice'],
            ['timido', 'timida', 'timidi', 'shy'],
            ['calmo', 'calma', 'calmi', 'calm'],
            ['generoso', 'generosa', 'generosi', 'generous'],
            ['pigro', 'pigra', 'pigri', 'lazy'],
            ['lavoratore', 'lavoratrice', 'lavoratori', 'hard-working'],
            ['attivo', 'attiva', 'attivi', 'active'],
            ['sportivo', 'sportiva', 'sportivi', 'sporty'],
            ['gentile', 'gentile', 'gentili', 'kind'],
            ['nervoso', 'nervosa', 'nervosi', 'nervous'],
          ] },
          { t: 'tip', art: 'owl', md: 'In speech, the last vowel shows the gender: **pigro** and **pigra**. Adjectives in **-co** like *simpatico* have the plural **-ci** (*simpatici*) for men and **-che** (*simpatiche*) for women. Adjectives in **-e** have the same form for a man and a woman: *gentile*.' },
        ],
        [
          { t: 'text', md: 'To give an opinion about a person, use **secondo me** (in my opinion), **per me** or **mi sembra** (it seems to me): *Secondo me, Luca è molto simpatico. Mi sembra timida.* After **penso che** and **credo che** (I think that), Italian normally uses the subjunctive, which you will study later; for now, learn two fixed phrases: **penso che sia** (I think he or she is) and **penso che abbia** (I think he or she has). Ask for an opinion with **Che ne pensi?** (What do you think of it?).' },
          { t: 'examples', items: [
            { s: '**Secondo me** mia sorella è molto **generosa**.', n: 'An opinion about a woman: *generosa*.' },
            { s: '**Mi sembra** un po’ **pigro**.', n: '*mi sembra* softens the opinion.' },
            { s: '**Penso che sia** molto simpatico.', n: 'A fixed phrase: *penso che sia*.' },
            { s: 'Il mio collega è **molto lavoratore**, ma anche **un po’ timido**.', n: 'Two opposite qualities joined by *ma*.' },
            { s: 'Lei **non è per niente** pigra.', n: '*non … per niente* means not at all.' },
          ] },
          { t: 'dialogue', title: 'Un nuovo collega', lines: [
            { who: 'Giulia', s: 'Hai conosciuto il nuovo collega?' },
            { who: 'Marco', s: 'Sì, si chiama Karim. Secondo me è molto simpatico.' },
            { who: 'Giulia', s: 'Anche per me. È divertente, ma un po’ timido.' },
            { who: 'Marco', s: 'È vero. E poi è molto lavoratore!' },
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'Write the adjective in the right form.', items: [
            { q: 'Mia zia è molto ___.', base: 'generoso', a: ['generosa'], why: 'A woman: *-oso* becomes *-osa*.' },
            { q: 'Mia sorella è ___ e fa molto sport.', base: 'sportivo', a: ['sportiva'], why: 'A woman: *-o* becomes *-a*.' },
            { q: 'I miei colleghi sono molto ___.', base: 'lavoratore', a: ['lavoratori'], why: 'Several men: *-tore* becomes *-tori*.' },
            { q: 'Mia nonna è molto ___.', base: 'lavoratore', a: ['lavoratrice'], why: 'A woman: *-tore* becomes *-trice*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Find the opposite.', pairs: [
            ['pigro', 'lavoratore'],
            ['calmo', 'nervoso'],
            ['generoso', 'egoista'],
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Secondo me è molto divertente.', why: '*secondo me* starts the opinion.' },
            { a: 'Lei non è per niente pigra.', why: '*non … per niente* around the verb.' },
            { a: 'Mi sembra molto simpatica.', why: '*mi sembra* + adjective.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Mia sorella è molto ___.', o: ['generosa', 'generoso', 'generosi'], why: 'A woman: *generosa*.' },
            { q: 'Lui non è ___ pigro.', o: ['per niente', 'mai', 'niente'], why: '*per niente* means not at all.' },
            { q: 'Secondo me, loro sono ___.', o: ['simpatici', 'simpatico', 'simpatica'], why: 'Several men: *simpatici*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Più alto di, come',
      about: 'Compare people and things.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To compare two people or things, use **più** (more) or **meno** (less) before the adjective, then **di** or **che**. Use **di** when you compare two nouns or names: *Paolo è più alto di Marco. Marco è meno timido di Paolo.* Use **che** when you compare two adjectives, two verbs or two quantities: *È più simpatico che bello. È più bello parlare che scrivere.* For equality, use **(tanto) … quanto** or **così … come**: *Lia è (tanto) simpatica quanto sua sorella.*' },
          { t: 'table', caption: 'Comparing', explain: ['head', 'col1'], head: ['Italian', 'English'], rows: [
            ['più alto di Marco', 'taller than Marco'],
            ['meno alto di Marco', 'less tall than Marco, shorter than Marco'],
            ['(tanto) alto quanto Marco', 'as tall as Marco'],
            ['più simpatico che bello', 'nicer than he is handsome'],
            ['più tempo di me', 'more time than me'],
            ['meno lavoro di lui', 'less work than him'],
          ] },
          { t: 'tip', art: 'owl', md: 'After **di**, use a pronoun in the stress form: **di me, di te, di lui, di lei, di noi, di voi, di loro**. So say *È più alta di me*, not *più alta di io*. After **che**, the pronoun after a verb is the same as in a sentence: *È più facile per me che per lui.*' },
        ],
        [
          { t: 'text', md: 'Two words are irregular. **buono** (good) becomes **migliore** (better) and **buon** is also possible as **più buono** for taste: *Questa torta è migliore dell’altra.* **bene** (well) becomes **meglio**: *Canta meglio di me.* **cattivo** has **peggiore** and **male** has **peggio**. To say *the best*, use the article: *È il migliore amico di mio fratello.*' },
          { t: 'table', caption: 'buono and bene', explain: ['head'], head: ['Word', 'Comparative', 'The best'], rows: [
            ['buono (adjective)', 'migliore', 'il migliore'],
            ['bene (adverb)', 'meglio', 'il meglio'],
            ['cattivo (adjective)', 'peggiore', 'il peggiore'],
            ['male (adverb)', 'peggio', 'il peggio'],
            ['alto', 'più alto', 'il più alto'],
            ['piccolo', 'più piccolo', 'la più piccola'],
          ] },
          { t: 'examples', items: [
            { s: 'Mio fratello è **più sportivo di** me.', n: '*di* + stress pronoun.' },
            { s: 'Lei è **meno timida di** prima.', n: '*prima* means before.' },
            { s: 'I miei amici sono **simpatici come** te.', n: '*come* = as.' },
            { s: 'Questo caffè è **migliore dell’**altro.', n: '*migliore*, not *più buono*.' },
            { s: 'È **la più gentile** persona che conosco.', n: '*la più* + adjective: the most.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write più, meno, come, di or che.', items: [
            { q: 'Paolo ha trent’anni, Marco venticinque. Paolo è ___ vecchio di Marco.', a: ['più'], why: 'Thirty is more than twenty-five: *più*.' },
            { q: 'Lia e Anna hanno la stessa altezza. Lia è alta come ___.', a: ['Anna'], why: '*come* + name.' },
            { q: 'Lavoro meno ___ lui.', a: ['di'], why: '*meno … di* + pronoun.' },
            { q: 'È più simpatico ___ bello.', a: ['che'], why: '*che* compares two adjectives.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'Questo film è ___ dell’altro. (better)', o: ['migliore', 'più buono', 'meglio'], why: 'The adjective *buono* gives *migliore*.' },
            { q: 'Canta ___ di me. (better)', o: ['meglio', 'migliore', 'più bene'], why: 'The adverb *bene* gives *meglio*.' },
            { q: 'È più alta di ___.', o: ['me', 'io', 'mio'], why: 'After *di*, use a stress pronoun: *me*.' },
            { q: 'Le mie sorelle sono ___ gentili di me.', o: ['più', 'migliore', 'meglio'], why: '*più gentili di me*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Compare. Write one sentence.', items: [
            { q: 'Paolo è alto 1,85 m. Marco è alto 1,75 m. (più alto)', cue: 'Paolo', a: ['Paolo è più alto di Marco.', 'Marco è meno alto di Paolo.'], why: 'Compare with *più … di* or *meno … di*.' },
            { q: 'Lia ha 24 anni. Anna ha 24 anni. (uguale)', cue: 'Lia', a: ['Lia è grande come Anna.', 'Lia è tanto grande quanto Anna.', 'Lia ha gli stessi anni di Anna.'], why: 'Same age: *come* or *tanto … quanto*.' },
            { q: 'Questa torta è molto buona. L’altra è buona. (migliore)', cue: 'Questa torta', a: ['Questa torta è migliore dell’altra.'], why: '*migliore di*' },
          ] },
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: 'Si dice «più buono» per il cibo.', a: 'f', why: 'We say *migliore* (or *più buono* only for kindness or taste in speech).' },
            { q: 'Si dice «più alta di me» per una donna.', a: 't', why: 'The adjective agrees with the woman; *me* after *di*.' },
            { q: 'Si dice «più alta di io».', a: 'f', why: 'After *di*, use *me*, not *io*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Lo conosco, la vedo',
      about: 'Replace a noun with the direct object pronouns lo, la, li and le.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'A **direct object** is the person or thing a verb acts on: *Vedo Paolo. Conosco Maria.* To avoid repeating the noun, replace it with a **direct object pronoun**: **lo** (him, it, masculine), **la** (her, it, feminine), **li** (them, masculine), **le** (them, feminine). The pronoun goes **before** the verb: *Lo vedo. La conosco. Li amo.* Before a vowel, **lo** and **la** become **l’**: *L’amo.*' },
          { t: 'table', caption: 'Direct object pronouns', explain: ['head', 'col2'], head: ['Person', 'Pronoun', 'Meaning'], rows: [
            ['me', 'mi', 'me'],
            ['te', 'ti', 'you (tu)'],
            ['lui, lo', 'lo', 'him, it'],
            ['lei, la', 'la', 'her, it'],
            ['noi', 'ci', 'us'],
            ['voi', 'vi', 'you (voi)'],
            ['loro (m.)', 'li', 'them'],
            ['loro (f.)', 'le', 'them'],
          ] },
          { t: 'tip', art: 'owl', md: 'With two verbs, the pronoun can go before the first verb or **at the end of the infinitive**, joined to it: *Lo voglio vedere* or *Voglio vederlo* (I want to see him). In a negative sentence, **non** comes before the pronoun: *Non lo conosco. Non voglio vederla.*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Conosci Paolo? – Sì, **lo** conosco bene.', n: '*Paolo* → *lo*.' },
            { s: 'Vedi Maria? – No, non **la** vedo.', n: 'Negative: *non la vedo*.' },
            { s: 'Ama i suoi vicini. **Li** invita spesso.', n: '*i suoi vicini* → *li*.' },
            { s: 'Voglio **vederli** questo fine settimana.', n: 'The pronoun joins the infinitive.' },
            { s: '**Mi** chiama tutte le sere.', n: '*mi* before the verb.' },
          ] },
          { t: 'text', md: 'Learn the difference between **conoscere** and **sapere**. **conoscere** means to *know a person or a place*: *Conosco Paolo. Conosco Roma.* **sapere** means to *know a fact or how to do something*: *So il suo nome. So nuotare.* In the passato prossimo, the participle agrees with **lo, la, li, le**: *L’ho vista* (a woman), *Li ho visti* (men). You will practise this in the next unit.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right pronoun.', items: [
            { q: 'Conosci Paolo? – Sì, ___ conosco.', o: ['lo', 'la', 'li'], why: '*Paolo* is masculine: *lo*.' },
            { q: 'Vedi Maria? – No, non ___ vedo.', o: ['la', 'lo', 'le'], why: '*Maria* is a woman: *la*.' },
            { q: 'Inviti i tuoi amici? – Sì, ___ invito.', o: ['li', 'lo', 'la'], why: '*i tuoi amici* is masculine plural: *li*.' },
            { q: 'Ami questa canzone? – Sì, ___ adoro.', o: ['la', 'lo', 'le'], why: '*canzone* is feminine: *la* (or *l’adoro* with elision).' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Replace the words by a pronoun.', items: [
            { q: 'Conosco Sofia.', cue: 'La', a: ['La conosco.'], why: '*Sofia* → *la*.' },
            { q: 'Guarda il film.', cue: 'Lo', a: ['Lo guarda.'], why: '*il film* → *lo*.' },
            { q: 'Invita le sue amiche.', cue: 'Le', a: ['Le invita.'], why: '*le sue amiche* → *le*.' },
            { q: 'Non vediamo Karim.', cue: 'Non', a: ['Non lo vediamo.'], why: 'Negative: *non lo vediamo*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Non la conosco.', why: '*non* + pronoun + verb.' },
            { a: 'Voglio vederlo domani.', why: 'The pronoun joins the infinitive.' },
            { a: 'Mi chiamano sabato.', why: '*mi* before the verb.' },
          ] },
          { t: 'ex', kind: 'select', h: 'conoscere or sapere?', items: [
            { q: 'Io ___ Roma molto bene.', o: ['conosco', 'so', 'sappiamo'], why: 'A place: *conoscere*.' },
            { q: 'Tu ___ nuotare?', o: ['sai', 'conosci', 'conosce'], why: 'A skill: *sapere*.' },
            { q: 'Lei non ___ il mio indirizzo.', o: ['sa', 'conosce', 'sai'], why: 'A fact: *sapere*.' },
            { q: 'Noi ___ i suoi genitori.', o: ['conosciamo', 'sappiamo', 'conosce'], why: 'People: *conoscere*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Una lettera a un’amica',
      about: 'Read a letter about a new colleague.',
      art: 'owl',
      spreads: [
        [
          { t: 'reading', title: 'Cara Clara', md: 'Cara Clara,\n\nCome stai? Io sto bene. Ho un nuovo lavoro da un mese e sono molto contenta. I miei colleghi sono simpatici, soprattutto Karim. Lo conosco solo da una settimana, ma secondo me è molto divertente e molto generoso. È un po’ timido, ma è più lavoratore di me!\n\nLo vedo tutti i giorni in ufficio. Mi aiuta spesso con le e-mail e io lo invito a pranzo di tanto in tanto. Parliamo molto delle nostre famiglie. Sua sorella è più alta di lui, ed è sportiva come lui.\n\nE tu, hai notizie di tuo fratello? Voglio rivederlo presto. Scrivimi presto!\n\nUn abbraccio,\nNadia' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Nadia ha un nuovo lavoro da un mese.', a: 't', why: '*Ho un nuovo lavoro da un mese.*' },
            { q: 'Nadia conosce Karim da un anno.', a: 'f', why: 'She has known him for one week.' },
            { q: 'Karim è più lavoratore di Nadia.', a: 't', why: '*È più lavoratore di me!*' },
            { q: 'La sorella di Karim è meno sportiva di lui.', a: 'f', why: 'She is *sportiva come lui* (as sporty as him).' },
            { q: 'Karim abita a Milano.', a: 'ng', why: 'The letter does not say where Karim lives.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Com’è Karim?', o: ['Divertente, generoso e un po’ timido.', 'Pigro e calmo.', 'Sportivo e nervoso.'], why: '*molto divertente e molto generoso … un po’ timido*' },
            { q: 'Che cosa vuol dire «Lo vedo tutti i giorni»?', o: ['Vedo Karim ogni giorno.', 'Vedo l’ufficio.', 'Guardo la televisione.'], why: '*lo* replaces *Karim*.' },
            { q: 'Che cosa vuole fare Nadia presto?', o: ['Rivedere il fratello di Clara.', 'Cambiare lavoro.', 'Invitare Karim.'], why: '*Voglio rivederlo presto.* *lo* is Clara’s brother.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the letter.', items: [
            { q: 'Nadia ___ Karim a pranzo di tanto in tanto.', a: ['invita'], why: '*io lo invito a pranzo*; with *lei* the verb is the same here.' },
            { q: 'Karim ___ Nadia con le e-mail.', a: ['aiuta'], why: '*Mi aiuta spesso con le e-mail.*' },
            { q: 'Nadia scrive alla sua ___, Clara.', a: ['amica'], why: '*Cara Clara* is a friend.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Mia zia è molto ___.', o: ['generosa', 'generoso', 'generose'], why: 'A woman: *generosa*.' },
      { q: 'È più alto di ___.', o: ['me', 'io', 'mio'], why: 'After *di*, use *me*.' },
      { q: 'Questa torta è ___ dell’altra.', o: ['migliore', 'più buona', 'meglio'], why: '*buono* → *migliore*.' },
      { q: 'Conosci Maria? – Sì, ___ conosco.', o: ['la', 'lo', 'le'], why: '*Maria* → *la*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'È più simpatico ___ bello.', a: ['che'], why: '*che* compares two adjectives.' },
      { q: 'Lei è tanto alta ___ me.', a: ['quanto', 'come'], why: '*(tanto) … quanto* or *come*.' },
      { q: 'Noi ___ i suoi genitori. (conoscere)', a: ['conosciamo'], why: '*noi conosciamo*' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the opposite.', pairs: [
      ['pigro', 'lavoratore'],
      ['calmo', 'nervoso'],
      ['generoso', 'egoista'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Replace the words by a pronoun.', items: [
      { q: 'Vedo Paolo.', cue: 'Lo', a: ['Lo vedo.'], why: '*Paolo* → *lo*.' },
      { q: 'Invitano i loro vicini.', cue: 'Li', a: ['Li invitano.'], why: '*i loro vicini* → *li*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Non lo conosco.', why: '*non lo* + verb.' },
      { a: 'Lei è più lavoratrice di me.', why: '*più … di* + stress pronoun.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Questo film è [più buono] dell’altro.', a: ['migliore'], why: '*buono* → *migliore*.' },
      { s: 'Canta [migliore] di me.', a: ['meglio'], why: 'The adverb *bene* → *meglio*.' },
    ] },
  ],
};
