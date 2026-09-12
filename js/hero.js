/* ==========================================================================
   Hero Interactions — subtle cursor parallax
   ========================================================================== */

export function initHero() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const portraitWrap = document.querySelector('.hero__portrait-wrap');
  const heroSection = document.querySelector('.hero');

  if (!portraitWrap || !heroSection) return;

  // Only on desktop (no touch)
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouch) return;

  const maxOffset = 5; // ±5px — very subtle
  let animFrame = null;
  let currentX = 0;
  let currentY = 0;
  let targetX = 0;
  let targetY = 0;

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function handleMouseMove(e) {
    const rect = heroSection.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Normalized -1 to 1
    const normalX = (e.clientX - centerX) / (rect.width / 2);
    const normalY = (e.clientY - centerY) / (rect.height / 2);

    targetX = normalX * maxOffset;
    targetY = normalY * maxOffset;
  }

  function animate() {
    currentX = lerp(currentX, targetX, 0.08);
    currentY = lerp(currentY, targetY, 0.08);

    portraitWrap.style.transform = `translate(${currentX}px, ${currentY}px)`;

    animFrame = requestAnimationFrame(animate);
  }

  heroSection.addEventListener('mousemove', handleMouseMove);
  animate();

  // Clean up when hero is far out of view
  const heroObserver = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) {
        cancelAnimationFrame(animFrame);
        heroSection.removeEventListener('mousemove', handleMouseMove);
      }
    },
    { threshold: 0 }
  );

  heroObserver.observe(heroSection);
}
