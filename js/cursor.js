/* ==========================================================================
   Custom Cursor — extremely subtle, desktop only
   Optional: can be disabled by removing the init call
   ========================================================================== */

export function initCursor() {
  // Skip on touch devices
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouch) return;

  // Respect reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  // Create cursor dot
  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  dot.setAttribute('aria-hidden', 'true');
  document.body.appendChild(dot);

  // Inject styles
  const style = document.createElement('style');
  style.textContent = `
    .cursor-dot {
      position: fixed;
      top: 0;
      left: 0;
      width: 6px;
      height: 6px;
      background-color: var(--accent);
      border-radius: 50%;
      pointer-events: none;
      z-index: var(--z-cursor);
      opacity: 0;
      transition: opacity 0.3s ease, transform 0.15s ease;
      transform: translate(-50%, -50%);
      mix-blend-mode: difference;
    }
    .cursor-dot.is-visible {
      opacity: 0.7;
    }
    .cursor-dot.is-hover {
      transform: translate(-50%, -50%) scale(2.5);
      opacity: 0.4;
    }
  `;
  document.head.appendChild(style);

  let mouseX = 0;
  let mouseY = 0;
  let dotX = 0;
  let dotY = 0;

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.classList.add('is-visible');
  });

  document.addEventListener('mouseleave', () => {
    dot.classList.remove('is-visible');
  });

  // Hover state for interactive elements
  const hoverTargets = 'a, button, [role="button"], .project__image-wrap';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverTargets)) {
      dot.classList.add('is-hover');
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverTargets)) {
      dot.classList.remove('is-hover');
    }
  });

  function animate() {
    dotX = lerp(dotX, mouseX, 0.15);
    dotY = lerp(dotY, mouseY, 0.15);
    dot.style.left = `${dotX}px`;
    dot.style.top = `${dotY}px`;
    requestAnimationFrame(animate);
  }

  animate();
}
