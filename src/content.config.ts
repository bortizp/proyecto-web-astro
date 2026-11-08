import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const referencias = defineCollection({
  loader: file("src/content/referencias.json"),
  schema: z.object({
    referencia: z.string(),
    tipo: z.enum(["primaria", "secundaria"]),
    fechaDato: z.string(),
    fechaConsulta: z.string(),
    url: z.url(),
    seccion: z.string(),
  }),
});

const malla = defineCollection({
  loader: file("src/content/malla.json"),
  schema: z.object({
    semestre: z.number().int().min(1).max(12),
    asignatura: z.string(),
    creditos: z.number().optional(),
  }),
});

const campoLaboral = defineCollection({
  loader: file("src/content/campo-laboral.json"),
  schema: z.object({
    dato: z.string(),
    valor: z.string(),
    anio: z.number().int(),
    fuenteId: z.string().regex(/^F\d{2}$/),
  }),
});

const faq = defineCollection({
  loader: file("src/content/faq.json"),
  schema: z.object({
    pregunta: z.string(),
    respuesta: z.string(),
    fuenteId: z.string().regex(/^F\d{2}$/),
  }),
});

export const collections = { referencias, malla, campoLaboral, faq };
