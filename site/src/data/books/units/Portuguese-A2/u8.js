// Portuguese A2, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'Celebrations and the future',
  goal: 'Talk about celebrations, invite people and say what you will do. Learn the months and dates, the futuro simples, and se + present for plans and promises.',
  art: 'ghost',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['celebrations', 'dates', 'months', 'invitations', 'futuro simples', 'se clauses', 'plans', 'promises'], goals: ['foundations', 'pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Parabéns!',
      about: 'Talk about celebrations, give dates and invite people.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'To say the date, use **dia** + number + **de** + month: *Hoje é dia doze de março. O meu aniversário é no dia vinte de julho.* The months are written with a small letter. To ask the date, say **Que dia é hoje?** To say *in March*, use **em março**. To say *on the 12th of March*, use **no dia 12 de março**.' },
          { t: 'table', caption: 'The months', explain: ['head'], head: ['Month', 'Month'], rows: [
            ['janeiro', 'julho'],
            ['fevereiro', 'agosto'],
            ['março', 'setembro'],
            ['abril', 'outubro'],
            ['maio', 'novembro'],
            ['junho', 'dezembro'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Portugal, **Parabéns!** means *Congratulations!* and also *Happy birthday!* You can say **Feliz aniversário!** too. At Christmas, say **Feliz Natal!** and for New Year, **Bom Ano Novo!** or **Boas Festas!** In Brazil, people say *Feliz Ano Novo!*' },
        ],
        [
          { t: 'table', caption: 'Celebrations and invitations', explain: ['head', 'col1'], head: ['Portuguese', 'English'], rows: [
            ['Parabéns! / Feliz aniversário!', 'Happy birthday!'],
            ['Feliz Natal!', 'Merry Christmas!'],
            ['Bom Ano Novo!', 'Happy New Year!'],
            ['a festa', 'party'],
            ['o convite', 'invitation'],
            ['Queres vir à minha festa?', 'Do you want to come to my party?'],
            ['Com todo o gosto!', 'With pleasure!'],
            ['Obrigado, mas não posso.', 'Thank you, but I cannot.'],
          ] },
          { t: 'dialogue', title: 'Um convite', lines: [
            { who: 'Ana', s: 'O meu aniversário é no dia doze de março. Queres vir à minha festa?' },
            { who: 'Pedro', s: 'Com todo o gosto! A que horas?' },
            { who: 'Ana', s: 'Às oito, em minha casa. Podes trazer uma bebida?' },
            { who: 'Pedro', s: 'Claro. Feliz aniversário adiantado!' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the month with its English name.', pairs: [
            ['janeiro', 'January'],
            ['março', 'March'],
            ['junho', 'June'],
            ['agosto', 'August'],
            ['outubro', 'October'],
            ['dezembro', 'December'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'O meu aniversário é no dia doze de ___. (March)', a: ['março'], why: '*Março*.' },
            { q: 'Feliz ___! (birthday)', a: ['aniversário'], why: '*Feliz aniversário!*' },
            { q: '___! (Happy birthday / Congratulations)', a: ['Parabéns'], why: '*Parabéns!*' },
            { q: 'Obrigado pelo ___. (invitation)', a: ['convite'], why: '*Obrigado pelo convite*.' },
            { q: 'Queres vir ___ minha festa? (a + a)', a: ['à'], why: '*A + a = à*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'É o aniversário de uma amiga:', o: ['Parabéns!', 'Boa viagem!', 'Bom apetite!'], why: '*Parabéns!* for a birthday.' },
            { q: 'É o dia de Natal:', o: ['Feliz Natal!', 'Feliz aniversário!', 'Boa sorte!'], why: '*Feliz Natal!*' },
            { q: 'Aceitas o convite:', o: ['Com todo o gosto!', 'Não posso.', 'Adeus.'], why: '*Com todo o gosto!* accepts.' },
            { q: 'Recusas o convite:', o: ['Obrigado, mas não posso.', 'Com todo o gosto!', 'Parabéns!'], why: 'A polite refusal.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'O meu aniversário é no dia doze de março.', why: '*Dia* + number + *de* + month.' },
            { a: 'Queres vir à minha festa?', why: '*Queres vir à* + event.' },
            { a: 'Obrigado pelo convite.', why: 'To thank for an invitation.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Serei, terei, irei',
      about: 'Form the futuro simples.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'The **futuro simples** says what will happen. For most verbs, add the endings **-ei, -ás, -á, -emos, -ão** to the **infinitive**: *falarei, falarás, falará, falaremos, falarão*. *Comer* gives *comerei*, and *abrir* gives *abrirei*. A few verbs change the stem: **ser** (serei), **ter** (terei), **ir** (irei), **fazer** (farei), **dizer** (direi), **vir** (virei), **poder** (poderei), **querer** (quererei), **ver** (verei), **pôr** (porei), **estar** (estarei).' },
          { t: 'table', caption: 'The futuro simples', quiz: true, head: ['', 'falar', 'ser', 'ter', 'fazer'], rows: [
            ['eu', 'falarei', 'serei', 'terei', 'farei'],
            ['tu', 'falarás', 'serás', 'terás', 'farás'],
            ['ele / ela / você', 'falará', 'será', 'terá', 'fará'],
            ['nós', 'falaremos', 'seremos', 'teremos', 'faremos'],
            ['eles / elas / vocês', 'falarão', 'serão', 'terão', 'farão'],
          ] },
          { t: 'tip', art: 'owl', md: 'In everyday speech, Portuguese often uses **ir** + infinitive instead: *Vou falar com ele* instead of *Falarei com ele*. The futuro simples is more common in writing, in formal speech, in promises and in forecasts: *Amanhã estará sol.* Look at the accents: **falarás, falará, falarão**.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Amanhã **irei** a Lisboa.', n: '*Ir* → *irei*.' },
            { s: 'Tu **terás** uma surpresa.', n: '*Ter* → *terás*.' },
            { s: 'Ela **fará** o bolo.', n: '*Fazer* → *fará*.' },
            { s: 'Nós **chegaremos** cedo.', n: '*Chegar* → *chegaremos*.' },
            { s: 'Eles **virão** à festa.', n: '*Vir* → *virão*.' },
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write the futuro simples of falar.', verb: 'falar', tense: 'futuro simples', rows: [
            ['eu', 'falarei'],
            ['tu', 'falarás'],
            ['ele / ela / você', 'falará'],
            ['nós', 'falaremos'],
            ['eles / elas / vocês', 'falarão'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the futuro simples.', items: [
            { q: 'Amanhã eu ___ a Lisboa. (ir)', a: ['irei'], why: '*Eu irei*.' },
            { q: 'Tu ___ uma surpresa. (ter)', a: ['terás'], why: '*Tu terás*.' },
            { q: 'Ela ___ o bolo. (fazer)', a: ['fará'], why: '*Ela fará*.' },
            { q: 'Nós ___ cedo. (chegar)', a: ['chegaremos'], why: '*Nós chegaremos*.' },
            { q: 'Eles ___ à festa. (vir)', a: ['virão'], why: '*Eles virão*.' },
            { q: 'Eu ___ a verdade. (dizer)', a: ['direi'], why: '*Eu direi*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the infinitive with the form for eu.', pairs: [
            ['ser', 'serei'],
            ['ter', 'terei'],
            ['ir', 'irei'],
            ['fazer', 'farei'],
            ['dizer', 'direi'],
            ['vir', 'virei'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with the futuro simples.', items: [
            { q: 'Vou falar com ele.', a: ['Falarei com ele.'], why: '*Vou falar* → *falarei*.' },
            { q: 'Vamos chegar cedo.', a: ['Chegaremos cedo.'], why: '*Vamos chegar* → *chegaremos*.' },
            { q: 'Vão ser felizes.', a: ['Serão felizes.'], why: '*Vão ser* → *serão*.' },
            { q: 'Vou fazer um bolo.', a: ['Farei um bolo.'], why: '*Vou fazer* → *farei*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Eu [fazerei] um bolo.', a: ['farei'], why: '*Fazer* → *farei*.' },
            { s: 'Nós [chegarmos] cedo.', a: ['chegaremos'], why: '*Nós chegaremos*.' },
            { s: 'Ele [dizerá] a verdade.', a: ['dirá'], why: '*Dizer* → *dirá*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Amanhã irei a Lisboa.', why: '*Irei* = I will go.' },
            { a: 'Ela fará o bolo para a festa.', why: '*Fará* = she will make.' },
            { a: 'Eles virão à festa.', why: '*Virão* = they will come.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Se tenho tempo, vou',
      about: 'Talk about plans, conditions and promises.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'To say what happens if something is true, use **se** + **present** and a present, an imperative or **ir** + infinitive in the other part: *Se tenho tempo, vou ao cinema. Se estás cansado, descansa. Se não chove, vamos à praia.* The **se** part can come first or second. To make a promise, say **Prometo** + infinitive or **Prometo que** + present: *Prometo telefonar. Prometo que vou escolher um bom filme.* To say what you plan, hope or intend, use **pretendo, espero, quero** + infinitive.' },
          { t: 'table', caption: 'Plans and promises', explain: ['head', 'col1'], head: ['Portuguese', 'English', 'Example'], rows: [
            ['pretendo + infinitive', 'I intend to', 'Pretendo viajar no verão.'],
            ['espero + infinitive', 'I hope to', 'Espero ganhar.'],
            ['prometo + infinitive', 'I promise to', 'Prometo telefonar.'],
            ['prometo que + present', 'I promise that', 'Prometo que não me esqueço.'],
            ['se + present, …', 'if … , …', 'Se tenho tempo, vou ao cinema.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Portuguese, a more formal *if* sentence for the future uses a special form of the verb (*Se chover, ficarei em casa*), which you will learn at B1. For now, use **se** + the present: *Se chove, fico em casa.* The meaning is clear from the context.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Se tenho** tempo, vou ao cinema.', n: '*Se* + present.' },
            { s: '**Se não chove**, vamos à praia.', n: '*Se não* + present.' },
            { s: '**Se estás** cansado, descansa.', n: '*Se* + present, then an imperative.' },
            { s: '**Prometo** telefonar.', n: '*Prometo* + infinitive.' },
            { s: '**Espero** ganhar.', n: '*Espero* + infinitive.' },
          ] },
          { t: 'dialogue', title: 'Planos para o sábado', lines: [
            { who: 'Ana', s: 'Se tens tempo no sábado, queres vir ao cinema?' },
            { who: 'Pedro', s: 'Se não chove, vou à praia. Se chove, vou contigo.' },
            { who: 'Ana', s: 'Combinado! Prometo que escolho um bom filme.' },
            { who: 'Pedro', s: 'Espero que sim!' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Se ___ tempo, vou ao cinema. (ter)', a: ['tenho'], why: '*Se* + present: *tenho*.' },
            { q: 'Se não ___, vamos à praia. (chover)', a: ['chove'], why: '*Se não* + present: *chove*.' },
            { q: 'Prometo ___ vou telefonar.', a: ['que'], why: '*Prometo que* + present.' },
            { q: 'Espero ___ sim.', a: ['que'], why: '*Espero que sim* = I hope so.' },
            { q: 'Pretendo ___ no verão. (viajar)', a: ['viajar'], why: '*Pretendo* + infinitive.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Join the two ideas with se.', items: [
            { q: 'Tenho tempo. Vou ao cinema.', cue: 'Se', a: ['Se tenho tempo, vou ao cinema.'], why: '*Se* + present.' },
            { q: 'Não chove. Vamos à praia.', cue: 'Se', a: ['Se não chove, vamos à praia.'], why: '*Se não* + present.' },
            { q: 'Estás cansado. Descansa.', cue: 'Se', a: ['Se estás cansado, descansa.'], why: '*Se* + present, then the imperative.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the sentence with its meaning.', pairs: [
            ['Pretendo viajar.', 'I intend to travel.'],
            ['Espero ganhar.', 'I hope to win.'],
            ['Prometo telefonar.', 'I promise to call.'],
            ['Quero estudar.', 'I want to study.'],
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Se tenho tempo, vou ao cinema.', why: '*Se* + present, then the result.' },
            { a: 'Vamos à praia se não chove.', why: 'The *se* part can come second.' },
            { a: 'Prometo que vou telefonar.', why: '*Prometo que* + present.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Um convite e uma resposta',
      about: 'Read an invitation card and an e-mail reply.',
      art: 'ghost',
      spreads: [
        [
          { t: 'reading', title: 'Um convite', md: '**Convite**\n\nA Ana convida-te para a sua festa de aniversário. Dia 12 de março, às 20h, em casa dela. Haverá música, bolo e jogos. Confirma até ao dia 5 de março para ana@example.com.' },
          { t: 'reading', title: 'Uma resposta', md: 'Olá, Ana!\n\nObrigado pelo convite. Vou com todo o gosto! Chegarei às oito e levarei uma bebida. Se o meu irmão está livre, ele vai também. Digo-te amanhã.\n\nFeliz aniversário adiantado!\nPedro' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'A festa é no dia 12 de março.', a: 't', why: '*Dia 12 de março, às 20h.*' },
            { q: 'A festa é num restaurante.', a: 'f', why: 'It is at Ana’s home: *em casa dela*.' },
            { q: 'Haverá música e bolo.', a: 't', why: '*Haverá música, bolo e jogos.*' },
            { q: 'O Pedro levará um presente.', a: 'ng', why: 'He will bring a drink; a present is not mentioned.' },
            { q: 'O Pedro chegará às oito.', a: 't', why: '*Chegarei às oito.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Até quando deve confirmar?', o: ['Até ao dia 5 de março.', 'Até ao dia 12.', 'Até sábado.'], why: '*Confirma até ao dia 5 de março.*' },
            { q: 'O que levará o Pedro?', o: ['Uma bebida.', 'Um bolo.', 'Música.'], why: '*Levarei uma bebida.*' },
            { q: 'Quando dirá o Pedro se o irmão vai?', o: ['Amanhã.', 'Hoje.', 'Na festa.'], why: '*Digo-te amanhã.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the futuro simples.', items: [
            { s: '[Haverá] música e bolo na festa.', why: '*Haverá* is the futuro simples of *haver*.' },
            { s: '[Chegarei] às oito e [levarei] uma bebida.', why: '*Chegarei* and *levarei* are in the futuro simples.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'A Ana ___-te para a sua festa. (convidar)', a: ['convida'], why: '*A Ana convida-te*.' },
            { q: 'Eu ___ às oito. (chegar, futuro)', a: ['chegarei'], why: '*Eu chegarei*.' },
            { q: 'Se o meu irmão está livre, ele ___ também. (ir)', a: ['vai'], why: '*Ele vai*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Chegarei às oito e levarei uma bebida.', why: 'Two futures.' },
            { a: 'Haverá música, bolo e jogos.', why: '*Haverá* = there will be.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'É o aniversário de uma amiga:', o: ['Parabéns!', 'Boa viagem!', 'Bom apetite!'], why: '*Parabéns!* for a birthday.' },
      { q: 'Amanhã eu ___ a Lisboa.', o: ['irei', 'iria', 'fui'], why: 'The futuro simples: *irei*.' },
      { q: 'Aceitas o convite:', o: ['Com todo o gosto!', 'Não posso.', 'Adeus.'], why: '*Com todo o gosto!* accepts.' },
      { q: 'Se ___ tempo, vou ao cinema.', o: ['tenho', 'tinha', 'terei'], why: '*Se* + present.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Tu ___ uma surpresa. (ter)', a: ['terás'], why: '*Tu terás*.' },
      { q: 'Eles ___ à festa. (vir)', a: ['virão'], why: '*Eles virão*.' },
      { q: 'Prometo ___ vou telefonar.', a: ['que'], why: '*Prometo que* + present.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the month with its English name.', pairs: [
      ['janeiro', 'January'],
      ['março', 'March'],
      ['dezembro', 'December'],
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Eu [fazerei] um bolo.', a: ['farei'], why: '*Fazer* → *farei*.' },
      { s: 'Ele [dizerá] a verdade.', a: ['dirá'], why: '*Dizer* → *dirá*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'O meu aniversário é no dia doze de março.', why: '*Dia* + number + *de* + month.' },
      { a: 'Se tenho tempo, vou ao cinema.', why: '*Se* + present, then the result.' },
    ] },
  ],
};
