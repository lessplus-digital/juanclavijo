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
  - `Archivo Variable` — titulares, con ancho ligeramente expandido
    (`--display-fvs: 'wdth' 108`) y peso `--display-weight: 640`. Tiene
    itálica real, que es lo que usa la frase de acento del hero.
  - `Outfit Variable` — texto corrido, botones e interfaz.
  - `Bricolage Grotesque Variable` — etiquetas, cifras y microtexto.
  - Hubo una versión previa con `Fraunces` (serif blanda con ejes SOFT/WONK)
    y se descartó: el cliente la encontró demasiado redonda. No volver a ella.
- **Paleta cálida hueso/tinta** con cuatro acentos: `--c1` arcilla, `--c2`
  musgo, `--c3` iris, `--c4` mantequilla. Nada de morado degradado genérico.
- **La malla de color de fondo (`.aurora`) va muy baja de opacidad**
  (`--glow`). Subirla convierte el sitio en un degradado de plantilla; se probó
  y se descartó.
- **Todo el movimiento se apaga con `prefers-reduced-motion`.** Cualquier
  animación nueva debe respetarlo.
- **El sitio arranca SIEMPRE en claro.** `data-theme="light"` va escrito en el
  `<html>` y el oscuro es una elección explícita que se guarda en
  `localStorage`. No hay bloques de `prefers-color-scheme`: si añades uno,
  rompes esta decisión.
- **Nada de efecto magnético en los botones.** Se probó y se sintió inestable.
  La interacción es la etiqueta que rueda (`Btn.astro`) más el relleno de
  acento, ambas solo con `transform`.
- **La barra de navegación no se esconde al hacer scroll.** Ese salto se
  percibía brusco. Solo aparece el fondo, animando la opacidad de `.nav::before`
  (animar `backdrop-filter` directamente producía el tirón).
- **El portafolio no tiene páginas de detalle.** Al pulsar una tarjeta se
  abre el sitio real del cliente en una pestaña nueva. Todo lo que se cuenta
  del caso cabe en el frontmatter del `.md`; el cuerpo del archivo no se
  renderiza. Se probó una página por proyecto y era un rodeo: el visitante
  quiere ver el sitio, no leer una ficha.
- **Ni carrusel ni retícula uniforme.** Un carrusel escondería casi todo el
  portafolio. Los productos con maqueta animada (`layout: scene`) ocupan una
  fila entera alternando el lado; los sitios terminados (`layout: shot`) van de
  dos en dos con su captura. **Hoy los tres proyectos son escenas** y el
  segundo grupo sale vacío —ni bloque de capturas ni línea de separación—; el
  camino de `shot` sigue vivo para el siguiente proyecto que no tenga nada que
  animar. Cuando queda UNA sola captura, la retícula de dos columnas la dejaba
  en la mitad izquierda con un hueco al lado: en ese caso pasa a fila (`solo`
  en `ProjectShot`), imagen a un lado y texto al otro.
- **Se quitó BD Welsh.** Era la cuarta ficha, con captura y sin nada que
  enseñar en movimiento, y al lado de tres escenas se leía como relleno. Está
  en el historial de git si hiciera falta.
- **Las escenas se dibujan a mano, una por producto.** No hay motor genérico
  de maquetas ni patrón generativo de relleno (hubo uno, `ProjectArt`, y se
  quitó: decoraba sin decir nada). Una web que no «hace» nada se cuenta con su
  captura, quieta y grande.
- **La ciudad no se muestra en la web.** Ni en el hero ni en el pie. Vive solo
  en `profile.location`, que alimenta los datos estructurados de SEO local.
- **Los servicios van en retícula 2×2, sin etiquetas de tecnología.** Eran
  cuatro filas a lo ancho con las etiquetas alineadas a la derecha: ocupaban
  el doble de alto y dejaban un vacío grande en esa columna. Las tecnologías
  se cuentan enteras en «Con qué lo construyo», así que aquí sobraban. El
  número va en la misma línea del titular y el texto sangra hasta él.

## Estructura

```
src/
  config/
    site.ts        ← TODO el contenido y el orden de las secciones
    sections.ts    ← registro id → componente de sección
    brands.ts      ← logotipos de simple-icons, resueltos al compilar
  assets/          ← capturas de los proyectos (las optimiza Astro)
  content/
    projects/*.md  ← un archivo por proyecto del portafolio
  content.config.ts← esquema (zod) de la colección de proyectos
  components/
    sections/      ← una sección de la home por archivo
    scenes/        ← maquetas animadas del portafolio (una por producto)
    ...            ← Nav, Footer, Hero, Orb, Marquee, ProjectRow, ProjectShot…
  layouts/Base.astro
  pages/
    index.astro
    404.astro
  styles/global.css
public/             ← favicon, robots.txt, el CV en PDF y LogoPlateo.svg
```

## Cómo se edita el contenido

Casi todo se cambia en **`src/config/site.ts`**: perfil, cifras del héroe,
servicios, formación, stack y textos de cada sección. No hace falta tocar
componentes.

### Añadir un proyecto

Copia `src/content/projects/_plantilla.md`, renómbralo (el nombre no genera
URL) y pon `draft: false`. Campos en `src/content.config.ts`.

Lo normal es `layout: shot`: deja la captura en `src/assets/` y apúntala desde
`shot:`. El proyecto cae en la retícula de dos columnas. `layout: scene` es
para productos con maqueta animada propia, y hoy hay tres escenas (`chat`,
`simulator` y `access`); no reutilices una para un proyecto que no la merece.

El `order` manda la numeración, que es continua entre los dos grupos.

### Añadir una herramienta al stack

En el array `stack` de `site.ts`, dentro de la capa que le toque. El campo
`icon` es el slug de **simple-icons.com** (busca la marca allí y copia el de la
URL). Si la marca no está en el catálogo —las de Microsoft, por ejemplo, no
están— pon `mark` con dos o tres letras y se pintan como iniciales.

```ts
{ name: 'Prisma', icon: 'prisma' }   // logotipo real
{ name: 'SQL Server', mark: 'SQL' }  // iniciales
```

### Añadir una sección nueva

1. Crea `src/components/sections/MiSeccion.astro`. Recibe la prop `section` y
   debe pintar `id={section.id}` en el `<section class="section">`.
2. Regístrala en `src/config/sections.ts`.
3. Añade su id al tipo `SectionId` y una entrada al array `sections` de
   `src/config/site.ts` — ese array manda el **orden** y el **menú**.

Para esconder una sección sin borrarla: `enabled: false`. Para sacarla del menú
pero dejarla en la página: `nav: null`.

## El campo de blobs del hero

No hay foto ni monograma: el hero lleva `Orb.astro`, seis masas líquidas que
se funden. Hubo tres intentos descartados por el cliente — retrato fotográfico,
sello tipográfico con las iniciales JC y una única esfera con satélites.
**No volver a ninguno**; el nombre ya está en la barra de navegación.

Cómo está hecho:

- Las seis masas comparten `filter: url(#orb-goo)`. El filtro solo toca el
  canal alfa (última fila de `feColorMatrix`), así que las siluetas se funden
  pero cada masa conserva su degradado.
- **El modelado va FUERA del filtro** (`.orb__sheen`). Dentro se difumina y el
  conjunto queda plano: se probó y no funciona.
- **El paralaje del puntero va en la propiedad `translate`, no en
  `transform`.** Los keyframes ya usan `transform`; `translate` es una
  propiedad independiente y las dos se componen sin pisarse. Cada masa tiene su
  `--depth` (1 a 2.9): las pequeñas se mueven más y el grupo gana volumen. Un
  bucle de `requestAnimationFrame` interpola hacia el objetivo y se apaga solo
  al llegar.
- **Nunca tocar la `animation-duration` de una animación en marcha.** Una
  versión anterior la aceleraba al pasar el ratón: el navegador recalcula la
  posición en el timeline y el bucle pega un salto muy visible. Esa misma
  versión inclinaba el grupo en 3D y la rotación dejaba una costura.
- **Recorridos del 14 al 22% con duraciones de 18 a 25s, tres paradas por
  vuelta.** Con recorridos más cortos o duraciones más largas parece
  congelado; con más, se siente brusco. Las tres paradas evitan que el
  movimiento sea una ida y vuelta sobre sus propios pasos.
- **La gama es cálida (`--c1` y `--c4`) con toques de `--c3`.** Mezclar
  `--c2` (musgo) con el iris daba un azul verdoso apagado que rompía el grupo.
- El campo se sale de su celda con márgenes negativos (`.hero__orb`): dentro
  de la columna se leía como "un objeto a la izquierda y otro a la derecha".
  El desbordamiento lo recorta `overflow-x: clip` del `body`, no genera
  scroll horizontal (verificado).
- **No hay indicador de "scroll"** en el margen derecho: el campo de blobs
  ocupa ahora esa franja y quedaba encima, ilegible.

## Las escenas del portafolio

Los tres proyectos llevan maqueta animada: `SceneChat` (Plateo, la conversación
de WhatsApp y la comanda que se escribe sola), `SceneSimulator` (SPL, el
simulador usándose solo) y
`SceneAccess` (SOMOS, el widget de accesibilidad: el botón de la esquina, el
panel y la página cambiando opción a opción). Son CSS puro — ni GIF, ni vídeo,
ni JS de animación.

- **Lienzo fijo de 52.63 × 42.1em (10/8).** `ProjectScene` monta el escenario:
  es un contenedor de consulta y fija el `font-size` con
  `max(1.9cqw, 2.375cqh)`, así que **dentro de una escena todo se mide en
  `em`**. Un solo `px` y la maqueta se rompe al cambiar de ancho. El panel
  (`.pj__art`) lleva `aspect-ratio: 10/8`: si lo cambias, cambia el lienzo.
- **Cuidado con poner `font-size` en una caja cuya geometría importa.** Los
  `em` de `width`, `height`, `margin` y de los desplazamientos absolutos se
  miden con el `font-size` del propio elemento. Pasó con el botón del
  simulador: al llevar `font-size`, su alto y su margen se encogían y el
  puntero pulsaba fuera. El tamaño del texto va en un hijo.
- **Un solo ciclo de 14s por escena y NADA de `animation-delay`.** Cada pieza
  lleva sus propios porcentajes. `SceneChat` usaba retardos y se rehízo por
  esto: el retardo desplaza también el reinicio, así que cada pieza se apagaba
  por su cuenta y media vuelta el teléfono estaba vacío.
- **Construir → PARARSE → reiniciar.** Las tres escenas montan su historia,
  **se quedan quietas con todo puesto** hasta el 88% y se apagan juntas en el
  90%. Esa parada con la escena terminada es lo que hace que se lean: un bucle
  que nunca descansa no se deja mirar.
- **Una propiedad que solo aparece en UN fotograma interpola desde el 0%.** Si
  declaras `background` únicamente en el tramo encendido, el navegador lo
  interpola desde el valor base del elemento durante todo lo anterior. Pasó con
  los puntos de los pasos de la comanda: se teñían de menta media vuelta antes
  de tocarles. Va en los tres tramos o en ninguno.
- **Un chat crece hacia arriba.** El registro de `SceneChat` va anclado abajo y
  cada mensaje vive en un `.row` que abre de `grid-template-rows: 0fr` a `1fr`:
  cerrado NO ocupa alto, así que la pila empuja de verdad. Con opacidad sola,
  los cinco mensajes reservaban su hueco desde el principio y se veía una
  columna de huecos. El margen del globo va DENTRO del hijo con
  `overflow: hidden`, o los huecos vuelven por la puerta de atrás.
- **Dos objetos por escena, no tres.** `SceneChat` tenía teléfono, panel de
  cocina con estadísticas y una tarjeta suelta de «traspaso a humano»: tres
  cosas contando tres historias y el teléfono —que es el producto— perdiendo.
  Ahora manda el chat y la comanda solo enseña lo que el chat produce.
- **Nada de `<a>` dentro de una escena.** La tarjeta entera de `ProjectRow` es
  un enlace, y el analizador de HTML CIERRA el `<a>` exterior en cuanto
  encuentra otro dentro: el DOM se parte, la escena se sale de su celda y la
  sección entera se descuadra. La maqueta de SOMOS lleva menú y enlaces, y son
  `<span>`. La escena es `aria-hidden`, así que no pierde nada.
- **Un cambio de color que toca media escena va en `@property`.** El contraste
  alto de `SceneAccess` cambia fondo, tinta, acento y líneas de una decena de
  elementos: las seis variables se registran con `@property` (`<color>`,
  `inherits: true`) y se animan UNA vez sobre la raíz de la página maquetada,
  en vez de escribir una decena de `@keyframes` gemelos.
- **La regla de pausa de una escena va con `!important`, y no es adorno.** Es
  `.ac:not([data-live]) *`, así que cualquier pieza con un selector más
  específico —`.sw--1 .sw__track i`, `.st__nav span::after`— la gana; y como
  esas piezas declaran `animation:` en forma corta, la forma corta les
  devuelve `animation-play-state: running`. Sin el `!important`, los
  interruptores y los subrayados de SOMOS seguían corriendo fuera de pantalla
  mientras el resto esperaba en el 0%, y al entrar la escena llegaban con
  medio ciclo de ventaja: **bajando desde arriba se veía desfasada y
  recargando encima de ella, perfecta.** Al añadir una pieza con selector
  compuesto no hay nada que tocar; el `!important` ya la cubre.
- **`animation-play-state` no llega a los pseudoelementos con `*`.** Si una
  escena anima un `::before` o un `::after` (los subrayados de SOMOS), hay que
  nombrarlos en la regla de pausa o seguirán animándose fuera de pantalla.
- **Un puntero se anima con `--ease-io`, nunca con `--ease-out`.**
  `--ease-out` es `cubic-bezier(0.16, 1, 0.3, 1)`: recorre casi todo el trayecto
  en el primer quinto del tramo. El puntero de SceneAccess aparecía de golpe
  sobre el interruptor y se quedaba parado hasta el clic; como los tramos no
  miden todos lo mismo, la espera cambiaba de una fila a otra y la escena se
  leía a destiempo unas veces sí y otras no. Un puntero acelera y frena.
- **El clic va en el primer tercio de la parada, no al final.** El ritmo de
  cada interacción es *llega · asienta · pulsa · cambia · se va*, y lo que
  cambia tiene que TERMINAR de cambiar antes de que el puntero se marche. En
  SceneAccess el puntero pulsaba en el 23% y se iba en el 23.6% mientras el
  mando del interruptor seguía cruzando hasta el 24.6%: el efecto llegaba
  después que su causa.
- **Las coordenadas del puntero del simulador son geometría, no magia.** Están
  calculadas sobre la retícula del formulario y anotadas en la cabecera del
  archivo. Si tocas la altura de `.f`, el ancho de `.sim__form` o el tamaño de
  `.f__opts`, hay que recalcular `@keyframes sim-cursor`.
- **Nada que esté oculto puede ocupar sitio en el flujo.** El indicador de
  «escribiendo» iba dentro de la columna del chat y dejaba dos huecos
  permanentes durante los doce segundos en los que no se ve. Va absoluto.
- **Las escenas se pausan fuera de pantalla.** Un `IntersectionObserver` pone
  `data-live` en la raíz de cada escena y el CSS arranca con
  `animation-play-state: paused`. Cuatro maquetas animadas a la vez fuera de
  la vista no valen la batería.
- **Con `prefers-reduced-motion` cada escena se congela en su estado final**,
  no en el inicial: la conversación completa, la comanda ya en el panel, la
  estimación calculada. Un fotograma cero es una tarjeta vacía.
- **La paleta de una escena es la de la marca del cliente**, no la del sitio, y
  no cambia con el tema: la maqueta representa un producto real. Plateo va en
  menta sobre azul noche; el simulador en ámbar y violeta sobre papel claro, a
  propósito lejos del verde de Plateo para que no se confundan.
- **Las capturas viven en `src/assets/`, nunca en `public/`.** Se pintan con
  `<Image>`, que las convierte a webp (de 1 MB a 45 kB). Ojo: los estilos con
  ámbito no llegan al `<img>` que pinta `<Image>` por clase; hay que entrar
  desde el envoltorio con `:global(img)`.

## El campo de logotipos

La sección «Con qué lo construyo» es una nube de treinta y dos logotipos
sueltos flotando en 3D, cada uno con su propio movimiento.

- **Nada de tarjetas, filas ni retículas.** Se probó una pila de cuatro losas
  en perspectiva, una por capa, y el cliente la descartó: quería los iconos
  regados y libres, no cajas moviéndose. Lo que se descartó es la caja, no la
  profundidad.
- **Lo que agrupa es el color y la profundidad, no la posición.** Cada capa
  tiene su acento —la leyenda de arriba lo declara— y su franja de Z: el
  frontend flota cerca del visitante, la infraestructura queda al fondo, más
  pequeña y más apagada. Las posiciones en X e Y son libres. Si algún día
  quitas la leyenda, el grupo deja de leerse.
- **Las posiciones se calculan al compilar, con semilla fija** (`SEED` en
  Stack.astro). Una retícula invisible con un empujón aleatorio dentro de cada
  celda: parece regado pero nada se solapa, y el cuadro es idéntico en cada
  build. Cambiar `SEED` reparte todo de nuevo.
- **En móvil el reparto es otro** (4×8 en vez de 8×4), con menos dispersión y
  menos amplitud de deriva (`--amp`). Con los valores de escritorio, en una
  columna estrecha los logos se montaban unos sobre otros.
- **Una sola animación para los treinta y dos.** `@keyframes drift` toma la
  amplitud, la duración y el retardo de las variables de cada logo, así que no
  hay dos sincronizados sin escribir treinta y dos animaciones.
- **Los logotipos se resuelven al compilar** (`src/config/brands.ts`, con el
  paquete `simple-icons`). Al HTML llega solo la `d` del trazado: ni paquete
  en el cliente, ni CDN, ni peticiones, igual que con las tipografías. Se
  resuelve **cada .svg por su especificador** (`simple-icons/icons/x.svg`) y no
  calculando la carpeta del paquete: su `exports` no publica el package.json,
  así que la ruta a mano funcionaba en `build` y reventaba en `dev`.
- **En reposo los logos van teñidos del acento de su capa; el color de marca y
  el nombre solo aparecen al pasar el ratón.** Treinta y dos logotipos a todo
  color se comen la paleta cálida del sitio.
- **Los logotipos negros o blancos puros se pintan con la tinta del tema.**
  Next.js, Vercel o Unity desaparecerían en uno de los dos temas. Lo decide
  `brands.ts` por luminancia, no una lista a mano.
- **El reparto de propiedades no es arbitrario:** `translate` lleva el sitio en
  Z y la deriva; `transform` lleva el salto al pasar el ratón. Son propiedades
  distintas y se componen sin pisarse.
- **La retícula va metida hacia dentro del campo** (`.field__rig` con `inset`).
  La perspectiva empuja hacia fuera los logos de delante que caen cerca del
  borde, y sin ese margen se salían por abajo.
- **`preserve-3d` se come el puntero de lo que queda detrás.** En un contexto
  3D los hijos se ordenan por su posición, no por el árbol: los logos con Z
  negativa quedan DETRÁS del plano de `.field__rig`, así que era el propio rig
  quien recibía el hover y las dos capas del fondo —15 de los 32 logos— no
  reaccionaban. Se arregla con `pointer-events: none` en el rig y `auto` en
  cada logo. Si algún día metes otro elemento envolvente dentro del campo,
  vuelve a pasar.
- **`z-index` no sirve para nada dentro de `preserve-3d`.** Para que la
  etiqueta de un logo del fondo no la tape uno más cercano, al pasar el ratón
  el logo salta a un plano fijo: `translateZ(calc(230px - var(--z)))`. Restar
  su propia Z lo deja a la misma profundidad venga de la capa que venga.
- **La etiqueta va fuera del flujo.** Estaba como segunda fila de la retícula
  del logo y, aunque fuera invisible, ocupaba sitio: con nombres largos
  («WhatsApp Business API») la caja del logo se ensanchaba muchísimo y el hover
  saltaba a un palmo de la ficha.
- **El paralaje del puntero usa el mismo patrón que el hero:** un bucle de
  `requestAnimationFrame` que interpola hacia el objetivo y se apaga solo al
  llegar. La profundidad de cada logo hace el resto — los de delante se
  desplazan más que los del fondo sin una línea extra.

## Detalles técnicos con trampa

- **El contraste de la píldora del menú es geométrico, no por clase.** Sobre
  `.nav__links` hay una copia de las etiquetas en color inverso
  (`.nav__mask`) recortada con `clip-path` al rectángulo de la píldora. Antes
  el color lo daba `[data-active]`, pero la píldora también sigue al puntero:
  las dos cosas se desincronizaban y el texto quedaba negro sobre negro o
  blanco sobre blanco. La copia se recorta con las mismas `--px`/`--pw` y la
  misma duración, así que van pegadas incluso a mitad del deslizamiento. Si
  cambias la métrica de `.nav__links a`, cámbiala también en `.nav__mask span`
  o el texto se verá doble.
- **Medidas de titular en `em`, no en `ch`.** Un `max-width` en `ch` sobre un
  contenedor lo calcula con el cuerpo de texto, no con el del titular: los
  títulos de sección rompían en tres líneas con huérfanas. `.head__title` usa
  `13em`, relativo a su propio tamaño.
- **Los estilos con ámbito no llegan a los componentes hijos.** Si pasas una
  clase a un `<Componente />` que no tiene `<style>` propio, Astro no le pone
  el atributo de ámbito y la regla nunca aplica. Pasó con `.nav__cta` sobre
  `Btn`: la solución es envolverlo en un elemento del propio archivo.

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

- **Las dos paletas NO son simétricas, y tiene que ser así.** Sobre fondo
  oscuro un texto claro se percibe más fino y más apagado que su equivalente
  exacto en claro: el mismo cociente de contraste se lee peor. `--ink-3` daba
  4.21:1 en oscuro y 3.46:1 en claro —mejor número en oscuro— y aun así las
  etiquetas pequeñas se caían solo en oscuro. Por eso los grises y las líneas
  del bloque `[data-theme='dark']` van más altos que sus pares claros. No los
  iguales «por coherencia».
- **Las fichas de Servicios no tienen relleno**: son un borde y nada más. En
  oscuro, `--line` es lo único que las dibuja, así que bajarla las borra.
