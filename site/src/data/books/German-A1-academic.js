// German A1, for study and exams: a goal book next to the German A1 course book (docs/BOOKS.md).
// Draft: reviewed by a native teacher before it is published. Units are written in units/German-A1-academic/<unit>.js;
// until then each entry is planned, with the outline its writer works from. Explanations in English, translated in i18n/.
export const BOOK = {
  id: 'German-A1-academic',
  language: 'German',
  level: 'A1',
  track: 'goal',
  goal: 'academic',
  title: "German for study and exams",
  review: 'draft',
  units: [
    { id: 'u1', title: "In the language course", planned: true, plan: { goal: "Introduce yourself in class, understand the teacher's instructions and ask about words.", lessons: ["People in the course (die Lehrerin, der Kursteilnehmer); introducing yourself with sein, heißen, kommen, sprechen", "Instructions with Sie (Lesen Sie. Hören Sie zu.) and questions about words (Wie sagt man …? Was bedeutet …?)", "Reading: the welcome page of a language school"] } },
    { id: 'u2', title: "Enrolling in a course", planned: true, plan: { goal: "Give your personal data, spell your name and fill in a simple form.", lessons: ["Form words (Familienname, Vorname, Adresse, Geburtsdatum); the alphabet and spelling", "Numbers, phone numbers, email addresses and dates at the school office", "Reading: a registration form for a German course"] } },
    { id: 'u3', title: "Timetable and school things", planned: true, plan: { goal: "Name the things you need in class and read a simple timetable.", lessons: ["School things with der, die, das; ein, kein and the accusative (Ich brauche einen Stift.)", "Days and times; am, um, von … bis; a time first (Am Montag habe ich Deutsch.)", "Reading: a course timetable and a message about a change"] } },
    { id: 'u4', title: "Asking for help", planned: true, plan: { goal: "Ask the teacher for help and ask your classmates simple questions.", lessons: ["Asking the teacher with können (Können Sie das bitte wiederholen?)", "Talking to classmates: du, W-questions and yes/no questions (Hast du …? Kannst du …?)", "Reading: messages in a class group chat"] } },
    { id: 'u5', title: "Learning and notes", planned: true, plan: { goal: "Say how you like to learn, learn new words well and write simple notes.", lessons: ["Learning words: the article and the plural, word cards; gern and nicht gern", "Simple notes and a plan for the week (Mo, S. 12, Ü 3; Am Montag lerne ich …)", "Reading: learning tips from other learners"] } },
    { id: 'u6', title: "Exam skills", planned: true, plan: { goal: "Get ready for an A1 exam: the four parts, reading the task first, filling in a form and writing a short message. Practice in the format of exams like Goethe-Zertifikat A1: Start Deutsch 1, never official material.", lessons: ["The four parts of an A1 exam; reading tasks: richtig oder falsch, a oder b", "Writing: a form and a short message to three points", "Reading: short exam-style texts with questions"] } },
  ],
};
