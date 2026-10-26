// Resource: exercise. English items stay English; explanations are in Italian.
export default {
  key: 'en-ex-a2', site: 'it', slug: 'esercizio-inglese-a2-past-simple-verbi-irregolari', kind: 'exercise', course: 'English', level: 'A2',
  draw: 'snail', tint: 'sun', published: '2026-10-26',
  title: 'Esercizio di inglese: past simple dei verbi irregolari (A2)',
  metaTitle: 'Esercizi past simple verbi irregolari inglese A2 – Alimun',
  desc: 'Dodici domande gratis sul past simple per chi studia inglese al livello A2: went, saw, took, did e altri verbi irregolari, con una spiegazione per ogni risposta.',
  lead: 'Scegli la forma giusta del passato in ogni frase. Vedi subito se hai ragione, e perché.',
  instructions: 'Scegli la forma giusta.',
  about: [
    'Il past simple parla di azioni concluse in un momento del passato già finito: yesterday, last week, two years ago, in 2019. I verbi regolari aggiungono -ed (work, worked), ma molti dei verbi più comuni sono irregolari e hanno una forma del passato tutta loro, da imparare a memoria: go diventa went, see diventa saw, take diventa took, buy diventa bought. Il verbo be ha due forme al passato: was con I, he, she e it, e were con you, we e they.',
    "Le domande e le negazioni al passato usano did e didn't con tutte le persone, e dopo did il verbo principale torna alla forma base: \"Did you eat?\" e \"I didn't sleep well\", mai \"Did you ate\". Un errore comune è usare il participio passato (gone, seen, taken) al posto del past simple. Il participio va con have, come in \"I have seen it\", quindi da solo è sbagliato: si dice \"I saw it\", non \"I seen it\".",
  ],
  items: [
    { q: 'Yesterday I ___ to the beach.', options: ['goed', 'went', 'gone', 'go'], a: 1, why: 'Go è irregolare: il suo past simple è went.' },
    { q: 'She ___ a new phone last week.', options: ['bought', 'buyed', 'buy', 'boughted'], a: 0, why: 'Buy è irregolare: il suo past simple è bought.' },
    { q: 'We ___ a great movie on Saturday.', options: ['seen', 'saw', 'seed', 'see'], a: 1, why: 'Il past simple di see è saw; seen ha bisogno di have davanti.' },
    { q: 'Did you ___ breakfast this morning?', options: ['ate', 'eaten', 'eat', 'eated'], a: 2, why: 'Dopo did il verbo principale è alla forma base: Did you eat?' },
    { q: 'He ___ his keys at home this morning.', options: ['leaved', 'lefted', 'left', 'leave'], a: 2, why: 'Leave è irregolare: il suo past simple è left.' },
    { q: 'I ___ sleep well last night.', options: ["didn't", "don't", "wasn't"], a: 0, why: "Le negazioni al passato con i verbi normali usano didn't + la forma base del verbo." },
    { q: 'They ___ a lot of photos on vacation.', options: ['taken', 'taked', 'took'], a: 2, why: 'Il past simple di take è took; taken ha bisogno di have davanti.' },
    { q: 'Last night my grandfather ___ me a story.', options: ['told', 'telled', 'tells'], a: 0, why: 'Tell è irregolare: il suo past simple è told.' },
    { q: 'She ___ her friend at the coffee shop yesterday.', options: ['meeted', 'met', 'meets'], a: 1, why: 'Meet è irregolare: il suo past simple è met.' },
    { q: 'What time ___ you get up yesterday?', options: ['did', 'do', 'were'], a: 0, why: 'Le domande al passato con i verbi normali usano did + la forma base del verbo.' },
    { q: 'I ___ a letter to my aunt last month.', options: ['writed', 'written', 'wrote'], a: 2, why: 'Il past simple di write è wrote; written ha bisogno di have davanti.' },
    { q: 'We ___ very tired after the long walk.', options: ['was', 'were', 'are'], a: 1, why: 'Il passato di be con we, you e they è were.' },
  ],
  related: ['en-ex-a1', 'en-ex-b1', 'en-quiz-a2'],
};
