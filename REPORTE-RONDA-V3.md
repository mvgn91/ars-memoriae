# Reporte de construcción v3 — 2026-11-12

Construcción local terminada según TAREA-V3.md, PRD-V3-FINAL-CONSOLIDADO.md y PRD-V2.md §27–§30. COPY-V3.md se trata como texto final por instrucción expresa de TAREA-V3.md, por encima de sus encabezados históricos de borrador. Sin deploy.

## Resultado de comprobaciones

- `npm run build`: **OK**, una página estática en `dist/`, 2.40 s en la comprobación final.
- `./node_modules/.bin/astro check`: **0 errores, 0 advertencias, 0 hints**.
- `node scripts/verificar-v3.mjs`: **OK**. Comprueba ocho bloques literales del copy, un h1, seis secciones, cinco destinos del índice, cuatro pasos, dos FAQ, una sola mención ilustrativa, foto presente en el build y los tres canales reales. Rechaza menciones de duración y cadenas retiradas de v2.
- JavaScript de la página generado por Vite: 6.03 kB, 2.54 kB gzip. Es tamaño del recurso, no medición de rendimiento ni FPS.

## Arquitectura v2 → v3

| Antes | Ahora |
|---|---|
| Hero sin definición, orbe en sección posterior | Hero con titular aprobado, definición breve tomada del copy de servicio, orbe y enlace a Sentido |
| Promesa de una colección a la vez | Sentido, con el párrafo final aprobado |
| Servicio y menú de modalidades | Qué es Ars, con una sola mención ilustrativa y sin formatos cerrados |
| Descubrir / Curar / Registrar / Preservar | Escuchar / Comprender / Acordar / Documentar, con descripciones adoptadas por §27 |
| Archivo terminado y FAQ autónoma | Se elimina la exhibición; dos preguntas contextuales dentro del método |
| Identidad ausente | Quién responde, foto aprobada y ficha de Armando Ibáñez |
| Invitación y pie provisional | CTA aprobado, tres tarjetas de contacto y disclaimer profesional íntegro |
| Sin índice | Índice fijo de cinco destinos, con estado actual y nombres accesibles en móvil |

El quinto momento lleva la etiqueta «Contacto» y el encabezado literal «¿Desea documentar su colección?»: §29 y COPY-V3.md eliminan el encuadre de conversación, aunque el nombre histórico de arquitectura del consolidado sea «Primera conversación».

## Registro editorial

- Se usan literalmente identidad, ficha (nombre y cargo), CTA principal, disclaimer, Sentido y servicio de COPY-V3.md. Sin alternativa «Empezar» ni línea opcional pendiente de la ficha.
- El hero conserva «Su colección, documentada.»; su definición es la frase aprobada «Ars Memoriae documenta colecciones privadas.».
- Se conservan la línea de flexibilidad del método y las descripciones de pasos adoptadas por §27.
- COPY-V3.md no ofrece un bloque FAQ. Para satisfacer Q8 sin inventar respuestas, se reutilizan las preguntas existentes «¿Qué se acuerda?» y «¿Cómo queda el archivo?», con frases literales del disclaimer aprobado. Se documenta esta decisión en §12 del consolidado.
- Se retiran «una colección a la vez», el menú de medios, el archivo expandible, el encuadre de inmortalización, la demostración y el pie provisional. No se añaden muestras, credenciales, clientes, trayectoria ni resultados.
- El disclaimer menciona custodia, conservación permanente y valoración únicamente para negar que se ofrezcan, exactamente como pide el copy aprobado.

## Implementación y trazabilidad

| Requisitos | Construcción |
|---|---|
| V-501 | Retirado el pie provisional y la advertencia de demostración |
| V-502 | Identidad institucional, foto aprobada y ficha antes del CTA; prevalecen §29 y COPY-V3.md sobre la primera persona del consolidado |
| V-503, V-507 | Sin entregable fijo ni menú de modalidades; un solo «Por ejemplo» |
| V-504 | CTA final exacto, tres canales, ninguna duración |
| V-505 | Sentido exacto, sin narrativa de pérdida |
| V-506 | Dos FAQ nativas con `details` / `summary`, accesibles sin JavaScript |
| V-508–V-510, V-515–V-516 | CSS móvil primero, retícula asimétrica en escritorio y escala fluida; h1 máximo 168 px, h2 máximo 92 px; hero móvil mínimo 80svh, sin altura máxima impuesta; índice fijo |
| V-511 | Cuatro pasos acordados, scroll nativo, sin secuestro de navegación |
| V-512–V-513 | Orbe en hero; Silk sin contexto WebGL en móvil; efectos estáticos con reduced motion, pausa por visibilidad, un solo bucle por efecto, límite de actualización de 30 Hz |
| V-514 | `lucide-astro` instalado y usado; WhatsApp en componente SVG propio |
| V-517 | Build, diagnóstico y auditoría automatizada completados; revisión visual asignada a Nyx por el usuario |
| V-518 | Sin publicación, envío al prospecto ni deploy |

Temas uniformes y persistencia con tolerancia a almacenamiento bloqueado; tarjetas de contacto con inversión en hover/foco; acciones flotantes; enlaces accesibles por teclado. Animación de entrada/salida sobre opacidad y transform, con opacidad sola en reduced motion. La salida se calcula desde el final de cada sección para mantener legibles los bloques largos de método y contacto; Nyx debe evaluar su percepción frente a la guía de movimiento.

## Pendientes de Nyx por instrucción del usuario

No se hizo verificación visual ni se instaló Playwright. No se afirma que estas comprobaciones estén aprobadas:

- Capturas y revisión a 390 y 1440 px, temas claro y oscuro, desbordamientos y altura real del hero.
- Navegar los cinco enlaces, verificar estado activo, abrir/cerrar FAQ por teclado y probar tema persistente y acciones flotantes.
- Revisar contraste y foco sobre el fondo, hover de las tarjetas, lectura y salida de cada sección al desplazar, reduced motion.
- Rendimiento en móvil real de gama media, con dispositivo y navegador identificados. No hay medición real ni afirmación de FPS.

La foto usada es el archivo expresamente aprobado del proyecto; su procedencia como edición de la foto real queda documentada en §27 D9. No se presenta como muestra de un trabajo de documentación.
