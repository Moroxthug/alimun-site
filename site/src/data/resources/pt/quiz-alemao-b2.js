// Resource: quiz. German items stay German; explanations are in Portuguese.
export default {
  key: 'de-quiz-b2', site: 'pt', slug: 'quiz-alemao-b2', kind: 'quiz', course: 'German', level: 'B2',
  draw: 'ghost', tint: 'lime', published: '2026-10-26',
  title: 'Quiz rápido de alemão: dez perguntas no nível B2',
  metaTitle: 'Quiz de alemão B2 grátis: gramática e vocabulário online – Alimun',
  desc: 'Um quiz de alemão grátis com dez perguntas no nível B2: Konjunktiv II, voz passiva com verbos modais, adjetivos, n-Deklination e verbos com preposição.',
  lead: 'Dez perguntas sobre a gramática que você encontra no B2. Escolha uma resposta para ver por que ela está certa.',
  instructions: 'Escolha a melhor resposta.',
  about: [
    'O B2 é o nível em que você acompanha a maior parte de uma discussão sobre um assunto conhecido, explica seu ponto de vista em detalhes, fala do que teria ou poderia ter acontecido e escreve textos claros sobre muitos temas.',
    'Este quiz confere a gramática que separa quem fala bem num nível intermediário de quem fala com precisão: o Konjunktiv II, a voz passiva com verbos modais, a declinação dos adjetivos, os substantivos da n-Deklination e os verbos com preposição fixa. Cada resposta vem com uma explicação curta.',
  ],
  items: [
    { q: 'Wenn ich mehr Zeit ___, würde ich öfter reisen.', options: ['habe', 'hatte', 'hätte', 'hat'], a: 2, why: 'Uma condição irreal no presente usa o Konjunktiv II: wenn ich mehr Zeit hätte.' },
    { q: 'Wenn du mich angerufen ___, wäre ich gekommen.', options: ['hättest', 'wärst', 'würdest', 'hast'], a: 0, why: 'Uma condição irreal no passado usa hätte ou wäre mais o particípio passado, e anrufen forma o Perfekt com haben.' },
    { q: 'Der Antrag muss bis Freitag ___.', options: ['abgeben werden', 'abgegeben werden', 'abgegeben worden', 'abgegeben wird'], a: 1, why: 'A voz passiva com um verbo modal é o particípio passado mais werden no infinitivo: muss abgegeben werden.' },
    { q: 'Ich habe mir einen ___ Mantel gekauft.', options: ['warme', 'warmer', 'warmes', 'warmen'], a: 3, why: 'Depois de einen (acusativo masculino), o adjetivo termina em -en: einen warmen Mantel.' },
    { q: 'Bei ___ Wetter bleiben wir zu Hause.', options: ['schlechtem', 'schlechten', 'schlechtes', 'schlechter'], a: 0, why: 'Sem artigo, o próprio adjetivo mostra o caso: bei pede o dativo, e o dativo neutro é -em.' },
    { q: 'Ich habe gestern mit ___ gesprochen.', options: ['dem Nachbar', 'dem Nachbarn', 'den Nachbar', 'der Nachbar'], a: 1, why: 'Nachbar pertence à n-Deklination e recebe -n fora do nominativo singular: mit dem Nachbarn.' },
    { q: 'Die Ärztin untersucht ___.', options: ['den Patient', 'dem Patient', 'den Patienten', 'der Patienten'], a: 2, why: 'Patient é um substantivo da n-Deklination, então o acusativo é den Patienten.' },
    { q: 'Ich kann mich nicht ___ seinen Namen erinnern.', options: ['an', 'auf', 'für', 'über'], a: 0, why: 'O verbo é sich erinnern an mais o acusativo: ich erinnere mich an seinen Namen.' },
    { q: 'Ob wir fahren, hängt ___ dem Wetter ab.', options: ['an', 'mit', 'von', 'aus'], a: 2, why: 'O verbo é abhängen von mais o dativo: es hängt vom Wetter ab.' },
    { q: '___ wartest du? – Auf meinen Freund.', options: ['Worauf', 'Wofür', 'Woran', 'Auf wen'], a: 3, why: 'Quando a resposta é uma pessoa, a pergunta mantém a preposição e acrescenta wen ou wem: auf wen; worauf é usado para coisas.' },
  ],
  related: ['de-quiz-b1', 'de-quiz-c1', 'de-ex-b2'],
};
