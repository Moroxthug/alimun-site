// Resource: exercise. English items stay English; instructions and explanations are in Portuguese.
export default {
  key: 'en-ex-a2', site: 'pt', slug: 'exercicio-ingles-a2-past-simple-verbos-irregulares', kind: 'exercise', course: 'English', level: 'A2',
  draw: 'snail', tint: 'sun', published: '2026-10-26',
  title: 'Exercício de inglês: past simple com verbos irregulares (A2)',
  metaTitle: 'Exercícios de past simple com verbos irregulares (A2) – Alimun',
  desc: 'Doze perguntas grátis de past simple para quem estuda inglês no nível A2: went, saw, took, did e outros verbos irregulares, com uma explicação para cada resposta.',
  lead: 'Escolha a forma certa do passado em cada frase. Você vê na hora se acertou e por quê.',
  instructions: 'Escolha a forma certa.',
  about: [
    'O past simple fala de ações concluídas em um momento do passado que já terminou: yesterday, last week, two years ago, in 2019. Os verbos regulares recebem -ed (work, worked), mas muitos dos verbos mais comuns são irregulares e têm uma forma própria no passado que você aprende de cor: go vira went, see vira saw, take vira took, buy vira bought. O verbo be tem duas formas no passado: was com I, he, she e it, e were com you, we e they.',
    'Perguntas e negativas no passado usam did e didn\'t para todas as pessoas, e depois de did o verbo principal volta para a forma base: "Did you eat?" e "I didn\'t sleep well", nunca "Did you ate". Um erro comum é usar o past participle (gone, seen, taken) no lugar do past simple. O particípio acompanha have, como em "I have seen it", então sozinho ele está errado: diga "I saw it", e não "I seen it".',
  ],
  items: [
    { q: 'Yesterday I ___ to the beach.', options: ['goed', 'went', 'gone', 'go'], a: 1, why: 'Go é irregular: o past simple é went.' },
    { q: 'She ___ a new phone last week.', options: ['bought', 'buyed', 'buy', 'boughted'], a: 0, why: 'Buy é irregular: o past simple é bought.' },
    { q: 'We ___ a great movie on Saturday.', options: ['seen', 'saw', 'seed', 'see'], a: 1, why: 'O past simple de see é saw; seen precisa de have antes.' },
    { q: 'Did you ___ breakfast this morning?', options: ['ate', 'eaten', 'eat', 'eated'], a: 2, why: 'Depois de did, o verbo principal fica na forma base: Did you eat?' },
    { q: 'He ___ his keys at home this morning.', options: ['leaved', 'lefted', 'left', 'leave'], a: 2, why: 'Leave é irregular: o past simple é left.' },
    { q: 'I ___ sleep well last night.', options: ["didn't", "don't", "wasn't"], a: 0, why: "Negativas no passado com verbos comuns usam didn't + o verbo na forma base." },
    { q: 'They ___ a lot of photos on vacation.', options: ['taken', 'taked', 'took'], a: 2, why: 'O past simple de take é took; taken precisa de have antes.' },
    { q: 'Last night my grandfather ___ me a story.', options: ['told', 'telled', 'tells'], a: 0, why: 'Tell é irregular: o past simple é told.' },
    { q: 'She ___ her friend at the coffee shop yesterday.', options: ['meeted', 'met', 'meets'], a: 1, why: 'Meet é irregular: o past simple é met.' },
    { q: 'What time ___ you get up yesterday?', options: ['did', 'do', 'were'], a: 0, why: 'Perguntas no passado com verbos comuns usam did + o verbo na forma base.' },
    { q: 'I ___ a letter to my aunt last month.', options: ['writed', 'written', 'wrote'], a: 2, why: 'O past simple de write é wrote; written precisa de have antes.' },
    { q: 'We ___ very tired after the long walk.', options: ['was', 'were', 'are'], a: 1, why: 'O passado de be com we, you e they é were.' },
  ],
  related: ['en-ex-a1', 'en-ex-b1', 'en-quiz-a2'],
};
