// Portuguese C1, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'The language of narrative',
  goal: 'Read and write narrative Portuguese with its literary forms. Learn mesoclisis in the future and the conditional, literary word order, free indirect speech, the historic present and the order of dialogue.',
  art: 'nata',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['narrative', 'mesoclisis', 'word order', 'literary Portuguese'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Dar-te-ei, dir-lhe-ia',
      about: 'Place the pronoun inside the future and the conditional.',
      art: 'nata',
      spreads: [
        [
          { t: 'text', md: 'In **formal and written Portuguese**, the pronoun goes **inside** the verb in the future and the conditional. This is **mesoclisis** (mesóclise). Take the infinitive, add the pronoun with hyphens, then the ending: **dar** + **te** + **ei** = **dar-te-ei** (*I will give you*); **dizer** + **lhe** + **ia** = **dir-lhe-ia** (*I would tell him*); **fazer** + **se** + **ia** = **far-se-ia** (*it would be done*). Note that **dizer, fazer** and **trazer** lose a syllable: **dir-, far-, trar-**. In speech, most people use **ir** + infinitive instead: **Vou dar-te a resposta.**' },
          { t: 'table', caption: 'Mesoclisis', explain: ['head', 'col1'], head: ['Form', 'Meaning', 'Everyday way'], rows: [
            ['Dar-te-ei a resposta amanhã.', 'I will give you the answer tomorrow.', 'Vou dar-te a resposta amanhã.'],
            ['Dir-lhe-ia a verdade, se pudesse.', 'I would tell him the truth, if I could.', 'Dizia-lhe a verdade, se pudesse.'],
            ['Far-se-á justiça.', 'Justice will be done.', 'Vai fazer-se justiça.'],
            ['Enviar-vos-emos o contrato.', 'We will send you the contract.', 'Vamos enviar-vos o contrato.'],
          ] },
          { t: 'tip', art: 'owl', md: 'When a **trigger word** comes before the verb, the pronoun goes **before** it and mesoclisis disappears: **Não te darei a resposta.** **Que lhe direi?** **Talvez se faça justiça.** The triggers are *não, nunca, já, só, também, que, quem, talvez* and similar words. In **Brazilian Portuguese**, mesoclisis is almost never used, even in writing: **Eu te darei a resposta.**' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Dar-te-ei** a resposta amanhã.', n: 'Mesoclisis in the future.' },
            { s: '**Dir-lhe-ia** a verdade, se pudesse.', n: 'Mesoclisis in the conditional.' },
            { s: '**Far-se-á** justiça.', n: 'With *se*.' },
            { s: '**Não te darei** a resposta.', n: 'A trigger word: the pronoun goes before.' },
            { s: 'Que **lhe direi**?', n: '*Que* is a trigger.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the form with its meaning.', pairs: [
            ['dar-te-ei', 'I will give you'],
            ['dir-lhe-ia', 'I would tell him'],
            ['far-se-á', 'it will be done'],
            ['enviar-vos-emos', 'we will send you'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing ending.', items: [
            { q: 'Dar-te-___ a resposta amanhã.', a: ['ei'], why: 'The future ending for *eu* is *-ei*.' },
            { q: 'Dir-lhe-___ a verdade, se pudesse.', a: ['ia'], why: 'The conditional ending is *-ia*.' },
            { q: 'Far-se-___ justiça.', a: ['á'], why: 'The future ending for *ele* is *-á*.' },
            { q: 'Enviar-vos-___ o contrato.', a: ['emos'], why: 'The future ending for *nós* is *-emos*.' },
            { q: 'Escrever-lhe-___ uma carta, se tivesse tempo.', a: ['ia'], why: 'The conditional ending is *-ia*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Amanhã ___ a resposta.', o: ['dar-te-ei', 'te darei', 'darei-te'], why: 'Formal mesoclisis: *dar-te-ei*.' },
            { q: 'Não ___ a resposta.', o: ['te darei', 'dar-te-ei', 'darei-te'], why: '*Não* is a trigger: the pronoun goes before.' },
            { q: 'Se pudesse, ___ a verdade.', o: ['dir-lhe-ia', 'diria-lhe', 'lhe-diria'], why: 'Mesoclisis in the conditional.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it in formal written Portuguese.', items: [
            { q: 'Vou dar-te a resposta amanhã.', cue: 'Dar-te-ei', a: ['Dar-te-ei a resposta amanhã.'], why: 'Mesoclisis replaces *ir* + infinitive.' },
            { q: 'Vamos enviar-vos o contrato.', cue: 'Enviar-vos-emos', a: ['Enviar-vos-emos o contrato.'], why: 'Mesoclisis in the future.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right form.', items: [
            { s: '[Darei-te] a resposta amanhã.', a: ['Dar-te-ei'], why: 'The pronoun goes inside the future: *dar-te-ei*.' },
            { s: 'Não [dar-te-ei] a resposta.', a: ['te darei'], why: 'After *não* the pronoun goes before the verb.' },
            { s: '[Dizer-lhe-ia] a verdade, se pudesse.', a: ['Dir-lhe-ia'], why: '*Dizer* becomes *dir-* in the conditional.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Dar-te-ei a resposta amanhã.', why: 'Mesoclisis in the future.' },
            { a: 'Não te darei a resposta amanhã.', why: 'A trigger word: the pronoun goes before.' },
            { a: 'Far-se-á justiça no fim.', why: 'Mesoclisis with *se*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'A ordem literária das palavras',
      about: 'Read and write sentences with literary word order.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'In literary Portuguese, the order of words can change for **effect**. The **adjective before the noun** often gives a personal or figurative sense: **um grande homem** (a great man), **um velho amigo** (a long-standing friend), **um pobre homem** (a poor, pitiable man). After the noun, the sense is literal: **um homem grande** (a big man), **um amigo velho** (an old friend), **um homem pobre** (a man without money). You can also put a word **first** to stress it: **Muito me custou aceitar isso.** **Só então percebeu o erro.** **Tão cansado estava que adormeceu.** And a verb can come before its subject: **Chegou a noite.** **Passaram anos.**' },
          { t: 'table', caption: 'Position and meaning', explain: ['head', 'col1'], head: ['Before the noun', 'After the noun'], rows: [
            ['um grande homem (a great man)', 'um homem grande (a big man)'],
            ['um velho amigo (a long-standing friend)', 'um amigo velho (an old friend)'],
            ['um pobre homem (a pitiable man)', 'um homem pobre (a man with no money)'],
            ['a mesma pessoa (the same person)', 'a pessoa mesma (the very person)'],
          ] },
          { t: 'tip', art: 'owl', md: 'Use this order **sparingly**. In an email or a report, the normal order (subject, verb, object) is clearer. In narrative, a word first adds **rhythm**: **Foi então que a porta se abriu.** With **só, tão, muito**, a pronoun is placed before the verb: **Só então se lembrou.** This is a trigger, as in the first lesson. **Brazilian** writers use the same adjective changes.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Era **um grande homem**, mas **um homem pobre**.', n: 'Figurative, then literal.' },
            { s: '**Muito me custou** aceitar isso.', n: 'It cost me a great deal.' },
            { s: '**Só então** percebeu o erro.', n: 'Only then.' },
            { s: '**Tão cansado estava** que adormeceu.', n: 'So tired was he that.' },
            { s: '**Passaram** anos.', n: 'The verb before the subject.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Figurative or literal? Sort the phrases.', groups: ['figurative', 'literal'], explain: ['groups'], items: [
            { s: 'um grande homem', g: 0, why: 'Before the noun: a great man.' },
            { s: 'um velho amigo', g: 0, why: 'Before the noun: a long-standing friend.' },
            { s: 'um pobre homem', g: 0, why: 'Before the noun: a pitiable man.' },
            { s: 'um homem grande', g: 1, why: 'After the noun: physically big.' },
            { s: 'um amigo velho', g: 1, why: 'After the noun: old in age.' },
            { s: 'um homem pobre', g: 1, why: 'After the noun: without money.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Era um ___ amigo, conheciam-se há trinta anos. (long-standing)', a: ['velho'], why: 'Before the noun: a long-standing friend.' },
            { q: 'Era um homem ___, não tinha dinheiro para o pão. (poor)', a: ['pobre'], why: 'After the noun: without money.' },
            { q: '___ então percebeu o erro.', a: ['Só'], why: '*Só então*: only then.' },
            { q: '___ cansado estava que adormeceu logo.', a: ['Tão'], why: '*Tão … que*: so … that.' },
            { q: 'Muito me ___ aceitar isso. (custar)', a: ['custou'], why: '*Custar* in the perfeito.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right meaning.', items: [
            { q: 'Um velho amigo é…', o: ['um amigo de há muito tempo', 'um amigo com muita idade', 'um amigo que já não existe'], why: 'Before the noun: long-standing.' },
            { q: 'Um homem grande é…', o: ['um homem de grande estatura', 'um homem importante', 'um homem famoso'], why: 'After the noun: physically big.' },
            { q: 'Um pobre homem é…', o: ['um homem digno de pena', 'um homem sem dinheiro', 'um homem sem casa'], why: 'Before the noun: pitiable.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the word first.', items: [
            { q: 'Percebeu o erro só então.', cue: 'Só então', a: ['Só então percebeu o erro.'], why: 'The word first adds stress.' },
            { q: 'A noite chegou.', cue: 'Chegou', a: ['Chegou a noite.'], why: 'The verb before the subject.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Só então [lembrou-se] do recado.', a: ['se lembrou'], why: '*Só* is a trigger: the pronoun goes before the verb.' },
            { s: 'Era um [amigo velho] de longa data, por isso confiava nele. (long-standing)', a: ['velho amigo'], why: 'Before the noun: a long-standing friend.' },
            { s: 'Era um [pobre homem], sem um tostão. (without money)', a: ['homem pobre'], why: 'After the noun: without money.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Só então se lembrou do recado.', why: '*Só* is a trigger.' },
            { a: 'Tão cansado estava que adormeceu.', why: '*Tão … que* with the adjective first.' },
            { a: 'Passaram muitos anos depois disso.', why: 'The verb before the subject.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Discurso indireto livre e presente histórico',
      about: 'Use the devices that bring a story to life.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Narrators use several devices to bring the reader close to a character. In **free indirect speech** (discurso indireto livre), the narrator reports the thoughts of a character without *disse que* or quotation marks: **Ela olhou o relógio. Era tarde! Como podia ter esquecido?** The tenses are those of the narration, the question and exclamation are the character’s. The **presente histórico** tells a past event in the present to make it vivid: **Em 1755, um terramoto destrói Lisboa.** The **imperfeito** can describe an event that follows at once: **No momento seguinte, o comboio partia.** In dialogue, the **tag follows or interrupts** the words: **— Vou-me embora, disse ela. — Não vás, respondeu o Miguel.**' },
          { t: 'table', caption: 'Narrative devices', explain: ['head', 'col1'], head: ['Device', 'Example'], rows: [
            ['free indirect speech', 'Era tarde! Como podia ter esquecido?'],
            ['historic present', 'Em 1755, um terramoto destrói Lisboa.'],
            ['imperfeito for an event', 'No momento seguinte, o comboio partia.'],
            ['inverted dialogue tag', '— Vou-me embora, disse ela.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Portuguese dialogue, a **dash** opens each line of speech: **— Vou-me embora**, not quotation marks. After the dash the tag has the verb **before** the subject: **disse ela, respondeu o Miguel**, never *ela disse* inside a tag. In **Brazil**, quotation marks are also common. Use **one device at a time**: a text that mixes them all in one paragraph loses its clarity.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Ela olhou o relógio. **Era tarde! Como podia ter esquecido?**', n: 'Free indirect speech: the character’s thought.' },
            { s: 'Em 1755, um terramoto **destrói** Lisboa.', n: 'Historic present.' },
            { s: 'No momento seguinte, o comboio **partia**.', n: 'The imperfeito for a sudden event.' },
            { s: '— Vou-me embora, **disse ela**.', n: 'The tag after the speech.' },
            { s: '— Não vás, **respondeu o Miguel**.', n: 'The verb before the subject.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which device? Sort the sentences.', groups: ['free indirect speech', 'historic present'], explain: ['groups'], items: [
            { s: 'Era tarde! Como podia ter esquecido?', g: 0, why: 'The character’s thought, without a reporting verb.' },
            { s: 'Que ideia a dele! Nunca mais voltaria.', g: 0, why: 'The character’s feeling in the narration.' },
            { s: 'Seria possível que ele soubesse?', g: 0, why: 'A question in the character’s mind.' },
            { s: 'Em 1755, um terramoto destrói Lisboa.', g: 1, why: 'A past event in the present.' },
            { s: 'Em 1498, Vasco da Gama chega à Índia.', g: 1, why: 'A past event in the present.' },
            { s: 'De repente, a porta abre-se e entra um homem.', g: 1, why: 'A vivid event in the present.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '— Vou-me embora, ___ ela. (dizer, perfeito)', a: ['disse'], why: 'The tag: *disse ela*.' },
            { q: '— Não vás, ___ o Miguel. (responder, perfeito)', a: ['respondeu'], why: 'The tag: *respondeu o Miguel*.' },
            { q: 'Em 1755, um terramoto ___ Lisboa. (destruir, presente)', a: ['destrói'], why: 'The historic present.' },
            { q: 'No momento seguinte, o comboio ___. (partir, imperfeito)', a: ['partia'], why: 'The imperfeito for a sudden event.' },
            { q: 'Ela olhou o relógio. Era tarde! Como ___ ter esquecido? (poder, imperfeito)', a: ['podia'], why: 'The tense of the narration.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the device with its example.', pairs: [
            ['free indirect speech', 'Era tarde! Como podia ter esquecido?'],
            ['historic present', 'Em 1755, um terramoto destrói Lisboa.'],
            ['imperfeito for an event', 'No momento seguinte, o comboio partia.'],
            ['dialogue tag', '— Vou-me embora, disse ela.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Change the sentence into free indirect speech.', items: [
            { q: 'Ela pensou que era tarde e perguntou-se como podia ter esquecido.', cue: 'Era tarde!', a: ['Era tarde! Como podia ter esquecido?'], why: 'No reporting verb: the thought stands alone.' },
            { q: 'Ela disse: “Vou-me embora.”', cue: '— Vou-me embora,', a: ['— Vou-me embora, disse ela.', '— Vou-me embora, disse ela'], why: 'A dash, then the tag with the verb first.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: '— Vou-me embora, [ela disse].', a: ['disse ela'], why: 'In a tag the verb comes before the subject.' },
            { s: 'Em 1755, um terramoto [destruiu] Lisboa. (historic present)', a: ['destrói'], why: 'The historic present uses the present tense.' },
            { s: 'No momento seguinte, o comboio [partiu]. (imperfeito)', a: ['partia'], why: 'The imperfeito for a sudden event.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Não vás, respondeu o Miguel.', why: 'The tag has the verb first.' },
            { a: 'Em 1755, um terramoto destrói Lisboa.', why: 'The historic present.' },
            { a: 'No momento seguinte, o comboio partia.', why: 'The imperfeito for an event.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A casa junto ao rio',
      about: 'Read a literary extract.',
      art: 'nata',
      spreads: [
        [
          { t: 'reading', title: 'A casa junto ao rio', md: 'Chegou a noite, e com ela o frio. Teresa parou diante da casa junto ao rio. Passaram vinte anos desde a última vez. Era um grande dia para ela, mas não sabia se queria entrar.\n\n— Dar-te-ei a chave amanhã, dissera-lhe o tio. Agora tinha-a na mão.\n\nTão cansada estava que se sentou nos degraus. Só então se lembrou do pai. Como podia ter esquecido a promessa? Era um velho amigo da família quem lhe tinha dito: “Volta quando puderes.” Mas nunca voltara.\n\nEm 1998, o rio inunda a aldeia e leva metade das casas. A dela fica de pé.\n\n— Vais entrar?, perguntou uma voz.\n\n— Entrarei, respondeu Teresa. Far-se-á como ele quis.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Teresa chega à casa de noite.', a: 't', why: '*Chegou a noite.*' },
            { q: 'Teresa passou vinte anos longe da casa.', a: 't', why: '*Passaram vinte anos desde a última vez.*' },
            { q: 'O tio deu a chave a Teresa logo no início.', a: 'f', why: '*Dar-te-ei a chave amanhã*, ele disse; agora ela tem a chave.' },
            { q: 'Teresa decide não entrar.', a: 'f', why: '*Entrarei*, respondeu Teresa.' },
            { q: 'Em 1998, a casa de Teresa ficou de pé.', a: 't', why: '*A dela fica de pé.*' },
            { q: 'Teresa tem dois irmãos.', a: 'ng', why: 'The text does not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'O que lembra Teresa nos degraus?', o: ['O pai e a promessa.', 'O tio e a chave.', 'O rio e a cheia.'], why: '*Só então se lembrou do pai.*' },
            { q: 'Que frase é discurso indireto livre?', o: ['Como podia ter esquecido a promessa?', 'Em 1998, o rio inunda a aldeia.', '— Vais entrar?, perguntou uma voz.'], why: 'It is the character’s thought, without a reporting verb.' },
            { q: 'Que frase usa o presente histórico?', o: ['Em 1998, o rio inunda a aldeia e leva metade das casas.', 'Passaram vinte anos.', 'Tão cansada estava que se sentou.'], why: 'A past event in the present.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the literary word order and the mesoclisis.', items: [
            { s: '[Chegou a noite], e com ela o frio. [Passaram vinte anos] desde a última vez.', why: 'The verb before the subject.' },
            { s: '[Dar-te-ei] a chave amanhã. [Far-se-á] como ele quis.', why: 'Mesoclisis in the future.' },
            { s: '[Tão cansada estava] que se sentou. [Só então] se lembrou do pai.', why: 'A word first for stress.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Dar-te-___ a chave amanhã. (the ending for eu)', a: ['ei'], why: 'Mesoclisis in the future.' },
            { q: '— Entrarei, ___ Teresa. (responder, perfeito)', a: ['respondeu'], why: 'The tag: *respondeu Teresa*.' },
            { q: 'Era um ___ amigo da família. (long-standing)', a: ['velho'], why: 'Before the noun: long-standing.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Teresa parou diante da casa junto ao rio.', why: 'The first sentence of the scene.' },
            { a: 'Só então se lembrou do pai.', why: '*Só* is a trigger.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Amanhã ___ a resposta. (formal)', o: ['dar-te-ei', 'te darei', 'darei-te'], why: 'Mesoclisis.' },
      { q: 'Não ___ a resposta.', o: ['te darei', 'dar-te-ei', 'darei-te'], why: '*Não* is a trigger.' },
      { q: 'Um velho amigo é…', o: ['um amigo de há muito tempo', 'um amigo com muita idade', 'um amigo que já morreu'], why: 'Before the noun: long-standing.' },
      { q: 'Que frase tem o verbo antes do sujeito?', o: ['Chegou a noite.', 'A noite chegou.', 'A noite é longa.'], why: 'Literary order.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Dir-lhe-___ a verdade, se pudesse.', a: ['ia'], why: 'The conditional ending.' },
      { q: '— Vou-me embora, ___ ela. (dizer, perfeito)', a: ['disse'], why: 'The dialogue tag.' },
      { q: 'Em 1755, um terramoto ___ Lisboa. (destruir, presente)', a: ['destrói'], why: 'The historic present.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the device with its example.', pairs: [
      ['free indirect speech', 'Era tarde! Como podia ter esquecido?'],
      ['historic present', 'Em 1755, um terramoto destrói Lisboa.'],
      ['mesoclisis', 'Dar-te-ei a chave amanhã.'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it in formal written Portuguese.', items: [
      { q: 'Vou dar-te a resposta amanhã.', cue: 'Dar-te-ei', a: ['Dar-te-ei a resposta amanhã.'], why: 'Mesoclisis.' },
      { q: 'A noite chegou.', cue: 'Chegou', a: ['Chegou a noite.'], why: 'The verb before the subject.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right form.', items: [
      { s: '[Darei-te] a resposta amanhã.', a: ['Dar-te-ei'], why: 'The pronoun goes inside the future.' },
      { s: '— Vou-me embora, [ela disse].', a: ['disse ela'], why: 'The verb comes first in a tag.' },
    ] },
  ],
};
