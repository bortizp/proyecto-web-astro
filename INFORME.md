# Informe del proyecto: sitio web de la carrera de Ingeniería en Informática (UTEM)

**Asignatura:** EFE685 – Departamento de Informática y Computación, Universidad Tecnológica Metropolitana (UTEM)
**Docente:** Sebastián Salazar Molina
**Fecha de entrega:** 13 de noviembre de 2026
**Sitio publicado:** [pegar URL del sitio]
**Repositorio:** [Repositorio](https://github.com/bortizp/proyecto-web-astro.git)

## Integrantes

| Integrante         | Rol en el proyecto                    |
| ------------------ | ------------------------------------- |
| Bastian Ortiz      | Fuentes e investigación institucional |
| Carolaine Palacios | Audiencia, redacción y validación     |
| Marcos Fuentes     | Técnico y despliegue                  |

---

## 1. Resumen

Este proyecto es una página web de una sola vista que presenta la carrera de Ingeniería en Informática de la UTEM. Está pensada para estudiantes de 3.° y 4.° medio y sus familias. Su público secundario son personas que quieren cambiar de carrera o que terminaron la enseñanza media hace tiempo.

La página responde las preguntas que se hace quien evalúa estudiar la carrera: qué es, qué se aprende, qué se puede hacer al egresar, qué respaldo tiene y cómo se postula.

Dos reglas guiaron todo el trabajo:

- Ninguna cifra ni dato verificable aparece sin su fuente citada.
- No se usan frases publicitarias genéricas, como "la mejor carrera", sin evidencia.

## 2. Cómo se trabajó

El contenido se planificó antes de construir la página, en cinco fases. Se hizo así para que cada afirmación del sitio se pueda rastrear hasta una fuente y responda a una duda real del público, y no a una suposición del equipo.

| Fase | Qué se hizo                        | Producto                                  |
| ---- | ---------------------------------- | ----------------------------------------- |
| A    | Búsqueda y evaluación de fuentes   | Matriz de fuentes                         |
| B    | Encuesta al público objetivo       | Perfil de usuario y preguntas priorizadas |
| C    | Diseño de las secciones y su orden | Mapa de contenidos y wireframes           |
| D    | Redacción de los textos            | Textos finales con cifras citadas         |
| E    | Prueba con personas del público    | Registro de validación                    |

---

## 3. Fase A – Matriz de fuentes (Producto A)

> **PENDIENTE.** Aquí va la matriz completa: mínimo 8 fuentes, al menos 5 primarias. Cada fila lleva ID, referencia en formato APA 7, tipo (primaria o secundaria), fecha del dato, fecha de consulta, evaluación con los cinco criterios (autoridad, vigencia, trazabilidad, objetividad y pertinencia, cada uno con "cumple" o "no cumple" y su justificación) y la sección del sitio donde se usa.

| ID  | Referencia (APA 7) | Tipo        | Fecha del dato | Fecha de consulta | Evaluación  | Sección donde se usa |
| --- | ------------------ | ----------- | -------------- | ----------------- | ----------- | -------------------- |
| F01 | [completar]        | [completar] | [completar]    | [completar]       | [completar] | [completar]          |

---

## 4. Fase B – Análisis de audiencia (Producto B)

### 4.1 Instrumento y muestra

- Se aplicó un cuestionario breve en Google Forms, de 7 preguntas, que toma unos 3 minutos (Anexo B1).
- El formulario informaba que la participación era voluntaria y anónima, que no se pedía nombre, RUT ni correo, que las respuestas se usarían solo en el proyecto y se presentarían agrupadas, y que la persona podía dejar de responder cuando quisiera.
- Se recibieron 6 respuestas el 7 de noviembre de 2026. En este informe se identifican con los códigos E1 a E6.
- Perfiles: 2 estudian 4.° medio, 1 es egresado/a de media y 3 marcaron "Otro". Nadie marcó "Soy familiar de un/a estudiante de media" ni "Quiero cambiarme de carrera o estudiar algo nuevo". El formulario no incluía la opción de 3.° medio.

### 4.2 Perfil de usuario (persona tipo)

Es una síntesis de las respuestas, no una persona real. Cada dato indica cuántas de las 6 personas lo mencionaron.

| Elemento                              | Descripción                                                                                                                                                                                                                                                                                                     |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Contexto**                          | Estudia 4.° medio o ya terminó la media y evalúa estudiar Informática. Conoce la carrera "a medias": 3,0 de 5 en promedio (rango de 2 a 5).                                                                                                                                                                     |
| **Preguntas principales**             | ¿Hay trabajo al titularse? (4 de 6). ¿Cuánta matemática hay? (4 de 6). ¿Cuántos años dura, cuánto se gana y qué puntajes piden? (3 de 6 cada una).                                                                                                                                                              |
| **Dudas o creencias a revisar**       | Exigencia de matemática (promedio de acuerdo 3,0 de 5). Que la IA deje sin trabajo a los informáticos (2 de 6 de acuerdo, con 4 o 5). Que sea más para hombres que para mujeres (2 de 6). Que solo se programe (1 de 6). Nadie estuvo de acuerdo (4 o 5) con que se pueda encontrar trabajo antes de titularse. |
| **Barreras (qué le hace desconfiar)** | Información desactualizada, que no hable de las dificultades y que sean solo fotos bonitas con poca información (3 de 6 cada una). Frases como "la mejor carrera" sin respaldo y cifras sin decir de dónde salen (2 de 6 cada una).                                                                             |
| **Canal por el que llega**            | Instagram, TikTok o YouTube (4 de 6), sitio de la universidad (3 de 6) y familia o amistades (2 de 6). Profesores u orientadores y ferias vocacionales, 1 de 6 cada uno. Nadie marcó Mi Futuro.                                                                                                                 |

### 4.3 Preguntas priorizadas por frecuencia

| #   | Pregunta del público              | Personas | Sección del sitio                                                       | Fuente que se usará              |
| --- | --------------------------------- | -------- | ----------------------------------------------------------------------- | -------------------------------- |
| 1   | ¿Hay trabajo al titularse?        | 4 de 6   | Campo laboral                                                           | Mi Futuro u otra fuente primaria |
| 2   | ¿Cuánta matemática hay?           | 4 de 6   | Plan de estudios y preguntas frecuentes                                 | Malla o decreto oficial          |
| 3   | ¿Cuántos años dura?               | 3 de 6   | Sobre la carrera                                                        | Sitio oficial o decreto          |
| 4   | ¿Cuánto se gana?                  | 3 de 6   | Campo laboral                                                           | Mi Futuro                        |
| 5   | ¿Qué puntajes y requisitos piden? | 3 de 6   | Admisión                                                                | DEMRE y admisión de la UTEM      |
| 6   | ¿Qué se estudia?                  | 2 de 6   | Plan de estudios                                                        | Malla o decreto oficial          |
| 7   | ¿Qué se hace en el día a día?     | 2 de 6   | Perfil de egreso                                                        | Perfil de egreso oficial         |
| 8   | ¿Cómo es la vida de estudiante?   | 2 de 6   | Sobre la carrera (testimonio del equipo, marcado como opinión personal) | Experiencia del equipo           |

Opciones que nadie marcó (0 de 6): "Costo y gratuidad" y "Si la carrera está acreditada". La sección de Respaldo institucional se incluye igual porque es obligatoria.

Pregunta abierta (P7). Se consideran para la sección de preguntas frecuentes: "¿Qué es lo más complicado de la carrera?", "¿Qué tan posible es ser nómada digital?" y "¿Qué es lo que más te apasiona de lo que estudiaste?" (1 persona cada una). Quedaron fuera 1 comentario sobre la propia encuesta y 1 pregunta sobre el estereotipo "¿Eres hacker?", que el equipo decidirá si aborda; 1 persona no respondió esta pregunta.

### 4.4 Cómo orienta el diseño del sitio

- Campo laboral y Plan de estudios deben ser fáciles de encontrar, porque responden las dos preguntas más frecuentes.
- Las preguntas frecuentes incluyen la exigencia de matemática, el efecto de la IA y la participación de mujeres, cada una con su fuente.
- Cada cifra lleva su fuente y año. El sitio muestra la fecha de actualización y habla de las dificultades de la carrera, porque eso genera desconfianza cuando falta.

### 4.5 Limitaciones

Con 6 respuestas, los resultados son tendencias y no porcentajes de la población. No se cubrió el público secundario (familias y personas que quieren cambiar de carrera).

---

## 5. Fase C – Arquitectura de información (Producto C)

> **PENDIENTE.** Aquí va el mapa de contenidos con el orden de las secciones justificado a partir de la Fase B, los wireframes de baja fidelidad en móvil y escritorio, y la relación entre cada sección y sus fuentes (por ID de la matriz).

Secciones obligatorias del sitio: Portada, Sobre la carrera, Perfil de egreso, Plan de estudios, Campo laboral, Respaldo institucional, Admisión, Preguntas frecuentes y Referencias.

| Orden | Sección | Por qué va en este lugar | Fuentes (IDs) |
| ----- | ------- | ------------------------ | ------------- |
| 1     | Portada | [completar]              | [completar]   |

---

## 6. Fase D – Redacción (Producto D)

> **PENDIENTE.** Los textos finales están en archivos Markdown o JSON dentro del repositorio, en `src/content/`, separados por sección. Aquí se explican los criterios de redacción: oraciones de menos de 25 palabras, voz activa, siglas explicadas la primera vez, cada cifra con su año y su cita enlazada a Referencias, y distinción visual entre dato institucional, interpretación del equipo y testimonio.

---

## 7. Fase E – Validación con usuarios (Producto E)

> **PENDIENTE.** Aquí va el registro de la prueba con al menos 3 personas del público objetivo: tareas pedidas (por ejemplo, encontrar el plan de estudios, la acreditación y las vías de admisión), hallazgos, correcciones aplicadas y evidencias.

| Código | Tarea       | Resultado   | Hallazgo    | Corrección aplicada |
| ------ | ----------- | ----------- | ----------- | ------------------- |
| V1     | [completar] | [completar] | [completar] | [completar]         |

---

## 8. Decisiones de implementación

> **PENDIENTE.** Explicar con palabras simples por qué se tomaron las decisiones técnicas: uso de Astro, contenido separado del diseño en colecciones validadas (si un dato no cumple el esquema, el sitio no se construye), un componente por sección y un diseño base común, y la justificación de la isla interactiva si se incluye.

## 9. Resultados de calidad

> **PENDIENTE.** Completar con los resultados medidos.

| Medición               | Herramienta       | Meta               | Resultado   |
| ---------------------- | ----------------- | ------------------ | ----------- |
| Rendimiento            | pagespeed.web.dev | 90 o más           | [completar] |
| Accesibilidad          | pagespeed.web.dev | 90 o más           | [completar] |
| Buenas prácticas       | pagespeed.web.dev | 90 o más           | [completar] |
| SEO                    | pagespeed.web.dev | 90 o más           | [completar] |
| Accesibilidad WCAG 2.2 | compliascan.com   | 90/100 o más       | [completar] |
| Diseño responsivo      | Revisión manual   | 360, 768 y 1280 px | [completar] |

---

## 10. Declaración de uso de inteligencia artificial

Se usó Claude (Anthropic) como apoyo. Ningún dato se tomó de la IA sin verificarlo: las cifras provienen de las respuestas de la encuesta y de las fuentes de la matriz.

| Herramienta | Tarea                                                 | Prompt (resumen)                                                | Qué se modificó del resultado                                                                                                                                                      |
| ----------- | ----------------------------------------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Claude      | Resumir el documento del profe y organizar el trabajo | Resumen del documento y tareas por rol y por día                | Se usó como guía de organización; los requisitos se verificaron contra el documento original del profe.                                                                            |
| Claude      | Instalación y configuración inicial de Astro          | Qué instalar y cómo instalar TypeScript                         | Los comandos se ejecutaron en el equipo del autor. El comando para instalar astro check falló y se reemplazó por `npm install --save-dev @astrojs/check typescript`.               |
| Claude      | Borrador del cuestionario                             | Cuestionario breve para conocer las dudas del público           | El equipo rehízo gran parte: agregó la escala de acuerdo con 5 frases (P4), la pregunta sobre qué genera desconfianza (P6), la opción Mi Futuro y un texto de introducción propio. |
| Claude      | Ordenar las respuestas en una planilla                | Ordenar el Excel para que sea fácil de leer                     | Se completó con las opciones del formulario que nadie marcó y se corrigió la muestra (no había opción de 3.° medio) al compararlo con el formulario real.                          |
| Claude      | Redactar el Producto B y el Anexo B1                  | Perfil de usuario, tabla de preguntas y cuestionario como anexo | Se ajustó la descripción de la muestra y del instrumento al formulario real y se revisaron las cifras contra las respuestas.                                                       |

El código generado con ayuda de IA está documentado línea a línea en los comentarios del propio código.

---

## Anexos

### Anexo A1 – Matriz de fuentes completa

> **PENDIENTE.**

### Anexo B1 – Cuestionario aplicado

Formulario de Google Forms, 7 preguntas, unos 3 minutos. Texto de introducción: la encuesta es voluntaria y anónima, no pide nombre, RUT ni correo, las respuestas se usan solo en el proyecto y se presentan agrupadas, y se puede dejar de responder cuando se quiera. Copia del formulario: `docs/Anexo_B1_Instrumento.pdf`.

1. **¿Cuál es tu situación?** (una opción)
   - Estudio 4° medio
   - Soy egresado/a de media
   - Soy familiar de un/a estudiante de media
   - Quiero cambiarme de carrera o estudiar algo nuevo
   - Otro

2. **¿Qué tanto sabes de lo que hace un/a ingeniero/a en informática?** Escala de 1 ("nada") a 5 ("mucho").

3. **¿Qué información necesitarías para decidir si estudiar esta carrera?** (máximo 3)
   - Qué se estudia (malla)
   - Cuántos años dura
   - Costo y gratuidad
   - Si hay trabajo al titularse
   - Cuánto se gana
   - Puntajes y requisitos de ingreso
   - Cuánta matemática hay
   - Qué se hace en el día a día de la profesión
   - Si la carrera está acreditada
   - Cómo es la vida de estudiante
   - Otra

4. **¿Qué tan de acuerdo estás con estas frases?** Escala de 1 ("nada de acuerdo") a 5 ("muy de acuerdo").
   - Hay que ser muy bueno/a en matemáticas para estudiarla.
   - La inteligencia artificial va a dejar sin trabajo a los informáticos.
   - Es una carrera donde solo se programa.
   - Es una carrera más para hombres que para mujeres.
   - Se puede encontrar trabajo antes de titularse.

5. **¿Dónde buscas información cuando eliges una carrera?**
   - Sitio de la universidad
   - Mi Futuro
   - Instagram, TikTok o YouTube
   - Profesores u orientadores
   - Familia o amistades
   - Ferias vocacionales
   - Otras

6. **¿Qué te haría desconfiar de una página que promociona una carrera?**
   - Frases como "la mejor carrera" sin respaldo
   - Cifras sin decir de dónde salen
   - Solo fotos bonitas y poca información
   - Información desactualizada
   - Que no hable de las dificultades
   - Otra

7. **Si pudieras hacerle una sola pregunta a un/a estudiante o titulado/a de Informática, ¿qué le preguntarías?** (respuesta abierta)
