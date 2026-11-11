// Italian C1, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Order and emphasis',
  goal: 'Put the stress where you want it with word order and cleft sentences. Learn dislocation to the left and to the right, cleft sentences with è … che and quello che, and the features of spoken Italian that you should not use in careful writing.',
  art: 'cat',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['dislocation', 'cleft sentences', 'emphasis', 'word order', 'spoken Italian'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'La dislocazione',
      about: 'Move an element to the front or to the end and repeat it with a pronoun.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Italian puts the **topic** of a sentence first. In a **left dislocation** the object comes first and a **pronoun repeats it** before the verb: *Il libro l’ho letto.* *Anna l’ho vista.* In a **right dislocation** the pronoun comes first and the noun follows as an afterthought: *L’ho letto, il libro.* *L’ho vista, Anna.* The same works with **ne**: *Di questo ne parliamo domani.* When the pronoun **lo, la, li, le** comes before a compound tense, the **participle agrees** with it: *Anna l’ho vista, le mele le ho comprate.*' },
          { t: 'table', caption: 'Neutral and dislocated', explain: ['head'], head: ['Neutral', 'Left dislocation', 'Right dislocation'], rows: [
            ['Ho letto il libro.', 'Il libro l’ho letto.', 'L’ho letto, il libro.'],
            ['Ho visto Anna.', 'Anna l’ho vista.', 'L’ho vista, Anna.'],
            ['Ho comprato le mele.', 'Le mele le ho comprate.', 'Le ho comprate, le mele.'],
            ['Parliamo di questo domani.', 'Di questo ne parliamo domani.', 'Ne parliamo domani, di questo.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Dislocation is **very common in speech**. In writing it appears in speeches, columns and fiction, but a formal report uses the **neutral order**. The pronoun is **compulsory** with a definite noun: you cannot say *Il libro ho letto* in careful Italian. With a quantity, use **ne**: *Di libri ne ho letti tre.* In Switzerland the same patterns are used.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Il libro l’**ho letto.', n: 'Left dislocation.' },
            { s: '**Anna l’**ho **vista**.', n: 'The participle agrees with *l’* (Anna).' },
            { s: '**Le mele le** ho **comprate**.', n: 'The participle agrees with *le*.' },
            { s: '**Di questo ne** parliamo domani.', n: 'Left dislocation with *ne*.' },
            { s: '**L’**ho **vista**, **Anna**.', n: 'Right dislocation.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the neutral sentence with the dislocated one.', pairs: [
            ['Ho letto il libro.', 'Il libro l’ho letto.'],
            ['Ho visto Anna.', 'Anna l’ho vista.'],
            ['Ho comprato le mele.', 'Le mele le ho comprate.'],
            ['Parliamo di questo domani.', 'Di questo ne parliamo domani.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing pronoun or participle.', items: [
            { q: 'Anna ___ ho vista. (la)', a: ['l’', "l'"], why: '*La* becomes *l’* before *ho*.' },
            { q: 'Le mele ___ ho comprate. (le)', a: ['le'], why: '*Le mele le ho comprate*.' },
            { q: 'Di questo ___ parliamo domani.', a: ['ne'], why: '*Parlare di* → *ne*.' },
            { q: 'Il libro l’ho ___. (leggere)', a: ['letto'], why: 'The participle agrees with *il libro*: *letto*.' },
            { q: 'Anna l’ho ___. (vedere)', a: ['vista'], why: 'The participle agrees with *Anna*: *vista*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Le fotografie le ho ___.', o: ['viste', 'visto', 'viste a'], why: 'The participle agrees with *le fotografie*.' },
            { q: 'Il caffè l’ho ___.', o: ['bevuto', 'bevuta', 'bevuti'], why: 'Masculine singular: *bevuto*.' },
            { q: 'Di questo ___ parliamo domani.', o: ['ne', 'ci', 'lo'], why: '*Parlare di questo* → *ne*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Begin with the words in brackets.', items: [
            { q: 'Ho letto il libro.', cue: 'Il libro', a: ['Il libro l’ho letto.', "Il libro l'ho letto."], why: 'Left dislocation with *lo*.' },
            { q: 'Ho visto Anna.', cue: 'Anna', a: ['Anna l’ho vista.', "Anna l'ho vista."], why: 'The participle agrees with *Anna*.' },
            { q: 'Ho comprato le mele.', cue: 'Le mele', a: ['Le mele le ho comprate.'], why: 'The participle agrees with *le mele*.' },
            { q: 'Parliamo di questo domani.', cue: 'Di questo', a: ['Di questo ne parliamo domani.'], why: 'Left dislocation with *ne*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right words.', items: [
            { s: 'Anna [ho vista].', a: ['l’ho vista', "l'ho vista"], why: 'The pronoun repeats the object.' },
            { s: 'Le mele le ho [comprato].', a: ['comprate'], why: 'The participle agrees with *le mele*.' },
            { s: 'Di questo [parliamo] domani.', a: ['ne parliamo'], why: 'Left dislocation needs *ne*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Il libro l’ho letto ieri sera.', why: 'Left dislocation.' },
            { a: 'L’ho vista, Anna, al mercato.', why: 'Right dislocation.' },
            { a: 'Le mele le ho comprate stamattina.', why: 'Left dislocation.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Le frasi scisse',
      about: 'Stress one part of the sentence with è … che, quello che and chi.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'A **cleft sentence** (frase scissa) puts the stressed element after **è**. **È … che** stresses the subject or an adverbial: *È Marco che ha chiamato. È a Roma che vivo.* **È stato lui a** + infinitive stresses the subject: *È stato lui a dirlo.* **Quello che** or **ciò che** + clause + **è** stresses what follows: *Quello che mi irrita è la lentezza. Ciò che conta è partecipare.* **Sono io che** stresses *I*: *Sono io che ho sbagliato.* **Chi** + verb + verb speaks of anyone: *Chi dice questo sbaglia.*' },
          { t: 'table', caption: 'Cleft sentences', explain: ['head', 'col1'], head: ['Pattern', 'What it stresses', 'Example'], rows: [
            ['è … che', 'the subject or a place', 'È Marco che ha chiamato.'],
            ['è … che', 'the subject or a place', 'È a Roma che vivo.'],
            ['è stato … a + infinitive', 'the subject', 'È stato lui a dirlo.'],
            ['quello che / ciò che … è', 'what follows', 'Quello che mi irrita è la lentezza.'],
            ['sono io che', 'I', 'Sono io che ho sbagliato.'],
            ['chi … , …', 'anyone who', 'Chi dice questo sbaglia.'],
          ] },
          { t: 'tip', art: 'owl', md: 'After **sono io che** the verb agrees with **io**: *Sono io che ho sbagliato*, not *Sono io che ha sbagliato* (although you hear it). With a plural, use **sono**: *Sono loro che hanno chiamato.* Do not put a comma before **che**. In **è … che**, the verb tense of **è** can change: *Era Marco che chiamava.* Cleft sentences are the same in Switzerland and in Italy.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**È Marco che** ha chiamato.', n: 'Stresses the person.' },
            { s: '**È a Roma che** vivo.', n: 'Stresses the place.' },
            { s: '**È stato lui a** dirlo.', n: 'Stresses the subject.' },
            { s: '**Quello che** mi irrita **è** la lentezza.', n: 'Stresses what annoys me.' },
            { s: '**Sono io che** ho sbagliato.', n: 'Stresses *I*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Neutral or emphatic? Sort the sentences.', groups: ['neutral', 'emphatic'], explain: ['groups'], items: [
            { s: 'Marco ha chiamato.', g: 0, why: 'A plain statement.' },
            { s: 'È Marco che ha chiamato.', g: 1, why: 'A cleft sentence.' },
            { s: 'La lentezza mi irrita.', g: 0, why: 'A plain statement.' },
            { s: 'Quello che mi irrita è la lentezza.', g: 1, why: 'A cleft sentence.' },
            { s: 'Vivo a Roma.', g: 0, why: 'A plain statement.' },
            { s: 'È a Roma che vivo.', g: 1, why: 'A cleft sentence.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'È Marco ___ ha chiamato.', a: ['che'], why: '*È … che* stresses the subject.' },
            { q: 'È stato lui ___ dirlo.', a: ['a'], why: '*È stato lui a* + infinitive.' },
            { q: 'Quello che mi irrita ___ la lentezza.', a: ['è'], why: '*Quello che … è …*' },
            { q: 'Sono io ___ ho sbagliato.', a: ['che'], why: '*Sono io che* + verb with *io*.' },
            { q: '___ dice questo sbaglia.', a: ['Chi'], why: '*Chi* speaks of anyone.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Sono io che ___ sbagliato.', o: ['ho', 'ha', 'hai'], why: 'The verb agrees with *io*.' },
            { q: 'Sono loro che ___ chiamato.', o: ['hanno', 'ha', 'ho'], why: 'Third person plural.' },
            { q: 'È a Roma ___ vivo.', o: ['che', 'dove', 'cui'], why: '*È … che*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Stress the part with the words in brackets.', items: [
            { q: 'Marco ha chiamato.', cue: 'È', a: ['È Marco che ha chiamato.'], why: 'A cleft sentence with *è … che*.' },
            { q: 'La lentezza mi irrita.', cue: 'Quello', a: ['Quello che mi irrita è la lentezza.'], why: '*Quello che … è …*' },
            { q: 'Io ho sbagliato.', cue: 'Sono', a: ['Sono io che ho sbagliato.'], why: '*Sono io che*.' },
            { q: 'Vivo a Roma.', cue: 'È', a: ['È a Roma che vivo.'], why: 'A cleft sentence with a place.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Sono io che [ha] sbagliato.', a: ['ho'], why: 'The verb agrees with *io*.' },
            { s: 'Quello che mi irrita [sono] la lentezza.', a: ['è'], why: 'One thing: *è*.' },
            { s: 'È Marco [a] ha chiamato.', a: ['che'], why: '*È … che* with a verb.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'È Marco che ha chiamato.', why: '*È … che* + verb.' },
            { a: 'Quello che mi irrita è la lentezza.', why: '*Quello che … è …*' },
            { a: 'Sono io che ho sbagliato.', why: '*Sono io che* + verb.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'L’italiano neostandard',
      about: 'Recognise the features of spoken Italian and know what to avoid in careful writing.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Spoken Italian has changed. The **neostandard** is the variety that most educated speakers use every day. It uses **gli** for *a loro*: *Gli ho scritto* (I wrote to them). It uses **lui, lei** and **loro** as subjects: *Lui ha detto di no.* But some spoken features are **not accepted** in careful writing: **che** used for many relations (*Il ragazzo che gli ho dato il libro*), the repeated **a me mi** (*A me mi piace*), **ci** for *avere* (*Ci ho fame*) and **noi si** for *noi* (*Noi si va*). In writing, use the standard forms: *Il ragazzo a cui ho dato il libro, A me piace, Ho fame, Noi andiamo.*' },
          { t: 'table', caption: 'Spoken and careful written Italian', explain: ['head'], head: ['Spoken', 'Careful written'], rows: [
            ['Il ragazzo che gli ho dato il libro', 'Il ragazzo a cui ho dato il libro'],
            ['A me mi piace il mare.', 'A me piace il mare. / Mi piace il mare.'],
            ['Ci ho fame.', 'Ho fame.'],
            ['Noi si va al mare.', 'Noi andiamo al mare.'],
            ['Gli ho detto di venire. (a loro)', 'Ho detto loro di venire.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Many of these forms are **widely understood** and can be heard on television, but they are **not for exams or formal letters**. **Gli** for *a loro* is now accepted even in writing, though *loro* remains the careful form. **Lui** and **lei** as subjects are standard, and **egli** and **ella** are literary or very old-fashioned. In **Tuscany**, *noi si va* is part of the local speech.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Il ragazzo **a cui** ho dato il libro è mio cugino.', n: 'Careful written.' },
            { s: '**A me piace** il mare.', n: 'Careful written.' },
            { s: '**Ho fame.**', n: 'Careful written.' },
            { s: '**Noi andiamo** al mare.', n: 'Careful written.' },
            { s: 'Ho detto **loro** di venire.', n: 'The careful form of *a loro*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Accepted in writing or only spoken? Sort the sentences.', groups: ['accepted in writing', 'only spoken'], explain: ['groups'], items: [
            { s: 'Ho detto loro di venire.', g: 0, why: 'The careful form.' },
            { s: 'A me mi piace il mare.', g: 1, why: 'The pronoun is repeated.' },
            { s: 'Mi piace il mare.', g: 0, why: 'The standard form.' },
            { s: 'Il ragazzo che gli ho dato il libro.', g: 1, why: '*Che* is used for the wrong relation.' },
            { s: 'Il ragazzo a cui ho dato il libro.', g: 0, why: 'The standard form.' },
            { s: 'Ci ho fame.', g: 1, why: '*Ci* before *avere* is spoken.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the careful written form.', items: [
            { q: 'Which sentence is correct in a formal letter?', o: ['Il ragazzo a cui ho dato il libro', 'Il ragazzo che gli ho dato il libro', 'Il ragazzo che ci ho dato il libro'], why: 'The relation needs *a cui*.' },
            { q: 'Which sentence is correct in writing?', o: ['Mi piace il mare.', 'A me mi piace il mare.', 'Ci piace a me il mare.'], why: 'No repeated pronoun.' },
            { q: 'Which sentence is correct in writing?', o: ['Ho fame.', 'Ci ho fame.', 'Ce l’ho fame.'], why: 'The standard form.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Il ragazzo ___ cui ho dato il libro è mio cugino.', a: ['a'], why: '*A cui* = to whom.' },
            { q: 'Mi ___ il mare. (piacere, presente)', a: ['piace'], why: '*Mi piace* + singular.' },
            { q: 'Noi ___ al mare. (andare, standard)', a: ['andiamo'], why: 'The standard form.' },
            { q: 'Ho detto ___ di venire. (a loro, careful)', a: ['loro'], why: 'The careful form of *a loro*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence in careful written Italian.', items: [
            { q: 'A me mi piace il mare.', cue: 'A me', a: ['A me piace il mare.'], why: 'No repeated pronoun.' },
            { q: 'Noi si va al mare.', cue: 'Noi', a: ['Noi andiamo al mare.'], why: 'The standard form.' },
            { q: 'Ci ho fame.', cue: 'Ho', a: ['Ho fame.'], why: 'The standard form.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right words.', items: [
            { s: 'Il ragazzo [che gli] ho dato il libro è mio cugino. (careful)', a: ['a cui'], why: 'The relation needs *a cui*.' },
            { s: 'A me [mi piace] il mare. (careful)', a: ['piace'], why: 'No repeated pronoun: *a me piace*.' },
            { s: '[Ci ho] fame. (careful)', a: ['Ho'], why: 'The standard form.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Un piccolo discorso',
      about: 'Read a short speech and notice how it puts the stress.',
      art: 'cat',
      spreads: [
        [
          { t: 'reading', title: 'Discorso per la festa di quartiere', md: 'Care vicine, cari vicini, ciò che ci unisce oggi non è l’occasione, ma lo stare insieme. Sono le piccole cose che rendono vivo un quartiere: un saluto sulle scale, una torta condivisa, un orecchio attento. Questo lo abbiamo imparato negli ultimi anni.\n\nAi volontari, li ringrazio di cuore. Senza di loro questa festa non ci sarebbe stata. Quello che mi auguro è che si continui a festeggiare insieme anche domani. Chi ha partecipato una volta, lo sa: c’è tanta gioia.\n\nIeri abbiamo montato le bancarelle, oggi inauguriamo. Vi auguro una splendida giornata.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Il quartiere è vivo grazie alle piccole cose.', a: 't', why: '*Sono le piccole cose che rendono vivo un quartiere.*' },
            { q: 'L’oratore ringrazia soprattutto i volontari.', a: 't', why: '*Ai volontari, li ringrazio di cuore.*' },
            { q: 'L’occasione è la cosa più importante.', a: 'f', why: '*Non è l’occasione, ma lo stare insieme.*' },
            { q: 'Le bancarelle sono state montate ieri.', a: 't', why: '*Ieri abbiamo montato le bancarelle.*' },
            { q: 'La festa si ripete ogni anno.', a: 'ng', why: 'The speech does not say.' },
            { q: 'Chi ha partecipato una volta conosce la gioia della festa.', a: 't', why: '*Chi ha partecipato una volta, lo sa.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Che cosa ci unisce?', o: ['Lo stare insieme.', 'L’occasione.', 'La torta.'], why: '*Ciò che ci unisce … lo stare insieme.*' },
            { q: 'Che cosa rende vivo un quartiere?', o: ['Le piccole cose.', 'I grandi eventi.', 'I nuovi edifici.'], why: '*Sono le piccole cose che rendono vivo un quartiere.*' },
            { q: 'Chi ringrazia l’oratore?', o: ['I volontari.', 'I vicini di casa soltanto.', 'Il comune.'], why: '*Ai volontari, li ringrazio.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the cleft or dislocated parts.', items: [
            { s: '[Ciò che ci unisce oggi] non è l’occasione, ma lo stare insieme.', why: 'A cleft sentence with *ciò che*.' },
            { s: '[Sono le piccole cose che] rendono vivo un quartiere.', why: 'A cleft sentence with *sono … che*.' },
            { s: '[Ai volontari, li] ringrazio di cuore. [Questo lo] abbiamo imparato.', why: 'Two left dislocations.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Ai volontari, ___ ringrazio di cuore.', a: ['li'], why: 'The pronoun repeats *i volontari*.' },
            { q: 'Sono le piccole cose ___ rendono vivo un quartiere.', a: ['che'], why: '*Sono … che*.' },
            { q: 'Chi ha partecipato una volta, ___ sa.', a: ['lo'], why: 'The pronoun repeats the idea.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Questo lo abbiamo imparato negli ultimi anni.', why: 'Left dislocation.' },
            { a: 'Quello che mi auguro è che si continui a festeggiare.', why: '*Quello che … è che …*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Anna ___ ho vista.', o: ['l’', 'la', 'le'], why: '*La* becomes *l’* before *ho*.' },
      { q: 'Di questo ___ parliamo domani.', o: ['ne', 'ci', 'lo'], why: '*Parlare di questo* → *ne*.' },
      { q: 'È Marco ___ ha chiamato.', o: ['che', 'a', 'di'], why: '*È … che*.' },
      { q: 'Quello che mi irrita ___ la lentezza.', o: ['è', 'sono', 'era'], why: '*Quello che … è …*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Le mele ___ ho comprate.', a: ['le'], why: '*Le mele le ho comprate*.' },
      { q: 'Sono io ___ ho sbagliato.', a: ['che'], why: '*Sono io che*.' },
      { q: 'È stato lui ___ dirlo.', a: ['a'], why: '*È stato lui a* + infinitive.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the sentence with the device.', pairs: [
      ['È Marco che ha chiamato.', 'a cleft sentence'],
      ['Anna l’ho vista.', 'left dislocation'],
      ['L’ho vista, Anna.', 'right dislocation'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Begin with the words in brackets.', items: [
      { q: 'Ho letto il libro.', cue: 'Il libro', a: ['Il libro l’ho letto.', "Il libro l'ho letto."], why: 'Left dislocation with *lo*.' },
      { q: 'Marco ha chiamato.', cue: 'È', a: ['È Marco che ha chiamato.'], why: 'A cleft sentence with *è … che*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right words.', items: [
      { s: 'Anna [ho vista].', a: ['l’ho vista', "l'ho vista"], why: 'The pronoun repeats the object.' },
      { s: 'Il ragazzo [che gli] ho dato il libro è mio cugino. (careful)', a: ['a cui'], why: 'The relation needs *a cui*.' },
    ] },
  ],
};
