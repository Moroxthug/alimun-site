// German C2, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'Rhetoric and persuasion',
  goal: 'Understand how speeches persuade and use the devices yourself. Learn the three appeals, the devices of the speech (Anapher, Antithese, Chiasmus, Klimax), and how to read framing and loaded language critically.',
  art: 'parrot',
  tags: { skills: ['reading', 'listening', 'writing'], topics: ['Ethos', 'Pathos', 'Logos', 'Anapher', 'Antithese', 'Chiasmus', 'Klimax', 'framing', 'bias'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Ethos, Pathos, Logos',
      about: 'Recognise the three appeals a speaker uses to persuade.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'More than two thousand years ago, teachers of rhetoric in ancient Greece described three ways to persuade. They are still the basis of the art of speaking. **Ethos** is the appeal to **character and credibility**: *Als Krankenschwester sehe ich dieses Problem seit zwanzig Jahren jeden Tag.* **Pathos** is the appeal to **emotion**: *Stellen Sie sich ein Kind vor, das allein vor der geschlossenen Bibliothekstür steht.* **Logos** is the appeal to **logic and evidence**: *Bibliotheken kosten die Gemeinde weniger als ein Prozent ihres Haushalts und versorgen dennoch ein Drittel der Einwohner.* A strong speech uses all three.' },
          { t: 'table', caption: 'The three appeals', explain: ['head', 'col0'], head: ['Appeal', 'Aim', 'Example'], rows: [
            ['Ethos', 'make the audience trust the speaker', 'Als Krankenschwester sehe ich das täglich.'],
            ['Pathos', 'make the audience feel', 'Stellen Sie sich ein Kind vor der geschlossenen Tür vor.'],
            ['Logos', 'convince with reason and facts', 'Bibliotheken kosten weniger als ein Prozent des Haushalts.'],
          ] },
        ],
        [
          { t: 'text', md: 'Each appeal can be misused. **Ethos** without substance becomes **name-dropping** (*Ich kenne den Minister persönlich*). **Pathos** alone can become manipulation: a moving story that proves nothing. **Logos** that is too heavy may bore an audience. A skilled speaker opens with Ethos (*warum Sie mir zuhören sollten*), builds a picture with Pathos, then gives the facts with Logos, and often returns to Pathos at the end.' },
          { t: 'tip', art: 'owl', md: 'When you read a speech, mark each sentence with *E*, *P* or *L*. If most sentences are *P*, the speaker may rely on feeling more than proof. If most are *L*, the speech may be accurate but dry. The best speeches mix the three.' },
          { t: 'ex', kind: 'sort', h: 'Which appeal is it?', groups: ['Ethos', 'Pathos', 'Logos'], explain: ['groups'], items: [
            { s: 'Als Lehrerin seit dreißig Jahren weiß ich, was Kinder brauchen.', g: 0, why: 'Credibility: the speaker’s experience.' },
            { s: 'Sehen Sie das leere Klassenzimmer, den stillen Schulhof.', g: 1, why: 'Emotion: a vivid picture.' },
            { s: 'Die Ergebnisse sind seit Programmbeginn um zwölf Prozent gestiegen.', g: 2, why: 'Logic: a fact.' },
            { s: 'Ich wohne seit jeher in dieser Straße.', g: 0, why: 'Credibility.' },
            { s: 'Denken Sie an die Mutter, die sich kein einziges Buch leisten kann.', g: 1, why: 'Emotion.' },
            { s: 'Die Schließung der Bibliothek wird die Stadt mehr kosten, als sie einspart.', g: 2, why: 'Logic: cause and effect.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which appeal does the speaker mainly use?', items: [
            { q: '„Ich arbeite seit zwanzig Jahren in diesem Krankenhaus.“', o: ['Ethos', 'Pathos', 'Logos'], why: 'Credibility.' },
            { q: '„Stellen Sie sich vor, Sie verlieren Ihr Zuhause in einer einzigen Nacht.“', o: ['Pathos', 'Ethos', 'Logos'], why: 'Emotion.' },
            { q: '„Studien zeigen, dass Schlaf die Prüfungsergebnisse um fünfzehn Prozent verbessert.“', o: ['Logos', 'Pathos', 'Ethos'], why: 'Evidence.' },
            { q: '„Als Nachbar und Vater teile ich Ihre Sorge.“', o: ['Ethos', 'Logos', 'Pathos'], why: 'Building trust through a shared position.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the appeal with its aim.', pairs: [
            ['Ethos', 'make the audience trust the speaker'],
            ['Pathos', 'make the audience feel'],
            ['Logos', 'convince with reason and facts'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Anapher, Antithese, Chiasmus',
      about: 'Recognise and use the devices that give speeches rhythm and force.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Speakers use **devices** that make words easy to remember. **Die Anapher** repeats the same words at the start of successive sentences: *Wir werden nicht warten. Wir werden nicht schweigen. Wir werden nicht aufgeben.* **Die Antithese** sets two opposite ideas side by side: *Wir wählen die Hoffnung statt der Angst.* **Die Klimax** lists items of increasing strength: *ein Wort, ein Satz, ein Schrei.* **Der Chiasmus** reverses the order of two phrases: *Man soll arbeiten, um zu leben, nicht leben, um zu arbeiten.* **Die rhetorische Frage** needs no answer: *Wenn nicht wir, wer dann?*' },
          { t: 'table', caption: 'Devices of the speech', explain: ['head', 'col0'], head: ['Device', 'What it does', 'Example'], rows: [
            ['Anapher', 'repeats the opening words', 'Wir werden nicht warten. Wir werden nicht schweigen.'],
            ['Antithese', 'sets opposites side by side', 'Hoffnung statt Angst.'],
            ['Klimax', 'lists in rising strength', 'ein Wort, ein Satz, ein Schrei'],
            ['Chiasmus', 'reverses the order', 'arbeiten, um zu leben, nicht leben, um zu arbeiten'],
            ['rhetorische Frage', 'asks without needing an answer', 'Wenn nicht wir, wer dann?'],
          ] },
        ],
        [
          { t: 'text', md: 'An **extended metaphor** (*Bildhafte Rede, durchgehende Metapher*) carries one image through a whole speech: a speaker might compare a town to a ship and speak of *den Sturm überstehen*, *eine Mannschaft, die zusammenhält* and *einen sicheren Hafen*. It gives unity and colour. Do not mix images: a speaker who says *Wir müssen dieses Schiff durch das Feuer steuern* mixes two metaphors, and the audience may smile in the wrong place.' },
          { t: 'tip', art: 'owl', md: 'To use these devices, **keep them short and rhythmic**. Anaphora works best with **three** repetitions. In your own speech, choose **one** main device and repeat it, instead of using five different ones in a paragraph.' },
          { t: 'ex', kind: 'match', h: 'Match the device with its example.', pairs: [
            ['Anapher', 'Wir werden nicht warten. Wir werden nicht schweigen.'],
            ['Antithese', 'Hoffnung statt Angst.'],
            ['Chiasmus', 'arbeiten, um zu leben, nicht leben, um zu arbeiten'],
            ['Klimax', 'ein Wort, ein Satz, ein Schrei'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which device is used?', items: [
            { q: '„Wir bauen Häuser. Wir bauen Schulen. Wir bauen Hoffnung.“', o: ['Anapher', 'Chiasmus', 'Antithese'], why: 'The same words open each sentence.' },
            { q: '„Nicht Worte, sondern Taten.“', o: ['Antithese', 'Klimax', 'Anapher'], why: 'Two opposite ideas side by side.' },
            { q: '„Man isst, um zu leben; man lebt nicht, um zu essen.“', o: ['Chiasmus', 'Anapher', 'Klimax'], why: 'The order of the two phrases is reversed.' },
            { q: '„Wenn nicht jetzt, wann dann?“', o: ['rhetorische Frage', 'Klimax', 'Chiasmus'], why: 'A question that needs no answer.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite with the device given.', items: [
            { q: 'Wir geben nicht auf und gehen nicht still und vergessen nicht.', cue: 'Wir geben nicht auf. Wir', a: ['Wir geben nicht auf. Wir gehen nicht still. Wir vergessen nicht.'], why: 'Anaphora: three sentences with the same opening.' },
            { q: 'Eine Stadt, die sicher und gerecht und frei ist.', cue: 'Eine Stadt, die sicher,', a: ['Eine Stadt, die sicher, gerecht und frei ist.'], why: 'A list of three.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Which device?', groups: ['Anapher', 'Antithese'], explain: ['groups'], items: [
            { s: 'Wir hören zu. Wir lernen. Wir handeln.', g: 0, why: 'The same word opens each sentence.' },
            { s: 'Nicht die Zeit, sondern der Wille.', g: 1, why: 'Two opposite ideas.' },
            { s: 'Wir sind für die Schwachen da. Wir sind für die Armen da. Wir sind für Sie da.', g: 0, why: 'The same words open each sentence.' },
            { s: 'Kleine Schritte, große Sprünge.', g: 1, why: 'Contrast of small and great.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mixed metaphor.', items: [
            { s: 'Wir müssen dieses Schiff durch das [Feuer] des wirtschaftlichen Sturms steuern.', a: ['Wellen', 'Sturm', 'Klippen'], why: 'A ship needs a sea image: *Wellen*, *Sturm* or *Klippen*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Rahmung und wertende Wörter',
      about: 'Read critically and notice how the same event can be presented in two ways.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: '**Framing** (*Rahmung*) means presenting the same facts in a way that guides the reader’s view. *Die Stadt hat ihre Ausgaben um fünf Prozent gekürzt* and *Die Stadt hat 95 Prozent ihrer Leistungen erhalten* are both true, but they feel different. **Loaded words** (*wertende Wörter*) have a strong positive or negative connotation: *Steuerentlastung* against *Steuersenkung*; *Demonstranten* against *Randalierer*; *Reform* against *Kürzung*. **The passive** can hide who is responsible: *Es wurden Fehler gemacht* does not say by whom.' },
          { t: 'table', caption: 'How framing works', explain: ['head', 'col0'], head: ['Technique', 'Example', 'Effect'], rows: [
            ['selection of facts', 'Ausgaben um 5 % gekürzt / 95 % der Leistungen erhalten', 'a different feeling about the same facts'],
            ['loaded words', 'Steuerentlastung / Steuersenkung', 'softer or harsher colour'],
            ['passive to hide the doer', 'Es wurden Fehler gemacht.', 'no responsibility is named'],
            ['headline size', 'A small story in a large headline', 'makes it seem important'],
          ] },
        ],
        [
          { t: 'text', md: 'A critical reader asks four questions of any text: **Wer spricht?** **Was wird gesagt, und was wird weggelassen?** **Welche Wörter tragen ein Urteil?** **Wem nützt diese Version?** This is not cynicism; it is the basis of reading news, advertising and political speeches in any language. It also helps your own writing: if you know how framing works, you can choose to be fair.' },
          { t: 'tip', art: 'owl', md: 'In an exam, if you are asked to compare two reports of the same event, list the **loaded words** in each, say **what each leaves out**, and give the **effect**. Support each point with a short quotation.' },
          { t: 'ex', kind: 'sort', h: 'Does the word sound positive, or negative?', groups: ['positive', 'negative'], explain: ['groups'], items: [
            { s: 'Steuerentlastung', g: 0, why: 'Suggests tax is a burden: positive for the cut.' },
            { s: 'Regime', g: 1, why: 'More negative than *Regierung*.' },
            { s: 'entschlossene Menge', g: 0, why: 'A positive description of protesters.' },
            { s: 'Pöbel', g: 1, why: 'Negative: suggests contempt.' },
            { s: 'sparsamer Rat', g: 0, why: 'Approving: careful with money.' },
            { s: 'geiziger Rat', g: 1, why: 'Disapproving.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which version is the most neutral?', items: [
            { q: '', o: ['Der Rat hat das Budget um fünf Prozent gekürzt.', 'Der Rat hat das Budget zusammengestrichen.', 'Der Rat hat das Budget geschützt.'], why: 'The first states a fact without loaded words.' },
            { q: '', o: ['Tausende nahmen an dem Marsch teil.', 'Ein Mob verstopfte die Straßen.', 'Eine heldenhafte Menge füllte die Straßen.'], why: 'The first is neutral.' },
            { q: '', o: ['Das Unternehmen hat 200 Beschäftigte entlassen.', 'Das Unternehmen hat seine Belegschaft optimiert.', 'Das Unternehmen hat 200 Beschäftigte brutal auf die Straße gesetzt.'], why: 'The first names the action plainly.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Make the sentence name who is responsible.', items: [
            { q: 'Bei der Planung wurden Fehler gemacht.', cue: 'Die Planer', a: ['Die Planer haben bei der Planung Fehler gemacht.', 'Die Planer haben Fehler gemacht.'], why: 'The active voice names the doer.' },
            { q: 'Es wurde beschlossen, die Bibliothek zu schließen.', cue: 'Der Rat', a: ['Der Rat hat beschlossen, die Bibliothek zu schließen.'], why: 'The active voice names the doer.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Eine Rede für den Park',
      about: 'Read a speech and a commentary on how it persuades.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'Eine Rede für den Park', md: 'REDE\n\nFreunde, Nachbarn, Stadträte. Ich wohne seit vierzig Jahren neben diesem Park. Hier habe ich Radfahren gelernt; meine Kinder haben in seinem Teich schwimmen gelernt; mein Enkel wird auf seinem Rasen seine ersten Schritte machen. Ich bin keine Expertin. Ich bin eine Anwohnerin, und ich bin gekommen, um für ihn zu sprechen.\n\nStellen Sie sich diesen Park ohne seine Bäume vor. Stellen Sie sich den zugeschütteten Teich vor, die verschwundenen Bänke, den eingezäunten Spielplatz. Stellen Sie sich vor, Ihr Enkelkind fragt, wo das Grün geblieben ist, und Sie haben keine Antwort.\n\nDie Stadtverwaltung sagt, sie brauche das Grundstück für Wohnungen. Die Zahlen sagen etwas anderes: Die Stadt besitzt vierzig leere Gebäude, und der Park bietet saubere Luft, Schatten und einen Treffpunkt für dreitausend Menschen pro Woche. Wir verlangen nicht, dass die Stadt zwischen Wohnungen und Bäumen wählt. Wir verlangen, dass sie beides wählt.\n\nWir werden nicht schweigen. Wir werden nicht weichen. Wir werden nicht vergessen werden. Wenn nicht wir, wer dann? Wenn nicht jetzt, wann dann?\n\nKOMMENTAR\n\nDie Rednerin beginnt mit Ethos, mit vierzig Jahren Erinnerung statt Sachverstand. Der zweite Absatz ist reines Pathos: drei vorgestellte Verluste. Das Logos kommt im dritten, mit genauen Zahlen. Der Schluss verbindet Anapher, Klimax und zwei rhetorische Fragen.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Die Rednerin behauptet, sie sei eine Expertin für Parks.', a: 'f', why: '„Ich bin keine Expertin. Ich bin eine Anwohnerin.“' },
            { q: 'Die Stadtverwaltung sagt, sie brauche das Grundstück für Wohnungen.', a: 't', why: '„Sie brauche das Grundstück für Wohnungen.“' },
            { q: 'Die Stadt besitzt vierzig leere Gebäude.', a: 't', why: '„Die Stadt besitzt vierzig leere Gebäude.“' },
            { q: 'Die Rednerin will Wohnungen und Bäume gegeneinander stellen.', a: 'f', why: '„Wir verlangen nicht, dass die Stadt zwischen Wohnungen und Bäumen wählt.“' },
            { q: 'Der Kommentar sagt, der dritte Absatz appelliere vor allem an Gefühle.', a: 'f', why: '„Das Logos kommt im dritten.“' },
            { q: 'Der Enkel der Rednerin wohnt schon in der Stadt.', a: 'ng', why: 'The text says only that he will take his first steps there.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'What does the opening about forty years show?', o: ['Ethos: the speaker’s credibility and attachment.', 'Logos: a statistic.', 'Antithesis: two opposites.'], why: 'Credibility through experience.' },
            { q: 'What is the device in „Wir werden nicht schweigen. Wir werden nicht weichen. Wir werden nicht vergessen werden.“?', o: ['Anaphora', 'Chiasmus', 'Extended metaphor'], why: 'The same opening, repeated.' },
            { q: 'What is the function of „Stellen Sie sich vor … Stellen Sie sich vor …“?', o: ['Pathos through repetition.', 'Logos through evidence.', 'Ethos through experience.'], why: 'Emotion with anaphora.' },
            { q: 'Why does the speaker mention the forty empty buildings?', o: ['As logical evidence against the council’s plan.', 'To appeal to the council’s feelings.', 'To show the speaker’s authority.'], why: 'A fact: Logos.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the rhetorical questions and the repeated openings.', items: [
            { s: '[Wenn nicht wir, wer dann?] [Wenn nicht jetzt, wann dann?]', why: 'Two rhetorical questions.' },
            { s: '[Wir werden nicht schweigen. Wir werden nicht weichen. Wir werden nicht vergessen werden.]', why: 'Anaphora.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'Ich bin keine Expertin. Ich bin eine ___, und ich bin gekommen, um für ihn zu sprechen.', a: ['Anwohnerin'], why: 'The speaker’s role.' },
            { q: 'Wir verlangen, dass sie ___ wählt.', a: ['beides'], why: 'The speaker’s request.' },
            { q: 'Der Park bietet einen Treffpunkt für dreitausend ___ pro Woche.', a: ['Menschen'], why: 'The speaker’s fact.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Wir verlangen nicht, dass die Stadt zwischen Wohnungen und Bäumen wählt.', why: 'A sentence from the speech.' },
            { a: 'Das Logos kommt im dritten Absatz, mit genauen Zahlen.', why: 'A sentence from the commentary.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: '„Ich unterrichte seit dreißig Jahren.“ This is mainly…', o: ['Ethos', 'Pathos', 'Logos'], why: 'Credibility.' },
      { q: '„Man soll arbeiten, um zu leben, nicht leben, um zu arbeiten.“ This is…', o: ['Chiasmus', 'Anapher', 'Klimax'], why: 'The order is reversed.' },
      { q: '„Wir bauen. Wir wachsen. Wir gewinnen.“ This is…', o: ['Anapher', 'Antithese', 'Chiasmus'], why: 'The same opening repeated.' },
      { q: 'Which phrase is the most neutral?', o: ['Das Unternehmen hat 200 Beschäftigte entlassen.', 'Das Unternehmen hat seine Belegschaft optimiert.', 'Das Unternehmen hat 200 Beschäftigte brutal rausgeworfen.'], why: 'No loaded words.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the appeal with its aim.', pairs: [
      ['Ethos', 'make the audience trust the speaker'],
      ['Pathos', 'make the audience feel'],
      ['Logos', 'convince with reason and facts'],
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'Wenn nicht wir, wer dann? Das ist eine rhetorische ___.', a: ['Frage'], why: 'A question that needs no answer.' },
      { q: '„Es wurden Fehler gemacht“ benutzt das ___, um zu verbergen, wer verantwortlich ist.', a: ['Passiv'], why: 'The passive hides the doer.' },
      { q: 'Wir wählen die Hoffnung statt der Angst: das ist eine ___.', a: ['Antithese'], why: 'Two opposite ideas.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite, using the words given.', items: [
      { q: 'Bei der Planung wurden Fehler gemacht.', cue: 'Die Planer', a: ['Die Planer haben bei der Planung Fehler gemacht.', 'Die Planer haben Fehler gemacht.'], why: 'The active voice names the doer.' },
      { q: 'Eine Stadt, die sicher und gerecht und frei ist.', cue: 'Eine Stadt, die sicher,', a: ['Eine Stadt, die sicher, gerecht und frei ist.'], why: 'A list of three.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Wir müssen dieses Schiff durch das [Feuer] des Sturms steuern.', a: ['Wellen', 'Sturm', 'Klippen'], why: 'A ship needs a sea image.' },
      { s: 'Als Krankenschwester seit zwanzig Jahren benutze ich [Logos], um glaubwürdig zu wirken.', a: ['Ethos'], why: 'Credibility is Ethos.' },
    ] },
  ],
};
