gsap.registerPlugin(ScrollTrigger);

/* ─── Waveform Generation ─────────────────────────────── */
function buildWaveforms() {
  document.querySelectorAll('.waveform-bars').forEach((container) => {
    const count = 40;
    for (let i = 0; i < count; i++) {
      const bar = document.createElement('div');
      bar.className = 'bar';
      const h = 20 + Math.random() * 80;
      bar.style.height = h + '%';
      container.appendChild(bar);
    }
  });
}

/* ─── Hero Word Reveal ────────────────────────────────── */
function animateHero() {
  const words = document.querySelectorAll('.hero-word');
  const tag   = document.querySelector('.hero-tag');
  const sub   = document.querySelector('.hero-sub');
  const hl    = document.querySelector('.hero-word.highlight-bar');

  const tl = gsap.timeline({ delay: 0.5 });

  tl.to(tag, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });

  words.forEach((w, i) => {
    tl.to(w, {
      y: 0,
      opacity: 1,
      duration: 0.65,
      ease: 'expo.out',
    }, 0.35 + i * 0.09);
  });

  tl.to(hl.querySelector('::before') || hl, {}, '<');

  // yellow underline on last word
  tl.to(hl, {
    duration: 0,
    onComplete() {
      hl.style.setProperty('--hl-active', '1');
    }
  }, '-=0.1');

  gsap.to(hl, {
    '--bar-scale': 1,
    duration: 0.6,
    ease: 'power3.out',
    delay: 1.0,
    onStart() {
      hl.querySelector && (hl.style.setProperty);
      const pseudo = document.createElement('style');
      pseudo.textContent = `.hero-word.highlight-bar::before { transform: scaleX(1) !important; transition: transform 0.6s ease 1.0s; }`;
      document.head.appendChild(pseudo);
    }
  });

  tl.to(sub, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3');
}

/* ─── Generic Scroll Reveals ──────────────────────────── */
function initScrollReveals() {
  // .reveal-up elements
  document.querySelectorAll('.reveal-up').forEach((el) => {
    const delay = parseFloat(el.dataset.delay || 0);
    gsap.fromTo(el,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // Track cards staggered
  document.querySelectorAll('.track-card').forEach((card, i) => {
    gsap.fromTo(card,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        delay: i * 0.07,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // Statement lines slide from left
  document.querySelectorAll('.reveal-statement').forEach((el) => {
    const delay = parseFloat(el.dataset.delay || 0);
    gsap.fromTo(el,
      { opacity: 0, x: -80 },
      {
        opacity: 1,
        x: 0,
        duration: 0.9,
        delay,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
          onEnter() {
            // trigger yellow highlight bar on second line
            const bar = document.querySelector('.statement-line.highlight-bar-full');
            if (bar) {
              const style = document.createElement('style');
              style.textContent = `.statement-line.highlight-bar-full::before { transform: scaleX(1) !important; transition: transform 0.8s ease 0.4s !important; }`;
              document.head.appendChild(style);
            }
          },
        },
      }
    );
  });

  // Release rows slide from left
  document.querySelectorAll('.reveal-row').forEach((el) => {
    const delay = parseFloat(el.dataset.delay || 0);
    gsap.fromTo(el,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );
  });
}

/* ─── Marquee Speed on Hover ──────────────────────────── */
function initMarquee() {
  const track = document.querySelector('.marquee-track');
  const strip = document.querySelector('.marquee-strip');
  if (!track || !strip) return;

  strip.addEventListener('mouseenter', () => {
    track.style.animationPlayState = 'paused';
  });
  strip.addEventListener('mouseleave', () => {
    track.style.animationPlayState = 'running';
  });
}

/* ─── Nav Active Link ─────────────────────────────────── */
function initNavLinks() {
  const links = document.querySelectorAll('.nav-link');
  const sections = ['#tracks', '#about', '#contact'].map(s => document.querySelector(s)).filter(Boolean);

  ScrollTrigger.create({
    trigger: document.body,
    start: 0,
    end: 'max',
    onUpdate() {
      const scrollY = window.scrollY + 100;
      let current = null;
      sections.forEach(section => {
        if (scrollY >= section.offsetTop) current = section.id;
      });
      links.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
      });
    }
  });
}

/* ─── Parallax Hero Text ──────────────────────────────── */
function initParallax() {
  gsap.to('.hero-headline', {
    y: -80,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.2,
    },
  });

  gsap.to('.hero-sub', {
    y: -40,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5,
    },
  });
}

/* ─── Play Button Interaction ─────────────────────────── */
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
      const icon = btn.querySelector('.play-icon');
      icon.textContent = card.classList.contains('playing') ? '■' : '▶';
      activeCard = card.classList.contains('playing') ? card : null;
    });
  });
}

/* ─── Nav scroll style ────────────────────────────────── */
function initNavScroll() {
  const nav = document.getElementById('nav');
  ScrollTrigger.create({
    start: 80,
    onEnter()  { nav.style.boxShadow = '0 2px 0 #151515'; },
    onLeaveBack() { nav.style.boxShadow = 'none'; },
  });
}

/* ─── Cookie bar ──────────────────────────────────────── */
function initCookie() {
  const bar   = document.getElementById('cookieBar');
  const close = document.getElementById('cookieClose');
  if (!close) return;
  close.addEventListener('click', () => {
    gsap.to(bar, { y: '100%', duration: 0.35, ease: 'power2.in', onComplete: () => bar.remove() });
  });
}

/* ─── Counter Animation ───────────────────────────────── */
function initCounters() {
  document.querySelectorAll('.stat-number').forEach((el) => {
    const raw = el.textContent.trim();
    const num = parseInt(raw.replace(/\D/g, ''), 10);
    const suffix = raw.replace(/[\d]/g, '');

    gsap.fromTo({ val: 0 },
      { val: num },
      {
        val: num,
        duration: 1.4,
        ease: 'power2.out',
        snap: { val: 1 },
        onUpdate() { el.textContent = Math.round(this.targets()[0].val) + suffix; },
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });
}

/* ─── Cursor highlight dot ────────────────────────────── */
function initCursor() {
  const dot = document.createElement('div');
  dot.style.cssText = `
    position: fixed; top: 0; left: 0; pointer-events: none;
    width: 8px; height: 8px;
    background: #fff824;
    border-radius: 0;
    z-index: 9999;
    mix-blend-mode: multiply;
    transition: width 0.2s, height 0.2s, border-radius 0.2s;
    transform: translate(-50%, -50%);
  `;
  document.body.appendChild(dot);

  let mx = 0, my = 0;

  window.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
  });

  gsap.ticker.add(() => {
    gsap.set(dot, { x: mx, y: my });
  });

  document.querySelectorAll('a, button, .track-card').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      dot.style.width = '28px';
      dot.style.height = '28px';
    });
    el.addEventListener('mouseleave', () => {
      dot.style.width = '8px';
      dot.style.height = '8px';
    });
  });
}

/* ─── Boot ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  buildWaveforms();
  animateHero();
  initScrollReveals();
  initMarquee();
  initNavLinks();
  initParallax();
  initPlayButtons();
  initNavScroll();
  initCookie();
  initCounters();
  initCursor();
});
