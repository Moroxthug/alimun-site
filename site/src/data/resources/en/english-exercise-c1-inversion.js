// Resource: exercise. English items stay English; explanations are in the reader's language.
export default {
  key: 'en-ex-c1', site: 'en', slug: 'english-exercise-c1-inversion', kind: 'exercise', course: 'English', level: 'C1',
  draw: 'dragon', tint: 'mint', published: '2026-10-26',
  title: 'English exercise: inversion (C1)',
  metaTitle: 'Inversion exercise for C1 English learners (free) – Alimun',
  desc: 'Twelve free questions for C1 learners of English on inversion: Never have I, Hardly had, Not only, Should you and more, with every answer explained.',
  lead: 'Choose the right word order in each sentence. You see straight away if you are right, and why.',
  instructions: 'Choose the right form.',
  about: [
    'When a sentence starts with a negative or limiting word such as never, rarely, seldom, little, hardly, no sooner, not only, not until, only after or under no circumstances, English swaps the subject and the auxiliary verb, just as in a question: "Never have I seen such a view", "Not only was he late, but...". If there is no auxiliary, add do, does or did: "Little did she know", "Rarely do we see this." Hardly is followed by when and no sooner by than: "Hardly had I arrived when the phone rang", "No sooner had we sat down than the music started."',
    'Conditional sentences can also drop if and invert instead, which sounds formal and is common in letters, emails and exams: "Should you need help" means "If you need help", "Had I known" means "If I had known", and "Were he to resign" means "If he resigned". These structures add emphasis or formality to writing and speeches, and they are tested in advanced exams such as C1 Advanced and IELTS.',
  ],
  items: [
    { q: 'Never ___ such a beautiful sunset.', options: ['I have seen', 'have I seen', 'I saw', 'did I saw'], a: 1, why: 'After a negative word at the start, put the auxiliary before the subject: Never have I seen.' },
    { q: 'Hardly ___ arrived when the phone rang.', options: ['had I', 'I had', 'did I', 'have I'], a: 0, why: 'Hardly at the start takes inversion with the past perfect: Hardly had I arrived when...' },
    { q: 'Not only ___ late, but he also forgot the tickets.', options: ['he was', 'did he be', 'was he'], a: 2, why: 'Not only at the start inverts the verb be and the subject: Not only was he late.' },
    { q: '___ you need any help, please call me.', options: ['Would', 'Should', 'Were', 'Had'], a: 1, why: 'Should + subject replaces "If you need" in a formal first conditional.' },
    { q: '___ I known about the traffic, I would have left earlier.', options: ['Have', 'Did', 'Had', 'Were'], a: 2, why: 'Had + subject replaces "If I had" in a third conditional.' },
    { q: '___ he to resign, the company would be in trouble.', options: ['Were', 'Was', 'Should', 'Did'], a: 0, why: 'Were + subject + to-infinitive replaces "If he resigned" in a formal second conditional.' },
    { q: 'No sooner had we sat down ___ the music started.', options: ['when', 'than', 'then', 'that'], a: 1, why: 'No sooner is always followed by than.' },
    { q: 'Only after the meeting ___ the truth.', options: ['we learned', 'learned we', 'we did learn', 'did we learn'], a: 3, why: 'Only after + time inverts the main clause, using did when there is no other auxiliary.' },
    { q: 'Little ___ that she was being watched.', options: ['she knew', 'knew she', 'did she know', 'she did know'], a: 2, why: 'Little at the start means not at all and takes inversion with did: Little did she know.' },
    { q: 'Under no circumstances ___ open this door.', options: ['you should', 'should you', 'you must', 'must'], a: 1, why: 'Under no circumstances is negative, so the modal comes before the subject: should you.' },
    { q: 'Rarely ___ such talent in someone so young.', options: ['do we see', 'we see', 'see we', 'we do see'], a: 0, why: 'Rarely at the start takes inversion, with do in the present simple: Rarely do we see.' },
    { q: 'Not until I read the letter ___ how worried she had been.', options: ['I realized', 'did I realize', 'I did realize', 'realized I'], a: 1, why: 'With Not until, the inversion comes in the main clause: did I realize.' },
  ],
  related: ['en-ex-b2', 'en-quiz-c1', 'en-quiz-b2'],
};
