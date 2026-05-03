gsap.registerPlugin(ScrollTrigger);

/* ─── Translations ────────────────────────────────────────── */
const i18n = {
  en: {
    'page.title':    'OHAVS — Electronic Music',
    'nav.tracks':    'Tracks',
    'nav.about':     'About',
    'nav.contact':   'Contact',
    'lang.btn':      'עב',
    'cookie.text':   'This site uses cookies to enhance your experience.',
    'hero.tag':      'Electronic Music Producer',
    'hero.word0':    'THE',
    'hero.word1':    'SOUND',
    'hero.word2':    'OF',
    'hero.word3':    'DARK',
    'hero.sub0':     'MACHINES',
    'hero.sub1':     'FREQUENCIES',
    'hero.sub2':     'MOTION',
    'hero.scroll':   'Scroll',
    'tracks.label':  'Selected Works',
    'tracks.title':  'TRACKS',
    't0.genre':  'Techno / 140 BPM',
    't0.title':  'VOID PROTOCOL',
    't0.desc':   'Hard-edged techno built from compressed metal samples and sub-bass decay loops. Recorded live at Tresor, Berlin.',
    't1.genre':  'Acid / 133 BPM',
    't1.title':  'CARBON RITE',
    't1.desc':   'Acidic TB-303 lines over industrial percussion and distorted pads. A journey through chemical darkness.',
    't2.genre':  'Industrial / 128 BPM',
    't2.title':  'SIGNAL DECAY',
    't2.desc':   'Featured release. Slow-building atmospheric tension colliding with rhythmic machinery. Over 80k streams.',
    't3.genre':  'EBM / 125 BPM',
    't3.title':  'IRON SLEEP',
    't3.desc':   'Classic EBM structures with contemporary sound design. Analog sequencer driven, fully hardware recorded.',
    't4.genre':  'Dark Ambient / 90 BPM',
    't4.title':  'NULL SPACE',
    't4.desc':   'Ambient exploration of negative space and long reverb tails. Designed for headphone listening in the dark.',
    't5.genre':  'Techno / 138 BPM',
    't5.title':  'FERRIC BURN',
    't5.desc':   'Tape saturation and analog warmth driving a relentless techno framework. Peak hour material.',
    'track.more':    'More ↗',
    'statement.1':   'SOUND IS',
    'statement.2':   'ARCHITECTURE',
    'about.label':   'About',
    'about.badge':   'EST.<br>2017',
    'about.subtitle':'is a solo project',
    'about.p1':      'Based between Berlin and the internet, OHAVS is the alias of a producer who builds music from industrial scrap: field recordings from factory floors, detuned machinery, magnetic tape artifacts, and raw synthesis.',
    'about.p2':      'The work sits at the intersection of techno, EBM, and industrial. Hard drums, hypnotic repetition, and an obsessive attention to texture define the sound — music designed for movement in dark rooms, or solitary late-night listening.',
    'about.p3':      'All tracks are produced with a hardware-first approach. No VSTs. No shortcuts.',
    'stat0.label':   'Releases',
    'stat1.label':   'Labels',
    'stat2.label':   'Streams',
    'stat3.label':   'Years',
    'gear.header':   'Hardware',
    'releases.label':'Latest Releases',
    'r0.title':  'VOID PROTOCOL EP',
    'r0.label':  'Self-Released',
    'r1.title':  'CARBON RITE — Single',
    'r1.label':  'Occult Records',
    'r2.title':  'SIGNAL DECAY LP',
    'r2.label':  'Ferro Editions',
    'r3.title':  'IRON SLEEP — Single',
    'r3.label':  'Praxis',
    'r4.title':  'STASIS FIELD — Compilation',
    'r4.label':  'Mechanic VA',
    'contact.label': 'Get in Touch',
    'contact.title': "LET'S<br>MAKE<br>NOISE.",
    'contact.body':  'For bookings, collaborations, licensing, or anything else — reach out directly.',
    'social.sc':     'Soundcloud ↗',
    'social.bc':     'Bandcamp ↗',
    'social.ig':     'Instagram ↗',
    'social.ra':     'Resident Advisor ↗',
    'footer.copy':   '© 2024 OHAVS. All rights reserved.',
    'footer.privacy':'Privacy',
    'footer.presskit':'Press Kit',
    'marquee': '<span>OHAVS</span><span class="dot">·</span><span>DARK TECHNO</span><span class="dot">·</span><span>ACID INDUSTRIAL</span><span class="dot">·</span><span>BERLIN</span><span class="dot">·</span><span>OHAVS</span><span class="dot">·</span><span>DARK TECHNO</span><span class="dot">·</span><span>ACID INDUSTRIAL</span><span class="dot">·</span><span>BERLIN</span><span class="dot">·</span><span>OHAVS</span><span class="dot">·</span><span>DARK TECHNO</span><span class="dot">·</span><span>ACID INDUSTRIAL</span><span class="dot">·</span><span>BERLIN</span><span class="dot">·</span>',
  },
  he: {
    'page.title':    'OHAVS — מוזיקה אלקטרונית',
    'nav.tracks':    'מוזיקה',
    'nav.about':     'אודות',
    'nav.contact':   'צור קשר',
    'lang.btn':      'EN',
    'cookie.text':   'אתר זה משתמש בעוגיות לשיפור חוויית המשתמש.',
    'hero.tag':      'מפיק מוזיקה אלקטרונית',
    'hero.word0':    'ה',
    'hero.word1':    'צליל',
    'hero.word2':    'של',
    'hero.word3':    'חשך',
    'hero.sub0':     'מכונות',
    'hero.sub1':     'תדרים',
    'hero.sub2':     'תנועה',
    'hero.scroll':   'גלול',
    'tracks.label':  'עבודות נבחרות',
    'tracks.title':  'רצועות',
    't0.genre':  'טכנו / 140 BPM',
    't0.title':  'VOID PROTOCOL',
    't0.desc':   'טכנו חד-קצה הבנוי מדגימות מתכת דחוסות ולולאות דעיכה של בס עמוק. הוקלט חי בטרזור, ברלין.',
    't1.genre':  'אסיד / 133 BPM',
    't1.title':  'CARBON RITE',
    't1.desc':   'קווי TB-303 חומציים על פרקוסיה תעשייתית ופאדים מעוותים. מסע דרך חשכה כימית.',
    't2.genre':  'אינדוסטריאל / 128 BPM',
    't2.title':  'SIGNAL DECAY',
    't2.desc':   'יציאה מומלצת. מתח אטמוספרי הבונה לאט ומתנגש עם מכונות קצביות. מעל 80 אלף האזנות.',
    't3.genre':  'EBM / 125 BPM',
    't3.title':  'IRON SLEEP',
    't3.desc':   'מבנים קלאסיים של EBM עם עיצוב צליל עכשווי. מונע בסיקוונסר אנלוגי, מוקלט לחלוטין בחומרה.',
    't4.genre':  'אמביינט כהה / 90 BPM',
    't4.title':  'NULL SPACE',
    't4.desc':   'חקר אמביינט של מרחב שלילי וזנבות הדהוד ארוכים. מעוצב להאזנה באוזניות בחשכה.',
    't5.genre':  'טכנו / 138 BPM',
    't5.title':  'FERRIC BURN',
    't5.desc':   'רוויית קלטת וחום אנלוגי המניעים מסגרת טכנו בלתי-פוסקת. חומר לשיא הלילה.',
    'track.more':    '↗ עוד',
    'statement.1':   'הצליל הוא',
    'statement.2':   'אדריכלות',
    'about.label':   'אודות',
    'about.badge':   'נוסד<br>2017',
    'about.subtitle':'הוא פרויקט סולו',
    'about.p1':      'מבסיס בין ברלין לאינטרנט, OHAVS הוא הכינוי של מפיק הבונה מוזיקה מגרוטאות תעשייתיות: הקלטות שטח מרצפות מפעל, מכונות מוטות, ארטיפקטים של קלטת מגנטית וסינתזה גולמית.',
    'about.p2':      'העבודה יושבת בצומת של טכנו, EBM ואינדוסטריאל. תופים קשים, חזרה היפנוטית, ותשומת לב אובססיבית לטקסטורה מגדירים את הצליל — מוזיקה שנועדה לתנועה בחדרים חשוכים, או האזנה בדידה בשעות הלילה המאוחרות.',
    'about.p3':      'כל הרצועות מופקות בגישה המבוססת על חומרה. ללא VST. ללא קיצורי דרך.',
    'stat0.label':   'הוצאות',
    'stat1.label':   'לייבלים',
    'stat2.label':   'האזנות',
    'stat3.label':   'שנים',
    'gear.header':   'ציוד',
    'releases.label':'הוצאות אחרונות',
    'r0.title':  'VOID PROTOCOL EP',
    'r0.label':  'הפקה עצמית',
    'r1.title':  'CARBON RITE — סינגל',
    'r1.label':  'Occult Records',
    'r2.title':  'SIGNAL DECAY LP',
    'r2.label':  'Ferro Editions',
    'r3.title':  'IRON SLEEP — סינגל',
    'r3.label':  'Praxis',
    'r4.title':  'STASIS FIELD — קומפילציה',
    'r4.label':  'Mechanic VA',
    'contact.label': 'צרו קשר',
    'contact.title': 'בואו<br>ניצור<br>רעש.',
    'contact.body':  'להזמנות, שיתופי פעולה, רישוי, או כל דבר אחר — פנו ישירות.',
    'social.sc':     'סאונדקלאוד ↗',
    'social.bc':     'בנדקמפ ↗',
    'social.ig':     'אינסטגרם ↗',
    'social.ra':     'רזידנט אדוויזר ↗',
    'footer.copy':   '© 2024 OHAVS. כל הזכויות שמורות.',
    'footer.privacy':'פרטיות',
    'footer.presskit':'חומרי עיתונות',
    'marquee': '<span>OHAVS</span><span class="dot">·</span><span>טכנו כהה</span><span class="dot">·</span><span>אסיד אינדוסטריאל</span><span class="dot">·</span><span>ברלין</span><span class="dot">·</span><span>OHAVS</span><span class="dot">·</span><span>טכנו כהה</span><span class="dot">·</span><span>אסיד אינדוסטריאל</span><span class="dot">·</span><span>ברלין</span><span class="dot">·</span><span>OHAVS</span><span class="dot">·</span><span>טכנו כהה</span><span class="dot">·</span><span>אסיד אינדוסטריאל</span><span class="dot">·</span><span>ברלין</span><span class="dot">·</span>',
  },
};

/* ─── Language System ─────────────────────────────────────── */
let currentLang = 'en';

function t(key) {
  return i18n[currentLang][key] ?? i18n.en[key] ?? key;
}

function isRTL() {
  return document.documentElement.dir === 'rtl';
}

function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    const val = i18n[lang][key];
    if (val !== undefined) el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.dataset.i18nHtml;
    const val = i18n[lang][key];
    if (val !== undefined) el.innerHTML = val;
  });
}

function setLanguage(lang, animate = false) {
  currentLang = lang;
  const isHe = lang === 'he';

  document.documentElement.lang = lang;
  document.documentElement.dir  = isHe ? 'rtl' : 'ltr';
  document.title = i18n[lang]['page.title'];

  applyTranslations(lang);

  localStorage.setItem('lang', lang);

  if (animate) {
    gsap.fromTo(document.body, { opacity: 0.6 }, { opacity: 1, duration: 0.25, ease: 'power1.out' });
    refreshScrollAnimations();
  }
}

function refreshScrollAnimations() {
  ScrollTrigger.killAll();

  // Force-reveal anything already animated (so re-init doesn't re-flash them)
  document.querySelectorAll(
    '.reveal-up, .reveal-card, .reveal-statement, .reveal-row'
  ).forEach((el) => {
    if (el.dataset.revealed) {
      gsap.set(el, { opacity: 1, x: 0, y: 0, clearProps: 'willChange' });
    }
  });

  initScrollReveals();
  initNavLinks();
  initNavScroll();
}

/* ─── Waveform Generation ─────────────────────────────────── */
function buildWaveforms() {
  document.querySelectorAll('.waveform-bars').forEach((container) => {
    for (let i = 0; i < 40; i++) {
      const bar = document.createElement('div');
      bar.className = 'bar';
      bar.style.height = (20 + Math.random() * 80) + '%';
      container.appendChild(bar);
    }
  });
}

/* ─── Hero Word Reveal ────────────────────────────────────── */
function animateHero() {
  const words = document.querySelectorAll('.hero-word');
  const tag   = document.querySelector('.hero-tag');
  const sub   = document.querySelector('.hero-sub');
  const hl    = document.querySelector('.hero-word.highlight-bar');

  const tl = gsap.timeline({ delay: 0.5 });
  tl.to(tag, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });

  words.forEach((w, i) => {
    tl.to(w, { y: 0, opacity: 1, duration: 0.65, ease: 'expo.out' }, 0.35 + i * 0.09);
  });

  tl.to(sub, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3');

  // Yellow bar reveal on last word — class-based, no style injection
  gsap.delayedCall(1.5, () => {
    hl?.classList.add('bar-visible');
  });
}

/* ─── Scroll direction helper ─────────────────────────────── */
function slideFrom(magnitude) {
  return isRTL() ? magnitude : -magnitude;
}

/* ─── Scroll Reveals ──────────────────────────────────────── */
function initScrollReveals() {
  // Generic fade-up
  document.querySelectorAll('.reveal-up').forEach((el) => {
    if (el.dataset.revealed) return;
    const delay = parseFloat(el.dataset.delay || 0);
    gsap.fromTo(el,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.7, delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el, start: 'top 88%',
          toggleActions: 'play none none none',
          onEnter() { el.dataset.revealed = '1'; },
        },
      }
    );
  });

  // Track cards
  document.querySelectorAll('.track-card').forEach((card, i) => {
    if (card.dataset.revealed) return;
    gsap.fromTo(card,
      { opacity: 0, y: 24 },
      {
        opacity: 1, y: 0, duration: 0.55, delay: i * 0.07,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card, start: 'top 90%',
          toggleActions: 'play none none none',
          onEnter() { card.dataset.revealed = '1'; },
        },
      }
    );
  });

  // Statement lines — slide from off-screen (direction-aware)
  document.querySelectorAll('.reveal-statement').forEach((el) => {
    if (el.dataset.revealed) return;
    const delay = parseFloat(el.dataset.delay || 0);
    const fromX = slideFrom(80);
    gsap.fromTo(el,
      { opacity: 0, x: fromX },
      {
        opacity: 1, x: 0, duration: 0.9, delay,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: el, start: 'top 85%',
          toggleActions: 'play none none none',
          onEnter() {
            el.dataset.revealed = '1';
            document.querySelector('.statement-line.highlight-bar-full')
              ?.classList.add('bar-visible');
          },
        },
      }
    );
  });

  // Release rows
  document.querySelectorAll('.reveal-row').forEach((el) => {
    if (el.dataset.revealed) return;
    const delay = parseFloat(el.dataset.delay || 0);
    const fromX = slideFrom(20);
    gsap.fromTo(el,
      { opacity: 0, x: fromX },
      {
        opacity: 1, x: 0, duration: 0.5, delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el, start: 'top 90%',
          toggleActions: 'play none none none',
          onEnter() { el.dataset.revealed = '1'; },
        },
      }
    );
  });
}

/* ─── Parallax Hero ───────────────────────────────────────── */
function initParallax() {
  gsap.to('.hero-headline', {
    y: -80, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.2 },
  });
  gsap.to('.hero-sub', {
    y: -40, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.5 },
  });
}

/* ─── Nav ─────────────────────────────────────────────────── */
function initNavLinks() {
  const links    = document.querySelectorAll('.nav-link');
  const sections = ['#tracks', '#about', '#contact']
    .map(s => document.querySelector(s)).filter(Boolean);

  ScrollTrigger.create({
    trigger: document.body, start: 0, end: 'max',
    onUpdate() {
      const scrollY = window.scrollY + 100;
      let current = null;
      sections.forEach(section => { if (scrollY >= section.offsetTop) current = section.id; });
      links.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
      });
    },
  });
}

function initNavScroll() {
  const nav = document.getElementById('nav');
  ScrollTrigger.create({
    start: 80,
    onEnter()    { nav.style.boxShadow = '0 2px 0 #151515'; },
    onLeaveBack(){ nav.style.boxShadow = 'none'; },
  });
}

/* ─── Marquee ─────────────────────────────────────────────── */
function initMarquee() {
  const track = document.querySelector('.marquee-track');
  const strip = document.querySelector('.marquee-strip');
  if (!track || !strip) return;

  strip.addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
  strip.addEventListener('mouseleave', () => track.style.animationPlayState = 'running');
}

/* ─── Play Buttons ────────────────────────────────────────── */
function initPlayButtons() {
  let activeCard = null;

  document.querySelectorAll('.play-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.track-card');
      if (!card) return;

      if (activeCard && activeCard !== card) {
        activeCard.classList.remove('playing');
        activeCard.querySelector('.play-icon').textContent = '▶';
      }

      card.classList.toggle('playing');
      btn.querySelector('.play-icon').textContent = card.classList.contains('playing') ? '■' : '▶';
      activeCard = card.classList.contains('playing') ? card : null;
    });
  });
}

/* ─── Cookie Bar ──────────────────────────────────────────── */
function initCookie() {
  const bar   = document.getElementById('cookieBar');
  const close = document.getElementById('cookieClose');
  if (!close) return;
  close.addEventListener('click', () => {
    gsap.to(bar, { y: '100%', duration: 0.35, ease: 'power2.in', onComplete: () => bar.remove() });
  });
}

/* ─── Counter Animation ───────────────────────────────────── */
function initCounters() {
  document.querySelectorAll('.stat-number').forEach((el) => {
    if (el.dataset.counted) return;
    const raw    = el.textContent.trim();
    const num    = parseInt(raw.replace(/\D/g, ''), 10);
    const suffix = raw.replace(/[\d]/g, '');

    gsap.fromTo({ val: 0 }, { val: num }, {
      val: num, duration: 1.4, ease: 'power2.out',
      snap: { val: 1 },
      onUpdate() { el.textContent = Math.round(this.targets()[0].val) + suffix; },
      onComplete() { el.dataset.counted = '1'; },
      scrollTrigger: {
        trigger: el, start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });
}

/* ─── Custom Cursor ───────────────────────────────────────── */
function initCursor() {
  const dot = document.createElement('div');
  dot.style.cssText = [
    'position:fixed', 'top:0', 'left:0', 'pointer-events:none',
    'width:8px', 'height:8px', 'background:#fff824', 'border-radius:0',
    'z-index:9999', 'mix-blend-mode:multiply',
    'transition:width .2s,height .2s', 'transform:translate(-50%,-50%)',
  ].join(';');
  document.body.appendChild(dot);

  let mx = 0, my = 0;
  window.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; });
  gsap.ticker.add(() => gsap.set(dot, { x: mx, y: my }));

  document.querySelectorAll('a, button, .track-card').forEach((el) => {
    el.addEventListener('mouseenter', () => { dot.style.width = '28px'; dot.style.height = '28px'; });
    el.addEventListener('mouseleave', () => { dot.style.width = '8px';  dot.style.height = '8px'; });
  });
}

/* ─── Language Button ─────────────────────────────────────── */
function initLangButton() {
  const btn = document.getElementById('langBtn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const next = currentLang === 'en' ? 'he' : 'en';
    setLanguage(next, true);
  });
}

/* ─── Boot ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Restore saved language before anything renders
  const savedLang = localStorage.getItem('lang') || 'en';
  if (savedLang !== 'en') {
    setLanguage(savedLang, false);
  }

  buildWaveforms();
  animateHero();
  initScrollReveals();
  initParallax();
  initNavLinks();
  initNavScroll();
  initMarquee();
  initPlayButtons();
  initCookie();
  initCounters();
  initCursor();
  initLangButton();
});
