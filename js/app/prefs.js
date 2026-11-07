/* Alimun dashboards: country and the news-and-offers choice, shared by the student (js/app/settings.js) and teacher
   (js/app/teach-account.js) settings. docs/GROWTH_PLAN.md step 2.
   AlimunPrefs.countryField(A, current): a labelled <select name="country"> (names in the dashboard language).
   AlimunPrefs.newsCard(A, consent, i): the card with "I am 16 or older" and "Send me news and offers from Alimun".
   AlimunPrefs.bindNews(root, A, sample): saves each change as a new consent row (marketing_consents, source settings);
   the database refuses consent without the 16+ check, and the news box is off until that check is ticked.
   Text: app_st_country, app_st_news_h, app_st_news_p, app_st_age16, app_st_news, app_st_saved, app_st_error. */
(function () {
  'use strict';
  function countryField(A, current) {
    var C = window.AlimunCountry, cur = current || '';
    var opts = '<option value="">…</option>' + (C ? C.options(A.lang, cur) : (cur ? '<option value="' + A.esc(cur) + '" selected>' + A.esc(cur) + '</option>' : ''));
    return '<label class="st-field"><span class="st-lbl">' + A.esc(A.t('app_st_country')) + '</span><select class="st-in" name="country" autocomplete="country">' + opts + '</select></label>';
  }
  function newsCard(A, consent, i) {
    var adult = !!(consent && consent.age_16_plus), on = !!(consent && consent.granted);
    return '<section class="card span-12 st-card" style="--i:' + (i || 0) + '" aria-labelledby="h-news"><h2 class="t-h2" id="h-news">' + A.esc(A.t('app_st_news_h')) + '</h2>' +
      '<p class="t-body">' + A.esc(A.t('app_st_news_p')) + '</p>' +
      '<div class="st-ticks" data-news>' +
        '<label class="st-day"><input type="checkbox" data-news-adult' + (adult ? ' checked' : '') + '><span>' + A.esc(A.t('app_st_age16')) + '</span></label>' +
        '<label class="st-day"><input type="checkbox" data-news-on' + (on ? ' checked' : '') + (adult ? '' : ' disabled') + '><span>' + A.esc(A.t('app_st_news')) + '</span></label>' +
      '</div><p class="t-body st-msg" data-msg="news" aria-live="polite"></p></section>';
  }
  function bindNews(root, A, isSample) {
    if (root.__prefsNews) return;
    root.__prefsNews = true;
    root.addEventListener('change', function (e) {
      var box = e.target.closest('[data-news]'); if (!box) return;
      var adultEl = box.querySelector('[data-news-adult]'), onEl = box.querySelector('[data-news-on]');
      var adult = adultEl.checked;
      onEl.disabled = !adult; if (!adult) onEl.checked = false;
      var msg = root.querySelector('[data-msg="news"]');
      var say = function (key, bad) { if (msg) { msg.textContent = A.t(key); msg.classList.toggle('is-bad', !!bad); } };
      if (isSample()) { say('app_st_sample_saved'); return; }
      adultEl.disabled = true; onEl.disabled = true;
      window.AlimunData.saveConsent(adult && onEl.checked, adult).then(function () {
        adultEl.disabled = false; onEl.disabled = !adult; say('app_st_saved');
      }, function (err) {
        adultEl.disabled = false; onEl.disabled = !adultEl.checked; say('app_st_error', true);
        console.warn('[Alimun] News choice not saved', err && err.message);
      });
    });
  }
  window.AlimunPrefs = { countryField: countryField, newsCard: newsCard, bindNews: bindNews };
})();
