# 04 — Changelog

```
DOC-REF: CHANGELOG/1.0
SIG: Change Record
DIVISION: MVGN Labs — Research & Creative Systems Division
NODE: HADS-01
STATE: ACTIVE
ΚΛΕΙΣ: CHNG-001
```

> Formato: [Keep a Changelog](https://keepachangelog.com) + Semantic Versioning.

## [Unreleased]

### Added
- Proyecto inicializado con MVGN 6.0 INIT (`cnx --mvgn-init`).
- Página completa v2 sobre el andamiaje T-001: estructura editorial, ficha ilustrativa única, capacidades y motion base.

### Changed
- Se sustituyó la sección de familias por "Qué es Ars Memoriae" y se eliminó el triplete de entregables.
- Se incorporaron los temas damson / Cloud Dancer, el ejemplo único de huevo ilustrativo y el modo reduced motion.
- El tema claro/oscuro ahora es un interruptor uniforme para toda la interfaz; damson es el valor inicial y la elección persiste en `localStorage`.
- Ronda 2: se eliminaron enumeraciones y copy de plantilla, se añadió ficha técnica AM-001 y se sustituyó el SVG por un objeto canvas fluido con volumen, swirl y brillo especular, inspirado en componentes orb de 21st.dev y React Bits.
- Ronda 3: el hero móvil usa brillo radial suave y grano fino por tema, sin anillos; el hero de escritorio permanece intacto.
- Ronda 4: el interruptor de tema ahora es circular, solo icono SVG, con sol en oscuro y luna en claro; conserva posición, persistencia y accesibilidad.
- Ronda 6: las secciones de contenido ahora responden preguntas, se estandarizó la tipografía a Cormorant Garamond + DM Sans, y se añadieron blobs de fondo sutiles con reduced motion estático.
- R6-fix: `SectionLabel.astro` ahora renderiza sus hijos mediante `<slot />`; las etiquetas aparecen correctamente en el build.
- Ronda 7: el cierre pasa a Contacto con WhatsApp, correo y MVGN Labs enlazados; el MVGN Labs del colofón también apunta a su página real.

### Fixed
- Build estático verificado con `npm run build`.
