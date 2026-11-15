# Auditoría de diseño — ARS MEMORIAE 2

**Fecha:** 2026-11-11 · **Auditor:** Buffy (Codebuff) · **Base:** skill `MVGN Frontend Craft` (`/home/mvgn/skills/mvgn-frontend/SKILL.md`) + `PRD-V2.md` §17 y §18
**Alcance:** jerarquía tipográfica, vacío/espaciado, motion de scroll (entrada y salida), fondo dinámico, uniformidad claro/oscuro, enlaces y tarjetas, botones flotantes, móvil 390.
**Sin cambios de código. Sin build. Sin deploy.**

---

## 0. Qué se revisó y con qué método

| Fuente | Estado |
|---|---|
| `src/` (`index.astro`, `global.css`, `motion.ts`, `object-orb.ts`, `BaseLayout.astro`, `SectionLabel.astro`) | Leído completo |
| `dist/` (`index.html`, `index.BbL_Izdv.css`, bundle JS) | Leído; **mismo mtime (09:17) que `src/`** → el build está sincronizado con el código |
| `http://192.168.1.67:4323/` | **Responde 200**. Es el servidor de desarrollo (`data-astro-source-file` en el HTML), por lo que sirve exactamente `src/`, no `dist/` |
| Render visual (capturas) | **No disponible**: no hay Chrome/Chromium ni Playwright/Puppeteer en la máquina |

Como no hay navegador, la jerarquía no se evaluó "a ojo": se **midió con las métricas reales de las fuentes** (Cormorant Garamond 400/500 y DM Sans descargadas de Google Fonts, medidas con `fontTools`), aplicando los `clamp()` del CSS a 1440 × 900 y 390 × 844. Los números de ancho, número de líneas y desbordes de este informe son calculados, no estimados. Los contrastes están calculados con la fórmula WCAG 2.1.

**Limitación honesta:** lo que depende del render real (antialiasing, solapamiento de capas con `backdrop-filter`, comportamiento exacto de Lenis en un dispositivo táctil) queda marcado como *verificar en navegador*.

---

## 1. Veredicto en una frase

La página **se ve cuidada y ya tiene una voz propia** (damson + Cormorant + etiquetas-pregunta es una buena decisión), pero la **sensación de vacío** que reporta Armand no es un problema de contenido: la producen tres cosas medibles — **el motion de salida deja 0.64 pantallas sin contenido**, **tres de seis secciones no tienen ningún elemento dominante**, y **el fondo se parte en paneles** por blobs recortados sección a sección. Esos tres son los que más pesan en la percepción de jerarquía.

---

## 2. Escala tipográfica real (medida)

| Rol | Selector | 1440 px | 390 px | Líneas que ocupa | Nota |
|---|---|---|---|---|---|
| Hero | `h1` (`.--size-hero`) | 172.8 px | 68.8 px | 2 | `font-weight: 500` en Cormorant ≈ 400 visualmente |
| Título de sección | `h2` (`--size-title`) | 129.6 px | 56 px | 1–5 | Relación h1:h2 = **1.33×** (1.23× en móvil) |
| Pasos del método | `.method strong` | **129.6 px** | 56 px | 1 | **Mismo tamaño que un h2** → compite |
| Modos de registro | `.recording-modes` | 36.8 px | 21.6 px | 1–2 | Serif, sin función clara en la escala |
| Marca del colofón | `.footer__brand a` | 48 px | 28.8 px | 1 | Salta por encima de `.recording-modes` |
| Entradilla | `--size-lead` | 21.6 px | 18.4 px | 5 | |
| Cuerpo | `p` | 16 px | 16 px | — | Correcto |
| Etiqueta | `.section-label` | 13.6 px | 13.6 px | 1 | Legible; 230 px de ancho máximo |
| Señal de scroll | `.scroll-cue` | **11.2 px** | 11.2 px | 1 | Por debajo del piso de legibilidad del skill |

**Lectura:** hay **9 tamaños** en la página (172.8 / 129.6 / 48 / 36.8 / 21.6 / 18.4 / 16 / 13.6 / 11.2). El salto entre etiqueta (13.6) y h2 (129.6) es de casi 10×, y entre h1 y h2 de solo 1.33×. Es decir: **el hero y los títulos de sección están casi al mismo volumen, y la etiqueta es un susurro**. La "jerarquía exagerada" del PRD se cumple entre etiqueta y título, no entre hero y título.

---

## 3. Hallazgos — Jerarquía y vacío (H)

### H-01 · Tres secciones no tienen ningún elemento dominante — **P0**
| | |
|---|---|
| Archivo | `src/pages/index.astro` |
| Selector | `section.promise`, `section.method`, `section.deliverable` |
| Actual | `promise`: solo una etiqueta de 13.6 px + un párrafo de 18.4 px dentro de `100svh`. `deliverable`: etiqueta + un párrafo de 21.6 px + un `<details>`. `method`: etiqueta + intro de 16 px + cuatro `strong` de **129.6 px**. |
| Medido | En `.promise` a 1440, el elemento más grande de una sección de **900 px de alto** es texto de 21.6 px. |
| Sugerido | Añadir `h2` en las tres, en el mismo rol que las otras: `.promise` → `h2` "Una colección a la vez."; `.deliverable` → `h2` "El archivo queda en privado."; `.method` → `h2` "Cuatro pasos." con los pasos a `--size-step` (ver H-02). |
| Efecto | El usuario deja de saber "dónde empieza una sección". Es el defecto de jerarquía nº1 del sitio, y explica buena parte del "se siente cada vez más vacía" del PRD §12. |

### H-02 · Los pasos del método se desbordan y chocan con su descripción — **P0**
| | |
|---|---|
| Archivo | `src/styles/global.css` |
| Selector | `.method strong { font-size: var(--size-title) }` con `.method li { grid-template-columns: 1fr 1.2fr }` |
| Actual | Columna 1 = **429 px**; "Descubrir" ocupa **499 px**, "Registrar" **469 px**, "Preservar" **472 px** (Cormorant 400 @129.6 px, sin kerning). |
| Medido | "Descubrir" invade la columna de descripción **54 px**; "Registrar" 24 px; "Preservar" 27 px. "Curar" es el único que cabe. |
| Sugerido | Nueva variable `--size-step: clamp(1.9rem, 3.2vw, 3.2rem)` (30.4 px @390, 46 px @1440) y usarla en `.method strong`. Alternativa: `grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr)` + `font-size: clamp(2rem, 4vw, 4.5rem)`. |
| Efecto | Hoy el nombre del paso se solapa con su propia frase. Es el defecto más visible en escritorio y el que más "abarata" la página. |

### H-03 · El h2 en ámbar rompe la uniformidad — **P1**
| | |
|---|---|
| Archivo | `src/styles/global.css` |
| Selector | `.metamorphosis h2 { color: var(--accent-text) }` |
| Actual | Único h2 de la página en ámbar (6.88:1 en oscuro, #7a4d00 en claro). Todos los demás h2 son `--text`. |
| Sugerido | `color: var(--text)`. Si se quiere acento, aplicarlo al **índice del paso** o a una regla fina, no al titular. |
| Efecto | El color deja de significar "etiqueta/acento" y pasa a significar dos cosas a la vez; el ojo lee esa sección como de otra página. |

### H-04 · Etiqueta separada 96 px de su contenido — **P1**
| | |
|---|---|
| Archivo | `src/styles/global.css` |
| Selector | `.section-label { margin: 0 0 clamp(3rem, 8vh, 6rem) }` |
| Actual | 72 px con viewport de 900 px; 96 px como máximo. |
| Sugerido | `margin: 0 0 clamp(1.5rem, 3vh, 2.5rem)` (24–40 px). La etiqueta debe pegarse a lo que etiqueta. |
| Efecto | Es 1/12 de pantalla de aire muerto **en cada** sección, justo donde el ojo busca la relación etiqueta → contenido. |

### H-05 · Vacío móvil duplicado en "¿Para quién es?" — **P1**
| | |
|---|---|
| Archivo | `src/styles/global.css` |
| Selector | `@media (max-width:700px) .promise__lead { margin-top: 6rem }` |
| Actual | Etiqueta con `margin-bottom: 2rem` (32 px) **+** `margin-top: 6rem` (96 px) = **128 px** de hueco en la pantalla más pequeña, sobre un párrafo de 5 líneas (medido: 18.4 px, 5 líneas, 345 px de ancho). |
| Sugerido | `margin-top: 0` (el `2rem` de la etiqueta ya separa). |
| Efecto | En 390 la sección se lee como "una etiqueta, un abismo, un párrafo". |

### H-06 · `.metamorphosis` arrastra 60 svh de espacio muerto — **P0**
| | |
|---|---|
| Archivo | `src/styles/global.css` |
| Selector | `.metamorphosis { min-height: 140svh }` |
| Actual | 1260 px a 900 de viewport; el contenido (`.metamorphosis__frame`, `min-height:78vh`) no llega ni a la mitad. Es un resto de la época del pin que el PRD §12 eliminó. |
| Sugerido | `min-height: auto` (o `100svh` como máximo) y `padding-block: clamp(4rem,8vw,7rem)`. |
| Efecto | **60 % de pantalla en negro sin nada** en el centro del relato; es el tramo "vacío" más grande del sitio. |

### H-07 · El h2 de "¿Qué es?" ocupa 5 líneas y 583 px — **P2**
| | |
|---|---|
| Archivo | `src/styles/global.css` |
| Selector | `h2 { max-width: 12ch }` + `.about__copy` (columna 646 px @1440) |
| Actual | "Un servicio de archivo digital para colecciones privadas." → **5 líneas** de 116 px = 583 px de alto, frente a una columna de cuerpo de 490 px. A 390 → 4 líneas / 202 px. |
| Sugerido | Mantener `max-width: 12ch` en el resto pero `.about h2 { max-width: min(100%, 18ch) }` → 3 líneas a 1440, más ancho y más dominante con la misma altura de letra. |
| Efecto | Un titular de sección que se parte en 5 líneas deja de leerse como titular y empieza a leerse como párrafo. |

### H-08 · `.scroll-cue` a 11.2 px — **P2**
| Selector | `.scroll-cue { font-size: .7rem }` |
|---|---|
| Sugerido | `.8rem` (12.8 px) mínimo, o alinearlo a `--size-label`. |
| Efecto | Es el texto más pequeño de la página y queda por debajo del piso que el skill marca como ilegible para etiquetas. |

### H-09 · `.capabilities` declara dos columnas y solo tiene un hijo — **P2**
| | |
|---|---|
| Archivo | `src/styles/global.css` |
| Selector | `.about__copy, .capabilities { grid-template-columns: minmax(0,1.3fr) minmax(16rem,.7fr) }` |
| Actual | `.capabilities` contiene solo `.archive-copy` → se dibuja una columna vacía de **490 px** a la derecha y `align-items:end` empuja el texto al fondo. |
| Sugerido | `.capabilities { display:block }` o quitar la clase y dejar `.archive-copy` a `max-width: 52rem; margin-left: auto`. |
| Efecto | Media sección vacía por un grid que no tiene con qué llenarse. |

### H-10 · Reglas finas inconsistentes entre secciones — **P2**
| | |
|---|---|
| Archivo | `src/styles/global.css` |
| Selector | `.method li { border-top: 1px solid var(--border) }` vs `.faq { border-top: 1px solid var(--rule) }` |
| Actual | `--border` = ámbar al 50 % (dorado brillante) en el método; `--rule` = 16 % (filete casi invisible) en la FAQ. Dos grosores visuales opuestos para el mismo recurso editorial. |
| Sugerido | Separar tokens: `--hairline` (rgba(240,238,233,.16) / rgba(17,24,39,.18)) para reglas estructurales (método y FAQ) y `--border-accent` (ámbar .5) solo para tarjetas y botones. Aplicar `--hairline` al método. |
| Efecto | 4 barras doradas hacen que el método parezca una tabla de precios; el filete tenue es el que corresponde al tono clínico del PRD §9.2. |

---

## 4. Hallazgos — Motion de scroll (M)

### M-01 · La salida deja 0.64 pantallas sin contenido — **P0, el defecto más caro**
| | |
|---|---|
| Archivo | `src/scripts/motion.ts` |
| Selector | entrada: `start: 'top 86%'` · salida: `start: 'top 50%'` sobre el mismo `[data-reveal]` |
| Actual | La sección empieza a desvanecerse cuando **su borde superior llega al centro** de la pantalla. La siguiente sección empieza a entrar solo cuando su borde superior llega al 86 %. |
| Medido | Con secciones de `100svh`: salida en `docTop − 0.5V`, entrada de la siguiente en `docTop + H − 0.86V` → **H − 0.36V de recorrido muerto**. A 844 px de alto: **540 px**. A 900: **576 px**. En ese tramo la sección en curso ya está en `opacity: 0` y la siguiente todavía no existe visualmente: **la mitad inferior de la pantalla queda vacía**. |
| Sugerido | Un solo timeline por sección, con `scrub` para que nunca quede "a medio fundir": `gsap.timeline({ scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: .45 } })` → `fromTo(opacity 0, y 32 → opacity 1, y 0)` + hold + `to(opacity 0, y −36)`. Si se mantienen dos triggers: entrada `top 95%` y salida `bottom 55%` (no `top 50%`). |
| Efecto | **Es la causa mecánica del "se siente vacío".** No es el copy: es que durante media pantalla de scroll no hay nada en pantalla. |

### M-02 · Dos tweens pelean por las mismas propiedades — **P1**
| | |
|---|---|
| Archivo | `src/scripts/motion.ts` |
| Selector | `gsap.from(...opacity, y)` + `gsap.to(...opacity, y)` sobre el **mismo** elemento, con ScrollTriggers distintos |
| Actual | Cada tween captura su propio start/end. Al subir y bajar rápido, el `reverse` de uno escribe encima del estado del otro. `immediateRender:false` solo evita el flash inicial, no el conflicto. |
| Sugerido | Un timeline por sección (M-01) o `gsap.quickTo`. Nunca dos tweens sobre `opacity`/`y` del mismo nodo. |
| Efecto | Estados intermedios atascados (sección que queda en 40 % de opacidad) y parpadeo al cambiar de dirección: exactamente lo que hace que el motion "no se sienta". |

### M-03 · El hero se desvanece y se anima dos veces — **P0**
| | |
|---|---|
| Archivo | `src/pages/index.astro` + `src/styles/global.css` |
| Selector | `<section class="hero" data-reveal="hero">` · `h1 span { animation: line-reveal .9s }` |
| Actual | El hero recibe entrada GSAP (`opacity 0`) **y** máscara CSS por línea, en paralelo. Además hereda la salida y desaparece cuando su borde superior pasa el 50 % (≈420 px de scroll): el primer pantallazo tras un scroll mínimo queda vacío. |
| Sugerido | Quitar `data-reveal` del hero y dejar solo el `line-reveal` CSS (que es el bueno). Si se quiere motion ligado al scroll en el hero, usar un `fromTo` con `scrub` sobre `y` del titular, sin opacidad de sección. |
| Efecto | Doble animación al cargar (y el LCP —el h1— empieza en `opacity: 0`), y hero que se va antes de que el usuario haya leído el apoyo. |

### M-04 · `.nth-child(2)` apunta al `<br>`, no a la segunda línea — **P2**
| | |
|---|---|
| Archivo | `src/styles/global.css` |
| Selector | `h1 span:nth-child(2) { animation-delay: .12s }` / `h1 span:nth-child(3) { animation-delay: .24s }` |
| Actual | El markup es `<span><br><span>` → los hijos son 1, 2 (`<br>`) y 3. El delay de 0.12 s cae en el `<br>`; la segunda línea entra a **0.24 s** en lugar de 0.12 s, el doble de lo previsto. |
| Sugerido | `h1 span + span { animation-delay: .12s }` y borrar la regla del `:nth-child(3)`. |
| Efecto | El escalonado del hero se siente lento y "flotante" en vez de seco. |

### M-05 · `scroll-behavior: smooth` pelea con Lenis — **P2**
| | |
|---|---|
| Archivo | `src/styles/global.css` + `src/layouts/BaseLayout.astro` |
| Selector | `html { scroll-behavior: smooth }` · botón top: `window.scrollTo({ behavior: 'smooth' })` |
| Actual | Lenis controla el scroll del documento; el `scroll-behavior` nativo y el `scrollTo` del botón quedan fuera de Lenis, así que `ScrollTrigger` lee posiciones intermedias y las secciones se disparan tarde/antes. |
| Sugerido | `html { scroll-behavior: auto }` y en el botón `lenis.scrollTo(0, { duration: 1.1 })` (exponer la instancia, p. ej. `window.__lenis = lenis`). |
| Efecto | Micro-saltos al usar el botón de subir y desfases de disparo del motion. |

### M-06 · Reduced motion sigue haciendo desaparecer secciones — **P1**
| | |
|---|---|
| Archivo | `src/scripts/motion.ts` |
| Selector | rama `else` (reduced motion): `gsap.to(element, { opacity: 0, start: 'top 50%' })` |
| Actual | Con `prefers-reduced-motion`, el contenido se desvanece al 50 % igual que en el modo normal. El PRD §4 pide "el contenido llega a su estado final legible"; hoy llega y luego se va. |
| Sugerido | En reduced motion: solo entrada por opacidad, **sin salida** (o salida en `bottom 20%`). |
| Efecto | Para quien pide menos movimiento, la página literalmente borra lo que está leyendo. |

---

## 5. Hallazgos — Fondo dinámico (F)

### F-01 · Paneles: los blobs están recortados sección a sección — **P0**
| | |
|---|---|
| Archivo | `src/styles/global.css` |
| Selector | `section:not(.hero):not(.invitation)::before/::after, footer::before/::after { ... animation: blob-drift 32s }` + `section, footer { overflow: hidden }` |
| Actual | Hay **dos sistemas de fondo en paralelo**: 2 blobs por cada sección (7 secciones + footer = 16 blobs, `blob-drift` 32 s) **y** el campo fijo `.ambient-field` con otros 2 blobs (`ambient-drift` 22 s) + 2 anillos. Los blobs de sección se recortan con el `overflow:hidden` de cada `<section>` → su degradado **corta en seco en la frontera** de cada sección. |
| Medido | El blob superior-derecho mide `42vw` (máx. 608 px) con `blur(70px)`; el corte coincide exactamente con el borde de cada sección, que es donde la captura de Armand "se ven divisiones tipo paneles". En tema claro el blob ámbar al 8 % sobre Cloud Dancer **sí** se lee como una franja cálida; en oscuro se disimula. Eso explica "más en tema claro". |
| Sugerido | **Eliminar el bloque completo** `section:not(.hero):not(.invitation)::before/::after, footer::before/::after` y su `@keyframes blob-drift`. Dejar `.ambient-field` como único fondo (ya es `position:fixed`, un solo color continuo detrás de todo). |
| Efecto | Un solo lienzo continuo, sin paneles, sin desincronización entre dos derivas distintas. Es el fix más rentable del informe. |

### F-02 · La deriva ambiental es imperceptible en magnitud — **P1**
| | |
|---|---|
| Archivo | `src/styles/global.css` |
| Selector | `@keyframes ambient-drift { translate3d(-3%,-2%) scale(.92) → translate3d(5%,4%) scale(1.08) }` |
| Actual | Sobre un blob de 42vw (605 px @1440) el recorrido es **18–30 px en 22 s ≈ 2.7 px/s**. La duración ya se corrigió en T-304, pero el desplazamiento no: el resultado se sigue leyendo como estático. |
| Sugerido | `translate3d(-6%,-4%) → translate3d(8%,6%)` (≈ 85 px de recorrido) y `scale(.9) → scale(1.12)`; subir `.ambient-field::before/after` a `opacity: 1`. |
| Efecto | T-292/T-304 ("se sienta vivo en reposo") no se cumple hoy: hay animación pero no se percibe. |

### F-03 · El fondo fijo no responde al scroll — **P2**
| | |
|---|---|
| Archivo | `src/styles/global.css` |
| Selector | `.ambient-field { position: fixed; inset: 0 }` |
| Actual | Al quitar los blobs de sección (F-01), el único fondo queda **anclado al viewport**: al hacer scroll no cambia nada, se lee como un wallpaper. |
| Sugerido | Un `ScrollTrigger` sobre `document.body` que mueva los hijos del campo: `yPercent: -6` de `.ambient-field::before` y `+8` en `::after` (o un `--scroll-shift` en `:root`). Solo `transform`. |
| Efecto | Cumple "vivo en reposo **y** al hacer scroll" (§17 T-292) sin tocar el contenido. |

### F-04 · Los anillos siguen en móvil — **P1 (incumple §10.2)**
| | |
|---|---|
| Archivo | `src/styles/global.css` + `src/layouts/BaseLayout.astro` |
| Selector | `.ambient-field__ring` (JSX: dos `<span>` en `BaseLayout`) |
| Actual | El `@media (max-width:700px)` solo reemplaza `.hero__texture`; **no desactiva los anillos**. A 390 miden `min(60vw,55rem)` = **234 px**, con `opacity: .35` y borde de 1 px, flotando detrás de todo. |
| Sugerido | Dentro del `@media (max-width:700px)`: `.ambient-field__ring { display: none }`. |
| Efecto | Armand pidió explícitamente "sin anillos en móvil" (R3, §10.2) y siguen ahí; son justamente las elipses que le molestaban, ahora de página completa. |

### F-05 · La textura del hero desaparece en claro (escritorio) — **P1**
| | |
|---|---|
| Archivo | `src/styles/global.css` |
| Selector | `.hero__texture { mix-blend-mode: screen }` + `--texture-highlight: rgba(17,24,39,.18)` en `[data-theme=light]` |
| Actual | `screen` sobre fondo claro **aclara** (no oscurece): los anillos oscuros de 1 px al 18 %, con la capa al 18 % de opacidad (alfa neta ≈ 3.2 %), quedan en **~232/240 gris** sobre Cloud Dancer → invisibles. En oscuro los anillos claros sí se leen. |
| Sugerido | `:root[data-theme=light] .hero__texture { mix-blend-mode: multiply; opacity: .5 }` y `--texture-highlight: rgba(62,31,60,.35)`. |
| Efecto | Incumple §9.4 ("variante clara visible y sutil"): en claro el hero de escritorio es un plano de color. |

---

## 6. Hallazgos — Uniformidad del tema (T)

### T-01 · Los botones flotantes no cambian de tema — **P1**
| | |
|---|---|
| Archivo | `src/styles/global.css` |
| Selector | `.floating-action { background: var(--damson); color: var(--amber) }` |
| Actual | Damson y ámbar **literales** en ambos temas. En claro, el botón de tema (`.theme-toggle`, `background: var(--panel)` = #E5E2DC) queda claro y los dos flotantes quedan ciruela oscuro: tres botones en la misma esquina con dos lenguajes. |
| Sugerido | `.floating-action { background: var(--panel); color: var(--accent-text); border-color: var(--border) }` y, en claro, `--panel: #fff` con `box-shadow` suave. |
| Efecto | Rompe la promesa central del interruptor (PRD §1.1: "toda la interfaz de manera uniforme"). |

### T-02 · El botón de tema no tiene superficie en claro — **P2**
| | |
|---|---|
| Selector | `.theme-toggle { background: var(--panel) }` con `--panel: #e5e2dc` |
| Medido | #E5E2DC sobre #F0EEE9 = **1.11:1**. En oscuro #512B4D sobre #3E1F3C = **1.23:1**. |
| Sugerido | En claro: `--panel: #ffffff` (+ borde `rgba(122,77,0,.35)`); en oscuro, `--panel: #4A2846` para separar del fondo. |
| Efecto | El control se apoya solo en el borde de 1 px; se pierde en el fondo. |

### T-03 · El orbe pierde su borde en tema claro — **P2**
| | |
|---|---|
| Archivo | `src/scripts/object-orb.ts` |
| Selector | `getPalette()` rama light: `dark: 'rgba(240,238,233,1)'` |
| Actual | El último stop del degradado radial es **exactamente** `--cloud-dancer`, el color del fondo: el orbe no tiene límite en claro y flota sin volumen. Además suma dos sombras oscuras (`rgba(0,0,0,.34)` en canvas + `drop-shadow(... .22)` en CSS) sobre una página cálida. |
| Sugerido | `dark: 'rgba(62,31,60,.55)'` en claro (filo damson tenue) y bajar la sombra CSS a `.12` en claro; en oscuro dejar como está. |
| Efecto | T-296 pide que el orbe "se vea distinto e invertido" en claro; hoy se ve incompleto. |

### T-04 · El cambio de tema reinicia la fase del orbe — **P3**
| | |
|---|---|
| Archivo | `src/scripts/object-orb.ts` |
| Selector | `new MutationObserver(() => draw(0)).observe(...)` |
| Actual | Al tocar el interruptor se llama `draw(0)` → `phase = 0`: el rayado salta a su posición inicial en vez de repintar en la fase actual. |
| Sugerido | `draw(performance.now())` y quitar el `MutationObserver` (el `requestAnimationFrame` ya relee la paleta en cada frame). |
| Efecto | Un salto visible del ornamento justo cuando el usuario mira el cambio de tema. |

---

## 7. Hallazgos — Enlaces, tarjetas y botones flotantes (L / B)

### L-01 · Dos de las tres tarjetas de contacto se parten en móvil — **P1**
| | |
|---|---|
| Archivo | `src/pages/index.astro` + `src/styles/global.css` |
| Selector | `.contact-links a { text-transform: uppercase; letter-spacing: .14em; font-size: .85rem; gap: 1.5rem; justify-content: space-between }` |
| Medido (390, interior de tarjeta 311 px) | "CORREO — MVGNLABS@PROTON.ME" = **287 px** + `gap` 24 + flecha ≈ 13 = **324 px > 311** → rompe. "MVGN LABS — HTTPS://MVGN.PAGES.DEV" = **358 px** → rompe en 2 líneas ("MVGN LABS —" / "HTTPS://MVGN.PAGES.DEV"). |
| Sugerido | Estructura de dos niveles dentro de la tarjeta: `span--label` (mayúsculas, 11–12 px, tracking) + `span--value` (DM Sans, **sin** `text-transform`, 15–16 px, normal). Ej.: `WhatsApp` / `33 2262 1939`; `MVGN Labs` / `mvgn.pages.dev`. |
| Efecto | En la vista que más importa, una URL en mayúsculas con tracking amplísimo se parte y pierde legibilidad; además las tres tarjetas dejan de tener la misma altura. |

### L-02 · Las tarjetas no siguen el canon de la casa — **P2**
| | |
|---|---|
| Selector | `.contact-links a, .footer a { border: 1px solid var(--border); border-radius: .2rem; background: transparent }` |
| Actual | Radio `.2rem` (el skill fija **0**), sin relleno, sin desenfoque, sin filo superior. El hover invertido **sí** existe y funciona (`background: var(--text); color: var(--bg)`). |
| Sugerido | `border-radius: 0`; `background: color-mix(in oklab, var(--text) 5%, transparent)`; `backdrop-filter: blur(16px)`; `box-shadow: inset 0 1px 0 rgba(255,255,255,.14)`; mantener el hover invertido tal cual y sumarle `transform: none` (ver L-03). |
| Efecto | Hoy la tarjeta es un rectángulo de línea dorada; con el vidrio y el filo gana el "objeto" que el resto de la página ya tiene. |

### L-03 · El hover desplaza la tarjeta entera 5.6 px — **P3**
| | |
|---|---|
| Selector | `.contact-links a:hover { transform: translateX(.35rem) }` |
| Actual | Se mueve el bloque completo; al ser `width:100%` cambia la posición de todos los bordes, lo que se lee como temblor de layout. |
| Sugerido | `transform: none` en la tarjeta; mover solo la flecha (`span:last-child { transform: translate(3px,-3px) }`) con la duración de casa `.15s`/`.25s` (el skill fija `.15` snap / `.3` swap / `.4` move). |
| Efecto | El hover se siente "pegajoso" en vez de inmediato. |

### L-04 · Misma flecha ↗ para WhatsApp, correo y sitio — **P2**
| | |
|---|---|
| Archivo | `src/pages/index.astro` |
| Selector | `<span aria-hidden="true">↗</span>` en las tres tarjetas |
| Actual | Un solo glifo para tres destinos distintos; en WhatsApp y correo **no** es un enlace externo. |
| Sugerido | Marca distinta por destino: WhatsApp (glifo de burbuja/teléfono), correo (@ o sobre), sitio (↗). 14 px, mismo color. |
| Efecto | Las tarjetas se vuelven identificables de un vistazo y el ↗ recupera su significado. |

### B-01 · El botón de WhatsApp se lee como "abrir enlace externo" — **P1**
| | |
|---|---|
| Archivo | `src/layouts/BaseLayout.astro` |
| Selector | `<a class="floating-action floating-action--whatsapp">↗</a>` |
| Actual | Los dos flotantes son flechas: "↑" arriba y "↗" abajo, mismo tamaño, misma forma, mismo color. No se distingue cuál es WhatsApp sin leer el `title`. |
| Sugerido | SVG de WhatsApp (trazo 1.5, mismo tamaño que el icono sol/luna) y flecha arriba en SVG; así el par coincide con el botón de tema, que ya usa SVG. |
| Efecto | El estándar MVGN ("un botón abre WhatsApp") deja de ser reconocible. |

### B-02 · Los dos grupos flotantes no comparten eje — **P2**
| | |
|---|---|
| Selector | `.theme-toggle { top:1.25rem; right:1.25rem; width:2.4rem }` vs `.floating-actions { right:1.25rem }` + `@media(max-width:700px){ .floating-actions { right:.75rem; bottom:.75rem } }` |
| Actual | Escritorio: mismo `right` (20 px) pero diámetros distintos (38.4 vs 42.4 px). Móvil: el toggle se queda en 20 px y los flotantes pasan a 12 px → columnas desalineadas 8 px. |
| Sugerido | Un token `--fab-size: 2.5rem` y `--fab-inset: 1rem` para los tres; en móvil `--fab-inset: .75rem` en el toggle también. |
| Efecto | La esquina derecha se lee descuidada, justo donde el ojo va a buscar los controles. |

### B-03 · Los flotantes tapan la última tarjeta y la nota final en 390 — **P1**
| | |
|---|---|
| Archivo | `src/styles/global.css` |
| Selector | `.floating-actions` (fixed) + `.invitation .fine-print { margin-top: auto }` + `.contact-links` a ancho completo |
| Medido | En 390 el grupo ocupa x **335.6–378 px** y los últimos **104.8 px** de alto del viewport. Las tarjetas miden 350 px de ancho (llegan a x=370) y la nota final va al fondo de la sección → **se solapan**. |
| Sugerido | `@media (max-width:700px) { .invitation, .footer { padding-bottom: 8rem } .contact-links a { padding-right: 3.5rem } }` o mover el grupo a la izquierda en móvil. |
| Efecto | Texto tapado por un botón en la pantalla que más importa. |
| Nota | Verificar en navegador: depende de la altura real de la sección y del `margin-top:auto`. |

### B-04 · El botón "subir" está visible cuando no hace nada — **P3**
| Selector | `.floating-action--top` |
| Actual | Visible en el tope de la página, con `scrollY = 0`. |
| Sugerido | `opacity: 0; pointer-events: none` hasta `scrollY > 400`, transición `.25s`. |
| Efecto | Un control que no responde al primer toque; en móvil es el primer botón que se toca por error. |

---

## 8. Hallazgos — Móvil 390 y rango intermedio (X)

### X-01 · El titular del hero queda a 13 px del borde — **P1**
| | |
|---|---|
| Selector | `h1 { font-size: clamp(4.3rem,12vw,11rem); max-width: 11ch; letter-spacing: -.05em }` |
| Medido | "documentada." = **337 px** en un contenedor de **350 px** (390 − 2×20). "Su colección," = 308 px. |
| Riesgo | Cabe, pero **no hay margen**: si Google Fonts falla y entra Georgia/serif del sistema (más ancha), el `<span>` es `inline-block` y **no puede envolver** → desborde horizontal recortado por `overflow:hidden`. |
| Sugerido | `font-size: clamp(3.9rem, 11.6vw, 11rem)` (66 px @390 → 325 px) o `@media (max-width:700px) { h1 { font-size: clamp(3.7rem, 12.4vw, 4.2rem) } }`. |
| Efecto | En el ancho exacto de iPhone 12/13/14 el titular toca los dos bordes; con la fuente de respaldo se corta. |

### X-02 · La jerarquía se aplana en móvil — **P1**
| | |
|---|---|
| Selector | `--size-hero: clamp(4.3rem,12vw,11rem)` / `--size-title: clamp(3.5rem,9vw,9.5rem)` |
| Medido | A 390: hero 68.8 px vs título 56 px → **1.23×**. A 1440: 1.33×. |
| Sugerido | `--size-title: clamp(2.75rem, 9vw, 9.5rem)` (44 px @390 → ratio 1.56×; 129.6 px @1440, sin cambios en escritorio). El h2 de "¿Qué es?" pasaría de 4 líneas/202 px a 3 líneas/~150 px. |
| Efecto | En el teléfono, el h2 de sección pesa casi lo mismo que el titular de la página: no hay "jefe" visual. |
| Nota | Toca un valor aprobado en T-301; se propone solo el mínimo del `clamp`, no el máximo. |

### X-03 · El grid editorial se rompe entre 700 y 900 px — **P2**
| | |
|---|---|
| Selector | `.about__copy, .capabilities { grid-template-columns: minmax(0,1.3fr) minmax(16rem,.7fr) }` |
| Actual | El colapso a una columna ocurre recién en `max-width:700px`. A 768: columnas de **391 px / 210 px** con gap de 61 px. |
| Sugerido | Mover el colapso a `@media (max-width:900px) { .about__copy, .capabilities { display: block } }`. |
| Efecto | En tablet, el párrafo de cuerpo queda en una columna de 210 px (4–5 palabras por línea) — ilegible. |

### X-04 · El hero móvil distribuye el vacío con `space-between` — **P3**
| | |
|---|---|
| Selector | `.hero { justify-content: space-between }` + `.hero__support { align-self: flex-end; margin-bottom: 4rem }` |
| Actual | Cuatro hijos repartidos en 844 px: etiqueta arriba, titular en medio, apoyo alineado a la derecha, señal abajo. El apoyo es un bloque alineado a la derecha **(texto de 2 líneas, 347 px de 350)** con el toggle de tema encima, a la misma altura que la etiqueta. |
| Sugerido | `align-self: stretch` en móvil (texto a la izquierda, alineado con el titular) y `gap` explícito. |
| Efecto | El bloque de apoyo se ve "pegado" al borde derecho y el toggle se lee como parte de la fila de la etiqueta. |

---

## 9. Hallazgos — Semántica, rendimiento y degradación (S)

| ID | Archivo · Selector | Actual | Sugerido | Efecto |
|---|---|---|---|---|
| S-01 | `src/components/SectionLabel.astro` | La etiqueta es `<p>`; `promise`, `method` y `deliverable` no tienen ningún `<h2>` → el outline del documento es `h1` y luego huecos. | `SectionLabel` con prop `as="h2"` y renderizar la pregunta como encabezado real (manteniendo `.section-label` tipográfico), o añadir el `h2` del cuerpo (H-01). | Lectores de pantalla y SEO no ven las secciones; el "salto" visual coincide con un salto semántico. |
| S-02 | `src/layouts/BaseLayout.astro` | `<div class="floating-actions" aria-label="Acciones rápidas">` — `aria-label` sobre un `div` sin rol. | `<nav aria-label="Acciones rápidas">`. | Anuncio inválido/ignorado. |
| S-03 | `src/styles/global.css` | `@import url('https://fonts.googleapis.com/...')` como primera línea del CSS. | Mover a `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` + `<link rel="stylesheet">` en `BaseLayout`, o self-host de los dos .woff2 (mejor LCP). | El `@import` bloquea el CSS y no permite preconnect: riesgo directo para el LCP ≤2.5 s de §4. |
| S-04 | `src/scripts/motion.ts` | `ScrollTrigger.refresh()` solo en `load`. | `document.fonts.ready.then(() => ScrollTrigger.refresh())` también. | Si la fuente carga después del `load`, los triggers usan alturas viejas y las secciones se disparan desplazadas. |
| S-05 | `src/scripts/object-orb.ts` | `requestAnimationFrame` corre siempre, aunque el canvas esté muy lejos. | `IntersectionObserver` que pause/reanude el loop (y `pageshow` en vez de `pagehide`). | Batería en móvil: el canvas anima durante todo el scroll de la página. |
| S-06 | `src/styles/global.css` | `h1 em, h2 em { font-style: italic }`, `h1 span:nth-child(3)` | Sin `em` en el markup; el `:nth-child(3)` es un parche. | Código muerto que confunde la próxima ronda. | Bajo. |
| S-07 | `src/styles/global.css` | `--panel` solo lo usa `.theme-toggle`; `--rule` solo `.faq`. | Consolidar con `--hairline` / `--surface` (ver H-10 y T-01). | Tokens que no gobiernan nada son los que permiten estas inconsistencias. | Bajo. |

---

## 10. Lo que ya está bien (no tocar)

- **El sistema etiqueta-pregunta** (§13.1) es la mejor decisión de la página: uniforme, en llano, sin numeración. Las 8 etiquetas están presentes y con texto en `dist/` (T-261 cerrado).
- **Paleta y contraste:** blanco sobre damson 12.35:1, tinta sobre Cloud Dancer 15.30:1, ámbar sobre damson 6.88:1, marrón sobre claro 6.27:1, `fine-print` 5.20:1 / 6.10:1, `muted` 8.03:1 / 8.06:1. **Todo pasa AA**, incluido el texto pequeño.
- **Dos familias** (Cormorant + DM Sans), sin mono: §13.2 cumplido.
- **Hover invertido** de las tarjetas: existe, funciona y es la dirección correcta.
- **Inicialización de tema inline en `<head>`**: sin flash de tema incorrecto.
- **Degradación sin JS:** los `[data-reveal]` no están ocultos por CSS, así que sin JavaScript la página se lee completa.
- **El orbe como ornamento** (sin ficha, sin número de registro): §12.2 cumplido; el `canvas` no arrastra datos falsos.

---

## 11. Lista priorizada

### P0 — lo que más afecta la percepción de jerarquía y diseño (hacer primero, en este orden)

1. **M-01 · Salida del motion.** 540–576 px de scroll sin contenido en cada transición. Un timeline con `scrub` por sección; entrada en `top 95 %`, salida en `bottom 55 %`.
2. **H-01 + H-02 · Secciones sin jefe visual.** Añadir `h2` a `promise`, `method` y `deliverable`; bajar los pasos del método a `--size-step` (hoy se desbordan 24–54 px sobre su descripción).
3. **F-01 · Paneles del fondo.** Borrar los blobs por sección recortados por `overflow:hidden`; dejar solo `.ambient-field`. Es literalmente el defecto que Armand ve como "divisiones tipo paneles".
4. **M-03 · Doble animación y salida del hero.** Quitar `data-reveal="hero"`; el hero debe quedarse mientras se lee.
5. **H-06 · `.metamorphosis { min-height: 140svh }`.** 60 % de pantalla vacía en el centro del relato.

### P1 — segundo escalón (se nota de inmediato)

6. **F-04** anillos en móvil (incumple §10.2) · **F-05** textura invisible en claro · **T-01** flotantes fuera del tema · **T-03** borde del orbe en claro.
7. **B-03** flotantes tapando tarjetas en 390 · **B-01** WhatsApp con glifo ↗.
8. **L-01** tarjetas de contacto partidas en 390 · **H-05** 128 px de hueco en `.promise` móvil.
9. **X-01/X-02** titular a 13 px del borde y jerarquía aplanada a 1.23×.
10. **M-06** reduced motion que borra contenido · **M-02** tweens en conflicto.
11. **H-04** 72–96 px entre etiqueta y contenido · **F-02** deriva imperceptible.

### P2 — pulido que suma

12. **L-02** radio 0 + vidrio + filo superior · **L-04** iconos por destino · **B-02** eje único de los flotantes.
13. **H-07** `h2` de 5 líneas · **H-09** columna vacía en `.capabilities` · **H-10** dos tokens de filete.
14. **X-03** colapso a una columna en ≤900 px · **H-08** `scroll-cue` a 12.8 px.
15. **S-01** etiquetas como encabezados · **S-03** carga de fuentes · **S-04** refresh tras `fonts.ready`.
16. **T-02** superficie del toggle en claro.

### P3 — higiene

17. **M-04** delay del hero (0.24 s → 0.12 s) · **M-05** `scroll-behavior` vs Lenis · **T-04** fase del orbe · **B-04** botón top visible en el tope · **X-04** apoyo del hero en móvil · **S-05/S-06/S-07** loop del canvas y código muerto.

---

## 12. Presupuesto de altura de página (referencia para el "vacío")

Suma de `min-height` declarados: `100 + 100 + 80 + 140 + 100 + 100 + 100 + 50 = 770svh`.
A 900 px de viewport ≈ **6 930 px** en escritorio (más desbordes reales de `about` y `method`, ≈ 7 300 px). A 390 el `@media` pone `min-height:auto` y el total baja a ≈ **5 000 px** — el móvil ya está mejor que el escritorio en densidad; el problema móvil es de **huecos internos** (H-05), no de altura de sección.

---

## 13. Qué no pude verificar (requiere navegador)

- Render real a 1440 y 390 en ambos temas (no hay Chrome/Chromium ni Playwright en la máquina). Los números de este informe son métricas de fuente + CSS, no píxeles.
- Solapamiento exacto de los flotantes con la nota final (B-03): calculado, no visto.
- Comportamiento de Lenis con trackpad/táctil y el `scrub` propuesto.
- `backdrop-filter` en Safari iOS si se adopta L-02.
- Lighthouse (no se ejecutó build ni auditoría: la instrucción fue no modificar nada, y `npm run build` reescribe `dist/`).
