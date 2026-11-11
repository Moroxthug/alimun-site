// Resource: quiz. German items stay German; explanations are in the reader's language.
export default {
  key: 'de-quiz-c1', site: 'en', slug: 'german-quiz-c1', kind: 'quiz', course: 'German', level: 'C1',
  draw: 'cactus', tint: 'sun', published: '2026-10-26',
  title: 'German quick quiz: ten questions at C1',
  metaTitle: 'Free German quiz C1: grammar and vocabulary – Alimun',
  desc: 'A free ten-question German quiz at C1 level: Konjunktiv I, participle phrases, nominal style, idioms and advanced connectors, with every answer explained.',
  lead: 'Ten questions on the grammar and expressions you meet at C1. Pick an answer to see why it is right.',
  instructions: 'Choose the best answer.',
  about: [
    'C1 is the level where you can read newspapers, reports and academic texts without much effort, express yourself fluently and precisely, and switch between everyday and formal German.',
    'This quiz checks the features of that formal register, such as reported speech in Konjunktiv I, long participle phrases before a noun and the nominal style, together with common idioms and connectors that need careful word order. Every answer comes with a short explanation.',
  ],
  items: [
    { q: 'Konjunktiv I: Der Sprecher sagte, das Unternehmen ___ keine Pläne für Entlassungen.', options: ['habe', 'hat', 'hätte', 'hatte'], a: 0, why: 'Formal reported speech uses Konjunktiv I, and for er, sie and es the form of haben is habe.' },
    { q: 'Die ___ Maßnahmen haben sich bewährt.', options: ['von der Regierung beschlossene', 'von der Regierung beschlossenen', 'beschließend von der Regierung', 'von der Regierung beschlossen'], a: 1, why: 'A participle phrase before the noun takes a normal adjective ending, and after plural die that ending is -en.' },
    { q: 'Der seit Jahren ___ Streit wurde endlich beigelegt.', options: ['angedauerte', 'andauernden', 'andauernde', 'angedauerten'], a: 2, why: 'The Partizip I andauernd describes something still going on, and after der in the nominative the ending is -e.' },
    { q: 'Wir müssen das Problem lösen. Die ___ des Problems hat Vorrang.', options: ['Lösen', 'Gelöstheit', 'Löserei', 'Lösung'], a: 3, why: 'The feminine noun from lösen is die Lösung; das Lösen would need a neuter article.' },
    { q: '___ seiner Krankheit hat er den Termin vergessen.', options: ['Trotz', 'Statt', 'Wegen', 'Mangels'], a: 2, why: 'Wegen plus the genitive gives a reason and turns a weil clause into a noun phrase.' },
    { q: 'Das geht mich nichts an. Das ist nicht mein ___.', options: ['Wein', 'Brot', 'Kaffee', 'Bier'], a: 3, why: 'Das ist nicht mein Bier means that is not my business.' },
    { q: 'Es hilft nichts, wir müssen in den sauren ___ beißen.', options: ['Apfel', 'Zitrone', 'Gurke', 'Kirsche'], a: 0, why: 'In den sauren Apfel beißen means to do something unpleasant because it has to be done.' },
    { q: 'Das stimmt doch nicht! Er hat dir einen ___ aufgebunden.', options: ['Hund', 'Bären', 'Fuchs', 'Wolf'], a: 1, why: 'Jemandem einen Bären aufbinden means to tell someone a tall tale.' },
    { q: 'Er ist sehr talentiert, ___ fehlt ihm die Erfahrung.', options: ['allerdings', 'obwohl', 'zumal', 'sofern'], a: 0, why: 'The verb comes right after the gap, so only the adverb allerdings fits; obwohl, zumal and sofern send the verb to the end.' },
    { q: 'Wir sollten das Angebot annehmen, ___ es nur noch bis Freitag gilt.', options: ['trotzdem', 'zumal', 'dennoch', 'folglich'], a: 1, why: 'Zumal (especially since) adds an extra reason and sends the verb to the end of its clause.' },
  ],
  related: ['de-quiz-b2', 'de-ex-c1', 'de-ex-b2'],
};
