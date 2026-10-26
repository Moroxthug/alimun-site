/* Alimun app: the exercise engine (docs/DASHBOARD_PLAN.md, step 5; exercise format in docs/BOOKS.md).
   One engine for every place a student answers exercises: course book lessons and unit tests (js/app/reader.js)
   and the Practice screen (js/app/practice.js). A session holds a list of blocks; exercise blocks ({ t: 'ex', kind })
   get state and are drawn by the kind's entry in KINDS.
   Lesson mode: each answer is checked straight away, with the book character's reaction and the `why`; wrong answers
   can be tried again and "Show the answer" appears after two wrong tries. Test mode (test: true): nothing is checked
   until submit(), then every block shows the right answers.
   Item kinds (choice, odd, picture, tf, select, gap, wordform, transform, conjugate, crossword, order, build, spot, colloc, fix,
   the listening kinds hear, heargap and dictation, which play course audio, and speak, which records the student)
   are lists of items, each right or wrong on its own. Block kinds (match, bank, label, sort, memory, search) keep one state
   for the whole block. Interface text comes from js/translations.js (app_book_* and app_ex_* keys). */
(function () {
  'use strict';
  var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var LESSON_ONLY = { memory: true, search: true, speak: true };

  /* ---------- Helpers ---------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; });
  }
  /* Book text: escaped, then **bold** and *italic* */
  function md(s) {
    return esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\*(.+?)\*/g, '<i>$1</i>');
  }
  function shuffle(n, avoidIdentity, rnd) {
    var a = [], i, j, x, r = rnd || Math.random;
    for (i = 0; i < n; i++) a.push(i);
    for (var tries = 0; tries < 8; tries++) {
      for (i = n - 1; i > 0; i--) { j = Math.floor(r() * (i + 1)); x = a[i]; a[i] = a[j]; a[j] = x; }
      if (!avoidIdentity || n < 2 || a.some(function (v, k) { return v !== k; })) break;
    }
    return a;
  }
  /* Case, spaces, curly or straight apostrophes and final punctuation are ignored */
  function norm(s) {
    return String(s || '').replace(/[‘’ʼ`´]/g, "'").replace(/\s+/g, ' ').trim().replace(/[.!?]+$/, '').toLocaleLowerCase();
  }
  function accepts(list, v) { v = norm(v); return list.some(function (a) { return norm(a) === v; }); }
  /* A small seeded random, so a generated grid is the same on every visit */
  function seeded(str) {
    var h = 2166136261;
    for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return function () { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 100000) / 100000; };
  }
  /* "I [went] there" -> tokens; words in brackets are targets, numbered in order */
  function spotTokens(s) {
    var out = [], re = /\[([^\]]+)\]|([^\s\[\]]+)|(\s+)/g, m, k = 0;
    while ((m = re.exec(s))) {
      if (m[1]) out.push({ text: m[1], target: k++ });
      else if (m[2]) out.push({ text: m[2], target: -1, word: /[\p{L}\p{N}]/u.test(m[2]) });
      else out.push({ space: true });
    }
    return out;
  }
  function upper(s) { return Array.from(String(s)).map(function (c) { return c === 'ß' ? c : c.toLocaleUpperCase(); }).join(''); }
  function letters(s) { return Array.from(upper(String(s).replace(/[\s'’\-]/g, ''))); }

  /* Some kinds are written in a short form and turned into items here */
  function normalize(b) {
    if (b.t !== 'ex') return b;
    if (b.kind === 'conjugate') {
      return Object.assign({}, b, { items: b.rows.map(function (r) { return { q: r[0], a: String(r[1]).split('|'), why: r[2] || '' }; }) });
    }
    if (b.kind === 'crossword') {
      return Object.assign({}, b, { items: b.words.map(function (w) { return { q: w.clue, a: [w.a], why: w.why || '' }; }), grid: crossGrid(b.words) });
    }
    if (b.kind === 'search') return Object.assign({}, b, { grid: searchGrid(b.words) });
    return b;
  }

  /* ---------- Sessions ---------- */
  /* opts: { A (shell helpers), blocks, test, xa / ta (lang and dir attributes for explanations / text being learned),
     root(): the element holding the blocks, onAnswer(bi, ok) after each answer in a lesson (ok true, false or null),
     onChange() after any change in a test, onItem({ bi, i, ok, kind }) once per item answered (first try counts) } */
  function create(o) {
    var S = {
      A: o.A, test: !!o.test, result: null, xa: o.xa || '', ta: o.ta || '', root: o.root,
      onAnswer: o.onAnswer || function () {}, onChange: o.onChange || function () {}, onItem: o.onItem || function () {}
    };
    S.transcribe = o.transcribe || null;   /* (blob) => Promise of text, or rejected with { note: <text key> } */
    S.blocks = o.blocks.map(normalize);
    S.state = S.blocks.map(function (b) { return b.t === 'ex' ? prepare(S, b) : null; });
    S.html = function (bi) { return exHtml(S, bi); };
    S.done = function (bi) { var b = S.blocks[bi]; return b.t !== 'ex' || blockDone(b, S.state[bi]); };
    S.allDone = function () { return S.blocks.every(function (b, i) { return S.done(i); }); };
    S.ready = function (bi) { var b = S.blocks[bi]; return b.t !== 'ex' || answered(b, S.state[bi]); };
    S.allReady = function () { return S.blocks.every(function (b, i) { return b.t !== 'ex' || answered(b, S.state[i]); }); };
    S.firstTally = function () {
      var right = 0, total = 0;
      S.blocks.forEach(function (b, i) { if (b.t === 'ex') { var f = firstTally(b, S.state[i]); right += f.right; total += f.total; } });
      return { right: right, total: total };
    };
    S.submit = function () { return submit(S); };
    /* After submit(): every item right or wrong, [{ bi, i, ok }] (i: the item, or the pair for matching) */
    S.results = function () {
      var out = [];
      S.blocks.forEach(function (b, bi) {
        if (b.t !== 'ex' || !K[b.kind]) return;
        var s = S.state[bi];
        if (b.kind === 'match') b.pairs.forEach(function (p, l) { out.push({ bi: bi, i: l, ok: matchRight(b, l, s.pairs[l]) }); });
        else if (b.kind === 'bank' || b.kind === 'label') b.items.forEach(function (it, i) { out.push({ bi: bi, i: i, ok: bankRight(s, it, s.items[i]) }); });
        else if (b.kind === 'sort') b.items.forEach(function (it, i) { out.push({ bi: bi, i: i, ok: s.items[i].picked === it.g }); });
        else if (b.kind === 'cloze') b.items.forEach(function (it, i) { out.push({ bi: bi, i: i, ok: clozeRight(b, it, s.items[i]) }); });
        else if (!K[b.kind].block) b.items.forEach(function (it, i) { out.push({ bi: bi, i: i, ok: isRight(b, it, s.items[i]) }); });
      });
      return out;
    };
    S.act = function (act, el) { return onAct(S, act, el); };
    S.input = function (el) { return onInput(S, el); };
    S.change = function (el) { return onChange(S, el); };
    S.keydown = function (e) { return onKey(S, e); };
    S.rerender = function (bi) { rerender(S, bi); };
    S.drawLines = function (scope) { drawLines(S, scope); };
    S.after = function (scope) { drawLines(S, scope); };
    current = S;
    return S;
  }
  var current = null;

  function t(S, k, v) { return S.A.t(k, v); }
  var PRAISE = ['app_book_right_1', 'app_book_right_2', 'app_book_right_3'];
  function praise(S, b, i) { return t(S, PRAISE[(b + i) % 3]); }
  function feedback(S, ok, text, why, answer) {
    return '<div class="fb ' + (ok ? 'fb--ok' : 'fb--no') + '">' + S.A.Cast.book(ok ? 'happy' : 'think') +
      '<p' + S.xa + '><b>' + esc(text) + '</b>' + (answer ? ' <b' + S.ta + '>' + md(answer) + '</b>' : '') + (why ? ' <span>' + md(why) + '</span>' : '') + '</p></div>';
  }
  function withGap(S, q, fill) {
    var parts = md(q).split('___');
    if (parts.length < 2) return md(q);
    return parts[0] + '<span class="gap' + (fill ? ' is-filled' : '') + '">' + (fill ? md(fill) : '<span class="sr">' + esc(t(S, 'app_book_gap')) + '</span>') + '</span>' + parts.slice(1).join('___');
  }

  /* ---------- Kinds ---------- */
  function itemState() { return { done: false, first: null, tries: 0, wrong: {}, picked: null, value: '', shown: false, flash: false }; }

  function choiceOpts(S, bi, i, b, it, x, test, review, locked, opts, label, cls, inTarget) {
    var a = ' data-b="' + bi + '" data-i="' + i + '"';
    var html = '<div class="opts' + cls + '" role="group" aria-label="' + esc(t(S, 'app_book_options')) + '">';
    opts.forEach(function (o, k) {
      var right = K[b.kind].isOpt(it, o);
      var c = '';
      if (review) c = right ? ' is-right' : x.picked === o ? ' is-wrong' : '';
      else if (test) c = x.picked === o ? ' is-picked' : '';
      else if (x.done) c = right ? ' is-right' : '';
      else if (x.wrong[o]) c = ' is-wrong';
      var dis = locked || (!test && x.wrong[o]);
      html += '<button class="opt' + c + '" type="button" data-act="pick"' + a + ' data-o="' + o + '" style="--k:' + k + '"' + (dis ? ' disabled' : '') +
        (test && !review ? ' aria-pressed="' + (x.picked === o) + '"' : '') + (inTarget ? S.ta : '') + '>' + label(o) + '</button>';
    });
    return html + '</div>';
  }
  function showLink(S, a) { return '<button class="linkish" type="button" data-act="show"' + a + '>' + esc(t(S, 'app_book_show')) + '</button>'; }
  function typedInput(S, a, it, x, locked, wide) {
    var size = Math.max.apply(null, it.a.map(function (s) { return s.length; })) + 2;
    return '<input class="gap-in' + (wide ? ' gap-in--wide' : '') + '" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="done"' + a +
      (wide ? '' : ' size="' + size + '"') + ' value="' + esc(x.done && x.shown ? it.a[0] : x.value) + '" aria-label="' + esc(t(S, 'app_book_your_answer')) + '"' + (locked ? ' readonly' : '') + S.ta + '>';
  }
  /* ---------- Listening (course audio, step 5) ---------- */
  var player = null, playingBtn = null;
  function stopAudio() {
    if (player) { player.pause(); player.onended = null; }
    if (playingBtn) playingBtn.classList.remove('is-playing');
    playingBtn = null;
  }
  function hear(btn) {
    var again = playingBtn === btn;
    stopAudio();
    if (again) return;
    player = player || new Audio();
    player.src = btn.getAttribute('data-src');
    player.playbackRate = +btn.getAttribute('data-rate') || 1;
    playingBtn = btn; btn.classList.add('is-playing');
    player.onended = function () { btn.classList.remove('is-playing'); if (playingBtn === btn) playingBtn = null; };
    player.play().catch(stopAudio);
  }
  function hearHtml(S, src) {
    return '<div class="hear-row"><button class="btn btn--primary btn--sm hear" type="button" data-act="hear" data-src="' + esc(src) + '">' + S.A.icon('play') + '<span>' + esc(t(S, 'app_ex_hear')) + '</span></button>' +
      '<button class="btn btn--ghost btn--sm hear" type="button" data-act="hear" data-rate="0.75" data-src="' + esc(src) + '">' + esc(t(S, 'app_ex_slower')) + '</button></div>';
  }
  /* Dictation: words compared without punctuation or capitals */
  function words2(s) { return norm(s).replace(/[^\p{L}\p{N}' ]+/gu, ' ').split(/\s+/).filter(Boolean); }
  /* The student's words, the ones not in the sentence (in order) struck through */
  function dictDiff(want, got) {
    /* Compared without punctuation or capitals; shown as the student typed them */
    var shown = String(got || '').trim().split(/\s+/).filter(function (w) { return words2(w).length; });
    var a = words2(want), b = shown.map(function (w) { return words2(w).join(' '); }), m = [], i, j;
    for (i = 0; i <= a.length; i++) { m.push([]); for (j = 0; j <= b.length; j++) m[i].push(0); }
    for (i = a.length - 1; i >= 0; i--) for (j = b.length - 1; j >= 0; j--) m[i][j] = a[i] === b[j] ? m[i + 1][j + 1] + 1 : Math.max(m[i + 1][j], m[i][j + 1]);
    var out = [], missing = 0;
    i = 0; j = 0;
    while (j < b.length) {
      if (i < a.length && a[i] === b[j]) { out.push(esc(shown[j])); i++; j++; }
      else if (i < a.length && m[i + 1][j] >= m[i][j + 1]) { i++; missing++; }
      else { out.push('<s>' + esc(shown[j]) + '</s>'); j++; }
    }
    missing += a.length - i;
    return { html: out.join(' '), missing: missing };
  }

  /* ---------- Speaking: the student says the sentence; the host turns the recording into text (opts.transcribe) ---------- */
  var rec = null;   /* { S, bi, i, mr, stream, chunks, timer } while recording */
  function recMime() {
    var list = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg;codecs=opus'];
    for (var k = 0; k < list.length; k++) if (window.MediaRecorder && MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(list[k])) return list[k];
    return '';
  }
  function stopRec() {
    if (!rec) return;
    clearTimeout(rec.timer); clearInterval(rec.tick);
    if (rec.mr && rec.mr.state !== 'inactive') rec.mr.stop();
  }
  /* Words of the sentence heard in the transcript, in order */
  function spokenMatch(want, got) {
    var a = words2(want), b = words2(got), m = [], i, j;
    for (i = 0; i <= a.length; i++) { m.push([]); for (j = 0; j <= b.length; j++) m[i].push(0); }
    for (i = a.length - 1; i >= 0; i--) for (j = b.length - 1; j >= 0; j--) m[i][j] = a[i] === b[j] ? m[i + 1][j + 1] + 1 : Math.max(m[i + 1][j], m[i][j + 1]);
    var hit = [], n = 0;
    i = 0; j = 0;
    while (i < a.length && j < b.length) {
      if (a[i] === b[j]) { hit[i] = true; n++; i++; j++; }
      else if (m[i + 1][j] >= m[i][j + 1]) i++; else j++;
    }
    return { hit: hit, n: n, total: a.length };
  }
  function spokenRight(want, got) {
    var r = spokenMatch(want, got);
    return r.total ? (r.total <= 4 ? r.n === r.total : r.n / r.total >= 0.8) : false;
  }

  var typed = {
    prep: function () { return {}; },
    right: function (b, it, x) { return accepts(it.a, x.value); },
    answer: function (b, it) { return it.a[0]; },
    ready: function (b, it, x) { return norm(x.value) !== ''; },
    check: true
  };
  function words(it) { return it.a.split(/\s+/); }

  var K = {
    choice: {
      prep: function (it) { return { order: shuffle(it.o.length, true) }; },
      isOpt: function (it, o) { return o === 0; },
      right: function (b, it, x) { return x.picked === 0; },
      answer: function (b, it) { return it.o[0]; },
      ready: function (b, it, x) { return x.picked != null; },
      html: function (S, bi, i, b, it, x, test, review, locked) {
        var fill = (x.done && !test) || (review && x.picked === 0) ? it.o[0] : '';
        return (it.q ? '<p class="ex-q"' + S.ta + '>' + withGap(S, it.q, fill) + '</p>' : '') +
          choiceOpts(S, bi, i, b, it, x, test, review, locked, x.order, function (o) { return md(it.o[o]); }, it.q ? '' : ' opts--stack', true);
      }
    },
    /* Odd one out: the first option is the odd one */
    odd: {
      prep: function (it) { return { order: shuffle(it.o.length, true) }; },
      isOpt: function (it, o) { return o === 0; },
      right: function (b, it, x) { return x.picked === 0; },
      answer: function (b, it) { return it.o[0]; },
      ready: function (b, it, x) { return x.picked != null; },
      html: function (S, bi, i, b, it, x, test, review, locked) {
        return choiceOpts(S, bi, i, b, it, x, test, review, locked, x.order, function (o) { return md(it.o[o]); }, ' opts--odd', true);
      }
    },
    /* What is it? A drawing from the cast and words to choose from: `items: [{ pic: 'apple', o: [right, wrong, wrong], why }]` */
    picture: {
      prep: function (it) { return { order: shuffle(it.o.length, true) }; },
      isOpt: function (it, o) { return o === 0; },
      right: function (b, it, x) { return x.picked === 0; },
      answer: function (b, it) { return it.o[0]; },
      ready: function (b, it, x) { return x.picked != null; },
      html: function (S, bi, i, b, it, x, test, review, locked) {
        return '<div class="pic"><div class="pic__art">' + S.A.Cast.object(it.pic) + '</div>' +
          choiceOpts(S, bi, i, b, it, x, test, review, locked, x.order, function (o) { return md(it.o[o]); }, ' opts--stack', true) + '</div>';
      }
    },
    tf: {
      prep: function () { return {}; },
      isOpt: function (it, o) { return o === it.a; },
      right: function (b, it, x) { return x.picked === it.a; },
      answer: function (b, it, x, S) { return tfLabel(S, it.a); },
      ready: function (b, it, x) { return x.picked != null; },
      html: function (S, bi, i, b, it, x, test, review, locked) {
        return (it.q ? '<p class="ex-q"' + S.ta + '>' + md(it.q) + '</p>' : '') +
          choiceOpts(S, bi, i, b, it, x, test, review, locked, b.ng ? ['t', 'f', 'ng'] : ['t', 'f'], function (o) { return esc(tfLabel(S, o)); }, ' opts--tf' + (it.q ? '' : ' opts--stack'), false);
      }
    },
    /* A drop-down in the gap; the first option is right */
    select: {
      prep: function (it) { return { order: shuffle(it.o.length, true) }; },
      right: function (b, it, x) { return x.picked === 0; },
      answer: function (b, it) { return it.o[0]; },
      ready: function (b, it, x) { return x.picked != null; },
      html: function (S, bi, i, b, it, x, test, review, locked) {
        var a = ' data-b="' + bi + '" data-i="' + i + '"';
        var cur = x.done && x.shown ? 0 : x.picked;
        var sel = '<span class="sel-wrap"><select class="gap-sel"' + a + (locked ? ' disabled' : '') + ' aria-label="' + esc(t(S, 'app_book_your_answer')) + '">' +
          '<option value=""' + (cur == null ? ' selected' : '') + '>…</option>' +
          x.order.map(function (o) { return '<option value="' + o + '"' + (cur === o ? ' selected' : '') + (!test && x.wrong[o] ? ' disabled' : '') + '>' + esc(it.o[o]) + '</option>'; }).join('') +
          '</select></span>';
        var parts = md(it.q).split('___');
        return '<p class="ex-q"' + S.ta + '>' + parts[0] + sel + parts.slice(1).join('___') + '</p>' +
          (!test && !x.done && x.tries >= 2 ? showLink(S, a) : '');
      }
    },
    gap: Object.assign({}, typed, {
      html: function (S, bi, i, b, it, x, test, review, locked) {
        var a = ' data-b="' + bi + '" data-i="' + i + '"';
        var parts = md(it.q).split('___');
        return '<p class="ex-q"' + S.ta + '>' + parts[0] + typedInput(S, a, it, x, locked) + parts.slice(1).join('___') + '</p>' +
          (!test && !x.done && x.tries >= 2 ? showLink(S, a) : '');
      }
    }),
    /* Word formation: the word to change is shown beside the sentence, in capitals */
    wordform: Object.assign({}, typed, {
      html: function (S, bi, i, b, it, x, test, review, locked) {
        var a = ' data-b="' + bi + '" data-i="' + i + '"';
        var parts = md(it.q).split('___');
        return '<div class="wf"><p class="ex-q"' + S.ta + '>' + parts[0] + typedInput(S, a, it, x, locked) + parts.slice(1).join('___') + '</p>' +
          '<span class="wf__base"' + S.ta + '>' + esc(upper(it.base)) + '</span></div>' +
          (!test && !x.done && x.tries >= 2 ? showLink(S, a) : '');
      }
    }),
    /* Listen and choose the sentence you heard: `items: [{ src, o: [heard, other, other], why }]` */
    hear: {
      prep: function (it) { return { order: shuffle(it.o.length, true) }; },
      isOpt: function (it, o) { return o === 0; },
      right: function (b, it, x) { return x.picked === 0; },
      answer: function (b, it) { return it.o[0]; },
      ready: function (b, it, x) { return x.picked != null; },
      hint: 'app_ex_hear_hint',
      html: function (S, bi, i, b, it, x, test, review, locked) {
        return hearHtml(S, it.src) + choiceOpts(S, bi, i, b, it, x, test, review, locked, x.order, function (o) { return md(it.o[o]); }, ' opts--stack', true);
      }
    },
    /* Listen and write the missing word: `items: [{ src, q: 'with one ___', a: [word], why }]` */
    heargap: Object.assign({}, typed, {
      hint: 'app_ex_heargap_hint',
      html: function (S, bi, i, b, it, x, test, review, locked) {
        var a = ' data-b="' + bi + '" data-i="' + i + '"';
        var parts = md(it.q).split('___');
        return hearHtml(S, it.src) + '<p class="ex-q"' + S.ta + '>' + parts[0] + typedInput(S, a, it, x, locked) + parts.slice(1).join('___') + '</p>' +
          (!test && !x.done && x.tries >= 2 ? showLink(S, a) : '');
      }
    }),
    /* Dictation: listen and write the whole sentence; punctuation and capitals do not count. `items: [{ src, a: [sentence], why }]` */
    dictation: Object.assign({}, typed, {
      hint: 'app_ex_dict_hint',
      right: function (b, it, x) { var v = words2(x.value).join(' '); return it.a.some(function (a) { return words2(a).join(' ') === v; }); },
      wrong: function (S, b, it, x) {
        var d = dictDiff(it.a[0], x.value);
        return '<p class="dict-diff"' + S.ta + '>' + d.html + '</p><span' + S.xa + '>' + esc(d.missing ? t(S, 'app_ex_dict_missing') : t(S, 'app_ex_dict_wrong')) + '</span>';
      },
      html: function (S, bi, i, b, it, x, test, review, locked) {
        var a = ' data-b="' + bi + '" data-i="' + i + '"';
        return hearHtml(S, it.src) + typedInput(S, a, it, x, locked, true) + (!test && !x.done && x.tries >= 2 ? showLink(S, a) : '');
      }
    }),
    /* Speaking: listen to the tutor (when the sentence has audio), then say it. `tutor` on the block,
       `items: [{ src?, a: sentence }]`. Lessons and practice only. */
    speak: {
      prep: function () { return { heard: '', state: '' }; },
      right: function (b, it, x) { return spokenRight(it.a, x.heard); },
      answer: function (b, it) { return it.a; },
      ready: function (b, it, x) { return !!x.heard; },
      hint: 'app_ex_speak_hint',
      top: function (S, b) { return '<div class="speak-tutor tutor-art" data-mouth="rest" data-tutor-of="' + esc(b.tutor || '') + '">' + (S.A.Cast.tutor ? S.A.Cast.tutor(b.tutor || 'lena') : '') + '</div>'; },
      html: function (S, bi, i, b, it, x, test, review, locked) {
        var a = ' data-b="' + bi + '" data-i="' + i + '"';
        var m = x.heard ? spokenMatch(it.a, x.heard) : null;
        var words = String(it.a).split(/\s+/), k = 0;
        var said = words.map(function (w) {
          var core = words2(w).length;
          var cls = m && core ? (m.hit[k] ? ' is-ok' : ' is-miss') : '';
          if (core) k += core;
          return '<span class="sw' + cls + '">' + esc(w) + '</span>';
        }).join(' ');
        var recording = rec && rec.S === S && rec.bi === bi && rec.i === i;
        var html = '<p class="speak-s"' + S.ta + '>' + said + '</p>';
        if (!locked) {
          html += '<div class="hear-row">' + (it.src ? '<button class="btn btn--ghost btn--sm hear" type="button" data-act="speakhear"' + a + ' data-src="' + esc(it.src) + '">' + S.A.icon('play') + '<span>' + esc(t(S, 'app_ex_hear')) + '</span></button>' : '') +
            '<button class="btn btn--primary btn--sm rec' + (recording ? ' is-rec' : '') + '" type="button" data-act="rec"' + a + (x.state === 'wait' ? ' disabled' : '') + '><i aria-hidden="true"></i><span>' +
            esc(t(S, recording ? 'app_ex_rec_stop' : x.state === 'wait' ? 'app_ex_rec_wait' : 'app_ex_rec')) + '</span></button></div>';
        }
        if (x.heard) html += '<p class="t-small speak-heard"' + S.xa + '>' + esc(t(S, 'app_ex_speak_heard')) + ' <q' + S.ta + '>' + esc(x.heard) + '</q></p>';
        if (x.note) html += '<p class="t-small speak-note"' + S.xa + '>' + esc(t(S, x.note)) + '</p>';
        /* Skip after two tries, or at once when recording cannot work here (signed out, no plan, no microphone, daily limit) */
        if (!x.done && (x.tries >= 2 || /signin|plan|mic|limit/.test(x.note || ''))) html += '<button class="linkish" type="button" data-act="show"' + a + '>' + esc(t(S, 'app_ex_skip')) + '</button>';
        return html;
      }
    },
    /* Rewrite the sentence; `cue` is the word to use or the start of the new sentence */
    transform: Object.assign({}, typed, {
      /* The answer may be written with or without the words given at the start */
      right: function (b, it, x) { return accepts(it.a, x.value) || (!!it.cue && !it.gap && accepts(it.a, it.cue + ' ' + x.value)); },
      html: function (S, bi, i, b, it, x, test, review, locked) {
        var a = ' data-b="' + bi + '" data-i="' + i + '"';
        /* Key word transformation (tests): the original, the key word, then the second sentence with a gap for the answer */
        if (it.gap) {
          var gp = md(it.gap).split('___');
          return '<p class="ex-q tf-src"' + S.ta + '>' + md(it.q) + '</p><p class="kwt__key"' + S.ta + '>' + esc(upper(it.cue || '')) + '</p>' +
            '<p class="ex-q"' + S.ta + '>' + gp[0] + typedInput(S, a, it, x, locked) + gp.slice(1).join('___') + '</p>';
        }
        return '<p class="ex-q tf-src"' + S.ta + '>' + md(it.q) + '</p>' +
          (it.cue ? '<p class="tf-cue"' + S.ta + '>' + S.A.icon('arrow') + '<span>' + md(it.cue) + '</span></p>' : '') +
          typedInput(S, a, it, x, locked, true) +
          (!test && !x.done && x.tries >= 2 ? showLink(S, a) : '');
      }
    }),
    /* A verb table: `rows: [[pronoun, 'answer|other accepted'], ...]`, written as items by normalize() */
    conjugate: Object.assign({}, typed, {
      top: function (S, b) {
        return '<p class="cj-verb"' + S.ta + '><b>' + esc(b.verb) + '</b>' + (b.tense ? '<span' + S.xa + '>' + md(b.tense) + '</span>' : '') + '</p>';
      },
      html: function (S, bi, i, b, it, x, test, review, locked) {
        var a = ' data-b="' + bi + '" data-i="' + i + '"';
        return '<div class="cj-row"><span class="cj-p"' + S.ta + '>' + md(it.q) + '</span>' + typedInput(S, a, it, x, locked) + '</div>' +
          (!test && !x.done && x.tries >= 2 ? showLink(S, a) : '');
      }
    }),
    /* Crossword: clues with an answer box each; the grid fills in as the student types */
    crossword: Object.assign({}, typed, {
      top: function (S, b, bi, s) { return crossHtml(S, b, bi, s); },
      html: function (S, bi, i, b, it, x, test, review, locked) {
        var a = ' data-b="' + bi + '" data-i="' + i + '"';
        var w = b.grid.words[i];
        return '<div class="cw-clue"' + S.ta + '><span class="cw-dir" aria-hidden="true">' + S.A.icon(w.down ? 'down' : 'arrow') + '</span>' +
          '<p' + S.ta + '>' + md(it.q) + ' <span class="cw-len">(' + w.len + ')</span></p>' + typedInput(S, a + ' maxlength="' + w.len + '"', it, x, locked) + '</div>' +
          (!test && !x.done && x.tries >= 2 ? showLink(S, a) : '');
      }
    }),
    order: {
      prep: function (it) { var w = words(it); return { words: w, all: w, pool: shuffle(w.length, true), placed: [] }; },
      right: orderRight, answer: function (b, it) { return it.a; },
      ready: function (b, it, x) { return x.placed.length === x.words.length; },
      hint: 'app_book_order_hint', html: tilesHtml
    },
    /* Build the sentence: like word order, with a few extra words that do not belong */
    build: {
      prep: function (it) { var w = words(it), all = w.concat(it.extra || []); return { words: w, all: all, pool: shuffle(all.length, true), placed: [] }; },
      right: orderRight, answer: function (b, it) { return it.a; },
      ready: function (b, it, x) { return x.placed.length === x.words.length; },
      hint: 'app_ex_build_hint', html: tilesHtml
    },
    spot: {
      prep: function (it) { var tk = spotTokens(it.s); return { tokens: tk, targets: tk.filter(function (x) { return x.target > -1; }).length, found: {}, sel: {}, bad: null }; },
      right: function (b, it, s) { return s.tokens.every(function (k, i) { return k.space || (k.target > -1 ? !!s.sel[i] : !s.sel[i]); }); },
      answer: function (b, it, x) { return x.tokens.filter(function (k) { return k.target > -1; }).map(function (k) { return k.text; }).join(', '); },
      ready: function (b, it, x) { return Object.keys(x.sel).length > 0; },
      hint: 'app_book_spot_hint',
      html: function (S, bi, i, b, it, x, test, review, locked) {
        var a = ' data-b="' + bi + '" data-i="' + i + '"';
        var html = '<p class="spot"' + S.ta + '>' + x.tokens.map(function (k, ti) {
          if (k.space) return ' ';
          if (k.target === -1 && !k.word) return '<span>' + esc(k.text) + '</span>';
          var c = '';
          var showAll = review || (x.done && x.shown);
          if (showAll) c = k.target > -1 ? (x.sel[ti] || x.shown ? ' is-found' : ' is-missed') : x.sel[ti] ? ' is-bad' : '';
          else if (test) c = x.sel[ti] ? ' is-picked' : '';
          else if (x.found[k.target] && k.target > -1) c = ' is-found';
          else if (x.bad === ti) c = ' is-bad';
          return '<button class="spot__w' + c + '" type="button" data-act="spot"' + a + ' data-t="' + ti + '"' + (locked ? ' disabled' : '') + '>' + esc(k.text) + '</button>';
        }).join('') + '</p>';
        return html + (!test && !x.done && x.tries >= 2 ? showLink(S, a) : '');
      }
    },
    /* Collocations: which words go with the key word? `a` lists the right options */
    colloc: {
      prep: function (it) { return { order: shuffle(it.o.length), sel: {}, bad: null }; },
      right: function (b, it, x) { return it.o.every(function (o, k) { return !!x.sel[k] === (it.a.indexOf(k) > -1); }); },
      answer: function (b, it) { return it.a.map(function (k) { return it.o[k]; }).join(', '); },
      ready: function (b, it, x) { return Object.keys(x.sel).length > 0; },
      hint: 'app_ex_colloc_hint',
      html: function (S, bi, i, b, it, x, test, review, locked) {
        var a = ' data-b="' + bi + '" data-i="' + i + '"';
        var html = '<div class="colloc"><span class="colloc__key"' + S.ta + '>' + md(it.key) + '</span><div class="colloc__opts">' + x.order.map(function (k, n) {
          var right = it.a.indexOf(k) > -1, c = '';
          if (review || (x.done && x.shown)) c = right ? (x.sel[k] || x.shown ? ' is-right' : ' is-missed') : x.sel[k] ? ' is-wrong' : '';
          else if (test) c = x.sel[k] ? ' is-picked' : '';
          else if (x.sel[k]) c = ' is-right';
          else if (x.bad === k) c = ' is-wrong';
          return '<button class="opt opt--sm' + c + '" type="button" data-act="toggle"' + a + ' data-o="' + k + '" style="--k:' + n + '"' + (locked ? ' disabled' : '') +
            (test && !review ? ' aria-pressed="' + !!x.sel[k] + '"' : '') + S.ta + '>' + md(it.o[k]) + '</button>';
        }).join('') + '</div></div>';
        return html + (!test && !x.done && x.tries >= 2 ? showLink(S, a) : '');
      }
    },
    /* Find and fix the mistake: tap the wrong word (in brackets in the file), then write it correctly */
    fix: {
      prep: function (it) { return { tokens: spotTokens(it.s), hit: null, bad: null, stage: 'find' }; },
      right: function (b, it, x) { return x.hit != null && x.tokens[x.hit].target > -1 && accepts(it.a, x.value); },
      answer: function (b, it, x) { var w = x.tokens.filter(function (k) { return k.target > -1; })[0]; return (w ? w.text + ' → ' : '') + it.a[0]; },
      ready: function (b, it, x) { return x.hit != null && norm(x.value) !== ''; },
      hint: 'app_ex_fix_hint',
      html: function (S, bi, i, b, it, x, test, review, locked) {
        var a = ' data-b="' + bi + '" data-i="' + i + '"';
        var showAll = review || (x.done && x.shown);
        var html = '<p class="spot"' + S.ta + '>' + x.tokens.map(function (k, ti) {
          if (k.space) return ' ';
          if (k.target === -1 && !k.word) return '<span>' + esc(k.text) + '</span>';
          var c = '';
          if (showAll) c = k.target > -1 ? ' is-missed' : x.hit === ti ? ' is-bad' : '';
          else if (x.hit === ti) c = test ? ' is-picked' : ' is-found';
          else if (x.bad === ti) c = ' is-bad';
          return '<button class="spot__w' + c + '" type="button" data-act="fixtap"' + a + ' data-t="' + ti + '"' + (locked || (!test && x.hit != null) ? ' disabled' : '') + '>' + esc(k.text) + '</button>';
        }).join('') + '</p>';
        if (x.hit != null || showAll) {
          var w = x.hit != null ? x.tokens[x.hit].text : '';
          html += '<div class="fix__row"' + S.ta + '><s>' + esc(showAll && !w ? '' : w) + '</s>' + S.A.icon('arrow') + typedInput(S, a, it, x, locked) +
            (!test && !locked ? '<button class="btn btn--primary btn--sm" type="button" data-act="fixok"' + a + '>' + esc(t(S, 'app_book_check')) + '</button>' : '') + '</div>';
        }
        return html + (!test && !x.done && x.tries >= 2 ? showLink(S, a) : '');
      }
    },

    /* Questions answered from one fixed list (tests): `opts: [...]`, `items: [{ q, a: index, why }]`. Short options are the
       buttons; longer ones are listed once with letters and the buttons show the letters. */
    pick: {
      prep: function () { return {}; },
      isOpt: function (it, o) { return o === it.a; },
      right: function (b, it, x) { return x.picked === it.a; },
      answer: function (b, it) { return pickLong(b) ? LETTERS[it.a] + ': ' + b.opts[it.a] : b.opts[it.a]; },
      ready: function (b, it, x) { return x.picked != null; },
      top: function (S, b) {
        if (!pickLong(b)) return '';
        return '<dl class="pick-list"' + S.ta + '>' + b.opts.map(function (o, k) { return '<div><dt>' + LETTERS[k] + '</dt><dd>' + md(o) + '</dd></div>'; }).join('') + '</dl>';
      },
      html: function (S, bi, i, b, it, x, test, review, locked) {
        var long = pickLong(b);
        return '<p class="ex-q"' + S.ta + '>' + md(it.q) + '</p>' +
          choiceOpts(S, bi, i, b, it, x, test, review, locked, b.opts.map(function (o, k) { return k; }), function (o) { return long ? LETTERS[o] : md(b.opts[o]); }, long ? ' opts--letters' : ' opts--pick', !long);
      }
    },

    /* ----- Block kinds ----- */
    /* A continuous text with gaps (tests): `text` with {} for each gap; items: { o: [right, ...] } (drop-down),
       { a: [accepted] } (typed), { base, a } (word formation), or { a: index } into the block's shared `opts` (letters) */
    cloze: {
      block: true,
      prep: function (b) { return { items: b.items.map(function (it) { return Object.assign(itemState(), it.o ? { order: shuffle(it.o.length, true) } : {}); }) }; },
      ready: function (b, s) { return s.items.every(function (x, i) { return clozeAnswered(b, b.items[i], x); }); },
      done: function (b, s) { return s.items.every(function (x) { return x.done; }); },
      first: function (b, s) { return { right: s.items.filter(function (x) { return x.first === true; }).length, total: s.items.length }; },
      tally: function (b, s) { return { right: b.items.filter(function (it, i) { return clozeRight(b, it, s.items[i]); }).length, total: b.items.length }; },
      html: clozeHtml
    },
    /* A writing task (tests): `items: [{ task, min, max, model }]`, `choose: true` when the student writes one of them.
       Not marked by the engine: the host marks it after submit() and puts the result in S.marks['<block>-<item>'] */
    write: {
      block: true, manual: true,
      prep: function (b) { return { items: b.items.map(function () { return { value: '' }; }), pick: b.choose ? null : 0 }; },
      ready: function (b, s) { return b.choose ? s.pick != null && wordCount(s.items[s.pick].value) > 0 : s.items.every(function (x) { return wordCount(x.value) > 0; }); },
      done: function (b, s) { return K.write.ready(b, s); },
      first: function () { return { right: 0, total: 0 }; },
      tally: function () { return { right: 0, total: 0 }; },
      html: writeHtml
    },
    /* A speaking task (tests): the examiner's question (`src`: its recording), then the student records up to `secs`
       seconds; the words are transcribed (opts.transcribe) and marked by the host like writing */
    talk: {
      block: true, manual: true,
      prep: function (b) { return { items: b.items.map(function () { return { heard: '', state: '', note: '' }; }) }; },
      ready: function (b, s) { return s.items.every(function (x) { return !!x.heard; }); },
      done: function (b, s) { return K.talk.ready(b, s); },
      first: function () { return { right: 0, total: 0 }; },
      tally: function () { return { right: 0, total: 0 }; },
      html: talkHtml
    },
    match: {
      block: true, hint: 'app_book_match_hint',
      prep: function (b) { return { lo: shuffle(b.pairs.length), ro: shuffle(b.pairs.length, true), sel: null, got: {}, gotR: {}, link: {}, err: {}, pairs: {}, flash: null }; },
      ready: function (b, s) { return Object.keys(s.pairs).length === b.pairs.length; },
      done: function (b, s) { return Object.keys(s.got).length === b.pairs.length; },
      first: function (b, s) { return { right: b.pairs.filter(function (p, l) { return s.got[l] && !s.err[l]; }).length, total: b.pairs.length }; },
      tally: function (b, s) { return { right: b.pairs.filter(function (p, l) { return matchRight(b, l, s.pairs[l]); }).length, total: b.pairs.length }; },
      html: matchHtml
    },
    /* Word bank: tap a gap, then the word from the bank that fills it */
    bank: {
      block: true, hint: 'app_ex_bank_hint',
      prep: function (b) {
        var bank = b.items.map(function (it) { return it.a; }).concat(b.extra || []);
        return { bank: bank, order: shuffle(bank.length, true), items: b.items.map(itemState), sel: 0, used: {}, bad: null };
      },
      ready: function (b, s) { return s.items.every(function (x) { return x.picked != null; }); },
      done: function (b, s) { return s.items.every(function (x) { return x.done; }); },
      first: function (b, s) { return { right: s.items.filter(function (x) { return x.first === true; }).length, total: s.items.length }; },
      tally: function (b, s) { return { right: b.items.filter(function (it, i) { return bankRight(s, it, s.items[i]); }).length, total: b.items.length }; },
      html: bankHtml
    },
    /* Label the scene: tap a dot on the drawing, then its word (a word bank on a picture).
       { scene: 'cafe', items: [{ x, y, a: 'die Tasse', why }], extra: [...] }, x and y in the 320 × 200 scene */
    label: {
      block: true, hint: 'app_ex_label_hint',
      prep: function (b) { return K.bank.prep(b); },
      ready: function (b, s) { return K.bank.ready(b, s); },
      done: function (b, s) { return K.bank.done(b, s); },
      first: function (b, s) { return K.bank.first(b, s); },
      tally: function (b, s) { return K.bank.tally(b, s); },
      html: labelHtml
    },
    /* Sort into groups: tap a word, then its group */
    sort: {
      block: true, hint: 'app_ex_sort_hint',
      prep: function (b) { return { order: shuffle(b.items.length, true), items: b.items.map(itemState), sel: null, last: null }; },
      ready: function (b, s) { return s.items.every(function (x) { return x.picked != null; }); },
      done: function (b, s) { return s.items.every(function (x) { return x.done; }); },
      first: function (b, s) { return { right: s.items.filter(function (x) { return x.first === true; }).length, total: s.items.length }; },
      tally: function (b, s) { return { right: b.items.filter(function (it, i) { return s.items[i].picked === it.g; }).length, total: b.items.length }; },
      html: sortHtml
    },
    /* Memory pairs: turn two cards; a pair stays open (lessons only) */
    memory: {
      block: true, hint: 'app_ex_memory_hint',
      prep: function (b) { return { cards: shuffle(b.pairs.length * 2), open: [], got: {}, miss: {}, busy: false }; },
      ready: function (b, s) { return Object.keys(s.got).length === b.pairs.length; },
      done: function (b, s) { return Object.keys(s.got).length === b.pairs.length; },
      first: function (b, s) { return { right: b.pairs.filter(function (p, l) { return !s.miss[l]; }).length, total: b.pairs.length }; },
      tally: function (b, s) { return { right: Object.keys(s.got).length, total: b.pairs.length }; },
      html: memoryHtml
    },
    /* Word search: tap the first and the last letter of each word (lessons only) */
    search: {
      block: true, hint: 'app_ex_search_hint',
      prep: function () { return { found: {}, start: null, flash: false, misses: 0 }; },
      ready: function (b, s) { return Object.keys(s.found).length === b.words.length; },
      done: function (b, s) { return Object.keys(s.found).length === b.words.length; },
      first: function (b, s) { return { right: Math.max(0, b.words.length - s.misses), total: b.words.length }; },
      tally: function (b, s) { return { right: Object.keys(s.found).length, total: b.words.length }; },
      html: searchHtml
    }
  };
  function tfLabel(S, v) { return t(S, v === 't' ? 'app_book_true' : v === 'f' ? 'app_book_false' : 'app_book_ng'); }
  function orderRight(b, it, s) { return s.placed.length === s.words.length && s.placed.map(function (w) { return s.all[w]; }).join(' ') === s.words.join(' '); }
  function matchRight(b, l, r) { return r != null && b.pairs[r][1] === b.pairs[l][1]; }
  function bankRight(s, it, x) { return x.picked != null && norm(s.bank[x.picked]) === norm(it.a); }
  var LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  function pickLong(b) { return b.opts.some(function (o) { return String(o).length > 24; }); }
  function clozeRight(b, it, x) { return b.opts || it.o ? x.picked === (b.opts ? it.a : 0) : accepts(it.a, x.value); }
  function clozeAnswered(b, it, x) { return b.opts || it.o ? x.picked != null : norm(x.value) !== ''; }
  function clozeAnswer(b, it) { return b.opts ? LETTERS[it.a] : it.o ? it.o[0] : it.a[0]; }
  function wordCount(s) { return String(s || '').trim().split(/\s+/).filter(function (w) { return /[\p{L}\p{N}]/u.test(w); }).length; }

  function clozeHtml(S, bi, b, s, test, review) {
    var g = 0;
    var paras = String(b.text).split(/\n\s*\n/).map(function (p) {
      return '<p>' + md(p).split('{}').map(function (seg, k) {
        if (!k) return seg;
        var i = g++, it = b.items[i], x = s.items[i], a = ' data-b="' + bi + '" data-i="' + i + '"';
        var cls = review ? (clozeRight(b, it, x) ? ' is-right' : ' is-wrong') : '', ctl;
        if (b.opts || it.o) {
          var list = b.opts ? b.opts.map(function (o, n) { return n; }) : x.order;
          ctl = '<span class="sel-wrap cz' + cls + '"><select class="gap-sel"' + a + (review ? ' disabled' : '') + ' aria-label="' + esc(t(S, 'app_book_your_answer')) + '">' +
            '<option value=""' + (x.picked == null ? ' selected' : '') + '>…</option>' +
            list.map(function (o) { return '<option value="' + o + '"' + (x.picked === o ? ' selected' : '') + '>' + esc(b.opts ? LETTERS[o] : it.o[o]) + '</option>'; }).join('') + '</select></span>';
        } else {
          ctl = '<span class="cz' + cls + '">' + typedInput(S, a, it, x, review) + (it.base ? '<span class="cz__base">' + esc(upper(it.base)) + '</span>' : '') + '</span>';
        }
        if (review && !clozeRight(b, it, x)) ctl += '<b class="cz__fix">' + esc(clozeAnswer(b, it)) + '</b>';
        return ctl + seg;
      }).join('') + '</p>';
    }).join('');
    var html = '<div class="cloze"' + S.ta + '>' + paras + '</div>';
    if (b.opts) html += '<dl class="pick-list"' + S.ta + '>' + b.opts.map(function (o, k) { return '<div><dt>' + LETTERS[k] + '</dt><dd>' + md(o) + '</dd></div>'; }).join('') + '</dl>';
    if (review) {
      html += '<div class="cz-why">' + b.items.map(function (it, i) {
        var ok = clozeRight(b, it, s.items[i]);
        return '<p class="cz-why__row ' + (ok ? 'is-right' : 'is-wrong') + '"><b' + S.ta + '>' + esc(clozeAnswer(b, it)) + '</b> <span>' + md(it.why || '') + '</span></p>';
      }).join('') + '</div>';
    }
    return html;
  }

  function writeHtml(S, bi, b, s, test, review) {
    var html = '';
    if (b.choose && !review) {
      html += '<div class="wr-choose">' + b.items.map(function (it, i) {
        return '<button class="wr-task' + (s.pick === i ? ' is-picked' : '') + '" type="button" data-act="wrpick" data-b="' + bi + '" data-i="' + i + '" aria-pressed="' + (s.pick === i) + '"' + S.ta + '>' +
          '<span class="wr-task__md">' + mdBlock(it.task) + '</span></button>';
      }).join('') + '</div>';
    }
    b.items.forEach(function (it, i) {
      if (b.choose && s.pick !== i) return;
      var x = s.items[i], n = wordCount(x.value), a = ' data-b="' + bi + '" data-i="' + i + '"';
      html += '<div class="wr">';
      if (!b.choose || review) html += '<div class="wr-brief"' + S.ta + '>' + mdBlock(it.task) + '</div>';
      if (review) html += '<div class="wr-text"' + S.ta + '>' + (x.value ? String(x.value).trim().split(/\n\s*\n/).map(function (p) { return '<p>' + esc(p).replace(/\n/g, '<br>') + '</p>'; }).join('') : '<p class="t-small">' + esc(t(S, 'app_mt_not_written')) + '</p>') + '</div>';
      else html += '<textarea class="write-in" rows="12"' + a + ' aria-label="' + esc(t(S, 'app_book_your_answer')) + '" spellcheck="false"' + S.ta + '>' + esc(x.value) + '</textarea>';
      html += '<p class="t-small wr-count' + (n && (n < it.min || n > it.max) ? ' is-off' : '') + '" data-wc="' + bi + '-' + i + '">' + esc(t(S, 'app_mt_words', { n: n, min: it.min, max: it.max })) + '</p>';
      if (review) html += markSlot(S, bi, i, it);
      html += '</div>';
    });
    return html;
  }
  /* Paragraphs of task text (already escaped by md) */
  function mdBlock(s) { return String(s).split(/\n\s*\n/).map(function (p) { return '<p>' + md(p).replace(/\n/g, '<br>') + '</p>'; }).join(''); }
  function markSlot(S, bi, i, it) {
    var m = S.marks && S.marks[bi + '-' + i];
    return '<div class="mark-slot" data-mark="' + bi + '-' + i + '">' + (m || '') + '</div>' +
      (it.model ? '<details class="model"><summary>' + esc(t(S, 'app_mt_model')) + '</summary><div' + S.ta + '>' + mdBlock(it.model) + '</div></details>' : '');
  }

  function talkHtml(S, bi, b, s, test, review) {
    var html = '<div class="talk-tutor tutor-art" data-mouth="rest">' + (S.A.Cast.tutor ? S.A.Cast.tutor(b.tutor || 'arthur') : '') + '</div>';
    b.items.forEach(function (it, i) {
      var x = s.items[i], a = ' data-b="' + bi + '" data-i="' + i + '"';
      var recording = rec && rec.S === S && rec.bi === bi && rec.i === i;
      html += '<div class="talk-item ex-item" data-item="' + i + '">';
      html += '<p class="talk-q"' + S.ta + '>' + md(it.q) + '</p>';
      var scenes = it.scenes || (it.scene ? [it.scene] : []);
      if (scenes.length && S.A.Cast.scene) html += '<div class="talk-scene' + (scenes.length > 1 ? ' talk-scene--two' : '') + '">' + scenes.map(function (k) { return '<div>' + S.A.Cast.scene(k) + '</div>'; }).join('') + '</div>';
      if (it.notes && it.notes.length) html += '<div class="talk-notes"' + S.ta + '>' + it.notes.map(function (n) { return '<p>' + md(n) + '</p>'; }).join('') + '</div>';
      if (!review) {
        html += '<div class="hear-row">' + (it.src ? '<button class="btn btn--ghost btn--sm hear" type="button" data-act="speakhear"' + a + ' data-src="' + esc(it.src) + '">' + S.A.icon('play') + '<span>' + esc(t(S, 'app_mt_examiner')) + '</span></button>' : '') +
          '<button class="btn btn--primary btn--sm rec' + (recording ? ' is-rec' : '') + '" type="button" data-act="talkrec"' + a + (x.state === 'wait' ? ' disabled' : '') + '><i aria-hidden="true"></i><span>' +
          esc(t(S, recording ? 'app_ex_rec_stop' : x.state === 'wait' ? 'app_ex_rec_wait' : x.heard ? 'app_mt_rec_again' : 'app_ex_rec')) + '</span></button>' +
          '<span class="t-small talk-time" data-rt="' + bi + '-' + i + '">' + esc(t(S, 'app_mt_secs', { n: it.secs })) + '</span></div>';
        if (it.prep) html += '<p class="t-small"' + S.xa + '>' + esc(t(S, 'app_mt_prep', { n: it.prep })) + '</p>';
      }
      if (x.heard) html += '<p class="t-small speak-heard"' + S.xa + '>' + esc(t(S, 'app_ex_speak_heard')) + ' <q' + S.ta + '>' + esc(x.heard) + '</q></p>';
      else if (review) html += '<p class="t-small"' + S.xa + '>' + esc(t(S, 'app_mt_not_said')) + '</p>';
      if (x.note) html += '<p class="t-small speak-note"' + S.xa + '>' + esc(t(S, x.note)) + '</p>';
      if (review) html += markSlot(S, bi, i, it);
      html += '</div>';
    });
    return html;
  }

  function prepare(S, b) {
    var k = K[b.kind];
    if (!k) { console.warn('[Alimun] Unknown exercise kind', b.kind); return { items: [] }; }
    if (k.block) return k.prep(b);
    return { items: b.items.map(function (it) { return Object.assign(itemState(), k.prep(it, b)); }) };
  }
  function isRight(b, it, x) { return K[b.kind].right(b, it, x); }
  function answered(b, s) {
    var k = K[b.kind];
    if (!k) return true;
    if (k.block) return k.ready(b, s);
    return s.items.every(function (x, i) { return k.ready(b, b.items[i], x); });
  }
  function blockDone(b, s) {
    var k = K[b.kind];
    if (!k) return true;
    if (k.block) return k.done(b, s);
    return s.items.every(function (x) { return x.done; });
  }
  /* Right first time (lessons) */
  function firstTally(b, s) {
    var k = K[b.kind];
    if (!k) return { right: 0, total: 0 };
    if (k.block) return k.first(b, s);
    return { right: s.items.filter(function (x) { return x.first === true; }).length, total: s.items.length };
  }

  /* ---------- Drawing ---------- */
  function exHtml(S, bi) {
    var b = S.blocks[bi], s = S.state[bi], k = K[b.kind];
    var test = S.test, review = test && S.result;
    var html = '<section class="ex ex--' + esc(b.kind) + '" data-block="' + bi + '"><h3 class="ex__h">' + md(b.h) + '</h3>';
    if (!k) return html + '</section>';
    if (k.block) return html + k.html(S, bi, b, s, test, review) + '</section>';
    if (k.hint && !review) html += '<p class="t-small ex__hint">' + esc(t(S, k.hint)) + '</p>';
    /* A listening for the whole block (the tutor's practice, AI tutor part 5): `src` its audio, `script` its text shown
       once the block is done; `read` the text to read when there is no audio, with `note` saying why */
    if (b.note) html += '<p class="t-small ex__hint">' + esc(t(S, b.note)) + '</p>';
    if (b.src) html += hearHtml(S, b.src);
    if (b.read) html += '<div class="ex-read"' + S.ta + '>' + mdBlock(b.read) + '</div>';
    if (k.top) html += k.top(S, b, bi, s);
    html += '<div class="ex-items">';
    b.items.forEach(function (it, i) {
      var x = s.items[i];
      var cls = review ? (isRight(b, it, x) ? ' is-right' : ' is-wrong') : x.done ? ' is-right' : x.flash ? ' is-wrong' : '';
      html += '<div class="ex-item' + cls + '" data-item="' + i + '" style="--k:' + i + '">' + itemHtml(S, bi, i, b, it, x, test, review) + '</div>';
    });
    html += '</div>';
    if (!test && k.check && !blockDone(b, s)) {
      html += '<div class="btn-row ex__foot"><button class="btn btn--primary btn--sm" type="button" data-act="check" data-b="' + bi + '">' + esc(t(S, 'app_book_check')) + '</button></div>';
    }
    if (b.script && blockDone(b, s)) html += '<details class="model"><summary>' + esc(t(S, 'app_ex_read_text')) + '</summary><div' + S.ta + '>' + mdBlock(b.script) + '</div></details>';
    return html + '</section>';
  }

  function itemHtml(S, bi, i, b, it, x, test, review) {
    var fb = '';
    if (review) {
      fb = isRight(b, it, x) ? feedback(S, true, praise(S, bi, i), it.why) : feedback(S, false, t(S, 'app_book_answer_is_label'), it.why, K[b.kind].answer(b, it, x, S));
    } else if (!test) {
      if (x.done) fb = x.shown ? feedback(S, false, t(S, 'app_book_answer_is_label'), it.why, K[b.kind].answer(b, it, x, S)) : feedback(S, true, praise(S, bi, i), it.why);
      else if (x.flash) fb = K[b.kind].wrong ? '<div class="fb fb--no">' + S.A.Cast.book('think') + '<div>' + K[b.kind].wrong(S, b, it, x) + '</div></div>' : feedback(S, false, t(S, 'app_book_wrong'), '');
    }
    var locked = review || x.done;
    return K[b.kind].html(S, bi, i, b, it, x, test, review, locked) + '<div class="fb-slot" aria-live="polite">' + fb + '</div>';
  }

  function tilesHtml(S, bi, i, b, it, x, test, review, locked) {
    var a = ' data-b="' + bi + '" data-i="' + i + '"';
    var placed = x.done && x.shown ? x.words.map(function (w, k) { return k; }) : x.placed;
    var html = '<div class="ord-line' + (placed.length ? '' : ' is-empty') + '" data-line' + a + S.ta + '>' +
      placed.map(function (w) {
        return '<button class="tile" type="button" data-act="unplace"' + a + ' data-w="' + w + '"' + (locked ? ' disabled' : '') + '>' + esc(x.all[w]) + '</button>';
      }).join('') + '</div>';
    if (!locked) {
      html += '<div class="ord-pool" data-pool' + a + S.ta + '>' + x.pool.map(function (w) {
        var used = x.placed.indexOf(w) > -1;
        return '<button class="tile' + (used ? ' is-used' : '') + '" type="button" data-act="place"' + a + ' data-w="' + w + '"' + (used ? ' disabled aria-hidden="true" tabindex="-1"' : '') + '>' + esc(x.all[w]) + '</button>';
      }).join('') + '</div>';
      if (!test && x.flash) {
        html += '<div class="btn-row ex__foot"><button class="linkish" type="button" data-act="reset"' + a + '>' + esc(t(S, 'app_book_clear')) + '</button>' +
          (x.tries >= 2 ? showLink(S, a) : '') + '</div>';
      }
    }
    return html;
  }

  function matchHtml(S, bi, b, s, test, review) {
    var a = ' data-b="' + bi + '"';
    var html = (review ? '' : '<p class="t-small ex__hint">' + esc(t(S, 'app_book_match_hint')) + '</p>') + '<div class="match" data-match="' + bi + '"' + S.ta + '><svg class="match__lines" aria-hidden="true"></svg>';
    html += '<div class="match__col">' + s.lo.map(function (l, k) {
      var c = '', pairNo = '';
      if (review) c = matchRight(b, l, s.pairs[l]) ? ' is-right' : ' is-wrong';
      else if (test) { if (s.pairs[l] != null) { c = ' is-paired'; pairNo = ' data-pair="' + (k % 6) + '"'; } }
      else if (s.got[l]) c = ' is-matched';
      if (!review && s.sel === l) c += ' is-sel';
      if (s.flash && s.flash.l === l) c += ' is-wrong';
      var dis = review || (!test && s.got[l]);
      return '<button class="tile tile--match' + c + '" type="button" data-act="mleft"' + a + ' data-l="' + l + '"' + pairNo + ' style="--k:' + k + '"' + (dis ? ' disabled' : '') + ' aria-pressed="' + (s.sel === l) + '">' + esc(b.pairs[l][0]) + '</button>';
    }).join('') + '</div>';
    html += '<div class="match__col">' + s.ro.map(function (r, k) {
      var c = '', pairNo = '', owner = null;
      Object.keys(s.pairs).forEach(function (l) { if (s.pairs[l] === r) owner = +l; });
      if (review) c = owner != null ? (matchRight(b, owner, r) ? ' is-right' : ' is-wrong') : '';
      else if (test) { if (owner != null) { c = ' is-paired'; pairNo = ' data-pair="' + (s.lo.indexOf(owner) % 6) + '"'; } }
      else if (s.gotR[r]) c = ' is-matched';
      if (s.flash && s.flash.r === r) c += ' is-wrong';
      var dis = review || (!test && s.gotR[r]);
      return '<button class="tile tile--match' + c + '" type="button" data-act="mright"' + a + ' data-r="' + r + '"' + pairNo + ' style="--k:' + k + '"' + (dis ? ' disabled' : '') + '>' + esc(b.pairs[r][1]) + '</button>';
    }).join('') + '</div></div>';
    var fb = '';
    if (review) {
      var wrong = b.pairs.filter(function (p, l) { return !matchRight(b, l, s.pairs[l]); });
      fb = wrong.length ? feedback(S, false, t(S, 'app_book_answer_is_label'), '', wrong.map(function (p) { return p[0] + ' ' + p[1]; }).join(', ')) : feedback(S, true, praise(S, bi, 0), '');
    } else if (!test && K.match.done(b, s)) fb = feedback(S, true, praise(S, bi, 0), '', b.pairs.map(function (p) { return p[0] + ' ' + p[1]; }).join(', '));
    else if (!test && s.flash) fb = feedback(S, false, t(S, 'app_book_wrong'), '');
    return html + '<div class="fb-slot" aria-live="polite">' + fb + '</div>';
  }

  function bankHtml(S, bi, b, s, test, review) {
    var a = ' data-b="' + bi + '"';
    var used = {};
    s.items.forEach(function (x, i) { if (x.picked != null) used[x.picked] = i; });
    var html = review ? '' : '<p class="t-small ex__hint">' + esc(t(S, 'app_ex_bank_hint')) + '</p>';
    if (!review && !K.bank.done(b, s)) {
      html += '<div class="bank" role="group" aria-label="' + esc(t(S, 'app_ex_bank')) + '"' + S.ta + '>' + s.order.map(function (w, k) {
        var u = used[w] != null;
        return '<button class="tile tile--bank' + (u ? ' is-used' : '') + (s.bad === w ? ' is-bad' : '') + '" type="button" data-act="bankpick"' + a + ' data-w="' + w + '" data-drag style="--k:' + k + '"' +
          (u && !test ? ' disabled' : '') + '>' + esc(s.bank[w]) + '</button>';
      }).join('') + '</div>';
    }
    html += '<div class="ex-items">';
    b.items.forEach(function (it, i) {
      var x = s.items[i], ok = bankRight(s, it, x);
      var cls = review ? (ok ? ' is-right' : ' is-wrong') : x.done ? ' is-right' : x.flash ? ' is-wrong' : '';
      var fill = x.picked != null ? s.bank[x.picked] : '';
      var on = !review && !x.done && s.sel === i;
      var parts = md(it.q).split('___');
      var gap = '<button class="gap gap--btn' + (fill ? ' is-filled' : '') + (on ? ' is-sel' : '') + '" type="button" data-act="gapsel"' + a + ' data-i="' + i + '" data-drop' +
        (review || x.done ? ' disabled' : '') + ' aria-label="' + esc(fill || t(S, 'app_book_gap')) + '">' + (fill ? esc(fill) : '&nbsp;') + '</button>';
      var fb = '';
      if (review) fb = ok ? feedback(S, true, praise(S, bi, i), it.why) : feedback(S, false, t(S, 'app_book_answer_is_label'), it.why, it.a);
      else if (!test) {
        if (x.done) fb = x.shown ? feedback(S, false, t(S, 'app_book_answer_is_label'), it.why, it.a) : feedback(S, true, praise(S, bi, i), it.why);
        else if (x.flash) fb = feedback(S, false, t(S, 'app_book_wrong'), '');
      }
      html += '<div class="ex-item' + cls + '" data-item="' + i + '" style="--k:' + i + '"><p class="ex-q"' + S.ta + '>' + parts[0] + gap + parts.slice(1).join('___') + '</p>' +
        (!test && !x.done && x.tries >= 2 ? showLink(S, a + ' data-i="' + i + '"') : '') + '<div class="fb-slot" aria-live="polite">' + fb + '</div></div>';
    });
    return html + '</div>';
  }

  function labelHtml(S, bi, b, s, test, review) {
    var a = ' data-b="' + bi + '"';
    var used = {};
    s.items.forEach(function (x) { if (x.picked != null) used[x.picked] = true; });
    var html = review ? '' : '<p class="t-small ex__hint">' + esc(t(S, 'app_ex_label_hint')) + '</p>';
    html += '<div class="lbl"' + S.ta + '><div class="lbl__art">' + S.A.Cast.scene(b.scene) + '</div>';
    b.items.forEach(function (it, i) {
      var x = s.items[i], ok = bankRight(s, it, x), word = x.picked != null ? s.bank[x.picked] : '';
      var c = review ? (ok ? ' is-right' : ' is-wrong') : x.done ? ' is-right' : x.flash ? ' is-wrong' : '';
      if (!review && !x.done && s.sel === i) c += ' is-sel';
      var side = it.x > 220 ? ' is-left' : '';
      html += '<button class="lbl__spot' + c + side + '" type="button" data-act="gapsel"' + a + ' data-i="' + i + '" data-drop style="left:' + (it.x / 3.2) + '%;top:' + (it.y / 2) + '%"' +
        (review || x.done ? ' disabled' : '') + ' aria-label="' + esc(word || t(S, 'app_book_gap')) + '"><i aria-hidden="true"></i>' +
        (word || (review && !ok) ? '<span>' + esc(review && !ok ? it.a : word) + '</span>' : '') + '</button>';
    });
    html += '</div>';
    if (!review && !K.label.done(b, s)) {
      html += '<div class="bank" role="group" aria-label="' + esc(t(S, 'app_ex_bank')) + '"' + S.ta + '>' + s.order.map(function (w, k) {
        var u = used[w] && !test;
        return '<button class="tile tile--bank' + (used[w] ? ' is-used' : '') + (s.bad === w ? ' is-bad' : '') + '" type="button" data-act="bankpick"' + a + ' data-w="' + w + '" data-drag style="--k:' + k + '"' +
          (u ? ' disabled' : '') + '>' + esc(s.bank[w]) + '</button>';
      }).join('') + '</div>';
    }
    var fb = '';
    if (review) {
      var wrong = b.items.filter(function (it, i) { return !bankRight(s, it, s.items[i]); });
      fb = wrong.length ? feedback(S, false, t(S, 'app_book_answer_is_label'), '', wrong.map(function (it) { return it.a; }).join(', ')) : feedback(S, true, praise(S, bi, 0), '');
    } else if (!test && s.last != null) {
      var lx = s.items[s.last], lit = b.items[s.last];
      if (lx.done) fb = lx.shown ? feedback(S, false, t(S, 'app_book_answer_is_label'), lit.why, lit.a) : feedback(S, true, praise(S, bi, s.last), lit.why);
      else if (lx.flash) fb = feedback(S, false, t(S, 'app_book_wrong'), '');
    }
    if (!test && !review && s.last != null && !s.items[s.last].done && s.items[s.last].tries >= 2) fb += showLink(S, a + ' data-i="' + s.last + '"');
    return html + '<div class="fb-slot" aria-live="polite">' + fb + '</div>';
  }

  function sortHtml(S, bi, b, s, test, review) {
    var a = ' data-b="' + bi + '"';
    var html = review ? '' : '<p class="t-small ex__hint">' + esc(t(S, 'app_ex_sort_hint')) + '</p>';
    var word = function (i, inGroup) {
      var it = b.items[i], x = s.items[i], c = '';
      if (review) c = x.picked === it.g ? ' is-right' : ' is-wrong';
      else if (x.done) c = x.shown ? ' is-shown' : ' is-right';
      if (!review && s.sel === i) c += ' is-sel';
      if (!review && x.flash) c += ' is-bad';
      var dis = review || x.done || (!test && inGroup);
      return '<button class="tile tile--sort' + c + '" type="button" data-act="sortpick"' + a + ' data-i="' + i + '" data-drag' + (dis ? ' disabled' : '') +
        ' aria-pressed="' + (s.sel === i) + '">' + md(it.s) + '</button>';
    };
    /* Group names are in the language being learned (der, die, das) unless the block marks them as explanations */
    var gA = (b.explain || []).indexOf('groups') > -1 ? S.xa : S.ta;
    var pool = s.order.filter(function (i) { return s.items[i].picked == null; });
    if (pool.length) html += '<div class="sort__pool"' + S.ta + '>' + pool.map(function (i) { return word(i, false); }).join('') + '</div>';
    html += '<div class="sort__groups" style="--n:' + b.groups.length + '">' + b.groups.map(function (g, gi) {
      var inside = s.order.filter(function (i) { return s.items[i].picked === gi; });
      return '<div class="sort__group"><button class="sort__drop" type="button" data-act="sortdrop"' + a + ' data-g="' + gi + '" data-drop' + (review ? ' disabled' : '') + gA + '>' + md(g) + '</button>' +
        '<div class="sort__in"' + S.ta + '>' + inside.map(function (i) { return word(i, true); }).join('') + '</div></div>';
    }).join('') + '</div>';
    var fb = '';
    if (review) {
      var wrong = b.items.filter(function (it, i) { return s.items[i].picked !== it.g; });
      fb = wrong.length ? feedback(S, false, t(S, 'app_book_answer_is_label'), '', wrong.map(function (it) { return it.s + ' ' + b.groups[it.g]; }).join(', ')) : feedback(S, true, praise(S, bi, 0), '');
    } else if (!test && s.last != null) {
      var lx = s.items[s.last], lit = b.items[s.last];
      if (lx.done) fb = lx.shown ? feedback(S, false, t(S, 'app_book_answer_is_label'), lit.why, lit.s + ' ' + b.groups[lit.g]) : feedback(S, true, praise(S, bi, s.last), lit.why);
      else if (lx.flash) fb = feedback(S, false, t(S, 'app_book_wrong'), '');
    }
    return html + '<div class="fb-slot" aria-live="polite">' + fb + '</div>';
  }

  function memoryHtml(S, bi, b, s) {
    var a = ' data-b="' + bi + '"';
    var html = '<p class="t-small ex__hint">' + esc(t(S, 'app_ex_memory_hint')) + '</p><div class="mem" style="--n:' + Math.min(4, Math.ceil(Math.sqrt(b.pairs.length * 2))) + '"' + S.ta + '>';
    html += s.cards.map(function (c, k) {
      var l = c >> 1, side = c & 1, up = s.got[l] || s.open.indexOf(c) > -1;
      return '<button class="mem__card' + (up ? ' is-up' : '') + (s.got[l] ? ' is-got' : '') + '" type="button" data-act="flip"' + a + ' data-c="' + c + '" style="--k:' + k + '"' +
        (s.got[l] ? ' disabled' : '') + ' aria-label="' + esc(up ? b.pairs[l][side] : t(S, 'app_ex_card')) + '"><span class="mem__in"><span class="mem__back" aria-hidden="true">' + S.A.Cast.book('idle') + '</span>' +
        '<span class="mem__face' + (side ? ' mem__face--b' : '') + '">' + esc(b.pairs[l][side]) + '</span></span></button>';
    }).join('') + '</div>';
    var fb = K.memory.done(b, s) ? feedback(S, true, praise(S, bi, 0), '') : '';
    return html + '<div class="fb-slot" aria-live="polite">' + fb + '</div>';
  }

  /* Word search grid: words go right, down or diagonally down; the rest is filled with letters from the words */
  function searchGrid(list) {
    var ws = list.map(function (w) { return letters(w); });
    var longest = Math.max.apply(null, ws.map(function (w) { return w.length; }));
    var total = ws.reduce(function (n, w) { return n + w.length; }, 0);
    var size = Math.min(14, Math.max(longest + 1, Math.ceil(Math.sqrt(total * 2.4)), 8));
    var rnd = seeded(list.join('|'));
    var dirs = [[1, 0], [0, 1], [1, 1]];
    for (var attempt = 0; attempt < 40; attempt++) {
      var g = [], at = [], ok = true, y, x;
      for (y = 0; y < size; y++) { g.push([]); for (x = 0; x < size; x++) g[y].push(''); }
      for (var w = 0; w < ws.length && ok; w++) {
        var word = ws[w], placed = false;
        for (var tries = 0; tries < 200 && !placed; tries++) {
          var d = dirs[Math.floor(rnd() * dirs.length)];
          var x0 = Math.floor(rnd() * (size - d[0] * (word.length - 1))), y0 = Math.floor(rnd() * (size - d[1] * (word.length - 1)));
          var fits = word.every(function (c, k) { var v = g[y0 + d[1] * k][x0 + d[0] * k]; return v === '' || v === c; });
          if (!fits) continue;
          word.forEach(function (c, k) { g[y0 + d[1] * k][x0 + d[0] * k] = c; });
          at.push([x0, y0, x0 + d[0] * (word.length - 1), y0 + d[1] * (word.length - 1)]);
          placed = true;
        }
        if (!placed) ok = false;
      }
      if (ok) {
        /* Filler: letters from the words and, for Latin-script words, the common letters A to Z */
        var pool = [].concat.apply([], ws);
        if (pool.every(function (c) { return /[A-ZÀ-ÖØ-Þß]/.test(c); })) pool = pool.concat('AEIOURSTNLMDCBGHPK'.split(''));
        for (y = 0; y < size; y++) for (x = 0; x < size; x++) if (!g[y][x]) g[y][x] = pool[Math.floor(rnd() * pool.length)];
        return { size: size, cells: g, at: at };
      }
      if (attempt % 8 === 7) size++;
    }
    return { size: size, cells: [], at: [] };
  }
  function onLine(a, x, y) {
    var dx = Math.sign(a[2] - a[0]), dy = Math.sign(a[3] - a[1]), n = Math.max(Math.abs(a[2] - a[0]), Math.abs(a[3] - a[1]));
    for (var k = 0; k <= n; k++) if (a[0] + dx * k === x && a[1] + dy * k === y) return true;
    return false;
  }
  function searchHtml(S, bi, b, s) {
    var a = ' data-b="' + bi + '"', G = b.grid;
    var html = '<p class="t-small ex__hint">' + esc(t(S, 'app_ex_search_hint')) + '</p><div class="ws"><div class="ws__grid' + (s.flash ? ' is-wrong' : '') + '" style="--n:' + G.size + '" data-word-at="' + esc(JSON.stringify(G.at)) + '"' + S.ta + '>';
    for (var y = 0; y < G.size; y++) {
      for (var x = 0; x < G.size; x++) {
        var found = G.at.some(function (p, w) { return s.found[w] && onLine(p, x, y); });
        var start = s.start && s.start[0] === x && s.start[1] === y;
        html += '<button class="ws__c' + (found ? ' is-found' : '') + (start ? ' is-start' : '') + '" type="button" data-act="scell"' + a + ' data-x="' + x + '" data-y="' + y + '" tabindex="' + (x + y ? -1 : 0) + '">' + esc(G.cells[y][x]) + '</button>';
      }
    }
    html += '</div><div class="ws__list"' + S.ta + '>' + b.words.map(function (w, k) {
      return '<span class="ws__w' + (s.found[k] ? ' is-found' : '') + '">' + esc(w) + '</span>';
    }).join('') + '</div></div>';
    var fb = K.search.done(b, s) ? feedback(S, true, praise(S, bi, 0), '') : s.flash ? feedback(S, false, t(S, 'app_book_wrong'), '') : '';
    return html + '<div class="fb-slot" aria-live="polite">' + fb + '</div>';
  }

  /* Crossword layout: words cross where a letter is shared; a word that cannot cross goes below on its own */
  function crossGrid(list) {
    var ws = list.map(function (w, i) { return { i: i, l: letters(w.a) }; }).sort(function (a, b) { return b.l.length - a.l.length; });
    var cells = {}, placed = [];
    var key = function (x, y) { return x + ',' + y; };
    function can(w, x, y, down) {
      var dx = down ? 0 : 1, dy = down ? 1 : 0, cross = 0;
      if (cells[key(x - dx, y - dy)] || cells[key(x + dx * w.length, y + dy * w.length)]) return -1;
      for (var k = 0; k < w.length; k++) {
        var cx = x + dx * k, cy = y + dy * k, c = cells[key(cx, cy)];
        if (c) { if (c.ch !== w[k] || c[down ? 'd' : 'a']) return -1; cross++; continue; }
        if (cells[key(cx + dy, cy + dx)] || cells[key(cx - dy, cy - dx)]) return -1;
      }
      return cross;
    }
    function put(w, x, y, down, i) {
      var dx = down ? 0 : 1, dy = down ? 1 : 0;
      for (var k = 0; k < w.length; k++) {
        var kk = key(x + dx * k, y + dy * k), c = cells[kk] || (cells[kk] = { ch: w[k], x: x + dx * k, y: y + dy * k, of: [] });
        c[down ? 'd' : 'a'] = true; c.of.push(i);
      }
      placed.push({ i: i, x: x, y: y, down: down, len: w.length });
    }
    ws.forEach(function (w, n) {
      if (!n) { put(w.l, 0, 0, false, w.i); return; }
      var best = null;
      placed.forEach(function (p) {
        for (var k = 0; k < p.len; k++) {
          var px = p.x + (p.down ? 0 : k), py = p.y + (p.down ? k : 0), ch = cells[key(px, py)].ch;
          for (var j = 0; j < w.l.length; j++) {
            if (w.l[j] !== ch) continue;
            var down = !p.down, x = down ? px : px - j, y = down ? py - j : py;
            var c = can(w.l, x, y, down);
            if (c > 0 && (!best || c > best.c)) best = { x: x, y: y, down: down, c: c };
          }
        }
      });
      if (best) put(w.l, best.x, best.y, best.down, w.i);
      else {
        var maxY = Math.max.apply(null, Object.keys(cells).map(function (k) { return cells[k].y; }));
        var minX = Math.min.apply(null, Object.keys(cells).map(function (k) { return cells[k].x; }));
        put(w.l, minX, maxY + 2, false, w.i);
      }
    });
    var all = Object.keys(cells).map(function (k) { return cells[k]; });
    var x0 = Math.min.apply(null, all.map(function (c) { return c.x; })), y0 = Math.min.apply(null, all.map(function (c) { return c.y; }));
    var out = { w: 0, h: 0, cells: [], words: [] };
    all.forEach(function (c) { out.cells.push({ x: c.x - x0, y: c.y - y0, of: c.of }); out.w = Math.max(out.w, c.x - x0 + 1); out.h = Math.max(out.h, c.y - y0 + 1); });
    placed.forEach(function (p) { out.words[p.i] = { x: p.x - x0, y: p.y - y0, down: p.down, len: p.len }; });
    return out;
  }
  function crossLetter(b, s, cell, test, review) {
    for (var n = 0; n < cell.of.length; n++) {
      var i = cell.of[n], w = b.grid.words[i], x = s.items[i];
      var k = w.down ? cell.y - w.y : cell.x - w.x;
      var v = x.done && x.shown ? letters(b.items[i].a[0]) : letters(x.value);
      if (v[k]) return { ch: v[k], ok: review ? isRight(b, b.items[i], x) : x.done };
    }
    return { ch: '', ok: false };
  }
  function crossHtml(S, b, bi, s) {
    var G = b.grid, test = S.test, review = test && S.result;
    return '<div class="cw" style="--w:' + G.w + ';--h:' + G.h + '" data-cw="' + bi + '"' + S.ta + ' aria-hidden="true">' + G.cells.map(function (c) {
      var l = crossLetter(b, s, c, test, review);
      return '<span class="cw__c' + (l.ok ? ' is-right' : '') + '" data-of="' + c.of.join(' ') + '" style="grid-column:' + (c.x + 1) + ';grid-row:' + (c.y + 1) + '">' + esc(l.ch) + '</span>';
    }).join('') + '</div>';
  }
  /* Typing fills the crossword grid without redrawing the block (the input keeps focus) */
  function crossLive(S, bi) {
    var b = S.blocks[bi], s = S.state[bi];
    var box = S.root().querySelector('[data-cw="' + bi + '"]');
    if (!box) return;
    var spans = box.querySelectorAll('.cw__c');
    b.grid.cells.forEach(function (c, n) { spans[n].textContent = crossLetter(b, s, c, S.test, false).ch; });
  }

  /* Lines between matched pairs, drawn in after each change */
  function drawLines(S, scope) {
    var r = scope || (S.root && S.root());
    if (!r) return;
    r.querySelectorAll('[data-match]').forEach(function (m) {
      var bi = +m.getAttribute('data-match'), b = S.blocks[bi], s = S.state[bi];
      var svg = m.querySelector('.match__lines');
      if (!b || !s || !svg) return;
      var box = m.getBoundingClientRect();
      svg.setAttribute('viewBox', '0 0 ' + box.width + ' ' + box.height);
      var pairs = S.test ? s.pairs : s.link;
      var had = svg.__had || {};
      var now = {};
      svg.innerHTML = Object.keys(pairs).map(function (l) {
        var lb = m.querySelector('[data-l="' + l + '"]'), rb = m.querySelector('[data-r="' + pairs[l] + '"]');
        if (!lb || !rb) return '';
        var p = lb.getBoundingClientRect(), q = rb.getBoundingClientRect();
        var x1 = p.right - box.left, y1 = p.top + p.height / 2 - box.top, x2 = q.left - box.left, y2 = q.top + q.height / 2 - box.top;
        if (document.documentElement.dir === 'rtl' && m.closest('[dir="ltr"]') == null) { x1 = p.left - box.left; x2 = q.right - box.left; }
        var mid = (x1 + x2) / 2;
        var cls = S.result ? (matchRight(b, +l, pairs[l]) ? 'is-right' : 'is-wrong') : S.test ? 'is-paired p' + (s.lo.indexOf(+l) % 6) : 'is-matched';
        var key = l + '-' + pairs[l];
        now[key] = true;
        return '<path class="' + cls + (had[key] ? '' : ' is-new') + '" d="M' + x1 + ' ' + y1 + ' C' + mid + ' ' + y1 + ' ' + mid + ' ' + y2 + ' ' + x2 + ' ' + y2 + '"/>' +
          '<circle class="' + cls + '" cx="' + x1 + '" cy="' + y1 + '" r="4"/><circle class="' + cls + '" cx="' + x2 + '" cy="' + y2 + '" r="4"/>';
      }).join('');
      svg.__had = now;
    });
  }

  function rerender(S, bi) {
    var root = S.root();
    var el = root && root.querySelector('[data-block="' + bi + '"]');
    if (!el) return;
    var act = document.activeElement, sel = null;
    if (act && el.contains(act)) {
      sel = ['data-act', 'data-i', 'data-o', 'data-w', 'data-l', 'data-r', 'data-t', 'data-g', 'data-c', 'data-x', 'data-y'].filter(function (k) { return act.hasAttribute(k); })
        .map(function (k) { return '[' + k + '="' + act.getAttribute(k) + '"]'; }).join('');
      if (act.classList.contains('gap-in')) sel = '.gap-in[data-i="' + act.getAttribute('data-i') + '"]';
      if (act.classList.contains('gap-sel')) sel = '.gap-sel[data-i="' + act.getAttribute('data-i') + '"]';
    }
    /* Remember where the word tiles were, so they glide to their new place */
    var before = {};
    el.querySelectorAll('.tile[data-w]:not(.is-used), .tile--sort').forEach(function (n) { before[tileKey(n)] = n.getBoundingClientRect(); });
    el.outerHTML = exHtml(S, bi);
    el = root.querySelector('[data-block="' + bi + '"]');
    el.classList.add('is-settled');
    if (!reduced) {
      el.querySelectorAll('.tile[data-w]:not(.is-used), .tile--sort').forEach(function (n) {
        var r0 = before[tileKey(n)];
        if (!r0) return;
        var r1 = n.getBoundingClientRect(), dx = r0.left - r1.left, dy = r0.top - r1.top;
        if (!dx && !dy) return;
        n.animate([{ transform: 'translate(' + dx + 'px,' + dy + 'px)' }, { transform: 'none' }], { duration: 320, easing: 'cubic-bezier(.2,.8,.2,1)' });
      });
    }
    if (sel) {
      var f = el.querySelector(sel + ':not([disabled])') || el.querySelector('button:not([disabled]):not(.is-used), input:not([readonly]), select:not([disabled])') || el.querySelector('.fb-slot');
      if (f) { if (f.classList.contains('fb-slot')) f.setAttribute('tabindex', '-1'); f.focus({ preventScroll: true }); }
    }
    drawLines(S, el);
  }
  function tileKey(n) { return (n.getAttribute('data-i') || '') + ':' + (n.getAttribute('data-w') || ''); }

  /* ---------- Answering ---------- */
  function mark(S, bi, i, x, ok) {
    if (ok) { x.done = true; x.flash = false; if (x.first === null) { x.first = true; S.onItem({ bi: bi, i: i, ok: true, kind: S.blocks[bi].kind }); } }
    else { x.tries++; if (x.first === null) S.onItem({ bi: bi, i: i, ok: false, kind: S.blocks[bi].kind }); x.first = false; x.flash = true; }
  }
  function after(S, bi, ok) { if (S.test) S.onChange(); else S.onAnswer(bi, ok); }

  function onPick(S, bi, i, o) {
    var b = S.blocks[bi], x = S.state[bi].items[i], it = b.items[i];
    if (S.result) return;
    if (S.test) { x.picked = o; rerender(S, bi); after(S, bi); return; }
    if (x.done) return;
    x.picked = o;
    var ok = isRight(b, it, x);
    if (!ok) x.wrong[o] = true;
    mark(S, bi, i, x, ok);
    rerender(S, bi);
    after(S, bi, ok);
  }
  function onCheck(S, bi) {
    var b = S.blocks[bi], s = S.state[bi], any = null;
    s.items.forEach(function (x, i) {
      if (x.done || norm(x.value) === '') return;
      var ok = isRight(b, b.items[i], x);
      mark(S, bi, i, x, ok);
      any = any === false ? false : ok;
    });
    rerender(S, bi);
    after(S, bi, any);
  }
  function onShow(S, bi, i) {
    var b = S.blocks[bi], s = S.state[bi], x = s.items[i];
    if (b.kind === 'bank' || b.kind === 'label') {
      var free = s.bank.map(function (w, k) { return k; }).filter(function (k) { return norm(s.bank[k]) === norm(b.items[i].a) && !s.items.some(function (y) { return y.picked === k; }); });
      x.picked = free.length ? free[0] : i;
      s.sel = nextGap(s, i);
    }
    x.done = true; x.shown = true; x.first = false; x.flash = false;
    rerender(S, bi);
    after(S, bi, null);
  }
  function onPlace(S, bi, i, w, add, at) {
    var b = S.blocks[bi], x = S.state[bi].items[i];
    if (S.result || x.done) return;
    x.placed = x.placed.filter(function (v) { return v !== w; });
    if (add) { if (at == null || at > x.placed.length) at = x.placed.length; x.placed.splice(at, 0, w); }
    x.flash = false;
    var ok = null;
    if (!S.test && x.placed.length === x.words.length) { ok = isRight(b, b.items[i], x); mark(S, bi, i, x, ok); }
    rerender(S, bi);
    if (S.test) after(S, bi); else if (ok !== null) after(S, bi, ok);
  }
  function onSpot(S, bi, i, ti) {
    var x = S.state[bi].items[i], tok = x.tokens[ti];
    if (S.result || x.done) return;
    if (S.test) { if (x.sel[ti]) delete x.sel[ti]; else x.sel[ti] = true; rerender(S, bi); after(S, bi); return; }
    var ok;
    if (tok.target > -1) {
      x.found[tok.target] = true; x.sel[ti] = true; x.bad = null; ok = true;
      if (Object.keys(x.found).length === x.targets) { x.done = true; x.flash = false; if (x.first === null) { x.first = true; S.onItem({ bi: bi, i: i, ok: true, kind: 'spot' }); } }
    } else { x.bad = ti; if (x.first === null) S.onItem({ bi: bi, i: i, ok: false, kind: 'spot' }); x.first = false; x.tries++; x.flash = true; ok = false; }
    rerender(S, bi);
    after(S, bi, ok);
  }
  function onToggle(S, bi, i, k) {
    var it = S.blocks[bi].items[i], x = S.state[bi].items[i];
    if (S.result || x.done) return;
    if (S.test) { if (x.sel[k]) delete x.sel[k]; else x.sel[k] = true; rerender(S, bi); after(S, bi); return; }
    var ok;
    if (it.a.indexOf(k) > -1) {
      x.sel[k] = true; x.bad = null; ok = true; x.flash = false;
      if (it.a.every(function (r) { return x.sel[r]; })) { x.done = true; if (x.first === null) { x.first = true; S.onItem({ bi: bi, i: i, ok: true, kind: 'colloc' }); } }
    } else { x.bad = k; if (x.first === null) S.onItem({ bi: bi, i: i, ok: false, kind: 'colloc' }); x.first = false; x.tries++; x.flash = true; ok = false; }
    rerender(S, bi);
    after(S, bi, ok);
  }
  function onFixTap(S, bi, i, ti) {
    var x = S.state[bi].items[i];
    if (S.result || x.done) return;
    if (S.test) { x.hit = x.hit === ti ? null : ti; rerender(S, bi); after(S, bi); focusInput(S, bi, i); return; }
    if (x.tokens[ti].target > -1) { x.hit = ti; x.bad = null; x.flash = false; rerender(S, bi); focusInput(S, bi, i); after(S, bi, true); }
    else { x.bad = ti; if (x.first === null) S.onItem({ bi: bi, i: i, ok: false, kind: 'fix' }); x.first = false; x.tries++; x.flash = true; rerender(S, bi); after(S, bi, false); }
  }
  function onFixOk(S, bi, i) {
    var b = S.blocks[bi], x = S.state[bi].items[i];
    if (S.test || x.done || norm(x.value) === '') return;
    var ok = isRight(b, b.items[i], x);
    mark(S, bi, i, x, ok);
    rerender(S, bi);
    after(S, bi, ok);
  }
  function focusInput(S, bi, i) {
    var el = S.root().querySelector('[data-block="' + bi + '"] input[data-i="' + i + '"]');
    if (el) el.focus({ preventScroll: true });
  }
  function onMatch(S, bi, side, v) {
    var b = S.blocks[bi], s = S.state[bi];
    if (S.result) return;
    s.flash = null;
    if (side === 'l') {
      if (S.test && s.pairs[v] != null && s.sel !== v) delete s.pairs[v];
      s.sel = s.sel === v ? null : v;
      rerender(S, bi);
      if (S.test) after(S, bi);
      return;
    }
    if (s.sel == null) return;
    var l = s.sel;
    if (S.test) {
      Object.keys(s.pairs).forEach(function (k) { if (s.pairs[k] === v) delete s.pairs[k]; });
      s.pairs[l] = v; s.sel = null;
      rerender(S, bi); after(S, bi);
      return;
    }
    var ok = matchRight(b, l, v) && !s.gotR[v];
    if (!s.got[l] && !s.err[l]) S.onItem({ bi: bi, i: l, ok: ok, kind: 'match' });
    if (ok) { s.got[l] = true; s.gotR[v] = true; s.link[l] = v; s.sel = null; }
    else { s.err[l] = true; s.flash = { l: l, r: v }; s.sel = null; }
    rerender(S, bi);
    after(S, bi, ok);
  }
  function nextGap(s, from) {
    for (var k = 1; k <= s.items.length; k++) { var j = (from + k) % s.items.length; if (!s.items[j].done && s.items[j].picked == null) return j; }
    for (k = 1; k <= s.items.length; k++) { j = (from + k) % s.items.length; if (!s.items[j].done) return j; }
    return null;
  }
  function onGapSel(S, bi, i) {
    var s = S.state[bi];
    if (S.result || s.items[i].done) return;
    if (S.test && s.sel === i && s.items[i].picked != null) s.items[i].picked = null;
    s.sel = i; s.bad = null;
    rerender(S, bi);
    if (S.test) after(S, bi);
  }
  function onBank(S, bi, w) {
    var b = S.blocks[bi], s = S.state[bi];
    if (S.result) return;
    var i = s.sel != null && !s.items[s.sel].done ? s.sel : nextGap(s, -1);
    if (i == null) return;
    var x = s.items[i];
    s.bad = null;
    if (S.test) {
      s.items.forEach(function (y) { if (y.picked === w) y.picked = null; });
      x.picked = w; s.sel = nextGap(s, i);
      rerender(S, bi); after(S, bi);
      return;
    }
    var ok = norm(s.bank[w]) === norm(b.items[i].a);
    s.last = i;
    if (ok) { x.picked = w; mark(S, bi, i, x, true); s.sel = nextGap(s, i); }
    else { mark(S, bi, i, x, false); s.bad = w; }
    rerender(S, bi);
    after(S, bi, ok);
  }
  function onSortPick(S, bi, i) {
    var s = S.state[bi];
    if (S.result || s.items[i].done) return;
    if (S.test && s.items[i].picked != null) { s.items[i].picked = null; s.sel = i; rerender(S, bi); after(S, bi); return; }
    s.sel = s.sel === i ? null : i;
    s.items.forEach(function (y) { y.flash = false; });
    rerender(S, bi);
  }
  function onSortDrop(S, bi, g) {
    var b = S.blocks[bi], s = S.state[bi], i = s.sel;
    if (S.result || i == null) return;
    var x = s.items[i];
    if (S.test) { x.picked = g; s.sel = null; rerender(S, bi); after(S, bi); return; }
    var ok = b.items[i].g === g;
    s.last = i;
    if (ok) { x.picked = g; mark(S, bi, i, x, true); s.sel = null; }
    else {
      mark(S, bi, i, x, false);
      s.sel = null;
      /* After a second wrong try the word goes to its group, with the explanation */
      if (x.tries >= 2) { x.picked = b.items[i].g; x.done = true; x.shown = true; x.flash = false; s.sel = null; }
    }
    rerender(S, bi);
    after(S, bi, ok);
  }
  function onFlip(S, bi, c) {
    var b = S.blocks[bi], s = S.state[bi];
    if (s.busy || s.got[c >> 1] || s.open.indexOf(c) > -1) return;
    s.open.push(c);
    if (s.open.length < 2) { rerender(S, bi); return; }
    var p = s.open[0], ok = (p >> 1) === (c >> 1);
    if (ok) { s.got[c >> 1] = true; s.open = []; rerender(S, bi); S.onItem({ bi: bi, i: c >> 1, ok: true, kind: 'memory' }); after(S, bi, true); return; }
    s.miss[p >> 1] = true; s.miss[c >> 1] = true;
    s.busy = true;
    rerender(S, bi);
    setTimeout(function () { s.open = []; s.busy = false; rerender(S, bi); }, reduced ? 500 : 950);
    after(S, bi, false);
  }
  function onCell(S, bi, x, y) {
    var b = S.blocks[bi], s = S.state[bi];
    s.flash = false;
    if (!s.start) { s.start = [x, y]; rerender(S, bi); return; }
    var a = s.start; s.start = null;
    var hit = -1;
    b.grid.at.forEach(function (p, w) {
      if (s.found[w]) return;
      if ((p[0] === a[0] && p[1] === a[1] && p[2] === x && p[3] === y) || (p[2] === a[0] && p[3] === a[1] && p[0] === x && p[1] === y)) hit = w;
    });
    if (a[0] === x && a[1] === y) { rerender(S, bi); return; }
    if (hit > -1) { s.found[hit] = true; rerender(S, bi); after(S, bi, true); }
    else { s.flash = true; s.misses++; rerender(S, bi); after(S, bi, false); }
  }

  function submit(S) {
    var right = 0, total = 0;
    S.blocks.forEach(function (b, i) {
      if (b.t !== 'ex' || !K[b.kind]) return;
      var s = S.state[i], k = K[b.kind];
      if (k.block) { var f = k.tally(b, s); right += f.right; total += f.total; s.sel = null; }
      else b.items.forEach(function (it, n) { total++; if (isRight(b, it, s.items[n])) right++; });
    });
    var score = total ? Math.round(right / total * 100) : 0;
    S.result = { score: score };
    S.blocks.forEach(function (b, i) { if (b.t === 'ex') rerender(S, i); });
    return score;
  }

  /* ---------- Events (the host forwards them) ---------- */
  /* The tutor says the sentence, the mouth following the sound */
  function speakHear(S, el) {
    var again = playingBtn === el;
    stopAudio();
    if (again) return;
    player = player || new Audio();
    player.crossOrigin = 'anonymous';
    player.src = el.getAttribute('data-src');
    player.playbackRate = 1;
    playingBtn = el; el.classList.add('is-playing');
    var face = el.closest('.ex').querySelector('.speak-tutor, .talk-tutor');
    var unfollow = face && window.AlimunLipsync ? window.AlimunLipsync.follow(player, face) : function () {};
    player.onended = function () { el.classList.remove('is-playing'); if (playingBtn === el) playingBtn = null; unfollow(); };
    player.play().catch(function () { stopAudio(); unfollow(); });
  }
  function onRec(S, bi, i) {
    var x = S.state[bi].items[i];
    if (rec && rec.S === S && rec.bi === bi && rec.i === i) { stopRec(); return; }
    stopRec(); stopAudio();
    if (!S.transcribe) { x.note = 'app_ex_speak_error'; rerender(S, bi); return; }
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !window.MediaRecorder) { x.note = 'app_ex_speak_mic'; rerender(S, bi); return; }
    navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
      var mime = recMime(), mr = mime ? new MediaRecorder(stream, { mimeType: mime }) : new MediaRecorder(stream);
      var r = rec = { S: S, bi: bi, i: i, mr: mr, stream: stream, chunks: [] };
      mr.ondataavailable = function (e) { if (e.data && e.data.size) r.chunks.push(e.data); };
      mr.onstop = function () {
        stream.getTracks().forEach(function (tr) { tr.stop(); });
        if (rec === r) rec = null;
        var blob = new Blob(r.chunks, { type: (mr.mimeType || mime || 'audio/webm').split(';')[0] });
        x.state = 'wait'; x.note = ''; rerender(S, bi);
        S.transcribe(blob).then(function (text) {
          x.state = ''; x.heard = text || '…';
          var ok = spokenRight(S.blocks[bi].items[i].a, x.heard);
          x.note = ok ? '' : 'app_ex_speak_try';
          mark(S, bi, i, x, ok);
          rerender(S, bi); after(S, bi, ok);
        }, function (e) {
          x.state = ''; x.note = (e && e.note) || 'app_ex_speak_error'; rerender(S, bi);
        });
      };
      mr.start();
      r.timer = setTimeout(stopRec, 15000);
      x.note = ''; rerender(S, bi);
    }, function () { x.note = 'app_ex_speak_mic'; rerender(S, bi); });
  }

  /* A speaking task in a test: record up to `secs` seconds (at most 120), then keep the transcript */
  function onTalk(S, bi, i) {
    var x = S.state[bi].items[i], it = S.blocks[bi].items[i];
    if (S.result) return;
    if (rec && rec.S === S && rec.bi === bi && rec.i === i) { stopRec(); return; }
    stopRec(); stopAudio();
    if (!S.transcribe) { x.note = 'app_ex_speak_error'; rerender(S, bi); return; }
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !window.MediaRecorder) { x.note = 'app_ex_speak_mic'; rerender(S, bi); return; }
    navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
      var mime = recMime(), mr = mime ? new MediaRecorder(stream, { mimeType: mime, audioBitsPerSecond: 32000 }) : new MediaRecorder(stream);
      var limit = Math.min(240, it.secs || 60), t0 = Date.now();
      var r = rec = { S: S, bi: bi, i: i, mr: mr, stream: stream, chunks: [] };
      mr.ondataavailable = function (e) { if (e.data && e.data.size) r.chunks.push(e.data); };
      mr.onstop = function () {
        clearInterval(r.tick);
        stream.getTracks().forEach(function (tr) { tr.stop(); });
        if (rec === r) rec = null;
        var blob = new Blob(r.chunks, { type: (mr.mimeType || mime || 'audio/webm').split(';')[0] });
        x.state = 'wait'; x.note = ''; rerender(S, bi);
        S.transcribe(blob).then(function (text) {
          x.state = ''; x.heard = String(text || '').trim() || '…';
          rerender(S, bi); after(S, bi);
        }, function (e) { x.state = ''; x.note = (e && e.note) || 'app_ex_speak_error'; rerender(S, bi); });
      };
      mr.start();
      r.timer = setTimeout(stopRec, limit * 1000);
      r.tick = setInterval(function () {
        var el = S.root().querySelector('[data-rt="' + bi + '-' + i + '"]');
        if (el) el.textContent = t(S, 'app_mt_secs_left', { n: Math.max(0, limit - Math.round((Date.now() - t0) / 1000)) });
      }, 500);
      x.note = ''; rerender(S, bi);
    }, function () { x.note = 'app_ex_speak_mic'; rerender(S, bi); });
  }

  function onAct(S, act, el) {
    if (act === 'hear') { hear(el); return true; }
    if (act === 'speakhear') { speakHear(S, el); return true; }
    var bi = +el.getAttribute('data-b'), i = +el.getAttribute('data-i');
    if (isNaN(bi) || !S.blocks[bi]) return false;
    switch (act) {
      case 'pick': { var o = el.getAttribute('data-o'); onPick(S, bi, i, /^\d+$/.test(o) ? +o : o); return true; }
      case 'check': onCheck(S, bi); return true;
      case 'show': onShow(S, bi, i); return true;
      case 'place': onPlace(S, bi, i, +el.getAttribute('data-w'), true); return true;
      case 'unplace': onPlace(S, bi, i, +el.getAttribute('data-w'), false); return true;
      case 'reset': { var x = S.state[bi].items[i]; x.placed = []; x.flash = false; rerender(S, bi); return true; }
      case 'spot': onSpot(S, bi, i, +el.getAttribute('data-t')); return true;
      case 'toggle': onToggle(S, bi, i, +el.getAttribute('data-o')); return true;
      case 'fixtap': onFixTap(S, bi, i, +el.getAttribute('data-t')); return true;
      case 'fixok': onFixOk(S, bi, i); return true;
      case 'rec': onRec(S, bi, i); return true;
      case 'talkrec': onTalk(S, bi, i); return true;
      case 'wrpick': S.state[bi].pick = i; rerender(S, bi); after(S, bi); { var ta = S.root().querySelector('[data-block="' + bi + '"] .write-in'); if (ta) ta.focus({ preventScroll: true }); } return true;
      case 'mleft': onMatch(S, bi, 'l', +el.getAttribute('data-l')); return true;
      case 'mright': onMatch(S, bi, 'r', +el.getAttribute('data-r')); return true;
      case 'gapsel': onGapSel(S, bi, i); return true;
      case 'bankpick': onBank(S, bi, +el.getAttribute('data-w')); return true;
      case 'sortpick': onSortPick(S, bi, i); return true;
      case 'sortdrop': onSortDrop(S, bi, +el.getAttribute('data-g')); return true;
      case 'flip': onFlip(S, bi, +el.getAttribute('data-c')); return true;
      case 'scell': onCell(S, bi, +el.getAttribute('data-x'), +el.getAttribute('data-y')); return true;
      default: return false;
    }
  }
  function onInput(S, el) {
    if (el.classList.contains('write-in')) {
      var wb = +el.getAttribute('data-b'), wi = +el.getAttribute('data-i'), wx = S.state[wb] && S.state[wb].items[wi];
      if (!wx) return false;
      wx.value = el.value;
      var it = S.blocks[wb].items[wi], n = wordCount(el.value), c = S.root().querySelector('[data-wc="' + wb + '-' + wi + '"]');
      if (c) { c.textContent = t(S, 'app_mt_words', { n: n, min: it.min, max: it.max }); c.classList.toggle('is-off', !!n && (n < it.min || n > it.max)); }
      S.onChange();
      return true;
    }
    if (!el.classList.contains('gap-in')) return false;
    var bi = +el.getAttribute('data-b'), s = S.state[bi];
    if (!s) return false;
    var x = s.items[+el.getAttribute('data-i')];
    x.value = el.value;
    if (x.flash) { x.flash = false; var item = el.closest('.ex-item'); if (item) { item.classList.remove('is-wrong'); item.querySelector('.fb-slot').innerHTML = ''; } }
    if (S.blocks[bi].kind === 'crossword') crossLive(S, bi);
    if (S.test) S.onChange();
    return true;
  }
  function onChange(S, el) {
    if (!el.classList.contains('gap-sel') || el.value === '') return false;
    onPick(S, +el.getAttribute('data-b'), +el.getAttribute('data-i'), +el.value);
    return true;
  }
  function onKey(S, e) {
    var el = e.target;
    if (e.key !== 'Enter' || !el.classList || !el.classList.contains('gap-in')) return false;
    e.preventDefault();
    if (S.test) return true;
    var bi = +el.getAttribute('data-b');
    if (S.blocks[bi].kind === 'fix') onFixOk(S, bi, +el.getAttribute('data-i'));
    else onCheck(S, bi);
    return true;
  }

  /* Dragging: word tiles into a sentence line, bank words into a gap, words into a group. Tapping works too. */
  var drag = null, suppress = false;
  function pointerDown(S, e) {
    var tile = e.target.closest('.ex--order .tile[data-w], .ex--build .tile[data-w], [data-drag]');
    if (!tile || tile.disabled || e.button > 0) return;
    drag = { S: S, tile: tile, x: e.clientX, y: e.clientY, moved: false, ghost: null, id: e.pointerId };
  }
  function overEl(el, e, pad) {
    var r = el.getBoundingClientRect();
    return e.clientX > r.left - pad && e.clientX < r.right + pad && e.clientY > r.top - pad && e.clientY < r.bottom + pad;
  }
  function dropTarget(e) {
    var list = drag.tile.closest('.ex').querySelectorAll('[data-drop]:not([disabled])');
    for (var k = 0; k < list.length; k++) if (overEl(list[k], e, 6)) return list[k];
    return null;
  }
  function pointerMove(e) {
    if (!drag || e.pointerId !== drag.id) return;
    var dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    if (!drag.moved) {
      if (Math.abs(dx) + Math.abs(dy) < 8) return;
      drag.moved = true;
      var r = drag.tile.getBoundingClientRect();
      var g = drag.tile.cloneNode(true);
      g.className = 'tile tile--ghost';
      g.style.width = r.width + 'px'; g.style.left = r.left + 'px'; g.style.top = r.top + 'px';
      document.body.appendChild(g);
      drag.ghost = g;
      drag.tile.classList.add('is-dragging');
    }
    e.preventDefault();
    drag.ghost.style.transform = 'translate(' + dx + 'px,' + dy + 'px) rotate(-3deg)';
    if (drag.tile.hasAttribute('data-drag')) {
      var t0 = dropTarget(e);
      drag.tile.closest('.ex').querySelectorAll('[data-drop]').forEach(function (d) { d.classList.toggle('is-over', d === t0); });
      return;
    }
    var line = drag.tile.closest('.ex-item').querySelector('[data-line]');
    line.classList.toggle('is-over', overEl(line, e, 20));
  }
  function pointerUp(e) {
    if (!drag || e.pointerId !== drag.id) return;
    var d = drag; drag = null;
    if (!d.moved) return;
    suppress = true; setTimeout(function () { suppress = false; }, 0);
    d.ghost.remove();
    d.tile.classList.remove('is-dragging');
    var S = d.S;
    if (d.tile.hasAttribute('data-drag')) {
      var target = dropTarget(e);
      d.tile.closest('.ex').querySelectorAll('[data-drop]').forEach(function (x) { x.classList.remove('is-over'); });
      if (!target) return;
      var bi = +d.tile.getAttribute('data-b');
      if (d.tile.getAttribute('data-act') === 'bankpick') { S.state[bi].sel = +target.getAttribute('data-i'); onBank(S, bi, +d.tile.getAttribute('data-w')); }
      else { S.state[bi].sel = +d.tile.getAttribute('data-i'); onSortDrop(S, bi, +target.getAttribute('data-g')); }
      return;
    }
    var item = d.tile.closest('.ex-item'), line = item.querySelector('[data-line]');
    line.classList.remove('is-over');
    var b = +d.tile.getAttribute('data-b'), i = +d.tile.getAttribute('data-i'), w = +d.tile.getAttribute('data-w');
    if (overEl(line, e, 20)) {
      var at = 0;
      line.querySelectorAll('.tile').forEach(function (n) {
        if (+n.getAttribute('data-w') === w) return;
        var q = n.getBoundingClientRect();
        if (e.clientY > q.bottom || (e.clientY > q.top && e.clientX > q.left + q.width / 2)) at++;
      });
      onPlace(S, b, i, w, true, at);
    } else if (d.tile.closest('[data-line]')) onPlace(S, b, i, w, false);
  }
  window.addEventListener('pointermove', pointerMove, { passive: false });
  window.addEventListener('pointerup', pointerUp);
  window.addEventListener('pointercancel', function () { if (drag && drag.ghost) { drag.ghost.remove(); drag.tile.classList.remove('is-dragging'); } drag = null; });

  window.AlimunEx = {
    create: create, md: md, esc: esc, shuffle: shuffle, norm: norm, seeded: seeded,
    kinds: Object.keys(K), lessonOnly: LESSON_ONLY, manual: { write: true, talk: true }, wordCount: wordCount, stopAudio: function () { stopAudio(); stopRec(); }, spokenRight: spokenRight,
    pointerDown: pointerDown,
    /* True right after a drag ended, so the click it fires is ignored */
    swallowClick: function () { return suppress; }
  };
})();
