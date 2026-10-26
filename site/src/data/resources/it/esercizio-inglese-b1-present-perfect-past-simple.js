// Resource: exercise. English items stay English; explanations are in Italian.
export default {
  key: 'en-ex-b1', site: 'it', slug: 'esercizio-inglese-b1-present-perfect-past-simple', kind: 'exercise', course: 'English', level: 'B1',
  draw: 'owl', tint: 'coral', published: '2026-10-26',
  title: 'Esercizio di inglese: present perfect o past simple? (B1)',
  metaTitle: 'Esercizi present perfect o past simple (B1, gratis) – Alimun',
  desc: 'Dodici domande gratis per chi studia inglese al livello B1 sul present perfect e sul past simple, con le espressioni di tempo come indizi e ogni risposta spiegata.',
  lead: 'Scegli il present perfect o il past simple in ogni frase. Vedi subito se hai ragione, e perché.',
  instructions: 'Scegli il tempo giusto.',
  about: [
    "Usa il past simple per un'azione avvenuta in un momento concluso: yesterday, last Friday, two days ago, in 2019, when I was a child. Se la frase dice o fa capire chiaramente quando è successo, il past simple è la scelta giusta, e lo vogliono anche le domande con when: \"When did you move here?\" È anche il tempo per la vita conclusa di persone che non ci sono più, come in \"Leonardo da Vinci painted the Mona Lisa.\"",
    "Usa il present perfect (have o has + participio passato) quando il periodo arriva fino a oggi. Va con since e for quando la situazione è ancora vera (\"She has lived here since 2020\"), con le domande con how long (\"How long have you known her?\"), con \"This is the first time...\" e con periodi non ancora finiti, come all my life. Un test semplice: se puoi aggiungere un momento concluso come yesterday, scegli il past simple; se l'azione è collegata al presente, scegli il present perfect.",
  ],
  items: [
    { q: 'We ___ to Japan in 2019.', options: ['have gone', 'went', 'have been'], a: 1, why: 'In 2019 è un momento concluso, quindi usa il past simple.' },
    { q: 'She ___ in Boston since 2020.', options: ['has lived', 'lived', 'lives'], a: 0, why: 'Since + un punto di partenza indica una situazione che continua fino a oggi: present perfect.' },
    { q: 'I ___ my keys two days ago.', options: ['have lost', 'lose', 'lost'], a: 2, why: 'Ago indica un momento concluso, quindi usa il past simple.' },
    { q: 'How long ___ you known Maria?', options: ['did', 'have', 'do'], a: 1, why: 'Le domande con how long su una situazione ancora vera usano il present perfect.' },
    { q: 'This is the first time I ___ sushi.', options: ['ate', 'eat', 'have eaten'], a: 2, why: "Dopo \"This is the first time\" l'inglese usa il present perfect." },
    { q: 'When ___ you move to this apartment?', options: ['did', 'have', 'are'], a: 0, why: 'Le domande con when chiedono di un momento concluso, quindi vogliono il past simple.' },
    { q: 'They ___ married for ten years, and they are still very happy.', options: ['were', 'are', 'have been'], a: 2, why: 'For + una durata che continua fino a oggi vuole il present perfect.' },
    { q: 'Leonardo da Vinci ___ the Mona Lisa.', options: ['has painted', 'painted', 'paints'], a: 1, why: "La sua vita è conclusa, quindi l'azione appartiene a un tempo concluso: past simple." },
    { q: 'He ___ for the company since he left college.', options: ['has worked', 'worked', 'works'], a: 0, why: 'Since + un evento passato, con il lavoro che continua ancora, vuole il present perfect.' },
    { q: 'I ___ him last Friday at the party.', options: ['have seen', 'saw', 'see'], a: 1, why: 'Last Friday è un momento concluso, quindi usa il past simple.' },
    { q: "I ___ in this town all my life, and I don't want to leave.", options: ['lived', 'was living', 'have lived'], a: 2, why: 'All my life è un periodo non ancora finito, quindi usa il present perfect.' },
    { q: 'What ___ you do last weekend?', options: ['have', 'did', 'do'], a: 1, why: 'Last weekend è un momento concluso, quindi la domanda usa did.' },
  ],
  related: ['en-ex-a2', 'en-ex-b2', 'en-quiz-b1'],
};
