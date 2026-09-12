/* ==========================================================================
   Raiyan Danish Aufa — Portfolio Master Script
   Dark Cinematic Editorial Architecture
   ========================================================================== */

(function () {
  'use strict';

  /* ========================================================================
     1. Language Switcher (EN / ID)
     ======================================================================== */
  const translations = {
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.projects': 'Projects',
      'nav.skills': 'Skills',
      'nav.achievement': 'Awards',
      'nav.contact': 'Contact',

      'hero.kicker': 'Software Engineering & UI/UX Design',
      'hero.statement': 'Software Engineering student building thoughtful web applications, intuitive interfaces, and practical digital experiences.',
      'hero.meta.location': 'Banyumas, Indonesia',
      'hero.meta.focus': 'Web & UI/UX',
      'hero.meta.role': 'Vocational Student (RPL)',
      'hero.cta.work': 'View Projects',
      'hero.cta.contact': 'Get in Touch',
      'hero.portrait.tag': 'Student / Designer',
      'hero.portrait.desc': 'Software Engineering student based in Banyumas, Indonesia.',

      'about.meta.label': '01 / Overview',
      'about.title': 'About',
      'about.lead': "I create digital experiences where clean logic meets intuitive design.",
      'about.meta.major.key': 'Major',
      'about.meta.major.val': 'Software Engineering (RPL)',
      'about.meta.school.key': 'Education',
      'about.meta.school.val': 'Vocational High School (SMK)',
      'about.meta.location.key': 'Location',
      'about.meta.location.val': 'Banyumas, Central Java',
      'about.meta.focus.key': 'Focus',
      'about.meta.focus.val': 'Frontend, UI/UX & Game Dev',
      'about.p1': 'Currently studying Software Engineering (RPL), with a core focus on web development fundamentals, backend logic, and clean interface systems. I enjoy understanding how code behaves beneath the surface and ensuring it looks cohesive on the front.',
      'about.p2': 'Alongside development, I explore Figma interface design, 2D game mechanics in GDevelop, video editing, and competitive esports. To me, technical discipline and visual creativity build upon each other.',
      'about.interests.title': 'Focus & Interests',

      'projects.meta.label': '02 / Portfolio',
      'projects.title': 'Featured Projects',
      'projects.count': '03 Selected Works',
      'project1.num': '01',
      'project1.name': 'trip.dwk',
      'project1.desc': 'An open-trip travel web platform designed for smooth exploration and booking flow. Combines clean typography and interface design with structured backend logic.',
      'project1.view': 'Explore Project',
      'project1.code': 'Source Code',
      'project2.num': '02',
      'project2.name': 'Responsive Landing Page',
      'project2.desc': 'A modern, highly responsive landing page focusing on visual hierarchy, typography, seamless mobile ergonomics, and vanilla frontend performance.',
      'project2.view': 'View Project',
      'project3.num': '03',
      'project3.name': '2D Game Project',
      'project3.desc': 'An interactive 2D game built with GDevelop, exploring custom player mechanics, level progression, event scripting, and responsive controls.',
      'project3.view': 'See Details',

      'skills.meta.label': '03 / Capabilities',
      'skills.title': 'Skills & Toolkit',
      'skills.cat1': 'Development',
      'skills.cat2': 'Design',
      'skills.cat3': 'Creative',
      'skills.cat4': 'Game Dev',

      'achievement.meta.label': '04 / Recognition',
      'achievement.title': 'Achievement',
      'achievement.place': '1st Place',
      'achievement.event': 'Poco Extreme Esports — Banyumas',
      'achievement.desc': 'Represented Banyumas in competitive Free Fire esports and secured 1st place. Competitive tournament play instilled fast decision-making, team synergy, and focus under pressure.',

      'contact.meta.label': '05 / Inquiries',
      'contact.cta': "Let's build something.",
      'contact.sub': "Got a project, idea, or just want to say hi — I'm open to conversations.",
      'contact.copybtn': 'Copy',
      'contact.toast': 'Email copied to clipboard!',

      'footer.copy': '© 2026 Raiyan Danish Aufa',
      'footer.status': 'Banyumas, Indonesia • WIB',
    },

    id: {
      'nav.home': 'Beranda',
      'nav.about': 'Tentang',
      'nav.projects': 'Proyek',
      'nav.skills': 'Keahlian',
      'nav.achievement': 'Prestasi',
      'nav.contact': 'Kontak',

      'hero.kicker': 'Rekayasa Perangkat Lunak & Desain UI/UX',
      'hero.statement': 'Siswa Rekayasa Perangkat Lunak yang berfokus membangun aplikasi web bersih, antarmuka intuitif, dan pengalaman digital fungsional.',
      'hero.meta.location': 'Banyumas, Indonesia',
      'hero.meta.focus': 'Web & UI/UX',
      'hero.meta.role': 'Siswa SMK (RPL)',
      'hero.cta.work': 'Lihat Proyek',
      'hero.cta.contact': 'Hubungi Saya',
      'hero.portrait.tag': 'Siswa / Desainer',
      'hero.portrait.desc': 'Siswa Rekayasa Perangkat Lunak berdomisili di Banyumas, Indonesia.',

      'about.meta.label': '01 / Gambaran',
      'about.title': 'Tentang',
      'about.lead': 'Saya menciptakan pengalaman digital di mana logika bersih bertemu dengan desain intuitif.',
      'about.meta.major.key': 'Jurusan',
      'about.meta.major.val': 'Rekayasa Perangkat Lunak (RPL)',
      'about.meta.school.key': 'Jenjang',
      'about.meta.school.val': 'Sekolah Menengah Kejuruan (SMK)',
      'about.meta.location.key': 'Lokasi',
      'about.meta.location.val': 'Banyumas, Jawa Tengah',
      'about.meta.focus.key': 'Fokus',
      'about.meta.focus.val': 'Frontend, UI/UX & Game Dev',
      'about.p1': 'Saat ini menempuh pendidikan Rekayasa Perangkat Lunak (RPL) dengan fokus utama pada dasar web development, logika backend, dan sistem antarmuka yang bersih. Saya senang memahami cara kerja kode di balik layar dan memastikannya nyaman digunakan di bagian depan.',
      'about.p2': 'Di samping pemrograman, saya mendalami desain antarmuka Figma, mekanika game 2D di GDevelop, editing video, dan esports kompetitif. Bagi saya, disiplin teknis dan kreativitas visual saling melengkapi.',
      'about.interests.title': 'Fokus & Minat',

      'projects.meta.label': '02 / Portofolio',
      'projects.title': 'Proyek Unggulan',
      'projects.count': '03 Karya Pilihan',
      'project1.num': '01',
      'project1.name': 'trip.dwk',
      'project1.desc': 'Platform web open-trip travel yang dirancang untuk kemudahan eksplorasi dan alur booking. Memadukan tipografi dan antarmuka bersih dengan logika backend terstruktur.',
      'project1.view': 'Buka Proyek',
      'project1.code': 'Kode Sumber',
      'project2.num': '02',
      'project2.name': 'Landing Page Responsif',
      'project2.desc': 'Landing page modern dan responsif yang berfokus pada hierarki visual, tipografi, kenyamanan tampilan mobile, dan performa frontend vanilla.',
      'project2.view': 'Lihat Proyek',
      'project3.num': '03',
      'project3.name': 'Proyek Game 2D',
      'project3.desc': 'Game 2D interaktif yang dibangun dengan GDevelop, mengeksplorasi mekanika karakter, progresi level, event scripting, dan kontrol yang responsif.',
      'project3.view': 'Lihat Detail',

      'skills.meta.label': '03 / Kemampuan',
      'skills.title': 'Keahlian & Toolkit',
      'skills.cat1': 'Development',
      'skills.cat2': 'Design',
      'skills.cat3': 'Kreatif',
      'skills.cat4': 'Game Dev',

      'achievement.meta.label': '04 / Penghargaan',
      'achievement.title': 'Prestasi',
      'achievement.place': 'Juara 1',
      'achievement.event': 'Poco Extreme Esports — Banyumas',
      'achievement.desc': 'Mewakili Banyumas dalam turnamen esports Free Fire dan meraih peringkat pertama. Kompetisi ini melatih pengambilan keputusan cepat, kerja sama tim, dan fokus di bawah tekanan.',

      'contact.meta.label': '05 / Kontak',
      'contact.cta': 'Mari buat sesuatu bersama.',
      'contact.sub': 'Punya ide proyek, kebutuhan kolaborasi, atau sekadar ingin berdiskusi — pintu saya selalu terbuka.',
      'contact.copybtn': 'Salin',
      'contact.toast': 'Email berhasil disalin!',

      'footer.copy': '© 2026 Raiyan Danish Aufa',
      'footer.status': 'Banyumas, Indonesia • WIB',
    }
  };

  let activeLang = 'en';

  function initLanguage() {
    try {
      activeLang = localStorage.getItem('site-lang') || 'en';
    } catch (e) {
      activeLang = 'en';
    }

    const langBtns = document.querySelectorAll('[data-lang-btn]');

    function applyLang(lang) {
      activeLang = lang;
      const dict = translations[lang] || translations.en;

      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
          el.textContent = dict[key];
        }
      });

      langBtns.forEach(btn => {
        btn.classList.toggle('is-active', btn.getAttribute('data-lang-btn') === lang);
      });

      try {
        localStorage.setItem('site-lang', lang);
      } catch (e) {}

      document.documentElement.setAttribute('lang', lang);
    }

    langBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-lang-btn');
        applyLang(target);
      });
    });

    applyLang(activeLang);
  }

  /* ========================================================================
     2. Navigation, Smooth Scroll & Active Tracking
     ======================================================================== */
  function initNavigation() {
    const nav = document.querySelector('.nav');
    const hamburger = document.querySelector('.nav__hamburger');
    const overlay = document.querySelector('.nav__mobile-overlay');
    const navLinks = document.querySelectorAll('.nav__link, .nav__mobile-link');
    const sections = document.querySelectorAll('section[id]');

    // Mobile Hamburger
    if (hamburger && overlay) {
      hamburger.addEventListener('click', () => {
        const isOpen = overlay.classList.toggle('is-open');
        hamburger.classList.toggle('is-active', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
      });

      document.querySelectorAll('.nav__mobile-link').forEach(link => {
        link.addEventListener('click', () => {
          overlay.classList.remove('is-open');
          hamburger.classList.remove('is-active');
          hamburger.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        });
      });
    }

    // Smooth Scroll for all in-page anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          const navHeight = nav ? nav.offsetHeight : 0;
          const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY - navHeight - 16;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          if (overlay && overlay.classList.contains('is-open')) {
            overlay.classList.remove('is-open');
            if (hamburger) {
              hamburger.classList.remove('is-active');
              hamburger.setAttribute('aria-expanded', 'false');
            }
            document.body.style.overflow = '';
          }
        }
      });
    });

    // Active Section Tracking
    function updateActiveNav() {
      const scrollY = window.scrollY + 160;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.toggle(
              'is-active',
              link.getAttribute('href') === `#${sectionId}`
            );
          });
        }
      });
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });
    updateActiveNav();
  }

  /* ========================================================================
     3. Live Clock (WIB - UTC+07:00)
     ======================================================================== */
  function initLiveClock() {
    const clockElements = document.querySelectorAll('.js-live-clock');
    if (!clockElements.length) return;

    function updateTime() {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      const timeStr = now.toLocaleTimeString('en-GB', options);

      clockElements.forEach(el => {
        el.textContent = `${timeStr} WIB`;
      });
    }

    updateTime();
    setInterval(updateTime, 1000);
  }

  /* ========================================================================
     4. Copy Email to Clipboard with Toast Notification
     ======================================================================== */
  function initCopyEmail() {
    const copyBtns = document.querySelectorAll('.js-copy-email');
    const toast = document.querySelector('.toast-notice');
    let toastTimeout;
    let btnTimeout;

    copyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const email = btn.getAttribute('data-email') || 'danishraiyan05@gmail.com';
        const labelSpan = btn.querySelector('[data-i18n="contact.copybtn"]') || btn;

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(email).then(showFeedback).catch(fallbackCopy);
        } else {
          fallbackCopy();
        }

        function fallbackCopy() {
          const textarea = document.createElement('textarea');
          textarea.value = email;
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.select();
          try {
            document.execCommand('copy');
            showFeedback();
          } catch (err) {}
          document.body.removeChild(textarea);
        }

        function showFeedback() {
          // 1. Inline button feedback ("Copied ✓")
          btn.classList.add('is-copied');
          labelSpan.textContent = 'Copied ✓';

          clearTimeout(btnTimeout);
          btnTimeout = setTimeout(() => {
            btn.classList.remove('is-copied');
            const dict = translations[activeLang] || translations.en;
            labelSpan.textContent = dict['contact.copybtn'] || (activeLang === 'id' ? 'Salin' : 'Copy');
          }, 2000);

          // 2. Subtle toast notification
          if (!toast) return;
          const dict = translations[activeLang] || translations.en;
          const toastMsg = toast.querySelector('.toast-msg');
          if (toastMsg) {
            toastMsg.textContent = dict['contact.toast'] || 'Email copied to clipboard!';
          }

          toast.classList.add('is-visible');
          clearTimeout(toastTimeout);
          toastTimeout = setTimeout(() => {
            toast.classList.remove('is-visible');
          }, 2400);
        }
      });
    });
  }

  /* ========================================================================
     5. Scroll Reveal Animation
     ======================================================================== */
  function initScrollReveal() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const reveals = document.querySelectorAll('.reveal');

    if (prefersReducedMotion) {
      reveals.forEach(el => el.classList.add('is-revealed'));
      return;
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
      });

      reveals.forEach(el => observer.observe(el));
    } else {
      reveals.forEach(el => el.classList.add('is-revealed'));
    }
  }

  /* ========================================================================
     Initialization on DOM Ready
     ======================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initNavigation();
    initLiveClock();
    initCopyEmail();
    initScrollReveal();
  });

})();
