// Template: compare. Facts: IELTS (owners, Academic and General Training, bands 0-9, results usually
// accepted for two years), Cambridge English Qualifications (one exam per level, certificate does not
// expire). Alimun practises these formats in its mock tests and is not affiliated with either.
export default {
  key: 'ielts-or-cambridge',
  site: 'pt',
  slug: 'ielts-ou-cambridge-qual-certificado-escolher',
  template: 'compare',
  course: 'English',
  theme: 'levels',
  cover: ['IELTS', 'Cambridge'],
  published: '2026-10-26',
  updated: '2026-10-26',
  title: 'IELTS ou Cambridge: qual certificado de inglês fazer?',
  metaTitle: 'IELTS ou Cambridge (B2 First, C1 Advanced)? Como escolher – Alimun',
  desc: 'Como o IELTS e os exames Cambridge English, como B2 First e C1 Advanced, se diferenciam, e qual serve para um visto, uma universidade ou o seu currículo.',
  lead: 'Os dois comprovam o seu inglês, e os dois são reconhecidos no mundo inteiro. Mas funcionam de jeitos diferentes, e **o certo depende de para que você precisa dele**.',
  blocks: [
    { h: 'Os dois em resumo' },
    { panels: [
      ['IELTS', 'Uma prova para todos os níveis. Você recebe uma **nota de 0 a 9** em Listening, Reading, Writing e Speaking, além de uma nota geral. Existe em duas versões: Academic, para estudos, e General Training, muito usada para trabalho e imigração.'],
      ['Cambridge', 'Um exame para cada nível, como **B2 First, C1 Advanced e C2 Proficiency**. Você é aprovado no nível do exame, com uma pontuação na Cambridge English Scale, e o certificado não expira.'],
    ] },
    { h: 'Lado a lado' },
    { table: {
      head: ['', 'IELTS', 'Cambridge (B2 First, C1 Advanced)'],
      rows: [
        ['Aplicado por', 'British Council, IDP e Cambridge University Press & Assessment', 'Cambridge University Press & Assessment'],
        ['Resultado', 'Uma nota de 0 a 9 por habilidade e uma nota geral', 'Aprovação no nível do exame, com uma pontuação na Cambridge English Scale'],
        ['Níveis', 'Uma prova para todos os níveis', 'Um exame por nível, do A2 Key ao C2 Proficiency'],
        ['Prova oral', 'Individual, com um examinador', 'Normalmente em dupla, com dois examinadores'],
        ['Validade', 'A maioria das instituições aceita resultados de até dois anos', 'O certificado não expira, embora algumas instituições peçam um recente'],
      ],
      note: 'Confira as informações atualizadas nos sites oficiais do IELTS e da Cambridge English antes de agendar.',
    } },
    { h: 'Quando o IELTS é a melhor escolha' },
    { p: 'Se você precisa do inglês para **um visto ou para imigrar**, o IELTS costuma ser a prova indicada pelas autoridades, e algumas exigem uma versão específica, como a General Training. Ele também é muito aceito por universidades, principalmente no Reino Unido, na Austrália, no Canadá e na Nova Zelândia.' },
    { p: 'Como todo mundo faz a mesma prova, o IELTS também é uma boa opção se você **não tem certeza do seu nível**: a sua nota mostra onde você está, sem o risco de escolher um exame difícil ou fácil demais.' },
    { h: 'Quando a Cambridge é a melhor escolha' },
    { p: 'Se você quer um certificado **para o currículo que dure**, um exame Cambridge é uma ótima opção: ele não expira, e empregadores e universidades de toda a Europa conhecem bem o B2 First e o C1 Advanced.' },
    { p: 'Ele funciona melhor quando você **já conhece o seu nível**, já que cada exame é voltado para um nível. Preparar-se para um exame específico também dá a você um objetivo claro nos estudos.' },
    { verdict: { title: 'Nosso conselho', text: 'Comece pelo requisito, não pela prova. Se um consulado, uma universidade ou um empregador indicar um certificado, faça esse. Se a escolha for sua, faça o **IELTS para imigração e necessidades de curto prazo**, e o **Cambridge para uma comprovação duradoura** de um nível que você já atingiu.' } },
    { note: { title: 'Praticando os formatos', text: 'Na Alimun você pode praticar com tarefas no formato do B2 First, do C1 Advanced e do IELTS nos simulados. Não são materiais oficiais das provas, e a Alimun não tem vínculo com as instituições examinadoras.' } },
  ],
  faq: [
    ['O IELTS é mais difícil que o Cambridge?', 'Nenhum dos dois é mais difícil em si: eles são construídos de formas diferentes. O IELTS mede você em uma única escala, enquanto um exame Cambridge verifica se você atingiu um nível específico.'],
    ['Qual deles as universidades do Reino Unido aceitam?', 'A maioria das universidades do Reino Unido aceita o IELTS Academic, e muitas também aceitam o C1 Advanced ou o C2 Proficiency da Cambridge. Cada universidade informa as provas e as notas que aceita para cada curso.'],
    ['Dá para ser reprovado em um exame Cambridge?', 'Se a sua pontuação ficar abaixo do nível do exame, você pode receber um certificado do nível abaixo, ou nenhum certificado se a pontuação for baixa demais. No IELTS você sempre recebe uma nota.'],
  ],
  related: ['cefr-english', 'how-long-english', 'german-articles'],
  sources: [
    ['IELTS', 'https://ielts.org'],
    ['Certificados Cambridge English', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/'],
  ],
};
