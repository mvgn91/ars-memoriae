# Reporte de cierre — Ronda 13b

Fecha: 2026-11-11  
Alcance: PRD-V2.md §23, T-381 a T-384  
Deploy: no realizado

## Corrección y revisión

- **T-381:** en el media query `min-width: 701px`, las etiquetas de contenido llevan `width: 100%; max-width: none; justify-content: center; text-align: center; grid-column: 1 / -1`. `max-width: none` anula el límite heredado de `p { max-width: 40rem; }` (640 px). `grid-column` libera además la etiqueta de promise de la primera columna de su padre grid; en las secciones block el ancho completo resuelve el centrado. Se preserva la exclusión de la etiqueta de marca del hero de esta regla de etiquetas de contenido. A 390 no aplica este media query y las etiquetas conservan la alineación izquierda.
- **T-382:** verificado en código `.promise h2 { grid-column: 1 / -1; max-width: 18ch; }` en desktop. Nyx confirmó el título en **1 línea** a 1440 antes de esta última corrección de etiquetas; la regla del título permanece igual.
- **T-383:** se conservan `--size-title: clamp(4rem, 10vw, 11rem)` y `--size-hero: clamp(4rem, 14.5vw, 14rem)` en desktop. Se elevaron tanto los componentes vw como los topes respecto de R13. En móvil siguen `clamp(2.75rem, 9vw, 9.5rem)` y `clamp(4rem, 13vw, 13rem)`.
- **T-384:** `npm run build` terminó con código 0 y generó `/index.html`. Se comprobó también que el CSS compilado contiene la eliminación de `max-width` y los dos clamps desktop.

## Valores comprobados por lectura y cálculo del CSS

Valores en px, suponiendo raíz de 16 px. Son cálculos de las reglas presentes en fuente y build, no mediciones propias de navegador.

| Valor | 1440 px | 390 px |
|---|---:|---:|
| Tamaño h2 | 144 | 44 |
| Tamaño h1 | 208.8 | 64 |
| Proporción h1:h2 | 1.45× | 1.4545× |
| Padding lateral de sección | 72 | 20 |
| Ancho disponible para etiqueta de contenido | 1296 | 350 |
| Centro horizontal esperado de etiqueta de contenido | 720 | Alineación izquierda desde x=20 |

A 1440, las columnas de promise son 416 y 832 px, separadas por 48 px. La etiqueta y el h2 cruzan las dos columnas. El ancho calculado de la etiqueta pasa a 1296 px al eliminar el tope de 640 px. Estos valores son comunes a ambos temas: no hay reglas de tema que cambien estas dimensiones.

## Líneas y efecto secundario

Nyx aportó medidas reales de promise (1 línea), h2 (144 px), hero (~209 px) y proporción (1.45×). No se atribuyen a Codex esas mediciones.

Deliverable conserva `max-width: 20ch`; about conserva `grid-column: 1 / -1; max-width: 24ch` dentro de su grid. Ambos disponen del ancho de contenido desktop. El número real de líneas depende de la fuente cargada y del ajuste del navegador: no se certifican aquí deliverable ≤2 ni about ≤3 mediante lectura de código. Su confirmación visual queda a cargo de Nyx según la instrucción actualizada del usuario.

Metamorfosis: Nyx observó **4 líneas** con la escala ampliada. La causa de ancho sigue presente: `.metamorphosis__copy { max-width: 34rem; }` limita el bloque a 544 px y además está dentro de una columna de `.metamorphosis__frame`. No se reduce su tipografía ni se altera esa composición en esta corrección de T-381; se deja documentado el efecto para revisión. No existe un criterio de líneas para metamorfosis en §23.

## Entrega y límites de validación

Archivos de esta ronda: `src/styles/global.css`, diagnóstico complementario en `PRD-V2.md` y este reporte. Se preservaron los cambios previos del workspace. La skill `/home/mvgn/skills/mvgn-frontend/SKILL.md` se leyó antes de editar y orientó la revisión de jerarquía y causas raíz; la instrucción posterior del usuario delegó la validación de navegador a Nyx.

No se ejecutó otra instalación de Playwright ni de navegadores tras la instrucción de continuar. No se hizo deploy. La corrección está construida y comprobada en código; la medición final de centrado tras quitar el tope queda para Nyx.
