// In, on, at. Verificado com Cambridge Dictionary (At, on and in: time; At, on and in: place; on time e in time;
// in the end; arrive somewhere), British Council LearnEnglish (preposições de tempo; preposições de lugar),
// Oxford Learner's Dictionaries (notas sobre weekend, hospital e university no inglês britânico e americano) e
// Wikipedia (diferenças gramaticais entre inglês americano e britânico).
export default {
  key: 'in-on-at',
  site: 'pt',
  slug: 'preposicoes-in-on-at-ingles',
  section: 'grammar',
  course: 'English',
  published: '2026-10-31',
  updated: '2026-10-31',
  title: 'In, on, at: as preposições de tempo e lugar em inglês',
  metaTitle: 'In, on, at: preposições de tempo e lugar em inglês – Alimun',
  desc: 'Quando usar in, on e at para tempo e lugar: at 5 o’clock, on Monday, in June, on the bus, in the car, at home, Reino Unido e EUA, in time e on time, erros comuns.',
  lead: "At the weekend ou on the weekend? In the bus ou on the bus? Três palavrinhas causam mais erros do que quase qualquer outra coisa em inglês, porque **em português uma preposição só, em (no, na, nos, nas), faz o trabalho das três**. Veja como o inglês divide esse terreno, com os padrões que cobrem a maioria das frases e as exceções que vale a pena decorar.",
  photo: 'in-on-at-station-clock',
  sticker: { draw: 'snail', say: 'See you on Monday, at nine, in the café. Segunda, às nove!' },
  facts: [
    { n: 3, unit: 'preposições', text: 'in, on e at fazem quase todo o trabalho de tempo e lugar em inglês' },
    { label: 'at the weekend', text: 'a forma britânica habitual, onde o inglês americano diz on the weekend' },
    { label: 'in hospital', text: 'inglês britânico para um paciente, onde o inglês americano diz in the hospital' },
    { label: 'next, last, this, every', text: 'expressões de tempo com essas palavras não levam in, on nem at: next Monday, last summer, every Saturday' },
  ],
  blocks: [
    { take: { title: 'Resumindo', text: "Para o tempo, use **at para um ponto** (at 5 o’clock, at noon, at night), **on para um dia ou uma data** (on Monday, on July 4, on my birthday) e **in para um período mais longo** (in June, in 2026, in the summer, in the morning). Para o lugar, at é um ponto ou um lugar onde se faz algo (at the station, at home), on é uma superfície, uma linha ou um andar (on the table, on the third floor, on the bus) e in é um espaço fechado ou uma área (in the car, in São Paulo). Com next, last, this e every não vai preposição nenhuma.", draw: 'owl' } },

    { h: 'O triângulo: do maior para o menor' },
    { p: "Muitos professores desenham in, on e at como um triângulo de cabeça para baixo. Em cima, na parte larga, fica **in**, para espaços grandes e períodos longos: in Europe, in 2026, in the winter. No meio fica **on**, para algo mais definido: uma rua, uma superfície, um dia. Embaixo, na ponta, fica **at**, para um ponto ou um momento exato: at the corner, at 7:30." },
    { p: "O triângulo é um bom ponto de partida e explica boa parte das frases do dia a dia. Mas trate-o como **um guia, não como uma lei**. O inglês também tem expressões fixas que não seguem o desenho, como at night, at the weekend e in the morning, e às vezes a escolha depende de como quem fala enxerga o lugar, não do tamanho dele. O resto do artigo mostra onde o triângulo funciona e onde você simplesmente precisa aprender a expressão." },
    { table: {
      head: ['', 'Tempo', 'Lugar'],
      rows: [
        ['in: grande, longo, fechado', 'in June, in 2026, in the summer, in the 1990s, in the morning', 'in Spain, in London, in the kitchen, in the car, in a taxi'],
        ['on: um dia, uma superfície, uma linha', 'on Monday, on July 4, on my birthday, on Monday morning', 'on the table, on the wall, on Oxford Street, on the bus, on the fifth floor'],
        ['at: um ponto exato', 'at 5 o’clock, at noon, at lunchtime, at night', 'at the station, at the door, at 15 Craig Street, at home, at work'],
      ],
      note: 'O triângulo cobre os casos mais comuns. Expressões fixas como at night e in the morning precisam ser aprendidas do jeito que são.',
    } },

    { h: 'Tempo: at para um ponto' },
    { p: "Use **at** para horas e outros momentos exatos do dia: at 5 o’clock, at 7:45, at midday, at midnight, at sunrise. É o nosso “às”: às cinco, à meia-noite. Também vai com as refeições, at breakfast e at lunchtime, e com algumas expressões fixas: **at night, at the moment, at the same time**. Aqui o português ajuda, porque à noite já é at night." },
    { p: "Cuidado com at the moment. Em português dizemos neste momento, e a tradução ao pé da letra in this moment soa estranha para um nativo: o natural é **I'm busy at the moment**. Nas perguntas informais, o at some: o Cambridge Dictionary dá **What time are you leaving?** como a forma preferida em vez de At what time are you leaving?, que soa dura. Na resposta, o at volta: at six." },
    { examples: [
      ['The meeting starts **at** 9:30.', 'A reunião começa às 9h30: hora leva at.'],
      ["Let's talk **at** lunchtime.", 'Vamos conversar na hora do almoço: uma refeição é um ponto do dia.'],
      ["I can't sleep **at** night.", 'Não consigo dormir à noite: expressão fixa.'],
      ["She's busy **at** the moment.", 'Ela está ocupada no momento: at the moment, não in this moment.'],
    ] },

    { h: 'Tempo: on para dias e datas' },
    { p: "Use **on** para os dias da semana, as datas e os dias especiais: on Monday, on July 4, on 30 July, on New Year’s Day, **on my birthday**. Em português dizemos na segunda-feira, no dia 4 de julho, no meu aniversário, e esse na ou no puxa para in Monday, um erro muito comum. O dia no plural fala de um hábito: the office is closed on Fridays, o escritório fecha às sextas, ou seja, toda sexta." },
    { p: "Aqui o triângulo quebra de um jeito curioso. Morning sozinho leva in, mas uma manhã específica leva on: **in the morning**, de manhã, mas **on Monday morning**, na segunda de manhã, on the morning of the ninth, on a cold winter evening. Assim que a parte do dia está ligada a um dia específico, ou vem com um adjetivo, on vence." },
    { note: { title: 'Os americanos muitas vezes tiram o on', text: "No inglês americano a preposição antes de um dia muitas vezes some: **She resigned Thursday**, I'll see you Monday. Os britânicos costumam mantê-la: she resigned on Thursday. As duas estão certas na sua variedade, e on Monday nunca está errado.", draw: 'parrot' } },

    { h: 'Tempo: in para períodos mais longos' },
    { p: "Use **in** para meses, anos, estações, décadas e séculos: in June, **in 2026**, in the spring, in the 1990s, in the nineteenth century. Aqui o português coincide, com em junho e em 2026. In também vai com as partes do dia, in the morning, in the afternoon, in the evening, mesmo que a gente diga de manhã ou à tarde, e com expressões como in the past e in the future." },
    { p: "A noite é a exceção. **At night** quer dizer à noite em geral, qualquer noite: it's not safe to walk there at night. **In the night** costuma se referir a uma noite específica: I woke up in the night, acordei durante a noite. In também diz quanto tempo algo leva ou daqui a quanto tempo acontece: she learned the song in five minutes, I'll call you in ten minutes, te ligo daqui a dez minutos." },
    { examples: [
      ['My birthday is **in** June.', 'Meu aniversário é em junho: o mês leva in.'],
      ['My birthday is **on** June 12.', 'É no dia 12 de junho: a data leva on.'],
      ['We moved here **in** 2019.', 'A gente se mudou para cá em 2019.'],
      ['I work best **in** the morning.', 'Eu trabalho melhor de manhã: qualquer manhã, in.'],
      ['The flight leaves **on** Friday morning.', 'O voo sai na sexta de manhã: uma manhã específica, on.'],
      ['The train leaves **in** ten minutes.', 'O trem sai daqui a dez minutos.'],
    ] },
    { figure: { photo: 'in-on-at-birthday-cake', alt: 'Um bolo de aniversário com velas acesas sobre uma mesa', caption: 'Um dia especial leva on: on my birthday. O mês leva in: my birthday is in June.' } },

    { h: 'O fim de semana: at ou on?' },
    { p: "É a diferença mais conhecida entre o inglês britânico e o americano com essas palavras. No Reino Unido a forma habitual é **at the weekend**, e para um hábito at weekends. Nos Estados Unidos se diz **on the weekend** e on weekends. O Oxford Learner's Dictionaries marca a primeira como britânica e a segunda como sobretudo norte-americana." },
    { panels: [
      ['Inglês britânico', "What are you doing at the weekend? The office is closed at weekends. I'll see you at the weekend."],
      ['Inglês americano', "What are you doing on the weekend? The office is closed on weekends. I'll see you on the weekend."],
    ] },
    { p: "Uma coisa é igual dos dois lados do Atlântico: um fim de semana específico, com data, leva on. **The festival is on the last weekend in July**, em Londres e em Nova York. O que não está certo em nenhuma das duas variedades é in the weekend, tradução direta de no fim de semana e um dos erros mais frequentes de quem fala português." },

    { h: 'Sem preposição: this, next, last, every' },
    { p: "As expressões de tempo que começam com **this, next, last, every**, e também each, some, that, one, any e all, não levam in, on nem at. Every Saturday, next Monday, last summer, this evening. Aqui o português pode atrapalhar, porque dizemos na próxima segunda e no verão passado, com no e na. Daí saem on next Monday e in last summer, que estão errados." },
    { examples: [
      ['He plays football **every** Saturday.', 'Ele joga futebol todo sábado. Não on every Saturday.'],
      ["Are you free **next** Monday at two o'clock?", 'Você está livre na próxima segunda às duas? Não on next Monday; a hora continua com at.'],
      ['**Last** summer we rented a house by the sea.', 'No verão passado alugamos uma casa na praia. Não in last summer.'],
      ["I'm meeting her **this** evening.", 'Vou encontrá-la hoje à noite. Não in this evening.'],
      ["We'll talk about it **tomorrow** morning.", 'A gente conversa amanhã de manhã: tomorrow, yesterday e today funcionam igual.'],
    ] },
    { note: { title: 'Uma checagem rápida', text: "Antes de uma expressão de tempo, veja se já tem na frente uma palavra como this, next, last, every, tomorrow ou yesterday. Se tiver, **tire a preposição**: in the morning, mas tomorrow morning; on Friday, mas next Friday.", draw: 'cat' } },
    { figure: { photo: 'in-on-at-old-town-night', alt: 'Uma praça de cidade antiga à noite, com mesas de café, casas iluminadas e a lua', caption: 'At night quer dizer à noite em geral: the square is quiet at night. In the night é uma noite específica: I woke up in the night.' } },
    { quote: 'At para um ponto, on para um dia, in para um período mais longo.' },

    { cta: true },

    { h: 'Lugar: at um ponto, on uma superfície, in um espaço' },
    { p: "O mesmo triângulo ajuda com os lugares. **In** coloca algo dentro de um espaço maior: in the box, in the kitchen, in the park, in Sweden. **On** coloca algo sobre uma superfície ou ao longo de uma linha: on the table, on the wall, on the floor, on Oxford Street, on the coast, on the river. **At** marca um ponto, muitas vezes um lugar onde algo acontece: at the door, at the bus stop, at the entrance, at 15 Craig Street." },
    { p: "Para nós, quase tudo isso é no ou na: na caixa, na mesa, na porta. Por isso vale reparar que às vezes cabem duas preposições, e a escolha muda um pouco o sentido. **She's at the station** diz onde ela está, como ponto de encontro. She's in the station diz que ela está dentro do prédio, talvez fugindo da chuva. O British Council observa que a diferença entre as três depende muitas vezes mais do uso do que de regras rígidas, e é por isso que as expressões fixas importam tanto." },
    { table: {
      head: ['Preposição', 'Uso', 'Exemplos'],
      rows: [
        ['in', 'dentro de um espaço, um prédio visto por dentro, uma cidade ou um país', 'in the room, in the office, in the park, in Paris, in the mountains, in the sea'],
        ['on', 'uma superfície, um andar, uma rua, um litoral ou um rio, o transporte público', 'on the desk, on the third floor, on Main Street, on the east coast, on the train'],
        ['at', 'um ponto, um endereço, um lugar de atividade, um evento', 'at the door, at 12 Park Road, at the supermarket, at work, at a party'],
      ],
      note: 'Cidades e países levam in: in Tokyo, in Brazil. O nosso “na mesa” é on the table, e “na porta” é at the door.',
    } },

    { h3: 'On the bus, in the car' },
    { p: "Com os meios de transporte o triângulo para de ajudar. Os veículos grandes onde dá para andar, quase sempre transporte público, levam **on**: on the bus, on the train, on a plane, on the tram, on a ship. Os veículos pequenos onde você vai sentado lá dentro levam **in**: in a car, in a taxi. A regra prática é esta: se você pode se levantar e andar por ele, você está on. O nosso “estou no ônibus” é, portanto, I'm on the bus." },
    { p: "Para dizer como você viaja, e não onde está, o inglês usa **by** sem artigo: by bus, by train, by car, by plane, como o nosso de ônibus, de trem, de carro. I was on the train when she phoned, eu estava no trem quando ela ligou, mas I went to Rome by train, fui a Roma de trem. A pé é a exceção: **on foot**, não by foot." },
    { figure: { photo: 'in-on-at-airport-escalators', alt: 'Viajantes nas escadas rolantes de um aeroporto, um deles esperando com a mala', caption: 'No aeroporto você está at the airport; minutos depois está on the plane, e na chegada in a taxi.' } },

    { h3: 'Andares, prédios e endereços' },
    { p: "Os andares levam **on**: they live on the fifteenth floor, my office is on the third floor. O nosso no terceiro andar puxa para in the third floor, que está errado. Um endereço exato leva at, uma rua leva on, e um prédio pode levar at ou in, conforme você fale do lugar ou do interior: **I'll meet you at the museum**, te encontro no museu, mas it's warm in the museum, está quente dentro do museu." },
    { p: "O verbo arrive tem um padrão próprio, e para quem fala português é uma armadilha clássica. Diz-se **arrive at** para um prédio ou um lugar pequeno, como the hotel, the airport ou the station, e **arrive in** para uma cidade ou um país: we arrived at the hotel just after ten, they arrived in Tokyo on Wednesday. Com home, here e there, arrive não leva preposição: we arrived home late, e não arrived in home, calco de chegar em casa. Arrive to, de chegar a, também está errado." },
    { figure: { photo: 'in-on-at-tokyo-platform', alt: 'Uma pessoa puxando uma mala vermelha por uma plataforma de trem em Tóquio', caption: 'Você chega at uma estação, mas in uma cidade: we arrived at the station at six, we arrived in Tokyo on Wednesday.' } },

    { h3: 'At home, at work, at university' },
    { p: "Um grupo de lugares do dia a dia leva **at** sem artigo quando você pensa na atividade mais do que no prédio: at home, at work, at school, at university, at college. Em português é em casa, no trabalho, na escola, e daí saem in home e in the work, dois erros muito típicos. O mesmo vale para eventos e lugares onde você recebe um serviço: at a party, at the cinema, at the doctor's, at the hairdresser's, no cabeleireiro." },
    { p: "Aqui o inglês britânico e o americano se separam de novo. O inglês britânico diz que um paciente está **in hospital** e um estudante at university, sem artigo. O inglês americano diz **in the hospital**, como o nosso no hospital, e os estudantes estão in college. O Oxford Learner's Dictionaries explica que no inglês americano university não se usa desse jeito, então um americano diz my son is in college onde um britânico diria he's at university." },
    { panels: [
      ['Inglês britânico', "She spent two weeks in hospital. Both their children are at university. I'll see you at the weekend."],
      ['Inglês americano', "She spent two weeks in the hospital. Both their children are in college. I'll see you on the weekend."],
    ] },

    { h: 'In time ou on time?' },
    { p: "Parecem quase iguais e querem dizer coisas diferentes. **On time** é o nosso na hora, no horário: no momento previsto, nem antes nem depois, com horários e programações. The trains are usually on time, the meeting never starts on time. Right on time, ou no inglês britânico dead on time, reforça a ideia." },
    { p: "**In time** é o nosso a tempo: cedo o bastante, com tempo para fazer algo. Costuma vir com for e um substantivo ou com to e um verbo: we'll arrive in time for lunch, vamos chegar a tempo para o almoço; I got home in time to see the match. Just in time quer dizer bem a tempo, quase em cima da hora. O Cambridge Dictionary dá um par bem claro: the stadium must be completed on time, no prazo previsto, ou in time for the Olympics, antes de os Jogos começarem." },
    { examples: [
      ['The flight landed right **on time**.', 'O voo pousou exatamente no horário.'],
      ['We got there **in time** for dinner.', 'Chegamos a tempo para o jantar.'],
      ["You're **just in time**. We're about to start.", 'Você chegou bem a tempo, vamos começar.'],
    ] },

    { h: 'At the end ou in the end?' },
    { p: "Aqui o português junta duas expressões inglesas em no final. **At the end** é o ponto em que algo termina, e costuma vir com of: at the end of the film, at the end of the month, at the end of the street. **In the end** quer dizer no fim das contas, finalmente, depois de um processo longo, muitas mudanças ou muita discussão: we looked at three apartments, and in the end we took the first one." },
    { p: "O erro a evitar é in the end of, calco de no final do. O Cambridge Dictionary aponta esse erro explicitamente: **at the end of the film, everyone was crying**, nunca in the end of the film. Um par parecido é at the beginning, o ponto de partida, e in the beginning, que costuma contrastar uma primeira fase com o que veio depois: in the beginning nobody understood, no começo ninguém entendia, mas depois tudo ficou mais claro." },
    { examples: [
      ['Pay **at the end of** the month.', 'Pague no final do mês: o ponto em que o mês termina.'],
      ['We argued for hours, but **in the end** we agreed.', 'Discutimos por horas, mas no fim chegamos a um acordo.'],
      ['**At the beginning of** every lesson, we review the homework.', 'No começo de cada aula, revisamos a lição de casa.'],
    ] },

    { h: 'Por que o português te engana' },
    { p: "Os erros com essas palavras não são aleatórios. Vêm da tradução, porque **o português cobre com em o que o inglês divide entre três**: na mesa, em casa, no ônibus, em junho, na segunda. Quando uma preposição faz o trabalho de três, a escolha do inglês parece arbitrária, e a gente acaba traduzindo palavra por palavra." },
    { h3: 'No, na e o resto' },
    { p: "O nosso **em**, junto com o artigo, serve para quase todo lugar e boa parte do tempo, e por isso aparecem in the table, in the bus, in the third floor, in home e in Monday. Já o **a** de chegar a São Paulo ou às cinco se infiltra em arrive to. Se você identificar qual das duas está por trás do erro, a correção fica quase automática." },
    { p: "Falantes de outras línguas românicas tropeçam de forma parecida, por motivos um pouco diferentes. O espanhol **en** funciona quase como o nosso em. O italiano e o francês usam a ou à com cidades, a Roma, à Paris, e daí sai at Rome ou at Paris no lugar de in Rome. Se você trabalha num time internacional vai ouvir esses erros por toda parte, e agora sabe de onde eles vêm." },

    { h: 'Erros comuns' },
    { p: "Estes são os tropeços que os professores mais ouvem de quem fala português, e cada um quebra um padrão deste artigo." },
    { mistakes: [
      ['I was born on 1998.', 'I was born **in** 1998.', 'Anos levam in. On é para uma data: I was born on May 3, 1998.'],
      ['See you in Monday.', 'See you **on** Monday.', 'Dias da semana levam on, mesmo que a gente diga na segunda.'],
      ["We'll meet on next Friday.", "We'll meet **next** Friday.", 'Next, last, this e every não levam preposição.'],
      ['What do you do in the weekend?', 'What do you do **at the weekend**? (UK) / **on the weekend**? (US)', 'In the weekend, de no fim de semana, não se usa em nenhuma variedade.'],
      ['The keys are in the table.', 'The keys are **on** the table.', 'Uma superfície leva on, mesmo que a gente diga na mesa.'],
      ["I'm in the bus.", "I'm **on** the bus.", 'Ônibus, trens e aviões levam on.'],
      ['Our office is in the third floor.', 'Our office is **on** the third floor.', 'Andares levam on.'],
      ["I'm in home.", "I'm **at** home.", 'Em casa é at home, sem artigo.'],
      ['We arrived in home late.', 'We arrived **home** late.', 'Arrive home, sem preposição.'],
      ['In the end of the film, they get married.', '**At the end of** the film, they get married.', 'At the end of é o ponto final; in the end quer dizer finalmente.'],
    ] },

    { h: 'Como deixar a escolha certa automática' },
    { p: "Com preposições, o problema quase nunca é conhecer a regra. Quase todo mundo sabe recitar at para horas e on para dias, e depois, numa conversa rápida, solta in Monday. **O que resolve é ouvir e usar expressões inteiras** até elas soarem normais: on the bus, at the weekend, in the morning, next Friday. Aprenda a preposição junto com o substantivo, nunca sozinha." },
    { p: "Por isso a prática oral regular ajuda mais do que mais uma página de regras. Em aulas ao vivo com um professor e o mesmo grupo pequeno, você fala da sua semana, dos seus planos e de onde as coisas estão, e as mesmas expressões voltam o tempo todo. Depois de cada aula, **flashcards com as palavras das suas aulas** deixam você revisar essas expressões na forma completa, com a preposição incluída." },
    { p: "Quando escrever, confira primeiro as expressões de tempo. Procure cada this, next, last e every e tire a preposição da frente. Depois confira cada dia, data, mês e ano com o triângulo. Algumas semanas com esse hábito eliminam a maioria dos erros da tabela acima, e as expressões fixas começam a sair sozinhas." },
  ],
  quiz: [
    { q: 'The concert starts ___ 8 p.m.', options: ['in', 'on', 'at', 'sem preposição'], a: 2, why: 'Hora leva at: at 8 p.m.' },
    { q: 'My grandmother was born ___ 1952.', options: ['at', 'in', 'on', 'sem preposição'], a: 1, why: 'Anos levam in: in 1952.' },
    { q: 'I have an interview ___ Tuesday morning.', options: ['on', 'in', 'at', 'by'], a: 0, why: 'Uma manhã específica leva on, mesmo que in the morning leve in.' },
    { q: "Let's meet ___ next Saturday.", options: ['on', 'at', 'in', 'sem preposição'], a: 3, why: 'Expressões com next, last, this e every não levam preposição: next Saturday.' },
    { q: 'Qual frase é do inglês britânico?', options: ["I'll see you on the weekend.", "I'll see you at the weekend.", "I'll see you in the weekend.", "I'll see you by the weekend."], a: 1, why: 'At the weekend é britânico, on the weekend é americano. In the weekend não se usa.' },
    { q: 'Sorry, I can’t talk now. I’m ___ the train.', options: ['in', 'at', 'on', 'by'], a: 2, why: 'Trens, ônibus e aviões levam on.' },
    { q: 'O ônibus saiu às 7h15 em ponto, como previsto. Ele saiu ___.', options: ['in time', 'on time', 'at time', 'in the time'], a: 1, why: 'On time quer dizer no horário previsto.' },
    { q: 'We looked at many apartments, and ___ we chose the first one.', options: ['at the end', 'in the end', 'on the end', 'at end'], a: 1, why: 'In the end quer dizer finalmente, depois de um processo longo.' },
  ],
  faq: [
    ['É at the weekend ou on the weekend?', 'As duas estão certas. At the weekend é a forma britânica habitual, on the weekend a americana. In the weekend, tradução de no fim de semana, não se usa em nenhuma das duas.'],
    ['Por que in the morning mas on Monday morning?', 'In vai com as partes do dia em geral. Quando a parte do dia pertence a um dia específico, ou vem com um adjetivo, ela leva on: on Monday morning, on a cold evening.'],
    ['Precisa de preposição antes de next week ou last year?', 'Não. Expressões com next, last, this, every, each, some e all não levam in, on nem at: next week, last year, this morning, every day, mesmo que em português a gente diga na semana que vem.'],
    ['É in the bus ou on the bus?', 'On the bus. Ônibus, trens, aviões e navios levam on; carros e táxis levam in. Para dizer como você viaja, use by: by bus, by car, o nosso de ônibus, de carro.'],
    ['Qual a diferença entre in time e on time?', 'On time quer dizer no horário, no momento previsto. In time quer dizer a tempo, cedo o bastante para fazer algo, muitas vezes com for ou to: in time for dinner, in time to catch the train.'],
  ],
  related: ['present-perfect', 'phrasal-verbs', 'cefr-english'],
  sources: [
    ['Cambridge Dictionary: At, on and in (time)', 'https://dictionary.cambridge.org/grammar/british-grammar/at-on-and-in-time'],
    ['Cambridge Dictionary: At, on and in (place)', 'https://dictionary.cambridge.org/grammar/british-grammar/at-on-and-in-place'],
    ['British Council LearnEnglish: preposições de tempo', 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2-grammar/prepositions-of-time-at-in-on'],
    ['British Council LearnEnglish: preposições de lugar', 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/prepositions-place'],
    ['Oxford Learner’s Dictionaries: weekend', 'https://www.oxfordlearnersdictionaries.com/definition/english/weekend_1'],
    ['Wikipedia: American and British English grammatical differences', 'https://en.wikipedia.org/wiki/American_and_British_English_grammatical_differences'],
  ],
};
