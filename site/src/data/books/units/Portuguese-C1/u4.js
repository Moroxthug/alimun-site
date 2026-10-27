// Portuguese C1, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Register, regions and idioms',
  goal: 'Recognise and choose the register and variety of Portuguese you need. Learn the forms of address (tu, você, o senhor), the main differences between Portugal, Brazil and Africa, and common idioms and proverbs.',
  art: 'nata',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'speaking'], topics: ['register', 'forms of address', 'regional Portuguese', 'idioms', 'proverbs'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Tu, você, o senhor',
      about: 'Choose the right form of address for the situation.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'In Portugal, the form of address shows **distance and respect**. **Tu** is for family, friends, children and, among young people, nearly everyone: **Queres um café?** **O senhor / a senhora** (with the verb in the third person) is for older people, strangers in a formal setting and customers: **O senhor quer um café?** With a **name or title**, use the third person too: **A Maria quer um café?** **A Dra. Sofia pode ajudar?** **Você** is tricky: in Portugal it can sound **distant or even rude**, so many people avoid it. To be polite, use the **imperfeito** or the **condicional**: **Queria pedir-lhe um favor.** **Podia ajudar-me?** **Importava-se de fechar a porta?**' },
          { t: 'table', caption: 'Forms of address in Portugal', explain: ['head', 'col1'], head: ['Form', 'Used with', 'Example'], rows: [
            ['tu', 'family, friends, young people', 'Queres um café?'],
            ['o senhor / a senhora', 'older or formal', 'O senhor quer um café?'],
            ['name or title + 3rd person', 'colleagues, customers', 'A Dra. Sofia pode ajudar?'],
            ['você', 'avoid in Portugal; common in Brazil', 'Você quer um café?'],
            ['polite imperfeito or condicional', 'any polite request', 'Queria pedir-lhe um favor.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In **Brazil**, **você** is the normal form for *you* and is neutral; **o senhor / a senhora** is for respect. In Portugal, **você** is often replaced by the **name**, the **title** or by leaving the subject out: **Quer sentar-se?** Titles such as **Doutor / Doutora** are used for anyone with a degree, and for many professionals, in Portugal. In **writing**, **Exmo. Senhor** and **Ex.mo** are formal. Change to **tu** only when the other person suggests it: **Podemos tratar-nos por tu?**' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Queres** um café?', n: 'Friends and family.' },
            { s: '**O senhor quer** um café?', n: 'Formal: an older person or a customer.' },
            { s: '**A Dra. Sofia pode** ajudar?', n: 'Title and the third person.' },
            { s: '**Queria pedir-lhe** um favor.', n: 'A polite request.' },
            { s: '**Podemos tratar-nos por tu?**', n: 'Suggesting a change.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Informal or formal? Sort the sentences.', groups: ['informal', 'formal'], explain: ['groups'], items: [
            { s: 'Queres um café?', g: 0, why: '*Tu* form.' },
            { s: 'Ajudas-me com isto?', g: 0, why: '*Tu* form.' },
            { s: 'Vens connosco?', g: 0, why: '*Tu* form.' },
            { s: 'O senhor quer um café?', g: 1, why: 'The third person.' },
            { s: 'A Dra. Sofia pode ajudar?', g: 1, why: 'Title and the third person.' },
            { s: 'Importava-se de fechar a porta?', g: 1, why: 'A polite imperfeito.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'O ___ quer um café? (formal, a man)', a: ['senhor'], why: 'The formal form for a man.' },
            { q: '___ pedir-lhe um favor. (querer, imperfeito, polite)', a: ['Queria'], why: 'The polite imperfeito.' },
            { q: 'A Dra. Sofia ___ ajudar? (poder)', a: ['pode'], why: 'The third person.' },
            { q: '___ tratar-nos por tu? (poder, nós)', a: ['Podemos'], why: 'Suggesting a change.' },
            { q: 'Importava-___ de fechar a porta? (you, formal)', a: ['se'], why: '*Importar-se* in the third person.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best form.', items: [
            { q: 'A uma cliente idosa: ___ ajudá-la?', o: ['Posso', 'Podes', 'Podeis'], why: '*Posso* is correct; the customer is addressed in the third person.' },
            { q: 'A um amigo: ___ um café?', o: ['Queres', 'Quer', 'Querem'], why: '*Tu* form.' },
            { q: 'A um professor: ___ pedir-lhe um favor.', o: ['Queria', 'Quero', 'Queres'], why: 'A polite imperfeito.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Make the sentence more polite.', items: [
            { q: 'Quero pedir-lhe um favor.', cue: 'Queria', a: ['Queria pedir-lhe um favor.'], why: 'The imperfeito softens the request.' },
            { q: 'Fecha a porta, por favor. (to an older stranger)', cue: 'Importava-se', a: ['Importava-se de fechar a porta?', 'Importava-se de fechar a porta, por favor?'], why: 'A polite question.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right form.', items: [
            { s: 'Ao diretor: [Queres] um café?', a: ['Quer'], why: 'A formal setting: the third person.' },
            { s: 'À senhora idosa: [Ajudo-te]?', a: ['Ajudo-a'], why: 'The formal pronoun for a woman is *a*.' },
            { s: 'A um amigo: [O senhor] quer vir?', a: ['Queres'], why: 'With a friend, use *tu*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Queria pedir-lhe um favor.', why: 'A polite request.' },
            { a: 'O senhor quer um café?', why: 'The formal question.' },
            { a: 'Podemos tratar-nos por tu?', why: 'Suggesting a change.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Portugal, Brasil e África',
      about: 'Recognise vocabulary and grammar differences between the varieties.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'Portuguese is spoken in Portugal, Brazil, Angola, Mozambique, Cape Verde, Guinea-Bissau, São Tomé and Príncipe, and Timor-Leste. The **vocabulary** differs: **autocarro** (Portugal), **ônibus** (Brazil), **machimbombo** (Mozambique) for *bus*; **comboio** and **trem** for *train*; **pequeno-almoço** and **café da manhã** for *breakfast*; **telemóvel** and **celular** for *mobile phone*; **casa de banho** and **banheiro** for *toilet*; **frigorífico** and **geladeira** for *fridge*. The **grammar** differs too: Portugal says **Estou a falar**, Brazil **Estou falando**; Portugal **Dá-me isso**, Brazil **Me dá isso**. **Spelling** still has pairs: **facto / fato**, **receção / recepção**, **António / Antônio**.' },
          { t: 'table', caption: 'Portugal and Brazil', explain: ['head', 'col1'], head: ['Portugal', 'Brazil', 'Meaning'], rows: [
            ['autocarro', 'ônibus', 'bus'],
            ['comboio', 'trem', 'train'],
            ['pequeno-almoço', 'café da manhã', 'breakfast'],
            ['telemóvel', 'celular', 'mobile phone'],
            ['casa de banho', 'banheiro', 'toilet'],
            ['frigorífico', 'geladeira', 'fridge'],
            ['Estou a falar.', 'Estou falando.', 'I am speaking.'],
            ['Dá-me isso.', 'Me dá isso.', 'Give me that.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In **Angola** and other African countries, you will hear words from local languages: **machimbombo** (bus, Mozambique), **bué** (a lot, from Angola; now common among young people in Portugal too) and **miúdo** (a child). **Rapariga** means *girl* in Portugal; in some places in Brazil it has a **different, offensive sense**, so Brazilians say **moça** or **menina**. African varieties often keep **European** grammar with **local** words. When in doubt, **ask** what people say where you are.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Apanho o **autocarro** às oito. / Pego o **ônibus** às oito.', n: 'Portugal and Brazil.' },
            { s: 'Esqueci o **telemóvel** em casa. / Esqueci o **celular** em casa.', n: 'Portugal and Brazil.' },
            { s: 'Estou **a falar** com a Ana. / Estou **falando** com a Ana.', n: 'Portugal and Brazil.' },
            { s: '**Dá-me** isso, por favor. / **Me dá** isso, por favor.', n: 'Pronoun position.' },
            { s: 'Havia **bué** de gente na festa.', n: 'Informal: a lot of people.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Portugal or Brazil? Sort the words.', groups: ['Portugal', 'Brazil'], explain: ['groups'], items: [
            { s: 'autocarro', g: 0, why: 'Bus in Portugal.' },
            { s: 'comboio', g: 0, why: 'Train in Portugal.' },
            { s: 'telemóvel', g: 0, why: 'Mobile in Portugal.' },
            { s: 'ônibus', g: 1, why: 'Bus in Brazil.' },
            { s: 'trem', g: 1, why: 'Train in Brazil.' },
            { s: 'geladeira', g: 1, why: 'Fridge in Brazil.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Apanho o ___ às oito. (bus, Portugal)', a: ['autocarro'], why: 'Bus in Portugal.' },
            { q: 'Pego o ___ às oito. (bus, Brazil)', a: ['ônibus'], why: 'Bus in Brazil.' },
            { q: 'Esqueci o ___ em casa. (mobile phone, Portugal)', a: ['telemóvel'], why: 'Mobile in Portugal.' },
            { q: 'Estou ___ falar com a Ana. (Portugal)', a: ['a'], why: '*Estar a* + infinitive.' },
            { q: 'Estou ___ com a Ana. (falar, Brazil)', a: ['falando'], why: 'The gerund.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the Portuguese word with the Brazilian one.', pairs: [
            ['comboio', 'trem'],
            ['pequeno-almoço', 'café da manhã'],
            ['casa de banho', 'banheiro'],
            ['frigorífico', 'geladeira'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it in Brazilian Portuguese.', items: [
            { q: 'Estou a falar com a Ana.', cue: 'Estou', a: ['Estou falando com a Ana.'], why: 'The gerund in Brazil.' },
            { q: 'Apanho o comboio às oito.', cue: 'Pego', a: ['Pego o trem às oito.'], why: 'The Brazilian words.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Em Lisboa, apanho o [ônibus] às oito.', a: ['autocarro'], why: 'In Portugal: *autocarro*.' },
            { s: 'No Rio, tomo o [pequeno-almoço] às sete.', a: ['café da manhã'], why: 'In Brazil: *café da manhã*.' },
            { s: 'Em Lisboa, estou [falando] com a Ana.', a: ['a falar'], why: 'In Portugal: *estar a* + infinitive.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Apanho o autocarro às oito.', why: 'Portugal.' },
            { a: 'Estou a falar com a Ana.', why: 'Portugal: *estar a* + infinitive.' },
            { a: 'Esqueci o telemóvel em casa.', why: 'Portugal.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Expressões e provérbios',
      about: 'Understand and use common idioms and proverbs.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Idioms say something in an image. **Custar os olhos da cara** means *to cost a fortune*: **Este carro custou-me os olhos da cara.** **Matar dois coelhos de uma cajadada** means *to kill two birds with one stone*. **Ficar a ver navios** means *to be left with nothing*, *to be stood up*. **Chover a cântaros** means *to rain heavily*. **Pagar o pato** means *to take the blame for others*. **Engolir sapos** means *to put up with unpleasant things*. **Proverbs** give advice: **Quem espera, desespera.** **Casa de ferreiro, espeto de pau** (*the cobbler’s children go barefoot*). **Água mole em pedra dura, tanto bate até que fura** (*perseverance wins*).' },
          { t: 'table', caption: 'Idioms and proverbs', explain: ['head', 'col1'], head: ['Expression', 'Meaning'], rows: [
            ['custar os olhos da cara', 'to cost a fortune'],
            ['matar dois coelhos de uma cajadada', 'to achieve two things at once'],
            ['ficar a ver navios', 'to be left with nothing'],
            ['chover a cântaros', 'to rain heavily'],
            ['pagar o pato', 'to take the blame for others'],
            ['engolir sapos', 'to put up with unpleasant things'],
            ['Quem espera, desespera.', 'waiting is hard'],
            ['Água mole em pedra dura, tanto bate até que fura.', 'perseverance wins'],
          ] },
          { t: 'tip', art: 'owl', md: 'Do not translate an idiom **word by word**: *to kill two rabbits with one blow* means nothing in English; say **to kill two birds with one stone**. Most of these idioms are understood in **Portugal, Brazil and Africa**, although each country also has its own. Use idioms **in speech and informal writing**, not in a formal report. Learn **each idiom in a sentence**, with the verb that goes with it.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Este carro **custou-me os olhos da cara**.', n: 'It cost me a fortune.' },
            { s: 'Vou ao banco e às compras: **mato dois coelhos de uma cajadada**.', n: 'Two things at once.' },
            { s: 'Esperei o dia todo e **fiquei a ver navios**.', n: 'Left with nothing.' },
            { s: 'Ontem **choveu a cântaros**.', n: 'It rained heavily.' },
            { s: '**Quem espera, desespera.**', n: 'A proverb about waiting.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the idiom with its meaning.', pairs: [
            ['custar os olhos da cara', 'to cost a fortune'],
            ['ficar a ver navios', 'to be left with nothing'],
            ['chover a cântaros', 'to rain heavily'],
            ['pagar o pato', 'to take the blame for others'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Este carro custou-me os ___ da cara.', a: ['olhos'], why: '*Custar os olhos da cara*.' },
            { q: 'Esperei o dia todo e fiquei a ver ___.', a: ['navios'], why: '*Ficar a ver navios*.' },
            { q: 'Ontem choveu a ___.', a: ['cântaros'], why: '*Chover a cântaros*.' },
            { q: 'Foi ele que errou, mas fui eu que paguei o ___.', a: ['pato'], why: '*Pagar o pato*.' },
            { q: 'Quem espera, ___.', a: ['desespera'], why: 'The proverb.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best expression.', items: [
            { q: 'Fui ao banco e às compras na mesma viagem: ___.', o: ['matei dois coelhos de uma cajadada', 'paguei o pato', 'fiquei a ver navios'], why: 'Two things at once.' },
            { q: 'Esperei por ele duas horas e não veio: ___.', o: ['fiquei a ver navios', 'custou-me os olhos da cara', 'choveu a cântaros'], why: 'Left with nothing.' },
            { q: 'O telemóvel novo é lindo, mas ___.', o: ['custou-me os olhos da cara', 'chove a cântaros', 'quem espera desespera'], why: 'A fortune.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with an idiom.', items: [
            { q: 'Este carro foi muito caro.', cue: 'Este carro custou-me', a: ['Este carro custou-me os olhos da cara.'], why: 'The idiom for *very expensive*.' },
            { q: 'Choveu muito ontem.', cue: 'Ontem', a: ['Ontem choveu a cântaros.'], why: 'The idiom for *heavy rain*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Esperei o dia todo e fiquei a ver [barcos].', a: ['navios'], why: 'The idiom says *navios*.' },
            { s: 'Este carro custou-me os [braços] da cara.', a: ['olhos'], why: 'The idiom says *os olhos da cara*.' },
            { s: 'Ontem choveu a [baldes].', a: ['cântaros'], why: 'The idiom says *a cântaros*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Este carro custou-me os olhos da cara.', why: 'An idiom.' },
            { a: 'Esperei o dia todo e fiquei a ver navios.', why: 'An idiom.' },
            { a: 'Quem espera, desespera.', why: 'A proverb.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Três amigos, três países',
      about: 'Read a conversation between friends from three countries.',
      art: 'nata',
      spreads: [
        [
          { t: 'reading', title: 'Três amigos, três países', md: 'Inês, de Lisboa, Rafael, de São Paulo, e Domingos, de Luanda, tomam café numa esplanada.\n\nINÊS: Importavas-te de me passar o açúcar? Ontem choveu a cântaros e fiquei a ver navios à espera do autocarro.\n\nRAFAEL: Aqui a gente diz ônibus! E eu nem peguei ônibus: o meu celular morreu e paguei o pato, porque cheguei atrasado ao trabalho.\n\nDOMINGOS: Em Luanda, havia bué de gente no machimbombo, quer dizer, no autocarro. Mas a viagem custou-me os olhos da cara.\n\nINÊS: O senhor Domingos está a exagerar!\n\nDOMINGOS: Podemos tratar-nos por tu, Inês, já nos conhecemos há anos.\n\nRAFAEL: Quem espera, desespera. Vamos pedir outro café?' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Os três amigos tomam café numa esplanada.', a: 't', why: '*Tomam café numa esplanada.*' },
            { q: 'Rafael diz ônibus em vez de autocarro.', a: 't', why: '*Aqui a gente diz ônibus!*' },
            { q: 'Rafael chegou a horas ao trabalho.', a: 'f', why: '*Cheguei atrasado.*' },
            { q: 'Domingos propõe tratar a Inês por tu.', a: 't', why: '*Podemos tratar-nos por tu.*' },
            { q: 'Inês trabalha num banco.', a: 'ng', why: 'The text does not say.' },
            { q: 'A viagem de Domingos foi barata.', a: 'f', why: '*Custou-me os olhos da cara.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Que palavra usa Rafael para telemóvel?', o: ['celular', 'machimbombo', 'autocarro'], why: '*O meu celular morreu.*' },
            { q: 'O que quer dizer machimbombo?', o: ['autocarro', 'comboio', 'carro'], why: '*No machimbombo, quer dizer, no autocarro.*' },
            { q: 'Porque é que Inês trata Domingos por senhor, a brincar?', o: ['Para fingir distância formal.', 'Porque é mais velho.', 'Porque é chefe.'], why: 'It is a joke about formality; he suggests *tu*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the idioms.', items: [
            { s: 'Ontem [choveu a cântaros] e [fiquei a ver navios] à espera do autocarro.', why: 'Two idioms.' },
            { s: 'O meu celular morreu e [paguei o pato] porque cheguei atrasado.', why: 'An idiom.' },
            { s: 'A viagem [custou-me os olhos da cara]. [Quem espera, desespera.]', why: 'An idiom and a proverb.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Importavas-te de me passar o ___? (sugar)', a: ['açúcar'], why: 'The polite request.' },
            { q: 'Aqui a gente diz ___! (bus, Brazil)', a: ['ônibus'], why: 'Bus in Brazil.' },
            { q: 'Podemos tratar-nos por ___? (informal)', a: ['tu'], why: 'The informal form.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Vamos pedir outro café agora?', why: 'A suggestion.' },
            { a: 'Podemos tratar-nos por tu, Inês.', why: 'A change of register.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'A uma pessoa idosa, num serviço: ___ ajudar?', o: ['Posso', 'Podes', 'Podeis'], why: '*Posso* is correct; the customer is addressed in the third person.' },
      { q: 'Em Portugal: Apanho o ___ às oito.', o: ['autocarro', 'ônibus', 'trem'], why: 'Bus in Portugal.' },
      { q: 'O que quer dizer *custar os olhos da cara*?', o: ['custar uma fortuna', 'ver mal', 'chorar muito'], why: 'It means to cost a fortune.' },
      { q: 'Que forma é mais polida?', o: ['Queria pedir-lhe um favor.', 'Quero um favor.', 'Dá-me um favor.'], why: 'The polite imperfeito.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Esperei o dia todo e fiquei a ver ___.', a: ['navios'], why: 'The idiom.' },
      { q: 'Estou ___ falar com a Ana. (Portugal)', a: ['a'], why: '*Estar a* + infinitive.' },
      { q: 'Ontem choveu a ___.', a: ['cântaros'], why: 'The idiom.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the Portuguese word with the Brazilian one.', pairs: [
      ['comboio', 'trem'],
      ['casa de banho', 'banheiro'],
      ['frigorífico', 'geladeira'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Make the sentence more polite.', items: [
      { q: 'Quero pedir-lhe um favor.', cue: 'Queria', a: ['Queria pedir-lhe um favor.'], why: 'The imperfeito softens the request.' },
      { q: 'Este carro foi muito caro.', cue: 'Este carro custou-me', a: ['Este carro custou-me os olhos da cara.'], why: 'The idiom.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Em Lisboa, apanho o [ônibus] às oito.', a: ['autocarro'], why: 'In Portugal: *autocarro*.' },
      { s: 'Ao diretor: [Queres] um café?', a: ['Quer'], why: 'A formal setting: the third person.' },
    ] },
  ],
};
