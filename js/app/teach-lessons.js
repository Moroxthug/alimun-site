/* Alimun teacher dashboard: Lessons (docs/LESSONS_PLAN.md, step L1). The class lessons Alimun prepares for each course:
   the order, and for each lesson the teacher's focus note, tips, a timed plan, the board pages (book blocks and
   exercises, tried here as the class will see them), activities by class size and the homework.
   Data: /data/classes/<course>.json (site/src/pages/data/classes/[course].json.js). Content is in English, for teachers.
   Routes: #/lessons (the course), #/lessons/<course>/<lesson>[/<board page>]. */
(function () {
  'use strict';
  var A = null, root = null, courses = {}, P = null, at = null;
  var COURSES = ['English-A1'];
  var SIZES = [['one', 'app_tl_size_one'], ['small', 'app_tl_size_small'], ['group', 'app_tl_size_group']];
  var KINDS = { welcome: 'app_tl_kind_welcome', book: 'app_tl_kind_book', review: 'app_tl_kind_review', conversation: 'app_tl_kind_conversation', exam: 'app_tl_kind_exam', check: 'app_tl_kind_check' };

  function t(k, v) { return A.t(k, v); }
  function esc(s) { return A.esc(s); }
  function md(s) { return window.AlimunEx ? window.AlimunEx.md(s) : esc(s); }
  function paras(s) { return String(s || '').split(/\n\s*\n/).map(function (p) { return '<p>' + md(p.trim()) + '</p>'; }).join(''); }
  function loadCourse(id) {
    if (courses[id]) return Promise.resolve(courses[id]);
    return fetch('/data/classes/' + encodeURIComponent(id) + '.json').then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (c) { courses[id] = c; return c; });
  }
  function loading() { return '<div class="rd-loading"><div class="loader" style="--w:72px" role="img" aria-label="' + esc(t('app_tl_loading')) + '">' + A.loaderInner() + '</div></div>'; }
  function back(href, label) { return '<a class="rd-back" href="' + href + '">' + A.icon('back') + '<span>' + esc(label) + '</span></a>'; }

  /* ---------- The course ---------- */
  function unitOf(l) { return String(l.book || '').split(/[\s:]/)[0]; }
  function courseView(c) {
    var html = '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_tl_title')) + '</h1><p class="t-lead">' + esc(t('app_tl_lead')) + '</p></div></div><div class="grid rise">';
    var groups = [], cur = null;
    c.lessons.forEach(function (l) {
      var u = l.kind === 'book' || l.kind === 'review' ? unitOf(l) : (cur ? cur.u : unitOf(l));
      if (!cur || cur.u !== u) { cur = { u: u, list: [] }; groups.push(cur); }
      cur.list.push(l);
    });
    groups.forEach(function (g, gi) {
      html += '<section class="card span-12" style="--i:' + gi + '"><h2 class="t-h2">' + esc(t('app_tl_unit', { n: g.u.replace(/^u/, '') })) + '</h2><div class="tt-week">' +
        g.list.map(function (l) {
          var href = '#/lessons/' + esc(c.id) + '/' + esc(l.id);
          return l.planned ? '<div class="tt-row tt-row--wide"><span><b>' + esc(l.title) + '</b><small>' + esc(t('app_tl_planned')) + '</small></span></div>'
            : '<a class="tt-row tt-row--wide" href="' + href + '"><span><b>' + esc(l.title) + '</b><small>' + esc(t(KINDS[l.kind] || 'app_tl_kind_book')) + '</small></span></a>';
        }).join('') + '</div></section>';
    });
    return html + '</div>';
  }

  /* ---------- One lesson ---------- */
  function blockHtml(b, i) {
    switch (b.t) {
      case 'text': return '<div class="rd-text">' + paras(b.md) + '</div>';
      case 'tip': return '<aside class="rd-tip"><div class="rd-tip__art">' + A.Cast.drawing(b.art || 'owl') + '</div><div class="bub say bub--inline rd-tip__bub">' + md(b.md) + '</div></aside>';
      case 'examples': return '<div class="rd-examples">' + b.items.map(function (x) { return '<div class="rd-ex"><p class="rd-ex__s" lang="en">' + md(x.s) + '</p>' + (x.n ? '<p class="t-small">' + md(x.n) + '</p>' : '') + '</div>'; }).join('') + '</div>';
      case 'table':
        return '<figure class="rd-table">' + (b.caption ? '<div class="rd-table__top"><figcaption>' + md(b.caption) + '</figcaption></div>' : '') + '<div class="rd-table__scroll"><table><thead><tr>' +
          b.head.map(function (h) { return '<th scope="col">' + md(h) + '</th>'; }).join('') + '</tr></thead><tbody>' +
          b.rows.map(function (r) { return '<tr>' + r.map(function (c, k) { return k === 0 ? '<th scope="row">' + md(c) + '</th>' : '<td>' + md(c) + '</td>'; }).join('') + '</tr>'; }).join('') +
          '</tbody></table></div></figure>';
      case 'dialogue':
        var who = [];
        b.lines.forEach(function (l) { if (who.indexOf(l.who) === -1) who.push(l.who); });
        return '<figure class="rd-dialogue">' + (b.title ? '<figcaption>' + md(b.title) + '</figcaption>' : '') + '<div class="chat" lang="en">' + b.lines.map(function (l) {
          return '<div class="chat__line chat__line--' + (who.indexOf(l.who) % 2) + '"><p><b>' + esc(l.who) + '</b><span>' + md(l.s) + '</span></p></div>';
        }).join('') + '</div></figure>';
      case 'reading': return '<section class="rd-reading" lang="en">' + (b.title ? '<h2 class="t-h2">' + esc(b.title) + '</h2>' : '') + paras(b.md) + '</section>';
      case 'ex': return P ? P.html(i) : '';
      default: return '';
    }
  }
  function boardHtml(c, l, pi) {
    var page = l.board[pi];
    var blocks = page.blocks;
    P = window.AlimunEx ? window.AlimunEx.create({ A: A, blocks: blocks, level: c.level, xa: '', ta: ' lang="en" dir="ltr"', root: function () { return root; } }) : null;
    var tabs = '<div class="btn-row tl-tabs" role="tablist" aria-label="' + esc(t('app_tl_board')) + '">' + l.board.map(function (p, k) {
      return '<a class="btn btn--' + (k === pi ? 'primary' : 'quiet') + ' btn--sm" role="tab" aria-selected="' + (k === pi) + '" href="#/lessons/' + esc(c.id) + '/' + esc(l.id) + '/' + k + '">' + esc(p.title) + '</a>';
    }).join('') + '</div>';
    return '<section class="span-12" style="--i:3"><h2 class="t-h2">' + esc(t('app_tl_board')) + '</h2><p class="t-body">' + esc(t('app_tl_board_p')) + '</p>' + tabs +
      '<article class="paper tm-try tl-board"><h3 class="t-h2">' + esc(page.title) + '</h3>' + blocks.map(function (b, i) { return '<div class="rd-block">' + blockHtml(b, i) + '</div>'; }).join('') + '</article></section>';
  }
  function lessonView(c, l, pi) {
    var html = back('#/lessons', t('app_tl_title')) +
      '<div class="view__head"><div><h1 class="t-h1">' + esc(l.title) + '</h1><p class="t-lead">' + esc(t(KINDS[l.kind] || 'app_tl_kind_book') + (l.book && l.kind === 'book' ? '. ' + t('app_tl_builds', { unit: l.book.split(':')[0].slice(1), lesson: l.book.split(':')[1].slice(1) }) : '') + '.') + '</p></div></div><div class="grid rise">';
    html += '<section class="card card--lime span-7" style="--i:0"><h2 class="t-h2">' + esc(t('app_tl_focus')) + '</h2><div class="rd-text">' + paras(l.focus) + '</div></section>';
    html += '<section class="card span-5" style="--i:1"><h2 class="t-h2">' + esc(t('app_tl_tips')) + '</h2><div class="rd-text">' + (l.tips || []).map(function (x) { return '<p>' + md(x) + '</p>'; }).join('') + '</div></section>';
    html += '<section class="card span-12" style="--i:2"><h2 class="t-h2">' + esc(t('app_tl_plan')) + '</h2><div class="tt-week">' + (l.plan || []).map(function (s) {
      return '<div class="tt-row tt-row--wide"><span class="tt-row__time">' + esc(t('app_tl_min', { n: s.min })) + '</span><span><b>' + esc(s.title) + '</b><small>' + md(s.md) + '</small></span></div>';
    }).join('') + '</div></section>';
    html += boardHtml(c, l, Math.min(Math.max(pi, 0), l.board.length - 1));
    html += SIZES.map(function (s, i) {
      var a = (l.activities || {})[s[0]];
      return a ? '<section class="card span-4" style="--i:' + (4 + i) + '"><p class="t-small">' + esc(t(s[1])) + '</p><h2 class="t-h3">' + esc(a.title) + '</h2><div class="rd-text">' + paras(a.md) + '</div></section>' : '';
    }).join('');
    if (l.homework) html += '<section class="card card--bone span-12" style="--i:7"><h2 class="t-h2">' + esc(t('app_tl_homework')) + '</h2><div class="rd-text">' + paras(l.homework.md) + '</div></section>';
    return html + '</div>';
  }

  /* ---------- Mount ---------- */
  function mount(view, parts, helpers) {
    A = helpers; root = view; P = null; bind();
    view.innerHTML = loading();
    var id = COURSES.indexOf(parts[0]) > -1 ? parts[0] : COURSES[0];
    var my = at = {};
    return loadCourse(id).then(function (c) {
      if (my !== at) return { stale: true };
      var l = parts[1] && c.lessons.filter(function (x) { return x.id === parts[1] && !x.planned; })[0];
      view.innerHTML = l ? lessonView(c, l, +parts[2] || 0) : courseView(c);
      return { title: l ? l.title : t('app_tl_title') };
    }, function () {
      if (my !== at) return { stale: true };
      view.innerHTML = '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_tl_title')) + '</h1></div></div><div class="card"><p class="t-body">' + esc(t('app_tl_error')) + '</p></div>';
      return { title: t('app_tl_title') };
    });
  }
  function reset() { P = null; at = null; }
  function bind() {
    if (root.__tlessons) return;
    root.__tlessons = true;
    root.addEventListener('input', function (e) { if (P && e.target.closest('.tl-board')) P.input(e.target); });
    root.addEventListener('change', function (e) { if (P && e.target.closest('.tl-board')) P.change(e.target); });
    root.addEventListener('keydown', function (e) { if (P && e.target.closest('.tl-board')) P.keydown(e); });
    root.addEventListener('pointerdown', function (e) { if (P && e.target.closest('.tl-board')) window.AlimunEx.pointerDown(P, e); });
    root.addEventListener('click', function (e) {
      if (!P || !e.target.closest('.tl-board')) return;
      if (window.AlimunEx.swallowClick()) { e.preventDefault(); return; }
      var a = e.target.closest('[data-act]');
      if (a && !a.disabled) P.act(a.getAttribute('data-act'), a);
    });
  }

  /* For the class pages (js/app/teach-classes.js): the course of a class (language and level), or null when it has no
     prepared lessons; the lesson for a lesson number; its link */
  function courseFor(language, level) {
    var id = language + '-' + level;
    return COURSES.indexOf(id) > -1 ? loadCourse(id).catch(function () { return null; }) : Promise.resolve(null);
  }
  function lessonOf(c, no) { return c && no ? c.lessons[no - 1] || null : null; }
  function hrefOf(c, l) { return '#/lessons/' + encodeURIComponent(c.id) + '/' + encodeURIComponent(l.id); }
  window.AlimunTeachLessons = { mount: mount, reset: reset, courseFor: courseFor, lessonOf: lessonOf, hrefOf: hrefOf, kindLabel: function (k) { return KINDS[k] || 'app_tl_kind_book'; } };
})();
