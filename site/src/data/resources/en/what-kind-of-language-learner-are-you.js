// Resource: fun. Each option votes for a learner type; the most votes wins. No word meanings to check against a dictionary: the types are playful, not a research-based "learning styles" test, and the about text says so.
export default {
  key: 'learner-type-quiz', site: 'en', slug: 'what-kind-of-language-learner-are-you', kind: 'fun', course: null, level: 'Just for fun',
  draw: 'owl', tint: 'mint', published: '2026-11-01',
  title: 'What kind of language learner are you?',
  metaTitle: 'What kind of language learner are you? A fun quiz – Alimun',
  desc: 'A free three-question quiz: are you a Chatterbox, a Planner, an Explorer, a Night Owl or a Bookworm? Find out, get one tip that fits, and share it.',
  lead: 'Three playful questions about your habits. At the end you meet your learner type, with one tip that suits the way you like to learn.',
  about: [
    'Some people learn a language by talking to everyone they meet, some by making lists, some through films and trips, some late at night and some with a good book.',
    'This quiz is just for fun, not a scientific test. Your result is a friendly nudge: the habits you already enjoy are the ones that will keep you going.',
  ],
  youAre: 'You are: {}',
  buddy: {
    questions: [
      ['Where do your new words come from?', [['Chatting with people', 'parrot'], ['A neat list in my notebook', 'cat'], ['A film or a series with subtitles', 'suitcase'], ['A book I cannot put down', 'teacup']]],
      ['When do you study best?', [['Late at night, when the house is quiet', 'owl'], ['At the same time every day', 'cat'], ['Whenever I find someone to talk to', 'parrot'], ['On a train, on the way somewhere', 'suitcase']]],
      ['Pick a perfect evening:', [['Dinner with friends from another country', 'parrot'], ['A novel and a pot of tea', 'teacup'], ['A foreign film and a plan for the next trip', 'suitcase'], ['Still awake after midnight, happily busy', 'owl']]],
    ],
    results: {
      parrot: ['The Chatterbox', 'You learn by talking, and mistakes do not scare you. Try using every new word out loud in a sentence of your own on the day you learn it.'],
      cat: ['The Planner', 'You love a schedule and a tidy list of words. Plan your week, but keep one session free to use those words in a real conversation.'],
      suitcase: ['The Explorer', 'Films, music and new places pull you in. Watch something you love in the language you are learning and write down three words you hear.'],
      owl: ['The Night Owl', 'Your brain wakes up when everyone else goes to sleep. Keep it short and regular before bed, then look at the same words again the next evening.'],
      teacup: ['The Bookworm', 'You learn best from reading, one page at a time. Choose a book a little below your level, so you read for the story and not for the dictionary.'],
    },
  },
  related: ['buddy-quiz', 'german-word-quiz', 'city-quiz'],
};
