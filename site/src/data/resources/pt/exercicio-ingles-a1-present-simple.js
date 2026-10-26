// Resource: exercise. English items stay English; instructions and explanations are in Portuguese.
export default {
  key: 'en-ex-a1', site: 'pt', slug: 'exercicio-ingles-a1-present-simple', kind: 'exercise', course: 'English', level: 'A1',
  draw: 'teacup', tint: 'mint', published: '2026-10-26',
  title: 'Exercício de inglês: present simple (A1)',
  metaTitle: 'Exercícios de inglês present simple A1 com respostas – Alimun',
  desc: 'Doze perguntas grátis de present simple para quem estuda inglês no nível A1: am, is, are, do e does e o -s com he, she e it, com cada resposta explicada.',
  lead: 'Escolha a forma certa do verbo em cada frase. Você vê na hora se acertou e por quê.',
  instructions: 'Escolha a forma certa.',
  about: [
    'O present simple descreve hábitos, rotinas e fatos que são verdade de modo geral: I work in an office, she drinks tea, water boils at 100 degrees. Com o verbo be, use am com I, is com he, she e it, e are com you, we e they. Com os outros verbos, acrescente -s com he, she e it (she lives, he works), -es depois de ch, sh, s, x e o (he watches, she goes), e troque consoante + y no final por -ies (the baby cries). Have vira has.',
    'Perguntas e negativas com os outros verbos precisam de um auxiliar: do com I, you, we e they, e does com he, she e it. Depois de does e doesn\'t, o verbo principal volta para a forma base, então se diz "Does she live here?" e "He doesn\'t eat meat", nunca "Does she lives". O verbo be não precisa desse auxiliar: "Are you tired?" e "I am not ready."',
  ],
  items: [
    { q: 'She ___ in a big city.', options: ['live', 'lives', 'living'], a: 1, why: 'Com he, she e it, acrescente -s ao verbo: she lives.' },
    { q: 'They ___ from Brazil.', options: ['is', 'am', 'are'], a: 2, why: 'Com they, o verbo be é are: they are.' },
    { q: '___ you like coffee?', options: ['Do', 'Does', 'Are'], a: 0, why: 'Perguntas com you usam do + o verbo na forma base: Do you like...?' },
    { q: 'My brother ___ eat meat.', options: ["don't", "doesn't", "isn't"], a: 1, why: "My brother equivale a he, então a negativa é doesn't + o verbo na forma base." },
    { q: 'I ___ a student.', options: ['is', 'are', 'am'], a: 2, why: 'Com I, o verbo be é sempre am: I am.' },
    { q: 'He ___ TV every evening.', options: ['watches', 'watchs', 'watch'], a: 0, why: 'Verbos terminados em ch recebem -es com he, she e it: he watches.' },
    { q: '___ your sister work in a bank?', options: ['Do', 'Is', 'Does'], a: 2, why: 'Your sister equivale a she, então a pergunta usa does + o verbo na forma base.' },
    { q: 'My parents ___ have a car.', options: ["doesn't", "don't", "aren't"], a: 1, why: "My parents equivale a they, então a negativa é don't + o verbo na forma base." },
    { q: 'He ___ two brothers.', options: ['has', 'have', 'haves'], a: 0, why: 'Have é irregular: com he, she e it vira has.' },
    { q: 'The baby ___ a lot at night.', options: ['crys', 'cry', 'cries'], a: 2, why: 'Depois de consoante, o y final vira -ies: cry vira cries.' },
    { q: 'Where ___ he live?', options: ['do', 'does', 'is'], a: 1, why: 'Perguntas com he usam does, e o verbo principal fica na forma base: Where does he live?' },
    { q: "The store ___ at nine o'clock.", options: ['opens', 'open', 'opening'], a: 0, why: 'The store equivale a it, então o verbo recebe -s: it opens.' },
  ],
  related: ['en-ex-a2', 'en-quiz-a1', 'en-quiz-a2'],
};
