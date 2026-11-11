// Italian B1, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Work and careers',
  goal: 'Talk about jobs and experience, join sentences with relative pronouns and write a formal e-mail. Learn da and per with time, che, cui and dove, and the formal register.',
  art: 'mug',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['jobs', 'interview', 'cv', 'relative pronouns', 'formal register', 'cover email'], goals: ['foundations', 'professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Jobs, experience and the interview',
      about: 'Talk about your work, your skills and how long you have been doing something.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'At a job interview, people ask about your **experience** and your **skills**. To say how long something has been going on, use the present with **da**: *Lavoro in questa agenzia da un anno.* To say how long something lasted and is finished, use the passato prossimo with **per**: *Ho lavorato per tre anni in un negozio.* To say what you do, use **mi occupo di** (I deal with): *Mi occupo dei clienti.* To say what you can do, use **so** + infinitive: *So usare il computer.*' },
          { t: 'table', caption: 'Work words', explain: ['head', 'col1'], head: ['Word', 'Meaning'], rows: [
            ['il colloquio', 'job interview'],
            ['il curriculum', 'CV'],
            ['l’esperienza', 'experience'],
            ['le competenze', 'skills'],
            ['lo stipendio', 'salary'],
            ['il contratto', 'contract'],
            ['l’orario', 'working hours'],
            ['a tempo pieno / part-time', 'full-time / part-time'],
            ['candidarsi', 'to apply'],
            ['assumere', 'to hire'],
          ] },
          { t: 'tip', art: 'owl', md: 'Compare **da** and **per**. *Lavoro qui da due anni* means I still work here. *Ho lavorato qui per due anni* means I do not work here any more. In a CV or an interview, jobs are named without an article: *Sono commesso. Lavoro come cameriera.*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Lavoro in un’agenzia di viaggi **da** un anno.', n: 'I still work there.' },
            { s: 'Ho lavorato **per** tre anni come commesso.', n: 'A finished period.' },
            { s: 'Mi **occupo** dei clienti e preparo i preventivi.', n: '*Occuparsi di* = to deal with.' },
            { s: '**So usare** bene il computer.', n: '*So* + infinitive = I know how to.' },
            { s: 'Mi sono **candidato** per questo posto.', n: '*Candidarsi* = to apply.' },
          ] },
          { t: 'dialogue', title: 'Il colloquio', lines: [
            { who: 'Sara', s: 'Buongiorno, si accomodi. Mi parli della sua esperienza.' },
            { who: 'Marco', s: 'Ho lavorato per tre anni come commesso in un negozio di abbigliamento. Adesso lavoro in un’agenzia di viaggi da un anno.' },
            { who: 'Sara', s: 'Di che cosa si occupa?' },
            { who: 'Marco', s: 'Mi occupo dei clienti e preparo i preventivi. So usare bene il computer e parlo inglese e spagnolo.' },
            { who: 'Sara', s: 'Perché vuole cambiare lavoro?' },
            { who: 'Marco', s: 'Mi piacerebbe avere più responsabilità e un orario più flessibile.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
            ['il colloquio', 'job interview'],
            ['lo stipendio', 'salary'],
            ['le competenze', 'skills'],
            ['candidarsi', 'to apply'],
            ['l’orario', 'working hours'],
            ['il curriculum', 'CV'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Mi parli della sua ___ professionale.', o: ['esperienza', 'contratto', 'orario'], why: 'At an interview, you talk about your experience.' },
            { q: 'Lo ___ è di milleseicento euro al mese.', o: ['stipendio', 'colloquio', 'capo'], why: 'The money you earn: *lo stipendio*.' },
            { q: 'Domani ho un ___ per un nuovo lavoro.', o: ['colloquio', 'contratto', 'collega'], why: 'A meeting with an employer: *un colloquio*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Lavoro in questo ufficio ___ due anni.', a: ['da'], why: 'I still work here: *da* + present.' },
            { q: 'Ho lavorato ___ tre anni in un negozio.', a: ['per'], why: 'A finished period: *per* + passato prossimo.' },
            { q: 'Mi ___ dei clienti. (occuparsi)', a: ['occupo'], why: '*Mi occupo di* = I deal with.' },
            { q: 'Marco si è ___ per un posto in banca. (candidarsi)', a: ['candidato'], why: 'Reflexive verb in the passato prossimo: *si è candidato*.' },
            { q: 'Lavoro dalle nove alle cinque: ho un contratto a tempo ___.', a: ['pieno'], why: '*A tempo pieno* = full-time.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Lavoro qui [per] due anni, e mi piace molto.', a: ['da'], why: 'I still work here: *da* + present.' },
            { s: 'Ho lavorato in banca [da] tre anni, poi ho cambiato.', a: ['per'], why: 'A finished period: *per*.' },
            { s: 'Mi [occupa] dei clienti.', a: ['occupo'], why: '*Io*: *mi occupo*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say how long it has been going on.', items: [
            { q: 'Ho cominciato a lavorare qui due anni fa. Lavoro ancora qui.', cue: 'Lavoro', a: ['Lavoro qui da due anni.'], why: 'It continues: *da due anni*.' },
            { q: 'Ho cominciato a studiare italiano sei mesi fa. Studio ancora.', cue: 'Studio', a: ['Studio italiano da sei mesi.', 'Studio l’italiano da sei mesi.'], why: 'It continues: *da sei mesi*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Lavoro in un’agenzia di viaggi da un anno.', why: '*Da un anno*: it continues.' },
            { a: 'Ho lavorato per tre anni come commesso.', why: '*Per tre anni*: finished.' },
            { a: 'Mi occupo dei clienti e dei preventivi.', why: '*Mi occupo di*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Che, cui, dove',
      about: 'Join two sentences with relative pronouns.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A **relative pronoun** joins two sentences about the same person or thing. **Che** is the most common: it can be the subject or the object, for people and things: *L’uomo **che** lavora qui è il mio capo. Il lavoro **che** cerco è a tempo pieno.* After a **preposition**, use **cui**, which never changes: *La ditta per **cui** lavoro è a Milano. Il collega con **cui** lavoro è simpatico.* For a place, **dove** is a common alternative: *L’ufficio **dove** lavoro è in centro.* To say *what*, use **quello che**: *Quello che dici è vero.*' },
          { t: 'table', caption: 'Relative pronouns', explain: ['head', 'col1'], head: ['Pronoun', 'Use', 'Example'], rows: [
            ['che', 'subject or object, no preposition', 'Il lavoro che cerco è interessante.'],
            ['preposition + cui', 'after a preposition', 'La ditta per cui lavoro è grande.'],
            ['dove', 'a place', 'L’ufficio dove lavoro è in centro.'],
            ['quello che', 'what, the thing that', 'Quello che dici è vero.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Never use **che** after a preposition: say *la ditta per cui lavoro*, not *la ditta per che lavoro*. Never repeat the noun after the pronoun: *Ho un collega che parla tre lingue.* The pronoun does the work of the repeated word.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Ho un collega **che** parla tre lingue.', n: '*Che* = subject: the colleague speaks.' },
            { s: 'Il lavoro **che** cerco è a tempo pieno.', n: '*Che* = object: I look for the job.' },
            { s: 'La ditta per **cui** lavoro è a Milano.', n: '*Per cui*: after a preposition.' },
            { s: 'Il collega con **cui** lavoro è simpatico.', n: '*Con cui*.' },
            { s: 'L’ufficio **dove** lavoro è in centro.', n: 'A place; *in cui* is also possible.' },
            { s: '**Quello che** dici è vero.', n: 'What you say.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write che, cui or dove.', items: [
            { q: 'L’uomo ___ lavora qui è il mio capo.', a: ['che'], why: 'Subject: *che*.' },
            { q: 'La ditta per ___ lavoro è a Milano.', a: ['cui'], why: 'After a preposition: *cui*.' },
            { q: 'L’ufficio ___ lavoro è in centro.', a: ['dove', 'in cui'], why: 'A place: *dove* (or *in cui*).' },
            { q: 'Il collega con ___ lavoro è simpatico.', a: ['cui'], why: 'After *con*: *cui*.' },
            { q: 'Il lavoro ___ cerco è a tempo pieno.', a: ['che'], why: 'Object: *che*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right pronoun.', items: [
            { q: 'Il collega a ___ ho scritto è in vacanza.', o: ['cui', 'che', 'dove'], why: 'After *a*: *cui*.' },
            { q: 'Il ragazzo ___ ho incontrato è mio cugino.', o: ['che', 'cui', 'dove'], why: 'Object, no preposition: *che*.' },
            { q: 'La ditta per ___ lavoro si trova a Torino.', o: ['cui', 'che', 'dove'], why: 'After *per*: *cui*.' },
            { q: '___ dici è vero.', o: ['Quello che', 'Quello cui', 'Quello dove'], why: 'What: *quello che*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'La ditta per [che] lavoro è grande.', a: ['cui'], why: 'After a preposition: *cui*.' },
            { s: 'Il collega [cui] parla tre lingue è simpatico.', a: ['che'], why: 'Subject, no preposition: *che*.' },
            { s: 'Il libro [dove] leggo è interessante.', a: ['che'], why: 'Object of *leggo*: *che*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Join the two sentences with a relative pronoun.', items: [
            { q: 'Ho un collega. Il collega parla tre lingue.', a: ['Ho un collega che parla tre lingue.'], why: '*Che* replaces *il collega*.' },
            { q: 'Il capo è gentile. Lavoro per il capo.', a: ['Il capo per cui lavoro è gentile.'], why: '*Per cui*: after *per*.' },
            { q: 'L’azienda è grande. Lavoro in quell’azienda.', a: ['L’azienda in cui lavoro è grande.', 'L’azienda dove lavoro è grande.'], why: '*In cui* or *dove*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'L’azienda in cui lavoro è grande.', why: '*In cui*: after a preposition.' },
            { a: 'Il collega che parla tre lingue è simpatico.', why: '*Che* = subject.' },
            { a: 'Ecco la ditta per cui lavoro.', why: '*Per cui*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Writing to Lei',
      about: 'Use the formal register in e-mails and on the phone.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'In a work letter or e-mail to someone you do not know, use the **Lei** form. Begin with **Gentile signor Rossi,** or **Gentile signora Neri,**. For a company, write **Gentile direttore,** or **Spettabile ditta,**. Give the reason: **Le scrivo per …** In your closing, say **La ringrazio** and **Resto a disposizione**, then **Cordiali saluti** (or the more formal **Distinti saluti**). The pronouns **Le** (to you) and **La** (you) are often written with a capital letter in formal writing.' },
          { t: 'table', caption: 'Informal and formal', explain: ['head'], head: ['Informal', 'Formal'], rows: [
            ['Ciao Marco,', 'Gentile signor Rossi,'],
            ['Ti scrivo per …', 'Le scrivo per …'],
            ['Ti mando il mio CV.', 'Le invio il mio curriculum.'],
            ['Puoi rispondermi?', 'Può rispondermi?'],
            ['Grazie mille!', 'La ringrazio.'],
            ['A presto!', 'Cordiali saluti'],
          ] },
          { t: 'tip', art: 'owl', md: 'In formal writing, use the **third person singular** for *Lei*: *Può inviarmi i documenti?* On the phone, say **Buongiorno, sono …** and **Vorrei parlare con …** In Italy, a woman with a degree is **dottoressa** and a man **dottore**. Titles take a small letter in the middle of a sentence.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Gentile** signor Rossi, **Le scrivo per** chiedere informazioni.', n: 'A formal opening and the reason.' },
            { s: '**In allegato trova** il mio curriculum.', n: '*In allegato* = attached.' },
            { s: '**La ringrazio** per la sua risposta.', n: 'Thanks to Lei.' },
            { s: '**Resto a disposizione** per un colloquio.', n: 'I am available.' },
            { s: '**Cordiali saluti**', n: 'The usual formal closing.' },
          ] },
          { t: 'dialogue', title: 'Al telefono', lines: [
            { who: 'Paolo', s: 'Buongiorno, sono Paolo Bianchi. Vorrei parlare con la dottoressa Neri.' },
            { who: 'Segretaria', s: 'Un momento, gliela passo.' },
            { who: 'Segretaria', s: 'Mi dispiace, la dottoressa è in riunione. Vuole lasciare un messaggio?' },
            { who: 'Paolo', s: 'Sì, le chiedo di richiamarmi appena possibile. Il mio numero è 055 555 0123.' },
            { who: 'Segretaria', s: 'Certo, glielo riferisco subito.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the informal phrase with the formal one.', pairs: [
            ['Ciao Marco,', 'Gentile signor Rossi,'],
            ['Ti scrivo per …', 'Le scrivo per …'],
            ['Grazie mille!', 'La ringrazio.'],
            ['A presto!', 'Cordiali saluti'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the formal one.', items: [
            { q: 'How do you open an e-mail to a woman you do not know?', o: ['Gentile signora Neri,', 'Ciao Neri,', 'Cara Neri,'], why: '*Gentile signora* is formal and polite.' },
            { q: 'How do you close a formal e-mail?', o: ['Cordiali saluti', 'A presto', 'Ciao a tutti'], why: '*Cordiali saluti* is the usual formal closing.' },
            { q: 'How do you ask a stranger to repeat?', o: ['Può ripetere, per favore?', 'Puoi ripetere?', 'Ripeti?'], why: '*Lei* uses the third person: *Può*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '___ signor Rossi, Le scrivo per chiedere informazioni.', a: ['Gentile'], why: 'A formal opening: *Gentile*.' },
            { q: 'In ___ trova il mio curriculum.', a: ['allegato'], why: '*In allegato* = attached.' },
            { q: 'La ___ per la sua attenzione.', a: ['ringrazio'], why: 'A formal thank you: *La ringrazio*.' },
            { q: 'Resto a ___ per un colloquio.', a: ['disposizione'], why: '*Resto a disposizione* = I am available.' },
            { q: 'Cordiali ___', a: ['saluti'], why: 'The closing: *Cordiali saluti*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Make it formal (Lei).', items: [
            { q: 'Ti scrivo per chiedere informazioni.', a: ['Le scrivo per chiedere informazioni.'], why: '*Ti* → *Le*.' },
            { q: 'Puoi inviarmi il contratto?', a: ['Può inviarmi il contratto?'], why: '*Puoi* → *Può*.' },
            { q: 'Grazie mille!', a: ['La ringrazio.', 'La ringrazio!'], why: 'A formal thank you.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: '[Ciao] signor Rossi, Le scrivo per chiedere informazioni.', a: ['Gentile'], why: 'A formal opening: *Gentile*.' },
            { s: 'Gentile dottoressa, [ti] ringrazio per la risposta.', a: ['La'], why: 'Formal: *La ringrazio*.' },
            { s: 'Gentile signora Neri, [puoi] inviarmi il contratto?', a: ['può'], why: 'Formal: *può*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Le scrivo per chiedere informazioni.', why: '*Le scrivo per* + infinitive.' },
            { a: 'Resto a disposizione per un colloquio.', why: 'A formal closing.' },
            { a: 'In allegato trova il mio curriculum.', why: '*Trova* = Lei.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Un annuncio e una candidatura',
      about: 'Read a job advert and a cover e-mail.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Un annuncio', md: 'Un albergo del centro cerca un addetto o un’addetta alla reception. Si richiedono una buona conoscenza dell’italiano e dell’inglese e un anno di esperienza in un lavoro a contatto con il pubblico. Si offre un contratto di sei mesi a tempo pieno, con possibilità di rinnovo. L’orario è dalle 14 alle 22, cinque giorni alla settimana. Inviare il curriculum a lavoro@example.com entro il 20 novembre.' },
          { t: 'reading', title: 'La candidatura', md: '**Oggetto:** Candidatura per il posto alla reception\n\nGentile direttore,\n\nLe scrivo per candidarmi al posto di addetta alla reception che ho visto sul vostro sito. Mi chiamo Chiara Moretti e ho ventisei anni. Ho lavorato per due anni in un ristorante dove ho imparato a gestire i clienti, e adesso lavoro in un negozio da sei mesi. Parlo bene l’inglese e un po’ di spagnolo. Il lavoro che cerco è a tempo pieno e mi piacerebbe lavorare con il pubblico.\n\nIn allegato trova il mio curriculum. Resto a disposizione per un colloquio.\n\nLa ringrazio per l’attenzione.\n\nCordiali saluti\nChiara Moretti\nchiara.moretti@example.com' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Chiara ha ventisei anni.', a: 't', why: '*Ho ventisei anni.*' },
            { q: 'Adesso Chiara lavora in un ristorante.', a: 'f', why: 'She now works in a shop: *adesso lavoro in un negozio da sei mesi*.' },
            { q: 'L’albergo offre un contratto di sei mesi.', a: 't', why: '*Un contratto di sei mesi a tempo pieno.*' },
            { q: 'Chiara ha già lavorato in un albergo.', a: 'ng', why: 'She mentions a restaurant and a shop, not a hotel.' },
            { q: 'Bisogna inviare il curriculum entro il 20 novembre.', a: 't', why: '*Entro il 20 novembre.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Che cosa cerca l’albergo?', o: ['Un addetto alla reception.', 'Un cuoco.', 'Un direttore.'], why: '*Cerca un addetto o un’addetta alla reception.*' },
            { q: 'Dove ha imparato Chiara a gestire i clienti?', o: ['In un ristorante.', 'In un albergo.', 'In una banca.'], why: '*In un ristorante dove ho imparato a gestire i clienti.*' },
            { q: 'Qual è l’orario del lavoro?', o: ['Dalle 14 alle 22.', 'Dalle 8 alle 16.', 'Dalle 9 alle 17.'], why: '*L’orario è dalle 14 alle 22.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the relative pronouns.', items: [
            { s: 'Ho lavorato in un ristorante [dove] ho imparato a gestire i clienti.', why: '*Dove* = in the restaurant.' },
            { s: 'Il lavoro [che] cerco è a tempo pieno.', why: '*Che* = object of *cerco*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word from the e-mail.', items: [
            { q: 'Chiara lavora in un negozio ___ sei mesi.', a: ['da'], why: 'It continues: *da sei mesi*.' },
            { q: 'Resto a ___ per un colloquio.', a: ['disposizione'], why: 'A formal closing.' },
            { q: 'In ___ trova il mio curriculum.', a: ['allegato'], why: '*In allegato* = attached.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Le scrivo per candidarmi al posto di addetta.', why: '*Le scrivo per* + infinitive.' },
            { a: 'Il lavoro che cerco è a tempo pieno.', why: '*Che* = object.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Lavoro in questo ufficio ___ due anni.', o: ['da', 'per', 'fa'], why: 'It continues: *da* + present.' },
      { q: 'La ditta per ___ lavoro è a Milano.', o: ['cui', 'che', 'dove'], why: 'After a preposition: *cui*.' },
      { q: 'Il ragazzo ___ ho incontrato è mio cugino.', o: ['che', 'cui', 'dove'], why: 'Object, no preposition: *che*.' },
      { q: 'How do you open a formal e-mail to a woman you do not know?', o: ['Gentile signora Neri,', 'Ciao Neri,', 'Cara Neri,'], why: '*Gentile signora* is formal.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Ho lavorato ___ tre anni in un negozio.', a: ['per'], why: 'A finished period: *per*.' },
      { q: 'In ___ trova il mio curriculum.', a: ['allegato'], why: '*In allegato* = attached.' },
      { q: 'Resto a ___ per un colloquio.', a: ['disposizione'], why: 'A formal closing.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the informal phrase with the formal one.', pairs: [
      ['Ti scrivo per …', 'Le scrivo per …'],
      ['Grazie mille!', 'La ringrazio.'],
      ['A presto!', 'Cordiali saluti'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Join the two sentences with a relative pronoun.', items: [
      { q: 'Ho un collega. Il collega parla tre lingue.', a: ['Ho un collega che parla tre lingue.'], why: '*Che* replaces *il collega*.' },
      { q: 'Il capo è gentile. Lavoro per il capo.', a: ['Il capo per cui lavoro è gentile.'], why: '*Per cui*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'La ditta per [che] lavoro è grande.', a: ['cui'], why: 'After a preposition: *cui*.' },
      { s: 'Gentile signora Neri, [puoi] inviarmi il contratto?', a: ['può'], why: 'Formal: *può*.' },
    ] },
  ],
};
