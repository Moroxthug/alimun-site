# Production changes made during Phase 2

## 14 Oct 2026 — SQL-01: seed students neutralised (owner chose option A: ban, nothing deleted)

Accounts: `aisha@example.com`, `marco@example.com`, `omar@example.com`, `yuki@example.com`, `test-student@alimun.com`.

Done through the Supabase SQL connector:
1. `auth.users.banned_until = '2999-01-01'` for all five.
2. Deleted their 6 rows in `auth.sessions` (refresh tokens go with them), so existing logins end.
3. Enrollments set to `cancelled`: `56162156…` (aisha, cohort `bbbbbbbb-…-0001`), `5cb3b663…` (marco, `…-0001`), `bc2ef634…` (yuki, `…-0002`), `ddfd6b34…` (omar, `…-0003`), `5a9cf4ea…` (test-student, `7f8b5d2b-dd52-4d0e-b2d2-28c1378f8e23`).
4. `student_profiles`: `stripe_subscription_status = 'cancelled'`, `stripe_subscription_id = null`, `stripe_customer_id = null`, `tier = 'waitlist'`, `enrolled_cohort_id = null`.

Previous values, for undo:

| email | tier | status | subscription id | customer id | enrolled_cohort_id |
|---|---|---|---|---|---|
| aisha@example.com | focused | active | sub_test_aisha001 | cus_test_aisha001 | bbbbbbbb-0000-0000-0000-000000000001 |
| marco@example.com | focused | active | sub_test_marco001 | cus_test_marco001 | bbbbbbbb-0000-0000-0000-000000000001 |
| yuki@example.com | community | active | sub_test_yuki001 | cus_test_yuki001 | bbbbbbbb-0000-0000-0000-000000000002 |
| omar@example.com | intensive | active | sub_test_omar001 | cus_test_omar001 | bbbbbbbb-0000-0000-0000-000000000003 |
| test-student@alimun.com | community | active | — | — | 7f8b5d2b-dd52-4d0e-b2d2-28c1378f8e23 |

Unban: `update auth.users set banned_until = null where email in (…);` then restore the rows above.

Not touched: `camille@example.com` (seed student, no subscription, never signed in), the suspended seed teachers, `admin@alimun.com` (already demoted in Phase 1).

## 14 Oct 2026 — Phase 2 migration applied (owner instruction)

`supabase/migrations/202610142200_phase2_audit_fixes.sql` was applied through the Supabase SQL connector in eight sections (the one-shot call timed out). Each section is idempotent and verified:
- The old triggers were recreated with `create or replace trigger` instead of `drop` + `create`, and the existing policies were changed with `alter policy`. The resulting objects are the same as in the file.
- Checked before applying: the code live on `main` only writes columns the new guards allow (student settings and opt-in, teacher name and location, session status, attendance `left_at`). Teacher signup gets `app_metadata.role` before the profile insert (`trg_set_app_role`).
- Verify results:
  - (a) the four teacher helpers require `approved`;
  - (b) all 15 check constraints validated against existing rows, none left NOT VALID;
  - (c) the 5 student columns and `teacher_profiles.notified_at` exist;
  - (d) the policies are present;
  - (e) both unique indexes were created, with no duplicates;
  - (f) the bucket allows 15 MIME types;
  - (g) `waitlist_webhook_secret` is not set yet, so the waitlist functions fall back to `admin_secret`.
- Security advisor after applying: 0 errors. The warnings are the same by-design ones as Phase 1: RLS helpers callable by `authenticated`, `public_teacher_rows` by `anon`, and leaked-password protection, which needs the Pro plan.
- The `rls.sql` suite was not re-run on production (it passed 162/162 locally).

## 14 Oct 2026 — Vercel secrets set (owner instruction)

Vercel project `alimun-site` (team `youssefbouchtaoui-4103s-projects`): added `CRON_SECRET`, `ADMIN_SECRET`, `WAITLIST_WEBHOOK_SECRET` and `APPROVAL_LINK_SECRET`. Each is a random 64-hex-character value of type `sensitive`, set for Production and Preview. None existed before this change.

Database:
- `app_settings.waitlist_webhook_secret` is set to the same value as Vercel `WAITLIST_WEBHOOK_SECRET`.
- `app_settings.admin_secret` was overwritten with a random value that nothing uses. Deleting the row timed out in the connector. The waitlist functions read `waitlist_webhook_secret` first.

The new values only apply to deployments created after this change, so production needs a redeploy (or the Phase 2 merge).

Env audit, read-only:
- Still missing in production: `RESEND_API_KEY` and `EMAIL_FROM_ADDRESS` (no email is sent), and any AI key (`GEMINI_API_KEY`, `GROQ_API_KEY` or `ANTHROPIC_API_KEY`).
- `STRIPE_*` keys and `DAILY_API_KEY` are set for Production only.
- Unused and safe to delete: `STRIPE_PRICE_ONEONONE_SESSION`, `STRIPE_PRICE_CERTIFICATE`, and every `*_AUD` and `*_MAD` price.
