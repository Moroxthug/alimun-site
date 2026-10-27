// German C2, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Legal German and plain language',
  goal: 'Read legal and formal German and rewrite it in plain language. Learn formal and legal words, why legal German is dense and how to simplify it, and the language of obligations, rights and conditions.',
  art: 'cactus',
  tags: { skills: ['reading', 'writing', 'vocabulary'], topics: ['legal German', 'formal words', 'plain language', 'contracts', 'obligation', 'conditions'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Hiermit, hinsichtlich, gemäß',
      about: 'Recognise the formal and legal words of contracts and official texts.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'Legal and official German uses words that almost nobody uses in speech. **Hiermit** means *hereby*. **Im Folgenden** means *hereinafter, from here on*. **Hinsichtlich** and **bezüglich** mean *regarding* (both with the genitive). **Gemäß** means *according to* (with the dative). **Aufgrund** means *because of* (genitive). **Seitens** means *on the part of*. **Vorbehaltlich** means *subject to*. **Unbeschadet** means *without prejudice to*. **Etwaig** means *any, possible*. **Sämtlich** means *all*. **Der Antragsteller** is *the applicant*. **Oben genannt** and **vorstehend** mean *mentioned above*.' },
          { t: 'table', caption: 'Formal words and plain alternatives', explain: ['head', 'col0'], head: ['Formal', 'Plain German'], rows: [
            ['hiermit', 'mit diesem Brief'],
            ['im Folgenden', 'von jetzt an / nenne ich'],
            ['hinsichtlich, bezüglich', 'zu / über'],
            ['gemäß', 'nach / laut'],
            ['aufgrund', 'wegen'],
            ['seitens', 'von'],
            ['vorbehaltlich', 'wenn nichts anderes gilt'],
            ['etwaig', 'möglich'],
          ] },
        ],
        [
          { t: 'text', md: 'These words make a text precise, but heavy and hard for ordinary readers. They are followed by a **fixed case**: *hinsichtlich der Kosten* (genitive), *gemäß dem Vertrag* (dative), *aufgrund des Regens* (genitive), *seitens des Vermieters* (genitive). Learn the case together with the word. **Der Antragsteller** (masculine) takes *-s* in the genitive: *des Antragstellers*; in the dative it does not change: *dem Antragsteller*.' },
          { t: 'tip', art: 'owl', md: 'In an exam, you may be asked to **recognise** these words and **replace** them. You do not need them in everyday writing. If a sentence begins with **in Anbetracht** or **angesichts** (*in view of*), it gives the reason for a decision: you can read it as *wegen* or *weil*. **Hiermit** is typically followed by a verb that **performs** the action: *Hiermit kündige ich den Vertrag.*' },
          { t: 'ex', kind: 'match', h: 'Match the formal word with its plain meaning.', pairs: [
            ['aufgrund', 'wegen'],
            ['gemäß', 'nach'],
            ['hinsichtlich', 'zu, über'],
            ['seitens', 'von'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the plain German version.', items: [
            { q: 'Aufgrund der Verspätung wurde der Termin verschoben.', o: ['Wegen der Verspätung wurde der Termin verschoben.', 'Trotz der Verspätung wurde der Termin verschoben.', 'Nach der Verspätung gab es keinen Termin.'], why: '*Aufgrund* = wegen.' },
            { q: 'Gemäß dem Vertrag beträgt die Frist zehn Tage.', o: ['Laut Vertrag beträgt die Frist zehn Tage.', 'Ohne Vertrag beträgt die Frist zehn Tage.', 'Vor dem Vertrag beträgt die Frist zehn Tage.'], why: '*Gemäß* = laut, nach.' },
            { q: 'Hinsichtlich der Kosten gibt es keine Einwände.', o: ['Zu den Kosten gibt es keine Einwände.', 'Ohne die Kosten gibt es keine Einwände.', 'Wegen der Kosten gibt es Einwände.'], why: '*Hinsichtlich* = zu, in Bezug auf.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Hiermit ___ ich den Vertrag. (kündigen)', a: ['kündige'], why: '*Hiermit* is followed by the verb that performs the action.' },
            { q: 'Die Zahlung erfolgt gemäß ___ Vertrag.', a: ['dem'], why: '*Gemäß* takes the dative.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite in plain German, using the word given.', items: [
            { q: 'Aufgrund des Regens fällt das Fest aus.', cue: 'Wegen', a: ['Wegen des Regens fällt das Fest aus.'], why: '*Aufgrund* = wegen.' },
            { q: 'Gemäß dem Reglement beträgt die Frist zehn Tage.', cue: 'Laut', a: ['Laut Reglement beträgt die Frist zehn Tage.', 'Laut dem Reglement beträgt die Frist zehn Tage.'], why: '*Gemäß* = laut.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Hinsichtlich [die Kosten] gibt es keine Einwände.', a: ['der Kosten'], why: '*Hinsichtlich* takes the genitive.' },
            { s: 'Gemäß [des Vertrags] beträgt die Frist zehn Tage.', a: ['dem Vertrag'], why: '*Gemäß* takes the dative.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Vom Amtsdeutsch zur einfachen Sprache',
      about: 'Understand why legal German is dense and how to simplify a clause.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Legal German is dense because of **long sentences**, **nominal style** (nouns in place of verbs), **passive forms** and the **formal words** of the first lesson. Compare: *Der Mieter ist zur Entrichtung der Miete innerhalb von zehn Tagen nach Zugang der Mitteilung verpflichtet.* In **plain language** (*einfache Sprache*): *Sie müssen die Miete innerhalb von zehn Tagen bezahlen, nachdem Sie die Mitteilung bekommen haben.* The plain version uses **Sie**, an **active verb** (*bezahlen*), **two short clauses** and **common words**.' },
          { t: 'table', caption: 'From dense to plain', explain: ['head', 'col0'], head: ['Dense', 'Plain'], rows: [
            ['zur Entrichtung verpflichtet sein', 'bezahlen müssen'],
            ['Zugang der Mitteilung', 'wenn Sie die Mitteilung bekommen'],
            ['innerhalb einer Frist von zehn Tagen', 'in zehn Tagen'],
            ['es ist untersagt', 'Sie dürfen nicht'],
            ['im Folgenden genannt', 'genannt'],
            ['Beendigung des Mietverhältnisses', 'der Vertrag endet'],
          ] },
        ],
        [
          { t: 'text', md: 'The **plain language movement** (*Leichte Sprache* and *Einfache Sprache*) argues that official documents should be clear to the reader, without losing legal accuracy. Its advice: write **short sentences**, prefer **active verbs**, use **common words**, address the reader as **Sie**, put the **most important information first**, and turn **nouns into verbs** (*Zahlung → bezahlen*, *Kündigung → kündigen*). It does not mean making the text childish; it means respecting the reader’s time.' },
          { t: 'tip', art: 'owl', md: 'When you rewrite, keep the **meaning** exactly the same. Change the **words** and the **structure** (passive to active, noun to verb, long to short), but not the **obligation**. If the original says the reader *must* act, the plain version must also say *Sie müssen*, not *Sie können*. Check the **numbers and dates**: they must not change.' },
          { t: 'ex', kind: 'match', h: 'Match the dense expression with its plain version.', pairs: [
            ['zur Entrichtung verpflichtet sein', 'bezahlen müssen'],
            ['es ist untersagt', 'Sie dürfen nicht'],
            ['Beendigung des Mietverhältnisses', 'der Vertrag endet'],
            ['innerhalb einer Frist von zehn Tagen', 'in zehn Tagen'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which is the plain version?', items: [
            { q: 'Der Mieter ist zur Entrichtung der Miete bis zum 5. verpflichtet.', o: ['Sie müssen die Miete bis zum 5. bezahlen.', 'Die Miete könnte vielleicht bis zum 5. bezahlt werden.', 'Die Miete wurde bis zum 5. bezahlt.'], why: 'Plain: *Sie*, an active verb and the same obligation.' },
            { q: 'Es ist untersagt, die Wohnung unterzuvermieten.', o: ['Sie dürfen die Wohnung nicht untervermieten.', 'Sie dürfen die Wohnung untervermieten.', 'Die Untervermietung ist Pflicht.'], why: 'The same prohibition in plain words.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite in plain language, starting with the words given.', items: [
            { q: 'Der Begünstigte ist zur Rückzahlung des erhaltenen Betrags verpflichtet.', cue: 'Sie müssen', a: ['Sie müssen den erhaltenen Betrag zurückzahlen.', 'Sie müssen das Geld zurückzahlen, das Sie bekommen haben.'], why: 'An active verb replaces the noun phrase.' },
            { q: 'Innerhalb von zehn Tagen nach Erhalt des Schreibens ist zu antworten.', cue: 'Sie müssen', a: ['Sie müssen innerhalb von zehn Tagen nach Erhalt des Schreibens antworten.', 'Sie müssen in zehn Tagen antworten, nachdem Sie das Schreiben bekommen haben.'], why: 'The important obligation comes first.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Dense or plain?', groups: ['dense', 'plain'], explain: ['groups'], items: [
            { s: 'Der Mieter ist zur Entrichtung der Miete verpflichtet.', g: 0, why: 'Long and nominal.' },
            { s: 'Sie müssen die Miete bezahlen.', g: 1, why: 'Short, active, with *Sie*.' },
            { s: 'Unbeschadet der vorstehenden Bestimmungen …', g: 0, why: 'Legal vocabulary.' },
            { s: 'Trotz dem, was oben steht, …', g: 1, why: 'Common words.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the plain version.', items: [
            { q: 'Sie ___ die Miete bis zum 5. bezahlen. (obligation)', a: ['müssen'], why: 'The obligation stays.' },
            { q: 'Sie ___ die Wohnung nicht untervermieten. (prohibition)', a: ['dürfen'], why: 'The prohibition stays.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Hat zu, darf, es sei denn',
      about: 'Use the language of obligation, permission, prohibition and condition.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Contracts and rules state **obligations**, **rights**, **prohibitions** and **conditions**. **Obligation**: **muss**, **ist verpflichtet zu**, **hat zu** + infinitive (*Der Mieter hat die Miete zu zahlen*). **Permission and right**: **darf**, **kann**, **ist berechtigt zu** (*Der Mieter ist berechtigt, den Vertrag zu kündigen*). **Prohibition**: **darf nicht**, **ist untersagt**, **ist verboten** (*Die Untervermietung ist untersagt*). **Condition**: **vorbehaltlich** (*subject to*), **sofern** (*provided that*), **nur wenn**, **es sei denn** (*unless*), **im Falle** (*in case of*), **andernfalls** (*otherwise*).' },
          { t: 'table', caption: 'Obligation, right, prohibition, condition', explain: ['head', 'col0'], head: ['Function', 'Phrases', 'Example'], rows: [
            ['obligation', 'muss, ist verpflichtet, hat zu', 'Der Mieter hat die Miete zu zahlen.'],
            ['right', 'darf, kann, ist berechtigt', 'Der Mieter ist berechtigt, den Vertrag zu kündigen.'],
            ['prohibition', 'darf nicht, ist untersagt', 'Die Untervermietung ist untersagt.'],
            ['condition', 'sofern, vorbehaltlich, nur wenn', 'Der Vertrag verlängert sich, sofern keine Kündigung erfolgt.'],
            ['exception', 'es sei denn, andernfalls', 'Der Vertrag gilt ein Jahr, es sei denn, die Parteien vereinbaren etwas anderes.'],
          ] },
        ],
        [
          { t: 'text', md: '**Es sei denn** means *unless* and is followed by a clause in the **subjunctive** (*Konjunktiv I* of *sein*) or the indicative: *Der Vertrag gilt ein Jahr, es sei denn, die Parteien vereinbaren etwas anderes.* **Sofern** introduces a condition with the **indicative**: *sofern die Miete gezahlt wird*. **Andernfalls** means *otherwise* and starts the consequence: *Andernfalls ist der Vertrag nichtig.* **Im Falle** is followed by the **genitive**: *im Falle eines Zahlungsverzugs*.' },
          { t: 'tip', art: 'owl', md: 'Do not confuse **muss** (must) and **kann** (may): a translation error here changes a legal obligation into a permission. In a contract, **hat zu** and **ist verpflichtet** create a duty; **kann** and **ist berechtigt** give a choice. **Darf nicht** means *is not allowed to*, which is different from **muss nicht** (*does not have to*).' },
          { t: 'ex', kind: 'sort', h: 'Obligation, right or prohibition?', groups: ['obligation', 'right', 'prohibition'], explain: ['groups'], items: [
            { s: 'Der Mieter muss die Miete zahlen.', g: 0, why: '*Muss* creates an obligation.' },
            { s: 'Der Mieter kann den Vertrag kündigen.', g: 1, why: '*Kann* gives a right.' },
            { s: 'Die Untervermietung ist untersagt.', g: 2, why: 'A prohibition.' },
            { s: 'Der Vermieter ist verpflichtet, die Wohnung instand zu halten.', g: 0, why: '*Ist verpflichtet* = an obligation.' },
            { s: 'Der Mieter ist berechtigt, eine Antenne anzubringen.', g: 1, why: '*Ist berechtigt* = a right.' },
            { s: 'Der Mieter darf die Wände nicht streichen.', g: 2, why: '*Darf nicht* = a prohibition.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'Der Vertrag verlängert sich, ___ keine Kündigung erfolgt.', o: ['sofern', 'es sei denn', 'andernfalls'], why: '*Sofern* introduces a condition.' },
            { q: 'Der Vertrag gilt ein Jahr, ___ die Parteien vereinbaren etwas anderes.', o: ['es sei denn', 'sofern', 'im Falle'], why: '*Es sei denn* = unless.' },
            { q: '___ eines Zahlungsverzugs ist der Vermieter zur Kündigung berechtigt.', o: ['Im Falle', 'Aufgrund', 'Sofern'], why: '*Im Falle* + genitive.' },
            { q: 'Die Miete ist bis zum 5. zu zahlen; ___ ist der Vertrag nichtig.', o: ['andernfalls', 'sofern', 'hinsichtlich'], why: '*Andernfalls* = otherwise.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Say it with the word in brackets.', items: [
            { q: 'Wenn die Miete nicht gezahlt wird, ist der Vertrag nichtig.', cue: 'Andernfalls', a: ['Die Miete ist zu zahlen; andernfalls ist der Vertrag nichtig.', 'Die Miete muss gezahlt werden; andernfalls ist der Vertrag nichtig.'], why: '*Andernfalls* introduces the consequence.' },
            { q: 'Der Vertrag gilt ein Jahr, aber die Parteien können etwas anderes vereinbaren.', cue: 'es sei denn', a: ['Der Vertrag gilt ein Jahr, es sei denn, die Parteien vereinbaren etwas anderes.'], why: '*Es sei denn* introduces the exception.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
            { q: 'Der Mieter ___ die Miete monatlich zu zahlen. (hat zu)', a: ['hat'], why: '*Hat … zu* = an obligation.' },
            { q: 'Die Untervermietung ist ___. (prohibited)', a: ['untersagt'], why: 'A prohibition.' },
            { q: '___ eines Zahlungsverzugs kann der Vermieter kündigen.', a: ['Im Falle'], why: '*Im Falle* + genitive.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Der Mieter [kann] die Miete monatlich zahlen. (it is an obligation)', a: ['muss', 'hat'], why: 'An obligation needs *muss* or *hat … zu*.' },
            { s: 'Der Vertrag gilt ein Jahr, [sofern] die Parteien etwas anderes vereinbaren. (unless)', a: ['es sei denn'], why: '*Es sei denn* = unless; *sofern* = provided that.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Eine Klausel und ihre einfache Fassung',
      about: 'Read a contract clause and its plain-language version.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: '§ 4 Mietzahlung', md: 'JURISTISCHE FASSUNG\n\nGemäß diesem Vertrag ist der Mieter, im Folgenden „der Mieter“ genannt, zur Entrichtung der monatlichen Miete innerhalb von fünf Tagen nach Beginn des Monats verpflichtet. Unbeschadet etwaiger anderer Bestimmungen ist eine Stundung ausgeschlossen, vorbehaltlich der schriftlichen Zustimmung des Vermieters. Im Falle eines Zahlungsverzugs ist der Vermieter zur Kündigung berechtigt, es sei denn, der Mieter weist einen berechtigten Grund nach. Die Untervermietung der Wohnung ist untersagt.\n\nEINFACHE FASSUNG\n\nSie müssen die Miete in den ersten fünf Tagen des Monats bezahlen. Sie dürfen nicht später zahlen, außer der Vermieter erlaubt es Ihnen schriftlich. Wenn Sie nicht rechtzeitig zahlen, kann der Vermieter den Vertrag beenden, außer Sie haben einen guten Grund. Sie dürfen die Wohnung nicht untervermieten.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Der Mieter muss die Miete in den ersten fünf Tagen des Monats zahlen.', a: 't', why: '„Innerhalb von fünf Tagen nach Beginn des Monats.“' },
            { q: 'Der Mieter darf ohne Erlaubnis später zahlen.', a: 'f', why: '„Außer der Vermieter erlaubt es Ihnen schriftlich.“' },
            { q: 'Bei Zahlungsverzug kann der Vermieter den Vertrag beenden.', a: 't', why: '„Der Vermieter ist zur Kündigung berechtigt.“' },
            { q: 'Der Mieter darf die Wohnung untervermieten.', a: 'f', why: '„Die Untervermietung ist untersagt.“' },
            { q: 'Die Miete beträgt 800 Euro pro Monat.', a: 'ng', why: 'The text gives no amount.' },
            { q: 'Der Mieter kann einen berechtigten Grund für die Verspätung nachweisen.', a: 't', why: '„Es sei denn, der Mieter weist einen berechtigten Grund nach.“' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'What does “gemäß diesem Vertrag” mean?', o: ['according to this contract', 'before this contract', 'without this contract'], why: '*Gemäß* = according to.' },
            { q: 'What does “im Falle eines Zahlungsverzugs” mean?', o: ['in case of late payment', 'after payment', 'because of payment'], why: '*Im Falle* = in case of.' },
            { q: 'What is the plain version of “ist zur Entrichtung verpflichtet”?', o: ['muss bezahlen', 'kann bezahlen', 'hat bezahlt'], why: 'The obligation stays, in plain words.' },
            { q: 'What does “im Folgenden genannt” do?', o: ['It gives the tenant a short name for the rest of the contract.', 'It names the landlord.', 'It cancels the contract.'], why: '*Im Folgenden … genannt* = hereinafter called.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the legal words.', items: [
            { s: '[Gemäß] diesem Vertrag ist der Mieter, [im Folgenden] „der Mieter“ genannt, zur Entrichtung der Miete verpflichtet.', why: 'Legal phrases.' },
            { s: '[Unbeschadet] etwaiger anderer Bestimmungen ist eine Stundung ausgeschlossen, [vorbehaltlich] der schriftlichen Zustimmung des Vermieters.', why: 'Formal words of exception.' },
            { s: 'Im Falle eines Zahlungsverzugs ist der Vermieter zur Kündigung berechtigt, [es sei denn], der Mieter weist einen Grund nach.', why: '*Es sei denn* = unless.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'Sie dürfen nicht später zahlen, ___ der Vermieter erlaubt es Ihnen schriftlich. (except)', a: ['außer'], why: 'The plain version of *vorbehaltlich*.' },
            { q: 'Die Untervermietung der Wohnung ist ___.', a: ['untersagt'], why: 'A prohibition.' },
            { q: 'Der Mieter ist zur Entrichtung der Miete ___.', a: ['verpflichtet'], why: '*Zur Entrichtung verpflichtet*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Sie müssen die Miete in den ersten fünf Tagen des Monats bezahlen.', why: 'The plain version of the first sentence.' },
            { a: 'Sie dürfen die Wohnung nicht untervermieten.', why: 'The plain version of the prohibition.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'Aufgrund der Verspätung wurde der Termin verschoben. “Aufgrund” means…', o: ['wegen', 'trotz', 'vor'], why: '*Aufgrund* = wegen.' },
      { q: 'Der Vertrag verlängert sich, ___ keine Kündigung erfolgt.', o: ['sofern', 'es sei denn', 'andernfalls'], why: '*Sofern* introduces a condition.' },
      { q: 'Der Vertrag gilt ein Jahr, ___ die Parteien vereinbaren etwas anderes.', o: ['es sei denn', 'sofern', 'im Falle'], why: '*Es sei denn* = unless.' },
      { q: 'Which is the plain version of “zur Entrichtung verpflichtet”?', o: ['muss bezahlen', 'kann bezahlen', 'sollte vielleicht bezahlen'], why: 'The obligation stays.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the formal word with its plain meaning.', pairs: [
      ['aufgrund', 'wegen'],
      ['gemäß', 'laut'],
      ['hinsichtlich', 'zu, über'],
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'Hinsichtlich ___ Kosten gibt es keine Einwände. (der)', a: ['der'], why: '*Hinsichtlich* takes the genitive.' },
      { q: 'Die Untervermietung ist ___. (prohibited)', a: ['untersagt'], why: 'A prohibition.' },
      { q: '___ eines Zahlungsverzugs kann der Vermieter kündigen.', a: ['Im Falle'], why: '*Im Falle* + genitive.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite in plain language.', items: [
      { q: 'Der Begünstigte ist zur Rückzahlung des erhaltenen Betrags verpflichtet.', cue: 'Sie müssen', a: ['Sie müssen den erhaltenen Betrag zurückzahlen.', 'Sie müssen das Geld zurückzahlen, das Sie bekommen haben.'], why: 'An active verb replaces the noun phrase.' },
      { q: 'Aufgrund des Regens fällt das Fest aus.', cue: 'Wegen', a: ['Wegen des Regens fällt das Fest aus.'], why: '*Aufgrund* = wegen.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Hinsichtlich [die Kosten] gibt es keine Einwände.', a: ['der Kosten'], why: '*Hinsichtlich* takes the genitive.' },
      { s: 'Der Mieter [kann] die Miete monatlich zahlen. (an obligation)', a: ['muss', 'hat'], why: 'An obligation needs *muss* or *hat … zu*.' },
    ] },
  ],
};
