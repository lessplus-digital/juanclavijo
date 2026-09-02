import type { SectionId } from '@/config/site';

import About from '@/components/sections/About.astro';
import Projects from '@/components/sections/Projects.astro';
import Services from '@/components/sections/Services.astro';
import Stack from '@/components/sections/Stack.astro';
import Contact from '@/components/sections/Contact.astro';

/**
 * Registro de secciones: id → componente.
 *
 * PARA AÑADIR UNA SECCIÓN NUEVA
 * 1. Crea src/components/sections/MiSeccion.astro. Recibe una prop `section`
 *    con { index, eyebrow, title, intro } y debe pintar id={section.id}.
 * 2. Impórtala aquí y añádela al mapa.
 * 3. Añade su id al tipo `SectionId` y una entrada al array `sections`
 *    en src/config/site.ts (ese array manda el orden y la navegación).
 */
export const registry = {
  about: About,
  projects: Projects,
  services: Services,
  stack: Stack,
  contact: Contact,
} satisfies Record<SectionId, unknown>;
