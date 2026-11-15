# ARS MEMORIAE — PRD v3 consolidado

**Versión:** 3.0 — consolidación estratégica para revisión y ejecución condicionada  
**Fecha:** 11 de noviembre de 2026  
**Base documental:** `PRD v3, requisición sola.md` (V-501–V-518), `Ars_Memoriae_revision_estrategica_PRD_v3_para_Nyx.md` y `Contrapropuesta completa de Nyx.md`.  
**Estado:** especificación consolidada; **NO autoriza construcción, despliegue ni presentación al prospecto** sin aprobación explícita del propietario. Los textos propuestos no se consideran aprobados salvo donde se indique.

## 1. Objetivo

Reestructurar Ars Memoriae para que su sitio comunique con claridad y sensibilidad una práctica de **documentación y organización digital de colecciones y archivos privados**, adaptable a las necesidades de cada propietario, sin parecer una página creada para un prospecto particular. El problema de v2 no es solo visual: el sitio despierta interés pero no establece suficiente confianza ni explica con precisión cómo se define el servicio.

La v3 es una **reconstrucción de arquitectura narrativa, contenido y composición**, no una ronda de retoques. Debe conservar una identidad editorial sobria, elevar la claridad comercial y permitir que un visitante comprenda la propuesta sin tener que salir del sitio para averiguar quién responde.

## 2. Definición estratégica del servicio

- **La colección preexiste**: Ars no produce los objetos ni crea su valor. Escucha al propietario, comprende su significado y acuerda qué documentar.
- **Finalidad:** contribuir a la continuidad de la memoria y el legado asociados a colecciones y archivos; **capacidades ofrecidas:** documentación, registro y organización digital según alcance pactado.
- **Alcance adaptable:** colecciones privadas, archivos familiares y otros conjuntos documentales o patrimoniales personales; no presentarse como servicio ilimitado de conservación, restauración o investigación histórica.
- **Medios opcionales:** fotografía, video, voz, texto, fichas y otros recursos son ejemplos, no paquetes, formatos obligatorios ni entregables predeterminados.
- **Definición conjunta:** contenidos, medios, límites, privacidad, acceso y entrega se acuerdan por proyecto.
- **Responsabilidad visible:** persona responsable identificable, con MVGN Labs como respaldo profesional, no como sustituto de la identidad humana.
- **Tono:** sensible sin sentimentalismo, discreto sin promesas absolutas, serio, concreto y sin presión emocional. Tratamiento de «usted» en copy institucional; primera persona solo en el bloque personal.

**Principio rector:** primero comprender qué significa una colección para su propietario; después acordar cómo documentarla.

**No prometer por defecto:** conservación perpetua, custodia indefinida, hosting, backups, acceso permanente, crecimiento ilimitado del archivo, confidencialidad absoluta, investigación histórica, derechos o soporte continuado. Estas condiciones requieren alcance y acuerdos verificables.

## 3. Decisiones cerradas en conversación

1. **Aprobado:** conservar **«Cuatro pasos»** y redefinirlos como **Escuchar → Comprender → Acordar → Documentar**. Son un arco metodológico adaptable, no etapas contractuales rígidas. Mantener la línea ya aprobada en v2: «El orden y el peso de cada paso se acuerdan con usted, por proyecto».
2. **Aprobado:** incluir **una sola mención ilustrativa** de recursos posibles (fotografía, video, voz, texto y fichas), expresamente marcada como ejemplo y no como paquete obligatorio.
3. **Dirección acordada:** sensibilidad primero, explicación técnica después; evitar dramatización de pérdida y muerte.
4. **Dirección acordada:** presentar Ars como práctica generalizable, no limitada a un único coleccionista.
5. **Dirección acordada:** incorporar quién responde dentro de la misma página, después del proceso y antes del contacto. La solución preferida es una fotografía auténtica y una presentación breve en primera persona, **sujetas a selección y aprobación final**.
6. **Dirección acordada:** no exhibir un supuesto archivo terminado, una ficha obligatoria por pieza ni muestras ficticias.
7. **Corrección editorial:** evitar la frase «una sola colección a la vez» como promesa o límite operativo no confirmado.

## 4. Arquitectura de información: hero + cinco momentos

| Orden | Momento | Propósito y contenido | Condición |
|---|---|---|---|
| Entrada | **Hero** | Conservar el titular aprobado «Su colección, documentada.» y añadir una línea breve que identifique el servicio. Orbe como sello visual, indicación discreta de scroll. | No convertir el hero en un manifiesto abstracto; el visitante debe saber qué se ofrece. |
| 1 | **Sentido** | Por qué importa documentar aquello que una persona conserva: significado, contexto, conocimiento y continuidad. | Sensibilidad sin miedo, culpa ni dramatismo. |
| 2 | **Qué es Ars** | Definir la práctica, a quién sirve, qué hace y cómo se personaliza. Una sola mención ilustrativa de medios posibles. | Sin catálogo cerrado ni promesa de entregable uniforme. |
| 3 | **Cómo se trabaja** | «Cuatro pasos»: Escuchar, Comprender, Acordar, Documentar. Explicar cómo se determina alcance, materiales, permisos y forma de entrega. Dudas frecuentes útiles, si existen, se integran aquí. | No presentarlos como etapas contractuales fijas. |
| 4 | **Quién responde** | Nombre de la persona responsable, breve presentación auténtica en primera persona, vínculo con MVGN Labs y fotografía real aprobada. | No inventar trayectoria, clientes, credenciales o resultados. |
| 5 | **Primera conversación** | Invitación de bajo compromiso para explorar la necesidad; canales WhatsApp, correo y MVGN Labs. | No imponer una solución ni afirmar duración no confirmada. |

**Se eliminan como secciones autónomas:** «Cómo queda el archivo» entendida como exhibición de un resultado fijo; menú de cuatro modalidades; FAQ redundante. El contenido útil se integra en los momentos anteriores.

## 5. Requisitos funcionales, editoriales y visuales

| ID | Estado consolidado | Requisito y criterio de aceptación |
|---|---|---|
| **V-501** | Conservar | Eliminar del pie «Provisional — andamiaje de diseño v2» y «La demostración no documenta una colección real; el sitio se muestra, no agenda». **Aceptación:** ninguna cadena aparece en el HTML generado. No sustituirlas por afirmaciones falsas. |
| **V-502** | Ampliar | Bloque «Quién responde» en la misma página, entre método y contacto. Nombre real, relación con MVGN Labs, presentación breve en primera persona y fotografía auténtica si se aprueba. **Aceptación:** identidad visible antes del CTA; sin credenciales, experiencia, clientes o resultados inventados; sin promesa de trabajar una sola colección a la vez. |
| **V-503** | Sustituir | Eliminar ficha por pieza obligatoria y descripción cerrada del archivo final. Explicar que contenidos, medios, acceso y entrega se acuerdan con el propietario. Añadir **una única mención ilustrativa** introducida con «por ejemplo» o equivalente inequívoco. **Aceptación:** no existe entregable predeterminado ni sección de exhibición de archivo terminado; el lector entiende cómo se define el resultado. |
| **V-504** | Conservar y ajustar | CTA de primera conversación sin compromiso; sugerencia «Cuénteme qué guarda» (pendiente de aprobación). Conservar tres vías de contacto. No mencionar «20 minutos» hasta confirmar duración. **Aceptación:** el primer paso es claro y no presupone una solución. |
| **V-505** | Reformular | Sustituir la narrativa de pérdida por continuidad y cuidado del conocimiento asociado a una colección. **Aceptación:** sección «Sentido» con una idea sustantiva, sin amenazas de desaparición ni presión emocional. Copy exacto pendiente. |
| **V-506** | Integrar/reducir | Máximo 2–3 preguntas contextuales en «Cómo se trabaja», solo si responden dudas no resueltas: alcance, permisos/privacidad, medios opcionales, acceso/entrega. **Aceptación:** sin FAQ autónoma redundante; respuestas precisas y sin garantías no verificadas. |
| **V-507** | Ampliar | Eliminar repeticiones textuales y conceptuales; recursos audiovisuales enumerados solo una vez, como ejemplos. **Aceptación:** auditoría de contenido y ausencia de promesas duplicadas. |
| **V-508** | Conservar flexible | Diseñar primero a 390 px; una idea dominante por tramo, no una regla mecánica por viewport. **Aceptación:** lectura móvil sin paredes de texto, cortes artificiales o desbordamientos. |
| **V-509** | Reformular | Usar pausas editoriales (cita, numeración de sección, orbe) solo donde aporten ritmo y comprensión. **Aceptación:** no se exige separador entre cada par de secciones; ningún número simula estadísticas o credenciales. |
| **V-510** | Conservar | Jerarquía tipográfica de tres niveles; un solo h1 a escala de hero, h2 menores. **Aceptación:** a 1440 px, h2 ≤ 0.6 × h1 como guía medible del PRD original; comprobar legibilidad y composición. |
| **V-511** | Redefinir, aprobado conceptualmente | Mantener «Cuatro pasos» con **Escuchar, Comprender, Acordar, Documentar**. Eliminar los cuatro modos como menú. Scrollytelling opcional para narrar el método, con scroll natural. **Aceptación:** cuatro pasos correctos, línea de flexibilidad visible, sin scroll-jacking ni formatos convertidos en paquetes. |
| **V-512** | Conservar condicionado | Orbe en hero como sello y, si aporta, como interludio. **Aceptación:** coherencia gráfica y ausencia de interferencia con contenido o navegación. |
| **V-513** | Conservar | Silk por tema: claro más tenue/estructurado, oscuro respetando dirección previa; móvil con versión ligera o estática y soporte `prefers-reduced-motion`. **Aceptación:** medir rendimiento en dispositivo real de gama media; registrar resultados y no declarar 60 FPS sin evidencia. |
| **V-514** | Conservar | Lucide instalado como dependencia para iconografía; WhatsApp como SVG de marca en componente propio. **Aceptación:** sin paths de Lucide copiados manualmente; auditoría de íconos. |
| **V-515** | Ajustar | Composición móvil-first y desktop editorial asimétrico a 1440 px. Índice fijo **opcional**; si existe, corresponde a los cinco momentos. **Aceptación:** diseño asimétrico deliberado, índice coherente o ausente. |
| **V-516** | Conservar y verificar | Hero compacto: título, definición breve, orbe como sello y cue de scroll. Objetivo ≤85svh a 390 px. **Aceptación:** todos los elementos visibles sin recortes ni banda vacía; si el contenido o accesibilidad lo impiden, documentar y elevar la excepción antes de imponer altura. |
| **V-517** | Ampliar | `npm run build`; capturas a 390/1440 en temas claro/oscuro; revisión de accesibilidad, contraste, responsive, rendimiento, iconografía, ritmo, narrativa y promesas comerciales. Reporte `REPORTE-RONDA-V3.md`. **Aceptación:** build exitoso, evidencia de revisión y **sin deploy**. |
| **V-518** | Conservar | Aprobación explícita de Armand antes de presentar el sitio al prospecto o publicarlo. **Aceptación:** no se envía, publica ni despliega sin autorización. |

## 6. Copy: texto aprobado frente a propuestas

**Aprobado previamente y conservado:**

- Hero: **«Su colección, documentada.»**
- Flexibilidad del método: **«El orden y el peso de cada paso se acuerdan con usted, por proyecto.»**
- Estructura metodológica aprobada en esta revisión: **Escuchar, Comprender, Acordar, Documentar**.
- Principio editorial aprobado: una sola mención de medios ilustrativos, sin paquete obligatorio.

**Borradores pendientes de aprobación (NO insertar como definitivos):**

- **Definición breve del hero:** «Documentación y organización digital de colecciones y archivos privados, a la medida de cada propietario.»
- **Sentido:** «Una colección guarda más que objetos: también conserva el conocimiento y el contexto de quien la ha reunido. Documentarla permite dar continuidad a ese conocimiento.»
- **Qué es Ars:** «Ars Memoriae propone documentar y organizar digitalmente colecciones y archivos privados de acuerdo con las prioridades de cada propietario. El alcance, los contenidos, los medios y la forma de entrega se definen en conjunto. Por ejemplo, un proyecto puede recurrir a fotografía, video, voz, texto o fichas; son recursos posibles, no un paquete obligatorio.»
- **Cuatro pasos:**
  1. **Escuchar:** «Conocer la colección y escuchar a quien la conserva.»
  2. **Comprender:** «Identificar qué significa, qué desea documentar y qué prefiere reservar.»
  3. **Acordar:** «Definir alcance, recursos, condiciones y entrega.»
  4. **Documentar:** «Realizar el registro con los medios convenidos.»
- **Quién responde (primera persona; borrador a personalizar):** «Soy Armand Ibañez y estoy detrás de Ars Memoriae, una iniciativa de MVGN Labs. Mi punto de partida es escuchar y comprender qué desea conservar cada propietario, antes de proponer cómo documentarlo. Me involucro personalmente en la definición del proyecto y en las decisiones sobre su alcance.» **No afirmar participación personal en todas las etapas sin confirmación operativa.**
- **CTA:** «Una primera conversación, sin compromiso. Cuénteme qué guarda y qué le gustaría documentar. A partir de ahí podremos explorar una solución adecuada.»

**Nota:** el copy del PRD original que no se ha reproducido aquí sigue sujeto a una auditoría de compatibilidad. No sobrescribir automáticamente texto previamente aprobado sin mostrar diferencias y solicitar autorización.

## 7. Reglas de diseño y tecnología que se conservan

- Paleta: damson `#3E1F3C`, Cloud Dancer `#F0EEE9`, ámbar `#E8A838` (acento restringido, objetivo <10%).
- Tipografías: Cormorant Garamond y DM Sans; máximo dos familias.
- Toggle de tema claro/oscuro uniforme y persistente.
- Divisores ámbar de 1 px donde aporten estructura; no imponerlos si perjudican el ritmo.
- Canon MVGN: botones flotantes abajo a la derecha (volver arriba y WhatsApp), y tres destinos de contacto como tarjetas hover-invert, con alternativas táctiles y foco accesible.
- Diseño móvil primero; desktop editorial asimétrico. Evitar bento repetitivo, WebGL pesado en móvil, iconografía decorativa gratuita y animaciones que secuestren el scroll.
- Respetar `prefers-reduced-motion`; verificar interacción por teclado, legibilidad y contraste.

## 8. Exclusiones expresas

- Casos, testimonios, clientes, certificaciones, experiencia, resultados, colecciones o fotografías de trabajos inexistentes.
- Archivo final ficticio presentado como producto entregado; ficha obligatoria por pieza; paquete fijo de fotografía/video/voz/catálogo.
- Promesas de custodia, disponibilidad, permanencia, privacidad absoluta, soporte, backups o acceso sin acuerdo específico.
- Mensajes de urgencia basados en muerte, deterioro o pérdida como mecanismo de presión.
- Menú de «cuatro modos de registro»; FAQ repetitiva; índice de seis secciones heredado.
- Implementación, deploy o envío al prospecto antes de aprobación.

## 9. Validación y entregables de la ronda de implementación (solo tras aprobación)

1. Comparativa de arquitectura v2 → v3 y justificación de eliminación/fusión de secciones.
2. Registro de copy aprobado, propuesto y retirado; diffs de textos existentes.
3. Build verde y capturas a 390 y 1440 px en ambos temas.
4. Comprobación de navegación, scroll, estados de foco, motion reducido y experiencia táctil.
5. Auditoría de performance en móvil real, incluyendo Silk/orbe y scrollytelling; indicar dispositivo, navegador y observaciones sin inventar métricas.
6. Auditoría de afirmaciones comerciales y privacidad: ninguna garantía o trayectoria no sustentada.
7. `REPORTE-RONDA-V3.md` con cumplimiento de V-501–V-518, excepciones y pendientes.
8. **Sin deploy**; presentar resultados a Armand para veredicto V-518.

## 10. Decisiones aún pendientes de Armand

| Tema | Estado | Regla provisional |
|---|---|---|
| Fotografía personal | Dirección favorable; imagen específica no aprobada | No seleccionar/publicar sin visto bueno. |
| Texto personal en primera persona | Borrador propuesto | No publicar sin aprobación de sus palabras y alcance de responsabilidad. |
| Duración de primera conversación | No confirmada | Omitir «20 minutos». |
| Texto exacto del CTA | «Cuénteme qué guarda» propuesto por Nyx | Pendiente de aprobación editorial. |
| Condiciones de privacidad, permisos, propiedad, acceso, entrega y soporte | No definidas contractualmente | No prometer garantías concretas; acordar por proyecto y formalizar antes de operar. |
| Forma de acreditar competencia sin portafolio | Identidad y método como base | No inventar demostraciones ni trayectoria. |
| Copy final de «Sentido» y presentación del servicio | Propuestas | Revisar con Armand antes de publicación. |
| Necesidad de índice fijo y FAQ contextual | Condicional | Resolver según longitud y utilidad real. |

## 11. Instrucción para Nyx y constructor

**Nyx:** utilizar este documento como **PRD consolidado para revisión final**. Señalar contradicciones, riesgos o requisitos que no puedan implementarse sin resolver las decisiones pendientes. No interpretar borradores de copy como aprobados. Conservar trazabilidad de los 18 IDs y devolver observaciones específicas, no una reescritura silenciosa.

**Constructor (por designar):** no iniciar cambios ni despliegues hasta autorización explícita de Armand. Una vez autorizado, implementar únicamente el alcance aprobado y entregar el reporte de validación antes de cualquier publicación.

**Criterio de éxito:** una persona que llegue sin contexto debe entender **qué es Ars, qué puede documentarse, cómo se acuerda el trabajo, quién responde y cómo iniciar una conversación**, sin sentir que se le vende un formato cerrado, una historia alarmista o una experiencia inexistente.

## 12. Ejecución autorizada — TAREA-V3.md / §30 — 2026-11-12

La orden de ejecución de TAREA-V3.md y §30 sustituye los bloqueos históricos de este documento. COPY-V3.md es la fuente del texto final; su alternativa de CTA y la línea opcional de la ficha no se incorporan. No hay deploy.

1. **V3-01 — Arquitectura:** sustituir v2 por hero y cinco momentos, con índice fijo de cinco enlaces. Comprobación: seis secciones y cinco destinos válidos.
2. **V3-02 — Texto:** integrar literalmente Sentido, servicio, identidad, CTA y disclaimer de COPY-V3.md. Comprobación: comparación de cadenas en HTML; ninguna mención de duración ni CTA descartado.
3. **V3-03 — Método:** mostrar Escuchar, Comprender, Acordar y Documentar con las descripciones adoptadas por §27 y la línea de flexibilidad. Comprobación: cuatro pasos, sin menú de modalidades.
4. **V3-04 — FAQ:** integrar dos preguntas en el método, reutilizando preguntas existentes y frases literales del copy final sobre alcance y privacidad. Comprobación: respuestas accesibles por teclado, sin contenido comercial nuevo.
5. **V3-05 — Identidad:** incorporar armando-ibanez.webp y ficha aprobada. Comprobación: imagen real del proyecto, nombre y cargo exactos; sin línea opcional.
6. **V3-06 — Interfaz:** composición editorial, temas uniformes persistentes, orbe en hero, Silk ligero en móvil, iconos Lucide de dependencia y SVG propio de WhatsApp. Comprobación: navegación, contacto, acciones flotantes, reducción de movimiento y ausencia de desbordamiento.
7. **V3-07 — Validación:** build local, revisión 390/1440 en ambos temas, capturas e informe REPORTE-RONDA-V3.md. Comprobación: registrar evidencia y límites reales; no publicar.
