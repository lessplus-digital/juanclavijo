import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';

/**
 * Logotipos de marca para la sección de herramientas.
 *
 * Los saca de `simple-icons` EN TIEMPO DE COMPILACIÓN: lee el .svg del paquete
 * y devuelve solo la `d` del trazado, que se incrusta en el HTML. Al sitio no
 * llega ni el paquete ni una petición a un CDN — igual que con las tipografías.
 *
 * Para añadir una herramienta basta con poner su `icon: '<slug>'` en el array
 * `stack` de site.ts; el slug es el de simple-icons.com. Si no existe, no pasa
 * nada: la ficha pinta las iniciales del campo `mark`.
 *
 * Se resuelve cada archivo por su especificador (`simple-icons/icons/x.svg`),
 * no por la carpeta del paquete: el `exports` de simple-icons no publica su
 * package.json, así que calcular la ruta a mano funcionaba al compilar pero
 * reventaba en `astro dev`.
 */

const require = createRequire(import.meta.url);

interface IconMeta {
  slug: string;
  title: string;
  hex: string;
}

const meta: Map<string, IconMeta> = new Map(
  (JSON.parse(readFileSync(require.resolve('simple-icons/icons.json'), 'utf8')) as IconMeta[]).map(
    (i) => [i.slug, i],
  ),
);

export interface Brand {
  title: string;
  /** Trazado del logo, sobre un lienzo de 24×24. */
  path: string;
  /**
   * Color de marca, o `null` si es un logotipo monocromo (Next.js, Vercel,
   * Unity…). Esos se pintan con la tinta del tema: su hex es negro o blanco
   * puro y desaparecería en uno de los dos temas.
   */
  hex: string | null;
}

const cache = new Map<string, Brand | null>();

/** Luminancia relativa. Solo se usa para descartar negros y blancos puros. */
function tooExtreme(hex: string): boolean {
  const n = parseInt(hex, 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  const l = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return l < 0.06 || l > 0.88;
}

export function getBrand(slug: string | undefined): Brand | null {
  if (!slug) return null;
  if (cache.has(slug)) return cache.get(slug)!;

  let brand: Brand | null = null;
  const info = meta.get(slug);

  if (info) {
    const svg = readFileSync(require.resolve(`simple-icons/icons/${slug}.svg`), 'utf8');
    // simple-icons garantiza un único <path> por icono en un lienzo 24×24.
    const d = svg.match(/\sd="([^"]+)"/)?.[1];
    if (d) brand = { title: info.title, path: d, hex: tooExtreme(info.hex) ? null : `#${info.hex}` };
  }

  cache.set(slug, brand);
  return brand;
}
