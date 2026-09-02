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
    'Llevo más de 6 años construyendo productos digitales para empresas en España y LATAM. Desarrollo sitios web, plataformas SaaS y automatizaciones con inteligencia artificial que reducen el trabajo manual y generan nuevas oportunidades de negocio.',
    'Trabajo de punta a punta: entiendo el negocio, diseño, desarrollo, despliego y acompaño la evolución del producto después de su entrega. No entrego un repositorio y desaparezco.',
  ],
  location: 'Medellín, Colombia',
  availability: 'Disponible para proyectos',
  email: 'hola@juanclavijo.dev',
  phone: '(+57) 311 329 8122',
  phoneRaw: '+573113298122',
  website: 'www.juanclavijo.dev',
  linkedin: 'https://www.linkedin.com/in/juan-pablo-clavijo',
  /**
   * Foto de perfil.
   * `null` = el sitio usa el retrato tipográfico abstracto (recomendado hasta
   * tener una headshot con luz frontal, fondo neutro y mirada a cámara).
   * Para activarla: pon aquí la ruta dentro de /public, p. ej. '/juan.jpg'.
   */
  photo: null as string | null,
  photoAlt: 'Retrato de Juan Clavijo',
  /** PDF servido desde /public */
  cv: '/CV_JuanClavijo2026.pdf',
} as const;

/** Cifras del hero. Máximo 4 para que respire. */
export const metrics = [
  { value: '6+', label: 'años construyendo' },
  { value: '70%', label: 'menos tiempo de despliegue' },
  { value: '600', label: 'pedidos/mes automatizados' },
  { value: '2', label: 'continentes, un mismo horario' },
] as const;

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
    text: 'Del boceto al dominio en producción. Frontend en React o Astro, backend en .NET o Supabase, y una arquitectura que aguanta cuando el negocio crece.',
    tags: ['React', 'Astro', '.NET', 'Supabase'],
  },
  {
    n: '02',
    title: 'Automatización con IA',
    text: 'Agentes conversacionales, orquestación en n8n e integraciones con LLMs que se comen el trabajo repetitivo: pedidos, soporte, captación y seguimiento.',
    tags: ['n8n', 'OpenAI', 'Claude', 'WhatsApp API'],
  },
  {
    n: '03',
    title: 'Plataformas SaaS',
    text: 'Multi-tenant, suscripciones, paneles en tiempo real y control de acceso. Todo lo que separa una demo bonita de un producto que factura.',
    tags: ['CQRS', 'PostgreSQL', 'Multi-sede', 'Realtime'],
  },
  {
    n: '04',
    title: 'Infraestructura y despliegue',
    text: 'Pipelines, contenedores, dominios, SSL y correo corporativo. Me encargo de que el producto viva, no solo de que compile.',
    tags: ['Docker', 'Azure DevOps', 'Vercel', 'cPanel'],
  },
] as const;

/** Cómo trabajas. Se dibuja como una ruta numerada. */
export const process = [
  {
    step: 'Entender',
    text: 'Antes de escribir código entiendo el negocio: qué duele, qué se repite y qué se mide. De ahí sale el alcance real.',
  },
  {
    step: 'Diseñar',
    text: 'Prototipo la interfaz y el modelo de datos a la vez. Decidir la estructura temprano evita reescribir en el mes tres.',
  },
  {
    step: 'Construir',
    text: 'Entregas cortas y visibles. Cada semana ves algo funcionando, no un informe de avance.',
  },
  {
    step: 'Acompañar',
    text: 'Despliego, mido y ajusto. El proyecto termina cuando el producto se sostiene solo, no cuando se firma la factura.',
  },
] as const;

export const experience = [
  {
    company: 'FI Group',
    role: 'Desarrollador Full Stack',
    place: 'Madrid (remoto)',
    period: 'Jul. 2022 — Actualidad',
    current: true,
    bullets: [
      'Aplicaciones Full Stack con React, TypeScript y .NET 6/8, aplicando arquitectura limpia, CQRS y separación de responsabilidades.',
      'APIs REST y OData en .NET: modelado de datos, migraciones y optimización de consultas en SQL Server con Entity Framework Core.',
      'Procesos automatizados de sincronización de datos e integración con Azure Storage para gestión y versionamiento de archivos.',
      'Optimización de entornos y pipelines con Azure DevOps, Docker y Redis, reduciendo un 70% el tiempo de despliegue.',
      'Participación en la definición de mejoras de producto y experiencia de usuario junto a los equipos de negocio.',
    ],
  },
  {
    company: 'Esstrategia',
    role: 'Desarrollador VR',
    place: 'Medellín · medio tiempo',
    period: 'Oct. 2021 — Abr. 2022',
    current: false,
    bullets: [
      'Experiencias de realidad virtual interactivas en Unity con C#, exportadas a Oculus Quest 2.',
      'Modelado, rigging y animación de assets 3D en Maya.',
      'Programación del flujo de interacción del recorrido con Cinemachine.',
    ],
  },
  {
    company: 'Somos',
    role: 'Desarrollador Web',
    place: 'Madrid (remoto)',
    period: 'Abr. 2020 — Jun. 2022',
    current: false,
    bullets: [
      'Aplicaciones web en React con componentes reutilizables e integraciones a APIs REST.',
      'Sitios en WordPress construidos y personalizados, con integración de APIs y optimización.',
      'Despliegue completo en Hostinger, GoDaddy y cPanel: dominios, certificados SSL, correo corporativo y entornos de producción.',
    ],
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
] as const;

export const stack = [
  {
    group: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Astro', 'HTML', 'CSS'],
  },
  {
    group: 'Backend y datos',
    items: [
      '.NET 6/8',
      'C#',
      'Supabase',
      'SQL Server',
      'PostgreSQL',
      'Entity Framework',
      'OData',
      'Azure Storage',
    ],
  },
  {
    group: 'Automatización e IA',
    items: ['n8n', 'OpenAI', 'Claude', 'Gemini', 'APIs de LLMs', 'WhatsApp Business API'],
  },
  {
    group: 'Infraestructura y otros',
    items: [
      'Vercel',
      'Netlify',
      'Docker',
      'Azure DevOps',
      'Redis',
      'Git',
      'WordPress',
      'SCRUM',
      'cPanel',
      'Unity',
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
  | 'process'
  | 'experience'
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
    title: 'Cosas que existen y funcionan',
    intro:
      'Cada proyecto es un archivo en /src/content/projects. Añade uno nuevo y aparece aquí solo.',
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
    id: 'process',
    nav: 'Proceso',
    index: '04',
    eyebrow: 'Cómo trabajo',
    title: 'De la conversación al despliegue',
    enabled: true,
  },
  {
    id: 'experience',
    nav: 'Trayectoria',
    index: '05',
    eyebrow: 'Dónde he estado',
    title: 'Seis años de producción real',
    enabled: true,
  },
  {
    id: 'stack',
    nav: 'Stack',
    index: '06',
    eyebrow: 'Herramientas',
    title: 'Con qué lo construyo',
    enabled: true,
  },
  {
    id: 'contact',
    nav: 'Contacto',
    index: '07',
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
