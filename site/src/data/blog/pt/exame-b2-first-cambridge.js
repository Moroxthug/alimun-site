// Third design (docs/BLOG_PLAN.md). Verificado em 31 out. 2026 em cambridgeenglish.org: página do exame B2 First,
// formato, resultados (faixas de pontuação, conceitos, prazos de resultado, sem validade), handbook oficial do B2 First
// (partes, pontos, peso igual, critérios de avaliação, regras das key word transformations, 1939) e guia do
// Statement of Results; horas de aprendizagem guiada do site de suporte da Cambridge English. A Alimun não é afiliada à Cambridge.
export default {
  key: 'b2-first',
  site: 'pt',
  slug: 'exame-b2-first-cambridge',
  section: 'exams',
  course: 'English',
  published: '2026-10-31',
  updated: '2026-10-31',
  title: 'Exame B2 First de Cambridge (FCE): o guia completo',
  metaTitle: 'B2 First de Cambridge (FCE): provas, notas e preparação – Alimun',
  desc: 'Todas as provas e partes do B2 First, o antigo FCE, com os tempos, como funcionam a Cambridge English Scale e os conceitos, e um plano de estudo.',
  lead: "O B2 First, durante décadas chamado First Certificate in English ou FCE, é um dos certificados de inglês mais conhecidos do mundo. Ele avalia as quatro habilidades, além de gramática e vocabulário, e **comprova que você chegou ao nível intermediário superior**. Veja como ele funciona, parte por parte, e como se preparar.",
  photo: 'b2-first-desk-notebook',
  sticker: { draw: 'owl', say: 'Cinco notas, uma média, um certificado.' },
  facts: [
    { n: 4, unit: 'provas', text: 'Reading and Use of English, Writing, Listening e Speaking' },
    { n: 52, unit: 'questões', text: 'em Reading and Use of English, em sete partes e 1 hora e 15 minutos' },
    { n: 180, text: 'a pontuação da Cambridge English Scale que dá o conceito A e um certificado de nível C1' },
    { label: 'Sem validade', text: 'o certificado não vence, mas algumas instituições pedem um resultado recente' },
  ],
  blocks: [
    { take: { title: 'A resposta curta', text: "O B2 First é o exame da Cambridge English do nível B2 do Quadro Europeu (CEFR). Ele tem quatro provas e dura **cerca de três horas e meia**. Você recebe uma pontuação de 122 a 190 na Cambridge English Scale: de 160 a 179 você ganha o certificado B2, a partir de 180 o conceito A e um certificado de nível C1, e de 140 a 159 um certificado de nível B1. O certificado não tem prazo de validade.", draw: 'owl' } },

    { h: 'O que é o B2 First e para quem ele serve' },
    { p: "O B2 First faz parte das Cambridge English Qualifications, uma série de exames que vai do A2 Key ao C2 Proficiency, cada um feito para um único nível. Ele foi oferecido pela primeira vez em 1939 e por décadas se chamou **First Certificate in English**, ou FCE. Muitos professores e empregadores ainda usam o nome antigo, e o próprio certificado ainda traz a inscrição “B2 First Certificate in English”." },
    { p: "O exame mira o **nível B2**, intermediário superior, do Quadro Europeu Comum de Referência para Línguas (CEFR, na sigla em inglês), a escala de seis níveis de A1 a C2. A Cambridge o descreve como prova de que você consegue trabalhar em um ambiente de língua inglesa, morar de forma independente em um país anglófono ou estudar em nível intermediário superior, por exemplo em um curso preparatório para a universidade. Na prática, no B2 você acompanha uma palestra sobre um tema conhecido, mantém uma conversa sobre assuntos bem variados e dá sua opinião com argumentos." },
    { p: "Por isso ele é o passo natural depois do B1 Preliminary, e a Cambridge lembra que ele é aceito por muitas escolas e universidades para estudo, além de empregadores. Se você não tem certeza do seu nível, descubra antes: o B2 First mede um único nível, e **fazer a prova cedo demais é um jeito fácil de perder tempo e dinheiro**." },

    { h: 'As quatro provas em resumo' },
    { p: "O exame tem quatro provas. Reading and Use of English, Writing e Listening são provas escritas, enquanto o Speaking é feito pessoalmente com dois examinadores; o seu centro de exames informa a data e o horário de cada uma. A Cambridge indica uma duração total de **cerca de 3 horas e meia**." },
    { table: {
      head: ['Prova', 'Duração', 'Partes', 'Questões', 'O que avalia'],
      rows: [
        ['Reading and Use of English', '1 hora e 15 minutos', '7', '52', 'Gramática, vocabulário e compreensão de texto'],
        ['Writing', '1 hora e 20 minutos', '2', '2 textos', 'Uma redação e um texto à escolha, de 140 a 190 palavras cada'],
        ['Listening', 'Cerca de 40 minutos', '4', '30', 'Compreensão oral; cada gravação toca duas vezes'],
        ['Speaking', '14 minutos por dupla', '4', '–', 'Falar sozinho, com o examinador e com outro candidato'],
      ],
      note: 'O Speaking dura 20 minutos quando três candidatos fazem a prova juntos. O formato é o mesmo no papel e no computador.',
    } },
    { p: "As cinco notas que você recebe, de Reading, Use of English, Writing, Listening e Speaking, **têm o mesmo peso**. Então, embora Reading and Use of English seja uma prova só, ela vale duas das suas cinco notas: um bom motivo para levá-la a sério." },

    { figure: { photo: 'b2-first-reading-book', alt: 'Uma pessoa lendo um livro de bolso, vista por cima do ombro', caption: 'Os textos de Reading and Use of English somam de 2.200 a 2.500 palavras: a velocidade de leitura conta tanto quanto a gramática.' } },

    { h: 'Reading and Use of English' },
    { p: "Esta prova dura 1 hora e 15 minutos e tem sete partes com 52 questões. As quatro primeiras partes são o **Use of English**: exercícios curtos que avaliam diretamente gramática e vocabulário. As três últimas são de leitura: textos mais longos tirados de artigos, relatórios, ficção, anúncios, cartas e outras fontes, com cerca de 2.200 a 2.500 palavras no total." },
    { h3: 'Partes 1 a 4: Use of English' },
    { p: "Na Part 1, um cloze de múltipla escolha, você lê um texto curto com oito lacunas e escolhe a palavra certa entre quatro opções. Ela avalia vocabulário: colocações, expressões fixas, phrasal verbs e palavras de sentido parecido. Na Part 2, um cloze aberto, há mais oito lacunas, mas **nenhuma opção**: você escreve uma palavra, quase sempre gramatical, como uma preposição, um artigo, um auxiliar ou um pronome. Na Part 3, formação de palavras, você transforma uma palavra dada para completar oito lacunas, por exemplo “decide” em “decision” ou “able” em “unable”." },
    { p: "A Part 4, as key word transformations, é a mais comentada. Você recebe uma frase e uma palavra-chave, e completa uma segunda frase com o mesmo sentido usando **de duas a cinco palavras**, incluindo a palavra-chave, que não pode ser alterada. Contrações como didn’t contam como duas palavras. São seis questões, e cada uma vale até dois pontos, porque a resposta é corrigida em duas metades. Nas partes 2, 3 e 4, a ortografia precisa estar correta." },
    { examples: [
      ['I haven’t seen Maria for three years. (SINCE) It ___ I saw Maria.', 'Resposta: **has been three years since** (cinco palavras, o máximo).'],
      ['It wasn’t necessary for us to book a table. (NEED) We ___ a table.', 'Resposta: **didn’t need to book**. São cinco palavras, porque didn’t conta como duas.'],
      ['“Can you help me?” Anna asked Ben. (WHETHER) Anna asked Ben ___ help her.', 'Resposta: **whether he could** (três palavras). É discurso indireto: can vira could, assim como em português “você pode” vira “se ele podia”.'],
    ] },
    { h3: 'Partes 5 a 7: Reading' },
    { p: "A Part 5 é um texto mais longo com seis questões de múltipla escolha sobre detalhes, opiniões e atitudes, cada uma valendo **dois pontos**. A Part 6 é um texto com lacunas: seis frases foram retiradas de um artigo e misturadas a uma sétima que não se encaixa em lugar nenhum, e você devolve cada uma ao seu lugar seguindo a lógica e as referências de um parágrafo para o outro. A Part 7 é de associação: dez questões em que você encontra qual texto, ou qual parte de um texto, menciona uma informação. Ela premia a leitura rápida mais do que a leitura minuciosa." },
    { note: { title: 'Dois pontos por questão nas partes 5 e 6', text: "As partes 5 e 6 têm só seis questões cada, mas cada questão vale dois pontos. Reserve tempo: **correr nos textos longos do final** custa mais do que um começo lento na Part 1.", draw: 'snail' } },

    { h: 'Writing' },
    { p: "A prova de Writing dura 1 hora e 20 minutos, e você escreve dois textos de **140 a 190 palavras** cada. A Part 1 é obrigatória: **uma redação** (essay) em que você dá sua opinião sobre um tema de interesse geral. Você recebe duas ideias para desenvolver e acrescenta uma terceira sua. A redação é escrita para o seu professor, então cabe um estilo neutro ou um pouco formal." },
    { p: "Na Part 2, você escolhe **uma tarefa de uma lista curta**. No B2 First, os formatos são artigo, e-mail ou carta, resenha (review) e relatório (report). Cada tarefa indica um leitor e um objetivo, como recomendar um lugar a um amigo ou relatar um evento da escola ao responsável por um grupo, e você é avaliado pelo quanto o texto funciona para esse leitor." },
    { p: "Os examinadores avaliam cada texto em **quatro escalas**: Content, se você fez tudo o que a tarefa pedia; Communicative Achievement, se o estilo e o formato combinam com o leitor; Organisation, se o texto se sustenta bem; e Language, a variedade e a correção da sua gramática e do seu vocabulário. A Cambridge também pede coerência com uma variedade do inglês: a ortografia britânica e a americana valem, desde que você não misture as duas." },
    { figure: { photo: 'b2-first-writing-notes', alt: 'Pessoas à mesa, uma anotando num caderno espiral ao lado de uma xícara de café', caption: 'As duas tarefas de Writing pedem de 140 a 190 palavras: alguns minutos de planejamento ajudam você a cobrir todos os pontos.' } },
    { note: { title: 'O número de palavras é uma referência', text: "Um texto curto demais pode não mostrar variedade suficiente ou deixar um ponto de fora; um longo demais pode fugir do tema. **Mire no meio da faixa** e use as palavras naquilo de que o leitor precisa.", draw: 'teacup' } },

    { h: 'Listening' },
    { p: "O Listening dura cerca de 40 minutos e tem quatro partes com 30 questões. Na Part 1, você ouve oito gravações curtas e sem relação entre si, de cerca de 30 segundos, e responde a uma questão de três opções sobre cada uma. Na Part 2, você ouve uma fala de três a quatro minutos e completa dez frases com palavras que escuta. Na Part 3, cinco pessoas falam sobre um tema em comum por cerca de 30 segundos cada, e você precisa **associar cada pessoa** a uma de oito afirmações. Na Part 4, você responde a sete questões de três opções sobre uma entrevista ou conversa de três a quatro minutos." },
    { p: "Cada gravação toca **duas vezes**. Use a primeira para entender a ideia geral e marcar uma resposta provisória, e a segunda para conferir. A Part 3 é a mais traiçoeira: três das oito afirmações sobram, e quem fala pode mencionar uma ideia de uma opção errada antes de dizer o que realmente pensa." },
    { figure: { photo: 'b2-first-headphones', alt: 'Um jovem de fones de ouvido olhando o celular', caption: 'Cada gravação do Listening toca duas vezes: a primeira para a ideia geral, a segunda para conferir a resposta.' } },

    { h: 'Speaking' },
    { p: "Normalmente você faz o Speaking **com outro candidato**, ou em um grupo de três, diante de dois examinadores. Um deles, o interlocutor, faz as perguntas e passa as tarefas; o outro, o assessor, ouve e dá as notas. A prova dura 14 minutos por dupla e tem quatro partes. Você é avaliado pelo seu próprio desempenho, não em comparação com o seu parceiro." },
    { p: "A Part 1 é uma entrevista curta, de cerca de dois minutos, com perguntas sobre você, seu trabalho ou estudos, seu tempo livre e seus planos. Na Part 2, cada candidato recebe duas fotos e fala sobre elas sozinho por um minuto, comparando-as e respondendo à pergunta escrita acima; depois você comenta as fotos do parceiro por cerca de 30 segundos. Na Part 3, você e o parceiro discutem uma pergunta com algumas ideias escritas por dois minutos e depois têm **mais um minuto para tomar uma decisão** juntos. Na Part 4, o examinador faz mais perguntas sobre o mesmo tema, e a conversa dura cerca de quatro minutos." },
    { p: "O assessor avalia Grammar and Vocabulary, Discourse Management, Pronunciation e **Interactive Communication**, e o interlocutor dá uma nota global (global achievement). A interação conta: nas partes 3 e 4, reagir ao que o parceiro diz, perguntar a opinião dele e construir em cima dela vale mais do que recitar um discurso pronto." },
    { figure: { photo: 'b2-first-street-chat', alt: 'Três amigos conversando numa rua ensolarada da cidade', caption: 'Na Part 3 você conversa com o parceiro por dois minutos e depois vocês têm um minuto para chegar a uma decisão.' } },

    { cta: true },

    { h: 'Como funciona a Cambridge English Scale' },
    { p: "Os resultados do B2 First são dados na **Cambridge English Scale**, uma escala de pontuação comum a todas as Cambridge English Qualifications. Você recebe uma nota separada para Reading, Use of English, Writing, Listening e Speaking, e a nota geral é a média das cinco. O conceito e o nível do CEFR dependem dessa nota geral." },
    { table: {
      head: ['Nota geral', 'Resultado', 'O que você recebe'],
      rows: [
        ['De 180 a 190', 'Conceito A', 'O certificado B2 First atestando nível C1'],
        ['De 173 a 179', 'Conceito B', 'O certificado B2 First de nível B2'],
        ['De 160 a 172', 'Conceito C', 'O certificado B2 First de nível B2'],
        ['De 140 a 159', 'Nível B1', 'Um certificado da Cambridge English de nível B1'],
        ['De 122 a 139', 'Sem certificado', 'A nota aparece no Statement of Results'],
      ],
      note: 'Todo candidato recebe um Statement of Results com as cinco notas e a nota geral.',
    } },
    { p: "Daí vêm duas consequências. Primeiro, **uma prova fraca não derruba você sozinha**: um Writing mais baixo pode ser compensado por um bom Listening e um bom Reading. Segundo, a escala funciona como rede de segurança. Se você não chegar ao B2 por pouco, com 140 a 159 ainda leva um certificado B1; e se for muito bem, com 180 ou mais leva o conceito A e um certificado de nível C1." },
    { p: "Um C1 no certificado do B2 First é uma vantagem real, mas não equivale a passar no C1 Advanced, que foi feito para avaliar todo o nível C1. Se uma universidade ou empresa pede especificamente o C1 Advanced, é esse o exame a fazer. Muitas instituições definem a exigência como uma nota geral mínima, e não como conceito, e a própria Cambridge chama a nota geral de **a informação mais importante** do resultado." },
    { quote: 'Cinco notas, uma média: uma prova ruim não decide o seu resultado.' },
    { note: { title: 'Olhe a nota, não só o conceito', text: "Se uma instituição pede uma nota mínima, confira sua nota geral no Statement of Results. Algumas também exigem um mínimo por habilidade, então **leia a exigência palavra por palavra**.", draw: 'parrot' } },

    { h: 'No papel ou no computador' },
    { p: "Você pode fazer o B2 First no papel ou no computador, em um centro de exames autorizado. **O conteúdo, os tempos e o formato são os mesmos**, e o certificado também. No computador você digita as respostas e, no fim do Listening, tem dois minutos para conferi-las; no papel você escreve em uma folha de respostas e tem cinco minutos para passar as respostas do Listening a limpo. O Speaking é sempre presencial." },
    { p: "A grande diferença prática é a rapidez. Os resultados do exame digital costumam sair **de 5 a 10 dias úteis** depois da prova, enquanto os do papel normalmente levam de 4 a 6 semanas. A Confirmation of Entry do seu centro informa a data final dos resultados. Se você tem um prazo para uma matrícula ou candidatura, essa diferença pode decidir o formato por você." },

    { h: 'B2 First ou B2 First for Schools?' },
    { p: "Existem duas versões do exame no mesmo nível. O **B2 First for Schools** tem as mesmas provas, partes, tempos e pontuação do B2 First, e o mesmo nível do CEFR. Só há uma diferença, na Part 2 do Writing: a versão for Schools pode incluir uma história (story), enquanto o relatório (report) só aparece na versão padrão." },
    { p: "A Cambridge faz o B2 First para adultos e o B2 First for Schools para quem está em idade escolar. O nível é o mesmo; só mudam **os temas e os textos**, escolhidos de acordo com os interesses e a experiência dos candidatos mais jovens. Se você está na escola, pergunte ao centro qual versão ele oferece." },

    { h: 'Validade e quem aceita' },
    { p: "Os certificados da Cambridge English **não têm prazo de validade**. Um B2 First aprovado este ano continua sendo um certificado válido daqui a vinte anos. Mas cada instituição decide quão recente o resultado precisa ser, e algumas universidades, empresas e órgãos públicos pedem um certificado recente. Confira antes de contar com um certificado antigo." },
    { p: "A Cambridge afirma que suas certificações são aceitas por **milhares de empresas e instituições de ensino** no mundo todo. O B2 First é reconhecido como prova de inglês intermediário superior para empregos na indústria, na administração e em serviços, e por muitas escolas e universidades para estudo. A Cambridge lista no site dela as instituições que o reconhecem, mas a palavra final é sempre da página de requisitos da universidade ou empresa à qual você vai se candidatar." },

    { h: 'B2 First ou IELTS?' },
    { p: "Os dois são muito comparados, e respondem a perguntas diferentes. O IELTS é um teste único para todos os níveis e dá uma nota de 0 a 9; a maioria das instituições aceita um resultado do IELTS por **dois anos**. O B2 First certifica um nível, com um certificado que não vence. No Listening do IELTS você ouve cada gravação uma vez e o Speaking é a sós com um examinador; no B2 First você ouve tudo duas vezes e normalmente fala com um parceiro." },
    { p: "Para imigração e muitas candidaturas a universidades em países de língua inglesa, muitas vezes é a própria instituição que pede o IELTS. Para **o currículo**, objetivos escolares e vagas em que você precisa comprovar o B2, o B2 First é muito conhecido e mantém o seu valor. Nosso artigo sobre IELTS ou Cambridge compara os dois em detalhe." },

    { h: 'Quanto tempo leva para se preparar' },
    { p: "A Cambridge English indica **horas de aprendizagem guiada** aproximadas para cada nível: cerca de 350 a 400 horas a partir do zero para o B1, e cerca de 500 a 600 para o B2. São referências, não regras, e contam horas com professor, mas mostram a escala: sair de um B1 sólido e chegar ao B2 costuma exigir **cerca de 150 a 200 horas** de aprendizagem guiada, além da sua prática pessoal." },
    { p: "A resposta honesta, então, depende de onde você parte. Se você já está no B2 e só precisa conhecer o formato, muitas vezes bastam de algumas semanas a dois ou três meses de prática regular. Se está no B1, conte com meses de trabalho constante no idioma e depois com o formato do exame. Com três horas de aula por semana, 150 a 200 horas guiadas significam **mais ou menos um ano ou mais** de curso." },

    { h: 'Um plano de preparação prático' },
    { p: "Comece com um **diagnóstico**: faça um simulado oficial completo com o tempo real, ou pelo menos uma prova de cada tipo. Corrija e anote sua nota em cada uma das cinco áreas. Assim você descobre se precisa de mais idioma ou de mais prática de exame, e onde investir suas horas." },
    { p: "No começo, construa o idioma. Leia artigos e contos curtos toda semana e mantenha um caderno de colocações, phrasal verbs e famílias de palavras, que alimentam diretamente as partes 1, 2 e 3. Pratique a **paráfrase**: pegue uma frase e diga de outro jeito. É exatamente a habilidade das key word transformations, e ela ajuda também no Writing e no Speaking." },
    { p: "Quando o idioma começar a fluir, trabalhe o exame parte por parte. Faça uma ou duas partes de Use of English várias vezes por semana, revise cada erro e anote por que estava errado. Escreva um texto por semana em um formato diferente da Part 2 e peça correção: **o retorno sobre os seus textos** vale mais do que escrever o dobro sem ele. Ouça podcasts e entrevistas e depois faça partes do Listening com cronômetro." },
    { p: "Pratique o Speaking em voz alta **com outra pessoa**. Cronometre seu minuto de fala no celular, compare as fotos em vez de descrever uma de cada vez e, na tarefa colaborativa, treine trazer o parceiro para a conversa e chegar a uma decisão antes de o minuto acabar." },
    { p: "Nas últimas quatro a seis semanas, faça **simulados completos** em condições de prova, de preferência um a cada uma ou duas semanas, e revise cada um com cuidado. Inscreva-se no exame quando suas notas nos simulados estiverem no nível da sua meta, não antes." },
    { p: "Na Alimun, as aulas ao vivo com um professor e o mesmo grupo pequeno dão a você um parceiro para conversar toda semana, e **o seu professor corrige a sua lição de casa**, que é do que a preparação para o Writing mais precisa. Não sabe em que nível está? O teste de nível situa você de A1 a C1 em poucos minutos." },

    { h: 'Erros comuns no dia da prova' },
    { mistakes: [
      ['Escrever seis palavras em uma key word transformation', 'Usar **de duas a cinco palavras**, incluindo a palavra-chave', 'Com mais de cinco palavras a resposta vale zero, mesmo com o sentido certo.'],
      ['Mudar a palavra-chave, por exemplo need para needed', 'Manter a palavra-chave **exatamente como está**', 'Se a palavra-chave for alterada ou faltar, a resposta não pontua.'],
      ['Descrever as fotos uma de cada vez na Part 2 do Speaking', '**Comparar** as duas fotos e responder à pergunta escrita acima', 'A tarefa pede para comparar e responder, não para descrever.'],
      ['Falar sem ouvir o parceiro na Part 3', 'Perguntar a opinião dele e **construir em cima do que ele diz**', 'A Interactive Communication é um dos critérios de avaliação.'],
      ['Escrever 240 palavras em uma review da Part 2', 'Ficar **entre 140 e 190 palavras**', 'Um texto longo demais pode ter conteúdo fora do tema e perder pontos.'],
    ] },
  ],
  quiz: [
    { q: 'Como o B2 First se chamava antes?', options: ['First Certificate in English (FCE)', 'Certificate in Advanced English', 'Preliminary English Test', 'IELTS General Training'], a: 0, why: 'O B2 First se chamou por décadas First Certificate in English, ou FCE.' },
    { q: 'Quantas questões tem Reading and Use of English?', options: ['30', '40', '52', '56'], a: 2, why: 'A prova tem 52 questões em sete partes e dura 1 hora e 15 minutos.' },
    { q: 'Quantas palavras você pode escrever em uma key word transformation?', options: ['Só uma', 'De uma a três', 'De duas a cinco, incluindo a palavra-chave', 'Até oito'], a: 2, why: 'A resposta deve ter de duas a cinco palavras, incluindo a palavra-chave, que não pode ser alterada.' },
    { q: 'Qual deve ser o tamanho de cada texto do Writing?', options: ['De 80 a 100 palavras', 'De 140 a 190 palavras', 'De 220 a 260 palavras', 'Pelo menos 250 palavras'], a: 1, why: 'As duas tarefas de Writing do B2 First pedem de 140 a 190 palavras.' },
    { q: 'Quantas vezes você ouve cada gravação do Listening?', options: ['Uma', 'Duas', 'Três', 'Só a Part 1 se repete'], a: 1, why: 'No Listening do B2 First cada gravação toca duas vezes.' },
    { q: 'Como é calculada a nota geral?', options: ['Só Reading e Writing contam', 'O Speaking vale o dobro', 'É a média de cinco notas com o mesmo peso', 'É a mais baixa das suas notas'], a: 2, why: 'A nota geral é a média de Reading, Use of English, Writing, Listening e Speaking.' },
    { q: 'Você tira 165 de nota geral. O que recebe?', options: ['Nenhum certificado', 'Um certificado B1', 'Conceito C e um certificado B2', 'Conceito A e um certificado C1'], a: 2, why: 'De 160 a 172 você recebe o conceito C e o certificado B2 First de nível B2.' },
    { q: 'Quando os resultados do B2 First digital costumam sair?', options: ['No mesmo dia', 'De 5 a 10 dias úteis depois', 'De 4 a 6 semanas depois', 'Três meses depois'], a: 1, why: 'Os resultados digitais costumam sair de 5 a 10 dias úteis depois; os do papel, de 4 a 6 semanas depois.' },
  ],
  faq: [
    ['O B2 First é o mesmo que o FCE?', 'Sim. B2 First é o nome atual do exame conhecido por anos como First Certificate in English, ou FCE. O nível, B2, agora faz parte do nome, e o certificado ainda traz “B2 First Certificate in English”.'],
    ['Dá para ser reprovado no B2 First?', 'Se a sua nota geral ficar abaixo de 160, você não recebe o certificado B2, mas com 140 a 159 ainda recebe um certificado de nível B1. Abaixo de 140, você recebe o Statement of Results sem certificado.'],
    ['O certificado B2 First vence?', 'Não. Os certificados da Cambridge English não têm prazo de validade. Algumas universidades e empresas pedem um resultado recente, então confira os requisitos delas antes de contar com um certificado antigo.'],
    ['A prova no computador é mais fácil?', 'Não. O conteúdo, os tempos, o formato e o certificado são os mesmos. As principais diferenças são que você digita as respostas e que os resultados saem mais rápido, normalmente em 5 a 10 dias úteis.'],
    ['Dá para tirar um certificado C1 com o B2 First?', 'Sim. Com uma nota geral de 180 a 190 você recebe o conceito A e um certificado atestando nível C1. Mas se uma instituição pede especificamente o C1 Advanced, você precisa fazer esse exame.'],
  ],
  related: ['ielts-or-cambridge', 'cefr-english', 'how-long-english'],
  sources: [
    ['B2 First, Cambridge English', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/first/'],
    ['Formato do B2 First', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/first/format/'],
    ['Resultados do B2 First', 'https://www.cambridgeenglish.org/exams-and-tests/first/results/'],
    ['Handbook do B2 First para professores', 'https://www.cambridgeenglish.org/images/167791-b2-first-handbook.pdf'],
    ['Cambridge English, horas de aprendizagem guiada', 'https://support.cambridgeenglish.org/hc/en-gb/articles/202838506-Guided-learning-hours'],
  ],
};
