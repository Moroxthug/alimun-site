/* Alimun: the live class board (docs/LESSONS_PLAN.md, step L2). Used in the teacher's classroom (js/app/teach-classes.js)
   and the student's (js/app/classes.js), beside the Daily video.
   The teacher's browser holds the board: the lesson's board pages (from /data/classes/<course>.json) plus a blank page,
   the page shown, what is drawn and typed on each page, and whether each page's answers are revealed. Every change goes
   to the students through Daily app messages (4 KB each; a whole board is sent in pieces). A student who joins asks for
   the board ("hi") and the teacher's browser answers. Students accept board messages only from the room owner (the teacher).
   Students write when the teacher allows it (step L3): nobody, everyone, or one student. A student's marks go to the
   teacher's browser as requests (radd, rseg, rdel); it checks the student may write and passes them on to everyone.
   Students erase and undo only their own marks; pages, clearing and answers stay with the teacher.
   "Everyone solves this" (step L4): the teacher starts a timed exercise on a page; each student works on a private copy
   and sends it ("Show the teacher", or by itself when the time is up); the teacher sees who has sent, opens any
   student's work, can show one to the class, and ends it, which brings everyone back to the shared board.
   Saving (step L5): with o.persist, the teacher's browser saves the board to session_boards a few seconds after each
   change and when the class page closes, and each student's solo work to session_board_work (by their Alimun user id
   from the meeting token). load() fills an empty board from the database (another device). role 'viewer' draws a saved
   board read-only for the class notes: the pages that were written on, then the solo work given in o.work.
   Drawing is in page pixels on a page 960 wide, so strokes land in the same place on every screen.
   Exercise answers stay hidden until the teacher reveals them (owner, 7 Nov 2026). */
(function () {
  'use strict';
  var W = 960, MINH = 540, V = 'b1', PIECE = 3000;
  var COLORS = { ink: '#080808', forest: '#1a443c', coral: '#ff9f8a', lime: '#ceff65' };
  /* Line icons in the dashboards' style (2 px strokes, round ends) */
  var IP = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  var ICONS = {
    pen: '<path d="M4 20l1-4.5L15.5 5a2.1 2.1 0 0 1 3 3L8 18.5z"/><path d="M13.5 7l3 3"/>',
    marker: '<path d="M9 15l-4 4h6l1.5-1.5"/><path d="M8.5 14.5 16.5 4.5l3 3-8 10z"/><path d="M4 21h16" opacity=".5"/>',
    text: '<path d="M5 6.5V5h14v1.5M12 5v14M9 19h6"/>',
    eraser: '<path d="M8.5 19.5 4 15a1.5 1.5 0 0 1 0-2.1L13 4a1.5 1.5 0 0 1 2.1 0L20 8.9a1.5 1.5 0 0 1 0 2.1l-8.5 8.5z"/><path d="M8.5 19.5H20M9 9.5l5.5 5.5"/>',
    undo: '<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/>',
    clear: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 12.5a1.5 1.5 0 0 0 1.5 1.5h7a1.5 1.5 0 0 0 1.5-1.5L18 7M9 7V4.5h6V7"/>',
    eye: '<path d="M2.5 12s3.5-6.5 9.5-6.5 9.5 6.5 9.5 6.5-3.5 6.5-9.5 6.5S2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.8"/>',
    left: '<path d="M15 5l-7 7 7 7"/>', right: '<path d="M9 5l7 7-7 7"/>', down: '<path d="M6 9l6 6 6-6"/>',
    plus: '<path d="M12 5v14M5 12h14"/>', people: '<circle cx="9" cy="8.5" r="3.2"/><path d="M3.5 19.5c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5"/><circle cx="16.8" cy="9.5" r="2.5"/><path d="M15.5 14.6c2.6-.3 4.4 1.3 5 4.4"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>', check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    hand: '<path d="M8 13V6.5a1.5 1.5 0 0 1 3 0V12M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V5.5a1.5 1.5 0 0 1 3 0V12M17 10.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6h-1.5a6 6 0 0 1-4.6-2.2L4.5 15.6a1.6 1.6 0 0 1 2.3-2.2L8 14.5"/>',
    zoom: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="M20 20l-4.8-4.8M10.5 7.5v6M7.5 10.5h6"/>',
    zoomout: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="M20 20l-4.8-4.8M7.5 10.5h6"/>'
  };
  function ic(n) { return '<svg class="bd-i" viewBox="0 0 24 24" ' + IP + ' aria-hidden="true" focusable="false">' + ICONS[n] + '</svg>'; }
  /* Empty pages the teacher can add to any class (owner, 10 Nov 2026: more material for the board) */
  var TPLS = ['lined', 'grid', 'cols', 'mind', 'time', 'table'];
  var TPL_KEYS = { lined: 'app_bd_tpl_lined', grid: 'app_bd_tpl_grid', cols: 'app_bd_tpl_cols', mind: 'app_bd_tpl_mind', time: 'app_bd_tpl_time', table: 'app_bd_tpl_table' };
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
    var A = o.A, teacher = o.role === 'teacher', viewer = o.role === 'viewer', frame = viewer ? null : o.frame;
    var t = function (k, v) { return A.t(k, v); };
    var esc = A.esc;
    var md = function (s) { return window.AlimunEx ? window.AlimunEx.md(s) : esc(s); };
    var paras = function (s) { return String(s || '').split(/\n\s*\n/).map(function (p) { return '<p>' + md(p.trim()) + '</p>'; }).join(''); };
    var key = 'alimun-board-' + (o.sessionId || 'x');
    var S = { v: 1, show: false, course: o.course || null, lesson: o.lesson || null, page: 0, pages: {}, extra: [], write: { m: 'none', who: null } };
    var course = null, root = null, tool = 'pen', color = 'ink', drawing = null, segTimer = null, pending = {}, alive = true, mine = {}, me = null;
    var soloIt = [], soloId = null, soloSent = false, soloLocked = false, viewing = null, ticker = null, saveTimer = null, dirtyWork = {}, menu = false, clearSure = false, zoom = 1;
    if (viewer && o.data) S = Object.assign(S, { course: o.data.course || null, lesson: o.data.lesson || null, pages: o.data.pages || {}, extra: Array.isArray(o.data.extra) ? o.data.extra : [], show: true });
    if (teacher) { try { var saved = JSON.parse(localStorage.getItem(key) || 'null'); if (saved && saved.v === 1) S = Object.assign(S, saved, { course: o.course || saved.course, lesson: o.lesson || saved.lesson }); } catch (e) { /* storage blocked */ } }

    function lessonOf(id) { return course && id ? course.lessons.filter(function (x) { return x.id === id; })[0] || null : null; }
    /* The lesson's board pages, a blank page, then the pages the teacher added in class (S.extra): an empty page
       (lined, squared, two columns, word map, timeline, table), a page from another lesson of the course, or the
       words from the last class. Added pages keep their place, so what is drawn on them stays on the right page. */
    function lessonPages() {
      var l = lessonOf(S.lesson);
      return (l && l.board ? l.board : []).concat([{ title: t('app_bd_blank'), blocks: [] }]).concat((S.extra || []).map(extraPage));
    }
    function extraPage(x) {
      if (x && x.s === 'tpl' && TPLS.indexOf(x.k) > -1) return { title: t(TPL_KEYS[x.k]), blocks: [{ t: 'tpl', k: x.k }], added: true };
      if (x && x.s === 'lesson') { var l = lessonOf(x.l), p = l && l.board ? l.board[+x.i] : null; if (p) return { title: p.title, blocks: p.blocks || [], added: true, from: l.title }; }
      if (x && x.s === 'words' && Array.isArray(x.w)) return { title: t('app_bd_words_page'), added: true, blocks: [{ t: 'table', head: [t('app_bd_word'), t('app_bd_meaning')], rows: x.w.slice(0, 20).map(function (w) { return [String(w[0] || '').slice(0, 200), String(w[1] || '').slice(0, 300)]; }) }] };
      return { title: t('app_bd_blank'), blocks: [], added: true };
    }
    function pg(i) { return S.pages[i] || (S.pages[i] = { it: [], rv: false }); }
    function save() { if (!teacher) return; try { localStorage.setItem(key, JSON.stringify(S)); } catch (e) { /* storage blocked */ } persist(false); }
    /* The database copy (step L5): a few seconds after the last change, or at once when the class page closes */
    function persist(now) {
      if (!teacher || !o.persist || !window.AlimunData || !window.AlimunData.saveBoard) return;
      clearTimeout(saveTimer);
      saveTimer = setTimeout(saveNow, now ? 0 : 6000);
    }
    function saveNow() {
      clearTimeout(saveTimer); saveTimer = null;
      if (!o.persist || !window.AlimunData) return;
      var solos = (S.solos || []).map(function (x) { return { id: x.id, pg: x.pg, at: x.at }; });
      var pgOf = {}; solos.forEach(function (x) { pgOf[x.id] = x.pg; });
      var rows = [], sent = Object.keys(dirtyWork);
      sent.forEach(function (k) {
        var i = k.indexOf(':'), sid = k.slice(0, i), who = k.slice(i + 1), w = S.work && S.work[sid] && S.work[sid][who];
        if (w && w.uid) rows.push({ session_id: o.sessionId, solo_id: sid, user_id: w.uid, name: String(w.name || '').slice(0, 100), page: pgOf[sid] || 0, items: w.it || [], sent_at: new Date(w.at || Date.now()).toISOString() });
      });
      window.AlimunData.saveBoard(o.sessionId, { course: S.course, lesson: S.lesson, pages: S.pages, solos: solos, extra: S.extra || [] })
        .then(function () { return window.AlimunData.saveBoardWork(rows); })
        .then(function () { sent.forEach(function (k) { delete dirtyWork[k]; }); }, function () { /* kept in this browser; tried again on the next change */ });
    }
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
        case 'tpl': return tplHtml(b.k);
        default: return '';
      }
    }

    /* The empty pages: lines, squares, two columns, a word map, a timeline or a table to write into */
    function tplHtml(k) {
      var svg = function (inner) { return '<svg class="bd-tpl__svg" viewBox="0 0 872 620" ' + IP + ' aria-hidden="true">' + inner + '</svg>'; };
      switch (k) {
        case 'cols': return '<div class="bd-tpl bd-tpl--cols"><div></div><div></div></div>';
        case 'mind':
          var spokes = '';
          for (var i = 0; i < 8; i++) { var a = i * Math.PI / 4 + Math.PI / 8, x = 436 + Math.cos(a) * 250, y = 310 + Math.sin(a) * 215; spokes += '<path d="M' + (436 + Math.cos(a) * 92).toFixed(0) + ' ' + (310 + Math.sin(a) * 70).toFixed(0) + 'L' + x.toFixed(0) + ' ' + y.toFixed(0) + '" stroke-dasharray="2 9"/><ellipse cx="' + x.toFixed(0) + '" cy="' + y.toFixed(0) + '" rx="62" ry="30"/>'; }
          return '<div class="bd-tpl bd-tpl--mind">' + svg('<ellipse cx="436" cy="310" rx="96" ry="64" stroke-width="3"/>' + spokes) + '</div>';
        case 'time':
          var ticks = '';
          for (var j = 0; j < 6; j++) { var tx = 60 + j * 150; ticks += '<circle cx="' + tx + '" cy="310" r="9"/><path d="M' + tx + ' ' + (j % 2 ? 330 : 290) + 'V' + (j % 2 ? 440 : 180) + '" stroke-dasharray="2 9"/>'; }
          return '<div class="bd-tpl bd-tpl--time">' + svg('<path d="M30 310H842M826 296l16 14-16 14" stroke-width="3"/>' + ticks) + '</div>';
        case 'table':
          var row = '<tr>' + new Array(5).join('<td></td>') + '</tr>';
          return '<div class="bd-tpl bd-tpl--table"><table><tbody>' + new Array(8).join(row) + '</tbody></table></div>';
        default: return '<div class="bd-tpl bd-tpl--' + (k === 'grid' ? 'grid' : 'lined') + '"></div>';
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
    /* "Everyone solves this" (step L4): S.solo { on, pg, ends, id } while it runs; each student draws on a private copy
       (soloIt), sends it to the teacher ("rsolo"), and the teacher keeps it in S.work[solo id][student]. S.spot is one
       student's work shown to the whole class. */
    function isSolo() { return !!(S.solo && S.solo.on); }
    function privateMode() { return !teacher && isSolo(); }
    function soloLeft() { return isSolo() ? Math.max(0, S.solo.ends - Date.now()) : 0; }
    function workOf(id) { return isSolo() && S.work && S.work[S.solo.id] ? S.work[S.solo.id][id] || null : null; }
    function canDraw() { if (S.spot || viewing) return false; if (privateMode()) return !soloLocked; return canWrite(); }
    function view() {
      if (S.spot) return [S.spot.pg, S.spot.it || []];
      if (teacher && viewing && isSolo()) { var w = workOf(viewing); return [S.solo.pg, w ? w.it : []]; }
      if (privateMode()) return [S.solo.pg, pg(S.solo.pg).it.concat(soloIt)];
      return [S.page, pg(S.page).it];
    }
    function mmss(ms) { var s = Math.ceil(ms / 1000); return Math.floor(s / 60) + ':' + ('0' + (s % 60)).slice(-2); }
    /* The floating tool dock under the page: pen, highlighter, text, eraser, three colours, undo (and, for the
       teacher, clear the page). Icons with their names for screen readers and on hover. */
    function dockHtml(extra) {
      var btn = function (k, label) { return '<button class="bd-tool' + (tool === k ? ' is-on' : '') + '" type="button" data-bd="tool" data-k="' + k + '" aria-pressed="' + (tool === k) + '" aria-label="' + esc(t(label)) + '" title="' + esc(t(label)) + '">' + ic(k) + '</button>'; };
      var sw = function (k) { return '<button class="bd-sw' + (color === k ? ' is-on' : '') + '" type="button" data-bd="color" data-k="' + k + '" style="--sw:' + COLORS[k] + '" aria-label="' + esc(t('app_bd_colour')) + ' ' + k + '" aria-pressed="' + (color === k) + '"></button>'; };
      return '<div class="bd-dock" role="toolbar" aria-label="' + esc(t('app_bd_tools')) + '">' + zoomBtn() + (zoom > 1 ? btn('hand', 'app_bd_hand') : '') + btn('pen', 'app_bd_pen') + btn('marker', 'app_bd_marker') + btn('text', 'app_bd_text') + btn('eraser', 'app_bd_eraser') +
        '<span class="bd-sep"></span><span class="bd-sws">' + ['ink', 'forest', 'coral'].map(sw).join('') + '</span><span class="bd-sep"></span>' +
        '<button class="bd-tool" type="button" data-bd="undo" aria-label="' + esc(t('app_bd_undo')) + '" title="' + esc(t('app_bd_undo')) + '">' + ic('undo') + '</button>' + (extra || '') + '</div>';
    }
    /* Phones: the page fits the width and is small, so it can be shown twice as large and moved with the hand tool */
    function zoomBtn() { return '<button class="bd-tool bd-narrow' + (zoom > 1 ? ' is-on' : '') + '" type="button" data-bd="zoom" aria-pressed="' + (zoom > 1) + '" aria-label="' + esc(t(zoom > 1 ? 'app_bd_zoom_out' : 'app_bd_zoom_in')) + '" title="' + esc(t(zoom > 1 ? 'app_bd_zoom_out' : 'app_bd_zoom_in')) + '">' + ic(zoom > 1 ? 'zoomout' : 'zoom') + '</button>'; }
    function clock() { return '<span class="bd-clock" data-bd-clock>' + ic('clock') + '<span>' + esc(mmss(soloLeft())) + '</span></span>'; }
    /* The page menu: every page of this class, then pages to add (empty pages, pages from other lessons of the course,
       the words from the last class) */
    function menuHtml(pages) {
      var h = '<div class="card bd-menu" data-bd-menu role="menu"><p class="t-small bd-menu__h">' + esc(t('app_bd_in_class')) + '</p><div class="bd-menu__list">' +
        pages.map(function (x, i) { return '<button class="bd-mi' + (i === S.page ? ' is-on' : '') + '" type="button" role="menuitem" data-bd="page" data-k="' + i + '"><span class="bd-mi__n">' + (i + 1) + '</span><span>' + esc(x.title) + (x.from ? '<small>' + esc(x.from) + '</small>' : '') + '</span>' + (i === S.page ? ic('check') : '') + '</button>'; }).join('') + '</div>';
      if ((S.extra || []).length >= 30) return h + '</div>';
      h += '<p class="t-small bd-menu__h">' + esc(t('app_bd_templates')) + '</p><div class="bd-menu__grid">' +
        TPLS.map(function (k) { return '<button class="bd-tile bd-tile--' + k + '" type="button" data-bd="add" data-k="tpl:' + k + '"><span class="bd-tile__pic bd-tile__pic--' + k + '" aria-hidden="true"></span><span>' + esc(t(TPL_KEYS[k])) + '</span></button>'; }).join('') + '</div>';
      var words = (o.words || []).filter(function (w) { return w && w.word; });
      if (words.length) h += '<button class="bd-mi" type="button" data-bd="add" data-k="words">' + ic('plus') + '<span>' + esc(t('app_bd_words_page')) + '<small>' + esc(t('app_bd_n_words', { n: words.length })) + '</small></span></button>';
      var others = course ? course.lessons.filter(function (l) { return l.board && l.board.length; }) : [];
      if (others.length) {
        h += '<p class="t-small bd-menu__h">' + esc(t('app_bd_from_course')) + '</p><div class="bd-menu__list">' + others.map(function (l) {
          return '<details class="bd-lesson"' + (l.id === S.lesson ? ' open' : '') + '><summary>' + esc(l.title) + ic('down') + '</summary>' + l.board.map(function (p, i) {
            return '<button class="bd-mi" type="button" data-bd="add" data-k="lesson:' + esc(l.id) + ':' + i + '">' + ic('plus') + '<span>' + esc(p.title) + '</span></button>';
          }).join('') + '</details>';
        }).join('') + '</div>';
      }
      return h + '</div>';
    }
    function headHtml(pages) {
      var cur = pages[S.page] || pages[0];
      var nav = '<div class="bd-nav"><button class="btn btn--quiet btn--sm bd-arrow" type="button" data-bd="step" data-k="-1" aria-label="' + esc(t('app_bd_prev')) + '"' + (S.page ? '' : ' disabled') + '>' + ic('left') + '</button>' +
        '<button class="bd-pagebtn" type="button" data-bd="menu" aria-haspopup="menu" aria-expanded="' + menu + '"><span class="t-h3 bd-pagebtn__t">' + esc(cur.title) + '</span><span class="t-small bd-pagebtn__n">' + esc(t('app_bd_page_n', { n: S.page + 1, of: pages.length })) + '</span>' + ic('down') + '</button>' +
        '<button class="btn btn--quiet btn--sm bd-arrow" type="button" data-bd="step" data-k="1" aria-label="' + esc(t('app_bd_next')) + '"' + (S.page < pages.length - 1 ? '' : ' disabled') + '>' + ic('right') + '</button></div>';
      var p = pg(S.page), w = S.write || {}, sel = w.m === 'one' ? 'one:' + w.who : w.m;
      var who = '<label class="bd-field"><span class="t-small">' + esc(t('app_bd_who')) + '</span><select class="st-in" data-bd-who>' +
        '<option value="none"' + (sel === 'none' ? ' selected' : '') + '>' + esc(t('app_bd_who_none')) + '</option>' +
        '<option value="all"' + (sel === 'all' ? ' selected' : '') + '>' + esc(t('app_bd_who_all')) + '</option>' +
        people().filter(function (x) { return !x.local && !x.owner; }).map(function (x) {
          return '<option value="one:' + esc(x.session_id) + '"' + (sel === 'one:' + x.session_id ? ' selected' : '') + '>' + esc(x.user_name || t('app_bd_student')) + '</option>';
        }).join('') + '</select></label>';
      var solo = '<span class="bd-field bd-field--solo"><button class="btn btn--ghost btn--sm" type="button" data-bd="solo">' + ic('clock') + '<span>' + esc(t('app_bd_solo')) + '</span></button><select class="st-in" data-bd-mins aria-label="' + esc(t('app_bd_solo')) + '">' +
        [3, 5, 10].map(function (n) { return '<option value="' + n + '"' + (n === 5 ? ' selected' : '') + '>' + esc(t('app_bd_mins', { n: n })) + '</option>'; }).join('') + '</select></span>';
      var ans = (cur.blocks || []).some(function (b) { return b.t === 'ex'; }) ? '<button class="btn btn--sm ' + (p.rv ? 'btn--lime' : 'btn--quiet') + '" type="button" data-bd="reveal" aria-pressed="' + p.rv + '">' + ic('eye') + '<span>' + esc(t(p.rv ? 'app_bd_hide_answers' : 'app_bd_reveal')) + '</span></button>' : '';
      return '<div class="bd-head">' + nav + '<div class="bd-ctls">' + ans + who + solo + '</div>' + (menu ? menuHtml(pages) : '') + '</div>';
    }
    /* What sits above the page: the teacher's page switcher and class controls, a student's note, or the panel of
       "Everyone solves this" */
    function toolbar(pages) {
      if (!teacher && S.spot) return '<div class="card card--leaf bd-banner">' + ic('eye') + '<p class="t-h3">' + esc(t('app_bd_work_of', { name: S.spot.name })) + '</p></div>';
      if (privateMode()) {
        return '<div class="card card--leaf bd-solo"><div class="bd-solo__top"><h3 class="t-h3">' + esc(t('app_bd_solo_h')) + '</h3>' + clock() + '</div>' +
          (soloLocked ? '<p class="t-body">' + esc(t('app_bd_timeup')) + '</p>'
            : '<div class="bd-solo__row"><button class="btn btn--primary btn--sm" type="button" data-bd="sendwork">' + esc(t('app_bd_send')) + '</button>' +
              (soloSent ? '<p class="t-small bd-you">' + esc(t('app_bd_sent')) + '</p>' : '') + '</div>') + '</div>';
      }
      if (teacher && isSolo()) {
        var list = people().filter(function (x) { return !x.local && !x.owner; });
        var gone = Object.keys(S.work[S.solo.id] || {}).filter(function (k) { return !list.some(function (x) { return x.session_id === k; }); });
        var row = function (id, name) { var w = workOf(id); return '<button class="btn btn--sm ' + (viewing === id ? 'btn--primary' : 'btn--quiet') + ' bd-person' + (w ? ' is-done' : '') + '" type="button" data-bd="see" data-k="' + esc(id) + '"><span class="bd-person__dot"></span><span>' + esc(name) + '</span><small>' + esc(t(w ? 'app_bd_done' : 'app_bd_working')) + '</small></button>'; };
        return '<div class="card card--leaf bd-solo"><div class="bd-solo__top"><h3 class="t-h3">' + esc(t('app_bd_solving')) + '</h3>' + clock() + '</div>' +
          '<div class="bd-solo__people">' + list.map(function (x) { return row(x.session_id, x.user_name || t('app_bd_student')); }).join('') +
            gone.map(function (k) { return row(k, S.work[S.solo.id][k].name || t('app_bd_student')); }).join('') + '</div>' +
          '<div class="bd-solo__row">' + (viewing ? '<button class="btn btn--quiet btn--sm" type="button" data-bd="back">' + esc(t('app_bd_back')) + '</button>' +
              (workOf(viewing) && !S.spot ? '<button class="btn btn--ghost btn--sm" type="button" data-bd="spot">' + esc(t('app_bd_spot')) + '</button>' : '') : '') +
            (S.spot ? '<button class="btn btn--ghost btn--sm" type="button" data-bd="spotoff">' + esc(t('app_bd_spot_off')) + '</button>' : '') +
            '<button class="btn btn--primary btn--sm" type="button" data-bd="end">' + esc(t('app_bd_end')) + '</button></div>' +
          (viewing ? '<p class="t-small bd-you">' + esc(t('app_bd_work_of', { name: (workOf(viewing) || {}).name || (people().filter(function (x) { return x.session_id === viewing; })[0] || {}).user_name || t('app_bd_student') })) + '</p>' : '') + '</div>';
      }
      if (!teacher) {
        var cur = pages[Math.min(view()[0], pages.length - 1)];
        return '<div class="bd-head bd-head--student"><h2 class="t-h3 bd-title">' + esc(cur.title) + '</h2>' + (canWrite() ? '<p class="bd-you">' + ic('pen') + '<span>' + esc(t('app_bd_you_can')) + '</span></p>' : zoomBtn()) + '</div>';
      }
      return headHtml(pages);
    }
    function dockFor() {
      if (S.spot || (teacher && viewing)) return '';
      if (privateMode()) return soloLocked ? '' : dockHtml('');
      if (!canWrite()) return '';
      return dockHtml(teacher && !isSolo() ? '<button class="bd-tool' + (clearSure ? ' is-warn' : '') + '" type="button" data-bd="clear" aria-label="' + esc(t(clearSure ? 'app_bd_clear_sure' : 'app_bd_clear')) + '" title="' + esc(t(clearSure ? 'app_bd_clear_sure' : 'app_bd_clear')) + '">' + ic('clear') + (clearSure ? '<span>' + esc(t('app_bd_clear_sure')) + '</span>' : '') + '</button>' : '');
    }
    function paperHtml(title, page, items, rv) {
      return '<div class="bd-stage"><div class="bd-paper" style="width:' + W + 'px"><h2 class="t-h2">' + esc(title) + '</h2>' +
        '<div class="bd-content" lang="en">' + page.blocks.map(function (b) { return blockHtml(b, rv); }).join('') + '</div>' +
        '<svg class="bd-ink" xmlns="http://www.w3.org/2000/svg">' + items.map(itemSvg).join('') + '</svg><div class="bd-notes">' + items.map(itemText).join('') + '</div></div></div>';
    }
    function digest() {
      var pages = lessonPages(), html = '';
      Object.keys(S.pages || {}).map(Number).sort(function (a, b) { return a - b; }).forEach(function (i) {
        var p = S.pages[i]; if (!p || !pages[i] || !(p.it || []).length) return;
        html += paperHtml(pages[i].title, pages[i], p.it, !!p.rv);
      });
      (o.work || []).forEach(function (w) {
        var page = pages[Math.min(+w.page || 0, pages.length - 1)];
        if (page && (w.items || []).length) html += paperHtml((w.own ? t('app_bd_your_work') : t('app_bd_work_of', { name: w.name || t('app_bd_student') })) + ': ' + page.title, page, w.items, false);
      });
      return html || '<p class="t-body">' + esc(t('app_bd_digest_empty')) + '</p>';
    }
    function draw() {
      if (!root) return;
      if (viewer) { root.innerHTML = '<div class="bd-digest">' + digest() + '</div>'; fit(); return; }
      var pages = lessonPages();
      if (S.page >= pages.length) S.page = pages.length - 1;
      if (!teacher && !S.show) { root.innerHTML = '<div class="bd-wait"><p class="t-body">' + esc(t('app_bd_wait')) + '</p></div>'; return; }
      var v = view(), page = pages[Math.min(v[0], pages.length - 1)], rv = pg(v[0]).rv;
      root.innerHTML = '<div class="bd-shell">' + toolbar(pages) + '<div class="bd-stage"><div class="bd-paper' + (canDraw() ? ' is-' + tool : '') + '" style="width:' + W + 'px"><h2 class="t-h2">' + esc(page.title) + '</h2>' +
        '<div class="bd-content" lang="en">' + page.blocks.map(function (b) { return blockHtml(b, rv); }).join('') + '</div>' +
        '<svg class="bd-ink" xmlns="http://www.w3.org/2000/svg">' + v[1].map(itemSvg).join('') + '</svg><div class="bd-notes">' + v[1].map(itemText).join('') + '</div></div></div>' + dockFor() + '</div>';
      fit();
    }
    function paper() { return root && root.querySelector('.bd-paper'); }
    /* The page is laid out 960 wide and scaled to the space it has */
    function fit() {
      if (root) Array.prototype.forEach.call(root.querySelectorAll('.bd-paper'), fitOne);
    }
    function fitOne(pp) {
      var stage = pp.parentNode, fitK = Math.min(1, stage.clientWidth / W), k = Math.min(1, fitK * (viewer ? 1 : zoom));
      var h = Math.max(MINH, pp.querySelector('.bd-content').offsetHeight + 150);
      pp.style.height = h + 'px';
      var svg = pp.querySelector('.bd-ink'); svg.setAttribute('viewBox', '0 0 ' + W + ' ' + h); svg.setAttribute('width', W); svg.setAttribute('height', h);
      pp.style.transform = 'scale(' + k + ')';
      pp.style.left = k < 1 ? '0' : Math.max(0, Math.floor((stage.clientWidth - W) / 2)) + 'px';
      stage.style.height = Math.ceil(h * k) + 'px';
      stage.classList.toggle('is-zoom', k > fitK + 0.001);
      var sz = stage.querySelector('.bd-sizer'); if (!sz) { sz = document.createElement('div'); sz.className = 'bd-sizer'; stage.appendChild(sz); }
      sz.style.width = Math.ceil(W * k) + 'px'; sz.style.height = Math.ceil(h * k) + 'px';
    }
    function redrawInk() {
      var pp = paper(); if (!pp) return;
      var items = view()[1];
      pp.querySelector('.bd-ink').innerHTML = items.map(itemSvg).join('') + (drawing && drawing.it ? itemSvg(drawing.it) : '');
      pp.querySelector('.bd-notes').innerHTML = items.map(itemText).join('');
    }
    /* The countdown, and the end of a student's time: the work goes to the teacher and the tools lock */
    function tick() {
      clearInterval(ticker);
      if (!isSolo()) return;
      ticker = setInterval(function () {
        if (!isSolo()) { clearInterval(ticker); return; }
        var el = root && root.querySelector('[data-bd-clock] span'), left = soloLeft();
        if (el) el.textContent = left > 0 ? mmss(left) : t('app_bd_time_over');
        if (privateMode() && left <= 0 && !soloLocked) { sendWork(); soloLocked = true; drawing = null; draw(); }
      }, 500);
    }
    function sendWork() { var to = teacherId(); if (!to || !isSolo()) return; sendBig({ k: 'rsolo', id: S.solo.id, it: soloIt }, to); soloSent = true; }
    function startSolo(id) { if (soloId !== id) { soloId = id; soloIt = []; soloSent = false; soloLocked = false; } }

    /* ---------- Messages ---------- */
    function send(m, to) {
      if (!frame) return;
      m.a = V;
      try { frame.sendAppMessage(m, to || '*'); } catch (e) { /* not in the call yet */ }
    }
    /* Anything bigger than one Daily message (4 KB) goes in pieces and is put back together on arrival */
    function sendBig(m, to) {
      var s = JSON.stringify(m);
      if (s.length <= PIECE) { send(m, to); return; }
      var id = rid(), n = Math.ceil(s.length / PIECE);
      for (var i = 0; i < n; i++) send({ k: 'pc', id: id, i: i, n: n, d: s.slice(i * PIECE, (i + 1) * PIECE) }, to);
    }
    function piece(m, from) {
      var key = from + ':' + m.id, b = pending[key] || (pending[key] = []);
      if (!(m.n > 0 && m.n < 400 && m.i >= 0 && m.i < m.n)) return null;
      b[m.i] = String(m.d || '');
      if (b.filter(function (x) { return x != null; }).length !== m.n) return null;
      delete pending[key];
      try { return JSON.parse(b.join('')); } catch (e) { return null; }
    }
    function sendState(to) {
      var copy = JSON.parse(JSON.stringify(S));
      delete copy.work;
      if (copy.solo) copy.solo.left = soloLeft();
      sendBig({ k: 'state', s: copy }, to);
    }
    function apply(m) {
      var p;
      switch (m.k) {
        case 'pc': return;
        case 'state':
          var ns = m.s;
          if (!ns || ns.v !== 1) return;
          if (ns.solo && ns.solo.on) { ns.solo.ends = Date.now() + (+ns.solo.left || 0); startSolo(ns.solo.id); }
          S = ns; if (o.onShow) o.onShow(S.show); tick();
          return loadCourse(S.course).then(function (c) { course = c; draw(); });
        case 'show': S.show = !!m.on; if (o.onShow) o.onShow(S.show); break;
        case 'write': S.write = { m: m.m, who: m.who || null }; if (drawing && !canDraw()) { clearInterval(segTimer); drawing = null; } break;
        case 'solo':
          if (m.on) { S.solo = { on: true, pg: +m.pg || 0, ends: Date.now() + (+m.left || 0), id: String(m.id) }; startSolo(S.solo.id); }
          else S.solo = null;
          drawing = null; tick(); break;
        case 'spot': S.spot = m.on ? { name: String(m.name || ''), pg: +m.pg || 0, it: Array.isArray(m.it) ? m.it : [] } : null; drawing = null; break;
        case 'page': S.page = +m.pg || 0; if (isSolo() || S.spot) return; break;
        case 'rv': pg(m.pg).rv = !!m.on; break;
        case 'clear': pg(m.pg).it = []; return redrawInk();
        case 'del': p = pg(m.pg); p.it = p.it.filter(function (x) { return x.id !== m.id; }); return redrawInk();
        case 'add': if (mine[m.it.id]) return; p = pg(m.pg); if (!p.it.some(function (x) { return x.id === m.it.id; })) p.it.push(m.it); return redrawInk();
        case 'seg':
          if (mine[m.id]) return;
          p = pg(m.pg);
          var it = p.it.filter(function (x) { return x.id === m.id; })[0];
          if (!it) { it = { id: m.id, t: 's', c: m.c, p: [] }; p.it.push(it); }
          it.p = it.p.concat(m.p);
          return redrawInk();
        default: return;
      }
      draw();
    }
    function onMessage(e) {
      var m = e && e.data;
      if (!m || m.a !== V || !alive) return;
      if (teacher) {
        if (m.k === 'pc') { m = piece(m, e.fromId); if (!m) return; }
        if (m.k === 'hi') sendState(e.fromId);
        else if (/^r(add|seg|del)$/.test(m.k)) request(m, e.fromId);
        else if (m.k === 'rsolo') takeWork(m, e.fromId);
        return;
      }
      /* Students accept the board only from the room owner (the teacher's token) */
      var from = people().filter(function (x) { return x.session_id === e.fromId; })[0];
      if (!from || !from.owner) return;
      if (m.k === 'pc') { m = piece(m, e.fromId); if (!m) return; }
      if (m.k !== 'state' && !course && S.course === null) { send({ k: 'hi' }); }
      apply(m);
    }
    /* A student's mark, accepted only while that student may write; then passed on to everyone */
    function cleanPts(a) { return Array.isArray(a) ? a.slice(0, 4000).map(function (n) { return Math.max(-50, Math.min(4000, Math.round(+n) || 0)); }) : []; }
    function cleanItem(x, from) {
      if (!x || !/^u[a-z0-9]+$/.test(String(x.id || '')) || !COLORS[x.c]) return null;
      if (x.t === 's') { var p = cleanPts(x.p); return p.length >= 4 ? { id: String(x.id).slice(0, 24), t: 's', c: x.c, p: p, by: from } : null; }
      if (x.t === 't') return { id: String(x.id).slice(0, 24), t: 't', c: x.c, x: Math.round(+x.x) || 0, y: Math.round(+x.y) || 0, s: String(x.s || '').slice(0, 120), by: from };
      return null;
    }
    function request(m, from) {
      if (isSolo() || !mayWrite(from) || !(m.pg >= 0 && m.pg < lessonPages().length)) return;
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
        if (p.it.some(function (y) { return y.id === id; })) return;
        it = cleanItem(m.it, from); if (!it || it.t !== 't') return;
        p.it.push(it); save(); send({ k: 'add', pg: m.pg, it: it });
      }
      if (m.pg === S.page && !viewing && !S.spot) redrawInk();
    }
    /* A student's solo work: kept for this exercise only, cleaned, and never passed on unless the teacher shows it */
    function takeWork(m, from) {
      if (!isSolo() || m.id !== S.solo.id || !Array.isArray(m.it)) return;
      var who = people().filter(function (x) { return x.session_id === from; })[0];
      if (!who || who.owner) return;
      var it = m.it.slice(0, 400).map(function (x) { return cleanItem(x, from); }).filter(Boolean);
      S.work = S.work || {}; S.work[S.solo.id] = S.work[S.solo.id] || {};
      S.work[S.solo.id][from] = { name: who.user_name || '', uid: /^[0-9a-f-]{36}$/.test(String(who.user_id || '')) ? who.user_id : null, it: it, at: Date.now() };
      dirtyWork[S.solo.id + ':' + from] = true;
      save();
      if (!drawing) draw();
    }
    /* Sends one change: the teacher to everyone, a student as a request to the teacher */
    function out(m) { if (teacher) send(m); else { var to = teacherId(); if (to) send(Object.assign({}, m, { k: 'r' + m.k }), to); } }
    function onJoined() { me = null; myId(); if (!teacher) send({ k: 'hi' }); else sendState(); }

    /* ---------- Drawing ---------- */
    function point(e) {
      var pp = paper(), r = pp.getBoundingClientRect(), k = r.width / W;
      return [Math.round((e.clientX - r.left) / k), Math.round((e.clientY - r.top) / k)];
    }
    function flushSeg() {
      if (!drawing || drawing.priv || !drawing.fresh.length) return;
      out({ k: 'seg', pg: drawing.pg, id: drawing.it.id, c: drawing.it.c, p: drawing.fresh });
      drawing.fresh = [];
    }
    function editable() { return privateMode() ? soloIt : pg(S.page).it.filter(function (it) { return teacher || mine[it.id]; }); }
    function nearest(xy) {
      var best = null, bd = 18;
      editable().forEach(function (it) {
        if (it.t === 't') { if (xy[0] >= it.x - 6 && xy[0] <= it.x + 12 * String(it.s).length && xy[1] >= it.y - 6 && xy[1] <= it.y + 36) { best = it; bd = 0; } return; }
        for (var i = 0; i < it.p.length; i += 2) { var d = Math.hypot(it.p[i] - xy[0], it.p[i + 1] - xy[1]); if (d < bd) { bd = d; best = it; } }
      });
      return best;
    }
    function remove(it) {
      if (privateMode()) { soloIt = soloIt.filter(function (x) { return x !== it; }); return; }
      var p = pg(S.page); p.it = p.it.filter(function (x) { return x !== it; });
      save(); out({ k: 'del', pg: S.page, id: it.id });
    }
    function erase(xy) { var it = nearest(xy); if (it) { remove(it); redrawInk(); } }
    function newId() { var id = teacher ? rid() : 'u' + rid(); if (!teacher && !privateMode()) mine[id] = 1; return id; }
    function down(e) {
      if (tool === 'hand' || !canDraw() || !e.target.closest('.bd-paper') || e.target.closest('.bd-input')) return;
      var xy = point(e);
      if (tool === 'text') { textAt(xy); e.preventDefault(); return; }
      if (tool === 'eraser') { erase(xy); drawing = { erase: true }; e.preventDefault(); return; }
      var priv = privateMode();
      drawing = { priv: priv, pg: priv ? S.solo.pg : S.page, it: { id: newId(), t: 's', c: tool === 'marker' ? 'lime' : color, p: xy.slice() }, fresh: xy.slice() };
      if (!priv) segTimer = setInterval(flushSeg, 120);
      try { e.target.setPointerCapture(e.pointerId); } catch (x) { /* fine */ }
      e.preventDefault();
    }
    function move(e) {
      if (!drawing) return;
      if (!canDraw()) { clearInterval(segTimer); drawing = null; redrawInk(); return; }
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
      var d = drawing; drawing = null;
      if (!d.erase && d.it.p.length >= 4 && canDraw()) {
        if (d.priv) soloIt.push(d.it);
        else { drawing = d; flushSeg(); drawing = null; pg(d.pg).it.push(d.it); save(); }
      }
      redrawInk();
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
        if (!keep || !s || !canDraw()) return;
        var it = { id: newId(), t: 't', c: color, x: xy[0], y: xy[1], s: s };
        if (privateMode()) soloIt.push(it);
        else { pg(S.page).it.push(it); save(); out({ k: 'add', pg: S.page, it: it }); }
        redrawInk();
      };
      inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') done(true); else if (e.key === 'Escape') done(false); });
      inp.addEventListener('blur', function () { done(true); });
    }
    /* Adds a page to this class's board (an empty page, a page from another lesson, the last class's words), shows it
       and sends the new list of pages to everyone */
    function addPage(v) {
      var x = null, parts = String(v || '').split(':');
      if (parts[0] === 'tpl' && TPLS.indexOf(parts[1]) > -1) x = { s: 'tpl', k: parts[1] };
      else if (parts[0] === 'lesson' && lessonOf(parts[1])) x = { s: 'lesson', l: parts[1], i: Math.max(0, +parts[2] || 0) };
      else if (parts[0] === 'words') x = { s: 'words', w: (o.words || []).filter(function (w) { return w && w.word; }).slice(0, 20).map(function (w) { return [String(w.word).slice(0, 200), String(w.definition || '').slice(0, 300)]; }) };
      if (!x || (S.extra || []).length >= 30) return;
      S.extra = (S.extra || []).concat([x]);
      S.page = lessonPages().length - 1; menu = false;
      save(); sendState(); draw();
    }
    function click(e) {
      var b = e.target.closest('[data-bd]'); if (!b) return;
      var k = b.getAttribute('data-bd'), v = b.getAttribute('data-k'), p = pg(S.page);
      if (k !== 'clear' && clearSure) clearSure = false;
      if (k === 'zoom') { zoom = zoom > 1 ? 1 : 2; if (zoom === 1 && tool === 'hand') tool = 'pen'; draw(); return; }
      if (!teacher) {
        if (k === 'sendwork' && privateMode() && !soloLocked) { sendWork(); draw(); return; }
        if (!canDraw() || ['tool', 'color', 'undo'].indexOf(k) < 0) return;
      }
      if (k === 'tool') { tool = v; draw(); return; }
      if (k === 'color') { color = v; if (tool === 'marker' || tool === 'eraser') tool = 'pen'; draw(); return; }
      if (k === 'undo') { var own = editable().filter(function (x) { return privateMode() || !x.by; }), last = own[own.length - 1]; if (last) { remove(last); redrawInk(); } return; }
      if (!teacher) return;
      if (k === 'menu') { menu = !menu; draw(); var m = root.querySelector('[data-bd-menu] .is-on'); if (m) m.focus(); return; }
      if (k === 'page' || k === 'step') { var n = k === 'page' ? +v : S.page + (+v || 0); if (n < 0 || n >= lessonPages().length) return; S.page = n; menu = false; save(); send({ k: 'page', pg: S.page }); draw(); return; }
      if (k === 'add') { addPage(v); return; }
      if (k === 'clear') { if (!clearSure) { clearSure = true; draw(); setTimeout(function () { if (clearSure) { clearSure = false; draw(); } }, 4000); return; } clearSure = false; p.it = []; save(); send({ k: 'clear', pg: S.page }); draw(); return; }
      if (k === 'reveal') { p.rv = !p.rv; save(); send({ k: 'rv', pg: S.page, on: p.rv }); draw(); return; }
      if (k === 'solo') {
        var sel = root.querySelector('[data-bd-mins]'), mins = sel ? +sel.value || 5 : 5, id = rid();
        S.solo = { on: true, pg: S.page, ends: Date.now() + mins * 60000, id: id };
        S.work = S.work || {}; S.work[id] = {};
        S.solos = (S.solos || []).concat([{ id: id, pg: S.page, at: Date.now() }]);
        viewing = null; save(); send({ k: 'solo', on: true, pg: S.page, left: mins * 60000, id: id }); tick(); draw(); return;
      }
      if (k === 'see') { viewing = v; draw(); return; }
      if (k === 'back') { viewing = null; draw(); return; }
      if (k === 'spot') { var w = workOf(viewing); if (!w) return; S.spot = { name: w.name, pg: S.solo.pg, it: w.it }; save(); sendBig({ k: 'spot', on: true, name: w.name, pg: S.solo.pg, it: w.it }); draw(); return; }
      if (k === 'spotoff') { S.spot = null; save(); send({ k: 'spot', on: false }); draw(); return; }
      if (k === 'end') { S.solo = null; S.spot = null; viewing = null; save(); persist(true); send({ k: 'spot', on: false }); send({ k: 'solo', on: false }); tick(); draw(); }
    }

    /* ---------- Setup ---------- */
    function mountIn(el) {
      root = el;
      root.addEventListener('pointerdown', down);
      root.addEventListener('pointermove', move);
      root.addEventListener('pointerup', up);
      root.addEventListener('pointercancel', up);
      root.addEventListener('click', click);
      root.addEventListener('keydown', function (e) { if (e.key === 'Escape' && menu) { menu = false; draw(); var b = root.querySelector('[data-bd="menu"]'); if (b) b.focus(); } });
      document.addEventListener('pointerdown', outside, true);
      root.addEventListener('change', function (e) {
        var sel = e.target.closest('[data-bd-who]'); if (!sel || !teacher) return;
        var v = sel.value, w = v.indexOf('one:') === 0 ? { m: 'one', who: v.slice(4) } : { m: v === 'all' ? 'all' : 'none', who: null };
        S.write = w; save(); send({ k: 'write', m: w.m, who: w.who }); draw();
      });
      window.addEventListener('resize', fit);
      tick();
      return loadCourse(S.course).then(function (c) { course = c; draw(); });
    }
    /* A board saved earlier (another device, or after the browser's copy was cleared): used only when this one is empty */
    function load(saved) {
      if (!teacher || !saved || !saved.board) return;
      var empty = !Object.keys(S.pages || {}).some(function (k) { return (S.pages[k].it || []).length; });
      if (!empty) return;
      S.pages = saved.board.pages || {}; S.solos = saved.board.solos || []; if (Array.isArray(saved.board.extra) && !(S.extra || []).length) S.extra = saved.board.extra;
      S.work = S.work || {};
      (saved.work || []).forEach(function (w) { (S.work[w.solo_id] = S.work[w.solo_id] || {})[w.user_id] = { name: w.name || '', uid: w.user_id, it: w.items || [], at: Date.parse(w.sent_at) || Date.now() }; });
      try { localStorage.setItem(key, JSON.stringify(S)); } catch (e) { /* storage blocked */ }
      draw(); if (S.show) sendState();
    }
    function setShow(on) { S.show = !!on; save(); send({ k: 'show', on: S.show }); if (on) sendState(); draw(); }
    function outside(e) { if (menu && root && !e.target.closest('[data-bd-menu], [data-bd="menu"]')) { menu = false; draw(); } }
    function destroy() {
      document.removeEventListener('pointerdown', outside, true);
      if (teacher && saveTimer) saveNow();
      alive = false; clearInterval(segTimer); clearInterval(ticker);
      if (frame) { try { frame.off('app-message', onMessage); frame.off('joined-meeting', onJoined); frame.off('participant-joined', onPeople); frame.off('participant-left', onPeople); } catch (e) { /* gone */ } }
      window.removeEventListener('resize', fit);
      root = null;
    }
    function onPeople() { if (teacher && root && !drawing) draw(); }
    if (frame) { frame.on('app-message', onMessage); frame.on('joined-meeting', onJoined); if (teacher) { frame.on('participant-joined', onPeople); frame.on('participant-left', onPeople); } }
    return { mount: mountIn, show: setShow, shown: function () { return S.show; }, destroy: destroy, hello: onJoined, fit: fit, load: load, saveNow: saveNow, state: function () { return S; } };
  }

  window.AlimunBoard = { create: create };
})();
