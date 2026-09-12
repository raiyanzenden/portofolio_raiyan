/* ==========================================================================
   Main — Entry point
   ========================================================================== */

import { initNav } from './nav.js';
import { initScrollReveal } from './scroll.js';
import { initHero } from './hero.js';
import { initLang } from './lang.js';
import { initCursor } from './cursor.js';

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollReveal();
  initHero();
  initLang();
  initCursor(); // Remove this line to disable custom cursor
});
