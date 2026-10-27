// Portuguese A2, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Experiences and childhood',
  goal: 'Talk about what you used to do and what you have already done. Learn the pretérito imperfeito, its use for habits and descriptions, the contrast with the pretérito perfeito, and já, nunca and ainda não.',
  art: 'dragon',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'speaking'], topics: ['pretérito imperfeito', 'habits', 'description', 'perfeito vs imperfeito', 'já nunca ainda não', 'childhood'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Falava, comia, era',
      about: 'Form the pretérito imperfeito.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'The **pretérito imperfeito** talks about the past as it was, without saying when it started or ended. Take the infinitive, remove the ending, and add **-ava** for verbs in **-ar** and **-ia** for verbs in **-er** and **-ir**. Four verbs are irregular: **ser** (era), **ter** (tinha), **vir** (vinha) and **pôr** (punha). The verb **ir** is regular in this tense: **ia**.' },
          { t: 'table', caption: 'The pretérito imperfeito', quiz: true, head: ['', 'falar', 'comer', 'abrir', 'ser', 'ter'], rows: [
            ['eu', 'falava', 'comia', 'abria', 'era', 'tinha'],
            ['tu', 'falavas', 'comias', 'abrias', 'eras', 'tinhas'],
            ['ele / ela / você', 'falava', 'comia', 'abria', 'era', 'tinha'],
            ['nós', 'falávamos', 'comíamos', 'abríamos', 'éramos', 'tínhamos'],
            ['eles / elas / vocês', 'falavam', 'comiam', 'abriam', 'eram', 'tinham'],
          ] },
          { t: 'tip', art: 'owl', md: 'Look at the accent in the **nós** form: **falávamos, comíamos, éramos, tínhamos, íamos**. The **eu** and **ele** forms are the same: *eu falava, ele falava*. Add the pronoun when it is not clear.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Quando eu era pequeno, **vivia** numa aldeia.', n: '*Viver* → *vivia*.' },
            { s: 'Nós **íamos** à praia todos os verões.', n: '*Ir* → *íamos*.' },
            { s: 'A escola **era** pequena.', n: '*Ser* → *era*.' },
            { s: 'Eu **tinha** dez anos.', n: '*Ter* → *tinha*.' },
            { s: 'Eles **jogavam** à bola no recreio.', n: '*Jogar* → *jogavam*.' },
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write the imperfeito of falar.', verb: 'falar', tense: 'pretérito imperfeito', rows: [
            ['eu', 'falava'],
            ['tu', 'falavas'],
            ['ele / ela / você', 'falava'],
            ['nós', 'falávamos'],
            ['eles / elas / vocês', 'falavam'],
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the imperfeito of ser.', verb: 'ser', tense: 'pretérito imperfeito', rows: [
            ['eu', 'era'],
            ['tu', 'eras'],
            ['ele / ela / você', 'era'],
            ['nós', 'éramos'],
            ['eles / elas / vocês', 'eram'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the verb in the imperfeito.', items: [
            { q: 'Quando eu era pequeno, ___ numa aldeia. (viver)', a: ['vivia'], why: '*Eu vivia*.' },
            { q: 'Tu ___ muito doces. (comer)', a: ['comias'], why: '*Tu comias*.' },
            { q: 'Nós ___ à praia todos os verões. (ir)', a: ['íamos'], why: '*Nós íamos*, with an accent.' },
            { q: 'A escola ___ pequena. (ser)', a: ['era'], why: '*A escola era*.' },
            { q: 'Eu ___ dez anos. (ter)', a: ['tinha'], why: '*Eu tinha*.' },
            { q: 'Eles ___ um cão. (ter)', a: ['tinham'], why: '*Eles tinham*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Perfeito or imperfeito? Sort the verbs.', groups: ['perfeito', 'imperfeito'], explain: ['groups'], items: [
            { s: 'falei', g: 0, why: '*Falei* is the perfeito.' },
            { s: 'falava', g: 1, why: '*Falava* is the imperfeito.' },
            { s: 'comeu', g: 0, why: '*Comeu* is the perfeito.' },
            { s: 'comia', g: 1, why: '*Comia* is the imperfeito.' },
            { s: 'era', g: 1, why: '*Era* is the imperfeito of *ser*.' },
            { s: 'fui', g: 0, why: '*Fui* is the perfeito.' },
            { s: 'tinha', g: 1, why: '*Tinha* is the imperfeito of *ter*.' },
            { s: 'tive', g: 0, why: '*Tive* is the perfeito of *ter*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Eu [tinhava] dez anos.', a: ['tinha'], why: '*Ter* is irregular: *tinha*.' },
            { s: 'Ele [comava] muito.', a: ['comia'], why: '*Comer* → *comia*.' },
            { s: 'Nós [iamos] à praia.', a: ['íamos'], why: 'With an accent: *íamos*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Quando era pequeno, vivia numa aldeia.', why: '*Era* and *vivia*: the imperfeito.' },
            { a: 'Nós íamos à praia todos os verões.', why: '*Íamos* = we used to go.' },
            { a: 'A escola era pequena.', why: '*Era* describes.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Quando era pequena',
      about: 'Use the imperfeito for habits, descriptions and ages.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Use the **imperfeito** for **habits in the past**: *Todos os dias ia à escola a pé.* For **descriptions**: *A casa era grande e tinha um jardim.* For **age**: *Tinha dez anos.* For **time and weather in the past**: *Era tarde. Estava frio.* To say *used to*, you can add **costumar**: *Costumava jogar futebol.* The imperfeito of **há** is **havia**: *Havia muitas crianças.*' },
          { t: 'table', caption: 'Uses of the imperfeito', explain: ['head', 'col1'], head: ['Use', 'Meaning', 'Example'], rows: [
            ['habit', 'something I used to do', 'Todos os dias ia à escola a pé.'],
            ['description', 'what something was like', 'A casa era grande.'],
            ['age', 'how old', 'Tinha dez anos.'],
            ['time and weather', 'the scene', 'Era tarde e estava frio.'],
            ['costumar + infinitive', 'used to', 'Costumava jogar futebol.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Typical words for habits: **sempre, todos os dias, muitas vezes, às vezes, aos sábados, quando era pequeno**. In English you might say *used to*; Portuguese often says only the imperfeito.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Quando era pequena, **vivia** em Faro.', n: 'Description of a time of life.' },
            { s: 'Aos sábados **íamos** à biblioteca.', n: 'A habit.' },
            { s: 'A escola **tinha** só duas salas.', n: 'A description.' },
            { s: '**Costumava** jogar futebol com os amigos.', n: '*Costumava* + infinitive.' },
            { s: '**Havia** muitas crianças no recreio.', n: '*Havia* = there were.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Say it in the past. Start with the phrase in brackets.', items: [
            { q: 'Vivo numa aldeia.', cue: 'Quando era pequeno,', a: ['Quando era pequeno, vivia numa aldeia.'], why: '*Vivo* → *vivia*.' },
            { q: 'Vou à escola a pé.', cue: 'Quando era pequena,', a: ['Quando era pequena, ia à escola a pé.'], why: '*Vou* → *ia*.' },
            { q: 'Jogo à bola no recreio.', cue: 'Quando era pequeno,', a: ['Quando era pequeno, jogava à bola no recreio.'], why: '*Jogo* → *jogava*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the imperfeito.', items: [
            { q: 'Todos os dias eu ___ à escola a pé. (ir)', a: ['ia'], why: '*Eu ia*.' },
            { q: 'A casa ___ grande e tinha um jardim. (ser)', a: ['era'], why: '*A casa era*.' },
            { q: 'Aos sábados nós ___ à biblioteca. (ir)', a: ['íamos'], why: '*Nós íamos*.' },
            { q: '___ muitas crianças no recreio. (haver)', a: ['Havia'], why: '*Havia* = there were.' },
            { q: 'Eu ___ jogar futebol com os amigos. (costumar)', a: ['costumava'], why: '*Eu costumava*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Quando eu era pequeno, ___ à praia todos os verões.', o: ['ia', 'fui', 'vou'], why: 'A habit in the past: *ia*.' },
            { q: 'A escola ___ muito pequena.', o: ['era', 'foi', 'é'], why: 'A description: *era*.' },
            { q: 'Eu ___ doces todos os dias.', o: ['comia', 'comi', 'como'], why: 'A habit in the past: *comia*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the use with the example.', pairs: [
            ['a habit', 'Aos sábados íamos à biblioteca.'],
            ['a description', 'A casa era grande.'],
            ['age', 'Tinha dez anos.'],
            ['the weather', 'Estava frio.'],
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Todos os dias ia à escola a pé.', why: 'A habit in the imperfeito.' },
            { a: 'A casa tinha um jardim grande.', why: 'A description.' },
            { a: 'Havia muitas crianças no recreio.', why: '*Havia* = there were.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Estava a chover quando saí',
      about: 'Choose between the perfeito and the imperfeito, and use já, nunca and ainda não.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'The **perfeito** gives the **events**, the things that happened: *Saí de casa. Ouvi o telefone.* The **imperfeito** gives the **background**: the scene, the weather, what was going on: *Estava a chover. Eu estava cansado.* Put them together: *Estava a chover quando saí de casa.* *Quando cheguei, ele dormia.*' },
          { t: 'table', caption: 'Event or background', explain: ['head', 'col1'], head: ['Tense', 'What it tells', 'Example'], rows: [
            ['perfeito', 'a finished event', 'Saí de casa às oito.'],
            ['imperfeito', 'the scene, a habit or a description', 'Estava a chover e eu tinha frio.'],
            ['both', 'an event in a scene', 'Estava a chover quando saí.'],
          ] },
          { t: 'tip', art: 'owl', md: 'A sudden event often comes after **de repente** (suddenly) or **um dia** (one day): *Um dia, a escola fechou.* A repeated action often comes after **sempre, todos os dias, às vezes**: *Todos os dias ia à escola a pé.*' },
        ],
        [
          { t: 'table', caption: 'Já, nunca, ainda não', explain: ['head', 'col1'], head: ['Word', 'Meaning', 'Example'], rows: [
            ['já', 'already, yet (in a question)', 'Já foste a Lisboa?'],
            ['nunca', 'never', 'Nunca fui ao Brasil.'],
            ['ainda não', 'not yet', 'Ainda não vi esse filme.'],
          ] },
          { t: 'examples', items: [
            { s: '**Estava a chover** quando **saí** de casa.', n: 'Background, then an event.' },
            { s: 'Quando **cheguei**, ele **dormia**.', n: 'An event, then what was going on.' },
            { s: 'Já **foste** a Lisboa?', n: '*Já* with the perfeito.' },
            { s: '**Nunca vi** o mar.', n: '*Nunca* with the perfeito.' },
            { s: '**Ainda não vi** esse filme.', n: '*Ainda não* with the perfeito.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Event or background? Sort the verbs.', groups: ['event', 'background'], explain: ['groups'], items: [
            { s: 'chegou', g: 0, why: 'A finished event.' },
            { s: 'chovia', g: 1, why: 'The weather: the scene.' },
            { s: 'tocou o telefone', g: 0, why: 'A sudden event.' },
            { s: 'era tarde', g: 1, why: 'The time: the scene.' },
            { s: 'saí', g: 0, why: 'A finished event.' },
            { s: 'estava cansado', g: 1, why: 'A state: the scene.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right tense.', items: [
            { q: 'Quando cheguei a casa, o meu irmão ___. (dormir)', a: ['dormia'], why: 'What was going on: the imperfeito.' },
            { q: 'De repente, ___ o telefone. (tocar)', a: ['tocou'], why: 'A sudden event: the perfeito.' },
            { q: 'Era tarde e ___ frio, por isso fiquei em casa. (estar)', a: ['estava', 'fazia'], why: 'The weather: the imperfeito.' },
            { q: 'Ontem ___ um filme. (eu, ver)', a: ['vi'], why: 'A finished event: *vi*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the perfeito.', items: [
            { q: 'Já ___ a Lisboa? (tu, ir)', a: ['foste'], why: '*Tu foste*.' },
            { q: 'Nunca ___ o mar. (eu, ver)', a: ['vi'], why: '*Eu vi*.' },
            { q: 'Ainda não ___ o filme. (eu, ver)', a: ['vi'], why: '*Eu vi*.' },
            { q: 'Nunca ___ ao Brasil. (nós, ir)', a: ['fomos'], why: '*Nós fomos*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
            ['já', 'already, yet'],
            ['nunca', 'never'],
            ['ainda não', 'not yet'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Estava a chover quando ___ de casa.', o: ['saí', 'saía', 'sairei'], why: 'A single event: *saí*.' },
            { q: 'Todos os dias ___ à escola a pé.', o: ['ia', 'fui', 'vou'], why: 'A habit: *ia*.' },
            { q: 'Um dia, a escola ___ por causa da chuva.', o: ['fechou', 'fechava', 'fecha'], why: 'A single event: *fechou*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Estava a chover quando saí de casa.', why: 'Background, then an event.' },
            { a: 'Nunca fui ao Brasil.', why: '*Nunca* before the verb.' },
            { a: 'Ainda não vi esse filme.', why: '*Ainda não* before the verb.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Os tempos da escola',
      about: 'Read two people remembering their school days.',
      art: 'dragon',
      spreads: [
        [
          { t: 'reading', title: 'O Rui lembra-se', md: 'Quando era pequeno, vivia numa aldeia perto de Viseu. Todos os dias ia à escola a pé com o meu irmão. A escola era pequena e tinha só duas salas. Gostava muito da minha professora, que era simpática e paciente. No recreio jogávamos à bola. Um dia, choveu tanto que a escola fechou.' },
          { t: 'reading', title: 'A Clara lembra-se', md: 'Eu estudava numa escola grande, na cidade. Chegava sempre atrasada, porque o autocarro era lento. Não gostava de matemática, mas adorava as aulas de música. Aos sábados ia à biblioteca com a minha mãe. Uma vez, perdi o caderno na biblioteca e chorei muito.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'O Rui vivia numa aldeia.', a: 't', why: '*Vivia numa aldeia.*' },
            { q: 'A escola do Rui era grande.', a: 'f', why: 'It was small: *era pequena*.' },
            { q: 'A Clara chegava sempre atrasada.', a: 't', why: '*Chegava sempre atrasada.*' },
            { q: 'A Clara gostava de matemática.', a: 'f', why: '*Não gostava de matemática.*' },
            { q: 'O Rui tinha dois irmãos.', a: 'ng', why: 'He mentions a brother, not how many.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Como ia o Rui à escola?', o: ['A pé.', 'De autocarro.', 'De carro.'], why: '*Ia à escola a pé.*' },
            { q: 'Porque chegava atrasada a Clara?', o: ['O autocarro era lento.', 'Acordava tarde.', 'Perdia o caderno.'], why: '*Porque o autocarro era lento.*' },
            { q: 'Onde ia a Clara aos sábados?', o: ['À biblioteca.', 'À praia.', 'À escola.'], why: '*Aos sábados ia à biblioteca.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs that describe a habit.', items: [
            { s: 'Todos os dias [ia] à escola a pé e no recreio [jogávamos] à bola.', why: '*Ia* and *jogávamos* are habits in the imperfeito.' },
            { s: 'Aos sábados [ia] à biblioteca. Uma vez [perdi] o caderno.', why: '*Ia* is a habit; *perdi* is a single event.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right tense.', items: [
            { q: 'Quando eu era pequeno, ___ numa aldeia. (viver)', a: ['vivia'], why: '*Eu vivia*.' },
            { q: 'Um dia, a escola ___ . (fechar)', a: ['fechou'], why: 'One event: *fechou*.' },
            { q: 'A Clara ___ as aulas de música. (adorar)', a: ['adorava'], why: 'A feeling in the past: *adorava*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'No recreio jogávamos à bola.', why: 'A habit in the imperfeito.' },
            { a: 'Uma vez perdi o caderno na biblioteca.', why: 'One event: the perfeito.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Quando eu era pequeno, ___ à praia todos os verões.', o: ['ia', 'fui', 'vou'], why: 'A habit in the past: *ia*.' },
      { q: 'A escola ___ muito pequena.', o: ['era', 'foi', 'é'], why: 'A description: *era*.' },
      { q: 'Estava a chover quando ___ de casa.', o: ['saí', 'saía', 'sairei'], why: 'A single event: *saí*.' },
      { q: 'Nunca ___ o mar.', o: ['vi', 'verei', 'vendo'], why: '*Nunca* with the perfeito: *vi*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the verb in the right tense.', items: [
      { q: 'Eu ___ dez anos. (ter)', a: ['tinha'], why: '*Eu tinha*.' },
      { q: 'Nós ___ à praia todos os verões. (ir)', a: ['íamos'], why: '*Nós íamos*.' },
      { q: 'De repente, ___ o telefone. (tocar)', a: ['tocou'], why: 'A sudden event: *tocou*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
      ['já', 'already, yet'],
      ['nunca', 'never'],
      ['ainda não', 'not yet'],
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Eu [tinhava] dez anos.', a: ['tinha'], why: '*Ter* is irregular: *tinha*.' },
      { s: 'Nós [iamos] à praia.', a: ['íamos'], why: 'With an accent: *íamos*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Quando era pequeno, vivia numa aldeia.', why: '*Era* and *vivia*.' },
      { a: 'Estava a chover quando saí de casa.', why: 'Background, then an event.' },
    ] },
  ],
};
