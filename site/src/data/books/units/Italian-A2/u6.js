// Italian A2, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Work and everyday life',
  goal: 'Talk about jobs, phone calls and daily tasks at work. Learn the pronouns gli and le, and phrases for the phone.',
  art: 'suitcase',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['jobs', 'workplace', 'CV', 'indirect object pronouns', 'gli', 'le', 'telephone', 'messages'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Sono ingegnere',
      about: 'Talk about jobs and say what you have done.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'To say what your job is, use **sono** + the job **with no article**: *Sono ingegnere. Lei è medico.* With an adjective or an extra word, use the article: *È un bravo ingegnere. È una cuoca molto brava.* To ask someone’s job, say **Che lavoro fai?** (tu) or **Che lavoro fa?** (Lei) or **Di cosa si occupa?** Many jobs have a masculine and a feminine form.' },
          { t: 'table', caption: 'Jobs', explain: ['head', 'col2'], head: ['Man', 'Woman', 'Meaning'], rows: [
            ['infermiere', 'infermiera', 'nurse'],
            ['commesso', 'commessa', 'shop assistant'],
            ['cameriere', 'cameriera', 'waiter, waitress'],
            ['cuoco', 'cuoca', 'cook'],
            ['studente', 'studentessa', 'student'],
            ['insegnante', 'insegnante', 'teacher'],
            ['medico', 'medico', 'doctor'],
            ['ingegnere', 'ingegnera', 'engineer'],
            ['impiegato', 'impiegata', 'office worker'],
          ] },
          { t: 'tip', art: 'owl', md: 'Some jobs have the same word for a man and a woman: *l’insegnante, il medico, la medico* (also *la dottoressa*). For many jobs in **-ore**, the feminine is **-ora** or **-rice**: *lavoratore → lavoratrice*. For **-ente**, the feminine can be **-essa**: *studente → studentessa*.' },
        ],
        [
          { t: 'text', md: 'To say where you work, use **in** and **presso**: *Lavoro in un ospedale. Lei lavora presso il comune.* To talk about your experience, use the passato prossimo with **per** or the present with **da**: *Ho lavorato per due anni in un ristorante. Lavoro qui da tre mesi.* A short CV uses simple sentences: *Ho studiato commercio. Parlo tre lingue. So usare il computer.*' },
          { t: 'examples', items: [
            { s: '**Sono infermiera** in un ospedale.', n: 'No article after *essere* + job.' },
            { s: '**È un bravo** professore.', n: 'With an adjective, use the article.' },
            { s: 'Lavora **in un ufficio da** due anni.', n: '*in* + place, *da* + time.' },
            { s: 'Ho **lavorato per** tre anni in un caffè.', n: 'Passato prossimo + *per*.' },
            { s: '**So** usare il computer e **parlo** tre lingue.', n: 'Skills for a CV.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'Write the feminine form.', items: [
            { q: 'Mio fratello è commesso. Mia sorella è ___.', base: 'commesso', a: ['commessa'], why: '*-o* becomes *-a*.' },
            { q: 'Mio padre è cuoco. Mia madre è ___.', base: 'cuoco', a: ['cuoca'], why: '*-co* becomes *-ca*.' },
            { q: 'Leo è studente. Lea è ___.', base: 'studente', a: ['studentessa'], why: '*-ente* becomes *-entessa*.' },
            { q: 'Lui è cameriere. Lei è ___.', base: 'cameriere', a: ['cameriera'], why: '*-iere* becomes *-iera*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Sono ___ ingegnere.', o: ['—', 'un', 'il'], why: 'No article after *essere* + a job: *Sono ingegnere.*' },
            { q: 'È ___ bravo medico.', o: ['un', 'il', 'lo'], why: 'With an adjective: *un bravo medico*.' },
            { q: 'Lavora ___ un ospedale.', o: ['in', 'a', 'su'], why: '*in un ospedale*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Sono infermiera in un ospedale.', why: 'No article after *essere* + job.' },
            { a: 'Lavora in un ufficio da due anni.', why: '*in* + place, *da* + time.' },
            { a: 'Ho lavorato tre anni in un ristorante.', why: 'Passato prossimo + duration + place.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Where do they work?', pairs: [
            ['un infermiere', 'in ospedale'],
            ['un insegnante', 'a scuola'],
            ['un cameriere', 'in un bar'],
            ['un impiegato', 'in un ufficio'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Gli telefono, le scrivo',
      about: 'Replace a + a person with gli, le and loro.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Some verbs take **a** before a person: *telefonare a, scrivere a, rispondere a, dare a, dire a, parlare a*. To replace **a + a person**, use an **indirect object pronoun**: **gli** (to him), **le** (to her) and **gli** (to them, in everyday speech; the formal word is **loro** after the verb). They go **before the verb**: *Telefono a Paolo → Gli telefono. Scrivo a Maria → Le scrivo. Scrivo ai miei genitori → Gli scrivo.*' },
          { t: 'table', caption: 'Indirect object pronouns', explain: ['head', 'col2'], head: ['Person', 'Pronoun', 'Meaning'], rows: [
            ['a me', 'mi', 'to me'],
            ['a te', 'ti', 'to you'],
            ['a lui', 'gli', 'to him'],
            ['a lei', 'le', 'to her'],
            ['a Lei', 'Le', 'to you (polite)'],
            ['a noi', 'ci', 'to us'],
            ['a voi', 'vi', 'to you'],
            ['a loro', 'gli (loro)', 'to them'],
          ] },
          { t: 'tip', art: 'owl', md: '**gli** can mean *to him* or *to them*: *Gli telefono* can be either, and only the context tells you. **le** is only for *to her* (and **Le** for the polite *to you*). Do not confuse **le** (to her) with **le** (them, feminine direct object).' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Telefono a Paolo. → **Gli** telefono.', n: 'One man: *gli*.' },
            { s: 'Scrive a Maria. → **Le** scrive.', n: 'One woman: *le*.' },
            { s: 'Rispondi al direttore? – Sì, **gli** rispondo.', n: '*rispondere a* + person.' },
            { s: 'Dà un libro a Maria. → **Le** dà un libro.', n: 'The thing stays; the person becomes *le*.' },
            { s: '**Non gli** parlo.', n: 'Negative.' },
          ] },
          { t: 'text', md: 'Be careful with verbs that take a **direct object**. *Amo Paolo → Lo amo.* *Guardo Maria → La guardo.* But *Telefono a Paolo → Gli telefono.* Learn the verb with its small word. If the person comes after **a**, use **gli / le**; if there is no **a**, use **lo / la / li / le**.' },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Replace the words by gli or le.', items: [
            { q: 'Telefono a Paolo.', cue: 'Gli', a: ['Gli telefono.'], why: 'One man: *gli*.' },
            { q: 'Scrive ai suoi amici.', cue: 'Gli', a: ['Gli scrive.'], why: 'Several people: *gli*.' },
            { q: 'Rispondiamo alla direttrice.', cue: 'Le', a: ['Le rispondiamo.'], why: 'One woman: *le*.' },
            { q: 'Dà un regalo a sua madre.', cue: 'Le', a: ['Le dà un regalo.'], why: 'One woman: *le*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'gli, le, lo, la or li?', items: [
            { q: 'Telefono a mia sorella: ___ telefono.', o: ['le', 'la', 'gli'], why: '*telefonare a* → *le*.' },
            { q: 'Guardo i miei vicini: ___ guardo.', o: ['li', 'gli', 'le'], why: '*guardare* has no *a*: *li*.' },
            { q: 'Scrive ai colleghi: ___ scrive.', o: ['gli', 'li', 'le'], why: '*scrivere a* + people: *gli*.' },
            { q: 'Conosci Paolo? Sì, ___ conosco.', o: ['lo', 'gli', 'le'], why: '*conoscere* has no *a*: *lo*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Gli telefono tutti i giorni.', why: 'The pronoun goes before the verb.' },
            { a: 'Lei non gli parla.', why: '*non* + pronoun + verb.' },
            { a: 'Le scriviamo spesso.', why: '*le* before the verb.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: '[Lo] telefono al mio capo.', a: ['Gli'], why: '*telefonare a* + person → *gli*.' },
            { s: 'Telefono a Maria: [gli] telefono.', a: ['le'], why: 'A woman: *le*.' },
            { s: 'Guardo mia sorella: [le] guardo.', a: ['la'], why: '*guardare* has no *a*: *la*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Pronto? Vorrei parlare con…',
      about: 'Make a phone call and leave a message.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'On the phone, Italians say **Pronto?** to answer. In a company, the person who answers says the name: *Ditta Rossi, buongiorno.* To ask for someone, say **Vorrei parlare con la signora Verdi, per favore.** The reply is often **Chi la desidera?** or **Chi parla?** (Who is calling?) and then **Resti in linea** (Hold on) or **Gliela passo** (I will put you through to her).' },
          { t: 'dialogue', title: 'Al telefono', lines: [
            { who: 'Segretaria', s: 'Ditta Rossi, buongiorno.' },
            { who: 'Karim', s: 'Buongiorno, vorrei parlare con la signora Verdi, per favore.' },
            { who: 'Segretaria', s: 'Chi parla?' },
            { who: 'Karim', s: 'Sono Karim Benali. Le telefono per un appuntamento.' },
            { who: 'Segretaria', s: 'Resti in linea, gliela passo.' },
          ] },
          { t: 'tip', art: 'owl', md: 'To ask someone to repeat, say **Può ripetere, per favore?** To ask them to speak slowly, say **Può parlare più lentamente?** To end a call, say **Grazie, arrivederci** or, with friends, **Ti richiamo più tardi.**' },
        ],
        [
          { t: 'table', caption: 'On the phone', explain: ['head', 'col1'], head: ['Italian', 'English'], rows: [
            ['Pronto?', 'Hello? (on the phone)'],
            ['Vorrei parlare con …', 'I would like to speak to …'],
            ['Chi parla? / Chi la desidera?', 'Who is calling?'],
            ['Resti in linea.', 'Hold on, please.'],
            ['Non c’è.', 'He / She is not here.'],
            ['Può dirgli che ho chiamato?', 'Can you tell him that I called?'],
            ['Richiamo più tardi.', 'I will call back later.'],
          ] },
          { t: 'examples', items: [
            { s: '**Vorrei parlare con** il signor Bianchi.', n: 'Asking for a person.' },
            { s: '**Non c’è** oggi.', n: 'He is not there.' },
            { s: '**Può dirgli** che ho chiamato?', n: 'A request: *può* + infinitive; *gli* joins *dire*.' },
            { s: 'Le **richiamo** domani mattina.', n: 'I will call you back tomorrow morning.' },
            { s: '**Può ripetere**, per favore?', n: 'To ask for repetition.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Fill the gaps with the words in the bank.', extra: ['richiamo', 'assente'], items: [
            { q: 'Buongiorno, vorrei parlare ___ la signora Verdi.', a: 'con', why: '*parlare con* + person.' },
            { q: 'Chi ___?', a: 'parla', why: '*Chi parla?* means Who is calling?' },
            { q: 'Resti in ___, gliela passo.', a: 'linea', why: '*Resti in linea* means hold on.' },
            { q: 'Può ___, per favore? Non ho capito.', a: 'ripetere', why: '*Può ripetere?*' },
          ] },
          { t: 'ex', kind: 'match', h: 'Find the answer.', pairs: [
            ['Pronto?', 'Buongiorno, vorrei parlare con Paolo.'],
            ['Chi parla?', 'Sono Sofia Martini.'],
            ['Può ripetere?', 'Sì, certo.'],
            ['Non c’è.', 'Può dirgli che ho chiamato?'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'You answer a call at home:', o: ['Pronto?', 'Arrivederci.', 'Buonanotte.'], why: '*Pronto?* is how you answer the phone.' },
            { q: 'You did not understand:', o: ['Può ripetere, per favore?', 'Vorrei un caffè.', 'Resti in linea.'], why: 'To ask someone to repeat.' },
            { q: 'The person is not there:', o: ['Può dirgli che ho chiamato?', 'Gliela passo.', 'Chi parla?'], why: 'To leave a message.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Vorrei parlare con la signora Verdi.', why: '*Vorrei parlare con* + person.' },
            { a: 'Può dirgli che ho chiamato?', why: '*gli* joins *dire*.' },
            { a: 'Le richiamo domani mattina.', why: 'Pronoun, verb, time.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Un annuncio e una e-mail',
      about: 'Read a job advert and a short e-mail from work.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'reading', title: 'Offerta di lavoro', md: '**Commesso o commessa in panetteria**\nCerchiamo una persona simpatica e lavoratrice per la nostra panetteria. Parla italiano e un po’ di inglese. Sa accogliere i clienti. Lavora dal martedì al sabato, dalle 6 alle 14.\n\nInviare il CV a lavoro@example.com.' },
          { t: 'reading', title: 'Una e-mail di lavoro', md: 'Buongiorno signora Verdi,\n\nLe scrivo per confermare il nostro appuntamento di giovedì. Ho già telefonato al suo collega, ma non c’era. Può dirgli che arrivo alle 10? La ringrazio in anticipo.\n\nCordiali saluti,\nKarim Benali' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Cercano un commesso o una commessa.', a: 't', why: '*Commesso o commessa in panetteria*' },
            { q: 'Bisogna parlare perfettamente inglese.', a: 'f', why: 'The advert asks for Italian and *un po’ di inglese*.' },
            { q: 'Il lavoro comincia alle 6.', a: 't', why: '*dalle 6 alle 14*' },
            { q: 'Si lavora anche la domenica.', a: 'f', why: '*dal martedì al sabato*' },
            { q: 'La panetteria è in centro.', a: 'ng', why: 'The advert does not say where the bakery is.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Perché Karim scrive alla signora Verdi?', o: ['Per confermare un appuntamento.', 'Per chiedere un lavoro.', 'Per annullare l’appuntamento.'], why: '*Le scrivo per confermare il nostro appuntamento di giovedì.*' },
            { q: 'A chi ha già telefonato Karim?', o: ['A un collega della signora Verdi.', 'Alla panetteria.', 'Al suo capo.'], why: '*Ho già telefonato al suo collega.*' },
            { q: 'Che cosa bisogna inviare per l’annuncio?', o: ['Un CV.', 'Un regalo.', 'Solo una foto.'], why: '*Inviare il CV.*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the texts.', items: [
            { q: 'Per l’annuncio, si deve saper ___ i clienti.', a: ['accogliere'], why: '*Sa accogliere i clienti.*' },
            { q: 'Karim arriva alle ___.', a: ['10', 'dieci'], why: '*arrivo alle 10*' },
            { q: 'Termina con «Cordiali ___».', a: ['saluti'], why: '*Cordiali saluti* is a polite closing.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Sono ___ infermiere.', o: ['—', 'un', 'il'], why: 'No article after *essere* + job.' },
      { q: 'Telefono a Paolo: ___ telefono.', o: ['gli', 'lo', 'le'], why: '*telefonare a* → *gli*.' },
      { q: 'Scrive a sua madre: ___ scrive.', o: ['le', 'la', 'gli'], why: 'One woman: *le*.' },
      { q: 'Al telefono: «Chi ___?»', o: ['parla', 'parlo', 'parlano'], why: '*Chi parla?*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Mia sorella è ___. (commesso)', a: ['commessa'], why: '*commesso* → *commessa*.' },
      { q: 'Resti in ___, gliela passo.', a: ['linea'], why: '*Resti in linea*' },
      { q: 'Lavora qui ___ tre anni.', a: ['da'], why: '*da* + present.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Where do they work?', pairs: [
      ['un infermiere', 'in ospedale'],
      ['un insegnante', 'a scuola'],
      ['un cameriere', 'in un bar'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Replace the words by gli or le.', items: [
      { q: 'Scrive ai suoi colleghi.', cue: 'Gli', a: ['Gli scrive.'], why: 'Several people: *gli*.' },
      { q: 'Rispondo al mio capo.', cue: 'Gli', a: ['Gli rispondo.'], why: 'One man: *gli*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Vorrei parlare con la signora Verdi.', why: 'Standard phrase.' },
      { a: 'Può ripetere, per favore?', why: 'Asking for repetition.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: '[Lo] parlo al mio capo.', a: ['Gli'], why: '*parlare a* → *gli*.' },
    ] },
  ],
};
