/* Alimun app: flashcards (docs/DASHBOARD_PLAN.md, step 6).
   Cards are words to remember: from the course book (the vocabulary of each unit reached, taken from its matching
   exercises), words with pictures (the third cast's objects), the words teachers add to class notes (copied in by the
   class dashboard), the words of tutor sessions (vocab_reviews.source "tutor", marked "From your tutor") and the
   student's own cards. Spaced review in vocab_reviews, the same schedule as the class
   dashboard: box 0 to 5, next review after 1, 1, 3, 7, 14 and 30 days; a miss sends the card back to box 0 and it
   comes back once more in the same session. Reviews change form with the box: turn the card over (new words), choose
   the word, then write it. Signed out or with sample data, the cards live in this browser ("alimun-cards").
   Routes: #/cards, #/cards/review. Interface text: app_fc_* keys. */
(function () {
  'use strict';
  var A = null, root = null, R = null;
  var DAYS = [1, 1, 3, 7, 14, 30];
  var SESSION = 20;
  var LOCAL = 'alimun-cards';
  var ASIDE = '9999-12-31';  /* "set aside": no delete for students, so the card simply never comes due */
  var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var EX = function () { return window.AlimunEx; };

  function t(k, v) { return A.t(k, v); }
  function esc(s) { return A.esc(s); }
  function day(d) { var x = new Date(d); return x.getFullYear() + '-' + String(x.getMonth() + 1).padStart(2, '0') + '-' + String(x.getDate()).padStart(2, '0'); }
  function addDays(n) { var d = new Date(); d.setDate(d.getDate() + n); return day(d); }
  function today() { return day(new Date()); }
  function signedIn() { return A.mode() === 'real' && A.data().profile.id; }
  function plain(s) { return String(s || '').replace(/\*\*?/g, '').replace(/\s+/g, ' ').trim(); }
  function keyOf(word) { return plain(word).toLowerCase().slice(0, 200); }

  /* ---------- Storage: vocab_reviews when signed in, this browser otherwise ---------- */
  var cards = null;
  function readLocal() { try { return JSON.parse(localStorage.getItem(LOCAL) || '[]') || []; } catch (e) { return []; } }
  function writeLocal() { try { localStorage.setItem(LOCAL, JSON.stringify(cards)); } catch (e) { /* storage blocked */ } }
  function load() {
    if (!signedIn()) { cards = readLocal(); return Promise.resolve(cards); }
    return window.AlimunData.cards(A.data().profile.id).then(function (list) { cards = list; return cards; });
  }
  /* New cards; a word already there (same word_key) is kept as it is */
  function add(rows) {
    var have = {};
    cards.forEach(function (c) { have[c.word_key] = true; });
    var fresh = rows.filter(function (r) { if (!r.word || have[r.word_key]) return false; have[r.word_key] = true; return true; });
    if (!fresh.length) return Promise.resolve(0);
    if (!signedIn()) {
      fresh.forEach(function (r) { cards.push(Object.assign({ id: 'l' + Date.now() + Math.random().toString(36).slice(2, 7), box: 0, due_on: today(), correct_count: 0, wrong_count: 0 }, r)); });
      writeLocal();
      return Promise.resolve(fresh.length);
    }
    return window.AlimunData.addCards(A.data().profile.id, fresh).then(function () { return load(); }).then(function () { return fresh.length; });
  }
  function update(card, patch) {
    Object.assign(card, patch);
    if (!signedIn()) { writeLocal(); return Promise.resolve(); }
    return window.AlimunData.updateCard(card.id, patch).catch(function (e) { console.warn('[Alimun] Card not saved', e && e.message); });
  }
  function due() { var d = today(); return cards.filter(function (c) { return c.due_on <= d; }); }
  function nextDue() { var d = today(); return cards.filter(function (c) { return c.due_on > d && c.due_on < ASIDE; }).map(function (c) { return c.due_on; }).sort()[0] || null; }

  /* ---------- Where words come from ---------- */
  function reachedUnits(book, progress) {
    var units = book.units.filter(function (u) { return !u.planned; }), reach = 0;
    units.forEach(function (u, i) { if (u.pages.some(function (p) { var r = progress['book:' + book.id + ':' + u.id + ':' + p.id]; return r && r.done; })) reach = i; });
    return units.slice(0, Math.max(reach + 2, 2));
  }
  /* A unit's vocabulary: its matching exercises whose left side is a short word or phrase, with the meaning on the
     right; an example sentence from the unit when one contains the word */
  function unitWords(u) {
    var out = [], seen = {}, examples = [];
    u.pages.forEach(function (p) { p.spreads.forEach(function (sp) { sp.forEach(function (b) {
      if (b.t === 'examples') b.items.forEach(function (x) { examples.push(plain(x.s)); });
      if (b.t === 'dialogue') b.lines.forEach(function (l) { examples.push(plain(l.s)); });
    }); }); });
    u.pages.forEach(function (p) { p.spreads.forEach(function (sp) { sp.forEach(function (b) {
      if (b.t !== 'ex' || b.kind !== 'match') return;
      b.pairs.forEach(function (pr) {
        var w = plain(pr[0]), m = plain(pr[1]);
        if (!w || w.split(' ').length > 4 || w.length > 40 || /[?!.]$/.test(w) || !m || m.length > 120 || seen[keyOf(w)]) return;
        seen[keyOf(w)] = true;
        var core = w.replace(/^(to|a|an|the|der|die|das|ein|eine|sich)\s+/i, '').toLowerCase();
        var ex = examples.filter(function (s) { return core.length > 2 && s.toLowerCase().indexOf(core) > -1; })[0] || '';
        out.push({ word: w, word_key: keyOf(w), definition: m, example: ex.slice(0, 500) || null });
      });
    }); }); });
    return out;
  }
  function pictureWords(pics, language) {
    if (!pics) return [];
    return Object.keys(pics.objects).filter(function (k) { return pics.objects[k][language]; }).map(function (k) {
      var w = pics.objects[k][language];
      return { word: w, word_key: keyOf(w), definition: '', example: null, pic: k };
    });
  }
  /* The drawing for a word, when the word is one of the pictures */
  function picFor(card, pics, language) {
    if (!pics || !A.Cast.object) return '';
    var k = Object.keys(pics.objects).filter(function (o) { return keyOf(pics.objects[o][language] || '') === card.word_key; })[0];
    return k ? A.Cast.object(k) : '';
  }

  /* ---------- Home of the flashcards ---------- */
  function homeView(info) {
    var d = due(), next = nextDue(), lang = info.language;
    var fmt = function (s) { try { return new Intl.DateTimeFormat(A.locale, { weekday: 'long', day: 'numeric', month: 'long' }).format(new Date(s + 'T12:00:00')); } catch (e) { return s; } };
    var html = '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_nav_cards')) + '</h1><p class="t-lead">' + esc(t('app_fc_lead')) + '</p></div></div><div class="grid rise">';
    html += '<section class="card card--forest span-8 cover-card" style="--i:0">' +
      '<h2 class="t-h1">' + esc(d.length ? A.tn('app_fc_due', d.length) : cards.length ? t('app_fc_none_due') : t('app_fc_empty_h')) + '</h2>' +
      '<p class="t-lead" style="margin-top:12px">' + esc(d.length ? t('app_fc_due_p') : cards.length ? (next ? t('app_fc_next', { day: fmt(next) }) : t('app_fc_all_aside')) : t('app_fc_empty_p')) + '</p>' +
      (d.length ? '<div class="btn-row" style="margin-top:24px"><a class="btn btn--lime" href="#/cards/review">' + esc(t('app_fc_review')) + A.icon('arrow') + '</a></div>' : '') + '</section>' +
      '<section class="stage span-4" style="--i:1;background:var(--t-coral)" aria-hidden="true"><div class="bub ' + (d.length ? 'say' : 'think') + '">' + esc(t(d.length ? 'app_fc_bub_due' : 'app_fc_bub')) + '</div>' + A.Cast.drawing(d.length ? 'ghost' : 'alien') + '</section>';

    /* Decks from the course book and the pictures */
    var have = {};
    cards.forEach(function (c) { have[c.word_key] = true; });
    var decks = info.decks.filter(function (dk) { return dk.words.length; });
    if (decks.length) {
      html += '<h2 class="t-h2 span-12 home__section" style="--i:2">' + esc(t('app_fc_add_h')) + '</h2>';
      decks.forEach(function (dk, i) {
        var missing = dk.words.filter(function (w) { return !have[w.word_key]; }).length;
        html += '<section class="card span-4 deck" style="--i:' + (3 + i) + '"><div class="deck__art">' + (dk.art || '') + '</div>' +
          '<h3 class="t-h3"' + (dk.xa || '') + '>' + esc(dk.title) + '</h3><p class="t-small" style="margin-top:6px">' + esc(A.tn('app_fc_words', dk.words.length)) + '</p>' +
          '<p class="t-small deck__sample"' + info.ta + '>' + esc(dk.words.slice(0, 4).map(function (w) { return w.word; }).join(', ')) + (dk.words.length > 4 ? '…' : '') + '</p>' +
          '<div class="btn-row" style="margin-top:14px">' + (missing ? '<button class="btn btn--primary btn--sm" type="button" data-deck="' + i + '">' + esc(missing === dk.words.length ? t('app_fc_add') : A.tn('app_fc_add_rest', missing)) + '</button>'
            : '<span class="t-small deck__done">' + A.icon('check') + esc(t('app_fc_added')) + '</span>') + '</div></section>';
      });
    }

    /* Own card */
    html += '<section class="card span-12 own" style="--i:9"><h2 class="t-h2">' + esc(t('app_fc_own_h')) + '</h2><p class="t-body" style="margin-top:6px">' + esc(t('app_fc_own_p')) + '</p>' +
      '<form class="own__form" data-own><label><span>' + esc(t('app_fc_word')) + '</span><input name="word" maxlength="200" required autocomplete="off"' + info.ta + '></label>' +
      '<label><span>' + esc(t('app_fc_meaning')) + '</span><input name="definition" maxlength="500" autocomplete="off"></label>' +
      '<label class="own__wide"><span>' + esc(t('app_fc_example')) + '</span><input name="example" maxlength="500" autocomplete="off"' + info.ta + '></label>' +
      '<button class="btn btn--primary" type="submit">' + esc(t('app_fc_save')) + '</button><p class="t-small own__msg" aria-live="polite"></p></form></section>';

    /* The student's cards */
    if (cards.length) {
      var list = cards.slice().sort(function (a, b) { return a.due_on < b.due_on ? -1 : a.due_on > b.due_on ? 1 : a.word.localeCompare(b.word); });
      html += '<section class="card span-12 mine" style="--i:10"><div class="mine__top"><h2 class="t-h2">' + esc(A.tn('app_fc_mine', cards.length)) + '</h2>' +
        '<input class="mine__find" type="search" placeholder="' + esc(t('app_fc_find')) + '" aria-label="' + esc(t('app_fc_find')) + '" data-find></div><ul class="mine__list">' +
        list.map(function (c) {
          var aside = c.due_on >= ASIDE;
          return '<li data-word="' + esc(c.word_key) + '"' + (aside ? ' class="is-aside"' : '') + '><div><b' + info.ta + '>' + esc(c.word) + '</b>' + (c.definition ? '<span>' + esc(c.definition) + '</span>' : '') +
            (c.source === 'tutor' ? '<span class="t-tiny mine__from">' + esc(t('app_fc_from_tutor')) + '</span>' : '') + '</div>' +
            '<span class="mine__box" aria-label="' + esc(t('app_fc_level', { n: c.box || 0 })) + '">' + [0, 1, 2, 3, 4].map(function (k) { return '<i' + (k < (c.box || 0) ? ' class="on"' : '') + '></i>'; }).join('') + '</span>' +
            '<button class="linkish" type="button" data-aside="' + esc(c.id) + '">' + esc(t(aside ? 'app_fc_back' : 'app_fc_aside')) + '</button></li>';
        }).join('') + '</ul></section>';
    }
    if (!signedIn()) html += '<p class="t-tiny span-12" style="--i:11;margin-top:4px">' + esc(t('app_fc_local')) + '</p>';
    return html + '</div>';
  }

  /* ---------- Review ---------- */
  function startReview(info) {
    var list = due().sort(function () { return Math.random() - 0.5; }).slice(0, SESSION);
    R = { queue: list.map(function (c) { return { c: c, mode: modeFor(c), again: false }; }), at: 0, knew: 0, total: list.length, info: info, flipped: false, answer: null, typed: '', picked: null };
  }
  /* New cards are turned over; then the word is chosen among three; from box 3 it is written */
  function modeFor(c) {
    var b = c.box || 0, pool = cards.filter(function (x) { return x.word_key !== c.word_key && x.word; });
    if (b >= 3 && c.definition) return 'type';
    if (b >= 1 && c.definition && pool.length >= 2) return Math.random() < 0.6 ? 'choose' : 'flip';
    return 'flip';
  }
  function reviewView() {
    document.body.classList.add('is-reading');
    return '<div class="lesson fc">' +
      '<div class="lesson__top"><a class="rd-back" href="#/cards">' + A.icon('back') + '<span>' + esc(t('app_nav_cards')) + '</span></a></div>' +
      '<div class="lesson__bar" aria-hidden="true"><i></i></div><div class="fc__stage" data-stage></div></div>';
  }
  function cardHtml() {
    if (R.at >= R.queue.length) return endHtml();
    var q = R.queue[R.at], c = q.c, info = R.info, art = picFor(c, info.pictures, info.language);
    /* A picture card without a meaning asks for the word: the drawing alone on the front */
    var front = art && !c.definition
      ? '<div class="fc__face fc__front"><div class="fc__art fc__art--lg">' + art + '</div><p class="t-body">' + esc(t('app_fc_what')) + '</p></div>'
      : '<div class="fc__face fc__front">' + (art ? '<div class="fc__art">' + art + '</div>' : '') + '<p class="fc__word"' + info.ta + '>' + esc(c.word) + '</p></div>';
    var back = '<div class="fc__face fc__back">' + (art ? '<div class="fc__art fc__art--sm">' + art + '</div>' : '') + '<p class="fc__word fc__word--sm"' + info.ta + '>' + esc(c.word) + '</p>' +
      (c.definition ? '<p class="fc__def"' + info.ta + '>' + esc(c.definition) + '</p>' : '') + (c.example ? '<p class="fc__ex"' + info.ta + '>' + esc(c.example) + '</p>' : '') + '</div>';
    var html = '<div class="fc__card' + (R.flipped || R.answer != null ? ' is-flipped' : '') + '" data-card>' + (q.mode === 'flip' || (art && !c.definition) ? front : '<div class="fc__face fc__front fc__q"><p class="t-small">' + esc(t(q.mode === 'type' ? 'app_fc_type_q' : 'app_fc_choose_q')) + '</p>' +
      (art && q.mode !== 'type' ? '<div class="fc__art">' + art + '</div>' : '') + '<p class="fc__def fc__def--q"' + info.ta + '>' + esc(c.definition || '') + '</p></div>') + back + '</div>';
    var ctl = '';
    if (q.mode === 'flip') {
      ctl = !R.flipped ? '<button class="btn btn--primary" type="button" data-act="flip">' + esc(t('app_fc_show')) + '</button>'
        : '<button class="btn btn--ghost" type="button" data-act="grade" data-ok="0">' + esc(t('app_fc_not_yet')) + '</button><button class="btn btn--primary" type="button" data-act="grade" data-ok="1">' + esc(t('app_fc_knew')) + '</button>';
    } else if (q.mode === 'choose') {
      if (!q.opts) {
        var others = cards.filter(function (x) { return x.word_key !== c.word_key && x.word; }).sort(function () { return Math.random() - 0.5; }).slice(0, 2);
        q.opts = [c].concat(others).sort(function () { return Math.random() - 0.5; });
      }
      ctl = '<div class="opts opts--stack fc__opts">' + q.opts.map(function (o, k) {
        var cls = R.answer == null ? '' : o === c ? ' is-right' : R.picked === k ? ' is-wrong' : '';
        return '<button class="opt' + cls + '" type="button" data-act="pickc" data-k="' + k + '"' + (R.answer != null ? ' disabled' : '') + info.ta + '>' + esc(o.word) + '</button>';
      }).join('') + '</div>' + (R.answer != null ? '<button class="btn btn--primary" type="button" data-act="next">' + esc(t('app_pr_next')) + A.icon('arrow') + '</button>' : '');
    } else {
      ctl = R.answer == null ? '<form class="fc__type" data-type><input class="gap-in gap-in--wide" name="w" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="' + esc(t('app_book_your_answer')) + '"' + info.ta + '>' +
        '<button class="btn btn--primary" type="submit">' + esc(t('app_book_check')) + '</button></form>'
        : '<p class="fc__verdict ' + (R.answer ? 'is-ok' : 'is-no') + '">' + esc(t(R.answer ? 'app_book_right_1' : 'app_fc_was')) + (R.answer ? '' : ' <b' + info.ta + '>' + esc(c.word) + '</b>') + '</p>' +
          '<button class="btn btn--primary" type="button" data-act="next">' + esc(t('app_pr_next')) + A.icon('arrow') + '</button>';
    }
    return '<div class="fc__wrap"><div class="fc__main"><p class="fc__line" aria-live="polite">' + esc(R.line || t(q.mode === 'flip' ? 'app_fc_coach_flip' : 'app_fc_coach_q')) + '</p>' +
      html + '<div class="fc__ctl btn-row">' + ctl + '</div></div></div>';
  }
  function endHtml() {
    return '<div class="end"><div class="end__art">' + A.Cast.drawing('dog') + '<div class="bub say end__bub">' + esc(t(R.knew === R.total ? 'app_fc_end_all' : 'app_fc_end_some')) + '</div></div>' +
      '<h1 class="t-display">' + esc(t('app_fc_end_h')) + '</h1><p class="t-lead">' + esc(t('app_fc_end_p', { k: R.knew, n: R.total })) + '</p>' +
      '<div class="btn-row" style="margin-top:26px;justify-content:center"><a class="btn btn--primary" href="#/cards">' + esc(t('app_fc_back_cards')) + '</a></div></div>';
  }
  function draw() {
    var st = root.querySelector('[data-stage]');
    if (!st) return;
    st.innerHTML = cardHtml();
    var bar = root.querySelector('.lesson__bar i');
    if (bar) bar.style.width = Math.round(Math.min(R.at, R.queue.length) / Math.max(1, R.queue.length) * 100) + '%';
    var inp = st.querySelector('[data-type] input');
    if (inp) inp.focus({ preventScroll: true });
  }
  /* A first answer moves the card: right one box up, wrong back to box 0 (and once more at the end of this session) */
  function grade(ok) {
    var q = R.queue[R.at], c = q.c;
    if (!q.again) {
      var box = ok ? Math.min((c.box || 0) + 1, 5) : 0;
      update(c, { box: box, due_on: addDays(DAYS[box]), last_reviewed_at: new Date().toISOString(),
        correct_count: (c.correct_count || 0) + (ok ? 1 : 0), wrong_count: (c.wrong_count || 0) + (ok ? 0 : 1) });
      if (ok) R.knew++;
      else R.queue.push({ c: c, mode: 'flip', again: true });
    }
    R.mood = ok ? 'happy' : 'think';
    R.line = t(ok ? 'app_book_right_2' : 'app_fc_coach_again');
  }
  function next() { R.at++; R.flipped = false; R.answer = null; R.picked = null; R.mood = 'idle'; R.line = ''; draw(); if (R.at >= R.queue.length) window.scrollTo(0, 0); }
  function accept(c, v) {
    var a = EX().norm(v), w = EX().norm(c.word);
    if (!a) return false;
    /* With or without the article: "der Apfel" or "Apfel" */
    return a === w || a === w.replace(/^(der|die|das|the|a|an|to|le|la|les|l'|el|los|las|il|lo|gli|o|os|as|un|une|uno|una|um|uma)\s+/i, '');
  }

  /* ---------- Events ---------- */
  function bind() {
    if (root.__cards) return;
    root.__cards = true;
    root.addEventListener('click', function (e) {
      if (!root.querySelector('[data-cards]') && !root.querySelector('.fc')) return;
      var el;
      if ((el = e.target.closest('[data-deck]'))) {
        var dk = R && R.home && R.home.decks[+el.getAttribute('data-deck')];
        if (!dk) return;
        el.disabled = true;
        add(dk.words.map(function (w) { return { word: w.word, word_key: w.word_key, definition: w.definition || null, example: w.example || null }; }))
          .then(function () { A.rerender(); }, function (er) { el.disabled = false; console.warn('[Alimun] Cards not added', er && er.message); });
        return;
      }
      if ((el = e.target.closest('[data-aside]'))) {
        var c = cards.filter(function (x) { return String(x.id) === el.getAttribute('data-aside'); })[0];
        if (c) update(c, c.due_on >= ASIDE ? { due_on: today(), box: 0 } : { due_on: ASIDE }).then(function () { A.rerender(); });
        return;
      }
      if (!R || !R.queue) return;
      if ((el = e.target.closest('[data-act]'))) {
        var act = el.getAttribute('data-act'), q = R.queue[R.at];
        if (act === 'flip') { R.flipped = true; R.line = t('app_fc_coach_rate'); draw(); }
        else if (act === 'grade') { grade(el.getAttribute('data-ok') === '1'); next(); }
        else if (act === 'pickc' && R.answer == null) { R.picked = +el.getAttribute('data-k'); R.answer = q.opts[R.picked] === q.c; grade(R.answer); draw(); }
        else if (act === 'next') next();
      }
    });
    root.addEventListener('submit', function (e) {
      var f = e.target;
      if (f.hasAttribute('data-own')) {
        e.preventDefault();
        var word = plain(f.word.value), msg = f.querySelector('.own__msg');
        if (!word) return;
        add([{ word: word.slice(0, 200), word_key: keyOf(word), definition: plain(f.definition.value).slice(0, 500) || null, example: plain(f.example.value).slice(0, 500) || null }]).then(function (n) {
          msg.textContent = n ? t('app_fc_saved') : t('app_fc_exists');
          if (n) setTimeout(function () { A.rerender(); }, 700);
        }, function () { msg.textContent = t('app_book_error'); });
        return;
      }
      if (f.hasAttribute('data-type') && R && R.queue) {
        e.preventDefault();
        var q = R.queue[R.at];
        R.answer = accept(q.c, f.w.value);
        grade(R.answer);
        draw();
      }
    });
    root.addEventListener('input', function (e) {
      if (!e.target.hasAttribute('data-find')) return;
      var v = e.target.value.trim().toLowerCase();
      root.querySelectorAll('.mine__list li').forEach(function (li) { li.hidden = !!v && li.textContent.toLowerCase().indexOf(v) === -1; });
    });
    document.addEventListener('keydown', function (e) {
      if (!R || !R.queue || !root.querySelector('.fc') || /INPUT|TEXTAREA/.test(e.target.tagName)) return;
      var q = R.queue[R.at];
      if (!q) return;
      if (q.mode === 'flip' && (e.key === ' ' || e.key === 'Enter') && !R.flipped) { e.preventDefault(); R.flipped = true; draw(); }
    });
  }

  /* ---------- Entry ---------- */
  var mountNo = 0;
  function mount(view, parts, helpers) {
    var my = ++mountNo;
    A = helpers; root = view; R = null;
    bind();
    document.body.classList.remove('is-reading');
    view.innerHTML = '<div class="rd-loading"><div class="loader" style="--w:72px" role="img" aria-label="' + esc(t('app_book_loading')) + '">' + A.loaderInner() + '</div></div>';
    var language = A.data().profile.language || 'English', code = window.AlimunData.langCode(language) || 'en';
    var pics = fetch('/data/practice/pictures.json').then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; });
    return Promise.all([load(), window.AlimunReader.open(helpers, A.myBookId()).catch(function () { return null; }), pics]).then(function (r) {
      if (my !== mountNo) return { stale: true };
      var info = { language: language, ta: ' lang="' + code + '" dir="ltr"', pictures: r[2], decks: [] };
      var book = r[1] && r[1].book;
      if (book) {
        var xl = book.explainLang || 'en';
        reachedUnits(book, r[1].progress || {}).forEach(function (u) {
          info.decks.push({ title: t('app_book_unit_title', { n: book.units.indexOf(u) + 1, title: u.title }), words: unitWords(u), art: A.Cast.drawing(u.art || 'owl'), xa: ' lang="' + xl + '" dir="' + (xl === 'ar' ? 'rtl' : 'ltr') + '"' });
        });
      }
      info.decks.push({ title: t('app_fc_pictures'), words: pictureWords(r[2], language), art: A.Cast.object ? A.Cast.object('apple') : '' });
      if (parts[0] === 'review') {
        startReview(info);
        if (!R.queue.length) { R = { home: info }; return { html: '<div data-cards>' + homeView(info) + '</div>', title: t('app_nav_cards') }; }
        return { html: reviewView(), title: t('app_fc_review'), review: true };
      }
      R = { home: info };
      return { html: '<div data-cards>' + homeView(info) + '</div>', title: t('app_nav_cards') };
    }).catch(function (e) {
      console.warn('[Alimun] Flashcards did not load', e && e.message);
      return { html: '<div class="view__head"><div><h1 class="t-h1">' + esc(t('app_nav_cards')) + '</h1></div></div><div class="card"><p class="t-body">' + esc(t('app_book_error')) + '</p></div>', title: t('app_nav_cards') };
    }).then(function (res) {
      if (res.stale || my !== mountNo) return { stale: true };
      view.innerHTML = res.html;
      if (res.review) draw();
      return res;
    });
  }

  /* Words from elsewhere (the library, step 9): [{ word, definition, example }] -> how many new cards */
  function addWords(helpers, rows) {
    A = helpers;
    return load().then(function () {
      return add(rows.map(function (r) { return { word: plain(r.word), word_key: keyOf(r.word), definition: r.definition ? plain(r.definition) : null, example: r.example || null }; }));
    });
  }
  window.AlimunCards = { mount: mount, addWords: addWords, debug: function () { return { cards: cards, R: R }; } };
})();
