// Portuguese B1, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'Dreams and hypotheses',
  goal: 'Talk about unreal and possible situations. Learn the imperfeito do conjuntivo, se + imperfeito do conjuntivo + condicional, and the futuro do conjuntivo after se, quando and assim que.',
  art: 'suitcase',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'speaking'], topics: ['imperfeito do conjuntivo', 'futuro do conjuntivo', 'hypotheses', 'se clauses', 'interview'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Fosse, tivesse, pudesse',
      about: 'Form the imperfeito do conjuntivo and use it after verbs in the past.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'The **imperfeito do conjuntivo** is made from the **eles** form of the perfeito. Remove **-ram** and add **-sse, -sses, -sse, -ssemos, -ssem**: *falaram → falasse*, *comeram → comesse*, *abriram → abrisse*, *tiveram → tivesse*, *fizeram → fizesse*, *disseram → dissesse*. **Ser** and **ir** share one form: **fosse, fosses, fosse, fôssemos, fossem**. The **eu** and **ele** forms are the same.' },
          { t: 'table', caption: 'The imperfeito do conjuntivo', quiz: true, head: ['', 'falar', 'ter', 'ser / ir', 'fazer'], rows: [
            ['que eu', 'falasse', 'tivesse', 'fosse', 'fizesse'],
            ['que tu', 'falasses', 'tivesses', 'fosses', 'fizesses'],
            ['que ele / ela / você', 'falasse', 'tivesse', 'fosse', 'fizesse'],
            ['que nós', 'falássemos', 'tivéssemos', 'fôssemos', 'fizéssemos'],
            ['que eles / elas / vocês', 'falassem', 'tivessem', 'fossem', 'fizessem'],
          ] },
          { t: 'tip', art: 'owl', md: 'Look at the accent in the **nós** form: **falássemos, tivéssemos, fôssemos**. The tense is used after a **past** verb of wish, doubt or opinion (*Queria que tu viesses. Não achava que fosse verdade.*), after **como se** (*Fala como se fosse o chefe.*) and after **se** in hypotheses (next lesson).' },
        ],
        [
          { t: 'table', caption: 'More irregular verbs', explain: ['head'], head: ['Infinitive', 'eles (perfeito)', 'que eu / ele'], rows: [
            ['poder', 'puderam', 'pudesse'],
            ['querer', 'quiseram', 'quisesse'],
            ['dizer', 'disseram', 'dissesse'],
            ['ver', 'viram', 'visse'],
            ['vir', 'vieram', 'viesse'],
            ['dar', 'deram', 'desse'],
            ['saber', 'souberam', 'soubesse'],
          ] },
          { t: 'examples', items: [
            { s: 'Queria que tu **viesses** comigo.', n: '*Vir* → *viesses*.' },
            { s: 'Não achava que ele **tivesse** razão.', n: '*Ter* → *tivesse*.' },
            { s: 'Esperava que eles **chegassem** cedo.', n: '*Chegar* → *chegassem*.' },
            { s: 'Fala como se **fosse** o chefe.', n: '*Como se* + imperfeito do conjuntivo.' },
            { s: 'Queria que eles **dissessem** a verdade.', n: '*Dizer* → *dissessem*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the imperfeito do conjuntivo of ser.', verb: 'ser', tense: 'imperfeito do conjuntivo (que …)', rows: [
            ['que eu', 'fosse'],
            ['que tu', 'fosses'],
            ['que ele / ela', 'fosse'],
            ['que nós', 'fôssemos'],
            ['que eles / elas', 'fossem'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the imperfeito do conjuntivo.', items: [
            { q: 'Queria que tu ___ comigo. (vir)', a: ['viesses'], why: '*Vir* → *viesses*.' },
            { q: 'Não achava que ele ___ razão. (ter)', a: ['tivesse'], why: '*Ter* → *tivesse*.' },
            { q: 'Fala como se ___ o chefe. (ser)', a: ['fosse'], why: '*Como se* + *fosse*.' },
            { q: 'Esperava que eles ___ cedo. (chegar)', a: ['chegassem'], why: '*Chegar* → *chegassem*.' },
            { q: 'Queria que eles ___ a verdade. (dizer)', a: ['dissessem'], why: '*Dizer* → *dissessem*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Present or past? Choose the right form.', items: [
            { q: 'Quero que tu ___ comigo.', o: ['venhas', 'viesses', 'vens'], why: '*Quero* is present: the presente do conjuntivo.' },
            { q: 'Queria que tu ___ comigo.', o: ['viesses', 'venhas', 'vens'], why: '*Queria* is past: the imperfeito do conjuntivo.' },
            { q: 'Não acho que ele ___ razão.', o: ['tenha', 'tivesse', 'tem'], why: '*Acho* is present: *tenha*.' },
            { q: 'Não achava que ele ___ razão.', o: ['tivesse', 'tenha', 'tem'], why: '*Achava* is past: *tivesse*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Queria que tu [venhas] comigo.', a: ['viesses'], why: '*Queria* is past: *viesses*.' },
            { s: 'Não achava que ele [tenha] razão.', a: ['tivesse'], why: '*Achava* is past: *tivesse*.' },
            { s: 'Fala como se [é] o chefe.', a: ['fosse'], why: '*Como se* + imperfeito do conjuntivo.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Se tivesse tempo, viajaria',
      about: 'Talk about situations that are not real with se + imperfeito do conjuntivo + condicional.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'To talk about something **unlikely or imagined**, use **se** + **imperfeito do conjuntivo** and the **condicional**: *Se tivesse mais tempo, viajaria mais. Se fosse rico, compraria uma casa.* The two parts can change places: *Viajaria mais, se tivesse mais tempo.* To give advice, say **Se eu fosse a ti**: *Se eu fosse a ti, aceitaria.* Never use the condicional after **se**.' },
          { t: 'table', caption: 'If sentences', explain: ['head', 'col1'], head: ['Type', 'Pattern', 'Example'], rows: [
            ['imagined', 'se + imperfeito do conjuntivo, condicional', 'Se tivesse tempo, viajaria mais.'],
            ['imagined', 'se + imperfeito do conjuntivo, condicional', 'Se fosse rico, compraria uma casa.'],
            ['advice', 'se eu fosse a ti, condicional', 'Se eu fosse a ti, aceitaria.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In everyday speech, many people use the **imperfeito** in both parts: *Se tinha tempo, viajava mais.* This is informal. In writing and in exams, use the full form: *Se tivesse tempo, viajaria mais.* Do not say *Se teria tempo*: after **se**, always the imperfeito do conjuntivo.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Se tivesse** mais tempo, **viajaria** mais.', n: 'I do not have time: an imagined situation.' },
            { s: '**Se fosse** rico, **compraria** uma casa.', n: 'I am not rich.' },
            { s: '**Se eu fosse a ti**, **aceitaria**.', n: 'Advice.' },
            { s: 'O Marco **viria** de bom grado **se** não **trabalhasse**.', n: 'The *se* part can come second.' },
            { s: '**Se falasse** chinês, **trabalharia** na China.', n: 'A dream, not a plan.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Se tivesse tempo, ___ mais. (viajar)', a: ['viajaria'], why: 'The condicional: *viajaria*.' },
            { q: 'Se ___ rico, compraria uma casa. (eu, ser)', a: ['fosse'], why: '*Se fosse*.' },
            { q: 'Se tu ___ mais atento, farias menos erros. (ser)', a: ['fosses'], why: '*Se tu fosses*.' },
            { q: 'Se eles ___ mais dinheiro, comprariam uma casa. (ter)', a: ['tivessem'], why: '*Se eles tivessem*.' },
            { q: 'Se eu ___ a ti, aceitaria. (ser)', a: ['fosse'], why: '*Se eu fosse a ti*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Se ganhasse a lotaria, ___ o mundo.', o: ['viajaria', 'viajo', 'viajasse'], why: 'The result is in the condicional.' },
            { q: 'Se ___ tempo, iria com gosto.', o: ['tivesse', 'tenho', 'terei'], why: 'An imagined situation: *tivesse*.' },
            { q: 'Se eu fosse a ti, ___ este emprego.', o: ['aceitaria', 'aceito', 'aceitasse'], why: 'The result is in the condicional.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Imagine the opposite. Start with se.', items: [
            { q: 'Não tenho tempo, por isso não viajo.', cue: 'Se', a: ['Se tivesse tempo, viajaria.'], why: '*Se tivesse tempo, viajaria.*' },
            { q: 'Não sou rico, por isso não compro uma casa.', cue: 'Se', a: ['Se fosse rico, compraria uma casa.'], why: '*Se fosse rico, compraria …*' },
            { q: 'Não falo chinês, por isso não trabalho na China.', cue: 'Se', a: ['Se falasse chinês, trabalharia na China.'], why: '*Se falasse …, trabalharia …*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Se eu [teria] tempo, viajaria mais.', a: ['tivesse'], why: 'After *se*, the imperfeito do conjuntivo.' },
            { s: 'Se fosse rico, [compro] uma casa.', a: ['compraria'], why: 'The result is in the condicional.' },
            { s: 'Se eu [sou] mais novo, estudaria em Itália.', a: ['fosse'], why: 'After *se*, the imperfeito do conjuntivo.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Se tivesse tempo, viajaria mais.', why: '*Se* + imperfeito do conjuntivo, then the condicional.' },
            { a: 'Compraria uma casa se fosse rico.', why: 'The *se* part can come second.' },
            { a: 'Se eu fosse a ti, aceitaria.', why: '*Se eu fosse a ti* gives advice.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Se tiver tempo, irei',
      about: 'Use the futuro do conjuntivo after se, quando and assim que.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'For something that is **possible in the future**, Portuguese uses the **futuro do conjuntivo** after **se**, **quando**, **assim que**, **logo que**, **enquanto** and **sempre que**: *Se tiver tempo, irei. Quando chegares, liga-me. Assim que puder, telefono-te.* It is made from the **eles** form of the perfeito. Remove **-ram** and add **-r, -res, -r, -rmos, -rem**: *falaram → falar*, *tiveram → tiver*, *fizeram → fizer*. **Ser** and **ir** share **for, fores, for, formos, forem**.' },
          { t: 'table', caption: 'The futuro do conjuntivo', quiz: true, head: ['', 'falar', 'ter', 'ser / ir', 'fazer', 'poder'], rows: [
            ['se eu', 'falar', 'tiver', 'for', 'fizer', 'puder'],
            ['se tu', 'falares', 'tiveres', 'fores', 'fizeres', 'puderes'],
            ['se ele / ela', 'falar', 'tiver', 'for', 'fizer', 'puder'],
            ['se nós', 'falarmos', 'tivermos', 'formos', 'fizermos', 'pudermos'],
            ['se eles / elas', 'falarem', 'tiverem', 'forem', 'fizerem', 'puderem'],
          ] },
          { t: 'tip', art: 'owl', md: 'The **futuro do conjuntivo** looks like the **infinitivo pessoal** for regular verbs (*falar, falares, falar …*) but not for irregular ones (*tiver*, not *ter*). After **se** with the present (*Se tenho tempo, vou*), the meaning is more general; with **se** + futuro do conjuntivo (*Se tiver tempo, vou*), it is a real possibility in the future.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Se tiver** tempo, irei à festa.', n: '*Se* + futuro do conjuntivo.' },
            { s: '**Quando chegares**, liga-me.', n: '*Quando* about the future.' },
            { s: '**Assim que puder**, telefono-te.', n: '*Assim que* about the future.' },
            { s: '**Quem quiser** pode vir.', n: '*Quem* + futuro do conjuntivo: whoever.' },
            { s: '**Se formos** ao Porto, visitamos o museu.', n: '*Ir* → *formos*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the verb in the futuro do conjuntivo.', items: [
            { q: 'Se eu ___ tempo, irei. (ter)', a: ['tiver'], why: '*Se eu tiver*.' },
            { q: 'Quando tu ___, liga-me. (chegar)', a: ['chegares'], why: '*Quando tu chegares*.' },
            { q: 'Assim que eles ___, começamos. (chegar)', a: ['chegarem'], why: '*Assim que eles chegarem*.' },
            { q: 'Quem ___ pode vir. (querer)', a: ['quiser'], why: '*Quem quiser*.' },
            { q: 'Se ele ___ cedo, avisa-nos. (vir)', a: ['vier'], why: '*Se ele vier*.' },
            { q: 'Se nós ___ ao Porto, visitamos o museu. (ir)', a: ['formos'], why: '*Se nós formos*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Quando ___, liga-me.', o: ['chegares', 'chegaste', 'chegavas'], why: 'About the future: *quando chegares*.' },
            { q: 'Se ___ tempo amanhã, vou ao cinema.', o: ['tiver', 'tinha', 'teve'], why: 'A real possibility: *se tiver*.' },
            { q: 'Assim que ___, telefono-te.', o: ['puder', 'pude', 'podia'], why: '*Assim que puder*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Join the two ideas.', items: [
            { q: 'Chegas. Depois liga-me.', cue: 'Quando', a: ['Quando chegares, liga-me.'], why: '*Quando* + futuro do conjuntivo.' },
            { q: 'Posso. Depois telefono-te.', cue: 'Assim que', a: ['Assim que puder, telefono-te.'], why: '*Assim que* + futuro do conjuntivo.' },
            { q: 'Tens tempo. Vem ao cinema.', cue: 'Se', a: ['Se tiveres tempo, vem ao cinema.'], why: '*Se* + futuro do conjuntivo.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Quando [chegaste], liga-me.', a: ['chegares'], why: 'About the future: *chegares*.' },
            { s: 'Se eu [ter] tempo, irei.', a: ['tiver'], why: '*Ter* → *tiver* in the futuro do conjuntivo.' },
            { s: 'Quem [quer] pode vir.', a: ['quiser'], why: '*Quem quiser* = whoever wants.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the infinitive with its futuro do conjuntivo (eu / ele).', pairs: [
            ['ter', 'tiver'],
            ['fazer', 'fizer'],
            ['poder', 'puder'],
            ['ir / ser', 'for'],
            ['vir', 'vier'],
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Se tiver tempo, irei à festa.', why: '*Se* + futuro do conjuntivo.' },
            { a: 'Quando chegares, liga-me.', why: '*Quando* + futuro do conjuntivo.' },
            { a: 'Assim que puder, telefono-te.', why: '*Assim que* + futuro do conjuntivo.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Uma vida nova',
      about: 'Read an interview with someone who changed their life.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'reading', title: 'Uma entrevista', md: '**Entrevistador:** Teresa, há cinco anos trabalhava num escritório. Porque mudou de vida?\n\n**Teresa:** Sentia-me cansada e infeliz. Achava que o trabalho era tudo, mas não era. Um dia decidi abrir uma pequena padaria na minha aldeia.\n\n**Entrevistador:** Teve medo?\n\n**Teresa:** Claro. Se tivesse mais dinheiro, compraria um espaço maior, mas por agora está bem assim.\n\n**Entrevistador:** O que diria a quem queira mudar de trabalho?\n\n**Teresa:** Se eu fosse a eles, pensaria bem, mas não esperaria demasiado. Parece que o momento certo nunca chega. Gostaria que mais pessoas tivessem coragem de tentar. E quando decidirem, que não desistam à primeira dificuldade.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'A Teresa trabalhava num escritório.', a: 't', why: '*Há cinco anos trabalhava num escritório.*' },
            { q: 'A Teresa abriu uma padaria na sua aldeia.', a: 't', why: '*Decidi abrir uma pequena padaria na minha aldeia.*' },
            { q: 'A Teresa é muito rica agora.', a: 'f', why: 'She says she would buy a bigger place if she had more money.' },
            { q: 'A Teresa tem três empregados.', a: 'ng', why: 'The interview does not mention employees.' },
            { q: 'A Teresa aconselha a esperar pelo momento certo.', a: 'f', why: 'She says: *não esperaria demasiado*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Como se sentia a Teresa no escritório?', o: ['Cansada e infeliz.', 'Contente e cheia de energia.', 'Aborrecida mas tranquila.'], why: '*Sentia-me cansada e infeliz.*' },
            { q: 'O que faria a Teresa com mais dinheiro?', o: ['Compraria um espaço maior.', 'Fecharia a padaria.', 'Voltaria ao escritório.'], why: '*Se tivesse mais dinheiro, compraria um espaço maior.*' },
            { q: 'O que gostaria a Teresa?', o: ['Que mais pessoas tivessem coragem de tentar.', 'Que ninguém mudasse de trabalho.', 'Que todos abrissem uma padaria.'], why: '*Gostaria que mais pessoas tivessem coragem de tentar.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the imperfeito do conjuntivo.', items: [
            { s: 'Se [tivesse] mais dinheiro, compraria um espaço maior.', why: '*Tivesse* follows *se*.' },
            { s: 'Gostaria que mais pessoas [tivessem] coragem de tentar.', why: '*Tivessem* follows *gostaria que*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Se ___ mais dinheiro, compraria um espaço maior. (eu, ter)', a: ['tivesse'], why: '*Se tivesse*.' },
            { q: 'Se eu fosse a eles, ___ bem. (pensar)', a: ['pensaria'], why: 'The result is in the condicional: *pensaria*.' },
            { q: 'Gostaria que mais pessoas ___ coragem de tentar. (ter)', a: ['tivessem'], why: '*Gostaria que* + *tivessem*.' },
            { q: 'Quando ___, que não desistam. (eles, decidir)', a: ['decidirem'], why: '*Quando eles decidirem*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Achava que o trabalho era tudo, mas não era.', why: 'Two imperfeitos.' },
            { a: 'Se eu fosse a eles, pensaria bem.', why: '*Se eu fosse a* + condicional.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Se eu ___ rico, compraria uma casa.', o: ['fosse', 'sou', 'serei'], why: 'After *se*, an imagined situation: *fosse*.' },
      { q: 'Queria que tu ___ comigo.', o: ['viesses', 'venhas', 'vens'], why: '*Queria* is past: *viesses*.' },
      { q: 'Quando ___, liga-me.', o: ['chegares', 'chegaste', 'chegavas'], why: 'About the future: *chegares*.' },
      { q: 'Se tivesse tempo, ___ mais.', o: ['viajaria', 'viajo', 'viajei'], why: 'The result is in the condicional.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
      { q: 'Se eu ___ tempo, viajaria. (ter)', a: ['tivesse'], why: '*Se eu tivesse*.' },
      { q: 'Se tu ___ tempo, vem ao cinema. (ter)', a: ['tiveres'], why: '*Se tu tiveres*.' },
      { q: 'Assim que eu ___, ligo-te. (poder)', a: ['puder'], why: '*Assim que eu puder*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the infinitive with its imperfeito do conjuntivo (que eu / ele).', pairs: [
      ['ser', 'fosse'],
      ['ter', 'tivesse'],
      ['fazer', 'fizesse'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence.', items: [
      { q: 'Não tenho tempo, por isso não viajo.', cue: 'Se', a: ['Se tivesse tempo, viajaria.'], why: '*Se tivesse tempo, viajaria.*' },
      { q: 'Chegas. Depois liga-me.', cue: 'Quando', a: ['Quando chegares, liga-me.'], why: '*Quando* + futuro do conjuntivo.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Se eu [teria] tempo, viajaria.', a: ['tivesse'], why: 'After *se*, the imperfeito do conjuntivo.' },
      { s: 'Quando [chegaste], liga-me.', a: ['chegares'], why: 'About the future: *chegares*.' },
    ] },
  ],
};
