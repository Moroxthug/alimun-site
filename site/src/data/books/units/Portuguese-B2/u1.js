// Portuguese B2, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Looking back and ahead',
  goal: 'Place events in time and read a narrative. Learn the pretérito perfeito composto, the futuro composto and the future for guesses, and the mais-que-perfeito simples of written Portuguese.',
  art: 'snail',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['pretérito perfeito composto', 'futuro composto', 'futuro epistémico', 'mais-que-perfeito simples', 'narrative'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Tenho trabalhado muito',
      about: 'Use the pretérito perfeito composto for something repeated up to now.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'The **pretérito perfeito composto** is made with the **present of ter** and the **past participle**: *tenho trabalhado, tens feito, temos falado*. Be careful: it is **not** the English present perfect. In Portuguese, it says that an action has been **repeated or continuous up to now**: *Tenho trabalhado muito ultimamente* (I have been working a lot lately). A single finished event uses the **perfeito simples**: *Ontem trabalhei muito. Já estive em Lisboa.*' },
          { t: 'table', caption: 'The pretérito perfeito composto', quiz: true, head: ['', 'trabalhar', 'fazer', 'ver'], rows: [
            ['eu', 'tenho trabalhado', 'tenho feito', 'tenho visto'],
            ['tu', 'tens trabalhado', 'tens feito', 'tens visto'],
            ['ele / ela / você', 'tem trabalhado', 'tem feito', 'tem visto'],
            ['nós', 'temos trabalhado', 'temos feito', 'temos visto'],
            ['eles / elas / vocês', 'têm trabalhado', 'têm feito', 'têm visto'],
          ] },
          { t: 'tip', art: 'owl', md: 'Typical time words: **ultimamente**, **nos últimos tempos**, **desde há muito**, **ao longo dos anos**, **nos últimos meses**. Compare: **Já fui a Lisboa** (once, finished) with **Tenho ido a Lisboa** (again and again lately). Look at **têm** (plural) against **tem** (singular).' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Ultimamente **tenho trabalhado** muito.', n: 'Repeated up to now.' },
            { s: 'Ele **tem dormido** mal.', n: 'It has been going on.' },
            { s: 'Nós **temos falado** muito sobre isso.', n: 'Repeated conversations.' },
            { s: 'Eles **têm viajado** muito nos últimos anos.', n: 'Repeated trips.' },
            { s: 'Ontem **trabalhei** até tarde.', n: 'A single finished event: the perfeito simples.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the verb in the pretérito perfeito composto.', items: [
            { q: 'Ultimamente ___ trabalhado muito. (eu, ter)', a: ['tenho'], why: '*Eu tenho trabalhado*.' },
            { q: 'Ele ___ dormido mal. (ter)', a: ['tem'], why: '*Ele tem dormido*.' },
            { q: 'Nós ___ falado muito sobre isso. (ter)', a: ['temos'], why: '*Nós temos falado*.' },
            { q: 'Eles ___ viajado muito. (ter)', a: ['têm'], why: '*Eles têm viajado*, with a circumflex.' },
            { q: 'Tu ___ feito muito exercício? (ter)', a: ['tens'], why: '*Tu tens feito*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Simples or composto? Choose.', items: [
            { q: 'Ontem ___ ao cinema.', o: ['fui', 'tenho ido', 'tinha ido'], why: 'A single finished event: the perfeito simples.' },
            { q: 'Nos últimos tempos ___ ido muito ao cinema.', o: ['tenho', 'fui', 'ia'], why: 'Repeated up to now: *tenho ido*.' },
            { q: 'Ela ___ comido mal ultimamente.', o: ['tem', 'comeu', 'teve'], why: '*Tem comido* = she has been eating badly.' },
            { q: 'Em 2020 ___ a Lisboa.', o: ['fui', 'tenho ido', 'tenho'], why: 'A finished event in the past: *fui*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Say that it has been going on lately.', items: [
            { q: 'Trabalho muito ultimamente.', a: ['Tenho trabalhado muito ultimamente.'], why: '*Trabalho* → *tenho trabalhado*.' },
            { q: 'Ele dorme mal ultimamente.', a: ['Ele tem dormido mal ultimamente.'], why: '*Dorme* → *tem dormido*.' },
            { q: 'Vamos ao ginásio nos últimos tempos.', a: ['Temos ido ao ginásio nos últimos tempos.'], why: '*Vamos* → *temos ido*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Ontem [tenho comido] pouco.', a: ['comi'], why: 'A single finished event: *comi*.' },
            { s: 'Ultimamente [comi] mal.', a: ['tenho comido'], why: 'Repeated up to now: *tenho comido*.' },
            { s: 'Eles [tem] viajado muito.', a: ['têm'], why: 'More than one person: *têm*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Ultimamente tenho trabalhado muito.', why: '*Tenho trabalhado* = repeated up to now.' },
            { a: 'Eles têm viajado muito nos últimos anos.', why: '*Têm* with a circumflex.' },
            { a: 'Ontem trabalhei até tarde.', why: 'A single finished event.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Terei acabado, será',
      about: 'Use the futuro composto, and the future for guesses.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'The **futuro composto** is made with the **future of ter** and the **past participle**: *terei acabado, terás chegado*. It says that something will be **finished before** a future moment: *Quando chegares, já terei acabado. Até amanhã teremos feito o trabalho.* The **simple future** also gives a **guess** about the present: *Que horas são? – Serão as três. Onde está o Marco? – Estará no escritório.* And the **futuro composto** guesses about the past: *Não responde: terá perdido o telemóvel.*' },
          { t: 'table', caption: 'The futuro composto', quiz: true, head: ['', 'acabar', 'chegar'], rows: [
            ['eu', 'terei acabado', 'terei chegado'],
            ['tu', 'terás acabado', 'terás chegado'],
            ['ele / ela / você', 'terá acabado', 'terá chegado'],
            ['nós', 'teremos acabado', 'teremos chegado'],
            ['eles / elas / vocês', 'terão acabado', 'terão chegado'],
          ] },
          { t: 'tip', art: 'owl', md: 'Both forms of **guess** mean *probably*: the same as **talvez** (with the subjunctive), **deve** + infinitive or **provavelmente**. Compare **É o Marco** (a fact) and **Será o Marco** (a guess). The futuro composto uses **ter** for every verb, never *ser*: *terei chegado*.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Quando chegares, já **terei acabado**.', n: 'Finished before a future moment.' },
            { s: 'Até amanhã **teremos feito** o trabalho.', n: 'By a future moment.' },
            { s: 'Que horas são? – **Serão** as três.', n: 'A guess about the present.' },
            { s: 'O Marco não responde: **terá perdido** o telemóvel.', n: 'A guess about the past.' },
            { s: 'Onde está a Ana? – **Estará** na biblioteca.', n: 'A guess about the present.' },
          ] },
          { t: 'dialogue', title: 'Onde está o Marco?', lines: [
            { who: 'Sara', s: 'O Marco não atende o telefone.' },
            { who: 'Paulo', s: 'Terá perdido o comboio.' },
            { who: 'Sara', s: 'Ou estará ainda no escritório.' },
            { who: 'Paulo', s: 'Serão as seis: costuma sair às cinco.' },
            { who: 'Sara', s: 'Então terá apanhado trânsito.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the futuro composto of acabar.', verb: 'acabar', tense: 'futuro composto', rows: [
            ['eu', 'terei acabado'],
            ['tu', 'terás acabado'],
            ['ele / ela / você', 'terá acabado'],
            ['nós', 'teremos acabado'],
            ['eles / elas / vocês', 'terão acabado'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the verb in the future or the futuro composto.', items: [
            { q: 'Quando chegares, já ___ acabado. (eu, ter)', a: ['terei'], why: '*Eu terei acabado*.' },
            { q: 'Até amanhã ___ feito o trabalho. (nós, ter)', a: ['teremos'], why: '*Nós teremos feito*.' },
            { q: 'O Marco não responde: ___ perdido o telemóvel. (ter)', a: ['terá'], why: 'A guess about the past: *terá perdido*.' },
            { q: 'Onde está a Ana? – ___ na biblioteca. (estar)', a: ['Estará'], why: 'A guess about the present: *estará*.' },
            { q: 'Que horas são? – ___ as três. (ser)', a: ['Serão'], why: 'A guess about the time: *serão*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Turn the possibility into a guess with the future.', items: [
            { q: 'Provavelmente está cansado.', a: ['Estará cansado.'], why: '*Provavelmente está* → *estará*.' },
            { q: 'Provavelmente perdeu o comboio.', a: ['Terá perdido o comboio.'], why: '*Provavelmente perdeu* → *terá perdido*.' },
            { q: 'Provavelmente são as três.', a: ['Serão as três.'], why: '*Provavelmente são* → *serão*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'O Marco [será] perdido o telemóvel.', a: ['terá'], why: 'The futuro composto uses *ter*: *terá perdido*.' },
            { s: 'Quando chegares, já [acabarei].', a: ['terei acabado'], why: 'Finished before a future moment: *terei acabado*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Terá perdido o comboio.', why: 'A guess about the past.' },
            { a: 'Serão as seis da tarde.', why: 'A guess about the time.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Fizera, dissera, fora',
      about: 'Recognise the mais-que-perfeito simples of written Portuguese.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'In books and formal texts, the **mais-que-perfeito simples** replaces *tinha feito* with a single word. It is made from the **eles** form of the perfeito: remove **-ram** and add **-ra, -ras, -ra, -ramos, -ram**: *falaram → falara*, *comeram → comera*, *fizeram → fizera*, *disseram → dissera*. It means the same as **tinha** + participle: **fizera = tinha feito**. In speech, people use **tinha feito**. At B2, you must **recognise** it quickly.' },
          { t: 'table', caption: 'The mais-que-perfeito simples', explain: ['head'], head: ['Infinitive', 'eu / ele', 'nós', 'eles'], rows: [
            ['falar', 'falara', 'faláramos', 'falaram'],
            ['comer', 'comera', 'comêramos', 'comeram'],
            ['partir', 'partira', 'partíramos', 'partiram'],
            ['ser / ir', 'fora', 'fôramos', 'foram'],
            ['ter', 'tivera', 'tivéramos', 'tiveram'],
            ['fazer', 'fizera', 'fizéramos', 'fizeram'],
            ['dizer', 'dissera', 'disséramos', 'disseram'],
            ['ver', 'vira', 'víramos', 'viram'],
          ] },
          { t: 'tip', art: 'owl', md: 'The **eles** form looks the same as the perfeito (**fizeram** can be *they did* or *they had done*). The context shows which one: *O rio levou a ponte que os avós construíram* (the grandparents had built it earlier). Notice **fora**: it is the mais-que-perfeito of both *ser* and *ir*.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'O Manuel, que **aprendera** o ofício com o pai, construiu a ponte.', n: '*Aprendera* = *tinha aprendido*.' },
            { s: 'Quando cheguei, ele já **saíra**.', n: '*Saíra* = *tinha saído*.' },
            { s: 'Disse que já **fizera** o trabalho.', n: '*Fizera* = *tinha feito*.' },
            { s: 'Nunca **vira** uma cidade tão grande.', n: '*Vira* = *tinha visto*.' },
            { s: 'A ponte que os aldeões **construíram** havia gerações.', n: 'The context shows it is earlier.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the literary form with the spoken form.', pairs: [
            ['fizera', 'tinha feito'],
            ['dissera', 'tinha dito'],
            ['vira', 'tinha visto'],
            ['saíra', 'tinha saído'],
            ['tivera', 'tinha tido'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the mais-que-perfeito simples.', items: [
            { q: 'Disse que já ___ o trabalho. (fazer)', a: ['fizera'], why: '*Fizeram* → *fizera*.' },
            { q: 'Quando cheguei, ele já ___. (sair)', a: ['saíra'], why: '*Saíram* → *saíra*.' },
            { q: 'Nunca ___ uma cidade tão grande. (eu, ver)', a: ['vira'], why: '*Viram* → *vira*.' },
            { q: 'Ela contou o que lhe ___. (dizer)', a: ['dissera'], why: '*Disseram* → *dissera*.' },
            { q: 'O Manuel ___ o ofício com o pai. (aprender)', a: ['aprendera'], why: '*Aprenderam* → *aprendera*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence in the written style.', items: [
            { q: 'Disse que já tinha feito o trabalho.', a: ['Disse que já fizera o trabalho.'], why: '*Tinha feito* → *fizera*.' },
            { q: 'Quando cheguei, ele já tinha saído.', a: ['Quando cheguei, ele já saíra.'], why: '*Tinha saído* → *saíra*.' },
            { q: 'Nunca tinha visto uma cidade tão grande.', a: ['Nunca vira uma cidade tão grande.'], why: '*Tinha visto* → *vira*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Quando cheguei, ele já ___. (written style)', o: ['saíra', 'saí', 'sairá'], why: 'Before another past moment: *saíra*.' },
            { q: 'Disse que já ___ o trabalho. (written style)', o: ['fizera', 'fez', 'fará'], why: '*Fizera* = *tinha feito*.' },
            { q: 'Nunca ___ uma cidade tão grande. (written style)', o: ['vira', 'viu', 'verá'], why: '*Vira* = *tinha visto*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Disse que já [fez] o trabalho antes. (written style, before)', a: ['fizera'], why: '*Fizera* for an earlier action.' },
            { s: 'Disse que nunca [viu] uma cidade tão grande. (written style, before)', a: ['vira'], why: '*Vira* = *tinha visto*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A ponte de pedra',
      about: 'Read a short tale that mixes the perfeito, the imperfeito and the mais-que-perfeito simples.',
      art: 'dragon',
      spreads: [
        [
          { t: 'reading', title: 'A ponte de pedra', md: 'Há muitos anos, numa pequena aldeia entre colinas, vivia um velho construtor chamado Manuel. Um dia, o rio, cheio por causa das chuvas, levou a ponte de madeira que os avós dos aldeões construíram. Os habitantes reuniram-se na praça e discutiram longamente. Por fim, decidiram construir outra, mas ninguém sabia como.\n\nO Manuel, que aprendera o ofício com o pai, disse: «Construí-la-ei eu. Quando a acabar, nenhum rio poderá levá-la.» Trabalhou durante três verões, sozinho, e todas as noites alguém lhe levava pão. A ponte ficou pronta no dia da festa da aldeia. O Manuel atravessou-a em primeiro lugar, sem dizer uma palavra.\n\nHoje, dizem, a ponte ainda lá está. Será verdade? Quem a atravessa lembra-se do Manuel.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'O Manuel era um velho construtor.', a: 't', why: '*Vivia um velho construtor chamado Manuel.*' },
            { q: 'A ponte antiga era de pedra.', a: 'f', why: 'It was a wooden bridge: *a ponte de madeira*.' },
            { q: 'O Manuel trabalhou durante três verões.', a: 't', why: '*Trabalhou durante três verões.*' },
            { q: 'O Manuel construiu a ponte com a ajuda do filho.', a: 'ng', why: 'The text says he worked alone and mentions no son.' },
            { q: 'O Manuel atravessou a ponte em primeiro lugar.', a: 't', why: '*Atravessou-a em primeiro lugar.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Porque levou o rio a ponte?', o: ['Estava cheio por causa das chuvas.', 'A ponte era velha.', 'Houve um terramoto.'], why: '*O rio, cheio por causa das chuvas, levou a ponte.*' },
            { q: 'O que prometeu o Manuel?', o: ['Que nenhum rio poderia levar a nova ponte.', 'Que a ponte ficaria pronta num mês.', 'Que pediria ajuda.'], why: '*Quando a acabar, nenhum rio poderá levá-la.*' },
            { q: 'Quando ficou pronta a ponte?', o: ['No dia da festa da aldeia.', 'No inverno.', 'Passado um ano.'], why: '*A ponte ficou pronta no dia da festa da aldeia.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the mais-que-perfeito simples.', items: [
            { s: 'O Manuel, que [aprendera] o ofício com o pai, disse: «Construí-la-ei eu.»', why: '*Aprendera* = *tinha aprendido*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Os habitantes ___-se na praça. (reunir, perfeito)', a: ['reuniram'], why: '*Reuniram-se*.' },
            { q: 'Quando a ___, nenhum rio poderá levá-la. (eu, acabar)', a: ['acabar'], why: 'The futuro do conjuntivo: *quando a acabar*.' },
            { q: 'Hoje, dizem, a ponte ainda lá está. ___ verdade? (ser, guess)', a: ['Será'], why: 'The future as a guess: *será*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'O Manuel trabalhou durante três verões, sozinho.', why: 'A finished period: the perfeito.' },
            { a: 'Quem atravessa a ponte lembra-se do Manuel.', why: 'A present-tense ending to the tale.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Ontem ___ ao cinema.', o: ['fui', 'tenho ido', 'tinha ido'], why: 'A single finished event: *fui*.' },
      { q: 'Ultimamente ___ trabalhado muito.', o: ['tenho', 'trabalhei', 'trabalhava'], why: 'Repeated up to now: *tenho trabalhado*.' },
      { q: 'O Marco não responde: ___ perdido o telemóvel.', o: ['terá', 'será', 'tinha'], why: 'A guess about the past: *terá perdido*.' },
      { q: 'Quando cheguei, ele já ___. (written style)', o: ['saíra', 'saí', 'sairá'], why: '*Saíra* = *tinha saído*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
      { q: 'Nós ___ falado muito sobre isso. (ter)', a: ['temos'], why: '*Nós temos falado*.' },
      { q: 'Até amanhã ___ acabado o trabalho. (eu, ter)', a: ['terei'], why: '*Eu terei acabado*.' },
      { q: 'Disse que já ___ o trabalho. (fazer, written style)', a: ['fizera'], why: '*Fizeram* → *fizera*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the literary form with the spoken form.', pairs: [
      ['fizera', 'tinha feito'],
      ['dissera', 'tinha dito'],
      ['vira', 'tinha visto'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence.', items: [
      { q: 'Trabalho muito ultimamente.', a: ['Tenho trabalhado muito ultimamente.'], why: '*Trabalho* → *tenho trabalhado*.' },
      { q: 'Provavelmente perdeu o comboio.', a: ['Terá perdido o comboio.'], why: '*Provavelmente perdeu* → *terá perdido*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Ontem [tenho comido] pouco.', a: ['comi'], why: 'A single finished event: *comi*.' },
      { s: 'O Marco [será] perdido o telemóvel.', a: ['terá'], why: 'The futuro composto uses *ter*.' },
    ] },
  ],
};
