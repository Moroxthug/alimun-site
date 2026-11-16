// Checked 2026-11-16 against: api/tutor.js (header, status, start, live-start), js/app/tutor.js (header, Tutor page), js/app/tutor-live.js (header), docs/AI_TUTOR_PLAN.md (parts 2 to 7), site/src/blocks/legal/terms.html (section 3, AI Features), site/src/blocks/legal/gdpr.html (section 4, AI Processing), js/translations.js en (app_nav_tutor, app_tu_lead2, app_tu_start, app_tl_write, app_tl_pick_h, app_tl_pick_p, app_tu_after_set, app_home_lesson_p).
export default {
  slug: 'what-is-the-tutor',
  section: 'help',
  subject: 'tutor',
  audience: 'student',
  updated: '2026-11-16',
  status: 'approved',
  title: "What is the tutor, and is it a real person?",
  summary: "The tutor is an AI practice tutor in your student dashboard: it is a computer program, not a person, and a teacher does not review its sessions.",
  body: [
    "The Tutor in your student dashboard is an AI tutor. You are talking to a computer program that uses artificial intelligence, not to a person. It explains on a whiteboard, sets exercises where you need them most, listens to you, speaks, and remembers what you did together. Its sessions are not reviewed by a teacher.",
    "You can write to your tutor with Write to your tutor, speak to it with Speak, or, where the call is available, choose one of the tutors under Talk with your tutor and talk to them like on a call. Each tutor has their own voice. When your teacher has published the notes of a class, you can also go over that lesson with your tutor from Home or Classes.",
    "At the end of a session the tutor writes a short summary, adds the session's words to your flashcards and leaves practice for you in Practice, under From your tutor.",
    "Like any AI, the tutor can make mistakes, so do not rely on it alone for an important decision. Your live classes with a teacher stay at the heart of your course. To produce the tutor's replies, what you write or say is sent to AI providers that work for Alimun (Groq for the replies, Google for the tutor's voice and the live call, Microsoft Azure for pronunciation scores). The Privacy page at alimun.com/gdpr explains this in full. Learners under 16 may use the tutor only with a parent's authorisation.",
  ],
  related: ['how-tutor-minutes-work', 'speaking-practice-and-pronunciation', 'does-the-tutor-keep-my-conversations'],
};
