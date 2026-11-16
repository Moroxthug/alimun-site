// Checked 2026-11-16 against: supabase/migrations/202610262200_tutor_sessions.sql (keep_until 90 days, daily tutor_purge deletes sessions with their messages), api/tutor.js (forget action: deletes tutor_memory, tutor_sessions, tutor_sets), js/app/tutor.js (What your tutor remembers card, Forget everything), site/src/blocks/legal/gdpr.html (section 4: conversations 90 days, recordings never stored; section 7), site/src/blocks/legal/terms.html (section 3), docs/AI_TUTOR_PLAN.md (question 6: teachers see none of it), js/translations.js en (app_tu_mem_h, app_tu_mem_none, app_tu_forget, app_tu_forget_sure, app_tu_forget_yes, app_tu_past_h, app_tu_transcript_h).
export default {
  slug: 'does-the-tutor-keep-my-conversations',
  section: 'help',
  subject: 'tutor',
  audience: 'student',
  updated: '2026-11-16',
  status: 'draft',
  title: "Does the tutor keep my conversations, and for how long?",
  summary: "Tutor conversations are kept for 90 days, recordings are never stored, and you can delete what the tutor remembers and every past session at any time.",
  body: [
    "The written conversation of each tutor session, including the transcript of a call, is kept for 90 days and then deleted automatically. Until then you can read it on the Tutor page under Your past sessions. Your voice recordings are never stored.",
    "The tutor keeps a few notes about you between sessions, such as what you worked on, mistakes to keep an eye on and what to do next, so it can pick up where you left off. You can read them on the Tutor page under What your tutor remembers. Your teachers do not see your tutor sessions.",
    "To delete everything, press Forget everything under What your tutor remembers, then Yes, forget everything. The tutor forgets what it remembers about you, and every past session and the practice it left for you are deleted. This cannot be undone.",
    "The Privacy page at alimun.com/gdpr explains which AI providers receive what you write or say to the tutor and how long everything is kept.",
  ],
  related: ['what-is-the-tutor', 'what-data-does-alimun-keep', 'download-or-delete-my-data'],
};
