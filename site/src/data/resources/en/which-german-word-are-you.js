// Resource: fun. Each option votes for a drawing from the cast; the result is a German word that fits.
export default {
  key: 'german-word-quiz', site: 'en', slug: 'which-german-word-are-you', kind: 'fun', course: 'German', level: 'Just for fun',
  draw: 'pretzel', tint: 'coral', published: '2026-10-27',
  title: 'Which German word are you?',
  metaTitle: 'Which German word are you? A fun quiz for learners – Alimun',
  desc: 'A free three-question quiz: find the German word that matches your personality, from Fernweh to Gemütlichkeit, then share it with a friend.',
  lead: 'Three quick questions, one German word that sums you up. Share it with a friend and learn what it means.',
  about: [
    'German has words for feelings other languages need a sentence for. One of them probably describes you better than you think.',
    'This quiz is just for fun, but every word in it is real and used every day, so you will finish with one new word you will not forget.',
  ],
  youAre: 'Your German word: {}',
  buddy: {
    questions: [
      ['It is Friday at six. You...', [['Book a trip somewhere new', 'suitcase'], ['Light a candle and make tea', 'teacup'], ['Close the laptop and celebrate', 'mug'], ['Plan the whole weekend', 'owl']]],
      ['Your favorite way to spend a Sunday?', [['A long walk somewhere far away', 'suitcase'], ['Blanket, sofa, good book', 'teacup'], ['A beer garden with friends', 'mug'], ['A song on repeat while you cook', 'parrot']]],
      ['Pick a sound:', [['A train leaving the station', 'suitcase'], ['Rain on the window', 'teacup'], ['Glasses clinking', 'mug'], ['A catchy chorus', 'parrot']]],
    ],
    results: {
      suitcase: ['Fernweh', 'A longing for faraway places. You are happiest on the way somewhere new.'],
      teacup: ['Gemütlichkeit', 'Warmth, comfort and belonging. You make every place feel cozy.'],
      mug: ['Feierabend', 'The joy of the end of the working day. You know how to switch off and enjoy it.'],
      owl: ['Ordnung', 'Order. You like a plan, and your plans actually work.'],
      parrot: ['Ohrwurm', 'A song stuck in your head. You bring rhythm and fun everywhere you go.'],
    },
  },
  related: ['untranslatable-german', 'german-idioms', 'buddy-quiz'],
};
