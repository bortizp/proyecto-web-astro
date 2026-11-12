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
    orden: z.number().int().positive(),
    asignatura: z.string(),
    area: z.enum(["base", "informatica", "proyecto"]),
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
    orden: z.number().int().positive(),
    pregunta: z.string(),
    respuesta: z
      .array(
        z
          .object({
            texto: z.string(),
            tipo: z.enum(["dato", "interpretacion", "testimonio"]).optional(),
            fuentes: z.array(z.string().regex(/^F\d{2}$/)).default([]),
          })
          .refine((p) => p.tipo !== "dato" || p.fuentes.length > 0, {
            message:
              "Todo dato necesita al menos una fuente (por ejemplo F13).",
          }),
      )
      .min(1),
  }),
});

export const collections = { referencias, malla, campoLaboral, faq };
