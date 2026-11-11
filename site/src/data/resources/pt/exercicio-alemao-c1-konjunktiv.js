// Resource: exercise. German items stay German; instructions and explanations are in Portuguese.
export default {
  key: 'de-ex-c1', site: 'pt', slug: 'exercicio-alemao-c1-konjunktiv', kind: 'exercise', course: 'German', level: 'C1',
  draw: 'dragon', tint: 'lime', published: '2026-10-26',
  title: 'Exercício de alemão: Konjunktiv II e Konjunktiv I (C1)',
  metaTitle: 'Exercício de Konjunktiv em alemão: discurso indireto (C1) – Alimun',
  desc: 'Doze perguntas grátis sobre o Konjunktiv II e o Konjunktiv I no discurso indireto para o nível C1 de alemão, com correção na hora e cada resposta explicada.',
  lead: 'Escolha a forma certa do subjuntivo em cada frase. Você vê na hora se acertou e por quê.',
  instructions: 'Escolha a forma certa do verbo.',
  about: [
    'O Konjunktiv II expressa o que é irreal, hipotético ou educado: desejos, condições e conselhos. Ele é formado a partir do Präteritum, muitas vezes com trema (hätte, wäre, käme), ou com würde mais o infinitivo na maioria dos verbos regulares. Para o passado, use hätte ou wäre com o particípio passado: "Wenn ich das gewusst hätte, wäre ich gekommen."',
    'O Konjunktiv I marca o discurso indireto no alemão escrito, principalmente em notícias e textos formais. Ele é formado com o radical do infinitivo mais -e, então a terceira pessoa do singular é a forma que você mais vê: er habe, sie komme, es sei. Quando uma forma do Konjunktiv I é igual à do indicativo, como em sie haben ou sie werden, o alemão padrão a substitui pelo Konjunktiv II: "Sie sagten, sie hätten keine Zeit."',
  ],
  items: [
    { q: 'Wenn ich mehr Zeit ___, würde ich öfter reisen.', options: ['habe', 'hätte', 'hatte'], a: 1, why: 'Uma condição irreal no presente usa o Konjunktiv II: wenn ich mehr Zeit hätte.' },
    { q: 'Der Minister sagte, er ___ von dem Plan nichts gewusst.', options: ['sei', 'habe', 'wäre'], a: 1, why: 'O discurso indireto usa o Konjunktiv I, e wissen forma o passado com haben: er habe gewusst.' },
    { q: 'Die Sprecherin erklärte, das Unternehmen ___ an einer Lösung.', options: ['arbeiten', 'arbeitete', 'arbeite'], a: 2, why: 'No discurso indireto, a terceira pessoa do singular do Konjunktiv I termina em -e: das Unternehmen arbeite.' },
    { q: 'Die Nachbarn sagten, sie ___ am Wochenende keine Zeit.', options: ['hätten', 'habe', 'hätte', 'hatten'], a: 0, why: 'A forma sie haben do Konjunktiv I é igual à do indicativo, então é substituída pelo Konjunktiv II: sie hätten.' },
    { q: 'Wenn ich du ___, würde ich das Angebot annehmen.', options: ['bin', 'sei', 'war', 'wäre'], a: 3, why: 'Um conselho dado como condição irreal usa o Konjunktiv II de sein: wenn ich du wäre.' },
    { q: 'Hätte ich das nur früher ___!', options: ['wissen', 'gewusst', 'gewissen'], a: 1, why: 'Um desejo sobre o passado usa hätte com o particípio passado, e o particípio de wissen é gewusst.' },
    { q: 'Er tut so, als ___ er hier der Chef.', options: ['ist', 'war', 'wäre'], a: 2, why: 'Depois de als com o verbo logo em seguida, uma comparação com algo irreal pede o subjuntivo: als wäre er der Chef.' },
    { q: 'Wenn der Zug pünktlich gewesen ___, hätten wir den Anschluss erreicht.', options: ['wäre', 'hätte', 'ist'], a: 0, why: 'Uma condição irreal no passado usa o Konjunktiv II, e sein forma o passado com sein: wenn er gewesen wäre.' },
    { q: 'Die Polizei teilte mit, der Verdächtige ___ sich in Haft.', options: ['befinde', 'befinden', 'befänden'], a: 0, why: 'O discurso indireto usa o Konjunktiv I, e o sujeito no singular pede a forma terminada em -e: er befinde sich.' },
    { q: 'Er meinte, er ___ morgen wieder ins Büro.', options: ['kommen', 'komme', 'kämen'], a: 1, why: 'O discurso indireto usa o Konjunktiv I, e a terceira pessoa do singular é er komme.' },
    { q: 'Sie sagte, die Kollegen ___ morgen pünktlich kommen.', options: ['werde', 'wurden', 'würden'], a: 2, why: 'A forma sie werden do Konjunktiv I é igual à do indicativo, então é substituída pelo Konjunktiv II: sie würden kommen.' },
    { q: 'Die Firma behauptet, ihre Produkte ___ umweltfreundlich.', options: ['seid', 'seien', 'sein', 'sei'], a: 1, why: 'O discurso indireto usa o Konjunktiv I, e o plural de sein é seien, que se distingue bem do indicativo sind.' },
  ],
  related: ['de-ex-b2', 'de-ex-b1', 'de-quiz-c1'],
};
