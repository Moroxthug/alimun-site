// Portuguese B1, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Pronouns in the right place',
  goal: 'Put pronouns where they belong. Learn when the pronoun goes before the verb, how it works with two verbs and with the future, the combined pronouns mo, to, lho, and the pronoun se.',
  art: 'parrot',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['pronoun placement', 'ênclise', 'próclise', 'combined pronouns', 'se', 'object pronouns'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Before or after the verb?',
      about: 'Know when the pronoun goes before the verb and when it goes after.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'In Portugal, the normal place for a pronoun (*me, te, o, a, lhe, nos …*) is **after** the verb, joined by a hyphen: *Vi-o ontem. Disse-lhe a verdade.* But some words **pull** the pronoun **before** the verb: **negative words** (*não, nunca, ninguém, nada*), **some adverbs** (*já, ainda, sempre, também, só, talvez*), **conjunctions** (*que, se, quando, porque, enquanto*) and **question words** (*quem, o que, onde, como, porquê*): *Não o vi. Já lhe disse. Quando o vi, fiquei contente. Quem te disse?*' },
          { t: 'table', caption: 'Where does the pronoun go?', explain: ['head', 'col1'], head: ['Situation', 'Place', 'Example'], rows: [
            ['a normal sentence', 'after the verb', 'Vi-o ontem.'],
            ['after não, nunca, ninguém, nada', 'before the verb', 'Não o vi.'],
            ['after já, ainda, sempre, também, só', 'before the verb', 'Já lhe disse.'],
            ['after que, se, quando, porque', 'before the verb', 'Disse-me que não a conhecia.'],
            ['after quem, o que, onde, como', 'before the verb', 'Quem te disse isso?'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Brazil, people usually put the pronoun **before** the verb, or leave it out: *Eu o vi* or *Vi ele*. In Portugal, *Eu o vi* sounds wrong. A sentence never begins with a pronoun in Portugal: say **Disse-me**, not *Me disse*.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Vi-o** ontem.', n: 'A normal sentence: after the verb.' },
            { s: '**Não o** vi hoje.', n: '*Não* pulls the pronoun before.' },
            { s: '**Já lhe** telefonei.', n: '*Já* pulls the pronoun before.' },
            { s: 'Disse-me que **não a** conhecia.', n: 'After *que* and *não*: before.' },
            { s: '**Quem te** disse isso?', n: 'A question word pulls the pronoun before.' },
          ] },
          { t: 'dialogue', title: 'Notícias', lines: [
            { who: 'Marta', s: 'Viste o Rafael ontem?' },
            { who: 'Paulo', s: 'Não o vi, mas telefonei-lhe de manhã.' },
            { who: 'Marta', s: 'E ele disse-te que vinha à festa?' },
            { who: 'Paulo', s: 'Disse-me que sim. Também me convidou a mim.' },
            { who: 'Marta', s: 'Quem lhe falou da festa?' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right sentence.', items: [
            { q: '', o: ['Não o conheço.', 'Não conheço-o.', 'Conheço-o não.'], why: '*Não* pulls the pronoun before the verb.' },
            { q: '', o: ['Já lhe telefonei.', 'Já telefonei-lhe.', 'Telefonei já lhe.'], why: '*Já* pulls the pronoun before the verb.' },
            { q: '', o: ['Disse-me que não a conhecia.', 'Disse-me que não conhecia-a.', 'Me disse que não a conhecia.'], why: '*Que* and *não* pull the pronoun before; a sentence does not begin with a pronoun.' },
            { q: '', o: ['Quem te disse isso?', 'Quem disse-te isso?', 'Quem disse isso te?'], why: 'A question word pulls the pronoun before.' },
            { q: '', o: ['Entreguei-lhe o livro.', 'Lhe entreguei o livro.', 'Entreguei lhe o livro.'], why: 'A normal sentence: after the verb, with a hyphen.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the pronoun.', items: [
            { q: 'Encontrei o Pedro e disse-___ olá. (to him)', a: ['lhe'], why: '*Disse-lhe*.' },
            { q: 'Não ___ vi hoje. (him)', a: ['o'], why: '*Não o vi*.' },
            { q: 'Quando ___ vi, fiquei contente. (him)', a: ['o'], why: '*Quando o vi*.' },
            { q: 'Também ___ esqueci. (me)', a: ['me'], why: '*Também me esqueci*.' },
            { q: 'Ele deu-___ um presente. (to us)', a: ['nos'], why: '*Deu-nos*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Where is the pronoun? Sort the sentences.', explain: ['groups'], groups: ['Before the verb', 'After the verb'], items: [
            { s: 'Não o vi.', g: 0, why: 'After *não*: before.' },
            { s: 'Vi-o ontem.', g: 1, why: 'A normal sentence: after.' },
            { s: 'Já lhe disse.', g: 0, why: 'After *já*: before.' },
            { s: 'Disse-lhe a verdade.', g: 1, why: 'A normal sentence: after.' },
            { s: 'Quem te chamou?', g: 0, why: 'After *quem*: before.' },
            { s: 'Chamou-te o chefe.', g: 1, why: 'A normal sentence: after.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Não [vi-o] hoje.', a: ['o vi'], why: 'After *não*, the pronoun goes before: *não o vi*.' },
            { s: 'Já [telefonei-lhe].', a: ['lhe telefonei'], why: 'After *já*, before the verb: *já lhe telefonei*.' },
            { s: 'Quando [vi-o], fiquei contente.', a: ['o vi'], why: 'After *quando*, before the verb.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Não o conheço bem.', why: 'After *não*, the pronoun goes before.' },
            { a: 'Disse-lhe a verdade.', why: 'A normal sentence: after the verb.' },
            { a: 'Quem te disse isso?', why: 'After *quem*, before the verb.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Two verbs and the future',
      about: 'Place the pronoun with an infinitive, the future and the conditional.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'When there are **two verbs**, the pronoun joins the **infinitive**: *Quero vê-lo. Posso ajudar-te? Vou dizer-lhe a verdade.* After **-r**, the pronoun **o, a, os, as** becomes **-lo, -la, -los, -las** and the *r* disappears: *ver + o = vê-lo*, *ajudar + a = ajudá-la*. With **ter de**, the pronoun can go before or after the infinitive: *Tenho de o fazer* or *Tenho de fazê-lo.*' },
          { t: 'table', caption: 'Pronouns with an infinitive', explain: ['head'], head: ['Sentence', 'With a pronoun'], rows: [
            ['Quero ver o filme.', 'Quero vê-lo.'],
            ['Posso ajudar a Ana?', 'Posso ajudá-la?'],
            ['Vou dizer a verdade ao Pedro.', 'Vou dizer-lhe a verdade.'],
            ['Tenho de fazer o trabalho.', 'Tenho de o fazer. / Tenho de fazê-lo.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Note the accents: **vê-lo, ajudá-la, fazê-lo, comprá-los**. With *-ar* the accent is on **á**, with *-er* on **ê**, with *-ir* on **i**: **abri-lo** (abrir). The pronoun **lhe** does not change: *dizer-lhe, dar-lhe*.' },
        ],
        [
          { t: 'text', md: 'In formal Portuguese, the **future** and the **conditional** put the pronoun **in the middle** of the verb: **Dir-lhe-ei a verdade** (I will tell him the truth), **Dar-te-ei um presente.** This is called *mesóclise*. In speech, people prefer **vou dizer-lhe**. With a word that pulls the pronoun, it goes before: *Não lhe direi nada.*' },
          { t: 'examples', items: [
            { s: '**Quero vê-lo** amanhã.', n: '*Ver* + *o* = *vê-lo*.' },
            { s: '**Posso ajudá-la**?', n: '*Ajudar* + *a* = *ajudá-la*.' },
            { s: '**Vou dizer-lhe** a verdade.', n: 'The pronoun after the infinitive.' },
            { s: '**Dir-lhe-ei** a verdade.', n: 'Formal future: the pronoun in the middle.' },
            { s: '**Não lhe direi** nada.', n: 'After *não*: before the verb.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Replace the words after the verb with a pronoun.', items: [
            { q: 'Quero ver o filme.', a: ['Quero vê-lo.'], why: '*Ver* + *o* = *vê-lo*.' },
            { q: 'Posso ajudar a Ana?', a: ['Posso ajudá-la?'], why: '*Ajudar* + *a* = *ajudá-la*.' },
            { q: 'Vou dizer a verdade ao Pedro.', a: ['Vou dizer-lhe a verdade.'], why: '*Ao Pedro* → *lhe*.' },
            { q: 'Tenho de fazer o trabalho.', a: ['Tenho de o fazer.', 'Tenho de fazê-lo.'], why: 'With *ter de*, before or after the infinitive.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right sentence.', items: [
            { q: '', o: ['Quero vê-lo.', 'Quero ver-o.', 'Quero vêr o.'], why: '*Ver* + *o* = *vê-lo*.' },
            { q: '', o: ['Dir-lhe-ei a verdade.', 'Direi-lhe a verdade.', 'Lhe direi a verdade.'], why: 'The formal future of Portugal puts the pronoun in the middle.' },
            { q: '', o: ['Vou comprá-los.', 'Vou comprar-os.', 'Vou comprá-os.'], why: '*Comprar* + *os* = *comprá-los*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the pronoun.', items: [
            { q: 'Quero ver a Ana. → Quero vê-___.', a: ['la'], why: '*Ver* + *a* = *vê-la*.' },
            { q: 'Posso ajudar os meus amigos. → Posso ajudá-___.', a: ['los'], why: '*Ajudar* + *os* = *ajudá-los*.' },
            { q: 'Vou escrever à Maria. → Vou escrever-___.', a: ['lhe'], why: '*À Maria* → *lhe*.' },
            { q: 'Não ___ direi nada. (to him)', a: ['lhe'], why: 'After *não*: before the verb.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Quero [ver-o].', a: ['vê-lo'], why: '*Ver* + *o* = *vê-lo*.' },
            { s: 'Posso [ajudar-la]?', a: ['ajudá-la'], why: '*Ajudar* + *a* = *ajudá-la*.' },
            { s: '[Direi-lhe] a verdade. (formal future)', a: ['Dir-lhe-ei'], why: 'The formal future puts the pronoun in the middle.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Quero vê-lo amanhã.', why: '*Quero* + infinitive with the pronoun.' },
            { a: 'Posso ajudá-la agora?', why: '*Ajudar* + *a* = *ajudá-la*.' },
            { a: 'Vou dizer-lhe a verdade.', why: 'The pronoun after the infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Mo, to, lho, and se',
      about: 'Join two pronouns and use the pronoun se.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'When two pronouns meet, an indirect and a direct one, they **join**: **me + o = mo**, **te + o = to**, **lhe + o = lho**, **nos + o = no-lo**. They agree with the direct pronoun: *mo, ma, mos, mas; to, ta, tos, tas; lho, lha, lhos, lhas.* So *Dou o livro ao Pedro* becomes *Dou-lhe o livro*, and then **Dou-lho.**' },
          { t: 'table', caption: 'Combined pronouns', quiz: true, head: ['', 'o', 'a', 'os', 'as'], rows: [
            ['me', 'mo', 'ma', 'mos', 'mas'],
            ['te', 'to', 'ta', 'tos', 'tas'],
            ['lhe / lhes', 'lho', 'lha', 'lhos', 'lhas'],
            ['nos', 'no-lo', 'no-la', 'no-los', 'no-las'],
          ] },
          { t: 'tip', art: 'owl', md: 'The combined pronouns follow the same rules for place: **Deu-mo ontem** (after the verb), **Já lho disse** (after *já*, before the verb), **Vou dar-ta** (after the infinitive). In speech, many people avoid them and say *Dei-o a ele*, but you must understand them in writing and in subtitles.' },
        ],
        [
          { t: 'text', md: 'The little word **se** has several uses. It marks **things that are done in general**: **Vende-se casa. Alugam-se quartos. Fala-se português.** The verb agrees with the thing: *Vende-se uma casa* (one), *Vendem-se casas* (more than one). It also makes an **impersonal** sentence: **Diz-se que vai chover. Come-se bem aqui.**' },
          { t: 'examples', items: [
            { s: '**Dou-lho** amanhã.', n: '*Lhe* + *o* = *lho*.' },
            { s: '**Deu-mo** ontem.', n: '*Me* + *o* = *mo*.' },
            { s: '**Vende-se** casa.', n: '*Se* for things in general.' },
            { s: '**Alugam-se** quartos.', n: 'Plural: *alugam-se*.' },
            { s: '**Diz-se** que vai chover.', n: 'Impersonal: *diz-se que*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the combined pronoun.', items: [
            { q: 'Dou o livro ao Pedro. → Dou-___.', a: ['lho'], why: '*Lhe* + *o* = *lho*.' },
            { q: 'Ela deu-me a chave. → Ela deu-___.', a: ['ma'], why: '*Me* + *a* = *ma*.' },
            { q: 'Empresto-te o carro. → Empresto-___.', a: ['to'], why: '*Te* + *o* = *to*.' },
            { q: 'Disse a verdade à Ana. → Já ___ disse.', a: ['lha'], why: '*Lhe* + *a* = *lha*; after *já*, before the verb.' },
            { q: 'Mostrou-me os livros. → Mostrou-___.', a: ['mos'], why: '*Me* + *os* = *mos*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the pronoun se.', items: [
            { q: 'Alugam-___ quartos.', a: ['se'], why: '*Alugam-se quartos*.' },
            { q: 'Fala-___ português.', a: ['se'], why: '*Fala-se português*.' },
            { q: 'Diz-___ que vai chover.', a: ['se'], why: '*Diz-se que*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with se.', items: [
            { q: 'As pessoas vendem casas aqui.', a: ['Vendem-se casas aqui.'], why: 'A plural thing: *vendem-se*.' },
            { q: 'As pessoas falam português em Portugal.', a: ['Fala-se português em Portugal.'], why: 'A singular thing: *fala-se*.' },
            { q: 'As pessoas dizem que vai chover.', a: ['Diz-se que vai chover.'], why: '*Diz-se que*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Dou o livro ao Pedro: dou-[lhe o] amanhã.', a: ['lho'], why: '*Lhe* + *o* = *lho*.' },
            { s: '[Vende-se] casas.', a: ['Vendem-se'], why: 'The plural thing: *vendem-se*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the pronouns with the combined form.', pairs: [
            ['me + o', 'mo'],
            ['te + a', 'ta'],
            ['lhe + o', 'lho'],
            ['lhe + as', 'lhas'],
            ['nos + o', 'no-lo'],
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Deu-mo ontem à noite.', why: '*Me* + *o* = *mo*.' },
            { a: 'Já lho disse.', why: 'After *já*, before the verb.' },
            { a: 'Vendem-se casas no centro.', why: 'The plural thing: *vendem-se*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Um pacote em atraso',
      about: 'Read a message exchange about a parcel and see the pronouns at work.',
      art: 'parrot',
      spreads: [
        [
          { t: 'reading', title: 'Um pacote em atraso', md: '**Ana:** Pedro, enviei-te o pacote ontem. Já o recebeste?\n\n**Pedro:** Não, ainda não chegou. Fiquei em casa toda a manhã, mas o carteiro não passou.\n\n**Ana:** Estranho. A transportadora disse-me que to entrega hoje. Pergunta à vizinha: se calhar deixou-o com ela.\n\n**Pedro:** Tens razão, vou lá já.\n\n**Pedro:** Já o tenho! A vizinha deu-mo agora. Dentro estavam os livros e dois postais. Mando-te uma fotografia?\n\n**Ana:** Manda-ma! Os postais são para ti, escolhi-os eu.\n\n**Pedro:** Aqui está, enviei-ta agora. Obrigado pelos livros, precisava deles.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'A Ana enviou o pacote ontem.', a: 't', why: '*Enviei-te o pacote ontem.*' },
            { q: 'O Pedro ficou em casa toda a manhã.', a: 't', why: '*Fiquei em casa toda a manhã.*' },
            { q: 'O carteiro deixou o pacote num café.', a: 'f', why: 'The neighbour had it: *a vizinha deu-mo*.' },
            { q: 'No pacote havia também chocolates.', a: 'ng', why: 'It held books and two postcards; chocolates are not mentioned.' },
            { q: 'A Ana escolheu os postais.', a: 't', why: '*Escolhi-os eu.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Onde estava o pacote?', o: ['Com a vizinha.', 'No escritório.', 'Na transportadora.'], why: '*A vizinha deu-mo agora.*' },
            { q: 'O que manda o Pedro à Ana?', o: ['Uma fotografia.', 'Dois livros.', 'Um postal.'], why: '*Enviei-ta agora.*' },
            { q: 'Porque agradece o Pedro?', o: ['Pelos livros.', 'Pela fotografia.', 'Pelo carteiro.'], why: '*Obrigado pelos livros.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the combined pronouns.', items: [
            { s: 'A vizinha deu-[mo] agora e a transportadora disse que [to] entrega hoje.', why: '*Mo* = me + o; *to* = te + o.' },
            { s: 'Manda-[ma]! Eu enviei-[ta] agora.', why: '*Ma* = me + a; *ta* = te + a.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing pronoun.', items: [
            { q: 'Pedro, enviei-___ o pacote ontem. (to you)', a: ['te'], why: '*Enviei-te*.' },
            { q: 'Já ___ recebeste? (it, o pacote)', a: ['o'], why: '*Já o recebeste?*' },
            { q: 'A vizinha deu-___ agora. (to me, o pacote)', a: ['mo'], why: '*Me* + *o* = *mo*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Já o recebeste?', why: 'After *já*, before the verb.' },
            { a: 'A vizinha deu-mo agora.', why: '*Me* + *o* = *mo*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '', o: ['Não o conheço.', 'Não conheço-o.', 'Conheço-o não.'], why: '*Não* pulls the pronoun before the verb.' },
      { q: '', o: ['Quem te disse isso?', 'Quem disse-te isso?', 'Quem disse isso te?'], why: 'A question word pulls the pronoun before.' },
      { q: '', o: ['Quero vê-lo.', 'Quero ver-o.', 'Quero vêr o.'], why: '*Ver* + *o* = *vê-lo*.' },
      { q: '', o: ['Dou-lho amanhã.', 'Dou-o-lhe amanhã.', 'Dou lhe o amanhã.'], why: '*Lhe* + *o* = *lho*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Ela deu-me a chave. → Ela deu-___.', a: ['ma'], why: '*Me* + *a* = *ma*.' },
      { q: 'Alugam-___ quartos.', a: ['se'], why: '*Alugam-se quartos*.' },
      { q: 'Já ___ telefonei. (to him)', a: ['lhe'], why: 'After *já*, before the verb.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the pronouns with the combined form.', pairs: [
      ['me + o', 'mo'],
      ['te + a', 'ta'],
      ['lhe + o', 'lho'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence.', items: [
      { q: 'Posso ajudar a Ana?', a: ['Posso ajudá-la?'], why: '*Ajudar* + *a* = *ajudá-la*.' },
      { q: 'As pessoas vendem casas aqui.', a: ['Vendem-se casas aqui.'], why: 'A plural thing: *vendem-se*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Não [vi-o] hoje.', a: ['o vi'], why: 'After *não*, before the verb.' },
      { s: 'Quero [ver-o].', a: ['vê-lo'], why: '*Ver* + *o* = *vê-lo*.' },
    ] },
  ],
};
