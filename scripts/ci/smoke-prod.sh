#!/usr/bin/env bash
# Production smoke test (docs/IMPLEMENTATION_PLAN.md §5). Exits non-zero on
# the first mismatch so the post-deploy workflow can open an issue.
set -u
BASE="${BASE_URL:-https://alimun.com}"
fail=0

expect() { # expect <code> <curl args...>
  local want="$1"; shift
  local got
  got=$(curl -s -o /dev/null -w "%{http_code}" --max-time 20 "$@")
  if [ "$got" = "$want" ]; then echo "ok   $want $*"; else echo "FAIL want $want got $got: $*"; fail=1; fi
}

expect 200 "$BASE/"
expect 200 "$BASE/tiers"
expect 200 "$BASE/signin"
expect 404 "$BASE/supabase/schema.sql"
expect 404 "$BASE/docs/IMPLEMENTATION_PLAN.md"
expect 404 "$BASE/scripts/ci/smoke-prod.sh"
expect 404 "$BASE/package.json"
expect 401 "$BASE/api/cron-create-rooms"
expect 401 "$BASE/api/waitlist/cron-expire-offers"
expect 401 -X POST "$BASE/api/admin/teacher?action=set-status"
expect 401 -X POST "$BASE/api/ai?action=homework-check" -H 'content-type: application/json' -d '{}'

cfg=$(curl -s --max-time 20 "$BASE/api/stripe?action=config")
if echo "$cfg" | grep -q 'pk_live_'; then echo "ok   stripe config has pk_live_"; else echo "FAIL stripe config: ${cfg:0:200}"; fail=1; fi
if echo "$cfg" | grep -qE 'sk_(live|test)_|whsec_'; then echo "FAIL stripe config leaks a secret"; fail=1; fi

if curl -sI --max-time 20 "$BASE/" | grep -qi '^strict-transport-security'; then echo "ok   HSTS"; else echo "FAIL HSTS header missing"; fail=1; fi

exit $fail
