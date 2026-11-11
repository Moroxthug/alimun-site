// Portuguese A1, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Free time',
  goal: 'Talk about what you like doing and arrange to meet.',
  art: 'pizza',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['hobbies', 'gostar de', 'frequency', 'estar a + infinitive', 'querer', 'poder', 'weather', 'seasons'], goals: ['foundations', 'pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Gosto de música',
      about: 'Say what you like with gostar de.',
      art: 'pizza',
      spreads: [
        [
          { t: 'text', md: 'To say what you like, use **gostar de** + a noun or a verb: *Gosto de música. Gosto de ler.* The little word **de** joins with the article: *Gosto do cinema* (de + o), *Gosto da praia* (de + a). To say how much, add **muito** (a lot), **bastante** (quite a lot) or **não … nada** (not at all): *Gosto muito de nadar. Não gosto nada de futebol.*' },
          { t: 'table', caption: 'gostar (to like)', quiz: true, head: ['', 'gostar'], rows: [
            ['eu', 'gosto'],
            ['tu', 'gostas'],
            ['ele / ela / você', 'gosta'],
            ['nós', 'gostamos'],
            ['eles / elas / vocês', 'gostam'],
          ] },
          { t: 'tip', art: 'owl', md: 'To agree, say **eu também** (me too) after a positive sentence and **eu também não** (me neither) after a negative one: *Gosto de nadar. – Eu também. Não gosto de futebol. – Eu também não.* To disagree, say **eu não** or **eu sim**.' },
        ],
        [
          { t: 'table', caption: 'Hobbies', explain: ['head', 'col1'], head: ['Portuguese', 'English'], rows: [
            ['ler', 'to read'],
            ['ouvir música', 'to listen to music'],
            ['ver filmes', 'to watch films'],
            ['cozinhar', 'to cook'],
            ['nadar', 'to swim'],
            ['dançar', 'to dance'],
            ['viajar', 'to travel'],
            ['jogar futebol / ténis', 'to play football / tennis'],
            ['andar de bicicleta', 'to ride a bike'],
            ['caminhar', 'to go for a walk, to hike'],
          ] },
          { t: 'dialogue', title: 'Os teus gostos', lines: [
            { who: 'Rafael', s: 'Gostas de música, Ana?' },
            { who: 'Ana', s: 'Gosto muito. E tu?' },
            { who: 'Rafael', s: 'Eu também. Gosto de ouvir música e de cozinhar.' },
            { who: 'Ana', s: 'Eu não gosto nada de cozinhar!' },
            { who: 'Rafael', s: 'Então gostas de comer!' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of gostar.', verb: 'gostar', tense: 'present', rows: [
            ['eu', 'gosto'],
            ['tu', 'gostas'],
            ['ele / ela / você', 'gosta'],
            ['nós', 'gostamos'],
            ['eles / elas / vocês', 'gostam'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write de, do, da or dos.', items: [
            { q: 'Gosto ___ música.', a: ['de'], why: '*Música* has no article here: *de*.' },
            { q: 'Gosto ___ cinema. (de + o)', a: ['do'], why: '*De + o = do*.' },
            { q: 'Ela gosta ___ praia. (de + a)', a: ['da'], why: '*De + a = da*.' },
            { q: 'Eles gostam ___ animais. (de + os)', a: ['dos'], why: '*De + os = dos*.' },
            { q: 'Nós gostamos ___ ler.', a: ['de'], why: '*Gostar de* + verb.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the verb with its meaning.', pairs: [
            ['ler', 'to read'],
            ['nadar', 'to swim'],
            ['cozinhar', 'to cook'],
            ['dançar', 'to dance'],
            ['viajar', 'to travel'],
            ['caminhar', 'to go for a walk'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Eu gosto de nadar. – ___', o: ['Eu também.', 'Eu também não.', 'Eu não nada.'], why: 'To agree with a positive sentence: *eu também*.' },
            { q: 'Eu não gosto de futebol. – ___', o: ['Eu também não.', 'Eu também.', 'Eu sim.'], why: 'To agree with a negative sentence: *eu também não*.' },
            { q: 'Gostas de ler? – ___', o: ['Sim, gosto muito.', 'Sim, gostas.', 'Sim, gosta.'], why: 'Answer with *eu*: *gosto*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Gosto [do] música.', a: ['de'], why: '*Gosto de música*, with no article.' },
            { s: 'Ela [gosto] de ler.', a: ['gosta'], why: '*Ela gosta*.' },
            { s: 'Eu [gostam] de nadar.', a: ['gosto'], why: '*Eu gosto*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Gosto muito de música.', why: '*Muito* goes before *de*.' },
            { a: 'Não gosto nada de futebol.', why: '*Não … nada* = not at all.' },
            { a: 'Gostas de ler?', why: 'The question has the same order.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Às vezes, estou a ler',
      about: 'Say how often you do things and what you are doing now.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To say **how often**, use frequency words: **sempre** (always), **muitas vezes** (often), **às vezes** (sometimes), **raramente** (rarely), **nunca** (never). They usually go before the verb: *Às vezes jogo ténis. Nunca vejo televisão de manhã.* With **nunca**, you do not need **não**. To say how many times, say **uma vez por semana** (once a week), **duas vezes por mês** (twice a month) or **todos os dias** (every day).' },
          { t: 'table', caption: 'How often?', explain: ['head', 'col1'], head: ['Portuguese', 'English'], rows: [
            ['sempre', 'always'],
            ['muitas vezes', 'often'],
            ['às vezes', 'sometimes'],
            ['raramente', 'rarely'],
            ['nunca', 'never'],
            ['todos os dias', 'every day'],
            ['uma vez por semana', 'once a week'],
            ['ao fim de semana', 'at the weekend'],
          ] },
          { t: 'tip', art: 'owl', md: 'Compare **Nunca vejo televisão** with **Não vejo televisão**. The first says *never*, the second says *I do not watch* (now or in general). *Ao fim de semana* and *no fim de semana* are both fine in Portugal.' },
        ],
        [
          { t: 'text', md: 'To say what you are doing **right now**, use **estar a** + infinitive: *Estou a ler. Estás a ver televisão? Ela está a cozinhar.* In Brazil, people say **estar** + gerund: *estou lendo*. In Portugal, the form with **a** is the normal one.' },
          { t: 'table', caption: 'estar a + infinitive', quiz: true, head: ['', 'estar a ler'], rows: [
            ['eu', 'estou a ler'],
            ['tu', 'estás a ler'],
            ['ele / ela / você', 'está a ler'],
            ['nós', 'estamos a ler'],
            ['eles / elas / vocês', 'estão a ler'],
          ] },
          { t: 'dialogue', title: 'O fim de semana', lines: [
            { who: 'Rafael', s: 'O que fazes ao fim de semana?' },
            { who: 'Ana', s: 'Às vezes jogo ténis e muitas vezes vou ao cinema.' },
            { who: 'Rafael', s: 'Gostas de ler?' },
            { who: 'Ana', s: 'Gosto muito, mas raramente tenho tempo.' },
            { who: 'Rafael', s: 'Eu estou a ler um livro agora.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Eu estou a ___ televisão. (ver)', a: ['ver'], why: '*Estar a* + infinitive.' },
            { q: 'Ela está a ___ o jantar. (cozinhar)', a: ['cozinhar'], why: '*Estar a* + infinitive.' },
            { q: 'Nós estamos a ___ futebol. (jogar)', a: ['jogar'], why: '*Estar a* + infinitive.' },
            { q: 'Eles ___ a ouvir música. (estar)', a: ['estão'], why: '*Eles estão a*.' },
            { q: 'Tu ___ a ler? (estar)', a: ['estás'], why: '*Tu estás a*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: '___ vejo televisão de manhã. (never)', o: ['Nunca', 'Sempre', 'Muitas vezes'], why: '*Nunca* = never.' },
            { q: 'Jogo ténis uma vez ___ semana.', o: ['por', 'em', 'de'], why: '*Por semana* = a week.' },
            { q: '___ os dias vou a pé para o trabalho.', o: ['Todos', 'Cada', 'Sempre'], why: '*Todos os dias* = every day.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say what is happening now.', items: [
            { q: 'Leio um livro.', a: ['Estou a ler um livro.'], why: '*Leio* → *estou a ler*.' },
            { q: 'Ela cozinha.', a: ['Ela está a cozinhar.'], why: '*Cozinha* → *está a cozinhar*.' },
            { q: 'Nós vemos televisão.', a: ['Nós estamos a ver televisão.', 'Estamos a ver televisão.'], why: '*Vemos* → *estamos a ver*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Eu estou [lendo] um livro.', a: ['a ler'], why: 'In Portugal: *estar a* + infinitive.' },
            { s: 'Ela está [a cozinha].', a: ['a cozinhar'], why: '*Estar a* + infinitive: *cozinhar*.' },
            { s: 'Nós [está] a jogar futebol.', a: ['estamos'], why: '*Nós estamos*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Às vezes jogo ténis ao sábado.', why: 'A frequency word can come first.' },
            { a: 'Estou a ler um livro agora.', why: '*Estar a* + infinitive.' },
            { a: 'Nunca vejo televisão de manhã.', why: '*Nunca* before the verb.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Queres ir?',
      about: 'Invite someone, accept or decline, and talk about the weather.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'To invite someone, say **Queres ir ao cinema?** (Do you want to go to the cinema?) or **Vamos ao cinema?** (Shall we go?). To accept, say **Boa ideia!**, **Claro!** or **Pode ser.** To say no politely, say **Desculpa, não posso. Tenho de trabalhar.** (**ter de** + infinitive = to have to). To fix the plan, ask **Onde? Quando? A que horas?**' },
          { t: 'table', caption: 'querer and poder', quiz: true, head: ['', 'querer', 'poder'], rows: [
            ['eu', 'quero', 'posso'],
            ['tu', 'queres', 'podes'],
            ['ele / ela / você', 'quer', 'pode'],
            ['nós', 'queremos', 'podemos'],
            ['eles / elas / vocês', 'querem', 'podem'],
          ] },
          { t: 'tip', art: 'owl', md: 'After **querer** and **poder**, use the infinitive: *Quero ir. Posso vir.* **Queria** is a more polite form of **quero**: *Queria ir ao cinema.* To suggest a plan, **vamos** + **a** + place is also common: *Vamos ao teatro?*' },
        ],
        [
          { t: 'dialogue', title: 'Vamos ao cinema?', lines: [
            { who: 'Pedro', s: 'Queres ir ao cinema no sábado?' },
            { who: 'Ana', s: 'Boa ideia! A que horas?' },
            { who: 'Pedro', s: 'Às oito, em frente ao cinema.' },
            { who: 'Ana', s: 'Pode ser. Até sábado!' },
          ] },
          { t: 'dialogue', title: 'Não posso', lines: [
            { who: 'Rafael', s: 'Queres jantar comigo hoje?' },
            { who: 'Marta', s: 'Desculpa, não posso. Tenho de trabalhar.' },
            { who: 'Rafael', s: 'Não faz mal. Amanhã?' },
            { who: 'Marta', s: 'Amanhã posso. Combinado!' },
          ] },
        ],
        [
          { t: 'table', caption: 'Weather and seasons', explain: ['head', 'col1'], head: ['Portuguese', 'English'], rows: [
            ['Está sol.', 'It is sunny.'],
            ['Está calor.', 'It is hot.'],
            ['Está frio.', 'It is cold.'],
            ['Está vento.', 'It is windy.'],
            ['Está nublado.', 'It is cloudy.'],
            ['Está a chover.', 'It is raining.'],
            ['a primavera', 'spring'],
            ['o verão', 'summer'],
            ['o outono', 'autumn'],
            ['o inverno', 'winter'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Portuguese, we use **estar** for the weather: *Está sol. Está frio.* To ask, say **Como está o tempo?** The word *tempo* means both *time* and *weather*. In Brazil, people also say *Faz calor* and *Faz frio*.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the right form.', items: [
            { q: 'Tu ___ ir ao cinema? (querer)', a: ['queres'], why: '*Tu queres*.' },
            { q: 'Desculpa, não ___ ir. (eu, poder)', a: ['posso'], why: '*Eu posso*.' },
            { q: 'Nós ___ jantar às oito. (poder)', a: ['podemos'], why: '*Nós podemos*.' },
            { q: 'Eles ___ viajar no verão. (querer)', a: ['querem'], why: '*Eles querem*.' },
            { q: 'Tenho ___ trabalhar hoje.', a: ['de'], why: '*Ter de* + infinitive.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'Aceitas o convite:', o: ['Boa ideia!', 'Não posso.', 'Adeus.'], why: '*Boa ideia!* accepts.' },
            { q: 'Não podes ir:', o: ['Desculpa, não posso.', 'Claro!', 'Pode ser.'], why: '*Desculpa, não posso* declines politely.' },
            { q: 'Perguntas o tempo:', o: ['Como está o tempo?', 'Que horas são?', 'Onde está?'], why: '*Como está o tempo?*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the weather with its meaning.', pairs: [
            ['Está sol.', 'It is sunny.'],
            ['Está frio.', 'It is cold.'],
            ['Está a chover.', 'It is raining.'],
            ['Está vento.', 'It is windy.'],
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Queres ir ao cinema no sábado?', why: '*Queres* + infinitive.' },
            { a: 'Desculpa, não posso.', why: 'A polite refusal.' },
            { a: 'Está sol e está calor.', why: '*Estar* for the weather.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Avisos',
      about: 'Read notices from a sports centre and a cultural centre.',
      art: 'pizza',
      spreads: [
        [
          { t: 'reading', title: 'Centro Desportivo', md: 'Há aulas de natação à terça e à quinta, das sete às oito da noite. Ao sábado de manhã, há ténis para adultos. A inscrição é grátis. Contacto: desporto@example.com.' },
          { t: 'reading', title: 'Centro Cultural', md: 'Ao sábado há um clube de leitura às quatro da tarde. Ao domingo há cinema, às seis. A entrada custa dois euros.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'As aulas de natação são à terça e à quinta.', a: 't', why: '*À terça e à quinta.*' },
            { q: 'O ténis é ao domingo.', a: 'f', why: 'Tennis is on Saturday morning: *ao sábado de manhã*.' },
            { q: 'A inscrição no centro desportivo é grátis.', a: 't', why: '*A inscrição é grátis.*' },
            { q: 'O clube de leitura é gratuito.', a: 'ng', why: 'The notice does not say if the reading club is free.' },
            { q: 'O cinema é ao domingo às seis.', a: 't', why: '*Ao domingo há cinema, às seis.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'A que horas são as aulas de natação?', o: ['Das sete às oito da noite.', 'Às quatro da tarde.', 'Às seis.'], why: '*Das sete às oito da noite.*' },
            { q: 'Quanto custa a entrada do cinema?', o: ['Dois euros.', 'É grátis.', 'Seis euros.'], why: '*A entrada custa dois euros.*' },
            { q: 'Quando é o clube de leitura?', o: ['Ao sábado, às quatro da tarde.', 'Ao domingo, às seis.', 'À terça, às sete.'], why: '*Ao sábado há um clube de leitura às quatro da tarde.*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Há aulas de natação ___ terça e à quinta.', a: ['à'], why: '*À terça* = on Tuesdays.' },
            { q: 'A entrada ___ dois euros. (custar)', a: ['custa'], why: '*A entrada custa*.' },
            { q: 'A inscrição é ___.', a: ['grátis'], why: '*Grátis* = free.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Eu ___ de música.', o: ['gosto', 'gostas', 'gosta'], why: '*Eu gosto*.' },
      { q: 'Eu gosto muito ___ cinema.', o: ['do', 'de', 'dos'], why: '*De + o = do*.' },
      { q: 'Nós ___ ir ao cinema.', o: ['queremos', 'quer', 'querem'], why: '*Nós queremos*.' },
      { q: 'Eu não gosto de futebol. – ___', o: ['Eu também não.', 'Eu também.', 'Eu sim.'], why: 'Agree with a negative: *eu também não*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Eu estou a ___ televisão. (ver)', a: ['ver'], why: '*Estar a* + infinitive.' },
      { q: 'Tu ___ de futebol? (gostar)', a: ['gostas'], why: '*Tu gostas*.' },
      { q: 'Desculpa, não ___ ir. (poder)', a: ['posso'], why: '*Eu posso*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the weather with its meaning.', pairs: [
      ['Está sol.', 'It is sunny.'],
      ['Está frio.', 'It is cold.'],
      ['Está a chover.', 'It is raining.'],
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Gosto [do] música.', a: ['de'], why: '*Gosto de música*.' },
      { s: 'Eu estou [lendo] um livro.', a: ['a ler'], why: 'In Portugal: *estar a* + infinitive.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Queres ir ao cinema no sábado?', why: '*Queres* + infinitive.' },
      { a: 'Nunca vejo televisão de manhã.', why: '*Nunca* before the verb.' },
    ] },
  ],
};
