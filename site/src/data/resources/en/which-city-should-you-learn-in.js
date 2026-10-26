// Resource: fun. Each option votes for a drawing from the cast; the result is a city to learn English or German in.
export default {
  key: 'city-quiz', site: 'en', slug: 'which-city-should-you-learn-in', kind: 'fun', course: null, level: 'Just for fun',
  draw: 'suitcase', tint: 'mint', published: '2026-10-27',
  title: 'Which city should you learn your new language in?',
  metaTitle: 'Which city should you learn English or German in? – Alimun',
  desc: 'A free three-question quiz: London, Dublin, New York, Berlin, Vienna or Zurich? Find the city that matches the way you live and learn, then share it.',
  lead: 'London or Berlin? New York or Vienna? Three questions to find the city where you would learn English or German best.',
  about: [
    'Where you practice changes how you learn: a big busy city makes you speak, a calm one gives you time to listen.',
    'This quiz is just for fun. You do not need to move to learn, but it is nice to know where you would feel at home.',
  ],
  youAre: 'Your city: {}',
  buddy: {
    questions: [
      ['Your perfect evening?', [['A show in a big theater', 'teacup'], ['Live music in a cozy pub', 'cat'], ['A rooftop bar with a view', 'sun'], ['A club that opens at midnight', 'pretzel']]],
      ['Pick a breakfast:', [['Tea and toast', 'teacup'], ['A bagel on the go', 'sun'], ['Coffee and a slice of cake', 'croissant'], ['Fresh rolls from the bakery', 'pretzel']]],
      ['How do you like to travel around?', [['On the underground', 'teacup'], ['On foot, chatting to people', 'cat'], ['By tram, slowly', 'croissant'], ['By train, always on time', 'owl']]],
    ],
    results: {
      teacup: ['London', 'Theaters, museums and a cup of tea on every corner. You love a city full of history and energy.'],
      cat: ['Dublin', 'Friendly, musical and full of stories. You learn best by talking to everyone you meet.'],
      sun: ['New York', 'Fast, bright and open all night. You learn by jumping in and speaking from day one.'],
      pretzel: ['Berlin', 'Creative, relaxed and always awake. You like a city that lets you be yourself.'],
      croissant: ['Vienna', 'Coffee houses, music and elegant streets. You like to take your time and enjoy it.'],
      owl: ['Zurich', 'Calm, clean and perfectly on time. You like a plan and a beautiful view.'],
    },
  },
  related: ['buddy-quiz', 'german-word-quiz', 'british-american'],
};
