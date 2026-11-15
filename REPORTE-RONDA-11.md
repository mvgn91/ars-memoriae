# Reporte de cierre — Ronda 11

Fecha: 2026-11-11  
Alcance: T-311 a T-326 de `PRD-V2.md`  
Deploy: no realizado.

## Resultado

Ronda 11 implementada en el frontend de ARS Memoria 2.

- T-311: cada `[data-reveal]` usa un único timeline GSAP con `scrub: 0.45`, entrada, hold y salida; reduced motion conserva solo el fade de entrada.
- T-312: se añadieron los tres h2 dominantes autorizados: “Una colección a la vez.”, “Cuatro pasos.” y “El archivo queda en privado.”; los pasos usan `--size-step` y columnas separadas.
- T-313: se eliminó el sistema de blobs por sección; el fondo continuo queda concentrado en `.ambient-field`.
- T-314–T-319: se redujeron alturas vacías, se ajustaron metamorfosis/archivo/FAQ, ancho de h2, etiquetas, huecos móviles y centrado del cierre.
- T-320–T-323: tarjetas de contacto en dos niveles, WhatsApp como tarjeta primaria, superficies de tema unificadas, orbe claro con filo, anillos ocultos en móvil y controles de 44 px con safe area.
- T-324: reduced motion no ejecuta salidas de sección ni desplazamientos.
- T-325: WhatsApp y MVGN abren en pestaña nueva con `noopener noreferrer`; los destinos tienen glifos distintos; FAQ tiene indicador `+`/`−`, hover y focus visible.
- T-326: build validado en verde.

## Copy

El copy aprobado permanece intacto salvo las tres frases nuevas expresamente autorizadas por T-312. La reorganización de las tarjetas de contacto conserva sus destinos y valores.

## Verificación

`npm run build` terminó correctamente:

```text
[build] 1 page(s) built
[build] Complete!
```

También se ejecutó `git diff --check` sin errores. No se hizo deploy.
