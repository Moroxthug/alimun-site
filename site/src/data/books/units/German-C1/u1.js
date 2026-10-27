// German C1, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Order and emphasis',
  goal: 'Control word order in long sentences and put the stress where you want it. Learn the order of the Mittelfeld, the use of the Vorfeld and the Nachfeld, and emphasis with es, was and wer.',
  art: 'owl',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['word order', 'Mittelfeld', 'Vorfeld', 'emphasis', 'Spaltsatz'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Das Mittelfeld',
      about: 'Put pronouns, nouns and adverbs in the right order between the two parts of the verb.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'In a German main clause the finite verb is in **second position**, and the rest of the verb comes at the **end**. The space between them is the **Mittelfeld**. Three rules cover most cases. **Pronouns** come before **nouns**: *Ich gebe es dem Mann. Ich gebe ihm das Buch.* With **two pronouns**, the **accusative** comes first: *Ich gebe es ihm.* With **two nouns**, the **dative** comes first: *Ich gebe dem Mann das Buch.* Adverbs follow the usual order **time, reason, manner, place** (**te-ka-mo-lo**): *Er fährt morgen wegen der Arbeit mit dem Zug nach Berlin.*' },
          { t: 'table', caption: 'Order in the Mittelfeld', explain: ['head', 'col1'], head: ['Rule', 'Example'], rows: [
            ['pronouns before nouns', 'Ich gebe es dem Mann. / Ich gebe ihm das Buch.'],
            ['two pronouns: accusative, then dative', 'Ich gebe es ihm.'],
            ['two nouns: dative, then accusative', 'Ich gebe dem Mann das Buch.'],
            ['time, reason, manner, place', 'Er fährt morgen wegen der Arbeit mit dem Zug nach Berlin.'],
          ] },
          { t: 'tip', art: 'owl', md: 'The order **te-ka-mo-lo** is a tendency, not a law. **Known information** goes early and the **new or important information** goes late, close to the end of the clause. So you can say *Er fährt mit dem Zug morgen nach Berlin* if the **day** is what you want to stress. The same rules hold in Austria and Switzerland.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Ich gebe **es ihm** morgen.', n: 'Two pronouns: accusative, then dative.' },
            { s: 'Sie schenkt **ihrem Bruder das Buch**.', n: 'Two nouns: dative, then accusative.' },
            { s: 'Er zeigt **es dem Kind**.', n: 'Pronoun before noun.' },
            { s: 'Wir fliegen **morgen wegen der Konferenz mit dem Flugzeug nach Wien**.', n: 'Time, reason, manner, place.' },
            { s: 'Sie hat **mir gestern** nichts davon erzählt.', n: 'Pronoun, then time.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which kind of information is it? Sort the phrases.', groups: ['time', 'reason', 'manner', 'place'], explain: ['groups'], items: [
            { s: 'morgen', g: 0, why: 'It says when.' },
            { s: 'heute Abend', g: 0, why: 'It says when.' },
            { s: 'wegen der Arbeit', g: 1, why: 'It says why.' },
            { s: 'deshalb', g: 1, why: 'It says why.' },
            { s: 'mit dem Zug', g: 2, why: 'It says how.' },
            { s: 'gern', g: 2, why: 'It says how.' },
            { s: 'nach Berlin', g: 3, why: 'It says where.' },
            { s: 'zu Hause', g: 3, why: 'It says where.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right order.', items: [
            { q: 'Ich gebe ___ morgen.', o: ['es ihm', 'ihm es', 'ihn ihm'], why: 'Two pronouns: accusative, then dative.' },
            { q: 'Sie schenkt ___.', o: ['ihrem Bruder das Buch', 'das Buch ihrem Bruder', 'ihr Bruder das Buch'], why: 'Two nouns: dative, then accusative.' },
            { q: 'Er fährt ___ nach Berlin.', o: ['morgen mit dem Zug', 'mit dem Zug morgen', 'nach Berlin morgen'], why: 'Time before manner.' },
            { q: 'Ich zeige ___ dem Kind.', o: ['es', 'ihm', 'das'], why: 'A pronoun comes before a noun: *es dem Kind*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Replace the nouns with pronouns.', items: [
            { q: 'Ich schenke meiner Mutter die Blumen.', cue: 'Ich schenke', a: ['Ich schenke sie ihr.'], why: 'Two pronouns: accusative, then dative.' },
            { q: 'Er zeigt dem Kind das Bild.', cue: 'Er zeigt', a: ['Er zeigt es ihm.'], why: 'Two pronouns: accusative, then dative.' },
            { q: 'Sie bringt ihrem Freund den Kaffee.', cue: 'Sie bringt', a: ['Sie bringt ihn ihm.'], why: 'Two pronouns: accusative, then dative.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right words.', items: [
            { s: 'Ich gebe [ihm es] morgen.', a: ['es ihm'], why: 'Accusative pronoun first, then dative.' },
            { s: 'Er fährt [mit dem Zug morgen] nach Berlin.', a: ['morgen mit dem Zug'], why: 'Time before manner.' },
            { s: 'Sie schenkt [das Buch ihrem Bruder].', a: ['ihrem Bruder das Buch'], why: 'Dative noun before accusative noun.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Ich gebe es ihm morgen.', why: 'Two pronouns, then time.' },
            { a: 'Sie schenkt ihrem Bruder das Buch.', why: 'Dative noun before accusative noun.' },
            { a: 'Wir fliegen morgen wegen der Konferenz nach Wien.', why: 'Time, reason, place.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Vorfeld und Nachfeld',
      about: 'Put an element first or last for emphasis, and keep long sentences under control.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'The **Vorfeld** is the place before the finite verb. Almost **any element** can stand there, and what stands there gets **attention**. *Ich habe ihn gestern gesehen* is neutral. *Gestern habe ich ihn gesehen* stresses the time. *Ihn habe ich gestern gesehen* stresses the person. A whole clause can stand there too: *Dass er kommt, wusste ich nicht.* The verb is always in **second position**, so the **subject** follows the verb after a first element: *Gestern habe ich …*, not *Gestern ich habe …*.' },
          { t: 'table', caption: 'What stands first', explain: ['head', 'col1'], head: ['First element', 'Example', 'Effect'], rows: [
            ['the subject', 'Ich habe ihn gestern gesehen.', 'neutral'],
            ['a time', 'Gestern habe ich ihn gesehen.', 'stresses the time'],
            ['the object', 'Ihn habe ich gestern gesehen.', 'stresses the person'],
            ['a clause', 'Dass er kommt, wusste ich nicht.', 'stresses what you did not know'],
            ['a phrase of concession', 'Trotz des Regens kommt er.', 'stresses the contrast'],
          ] },
          { t: 'tip', art: 'owl', md: 'The **Nachfeld** is the place after the verb frame. In writing, put only **clauses** and **long phrases** there: *Er hat gesagt, dass er kommt.* In speech, people often put short elements after the frame as an afterthought: *Ich habe ihn gesehen, gestern.* In a long sentence the **verb frame** (Satzklammer) can hold a lot between its two parts, so check that the second part is not too far away.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Gestern** habe ich ihn gesehen.', n: 'Time first: stresses the time.' },
            { s: '**Ihn** habe ich gestern gesehen.', n: 'Object first: stresses the person.' },
            { s: '**Das** habe ich nicht gewusst.', n: 'Object first: stresses *das*.' },
            { s: '**Dass er kommt**, wusste ich nicht.', n: 'A clause in the Vorfeld.' },
            { s: '**Trotz des Regens** kommt er.', n: 'A phrase of concession first.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right sentence.', items: [
            { q: 'Which sentence stresses the person ihn?', o: ['Ihn habe ich gestern gesehen.', 'Gestern habe ich ihn gesehen.', 'Ich habe ihn gestern gesehen.'], why: 'The object in the Vorfeld is stressed.' },
            { q: 'Which sentence is correct?', o: ['Gestern habe ich ihn gesehen.', 'Gestern ich habe ihn gesehen.', 'Gestern habe gesehen ich ihn.'], why: 'The finite verb stays in second position.' },
            { q: 'Which sentence stresses the whole clause?', o: ['Dass er kommt, wusste ich nicht.', 'Ich wusste nicht, dass er kommt.', 'Wusste ich nicht, dass er kommt.'], why: 'A clause in the Vorfeld is stressed.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in second position.', items: [
            { q: 'Gestern ___ ich ihn gesehen. (haben)', a: ['habe'], why: 'The verb is in second position: *habe ich*.' },
            { q: 'Ihn ___ ich gestern gesehen. (haben)', a: ['habe'], why: 'The verb is in second position.' },
            { q: 'Dass er kommt, ___ ich nicht. (wissen)', a: ['wusste'], why: 'After a clause in the Vorfeld, the verb follows at once.' },
            { q: 'Trotz des Regens ___ er. (kommen)', a: ['kommt'], why: 'After the first element, the verb follows.' },
            { q: 'Heute Abend ___ wir ins Kino. (gehen)', a: ['gehen'], why: 'The verb is in second position.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Begin with the words in brackets.', items: [
            { q: 'Ich habe ihn gestern gesehen.', cue: 'Ihn', a: ['Ihn habe ich gestern gesehen.'], why: 'The object in the Vorfeld, the verb second.' },
            { q: 'Ich habe das nicht gewusst.', cue: 'Das', a: ['Das habe ich nicht gewusst.'], why: 'The object in the Vorfeld, the verb second.' },
            { q: 'Er kommt trotz des Regens.', cue: 'Trotz', a: ['Trotz des Regens kommt er.'], why: 'A phrase in the Vorfeld, the verb second.' },
            { q: 'Ich wusste nicht, dass er kommt.', cue: 'Dass er kommt', a: ['Dass er kommt, wusste ich nicht.'], why: 'A clause in the Vorfeld, the verb at once.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right words.', items: [
            { s: 'Gestern [ich habe] ihn gesehen.', a: ['habe ich'], why: 'The verb stays in second position.' },
            { s: 'Heute [wir gehen] ins Kino.', a: ['gehen wir'], why: 'The verb stays in second position.' },
            { s: 'Trotz des Regens [er kommt].', a: ['kommt er'], why: 'The verb stays in second position.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Ihn habe ich gestern gesehen.', why: 'The object first, then the verb.' },
            { a: 'Dass er kommt, wusste ich nicht.', why: 'The clause first, then the verb.' },
            { a: 'Trotz des Regens kommt er zur Feier.', why: 'The phrase first, then the verb.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Es ist der Preis, der mich stört',
      about: 'Emphasise one part of the sentence with es, was and wer.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'To stress one part of a sentence, put it in a **cleft sentence**. With **es ist … der/die/das …** you stress a person or a thing: *Der Preis stört mich* becomes *Es ist der Preis, der mich stört.* *Meine Schwester hat angerufen* becomes *Es war meine Schwester, die angerufen hat.* With **was … ist, …** you stress what follows: *Was mich ärgert, ist die Unpünktlichkeit. Was ich brauche, ist Ruhe.* With **wer …, der …** you speak of anyone: *Wer das sagt, der lügt.*' },
          { t: 'table', caption: 'Emphasis', explain: ['head', 'col1'], head: ['Pattern', 'Example'], rows: [
            ['Es ist / war … der, die, das …', 'Es ist der Preis, der mich stört.'],
            ['Es ist / war … der, die, das …', 'Es war meine Schwester, die angerufen hat.'],
            ['Was …, ist …', 'Was mich ärgert, ist die Unpünktlichkeit.'],
            ['Was …, ist, dass …', 'Was ich mir wünsche, ist, dass wir zusammen feiern.'],
            ['Wer …, der …', 'Wer das sagt, der lügt.'],
          ] },
          { t: 'tip', art: 'owl', md: 'After **was**, the verb **sein** agrees with what follows: *Was mich ärgert, ist die Unpünktlichkeit* but *Was mich ärgert, sind die ständigen Verspätungen.* In **es ist … der …**, the relative pronoun agrees with the stressed noun: *der Preis, der*; *meine Schwester, die*; *das Wetter, das*.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Es ist der Preis, der** mich stört.', n: 'Stresses the price.' },
            { s: '**Es war meine Schwester, die** angerufen hat.', n: 'Stresses the person.' },
            { s: '**Was mich ärgert, ist** die Unpünktlichkeit.', n: 'Stresses what annoys me.' },
            { s: '**Was ich brauche, ist** Ruhe.', n: 'Stresses what I need.' },
            { s: '**Wer** das sagt, **der** lügt.', n: 'Speaks of anyone who says it.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Neutral or emphatic? Sort the sentences.', groups: ['neutral', 'emphatic'], explain: ['groups'], items: [
            { s: 'Der Preis stört mich.', g: 0, why: 'A plain statement.' },
            { s: 'Es ist der Preis, der mich stört.', g: 1, why: 'A cleft sentence.' },
            { s: 'Ich brauche Ruhe.', g: 0, why: 'A plain statement.' },
            { s: 'Was ich brauche, ist Ruhe.', g: 1, why: 'A *was* clause.' },
            { s: 'Meine Schwester hat angerufen.', g: 0, why: 'A plain statement.' },
            { s: 'Es war meine Schwester, die angerufen hat.', g: 1, why: 'A cleft sentence.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Es ist der Preis, ___ mich stört.', a: ['der'], why: 'The relative pronoun agrees with *der Preis*.' },
            { q: 'Es war meine Schwester, ___ angerufen hat.', a: ['die'], why: 'The relative pronoun agrees with *meine Schwester*.' },
            { q: '___ mich ärgert, ist die Unpünktlichkeit.', a: ['Was'], why: '*Was … ist …* stresses what follows.' },
            { q: 'Wer das sagt, ___ lügt.', a: ['der'], why: '*Wer …, der …*' },
            { q: 'Was ich brauche, ___ Ruhe.', a: ['ist'], why: '*Was … ist …*' },
            { q: 'Was mich ärgert, ___ die ständigen Verspätungen.', a: ['sind'], why: '*Sein* agrees with the plural noun.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Es ist das Wetter, ___ mich stört.', o: ['das', 'der', 'die'], why: 'It agrees with *das Wetter*.' },
            { q: '___ mich stört, ist die Lautstärke.', o: ['Was', 'Wer', 'Wie'], why: '*Was … ist …*' },
            { q: '___ das sagt, der hat keine Ahnung.', o: ['Wer', 'Was', 'Wem'], why: '*Wer …, der …*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Stress the subject with the words in brackets.', items: [
            { q: 'Der Preis stört mich.', cue: 'Es ist', a: ['Es ist der Preis, der mich stört.'], why: 'A cleft sentence with *es ist*.' },
            { q: 'Die Unpünktlichkeit ärgert mich.', cue: 'Was', a: ['Was mich ärgert, ist die Unpünktlichkeit.'], why: 'A *was* clause.' },
            { q: 'Ich brauche Ruhe.', cue: 'Was', a: ['Was ich brauche, ist Ruhe.'], why: 'A *was* clause.' },
            { q: 'Meine Schwester hat angerufen.', cue: 'Es war', a: ['Es war meine Schwester, die angerufen hat.'], why: 'A cleft sentence with *es war*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Es ist der Preis, [die] mich stört.', a: ['der'], why: 'It agrees with *der Preis*.' },
            { s: '[Wer] mich ärgert, ist die Unpünktlichkeit.', a: ['Was'], why: 'A thing: *was*.' },
            { s: 'Was ich brauche, [sind] Ruhe.', a: ['ist'], why: '*Ruhe* is singular.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Es ist der Preis, der mich stört.', why: '*Es ist* + noun + relative clause.' },
            { a: 'Was ich brauche, ist ein wenig Ruhe.', why: '*Was … ist …*' },
            { a: 'Wer das sagt, der lügt.', why: '*Wer …, der …*' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Eine kurze Rede',
      about: 'Read a short speech and notice how it puts the stress.',
      art: 'owl',
      spreads: [
        [
          { t: 'reading', title: 'Rede zur Eröffnung eines Straßenfests', md: 'Liebe Nachbarinnen und Nachbarn,\n\nwas uns heute zusammenbringt, ist nicht der Anlass, sondern das Miteinander. Es sind die kleinen Dinge, die ein Viertel lebendig machen: ein Gruß im Treppenhaus, ein geteilter Kuchen, ein offenes Ohr. Das haben wir in den letzten Jahren gelernt.\n\nIhnen, den vielen Freiwilligen, möchte ich heute besonders danken. Ohne Sie wäre dieses Fest nicht möglich gewesen. Was ich mir wünsche, ist, dass wir nicht nur heute zusammen feiern. Wer einmal hier mitgemacht hat, der weiß, wie viel Freude darin steckt.\n\nGestern noch haben wir die Stände aufgebaut, heute eröffnen wir. Ich wünsche Ihnen allen einen wunderbaren Tag.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Der Redner dankt vor allem den Freiwilligen.', a: 't', why: '*Ihnen, den vielen Freiwilligen, möchte ich heute besonders danken.*' },
            { q: 'Der Anlass des Festes ist das Wichtigste.', a: 'f', why: '*Nicht der Anlass, sondern das Miteinander.*' },
            { q: 'Die Stände wurden gestern aufgebaut.', a: 't', why: '*Gestern noch haben wir die Stände aufgebaut.*' },
            { q: 'Das Fest findet jedes Jahr statt.', a: 'ng', why: 'The speech does not say so.' },
            { q: 'Der Redner wünscht sich, dass nur heute gefeiert wird.', a: 'f', why: '*Nicht nur heute zusammen feiern.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Was bringt die Menschen zusammen?', o: ['Das Miteinander.', 'Der Anlass.', 'Der Kuchen.'], why: '*Was uns zusammenbringt, ist … das Miteinander.*' },
            { q: 'Was macht ein Viertel lebendig?', o: ['Die kleinen Dinge.', 'Große Veranstaltungen.', 'Neue Gebäude.'], why: '*Es sind die kleinen Dinge, die ein Viertel lebendig machen.*' },
            { q: 'Wem dankt der Redner besonders?', o: ['Den Freiwilligen.', 'Den Nachbarn im Treppenhaus.', 'Der Stadt.'], why: '*Ihnen, den vielen Freiwilligen.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the part that stands first for emphasis.', items: [
            { s: '[Ihnen, den vielen Freiwilligen,] möchte ich heute besonders danken.', why: 'The dative object in the Vorfeld.' },
            { s: '[Gestern noch] haben wir die Stände aufgebaut, heute eröffnen wir.', why: 'The time in the Vorfeld, in contrast with *heute*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '___ ich mir wünsche, ist, dass wir zusammen feiern.', a: ['Was'], why: '*Was … ist, dass …*' },
            { q: 'Es sind die kleinen Dinge, ___ ein Viertel lebendig machen.', a: ['die'], why: 'It agrees with the plural *die kleinen Dinge*.' },
            { q: 'Wer einmal hier mitgemacht hat, ___ weiß, wie viel Freude darin steckt.', a: ['der'], why: '*Wer …, der …*' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Ihnen möchte ich heute besonders danken.', why: 'The object first, then the verb.' },
            { a: 'Was ich mir wünsche, ist ein gutes Miteinander.', why: '*Was … ist …*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Ich gebe ___ morgen.', o: ['es ihm', 'ihm es', 'ihn ihm'], why: 'Two pronouns: accusative, then dative.' },
      { q: 'Er fährt ___ nach Berlin.', o: ['morgen mit dem Zug', 'mit dem Zug morgen', 'nach Berlin morgen'], why: 'Time before manner.' },
      { q: 'Which sentence stresses the person ihn?', o: ['Ihn habe ich gestern gesehen.', 'Gestern habe ich ihn gesehen.', 'Ich habe ihn gestern gesehen.'], why: 'The object in the Vorfeld is stressed.' },
      { q: 'Was mich ärgert, ___ die Unpünktlichkeit.', o: ['ist', 'sind', 'wird'], why: '*Was … ist …* with a singular noun.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Gestern ___ ich ihn gesehen. (haben)', a: ['habe'], why: 'The verb is in second position.' },
      { q: 'Es war meine Schwester, ___ angerufen hat.', a: ['die'], why: 'It agrees with *meine Schwester*.' },
      { q: 'Wer das sagt, ___ lügt.', a: ['der'], why: '*Wer …, der …*' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the term with its meaning.', pairs: [
      ['das Mittelfeld', 'the space between the two parts of the verb'],
      ['das Vorfeld', 'the position before the finite verb'],
      ['das Nachfeld', 'the position after the verb frame'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it with the words in brackets.', items: [
      { q: 'Er zeigt dem Kind das Bild.', cue: 'Er zeigt', a: ['Er zeigt es ihm.'], why: 'Two pronouns: accusative, then dative.' },
      { q: 'Die Unpünktlichkeit ärgert mich.', cue: 'Was', a: ['Was mich ärgert, ist die Unpünktlichkeit.'], why: 'A *was* clause.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right words.', items: [
      { s: 'Heute [wir gehen] ins Kino.', a: ['gehen wir'], why: 'The verb stays in second position.' },
      { s: 'Ich gebe [ihm es] morgen.', a: ['es ihm'], why: 'Accusative pronoun first, then dative.' },
    ] },
  ],
};
