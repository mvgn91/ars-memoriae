# Auditoría de diseño — ARS MEMORIAE 2

**Fecha:** 2026-11-11
**Auditor:** Buffy (Codebuff), sin skill de diseño
**Base:** `PRD-V2.md` §17 y §18 (y §3, §4, §10.2, §13 para criterios ya aprobados)
**Alcance:** jerarquía tipográfica, espaciado y vacío, motion de scroll (entrada/salida), fondo dinámico, uniformidad claro/oscuro, enlaces y tarjetas, botones flotantes, móvil 390.
**Restricciones respetadas:** no se modificó ningún archivo de código, no se hizo build, no se hizo deploy. Este informe es el único archivo creado.

---

## 0. Qué se revisó y con qué método

| Fuente | Estado |
|---|---|
| `src/` — `pages/index.astro`, `styles/global.css`, `scripts/motion.ts`, `scripts/object-orb.ts`, `layouts/BaseLayout.astro`, `components/SectionLabel.astro` | Leído completo |
| `dist/` — `index.html`, `_astro/index.BbL_Izdv.css`, bundle JS | Leído. Los mtimes de `src/` y `dist/` son 09:17 del 2026-11-11: el build está sincronizado con el código |
| `http://192.168.1.67:4323/` | Responde **200**. Es el servidor de desarrollo (`data-astro-source-file` en el HTML), así que sirve `src/`, no `dist/` |
| Render visual / capturas | **No disponible.** No hay Chrome, Chromium, Firefox, Playwright ni Puppeteer en la máquina |

Sin navegador no se puede evaluar "a ojo". Por eso las cifras de ancho, número de líneas y desbordes se calcularon con las **métricas reales de las fuentes**: Cormorant Garamond variable y DM Sans, instanciadas a los pesos 400/500 con `fontTools` 4.68, aplicando los `clamp()` del CSS a 1440×900 y 390×844, e incluyendo el `letter-spacing` declarado. No se aplicó kerning, así que los anchos son conservadores (el render real suele ser 1–2 % más estrecho). Los contrastes se calcularon con la fórmula WCAG 2.1 y composición alfa real sobre el fondo.

**Lo que este informe no puede afirmar:** antialiasing, percepción exacta de los blobs al 5–8 % de alfa, comportamiento de Lenis en táctil, ni el aspecto de los estados `:hover`. Esos puntos quedan marcados como "verificar en navegador".

---

## 1. Veredicto en una frase

La página tiene una voz propia y bien definida (damson + Cormorant + etiquetas-pregunta), pero **la jerarquía se rompe en tres de las seis secciones de contenido**, el **motion de salida deja media pantalla literalmente vacía** —y lo hace por tiempo, no por scroll, así que si el usuario se detiene la sección desaparece igual— y el **fondo sigue construido con dos sistemas superpuestos** cuyos blobs se recortan en cada frontera de sección. Esos tres defectos, más el h2 de "¿Qué es?" partido en 5 líneas y el desborde de "Descubrir", son lo que más pesa en la percepción de diseño.

---

## 2. Escala tipográfica real (medida)

| Rol | Selector | 1440 px | 390 px | Líneas | Nota |
|---|---|---|---|---|---|
| Titular hero | `h1` (`--size-hero`) | 172.8 px | 68.8 px | 2 | `font-weight: 500`; el 600 está cargado y no se usa |
| Título de sección | `h2` (`--size-title`) | 129.6 px | 56 px | 1–5 | Relación h1:h2 = **1.33×** escritorio / **1.23×** móvil |
| Pasos del método | `.method strong` | **129.6 px** | **56 px** | 1 | Mismo tamaño que un h2: compite con los títulos |
| Modos de registro | `.recording-modes` | 36.8 px | 21.6 px | 1–2 | Serif; no funciona como nivel estructural |
| Marca del colofón | `.footer__brand a` | 48 px | 28.8 px | 1 | Salta por encima de los modos de registro |
| Entradilla | `--size-lead` | 21.6 px | 18.4 px | 3–11 | |
| Cuerpo | `p` | 16 px | 16 px | — | Correcto |
| Etiqueta de sección | `.section-label` | 13.6 px | 13.6 px | 1 | Legible; 0.85rem + 0.14em tracking |
| Señal de scroll | `.scroll-cue` | **11.2 px** | **11.2 px** | 1 | Texto más pequeño de la página |
| Letra pequeña | `.fine-print` | 13.6 px | 13.6 px | 1–2 | Opacidad .65 |

**Lectura de la escala.** Hay nueve tamaños, pero solo cuatro niveles jerárquicos reales: hero, título, entradilla, cuerpo/etiqueta. Entre la entradilla (21.6 px) y el título (129.6 px) hay un salto de **6×** sin ningún nivel intermedio; entre el hero y el título hay solo **1.33×**. Es decir: el hero no manda sobre los títulos, y las etiquetas de 13.6 px son el único recurso que separa secciones cuando no hay h2. La "jerarquía exagerada" del PRD se cumple entre etiqueta y título, no entre hero y título.

---

## 3. Jerarquía tipográfica, espaciado y vacío

### H-01 · Tres secciones no tienen ningún elemento dominante — **P0**

- **Archivo:** `src/pages/index.astro`
- **Selector:** `section.promise`, `section.method`, `section.deliverable`
- **Actual:** `.promise` solo tiene etiqueta de 13.6 px + párrafo de 21.6 px. `.deliverable` tiene etiqueta + párrafo de 21.6 px + un `<details>`. `.method` no tiene h2: sus cuatro `<strong>` de 129.6 px son los elementos más grandes, pero son ítems de lista, no el título de la sección.
- **Medido:** en `.promise`, dentro de una sección de 900 px de alto, el texto más grande es de **21.6 px**. En `.about`, `.metamorphosis` y `.invitation` el elemento dominante es un h2 de 129.6 px.
- **Sugerido:** añadir un `h2` a las tres secciones, con el mismo rol y escala que las otras. Copy propuesto (sujeto a aprobación de Armand): `.promise` → "Una colección a la vez."; `.method` → "Cuatro pasos."; `.deliverable` → "Un archivo privado." Mantener la etiqueta-pregunta en 13.6 px como *eyebrow*.
- **Efecto:** hoy el usuario no puede saber "dónde empieza una sección" en la mitad del relato. Es el defecto de jerarquía nº1 y explica buena parte de la sensación de vacío.

### H-02 · "Descubrir" se desborda de su columna y choca con la descripción — **P0**

- **Archivo:** `src/styles/global.css`
- **Selector:** `.method strong { font-size: var(--size-title) }` + `.method li { grid-template-columns: 1fr 1.2fr }`
- **Actual:** el `ol` mide 960 px; la columna 1 mide **429.1 px**. "Descubrir" mide **457.7 px** a 129.6 px, "Preservar" 430.5 px y "Registrar" 427.9 px.
- **Medido:** "Descubrir" invade **28.6 px** la columna de descripción; "Preservar" 1.4 px; "Registrar" cabe por 1.2 px. A 390 px los pasos miden 56 px y caben, pero dejan de leerse como pasos para leerse como títulos.
- **Sugerido:** nueva variable `--size-step: clamp(1.9rem, 3.2vw, 3.2rem)` (30.4 px en 390, 46 px en 1440) aplicada a `.method strong`; y `grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr)` para que la columna no se estire por contenido intrínseco.
- **Efecto:** es el defecto más visible en escritorio: el nombre del paso se solapa con su propia frase. Además, al usar el mismo tamaño que un h2, el método compite con el título de sección.

### H-03 · El hero y los títulos de sección están casi al mismo volumen — **P1**

- **Archivo:** `src/styles/global.css`
- **Selector:** `--size-hero: clamp(4.3rem, 12vw, 11rem)` · `--size-title: clamp(3.5rem, 9vw, 9.5rem)`
- **Actual:** relación h1:h2 de **1.33×** a 1440 y **1.23×** a 390. El h1 usa `font-weight: 500`, aunque la familia carga 600.
- **Medido:** la segunda línea del hero ("documentada.") mide **340.2 px** en un contenido de 350 px a 390 → solo **9.8 px** de holgura. A 375 px de viewport invade 5.2 px el margen derecho; a 360 px toca el borde. El `h1` tiene `max-width: 11ch` (361 px a 390), así que no la limita.
- **Sugerido:** `--size-hero: clamp(4rem, 13vw, 13rem)` (64 px en 390, 187.2 px en 1440), `--size-title: clamp(2.6rem, 8vw, 9.5rem)` (41.6 px en 390, 129.6 px en 1440), y `h1 { font-weight: 600 }`. Objetivo medible: h1:h2 ≥ **1.4×** en ambos anchos; la línea 2 del hero a 390 baja a **316.5 px** (33.5 px de holgura).
- **Nota:** bajar el mínimo de `--size-title` contradice el valor aprobado en T-301; la alternativa conservadora es dejar el h2 y subir solo el hero a 13vw, que arregla escritorio pero no la relación en móvil. Es una decisión de diseño que conviene re-aprobar.

### H-04 · El h2 de "¿Qué es?" ocupa 5 líneas y 583 px — **P1**

- **Archivo:** `src/styles/global.css`
- **Selector:** `h2 { max-width: 12ch }` + `.about__copy` (columna de 767.5 px a 1440)
- **Actual:** `12ch` = **741.8 px**, apenas menos que la columna. El titular se parte en **5 líneas**: 583.2 px de alto a 129.6 px.
- **Medido:** con `max-width` igual al ancho de columna (767.5 px) son **4 líneas / 466.6 px**. A 390 px, `12ch` = 320.5 px y el titular se parte en **5 líneas / 252 px** dejando "para" huérfano en una línea; con los 350 px completos son **4 líneas / 201.6 px**.
- **Sugerido:** `.about h2 { max-width: min(100%, 16ch) }`. A 1440 queda limitado por la columna (4 líneas); a 390 usa los 350 px (4 líneas, sin "para" suelto).
- **Efecto:** un titular partido en 5 líneas deja de leerse como titular y empieza a leerse como párrafo; además empuja el cuerpo a la mitad inferior por el `align-items: end`.

### H-05 · La etiqueta de sección se separa 72–96 px de su contenido — **P1**

- **Archivo:** `src/styles/global.css`
- **Selector:** `.section-label { margin: 0 0 clamp(3rem, 8vh, 6rem) }`
- **Actual:** 72 px con viewport de 900; hasta 96 px como máximo. Es el mayor espacio fijo del sistema.
- **Medido:** sumado al `padding` de sección (72–80 px), la etiqueta flota en la parte superior y el título arranca ~144 px más abajo.
- **Sugerido:** `margin: 0 0 clamp(1.5rem, 3vh, 2.5rem)` (24–40 px). La etiqueta debe pegarse a lo que etiqueta.
- **Efecto:** es aire muerto en **cada** sección, justo donde el ojo busca la relación etiqueta → título.

### H-06 · El vacío móvil de "¿Para quién es?" es de 128 px — **P1**

- **Archivo:** `src/styles/global.css`
- **Selector:** `@media (max-width: 700px) { .promise__lead { margin-top: 6rem } }`
- **Actual:** etiqueta con `margin-bottom: 2rem` (32 px) **+** `margin-top: 6rem` (96 px) = **128 px** de hueco.
- **Medido:** el párrafo ocupa 5 líneas a 18.4 px. La sección se lee como "una etiqueta, un abismo, un párrafo".
- **Sugerido:** `margin-top: 0` en móvil (el `margin-bottom` de la etiqueta ya separa).
- **Efecto:** corrige el tramo más evidentemente vacío de la vista 390.

### H-07 · `.metamorphosis` arrastra 140 svh y empieza a desvanecerse con 64 % sin leer — **P0**

- **Archivo:** `src/styles/global.css` (+ `src/scripts/motion.ts`)
- **Selector:** `.metamorphosis { min-height: 140svh }`
- **Actual:** 1260 px de alto a 900 de viewport. El contenido (`.metamorphosis__frame` con `min-height: 78vh` + padding) ocupa unos 938 px → **322 px vacíos (36 % de la sección)**.
- **Medido:** cuando el borde superior de la sección llega al 50 % del viewport, todavía queda **64 % de la sección (0.9V de 1.4V) por debajo del pliegue**, y la salida ya está en marcha (ver M-01).
- **Sugerido:** `min-height: 100svh` (o `auto`) y `padding-block: clamp(4rem, 8vw, 7rem)`. El orbe y el texto no necesitan 1.4 pantallas para respirar.
- **Efecto:** elimina el tramo muerto más grande del centro del relato y hace que la sección se lea antes de desvanecerse.

### H-08 · "¿Cómo queda el archivo?" ocupa el 41 % de la pantalla con vacío — **P1**

- **Archivo:** `src/pages/index.astro` + `src/styles/global.css`
- **Selector:** `section.deliverable` (sin h2) · `.archive-copy` · `.faq { margin: 6rem 0 0 auto }`
- **Actual:** etiqueta + párrafo de 21.6 px + un `<details>` cerrado, dentro de `min-height: 100svh`. El párrafo mide 5 líneas a 1440 y **11 líneas a 390**. El `faq` añade 96 px de margen superior.
- **Medido:** el contenido ocupa ~534 px de 900 → **~366 px vacíos (41 %)**, calculado con la escala tipográfica medida.
- **Sugerido:** añadir el h2 de H-01; `section.deliverable { min-height: auto }` o centrar su contenido; `.faq { margin-top: clamp(2rem, 4vh, 3rem) }`. En 390, `.archive-copy { font-size: var(--size-body) }` (16 px) para bajar de 11 líneas.
- **Efecto:** la sección deja de ser "un párrafo flotando en una pantalla vacía" y se convierte en el cierre documental que el PRD pide.

### H-09 · El cierre no está centrado: el `margin-top: auto` lo empaqueta arriba — **P1**

- **Archivo:** `src/styles/global.css`
- **Selector:** `.invitation { display: flex; flex-direction: column; justify-content: center }` + `.invitation .fine-print { margin-top: auto }`
- **Actual:** en un flex column, un margen automático consume todo el espacio libre **antes** que `justify-content`. Resultado: etiqueta, h2 y tarjetas quedan arriba, y la letra pequeña se pega al fondo.
- **Medido:** a 1440×900 el content box mide 756 px; el bloque superior (etiqueta + h2 de 2 líneas + 3 tarjetas) ronda 491 px → **~265 px de hueco** entre las tarjetas y la letra pequeña, en vez de un bloque centrado.
- **Sugerido:** quitar `margin-top: auto` y usar `margin-top: clamp(3rem, 6vh, 5rem)`; si se quiere la letra al fondo, envolver el bloque superior en un `<div>` y usar `justify-content: space-between` de forma explícita.
- **Efecto:** hoy la sección más importante para la conversión se ve desequilibrada y deja la advertencia aislada al pie.

### H-10 · `.capabilities` dibuja una columna vacía de 413 px — **P2**

- **Archivo:** `src/styles/global.css`
- **Selector:** `.about__copy, .capabilities { grid-template-columns: minmax(0, 1.3fr) minmax(16rem, .7fr); gap: clamp(2rem, 8vw, 10rem) }`
- **Actual:** `.capabilities` solo contiene `.archive-copy`, que cae en la columna 1 (767.5 px). La columna 2 (413 px) y el gap (115 px) quedan vacíos; `align-items: end` empuja el texto al fondo.
- **Sugerido:** `.capabilities { display: block }` y `.archive-copy { max-width: 52rem; margin-left: auto }` (que ya tiene).
- **Efecto:** media sección vacía por un grid que no tiene con qué llenarse.

### H-11 · Dos tonos de cuerpo y dos filetes para el mismo recurso — **P2**

- **Archivo:** `src/styles/global.css`
- **Selector:** `.about__copy p { color: var(--muted) }` y `.method__intro { color: var(--muted) }` frente a `.promise__lead`, `.archive-copy` y `.metamorphosis__note` en `--text`; `.method li { border-top: 1px solid var(--border) }` frente a `.faq { border-top: 1px solid var(--rule) }`
- **Actual:** el cuerpo usa dos tonos sin regla visible: muted (8.06:1 en oscuro) en "Qué es" y "Cómo", texto pleno (12.35:1) en el resto. Los filetes del método son ámbar al 50 % (2.81:1 en oscuro) y los de la FAQ casi invisibles (1.57:1).
- **Sugerido:** un solo token de filete estructural (`--hairline`: `rgba(240,238,233,.16)` / `rgba(17,24,39,.18)`) para método y FAQ; reservar `--border` para tarjetas y botones. Un solo tono de cuerpo: `--text` para todos los párrafos, `--muted` solo para `.fine-print`.
- **Efecto:** cuatro barras doradas hacen que el método parezca una tabla de precios; el tono doble hace que unas secciones "pesen" más que otras sin motivo.

### H-12 · No hay nivel intermedio y la señal de scroll es de 11.2 px — **P2**

- **Archivo:** `src/styles/global.css`
- **Selector:** `--size-lead` (máx. 21.6 px) · `--size-title` (mín. 129.6 px) · `.scroll-cue { font-size: .7rem }`
- **Actual:** 6× de salto entre entradilla y título; ningún subtítulo estructural entre 24 y 40 px. `.scroll-cue` es el texto más pequeño de la página.
- **Sugerido:** `--size-subhead: clamp(1.5rem, 2.4vw, 2.25rem)` para subtítulos/FAQ/pasos; `.scroll-cue { font-size: .8rem }` (12.8 px).
- **Efecto:** da un nivel de lectura más y elimina el texto por debajo del piso de legibilidad.

---

## 4. Motion de scroll (entrada y salida)

### M-01 · La salida es por tiempo, no por scroll: si el usuario se detiene, la sección desaparece — **P0**

- **Archivo:** `src/scripts/motion.ts`
- **Selector:** entrada `start: 'top 86%'`; salida `gsap.to(..., { opacity: 0, y: -48, duration: .55, scrollTrigger: { start: 'top 50%' } })`
- **Actual:** la salida se dispara cuando el borde superior de la sección llega al **centro** del viewport y se ejecuta en 0.55 s de tiempo real, no con `scrub`. La siguiente sección empieza a entrar cuando su borde superior llega al **86 %**.
- **Medido:** para secciones de `100svh`, la salida arranca en `docTop − 0.5V` y la entrada de la siguiente en `docTop + 0.14V` → **0.64V de recorrido muerto**: 540 px a 844 de alto y 576 px a 900. En ese tramo la sección actual está en `opacity: 0` y la siguiente todavía no existe visualmente. Y si el usuario se detiene justo al 50 %, la sección se desvanece igual y la pantalla queda vacía.
- **Sugerido:** un solo timeline con `scrub` para que el estado siempre corresponda a la posición:
  ```js
  gsap.timeline({ scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 0.45 } })
    .fromTo(el, { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 0.35, ease: 'none' })
    .to(el, { opacity: 0, y: -36, duration: 0.35, ease: 'none' }, '>0.3');
  ```
  Si se mantienen dos triggers: entrada `top 95%` y salida `bottom 55%` (no `top 50%`), y `scrub: true` en la salida.
- **Efecto:** es la causa mecánica del "se siente vacío". No es el copy: es que durante media pantalla de scroll no hay nada, y al pausar tampoco.

### M-02 · Dos tweens pelean por `opacity` e `y` del mismo nodo — **P0**

- **Archivo:** `src/scripts/motion.ts`
- **Selector:** `gsap.from(element, { opacity: 0, y: 28 })` + `gsap.to(element, { opacity: 0, y: -48 })`, cada uno con su propio ScrollTrigger
- **Actual:** ambos tweens escriben las mismas propiedades. `immediateRender: false` evita el flash inicial, pero no el conflicto al subir y bajar rápido: el `reverse` de uno pisa el estado del otro.
- **Medido:** el estado final de la entrada es `opacity: 1 / y: 0`; el de la salida es `opacity: 0 / y: -48`. No hay un estado compartido, así que al invertir la dirección se pueden quedar valores intermedios (sección atascada al 40 %).
- **Sugerido:** el timeline único de M-01. Nunca dos tweens sobre las mismas propiedades del mismo nodo.
- **Efecto:** parpadeo y estados a medio fundir: exactamente lo que hace que el motion "no se sienta".

### M-03 · El hero se anima dos veces y su LCP arranca en `opacity: 0` — **P1**

- **Archivo:** `src/pages/index.astro` + `src/styles/global.css`
- **Selector:** `<section class="hero" data-reveal="hero">` · `h1 span { animation: line-reveal .9s }`
- **Actual:** el hero recibe la entrada GSAP (`opacity: 0`, `y: 28`) **y** la máscara CSS por línea en paralelo. Además hereda la salida y desaparece cuando su borde superior pasa el 50 % (≈420 px de scroll en un viewport de 844).
- **Sugerido:** quitar `data-reveal` del hero y dejar solo el `line-reveal` CSS. Si se quiere motion de scroll en el hero, usar un `fromTo` con `scrub` sobre `y`, sin opacidad de sección.
- **Efecto:** doble animación al cargar, el titular (LCP) empieza invisible, y el hero se va antes de que el usuario lea el apoyo.

### M-04 · El delay de la segunda línea cae en el `<br>` — **P2**

- **Archivo:** `src/styles/global.css`
- **Selector:** `h1 span:nth-child(2) { animation-delay: .12s }` / `h1 span:nth-child(3) { animation-delay: .24s }`
- **Actual:** el markup es `<span>…</span><br><span>…</span>`. Los hijos son 1, 2 (`<br>`) y 3. El delay de 0.12 s no aplica a ninguna línea; la segunda entra a 0.24 s.
- **Sugerido:** `h1 span + span { animation-delay: .12s }` y borrar la regla de `:nth-child(3)`.
- **Efecto:** el escalonado del hero se siente lento y flotante en vez de seco.

### M-05 · `scroll-behavior: smooth` y el botón de subir pelean con Lenis — **P2**

- **Archivo:** `src/styles/global.css` + `src/layouts/BaseLayout.astro`
- **Selector:** `html { scroll-behavior: smooth }` · `window.scrollTo({ top: 0, behavior: 'smooth' })`
- **Actual:** Lenis controla el scroll del documento; el `scroll-behavior` nativo y el `scrollTo` del botón quedan fuera de Lenis, así que ScrollTrigger puede leer posiciones intermedias y disparar antes o después.
- **Sugerido:** `html { scroll-behavior: auto }`; exponer la instancia (`window.__lenis = lenis`) y usar `lenis.scrollTo(0, { duration: 1.1 })`.
- **Efecto:** micro-saltos al usar el botón y desfases de disparo del motion.

### M-06 · Reduced motion sigue borrando secciones al 50 % — **P2**

- **Archivo:** `src/scripts/motion.ts`
- **Selector:** rama `else` (reduced motion): `gsap.to(element, { opacity: 0, scrollTrigger: { start: 'top 50%' } })`
- **Actual:** con `prefers-reduced-motion` no hay Lenis ni desplazamiento, pero la salida por opacidad se mantiene en el 50 % y sigue siendo por tiempo.
- **Sugerido:** mantener solo la entrada por opacidad y, si se conserva salida, dispararla en `bottom 10%` o con `scrub`, nunca al 50 %.
- **Efecto:** para quien pide menos movimiento, la página literalmente borra lo que está leyendo.

### M-07 · No se refresca ScrollTrigger tras fuentes ni al abrir la FAQ — **P2**

- **Archivo:** `src/scripts/motion.ts` + `src/pages/index.astro`
- **Selector:** `window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true })` · `<details class="faq">`
- **Actual:** las fuentes de Google se cargan con `display=swap`; el intercambio de Cormorant cambia la altura de los títulos (el h2 de 5 líneas puede pasar de 4 a 5 líneas) y las posiciones de trigger quedan viejas. Abrir la FAQ también cambia la altura de `.deliverable` sin refrescar.
- **Sugerido:** `document.fonts.ready.then(() => ScrollTrigger.refresh())` y `faq.addEventListener('toggle', () => ScrollTrigger.refresh())`.
- **Efecto:** secciones que entran/salen con retraso o en el sitio equivocado tras la primera carga.

---

## 5. Fondo dinámico

### F-01 · Siguen existiendo dos fondos y 12 blobs recortados sección a sección — **P0**

- **Archivo:** `src/styles/global.css`
- **Selector:** `section:not(.hero):not(.invitation)::before/::after, footer::before/::after { … animation: blob-drift 32s }` + `section, footer { overflow: hidden }` + `.ambient-field` (2 blobs + 2 anillos)
- **Actual:** **14 capas animadas**: 2 blobs por cada una de las 5 secciones intermedias + 2 en el footer = 12, más 2 blobs fijos del `.ambient-field`. Los 12 blobs de sección se recortan en seco con el `overflow: hidden` de cada `<section>`, justo en la frontera.
- **Medido:** el blob superior mide `42vw` (604.8 px a 1440) con `blur(70px)`. Su alfa efectiva es baja: ámbar al 11 % sobre damson da **1.23:1**; en claro, ámbar al 8 % sobre Cloud Dancer da **1.05:1**. El recorte duro en cada límite es el único mecanismo que puede producir "divisiones tipo paneles"; en claro el tinte es apenas perceptible, así que el efecto visual viene del corte y de que el patrón se reinicia en cada sección.
- **Sugerido:** eliminar el bloque completo `section:not(.hero):not(.invitation)::before/::after, footer::before/::after` y su `@keyframes blob-drift`. Dejar un solo `.ambient-field` fijo (ya es un lienzo continuo) y, si hace falta más riqueza, añadir una tercera capa dentro del campo fijo, no por sección.
- **Efecto:** un solo fondo continuo, sin paneles, sin dos derivas desincronizadas (32 s vs 22 s) y con 12 capas de `blur(70px)` menos.

### F-02 · La deriva existe pero no se percibe — **P1**

- **Archivo:** `src/styles/global.css`
- **Selector:** `@keyframes ambient-drift { translate3d(-3%,-2%) scale(.92) → translate3d(5%,4%) scale(1.08) }`, 22 s
- **Actual:** sobre un blob de 604.8 px el recorrido es 8 % del propio tamaño = **48.4 px en 22 s ≈ 2.2 px/s**, sobre una capa de contraste 1.05–1.23:1.
- **Sugerido:** `translate3d(-6%,-4%) → translate3d(8%,6%)` (≈85 px), `scale(.9) → scale(1.12)`, y subir `.ambient-field::before/::after` a `opacity: 1`. Para que el movimiento se note sin distraer, el recorrido debe ser mayor, no la velocidad.
- **Efecto:** T-292/T-304 piden que el fondo "se sienta vivo en reposo"; hoy hay animación, pero no se percibe en un vistazo.

### F-03 · Los anillos ambientales son casi invisibles y siguen en móvil — **P1**

- **Archivo:** `src/styles/global.css` + `src/layouts/BaseLayout.astro`
- **Selector:** `.ambient-field__ring { border: 1px solid var(--ambient-line); opacity: .35 }`
- **Actual:** alfa efectiva = 14 % × 35 % = 4.9 % en oscuro y 12 % × 35 % = 4.2 % en claro. Contraste resultante: **1.14:1** y **1.08:1**. A 390 miden `min(60vw, 55rem)` = 234 px y no se desactivan en el `@media`.
- **Sugerido:** eliminarlos o subirlos a un contraste intencional (`--ambient-line` al 30 %, `opacity: .6`) y, si se quedan, ocultarlos en `@media (max-width: 700px)` para no reintroducir la familia visual de anillos que §10.2 descartó para móvil.
- **Efecto:** hoy no aportan nada perceptible y añaden dos capas; si se suben, hay que decidir si son un recurso o un residuo.

### F-04 · La textura del hero es invisible en tema claro de escritorio — **P1**

- **Archivo:** `src/styles/global.css`
- **Selector:** `.hero__texture { mix-blend-mode: screen; opacity: .18 }` + `[data-theme='light'] { --texture-highlight: rgba(17,24,39,.18) }`
- **Actual:** `screen` **aclara**, no oscurece. Los anillos oscuros al 18 % con la capa al 18 % (alfa neta 3.2 %) dan un compuesto de ~**240.0 sobre 240**; el radial ámbar llega a ~**242.4**. Sobre Cloud Dancer el hero queda prácticamente plano.
- **Sugerido:** `:root[data-theme='light'] .hero__texture { mix-blend-mode: multiply; opacity: .5 }` y `--texture-highlight: rgba(62,31,60,.35)`.
- **Efecto:** el tema claro pierde la atmósfera que sí tiene el oscuro; §9.4 pide una variante clara visible y sutil.

### F-05 · El fondo fijo no responde al scroll — **P2**

- **Archivo:** `src/styles/global.css` / `src/scripts/motion.ts`
- **Selector:** `.ambient-field { position: fixed; inset: 0 }`
- **Actual:** al consolidar F-01, el único fondo queda anclado al viewport; al hacer scroll no cambia nada y se lee como wallpaper.
- **Sugerido:** un ScrollTrigger sobre `document.body` que mueva los hijos del campo (`yPercent: -6` en `::before` y `+8` en `::after`) o una variable `--scroll-shift` actualizada por Lenis; solo `transform`.
- **Efecto:** cumple "vivo en reposo **y** al hacer scroll" (§17 T-292) sin tocar el contenido.

### F-06 · Coste de composición: 14 capas difuminadas y un canvas siempre encendido — **P2**

- **Archivo:** `src/styles/global.css` + `src/scripts/object-orb.ts`
- **Selector:** `filter: blur(70px)` / `blur(76px)`; `requestAnimationFrame(draw)` sin `IntersectionObserver`
- **Actual:** 14 elementos grandes con blur animado, más el orbe redibujando 5 capas de ~170 segmentos por frame aunque esté fuera de pantalla (el 90 % del recorrido).
- **Sugerido:** una sola familia de blobs; pausar el RAF del orbe con `IntersectionObserver` y reanudar al entrar; `will-change: transform` solo durante la animación.
- **Efecto:** menos batería y menos jank en móvil, sin cambio visual.

---

## 6. Uniformidad del tema claro/oscuro

### T-01 · Los botones flotantes usan damson/ámbar literales en ambos temas — **P1**

- **Archivo:** `src/styles/global.css`
- **Selector:** `.floating-action { background: var(--damson); color: var(--amber) }`
- **Actual:** en claro, el botón de tema es una superficie clara (`--panel` = #E5E2DC) y los dos flotantes son círculos ciruela oscuros: tres controles en la misma esquina con dos lenguajes. El contraste del círculo contra el fondo es 12.35:1, así que no es un problema de legibilidad sino de coherencia.
- **Sugerido:** `.floating-action { background: var(--panel); color: var(--accent-text); border-color: var(--border) }` y, en claro, `--panel: #fff` con sombra suave. Si se quiere mantener el círculo oscuro como firma, aplicarlo también al botón de tema.
- **Efecto:** el interruptor deja de prometer "toda la interfaz de manera uniforme" (§3).

### T-02 · El único h2 en ámbar rompe el significado del acento — **P1**

- **Archivo:** `src/styles/global.css`
- **Selector:** `.metamorphosis h2 { color: var(--accent-text) }`
- **Actual:** es el único titular de sección en ámbar (6.88:1 en oscuro; #7A4D00 en claro). Los otros dos h2 usan `--text`.
- **Sugerido:** `color: var(--text)`. Si se quiere acento, aplicarlo al índice del paso, a una regla fina o al orbe, no al titular.
- **Efecto:** el color deja de significar "etiqueta/acento" y pasa a significar dos cosas; el ojo lee esa sección como de otra página.

### T-03 · El botón de tema no tiene superficie visible en ningún tema — **P1**

- **Archivo:** `src/styles/global.css`
- **Selector:** `.theme-toggle { background: var(--panel); border: 1px solid var(--border) }`
- **Actual:** `--panel` contra `--bg` da **1.11:1** en claro y **1.23:1** en oscuro. El borde da **2.47:1** en claro y **2.81:1** en oscuro, por debajo del 3:1 de componentes no textuales.
- **Sugerido:** en claro, `--panel: #ffffff` y `box-shadow: 0 .5rem 1.25rem rgba(0,0,0,.08)`; subir el borde a `rgba(122,77,0,.7)` en claro y `rgba(232,168,56,.65)` en oscuro. En oscuro, `--panel: #5a3155` para separarse del fondo.
- **Efecto:** hoy el botón se lee como un icono suelto, no como un control; en claro casi desaparece.

### T-04 · Falta `color-scheme` y `theme-color`: los widgets nativos no siguen el tema — **P2**

- **Archivo:** `src/layouts/BaseLayout.astro` / `src/styles/global.css`
- **Selector:** `:root` y `<head>`
- **Actual:** no hay `color-scheme: dark` / `light` ni `<meta name="theme-color">`. El triángulo nativo de `<details>`, el scrollbar y los controles del navegador se quedan en claro sobre damson; en móvil la barra del navegador no acompaña al tema.
- **Sugerido:** `:root { color-scheme: dark } :root[data-theme='light'] { color-scheme: light }` y actualizar `<meta name="theme-color">` en el script de tema (`#3E1F3C` / `#F0EEE9`).
- **Efecto:** desaparecen los restos blancos del navegador dentro de una página oscura.

### T-05 · El cambio de tema es desparejo: texto a .3 s, acentos y orbe instantáneos — **P2**

- **Archivo:** `src/styles/global.css` + `src/scripts/object-orb.ts`
- **Selector:** `body { transition: background-color .3s, color .3s }`; el canvas redibuja con `draw(0)` al mutar `data-theme`
- **Actual:** fondos, bordes, blobs y sombras cambian de golpe; solo el texto y el fondo del body transicionan. El orbe salta de paleta antes de que termine la transición. Además, el `drop-shadow` negro de `.object-orb` y la sombra del canvas se suman en claro, donde el orbe ya es claro.
- **Sugerido:** transicionar también `border-color`, `box-shadow` y los `background` de las capas; retrasar el redibujo del orbe ~150 ms o interpolar la paleta; en claro, bajar el `drop-shadow` a `rgba(62,31,60,.18)`.
- **Efecto:** el interruptor se siente como un solo cambio de estado y no como una suma de saltos.

### T-06 · El borde de las tarjetas de contacto casi desaparece en claro — **P2**

- **Archivo:** `src/styles/global.css`
- **Selector:** `.contact-links a, .footer a { border: 1px solid var(--border); border-radius: .2rem }`
- **Actual:** `--border` claro `rgba(122,77,0,.55)` sobre Cloud Dancer = **2.47:1**; oscuro `rgba(232,168,56,.5)` = **2.81:1**. Sin sombra, la tarjeta no se distingue del fondo en claro.
- **Sugerido:** en claro, `--border: rgba(122,77,0,.7)` (≈3.2:1) y una sombra muy suave `0 .35rem 1rem rgba(62,31,60,.06)`; en oscuro, subir a `.6`.
- **Efecto:** las tarjetas se leen como tarjetas en ambos temas; hoy en claro parecen texto con una línea fina.

---

## 7. Enlaces, tarjetas y botones flotantes

### L-01 · La tarjeta de MVGN se parte en dos líneas a 390 — **P1**

- **Archivo:** `src/pages/index.astro` + `src/styles/global.css`
- **Selector:** `.contact-links a` (13.6 px, `letter-spacing: .14em`, `text-transform: uppercase`, `padding: 1rem 1.15rem`, `gap: 1.5rem`)
- **Actual:** ancho de tarjeta 350 px; texto disponible = 350 − 36.8 (padding) − 13.6 (flecha) − 24 (gap) = **275.6 px**. "MVGN LABS — HTTPS://MVGN.PAGES.DEV" mide **306.8 px** → 2 líneas. "CORREO — MVGNLABS@PROTON.ME" mide 269.7 px → cabe por 5.9 px (puede partirse según kerning).
- **Sugerido:** mostrar solo "MVGN Labs" en la tarjeta (la URL completa queda en `href` y en `aria-label`/`title`); para el correo, separar etiqueta y valor. Alternativa: `text-transform: none` y `letter-spacing: .1em` en el valor (baja a ~285 px, aún no alcanza para MVGN).
- **Efecto:** hoy la tarjeta más larga se ve desprolija justo en la vista que Armand revisa.

### L-02 · Las tres tarjetas tienen el mismo peso y los valores van en mayúsculas — **P1**

- **Archivo:** `src/pages/index.astro` + `src/styles/global.css`
- **Selector:** `.contact-links a` + el contenido de los tres `<a>`
- **Actual:** WhatsApp (la conversión real), correo y MVGN comparten borde, tamaño, color y hover. El correo y la URL se muestran en mayúsculas de 13.6 px con tracking amplio, lo que reduce la legibilidad de una dirección.
- **Sugerido:** mantener la etiqueta en mayúsculas (WhatsApp / Correo / MVGN Labs) y poner el valor en caja normal (`<span>` o `<strong>`), con WhatsApp como única tarjeta rellena (`background: var(--text); color: var(--bg)`) y las otras dos con borde.
- **Efecto:** hay una jerarquía de acción clara sin añadir botones; el correo se lee como correo.

### L-03 · La flecha ↗ promete pestaña nueva y los enlaces de contacto abren en la misma — **P2**

- **Archivo:** `src/pages/index.astro`
- **Selector:** `.contact-links a` (WhatsApp, correo, MVGN) frente a `.floating-action--whatsapp`
- **Actual:** las tres tarjetas llevan un `↗` (aria-hidden) pero no tienen `target="_blank"`; el flotante de WhatsApp sí lo tiene y usa el mismo `↗`, que semánticamente significa "enlace externo", no WhatsApp.
- **Sugerido:** o añadir `target="_blank" rel="noopener noreferrer"` a WhatsApp y MVGN, o quitar el `↗` de las tarjetas. En el flotante, usar un glifo de WhatsApp o la letra "WA".
- **Efecto:** la flecha deja de mentir y el botón flotante se entiende sin pasar el cursor.

### L-04 · Tres lenguajes de forma para la misma familia de controles — **P2**

- **Archivo:** `src/styles/global.css`
- **Selector:** `.contact-links a { border-radius: .2rem }` · `.floating-action, .theme-toggle { border-radius: 50% }` · `.footer .footer__brand { max-width: 22rem }` frente a `.contact-links { max-width: 42rem }`
- **Actual:** radio 3.2 px en tarjetas, círculos perfectos en los flotantes, ancho 22rem en la tarjeta del colofón y 42rem en las de contacto. `:hover` desplaza la tarjeta 5.6 px en X (`translateX(.35rem)`).
- **Sugerido:** un radio de casa (0 o 4 px) para tarjetas y círculos solo para acciones flotantes; tarjeta del colofón al mismo ancho (42rem); hover con `translateY(-2px)` o solo inversión de color, sin desplazamiento lateral.
- **Efecto:** los elementos empiezan a leerse como un sistema y no como piezas sueltas.

### L-05 · La FAQ parece otra etiqueta de sección y no se anuncia como interactiva — **P2**

- **Archivo:** `src/styles/global.css`
- **Selector:** `.faq summary { padding: 1rem 0; font-size: var(--size-label); letter-spacing: var(--label-tracking); text-transform: uppercase }`
- **Actual:** usa exactamente la tipografía de `.section-label`, pero en `--text` y sin hover; conserva el triángulo nativo de `summary`; no tiene estado `:focus-visible` propio ni cambia al abrir.
- **Sugerido:** mantener el tamaño pero añadir un indicador propio (`summary::marker { color: var(--accent-text) }` o un `+`/`−` con `::after`), `summary:hover { color: var(--accent-text) }` y un `focus-visible` con outline. Al abrir, que el borde inferior acompañe.
- **Efecto:** deja de competir con la etiqueta de sección y se entiende que se puede abrir.

### B-01 · Los controles flotantes miden menos de 44 px y no respetan el safe area — **P1**

- **Archivo:** `src/styles/global.css`
- **Selector:** `.floating-action { width: 2.65rem; height: 2.65rem }` · `.theme-toggle { width: 2.4rem; height: 2.4rem }` · `.floating-actions { right: .75rem; bottom: .75rem }`
- **Actual:** 42.4 px y 38.4 px de lado; en móvil, 12 px desde el borde inferior, sin `env(safe-area-inset-bottom)`. El `meta viewport` no incluye `viewport-fit=cover`.
- **Sugerido:** mínimo 2.75rem (44 px) en ambos; `bottom: calc(.75rem + env(safe-area-inset-bottom))`; añadir `viewport-fit=cover` al viewport.
- **Efecto:** se pueden pulsar sin fallos y no quedan bajo la barra de gestos del iPhone.

### B-02 · El grupo flotante tiene `aria-label` sin rol, y el orbe un `aria-label` sin rol — **P2**

- **Archivo:** `src/layouts/BaseLayout.astro` + `src/pages/index.astro`
- **Selector:** `<div class="floating-actions" aria-label="Acciones rápidas">` · `<canvas … aria-label="Ornamento animado">`
- **Actual:** `aria-label` en un `div` genérico se ignora; el canvas no tiene rol de imagen y es decorativo.
- **Sugerido:** `role="group"` en `.floating-actions`; `aria-hidden="true"` en el canvas (es ornamento) o `role="img"` si debe anunciarse.
- **Efecto:** los lectores de pantalla reciben la estructura correcta.

### B-03 · Los controles fijos no comparten eje con la retícula — **P2**

- **Archivo:** `src/styles/global.css`
- **Selector:** `.theme-toggle { top: 1.25rem; right: 1.25rem }` · `.floating-actions { right: 1.25rem; bottom: 1.25rem }` → móvil `right: .75rem; bottom: .75rem`
- **Actual:** en móvil, el botón de tema está a 20 px del borde y los flotantes a 12 px; en escritorio, ambos a 20 px mientras el contenido arranca a 80 px. Tres ejes distintos.
- **Sugerido:** una variable `--gutter-control: clamp(1rem, 2.5vw, 1.5rem)` para los dos grupos; si se quiere alinear con el contenido, `right: clamp(1.25rem, 5vw, 5rem)`.
- **Efecto:** la esquina se lee ordenada en ambos anchos.

### B-04 · El botón "subir" está visible cuando ya estás arriba y usa un scroll ajeno a Lenis — **P2**

- **Archivo:** `src/layouts/BaseLayout.astro`
- **Selector:** `.floating-action--top` (siempre visible) + `window.scrollTo({ top: 0, behavior: 'smooth' })`
- **Actual:** en el primer viewport el botón no hace nada; el scroll suave nativo compite con Lenis (ver M-05).
- **Sugerido:** mostrarlo solo cuando `scrollY > 1.5 * innerHeight` (IntersectionObserver o listener pasivo), con transición de opacidad; usar `lenis.scrollTo(0)`.
- **Efecto:** la esquina gana una acción útil y se elimina el conflicto de scroll.

### B-05 · El glifo ↗ del flotante de WhatsApp se lee como "abrir enlace externo" — **P3**

- **Archivo:** `src/layouts/BaseLayout.astro`
- **Selector:** `.floating-action--whatsapp` (contenido `↗`)
- **Actual:** mismo glifo que los enlaces de contacto; nada indica WhatsApp salvo el `title`/`aria-label`.
- **Sugerido:** un glifo de WhatsApp, "WA" o el número; conservar `aria-label="Contactar por WhatsApp"`.
- **Efecto:** se entiende el destino de un vistazo.

---

## 8. Móvil 390 (844 de alto)

| Elemento | Estado medido en 390 | Referencia |
|---|---|---|
| `h1` del hero | Línea 2 = **340.2 px** sobre 350 px de contenido (97 %); deja solo 9.8 px; a 375 ya invade el padding derecho | H-03 |
| `h2` de "¿Qué es?" | **5 líneas / 252 px**; "para" queda huérfano | H-04 |
| Etiqueta → entradilla en "¿Para quién es?" | **128 px** de hueco (32 + 96) | H-06 |
| "¿Qué se registra?" | Orbe de 257 px + copy; el h2 en ámbar a 56 px domina sobre la nota | T-02 |
| Pasos del método | `strong` a 56 px en una columna; cuatro filas muy altas | H-02 |
| Archivo | `.archive-copy` a 18.4 px → **11 líneas** | H-08 |
| Tarjetas de contacto | MVGN en **2 líneas** (306.8 px vs 275.6 disponibles); correo cabe por 6 px | L-01, L-02 |
| Botones flotantes | 42.4 px y 38.4 px; a 12 px del borde, sin safe area | B-01 |
| Anillos ambientales | 234 px de diámetro, contraste 1.08:1, siguen activos | F-03 |
| Secciones | `min-height: auto` y `padding-block: 3.5rem` (correcto: en móvil no hay secciones de 100 svh) | — |
| Fondo del hero | Glow + grano a pantalla completa; sin anillos; correcto según §10.2 | — |

**Lectura móvil.** La página no se rompe, pero hay tres defectos que se ven a simple vista: el titular del hero queda a solo 9.8 px del borde del contenido (y a 375 ya invade el padding), el h2 de "¿Qué es?" deja una palabra sola y el hueco de 128 px en "¿Para quién es?". El resto es consecuencia de la escala de escritorio aplicada sin un nivel intermedio.

---

## 9. Lista priorizada

### P0 — lo que más cambia la percepción

| # | Hallazgo | Por qué primero | Coste |
|---|---|---|---|
| 1 | **M-01 + M-02** — salida por tiempo y dos tweens en conflicto | Deja 0.64 pantallas sin contenido y vacía la pantalla si el usuario se detiene; es la causa mecánica del "se siente vacío" | 1 timeline reescrito en `motion.ts` |
| 2 | **H-01 + H-02** — tres secciones sin h2 y pasos desbordados | La jerarquía desaparece en la mitad del relato y "Descubrir" se solapa con su frase | 3 h2 + 1 variable + 1 regla de grid |
| 3 | **H-07 + H-08** — 140 svh en metamorfosis y 41 % vacío en el archivo | Son los dos tramos más vacíos y frenan el ritmo justo antes del cierre | 2 reglas de `min-height`/padding |
| 4 | **F-01** — 12 blobs recortados + 2 fijos | Es el único mecanismo que produce paneles y duplica capas y derivas | Borrar un bloque CSS y su keyframe |
| 5 | **H-04** — h2 de "¿Qué es?" en 5 líneas | Un titular de 583 px se lee como párrafo y empuja el cuerpo | 1 regla `max-width` |

### P1 — pulido que se nota en la primera pasada

| # | Hallazgo | Efecto esperado |
|---|---|---|
| 6 | **H-03** — relación h1:h2 y ancho del hero en 390 | El hero vuelve a mandar y deja de invadir el margen |
| 7 | **H-05 + H-06** — márgenes de etiqueta y hueco de 128 px | Se recupera el vínculo etiqueta → contenido |
| 8 | **H-09** — cierre empaquetado arriba por `margin-top: auto` | El bloque de contacto queda centrado y equilibrado |
| 9 | **L-01 + L-02** — tarjetas largas y sin jerarquía | Contacto legible en 390 y WhatsApp reconocible como acción principal |
| 10 | **T-01 + T-02 + T-03** — flotantes, h2 ámbar y botón de tema | Un solo lenguaje de tema en toda la interfaz |
| 11 | **F-02 + F-04** — deriva imperceptible y textura clara invisible | El fondo se siente vivo y el tema claro recupera atmósfera |
| 12 | **B-01** — objetivos de 42/38 px y safe area | Los controles se pulsan bien en móvil |
| 13 | **L-05 + T-06** — FAQ y borde de tarjetas | Los elementos interactivos se reconocen como tales |

### P2 — consistencia y acabado

| # | Hallazgo | Efecto esperado |
|---|---|---|
| 14 | **H-10** — columna vacía en `.capabilities` | Se elimina media sección muerta |
| 15 | **H-11 + H-12** — filetes, tonos de cuerpo y nivel intermedio | Menos ruido, una escala más clara |
| 16 | **M-03 a M-07** — hero, `<br>`, Lenis, reduced motion, refresh | Motion coherente y accesible |
| 17 | **F-03 + F-05 + F-06** — anillos, fondo fijo, rendimiento | Menos capas y un fondo que acompaña el scroll |
| 18 | **T-04 + T-05** — `color-scheme`, `theme-color`, transiciones | El navegador también cambia de tema |
| 19 | **L-03 + L-04 + B-02 a B-05** — flechas, formas, ARIA, ejes | Sistema de controles consistente |
| 20 | **Móvil** — `viewport-fit`, safe area, 20 px de gutter | Sin roces con la barra del sistema |

**Orden recomendado de ejecución:** 1) motion; 2) títulos de sección + pasos; 3) vacío de metamorfosis/archivo; 4) fondo único; 5) el resto por prioridad. Los cinco primeros son cambios de pocas reglas y son los que más mueven la percepción.

---

## 10. Qué no pude verificar

- **No hay navegador ni capturas.** No se evaluó antialiasing, ni el aspecto exacto de los blobs, ni el hover real de las tarjetas.
- **La página en vivo es el dev server**, no `dist/`; sirve exactamente `src/`. `dist/` está sincronizado (mismos mtimes), pero no es lo que se ve en `:4323`.
- **Lenis en táctil** y el comportamiento exacto de `window.scrollTo` con Lenis no se probaron en dispositivo.
- **El recorte de blobs** se dedujo del CSS (`overflow: hidden` + pseudo-elementos por sección) y de las alfas calculadas; la percepción exacta de "panel" en tema claro debe confirmarse en pantalla.
- **Los anchos de texto** son cálculos con métricas de fuente sin kerning; el render real puede variar 1–2 %.
- **Contraste:** todos los textos pasan AA. El PRD §3 declara "blanco sobre damson 14.32:1"; con `#F0EEE9` sobre `#3E1F3C` el cálculo WCAG da **12.35:1** (sigue pasando AAA). La tinta sobre Cloud Dancer sí da 15.3:1.

---

## 11. Criterios de aceptación para la próxima ronda

1. **Motion:** en 1440 y 390, al detenerse en cualquier punto del scroll ninguna sección queda en `opacity: 0` con la siguiente fuera de pantalla; no hay tramos de más de 0.2 V sin contenido.
2. **Jerarquía:** las seis secciones de contenido tienen un elemento dominante del mismo rol; la etiqueta mide 13.6 px y el cuerpo 16 px en todas.
3. **Hero/título:** h1:h2 ≥ 1.4× en ambos anchos; la línea más larga del hero deja al menos 24 px de margen derecho a 390.
4. **Títulos:** ningún h2 supera 3 líneas a 1440; "Descubrir" no invade su columna.
5. **Vacío:** ninguna sección de escritorio deja más de 25 % de su altura sin contenido; en móvil no hay huecos etiqueta→contenido mayores de 48 px.
6. **Fondo:** un solo sistema de fondo; ninguna frontera de sección corta un blob; en reduced motion no se mueve.
7. **Tema:** los tres controles fijos comparten superficie y eje; el botón de tema tiene borde ≥ 3:1; el h2 no cambia de color por sección.
8. **Contacto:** las tres tarjetas caben en una línea a 390 o tienen un corte intencional; WhatsApp es la acción primaria; las flechas coinciden con el comportamiento real.
9. **Móvil:** objetivos ≥ 44 px; `viewport-fit=cover` y safe area; sin solapamiento con la barra de gestos.
10. **Sin regresiones:** build verde, sin deploy, y el copy aprobado intacto.

---

## Anexo A — Contraste calculado (WCAG 2.1)

| Par | Ratio | Uso |
|---|---|---|
| `#F0EEE9` / `#3E1F3C` | **12.35:1** | Texto oscuro (AAA) |
| `#111827` / `#F0EEE9` | **15.30:1** | Texto claro (AAA) |
| `#E8A838` / `#3E1F3C` | **6.88:1** | Etiquetas y acento oscuro (AA) |
| `#7A4D00` / `#F0EEE9` | **6.27:1** | Etiquetas y acento claro (AA) |
| `--muted` .78 / damson | **8.06:1** | Cuerpo atenuado oscuro |
| `--muted` .78 / cloud | **8.03:1** | Cuerpo atenuado claro |
| `.fine-print` .65 / damson | **6.10:1** | Letra pequeña oscura |
| `.fine-print` .65 / cloud | **5.20:1** | Letra pequeña clara |
| `--border` claro / cloud | **2.47:1** | Borde de tarjeta (bajo 3:1) |
| `--border` oscuro / damson | **2.81:1** | Borde de tarjeta (bajo 3:1) |
| `--panel` claro / cloud | **1.11:1** | Superficie del botón de tema |
| `--panel` oscuro / damson | **1.23:1** | Superficie del botón de tema |
| `--rule` oscuro / damson | **1.57:1** | Filete estructural |
| Anillo oscuro (14 % × .35) | **1.14:1** | Anillo ambiental |
| Anillo claro (12 % × .35) | **1.08:1** | Anillo ambiental |
| Blob ámbar oscuro (.11) | **1.23:1** | Deriva ambiental |
| Blob ámbar claro (.08) | **1.05:1** | Deriva ambiental |

**Conclusión del anexo:** los textos están bien contrastados; el problema de contraste está en los **bordes de tarjeta** y en las **superficies de los controles**, no en la tipografía. Los blobs y anillos son intencionalmente casi imperceptibles, lo que explica por qué el fondo "no se siente vivo".
