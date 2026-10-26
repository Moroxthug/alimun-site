// Resource: game. British and American words for the same thing. Checked against Cambridge Dictionary (UK/US labels).
// The English words stay English; questions and explanations are in Italian.
export default {
  key: 'british-american', site: 'it', slug: 'inglese-britannico-americano-gioco', kind: 'game', course: 'English', level: 'Tutti i livelli',
  draw: 'suitcase', tint: 'coral', published: '2026-10-27',
  title: 'Inglese britannico o americano? Il gioco delle parole',
  metaTitle: 'Inglese britannico e americano: gioco, flat o apartment? – Alimun',
  desc: 'Un gioco gratis con le parole britanniche e americane per la stessa cosa: flat o apartment, lift o elevator, chips o fries. Dieci domande, tutte spiegate.',
  lead: 'Un flat a Londra è un apartment a New York, e le chips britanniche sono le fries americane. Mettiti alla prova con dieci parole di tutti i giorni.',
  instructions: 'Scegli la parola giusta.',
  about: [
    "L'inglese britannico e quello americano hanno in comune quasi tutta la grammatica e gran parte delle parole, ma decine di cose di tutti i giorni hanno nomi diversi sulle due sponde dell'Atlantico.",
    "Sono corretti tutti e due. L'importante è essere coerenti, e conoscerli entrambi per capire tutti, dalle serie TV britanniche ai film americani.",
  ],
  items: [
    { q: 'Un "flat" britannico, in americano è...', options: ['apartment', 'condo', 'studio', 'house'], a: 0, why: 'Flat britannico = apartment americano.' },
    { q: 'Un "elevator" americano, in britannico è...', options: ['escalator', 'lift', 'hoist', 'stairs'], a: 1, why: 'Elevator americano = lift britannico.' },
    { q: 'Le "chips" britanniche, in americano sono...', options: ['chips', 'crisps', 'fries', 'wedges'], a: 2, why: 'Chips britanniche = (French) fries americane. Le chips americane sono le crisps britanniche.' },
    { q: 'I "cookies" americani, in britannico sono...', options: ['biscuits', 'scones', 'cakes', 'crackers'], a: 0, why: 'Cookie americano = biscuit britannico.' },
    { q: 'Negli Stati Uniti i "pants" sono quelli che i britannici chiamano...', options: ['underwear', 'trousers', 'shorts', 'jeans'], a: 1, why: 'Pants americani = trousers britannici. In inglese britannico i pants sono le mutande, quindi attenzione.' },
    { q: 'Il "rubbish" britannico, in americano diventa...', options: ['litter', 'dust', 'scraps', 'trash'], a: 3, why: 'Rubbish britannico = trash americano (o garbage).' },
    { q: 'Una "vacation" americana, in britannico è...', options: ['break', 'holiday', 'leave', 'trip'], a: 1, why: 'Vacation americana = holiday britannico.' },
    { q: 'I britannici fanno la "queue". Gli americani stanno in...', options: ['a row', 'a line', 'a crowd', 'a group'], a: 1, why: 'Queue britannica = line americana.' },
    { q: 'Un americano fa il pieno di "gas". Un automobilista britannico usa...', options: ['fuel oil', 'diesel only', 'petrol', 'benzine'], a: 2, why: 'Gas (gasoline) americano = petrol britannico.' },
    { q: 'Un "mobile" britannico, in americano è...', options: ['cell phone', 'smartphone only', 'pager', 'landline'], a: 0, why: 'Mobile (phone) britannico = cell phone americano.' },
  ],
  pairs: [
    ['flat britannico', 'apartment americano'],
    ['lift britannico', 'elevator americano'],
    ['chips britanniche', 'fries americane'],
    ['crisps britanniche', 'chips americane'],
    ['biscuit britannico', 'cookie americano'],
    ['trousers britannici', 'pants americani'],
    ['holiday britannico', 'vacation americana'],
    ['queue britannica', 'line americana'],
  ],
  related: ['english-idioms', 'cefr-poster', 'en-quiz-a2'],
};
