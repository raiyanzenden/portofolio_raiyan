/* ==========================================================================
   Navigation Controller
   ========================================================================== */

export function initNav() {
  const nav = document.querySelector('.nav');
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileMenu = document.querySelector('.nav__mobile-menu');
  const navLinks = document.querySelectorAll('.nav__link');
  const mobileLinks = document.querySelectorAll('.nav__mobile-link');
  const sections = document.querySelectorAll('section[id]');

  if (!nav) return;

  // ---- Scroll state ----
  let lastScroll = 0;
  const scrollThreshold = 40;

  function handleScroll() {
    const scrollY = window.scrollY;

    if (scrollY > scrollThreshold) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }

    lastScroll = scrollY;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ---- Active section tracking ----
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0,
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        setActiveLink(id);
      }
    });
  }, observerOptions);

  sections.forEach((section) => sectionObserver.observe(section));

  function setActiveLink(id) {
    navLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
    });
    mobileLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
    });
  }

  // ---- Smooth scroll for nav links ----
  function handleNavClick(e) {
    const href = e.currentTarget.getAttribute('href');
    if (!href || !href.startsWith('#')) return;

    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;

    const navHeight = nav.offsetHeight;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });

    // Close mobile menu if open
    closeMobileMenu();
  }

  navLinks.forEach((link) => link.addEventListener('click', handleNavClick));
  mobileLinks.forEach((link) => link.addEventListener('click', handleNavClick));

  // ---- Hamburger / mobile menu ----
  function toggleMobileMenu() {
    const isOpen = hamburger.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMobileMenu() {
    hamburger.classList.remove('is-open');
    mobileMenu.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', toggleMobileMenu);
  }

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileMenu();
  });
}
