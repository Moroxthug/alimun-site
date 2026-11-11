// Portuguese B1, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Telling stories',
  goal: 'Tell a story about the past and link the events clearly. Use the pretérito perfeito and the imperfeito together, the mais-que-perfeito composto for what happened before, and words like enquanto, assim que and de repente.',
  art: 'nata',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['pretérito perfeito', 'imperfeito', 'mais-que-perfeito', 'narration', 'connectors'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'The event and its background',
      about: 'Use the perfeito for events and the imperfeito for the scene around them.',
      art: 'nata',
      spreads: [
        [
          { t: 'text', md: 'In a story, two past tenses work together. The **pretérito perfeito** gives the events, the things that happened one after the other: *Abri a porta. Vi um gato.* The **imperfeito** gives the background: the weather, the time, how people felt, what was going on, and what used to happen again and again: *Chovia. Estava cansado. O gato dormia.*' },
          { t: 'table', caption: 'Which tense?', explain: ['head', 'col1'], head: ['Tense', 'What it tells you', 'Example'], rows: [
            ['perfeito', 'a finished event, one step of the story', 'Saí às oito.'],
            ['imperfeito', 'the scene: weather, time, feelings, descriptions', 'Fazia frio e eu estava cansado.'],
            ['imperfeito', 'a habit in the past', 'Todos os domingos íamos aos avós.'],
            ['imperfeito', 'an action in progress when something else happened', 'Caminhava quando vi o Paulo.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Time words help. *Ontem, um dia, de repente, às oito* often go with the perfeito. *Sempre, todos os dias, normalmente, muitas vezes, em criança* often go with the imperfeito. But it is the idea that decides: an event moves the story forward, the background does not.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Ontem à noite **cheguei** tarde porque **chovia** muito.', n: 'The event is *cheguei*; the weather is the background.' },
            { s: 'Quando **era** pequena, **vivia** em Faro.', n: 'Two imperfeitos: a description of a period of life.' },
            { s: '**Abri** a porta e **vi** um gato. O gato **dormia** no sofá.', n: 'Two events in a row, then the scene.' },
            { s: 'Enquanto **caminhava**, **encontrei** o Paulo.', n: 'The long action is in the imperfeito; the short one interrupts it.' },
            { s: '**Era** um dia bonito e **estava** sol, por isso **saímos**.', n: 'The background first, then the event.' },
          ] },
          { t: 'dialogue', title: 'O que fizeste ontem à noite?', lines: [
            { who: 'Ana', s: 'O que fizeste ontem à noite?' },
            { who: 'Pedro', s: 'Fiquei em casa. Fazia frio e chovia, por isso vi um filme.' },
            { who: 'Ana', s: 'Que filme?' },
            { who: 'Pedro', s: 'Não me lembro do título. Estava cansado e a meio do filme adormeci.' },
            { who: 'Ana', s: 'Então não viste o fim!' },
            { who: 'Pedro', s: 'Não, e quando acordei já eram duas da manhã.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right tense.', items: [
            { q: 'Ontem à noite ___ um bom filme.', o: ['vi', 'via', 'vejo'], why: 'One finished event yesterday: the perfeito.' },
            { q: 'Quando era pequeno, todos os domingos ___ aos avós.', o: ['ia', 'fui', 'irei'], why: 'A habit in the past: the imperfeito.' },
            { q: 'Enquanto ___ o jantar, tocou o telefone.', o: ['preparava', 'preparei', 'prepararei'], why: 'The action in progress: the imperfeito. *Tocou* is the event that interrupts it.' },
            { q: 'De repente, a luz ___.', o: ['falhou', 'falhava', 'falhará'], why: '*De repente* brings an event: the perfeito.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right tense.', items: [
            { q: 'Ontem ___ muito frio e ficámos em casa. (fazer)', a: ['fazia'], why: 'The weather is the background: *fazia*.' },
            { q: 'O gato ___ no sofá quando entrei. (dormir)', a: ['dormia'], why: 'An action in progress: *dormia*.' },
            { q: 'O que ___ ontem à noite? (tu, fazer)', a: ['fizeste'], why: 'A finished event: *fizeste*.' },
            { q: 'Enquanto ___ o duche, ouvi o telefone. (eu, tomar)', a: ['tomava'], why: '*Enquanto* + a long action: *tomava*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Event or background? Sort the verbs.', explain: ['groups'], groups: ['Event (perfeito)', 'Background (imperfeito)'], items: [
            { s: 'cheguei', g: 0, why: 'One step of the story.' },
            { s: 'abri', g: 0, why: 'One step of the story.' },
            { s: 'liguei', g: 0, why: 'One step of the story.' },
            { s: 'fazia frio', g: 1, why: 'The weather: the scene.' },
            { s: 'chovia', g: 1, why: 'The weather: the scene.' },
            { s: 'estava cansado', g: 1, why: 'A feeling: the scene.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'Chovia, por isso nós ___ em casa.', o: ['ficámos', 'ficávamos', 'ficaremos'], why: 'The decision is an event: *ficámos*.' },
            { q: 'Em pequena, ___ o cabelo comprido.', o: ['tinha', 'tive', 'terei'], why: 'A description: the imperfeito.' },
            { q: 'Quando abri a porta, ___ um forte cheiro a fumo.', o: ['havia', 'houve', 'haverá'], why: 'The scene around the event: *havia*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs that give the background.', items: [
            { s: 'Ontem saí às oito. [Era] cedo e [fazia] frio.', why: '*Era* and *fazia* describe the scene; *saí* is the event.' },
            { s: 'Abri a janela porque [estava] muito calor.', why: '*Estava* is the reason in the background.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'What had already happened',
      about: 'Use the mais-que-perfeito composto for an action before another past action.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'The **mais-que-perfeito composto** is the past of the past. It says that something had already happened before another moment in the story. It is made with the **imperfeito of ter** and the **past participle**: *tinha comido, tinha saído*. It always uses **ter**, never *ser*, and the participle does not change: *tinha chegado, tinham chegado*. Some participles are irregular: **feito, dito, visto, posto, escrito, aberto**.' },
          { t: 'table', caption: 'The mais-que-perfeito composto', quiz: true, head: ['', 'comer', 'sair', 'fazer'], rows: [
            ['eu', 'tinha comido', 'tinha saído', 'tinha feito'],
            ['tu', 'tinhas comido', 'tinhas saído', 'tinhas feito'],
            ['ele / ela / você', 'tinha comido', 'tinha saído', 'tinha feito'],
            ['nós', 'tínhamos comido', 'tínhamos saído', 'tínhamos feito'],
            ['eles / elas / vocês', 'tinham comido', 'tinham saído', 'tinham feito'],
          ] },
          { t: 'tip', art: 'owl', md: 'The words **já** (already), **nunca** (never) and **ainda não** (not yet) often go with this tense: *Ainda não tinha comido. Nunca tinha visto o mar.* A literary form, **fizera, dissera**, exists in books, but in speech people use **tinha feito**.' },
        ],
        [
          { t: 'table', caption: 'Irregular participles', explain: ['head'], head: ['Infinitive', 'Participle', 'Example'], rows: [
            ['fazer', 'feito', 'Já tinha feito o jantar.'],
            ['dizer', 'dito', 'Tinha dito a verdade.'],
            ['ver', 'visto', 'Nunca tinha visto o mar.'],
            ['pôr', 'posto', 'Tinha posto a mesa.'],
            ['escrever', 'escrito', 'Tinha escrito uma carta.'],
            ['abrir', 'aberto', 'Tinha aberto a janela.'],
          ] },
          { t: 'examples', items: [
            { s: 'Quando cheguei à estação, o comboio já **tinha partido**.', n: 'The train left first, then I arrived.' },
            { s: 'Antes dessa viagem, nunca **tinha visto** o mar.', n: '*Nunca* with the mais-que-perfeito: the first time.' },
            { s: 'O Marco estava cansado porque **tinha trabalhado** todo o dia.', n: 'The reason came before the tiredness.' },
            { s: '**Tinha acabado de acordar** quando o telefone tocou.', n: '*Acabar de* + infinitive: just.' },
            { s: 'Fomos a casa do Paulo, mas ele já **tinha saído**.', n: 'He left before we arrived.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Um atraso', lines: [
            { who: 'Ana', s: 'Porque chegaste tão tarde ontem?' },
            { who: 'Pedro', s: 'Tinha perdido o autocarro, por isso esperei pelo seguinte.' },
            { who: 'Ana', s: 'Não tinhas a mota?' },
            { who: 'Pedro', s: 'Tinha, mas tinha-a emprestado ao meu irmão.' },
            { who: 'Ana', s: 'Eu tinha-te escrito uma mensagem.' },
            { who: 'Pedro', s: 'Eu sei, mas tinha deixado o telemóvel em casa e só a li depois.' },
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write the mais-que-perfeito of fazer.', verb: 'fazer', tense: 'mais-que-perfeito composto', rows: [
            ['eu', 'tinha feito'],
            ['tu', 'tinhas feito'],
            ['ele / ela / você', 'tinha feito'],
            ['nós', 'tínhamos feito'],
            ['eles / elas / vocês', 'tinham feito'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the mais-que-perfeito.', items: [
            { q: 'Quando cheguei, o filme já ___ começado. (ter)', a: ['tinha'], why: '*Tinha começado*.' },
            { q: 'Nunca ___ visto o mar antes. (eu, ter)', a: ['tinha'], why: '*Nunca tinha visto*.' },
            { q: 'Ele estava cansado porque ___ trabalhado todo o dia. (ter)', a: ['tinha'], why: '*Tinha trabalhado*.' },
            { q: 'Quando saímos, já ___ parado de chover. (ter)', a: ['tinha'], why: '*Tinha parado*.' },
            { q: 'As raparigas já ___ partido quando chegámos. (ter)', a: ['tinham'], why: '*Tinham partido*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the past participle.', items: [
            { q: 'Já tinha ___ o trabalho. (fazer)', a: ['feito'], why: '*Fazer* → *feito*.' },
            { q: 'Tinha ___ uma carta. (escrever)', a: ['escrito'], why: '*Escrever* → *escrito*.' },
            { q: 'Tinha ___ a porta. (abrir)', a: ['aberto'], why: '*Abrir* → *aberto*.' },
            { q: 'Tinha ___ a verdade. (dizer)', a: ['dito'], why: '*Dizer* → *dito*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right tense.', items: [
            { q: 'Antes dessa viagem, nunca ___ andado de avião.', o: ['tinha', 'tive', 'terei'], why: '*Antes dessa viagem* looks back from the story: *tinha andado*.' },
            { q: 'Quando chegámos, a exposição já ___ fechado.', o: ['tinha', 'está', 'terá'], why: 'It closed before we arrived: *tinha fechado*.' },
            { q: 'Não fui ao cinema porque já ___ o filme.', o: ['tinha visto', 'vi', 'via'], why: 'After *tinha*, the participle: *tinha visto*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Join the two events with quando. Say which one happened first.', items: [
            { q: 'Cheguei à estação. O comboio partiu antes.', cue: 'Quando', a: ['Quando cheguei à estação, o comboio já tinha partido.', 'Quando cheguei à estação, o comboio tinha partido.'], why: 'The first event goes in the mais-que-perfeito: *o comboio já tinha partido*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Quando cheguei, o comboio já [partiu].', a: ['tinha partido'], why: 'It left before: *tinha partido*.' },
            { s: 'Nunca [tinha vi] o mar.', a: ['tinha visto'], why: 'The participle of *ver* is *visto*.' },
            { s: 'Ela já [tinha fazido] o jantar.', a: ['tinha feito'], why: 'The participle of *fazer* is *feito*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Quando cheguei, o comboio já tinha partido.', why: 'The first event goes in the mais-que-perfeito.' },
            { a: 'Nunca tinha visto o mar antes dessa viagem.', why: '*Nunca tinha visto*.' },
            { a: 'O Marco estava cansado porque tinha trabalhado todo o dia.', why: 'The reason came first in time.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Linking the events',
      about: 'Use enquanto, de repente, assim que, antes de, depois de and desde que.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'A good story has links between its events. **Enquanto** (while) goes with the imperfeito for the long action. **De repente** (suddenly) brings a sudden event. **Assim que** (as soon as) goes with the perfeito. **Antes de** and **depois de** (before, after) are followed by the infinitive. **Desde que** (since) goes with the present when the situation continues. **Quando** (when) can go with the perfeito or the imperfeito.' },
          { t: 'table', caption: 'Words that link a story', explain: ['head', 'col1'], head: ['Word', 'Meaning', 'Example'], rows: [
            ['enquanto', 'while, at the same time', 'Enquanto jantávamos, faltou a luz.'],
            ['de repente', 'suddenly', 'De repente, o cão começou a ladrar.'],
            ['assim que', 'as soon as', 'Assim que cheguei a casa, liguei ao Paulo.'],
            ['antes de + infinitive', 'before', 'Antes de sair, fechei as janelas.'],
            ['depois de + infinitive', 'after', 'Depois de jantar, fomos passear.'],
            ['desde que', 'since', 'Desde que vivo no Porto, tenho muitos amigos.'],
            ['ao mesmo tempo', 'at the same time', 'Riu-se ao mesmo tempo que eu.'],
          ] },
          { t: 'tip', art: 'owl', md: 'After **antes de** and **depois de**, use the infinitive, never a conjugated verb: *antes de partir*, not *antes de parti*. **Desde que** with the present says that something started and continues: *Desde que moro aqui, durmo bem.*' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Enquanto** jantávamos, **faltou** a luz.', n: 'A long action interrupted.' },
            { s: '**De repente**, o cão **começou** a ladrar.', n: 'A sudden event.' },
            { s: '**Assim que** cheguei a casa, **liguei** ao Paulo.', n: 'One event right after another.' },
            { s: '**Depois de** jantar, **fomos** passear.', n: '*Depois de* + infinitive.' },
            { s: '**Desde que** vivo no Porto, **tenho** muitos amigos.', n: '*Desde que* + present.' },
          ] },
          { t: 'dialogue', title: 'As chaves', lines: [
            { who: 'Ana', s: 'O que aconteceu ontem?' },
            { who: 'Pedro', s: 'Enquanto voltava para casa, percebi que não tinha as chaves.' },
            { who: 'Ana', s: 'E então?' },
            { who: 'Pedro', s: 'Voltei ao escritório, mas já estava fechado. Esperei até chegar o porteiro.' },
            { who: 'Ana', s: 'E as chaves?' },
            { who: 'Pedro', s: 'Estavam em cima da minha secretária!' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
            ['enquanto', 'while'],
            ['de repente', 'suddenly'],
            ['assim que', 'as soon as'],
            ['antes de', 'before'],
            ['depois de', 'after'],
            ['desde que', 'since'],
          ] },
          { t: 'ex', kind: 'bank', h: 'Choose the word for each gap.', extra: ['antes', 'desde'], items: [
            { q: '___ jantávamos, faltou a luz.', a: 'enquanto', why: 'A long action interrupted: *enquanto* + imperfeito.' },
            { q: '___ o cão começou a ladrar.', a: 'de repente', why: 'A sudden event.' },
            { q: '___ cheguei a casa, acendi a luz.', a: 'assim que', why: 'One event right after another.' },
            { q: 'Fomos passear ___ de jantar.', a: 'depois', why: '*Depois de* + infinitive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: '___ estudava, o meu irmão via televisão.', o: ['Enquanto', 'Assim que', 'Desde que'], why: 'Two actions at the same time: *enquanto*.' },
            { q: '___ cheguei, liguei à minha mãe.', o: ['Assim que', 'Enquanto', 'Desde que'], why: 'One event right after another: *assim que*.' },
            { q: '___ vivo no Porto, tenho muitos amigos.', o: ['Desde que', 'Assim que', 'De repente'], why: 'The situation continues: *desde que* + present.' },
            { q: '___ sair, fechei as janelas.', o: ['Antes de', 'Depois', 'Enquanto'], why: '*Antes de* + infinitive.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Depois ___ jantar, fomos passear.', a: ['de'], why: '*Depois de* + infinitive.' },
            { q: 'Antes ___ sair, fechei as janelas.', a: ['de'], why: '*Antes de* + infinitive.' },
            { q: 'Desde ___ vivo em Lisboa, tenho muitos amigos.', a: ['que'], why: '*Desde que* + present.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Enquanto jantávamos, faltou a luz.', why: '*Enquanto* + imperfeito, then the event.' },
            { a: 'Assim que cheguei, liguei ao Paulo.', why: '*Assim que* + perfeito.' },
            { a: 'Antes de sair, fechei as janelas.', why: '*Antes de* + infinitive.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Is the sentence correct?', items: [
            { q: 'Diz-se «Enquanto jantávamos, faltou a luz».', a: 't', why: 'The long action in the imperfeito, the event in the perfeito.' },
            { q: 'Diz-se «Antes de parti, fechei as janelas».', a: 'f', why: '*Antes de* needs the infinitive: *antes de partir*.' },
            { q: 'Diz-se «Desde que vivo no Porto, tenho muitos amigos».', a: 't', why: '*Desde que* + present for a situation that continues.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A história da avó Rosa',
      about: 'Read a short life story and notice how the tenses work together.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'A história da avó Rosa', md: 'Chamo-me Rosa e tenho setenta e dois anos. Nasci numa pequena aldeia de montanha. Em criança vivia com os meus pais e os meus três irmãos numa casa de pedra. Não tínhamos televisão e brincávamos sempre ao ar livre. No inverno nevava muito e a escola era longe: andava uma hora todas as manhãs.\n\nQuando tinha dezoito anos, decidi partir. O meu tio vivia em Lisboa e tinha-me arranjado trabalho numa fábrica de roupa. Apanhei o comboio numa manhã de setembro. Nunca tinha visto uma cidade tão grande e no início tinha medo. Enquanto procurava a rua do meu tio, perdi-me. Felizmente, um senhor simpático acompanhou-me até à porta.\n\nEm Lisboa conheci o Carlos, o meu marido. Trabalhava na mesma fábrica. Casámos dois anos depois e tivemos dois filhos. Quando voltei à aldeia pela primeira vez, a casa de pedra estava fechada há muitos anos, mas o jardim ainda estava bonito. Desde que deixei de trabalhar, volto lá todos os verões.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'A Rosa nasceu numa cidade grande.', a: 'f', why: 'She was born in a small mountain village: *uma pequena aldeia de montanha*.' },
            { q: 'Em criança, andava uma hora para ir à escola.', a: 't', why: '*Andava uma hora todas as manhãs.*' },
            { q: 'O tio tinha-lhe arranjado trabalho.', a: 't', why: '*Tinha-me arranjado trabalho numa fábrica de roupa.*' },
            { q: 'A Rosa casou em Lisboa.', a: 'ng', why: 'The text says they married two years later, but not where.' },
            { q: 'A casa de pedra estava fechada há muitos anos.', a: 't', why: '*Estava fechada há muitos anos.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Como ia a Rosa à escola em criança?', o: ['A pé.', 'De comboio.', 'De autocarro.'], why: '*Andava uma hora todas as manhãs.*' },
            { q: 'Porque partiu aos dezoito anos?', o: ['Por causa de um trabalho em Lisboa.', 'Para estudar.', 'Para casar.'], why: 'Her uncle had found her a job in Lisbon.' },
            { q: 'O que aconteceu enquanto procurava a rua do tio?', o: ['Perdeu-se.', 'Perdeu o comboio.', 'Conheceu o Carlos.'], why: '*Enquanto procurava a rua do meu tio, perdi-me.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the mais-que-perfeito.', items: [
            { s: 'O meu tio [tinha]-me [arranjado] trabalho.', why: '*Tinha arranjado* happened before she took the train.' },
            { s: 'Nunca [tinha] [visto] uma cidade tão grande.', why: '*Tinha visto*: she had never seen one before.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right tense.', items: [
            { q: 'Em criança, a Rosa ___ numa casa de pedra. (viver)', a: ['vivia'], why: 'A description of her childhood: the imperfeito.' },
            { q: 'Aos dezoito anos, a Rosa ___ partir. (decidir)', a: ['decidiu'], why: 'One event: the perfeito.' },
            { q: 'Quando chegou a Lisboa, ___ medo. (ela, ter)', a: ['tinha'], why: 'A feeling in the background: the imperfeito.' },
            { q: 'O Carlos ___ na mesma fábrica. (trabalhar)', a: ['trabalhava'], why: 'A description: the imperfeito.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'O meu tio tinha-me arranjado trabalho em Lisboa.', why: 'The mais-que-perfeito *tinha arranjado*, with the pronoun inside.' },
            { a: 'Desde que deixei de trabalhar, volto lá todos os verões.', why: '*Desde que* + present for a situation that continues.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Ontem à noite ___ um bom filme.', o: ['vi', 'via', 'vejo'], why: 'A finished event: the perfeito.' },
      { q: 'Quando era pequena, todos os domingos ___ aos avós.', o: ['ia', 'fui', 'irei'], why: 'A habit in the past: the imperfeito.' },
      { q: 'Quando cheguei à estação, o comboio já ___ partido.', o: ['tinha', 'está', 'terá'], why: '*Tinha partido*.' },
      { q: '___ estudava, o meu irmão via televisão.', o: ['Enquanto', 'Assim que', 'Desde que'], why: 'Two actions at the same time: *enquanto*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Tinha ___ a porta. (abrir)', a: ['aberto'], why: '*Abrir* → *aberto*.' },
      { q: 'O gato ___ no sofá quando entrei. (dormir)', a: ['dormia'], why: 'An action in progress: *dormia*.' },
      { q: 'Antes ___ sair, fechei as janelas.', a: ['de'], why: '*Antes de* + infinitive.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
      ['de repente', 'suddenly'],
      ['assim que', 'as soon as'],
      ['enquanto', 'while'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence.', items: [
      { q: 'Cheguei à estação. O comboio partiu antes.', cue: 'Quando', a: ['Quando cheguei à estação, o comboio já tinha partido.', 'Quando cheguei à estação, o comboio tinha partido.'], why: 'The first event goes in the mais-que-perfeito.' },
      { q: 'Cheguei a casa. Depois liguei à Ana.', cue: 'Assim que', a: ['Assim que cheguei a casa, liguei à Ana.'], why: '*Assim que* + perfeito.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Nunca [tinha vi] o mar.', a: ['tinha visto'], why: 'The participle of *ver* is *visto*.' },
      { s: 'Antes [que] sair, fechei as janelas.', a: ['de'], why: '*Antes de* + infinitive.' },
    ] },
  ],
};
