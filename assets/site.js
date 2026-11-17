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
