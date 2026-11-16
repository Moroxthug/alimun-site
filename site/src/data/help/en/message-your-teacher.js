// Checked 2026-11-16 against: js/app/messages.js (header: one conversation with each class and one with each class teacher, plain text, new messages fetched while open, unread counts), js/app/shell.js (needsNet: messages need a connection), docs/DASHBOARD_PLAN.md (step 13), js/translations.js (app_ms_*).
export default {
  slug: 'message-your-teacher',
  section: 'help',
  subject: 'dashboard',
  audience: 'student',
  updated: '2026-11-16',
  status: 'approved',
  title: 'How do I write to my teacher or my class?',
  summary: 'Open Messages: each class you are in has a conversation with the whole class and one with just you and your teacher.',
  body: [
    'Open Messages, under With your teacher in the menu. For each class you are in, you have two conversations: one with your class, which everyone in the class and your teacher can read, and one that only you and your teacher can read.',
    'Choose a conversation, type in Write a message and press Send. Messages are plain text. New messages appear while the conversation is open, and conversations with unread messages show how many are new.',
    'If you see No conversations yet, you are not in a class yet; your conversations appear when you join one. Messages need a connection, so they are not available offline.',
    'If a message is too long you are asked to split it in two, and if you send many messages very fast you are asked to wait a moment. For questions about your account, plan or payments, write to us from Support in your dashboard, or email support@alimun.com.',
  ],
  related: ['hand-in-homework', 'find-your-way-around-the-dashboard'],
};
