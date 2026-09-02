import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Colección de proyectos.
 *
 * Cada archivo .md dentro de src/content/projects/ es un proyecto del
 * portafolio. NO genera página de detalle: la tarjeta entera enlaza al sitio
 * real (`url`). Por eso `url` es obligatorio y el cuerpo del .md no se
 * renderiza — todo lo que se ve vive en el frontmatter.
 */
const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      /** Nombre del proyecto tal como se muestra */
      title: z.string(),
      /** Frase corta que acompaña al título */
      kicker: z.string(),
      /** Una o dos frases: qué es y para quién */
      summary: z.string(),
      /** Tu papel en el proyecto */
      role: z.string(),
      year: z.string(),
      /** País del cliente. Se pinta junto al epígrafe. */
      country: z.string(),
      /** Enlace público al proyecto. La tarjeta entera apunta aquí. */
      url: z.string().url(),
      /** Texto del enlace: el dominio, sin protocolo */
      urlLabel: z.string(),
      /** Tres frases cortas: qué resolviste. Se pintan como lista. */
      highlights: z.array(z.string()).default([]),
      /** Tecnologías destacadas */
      tags: z.array(z.string()).default([]),
      /** Resultados medibles. Se pintan como cifras grandes. */
      metrics: z
        .array(z.object({ value: z.string(), label: z.string() }))
        .default([]),
      /** Color de acento: c1 arcilla · c2 musgo · c3 iris · c4 mantequilla */
      accent: z.enum(['c1', 'c2', 'c3', 'c4']).default('c1'),
      /**
       * Cómo se presenta el proyecto.
       *  scene → fila grande a todo lo ancho con una maqueta animada
       *  shot  → tarjeta compacta con la captura del sitio, de dos en dos
       *
       * Las escenas están dibujadas a medida para un producto concreto. Un
       * sitio terminado, que no «hace» nada, se cuenta mejor con su captura
       * que con una animación inventada.
       */
      layout: z.enum(['scene', 'shot']).default('shot'),
      /**
       * Qué maqueta animada usar. Obligatorio con `layout: scene`.
       * chat = Plateo · simulator = SPL · access = SOMOS Connection
       */
      scene: z.enum(['chat', 'simulator', 'access']).optional(),
      /** Captura dentro de src/assets/. Obligatoria con `layout: shot`. */
      shot: image().optional(),
      /** Orden de aparición: menor primero */
      order: z.number().default(99),
      /** Ocultar sin borrar el archivo */
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
