// Portuguese site (/pt/): course pages written for Portuguese speakers in Brazil, Portugal
// and Portuguese-speaking Africa, in a neutral Portuguese with "você". Facts only.

const LEVELS = {
  A1: 'Você entende e usa expressões do dia a dia e frases muito simples, sabe se apresentar e fazer perguntas sobre informações pessoais, se a outra pessoa falar devagar e com clareza.',
  A2: 'Você se comunica em situações simples e habituais, como família, compras, trabalho e o lugar onde mora, e descreve o seu ambiente com palavras simples.',
  B1: 'Você se vira na maioria das situações de viagem, conta experiências, planos e desejos e explica brevemente as suas opiniões.',
  B2: 'Você entende as ideias principais de textos complexos, inclusive técnicos da sua área, e fala com uma fluência que torna natural a conversa com quem fala a língua desde sempre.',
  C1: 'Você usa a língua de forma flexível e eficaz na vida social, nos estudos e no trabalho e escreve textos claros e bem estruturados sobre temas complexos.',
  C2: 'Você entende com facilidade praticamente tudo o que lê e ouve e se expressa de forma espontânea, fluente e precisa, percebendo até as nuances de sentido.',
};

const waitlistRow = (name) => ['Quando as turmas abrem', [
  `As turmas de ${name} na Alimun ainda não estão abertas. Ao **entrar gratuitamente na lista de espera**, você recebe um e-mail assim que abrirem, sem pagar nada hoje. Enquanto isso, já pode fazer as aulas de inglês e alemão.`,
]];
const levelRow = ['Como saber por qual nível começar', [
  'O Quadro Europeu Comum de Referência divide o conhecimento de uma língua em seis níveis, do A1 ao C2. **Medir o seu nível antes de começar** permite partir do ponto certo e acompanhar o seu progresso.',
]];

export default {
  site: 'pt',
  locale: 'pt_BR',
  courses: [
    { lang: 'English', slug: 'curso-de-ingles-online', name: 'inglês', video: 'pexels-12156230-london', open: true },
    { lang: 'German', slug: 'curso-de-alemao-online', name: 'alemão', video: 'pexels-29955338-berlin', open: true },
    { lang: 'Spanish', slug: 'curso-de-espanhol-online', name: 'espanhol', video: 'pexels-20066590-barcelona', open: false },
    { lang: 'French', slug: 'curso-de-frances-online', name: 'francês', video: 'pexels-4272751-paris', open: false },
    { lang: 'Italian', slug: 'curso-de-italiano-online', name: 'italiano', video: 'pexels-15245121-rome', open: false },
  ],
  pageTitle: (c) => c.open ? `Curso de ${c.name} online com aulas ao vivo | Alimun` : `Curso de ${c.name} online: lista de espera | Alimun`,
  metaDesc: (c) => c.open
    ? `Curso de ${c.name} online em turmas com um professor, em dias e horários fixos toda semana, tarefas corrigidas pelo professor e exercícios com correção imediata. A partir de €24 por mês.`
    : `As turmas de ${c.name} na Alimun vão abrir em breve. Entre gratuitamente na lista de espera e avisaremos você assim que abrirem.`,
  heroTitle: (c) => `Curso de ${c.name} online`,
  heroDesc: (c) => c.open
    ? 'Aulas ao vivo por vídeo com um professor e a mesma turma, em dias fixos e no mesmo horário toda semana. Entre uma aula e outra, você pratica com correção imediata e o seu professor corrige as tarefas. A partir de €24 por mês.'
    : `As turmas de ${c.name} vão abrir em breve. Entre gratuitamente na lista de espera: avisamos você assim que a sua língua abrir e você não paga nada hoje. Enquanto isso, já pode fazer as aulas de inglês e alemão.`,
  heroCta: (c) => c.open ? 'Comece agora' : 'Entrar na lista de espera',
  howTitle: (c) => `Como funcionam as aulas de ${c.name}`,
  liveDesc: (c) => `Aulas de ${c.name} por vídeo com o seu professor e a mesma turma, em dias fixos e no mesmo horário toda semana.`,
  levelsTitle: (c) => `Os níveis de ${c.name} do A1 ao C2`,
  exams: {
    English: {
      title: 'Os certificados de inglês',
      desc: 'Os certificados mais pedidos para estudar, trabalhar e conseguir um visto. Na Alimun você pratica com provas no mesmo formato.',
      panels: [
        ['B2 First', 'O B2 First da Cambridge English certifica o nível B2 com quatro provas: Reading and Use of English, Writing, Listening e Speaking. É muito pedido por universidades, programas de intercâmbio e empresas, e o certificado não expira.'],
        ['C1 Advanced', 'O C1 Advanced da Cambridge English certifica o nível C1 com as mesmas quatro provas, mais exigentes. Muitas universidades e empresas o aceitam como prova de um inglês avançado para estudar e trabalhar em inglês.'],
        ['IELTS', 'O IELTS avalia Listening, Reading, Writing e Speaking com uma nota de 0 a 9. Tem a versão Academic, para estudos, e General Training, para trabalho e imigração, e é exigido para vistos em países como Reino Unido, Austrália e Canadá.'],
      ],
    },
    German: {
      title: 'Os certificados de alemão',
      desc: 'Os certificados mais pedidos para morar, estudar e trabalhar em países de língua alemã. Na Alimun você pratica com provas no mesmo formato.',
      panels: [
        ['Goethe B1', 'O Goethe-Zertifikat B1 do Goethe-Institut avalia leitura, compreensão oral, escrita e conversação, que também podem ser feitas em módulos separados. É um dos certificados mais pedidos para morar e trabalhar na Alemanha.'],
        ['Goethe B2', 'O Goethe-Zertifikat B2 certifica um alemão independente nas mesmas quatro competências. É muito pedido para empregos qualificados e para o acesso a alguns cursos.'],
        ['telc B1', 'O telc Deutsch B1, conhecido como Zertifikat Deutsch, certifica o nível B1 e é reconhecido pelas autoridades alemãs, por exemplo nos pedidos de naturalização.'],
      ],
    },
  },
  guides: {
    English: {
      title: 'Estudar inglês online: o que saber antes de começar',
      lead: 'O inglês é **a língua que mais abre portas** para quem fala português, no Brasil, em Portugal e na África. Escolher bem como estudar faz a diferença entre um curso abandonado no meio e um que leva você a falar de verdade.',
      rows: [
        ['Por que o inglês importa para quem fala português', [
          'Muitas empresas trabalham com clientes e equipes de outros países, e cada vez mais entrevistas de emprego acontecem, pelo menos em parte, em inglês. Dominar a língua com segurança permite **concorrer a vagas internacionais** e trabalhar remotamente para empresas estrangeiras.',
          'Nos estudos ele também é decisivo: é a língua de muitos mestrados e doutorados no exterior e da maior parte da documentação técnica e científica. E deixa qualquer viagem mais simples.',
        ]],
        ['O que mais pesa para quem fala português', [
          'O som do th, as vogais longas e curtas e as consoantes no fim das palavras pedem prática, sobretudo para não acrescentar um i no final, como em Facebook-i. Os falsos amigos também são muitos: pretend não é pretender, push não é puxar e actually não é atualmente.',
          'Conversar com um professor e uma turma desde o primeiro dia ajuda a **ouvir a língua real** e a corrigir os erros que vêm do português antes que virem hábito.',
        ]],
        ['Aulas em grupo ou aulas particulares', [
          'As aulas particulares oferecem atenção total, mas custam mais e acostumam você a um único interlocutor. Em grupo, você fala com pessoas diferentes, ouve sotaques variados e **o custo de cada aula é dividido**.',
          'Na Alimun você escolhe entre turmas de tamanhos diferentes, conforme a atenção que deseja, e um plano com aulas individuais. Em todos os casos as aulas acontecem em dias e horários fixos, para que estudar vire um hábito.',
        ]],
        ['Quanto se melhora e do que depende', [
          'Não existe um número de semanas igual para todos: o progresso depende do nível inicial, da constância e de quanto você pratica entre as aulas. **Algumas horas constantes por semana** funcionam melhor do que sessões longas e esporádicas.',
          'Por isso as aulas ao vivo são completadas por exercícios com correção imediata, flashcards com o vocabulário das aulas e tarefas corrigidas pelo seu professor.',
        ]],
      ],
    },
    German: {
      title: 'Estudar alemão online: o que saber antes de começar',
      lead: 'O alemão é **a língua materna mais falada da União Europeia** e abre as portas da Alemanha, da Áustria e da Suíça. Com um método constante, a fama de língua difícil logo fica para trás.',
      rows: [
        ['Por que o alemão importa para quem fala português', [
          'A Alemanha procura profissionais qualificados em áreas como saúde, engenharia e tecnologia e tem caminhos específicos para trabalhadores de fora da União Europeia. Para muitas dessas vagas, a língua é um requisito.',
          'O Brasil também tem **muitas empresas alemãs**, que valorizam quem fala alemão. E, para quem pensa em se mudar, a língua é pedida em empregos qualificados, em alguns cursos e nos trâmites com as autoridades.',
        ]],
        ['As dificuldades mais comuns e como superá-las', [
          'Para quem fala português, os principais obstáculos são **os casos, o gênero dos substantivos e a ordem das palavras**, com o verbo no fim das orações subordinadas, além de sons como o ü e o ö.',
          'Nas aulas ao vivo você usa a língua desde o início e o professor corrige os erros que se repetem. Entre as aulas, você revisa com exercícios e flashcards, e as estruturas se tornam automáticas.',
        ]],
        ['Como saber por qual nível começar', [
          'O Quadro Europeu Comum de Referência divide o conhecimento de uma língua em seis níveis, do A1 ao C2, e **os certificados de alemão seguem a mesma escala**. Saber onde você está evita repetir o que já sabe.',
          'O teste de nível da Alimun coloca você entre o A1 e o C1, e a sua turma e os seus exercícios se adaptam ao resultado.',
        ]],
        ['Alemão para trabalhar, estudar ou se mudar', [
          'Se o seu objetivo é um emprego ou uma mudança, informe-se com antecedência sobre **o nível e o certificado exigidos**: costumam estar indicados nas vagas ou nos órgãos onde você faz o pedido.',
          'Na Alimun você pode praticar com provas no formato do Goethe B1, Goethe B2 e telc B1 e se preparar com constância, em dias e horários fixos toda semana, até antes de viajar.',
        ]],
      ],
    },
    Spanish: {
      title: 'Estudar espanhol online: o que saber antes de começar',
      lead: 'O espanhol é **a língua mais próxima do português** entre as mais estudadas: entende-se rápido, mas falar bem exige ir além das semelhanças.',
      rows: [
        ['Por que o espanhol importa para quem fala português', [
          'O espanhol é língua oficial na Espanha e na maior parte da América Latina, inclusive em quase todos os vizinhos do Brasil, e é **uma das línguas mais faladas do mundo**. É útil para viajar, estudar e trabalhar com a região e com a Espanha.',
        ]],
        ['O risco do portunhol', [
          'A proximidade permite se fazer entender logo, mas também leva a **misturar as duas línguas**: palavras parecidas com sentidos diferentes, como exquisito, que significa delicioso, e sons do português aplicados ao espanhol.',
          'Aulas ao vivo com correção precisa ajudam a passar do se fazer entender a falar um espanhol correto e natural.',
        ]],
        levelRow,
        waitlistRow('espanhol'),
      ],
    },
    French: {
      title: 'Estudar francês online: o que saber antes de começar',
      lead: 'O francês é falado na França, na Bélgica, na Suíça, no Canadá e em muitos países da África. Para quem fala português, **as vogais nasais soam familiares**, mas a língua tem armadilhas próprias.',
      rows: [
        ['Por que o francês importa para quem fala português', [
          'O francês é **língua de trabalho das instituições europeias** e de muitos organismos internacionais, e é útil em áreas como turismo, comércio e diplomacia, além de estudos na França e no Canadá.',
        ]],
        ['Semelhanças e armadilhas para quem fala português', [
          'Muitas palavras se reconhecem logo, mas **os falsos amigos são numerosos** e as letras que não se pronunciam tornam a compreensão oral difícil no começo. Ouvir e falar com regularidade, com um professor, é o que mais ajuda.',
        ]],
        levelRow,
        waitlistRow('francês'),
      ],
    },
    Italian: {
      title: 'Estudar italiano online: o que saber antes de começar',
      lead: 'O italiano é **uma língua muito próxima do português**: entende-se rápido, mas falar bem exige sair das semelhanças.',
      rows: [
        ['Por que o italiano importa para quem fala português', [
          'O Brasil tem **uma grande comunidade de origem italiana**, sobretudo em São Paulo e no Sul, e a Itália é um grande destino de estudo, arte, design, gastronomia e moda.',
        ]],
        ['Semelhanças e armadilhas para quem fala português', [
          'As consoantes duplas, como em fatto ou anno, mudam o sentido das palavras, e **os falsos amigos enganam**: burro significa manteiga e salire significa subir. Praticar com um professor e uma turma fixa a pronúncia certa desde o início.',
        ]],
        levelRow,
        waitlistRow('italiano'),
      ],
    },
  },
  faq: (c) => {
    if (c.open) {
      return [
        [`Quanto custa um curso de ${c.name} online na Alimun?`, 'Os planos começam em €24 por mês com o Community, em turmas de cerca de 35 pessoas. O Focused custa €59, o Intensive €109 e as aulas particulares 1 on 1 €269 por mês. Com a assinatura anual, você paga dez meses em vez de doze.'],
        ['As aulas são ao vivo ou gravadas?', 'São aulas ao vivo por vídeo com um professor e sempre a mesma turma. A Alimun não grava as aulas: depois de cada aula você recebe as anotações da sessão, o vocabulário novo e as tarefas.'],
        ['Em que dias e horários são as aulas?', 'Cada turma se reúne em dias fixos e no mesmo horário toda semana, com o mesmo professor e a mesma turma. Assim, estudar vira parte da sua semana.'],
        ['Preciso de um nível mínimo para começar?', 'Não. Há turmas a partir do nível A1, e um teste inicial curto coloca você entre o A1 e o C1, para entrar na turma certa.'],
        ['Posso me preparar para um certificado?', c.lang === 'German'
          ? 'Sim, você pode praticar com provas no formato do Goethe B1, Goethe B2 e telc B1. Não é material oficial e a Alimun não é afiliada às instituições certificadoras.'
          : 'Sim, você pode praticar com provas no formato do B2 First, C1 Advanced e IELTS. Não é material oficial e a Alimun não é afiliada às instituições certificadoras.'],
        ['Posso cancelar quando quiser?', 'Sim, você pode cancelar a qualquer momento nas configurações de pagamento da sua área pessoal. O acesso continua até o fim do período já pago, como indicam os Termos e condições.'],
        ['Do que preciso para assistir às aulas?', 'De um computador ou outro dispositivo com câmera, microfone e uma conexão estável. As aulas acontecem no navegador, sem instalar programas.'],
      ];
    }
    return [
      [`Quando abrem as turmas de ${c.name}?`, `Ainda não há data. Ao entrar na lista de espera, você recebe um e-mail assim que as turmas de ${c.name} abrirem.`],
      ['A lista de espera é gratuita?', 'Sim. Você entra gratuitamente e não paga nada hoje.'],
      ['Posso começar já com outra língua?', 'Sim, as turmas de inglês e alemão já estão abertas e você pode se inscrever a qualquer momento.'],
      ['Como são as aulas na Alimun?', 'São aulas ao vivo por vídeo, com um professor e sempre a mesma turma, em dias fixos e no mesmo horário toda semana. Entre as aulas você pratica com correção imediata.'],
      ['Do que preciso para assistir às aulas?', 'De um computador ou outro dispositivo com câmera, microfone e uma conexão estável. As aulas acontecem no navegador, sem instalar programas.'],
    ];
  },
  quiz: {
    title: (c) => `Descubra o seu nível de ${c.name}`,
    intro: (c) => `Frases para completar que ficam mais difíceis quando você acerta e mais fáceis quando erra, em cerca de dois minutos. No fim, você vê uma estimativa do seu nível de ${c.name}.`,
    note: (c) => c.open
      ? 'É uma estimativa. Depois do cadastro, o teste completo define o seu nível e coloca você na turma certa.'
      : `É uma estimativa. Quando as turmas de ${c.name} abrirem, o teste completo vai definir o seu nível e a turma certa para você.`,
    cta: (c) => c.open ? 'Cadastre-se e faça o teste completo' : 'Entrar na lista de espera',
    start: 'Começar o teste',
    prompt: 'Complete a frase',
    again: 'Refazer o teste',
    right1: 'resposta certa de',
    rightN: 'respostas certas de',
    levels: LEVELS,
  },
  ui: {
    UI_QUIZ_BTN: 'Descubra o seu nível',
    UI_QUIZ_BTN_LONG: 'Descubra o seu nível em dois minutos',
    UI_HOW_1_T: 'Teste de nível',
    UI_HOW_1_D: 'Um teste curto define o seu nível, do A1 ao C1, e coloca você na turma certa.',
    UI_HOW_1_A: 'Uma estudante no computador fazendo anotações',
    UI_HOW_2_T: 'Aulas ao vivo',
    UI_HOW_2_A: 'Uma aula por vídeo com dois alunos na tela',
    UI_HOW_3_T: 'Tarefas corrigidas',
    UI_HOW_3_D: 'O seu professor passa as tarefas e devolve corrigidas: nota, pontos fortes, o que melhorar e um exemplo de correção.',
    UI_HOW_3_A: 'Um professor corrigindo tarefas no computador',
    UI_HOW_4_T: 'Pratique quando quiser',
    UI_HOW_4_D: 'Exercícios do seu nível com correção imediata, flashcards com o vocabulário das aulas e provas no formato dos exames.',
    UI_HOW_4_A: 'Um estudante de fones de ouvido praticando no caderno',
    UI_LV_INTRO: 'O Quadro Europeu Comum de Referência (QECR) descreve seis níveis de conhecimento de uma língua. Na Alimun há turmas para cada nível e o teste inicial coloca você entre o A1 e o C1.',
    UI_LV_1_H: 'A1, nível básico', UI_LV_1_P: LEVELS.A1,
    UI_LV_2_H: 'A2, nível elementar', UI_LV_2_P: LEVELS.A2,
    UI_LV_3_H: 'B1, nível intermediário', UI_LV_3_P: LEVELS.B1,
    UI_LV_4_H: 'B2, intermediário avançado', UI_LV_4_P: LEVELS.B2,
    UI_LV_5_H: 'C1, nível avançado', UI_LV_5_P: LEVELS.C1,
    UI_LV_6_H: 'C2, domínio pleno', UI_LV_6_P: LEVELS.C2,
    UI_EX_NOTE: 'Não é material oficial de exame. A Alimun não é afiliada às instituições certificadoras.',
    UI_PL_TITLE: 'Planos e preços',
    UI_PL_DESC: 'Escolha quanta atenção você quer: quanto menor a turma, mais tempo para falar. Com a assinatura anual, você paga dez meses em vez de doze.',
    UI_PL_MONTH: 'por mês',
    UI_PL_1: 'Turmas de cerca de 35 pessoas, aulas ao vivo e acesso à comunidade.',
    UI_PL_2: 'Turmas de cerca de 17 pessoas e um retorno semanal sobre o seu trabalho.',
    UI_PL_3: 'Turmas de cerca de 6 pessoas e, além disso, uma aula individual por semana.',
    UI_PL_4: 'Aulas particulares com o seu professor, com uma base de três aulas por semana.',
    UI_PL_CTA: 'Escolha o seu plano',
    UI_FAQ_TITLE: 'Perguntas frequentes',
    UI_Q_CLOSE: 'Fechar',
  },
};
