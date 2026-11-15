// Native scrolling remains available if any decorative enhancement fails.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const sections = Array.from(document.querySelectorAll<HTMLElement>('.moment'));
const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('.moment-index a'));
let scheduled = false;
function update() {
  scheduled = false;
  const height = window.innerHeight;
  let active = '';
  for (const section of sections) {
    const bounds = section.getBoundingClientRect();
    if (bounds.top <= height * .5 && bounds.bottom > height * .5) active = section.id;
    const content = section.querySelector<HTMLElement>('[data-reveal]');
    if (!content) continue;
    // Long sections exit only once their final content approaches the viewport.
    // This keeps method entries, FAQ and contact controls readable throughout.
    const enter = Math.min(1, Math.max(0, (height - bounds.top) / (height * .3)));
    const exit = Math.min(1, Math.max(0, (height * .5 - bounds.bottom) / (height * .45)));
    const focused = section.contains(document.activeElement);
    content.style.opacity = String(focused ? 1 : Math.min(enter, 1 - exit));
    content.style.transform = reducedMotion.matches || focused ? 'none' : `translateY(${(1 - enter) * 36 - exit * 48}px)`;
  }
  links.forEach(link => {
    if (link.hash === `#${active}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
function schedule() {
  if (!scheduled) { scheduled = true; requestAnimationFrame(update); }
}
addEventListener('scroll', schedule, { passive: true });
addEventListener('resize', schedule, { passive: true });
addEventListener('focusin', schedule);
addEventListener('focusout', schedule);
reducedMotion.addEventListener('change', schedule);
new ResizeObserver(schedule).observe(document.body);
update();
