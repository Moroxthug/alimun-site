// Portuguese C2, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Spoken Portuguese and regional voices',
  goal: 'Understand spoken Portuguese in its informal and regional forms. Learn discourse markers, truncations and elisions, the choice between tu, você and o senhor, and the main voices you will hear in Portugal, Brazil and Africa.',
  art: 'nata',
  tags: { skills: ['listening', 'speaking', 'vocabulary'], topics: ['discourse markers', 'informal speech', 'truncation', 'regional Portuguese', 'slang'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Pronto, então, pois, pá',
      about: 'Understand the small words that organise speech.',
      art: 'nata',
      spreads: [
        [
          { t: 'text', md: 'In speech, Portuguese people use small words that do not add facts but **organise the talk**. They are called **discourse markers** (*marcadores discursivos*). **Pronto** closes a topic or accepts something: *Pronto, está decidido.* **Então** starts, continues or asks for more: *Então, como foi?* **Pois** agrees: *— É difícil. — Pois.* **Pá** is a friendly filler in Portugal: *Ó pá, não sei.* **Portanto** sums up: *Portanto, ficamos assim.* **Tipo** approximates: *É tipo uma hora de caminho.* **Ya** is a young person’s *yes*: *— Vens? — Ya.*' },
          { t: 'table', caption: 'Discourse markers', explain: ['head', 'col0'], head: ['Marker', 'What it does', 'Example'], rows: [
            ['pronto', 'closes a topic, accepts', 'Pronto, está decidido.'],
            ['então', 'starts or asks for more', 'Então, como foi a viagem?'],
            ['pois', 'agrees', 'É caro. — Pois.'],
            ['pá', 'friendly filler (Portugal)', 'Ó pá, não sei.'],
            ['portanto', 'sums up', 'Portanto, ficamos assim.'],
            ['tipo', 'approximates, softens', 'Demora tipo uma hora.'],
          ] },
        ],
        [
          { t: 'text', md: 'The same marker can mean different things with a different **intonation**. *Pois* with a falling voice is simple agreement; with a long, rising voice it can mean *not really*: *Gostaste do filme? — Pois…* (not great). *Então* can mean *so* (*Então, vamos?*), *in that case* (*Então fico eu*) or *what, really?* (*Então não vens?*). Fillers are not mistakes; they give the speaker time to think. Do not use too many of them in writing.' },
          { t: 'tip', art: 'nata', md: 'In writing, replace the filler with a clear connector: *portanto → por conseguinte*, *pronto → em suma*, *tipo → cerca de* or *como*, *então → nesse caso*. Keep the spoken markers for dialogue.' },
          { t: 'ex', kind: 'choice', h: 'Choose the marker that fits.', items: [
            { q: 'Gostaste do restaurante? — ___… A comida era boa, mas o serviço foi lento.', o: ['Pois', 'Pronto', 'Então'], why: 'A long, rising *Pois* means not great.' },
            { q: '___, está decidido: vamos amanhã.', o: ['Pronto', 'Pois', 'Tipo'], why: '*Pronto* closes the topic.' },
            { q: 'Demora ___ uma hora a chegar lá.', o: ['tipo', 'pois', 'pá'], why: '*Tipo* approximates.' },
            { q: '___, como foi a viagem?', o: ['Então', 'Pois', 'Pronto'], why: '*Então* starts a question.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'In speech or in formal writing?', groups: ['speech', 'writing'], explain: ['groups'], items: [
            { s: 'tipo', g: 0, why: 'A spoken filler or approximation.' },
            { s: 'por conseguinte', g: 1, why: 'A written connector.' },
            { s: 'pá', g: 0, why: 'A spoken filler.' },
            { s: 'em suma', g: 1, why: 'A written summary.' },
            { s: 'pronto', g: 0, why: 'A spoken marker.' },
            { s: 'nesse caso', g: 1, why: 'A written connector.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite for formal writing, using the words given.', items: [
            { q: 'Pronto, o projeto não funcionou.', cue: 'Em suma', a: ['Em suma, o projeto não funcionou.'], why: 'A written connector for *pronto*.' },
            { q: 'Demora tipo uma hora.', cue: 'cerca de', a: ['Demora cerca de uma hora.'], why: '*Cerca de* replaces *tipo* in writing.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Tá, pra, né e as formas de tratamento',
      about: 'Read shortened forms and choose between tu, você and o senhor.',
      art: 'churro',
      spreads: [
        [
          { t: 'text', md: 'In relaxed speech, people **shorten** words. **Tá** is *está*: *Tá tudo bem?* **Pra** is *para*: *Vou pra casa.* **Né** is *não é*, a tag question, very common in Brazil: *Bonito, né?* In Brazil you also hear **num** for *não* in speech: *Eu num sei.* In Portugal, **ó** calls someone: *Ó João, anda cá!* and **pá** is a friendly tag: *Ó pá, calma.* These forms are fine among friends, but they would look out of place in a report or a formal email.' },
          { t: 'table', caption: 'Shortened forms', explain: ['head', 'col0'], head: ['Spoken', 'Full form', 'Example'], rows: [
            ['tá', 'está', 'Tá tudo bem?'],
            ['pra', 'para', 'Vou pra casa.'],
            ['né', 'não é (mainly Brazil)', 'Bonito, né?'],
            ['num (Brazil)', 'não', 'Eu num sei.'],
            ['ó', 'calls someone (Portugal)', 'Ó João, anda cá!'],
          ] },
        ],
        [
          { t: 'text', md: 'How to say **you** depends on the country. In **Portugal**, **tu** is for friends, family and young people. For a person you do not know well, it is polite to use the **name** or **o senhor / a senhora**: *O senhor deseja mais café?* **Você** can sound abrupt in Portugal. In **Brazil**, **você** is the normal informal form and *o senhor* is for respect. There is also **taboo language**: swear words (*palavrões*) are common in speech. You do not need to use them, but you should understand that they are often not meant as insults: they can express surprise or frustration. Always judge by tone and situation.' },
          { t: 'tip', art: 'churro', md: 'When you are unsure, use the **formal form** with a new person (*o senhor*, *a senhora*, or the name) and wait for them to suggest *tu* or *você*. In Brazil, *você* is a safe default; in Portugal, avoid it with strangers.' },
          { t: 'ex', kind: 'choice', h: 'Choose the full form.', items: [
            { q: '“Tá tudo bem?” means “___ tudo bem?”', o: ['Está', 'Esta', 'Estar'], why: '*Tá* = *está*.' },
            { q: '“Vou pra casa.” means “Vou ___ casa.”', o: ['para', 'por', 'pelo'], why: '*Pra* = *para*.' },
            { q: '“Bonito, né?” means “Bonito, ___?”', o: ['não é', 'não foi', 'não vai'], why: '*Né* = *não é*.' },
            { q: 'In Portugal, a polite way to ask a stranger is to say ___.', o: ['o senhor', 'tu', 'pá'], why: 'Formal address.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite in neutral Portuguese, using the words given.', items: [
            { q: 'Tá tudo pronto pra amanhã.', cue: 'Está', a: ['Está tudo pronto para amanhã.'], why: '*Tá* = *está*; *pra* = *para*.' },
            { q: 'Eu num sei, né?', cue: 'Eu não sei,', a: ['Eu não sei, não é?'], why: '*Num* = *não*; *né* = *não é*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with the spoken form.', items: [
            { q: '___ tudo bem? (está)', a: ['Tá'], why: '*Tá* = *está*.' },
            { q: 'Vou ___ casa. (para)', a: ['pra'], why: '*Pra* = *para*.' },
            { q: 'Ó ___, anda cá! (a friend called João)', a: ['João'], why: '*Ó* calls someone.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Vozes de Portugal, do Brasil e de África',
      about: 'Recognise the main regional voices and a few local words.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'There is a standard Portuguese, but nobody speaks it in the same way everywhere. In **Lisbon**, the speech is quick and the unstressed vowels almost disappear, so *Lisboa* sounds like *Lsboa*. In the **north** (Porto), the speech is warmer and louder, and in some areas *b* and *v* sound alike; a child is a **catraio** (boy) or **catraia** (girl). In the **Alentejo**, the rhythm is slow and sung. In the **Azores**, vowels are very closed and the melody is different. In **Brazil**, vowels are open, *t* before *i* sounds like *tch* in many regions (*tia* → *tchia*), and a child is a **garoto** or **moleque**. In **Angola**, vowels are close to Europe, and friends are **kambas**.' },
          { t: 'table', caption: 'Regional voices', explain: ['head', 'col0'], head: ['Region', 'What you may hear', 'Example'], rows: [
            ['Lisbon', 'quick speech, swallowed vowels', 'Lsboa é bonita.'],
            ['Porto and the north', 'warm, loud; catraio', 'O catraio vem já.'],
            ['Alentejo', 'slow, sung rhythm', 'Está-se bem aqui, com calma.'],
            ['Azores', 'closed vowels, different melody', 'Fala-se devagar e com melodia própria.'],
            ['Brazil', 'open vowels, tch for ti', 'A tchia chegou.'],
            ['Angola', 'close to Europe; kamba', 'O kamba chegou.'],
          ] },
        ],
        [
          { t: 'text', md: 'Words can differ, too. In Portugal, **fixe** means *cool* or *great*: *Que fixe!* **Bué** means *very* or *a lot*, from Angola and now heard across Portugal: *Gosto bué.* A child is a **miúdo** in Portugal and a **garoto** in Brazil. These words often show up in **films, songs and television**. You may not need them in an exam, but you will hear them in life. Do not worry if you do not understand everything the first time: even native speakers from different regions sometimes ask each other what a word means.' },
          { t: 'tip', art: 'cat', md: 'When you hear a word you do not know, listen for the **context**. Is it a form of address (*Ó pá!*), a quantity (*bué*), or a judgment (*fixe*)? If you are not sure, ask: *O que quer dizer?* Most speakers are happy to explain.' },
          { t: 'ex', kind: 'match', h: 'Match the word to its meaning.', pairs: [
            ['fixe', 'cool, great'],
            ['bué', 'a lot, very'],
            ['miúdo', 'child'],
            ['kamba', 'friend (Angola)'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: '“Que fixe!” significa que algo é ___.', o: ['ótimo', 'caro', 'antigo'], why: '*Fixe* means cool.' },
            { q: 'Em Portugal, uma criança pode ser chamada de ___.', o: ['miúdo', 'garoto', 'kamba'], why: '*Miúdo* is common in Portugal; *garoto* is Brazilian.' },
            { q: '“Gosto bué.” significa que gosto ___.', o: ['muito', 'pouco', 'às vezes'], why: '*Bué* = very, a lot.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which country is each word more typical of?', groups: ['Portugal', 'Brazil'], explain: ['groups'], items: [
            { s: 'miúdo', g: 0, why: 'Common in Portugal.' },
            { s: 'garoto', g: 1, why: 'Common in Brazil.' },
            { s: 'fixe', g: 0, why: 'Typical of Portugal.' },
            { s: 'né', g: 1, why: 'Typical of Brazil.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Três amigos num café',
      about: 'Read a conversation between speakers from Lisbon, Porto and Luanda.',
      art: 'nata',
      spreads: [
        [
          { t: 'reading', title: 'Três amigos num café', md: 'Inês (de Lisboa): Então, como foi a viagem? Pronto, já chegaste!\n\nRui (do Porto): Ó pá, foi longa. O comboio demorou tipo cinco horas. Mas pronto, agora estou aqui.\n\nNelson (de Luanda): Kamba, descansa. Aqui o café é bué bom. Pede um galão e esquece o resto.\n\nInês: O galão é fixe, mas eu prefiro uma bica. Os miúdos lá em casa só querem sumo.\n\nRui: Lá no Porto, o catraio mais novo só quer chocolate quente.\n\nNelson: Em Luanda, os miúdos querem tudo ao mesmo tempo. Pois, é a vida.\n\nInês: Ya, é isso. Então, brindamos?\n\nRui: Pois, brindamos. Ao reencontro!' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'O comboio de Rui demorou cerca de cinco horas.', a: 't', why: '«Tipo cinco horas.»' },
            { q: 'Nelson é do Porto.', a: 'f', why: 'Nelson is from Luanda; Rui is from Porto.' },
            { q: 'Inês prefere uma bica a um galão.', a: 't', why: '«Eu prefiro uma bica.»' },
            { q: 'Os amigos pedem bolo de chocolate.', a: 'ng', why: 'Only hot chocolate for a child is mentioned.' },
            { q: 'Rui pensa que o café é mau.', a: 'f', why: 'Nelson says the café is very good; Rui never complains.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'What does «tipo cinco horas» mean?', o: ['About five hours.', 'Exactly five hours.', 'Five types of hours.'], why: '*Tipo* approximates.' },
            { q: 'Which word does Nelson use to call his friend?', o: ['Kamba', 'Catraio', 'Fixe'], why: '*Kamba* is a friend, from Angola.' },
            { q: 'What does «bué bom» mean?', o: ['Very good.', 'A little good.', 'Not good.'], why: '*Bué* = very.' },
            { q: 'What does «Pronto, já chegaste!» do?', o: ['It closes the topic of the arrival.', 'It asks a question.', 'It disagrees.'], why: '*Pronto* closes and accepts.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the regional words.', items: [
            { s: 'O café é [bué] bom.', why: 'From Angola, now also heard in Portugal.' },
            { s: 'O galão é [fixe].', why: 'Typical of Portugal.' },
            { s: 'O [catraio] mais novo só quer chocolate quente.', why: 'Typical of the north of Portugal.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: '___, como foi a viagem?', a: ['Então'], why: '*Então* starts a question.' },
            { q: 'Ó ___, foi longa a viagem.', a: ['pá'], why: 'A friendly filler in Portugal.' },
            { q: 'Os ___ lá em casa só querem sumo.', a: ['miúdos'], why: 'Children in Portugal.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Pede um galão e esquece o resto.', why: 'A friendly suggestion.' },
            { a: 'Pois, brindamos ao reencontro de todos.', why: 'A relaxed toast.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
      { q: 'Gostaste do filme? — ___… Não foi o melhor.', o: ['Pois', 'Pronto', 'Então'], why: 'A long *Pois* means not great.' },
      { q: 'Demora ___ uma hora a chegar.', o: ['tipo', 'pois', 'pá'], why: '*Tipo* approximates.' },
      { q: '“Tá” significa “___”.', o: ['está', 'estar', 'esta'], why: '*Tá* = *está*.' },
      { q: 'Em Portugal, “fixe” significa ___.', o: ['ótimo', 'caro', 'antigo'], why: 'Cool.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Speech or writing?', groups: ['speech', 'writing'], explain: ['groups'], items: [
      { s: 'tipo', g: 0, why: 'Spoken.' },
      { s: 'por conseguinte', g: 1, why: 'Written.' },
      { s: 'pá', g: 0, why: 'Spoken.' },
      { s: 'em suma', g: 1, why: 'Written.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'Vou ___ casa. (para, spoken)', a: ['pra'], why: '*Pra* = *para*.' },
      { q: 'Bonito, ___? (não é, Brazilian)', a: ['né'], why: '*Né* = *não é*.' },
      { q: 'Ó ___, anda cá! (a friendly filler in Portugal)', a: ['pá'], why: '*Pá*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite in neutral Portuguese, using the words given.', items: [
      { q: 'Pronto, o projeto não funcionou.', cue: 'Em suma', a: ['Em suma, o projeto não funcionou.'], why: 'A written connector.' },
      { q: 'Tá tudo pronto pra amanhã.', cue: 'Está', a: ['Está tudo pronto para amanhã.'], why: 'Neutral spelling.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the problem.', items: [
      { s: 'No relatório oficial lê-se: “[Pronto], o balanço é positivo.”', a: ['Em suma', 'Em conclusão'], why: '*Pronto* is spoken; use a written connector in a report.' },
      { s: 'A um desconhecido, em Portugal, pergunta-se: “[Tu] deseja mais café?”', a: ['O senhor'], why: 'With a stranger, use *o senhor* or *a senhora* with the third person verb.' },
    ] },
  ],
};
