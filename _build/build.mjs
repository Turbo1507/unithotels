// Сборка сайта: корень на английском, остальные языки в /<код>/, текст вписан в HTML.
// У каждой версии свои canonical и hreflang, title и description английские.
// Запуск из site/:  node _build/build.mjs [https://unithotels.com/]
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { LANGS, NATIVE, LOCALE, T, glue } from './i18n.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = (process.argv[2] || 'https://turbo1507.github.io/unithotels/').replace(/\/?$/, '/');
const TITLE = 'UNIT. Hotels & Management: hotel and villa management in Bali';
const DESC = 'Professional hospitality management and premium service in Bali. Operations, revenue management, distribution and 24/7 guest service for your property.';
const V = Date.now().toString(36);
const url = l => SITE + (l === 'en' ? '' : l + '/');
const attr = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const plain = s => String(s).replace(/<[^>]+>/g, '').replace(/ /g, ' ');
const BRAND = '<i class="u5">UNIT.</i> Hotels &amp; Management';

function page(l) {
  const d = Object.fromEntries(Object.entries(T[l]).map(([k, v]) => [k, glue(v, l)]));
  const R = l === 'en' ? '' : '../';
  const langs = LANGS.map(x => `<li><a href="${R}${x === 'en' ? '' : x + '/'}" hreflang="${x}" lang="${x}"${x === l ? ' aria-current="true"' : ''}>${NATIVE[x]}</a></li>`).join('');
  const svc = [['ops', 's1', 900], ['rev', 's2', 760], ['mkt', 's3', 650], ['guest', 's4', 660]];
  const size = { ops: [920, 719, 600, 452], rev: [594, 760, 455, 444], mkt: [960, 650, 599, 364], guest: [959, 660, 698, 481] };
  return `<!doctype html>
<html lang="${l}"${l === 'en' ? '' : ' data-root="../"'}>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>${attr(TITLE)}</title>
<meta name="description" content="${attr(DESC)}">
<link rel="canonical" href="${url(l)}">
${LANGS.map(x => `<link rel="alternate" hreflang="${x}" href="${url(x)}">`).join('\n')}
<link rel="alternate" hreflang="x-default" href="${url('en')}">
<meta property="og:type" content="website">
<meta property="og:url" content="${url(l)}">
<meta property="og:title" content="UNIT. Hotels &amp; Management">
<meta property="og:description" content="${attr(DESC)}">
<meta property="og:image" content="${SITE}assets/img/hero.jpg">
<meta property="og:locale" content="${LOCALE[l]}">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 32 32%27%3E%3Crect width=%2732%27 height=%2732%27 rx=%278%27 fill=%27%230433ff%27/%3E%3Ccircle cx=%2722%27 cy=%2722%27 r=%273%27 fill=%27%23fff%27/%3E%3C/svg%3E">
<link rel="preload" href="${R}assets/fonts/hn-medium.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${R}assets/fonts/hn-roman.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${R}assets/site.css?v=${V}">
${l === 'en' ? `<script>(function(){var L=/^(${LANGS.join('|')})$/;if(/bot|crawl|spider|slurp|lighthouse|headless|preview/i.test(navigator.userAgent))return;var w=(location.search.match(/[?&]lang=([a-z]{2})/)||[])[1];if(!w){var m=document.cookie.match(/(?:^|;\\s*)unit_lang=([a-z]{2})/);w=m&&m[1]}if(!w||w==='en'||!L.test(w))return;location.replace(location.pathname.replace(/[^/]*$/,'')+w+'/'+location.hash)})();</script>` : ''}
</head>
<body>
<header class="hdr">
  <div class="container hdr-in">
    <a class="wordmark" href="#top">${BRAND}</a>
    <nav class="nav" aria-label="${attr(d.nav_label)}">
      <a href="#services">${d.nav_services}</a>
      <a href="#directions">${d.nav_directions}</a>
    </nav>
    <div class="lang-dd">
      <button type="button" class="lang-dd-btn" aria-expanded="false" aria-controls="langList" aria-label="${attr(d.lang_label)}: ${NATIVE[l]}"><span>${l.toUpperCase()}</span><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5"/></svg></button>
      <ul class="lang-dd-list" id="langList" hidden>${langs}</ul>
    </div>
    <a class="btn btn-sm hdr-cta" href="#directions">${d.cta}</a>
  </div>
</header>

<main id="top">
  <section class="hero">
    <picture>
      <source media="(max-width:599px)" srcset="${R}assets/img/hero-m.webp" type="image/webp">
      <source srcset="${R}assets/img/hero.webp" type="image/webp">
      <img src="${R}assets/img/hero.jpg" alt="${attr(plain(d.hero_alt))}" fetchpriority="high" width="2400" height="1600">
    </picture>
    <div class="container hero-in">
      <h1 class="t">${BRAND}</h1>
      <p class="t hero-sub">${d.hero_sub}</p>
      <div class="btns">
        <a class="btn btn-blue" href="#directions">${d.hero_cta1}</a>
        <a class="btn btn-ghost" href="https://unit.now">${d.hero_cta2}</a>
      </div>
    </div>
  </section>

  <section class="sec svc-sec" id="services">
    <div class="container">
      <h2 class="t h2">${d.svc_h2}</h2>
      <div class="svc">
${svc.map(([k, s], i) => `        <article class="svc-card svc-${k} svc-${i + 1}">
          <div class="svc-pic"><picture>
            <source media="(max-width:599px)" srcset="${R}assets/img/svc-${k}-m.webp" width="${size[k][2]}" height="${size[k][3]}">
            <img src="${R}assets/img/svc-${k}.webp" alt="" width="${size[k][0]}" height="${size[k][1]}" loading="lazy">
          </picture></div>
          <h3 class="t">${d[s + '_t']}</h3>
          <p class="t">${d[s + '_p']}</p>
        </article>`).join('\n')}
      </div>
    </div>
  </section>

  <section class="sec dir-sec" id="directions">
    <div class="container">
      <h2 class="t h2">${d.dir_h2}</h2>
      <div class="dir">
        <a class="dir-card dir-mgmt" href="#" data-todo="unit-management-url">
          <span class="t dir-tag">${d.d1_tag}</span>
          <div class="dir-body">
            <h3 class="t">${d.d1_t}</h3>
            <p class="t">${d.d1_p}</p>
            <span class="btn btn-white">${d.cta}</span>
          </div>
        </a>
        <a class="dir-card dir-book" href="https://unit.now">
          <img src="${R}assets/img/dir-book.webp" alt="" width="1600" height="1067" loading="lazy">
          <span class="t dir-tag">${d.d2_tag}</span>
          <div class="dir-body">
            <h3 class="t">${d.d2_t}</h3>
            <p class="t">${d.d2_p}</p>
            <span class="btn btn-white">${d.d2_cta}</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</main>

<footer class="ftr">
  <div class="container ftr-in">
    <span class="t wordmark">${BRAND}</span>
    <nav class="ftr-links" aria-label="${attr(plain(d.eco_label))}">
      <a class="t" href="https://unit.now">unit.now</a>
      <a class="t" href="https://unitdeveloper.com">unitdeveloper.com</a>
      <span class="t">© 2026 <i class="u5">UNIT.</i></span>
    </nav>
  </div>
</footer>
<script src="${R}assets/site.js?v=${V}" defer></script>
</body>
</html>
`;
}

for (const l of LANGS) {
  const dir = l === 'en' ? ROOT : path.join(ROOT, l);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), page(l));
}
const sm = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${LANGS.map(l => `  <url><loc>${url(l)}</loc>${LANGS.map(x => `<xhtml:link rel="alternate" hreflang="${x}" href="${url(x)}"/>`).join('')}<xhtml:link rel="alternate" hreflang="x-default" href="${url('en')}"/></url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sm);
console.log('build:', LANGS.join(' '), SITE);
