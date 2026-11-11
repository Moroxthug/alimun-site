// Portuguese A2, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'Travel and weather',
  goal: 'Plan a trip, book a hotel and talk about the weather. Learn em, a, para and de with places, vir, hotel and train phrases, the weather and comparing places.',
  art: 'suitcase',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'speaking'], topics: ['places', 'prepositions', 'vir', 'hotel', 'train', 'weather', 'seasons', 'comparing'], goals: ['foundations', 'relocation', 'pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Moro em Lisboa, vou ao Brasil',
      about: 'Say where you live, where you go and where you come from.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'To say where you **are** or **live**, use **em**: *Moro em Lisboa. Vivo em Portugal.* With a country that has an article, **em** joins with it: **no Brasil**, **na Alemanha**, **nos Estados Unidos**. To say where you **go**, use **a**: *Vou a Lisboa. Vou ao Brasil. Vou à Alemanha.* To say where you **come from**, use **de**: *Sou de Londres. Venho do Brasil. Venho da Alemanha.*' },
          { t: 'table', caption: 'Places', explain: ['head'], head: ['', 'city', 'Brasil', 'Alemanha', 'Estados Unidos'], rows: [
            ['live, be (em)', 'em Lisboa', 'no Brasil', 'na Alemanha', 'nos Estados Unidos'],
            ['go (a)', 'a Lisboa', 'ao Brasil', 'à Alemanha', 'aos Estados Unidos'],
            ['from (de)', 'de Lisboa', 'do Brasil', 'da Alemanha', 'dos Estados Unidos'],
          ] },
          { t: 'tip', art: 'owl', md: 'Most cities have no article: *em Lisboa, a Lisboa, de Lisboa*. A few do: **o Porto** (*no Porto, ao Porto, do Porto*). Some countries are used with or without an article. To stay for a long time, many people use **para**: *Vou para Lisboa* (I am moving to Lisbon). In Brazil, *ir para* is also very common for any destination.' },
        ],
        [
          { t: 'table', caption: 'vir (to come)', quiz: true, head: ['', 'vir'], rows: [
            ['eu', 'venho'],
            ['tu', 'vens'],
            ['ele / ela / você', 'vem'],
            ['nós', 'vimos'],
            ['eles / elas / vocês', 'vêm'],
          ] },
          { t: 'examples', items: [
            { s: '**Moro em** Lisboa.', n: '*Em* + city.' },
            { s: '**Vivo no** Brasil.', n: '*Em + o = no*.' },
            { s: '**Vou ao** Porto no fim de semana.', n: '*A + o = ao*.' },
            { s: '**Venho de** Londres.', n: '*Vir de* + city.' },
            { s: 'Eles **vêm do** Brasil.', n: 'With a circumflex: *vêm*.' },
          ] },
          { t: 'dialogue', title: 'De onde vens?', lines: [
            { who: 'Ana', s: 'De onde vens, Pedro?' },
            { who: 'Pedro', s: 'Venho de Londres. Estive lá a trabalhar.' },
            { who: 'Ana', s: 'E agora vais para onde?' },
            { who: 'Pedro', s: 'Vou para o Porto. Vivo lá.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of vir.', verb: 'vir', tense: 'present', rows: [
            ['eu', 'venho'],
            ['tu', 'vens'],
            ['ele / ela / você', 'vem'],
            ['nós', 'vimos'],
            ['eles / elas / vocês', 'vêm'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Moro ___ Lisboa.', a: ['em'], why: '*Em* + city.' },
            { q: 'Vou ___ Brasil. (a + o)', a: ['ao'], why: '*A + o = ao*.' },
            { q: 'Vivo ___ Alemanha. (em + a)', a: ['na'], why: '*Em + a = na*.' },
            { q: 'Venho ___ Brasil. (de + o)', a: ['do'], why: '*De + o = do*.' },
            { q: 'Eles ___ de Londres. (vir)', a: ['vêm'], why: '*Eles vêm*, with a circumflex.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Sou ___ Londres.', o: ['de', 'em', 'a'], why: '*Ser de* + city.' },
            { q: 'Venho ___ Alemanha.', o: ['da', 'na', 'à'], why: '*De + a = da*.' },
            { q: 'Vou ___ Lisboa amanhã.', o: ['a', 'em', 'de'], why: '*Ir a* + city.' },
            { q: 'Vivem ___ Estados Unidos.', o: ['nos', 'dos', 'aos'], why: '*Em + os = nos*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Moro [a] Lisboa.', a: ['em'], why: '*Em* + city.' },
            { s: 'Vou [no] Brasil.', a: ['ao'], why: '*Ir a*: *a + o = ao*.' },
            { s: 'Venho [de a] Alemanha.', a: ['da'], why: '*De + a = da*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Moro em Lisboa e vou ao Porto.', why: '*Em* for living, *a* for going.' },
            { a: 'Eles vêm do Brasil.', why: '*Vêm* + *de + o*.' },
            { a: 'De onde vens, Pedro?', why: '*De onde* + *vens*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Uma reserva',
      about: 'Book a hotel room and a train ticket.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To book a hotel room, say **Queria reservar um quarto duplo para duas noites.** To ask for details, say **Tem um quarto individual?** (a single room), **Quanto custa por noite?** (How much a night?), **O pequeno-almoço está incluído?** (Is breakfast included?). To say what time, say **A saída é até às onze.** For a train, say **Queria dois bilhetes para o Porto, para amanhã.** and ask **A que horas parte? A que horas chega? É direto?**' },
          { t: 'table', caption: 'Hotel and train', explain: ['head', 'col1'], head: ['Portuguese', 'English'], rows: [
            ['um quarto individual / duplo', 'a single / double room'],
            ['por noite', 'per night'],
            ['O pequeno-almoço está incluído?', 'Is breakfast included?'],
            ['A saída é até às onze.', 'Check-out is by eleven.'],
            ['Tenho uma reserva em nome de …', 'I have a booking in the name of …'],
            ['É direto?', 'Is it direct?'],
            ['A que horas parte / chega?', 'When does it leave / arrive?'],
            ['Tenho de mudar?', 'Do I have to change?'],
          ] },
          { t: 'tip', art: 'owl', md: 'For near plans, the **present** is enough: *Amanhã parto às oito. Chego ao Porto às dez.* You can also say **vou partir**. On the train, **a linha** is the line and **o cais** is the platform in Portugal; in Brazil, people say *a plataforma*.' },
        ],
        [
          { t: 'dialogue', title: 'Na receção', lines: [
            { who: 'Rececionista', s: 'Boa tarde. Posso ajudar?' },
            { who: 'Marta', s: 'Boa tarde. Tenho uma reserva em nome de Marta Lopes.' },
            { who: 'Rececionista', s: 'Um momento. Sim, um quarto duplo para três noites.' },
            { who: 'Marta', s: 'O pequeno-almoço está incluído?' },
            { who: 'Rececionista', s: 'Está, sim. É das sete às dez.' },
            { who: 'Marta', s: 'Obrigada.' },
          ] },
          { t: 'ex', kind: 'match', h: 'What do you say?', pairs: [
            ['You want a single room.', 'Queria um quarto individual.'],
            ['You ask about breakfast.', 'O pequeno-almoço está incluído?'],
            ['You ask if the train is direct.', 'É direto?'],
            ['You ask the leaving time.', 'A que horas parte?'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Queria ___ um quarto duplo. (to book)', a: ['reservar'], why: '*Reservar um quarto*.' },
            { q: 'Quanto custa ___ noite?', a: ['por'], why: '*Por noite* = per night.' },
            { q: 'O pequeno-almoço está ___?', a: ['incluído'], why: '*Está incluído* = is included.' },
            { q: 'Tenho uma reserva em ___ de Marta Lopes.', a: ['nome'], why: '*Em nome de* = in the name of.' },
            { q: 'A que horas ___ o comboio? (partir)', a: ['parte'], why: '*O comboio parte*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Say it with the present for a near plan.', items: [
            { q: 'Vou partir às oito.', a: ['Parto às oito.'], why: '*Vou partir* → *parto*.' },
            { q: 'Vou chegar ao Porto às dez.', a: ['Chego ao Porto às dez.'], why: '*Vou chegar* → *chego*.' },
            { q: 'Vamos reservar um quarto.', a: ['Reservamos um quarto.'], why: '*Vamos reservar* → *reservamos*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right sentence.', items: [
            { q: 'Quer um quarto para uma pessoa:', o: ['Queria um quarto individual.', 'Quero casa.', 'Dá-me cama.'], why: '*Individual* = single.' },
            { q: 'Quer saber o preço de um quarto:', o: ['Quanto custa por noite?', 'Quanto é a hora?', 'Quanto custa o dia?'], why: '*Por noite* = per night.' },
            { q: 'Quer saber se há mudança de comboio:', o: ['Tenho de mudar?', 'Tenho de voltar?', 'Tenho de ir?'], why: '*Mudar* = to change.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Queria reservar um quarto duplo para duas noites.', why: '*Queria reservar* + room + nights.' },
            { a: 'O pequeno-almoço está incluído?', why: '*Está incluído*.' },
            { a: 'A que horas parte o próximo comboio?', why: '*A que horas* + verb.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Que tempo faz?',
      about: 'Talk about the weather and compare places.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'In Portugal, people talk about the weather with **estar** and **fazer**: *Está sol. Está calor. Faz frio. Faz vento.* With rain, say **Chove** or **Está a chover**. With fog, say **Há nevoeiro.** To say the temperature, say **Estão vinte graus.** To ask, say **Que tempo faz?** or **Como está o tempo?** To compare, use what you learned: *Em Lisboa faz mais calor do que no Porto. No inverno chove menos no sul.*' },
          { t: 'table', caption: 'Weather', explain: ['head', 'col1'], head: ['Portuguese', 'English'], rows: [
            ['Está sol.', 'It is sunny.'],
            ['Está calor.', 'It is hot.'],
            ['Faz frio.', 'It is cold.'],
            ['Faz vento.', 'It is windy.'],
            ['Chove. / Está a chover.', 'It rains. / It is raining.'],
            ['Há nevoeiro.', 'It is foggy.'],
            ['Estão vinte graus.', 'It is twenty degrees.'],
            ['a primavera / o verão', 'spring / summer'],
            ['o outono / o inverno', 'autumn / winter'],
          ] },
          { t: 'tip', art: 'owl', md: 'You can say **Está frio** or **Faz frio**; both are common. Use **fazer** for things you feel: *faz calor, faz frio, faz vento.* In Brazil, people also say *Está chovendo* instead of *Está a chover*.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Hoje **faz** frio e **está** nublado.', n: 'Two weather phrases.' },
            { s: 'Em Lisboa **faz mais calor do que** no Porto.', n: 'A comparison.' },
            { s: 'No verão **está muito calor** no Alentejo.', n: '*Estar calor*.' },
            { s: 'Amanhã **vai chover**.', n: 'A forecast with *ir* + infinitive.' },
            { s: '**Estão** vinte graus.', n: 'The temperature.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the weather with its meaning.', pairs: [
            ['Está sol.', 'It is sunny.'],
            ['Faz frio.', 'It is cold.'],
            ['Chove.', 'It rains.'],
            ['Há nevoeiro.', 'It is foggy.'],
            ['Faz vento.', 'It is windy.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Hoje ___ frio. (fazer)', a: ['faz'], why: '*Faz frio*.' },
            { q: 'Está ___ hoje. (sol)', a: ['sol'], why: '*Está sol*.' },
            { q: 'Em Lisboa faz mais calor ___ que no Porto.', a: ['do'], why: '*Mais … do que*.' },
            { q: 'Amanhã ___ chover. (ir)', a: ['vai'], why: '*Vai chover* = it is going to rain.' },
            { q: '___ vinte graus. (estar)', a: ['Estão'], why: '*Estão vinte graus*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Que tempo ___?', o: ['faz', 'tem', 'é'], why: '*Que tempo faz?*' },
            { q: 'Hoje ___ muito vento.', o: ['faz', 'está', 'há o'], why: '*Faz vento*.' },
            { q: 'No inverno ___ menos no sul do que no norte.', o: ['chove', 'chovem', 'chuva'], why: '*Chove menos*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Compare the two places.', items: [
            { q: 'Em Lisboa estão 28 graus. No Porto estão 22 graus.', cue: 'Em Lisboa', a: ['Em Lisboa faz mais calor do que no Porto.'], why: '*Mais calor do que*.' },
            { q: 'No Porto chove muito. Em Lisboa chove pouco.', cue: 'Em Lisboa', a: ['Em Lisboa chove menos do que no Porto.'], why: '*Menos do que*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Hoje faz frio e está nublado.', why: 'Two weather phrases.' },
            { a: 'Em Lisboa faz mais calor do que no Porto.', why: '*Mais … do que*.' },
            { a: 'Amanhã vai chover no norte.', why: '*Ir* + infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Uma confirmação e um postal',
      about: 'Read a hotel confirmation and a postcard.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'reading', title: 'Confirmação de reserva', md: 'Confirmamos a sua reserva: um quarto duplo, três noites, de sexta a segunda-feira. O pequeno-almoço está incluído. A entrada é a partir das catorze horas e a saída é até às onze. Preço total: duzentos e dez euros.' },
          { t: 'reading', title: 'Um postal', md: 'Querida Ana,\n\nEstamos no Algarve e está muito calor. A praia é linda e a comida é ótima. Amanhã vamos visitar uma cidade antiga. Voltamos no domingo.\n\nBeijinhos,\nPedro e Clara' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'A reserva é para três noites.', a: 't', why: '*Três noites.*' },
            { q: 'O pequeno-almoço não está incluído.', a: 'f', why: 'It is included: *está incluído*.' },
            { q: 'O Pedro e a Clara estão no Algarve.', a: 't', why: '*Estamos no Algarve.*' },
            { q: 'Eles vão ao Porto amanhã.', a: 'ng', why: 'The postcard says they will visit an old city, not which.' },
            { q: 'Voltam no domingo.', a: 't', why: '*Voltamos no domingo.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Quanto custa a reserva?', o: ['Duzentos e dez euros.', 'Cento e dez euros.', 'Trezentos euros.'], why: '*Preço total: duzentos e dez euros.*' },
            { q: 'Até que horas é a saída?', o: ['Até às onze.', 'Até às catorze.', 'Até às dez.'], why: '*A saída é até às onze.*' },
            { q: 'Que tempo faz no Algarve?', o: ['Está muito calor.', 'Faz frio.', 'Chove muito.'], why: '*Está muito calor.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs about the weather.', items: [
            { s: 'Estamos no Algarve e [está] muito calor.', why: '*Está calor* talks about the weather.' },
            { s: 'Hoje [faz] sol e [está] calor.', why: '*Faz* and *está* are used for the weather.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Estamos ___ Algarve. (em + o)', a: ['no'], why: '*Em + o = no*.' },
            { q: 'Amanhã ___ visitar uma cidade antiga. (nós, ir)', a: ['vamos'], why: '*Nós vamos*.' },
            { q: 'O pequeno-almoço está ___. (included)', a: ['incluído'], why: '*Está incluído*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Estamos no Algarve e está muito calor.', why: '*Estamos* + place.' },
            { a: 'Voltamos no domingo.', why: '*Voltar* + day.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Sou ___ Londres.', o: ['de', 'em', 'a'], why: '*Ser de* + city.' },
      { q: 'Vou ___ Brasil.', o: ['ao', 'no', 'do'], why: '*A + o = ao*.' },
      { q: 'Que tempo ___?', o: ['faz', 'tem', 'é'], why: '*Que tempo faz?*' },
      { q: 'Quer um quarto para uma pessoa:', o: ['Queria um quarto individual.', 'Quero casa.', 'Dá-me cama.'], why: '*Individual* = single.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Eles ___ de Londres. (vir)', a: ['vêm'], why: '*Eles vêm*.' },
      { q: 'Em Lisboa faz mais calor ___ que no Porto.', a: ['do'], why: '*Mais … do que*.' },
      { q: 'Queria ___ um quarto duplo. (to book)', a: ['reservar'], why: '*Reservar um quarto*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the weather with its meaning.', pairs: [
      ['Está sol.', 'It is sunny.'],
      ['Faz frio.', 'It is cold.'],
      ['Há nevoeiro.', 'It is foggy.'],
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Moro [a] Lisboa.', a: ['em'], why: '*Em* + city.' },
      { s: 'Venho [de a] Alemanha.', a: ['da'], why: '*De + a = da*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Queria reservar um quarto duplo para duas noites.', why: '*Queria reservar* + room + nights.' },
      { a: 'Hoje faz frio e está nublado.', why: 'Two weather phrases.' },
    ] },
  ],
};
