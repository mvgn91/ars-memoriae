const canvas = document.querySelector<HTMLCanvasElement>('[data-orb-canvas]');
const wrap = document.querySelector<HTMLElement>('[data-orb-wrap]');
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
let reducedMotion = motion.matches;
let visible = true;

if (canvas && wrap) {
  const context = canvas.getContext('2d');
  if (context) {
    let frame = 0;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;

    const getPalette = () => document.documentElement.dataset.theme === 'light'
      ? { light: 'rgba(255,255,255,.95)', amber: 'rgba(122,77,0,.94)', mid: 'rgba(232,168,56,.98)', dark: 'rgba(62,31,60,.55)' }
      : { light: 'rgba(255,239,190,.95)', amber: 'rgba(232,168,56,.94)', mid: 'rgba(126,57,86,.98)', dark: 'rgba(25,10,30,1)' };

    const resize = () => {
      const bounds = wrap.getBoundingClientRect();
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      render();
    };

    const draw = (time: number) => {
      const size = Math.min(width, height);
      const cx = width / 2;
      const cy = height / 2;
      const radius = size * .38;
      const phase = reducedMotion ? .25 : time * .00035;
      const palette = getPalette();

      context.clearRect(0, 0, width, height);
      context.save();
      context.translate(cx, cy);
      context.rotate(Math.sin(phase * .7) * .025);

      const shadow = context.createRadialGradient(radius * .1, radius * .82, radius * .1, 0, radius * .45, radius * 1.2);
      shadow.addColorStop(0, 'rgba(0,0,0,.34)');
      shadow.addColorStop(1, 'rgba(0,0,0,0)');
      context.fillStyle = shadow;
      context.beginPath();
      context.ellipse(0, radius * .82, radius * 1.05, radius * .3, 0, 0, Math.PI * 2);
      context.fill();

      const orb = context.createRadialGradient(-radius * .32, -radius * .42, radius * .05, 0, 0, radius * 1.08);
      orb.addColorStop(0, palette.light);
      orb.addColorStop(.22, palette.amber);
      orb.addColorStop(.64, palette.mid);
      orb.addColorStop(1, palette.dark);
      context.fillStyle = orb;
      context.beginPath();
      context.arc(0, 0, radius, 0, Math.PI * 2);
      context.fill();

      context.save();
      context.beginPath();
      context.arc(0, 0, radius, 0, Math.PI * 2);
      context.clip();
      context.globalCompositeOperation = 'screen';
      for (let layer = 0; layer < 5; layer += 1) {
        context.beginPath();
        context.lineWidth = 1 + layer * .45;
        context.strokeStyle = `rgba(255,255,255,${.14 - layer * .016})`;
        for (let step = -radius; step <= radius; step += 3) {
          const normalized = step / radius;
          const curve = Math.sin(normalized * 8 + phase * (1.4 + layer * .2) + layer) * radius * .055;
          const x = step + curve;
          const y = normalized * radius * .92 + Math.sin(normalized * 4 + phase + layer) * radius * .06;
          if (step === -radius) context.moveTo(x, y); else context.lineTo(x, y);
        }
        context.stroke();
      }
      const highlight = context.createRadialGradient(-radius * .42, -radius * .48, 0, -radius * .42, -radius * .48, radius * .35);
      highlight.addColorStop(0, 'rgba(255,255,255,.78)');
      highlight.addColorStop(1, 'rgba(255,255,255,0)');
      context.fillStyle = highlight;
      context.beginPath();
      context.ellipse(-radius * .38, -radius * .42, radius * .22, radius * .32, -.35, 0, Math.PI * 2);
      context.fill();
      context.restore();

      context.restore();

    };

    let last = 0;
    const tick = (time: number) => {
      frame = 0;
      if (reducedMotion || !visible || document.hidden) return;
      if (time - last >= 1000 / 30) { draw(time); last = time; }
      frame = requestAnimationFrame(tick);
    };
    const render = () => {
      cancelAnimationFrame(frame);
      draw(performance.now());
      if (!reducedMotion && visible && !document.hidden) frame = requestAnimationFrame(tick);
    };
    new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; render(); }).observe(wrap);
    motion.addEventListener('change', () => { reducedMotion = motion.matches; render(); });
    document.addEventListener('visibilitychange', render);
    const observer = new ResizeObserver(resize);
    observer.observe(wrap);
    resize();
    new MutationObserver(render).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    window.addEventListener('pagehide', () => cancelAnimationFrame(frame), { once: true });
  }
}

export {};
