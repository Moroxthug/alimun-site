const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const PAGES = [
  'it/corsi-inglese-online.html',
  'it/corsi-tedesco-online.html',
  'it/corsi-francese-online.html',
  'it/corsi-spagnolo-online.html',
  'it/corsi-portoghese-online.html'
];

const WORKSPACE_DIR = __dirname;

function checkHtmlTags(html) {
  // Strip comments, scripts, styles to avoid confusion
  html = html.replace(/<!--[\s\S]*?-->/g, '');
  html = html.replace(/<script[\s\S]*?<\/script>/gi, '');
  html = html.replace(/<style[\s\S]*?<\/style>/gi, '');

  const stack = [];
  const selfClosing = new Set([
    'img', 'link', 'meta', 'br', 'hr', 'input', 'source', 'col',
    'embed', 'param', 'track', 'wbr', 'area', 'base', '!doctype'
  ]);
  
  const errors = [];
  let i = 0;
  while (i < html.length) {
    if (html[i] === '<') {
      let tagEnd = html.indexOf('>', i);
      if (tagEnd === -1) {
        errors.push({ type: 'unclosed-tag-syntax', snippet: html.substring(i, i + 50) });
        break;
      }
      
      let tagContent = html.substring(i + 1, tagEnd).trim();
      i = tagEnd + 1;
      
      if (tagContent.startsWith('!') && !tagContent.toLowerCase().startsWith('!doctype')) {
        continue;
      }
      
      let isClosing = tagContent.startsWith('/');
      let tagName = '';
      if (isClosing) {
        tagName = tagContent.substring(1).trim().split(/\s+/)[0].toLowerCase();
      } else {
        tagName = tagContent.split(/\s+/)[0].toLowerCase();
      }
      
      let isSelfClosing = selfClosing.has(tagName) || tagContent.endsWith('/');
      
      if (isSelfClosing) {
        continue;
      }
      
      if (isClosing) {
        if (stack.length === 0) {
          errors.push({ type: 'unexpected-closing-tag', tag: tagName, snippet: tagContent });
        } else {
          let last = stack.pop();
          if (last.name !== tagName) {
            errors.push({ type: 'mismatched-tag', expected: last.name, found: tagName, snippet: tagContent });
          }
        }
      } else {
        stack.push({ name: tagName, snippet: tagContent });
      }
    } else {
      i++;
    }
  }
  
  while (stack.length > 0) {
    let unclosed = stack.pop();
    errors.push({ type: 'unclosed-tag', tag: unclosed.name, snippet: unclosed.snippet });
  }
  
  return errors;
}

function verifyPage(relativePagePath) {
  const filePath = path.join(WORKSPACE_DIR, relativePagePath);
  console.log(`\n==================================================`);
  console.log(`VERIFYING PAGE: ${relativePagePath}`);
  console.log(`==================================================`);

  if (!fs.existsSync(filePath)) {
    console.error(`ERROR: File does not exist at ${filePath}`);
    return { exists: false };
  }

  const html = fs.readFileSync(filePath, 'utf8');
  const results = {
    exists: true,
    htmlIntegrity: [],
    brokenAssets: [],
    placeholders: [],
    jsonLdErrors: [],
    cleanUrlMatches: [],
    brokenAnchors: []
  };

  // 1. HTML Integrity (Custom Tag Balancing & Cheerio Load)
  try {
    const tagErrors = checkHtmlTags(html);
    if (tagErrors.length > 0) {
      results.htmlIntegrity.push(...tagErrors);
    }
  } catch (err) {
    results.htmlIntegrity.push({ type: 'parsing-exception', message: err.message });
  }

  let $;
  try {
    $ = cheerio.load(html);
  } catch (err) {
    results.htmlIntegrity.push({ type: 'cheerio-load-exception', message: err.message });
    return results;
  }

  // Extract all IDs on the page for anchor validation
  const pageIds = new Set();
  $('[id]').each((_, el) => {
    const id = $(el).attr('id');
    if (id) pageIds.add(id);
  });
  $('[name]').each((_, el) => {
    const name = $(el).attr('name');
    if (name) pageIds.add(name);
  });

  // Helper to check if file exists
  function checkLocalFile(refPath) {
    if (!refPath) return true;
    // Resolve relative to the page's directory (which is WORKSPACE_DIR/it/)
    const dir = path.dirname(filePath);
    const resolvedPath = path.resolve(dir, refPath);
    return fs.existsSync(resolvedPath);
  }

  // Helper to check for external link or protocol
  function isExternalOrSpecial(refPath) {
    if (!refPath) return true;
    const val = refPath.trim();
    return (
      val.startsWith('http://') ||
      val.startsWith('https://') ||
      val.startsWith('//') ||
      val.startsWith('mailto:') ||
      val.startsWith('tel:') ||
      val.startsWith('javascript:')
    );
  }

  // 2. Asset & Link Paths Verification
  
  // Stylesheets
  $('link[href]').each((_, el) => {
    const href = $(el).attr('href');
    const rel = $(el).attr('rel') || '';
    if (rel.toLowerCase() === 'stylesheet' || href.endsWith('.css')) {
      if (!isExternalOrSpecial(href)) {
        if (!checkLocalFile(href)) {
          results.brokenAssets.push({ type: 'stylesheet', path: href });
        }
      }
    }
  });

  // Scripts
  $('script[src]').each((_, el) => {
    const src = $(el).attr('src');
    if (!isExternalOrSpecial(src)) {
      if (!checkLocalFile(src)) {
        results.brokenAssets.push({ type: 'script', path: src });
      }
    }
  });

  // Images (src and srcset)
  $('img[src]').each((_, el) => {
    const src = $(el).attr('src');
    if (!isExternalOrSpecial(src)) {
      if (!checkLocalFile(src)) {
        results.brokenAssets.push({ type: 'image-src', path: src });
      }
    }
  });
  $('img[srcset]').each((_, el) => {
    const srcset = $(el).attr('srcset');
    if (srcset) {
      const parts = srcset.split(',').map(s => s.trim().split(/\s+/)[0]);
      parts.forEach(src => {
        if (!isExternalOrSpecial(src)) {
          if (!checkLocalFile(src)) {
            results.brokenAssets.push({ type: 'image-srcset', path: src });
          }
        }
      });
    }
  });

  // Video and Audio
  $('source[src]').each((_, el) => {
    const src = $(el).attr('src');
    if (!isExternalOrSpecial(src)) {
      if (!checkLocalFile(src)) {
        results.brokenAssets.push({ type: 'source-src', path: src });
      }
    }
  });
  $('video[poster]').each((_, el) => {
    const poster = $(el).attr('poster');
    if (!isExternalOrSpecial(poster)) {
      if (!checkLocalFile(poster)) {
        results.brokenAssets.push({ type: 'video-poster', path: poster });
      }
    }
  });
  $('video[src]').each((_, el) => {
    const src = $(el).attr('src');
    if (!isExternalOrSpecial(src)) {
      if (!checkLocalFile(src)) {
        results.brokenAssets.push({ type: 'video-src', path: src });
      }
    }
  });
  $('audio[src]').each((_, el) => {
    const src = $(el).attr('src');
    if (!isExternalOrSpecial(src)) {
      if (!checkLocalFile(src)) {
        results.brokenAssets.push({ type: 'audio-src', path: src });
      }
    }
  });

  // Anchors and Clean URLs
  $('a[href]').each((_, el) => {
    const href = $(el).attr('href');
    if (!href) return;

    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      if (targetId && !pageIds.has(targetId)) {
        results.brokenAnchors.push({ type: 'hash-anchor', anchor: href });
      }
    } else if (!isExternalOrSpecial(href)) {
      // Check if it's an HTML page or clean URL
      const isHtml = /\.html\b/i.test(href) || href.endsWith('.html');
      
      // Let's check clean URL matching
      // If it ends with .html, it is not a clean URL.
      // If it doesn't end with .html, does the corresponding .html file exist?
      let targetFileToCheck = href;
      if (!isHtml) {
        // If clean URL, e.g. ../about-us -> we check if about-us.html exists
        // Strip trailing slash if present
        let cleanBase = href.split('#')[0].split('?')[0];
        if (cleanBase.endsWith('/')) {
          cleanBase = cleanBase.slice(0, -1);
        }
        if (cleanBase && cleanBase !== '..' && cleanBase !== '.') {
          targetFileToCheck = cleanBase + '.html';
        }
      }
      
      const fileExists = checkLocalFile(targetFileToCheck);
      
      results.cleanUrlMatches.push({
        href: href,
        isClean: !isHtml,
        targetExists: fileExists,
        resolvedPath: targetFileToCheck
      });

      if (!fileExists) {
        results.brokenAssets.push({ type: 'anchor-link', path: href, resolvedTarget: targetFileToCheck });
      }
    }
  });

  // 3. Search for Placeholders (TODO, TBD, etc.)
  // Search text contents
  const bodyText = $('body').text();
  const placeholdersRegex = /\b(TODO|TBD|\[TODO\]|\[TBD\])\b/i;
  const templateVarRegex = /(\$\{[a-zA-Z0-9_]+\}|\{\{[a-zA-Z0-9_]+\}\})/g;
  
  // Search full HTML for raw markers
  const matchesPlaceholder = html.match(/\b(TODO|TBD|\[TODO\]|\[TBD\])\b/gi);
  if (matchesPlaceholder) {
    results.placeholders.push({ type: 'marker', matches: matchesPlaceholder });
  }
  
  // Search for template interpolation leftover syntax (e.g. ${something} or {{something}} or {name})
  const matchesTemplate = html.match(/(\$\{[a-zA-Z0-9_]+\}|\{\{[a-zA-Z0-9_]+\}\})/g);
  if (matchesTemplate) {
    results.placeholders.push({ type: 'template-string', matches: matchesTemplate });
  }

  // Also check for unresolved translated variables like {something} in text
  $('[data-i18n], [data-i18n-html]').each((_, el) => {
    const text = $(el).text();
    const matchesVar = text.match(/\{[a-zA-Z0-9_]+\}/g);
    if (matchesVar) {
      results.placeholders.push({ type: 'unresolved-i18n-variable', tag: el.tagName, key: $(el).attr('data-i18n') || $(el).attr('data-i18n-html'), text: text, matches: matchesVar });
    }
  });

  // 4. JSON-LD Validity
  $('script[type="application/ld+json"]').each((index, el) => {
    const jsonText = $(el).html().trim();
    try {
      const parsed = JSON.parse(jsonText);
      // Valid JSON
    } catch (err) {
      results.jsonLdErrors.push({
        index: index,
        error: err.message,
        snippet: jsonText.substring(0, 100) + '...'
      });
    }
  });

  // Print Summary to console
  console.log(`HTML Integrity: ${results.htmlIntegrity.length === 0 ? 'PASS' : 'FAIL (' + results.htmlIntegrity.length + ' errors)'}`);
  if (results.htmlIntegrity.length > 0) {
    console.log(JSON.stringify(results.htmlIntegrity, null, 2));
  }

  console.log(`Asset & Link Paths: ${results.brokenAssets.length === 0 ? 'PASS' : 'FAIL (' + results.brokenAssets.length + ' broken)'}`);
  if (results.brokenAssets.length > 0) {
    console.log(JSON.stringify(results.brokenAssets, null, 2));
  }

  console.log(`Broken Hash Anchors: ${results.brokenAnchors.length === 0 ? 'PASS' : 'FAIL (' + results.brokenAnchors.length + ' broken)'}`);
  if (results.brokenAnchors.length > 0) {
    console.log(JSON.stringify(results.brokenAnchors, null, 2));
  }

  console.log(`Placeholders: ${results.placeholders.length === 0 ? 'PASS' : 'FAIL (' + results.placeholders.length + ' found)'}`);
  if (results.placeholders.length > 0) {
    console.log(JSON.stringify(results.placeholders, null, 2));
  }

  console.log(`JSON-LD Validity: ${results.jsonLdErrors.length === 0 ? 'PASS' : 'FAIL (' + results.jsonLdErrors.length + ' errors)'}`);
  if (results.jsonLdErrors.length > 0) {
    console.log(JSON.stringify(results.jsonLdErrors, null, 2));
  }

  const cleanUrls = results.cleanUrlMatches.filter(u => u.isClean);
  const dirtyUrls = results.cleanUrlMatches.filter(u => !u.isClean);
  console.log(`Clean URLs: ${dirtyUrls.length === 0 ? 'ALL CLEAN' : 'MIXED (' + dirtyUrls.length + ' dirty/with .html)'}`);
  if (dirtyUrls.length > 0) {
    console.log("Dirty URLs found:", dirtyUrls.map(u => u.href));
  }

  return results;
}

const allResults = {};
PAGES.forEach(page => {
  allResults[page] = verifyPage(page);
});

// Save detailed report as JSON
fs.writeFileSync(path.join(WORKSPACE_DIR, 'verification-results.json'), JSON.stringify(allResults, null, 2), 'utf8');
console.log(`\nDetailed verification results written to verification-results.json`);
