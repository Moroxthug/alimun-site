/**
 * ============================================================
 *  ALIMUN — Exam preparation sets
 *  /js/exam-prep.js
 *
 *  Practice tasks in the style of common exams, per course language.
 *  Each task uses an existing exercise type of the student dashboard
 *  (Multiple Choice, Fill in Blank, Word Matching, Speaking, Listening,
 *  Essay). The dashboard adds them to Practice under "Exam prep" and
 *  saves results as Tests scores.
 *
 *  These are practice tasks written by Alimun in the format of each
 *  exam. They are not official material and Alimun is not affiliated
 *  with Cambridge English, IELTS, the Goethe-Institut or telc.
 * ============================================================
 */
window.ALIMUN_EXAM_PREP = {
  English: [
    {
      short: 'B2 First',
      level: 'B2',
      tasks: [
        {
          type: 'Multiple Choice',
          title: 'Use of English 1: Multiple-choice cloze',
          diff: 3, time: '4 min',
          question: 'Choose the word that best fits the gap:',
          stem: 'Because of the storm, the organisers had to ______ the concert until the following weekend.',
          opts: ['put off', 'set off', 'take off', 'call off'],
          correct: 0,
          explanation: '"Put off" means to postpone. "Call off" means to cancel completely, which does not fit "until the following weekend".'
        },
        {
          type: 'Fill in Blank',
          title: 'Use of English 2: Open cloze',
          diff: 3, time: '3 min',
          question: 'Write ONE word to fill the gap:',
          stem: 'She has been living in Madrid ______ she finished university.',
          correctAnswer: 'since',
          explanation: 'Use "since" with a starting point in time and the present perfect (continuous).'
        },
        {
          type: 'Fill in Blank',
          title: 'Use of English 3: Word formation',
          diff: 3, time: '3 min',
          question: 'Use the word in capitals to form a word that fits the gap:',
          stem: 'The new museum has been a huge ______ with tourists. (SUCCEED)',
          correctAnswer: 'success',
          explanation: 'After "a huge" you need a noun: succeed (verb) → success (noun).'
        },
        {
          type: 'Multiple Choice',
          title: 'Use of English 4: Key word transformation',
          diff: 4, time: '4 min',
          question: 'Choose the sentence that has the same meaning as "It\'s a pity I didn\'t go to the party." using the word WISH:',
          opts: [
            'I wish I went to the party.',
            'I wish I had gone to the party.',
            'I wish I would go to the party.',
            'I wish I have gone to the party.'
          ],
          correct: 1,
          explanation: 'Regret about the past: "wish" + past perfect ("had gone").'
        },
        {
          type: 'Listening',
          title: 'Listening: Short extract',
          diff: 3, time: '3 min',
          question: 'Listen and write exactly what you hear:',
          audioText: 'The train to Manchester will now leave from platform six at a quarter past ten.'
        },
        {
          type: 'Speaking',
          title: 'Speaking 2: Comparing photos',
          diff: 3, time: '3 min',
          question: 'Read these phrases for comparing two photos aloud:',
          stem: 'Both photos show people working together, but in the first one they seem more relaxed, whereas in the second one they look under pressure.',
          expectedText: 'Both photos show people working together but in the first one they seem more relaxed whereas in the second one they look under pressure'
        },
        {
          type: 'Essay',
          title: 'Writing 1: Essay',
          diff: 4, time: '40 min',
          question: 'Write an essay of 140–190 words:',
          stem: 'In your English class you have been talking about cities. Your teacher asks you to write an essay: "Is it better to live in a city or in the countryside?" Write about 1. transport, 2. jobs, 3. your own idea.',
          minWords: 140,
          criteria: 'B2 First essay: answers all three points, clear paragraphs, linking words, range of vocabulary and grammar'
        }
      ]
    },
    {
      short: 'C1 Advanced',
      level: 'C1',
      tasks: [
        {
          type: 'Multiple Choice',
          title: 'Use of English 1: Multiple-choice cloze',
          diff: 4, time: '4 min',
          question: 'Choose the word that best fits the gap:',
          stem: 'The report ______ attention to the growing gap between rich and poor regions.',
          opts: ['draws', 'pulls', 'takes', 'brings'],
          correct: 0,
          explanation: 'The collocation is "draw attention to something".'
        },
        {
          type: 'Fill in Blank',
          title: 'Use of English 2: Open cloze',
          diff: 4, time: '3 min',
          question: 'Write ONE word to fill the gap:',
          stem: '______ the bad weather, the match went ahead as planned.',
          correctAnswer: 'despite',
          explanation: '"Despite" is followed by a noun phrase ("the bad weather"); "although" would need a clause.'
        },
        {
          type: 'Fill in Blank',
          title: 'Use of English 3: Word formation',
          diff: 5, time: '3 min',
          question: 'Use the word in capitals to form a word that fits the gap:',
          stem: 'Her explanation was so ______ that nobody believed her. (CONVINCE)',
          correctAnswer: 'unconvincing',
          explanation: 'The sentence needs a negative adjective: convince → convincing → unconvincing.'
        },
        {
          type: 'Multiple Choice',
          title: 'Use of English 4: Key word transformation',
          diff: 5, time: '4 min',
          question: 'Choose the sentence closest in meaning to "People say that the castle was built in the 12th century." using the word SAID:',
          opts: [
            'The castle is said to have been built in the 12th century.',
            'The castle is said to be built in the 12th century.',
            'The castle was said building in the 12th century.',
            'It said the castle had been built in the 12th century.'
          ],
          correct: 0,
          explanation: 'Reporting a past event in the passive: "is said to have been" + past participle.'
        },
        {
          type: 'Word Matching',
          title: 'Vocabulary: Academic collocations',
          diff: 4, time: '5 min',
          question: 'Match each verb with the noun it collocates with:',
          pairs: [
            { left: 'conduct', right: 'research' },
            { left: 'raise', right: 'awareness' },
            { left: 'reach', right: 'a consensus' },
            { left: 'pose', right: 'a threat' }
          ]
        },
        {
          type: 'Speaking',
          title: 'Speaking 3: Discussing options',
          diff: 4, time: '3 min',
          question: 'Read these phrases for a discussion task aloud:',
          stem: 'I can see your point, but I would argue that the long-term benefits outweigh the initial costs.',
          expectedText: 'I can see your point but I would argue that the long term benefits outweigh the initial costs'
        },
        {
          type: 'Essay',
          title: 'Writing 1: Essay',
          diff: 5, time: '45 min',
          question: 'Write an essay of 220–260 words:',
          stem: 'Your class has attended a panel discussion on how governments can encourage people to live more healthily. Write an essay discussing two of these methods: taxes on unhealthy food, free sports facilities, health education in schools. Explain which method is more effective, giving reasons.',
          minWords: 220,
          criteria: 'C1 Advanced essay: discusses two methods, evaluates which is more effective, well organised, sophisticated vocabulary and structures'
        }
      ]
    },
    {
      short: 'IELTS',
      level: 'B2–C1',
      tasks: [
        {
          type: 'Multiple Choice',
          title: 'Reading: True / False / Not Given',
          diff: 3, time: '4 min',
          question: 'Text: "The city library opened in 1912. It was extended in 1960, and today it holds more than two million books." Statement: "The library was extended twice."',
          opts: ['True', 'False', 'Not Given'],
          correct: 1,
          explanation: 'The text mentions only one extension (1960), so the statement contradicts it: False. "Not Given" is for information the text does not mention at all.'
        },
        {
          type: 'Multiple Choice',
          title: 'Reading: True / False / Not Given (2)',
          diff: 3, time: '4 min',
          question: 'Text: "Most visitors to the park arrive by car, although a bus service runs every hour." Statement: "The bus service is cheaper than parking."',
          opts: ['True', 'False', 'Not Given'],
          correct: 2,
          explanation: 'The text says nothing about prices, so the answer is Not Given.'
        },
        {
          type: 'Listening',
          title: 'Listening 1: Form completion',
          diff: 3, time: '3 min',
          question: 'Listen and write exactly what you hear:',
          audioText: 'My appointment is on Tuesday the fourteenth at half past three.'
        },
        {
          type: 'Word Matching',
          title: 'Vocabulary: Describing trends (Task 1)',
          diff: 3, time: '4 min',
          question: 'Match each verb with its meaning:',
          pairs: [
            { left: 'to soar', right: 'to rise very quickly' },
            { left: 'to plummet', right: 'to fall very quickly' },
            { left: 'to fluctuate', right: 'to go up and down' },
            { left: 'to level off', right: 'to stop changing' }
          ]
        },
        {
          type: 'Speaking',
          title: 'Speaking 2: Long turn',
          diff: 3, time: '3 min',
          question: 'Read this opening for a Part 2 talk aloud:',
          stem: 'I would like to talk about a teacher who had a big influence on me when I was at secondary school.',
          expectedText: 'I would like to talk about a teacher who had a big influence on me when I was at secondary school'
        },
        {
          type: 'Essay',
          title: 'Writing Task 2: Opinion essay',
          diff: 5, time: '40 min',
          question: 'Write at least 250 words:',
          stem: 'Some people think that university education should be free for everyone. Others believe students should pay for it themselves. Discuss both views and give your own opinion.',
          minWords: 250,
          criteria: 'IELTS Task 2: addresses both views and gives an opinion, coherence and cohesion, lexical resource, grammatical range and accuracy'
        }
      ]
    }
  ],

  German: [
    {
      short: 'Goethe B1',
      level: 'B1',
      tasks: [
        {
          type: 'Multiple Choice',
          title: 'Lesen: Kurze Nachricht',
          diff: 2, time: '4 min',
          question: 'Text: "Liebe Anna, ich kann am Samstag leider nicht zum Kino kommen, weil meine Eltern zu Besuch sind. Hast du am Sonntag Zeit? Viele Grüße, Jonas" — Warum kann Jonas am Samstag nicht?',
          opts: ['Er muss arbeiten.', 'Seine Eltern besuchen ihn.', 'Er ist krank.', 'Das Kino ist geschlossen.'],
          correct: 1,
          explanation: '"weil meine Eltern zu Besuch sind" = his parents are visiting.'
        },
        {
          type: 'Fill in Blank',
          title: 'Grammatik: Nebensatz mit "weil"',
          diff: 2, time: '3 min',
          question: 'Ergänzen Sie das Verb in der richtigen Form (haben):',
          stem: 'Ich komme heute später, weil ich noch einen Termin ______.',
          correctAnswer: 'habe',
          explanation: 'Nach "weil" steht das konjugierte Verb am Ende: "weil ich noch einen Termin habe".'
        },
        {
          type: 'Listening',
          title: 'Hören: Durchsage',
          diff: 2, time: '3 min',
          question: 'Hören Sie und schreiben Sie genau, was Sie hören:',
          audioText: 'Der Zug nach München hat heute etwa zwanzig Minuten Verspätung.'
        },
        {
          type: 'Speaking',
          title: 'Sprechen 1: Gemeinsam etwas planen',
          diff: 2, time: '3 min',
          question: 'Lesen Sie diese Redemittel laut vor:',
          stem: 'Was hältst du davon, wenn wir uns am Freitag um sieben treffen? Das passt mir gut.',
          expectedText: 'Was hältst du davon wenn wir uns am Freitag um sieben treffen Das passt mir gut'
        },
        {
          type: 'Essay',
          title: 'Schreiben 1: E-Mail an einen Freund',
          diff: 3, time: '20 min',
          question: 'Schreiben Sie eine E-Mail (etwa 80 Wörter):',
          stem: 'Sie waren letzte Woche auf der Hochzeit einer Freundin. Ein Freund konnte nicht kommen. Schreiben Sie ihm: Beschreiben Sie, wie die Feier war. Erzählen Sie, was Ihnen besonders gefallen hat. Machen Sie einen Vorschlag für ein Treffen.',
          minWords: 80,
          criteria: 'Goethe B1 Schreiben Teil 1: alle drei Punkte, passende Anrede und Gruß, verständliche Sätze'
        },
        {
          type: 'Essay',
          title: 'Schreiben 2: Meinung im Forum',
          diff: 3, time: '25 min',
          question: 'Schreiben Sie Ihre Meinung (etwa 80 Wörter):',
          stem: 'In einem Online-Forum wird gefragt: "Sollten Kinder schon in der Grundschule ein eigenes Handy haben?" Schreiben Sie Ihre Meinung.',
          minWords: 80,
          criteria: 'Goethe B1 Schreiben Teil 2: klare Meinung mit Begründung, Beispiele, Konnektoren (weil, deshalb, aber)'
        }
      ]
    },
    {
      short: 'Goethe B2',
      level: 'B2',
      tasks: [
        {
          type: 'Multiple Choice',
          title: 'Lesen: Textverständnis',
          diff: 4, time: '5 min',
          question: 'Text: "Immer mehr Unternehmen bieten ihren Mitarbeitenden an, teilweise von zu Hause aus zu arbeiten. Kritiker befürchten jedoch, dass der persönliche Austausch im Team darunter leidet." — Was befürchten die Kritiker?',
          opts: [
            'Dass die Mitarbeitenden weniger verdienen.',
            'Dass die Zusammenarbeit im Team schlechter wird.',
            'Dass die Unternehmen mehr Büros brauchen.',
            'Dass niemand mehr ins Büro kommen darf.'
          ],
          correct: 1,
          explanation: '"dass der persönliche Austausch im Team darunter leidet" = the personal exchange in the team suffers.'
        },
        {
          type: 'Word Matching',
          title: 'Wortschatz: Nomen-Verb-Verbindungen',
          diff: 4, time: '5 min',
          question: 'Ordnen Sie Nomen und Verb zu:',
          pairs: [
            { left: 'eine Entscheidung', right: 'treffen' },
            { left: 'in Frage', right: 'kommen' },
            { left: 'Rücksicht', right: 'nehmen' },
            { left: 'zur Verfügung', right: 'stehen' }
          ]
        },
        {
          type: 'Fill in Blank',
          title: 'Grammatik: Konnektoren',
          diff: 4, time: '3 min',
          question: 'Ergänzen Sie den passenden Konnektor (obwohl, trotzdem, deshalb):',
          stem: 'Es hat den ganzen Tag geregnet. ______ sind wir spazieren gegangen.',
          correctAnswer: 'trotzdem',
          explanation: '"Trotzdem" steht am Satzanfang mit Verb an Position 2 und drückt einen Gegensatz aus. "Obwohl" leitet einen Nebensatz ein.'
        },
        {
          type: 'Listening',
          title: 'Hören: Radiobeitrag',
          diff: 4, time: '3 min',
          question: 'Hören Sie und schreiben Sie genau, was Sie hören:',
          audioText: 'Laut einer neuen Studie verbringen Jugendliche täglich mehr als drei Stunden am Smartphone.'
        },
        {
          type: 'Speaking',
          title: 'Sprechen 1: Vortrag halten',
          diff: 4, time: '3 min',
          question: 'Lesen Sie diese Redemittel für einen Vortrag laut vor:',
          stem: 'In meinem Vortrag möchte ich zunächst die Vorteile nennen und anschließend auf die Nachteile eingehen.',
          expectedText: 'In meinem Vortrag möchte ich zunächst die Vorteile nennen und anschließend auf die Nachteile eingehen'
        },
        {
          type: 'Essay',
          title: 'Schreiben 1: Forumsbeitrag',
          diff: 5, time: '50 min',
          question: 'Schreiben Sie einen Forumsbeitrag (etwa 150 Wörter):',
          stem: 'Thema: "Sollte das Studium für alle kostenlos sein?" Äußern Sie Ihre Meinung, nennen Sie Gründe und Beispiele und gehen Sie auf eine andere Meinung ein.',
          minWords: 150,
          criteria: 'Goethe B2 Schreiben Teil 1: Meinung mit Gründen und Beispielen, Gegenargument, Textaufbau, Wortschatz und Grammatik auf B2-Niveau'
        }
      ]
    },
    {
      short: 'telc B1',
      level: 'B1',
      tasks: [
        {
          type: 'Multiple Choice',
          title: 'Sprachbausteine 1: Brief',
          diff: 2, time: '3 min',
          question: 'Wählen Sie das passende Wort für die Lücke:',
          stem: 'Sehr geehrte Damen und Herren, ich interessiere mich ______ Ihren Deutschkurs am Abend.',
          opts: ['für', 'an', 'über', 'auf'],
          correct: 0,
          explanation: 'Das Verb heißt "sich interessieren für" + Akkusativ.'
        },
        {
          type: 'Fill in Blank',
          title: 'Sprachbausteine 2: Lückentext',
          diff: 2, time: '3 min',
          question: 'Ergänzen Sie das fehlende Wort (deshalb, denn, aber):',
          stem: 'Ich möchte nächste Woche Urlaub nehmen, ______ meine Schwester heiratet.',
          correctAnswer: 'denn',
          explanation: '"Denn" verbindet zwei Hauptsätze und gibt einen Grund an; das Verb bleibt an Position 2.'
        },
        {
          type: 'Word Matching',
          title: 'Leseverstehen: Überschriften',
          diff: 2, time: '5 min',
          question: 'Welche Überschrift passt zu welchem Text?',
          pairs: [
            { left: 'Ab Montag fahren die Busse alle zehn Minuten.', right: 'Neuer Fahrplan' },
            { left: 'Das Schwimmbad bleibt wegen Reparaturen geschlossen.', right: 'Vorübergehend zu' },
            { left: 'Die Stadt pflanzt dieses Jahr 500 neue Bäume.', right: 'Mehr Grün' },
            { left: 'Der Markt findet jetzt auch samstags statt.', right: 'Zusätzlicher Termin' }
          ]
        },
        {
          type: 'Listening',
          title: 'Hörverstehen: Ansage',
          diff: 2, time: '3 min',
          question: 'Hören Sie und schreiben Sie genau, was Sie hören:',
          audioText: 'Die Praxis ist am Mittwochnachmittag geschlossen.'
        },
        {
          type: 'Speaking',
          title: 'Sprechen: Sich vorstellen',
          diff: 2, time: '3 min',
          question: 'Lesen Sie den Text laut vor:',
          stem: 'Ich heiße Maria, komme aus Spanien und wohne seit zwei Jahren in Köln.',
          expectedText: 'Ich heiße Maria komme aus Spanien und wohne seit zwei Jahren in Köln'
        },
        {
          type: 'Essay',
          title: 'Schriftlicher Ausdruck: Halbformeller Brief',
          diff: 3, time: '30 min',
          question: 'Schreiben Sie einen Brief (etwa 80–100 Wörter):',
          stem: 'Sie haben eine Wohnung gemietet. Die Heizung funktioniert seit einer Woche nicht. Schreiben Sie an Ihre Vermieterin, Frau Weber: Beschreiben Sie das Problem, fragen Sie, wann ein Techniker kommen kann, und schlagen Sie einen Termin vor.',
          minWords: 80,
          criteria: 'telc B1 Brief: Anrede und Gruß formell, alle Punkte, klare Bitte, passende Höflichkeitsformen'
        }
      ]
    }
  ]
};
