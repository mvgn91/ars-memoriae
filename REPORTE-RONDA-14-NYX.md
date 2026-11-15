# Reporte de cierre — Ronda 14 (Nyx, correcciones propias)

Fecha: 2026-11-11
Proyecto: ARS Memoriae 2
Alcance: PRD-V2.md §24, N-401 a N-406
Ejecutora: Nyx (directo en código, no Codex)
Deploy: no realizado

## Diagnóstico de Nyx (qué le faltaba al sitio)

1. **El ícono de WhatsApp no era Lucide ni la marca real.** Era una imitación dibujada a mano: burbuja + auricular, dos trazos sobrepuestos. A 20–24 px se leía como un bulto con algo adentro — eso es el "sobrepuesto" que veía Armand. Los demás íconos SÍ eran paths exactos de Lucide, pero a stroke-width 1.5–1.75, más delgados que el 2 que usa Lucide por defecto, por eso no se leían como Lucide.
2. **El h2 de metamorfosis quedó en 4 líneas a 144 px**, atrapado en la columna derecha de la sección.
3. **El Silk en claro era el mismo efecto con paleta lavada** (glow [0.91, 0.70, 0.28] sobre crema): no se leía igual que en oscuro.
4. **Mucho texto, pocos descansos:** los bloques de cuerpo no respiraban (line-height 1.5). Corrección de Nyx a su propio PRD: el h2 de promise NO va pegado al cuerpo — el grid ya le da ~65 px de aire — así que no se le agregó margin.

## Cambios aplicados

- **N-401:** WhatsApp → Lucide `message-circle` (path exacto `M7.9 20A9 9 0 1 0 4 16.1L2 22Z`) en el botón flotante (BaseLayout.astro) y en la tarjeta de contacto (index.astro). Enlace a wa.me y etiqueta "WhatsApp" intactos. Lucide no tiene ícono de marca WhatsApp por principio; el bubble es su representación correcta.
- **N-402:** stroke-width a 2 (default de Lucide) en `.floating-action svg`, `.theme-icon`, `.contact-card__glyph svg`, `.faq__icon svg`, `.scroll-cue svg` y `.footer__brand svg`. Auditados: sol, luna, arrow-up, arrow-up-right, at-sign, plus, minus y arrow-down son paths exactos de Lucide.
- **N-403:** h2 de metamorfosis fuera de `.metamorphosis__copy`, hijo directo de la sección, centrado, `max-width: 20ch`; el frame (orbe + nota + modos) bajó de 78vh a 62vh para que el título no flote lejos del orbe.
- **N-404:** Silk en claro con tratamiento distinto: pliegues más amplios y lentos (uniformes `soft: 0.55`, `pace: 0.65` por tema) y glow bronce más profundo [0.85, 0.55, 0.10]. Oscuro intacto (soft 1.0, pace 1.0, glow [0.91, 0.56, 0.12]).
- **N-405:** line-height del cuerpo a 1.65 en desktop (regla de 1.2rem).

## Verificación (medidas reales, Nyx)

| Medida | Antes (R13b) | Después (R14) | Criterio |
|---|---:|---:|---|
| Ícono WhatsApp (imitación) | 2 instancias | 0 | 0 |
| Ícono message-circle (Lucide) | 0 | 2 | 2 |
| Stroke de íconos | 1.5–1.75 px | 2 px | 2 |
| H2 metamorfosis, líneas a 1440 | 4 | 2 | ≤ 2 |
| H2 metamorfosis, centro a 1440 | ~1030 (der.) | 720 | 720 |
| Line-height cuerpo a 1440 | 28.8 px (1.5) | 31.68 px (1.65) | 1.65 |
| Etiquetas centradas a 1440 | todas 720 | todas 720 | 720 |
| H2 promise, líneas a 1440 | 1 | 1 | ≤ 2 |
| H2 / h1 a 1440 | 144 / 209 px | 144 / 209 px | ≥ 1.4× |
| H2 metamorfosis, líneas a 390 | 3 | 2 | — |
| Build | verde | verde | verde |

Capturas: 57-floating-zoom, 58-metamorfosis-1440, 59-invitacion-1440, 61-invitacion-390.

## No verificado por Nyx

El Silk en claro (N-404) está en código y el build lo compila, pero Nyx no pudo renderizar WebGL: su entorno lo bloquea en file:// y la carga del preview https falla por túnel de red. El veredicto del fondo claro es en vivo con Armand. Lo mismo aplica al Silk en oscuro desde R12.

## Archivos tocados en esta ronda

- `src/layouts/BaseLayout.astro`
- `src/pages/index.astro`
- `src/styles/global.css`
- `src/scripts/silk.ts`
- `PRD-V2.md` (§24)
- `REPORTE-RONDA-14-NYX.md`

## Pendiente

- Investigación UI móvil-first + referencias para la v3 (subagente en curso; se reporta aparte).
- Cálculo de modelos de IA (en el reporte a Armand, no aquí).
