# Análisis del board FigJam: Mapa Self-Service UX Research

**Origen:** [Figma Board – Feedback](https://www.figma.com/board/68ClNufnLaQizk3ZjlhXdb/Feedback?node-id=286-1051)  
**Objetivo del proceso:** Un flujo de UX research en modo self-service, estructurado y sencillo, para que colaboradores que no son UXR obtengan insights iniciales sobre los productos que quieren desarrollar.

---

## 1. Resumen general

El board describe un **mapa de proceso en 6 bloques** (Fase 0 → Fase 4 + dos checkpoints) que guía a un **Product Owner (PO)** desde el entendimiento del estudio hasta el análisis y las recomendaciones, usando **User Interviews** (reclutamiento/agenda) y **Sondar.ai** (estudios asíncronos y análisis con IA).

- **Fase 0 – Entendimiento y selección de estudio:** El PO no sabe qué método usar; se propone un documento/formulario obligatorio con un “árbol de decisión” (ej.: etapa Discovery vs Validación; Usability vs Concept testing) y, opcionalmente, una sesión rápida con UXR.
- **Fase 1 – Logística y reclutamiento:** Uso de User Interviews con una plantilla maestra (ej. contadores fiscalistas MX), filtros por profesión verificada, enlace a calendario del PO y agendamiento automático. Output: usuarios finales reales.
- **Fase 2 – Preparación de estudio:** Dos caminos claros: **asíncrono** (PO prepara contexto y prototipo en Sondar.ai; la herramienta sugiere tareas/escenarios) y **síncrono** (PO prepara guion; librería de preguntas y tareas aprobadas por UXR para evitar sesgos).
- **Checkpoint 1 – Validación/liberación:** Revisión del estudio en Sondar (tareas sin sesgo, orden lógico, prototipo funcional) y formato de aprobación (pregunta de negocio, método, links a prototipo y screener, script). Solo después se da el “GO”.
- **Fase 3 – Ejecución y moderación:** Generación de link de estudio (Sondar.ai) o reclutamiento vía User Interviews. Asíncrono: enlace a participantes, IA analiza interacción. Síncrono: sesión en vivo (Teams), compartir pantalla, grabar y transcribir para IA.
- **Fase 4 – Análisis/recomendaciones:** Asíncrono: PO lee resumen de IA + 3 clips aleatorios para validar; output = captura del dashboard de patrones + 1 clip de evidencia. Síncrono: IA + transcripciones, plantilla de análisis UXR, incentivo vía User Interviews, micro-reporte del PO.
- **Checkpoint 2 – Validación/liberación:** Revisión del micro-reporte, detección de sesgos y revisión detallada de recomendaciones; también revisión de posibles “alucinaciones” de la herramienta y de la evidencia en Sondar.

El flujo está pensado para que el **UXR** configure plantillas y librerías una vez, y el **PO** pueda ejecutar estudios con guardrails (documento obligatorio, checkpoints, preguntas/tareas aprobadas) sin ser investigador.

---

## 2. Aciertos

- **Fases numeradas y secuenciales (0–4)**  
  Facilita seguir el proceso en orden y explicar “en qué fase estoy” a equipos no UXR.

- **Doble vía asíncrono / síncrono**  
  Cubre tanto “validar rápido sin coordinar agendas” (Sondar.ai) como “entrevista en vivo con pantalla compartida” (User Interviews + Teams), con pasos distintos en preparación, ejecución y análisis.

- **Checkpoints de validación antes y después**  
  El checkpoint 1 evita lanzar estudios mal definidos o sesgados; el checkpoint 2 obliga a revisar resultados y evidencia antes de dar por buenos los insights. Muy alineado con calidad y self-service controlado.

- **Árbol de decisión en Fase 0**  
  Responde al problema explícito del board: “PO no sabe qué instrumento/método usar”. Un documento o form con preguntas tipo “¿En qué etapa estás?” / “¿Qué quieres saber?” (Discovery, Validación, Usability, Concept testing) da un criterio claro y evita que todo caiga en “entrevista” por defecto.

- **Rol claro de UXR vs PO**  
  UXR configura plantillas de reclutamiento, librería de preguntas y tareas aprobadas; PO ejecuta dentro de ese marco. Reduce sesgos (p. ej. “¿te gusta?”) y mantiene el proceso escalable.

- **Protección de la base de participantes**  
  Que la herramienta bloquee al PO para no contactar al mismo usuario dos veces seguidas protege fatiga y base de datos, y refuerza el uso de un solo hub (User Interviews).

- **Mitigación de alucinaciones de IA**  
  En Fase 4 y Checkpoint 2 se exige revisar resumen de IA con clips aleatorios y evidencia concreta (captura + clip), no solo confiar en el texto generado.

- **Outputs concretos**  
  Se definen entregables por camino: usuarios reclutados, link de estudio, micro-reporte, captura de patrones + clip de evidencia, lo que ayuda a que el PO sepa “qué tiene que entregar” en cada fase.

---

## 3. Sugerencias de mejora

### 3.1 Claridad y uso real del mapa

- **Un solo “mapa maestro” por vista**  
  El board es denso; para no investigadores puede ser abrumador. Sugerencia: un **resumen de una página** (o un segundo frame “Resumen”) con solo: Fase 0 → 1 → 2 → Check 1 → 3 → 4 → Check 2, una línea por fase + “Asíncrono vs Síncrono” solo donde aplica. El mapa actual quedaría como referencia detallada.

- **Leyenda mínima**  
  Añadir una leyenda breve: qué significan los iconos (campana, “?”, “GO”), los óvalos (outputs, decisión) y los conectores (flujo, alternativas). Así cualquier colaborador entiende la convención sin preguntar.

- **Responsable por fase**  
  Indicar en cada fase quién hace qué: “PO”, “DM”, “UXR”, “Sondar/User Interviews”. Hoy está implícito pero no escrito en cada bloque; explicitarlo reduce dudas en self-service.

### 3.2 Fase 0 y onboarding

- **Formulario obligatorio como artefacto único**  
  El board menciona “documento simple o form” y “árbol de decisión”. Conviene **definir un solo artefacto** (p. ej. “Ficha de estudio” en Typeform/Notion) con: árbol de decisión + propósito + target + momento (concept, usability, etc.). Que ese form sea el único punto de entrada antes de tocar Sondar o User Interviews.

- **Cuándo es obligatoria la sesión con UXR**  
  Dejar claro si la “sesión rápida con UXR” es siempre recomendada o solo cuando el PO marca “no estoy seguro” en el form. Así se evita cuello de botella y se mantiene el self-service.

### 3.3 Checkpoints

- **Criterios de “GO” y de cierre**  
  En Checkpoint 1: listar 3–5 criterios de aprobación explícitos (ej. “Tareas sin sesgo”, “Prototipo enlazado”, “Script revisado”). En Checkpoint 2: criterios para dar por válido el micro-reporte (ej. “Al menos 1 clip revisado”, “Evidencia alineada con resumen de IA”). Así el proceso es auditable y repetible.

- **Quién aprueba**  
  Indicar si el GO y el cierre los da UXR, el DM o el mismo PO con checklist. Evita que “validación” quede difusa.

### 3.4 Herramientas y flujo

- **Nombres y orden de herramientas**  
  Unificar nombre (Sondar.ai vs Sondear.AI en descripciones) y, en el mapa, el orden lógico: primero reclutamiento (User Interviews) y luego ejecución (Sondar link o sesión en vivo). El board ya lo sugiere; dejarlo muy explícito ayuda a quien no conoce las herramientas.

- **Frecuencia y límites**  
  Si hay límites (ej. “100 usuarios/mes” o “X estudios por PO al mes”), ponerlos en Fase 1 o en una nota del board para que el self-service no choque con restricciones no escritas.

### 3.5 Riesgos y sesgos

- **Librería de preguntas y tareas**  
  El board menciona “Librería de preguntas aprobadas” y “Tareas y escenarios aprobados” pero no dónde viven. Sugerencia: un solo lugar (Notion, Confluence, Sondar) enlazado desde el mapa y desde la Ficha de estudio, para que el PO siempre use la versión aprobada.

- **Plantilla de análisis (síncrono)**  
  Que “UXR trabajará con esta plantilla según el objetivo” está bien; añadir “el PO usa la misma plantilla en self-service” y un link a la plantilla evita que cada uno invente su propio análisis.

### 3.6 Métricas y mejora continua

- **Éxito del proceso**  
  No hay definición de “qué bien funciona esto”. Sugerencia: 2–4 métricas simples (ej. “% de estudios que pasan Checkpoint 1 a la primera”, “tiempo desde Fase 0 hasta micro-reporte”, “NPS del PO con el proceso”). Así se puede mejorar el mapa con datos.

- **Retroalimentación**  
  Un paso corto al final: “PO completa 3 preguntas sobre el proceso” (opcional) para detectar fricciones y ajustar textos del board o del form.

---

## 4. Conclusión

El board ofrece un **proceso de self-service UX research bien estructurado**: fases claras, dos modos (asíncrono/síncrono), checkpoints de calidad, rol definido entre UXR y PO, y cuidado con sesgos y alucinaciones de IA. Para que colaboradores no UXR lo usen con confianza, conviene añadir una **vista resumida**, **un solo formulario de entrada (Fase 0)**, **criterios explícitos de validación en los checkpoints** y **una leyenda y responsables por fase**. Con esos ajustes, el mapa está muy bien posicionado para ser la referencia única del proceso de insights iniciales para productos.
