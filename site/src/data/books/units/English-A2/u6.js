// English A2, unit 6, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one speaking task, and one task in the format of A2 Key.
export const UNIT = {
  id: 'u6',
  title: 'Health and the body',
  goal: 'Say what is wrong, understand and give simple advice, talk about what is necessary, and make an appointment.',
  art: 'cactus',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['body', 'illness', 'should', 'have-to', 'doctor'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'What’s the matter?',
      about: 'Learn the parts of the body and say what is wrong.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'To talk about your health, you first need the words for the **body**. Most are regular: one *hand*, two *hands*. A few have an **irregular plural**, and you will use them often: one **tooth**, two **teeth**; one **foot**, two **feet**.\n\nIn English we say **my** head, **my** back, **my** leg. Many languages say *the head* when you talk about your own body, but in English you use **my, your, his, her**: *My back hurts*, not *The back hurts*.' },
          { t: 'table', caption: 'The body', explain: ['head'], head: ['Word', 'Example'], rows: [
            ['head', 'She’s wearing a hat on her head.'],
            ['eye / ear / nose / mouth', 'Close your eyes and listen.'],
            ['tooth (teeth)', 'Brush your teeth twice a day.'],
            ['throat', 'My throat is dry.'],
            ['neck / shoulder', 'He carries his bag on one shoulder.'],
            ['arm / hand / finger', 'Raise your hand if you know the answer.'],
            ['back / stomach', 'Lie on your back.'],
            ['leg / knee / foot (feet)', 'My feet are cold.'],
          ] },
          { t: 'tip', art: 'owl', md: 'The **gh** in *cough* sounds like **f**: /kɒf/. The **b** in *thumb* and the **k** in *knee* are silent. The **ch** in *stomach* sounds like **k**.' },
        ],
        [
          { t: 'text', md: 'To ask about a problem, say **What’s the matter?** or **What’s wrong?** You can also ask **Are you OK?**\n\nThere are two common ways to answer. Use **I’ve got** (or *I have*) + **a** + the problem: *I’ve got a headache.* *I’ve got a cold.* Or say that a part of your body **hurts**: *My back hurts.* *My feet hurt* (two feet: *hurt*, no *-s*).\n\nNotice the words with **-ache**: *a headache, a stomach ache, (a) toothache, (a) backache*. They mean a pain that continues.' },
          { t: 'table', caption: 'Common problems', explain: ['head', 'col1'], head: ['Problem', 'What it means'], rows: [
            ['a headache', 'your head hurts'],
            ['a stomach ache', 'your stomach hurts'],
            ['a sore throat', 'your throat hurts when you swallow'],
            ['a cough', 'you can’t stop coughing'],
            ['a cold', 'you are sneezing and your nose is running'],
            ['a temperature', 'your body is very hot'],
            ['the flu', 'a bad cold with a temperature; you feel very ill'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: '**What’s the matter?** – **I’ve got** a headache.', n: 'The question and the usual answer.' },
            { s: 'I don’t feel well. I**’ve got** a sore throat.', n: '*I don’t feel well* = I feel ill.' },
            { s: 'My left knee **hurts** when I walk.', n: 'One knee: *hurts*.' },
            { s: 'My eyes **hurt**. I need to stop.', n: 'Two eyes: *hurt*, no *-s*.' },
            { s: 'He**’s got** the flu. He’s in bed.', n: 'With *he*: *has got*.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I have headache.', 'I’ve got a headache.', 'Most problems need *a*.'],
            ['The back hurts me.', 'My back hurts.', 'Use *my* for your own body.'],
            ['I have pain in the stomach.', 'I’ve got a stomach ache.', 'English uses the *-ache* word.'],
            ['My teeths hurt.', 'My teeth hurt.', '*tooth* → *teeth*.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'At work', lines: [
            { who: 'Sara', s: 'Are you OK, Kemal? You look tired.' },
            { who: 'Kemal', s: 'Not really. I’ve got a terrible headache.' },
            { who: 'Sara', s: 'Oh no. Have you got a temperature?' },
            { who: 'Kemal', s: 'I don’t think so, but my throat hurts too.' },
            { who: 'Sara', s: 'Maybe it’s a cold. Go home and rest!' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the problem and what it means.', pairs: [
            ['a sore throat', 'it hurts when you swallow'],
            ['a temperature', 'your body is very hot'],
            ['a cough', 'you can’t stop coughing'],
            ['a stomach ache', 'your stomach hurts'],
            ['a cold', 'your nose is running'],
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
            { q: 'I’ve got a ___. I need to see the dentist.', o: ['toothache', 'sore throat', 'cough'], why: 'A dentist looks at your teeth.' },
            { q: 'My feet ___ after the long walk.', o: ['hurt', 'hurts', 'ache me'], why: 'Two feet: *hurt*.' },
            { q: '“What’s the ___?” – “I’ve got a cold.”', o: ['matter', 'problem with', 'pain'], why: 'The usual question: *What’s the matter?*' },
            { q: 'She’s got ___ temperature.', o: ['a', 'the', '–'], why: '*a temperature*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'I have [headache].', a: ['a headache'], why: '*a headache*, with *a*.' },
            { s: '[The] back hurts.', a: ['My'], why: 'Use *my* for your own body.' },
            { s: 'Brush your [tooths] every day.', a: ['teeth'], why: 'Irregular plural: *teeth*.' },
          ] },
        ],
        [
          { t: 'reading', title: 'An email', md: 'Dear Ms Grant, I’m sorry, but I can’t come to the English class this evening. I’ve got a bad ___ and my ___ is very sore, so I can’t talk much. I’m going to stay at ___ and rest. I hope to see you next Tuesday. Best wishes, Pablo' },
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam (Reading Part 4): choose the right word for each gap in the email.', items: [
            { q: 'I’ve got a bad ___', o: ['cold', 'ill', 'sick'], why: 'After *a bad*, a noun: *a bad cold*.' },
            { q: 'my ___ is very sore', o: ['throat', 'head', 'back'], why: 'A sore throat means it hurts to talk: *I can’t talk much*.' },
            { q: 'I’m going to stay at ___ and rest', o: ['home', 'house', 'bed'], why: 'We say *stay at home*. (*Stay in bed* uses *in*.)' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Reading Part 4, a short text has gaps, and you choose one of three words for each. Often all three words are about the same topic, so meaning is not enough: check the **grammar** and the **word that goes with it**. *Stay at home*, but *stay in bed*.' },
          { t: 'ex', kind: 'speak', h: 'Your turn: say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'What’s the matter?' },
            { a: 'I’ve got a headache and a sore throat.' },
            { a: 'My back hurts when I sit.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'You should rest',
      about: 'Give and understand advice with *should* and *shouldn’t*.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'To give **advice** (to say what you think is a good idea), use **should** + the base form of a verb: *You should drink more water.* The negative is **shouldn’t** (*should not*): *You shouldn’t go to work today.*\n\n**Should** is easy, because it never changes: it is the same for every person, with **no -s** (*she should*, not *she shoulds*) and **no to** after it (*you should rest*, not *you should to rest*).\n\nTo ask for advice, put **should** before the subject: **Should I** take a painkiller? **What should I** do?' },
          { t: 'table', caption: 'should', quiz: true, explain: ['head', 'col0'], head: ['', 'Example'], rows: [
            ['Positive', 'You should stay in bed.'],
            ['Negative', 'You shouldn’t go out.'],
            ['Question', 'Should I call a doctor?'],
            ['Short answers', 'Yes, you should. / No, you shouldn’t.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Advice is softer with **I think** or **Maybe**: *I think you should see a doctor.* *Maybe you should go to bed early.* For a negative, English says *I don’t think you should go*, not *I think you shouldn’t go*.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'You**’ve got** a cold. You **should** drink hot tea with honey.', n: 'Advice for a problem.' },
            { s: 'He **shouldn’t** carry heavy bags with his bad back.', n: 'A negative: not a good idea.' },
            { s: '**Should I** take the medicine before or after eating?', n: 'Asking for advice.' },
            { s: '**I think** you **should** stay at home today.', n: 'Softer advice.' },
            { s: '**I don’t think** you **should** play football this week.', n: 'Soft negative advice.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['You should to rest.', 'You should rest.', 'No *to* after *should*.'],
            ['She shoulds see a doctor.', 'She should see a doctor.', '*should* never takes *-s*.'],
            ['You should resting.', 'You should rest.', 'After *should*, the base form.'],
            ['Do I should go?', 'Should I go?', 'Questions start with *should*, no *do*.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Asking for advice', lines: [
            { who: 'Ines', s: 'I can’t sleep at night. What should I do?' },
            { who: 'Doctor', s: 'Do you drink coffee in the evening?' },
            { who: 'Ines', s: 'Yes, two or three cups.' },
            { who: 'Doctor', s: 'You shouldn’t drink coffee after four o’clock. And you should go for a walk every day.' },
            { who: 'Ines', s: 'Should I take sleeping tablets?' },
            { who: 'Doctor', s: 'No, I don’t think you should. Try these ideas first.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Read the dialogue. Choose the right answer.', items: [
            { q: 'What is Ines’s problem?', o: ['She can’t sleep.', 'She has a headache.', 'She drinks too much water.'], why: '*I can’t sleep at night.*' },
            { q: 'What does the doctor say about tablets?', o: ['She shouldn’t take them now.', 'She should take two a day.', 'She should buy them at the pharmacy.'], why: '*No, I don’t think you should. Try these ideas first.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write should or shouldn’t.', items: [
            { q: 'You’ve got a temperature. You ___ go to school today.', a: ['shouldn’t', 'should not'], why: 'Going out with a temperature is not a good idea.' },
            { q: 'Your eyes hurt. You ___ have a break from the computer.', a: ['should'], why: 'A break is a good idea.' },
            { q: 'He’s got a sore throat. He ___ shout at the football match.', a: ['shouldn’t', 'should not'], why: 'Shouting hurts a sore throat.' },
            { q: 'It’s very cold. You ___ wear a warm coat.', a: ['should'], why: 'Good advice in cold weather.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'You should [to drink] more water.', a: ['drink'], why: 'No *to* after *should*.' },
            { s: 'She [shoulds] eat more fruit.', a: ['should'], why: '*should* never takes *-s*.' },
            { s: '[Do I should] call the doctor?', a: ['Should I'], why: 'Questions start with *Should*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each problem with the best advice.', pairs: [
            ['I’ve got a toothache.', 'You should see a dentist.'],
            ['I’m always tired.', 'You should go to bed earlier.'],
            ['I’ve got a cough.', 'You shouldn’t smoke.'],
            ['My back hurts.', 'You shouldn’t carry heavy bags.'],
          ] },
          { t: 'ex', kind: 'build', h: 'Write the advice. Two words do not belong.', items: [
            { a: 'I think you should drink more water.', extra: ['to', 'shoulds'], why: '*I think you should* + base form.' },
            { a: 'You shouldn’t eat so much sugar.', extra: ['don’t', 'eating'], why: '*shouldn’t* + base form.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam (Reading Part 1): read the notice or message. What does it say?', items: [
            { q: 'Sign at a swimming pool: “Please do not eat or drink in the changing rooms.”', o: ['You shouldn’t have food in the changing rooms.', 'You can buy food in the changing rooms.', 'The changing rooms close when you eat.'], why: '*Do not eat or drink* there.' },
            { q: '“Grandma – the doctor says you should take one tablet in the morning and one at night. Love, Ben”', o: ['Grandma should take two tablets a day.', 'Grandma should take one tablet a day.', 'Grandma should see the doctor at night.'], why: 'One in the morning and one at night: two a day.' },
            { q: 'Pharmacy: “Ask our staff for advice. No appointment needed.”', o: ['You can talk to someone without booking first.', 'You must book before you ask a question.', 'The staff are only there by appointment.'], why: '*No appointment needed* = you don’t have to book.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Reading Part 1, look for words that mean the same as the text but are not the same: *one in the morning and one at night* = *two a day*; *no appointment needed* = *without booking*. If an option uses the exact words of the text, check it twice: it is often the trap.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'You should drink more water.' },
            { a: 'You shouldn’t go to work today.' },
            { a: 'What should I do?' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'At the doctor’s',
      about: 'Use *have to* and *don’t have to*, make an appointment and buy medicine.',
      art: 'croissant',
      spreads: [
        [
          { t: 'text', md: 'Use **have to** + the base form of a verb when something is **necessary**: you have no choice, often because of a rule or because another person says so. *I have to wait.* *You have to show your card.* With **he, she, it**, use **has to**: *She has to take the tablets twice a day.*\n\nUse **don’t have to** (or **doesn’t have to**) when something is **not necessary**. You can do it if you want, but you have a choice: *You don’t have to pay for the prescription.* (It’s free.)\n\n**should** is advice (a good idea); **have to** is a necessity (no choice). Compare: *You should rest* (my advice) and *You have to stay in hospital tonight* (the doctor’s decision).' },
          { t: 'table', caption: 'have to', quiz: true, explain: ['head'], head: ['', 'Positive', 'Negative', 'Question'], rows: [
            ['I / you / we / they', 'I have to wait', 'I don’t have to pay', 'Do I have to wait?'],
            ['he / she / it', 'she has to wait', 'she doesn’t have to pay', 'Does she have to wait?'],
          ] },
          { t: 'tip', art: 'owl', md: '**have to** makes questions and negatives with **do** and **does**, like a normal verb: *Do you have to work on Saturday?* *He doesn’t have to come.* Say it /ˈhæftə/: *have to* sounds like **haf-ta**, and *has to* like **has-ta**.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'I **have to** take this medicine three times a day.', n: 'The doctor says so: necessary.' },
            { s: 'He **has to** stay in bed for two days.', n: 'With *he*: *has to*.' },
            { s: 'You **don’t have to** make an appointment. Just come in.', n: 'Not necessary.' },
            { s: '**Do** I **have to** wait long?', n: 'A question with *do*.' },
            { s: 'Children **don’t have to** pay for medicine here.', n: 'It’s free for them.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['She have to rest.', 'She has to rest.', 'With *she*: *has to*.'],
            ['I haven’t to work today.', 'I don’t have to work today.', 'The negative uses *don’t*.'],
            ['Have I to wait?', 'Do I have to wait?', 'The question uses *do*.'],
            ['You have to see a doctor. (only a good idea)', 'You should see a doctor.', 'Advice: *should*.'],
          ] },
        ],
        [
          { t: 'text', md: 'At the doctor’s, first you make an **appointment**: a fixed time to see the doctor. The person at the desk is the **receptionist**. The doctor may give you a **prescription**: a paper that you take to the **pharmacy** (in Britain also called the **chemist’s**) to get your **medicine**. Medicine can be **tablets** (small, hard pieces you swallow) or **cream** for your skin.' },
          { t: 'dialogue', title: 'Making an appointment', lines: [
            { who: 'Receptionist', s: 'Good morning, Hill Street Surgery.' },
            { who: 'Omar', s: 'Hello. I’d like to make an appointment, please. I’ve got a bad cough.' },
            { who: 'Receptionist', s: 'Can you come tomorrow at ten past nine?' },
            { who: 'Omar', s: 'Yes, that’s fine. Do I have to bring anything?' },
            { who: 'Receptionist', s: 'You have to bring your health card. You don’t have to bring anything else.' },
            { who: 'Omar', s: 'Thank you. See you tomorrow.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
            { q: 'My sister ___ wear glasses for reading.', o: ['has to', 'have to', 'haves to'], why: 'With *she*: *has to*.' },
            { q: 'You ___ pay. The museum is free on Sundays.', o: ['don’t have to', 'have to', 'doesn’t have to'], why: 'Free = not necessary to pay.' },
            { q: '___ we have to bring our passports?', o: ['Do', 'Have', 'Are'], why: 'Questions with *have to* use *do*.' },
            { q: 'It’s only a cold. You ___ see a doctor, but you should rest.', o: ['don’t have to', 'have to', 'should'], why: 'Not necessary.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'should or have to? Choose the best sentence.', items: [
            { q: 'The doctor says Ana must take tablets. There is no choice.', o: ['Ana has to take tablets.', 'Ana should to take tablets.', 'Ana doesn’t have to take tablets.'], why: 'No choice: *has to*.' },
            { q: 'Your friend is tired. It is a good idea to sleep more.', o: ['You should sleep more.', 'You have to sleeping more.', 'You don’t should sleep more.'], why: 'A good idea: *should*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the correct form of have to.', items: [
            { q: 'He ___ (have to) work on Saturdays.', a: ['has to'], why: '*he has to*.' },
            { q: 'We ___ (not / have to) wear a uniform at school.', a: ['don’t have to', 'do not have to'], why: '*We don’t have to*.' },
            { q: '___ she have to stay in hospital?', a: ['Does'], why: 'Questions with *she*: *Does she have to…?*' },
            { q: 'You ___ (not / have to) come with me. I can go alone.', a: ['don’t have to', 'do not have to'], why: 'Not necessary.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Where do you hear it: at the doctor’s or at the pharmacy?', groups: ['doctor', 'pharmacy'], explain: ['groups'], items: [
            { s: 'Open your mouth and say “ah”.', g: 0, why: 'The doctor looks at your throat.' },
            { s: 'Here is your prescription.', g: 0, why: 'The doctor writes it.' },
            { s: 'That’s six pounds for the tablets.', g: 1, why: 'You pay for medicine at the pharmacy.' },
            { s: 'Take two with water after meals.', g: 1, why: 'The pharmacist explains the medicine.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'At the pharmacy', lines: [
            { who: 'Pharmacist', s: 'Hello. Have you got a prescription?' },
            { who: 'Lucía', s: 'No, I haven’t. I’ve just got a sore throat. Have you got anything for it?' },
            { who: 'Pharmacist', s: 'You can try these sweets. You have to take one every three hours.' },
            { who: 'Lucía', s: 'Do I have to take them with food?' },
            { who: 'Pharmacist', s: 'No, you don’t. But you shouldn’t take more than eight a day.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam (Listening Part 3): listen to the conversation and choose the right answer.', items: [
            { q: 'Why is Lucía at the pharmacy?', o: ['She has a sore throat.', 'She has a prescription.', 'She wants some food.'], why: '*I’ve just got a sore throat.*' },
            { q: 'How often does she have to take the sweets?', o: ['every three hours', 'eight times a day', 'after every meal'], why: '*One every three hours*; eight is the most in a day.' },
            { q: 'Does she have to take them with food?', o: ['No, she doesn’t.', 'Yes, she does.', 'Only in the morning.'], why: '*No, you don’t.*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Listening Part 3 you hear a longer conversation and answer five questions. You will often hear **all three** options, but only one answers the question. Here *eight* is in the conversation, but it is the most in a day, not how often.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'I’d like to make an appointment, please.' },
            { a: 'Do I have to bring anything?' },
            { a: 'You don’t have to pay for this.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'Stay well this winter',
      about: 'Read a leaflet with simple health advice, and write a short message to say you are ill.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'Leaflets give short, clear advice. They often use the **imperative** (the base form of the verb, with no subject): *Wash your hands.* *Don’t share cups.* They also use **should**, **have to** and **don’t have to**, which you learned in this unit. Notice how each part starts with a heading: this helps you find information fast.' },
          { t: 'reading', title: 'Stay well this winter', md: '**Keep warm.** Wear a hat, a scarf and gloves when you go out. Your home should be at least 18 degrees.\n\n**Wash your hands.** Colds and the flu travel easily. Wash your hands often with soap, and don’t share cups or towels.\n\n**Eat and sleep well.** You should eat fruit and vegetables every day and drink plenty of water. Adults should sleep seven to nine hours a night.\n\n**Do you feel ill?** For a cold, you don’t have to see a doctor. Rest, drink warm drinks and ask at the pharmacy. But you have to call a doctor if you have a very high temperature for more than three days.\n\n**The flu vaccine.** People over 65 don’t have to pay for it. Ask your doctor’s receptionist for an appointment.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the leaflet. True, false, or not given?', items: [
            { q: 'Your home should be at least 18 degrees.', a: 't', why: '*Your home should be at least 18 degrees.*' },
            { q: 'You should see a doctor for every cold.', a: 'f', why: '*For a cold, you don’t have to see a doctor.*' },
            { q: 'Adults should sleep seven to nine hours.', a: 't', why: 'It says this in *Eat and sleep well*.' },
            { q: 'The pharmacy is open on Sundays.', a: 'ng', why: 'The leaflet doesn’t say when the pharmacy is open.' },
            { q: 'People over 65 have to pay for the flu vaccine.', a: 'f', why: 'They *don’t have to pay* for it.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'When do you have to call a doctor?', o: ['With a very high temperature for more than three days.', 'When you have a cold.', 'When you need a vaccine.'], why: 'See *Do you feel ill?*' },
            { q: 'Why should you wash your hands often?', o: ['Colds and the flu travel easily.', 'Your home is cold.', 'The pharmacy says so.'], why: '*Colds and the flu travel easily.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'In the format of the A2 Key exam (Reading Part 2): which part of the leaflet should each person read?', pairs: [
            ['Ravi is 70 and wants to know about the vaccine.', 'The flu vaccine'],
            ['Grace has a cold and wants to know if she needs a doctor.', 'Do you feel ill?'],
            ['Tom is often tired and goes to bed at 1 a.m.', 'Eat and sleep well'],
            ['Mei’s flat is very cold in the evening.', 'Keep warm'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Reading Part 2 you match people to short texts (three texts, seven questions). Underline what each person **needs**, then look for a text that gives exactly that. Be careful: two texts can talk about the same topic, but only one answers the person’s need.' },
        ],
        [
          { t: 'text', md: 'When you are ill, you often write a short message to say you can’t come to work or to class. A good message says **what the problem is**, **what you are going to do**, and **what happens next** (when you are coming back, or what the other person should do). Use what you learned: *I’ve got…*, *I have to…*, *I’m going to…*, *Could you…?*' },
          { t: 'examples', items: [
            { s: 'Hi Ms Grant, I’m sorry, but I can’t come to work today. **I’ve got the flu.**', n: 'The problem.' },
            { s: 'The doctor says **I have to stay in bed** for two days.', n: 'What is necessary.' },
            { s: 'I**’m going to** come back on Thursday. **Could you** send me the notes from the meeting?', n: 'What happens next.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order to make sentences for a message.', items: [
            { a: 'I can’t come to class today.', why: 'Subject, *can’t*, verb, place, time.' },
            { a: 'I have to stay at home.', why: '*have to* + base form.' },
            { a: 'I’m going to come back on Monday.', why: 'A plan with *going to*.' },
          ] },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'You should wash your hands often.' },
            { a: 'For a cold, you don’t have to see a doctor.' },
            { a: 'I’m sorry, but I can’t come to work today.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
      { q: 'I’ve got ___ sore throat.', o: ['a', 'the', '–'], why: '*a sore throat*.' },
      { q: 'My feet ___.', o: ['hurt', 'hurts', 'is hurting me'], why: 'Two feet: *hurt*.' },
      { q: 'You’ve got a cough. You ___ smoke.', o: ['shouldn’t', 'should', 'have to'], why: 'Smoking is bad for a cough.' },
      { q: 'She ___ take the tablets with food.', o: ['has to', 'have to', 'should to'], why: 'With *she*: *has to*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write should, shouldn’t, have to, has to, don’t have to or doesn’t have to.', items: [
      { q: 'It’s free. You ___ pay.', a: ['don’t have to', 'do not have to'], why: 'Not necessary.' },
      { q: 'The doctor says he ___ stay in bed. He has no choice.', a: ['has to'], why: 'Necessary, with *he*.' },
      { q: 'You look tired. I think you ___ go to bed early.', a: ['should'], why: 'Advice.' },
      { q: 'You ___ eat so many sweets. They are bad for your teeth.', a: ['shouldn’t', 'should not'], why: 'Advice: not a good idea.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the problem and the advice.', pairs: [
      ['I’ve got a temperature.', 'You should stay in bed.'],
      ['My eyes hurt.', 'You should have a break from the screen.'],
      ['I’ve got a toothache.', 'You should see a dentist.'],
      ['I feel sick.', 'You shouldn’t eat anything heavy.'],
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'You should [to rest].', a: ['rest'], why: 'No *to* after *should*.' },
      { s: '[Have I] to wait?', a: ['Do I have'], why: 'Questions with *have to* use *do*.' },
      { s: 'I have [headache].', a: ['a headache'], why: '*a headache*.' },
      { s: 'My [tooths] hurt.', a: ['teeth'], why: '*tooth* → *teeth*.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Where are you?', items: [
      { q: '“Here is your prescription. Take it to the pharmacy.”', o: ['At the doctor’s.', 'At the pharmacy.', 'At the dentist’s.'], why: 'The doctor gives you a prescription.' },
      { q: '“Take one tablet twice a day. That’s four pounds.”', o: ['At the pharmacy.', 'At the doctor’s.', 'At the hospital desk.'], why: 'You pay for medicine at the pharmacy.' },
    ] },
  ],
};
