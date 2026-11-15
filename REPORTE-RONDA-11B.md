# Reporte de cierre — Ronda 11b

Fecha: 2026-11-11

## Alcance ejecutado

- **T-331 / T-315:** añadido `.about h2 { max-width: min(100%, 18ch); }` en `src/styles/global.css`.
- **T-332 / T-317:** actualizado únicamente `--size-title` a `clamp(2.75rem, 9vw, 9.5rem)`. `--size-hero` y el peso del `h1` permanecen intactos.
- **T-333:** reemplazado el glifo `◌` de la tarjeta de WhatsApp por el mismo SVG de WhatsApp del botón flotante, con `viewBox="0 0 24 24"` y tamaño de glifo.

## Validación

- `npm run build` — **verde**.
- Verificación fuente: selector de T-331, escala de T-332 y SVG de T-333 presentes.
- Verificación del artefacto: la tarjeta de WhatsApp renderiza el SVG en `dist/index.html`.
- Sin deploy.

No se realizaron cambios fuera de estos tres puntos de la Ronda 11b.
