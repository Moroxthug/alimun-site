// Resource: quiz. English items stay English; explanations are in Spanish.
export default {
  key: 'en-quiz-c1', site: 'es', slug: 'quiz-ingles-c1', kind: 'quiz', course: 'English', level: 'C1',
  draw: 'alien', tint: 'mint', published: '2026-10-26',
  title: 'Quiz rápido de inglés: diez preguntas de nivel C1',
  metaTitle: 'Quiz de inglés C1 gratis: gramática y vocabulario – Alimun',
  desc: 'Un quiz de inglés gratis de diez preguntas de nivel C1: inversión, cleft sentences, collocations, expresiones idiomáticas y palabras fáciles de confundir.',
  lead: 'Diez preguntas sobre la gramática y las palabras que encuentras en el C1. Elige una respuesta para ver por qué es la correcta.',
  instructions: 'Elige la mejor respuesta.',
  about: [
    'En el C1 usas el inglés con flexibilidad en el trabajo, los estudios y la vida social. Entiendes textos largos y exigentes, captas lo que se dice entre líneas y te expresas con fluidez sin buscar las palabras. El objetivo deja de ser acertar y pasa a ser elegir la forma más precisa y natural de decir algo.',
    'Este quiz repasa la inversión después de expresiones negativas y condicionales, las cleft sentences para dar énfasis, collocations avanzadas, expresiones idiomáticas frecuentes y palabras que se parecen pero significan cosas distintas. Estos puntos también salen en el C1 Advanced y en el IELTS. Cada respuesta viene con una explicación breve.',
  ],
  items: [
    { q: 'Never ___ such a beautiful sunset.', options: ['I have seen', 'have I seen', 'I saw', 'did I saw'], a: 1, why: 'Cuando una frase empieza con una palabra negativa como never, el sujeto y el auxiliar cambian de lugar: never have I seen.' },
    { q: 'Not only ___ late, but he also forgot the tickets.', options: ['did he arrive', 'he arrived', 'he did arrive', 'arrived he'], a: 0, why: 'Después de not only al principio de la frase se usa el orden de una pregunta, con un auxiliar: not only did he arrive.' },
    { q: '___ I known about the problem, I would have helped.', options: ['If', 'Have', 'Had', 'Should'], a: 2, why: 'Had I known es un third conditional con inversión y significa lo mismo que if I had known.' },
    { q: '___ I need is a long vacation.', options: ['That', 'What', 'Which', 'It'], a: 1, why: 'Una cleft sentence con what pone el foco al final: what I need is a long vacation.' },
    { q: 'It was Maria ___ found the mistake, not Tom.', options: ['which', 'what', 'who', 'whom'], a: 2, why: 'En una it-cleft sobre una persona que es el sujeto se usa who (o that): it was Maria who found it.' },
    { q: 'The report ___ serious doubts about the project.', options: ['rose', 'arose', 'raised', 'lifted'], a: 2, why: 'Raise lleva complemento directo y se combina con doubts, questions y concerns; rise y arise no llevan complemento.' },
    { q: 'The decision ___ a storm of protest.', options: ['lit', 'fired', 'burned', 'sparked'], a: 3, why: 'Spark se combina con protest, debate y controversy y significa provocarlos de repente.' },
    { q: 'I expected the exam to be hard, but it was a ___.', options: ['cup of tea', 'piece of cake', 'slice of bread', 'bag of tricks'], a: 1, why: 'A piece of cake es una expresión idiomática para algo muy fácil, como decir que algo está chupado.' },
    { q: 'We will have to ___ the bullet and pay for the repairs.', options: ['chew', 'hit', 'take', 'bite'], a: 3, why: 'Bite the bullet significa aceptar algo desagradable que no se puede evitar.' },
    { q: 'The instructions were so ___ that nobody knew what to do.', options: ['ambivalent', 'ambitious', 'ambiguous', 'amiable'], a: 2, why: 'Ambiguous significa que admite más de una interpretación; ambivalent describe sentimientos encontrados, no textos.' },
  ],
  related: ['en-quiz-b2', 'en-ex-c1', 'en-ex-b2'],
};
