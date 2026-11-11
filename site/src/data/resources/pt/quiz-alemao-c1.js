// Resource: quiz. German items stay German; explanations are in Portuguese.
export default {
  key: 'de-quiz-c1', site: 'pt', slug: 'quiz-alemao-c1', kind: 'quiz', course: 'German', level: 'C1',
  draw: 'cactus', tint: 'sun', published: '2026-10-26',
  title: 'Quiz rápido de alemão: dez perguntas no nível C1',
  metaTitle: 'Quiz de alemão C1 grátis: gramática e vocabulário online – Alimun',
  desc: 'Um quiz de alemão grátis com dez perguntas no nível C1: Konjunktiv I, particípios, estilo nominal, expressões idiomáticas e conectivos, tudo explicado.',
  lead: 'Dez perguntas sobre a gramática e as expressões que você encontra no C1. Escolha uma resposta para ver por que ela está certa.',
  instructions: 'Escolha a melhor resposta.',
  about: [
    'O C1 é o nível em que você lê jornais, relatórios e textos acadêmicos sem muito esforço, se expressa com fluência e precisão e passa do alemão do dia a dia para o formal sem dificuldade.',
    'Este quiz confere as marcas desse registro formal, como o discurso indireto no Konjunktiv I, os longos grupos de particípio antes do substantivo e o estilo nominal, junto com expressões idiomáticas comuns e conectivos que exigem atenção à ordem das palavras. Cada resposta vem com uma explicação curta.',
  ],
  items: [
    { q: 'Konjunktiv I: Der Sprecher sagte, das Unternehmen ___ keine Pläne für Entlassungen.', options: ['habe', 'hat', 'hätte', 'hatte'], a: 0, why: 'O discurso indireto formal usa o Konjunktiv I, e para er, sie e es a forma de haben é habe.' },
    { q: 'Die ___ Maßnahmen haben sich bewährt.', options: ['von der Regierung beschlossene', 'von der Regierung beschlossenen', 'beschließend von der Regierung', 'von der Regierung beschlossen'], a: 1, why: 'Um grupo de particípio antes do substantivo recebe a terminação normal de adjetivo, e depois de die no plural essa terminação é -en.' },
    { q: 'Der seit Jahren ___ Streit wurde endlich beigelegt.', options: ['angedauerte', 'andauernden', 'andauernde', 'angedauerten'], a: 2, why: 'O Partizip I andauernd descreve algo que ainda está acontecendo, e depois de der no nominativo a terminação é -e.' },
    { q: 'Wir müssen das Problem lösen. Die ___ des Problems hat Vorrang.', options: ['Lösen', 'Gelöstheit', 'Löserei', 'Lösung'], a: 3, why: 'O substantivo feminino derivado de lösen é die Lösung; das Lösen pediria um artigo neutro.' },
    { q: '___ seiner Krankheit hat er den Termin vergessen.', options: ['Trotz', 'Statt', 'Wegen', 'Mangels'], a: 2, why: 'Wegen mais o genitivo indica uma causa e transforma uma oração com weil num grupo nominal.' },
    { q: 'Das geht mich nichts an. Das ist nicht mein ___.', options: ['Wein', 'Brot', 'Kaffee', 'Bier'], a: 3, why: 'Das ist nicht mein Bier significa isso não é da minha conta.' },
    { q: 'Es hilft nichts, wir müssen in den sauren ___ beißen.', options: ['Apfel', 'Zitrone', 'Gurke', 'Kirsche'], a: 0, why: 'In den sauren Apfel beißen significa fazer algo desagradável porque precisa ser feito.' },
    { q: 'Das stimmt doch nicht! Er hat dir einen ___ aufgebunden.', options: ['Hund', 'Bären', 'Fuchs', 'Wolf'], a: 1, why: 'Jemandem einen Bären aufbinden significa contar uma mentira a alguém, ou seja, enganar com uma história inventada.' },
    { q: 'Er ist sehr talentiert, ___ fehlt ihm die Erfahrung.', options: ['allerdings', 'obwohl', 'zumal', 'sofern'], a: 0, why: 'O verbo vem logo depois da lacuna, então só o advérbio allerdings serve; obwohl, zumal e sofern mandam o verbo para o final.' },
    { q: 'Wir sollten das Angebot annehmen, ___ es nur noch bis Freitag gilt.', options: ['trotzdem', 'zumal', 'dennoch', 'folglich'], a: 1, why: 'Zumal (ainda mais porque) acrescenta mais um motivo e manda o verbo para o final da oração.' },
  ],
  related: ['de-quiz-b2', 'de-ex-c1', 'de-ex-b2'],
};
