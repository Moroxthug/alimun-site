// Italian B2, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Relative clauses and long sentences',
  goal: 'Join ideas in longer sentences. Learn il quale, il cui, chi, ciò che, the congiuntivo in relative clauses, restrictive and appositive clauses, and reduced relative clauses.',
  art: 'dog',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['relative pronouns', 'il quale', 'il cui', 'congiuntivo in relative clauses', 'appositive clauses', 'reduced relative clauses'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Il quale, il cui, chi',
      about: 'Use the longer relative pronouns to make clear what you refer to.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'At B1 you learned **che** and **cui**. Now add more. **Il quale, la quale, i quali, le quali** replace *che* or *cui* and agree with the noun: *La ditta per la quale lavoro è grande.* They are common in formal writing and make clear which noun you mean. **Il cui, la cui, i cui, le cui** mean *whose* and agree with the thing owned, not with the owner: *L’autore il cui libro ho letto.* **Chi** means *he who, whoever*: *Chi studia impara.* **Ciò che, quello che** and **quanto** mean *what, all that*: *Ho comprato tutto ciò che serve.*' },
          { t: 'table', caption: 'More relative pronouns', explain: ['head', 'col1'], head: ['Pronoun', 'Agrees with', 'Example'], rows: [
            ['il quale / la quale / i quali / le quali', 'the noun it replaces', 'La ditta per la quale lavoro è grande.'],
            ['il cui / la cui / i cui / le cui', 'the thing owned', 'L’autore il cui libro ho letto.'],
            ['chi', 'no noun: a person in general', 'Chi studia impara in fretta.'],
            ['ciò che / quello che / quanto', 'no noun: a thing in general', 'Ho comprato tutto ciò che serve.'],
          ] },
          { t: 'tip', art: 'owl', md: '**Il cui** always has an article between *cui* and the noun it goes with: *la donna la cui figlia studia con me*, never *la donna cui figlia*. And **di cui** means *of which*: *la città di cui parlo*. Do not mix them up: *il cui libro* (whose book) and *il libro di cui parlo* (the book I talk about).' },
        ],
        [
          { t: 'examples', items: [
            { s: 'La ditta per **la quale** lavoro è molto grande.', n: '*La quale* agrees with *ditta*.' },
            { s: 'Ho parlato con un collega, **il quale** mi ha dato un consiglio.', n: '*Il quale* = *che*, but clearer.' },
            { s: 'Ecco l’autore **il cui** libro ho letto.', n: '*Il cui libro* = whose book.' },
            { s: '**Chi** studia ogni giorno impara in fretta.', n: '*Chi* = anyone who.' },
            { s: 'Ho comprato tutto **ciò che** serve.', n: '*Ciò che* = what.' },
            { s: 'Dimmi **quello che** pensi.', n: '*Quello che* = what.' },
          ] },
          { t: 'dialogue', title: 'I vicini', lines: [
            { who: 'Giulia', s: 'Hai conosciuto la vicina il cui figlio suona il violino?' },
            { who: 'Marco', s: 'Sì, è la signora con la quale ho parlato ieri.' },
            { who: 'Giulia', s: 'Chi vive vicino a lei, sente la musica ogni sera.' },
            { who: 'Marco', s: 'Per me va bene. Ho sentito quello che suona e mi piace.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing pronoun.', items: [
            { q: 'La ditta per ___ lavoro è molto grande. (the one that agrees with ditta)', a: ['la quale'], why: '*La quale* agrees with *ditta*.' },
            { q: 'I colleghi con ___ lavoro sono simpatici. (agrees with colleghi)', a: ['i quali'], why: '*I quali* agrees with *colleghi*.' },
            { q: 'Ecco l’autore ___ libro ho letto. (whose)', a: ['il cui'], why: '*Il cui libro* = whose book.' },
            { q: 'La donna ___ figlia studia con me abita qui. (whose)', a: ['la cui'], why: '*La cui figlia*; the article agrees with *figlia*.' },
            { q: '___ studia ogni giorno impara in fretta.', a: ['Chi'], why: '*Chi* = anyone who.' },
            { q: 'Ho comprato tutto ___ serve.', a: ['ciò che', 'quello che', 'quanto'], why: '*Ciò che* = what, all that.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right pronoun.', items: [
            { q: 'Ecco la signora ___ figlio suona il violino.', o: ['il cui', 'la cui', 'di cui'], why: 'The article agrees with the thing owned (*figlio*): *il cui*.' },
            { q: 'Questo è il libro ___ ti parlavo.', o: ['di cui', 'il cui', 'il quale'], why: '*Parlare di* → *di cui*.' },
            { q: 'Le colleghe con ___ lavoro sono gentili.', o: ['le quali', 'i quali', 'la quale'], why: '*Le quali* agrees with *colleghe*.' },
            { q: '___ vuole, può partecipare.', o: ['Chi', 'Quello', 'Cui'], why: '*Chi* = whoever.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Join the two sentences. Use the pronoun in brackets.', items: [
            { q: 'Conosco una donna. La figlia della donna studia medicina.', cue: 'Conosco una donna', a: ['Conosco una donna la cui figlia studia medicina.'], why: '*La cui figlia* = whose daughter.' },
            { q: 'Ho letto un libro. L’autore del libro vive a Roma.', cue: 'Ho letto un libro', a: ['Ho letto un libro il cui autore vive a Roma.'], why: '*Il cui autore* = whose author.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Ecco l’autore [che] libro ho letto.', a: ['il cui'], why: 'To say *whose*: *il cui*.' },
            { s: 'La donna [cui] figlia studia con me abita qui.', a: ['la cui'], why: '*Cui* needs the article: *la cui figlia*.' },
            { s: 'La ditta per [il quale] lavoro è grande.', a: ['la quale'], why: '*La quale* agrees with *ditta*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the pronoun with its meaning.', pairs: [
            ['chi', 'he who, whoever'],
            ['il cui', 'whose'],
            ['ciò che', 'what, the thing that'],
            ['di cui', 'of which'],
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Ecco l’autore il cui libro ho letto.', why: '*Il cui libro* = whose book.' },
            { a: 'Chi studia ogni giorno impara in fretta.', why: '*Chi* = whoever.' },
            { a: 'Ho comprato tutto ciò che serve.', why: '*Ciò che* = what.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Cerco una persona che sappia',
      about: 'Use the congiuntivo in a relative clause when the person or thing is not known or is unique.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'In a relative clause, the verb is in the **indicative** when the person or thing **exists and is known**: *Conosco una persona che sa il tedesco.* It is in the **congiuntivo** when the person or thing is **wanted but not known**: *Cerco una persona che sappia il tedesco.* The congiuntivo also follows a **superlative**, **primo, ultimo, unico, solo**: *È il film più bello che abbia mai visto. È l’unica persona che mi capisca.* And after a **negative or indefinite**: *Non conosco nessuno che parli cinese. C’è qualcuno che possa aiutarmi?*' },
          { t: 'table', caption: 'Known and not known', explain: ['head'], head: ['Known (indicative)', 'Not known or limited (subjunctive)'], rows: [
            ['Conosco una persona che sa il tedesco.', 'Cerco una persona che sappia il tedesco.'],
            ['Ho un amico che parla cinese.', 'Non conosco nessuno che parli cinese.'],
            ['Ho trovato un appartamento che ha due camere.', 'Cerco un appartamento che abbia due camere.'],
            ['C’è un negozio che vende questo.', 'C’è un negozio che venda questo?'],
          ] },
          { t: 'tip', art: 'owl', md: 'After **il più, il meno** and **l’unico, il solo, il primo, l’ultimo**, the congiuntivo is the normal choice when you give an opinion: *È il libro più bello che io abbia letto.* After **nessuno, niente, nulla**, always the congiuntivo: *Non c’è niente che mi piaccia.*' },
        ],
        [
          { t: 'dialogue', title: 'Cerco casa', lines: [
            { who: 'Giulia', s: 'Cerco un appartamento che abbia due camere e che sia vicino al centro.' },
            { who: 'Sara', s: 'Conosco un appartamento che ha due camere, ma non è vicino al centro.' },
            { who: 'Giulia', s: 'Non c’è niente che sia più vicino?' },
            { who: 'Sara', s: 'Non conosco nessuno che affitti in centro a un buon prezzo.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Known or not known? Sort the sentences.', explain: ['groups'], groups: ['Known (indicative)', 'Not known (subjunctive)'], items: [
            { s: 'Conosco una persona che sa il tedesco.', g: 0, why: 'The person exists and is known.' },
            { s: 'Cerco una persona che sappia il tedesco.', g: 1, why: 'The person is wanted but not known.' },
            { s: 'Ho un amico che parla cinese.', g: 0, why: 'The friend exists.' },
            { s: 'Non conosco nessuno che parli cinese.', g: 1, why: 'After *nessuno*, the congiuntivo.' },
            { s: 'C’è qualcuno che possa aiutarmi?', g: 1, why: 'A question about someone who may not exist.' },
            { s: 'Ho trovato un appartamento che ha due camere.', g: 0, why: 'The flat exists.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Cerco una persona che ___ il tedesco.', o: ['sappia', 'sa', 'saprà'], why: 'Wanted but not known: the congiuntivo.' },
            { q: 'Conosco una persona che ___ il tedesco.', o: ['sa', 'sappia', 'sapesse'], why: 'The person exists: the indicative.' },
            { q: 'È il film più bello che io ___ mai visto.', o: ['abbia', 'ho', 'avrei'], why: 'After a superlative: the congiuntivo.' },
            { q: 'Non c’è niente che mi ___ .', o: ['piaccia', 'piace', 'piacerebbe'], why: 'After *niente*: the congiuntivo.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Cerco un appartamento che ___ due camere. (avere)', a: ['abbia'], why: 'Wanted but not known: *abbia*.' },
            { q: 'Ho un amico che ___ cinese. (parlare)', a: ['parla'], why: 'The friend exists: *parla*.' },
            { q: 'Non conosco nessuno che ___ cinese. (parlare)', a: ['parli'], why: 'After *nessuno*: *parli*.' },
            { q: 'È l’unica persona che mi ___ . (capire)', a: ['capisca'], why: 'After *l’unica*: *capisca*.' },
            { q: 'C’è qualcuno che ___ aiutarmi? (potere)', a: ['possa'], why: '*Qualcuno che* in a question: *possa*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say that you are looking for it. Start with Cerco.', items: [
            { q: 'Conosco una persona che sa il tedesco.', cue: 'Cerco', a: ['Cerco una persona che sappia il tedesco.'], why: 'Wanted but not known: *sappia*.' },
            { q: 'Ho trovato un appartamento che ha due camere.', cue: 'Cerco', a: ['Cerco un appartamento che abbia due camere.'], why: '*Abbia*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Cerco una persona che [sa] il tedesco.', a: ['sappia'], why: 'Wanted but not known: *sappia*.' },
            { s: 'Non conosco nessuno che [parla] cinese.', a: ['parli'], why: 'After *nessuno*: congiuntivo.' },
            { s: 'È il libro più bello che [ho] mai letto.', a: ['abbia'], why: 'After a superlative: *abbia*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Cerco una persona che sappia il tedesco.', why: 'A relative clause with the congiuntivo.' },
            { a: 'Non c’è niente che mi piaccia.', why: 'After *niente*: congiuntivo.' },
            { a: 'È il film più bello che abbia mai visto.', why: 'After a superlative: congiuntivo.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Clauses in writing',
      about: 'Tell restrictive and appositive clauses apart, and shorten relative clauses.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A relative clause can be **restrictive** (no commas) or **appositive** (between commas). *Gli studenti che hanno studiato hanno superato l’esame*: only the students who studied passed. *Gli studenti, che hanno studiato, hanno superato l’esame*: all the students studied and passed. The comma changes the meaning. A relative clause can also refer to a **whole idea**: **il che** or **cosa che**: *Marco è partito, il che mi ha sorpreso. Ha vinto, cosa che nessuno si aspettava.*' },
          { t: 'text', md: 'In writing, you can **shorten** a relative clause with a **past participle**: *Gli studenti iscritti al corso ricevono una mail* (= che sono iscritti). *La casa costruita nel 1950 è in vendita* (= che è stata costruita). With a **gerundio** or a present participle, in formal style: *Le persone aventi diritto* (= che hanno diritto).' },
          { t: 'table', caption: 'Shortening a relative clause', explain: ['head'], head: ['Full clause', 'Shortened'], rows: [
            ['Gli studenti che sono iscritti al corso', 'Gli studenti iscritti al corso'],
            ['La casa che è stata costruita nel 1950', 'La casa costruita nel 1950'],
            ['La lettera che è arrivata ieri', 'La lettera arrivata ieri'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'Gli studenti **che hanno studiato** hanno superato l’esame.', n: 'Restrictive: only some.' },
            { s: 'Gli studenti, **che hanno studiato**, hanno superato l’esame.', n: 'Appositive: all of them.' },
            { s: 'Marco è partito, **il che** mi ha sorpreso.', n: '*Il che* = and this fact.' },
            { s: 'Ha vinto, **cosa che** nessuno si aspettava.', n: '*Cosa che* = and this fact.' },
            { s: 'La casa **costruita nel 1950** è in vendita.', n: 'A shortened clause.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'What does the sentence mean?', items: [
            { q: 'Gli studenti, che hanno studiato, hanno superato l’esame.', o: ['All the students studied and passed.', 'Only the students who studied passed.', 'Nobody passed.'], why: 'The commas make the clause extra information: all of them.' },
            { q: 'Gli studenti che hanno studiato hanno superato l’esame.', o: ['Only the students who studied passed.', 'All the students studied and passed.', 'Nobody passed.'], why: 'With no commas, the clause limits the group.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Marco è partito, ___ mi ha sorpreso. (il …)', a: ['il che'], why: '*Il che* refers to the whole idea.' },
            { q: 'Ha vinto, ___ che nessuno si aspettava.', a: ['cosa'], why: '*Cosa che* refers to the whole idea.' },
            { q: 'Gli studenti ___ al corso ricevono una mail. (iscritto)', a: ['iscritti'], why: 'A shortened clause: *iscritti*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Shorten the relative clause.', items: [
            { q: 'Gli studenti che sono iscritti al corso ricevono una mail.', a: ['Gli studenti iscritti al corso ricevono una mail.'], why: 'Remove *che sono*.' },
            { q: 'La casa che è stata costruita nel 1950 è in vendita.', a: ['La casa costruita nel 1950 è in vendita.'], why: 'Remove *che è stata*.' },
            { q: 'La lettera che è arrivata ieri è per te.', a: ['La lettera arrivata ieri è per te.'], why: 'Remove *che è*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Gli studenti [iscritto] al corso ricevono una mail.', a: ['iscritti'], why: 'The participle agrees: *iscritti*.' },
            { s: 'La casa [costruito] nel 1950 è in vendita.', a: ['costruita'], why: 'The participle agrees with *casa*: *costruita*.' },
            { s: 'Marco è partito, [che] mi ha sorpreso.', a: ['il che'], why: 'To refer to the whole idea: *il che*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Marco è partito, il che mi ha sorpreso.', why: '*Il che* refers to the whole idea.' },
            { a: 'La casa costruita nel 1950 è in vendita.', why: 'A shortened clause.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Un quartiere che è cambiato',
      about: 'Read an article about a city district that changed.',
      art: 'dog',
      spreads: [
        [
          { t: 'reading', title: 'Il quartiere del porto', md: 'Trent’anni fa la zona del porto era un luogo che nessuno voleva visitare. I vecchi magazzini, i cui muri erano coperti di polvere, erano chiusi da anni. Poi il comune, il quale aveva ricevuto dei fondi, decise di trasformarli.\n\nOggi nei magazzini ristrutturati si trovano biblioteche, studi di artisti e caffè dove si incontrano studenti e turisti. Chi lo visita oggi difficilmente immagina com’era.\n\nÈ il quartiere più vivace che la città abbia mai avuto, ma non tutti sono contenti: gli affitti, che sono aumentati, hanno costretto alcune famiglie a trasferirsi, il che ha sollevato molte critiche.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Trent’anni fa la zona del porto era un luogo che nessuno voleva visitare.', a: 't', why: '*Un luogo che nessuno voleva visitare.*' },
            { q: 'I magazzini erano aperti da molti anni.', a: 'f', why: 'They had been closed for years.' },
            { q: 'Oggi nei magazzini ci sono biblioteche e caffè.', a: 't', why: '*Biblioteche, studi di artisti e caffè.*' },
            { q: 'Il comune ha speso tutti i fondi per un parco.', a: 'ng', why: 'The text does not say what else the funds covered.' },
            { q: 'Gli affitti sono aumentati.', a: 't', why: '*Gli affitti, che sono aumentati.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Come erano i muri dei vecchi magazzini?', o: ['Coperti di polvere.', 'Dipinti di nuovo.', 'Molto alti.'], why: '*I vecchi magazzini, i cui muri erano coperti di polvere.*' },
            { q: 'Che cosa decise di fare il comune?', o: ['Trasformare i magazzini.', 'Venderli.', 'Demolirli.'], why: '*Decise di trasformarli.*' },
            { q: 'Perché non tutti sono contenti?', o: ['Gli affitti sono aumentati.', 'Ci sono troppi turisti.', 'Il quartiere è silenzioso.'], why: '*Gli affitti, che sono aumentati, hanno costretto alcune famiglie a trasferirsi.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the relative pronouns.', items: [
            { s: 'I vecchi magazzini, [i cui] muri erano coperti di polvere, erano chiusi.', why: '*I cui muri* = whose walls.' },
            { s: 'Il comune, [il quale] aveva ricevuto dei fondi, decise di trasformarli.', why: '*Il quale* = *che*, in formal style.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'I magazzini, ___ muri erano coperti di polvere, erano chiusi. (whose)', a: ['i cui'], why: '*I cui muri*; the article agrees with *muri*.' },
            { q: 'È il quartiere più vivace che la città ___ mai avuto. (avere)', a: ['abbia'], why: 'After a superlative: *abbia*.' },
            { q: 'Gli affitti sono aumentati, ___ ha sollevato molte critiche.', a: ['il che'], why: '*Il che* refers to the whole idea.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Chi lo visita oggi difficilmente immagina com’era.', why: '*Chi* = whoever.' },
            { a: 'Il comune, il quale aveva ricevuto dei fondi, decise di trasformarli.', why: '*Il quale* in an appositive clause.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'La ditta per ___ lavoro è molto grande.', o: ['la quale', 'il quale', 'i quali'], why: '*La quale* agrees with *ditta*.' },
      { q: 'Ecco l’autore ___ libro ho letto.', o: ['il cui', 'che', 'la cui'], why: '*Il cui libro* = whose book.' },
      { q: 'Cerco una persona che ___ il tedesco.', o: ['sappia', 'sa', 'saprà'], why: 'Wanted but not known: congiuntivo.' },
      { q: '___ studia ogni giorno impara in fretta.', o: ['Chi', 'Quello', 'Cui'], why: '*Chi* = whoever.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'La donna ___ figlia studia con me abita qui. (whose)', a: ['la cui'], why: '*La cui figlia*.' },
      { q: 'È il film più bello che io ___ mai visto. (avere)', a: ['abbia'], why: 'After a superlative: congiuntivo.' },
      { q: 'Marco è partito, ___ mi ha sorpreso.', a: ['il che'], why: '*Il che* refers to the whole idea.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the pronoun with its meaning.', pairs: [
      ['chi', 'he who, whoever'],
      ['il cui', 'whose'],
      ['ciò che', 'what, the thing that'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence.', items: [
      { q: 'Conosco una donna. La figlia della donna studia medicina.', cue: 'Conosco una donna', a: ['Conosco una donna la cui figlia studia medicina.'], why: '*La cui figlia* = whose daughter.' },
      { q: 'La casa che è stata costruita nel 1950 è in vendita.', a: ['La casa costruita nel 1950 è in vendita.'], why: 'Remove *che è stata*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Cerco una persona che [sa] il tedesco.', a: ['sappia'], why: 'Wanted but not known: congiuntivo.' },
      { s: 'Ecco l’autore [che] libro ho letto.', a: ['il cui'], why: 'To say *whose*: *il cui*.' },
    ] },
  ],
};
