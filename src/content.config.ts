// Herramienta de Astro para declarar colecciones de contenido.
import { defineCollection } from "astro:content";
// Cargador que lee los datos desde un archivo JSON.
import { file } from "astro/loaders";
// Zod: librería que define la forma que debe tener cada dato. Si no se cumple, el build falla.
import { z } from "astro/zod";

// Colección de fuentes (F01 a F19).
const referencias = defineCollection({
  loader: file("src/content/referencias.json"),
  schema: z.object({
    // Referencia completa en formato APA 7.
    referencia: z.string(),
    // Tipo de fuente: solo "primaria" o "secundaria".
    tipo: z.enum(["primaria", "secundaria"]),
    // Fecha del dato (texto, porque a veces dice "s. f.").
    fechaDato: z.string(),
    // Fecha en que se consultó la fuente.
    fechaConsulta: z.string(),
    // Dirección web válida; si no lo es, el build falla.
    url: z.url(),
    // Sección del sitio donde se usa.
    seccion: z.string(),
  }),
});

// Colección de asignaturas del plan de estudios.
const malla = defineCollection({
  loader: file("src/content/malla.json"),
  schema: z.object({
    // Número de semestre, entero entre 1 y 12.
    semestre: z.number().int().min(1).max(12),
    // Posición de la asignatura según la resolución.
    orden: z.number().int().positive(),
    // Nombre de la asignatura.
    asignatura: z.string(),
    // Área para colorear: base, informática o proyecto.
    area: z.enum(["base", "informatica", "proyecto"]),
    // Créditos SCT (opcional: algunas asignaturas no los tienen).
    creditos: z.number().optional(),
  }),
});

// Colección de cifras del campo laboral.
const campoLaboral = defineCollection({
  loader: file("src/content/campo-laboral.json"),
  schema: z.object({
    // Qué mide la cifra.
    dato: z.string(),
    // Valor tal como se muestra (por ejemplo "87,1 %").
    valor: z.string(),
    // Año del dato: es obligatorio, porque toda cifra debe llevar su año.
    anio: z.number().int(),
    // Código de la fuente, con formato F00 (por ejemplo F13).
    fuenteId: z.string().regex(/^F\d{2}$/),
  }),
});

// Colección de preguntas frecuentes.
const faq = defineCollection({
  loader: file("src/content/faq.json"),
  schema: z.object({
    // Posición de la pregunta en la lista.
    orden: z.number().int().positive(),
    // Texto de la pregunta.
    pregunta: z.string(),
    // Respuesta: una lista de párrafos, con al menos uno (.min(1)).
    respuesta: z
      .array(
        z
          .object({
            // Texto del párrafo.
            texto: z.string(),
            // Tipo de párrafo: dato, interpretación o testimonio.
            tipo: z.enum(["dato", "interpretacion", "testimonio"]).optional(),
            // Códigos de fuente del párrafo (puede estar vacía si no es un dato).
            fuentes: z.array(z.string().regex(/^F\d{2}$/)).default([]),
          })
          // Regla propia: todo párrafo marcado como "dato" necesita al menos una fuente; si no, el build falla.
          .refine((p) => p.tipo !== "dato" || p.fuentes.length > 0, {
            message:
              "Todo dato necesita al menos una fuente (por ejemplo F13).",
          }),
      )
      .min(1),
  }),
});

// Registra las cuatro colecciones para que Astro las use.
export const collections = { referencias, malla, campoLaboral, faq };
