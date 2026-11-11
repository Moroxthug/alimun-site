// Resource: quiz. German items stay German; explanations are in French.
export default {
  key: 'de-quiz-c1', site: 'fr', slug: 'quiz-allemand-c1', kind: 'quiz', course: 'German', level: 'C1',
  draw: 'cactus', tint: 'sun', published: '2026-10-26',
  title: "Quiz d'allemand rapide : dix questions de niveau C1",
  metaTitle: "Quiz d'allemand C1 gratuit : grammaire et vocabulaire – Alimun",
  desc: "Un quiz d'allemand gratuit de dix questions au niveau C1 : Konjunktiv I, participes épithètes, style nominal, expressions et connecteurs, réponses expliquées.",
  lead: "Dix questions sur la grammaire et les expressions que tu rencontres au niveau C1. Choisis une réponse pour voir pourquoi elle est juste.",
  instructions: 'Choisis la meilleure réponse.',
  about: [
    "Le C1, c'est le niveau où tu lis sans grand effort des journaux, des rapports et des textes universitaires, où tu t'exprimes avec aisance et précision, et où tu passes facilement de l'allemand courant à l'allemand soutenu.",
    "Ce quiz vérifie les traits de ce registre soutenu, comme le discours indirect au Konjunktiv I, les longs groupes participiaux placés devant le nom et le style nominal, ainsi que des expressions idiomatiques courantes et des connecteurs qui demandent un ordre des mots bien précis. Chaque réponse est accompagnée d'une courte explication.",
  ],
  items: [
    { q: 'Konjunktiv I: Der Sprecher sagte, das Unternehmen ___ keine Pläne für Entlassungen.', options: ['habe', 'hat', 'hätte', 'hatte'], a: 0, why: 'Le discours indirect soutenu utilise le Konjunktiv I, et pour er, sie et es la forme de haben est habe.' },
    { q: 'Die ___ Maßnahmen haben sich bewährt.', options: ['von der Regierung beschlossene', 'von der Regierung beschlossenen', 'beschließend von der Regierung', 'von der Regierung beschlossen'], a: 1, why: "Un groupe participial placé devant le nom prend une terminaison d'adjectif normale, et après die au pluriel cette terminaison est -en." },
    { q: 'Der seit Jahren ___ Streit wurde endlich beigelegt.', options: ['angedauerte', 'andauernden', 'andauernde', 'angedauerten'], a: 2, why: 'Le Partizip I andauernd décrit quelque chose qui dure encore, et après der au nominatif la terminaison est -e.' },
    { q: 'Wir müssen das Problem lösen. Die ___ des Problems hat Vorrang.', options: ['Lösen', 'Gelöstheit', 'Löserei', 'Lösung'], a: 3, why: 'Le nom féminin formé sur lösen est die Lösung ; das Lösen demanderait un article neutre.' },
    { q: '___ seiner Krankheit hat er den Termin vergessen.', options: ['Trotz', 'Statt', 'Wegen', 'Mangels'], a: 2, why: 'Wegen + génitif exprime une cause et transforme une subordonnée en weil en groupe nominal.' },
    { q: 'Das geht mich nichts an. Das ist nicht mein ___.', options: ['Wein', 'Brot', 'Kaffee', 'Bier'], a: 3, why: 'Das ist nicht mein Bier veut dire ce ne sont pas mes affaires.' },
    { q: 'Es hilft nichts, wir müssen in den sauren ___ beißen.', options: ['Apfel', 'Zitrone', 'Gurke', 'Kirsche'], a: 0, why: "In den sauren Apfel beißen veut dire faire quelque chose de désagréable parce qu'il le faut." },
    { q: 'Das stimmt doch nicht! Er hat dir einen ___ aufgebunden.', options: ['Hund', 'Bären', 'Fuchs', 'Wolf'], a: 1, why: "Jemandem einen Bären aufbinden veut dire raconter des histoires à quelqu'un, le mener en bateau." },
    { q: 'Er ist sehr talentiert, ___ fehlt ihm die Erfahrung.', options: ['allerdings', 'obwohl', 'zumal', 'sofern'], a: 0, why: "Le verbe vient juste après le trou, donc seul l'adverbe allerdings convient ; obwohl, zumal et sofern renvoient le verbe à la fin." },
    { q: 'Wir sollten das Angebot annehmen, ___ es nur noch bis Freitag gilt.', options: ['trotzdem', 'zumal', 'dennoch', 'folglich'], a: 1, why: "Zumal (d'autant plus que) ajoute une raison supplémentaire et renvoie le verbe à la fin de sa proposition." },
  ],
  related: ['de-quiz-b2', 'de-ex-c1', 'de-ex-b2'],
};
