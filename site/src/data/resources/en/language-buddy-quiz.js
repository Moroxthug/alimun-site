// Resource: fun. Each option votes for a buddy from the drawing cast; the most votes wins.
export default {
  key: 'buddy-quiz', site: 'en', slug: 'which-language-buddy-are-you', kind: 'fun', course: null, level: 'Just for fun',
  draw: 'churro', tint: 'sun', published: '2026-10-26',
  title: 'Which language buddy are you?',
  metaTitle: 'Which language buddy are you? A fun quiz for learners – Alimun',
  desc: 'A free three-question quiz for language learners: find the Alimun buddy that matches the way you learn, then share it with a friend.',
  lead: 'Three questions about the way you learn. At the end you meet your buddy, and you can share it with a friend.',
  about: [
    'Everyone learns a language a little differently. Some people learn by talking, some by planning, some through films and music.',
    'This quiz is just for fun, but the result says something true about you: the way you learn best is the way you will keep going.',
  ],
  buddy: {
    questions: [
      ['How do you like to learn?', [['By talking with people', 'churro'], ['With a clear plan and rules', 'pretzel'], ['Through films and music', 'croissant'], ['With a cup of tea and a good book', 'teacup']]],
      ['Your ideal weekend?', [['A long lunch with friends', 'pizza'], ['A trip somewhere new', 'nata'], ['A museum, then a café', 'croissant'], ['Organizing next week', 'pretzel']]],
      ['When you make a mistake...', [['I laugh and keep going', 'churro'], ['I write it down to fix it', 'pretzel'], ['I ask someone to explain', 'teacup'], ['I try again, louder', 'pizza']]],
    ],
    results: {
      churro: ['Churro', 'Warm, social and fearless. You learn fastest by talking.'],
      pretzel: ['Pretzel', 'Organized and steady. Rules and routines are your superpower.'],
      croissant: ['Croissant', 'Curious and stylish. Films, music and culture pull you in.'],
      teacup: ['Teacup', 'Calm and thoughtful. You like to understand before you speak.'],
      pizza: ['Pizza', 'Generous and expressive. You learn with your hands and your heart.'],
      nata: ['Pastel de nata', 'Adventurous. New places and new words are what you love.'],
    },
  },
  related: ['false-friends', 'en-quiz-b1', 'cefr-poster'],
};
