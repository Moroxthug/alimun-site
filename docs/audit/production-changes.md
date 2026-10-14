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
