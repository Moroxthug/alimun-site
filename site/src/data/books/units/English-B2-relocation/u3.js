// English B2 for moving abroad, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Healthcare in depth',
  goal: 'Talk to doctors and specialists in detail and understand treatment.',
  art: 'teacup',
  tags: { skills: ['speaking', 'reading', 'grammar', 'vocabulary'], topics: ['healthcare', 'referrals', 'indirect-questions', 'present-perfect-continuous', 'medication', 'patient-leaflet'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Referrals and specialists',
      about: 'Understand how referrals work and ask a doctor to explain things clearly.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'In the UK, you usually see a **GP** (a general practitioner, or family doctor) first. If you need a specialist, the GP **refers** you: they send a **referral** to a hospital or clinic. The hospital then contacts you with an **outpatient appointment**, which means you visit the hospital but do not stay overnight. Waiting times for specialists can be long, so it is worth keeping every letter and reference number.' },
          { t: 'table', caption: 'Words for hospital care', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['GP', 'a general doctor, usually the first one you see'],
            ['refer someone to', 'send a patient to a specialist'],
            ['consultant', 'a senior hospital doctor who specialises in one area'],
            ['outpatient appointment', 'a hospital visit without an overnight stay'],
            ['scan', 'a picture of the inside of the body, for example an X-ray or an MRI'],
            ['follow-up appointment', 'a later appointment to check progress'],
          ] },
        ],
        [
          { t: 'text', md: 'When a doctor explains something, it is perfectly normal to ask questions. **Indirect questions** sound polite and careful. After *Could you tell me…*, *Do you know…* or *I was wondering…*, use normal statement word order, with no *do*, *does* or *did*.' },
          { t: 'examples', items: [
            { s: 'Could you tell me **what this result means**?', n: 'Direct question: *What does this result mean?* In the indirect question, *does* disappears and the verb takes *-s*.' },
            { s: 'Could you explain **why I need** another scan?', n: 'Statement order: the subject (*I*) comes before the verb (*need*).' },
            { s: 'Do you know **how long I will have to** wait?', n: 'Statement order after *how long*: *I will have to*, not *will I have to*.' },
            { s: 'I was wondering **whether** there is an alternative to surgery.', n: 'Use *whether* or *if* for a yes/no question.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the correct indirect question.', items: [
            { q: '', o: ['Could you tell me when my appointment is?', 'Could you tell me when is my appointment?', 'Could you tell me when does my appointment?'], why: 'Statement order: *my appointment is*.' },
            { q: '', o: ['Do you know how long the operation takes?', 'Do you know how long does the operation take?', 'Do you know how long takes the operation?'], why: 'No *does*; subject before verb: *the operation takes*.' },
            { q: '', o: ['I was wondering whether I could change the date.', 'I was wondering whether could I change the date.', 'I was wondering could I whether change the date.'], why: '*Whether* + statement order: *I could change*.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'At the hospital', lines: [
            { who: 'Rafael', s: 'My GP referred me because of the pain in my knee. Could you tell me what the scan showed?' },
            { who: 'Dr Mensah', s: 'Of course. There’s some damage to the cartilage, which is the tissue that protects the joint.' },
            { who: 'Rafael', s: 'Sorry, could you explain what that means in practice? Will I need an operation?' },
            { who: 'Dr Mensah', s: 'Not necessarily. We usually start with physiotherapy, and in many cases that’s enough.' },
            { who: 'Rafael', s: 'I see. And do you know how long it will take before I notice a difference?' },
            { who: 'Dr Mensah', s: 'It varies, but most people feel some improvement within a couple of months.' },
            { who: 'Rafael', s: 'Just to check I’ve understood: I’ll start physiotherapy and then come back to see you?' },
            { who: 'Dr Mensah', s: 'Exactly. We’ll book a follow-up appointment in three months.' },
          ] },
          { t: 'tip', art: 'owl', md: '*Just to check I’ve understood* lets you repeat the plan in your own words, so the doctor can correct any misunderstanding. It is one of the most useful phrases at any appointment.' },
          { t: 'ex', kind: 'tf', h: 'Think about the conversation. True or false?', items: [
            { q: 'Rafael went straight to the hospital without seeing a GP.', a: 'f', why: '*My GP referred me.*' },
            { q: 'Dr Mensah says Rafael will definitely need an operation.', a: 'f', why: '*Not necessarily*: they start with physiotherapy.' },
            { q: 'Most patients notice some improvement within a couple of months.', a: 't', why: '*Most people feel some improvement within a couple of months.*' },
            { q: 'Rafael will see Dr Mensah again later.', a: 't', why: 'They will book a follow-up appointment in three months.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the indirect question.', items: [
            { q: 'Where is the X-ray department? → Could you tell me where the X-ray department ___?', a: ['is'], why: 'Statement order: subject + *is* at the end.' },
            { q: 'When will I get the results? → Do you know when I ___ the results?', a: ['will get', '’ll get'], why: 'Statement order: *I will get*.' },
            { q: 'Does the medicine have side effects? → I was wondering ___ the medicine has any side effects.', a: ['if', 'whether'], why: 'A yes/no question becomes *if* or *whether* + statement order.' },
            { q: 'Why did the doctor cancel my appointment? → Could you tell me why the doctor ___ my appointment?', a: ['cancelled', 'canceled'], why: 'No *did*: the main verb is in the past simple, *cancelled*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Could you tell me what this means?', why: '*What* + subject + verb: *what this means*.' },
            { a: 'Do you know how long it will take?', why: 'Statement order after *how long*: *it will take*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Conditions and medication',
      about: 'Describe a long-term condition and understand the information in a medicine leaflet.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A **long-term** or **chronic** condition, such as asthma, diabetes or arthritis, lasts for months or years. Doctors will often ask how it affects you now and how it has changed. The **present perfect continuous** is useful for situations that started in the past and continue now. For states, such as *have* meaning *own* or *suffer from*, use the **present perfect simple**.' },
          { t: 'examples', items: [
            { s: 'I**’ve had** asthma since I was a child.', n: '*Have* for a condition is a state, so we use the present perfect simple.' },
            { s: 'I**’ve been getting** headaches more often recently.', n: 'Present perfect continuous: a repeated situation up to now.' },
            { s: 'I**’ve been taking** these tablets for six months.', n: '*For* + a period of time. The activity continues now.' },
            { s: 'I tend to have a **flare-up** when I’m stressed.', n: 'A *flare-up* is a short period when a condition gets worse. *Tend to* means it usually happens.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Words for medication', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['prescription', 'a doctor’s written order for a medicine'],
            ['repeat prescription', 'a prescription you can get again without seeing the doctor each time'],
            ['dose', 'the amount of medicine you take at one time'],
            ['side effect', 'an unwanted effect of a medicine, such as feeling sick'],
            ['pharmacist', 'a person trained to prepare medicines and give advice about them'],
            ['on an empty stomach', 'before eating, or a long time after eating'],
          ] },
          { t: 'tip', art: 'owl', md: 'In England, many adults pay a fixed charge for each prescription item, but some groups, such as children and people over sixty, usually get them free. In Scotland, Wales and Northern Ireland, prescriptions are free. A **pharmacist** can also give advice on minor illnesses and on how to take your medicine.' },
        ],
        [
          { t: 'reading', title: 'Velorin 20 mg tablets: patient information', md: 'Read all of this leaflet carefully before you start taking this medicine. Keep it, as you may need to read it again.\n\n**How to take Velorin**\n\nTake one tablet twice a day, in the morning and in the evening, with or after food. Swallow the tablet whole with a glass of water. Do not crush or chew it.\n\n**If you forget a dose**\n\nTake it as soon as you remember, unless it is nearly time for your next dose. Do not take a double dose to make up for a forgotten one.\n\n**Possible side effects**\n\nLike all medicines, Velorin can cause side effects, although not everybody gets them. Common side effects include headache and mild stomach pain. If you notice a rash or swelling of the face, stop taking the tablets and contact a doctor immediately.\n\n**Storage**\n\nStore below 25°C. Keep out of the sight and reach of children.' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the leaflet. True, false or not given?', items: [
            { q: 'You should take Velorin on an empty stomach.', a: 'f', why: 'Take it *with or after food*.' },
            { q: 'You may chew the tablet if it is difficult to swallow.', a: 'f', why: '*Do not crush or chew it.*' },
            { q: 'If you forget a dose, you should take two tablets next time.', a: 'f', why: '*Do not take a double dose to make up for a forgotten one.*' },
            { q: 'Some people get mild stomach pain.', a: 't', why: 'It is one of the *common side effects*.' },
            { q: 'A rash is a reason to contact a doctor straight away.', a: 't', why: '*Stop taking the tablets and contact a doctor immediately.*' },
            { q: 'Velorin is not suitable for people with asthma.', a: 'ng', why: 'The leaflet does not mention asthma.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word and its meaning.', pairs: [
            ['dose', 'the amount you take at one time'],
            ['side effect', 'an unwanted effect of a medicine'],
            ['repeat prescription', 'a medicine you can order again'],
            ['flare-up', 'a short period when a condition gets worse'],
            ['chronic', 'lasting for a long time'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with the present perfect simple or continuous of the verb in brackets.', items: [
            { q: 'I ___ (take) this medication since March.', a: ['have been taking', '’ve been taking', 'have taken', '’ve taken'], why: 'Both are possible. The continuous stresses an activity that is still going on.' },
            { q: 'I ___ (have) diabetes for ten years.', a: ['have had', '’ve had'], why: '*Have* a condition is a state: present perfect simple.' },
            { q: 'My back ___ (hurt) a lot recently, especially at night.', a: ['has been hurting', '’s been hurting', 'has hurt', '’s hurt'], why: 'A situation from the recent past up to now. The continuous is more common here.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Preparing for an appointment',
      about: 'Read an article with advice on getting the most out of a visit to the doctor.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'Making the most of a doctor’s appointment', md: 'For many people, a visit to the doctor is over before they have said half of what they meant to say. Appointments with a GP are often short, and if English is not your first language, it can be even harder to explain a problem clearly under time pressure. A little preparation can make a real difference.\n\nStart by writing down your main concern. Doctors often begin by asking what has brought you in today, and it helps to answer in one or two sentences. If you have several problems, decide which is the most important and mention it first, rather than leaving it until the end.\n\nNext, make a note of the facts the doctor is likely to ask about: when the symptoms started, whether they are getting better or worse, and anything that seems to make them worse. Bring a list of any medicines you take, including ones you have bought without a prescription.\n\nDuring the appointment, do not be afraid to ask the doctor to slow down or to explain a word you do not know. Before you leave, it is a good idea to repeat the plan in your own words. A phrase such as “So, just to check, I should…” gives the doctor a chance to correct any misunderstanding.\n\nMany surgeries can arrange an interpreter, often by phone, if you ask in advance. You can also bring a friend or a relative, although some people prefer to discuss personal matters on their own.\n\nFinally, if you are not sure what happens next, ask. Will the surgery contact you with your results, or should you phone them? Leaving with a clear answer can save you days of worry.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The writer suggests mentioning your most important problem at the end.', a: 'f', why: 'Mention it first, *rather than leaving it until the end*.' },
            { q: 'You should tell the doctor about medicines you bought without a prescription.', a: 't', why: '*Including ones you have bought without a prescription.*' },
            { q: 'Every surgery has an interpreter available in person at all times.', a: 'f', why: '*Many* surgeries can arrange one, *often by phone*, *if you ask in advance*.' },
            { q: 'Some patients prefer to see the doctor without a friend or relative.', a: 't', why: '*Some people prefer to discuss personal matters on their own.*' },
            { q: 'Most GP appointments last exactly ten minutes.', a: 'ng', why: 'The text says appointments are often short, but gives no length.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language of the article.', items: [
            { q: 'Why does the writer suggest repeating the plan in your own words?', o: ['So the doctor can correct anything you have misunderstood.', 'So the doctor can write the plan down.', 'So the appointment lasts longer.'], why: 'It *gives the doctor a chance to correct any misunderstanding*.' },
            { q: 'What does “under time pressure” mean?', o: ['when there is not much time', 'when you arrive late', 'when you feel unwell'], why: 'You feel *pressure* because the time is short.' },
            { q: 'What does “rather than leaving it until the end” mean?', o: ['instead of waiting until the end to mention it', 'after you have mentioned it at the end', 'because the end is the best time'], why: '*Rather than* means *instead of*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the phrase that checks understanding.', items: [
            { s: 'So, [just to check], I should take the tablets with food?', why: '*Just to check* introduces a summary that the doctor can confirm or correct.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'Your GP sends you to a specialist. The GP ___ you.', o: ['refers', 'prescribes', 'reviews'], why: 'A GP *refers* a patient to a specialist.' },
      { q: 'Could you tell me ___?', o: ['where the pharmacy is', 'where is the pharmacy', 'where does the pharmacy'], why: 'Indirect question: statement order.' },
      { q: 'An appointment at the hospital without an overnight stay is an ___ appointment.', o: ['outpatient', 'inpatient', 'outdoor'], why: '*Outpatient*: you go home the same day.' },
      { q: 'I ___ asthma since I was twelve.', o: ['have had', 'have been having', 'had'], why: 'A state up to now: present perfect simple.' },
      { q: 'An unwanted effect of a medicine is a ___.', o: ['side effect', 'dose', 'flare-up'], why: '*Side effect*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'I was wondering ___ I could see a different doctor.', a: ['if', 'whether'], why: 'A yes/no question becomes *if* or *whether*.' },
      { q: 'Do you know how long I ___ have to wait?', a: ['will', 'would'], why: 'Statement order: *I will have to*.' },
      { q: 'Take one tablet twice a day, with or after ___.', a: ['food', 'meals', 'a meal'], why: 'A common instruction on medicine leaflets.' },
      { q: 'I’ve been ___ (feel) very tired for the last few weeks.', a: ['feeling'], why: 'Present perfect continuous: *have been* + *-ing*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Could you explain what the results mean?', why: 'Statement order after *what*: *the results mean*.' },
      { a: 'Do you know when the clinic opens?', why: 'No *does*: *when the clinic opens*.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'A consultant is a senior hospital doctor.', a: 't', why: 'A *consultant* specialises in one area.' },
      { q: 'A follow-up appointment is the first time you see a doctor about a problem.', a: 'f', why: 'A *follow-up* appointment comes later, to check progress.' },
    ] },
  ],
};
