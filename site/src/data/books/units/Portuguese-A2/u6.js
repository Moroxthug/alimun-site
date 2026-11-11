// Portuguese A2, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Work and everyday life',
  goal: 'Talk about jobs, phone calls and daily tasks at work. Learn the names of jobs, há, desde and durante with time, and the phrases for a phone call.',
  art: 'mug',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'speaking'], topics: ['jobs', 'workplaces', 'cv', 'há desde durante', 'phone calls', 'email'], goals: ['foundations', 'professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Sou professora',
      about: 'Say what you do and where you work.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'To ask about a job, say **O que fazes?** or **Qual é a tua profissão?** To answer, use **ser** + the job **without an article**: *Sou professora. Ele é médico.* To ask where, say **Onde trabalhas?** The answer is **Trabalho em** + place: *Trabalho num hospital. Trabalho numa escola.* The little word **em** joins with **um** and **uma**: **em + um = num**, **em + uma = numa**.' },
          { t: 'table', caption: 'Jobs', explain: ['head', 'col1'], head: ['Portuguese', 'English'], rows: [
            ['o professor / a professora', 'teacher'],
            ['o médico / a médica', 'doctor'],
            ['o enfermeiro / a enfermeira', 'nurse'],
            ['o engenheiro / a engenheira', 'engineer'],
            ['o cozinheiro / a cozinheira', 'cook'],
            ['o empregado / a empregada de mesa', 'waiter / waitress'],
            ['o vendedor / a vendedora', 'shop assistant'],
            ['o padeiro / a padeira', 'baker'],
            ['o motorista', 'driver (the same for both)'],
            ['o advogado / a advogada', 'lawyer'],
          ] },
          { t: 'tip', art: 'owl', md: 'Many jobs change **-o** to **-a** (*médico, médica*), and the ones that end in **-or** add **-a** (*professor, professora*). Words that end in **-ista** or **-e** are the same for both: *o / a motorista, o / a colega*. You say **Sou engenheira**, not *Sou uma engenheira*, unless you add an adjective: *Sou uma boa engenheira.*' },
        ],
        [
          { t: 'text', md: 'A short CV uses short sentences. Say what you did: **Trabalhei três anos num banco.** Say what you do now: **Trabalho numa loja.** Say what you can do: **Sei usar o computador.** Say your languages: **Falo português, inglês e um pouco de francês.**' },
          { t: 'examples', items: [
            { s: 'Sou **professora** e trabalho **numa** escola.', n: 'No article before the job; *em + uma = numa*.' },
            { s: 'Ele é **médico** e trabalha **num** hospital.', n: '*Em + um = num*.' },
            { s: 'Trabalhei três anos **num** banco.', n: 'Past experience.' },
            { s: '**Sei** usar o computador.', n: '*Saber* + infinitive = to know how to.' },
            { s: 'O que **fazes**? – Sou cozinheiro.', n: 'The question about the job.' },
          ] },
          { t: 'dialogue', title: 'Que profissão tens?', lines: [
            { who: 'Ana', s: 'O que fazes, Rafael?' },
            { who: 'Rafael', s: 'Sou empregado de mesa. Trabalho num restaurante no centro.' },
            { who: 'Ana', s: 'Gostas?' },
            { who: 'Rafael', s: 'Gosto muito. E tu, onde trabalhas?' },
            { who: 'Ana', s: 'Sou enfermeira. Trabalho num hospital.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the job with its meaning.', pairs: [
            ['o professor', 'teacher'],
            ['o enfermeiro', 'nurse'],
            ['o cozinheiro', 'cook'],
            ['o advogado', 'lawyer'],
            ['o padeiro', 'baker'],
            ['o motorista', 'driver'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Ela é ___. (professor)', a: ['professora'], why: 'Feminine: *professora*.' },
            { q: 'Eu trabalho ___ hospital. (em + um)', a: ['num'], why: '*Em + um = num*.' },
            { q: 'Ele trabalha ___ escola. (em + uma)', a: ['numa'], why: '*Em + uma = numa*.' },
            { q: 'A minha mãe é ___. (cozinheiro)', a: ['cozinheira'], why: 'Feminine: *cozinheira*.' },
            { q: 'Qual é a tua ___?', a: ['profissão'], why: '*Profissão* = job.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: '', o: ['Sou professora.', 'Sou uma professora.', 'Eu é professora.'], why: 'No article before the job.' },
            { q: 'Trabalho ___ banco.', o: ['num', 'numa', 'nos'], why: '*Banco* is masculine: *num*.' },
            { q: 'Ela trabalha ___ escola.', o: ['numa', 'num', 'nas'], why: '*Escola* is feminine: *numa*.' },
            { q: 'O Rui é ___.', o: ['cozinheiro', 'cozinheira', 'cozinheiras'], why: 'A man: *cozinheiro*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Ela é [professor].', a: ['professora'], why: 'Feminine: *professora*.' },
            { s: 'Eu trabalho [numa] banco.', a: ['num'], why: '*Banco* is masculine: *num*.' },
            { s: 'O Rui é [cozinheira].', a: ['cozinheiro'], why: 'A man: *cozinheiro*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Sou professora e trabalho numa escola.', why: 'No article; *numa*.' },
            { a: 'Onde é que trabalhas agora?', why: 'The question about the workplace.' },
            { a: 'Trabalhei três anos num banco.', why: 'Past experience.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Há dois anos, desde 2022',
      about: 'Say how long you have done something with há, desde and durante.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To say how long something has been going on, use the **present** with **há** + time or **desde** + a starting point: *Trabalho aqui há dois anos* (I have worked here for two years). *Trabalho aqui desde 2022. Vivo em Lisboa desde janeiro.* To ask, say **Há quanto tempo trabalhas aqui?** or **Desde quando trabalhas aqui?** To say how long something lasted and is finished, use **durante** and the perfeito: *Trabalhei durante três anos num banco.*' },
          { t: 'table', caption: 'Há, desde, durante', explain: ['head', 'col1'], head: ['Word', 'Meaning', 'Example'], rows: [
            ['há + time', 'for (still going on)', 'Trabalho aqui há dois anos.'],
            ['desde + point', 'since', 'Trabalho aqui desde 2022.'],
            ['durante + time', 'for (finished)', 'Trabalhei durante três anos num banco.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Compare: **Trabalho aqui há dois anos** (I still work here) and **Trabalhei aqui durante dois anos** (I do not work here any more). In Portugal, **há** with a past action also means *ago*: *Comecei há dois anos* (I started two years ago).' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Trabalho aqui **há** dois anos.', n: 'Still going on.' },
            { s: 'Trabalho aqui **desde** 2022.', n: '*Desde* + the starting point.' },
            { s: 'Trabalhei **durante** três anos num banco.', n: 'Finished.' },
            { s: '**Há quanto tempo** vives em Lisboa?', n: 'Asking how long.' },
            { s: '**Desde quando** estudas português?', n: 'Asking since when.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write há, desde or durante.', items: [
            { q: 'Trabalho aqui ___ dois anos.', a: ['há'], why: 'Still going on: *há*.' },
            { q: 'Trabalho aqui ___ 2022.', a: ['desde'], why: 'A starting point: *desde*.' },
            { q: 'Trabalhei ___ três anos num banco.', a: ['durante'], why: 'Finished: *durante*.' },
            { q: 'Vivo em Lisboa ___ janeiro.', a: ['desde'], why: '*Desde janeiro*.' },
            { q: '___ quanto tempo estudas português?', a: ['Há'], why: '*Há quanto tempo?*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: '___ quanto tempo trabalhas aqui?', o: ['Há', 'Desde', 'Durante'], why: '*Há quanto tempo?*' },
            { q: 'Vivo aqui ___ 2020.', o: ['desde', 'há', 'durante'], why: 'A starting point: *desde*.' },
            { q: 'Trabalhei ___ cinco anos numa fábrica.', o: ['durante', 'desde', 'há'], why: 'A finished period: *durante*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Say how long it has been going on.', items: [
            { q: 'Comecei a trabalhar aqui há três anos. Ainda trabalho aqui.', cue: 'Trabalho', a: ['Trabalho aqui há três anos.'], why: '*Há* + time with the present.' },
            { q: 'Comecei a estudar português em março. Ainda estudo.', cue: 'Estudo', a: ['Estudo português desde março.'], why: '*Desde* + the starting point.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Trabalho aqui [desde] três anos.', a: ['há'], why: '*Há* + a length of time.' },
            { s: 'Vivo aqui [há] 2020.', a: ['desde'], why: '*Desde* + a year.' },
            { s: 'Trabalhei aqui [desde] dois anos e depois saí.', a: ['durante'], why: 'Finished: *durante*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Trabalho aqui há dois anos.', why: '*Há* + time.' },
            { a: 'Há quanto tempo vives em Lisboa?', why: 'The question about duration.' },
            { a: 'Trabalhei durante três anos num banco.', why: '*Durante* + finished time.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Estou? Queria falar com…',
      about: 'Make and answer a phone call at work.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'To answer the phone in Portugal, say **Estou?** or **Sim?** or the name of the company: *Clínica, bom dia.* To introduce yourself, say **Fala o Pedro Gomes** (This is Pedro Gomes speaking). To ask for someone, say **Queria falar com o senhor Pereira, se faz favor.** The other person may say **Um momento, vou passar** (One moment, I will put you through) or **Não está de momento. Quer deixar recado?** (He is not here at the moment. Do you want to leave a message?).' },
          { t: 'table', caption: 'On the phone', explain: ['head', 'col1'], head: ['Portuguese', 'English'], rows: [
            ['Estou? / Está lá?', 'Hello? (answering or calling)'],
            ['Fala o Pedro Gomes.', 'This is Pedro Gomes speaking.'],
            ['Queria falar com …', 'I would like to speak to …'],
            ['Um momento, vou passar.', 'One moment, I will put you through.'],
            ['Não está de momento.', 'He / she is not here at the moment.'],
            ['Quer deixar recado?', 'Do you want to leave a message?'],
            ['Pode repetir, por favor?', 'Can you repeat, please?'],
            ['Ligo mais tarde.', 'I will call back later.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Portugal, **ligar** means *to call by phone*: *Ligo-lhe amanhã.* In Brazil, people also say *ligar*, but they often start with *Alô?* instead of *Estou?* To ask someone to speak more slowly, say **Pode falar mais devagar, por favor?**' },
        ],
        [
          { t: 'dialogue', title: 'Ao telefone', lines: [
            { who: 'Secretária', s: 'Estou?' },
            { who: 'Pedro', s: 'Bom dia. Queria falar com a engenheira Costa, se faz favor.' },
            { who: 'Secretária', s: 'Um momento. Infelizmente não está de momento. Quer deixar recado?' },
            { who: 'Pedro', s: 'Sim. Pode dizer-lhe que o Pedro Gomes ligou?' },
            { who: 'Secretária', s: 'Pode repetir o nome, por favor?' },
            { who: 'Pedro', s: 'Pedro Gomes. G, O, M, E, S.' },
            { who: 'Secretária', s: 'Obrigada. Digo-lhe.' },
          ] },
          { t: 'ex', kind: 'match', h: 'What do you say?', pairs: [
            ['You want to speak to Mr Pereira.', 'Queria falar com o senhor Pereira.'],
            ['You did not hear well.', 'Pode repetir, por favor?'],
            ['You will call again.', 'Ligo mais tarde.'],
            ['You want to leave a message.', 'Pode dizer-lhe que liguei?'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '___? (answering the phone)', a: ['Estou'], why: '*Estou?* answers the phone in Portugal.' },
            { q: 'Queria ___ com a engenheira Costa. (to speak)', a: ['falar'], why: '*Queria falar com …*' },
            { q: 'Pode ___, por favor? (repeat)', a: ['repetir'], why: '*Pode repetir?*' },
            { q: 'Quer deixar ___? (a message)', a: ['recado'], why: '*Deixar recado*.' },
            { q: 'Ligo mais ___.', a: ['tarde'], why: '*Mais tarde* = later.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right sentence.', items: [
            { q: 'Quer falar com a Dra. Silva:', o: ['Queria falar com a Dra. Silva.', 'Dá-me a Dra. Silva.', 'Onde está a Silva?'], why: 'The polite form.' },
            { q: 'Não percebeu o nome:', o: ['Pode repetir, por favor?', 'Fala mais alto!', 'Diz outra vez!'], why: 'The polite form.' },
            { q: 'A pessoa não está:', o: ['Não está de momento.', 'Não existe.', 'Já foi.'], why: 'The polite form.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Queria falar com o senhor Pereira, se faz favor.', why: '*Queria falar com* + person.' },
            { a: 'Um momento, vou passar.', why: 'A phone phrase.' },
            { a: 'Pode repetir o nome, por favor?', why: '*Pode* + infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Um anúncio e um e-mail',
      about: 'Read a job advert and a short work e-mail.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Procura-se empregado de mesa', md: 'Restaurante no centro procura empregado de mesa. Um ano de experiência, no mínimo. Fala português e inglês. Trabalho de terça a sábado, das dezoito às vinte e três horas. Enviar o curriculum para emprego@example.com.' },
          { t: 'reading', title: 'Candidatura', md: '**Assunto:** Candidatura\n\nBom dia,\n\nChamo-me Rafael Costa e tenho vinte e oito anos. Trabalho como empregado de mesa há três anos, num restaurante em Lisboa. Falo português, inglês e um pouco de espanhol. Estou disponível de terça a sábado à noite. Envio o curriculum em anexo.\n\nCom os melhores cumprimentos,\nRafael Costa' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'O restaurante procura um empregado de mesa.', a: 't', why: '*Procura empregado de mesa.*' },
            { q: 'O trabalho é de segunda a sexta.', a: 'f', why: 'It is from Tuesday to Saturday.' },
            { q: 'O Rafael trabalha como empregado de mesa há três anos.', a: 't', why: '*Trabalho … há três anos.*' },
            { q: 'O Rafael fala francês.', a: 'ng', why: 'He says Portuguese, English and a little Spanish.' },
            { q: 'O Rafael está disponível à noite.', a: 't', why: '*De terça a sábado à noite.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Quantos anos de experiência pede o anúncio?', o: ['Um, no mínimo.', 'Três.', 'Dez.'], why: '*Um ano de experiência, no mínimo.*' },
            { q: 'Quantos anos tem o Rafael?', o: ['Vinte e oito.', 'Trinta e oito.', 'Dezoito.'], why: '*Tenho vinte e oito anos.*' },
            { q: 'Onde trabalha o Rafael?', o: ['Num restaurante em Lisboa.', 'Num banco.', 'Numa escola.'], why: '*Num restaurante em Lisboa.*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Trabalho como empregado de mesa ___ três anos.', a: ['há'], why: '*Há* + time, still going on.' },
            { q: 'Falo português, inglês e um ___ de espanhol.', a: ['pouco'], why: '*Um pouco de* = a little.' },
            { q: 'Envio o curriculum em ___.', a: ['anexo'], why: '*Em anexo* = attached.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Trabalho ___ banco.', o: ['num', 'numa', 'nos'], why: '*Banco* is masculine: *num*.' },
      { q: '___ quanto tempo trabalhas aqui?', o: ['Há', 'Desde', 'Durante'], why: '*Há quanto tempo?*' },
      { q: 'Vivo aqui ___ 2020.', o: ['desde', 'há', 'durante'], why: 'A starting point: *desde*.' },
      { q: 'Quer falar com a Dra. Silva:', o: ['Queria falar com a Dra. Silva.', 'Dá-me a Dra. Silva.', 'Onde está a Silva?'], why: 'The polite form.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Ela é ___. (professor)', a: ['professora'], why: 'Feminine: *professora*.' },
      { q: 'Trabalhei ___ três anos num banco.', a: ['durante'], why: 'Finished: *durante*.' },
      { q: 'Quer deixar ___? (a message)', a: ['recado'], why: '*Deixar recado*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the job with its meaning.', pairs: [
      ['o professor', 'teacher'],
      ['o enfermeiro', 'nurse'],
      ['o padeiro', 'baker'],
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Trabalho aqui [desde] três anos.', a: ['há'], why: '*Há* + a length of time.' },
      { s: 'O Rui é [cozinheira].', a: ['cozinheiro'], why: 'A man: *cozinheiro*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Sou professora e trabalho numa escola.', why: 'No article; *numa*.' },
      { a: 'Pode repetir o nome, por favor?', why: '*Pode* + infinitive.' },
    ] },
  ],
};
