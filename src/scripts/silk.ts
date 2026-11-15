const canvas = document.querySelector<HTMLCanvasElement>('[data-silk-canvas]');
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
const mobile = window.matchMedia('(max-width: 799px)');
// Phones use the CSS field: no full-screen WebGL context or rendering loop.
if (canvas && !mobile.matches) {
  const gl = canvas.getContext('webgl', { alpha: false, antialias: false });
  if (gl) {
    const vertex = `attribute vec2 position; void main(){gl_Position=vec4(position,0.,1.);}`;
    const fragment = `precision mediump float;
      uniform vec2 resolution; uniform float time; uniform vec3 base; uniform vec3 glow;
      void main(){
        vec2 uv=gl_FragCoord.xy/resolution.xy; uv.x*=resolution.x/resolution.y;
        float t=time*.24;
        float wave=sin(uv.x*3.2+sin(uv.y*2.4+t)*1.4+t)*.5;
        wave+=sin(uv.y*5.1-uv.x*2.1+t*.8)*.24;
        float light=smoothstep(-.1,.85,wave+uv.y*.25);
        gl_FragColor=vec4(mix(base,glow,light*.13),1.);
      }`;
    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source); gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) { gl.deleteShader(shader); return null; }
      return shader;
    };
    const vs = compile(gl.VERTEX_SHADER, vertex), fs = compile(gl.FRAGMENT_SHADER, fragment);
    const program = gl.createProgram();
    if (program && vs && fs) {
      gl.attachShader(program, vs); gl.attachShader(program, fs); gl.linkProgram(program);
      if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
        gl.useProgram(program);
        gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,1,1]), gl.STATIC_DRAW);
        const position = gl.getAttribLocation(program, 'position');
        gl.enableVertexAttribArray(position); gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
        const resolution = gl.getUniformLocation(program, 'resolution'), time = gl.getUniformLocation(program, 'time');
        const base = gl.getUniformLocation(program, 'base'), glow = gl.getUniformLocation(program, 'glow');
        let frame = 0, last = 0;
        function paint(now: number) {
          const light = document.documentElement.dataset.theme === 'light';
          gl!.uniform2f(resolution, canvas!.width, canvas!.height);
          gl!.uniform1f(time, motion.matches ? 0 : now / 1000);
          gl!.uniform3fv(base, light ? [.941,.933,.914] : [.243,.122,.235]);
          gl!.uniform3fv(glow, light ? [.75,.67,.62] : [.65,.36,.33]);
          gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
        }
        function tick(now: number) {
          frame = 0;
          if (document.hidden || motion.matches || mobile.matches) return;
          if (now - last >= 1000 / 30) { paint(now); last = now; }
          frame = requestAnimationFrame(tick);
        }
        function refresh() {
          cancelAnimationFrame(frame);
          const ratio = Math.min(devicePixelRatio || 1, 1);
          canvas!.width = Math.round(innerWidth * ratio); canvas!.height = Math.round(innerHeight * ratio);
          gl!.viewport(0, 0, canvas!.width, canvas!.height);
          paint(performance.now());
          if (!document.hidden && !motion.matches && !mobile.matches) frame = requestAnimationFrame(tick);
        }
        addEventListener('resize', refresh, { passive: true });
        document.addEventListener('visibilitychange', refresh);
        motion.addEventListener('change', refresh);
        new MutationObserver(refresh).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
        addEventListener('pagehide', () => cancelAnimationFrame(frame), { once: true });
        refresh();
      }
    }
  }
}
export {};
