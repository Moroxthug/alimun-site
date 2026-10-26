// Resource: exercise. German items stay German; instructions and explanations are in French.
export default {
  key: 'de-ex-c1', site: 'fr', slug: 'exercice-allemand-c1-konjunktiv-discours-indirect', kind: 'exercise', course: 'German', level: 'C1',
  draw: 'dragon', tint: 'lime', published: '2026-10-26',
  title: "Exercice d'allemand : Konjunktiv II et Konjunktiv I (C1)",
  metaTitle: 'Exercice allemand Konjunktiv I et II, discours indirect C1 – Alimun',
  desc: "Douze questions gratuites sur le Konjunktiv II et le Konjunktiv I au discours indirect pour le niveau C1 en allemand, avec correction immédiate et explications.",
  lead: "Choisis la bonne forme du subjonctif dans chaque phrase. Tu vois tout de suite si tu as juste, et pourquoi.",
  instructions: 'Choisis la bonne forme du verbe.',
  about: [
    "Le Konjunktiv II exprime l'irréel, l'hypothèse ou la politesse : souhaits, conditions et conseils. Il se forme à partir du prétérit, souvent avec un Umlaut (hätte, wäre, käme), ou avec würde + infinitif pour la plupart des verbes réguliers. Pour le passé, on utilise hätte ou wäre avec le participe passé : \"Wenn ich das gewusst hätte, wäre ich gekommen.\"",
    "Le Konjunktiv I marque le discours indirect à l'écrit, surtout dans les infos et les textes soutenus. Il se forme sur le radical de l'infinitif + -e, et c'est la troisième personne du singulier qu'on rencontre le plus : er habe, sie komme, es sei. Quand une forme du Konjunktiv I est identique à l'indicatif, comme sie haben ou sie werden, l'allemand standard la remplace par le Konjunktiv II : \"Sie sagten, sie hätten keine Zeit.\"",
  ],
  items: [
    { q: 'Wenn ich mehr Zeit ___, würde ich öfter reisen.', options: ['habe', 'hätte', 'hatte'], a: 1, why: 'Une condition irréelle au présent utilise le Konjunktiv II : wenn ich mehr Zeit hätte.' },
    { q: 'Der Minister sagte, er ___ von dem Plan nichts gewusst.', options: ['sei', 'habe', 'wäre'], a: 1, why: 'Le discours indirect utilise le Konjunktiv I, et wissen forme son passé avec haben : er habe gewusst.' },
    { q: 'Die Sprecherin erklärte, das Unternehmen ___ an einer Lösung.', options: ['arbeiten', 'arbeitete', 'arbeite'], a: 2, why: 'Au discours indirect, la troisième personne du singulier du Konjunktiv I se termine en -e : das Unternehmen arbeite.' },
    { q: 'Die Nachbarn sagten, sie ___ am Wochenende keine Zeit.', options: ['hätten', 'habe', 'hätte', 'hatten'], a: 0, why: "La forme sie haben du Konjunktiv I est identique à l'indicatif, donc on la remplace par le Konjunktiv II : sie hätten." },
    { q: 'Wenn ich du ___, würde ich das Angebot annehmen.', options: ['bin', 'sei', 'war', 'wäre'], a: 3, why: 'Un conseil formulé comme une condition irréelle utilise le Konjunktiv II de sein : wenn ich du wäre.' },
    { q: 'Hätte ich das nur früher ___!', options: ['wissen', 'gewusst', 'gewissen'], a: 1, why: 'Un souhait sur le passé utilise hätte avec le participe passé, et le participe de wissen est gewusst.' },
    { q: 'Er tut so, als ___ er hier der Chef.', options: ['ist', 'war', 'wäre'], a: 2, why: "Après als suivi directement du verbe, une comparaison avec quelque chose d'irréel demande le subjonctif : als wäre er der Chef." },
    { q: 'Wenn der Zug pünktlich gewesen ___, hätten wir den Anschluss erreicht.', options: ['wäre', 'hätte', 'ist'], a: 0, why: 'Une condition irréelle au passé utilise le Konjunktiv II, et sein forme son passé avec sein : wenn er gewesen wäre.' },
    { q: 'Die Polizei teilte mit, der Verdächtige ___ sich in Haft.', options: ['befinde', 'befinden', 'befänden'], a: 0, why: 'Le discours indirect utilise le Konjunktiv I, et un sujet au singulier demande la forme en -e : er befinde sich.' },
    { q: 'Er meinte, er ___ morgen wieder ins Büro.', options: ['kommen', 'komme', 'kämen'], a: 1, why: 'Le discours indirect utilise le Konjunktiv I, et la troisième personne du singulier est er komme.' },
    { q: 'Sie sagte, die Kollegen ___ morgen pünktlich kommen.', options: ['werde', 'wurden', 'würden'], a: 2, why: "La forme sie werden du Konjunktiv I est identique à l'indicatif, donc on la remplace par le Konjunktiv II : sie würden kommen." },
    { q: 'Die Firma behauptet, ihre Produkte ___ umweltfreundlich.', options: ['seid', 'seien', 'sein', 'sei'], a: 1, why: "Le discours indirect utilise le Konjunktiv I, et le pluriel de sein est seien, bien distinct de l'indicatif sind." },
  ],
  related: ['de-ex-b2', 'de-ex-b1', 'de-quiz-c1'],
};
