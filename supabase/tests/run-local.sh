#!/usr/bin/env bash
# Rebuild a throwaway local database that mimics production before Phase 1
# (repo SQL history + the 14 Oct admin hardening), apply every migration in
# supabase/migrations, then run supabase/tests/rls.sql.
#
#   PGHOST=/path/to/socket PGPORT=54329 PGUSER=postgres supabase/tests/run-local.sh
#
# Needs a local PostgreSQL 15+ superuser connection. Never point it at Supabase.
set -euo pipefail
cd "$(dirname "$0")/../.."

DB="${TEST_DB:-alimun_rls_test}"
psql_q() { psql -v ON_ERROR_STOP=1 -q -X "$@"; }

psql_q -d postgres -c "drop database if exists $DB" -c "create database $DB"

run() { echo "  -> $1"; psql_q -d "$DB" -f "$1" >/dev/null; }

echo "Platform shim"
run supabase/tests/supabase_shim.sql
echo "Pre-Phase-1 history"
for f in schema.sql waitlist-fill-system.sql add-availability-assignments.sql \
         add-webhook-and-credits.sql add-exercise-results.sql generate-sessions-function.sql \
         fix-tier-constraint.sql 2026-10-14_admin_role_hardening.sql; do
  run "supabase/$f"
done
# The real admin account (pre-flight check in the lockdown migration).
psql_q -d "$DB" -c "insert into auth.users (id, email, raw_app_meta_data) values (gen_random_uuid(), 'bchysfpol@gmail.com', '{\"role\":\"admin\"}')" >/dev/null

echo "Migrations"
for f in supabase/migrations/*.sql; do
  run "$f"
  # Idempotency: every migration must survive a second run.
  run "$f"
done

echo "RLS tests"
psql_q -d "$DB" -f supabase/tests/rls.sql
