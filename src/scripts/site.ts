function initFonts() {
  const root = document.documentElement;

  const markReady = () => {
    root.classList.remove('fonts-pending');
    root.classList.add('fonts-ready');
  };

  if (!document.fonts?.ready) {
    markReady();
    return;
  }

  document.fonts.ready.then(markReady).catch(markReady);
}

function initReveal() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced) {
    document.documentElement.classList.remove('reveal-pending');
    document.querySelectorAll('[data-reveal], [data-reveal-group]').forEach((el) => {
      el.classList.add('is-visible');
    });
    return;
  }

  document.documentElement.classList.add('reveal-pending');

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.01, rootMargin: '0px 0px -6% 0px' },
  );

  document.querySelectorAll('[data-reveal-group]').forEach((group) => {
    observer.observe(group);
  });

  document.querySelectorAll('[data-reveal]').forEach((el) => {
    if (el.closest('#hero')) {
      el.classList.add('is-visible');
      return;
    }
    if (el.closest('[data-reveal-group]')) return;
    const delay = el.getAttribute('data-reveal-delay');
    if (delay) (el as HTMLElement).style.setProperty('--reveal-delay', `${delay}ms`);
    observer.observe(el);
  });
}

function initMobileMenu() {
  const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const nav = document.querySelector('[data-mobile-nav]');
  const backdrop = document.querySelector<HTMLButtonElement>('[data-mobile-backdrop]');
  const iconMenu = document.querySelector('[data-icon-menu]');
  const iconClose = document.querySelector('[data-icon-close]');
  const links = document.querySelectorAll('[data-mobile-link]');

  if (!toggle || !nav) return;

  const labelOpen = toggle.dataset.labelOpen ?? 'Open menu';
  const labelClose = toggle.dataset.labelClose ?? 'Close menu';

  const setOpen = (open: boolean) => {
    nav.classList.toggle('is-open', open);
    toggle.classList.toggle('is-open', open);
    backdrop?.classList.toggle('is-open', open);
    nav.toggleAttribute('hidden', !open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? labelClose : labelOpen);
    iconMenu?.classList.toggle('hidden', open);
    iconClose?.classList.toggle('hidden', !open);
    document.body.classList.toggle('mobile-nav-open', open);
  };

  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
  backdrop?.addEventListener('click', () => setOpen(false));
  links.forEach((link) => link.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });
  window.matchMedia('(min-width: 1024px)').addEventListener('change', (e) => {
    if (e.matches) setOpen(false);
  });
}

function initLanguageSwitcher() {
  const root = document.querySelector('[data-lang-switcher]');
  const toggle = document.querySelector<HTMLButtonElement>('[data-lang-toggle]');
  const menu = document.querySelector<HTMLElement>('[data-lang-menu]');

  if (!root || !toggle || !menu) return;

  const setOpen = (open: boolean) => {
    menu.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
  };

  toggle.addEventListener('click', (event) => {
    event.stopPropagation();
    setOpen(menu.hidden);
  });

  document.addEventListener('click', (event) => {
    if (!root.contains(event.target as Node)) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });
}

function applyThemeIcons(mode: 'dark' | 'light') {
  const favicons =
    mode === 'light'
      ? {
          s32: '/favicon-32-light.png',
          s16: '/favicon-16-light.png',
          shortcut: '/favicon-light.ico',
        }
      : {
          s32: '/favicon-32.png',
          s16: '/favicon-16.png',
          shortcut: '/favicon.ico',
        };

  document.querySelectorAll<HTMLLinkElement>('link[rel="icon"][sizes="32x32"]').forEach((link) => {
    link.href = favicons.s32;
  });
  document.querySelectorAll<HTMLLinkElement>('link[rel="icon"][sizes="16x16"]').forEach((link) => {
    link.href = favicons.s16;
  });
  document.querySelectorAll<HTMLLinkElement>('link[rel="shortcut icon"]').forEach((link) => {
    link.href = favicons.shortcut;
  });

  document.querySelectorAll<HTMLElement>('.site-footer__brand-logo-wrap').forEach((wrap) => {
    const darkLogo = wrap.querySelector<HTMLElement>('.theme-logo--dark');
    const lightLogo = wrap.querySelector<HTMLElement>('.theme-logo--light');
    if (!darkLogo || !lightLogo) return;
    const showLight = mode === 'light';
    darkLogo.style.display = showLight ? 'none' : 'block';
    lightLogo.style.display = showLight ? 'block' : 'none';
  });
}

function initThemeToggle() {
  const storageKey = 'r6scheats-color-mode';
  const userKey = 'r6scheats-color-mode-user';
  const root = document.documentElement;
  const toggle = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
  const metaTheme = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  const systemQuery = window.matchMedia('(prefers-color-scheme: dark)');

  const themeMetaColors = {
    dark: '#7F3DEE',
    light: '#f8f8fb',
  } as const;

  const hasUserPreference = () => localStorage.getItem(userKey) === '1';

  const applyMode = (mode: 'dark' | 'light', persist = false) => {
    root.setAttribute('data-color-mode', mode);
    if (persist) {
      localStorage.setItem(storageKey, mode);
      localStorage.setItem(userKey, '1');
    }
    applyThemeIcons(mode);
    if (metaTheme) metaTheme.content = themeMetaColors[mode];
    if (toggle) {
      const label =
        mode === 'dark'
          ? toggle.dataset.labelLight ?? 'Switch to light mode'
          : toggle.dataset.labelDark ?? 'Switch to dark mode';
      toggle.setAttribute('aria-label', label);
      toggle.setAttribute('title', label);
    }
  };

  const current = root.getAttribute('data-color-mode') === 'light' ? 'light' : 'dark';
  applyMode(current);

  toggle?.addEventListener('click', () => {
    const next = root.getAttribute('data-color-mode') === 'light' ? 'dark' : 'light';
    applyMode(next, true);
  });

  systemQuery.addEventListener('change', (event) => {
    if (hasUserPreference()) return;
    applyMode(event.matches ? 'dark' : 'light');
  });
}

function initHeroCharacterMotion() {
  const stack = document.querySelector<HTMLElement>('.hero-operator-stack');
  if (!stack) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const noHover = window.matchMedia('(hover: none)').matches;
  if (reduced || noHover) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.some((entry) => entry.isIntersecting);
      stack.classList.toggle('hero-operator-stack--idle', !visible);
    },
    { rootMargin: '64px 0px', threshold: 0 },
  );

  observer.observe(stack);
}

function initHeroBackground() {
  const hero = document.querySelector<HTMLElement>('.hero-section');
  if (!hero) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse = window.matchMedia('(pointer: coarse)').matches;
  const noHover = window.matchMedia('(hover: none)').matches;

  if (reduced || coarse || noHover) return;

  let spotX = 50;
  let spotY = 42;
  let targetX = spotX;
  let targetY = spotY;
  let rafId = 0;
  let tracking = false;
  let rect = hero.getBoundingClientRect();

  const updateRect = () => {
    rect = hero.getBoundingClientRect();
  };

  window.addEventListener('resize', updateRect, { passive: true });
  window.addEventListener(
    'scroll',
    () => {
      if (tracking) updateRect();
    },
    { passive: true },
  );

  const applySpot = () => {
    spotX += (targetX - spotX) * 0.08;
    spotY += (targetY - spotY) * 0.08;
    hero.style.setProperty('--hero-spot-x', `${spotX}%`);
    hero.style.setProperty('--hero-spot-y', `${spotY}%`);

    if (Math.abs(targetX - spotX) > 0.05 || Math.abs(targetY - spotY) > 0.05) {
      rafId = requestAnimationFrame(applySpot);
    } else {
      rafId = 0;
    }
  };

  const scheduleSpot = () => {
    if (rafId) return;
    rafId = requestAnimationFrame(applySpot);
  };

  const onPointerMove = (event: PointerEvent) => {
    if (!tracking) return;
    targetX = ((event.clientX - rect.left) / rect.width) * 100;
    targetY = ((event.clientY - rect.top) / rect.height) * 100;
    scheduleSpot();
  };

  const viewObserver = new IntersectionObserver(
    (entries) => {
      tracking = entries.some((entry) => entry.isIntersecting);
      if (tracking) updateRect();
      if (!tracking && rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    },
    { threshold: 0.05 },
  );

  viewObserver.observe(hero);
  hero.addEventListener('pointermove', onPointerMove, { passive: true });
}

function initNavHighlight() {
  const rawPath = window.location.pathname.replace(/\/index\.html$/, '').replace(/\/$/, '') || '/';
  const hash = window.location.hash;
  const localeRoots = ['/ru', '/de', '/es', '/fr', '/pt'];
  const isLocaleHome = localeRoots.includes(rawPath);

  document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]').forEach((link) => {
    const href = link.getAttribute('href') ?? '';
    let isActive = false;

    if (href.includes('#')) {
      const linkHash = href.slice(href.indexOf('#'));
      const linkPath = href.slice(0, href.indexOf('#')).replace(/\/index\.html$/, '').replace(/\/$/, '') || '/';
      isActive =
        (rawPath === linkPath || (linkPath === '/' && isLocaleHome)) &&
        hash === linkHash;
    } else if (href.startsWith('/#')) {
      const linkHash = href.slice(1);
      isActive = (rawPath === '/' || isLocaleHome) && hash === linkHash;
    } else {
      const linkPath = href.replace(/\/index\.html$/, '').replace(/\/$/, '') || '/';
      if (linkPath === '/') {
        isActive = (rawPath === '/' || isLocaleHome) && !hash;
      } else {
        isActive = rawPath === linkPath || rawPath.startsWith(`${linkPath}/`);
      }
    }

    link.classList.toggle('is-active', isActive);
    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

function initFaqFilters() {
  document.querySelectorAll('[data-faq-filters]').forEach((container) => {
    const section = container.closest('[data-faq-section]');
    const list = section?.querySelector('[data-faq-list]');
    if (!list) return;

    const items = list.querySelectorAll<HTMLElement>('[data-faq-topic]');
    const chips = container.querySelectorAll<HTMLButtonElement>('[data-faq-filter]');

    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        const topic = chip.getAttribute('data-faq-filter');
        chips.forEach((c) => c.classList.toggle('is-active', c === chip));
        items.forEach((item) => {
          const itemTopic = item.getAttribute('data-faq-topic');
          const show = topic === 'all' || itemTopic === topic;
          item.toggleAttribute('data-hidden', !show);
        });
      });
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initFonts();
    initReveal();
    initMobileMenu();
    initLanguageSwitcher();
    initThemeToggle();
    initFaqFilters();
    initHeroCharacterMotion();
    initHeroBackground();
    initNavHighlight();
  });
} else {
  initFonts();
  initReveal();
  initMobileMenu();
  initLanguageSwitcher();
  initThemeToggle();
  initFaqFilters();
  initHeroCharacterMotion();
  initHeroBackground();
  initNavHighlight();
}
