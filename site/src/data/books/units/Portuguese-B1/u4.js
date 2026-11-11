// Portuguese B1, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Opinions and feelings',
  goal: 'Give an opinion, say what you hope and feel, and discuss a topic. Learn the presente do conjuntivo, when to use it, and when to use the infinitive instead.',
  art: 'alien',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['presente do conjuntivo', 'opinions', 'hopes', 'feelings', 'discussion'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Acho que é, não acho que seja',
      about: 'Choose between the indicative and the subjunctive after expressions of opinion and certainty.',
      art: 'alien',
      spreads: [
        [
          { t: 'text', md: 'To give an opinion, Portuguese uses **acho que** + **indicative**: *Acho que é uma boa ideia.* The verb goes in the **subjunctive** (*conjuntivo*) when you **deny** or **doubt**: *Não acho que seja uma boa ideia. Duvido que ele tenha razão.* After a **certainty**, the verb stays in the indicative: *Tenho a certeza de que ele tem razão. Sei que ela está em casa.*' },
          { t: 'table', caption: 'Opinion, doubt and certainty', explain: ['head', 'col1'], head: ['Expression', 'Verb', 'Example'], rows: [
            ['acho / penso que', 'indicative', 'Acho que é útil.'],
            ['tenho a certeza de que / sei que', 'indicative', 'Sei que é verdade.'],
            ['parece-me que', 'indicative', 'Parece-me que tem razão.'],
            ['não acho que', 'subjunctive', 'Não acho que seja útil.'],
            ['duvido que', 'subjunctive', 'Duvido que seja verdade.'],
            ['não tenho a certeza de que', 'subjunctive', 'Não tenho a certeza de que esteja em casa.'],
          ] },
          { t: 'tip', art: 'owl', md: 'This is different from some other languages: in Portuguese, **acho que** takes the **indicative**, and the subjunctive appears only with **não acho que** and doubt. The forms you need first: **ser → seja**, **ter → tenha**, **estar → esteja**, **ir → vá**.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Acho que **é** uma boa ideia.', n: 'An opinion: the indicative.' },
            { s: 'Não acho que **seja** uma boa ideia.', n: 'A denial: the subjunctive.' },
            { s: 'Duvido que o filme **seja** bom.', n: 'A doubt: the subjunctive.' },
            { s: 'Tenho a certeza de que ela **está** em casa.', n: 'A certainty: the indicative.' },
            { s: 'Não tenho a certeza de que ele **tenha** razão.', n: 'A doubt: the subjunctive.' },
          ] },
          { t: 'dialogue', title: 'Um restaurante novo', lines: [
            { who: 'Ana', s: 'O que achas do novo restaurante?' },
            { who: 'Pedro', s: 'Acho que é demasiado caro.' },
            { who: 'Ana', s: 'Para mim é bom. Acho que o cozinheiro é muito bom.' },
            { who: 'Pedro', s: 'Talvez tenhas razão, mas não tenho a certeza de que os preços sejam justos.' },
            { who: 'Ana', s: 'Então vamos experimentar e depois decidimos!' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Which mood follows? Sort the expressions.', explain: ['groups'], groups: ['Indicative', 'Subjunctive'], items: [
            { s: 'acho que', g: 0, why: '*Acho que* + indicative.' },
            { s: 'penso que', g: 0, why: '*Penso que* + indicative.' },
            { s: 'sei que', g: 0, why: 'A certainty: the indicative.' },
            { s: 'tenho a certeza de que', g: 0, why: 'A certainty: the indicative.' },
            { s: 'não acho que', g: 1, why: 'A denial: the subjunctive.' },
            { s: 'duvido que', g: 1, why: 'A doubt: the subjunctive.' },
            { s: 'não tenho a certeza de que', g: 1, why: 'A doubt: the subjunctive.' },
            { s: 'não é verdade que', g: 1, why: 'A denial: the subjunctive.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Acho que o Marco ___ razão.', o: ['tem', 'tenha', 'tivesse'], why: '*Acho que* + indicative.' },
            { q: 'Não acho que o Marco ___ razão.', o: ['tenha', 'tem', 'tinha'], why: '*Não acho que* + subjunctive.' },
            { q: 'Tenho a certeza de que ela ___ em casa.', o: ['está', 'esteja', 'estivesse'], why: 'A certainty: the indicative.' },
            { q: 'Duvido que o filme ___ bom.', o: ['seja', 'é', 'era'], why: 'A doubt: the subjunctive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Não acho que isto ___ uma boa ideia. (ser)', a: ['seja'], why: '*Não acho que* + *seja*.' },
            { q: 'Duvido que ele ___ razão. (ter)', a: ['tenha'], why: '*Duvido que* + *tenha*.' },
            { q: 'Não tenho a certeza de que ela ___ em casa. (estar)', a: ['esteja'], why: 'A doubt: *esteja*.' },
            { q: 'Acho que ele ___ razão. (ter)', a: ['tem'], why: '*Acho que* + indicative: *tem*.' },
            { q: 'Sei que ela ___ em casa. (estar)', a: ['está'], why: 'A certainty: *está*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Say the opposite with Não acho que.', items: [
            { q: 'Acho que é verdade.', cue: 'Não acho que', a: ['Não acho que seja verdade.'], why: '*Não acho que* + *seja*.' },
            { q: 'Acho que ele tem razão.', cue: 'Não acho que', a: ['Não acho que ele tenha razão.'], why: '*Não acho que* + *tenha*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Não acho que ele [tem] razão.', a: ['tenha'], why: '*Não acho que* + subjunctive.' },
            { s: 'Duvido que [é] verdade.', a: ['seja'], why: '*Duvido que* + subjunctive.' },
            { s: 'Acho que [seja] uma boa ideia.', a: ['é'], why: '*Acho que* + indicative.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Acho que é uma boa ideia.', why: '*Acho que* + indicative.' },
            { a: 'Não acho que seja uma boa ideia.', why: '*Não acho que* + subjunctive.' },
            { a: 'Duvido que ele tenha razão.', why: '*Duvido que* + subjunctive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'The forms of the subjunctive',
      about: 'Form the presente do conjuntivo of regular and irregular verbs.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'The **presente do conjuntivo** is made from the **eu** form of the present. Remove the final **-o** and add the opposite vowel: **-ar** verbs take **-e, -es, -e, -emos, -em**; **-er** and **-ir** verbs take **-a, -as, -a, -amos, -am**. So *falo* gives *fale*, *como* gives *coma*, *abro* gives *abra*, *faço* gives *faça*, *digo* gives *diga*, *vejo* gives *veja*. The **eu** and **ele** forms are the same.' },
          { t: 'table', caption: 'The presente do conjuntivo: regular verbs', quiz: true, head: ['', 'falar', 'comer', 'abrir'], rows: [
            ['que eu', 'fale', 'coma', 'abra'],
            ['que tu', 'fales', 'comas', 'abras'],
            ['que ele / ela / você', 'fale', 'coma', 'abra'],
            ['que nós', 'falemos', 'comamos', 'abramos'],
            ['que eles / elas / vocês', 'falem', 'comam', 'abram'],
          ] },
          { t: 'tip', art: 'owl', md: 'The subjunctive of **-ar** verbs looks like the present of **-er** verbs, and the other way round. Verbs that end in **-car, -çar, -gar** change spelling: *ficar → fique*, *começar → comece*, *pagar → pague*. The **tu** form ends in **-s**: *fales, comas*.' },
        ],
        [
          { t: 'table', caption: 'Irregular verbs', explain: ['head'], head: ['Infinitive', 'que eu / ele', 'que nós', 'que eles'], rows: [
            ['ser', 'seja', 'sejamos', 'sejam'],
            ['estar', 'esteja', 'estejamos', 'estejam'],
            ['ter', 'tenha', 'tenhamos', 'tenham'],
            ['ir', 'vá', 'vamos', 'vão'],
            ['fazer', 'faça', 'façamos', 'façam'],
            ['poder', 'possa', 'possamos', 'possam'],
            ['querer', 'queira', 'queiramos', 'queiram'],
            ['dizer', 'diga', 'digamos', 'digam'],
            ['dar', 'dê', 'demos', 'deem'],
            ['saber', 'saiba', 'saibamos', 'saibam'],
          ] },
          { t: 'examples', items: [
            { s: 'Não acho que **seja** verdade.', n: '*Ser* → *seja*.' },
            { s: 'Duvido que **tenham** tempo.', n: '*Ter* → *tenham*.' },
            { s: 'Não creio que ele **vá** à festa.', n: '*Ir* → *vá*.' },
            { s: 'Espero que **faças** o teu melhor.', n: '*Fazer* → *faças*.' },
            { s: 'Quero que **digas** a verdade.', n: '*Dizer* → *digas*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the presente do conjuntivo of ser.', verb: 'ser', tense: 'presente do conjuntivo (que …)', rows: [
            ['que eu', 'seja'],
            ['que tu', 'sejas'],
            ['que ele / ela', 'seja'],
            ['que nós', 'sejamos'],
            ['que eles / elas', 'sejam'],
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write the presente do conjuntivo of fazer.', verb: 'fazer', tense: 'presente do conjuntivo (que …)', rows: [
            ['que eu', 'faça'],
            ['que tu', 'faças'],
            ['que ele / ela', 'faça'],
            ['que nós', 'façamos'],
            ['que eles / elas', 'façam'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the subjunctive.', items: [
            { q: 'Duvido que tu ___ razão. (ter)', a: ['tenhas'], why: '*Ter* → *tenhas*.' },
            { q: 'Não acho que ele ___ a Lisboa amanhã. (ir)', a: ['vá'], why: '*Ir* → *vá*.' },
            { q: 'Não creio que eles ___ cansados. (estar)', a: ['estejam'], why: '*Estar* → *estejam*.' },
            { q: 'Duvido que nós ___ tempo. (ter)', a: ['tenhamos'], why: '*Ter* → *tenhamos*.' },
            { q: 'Não acho que vocês ___ muito. (trabalhar)', a: ['trabalhem'], why: '*Trabalhar* → *trabalhem*.' },
            { q: 'Duvido que ele ___ a verdade. (dizer)', a: ['diga'], why: '*Dizer* → *diga*.' },
            { q: 'Não creio que ela ___ cedo. (partir)', a: ['parta'], why: '*Partir* → *parta*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Duvido que ele [é] simpático.', a: ['seja'], why: '*Duvido que* + subjunctive.' },
            { s: 'Não acho que ele [tem] tempo.', a: ['tenha'], why: '*Não acho que* + subjunctive.' },
            { s: 'Duvido que eles [fazem] um bom trabalho.', a: ['façam'], why: '*Fazer* → *façam*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'Não creio que ela ___ cedo.', o: ['chegue', 'chega', 'chegar'], why: '*Chegar* → *chegue*.' },
            { q: 'Duvido que eles ___ ao Porto.', o: ['vão', 'vamos', 'vá'], why: '*Ir*: *que eles vão*.' },
            { q: 'Não acho que tu ___ demais.', o: ['trabalhes', 'trabalhas', 'trabalharás'], why: '*Trabalhar* → *trabalhes*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Não acho que seja uma boa ideia.', why: '*Não acho que* + *seja*.' },
            { a: 'Duvido que eles vão ao Porto.', why: '*Ir*: *que eles vão*.' },
            { a: 'Não creio que ela tenha razão.', why: '*Não creio que* + *tenha*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Hopes, feelings and what is needed',
      about: 'Use que + subjunctive for wishes and feelings, and the infinitive when the subject stays the same.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'The subjunctive is also used for **wishes** and **feelings**: *espero que, quero que, prefiro que, lamento que, receio que, tenho medo que*. And it follows **impersonal** expressions: *é importante que, é preciso que, é melhor que, é possível que, pode ser que*, and **talvez**: *Talvez ele venha.* When the subject of both verbs is the **same**, do not use *que*: use the infinitive: *Espero ganhar. Quero partir.* Compare: *Espero que ganhes.*' },
          { t: 'table', caption: 'Same subject or different subject', explain: ['head'], head: ['Same subject (infinitive)', 'Different subject (que + subjunctive)'], rows: [
            ['Espero ganhar.', 'Espero que ganhes.'],
            ['Quero partir.', 'Quero que partas.'],
            ['É importante estudar.', 'É importante que estudes.'],
            ['É preciso partir cedo.', 'É preciso que partas cedo.'],
            ['Prefiro ficar.', 'Prefiro que fiques.'],
          ] },
          { t: 'tip', art: 'owl', md: 'After **talvez** (maybe), the verb is in the subjunctive: *Talvez chova amanhã.* After **pode ser que**, too: *Pode ser que ele venha.* After **quando** about the future, Portuguese uses a different form that you will learn in unit 7.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Espero que** tu **venhas** à festa.', n: 'A hope about someone else.' },
            { s: '**Quero que** tu **partas** cedo.', n: '*Querer que* + subjunctive.' },
            { s: '**Lamento que** não **haja** mais tempo.', n: 'A feeling: *lamentar que*.' },
            { s: '**É importante que** cada um **diga** o que pensa.', n: 'An impersonal expression.' },
            { s: '**Talvez** ele **venha** amanhã.', n: '*Talvez* + subjunctive.' },
          ] },
          { t: 'dialogue', title: 'Uma festa', lines: [
            { who: 'Ana', s: 'Espero que venhas à festa.' },
            { who: 'Pedro', s: 'Gostaria de ir, mas receio que o comboio chegue atrasado.' },
            { who: 'Ana', s: 'É melhor que partas cedo.' },
            { who: 'Pedro', s: 'Tens razão. Lamento que não haja mais tempo.' },
            { who: 'Ana', s: 'Talvez consigas chegar a tempo.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Quero ___ tu partas.', o: ['que', 'de', 'a'], why: 'Different subject: *quero que* + subjunctive.' },
            { q: 'Espero que tu ___ à festa.', o: ['venhas', 'vens', 'vieste'], why: '*Espero que* + subjunctive: *venhas*.' },
            { q: 'É importante que tu ___ pontual.', o: ['sejas', 'és', 'foste'], why: '*É importante que* + subjunctive.' },
            { q: 'Talvez ele ___ amanhã.', o: ['venha', 'vem', 'veio'], why: '*Talvez* + subjunctive.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the verb in the subjunctive.', items: [
            { q: 'Espero que tu ___ à festa. (vir)', a: ['venhas'], why: '*Vir* → *venhas*.' },
            { q: 'É preciso que nós ___ cedo. (partir)', a: ['partamos'], why: '*Nós*: *partamos*.' },
            { q: 'Estou contente que tu ___ aqui. (estar)', a: ['estejas'], why: '*Estar* → *estejas*.' },
            { q: 'Prefiro que eles ___ amanhã. (chegar)', a: ['cheguem'], why: '*Chegar* → *cheguem*.' },
            { q: 'Lamento que não ___ mais tempo. (haver)', a: ['haja'], why: '*Haver* → *haja*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'The subject changes. Rewrite the sentence.', items: [
            { q: 'Quero partir. (tu)', cue: 'Quero que', a: ['Quero que partas.', 'Quero que tu partas.'], why: 'A different subject: *quero que tu partas*.' },
            { q: 'Espero ganhar. (tu)', cue: 'Espero que', a: ['Espero que ganhes.', 'Espero que tu ganhes.'], why: 'A different subject: *espero que ganhes*.' },
            { q: 'É importante estudar. (tu)', cue: 'É importante que', a: ['É importante que estudes.', 'É importante que tu estudes.'], why: 'With a subject, add *que* + subjunctive.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Quero [de que] tu partas.', a: ['que'], why: '*Querer que* + subjunctive, without *de*.' },
            { s: 'Quero que tu [partes] cedo.', a: ['partas'], why: '*Querer que* + *partas*.' },
            { s: 'É importante que nós [estudamos] mais.', a: ['estudemos'], why: '*É importante que* + subjunctive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Espero que venhas à festa.', why: '*Espero que* + subjunctive.' },
            { a: 'É preciso que partamos cedo.', why: '*É preciso que* + subjunctive.' },
            { a: 'Talvez ele venha amanhã.', why: '*Talvez* + subjunctive.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the expression with its meaning.', pairs: [
            ['Espero que …', 'I hope that …'],
            ['Lamento que …', 'I am sorry that …'],
            ['É melhor que …', 'It is better that …'],
            ['Receio que …', 'I am afraid that …'],
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Trabalhar a partir de casa',
      about: 'Read a forum discussion and notice the opinions.',
      art: 'alien',
      spreads: [
        [
          { t: 'reading', title: 'Trabalhar a partir de casa: o que pensam?', md: '**Sofia:** Acho que trabalhar em casa é cómodo, porque não perco tempo no trânsito. Penso que também é mais tranquilo, mas receio que às vezes se trabalhe demasiado.\n\n**Marco:** Não concordo. Parece-me que o contacto com os colegas é importante e tenho a certeza de que se aprende mais no escritório. Mesmo assim, estou contente que a minha empresa permita dois dias em casa por semana.\n\n**Elena:** Depende do trabalho. É importante que cada um escolha o que prefere. Espero que no futuro haja mais possibilidades para todos.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'A Sofia acha que trabalhar em casa é cómodo.', a: 't', why: '*Acho que trabalhar em casa é cómodo.*' },
            { q: 'O Marco acha que o contacto com os colegas não é importante.', a: 'f', why: 'He says it is important: *parece-me que … é importante*.' },
            { q: 'A empresa do Marco permite dois dias em casa por semana.', a: 't', why: '*Permita dois dias em casa por semana.*' },
            { q: 'A Elena trabalha em casa.', a: 'ng', why: 'She does not say where she works.' },
            { q: 'A Sofia receia que às vezes se trabalhe demasiado.', a: 't', why: '*Receio que às vezes se trabalhe demasiado.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Porque acha a Sofia cómodo trabalhar em casa?', o: ['Não perde tempo no trânsito.', 'Ganha mais.', 'Tem mais colegas.'], why: '*Não perco tempo no trânsito.*' },
            { q: 'O que espera a Elena?', o: ['Que haja mais possibilidades para todos.', 'Trabalhar menos.', 'Mudar de emprego.'], why: '*Espero que no futuro haja mais possibilidades para todos.*' },
            { q: 'Onde se aprende mais, segundo o Marco?', o: ['No escritório.', 'Em casa.', 'No comboio.'], why: '*Tenho a certeza de que se aprende mais no escritório.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the subjunctive.', items: [
            { s: 'Receio que às vezes se [trabalhe] demasiado.', why: '*Trabalhe* follows *receio que*.' },
            { s: 'Estou contente que a minha empresa [permita] dois dias em casa.', why: '*Permita* follows *estou contente que*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Acho que trabalhar em casa ___ cómodo. (ser)', a: ['é'], why: '*Acho que* + indicative: *é*.' },
            { q: 'É importante que cada um ___ o que prefere. (escolher)', a: ['escolha'], why: '*Escolher* → *escolha*.' },
            { q: 'Tenho a certeza de que no escritório se ___ mais. (aprender)', a: ['aprende'], why: 'A certainty: the indicative *aprende*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Espero que haja mais possibilidades para todos.', why: '*Espero que* + subjunctive.' },
            { a: 'Tenho a certeza de que se aprende mais no escritório.', why: 'A certainty: the indicative.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Acho que o filme ___ bom.', o: ['é', 'seja', 'fosse'], why: '*Acho que* + indicative.' },
      { q: 'Não acho que o filme ___ bom.', o: ['seja', 'é', 'era'], why: '*Não acho que* + subjunctive.' },
      { q: 'Quero ___ tu partas.', o: ['que', 'de', 'a'], why: 'Different subject: *quero que*.' },
      { q: 'Talvez ele ___ amanhã.', o: ['venha', 'vem', 'veio'], why: '*Talvez* + subjunctive.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Duvido que ele ___ razão. (ter)', a: ['tenha'], why: '*Duvido que* + *tenha*.' },
      { q: 'É preciso que nós ___ cedo. (partir)', a: ['partamos'], why: '*Nós*: *partamos*.' },
      { q: 'Lamento que não ___ mais tempo. (haver)', a: ['haja'], why: '*Haver* → *haja*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the infinitive with its subjunctive (que eu / ele).', pairs: [
      ['ser', 'seja'],
      ['ter', 'tenha'],
      ['fazer', 'faça'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence.', items: [
      { q: 'Acho que é verdade.', cue: 'Não acho que', a: ['Não acho que seja verdade.'], why: '*Não acho que* + *seja*.' },
      { q: 'Quero partir. (tu)', cue: 'Quero que', a: ['Quero que partas.', 'Quero que tu partas.'], why: 'A different subject.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Não acho que ele [tem] razão.', a: ['tenha'], why: '*Não acho que* + subjunctive.' },
      { s: 'Acho que [seja] uma boa ideia.', a: ['é'], why: '*Acho que* + indicative.' },
    ] },
  ],
};
