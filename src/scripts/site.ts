interface SliderRoot extends HTMLElement {
  _sliderPause?: () => void;
  _sliderResume?: () => void;
}

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
  const toggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-mobile-nav]');
  const iconMenu = document.querySelector('[data-icon-menu]');
  const iconClose = document.querySelector('[data-icon-close]');
  const links = document.querySelectorAll('[data-mobile-link]');

  if (!toggle || !nav) return;

  const setOpen = (open: boolean) => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    iconMenu?.classList.toggle('hidden', open);
    iconClose?.classList.toggle('hidden', !open);
  };

  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
  links.forEach((link) => link.addEventListener('click', () => setOpen(false)));
  window.matchMedia('(min-width: 1024px)').addEventListener('change', (e) => {
    if (e.matches) setOpen(false);
  });
}

function initImageSliders() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const onVisibilityChange = () => {
    document.querySelectorAll<SliderRoot>('[data-slider]').forEach((root) => {
      const resume = root._sliderResume;
      const pause = root._sliderPause;
      if (document.hidden) pause?.();
      else resume?.();
    });
  };

  document.removeEventListener('visibilitychange', onVisibilityChange);
  document.addEventListener('visibilitychange', onVisibilityChange);

  document.querySelectorAll<SliderRoot>('[data-slider]').forEach((root) => {
    if (root.hasAttribute('data-desktop-only') && window.matchMedia('(max-width: 1023px)').matches) {
      return;
    }

    const slides = Array.from(root.querySelectorAll<HTMLElement>('[data-slide]'));
    const segments = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-slider-dot]'));
    const fills = segments.map(
      (seg) => seg.querySelector<HTMLElement>('[data-slider-segment-fill]')!,
    );
    const prev = root.querySelector<HTMLButtonElement>('[data-slider-prev]');
    const next = root.querySelector<HTMLButtonElement>('[data-slider-next]');
    if (slides.length <= 1) return;

    const autoplayEnabled = root.hasAttribute('data-autoplay');
    const intervalMs = Math.max(
      2000,
      Number.parseInt(root.dataset.autoplayInterval ?? '5000', 10) || 5000,
    );
    root.style.setProperty('--slider-interval', `${intervalMs}ms`);

    let index = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let inView = false;
    let paused = false;

    const setProgressState = (running: boolean) => {
      fills.forEach((fill, i) => {
        if (!fill) return;
        fill.style.animationPlayState =
          running && i === index && autoplayEnabled && !reducedMotion && inView && !document.hidden
            ? 'running'
            : 'paused';
      });
    };

    const restartActiveFill = () => {
      const fill = fills[index];
      if (!fill) return;
      fill.style.animation = 'none';
      requestAnimationFrame(() => {
        fill.style.removeProperty('animation');
        setProgressState(!paused);
      });
    };

    const updateSegments = () => {
      segments.forEach((seg, i) => {
        seg.setAttribute('aria-selected', String(i === index));
      });
      restartActiveFill();
    };

    const show = (nextIndex: number) => {
      index = (nextIndex + slides.length) % slides.length;
      slides.forEach((slide, i) => slide.classList.toggle('is-active', i === index));
      updateSegments();
    };

    const clearTimer = () => {
      if (timer) clearTimeout(timer);
      timer = undefined;
    };

    const scheduleNext = () => {
      clearTimer();
      if (!autoplayEnabled || reducedMotion || !inView || document.hidden || paused) return;

      timer = setTimeout(() => {
        show(index + 1);
        scheduleNext();
      }, intervalMs);
    };

    const pause = () => {
      paused = true;
      clearTimer();
      setProgressState(false);
    };

    const resume = () => {
      if (!paused && timer) return;
      paused = false;
      setProgressState(true);
      scheduleNext();
    };

    root._sliderPause = pause;
    root._sliderResume = resume;

    const goTo = (nextIndex: number) => {
      show(nextIndex);
      if (autoplayEnabled) scheduleNext();
    };

    prev?.addEventListener('click', () => goTo(index - 1));
    next?.addEventListener('click', () => goTo(index + 1));
    segments.forEach((seg, i) => seg.addEventListener('click', () => goTo(i)));

    root.addEventListener('mouseenter', pause, { passive: true });
    root.addEventListener('mouseleave', resume, { passive: true });
    root.addEventListener('focusin', pause);
    root.addEventListener('focusout', (event) => {
      if (root.contains(event.relatedTarget as Node)) return;
      resume();
    });

    const viewObserver = new IntersectionObserver(
      (entries) => {
        inView = entries.some((entry) => entry.isIntersecting);
        if (inView) resume();
        else pause();
      },
      { threshold: 0.2 },
    );
    viewObserver.observe(root);

    requestAnimationFrame(() => {
      show(0);
      if (inView && autoplayEnabled) scheduleNext();
    });
  });
}

function initThemeToggle() {
  const storageKey = 'r6scheats-color-mode';
  const root = document.documentElement;
  const toggle = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
  const metaTheme = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');

  const themeMetaColors = {
    dark: '#7F3DEE',
    light: '#f5f7fa',
  } as const;

  const applyMode = (mode: 'dark' | 'light') => {
    root.setAttribute('data-color-mode', mode);
    localStorage.setItem(storageKey, mode);
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
    applyMode(next);
  });
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
  const path = window.location.pathname.replace(/\/index\.html$/, '').replace(/\/$/, '') || '/';
  const hash = window.location.hash;

  document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]').forEach((link) => {
    const href = link.getAttribute('href') ?? '';
    let isActive = false;

    if (href.startsWith('/#')) {
      const linkHash = href.slice(1);
      isActive =
        (path === '/' || path === '') &&
        (hash === linkHash || (!hash && linkHash === '#features'));
    } else {
      const linkPath = href.replace(/\/index\.html$/, '').replace(/\/$/, '') || '/';
      if (linkPath === '/') {
        isActive = path === '/';
      } else {
        isActive = path === linkPath || path.startsWith(`${linkPath}/`);
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
    initThemeToggle();
    initImageSliders();
    initFaqFilters();
    initHeroBackground();
    initNavHighlight();
  });
} else {
  initFonts();
  initReveal();
  initMobileMenu();
  initThemeToggle();
  initImageSliders();
  initFaqFilters();
  initHeroBackground();
  initNavHighlight();
}
