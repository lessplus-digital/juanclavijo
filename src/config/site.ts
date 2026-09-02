/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  FUENTE ÚNICA DE CONTENIDO
 *  Todo el texto del sitio vive aquí. Editando este archivo cambia la web
 *  entera: no hace falta tocar componentes ni estilos.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const profile = {
  name: 'Juan Clavijo',
  firstName: 'Juan',
  lastName: 'Clavijo',
  role: 'Desarrollador Web Full Stack',
  /** Frase corta del hero. Se parte en líneas con el separador " / ". */
  headline: 'Construyo productos / digitales que / trabajan solos',
  tagline:
    'Ingeniero Multimedia. Diseño, desarrollo y despliego sitios web, plataformas SaaS y automatizaciones con IA para empresas en España y LATAM.',
  bio: [
    'Soy ingeniero multimedia y llevo seis años construyendo software para empresas en España y Latinoamérica. Empecé haciendo webs, seguí con plataformas y hoy dedico buena parte del tiempo a automatizar con IA lo que antes ocupaba a una persona entera.',
    'Trabajo solo o integrado en el equipo del cliente, y cubro el recorrido completo: producto, diseño, backend, frontend, despliegue y el mantenimiento QA. No hay traspasos que se pierdan por el camino ni un "eso lo ve otro".',
    'Lo que me interesa de un proyecto no es la lista de tecnologías. Es qué deja de doler cuando se pone en producción.',
  ],
  /**
   * Solo alimenta los datos estructurados (SEO local). La ciudad ya no
   * aparece en la web: se quitó del hero y del pie a propósito.
   */
  location: { city: 'Medellín', country: 'CO' },
  /** Píldora del hero. Deliberadamente sin ciudad. */
  availability: 'Disponible para proyectos nuevos',
  email: 'hola@juanclavijo.dev',
  phone: '(+57) 311 329 8122',
  phoneRaw: '+573113298122',
  website: 'www.juanclavijo.dev',
  linkedin: 'https://www.linkedin.com/in/juan-pablo-clavijo',
  /** PDF servido desde /public */
  cv: '/CV_JuanClavijo2026.pdf',
} as const;

/** Cifras del hero. Máximo 4 para que respire. */
export const metrics = [
  { value: '6+', label: 'años construyendo' },
  { value: '35+', label: 'clientes atendidos' },
  { value: '600', label: 'usuarios en aplicaciones' },
  { value: '8', label: 'países atendidos' },
] as const;

/**
 * Sección "Perfil".
 * `statement` es la frase grande de apertura y `facts` la ficha de datos
 * que se pinta como banda, igual que las cifras del hero.
 */
export const about = {
  /** El tramo entre asteriscos se pinta en cursiva y color de acento. */
  statement: 'Entiendo el negocio *antes* de escribir la primera línea de código.',
  countriesLabel: 'He construido producto para equipos en',
  countries: [
    'Colombia',
    'España',
    'Estados Unidos',
    'Argentina',
    'México',
    'Perú',
    'Australia',
    'Chile',
  ],
} as const;

/** Cinta infinita bajo el hero. */
export const marquee = [
  'React',
  'TypeScript',
  '.NET',
  'Astro',
  'Next.js',
  'Supabase',
  'n8n',
  'PostgreSQL',
  'Azure',
  'Agentes de IA',
] as const;

/** Lo que le vendes a un cliente. Añade o quita objetos libremente. */
export const services = [
  {
    n: '01',
    title: 'Producto web a medida',
    text: 'Del boceto al dominio funcionando. Una web o una plataforma hecha para lo que tú vendes, no una plantilla con tu logo encima, y montada para que aguante cuando lleguen diez veces más clientes.',
  },
  {
    n: '02',
    title: 'Automatización con IA',
    text: 'Eso que alguien de tu equipo repite cien veces al mes —contestar, pasar datos de un sitio a otro, hacer seguimiento— puede hacerlo un agente a cualquier hora. Tú decides dónde sigue entrando una persona.',
  },
  {
    n: '03',
    title: 'Plataformas SaaS',
    text: 'Una idea convertida en producto que cobra solo: cada cliente con su cuenta, sus permisos y su suscripción al día. Lo aburrido es justo lo que separa una demo bonita de algo que factura todos los meses.',
  },
  {
    n: '04',
    title: 'Infraestructura y despliegue',
    text: 'Dominios, certificados, copias de seguridad, correo corporativo y el aviso cuando algo falla. La parte que nadie ve, y la razón de que un lunes por la mañana todo siga en pie.',
  },
] as const;

export const education = [
  {
    title: 'Ingeniería Multimedia',
    place: 'Universidad San Buenaventura',
    period: '2017 — 2021',
  },
  {
    title: 'Bootcamp en Desarrollo Web Full Stack',
    place: 'Academlo',
    period: '2021 — 2022',
  },
  {
    title: '+22 certificaciones técnicas',
    place: 'Formación continua',
    period: '2019 — hoy',
  },
] as const;

/**
 * Herramientas, por capas. El orden del array es el orden de la maqueta 3D:
 * arriba lo que ve el visitante, abajo lo que lo sostiene.
 *
 * `icon` es el slug de simple-icons.com (se resuelve al compilar, ver
 * src/config/brands.ts). Si una herramienta no tiene logotipo ahí —las marcas
 * de Microsoft, por ejemplo, no están— se pinta `mark`: dos o tres letras.
 * El nombre siempre va al lado, así que la sigla no tiene que explicarse sola.
 */
export const stack = [
  {
    group: 'Frontend',
    note: 'Lo que ve quien entra',
    items: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextdotjs' },
      { name: 'Astro', icon: 'astro' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'HTML', icon: 'html5' },
      { name: 'CSS', icon: 'css' },
      { name: 'Vite', icon: 'vite' },
    ],
  },
  {
    group: 'Backend y datos',
    note: 'Donde vive la lógica',
    items: [
      { name: '.NET 6/8', icon: 'dotnet' },
      { name: 'C#', mark: 'C#' },
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'Supabase', icon: 'supabase' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'SQL Server', mark: 'SQL' },
      { name: 'Entity Framework', mark: 'EF' },
      { name: 'OData', mark: 'OD' },
      { name: 'Zod', icon: 'zod' },
    ],
  },
  {
    group: 'Automatización e IA',
    note: 'Lo que trabaja solo',
    items: [
      { name: 'n8n', icon: 'n8n' },
      { name: 'Claude', icon: 'claude' },
      { name: 'OpenAI', mark: 'AI' },
      { name: 'Gemini', icon: 'googlegemini' },
      { name: 'WhatsApp Business API', icon: 'whatsapp' },
    ],
  },
  {
    group: 'Infraestructura y entrega',
    note: 'Lo que lo mantiene en pie',
    items: [
      { name: 'Docker', icon: 'docker' },
      { name: 'Vercel', icon: 'vercel' },
      { name: 'Netlify', icon: 'netlify' },
      { name: 'Azure DevOps', mark: 'AZ' },
      { name: 'Redis', icon: 'redis' },
      { name: 'Git', icon: 'git' },
      { name: 'cPanel', icon: 'cpanel' },
      { name: 'WordPress', icon: 'wordpress' },
      { name: 'Unity', icon: 'unity' },
      { name: 'SCRUM', mark: 'SC' },
    ],
  },
] as const;

export const languages = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'B1' },
] as const;

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SECCIONES MODULARES
 *  El orden de este array es el orden real de la página.
 *  `enabled: false` la esconde sin borrar nada. Para añadir una sección nueva:
 *    1. crea src/components/sections/MiSeccion.astro
 *    2. regístrala en src/config/sections.ts
 *    3. añade una entrada aquí
 * ─────────────────────────────────────────────────────────────────────────────
 */
export type SectionId =
  | 'about'
  | 'projects'
  | 'services'
  | 'stack'
  | 'contact';

export interface SectionDef {
  id: SectionId;
  /** Texto del menú. `null` = no aparece en la navegación. */
  nav: string | null;
  /** Número romano/ordinal decorativo del encabezado. */
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
  enabled: boolean;
}

export const sections: SectionDef[] = [
  {
    id: 'about',
    nav: 'Perfil',
    index: '01',
    eyebrow: 'Quién está detrás',
    title: 'Un ingeniero que también diseña',
    enabled: true,
  },
  {
    id: 'projects',
    nav: 'Proyectos',
    index: '02',
    eyebrow: 'Trabajo seleccionado',
    title: 'Algunos proyectos recientes',
    intro:
      'Una muestra de lo que hay en producción, no el catálogo entero. De cada uno: el problema de negocio que había detrás y lo que cambió después.',
    enabled: true,
  },
  {
    id: 'services',
    nav: 'Servicios',
    index: '03',
    eyebrow: 'En qué te puedo ayudar',
    title: 'Cuatro formas de trabajar juntos',
    enabled: true,
  },
  {
    id: 'stack',
    nav: 'Stack',
    index: '04',
    eyebrow: 'Herramientas',
    title: 'Con qué lo construyo',
    intro: 'Cuatro capas, de lo que ve el visitante a lo que lo sostiene por debajo.',
    enabled: true,
  },
  {
    id: 'contact',
    // Fuera del menú a propósito: el botón "Hablemos" de la barra ya apunta aquí.
    nav: null,
    index: '05',
    eyebrow: 'Siguiente paso',
    title: 'Cuéntame qué quieres construir',
    enabled: true,
  },
];

export const meta = {
  title: 'Juan Clavijo — Desarrollador Web Full Stack',
  description:
    'Desarrollador Full Stack en Medellín. Sitios web, plataformas SaaS y automatizaciones con IA para empresas en España y LATAM. React, .NET, Astro y n8n.',
  lang: 'es',
} as const;
