/* Alimun: the live class board (docs/LESSONS_PLAN.md, step L2). Used in the teacher's classroom (js/app/teach-classes.js)
   and the student's (js/app/classes.js), beside the Daily video.
   The teacher's browser holds the board: the lesson's board pages (from /data/classes/<course>.json) plus a blank page,
   the page shown, what is drawn and typed on each page, and whether each page's answers are revealed. Every change goes
   to the students through Daily app messages (4 KB each; a whole board is sent in pieces). A student who joins asks for
   the board ("hi") and the teacher's browser answers. Students accept board messages only from the room owner (the teacher).
   Students write when the teacher allows it (step L3): nobody, everyone, or one student. A student's marks go to the
   teacher's browser as requests (radd, rseg, rdel); it checks the student may write and passes them on to everyone.
   Students erase and undo only their own marks; pages, clearing and answers stay with the teacher.
   Drawing is in page pixels on a page 960 wide, so strokes land in the same place on every screen.
   Exercise answers stay hidden until the teacher reveals them (owner, 7 Nov 2026). */
(function () {
  'use strict';
  var W = 960, MINH = 540, V = 'b1', PIECE = 3000;
  var COLORS = { ink: '#080808', forest: '#1a443c', coral: '#ff9f8a', lime: '#ceff65' };
  var courses = {};

  function loadCourse(id) {
    if (!id) return Promise.resolve(null);
    if (courses[id]) return Promise.resolve(courses[id]);
    return fetch('/data/classes/' + encodeURIComponent(id) + '.json').then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (c) { courses[id] = c; return c; }, function () { return null; });
  }
  function rid() { return Math.random().toString(36).slice(2, 9); }

  /* ---------- Static drawing of a board page ---------- */
  function create(o) {
    var A = o.A, teacher = o.role === 'teacher', frame = o.frame;
    var t = function (k, v) { return A.t(k, v); };
    var esc = A.esc;
    var md = function (s) { return window.AlimunEx ? window.AlimunEx.md(s) : esc(s); };
    var paras = function (s) { return String(s || '').split(/\n\s*\n/).map(function (p) { return '<p>' + md(p.trim()) + '</p>'; }).join(''); };
    var key = 'alimun-board-' + (o.sessionId || 'x');
    var S = { v: 1, show: false, course: o.course || null, lesson: o.lesson || null, page: 0, pages: {}, write: { m: 'none', who: null } };
    var course = null, root = null, tool = 'pen', color = 'ink', drawing = null, segTimer = null, pending = {}, alive = true, mine = {}, me = null;
    if (teacher) { try { var saved = JSON.parse(localStorage.getItem(key) || 'null'); if (saved && saved.v === 1) S = Object.assign(S, saved, { course: o.course || saved.course, lesson: o.lesson || saved.lesson }); } catch (e) { /* storage blocked */ } }

    function lessonPages() {
      var l = course && S.lesson ? course.lessons.filter(function (x) { return x.id === S.lesson; })[0] : null;
      return (l && l.board ? l.board : []).concat([{ title: t('app_bd_blank'), blocks: [] }]);
    }
    function pg(i) { return S.pages[i] || (S.pages[i] = { it: [], rv: false }); }
    function save() { if (!teacher) return; try { localStorage.setItem(key, JSON.stringify(S)); } catch (e) { /* storage blocked */ } }
    function people() { var ps = frame && frame.participants ? frame.participants() : {}; return Object.keys(ps).map(function (k) { return ps[k]; }); }
    function myId() { if (!me) { var l = people().filter(function (x) { return x.local; })[0]; me = l ? l.session_id : null; } return me; }
    function teacherId() { var x = people().filter(function (y) { return y.owner && !y.local; })[0]; return x ? x.session_id : null; }
    function mayWrite(id) { var w = S.write || {}; return w.m === 'all' || (w.m === 'one' && !!id && w.who === id); }
    function canWrite() { return teacher || mayWrite(myId()); }

    function sorted(list) { return list.slice().sort(function (a, b) { return String(a).localeCompare(String(b)); }); }
    function gapOf(q, ans, rv) { return md(String(q || '').replace('___', rv ? '**' + String(ans || '').replace(/\*/g, '') + '**' : '______')); }
    function why(it, rv) { return rv && it.why ? '<span class="bd-why">' + md(it.why) + '</span>' : ''; }
    function exHtml(b, rv) {
      var h = '<div class="bd-ex"><p class="bd-ex__h">' + md(b.h || '') + '</p>', items = b.items || [];
      var li = function (inner) { return '<li>' + inner + '</li>'; };
      switch (b.kind) {
        case 'choice': case 'select': case 'odd': case 'picture':
          h += '<ol class="bd-list">' + items.map(function (it) {
            var right = it.o[0];
            var q = b.kind === 'odd' ? '' : b.kind === 'picture' ? esc(it.pic) : it.q && it.q.indexOf('___') > -1 ? gapOf(it.q, right, rv) : md(it.q || '');
            return li((q ? q + ' ' : '') + '<span class="bd-opts">' + sorted(it.o).map(function (x) { return '<span class="bd-opt' + (rv && x === right ? ' is-right' : '') + '">' + md(x) + '</span>'; }).join('') + '</span>' + why(it, rv));
          }).join('') + '</ol>'; break;
        case 'gap': case 'wordform':
          h += '<ol class="bd-list">' + items.map(function (it) { return li(gapOf(it.q, it.a[0], rv) + (it.base ? ' <span class="bd-base">' + esc(it.base).toUpperCase() + '</span>' : '') + why(it, rv)); }).join('') + '</ol>'; break;
        case 'bank':
          h += '<p class="bd-bank">' + sorted(items.map(function (it) { return it.a; }).concat(b.extra || [])).map(esc).join(' · ') + '</p>';
          h += '<ol class="bd-list">' + items.map(function (it) { return li(gapOf(it.q, it.a, rv) + why(it, rv)); }).join('') + '</ol>'; break;
        case 'fix':
          h += '<ol class="bd-list">' + items.map(function (it) {
            var parts = String(it.s).split(/\[([^\]]+)\]/);
            return li(md(parts[0]) + (rv ? '<s>' + md(parts[1]) + '</s> <b>' + esc(it.a[0]) + '</b>' : '<u>' + md(parts[1]) + '</u>') + md(parts[2] || '') + why(it, rv));
          }).join('') + '</ol>'; break;
        case 'transform':
          h += '<ol class="bd-list">' + items.map(function (it) { return li(md(it.q) + (it.cue ? ' <span class="bd-base">' + esc(it.cue) + '</span>' : '') + (rv ? '<br><b>' + esc(it.a[0]) + '</b>' : '<br>______________') + why(it, rv)); }).join('') + '</ol>'; break;
        case 'order': case 'build':
          h += '<ol class="bd-list">' + items.map(function (it) {
            var words = sorted(String(it.a).split(/\s+/).concat(it.extra || []));
            return li(rv ? '<b>' + esc(it.a) + '</b>' + why(it, rv) : '<span class="bd-opts">' + words.map(function (w) { return '<span class="bd-opt">' + esc(w) + '</span>'; }).join('') + '</span>');
          }).join('') + '</ol>'; break;
        case 'tf':
          var tf = { t: t('app_bd_true'), f: t('app_bd_false'), ng: t('app_bd_ng') };
          h += '<ol class="bd-list">' + items.map(function (it) { return li(md(it.q) + ' <span class="bd-opts">' + (b.ng ? ['t', 'f', 'ng'] : ['t', 'f']).map(function (k) { return '<span class="bd-opt' + (rv && it.a === k ? ' is-right' : '') + '">' + esc(tf[k]) + '</span>'; }).join('') + '</span>' + why(it, rv)); }).join('') + '</ol>'; break;
        case 'match':
          var rights = sorted(b.pairs.map(function (p) { return p[1]; }));
          h += rv ? '<ul class="bd-list">' + b.pairs.map(function (p) { return li(md(p[0]) + ' – <b>' + md(p[1]) + '</b>'); }).join('') + '</ul>'
            : '<div class="bd-cols"><ol class="bd-list">' + b.pairs.map(function (p) { return li(md(p[0])); }).join('') + '</ol><ul class="bd-list bd-abc">' + rights.map(function (r) { return li(md(r)); }).join('') + '</ul></div>'; break;
        case 'sort':
          h += rv ? '<div class="bd-cols">' + b.groups.map(function (g, gi) { return '<div><p class="bd-ex__h">' + md(g) + '</p><ul class="bd-list">' + items.filter(function (it) { return it.g === gi; }).map(function (it) { return li(md(it.s)); }).join('') + '</ul></div>'; }).join('') + '</div>'
            : '<p class="bd-bank">' + b.groups.map(esc).join(' / ') + '</p><p class="bd-opts">' + sorted(items.map(function (it) { return it.s; })).map(function (s) { return '<span class="bd-opt">' + md(s) + '</span>'; }).join('') + '</p>'; break;
        case 'conjugate':
          h += '<p class="bd-bank"><b>' + esc(b.verb || '') + '</b></p><ul class="bd-list">' + (b.rows || []).map(function (r) { return li(esc(r[0]) + ' ' + (rv ? '<b>' + esc(String(r[1]).split('|')[0]) + '</b>' : '______')); }).join('') + '</ul>'; break;
        case 'crossword':
          h += '<ol class="bd-list">' + (b.words || []).map(function (w) { return li(md(w.clue) + ' ' + (rv ? '<b>' + esc(w.a) + '</b>' : '<span class="bd-base">' + w.a.replace(/./g, '_ ') + '</span>')); }).join('') + '</ol>'; break;
        case 'colloc':
          h += '<ol class="bd-list">' + items.map(function (it) { return li('<b>' + esc(it.key) + '</b> <span class="bd-opts">' + it.o.map(function (x, k) { return '<span class="bd-opt' + (rv && it.a.indexOf(k) > -1 ? ' is-right' : '') + '">' + esc(x) + '</span>'; }).join('') + '</span>' + why(it, rv)); }).join('') + '</ol>'; break;
        case 'spot':
          h += '<ol class="bd-list">' + items.map(function (it) { return li(md(String(it.s).replace(/\[([^\]]+)\]/g, rv ? '**$1**' : '$1')) + why(it, rv)); }).join('') + '</ol>'; break;
        case 'label':
          h += '<p class="bd-bank">' + sorted(items.map(function (it) { return it.a; }).concat(b.extra || [])).map(esc).join(' · ') + '</p>' + (rv ? '<ol class="bd-list">' + items.map(function (it) { return li('<b>' + esc(it.a) + '</b>'); }).join('') + '</ol>' : ''); break;
        default:
          h += '<ol class="bd-list">' + items.map(function (it) { return li(md(it.q || it.s || it.a || '')); }).join('') + '</ol>';
      }
      return h + '</div>';
    }
    function blockHtml(b, rv) {
      switch (b.t) {
        case 'text': return '<div class="rd-text">' + paras(b.md) + '</div>';
        case 'tip': return '<div class="bd-tip">' + md(b.md) + '</div>';
        case 'examples': return '<ul class="bd-list">' + b.items.map(function (x) { return '<li>' + md(x.s) + '</li>'; }).join('') + '</ul>';
        case 'table':
          return '<figure class="rd-table">' + (b.caption ? '<div class="rd-table__top"><figcaption>' + md(b.caption) + '</figcaption></div>' : '') + '<div class="rd-table__scroll"><table><thead><tr>' +
            b.head.map(function (x) { return '<th scope="col">' + md(x) + '</th>'; }).join('') + '</tr></thead><tbody>' +
            b.rows.map(function (r) { return '<tr>' + r.map(function (c, k) { return k ? '<td>' + md(c) + '</td>' : '<th scope="row">' + md(c) + '</th>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div></figure>';
        case 'dialogue': return '<div class="bd-dialogue">' + (b.title ? '<p class="bd-ex__h">' + md(b.title) + '</p>' : '') + b.lines.map(function (l) { return '<p><b>' + esc(l.who) + ':</b> ' + md(l.s) + '</p>'; }).join('') + '</div>';
        case 'reading': return '<div class="bd-reading">' + (b.title ? '<p class="bd-ex__h">' + esc(b.title) + '</p>' : '') + paras(b.md) + '</div>';
        case 'ex': return exHtml(b, rv);
        default: return '';
      }
    }

    /* ---------- The board ---------- */
    function itemSvg(it) {
      if (it.t !== 's' || !it.p || it.p.length < 2) return '';
      var d = 'M' + it.p[0] + ' ' + it.p[1];
      for (var i = 2; i < it.p.length; i += 2) d += 'L' + it.p[i] + ' ' + it.p[i + 1];
      var hl = it.c === 'lime';
      return '<path data-id="' + esc(it.id) + '" d="' + d + '" stroke="' + COLORS[it.c] + '" stroke-width="' + (hl ? 22 : 4) + '" stroke-opacity="' + (hl ? 0.55 : 1) + '" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
    }
    function itemText(it) {
      return it.t === 't' ? '<div class="bd-note" data-id="' + esc(it.id) + '" style="left:' + (+it.x) + 'px;top:' + (+it.y) + 'px;color:' + COLORS[it.c === 'lime' ? 'forest' : it.c] + '">' + esc(it.s) + '</div>' : '';
    }
    function toolbar(pages) {
      if (!teacher && !canWrite()) return '';
      var btn = function (k, label) { return '<button class="btn btn--' + (tool === k ? 'primary' : 'quiet') + ' btn--sm" type="button" data-bd="tool" data-k="' + k + '" aria-pressed="' + (tool === k) + '">' + esc(t(label)) + '</button>'; };
      var sw = function (k) { return '<button class="bd-sw' + (color === k ? ' is-on' : '') + '" type="button" data-bd="color" data-k="' + k + '" style="background:' + COLORS[k] + '" aria-label="' + esc(t('app_bd_colour')) + ' ' + k + '" aria-pressed="' + (color === k) + '"></button>'; };
      var p = pg(S.page);
      var tools = btn('pen', 'app_bd_pen') + btn('marker', 'app_bd_marker') + btn('text', 'app_bd_text') + btn('eraser', 'app_bd_eraser') +
        '<span class="bd-sws">' + ['ink', 'forest', 'coral'].map(sw).join('') + '</span>' +
        '<button class="btn btn--quiet btn--sm" type="button" data-bd="undo">' + esc(t('app_bd_undo')) + '</button>';
      if (!teacher) return '<p class="t-small bd-you">' + esc(t('app_bd_you_can')) + '</p><div class="bd-tools btn-row">' + tools + '</div>';
      var w = S.write || {}, cur = w.m === 'one' ? 'one:' + w.who : w.m;
      var who = '<label class="bd-who"><span class="t-small">' + esc(t('app_bd_who')) + '</span><select class="st-in" data-bd-who>' +
        '<option value="none"' + (cur === 'none' ? ' selected' : '') + '>' + esc(t('app_bd_who_none')) + '</option>' +
        '<option value="all"' + (cur === 'all' ? ' selected' : '') + '>' + esc(t('app_bd_who_all')) + '</option>' +
        people().filter(function (x) { return !x.local && !x.owner; }).map(function (x) {
          return '<option value="one:' + esc(x.session_id) + '"' + (cur === 'one:' + x.session_id ? ' selected' : '') + '>' + esc(x.user_name || t('app_bd_student')) + '</option>';
        }).join('') + '</select></label>';
      return '<div class="bd-tabs btn-row" role="tablist">' + pages.map(function (x, i) { return '<button class="btn btn--' + (i === S.page ? 'primary' : 'ghost') + ' btn--sm" type="button" role="tab" aria-selected="' + (i === S.page) + '" data-bd="page" data-k="' + i + '">' + esc(x.title) + '</button>'; }).join('') + '</div>' +
        '<div class="bd-tools btn-row">' + tools +
        '<button class="btn btn--quiet btn--sm" type="button" data-bd="clear">' + esc(t('app_bd_clear')) + '</button>' +
        (pages[S.page].blocks.some(function (b) { return b.t === 'ex'; }) ? '<button class="btn btn--' + (p.rv ? 'primary' : 'ghost') + ' btn--sm" type="button" data-bd="reveal">' + esc(t(p.rv ? 'app_bd_hide_answers' : 'app_bd_reveal')) + '</button>' : '') + who + '</div>';
    }
    function draw() {
      if (!root) return;
      var pages = lessonPages();
      if (S.page >= pages.length) S.page = pages.length - 1;
      var page = pages[S.page], p = pg(S.page);
      if (!teacher && !S.show) { root.innerHTML = '<div class="bd-wait"><p class="t-body">' + esc(t('app_bd_wait')) + '</p></div>'; return; }
      root.innerHTML = toolbar(pages) + '<div class="bd-stage"><div class="bd-paper' + (canWrite() ? ' is-' + tool : '') + '" style="width:' + W + 'px"><h2 class="t-h2">' + esc(page.title) + '</h2>' +
        '<div class="bd-content" lang="en">' + page.blocks.map(function (b) { return blockHtml(b, p.rv); }).join('') + '</div>' +
        '<svg class="bd-ink" xmlns="http://www.w3.org/2000/svg">' + p.it.map(itemSvg).join('') + '</svg><div class="bd-notes">' + p.it.map(itemText).join('') + '</div></div></div>';
      fit();
    }
    function paper() { return root && root.querySelector('.bd-paper'); }
    /* The page is laid out 960 wide and scaled to the space it has */
    function fit() {
      var pp = paper(); if (!pp) return;
      var stage = pp.parentNode, k = Math.min(1, stage.clientWidth / W);
      var h = Math.max(MINH, pp.querySelector('.bd-content').offsetHeight + 120);
      pp.style.height = h + 'px';
      var svg = pp.querySelector('.bd-ink'); svg.setAttribute('viewBox', '0 0 ' + W + ' ' + h); svg.setAttribute('width', W); svg.setAttribute('height', h);
      pp.style.transform = 'scale(' + k + ')';
      stage.style.height = Math.ceil(h * k) + 'px';
    }
    function redrawInk() {
      var pp = paper(); if (!pp) return;
      var p = pg(S.page);
      pp.querySelector('.bd-ink').innerHTML = p.it.map(itemSvg).join('') + (drawing && drawing.pg === S.page ? itemSvg(drawing.it) : '');
      pp.querySelector('.bd-notes').innerHTML = p.it.map(itemText).join('');
    }

    /* ---------- Messages ---------- */
    function send(m, to) {
      if (!frame) return;
      m.a = V;
      try { frame.sendAppMessage(m, to || '*'); } catch (e) { /* not in the call yet */ }
    }
    function sendState(to) {
      var s = JSON.stringify(S), id = rid(), n = Math.ceil(s.length / PIECE) || 1;
      for (var i = 0; i < n; i++) send({ k: 'st', id: id, i: i, n: n, d: s.slice(i * PIECE, (i + 1) * PIECE) }, to);
    }
    function apply(m) {
      var p;
      switch (m.k) {
        case 'st':
          var b = pending[m.id] || (pending[m.id] = []);
          b[m.i] = m.d;
          if (b.filter(function (x) { return x != null; }).length === m.n) {
            delete pending[m.id];
            try { var ns = JSON.parse(b.join('')); if (ns && ns.v === 1) { S = ns; if (o.onShow) o.onShow(S.show); return loadCourse(S.course).then(function (c) { course = c; draw(); }); } } catch (e) { /* broken state */ }
          }
          return;
        case 'show': S.show = !!m.on; if (o.onShow) o.onShow(S.show); break;
        case 'write': S.write = { m: m.m, who: m.who || null }; if (drawing && !canWrite()) { clearInterval(segTimer); drawing = null; } break;
        case 'page': S.page = +m.pg || 0; break;
        case 'rv': pg(m.pg).rv = !!m.on; if (m.pg !== S.page) return; break;
        case 'clear': pg(m.pg).it = []; if (m.pg !== S.page) return; return redrawInk();
        case 'del': p = pg(m.pg); p.it = p.it.filter(function (x) { return x.id !== m.id; }); if (m.pg !== S.page) return; return redrawInk();
        case 'add': if (mine[m.it.id]) return; p = pg(m.pg); if (!p.it.some(function (x) { return x.id === m.it.id; })) p.it.push(m.it); if (m.pg !== S.page) return; return redrawInk();
        case 'seg':
          if (mine[m.id]) return;
          p = pg(m.pg);
          var it = p.it.filter(function (x) { return x.id === m.id; })[0];
          if (!it) { it = { id: m.id, t: 's', c: m.c, p: [] }; p.it.push(it); }
          it.p = it.p.concat(m.p);
          if (m.pg !== S.page) return; return redrawInk();
        default: return;
      }
      draw();
    }
    function onMessage(e) {
      var m = e && e.data;
      if (!m || m.a !== V || !alive) return;
      if (teacher) { if (m.k === 'hi') sendState(e.fromId); else if (/^r(add|seg|del)$/.test(m.k)) request(m, e.fromId); return; }
      /* Students accept the board only from the room owner (the teacher's token) */
      var ps = frame.participants ? frame.participants() : {};
      var from = Object.keys(ps).map(function (k) { return ps[k]; }).filter(function (x) { return x.session_id === e.fromId; })[0];
      if (!from || !from.owner) return;
      if (m.k !== 'st' && !course && S.course === null) { send({ k: 'hi' }); }
      apply(m);
    }
    /* A student's mark, accepted only while that student may write; then passed on to everyone */
    function cleanPts(a) { return Array.isArray(a) ? a.slice(0, 4000).map(function (n) { return Math.max(-50, Math.min(4000, Math.round(+n) || 0)); }) : []; }
    function request(m, from) {
      if (!mayWrite(from) || !(m.pg >= 0 && m.pg < lessonPages().length)) return;
      var p = pg(m.pg), id = String(m.id || (m.it && m.it.id) || '').slice(0, 24), it;
      if (!/^u[a-z0-9]+$/.test(id)) return;
      if (m.k === 'rdel') {
        it = p.it.filter(function (x) { return x.id === id; })[0];
        if (!it || it.by !== from) return;
        p.it = p.it.filter(function (x) { return x !== it; });
        save(); send({ k: 'del', pg: m.pg, id: id });
      } else if (m.k === 'rseg') {
        if (!COLORS[m.c]) return;
        it = p.it.filter(function (x) { return x.id === id; })[0];
        if (it && it.by !== from) return;
        if (!it) { it = { id: id, t: 's', c: m.c, p: [], by: from }; p.it.push(it); }
        var pts = cleanPts(m.p); if (it.p.length + pts.length > 8000) return;
        it.p = it.p.concat(pts);
        save(); send({ k: 'seg', pg: m.pg, id: id, c: it.c, p: pts });
      } else {
        var x = m.it || {};
        if (x.t !== 't' || !COLORS[x.c] || p.it.some(function (y) { return y.id === id; })) return;
        it = { id: id, t: 't', c: x.c, x: Math.round(+x.x) || 0, y: Math.round(+x.y) || 0, s: String(x.s || '').slice(0, 120), by: from };
        p.it.push(it); save(); send({ k: 'add', pg: m.pg, it: it });
      }
      if (m.pg === S.page) redrawInk();
    }
    /* Sends one change: the teacher to everyone, a student as a request to the teacher */
    function out(m) { if (teacher) send(m); else { var to = teacherId(); if (to) send(Object.assign({}, m, { k: 'r' + m.k }), to); } }
    function onJoined() { me = null; myId(); if (!teacher) send({ k: 'hi' }); else sendState(); }

    /* ---------- The teacher's tools ---------- */
    function point(e) {
      var pp = paper(), r = pp.getBoundingClientRect(), k = r.width / W;
      return [Math.round((e.clientX - r.left) / k), Math.round((e.clientY - r.top) / k)];
    }
    function flushSeg() {
      if (!drawing || !drawing.fresh.length) return;
      out({ k: 'seg', pg: drawing.pg, id: drawing.it.id, c: drawing.it.c, p: drawing.fresh });
      drawing.fresh = [];
    }
    function nearest(xy) {
      var p = pg(S.page), best = null, bd = 18;
      p.it.forEach(function (it) {
        if (!teacher && !mine[it.id]) return;
        if (it.t === 't') { if (xy[0] >= it.x - 6 && xy[0] <= it.x + 12 * String(it.s).length && xy[1] >= it.y - 6 && xy[1] <= it.y + 36) { best = it; bd = 0; } return; }
        for (var i = 0; i < it.p.length; i += 2) { var d = Math.hypot(it.p[i] - xy[0], it.p[i + 1] - xy[1]); if (d < bd) { bd = d; best = it; } }
      });
      return best;
    }
    function erase(xy) {
      var it = nearest(xy); if (!it) return;
      var p = pg(S.page); p.it = p.it.filter(function (x) { return x !== it; });
      save(); out({ k: 'del', pg: S.page, id: it.id }); redrawInk();
    }
    function newId() { var id = teacher ? rid() : 'u' + rid(); if (!teacher) mine[id] = 1; return id; }
    function down(e) {
      if (!canWrite() || !e.target.closest('.bd-paper') || e.target.closest('.bd-input')) return;
      var xy = point(e);
      if (tool === 'text') { textAt(xy); e.preventDefault(); return; }
      if (tool === 'eraser') { erase(xy); drawing = { erase: true }; e.preventDefault(); return; }
      drawing = { pg: S.page, it: { id: newId(), t: 's', c: tool === 'marker' ? 'lime' : color, p: xy.slice() }, fresh: xy.slice() };
      segTimer = setInterval(flushSeg, 120);
      try { e.target.setPointerCapture(e.pointerId); } catch (x) { /* fine */ }
      e.preventDefault();
    }
    function move(e) {
      if (!drawing) return;
      if (!canWrite()) { clearInterval(segTimer); drawing = null; redrawInk(); return; }
      var xy = point(e);
      if (drawing.erase) { erase(xy); return; }
      var pts = drawing.it.p, n = pts.length;
      if (Math.abs(pts[n - 2] - xy[0]) + Math.abs(pts[n - 1] - xy[1]) < 3) return;
      pts.push(xy[0], xy[1]); drawing.fresh.push(xy[0], xy[1]);
      redrawInk();
    }
    function up() {
      if (!drawing) return;
      clearInterval(segTimer);
      if (!drawing.erase && drawing.it.p.length >= 4) { flushSeg(); pg(drawing.pg).it.push(drawing.it); save(); }
      drawing = null; redrawInk();
    }
    function textAt(xy) {
      var pp = paper(), old = pp.querySelector('.bd-input'); if (old) old.remove();
      var inp = document.createElement('input');
      inp.className = 'bd-input st-in'; inp.maxLength = 120; inp.placeholder = t('app_bd_text_ph');
      inp.style.left = xy[0] + 'px'; inp.style.top = xy[1] + 'px';
      pp.appendChild(inp); inp.focus();
      var finished = false;
      var done = function (keep) {
        if (finished) return;
        finished = true;
        var s = inp.value.trim(); if (inp.parentNode) inp.parentNode.removeChild(inp);
        if (!keep || !s) return;
        if (!canWrite()) return;
        var it = { id: newId(), t: 't', c: color, x: xy[0], y: xy[1], s: s };
        pg(S.page).it.push(it); save(); out({ k: 'add', pg: S.page, it: it }); redrawInk();
      };
      inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') done(true); else if (e.key === 'Escape') done(false); });
      inp.addEventListener('blur', function () { done(true); });
    }
    function click(e) {
      var b = e.target.closest('[data-bd]'); if (!b || !canWrite()) return;
      var k = b.getAttribute('data-bd'), v = b.getAttribute('data-k'), p = pg(S.page);
      if (!teacher && ['tool', 'color', 'undo'].indexOf(k) < 0) return;
      if (k === 'tool') { tool = v; draw(); return; }
      if (k === 'color') { color = v; if (tool === 'marker' || tool === 'eraser') tool = 'pen'; draw(); return; }
      if (k === 'page') { S.page = +v; save(); send({ k: 'page', pg: S.page }); draw(); return; }
      if (k === 'undo') {
        var own = p.it.filter(function (x) { return teacher ? !x.by : mine[x.id]; }), last = own[own.length - 1];
        if (last) { p.it = p.it.filter(function (x) { return x !== last; }); save(); out({ k: 'del', pg: S.page, id: last.id }); redrawInk(); }
        return;
      }
      if (k === 'clear') { if (b.getAttribute('data-sure') !== '1') { b.setAttribute('data-sure', '1'); b.textContent = t('app_bd_clear_sure'); return; } p.it = []; save(); send({ k: 'clear', pg: S.page }); draw(); return; }
      if (k === 'reveal') { p.rv = !p.rv; save(); send({ k: 'rv', pg: S.page, on: p.rv }); draw(); }
    }

    /* ---------- Setup ---------- */
    function mountIn(el) {
      root = el;
      root.addEventListener('pointerdown', down);
      root.addEventListener('pointermove', move);
      root.addEventListener('pointerup', up);
      root.addEventListener('pointercancel', up);
      root.addEventListener('click', click);
      root.addEventListener('change', function (e) {
        var sel = e.target.closest('[data-bd-who]'); if (!sel || !teacher) return;
        var v = sel.value, w = v.indexOf('one:') === 0 ? { m: 'one', who: v.slice(4) } : { m: v === 'all' ? 'all' : 'none', who: null };
        S.write = w; save(); send({ k: 'write', m: w.m, who: w.who }); draw();
      });
      window.addEventListener('resize', fit);
      return loadCourse(S.course).then(function (c) { course = c; draw(); });
    }
    function setShow(on) { S.show = !!on; save(); send({ k: 'show', on: S.show }); if (on) sendState(); draw(); }
    function destroy() {
      alive = false; clearInterval(segTimer);
      if (frame) { try { frame.off('app-message', onMessage); frame.off('joined-meeting', onJoined); frame.off('participant-joined', onPeople); frame.off('participant-left', onPeople); } catch (e) { /* gone */ } }
      window.removeEventListener('resize', fit);
      root = null;
    }
    function onPeople() { if (teacher && root && !drawing) draw(); }
    if (frame) { frame.on('app-message', onMessage); frame.on('joined-meeting', onJoined); if (teacher) { frame.on('participant-joined', onPeople); frame.on('participant-left', onPeople); } }
    return { mount: mountIn, show: setShow, shown: function () { return S.show; }, destroy: destroy, hello: onJoined, fit: fit };
  }

  window.AlimunBoard = { create: create };
})();
