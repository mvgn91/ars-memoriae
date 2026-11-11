# ARS MEMORIAE v2 — Diseño desde cero

> **Fecha:** 2026-11-10 · **Estado:** concepto de diseño, sin implementar · **Autor:** Nyx (diseño) + investigación web (fuentes en §8)
> **Base:** dirección de Armand 2026-11-10 + investigación `research_notes/ars-memoria-diseno-desde-cero-20261110-1702/report.md`
> **Regla:** nada se construye sin la aprobación de Armand. Este documento es la propuesta de diseño; el PRD de construcción viene después.

---

## 1. Por qué desde cero (y qué se aprende del mockup R13)

Armand medio revisó el mockup R13 y su veredicto fue claro: es un rediseño leve, no un overhaul. Mismo reloj (el astrolabio), mismos elementos, misma página con otra ropa. Plano, no malo: plano.

Honestidad necesaria: la auditoría R13 verificó el PRD y salió en verde (0 fallos) porque la ejecución era correcta. El problema no era la ejecución, era la dirección: el PRD estaba atado al diseño anterior. Por eso el mockup no podía ser otra cosa que el mismo sitio, mejor vestido. La lección es que la dirección nueva no puede partir de lo anterior: ni de su paleta, ni de su retícula, ni de sus objetos de muestra, ni de su astrolabio.

**Lo que NO se lleva a v2:** el fondo hueso/beige, el dorado como color plano, el astrolabio, la retícula de 12 columnas uniforme, el catálogo de 6 objetos CC0 de muestra (nunca le gustaron a Armand), el copy institucional, los revelados solo-`fade`, las retículas de funciones, los precios, las estadísticas.

**Lo que SÍ se lleva:** las decisiones de fondo que Armand ya tomó en sus audios — el sitio se dirige a una sola persona, no a un mercado; sin CTA comercial; tono directo, editorial, personal, veraz; la primera vista del cliente es el móvil; WhatsApp como único canal.

---

## 2. La idea defendida: "El archivo toma la forma que usted elija"

La categoría entera (The Archival Group, EverPresent, Artlogic, Art2App, Archived Moments, Anderson Archival, ArtButler, StoryCorps) tiene un listón visual bajo: o se ven como vendor (banners de descuento, estadísticas, tablas de precios, retículas de funciones) o como SaaS competente sin emoción. Ninguno hace lo que Ars Memoriae necesita: **convertir la adaptabilidad en el lujo**.

El coleccionista tiene mucho dinero, colecciona huevos ornamentados (Fabergé), cuadros y esculturas, y quiere conservar su legado. Sus gustos se desconocen. Por lo tanto el sitio no puede vender un formato fijo: vende la capacidad de tomar la forma que el cliente elija — fotografía, cine por pieza, nota de voz, testimonio, catálogo — y de pensar en grande cuando el presupuesto se acepte (cámaras, producción, todo).

**La idea en una frase:** *El archivo toma la forma que usted elija.* Todo el diseño es la demostración de esa frase, no su ilustración.

---

## 3. Sistema visual nuevo

### 3.1 Color — joya, no beige

- **Fondo oscuro: damson `#3E1F3C`** (ciruela/borgoña profundo). Blanco sobre él: 14,32:1. "Se comporta como un negro para accesibilidad sin parecerlo" — joya, regio, apropiado para huevos Fabergé. Es la recomendación principal.
  - Alternativa: verde ftalo `#123524` (blanco 13,46:1; el verde "es dueño de 2026"). Decisión de Armand (§7.1).
- **Fondo claro: Cloud Dancer `#F0EEE9`** (Pantone Color del Año 2026, blanco cálido). Tinta `#111827` sobre él: 15,3:1.
- **Acento: ámbar `#E8A838`**, solo con texto oscuro (blanco sobre ámbar es 2,08:1, un fallo duro), usado en menos del 10% de la pantalla: filetes, micro-etiquetas, un borde de lámina. El dorado NO vuelve como color plano; si aparece, es como lámina/filo, no como fondo.
- **Ritmo:** secciones oscuras y claras alternadas (damson ↔ Cloud Dancer). Nunca un solo fondo continuo.

### 3.2 Tipografía — la letra como imagen

- **Display: serif de alto contraste, variable** — recomendación: **Cormorant Garamond** (variable). Alternativas: Playfair Display, Fraunces. Decisión de Armand (§7.3).
- **Cuerpo y micro-etiquetas: sans geométrica limpia** — recomendación: **DM Sans**.
- **Jerarquía exagerada:** titular gigante contra micro-etiquetas diminutas (11–13 px, mayúsculas, tracking amplio, números de folio). La letra es la imagen del hero: tipografía cinética (las líneas se parten y se revelan con máscara al entrar; las palabras hacen el trabajo visual cuando no hay fotografía del objeto).
- **Nada de la escala anterior** (Bricolage/Instrument/Newsreader). Sistema nuevo, escala nueva.

### 3.3 Imagen — textura macro, nunca stock falso

No hay fotos reales de la colección y no se fingen con stock. La fotografía es **macro extrema de textura**: esmalte, guilloché, dorado, craquelure, mármol, trama de lienzo, manos con guantes, vitrinas y plintos vacíos. La textura *es* la fotografía cuando el objeto no se puede mostrar.

- **Fuentes:** CC0 del Met, Rijksmuseum y Cleveland Museum of Art (Open Access). Textura real, con crédito, no "interior de lujo" genérico.
- **Regla:** 10–15 imágenes en toda la página, texto mínimo (lección de Google Arts & Culture). La página es imagen-dirigida, con pies lapidarios, no párrafos.
- **Fotografía real comisionada** (mesa de trabajo, materiales, proceso) queda para después, con presupuesto. Decisión de Armand (§7.5).

### 3.4 Composición — editorial nueva, no la retícula vieja

- Imagen a sangre en el 50–70% del primer viewport; asimetría y rejillas rotas como señal de valor; ritmo oscuro/claro.
- **Una sola secuencia horizontal:** las tres familias (huevos / cuadros / esculturas) como galería horizontal — una secuencia, no toda la página.
- **Una sola sección fijada (pinned):** la metamorfosis (§5.4). Todo lo demás, revelados simples.
- **El módulo repetible es la ficha de objeto** ("una pieza, una placa"): placa grande (textura macro) + placa de metadatos calma — *Título · Fecha · Técnica · Procedencia · Estado* — en serif gigante contra micro-etiquetas. Se repite tres veces (huevo / pintura / escultura) con luz y color distintos, y una cuarta vez **en blanco**: "Su próxima pieza, documentada así" — la placa vacía dramatiza la adaptabilidad.

---

## 4. Investigación: lo que se encontró (resumen)

Investigación web completa en `research_notes/ars-memoria-diseno-desde-cero-20261110-1702/report.md` (8 sitios similares, tendencias 2025–26, motion, museos; fuentes con URL en cada afirmación).

- **Similares:** The Archival Group (negro/rojo/dorado, referral-only, prueba por celebridades, 6 servicios, FAQ de 14, solo email — premium por escasez, plano en diseño); EverPresent (teal/crema; su página de legado es el tier premium: cadena de custodia, códigos de barras, verificación humana); Artlogic y Art2App (SaaS competente, anti-patrón para lujo: retícula de funciones + precios); Archived Moments (paquetes con precio, entregable físico nombrado: álbum/caja de grado museo — lección: nombrar el entregable); Anderson Archival (estándar Smithsonian como señal de confianza); ArtButler (el archivo como registro privado + cara pública presentable); StoryCorps (el audio + transcripción con timestamps como patrón de historia oral).
- **Tendencias 2025–26:** más allá del beige/dorado — Cloud Dancer, teal transformativo, verde ftalo, damson; serif revival y letra como héroe; jerarquía exagerada; fuentes variables; layouts editoriales; imagen a sangre; ritmo oscuro/claro; premium = contención + una idea defendida, sin tácticas de urgencia.
- **Motion:** Lenis (~3 KB) + GSAP ScrollTrigger (todos los plugins gratis desde 3.13, incl. SplitText); animaciones CSS por scroll (`animation-timeline: view()`, ya Baseline, ~87,8% cobertura) como respaldo; WebGL/Three.js para un solo set-piece como máximo; referentes: Lando Norris (un color, un objeto, una voz), Cartier W&W 2025 (seis "alcobas" 3D, una por producto), Obys (tipografía cinética).
- **Museos:** Rijksmuseum (zoom-out narrativo: un objeto → artista → tema → historia; "curate tu propia galería"; comparador lado a lado); Cleveland (la ficha de objeto como unidad de diseño: una imagen grande + placa completa de metadatos); Met (línea de tiempo y procedencia como prestigio); Google Arts & Culture (zoom gigapíxel; 10–15 imágenes y muy poco texto por exhibición).
- **Señales premium que sí funcionan:** escasez (solo por referido), prueba, entregable nombrado, seguridad concreta. **Señales planas a evitar:** banners de descuento, estadísticas, tablas de precios, retículas de funciones, stock genérico, texto largo indiferenciado.

---

## 5. Estructura de la página (una página, en español, para una sola persona)

### 5.1 Hero — "Su legado, en la forma que usted elija."

Fondo damson a sangre, textura macro derivando lento detrás, tipografía serif gigante como imagen. Entrada: revelado de líneas con máscara (SplitText), micro-etiquetas al final. Sin astrolabio, sin instrumento, sin ilustración.

- **Titular (borrador):** "Su legado, en la forma que usted elija."
- **Apoyo (borrador):** "Ars Memoriae documenta colecciones privadas: fotografía, cine, voz y catálogo — pieza por pieza, en el formato que usted decida."
- Sin CTA comercial en el hero: un solo gesto de scroll ("Desplácese" / flecha). El contacto llega al final.

### 5.2 La promesa — qué es, en tres líneas

Dos o tres frases, no cuatro párrafos. Qué es Ars Memoriae, para quién (una persona, una colección), y la promesa: *un archivo organizado, consultable y expandible, donde la materia, la historia y la voz de quien guarda puedan encontrarse.* (La promesa de `docs/07`, vigente.)

### 5.3 Las tres familias — tres alcobas

Una secuencia horizontal (la única de la página): **Huevos / Cuadros / Esculturas**. Cada familia es su propia "alcoba" (lección Cartier): su luz, su ritmo, su placa de objeto (textura macro + metadatos). Sin fotos de su colección: la textura y la ficha son la pieza.

> Decisión de Armand (§7.2): nombrar las tres familias en la página (recomendado: sí, porque es lo que Armand sabe del coleccionista y vuelve el pitch personal) + la placa en blanco como cuarta pieza.

### 5.4 La forma que usted elija — la sección fijada (la tesis en motion)

**Una sola sección fijada con scroll (pinned):** una misma ficha de objeto se transforma entre cuatro estados mientras se desplaza: **Fotografía → Vídeo por pieza → Nota de voz / testimonio → Ficha de catálogo**. El mismo objeto, cuatro tratamientos, un sistema. Es la única secuencia con scroll-jacking de la página; todo lo demás son revelados simples. Aquí la adaptabilidad se *demuestra*, no se afirma.

### 5.5 El método — cuatro pasos, sin retícula de funciones

Descubrir → Curar → Registrar → Preservar. Una línea por paso, con su frase. Nada de seis tarjetas ni de retículas.

### 5.6 Lo que recibe — el entregable nombrado

**"Un archivo privado. Una película por pieza. Un libro de legado."** Tres entregables con nombre, no conceptos abstractos. Línea de confianza (cadena de custodia, verificación humana, acceso privado acordado por proyecto; estándares de grado museo como señal, sin prometer seguridad absoluta).

### 5.7 Invitación privada — la única conversión

Cierre en damson, quieto. Sin formulario, sin precios, sin estadísticas. Un solo CTA discreto: **"Solicitar una conversación privada"** (WhatsApp 33 2262 1939). Aviso: la demostración no documenta una colección real; el sitio se muestra, no agenda.

### 5.8 Pie — colofón

Firma MVGN Labs, principios (discreción, consentimiento, claridad documental, alcance por proyecto), leyenda de provisionalidad. Mínimo.

---

## 6. Motion UI (sistema, no efectos sueltos)

- **Stack:** Lenis (~3 KB, sincronizado al ticker de GSAP) + GSAP ScrollTrigger (gratis desde 3.13, SplitText incluido). Respaldo: animaciones CSS por scroll (`animation-timeline: view()`) dentro de `@supports`. Sin librerías nuevas más allá de estas dos. Sin Three.js salvo que la pieza fijada lo pida (máximo un set-piece, con code-split).
- **Vocabulario (3–4 primitivas, reutilizadas en toda la página):** revelado de líneas con máscara (titulares), revelado por clip-path (imágenes), parallax suave (máx. 15–25% del desplazamiento, solo transform/opacity), stagger en rejillas. Cinco efectos distintos leen como plantilla; una firma, como oficio.
- **Coreografía:** entrada del hero en secuencia (tipo → textura → micro-etiquetas); una sola sección fijada (la metamorfosis, 4 escenas, no 15); micro-interacciones con propósito (el texto interior se mueve, no la caja; al pasar sobre un formato — Foto / Vídeo / Voz — se previsualiza su tratamiento).
- **Rendimiento:** solo transform/opacity; LCP ≤2,5 s, INP ≤200 ms, CLS ≤0,1; Lighthouse ≥95 rendimiento / 100 accesibilidad. GSAP/Three con code-split; `ScrollTrigger.refresh()` tras cargar contenido dinámico.
- **Reduced motion = diseño paralelo, no apagón:** sin Lenis, sin pins, sin cursor personalizado; `animation: none; animation-timeline: none; opacity: 1; transform: none`; los revelados por scroll pasan a fade de opacidad (el desplazamiento es lo incómodo, la opacidad no). El contenido llega a su estado final legible.

---

## 7. Decisiones que tiene que tomar Armand

1. **Color:** ¿damson `#3E1F3C` (recomendado — joya, Fabergé) o verde ftalo `#123524`?
2. **Las tres familias:** ¿se nombran en la página (huevos / cuadros / esculturas) + placa en blanco? Recomendado: sí.
3. **Serif de display:** ¿Cormorant Garamond (recomendado), Playfair Display o Fraunces?
4. **Stack de motion:** ¿Lenis + GSAP (recomendado — todo gratis desde 3.13) o solo CSS por scroll?
5. **Imágenes:** ¿texturas macro CC0 ahora y fotografía real comisionada después con presupuesto? Recomendado: sí.
6. **Entregable nombrado:** ¿"Un archivo privado. Una película por pieza. Un libro de legado."? Confirmar el texto.
7. **Mockup R13:** recomendación — **no desplegarlo live**. Ya cumplió su función (probó que la dirección anterior era plana). La energía va a v2.

---

## 8. Fuentes (investigación web, 2026-11-10)

- The Archival Group — https://www.thearchivalgroup.com/
- EverPresent — https://everpresent.com/ · https://everpresent.com/family-legacy-projects/
- Artlogic — https://artlogic.net/products/collector/management
- Art2App — https://www.art2app.com/en/
- Archived Moments — https://www.archivedmoments.com/services
- Anderson Archival — https://andersonarchival.com/about-us/
- ArtButler — https://www.artbutler.com/en/solutions/for-artist-estates/
- StoryCorps Archive — https://storycorps.org/discover/archive/
- Tendencias: https://www.toolshero.com/featured-posts/luxury-website-design-trends/ · https://www.gleamstudio.design/blog-post/color-trends-2026 · https://weandthecolor.com/design-forecast-2026-color-palettes-typography-youll-see-first/205925
- Motion: https://metabole.studio/en/blog/immersive-website-examples · https://landonorris.com/
- Museos: https://www.rijksmuseum.nl/en/collection · https://www.clevelandart.org/digital-innovations · http://www.metmuseum.org/art/collection · https://artsandculture.google.com/partner/rijksmuseum
- Reporte completo con notas por fuente: `research_notes/ars-memoria-diseno-desde-cero-20261110-1702/report.md` (no es un entregable; es el material de trabajo).

---

## 9. Qué sigue si se aprueba

1. Armand responde las 7 decisiones (§7).
2. Nyx escribe el PRD de requisición v2 (tareas atómicas para Opencode, como el R13) con este diseño como fuente.
3. Opencode construye la v2 (mockup o directo, según lo que Armand decida); Nyx la audita contra el PRD.
4. Revisión visual de Armand a 1440 y 390 (la primera vista del cliente es el móvil).
