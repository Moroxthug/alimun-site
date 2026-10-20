/**
 * ============================================================
 *  ALIMUN — Admin "view as" switcher
 *  /js/view-as.js
 *
 *  Lets an admin open the teacher and student dashboards as any
 *  teacher/student without signing in as them. Only activates for
 *  sessions whose app_metadata.role === 'admin' (server-controlled).
 *  Data access still goes through RLS: is_admin() lets the admin's
 *  own JWT read/write every row. To stop preview clicks changing the
 *  real person's data (or running paid AI / enrol / join calls as the
 *  admin), resolve() makes the dashboard read-only: table writes,
 *  storage writes and non-GET /api/ calls are refused client-side.
 *
 *  Dashboards call:
 *    const va = await AlimunViewAs.resolve(sb, session, 'teacher' | 'student');
 *    if (va) { ...boot with va.profile...; AlimunViewAs.mountBar({ kind, sb, profile: va.profile }); }
 *  admin.html calls AlimunViewAs.mountBar({ kind: 'admin', sb }).
 *
 *  The chosen person is remembered per tab (sessionStorage) and can
 *  be set explicitly with ?as=<profile id>. On the teacher dashboard
 *  ?as=demo (the default) opens a demo teacher with sample data held
 *  in memory (js/demo-teacher.js), so every screen can be tried.
 * ============================================================
 */
(function () {
  const PAGES = { admin: 'admin.html', teacher: 'teacher-dashboard.html', student: 'student-dashboard.html' };
  const TABLES = { teacher: 'teacher_profiles', student: 'student_profiles' };
  const storeKey = (kind) => `alimun-view-as-${kind}`;

  const store = {
    get(kind) { try { return sessionStorage.getItem(storeKey(kind)); } catch { return null; } },
    set(kind, id) { try { sessionStorage.setItem(storeKey(kind), id); } catch { /* private mode */ } },
  };

  const esc = (v) => String(v == null ? '' : v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function isAdmin(session) {
    return session?.user?.app_metadata?.role === 'admin';
  }

  const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  const READ_ONLY_MSG = 'Read-only in admin view';
  const WRITE_METHODS = ['insert', 'update', 'upsert', 'delete'];
  const STORAGE_WRITES = ['upload', 'update', 'remove', 'move', 'copy', 'createSignedUploadUrl', 'uploadToSignedUrl'];

  // A chainable stand-in for a refused write: every builder method returns it,
  // and awaiting it resolves to a Supabase-style { data: null, error }.
  function refusedQuery() {
    const result = { data: null, error: { message: READ_ONLY_MSG, code: 'view_as_read_only' }, count: null, status: 403 };
    const proxy = new Proxy(function () {}, {
      get(_t, prop) {
        if (prop === 'then') return (res, rej) => Promise.resolve(result).then(res, rej);
        if (prop === 'catch') return (rej) => Promise.resolve(result).catch(rej);
        if (prop === 'finally') return (fn) => Promise.resolve(result).finally(fn);
        return () => proxy;
      },
      apply() { return proxy; },
    });
    return proxy;
  }

  // Make the dashboard read-only while an admin is viewing someone else.
  function enforceReadOnly(sb) {
    if (!sb || sb.__alimunViewAsReadOnly) return;
    sb.__alimunViewAsReadOnly = true;
    window.ALIMUN_VIEW_AS_READONLY = true;

    const origFrom = sb.from.bind(sb);
    sb.from = (table) => {
      const builder = origFrom(table);
      WRITE_METHODS.forEach((m) => { builder[m] = () => refusedQuery(); });
      return builder;
    };

    if (sb.storage && typeof sb.storage.from === 'function') {
      const origStorageFrom = sb.storage.from.bind(sb.storage);
      sb.storage.from = (bucket) => {
        const api = origStorageFrom(bucket);
        STORAGE_WRITES.forEach((m) => { if (typeof api[m] === 'function') api[m] = () => refusedQuery(); });
        return api;
      };
    }

    if (!window.__alimunViewAsFetch) {
      const origFetch = window.fetch.bind(window);
      window.__alimunViewAsFetch = origFetch;
      window.fetch = (input, init) => {
        const url = typeof input === 'string' ? input : (input && input.url) || '';
        const method = String((init && init.method) || (input && input.method) || 'GET').toUpperCase();
        let path = '';
        try { const u = new URL(url, location.href); if (u.origin === location.origin) path = u.pathname; } catch { /* ignore */ }
        if (path.startsWith('/api/') && method !== 'GET' && method !== 'HEAD') {
          return Promise.resolve(new Response(JSON.stringify({ error: READ_ONLY_MSG }), {
            status: 403, headers: { 'Content-Type': 'application/json' },
          }));
        }
        return origFetch(input, init);
      };
    }
  }

  function pageUrl(kind, id) {
    return id ? `${PAGES[kind]}?as=${encodeURIComponent(id)}` : PAGES[kind];
  }

  const demoFor = (kind) => (kind === 'teacher' ? window.AlimunDemoTeacher : null);
  const validId = (kind, v) => !!v && (UUID_RE.test(v) || (!!demoFor(kind) && v === demoFor(kind).DEMO_ID));

  /** Returns null for non-admins, otherwise { profile, demo } (profile may be null if none exist). */
  async function resolve(sb, session, kind) {
    if (!isAdmin(session) || !TABLES[kind]) return null;

    const fromUrl = new URLSearchParams(location.search).get('as');
    const demo = demoFor(kind);
    const wanted = [fromUrl, store.get(kind)].find((v) => validId(kind, v)) || (demo ? demo.DEMO_ID : null);
    if (demo && wanted === demo.DEMO_ID) {
      demo.install(sb);
      store.set(kind, demo.DEMO_ID);
      return { profile: demo.profile, demo: true };
    }

    enforceReadOnly(sb);

    let profile = null;
    if (wanted) {
      ({ data: profile } = await sb.from(TABLES[kind]).select('*').eq('id', wanted).maybeSingle());
    }
    if (!profile) {
      // Prefer an approved teacher; with none approved, open any teacher so
      // the admin can still see the dashboard (the bar shows their status).
      const latest = (q) => q.order('created_at', { ascending: false }).limit(1).then(({ data }) => data?.[0] || null);
      if (kind === 'teacher') profile = await latest(sb.from(TABLES[kind]).select('*').eq('status', 'approved'));
      if (!profile) profile = await latest(sb.from(TABLES[kind]).select('*'));
    }
    if (profile) store.set(kind, profile.id);
    return { profile };
  }

  async function listPeople(sb, kind) {
    // In the demo sb.from is the in-memory mock; the switcher still lists real people
    const from = sb.__alimunRealFrom || ((t) => sb.from(t));
    if (kind === 'teacher') {
      const { data } = await from('teacher_profiles').select('id, full_name, status').order('full_name');
      const real = (data || []).map((t) => ({ id: t.id, label: `${t.full_name || 'Unnamed'}${t.status !== 'approved' ? ` (${t.status})` : ''}` }));
      const demo = demoFor('teacher');
      return demo ? [{ id: demo.DEMO_ID, label: 'Demo teacher (sample data)' }, ...real] : real;
    }
    const { data } = await from('student_profiles').select('id, full_name, language, level').order('full_name');
    return (data || []).map((s) => ({ id: s.id, label: `${s.full_name || 'Unnamed'} · ${s.language || '?'} ${s.level || ''}`.trim() }));
  }

  const CSS = `
    #va-bar { position: fixed; left: 50%; bottom: 16px; transform: translateX(-50%); z-index: 99999;
      display: flex; align-items: center; gap: 10px; flex-wrap: wrap; justify-content: center;
      max-width: calc(100vw - 32px); box-sizing: border-box;
      background: #080808; color: #fff; border-radius: 999px; padding: 6px 8px 6px 16px;
      box-shadow: 0 10px 30px rgba(0,0,0,.25); font: 600 12px/1.2 'Satoshi', system-ui, sans-serif; }
    #va-bar.va-min { padding: 6px; }
    #va-bar.va-min > :not(#va-toggle) { display: none; }
    #va-bar .va-tag { color: #ceff65; letter-spacing: .08em; text-transform: uppercase; font-size: 10px; white-space: nowrap; }
    #va-bar .va-seg { display: flex; background: rgba(255,255,255,.08); border-radius: 999px; padding: 2px; }
    #va-bar .va-seg a { color: #bbb; text-decoration: none; padding: 6px 12px; border-radius: 999px; white-space: nowrap; }
    #va-bar .va-seg a:hover { color: #fff; }
    #va-bar .va-seg a.on { background: #ceff65; color: #080808; }
    #va-bar select { background: rgba(255,255,255,.08); color: #fff; border: 1px solid rgba(255,255,255,.15);
      border-radius: 999px; padding: 6px 10px; font: inherit; max-width: 220px; }
    #va-bar select option { color: #080808; }
    #va-bar .va-note { color: #fbbf24; font-size: 10px; white-space: nowrap; }
    #va-bar button { background: rgba(255,255,255,.08); color: #fff; border: 0; border-radius: 999px;
      width: 28px; height: 28px; cursor: pointer; font: inherit; }
    @media (max-width: 900px) { #va-bar .va-note { display: none; } }
    @media (max-width: 640px) { #va-bar { border-radius: 18px; bottom: 8px; } }
  `;

  /** Floating switcher. kind = which page we're on. */
  async function mountBar({ kind, sb, profile }) {
    if (document.getElementById('va-bar')) return;
    const style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    const bar = document.createElement('div');
    bar.id = 'va-bar';
    const seg = ['admin', 'teacher', 'student'].map((k) => {
      const href = k === 'admin' ? PAGES.admin : pageUrl(k, store.get(k));
      return `<a href="${esc(href)}" class="${k === kind ? 'on' : ''}">${k[0].toUpperCase() + k.slice(1)}</a>`;
    }).join('');
    // nosemgrep: innerhtml-template-without-escape -- constant markup only
    bar.innerHTML = `
      <span class="va-tag">Admin view</span>
      <div class="va-seg">${seg}</div>
      ${kind !== 'admin' ? `<select id="va-person" aria-label="Viewing as"><option>${esc(profile?.full_name || 'Loading…')}</option></select>
      <span class="va-note">${window.ALIMUN_DEMO ? 'Demo data, nothing is saved' : 'Read-only preview'}</span>` : ''}
      <button id="va-toggle" title="Minimise">–</button>`;
    document.body.appendChild(bar);

    const toggle = bar.querySelector('#va-toggle');
    toggle.onclick = () => {
      const min = bar.classList.toggle('va-min');
      toggle.textContent = min ? '+' : '–';
      toggle.title = min ? 'Show admin view switcher' : 'Minimise';
    };

    if (kind === 'admin') return;
    const select = bar.querySelector('#va-person');
    const people = await listPeople(sb, kind);
    if (people.length) {
      select.innerHTML = people.map((p) =>
        `<option value="${esc(p.id)}" ${(window.ALIMUN_DEMO ? p.id === 'demo' : p.id === profile?.id) ? 'selected' : ''}>${esc(p.label)}</option>`).join('');
    }
    select.onchange = () => {
      if (!validId(kind, select.value)) return;
      store.set(kind, select.value);
      location.href = pageUrl(kind, select.value);
    };
  }

  /** Admin with no profile to show — explain instead of redirecting away. */
  function renderEmpty(kind) {
    // nosemgrep: innerhtml-template-without-escape -- constant markup only
    document.body.innerHTML = `<div style="font:600 15px system-ui;padding:3rem;text-align:center;">
      No ${kind} accounts exist yet, so there is nothing to preview. A ${kind} dashboard appears here as soon as one ${kind} has signed up.
      <a href="admin.html">Back to admin</a></div>`;
  }

  window.AlimunViewAs = { isAdmin, resolve, mountBar, renderEmpty, pageUrl };
})();
