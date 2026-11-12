/* Welcome poll (owner, 9 Nov 2026): a window over the student dashboard, shown once to every student (existing and new)
   until they answer it (Home keeps a card to open it). "Later" hides it for a day. /app?sample=1&poll=1 shows it on the sample dashboard (nothing sent). Answers go through submit_welcome_poll, which adds 10 minutes of
   tutor time the first time (supabase/migrations/202611091500_welcome_poll.sql); answering also opens the welcome
   gift, 10 EUR off the first plan or 1 on 1 class, which api/stripe.js applies at checkout. Not shown to an admin viewing a
   student, nor on the sample dashboard. All text: app_wp_* keys in js/translations.js. */
(function () {
  'use strict';
  var LATER_KEY = 'alimun-poll-later';
  var DAY = 86400000;

  /* Each question: id, kind (one, many, country, text), the options' ids (text keys app_wp_<id>_<option>), and for
     "many" how many may be chosen. Option text may hold {lang}, the course language in the middle of a sentence. */
  var QUESTIONS = [
    { id: 'from', kind: 'country' },
    { id: 'explain', kind: 'one', options: ['target', 'mostly', 'own'] },
    { id: 'teacher', kind: 'one', options: ['native', 'home', 'either'] },
    { id: 'confidence', kind: 'one', options: ['c1', 'c2', 'c3', 'c4', 'c5'] },
    { id: 'hardest', kind: 'many', max: 6, options: ['speaking', 'listening', 'reading', 'writing', 'grammar', 'vocab'] },
    { id: 'prefer', kind: 'many', max: 2, options: ['exam', 'classes', 'conversation', 'one', 'self'] },
    { id: 'time', kind: 'one', options: ['lt1', 'h1_3', 'h3_5', 'gt5'] },
    { id: 'tutor', kind: 'one', options: ['not_tried', 'love', 'useful', 'unsure', 'no'], extra: 'tutor_note' },
    { id: 'note', kind: 'text' }
  ];

  /* Text keys built from the question and option ids, written out so the translation split files them with the
     dashboard text (scripts/split-translations.js finds quoted keys only). */
  var BUILT_KEYS = [
    'app_wp_confidence_c1', 'app_wp_confidence_c2', 'app_wp_confidence_c3', 'app_wp_confidence_c4',
    'app_wp_confidence_c5', 'app_wp_confidence_h', 'app_wp_explain_h', 'app_wp_explain_mostly', 'app_wp_explain_own',
    'app_wp_explain_target', 'app_wp_from_h', 'app_wp_hardest_grammar', 'app_wp_hardest_h',
    'app_wp_hardest_listening', 'app_wp_hardest_reading', 'app_wp_hardest_speaking', 'app_wp_hardest_sub',
    'app_wp_hardest_vocab', 'app_wp_hardest_writing', 'app_wp_note_h', 'app_wp_prefer_classes',
    'app_wp_prefer_conversation', 'app_wp_prefer_exam', 'app_wp_prefer_h', 'app_wp_prefer_one', 'app_wp_prefer_self',
    'app_wp_prefer_sub', 'app_wp_teacher_either', 'app_wp_teacher_h', 'app_wp_teacher_home', 'app_wp_teacher_native',
    'app_wp_time_gt5', 'app_wp_time_h', 'app_wp_time_h1_3', 'app_wp_time_h3_5', 'app_wp_time_lt1', 'app_wp_tutor_h',
    'app_wp_tutor_love', 'app_wp_tutor_no', 'app_wp_tutor_not_tried', 'app_wp_tutor_note', 'app_wp_tutor_unsure',
    'app_wp_tutor_useful'
  ];
  var H = null;         /* helpers from the shell: t, esc, lang, locale, profile, drawing, onDone */
  var box = null;       /* the overlay */
  var step = -1;        /* -1 intro, 0..n-1 questions, n thanks */
  var answers = {};
  var lastFocus = null;
  var sending = false;

  function t(k, v) { return H.t(k, v); }
  function esc(s) { return H.esc(s); }
  function store(k, v) { try { if (v == null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) { /* storage blocked */ } }
  function read(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  /* The course language as it reads inside a sentence ("anglais", "Englisch", "English") */
  function langWord() {
    var code = window.AlimunData && AlimunData.langCode(H.profile.language);
    try { if (code && Intl.DisplayNames) return new Intl.DisplayNames([H.locale], { type: 'language' }).of(code); } catch (e) { /* old browser */ }
    return H.profile.language || t('app_wp_the_lang');
  }

  function snoozed() {
    var at = +read(LATER_KEY);
    return isFinite(at) && at > 0 && Date.now() - at < DAY;
  }

  /* Called by the shell once Home is drawn for a real student */
  function maybe(helpers) {
    H = helpers;
    if (!H || !H.profile) return;
    if (H.preview) return open();
    if (!H.profile.id || snoozed()) return;
    window.AlimunData.welcomePollDone(H.profile.id).then(function (done) {
      if (!done) setTimeout(open, 1200);
    }, function () { /* table not reachable: ask another time */ });
  }

  function open() {
    if (box) return;
    lastFocus = document.activeElement;
    answers = { from: H.profile.country || (window.AlimunCountry && AlimunCountry.guess()) || '', lang: H.lang };
    step = -1;
    box = document.createElement('div');
    box.className = 'wp';
    box.innerHTML = '<div class="wp__card" role="dialog" aria-modal="true" aria-labelledby="wp-h"></div>';
    document.body.appendChild(box);
    document.body.classList.add('is-wp-open');
    box.addEventListener('click', onClick);
    box.addEventListener('change', onChange);
    box.addEventListener('input', onInput);
    box.addEventListener('keydown', onKey);
    requestAnimationFrame(function () { box.classList.add('is-in'); });
    draw();
  }

  function close(later) {
    if (!box) return;
    if (later) store(LATER_KEY, String(Date.now()));
    var b = box; box = null;
    b.classList.remove('is-in');
    document.body.classList.remove('is-wp-open');
    setTimeout(function () { if (b.parentNode) b.parentNode.removeChild(b); }, 200);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  /* ---------- Drawing ---------- */
  function progress() {
    var n = QUESTIONS.length, done = Math.max(0, Math.min(step, n));
    return '<div class="wp__bar" role="progressbar" aria-valuemin="0" aria-valuemax="' + n + '" aria-valuenow="' + done + '" aria-label="' +
      esc(t('app_wp_progress', { n: Math.min(step + 1, n), total: n })) + '"><i style="width:' + (100 * done / n) + '%"></i></div>';
  }
  function head(title, sub) {
    return '<div class="wp__top"><span class="wp__buddy" aria-hidden="true">' + H.drawing + '</span>' + progress() +
      '<button type="button" class="wp__x" data-wp="later" aria-label="' + esc(t('app_wp_later')) + '">' + H.icon('close') + '</button></div>' +
      '<h2 class="wp__h" id="wp-h" tabindex="-1">' + esc(title) + '</h2>' + (sub ? '<p class="wp__sub">' + esc(sub) + '</p>' : '');
  }
  function option(q, o, on) {
    var type = q.kind === 'many' ? 'checkbox' : 'radio';
    return '<label class="wp__opt' + (on ? ' is-on' : '') + '"><input type="' + type + '" name="wp-' + q.id + '" value="' + o + '"' + (on ? ' checked' : '') + '>' +
      '<span class="wp__mark" aria-hidden="true">' + H.icon('check') + '</span><span>' + esc(t('app_wp_' + q.id + '_' + o, { lang: langWord() })) + '</span></label>';
  }
  function canGo(q) {
    var a = answers[q.id];
    if (q.kind === 'country') return !!a;
    if (q.kind === 'one') return !!a;
    if (q.kind === 'many') return a && a.length > 0;
    return true;
  }
  function foot(q) {
    var last = step === QUESTIONS.length - 1;
    return '<p class="wp__err" role="alert" hidden></p><div class="wp__foot">' +
      '<button type="button" class="btn btn--quiet btn--sm" data-wp="back">' + esc(t('app_wp_back')) + '</button>' +
      '<button type="button" class="btn btn--primary btn--sm" data-wp="next"' + (canGo(q) ? '' : ' disabled') + '>' +
      esc(t(last ? 'app_wp_send' : 'app_wp_next')) + '</button></div>';
  }

  function draw() {
    var card = box.querySelector('.wp__card'), html;
    if (step < 0) {
      html = '<div class="wp__intro"><span class="wp__hero" aria-hidden="true">' + H.drawing + '</span>' +
        '<h2 class="wp__h" id="wp-h" tabindex="-1">' + esc(t('app_wp_intro_h')) + '</h2>' +
        '<p class="wp__sub">' + esc(t('app_wp_intro_text')) + '</p>' +
        '<div class="wp__gift"><strong>' + esc(t('app_wp_gift_h')) + '</strong><span>' + esc(t('app_wp_gift_text')) + '</span></div>' +
        '<div class="wp__foot"><button type="button" class="btn btn--quiet btn--sm" data-wp="later">' + esc(t('app_wp_later')) + '</button>' +
        '<button type="button" class="btn btn--primary" data-wp="next">' + esc(t('app_wp_start')) + '</button></div></div>';
    } else if (step >= QUESTIONS.length) {
      html = thanks();
    } else {
      var q = QUESTIONS[step], a = answers[q.id];
      html = head(t('app_wp_' + q.id + '_h', { lang: langWord() }), q.kind === 'many' ? t('app_wp_' + q.id + '_sub') : (q.kind === 'country' ? t('app_wp_from_sub') : ''));
      if (q.kind === 'country') {
        html += '<label class="wp__label" for="wp-from">' + esc(t('app_wp_from_label')) + '</label>' +
          '<select class="wp__select" id="wp-from" data-q="from"><option value="">' + esc(t('app_wp_from_pick')) + '</option>' +
          (window.AlimunCountry ? AlimunCountry.options(H.lang === 'ma' ? 'fr' : H.lang, a) : '') + '</select>';
      } else if (q.kind === 'text') {
        html += '<label class="wp__label" for="wp-note">' + esc(t('app_wp_optional')) + '</label>' +
          '<textarea class="wp__text" id="wp-note" data-q="note" maxlength="600" rows="4">' + esc(a || '') + '</textarea>';
      } else {
        html += '<div class="wp__opts" role="group" aria-labelledby="wp-h">' + q.options.map(function (o) {
          return option(q, o, q.kind === 'many' ? (a || []).indexOf(o) > -1 : a === o);
        }).join('') + '</div>';
        if (q.extra) {
          html += '<label class="wp__label" for="wp-' + q.extra + '">' + esc(t('app_wp_' + q.extra)) + '</label>' +
            '<textarea class="wp__text" id="wp-' + q.extra + '" data-q="' + q.extra + '" maxlength="600" rows="3">' + esc(answers[q.extra] || '') + '</textarea>';
        }
      }
      html += foot(q);
    }
    card.innerHTML = html;
    var h = card.querySelector('#wp-h');
    if (h) h.focus({ preventScroll: true });
  }

  function thanks() {
    var mins = Math.round((answers._added || 0) / 60);
    var text = mins > 0 ? t('app_wp_done_text', { time: new Intl.NumberFormat(H.locale, { style: 'unit', unit: 'minute', unitDisplay: 'long' }).format(mins) }) : t('app_wp_done_again');
    return '<div class="wp__intro"><span class="wp__hero" aria-hidden="true">' + H.drawing + '</span>' +
      '<h2 class="wp__h" id="wp-h" tabindex="-1">' + esc(t('app_wp_done_h')) + '</h2>' +
      (mins > 0 ? '<div class="wp__gift"><strong>' + esc(t('app_wp_done_gift')) + '</strong><span>' + esc(text) + '</span></div>' : '<p class="wp__sub">' + esc(text) + '</p>') +
      '<p class="wp__sub">' + esc(t('app_wp_done_more')) + '</p>' +
      '<div class="wp__foot"><button type="button" class="btn btn--quiet btn--sm" data-wp="close">' + esc(t('app_wp_close')) + '</button>' +
      '<a class="btn btn--primary" href="#/tutor" data-wp="close">' + esc(t('app_wp_try_tutor')) + '</a></div></div>';
  }

  /* ---------- Answers ---------- */
  function refreshNext() {
    var q = QUESTIONS[step], b = box && box.querySelector('[data-wp="next"]');
    if (q && b) b.disabled = !canGo(q);
  }
  function onChange(e) {
    var el = e.target;
    if (el.matches('select[data-q]')) { answers[el.getAttribute('data-q')] = el.value; refreshNext(); return; }
    if (!el.matches('.wp__opt input')) return;
    var q = QUESTIONS[step];
    if (q.kind === 'one') {
      answers[q.id] = el.value;
      box.querySelectorAll('.wp__opt').forEach(function (l) { l.classList.toggle('is-on', l.querySelector('input').checked); });
    } else {
      var picked = Array.prototype.slice.call(box.querySelectorAll('.wp__opt input:checked')).map(function (i) { return i.value; });
      if (picked.length > q.max) { el.checked = false; picked = picked.filter(function (v) { return v !== el.value; }); }
      answers[q.id] = picked;
      box.querySelectorAll('.wp__opt').forEach(function (l) { l.classList.toggle('is-on', l.querySelector('input').checked); });
    }
    refreshNext();
  }
  function onInput(e) {
    var el = e.target;
    if (el.matches('textarea[data-q]')) answers[el.getAttribute('data-q')] = el.value.slice(0, 600);
  }
  function onKey(e) {
    if (e.key === 'Escape') { e.preventDefault(); close(step < QUESTIONS.length); return; }
    if (e.key !== 'Tab') return;
    var f = Array.prototype.slice.call(box.querySelectorAll('button:not([disabled]), a[href], input, select, textarea')).filter(function (x) { return x.offsetParent !== null; });
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
  function onClick(e) {
    if (e.target === box) return; /* a click outside the card does nothing: the answers are kept */
    var b = e.target.closest('[data-wp]');
    if (!b) return;
    var what = b.getAttribute('data-wp');
    if (what === 'later') return close(true);
    if (what === 'close') return close(false);
    if (what === 'back') { step = Math.max(-1, step - 1); return draw(); }
    if (what === 'next') {
      if (step === QUESTIONS.length - 1) return send(b);
      step++; draw();
    }
  }

  function send(btn) {
    if (sending) return;
    sending = true; btn.disabled = true;
    var out = {};
    Object.keys(answers).forEach(function (k) {
      var v = answers[k];
      if (k.charAt(0) === '_' || v == null || v === '' || (Array.isArray(v) && !v.length)) return;
      out[k] = typeof v === 'string' ? v.trim().slice(0, 600) : v;
    });
    (H.preview ? Promise.resolve(600) : window.AlimunData.submitWelcomePoll(out)).then(function (added) {
      sending = false;
      store(LATER_KEY, null);
      answers._added = added;
      step = QUESTIONS.length;
      if (box) draw();
      if (H.onDone) H.onDone(added);
    }, function (err) {
      sending = false; btn.disabled = false;
      console.warn('[Alimun] welcome poll not sent', err && err.message);
      var p = box && box.querySelector('.wp__err');
      if (p) { p.textContent = t('app_wp_error'); p.hidden = false; }
    });
  }

  window.AlimunPoll = { maybe: maybe, open: function (helpers) { H = helpers || H; if (H) open(); } };
})();
