// Portuguese A1, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'My day',
  goal: 'Say what you do every day and when.',
  art: 'snail',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['time', 'days of the week', 'daily routine', 'reflexive verbs', 'irregular verbs', 'ir', 'fazer'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Que horas são?',
      about: 'Tell the time and name the days of the week.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'To ask the time, say **Que horas são?** To answer, use **é** for one o’clock, midday and midnight, and **são** for all other hours: *É uma hora. São duas horas. São duas e meia.* To say *at* a time, use **à** for one o’clock and **às** for the others: *à uma, às duas, às oito*. To ask *when*, say **A que horas …?**' },
          { t: 'table', caption: 'The time', explain: ['head'], head: ['Time', 'Portuguese'], rows: [
            ['1:00', 'É uma hora.'],
            ['2:00', 'São duas horas.'],
            ['2:30', 'São duas e meia.'],
            ['3:15', 'São três e um quarto.'],
            ['3:45', 'São quatro menos um quarto.'],
            ['12:00', 'É meio-dia.'],
            ['24:00', 'É meia-noite.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Add **de manhã** (in the morning), **da tarde** (in the afternoon) or **da noite** (at night) when it is not clear: *São oito da manhã. São oito da noite.* In official timetables, Portugal uses the 24-hour clock: *dezanove e trinta* (19:30).' },
        ],
        [
          { t: 'table', caption: 'The days of the week', explain: ['head', 'col1'], head: ['Portuguese', 'English'], rows: [
            ['segunda-feira', 'Monday'],
            ['terça-feira', 'Tuesday'],
            ['quarta-feira', 'Wednesday'],
            ['quinta-feira', 'Thursday'],
            ['sexta-feira', 'Friday'],
            ['sábado', 'Saturday'],
            ['domingo', 'Sunday'],
          ] },
          { t: 'tip', art: 'owl', md: 'Days of the week are written with a small letter. To say *on Monday*, say **na segunda-feira** or just **segunda**; to say *every Monday*, say **às segundas**. To say *from Monday to Friday*, say **de segunda a sexta**. People often drop **-feira**: *na terça, na quinta*.' },
          { t: 'dialogue', title: 'O filme', lines: [
            { who: 'Ana', s: 'Que horas são?' },
            { who: 'Pedro', s: 'São nove e meia.' },
            { who: 'Ana', s: 'A que horas é o filme?' },
            { who: 'Pedro', s: 'É às dez e um quarto.' },
            { who: 'Ana', s: 'Então temos tempo.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the time with the words.', pairs: [
            ['2:30', 'duas e meia'],
            ['3:15', 'três e um quarto'],
            ['3:45', 'quatro menos um quarto'],
            ['12:00', 'meio-dia'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Que horas são? – ___ três e meia.', a: ['São'], why: 'All hours except one o’clock: *são*.' },
            { q: '___ uma hora.', a: ['É'], why: 'One o’clock: *é*.' },
            { q: 'O filme é ___ dez horas.', a: ['às'], why: '*Às* before a plural hour.' },
            { q: 'O almoço é ___ uma.', a: ['à'], why: '*À* before one o’clock.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Que horas são? (5:30)', o: ['São cinco e meia.', 'É cinco e meia.', 'São cinco meia.'], why: 'Plural hour: *são*; half past: *e meia*.' },
            { q: 'Que horas são? (1:00)', o: ['É uma hora.', 'São uma hora.', 'Está uma hora.'], why: 'One o’clock: *é uma hora*.' },
            { q: 'O dia depois de segunda-feira é ___.', o: ['terça-feira', 'sexta-feira', 'domingo'], why: 'After Monday: Tuesday.' },
            { q: 'O primeiro dia do fim de semana é ___.', o: ['sábado', 'domingo', 'sexta-feira'], why: 'The weekend begins on Saturday.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Que horas são?', why: 'The question for the time.' },
            { a: 'A que horas é o filme?', why: '*A que horas* asks when.' },
            { a: 'O filme é às dez e um quarto.', why: '*Às* + time.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Levanto-me às sete',
      about: 'Reflexive verbs: the pronoun comes after the verb.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Some verbs are **reflexive**: the action goes back to the person. They have a little word with them: *me, te, se, nos*. **levantar-se** means *to get up*, **deitar-se** means *to go to bed*, and **lavar-se** means *to wash*. In Portugal, the little word goes **after** the verb with a hyphen in a normal sentence: *Levanto-me às sete.* It goes **before** the verb in a negative sentence and in a question with a question word: *Não me levanto cedo. A que horas te levantas?*' },
          { t: 'table', caption: 'levantar-se (to get up)', quiz: true, head: ['', 'levantar-se'], rows: [
            ['eu', 'levanto-me'],
            ['tu', 'levantas-te'],
            ['ele / ela / você', 'levanta-se'],
            ['nós', 'levantamo-nos'],
            ['eles / elas / vocês', 'levantam-se'],
          ] },
          { t: 'tip', art: 'owl', md: 'Compare **Levanto-me** (statement), **Não me levanto** (negative) and **A que horas te levantas?** (question with a question word). In Brazil, the little word usually goes **before** the verb: *Eu me levanto às sete.* In Portugal, this is only for negatives, questions and some other cases.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Levanto-me** às sete.', n: 'A statement: the pronoun after the verb.' },
            { s: 'A que horas **te levantas**?', n: 'A question with a question word: the pronoun before.' },
            { s: 'Ela **lava-se** e **veste-se**.', n: 'Two reflexive verbs.' },
            { s: 'Nós **deitamo-nos** às onze.', n: '*Nós*: *deitamo-nos*.' },
            { s: '**Não me levanto** cedo ao domingo.', n: 'A negative: the pronoun before.' },
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of levantar-se.', verb: 'levantar-se', tense: 'present', rows: [
            ['eu', 'levanto-me'],
            ['tu', 'levantas-te'],
            ['ele / ela / você', 'levanta-se'],
            ['nós', 'levantamo-nos'],
            ['eles / elas / vocês', 'levantam-se'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Eu levanto-___ às sete.', a: ['me'], why: '*Eu levanto-me*.' },
            { q: 'Tu ___-te às onze? (deitar)', a: ['deitas'], why: '*Tu deitas-te*.' },
            { q: 'Ela lava-___.', a: ['se'], why: '*Ela lava-se*.' },
            { q: 'Nós levantamo-___ às oito.', a: ['nos'], why: '*Nós levantamo-nos*.' },
            { q: 'Não ___ levanto cedo.', a: ['me'], why: 'In a negative sentence, *me* goes before the verb.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Eu levanto-[te] às sete.', a: ['me'], why: '*Eu* needs *me*.' },
            { s: 'Ela [levanto]-se às oito.', a: ['levanta'], why: '*Ela levanta-se*.' },
            { s: 'Tu levantas-[se] cedo?', a: ['te'], why: '*Tu* needs *te*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right sentence.', items: [
            { q: '', o: ['Levanto-me às sete.', 'Me levanto às sete.', 'Levanto me às sete.'], why: 'In Portugal, after the verb with a hyphen.' },
            { q: '', o: ['Não me levanto cedo.', 'Não levanto-me cedo.', 'Levanto-me não cedo.'], why: 'In a negative sentence, *me* goes before the verb.' },
            { q: '', o: ['A que horas te levantas?', 'A que horas levantas-te?', 'A que horas levantas?'], why: 'In a question with a question word, *te* goes before the verb.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Levanto-me às sete.', why: 'The pronoun goes after the verb.' },
            { a: 'A que horas te deitas?', why: 'The pronoun goes before the verb in a question.' },
            { a: 'Não me levanto cedo.', why: 'The pronoun goes before the verb in a negative.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Faço, vou, saio',
      about: 'Learn five irregular verbs for your daily routine.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'Some very common verbs are irregular. Learn them as they are. **fazer** (to do, to make), **ir** (to go), **sair** (to go out, to leave), **ver** (to see, to watch) and **pôr** (to put).' },
          { t: 'table', caption: 'Five irregular verbs', quiz: true, head: ['', 'fazer', 'ir', 'sair', 'ver', 'pôr'], rows: [
            ['eu', 'faço', 'vou', 'saio', 'vejo', 'ponho'],
            ['tu', 'fazes', 'vais', 'sais', 'vês', 'pões'],
            ['ele / ela / você', 'faz', 'vai', 'sai', 'vê', 'põe'],
            ['nós', 'fazemos', 'vamos', 'saímos', 'vemos', 'pomos'],
            ['eles / elas / vocês', 'fazem', 'vão', 'saem', 'veem', 'põem'],
          ] },
          { t: 'tip', art: 'owl', md: 'Look at the accents: **vês** and **vê** have an accent, but **veem** (they see) does not. **Saímos** has an accent on the *í*. With **ir**, use **a** for a place: *Vou ao trabalho* (a + o = ao); for transport, use **de**: *Vou de autocarro.*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Eu **faço** o jantar às oito.', n: '*Fazer*: *eu faço*.' },
            { s: 'Eu **vou** ao trabalho de autocarro.', n: '*Ir*: *eu vou*.' },
            { s: 'Eu **saio** de casa às oito.', n: '*Sair*: *eu saio*.' },
            { s: 'À noite **vejo** televisão.', n: '*Ver*: *eu vejo*.' },
            { s: 'Ela **põe** a mesa.', n: '*Pôr*: *ela põe*.' },
          ] },
          { t: 'dialogue', title: 'Um dia normal', lines: [
            { who: 'Rafael', s: 'A que horas sais de casa?' },
            { who: 'Marta', s: 'Saio às oito e meia. Vou de autocarro.' },
            { who: 'Rafael', s: 'A que horas almoças?' },
            { who: 'Marta', s: 'Almoço à uma. E tu?' },
            { who: 'Rafael', s: 'Almoço às duas. À noite vejo televisão.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of ir.', verb: 'ir', tense: 'present', rows: [
            ['eu', 'vou'],
            ['tu', 'vais'],
            ['ele / ela / você', 'vai'],
            ['nós', 'vamos'],
            ['eles / elas / vocês', 'vão'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the right form of the verb.', items: [
            { q: 'Eu ___ o jantar às oito. (fazer)', a: ['faço'], why: '*eu faço*' },
            { q: 'Tu ___ de casa às oito? (sair)', a: ['sais'], why: '*tu sais*' },
            { q: 'Nós ___ ao cinema. (ir)', a: ['vamos'], why: '*nós vamos*' },
            { q: 'Ela ___ televisão à noite. (ver)', a: ['vê'], why: '*ela vê*' },
            { q: 'Eles ___ o trabalho em casa. (fazer)', a: ['fazem'], why: '*eles fazem*' },
            { q: 'Eu ___ a mesa. (pôr)', a: ['ponho'], why: '*eu ponho*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the verb with its meaning.', pairs: [
            ['fazer', 'to do, to make'],
            ['ir', 'to go'],
            ['sair', 'to go out'],
            ['ver', 'to see, to watch'],
            ['pôr', 'to put'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Nós ___ ao trabalho de autocarro.', o: ['vamos', 'vão', 'vou'], why: '*nós vamos*' },
            { q: 'Eu ___ de casa às oito.', o: ['saio', 'sais', 'sai'], why: '*eu saio*' },
            { q: 'Eles ___ televisão à noite.', o: ['veem', 'vê', 'vemos'], why: '*eles veem*' },
            { q: 'Tu ___ o jantar?', o: ['fazes', 'faz', 'faço'], why: '*tu fazes*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Eu [fazo] o jantar.', a: ['faço'], why: '*Eu faço*.' },
            { s: 'Nós [vão] ao cinema.', a: ['vamos'], why: '*Nós vamos*.' },
            { s: 'Ela [vês] televisão.', a: ['vê'], why: '*Ela vê*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Saio de casa às oito.', why: '*Sair de casa* + time.' },
            { a: 'Vou ao trabalho de autocarro.', why: '*Ir a* + place, *de* + transport.' },
            { a: 'À noite vejo televisão.', why: 'A time word can come first.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Um dia de padeiro',
      about: 'Read about a day in the life of a baker.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'O dia do Manuel', md: 'O Manuel é padeiro. Levanta-se às quatro da manhã. Faz o pão até às sete. Às oito abre a padaria. Almoça à uma e, à tarde, vai a casa. À noite vê televisão e deita-se às nove.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'O Manuel levanta-se às quatro da manhã.', a: 't', why: '*Levanta-se às quatro da manhã.*' },
            { q: 'O Manuel abre a padaria às sete.', a: 'f', why: 'He opens it at eight: *às oito*.' },
            { q: 'O Manuel almoça à uma.', a: 't', why: '*Almoça à uma.*' },
            { q: 'O Manuel tem dois filhos.', a: 'ng', why: 'The text does not mention children.' },
            { q: 'O Manuel deita-se às nove.', a: 't', why: '*Deita-se às nove.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'O que faz o Manuel até às sete?', o: ['Faz o pão.', 'Vê televisão.', 'Almoça.'], why: '*Faz o pão até às sete.*' },
            { q: 'O que faz o Manuel à tarde?', o: ['Vai a casa.', 'Abre a padaria.', 'Levanta-se.'], why: '*À tarde, vai a casa.*' },
            { q: 'O que faz o Manuel à noite?', o: ['Vê televisão.', 'Faz o pão.', 'Almoça.'], why: '*À noite vê televisão.*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'O Manuel levanta-___ às quatro da manhã.', a: ['se'], why: '*Ele levanta-se*.' },
            { q: 'Às oito ___ a padaria. (abrir)', a: ['abre'], why: '*Ele abre*.' },
            { q: 'À tarde, ele ___ a casa. (ir)', a: ['vai'], why: '*Ele vai*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Que horas são? (3:30)', o: ['São três e meia.', 'É três e meia.', 'São três meia.'], why: 'Plural hour: *são*.' },
      { q: 'Eu ___-me às sete.', o: ['levanto', 'levantas', 'levanta'], why: '*Eu levanto-me*.' },
      { q: 'Eu ___ o jantar às oito.', o: ['faço', 'fazo', 'faz'], why: '*Eu faço*.' },
      { q: 'A que horas ___ de casa? (tu)', o: ['sais', 'sai', 'saio'], why: '*Tu sais*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Nós ___ ao cinema. (ir)', a: ['vamos'], why: '*Nós vamos*.' },
      { q: 'Ela ___-se às onze. (deitar)', a: ['deita'], why: '*Ela deita-se*.' },
      { q: '___ uma hora.', a: ['É'], why: 'One o’clock: *é*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the day with its English name.', pairs: [
      ['segunda-feira', 'Monday'],
      ['sábado', 'Saturday'],
      ['domingo', 'Sunday'],
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Eu levanto-[te] às sete.', a: ['me'], why: '*Eu* needs *me*.' },
      { s: 'Nós [vão] ao cinema.', a: ['vamos'], why: '*Nós vamos*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Levanto-me às sete.', why: 'The pronoun goes after the verb.' },
      { a: 'A que horas te deitas?', why: 'The pronoun goes before the verb in a question.' },
    ] },
  ],
};
