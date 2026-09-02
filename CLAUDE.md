# CLAUDE.md

Portafolio personal de Juan Clavijo (desarrollador Full Stack, Medellín). Sitio
estático en Astro, en español, pensado para enseñar a clientes.

## Comandos

```bash
npm run dev      # servidor local en http://localhost:4321
npm run build    # astro check + build estático a dist/
npm run preview  # sirve dist/ para revisar el build
```

`npm run build` corre `astro check` antes de compilar: si hay un error de tipos,
el build falla. Es deliberado.

## Decisiones que no hay que deshacer

- **Sin framework de UI y sin Tailwind.** Todo es Astro + CSS propio. Los
  componentes usan `<style>` con ámbito local; lo compartido vive en
  `src/styles/global.css`. Esto es lo que evita que el sitio se parezca a
  cualquier plantilla.
- **Tres tipografías variables, servidas en local** vía `@fontsource-variable`
  (nada de CDN de fuentes):
  - `Fraunces Variable` — titulares. Se usa siempre con los ejes `SOFT 100` y
    `WONK 1` (token `--wonk-on`): es lo que le da el aire humano y redondeado.
  - `Outfit Variable` — texto corrido e interfaz.
  - `Bricolage Grotesque Variable` — etiquetas, cifras y microtexto.
- **Paleta cálida hueso/tinta** con cuatro acentos: `--c1` arcilla, `--c2`
  musgo, `--c3` iris, `--c4` mantequilla. Nada de morado degradado genérico.
- **La malla de color de fondo (`.aurora`) va muy baja de opacidad**
  (`--glow`). Subirla convierte el sitio en un degradado de plantilla; se probó
  y se descartó.
- **Todo el movimiento se apaga con `prefers-reduced-motion`.** Cualquier
  animación nueva debe respetarlo.

## Estructura

```
src/
  config/
    site.ts        ← TODO el contenido y el orden de las secciones
    sections.ts    ← registro id → componente de sección
  content/
    projects/*.md  ← un archivo por proyecto del portafolio
  content.config.ts← esquema (zod) de la colección de proyectos
  components/
    sections/      ← una sección de la home por archivo
    ...            ← Nav, Footer, Hero, Seal, Marquee, ProjectCard, etc.
  layouts/Base.astro
  pages/
    index.astro
    proyectos/[id].astro
    404.astro
  styles/global.css
public/             ← favicon, robots.txt y el CV en PDF
```

## Cómo se edita el contenido

Casi todo se cambia en **`src/config/site.ts`**: perfil, cifras del héroe,
servicios, proceso, trayectoria, formación, stack y textos de cada sección.
No hace falta tocar componentes.

### Añadir un proyecto

Copia `src/content/projects/_plantilla.md`, renómbralo (el nombre del archivo
es la URL) y pon `draft: false`. Aparece solo en la retícula del portafolio y
genera su página en `/proyectos/<nombre-archivo>/`. Campos en
`src/content.config.ts`. Si no pones `cover`, se dibuja un patrón generativo
(`ProjectArt.astro`, 4 variantes que rotan por orden).

### Añadir una sección nueva

1. Crea `src/components/sections/MiSeccion.astro`. Recibe la prop `section` y
   debe pintar `id={section.id}` en el `<section class="section">`.
2. Regístrala en `src/config/sections.ts`.
3. Añade su id al tipo `SectionId` y una entrada al array `sections` de
   `src/config/site.ts` — ese array manda el **orden** y el **menú**.

Para esconder una sección sin borrarla: `enabled: false`. Para sacarla del menú
pero dejarla en la página: `nav: null`.

## Foto de perfil

`profile.photo` está en `null` a propósito: el héroe usa el sello tipográfico
(`Seal.astro`) en lugar de un retrato. Si algún día hay una headshot decente
(luz frontal, fondo neutro, mirada a cámara), basta con ponerla en `/public` y
escribir la ruta en `profile.photo`; el sello la recorta en la forma orgánica
sin tocar nada más.

## Detalles técnicos con trampa

- **`[data-reveal]` con `clip-path`:** el recorte va siempre en los **hijos**
  (`[data-reveal='mask'] > *`), nunca en el nodo observado. Un `clip-path` sobre
  el propio elemento deja su rectángulo de intersección vacío y el
  `IntersectionObserver` no llega a dispararse.
- **El héroe no usa `data-reveal`,** usa la clase `.rise` (animación al cargar).
  Lo que está sobre el pliegue no debe depender de que el usuario haga scroll.
- **Transiciones entre páginas:** son las nativas del navegador
  (`@view-transition { navigation: auto }` en `global.css`). No se usa
  `ClientRouter` de Astro, así que los `<script>` de cada componente corren de
  forma normal en cada carga.
- **Cambio de tema:** `document.startViewTransition` con un círculo que se
  expande desde el botón (`html.theme-swap` + `--tx/--ty`). Hay respaldo directo
  si el navegador no lo soporta.
- **El script inline de `Base.astro` fija el tema antes de pintar.** No lo
  muevas a un módulo o volverá el destello blanco.
- **La barra de progreso** usa `animation-timeline: scroll()` donde existe, con
  respaldo en JS.

## Al tocar diseño

Verificar siempre en los dos temas y en los tres anchos: 390 (móvil), 820
(tablet) y 1440 (escritorio). Los puntos de quiebre reales del layout están en
760px, 860px, 900px y 1040px.
