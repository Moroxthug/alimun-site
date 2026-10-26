// Resource: fun. Each option votes for a buddy from the drawing cast; the most votes wins.
export default {
  key: 'buddy-quiz', site: 'es', slug: 'que-language-buddy-eres', kind: 'fun', course: null, level: 'Solo por diversión',
  draw: 'churro', tint: 'sun', published: '2026-10-26',
  title: '¿Qué language buddy eres?',
  metaTitle: '¿Qué language buddy eres? Un quiz divertido para aprender – Alimun',
  desc: 'Un quiz gratis de tres preguntas para quien aprende idiomas: descubre el buddy de Alimun que encaja con tu forma de aprender y compártelo.',
  lead: 'Tres preguntas sobre tu forma de aprender. Al final conoces a tu buddy y puedes compartirlo con un amigo.',
  about: [
    'Cada persona aprende un idioma de una forma un poco distinta. Hay quien aprende hablando, quien lo hace con un plan y quien prefiere las películas y la música.',
    'Este quiz es solo por diversión, pero el resultado dice algo cierto sobre ti: la forma en la que mejor aprendes es la que te hará seguir adelante.',
  ],
  buddy: {
    questions: [
      ['¿Cómo te gusta aprender?', [['Hablando con la gente', 'churro'], ['Con un plan claro y reglas', 'pretzel'], ['Con películas y música', 'croissant'], ['Con una taza de té y un buen libro', 'teacup']]],
      ['¿Tu fin de semana ideal?', [['Una comida larga con amigos', 'pizza'], ['Una escapada a un sitio nuevo', 'nata'], ['Un museo y luego un café', 'croissant'], ['Organizar la semana que viene', 'pretzel']]],
      ['Cuando te equivocas...', [['Me río y sigo adelante', 'churro'], ['Lo apunto para corregirlo', 'pretzel'], ['Pido a alguien que me lo explique', 'teacup'], ['Lo vuelvo a intentar, más alto', 'pizza']]],
    ],
    results: {
      churro: ['Churro', 'Cercano, sociable y sin miedo. Aprendes más rápido hablando.'],
      pretzel: ['Pretzel', 'Organizado y constante. Las reglas y las rutinas son tu superpoder.'],
      croissant: ['Cruasán', 'Curioso y con estilo. Las películas, la música y la cultura te atrapan.'],
      teacup: ['Taza de té', 'Tranquilo y reflexivo. Te gusta entender antes de hablar.'],
      pizza: ['Pizza', 'Generoso y expresivo. Aprendes con las manos y con el corazón.'],
      nata: ['Pastel de nata', 'Aventurero. Lo que te encanta son los sitios nuevos y las palabras nuevas.'],
    },
  },
  related: ['false-friends', 'en-quiz-b1', 'cefr-poster'],
};
