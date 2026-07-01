/**
 * ============================================================
 *  ALIMUN — Internationalization (i18n) Engine & UI
 *  /js/i18n.js
 * ============================================================
 */

(function () {
  const STORAGE_KEY = 'alimun-lang';
  const LANGUAGES = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦', isRTL: true }
  ];

  // Helper to get active language
  function getActiveLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && LANGUAGES.some(l => l.code === saved)) {
      return saved;
    }
    // Browser fallback
    const browserLang = navigator.language.slice(0, 2);
    if (LANGUAGES.some(l => l.code === browserLang)) {
      return browserLang;
    }
    return 'en';
  }

  // Immediate auto-redirection / language sync routing
  (function initRouting() {
    const pathname = window.location.pathname;
    const parts = pathname.split('/').filter(p => p.length > 0);
    const langCodes = LANGUAGES.map(l => l.code);
    
    const hasLangPrefix = parts.length > 0 && langCodes.includes(parts[0]);
    const urlLang = hasLangPrefix ? parts[0] : 'en';

    if (hasLangPrefix) {
      const savedLang = localStorage.getItem(STORAGE_KEY);
      if (savedLang !== urlLang) {
        localStorage.setItem(STORAGE_KEY, urlLang);
      }
    } else {
      const activeLang = getActiveLang();
      if (activeLang !== 'en') {
        const filename = parts.join('/') || 'index.html';
        const targetPath = `/${activeLang}/${filename}`;
        window.location.replace(window.location.origin + targetPath);
      }
    }
  })();

  // Set direction and lang attributes
  function updateDocumentDirection(lang) {
    const active = LANGUAGES.find(l => l.code === lang);
    document.documentElement.lang = lang;
    if (active && active.isRTL) {
      document.documentElement.dir = 'rtl';
      injectRTLStyles();
    } else {
      document.documentElement.dir = 'ltr';
      removeRTLStyles();
    }
  }

  // Inject CSS rules for RTL layouts (Arabic)
  function injectRTLStyles() {
    if (document.getElementById('alimun-rtl-styles')) return;
    const css = `
      html[dir="rtl"] body {
        text-align: right;
      }
      /* Dashboard Sidebar */
      html[dir="rtl"] .sb {
        left: auto !important;
        right: 0 !important;
        border-right: none !important;
        border-left: 1px solid rgba(0,0,0,.07) !important;
      }
      html[dir="rtl"] .main {
        margin-left: 0 !important;
        margin-right: var(--sb, 258px) !important;
      }
      html[dir="rtl"] .main.col {
        margin-left: 0 !important;
        margin-right: var(--sbc, 68px) !important;
      }
      html[dir="rtl"] .sb-bot {
        direction: rtl;
      }
      html[dir="rtl"] .sb-nav {
        direction: rtl;
      }
      html[dir="rtl"] .sb-a {
        text-align: right !important;
        gap: .7rem;
      }
      html[dir="rtl"] .sb-a svg {
        margin-left: 0 !important;
      }
      html[dir="rtl"] .sb-tgl svg {
        transform: rotate(180deg);
      }
      /* Landing page margins & elements */
      html[dir="rtl"] .nav_logo {
        margin-right: 0 !important;
        margin-left: 1.5rem !important;
      }
      html[dir="rtl"] .nav_menu-link-wrap.is-left {
        margin-left: 2rem !important;
        margin-right: 0 !important;
      }
      html[dir="rtl"] .navbar {
        direction: rtl;
      }
      html[dir="rtl"] .nav_wrap {
        flex-direction: row-reverse !important;
      }
      html[dir="rtl"] .nav_wrap div[style*="display:flex"] {
        flex-direction: row-reverse !important;
        margin-right: 0 !important;
        margin-left: .875rem !important;
      }
      html[dir="rtl"] .video_btn {
        right: auto !important;
        left: 2rem !important;
      }
      html[dir="rtl"] #founding-cohort {
        direction: rtl;
      }
      html[dir="rtl"] #founding-cohort h2 {
        text-align: right !important;
      }
      html[dir="rtl"] #founding-cohort p {
        text-align: right !important;
      }
      html[dir="rtl"] #founding-cohort div[style*="text-align:right"] {
        text-align: left !important;
      }
      /* Forms elements */
      html[dir="rtl"] .field label,
      html[dir="rtl"] .field-row label {
        text-align: right !important;
      }
      html[dir="rtl"] .google-btn {
        flex-direction: row-reverse !important;
      }
      html[dir="rtl"] .card-foot {
        text-align: right !important;
      }
      html[dir="rtl"] .topbar {
        flex-direction: row-reverse !important;
      }
      html[dir="rtl"] .topbar a {
        margin-left: auto !important;
        margin-right: 0 !important;
      }
      /* Utility flips */
      html[dir="rtl"] .icon-16,
      html[dir="rtl"] .icon-24,
      html[dir="rtl"] img[src*="arrow-light"],
      html[dir="rtl"] img[src*="faq-arrow"] {
        transform: scaleX(-1) !important;
      }
      /* Cookies banner */
      html[dir="rtl"] #alimun-cookie-banner {
        text-align: right !important;
      }
      html[dir="rtl"] .cookie-banner-btns {
        flex-direction: row-reverse !important;
      }
      /* Dropdown UI alignment for RTL */
      html[dir="rtl"] .alimun-i18n-dropdown-menu {
        left: auto !important;
        right: 0 !important;
      }
    `;
    const style = document.createElement('style');
    style.id = 'alimun-rtl-styles';
    style.innerHTML = css;
    document.head.appendChild(style);
  }

  function removeRTLStyles() {
    const style = document.getElementById('alimun-rtl-styles');
    if (style) style.remove();
  }

  // Safe translation function
  function translateElement(element) {
    const translations = window.ALIMUN_TRANSLATIONS;
    if (!translations) return;

    const lang = getActiveLang();
    const langDict = translations[lang] || translations['en'];

    // 1. Text translations (data-i18n)
    if (element.hasAttribute('data-i18n')) {
      const key = element.getAttribute('data-i18n');
      if (langDict[key]) {
        let value = langDict[key];
        value = interpolateVariables(element, value);
        element.textContent = value;
      }
    }

    // 2. HTML translations (data-i18n-html)
    if (element.hasAttribute('data-i18n-html')) {
      const key = element.getAttribute('data-i18n-html');
      if (langDict[key]) {
        let value = langDict[key];
        value = interpolateVariables(element, value);
        element.innerHTML = value;
      }
    }

    // 3. Placeholder translations (data-i18n-placeholder)
    if (element.hasAttribute('data-i18n-placeholder')) {
      const key = element.getAttribute('data-i18n-placeholder');
      if (langDict[key]) {
        element.setAttribute('placeholder', langDict[key]);
      }
    }

    // 4. Value translations (data-i18n-value)
    if (element.hasAttribute('data-i18n-value')) {
      const key = element.getAttribute('data-i18n-value');
      if (langDict[key]) {
        element.setAttribute('value', langDict[key]);
      }
    }

    // 5. Title translations (data-i18n-title)
    if (element.hasAttribute('data-i18n-title')) {
      const key = element.getAttribute('data-i18n-title');
      if (langDict[key]) {
        element.setAttribute('title', langDict[key]);
      }
    }
  }

  // Replace placeholders like {name} in translated values using data-i18n-var-* attributes
  function interpolateVariables(element, text) {
    const matches = text.match(/\{[a-zA-Z0-9_]+\}/g);
    if (!matches) return text;

    let result = text;
    matches.forEach(match => {
      const varName = match.slice(1, -1);
      const attrVal = element.getAttribute(`data-i18n-var-${varName}`);
      if (attrVal !== null) {
        result = result.replace(match, attrVal);
      }
    });
    return result;
  }

  // Translate all marked elements on the page
  function translatePage() {
    const lang = getActiveLang();
    updateDocumentDirection(lang);

    document.querySelectorAll('[data-i18n], [data-i18n-html], [data-i18n-placeholder], [data-i18n-value], [data-i18n-title]').forEach(translateElement);
    
    // Custom logic: update index.html combos if the landing page script variables are present
    if (window.combosTranslated) {
      window.updateCombosLang(lang);
    }
  }

  // Setup a MutationObserver to translate dynamically loaded nodes
  function initObserver() {
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.matches('[data-i18n], [data-i18n-html], [data-i18n-placeholder], [data-i18n-value], [data-i18n-title]')) {
              translateElement(node);
            }
            node.querySelectorAll('[data-i18n], [data-i18n-html], [data-i18n-placeholder], [data-i18n-value], [data-i18n-title]').forEach(translateElement);
          }
        });
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  // Inject a beautiful language selector dropdown
  function injectLanguageSelector() {
    const activeCode = getActiveLang();
    const activeLang = LANGUAGES.find(l => l.code === activeCode) || LANGUAGES[0];

    // Find the best container to put the selector in
    let container = null;
    let insertionType = 'append'; // append or prepend or insertBefore

    const customLangContainer = document.getElementById('alimun-lang-container');
    const leftNav = document.querySelector('.nav_menu-link-wrap.is-left');
    const webflowNav = document.querySelector('.nav_wrap div[style*="display:flex"]');
    const topBar = document.querySelector('.topbar');
    const sbTop = document.querySelector('.sb-top');
    const sbBot = document.querySelector('.sb-bot');

    if (customLangContainer) {
      container = customLangContainer;
      insertionType = 'append';
    } else if (leftNav) {
      container = leftNav;
      insertionType = 'prepend'; // Prepend to left nav wrapper (before tiers link)
    } else if (webflowNav) {
      container = webflowNav;
      insertionType = 'prepend'; // Insert before sign-in/get-started
    } else if (topBar) {
      container = topBar;
      insertionType = 'append';
    } else if (sbTop) {
      container = sbTop;
      insertionType = 'append';
    } else if (sbBot) {
      container = sbBot;
      insertionType = 'prepend';
    } else {
      // Fallback: floating in bottom-right corner
      container = document.body;
      insertionType = 'float';
    }

    if (!container) return;

    // Check if selector already injected
    if (document.getElementById('alimun-lang-selector')) {
      document.getElementById('alimun-lang-selector').remove();
    }

    // Styles for language selector
    if (!document.getElementById('alimun-i18n-styles')) {
      const styles = `
        .alimun-i18n-dropdown {
          position: relative;
          display: inline-block;
          font-family: 'Satoshi', sans-serif;
          font-size: 0.64rem; font-weight: 700; color: #080808; z-index: 9999; margin-right: 0.25rem;
        }
        .alimun-i18n-btn {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 0, 0, 0.12); border-radius: 5rem; padding: 0.28rem 0.55rem;
          cursor: pointer;
          transition: all 0.2s ease;
          line-height: 1;
          user-select: none;
        }
        .alimun-i18n-btn:hover {
          background: rgba(255, 255, 255, 0.9);
          border-color: rgba(0, 0, 0, 0.4);
        }
        .alimun-i18n-dropdown-menu {
          position: absolute;
          top: calc(100% + 0.5rem);
          left: 0;
          background: rgba(8, 8, 8, 0.94);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 1rem;
          padding: 0.5rem;
          min-width: 140px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          display: none;
          flex-direction: column;
          gap: 0.25rem;
        }
        .alimun-i18n-dropdown-menu.show {
          display: flex;
        }
        .alimun-i18n-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.8);
          padding: 0.45rem 0.75rem;
          border-radius: 0.6rem;
          cursor: pointer;
          transition: all 0.15s ease;
          text-decoration: none;
          line-height: 1;
        }
        .alimun-i18n-item:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #ceff65;
        }
        .alimun-i18n-item.active {
          background: #ceff65;
          color: #080808;
          font-weight: 800;
        }
        .alimun-i18n-dropdown-arrow {
          font-size: 0.55rem;
          transition: transform 0.2s ease;
          opacity: 0.6;
        }
        .alimun-i18n-dropdown-menu.show + .alimun-i18n-btn .alimun-i18n-dropdown-arrow,
        .alimun-i18n-btn.active-arrow .alimun-i18n-dropdown-arrow {
          transform: rotate(180deg);
        }

        .alimun-i18n-dropdown .link_line {
          bottom: -6px;
          left: 0;
          transition: transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .alimun-i18n-dropdown:hover .link_line {
          transform: scale3d(1, 1, 1);
        }

        .alimun-get-started-wrapper {
          position: relative;
        }
        .alimun-get-started-wrapper .link_line {
          bottom: -6px;
          left: 0;
          transition: transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .alimun-get-started-wrapper:hover .link_line {
          transform: scale3d(1, 1, 1);
        }

        /* Floating Fallback Mode */
        .alimun-i18n-dropdown.is-floating {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          margin-right: 0;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
        }
        .alimun-i18n-dropdown.is-floating .alimun-i18n-dropdown-menu {
          top: auto;
          bottom: calc(100% + 0.5rem);
        }

        /* Dark mode overrides for dashboard sidebars */
        .sb-top .alimun-i18n-dropdown,
        .sb-bot .alimun-i18n-dropdown,
        .sb-lang-container .alimun-i18n-dropdown {
          margin-right: 0;
          width: 100%;
        }
        .sb-top .alimun-i18n-btn,
        .sb-bot .alimun-i18n-btn,
        .sb-lang-container .alimun-i18n-btn {
          width: 100%;
          justify-content: space-between;
          background: #f5f4f0;
          border-color: rgba(0,0,0,0.08);
        }
        .sb-top .alimun-i18n-btn:hover,
        .sb-bot .alimun-i18n-btn:hover,
        .sb-lang-container .alimun-i18n-btn:hover {
          background: #eae9e3;
        }
        .sb-top .alimun-i18n-dropdown-menu,
        .sb-bot .alimun-i18n-dropdown-menu,
        .sb-lang-container .alimun-i18n-dropdown-menu {
          right: 0;
          left: 0;
          min-width: 100%;
        }

        /* Student dashboard dark sidebar overrides */
        #sb .sb-lang-container .alimun-i18n-btn {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.1);
          color: #f0f0f0;
        }
        #sb .sb-lang-container .alimun-i18n-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
        }

        /* Collapsed sidebar language selector compact styling */
        .sb.col .sb-lang-container .alimun-i18n-btn,
        #sb.col .sb-lang-container .alimun-i18n-btn {
          justify-content: center;
          padding: 0.28rem 0;
        }
        .sb.col .sb-lang-container .alimun-i18n-btn span:not(:first-child),
        #sb.col .sb-lang-container .alimun-i18n-btn span:not(:first-child) {
          display: none;
        }
      `;
      const style = document.createElement('style');
      style.id = 'alimun-i18n-styles';
      style.innerHTML = styles;
      document.head.appendChild(style);
    }

    const wrapper = document.createElement('div');
    wrapper.id = 'alimun-lang-selector';
    wrapper.className = 'alimun-i18n-dropdown';
    if (insertionType === 'float') {
      wrapper.classList.add('is-floating');
    }

    const isSidebar = (container.closest && (container.closest('.sb') || container.closest('#sb') || container.closest('.sb-top') || container.closest('.sb-bot') || container.closest('.sb-lang-container'))) || false;
    if (insertionType !== 'float' && !isSidebar) {
      const line = document.createElement('div');
      line.className = 'link_line';
      wrapper.appendChild(line);
    }

    // Toggle button
    const btn = document.createElement('div');
    btn.className = 'alimun-i18n-btn';
    btn.innerHTML = `
      <span>${activeLang.flag} ${activeLang.code.toUpperCase()}</span>
      <span class="alimun-i18n-dropdown-arrow">▼</span>
    `;

    // Dropdown list
    const menu = document.createElement('div');
    menu.className = 'alimun-i18n-dropdown-menu';

    LANGUAGES.forEach(lang => {
      const item = document.createElement('div');
      item.className = 'alimun-i18n-item' + (lang.code === activeCode ? ' active' : '');
      item.innerHTML = `
        <span>${lang.flag}</span>
        <span>${lang.name}</span>
      `;
      item.addEventListener('click', () => {
        localStorage.setItem(STORAGE_KEY, lang.code);
        
        // Calculate target subdirectory URL
        const pathname = window.location.pathname;
        const parts = pathname.split('/').filter(p => p.length > 0);
        const langCodes = ['en', 'es', 'fr', 'de', 'pt', 'it', 'zh', 'ar'];
        
        let filename = 'index.html';
        if (parts.length > 0 && langCodes.includes(parts[0])) {
          filename = parts.slice(1).join('/') || 'index.html';
        } else {
          filename = parts.join('/') || 'index.html';
        }
        
        // Perform clean directory redirect
        const targetPath = lang.code === 'en' ? `/${filename}` : `/${lang.code}/${filename}`;
        window.location.href = window.location.origin + targetPath;
      });
      menu.appendChild(item);
    });

    // Toggle click handler
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('show');
      btn.classList.toggle('active-arrow');
    });

    // Document close on outside click
    document.addEventListener('click', () => {
      menu.classList.remove('show');
      btn.classList.remove('active-arrow');
    });

    wrapper.appendChild(btn);
    wrapper.appendChild(menu);

    // Insert into container
    if (insertionType === 'prepend') {
      container.insertBefore(wrapper, container.firstChild);
    } else if (insertionType === 'append' || insertionType === 'float') {
      container.appendChild(wrapper);
    }
  }

  function setupGetStartedHover() {
    const btn = document.querySelector('.nav_wrap a[href="signup.html"]');
    if (!btn) return;
    
    const parent = btn.parentElement;
    if (!parent) return;
    
    parent.classList.add('alimun-get-started-wrapper');
    
    if (!parent.querySelector('.link_line')) {
      const line = document.createElement('div');
      line.className = 'link_line';
      parent.appendChild(line);
    }
  }

  // Global functions exposed
  window.i18nTranslateElement = translateElement;
  window.i18nTranslatePage = translatePage;
  window.i18nGetActiveLang = getActiveLang;
  window.i18nLanguages = LANGUAGES;

  // Run on startup
  window.addEventListener('DOMContentLoaded', () => {
    translatePage();
    injectLanguageSelector();
    setupGetStartedHover();
    initObserver();
  });

  // Run immediately in case DOMContentLoaded has already fired or document is parsing
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    translatePage();
    injectLanguageSelector();
    setupGetStartedHover();
    initObserver();
  } else {
    // Immediate RTL set to prevent flicker
    updateDocumentDirection(getActiveLang());
  }

})();
