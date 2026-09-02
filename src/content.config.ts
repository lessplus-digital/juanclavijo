import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Colección de proyectos.
 * Cada archivo .md dentro de src/content/projects/ se convierte en una tarjeta
 * del portafolio y en su propia página de detalle (/proyectos/<nombre-archivo>).
 */
const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    /** Nombre del proyecto tal como se muestra */
    title: z.string(),
    /** Frase corta que acompaña al título en la tarjeta */
    kicker: z.string(),
    /** Una o dos frases: qué es y para quién */
    summary: z.string(),
    /** Tu papel en el proyecto */
    role: z.string(),
    year: z.string(),
    /** Enlace público al proyecto (opcional) */
    url: z.string().url().optional(),
    /** Texto del enlace: por defecto el dominio */
    urlLabel: z.string().optional(),
    /** Tecnologías destacadas */
    tags: z.array(z.string()).default([]),
    /** Resultados medibles. Se pintan como cifras grandes. */
    metrics: z
      .array(z.object({ value: z.string(), label: z.string() }))
      .default([]),
    /** Color de acento: c1 arcilla · c2 musgo · c3 iris · c4 mantequilla */
    accent: z.enum(['c1', 'c2', 'c3', 'c4']).default('c1'),
    /** Imagen de portada dentro de /public (opcional). Si falta se dibuja un patrón generativo. */
    cover: z.string().optional(),
    /** Marca la tarjeta grande de la retícula */
    featured: z.boolean().default(false),
    /** Orden de aparición: menor primero */
    order: z.number().default(99),
    /** Ocultar sin borrar el archivo */
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
