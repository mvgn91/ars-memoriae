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

- **Color — dual por interruptor:** dos temas COMPLETOS: oscuro (damson `#3E1F3C`) y claro (Cloud Dancer `#F0EEE9`). Un interruptor claro/oscuro cambia TODA la interfaz de manera uniforme; no hay secciones alternadas. Damson por defecto. **Acento ámbar `#E8A838`** <10% (filetes, micro-etiquetas, bordes de lámina; solo con texto oscuro). Dorado solo como lámina/filo, nunca como fondo plano. Contraste verificado en ambos temas: blanco sobre damson 14,32:1; tinta `#111827` sobre Cloud Dancer 15,3:1.
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
