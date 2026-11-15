# PRD de requisición v2 — ARS MEMORIA 2, página completa

> **Fecha:** 2026-11-10 · **Proyecto:** `~/Proyectos/ARS MEMORIA 2` (bebop) · **Builder:** Codex (tmux `ars-v2`, sesión SESSION-20261110-1126)
> **Base:** diseño v2 (`DISENO-V2-DESDE-CERO.md`) + decisiones de Armand 2026-11-10 ~13:18 (las 7 de §7, respondidas) + andamiaje T-001 completado 12:36
> **Regla:** nada se despliega. Nada del proyecto viejo (`ARS MEMORIAE`) se toca. El builder construye sobre el andamiaje T-001 (Astro + tokens + motion base + esqueleto de secciones); NO se reconstruye desde cero.

---

## 1. Decisiones de Armand aplicadas (2026-11-10 ~13:18)

1. **Color: damson `#3E1F3C` SÍ — y con tema claro también, como INTERRUPTOR UNIFORME.** El sitio tiene tema oscuro completo y tema claro completo: un interruptor cambia TODA la interfaz de manera uniforme a claro u oscuro. NO son secciones alternadas (una oscura y una clara), NO es un canje por sección. Tema oscuro (damson) por defecto; tema claro (Cloud Dancer `#F0EEE9`) completo al activar el interruptor. **Corrección de Armand 2026-11-10 ~13:24 (sustituye la versión anterior de esta decisión, que decía ritmo oscuro/claro por sección).**
2. **Las tres familias NO van como sección.** Armand no sabía cómo integrarlas y sigue sin saberlo; además, presentarlas como opciones es invasivo con alguien que no lo conoce. Se sustituye por una sección **"Qué es Ars Memoriae"**: qué es, de dónde viene, la iniciativa — en texto plano y directo, aunque suene menos alusivo.
3. **Serif: Cormorant Garamond** (display) + **DM Sans** (cuerpo/micro-etiquetas). Aprobado.
4. **Motion: Lenis + GSAP** (ScrollTrigger). Aprobado. (Ya instalados en el andamiaje.)
5. **Imágenes: texturas macro CC0 + UN SOLO ejemplo de preservación: un huevo.** No catálogo, no prototipos presentados como opciones reales. El huevo es una sola ilustración de lo que es preservar; la página no debe dar a entender que esas son opciones entre las que elegir.
6. **Entregable nombrado: NO.** "Un archivo privado. Una película por pieza. Un libro de legado." le suena demasiado comercial. En su lugar, la identidad se define con **texto plano de capacidades**, como los referentes: The Archival Group (negro, muchísimo texto explicando capacidades como equipo, servicios nombrados en llano, FAQ, solo por referido) y Anderson Archival (proceso paso a paso, estándares como señal de confianza). Sin frases catchy características de IA. Tono como los otros sitios de Armand (SIEMDES, Pietrafina, MVGN Play, portfolio): directo, sin florituras.
7. **Mockup R13: NO se despliega.** Queda guardado como referencia.

**Referencia "T Media Archiver":** no existe un sitio con ese nombre (búsqueda 2026-11-10: "Media Archiver" es una app de escritorio y un software de March Networks, no un servicio de preservación). La descripción de Armand — página negra con muchísimo texto explicando las capacidades del equipo en preservación de media — coincide con **The Archival Group** (https://www.thearchivalgroup.com/, ya investigado: negro/rojo/dorado, referral-only, 6 servicios, FAQ de 14, solo email). Confirmado por Armand 2026-11-10 ~13:24: **The Archival Group ES el modelo de identidad** (Anderson Archival como segundo referente).

**Referencia propia de Armand (de sus audios, hay rastros en el código del proyecto viejo):** pequeños vídeos/animaciones de **trazo lineal (line art)** que se van dibujando mientras el texto desciende haciendo scroll, como representación de la conservación digital o de medios. No se consiguió con éxito entonces; va como **dirección exploratoria** (T-205), no como requisito duro: si no funciona visualmente, se quita sin romper la página.

**Idea defendida (sigue vigente):** "El archivo toma la forma que usted elija" — la adaptabilidad es el lujo. Pero se DEMUESTRA (sección fijada con un solo ejemplo), no se afirma con adjetivos ni se vende con prototipos.

---

## 2. Estructura de la página (una página, español, para una sola persona)

### 2.1 Hero — la tesis, en llano
Fondo damson a sangre, textura macro derivando lento detrás, tipografía serif gigante como imagen. Revelado de líneas con máscara (SplitText). Sin CTA comercial: un solo gesto de scroll. Sin astrolabio, sin instrumento, sin ilustración.
- **Titular (borrador, en llano, sin eslogan):** "Su legado, en la forma que usted elija."
- **Apoyo (borrador):** "Ars Memoriae documenta colecciones privadas: fotografía, cine, voz y catálogo — pieza por pieza, en el formato que usted decida."

### 2.2 La promesa — qué es, en tres líneas
Dos o tres frases, no cuatro párrafos. Qué es Ars Memoriae, para quién (una persona, una colección), y la promesa: un archivo organizado, consultable y expandible, donde la materia, la historia y la voz de quien guarda puedan encontrarse.

### 2.3 Qué es Ars Memoriae — NUEVA (sustituye a las tres familias)
Texto plano y directo, layout editorial (no retícula de funciones):
- Qué es: un servicio de archivo digital para colecciones privadas — curar, digitalizar y organizar.
- De dónde viene: iniciativa de MVGN Labs.
- Qué hace: fotografía, cine por pieza, nota de voz, testimonio, catálogo — el formato depende del cliente y del presupuesto (con presupuesto aceptado se incluye todo: cámaras, producción).
- NO se nombran las familias como catálogo (ni huevos, ni cuadros, ni esculturas como opciones). NO se presenta ningún objeto como opción real. La adaptabilidad se dice en llano ("cada colección, cada formato") y se demuestra en §2.4.

### 2.4 La forma que usted elija — la sección fijada (la tesis en motion)
**Una sola sección fijada con scroll (pinned):** una misma ficha se transforma entre cuatro estados mientras se desplaza: **Fotografía → Vídeo por pieza → Nota de voz / testimonio → Ficha de catálogo**. El mismo ejemplo, cuatro tratamientos, un sistema. Es la única secuencia con scroll-jacking; todo lo demás son revelados simples.
- **El ejemplo es UN SOLO huevo** (textura macro de huevo ornamentado/esmalte/guilloché, CC0 del Met, Rijksmuseum o Cleveland si existe; si no, textura macro de esmalte/dorado y ficha marcada como ilustrativa). La ficha lleva la leyenda visible: **"Pieza ilustrativa — no pertenece a la colección."** Nunca se presenta como pieza del coleccionista ni como opción entre varias.
- Metadatos de la ficha (placa): *Título · Fecha · Técnica · Procedencia · Estado* — con los campos de la pieza ilustrativa, sin inventar procedencia real.

### 2.5 Trazo lineal al hacer scroll — EXPLORATORIO (referencia de Armand)
Pequeños dibujos de línea (line art SVG, `stroke-dashoffset` animado con ScrollTrigger) que se van trazando mientras el texto desciende, como representación de la conservación digital/de medios. Explorar en la sección fijada y/o en el método. Si no se ve bien, se elimina sin romper la página. No bloquear el resto por esto.

### 2.6 El método — cuatro pasos, sin retícula de funciones
Descubrir → Curar → Registrar → Preservar. Una línea por paso, con su frase. Nada de seis tarjetas ni retículas.

### 2.7 Lo que recibe — texto plano de capacidades (REVISADO, sin frase comercial)
Sin triplete nombrado, sin eslóganes. En llano, con el patrón de los referentes (servicios nombrados como capacidades + explicación directa):
- Qué recibe el cliente: un archivo privado, consultable y expandible — piezas curadas, metraje de entrevistas, documentación y metadatos; cada pieza registrada con su procedencia y su estado.
- Cómo se trabaja: cadena de custodia, verificación humana, acceso privado acordado por proyecto; estándares de grado museo como señal, sin prometer seguridad absoluta.
- El texto explica capacidades como equipo (qué sabe hacer, con qué medios, con qué cuidado), no vende un paquete. Si hace falta, una breve FAQ en llano (qué se entrega, cómo se accede, qué pasa con la privacidad), al estilo The Archival Group.

### 2.8 Invitación privada — la única conversión
Cierre en damson, quieto. Sin formulario, sin precios, sin estadísticas. Un solo CTA discreto: **"Solicitar una conversación privada"** (WhatsApp 33 2262 1939). Aviso: la demostración no documenta una colección real; el sitio se muestra, no agenda.

### 2.9 Pie — colofón
Firma MVGN Labs, principios (discreción, consentimiento, claridad documental, alcance por proyecto), leyenda de provisionalidad. Mínimo.

---

## 3. Sistema visual (revisado)

- **Color — dual por interruptor:** dos temas COMPLETOS: oscuro (damson `#3E1F3C`) y claro (Cloud Dancer `#F0EEE9`). Un interruptor claro/oscuro cambia TODA la interfaz de manera uniforme; no hay secciones alternadas. Damson por defecto. **Acento ámbar `#E8A838`** <10% (filetes, micro-etiquetas, bordes de lámina; solo con texto oscuro). Dorado solo como lámina/filo, nunca como fondo plano. Contraste verificado en ambos temas: blanco sobre damson 12,35:1; tinta `#111827` sobre Cloud Dancer 15,3:1.
- **Tipografía:** Cormorant Garamond variable (display, alto contraste) + DM Sans (cuerpo/micro-etiquetas). Jerarquía exagerada: titular gigante contra micro-etiquetas (11–13 px, mayúsculas, tracking amplio). Tipografía cinética en el hero.
- **Imagen:** textura macro extrema como atmósfera (pocas, 4–6: esmalte, guilloché, dorado, craquelure, mármol, trama de lienzo), CC0 del Met, Rijksmuseum y Cleveland, con crédito. **UN SOLO ejemplo de objeto (el huevo de §2.4), marcado como ilustrativo.** Nada de stock falso de la colección. Fotografía real comisionada queda para después, con presupuesto.
- **Composición:** imagen a sangre en el 50–70% del primer viewport; asimetría; ritmo oscuro/claro; una sola sección fijada; el resto, revelados simples.
- **NO se lleva:** fondo hueso/beige, dorado plano, astrolabio, retícula de 12 columnas uniforme, catálogo de objetos de muestra, copy institucional, revelados solo-fade, retículas de funciones, precios, estadísticas, frases catchy.

---

## 4. Motion UI (sistema, no efectos sueltos)

- **Stack:** Lenis + GSAP ScrollTrigger (ya instalados en el andamiaje). Respaldo CSS por scroll (`animation-timeline: view()`) dentro de `@supports`. Sin librerías nuevas. Sin Three.js.
- **Vocabulario (3–4 primitivas reutilizadas):** revelado de líneas con máscara (titulares), revelado por clip-path (imágenes), parallax suave (máx. 15–25%, solo transform/opacity), stagger. Trazo lineal SVG (solo §2.5, exploratorio).
- **Coreografía:** entrada del hero en secuencia; una sola sección fijada (4 escenas, no 15); micro-interacciones con propósito.
- **Rendimiento:** solo transform/opacity; LCP ≤2,5 s, INP ≤200 ms, CLS ≤0,1; Lighthouse ≥95 rendimiento / 100 accesibilidad. `ScrollTrigger.refresh()` tras cargar contenido dinámico.
- **Reduced motion = diseño paralelo:** sin Lenis, sin pins; revelados por scroll pasan a fade de opacidad; el contenido llega a su estado final legible.

---

## 5. Tareas atómicas (T-201…T-210)

Trabajar SOBRE el andamiaje T-001 (estructura, tokens y motion base ya existen en `src/`). No reconstruir desde cero. Cada tarea: implementar, verificar con `npm run build`, dejar constancia en `docs/04_changelog.md` y en `.mvgn/blackboard/logs/execution.log`.

| ID | Tarea | Aceptación |
|----|-------|-----------|
| T-201 | Sistema dual de temas en `global.css` + interruptor: dos temas COMPLETOS (damson / Cloud Dancer) que cambian TODA la interfaz de manera uniforme; interruptor claro/oscuro visible (persistir la elección); damson por defecto; contraste verificado en ambos temas | El interruptor cambia toda la página a claro u oscuro sin dejar secciones del tema contrario; ambos temas pasan contraste AA; el cambio es solo tokens, no duplicar componentes |
| T-202 | Hero (§2.1): titular + apoyo en llano, tipografía cinética con máscara, textura macro de fondo, gesto de scroll | Se lee completo a 390 y 1440; sin CTA comercial; sin astrolabio ni ilustración |
| T-203 | Sección "Qué es Ars Memoriae" (§2.3): texto plano, layout editorial | Dice qué es, de dónde viene y qué hace, sin nombrar familias como catálogo y sin presentar objetos como opciones |
| T-204 | Sección fijada (§2.4): una ficha (huevo) que se transforma Foto → Vídeo → Voz → Ficha; leyenda "Pieza ilustrativa" visible; textura CC0 | La transformación funciona con scroll; la leyenda es visible; la ficha no se presenta como pieza real ni como opción |
| T-205 | Trazo lineal al hacer scroll (§2.5, EXPLORATORIO): SVG con `stroke-dashoffset` + ScrollTrigger | Si se ve bien, queda; si no, se elimina limpio sin romper nada. No bloquear T-206…T-210 por esto |
| T-206 | El método (§2.6): 4 pasos, una línea por paso | Sin retícula de funciones; legible a 390 |
| T-207 | "Lo que recibe" (§2.7): texto plano de capacidades + línea de confianza (custodia, verificación humana, acceso privado) | Sin triplete nombrado, sin eslóganes, sin frases catchy; tono directo como los otros sitios de Armand |
| T-208 | Invitación privada + pie (§2.8–2.9): CTA discreto a WhatsApp, aviso de demo, colofón MVGN Labs | Un solo CTA; sin formulario, sin precios |
| T-209 | Reduced motion + responsive (390 y 1440) + rendimiento | Reduced motion: contenido final legible sin pins; budgets de §4 cumplidos |
| T-210 | Validación final: `npm run build` en verde, revisión propia contra este PRD, reporte de cierre | Build verde; lista de qué quedó y qué falta (si algo), sin deploy |

---

## 6. Guardrails (no negociables)

- **Sin deploy.** Nada a producción. Sin publicar en ningún lado.
- **No tocar el proyecto viejo** (`~/Proyectos/ARS MEMORIAE`). Todo aquí, en `ARS MEMORIA 2`.
- **No inventar contenido:** ni piezas del coleccionista, ni testimonios, ni resultados, ni precios. La única pieza mostrada es ilustrativa y va marcada.
- **No presentar prototipos como opciones.** La página se ajusta al cliente; no ofrece un catálogo entre el que elegir.
- **Sin frases catchy.** Si una frase suena a eslogan de IA, se reescribe en llano.
- **Español. Móvil primero** (la primera vista del cliente es el móvil). WhatsApp como único canal.
- **No prometer seguridad absoluta.** Custodia y verificación se describen como proceso, no como garantía.

---

## 7. Verificación y cierre

1. Codex ejecuta T-201…T-210 sobre el andamiaje y reporta al terminar (qué quedó, build, qué falta si algo).
2. Nyx audita contra este PRD (coherencia con las decisiones de Armand, guardrails, build en verde) y reporta a Armand.
3. Revisión visual de Armand a 1440 y 390.
4. Vigilancia: Nyx vigila la sesión y avisa solo si Codex termina, espera una decisión o se detiene/error.

---

## 8. Fuentes

- Diseño v2: `DISENO-V2-DESDE-CERO.md` (en este proyecto).
- Investigación: `~/workspace/research_notes/ars-memoria-diseno-desde-cero-20261110-1702/report.md`.
- Referentes de identidad (texto plano de capacidades): The Archival Group — https://www.thearchivalgroup.com/ · Anderson Archival — https://andersonarchival.com/about-us/ · EverPresent — https://everpresent.com/family-legacy-projects/.
- Andamiaje T-001: `docs/00_idea.md`, `docs/01_prd.md`, `docs/02_architecture.md`, `docs/03_tasks.md`, `docs/04_changelog.md` (en este proyecto).

---

## 9. Correcciones Ronda 2 (Armand, 2026-11-10 ~13:41 — tras la revisión visual de Nyx)

Armand vio las capturas (1440 y 390, ambos temas) y su veredicto: **está mucho mejor, sí se parece**. La letra y el color están bien (el color se evalúa al final, quizá cambie, pero no está mal). Las correcciones de abajo son ajustes, no un rediseño. **Lo que se mantiene:** damson + Cormorant Garamond + DM Sans, tema dual por interruptor, estructura de secciones, tono llano de capacidades, sin deploy, sin tocar el proyecto viejo.

### 9.1 Lo que Armand detecta como "hecho por IA" — fuera

1. **Las enumeraciones de sección ("00", "01", "02"...) se eliminan.** Son lo primero que delata una página hecha por IA. El componente `SectionLabel` deja de pintar números. Las micro-etiquetas llevan solo el nombre de la sección en versales pequeñas, o se eliminan donde son redundantes con el titular.
2. **Las frases de plantilla de IA, fuera.** "La forma que usted elija", "Lo que recibe", "La promesa" — ese tipo de frase es lo que hace distinguir una página con IA de una sin IA. No se trata de llevarse el crédito; se trata de que la experiencia no sea genérica. **Regla de copy: nada de frases de plantilla ("descubra", "transforme", "la forma que usted elija", "lo que recibe", "la promesa", etc.). El copy dice qué es y qué hace, en llano, sin adjetivos de venta.**
3. **Identidad más concisa.** Reemplazos de copy (borradores; la palabra final es de Armand en la revisión visual):
   - Hero: **"Su colección, documentada."** / Apoyo: "Ars Memoriae registra colecciones privadas pieza por pieza: fotografía, cine, voz y catálogo."
   - Sección ex-"La promesa": sin titular de plantilla; micro-etiqueta solo "Ars Memoriae"; el texto de tres líneas se mantiene.
   - Sección fijada: titular **"Un objeto, cuatro registros."** (la cejilla "Una pieza · cuatro tratamientos" se ajusta a "Una pieza · cuatro registros"). Nota bajo el titular: **"Un solo ejemplo. Cuatro formas de registrarlo."** (sustituye la frase defensiva actual). La leyenda "Pieza ilustrativa — no pertenece a la colección." se mantiene, es obligatoria.
   - Sección ex-"Lo que recibe": titular **"El archivo."** El texto de capacidades se mantiene (es llano y correcto).
   - "El método", "Qué es Ars Memoriae" e "Invitación privada" se mantienen como están (ya son llanos).

### 9.2 Capa clínica/técnica — lo que faltaba aterrizar

Además del ambiente ya definido (damson, serif, textura), Armand quiere incorporar **lo tecnológico, casi clínico, de lo que es un archivo**. No sustituye el ambiente: se suma como sistema.
- **El archivo como instrumento de precisión.** La ficha de objeto es el módulo de identidad: números de registro (formato "AM-001" para la pieza ilustrativa), metadatos, procedencia, técnica, estado. Lenguaje de conservación, no de lujo.
- **Tipografía de datos monoespaciada** para los datos técnicos de la ficha (números de registro, fechas, estados) — una mono (p. ej. IBM Plex Mono o mono del sistema) solo para datos, sin tocar Cormorant/DM Sans del resto.
- **Registro de copy:** verbos de procedimiento (registrar, medir, verificar, conservar, documentar). Cero adjetivos de lujo, cero frases de venta.
- **Precisión visual:** reglas finas, alineación exacta, datos con su etiqueta. Lo clínico se ve en el orden, no en decoración extra.

### 9.3 El objeto: real y tridimensional, nunca un diagrama

- **El huevo SVG se elimina.** Es un diagrama, no un objeto; si no se siente precioso, no se quiere.
- **Fuentes del objeto (aclaración de Armand 2026-11-10 ~13:48: "21st y reactbits.dev"):** **21st.dev y reactbits.dev** — bibliotecas de componentes React animados — además de Rijksmuseum. **Ruta principal: explorar 21st.dev y reactbits.dev y adaptar un componente de objeto fluido y tridimensional (tipo orb / objeto 3D animado) al huevo.** Adaptar la técnica a Astro (isla React con @astrojs/react si hace falta, o portar el efecto Three.js/WebGL directamente). **Alternativa: imagen CC0 real** de huevo ornamentado / esmalte / Fabergé (Met Open Access API o Cleveland Open Access API, sin clave; Rijksmuseum solo si se puede sin clave) — descargar al proyecto (nunca hotlink), con su crédito. Si el componente no aterriza, la foto real es el plan B; si no hay huevo adecuado, reportarlo.
- **Presentación con volumen:** el objeto se presenta grande, con luz suave y escala — que se sienta un objeto real con peso y luz, no una ilustración plana. Parallax leve. Referencia de objeto 3D: **la esfera del inicio de mvgn.pages.dev y de MVGN Play** (objeto con volumen y luz, no plano; no poner una esfera, es la referencia de cómo debe sentirse el objeto).
- **Si no se encuentra un huevo adecuado en las APIs, reportarlo** — no volver al SVG, no inventar, no usar stock genérico.
- La leyenda "Pieza ilustrativa — no pertenece a la colección." se mantiene visible.

### 9.4 Tema claro

- La textura del hero necesita **variante clara visible y sutil** (en claro hoy desaparece; se ve decente, pero hay que corregirla).
- Todas las correcciones de esta ronda aplican **en los dos temas**; verificar ambos.

### 9.5 Tareas atómicas Ronda 2 (T-211…T-216)

Trabajar SOBRE la página completa ya construida (T-201…T-210). Cada tarea: implementar, verificar con `npm run build`, dejar constancia en `docs/04_changelog.md` y en `.mvgn/blackboard/logs/execution.log`.

| ID | Tarea | Aceptación |
|----|-------|-----------|
| T-211 | Eliminar las enumeraciones de sección en toda la página (SectionLabel sin números; micro-etiquetas solo con nombre o eliminadas) | Ninguna sección muestra "00", "01", etc.; la navegación no pierde orientación |
| T-212 | Reescritura de copy según §9.1 (hero, fijada, "El archivo", sin titulares de plantilla) | No queda ninguna frase de plantilla de IA; el copy dice qué es y qué hace, en llano |
| T-213 | Capa clínica/técnica según §9.2 (ficha como identidad, números de registro, mono para datos, registro de procedimiento) | La ficha se lee como instrumento de precisión; el ambiente (damson/serif) se mantiene |
| T-214 | Objeto real según §9.3: explorar componentes 3D fluidos en 21st.dev y reactbits.dev y adaptar uno al huevo; alternativa: imagen CC0 real (Met/Cleveland/Rijksmuseum); sustituir el SVG, presentación con volumen | El objeto se siente real, fluido y con volumen; crédito presente si es foto; leyenda ilustrativa visible; si ninguna ruta aterriza, reportarlo sin volver al SVG |
| T-215 | Tema claro según §9.4: variante de textura visible y sutil; mismas correcciones en ambos temas | Ambos temas verificados visualmente (build); la textura se ve en claro sin romper el contraste |
| T-216 | Validación final: `npm run build` en verde, revisión propia contra este PRD + §9, reporte de cierre | Build verde; lista de qué quedó y qué falta (si algo), sin deploy |

### 9.6 Guardrails Ronda 2 (se suman a §6)

- Sin enumeraciones, sin frases de plantilla, sin SVG como objeto, sin stock genérico, sin inventar procedencia real de la pieza ilustrativa.
- La palabra final sobre el copy y el color es de Armand en la revisión visual; el color se evalúa al final y quizá cambie.

---

## 10. Correcciones Ronda 3 (Armand, 2026-11-10 ~14:03 — tras la revisión visual R2 de Nyx)

Veredicto de Armand: **"Me gusta... lo demás está perfecto."** Un solo problema, solo en una vista.

### 10.1 Decisiones cerradas en R2 (no se tocan)

- **El orbe se acepta como está** (esfera con volumen y luz). No se cambia a forma de huevo ni se va por foto de museo.
- **La textura del tema claro se queda como está** ("lo demás está perfecto"). No se toca en esta ronda.

### 10.2 El único problema: el fondo del hero en móvil

- **El fondo circular / las elipses (anillos concéntricos) del hero NO funcionan en la vista móvil (390).** En escritorio se ven bien; en móvil dominan la composición y no funcionan. Hay que buscar otra cosa **solo para esa vista**.
- **El fondo dinámico está bien** (Armand no sabe si es estático o dinámico; cualquiera de las dos vale). Lo que no funciona son las elipses en móvil, no el hecho de que sea dinámico.
- **Reemplazo propuesto (borrador):** en móvil (≤700 px), el hero lleva **brillo radial suave + grano fino, sin anillos**: el resplandor ámbar cálido que ya existe en el hero oscuro (centro-derecha) como fondo principal, con un grano muy fino encima; en tema claro, el mismo brillo en versión cálida suave sobre Cloud Dancer. Puede derivar lento (dinámico) o ser estático — cualquiera vale. **El hero de escritorio no se toca.**
- El resto de la página no se toca.

### 10.3 Tareas atómicas Ronda 3 (T-221…T-222)

| ID | Tarea | Aceptación |
|----|-------|-----------|
| T-221 | Fondo del hero en móvil según §10.2: sin elipses/anillos en ≤700 px; brillo radial suave + grano fino (ambos temas); escritorio intacto | En 390 el hero se ve limpio y el titular manda; en 1440 el hero sigue igual que en R2; ambos temas correctos |
| T-222 | Validación final: `npm run build` en verde, revisión propia contra este PRD + §9 + §10, reporte de cierre | Build verde; lista de qué quedó y qué falta (si algo), sin deploy |

---

## 11. Correcciones Ronda 4 (Armand, 2026-11-10 ~14:17)

Veredicto de Armand: la página es linda. Un solo ajuste.

### 11.1 El botón de tema: sol/luna clásico

- **El botón de tema claro/oscuro pasa a ser un botón sol/luna clásico.** Hoy es una píldora con punto y texto ("TEMA CLARO" / "TEMA OSCURO"); se sustituye por el patrón clásico: **botón circular, solo icono, con sol y luna en SVG**.
- **Convención:** el icono muestra el tema al que se cambia (en oscuro se ve el sol, para pasar a claro; en claro se ve la luna, para pasar a oscuro) — igual que la lógica actual de la etiqueta, solo cambia la forma.
- Se mantiene: misma posición (arriba derecha, fijo), persistencia en localStorage, `aria-label` ("Cambiar a tema claro" / "Cambiar a tema oscuro") y `aria-pressed`. Sin texto visible. Estilo sobrio, acorde a la página (borde fino, sin colores estridentes).
- El resto de la página no se toca.

### 11.2 Tareas atómicas Ronda 4 (T-231…T-232)

| ID | Tarea | Aceptación |
|----|-------|-----------|
| T-231 | Botón de tema sol/luna clásico según §11.1 (SVG sol + luna, circular, sin texto visible, misma posición y persistencia) | En oscuro se ve el sol y en claro la luna; el interruptor cambia toda la interfaz igual que antes; accesibilidad intacta |
| T-232 | Validación final: `npm run build` en verde, revisión propia contra este PRD + §9 + §10 + §11, reporte de cierre | Build verde; lista de qué quedó y qué falta (si algo), sin deploy |

---

## 12. Correcciones Ronda 5 (Armand, 2026-11-10 ~14:42 — revisión en vivo en móvil)

Veredicto de Armand tras verla en el teléfono: el inicio está muy bien, el minimalismo del hero se siente y le gusta. Pero al hacer scroll, la página se siente cada vez más vacía; el objeto no debe ser un objeto de muestra; la ficha es horrible; y en el objeto ya no se puede seguir haciendo scroll hacia abajo. **Todo esto es en móvil (390), que es la vista que más importa** (ahí es donde más probablemente la verán; también le sirve para su portafolio).

### 12.1 Corroborado por Nyx antes de pasar a Codex

- **La ficha es un marcador de posición:** REGISTRO AM-001, TÍTULO "Huevo ornamentado", FECHA "No especificada", TÉCNICA "Esmalte y metal", PROCEDENCIA "No especificada". Se lee como catálogo sin terminar y como prototipo — Armand tiene razón: es horrible y hay que quitarla.
- **El scroll no está bloqueado del todo, pero se siente atascado:** prueba de scroll táctil en 390 llega al final (7455 px), pero la sección del objeto (`section.metamorphosis`, `data-pinned`) está fijada con `end: '+=1800'` en `motion.ts` — **1800 px de scroll (más de dos pantallas de móvil) donde el orbe queda fijo y casi nada cambia**. Por eso se siente que no se avanza y que está vacío.
- **El encuadre de pieza de muestra está en el copy:** "Un objeto, cuatro registros.", "Un solo ejemplo. Cuatro formas de registrarlo.", "Pieza ilustrativa — no pertenece a la colección." Todo eso sale.

### 12.2 Las correcciones

- **El objeto pasa a ser un ornamento, no una muestra.** El orbe queda como elemento decorativo de la sección, sin presentar ninguna pieza, sin ficha, sin "ejemplo", sin "prototipo". No se le pone nombre de pieza, ni número de registro, ni campos de catálogo.
- **La sección contesta preguntas concretas de Ars Memoriae** (como lo hacía bien el inicio): qué se registra y cómo — fotografía, cine, voz y catálogo — como capacidades del servicio, no como ficha de una pieza. Las cuatro formas de registrar pueden quedarse como descripción de lo que hace Ars Memoriae, sin atarlas a ningún objeto.
- **El scroll en móvil debe fluir con contenido nuevo en cada pantalla.** En ≤700 px la sección del objeto NO se fija (fluye como contenido normal; el orbe puede tener animación ligera, sin pin). El minimalismo del hero se mantiene; el resto no debe sentirse vacío: recortar el espacio muerto entre secciones en móvil y que cada pantalla de scroll aporte algo concreto.
- El resto de la página no se toca (hero, "Qué es", método, "El archivo", invitación, colofón, botón sol/luna, temas).

### 12.3 Tareas atómicas Ronda 5 (T-241…T-244)

| ID | Tarea | Aceptación |
|----|-------|-----------|
| T-241 | Scroll móvil: en ≤700 px la sección del objeto no se fija (sin pin; flujo normal); el orbe queda como ornamento con animación ligera sin fijar | En 390 el scroll avanza de arriba a abajo con contenido nuevo en cada pantalla; ningún tramo de más de una pantalla sin cambio visible |
| T-242 | Quitar la ficha AM-001 completa y todo el encuadre de pieza de muestra ("Un objeto, cuatro registros", "Un solo ejemplo", "Pieza ilustrativa", "Huevo ornamentado"); reescribir la sección para contestar qué se registra y cómo (fotografía, cine, voz, catálogo) como capacidades, con el orbe solo como ornamento | No queda ningún número de registro, nombre de pieza ni campo de catálogo en toda la página; la sección responde preguntas concretas |
| T-243 | Densidad del scroll en móvil: recortar el espacio vacío entre secciones en ≤700 px; cada pantalla de scroll aporta contenido concreto | En 390 no hay tramos vacíos; el hero mantiene su minimalismo; el resto se siente lleno |
| T-244 | Validación final: `npm run build` en verde, revisión propia contra este PRD + §9 + §10 + §11 + §12, prueba de scroll táctil completa en 390, reporte de cierre | Build verde; scroll 390 de arriba a abajo sin atascos ni tramos muertos; lista de qué quedó y qué falta (si algo), sin deploy |

---

## 13. Correcciones Ronda 6 (Armand, 2026-11-10 ~15:10 — APROBADA por Armand, propuesta presentada antes a él según su regla)

Dirección de Armand: "El archivo" sigue siendo un rótulo genérico de IA. Uniformidad en todas las secciones: **cada sección contesta una pregunta**. Tipografía estandarizada (verificado: 3 familias — Cormorant Garamond, DM Sans, IBM Plex Mono — con 8 tamaños y 6 trackings; se comporta como si fueran más). Revisar tamaños y jerarquías en móvil. Fondo con sensación de movimiento tipo blobs difuminados (aprobado por Armand tras la opinión de Nyx: sí, sutil).

### 13.1 Secciones uniformes: cada una contesta una pregunta

Se acaban los rótulos sueltos ("Capacidades", "Cómo:", "El archivo.", "Preguntas frecuentes" como título de sección). Cada sección de contenido lleva **una etiqueta-pregunta con el mismo estilo en todas**, y el cuerpo responde esa pregunta. Mapeo exacto:

| Sección actual | Etiqueta-pregunta nueva |
|---|---|
| Un servicio de archivo digital… (Qué es) | **¿Qué es Ars Memoriae?** |
| Capacidades (fotografía, cine, voz y catálogo) | **¿Qué se registra?** |
| Cómo: descubrir, curar, registrar y preservar | **¿Cómo se hace?** |
| El archivo. | **¿Cómo queda el archivo?** |

- El hero se queda como está (es la afirmación, no una pregunta). La invitación ("Solicite una conversación privada.") se queda como CTA. Las preguntas frecuentes siguen siendo preguntas (su formato ya es Q&A).
- **Copy de "¿Cómo queda el archivo?" (texto exacto aprobado por Armand, sin cadena de custodia):** "El archivo se arma a la medida de quien lo guarda. Usted decide el tono de la preservación: qué se registra, en qué formato y cómo quedaría guardada su colección. No hay un formato único ni una regla fija: cada colección se preserva como su dueño la imaginaría inmortalizada. El sistema de preservación se ofrece en base a sus necesidades y a su visión. El archivo queda en privado y crece cuando usted lo decida."
- **Retoque del "¿Cómo se hace?" (intro):** "descubrir, curar, registrar y preservar. El orden y el peso de cada paso se acuerdan con usted, por proyecto." Los cuatro pasos (Descubrir / Curar / Registrar / Preservar) se quedan.

### 13.2 Tipografía estandarizada: dos fuentes y nada más

- **Cormorant Garamond solo para titulares; DM Sans para todo lo demás. La mono (IBM Plex Mono) fuera** — las etiquetas pequeñas pasan a DM Sans en mayúsculas con un solo tracking.
- **Una sola escala de tamaños** para toda la página, la misma en escritorio y móvil; **un solo estilo de etiqueta** (sans, mayúsculas, un tracking, un tamaño) en todas las secciones.
- Sin nuevas familias, sin pesos ni trackings fuera de la escala.

### 13.3 Tamaños y jerarquías en móvil

- Revisar **cada elemento en 390** contra la escala única y corregir el que no tenga el tamaño que le toca (titulares, cuerpos, etiquetas, espacios entre secciones). La jerarquía debe leerse igual en móvil que en escritorio.

### 13.4 Fondo con blobs difuminados

- **Manchas ámbar y damson, muy difuminadas, derivando lentísimo detrás del contenido**, casi imperceptibles. Sensación de movimiento sin romper el minimalismo. En ambos temas. Con `prefers-reduced-motion`, quietas (estáticas).

### 13.5 Tareas atómicas Ronda 6 (T-251…T-255)

| ID | Tarea | Aceptación |
|----|-------|-----------|
| T-251 | Secciones Q&A uniformes según §13.1 (etiquetas-pregunta, mismo estilo en todas; copy exacto de "¿Cómo queda el archivo?" y retoque de "¿Cómo se hace?") | Cada sección de contenido responde una pregunta con la misma etiqueta; no quedan rótulos sueltos ("Capacidades", "Cómo:", "El archivo."); el copy de "¿Cómo queda el archivo?" es el texto exacto aprobado, sin cadena de custodia |
| T-252 | Tipografía: 2 fuentes (Cormorant Garamond titulares, DM Sans resto), mono fuera, una escala de tamaños, un estilo de etiqueta | Solo 2 familias en el CSS; ningún uso de mono; tamaños y trackings dentro de la escala única |
| T-253 | Jerarquía y tamaños en móvil (390): revisar cada elemento contra la escala y corregir | En 390 cada elemento tiene el tamaño que le toca; la jerarquía se lee igual que en escritorio |
| T-254 | Fondo con blobs difuminados según §13.4 (sutil, lento, ambos temas, reduced motion estático) | Movimiento apenas perceptible, detrás del contenido, sin competir con el texto; quieto con reduced motion |
| T-255 | Validación final: `npm run build` en verde, revisión propia contra este PRD + §9 + §10 + §11 + §12 + §13, prueba de scroll táctil completa en 390, reporte de cierre | Build verde; scroll 390 de arriba a abajo sin atascos; lista de qué quedó y qué falta (si algo), sin deploy |

---

## 14. Corrección R6-fix (Nyx, 2026-11-10 ~15:23 — defecto de render, no cambio de diseño)

**Hallazgo de la revisión visual R6:** las etiquetas-pregunta están en el código fuente (`index.astro`: "¿Para quién es?", "¿Qué es Ars Memoriae?", "¿Qué se registra?", "¿Cómo se hace?", "¿Cómo queda el archivo?"), pero **en el build salen vacías**: `<p class="section-label"></p>` (8 veces). Causa raíz (el mismo defecto de la revisión visual #1): `src/components/SectionLabel.astro` hace `const { children } = Astro.props;` y renderiza `{children}` — en Astro los hijos NO llegan por `Astro.props`, llegan por `<slot />`. La corrección es de una línea: renderizar el slot. Es completar la R6 aprobada, no un cambio nuevo.

| ID | Tarea | Aceptación |
|----|-------|-----------|
| T-261 | `SectionLabel.astro`: quitar el `const { children } = Astro.props;` y renderizar `<p class="section-label"><slot /></p>`; rebuild | Las 7 etiquetas-pregunta aparecen con texto en `dist/index.html` (¿Para quién es?, ¿Qué es Ars Memoriae?, ¿Qué se registra?, ¿Cómo se hace?, ¿Cómo queda el archivo?, Ars Memoriae, Invitación privada) |
| T-262 | Validación final: `npm run build` en verde, revisión propia contra este PRD + §13 + §14, reporte de cierre | Build verde; etiquetas visibles; lista de qué quedó y qué falta (si algo), sin deploy |

---

## 15. Correcciones Ronda 7 (Armand, 2026-11-10 ~15:52 — APROBADA por Armand, propuesta presentada antes a él según su regla)

Dirección de Armand: la CTA "Solicite una conversación privada", aunque elegante, no es subjetiva/personal. Como en el primer sitio, el cierre debe trascender con un enlace real a MVGN Labs (su página) y manejarse con los canales de contacto como se aprecian en su página de MVGN Labs. Lo demás ya le gusta.

### 15.1 Cierre nuevo: contacto con enlaces reales

Se sustituye la invitación actual (etiqueta "Invitación privada", titular "Solicite una conversación privada.", botón "Solicitar una conversación privada ↗") por:

- Etiqueta: **Contacto**
- Titular: **Hablemos de su colección.**
- Tres enlaces reales (mismo estilo de enlace en los tres, sin botón único):
  - **WhatsApp — 33 2262 1939** → https://wa.me/523322621939
  - **Correo — mvgnlabs@proton.me** → mailto:mvgnlabs@proton.me
  - **MVGN Labs — https://mvgn.pages.dev** → https://mvgn.pages.dev
- Se mantiene el aviso: "La demostración no documenta una colección real; el sitio se muestra, no agenda."
- El "MVGN Labs" del colofón pasa a ser **enlace real a https://mvgn.pages.dev** (como en el primer sitio).
- El resto de la página no se toca.

### 15.2 Tareas atómicas Ronda 7 (T-271…T-272)

| ID | Tarea | Aceptación |
|----|-------|-----------|
| T-271 | Cierre nuevo según §15.1 (etiqueta Contacto, titular "Hablemos de su colección.", tres enlaces reales, aviso intacto, MVGN Labs del colofón como enlace real) | Los tres enlaces son reales y llevan a su destino (wa.me/523322621939, mailto:mvgnlabs@proton.me, https://mvgn.pages.dev); no queda el botón "Solicitar una conversación privada" |
| T-272 | Validación final: `npm run build` en verde, revisión propia contra este PRD + §13 + §14 + §15, reporte de cierre | Build verde; enlaces verificados; lista de qué quedó y qué falta (si algo), sin deploy |

---

## §16 — Ronda 8: Favicon (A serif) — T-281…T-282 — 2026-11-10 ~17:00

**Decisión de Armand:** favicon = variante **"A serif"** (A en Cormorant Garamond ámbar #E8A838 sobre damson #3E1F3C, cuadrado redondeado). La variante "Orbe ámbar" queda descartada.

**Archivos listos** (en el host de Nyx, a copiar a bebop al volver a Linux): `files/favicon/favicon.svg`, `favicon-512.png`, `favicon-192.png`, `apple-touch-icon.png` (180), `favicon-32.png`, `favicon-16.png`.

- **T-281:** Copiar los archivos del favicon a `public/` del proyecto (`favicon.svg`, `favicon-512.png`, `favicon-192.png`, `apple-touch-icon.png`, `favicon-32.png`, `favicon-16.png`). Sin tocar nada más.
- **T-282:** En `BaseLayout.astro` (head), agregar:
  - `<link rel="icon" type="image/svg+xml" href="/favicon.svg">`
  - `<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">`
  - `<link rel="apple-touch-icon" href="/apple-touch-icon.png">`
  Sin cambiar copy, colores ni layout.
- **Validación:** build verde; el favicon aparece en la pestaña del build servido; sin deploy.

---

## §17 — Ronda 9: Fondo uniforme y dinámico + jerarquía + motion de scroll + enlaces tarjeta + botones flotantes — T-291…T-299 — 2026-11-11 ~08:50

**Contexto:** revisión en vivo de Armand sobre el build R7 (móvil y escritorio). Puntos: el fondo muestra divisiones tipo paneles (más en tema claro); falta dinamismo de fondo y de motion; los títulos de capacidades son en extremo pequeños y hay mucho espacio vacío; el hero se queda pero un poco más bold; el colofón y la etiqueta MVGN Labs necesitan más visión; los hipervínculos no gustan como texto de color — deben ser tarjetas hover con negativo según el tema; el orbe debe invertir colores con el tema; faltan botones flotantes (top + WhatsApp), estándar en las páginas de MVGN; la navegación debe sentirse intuitiva sin header, con fondo unificado. Mucho es experimental; estamos muy cerca de terminar.

| ID | Tarea | Aceptación |
|----|-------|-----------|
| T-291 | Fondo uniforme: eliminar las líneas divisorias visibles entre secciones en ambos temas (claro y oscuro). El fondo debe leerse como un solo color continuo en toda la página, sin paneles ni franjas. Los blobs difuminados se quedan, pero no deben generar bordes entre secciones. | En 1440 y 390, en ambos temas, no se distingue dónde termina una sección y empieza otra por el color de fondo; no hay líneas ni paneles. |
| T-292 | Fondo dinámico: agregar movimiento real al fondo (deriva lenta de los blobs + un elemento dinámico sutil), con tecnología del tipo ReactBits / 21st.dev (componentes animados). Debe sentirse vivo en reposo y al hacer scroll, sin distraer del contenido. Reduced motion = quieto. | El fondo se mueve (deriva lenta visible); en reduced motion no se mueve; el contenido sigue legible en ambos temas. |
| T-293 | Jerarquía tipográfica: subir los tamaños de los títulos de sección y de los ítems de capacidades (Fotografía, Cine por pieza, Nota de voz, Ficha de catálogo — hoy en extremo pequeños). Reducir el espacio vacío que se siente entre secciones. El titular del hero ("Su colección, documentada.") se queda, un poco más bold, misma fuente (Cormorant Garamond). | Los títulos de capacidades se leen con claridad en 390 y 1440; menos vacío entre secciones; hero intacto, solo más bold. |
| T-294 | Motion de scroll: al deslizar, las secciones entran y salen con transiciones visibles (revelado al entrar en viewport; que se sienta que las secciones se agregan y se retiran). GSAP ScrollTrigger + Lenis (stack ya en el proyecto). Una sola idea de motion, aplicada igual a todas las secciones. Reduced motion = fade de opacidad sin desplazamiento. | Al hacer scroll en 390 y 1440 cada sección aparece/desaparece con transición visible; sin tramos muertos ni atascos; reduced motion sin desplazamiento. |
| T-295 | Enlaces como tarjetas hover: los enlaces de Contacto y del colofón dejan de ser texto de color y pasan a ser tarjetas con efecto hover que invierte (negativo) según el tema — en oscuro la tarjeta se aclara, en claro se oscurece — dando la sensación de moverse hacia el destino (MVGN Labs, correo, WhatsApp). Esto sustituye la pregunta del colofón ámbar/azul: el enlace azul del colofón desaparece, ya no es texto de color. | Ningún enlace es texto de color plano; todos tienen hover con negativo según el tema; los tres destinos siguen funcionando. |
| T-296 | Orbe que responde al tema: el orbe ornamental invierte sus colores al cambiar de tema (claro/oscuro). Si hay algo más que se le pueda meter (variación sutil), sumarlo sin recargar. | El orbe se ve distinto en tema claro y en tema oscuro (colores invertidos); sigue siendo ornamento, no muestra. |
| T-297 | Botones flotantes (extrema derecha): dos botones fijos — (a) subir al top de la página, (b) ir directo a WhatsApp (https://wa.me/523322621939). Discretos, acordes al diseño (damson/ámbar), visibles en ambos temas. Estándar en las páginas de MVGN. | Ambos botones visibles en 1440 y 390, en ambos temas; top lleva arriba; WhatsApp abre wa.me/523322621939. |
| T-298 | Navegación intuitiva sin header: sin agregar un header, que las secciones se sientan al navegar (el usuario percibe dónde está y qué sección viene), con el fondo unificado (apoyado en T-294). | Al recorrer la página se perciben las secciones (transiciones de scroll) sin header y sin romper la uniformidad del fondo. |
| T-299 | Validación final: `npm run build` en verde, revisión propia contra este PRD + §13 + §14 + §15 + §16 + §17, reporte de cierre. | Build verde; sin deploy. |

## §18 — Ronda 10: Jerarquía de títulos de sección + motion de scroll visible + colofón — T-301…T-305 — 2026-11-11 ~09:15

**Contexto:** revisión de Armand sobre el build R9. Nyx verificó con diff + capturas propias que R9 sí se implementó (títulos de capacidades en serif grande, tarjetas de contacto con hover invertido, colofón sin azul, botones flotantes, favicon). Armand aclara: las categorías (Fotografía, Cine por pieza, Nota de voz, Ficha de catálogo) eran solo ejemplo; donde realmente necesita el cambio de jerarquía es en los **títulos de cambio de sección** (h2 + etiquetas). Y el motion de scroll existe (GSAP ScrollTrigger `toggleActions: 'play reverse play reverse'` en `src/scripts/motion.ts`) pero no se percibe: la salida dispara demasiado tarde (`end: 'bottom 14%'` — la sección tiene que estar casi fuera para empezar a desaparecer) y es muy suave (0.8 s, y 28 px). Esta ronda es el ajuste, no un rediseño: se ejecuta y se ve qué produce.

| ID | Tarea | Aceptación |
|----|-------|-----------|
| T-301 | Jerarquía — títulos de cambio de sección: subir `--size-title` de `clamp(2.75rem, 7vw, 7rem)` a `clamp(3.5rem, 9vw, 9.5rem)`, acercándolo a la escala del hero (`--size-hero` 11rem) sin igualarlo. Subir las etiquetas de sección (`.section-label`, hoy `--size-label` .68rem) a .85rem para que el cambio de sección se lea. Verificar que no se rompa el layout en 390 ni en 1440, en ambos temas. | Los h2 se leen claramente más grandes y dominantes en 390 y 1440; las etiquetas de sección se distinguen; no hay desbordes ni solapamientos. |
| T-302 | Motion de scroll — salida visible y temprana: la sección debe empezar a desaparecer (fade + desplazamiento) en cuanto empieza a salir del viewport, no cuando ya está casi fuera. Ajustar el ScrollTrigger de salida (por ejemplo, que la salida empiece cuando la parte superior de la sección pasa el centro del viewport) y hacer la transición más marcada (mayor desplazamiento, p. ej. y: -48, y opacidad hasta 0) para que al deslizar arriba y abajo se sienta que cada sección se va y la siguiente entra — fundido entre secciones. Mantener la entrada igual de suave. Reduced motion = fade de opacidad sin desplazamiento. | Al hacer scroll en 390 y 1440 se percibe claramente que cada sección aparece y desaparece; no hay tramos donde la sección se quede quieta mientras se recorre; sin atascos; reduced motion sin desplazamiento. |
| T-303 | Colofón — corregir el selector del enlace "MVGN Labs": hoy queda en small caps porque `.footer > p:first-of-type a` no aplica (SectionLabel es el primer `<p>` del footer). Apuntar al `<p>` correcto (agregar clase si hace falta) para que el enlace quede en serif grande (`clamp(1.8rem, 4vw, 3rem)`) dentro de su tarjeta, como se intentó en R9. | El enlace "MVGN Labs" del colofón se ve en serif grande dentro de su tarjeta, en ambos temas; el resto del colofón intacto. |
| T-304 | Fondo dinámico más perceptible (ajuste de R9): la deriva ambiental quedó tan lenta (38–62 s) que en un vistazo se sigue viendo estático. Acelerar `ambient-drift` a ~22 s y `ambient-orbit` a ~30 s, y subir ligeramente la opacidad de los blobs, sin distraer del contenido. Reduced motion = quieto. | El fondo se percibe vivo en reposo y al hacer scroll; en reduced motion no se mueve; el contenido sigue legible en ambos temas. |
| T-305 | Validación final: `npm run build` en verde, revisión propia contra este PRD + §13 + §14 + §15 + §16 + §17 + §18, reporte de cierre. | Build verde; sin deploy. |

---

## §19 — Ronda 11: Correcciones P0 + P1 de la doble auditoría de diseño — T-311…T-326 — 2026-11-11 ~11:05

**Contexto:** Armand no quedó satisfecho con R10 y pidió una auditoría de diseño y jerarquía de la página completa. Se corrieron DOS auditorías con el mismo prompt en Freebuff (DeepSeek V4.1 Flash Slow): una CON la skill mvgn-frontend (`AUDITORIA-DISENO.md`) y otra SIN ella (`AUDITORIA-DISENO-SIN-SKILL.md`), para comparar. **Las dos convergen en el diagnóstico**: el P0 es el mismo en ambas, con los mismos números medidos (motion de salida deja 0.64 pantallas vacías; 3 de 6 secciones sin elemento dominante; fondo partido en paneles por blobs recortados). La skill no cambió el diagnóstico; su valor está en el lente de casa (vidrio/radio 0, outline semántico, LCP, orbe en claro). La auditoría sin skill fue más exhaustiva midiendo y trae criterios de aceptación. Armand aprobó aplicar P0 + P1. Esta ronda implementa la lista fusionada. **Corrección al §3 (detectada por la auditoría sin skill):** el contraste real de blanco sobre damson es 12,35:1, no 14,32:1 (sigue pasando AAA); el de tinta sobre Cloud Dancer sí es 15,3:1.

| ID | Tarea | Aceptación |
|----|-------|-----------|
| T-311 | Motion — un solo timeline con scrub por sección (M-01+M-02): reescribir `src/scripts/motion.ts` para que cada `[data-reveal]` tenga UN timeline GSAP con `scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 0.45 }`: `fromTo(opacity 0, y 32 → opacity 1, y 0)` + hold + `to(opacity 0, y -36)`. Nunca dos tweens sobre `opacity`/`y` del mismo nodo. Si se mantienen dos triggers: entrada `top 95%`, salida `bottom 55%` (no `top 50%`), con `scrub` en la salida. | En 1440 y 390, al detenerse en cualquier punto del scroll ninguna sección queda en `opacity: 0` con la siguiente fuera de pantalla; no hay tramos de más de 0.2V sin contenido; no hay secciones atascadas a medio fundir al invertir la dirección. |
| T-312 | Jerarquía — h2 en las tres secciones sin jefe visual (H-01+H-02): añadir `h2` a `section.promise` ("Una colección a la vez."), `section.method` ("Cuatro pasos.") y `section.deliverable` ("El archivo queda en privado." — copy sujeto a revisión de Armand; alternativa de la segunda auditoría: "Un archivo privado."). Nueva variable `--size-step: clamp(1.9rem, 3.2vw, 3.2rem)` (30.4 px @390, 46 px @1440) aplicada a `.method strong`, y `.method li { grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr) }`. | Las seis secciones de contenido tienen un elemento dominante del mismo rol; "Descubrir" (y ningún paso) invade la columna de descripción; los pasos se leen como pasos, no como títulos. |
| T-313 | Fondo — un solo sistema (F-01): eliminar el bloque completo `section:not(.hero):not(.invitation)::before/::after, footer::before/::after` y su `@keyframes blob-drift`. Dejar solo `.ambient-field` fijo como único fondo. | Un solo fondo continuo; ninguna frontera de sección corta un blob; en 1440 y 390, en ambos temas, no se distingue dónde termina una sección y empieza otra por el fondo. |
| T-314 | Vacío — metamorfosis y archivo (H-06/H-07/H-08): `.metamorphosis { min-height: auto }` + `padding-block: clamp(4rem, 8vw, 7rem)`; `section.deliverable { min-height: auto }` (o contenido centrado) y `.faq { margin-top: clamp(2rem, 4vh, 3rem) }`. | Ninguna sección de escritorio deja más de 25% de su altura sin contenido; metamorfosis ya no es el tramo muerto del centro; el archivo deja de ser "un párrafo flotando en una pantalla vacía". |
| T-315 | Títulos — h2 de "¿Qué es?" (H-04/H-07): `.about h2 { max-width: min(100%, 18ch) }`. | Ningún h2 supera 3 líneas a 1440; a 390 no queda "para" huérfano en una línea. |
| T-316 | Hero — una sola animación (M-03): quitar `data-reveal="hero"` del `<section class="hero">` y dejar solo el `line-reveal` CSS. El hero no se desvanece al hacer scroll (si se quiere motion ligado al scroll en el hero, `fromTo` con `scrub` sobre `y`, sin opacidad de sección). | El titular (LCP) ya no arranca en `opacity: 0` ni se anima dos veces; el hero se queda mientras se lee el apoyo. |
| T-317 | Escala hero/título (H-03/X-01/X-02 — valores fusionados): `--size-hero: clamp(4rem, 13vw, 13rem)`; `--size-title: clamp(2.75rem, 9vw, 9.5rem)`; `h1 { font-weight: 600 }`. Nota: la auditoría sin skill propuso `--size-title: clamp(2.6rem, 8vw, 9.5rem)` afirmando 129.6 px a 1440, pero 8vw a 1440 son 115.2 px — eso encogería el h2 de escritorio aprobado en T-301. Se mantiene 9vw (129.6 px a 1440, sin cambio en escritorio) y se toma el 13vw del hero de la segunda auditoría. Este cambio al mínimo de `--size-title` (T-301) queda aprobado en esta ronda. | h1:h2 ≥ 1.4× en 1440 y 390; la línea más larga del hero deja al menos 24 px de margen derecho a 390; el h2 de escritorio sigue en 129.6 px. |
| T-318 | Etiquetas — aire muerto (H-04/H-05/H-06): `.section-label { margin: 0 0 clamp(1.5rem, 3vh, 2.5rem) }`; en móvil, `.promise__lead { margin-top: 0 }` (el `margin-bottom` de la etiqueta ya separa). | En móvil no hay huecos etiqueta→contenido mayores de 48 px; el hueco de 128 px en "¿Para quién es?" desaparece; la etiqueta se pega a lo que etiqueta. |
| T-319 | Cierre — centrado del bloque de contacto (H-09): quitar `margin-top: auto` de `.invitation .fine-print` y usar `margin-top: clamp(3rem, 6vh, 5rem)` (si se quiere la letra al fondo, envolver el bloque superior en un `<div>` y usar `justify-content: space-between` explícito). | El bloque de contacto queda centrado y equilibrado; la letra pequeña ya no queda aislada al pie con ~265 px de hueco. |
| T-320 | Tarjetas de contacto — estructura en dos niveles (L-01/L-02): dentro de cada tarjeta, etiqueta en mayúsculas (WhatsApp / Correo / MVGN Labs) y valor en caja normal (sin `text-transform`, sin tracking amplio). WhatsApp como única tarjeta rellena (`background: var(--text); color: var(--bg)`), las otras dos con borde. | Las tres tarjetas caben en una línea a 390 (o tienen un corte intencional); WhatsApp se reconoce como la acción principal; el correo se lee como correo. |
| T-321 | Tema — un solo lenguaje (T-01/T-02/T-03): `.floating-action { background: var(--panel); color: var(--accent-text); border-color: var(--border) }`; en claro `--panel: #ffffff` con sombra suave; en oscuro `--panel: #5a3155`; `.metamorphosis h2 { color: var(--text) }`; orbe en claro: último stop del degradado `rgba(62,31,60,.55)` (hoy es exactamente el color de fondo) y bajar el `drop-shadow` a `.12` en claro. | Los tres controles fijos comparten superficie y eje; el botón de tema tiene borde ≥ 3:1; el h2 no cambia de color por sección; el orbe tiene filo en tema claro. |
| T-322 | Fondo vivo — anillos, deriva y textura (F-02/F-04/F-05): en `@media (max-width: 700px)`, `.ambient-field__ring { display: none }`; `@keyframes ambient-drift`: `translate3d(-6%,-4%) → translate3d(8%,6%)`, `scale(.9) → scale(1.12)`, subir `.ambient-field::before/::after` a `opacity: 1`; en claro, `.hero__texture { mix-blend-mode: multiply; opacity: .5 }` y `--texture-highlight: rgba(62,31,60,.35)`. | Sin anillos en móvil (§10.2); la deriva se percibe en reposo (~85 px de recorrido); el tema claro recupera atmósfera en el hero. |
| T-323 | Controles flotantes — tamaño y eje (B-01/B-03): `.floating-action` y `.theme-toggle` mínimo 2.75rem (44 px); `bottom: calc(.75rem + env(safe-area-inset-bottom))` y `viewport-fit=cover` en el viewport; `@media (max-width: 700px) { .invitation, .footer { padding-bottom: 8rem } }` para que los flotantes no tapen la última tarjeta ni la nota final; glifo de WhatsApp en SVG (o "WA") en lugar de ↗. | Objetivos ≥ 44 px; sin solapamiento con la barra de gestos ni con las tarjetas a 390; el botón de WhatsApp se entiende de un vistazo. |
| T-324 | Reduced motion — sin salida (M-06): con `prefers-reduced-motion`, solo entrada por opacidad, sin salida (o salida en `bottom 20%`, nunca al 50%). | Para quien pide menos movimiento, la página no borra lo que está leyendo. |
| T-325 | Flechas y FAQ (L-03/L-04/L-05): añadir `target="_blank" rel="noopener noreferrer"` a las tarjetas de WhatsApp y MVGN (o quitar el ↗ de las tarjetas); glifo distinto por destino (WhatsApp burbuja/teléfono, correo @ o sobre, sitio ↗); `.faq summary`: indicador propio (`+`/`−` con `::after` o `summary::marker` en ámbar), `summary:hover { color: var(--accent-text) }` y `focus-visible` con outline. | La flecha deja de mentir sobre el comportamiento; la FAQ se reconoce como interactiva y deja de competir con la etiqueta de sección. |
| T-326 | Validación final: `npm run build` en verde, revisión propia contra este PRD + §13 + §14 + §15 + §16 + §17 + §18 + §19, reporte de cierre. | Build verde; sin deploy. |

**Criterios de aceptación de la ronda** (de la auditoría sin skill, §11):
1. Motion: al detenerse en cualquier punto del scroll ninguna sección queda en `opacity: 0` con la siguiente fuera de pantalla; no hay tramos de más de 0.2V sin contenido.
2. Jerarquía: las seis secciones tienen un elemento dominante del mismo rol; etiqueta 13.6 px y cuerpo 16 px en todas.
3. Hero/título: h1:h2 ≥ 1.4× en ambos anchos; la línea más larga del hero deja ≥ 24 px de margen derecho a 390.
4. Títulos: ningún h2 supera 3 líneas a 1440; "Descubrir" no invade su columna.
5. Vacío: ninguna sección de escritorio deja más de 25% de su altura sin contenido; en móvil no hay huecos etiqueta→contenido mayores de 48 px.
6. Fondo: un solo sistema; ninguna frontera corta un blob; en reduced motion no se mueve.
7. Tema: los tres controles fijos comparten superficie y eje; botón de tema con borde ≥ 3:1; el h2 no cambia de color por sección.
8. Contacto: las tres tarjetas caben en una línea a 390 o tienen un corte intencional; WhatsApp es la acción primaria; las flechas coinciden con el comportamiento real.
9. Móvil: objetivos ≥ 44 px; `viewport-fit=cover` y safe area; sin solapamiento con la barra de gestos.
10. Sin regresiones: build verde, sin deploy, y el copy aprobado intacto.

---

## §20 — Ronda 11b: Corrección de T-315, T-317 y glifo de WhatsApp — T-331…T-334 — 2026-11-11 ~11:35

**Contexto:** verificación visual de Nyx sobre R11 (1440/390, ambos temas, código + capturas): 14 de 16 tareas completas. Dos no se aplicaron como están escritas en §19 y un detalle cosmético quedó desviado. Esta ronda corrige solo esos tres puntos, sin tocar nada más.

| ID | Tarea | Aceptación |
|----|-------|-----------|
| T-331 | Títulos — h2 de "¿Qué es?" (T-315, no aplicado): agregar `.about h2 { max-width: min(100%, 18ch) }` en `src/styles/global.css`. No tocar el resto de h2. | El h2 de "¿Qué es?" queda en ≤ 3 líneas a 1440; a 390 no queda "para" huérfano en una línea; los demás h2 intactos. |
| T-332 | Escala — mínimo de `--size-title` (T-317, aplicado a medias): cambiar `--size-title` de `clamp(3.5rem, 9vw, 9.5rem)` a `clamp(2.75rem, 9vw, 9.5rem)` en `src/styles/global.css`. No tocar `--size-hero` (ya está en `clamp(4rem, 13vw, 13rem)`) ni el `font-weight: 600` del h1. | h1:h2 ≥ 1.4× en 1440 (187.2/129.6) y en 390 (64/44); el h2 de escritorio sigue en 129.6 px; la línea más larga del hero deja ≥ 24 px de margen derecho a 390. |
| T-333 | Tarjeta de WhatsApp — glifo (T-320/T-325, desviado): en `src/pages/index.astro`, la tarjeta de WhatsApp usa un círculo punteado "◌" (U+25CC) como glifo. Reemplazarlo por el mismo SVG de WhatsApp del botón flotante en `BaseLayout.astro` (viewBox 0 0 24 24, burbuja + teléfono), ajustado al tamaño de los otros glifos de tarjeta (@ y ↗). Si el SVG no cabe en el hueco del glifo, usar "WA" en su lugar. | La tarjeta de WhatsApp muestra una marca reconocible de WhatsApp a 1440 y 390; las tres tarjetas mantienen glifos distintos; el resto de las tarjetas intacto. |
| T-334 | Validación final: `npm run build` en verde, verificación de T-331, T-332 y T-333 contra sus criterios, reporte de cierre en `REPORTE-RONDA-11B.md`. | Build verde; sin deploy. |

---

## §21 — Ronda 12: Fondo Silk + revisión live de Armand — T-341…T-350 — 2026-11-11 ~12:20

**Contexto:** revisión live de Armand sobre la R11b (desktop + móvil). Le encanta el cambio de tema; móvil se ve muy bien distribuido; casi todas las observaciones son de desktop. Fondo elegido por Armand: **Silk (React Bits), con la paleta de ARS**. El resto de la ronda aplica su feedback. Móvil no se toca salvo donde se indique.

| ID | Tarea | Aceptación |
|----|-------|-----------|
| T-341 | Fondo dinámico Silk (React Bits, portado a vanilla): reemplazar el `.ambient-field` actual por un canvas WebGL fijo de fondo con el shader de Silk (ondas de tela que fluyen, brillo satinado). Sin React: portar el shader a canvas vanilla. Paleta ARS: tema oscuro, seda damson (`#3E1F3C` de base, brillo ámbar `#E8A838`); tema claro, seda Cloud Dancer (`#F0EEE9` de base, brillo ámbar suave). Velocidad lenta y calma (equivalente a Silk speed ~1–2), escala ~1. El canvas cambia de paleta con el toggle de tema. Con `prefers-reduced-motion`: pose estática drapeada, sin animación. En móvil (390): misma presencia, sin pérdida de rendimiento al hacer scroll. Eliminar los blobs estáticos restantes; el fondo debe leerse como flujo continuo, nunca como mancha. | Flujo continuo y evidente en hero a 1440 y 390, en ambos temas; sin blobs estáticos; sin pérdida de legibilidad del texto (contraste intacto); build verde. |
| T-342 | Hero — no contesta preguntas: el hero es portada y afirmación, no parte de la cadena de preguntas y respuestas. Quitar el texto de apoyo del hero ("Ars Memoriae registra colecciones privadas pieza por pieza: fotografía, cine, voz y catálogo.") — la explicación vive en "¿Qué es?". El hero queda solo con etiqueta + h1 + indicador de scroll. | Hero sin texto explicativo; solo etiqueta, h1 e indicador de scroll; resto de secciones intacto. |
| T-343 | Títulos — centrado editorial en desktop: en ≥ 1024 px, centrar las etiquetas y los h2 de todas las secciones (título + subtítulo centrados, sensación editorial). En móvil (390) se quedan alineados a la izquierda, como están. | A 1440, etiquetas y h2 centrados en todas las secciones; a 390 sin cambios (izquierda). |
| T-344 | "¿Qué se registra?" (metamorfosis) — acentos en oscuro: los textos de la sección hoy son todos blancos. En tema oscuro, destacar con el color de acento (ámbar `#E8A838`) los números/etiquetas de los ítems de metamorfosis para darles jerarquía. En tema claro NO se toca nada (se ve muy bonito así). | Acentos ámbar visibles en metamorfosis solo en tema oscuro; tema claro intacto. |
| T-345 | "Cuatro pasos" — desktop: la sección de método en desktop se siente dispersa. Centrar la sección en desktop (títulos y pasos en layout centrado, sin huecos enormes) o reestructurar el grid para que no se sienta desordenada. En móvil sin cambios (se ve muy bien). | A 1440 los pasos se leen centrados y ordenados, sin dispersión; a 390 sin cambios. |
| T-346 | "¿Qué se acuerda?" (FAQ) — puntos dinámicos: rehacer la sección con puntos que se desplieguen de manera dinámica (acordeón con motion visible, affordance clara de expandir/colapsar). Mantener las 3 preguntas y respuestas actuales, sin inventar copy nuevo. | Los 3 ítems se despliegan y colapsan con motion; la sección se siente dinámica, no estática; copy intacto. |
| T-347 | Colofón — copy tipo ONG: reemplazar el colofón actual ("MVGN Labs" serif en tarjeta) por un copy corto tipo iniciativa/ONG: "Ars Memoriae es una iniciativa de MVGN Labs que busca preservar la memoria de las colecciones privadas: registrar cada pieza con rigor, para que su historia no se pierda con el tiempo." Mantener el enlace a MVGN Labs. | Colofón con el copy de iniciativa, legible a 1440 y 390; enlace a MVGN Labs presente. |
| T-348 | Íconos — Lucide: reemplazar todos los íconos genéricos por Lucide Icons (librería que Armand usa siempre): flecha arriba (botón flotante), ↗ (tarjeta MVGN), @ (tarjeta correo), sol/luna (toggle de tema), +/− (FAQ), ↓ (indicador de scroll). Mismo estilo de trazo (stroke 1.5–2) en todos. La marca de WhatsApp (SVG propio) NO se toca: se queda el SVG actual en tarjeta y botón flotante. | Todos los íconos genéricos son Lucide, con trazo consistente; la marca de WhatsApp intacta; sin íconos de origen desconocido. |
| T-349 | T-331, segundo intento: el h2 de "¿Qué es?" sigue en 5 líneas porque la columna mide 768 px y `max-width: min(100%, 18ch)` = 100%. Cambiar el enfoque: que el h2 del about cruce las dos columnas del grid (o reestructurar el grid del about) para que quepa en ≤ 3 líneas. Mantener `.about h2 { max-width: min(100%, 18ch) }` solo si sigue sirviendo; si no, ajustarlo. | H2 de "¿Qué es?" en ≤ 3 líneas a 1440; a 390 sin palabra huérfana; resto de h2 intacto. |
| T-350 | Validación final: `npm run build` en verde, verificación de T-341…T-349 contra sus criterios (1440/390, ambos temas), reporte de cierre en `REPORTE-RONDA-12.md`. | Build verde; sin deploy. |

---

## §22 — Ronda 13: Revisión live de Armand (móvil + desktop) — T-361…T-375 — 2026-11-11 ~12:58

**Contexto:** revisión live de Armand sobre la R12, en móvil (iPhone 16 / Galaxy) y desktop. "Cuatro pasos" y "Cómo queda el archivo" en móvil están muy bien; contacto móvil bien. Todo lo demás de esta ronda son sus observaciones. La R12b (etiquetas + principios) queda absorbida aquí.

| ID | Tarea | Aceptación |
|----|-------|-----------|
| T-361 | Etiquetas centradas en desktop (T-343, segundo intento): la regla actual centra el texto de la etiqueta solo dentro de su columna del grid (640 px), así que todas las etiquetas quedan a la izquierda del centro de página. Hacer que `.section-label` cruce todo el ancho del grid (`grid-column: 1 / -1` o equivalente) desde 1024 px, para que el texto quede centrado en la página. A 390 sin cambios. | A 1440, todas las etiquetas centradas en la página (su centro ≈ 720 px); a 390 a la izquierda. |
| T-362 | Luna Lucide: el ícono de luna del toggle NO es el path de Lucide (es un creciente dibujado a mano). Reemplazarlo por el path exacto de Lucide `moon`: `M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z`. El sol ya es Lucide, no se toca. | Luna = path exacto de Lucide; sol intacto. |
| T-363 | Botones flotantes + toggle más grandes: `.floating-action` y `.theme-toggle` pasan de 2.75rem a 3.25rem, sus íconos de 1.25rem a 1.5rem. En ambos temas y anchos, sin solapamientos. | Botones de 3.25rem con íconos de 1.5rem, proporcionales al resto de la interfaz; sin solapamientos a 390. |
| T-364 | Hero móvil con menos aire: en ≤ 700 px, el hero deja de ser `100svh` con el contenido repartido (se ve vacío). Reducir su `min-height` (p. ej. ~85svh o auto con padding generoso) y agrupar el contenido sin tanto vacío. Desktop sin cambios. | Hero móvil sin vacío excesivo; desktop intacto. |
| T-365 | Aire entre secciones en móvil + divisores: en ≤ 700 px, las secciones dejan de tener `min-height: 100svh` (auto, con padding) y se agrega un divisor entre secciones (línea 1px: ámbar/dorada en oscuro, tinta en claro). Desktop sin cambios en `min-height`. | Secciones móviles compactas con divisor visible entre ellas; desktop intacto. |
| T-366 | Promise h2 en ≤ 2 líneas a 1440: "Una colección a la vez." hoy queda en 3 líneas. Ajustar su `max-width` (sin achicar el tamaño) para que quede en máximo 2 renglones a 1440. | Promise h2 en ≤ 2 líneas a 1440. |
| T-367 | Deliverable h2 en ≤ 2 líneas a 1440: "El archivo queda en privado." hoy queda en 3 líneas. Ajustar su `max-width` (sin achicar el tamaño) para que quede en máximo 2 renglones a 1440. | Deliverable h2 en ≤ 2 líneas a 1440. |
| T-368 | Títulos más grandes en desktop: subir `--size-title` en desktop (tope de 9.5rem y/o 9vw) para que los h2 se sientan más grandes. Mantener T-366/T-367 (≤ 2 líneas en promise y deliverable) y la proporción h1:h2 ≥ 1.4× en ambos anchos. | H2 de desktop visiblemente más grandes; promise y deliverable en ≤ 2 líneas; proporción ≥ 1.4×. |
| T-369 | Textos de descripción más grandes en desktop: subir el tamaño de los párrafos de descripción de las secciones en desktop (hoy se ven diminutos frente a los títulos; p. ej. de 1rem a ~1.125–1.25rem con interlineado acorde). Móvil sin cambios. | Descripciones legibles y proporcionales a los títulos a 1440; móvil intacto. |
| T-370 | Metamorfosis — rehacer copy y diseño: la sección no funciona (el h2 "Fotografía, cine, voz y catálogo." repite los 4 modos). Reescribir el h2 para que no repita la lista (propuesta: "La pieza, su contexto y su voz.", derivada del copy existente, sin inventar datos) y reestructurar la composición orbe + copy + modos para que se lea como un conjunto equilibrado en desktop (títulos y copy centrados o balanceados, no cargados a la derecha). Mantener el orbe. | H2 nuevo sin repetir los 4 modos; sección equilibrada a 1440; orbe intacto. |
| T-371 | Juego de color en los textos: en tema oscuro, destacar con ámbar una palabra clave por h2 de sección (la más significativa de cada uno) para dar dinamismo. En tema claro sin cambios. | Una palabra ámbar por h2 solo en oscuro; claro intacto. |
| T-372 | Botones de contacto más grandes en desktop: las tarjetas de contacto en "Hablemos de su colección" se ven chiquitas en desktop. Agrandarlas (padding, tipografía y ancho) para que tengan presencia acorde a la sección. Móvil sin cambios. | Tarjetas de contacto con presencia a 1440; móvil intacto. |
| T-373 | Etiqueta del footer — quitarla (corrección de Armand 13:03: NO usar "SALIDA"): eliminar la etiqueta "COLOFÓN" del footer sin reemplazo. El copy de iniciativa queda solo como texto de cierre, sin etiqueta encima. | Footer sin etiqueta; copy, enlace y principios intactos. |
| T-374 | Restaurar la línea de principios del footer: "Discreción · Consentimiento · Claridad documental · Alcance por proyecto" (eliminada sin pedirlo en R12). | Línea de principios visible en el footer. |
| T-375 | Validación final: `npm run build` en verde, verificación de T-361…T-374 contra sus criterios (1440/390, ambos temas), reporte de cierre en `REPORTE-RONDA-13.md`. | Build verde; sin deploy. |

---

## §23 — Ronda 13b: Corrección de 3 fallos de la R13 (verificación de Nyx) — T-381…T-384 — 2026-11-11 ~13:12

**Contexto:** verificación de Nyx de la R13 (12 de 15). Tres fallos con causa raíz medida — no repetir el mismo intento que ya falló.

| ID | Tarea | Aceptación |
|----|-------|-----------|
| T-381 | Etiquetas centradas en desktop (T-361, segundo intento): el `grid-column: 1 / -1` de la R13 no aplica porque la sección es `display: block`, no grid. Dar a `.section-label` `width: 100%` + `justify-content: center` (y `text-align: center` donde haga falta) desde 701 px, para que el texto quede centrado en la página. A 390 sin cambios. | A 1440, el centro de cada etiqueta ≈ 720 px (medido, no solo en código); a 390 a la izquierda. |
| T-382 | Promise h2 en ≤ 2 líneas (T-366, segundo intento): el h2 está encerrado en la primera columna del grid de promise (416 px) y el `max-width: 18ch` no lo libera. Poner `.promise h2 { grid-column: 1 / -1; }` para que cruce ambas columnas. | Promise h2 en ≤ 2 líneas a 1440. |
| T-383 | Títulos más grandes en desktop (T-368, segundo intento): la R13 solo subió el mínimo del clamp (2.75→4rem); el 9vw y el tope 9.5rem siguen iguales, así que a 1440 el h2 sigue en 130 px. Subir el componente vw y el tope de `--size-title` en el media query ≥ 701 px (p. ej. `clamp(4rem, 10vw, 11rem)` → ~144 px a 1440) y subir `--size-hero` en proporción (p. ej. `clamp(4rem, 14.5vw, 14rem)` → ~209 px a 1440) para mantener la proporción h1:h2 ≥ 1.4× en ambos anchos. Verificar que promise y deliverable sigan en ≤ 2 líneas y about en ≤ 3 líneas a 1440 con el nuevo tamaño. | H2 de desktop visiblemente más grande (~144 px a 1440); h1:h2 ≥ 1.4× a 1440 y 390; promise y deliverable ≤ 2 líneas; about ≤ 3 líneas. |
| T-384 | Validación final: `npm run build` en verde, verificación de T-381…T-383 con medidas reales en el navegador (centro de etiquetas, líneas de h2, tamaños computados a 1440 y 390), reporte de cierre en `REPORTE-RONDA-13B.md`. | Build verde; sin deploy. |

---

## §24 — Ronda 14 (Nyx): Correcciones propias, prueba de programación — N-401…N-406 — 2026-11-11 ~13:54

**Contexto:** Armand pidió que Nyx diagnostique con su propio criterio visual qué le falta al sitio, lo corrija ella misma directo en código y suba la versión live. Es una prueba: qué tan bien programa Nyx y cuántos tokens gasta (Armand lo mide). No es un encargo a Codex. **Diagnóstico de Nyx (13:54):** (1) El ícono de WhatsApp NO es Lucide ni la marca real: es una imitación dibujada a mano (burbuja + auricular, dos trazos sobrepuestos) que a 20–24 px se lee como un bulto con algo adentro — eso es el "sobrepuesto" que ve Armand. Los demás íconos SÍ son paths exactos de Lucide, pero a stroke-width 1.5–1.75, más delgados que el 2 que usa Lucide por defecto, por eso no se leen como Lucide. (2) El h2 de metamorfosis quedó en 4 líneas a 144 px, atrapado en la columna derecha. (3) El Silk en claro es el mismo efecto con paleta lavada: no se lee igual que en oscuro; necesita un tratamiento dinámico distinto. (4) Mucho texto, pocos descansos: los bloques de cuerpo no respiran (line-height 1.5, h2 pegado al cuerpo en promise). El móvil está pulcro salvo los íconos; la distribución general de desktop es tema de la v3 (investigación en curso, subagente).

| ID | Tarea | Aceptación |
|----|-------|-----------|
| N-401 | WhatsApp → Lucide `message-circle`: reemplazar la imitación (burbuja + auricular) por el path exacto de Lucide `M7.9 20A9 9 0 1 0 4 16.1L2 22Z` en el botón flotante (BaseLayout) y en la tarjeta de contacto (index.astro). El enlace a wa.me y la etiqueta "WhatsApp" se quedan. | Ambos glifos = path exacto de Lucide message-circle; sin imitación. |
| N-402 | Iconos a grosor Lucide: subir el stroke-width a 2 (el default de Lucide) en `.floating-action svg`, `.theme-icon`, `.contact-card__glyph svg`, `.faq__icon svg`, `.scroll-cue svg` y `.footer__brand svg`. Auditar que todos los demás íconos sean paths exactos de Lucide (sol, luna, arrow-up, arrow-up-right, at-sign, plus, minus, arrow-down). | Todos los íconos con stroke 2 y paths exactos de Lucide. |
| N-403 | Metamorfosis h2 a todo el ancho: sacar el h2 de `.metamorphosis__copy` y ponerlo como hijo directo de la sección (después de la etiqueta), centrado, con `max-width: 20ch`, para que quede en ≤ 2 líneas a 1440. El frame conserva orbe + nota + modos; su `min-height` baja de 78vh a 62vh para que el título no quede flotando lejos del orbe. Móvil sin cambios de estructura. | H2 de metamorfosis en ≤ 2 líneas a 1440, centrado; orbe, nota y modos intactos. |
| N-404 | Silk en claro, tratamiento distinto: mismo fondo dinámico pero con otro carácter en tema claro — pliegues más amplios y lentos (uniformes de frecuencia y velocidad por tema) y glow bronce más profundo para que se lea sobre crema. | Código con paletas y parámetros por tema; oscuro intacto. |
| N-405 | Descansos en el texto: subir el line-height del cuerpo a 1.65 en desktop (regla de 1.2rem). Nota de corrección: el h2 de promise NO va pegado al cuerpo — el grid ya le da aire (~65 px) — así que no se le agrega margin. | Line-height computado 1.65 en párrafos de sección a 1440. |
| N-406 | Validación final (Nyx): `npm run build` en verde, verificación con medidas reales (íconos, líneas de h2, line-height, centros), capturas, reporte de cierre en `REPORTE-RONDA-14-NYX.md`. Sin deploy. | Build verde; sin deploy. |

## §25 — Versión 3 (v3): Madurez de diseño y contenido — V-501…V-518 — 2026-11-11 ~14:10

### Contexto

La v2 funciona visualmente, pero el coleccionista no confía todavía. Dos fuentes lo establecen:

1. **Análisis del copy como coleccionista** (`analisis-copy-coleccionista.md`, Nyx, 2026-11-11): veredicto — interés sí, confianza todavía no. El prospecto tomaría la reunión por el referido, no por el sitio. Faltan: quién eres, una imagen concreta de lo que recibe, un primer paso de bajo compromiso, el riesgo de no hacer nada, respuestas reales en el FAQ. Sobran: dos líneas de andamiaje en el pie y la repetición de frases entre secciones.
2. **Investigación UI móvil-first 2025–2026** (`investigacion-v3-movil-first.md`, subagente, 2026-11-11): el problema es ritmo, no contenido. Seis secciones Q&A idénticas = pared de texto. Datos: solo el 16% lee palabra por palabra (NN/g); el 57% del tiempo de vista ocurre por encima del pliegue; más del 63% del tráfico web 2025 es móvil (Clutch). Referencias: Aesop, Nordiska Museet, Cooper Hewitt, Magnum Photos, National Gallery, V&A.

Dirección de Armand (2026-11-11 14:09): la v3 **no se debe parecer a la v2**; se tiene que notar madurez en diseño Y en contenido. La confianza lo es todo; sin credenciales, la transparencia es el sustituto. La v3 es una **reconstrucción estructural** (cadencia, jerarquía, secciones nuevas), no una ronda de pulido.

### Principios de la v3 (no negociables)

- Móvil primero (390 px compone, desktop se deriva). Una idea por pantalla en móvil.
- Ninguna sección de texto seguida de otra sin un descanso con peso entre ellas.
- Jerarquía real de 3 niveles: un solo título gigante por página (el hero).
- El copy aprobado no se reescribe: solo se agregan las piezas listadas abajo, con las palabras que Armand apruebe.
- Nada inventado: ni credenciales, ni clientes, ni resultados, ni muestras, ni fotos de colecciones que no existen.
- La v3 no va al prospecto hasta que Armand la apruebe (su primer filtro, sin cambio).

### Parte A — Reformas de contenido (confianza y transparencia)

| ID | Tarea | Aceptación |
|----|-------|-----------|
| V-501 | **Quitar las dos líneas de andamiaje del pie.** Borrar "Provisional — andamiaje de diseño v2" y "La demostración no documenta una colección real; el sitio se muestra, no agenda." Son las dos fugas de confianza más grandes de la página. | Ninguna de las dos cadenas existe en el HTML construido. |
| V-502 | **Identidad ("Quién").** Un bloque real con nombre y laboratorio: quién responde, qué es MVGN Labs, y el enfoque honesto (una colección a la vez, por proyecto). Sin credenciales inventadas, sin trayectoria inventada, sin clientes inventados. Propuesta de copy (Armand decide las palabras): "Armand Ibañez — MVGN Labs. Ars Memoriae es la práctica de archivo de MVGN Labs: una colección a la vez, por proyecto." Ubicación propuesta: momento propio y discreto antes del contacto. | El sitio nombra a una persona real; no hay ninguna afirmación de trayectoria, clientes ni resultados que no exista. |
| V-503 | **El archivo, en concreto.** Un momento en la sección de entrega que deje ver lo que el coleccionista recibe: una ficha por pieza — su fotografía, su contexto y su voz — en un archivo privado que consulta cuando quiera y que crece con su colección. Sin entregable nombrado, sin muestra. Propuesta de copy (Armand decide): "Al final, cada pieza tiene su ficha: su fotografía, su contexto y su voz, en un archivo privado que usted consulta cuando quiera y que crece con su colección." | La sección de entrega contiene una imagen concreta del resultado, no solo la palabra "archivo". |
| V-504 | **El contacto como primera conversación nombrada.** Sustituir el CTA vago ("Hablemos de su colección") por un primer paso de bajo compromiso con duración y sin compromiso. Propuesta de copy (Armand decide): "Una primera conversación de 20 minutos, sin compromiso. Cuénteme de una pieza." Las tres vías de contacto (WhatsApp, correo, MVGN Labs) se quedan. | La sección de contacto nombra el primer paso, su duración y que no hay compromiso. |
| V-505 | **El riesgo, en un lugar que pese.** Un momento de la página donde viva lo que se pierde si no se registra: una colección sin registro es una historia que se pierde con quien la guardó. Es el copy más sensible de la v3; las palabras exactas son decisión de Armand. Propuesta (Armand decide): "Una colección sin registro es una historia que se pierde con quien la guardó." Ubicación propuesta: como cita de descanso entre "¿Qué es Ars Memoriae?" y "¿Qué se registra?". | La idea del riesgo aparece una vez, en un momento con peso, con las palabras aprobadas por Armand. |
| V-506 | **FAQ con respuestas reales.** Reescribir las tres respuestas para que cada una diga algo que su sección no dijo; borrar la pregunta que no tenga nada nuevo que responder. Las no-respuestas ("se acuerda por proyecto") se van. Borradores propuestos por Nyx; Armand aprueba las palabras. | Cada respuesta del FAQ contiene información que no está en su sección. |
| V-507 | **Cortar la repetición.** La lista de formatos (Fotografía, cine, voz, catálogo) aparece una sola vez en toda la página. "El archivo queda en privado y crece cuando usted lo decida" aparece una sola vez. Ninguna frase se repite textual entre secciones. | Ninguna frase se repite textual entre secciones (verificado en el HTML construido). |

### Parte B — Reformas de diseño (ritmo y presentación)

| ID | Tarea | Aceptación |
|----|-------|-----------|
| V-508 | **Una idea por pantalla en móvil.** Reestructurar la cadencia: hero compacto (no 100svh vacío — el hero debe ganarse su altura) y después idea + descanso, idea + descanso. Ninguna pantalla móvil es una pared de texto. | A 390, cada viewport de scroll lleva una idea + un elemento de descanso; ningún viewport es solo texto. |
| V-509 | **Descansos con peso (tres tipos, reutilizando copy existente).** (a) Cita destacada (pull quote): una frase del propio copy en serif grande y ámbar entre secciones. (b) Número gigante como separador (01–04 o un dato del archivo). (c) Interludio del orbe entre secciones. Regla: nunca dos secciones de texto seguidas sin un descanso entre ellas. | Al menos un elemento de descanso entre cada dos secciones de texto, a 390 y a 1440. |
| V-510 | **Jerarquía tipográfica real de 3 niveles.** Un solo título gigante por página (el hero). Los h2 de sección bajan a una escala claramente menor; solo uno o dos vuelven a subir. Esto revierte deliberadamente la dirección de R12/R13 (todos los h2 a 144 px). El ámbar en una palabra por h2 se conserva solo donde el título es dominante. | El h1 es el único título a escala de hero; los h2 de sección están a una escala claramente menor (h2 ≤ 0,6 × h1 a 1440); la jerarquía se lee en 3 niveles, no en un continuo. |
| V-511 | **Scrollytelling para "Cuatro pasos" y los 4 modos de registro.** Un paso visible a la vez, con números gigantes (01–04) o el orbe como ancla fija mientras el texto avanza. Sin scroll-jacking: revelados suaves, el usuario conserva el control del scroll. | Los pasos y los modos se revelan uno a la vez al hacer scroll, a 390 y a 1440; sin secuestro del scroll. |
| V-512 | **El orbe como motivo de toda la página.** Presente en el hero (pequeño, como sello) y reapareciendo como interludio entre secciones, con la misma física. Deja de ser el mueble de una sección. | El orbe aparece en el hero y al menos una vez como interludio; no está confinado a una sección. |
| V-513 | **Silk: tratamiento distinto por tema y ligero en móvil.** En claro, variante más tenue y estructurada (más "papel" que "seda"); en oscuro, el Silk actual intacto. En móvil, intensidad y costo reducidos (o pose estática con movimiento solo al entrar). Rendimiento: 60 fps en un teléfono de gama media, sin saltos de layout. | Código con parámetros por tema; existe el camino de movimiento reducido en móvil. |
| V-514 | **Lucide como librería instalada, no paths copiados a mano.** `lucide` como dependencia; los íconos se importan del paquete. WhatsApp sigue siendo SVG de marca (no existe en Lucide), aislado en su propio componente, sin mezclarse con Lucide. Esto es proceso: que no se vuelva a "perder" un ícono en una ronda. | No hay paths de Lucide copiados a mano en el código; todos los íconos vienen del paquete; el glifo de WhatsApp vive en su propio componente. |
| V-515 | **Desktop derivado del móvil, con asimetría editorial.** Componer primero la columna de 390 px y abrir a desktop en 2 columnas asimétricas (texto a un lado, elemento dominante al otro, márgenes amplios), elementos a sangre y un índice mínimo fijo (los 6 momentos numerados) como guía de lectura. No centrarlo todo: esto revierte deliberadamente el centrado total de R12/R13. | A 1440 la composición es asimétrica (texto y elemento dominante en lados opuestos); nada está centrado por defecto, solo donde el diseño lo elige explícitamente. |
| V-516 | **Hero compacto y ganado.** Título + una línea + el orbe como sello + cue de scroll, en una altura que cabe su contenido (sin banda vacía forzada). | A 390 el hero mide ≤ 85svh con todos sus elementos visibles sin hacer scroll; no hay banda vacía. |

### Parte C — Validación

| ID | Tarea | Aceptación |
|----|-------|-----------|
| V-517 | **Validación por Nyx:** `npm run build` en verde; medidas reales (ritmo a 390, proporciones de jerarquía, líneas de h2, auditoría de íconos, centros de etiquetas, presencia de descansos); capturas 1440/390 en ambos temas; reporte `REPORTE-RONDA-V3.md`. Sin deploy. | Build verde; sin deploy. |
| V-518 | **Veredicto live de Armand:** la v3 se le muestra primero a Armand; no va al prospecto hasta que él la apruebe. | Aprobación explícita de Armand antes de cualquier uso con el prospecto. |

### Lo que NO cambia en la v3

- Paleta: damson #3E1F3C + Cloud Dancer #F0EEE9 + ámbar #E8A838 (<10%).
- Tipografía: Cormorant Garamond + DM Sans, solo dos familias.
- Toggle de tema uniforme y persistente (toda la interfaz clara u oscura).
- Canon MVGN: botones flotantes abajo a la derecha (volver arriba + WhatsApp del dueño); bloque de contacto con 3 destinos como tarjetas hover-invert.
- Divisores ámbar de 1 px entre secciones.
- Sin entregable nombrado; sin muestras ni prototipos presentados como opciones reales; sin testimonios ni casos inventados.
- Tratamiento de "usted"; tono serio y experto; soporte de movimiento reducido.

### Explícitamente FUERA de la v3

- Reescribir el copy aprobado más allá de las adiciones listadas (cualquier otro cambio de palabras es decisión de Armand, no del rediseño).
- Credenciales, clientes, resultados o testimonios inventados.
- Bento para todo (reservado, como mucho, a los 4 modos o los 4 pasos).
- Scroll-jacking o animaciones que secuestren el scroll.
- WebGL pesado en móvil.
- Más de 2 familias tipográficas; íconos decorativos sin función.
- Copiar Awwwards literal (espectáculo sobre usabilidad): la referencia se roba como patrón, no como espectáculo.

### Borradores de copy (propuestas — Armand decide las palabras)

- V-502 identidad: "Armand Ibañez — MVGN Labs. Ars Memoriae es la práctica de archivo de MVGN Labs: una colección a la vez, por proyecto."
- V-503 archivo concreto: "Al final, cada pieza tiene su ficha: su fotografía, su contexto y su voz, en un archivo privado que usted consulta cuando quiera y que crece con su colección."
- V-504 primera conversación: "Una primera conversación de 20 minutos, sin compromiso. Cuénteme de una pieza."
- V-505 riesgo: "Una colección sin registro es una historia que se pierde con quien la guardó."

### Nota de proceso

La v3 es una reconstrucción estructural, más grande que una ronda de corrección. Quién la construye lo decide Armand después de aprobar este PRD (constructor por defecto: Codex con GPT-6.1-Sol, que ejecutó la R13b). Ningún constructor se lanza antes de su aprobación.

## §26 — Versión 3 enmendada (revisión ATHN1 + contrapropuesta de Nyx) — V-501…V-518 (decisiones finales) — 2026-11-11 ~14:36

### Estado

Esta sección **sustituye a la §25 como especificación operativa de la v3**. La §25 queda como historial (primera requisición de la v3). Fuente de la enmienda: revisión estratégica de ATHN1 (ChatGPT), `Ars_Memoriae_revision_estrategica_PRD_v3_para_Nyx_2_6zgr.md`, analizada críticamente por Nyx en `revision-athn1-contrapropuesta-nyx.md`. **Ningún constructor se lanza antes de la aprobación explícita de Armand de esta sección y de las respuestas a las 8 preguntas del §8 de la contrapropuesta.**

### Cambio central respecto a la §25

La §25 conservaba la estructura Q&A de seis secciones y prescribía un entregable ("una ficha por pieza: su fotografía, su contexto y su voz"). Eso contradice la definición del servicio: el resultado se define con cada propietario, no antes. La v3 enmendada adopta la **arquitectura narrativa de cinco momentos** de ATHN1 y sustituye el entregable fijo por la explicación de cómo se define el resultado + una sola mención ilustrativa con "por ejemplo" (enmienda de Nyx: sin esa mención, el coleccionista no imagina lo que recibe y el sitio se vuelve pura abstracción).

### Arquitectura de información (hero + cinco momentos)

| Momento | Sección |
|---|---|
| — | **Hero:** "Su colección, documentada." (copy aprobado) + línea de definición del servicio + orbe como sello + cue de scroll. Compacto (≤ 85svh a 390). |
| 1. Sentido | Por qué vale la pena documentar lo que una persona conserva. Sensibilidad y respeto, sin dramatismo, sin miedo a la pérdida. |
| 2. Qué es Ars | El servicio y sus límites, en lenguaje concreto. Posicionamiento: práctica de documentación y organización digital de colecciones y archivos privados, a la medida de cada propietario, como iniciativa de MVGN Labs. La preservación es una finalidad; la documentación y la organización son las capacidades ofrecidas. No se promete conservación perpetua, custodia, hospedaje, acceso permanente, investigación histórica ni mantenimiento sin definición contractual. Aquí vive la mención ilustrativa ("por ejemplo") y la explicación de que alcance, contenidos, medios, acceso y entrega se definen con el propietario, por proyecto. |
| 3. Cómo se trabaja | Método como escucha y definición conjunta: Escuchar → Comprender → Acordar → Documentar. El orden y el peso se acuerdan por proyecto. Las preguntas frecuentes viven aquí de forma contextual (máximo 2–3), no como sección autónoma. |
| 4. Quién responde | Armand Ibañez, en primera persona, texto breve. Fotografía real si él la aprueba. Responsabilidad personal y vínculo con MVGN Labs. Dentro de la misma página, sin obligar al visitante a investigar otra web. |
| 5. Primera conversación | Invitación de bajo compromiso + vías de contacto (WhatsApp, correo, MVGN Labs). Se aclara que la conversación sirve para explorar necesidades, no presupone una solución. |

**No hay** sección autónoma que muestre o prometa cómo luce un "archivo terminado". **No hay** sección FAQ autónoma.

### Matriz final de requisitos

| ID | Decisión final | Aceptación |
|---|---|---|
| V-501 | **Conservar.** Retirar las dos líneas de andamiaje del pie. | Ninguna de las dos cadenas existe en el HTML construido. |
| V-502 | **Ampliar.** Identidad en la página, después del proceso y antes del contacto. Primera persona, texto breve, fotografía real si Armand la aprueba. MVGN Labs como respaldo. | La página nombra a una persona real antes del contacto; no hay afirmaciones de trayectoria, clientes ni resultados que no existan. |
| V-503 | **Sustituir.** Sin ficha obligatoria por pieza, sin formatos obligatorios, sin crecimiento ni acceso permanente garantizados, sin sección de "entrega" como exhibición. En su lugar: explicación de que alcance, contenidos, medios, acceso y entrega se definen con el propietario, por proyecto + una mención ilustrativa con "por ejemplo". | La página explica cómo se define el resultado sin prometer un entregable estándar; existe una sola mención ilustrativa, marcada como ejemplo. |
| V-504 | **Conservar con revisión de copy.** Primera conversación de bajo compromiso. "20 minutos" solo si Armand confirma esa duración. CTA propuesta: "Cuénteme qué guarda". Canales previstos se mantienen. | El contacto nombra el primer paso y aclara que no presupone una solución; la duración solo aparece si Armand la confirma. |
| V-505 | **Reformular.** El riesgo se formula como continuidad y cuidado, no como pérdida o muerte. La frase original de la §25 queda no aprobada. | El momento "Sentido" existe sin argumento de pérdida ni dramatismo. |
| V-506 | **Conservar, integrar o reducir.** FAQ solo para dudas nuevas y concretas, de forma contextual dentro de "Cómo se trabaja" (máximo 2–3 preguntas). Sin garantías inventadas. | Cada respuesta contiene información que no está en su sección; no hay sección FAQ autónoma que repita. |
| V-507 | **Ampliar.** Sin repeticiones textuales ni conceptuales. La enumeración de formatos aparece una sola vez, secundaria e ilustrativa, con "por ejemplo". | Ninguna frase se repite textual entre secciones; los formatos se mencionan una sola vez. |
| V-508 | **Conservar con flexibilidad.** Móvil primero a 390 px, una idea dominante por tramo. La regla "una idea por viewport" es guía, no ley; sin cortes artificiales. | A 390, cada tramo tiene una idea dominante; ningún tramo es una pared de texto. |
| V-509 | **Reformular.** Pausas editoriales al servicio de la comprensión; no impuestas entre todas las secciones. Los números gigantes son números de sección, no datos. | Existen descansos con peso (cita, número u orbe) donde la comprensión lo pide; ninguno simula datos o credenciales. |
| V-510 | **Conservar.** Jerarquía de 3 niveles; hero dominante; niveles secundarios proporcionados. | El h1 es el único título a escala de hero; los h2 de sección están a una escala claramente menor (h2 ≤ 0,6 × h1 a 1440). |
| V-511 | **Sustituir el contenido; reevaluar el efecto.** Se eliminan los cuatro modos como menú. Los pasos se redefinen como Escuchar, Comprender, Acordar, Documentar (metodología adaptable; orden y peso acordados por proyecto). Scrollytelling narra comprensión, definición y documentación; nunca secuestra el scroll. | No existe menú de modos; los cuatro pasos son de escucha y definición conjunta; el scroll no se secuestra. |
| V-512 | **Conservar condicionado.** Orbe como motivo gráfico solo si mejora identidad y ritmo, sin competir con la información ni sugerir capacidades inexistentes. | El orbe aparece en el hero y como interludio sin desplazar contenido. |
| V-513 | **Conservar.** Silk con tratamiento distinto por tema; versión ligera y movimiento reducido en móvil. Rendimiento verificado en dispositivo real, no prometido (sin cifra de fps sin medición). | Existe el camino de movimiento reducido en móvil; el rendimiento se mide, no se afirma sin medición. |
| V-514 | **Conservar.** Lucide como dependencia; ícono de WhatsApp separado. | No hay paths de Lucide copiados a mano; el glifo de WhatsApp vive en su propio componente. |
| V-515 | **Reformular parcialmente.** Desktop editorial asimétrico derivado del móvil. Índice fijo condicional: cinco entradas si existe, o ninguno si no aporta navegación; se decide en la construcción. | A 1440 la composición es asimétrica; el índice, si existe, tiene cinco entradas. |
| V-516 | **Conservar con validación.** Hero compacto y legible en móvil; comprobar que ≤85svh no recorta contenido en dispositivos reales. | A 390 el hero mide ≤ 85svh con todo su contenido visible sin scroll. |
| V-517 | **Conservar y ampliar.** Build, capturas 390/1440 en ambos temas, accesibilidad, ritmo, rendimiento y reporte. Se añade auditoría de promesas comerciales, congruencia narrativa y ausencia de muestras ficticias. Sin deploy. | Build verde; sin deploy. |
| V-518 | **Conservar sin cambios.** Ningún envío al prospecto ni publicación hasta aprobación explícita de Armand. | Aprobación explícita de Armand antes de cualquier uso con el prospecto. |

### Copy nuevo (propuesta — Armand decide las palabras)

- **Hero, línea de definición (nuevo):** "Documentación y organización digital de colecciones y archivos privados, a la medida de cada propietario."
- **Sentido (nuevo):** "Una colección guarda más que objetos: guarda lo que su dueño sabe de cada pieza. Documentarla es que ese saber no dependa de una sola memoria." (Tono pendiente de decisión de Armand.)
- **Qué es Ars (nuevo):** "Ars Memoriae es una práctica de documentación y organización digital de colecciones y archivos privados, desarrollada a la medida de cada propietario, como iniciativa de MVGN Labs. Ars no crea el valor de la colección ni la produce: escucha, comprende y acuerda qué documentar. El alcance, los contenidos, los medios, el acceso y la entrega se definen con usted, por proyecto. Por ejemplo: fotografía, video, testimonio de voz, texto o fichas — recursos posibles, no un paquete."
- **Cómo se trabaja, pasos redefinidos (nuevo):** Escuchar — "Escuchar la colección y su historia." (línea aprobada de la v2, reutilizada). Comprender — "Comprender qué significa la colección para quien la guarda y qué quiere documentar." Acordar — "Acordar el alcance, los recursos, las condiciones y la forma de entrega, por proyecto." Documentar — "Documentar con los formatos acordados." Línea de calificación (aprobada de la v2, se conserva): "El orden y el peso de cada paso se acuerdan con usted, por proyecto."
- **Quién responde (nuevo, palabras de Armand):** borrador: "Soy Armand Ibañez, de MVGN Labs. Ars Memoriae es mi práctica de archivo: trabajo con una sola persona y una colección a la vez, y respondo personalmente por cada proyecto." Fotografía real pendiente de aprobación.
- **Primera conversación (nuevo):** "Una primera conversación, sin compromiso. Cuénteme qué guarda. La conversación sirve para explorar lo que usted necesita; no presupone una solución." Duración pendiente de confirmación de Armand.
- **FAQ contextual (nuevo, máximo 2–3):** "¿Qué se acuerda antes de empezar?" — "El alcance, los contenidos, los medios, el acceso y la entrega. Nada se documenta sin su consentimiento." / "¿La colección queda en privado?" — "La discreción es criterio de trabajo: nada se publica ni se comparte sin su acuerdo." / "¿Los formatos son obligatorios?" — "No. Fotografía, video, voz o fichas son recursos posibles; se usan solo los que usted acuerde."

### Líneas de la v2 incompatibles (se revisan o se retiran)

- "…en un mismo archivo organizado, consultable y expandible." / "…para que pueda consultarse y crecer con claridad." / "Preservar: Dejar un archivo privado, claro y expandible." / "El archivo queda en privado y crece cuando usted lo decida." (dos veces) / "…cada colección se preserva como su dueño la imaginaría inmortalizada." — todas prometen permanencia, crecimiento o perpetuidad sin sustento.
- La sección "¿Cómo queda el archivo?" como exhibición de entrega — se sustituye por la explicación de cómo se define el resultado.
- El menú de modos (Fotografía / Cine por pieza / Nota de voz / Ficha de catálogo) — pasa a una sola mención ilustrativa con "por ejemplo".
- "Cuatro pasos: Descubrir, curar, registrar y preservar." — los pasos se redefinen; la etiqueta "Cuatro pasos" puede conservarse.
- Principios del pie ("Discreción · Consentimiento · Claridad documental · Alcance por proyecto") — se conservan como criterios de trabajo, no como garantía técnica.

### Lo que NO cambia / Explícitamente FUERA

Igual que la §25: paleta damson/Cloud Dancer/ámbar; Cormorant Garamond + DM Sans; toggle de tema uniforme y persistente; canon MVGN (botones flotantes, contacto con 3 destinos); divisores ámbar de 1 px; sin entregable nombrado; sin muestras ni prototipos; sin testimonios ni casos inventados; tratamiento de "usted" en el contenido institucional (primera persona solo para la presentación del responsable); soporte de movimiento reducido. Fuera: reescribir el copy aprobado más allá de lo listado; credenciales, clientes o resultados inventados; bento para todo; scroll-jacking; WebGL pesado en móvil; más de 2 familias tipográficas; íconos decorativos sin función; copiar Awwwards literal.

### Nota de proceso

La v3 enmendada es una reconstrucción mayor que la §25 (secciones nuevas, pasos redefinidos, scrollytelling del método, orbe como motivo, dependencia Lucide). Constructor por defecto: Codex con GPT-6.1-Sol. Ningún constructor se lanza antes de la aprobación de Armand de esta sección y de sus respuestas a las 8 preguntas de la contrapropuesta.

## §27 — Adopción del PRD v3 final consolidado (revisión de Nyx) — 2026-11-11 ~14:47

### Estado

El documento `prd-v3-final-consolidado.md` (versión 3.0, consolidación de §25 + revisión ATHN1 + contrapropuesta de Nyx) es a partir de ahora **la especificación operativa de la v3**. Las §25 y §26 quedan como historial. El constructor construye desde el consolidado + esta sección. **Ningún constructor se lanza antes de la aprobación explícita de Armand del consolidado y de las respuestas a sus decisiones pendientes (§10 del consolidado).**

### Revisión de Nyx (lo que pide el §11 del consolidado)

Revisé el consolidado contra la §26. No hay contradicciones que bloqueen la implementación. Hay **9 deltas** (correcciones o adopciones) que quedan registrados aquí para trazabilidad:

- **D1 — "una sola colección a la vez":** el borrador de identidad de la §26 decía "trabajo con una sola persona y una colección a la vez". El consolidado §3.7 lo corrige: evitar la frase como promesa o límite operativo no confirmado. **Se adopta la corrección: la frase no va en el copy.**
- **D2 — Alcance de la participación personal:** el borrador de la §26 decía "respondo personalmente por cada proyecto". El consolidado advierte no afirmar participación personal en todas las etapas sin confirmación operativa. **Se adopta el borrador del consolidado** ("Me involucro personalmente en la definición del proyecto y en las decisiones sobre su alcance") y el alcance exacto queda como decisión pendiente de Armand.
- **D3 — "Sentido":** se adopta el borrador del consolidado ("Documentarla permite dar continuidad a ese conocimiento"), más alineado con la regla de no vender con miedo que el borrador de la §26 ("no dependa de una sola memoria").
- **D4 — Pasos:** se adoptan las descripciones del consolidado. "Comprender" añade "qué prefiere reservar" (la privacidad dentro del método).
- **D5 — "Qué es Ars":** se adopta el párrafo completo del consolidado (incluye la mención ilustrativa y la definición conjunta del alcance).
- **D6 — CTA:** se adopta el borrador largo del consolidado ("Cuénteme qué guarda y qué le gustaría documentar. A partir de ahí podremos explorar una solución adecuada."), pendiente de aprobación editorial.
- **D7 — Divisores:** pasan de canon fijo a condicional ("donde aporten estructura; no imponerlos si perjudican el ritmo").
- **D8 — V-517 ampliada:** a la validación se añaden comparativa de arquitectura v2 → v3, registro de copy aprobado/propuesto/retirado con diffs, y auditoría de performance en móvil real indicando dispositivo y navegador, sin inventar métricas.
- **D9 — Fotografía:** la foto candidata para el bloque de identidad es una **edición de IA a partir de la foto real de Armand** (su greeter de bebop): su cara real, con camisa de vestir y escena de oficina generadas. No es una fotografía tomada en una oficina real. El consolidado pide "fotografía auténtica" y aprobación de la imagen específica. **Decisión de Armand:** si esta edición cuenta como fotografía aceptable para el bloque, o si prefiere una foto real tomada por él. Sin su visto bueno, la foto no se usa.

### Decisiones pendientes (del §10 del consolidado — bloquean la construcción)

Fotografía (ver D9) · texto personal en primera persona · duración de la primera conversación (omitir "20 minutos") · texto exacto del CTA · condiciones de privacidad/permisos/propiedad/acceso/entrega/soporte · forma de acreditar competencia sin portafolio · copy final de "Sentido" y del servicio · necesidad de índice fijo y FAQ contextual.

## §28 — Decisiones de Armand sobre las 8 preguntas pendientes — 2026-11-11 ~14:54

Respuestas de Armand (por voz) a las 8 preguntas del plan de ejecución. Estas decisiones modifican el consolidado; lo que aquí se aprueba es definitivo para la construcción de mañana, lo que queda pendiente se marca como tal.

| # | Pregunta | Decisión de Armand | Estado |
|---|---|---|---|
| Q1 | Foto | **APROBADA** la imagen final (B/N, sin lanyard, botón superior abierto, laptop frente a él). Motivo: de mientras tiene que haber alguna. Nota: le parece mejor que la foto de su página, pero no se usa ahí por ahora — primero ARS. | Cerrada. La foto va en el bloque de identidad. |
| Q2 | Texto de identidad | Nombre completo: **Armando Ibáñez** ("Armand" es seudónimo interno, solo aquí). El borrador en primera persona ("Mi punto de partida...") **NO se aprueba**: demasiado personal; quiere un tono más institucional/profesional. | Abierta. Nueva redacción institucional pendiente (apoyo de escritura). |
| Q3 | Duración | **Confirmados los primeros 20 minutos**, pero expresados como estimado, no como límite rígido (ej.: "una primera conversación de unos 20 minutos"). | Cerrada en fondo; la frase exacta se fija con el copy. |
| Q4 | CTA | El borrador ("Cuénteme qué guarda y qué le gustaría documentar") **NO se aprueba**: no le parece suficientemente directo. | Abierta. Nueva redacción más directa pendiente (apoyo de escritura). |
| Q5 | Condiciones | Se convierten en un **disclaimer profesional** (qué hacemos / qué no hacemos), como en otras políticas. Contenido base: privado por defecto, nada se publica sin acuerdo. | Abierta. Redacción del disclaimer pendiente (apoyo de escritura). |
| Q6 | Competencia | **No hay nada más.** La acreditación es identidad + método + declaración honesta de la capacidad actual y de lo que se puede gestionar para arrancar un proyecto de este tamaño. Sin adornos. | Cerrada. |
| Q7 | Copy Sentido/servicio | Los borradores **NO se aprueban**. Se necesita apoyo de una inteligencia dedicada a la escritura para los contextos (Sentido, servicio; también Q2 y Q4). | Abierta. Apoyo de escritura pendiente (propuesto: ATHN1). |
| Q8 | Índice y FAQ | **SÍ a ambos, definitivamente.** Índice fijo con los cinco momentos + preguntas frecuentes contextuales (2–3). | Cerrada. |

### Consecuencias para el consolidado

- La identidad va en tercera persona / tono institucional, con el nombre **Armando Ibáñez**. La primera persona queda descartada para el bloque (la regla "primera persona solo para la presentación del responsable" del consolidado se sustituye por esta decisión).
- La duración se expresa como estimado ("unos 20 minutos"), no como cifra rígida.
- Las condiciones se escriben como disclaimer profesional (qué hacemos / qué no hacemos), no como lista de promesas.
- El copy de Sentido, servicio, identidad y CTA se reescribe con apoyo de escritura antes de la construcción. **Sin copy final, no hay build.**
- El índice fijo (cinco momentos) y la FAQ contextual (2–3) quedan confirmados como parte de la v3.

### Plan para mañana (12 nov 2026), pendiente de autorización de Armand

1. **Paso de copy:** apoyo de escritura (propuesto: ATHN1) para Q2 (identidad institucional), Q4 (CTA directo), Q5 (disclaimer) y Q7 (Sentido/servicio). Nyx integra los textos aprobados por Armand al PRD.
2. **Construcción:** Codex (GPT-6.1-Sol, medium) en sesión tmux visible, con el PRD consolidado + §27 + §28 y la skill mvgn-frontend. Construye la v3.
3. **Verificación (Nyx):** build verde, medidas reales, capturas 390/1440 en ambos temas, auditorías V-517 (incl. promesas comerciales y ausencia de muestras ficticias). Reporte `REPORTE-RONDA-V3.md`.
4. **Veredicto live de Armand (V-518).** Sin deploy hasta que él diga.

## §29 — Correcciones de Armand al copy v3 — 2026-11-12 ~09:52

Armand revisó los 4 borradores de `copy-v3-borradores.md`. Veredicto: solo el CTA está mal; los demás están decentes.

- **Disclaimer (Q5): APROBADO sin cambios.** "Está perfecto, eso es lo que me gusta." La pregunta anterior ("el 3, algo más") queda sin efecto.
- **Sentido y servicio (Q7): APROBADO sin cambios.** "También funciona."
- **Identidad (Q2): corrección de dirección.** La primera persona ("Mi punto de partida...") era demasiado personal; la tercera persona ("Armando participa personalmente...") le suena presuntuosa. Solución aprobada por él: el bloque describe la iniciativa y nombra a quién está a cargo, sin autorreferencia. Texto: "Ars Memoriae es una iniciativa de MVGN Labs para documentar colecciones privadas. Está a cargo de Armando Ibáñez." Lo personal va en la **ficha** (foto + nombre + cargo; línea opcional "Define cada proyecto con su propietario", por aprobar).
- **CTA (Q4): reestructurado.** "Cuénteme qué guarda" queda eliminado por completo. También se elimina el encuadre de "conversación": rompía la comunicación que el sitio preestablece. Nuevo CTA (propuesto por Nyx, pendiente de visto bueno de Armand): encabezado-pregunta "¿Desea documentar su colección?", cuerpo "Escríbanos. Le respondemos personalmente y definimos juntos el primer paso.", botón "Escribir por WhatsApp". Alternativa: encabezado "Empezar".
- **Duración (Q3):** los 20 minutos como estimado NO van en el CTA. Ubicación propuesta: FAQ, "¿Cómo empezamos?" — "Con un primer contacto breve, de unos 20 minutos, para conocer su colección y definir el primer paso."

### Estado para el build

Pendiente solo del visto bueno de Armand al nuevo CTA y a la identidad reescrita (y a la línea opcional de la ficha). Aprobados: foto, disclaimer, Sentido/servicio, competencia (Q6), índice + FAQ (Q8). Cuando Armand dé el visto bueno, el copy queda cerrado y la v3 pasa a Codex sin más pasos previos.

## §30 — La duración no se menciona en ninguna parte — 2026-11-12 ~09:54

Decisión de Armand, para el registro: olvídense de los veinte minutos en toda la página. La duración no se menciona en ningún lado — ni en el CTA ni en la FAQ ni en ninguna sección. Mencionarla es limitar al cliente: se hace una reunión y dura lo que tenga que durar, eso es lo de menos. La duración queda implícita (Armand lo sabe), jamás se especifica en la página. Se propone el contacto, sí. La duración, jamás.

Esto sustituye Q3 (§28/§29): la ubicación de los 20 minutos en la FAQ queda cancelada. Todo lo demás queda como está. Con esta decisión, Armand autoriza el arranque del proyecto: build de la v3 con Codex.
