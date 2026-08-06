/**
 * data.js
 * Fuente única de contenido de los proyectos, en español.
 *
 * Para agregar un nuevo proyecto:
 *   1) Copiá uno de los objetos de abajo.
 *   2) Dale un "id" único (sin espacios/acentos) y completá los campos.
 *   3) Poné las imágenes reales en /images/real y apuntá "cover",
 *      "heroImage" y "gallery" hacia ellas.
 *   4) No hace falta tocar el HTML: la grilla del home y la plantilla
 *      de proyecto se renderizan solas a partir de este archivo.
 */

const PROJECTS = [
  {
    id: "bac",
    order: 1,
    title: "BAC",
    category: "App móvil · Motion Design",
    client: "BAC — Banco centroamericano",
    role: "Diseñador Visual, enfocado en Motion Design",
    year: "2025 — 2026",
    summary:
      "Animaciones, transiciones y micro-interacciones para la app de banca móvil de BAC en Centroamérica.",
    problem:
      "La app bancaria necesitaba transiciones y estados de carga más claros: el equipo tenía criterios dispersos para animar cambios de pantalla, flujos de onboarding y confirmaciones sensibles como las transferencias de dinero.",
    process: [
      {
        title: "Importancia",
        text: "Relevancia del Motion Design: qué modelos y referencias considerar antes de definir el sistema."
      },
      {
        title: "Cualidades, conceptos y auditoría",
        text: "Traducir las cualidades de la marca en conceptos de animación, respaldado por investigación y una auditoría del producto existente."
      },
      {
        title: "Herramientas y construcción",
        text: "Definir qué herramientas y flujo de trabajo usar (Adobe After Effects) para producir y documentar cada patrón."
      },
      {
        title: "Entrega",
        text: "Documentación y entrega de cada patrón de animación al equipo de desarrollo, para mantener la implementación fiel al diseño."
      }
    ],
    solution:
      "Se construyó un patrón de transición consistente para toda la navegación —incluyendo la experiencia de onboarding— además de más de 90 animaciones en After Effects para onboardings, bottom sheets, estados vacíos y mensajes. En paralelo, el trabajo de diseño de interfaz cubrió pantallas clave relacionadas con transferencias, manteniendo la jerarquía de información y la alineación con el sistema de diseño del producto.",
    results: [
      "Criterios de transición unificados en todos los estados y pantallas de la app.",
      "Consistencia visual entre diseño y desarrollo en toda la navegación.",
      "Gráficos y layouts de lanzamiento para Android e iOS alineados con la identidad del producto."
    ],
    cover: "../images/real/cover-bac.jpg",
    heroImage: "../images/real/bac-hero.gif",
    galleryColumns: 1,
    gallery: [
      { src: "../images/real/bac-gallery-1.png", alt: "Pantallas de onboarding y cuenta de la app móvil de BAC" },
      { src: "../images/real/bac-gallery-2.png", alt: "Flujo de transferencias de BAC, paso a paso" }
    ]
  },
  {
    id: "clippers",
    order: 2,
    title: "LA Clippers",
    category: "App móvil · UI y sistema de diseño",
    client: "LA Clippers — Intuit Dome, Estados Unidos",
    role: "Diseñador Visual",
    year: "2023 — 2024",
    summary:
      "Diseño de interfaz y sistema de componentes para la experiencia digital del equipo en el nuevo estadio Intuit Dome.",
    problem:
      "El lanzamiento del Intuit Dome necesitaba una app de alto perfil que reflejara la identidad del equipo, con componentes reutilizables que distintos flujos (entradas, eventos, contenido del club) pudieran compartir sin perder consistencia.",
    process: [
      {
        title: "Creación de assets visuales",
        text: "Definir íconos, gráficos e ilustraciones que enriquecen la usabilidad y refuerzan la identidad del equipo."
      },
      {
        title: "Diseño de pantallas UI",
        text: "Diseñar interfaces atractivas y funcionales, construidas alrededor de una experiencia intuitiva y agradable."
      },
      {
        title: "Componentes y consistencia",
        text: "Construir componentes alineados con el sistema de diseño, manteniendo color, tipografía y estilo de imagen consistentes en todo el producto."
      }
    ],
    solution:
      "Se diseñaron elementos de interfaz e ilustraciones a medida, y se desarrollaron componentes reutilizables que mantienen coherentes el color, la tipografía y las imágenes en toda la app —logrando una fuerte integración de la identidad del equipo dentro de un entorno digital de alto perfil.",
    results: [
      "Un sistema de componentes consistente en las distintas secciones de la app.",
      "La identidad del equipo integrada de forma coherente en toda la experiencia digital.",
      "Una base visual escalable para futuras funcionalidades del club."
    ],
    cover: "../images/real/cover-clippers.jpg",
    heroImage: "../images/real/cover-clippers.jpg",
    gallery: [],
    caseStudy: {
      thumb: "../images/real/clippers-case-thumb.jpg",
      full: "../images/real/clippers-case-full.jpg",
      alt: "Documento completo del caso de estudio del proceso de diseño de LA Clippers Intuit Dome"
    }
  },
  {
    id: "alsea",
    order: 3,
    title: "Alsea",
    category: "Web · Sistema de diseño multimarca",
    client: "Alsea — España",
    role: "Diseñador Visual",
    year: "2023",
    summary:
      "Un sistema de diseño escalable para las múltiples marcas de restaurantes operadas por Alsea.",
    problem:
      "Alsea opera marcas globales como Starbucks, Domino's Pizza y Burger King. Cada una necesitaba sus propios assets e interfaces, pero el equipo necesitaba una base compartida para mantener consistencia, usabilidad y velocidad de producción entre marcas.",
    process: [
      {
        title: "Comprensión y contexto",
        text: "Investigación del modelo de negocio de Alsea: experiencia del cliente, adaptación local del producto y sostenibilidad como pilares centrales de la propuesta."
      },
      {
        title: "Librerías",
        text: "Construcción de librerías y bases de UI —sistemas de color, tipografía y estilos— para escalar de baja a alta fidelidad y dar soporte a la colaboración con desarrollo."
      },
      {
        title: "Diseño de pantallas de interfaz",
        text: "Aplicación de las bases a pantallas y assets reales para cada marca dentro del ecosistema Club-by."
      },
      {
        title: "Diseño de pantallas responsivo",
        text: "Creación de layouts flexibles y componentes adaptativos, manteniendo la alineación entre las bases de diseño y la implementación en desarrollo."
      }
    ],
    solution:
      "El sistema resultante permite que múltiples marcas convivan bajo una misma lógica de componentes, con layouts optimizados para distintas resoluciones y una experiencia consistente entre dispositivos, sin perder la identidad individual de cada marca.",
    results: [
      "Un sistema de diseño reutilizable compartido entre varias marcas a la vez.",
      "Experiencias responsivas consistentes en desktop, tablet y mobile.",
      "Menor esfuerzo de diseño al escalar nuevos assets de campaña."
    ],
    cover: "../images/real/cover-alsea.jpg",
    heroImage: "../images/real/alsea-hero.jpg",
    heroBorder: false,
    galleryColumns: 1,
    gallery: [
      { src: "../images/real/alsea-gallery-1.jpg", alt: "Librería de componentes de tarjetas y banners de campaña de Alsea Club-by" },
      { src: "../images/real/alsea-gallery-2.jpg", alt: "Landing page responsiva de Club-by en laptop y mobile" },
      { src: "../images/real/alsea-gallery-3.jpg", alt: "Pantallas de la app móvil de Club-by con menús y contenido de VIPS" }
    ]
  },
  {
    id: "keralty",
    order: 4,
    title: "Keralty",
    category: "App + Web · Investigación UX y UI",
    client: "Keralty — grupo de salud basado en valor, Colombia",
    role: "Diseñador Visual y UX",
    year: "2021 — 2022",
    summary:
      "Investigación de usuarios y diseño de interfaz para productos digitales de salud, con interacción directa con stakeholders.",
    problem:
      "Pacientes y personal clínico describían la app como difícil de navegar: costaba encontrar la información necesaria, y la comunicación con los médicos resultaba poco clara en situaciones que muchas veces son urgentes.",
    process: [
      {
        title: "Etapa de investigación",
        text: "Recolección de comentarios de usuarios y stakeholders. Los pacientes pedían una app más intuitiva y atractiva; el personal médico pedía un acceso más simple y rápido."
      },
      {
        title: "Etapa de benchmarking",
        text: "Revisión de clínicas locales e internacionales para identificar fortalezas visuales y de estructura de información aplicables al producto."
      },
      {
        title: "Perfiles de usuario",
        text: "Definición de perfiles demográficos y objetivos (por ejemplo, María, una mujer de 36 años) para basar las decisiones de diseño en necesidades reales."
      },
      {
        title: "Wireframes y mockups",
        text: "Construcción de wireframes y prototipos de alta fidelidad en Figma para validar flujos antes del desarrollo."
      }
    ],
    solution:
      "Se rediseñó la arquitectura de información para priorizar el acceso rápido a acciones urgentes (agendar una consulta, contactar a un médico), con un lenguaje visual más cálido y confiable, manteniendo comunicación constante con el cliente para validar cada entregable.",
    results: [
      "Una estructura de información más clara para los usuarios de la app en mobile.",
      "Prototipos de alta fidelidad validados con stakeholders antes del desarrollo.",
      "Una base de diseño consistente entre el Command Center, la app de pacientes y la web responsiva."
    ],
    cover: "../images/real/cover-keralty.jpg",
    heroImage: "../images/real/keralty-hero.jpg",
    gallery: [],
    caseStudy: {
      thumb: "../images/real/keralty-case-thumb.jpg",
      full: "../images/real/keralty-case-full.jpg",
      alt: "Documento completo del caso de estudio de investigación UX y diseño de Keralty"
    }
  },
  {
    id: "corphub",
    order: 5,
    title: "Corporate HUB",
    category: "Plataforma web · UX/UI empresarial",
    client: "Glob.AI OS — sistema operativo empresarial de IA de Globant",
    role: "Diseñador UX/UI",
    year: "2026",
    summary:
      "Diseño de la columna vertebral de gobierno de datos para IA empresarial: una iniciativa UX/UI de alcance completo, desde el PRD en blanco hasta el prototipo interactivo.",
    problem:
      "CorpHub es la capa de infraestructura de datos de Glob.AI OS. Sin ella, cada equipo gestionaba sus datos de forma aislada —esquemas inconsistentes, sin trazabilidad, sin reutilización—. El objetivo era diseñar toda la aplicación web, desde la pantalla de inicio y la arquitectura de navegación hasta cada área funcional, trabajando directamente a partir de los PRD, para que los datos pudieran convertirse en un producto gobernado: publicado una vez, consumido en todas partes tanto por personas como por agentes de IA.",
    process: [
      {
        title: "Análisis de PRD",
        text: "Identificar alcance, preguntas abiertas y contradicciones antes de diseñar nada."
      },
      {
        title: "Primero, preguntas",
        text: "Los vacíos volvían al PM como preguntas, no como decisiones de diseño tomadas de forma aislada."
      },
      {
        title: "Prototipo en HTML",
        text: "Mockups interactivos autocontenidos, construidos antes de volcar nada en Figma."
      },
      {
        title: "Entrega en Figma",
        text: "Frames versionados usando componentes Mercury, con cada iteración ubicada a la derecha de la anterior."
      }
    ],
    solution:
      "Se diseñaron seis módulos centrales desde cero: Data Model (catálogo, visor de esquemas ERD/DDL, versionado con diff, flujo de importación), Data Sets (un wizard de 4 pasos para crear productos de datos a partir de una o más fuentes), Client Data Source (registro de fuentes externas —bases de datos, APIs, SaaS y servidores MCP—), Data Store (unidades de almacenamiento aprovisionadas con listado de catálogo y vista de detalle), Ontologies (una capa semántica para conceptos empresariales con relaciones entre entidades y clasificación por dominio), y Home & Navigation (la pantalla de inicio, el sidebar, la topbar global y toda la arquitectura de navegación de Glob.AI OS). Claude estuvo integrado en el flujo de trabajo de principio a fin: un proyecto dedicado reunía cada PRD, spec y nota de reunión como contexto compartido, se usó para identificar contradicciones de alcance y generar listas de preguntas para el PM, potenció el prototipado rápido e interactivo en HTML directamente sobre los tokens de diseño de CorpHub, y ayudó a preparar preguntas técnicas precisas antes de las reuniones de sincronización con ingeniería.",
    results: [
      "Más de 6 áreas funcionales diseñadas desde cero, cada una con su propio prototipo interactivo en HTML antes de la entrega en Figma.",
      "Investigación de usuarios cubriendo 6 perfiles: Data Engineer, PM, Agent Builder, Data Scientist, Tech Manager y Security.",
      "3 sprints activos entregados en paralelo —DataModel, Datasets y Client Sources— sobre un sistema de diseño compartido y versionado.",
      "Un proceso de entrega consistente usando componentes Mercury, manteniendo a diseño e ingeniería alineados sprint tras sprint."
    ],
    cover: "../images/real/cover-corphub.jpg",
    heroImage: "../images/real/cover-corphub.jpg",
    gallery: [],
    caseStudy: {
      thumb: "../images/real/corphub-case-thumb.jpg",
      full: "../images/real/corphub-case-full.jpg",
      alt: "Documento completo del caso de estudio del proceso de diseño de Corporate HUB (Glob.AI OS)"
    }
  }
];
