# TAREA-V3 — Construir ARS MEMORIA 2 v3 — 2026-11-12

## Primero, antes de tocar código

Lee `/home/mvgn/skills/mvgn-frontend/SKILL.md` completa. Es la guía de construcción frontend del proyecto. Aplícala.

## Especificación (léela toda)

1. `PRD-V3-FINAL-CONSOLIDADO.md` — la especificación operativa de la v3.
2. `PRD-V2.md` §27, §28, §29 y §30 — decisiones de Armand que modifican el consolidado.
3. `COPY-V3.md` — el copy final aprobado. **Úsalo exacto. No lo reescribas, no inventes copy, no agregues frases.**

## Qué construir

La v3 del sitio en este proyecto (Astro). Reemplaza la implementación v2. Arquitectura: hero + cinco momentos (Sentido, Qué es Ars, Cómo se trabaja, Quién responde, Primera conversación) + índice fijo + FAQ contextual (2–3 preguntas) + disclaimer profesional + bloque de contacto (WhatsApp, correo, sitio).

Foto de identidad: `public/armando-ibanez.webp` (1600×1600, blanco y negro), en el bloque "Quién responde", con la ficha (nombre y cargo) según COPY-V3.md.

## Reglas duras (decisiones de Armand)

- **La duración no se menciona en ninguna parte de la página.** Nada de "20 minutos", ni en el CTA ni en la FAQ ni en ninguna sección. Jamás.
- **No usar "Cuénteme qué guarda".** El CTA es el de COPY-V3.md.
- Identidad en el registro aprobado (COPY-V3.md): describe la iniciativa y nombra a quién está a cargo; sin primera persona, sin tercera persona autorreferencial.
- Sin muestras ficticias, sin fotos inventadas, sin promesas de permanencia, custodia, conservación permanente ni valoración.
- El copy es el de COPY-V3.md, exacto.
- **No deploy.** Solo build local.

## Criterios de aceptación

- `npm run build` verde, sin errores.
- Arquitectura hero + 5 momentos + índice fijo + FAQ + disclaimer + contacto.
- Copy exacto de COPY-V3.md en cada sección.
- Foto `public/armando-ibanez.webp` en "Quién responde".
- Tema claro/oscuro uniforme y persistente; responsive 390 y 1440.
- Cero menciones de duración en toda la página.

## Al terminar

Reporta qué hiciste, el resultado del build y cualquier cosa que no pudiste resolver. No despliegues nada.
