// Resource: quiz. German items stay German; explanations are in Portuguese.
export default {
  key: 'de-quiz-b1', site: 'pt', slug: 'quiz-alemao-b1', kind: 'quiz', course: 'German', level: 'B1',
  draw: 'sun', tint: 'mint', published: '2026-10-26',
  title: 'Quiz rápido de alemão: dez perguntas no nível B1',
  metaTitle: 'Quiz de alemão B1 grátis: gramática e vocabulário online – Alimun',
  desc: 'Um quiz de alemão grátis com dez perguntas no nível B1: weil, dass e obwohl, Präteritum, voz passiva, verbos reflexivos e preposições, com as respostas explicadas.',
  lead: 'Dez perguntas sobre a gramática que você encontra no B1. Escolha uma resposta para ver por que ela está certa.',
  instructions: 'Escolha a melhor resposta.',
  about: [
    'O B1 é o nível em que você se vira na maioria das situações em viagens ou no trabalho, conta uma história no passado, justifica suas opiniões e liga as ideias em frases mais longas.',
    'Este quiz confere as estruturas que tornam isso possível: orações subordinadas com weil, dass e obwohl, as formas do Präteritum, a voz passiva com werden, os verbos reflexivos e as preposições mais comuns. Cada resposta vem com uma explicação curta.',
  ],
  items: [
    { q: 'Ich lerne Deutsch, ___ ich in Wien arbeiten möchte.', options: ['weil', 'denn', 'deshalb', 'trotzdem'], a: 0, why: 'O verbo möchte fica no final, então só a conjunção subordinativa weil serve; denn, deshalb e trotzdem pedem outra ordem das palavras.' },
    { q: 'Er sagt, ___ er morgen keine Zeit hat.', options: ['ob', 'dass', 'wenn', 'was'], a: 1, why: 'Dass introduz o que alguém diz ou pensa: er sagt, dass ...' },
    { q: 'Er hat die Prüfung bestanden, ___ er kaum gelernt hat.', options: ['weil', 'damit', 'obwohl', 'dass'], a: 2, why: 'Obwohl (embora) introduz um contraste: ele passou mesmo tendo estudado pouco.' },
    { q: 'Als Kind ___ ich jeden Sommer bei meiner Oma.', options: ['war', 'bin', 'wäre', 'sei'], a: 0, why: 'Para o passado de sein, o alemão normalmente usa o Präteritum: ich war.' },
    { q: 'Gestern ___ wir einen langen Brief.', options: ['schreiben', 'schrieben', 'schreibten', 'geschrieben'], a: 1, why: 'Schreiben é um verbo forte, e o Präteritum é schrieb, com wir schrieben.' },
    { q: 'Die Briefe ___ jeden Morgen vom Postboten gebracht.', options: ['werden', 'sind', 'haben', 'wird'], a: 0, why: 'A voz passiva usa werden mais o particípio passado, e o sujeito no plural die Briefe pede werden.' },
    { q: 'Ich freue ___ auf das Wochenende.', options: ['mir', 'sich', 'mich', 'dich'], a: 2, why: 'Sich freuen é reflexivo, e com ich o pronome no acusativo é mich.' },
    { q: 'Ich putze ___ die Zähne.', options: ['mich', 'mir', 'sich', 'mein'], a: 1, why: 'Quando a frase já tem um objeto no acusativo (die Zähne), o pronome reflexivo fica no dativo: mir.' },
    { q: 'Wir fahren im Sommer ___ Italien.', options: ['zu', 'in', 'bei', 'nach'], a: 3, why: 'Para viagens a países e cidades sem artigo, o alemão usa nach: nach Italien, nach Berlin.' },
    { q: 'Ich interessiere mich sehr ___ Musik.', options: ['an', 'auf', 'über', 'für'], a: 3, why: 'O verbo é sich interessieren für: ich interessiere mich für Musik.' },
  ],
  related: ['de-quiz-a2', 'de-quiz-b2', 'de-ex-b1'],
};
