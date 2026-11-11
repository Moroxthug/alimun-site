// German C2, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Precision and nuance',
  goal: 'Choose the exact word for the exact shade of meaning. Learn near-synonyms and their connotations, natural collocations and fixed pairs, euphemism and understatement.',
  art: 'pretzel',
  tags: { skills: ['vocabulary', 'reading', 'writing'], topics: ['near-synonyms', 'connotation', 'collocation', 'Zwillingsformeln', 'euphemism', 'understatement'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Blicken, starren, betrachten',
      about: 'Tell near-synonyms apart by what they suggest as well as what they mean.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'At C2, knowing that two words are close is not enough. Near-synonyms differ in **denotation** (what they describe) and in **connotation** (what they suggest: approval, disapproval, formality). Take the verbs of looking. **Schauen** is neutral and common in speech. **Einen Blick werfen** is a quick look. **Erblicken** is to catch sight of, often by chance. **Betrachten** is to look at something attentively, often with admiration. **Starren** is to look fixedly, often rudely. **Spähen** is to look carefully or secretly.' },
          { t: 'table', caption: 'Verbs of looking', explain: ['head', 'col0'], head: ['Verb', 'What it suggests', 'Example'], rows: [
            ['schauen', 'neutral, spoken', 'Sie schaut aus dem Fenster.'],
            ['einen Blick werfen', 'quick, casual', 'Er warf einen Blick auf die Uhr.'],
            ['erblicken', 'catch sight of, by chance', 'Ich erblickte den Präsidenten in der Menge.'],
            ['betrachten', 'attentive, often admiring', 'Sie betrachtete das Gemälde lange.'],
            ['starren', 'fixed, often rude', 'Er starrte mich an, ohne ein Wort zu sagen.'],
            ['spähen', 'carefully or secretly', 'Sie spähte durch den Vorhang.'],
          ] },
        ],
        [
          { t: 'text', md: 'Connotation matters even more with adjectives for people. A thin person may be **schlank** (positive), **dünn** (neutral), **zierlich** (small and delicate), **mager** (negative), **hager** (gaunt) or **dürr** (very thin, negative). Someone who spends little is **sparsam** (positive), **geizig** (negative) or **knauserig** (informal, negative). Someone who keeps going is **entschlossen** (positive) or **hartnäckig** (neutral to positive), but **stur** (negative).' },
          { t: 'tip', art: 'owl', md: 'A good dictionary marks connotation with labels such as *abwertend*, *umgangssprachlich*, *gehoben*. Use them. In an exam, one wrong connotation (*Sie ist geizig mit ihrer Zeit* said as praise) can change the whole message.' },
          { t: 'ex', kind: 'sort', h: 'Does the word praise, or criticise?', groups: ['praise', 'criticise'], explain: ['groups'], items: [
            { s: 'sparsam', g: 0, why: 'Approving: careful with money.' },
            { s: 'geizig', g: 1, why: 'Disapproving: unwilling to spend.' },
            { s: 'entschlossen', g: 0, why: 'Approving: firm and strong-minded.' },
            { s: 'stur', g: 1, why: 'Disapproving: refusing to change.' },
            { s: 'schlank', g: 0, why: 'Approving: thin in an attractive way.' },
            { s: 'dürr', g: 1, why: 'Disapproving: very thin.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the most precise word.', items: [
            { q: 'Er blieb vor dem Bild stehen und ___ es lange, begeistert.', o: ['betrachtete', 'erblickte', 'spähte'], why: '*Betrachten*: to look at attentively, with admiration.' },
            { q: 'Ich habe den Präsidenten nur kurz ___, sein Auto fuhr sehr schnell vorbei.', o: ['erblickt', 'betrachtet', 'angestarrt'], why: '*Erblicken*: to catch sight of, briefly.' },
            { q: 'Sie ___ hinter dem Vorhang hervor, um zu sehen, wer klingelte.', o: ['spähte', 'betrachtete', 'starrte'], why: '*Spähen*: to look carefully or secretly.' },
            { q: 'Mein Onkel ist sehr ___: Er verschwendet nichts, und ich bewundere ihn dafür.', o: ['sparsam', 'geizig', 'knauserig'], why: '*Sparsam* is positive; *geizig* and *knauserig* are negative.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a verb from the lesson (werfen, erblicken, betrachten, starren, spähen).', items: [
            { q: 'Es ist unhöflich, fremde Menschen in der U-Bahn anzu___.', a: ['starren'], why: '*Anstarren / starren*: to look fixedly.' },
            { q: 'Sie hat während der Besprechung einen Blick auf ihr Handy ___.', a: ['geworfen'], why: '*Einen Blick werfen*: a quick look.' },
            { q: 'Die Verliebten ___ den Sonnenuntergang. (looked at attentively)', a: ['betrachten'], why: '*Betrachten*: to look at attentively.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match each word with its meaning.', pairs: [
            ['dürr', 'sehr dünn, abwertend'],
            ['zierlich', 'klein und zart'],
            ['stur', 'unnachgiebig, abwertend'],
            ['hartnäckig', 'ausdauernd trotz Schwierigkeiten'],
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the word that gives the wrong impression.', items: [
            { s: 'Ich bewundere meine Großmutter: Sie ist so [geizig] und wirft nichts weg.', a: ['sparsam'], why: 'Praise needs a positive word: *sparsam*.' },
            { s: 'Unsere Chefin ist wunderbar [stur]: Sie gibt eine gute Idee nie auf.', a: ['entschlossen', 'hartnäckig'], why: 'The speaker approves: *entschlossen* or *hartnäckig*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Bitter enttäuscht, über kurz oder lang',
      about: 'Use natural collocations and fixed pairs of words.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Collocations are words that naturally go together. At C2, the test is not whether your sentence is correct, but whether it sounds as a German speaker would say it. Adverbs are selective: we say **bitter enttäuscht**, **tief bewegt**, **schwer verletzt**, **dringend empfohlen**, **hoch motiviert**. Nouns also pick their partners: **eine voreilige Schlussfolgerung**, **ein grober Fehler**, **ein vorgefasstes Urteil**, **bedrückendes Schweigen**. Verbs too: you **treffen** a decision, **schließen** a compromise, **ziehen** conclusions, **nehmen** consideration (*Rücksicht nehmen*).' },
          { t: 'table', caption: 'Collocations that sound natural', explain: ['head', 'col0'], head: ['Word', 'Natural partners', 'Not natural'], rows: [
            ['adverb + adjective', 'bitter enttäuscht, tief bewegt, schwer verletzt', 'bitter bewegt, dringend enttäuscht'],
            ['adjective + noun', 'ein grober Fehler, eine voreilige Schlussfolgerung', 'ein voreiliger Fehler, ein grobes Urteil'],
            ['verb + noun', 'eine Entscheidung treffen, einen Kompromiss schließen, Schlüsse ziehen', 'eine Entscheidung machen, einen Kompromiss machen'],
          ] },
        ],
        [
          { t: 'text', md: 'Fixed **pairs** (*Zwillingsformeln*) are two words joined by *und* or *oder*, always in the same order. **Über kurz oder lang** (sooner or later), **kurz und gut** (in short), **Hab und Gut** (all one’s belongings), **mit Kind und Kegel** (with the whole family), **hin und her** (back and forth), **nach und nach** (little by little). You cannot reverse them: *lang oder kurz* is wrong in the fixed phrase.' },
          { t: 'tip', art: 'owl', md: 'Learn a pair as one block, never reversed. When you meet a new collocation, write it in a full sentence in a notebook, with its register. A German speaker will not correct *eine Entscheidung machen*, but will notice it; the natural verb is *treffen*.' },
          { t: 'ex', kind: 'match', h: 'Match the fixed pair with its meaning.', pairs: [
            ['über kurz oder lang', 'at some point in the future'],
            ['Hab und Gut', 'all one’s belongings'],
            ['mit Kind und Kegel', 'with the whole family'],
            ['nach und nach', 'little by little'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the natural collocation.', items: [
            { q: 'Die Mannschaft war über das Ergebnis ___ enttäuscht.', o: ['bitter', 'dringend', 'hoch'], why: '*Bitter enttäuscht* is a fixed collocation.' },
            { q: 'Es wird ___ empfohlen, vorher zu reservieren.', o: ['dringend', 'tief', 'bitter'], why: '*Dringend empfohlen*.' },
            { q: 'In seinem Bericht steckt ein ___ Fehler: Das Budget fehlt.', o: ['grober', 'voreiliger', 'bedrückender'], why: '*Ein grober Fehler*: a serious mistake.' },
            { q: 'Nach langer Debatte konnten sie einen Kompromiss ___.', o: ['schließen', 'machen', 'tun'], why: '*Einen Kompromiss schließen*.' },
            { q: 'Wir müssen jetzt eine Entscheidung ___.', o: ['treffen', 'machen', 'geben'], why: '*Eine Entscheidung treffen*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the fixed pair.', items: [
            { q: 'Über kurz oder ___ werden wir uns entscheiden müssen.', a: ['lang'], why: '*Über kurz oder lang*.' },
            { q: 'Er hat seine ganze Hab und ___ verloren.', a: ['Gut'], why: '*Hab und Gut*.' },
            { q: 'Sie sind mit Kind und ___ umgezogen.', a: ['Kegel'], why: '*Mit Kind und Kegel*.' },
            { q: 'Nach und ___ habe ich mich an die Stadt gewöhnt.', a: ['nach'], why: '*Nach und nach*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite, using the words given.', items: [
            { q: 'Er hat sich für ein Haus entschieden.', cue: 'Er hat eine Entscheidung', a: ['Er hat eine Entscheidung getroffen.'], why: '*Eine Entscheidung treffen*.' },
            { q: 'Es ist sehr zu empfehlen, vorher zu reservieren.', cue: 'Es wird dringend', a: ['Es wird dringend empfohlen, vorher zu reservieren.'], why: '*Dringend empfohlen*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the unnatural collocation.', items: [
            { s: 'Er hat einen [voreiligen] Fehler gemacht, als er das Budget vergaß.', a: ['groben'], why: '*Ein grober Fehler*.' },
            { s: 'Sie haben einen Kompromiss [gemacht].', a: ['geschlossen'], why: '*Einen Kompromiss schließen*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Entschlafen, freistellen, nicht übel',
      about: 'Recognise euphemism and understatement, and decide when softening helps.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'A **euphemism** (*Euphemismus, Beschönigung*) replaces a direct word with a gentler one: **von uns gegangen** or **entschlafen** for *gestorben*, **freistellen** or **sich trennen von** for *entlassen*, **Personalabbau** for *Entlassungen*, **Kollateralschaden** for *zivile Opfer*. **Understatement** (*Untertreibung*) says less than the truth: **nicht gerade billig** means *very expensive*, **nicht übel** means *quite good*, **Das ist nicht ohne** means *that is quite something*. This litotes is common in everyday German.' },
          { t: 'table', caption: 'Euphemism and understatement', explain: ['head', 'col0'], head: ['Gentle phrase', 'Direct meaning', 'Effect'], rows: [
            ['von uns gegangen', 'gestorben', 'respect, comfort'],
            ['freistellen', 'von der Arbeit entbinden or entlassen', 'softens an employer’s action'],
            ['Personalabbau', 'Entlassungen', 'hides people behind a general word'],
            ['nicht übel', 'ziemlich gut', 'understatement'],
            ['nicht gerade billig', 'sehr teuer', 'understatement'],
          ] },
        ],
        [
          { t: 'text', md: 'Softening helps when it shows kindness: *Mein aufrichtiges Beileid* is better than *Es tut mir leid, dass er tot ist* at a funeral. It hides the truth when it protects the powerful: *Freisetzung von Arbeitskräften* for *Entlassung*, *Kollateralschäden* for *getötete Zivilisten*. A careful reader asks: who benefits from the softer word?' },
          { t: 'tip', art: 'owl', md: 'In your own writing, use a euphemism only when the plain word would hurt your reader. In reports and essays, plain words show confidence: write *Das Unternehmen hat vierzig Mitarbeiter entlassen*, not *Das Unternehmen hat sich von vierzig Kolleginnen und Kollegen getrennt*.' },
          { t: 'ex', kind: 'sort', h: 'Kind softening, or hiding the truth?', groups: ['kind softening', 'hiding the truth'], explain: ['groups'], items: [
            { s: 'Mein aufrichtiges Beileid.', g: 0, why: 'Gentle, at a moment of grief.' },
            { s: 'Das Werk wird umstrukturiert.', g: 1, why: 'A vague word that can hide job losses.' },
            { s: 'Unsere Großmutter ist friedlich entschlafen.', g: 0, why: 'A gentle way to say it to the family.' },
            { s: 'Es gab Kollateralschäden.', g: 1, why: 'Hides the fact that people were killed.' },
            { s: 'Er ist zurzeit zwischen zwei Jobs.', g: 0, why: 'Avoids embarrassment, harms nobody.' },
            { s: 'Der Minister hat es mit der Wahrheit nicht so genau genommen.', g: 1, why: 'A polite way to say he lied.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What does the speaker really mean?', items: [
            { q: '„Der Film ist nicht übel“, sagt der Kritiker.', o: ['Er ist ziemlich gut.', 'Er ist sehr schlecht.', 'Er ist langweilig.'], why: 'Understatement: *nicht übel* means quite good.' },
            { q: '„Das ist nicht ohne“, sagt der Arzt über die Verletzung.', o: ['Sie ist ziemlich ernst.', 'Sie ist harmlos.', 'Sie ist geheilt.'], why: '*Nicht ohne* = not trivial.' },
            { q: '„Wir müssen uns leider von Ihnen trennen.“', o: ['Sie sind entlassen.', 'Sie werden befördert.', 'Sie haben Urlaub.'], why: 'A euphemism for *entlassen*.' },
            { q: 'Die Uhr war „nicht gerade billig“.', o: ['Sie war sehr teuer.', 'Sie war sehr günstig.', 'Sie war kaputt.'], why: 'Understatement.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it plainly.', items: [
            { q: 'Das Unternehmen hat sich von vierzig Mitarbeitern getrennt.', cue: 'Das Unternehmen hat vierzig Mitarbeiter', a: ['Das Unternehmen hat vierzig Mitarbeiter entlassen.'], why: 'Replace the euphemism with *entlassen*.' },
            { q: 'Sein Großvater ist im März von uns gegangen.', cue: 'Sein Großvater ist im März', a: ['Sein Großvater ist im März gestorben.'], why: '*Von uns gegangen* = gestorben.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the euphemism with its plain meaning.', pairs: [
            ['von uns gegangen', 'gestorben'],
            ['freistellen', 'von der Arbeit entbinden'],
            ['Personalabbau', 'Entlassungen'],
            ['Kollateralschaden', 'zivile Opfer eines Angriffs'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the lesson.', items: [
            { q: 'Der Film war gar nicht ___. (understatement: quite good)', a: ['übel'], why: '*Nicht übel* = quite good.' },
            { q: 'Das war nicht gerade ___. (understatement: very expensive)', a: ['billig'], why: '*Nicht gerade billig* = very expensive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Die Wörter, die wir wählen',
      about: 'Read an essay and notice how word choice shapes the reader’s view.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'reading', title: 'Die Wörter, die wir wählen', md: 'Zwei Zeitungen berichteten über dieselbe Demonstration. Die eine schrieb, „wütende Demonstranten starrten die Polizisten an“; die andere, „entschlossene Bürger betrachteten die Beamten ruhig“. Die Tatsachen waren identisch. Die Wörter waren es nicht.\n\nDas ist die stille Macht der Beinahe-Synonyme. Schlank ist ein Kompliment, mager nicht; ein sparsamer Onkel wird bewundert, ein geiziger gemieden. Jeder Schreibende wählt, und jede Wahl trägt ein kleines Urteil.\n\nDie Kollokation ist die zweite Prüfung. Ein Muttersprachler sagt, eine Antwort sei dringend empfohlen, nie tief empfohlen, und ein Fehler sei grob, nie voreilig. Solche Verbindungen sind keine Regeln, sondern Gewohnheiten, die man beim vielen Lesen erwirbt, indem man nach und nach merkt, was richtig klingt.\n\nBleibt die Frage der Abmilderung. Nach einem Todesfall ist „von uns gegangen“ ein Zeichen von Takt. Aber wenn ein Unternehmen von „Personalabbau“ spricht, darf man fragen, wen das mildere Wort schützt. Einfache Wörter können hart sein; sie können auch ehrlich sein.\n\nDie Lehre lautet nicht, Nuancen zu meiden, sondern sie zu beherrschen. Fragen Sie sich vor jedem Wort dreierlei: Was bedeutet es, was suggeriert es, und wen kann es schmeicheln oder verletzen?' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Die beiden Zeitungen berichteten unterschiedliche Tatsachen.', a: 'f', why: '„Die Tatsachen waren identisch. Die Wörter waren es nicht.“' },
            { q: 'Nach dem Autor ist „mager“ ein Kompliment.', a: 'f', why: '„Schlank ist ein Kompliment, mager nicht.“' },
            { q: 'Der Autor sagt, Kollokationen seien strenge Regeln.', a: 'f', why: '„Solche Verbindungen sind keine Regeln, sondern Gewohnheiten.“' },
            { q: 'Der Autor meint, „von uns gegangen“ sei immer falsch.', a: 'f', why: 'Nach einem Todesfall ist es „ein Zeichen von Takt“.' },
            { q: 'Der Autor rät, sich zu fragen, wen ein mildes Wort schützt.', a: 't', why: '„Darf man fragen, wen das mildere Wort schützt.“' },
            { q: 'Die Demonstration fand in Berlin statt.', a: 'ng', why: 'The text does not say where.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'What does the opening example show?', o: ['Word choice can change how the same facts feel.', 'Newspapers always lie.', 'Demonstrations are hard to describe.'], why: 'The facts were identical, but the words gave two pictures.' },
            { q: 'Why does the writer mention “Personalabbau”?', o: ['As a euphemism that may protect a company.', 'As an example of plain language.', 'As a word from a legal dictionary.'], why: 'A soft word can hide a hard reality.' },
            { q: 'What are the three questions at the end about?', o: ['Meaning, suggestion and effect on people.', 'Grammar, spelling and pronunciation.', 'Length, rhythm and tone.'], why: 'What it means, what it suggests, whom it can flatter or hurt.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the near-synonyms the writer uses to praise or criticise.', items: [
            { s: '[Schlank] ist ein Kompliment, [mager] nicht; ein [sparsamer] Onkel wird bewundert, ein [geiziger] gemieden.', why: 'Two pairs of near-synonyms with opposite connotations.' },
            { s: '[Wütende Demonstranten] starrten die Polizisten an.', why: 'These words give a negative picture.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'Eine Antwort ist dringend empfohlen, nie ___ empfohlen.', a: ['tief'], why: 'Collocations are habits.' },
            { q: 'Ein Fehler ist ___, nie voreilig.', a: ['grob'], why: '*Ein grober Fehler*.' },
            { q: 'Nach einem Todesfall ist „von uns gegangen“ ein Zeichen von ___.', a: ['Takt'], why: 'The author’s view.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Jeder Schreibende wählt, und jede Wahl trägt ein kleines Urteil.', why: 'A sentence from the text.' },
            { a: 'Fragen Sie sich vor jedem Wort, wen es schmeicheln oder verletzen kann.', why: 'The idea of the last paragraph.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'Er hat das Bild lange ___, begeistert.', o: ['betrachtet', 'erblickt', 'ausgespäht'], why: '*Betrachten*: to look at attentively.' },
      { q: 'Mein Onkel ist sehr ___ und stolz darauf.', o: ['sparsam', 'geizig', 'stur'], why: 'He is proud: a positive word.' },
      { q: 'Es wird ___ empfohlen, vorher zu reservieren.', o: ['dringend', 'tief', 'bitter'], why: '*Dringend empfohlen*.' },
      { q: 'Wir müssen eine Entscheidung ___.', o: ['treffen', 'machen', 'geben'], why: '*Eine Entscheidung treffen*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'Über kurz oder ___ müssen wir entscheiden.', a: ['lang'], why: '*Über kurz oder lang*.' },
      { q: 'Er hat sein Hab und ___ verloren.', a: ['Gut'], why: '*Hab und Gut*.' },
      { q: 'Es ist unhöflich, Fremde anzu___.', a: ['starren'], why: '*Anstarren*: to look fixedly.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
      ['zierlich', 'klein und zart'],
      ['von uns gegangen', 'gestorben'],
      ['Personalabbau', 'Entlassungen'],
    ] },
    { t: 'ex', kind: 'choice', h: 'What does the speaker really mean?', items: [
      { q: '„Der Film ist nicht übel“, sagt der Kritiker.', o: ['Er ist ziemlich gut.', 'Er ist sehr schlecht.', 'Er ist langweilig.'], why: 'Understatement.' },
      { q: '„Wir müssen uns leider von Ihnen trennen.“', o: ['Sie sind entlassen.', 'Sie werden befördert.', 'Sie haben Urlaub.'], why: 'A euphemism for *entlassen*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Ich bewundere meine Großmutter: Sie ist so [geizig].', a: ['sparsam'], why: 'Praise needs a positive word.' },
      { s: 'Sie haben einen Kompromiss [gemacht].', a: ['geschlossen'], why: '*Einen Kompromiss schließen*.' },
    ] },
  ],
};
