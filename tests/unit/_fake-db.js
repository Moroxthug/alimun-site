// An in-memory stand-in for the Supabase client: enough of the query builder for api/pricing.js and
// api/_lib/entitlements.js (select, insert, update, upsert, eq, in, is, or, limit, single, maybeSingle, rpc).
const crypto = require('crypto');

function fakeDb(tables, rpcs) {
  function q(name) {
    const st = { name, filters: [], op: 'select', payload: null, single: false, maybe: false, returning: false, onConflict: null };
    const rows = () => (tables[name] = tables[name] || []);
    const match = (r) => st.filters.every((f) => f(r));
    const run = () => {
      let out;
      if (st.op === 'select') out = rows().filter(match);
      else if (st.op === 'insert') { const list = [].concat(st.payload).map((r) => Object.assign({ id: crypto.randomUUID() }, r)); rows().push(...list); out = list; }
      else if (st.op === 'update') { out = rows().filter(match); out.forEach((r) => Object.assign(r, st.payload)); }
      else if (st.op === 'upsert') {
        const keys = (st.onConflict || 'id').split(',');
        out = [].concat(st.payload).map((p) => {
          const hit = rows().find((r) => keys.every((k) => r[k] != null && r[k] === p[k]));
          if (hit) { if (!st.ignore) Object.assign(hit, p); return hit; }
          const n = Object.assign({ id: crypto.randomUUID() }, p); rows().push(n); return n;
        });
      }
      if (st.single || st.maybe) {
        if (!out.length && st.single) return { data: null, error: { message: 'no rows' } };
        return { data: out[0] || null, error: null };
      }
      return { data: out, error: null };
    };
    const api = {
      select() { st.returning = true; return api; },
      insert(p) { st.op = 'insert'; st.payload = p; return api; },
      update(p) { st.op = 'update'; st.payload = p; return api; },
      upsert(p, o) { st.op = 'upsert'; st.payload = p; st.onConflict = o && o.onConflict; st.ignore = o && o.ignoreDuplicates; return api; },
      eq(k, v) { st.filters.push((r) => r[k] === v); return api; },
      in(k, vs) { st.filters.push((r) => vs.includes(r[k])); return api; },
      is(k, v) { st.filters.push((r) => (r[k] == null ? null : r[k]) === v); return api; },
      // or('a.eq.x,b.eq.y'): only eq conditions, enough for the code under test
      or(expr) { const conds = expr.split(',').map((c) => c.split('.eq.')); st.filters.push((r) => conds.some(([k, v]) => String(r[k]) === v)); return api; },
      limit() { return api; },
      single() { st.single = true; return Promise.resolve(run()); },
      maybeSingle() { st.maybe = true; return Promise.resolve(run()); },
      then(a, b) { return Promise.resolve(run()).then(a, b); },
    };
    return api;
  }
  return {
    from: q,
    rpc: (name, args) => Promise.resolve(rpcs[name](args)),
    auth: {
      getUser: (tok) => Promise.resolve(tok === 'good' ? { data: { user: { id: 'u1', email: 'Learner+x@gmail.com' } }, error: null } : { data: null, error: { message: 'bad' } }),
      admin: { getUserById: (id) => Promise.resolve({ data: { user: { id, email: 'Learner+x@gmail.com' } }, error: null }) },
    },
  };
}

module.exports = { fakeDb };
