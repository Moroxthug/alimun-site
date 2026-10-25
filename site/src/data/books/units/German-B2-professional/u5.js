// German B2 for work, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Feedback and difficult conversations',
  goal: 'Give and receive feedback and handle conflict.',
  art: 'teacup',
  tags: { skills: ['speaking', 'grammar', 'reading'], topics: ['feedback', 'softening', 'konjunktiv-ii-past', 'conflict', 'agreement'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Giving constructive feedback',
      about: 'Describe what you observed, explain the effect and suggest a change, in a friendly way.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Constructive feedback describes behaviour, not the person. A common structure has four steps: what you observed, what effect it had, what you wish for, and an open question. Sentences about yourself (*Ich-Botschaften*) sound less like an attack than sentences about the other person (*Du-Botschaften*): *Mir ist aufgefallen, dass …* instead of *Du bist immer …*' },
          { t: 'table', caption: 'Feedback in four steps', explain: ['head', 'col0'], head: ['Step', 'Example'], rows: [
            ['What you observed', 'Mir ist aufgefallen, dass die letzten zwei Berichte erst nach der Frist kamen.'],
            ['The effect', 'Dadurch mussten die Kollegen im Vertrieb auf die Zahlen warten.'],
            ['Your wish', 'Ich würde mir wünschen, dass du Bescheid gibst, wenn es knapp wird.'],
            ['An open question', 'Wie siehst du das? Was brauchst du dafür?'],
          ] },
        ],
        [
          { t: 'text', md: 'Feedback in German workplaces is often fairly direct. To soften criticism, use the **Konjunktiv II**, small words like *etwas* or *vielleicht*, and start with something positive that is true. For the past, *hätte … sollen* is still quite direct; *es wäre … gewesen, wenn …* sounds much more careful.' },
          { t: 'examples', items: [
            { s: 'Du **hättest** mich früher informieren **sollen**.', n: 'Konjunktiv II of the past with a modal verb: still quite direct.' },
            { s: '**Es wäre** hilfreich **gewesen**, wenn du mich früher informiert hättest.', n: 'Softer: it describes what would have helped.' },
            { s: 'Die Präsentation war inhaltlich sehr stark. Die Folien waren **vielleicht etwas** voll.', n: 'Positive first, then the criticism, softened with *vielleicht etwas*.' },
            { s: '**Was hältst du davon**, beim nächsten Mal mit einer Übersicht zu beginnen?', n: 'A suggestion in the form of a question.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the direct criticism with a softer version.', pairs: [
            ['Du kommst immer zu spät.', 'Mir ist aufgefallen, dass du diese Woche zweimal zu spät gekommen bist.'],
            ['Dein Bericht ist chaotisch.', 'Mit klaren Überschriften wäre der Bericht übersichtlicher.'],
            ['Du hörst nie zu.', 'Ich habe den Eindruck, dass meine Punkte nicht ganz angekommen sind.'],
            ['Das hättest du mir sagen müssen.', 'Es wäre gut gewesen, wenn du mir Bescheid gegeben hättest.'],
            ['Deine Folien sind viel zu voll.', 'Die Folien sind vielleicht etwas voll.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Which feedback is constructive?', items: [
            { q: 'Eine Kollegin hat in der Besprechung sehr lange gesprochen.', o: ['Deine Punkte waren gut. Beim nächsten Mal könntest du sie vielleicht etwas kürzer fassen.', 'Du redest einfach zu viel.', 'Niemand hat dir zugehört.'], why: 'Something positive first, then a suggestion in the Konjunktiv II.' },
            { q: 'Ein Mitarbeiter hat eine Frist verpasst.', o: ['Mir ist aufgefallen, dass die Frist verpasst wurde. Was ist passiert?', 'Du bist total unzuverlässig.', 'Das passiert dir ja ständig.'], why: 'It describes the facts and asks an open question instead of judging the person.' },
            { q: 'Ein Kollege hat eine gute Präsentation gehalten, aber ohne Zahlen.', o: ['Die Präsentation war sehr klar. Mit ein paar Zahlen wäre sie noch überzeugender gewesen.', 'Ohne Zahlen war die Präsentation wertlos.', 'Gut, aber leider ohne Zahlen. Schade.'], why: 'Praise that is true, then a concrete idea with the Konjunktiv II.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the softer sentences.', items: [
            { q: 'Es ___ hilfreich gewesen, wenn du mich angerufen hättest. (sein)', a: ['wäre', 'waere'], why: '*Es wäre … gewesen*: Konjunktiv II of the past.' },
            { q: 'Du ___ mich früher fragen können. (haben)', a: ['hättest', 'haettest'], why: '*hätte* + infinitive + modal verb: *Du hättest … fragen können.*' },
            { q: 'Mir ist ___, dass die Zahlen nicht aktuell sind. (auffallen)', a: ['aufgefallen'], why: '*auffallen*: Perfekt with *sein*, Partizip II *aufgefallen*.' },
            { q: 'Ich würde mir ___, dass wir pünktlich anfangen. (wünschen)', a: ['wünschen', 'wuenschen'], why: '*würde* + infinitive: *Ich würde mir wünschen, …*' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Handling disagreement and finding a solution',
      about: 'React to criticism, disagree calmly and agree on a solution together.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'In a difficult conversation it helps to stay calm and to separate the problem from the person. First listen and repeat what you understood. Then explain your view and look for a solution together. Phrases with *wir* show that you want to solve the problem as a team.' },
          { t: 'table', caption: 'In a difficult conversation', explain: ['head', 'col0'], head: ['Purpose', 'Phrase'], rows: [
            ['Receive feedback', 'Danke für die offene Rückmeldung. Das nehme ich mit.'],
            ['Repeat what you heard', 'Habe ich richtig verstanden, dass …?'],
            ['Explain your view', 'Aus meiner Sicht sieht das etwas anders aus.'],
            ['Ask for ideas', 'Was würde Ihnen helfen?'],
            ['Suggest a solution', 'Wie wäre es, wenn wir …?'],
            ['Agree', 'Können wir uns darauf einigen, dass …?'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Ärger um die Urlaubsplanung', lines: [
            { who: 'Katrin', s: 'Ibrahim, hast du kurz Zeit? Ich möchte mit dir über die Urlaubsplanung sprechen.' },
            { who: 'Ibrahim', s: 'Ja, klar. Ehrlich gesagt bin ich ziemlich enttäuscht, dass mein Urlaub im August abgelehnt wurde.' },
            { who: 'Katrin', s: 'Das verstehe ich. Habe ich richtig verstanden, dass du im August zu einer Familienfeier fahren möchtest?' },
            { who: 'Ibrahim', s: 'Genau, meine Schwester heiratet in Izmir. Das steht schon seit einem Jahr fest.' },
            { who: 'Katrin', s: 'Das wusste ich nicht. Das Problem ist, dass im August schon drei Kollegen fehlen. Aus meiner Sicht können wir nicht noch eine Person entbehren.' },
            { who: 'Ibrahim', s: 'Und wenn ich nur eine Woche statt zwei nehme?' },
            { who: 'Katrin', s: 'Das wäre schon eine Hilfe. Wie wäre es, wenn du außerdem mit Jonas sprichst? Vielleicht kann er seinen Urlaub um eine Woche verschieben.' },
            { who: 'Ibrahim', s: 'Gute Idee, ich frage ihn heute noch.' },
            { who: 'Katrin', s: 'Gut. Können wir uns darauf einigen, dass wir uns am Freitag noch einmal kurz zusammensetzen?' },
            { who: 'Ibrahim', s: 'Einverstanden. Danke, dass du dir Zeit genommen hast.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best reaction.', items: [
            { q: 'Ihre Chefin sagt, dass Ihr Bericht zu lang ist.', o: ['Danke für den Hinweis. Ich kürze ihn bis morgen.', 'Das ist nicht mein Problem.', 'Andere Berichte sind auch lang.'], why: 'Accept the feedback and offer a concrete step.' },
            { q: 'Ein Kollege sagt etwas, und Sie sind nicht sicher, ob Sie ihn richtig verstehen.', o: ['Habe ich richtig verstanden, dass du mehr Zeit brauchst?', 'Was redest du da?', 'Das ist falsch.'], why: 'Repeat what you heard as a question.' },
            { q: 'Sie sehen ein Problem anders als Ihre Kollegin.', o: ['Aus meiner Sicht sieht das etwas anders aus.', 'Du verstehst das nicht.', 'Das ist Unsinn.'], why: '*Aus meiner Sicht* presents your view as an opinion, not as a fact.' },
            { q: 'Sie möchten am Ende eine klare Vereinbarung.', o: ['Können wir uns darauf einigen, dass ich die Zahlen bis Montag schicke?', 'Machen Sie doch, was Sie wollen.', 'Das sehen wir dann.'], why: '*sich darauf einigen, dass …*: to agree that …' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Habe ich richtig verstanden, dass du enttäuscht bist?', why: 'A question with the verb first; in the *dass* clause *bist* goes to the end.' },
            { a: 'Wie wäre es, wenn wir die Aufgaben tauschen?', why: '*Wie wäre es, wenn …?*: the verb *tauschen* goes to the end.' },
            { a: 'Danke für die offene Rückmeldung.', why: 'A fixed phrase to receive feedback.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'Können wir uns ___ einigen, dass wir freitags früher anfangen?', a: ['darauf'], why: '*sich auf etwas einigen*: before a *dass* clause, *darauf*.' },
            { q: 'Wie ___ es, wenn wir die Aufgaben tauschen? (sein)', a: ['wäre', 'waere'], why: '*Wie wäre es, wenn …?*: a suggestion with the Konjunktiv II.' },
            { q: 'Mit diesem Vorschlag bin ich ___. (agree: e…)', a: ['einverstanden'], why: '*mit etwas einverstanden sein*: to agree with something.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words that refer to both speakers together.', items: [
            { s: 'Wie wäre es, wenn [wir] die Aufgaben neu verteilen?', why: '*wir* makes the solution a shared one.' },
            { s: 'Können [wir] [uns] darauf einigen, dass Jonas die Präsentation übernimmt?', why: '*wir* and *uns*: both people agree together.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Feedback culture',
      about: 'Read an article about feedback culture in German workplaces.',
      art: 'teacup',
      spreads: [
        [
          { t: 'reading', title: 'Ehrlich, aber nicht verletzend', md: '„Das war nicht gut.“ Mit diesem Satz hätten viele Menschen in Deutschland kein großes Problem, zumindest wenn es um die Arbeit geht. Die deutsche Arbeitskultur gilt bei vielen als eher direkt. Kritik wird oft offen ausgesprochen, und Lob fällt manchmal knapp aus. Ein bekannter Spruch fasst diese Haltung zusammen: „Nicht geschimpft ist genug gelobt.“\n\nFür Beschäftigte aus anderen Ländern kann das zunächst irritierend sein. Wer aus einer Kultur kommt, in der Kritik sehr vorsichtig verpackt wird, empfindet direkte Rückmeldungen schnell als unhöflich. Umgekehrt verstehen manche deutsche Führungskräfte nicht sofort, dass ein höfliches „Das ist interessant“ in anderen Kulturen eine klare Ablehnung sein kann.\n\nInzwischen setzen viele Unternehmen auf eine bewusstere Feedbackkultur. In Schulungen lernen Führungskräfte, Beobachtungen von Bewertungen zu trennen und konkrete Beispiele zu nennen. Statt „Ihre Präsentation war chaotisch“ heißt es dann etwa: „Mir fiel es schwer, Ihnen zu folgen, weil die Reihenfolge der Folien nicht klar war.“ Auch Lob soll konkret sein, damit es glaubwürdig wirkt.\n\nAußerdem gewinnt Feedback in beide Richtungen an Bedeutung. In manchen Firmen geben Mitarbeitende ihren Vorgesetzten regelmäßig eine Rückmeldung, oft anonym über einen Fragebogen. Das setzt Vertrauen voraus: Wer Kritik äußert, darf dafür keine Nachteile befürchten müssen.\n\nFachleute raten, Feedback nicht für das jährliche Mitarbeitergespräch aufzusparen. Kurze, regelmäßige Rückmeldungen seien wirksamer als eine lange Liste von Kritikpunkten am Ende des Jahres. Und eine Regel gilt fast überall: Kritik gehört unter vier Augen, nicht vor das ganze Team.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Die deutsche Arbeitskultur gilt bei vielen als eher direkt.', a: 't', why: '*Die deutsche Arbeitskultur gilt bei vielen als eher direkt.*' },
            { q: 'Lob wird in deutschen Firmen immer ausführlich formuliert.', a: 'f', why: '*Lob fällt manchmal knapp aus.*' },
            { q: '„Das ist interessant“ kann in manchen Kulturen eine Ablehnung bedeuten.', a: 't', why: '*… in anderen Kulturen eine klare Ablehnung sein kann.*' },
            { q: 'In Schulungen lernen Führungskräfte, Beobachtungen und Bewertungen zu trennen.', a: 't', why: '*… Beobachtungen von Bewertungen zu trennen.*' },
            { q: 'Alle Firmen in Deutschland nutzen anonyme Fragebögen.', a: 'f', why: 'Only *in manchen Firmen*.' },
            { q: 'Anonyme Fragebögen sind teurer als persönliche Gespräche.', a: 'ng', why: 'The article says nothing about costs.' },
            { q: 'Fachleute empfehlen, Feedback vor allem einmal im Jahr zu geben.', a: 'f', why: 'They recommend *kurze, regelmäßige Rückmeldungen*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the content and the language of the article.', items: [
            { q: '„Nicht geschimpft ist genug gelobt“ bedeutet:', o: ['Wenn der Chef nicht kritisiert, ist das schon ein Lob.', 'Man sollte jeden Tag loben.', 'Kritik ist am Arbeitsplatz verboten.'], why: 'No criticism already counts as praise.' },
            { q: 'Welcher Satz trennt Beobachtung und Bewertung?', o: ['Mir fiel es schwer, Ihnen zu folgen, weil die Reihenfolge der Folien nicht klar war.', 'Ihre Präsentation war chaotisch.', 'Sie können einfach nicht präsentieren.'], why: 'It describes the effect on the speaker and names a concrete reason.' },
            { q: 'Was setzt Feedback an Vorgesetzte voraus?', o: ['Vertrauen', 'eine Schulung', 'einen Vertrag'], why: '*Das setzt Vertrauen voraus.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Welcher Satz ist eine Ich-Botschaft?', o: ['Mir ist aufgefallen, dass die Zahlen fehlen.', 'Du vergisst immer die Zahlen.', 'Die Zahlen fehlen, wie immer.'], why: 'It starts from the speaker: *Mir ist aufgefallen …*' },
      { q: 'Es ___ besser gewesen, wenn wir vorher gesprochen hätten.', o: ['wäre', 'hätte', 'würde'], why: '*gewesen* goes with *sein*: *Es wäre … gewesen*.' },
      { q: 'Du ___ mir das früher sagen sollen.', o: ['hättest', 'wärst', 'würdest'], why: 'Konjunktiv II of the past with a modal verb: *hättest … sagen sollen*.' },
      { q: 'Sie möchten eine Lösung vorschlagen:', o: ['Wie wäre es, wenn wir die Termine tauschen?', 'Das ist nicht mein Problem.', 'Das haben wir immer so gemacht.'], why: '*Wie wäre es, wenn …?* opens a shared solution.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Mir ist ___, dass du in letzter Zeit sehr still bist. (auffallen)', a: ['aufgefallen'], why: 'Perfekt of *auffallen*: *ist aufgefallen*.' },
      { q: 'Können wir uns ___ einigen, dass du den Bericht übernimmst?', a: ['darauf'], why: '*sich darauf einigen, dass …*' },
      { q: 'Ich hätte mir ___, dass du mich fragst. (wünschen)', a: ['gewünscht', 'gewuenscht'], why: 'Konjunktiv II of the past: *hätte … gewünscht*.' },
      { q: 'Danke für die offene ___. (feedback: R…)', a: ['Rückmeldung', 'Rueckmeldung'], why: '*die Rückmeldung*: the German word for feedback.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the two halves.', pairs: [
      ['Habe ich richtig', 'verstanden, dass …?'],
      ['Aus meiner Sicht', 'sieht das etwas anders aus.'],
      ['Danke für den Hinweis,', 'das nehme ich mit.'],
      ['Können wir uns darauf', 'einigen, dass …?'],
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Aus meiner Sicht sieht das anders aus.', why: '*Aus meiner Sicht* first, then the verb *sieht*; *aus* goes to the end.' },
      { a: 'Es wäre hilfreich, wenn du mich anrufst.', why: 'In the *wenn* clause the verb *anrufst* goes to the end.' },
    ] },
  ],
};
