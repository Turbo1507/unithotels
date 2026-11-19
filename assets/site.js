(function () {
  // :active на iOS срабатывает только при слушателе касаний
  document.addEventListener('touchstart', function () {}, { passive: true });
  var root = document.documentElement;
  // высота экрана в px один раз и только при смене ширины: в Telegram и Safari страница не дёргается
  function setVh() { root.style.setProperty('--vh', innerHeight / 100 + 'px'); }
  setVh();
  var lastW = innerWidth;
  addEventListener('resize', function () { if (innerWidth !== lastW) { lastW = innerWidth; setVh(); } });

  // выбор языка: список по кнопке, выбор запоминаем в куки на год
  var dd = document.querySelector('.lang-dd');
  if (!dd) return;
  var btn = dd.querySelector('.lang-dd-btn'), list = dd.querySelector('.lang-dd-list');
  var links = [].slice.call(list.querySelectorAll('a'));
  function open(on, kbd) {
    btn.setAttribute('aria-expanded', on ? 'true' : 'false'); list.hidden = !on;
    if (on && kbd) (list.querySelector('[aria-current]') || links[0]).focus();
  }
  btn.addEventListener('click', function (e) { open(list.hidden, e.detail === 0); });
  document.addEventListener('click', function (e) { if (!list.hidden && !dd.contains(e.target)) open(false); });
  dd.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !list.hidden) { open(false); btn.focus(); return; }
    if (e.key === 'ArrowDown' && list.hidden && e.target === btn) { e.preventDefault(); open(true, true); return; }
    var i = links.indexOf(document.activeElement);
    if (i < 0) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); links[(i + (e.key === 'ArrowDown' ? 1 : links.length - 1)) % links.length].focus(); }
  });
  list.addEventListener('click', function (e) {
    var a = e.target.closest('a[hreflang]');
    if (!a) return;
    document.cookie = 'unit_lang=' + a.hreflang + '; path=/; max-age=31536000; SameSite=Lax';
    a.href = a.href.split('#')[0] + location.hash;
  });
})();

// галерея первого экрана: смена раз в 5,5 с, точки переключают, пауза при скрытой вкладке и при «меньше движения»
(function () {
  var slides = [].slice.call(document.querySelectorAll('.hero-slide'));
  var caps = [].slice.call(document.querySelectorAll('.hero-cap'));
  var dots = document.querySelector('.hero-dots');
  if (slides.length < 2 || !dots) return;
  var label = dots.getAttribute('aria-label') || '';
  dots.innerHTML = slides.map(function (_, i) { return '<button type="button" data-i="' + i + '" aria-label="' + label + ' ' + (i + 1) + ' / ' + slides.length + '"' + (i ? '' : ' aria-current="true"') + '></button>'; }).join('');
  var idx = 0, timer, still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  function show(i) {
    idx = i;
    slides.forEach(function (s, k) { s.classList.toggle('on', k === i); });
    caps.forEach(function (c, k) { c.classList.toggle('on', k === i); if (k === i) c.removeAttribute('aria-hidden'); else c.setAttribute('aria-hidden', 'true'); });
    [].forEach.call(dots.children, function (b, k) { if (k === i) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current'); });
  }
  function run() { clearInterval(timer); if (still || document.hidden) return; timer = setInterval(function () { show((idx + 1) % slides.length); }, 5500); }
  dots.addEventListener('click', function (e) { var b = e.target.closest('button'); if (b) { show(+b.dataset.i); run(); } });
  document.addEventListener('visibilitychange', run);
  run();
})();

// шапка липкая, как у фурнитуры: над первым экраном прозрачная, дальше светлая подложка
(function () {
  var h = document.querySelector('.hdr'), hero = document.querySelector('.hero');
  if (!h || !hero) return;
  // прозрачная только в самом верху; чуть прокрутили — светлая, иначе белый заголовок сливается с белым текстом шапки
  function upd() { h.classList.toggle('is-over', scrollY < 4); }
  addEventListener('scroll', upd, { passive: true }); upd();
})();

/* переход по якорю: блок, который влезает в экран, встаёт целиком, ближе к середине, но не выше своего фона;
   высокий блок встаёт заголовком под шапку с отступом 40 (на телефоне 24) */
(function () {
  var hdr = document.querySelector('.hdr');
  var calm = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)');

  function spot(el) {
    var box = el.querySelector(':scope > .container') || el;
    var top0 = hdr ? hdr.offsetHeight : 0;
    var gap = innerWidth < 600 ? 24 : 40;
    var r = box.getBoundingClientRect();
    var free = innerHeight - top0;
    // не выше своего фона: сверху не должен выглядывать соседний блок
    var cs = getComputedStyle(el), room = r.top - el.getBoundingClientRect().top;
    var prev = el.previousElementSibling;
    if (parseFloat(cs.paddingTop) < gap && prev) room += parseFloat(getComputedStyle(prev).paddingBottom) || 0;
    var y = scrollY + r.top - top0 - (r.height + gap * 2 <= free ? Math.max(gap, Math.min((free - r.height) / 2, room)) : gap);
    return Math.max(0, Math.min(Math.round(y), document.documentElement.scrollHeight - innerHeight));
  }
  function target(hash) {
    if (!hash || hash === '#' || hash === '#top') return null;
    try { return document.getElementById(decodeURIComponent(hash.slice(1))); } catch (e) { return null; }
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var hash = a.getAttribute('href'), el = target(hash);
    if (!el && hash !== '#top' && hash !== '#') return;
    e.preventDefault();
    var top = el ? spot(el) : 0;
    scrollTo({ top: top, behavior: calm && calm.matches ? 'auto' : 'smooth' });
    if (history.pushState) history.pushState(null, '', el ? hash : location.pathname + location.search);
    if (el) {
      if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
      el.focus({ preventScroll: true });
    }
  });

  /* открыли ссылку с #якорем или вернулись «назад»: ставим блок так же, без анимации */
  var touched = false;
  ['wheel', 'touchstart', 'keydown', 'mousedown'].forEach(function (ev) {
    addEventListener(ev, function () { touched = true; }, { once: true, passive: true });
  });
  function place() {
    var el = target(location.hash);
    if (el && !touched) scrollTo({ top: spot(el), behavior: 'auto' });
  }
  if (location.hash.length > 1) addEventListener('load', function () { place(); setTimeout(place, 500); });
  addEventListener('popstate', function () { touched = false; place(); });
})();
