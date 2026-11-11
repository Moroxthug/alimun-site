// Portuguese A2, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'What did you do?',
  goal: 'Tell a short story about last week and put events in order. Learn the pretérito perfeito of regular and common irregular verbs, reflexive verbs in the past, and time words like ontem, há and depois.',
  art: 'ghost',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['pretérito perfeito', 'irregular verbs', 'time expressions', 'narration', 'email'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Falei, comi, abri',
      about: 'Form the pretérito perfeito of regular verbs and of ir and ser.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'The **pretérito perfeito** tells what happened and is finished: *Ontem falei com a Ana. Comi uma sopa. Abri a janela.* Take the verb, remove **-ar, -er, -ir** and add the endings. The forms for **ir** and **ser** are the same and irregular: **fui, foste, foi, fomos, foram**. The context tells which one it is: *Fui ao cinema* (I went), *Fui professor* (I was a teacher).' },
          { t: 'table', caption: 'The pretérito perfeito', quiz: true, head: ['', 'falar', 'comer', 'abrir', 'ir / ser'], rows: [
            ['eu', 'falei', 'comi', 'abri', 'fui'],
            ['tu', 'falaste', 'comeste', 'abriste', 'foste'],
            ['ele / ela / você', 'falou', 'comeu', 'abriu', 'foi'],
            ['nós', 'falámos', 'comemos', 'abrimos', 'fomos'],
            ['eles / elas / vocês', 'falaram', 'comeram', 'abriram', 'foram'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Portugal, the **nós** form of **-ar** verbs has an accent: **falámos** (past) against **falamos** (present). In Brazil, both are *falamos*. For **-er** and **-ir** verbs, **comemos** and **abrimos** are the same in the present and the past; the context shows which one.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Ontem **falei** com a Ana.', n: '*Falar* → *falei*.' },
            { s: 'Ao almoço **comi** uma sopa.', n: '*Comer* → *comi*.' },
            { s: 'Ele **abriu** a janela.', n: '*Abrir* → *abriu*.' },
            { s: 'Nós **fomos** ao cinema.', n: '*Ir* → *fomos*.' },
            { s: 'Eles **trabalharam** muito.', n: '*Trabalhar* → *trabalharam*.' },
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write the pretérito perfeito of falar.', verb: 'falar', tense: 'pretérito perfeito', rows: [
            ['eu', 'falei'],
            ['tu', 'falaste'],
            ['ele / ela / você', 'falou'],
            ['nós', 'falámos'],
            ['eles / elas / vocês', 'falaram'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the pretérito perfeito.', items: [
            { q: 'Ontem eu ___ com a Ana. (falar)', a: ['falei'], why: '*Eu falei*.' },
            { q: 'Tu ___ pão ao pequeno-almoço. (comer)', a: ['comeste'], why: '*Tu comeste*.' },
            { q: 'Ele ___ a porta. (abrir)', a: ['abriu'], why: '*Ele abriu*.' },
            { q: 'Nós ___ ao cinema. (ir)', a: ['fomos'], why: '*Nós fomos*.' },
            { q: 'Eles ___ muito. (trabalhar)', a: ['trabalharam'], why: '*Eles trabalharam*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Present or past? Sort the verbs.', groups: ['present', 'past'], explain: ['groups'], items: [
            { s: 'falo', g: 0, why: '*Falo* is the present.' },
            { s: 'falei', g: 1, why: '*Falei* is the pretérito perfeito.' },
            { s: 'comeu', g: 1, why: '*Comeu* is the pretérito perfeito.' },
            { s: 'come', g: 0, why: '*Come* is the present.' },
            { s: 'abriu', g: 1, why: '*Abriu* is the pretérito perfeito.' },
            { s: 'abre', g: 0, why: '*Abre* is the present.' },
            { s: 'falámos', g: 1, why: 'The accent shows the past in Portugal.' },
            { s: 'vamos', g: 0, why: '*Vamos* is the present of *ir*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Ontem eu ___ ao cinema.', o: ['fui', 'vou', 'foi'], why: '*Eu fui*.' },
            { q: 'Ela ___ uma carta ontem.', o: ['escreveu', 'escreve', 'escrevi'], why: '*Ela escreveu*.' },
            { q: 'Eles ___ o jantar.', o: ['comeram', 'comeu', 'comem'], why: '*Eles comeram*.' },
            { q: 'Tu ___ com o Pedro?', o: ['falaste', 'falou', 'falei'], why: '*Tu falaste*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Ontem eu [falo] com a Ana.', a: ['falei'], why: 'A finished action: *falei*.' },
            { s: 'Ela [comei] uma sopa.', a: ['comeu'], why: '*Ela comeu*.' },
            { s: 'Nós [falamos] ontem com o Pedro.', a: ['falámos'], why: 'In Portugal, the past has an accent: *falámos*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Ontem falei com a Ana.', why: 'A time word can come first.' },
            { a: 'Nós fomos ao cinema.', why: '*Fomos* = we went.' },
            { a: 'Ele abriu a janela.', why: '*Abriu* = he opened.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Fiz, tive, estive',
      about: 'Learn the most common irregular verbs in the pretérito perfeito.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Some very common verbs have irregular forms in the pretérito perfeito. Learn them as they are: **fazer** (fiz), **ter** (tive), **estar** (estive), **ver** (vi), **dizer** (disse), **pôr** (pus), **vir** (vim), **ler** (li). The **eu** and **ele** forms are the most useful.' },
          { t: 'table', caption: 'Irregular verbs', explain: ['head'], head: ['Infinitive', 'eu', 'ele / ela', 'eles / elas'], rows: [
            ['fazer', 'fiz', 'fez', 'fizeram'],
            ['ter', 'tive', 'teve', 'tiveram'],
            ['estar', 'estive', 'esteve', 'estiveram'],
            ['ver', 'vi', 'viu', 'viram'],
            ['dizer', 'disse', 'disse', 'disseram'],
            ['pôr', 'pus', 'pôs', 'puseram'],
            ['vir', 'vim', 'veio', 'vieram'],
            ['ler', 'li', 'leu', 'leram'],
            ['dar', 'dei', 'deu', 'deram'],
          ] },
          { t: 'tip', art: 'owl', md: 'Look at **disse**: it is the same for *eu* and *ele*. The *tu* forms follow the pattern *-ste*: **fizeste, tiveste, estiveste, viste, disseste**. The *nós* forms: **fizemos, tivemos, estivemos, vimos, dissemos**. Notice that **vimos** can be the past of *ver* (we saw) or the present of *vir* (we come). The past of *vir* is **viemos**.' },
        ],
        [
          { t: 'text', md: '**Reflexive verbs** also use the pretérito perfeito: *Levantei-me às sete. Deitaste-te tarde? Ela vestiu-se e saiu.* In Portugal, the pronoun goes **after** the verb with a hyphen in a normal sentence. It goes **before** the verb in a negative sentence and after question words: *Não me levantei cedo. A que horas te levantaste?*' },
          { t: 'examples', items: [
            { s: 'Ontem **fiz** o jantar.', n: '*Fazer* → *fiz*.' },
            { s: 'Na quarta **tive** uma reunião.', n: '*Ter* → *tive*.' },
            { s: 'Ela **esteve** em Lisboa.', n: '*Estar* → *esteve*.' },
            { s: 'Nós **vimos** um filme.', n: '*Ver* → *vimos*.' },
            { s: '**Levantei-me** às sete.', n: 'A reflexive verb: *levantei-me*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the pretérito perfeito.', items: [
            { q: 'Ontem eu ___ o jantar. (fazer)', a: ['fiz'], why: '*Eu fiz*.' },
            { q: 'Tu ___ uma reunião? (ter)', a: ['tiveste'], why: '*Tu tiveste*.' },
            { q: 'Ela ___ em Lisboa. (estar)', a: ['esteve'], why: '*Ela esteve*.' },
            { q: 'Nós ___ um filme. (ver)', a: ['vimos'], why: '*Nós vimos*.' },
            { q: 'Eles ___ a verdade. (dizer)', a: ['disseram'], why: '*Eles disseram*.' },
            { q: 'Eu ___ a mesa. (pôr)', a: ['pus'], why: '*Eu pus*.' },
            { q: 'Ele ___ de manhã. (vir)', a: ['veio'], why: '*Ele veio*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the infinitive with the form for ele.', pairs: [
            ['fazer', 'fez'],
            ['ter', 'teve'],
            ['estar', 'esteve'],
            ['ver', 'viu'],
            ['vir', 'veio'],
            ['ler', 'leu'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the reflexive verb.', items: [
            { q: 'Eu levantei-___ às sete.', a: ['me'], why: '*Eu levantei-me*.' },
            { q: 'Ela ___-se tarde. (deitar)', a: ['deitou'], why: '*Ela deitou-se*.' },
            { q: 'Tu ___-te ontem? (levantar)', a: ['levantaste'], why: '*Tu levantaste-te*.' },
            { q: 'Não ___ levantei cedo.', a: ['me'], why: 'In a negative sentence, *me* goes before the verb.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Ontem eu ___ muito trabalho.', o: ['tive', 'tenho', 'teve'], why: '*Eu tive*.' },
            { q: 'Ele ___ à festa.', o: ['veio', 'vem', 'vieram'], why: '*Ele veio*.' },
            { q: 'Nós ___ um filme.', o: ['vimos', 'viu', 'vi'], why: '*Nós vimos*.' },
            { q: 'Eu ___ um livro.', o: ['li', 'leu', 'leio'], why: '*Eu li*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Ontem eu [fazi] o jantar.', a: ['fiz'], why: '*Eu fiz*.' },
            { s: 'Ela [estivou] em Lisboa.', a: ['esteve'], why: '*Ela esteve*.' },
            { s: 'Eles disseram que sim, e eu [disi] que não.', a: ['disse'], why: '*Eu disse*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Ontem fiz o jantar.', why: '*Fiz* = I made.' },
            { a: 'Levantei-me às sete.', why: 'The pronoun after the verb.' },
            { a: 'Não me levantei cedo.', why: 'The pronoun before the verb in a negative.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Ontem, há dois dias, depois',
      about: 'Place events in time and put them in order.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'To place an event in the past, use time words: **ontem** (yesterday), **anteontem** (the day before yesterday), **na semana passada** (last week), **no mês passado**, **no ano passado**, **ontem à noite**, **esta manhã**. To say *ago*, use **há** + time: *Fui a Lisboa há duas semanas.* To put events in order, use **primeiro** (first), **depois** or **a seguir** (then), **mais tarde** (later), **finalmente** (finally).' },
          { t: 'table', caption: 'Time and order', explain: ['head', 'col1'], head: ['Portuguese', 'English'], rows: [
            ['ontem', 'yesterday'],
            ['anteontem', 'the day before yesterday'],
            ['na semana passada', 'last week'],
            ['no mês passado', 'last month'],
            ['há dois dias', 'two days ago'],
            ['primeiro', 'first'],
            ['depois / a seguir', 'then'],
            ['mais tarde', 'later'],
            ['finalmente', 'finally'],
          ] },
          { t: 'tip', art: 'owl', md: 'Use **há** + time for *ago*: *há dois dias* (two days ago). Do not use *atrás* in Portugal. To ask what someone did, say **O que fizeste ontem?** or **Onde foste no fim de semana?** To tell a story, start with **primeiro** and end with **finalmente**.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Ontem** trabalhei até tarde.', n: 'A finished action yesterday.' },
            { s: 'Fui a Lisboa **há duas semanas**.', n: '*Há* + time = ago.' },
            { s: '**Primeiro** acordei, **depois** tomei o pequeno-almoço.', n: 'Two events in order.' },
            { s: '**Mais tarde** vi um filme.', n: 'Later.' },
            { s: '**Finalmente** adormeci.', n: 'At last.' },
          ] },
          { t: 'dialogue', title: 'O fim de semana', lines: [
            { who: 'Marta', s: 'O que fizeste no fim de semana?' },
            { who: 'Rafael', s: 'No sábado fui à praia com amigos. Depois jantámos num restaurante.' },
            { who: 'Marta', s: 'E no domingo?' },
            { who: 'Rafael', s: 'Fiquei em casa. Li um livro e vi um filme.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it in the past. Start with Ontem.', items: [
            { q: 'Trabalho em casa.', cue: 'Ontem', a: ['Ontem trabalhei em casa.'], why: '*Trabalho* → *trabalhei*.' },
            { q: 'Como pão.', cue: 'Ontem', a: ['Ontem comi pão.'], why: '*Como* → *comi*.' },
            { q: 'Vou ao cinema.', cue: 'Ontem', a: ['Ontem fui ao cinema.'], why: '*Vou* → *fui*.' },
            { q: 'Faço o jantar.', cue: 'Ontem', a: ['Ontem fiz o jantar.'], why: '*Faço* → *fiz*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the time word with its meaning.', pairs: [
            ['ontem', 'yesterday'],
            ['anteontem', 'the day before yesterday'],
            ['na semana passada', 'last week'],
            ['há dois dias', 'two days ago'],
            ['finalmente', 'finally'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Fui a Lisboa ___ duas semanas.', o: ['há', 'em', 'de'], why: '*Há* + time = ago.' },
            { q: '___ acordei, depois tomei o pequeno-almoço.', o: ['Primeiro', 'Finalmente', 'Ontem'], why: '*Primeiro* starts the story.' },
            { q: '___ adormeci, às duas da manhã.', o: ['Finalmente', 'Primeiro', 'Ontem'], why: '*Finalmente* ends the story.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Fui a Lisboa há duas semanas.', why: '*Há* + time at the end.' },
            { a: 'Primeiro acordei, depois tomei o pequeno-almoço.', why: '*Primeiro* … *depois*.' },
            { a: 'Ontem trabalhei até tarde.', why: 'A time word can come first.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Uma semana ocupada',
      about: 'Read an e-mail about a busy week.',
      art: 'ghost',
      spreads: [
        [
          { t: 'reading', title: 'Querida Marta', md: 'Querida Marta,\n\nQue semana tão ocupada! Na segunda-feira acordei às seis e trabalhei até tarde. Na terça fui ao médico e depois almocei com a minha irmã. Na quarta tive uma reunião muito longa. Na quinta vi um filme com o Pedro. Na sexta, finalmente, descansei: fiquei em casa, li um livro e dormi muito.\n\nE tu, o que fizeste esta semana?\n\nBeijinhos,\nAna' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Na segunda-feira, a Ana acordou às seis.', a: 't', why: '*Acordei às seis.*' },
            { q: 'Na terça, a Ana almoçou com a mãe.', a: 'f', why: 'She had lunch with her sister: *com a minha irmã*.' },
            { q: 'Na quarta, a Ana teve uma reunião.', a: 't', why: '*Tive uma reunião muito longa.*' },
            { q: 'Na quinta, a Ana jantou fora.', a: 'ng', why: 'She saw a film with Pedro; dinner is not mentioned.' },
            { q: 'Na sexta, a Ana ficou em casa.', a: 't', why: '*Fiquei em casa.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'O que fez a Ana na terça?', o: ['Foi ao médico.', 'Viu um filme.', 'Teve uma reunião.'], why: '*Na terça fui ao médico.*' },
            { q: 'Com quem viu o filme?', o: ['Com o Pedro.', 'Com a irmã.', 'Com a Marta.'], why: '*Vi um filme com o Pedro.*' },
            { q: 'Quando descansou a Ana?', o: ['Na sexta.', 'Na segunda.', 'Na quarta.'], why: '*Na sexta, finalmente, descansei.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the pretérito perfeito.', items: [
            { s: 'Na segunda [acordei] às seis e [trabalhei] até tarde.', why: '*Acordei* and *trabalhei* are in the pretérito perfeito.' },
            { s: 'Na terça [fui] ao médico e depois [almocei] com a minha irmã.', why: '*Fui* and *almocei* are in the pretérito perfeito.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the pretérito perfeito.', items: [
            { q: 'Na quinta eu ___ um filme. (ver)', a: ['vi'], why: '*Eu vi*.' },
            { q: 'Na sexta eu ___ um livro. (ler)', a: ['li'], why: '*Eu li*.' },
            { q: 'Na quarta eu ___ uma reunião. (ter)', a: ['tive'], why: '*Eu tive*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Na sexta finalmente descansei.', why: '*Finalmente* ends the week.' },
            { a: 'Na terça fui ao médico.', why: '*Fui* = I went.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Ontem eu ___ ao cinema.', o: ['fui', 'vou', 'foi'], why: '*Eu fui*.' },
      { q: 'Ela ___ uma carta ontem.', o: ['escreveu', 'escreve', 'escrevi'], why: '*Ela escreveu*.' },
      { q: 'Nós ___ um filme.', o: ['vimos', 'viu', 'vi'], why: '*Nós vimos*.' },
      { q: 'Fui a Lisboa ___ duas semanas.', o: ['há', 'em', 'de'], why: '*Há* + time = ago.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the verb in the pretérito perfeito.', items: [
      { q: 'Ontem eu ___ o jantar. (fazer)', a: ['fiz'], why: '*Eu fiz*.' },
      { q: 'Tu ___ pão ao pequeno-almoço. (comer)', a: ['comeste'], why: '*Tu comeste*.' },
      { q: 'Eles ___ muito. (trabalhar)', a: ['trabalharam'], why: '*Eles trabalharam*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the infinitive with the form for ele.', pairs: [
      ['fazer', 'fez'],
      ['ter', 'teve'],
      ['vir', 'veio'],
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Ontem eu [falo] com a Ana.', a: ['falei'], why: 'A finished action: *falei*.' },
      { s: 'Ontem eu [fazi] o jantar.', a: ['fiz'], why: '*Eu fiz*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Levantei-me às sete.', why: 'The pronoun after the verb.' },
      { a: 'Primeiro acordei, depois tomei o pequeno-almoço.', why: '*Primeiro* … *depois*.' },
    ] },
  ],
};
