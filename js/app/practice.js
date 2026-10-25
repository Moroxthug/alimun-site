/* Alimun app: the Practice screen (docs/DASHBOARD_PLAN.md, step 5).
   Short rounds built from the student's course book: exercises from the units they have reached, mixed and turned into
   other kinds of exercise (a gap exercise can come back as a word bank, matching as memory cards or a crossword, word
   order with extra words), so the same item rarely looks the same twice. Answers the student got wrong, in lessons,
   tests or rounds, come back first and then at growing intervals; items not seen yet come next.
   Item memory: practice_items for a signed-in student (merged with this browser's copy on the first visit, then
   written on every answer); this browser only ("alimun-practice") otherwise, or while the table is not there. A finished round is saved as practice_progress "practice:round:<date>" for a signed-in student (it counts
   for the streak). "Every kind of exercise" plays a hand-written set (/data/practice/<set>.<lang>.json).
   Listening: when the book's recordings exist (/data/audio, js/app/reader.js), "listen and choose", "listen and fill
   the gap" and dictation are made from its example sentences and dialogue lines: one in each quick round and a
   whole Listening round (#/practice/listen).
   Speaking (#/practice/speak): the student's tutor (one of the six, kept in this browser) says sentences from the
   book, with the mouth following the recording when there is one; the student records each sentence and
   /api/ai?action=transcribe (Groq Whisper) turns it into text, compared word by word.
   Quizzes (step 7): a unit quiz (12 questions) or a mixed quiz (15, every unit reached), checked at the end with the
   engine's test mode; Beat the clock (90 seconds of quick multiple-choice and true-or-false questions); a long
   practice set per unit (12 exercises). Best scores: practice_progress "quiz:<book>:<unit|mixed|clock>".
   Routes: #/practice, #/practice/round, #/practice/listen, #/practice/speak, #/practice/types,
   #/practice/quiz/<unit|mixed>, #/practice/set/<unit>, #/practice/clock. Interface text: app_pr_* and app_ex_* keys. */
(function () {
  'use strict';
  var A = null, root = null, R = null;
  var MEM = 'alimun-practice';
  var DAY = 86400000;
  var BOXES = [0, 1, 3, 7, 21, 60];  /* days before an item comes back, by how many times in a row it was right */
  var ROUND = 6;
  var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var EX = function () { return window.AlimunEx; };

  function t(k, v) { return A.t(k, v); }
  function esc(s) { return A.esc(s); }

  /* ---------- Item memory ---------- */
  /* Signed in: one browser copy per student, kept in step with practice_items */
  var who = null, synced = null, dbOff = false;
  function memKey() { return who ? MEM + ':' + who : MEM; }
  function readMem() { try { return JSON.parse(localStorage.getItem(memKey()) || '{}') || {}; } catch (e) { return {}; } }
  function writeMem(m) { try { localStorage.setItem(memKey(), JSON.stringify(m)); } catch (e) { /* storage blocked */ } }
  /* Called by the book reader and Practice with the shell helpers: who is answering, and their saved items */
  function use(helpers) {
    var id = helpers.mode() === 'real' && helpers.data().profile.id;
    if (!id) { who = null; return Promise.resolve(); }
    if (who === id && synced) return synced;
    who = id;
    synced = window.AlimunData.practiceItems(id).then(function (list) {
      var m = readMem();
      list.forEach(function (x) {
        var at = Date.parse(x.last_at), mine = m[x.item_key];
        if (!mine || mine.at < at) m[x.item_key] = { b: x.box, n: x.seen, w: x.wrong, at: at };
      });
      writeMem(m);
    }, function (e) { dbOff = true; console.warn('[Alimun] Practice items not loaded', e && e.message); });
    return synced;
  }
  /* One answer to one item (first try): right moves it up a box, wrong sends it back to the first */
  function record(key, ok) {
    if (!key) return;
    var m = readMem(), r = m[key] || { b: 0, n: 0, w: 0 };
    r.n++; r.at = Date.now();
    /* Right the first time it is seen: back in a week; right again after a mistake: one box up */
    if (ok) r.b = r.n > 1 || r.w ? Math.min(BOXES.length - 1, r.b + 1) : 3;
    else { r.b = 0; r.w++; }
    m[key] = r;
    writeMem(m);
    if (who && !dbOff) {
      window.AlimunData.savePracticeItem(who, key, r).catch(function (e) { dbOff = true; console.warn('[Alimun] Practice item not saved', e && e.message); });
    }
  }
  function due(r, now) { return !r || r.at + BOXES[r.b] * DAY <= now; }
  /* Answers got wrong and due again */
  function mistakesDue() {
    var m = readMem(), now = Date.now(), n = 0;
    Object.keys(m).forEach(function (k) { var r = m[k]; if (r.w && r.b < 2 && due(r, now)) n++; });
    return n;
  }

  /* ---------- Building a round ---------- */
  var COMMON = /^(a|an|the|to|der|die|das|den|dem|des|ein|eine|einen|einem|einer|le|la|les|un|une|el|los|las|il|lo|gli|o|os|as|um|uma)$/i;
  function oneWord(s) { return /^[\p{L}][\p{L}'’\-]{2,11}$/u.test(String(s).trim()); }
  function shortOpt(s) { return String(s).trim().split(/\s+/).length <= 3 && String(s).length <= 24; }
  function bare(w) { return String(w).replace(/^[„“"'(¿¡]+|[.,!?;:“”"')]+$/g, ''); }

  /* Every exercise in the units reached, with a key for each item */
  /* The written units the student has reached (at least the first two) */
  function reached(book, progress) {
    var units = book.units.filter(function (u) { return !u.planned; });
    var reach = 0;
    units.forEach(function (u, i) {
      var any = u.pages.some(function (p) { var r = progress['book:' + book.id + ':' + u.id + ':' + p.id]; return r && r.done; });
      if (any) reach = i;
    });
    return units.slice(0, Math.max(reach + 1, 2));
  }
  function sources(book, progress) {
    var out = [];
    reached(book, progress).forEach(function (u) {
      u.pages.forEach(function (p) {
        var gi = 0;
        p.spreads.forEach(function (sp) {
          sp.forEach(function (b) { if (b.t === 'ex') out.push({ b: b, key: book.id + ':' + u.id + ':' + p.id + ':' + gi, unit: u.id }); gi++; });
        });
      });
      (u.test || []).forEach(function (b, gi) { if (b.t === 'ex') out.push({ b: b, key: book.id + ':' + u.id + ':test:' + gi, unit: u.id }); });
    });
    return out;
  }
  function itemCount(b) { return b.pairs ? b.pairs.length : b.items ? b.items.length : 0; }
  /* How much a block is worth practising now: mistakes due count most, then items never seen */
  function weigh(src, mem, now) {
    var w = 0, n = itemCount(src.b);
    for (var i = 0; i < n; i++) {
      var r = mem[src.key + ':' + i];
      if (!r) w += 1;
      else if (r.w && r.b < 2 && due(r, now)) w += 4;
      else if (due(r, now)) w += 0.6;
    }
    return w / Math.max(1, Math.sqrt(n)) + Math.random() * 0.8;
  }
  /* The items to use from a block: the most useful first, up to max */
  function pickItems(src, mem, now, max) {
    var n = itemCount(src.b), idx = [];
    for (var i = 0; i < n; i++) idx.push(i);
    var score = function (i) { var r = mem[src.key + ':' + i]; return (!r ? 2 : r.w && r.b < 2 && due(r, now) ? 5 : due(r, now) ? 1 : 0) + Math.random(); };
    idx.sort(function (a, b) { return score(b) - score(a); });
    return idx.slice(0, max).sort(function (a, b) { return a - b; });
  }
  /* The kinds a block can come back as, with the block for each */
  function remixes(src, pool, mem, now) {
    var b = src.b, out = [];
    if (b.kind === 'match') {
      var ps = pickItems(src, mem, now, 6);
      var pairs = ps.map(function (i) { return b.pairs[i]; });
      out.push({ kind: 'match', b: { t: 'ex', kind: 'match', h: b.h, pairs: pairs }, map: ps });
      if (pairs.length >= 3) out.push({ kind: 'memory', b: { t: 'ex', kind: 'memory', h: b.h, pairs: pairs }, map: ps, w: 1.3 });
      var cw = ps.filter(function (i) { return oneWord(b.pairs[i][0]) && !COMMON.test(b.pairs[i][0]); });
      if (cw.length >= 4) {
        cw = cw.slice(0, 6);
        out.push({ kind: 'crossword', b: { t: 'ex', kind: 'crossword', h: t('app_ex_h_crossword'), words: cw.map(function (i) { return { a: b.pairs[i][0], clue: b.pairs[i][1] }; }) }, map: cw, w: 1.4 });
        out.push({ kind: 'search', b: { t: 'ex', kind: 'search', h: t('app_ex_h_search'), words: cw.map(function (i) { return b.pairs[i][0]; }) }, map: [], w: 0.5 });
      }
      return out;
    }
    var ids = pickItems(src, mem, now, b.kind === 'order' ? 2 : 4);
    var items = ids.map(function (i) { return b.items[i]; });
    out.push({ kind: b.kind, b: Object.assign({}, b, { items: items }), map: ids });
    if (b.kind === 'choice' && items.every(function (it) { return it.q && it.q.indexOf('___') > -1 && it.o.every(shortOpt); })) {
      out.push({ kind: 'select', b: { t: 'ex', kind: 'select', h: b.h, items: items }, map: ids, w: 1.2 });
    }
    if (b.kind === 'gap' && items.length >= 3) {
      var words = items.map(function (it) { return it.a[0]; });
      var distinct = words.filter(function (w, k) { return words.findIndex(function (v) { return EX().norm(v) === EX().norm(w); }) === k; }).length === words.length;
      if (words.every(oneWord) && distinct) {
        var others = [];
        pool.forEach(function (p) {
          if (p.b.kind !== 'gap' || p.unit !== src.unit || p === src) return;
          p.b.items.forEach(function (it) { var w = it.a[0]; if (oneWord(w) && others.indexOf(w) === -1 && !words.some(function (v) { return EX().norm(v) === EX().norm(w); })) others.push(w); });
        });
        var extra = others.sort(function () { return Math.random() - 0.5; }).slice(0, 2);
        out.push({ kind: 'bank', b: { t: 'ex', kind: 'bank', h: b.h, extra: extra, items: items.map(function (it) { return { q: it.q, a: it.a[0], why: it.why }; }) }, map: ids, w: 1.5 });
      }
    }
    if (b.kind === 'order') {
      var mine = [];
      items.forEach(function (it) { it.a.split(/\s+/).forEach(function (w) { mine.push(EX().norm(bare(w))); }); });
      var spare = [];
      pool.forEach(function (p) {
        if (p.b.kind !== 'order' || p === src) return;
        p.b.items.forEach(function (it) {
          var ws = it.a.split(/\s+/);
          ws.slice(1, -1).forEach(function (w) { w = bare(w); if (w.length > 1 && mine.indexOf(EX().norm(w)) === -1 && spare.indexOf(w) === -1) spare.push(w); });
        });
      });
      if (spare.length >= 2) {
        out.push({ kind: 'build', b: { t: 'ex', kind: 'build', h: b.h, items: items.map(function (it) {
          return { a: it.a, why: it.why, extra: spare.sort(function () { return Math.random() - 0.5; }).slice(0, 2) };
        }) }, map: ids, w: 1.3 });
      }
    }
    return out;
  }
  /* ---------- Listening: exercises made from the book's recordings (examples and dialogue lines) ---------- */
  function wordsOf(t) { return String(t).split(/\s+/); }
  function bareWord(w) { return w.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, ''); }
  function heard(book, progress, aud) {
    if (!aud) return [];
    var units = {}, out = [];
    reached(book, progress).forEach(function (u) { units[u.id] = true; });
    Object.keys(aud.items).forEach(function (k) {
      var it = aud.items[k], n = wordsOf(it[3]).length;
      if (!units[k.split(':')[0]] || !aud.done[it[0]] || n < 3 || n > 14 || it[3].length > 110) return;
      out.push({ key: 'listen:' + book.id + ':' + k, text: it[3], src: aud.url(it[0]), voice: it[1] });
    });
    return out;
  }
  function pickHeard(list, n, mem, now, test) {
    var score = function (x) { var r = mem[x.key]; return (!r ? 2 : r.w && r.b < 2 && due(r, now) ? 5 : due(r, now) ? 1 : 0) + Math.random() * 1.5; };
    return list.filter(test || function () { return true; }).map(function (x) { return { x: x, s: score(x) }; })
      .sort(function (a, b) { return b.s - a.s; }).slice(0, n).map(function (y) { return y.x; });
  }
  /* A sentence with one word changed for a similar word from the book: same first letter or a close length */
  function nearMiss(text, pool, avoid) {
    var ws = wordsOf(text), idx = [];
    ws.forEach(function (w, i) { if (i && bareWord(w).length >= 3) idx.push(i); });
    for (var tries = 0; tries < 12 && idx.length; tries++) {
      var i = idx[Math.floor(Math.random() * idx.length)], core = bareWord(ws[i]);
      var cands = pool.filter(function (p) { return p.toLowerCase() !== core.toLowerCase() && (p[0].toLowerCase() === core[0].toLowerCase() || Math.abs(p.length - core.length) <= 1); });
      if (!cands.length) continue;
      var pick = cands[Math.floor(Math.random() * cands.length)];
      if (core[0] === core[0].toUpperCase() && core[0] !== core[0].toLowerCase()) pick = pick[0].toUpperCase() + pick.slice(1);
      var copy = ws.slice(); copy[i] = ws[i].replace(core, pick);
      var out = copy.join(' ');
      if (avoid.indexOf(out) === -1) return out;
    }
    return null;
  }
  function listenBlock(kind, list, mem, now) {
    if (kind === 'dictation') {
      var d = pickHeard(list, 2, mem, now, function (x) { return wordsOf(x.text).length <= 10; });
      return d.length === 2 ? { b: { t: 'ex', kind: 'dictation', h: t('app_ex_h_dictation'), items: d.map(function (x) { return { src: x.src, a: [x.text], why: '' }; }) }, keys: d.map(function (x) { return x.key; }) } : null;
    }
    if (kind === 'heargap') {
      var g = pickHeard(list, 3, mem, now), items = [];
      g.forEach(function (x) {
        var ws = wordsOf(x.text), best = -1;
        ws.forEach(function (w, i) { if (i && bareWord(w).length >= 4 && (best < 0 || bareWord(w).length + Math.random() * 3 > bareWord(ws[best]).length)) best = i; });
        if (best < 0) return;
        var core = bareWord(ws[best]), copy = ws.slice();
        copy[best] = ws[best].replace(core, '___');
        items.push({ x: x, it: { src: x.src, q: copy.join(' '), a: [core], why: '' } });
      });
      return items.length >= 2 ? { b: { t: 'ex', kind: 'heargap', h: t('app_ex_h_heargap'), items: items.map(function (y) { return y.it; }) }, keys: items.map(function (y) { return y.x.key; }) } : null;
    }
    var pool = [];
    list.forEach(function (x) { wordsOf(x.text).forEach(function (w) { w = bareWord(w); if (w.length >= 3 && pool.indexOf(w) === -1) pool.push(w); }); });
    var c = pickHeard(list, 3, mem, now), its = [];
    c.forEach(function (x) {
      var o = [x.text], a = nearMiss(x.text, pool, o); if (a) o.push(a);
      var b = nearMiss(x.text, pool, o); if (b) o.push(b);
      if (o.length === 3) its.push({ x: x, it: { src: x.src, o: o, why: '' } });
    });
    return its.length >= 2 ? { b: { t: 'ex', kind: 'hear', h: t('app_ex_h_hear'), items: its.map(function (y) { return y.it; }) }, keys: its.map(function (y) { return y.x.key; }) } : null;
  }
  /* ---------- Pictures: the third cast's objects and scenes, with words in the language being learned ---------- */
  function pictureBlock(kind, language, pics, mem, now) {
    if (!pics || !window.AlimunCast.object) return null;
    var objs = Object.keys(pics.objects).filter(function (k) { return pics.objects[k][language]; });
    if (kind === 'picture' && objs.length >= 3) {
      var list = objs.map(function (k) { return { key: 'pic:' + language + ':' + k, k: k }; });
      var chosen = pickHeard(list, 3, mem, now);
      return { b: { t: 'ex', kind: 'picture', h: t('app_ex_h_picture'), items: chosen.map(function (x) {
        var others = shuffleList(objs.filter(function (o) { return o !== x.k; })).slice(0, 2);
        return { pic: x.k, o: [pics.objects[x.k][language]].concat(others.map(function (o) { return pics.objects[o][language]; })), why: '' };
      }) }, keys: chosen.map(function (x) { return x.key; }) };
    }
    var scenes = Object.keys(pics.scenes);
    if (kind === 'label' && scenes.length) {
      var sc = scenes[Math.floor(Math.random() * scenes.length)];
      var spots = pics.scenes[sc].filter(function (p) { return p.w[language]; });
      var words = spots.map(function (p) { return p.w[language]; });
      var extra = [];
      scenes.forEach(function (o) { if (o !== sc) pics.scenes[o].forEach(function (p) { var w = p.w[language]; if (w && words.indexOf(w) === -1 && extra.indexOf(w) === -1) extra.push(w); }); });
      return { b: { t: 'ex', kind: 'label', h: t('app_ex_h_label'), scene: sc, extra: shuffleList(extra).slice(0, 2),
        items: spots.map(function (p) { return { x: p.x, y: p.y, a: p.w[language], why: '' }; }) },
        keys: spots.map(function (p, i) { return 'scene:' + language + ':' + sc + ':' + i; }) };
    }
    return null;
  }
  function shuffleList(a) { return EX().shuffle(a.length).map(function (i) { return a[i]; }); }

  /* ---------- Speaking: the tutor says a sentence (with its recording when there is one), the student says it ---------- */
  var TUTOR = 'alimun-tutor';
  var WOMEN = ['lena', 'mei', 'sofia'], WOMEN_VOICES = ['Sulafat', 'Kore', 'Aoede', 'Leda', 'Vindemiatrix'];
  function myTutor() { try { var x = localStorage.getItem(TUTOR); return window.AlimunCast.tutors && window.AlimunCast.tutors.indexOf(x) > -1 ? x : 'lena'; } catch (e) { return 'lena'; } }
  function setTutor(x) { try { localStorage.setItem(TUTOR, x); } catch (e) { /* storage blocked */ } }
  function speakRound(book, progress, aud) {
    var tutor = myTutor(), woman = WOMEN.indexOf(tutor) > -1, mem = readMem(), now = Date.now();
    /* Sentences in a voice that matches the tutor first, then sentences of the book without a recording */
    var voiced = heard(book, progress, aud).filter(function (x) { return (WOMEN_VOICES.indexOf(x.voice) > -1) === woman && wordsOf(x.text).length <= 12; });
    var list = pickHeard(voiced, 4, mem, now).map(function (x) { return { key: 'speak:' + x.key.slice(7), text: x.text, src: x.src }; });
    if (list.length < 4) {
      var plain = [];
      reached(book, progress).forEach(function (u) {
        u.pages.forEach(function (p) { p.spreads.forEach(function (sp) { sp.forEach(function (b) {
          if (b.t === 'examples') b.items.forEach(function (x) { var tx = String(x.s).replace(/\*\*?/g, '').trim(); var n = wordsOf(tx).length; if (n >= 3 && n <= 12) plain.push({ key: 'speak:' + book.id + ':' + tx.slice(0, 80), text: tx }); });
        }); }); });
      });
      list = list.concat(pickHeard(plain, 4 - list.length, mem, now));
    }
    if (!list.length) return [];
    return [{ b: { t: 'ex', kind: 'speak', h: t('app_ex_h_speak'), tutor: tutor, items: list.map(function (x) { return { src: x.src || '', a: x.text, why: '' }; }) },
      keys: list.map(function (x) { return x.key; }) }];
  }
  function blobBase64(blob) {
    return new Promise(function (ok, no) { var r = new FileReader(); r.onload = function () { ok(String(r.result).split(',')[1] || ''); }; r.onerror = no; r.readAsDataURL(blob); });
  }
  /* The recording to text, through /api/ai?action=transcribe (signed in, same access and caps as the other AI features) */
  function transcriber(language) {
    var code = window.AlimunData.langCode(language) || 'en';
    return function (blob) {
      if (!signedIn()) return Promise.reject({ note: 'app_ex_speak_signin' });
      return Promise.all([window.AlimunData.token(), blobBase64(blob)]).then(function (r) {
        return fetch('/api/ai?action=transcribe', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + r[0] },
          body: JSON.stringify({ audio: r[1], mime: blob.type || 'audio/webm', language: code }) });
      }).then(function (res) {
        return res.json().catch(function () { return {}; }).then(function (j) {
          if (res.status === 403) throw { note: 'app_ex_speak_plan' };
          if (res.status === 429) throw { note: 'app_ex_speak_limit' };
          if (!res.ok) throw { note: 'app_ex_speak_error' };
          return j.text || '';
        });
      }, function (e) { throw e && e.note ? e : { note: 'app_ex_speak_error' }; });
    };
  }

  function listenRound(book, progress, aud) {
    var list = heard(book, progress, aud), mem = readMem(), now = Date.now(), out = [];
    if (list.length < 6) return [];
    ['hear', 'heargap', 'dictation', Math.random() < 0.5 ? 'hear' : 'heargap'].forEach(function (k) { var bl = listenBlock(k, list, mem, now); if (bl) out.push(bl); });
    return out;
  }

  function choose(list) {
    var total = list.reduce(function (n, x) { return n + (x.w || 1); }, 0), r = Math.random() * total;
    for (var i = 0; i < list.length; i++) { r -= list[i].w || 1; if (r <= 0) return list[i]; }
    return list[list.length - 1];
  }
  function buildRound(book, progress, aud, pics) {
    var pool = sources(book, progress), mem = readMem(), now = Date.now();
    var list = heard(book, progress, aud), lb = list.length >= 6 && listenBlock(['hear', 'heargap', 'dictation'][Math.floor(Math.random() * 3)], list, mem, now);
    /* A picture exercise in about half the rounds */
    var pb = Math.random() < 0.5 && pictureBlock(Math.random() < 0.5 ? 'picture' : 'label', book.language, pics, mem, now);
    var ranked = pool.map(function (s) { return { s: s, w: weigh(s, mem, now) }; }).sort(function (a, b) { return b.w - a.w; });
    var round = [], used = {}, last = null, kinds = {};
    for (var k = 0; k < ranked.length && round.length < ROUND - (lb ? 1 : 0) - (pb ? 1 : 0); k++) {
      var src = ranked[k].s;
      if (used[src.key]) continue;
      var opts = remixes(src, pool, mem, now).filter(function (o) { return o.kind !== last && (kinds[o.kind] || 0) < 2; });
      if (!opts.length) continue;
      var pick = choose(opts);
      used[src.key] = true; last = pick.kind; kinds[pick.kind] = (kinds[pick.kind] || 0) + 1;
      round.push({ b: pick.b, keys: pick.map.map(function (i) { return src.key + ':' + i; }) });
    }
    if (lb) round.splice(1 + Math.floor(Math.random() * Math.max(1, round.length - 1)), 0, lb);
    if (pb) round.splice(Math.floor(Math.random() * (round.length + 1)), 0, pb);
    return round;
  }

  /* ---------- Quizzes and long practice sets (step 7) ---------- */
  /* Best scores: practice_progress "quiz:<book>:<scope>" when signed in, this browser otherwise ("alimun-quiz") */
  var QUIZ = 'alimun-quiz', scores = null;
  function loadScores() {
    if (scores) return Promise.resolve(scores);
    var local = {};
    try { local = JSON.parse(localStorage.getItem(QUIZ) || '{}') || {}; } catch (e) { local = {}; }
    if (!signedIn()) { scores = local; return Promise.resolve(scores); }
    return window.AlimunData.quizScores(A.data().profile.id).then(function (list) {
      scores = {};
      list.forEach(function (r) { scores[r.ex_key] = r.graded_score; });
      return scores;
    }, function () { scores = local; return scores; });
  }
  function saveScore(key, score) {
    var best = Math.max(scores && scores[key] != null ? scores[key] : -1, score);
    if (scores) scores[key] = best;
    if (signedIn()) {
      window.AlimunData.saveBook(A.data().profile.id, key, { done: true, score: best }).catch(function (e) { console.warn('[Alimun] Score not saved', e && e.message); });
    } else {
      try { localStorage.setItem(QUIZ, JSON.stringify(scores)); } catch (e) { /* storage blocked */ }
    }
    return best;
  }
  var NO_TEST = { memory: true, search: true, speak: true };
  function blockItems(b) { return b.pairs ? b.pairs.length : b.words ? b.words.length : b.items ? b.items.length : 0; }
  /* A quiz: exercises from one unit (or every unit reached), checked at the end, about n questions */
  function quizRound(book, progress, unitId, n, pics) {
    var pool = sources(book, progress).filter(function (s) { return !unitId || s.unit === unitId; }), mem = readMem(), now = Date.now();
    var ranked = shuffleList(pool).map(function (s) { return { s: s, w: weigh(s, mem, now) }; }).sort(function (a, b) { return b.w - a.w; });
    var out = [], total = 0, last = null, kinds = {};
    for (var k = 0; k < ranked.length && total < n; k++) {
      var src = ranked[k].s;
      var opts = remixes(src, pool, mem, now).filter(function (o) { return !NO_TEST[o.kind] && o.kind !== last && (kinds[o.kind] || 0) < 3; });
      if (!opts.length) continue;
      var pick = choose(opts), b = pick.b;
      /* At most three questions from one exercise, so the quiz stays varied */
      if (b.items && b.items.length > 3) { b = Object.assign({}, b, { items: b.items.slice(0, 3) }); pick.map = pick.map.slice(0, 3); }
      last = pick.kind; kinds[pick.kind] = (kinds[pick.kind] || 0) + 1; total += blockItems(b);
      out.push({ b: b, keys: pick.map.map(function (i) { return src.key + ':' + i; }) });
    }
    if (!unitId && pics && Math.random() < 0.6) { var pb = pictureBlock('picture', book.language, pics, mem, now); if (pb) out.splice(Math.floor(Math.random() * out.length), 0, pb); }
    return out;
  }
  /* A long practice set: a whole unit, twelve exercises, with help along the way */
  function setRound(book, progress, unitId, aud, pics) {
    var keep = ROUND;
    ROUND = 12;
    var all = sources(book, progress), mem = readMem(), now = Date.now();
    var pool = all.filter(function (s) { return s.unit === unitId; });
    var ranked = pool.map(function (s) { return { s: s, w: weigh(s, mem, now) }; }).sort(function (a, b) { return b.w - a.w; });
    var round = [], last = null, kinds = {};
    for (var k = 0; k < ranked.length && round.length < ROUND; k++) {
      var src = ranked[k].s;
      var opts = remixes(src, all, mem, now).filter(function (o) { return o.kind !== last && (kinds[o.kind] || 0) < 3; });
      if (!opts.length) continue;
      var pick = choose(opts);
      last = pick.kind; kinds[pick.kind] = (kinds[pick.kind] || 0) + 1;
      round.push({ b: pick.b, keys: pick.map.map(function (i) { return src.key + ':' + i; }) });
    }
    ROUND = keep;
    return round;
  }

  /* Beat the clock: one quick question after another for 90 seconds (multiple choice and true or false from the book) */
  var CLOCK_S = 90, Q = null;
  function clockPool(book, progress) {
    var out = [];
    sources(book, progress).forEach(function (src) {
      var b = src.b;
      if (b.kind === 'choice') b.items.forEach(function (it, i) { if (it.o.length >= 2 && it.o.every(function (o) { return String(o).length <= 60; })) out.push({ key: src.key + ':' + i, q: it.q || '', o: it.o, right: 0, why: it.why }); });
      if (b.kind === 'tf') b.items.forEach(function (it, i) { if (it.q && it.q.length <= 160) out.push({ key: src.key + ':' + i, q: it.q, tf: b.ng ? ['t', 'f', 'ng'] : ['t', 'f'], right: it.a, why: it.why }); });
    });
    return shuffleList(out);
  }
  function clockView() {
    document.body.classList.add('is-reading');
    return '<div class="lesson qc">' +
      '<div class="lesson__top"><a class="rd-back" href="#/practice">' + A.icon('back') + '<span>' + esc(t('app_nav_practice')) + '</span></a><p class="qc__time t-h2" data-time aria-live="off"></p></div>' +
      '<div class="lesson__bar qc__bar" aria-hidden="true"><i></i></div><div class="qc__stage" data-qcstage></div></div>';
  }
  function clockQuestion() {
    var it = Q.list[Q.at % Q.list.length], ta = Q.ta;
    var opts = it.tf ? it.tf.map(function (v) { return { v: v, label: t(v === 't' ? 'app_book_true' : v === 'f' ? 'app_book_false' : 'app_book_ng'), target: false }; })
      : EX().shuffle(it.o.length).map(function (k) { return { v: k, label: it.o[k], target: true }; });
    Q.cur = { it: it, opts: opts };
    var q = it.q ? EX().md(it.q).split('___').join('<span class="gap">&nbsp;</span>') : '';
    return '<div class="qc__q">' + (q ? '<p class="qc__text"' + ta + '>' + q + '</p>' : '<p class="t-body">' + esc(t('app_qz_which')) + '</p>') +
      '<div class="opts opts--stack">' + opts.map(function (o, k) {
        return '<button class="opt" type="button" data-qc="' + k + '"' + (o.target ? ta : '') + '><span class="qc__key" aria-hidden="true">' + (k + 1) + '</span>' + EX().md(o.label) + '</button>';
      }).join('') + '</div></div>';
  }
  function clockStart(book, progress, code) {
    var list = clockPool(book, progress);
    Q = { list: list, at: 0, right: 0, wrong: 0, left: CLOCK_S * 1000, started: false, ta: ' lang="' + code + '" dir="ltr"', book: book.id, key: 'quiz:' + book.id + ':clock', timer: 0, busy: false };
    return list.length >= 10;
  }
  function clockDraw() {
    var st = root.querySelector('[data-qcstage]');
    if (!st) return;
    if (!Q.started) {
      st.innerHTML = '<div class="end"><div class="end__art">' + A.Cast.drawing('sun') + '<div class="bub say end__bub">' + esc(t('app_qz_clock_ready')) + '</div></div>' +
        '<h1 class="t-display">' + esc(t('app_qz_clock_h')) + '</h1><p class="t-lead">' + esc(t('app_qz_clock_p')) + '</p>' +
        (scores && scores[Q.key] != null ? '<p class="t-body">' + esc(t('app_qz_best_n', { n: scores[Q.key] })) + '</p>' : '') +
        '<div class="btn-row" style="margin-top:22px;justify-content:center"><button class="btn btn--lime" type="button" data-qcgo>' + esc(t('app_qz_clock_go')) + A.icon('arrow') + '</button></div></div>';
      return;
    }
    st.innerHTML = clockQuestion();
  }
  function clockTick() {
    var now = Date.now();
    Q.left = Math.max(0, Q.end - now);
    var el = root.querySelector('[data-time]'), bar = root.querySelector('.qc__bar i');
    if (!el) { clearInterval(Q.timer); return; }
    el.textContent = t('app_qz_clock_left', { s: Math.ceil(Q.left / 1000) });
    el.classList.toggle('is-low', Q.left < 15000);
    if (bar) bar.style.width = (100 - Q.left / (CLOCK_S * 10)) + '%';
    if (Q.left <= 0) clockEnd();
  }
  function clockGo() {
    Q.started = true; Q.end = Date.now() + CLOCK_S * 1000;
    Q.timer = setInterval(clockTick, 200);
    clockTick(); clockDraw();
  }
  function clockAnswer(k) {
    if (!Q || Q.busy || Q.left <= 0) return;
    var cur = Q.cur, o = cur.opts[k], ok = o.v === cur.it.right;
    Q.busy = true;
    record(cur.it.key, ok);
    if (ok) Q.right++; else Q.wrong++;
    var btns = root.querySelectorAll('[data-qc]');
    btns.forEach(function (b, n) { var v = cur.opts[n].v; if (v === cur.it.right) b.classList.add('is-right'); else if (n === k) b.classList.add('is-wrong'); b.disabled = true; });
    var score = root.querySelector('[data-time]');
    if (score) score.classList.add(ok ? 'is-up' : 'is-down');
    setTimeout(function () {
      if (score) score.classList.remove('is-up', 'is-down');
      Q.busy = false; Q.at++;
      if (Q.left > 0) clockDraw();
    }, ok ? 280 : 900);
  }
  function clockEnd() {
    clearInterval(Q.timer);
    if (Q.done) return;
    Q.done = true;
    var before = scores && scores[Q.key] != null ? scores[Q.key] : -1;
    saveScore(Q.key, Q.right);
    if (Q.right > 0 && signedIn()) window.AlimunData.saveBook(A.data().profile.id, 'practice:round:' + new Date().toISOString().slice(0, 10), { done: true, score: 100 }).catch(function () {});
    var st = root.querySelector('[data-qcstage]');
    if (!st) return;
    st.innerHTML = '<div class="end"><div class="end__art">' + A.Cast.drawing('dog') + '<div class="bub say end__bub">' + esc(t(Q.right > before && before >= 0 ? 'app_qz_clock_record' : 'app_qz_clock_end_bub')) + '</div></div>' +
      '<h1 class="t-display">' + esc(t('app_qz_clock_end_h')) + '</h1><p class="t-lead">' + esc(A.tn('app_qz_clock_end_p', Q.right)) + '</p>' +
      '<div class="btn-row" style="margin-top:26px;justify-content:center"><a class="btn btn--primary" href="#/practice/clock" data-again>' + esc(t('app_qz_again_clock')) + A.icon('arrow') + '</a>' +
      '<a class="btn btn--quiet" href="#/practice">' + esc(t('app_pr_back')) + '</a></div></div>';
  }

  /* A quiz on screen: every question on one page, checked at the end with the engine's test mode */
  function quizView(title, intro) {
    document.body.classList.remove('is-reading');
    return '<div class="qz">' +
      '<a class="rd-back" href="#/practice">' + A.icon('back') + '<span>' + esc(t('app_nav_practice')) + '</span></a>' +
      '<div class="view__head"><div><h1 class="t-h1">' + esc(title) + '</h1><p class="t-lead">' + esc(intro) + '</p></div></div>' +
      '<div data-result></div>' +
      '<article class="paper rise"' + R.xa + '>' + R.ex.blocks.map(function (b, i) { return '<div class="rd-block" style="--i:' + (i + 1) + '">' + R.ex.html(i) + '</div>'; }).join('') + '</article>' +
      '<div data-end>' + quizEnd() + '</div></div>';
  }
  function quizEnd() {
    if (R.result != null) return '<section class="card card--bone page-end"><div class="btn-row"><a class="btn btn--primary" href="#/practice/' + R.route + '" data-again>' + esc(t('app_qz_again')) + '</a><a class="btn btn--quiet" href="#/practice">' + esc(t('app_pr_back')) + '</a></div></section>';
    var ready = R.ex.allReady();
    return '<section class="card card--bone page-end">' + (ready ? '' : '<p class="t-small" style="margin-bottom:14px">' + esc(t('app_qz_answer_all')) + '</p>') +
      '<button class="btn btn--primary" type="button" data-act="qsubmit"' + (ready ? '' : ' disabled') + '>' + esc(t('app_qz_submit')) + '</button></section>';
  }
  function quizSubmit() {
    var score = R.ex.submit();
    R.result = score;
    var res = R.ex.results();
    res.forEach(function (x) { var k = R.keys[x.bi] && R.keys[x.bi][x.i]; if (k) record(k, x.ok); });
    var right = res.filter(function (x) { return x.ok; }).length;
    var before = scores && scores[R.scoreKey] != null ? scores[R.scoreKey] : -1;
    saveScore(R.scoreKey, score);
    if (signedIn()) window.AlimunData.saveBook(A.data().profile.id, 'practice:round:' + new Date().toISOString().slice(0, 10), { done: true, score: score }).catch(function () {});
    var pct = new Intl.NumberFormat(A.locale, { style: 'percent' }).format(score / 100);
    var box = root.querySelector('[data-result]');
    box.innerHTML = '<section class="card card--forest test-result" tabindex="-1" aria-live="polite"><div class="card__row"><div class="card__art test-result__art">' + A.Cast.book(score >= 90 ? 'wow' : score >= 60 ? 'happy' : 'think') + '</div><div>' +
      '<p class="t-num">' + esc(pct) + '</p><h2 class="t-h2" style="margin-top:10px">' + esc(t('app_qz_score', { right: right, total: res.length })) + '</h2>' +
      '<p class="t-body" style="margin-top:8px">' + esc(t(score > before && before >= 0 ? 'app_qz_better' : score >= 80 ? 'app_qz_great' : 'app_qz_keep')) + '</p></div></div></section>';
    root.querySelector('[data-end]').innerHTML = quizEnd();
    window.scrollTo({ top: Math.max(0, box.getBoundingClientRect().top + window.scrollY - 90), behavior: reduced ? 'auto' : 'smooth' });
    box.querySelector('.test-result').focus({ preventScroll: true });
  }

  /* ---------- Loading ---------- */
  function getJSON(url) { return fetch(url).then(function (r) { if (!r.ok) throw new Error(url + ' ' + r.status); return r.json(); }); }
  var sets = null, pictures = null;
  function loadPictures() { return pictures ? Promise.resolve(pictures) : getJSON('/data/practice/pictures.json').then(function (x) { pictures = x; return x; }, function () { return null; }); }
  function loadSets() { return sets ? Promise.resolve(sets) : getJSON('/data/practice/index.json').then(function (x) { sets = x.sets || []; return sets; }, function () { sets = []; return sets; }); }
  function explainLang() {
    var l = A.lang === 'ma' ? 'fr' : A.lang;
    return ['en', 'es', 'fr', 'de', 'pt', 'zh', 'ar', 'it'].indexOf(l) > -1 ? l : 'en';
  }
  function signedIn() { return A.mode() === 'real' && A.data().profile.id; }
  function typesSet(list, language) {
    return list.filter(function (s) { return s.language === language && /-types$/.test(s.id); })[0] || list.filter(function (s) { return /-types$/.test(s.id); })[0] || null;
  }

  /* ---------- Screens ---------- */
  function homeView(info) {
    var d = A.data(), lang = A.languageName(d.profile.language);
    var hasBook = !!info.book;
    var mist = mistakesDue();
    var set = info.set;
    var html = '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_nav_practice')) + '</h1><p class="t-lead">' + esc(t('app_pr_lead')) + '</p></div></div>' +
      '<div class="grid rise">' +
        '<section class="card card--forest span-8 cover-card" style="--i:0" aria-labelledby="h-round">' +
          '<h2 class="t-h1" id="h-round">' + esc(t('app_pr_round_h')) + '</h2>' +
          '<p class="t-lead" style="margin-top:12px">' + esc(hasBook ? t('app_pr_round_p', { course: A.courseName() }) : t('app_pr_nobook_p', { language: lang })) + '</p>' +
          (hasBook ? '<div class="btn-row" style="margin-top:24px"><a class="btn btn--lime" href="#/practice/round">' + esc(t('app_pr_start')) + A.icon('arrow') + '</a></div>' : '') +
        '</section>' +
        '<section class="stage span-4" style="--i:1;background:var(--t-lime)" aria-hidden="true"><div class="bub say">' + esc(t(mist ? 'app_pr_bub_mistakes' : 'app_pr_bub')) + '</div>' + A.Cast.drawing('dog') + '</section>' +
        '<section class="card span-6" style="--i:2"><div class="card__row"><div class="card__art">' + A.Cast.drawing('ghost') + '</div><div>' +
          '<h2 class="t-h2">' + esc(t('app_pr_mistakes_h')) + '</h2><p class="t-body" style="margin-top:8px">' + esc(mist ? A.tn('app_pr_mistakes_n', mist) : t('app_pr_mistakes_none')) + '</p></div></div></section>' +
        (set ? '<a class="card span-6" href="#/practice/types" style="--i:3"><div class="card__row"><div class="card__art">' + A.Cast.drawing('owl') + '</div><div>' +
          '<h2 class="t-h2">' + esc(t('app_pr_types_h')) + '</h2><p class="t-body" style="margin-top:8px">' + esc(t('app_pr_types_p', { course: A.languageName(set.language) + ' ' + set.level })) + '</p></div></div></a>' : '') +
        (info.book ? (info.listen >= 6
          ? '<a class="card card--mint span-12" href="#/practice/listen" style="--i:4"><div class="card__row"><div class="card__art">' + (A.Cast.spot ? A.Cast.spot('headphones') : A.Cast.drawing('parrot')) + '</div><div>' +
            '<h2 class="t-h2">' + esc(t('app_pr_listen_h')) + '</h2><p class="t-body" style="margin-top:8px">' + esc(t('app_pr_listen_p')) + '</p></div></div></a>'
          : '<section class="card card--bone span-12" style="--i:4"><div class="card__row"><div class="card__art">' + (A.Cast.spot ? A.Cast.spot('headphones') : A.Cast.drawing('parrot')) + '</div><div>' +
            '<h2 class="t-h2">' + esc(t('app_pr_listen_h')) + '</h2><p class="t-body" style="margin-top:8px">' + esc(t('app_pr_listen_none')) + '</p></div></div></section>') : '') +
        (info.book ? quizHome(info) : '') +
        (info.book && A.Cast.tutor ? '<section class="card span-12 speak-card" style="--i:5"><div class="speak-card__top"><div>' +
          '<h2 class="t-h2">' + esc(t('app_pr_speak_h')) + '</h2><p class="t-body" style="margin-top:8px">' + esc(t('app_pr_speak_p')) + '</p></div>' +
          '<a class="btn btn--primary" href="#/practice/speak">' + esc(t('app_pr_speak_start')) + A.icon('arrow') + '</a></div>' +
          '<div class="tutors" role="radiogroup" aria-label="' + esc(t('app_pr_tutor')) + '">' + A.Cast.tutors.map(function (k) {
            var on = k === myTutor();
            return '<button class="tutor-pick tutor-art' + (on ? ' is-on' : '') + '" type="button" role="radio" aria-checked="' + on + '" data-tutor="' + k + '" data-mouth="rest" aria-label="' + esc(k.charAt(0).toUpperCase() + k.slice(1)) + '">' + A.Cast.tutor(k) + '<span>' + esc(k.charAt(0).toUpperCase() + k.slice(1)) + '</span></button>';
          }).join('') + '</div></section>' : '') +
        (signedIn() ? '' : '<p class="t-tiny span-12" style="--i:6;margin-top:4px">' + esc(t('app_pr_local')) + '</p>') +
      '</div>';
    return html;
  }

  function quizHome(info) {
    var book = info.book, best = function (k) { return scores && scores[k] != null ? scores[k] : null; };
    var pct = function (n) { return new Intl.NumberFormat(A.locale, { style: 'percent' }).format(n / 100); };
    var xl = book.explainLang || 'en', xa = ' lang="' + xl + '" dir="' + (xl === 'ar' ? 'rtl' : 'ltr') + '"';
    var clock = best('quiz:' + book.id + ':clock'), mixed = best('quiz:' + book.id + ':mixed');
    var html = '<h2 class="t-h2 span-12 home__section" style="--i:5">' + esc(t('app_qz_h')) + '</h2>' +
      '<a class="card card--sun span-6 qcard" href="#/practice/clock" style="--i:5"><div class="card__row"><div class="card__art">' + A.Cast.drawing('sun') + '</div><div>' +
        '<h3 class="t-h2">' + esc(t('app_qz_clock_h')) + '</h3><p class="t-body" style="margin-top:8px">' + esc(t('app_qz_clock_p')) + '</p>' +
        (clock != null ? '<p class="t-small qcard__best">' + esc(t('app_qz_best_n', { n: clock })) + '</p>' : '') + '</div></div></a>' +
      '<a class="card card--leaf span-6 qcard" href="#/practice/quiz/mixed" style="--i:5"><div class="card__row"><div class="card__art">' + A.Cast.drawing('dragon') + '</div><div>' +
        '<h3 class="t-h2">' + esc(t('app_qz_mixed_h')) + '</h3><p class="t-body" style="margin-top:8px">' + esc(t('app_qz_mixed_p')) + '</p>' +
        (mixed != null ? '<p class="t-small qcard__best">' + esc(t('app_qz_best', { score: pct(mixed) })) + '</p>' : '') + '</div></div></a>' +
      '<section class="card span-12 qunits" style="--i:5"><h3 class="t-h2">' + esc(t('app_qz_units_h')) + '</h3><p class="t-body" style="margin-top:6px">' + esc(t('app_qz_unit_p')) + '</p><ul class="qunits__list">';
    reached(book, info.progress || {}).forEach(function (u) {
      var b = best('quiz:' + book.id + ':' + u.id);
      html += '<li><div' + xa + '><b>' + esc(t('app_book_unit_title', { n: book.units.indexOf(u) + 1, title: u.title })) + '</b>' + (b != null ? '<span>' + esc(t('app_qz_best', { score: pct(b) })) + '</span>' : '') + '</div>' +
        '<a class="btn btn--primary btn--sm" href="#/practice/quiz/' + esc(u.id) + '">' + esc(t('app_qz_unit_quiz')) + '</a><a class="btn btn--ghost btn--sm" href="#/practice/set/' + esc(u.id) + '">' + esc(t('app_qz_unit_set')) + '</a></li>';
    });
    return html + '</ul></section>';
  }

  function roundView() {
    document.body.classList.add('is-reading');
    return '<div class="lesson pr">' +
      '<div class="lesson__top"><a class="rd-back" href="#/practice">' + A.icon('back') + '<span>' + esc(t('app_nav_practice')) + '</span></a></div>' +
      '<div class="lesson__bar" aria-hidden="true"><i></i></div>' +
      '<div class="lesson__stage" data-stage></div>' +
      '<nav class="lesson__nav" data-nav></nav></div>';
  }
  function coachHtml() {
    return '<div class="coach" data-coach><div class="bub ' + (R.mood === 'think' ? 'think' : 'say') + ' coach__bub">' + esc(R.line || t('app_book_coach_start')) + '</div>' + A.Cast.book(R.mood) + '</div>';
  }
  function stepHtml(turn) {
    if (R.at >= R.blocks.length) return endHtml(turn);
    return '<article class="spread' + (turn ? ' turn-in-next' : '') + '" data-spread="' + R.at + '"' + R.xa + '>' +
      '<div class="spread__cols spread__cols--ex"><div class="spread__side">' + coachHtml() + '</div><div class="spread__main"><div class="rd-block" style="--i:1">' + R.ex.html(R.at) + '</div></div></div></article>';
  }
  function endHtml(turn) {
    var f = R.ex.firstTally(), score = f.total ? Math.round(f.right / f.total * 100) : 100;
    var pct = new Intl.NumberFormat(A.locale, { style: 'percent' }).format(score / 100);
    var again = '#/practice/' + R.route;
    return '<article class="spread spread--end' + (turn ? ' turn-in-next' : '') + '" data-spread="end"' + R.xa + '>' +
      '<div class="end"><div class="end__art">' + A.Cast.drawing('dog') + '<div class="bub say end__bub">' + esc(t(score >= 80 ? 'app_pr_end_great' : 'app_pr_end_ok')) + '</div></div>' +
      '<h1 class="t-display">' + esc(t('app_pr_end_h')) + '</h1>' +
      '<p class="t-lead">' + esc(t('app_pr_end_p', { score: pct })) + '</p>' +
      '<div class="btn-row" style="margin-top:26px;justify-content:center"><a class="btn btn--primary" href="' + again + '" data-again>' + esc(t('app_pr_again')) + A.icon('arrow') + '</a>' +
      '<a class="btn btn--quiet" href="#/practice">' + esc(t('app_pr_back')) + '</a></div></div></article>';
  }
  function navHtml() {
    if (R.at >= R.blocks.length) return '<span></span><span></span><span></span>';
    var open = R.ex.done(R.at), last = R.at === R.blocks.length - 1;
    return '<span></span><p class="lesson__hint" aria-live="polite">' + esc(open ? '' : t('app_pr_locked')) + '</p>' +
      '<button class="btn btn--primary lesson__next" type="button" data-act="next"' + (open ? '' : ' disabled') + '>' + esc(t(last ? 'app_pr_finish' : 'app_pr_next')) + A.icon('arrow') + '</button>';
  }
  function refresh() {
    var n = root.querySelector('[data-nav]'); if (n) n.innerHTML = navHtml();
    var bar = root.querySelector('.lesson__bar i'); if (bar) bar.style.width = Math.round(Math.min(R.at, R.blocks.length) / R.blocks.length * 100) + '%';
  }
  function show(turn) {
    var stage = root.querySelector('[data-stage]');
    var old = stage.querySelector('.spread');
    var html = stepHtml(turn && !reduced);
    if (old && turn && !reduced) {
      old.classList.add('turn-out-next'); old.setAttribute('aria-hidden', 'true');
      stage.insertAdjacentHTML('beforeend', html);
      setTimeout(function () { if (old.parentNode) old.parentNode.removeChild(old); }, 520);
    } else stage.innerHTML = html;
    refresh();
    requestAnimationFrame(function () { R.ex.drawLines(stage.querySelector('.spread:not([aria-hidden])')); });
    if (turn) {
      window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
      var cur = stage.querySelector('.spread:not([aria-hidden])');
      if (cur) { cur.setAttribute('tabindex', '-1'); cur.focus({ preventScroll: true }); }
    }
  }
  function react(mood, line) {
    R.mood = mood; R.line = line;
    var c = root.querySelector('.spread:not([aria-hidden]) [data-coach]');
    if (c) c.outerHTML = coachHtml();
  }
  var PRAISE = ['app_book_right_1', 'app_book_right_2', 'app_book_right_3'];
  function onAnswer(bi, ok) {
    if (R.ex.done(bi)) react('wow', t('app_pr_coach_done'));
    else if (ok === true) react('happy', t(PRAISE[(bi + R.at) % 3]));
    else if (ok === false) react('think', t('app_book_wrong'));
    refresh();
    if (R.ex.done(bi)) {
      var nx = root.querySelector('.lesson__next');
      if (nx) { nx.classList.add('is-ready'); setTimeout(function () { nx.classList.remove('is-ready'); }, 1200); }
    }
  }
  function next() {
    if (!R || !R.ex.done(R.at)) return;
    EX().stopAudio();
    R.at++; R.mood = 'idle'; R.line = '';
    if (R.at === R.blocks.length) finish();
    show(true);
  }
  function finish() {
    if (R.saved || R.types) return;
    R.saved = true;
    var f = R.ex.firstTally(), score = f.total ? Math.round(f.right / f.total * 100) : 100;
    if (signedIn()) {
      var key = 'practice:round:' + new Date().toISOString().slice(0, 10);
      window.AlimunData.saveBook(A.data().profile.id, key, { done: true, score: score }).catch(function (e) { console.warn('[Alimun] Practice round not saved', e && e.message); });
    }
  }
  function startRound(blocks, keys, xa, ta, types, route, transcribe, test) {
    R = { blocks: blocks, keys: keys, at: 0, mood: 'idle', line: '', xa: xa, types: types, saved: false, route: route, result: null };
    R.ex = EX().create({ A: A, blocks: blocks, test: !!test, xa: xa, ta: ta, root: function () { return root; }, onAnswer: onAnswer, transcribe: transcribe,
      onChange: function () { var end = root.querySelector('[data-end]'); if (end && R.result == null) end.innerHTML = quizEnd(); },
      onItem: function (r) { var k = R.keys[r.bi] && R.keys[r.bi][r.i]; if (k) record(k, r.ok); } });
  }
  function attrs(code, rtl) { return ' lang="' + code + '" dir="' + (rtl ? 'rtl' : 'ltr') + '"'; }

  function emptyView() {
    return '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_nav_practice')) + '</h1></div></div>' +
      '<div class="soon rise"><div class="stage" style="--i:0;background:var(--t-mint)"><div class="bub think">' + esc(t('app_pr_empty_bub')) + '</div>' + A.Cast.drawing('owl') + '</div>' +
      '<div class="card" style="--i:1"><p class="t-body">' + esc(t('app_pr_empty_p')) + '</p><div class="btn-row"><a class="btn btn--primary" href="#/practice">' + esc(t('app_pr_back')) + '</a></div></div></div>';
  }
  function errorView() {
    return '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_nav_practice')) + '</h1></div></div>' +
      '<div class="soon rise"><div class="stage" style="--i:0;background:var(--t-coral)"><div class="bub think">' + esc(t('app_book_error_bub')) + '</div>' + A.Cast.drawing('cat') + '</div>' +
      '<div class="card" style="--i:1"><p class="t-body">' + esc(t('app_book_error')) + '</p><div class="btn-row"><a class="btn btn--primary" href="#/practice">' + esc(t('app_retry')) + '</a></div></div></div>';
  }

  /* ---------- Events ---------- */
  function bind() {
    if (root.__practice) return;
    root.__practice = true;
    root.addEventListener('click', function (e) {
      var pick = e.target.closest('[data-tutor]');
      if (pick && !root.querySelector('.pr')) {
        setTutor(pick.getAttribute('data-tutor'));
        root.querySelectorAll('[data-tutor]').forEach(function (b) { var on = b === pick; b.classList.toggle('is-on', on); b.setAttribute('aria-checked', String(on)); });
        return;
      }
      var qc = e.target.closest('[data-qc], [data-qcgo]');
      if (qc && Q && root.querySelector('.qc')) { if (qc.hasAttribute('data-qcgo')) clockGo(); else clockAnswer(+qc.getAttribute('data-qc')); return; }
      if (e.target.closest('[data-again]') && root.querySelector('.qc, .qz')) { e.preventDefault(); A.rerender(); return; }
      if (R && root.querySelector('.qz')) {
        if (EX().swallowClick()) { e.preventDefault(); return; }
        var qe = e.target.closest('[data-act]');
        if (!qe || qe.disabled) return;
        if (qe.getAttribute('data-act') === 'qsubmit') quizSubmit(); else R.ex.act(qe.getAttribute('data-act'), qe);
        return;
      }
      if (!R || !root.querySelector('.pr')) return;
      if (EX().swallowClick()) { e.preventDefault(); return; }
      var el = e.target.closest('[data-act], [data-again]');
      if (!el || el.disabled) return;
      if (el.hasAttribute('data-again')) { e.preventDefault(); A.rerender(); return; }
      var act = el.getAttribute('data-act');
      if (act === 'next') next();
      else R.ex.act(act, el);
    });
    root.addEventListener('input', function (e) { if (R && root.querySelector('.pr, .qz')) R.ex.input(e.target); });
    root.addEventListener('change', function (e) { if (R && root.querySelector('.pr, .qz')) R.ex.change(e.target); });
    root.addEventListener('keydown', function (e) { if (R && root.querySelector('.pr, .qz')) R.ex.keydown(e); });
    root.addEventListener('pointerdown', function (e) { if (R && root.querySelector('.pr, .qz')) EX().pointerDown(R.ex, e); });
    window.addEventListener('resize', function () { if (R && root.querySelector('.pr, .qz')) R.ex.drawLines(); });
    /* Beat the clock: keys 1 to 3 answer */
    document.addEventListener('keydown', function (e) {
      if (!Q || !Q.started || Q.done || !root.querySelector('.qc')) return;
      var n = +e.key;
      if (n >= 1 && n <= 3 && Q.cur && Q.cur.opts[n - 1]) { e.preventDefault(); clockAnswer(n - 1); }
    });
  }

  /* ---------- Entry ---------- */
  var mountNo = 0;
  function mount(view, parts, helpers) {
    var my = ++mountNo;
    A = helpers; root = view; R = null;
    if (Q) { clearInterval(Q.timer); Q = null; }
    if (EX()) EX().stopAudio();
    bind();
    document.body.classList.remove('is-reading');
    view.innerHTML = '<div class="rd-loading"><div class="loader" style="--w:72px" role="img" aria-label="' + esc(t('app_book_loading')) + '">' + A.loaderInner() + '</div></div>';
    var id = A.myBookId(), lang = explainLang();
    var noAudio = function () { return null; };
    return Promise.all([window.AlimunReader.open(helpers, id), loadSets(), use(helpers), window.AlimunReader.audio(id).catch(noAudio), loadPictures()]).then(function (r) {
      var info = { book: r[0] && r[0].book, progress: r[0] && r[0].progress, set: typesSet(r[1], A.data().profile.language), audio: r[3], pictures: r[4] };
      info.listen = info.book ? heard(info.book, info.progress || {}, info.audio).length : 0;
      if (my !== mountNo) return { stale: true };
      if (parts[0] === 'types' && info.set) {
        return getJSON('/data/practice/' + encodeURIComponent(info.set.id + '.' + lang) + '.json').then(function (set) {
          var code = window.AlimunData.langCode(set.language) || 'en';
          var blocks = set.blocks.filter(function (b) { return b.t === 'ex'; });
          /* The picture exercises are built from the pictures' words, after the written set */
          ['picture', 'label'].forEach(function (k) { var pb = pictureBlock(k, set.language, info.pictures, {}, Date.now()); if (pb) blocks.push(pb.b); });
          startRound(blocks, [], attrs(lang, lang === 'ar'), attrs(code, false), true, 'types');
          return { html: roundView(), title: t('app_pr_types_h'), round: true };
        });
      }
      if (parts[0] === 'clock' && info.book) {
        Q = null;
        if (!clockStart(info.book, info.progress || {}, window.AlimunData.langCode(info.book.language) || 'en')) return { html: emptyView(), title: t('app_nav_practice') };
        return loadScores().then(function () { return { html: clockView(), title: t('app_qz_clock_h'), clock: true }; });
      }
      if ((parts[0] === 'quiz' || parts[0] === 'set') && parts[1] && info.book) {
        var unit = parts[1] === 'mixed' ? null : info.book.units.filter(function (u) { return u.id === parts[1] && !u.planned; })[0];
        if (parts[1] !== 'mixed' && !unit) return { html: homeView(info), title: t('app_nav_practice') };
        var c2 = window.AlimunData.langCode(info.book.language) || 'en', x2 = info.book.explainLang || 'en';
        var unitName = unit ? t('app_book_unit_title', { n: info.book.units.indexOf(unit) + 1, title: unit.title }) : '';
        if (parts[0] === 'set') {
          var sr = setRound(info.book, info.progress || {}, unit.id, info.audio, info.pictures);
          if (!sr.length) return { html: emptyView(), title: t('app_nav_practice') };
          startRound(sr.map(function (x) { return x.b; }), sr.map(function (x) { return x.keys; }), attrs(x2, x2 === 'ar'), attrs(c2, false), false, 'set/' + unit.id, transcriber(info.book.language));
          return { html: roundView(), title: t('app_qz_set_h', { unit: unitName }), round: true };
        }
        var qr = quizRound(info.book, info.progress || {}, unit && unit.id, unit ? 12 : 15, info.pictures);
        if (!qr.length) return { html: emptyView(), title: t('app_nav_practice') };
        return loadScores().then(function () {
          startRound(qr.map(function (x) { return x.b; }), qr.map(function (x) { return x.keys; }), attrs(x2, x2 === 'ar'), attrs(c2, false), false, 'quiz/' + parts[1], null, true);
          R.scoreKey = 'quiz:' + info.book.id + ':' + (unit ? unit.id : 'mixed');
          var title = unit ? t('app_qz_unit_title', { unit: unitName }) : t('app_qz_mixed_h');
          return { html: quizView(title, t('app_qz_intro')), title: title, quiz: true };
        });
      }
      if ((parts[0] === 'round' || parts[0] === 'listen' || parts[0] === 'speak') && info.book) {
        var listen = parts[0] === 'listen', speak = parts[0] === 'speak';
        var round = speak ? speakRound(info.book, info.progress || {}, info.audio) : listen ? listenRound(info.book, info.progress || {}, info.audio) : buildRound(info.book, info.progress || {}, info.audio, info.pictures);
        if (!round.length) return { html: emptyView(), title: t('app_nav_practice') };
        var code = window.AlimunData.langCode(info.book.language) || 'en', xl = info.book.explainLang || 'en';
        startRound(round.map(function (x) { return x.b; }), round.map(function (x) { return x.keys; }), attrs(xl, xl === 'ar'), attrs(code, false), false, parts[0], transcriber(info.book.language));
        return { html: roundView(), title: t(speak ? 'app_pr_speak_h' : listen ? 'app_pr_listen_h' : 'app_pr_round_h'), round: true };
      }
      return loadScores().then(function () { return { html: homeView(info), title: t('app_nav_practice') }; });
    }).catch(function (e) {
      console.warn('[Alimun] Practice did not load', e && e.message);
      return { html: errorView(), title: t('app_nav_practice') };
    }).then(function (res) {
      if (res.stale || my !== mountNo) return { stale: true };
      view.innerHTML = res.html;
      if (res.round) show(false);
      if (res.clock) clockDraw();
      if (res.quiz) R.ex.drawLines();
      return res;
    });
  }

  /* debug(): the blocks of the round on screen (used by scripts/play-books.js) */
  window.AlimunPractice = { mount: mount, use: use, record: record, mistakesDue: mistakesDue, memory: function () { return readMem(); }, transcriber: function (language) { return transcriber(language); }, debug: function () { return R && R.ex.blocks; }, clock: function () { return Q; } };
})();
