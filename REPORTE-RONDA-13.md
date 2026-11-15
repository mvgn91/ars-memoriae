# Reporte de cierre — Ronda 13

Fecha: 2026-11-11  
Proyecto: ARS Memoriae 2  
Alcance: T-361 a T-375 de `PRD-V2.md`  
Deploy: no realizado

## Implementado

- Etiquetas centradas en desktop desde 701 px; en móvil conservan alineación izquierda.
- Luna del toggle reemplazada por el path exacto de Lucide `moon`.
- Toggle y botones flotantes ampliados a `3.25rem`; iconos a `1.5rem`.
- Hero móvil reducido a `85svh`; secciones móviles compactas con divisor de 1 px por tema.
- H2 de Promise y Deliverable con ancho desktop suficiente para máximo dos líneas.
- Escala desktop de títulos subida y descripciones a `1.2rem`; móvil conservado.
- Metamorfosis rehecha: nuevo h2 “La pieza, su contexto y su voz.” y composición equilibrada con el orbe intacto.
- Una palabra clave por h2 toma color ámbar solo en tema oscuro.
- Tarjetas de contacto ampliadas únicamente en desktop.
- Footer sin etiqueta, con el copy de iniciativa como texto de cierre y principios restaurados: “Discreción · Consentimiento · Claridad documental · Alcance por proyecto”.
- Iconografía de flecha arriba, flecha abajo, sol/luna, FAQ, `@` y ↗ mantenida en trazos SVG Lucide; WhatsApp propio sin cambios.

## Validación

- `npm run build` — **verde**.
- Ruta estática generada: `/index.html`.
- Build comprobado con presencia de: luna Lucide, copy nuevo de metamorfosis, palabras de énfasis oscuro, copy de cierre sin etiqueta y línea de principios.
- No se ejecutó deploy.

## Archivos tocados en esta ronda

- `src/layouts/BaseLayout.astro`
- `src/pages/index.astro`
- `src/styles/global.css`
- `REPORTE-RONDA-13.md`
