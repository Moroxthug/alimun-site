// Portuguese A2, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Health',
  goal: 'Say what hurts, make a doctor’s appointment and understand simple advice. Learn the body, dói-me and tenho dor de, dever and ter de, advice with devias, and phone phrases for an appointment.',
  art: 'owl',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'speaking'], topics: ['body', 'pain', 'doctor', 'pharmacy', 'advice', 'appointment', 'imperative'], goals: ['foundations', 'relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Dói-me a cabeça',
      about: 'Name the body and say what hurts.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'To say that something hurts, use **doer**: **Dói-me a cabeça** (My head hurts) and **Doem-me os pés** (My feet hurt). The verb agrees with the part of the body: **dói** for one thing, **doem** for more than one. The little word **me, te, lhe, nos, lhes** says whose body: *Dói-te a barriga? Dói-lhe a garganta.* You can also say **Tenho dor de** + noun: *Tenho dor de cabeça. Tenho dor de garganta. Tenho dor nas costas.*' },
          { t: 'table', caption: 'The body', explain: ['head', 'col1'], head: ['Portuguese', 'English'], rows: [
            ['a cabeça', 'head'],
            ['o olho / os olhos', 'eye / eyes'],
            ['o nariz', 'nose'],
            ['a boca', 'mouth'],
            ['o dente / os dentes', 'tooth / teeth'],
            ['a garganta', 'throat'],
            ['o braço', 'arm'],
            ['a mão', 'hand'],
            ['a perna', 'leg'],
            ['o pé / os pés', 'foot / feet'],
            ['as costas', 'back'],
            ['a barriga', 'stomach, belly'],
          ] },
          { t: 'tip', art: 'owl', md: 'After **não** or a question word, the little word goes before the verb: *Não me dói nada. Onde te dói?* To say you are ill, say **Estou doente**, **Estou constipado / constipada** (I have a cold) or **Tenho febre, tenho tosse** (I have a fever, a cough).' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Dói-me** a cabeça.', n: 'One thing hurts: *dói*.' },
            { s: '**Doem-me** os pés.', n: 'More than one: *doem*.' },
            { s: '**Tenho dor de** garganta.', n: '*Dor de* + noun.' },
            { s: '**Tenho dor nas** costas.', n: '*Dor nas costas*: *em + as = nas*.' },
            { s: 'Onde **te dói**?', n: 'In a question, the little word before.' },
          ] },
          { t: 'dialogue', title: 'No médico', lines: [
            { who: 'Médica', s: 'Bom dia. O que se passa?' },
            { who: 'Pedro', s: 'Dói-me a garganta e tenho febre.' },
            { who: 'Médica', s: 'Há quantos dias?' },
            { who: 'Pedro', s: 'Há dois dias.' },
            { who: 'Médica', s: 'Abra a boca, por favor. Tem a garganta muito vermelha.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
            ['a cabeça', 'head'],
            ['a garganta', 'throat'],
            ['as costas', 'back'],
            ['o pé', 'foot'],
            ['o dente', 'tooth'],
            ['a barriga', 'stomach'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Dói-me a ___. (head)', a: ['cabeça'], why: '*A cabeça*.' },
            { q: 'Doem-me os ___. (feet)', a: ['pés'], why: '*Os pés*.' },
            { q: 'Tenho dor de ___. (throat)', a: ['garganta'], why: '*Dor de garganta*.' },
            { q: 'Tenho dor ___ costas.', a: ['nas'], why: '*Em + as = nas*.' },
            { q: 'Tenho ___ e tosse. (fever)', a: ['febre'], why: '*Febre* = fever.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Doem-me os ___.', o: ['dentes', 'dente', 'cabeça'], why: 'Plural, to agree with *doem*: *dentes*.' },
            { q: 'Dói-me ___ barriga.', o: ['a', 'o', 'os'], why: '*Barriga* is feminine: *a*.' },
            { q: 'Onde ___ dói?', o: ['te', 'me', 'lhes'], why: 'A question to *tu*: *te*.' },
            { q: 'Tenho dor ___ cabeça.', o: ['de', 'em', 'a'], why: '*Dor de cabeça*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: '[Dói]-me os pés.', a: ['Doem'], why: 'More than one thing: *doem*.' },
            { s: '[Doem]-me a cabeça.', a: ['Dói'], why: 'One thing: *dói*.' },
            { s: 'Tenho dor [em] garganta.', a: ['de'], why: '*Dor de garganta*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Dói-me a cabeça.', why: '*Dói-me* + part of the body.' },
            { a: 'Tenho dor de garganta e febre.', why: '*Dor de* + noun.' },
            { a: 'Onde te dói?', why: 'The little word goes before the verb in a question.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Devias descansar',
      about: 'Give advice with dever and ter de, and use the imperative.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To say that you **must** do something, use **ter de** + infinitive: *Tenho de ir ao médico.* To give **advice**, use **dever** + infinitive: *Deves descansar.* A softer form is **devias**: *Devias ir ao médico.* Another common way is **é melhor** + infinitive: *É melhor ficar em casa.* You can also use the imperative: *Descansa. Bebe muita água. Não fumes.*' },
          { t: 'table', caption: 'dever (must, should)', quiz: true, head: ['', 'dever', 'devias (softer)'], rows: [
            ['eu', 'devo', 'devia'],
            ['tu', 'deves', 'devias'],
            ['ele / ela / você', 'deve', 'devia'],
            ['nós', 'devemos', 'devíamos'],
            ['eles / elas / vocês', 'devem', 'deviam'],
          ] },
          { t: 'tip', art: 'owl', md: '**Ter de** is for a strong need or a rule: *Tens de tomar o xarope.* **Dever** is for advice: *Deves beber muita água.* The softest advice is **devias**. Typical advice: **ficar na cama, tomar um comprimido, beber muita água, descansar**. Add how often: **duas vezes por dia**, **antes** or **depois das refeições**.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Tenho de** ir ao médico.', n: '*Ter de* + infinitive: a need.' },
            { s: '**Deves** descansar.', n: 'Advice to a friend.' },
            { s: '**Devias** ir ao médico.', n: 'A softer piece of advice.' },
            { s: '**É melhor** ficar em casa.', n: '*É melhor* + infinitive.' },
            { s: 'Tome este xarope **duas vezes por dia**.', n: 'The polite imperative and how often.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '___ de ir ao médico. (eu, ter)', a: ['Tenho'], why: '*Tenho de ir*.' },
            { q: 'Tu ___ descansar. (dever)', a: ['deves'], why: '*Tu deves*.' },
            { q: 'Tu ___ ir ao médico. (softer advice)', a: ['devias'], why: '*Devias* = you should.' },
            { q: '___ melhor ficar em casa.', a: ['É'], why: '*É melhor* + infinitive.' },
            { q: 'Nós ___ beber muita água. (dever)', a: ['devemos'], why: '*Nós devemos*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right advice.', items: [
            { q: 'Tenho febre.', o: ['Devias ficar em casa.', 'Devias ir à praia.', 'Devias correr.'], why: 'With a fever, you should stay at home.' },
            { q: 'Dói-me a garganta.', o: ['Deves beber chá quente.', 'Deves beber gelado.', 'Deves gritar.'], why: 'For a sore throat, drink something hot.' },
            { q: 'Estou muito cansado.', o: ['Devias descansar.', 'Devias trabalhar mais.', 'Devias correr.'], why: 'When tired, rest.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Give advice with devias.', items: [
            { q: 'Tenho febre.', cue: 'Devias', a: ['Devias ficar em casa.', 'Devias ir ao médico.'], why: '*Devias* + infinitive.' },
            { q: 'Dói-me a cabeça.', cue: 'Devias', a: ['Devias descansar.', 'Devias tomar um comprimido.'], why: '*Devias* + infinitive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Ele [devem] descansar.', a: ['deve'], why: '*Ele deve*.' },
            { s: 'Tu [devo] descansar.', a: ['deves'], why: '*Tu deves*.' },
            { s: 'Devias [ficas] em casa.', a: ['ficar'], why: '*Devias* + infinitive.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Devias descansar um pouco.', why: '*Devias* + infinitive.' },
            { a: 'Tenho de ir ao médico.', why: '*Ter de* + infinitive.' },
            { a: 'Tome o xarope duas vezes por dia.', why: 'The polite imperative.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Queria marcar uma consulta',
      about: 'Make, change and cancel an appointment by phone.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'To make an appointment, say **Queria marcar uma consulta, se faz favor.** The person will ask **Para quando?** (For when?) and may say **Tenho quinta-feira às dez e meia.** To accept, say **Pode ser** or **Perfeito**. To refuse, say **Quinta não posso. Posso ir na sexta?** To cancel, say **Tenho de cancelar a consulta.** To give a reason, say **Desculpe, tenho outro compromisso** or **Lamento, mas estou doente.**' },
          { t: 'table', caption: 'On the phone', explain: ['head', 'col1'], head: ['Portuguese', 'English'], rows: [
            ['Queria marcar uma consulta.', 'I would like to make an appointment.'],
            ['Para quando?', 'For when?'],
            ['Pode ser na quinta, às dez e meia?', 'Is Thursday at 10:30 all right?'],
            ['Quinta não posso.', 'I cannot on Thursday.'],
            ['Tenho de cancelar a consulta.', 'I have to cancel the appointment.'],
            ['Desculpe, tenho outro compromisso.', 'Sorry, I have another engagement.'],
            ['Lamento, mas estou doente.', 'I am sorry, but I am ill.'],
          ] },
          { t: 'tip', art: 'owl', md: '**Queria** and **gostava de** are polite ways to ask: *Gostava de marcar uma consulta.* On a Portuguese phone, people answer with **Estou?** or **Está lá?** The surgery may say **Clínica, bom dia.** and ask your name: **Qual é o seu nome?**' },
        ],
        [
          { t: 'dialogue', title: 'Ao telefone', lines: [
            { who: 'Secretária', s: 'Clínica, bom dia.' },
            { who: 'Marta', s: 'Bom dia. Queria marcar uma consulta, se faz favor.' },
            { who: 'Secretária', s: 'Para quando?' },
            { who: 'Marta', s: 'Para esta semana, se possível.' },
            { who: 'Secretária', s: 'Tenho quinta-feira às dez e meia.' },
            { who: 'Marta', s: 'Quinta não posso. Posso ir na sexta?' },
            { who: 'Secretária', s: 'Sexta às nove.' },
            { who: 'Marta', s: 'Perfeito. Obrigada.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'What do you say?', pairs: [
            ['You want to make an appointment.', 'Queria marcar uma consulta.'],
            ['You cannot on Thursday.', 'Quinta não posso.'],
            ['You must cancel.', 'Tenho de cancelar a consulta.'],
            ['You have another engagement.', 'Desculpe, tenho outro compromisso.'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Queria ___ uma consulta. (to make)', a: ['marcar'], why: '*Marcar uma consulta*.' },
            { q: 'Para ___? (when)', a: ['quando'], why: '*Para quando?*' },
            { q: 'Quinta não ___. (eu, poder)', a: ['posso'], why: '*Eu posso*.' },
            { q: 'Tenho ___ cancelar a consulta.', a: ['de'], why: '*Ter de* + infinitive.' },
            { q: 'Lamento, mas ___ doente. (estar)', a: ['estou'], why: '*Eu estou*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right sentence.', items: [
            { q: 'Quer marcar uma consulta:', o: ['Queria marcar uma consulta, se faz favor.', 'Quero consulta já.', 'Dá-me uma consulta.'], why: 'The polite form.' },
            { q: 'O dia que lhe propõem não é possível:', o: ['Quinta não posso. Posso ir na sexta?', 'Quinta é mau.', 'Não, nunca.'], why: 'Say no and suggest another day.' },
            { q: 'Não pode ir à consulta:', o: ['Tenho de cancelar a consulta.', 'Vou dormir.', 'Fico aqui.'], why: 'Tell them you must cancel.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Queria marcar uma consulta, se faz favor.', why: '*Queria* + infinitive.' },
            { a: 'Quinta não posso, posso ir na sexta?', why: 'Refuse and suggest another day.' },
            { a: 'Desculpe, tenho outro compromisso.', why: 'A polite excuse.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Um folheto e uma confirmação',
      about: 'Read a pharmacy leaflet and an appointment confirmation.',
      art: 'owl',
      spreads: [
        [
          { t: 'reading', title: 'Farmácia da Rua', md: 'Horário: de segunda a sexta, das nove às sete. Para uma dor de garganta, beba chá quente e descanse. Tome o xarope duas vezes por dia, depois das refeições. Se a febre durar mais de três dias, vá ao médico.' },
          { t: 'reading', title: 'Confirmação de consulta', md: 'Confirmamos a sua consulta com a Dra. Silva na quinta-feira, às 10h30. Chegue dez minutos antes. Traga o cartão de utente. Se não puder vir, telefone-nos com um dia de antecedência.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'A farmácia está aberta de segunda a sexta.', a: 't', why: '*De segunda a sexta.*' },
            { q: 'O xarope toma-se antes das refeições.', a: 'f', why: 'It is after meals: *depois das refeições*.' },
            { q: 'A consulta é na quinta-feira às 10h30.', a: 't', why: '*Na quinta-feira, às 10h30.*' },
            { q: 'A farmácia fica aberta aos sábados.', a: 'ng', why: 'The leaflet gives only Monday to Friday.' },
            { q: 'Deve chegar dez minutos antes.', a: 't', why: '*Chegue dez minutos antes.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'O que deve beber para uma dor de garganta?', o: ['Chá quente.', 'Sumo gelado.', 'Leite frio.'], why: '*Beba chá quente.*' },
            { q: 'Quantas vezes por dia deve tomar o xarope?', o: ['Duas.', 'Uma.', 'Cinco.'], why: '*Duas vezes por dia.*' },
            { q: 'O que deve trazer à consulta?', o: ['O cartão de utente.', 'O telemóvel.', 'Um livro.'], why: '*Traga o cartão de utente.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the imperative verbs.', items: [
            { s: '[Beba] chá quente e [descanse]. [Tome] o xarope duas vezes por dia.', why: '*Beba, descanse* and *tome* are polite imperatives.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Tome o xarope duas ___ por dia. (times)', a: ['vezes'], why: '*Duas vezes por dia*.' },
            { q: '___ dez minutos antes. (você, chegar)', a: ['Chegue'], why: '*Chegue* is the polite imperative.' },
            { q: 'Se a febre durar mais de três dias, ___ ao médico. (você, ir)', a: ['vá'], why: '*Vá* is the polite imperative of *ir*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Beba chá quente e descanse.', why: 'Two polite imperatives.' },
            { a: 'Traga o cartão de utente.', why: '*Traga* = bring.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Doem-me os ___.', o: ['dentes', 'dente', 'cabeça'], why: 'Plural: *dentes*.' },
      { q: 'Tenho dor ___ cabeça.', o: ['de', 'em', 'a'], why: '*Dor de cabeça*.' },
      { q: 'Tenho febre.', o: ['Devias ficar em casa.', 'Devias ir à praia.', 'Devias correr.'], why: 'With a fever, stay at home.' },
      { q: 'Quer marcar uma consulta:', o: ['Queria marcar uma consulta, se faz favor.', 'Quero consulta já.', 'Dá-me uma consulta.'], why: 'The polite form.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Dói-me a ___. (head)', a: ['cabeça'], why: '*A cabeça*.' },
      { q: 'Tu ___ descansar. (dever)', a: ['deves'], why: '*Tu deves*.' },
      { q: 'Tenho ___ ir ao médico.', a: ['de'], why: '*Ter de* + infinitive.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
      ['a cabeça', 'head'],
      ['a garganta', 'throat'],
      ['as costas', 'back'],
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: '[Dói]-me os pés.', a: ['Doem'], why: 'More than one thing: *doem*.' },
      { s: 'Tu [devo] descansar.', a: ['deves'], why: '*Tu deves*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Dói-me a cabeça.', why: '*Dói-me* + part of the body.' },
      { a: 'Queria marcar uma consulta, se faz favor.', why: '*Queria* + infinitive.' },
    ] },
  ],
};
