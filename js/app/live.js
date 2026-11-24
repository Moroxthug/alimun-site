/* Alimun dashboards: live updates (owner, 24 Nov 2026: "the chat with support should update live").
   One Supabase Realtime connection per page, shared by every screen that wants to know when rows change:
     var stop = AlimunLive.watch('support', [{ table: 'help_messages', event: 'INSERT', filter: 'request_id=eq.<id>' }], fn, { wait: 250 });
   fn(changes) runs once per burst of changes (debounced by `wait` ms), and also once when the tab comes back after
   being hidden for a while (changes made meanwhile may have been missed). Call stop() when the screen goes away.
   The database sends a person only the rows its row rules (RLS) let them read; the tables are listed in
   supabase/migrations/202611241700_live_updates.sql. If Realtime is not reachable, nothing breaks: screens keep their
   slower fallback refresh. AlimunLive.onStatus(fn) reports 'live', 'connecting' or 'off' (the admin console's pill).
   AlimunLive.online(dashboard, section) tells the admin console who is in a dashboard now (public.touch_online:
   on every section change and once a minute while the tab is visible). Signed out, samples and an admin viewing as
   someone: nothing is sent and nothing is watched. */
(function () {
  'use strict';
  var seq = 0, watchers = {}, statusFns = [], state = 'off';
  var HIDDEN_RESYNC = 20000;
  var hiddenAt = 0;

  function client() { return window.AlimunData && window.AlimunData.auth ? window.AlimunData.auth() : null; }
  function viewingAs() { return !!(window.AlimunData && window.AlimunData.viewingAs && window.AlimunData.viewingAs()); }
  function setState(s) { if (s === state) return; state = s; statusFns.forEach(function (f) { try { f(s); } catch (e) { /* listener error */ } }); }
  function recompute() {
    var ids = Object.keys(watchers);
    if (!ids.length) return setState('off');
    var any = ids.some(function (k) { return watchers[k].status === 'SUBSCRIBED'; });
    var trying = ids.some(function (k) { return watchers[k].status === 'joining'; });
    setState(any ? 'live' : trying ? 'connecting' : 'off');
  }

  /* The signed-in token for Realtime, so row rules see who is listening */
  var authed = null;
  function auth(c) {
    if (!authed) {
      authed = c.auth.getSession().then(function (x) {
        var s = x && x.data && x.data.session;
        if (!s) throw new Error('signed out');
        if (c.realtime && c.realtime.setAuth) { try { var p = c.realtime.setAuth(s.access_token); if (p && p.catch) p.catch(function () {}); } catch (e) { /* older client */ } }
        return s;
      });
      authed.catch(function () { authed = null; });
      try {
        c.auth.onAuthStateChange(function (ev, s) {
          if (s && c.realtime && c.realtime.setAuth && (ev === 'TOKEN_REFRESHED' || ev === 'SIGNED_IN')) { try { c.realtime.setAuth(s.access_token); } catch (e) { /* ignore */ } }
        });
      } catch (e) { /* no auth events */ }
    }
    return authed;
  }

  function watch(name, specs, fn, opts) {
    opts = opts || {};
    var c = client(), id = ++seq, wait = opts.wait == null ? 300 : opts.wait, timer = null, batch = [], stopped = false;
    var w = watchers[id] = { status: 'joining', fn: fn, fire: null, channel: null };
    function fire(change) {
      if (stopped) return;
      if (change) batch.push(change);
      clearTimeout(timer);
      timer = setTimeout(function () { var b = batch; batch = []; if (!stopped) { try { fn(b); } catch (e) { console.warn('[Alimun] live', name, e && e.message); } } }, wait);
    }
    w.fire = fire;
    function stop() {
      if (stopped) return;
      stopped = true; clearTimeout(timer);
      if (w.channel && c) { try { c.removeChannel(w.channel); } catch (e) { /* already gone */ } }
      delete watchers[id]; recompute();
    }
    if (!c || !c.channel || viewingAs() || !specs || !specs.length) { w.status = 'off'; recompute(); return stop; }
    recompute();
    auth(c).then(function () {
      if (stopped) return;
      var ch = c.channel('alimun-' + name + '-' + id);
      specs.forEach(function (s) {
        var o = { event: s.event || '*', schema: 'public', table: s.table };
        if (s.filter) o.filter = s.filter;
        ch.on('postgres_changes', o, function (p) {
          /* A change to a row this person may not read arrives as an empty notice ("401 Unauthorized"): ignore it */
          if (p.errors && p.errors.length) return;
          if (p.eventType !== 'DELETE' && (!p.new || !Object.keys(p.new).length)) return;
          fire({ table: s.table, type: p.eventType, row: p.new, old: p.old });
        });
      });
      w.channel = ch;
      ch.subscribe(function (st) {
        var was = w.status;
        w.status = st === 'SUBSCRIBED' ? 'SUBSCRIBED' : st === 'CHANNEL_ERROR' || st === 'TIMED_OUT' || st === 'CLOSED' ? 'off' : 'joining';
        /* Reconnected after a drop: something may have changed meanwhile */
        if (st === 'SUBSCRIBED' && was === 'off') fire(null);
        recompute();
      });
    }, function () { w.status = 'off'; recompute(); });
    return stop;
  }

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) { hiddenAt = Date.now(); return; }
    if (hiddenAt && Date.now() - hiddenAt > HIDDEN_RESYNC) Object.keys(watchers).forEach(function (k) { if (watchers[k].fire) watchers[k].fire(null); });
    hiddenAt = 0;
    if (on.dashboard) beat();
  });

  /* ---------- Who is in a dashboard now ---------- */
  var on = { dashboard: null, section: null, timer: null, last: 0, lastKey: '' };
  function beat() {
    var c = client();
    if (!c || !on.dashboard || document.hidden || viewingAs()) return;
    var key = on.dashboard + ':' + (on.section || '');
    if (key === on.lastKey && Date.now() - on.last < 45000) return;
    on.last = Date.now(); on.lastKey = key;
    c.rpc('touch_online', { p_dashboard: on.dashboard, p_section: on.section, p_page: location.pathname.slice(0, 200) })
      .then(function (r) { if (r && r.error && !/read-only/i.test(r.error.message || '')) console.warn('[Alimun] online', r.error.message); }, function () {});
  }
  function online(dashboard, section, isReal) {
    if (!isReal || (dashboard !== 'student' && dashboard !== 'teacher')) return;
    on.dashboard = dashboard;
    on.section = /^[a-z0-9_-]{1,40}$/.test(section || '') ? section : null;
    beat();
    if (!on.timer) on.timer = setInterval(beat, 60000);
  }

  window.AlimunLive = {
    watch: watch,
    online: online,
    status: function () { return state; },
    onStatus: function (fn) { statusFns.push(fn); try { fn(state); } catch (e) { /* listener error */ } }
  };
})();
