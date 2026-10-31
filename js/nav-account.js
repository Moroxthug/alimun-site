/* Header account links (owner, 31 Oct 2026: "get started is always there, even when logged in ... have dashboard or
   similar when logged in? And also the sign in option?").
   Signed out: a "Sign in" link at the other edge of the header from Get started (inside the menu on phones and tablets).
   Signed in: Get started becomes "My dashboard", leading to the dashboard for the account's role.
   The saved session is read only to choose which link to show; every dashboard checks the account on the server. */
(function () {
  var cta = document.querySelector(".nav_wrap .nav_cta");
  if (!cta) return;
  var btn = cta.querySelector("a");
  var session = null;
  try { session = JSON.parse(localStorage.getItem("alimun-auth") || "null"); } catch (e) {}
  var user = session && session.refresh_token && session.user;

  var css = document.createElement("style");
  css.textContent =
    ".nav_wrap > .nav_signin { position: absolute; left: 3%; top: 50%; transform: translateY(-50%); z-index: 2; font: 700 .74rem/1 Satoshi, sans-serif; color: #080808; text-decoration: none; padding: .44rem .35rem; white-space: nowrap; background-image: linear-gradient(#ceff65, #ceff65); background-repeat: no-repeat; background-position: 0 100%; background-size: 0% 2px; transition: background-size .3s ease; }" +
    ".nav_wrap > .nav_signin:hover { background-size: 100% 2px; }" +
    "[dir=\"rtl\"] .nav_wrap > .nav_signin { left: auto; right: 3%; background-position: 100% 100%; }" +
    ".nav_menu .lv-menu-signin, .nav_menu-items .lv-menu-signin { display: none; }" +
    "@media (max-width: 991px) { .nav_wrap > .nav_signin { display: none; } .nav_menu-items .lv-menu-signin { display: flex; } }";
  document.head.appendChild(css);

  var label = function (el, key) {
    el.setAttribute("data-i18n", key);
    if (typeof window.t === "function") { var v = window.t(key); if (v && v !== key) el.textContent = v; }
  };

  if (user) {
    var role = user.app_metadata && user.app_metadata.role;
    if (btn) {
      btn.href = role === "admin" ? "/app/admin" : role === "teacher" ? "/app/teach" : role === "student" ? "/app" : "/signin.html";
      btn.textContent = "Dashboard →";
      btn.setAttribute("data-i18n", "nav_dashboard");
    }
  } else {
    var a = document.createElement("a");
    a.href = "/signin.html"; a.className = "nav_signin"; a.textContent = "Sign in"; a.setAttribute("data-i18n", "nav_signin");
    cta.parentNode.appendChild(a);
    /* Phones and tablets: the header has no room, so the link sits at the end of the menu */
    var wraps = document.querySelectorAll(".nav_menu-items .nav_menu-link-wrap"), last = wraps[wraps.length - 1];
    if (last) {
      var m = document.createElement("a");
      m.href = "/signin.html"; m.className = "nav_link w-inline-block lv-menu-signin";
      m.innerHTML = '<div class="z-index-2" data-i18n="nav_signin">Sign in</div><div class="link_line"></div>';
      last.appendChild(m);
    }
  }
  /* Labels in the page's language once the translation script has loaded */
  var translate = function () {
    if (user && btn) label(btn, "nav_dashboard");
    document.querySelectorAll(".nav_signin, .lv-menu-signin [data-i18n]").forEach(function (el) { label(el, "nav_signin"); });
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", translate); else translate();
  if (window.ALIMUN_I18N_READY && window.ALIMUN_I18N_READY.then) window.ALIMUN_I18N_READY.then(translate);
})();
