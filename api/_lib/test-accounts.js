/**
 * The owner's own accounts (owner, 12 Nov 2026): any email with "bchysf", and the accounts named "Test" or "Test test".
 * Kept for testing classrooms, never deleted, but left out of counts and of automatic emails. The same rule as the
 * database's public.is_test_user().
 */
const NAME = /^\s*test(\s+test)*\s*$/i;
function isTestAccount(p) {
  if (!p) return false;
  const email = String(p.email || '').toLowerCase();
  return email.includes('bchysf') || (p.app_metadata && p.app_metadata.test === true) || NAME.test(String(p.name || p.full_name || ''));
}
module.exports = { isTestAccount };
