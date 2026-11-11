# MVGN — Entry Point Universal

```
DOC-REF: NYX/6.0
SIG: Entry Point — Blackboard Pattern
DIVISION: MVGN Labs — Research & Creative Systems Division
NODE: HADS-01
STATE: ACTIVE
VERSION: 6.0.0 (INIT)
```

> Proyecto nuevo. Este archivo es todo lo que un agente necesita para arrancar.
> Provisionado por CNX (`cnx --mvgn-init`): sin red, sin estado del laboratorio.

---

## 1. Detectá el modo

| Condición | Modo |
|:----------|:-----|
| `.mvgn/blackboard/state.json` con `status` distinto de `idle` | **READY** — continuá donde quedó |
| el mismo archivo con `status: idle` | **INIT** — definí la tarea antes de escribir código |
| falta `state.json` o `mvgn-runtime.json` | **REPARAR** — `cnx --mvgn-init .` |

## 2. Lectura obligatoria (y nada más)

1. `.mvgn/blackboard/state.json` — estado, fase, artefactos.
2. `.mvgn/blackboard/context.md` — dominio, convenciones, restricciones.
3. `.mvgn/LAYOUT.md` — qué archivo vive dónde.

**No leas** `MVGN.md`, `docs/mvgn-*.md`, `archive/` ni el repo del lab, salvo que el
operador lo pida. Este INIT no los instala a propósito: el contexto de arranque
pesa menos de 8 KB en total.

## 3. Ciclo de trabajo

1. `docs/00_idea.md` — qué es y para quién (una frase, sin adjetivos).
2. `docs/01_prd.md` — qué se construye. Si no está ahí, no está en alcance.
3. `docs/02_architecture.md` — cómo, con decisión + alternativa + consecuencia.
4. `docs/03_tasks.md` — una tarea = una unidad verificable.
5. `src/` — código. `scripts/` — automatización del proyecto.
6. `docs/04_changelog.md` — qué cambió y por qué.

## 4. Reglas

1. `state.json` es la única fuente de verdad del estado. No lo asumas: leelo.
2. Todo artefacto declarado en `artifacts_generated` debe existir en disco.
3. Actualizá `state.json` al cerrar: `status`, `current_phase`, `timestamp`.
4. Dejá evidencia en `.mvgn/blackboard/logs/execution.log`, no intenciones.
5. No borres ni reescribas trabajo de otro activo sin handoff explícito.
6. El runtime (`.mvgn/`) no se versiona: es local a la máquina.

## 5. Contrato de estado

```json
{
  "schema_version": "6.0.0",
  "task_id": "T-001",
  "task_description": "qué se hace",
  "status": "in_progress",
  "current_phase": 1,
  "agent_sequence": ["<agente>"],
  "completed_agents": [],
  "artifacts_generated": ["ruta/real"],
  "recovered": false,
  "last_error": null,
  "timestamp": "2026-01-01T00:00:00Z"
}
```

`status`: `idle` · `in_progress` · `blocked` · `pending_review` · `completed` · `failed`.

## 6. Presupuesto de contexto

Arranque: ≤ 8 KB (este archivo + `state.json` + `context.md`). Si una tarea exige
cargar documentos largos, decilo antes de hacerlo y justificá por qué.

---

*Crimson Nexus Corporation · MVGN Labs · INIT 6.0 · Investigate. Prototype. Document. Archive.*
